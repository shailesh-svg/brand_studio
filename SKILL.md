---
name: newtuple-design
description: Use this skill to generate well-branded interfaces and assets for Newtuple (Newtuple Technologies), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Newtuple is an AI-first consultancy ("Build Your Agentic Enterprise") with a calm, precise, cobalt-blue brand. The system runs in two modes: white-dominant **light mode** (web, dashboards, print) and a deep navy→cobalt **agentic dark mode** with a perspective data-grid (social, heroes, booth).

Key files:
- `README.md` — full context, content + visual foundations, iconography, manifest.
- `colors_and_type.css` — import this for all tokens (colors, type scale, spacing, radii, shadows, motion) and semantic type classes.
- `assets/` — logos (cobalt / white / black) and the carousel/dark backgrounds.
- `preview/` — small specimen cards for every foundation.
- `ui_kits/website/` — marketing-site components (Hero, Services, CaseStudies, FAQ, Footer…).
- `ui_kits/dashboard/` — agent-ops dashboard components (Sidebar, Topbar, KPIs, RunsTable, TracePanel).
- `slides/` — 1080×1080 LinkedIn carousel template + slide-type components.

Non-negotiables: cobalt `#0047AB` used sparingly (never decorative); Inter type with weight-driven hierarchy (ExtraLight heroes, Light body, UPPERCASE letter-spaced labels); Lucide **outline** icons only; rounded-3xl cards, rounded-full buttons; generous whitespace; ease-in-out motion (300/500ms); **no emoji**.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
