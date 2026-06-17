/* @ds-bundle: {"format":3,"namespace":"NewtupleDesignSystem_019e03","components":[],"sourceHashes":{"GovernanceSlides.jsx":"9bd9bf82914e","case-study/deck-stage.js":"eac2199dccb4","onepager/App.jsx":"8a1d643fd616","onepager/Architecture.jsx":"72bf0bbfb143","onepager/tweaks-panel.jsx":"6591467622ed","slides/GovernanceSlides.jsx":"302c46cdc241","slides/SlideKit.jsx":"6cf876027df6","ui_kits/dashboard/Dashboard.jsx":"6088fba7ca4e","ui_kits/dashboard/Shell.jsx":"7f8afcbf7233","ui_kits/website/CaseStudies.jsx":"e70dcd29a1d8","ui_kits/website/FAQFooter.jsx":"259e66e42a49","ui_kits/website/Hero.jsx":"87c8b59b716e","ui_kits/website/Nav.jsx":"16cfa7ec14a5","ui_kits/website/Services.jsx":"180b7b7821ed","ui_kits/website/Social.jsx":"36d23f99fc4d","ui_kits/website/ui.jsx":"c05f5d6cb8ec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NewtupleDesignSystem_019e03 = window.NewtupleDesignSystem_019e03 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// GovernanceSlides.jsx
try { (() => {
/* AI Governance Moment — LinkedIn carousel (1080×1080).
   Uses official Newtuple logos + Geometric Curves accent. Mixed light/dark slides per storyboard. */

const G = {
  cobalt: '#0047AB',
  cobalt700: '#003C90',
  cobaltLite: '#2E6FD6',
  cyan: '#00B8D9',
  navy950: '#02020A',
  navy900: '#0A0E2A',
  navy800: '#141857',
  ink: '#0E1320',
  body: '#374151',
  muted: '#6B7686',
  border: '#E2E6EC',
  tint: '#F7F8FA',
  white: '#FFFFFF',
  accentLight: '#8FB4FF'
};

/* Slide frame — handles bg, logo color, curves accent, chevron */
function GSlide({
  children,
  bg = '#fff',
  logo = 'cobalt',
  curves = true,
  last = false,
  kicker,
  kickerColor
}) {
  const isDark = bg === G.cobalt || bg.startsWith('#0') && parseInt(bg.slice(1, 3), 16) < 50;
  const logoSrc = logo === 'white' ? '../assets/logo-white.png' : '../assets/logo-cobalt.png';
  const curvesSrc = isDark ? '../assets/geometric-curves-white.png' : '../assets/geometric-curves.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: bg,
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0
    }
  }, curves && /*#__PURE__*/React.createElement("img", {
    src: curvesSrc,
    alt: "",
    style: {
      position: 'absolute',
      left: -60,
      right: -60,
      bottom: -180,
      width: '120%',
      opacity: isDark ? 0.16 : 0.85,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      left: 80,
      right: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 2
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      padding: '9px 18px',
      borderRadius: 9999,
      background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,71,171,0.08)',
      color: kickerColor || (isDark ? '#fff' : G.cobalt),
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,71,171,0.18)'}`
    }
  }, kicker) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Newtuple",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '170px 80px 160px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1
    }
  }, children), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 56,
      right: 72,
      display: 'flex',
      color: isDark ? '#fff' : G.cobalt,
      opacity: .9,
      zIndex: 2
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "chevron-right",
    style: {
      width: 28,
      height: 28,
      marginLeft: -10,
      strokeWidth: 1.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 64,
      left: 80,
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: isDark ? 'rgba(255,255,255,0.5)' : G.muted,
      fontFamily: 'JetBrains Mono, monospace',
      zIndex: 2
    }
  }, String(window.__GPAGE || 1).padStart(2, '0'), " / 06"));
}

/* ── Slide 1 — Cover / Hook ───────────────────────────── */
function S1_Cover() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: G.cobalt,
    logo: "white",
    kicker: "Weekly AI Update",
    kickerColor: "#fff",
    curves: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 62,
      lineHeight: 1.18,
      letterSpacing: '-0.02em',
      color: '#fff',
      maxWidth: 880
    }
  }, "AI safetly & governance is not a joke."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 74,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      color: '#fff',
      maxWidth: 920
    }
  }, "Everyone is taking AI seriously.\xA0"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: G.accentLight
    }
  }, "ARE YOU?")));
}

/* ── Slide 2 — What Glasswing Is ───────────────────────── */
function S2_Glasswing() {
  const sectors = [['zap', 'Power grids'], ['droplet', 'Water systems'], ['heart-pulse', 'Healthcare'], ['radio', 'Comms'], ['cpu', 'Hardware']];
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "What it is",
    curves: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: G.navy900,
      borderRadius: 32,
      padding: '44px 50px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 38,
      lineHeight: 1.35,
      letterSpacing: '-0.01em'
    }
  }, "Mythos is now inside ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: G.accentLight
    }
  }, "150 organisations"), " across ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: G.accentLight
    }
  }, "15 countries"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.78)'
    }
  }, "Every one of them met security requirements before getting access. A successful attack on most of these codebases could affect ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 500
    }
  }, "over 100 million people"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 18,
      marginTop: 8
    }
  }, sectors.map(([ic, name]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      flex: 1,
      background: G.tint,
      border: `1px solid ${G.border}`,
      borderRadius: 20,
      padding: '22px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 30,
      height: 30,
      color: G.cobalt,
      strokeWidth: 1.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: G.ink,
      marginTop: 10
    }
  }, name))))));
}

/* ── Slide 3 — The Other Move ──────────────────────────── */
function S3_OtherMove() {
  const regs = [['California', 'Transparency in Frontier AI Act'], ['European Union', 'AI Act · Code of Practice for General Purpose AI'], ['Illinois', 'Independent AI Audit Mandate']];
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "Elsewhere this week",
    curves: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 30,
      lineHeight: 1.4,
      color: G.body,
      maxWidth: 820
    }
  }, "Same week. Different company. Different trigger."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 54,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: G.ink,
      maxWidth: 880
    }
  }, "OpenAI published a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: G.cobalt,
      fontWeight: 500
    }
  }, "22-page governance document"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 26,
      color: G.body
    }
  }, "Three regulations in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: G.ink
    }
  }, "48 hours"), " forced it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 8
    }
  }, regs.map(([place, rule], i) => /*#__PURE__*/React.createElement("div", {
    key: place,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      background: '#fff',
      border: `1.5px solid ${G.cobalt}`,
      borderLeft: `6px solid ${G.cobalt}`,
      borderRadius: 18,
      padding: '22px 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: G.cobalt,
      background: 'rgba(0,71,171,0.08)',
      padding: '5px 12px',
      borderRadius: 9999,
      letterSpacing: '0.06em',
      minWidth: 46,
      textAlign: 'center'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: G.ink
    }
  }, place), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: G.muted,
      marginTop: 2
    }
  }, rule)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "scale",
    style: {
      width: 24,
      height: 24,
      color: G.cobalt,
      strokeWidth: 1.5
    }
  }))))));
}

/* ── Slide 4 — Two Approaches (split) ──────────────────── */
function S4_TwoApproaches() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: '#fff',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: G.navy950,
      padding: '56px 80px 38px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      padding: '9px 18px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)'
    }
  }, "Two Approaches"), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-white.png",
    alt: "Newtuple",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 54,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: '#fff',
      maxWidth: 920
    }
  }, "One designed it in. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: G.accentLight,
      fontWeight: 300
    }
  }, "One had to write it down."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 'calc(100% - 280px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: G.navy900,
      color: '#fff',
      padding: '52px 50px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: G.accentLight
    }
  }, "Anthropic \xB7 Glasswing"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 18px',
      fontWeight: 500,
      fontSize: 32,
      letterSpacing: '-0.01em'
    }
  }, "Designed in"), [['shield-check', 'Governance built into deployment'], ['key-round', 'Access requires meeting security criteria'], ['users', '150 orgs · 15 countries · vetted']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 22,
      height: 22,
      color: G.accentLight,
      strokeWidth: 1.7,
      marginTop: 3,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 21,
      lineHeight: 1.4,
      color: 'rgba(255,255,255,0.88)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: G.cobalt,
      color: '#fff',
      padding: '52px 50px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "OpenAI \xB7 FGF"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 18px',
      fontWeight: 500,
      fontSize: 32,
      letterSpacing: '-0.01em'
    }
  }, "Written down"), [['file-text', 'Governance published after regulation'], ['gavel', 'Document required by law'], ['eye', 'Public disclosure · auditable']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 22,
      height: 22,
      color: '#fff',
      strokeWidth: 1.7,
      marginTop: 3,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 21,
      lineHeight: 1.4,
      color: 'rgba(255,255,255,0.92)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 36,
      right: 54,
      display: 'flex',
      color: '#fff',
      opacity: .9
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "chevron-right",
    style: {
      width: 28,
      height: 28,
      marginLeft: -10,
      strokeWidth: 1.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 44,
      left: 80,
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'JetBrains Mono, monospace'
    }
  }, "04 / 06"));
}

