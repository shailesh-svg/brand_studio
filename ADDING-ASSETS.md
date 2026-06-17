# Adding to the Newtuple asset library

How to grow the custom brand-asset library that powers the **Brand Studio**
(`studio/`). There are three kinds of "asset"; each has one clear home.

---

## 1. Approved & published references (inspiration)

**Finished, approved, real-world assets** you want on hand as inspiration —
published carousels, decks, one-pagers, screenshots, logos.

**Where:** drop the files into **`uploads/approved/`**
(any file already under `uploads/` is picked up too). Images, PDFs, and decks
(`.png .jpg .svg .pdf .pptx .docx .html`) are supported.

**Then run** (re-indexes the folder for the Studio):

```bash
python tools/build_library.py
```

This regenerates `studio/references.js` **and renders a real first-page
thumbnail** for every file into `studio/ref-thumbs/` (Quick Look for PDFs/decks,
`sips` for images — macOS). Open the Studio → **Library** → **Approved
references** to see them; click a card to open the original file. (Generated
files — don't hand-edit `references.js` or `ref-thumbs/`.)

> Tip: keep approved finals in `uploads/approved/` and looser inspiration in
> `uploads/` — the "Approved" badge is applied to anything under `approved/`.

---

## 2. Editable starter templates (reusable in the Studio)

**On-brand templates** you can open, edit, repurpose and restyle inside the
Studio — they live in **Library → Starter collection**.

**Where:** add a plain entry to **`studio/starters.js`** (safe to hand-edit):

```js
window.NT_STARTERS = [
  {
    name: 'Production-grade AI (banner)',
    kind: 'banner',              // carousel | post | banner | onepager | proposal
    theme: 'dark',               // light | dark
    data: { kicker:'Production-grade AI',
            title:'We get AI to production at **warp speed**.',
            subtitle:'Deployed with SLAs, observability and continuous optimization.' }
  }
];
```

**Easiest way to author one:** build it in the Studio, click **★ Save current**,
then **Export** the library JSON and copy that entry's `data` into `starters.js`.
(`**stars**` = cobalt/cyan emphasis.)

---

## 3. Your working/saved designs (per-browser)

Anything you **★ Save current** lands in **Library → My library**, stored in the
browser (localStorage). Use **Export** to download the whole library as JSON for
backup or to share with a teammate (they **Import** it). To make a saved design a
permanent shared starter, promote it into `starters.js` (see §2).

---

## Quick reference

| You have… | Put it… | Then |
|---|---|---|
| An approved/published file (PDF, deck, image) | `uploads/approved/` | `python tools/build_library.py` |
| A reusable editable template | `studio/starters.js` | reload the Studio |
| A design you're iterating on | **★ Save current** in the app | Export JSON to back up/share |

Brand source of truth (colors, type, logos, voice) stays in the repo root:
`README.md`, `colors_and_type.css`, `assets/`.

### Editable replicas of approved decks

`tools/build_imported.py` converts every `.pptx` in `uploads/approved/` into an
**editable** deck for the Studio, written to `studio/imported-decks.js`. They show
up under the new **Imported deck** asset type and in **Library → Imported decks
(editable)** — every text box is click-to-edit, draggable and recolorable, at the
deck's exact layout (fonts mapped to Inter). Run it whenever you add/replace an
approved deck:

```bash
python tools/build_imported.py
```

For a fixed, exact viewer/print version, `tools/pptx_to_html.py` also makes a
self-contained HTML + PDF replica (see the Tools section).

---

## Design elements (reusable SVG building blocks)

`elements/` holds scalable, recolorable SVG elements drawn from the brand's
signature motifs — N monogram / app icon, the agentic data-grid background,
circuit connector, `>>>` chevron flow, cobalt glow orb, floating-dot field,
quote mark, and a cobalt→cyan divider. Open **`elements/index.html`** to preview
and download them. Recolor with the tokens in `colors_and_type.css`. To surface
any of them in the Studio's Library, copy it into `uploads/approved/` and re-run
the indexer.
