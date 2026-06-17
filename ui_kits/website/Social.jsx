/* Clients + Testimonials.
   NOTE: real client logo images were not available (cross-origin); rendered as
   monochrome text wordmarks as a faithful stand-in. Swap in real logos when available. */
const CLIENTS = ['Siemens', 'Menyala', 'Consulum', 'Elyndra', 'HRBrain', 'ProAI', 'AkomaKonnect', 'Aivanta'];

function Clients() {
  return (
    <Section bg={C.tint} pad={64}>
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <Kicker>Trusted by forward-thinking enterprises</Kicker>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 52px', justifyContent: 'center', alignItems: 'center' }}>
        {CLIENTS.map(c => (
          <span key={c} style={{
            fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em',
            color: C.faint, opacity: .85,
          }}>{c}</span>
        ))}
      </div>
    </Section>
  );
}

const QUOTES = [
  { q: "There are good GenAI teams out there, but very few that understand pushing things into production at scale. Their approach reflects work with many use cases and F500 companies.", who: 'Chase Hughes', role: 'Founder, ProAI' },
  { q: "The team delivered a highly complex solution involving multiple AI agents on top of big data — on time, within cost, and with great results.", who: 'Confidential', role: 'VP, Aviation Logistics' },
  { q: "Invaluable expertise in NLP, ML, and GenAI made it possible to tackle the most subtle and complex biases in corporate environments.", who: 'Tim Glowa', role: 'Founder, HRBrain' },
];

function Testimonials() {
  const [i, setI] = React.useState(0);
  useLucide();
  const t = QUOTES[i];
  return (
    <Section bg="#fff">
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <Kicker>Voices from teams that shipped production AI with us</Kicker>
      </div>
      <div style={{
        maxWidth: 820, margin: '0 auto', textAlign: 'center',
        background: C.tint, border: `1px solid ${C.border}`, borderRadius: 28, padding: '48px 56px',
      }}>
        <i data-lucide="quote" style={{ width: 30, height: 30, color: C.cobalt, opacity: .4 }}></i>
        <p style={{ margin: '18px 0 28px', fontWeight: 300, fontSize: 24, lineHeight: 1.5, color: C.ink, letterSpacing: '-0.01em' }}>
          {t.q}
        </p>
        <div style={{ fontWeight: 600, fontSize: 16, color: C.ink }}>{t.who}</div>
        <div style={{ fontSize: 14, color: C.muted, marginTop: 2 }}>{t.role}</div>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 26 }}>
        {QUOTES.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Quote ${k + 1}`} style={{
            width: k === i ? 28 : 9, height: 9, borderRadius: 9999, border: 'none', cursor: 'pointer',
            background: k === i ? C.cobalt : C.border, transition: 'all .3s',
          }}></button>
        ))}
      </div>
    </Section>
  );
}
Object.assign(window, { Clients, Testimonials });
