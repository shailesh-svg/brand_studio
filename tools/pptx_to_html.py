#!/usr/bin/env python3
"""
pptx_to_html.py — faithful PPTX → self-contained HTML replica.

Reproduces each slide's shapes (rectangles + text boxes), images, and grouped
shapes at their exact coordinates/colors/fonts. Built for Google-Slides-style
exports (text boxes + rects + pics), which this proposal is. Fonts are mapped to
Inter (the brand font). Images are embedded as data URIs so the output is a
single portable file. Open it and print to PDF for an exact A4 replica.

Usage:
  python tools/pptx_to_html.py INPUT.pptx OUTPUT.html
"""
import base64, html, os, re, sys, zipfile
import xml.etree.ElementTree as ET

NS = {
  'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
  'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
  'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
}
EMU = 9525.0          # EMU per CSS px (96dpi)
PT = 96.0 / 72.0      # pt -> px
def px(v): return round(float(v) / EMU, 2)
def ln(tag): return tag.split('}')[-1]
def q(path): return path  # find with NS

SCHEME = {'dk1':'0E1320','tx1':'0E1320','dk2':'374151','tx2':'374151',
          'lt1':'FFFFFF','bg1':'FFFFFF','lt2':'F7F8FA','bg2':'F7F8FA',
          'accent1':'0047AB','accent2':'00B8D9','hlink':'0047AB'}

def color_of(parent):
    """first solidFill color (hex) under parent, or None."""
    if parent is None: return None
    sf = parent.find('a:solidFill', NS)
    if sf is None: return None
    s = sf.find('a:srgbClr', NS)
    if s is not None: return '#' + s.get('val')
    sc = sf.find('a:schemeClr', NS)
    if sc is not None: return '#' + SCHEME.get(sc.get('val'), '0E1320')
    return None

def fill_css(spPr):
    if spPr is None: return None
    if spPr.find('a:noFill', NS) is not None: return None
    c = color_of(spPr)
    if c: return c
    grad = spPr.find('a:gradFill', NS)
    if grad is not None:
        stops = []
        for gs in grad.findall('a:gsLst/a:gs', NS):
            col = color_of(gs)
            if col: stops.append((int(gs.get('pos','0'))/1000.0, col))
        if len(stops) >= 2:
            ang = 90
            lin = grad.find('a:lin', NS)
            if lin is not None: ang = round(int(lin.get('ang','0'))/60000.0 + 90) % 360
            return 'linear-gradient(%ddeg,%s)' % (ang, ','.join('%s %.1f%%'%(c,p) for p,c in stops))
    return None

class Ctx:
    def __init__(self, ox=0, oy=0, sx=1.0, sy=1.0, cox=0, coy=0):
        self.ox, self.oy, self.sx, self.sy, self.cox, self.coy = ox, oy, sx, sy, cox, coy
    def X(self, x): return self.ox + (x - self.cox) * self.sx
    def Y(self, y): return self.oy + (y - self.coy) * self.sy
    def W(self, w): return w * self.sx
    def H(self, h): return h * self.sy

def get_xfrm(el, tag='a:xfrm'):
    sp = el.find('p:spPr', NS)
    xf = sp.find('a:xfrm', NS) if sp is not None else None
    if xf is None: xf = el.find('p:grpSpPr/a:xfrm', NS)
    if xf is None: xf = el.find('p:xfrm', NS)   # graphicFrame
    if xf is None: return None
    off, ext = xf.find('a:off', NS), xf.find('a:ext', NS)
    if off is None or ext is None: return None
    d = {'x':int(off.get('x')), 'y':int(off.get('y')), 'cx':int(ext.get('cx')), 'cy':int(ext.get('cy'))}
    cho, che = xf.find('a:chOff', NS), xf.find('a:chExt', NS)
    if cho is not None: d['chx']=int(cho.get('x')); d['chy']=int(cho.get('y'))
    if che is not None: d['ccx']=int(che.get('cx')); d['ccy']=int(che.get('cy'))
    return d

def box_style(ctx, xf):
    return ('left:%spx;top:%spx;width:%spx;height:%spx;' %
            (px(ctx.X(xf['x'])), px(ctx.Y(xf['y'])), px(ctx.W(xf['cx'])), px(ctx.H(xf['cy']))))

