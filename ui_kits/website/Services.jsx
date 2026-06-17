/* Services — "Two ways we accelerate AI" — two large cards */
function ServiceCard({ icon, title, desc, bullets }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        flex: 1, background: '#fff', borderRadius: 28, padding: 36,
        border: `1px solid ${h ? C.cobalt : C.border}`,
        boxShadow: h ? '0 18px 48px rgba(0,71,171,.10)' : '0 1px 3px rgba(14,19,32,.05)',
        transition: 'all .3s cubic-bezier(.4,0,.2,1)', cursor: 'pointer',
      }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14, background: 'rgba(0,71,171,.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: C.cobalt, marginBottom: 22,
      }}><i data-lucide={icon} style={{ width: 24, height: 24 }}></i></div>
      <h3 style={{ margin: '0 0 12px', fontWeight: 600, fontSize: 24, color: C.ink }}>{title}</h3>
      <p style={{ margin: '0 0 22px', fontWeight: 300, fontSize: 16, lineHeight: 1.65, color: C.body }}>{desc}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 26 }}>
        {bullets.map(b => (
          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: '#374151', fontWeight: 400 }}>
            <i data-lucide="check" style={{ width: 16, height: 16, color: C.cobalt, strokeWidth: 2.2 }}></i>{b}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: C.cobalt, fontWeight: 500, fontSize: 15 }}>
        Learn More <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
      </div>
    </div>
  );
}

function Services() {
  useLucide();
  return (
    <Section bg={C.tint}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Kicker>Two ways we accelerate AI for you</Kicker>
        <h2 style={{ margin: '14px 0 0', fontWeight: 300, fontSize: 40, letterSpacing: '0.01em', color: C.ink }}>
          From prototype to production
        </h2>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <ServiceCard icon="bot" title="Build AI Agents"
          desc="We design, build, and operate AI agents with enterprise-grade infrastructure — automation that runs all day, at scale, with governance and measurable ROI."
          bullets={['Autonomous PMO agents', 'Recruitment copilots', 'Finance operators', 'Support agents']} />
        <ServiceCard icon="layout-template" title="Build AI Apps"
          desc="Strategy, architecture and engineering for AI-first startups and product teams. We define the roadmap, choose the stack, then build and operate end to end."
          bullets={['Product roadmap & strategy', '0 to 1 productization', 'AI augmentation & rebuilds', 'Managed ops & GenAI pods']} />
      </div>
    </Section>
  );
}
Object.assign(window, { Services });