/* ── Slide 5 — The Gap ─────────────────────────────────── */
function S5_TheGap() {
  const rows = [['What your vendor documents', 'check', 'done', G.cobalt], ['What Glasswing partners built', 'check', 'done', G.cobalt], ['What your deployment has', 'help-circle', '?', '#E8852B']];
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "The Gap",
    curves: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 38
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 48,
      lineHeight: 1.18,
      letterSpacing: '-0.02em',
      color: G.ink,
      maxWidth: 880
    }
  }, "Your vendor now has a formal governance document.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: G.cobalt,
      fontWeight: 500
    }
  }, "Mythos is running inside critical infrastructure with defined controls.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 26,
      color: G.body
    }
  }, "Most enterprise AI deployments have neither."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      borderRadius: 24,
      border: `2px solid ${G.cobalt}`,
      padding: 30,
      background: G.tint
    }
  }, rows.map(([text, ic, status, color]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      padding: '18px 22px',
      background: '#fff',
      borderRadius: 14,
      border: `1px solid ${G.border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 22,
      color: G.ink
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 18,
      fontWeight: 600,
      color,
      padding: '7px 16px',
      borderRadius: 9999,
      background: color === G.cobalt ? 'rgba(0,71,171,0.08)' : 'rgba(232,133,43,0.12)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18,
      strokeWidth: 2
    }
  }), status))))));
}

/* ── Slide 6 — CTA ────────────────────────────────────── */
function S6_CTA() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: G.cobalt,
    logo: "white",
    kicker: null,
    curves: true,
    last: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 78,
      lineHeight: 1.08,
      letterSpacing: '-0.025em',
      color: '#fff',
      maxWidth: 920
    }
  }, "Your AI is already running."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 64,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: G.accentLight,
      maxWidth: 920
    }
  }, "What governs it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0 0',
      height: 1,
      background: 'rgba(255,255,255,0.22)',
      maxWidth: 560
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,0.86)',
      maxWidth: 780
    }
  }, "This is the work we do with enterprise teams."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 32,
      color: '#fff'
    }
  }, "Are you ready for this?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 22,
      fontWeight: 500,
      color: G.cobalt,
      background: '#fff',
      padding: '18px 32px',
      borderRadius: 9999,
      boxShadow: '0 16px 40px rgba(0,0,0,0.18)'
    }
  }, "newtuple.com ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 22,
      height: 22
    }
  })))));
}
window.__GovernanceSlides = [S1_Cover, S2_Glasswing, S3_OtherMove, S4_TwoApproaches, S5_TheGap, S6_CTA];
Object.assign(window, {
  G,
  GSlide,
  S1_Cover,
  S2_Glasswing,
  S3_OtherMove,
  S4_TwoApproaches,
  S5_TheGap,
  S6_CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "GovernanceSlides.jsx", error: String((e && e.message) || e) }); }

// case-study/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Delete (opens a Cancel/Delete confirm
 *      dialog). Drag the rail's right edge to resize; width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "case-study/deck-stage.js", error: String((e && e.message) || e) }); }

// onepager/App.jsx
try { (() => {
/* eslint-disable */
const {
  useState,
  useEffect
} = React;

// ─────────────────────────────────────────────────────────────
// THE PROOF. 6 metric tiles (kept as a separate band below the diagram)
// ─────────────────────────────────────────────────────────────
const PROOF = [{
  value: '42→20',
  label: 'API surface reduced post-UAT',
  ctx: 'Engineering simplicity as a deliverable.'
}, {
  value: '10',
  label: 'Governed workflow states',
  ctx: 'Full state machine, zero manual tracking.'
}, {
  value: '5',
  label: 'Enterprise systems integrated',
  ctx: 'One governed pipeline, end-to-end.'
}, {
  value: '8–12',
  unit: 'wks',
  label: 'Discovery to production',
  ctx: 'Gated delivery, signed off at every phase.'
}, {
  value: '100%',
  label: 'Audit coverage',
  ctx: 'Every AI call, every human decision, every action.'
}, {
  value: '0',
  label: 'Ungoverned AI outputs',
  ctx: 'Confidence gate before any downstream action.'
}];

// ─────────────────────────────────────────────────────────────
// ACCENT INTENSITY. three presets
// ─────────────────────────────────────────────────────────────
const ACCENT = {
  subtle: {
    cobalt: '#1F4E96',
    cobaltDark: '#163C75',
    cobaltSoft: '#EAF0FA',
    arrowColor: '#1F4E96'
  },
  standard: {
    cobalt: '#0047AB',
    cobaltDark: '#003582',
    cobaltSoft: '#E2EBF7',
    arrowColor: '#0047AB'
  },
  bold: {
    cobalt: '#002F8F',
    cobaltDark: '#001E66',
    cobaltSoft: '#D7E2F4',
    arrowColor: '#002F8F'
  }
};

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks({
    accentIntensity: 'standard',
    labelMode: 'capabilities',
    density: 'comfortable'
  });
  const accent = ACCENT[tweaks.accentIntensity];

  // Expose accent vars to CSS
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--ac-cobalt', accent.cobalt);
    r.style.setProperty('--ac-cobalt-dark', accent.cobaltDark);
    r.style.setProperty('--ac-cobalt-soft', accent.cobaltSoft);
  }, [accent]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Visuals"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Accent intensity",
    value: tweaks.accentIntensity,
    options: [{
      value: 'subtle',
      label: 'Subtle'
    }, {
      value: 'standard',
      label: 'Standard'
    }, {
      value: 'bold',
      label: 'Bold'
    }],
    onChange: v => setTweak('accentIntensity', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Density",
    value: tweaks.density,
    options: [{
      value: 'compact',
      label: 'Compact'
    }, {
      value: 'comfortable',
      label: 'Comfortable'
    }],
    onChange: v => setTweak('density', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Diagram"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Right-column labels",
    value: tweaks.labelMode,
    options: [{
      value: 'capabilities',
      label: 'Capabilities'
    }, {
      value: 'outcomes',
      label: 'Outcomes'
    }],
    onChange: v => setTweak('labelMode', v)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "op-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-wordmark"
  }, "NEWTUPLE"), /*#__PURE__*/React.createElement("div", {
    className: "op-eyebrow"
  }, "AI ENGINEERING CAPABILITY  \xB7  ONE-PAGER")), /*#__PURE__*/React.createElement("section", {
    className: "op-hero"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "op-hero__h1"
  }, "We don't build demos.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "op-hero__h1--mute"
  }, "We build production systems that run at scale,", /*#__PURE__*/React.createElement("br", null), "with governance and measurability built in."))), /*#__PURE__*/React.createElement("section", {
    className: "op-arch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head__label"
  }, "End-state architecture"), /*#__PURE__*/React.createElement("div", {
    className: "op-section-head__sub"
  }, "A single, client-owned orchestration layer between enterprise systems and the model layer. Every AI action passes a confidence gate; every human decision is recorded.")), /*#__PURE__*/React.createElement(ArchitectureDiagram, {
    accent: accent,
    labelMode: tweaks.labelMode,
    density: tweaks.density
  })), /*#__PURE__*/React.createElement("section", {
    className: "op-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-split__left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head__label"
  }, "Where commerce breaks down")), /*#__PURE__*/React.createElement("div", {
    className: "op-split__intro"
  }, "Beauty and luxury retail run on product data that lives in five systems and reconciles in none. Every problem below shows up as a confidence gap somewhere downstream."), /*#__PURE__*/React.createElement("ul", {
    className: "op-problems__list"
  }, [{
    n: '01',
    title: 'Product data fragmented across regions & channels',
    body: 'HQ, regional teams, marketplaces, and retail partners each maintain their own version. Reconciliation happens manually, country by country.'
  }, {
    n: '02',
    title: "Multilingual content can't keep pace with launches",
    body: 'Translation and localization lag behind launches. Brand voice drifts between markets. Translation memory and glossary live in disconnected tools.'
  }, {
    n: '03',
    title: 'AI rewrites ship without governance',
    body: 'Generated copy goes live without similarity gates, glossary checks, or tone review. Retraction in a luxury context costs more than the original work.'
  }, {
    n: '04',
    title: 'Channel adaptations rebuilt by hand',
    body: 'Each marketplace, retailer feed, and DTC site needs its own copy and asset variants. Nothing reuses prior work or learns from cycles.'
  }].map((p, i) => /*#__PURE__*/React.createElement("li", {
    className: "op-problems__item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-problems__n"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "op-problems__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-problems__title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "op-problems__copy"
  }, p.body)))))), /*#__PURE__*/React.createElement("div", {
    className: "op-split__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head op-section-head--onDark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head__label"
  }, "The proof")), /*#__PURE__*/React.createElement("div", {
    className: "op-split__intro op-split__intro--onDark"
  }, "What the architecture delivers, measured. Every number below is from a system running in production today."), /*#__PURE__*/React.createElement("div", {
    className: "op-proof__grid"
  }, PROOF.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "op-proof__tile",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-proof__value"
  }, p.value, p.unit && /*#__PURE__*/React.createElement("span", {
    className: "op-proof__unit"
  }, " ", p.unit)), /*#__PURE__*/React.createElement("div", {
    className: "op-proof__label"
  }, p.label), /*#__PURE__*/React.createElement("div", {
    className: "op-proof__ctx"
  }, p.ctx)))))), /*#__PURE__*/React.createElement("section", {
    className: "op-engage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-section-head__label"
  }, "How we engage"), /*#__PURE__*/React.createElement("div", {
    className: "op-section-head__sub"
  }, "A gated delivery model. Every phase ends in a signed-off demo before the next one starts.")), /*#__PURE__*/React.createElement("div", {
    className: "op-engage__grid"
  }, [{
    n: '01',
    wk: 'Wk 1–2',
    title: 'Discovery',
    body: 'Joint working sessions with your team. We end with a written architecture, a working evaluation harness, and a go / no-go.'
  }, {
    n: '02',
    wk: 'Wk 2–4',
    title: 'Vertical slice',
    body: 'One end-to-end path through the system, from capture to governed output, wired to real enterprise systems, not mocks.'
  }, {
    n: '03',
    wk: 'Wk 4–8',
    title: 'Build & harden',
    body: 'Scope expands across agents, integrations, and governance. Evals run on every change; nothing ships without a passing gate.'
  }, {
    n: '04',
    wk: 'Wk 8+',
    title: 'Operate',
    body: 'You own the system. We hand over runbooks, monitoring, and an evaluation pipeline; we stay on as engineering reserve.'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "op-engage__tile",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-engage__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "op-engage__n"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "op-engage__wk"
  }, s.wk)), /*#__PURE__*/React.createElement("div", {
    className: "op-engage__title"
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "op-engage__body"
  }, s.body))))), /*#__PURE__*/React.createElement("footer", {
    className: "op-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-footer__brand"
  }, "NEWTUPLE TECHNOLOGIES"), /*#__PURE__*/React.createElement("div", {
    className: "op-footer__contact"
  }, "hello@newtuple.com  \xB7  newtuple.com")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "onepager/App.jsx", error: String((e && e.message) || e) }); }

// onepager/Architecture.jsx
try { (() => {
/* eslint-disable */
/**
 * Hub-and-spoke architecture diagram.
 * Boxes are real DOM (so PPTX export keeps text editable);
 * connectors are an SVG overlay positioned over the same coordinate space.
 */

const ARCH_W = 1160;
const ARCH_H = 640;
function ArchitectureDiagram({
  accent,
  labelMode,
  density
}) {
  const cobalt = accent.cobalt;
  const cobaltDark = accent.cobaltDark;
  const arrowColor = accent.arrowColor;
  const dataArrowColor = '#9AA4B2';

  // Geometry. define once, share between boxes and SVG arrows
  const COL_L_X = 0;
  const COL_L_W = 260;
  const COL_R_X = ARCH_W - 260;
  const COL_R_W = 260;
  const COL_C_X = 320;
  const COL_C_W = ARCH_W - 320 * 2; // ~520

  // Center column rows
  const TOP_Y = 0; // Human-review card
  const TOP_H = 96;
  const HUB_Y = 130; // Cobalt hub
  const HUB_H = 282;
  const BOT_Y = 440; // Model layer
  const BOT_H = 72;
  const OUT_Y = 540; // Output strip
  const OUT_H = 60;

  // Left input cards
  const inputCards = [{
    label: 'Capture sources',
    items: ['Mobile · Forms · IoT', 'Field operations · sensors']
  }, {
    label: 'Enterprise systems',
    items: ['EDW · ERP · CRM · DAM', 'Auth · workflow · storage']
  }, {
    label: 'External signals',
    items: ['Documents · APIs · streams', 'Reference data · market']
  }];

  // Right outcome cards. two label modes
  const outcomeLabels = {
    capabilities: [{
      label: 'Extraction',
      desc: 'parse · normalize · enrich'
    }, {
      label: 'Classification',
      desc: 'taxonomy · tagging'
    }, {
      label: 'Matching',
      desc: 'dedup · canonicalize'
    }, {
      label: 'Ranking',
      desc: 'confidence · priority'
    }, {
      label: 'Review',
      desc: 'queue · escalate · approve'
    }, {
      label: 'Audit',
      desc: 'event log · evidence chain'
    }],
    outcomes: [{
      label: 'Governed decisions',
      desc: 'every action gated on confidence'
    }, {
      label: 'Reduced exceptions',
      desc: 'patterns learned and resolved'
    }, {
      label: 'Faster cycle time',
      desc: 'discovery → production in weeks'
    }, {
      label: 'Measurable quality',
      desc: 'evals attached to every release'
    }, {
      label: 'Full audit coverage',
      desc: '100% trace, AI + human + system'
    }, {
      label: 'Production scale',
      desc: 'workloads that run, not demos'
    }]
  }[labelMode];

  // Vertical layout for left column (3 cards in COL_L_W × ARCH_H box)
  const leftPad = 60;
  const leftCardH = (ARCH_H - leftPad * 2 - 40) / 3; // 3 cards w/ small gaps
  const leftGap = 20;
  const leftCardY = i => leftPad + i * (leftCardH + leftGap);

  // Vertical layout for right column (6 cards)
  const rightPad = 30;
  const rightGap = density === 'compact' ? 10 : 16;
  const rightCardH = (ARCH_H - rightPad * 2 - rightGap * 5) / 6;
  const rightCardY = i => rightPad + i * (rightCardH + rightGap);

  // ── connector anchor points (in diagram coords) ───────────────────────
  const hubCx = COL_C_X + COL_C_W / 2;
  const hubLeftX = COL_C_X;
  const hubRightX = COL_C_X + COL_C_W;
  const hubTopY = HUB_Y;
  const hubBotY = HUB_Y + HUB_H;
  const hubMidY = HUB_Y + HUB_H / 2;
  return /*#__PURE__*/React.createElement("div", {
    className: "arch-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-inner",
    style: {
      width: ARCH_W,
      height: ARCH_H,
      position: 'relative'
    }
  }, inputCards.map((card, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "arch-card arch-card--input",
    style: {
      position: 'absolute',
      left: COL_L_X,
      top: leftCardY(i),
      width: COL_L_W,
      height: leftCardH
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__label"
  }, card.label), card.items.map((it, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    className: "arch-card__item"
  }, it)))), /*#__PURE__*/React.createElement("div", {
    className: "arch-card arch-card--review",
    style: {
      position: 'absolute',
      left: COL_C_X,
      top: TOP_Y,
      width: COL_C_W,
      height: TOP_H
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__label arch-card__label--accent"
  }, "Human review workflow"), /*#__PURE__*/React.createElement("div", {
    className: "arch-card__item arch-card__item--lg"
  }, "Review \xB7 approve \xB7 refine \xB7 regenerate"), /*#__PURE__*/React.createElement("div", {
    className: "arch-card__item arch-card__item--muted"
  }, "GREEN \xB7 YELLOW \xB7 RED escalation")), /*#__PURE__*/React.createElement("div", {
    className: "arch-card arch-card--hub",
    style: {
      position: 'absolute',
      left: COL_C_X,
      top: HUB_Y,
      width: COL_C_W,
      height: HUB_H,
      background: cobalt
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__eyebrow"
  }, "AI ENGINEERING CAPABILITY"), /*#__PURE__*/React.createElement("div", {
    className: "arch-card__title"
  }, "Client-owned", /*#__PURE__*/React.createElement("br", null), "orchestration layer"), /*#__PURE__*/React.createElement("div", {
    className: "arch-hub__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "arch-hub__row"
  }, "Model routing  \xB7  prompts  \xB7  retrieval"), /*#__PURE__*/React.createElement("div", {
    className: "arch-hub__row"
  }, "Rules  \xB7  confidence scoring  \xB7  evals"), /*#__PURE__*/React.createElement("div", {
    className: "arch-hub__row"
  }, "Human review  \xB7  audit trail"), /*#__PURE__*/React.createElement("div", {
    className: "arch-hub__row"
  }, "APIs  \xB7  monitoring  \xB7  policy controls")), /*#__PURE__*/React.createElement("div", {
    className: "arch-card arch-card--input",
    style: {
      position: 'absolute',
      left: COL_C_X,
      top: BOT_Y,
      width: COL_C_W,
      height: BOT_H
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__label"
  }, "Model layer"), /*#__PURE__*/React.createElement("div", {
    className: "arch-card__item"
  }, "LLMs \xB7 translation engines \xB7 vision models \xB7 BYOM")), /*#__PURE__*/React.createElement("div", {
    className: "arch-card arch-card--output",
    style: {
      position: 'absolute',
      left: COL_C_X,
      top: OUT_Y,
      width: COL_C_W,
      height: OUT_H,
      background: cobaltDark
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__eyebrow arch-card__eyebrow--light"
  }, "GOVERNED OUTPUT  \xB7  AUDIT TRAIL  \xB7  MEASURABLE RESULT"), /*#__PURE__*/React.createElement("div", {
    className: "arch-card__item arch-card__item--onDark"
  }, "Retailer feeds \xB7 D2C \xB7 marketplaces \xB7 downstream systems")), outcomeLabels.map((card, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "arch-card arch-card--outcome",
    style: {
      position: 'absolute',
      left: COL_R_X,
      top: rightCardY(i),
      width: COL_R_W,
      height: rightCardH
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "arch-outcome__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "arch-card__heading"
  }, card.label), /*#__PURE__*/React.createElement("div", {
    className: "arch-card__item arch-card__item--tight"
  }, card.desc)))), /*#__PURE__*/React.createElement("svg", {
    className: "arch-svg",
    viewBox: `0 0 ${ARCH_W} ${ARCH_H}`,
    width: ARCH_W,
    height: ARCH_H,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "ar-cobalt",
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: arrowColor
  })), /*#__PURE__*/React.createElement("marker", {
    id: "ar-gray",
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: dataArrowColor
  }))), [0, 1, 2].map(i => {
    const y = leftCardY(i) + leftCardH / 2;
    const startX = COL_L_X + COL_L_W;
    const endX = hubLeftX;
    const targetY = hubMidY + (i - 1) * 60;
    const mid = (startX + endX) / 2;
    return /*#__PURE__*/React.createElement("path", {
      key: `l${i}`,
      d: `M ${startX} ${y} C ${mid} ${y}, ${mid} ${targetY}, ${endX - 2} ${targetY}`,
      fill: "none",
      stroke: dataArrowColor,
      strokeWidth: 1.8,
      markerEnd: "url(#ar-gray)"
    });
  }), outcomeLabels.map((_, i) => {
    const y = rightCardY(i) + rightCardH / 2;
    const startX = hubRightX;
    const endX = COL_R_X;
    const sourceY = hubMidY + (i - 2.5) * 22;
    const mid = (startX + endX) / 2;
    return /*#__PURE__*/React.createElement("path", {
      key: `r${i}`,
      d: `M ${startX + 2} ${sourceY} C ${mid} ${sourceY}, ${mid} ${y}, ${endX - 2} ${y}`,
      fill: "none",
      stroke: arrowColor,
      strokeWidth: 1.6,
      markerEnd: "url(#ar-cobalt)",
      opacity: 0.9
    });
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${hubCx} ${hubTopY} L ${hubCx} ${TOP_Y + TOP_H + 4}`,
    stroke: arrowColor,
    strokeWidth: 2,
    fill: "none",
    markerEnd: "url(#ar-cobalt)",
    markerStart: "url(#ar-cobalt)"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${hubCx} ${hubBotY} L ${hubCx} ${BOT_Y - 4}`,
    stroke: arrowColor,
    strokeWidth: 2,
    fill: "none",
    markerEnd: "url(#ar-cobalt)",
    markerStart: "url(#ar-cobalt)"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${hubCx} ${BOT_Y + BOT_H} L ${hubCx} ${OUT_Y - 4}`,
    stroke: dataArrowColor,
    strokeWidth: 2,
    fill: "none",
    markerEnd: "url(#ar-gray)"
  }))));
}
window.ArchitectureDiagram = ArchitectureDiagram;
})(); } catch (e) { __ds_ns.__errors.push({ path: "onepager/Architecture.jsx", error: String((e && e.message) || e) }); }

