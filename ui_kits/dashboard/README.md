# Newtuple — Dashboard UI Kit

An **agent-operations dashboard** built to the design guideline's documented *Dashboards* medium: *"neutral gray base, cobalt highlights, card-based grid, internal analytics UI, smooth transitions."*

## Run
Open `index.html`. Sidebar nav switches the topbar title (cosmetic). Surfaces: KPI row, recent-agent-runs table with status badges, and a live ReAct/Reflection trace timeline.

## Components
| File | Component | Notes |
|---|---|---|
| `Shell.jsx` | `Sidebar`, `Topbar`, `D` (palette) | App chrome — sidebar w/ Lucide nav, blur topbar, search, primary CTA. |
| `Dashboard.jsx` | `Kpi`, `RunsTable`, `TracePanel` | Metric cards, runs table, agent-trace timeline. |

## Caveat — this is a documented-medium reference, not a product copy
> Newtuple's actual product consoles (Dialogtuple, Gaugetuple) were **not** provided as code, Figma, or screenshots. Per the design-system rule against inventing product UIs, this kit is **not** a recreation of a specific Newtuple screen. It applies the guideline's documented dashboard styling to representative, brand-accurate concepts (agents, ReAct/Reflection patterns, accuracy/latency metrics drawn from real case studies). Treat it as a styling reference for any internal analytics surface. If you can share real product screens or a repo, I'll rebuild this as a faithful 1:1 recreation.
