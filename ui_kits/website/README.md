# Newtuple — Website UI Kit

A faithful, interactive recreation of the **newtuple.com marketing site** in the brand's design language. Light-dominant layout with a dark "agentic" hero, cobalt accents, Inter type, Lucide outline icons.

## Run
Open `index.html`. It's a full single-page scroll: hero → services → case studies → clients → testimonials → FAQ → CTA → footer. Interactions: nav hover, card hover (→ cobalt border), testimonial carousel dots, FAQ accordion.

## Components
| File | Component | Notes |
|---|---|---|
| `ui.jsx` | `Button`, `Kicker`, `Section`, `Chip`, `C` (palette), `useLucide` | Shared primitives. All exported to `window`. |
| `Nav.jsx` | `Nav` | Fixed translucent-blur pill nav (sits over dark hero). |
| `Hero.jsx` | `Hero` | Dark agentic backdrop (`assets/carousel-bg.png`), ExtraLight headline w/ cobalt→cyan gradient span, dual CTA. |
| `Services.jsx` | `Services`, `ServiceCard` | "Two ways we accelerate AI" — rounded-3xl cards, hover→cobalt. |
| `CaseStudies.jsx` | `CaseStudies`, `CaseCard` | 3-col grid of real case studies w/ metric + tag. |
| `Social.jsx` | `Clients`, `Testimonials` | Client wordmark strip + quote carousel. |
| `FAQFooter.jsx` | `FAQ`, `Footer` | Accordion + solid-cobalt footer. |

## Faithfulness notes & caveats
- **Content is real** — copy, service bullets, case studies, testimonials, and FAQ are taken verbatim/condensed from the live site.
- **Client logos**: the real logo images could not be fetched (cross-origin), so the "Trusted by" strip renders client **names as monochrome wordmarks**. Drop real logo PNGs into `assets/clients/` and swap them into `Social.jsx` when available.
- **Social icons**: Lucide removed brand glyphs (linkedin/twitter/github), so footer socials are text links.
- This is a cosmetic recreation for prototyping — not production code. Components are intentionally simple.

> Built from the live site's structure + content and the canonical design guideline. No app product UIs (Dialogtuple/Gaugetuple consoles) were recreated — their actual interfaces weren't provided. See root README.