def render_text(sp, w_px, h_px):
    tb = sp.find('p:txBody', NS)
    if tb is None: return ''
    bodyPr = tb.find('a:bodyPr', NS)
    anchor = (bodyPr.get('anchor') if bodyPr is not None else 't') or 't'
    just = {'t':'flex-start','ctr':'center','b':'flex-end'}.get(anchor,'flex-start')
    # honor PowerPoint auto-fit (shrink text to fit its box)
    fscale = 1.0
    na = bodyPr.find('a:normAutofit', NS) if bodyPr is not None else None
    if na is not None and na.get('fontScale'):
        fscale = int(na.get('fontScale')) / 100000.0
    def ins(attr, dv):
        v = bodyPr.get(attr) if bodyPr is not None else None
        return px(int(v)) if v is not None else dv
    pad = 'padding:%spx %spx %spx %spx;' % (ins('tIns',2.4), ins('rIns',2.4), ins('bIns',2.4), ins('lIns',2.4))
    paras = []
    has_text = False
    for p in tb.findall('a:p', NS):
        pPr = p.find('a:pPr', NS)
        algn = (pPr.get('algn') if pPr is not None else None) or 'l'
        ta = {'l':'left','ctr':'center','r':'right','just':'justify'}.get(algn,'left')
        lh = 'line-height:1.15;'
        if pPr is not None:
            lns = pPr.find('a:lnSpc', NS)
            if lns is not None:
                pct = lns.find('a:spcPct', NS); pts = lns.find('a:spcPts', NS)
                if pct is not None: lh = 'line-height:%.3f;' % (int(pct.get('val'))/100000.0)
                elif pts is not None: lh = 'line-height:%spx;' % px(int(pts.get('val'))*127)  # pts*100 -> emu approx
        mb = ''
        if pPr is not None:
            sa = pPr.find('a:spcAft/a:spcPts', NS); sb = pPr.find('a:spcBef/a:spcPts', NS)
            if sa is not None: mb += 'margin-bottom:%spx;' % round(int(sa.get('val'))/100.0*PT,1)
            if sb is not None: mb += 'margin-top:%spx;' % round(int(sb.get('val'))/100.0*PT,1)
        # bullet
        bullet = ''
        if pPr is not None and pPr.find('a:buChar', NS) is not None:
            bch = pPr.find('a:buChar', NS).get('char','•')
            bullet = '<span style="margin-right:8px">%s</span>' % html.escape(bch)
        runs = []
        for node in p:
            t = ln(node.tag)
            if t == 'r':
                rPr = node.find('a:rPr', NS)
                txt = node.find('a:t', NS)
                s = html.escape(txt.text) if (txt is not None and txt.text) else ''
                if not s: continue
                has_text = True
                st = 'font-family:Inter,sans-serif;'
                if rPr is not None:
                    if rPr.get('sz'): st += 'font-size:%.1fpx;' % (int(rPr.get('sz'))/100.0*PT*fscale)
                    if rPr.get('b') == '1': st += 'font-weight:700;'
                    if rPr.get('i') == '1': st += 'font-style:italic;'
                    if rPr.get('u') not in (None,'none'): st += 'text-decoration:underline;'
                    spc = rPr.get('spc')
                    if spc: st += 'letter-spacing:%.2fpx;' % (int(spc)/100.0*PT)
                    col = color_of(rPr)
                    if col: st += 'color:%s;' % col
                runs.append('<span style="%s">%s</span>' % (st, s))
            elif t == 'br':
                runs.append('<br>')
        inner = bullet + ''.join(runs)
        paras.append('<div style="%s%s%smargin:0;">%s</div>' % (ta_css(ta), lh, mb, inner or '<br>'))
    if not has_text: return ''
    return ('<div class="t" style="position:absolute;inset:0;%sdisplay:flex;flex-direction:column;justify-content:%s;">%s</div>'
            % (pad, just, ''.join(paras)))

def ta_css(ta): return 'text-align:%s;' % ta

def shape_div(ctx, el, media):
    xf = get_xfrm(el)
    if not xf: return ''
    spPr = el.find('p:spPr', NS)
    style = 'position:absolute;box-sizing:border-box;' + box_style(ctx, xf)
    # geometry
    radius = ''
    geom = spPr.find('a:prstGeom', NS) if spPr is not None else None
    if geom is not None:
        prst = geom.get('prst')
        if prst == 'roundRect': radius = 'border-radius:10px;'
        elif prst == 'ellipse': radius = 'border-radius:50%;'
    fill = fill_css(spPr)
    if fill: style += ('background:%s;' % fill) if fill.startswith('linear') else ('background-color:%s;' % fill)
    # line/border
    if spPr is not None:
        lnEl = spPr.find('a:ln', NS)
        if lnEl is not None and lnEl.find('a:noFill', NS) is None:
            lc = color_of(lnEl)
            if lc:
                w = lnEl.get('w'); bw = px(int(w)) if w else 1
                style += 'border:%spx solid %s;' % (bw, lc)
    style += radius
    inner = render_text(el, px(ctx.W(xf['cx'])), px(ctx.H(xf['cy']))) if el.find('p:txBody', NS) is not None else ''
    return '<div style="%s">%s</div>' % (style, inner)

