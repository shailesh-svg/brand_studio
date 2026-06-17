# Newtuple Design System

A living design system for **Newtuple Technologies** — a modern, AI-first consulting company that helps enterprises design, build, and operate production-grade AI agents and applications. Brand essence: *"Building the agentic enterprise future where humans pilot and AI agents execute."* Mission tagline: **Build Your Agentic Enterprise.**

This repository packages Newtuple's visual + verbal language into reusable foundations, assets, preview cards, UI kits, and a LinkedIn slide template so any agent or designer can produce on-brand collateral quickly.

---

## Company & product context

**Newtuple** (newtuple.com) is a GenAI consultancy focused exclusively on *production-grade* AI — taking agents and apps past the proof-of-concept stage into deployment with SLAs, observability, and continuous optimization. Positioning: *"We get AI to production at warp speed."*

**Two service lines**
- **Build AI Agents** — design, build & operate enterprise AI agents (autonomous PMO agents, recruitment copilots, finance operators, support agents) with governance, observability, measurable ROI.
- **Build AI Apps** — strategy, architecture & engineering for AI-first startups and product teams; 0→1 productization, AI augmentation/rebuilds, managed GenAI pods.

**Accelerator products** (turn-key GenAI building blocks)
- **Dialogtuple** — multi-agent chatbot platform for agentic dialog systems.
- **Gaugetuple** — continuous LLM evaluation & quality scoring.
- **GenAI Accelerators** — turn-key base applications (claims a ~70% head start).

**Industries served:** Financial Services, Retail, Social Care & Healthcare, Aviation, Agencies. Real deployments span aviation OEMs, alternative-investment document intelligence (95% accuracy, 30–40k docs/mo), anti-hallucination platforms, IT-service agents, healthcare RFID/CV automation, legal patent analysis, and air-gapped speech AI.

**Trusted by:** Siemens, Menyala, Consulum, Elyndra, HRBrain, ProAI, AkomaKonnect and others.

### Sources used to build this system
- **`uploads/GP-Newtuple Design Guidelines - New-140526-090223.pdf`** — the canonical *Newtuple Design Language Guideline* (7 pp). Primary source of truth for color, type, logo, motion, components, copy.
- **`uploads/Agentic Design Patterns - LinkedIn Carousel.pdf`** — a real 9-slide LinkedIn carousel (1200×1200) supplied as the slide template. Its background layer (extracted to `assets/carousel-bg*.png`) reveals the brand's "agentic" dark-mode visual language.
- **Live site:** https://www.newtuple.com (and product pages /newtuple-agents, /dialogtuple, /gaugetuple). Logo files referenced live at `/images/brand/Logo-white.png`.
- **Social:** linkedin.com/company/newtuple · twitter.com/newtuple · github.com/newtuple

> Note: the reader is not assumed to have access to these; links are stored for traceability.

---

## CONTENT FUNDAMENTALS — how Newtuple writes

**Voice:** *Calm authority.* "Speak like a practitioner, not a vendor." Confident yet conversational; authoritative, never arrogant. The brand sounds like senior engineers who have actually shipped, not marketers.

**Tone by medium**
- **Web:** direct, informative.
- **Slides / social:** narrative, crisp, confident — teaches a concept, ends with a question.
- **UI:** clear and minimal.
- **Booth / print:** impactful, declarative.

**Mechanics**
- **Active voice**, always. ("We design, build, and operate AI agents.")
- **Precise technical vocabulary** over buzzwords. Real terms — *ReAct, Reflection, multi-agent orchestration, observability, agentic RAG, MCP-aligned* — are used correctly, not as decoration.
- **"We" + "you / your":** Newtuple is "we"; the customer is "you/your" ("Build **Your** Agentic Enterprise"). First-person plural conveys a hands-on team.
- **Casing:** Sentence case for body and most headings. **UPPERCASE, letter-spaced** for small eyebrow labels/kickers (e.g. `MOST AI AGENTS FAIL IN PRODUCTION`, `Generative AI Experts`). Product names are TitleCase one-word portmanteaus (Dialogtuple, Gaugetuple).
- **Outcome-led & quantified:** copy leans on concrete numbers and before/after deltas — *"from hours to seconds," "95% accuracy," "10x performance," "$5M+ recovered," "Prototypes in 4–6 weeks."*
- **Rhythm:** short declarative sentences, often stacked. Frequent three-part structures ("Scale Your AI Operations. Ship Production-Grade Intelligence."). Slides break lines deliberately for cadence.
- **Clarity > flair.** Always align copy with design tone.
- **Emoji:** **not used.** No emoji in product, web, or slides. Don't introduce them.