// onepager/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "onepager/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// slides/GovernanceSlides.jsx
try { (() => {
/* AI Governance Moment — LinkedIn carousel (1080×1080) v3
   9-slide narrative: Hook → Two Signals This Week → Mythos + Glasswing →
   Why It Matters → Failures ×2 → The Pattern → What To Do → CTA
   LinkedIn safe zone: 96px margins on all sides */

const G = {
  cobalt: '#0047AB',
  cobalt700: '#003C90',
  cobaltLite: '#2E6FD6',
  navy950: '#02020A',
  navy900: '#0A0E2A',
  navy800: '#141857',
  ink: '#0E1320',
  body: '#374151',
  muted: '#6B7686',
  border: '#E2E6EC',
  tint: '#F7F8FA',
  white: '#FFFFFF',
  accentLight: '#8FB4FF',
  warning: '#D97706',
  danger: '#DC2626'
};
const TOTAL = 9;
const SAFE = 96; // LinkedIn safe-zone margin

/* ── Shared slide frame ─────────────────────────────────── */
function GSlide({
  children,
  bg = '#fff',
  logo = 'cobalt',
  curves = true,
  last = false,
  kicker,
  kickerColor,
  pageNum
}) {
  const isDark = [G.cobalt, G.cobalt700, G.navy950, G.navy900, G.navy800].includes(bg);
  const logoSrc = logo === 'white' ? '../assets/logo-white.png' : '../assets/logo-cobalt.png';
  const curvesSrc = isDark ? '../assets/geometric-curves-white.png' : '../assets/geometric-curves.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: bg,
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0
    }
  }, curves && /*#__PURE__*/React.createElement("img", {
    src: curvesSrc,
    alt: "",
    style: {
      position: 'absolute',
      left: -60,
      bottom: -200,
      width: '120%',
      opacity: isDark ? 0.14 : 0.8,
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: SAFE,
      left: SAFE,
      right: SAFE,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 4
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      padding: '8px 16px',
      borderRadius: 9999,
      background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,71,171,0.08)',
      color: kickerColor || (isDark ? '#fff' : G.cobalt),
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,71,171,0.18)'}`
    }
  }, kicker) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Newtuple",
    style: {
      height: 26,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: `${SAFE + 60}px ${SAFE}px ${SAFE + 60}px`,
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1
    }
  }, children), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: SAFE + 4,
      right: SAFE,
      display: 'flex',
      color: isDark ? '#fff' : G.cobalt,
      opacity: .85,
      zIndex: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "chevron-right",
    style: {
      width: 26,
      height: 26,
      marginLeft: -9,
      strokeWidth: 1.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: SAFE + 6,
      left: SAFE,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: isDark ? 'rgba(255,255,255,0.4)' : G.muted,
      fontFamily: 'JetBrains Mono, monospace',
      zIndex: 4
    }
  }, String(pageNum || window.__GPAGE || 1).padStart(2, '0'), " / ", String(TOTAL).padStart(2, '0')));
}

