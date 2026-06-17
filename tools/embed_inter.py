#!/usr/bin/env python3
"""
embed_inter.py — make a PowerPoint/Word OOXML deck use Newtuple's brand font.

What it does to an input .pptx:
  1. Rewrites every Arial / Calibri typeface reference to Inter (theme + all
     slides/masters/layouts/notes), so Inter is the default font.
  2. Embeds the Inter font faces (Regular / Bold / Italic / Bold Italic) directly
     into the package as EOT (the format PowerPoint requires for /ppt/fonts/*.fntdata),
     so the deck renders in Inter on machines that don't have Inter installed.

Usage:
  embed_inter.py INPUT.pptx OUTPUT.pptx [--fonts DIR] [--no-embed] [--family Inter]

--fonts DIR must contain: Inter-Regular.ttf, Inter-Bold.ttf, Inter-Italic.ttf,
Inter-BoldItalic.ttf  (rsms/inter "extras/ttf" static faces).

Requires: fonttools  (pip install fonttools)
"""
import argparse, os, re, struct, sys, zipfile
from fontTools.ttLib import TTFont

FONT_REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font"
FACES = [("regular", "Inter-Regular.ttf"),
         ("bold", "Inter-Bold.ttf"),
         ("italic", "Inter-Italic.ttf"),
         ("boldItalic", "Inter-BoldItalic.ttf")]


# ---------------------------------------------------------------- EOT writer
def make_eot(ttf_path, family_override=None):
    """Build a non-MTX (uncompressed) EOT v0x00020001 from a TTF — the layout
    Microsoft Office reads for embedded fonts. Mirrors ttf2eot's field choices."""
    fontdata = open(ttf_path, "rb").read()
    f = TTFont(ttf_path)
    os2, head, name = f["OS/2"], f["head"], f["name"]

    def gname(nid):
        rec = (name.getName(nid, 3, 1, 0x409) or name.getName(nid, 3, 1)
               or name.getName(nid, 1, 0, 0) or name.getName(nid, 1, 0))
        return rec.toUnicode() if rec else ""

    family = family_override or gname(1)
    style = gname(2) or "Regular"
    version = gname(5)
    full = gname(4)

    p = os2.panose
    panose = bytes([p.bFamilyType, p.bSerifStyle, p.bWeight, p.bProportion,
                    p.bContrast, p.bStrokeVariation, p.bArmStyle, p.bLetterForm,
                    p.bMidline, p.bXHeight])
    weight = os2.usWeightClass
    italic = 1 if (os2.fsSelection & 0x01) or (head.macStyle & 0x02) else 0

    def utf16(s): return s.encode("utf-16-le")
    fam, sty, ver, fll = utf16(family), utf16(style), utf16(version), utf16(full)

    b = bytearray()
    b += struct.pack("<I", len(fontdata))            # FontDataSize
    b += struct.pack("<I", 0x00020001)               # Version
    b += struct.pack("<I", 0)                         # Flags (TTF, not subset/compressed)
    b += panose                                       # PANOSE[10]
    b += struct.pack("<B", 1)                         # Charset = DEFAULT_CHARSET
    b += struct.pack("<B", italic)                    # Italic
    b += struct.pack("<I", weight)                    # Weight
    b += struct.pack("<H", os2.fsType)                # fsType (embedding perms)
    b += struct.pack("<H", 0x504C)                    # MagicNumber 'LP'
    b += struct.pack("<I", os2.ulUnicodeRange1)
    b += struct.pack("<I", os2.ulUnicodeRange2)
    b += struct.pack("<I", os2.ulUnicodeRange3)
    b += struct.pack("<I", os2.ulUnicodeRange4)
    b += struct.pack("<I", os2.ulCodePageRange1)
    b += struct.pack("<I", os2.ulCodePageRange2)
    b += struct.pack("<I", head.checkSumAdjustment)
    b += struct.pack("<I", 0) * 4                     # Reserved1-4
    b += struct.pack("<H", 0)                         # Padding1
    b += struct.pack("<H", len(fam)) + fam            # FamilyName
    b += struct.pack("<H", 0)                         # Padding2
    b += struct.pack("<H", len(sty)) + sty            # StyleName
    b += struct.pack("<H", 0)                         # Padding3
    b += struct.pack("<H", len(ver)) + ver            # VersionName
    b += struct.pack("<H", 0)                         # Padding4
    b += struct.pack("<H", len(fll)) + fll            # FullName
    b += struct.pack("<H", 0)                         # Padding5
    b += struct.pack("<H", 0)                         # RootStringSize = 0
    eot = struct.pack("<I", 4 + len(b) + len(fontdata)) + bytes(b) + fontdata
    return eot