**Example specimens**
- Hero: *"Build Your Agentic Enterprise. Scale Your AI Operations. Ship Production-Grade Intelligence."*
- Sub: *"We help organizations deploy reliable & scalable AI Agents & Applications. Every engineer codes with AI agents. Every PM is AI-augmented. We've done this for years."*
- Carousel kicker → statement: *"MOST AI AGENTS FAIL IN PRODUCTION"* → *"The problem usually is not the model. It is the architecture."*
- Closing prompt (engagement): *"What design patterns have worked well for your AI systems?"*

---

## VISUAL FOUNDATIONS

Newtuple runs **two complementary modes** off one cobalt spine:
1. **Light mode** (default for web, dashboards, print) — white-dominant, cobalt used sparingly.
2. **Agentic dark mode** (social, marketing heroes, booth, slide accents) — deep navy→cobalt gradient with a perspective "data grid" floor.

**Core principles:** Minimalism · Clarity · Sophistication · Reliability · Human + Technical Balance · **Cobalt Signature**.

**Color**
- **Cobalt Blue `#0047AB`** anchors every system — used *purposefully, never decoratively.* White is dominant and treated as a material ("white is as important as content").
- Neutrals: a gray scale (50→900) carries depth and text. Body text is gray-600.
- **Accent gradient `#0047AB → #00B8D9`** (cobalt→cyan) is **rare** — hero text or select motion backgrounds only.
- Dark mode gradient sampled from the real carousel: `#02020A`→`#111145`→`#1D2B74`→`#2C2BAD` (deep navy corners to brighter cobalt floor).
- Functional: green `#1FA971` success · yellow `#F2B705` highlight/integration · amber `#E8852B` warning · red `#D64545` error.

**Typography**
- Brand font is **Inter** (the guideline calls for a neutral system-style stack; the type table specifies Inter weights). Hero/H1 = **ExtraLight 200, tracking-tight**; H2 = **Light 300, wide tracking**; H3 = Regular 400; body = **Light 300**, relaxed line-height, gray-600; labels = **Medium 500, UPPERCASE, tracking-wider**; data/metrics = **Semibold 600**. Weight does most of the hierarchy work — restrained, airy, technical.
- The **NEWTUPLE wordmark** is a custom geometric/“circuit” typeface — available only as the logo image (`assets/logo-*.png`), not as a webfont. Don't re-typeset it.

**Spacing & layout**
- 12-column responsive grid (web); modular 16:9 grid (slides); square 1200×1200 (LinkedIn). Generous vertical rhythm (`py-20`–`py-32`), internal padding `p-8`–`p-12`. Max content width ~`7xl` (≈80rem), centered. **Whitespace is a feature** — it lets sophistication breathe. Text left-aligned for readability; heroes centered or balanced-asymmetric.

**Corners & cards**
- Cards: **rounded-3xl (~28px)**, light-gray/white fill, `border-gray-200`, hover → border turns cobalt. Buttons: **rounded-full (pill)**. Soft, low, neutral shadows on light; cobalt-tinted lift on primary CTAs. Avoid heavy drop shadows.

**Backgrounds & motifs (signature elements)**
- **Perspective data grid** floor receding to a glowing horizon (dark mode).
- **Circuit / chevron connectors** — thin white routed lines with node dots (top-left of carousel); the `>>>` chevron as a swipe/flow cue. Represents process flow & transformation.
- **Floating circles** (cobalt/gray, slow 6s drift) and **backdrop blur** ("human clarity emerging from AI complexity").
- Navigation: fixed top, **translucent white with subtle blur**. Footer: solid cobalt, white text.

**Imagery**
- Abstract & geometric over photography. Monochrome imagery with **selective cobalt highlights**; cool, deep-blue palette; subtle glow/grain in dark mode. Use literal photography only when a technical product demands it. Never mix icon styles or colors.

**Motion**
- *Motion = clarity, never decoration.* Durations: **300ms hover, 500ms transitions, 6s background float.** Easing **ease-in-out**. Hover → subtle scale or color accent. Fade-ins gentle and one-directional. Scroll = progressive, not parallax. No bouncy/playful springs. Press states: slight darken (cobalt-700) and/or subtle shrink.

