/* FAQ accordion + cobalt Footer */
const FAQS = [
  { q: 'How is Newtuple different from other AI consultancies?', a: 'We focus exclusively on production-grade AI. While most consultancies stop at proof-of-concept, we take agents and applications through to production with SLA-backed operations, observability, and continuous optimization.' },
  { q: 'What industries do you work with?', a: "We've delivered across aviation, HR tech, financial services, real estate, and sales operations. Our AI frameworks are industry-agnostic — the core patterns of agentic AI apply everywhere." },
  { q: 'How long does a typical engagement take?', a: 'Prototypes in 4–6 weeks. Production deployments in 8–12 weeks. Our GenAI accelerators give you a ~70% head start, so we move significantly faster than building from scratch.' },
  { q: 'Do you build custom solutions or use templates?', a: 'Both. Our accelerator products (Dialogtuple, Gaugetuple) cover repeatable AI patterns. We customize these for your specific use case, data, and integration requirements.' },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  useLucide();
  return (
    <Section bg={C.tint}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Kicker>Knowledge</Kicker>
        <h2 style={{ margin: '14px 0 0', fontWeight: 300, fontSize: 36, color: C.ink }}>Frequently asked</h2>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQS.map((f, k) => {
          const isOpen = open === k;
          return (
            <div key={k} onClick={() => setOpen(isOpen ? -1 : k)}
              style={{
                background: '#fff', border: `1px solid ${isOpen ? C.cobalt : C.border}`,
                borderRadius: 18, padding: '20px 24px', cursor: 'pointer', transition: 'border-color .3s',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span style={{ fontWeight: 500, fontSize: 17, color: C.ink }}>{f.q}</span>
                <i data-lucide={isOpen ? 'minus' : 'plus'} style={{ width: 18, height: 18, color: C.cobalt, flexShrink: 0 }}></i>
              </div>
              <div style={{
                maxHeight: isOpen ? 160 : 0, overflow: 'hidden',
                transition: 'max-height .5s cubic-bezier(.4,0,.2,1), margin .5s',
                marginTop: isOpen ? 12 : 0,
              }}>
                <p style={{ margin: 0, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: C.body }}>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Footer() {
  useLucide();
  const cols = {
    Services: ['Build AI Agents', 'Build AI Apps'],
    Accelerators: ['GenAI Accelerators', 'Dialogtuple', 'Gaugetuple'],
    Company: ['About Us', 'Life at Newtuple', 'Careers', 'Blog'],
  };
  return (
    <footer style={{ background: C.cobalt, color: '#fff', padding: '72px 32px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ maxWidth: 320 }}>
            <img src="../../assets/logo-white.png" alt="Newtuple" style={{ height: 22, marginBottom: 18 }} />
            <p style={{ margin: 0, fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.8)' }}>
              A modern, AI-first consulting company. Bringing the power of AI + Data to your organization.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              {['LinkedIn', 'Twitter', 'GitHub'].map(s => (
                <a key={s} href="#" style={{
                  fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.85)', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,.28)', borderRadius: 9999, padding: '6px 14px',
                }}>{s}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 64 }}>
            {Object.entries(cols).map(([h, items]) => (
              <div key={h}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>{h}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {items.map(it => (
                    <a key={it} href="#" style={{ color: 'rgba(255,255,255,.78)', fontSize: 14, fontWeight: 300, textDecoration: 'none' }}>{it}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.18)', marginTop: 48, paddingTop: 22, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.65)' }}>© 2026 Newtuple Technologies Private Limited. All rights reserved.</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.65)' }}>Privacy Policy · Service Agreement</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { FAQ, Footer });
