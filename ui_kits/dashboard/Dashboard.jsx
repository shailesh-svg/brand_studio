/* Dashboard body — KPI cards, agent runs table, live trace panel */
function Kpi({ label, value, delta, icon, up=true }) {
  return (
    <div style={{ flex:1, background:'#fff', border:`1px solid ${D.border}`, borderRadius:20, padding:'20px 22px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <span style={{ fontSize:12, fontWeight:500, textTransform:'uppercase', letterSpacing:'.1em', color:D.muted }}>{label}</span>
        <div style={{ width:34, height:34, borderRadius:10, background:'rgba(0,71,171,.07)', color:D.cobalt, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <i data-lucide={icon} style={{ width:17, height:17 }}></i>
        </div>
      </div>
      <div style={{ fontSize:32, fontWeight:600, letterSpacing:'-0.02em', color:D.ink, margin:'12px 0 4px', fontVariantNumeric:'tabular-nums' }}>{value}</div>
      <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:13, fontWeight:500, color: up?D.success:D.warn }}>
        <i data-lucide={up?'trending-up':'trending-down'} style={{ width:14, height:14 }}></i>{delta}
        <span style={{ color:D.faint, fontWeight:400 }}>vs last week</span>
      </div>
    </div>
  );
}

const RUNS = [
  ['Document Intelligence', 'Multi-Agent', 'Success', '2.3s', '95.2%'],
  ['Fact Verification', 'Reflection', 'Success', '1.1s', '98.7%'],
  ['Aviation Data Access', 'ReAct', 'Running', '—', '91.0%'],
  ['Support Deflection', 'Multi-Agent', 'Success', '0.8s', '93.4%'],
  ['Patent Invalidity', 'Reflection', 'Review', '4.6s', '88.1%'],
];
const STATUS = {
  Success:[D.success,'#E6F6EF'], Running:[D.cobalt,'rgba(0,71,171,.08)'],
  Review:[D.warn,'#FDEFE2'],
};

function RunsTable() {
  return (
    <div style={{ background:'#fff', border:`1px solid ${D.border}`, borderRadius:20, overflow:'hidden', flex:2 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 22px', borderBottom:`1px solid ${D.line}` }}>
        <span style={{ fontSize:16, fontWeight:600, color:D.ink }}>Recent agent runs</span>
        <span style={{ fontSize:13, color:D.cobalt, fontWeight:500, cursor:'pointer' }}>View all</span>
      </div>
      <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
        <thead><tr>
          {['Agent','Pattern','Status','Latency','Accuracy'].map(h=>(
            <th key={h} style={{ textAlign:'left', padding:'11px 22px', fontSize:11, fontWeight:500, textTransform:'uppercase', letterSpacing:'.08em', color:D.faint, background:D.tint }}>{h}</th>
          ))}
        </tr></thead>
        <tbody>
          {RUNS.map((r,i)=>{
            const [fg,bg]=STATUS[r[2]];
            return (
              <tr key={i} style={{ borderTop:`1px solid ${D.line}` }}>
                <td style={{ padding:'13px 22px', fontWeight:500, color:D.ink }}>{r[0]}</td>
                <td style={{ padding:'13px 22px', color:D.body }}>{r[1]}</td>
                <td style={{ padding:'13px 22px' }}><span style={{ fontSize:12, fontWeight:500, color:fg, background:bg, padding:'4px 11px', borderRadius:9999 }}>{r[2]}</span></td>
                <td style={{ padding:'13px 22px', color:D.body, fontVariantNumeric:'tabular-nums' }}>{r[3]}</td>
                <td style={{ padding:'13px 22px', fontWeight:600, color:D.cobalt, fontVariantNumeric:'tabular-nums' }}>{r[4]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TracePanel() {
  const steps = [
    ['Reason','Parse 14-page filing for fund NAV','brain'],
    ['Act','Call OCR + extraction tool','wrench'],
    ['Observe','37 fields extracted, 2 low-confidence','eye'],
    ['Reflect','Re-verify 2 fields against source','rotate-ccw'],
    ['Finalize','95.2% confidence — passed','check'],
  ];
  return (
    <div style={{ background:'#fff', border:`1px solid ${D.border}`, borderRadius:20, padding:'20px 22px', flex:1, minWidth:280 }}>
      <div style={{ fontSize:16, fontWeight:600, color:D.ink, marginBottom:4 }}>Live trace</div>
      <div style={{ fontSize:12, color:D.muted, marginBottom:18 }}>Document Intelligence · run #4821</div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        {steps.map((s,i)=>(
          <div key={i} style={{ display:'flex', gap:12, paddingBottom: i<steps.length-1?18:0, position:'relative' }}>
            {i<steps.length-1 && <div style={{ position:'absolute', left:15, top:30, bottom:0, width:1.5, background:D.line }}></div>}
            <div style={{ width:30, height:30, borderRadius:9999, background:'rgba(0,71,171,.07)', color:D.cobalt, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, zIndex:1 }}>
              <i data-lucide={s[2]} style={{ width:15, height:15 }}></i>
            </div>
            <div style={{ lineHeight:1.35 }}>
              <div style={{ fontSize:13, fontWeight:600, color:D.ink }}>{s[0]}</div>
              <div style={{ fontSize:12.5, color:D.body }}>{s[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { Kpi, RunsTable, TracePanel });
