/* AI Governance Moment — LinkedIn carousel (1080×1080).
   Uses official Newtuple logos + Geometric Curves accent. Mixed light/dark slides per storyboard. */

const G = {
  cobalt: '#0047AB', cobalt700: '#003C90', cobaltLite: '#2E6FD6', cyan: '#00B8D9',
  navy950: '#02020A', navy900: '#0A0E2A', navy800: '#141857',
  ink: '#0E1320', body: '#374151', muted: '#6B7686', border: '#E2E6EC', tint: '#F7F8FA',
  white: '#FFFFFF', accentLight: '#8FB4FF'
};

/* Slide frame — handles bg, logo color, curves accent, chevron */
function GSlide({ children, bg = '#fff', logo = 'cobalt', curves = true, last = false, kicker, kickerColor }) {
  const isDark = bg === G.cobalt || bg.startsWith('#0') && parseInt(bg.slice(1, 3), 16) < 50;
  const logoSrc = logo === 'white' ? '../assets/logo-white.png' : '../assets/logo-cobalt.png';
  const curvesSrc = isDark ? '../assets/geometric-curves-white.png' : '../assets/geometric-curves.png';
  return (
    <div style={{ position: 'relative', width: 1080, height: 1080, overflow: 'hidden', background: bg, fontFamily: 'Inter, sans-serif', flexShrink: 0 }}>
      {curves &&
      <img src={curvesSrc} alt="" style={{
        position: 'absolute', left: -60, right: -60, bottom: -180, width: '120%', opacity: isDark ? 0.16 : 0.85,
        pointerEvents: 'none'
      }} />
      }
      {/* Top bar — kicker + logo */}
      <div style={{ position: 'absolute', top: 64, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
        {kicker ?
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500, textTransform: 'uppercase',
          letterSpacing: '0.18em', padding: '9px 18px', borderRadius: 9999,
          background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,71,171,0.08)',
          color: kickerColor || (isDark ? '#fff' : G.cobalt),
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,71,171,0.18)'}`
        }}>{kicker}</span> :
        <span></span>}
        <img src={logoSrc} alt="Newtuple" style={{ height: 28 }} />
      </div>
      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, padding: '170px 80px 160px', display: 'flex', flexDirection: 'column', zIndex: 1 }}>
        {children}
      </div>
      {/* Chevron — bottom-right */}
      {!last &&
      <div style={{ position: 'absolute', bottom: 56, right: 72, display: 'flex', color: isDark ? '#fff' : G.cobalt, opacity: .9, zIndex: 2 }}>
          {[0, 1, 2].map((i) => <i key={i} data-lucide="chevron-right" style={{ width: 28, height: 28, marginLeft: -10, strokeWidth: 1.5 }}></i>)}
        </div>
      }
      {/* Page number */}
      <div style={{ position: 'absolute', bottom: 64, left: 80, fontSize: 13, fontWeight: 500, letterSpacing: '0.16em', color: isDark ? 'rgba(255,255,255,0.5)' : G.muted, fontFamily: 'JetBrains Mono, monospace', zIndex: 2 }}>
        {String(window.__GPAGE || 1).padStart(2, '0')} / 06
      </div>
    </div>);

}

/* ── Slide 1 — Cover / Hook ───────────────────────────── */
function S1_Cover() {
  return (
    <GSlide bg={G.cobalt} logo="white" kicker="Weekly AI Update" kickerColor="#fff" curves={true}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 36 }}>
        <p style={{ margin: 0, fontWeight: 300, fontSize: 62, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#fff', maxWidth: 880 }}>AI safetly & governance is not a joke.

        </p>
        <p style={{ margin: 0, fontWeight: 200, fontSize: 74, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#fff', maxWidth: 920 }}>Everyone is taking AI seriously. 

        </p>
        <p style={{ margin: 0, fontWeight: 500, fontSize: 48, lineHeight: 1.2, letterSpacing: '-0.01em', color: G.accentLight }}>ARE YOU?

        </p>
      </div>
    </GSlide>);

}

/* ── Slide 2 — What Glasswing Is ───────────────────────── */
function S2_Glasswing() {
  const sectors = [
  ['zap', 'Power grids'], ['droplet', 'Water systems'], ['heart-pulse', 'Healthcare'],
  ['radio', 'Comms'], ['cpu', 'Hardware']];

  return (
    <GSlide bg="#fff" logo="cobalt" kicker="What it is" curves={false}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ background: G.navy900, borderRadius: 32, padding: '44px 50px', color: '#fff' }}>
          <p style={{ margin: 0, fontWeight: 300, fontSize: 38, lineHeight: 1.35, letterSpacing: '-0.01em' }}>
            Mythos is now inside <span style={{ fontWeight: 600, color: G.accentLight }}>150 organisations</span> across <span style={{ fontWeight: 600, color: G.accentLight }}>15 countries</span>.
          </p>
          <p style={{ margin: '24px 0 0', fontWeight: 300, fontSize: 24, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)' }}>
            Every one of them met security requirements before getting access. A successful attack on most of these codebases could affect <span style={{ color: '#fff', fontWeight: 500 }}>over 100 million people</span>.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, marginTop: 8 }}>
          {sectors.map(([ic, name]) =>
          <div key={name} style={{ flex: 1, background: G.tint, border: `1px solid ${G.border}`, borderRadius: 20, padding: '22px 16px', textAlign: 'center' }}>
              <i data-lucide={ic} style={{ width: 30, height: 30, color: G.cobalt, strokeWidth: 1.5 }}></i>
              <div style={{ fontSize: 16, fontWeight: 500, color: G.ink, marginTop: 10 }}>{name}</div>
            </div>
          )}
        </div>
      </div>
    </GSlide>);

}

