# Newtuple tools (Python)

Python utilities that operate on brand artifacts. The brand font is **Inter**;
these tools enforce that on Office documents.

## `pptx_to_html.py` — exact HTML/PDF replica of a deck

Turns a `.pptx` into a **faithful, self-contained HTML replica** — every slide's
shapes, text boxes, images and colours at their exact coordinates, with fonts
mapped to **Inter** and images embedded as data URIs. A small auto-fit script
shrinks any text box whose content overflows (so font substitution never clips
or overlaps), mirroring PowerPoint's autofit.

```bash
python tools/pptx_to_html.py "uploads/approved/<deck>.pptx" "Proposals/<deck>-Replica.html"
# exact A4 PDF (headless Chrome print):
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --run-all-compositor-stages-before-draw --virtual-time-budget=10000 \
  --print-to-pdf="Proposals/<deck>-Replica.pdf" "file://$PWD/Proposals/<deck>-Replica.html"
```

Built for Google-Slides-style exports (text boxes + rectangles + images), which
convert near-exactly. The Pension proposal replica is wired into the Studio:
Library → Approved references → the proposal card's **Open replica** shows the
12-page HTML; **Edit in Studio** opens the editable (simplified) template.

## `embed_inter.py` — make a deck use (and carry) Inter

Office files (`.pptx`) often arrive set in Arial/Calibri because the author's
machine didn't have Inter. This tool fixes that in two passes:

1. **Swap** every `Arial` / `Calibri` typeface reference to **Inter** — theme
   major/minor fonts plus all slides, masters, layouts and notes.
2. **Embed** the Inter faces (Regular / Bold / Italic / Bold Italic) into the
   package as **EOT** (`ppt/fonts/*.fntdata`) — the format PowerPoint requires —
   and wire up `[Content_Types].xml`, the presentation relationships, and the
   `<p:embeddedFontLst>` with `embedTrueTypeFonts="1"`. The deck then renders in
   Inter even on machines that don't have Inter installed.

The EOT writer is pure Python (fonttools to read the font's OS/2 + name tables);
its output is **byte-identical to the reference `ttf2eot` tool**, so the embed is
spec-correct without needing PowerPoint or LibreOffice.

### Setup (once)

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r tools/requirements.txt
```

The four Inter static faces are vendored in `tools/fonts/` (from rsms/inter v4),
so no download is needed.

### Use

```bash
# swap to Inter AND embed the fonts (default)
python tools/embed_inter.py "in.pptx" "out_Inter.pptx" --fonts tools/fonts

# only swap typefaces to Inter, do not embed binaries
python tools/embed_inter.py "in.pptx" "out_Inter.pptx" --no-embed
```

It prints the number of font swaps and embedded faces, and writes a new file —
it never modifies the input, so keep both the original and the `_Inter` output.

### Notes & limits

- Embedding adds ~1.6 MB (the four faces, deflated) to the file.
- Run `--no-embed` if the recipients all have Inter installed and you want a
  smaller file.
- Verified: package integrity (`unzip -t`), correct content-type/relationships/
  embeddedFontLst, and EOT headers (internal `EOTSize` matches file size, magic
  `0x504C`). Final visual confirmation is best done by opening in PowerPoint.
- Works on the proposal format (A4-portrait document deck). The same approach
  applies to any OOXML `.pptx`.