/* ── S1 — Hook ─────────────────────────────────────────── */
function S1_Hook() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: G.cobalt,
    logo: "white",
    kicker: "AI Governance",
    kickerColor: "#fff",
    curves: true,
    pageNum: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 78,
      lineHeight: 1.08,
      letterSpacing: '-0.025em',
      color: '#fff',
      maxWidth: 880
    }
  }, "Everyone is taking AI governance seriously."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: G.accentLight
    }
  }, "Are you?"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.22)',
      maxWidth: 440,
      margin: '6px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: 700
    }
  }, "The organisations that aren't asking this question yet are the ones that will be answering for it later.")));
}

/* ── S2 — Two Signals This Week (custom split layout) ──── */
function S2_ThisWeek() {
  const glasswingPoints = [['shield-check', '10,000+ critical zero-day vulnerabilities found across major OSes & browsers'], ['lock', '150 new orgs · 15 countries · all security-vetted before access'], ['zap', 'Sectors: power, water, healthcare, comms, hardware'], ['trending-up', 'Goal: give defenders a 6–12 month head start before threats proliferate']];
  const openaiPoints = [['alert-triangle', 'Risk Assessment & Mitigation: rigorous evaluation for catastrophic risks, loss of control and cyber offense'], ['sliders', 'Deployment & Safety Thresholds: internal protocols dictate when a model is "safe enough" to release'], ['shield', 'Security & Incident Response: strict risk management, external expert input, defined response timelines']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: G.navy950,
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/geometric-curves-white.png",
    alt: "",
    style: {
      position: 'absolute',
      left: -60,
      bottom: -200,
      width: '120%',
      opacity: 0.12,
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `${SAFE}px ${SAFE}px 20px`,
      color: '#fff',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 13,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      padding: '8px 16px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)'
    }
  }, "This Week"), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-white.png",
    alt: "Newtuple",
    style: {
      height: 26,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 38,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#fff',
      maxWidth: 880
    }
  }, "Two signals. One week.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: G.accentLight,
      fontWeight: 400
    }
  }, "Every enterprise AI team should pause."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      margin: `0 ${SAFE}px ${SAFE + 40}px`,
      gap: 16,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: G.navy800,
      borderRadius: 20,
      padding: '28px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: G.accentLight
    }
  }, "Anthropic \xB7 Expanding Project Glasswing"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 6px',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.25,
      color: '#fff'
    }
  }, "Controlled rollout of the world's most powerful AI cyber model"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, glasswingPoints.map(([ic, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 12,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16,
      color: G.accentLight,
      strokeWidth: 1.8,
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.55
    }
  }, text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 4,
      paddingTop: 12,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, [['$100M', 'Committed by Anthropic'], ['10K+', 'Vulnerabilities found'], ['AWS · Apple · Google', 'Coalition members']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: G.accentLight
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.45)',
      marginTop: 2,
      lineHeight: 1.4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: G.cobalt,
      borderRadius: 20,
      padding: '28px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "OpenAI \xB7 Frontier Governance Framework"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 6px',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.25,
      color: '#fff'
    }
  }, "22-page governance doc: regulation forced the hand"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontSize: 14,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.72)',
      lineHeight: 1.55
    }
  }, "California, the EU and Illinois passed three new AI laws in 48 hours. OpenAI's response was to publish a formal accountability framework, or face consequences."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, openaiPoints.map(([ic, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: 12,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16,
      color: '#fff',
      strokeWidth: 1.8,
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.9)',
      lineHeight: 1.55
    }
  }, text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      paddingTop: 12,
      borderTop: '1px solid rgba(255,255,255,0.18)',
      fontSize: 13,
      fontWeight: 400,
      color: 'rgba(255,255,255,0.65)',
      lineHeight: 1.5
    }
  }, "One built governance in. One had to write it down.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 500
    }
  }, "The direction of travel is the same: governance is no longer optional.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: SAFE + 4,
      right: SAFE,
      display: 'flex',
      color: '#fff',
      opacity: .85,
      zIndex: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "chevron-right",
    style: {
      width: 26,
      height: 26,
      marginLeft: -9,
      strokeWidth: 1.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: SAFE + 6,
      left: SAFE,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.38)',
      fontFamily: 'JetBrains Mono, monospace',
      zIndex: 4
    }
  }, "02 / 09"));
}

