/* Newtuple Dashboard UI Kit — shared primitives (exported to window) */
const D = {
  cobalt:'#0047AB', cobalt700:'#003C90', cyan:'#00B8D9',
  ink:'#0E1320', body:'#4B5563', muted:'#6B7686', faint:'#9AA4B2',
  border:'#E2E6EC', line:'#EEF0F4', tint:'#F7F8FA', white:'#FFFFFF',
  success:'#1FA971', warn:'#E8852B', high:'#F2B705',
};

function Sidebar({ active, setActive }) {
  const nav = [
    ['Overview','layout-dashboard'], ['Agents','bot'], ['Runs','activity'],
    ['Evaluations','gauge'], ['Datasets','database'], ['Integrations','plug'],
  ];
  return (
    <aside style={{ width:236, background:'#fff', borderRight:`1px solid ${D.border}`, display:'flex', flexDirection:'column', padding:'22px 16px', flexShrink:0 }}>
      <img src="../../assets/logo-cobalt.png" alt="Newtuple" style={{ height:18, alignSelf:'flex-start', margin:'2px 8px 26px' }} />
      <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
        {nav.map(([label,icon]) => {
          const on = active===label;
          return (
            <button key={label} onClick={()=>setActive(label)} style={{
              display:'flex', alignItems:'center', gap:11, padding:'10px 12px', borderRadius:12,
              border:'none', cursor:'pointer', textAlign:'left', fontFamily:'Inter', fontSize:14,
              fontWeight: on?500:400, color: on?D.cobalt:D.body,
              background: on?'rgba(0,71,171,.07)':'transparent', transition:'all .2s',
            }}>
              <i data-lucide={icon} style={{ width:18, height:18 }}></i>{label}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop:'auto', display:'flex', alignItems:'center', gap:10, padding:'10px 12px', borderTop:`1px solid ${D.line}` }}>
        <div style={{ width:30, height:30, borderRadius:9999, background:D.cobalt, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:600 }}>NT</div>
        <div style={{ lineHeight:1.25 }}><div style={{ fontSize:13, fontWeight:500, color:D.ink }}>Ops Team</div><div style={{ fontSize:11, color:D.muted }}>workspace</div></div>
      </div>
    </aside>
  );
}

function Topbar({ title }) {
  return (
    <header style={{ height:62, borderBottom:`1px solid ${D.border}`, background:'rgba(255,255,255,.8)', backdropFilter:'blur(10px)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 28px', flexShrink:0 }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:18, fontWeight:600, color:D.ink }}>{title}</span>
        <span style={{ fontSize:11, fontWeight:500, color:D.success, background:'#E6F6EF', padding:'4px 10px', borderRadius:9999 }}>● Live</span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:14 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, background:D.tint, border:`1px solid ${D.border}`, borderRadius:9999, padding:'8px 14px', width:240 }}>
          <i data-lucide="search" style={{ width:15, height:15, color:D.faint }}></i>
          <span style={{ fontSize:13, color:D.faint }}>Search agents, runs…</span>
        </div>
        <i data-lucide="bell" style={{ width:19, height:19, color:D.muted }}></i>
        <button style={{ fontFamily:'Inter', fontWeight:500, fontSize:14, background:D.cobalt, color:'#fff', border:'none', borderRadius:9999, padding:'9px 18px', cursor:'pointer', display:'inline-flex', gap:7, alignItems:'center', boxShadow:'0 8px 20px rgba(0,71,171,.2)' }}>
          <i data-lucide="plus" style={{ width:15, height:15 }}></i>New Agent
        </button>
      </div>
    </header>
  );
}
Object.assign(window, { D, Sidebar, Topbar });
