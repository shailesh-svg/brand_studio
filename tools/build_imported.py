#!/usr/bin/env python3
"""
build_imported.py — convert every approved .pptx into EDITABLE deck data for the
Brand Studio, written to studio/imported-decks.js (window.NT_IMPORTED).

Each deck becomes { w, h, name, slides:[ {bg, shapes:[ ... ]} ] } where every shape
is absolute (px) and text shapes carry their runs (for faithful rendering) plus an
`tx.orig` editable string. The Studio renders these as frames whose text is
click-to-edit, draggable, resizable and exportable.

Reuses the parser helpers from pptx_to_html.py so the HTML replica and the editable
import stay in sync. macOS / any OS (no rendering needed here).

Usage:  python tools/build_imported.py
"""
import base64, glob, json, os, re, sys, zipfile
import xml.etree.ElementTree as ET
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import pptx_to_html as P   # NS, px, PT, color_of, fill_css, Ctx, get_xfrm, load_media, ln

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'uploads', 'approved')
OUT = os.path.join(ROOT, 'studio', 'imported-decks.js')
NS = P.NS

def slug(name):
    s = ''.join(c if c.isalnum() else '-' for c in os.path.splitext(name)[0].lower())
    return '-'.join(filter(None, s.split('-')))

def title_of(name):
    return ' '.join(os.path.splitext(name)[0].replace('_',' ').replace('-',' ').split())

def parse_para(p):
    pPr = p.find('a:pPr', NS)
    algn = (pPr.get('algn') if pPr is not None else None) or 'l'
    a = {'l':'left','ctr':'center','r':'right','just':'justify'}.get(algn, 'left')
    lh = None; mt = 0; mb = 0; bu = None
    if pPr is not None:
        lns = pPr.find('a:lnSpc', NS)
        if lns is not None:
            pct = lns.find('a:spcPct', NS); pts = lns.find('a:spcPts', NS)
            if pct is not None: lh = round(int(pct.get('val'))/100000.0, 3)
            elif pts is not None: lh = '%spx' % P.px(int(pts.get('val'))*127)
        sa = pPr.find('a:spcAft/a:spcPts', NS); sb = pPr.find('a:spcBef/a:spcPts', NS)
        if sa is not None: mb = round(int(sa.get('val'))/100.0*P.PT, 1)
        if sb is not None: mt = round(int(sb.get('val'))/100.0*P.PT, 1)
        if pPr.find('a:buChar', NS) is not None: bu = pPr.find('a:buChar', NS).get('char','•')
    runs = []
    for node in p:
        t = P.ln(node.tag)
        if t == 'r':
            rPr = node.find('a:rPr', NS); txt = node.find('a:t', NS)
            s = txt.text if (txt is not None and txt.text) else ''
            if not s: continue
            run = {'s': s}
            if rPr is not None:
                if rPr.get('sz'): run['fs'] = round(int(rPr.get('sz'))/100.0*P.PT, 1)
                if rPr.get('b') == '1': run['b'] = 1
                if rPr.get('i') == '1': run['i'] = 1
                if rPr.get('u') not in (None,'none'): run['u'] = 1
                if rPr.get('spc'): run['sp'] = round(int(rPr.get('spc'))/100.0*P.PT, 2)
                col = P.color_of(rPr)
                if col: run['col'] = col
            runs.append(run)
        elif t == 'br':
            runs.append({'br': 1})
    return {'a': a, 'lh': lh, 'mt': mt, 'mb': mb, 'bu': bu, 'runs': runs}

def parse_text(sp):
    tb = sp.find('p:txBody', NS)
    if tb is None: return None
    bodyPr = tb.find('a:bodyPr', NS)
    anchor = (bodyPr.get('anchor') if bodyPr is not None else 't') or 't'
    def insv(attr, dv):
        v = bodyPr.get(attr) if bodyPr is not None else None
        return P.px(int(v)) if v is not None else dv
    pads = [insv('tIns',2.4), insv('rIns',2.4), insv('bIns',2.4), insv('lIns',2.4)]
    fscale = 1.0
    na = bodyPr.find('a:normAutofit', NS) if bodyPr is not None else None
    if na is not None and na.get('fontScale'): fscale = round(int(na.get('fontScale'))/100000.0, 4)
    paras = [parse_para(p) for p in tb.findall('a:p', NS)]
    orig = ''.join(r.get('s','') for pa in paras for r in pa['runs'])
    if not orig.strip(): return None
    return {'anchor': anchor, 'pads': pads, 'fscale': fscale, 'paras': paras, 'orig': orig}