/* ── S3 — What is Mythos? + Project Glasswing ──────────── */
function S3_MythosGlasswing() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "Context",
    curves: false,
    pageNum: 3
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 38,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: G.ink
    }
  }, "Before we go further. Two things worth knowing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: G.navy900,
      borderRadius: 20,
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: G.accentLight
    }
  }, "Newtuple \xB7 Mythos"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.25,
      color: '#fff'
    }
  }, "Enterprise AI platform built for governance"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.78)'
    }
  }, "Mythos is Newtuple's platform for deploying AI inside enterprise environments, with safety controls, access governance, and compliance built in from day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, [['shield-check', 'Safety by design: guardrails baked in, not added after'], ['building-2', 'Built for regulated industries and critical environments'], ['lock', 'Every deployment is vetted, monitored and auditable']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16,
      color: G.accentLight,
      strokeWidth: 1.8,
      flexShrink: 0,
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.5
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: G.tint,
      border: `1.5px solid ${G.border}`,
      borderRadius: 20,
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: G.cobalt
    }
  }, "Anthropic \xB7 Project Glasswing"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.25,
      color: G.ink
    }
  }, "An initiative to secure the world's most critical software"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.6,
      color: G.body
    }
  }, "Powered by Claude Mythos Preview, Anthropic's frontier AI model, capable of finding and fixing software vulnerabilities at a pace no human team could match."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, [['cpu', 'Partners include AWS, Apple, Google, Microsoft, JPMorganChase'], ['globe', 'Protecting systems that billions of people depend on daily'], ['users', 'Access is strictly vetted: governance is the prerequisite']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16,
      color: G.cobalt,
      strokeWidth: 1.8,
      flexShrink: 0,
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: G.body,
      lineHeight: 1.5
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: `rgba(0,71,171,0.08)`,
      borderRadius: 12,
      padding: '12px 16px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: G.cobalt,
      fontWeight: 500,
      lineHeight: 1.5
    }
  }, "Note: Anthropic's \"Claude Mythos\" and Newtuple's \"Mythos\" are separate products, both named after the same era of high-stakes AI."))))));
}

/* ── S4 — Why It Matters ───────────────────────────────── */
function S4_WhyItMatters() {
  const risks = [['alert-triangle', G.warning, 'Brand damage', 'A public AI failure spreads faster than any PR response can contain it'], ['gavel', G.cobalt, 'Legal exposure', 'Regulators are moving. Ignorance of your own AI is no longer a defence'], ['trending-down', G.danger, 'Trust erosion', 'Customers who lose confidence in your AI rarely come back']];
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "Why it matters",
    curves: false,
    pageNum: 4
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontWeight: 300,
      fontSize: 44,
      lineHeight: 1.17,
      letterSpacing: '-0.02em',
      color: G.ink
    }
  }, "Ungoverned AI isn't just a tech problem."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: G.cobalt
    }
  }, "It's a business liability.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.55,
      color: G.body,
      maxWidth: 820
    }
  }, "When an AI deployed under your brand goes wrong, the reputational, legal and financial fallout lands on ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: G.ink
    }
  }, "your organisation"), ", not your vendor's."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flex: 1,
      alignItems: 'stretch'
    }
  }, risks.map(([ic, color, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      flex: 1,
      borderRadius: 20,
      border: `1.5px solid ${G.border}`,
      padding: '26px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: `${color}18`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 24,
      height: 24,
      color,
      strokeWidth: 1.7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 600,
      color: G.ink
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      color: G.body,
      lineHeight: 1.55
    }
  }, desc)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: G.navy900,
      borderRadius: 14,
      padding: '18px 24px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 19,
      color: '#fff',
      lineHeight: 1.5
    }
  }, "The examples on the next two slides are real. They happened to big brands with big budgets.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: G.accentLight
    }
  }, "Governance was the missing piece every time.")))));
}

/* ── S5 — Failures 1: Chipotle + Chevrolet ─────────────── */
function S5_Failures1() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "Real-world failures \xB7 1 of 2",
    curves: false,
    pageNum: 5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 22,
      color: G.body,
      lineHeight: 1.4
    }
  }, "These aren't hypotheticals. They happened. To household names."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 20,
      border: `1.5px solid ${G.border}`,
      padding: '26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: G.tint
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'rgba(220,38,38,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bot",
    style: {
      width: 22,
      height: 22,
      color: G.danger,
      strokeWidth: 1.7
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: G.danger,
      textTransform: 'uppercase'
    }
  }, "Chipotle")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.25,
      color: G.ink
    }
  }, "\"Pepper\": the hacked customer bot"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.65,
      color: G.body
    }
  }, "Chipotle's customer service chatbot was bypassed. Users manipulated it into ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: G.ink
    }
  }, "solving complex coding algorithms"), " on demand. It became a free developer tool for anyone who asked the right way."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: G.body,
      lineHeight: 1.55
    }
  }, "No routing logic. No intent boundaries. No monitoring."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'rgba(220,38,38,0.07)',
      borderRadius: 10,
      padding: '12px 16px',
      border: `1px solid rgba(220,38,38,0.15)`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 500,
      color: G.danger,
      lineHeight: 1.5
    }
  }, "Root cause: Zero guardrails on what the bot could be made to do"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 20,
      border: `1.5px solid ${G.border}`,
      padding: '26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: G.tint
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'rgba(220,38,38,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "car",
    style: {
      width: 22,
      height: 22,
      color: G.danger,
      strokeWidth: 1.7
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: G.danger,
      textTransform: 'uppercase'
    }
  }, "Chevrolet")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.25,
      color: G.ink
    }
  }, "A $70,000 SUV agreed to sell for $1"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.65,
      color: G.body
    }
  }, "A dealership's ChatGPT-powered sales bot was manipulated into ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: G.ink
    }
  }, "agreeing to sell a $70,000 SUV for one dollar"), ". The AI had full negotiation authority and no price floor."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: G.body,
      lineHeight: 1.55
    }
  }, "Given power to close deals, without any limits on how far it could go."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'rgba(220,38,38,0.07)',
      borderRadius: 10,
      padding: '12px 16px',
      border: `1px solid rgba(220,38,38,0.15)`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 500,
      color: G.danger,
      lineHeight: 1.5
    }
  }, "Root cause: Unbound AI authority with no pricing guardrails"))))));
}

/* ── S6 — Failures 2: DPD + NYC ─────────────────────────── */
function S6_Failures2() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "Real-world failures \xB7 2 of 2",
    curves: false,
    pageNum: 6
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 22,
      color: G.body,
      lineHeight: 1.4
    }
  }, "The pattern holds across industries and countries."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 20,
      border: `1.5px solid ${G.border}`,
      padding: '26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: G.tint
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'rgba(217,119,6,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "package",
    style: {
      width: 22,
      height: 22,
      color: G.warning,
      strokeWidth: 1.7
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: G.warning,
      textTransform: 'uppercase'
    }
  }, "DPD Delivery")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.25,
      color: G.ink
    }
  }, "The chatbot that swore at its own customers"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.65,
      color: G.body
    }
  }, "A customer tricked DPD's package-tracking assistant into ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: G.ink
    }
  }, "swearing, insulting itself and writing poetry condemning DPD's own service"), ". Covered by the BBC and The Guardian."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: G.body,
      lineHeight: 1.55
    }
  }, "No behavioural constraints. The model was persuaded to act against the brand."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'rgba(217,119,6,0.08)',
      borderRadius: 10,
      padding: '12px 16px',
      border: `1px solid rgba(217,119,6,0.18)`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 500,
      color: G.warning,
      lineHeight: 1.5
    }
  }, "Root cause: No persona constraints or adversarial input handling"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 20,
      border: `1.5px solid ${G.border}`,
      padding: '26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: G.tint
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'rgba(217,119,6,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "landmark",
    style: {
      width: 22,
      height: 22,
      color: G.warning,
      strokeWidth: 1.7
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: G.warning,
      textTransform: 'uppercase'
    }
  }, "NYC MyCity Bot")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.25,
      color: G.ink
    }
  }, "A government AI that gave illegal advice"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.65,
      color: G.body
    }
  }, "NYC's official business AI told landlords they could ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: G.ink
    }
  }, "legally reject housing vouchers"), " and bosses they could ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: G.ink
    }
  }, "withhold employee tips"), ". Both are illegal. It was decommissioned."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: G.body,
      lineHeight: 1.55
    }
  }, "Real people relied on it. Real harm followed."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'rgba(217,119,6,0.08)',
      borderRadius: 10,
      padding: '12px 16px',
      border: `1px solid rgba(217,119,6,0.18)`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 500,
      color: G.warning,
      lineHeight: 1.5
    }
  }, "Root cause: No legal validation layer on high-stakes advice"))))));
}