def pic_div(ctx, el, media):
    xf = get_xfrm(el)
    if not xf: return ''
    blip = el.find('p:blipFill/a:blip', NS)
    src = ''
    if blip is not None:
        rid = blip.get('{%s}embed' % NS['r'])
        if rid and rid in media: src = media[rid]
    return ('<img src="%s" style="position:absolute;%sobject-fit:contain;">'
            % (src, box_style(ctx, xf)))

def render_tree(parent, ctx, media, out):
    for el in parent:
        t = ln(el.tag)
        if t == 'sp' or t == 'cxnSp':
            out.append(shape_div(ctx, el, media))
        elif t == 'pic':
            out.append(pic_div(ctx, el, media))
        elif t == 'grpSp':
            xf = get_xfrm(el)
            if not xf: continue
            sx = (ctx.W(xf['cx']) / xf.get('ccx', xf['cx'])) if xf.get('ccx') else ctx.sx
            sy = (ctx.H(xf['cy']) / xf.get('ccy', xf['cy'])) if xf.get('ccy') else ctx.sy
            child = Ctx(ctx.X(xf['x']), ctx.Y(xf['y']), sx, sy, xf.get('chx',0), xf.get('chy',0))
            render_tree(el, child, media, out)

def load_media(zf, slide_name):
    rels_path = 'ppt/slides/_rels/%s.rels' % os.path.basename(slide_name)
    media = {}
    try: rx = ET.fromstring(zf.read(rels_path))
    except KeyError: return media
    for rel in rx:
        rid = rel.get('Id'); tgt = rel.get('Target')
        if not tgt or 'media' not in tgt: continue
        path = 'ppt/' + tgt.replace('../', '')
        try: data = zf.read(path)
        except KeyError: continue
        ext = os.path.splitext(path)[1].lower().lstrip('.')
        mime = {'png':'image/png','jpg':'image/jpeg','jpeg':'image/jpeg','gif':'image/gif','svg':'image/svg+xml'}.get(ext,'image/png')
        media[rid] = 'data:%s;base64,%s' % (mime, base64.b64encode(data).decode())
    return media

def main():
    if len(sys.argv) < 3: sys.exit('usage: pptx_to_html.py INPUT.pptx OUTPUT.html')
    src, out_path = sys.argv[1], sys.argv[2]
    zf = zipfile.ZipFile(src)
    pres = ET.fromstring(zf.read('ppt/presentation.xml'))
    sz = pres.find('p:sldSz', NS)
    W, H = px(int(sz.get('cx'))), px(int(sz.get('cy')))
    slide_files = sorted([n for n in zf.namelist() if re.match(r'ppt/slides/slide\d+\.xml$', n)],
                         key=lambda n: int(re.search(r'(\d+)', os.path.basename(n)).group()))
    slides_html = []
    for sf in slide_files:
        root = ET.fromstring(zf.read(sf))
        media = load_media(zf, sf)
        spTree = root.find('p:cSld/p:spTree', NS)
        # background
        bg = ''
        bgEl = root.find('p:cSld/p:bg/p:bgPr', NS)
        bgc = fill_css(bgEl) if bgEl is not None else None
        if bgc: bg = 'background:%s;' % bgc
        parts = []
        render_tree(spTree, Ctx(), media, parts)
        slides_html.append('<div class="slide" style="width:%spx;height:%spx;%s">%s</div>' % (W, H, bg, ''.join(parts)))
    doc = """<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>Pension Contribution Processing Automation — Newtuple</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}
body{margin:0;background:#5b6472;font-family:Inter,sans-serif;display:flex;flex-direction:column;align-items:center;gap:24px;padding:28px}
.slide{position:relative;background:#fff;box-shadow:0 18px 48px rgba(14,19,32,.35);overflow:hidden}
@media print{ body{background:#fff;padding:0;gap:0} .slide{box-shadow:none;break-after:page} @page{size:%spx %spx;margin:0} }
</style></head><body>
%s
<script>
/* PowerPoint-style auto-fit: shrink any text box whose content overflows its box,
   so font substitution (Inter vs the deck's font) never clips or overlaps. */
function fit(){
  document.querySelectorAll('.t').forEach(function(t){
    var g=0;
    while(t.scrollHeight > t.clientHeight + 4 && g++ < 14){
      t.querySelectorAll('span').forEach(function(s){
        var fs=parseFloat(getComputedStyle(s).fontSize)||12; s.style.fontSize=(fs*0.97).toFixed(2)+'px';
      });
    }
  });
}
if(document.fonts && document.fonts.ready){ document.fonts.ready.then(fit); } else { window.addEventListener('load', fit); }
</script>
</body></html>""" % (W, H, '\n'.join(slides_html))
    open(out_path, 'w', encoding='utf-8').write(doc)
    print('wrote %s  (%d slides, %sx%s px)' % (out_path, len(slide_files), W, H))

if __name__ == '__main__':
    main()