# ---------------------------------------------------------------- XML edits
def swap_fonts(xml: str) -> str:
    return (xml.replace('typeface="Arial"', 'typeface="Inter"')
               .replace('typeface="Calibri"', 'typeface="Inter"'))


def add_content_type(xml: str) -> str:
    if 'Extension="fntdata"' in xml:
        return xml
    ins = '<Default Extension="fntdata" ContentType="application/x-fontdata"/>'
    return re.sub(r'(<Types[^>]*>)', r'\1' + ins, xml, count=1)


def add_rels(xml: str, ids):
    used = [int(m) for m in re.findall(r'Id="rId(\d+)"', xml)]
    nxt = (max(used) + 1) if used else 1
    rels = ""
    for i, (_slot, _fn) in enumerate(FACES, start=0):
        rid = f"rId{nxt + i}"
        ids.append(rid)
        rels += f'<Relationship Id="{rid}" Type="{FONT_REL}" Target="fonts/font{i+1}.fntdata"/>'
    return xml.replace("</Relationships>", rels + "</Relationships>")


def add_embedded_font_list(xml: str, ids) -> str:
    # ensure embed flags on the <p:presentation ...> root element
    def fix_root(m):
        tag = m.group(0)
        if "embedTrueTypeFonts" not in tag:
            tag = tag[:-1] + ' embedTrueTypeFonts="1" saveSubsetFonts="0">'
        return tag
    xml = re.sub(r'<p:presentation\b[^>]*>', fix_root, xml, count=1)

    slots = dict(zip([s for s, _ in FACES], ids))
    block = ('<p:embeddedFontLst><p:embeddedFont><p:font typeface="Inter"/>'
             f'<p:regular r:id="{slots["regular"]}"/>'
             f'<p:bold r:id="{slots["bold"]}"/>'
             f'<p:italic r:id="{slots["italic"]}"/>'
             f'<p:boldItalic r:id="{slots["boldItalic"]}"/>'
             '</p:embeddedFont></p:embeddedFontLst>')

    # schema order: embeddedFontLst must follow notesSz; insert right after it
    m = re.search(r'<p:notesSz\b[^>]*/>', xml)
    if m:
        return xml[:m.end()] + block + xml[m.end():]
    # fallback: before defaultTextStyle or end tag
    if "<p:defaultTextStyle" in xml:
        return xml.replace("<p:defaultTextStyle", block + "<p:defaultTextStyle", 1)
    return xml.replace("</p:presentation>", block + "</p:presentation>")


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input"); ap.add_argument("output")
    ap.add_argument("--fonts", default="fonts")
    ap.add_argument("--no-embed", action="store_true",
                    help="only swap fonts to Inter, do not embed binaries")
    ap.add_argument("--family", default="Inter")
    a = ap.parse_args()

    zin = zipfile.ZipFile(a.input, "r")
    names = zin.namelist()
    out_items = {}              # name -> bytes
    swaps = 0
    for n in names:
        data = zin.read(n)
        if n.endswith(".xml"):
            txt = data.decode("utf-8")
            new = swap_fonts(txt)
            swaps += txt.count('typeface="Arial"') + txt.count('typeface="Calibri"')
            data = new.encode("utf-8")
        out_items[n] = data
    zin.close()

    embedded = 0
    if not a.no_embed:
        # build EOT binaries
        eots = []
        for slot, fn in FACES:
            path = os.path.join(a.fonts, fn)
            if not os.path.exists(path):
                sys.exit(f"missing font: {path}")
            eots.append(make_eot(path, a.family))
        for i, eot in enumerate(eots, start=1):
            out_items[f"ppt/fonts/font{i}.fntdata"] = eot
        embedded = len(eots)

        ids = []
        out_items["[Content_Types].xml"] = add_content_type(
            out_items["[Content_Types].xml"].decode("utf-8")).encode("utf-8")
        out_items["ppt/_rels/presentation.xml.rels"] = add_rels(
            out_items["ppt/_rels/presentation.xml.rels"].decode("utf-8"), ids).encode("utf-8")
        out_items["ppt/presentation.xml"] = add_embedded_font_list(
            out_items["ppt/presentation.xml"].decode("utf-8"), ids).encode("utf-8")

    # write package: [Content_Types].xml first
    order = ["[Content_Types].xml"] + [n for n in out_items if n != "[Content_Types].xml"]
    with zipfile.ZipFile(a.output, "w", zipfile.ZIP_DEFLATED) as z:
        for n in order:
            z.writestr(n, out_items[n])

    print(f"font swaps (Arial/Calibri->Inter): {swaps}")
    print(f"embedded faces: {embedded}")
    print(f"wrote: {a.output}")


if __name__ == "__main__":
    main()
