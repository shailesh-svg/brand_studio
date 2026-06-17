/* Newtuple LinkedIn Carousel — slide kit (1080×1080 square).
   Background = real carousel-bg.png (navy→cobalt grid + baked circuit + wordmark).
   Text + chevron are HTML overlays. Components exported to window. */

const SX = {
  white:'#FFFFFF', dim:'rgba(255,255,255,0.74)', faint:'rgba(255,255,255,0.5)',
  accent:'#8FB4FF', cyan:'#00B8D9', cobalt:'#0047AB',
};

/* Square frame. `last` hides the swipe chevron. */
function Slide({ children, last }) {
  return (
    <div style={{
      position:'relative', width:1080, height:1080, overflow:'hidden',
      background:'#02020A', fontFamily:'Inter, sans-serif', flexShrink:0,
    }}>
      <img src="../assets/carousel-bg.png" alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'96px 92px 120px' }}>
        {children}
      </div>
      {!last && (
        <div style={{ position:'absolute', bottom:54, right:64, display:'flex', color:'#fff', opacity:.9 }}>
          {[0,1,2].map(i=>(<i key={i} data-lucide="chevron-right" style={{ width:30, height:30, marginLeft:-11, strokeWidth:1.5 }}></i>))}
        </div>
      )}
    </div>
  );
}

function Kick({ children }) {
  return <div style={{ fontSize:21, fontWeight:500, textTransform:'uppercase', letterSpacing:'0.16em', color:SX.faint, marginBottom:34 }}>{children}</div>;
}

/* 1 — Title / hook */
function TitleSlide() {
  return (
    <Slide>
      <Kick>Most AI agents fail in production</Kick>
      <h1 style={{ margin:0, fontWeight:200, fontSize:74, lineHeight:1.1, letterSpacing:'-0.02em', color:SX.white, maxWidth:840 }}>
        The problem usually is not the model.{' '}
        <span style={{ fontWeight:300, background:`linear-gradient(90deg,${SX.accent},${SX.cyan})`, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>It is the architecture.</span>
      </h1>
      <p style={{ margin:'40px 0 0', fontWeight:300, fontSize:30, lineHeight:1.5, color:SX.dim, maxWidth:760 }}>
        Three design patterns teams use to build reliable AI agents.
      </p>
    </Slide>
  );
}

/* 2 — Concept / narrative paragraph (parametric) */
function ConceptSlide({
  kick='The setup',
  lead=<React.Fragment>Many early prototypes follow a simple flow:{' '}<span style={{ fontFamily:'JetBrains Mono, monospace', fontWeight:500, fontSize:32, color:SX.accent }}>User → LLM → Response</span>.</React.Fragment>,
  body="That works for demos. Real systems are different — agents must interact with tools, handle multi-step workflows, and verify results.",
  last=false,
}) {
  return (
    <Slide last={last}>
      <Kick>{kick}</Kick>
      <p style={{ margin:0, fontWeight:300, fontSize:38, lineHeight:1.5, color:SX.white, maxWidth:840 }}>{lead}</p>
      {body && <p style={{ margin:'34px 0 0', fontWeight:300, fontSize:30, lineHeight:1.55, color:SX.dim, maxWidth:820 }}>{body}</p>}
    </Slide>
  );
}

/* 3 — Numbered pattern */
function PatternSlide({ num='01', name='Reflection Pattern', desc='The agent reviews its own output before finishing a task.', bullets=['Is the answer accurate?','Did I miss anything important?','Should I revise the result?'] }) {
  return (
    <Slide>
      <div style={{ display:'flex', alignItems:'baseline', gap:24, marginBottom:30 }}>
        <span style={{ fontWeight:600, fontSize:88, lineHeight:0.9, letterSpacing:'-0.03em', background:`linear-gradient(135deg,${SX.accent},${SX.cyan})`, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>{num}</span>
        <h2 style={{ margin:0, fontWeight:300, fontSize:48, color:SX.white }}>{name}</h2>
      </div>
      <p style={{ margin:'0 0 30px', fontWeight:300, fontSize:31, lineHeight:1.45, color:SX.dim, maxWidth:800 }}>{desc}</p>
      <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
        {bullets.map((b,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', gap:18, fontSize:28, fontWeight:300, color:SX.white }}>
            <i data-lucide="chevron-right" style={{ width:26, height:26, color:SX.cyan, strokeWidth:2 }}></i>{b}
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* 9 — Closing / engagement */
function ClosingSlide() {
  return (
    <Slide last>
      <h2 style={{ margin:0, fontWeight:200, fontSize:60, lineHeight:1.2, letterSpacing:'-0.01em', color:SX.white, maxWidth:820 }}>
        AI agents become far more reliable when designed with the right architecture.
      </h2>
      <p style={{ margin:'48px 0 0', fontWeight:400, fontSize:32, lineHeight:1.45, color:SX.accent, maxWidth:760 }}>
        What design patterns have worked well for your AI systems?
      </p>
      <div style={{ marginTop:54, display:'flex', alignItems:'center', gap:16 }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:24, fontWeight:500, color:'#0047AB', background:'#fff', padding:'16px 30px', borderRadius:9999 }}>
          Build Your Agentic Enterprise <i data-lucide="arrow-right" style={{ width:22, height:22 }}></i>
        </span>
      </div>
    </Slide>
  );
}

Object.assign(window, { SX, Slide, Kick, TitleSlide, ConceptSlide, PatternSlide, ClosingSlide });