/* ── S7 — The Pattern ───────────────────────────────────── */
function S7_ThePattern() {
  const gaps = ['No clear boundaries on what the AI can and cannot do', 'No monitoring for unexpected or adversarial inputs', 'No escalation path when the AI gets it wrong', 'No accountability when the damage is done'];
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: G.cobalt,
    logo: "white",
    kicker: "The pattern",
    kickerColor: "#fff",
    curves: true,
    pageNum: 7
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 62,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      color: '#fff'
    }
  }, "These aren't bugs."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 54,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: G.accentLight
    }
  }, "They're governance gaps."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.2)',
      maxWidth: 500,
      margin: '2px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 22,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.5
    }
  }, "Four organisations. Four industries. One root cause, each time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, gaps.map((text, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      background: 'rgba(255,255,255,0.1)',
      borderRadius: 14,
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 12,
      color: G.accentLight,
      marginTop: 3,
      minWidth: 24,
      flexShrink: 0
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 21,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.92)',
      lineHeight: 1.45
    }
  }, text))))));
}

/* ── S8 — What You Can Do ───────────────────────────────── */
function S8_WhatYouCanDo() {
  const steps = [['01', 'clipboard-list', 'Audit your current AI deployments', 'Map what your AI can and can\'t do right now. Find the gap between vendor promises and actual deployment controls.'], ['02', 'file-text', 'Write a governance policy', 'Even a one-pager creates accountability: for your team, your customers and regulators.'], ['03', 'users', 'Work with partners who build it in', 'Choose vendors who treat governance as a design requirement — not something to document after a failure.']];
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: "#fff",
    logo: "cobalt",
    kicker: "What you can do",
    curves: false,
    pageNum: 8
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 42,
      lineHeight: 1.18,
      letterSpacing: '-0.02em',
      color: G.ink
    }
  }, "Governance isn't a blocker.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: G.cobalt,
      fontWeight: 500
    }
  }, "It's how you build with confidence.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, steps.map(([num, ic, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: num,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 18,
      background: G.tint,
      border: `1px solid ${G.border}`,
      borderLeft: `5px solid ${G.cobalt}`,
      borderRadius: 16,
      padding: '20px 22px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 13,
      fontWeight: 600,
      color: G.cobalt,
      minWidth: 26,
      marginTop: 2,
      flexShrink: 0
    }
  }, num), /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 24,
      height: 24,
      color: G.cobalt,
      strokeWidth: 1.5,
      marginTop: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: G.ink,
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      color: G.body,
      lineHeight: 1.55
    }
  }, desc)))))));
}

/* ── S9 — CTA ───────────────────────────────────────────── */
function S9_CTA() {
  return /*#__PURE__*/React.createElement(GSlide, {
    bg: G.navy950,
    logo: "white",
    kicker: null,
    curves: true,
    last: true,
    pageNum: 9
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: G.accentLight
    }
  }, "Still figuring out governance?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 68,
      lineHeight: 1.08,
      letterSpacing: '-0.025em',
      color: '#fff',
      maxWidth: 880
    }
  }, "It doesn't have to be complicated."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 26,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.75)',
      maxWidth: 760
    }
  }, "Whether you're just starting out or untangling an existing deployment. We help enterprise teams put the right controls in place, before something goes wrong."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.18)',
      maxWidth: 480,
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 26,
      color: '#fff',
      lineHeight: 1.4
    }
  }, "Book a consultation. Let's talk governance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 20,
      fontWeight: 500,
      color: G.cobalt,
      background: '#fff',
      padding: '16px 30px',
      borderRadius: 9999,
      boxShadow: '0 16px 40px rgba(0,0,0,0.28)'
    }
  }, "newtuple.com ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'rgba(255,255,255,0.42)',
      fontWeight: 300
    }
  }, "or DM us directly"))));
}
window.__GovernanceSlides = [S1_Hook, S2_ThisWeek, S3_MythosGlasswing, S4_WhyItMatters, S5_Failures1, S6_Failures2, S7_ThePattern, S8_WhatYouCanDo, S9_CTA];
Object.assign(window, {
  G,
  GSlide,
  S1_Hook,
  S2_ThisWeek,
  S3_MythosGlasswing,
  S4_WhyItMatters,
  S5_Failures1,
  S6_Failures2,
  S7_ThePattern,
  S8_WhatYouCanDo,
  S9_CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/GovernanceSlides.jsx", error: String((e && e.message) || e) }); }

// slides/SlideKit.jsx
try { (() => {
/* Newtuple LinkedIn Carousel — slide kit (1080×1080 square).
   Background = real carousel-bg.png (navy→cobalt grid + baked circuit + wordmark).
   Text + chevron are HTML overlays. Components exported to window. */

const SX = {
  white: '#FFFFFF',
  dim: 'rgba(255,255,255,0.74)',
  faint: 'rgba(255,255,255,0.5)',
  accent: '#8FB4FF',
  cyan: '#00B8D9',
  cobalt: '#0047AB'
};

/* Square frame. `last` hides the swipe chevron. */
function Slide({
  children,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: '#02020A',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/carousel-bg.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '96px 92px 120px'
    }
  }, children), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 54,
      right: 64,
      display: 'flex',
      color: '#fff',
      opacity: .9
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "chevron-right",
    style: {
      width: 30,
      height: 30,
      marginLeft: -11,
      strokeWidth: 1.5
    }
  }))));
}
function Kick({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: SX.faint,
      marginBottom: 34
    }
  }, children);
}

/* 1 — Title / hook */
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(Kick, null, "Most AI agents fail in production"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 74,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: SX.white,
      maxWidth: 840
    }
  }, "The problem usually is not the model.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      background: `linear-gradient(90deg,${SX.accent},${SX.cyan})`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "It is the architecture.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '40px 0 0',
      fontWeight: 300,
      fontSize: 30,
      lineHeight: 1.5,
      color: SX.dim,
      maxWidth: 760
    }
  }, "Three design patterns teams use to build reliable AI agents."));
}

/* 2 — Concept / narrative paragraph (parametric) */
function ConceptSlide({
  kick = 'The setup',
  lead = /*#__PURE__*/React.createElement(React.Fragment, null, "Many early prototypes follow a simple flow:", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontWeight: 500,
      fontSize: 32,
      color: SX.accent
    }
  }, "User \u2192 LLM \u2192 Response"), "."),
  body = "That works for demos. Real systems are different — agents must interact with tools, handle multi-step workflows, and verify results.",
  last = false
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    last: last
  }, /*#__PURE__*/React.createElement(Kick, null, kick), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 38,
      lineHeight: 1.5,
      color: SX.white,
      maxWidth: 840
    }
  }, lead), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '34px 0 0',
      fontWeight: 300,
      fontSize: 30,
      lineHeight: 1.55,
      color: SX.dim,
      maxWidth: 820
    }
  }, body));
}

/* 3 — Numbered pattern */
function PatternSlide({
  num = '01',
  name = 'Reflection Pattern',
  desc = 'The agent reviews its own output before finishing a task.',
  bullets = ['Is the answer accurate?', 'Did I miss anything important?', 'Should I revise the result?']
}) {
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 88,
      lineHeight: 0.9,
      letterSpacing: '-0.03em',
      background: `linear-gradient(135deg,${SX.accent},${SX.cyan})`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, num), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 48,
      color: SX.white
    }
  }, name)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 30px',
      fontWeight: 300,
      fontSize: 31,
      lineHeight: 1.45,
      color: SX.dim,
      maxWidth: 800
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      fontSize: 28,
      fontWeight: 300,
      color: SX.white
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 26,
      height: 26,
      color: SX.cyan,
      strokeWidth: 2
    }
  }), b))));
}