**Hover / press / focus**
- Hover: cards → cobalt border; buttons → darken + subtle lift; links → cobalt. Press: darken to `--cobalt-700`, optional 0.98 scale. Focus: visible ring (cobalt) for accessibility (AA minimum contrast; interactive elements always have hover/focus states).

**Transparency & blur** — reserved for chrome (nav bars, overlays, glass panels on dark) and the "clarity from complexity" metaphor; not used as decoration on content.

---

## ICONOGRAPHY

- **System: Lucide (React) — outline only.** This is the brand's specified icon set. Stroke weight is **light (~1px / 1.5px)**; color **inherits** the text color or uses cobalt. Icons **clarify, never decorate**.
- **Don'ts:** never mix icon families or icon colors within a surface; no filled/duotone icons; no emoji as icons; no decorative icon spam.
- **Delivery in this system:** Lucide is CDN-available, so UI kits and slides load it from CDN (`lucide@latest`) rather than bundling SVGs — this keeps the full outline set on hand at the correct stroke. If working offline, swap to the `lucide` npm package.
- **Unicode/glyphs:** the `›` / `»` / `>>>` chevron motif appears as a flow & swipe cue (see carousel). Beyond that, avoid unicode-as-icon.
- **Logo as icon:** the **"N" monogram** may be used alone for favicons/app icons (derive from the wordmark). Full wordmark variants live in `assets/`.

> Substitution flag: no custom Newtuple icon font exists in the supplied materials, so we use **Lucide outline** exactly as the guideline specifies — no substitution required.

---

## VISUAL ASSETS (`assets/`)
- `logo-cobalt.png` — primary wordmark, cobalt on transparent (default for light backgrounds).
- `logo-white.png` — inverse wordmark, white on transparent (for dark/cobalt backgrounds).
- `logo-black.png` — black wordmark (monochrome contexts).
- `carousel-bg.png` — the real LinkedIn-carousel dark background (navy→cobalt gradient + perspective grid + circuit corner + baked wordmark, **no chevron**). Use full-bleed for square social.
- `carousel-bg-chevron.png` — same background **with** the `>>>` swipe chevron (non-final slides).

> Logo source: extracted & recolored from the official guideline PDF. The live site's `Logo-white.png` could not be fetched directly (cross-origin); the recolored white variant is provided as a faithful stand-in.

---

## INDEX — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, manifest. |
| `colors_and_type.css` | CSS custom properties: full color system (light + dark), type scale, semantic type classes, spacing, radii, shadows, motion. Import this in any artifact. |
| `SKILL.md` | Agent-Skill entry point (cross-compatible with Claude Code). |
| `assets/` | Logos (cobalt/white/black) + carousel backgrounds. |
| `preview/` | Small HTML cards powering the Design System tab (colors, type, components, motifs). |
| `ui_kits/website/` | Marketing-site UI kit — hero, nav, service cards, case-study grid, testimonials, footer, buttons/fields. Interactive `index.html`. |
| `ui_kits/dialogtuple/` | Product UI kit — Dialogtuple multi-agent chat app (sidebar, conversation, agent traces, composer). Interactive `index.html`. |
| `slides/` | LinkedIn carousel template (1200×1200) recreating the supplied deck — title, concept, numbered-pattern, list, and closing slide types. |

### Font note — Inter is required everywhere

**Inter is the brand font for ALL typography.** Every artifact (web page, slide, UI kit, preview card) MUST include the Google Fonts `<link>` in the `<head>` **before** loading `colors_and_type.css`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="colors_and_type.css">
```

`colors_and_type.css` then applies `font-family: 'Inter', sans-serif;` globally — `html`, `body`, headings, paragraphs, form controls, table cells, etc. all inherit Inter automatically. The only opt-out is the monospace stack (`code`, `kbd`, `pre`, `samp`, `.nt-mono`) which is reserved for code samples and agent traces.

Inter is loaded from **Google Fonts via CDN**, not bundled as local `woff2` (the build environment can't download font binaries). For a fully offline/self-hosted system, drop Inter's `woff2` files into a `fonts/` folder and add an `@font-face` block. **The NEWTUPLE wordmark typeface is proprietary and supplied only as logo images** — never re-typeset the wordmark; use `assets/logo-*.png`.
