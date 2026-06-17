/* Newtuple Website UI Kit — shared primitives
   Exports to window for cross-file use (Babel scope isolation). */

const C = {
  cobalt: '#0047AB', cobalt700: '#003C90', cyan: '#00B8D9',
  ink: '#0E1320', body: '#4B5563', muted: '#6B7686', faint: '#9AA4B2',
  border: '#E2E6EC', tint: '#F7F8FA', white: '#FFFFFF',
};

/* Eyebrow / kicker label */
function Kicker({ children, onDark }) {
  return (
    <div style={{
      fontSize: 12, fontWeight: 500, textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: onDark ? 'rgba(255,255,255,0.6)' : C.muted,
    }}>{children}</div>
  );
}

/* Pill button */
function Button({ children, variant = 'primary', icon, onClick, onDark }) {
  const base = {
    fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15,
    borderRadius: 9999, padding: '13px 24px', cursor: 'pointer',
    border: '1.5px solid transparent', display: 'inline-flex',
    alignItems: 'center', gap: 8, transition: 'all .3s cubic-bezier(.4,0,.2,1)',
    whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: C.cobalt, color: '#fff', boxShadow: '0 12px 32px rgba(0,71,171,.22)' },
    secondary: onDark
      ? { background: 'rgba(255,255,255,.08)', color: '#fff', borderColor: 'rgba(255,255,255,.25)' }
      : { background: '#fff', color: C.cobalt, borderColor: C.cobalt },
    ghost: { background: 'transparent', color: onDark ? '#fff' : C.body },
  };
  const [h, setH] = React.useState(false);
  const hover = {
    primary: { background: C.cobalt700, transform: 'translateY(-1px)' },
    secondary: onDark ? { background: 'rgba(255,255,255,.16)' } : { background: 'rgba(0,71,171,.05)' },
    ghost: { color: C.cobalt },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...base, ...variants[variant], ...(h ? hover[variant] : {}) }}>
      {children}
      {icon && <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>}
    </button>
  );
}

/* Section wrapper — max-w-7xl, generous vertical rhythm */
function Section({ children, bg = '#fff', pad = 96, id }) {
  return (
    <section id={id} style={{ background: bg, padding: `${pad}px 32px` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

/* Tag chip */
function Chip({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13,
      fontWeight: 400, padding: '6px 13px', borderRadius: 9999,
      background: C.tint, border: `1px solid ${C.border}`, color: '#374151',
    }}>{children}</span>
  );
}

/* refresh lucide icons after render */
function useLucide(dep) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

Object.assign(window, { C, Kicker, Button, Section, Chip, useLucide });
