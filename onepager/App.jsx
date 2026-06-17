/* eslint-disable */
const { useState, useEffect } = React;

// ─────────────────────────────────────────────────────────────
// THE PROOF. 6 metric tiles (kept as a separate band below the diagram)
// ─────────────────────────────────────────────────────────────
const PROOF = [
  { value: '42→20', label: 'API surface reduced post-UAT',  ctx: 'Engineering simplicity as a deliverable.' },
  { value: '10',    label: 'Governed workflow states',       ctx: 'Full state machine, zero manual tracking.' },
  { value: '5',     label: 'Enterprise systems integrated',  ctx: 'One governed pipeline, end-to-end.' },
  { value: '8–12',  unit: 'wks', label: 'Discovery to production', ctx: 'Gated delivery, signed off at every phase.' },
  { value: '100%',  label: 'Audit coverage',                 ctx: 'Every AI call, every human decision, every action.' },
  { value: '0',     label: 'Ungoverned AI outputs',          ctx: 'Confidence gate before any downstream action.' },
];

// ─────────────────────────────────────────────────────────────
// ACCENT INTENSITY. three presets
// ─────────────────────────────────────────────────────────────
const ACCENT = {
  subtle: {
    cobalt:      '#1F4E96',
    cobaltDark:  '#163C75',
    cobaltSoft:  '#EAF0FA',
    arrowColor:  '#1F4E96',
  },
  standard: {
    cobalt:      '#0047AB',
    cobaltDark:  '#003582',
    cobaltSoft:  '#E2EBF7',
    arrowColor:  '#0047AB',
  },
  bold: {
    cobalt:      '#002F8F',
    cobaltDark:  '#001E66',
    cobaltSoft:  '#D7E2F4',
    arrowColor:  '#002F8F',
  },
};

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks({
    accentIntensity: 'standard',
    labelMode: 'capabilities',
    density: 'comfortable',
  });

  const accent = ACCENT[tweaks.accentIntensity];

  // Expose accent vars to CSS
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--ac-cobalt', accent.cobalt);
    r.style.setProperty('--ac-cobalt-dark', accent.cobaltDark);
    r.style.setProperty('--ac-cobalt-soft', accent.cobaltSoft);
  }, [accent]);

  return (
    <>
      <TweaksPanel title="Tweaks">
        <TweakSection title="Visuals">
          <TweakRadio
            label="Accent intensity"
            value={tweaks.accentIntensity}
            options={[
              { value: 'subtle',   label: 'Subtle' },
              { value: 'standard', label: 'Standard' },
              { value: 'bold',     label: 'Bold' },
            ]}
            onChange={(v) => setTweak('accentIntensity', v)}
          />
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={[
              { value: 'compact',     label: 'Compact' },
              { value: 'comfortable', label: 'Comfortable' },
            ]}
            onChange={(v) => setTweak('density', v)}
          />
        </TweakSection>
        <TweakSection title="Diagram">
          <TweakRadio
            label="Right-column labels"
            value={tweaks.labelMode}
            options={[
              { value: 'capabilities', label: 'Capabilities' },
              { value: 'outcomes',     label: 'Outcomes' },
            ]}
            onChange={(v) => setTweak('labelMode', v)}
          />
        </TweakSection>
      </TweaksPanel>

      <div className="stage">
        <div className="page">

          {/* ── HEADER ─────────────────────────────────── */}
          <header className="op-header">
            <div className="op-wordmark">NEWTUPLE</div>
            <div className="op-eyebrow">AI ENGINEERING CAPABILITY  ·  ONE-PAGER</div>
          </header>

          {/* ── HERO STRIP ─────────────────────────────── */}
          <section className="op-hero">
            <h1 className="op-hero__h1">
              We don't build demos.<br/>
              <span className="op-hero__h1--mute">We build production systems that run at scale,<br/>with governance and measurability built in.</span>
            </h1>
          </section>

          {/* ── ARCHITECTURE — hub-and-spoke ───────────── */}
          <section className="op-arch">
            <div className="op-section-head">
              <div className="op-section-head__label">End-state architecture</div>
              <div className="op-section-head__sub">
                A single, client-owned orchestration layer between enterprise systems and the model layer. Every AI action passes a confidence gate; every human decision is recorded.
              </div>
            </div>
            <ArchitectureDiagram
              accent={accent}
              labelMode={tweaks.labelMode}
              density={tweaks.density}
            />
          </section>

          {/* ── PROBLEMS + PROOF (split band) ───────── */}
          <section className="op-split">
            {/* LEFT — Problems */}
            <div className="op-split__left">
              <div className="op-section-head">
                <div className="op-section-head__label">Where commerce breaks down</div>
              </div>
              <div className="op-split__intro">
                Beauty and luxury retail run on product data that lives in five systems and reconciles in none. Every problem below shows up as a confidence gap somewhere downstream.
              </div>
              <ul className="op-problems__list">
                {[
                  {
                    n: '01',
                    title: 'Product data fragmented across regions & channels',
                    body: 'HQ, regional teams, marketplaces, and retail partners each maintain their own version. Reconciliation happens manually, country by country.',
                  },
                  {
                    n: '02',
                    title: "Multilingual content can't keep pace with launches",
                    body: 'Translation and localization lag behind launches. Brand voice drifts between markets. Translation memory and glossary live in disconnected tools.',
                  },
                  {
                    n: '03',
                    title: 'AI rewrites ship without governance',
                    body: 'Generated copy goes live without similarity gates, glossary checks, or tone review. Retraction in a luxury context costs more than the original work.',
                  },
                  {
                    n: '04',
                    title: 'Channel adaptations rebuilt by hand',
                    body: 'Each marketplace, retailer feed, and DTC site needs its own copy and asset variants. Nothing reuses prior work or learns from cycles.',
                  },
                ].map((p, i) => (
                  <li className="op-problems__item" key={i}>
                    <div className="op-problems__n">{p.n}</div>
                    <div className="op-problems__body">
                      <div className="op-problems__title">{p.title}</div>
                      <div className="op-problems__copy">{p.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Proof */}
            <div className="op-split__right">
              <div className="op-section-head op-section-head--onDark">
                <div className="op-section-head__label">The proof</div>
              </div>
              <div className="op-split__intro op-split__intro--onDark">
                What the architecture delivers, measured. Every number below is from a system running in production today.
              </div>
              <div className="op-proof__grid">
                {PROOF.map((p, i) => (
                  <div className="op-proof__tile" key={i}>
                    <div className="op-proof__value">
                      {p.value}{p.unit && <span className="op-proof__unit"> {p.unit}</span>}
                    </div>
                    <div className="op-proof__label">{p.label}</div>
                    <div className="op-proof__ctx">{p.ctx}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ENGAGEMENT MODEL ───────────────────────── */}
          <section className="op-engage">
            <div className="op-section-head">
              <div className="op-section-head__label">How we engage</div>
              <div className="op-section-head__sub">
                A gated delivery model. Every phase ends in a signed-off demo before the next one starts.
              </div>
            </div>
            <div className="op-engage__grid">
              {[
                { n: '01', wk: 'Wk 1–2', title: 'Discovery',      body: 'Joint working sessions with your team. We end with a written architecture, a working evaluation harness, and a go / no-go.' },
                { n: '02', wk: 'Wk 2–4', title: 'Vertical slice', body: 'One end-to-end path through the system, from capture to governed output, wired to real enterprise systems, not mocks.' },
                { n: '03', wk: 'Wk 4–8', title: 'Build & harden', body: 'Scope expands across agents, integrations, and governance. Evals run on every change; nothing ships without a passing gate.' },
                { n: '04', wk: 'Wk 8+',  title: 'Operate',        body: 'You own the system. We hand over runbooks, monitoring, and an evaluation pipeline; we stay on as engineering reserve.' },
              ].map((s, i) => (
                <div className="op-engage__tile" key={i}>
                  <div className="op-engage__head">
                    <span className="op-engage__n">{s.n}</span>
                    <span className="op-engage__wk">{s.wk}</span>
                  </div>
                  <div className="op-engage__title">{s.title}</div>
                  <div className="op-engage__body">{s.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOTER ─────────────────────────────────── */}
          <footer className="op-footer">
            <div className="op-footer__brand">NEWTUPLE TECHNOLOGIES</div>
            <div className="op-footer__contact">hello@newtuple.com  ·  newtuple.com</div>
          </footer>

        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
