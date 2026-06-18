# Newtuple Brand Studio — How to use

A friendly walkthrough for creating consistent, on-brand assets — fast.
No install, no account, no API keys.

---

## 1. Launch it

Pick any one:

- **Open directly:** double-click `studio/index.html`, or run
  `open "studio/index.html"` from this folder.
- **Specific browser:** `open -a "Google Chrome" "studio/index.html"`
- **Local server (most robust):** from the `studio/` folder run
  `python3 -m http.server 8080`, then open **http://localhost:8080**.

Editing works offline. **Exporting** pulls small helper libraries from a CDN, so
keep internet on when you click an export button.

Recommended browser: **Chrome or Edge** (best export fidelity). Works in Safari/Firefox too.

---

## Draft with AI (optional)
**Draft with AI** (top-right) is an opt-in helper — off unless you use it, so no
tokens are spent otherwise. Two modes:
- **Draft from a brief** — say what it should say; it writes on-brand copy.
- **Convert my draft (match the style)** — paste your existing/rough copy and it
  rewrites it into the brand voice and fits it onto the asset's fields.

Either way it fills the editable text; then you **fine-tune on the canvas** (⌘Z to undo).

Your key lives in **`.env`** (server-side) and is **never sent to the browser** —
a tiny local proxy (`tools/serve.py`) injects it. Setup:

```bash
cp .env.example .env            # then put your key in it: OPENAI_API_KEY=sk-...
python3 tools/serve.py          # serves the Studio + /api/openai proxy
# open http://localhost:8000
```

Token-optimised: defaults to the cheapest model (`gpt-4o-mini`), sends only field
keys + truncated current text, "This slide" scope for decks, and shows the token
count after each run.

## Slide navigator
Multi-slide assets (carousels, proposals, imported decks) show a **thumbnail strip**
above the canvas — click a thumbnail to jump to that slide; the active one is
highlighted. It refreshes when you add / delete / reorder slides.

## 2. The screen

Three panes:

- **Left — Asset type & theme.** Choose what you're making and Light vs Agentic-dark.
- **Centre — Canvas.** The live design. Page/slide tabs sit on top; the toolbar
  has Undo/Redo, Markup, Reset, Fit, and the pixel dimensions.
- **Right — Content & Export.** Edit fields up top; export buttons at the bottom.

---

## 3. Choose an asset

| Asset | What it's for |
|---|---|
| **LinkedIn Carousel** | The approved carousel deck — fully editable (shape-level) |
| **Social Post** | Single 1080×1080 — quote, stat, or announcement |
| **Banner** | 1200×630 for LinkedIn / link previews (OG) |
| **One-Pager** | A4 capability sheet |
| **Proposal** | The approved proposal deck — fully editable (shape-level) |
| **Imported deck** | Any approved PowerPoint, converted to a fully editable canvas |

> **LinkedIn Carousel** and **Proposal** now load the **approved decks** themselves
> (the real Fable 5 carousel and the Reflections Global pension proposal),
> fully editable shape-by-shape — not generic templates. They export to a
> **native, editable PPTX** (real text boxes you can edit in PowerPoint), plus
> PDF / PNG / HTML. Select any shape to rotate (⤺ ⤻); select an image to **Replace** it.

Switch **theme** (Light / Agentic dark) on the left. Some assets are light-only
(One-Pager, Proposal) — the toggle disables itself accordingly.

### Imported decks — edit a real PPTX freely
Drop an approved deck in `uploads/approved/`, run `python tools/build_imported.py`,
and it appears under **Imported deck** and **Library → Imported decks (editable)**.
**Every element is editable**: click any text / box / image to select → drag to
move, corner-handle to resize, toolbar to recolor + restyle (and align to the
page), double-click text to edit. **Add** a Text box, Rectangle or **Image**
(upload), **zoom** with the −/Fit/+ controls for precise placement, **⌘D** to
duplicate, **⌫** to delete, front/back to reorder. Manage slides (duplicate /
delete / add blank) from the panel. Export to PDF / PPTX / PNG / HTML.

---

## 4. Two ways to edit — use whichever is faster

### A) The form (right panel)
Type into the fields. For multi-slide/page assets you can **add, reorder (↑ ↓),
and delete** slides/pages, and change each one's **type**.

### B) Directly on the canvas (the interactive builder)
- **Click** any text to select it → a **brand toolbar** floats above it.
- **Double-click** text to **edit it in place**. Press **Enter** to commit,
  **Esc** to cancel.
- **Drag** a selected element to move it; it **snaps** to the frame's centres,
  margins, and edges with cyan guide lines.
- **Align** buttons on the toolbar (`L C R · T M B`) snap the selection to frame
  left/centre/right and top/middle/bottom in one click.
- **Arrow keys** nudge (1px; **Shift** = 10px). **Delete** removes a selected
  decoration; **⌘D** duplicates one.
- **Resize** from any of the **8 handles** (corners + edges); **Shift** on a corner locks aspect ratio.
- **Numeric panel** (top of the right rail when a shape/decoration is selected) — type exact **X / Y / W / H** and **font size**.
- **Lock** a shape (right-click) so it can't be moved by accident.
- **Snapping** also catches *other elements'* edges/centres and the **midpoint
  between two** (equal spacing) — not just the frame.
- **Multi-select decorations**: **Shift-click** several, then drag/align/duplicate/
  delete them together (a "2 selected" toolbar appears).