/* ── Slide 3 — The Other Move ──────────────────────────── */
function S3_OtherMove() {
  const regs = [
  ['California', 'Transparency in Frontier AI Act'],
  ['European Union', 'AI Act · Code of Practice for General Purpose AI'],
  ['Illinois', 'Independent AI Audit Mandate']];

  return (
    <GSlide bg="#fff" logo="cobalt" kicker="Elsewhere this week" curves={false}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 34 }}>
        <p style={{ margin: 0, fontWeight: 300, fontSize: 30, lineHeight: 1.4, color: G.body, maxWidth: 820 }}>
          Same week. Different company. Different trigger.
        </p>
        <h2 style={{ margin: 0, fontWeight: 300, fontSize: 54, lineHeight: 1.15, letterSpacing: '-0.02em', color: G.ink, maxWidth: 880 }}>
          OpenAI published a <span style={{ color: G.cobalt, fontWeight: 500 }}>22-page governance document</span>.
        </h2>
        <p style={{ margin: 0, fontWeight: 400, fontSize: 26, color: G.body }}>
          Three regulations in <span style={{ fontWeight: 600, color: G.ink }}>48 hours</span> forced it.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
          {regs.map(([place, rule], i) =>
          <div key={place} style={{
            display: 'flex', alignItems: 'center', gap: 22, background: '#fff', border: `1.5px solid ${G.cobalt}`,
            borderLeft: `6px solid ${G.cobalt}`, borderRadius: 18, padding: '22px 26px'
          }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: G.cobalt, background: 'rgba(0,71,171,0.08)', padding: '5px 12px', borderRadius: 9999, letterSpacing: '0.06em', minWidth: 46, textAlign: 'center' }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 24, fontWeight: 600, color: G.ink }}>{place}</div>
                <div style={{ fontSize: 16, color: G.muted, marginTop: 2 }}>{rule}</div>
              </div>
              <i data-lucide="scale" style={{ width: 24, height: 24, color: G.cobalt, strokeWidth: 1.5 }}></i>
            </div>
          )}
        </div>
      </div>
    </GSlide>);

}