def parse_shape(el, ctx):
    xf = P.get_xfrm(el)
    if not xf: return None
    spPr = el.find('p:spPr', NS)
    sh = {'x': P.px(ctx.X(xf['x'])), 'y': P.px(ctx.Y(xf['y'])),
          'w': P.px(ctx.W(xf['cx'])), 'h': P.px(ctx.H(xf['cy']))}
    fill = P.fill_css(spPr)
    if fill: sh['fill'] = fill
    geom = spPr.find('a:prstGeom', NS) if spPr is not None else None
    if geom is not None:
        if geom.get('prst') == 'roundRect': sh['r'] = 10
        elif geom.get('prst') == 'ellipse': sh['r'] = 9999
    if spPr is not None:
        lnEl = spPr.find('a:ln', NS)
        if lnEl is not None and lnEl.find('a:noFill', NS) is None:
            lc = P.color_of(lnEl)
            if lc: sh['bd'] = [P.px(int(lnEl.get('w'))) if lnEl.get('w') else 1, lc]
    tx = parse_text(el) if el.find('p:txBody', NS) is not None else None
    sh['t'] = 'text' if tx else 'rect'
    if tx: sh['tx'] = tx
    return sh

def parse_pic(el, ctx, media):
    xf = P.get_xfrm(el)
    if not xf: return None
    blip = el.find('p:blipFill/a:blip', NS)
    src = ''
    if blip is not None:
        rid = blip.get('{%s}embed' % NS['r'])
        if rid and rid in media: src = media[rid]
    if not src: return None
    return {'t':'img', 'x':P.px(ctx.X(xf['x'])), 'y':P.px(ctx.Y(xf['y'])),
            'w':P.px(ctx.W(xf['cx'])), 'h':P.px(ctx.H(xf['cy'])), 'src':src}

def parse_tree(parent, ctx, media, out):
    for el in parent:
        t = P.ln(el.tag)
        if t in ('sp', 'cxnSp'):
            s = parse_shape(el, ctx)
            if s: out.append(s)
        elif t == 'pic':
            s = parse_pic(el, ctx, media)
            if s: out.append(s)
        elif t == 'grpSp':
            xf = P.get_xfrm(el)
            if not xf: continue
            sx = (ctx.W(xf['cx'])/xf.get('ccx', xf['cx'])) if xf.get('ccx') else ctx.sx
            sy = (ctx.H(xf['cy'])/xf.get('ccy', xf['cy'])) if xf.get('ccy') else ctx.sy
            child = P.Ctx(ctx.X(xf['x']), ctx.Y(xf['y']), sx, sy, xf.get('chx',0), xf.get('chy',0))
            parse_tree(el, child, media, out)

def parse_deck(path):
    zf = zipfile.ZipFile(path)
    pres = ET.fromstring(zf.read('ppt/presentation.xml'))
    sz = pres.find('p:sldSz', NS)
    W, H = P.px(int(sz.get('cx'))), P.px(int(sz.get('cy')))
    files = sorted([n for n in zf.namelist() if re.match(r'ppt/slides/slide\d+\.xml$', n)],
                   key=lambda n: int(re.search(r'(\d+)', os.path.basename(n)).group()))
    slides = []
    for sf in files:
        root = ET.fromstring(zf.read(sf))
        media = P.load_media(zf, sf)
        spTree = root.find('p:cSld/p:spTree', NS)
        shapes = []
        parse_tree(spTree, P.Ctx(), media, shapes)
        bgEl = root.find('p:cSld/p:bg/p:bgPr', NS)
        bg = P.fill_css(bgEl) if bgEl is not None else None
        slides.append({'bg': bg, 'shapes': shapes})
    return {'w': W, 'h': H, 'slides': slides}

def main():
    decks = {}
    for f in sorted(glob.glob(os.path.join(SRC, '*.pptx'))):
        key = slug(os.path.basename(f))
        try:
            d = parse_deck(f); d['name'] = title_of(os.path.basename(f))
            decks[key] = d
            print('  imported %-40s %d slides' % (key, len(d['slides'])))
        except Exception as e:
            print('  SKIP %s (%s)' % (os.path.basename(f), e))
    with open(OUT, 'w', encoding='utf-8') as fh:
        fh.write('/* Editable imported decks — GENERATED by tools/build_imported.py. Do not hand-edit. */\n')
        fh.write('window.NT_IMPORTED = ' + json.dumps(decks, ensure_ascii=False, separators=(',',':')) + ';\n')
    print('wrote %s (%d deck(s))' % (os.path.relpath(OUT, ROOT), len(decks)))

if __name__ == '__main__':
    main()