/* 9 — Closing / engagement */
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    last: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 60,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: SX.white,
      maxWidth: 820
    }
  }, "AI agents become far more reliable when designed with the right architecture."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '48px 0 0',
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 1.45,
      color: SX.accent,
      maxWidth: 760
    }
  }, "What design patterns have worked well for your AI systems?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 54,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 24,
      fontWeight: 500,
      color: '#0047AB',
      background: '#fff',
      padding: '16px 30px',
      borderRadius: 9999
    }
  }, "Build Your Agentic Enterprise ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 22,
      height: 22
    }
  }))));
}
Object.assign(window, {
  SX,
  Slide,
  Kick,
  TitleSlide,
  ConceptSlide,
  PatternSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/SlideKit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
/* Dashboard body — KPI cards, agent runs table, live trace panel */
function Kpi({
  label,
  value,
  delta,
  icon,
  up = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      border: `1px solid ${D.border}`,
      borderRadius: 20,
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: D.muted
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: 'rgba(0,71,171,.07)',
      color: D.cobalt,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 17,
      height: 17
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: D.ink,
      margin: '12px 0 4px',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 13,
      fontWeight: 500,
      color: up ? D.success : D.warn
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": up ? 'trending-up' : 'trending-down',
    style: {
      width: 14,
      height: 14
    }
  }), delta, /*#__PURE__*/React.createElement("span", {
    style: {
      color: D.faint,
      fontWeight: 400
    }
  }, "vs last week")));
}
const RUNS = [['Document Intelligence', 'Multi-Agent', 'Success', '2.3s', '95.2%'], ['Fact Verification', 'Reflection', 'Success', '1.1s', '98.7%'], ['Aviation Data Access', 'ReAct', 'Running', '—', '91.0%'], ['Support Deflection', 'Multi-Agent', 'Success', '0.8s', '93.4%'], ['Patent Invalidity', 'Reflection', 'Review', '4.6s', '88.1%']];
const STATUS = {
  Success: [D.success, '#E6F6EF'],
  Running: [D.cobalt, 'rgba(0,71,171,.08)'],
  Review: [D.warn, '#FDEFE2']
};
function RunsTable() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${D.border}`,
      borderRadius: 20,
      overflow: 'hidden',
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 22px',
      borderBottom: `1px solid ${D.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: D.ink
    }
  }, "Recent agent runs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: D.cobalt,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "View all")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Agent', 'Pattern', 'Status', 'Latency', 'Accuracy'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '11px 22px',
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: D.faint,
      background: D.tint
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, RUNS.map((r, i) => {
    const [fg, bg] = STATUS[r[2]];
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        borderTop: `1px solid ${D.line}`
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 22px',
        fontWeight: 500,
        color: D.ink
      }
    }, r[0]), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 22px',
        color: D.body
      }
    }, r[1]), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 22px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 500,
        color: fg,
        background: bg,
        padding: '4px 11px',
        borderRadius: 9999
      }
    }, r[2])), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 22px',
        color: D.body,
        fontVariantNumeric: 'tabular-nums'
      }
    }, r[3]), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '13px 22px',
        fontWeight: 600,
        color: D.cobalt,
        fontVariantNumeric: 'tabular-nums'
      }
    }, r[4]));
  }))));
}
function TracePanel() {
  const steps = [['Reason', 'Parse 14-page filing for fund NAV', 'brain'], ['Act', 'Call OCR + extraction tool', 'wrench'], ['Observe', '37 fields extracted, 2 low-confidence', 'eye'], ['Reflect', 'Re-verify 2 fields against source', 'rotate-ccw'], ['Finalize', '95.2% confidence — passed', 'check']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${D.border}`,
      borderRadius: 20,
      padding: '20px 22px',
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: D.ink,
      marginBottom: 4
    }
  }, "Live trace"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: D.muted,
      marginBottom: 18
    }
  }, "Document Intelligence \xB7 run #4821"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      paddingBottom: i < steps.length - 1 ? 18 : 0,
      position: 'relative'
    }
  }, i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 15,
      top: 30,
      bottom: 0,
      width: 1.5,
      background: D.line
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9999,
      background: 'rgba(0,71,171,.07)',
      color: D.cobalt,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s[2],
    style: {
      width: 15,
      height: 15
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: D.ink
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: D.body
    }
  }, s[1]))))));
}
Object.assign(window, {
  Kpi,
  RunsTable,
  TracePanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Shell.jsx
try { (() => {
/* Newtuple Dashboard UI Kit — shared primitives (exported to window) */
const D = {
  cobalt: '#0047AB',
  cobalt700: '#003C90',
  cyan: '#00B8D9',
  ink: '#0E1320',
  body: '#4B5563',
  muted: '#6B7686',
  faint: '#9AA4B2',
  border: '#E2E6EC',
  line: '#EEF0F4',
  tint: '#F7F8FA',
  white: '#FFFFFF',
  success: '#1FA971',
  warn: '#E8852B',
  high: '#F2B705'
};
function Sidebar({
  active,
  setActive
}) {
  const nav = [['Overview', 'layout-dashboard'], ['Agents', 'bot'], ['Runs', 'activity'], ['Evaluations', 'gauge'], ['Datasets', 'database'], ['Integrations', 'plug']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 236,
      background: '#fff',
      borderRight: `1px solid ${D.border}`,
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-cobalt.png",
    alt: "Newtuple",
    style: {
      height: 18,
      alignSelf: 'flex-start',
      margin: '2px 8px 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(([label, icon]) => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setActive(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '10px 12px',
        borderRadius: 12,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: on ? 500 : 400,
        color: on ? D.cobalt : D.body,
        background: on ? 'rgba(0,71,171,.07)' : 'transparent',
        transition: 'all .2s'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": icon,
      style: {
        width: 18,
        height: 18
      }
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderTop: `1px solid ${D.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9999,
      background: D.cobalt,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600
    }
  }, "NT"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: D.ink
    }
  }, "Ops Team"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: D.muted
    }
  }, "workspace"))));
}
function Topbar({
  title
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 62,
      borderBottom: `1px solid ${D.border}`,
      background: 'rgba(255,255,255,.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: D.ink
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: D.success,
      background: '#E6F6EF',
      padding: '4px 10px',
      borderRadius: 9999
    }
  }, "\u25CF Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: D.tint,
      border: `1px solid ${D.border}`,
      borderRadius: 9999,
      padding: '8px 14px',
      width: 240
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 15,
      height: 15,
      color: D.faint
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: D.faint
    }
  }, "Search agents, runs\u2026")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 19,
      height: 19,
      color: D.muted
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 14,
      background: D.cobalt,
      color: '#fff',
      border: 'none',
      borderRadius: 9999,
      padding: '9px 18px',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center',
      boxShadow: '0 8px 20px rgba(0,71,171,.2)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 15,
      height: 15
    }
  }), "New Agent")));
}
Object.assign(window, {
  D,
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudies.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Case studies — "Work we've done" grid */
const CASES = [{
  tag: 'Multi-Agent Document Intelligence',
  title: 'Alternative Investments: Document Intelligence at 95% Accuracy',
  metric: '30–40k docs/mo'
}, {
  tag: 'LLM Hallucination Prevention',
  title: 'AI Fact-Verification Platform at Scale',
  metric: 'Real-time'
}, {
  tag: 'Multi-Agent Orchestration',
  title: 'Aviation OEM: From Hours to Seconds with Agentic Data Access',
  metric: '90%+ accuracy'
}, {
  tag: 'GenAI Data Intelligence',
  title: 'B2B Sales Agency: 10x Performance, Zero-Dollar Data Stack',
  metric: '15 days → 1 day'
}, {
  tag: 'Agentic RAG Platform',
  title: 'Data Intelligence Platform for Investment Research',
  metric: 'NL querying'
}, {
  tag: 'Computer Vision + IoT',
  title: 'Healthcare Laundry: Recovering $5M+ Annually with RFID & AI',
  metric: '$5M+ saved'
}];
function CaseCard({
  tag,
  title,
  metric
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: '#fff',
      borderRadius: 24,
      padding: 26,
      border: `1px solid ${h ? C.cobalt : C.border}`,
      boxShadow: h ? '0 14px 36px rgba(14,19,32,.08)' : 'none',
      transition: 'all .3s cubic-bezier(.4,0,.2,1)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: C.cobalt,
      background: 'rgba(0,71,171,.07)',
      padding: '5px 11px',
      borderRadius: 9999
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 19,
      lineHeight: 1.35,
      color: C.ink,
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: `1px solid ${C.border}`,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: C.cobalt,
      fontVariantNumeric: 'tabular-nums'
    }
  }, metric), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 18,
      height: 18,
      color: h ? C.cobalt : C.faint,
      transition: 'color .3s'
    }
  })));
}
function CaseStudies() {
  useLucide();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "#fff"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Work we've done"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px',
      fontWeight: 300,
      fontSize: 40,
      color: C.ink
    }
  }, "Production AI systems"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.6,
      color: C.body
    }
  }, "Across aviation, finance, healthcare, and enterprise SaaS.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, CASES.map(c => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: c.title
  }, c)))));
}
Object.assign(window, {
  CaseStudies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FAQFooter.jsx
try { (() => {
/* FAQ accordion + cobalt Footer */
const FAQS = [{
  q: 'How is Newtuple different from other AI consultancies?',
  a: 'We focus exclusively on production-grade AI. While most consultancies stop at proof-of-concept, we take agents and applications through to production with SLA-backed operations, observability, and continuous optimization.'
}, {
  q: 'What industries do you work with?',
  a: "We've delivered across aviation, HR tech, financial services, real estate, and sales operations. Our AI frameworks are industry-agnostic — the core patterns of agentic AI apply everywhere."
}, {
  q: 'How long does a typical engagement take?',
  a: 'Prototypes in 4–6 weeks. Production deployments in 8–12 weeks. Our GenAI accelerators give you a ~70% head start, so we move significantly faster than building from scratch.'
}, {
  q: 'Do you build custom solutions or use templates?',
  a: 'Both. Our accelerator products (Dialogtuple, Gaugetuple) cover repeatable AI patterns. We customize these for your specific use case, data, and integration requirements.'
}];
function FAQ() {
  const [open, setOpen] = React.useState(0);
  useLucide();
  return /*#__PURE__*/React.createElement(Section, {
    bg: C.tint
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Knowledge"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontWeight: 300,
      fontSize: 36,
      color: C.ink
    }
  }, "Frequently asked")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, FAQS.map((f, k) => {
    const isOpen = open === k;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: () => setOpen(isOpen ? -1 : k),
      style: {
        background: '#fff',
        border: `1px solid ${isOpen ? C.cobalt : C.border}`,
        borderRadius: 18,
        padding: '20px 24px',
        cursor: 'pointer',
        transition: 'border-color .3s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        fontSize: 17,
        color: C.ink
      }
    }, f.q), /*#__PURE__*/React.createElement("i", {
      "data-lucide": isOpen ? 'minus' : 'plus',
      style: {
        width: 18,
        height: 18,
        color: C.cobalt,
        flexShrink: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 160 : 0,
        overflow: 'hidden',
        transition: 'max-height .5s cubic-bezier(.4,0,.2,1), margin .5s',
        marginTop: isOpen ? 12 : 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.65,
        color: C.body
      }
    }, f.a)));
  })));
}
function Footer() {
  useLucide();
  const cols = {
    Services: ['Build AI Agents', 'Build AI Apps'],
    Accelerators: ['GenAI Accelerators', 'Dialogtuple', 'Gaugetuple'],
    Company: ['About Us', 'Life at Newtuple', 'Careers', 'Blog']
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: C.cobalt,
      color: '#fff',
      padding: '72px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Newtuple",
    style: {
      height: 22,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.8)'
    }
  }, "A modern, AI-first consulting company. Bringing the power of AI + Data to your organization."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, ['LinkedIn', 'Twitter', 'GitHub'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'rgba(255,255,255,.85)',
      textDecoration: 'none',
      border: '1px solid rgba(255,255,255,.28)',
      borderRadius: 9999,
      padding: '6px 14px'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, Object.entries(cols).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      color: 'rgba(255,255,255,.78)',
      fontSize: 14,
      fontWeight: 300,
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.18)',
      marginTop: 48,
      paddingTop: 22,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.65)'
    }
  }, "\xA9 2026 Newtuple Technologies Private Limited. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.65)'
    }
  }, "Privacy Policy \xB7 Service Agreement"))));
}
Object.assign(window, {
  FAQ,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FAQFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — dark agentic backdrop (grid bg image), big ExtraLight headline */
function Hero() {
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#02020A',
      minHeight: 660,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/carousel-bg.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 35%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(2,2,10,.55) 0%, rgba(2,2,10,.1) 45%, rgba(2,2,10,.35) 100%)'
    }
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '120px 32px 80px',
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    onDark: true
  }, "Generative AI Experts")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 200,
      fontSize: 60,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "Build Your", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 200,
      background: 'linear-gradient(90deg,#8FB4FF,#00B8D9)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "Agentic Enterprise."), /*#__PURE__*/React.createElement("br", null), "Ship Production-Grade Intelligence."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px auto 0',
      maxWidth: 640,
      fontWeight: 300,
      fontSize: 19,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.74)'
    }
  }, "We help organizations deploy reliable & scalable AI agents and applications. Every engineer codes with AI agents. Every PM is AI-augmented. We've done this for years."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow-right"
  }, "Talk to Our Experts"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true
  }, "Explore Accelerators"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Nav — fixed top, translucent white with blur (on dark hero) */