/* ── Slide 4 — Two Approaches (split) ──────────────────── */
function S4_TwoApproaches() {
  return (
    <div style={{ position: 'relative', width: 1080, height: 1080, overflow: 'hidden', background: '#fff', fontFamily: 'Inter, sans-serif', flexShrink: 0 }}>
      {/* Top header band */}
      <div style={{ background: G.navy950, padding: '56px 80px 38px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <span style={{ display: 'inline-flex', fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', padding: '9px 18px', borderRadius: 9999, background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Two Approaches</span>
          <img src="../assets/logo-white.png" alt="Newtuple" style={{ height: 28 }} />
        </div>
        <h2 style={{ margin: 0, fontWeight: 200, fontSize: 54, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#fff', maxWidth: 920 }}>
          One designed it in. <span style={{ color: G.accentLight, fontWeight: 300 }}>One had to write it down.</span>
        </h2>
      </div>
      {/* Split body */}
      <div style={{ display: 'flex', height: 'calc(100% - 280px)' }}>
        <div style={{ flex: 1, background: G.navy900, color: '#fff', padding: '52px 50px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: G.accentLight }}>Anthropic · Glasswing</span>
          <h3 style={{ margin: '6px 0 18px', fontWeight: 500, fontSize: 32, letterSpacing: '-0.01em' }}>Designed in</h3>
          {[
          ['shield-check', 'Governance built into deployment'],
          ['key-round', 'Access requires meeting security criteria'],
          ['users', '150 orgs · 15 countries · vetted']].
          map(([ic, t]) =>
          <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <i data-lucide={ic} style={{ width: 22, height: 22, color: G.accentLight, strokeWidth: 1.7, marginTop: 3, flexShrink: 0 }}></i>
              <span style={{ fontWeight: 300, fontSize: 21, lineHeight: 1.4, color: 'rgba(255,255,255,0.88)' }}>{t}</span>
            </div>
          )}
        </div>
        <div style={{ flex: 1, background: G.cobalt, color: '#fff', padding: '52px 50px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)' }}>OpenAI · FGF</span>
          <h3 style={{ margin: '6px 0 18px', fontWeight: 500, fontSize: 32, letterSpacing: '-0.01em' }}>Written down</h3>
          {[
          ['file-text', 'Governance published after regulation'],
          ['gavel', 'Document required by law'],
          ['eye', 'Public disclosure · auditable']].
          map(([ic, t]) =>
          <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <i data-lucide={ic} style={{ width: 22, height: 22, color: '#fff', strokeWidth: 1.7, marginTop: 3, flexShrink: 0 }}></i>
              <span style={{ fontWeight: 300, fontSize: 21, lineHeight: 1.4, color: 'rgba(255,255,255,0.92)' }}>{t}</span>
            </div>
          )}
        </div>
      </div>
      {/* Chevron + page */}
      <div style={{ position: 'absolute', bottom: 36, right: 54, display: 'flex', color: '#fff', opacity: .9 }}>
        {[0, 1, 2].map((i) => <i key={i} data-lucide="chevron-right" style={{ width: 28, height: 28, marginLeft: -10, strokeWidth: 1.5 }}></i>)}
      </div>
      <div style={{ position: 'absolute', bottom: 44, left: 80, fontSize: 13, fontWeight: 500, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.7)', fontFamily: 'JetBrains Mono, monospace' }}>04 / 06</div>
    </div>);

}

/* ── Slide 5 — The Gap ─────────────────────────────────── */
function S5_TheGap() {
  const rows = [
  ['What your vendor documents', 'check', 'done', G.cobalt],
  ['What Glasswing partners built', 'check', 'done', G.cobalt],
  ['What your deployment has', 'help-circle', '?', '#E8852B']];

  return (
    <GSlide bg="#fff" logo="cobalt" kicker="The Gap" curves={false}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 38 }}>
        <h2 style={{ margin: 0, fontWeight: 300, fontSize: 48, lineHeight: 1.18, letterSpacing: '-0.02em', color: G.ink, maxWidth: 880 }}>
          Your vendor now has a formal governance document.{' '}
          <span style={{ color: G.cobalt, fontWeight: 500 }}>Mythos is running inside critical infrastructure with defined controls.</span>
        </h2>
        <p style={{ margin: 0, fontWeight: 400, fontSize: 26, color: G.body }}>
          Most enterprise AI deployments have neither.
        </p>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14, borderRadius: 24, border: `2px solid ${G.cobalt}`, padding: 30, background: G.tint }}>
          {rows.map(([text, ic, status, color]) =>
          <div key={text} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, padding: '18px 22px', background: '#fff', borderRadius: 14, border: `1px solid ${G.border}` }}>
              <span style={{ fontWeight: 400, fontSize: 22, color: G.ink }}>{text}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 18, fontWeight: 600, color, padding: '7px 16px', borderRadius: 9999, background: color === G.cobalt ? 'rgba(0,71,171,0.08)' : 'rgba(232,133,43,0.12)' }}>
                <i data-lucide={ic} style={{ width: 18, height: 18, strokeWidth: 2 }}></i>
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
    </GSlide>);

}

/* ── Slide 6 — CTA ────────────────────────────────────── */
function S6_CTA() {
  return (
    <GSlide bg={G.cobalt} logo="white" kicker={null} curves={true} last>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
        <h2 style={{ margin: 0, fontWeight: 200, fontSize: 78, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', maxWidth: 920 }}>
          Your AI is already running.
        </h2>
        <h2 style={{ margin: 0, fontWeight: 300, fontSize: 64, lineHeight: 1.12, letterSpacing: '-0.02em', color: G.accentLight, maxWidth: 920 }}>
          What governs it?
        </h2>
        <div style={{ margin: '24px 0 0', height: 1, background: 'rgba(255,255,255,0.22)', maxWidth: 560 }}></div>
        <p style={{ margin: 0, fontWeight: 300, fontSize: 28, lineHeight: 1.45, color: 'rgba(255,255,255,0.86)', maxWidth: 780 }}>
          This is the work we do with enterprise teams.
        </p>
        <p style={{ margin: 0, fontWeight: 500, fontSize: 32, color: '#fff' }}>
          Are you ready for this?
        </p>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 18 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 22, fontWeight: 500, color: G.cobalt, background: '#fff', padding: '18px 32px', borderRadius: 9999, boxShadow: '0 16px 40px rgba(0,0,0,0.18)' }}>
            newtuple.com <i data-lucide="arrow-up-right" style={{ width: 22, height: 22 }}></i>
          </span>
        </div>
      </div>
    </GSlide>);

}

window.__GovernanceSlides = [S1_Cover, S2_Glasswing, S3_OtherMove, S4_TwoApproaches, S5_TheGap, S6_CTA];
Object.assign(window, { G, GSlide, S1_Cover, S2_Glasswing, S3_OtherMove, S4_TwoApproaches, S5_TheGap, S6_CTA });