- **Layer order**: a decoration's toolbar has **send-behind-text / bring-to-front**
  (⤓ / ⤒) — so glows and grids can sit behind your copy.
- **Duplicate a slide/page**: the **⧉** button on each slide/page card in the form.

### Brand check (top bar)
Click **Check** to audit the whole asset for **AA contrast** (on composable
templates) and **text running off the page edge** across every slide. Findings are
deduped (repeats show "N slides") and click-to-jump; approved decks come back
**✓ on-brand**. Run it before exporting.

### Guides & safety (top bar)
- **Guides** toggles a **safe-area overlay** — a dashed margin box + centre lines so
  nothing important sits too close to the edge for LinkedIn/print.
- When a text element is selected, the toolbar shows an **AA contrast** chip
  (e.g. `AA ✓ 7.1` / `AA ✗ 2.3`) comparing the text colour to its background, so
  you catch unreadable combinations before exporting.

The toolbar is **locked to the brand** — that's the point. You get:
`A− / A+` size · `W− / W+` weight (Inter 200→700) · alignment · **brand-only colour
swatches** · **Edit** · **Reset** (this element).

> You can't pick an off-brand colour or font here — so anything you make stays consistent.

### Elements (drop-in decorations)
The **Elements** section in the left rail is a palette of brand graphics — chevron
flow, circuit corner, quote mark, gradient divider, dot field, glow orb, N
monogram, **process-flow diagram**, and **timeline / Gantt**. **Click one to drop it on the current slide/page**, then **drag** to
place, use the **corner handle** to resize, and the floating toolbar to **recolor**
(brand swatches) or **cycle opacity** / **remove**. Decorations save with the asset
and appear in every export. (Only approved elements + brand colors — stays on-brand.)

### Emphasis
Wrap a phrase in **double stars** to highlight it — cobalt on light, cyan on dark:

```
Build Your **Agentic** Enterprise.
```

When you double-click to edit, the `**markers**` show; they turn back into colour on commit.

---

## 4b. The Brand Library (reuse · repurpose · restyle)

Click **Library** (top-right) to open your collection of brand assets.

- **Starter collection** — ready-made, on-brand assets across all five types
  (carousels, posts, banners, one-pager, proposal) using real Newtuple copy.
  Click **Open** to start from one.
- **My library** — assets you save. From the canvas, open the Library and click
  **★ Save current** (or use the same button in the top bar) to store the design
  you're working on (tweaks included). Each saved card has **Open · Duplicate ·
  Rename · Delete**.
- **Repurpose across formats** — on any card, the **“Use as…”** dropdown recasts
  that asset's content into another format in one click (e.g. a stat post →
  carousel, or a one-pager → proposal). Edit from there.
- **Restyle** — the **Light / Dark** pills on a card open it in a different theme.
- **Backup & share** — **Export** downloads your whole library as a JSON file;
  **Import** merges a JSON back in (move it between machines or share with a
  teammate).

Everything lives in your browser (localStorage); the JSON export is your portable
backup.

## 5. Undo, autosave, reset

- **Undo / Redo:** `⌘Z` / `⇧⌘Z` (or the `↺ ↻` buttons).
- **Autosave:** every change is saved in your browser automatically — close the
  tab and your work is still there next time.
- **Reset (top bar):** restore the current asset to the brand template (clears your
  tweaks on it). The toolbar **Reset** only resets the one selected element.

---

## 6. Markup (for review)

Click **Markup** in the top toolbar, then click anywhere on the design to drop a
numbered **comment pin**. Type your note in the bubble; hover a pin to delete it.
Markup is **preview-only** — it never appears in your exported files.

---

## 7. Export

Buttons are bottom-right; the first (highlighted) one is the recommended format.

| Format | Use it for |
|---|---|
| **PNG** | Drop straight into LinkedIn, email, decks. Multi-slide → a `.zip` of PNGs. |
| **PDF** | Carousels, one-pagers, proposals — one file, all pages. |
| **PPTX** | A PowerPoint where each slide/page is the rendered design. |
| **DOCX** | An editable, brand-styled Word document (text-first). |
| **HTML** | A standalone, shareable file with everything inlined. |

PNG/PDF/PPTX are pixel-true 2× renders of what you see.

---

## 8. Handy shortcuts & links

- **Deep link to a preset:** `index.html?kind=proposal&theme=light&page=3`
  (`kind` = carousel / post / banner / onepager / proposal · `page` = which one opens first).
- **Fit** button (or window resize) re-centres and scales the canvas.
- **Esc** deselects.

---

## 9. Staying on-brand (the whole point)

- Cobalt `#0047AB` is used purposefully — let whitespace do the work.
- Weight carries hierarchy: ExtraLight headlines, Light body, UPPERCASE kickers.
- No emoji, ever. Inter everywhere.
- The toolbar and swatches enforce all of this — so "tweak freely" never means
  "go off-brand."

---

## 10. Troubleshooting

- **Export button spins then nothing happens** → check your internet (export libs
  load from a CDN). Try again once connected.
- **Fonts look wrong in the preview** → the page needs a moment to load Inter from
  Google Fonts; reload if needed.
- **Want a clean slate** → top-bar **Reset**, or clear the browser's site data for
  this file to wipe all autosaved work.
- **Exported PPTX shows a different font on another computer** → that machine may
  not have Inter installed; ask and I can embed Inter into studio PPTX exports too
  (same trick used for the proposal in `tools/`).