function Nav() {
  const links = ['Services', 'Accelerators', 'Industries', 'Company'];
  useLucide();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 0,
      right: 0,
      zIndex: 20,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1180,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '13px 14px 13px 24px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.16)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Newtuple",
    style: {
      height: 19
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, l, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 14,
      height: 14,
      opacity: .6
    }
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "Blog")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true
  }, "Contact Us")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Services — "Two ways we accelerate AI" — two large cards */
function ServiceCard({
  icon,
  title,
  desc,
  bullets
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      flex: 1,
      background: '#fff',
      borderRadius: 28,
      padding: 36,
      border: `1px solid ${h ? C.cobalt : C.border}`,
      boxShadow: h ? '0 18px 48px rgba(0,71,171,.10)' : '0 1px 3px rgba(14,19,32,.05)',
      transition: 'all .3s cubic-bezier(.4,0,.2,1)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: 'rgba(0,71,171,.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C.cobalt,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontWeight: 600,
      fontSize: 24,
      color: C.ink
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.65,
      color: C.body
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      marginBottom: 26
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: '#374151',
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: C.cobalt,
      strokeWidth: 2.2
    }
  }), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: C.cobalt,
      fontWeight: 500,
      fontSize: 15
    }
  }, "Learn More ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })));
}
function Services() {
  useLucide();
  return /*#__PURE__*/React.createElement(Section, {
    bg: C.tint
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Two ways we accelerate AI for you"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontWeight: 300,
      fontSize: 40,
      letterSpacing: '0.01em',
      color: C.ink
    }
  }, "From prototype to production")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "bot",
    title: "Build AI Agents",
    desc: "We design, build, and operate AI agents with enterprise-grade infrastructure \u2014 automation that runs all day, at scale, with governance and measurable ROI.",
    bullets: ['Autonomous PMO agents', 'Recruitment copilots', 'Finance operators', 'Support agents']
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "layout-template",
    title: "Build AI Apps",
    desc: "Strategy, architecture and engineering for AI-first startups and product teams. We define the roadmap, choose the stack, then build and operate end to end.",
    bullets: ['Product roadmap & strategy', '0 to 1 productization', 'AI augmentation & rebuilds', 'Managed ops & GenAI pods']
  })));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Social.jsx
try { (() => {
/* Clients + Testimonials.
   NOTE: real client logo images were not available (cross-origin); rendered as
   monochrome text wordmarks as a faithful stand-in. Swap in real logos when available. */
const CLIENTS = ['Siemens', 'Menyala', 'Consulum', 'Elyndra', 'HRBrain', 'ProAI', 'AkomaKonnect', 'Aivanta'];
function Clients() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: C.tint,
    pad: 64
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Trusted by forward-thinking enterprises")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '28px 52px',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: C.faint,
      opacity: .85
    }
  }, c))));
}
const QUOTES = [{
  q: "There are good GenAI teams out there, but very few that understand pushing things into production at scale. Their approach reflects work with many use cases and F500 companies.",
  who: 'Chase Hughes',
  role: 'Founder, ProAI'
}, {
  q: "The team delivered a highly complex solution involving multiple AI agents on top of big data — on time, within cost, and with great results.",
  who: 'Confidential',
  role: 'VP, Aviation Logistics'
}, {
  q: "Invaluable expertise in NLP, ML, and GenAI made it possible to tackle the most subtle and complex biases in corporate environments.",
  who: 'Tim Glowa',
  role: 'Founder, HRBrain'
}];
function Testimonials() {
  const [i, setI] = React.useState(0);
  useLucide();
  const t = QUOTES[i];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "#fff"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Voices from teams that shipped production AI with us")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      textAlign: 'center',
      background: C.tint,
      border: `1px solid ${C.border}`,
      borderRadius: 28,
      padding: '48px 56px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "quote",
    style: {
      width: 30,
      height: 30,
      color: C.cobalt,
      opacity: .4
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 28px',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 1.5,
      color: C.ink,
      letterSpacing: '-0.01em'
    }
  }, t.q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: C.ink
    }
  }, t.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.muted,
      marginTop: 2
    }
  }, t.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      marginTop: 26
    }
  }, QUOTES.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    "aria-label": `Quote ${k + 1}`,
    style: {
      width: k === i ? 28 : 9,
      height: 9,
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      background: k === i ? C.cobalt : C.border,
      transition: 'all .3s'
    }
  }))));
}
Object.assign(window, {
  Clients,
  Testimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ui.jsx
try { (() => {
/* Newtuple Website UI Kit — shared primitives
   Exports to window for cross-file use (Babel scope isolation). */

const C = {
  cobalt: '#0047AB',
  cobalt700: '#003C90',
  cyan: '#00B8D9',
  ink: '#0E1320',
  body: '#4B5563',
  muted: '#6B7686',
  faint: '#9AA4B2',
  border: '#E2E6EC',
  tint: '#F7F8FA',
  white: '#FFFFFF'
};

/* Eyebrow / kicker label */
function Kicker({
  children,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: onDark ? 'rgba(255,255,255,0.6)' : C.muted
    }
  }, children);
}

/* Pill button */
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  onDark
}) {
  const base = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: 15,
    borderRadius: 9999,
    padding: '13px 24px',
    cursor: 'pointer',
    border: '1.5px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all .3s cubic-bezier(.4,0,.2,1)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: C.cobalt,
      color: '#fff',
      boxShadow: '0 12px 32px rgba(0,71,171,.22)'
    },
    secondary: onDark ? {
      background: 'rgba(255,255,255,.08)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,.25)'
    } : {
      background: '#fff',
      color: C.cobalt,
      borderColor: C.cobalt
    },
    ghost: {
      background: 'transparent',
      color: onDark ? '#fff' : C.body
    }
  };
  const [h, setH] = React.useState(false);
  const hover = {
    primary: {
      background: C.cobalt700,
      transform: 'translateY(-1px)'
    },
    secondary: onDark ? {
      background: 'rgba(255,255,255,.16)'
    } : {
      background: 'rgba(0,71,171,.05)'
    },
    ghost: {
      color: C.cobalt
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...variants[variant],
      ...(h ? hover[variant] : {})
    }
  }, children, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 16,
      height: 16
    }
  }));
}

/* Section wrapper — max-w-7xl, generous vertical rhythm */
function Section({
  children,
  bg = '#fff',
  pad = 96,
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: `${pad}px 32px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, children));
}

/* Tag chip */
function Chip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 400,
      padding: '6px 13px',
      borderRadius: 9999,
      background: C.tint,
      border: `1px solid ${C.border}`,
      color: '#374151'
    }
  }, children);
}

/* refresh lucide icons after render */
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
Object.assign(window, {
  C,
  Kicker,
  Button,
  Section,
  Chip,
  useLucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ui.jsx", error: String((e && e.message) || e) }); }

})();
