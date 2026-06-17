/* AI Governance Moment — LinkedIn carousel (1080×1080) v3
   9-slide narrative: Hook → Two Signals This Week → Mythos + Glasswing →
   Why It Matters → Failures ×2 → The Pattern → What To Do → CTA
   LinkedIn safe zone: 96px margins on all sides */

const G = {
  cobalt:'#0047AB', cobalt700:'#003C90', cobaltLite:'#2E6FD6',
  navy950:'#02020A', navy900:'#0A0E2A', navy800:'#141857',
  ink:'#0E1320', body:'#374151', muted:'#6B7686', border:'#E2E6EC', tint:'#F7F8FA',
  white:'#FFFFFF', accentLight:'#8FB4FF', warning:'#D97706', danger:'#DC2626',
};

const TOTAL = 9;
const SAFE = 96; // LinkedIn safe-zone margin

/* ── Shared slide frame ─────────────────────────────────── */
function GSlide({ children, bg='#fff', logo='cobalt', curves=true, last=false, kicker, kickerColor, pageNum }) {
  const isDark = [G.cobalt, G.cobalt700, G.navy950, G.navy900, G.navy800].includes(bg);
  const logoSrc = logo === 'white' ? '../assets/logo-white.png' : '../assets/logo-cobalt.png';
  const curvesSrc = isDark ? '../assets/geometric-curves-white.png' : '../assets/geometric-curves.png';
  return (
    <div style={{ position:'relative', width:1080, height:1080, overflow:'hidden', background:bg, fontFamily:'Inter, sans-serif', flexShrink:0 }}>
      {curves && (
        <img src={curvesSrc} alt="" style={{ position:'absolute', left:-60, bottom:-200, width:'120%', opacity:isDark ? 0.14 : 0.8, pointerEvents:'none', zIndex:0 }} />
      )}
      {/* Top bar — within safe zone */}
      <div style={{ position:'absolute', top:SAFE, left:SAFE, right:SAFE, display:'flex', justifyContent:'space-between', alignItems:'center', zIndex:4 }}>
        {kicker ? (
          <span style={{
            display:'inline-flex', alignItems:'center', gap:8, fontSize:13, fontWeight:500, textTransform:'uppercase',
            letterSpacing:'0.18em', padding:'8px 16px', borderRadius:9999,
            background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,71,171,0.08)',
            color: kickerColor || (isDark ? '#fff' : G.cobalt),
            border:`1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,71,171,0.18)'}`,
          }}>{kicker}</span>
        ) : <span></span>}
        <img src={logoSrc} alt="Newtuple" style={{ height:26, display:'block' }} />
      </div>
      {/* Content area — padded inside safe zone */}
      <div style={{ position:'absolute', inset:0, padding:`${SAFE + 60}px ${SAFE}px ${SAFE + 60}px`, display:'flex', flexDirection:'column', zIndex:1 }}>
        {children}
      </div>
      {/* Chevron — within safe zone */}
      {!last && (
        <div style={{ position:'absolute', bottom:SAFE + 4, right:SAFE, display:'flex', color:isDark ? '#fff' : G.cobalt, opacity:.85, zIndex:4 }}>
          {[0,1,2].map(i=><i key={i} data-lucide="chevron-right" style={{ width:26, height:26, marginLeft:-9, strokeWidth:1.5 }}></i>)}
        </div>
      )}
      {/* Page number — within safe zone */}
      <div style={{ position:'absolute', bottom:SAFE + 6, left:SAFE, fontSize:12, fontWeight:500, letterSpacing:'0.16em', color:isDark ? 'rgba(255,255,255,0.4)' : G.muted, fontFamily:'JetBrains Mono, monospace', zIndex:4 }}>
        {String(pageNum||window.__GPAGE||1).padStart(2,'0')} / {String(TOTAL).padStart(2,'0')}
      </div>
    </div>
  );
}

