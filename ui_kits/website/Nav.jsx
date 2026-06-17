/* Nav — fixed top, translucent white with blur (on dark hero) */
function Nav() {
  const links = ['Services', 'Accelerators', 'Industries', 'Company'];
  useLucide();
  return (
    <div style={{
      position: 'absolute', top: 18, left: 0, right: 0, zIndex: 20,
      display: 'flex', justifyContent: 'center', padding: '0 24px',
    }}>
      <div style={{
        width: '100%', maxWidth: 1180,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '13px 14px 13px 24px', borderRadius: 9999,
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.16)',
      }}>
        <img src="../../assets/logo-white.png" alt="Newtuple" style={{ height: 19 }} />
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              color: 'rgba(255,255,255,0.82)', fontSize: 14, fontWeight: 400,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4,
            }}>{l}<i data-lucide="chevron-down" style={{ width: 14, height: 14, opacity: .6 }}></i></a>
          ))}
          <a href="#" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14, textDecoration: 'none' }}>Blog</a>
        </div>
        <Button variant="secondary" onDark>Contact Us</Button>
      </div>
    </div>
  );
}
Object.assign(window, { Nav });
