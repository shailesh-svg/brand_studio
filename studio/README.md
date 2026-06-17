# Newtuple Brand Studio

A self-contained, browser-based app that turns Newtuple's design system into
**consistent, on-brand assets** you can edit and export in many formats — no
build step, no server, no account.

> Open `index.html` in any modern browser (Chrome/Edge/Safari/Firefox) and start designing.

---

## What it produces

| Asset | Size | Themes | Exports |
|---|---|---|---|
| **LinkedIn Carousel** | 1080×1080 multi-slide | Agentic dark · Light | PNG (zip), PDF, PPTX, HTML, DOCX |
| **Social Post** (quote / stat / announcement) | 1080×1080 | Agentic dark · Light | PNG, PDF, HTML |
| **Banner** (LinkedIn / OG) | 1200×630 | Agentic dark · Light | PNG, PDF, HTML |
| **One-Pager** (capability sheet) | A4 portrait | Light | PDF, PNG, DOCX, HTML |
| **Proposal** (multi-page document) | A4 portrait | Light | PDF, PPTX, DOCX, PNG (zip), HTML |

**Proposal** is a multi-page A4 document (matching the approved reference deck in
`Proposals/`). Each page has a **type** — Cover, Section divider, Content + bullets,
Two-column, Metrics, or Closing/CTA — and you can add / reorder / delete pages.
Every page carries the logo, an eyebrow label, and a `Page n / N` footer.

Every asset is locked to the brand: cobalt `#0047AB` used purposefully, Inter
with weight-driven hierarchy (ExtraLight headlines, Light body, UPPERCASE
letter-spaced kickers), Lucide-style outline icons, generous whitespace, and the
real agentic dark background (navy→cobalt gradient + perspective grid + circuit
corner + baked wordmark). No emoji, ever.

## How to use

1. **Pick an asset type** (left rail) and a **theme** (light / agentic dark).
2. **Edit content** in the right rail, **or directly on the canvas** (see below).
   Wrap any phrase in `**double stars**` to give it cobalt (light) or cyan (dark)
   **emphasis** — e.g. `Build Your **Agentic** Enterprise.`
3. For carousels, add / reorder / delete slides and choose a slide **type**
   (title, statement, numbered pattern, list, closing).
4. **Export** from the bottom-right. Multi-slide PNG comes as a `.zip`; PDF/PPTX
   bundle all slides; DOCX is a text-first, brand-styled document.

Deep-link presets are supported: `index.html?kind=proposal&theme=light&page=3`
(`page` selects which slide/page opens first).

## Brand Library (reuse · repurpose · restyle)

Click **Library** (top-right) for a collection of brand assets you can reuse and
repurpose:

- **Starter collection** — curated, ready-made assets across all five types using
  real newtuple.com copy (Dialogtuple, "100+ LLMs", 95% accuracy, "15 days → 1
  day", "$5M+ recovered", "Build Your Agentic Enterprise", etc.).
- **My library** — **★ Save current** stores the design you're working on (with
  tweaks). Cards support **Open · Duplicate · Rename · Delete**, shown as live
  thumbnails.
- **Repurpose** — the **"Use as…"** dropdown recasts an asset's content into
  another format (carousel ⇄ post ⇄ banner ⇄ one-pager ⇄ proposal).
- **Restyle** — **Light / Dark** pills open an asset in a different theme.
- **Import / Export** — the whole library round-trips as a JSON file for backup
  and sharing. Stored locally (localStorage).

## Elements (drop-in brand decorations)

The left rail's **Elements** palette lets you place brand graphics onto any
slide/page — chevron flow, circuit corner, quote mark, gradient divider, dot
field, glow orb, N monogram. Click to drop, drag to place, corner-handle to
resize, and the floating toolbar to recolor (brand swatches) / cycle opacity /
remove. Decorations persist with the asset and render in every export. (Source
SVGs live in `../elements/`.)

## Interactive builder (direct manipulation)

Tweak any design on the fly, right on the canvas — every control is **locked to
the brand tokens**, so you get full freedom of arrangement with zero chance of
going off-brand. Works on all four asset types.

- **Click** any text to select it; a floating **brand toolbar** appears with:
  size (`A− / A+`), weight (`W− / W+`, Inter 200→700), alignment, and a row of
  **brand-only color swatches** (cobalt, cyan, ink, body, muted, white, success,
  highlight). No arbitrary colors or fonts — consistency is enforced.
- **Double-click** text to **edit it inline** (the `**emphasis**` markers show
  while editing; emphasis re-renders on blur).
- **Drag** a selected element to reposition it; it **snaps to the frame's
  centre** with cyan guides.
- **Resize handle** (bottom-right of the selection) scales the text.
- **Reset** on the toolbar reverts one element to the template; **Reset** in the
  top bar reverts the whole asset.
- **Undo / redo**: `⌘Z` / `⇧⌘Z` (or the `↺ ↻` buttons).
- **Markup** (top bar): toggle on, then click the design to drop numbered
  **comment pins** for review. Markup is preview-only — it never appears in
  normal exports.
- **Autosave**: every tweak is saved to the browser (localStorage), so your work
  persists between sessions. *Reset to template* clears it.

## Format notes

- **PNG / PDF / PPTX** are pixel-true rasters of the live design (rendered at 2×).
- **HTML** is a standalone, editable file with all styles and images inlined as
  data URIs — portable and shareable.
- **DOCX** is content-driven (headings, body, bullets, metrics) for when someone
  needs an editable Word doc rather than a fixed image.

## How it's built

- `index.html` — app shell + CDN export libraries (html2canvas, jsPDF, PptxGenJS, docx, JSZip, FileSaver).
- `studio.css` — light-mode app chrome built on the design tokens.
- `studio.js` — state model, render engine, the four templates, and all exporters.
- `colors_and_type.css` — a copy of the design-system tokens (chrome only).
- `assets-embedded.js` — brand logos + backgrounds as base64 data URIs, so the
  app is fully self-contained and exports never hit canvas-tainting issues.

Asset visuals use inline hex (mirroring the tokens) rather than CSS variables,
so exported HTML/PNG/PDF remain faithful even outside this folder.

## Extending it

Add a new asset type by registering one entry in the `KINDS` map in `studio.js`:
provide `defaults()`, a `frames(data, theme)` function returning true-pixel frame
builders, a form branch in `renderForm()`, and its allowed formats in `EXPORTS`.
The render engine, preview scaling, and exporters pick it up automatically.