/* ── S1 — Hook ─────────────────────────────────────────── */
function S1_Hook() {
  return (
    <GSlide bg={G.cobalt} logo="white" kicker="AI Governance" kickerColor="#fff" curves={true} pageNum={1}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:28 }}>
        <p style={{ margin:0, fontWeight:200, fontSize:78, lineHeight:1.08, letterSpacing:'-0.025em', color:'#fff', maxWidth:880 }}>
          Everyone is taking AI governance seriously.
        </p>
        <p style={{ margin:0, fontWeight:500, fontSize:64, lineHeight:1.12, letterSpacing:'-0.02em', color:G.accentLight }}>
          Are you?
        </p>
        <div style={{ height:1, background:'rgba(255,255,255,0.22)', maxWidth:440, margin:'6px 0' }}></div>
        <p style={{ margin:0, fontWeight:300, fontSize:28, lineHeight:1.5, color:'rgba(255,255,255,0.78)', maxWidth:700 }}>
          The organisations that aren't asking this question yet are the ones that will be answering for it later.
        </p>
      </div>
    </GSlide>
  );
}

/* ── S2 — Two Signals This Week (custom split layout) ──── */
function S2_ThisWeek() {
  const glasswingPoints = [
    ['shield-check','10,000+ critical zero-day vulnerabilities found across major OSes & browsers'],
    ['lock','150 new orgs · 15 countries · all security-vetted before access'],
    ['zap','Sectors: power, water, healthcare, comms, hardware'],
    ['trending-up','Goal: give defenders a 6–12 month head start before threats proliferate'],
  ];
  const openaiPoints = [
    ['alert-triangle','Risk Assessment & Mitigation: rigorous evaluation for catastrophic risks, loss of control and cyber offense'],
    ['sliders','Deployment & Safety Thresholds: internal protocols dictate when a model is "safe enough" to release'],
    ['shield','Security & Incident Response: strict risk management, external expert input, defined response timelines'],
  ];
  return (
    <div style={{ position:'relative', width:1080, height:1080, overflow:'hidden', background:G.navy950, fontFamily:'Inter, sans-serif', flexShrink:0, display:'flex', flexDirection:'column' }}>
      <img src="../assets/geometric-curves-white.png" alt="" style={{ position:'absolute', left:-60, bottom:-200, width:'120%', opacity:0.12, pointerEvents:'none', zIndex:0 }} />
      {/* Header */}
      <div style={{ padding:`${SAFE}px ${SAFE}px 20px`, color:'#fff', position:'relative', zIndex:2 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
          <span style={{ display:'inline-flex', fontSize:13, fontWeight:500, textTransform:'uppercase', letterSpacing:'0.18em', padding:'8px 16px', borderRadius:9999, background:'rgba(255,255,255,0.12)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)' }}>This Week</span>
          <img src="../assets/logo-white.png" alt="Newtuple" style={{ height:26, display:'block' }} />
        </div>
        <h2 style={{ margin:0, fontWeight:200, fontSize:38, lineHeight:1.2, letterSpacing:'-0.02em', color:'#fff', maxWidth:880 }}>
          Two signals. One week.{' '}
          <span style={{ color:G.accentLight, fontWeight:400 }}>Every enterprise AI team should pause.</span>
        </h2>
      </div>
      {/* Split cards */}
      <div style={{ display:'flex', flex:1, margin:`0 ${SAFE}px ${SAFE + 40}px`, gap:16, position:'relative', zIndex:2 }}>
        {/* Left: Glasswing */}
        <div style={{ flex:1, background:G.navy800, borderRadius:20, padding:'28px 30px', display:'flex', flexDirection:'column', gap:12 }}>
          <span style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:G.accentLight }}>Anthropic · Expanding Project Glasswing</span>
          <h3 style={{ margin:'4px 0 6px', fontWeight:500, fontSize:22, lineHeight:1.25, color:'#fff' }}>Controlled rollout of the world's most powerful AI cyber model</h3>
          <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
            {glasswingPoints.map(([ic, text])=>(
              <div key={text} style={{ display:'flex', gap:12, alignItems:'flex-start', background:'rgba(255,255,255,0.06)', borderRadius:12, padding:'12px 14px' }}>
                <i data-lucide={ic} style={{ width:16, height:16, color:G.accentLight, strokeWidth:1.8, flexShrink:0, marginTop:2 }}></i>
                <span style={{ fontSize:14, fontWeight:300, color:'rgba(255,255,255,0.85)', lineHeight:1.55 }}>{text}</span>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', gap:20, marginTop:4, paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
            {[['$100M','Committed by Anthropic'],['10K+','Vulnerabilities found'],['AWS · Apple · Google','Coalition members']].map(([n,l])=>(
              <div key={l}>
                <div style={{ fontWeight:600, fontSize:16, color:G.accentLight }}>{n}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.45)', marginTop:2, lineHeight:1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: OpenAI */}
        <div style={{ flex:1, background:G.cobalt, borderRadius:20, padding:'28px 30px', display:'flex', flexDirection:'column', gap:12 }}>
          <span style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'rgba(255,255,255,0.7)' }}>OpenAI · Frontier Governance Framework</span>
          <h3 style={{ margin:'4px 0 6px', fontWeight:500, fontSize:22, lineHeight:1.25, color:'#fff' }}>22-page governance doc: regulation forced the hand</h3>
          <p style={{ margin:'0 0 8px', fontSize:14, fontWeight:300, color:'rgba(255,255,255,0.72)', lineHeight:1.55 }}>
            California, the EU and Illinois passed three new AI laws in 48 hours. OpenAI's response was to publish a formal accountability framework, or face consequences.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
            {openaiPoints.map(([ic, text])=>(
              <div key={text} style={{ display:'flex', gap:12, alignItems:'flex-start', background:'rgba(255,255,255,0.1)', borderRadius:12, padding:'12px 14px' }}>
                <i data-lucide={ic} style={{ width:16, height:16, color:'#fff', strokeWidth:1.8, flexShrink:0, marginTop:2 }}></i>
                <span style={{ fontSize:14, fontWeight:300, color:'rgba(255,255,255,0.9)', lineHeight:1.55 }}>{text}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop:4, paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.18)', fontSize:13, fontWeight:400, color:'rgba(255,255,255,0.65)', lineHeight:1.5 }}>
            One built governance in. One had to write it down.<br/>
            <span style={{ color:'#fff', fontWeight:500 }}>The direction of travel is the same: governance is no longer optional.</span>
          </div>
        </div>
      </div>
      {/* Chevrons + page */}
      <div style={{ position:'absolute', bottom:SAFE + 4, right:SAFE, display:'flex', color:'#fff', opacity:.85, zIndex:4 }}>
        {[0,1,2].map(i=><i key={i} data-lucide="chevron-right" style={{ width:26, height:26, marginLeft:-9, strokeWidth:1.5 }}></i>)}
      </div>
      <div style={{ position:'absolute', bottom:SAFE + 6, left:SAFE, fontSize:12, fontWeight:500, letterSpacing:'0.16em', color:'rgba(255,255,255,0.38)', fontFamily:'JetBrains Mono, monospace', zIndex:4 }}>02 / 09</div>
    </div>
  );
}

/* ── S3 — What is Mythos? + Project Glasswing ──────────── */
function S3_MythosGlasswing() {
  return (
    <GSlide bg="#fff" logo="cobalt" kicker="Context" curves={false} pageNum={3}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:20 }}>
        <h2 style={{ margin:0, fontWeight:300, fontSize:38, lineHeight:1.2, letterSpacing:'-0.02em', color:G.ink }}>
          Before we go further. Two things worth knowing.
        </h2>
        <div style={{ display:'flex', gap:16, flex:1 }}>
          {/* Mythos (Newtuple) */}
          <div style={{ flex:1, background:G.navy900, borderRadius:20, padding:'28px 26px', display:'flex', flexDirection:'column', gap:14, color:'#fff' }}>
            <span style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:G.accentLight }}>Newtuple · Mythos</span>
            <h3 style={{ margin:0, fontWeight:500, fontSize:24, lineHeight:1.25, color:'#fff' }}>Enterprise AI platform built for governance</h3>
            <p style={{ margin:0, fontSize:16, fontWeight:300, lineHeight:1.6, color:'rgba(255,255,255,0.78)' }}>
              Mythos is Newtuple's platform for deploying AI inside enterprise environments, with safety controls, access governance, and compliance built in from day one.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
              {[
                ['shield-check','Safety by design: guardrails baked in, not added after'],
                ['building-2','Built for regulated industries and critical environments'],
                ['lock','Every deployment is vetted, monitored and auditable'],
              ].map(([ic, t])=>(
                <div key={t} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <i data-lucide={ic} style={{ width:16, height:16, color:G.accentLight, strokeWidth:1.8, flexShrink:0, marginTop:3 }}></i>
                  <span style={{ fontSize:14, fontWeight:300, color:'rgba(255,255,255,0.85)', lineHeight:1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Project Glasswing (Anthropic) */}
          <div style={{ flex:1, background:G.tint, border:`1.5px solid ${G.border}`, borderRadius:20, padding:'28px 26px', display:'flex', flexDirection:'column', gap:14 }}>
            <span style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:G.cobalt }}>Anthropic · Project Glasswing</span>
            <h3 style={{ margin:0, fontWeight:500, fontSize:24, lineHeight:1.25, color:G.ink }}>An initiative to secure the world's most critical software</h3>
            <p style={{ margin:0, fontSize:16, fontWeight:400, lineHeight:1.6, color:G.body }}>
              Powered by Claude Mythos Preview, Anthropic's frontier AI model, capable of finding and fixing software vulnerabilities at a pace no human team could match.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
              {[
                ['cpu','Partners include AWS, Apple, Google, Microsoft, JPMorganChase'],
                ['globe','Protecting systems that billions of people depend on daily'],
                ['users','Access is strictly vetted: governance is the prerequisite'],
              ].map(([ic, t])=>(
                <div key={t} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <i data-lucide={ic} style={{ width:16, height:16, color:G.cobalt, strokeWidth:1.8, flexShrink:0, marginTop:3 }}></i>
                  <span style={{ fontSize:14, fontWeight:400, color:G.body, lineHeight:1.5 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background:`rgba(0,71,171,0.08)`, borderRadius:12, padding:'12px 16px', marginTop:'auto' }}>
              <p style={{ margin:0, fontSize:13, color:G.cobalt, fontWeight:500, lineHeight:1.5 }}>
                Note: Anthropic's "Claude Mythos" and Newtuple's "Mythos" are separate products, both named after the same era of high-stakes AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GSlide>
  );
}

/* ── S4 — Why It Matters ───────────────────────────────── */
function S4_WhyItMatters() {
  const risks = [
    ['alert-triangle', G.warning, 'Brand damage', 'A public AI failure spreads faster than any PR response can contain it'],
    ['gavel', G.cobalt, 'Legal exposure', 'Regulators are moving. Ignorance of your own AI is no longer a defence'],
    ['trending-down', G.danger, 'Trust erosion', 'Customers who lose confidence in your AI rarely come back'],
  ];
  return (
    <GSlide bg="#fff" logo="cobalt" kicker="Why it matters" curves={false} pageNum={4}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:24 }}>
        <div>
          <h2 style={{ margin:'0 0 12px', fontWeight:300, fontSize:44, lineHeight:1.17, letterSpacing:'-0.02em', color:G.ink }}>
            Ungoverned AI isn't just a tech problem.
          </h2>
          <h2 style={{ margin:0, fontWeight:500, fontSize:40, lineHeight:1.15, letterSpacing:'-0.02em', color:G.cobalt }}>
            It's a business liability.
          </h2>
        </div>
        <p style={{ margin:0, fontWeight:400, fontSize:22, lineHeight:1.55, color:G.body, maxWidth:820 }}>
          When an AI deployed under your brand goes wrong, the reputational, legal and financial fallout lands on <span style={{ fontWeight:600, color:G.ink }}>your organisation</span>, not your vendor's.
        </p>
        <div style={{ display:'flex', gap:16, flex:1, alignItems:'stretch' }}>
          {risks.map(([ic, color, title, desc])=>(
            <div key={title} style={{ flex:1, borderRadius:20, border:`1.5px solid ${G.border}`, padding:'26px 22px', display:'flex', flexDirection:'column', gap:14 }}>
              <div style={{ width:48, height:48, borderRadius:14, background:`${color}18`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i data-lucide={ic} style={{ width:24, height:24, color, strokeWidth:1.7 }}></i>
              </div>
              <div style={{ fontSize:21, fontWeight:600, color:G.ink }}>{title}</div>
              <div style={{ fontSize:16, fontWeight:400, color:G.body, lineHeight:1.55 }}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{ background:G.navy900, borderRadius:14, padding:'18px 24px' }}>
          <p style={{ margin:0, fontWeight:400, fontSize:19, color:'#fff', lineHeight:1.5 }}>
            The examples on the next two slides are real. They happened to big brands with big budgets.{' '}
            <span style={{ fontWeight:600, color:G.accentLight }}>Governance was the missing piece every time.</span>
          </p>
        </div>
      </div>
    </GSlide>
  );
}

/* ── S5 — Failures 1: Chipotle + Chevrolet ─────────────── */
function S5_Failures1() {
  return (
    <GSlide bg="#fff" logo="cobalt" kicker="Real-world failures · 1 of 2" curves={false} pageNum={5}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:18 }}>
        <p style={{ margin:0, fontWeight:400, fontSize:22, color:G.body, lineHeight:1.4 }}>
          These aren't hypotheticals. They happened. To household names.
        </p>
        <div style={{ display:'flex', gap:16, flex:1 }}>
          <div style={{ flex:1, borderRadius:20, border:`1.5px solid ${G.border}`, padding:'26px 24px', display:'flex', flexDirection:'column', gap:12, background:G.tint }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'rgba(220,38,38,0.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i data-lucide="bot" style={{ width:22, height:22, color:G.danger, strokeWidth:1.7 }}></i>
              </div>
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', color:G.danger, textTransform:'uppercase' }}>Chipotle</span>
            </div>
            <h3 style={{ margin:0, fontWeight:600, fontSize:22, lineHeight:1.25, color:G.ink }}>"Pepper": the hacked customer bot</h3>
            <p style={{ margin:0, fontSize:15, fontWeight:400, lineHeight:1.65, color:G.body }}>
              Chipotle's customer service chatbot was bypassed. Users manipulated it into <strong style={{ color:G.ink }}>solving complex coding algorithms</strong> on demand. It became a free developer tool for anyone who asked the right way.
            </p>
            <p style={{ margin:0, fontSize:15, color:G.body, lineHeight:1.55 }}>No routing logic. No intent boundaries. No monitoring.</p>
            <div style={{ marginTop:'auto', background:'rgba(220,38,38,0.07)', borderRadius:10, padding:'12px 16px', border:`1px solid rgba(220,38,38,0.15)` }}>
              <p style={{ margin:0, fontSize:13, fontWeight:500, color:G.danger, lineHeight:1.5 }}>Root cause: Zero guardrails on what the bot could be made to do</p>
            </div>
          </div>
          <div style={{ flex:1, borderRadius:20, border:`1.5px solid ${G.border}`, padding:'26px 24px', display:'flex', flexDirection:'column', gap:12, background:G.tint }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'rgba(220,38,38,0.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i data-lucide="car" style={{ width:22, height:22, color:G.danger, strokeWidth:1.7 }}></i>
              </div>
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', color:G.danger, textTransform:'uppercase' }}>Chevrolet</span>
            </div>
            <h3 style={{ margin:0, fontWeight:600, fontSize:22, lineHeight:1.25, color:G.ink }}>A $70,000 SUV agreed to sell for $1</h3>
            <p style={{ margin:0, fontSize:15, fontWeight:400, lineHeight:1.65, color:G.body }}>
              A dealership's ChatGPT-powered sales bot was manipulated into <strong style={{ color:G.ink }}>agreeing to sell a $70,000 SUV for one dollar</strong>. The AI had full negotiation authority and no price floor.
            </p>
            <p style={{ margin:0, fontSize:15, color:G.body, lineHeight:1.55 }}>Given power to close deals, without any limits on how far it could go.</p>
            <div style={{ marginTop:'auto', background:'rgba(220,38,38,0.07)', borderRadius:10, padding:'12px 16px', border:`1px solid rgba(220,38,38,0.15)` }}>
              <p style={{ margin:0, fontSize:13, fontWeight:500, color:G.danger, lineHeight:1.5 }}>Root cause: Unbound AI authority with no pricing guardrails</p>
            </div>
          </div>
        </div>
      </div>
    </GSlide>
  );
}

/* ── S6 — Failures 2: DPD + NYC ─────────────────────────── */
function S6_Failures2() {
  return (
    <GSlide bg="#fff" logo="cobalt" kicker="Real-world failures · 2 of 2" curves={false} pageNum={6}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:18 }}>
        <p style={{ margin:0, fontWeight:400, fontSize:22, color:G.body, lineHeight:1.4 }}>
          The pattern holds across industries and countries.
        </p>
        <div style={{ display:'flex', gap:16, flex:1 }}>
          <div style={{ flex:1, borderRadius:20, border:`1.5px solid ${G.border}`, padding:'26px 24px', display:'flex', flexDirection:'column', gap:12, background:G.tint }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'rgba(217,119,6,0.12)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i data-lucide="package" style={{ width:22, height:22, color:G.warning, strokeWidth:1.7 }}></i>
              </div>
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', color:G.warning, textTransform:'uppercase' }}>DPD Delivery</span>
            </div>
            <h3 style={{ margin:0, fontWeight:600, fontSize:22, lineHeight:1.25, color:G.ink }}>The chatbot that swore at its own customers</h3>
            <p style={{ margin:0, fontSize:15, fontWeight:400, lineHeight:1.65, color:G.body }}>
              A customer tricked DPD's package-tracking assistant into <strong style={{ color:G.ink }}>swearing, insulting itself and writing poetry condemning DPD's own service</strong>. Covered by the BBC and The Guardian.
            </p>
            <p style={{ margin:0, fontSize:15, color:G.body, lineHeight:1.55 }}>No behavioural constraints. The model was persuaded to act against the brand.</p>
            <div style={{ marginTop:'auto', background:'rgba(217,119,6,0.08)', borderRadius:10, padding:'12px 16px', border:`1px solid rgba(217,119,6,0.18)` }}>
              <p style={{ margin:0, fontSize:13, fontWeight:500, color:G.warning, lineHeight:1.5 }}>Root cause: No persona constraints or adversarial input handling</p>
            </div>
          </div>
          <div style={{ flex:1, borderRadius:20, border:`1.5px solid ${G.border}`, padding:'26px 24px', display:'flex', flexDirection:'column', gap:12, background:G.tint }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'rgba(217,119,6,0.12)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i data-lucide="landmark" style={{ width:22, height:22, color:G.warning, strokeWidth:1.7 }}></i>
              </div>
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', color:G.warning, textTransform:'uppercase' }}>NYC MyCity Bot</span>
            </div>
            <h3 style={{ margin:0, fontWeight:600, fontSize:22, lineHeight:1.25, color:G.ink }}>A government AI that gave illegal advice</h3>
            <p style={{ margin:0, fontSize:15, fontWeight:400, lineHeight:1.65, color:G.body }}>
              NYC's official business AI told landlords they could <strong style={{ color:G.ink }}>legally reject housing vouchers</strong> and bosses they could <strong style={{ color:G.ink }}>withhold employee tips</strong>. Both are illegal. It was decommissioned.
            </p>
            <p style={{ margin:0, fontSize:15, color:G.body, lineHeight:1.55 }}>Real people relied on it. Real harm followed.</p>
            <div style={{ marginTop:'auto', background:'rgba(217,119,6,0.08)', borderRadius:10, padding:'12px 16px', border:`1px solid rgba(217,119,6,0.18)` }}>
              <p style={{ margin:0, fontSize:13, fontWeight:500, color:G.warning, lineHeight:1.5 }}>Root cause: No legal validation layer on high-stakes advice</p>
            </div>
          </div>
        </div>
      </div>
    </GSlide>
  );
}

/* ── S7 — The Pattern ───────────────────────────────────── */
function S7_ThePattern() {
  const gaps = [
    'No clear boundaries on what the AI can and cannot do',
    'No monitoring for unexpected or adversarial inputs',
    'No escalation path when the AI gets it wrong',
    'No accountability when the damage is done',
  ];
  return (
    <GSlide bg={G.cobalt} logo="white" kicker="The pattern" kickerColor="#fff" curves={true} pageNum={7}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:26 }}>
        <h2 style={{ margin:0, fontWeight:200, fontSize:62, lineHeight:1.1, letterSpacing:'-0.025em', color:'#fff' }}>
          These aren't bugs.
        </h2>
        <h2 style={{ margin:0, fontWeight:500, fontSize:54, lineHeight:1.12, letterSpacing:'-0.02em', color:G.accentLight }}>
          They're governance gaps.
        </h2>
        <div style={{ height:1, background:'rgba(255,255,255,0.2)', maxWidth:500, margin:'2px 0' }}></div>
        <p style={{ margin:0, fontWeight:300, fontSize:22, color:'rgba(255,255,255,0.7)', lineHeight:1.5 }}>
          Four organisations. Four industries. One root cause, each time.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {gaps.map((text, i)=>(
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:16, background:'rgba(255,255,255,0.1)', borderRadius:14, padding:'16px 20px' }}>
              <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:12, color:G.accentLight, marginTop:3, minWidth:24, flexShrink:0 }}>{String(i+1).padStart(2,'0')}</span>
              <p style={{ margin:0, fontSize:21, fontWeight:300, color:'rgba(255,255,255,0.92)', lineHeight:1.45 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </GSlide>
  );
}

/* ── S8 — What You Can Do ───────────────────────────────── */
function S8_WhatYouCanDo() {
  const steps = [
    ['01','clipboard-list','Audit your current AI deployments','Map what your AI can and can\'t do right now. Find the gap between vendor promises and actual deployment controls.'],
    ['02','file-text','Write a governance policy','Even a one-pager creates accountability: for your team, your customers and regulators.'],
    ['03','users','Work with partners who build it in','Choose vendors who treat governance as a design requirement — not something to document after a failure.'],
  ];
  return (
    <GSlide bg="#fff" logo="cobalt" kicker="What you can do" curves={false} pageNum={8}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:22 }}>
        <h2 style={{ margin:0, fontWeight:300, fontSize:42, lineHeight:1.18, letterSpacing:'-0.02em', color:G.ink }}>
          Governance isn't a blocker.{' '}
          <span style={{ color:G.cobalt, fontWeight:500 }}>It's how you build with confidence.</span>
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:14, flex:1 }}>
          {steps.map(([num, ic, title, desc])=>(
            <div key={num} style={{ display:'flex', alignItems:'flex-start', gap:18, background:G.tint, border:`1px solid ${G.border}`, borderLeft:`5px solid ${G.cobalt}`, borderRadius:16, padding:'20px 22px', flex:1 }}>
              <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:13, fontWeight:600, color:G.cobalt, minWidth:26, marginTop:2, flexShrink:0 }}>{num}</span>
              <i data-lucide={ic} style={{ width:24, height:24, color:G.cobalt, strokeWidth:1.5, marginTop:2, flexShrink:0 }}></i>
              <div>
                <div style={{ fontSize:20, fontWeight:600, color:G.ink, marginBottom:6 }}>{title}</div>
                <div style={{ fontSize:15, fontWeight:400, color:G.body, lineHeight:1.55 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GSlide>
  );
}

/* ── S9 — CTA ───────────────────────────────────────────── */
function S9_CTA() {
  return (
    <GSlide bg={G.navy950} logo="white" kicker={null} curves={true} last={true} pageNum={9}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:24 }}>
        <p style={{ margin:0, fontWeight:500, fontSize:22, letterSpacing:'0.1em', textTransform:'uppercase', color:G.accentLight }}>
          Still figuring out governance?
        </p>
        <h2 style={{ margin:0, fontWeight:200, fontSize:68, lineHeight:1.08, letterSpacing:'-0.025em', color:'#fff', maxWidth:880 }}>
          It doesn't have to be complicated.
        </h2>
        <p style={{ margin:0, fontWeight:300, fontSize:26, lineHeight:1.5, color:'rgba(255,255,255,0.75)', maxWidth:760 }}>
          Whether you're just starting out or untangling an existing deployment. We help enterprise teams put the right controls in place, before something goes wrong.
        </p>
        <div style={{ height:1, background:'rgba(255,255,255,0.18)', maxWidth:480, margin:'4px 0' }}></div>
        <p style={{ margin:0, fontWeight:500, fontSize:26, color:'#fff', lineHeight:1.4 }}>
          Book a consultation. Let's talk governance.
        </p>
        <div style={{ display:'flex', alignItems:'center', gap:18, marginTop:8 }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:12, fontSize:20, fontWeight:500, color:G.cobalt, background:'#fff', padding:'16px 30px', borderRadius:9999, boxShadow:'0 16px 40px rgba(0,0,0,0.28)' }}>
            newtuple.com <i data-lucide="arrow-up-right" style={{ width:20, height:20 }}></i>
          </span>
          <span style={{ fontSize:16, color:'rgba(255,255,255,0.42)', fontWeight:300 }}>or DM us directly</span>
        </div>
      </div>
    </GSlide>
  );
}

window.__GovernanceSlides = [S1_Hook, S2_ThisWeek, S3_MythosGlasswing, S4_WhyItMatters, S5_Failures1, S6_Failures2, S7_ThePattern, S8_WhatYouCanDo, S9_CTA];
Object.assign(window, { G, GSlide, S1_Hook, S2_ThisWeek, S3_MythosGlasswing, S4_WhyItMatters, S5_Failures1, S6_Failures2, S7_ThePattern, S8_WhatYouCanDo, S9_CTA });
