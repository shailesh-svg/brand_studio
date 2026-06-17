# Newtuple — LinkedIn Carousel Templates

Square (1080×1080) LinkedIn carousels built from the brand system.

## Decks in this folder
| File | Source | Components |
|---|---|---|
| `AI Governance Moment.html` | *Carousel Storyboard: The AI Governance Moment* (6 slides) | `GovernanceSlides.jsx` — `S1_Cover`, `S2_Glasswing`, `S3_OtherMove`, `S4_TwoApproaches`, `S5_TheGap`, `S6_CTA` |
| `index.html` | *Agentic Design Patterns* deck (9 slides, supplied template) | `SlideKit.jsx` — `TitleSlide`, `ConceptSlide`, `PatternSlide`, `ClosingSlide` |

## Controls
←/→ arrows · keyboard · swipe · dot indicators · slide counter. The carousels are real 1080×1080 — screenshot or export at native LinkedIn resolution.

## AI Governance Moment — slide-by-slide
1. **Cover** — full cobalt, white ExtraLight type, *"It arrived this week"* in light-cobalt accent. Geometric Curves wash at the bottom.
2. **What Glasswing Is** — white card with dark navy content block (Mythos stats with cobalt-accent numbers), then five sector tiles (Power · Water · Health · Comms · Hardware) using Lucide icons.
3. **The Other Move** — white slide; cobalt-accent emphasis on "22-page governance document"; three regulation cards (California · EU · Illinois) with `01/02/03` numbered tags and a scale icon.
4. **Two Approaches** — dark header band w/ headline "*One designed it in. One had to write it down.*"; split body navy-left (Anthropic · Glasswing — *Designed in*) / cobalt-right (OpenAI · FGF — *Written down*) with iconographic bullets.
5. **The Gap** — clean white frame inside a cobalt border, three status rows (vendor / Glasswing partners / your deployment → ?), amber question for the unknown.
6. **CTA** — full cobalt; "Your AI is already running." / "What governs it?" / pill CTA `newtuple.com`. Curves at bottom. No chevron (last slide).

### Verified source labels
- **Slide 3 regulations** — labelled per the source material: *California — Transparency in Frontier AI Act*, *European Union — AI Act, Code of Practice for General Purpose AI*, *Illinois — Independent AI Audit Mandate*. Bill numbers intentionally omitted until separately verified.
- **Mythos** name and **sector list** (Power · Water · Healthcare · Communications · Hardware) are taken directly from Anthropic's public Glasswing announcement (June 2).

## Authoring
Edit the slide components in `GovernanceSlides.jsx` (props on `PatternSlide`/`ConceptSlide` in `SlideKit.jsx` for the other deck). The shared `GSlide` frame handles bg color, logo color, curves accent, chevron, and page numbering for new slides.

> Backgrounds: cobalt slides use `assets/geometric-curves-white.png` as a subtle bottom wash; the older *Design Patterns* deck uses `assets/carousel-bg.png` (perspective grid). Both are real brand backgrounds.
