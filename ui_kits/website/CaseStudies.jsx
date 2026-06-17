/* Case studies — "Work we've done" grid */
const CASES = [
  { tag: 'Multi-Agent Document Intelligence', title: 'Alternative Investments: Document Intelligence at 95% Accuracy', metric: '30–40k docs/mo' },
  { tag: 'LLM Hallucination Prevention', title: 'AI Fact-Verification Platform at Scale', metric: 'Real-time' },
  { tag: 'Multi-Agent Orchestration', title: 'Aviation OEM: From Hours to Seconds with Agentic Data Access', metric: '90%+ accuracy' },
  { tag: 'GenAI Data Intelligence', title: 'B2B Sales Agency: 10x Performance, Zero-Dollar Data Stack', metric: '15 days → 1 day' },
  { tag: 'Agentic RAG Platform', title: 'Data Intelligence Platform for Investment Research', metric: 'NL querying' },
  { tag: 'Computer Vision + IoT', title: 'Healthcare Laundry: Recovering $5M+ Annually with RFID & AI', metric: '$5M+ saved' },
];

function CaseCard({ tag, title, metric }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: '#fff', borderRadius: 24, padding: 26,
        border: `1px solid ${h ? C.cobalt : C.border}`,
        boxShadow: h ? '0 14px 36px rgba(14,19,32,.08)' : 'none',
        transition: 'all .3s cubic-bezier(.4,0,.2,1)', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: 14, minHeight: 200,
      }}>
      <span style={{
        alignSelf: 'flex-start', fontSize: 11, fontWeight: 500, textTransform: 'uppercase',
        letterSpacing: '0.1em', color: C.cobalt, background: 'rgba(0,71,171,.07)',
        padding: '5px 11px', borderRadius: 9999,
      }}>{tag}</span>
      <h3 style={{ margin: 0, fontWeight: 500, fontSize: 19, lineHeight: 1.35, color: C.ink, flex: 1 }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: C.cobalt, fontVariantNumeric: 'tabular-nums' }}>{metric}</span>
        <i data-lucide="arrow-up-right" style={{ width: 18, height: 18, color: h ? C.cobalt : C.faint, transition: 'color .3s' }}></i>
      </div>
    </div>
  );
}

function CaseStudies() {
  useLucide();
  return (
    <Section bg="#fff">
      <div style={{ marginBottom: 44, maxWidth: 620 }}>
        <Kicker>Work we've done</Kicker>
        <h2 style={{ margin: '14px 0 12px', fontWeight: 300, fontSize: 40, color: C.ink }}>Production AI systems</h2>
        <p style={{ margin: 0, fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: C.body }}>
          Across aviation, finance, healthcare, and enterprise SaaS.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {CASES.map(c => <CaseCard key={c.title} {...c} />)}
      </div>
    </Section>
  );
}
Object.assign(window, { CaseStudies });
