/* ============================================================
   NEWTUPLE BRAND STUDIO — app logic, templates, exporters
   All frame visuals use inline hex (from the design tokens) so
   exported HTML/PNG/PDF are fully self-contained & portable.
   ============================================================ */
(() => {
'use strict';

const A = window.NT_ASSETS;

/* ---- brand palette (mirrors colors_and_type.css) ---- */
const C = {
  cobalt:'#0047AB', cobalt700:'#003C90', cobalt400:'#2E6FD6', cyan:'#00B8D9',
  white:'#FFFFFF', black:'#000000',
  gray50:'#F7F8FA', gray100:'#EEF0F4', gray200:'#E2E6EC', gray300:'#CBD2DC',
  gray400:'#9AA4B2', gray500:'#6B7686', gray600:'#4B5563', gray700:'#374151', gray900:'#0E1320',
  navy950:'#02020A', navy900:'#0A0E2A', navy700:'#1D2B74', navy500:'#2C2BAD',
  accentLight:'#8FB4FF',
  success:'#1FA971', highlight:'#F2B705', warning:'#E8852B', danger:'#D64545'
};
const FONT = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/* theme text-role sets for slide surfaces */
function roles(dark){
  return dark
    ? { fg:'#FFFFFF', fg2:'rgba(255,255,255,0.74)', fg3:'rgba(255,255,255,0.5)',
        kicker:C.accentLight, em:C.cyan, rule:'rgba(255,255,255,0.28)', ghost:'rgba(255,255,255,0.06)',
        cardBg:'rgba(255,255,255,0.05)', cardBorder:'rgba(255,255,255,0.14)' }
    : { fg:C.gray900, fg2:C.gray600, fg3:C.gray500,
        kicker:C.gray500, em:C.cobalt, rule:C.cobalt, ghost:'rgba(14,19,32,0.045)',
        cardBg:C.gray50, cardBorder:C.gray200 };
}

/* ---------------- tiny hyperscript ---------------- */
function h(tag, attrs, children){
  const e = document.createElement(tag);
  if(attrs) for(const k in attrs){
    const v = attrs[k];
    if(v==null) continue;
    if(k==='style' && typeof v==='object') Object.assign(e.style, v);
    else if(k==='class') e.className = v;
    else if(k==='html') e.innerHTML = v;
    else if(k.slice(0,2)==='on' && typeof v==='function') e.addEventListener(k.slice(2).toLowerCase(), v);
    else e.setAttribute(k, v);
  }
  if(children!=null){
    (Array.isArray(children)?children:[children]).forEach(c=>{
      if(c==null || c===false) return;
      e.appendChild(typeof c==='object' ? c : document.createTextNode(String(c)));
    });
  }
  return e;
}
const esc = s => (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
/* **text** => emphasis span */
function rich(s, emColor, emWeight){
  return esc(s).replace(/\*\*(.+?)\*\*/g, `<span style="color:${emColor};font-weight:${emWeight||600}">$1</span>`);
}
/* strip markers for docx/plain */
const plain = s => (s||'').replace(/\*\*(.+?)\*\*/g,'$1');

/* ---------- editable block: tags a node for the direct-manipulation editor ----------
   path = dot-path into state.data[kind]; the editor uses it to read/write + store
   per-element style/position overrides. */
function EB(path, style, raw, opts){
  opts = opts || {};
  const e = document.createElement(opts.tag || 'div');
  Object.assign(e.style, style);
  e.setAttribute('data-bind', path);
  e.setAttribute('data-defstyle', JSON.stringify({
    fontSize: style.fontSize || '', fontWeight: style.fontWeight || '',
    color: style.color || '', textAlign: style.textAlign || '' }));
  if(opts.rich){
    e.setAttribute('data-rich','1');
    e.dataset.em = opts.em; e.dataset.emw = opts.emw || 600;
    e.innerHTML = rich(raw, opts.em, opts.emw || 600);
  } else {
    e.textContent = raw==null ? '' : String(raw);
  }
  return e;
}
/* kicker as an editable block (returns null when empty so it doesn't render) */
function kickerEB(path, text, r){
  if(!text) return null;
  return EB(path, {fontSize:'22px', fontWeight:500, textTransform:'uppercase',
    letterSpacing:'0.16em', color:r.kicker, marginBottom:'28px'}, text);
}
function getByPath(obj, path){ return path.split('.').reduce((o,k)=> (o==null?o:o[k]), obj); }
function setByPath(obj, path, val){
  const ks = path.split('.'); const last = ks.pop();
  let o = obj; for(const k of ks){ o = o[k]; } o[last] = val;
}

/* ============================================================
   ICONS (Lucide-style outline)
   ============================================================ */
const ICON = {
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  square:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10h8M8 14h5"/></svg>',
  banner:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 12h7"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/></svg>',
  pages:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h9a2 2 0 0 1 2 2v13"/><rect x="4" y="6" width="12" height="15" rx="2"/><path d="M7 11h6M7 15h4"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>'
};

/* ============================================================
   SLIDE / FRAME PRIMITIVES
   ============================================================ */
function baseSquare(dark, isLast, pad){
  const frame = h('div',{class:'nt-frame', style:{
    width:'1080px', height:'1080px', fontFamily:FONT,
    background: dark ? C.navy900 : C.white
  }});
  if(dark){
    frame.appendChild(h('div',{style:{position:'absolute', inset:'0',
      backgroundImage:`url(${isLast ? A.carouselBg : A.carouselBgChevron})`,
      backgroundSize:'cover', backgroundPosition:'center'}}));
  } else {
    frame.appendChild(h('img',{src:A.logoCobalt, alt:'Newtuple', style:{
      position:'absolute', top:'74px', right:'96px', height:'30px', width:'auto'}}));
  }
  const layer = h('div',{style:{position:'absolute', inset:'0',
    padding:(pad||'110px'), display:'flex', flexDirection:'column', justifyContent:'center'}});
  frame.appendChild(layer);
  return {frame, layer, r:roles(dark)};
}
function pageDot(frame, dark, idx, total){
  frame.appendChild(h('div',{style:{position:'absolute', left:'110px', bottom:'64px',
    fontSize:'18px', fontWeight:500, letterSpacing:'0.12em',
    color: dark ? 'rgba(255,255,255,0.5)' : C.gray400}},
    `${String(idx+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`));
}
function kickerEl(text, r){
  if(!text) return null;
  return h('div',{style:{fontSize:'22px', fontWeight:500, textTransform:'uppercase',
    letterSpacing:'0.16em', color:r.kicker, marginBottom:'28px'}}, text);
}
function ghostNumber(frame, num, r){
  if(!num) return;
  frame.appendChild(h('div',{style:{position:'absolute', right:'48px', bottom:'-90px',
    fontSize:'560px', fontWeight:600, lineHeight:1, color:r.ghost, letterSpacing:'-0.04em',
    userSelect:'none'}}, num));
}

/* ============================================================
   TEMPLATE: LINKEDIN CAROUSEL  (1080×1080 square)
   ============================================================ */
function buildCarouselSlide(slide, theme, idx, total){
  const dark = theme==='dark';
  const isLast = idx===total-1;
  const {frame, layer, r} = baseSquare(dark, isLast);

  const P = 'slides.'+idx;
  if(slide.type==='title' || slide.type==='statement' || slide.type==='closing'){
    layer.style.justifyContent = 'center';
    const k = kickerEB(P+'.kicker', slide.kicker, r); if(k) layer.appendChild(k);
    if(slide.type==='closing'){
      layer.appendChild(h('div',{style:{width:'72px', height:'4px', background:r.rule, marginBottom:'30px'}}));
    }
    layer.appendChild(EB(P+'.title', {fontSize:'86px', fontWeight:200, lineHeight:1.06,
      letterSpacing:'-0.02em', color:r.fg}, slide.title, {rich:true, em:r.em, emw:600}));
    if(slide.body) layer.appendChild(EB(P+'.body', {marginTop:'34px', fontSize:'30px', fontWeight:300,
      lineHeight:1.5, color:r.fg2, maxWidth:'760px'}, slide.body, {rich:true, em:r.em, emw:500}));
    if(slide.type==='closing'){
      layer.appendChild(h('div',{style:{marginTop:'56px', display:'flex', alignItems:'center', gap:'14px',
        fontSize:'24px', fontWeight:500, color:r.fg}},
        [ h('span',{style:{color:r.em, fontSize:'30px'}}, '›'),
          EB(P+'.footLabel', {fontSize:'24px', fontWeight:500, color:r.fg}, slide.footLabel || 'Follow Newtuple for more') ]));
    }
  }
  else if(slide.type==='pattern'){
    layer.style.justifyContent = 'center';
    ghostNumber(frame, slide.number, r);
    layer.appendChild(EB(P+'.number', {fontSize:'140px', fontWeight:600, lineHeight:1,
      color:r.em, letterSpacing:'-0.03em', marginBottom:'10px'}, slide.number||'01'));
    const k = kickerEB(P+'.kicker', slide.kicker, r); if(k) layer.appendChild(k);
    layer.appendChild(EB(P+'.title', {fontSize:'62px', fontWeight:300, lineHeight:1.12,
      letterSpacing:'-0.01em', color:r.fg}, slide.title, {rich:true, em:r.em, emw:600}));
    if(slide.body) layer.appendChild(EB(P+'.body', {marginTop:'26px', fontSize:'29px', fontWeight:300,
      lineHeight:1.55, color:r.fg2, maxWidth:'780px'}, slide.body, {rich:true, em:r.em, emw:500}));
  }
  else if(slide.type==='list'){
    layer.style.justifyContent = 'center';
    const k = kickerEB(P+'.kicker', slide.kicker, r); if(k) layer.appendChild(k);
    layer.appendChild(EB(P+'.title', {fontSize:'56px', fontWeight:300, lineHeight:1.1,
      letterSpacing:'-0.01em', color:r.fg, marginBottom:'44px'}, slide.title, {rich:true, em:r.em, emw:600}));
    const list = h('div',{style:{display:'flex', flexDirection:'column', gap:'2px'}});
    (slide.items||[]).forEach((it,i)=>{
      list.appendChild(h('div',{style:{display:'flex', alignItems:'baseline', gap:'22px',
        padding:'22px 0', borderTop: i===0?'none':`1px solid ${dark?'rgba(255,255,255,0.12)':C.gray200}`}},
        [ h('span',{style:{color:r.em, fontSize:'26px', fontWeight:600, minWidth:'46px'}}, String(i+1).padStart(2,'0')),
          EB(P+'.items.'+i, {fontSize:'32px', fontWeight:300, lineHeight:1.35, color:r.fg}, it, {rich:true, em:r.em, emw:600}) ]));
    });
    layer.appendChild(list);
  }
  pageDot(frame, dark, idx, total);
  return frame;
}

/* ============================================================
   TEMPLATE: SOCIAL POST (1080×1080)
   ============================================================ */
function buildPost(d, theme){
  const dark = theme==='dark';
  const {frame, layer, r} = baseSquare(dark, true, '120px');
  layer.style.justifyContent = 'center';

  if(d.variant==='quote'){
    layer.appendChild(h('div',{style:{fontSize:'150px', lineHeight:0.7, color:r.em, fontWeight:600,
      height:'70px', overflow:'visible'}}, '“'));
    layer.appendChild(EB('title', {marginTop:'28px', fontSize:'66px', fontWeight:200, lineHeight:1.18,
      letterSpacing:'-0.02em', color:r.fg}, d.title, {rich:true, em:r.em, emw:600}));
    if(d.attribution) layer.appendChild(EB('attribution', {marginTop:'40px', fontSize:'26px', fontWeight:500,
      letterSpacing:'0.04em', color:r.fg2}, d.attribution));
  } else if(d.variant==='stat'){
    const k = kickerEB('kicker', d.kicker, r); if(k) layer.appendChild(k);
    layer.appendChild(EB('metric', {fontSize:'260px', fontWeight:600, lineHeight:0.9,
      letterSpacing:'-0.04em', color:r.em}, d.metric||'95%'));
    layer.appendChild(EB('title', {marginTop:'18px', fontSize:'40px', fontWeight:300, color:r.fg}, d.title||''));
    if(d.body) layer.appendChild(EB('body', {marginTop:'24px', fontSize:'28px', fontWeight:300,
      lineHeight:1.5, color:r.fg2, maxWidth:'760px'}, d.body, {rich:true, em:r.em, emw:500}));
  } else { /* announcement */
    const k = kickerEB('kicker', d.kicker, r); if(k) layer.appendChild(k);
    layer.appendChild(EB('title', {fontSize:'78px', fontWeight:200, lineHeight:1.08,
      letterSpacing:'-0.02em', color:r.fg}, d.title, {rich:true, em:r.em, emw:600}));
    if(d.body) layer.appendChild(EB('body', {marginTop:'30px', fontSize:'30px', fontWeight:300,
      lineHeight:1.5, color:r.fg2, maxWidth:'780px'}, d.body, {rich:true, em:r.em, emw:500}));
    if(d.cta) layer.appendChild(EB('cta', {marginTop:'52px', alignSelf:'flex-start',
      padding:'18px 40px', borderRadius:'9999px', background:C.cobalt, color:'#fff',
      fontSize:'26px', fontWeight:500}, d.cta));
  }
  return frame;
}

/* ============================================================
   TEMPLATE: BANNER (1200×630)
   ============================================================ */
function buildBanner(d, theme){
  const dark = theme==='dark';
  const r = roles(dark);
  const frame = h('div',{class:'nt-frame', style:{width:'1200px', height:'630px', fontFamily:FONT,
    background: dark ? C.navy900 : C.white}});
  if(dark){
    frame.appendChild(h('div',{style:{position:'absolute', inset:'0',
      backgroundImage:`url(${A.carouselBg})`, backgroundSize:'cover', backgroundPosition:'center 35%'}}));
  } else {
    frame.appendChild(h('img',{src:A.logoCobalt, style:{position:'absolute', top:'56px', left:'72px',
      height:'30px', width:'auto'}}));
    frame.appendChild(h('div',{style:{position:'absolute', right:'-120px', bottom:'-160px', width:'520px',
      height:'520px', borderRadius:'9999px', background:'rgba(0,71,171,0.06)'}}));
  }
  const layer = h('div',{style:{position:'absolute', inset:'0', padding:'72px',
    display:'flex', flexDirection:'column', justifyContent:'center'}});
  const k = kickerEB('kicker', d.kicker, r); if(k) layer.appendChild(k);
  layer.appendChild(EB('title', {fontSize:'68px', fontWeight:200, lineHeight:1.08,
    letterSpacing:'-0.02em', color:r.fg, maxWidth:'900px'}, d.title, {rich:true, em:r.em, emw:600}));
  if(d.subtitle) layer.appendChild(EB('subtitle', {marginTop:'24px', fontSize:'27px', fontWeight:300,
    lineHeight:1.45, color:r.fg2, maxWidth:'820px'}, d.subtitle, {rich:true, em:r.em, emw:500}));
  frame.appendChild(layer);
  return frame;
}

/* ============================================================
   TEMPLATE: ONE-PAGER (A4 portrait 794×1123, light only)
   ============================================================ */
function buildOnePager(d){
  const r = roles(false);
  const frame = h('div',{class:'nt-frame', style:{width:'794px', height:'1123px', fontFamily:FONT,
    background:C.white, display:'flex', flexDirection:'column'}});
  /* header band */
  frame.appendChild(h('div',{style:{display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'40px 56px 0'}},
    [ h('img',{src:A.logoCobalt, style:{height:'24px'}}),
      EB('eyebrow', {fontSize:'11px', fontWeight:500, textTransform:'uppercase', letterSpacing:'0.14em',
        color:C.gray400}, d.eyebrow||'Capability Overview') ]));
  /* hero */
  const body = h('div',{style:{flex:'1', padding:'34px 56px 0', display:'flex', flexDirection:'column'}});
  body.appendChild(EB('title', {fontSize:'40px', fontWeight:200, lineHeight:1.12, letterSpacing:'-0.02em',
    color:C.gray900, maxWidth:'620px'}, d.title, {rich:true, em:C.cobalt, emw:600}));
  if(d.intro) body.appendChild(EB('intro', {marginTop:'18px', fontSize:'15px', fontWeight:300,
    lineHeight:1.7, color:C.gray600, maxWidth:'640px'}, d.intro, {rich:true, em:C.cobalt, emw:500}));

  /* features grid */
  if((d.features||[]).length){
    const grid = h('div',{style:{marginTop:'34px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px'}});
    d.features.forEach((f,i)=>{
      grid.appendChild(h('div',{style:{border:`1px solid ${C.gray200}`, borderRadius:'20px',
        padding:'22px 24px', background:C.gray50}},
        [ EB('features.'+i+'.title', {fontSize:'17px', fontWeight:500, color:C.gray900, marginBottom:'8px'}, f.title),
          EB('features.'+i+'.desc', {fontSize:'13px', fontWeight:300, lineHeight:1.6, color:C.gray600}, f.desc) ]));
    });
    body.appendChild(grid);
  }
  /* metrics row */
  if((d.metrics||[]).length){
    const row = h('div',{style:{marginTop:'34px', display:'flex', gap:'40px', flexWrap:'wrap'}});
    d.metrics.forEach((m,i)=>{
      row.appendChild(h('div',{},
        [ EB('metrics.'+i+'.value', {fontSize:'42px', fontWeight:600, letterSpacing:'-0.02em', color:C.cobalt}, m.value),
          EB('metrics.'+i+'.label', {fontSize:'12px', fontWeight:500, textTransform:'uppercase', letterSpacing:'0.1em',
            color:C.gray500, marginTop:'4px'}, m.label) ]));
    });
    body.appendChild(row);
  }
  frame.appendChild(body);
  /* CTA footer band */
  frame.appendChild(h('div',{style:{background:C.cobalt, color:'#fff', padding:'26px 56px',
    display:'flex', alignItems:'center', justifyContent:'space-between'}},
    [ EB('ctaText', {fontSize:'20px', fontWeight:300, color:'#fff'}, d.ctaText||'Build Your Agentic Enterprise.'),
      EB('ctaUrl', {fontSize:'15px', fontWeight:500, letterSpacing:'0.02em', color:'#fff'}, d.ctaUrl||'newtuple.com') ]));
  return frame;
}

/* ============================================================
   TEMPLATE: PROPOSAL (A4 portrait, multi-page document, light)
   ============================================================ */
function proposalShell(idx, total, kicker){
  const frame = h('div',{class:'nt-frame', style:{width:'794px', height:'1123px', fontFamily:FONT,
    background:C.white, display:'flex', flexDirection:'column'}});
  frame.appendChild(h('div',{style:{flex:'0 0 auto', display:'flex', alignItems:'center',
    justifyContent:'space-between', padding:'40px 56px 0'}},
    [ h('img',{src:A.logoCobalt, style:{height:'22px'}}),
      EB('pages.'+idx+'.kicker', {fontSize:'10px', fontWeight:500, textTransform:'uppercase',
        letterSpacing:'0.14em', color:C.gray400}, kicker||'') ]));
  const content = h('div',{style:{flex:'1', minHeight:'0', padding:'28px 56px',
    display:'flex', flexDirection:'column'}});
  frame.appendChild(content);
  frame.appendChild(h('div',{style:{flex:'0 0 auto', padding:'0 56px 30px', display:'flex',
    justifyContent:'space-between', fontSize:'10px', fontWeight:500, letterSpacing:'0.08em',
    color:C.gray400, textTransform:'uppercase'}},
    [ h('span',{},'Newtuple · Confidential'), h('span',{}, `Page ${idx+1} / ${total}`) ]));
  return {frame, content};
}
function pBullet(path, text){
  return h('div',{style:{display:'flex', alignItems:'flex-start', gap:'12px', padding:'7px 0'}},
    [ h('div',{style:{width:'7px', height:'7px', borderRadius:'50%', background:C.cobalt, marginTop:'9px', flex:'0 0 auto'}}),
      EB(path, {fontSize:'14px', fontWeight:300, lineHeight:1.6, color:C.gray700}, text, {rich:true, em:C.cobalt, emw:600}) ]);
}
function buildProposalPage(page, idx, total){
  const P = 'pages.'+idx;
  const {frame, content} = proposalShell(idx, total, page.kicker);

  if(page.type==='cover'){
    content.style.justifyContent = 'center';
    content.appendChild(h('div',{style:{width:'64px', height:'4px', background:C.cobalt, marginBottom:'30px'}}));
    content.appendChild(EB(P+'.title', {fontSize:'50px', fontWeight:200, lineHeight:1.1,
      letterSpacing:'-0.02em', color:C.gray900, maxWidth:'600px'}, page.title, {rich:true, em:C.cobalt, emw:600}));
    if(page.subtitle) content.appendChild(EB(P+'.subtitle', {marginTop:'20px', fontSize:'17px',
      fontWeight:300, lineHeight:1.6, color:C.gray600, maxWidth:'560px'}, page.subtitle, {rich:true, em:C.cobalt, emw:500}));
    if(page.meta) content.appendChild(EB(P+'.meta', {marginTop:'44px', fontSize:'14px', fontWeight:500,
      letterSpacing:'0.02em', color:C.gray500}, page.meta));
  }
  else if(page.type==='section'){
    content.style.justifyContent = 'center';
    content.appendChild(EB(P+'.number', {fontSize:'120px', fontWeight:600, lineHeight:1, color:C.cobalt,
      letterSpacing:'-0.03em', marginBottom:'10px'}, page.number||'01'));
    content.appendChild(EB(P+'.title', {fontSize:'40px', fontWeight:300, lineHeight:1.15,
      letterSpacing:'-0.01em', color:C.gray900, maxWidth:'560px'}, page.title, {rich:true, em:C.cobalt, emw:600}));
  }
  else if(page.type==='content'){
    content.appendChild(EB(P+'.title', {fontSize:'30px', fontWeight:400, lineHeight:1.2,
      color:C.gray900, marginBottom:'16px'}, page.title, {rich:true, em:C.cobalt, emw:600}));
    if(page.body) content.appendChild(EB(P+'.body', {fontSize:'15px', fontWeight:300, lineHeight:1.7,
      color:C.gray600, maxWidth:'620px', marginBottom:'14px'}, page.body, {rich:true, em:C.cobalt, emw:500}));
    (page.items||[]).forEach((it,j)=> content.appendChild(pBullet(P+'.items.'+j, it)));
  }
  else if(page.type==='twocol'){
    content.appendChild(EB(P+'.title', {fontSize:'30px', fontWeight:400, lineHeight:1.2,
      color:C.gray900, marginBottom:'24px'}, page.title, {rich:true, em:C.cobalt, emw:600}));
    const col = (st, bt, sv, bv)=> h('div',{style:{flex:'1'}},
      [ EB(st, {fontSize:'13px', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em',
          color:C.cobalt, marginBottom:'10px'}, sv),
        EB(bt, {fontSize:'14px', fontWeight:300, lineHeight:1.65, color:C.gray700}, bv, {rich:true, em:C.cobalt, emw:600}) ]);
    content.appendChild(h('div',{style:{display:'flex', gap:'40px'}},
      [ col(P+'.leftTitle', P+'.leftBody', page.leftTitle, page.leftBody),
        col(P+'.rightTitle', P+'.rightBody', page.rightTitle, page.rightBody) ]));
  }
  else if(page.type==='metrics'){
    content.appendChild(EB(P+'.title', {fontSize:'30px', fontWeight:400, lineHeight:1.2,
      color:C.gray900, marginBottom:'14px'}, page.title, {rich:true, em:C.cobalt, emw:600}));
    if(page.body) content.appendChild(EB(P+'.body', {fontSize:'15px', fontWeight:300, lineHeight:1.7,
      color:C.gray600, maxWidth:'620px', marginBottom:'28px'}, page.body, {rich:true, em:C.cobalt, emw:500}));
    const grid = h('div',{style:{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px'}});
    (page.metrics||[]).forEach((m,j)=> grid.appendChild(h('div',{style:{border:`1px solid ${C.gray200}`,
      borderRadius:'18px', padding:'22px 24px', background:C.gray50}},
      [ EB(P+'.metrics.'+j+'.value', {fontSize:'40px', fontWeight:600, letterSpacing:'-0.02em', color:C.cobalt}, m.value),
        EB(P+'.metrics.'+j+'.label', {fontSize:'13px', fontWeight:400, lineHeight:1.5, color:C.gray600, marginTop:'6px'}, m.label) ])));
    content.appendChild(grid);
  }
  else if(page.type==='cta'){
    content.style.justifyContent = 'center';
    content.appendChild(EB(P+'.title', {fontSize:'42px', fontWeight:200, lineHeight:1.1,
      letterSpacing:'-0.02em', color:C.gray900, maxWidth:'560px'}, page.title, {rich:true, em:C.cobalt, emw:600}));
    if(page.body) content.appendChild(EB(P+'.body', {marginTop:'20px', fontSize:'16px', fontWeight:300,
      lineHeight:1.7, color:C.gray600, maxWidth:'560px'}, page.body, {rich:true, em:C.cobalt, emw:500}));
    content.appendChild(h('div',{style:{marginTop:'40px', background:C.cobalt, color:'#fff', borderRadius:'18px',
      padding:'24px 28px', display:'flex', alignItems:'center', justifyContent:'space-between', maxWidth:'560px'}},
      [ EB(P+'.meta', {fontSize:'16px', fontWeight:300, color:'#fff'}, page.meta||'Let’s talk'),
        EB(P+'.ctaUrl', {fontSize:'15px', fontWeight:500, color:'#fff'}, page.ctaUrl||'newtuple.com') ]));
  }
  return frame;
}

/* ============================================================
   TEMPLATE: IMPORTED DECK (editable, from PPTX via tools/build_imported.py)
   Each slide is rendered shape-by-shape at exact coordinates; text shapes are
   click-to-edit, draggable and recolorable via the normal editor.
   ============================================================ */
function impRunStyle(r, fscale){
  const s = { fontFamily:FONT };
  if(r.fs) s.fontSize = (r.fs*(fscale||1)).toFixed(1)+'px';
  if(r.b) s.fontWeight = '700';
  if(r.i) s.fontStyle = 'italic';
  if(r.u) s.textDecoration = 'underline';
  if(r.sp) s.letterSpacing = r.sp+'px';
  if(r.col) s.color = r.col;
  return s;
}
function impParaStyle(p){
  const s = { margin:'0', textAlign:(p.a||'left'),
    lineHeight:(p.lh!=null ? p.lh : 1.15) };
  if(p.mt) s.marginTop = p.mt+'px';
  if(p.mb) s.marginBottom = p.mb+'px';
  return s;
}
function impPara(p, fscale){
  const pd = h('div',{style:impParaStyle(p)});
  if(p.bu) pd.appendChild(h('span',{style:{marginRight:'8px'}}, p.bu));
  (p.runs||[]).forEach(r=>{ if(r.br){ pd.appendChild(h('br')); return; }
    pd.appendChild(h('span',{style:impRunStyle(r, fscale)}, r.s)); });
  if(!p.runs || !p.runs.length) pd.appendChild(h('br'));
  return pd;
}
function buildImportedSlide(deck, idx){
  const slide = deck.slides[idx] || {shapes:[]};
  const frame = h('div',{class:'nt-frame', style:{ width:deck.w+'px', height:deck.h+'px',
    fontFamily:FONT, background: slide.bg || '#FFFFFF' }});
  (slide.shapes||[]).forEach((sh,k)=>{
    const st = { position:'absolute', left:sh.x+'px', top:sh.y+'px', width:sh.w+'px', height:sh.h+'px', boxSizing:'border-box' };
    if(sh.fill){ if(String(sh.fill).indexOf('linear')===0) st.background = sh.fill; else st.backgroundColor = sh.fill; }
    if(sh.r) st.borderRadius = (sh.r>=9999 ? '50%' : sh.r+'px');
    if(sh.bd) st.border = sh.bd[0]+'px solid '+sh.bd[1];
    if(sh.rot) st.transform = 'rotate('+sh.rot+'deg)';
    let node;
    if(sh.t==='img'){ st.objectFit='contain'; node = h('img',{src:sh.src, style:st}); }
    else if(sh.t==='text' && sh.tx){
      const tx = sh.tx;
      Object.assign(st, { display:'flex', flexDirection:'column',
        justifyContent:({t:'flex-start',ctr:'center',b:'flex-end'}[tx.anchor]||'flex-start'),
        padding: tx.pads[0]+'px '+tx.pads[1]+'px '+tx.pads[2]+'px '+tx.pads[3]+'px', overflow:'visible' });
      node = h('div',{class:'nt-imp-tx', style:st});
      node.setAttribute('data-bind', 'slides.'+idx+'.shapes.'+k+'.tx.orig');
      node.setAttribute('data-defstyle', '{}');
      const joined = (tx.paras||[]).reduce((a,p)=> a + (p.runs||[]).reduce((b,r)=> b+(r.s||''), ''), '');
      if(tx.orig === joined){ (tx.paras||[]).forEach(p=> node.appendChild(impPara(p, tx.fscale))); }
      else { const r0 = ((tx.paras[0]||{}).runs||[])[0] || {};
        const pd = h('div',{style:impParaStyle(tx.paras[0]||{a:'left'})});
        pd.appendChild(h('span',{style:impRunStyle(r0, tx.fscale)}, tx.orig)); node.appendChild(pd); }
    }
    else { node = h('div',{style:st}); }
    node.setAttribute('data-shape', idx+'.'+k);
    node.classList.add('nt-shape');
    frame.appendChild(node);
  });
  return frame;
}
function deckFrames(d){ return (d.slides||[]).map((s,i)=>({ id:'s'+i, label:''+(i+1), w:d.w, h:d.h, build:()=>buildImportedSlide(d, i) })); }
function deckDefaults(){ const m = window.NT_IMPORTED || {};
  for(let a=0; a<arguments.length; a++){ for(const k in m){ if(k.indexOf(arguments[a])>=0) return JSON.parse(JSON.stringify(m[k])); } }
  return { w:1080, h:1080, slides:[{bg:'#FFFFFF', shapes:[]}] }; }
function isDeckKind(k){ return k==='imported' || (KINDS[k] && KINDS[k].deckKey); }
/* shrink any imported text box that overflows (font substitution) — like PowerPoint autofit */
function fitImported(frameEl){
  frameEl.querySelectorAll('.nt-imp-tx').forEach(t=>{
    let g=0; while(t.scrollHeight > t.clientHeight + 4 && g++ < 14){
      t.querySelectorAll('span').forEach(s=>{ const fs=parseFloat(getComputedStyle(s).fontSize)||12; s.style.fontSize=(fs*0.97).toFixed(2)+'px'; });
    }
  });
}

/* native, EDITABLE PowerPoint from a deck's shape model (real text boxes, not images) */
async function pptxNative(){
  status('Building editable PPTX…');
  const d = state.data[state.kind];
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name:'NTD', width:d.w/96, height:d.h/96 }); pptx.layout = 'NTD';
  const IN = v => +(Number(v)/96).toFixed(3);
  const hex = c => String(c||'').replace('#','').slice(0,6) || '000000';
  const firstHex = c => (String(c).match(/#([0-9a-fA-F]{6})/) || [null,'0047AB'])[1];
  (d.slides||[]).forEach(sl=>{
    const s = pptx.addSlide();
    if(sl.bg && String(sl.bg).indexOf('linear')!==0) s.background = { color: hex(sl.bg) };
    (sl.shapes||[]).forEach(sh=>{
      const box = { x:IN(sh.x), y:IN(sh.y), w:IN(sh.w), h:IN(sh.h) };
      if(sh.rot) box.rotate = sh.rot;
      if(sh.t==='img' && sh.src){ s.addImage(Object.assign({ data:sh.src }, box)); return; }
      const fillHex = sh.fill ? (String(sh.fill).indexOf('linear')===0 ? firstHex(sh.fill) : hex(sh.fill)) : null;
      if(sh.t==='text' && sh.tx){
        const paras = sh.tx.paras || [], runs = [];
        paras.forEach(p=>{ const rs = (p.runs||[]).filter(r=>!r.br && r.s!=null);
          rs.forEach((r,ri)=> runs.push({ text:r.s, options:{ fontFace:'Inter',
            fontSize: Math.max(6, Math.round((r.fs||16)*(sh.tx.fscale||1)*0.75)),
            bold:!!r.b, italic:!!r.i, underline:!!r.u, color: hex(r.col||'#0E1320'),
            align: ({left:'left',center:'center',right:'right',justify:'justify'}[p.a]||'left'),
            breakLine: ri===rs.length-1 } }));
          if(!rs.length) runs.push({ text:'', options:{ breakLine:true } });
        });
        const opt = Object.assign({}, box, { fontFace:'Inter', margin:0, autoFit:true, shrinkText:true,
          valign: ({t:'top',ctr:'middle',b:'bottom'}[sh.tx.anchor]||'top'),
          align: ({left:'left',center:'center',right:'right'}[(paras[0]||{}).a]||'left') });
        if(fillHex) opt.fill = { color: fillHex };
        if(sh.bd) opt.line = { color: hex(sh.bd[1]), width: Math.max(0.5, sh.bd[0]*0.75) };
        s.addText(runs.length ? runs : [{ text: sh.tx.orig||'' }], opt);
        return;
      }
      const ropt = Object.assign({}, box,
        { fill: fillHex ? { color:fillHex } : { type:'none' },
          line: sh.bd ? { color:hex(sh.bd[1]), width:Math.max(0.5, sh.bd[0]*0.75) } : { type:'none' } });
      s.addShape(sh.r ? pptx.ShapeType.roundRect : pptx.ShapeType.rect, ropt);
    });
  });
  if(window.__pptxTest){ window.__pptxB64 = await pptx.write({ outputType:'base64' }); return; }
  await pptx.writeFile({ fileName: fileBase()+'.pptx' });
}

/* ============================================================
   KIND REGISTRY
   ============================================================ */
const KINDS = {
  carousel: {
    name:'LinkedIn Carousel', sub:'approved deck · editable', icon:'layers', themes:['light'], deckKey:'carousel',
    defaults(){ return deckDefaults('fable', 'carousel'); },
    frames(d){ return deckFrames(d); },
    file:'newtuple-carousel'
  },
  post: {
    name:'Social Post', sub:'1080×1080 · single', icon:'square', themes:['dark','light'],
    defaults(){ return { variant:'quote',
      title:'We do not launch an agent until it can answer **five questions**.',
      attribution:'— Newtuple · On agent readiness',
      kicker:'Document intelligence', metric:'95%',
      body:'accuracy across **30–40k documents / month** in production.',
      cta:'Talk to us' }; },
    frames(d, theme){ return [{ id:'post', label:'Post', w:1080, h:1080, build:()=>buildPost(d, theme) }]; },
    file:'newtuple-post'
  },
  banner: {
    name:'Banner', sub:'1200×630 · LinkedIn / OG', icon:'banner', themes:['dark','light'],
    defaults(){ return {
      kicker:'Generative AI experts',
      title:'Build Your **Agentic** Enterprise.',
      subtitle:'We design, build & operate production-grade AI agents and applications — with governance, observability and measurable ROI.' }; },
    frames(d, theme){ return [{ id:'banner', label:'Banner', w:1200, h:630, build:()=>buildBanner(d, theme) }]; },
    file:'newtuple-banner'
  },
  onepager: {
    name:'One-Pager', sub:'A4 · capability sheet', icon:'doc', themes:['light'],
    defaults(){ return {
      eyebrow:'Capability Overview',
      title:'We get AI to production at **warp speed**.',
      intro:'Newtuple is a GenAI consultancy focused exclusively on production-grade AI — taking agents and apps past the proof-of-concept stage into deployment with SLAs, observability and continuous optimization.',
      features:[
        {title:'Build AI Agents', desc:'Design, build & operate enterprise AI agents — PMO, recruitment, finance and support — with governance and measurable ROI.'},
        {title:'Build AI Apps', desc:'Strategy, architecture & engineering for AI-first products. 0→1 productization, AI augmentation and managed GenAI pods.'},
        {title:'Accelerators', desc:'Dialogtuple multi-agent platform and Gaugetuple LLM evaluation give teams a ~70% head start.'},
        {title:'Industries', desc:'Financial services, retail, healthcare, aviation and agencies — real deployments at enterprise scale.'}
      ],
      metrics:[ {value:'95%', label:'Doc accuracy'}, {value:'10x', label:'Performance'}, {value:'4–6 wks', label:'To prototype'} ],
      ctaText:'Build Your Agentic Enterprise.', ctaUrl:'newtuple.com' }; },
    frames(d){ return [{ id:'op', label:'Page', w:794, h:1123, build:()=>buildOnePager(d) }]; },
    file:'newtuple-onepager'
  },
  proposal: {
    name:'Proposal', sub:'approved deck · editable', icon:'pages', themes:['light'], deckKey:'proposal',
    defaults(){ return deckDefaults('pension', 'proposal'); },
    _oldDefaults(){ return { pages:[
      { type:'cover', kicker:'Proposal', title:'Pension Contribution Processing **Automation**',
        subtitle:'Microsoft Power Automate + an AI agent & validation layer — a practical automation layer that cuts manual load across employer file intake, validation, historical comparison and PAS posting, without rebuilding the existing portal.',
        meta:'Prepared for Reflections Global · By Ratish Nair, CBO · 05 June 2026' },
      { type:'content', kicker:'Contents', title:'What this proposal covers',
        body:'A 12-week MVP to automate pension contribution processing across two operating flows.',
        items:[
          'Introduction — context, current state and engagement shape',
          'Objectives — outcomes across the 12-week MVP',
          'Proposed solution & flows — mailbox-led and portal-led',
          'Recommended & technical architecture',
          'Scope — what is in the MVP, and what sits outside',
          'Delivery plan, UAT and our delivery advantage',
          'Commercial model, assumptions, exclusions & sign-off' ] },
      { type:'section', kicker:'Section 01', number:'01', title:'Introduction' },
      { type:'content', kicker:'01 · Introduction', title:'Remove the manual load — without a big new platform',
        body:'Newtuple proposes a practical automation layer for pension contribution processing. Power Automate handles mailbox monitoring, attachments, notifications and routing; a controlled **AI agent and validation API** owns interpretation, comparison and auditability.',
        items:[
          'The client receives monthly contribution files from many employers — contributions, joiners, exits, retirements and membership changes',
          'Today the work is manual: reviewing emails, attachments, prior submissions, rules and employer comments, then uploading to the PAS',
          'The design keeps the existing employer portal intact and adds an API-accessible agent + validation service',
          'Prepared as a budgetary estimate — scope, licensing, rules and terms confirmed in discovery (±30% until then)' ] },
      { type:'section', kicker:'Section 02', number:'02', title:'Objectives' },
      { type:'content', kicker:'02 · Objectives', title:'Outcomes the 12-week MVP will deliver',
        items:[
          'Automate intake of employer files from designated Microsoft 365 mailboxes',
          'Capture attachments, email context and employer instructions in the submission record',
          'AI interpretation of employer email commentary for Flow 1 (committed scope)',
          'Retrieve previous-month files from Azure or AWS storage',
          'Validate files against configurable technical and business rules',
          'Compare current submissions with history and flag variances',
          'Return errors by email (mailbox) or to the portal (portal-led)',
          'Post validated records to the PAS API where available, with a complete audit trail end-to-end' ] },
      { type:'twocol', kicker:'Why now', title:'Today vs. after the MVP',
        leftTitle:'Today', leftBody:'Manual review of emails, attachments and commentary · cross-checking prior-month files by hand · errors caught late, sometimes after PAS upload · no central audit trail.',
        rightTitle:'After MVP', rightBody:'Mailbox + portal submissions through **one validation layer** · historical comparison and variance detection automated · errors returned to the right channel before PAS posting · full audit ledger across every decision.' },
      { type:'twocol', kicker:'03 · Proposed solution & flows', title:'Two flows, one validation layer',
        leftTitle:'Flow 1 — mailbox → validation → PAS API',
        leftBody:'For employers who submit by email. Mailbox › Power Automate › AI email agent › validation core › historical comparison › PAS API. Errors and status returned by email. Covers FR-001…FR-011, incl. **AI interpretation** of email commentary.',
        rightTitle:'Flow 2 — existing portal → validation → portal',
        rightBody:'For employers on the existing portal. Newtuple exposes an API the portal calls for validation; results returned synchronously or async. **No portal rebuild, no UX disruption.**' },
      { type:'content', kicker:'04 · Recommended architecture', title:'Orchestration, agent, validation and audit — separated',
        body:'Keeps Power Automate flows readable while business-critical logic sits in a controlled service layer (indicative, confirmed in discovery).',
        items:[
          'Orchestration — Microsoft Power Automate (Premium/Process licensing may be needed even with E5)',
          'Agent & API layer — RESTful web API to invoke the agent and validation, sync or async',
          'AI interpretation — agent processing of employer email commentary (Flow 1 only)',
          'Validation engine — configurable technical + business rules with comparison to prior submissions',
          'Storage & history — historical files retrieved from agreed cloud storage',
          'PAS integration — validated data posted to the PAS API, subject to access & authentication' ] },
      { type:'content', kicker:'04 · Technical architecture', title:'System view across M365, Azure and the PAS',
        body:'All cross-component access over HTTPS, with audit logging at every hop.',
        items:[
          'Integration layer — M365 mailbox monitored by Power Automate; triggers orchestrate intake, call APIs and notify employers',
          'System of record — FastAPI backend + PostgreSQL (submissions, employers, audit, errors, versions); React ops dashboard',
          'Storage & downstream — Azure Blob/SharePoint repository; upload to PAS via API or SFTP',
          'Controls — RBAC, HTTPS everywhere, full audit logging, managed secrets, Azure VM + Nginx hosting' ] },
      { type:'twocol', kicker:'05 · Scope', title:'What the 12-week MVP includes — and excludes',
        leftTitle:'In scope', leftBody:'Email processing & AI comment interpretation · file management & versioning · validation engine (format, mandatory, type, duplicate, amount, status, reconciliation, business rules) · error management & notifications · existing-portal API · PAS posting (subject to API readiness).',
        rightTitle:'Out of scope', rightBody:'Building/redesigning the portal · replacing the core PAS · third-party security audit or certification · historical migration beyond validation needs · guaranteed PAS automation before the API is confirmed · advanced analytics/dashboards (separate package).' },
      { type:'content', kicker:'06 · Delivery plan', title:'Indicative 12-week build',
        body:'A working end-to-end flow early, then validation depth, portal integration, PAS posting and audit hardening. Sequence may shift after discovery.',
        items:[
          'W1–W2 · Discovery, access & rule confirmation',
          'W2–W6 · Flow 1 — mailbox intake & AI interpretation',
          'W3–W8 · Validation engine & historical comparison',
          'W5–W8 · Flow 2 — existing portal API integration',
          'W7–W10 · PAS API posting & status tracking',
          'W9–W12 · UAT, hardening & handover',
          'Milestones — W2 discovery sign-off · W8 validation core stable · **W12 go-live**' ] },
      { type:'twocol', kicker:'07–08 · UAT & advantage', title:'Rolling UAT, practical delivery',
        leftTitle:'UAT in short cycles',
        leftBody:'Cycle 1 (end W5) — intake, attachment capture, AI interpretation. Cycle 2 (end W8) — validation rules, history, error reporting, portal response. Cycle 3 (W10–12) — PAS posting, retries, audit, reports, handover.',
        rightTitle:'Our delivery advantage',
        rightBody:'Clear split of orchestration vs. validation logic · agent interpretation only where it matters · one reusable validation API for both flows · **audit-first** processing · senior practitioners, weekly demos, code in your environment from day one.' },
      { type:'metrics', kicker:'09 · Commercial model', title:'Two budgetary options (±30%)',
        body:'Estimates based on current requirement notes; confirmed in discovery. Power Automate Premium/Process licensing may be required even with Microsoft E5.',
        metrics:[
          {value:'USD 36,000', label:'Option A — 3-month focused build & handover (USD 12,000 / mo · 2-week bug-fix window)'},
          {value:'USD 5,000/mo', label:'Option B — 6-month build, manage & operate (paid in advance · IST business hours)'},
          {value:'3 cycles', label:'Rolling UAT with defect triage against representative employer files'},
          {value:'Handover', label:'Architecture notes, runbook, rule guide + ops walkthrough'} ] },
      { type:'twocol', kicker:'10 · Assumptions & exclusions', title:'What the estimate assumes — and excludes',
        leftTitle:'Assumptions', leftBody:'Client provides representative + prior-month files, rules and expected outputs · timely access to M365, Power Automate, storage, PAS API docs and test envs · portal team exposes/consumes the validation API · PAS posting subject to confirmed endpoint, auth, schema, rate limits · business users nominated for UAT.',
        rightTitle:'Exclusions & open items', rightBody:'Portal rebuild/UX · large-scale migration · security certification/pen-test · long-term managed service beyond the chosen option. Open before signature: client legal name & signatory, PAS API contract, Power Automate licensing, final rule catalogue, storage access, Option A vs. B.' },
      { type:'cta', kicker:'11 · Signature of approval', title:'Ready to start when you are.',
        body:'On signature, Newtuple schedules a discovery kickoff within 5 business days, shares the delivery team and weekly cadence, and confirms access across M365, Power Automate, cloud storage and the PAS API. Finalized once client legal name, signatory, selected option and quote validity are confirmed.',
        meta:'For Newtuple Technologies — Dhiraj Nambiar, Founder', ctaUrl:'newtuple.com' }
    ] }; },
    frames(d){ return deckFrames(d); },
    file:'newtuple-proposal'
  },
  imported: {
    name:'Imported deck', sub:'editable · from PPTX', icon:'pages', themes:['light'],
    defaults(){ const m = window.NT_IMPORTED || {}; const k = Object.keys(m)[0];
      const d = k ? m[k] : {w:794, h:1123, slides:[]}; return JSON.parse(JSON.stringify(d)); },
    frames(d){ return (d.slides||[]).map((s,i)=>({ id:'s'+i, label:''+(i+1), w:d.w, h:d.h, build:()=>buildImportedSlide(d, i) })); },
    file:'imported-deck'
  }
};

/* ============================================================
   STATE
   ============================================================ */
const state = { kind:'carousel', theme:'dark', active:0, data:{}, overrides:{}, markup:{}, decor:{}, markupOn:false, safeArea:false };
for(const k in KINDS){ state.data[k] = KINDS[k].defaults(); state.overrides[k] = {}; state.markup[k] = []; state.decor[k] = []; }

const $ = sel => document.querySelector(sel);

/* ---------------- persistence (localStorage) ---------------- */
const LS_KEY = 'nt-studio-v1';
function persist(){
  try { localStorage.setItem(LS_KEY, JSON.stringify({ data:state.data, overrides:state.overrides, markup:state.markup, decor:state.decor })); } catch(e){}
}
function loadPersisted(){
  try {
    const raw = localStorage.getItem(LS_KEY); if(!raw) return;
    const s = JSON.parse(raw);
    for(const k in KINDS){
      if(s.data && s.data[k]){
        // deck kinds must hold deck-shaped data (slides[].shapes); ignore stale old-format saves
        const ok = !isDeckKind(k) || (s.data[k] && Array.isArray(s.data[k].slides) &&
          (!s.data[k].slides.length || Array.isArray(s.data[k].slides[0].shapes)));
        if(ok) state.data[k] = s.data[k];
      }
      if(s.overrides && s.overrides[k]) state.overrides[k] = s.overrides[k];
      if(s.markup && s.markup[k]) state.markup[k] = s.markup[k];
      if(s.decor && s.decor[k]) state.decor[k] = s.decor[k];
    }
  } catch(e){}
}

/* ---------------- undo / redo ---------------- */
const _undo = [], _redo = [];
function snapshot(){ return JSON.stringify({ k:state.kind, data:state.data[state.kind], ov:state.overrides[state.kind], mk:state.markup[state.kind], dc:state.decor[state.kind] }); }
function pushUndo(){ _undo.push(snapshot()); if(_undo.length>60) _undo.shift(); _redo.length=0; persist(); }
function applySnap(s){
  const o = JSON.parse(s); state.kind = o.k;
  state.data[o.k] = o.data; state.overrides[o.k] = o.ov; state.markup[o.k] = o.mk; state.decor[o.k] = o.dc || [];
}
function undo(){ if(!_undo.length) return; _redo.push(snapshot()); applySnap(_undo.pop()); editorDeselect(); renderAll(); persist(); }
function redo(){ if(!_redo.length) return; _undo.push(snapshot()); applySnap(_redo.pop()); editorDeselect(); renderAll(); persist(); }

/* ============================================================
   RENDER: left rail, theme, preview, form
   ============================================================ */
function renderKindList(){
  const host = $('#kind-list'); host.innerHTML='';
  for(const key in KINDS){
    const k = KINDS[key];
    host.appendChild(h('button',{class:'kind-item'+(key===state.kind?' active':''),
      onClick:()=>{ state.kind=key; state.active=0;
        if(!k.themes.includes(state.theme)) state.theme=k.themes[0];
        renderAll(); }},
      [ h('span',{class:'ki-ico', html:ICON[k.icon]}),
        h('span',{class:'ki-text'},[ h('span',{class:'ki-name'},k.name), h('span',{class:'ki-sub'},k.sub) ]) ]));
  }
}
function renderTheme(){
  const host = $('#theme-toggle'); host.innerHTML='';
  const kind = KINDS[state.kind];
  ['light','dark'].forEach(th=>{
    const enabled = kind.themes.includes(th);
    host.appendChild(h('button',{class:(th===state.theme?'active':''),
      disabled: enabled?null:'', style: enabled?{}:{opacity:0.35, cursor:'not-allowed'},
      onClick:()=>{ if(!enabled) return; state.theme=th; renderPreview(); }},
      th==='light'?'Light':'Agentic dark'));
  });
}

let _frames = [], _tabsKey = '';
function renderPreview(){
  const kind = KINDS[state.kind];
  _frames = kind.frames(state.data[state.kind], state.theme);
  if(state.active>=_frames.length) state.active=0;

  /* thumbnail navigator — rebuilt only when the deck shape changes, not on every edit */
  const key = state.kind+':'+state.theme+':'+_frames.length;
  if(key!==_tabsKey){ _tabsKey=key; buildThumbStrip(); }
  updateActiveThumb();
  /* mount active frame */
  const fr = _frames[state.active];
  const scaler = $('#stage-scaler'); scaler.innerHTML='';
  const el = fr.build();
  scaler.appendChild(el);
  _frameEl = el;
  $('#frame-dims').textContent = `${fr.w} × ${fr.h}`;
  applyOverrides(el);
  appendDecor(el, state.kind, state.active, true);
  if(isDeckKind(state.kind)) requestAnimationFrame(()=>fitImported(el));
  if(state.safeArea) el.appendChild(safeAreaOverlay(fr));
  editorAttach(el);
  renderMarkup(el);
  requestAnimationFrame(()=>{ fitStage(); editorReselect(); });
}
function buildThumbStrip(){
  const strip = $('#thumb-strip'); if(!strip) return; strip.innerHTML='';
  if(_frames.length<=1){ strip.style.display='none'; return; }
  strip.style.display='flex';
  _frames.forEach((fr,i)=>{
    const W=72, sc=W/fr.w;
    const tile = h('div',{class:'thumb', 'data-i':i, title:'Slide '+(i+1),
      onClick:()=>{ state.active=i; editorDeselect(); renderPreview(); }});
    const box = h('div',{class:'thumb-box', style:{width:W+'px', height:Math.round(fr.h*sc)+'px'}});
    let el; try { el = fr.build(); } catch(e){ el = h('div'); }
    box.appendChild(h('div',{style:{transformOrigin:'top left', transform:'scale('+sc+')', width:fr.w+'px', height:fr.h+'px'}}, [el]));
    tile.appendChild(box); tile.appendChild(h('span',{class:'thumb-n'}, ''+(i+1)));
    strip.appendChild(tile);
  });
}
function updateActiveThumb(){
  const strip = $('#thumb-strip'); if(!strip) return;
  strip.querySelectorAll('.thumb').forEach(t=>{ const on = (+t.getAttribute('data-i'))===state.active;
    t.classList.toggle('active', on); if(on) t.scrollIntoView({block:'nearest', inline:'nearest'}); });
}
let _scale = 1, _frameEl = null, _userZoom = null;
function fitStage(){
  const fr = _frames[state.active]; if(!fr) return;
  const stage = $('#stage');
  const availW = stage.clientWidth - 96, availH = stage.clientHeight - 96;
  const fit = Math.min(availW/fr.w, availH/fr.h, 1);
  _scale = _userZoom != null ? _userZoom : fit;
  $('#stage-scaler').style.transform = `scale(${_scale})`;
  const dims = $('#frame-dims'); if(dims) dims.textContent = `${fr.w} × ${fr.h} · ${Math.round(_scale*100)}%`;
  positionChrome(); positionMulti();
}
function setZoom(mult){ _userZoom = Math.max(0.1, Math.min(4, (_scale||1)*mult)); fitStage(); }

/* ---------------- FORM ---------------- */
function field(label, value, oninput, opts){
  opts = opts||{};
  const input = opts.area
    ? h('textarea',{rows:opts.rows||2, oninput:e=>oninput(e.target.value)}, value||'')
    : h('input',{type:'text', value:value||'', oninput:e=>oninput(e.target.value)});
  return h('div',{class:'field'},
    [ h('label',{}, label), input, opts.hint?h('div',{class:'hint'},opts.hint):null ]);
}
function selectField(label, value, options, oninput){
  const sel = h('select',{onchange:e=>oninput(e.target.value)},
    options.map(o=>h('option',{value:o.v, selected: o.v===value?'':null}, o.t)));
  return h('div',{class:'field'},[ h('label',{}, label), sel ]);
}
function iconBtn(glyph, title, onclick, disabled){
  return h('button',{class:'icon-btn', title, disabled:disabled?'':null, onClick:onclick}, glyph);
}

function renderDeckBody(host, d){
  host.appendChild(h('div',{class:'rail-hint', style:{lineHeight:'1.6'}},
    'Click any element to select it — drag to move, corner to resize, toolbar to recolor / restyle, double-click text to edit. Arrow keys nudge · ⌘D duplicate · ⌫ delete.'));
  host.appendChild(h('div',{class:'rail-section-title nt-label', style:{marginTop:'8px'}}, 'Add to this slide'));
  host.appendChild(h('div',{style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}},
    [ h('button',{class:'add-slide-btn', onClick:()=>addShape('text')}, '+ Text'),
      h('button',{class:'add-slide-btn', onClick:()=>addShape('rect')}, '+ Rect'),
      h('button',{class:'add-slide-btn', onClick:()=>addImageShape()}, '+ Image') ]));
  host.appendChild(h('div',{class:'rail-section-title nt-label', style:{marginTop:'12px'}}, 'Slides'));
  host.appendChild(h('div',{style:{display:'flex', gap:'8px', flexWrap:'wrap'}},
    [ h('button',{class:'add-slide-btn', onClick:()=>{ pushUndo(); d.slides.splice(state.active+1,0, JSON.parse(JSON.stringify(d.slides[state.active]))); state.active++; editorDeselect(); renderAll(); }}, '⧉ Duplicate slide'),
      h('button',{class:'add-slide-btn', onClick:()=>{ if(d.slides.length<=1) return; pushUndo(); d.slides.splice(state.active,1); if(state.active>=d.slides.length) state.active=d.slides.length-1; editorDeselect(); renderAll(); }}, '✕ Delete slide'),
      h('button',{class:'add-slide-btn', onClick:()=>{ pushUndo(); d.slides.splice(state.active+1,0,{bg:'#FFFFFF', shapes:[]}); state.active++; editorDeselect(); renderAll(); }}, '+ Blank slide') ]));
}
function renderForm(){
  const host = $('#form-host'); host.innerHTML='';
  const d = state.data[state.kind];

  if(isDeckKind(state.kind)){ renderDeckBody(host, d); return; }
  if(state.kind==='carousel'){
    d.slides.forEach((s,i)=>{
      const card = h('div',{class:'slide-card'});
      card.appendChild(h('div',{class:'sc-head'},
        [ h('span',{class:'sc-title'}, `Slide ${i+1}`),
          h('div',{class:'sc-actions'},
            [ iconBtn('↑','Move up',()=>{ if(i>0){ [d.slides[i-1],d.slides[i]]=[d.slides[i],d.slides[i-1]]; state.active=i-1; renderAll(); } }, i===0),
              iconBtn('↓','Move down',()=>{ if(i<d.slides.length-1){ [d.slides[i+1],d.slides[i]]=[d.slides[i],d.slides[i+1]]; state.active=i+1; renderAll(); } }, i===d.slides.length-1),
              iconBtn('⧉','Duplicate',()=>{ d.slides.splice(i+1,0, JSON.parse(JSON.stringify(d.slides[i]))); state.active=i+1; renderAll(); }),
              iconBtn('✕','Delete',()=>{ d.slides.splice(i,1); renderAll(); }, d.slides.length<=1) ]) ]));
      card.appendChild(selectField('Type', s.type,
        [{v:'title',t:'Title'},{v:'statement',t:'Statement'},{v:'pattern',t:'Numbered pattern'},{v:'list',t:'List'},{v:'closing',t:'Closing'}],
        v=>{ s.type=v; if(v==='pattern'&&!s.number) s.number='01'; if(v==='list'&&!s.items) s.items=['First point','Second point']; renderAll(); }));
      card.appendChild(field('Kicker (eyebrow)', s.kicker, v=>{ s.kicker=v; live(i); }, {hint:'UPPERCASE label'}));
      if(s.type==='pattern') card.appendChild(field('Number', s.number, v=>{ s.number=v; live(i); }));
      card.appendChild(field('Headline', s.title, v=>{ s.title=v; live(i); }, {area:true, rows:2, hint:'Wrap a phrase in **stars** for cobalt/cyan emphasis'}));
      if(s.type==='list'){
        (s.items||[]).forEach((it,j)=>{
          card.appendChild(h('div',{style:{display:'flex',gap:'6px',alignItems:'flex-end'}},
            [ h('div',{style:{flex:'1'}}, field(`Item ${j+1}`, it, v=>{ s.items[j]=v; live(i); })),
              iconBtn('✕','Remove',()=>{ s.items.splice(j,1); renderForm(); live(i); }, s.items.length<=1) ]));
        });
        card.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{ s.items.push('New point'); renderForm(); live(i); }}, '+ Add item'));
      } else {
        card.appendChild(field('Body', s.body, v=>{ s.body=v; live(i); }, {area:true, rows:3}));
      }
      if(s.type==='closing') card.appendChild(field('Footer cue', s.footLabel, v=>{ s.footLabel=v; live(i); }));
      host.appendChild(card);
    });
    host.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{
      d.slides.push({type:'statement', kicker:'', title:'New statement', body:''}); state.active=d.slides.length-1; renderAll(); }},
      '+ Add slide'));
  }
  else if(state.kind==='post'){
    host.appendChild(selectField('Variant', d.variant,
      [{v:'quote',t:'Quote'},{v:'stat',t:'Stat / metric'},{v:'announcement',t:'Announcement'}],
      v=>{ d.variant=v; renderAll(); }));
    if(d.variant==='quote'){
      host.appendChild(field('Quote', d.title, v=>{d.title=v;live();},{area:true,rows:3, hint:'**stars** = emphasis'}));
      host.appendChild(field('Attribution', d.attribution, v=>{d.attribution=v;live();}));
    } else if(d.variant==='stat'){
      host.appendChild(field('Kicker', d.kicker, v=>{d.kicker=v;live();}));
      host.appendChild(field('Metric', d.metric, v=>{d.metric=v;live();},{hint:'e.g. 95% · 10x · $5M+'}));
      host.appendChild(field('Caption', d.title, v=>{d.title=v;live();}));
      host.appendChild(field('Body', d.body, v=>{d.body=v;live();},{area:true,rows:2}));
    } else {
      host.appendChild(field('Kicker', d.kicker, v=>{d.kicker=v;live();}));
      host.appendChild(field('Headline', d.title, v=>{d.title=v;live();},{area:true,rows:2,hint:'**stars** = emphasis'}));
      host.appendChild(field('Body', d.body, v=>{d.body=v;live();},{area:true,rows:3}));
      host.appendChild(field('CTA pill', d.cta, v=>{d.cta=v;live();}));
    }
  }
  else if(state.kind==='banner'){
    host.appendChild(field('Kicker', d.kicker, v=>{d.kicker=v;live();}));
    host.appendChild(field('Headline', d.title, v=>{d.title=v;live();},{area:true,rows:2,hint:'**stars** = emphasis'}));
    host.appendChild(field('Subtitle', d.subtitle, v=>{d.subtitle=v;live();},{area:true,rows:3}));
  }
  else if(state.kind==='onepager'){
    host.appendChild(field('Eyebrow', d.eyebrow, v=>{d.eyebrow=v;live();}));
    host.appendChild(field('Title', d.title, v=>{d.title=v;live();},{area:true,rows:2,hint:'**stars** = cobalt emphasis'}));
    host.appendChild(field('Intro', d.intro, v=>{d.intro=v;live();},{area:true,rows:4}));
    host.appendChild(h('div',{class:'rail-section-title nt-label',style:{marginTop:'8px'}},'Features'));
    d.features.forEach((f,i)=>{
      host.appendChild(h('div',{class:'slide-card'},
        [ h('div',{class:'sc-head'},[ h('span',{class:'sc-title'},`Feature ${i+1}`),
            iconBtn('✕','Remove',()=>{ d.features.splice(i,1); renderAll(); }, d.features.length<=1) ]),
          field('Title', f.title, v=>{f.title=v;live();}),
          field('Description', f.desc, v=>{f.desc=v;live();},{area:true,rows:2}) ]));
    });
    host.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{ d.features.push({title:'New feature',desc:''}); renderAll(); }},'+ Add feature'));
    host.appendChild(h('div',{class:'rail-section-title nt-label',style:{marginTop:'8px'}},'Metrics'));
    d.metrics.forEach((m,i)=>{
      host.appendChild(h('div',{style:{display:'flex',gap:'6px',alignItems:'flex-end'}},
        [ h('div',{style:{flex:'1'}}, field(`Value ${i+1}`, m.value, v=>{m.value=v;live();})),
          h('div',{style:{flex:'1.4'}}, field('Label', m.label, v=>{m.label=v;live();})),
          iconBtn('✕','Remove',()=>{ d.metrics.splice(i,1); renderAll(); }, d.metrics.length<=1) ]));
    });
    host.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{ d.metrics.push({value:'',label:''}); renderAll(); }},'+ Add metric'));
    host.appendChild(field('CTA text', d.ctaText, v=>{d.ctaText=v;live();}));
    host.appendChild(field('CTA url', d.ctaUrl, v=>{d.ctaUrl=v;live();}));
  }
  else if(state.kind==='proposal'){
    d.pages.forEach((p,i)=>{
      const card = h('div',{class:'slide-card'});
      card.appendChild(h('div',{class:'sc-head'},
        [ h('span',{class:'sc-title'}, `Page ${i+1}`),
          h('div',{class:'sc-actions'},
            [ iconBtn('↑','Move up',()=>{ if(i>0){ [d.pages[i-1],d.pages[i]]=[d.pages[i],d.pages[i-1]]; state.active=i-1; renderAll(); } }, i===0),
              iconBtn('↓','Move down',()=>{ if(i<d.pages.length-1){ [d.pages[i+1],d.pages[i]]=[d.pages[i],d.pages[i+1]]; state.active=i+1; renderAll(); } }, i===d.pages.length-1),
              iconBtn('⧉','Duplicate',()=>{ d.pages.splice(i+1,0, JSON.parse(JSON.stringify(d.pages[i]))); state.active=i+1; renderAll(); }),
              iconBtn('✕','Delete',()=>{ d.pages.splice(i,1); renderAll(); }, d.pages.length<=1) ]) ]));
      card.appendChild(selectField('Type', p.type,
        [{v:'cover',t:'Cover'},{v:'section',t:'Section divider'},{v:'content',t:'Content + bullets'},{v:'twocol',t:'Two columns'},{v:'metrics',t:'Metrics'},{v:'cta',t:'Closing / CTA'}],
        v=>{ p.type=v; seedProposalDefaults(p,v); renderAll(); }));
      card.appendChild(field('Header label', p.kicker, v=>{p.kicker=v;live(i);}));
      if(p.type==='section') card.appendChild(field('Number', p.number, v=>{p.number=v;live(i);}));
      if(p.type!=='twocol') card.appendChild(field('Title', p.title, v=>{p.title=v;live(i);},{area:true,rows:2,hint:'**stars** = cobalt emphasis'}));
      if(p.type==='cover') card.appendChild(field('Subtitle', p.subtitle, v=>{p.subtitle=v;live(i);},{area:true,rows:3}));
      if(['content','metrics','cta'].includes(p.type)) card.appendChild(field('Body', p.body, v=>{p.body=v;live(i);},{area:true,rows:3}));
      if(p.type==='cover') card.appendChild(field('Meta line', p.meta, v=>{p.meta=v;live(i);}));
      if(p.type==='content'){
        (p.items||[]).forEach((it,j)=> card.appendChild(h('div',{style:{display:'flex',gap:'6px',alignItems:'flex-end'}},
          [ h('div',{style:{flex:'1'}}, field(`Bullet ${j+1}`, it, v=>{p.items[j]=v;live(i);})),
            iconBtn('✕','Remove',()=>{ p.items.splice(j,1); renderForm(); live(i); }, (p.items||[]).length<=1) ])));
        card.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{ (p.items=p.items||[]).push('New point'); renderForm(); live(i); }}, '+ Add bullet'));
      }
      if(p.type==='twocol'){
        card.appendChild(field('Title', p.title, v=>{p.title=v;live(i);}));
        card.appendChild(field('Left heading', p.leftTitle, v=>{p.leftTitle=v;live(i);}));
        card.appendChild(field('Left body', p.leftBody, v=>{p.leftBody=v;live(i);},{area:true,rows:3}));
        card.appendChild(field('Right heading', p.rightTitle, v=>{p.rightTitle=v;live(i);}));
        card.appendChild(field('Right body', p.rightBody, v=>{p.rightBody=v;live(i);},{area:true,rows:3}));
      }
      if(p.type==='metrics'){
        (p.metrics||[]).forEach((m,j)=> card.appendChild(h('div',{style:{display:'flex',gap:'6px',alignItems:'flex-end'}},
          [ h('div',{style:{flex:'1'}}, field(`Value ${j+1}`, m.value, v=>{m.value=v;live(i);})),
            h('div',{style:{flex:'1.6'}}, field('Label', m.label, v=>{m.label=v;live(i);})),
            iconBtn('✕','Remove',()=>{ p.metrics.splice(j,1); renderForm(); live(i); }, (p.metrics||[]).length<=1) ])));
        card.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{ (p.metrics=p.metrics||[]).push({value:'',label:''}); renderForm(); live(i); }}, '+ Add metric'));
      }
      if(p.type==='cta'){ card.appendChild(field('CTA line', p.meta, v=>{p.meta=v;live(i);})); card.appendChild(field('CTA url', p.ctaUrl, v=>{p.ctaUrl=v;live(i);})); }
      host.appendChild(card);
    });
    host.appendChild(h('button',{class:'add-slide-btn', onClick:()=>{
      d.pages.push({type:'content', kicker:'', title:'New page', body:'', items:['Point']}); state.active=d.pages.length-1; renderAll(); }},
      '+ Add page'));
  }
  else if(state.kind==='imported'){
    const d = state.data[state.kind];
    host.appendChild(h('div',{class:'rail-hint', style:{lineHeight:'1.6'}},
      'Click any element to select it — drag to move, corner to resize, toolbar to recolor / restyle, double-click text to edit. Arrow keys nudge · ⌘D duplicate · ⌫ delete.'));
    host.appendChild(h('div',{class:'rail-section-title nt-label', style:{marginTop:'8px'}}, 'Add to this slide'));
    host.appendChild(h('div',{style:{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}},
      [ h('button',{class:'add-slide-btn', onClick:()=>addShape('text')}, '+ Text box'),
        h('button',{class:'add-slide-btn', onClick:()=>addShape('rect')}, '+ Rectangle') ]));
    host.appendChild(h('div',{class:'rail-section-title nt-label', style:{marginTop:'12px'}}, 'Slides'));
    host.appendChild(h('div',{style:{display:'flex', gap:'8px', flexWrap:'wrap'}},
      [ h('button',{class:'add-slide-btn', onClick:()=>{ pushUndo(); d.slides.splice(state.active+1,0, JSON.parse(JSON.stringify(d.slides[state.active]))); state.active++; editorDeselect(); renderAll(); }}, '⧉ Duplicate slide'),
        h('button',{class:'add-slide-btn', onClick:()=>{ if(d.slides.length<=1) return; pushUndo(); d.slides.splice(state.active,1); if(state.active>=d.slides.length) state.active=d.slides.length-1; editorDeselect(); renderAll(); }}, '✕ Delete slide'),
        h('button',{class:'add-slide-btn', onClick:()=>{ pushUndo(); d.slides.splice(state.active+1,0,{bg:'#FFFFFF', shapes:[]}); state.active++; editorDeselect(); renderAll(); }}, '+ Blank slide') ]));
  }
}
function seedProposalDefaults(p, v){
  if(v==='section' && !p.number) p.number='01';
  if(v==='content' && !p.items) p.items=['First point','Second point'];
  if(v==='metrics' && !p.metrics) p.metrics=[{value:'95%', label:'Describe the metric'}];
  if(v==='twocol'){ p.leftTitle=p.leftTitle||'Problem'; p.leftBody=p.leftBody||'…'; p.rightTitle=p.rightTitle||'Our approach'; p.rightBody=p.rightBody||'…'; }
  if(v==='cta'){ p.meta=p.meta||'Talk to the Newtuple team'; p.ctaUrl=p.ctaUrl||'newtuple.com'; }
  if(!p.title) p.title='Title';
}
/* live preview without rebuilding form (keeps input focus) */
function live(frameIdx){ if(frameIdx!=null) state.active=frameIdx; renderPreview(); persist(); }

function renderAll(){ _tabsKey=''; _userZoom=null; renderKindList(); renderTheme(); renderElementsPanel(); renderForm(); renderPreview(); renderExportButtons(); persist(); }

/* ============================================================
   EXPORT
   ============================================================ */
const EXPORTS = {
  carousel:['pptx','pdf','png','html'],
  post:['png','pdf','html'],
  banner:['png','pdf','html'],
  onepager:['pdf','png','docx','html'],
  proposal:['pptx','pdf','png','html'],
  imported:['pptx','pdf','png','html']
};
const EXP_LABEL = { png:'PNG', pdf:'PDF', pptx:'PPTX', docx:'DOCX', html:'HTML' };

function renderExportButtons(){
  const host = $('#export-buttons'); host.innerHTML='';
  const list = EXPORTS[state.kind];
  list.forEach((fmt,i)=>{
    host.appendChild(h('button',{class:'exp-btn'+(i===0?' primary':''), 'data-fmt':fmt,
      onClick:e=>runExport(fmt, e.currentTarget)},
      [ h('span',{class:'ei', html:ICON.download}),
        h('span',{}, EXP_LABEL[fmt] + (fmt==='png' && _frames.length>1 ? ' (zip)' : '')) ]));
  });
}

function status(msg){ $('#export-status').textContent = msg||''; }
function toast(msg, err){
  const t=$('#toast'); t.textContent=msg; t.className='toast show'+(err?' err':'');
  clearTimeout(toast._t); toast._t=setTimeout(()=>t.className='toast',2600);
}

/* render every frame at true px into an offscreen host and capture to canvas */
async function captureFrames(scale){
  await document.fonts.ready;
  const host = h('div',{style:{position:'fixed', left:'-100000px', top:'0', zIndex:'-1'}});
  document.body.appendChild(host);
  const out = [];
  const ov = state.overrides[state.kind] || {};
  try {
    for(let i=0;i<_frames.length;i++){
      const f = _frames[i];
      const el = f.build();
      el.style.boxShadow = 'none';
      applyOverridesTo(el, ov);
      appendDecor(el, state.kind, i, false);
      host.appendChild(el);
      const canvas = await html2canvas(el, {scale: scale||2, backgroundColor:null, useCORS:true, logging:false, width:f.w, height:f.h});
      out.push({canvas, w:f.w, h:f.h, label:f.label});
      host.removeChild(el);
    }
  } finally { document.body.removeChild(host); }
  return out;
}
const canvasBlob = c => new Promise(res=>c.toBlob(res,'image/png'));

async function runExport(fmt, btn){
  const orig = btn.innerHTML; btn.disabled=true;
  btn.innerHTML = '<span class="ei">'+ICON.download+'</span><span>…</span>';
  try {
    await EXPORTERS[fmt]();
    toast(`Exported ${EXP_LABEL[fmt]}`);
  } catch(err){
    console.error(err); toast('Export failed: '+(err.message||err), true);
  } finally { btn.disabled=false; btn.innerHTML=orig; status(''); }
}

const fileBase = ()=>KINDS[state.kind].file;

const EXPORTERS = {
  async png(){
    status('Rendering…');
    const caps = await captureFrames(2);
    if(caps.length===1){
      const blob = await canvasBlob(caps[0].canvas);
      saveAs(blob, fileBase()+'.png');
    } else {
      status('Zipping…');
      const zip = new JSZip();
      for(let i=0;i<caps.length;i++){
        const blob = await canvasBlob(caps[i].canvas);
        zip.file(`${fileBase()}-${String(i+1).padStart(2,'0')}.png`, blob);
      }
      const out = await zip.generateAsync({type:'blob'});
      saveAs(out, fileBase()+'-png.zip');
    }
  },
  async pdf(){
    status('Rendering…');
    const caps = await captureFrames(2);
    const { jsPDF } = window.jspdf;
    const first = caps[0];
    const pdf = new jsPDF({unit:'px', format:[first.w, first.h], orientation: first.w>first.h?'l':'p'});
    caps.forEach((c,i)=>{
      if(i>0) pdf.addPage([c.w, c.h], c.w>c.h?'l':'p');
      pdf.addImage(c.canvas.toDataURL('image/png'), 'PNG', 0, 0, c.w, c.h);
    });
    pdf.save(fileBase()+'.pdf');
  },
  async pptx(){
    if(isDeckKind(state.kind)) return pptxNative();        // real, editable text boxes
    status('Rendering…');
    const caps = await captureFrames(2);
    const pptx = new PptxGenJS();
    const wIn = caps[0].w/96, hIn = caps[0].h/96;
    pptx.defineLayout({name:'NT', width:wIn, height:hIn});
    pptx.layout = 'NT';
    caps.forEach(c=>{
      const slide = pptx.addSlide();
      slide.addImage({data:c.canvas.toDataURL('image/png'), x:0, y:0, w:wIn, h:hIn});
    });
    await pptx.writeFile({fileName:fileBase()+'.pptx'});
  },
  async html(){
    status('Building…');
    const ov = state.overrides[state.kind] || {};
    const wrap = _frames.map((f,i)=>{ const el=f.build(); el.style.boxShadow='var(--sh)';
      applyOverridesTo(el, ov); appendDecor(el, state.kind, i, false);
      return el.outerHTML; }).join('\n');
    const doc = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>${KINDS[state.kind].name} — Newtuple</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
<style>:root{--sh:0 18px 48px rgba(14,19,32,0.12)}*{box-sizing:border-box}body{margin:0;background:#EEF0F4;font-family:'Inter',sans-serif;display:flex;flex-direction:column;align-items:center;gap:28px;padding:40px}.nt-frame{position:relative;overflow:hidden}img{display:block}</style>
</head><body>\n${wrap}\n</body></html>`;
    saveAs(new Blob([doc],{type:'text/html'}), fileBase()+'.html');
  },
  async docx(){
    status('Building…');
    const D = window.docx;
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } = D;
    const COB = '0047AB', INK='0E1320', BODY='4B5563', MUT='6B7686';
    const kids = [];
    const lbl = t => new Paragraph({ spacing:{after:80}, children:[ new TextRun({text:(t||'').toUpperCase(), bold:true, color:MUT, size:18, characterSpacing:30}) ] });
    const head = (t,sz)=> new Paragraph({ spacing:{after:140}, children: emRuns(t, INK, sz||40, COB) });
    const para = t => new Paragraph({ spacing:{after:140}, children: emRuns(t, BODY, 22, COB) });
    /* emphasis-aware runs */
    function emRuns(s, color, size, em){
      const parts = (s||'').split(/(\*\*.+?\*\*)/g).filter(Boolean);
      return parts.map(p=>{ const m=p.match(/^\*\*(.+?)\*\*$/);
        return new TextRun({ text:m?m[1]:p, color:m?em:color, bold:!!m, size }); });
    }
    const d = state.data[state.kind];
    /* brand header */
    kids.push(new Paragraph({ spacing:{after:200}, children:[ new TextRun({text:'NEWTUPLE', bold:true, color:COB, size:28, characterSpacing:40}) ] }));

    if(state.kind==='carousel'){
      d.slides.forEach((s,i)=>{
        if(s.kicker) kids.push(lbl(s.kicker));
        kids.push(head(s.title, 36));
        if(s.type==='list'){ (s.items||[]).forEach(it=> kids.push(new Paragraph({ bullet:{level:0}, spacing:{after:60}, children: emRuns(it, BODY, 22, COB) }))); }
        else if(s.body) kids.push(para(s.body));
        if(i<d.slides.length-1) kids.push(new Paragraph({ border:{bottom:{style:BorderStyle.SINGLE, size:6, color:'E2E6EC', space:8}}, spacing:{after:200} }));
      });
    } else if(state.kind==='onepager'){
      if(d.eyebrow) kids.push(lbl(d.eyebrow));
      kids.push(head(d.title, 44));
      if(d.intro) kids.push(para(d.intro));
      d.features.forEach(f=>{ kids.push(new Paragraph({ spacing:{after:40}, children:[ new TextRun({text:f.title, bold:true, color:INK, size:24}) ] })); kids.push(para(f.desc)); });
      if(d.metrics.length){ kids.push(new Paragraph({ spacing:{before:120, after:40}, children: d.metrics.map(m=> new TextRun({ text:`   ${m.value}  ${m.label}    `, color:COB, bold:true, size:24 })) })); }
      kids.push(new Paragraph({ spacing:{before:160}, children:[ new TextRun({text:plain(d.ctaText)+'   ', color:INK, size:24}), new TextRun({text:d.ctaUrl, color:COB, bold:true, size:24}) ] }));
    } else if(state.kind==='proposal'){
      const subhead = (t)=> new Paragraph({ spacing:{after:40}, children:[ new TextRun({text:t||'', bold:true, color:INK, size:24}) ] });
      d.pages.forEach((p,i)=>{
        if(p.kicker) kids.push(lbl(p.kicker));
        if(p.type==='section' && p.number) kids.push(new Paragraph({ spacing:{after:40}, children:[ new TextRun({text:p.number, bold:true, color:COB, size:48}) ] }));
        if(p.title) kids.push(head(p.title, p.type==='cover'||p.type==='cta'||p.type==='section' ? 40 : 30));
        if(p.subtitle) kids.push(para(p.subtitle));
        if(p.body) kids.push(para(p.body));
        if(p.type==='content') (p.items||[]).forEach(it=> kids.push(new Paragraph({ bullet:{level:0}, spacing:{after:60}, children: emRuns(it, BODY, 22, COB) })));
        if(p.type==='twocol'){ kids.push(subhead(p.leftTitle)); kids.push(para(p.leftBody)); kids.push(subhead(p.rightTitle)); kids.push(para(p.rightBody)); }
        if(p.type==='metrics') (p.metrics||[]).forEach(m=> kids.push(new Paragraph({ spacing:{after:60}, children:[ new TextRun({text:(m.value||'')+'   ', bold:true, color:COB, size:28}), new TextRun({text:m.label||'', color:BODY, size:22}) ] })));
        if(p.type==='cta' && (p.meta||p.ctaUrl)) kids.push(new Paragraph({ spacing:{before:80}, children:[ new TextRun({text:plain(p.meta)+'   ', color:INK, size:24}), new TextRun({text:p.ctaUrl||'', color:COB, bold:true, size:24}) ] }));
        if(i<d.pages.length-1) kids.push(new Paragraph({ border:{bottom:{style:BorderStyle.SINGLE, size:6, color:'E2E6EC', space:8}}, spacing:{after:200} }));
      });
    } else {
      if(d.kicker) kids.push(lbl(d.kicker));
      kids.push(head(d.title, 40));
      if(d.body) kids.push(para(d.body));
      if(d.subtitle) kids.push(para(d.subtitle));
      if(d.attribution) kids.push(para(d.attribution));
      if(d.metric) kids.push(new Paragraph({children:[ new TextRun({text:d.metric, color:COB, bold:true, size:56}) ]}));
    }
    const doc = new Document({ styles:{ default:{ document:{ run:{ font:'Inter' } } } }, sections:[{ properties:{}, children:kids }] });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, fileBase()+'.docx');
  }
};

/* ============================================================
   DIRECT-MANIPULATION EDITOR
   Click to select · double-click to edit text · drag to move ·
   handle to resize · brand-locked toolbar. All edits write back
   to state (content) or state.overrides[kind][bindPath] (style/pos).
   ============================================================ */
const WEIGHTS = [200,300,400,500,600,700];
const SWATCHES = [
  ['Cobalt', C.cobalt], ['Cyan', C.cyan], ['Ink', C.gray900], ['Body', C.gray700],
  ['Muted', C.gray500], ['White', C.white], ['Success', C.success], ['Highlight', C.highlight]
];
let _sel = null, _selEl = null, _box = null, _bar = null, _gx = null, _gy = null, _editing = false;
let _selKind = 'text', _selDecorId = null, _dbar = null;
let _selShape = null, _sbar = null;   // imported-deck freeform shape editing

const ov = () => (state.overrides[state.kind] = state.overrides[state.kind] || {});
const bindOf = el => el.getAttribute('data-bind');
function setOv(el, prop, val){ const b = bindOf(el); (ov()[b] = ov()[b] || {})[prop] = val; }
function mut(fn){ pushUndo(); fn(); applyOverrides(_frameEl); positionChrome(); updateContrast(); persist(); }

function applyOverridesTo(frameEl, o){
  if(!frameEl || !o) return;
  frameEl.querySelectorAll('[data-bind]').forEach(el=>{
    const s = o[el.getAttribute('data-bind')]; if(!s) return;
    if(s.fontSize)  el.style.fontSize = s.fontSize;
    if(s.fontWeight)el.style.fontWeight = s.fontWeight;
    if(s.color)     el.style.color = s.color;
    if(s.textAlign) el.style.textAlign = s.textAlign;
    if(s.maxWidth)  el.style.maxWidth = s.maxWidth;
    if(s.dx || s.dy) el.style.transform = `translate(${s.dx||0}px, ${s.dy||0}px)`;
  });
}
function applyOverrides(frameEl){ applyOverridesTo(frameEl, state.overrides[state.kind] || {}); }

function editorInitChrome(){
  _box = h('div',{class:'nt-selbox', style:{display:'none'}},
    [ h('div',{class:'nt-handle nt-handle-br', onpointerdown:beginResize}) ]);
  _gx = h('div',{class:'nt-guide nt-guide-v', style:{display:'none'}});
  _gy = h('div',{class:'nt-guide nt-guide-h', style:{display:'none'}});
  _bar = buildToolbar();
  _dbar = buildDecorToolbar();
  _mbar = buildMultiToolbar();
  _sbar = buildShapeToolbar();
  document.body.append(_gx, _gy, _box, _bar, _dbar, _mbar, _sbar);
}
function buildDecorToolbar(){
  const seg = (children)=> h('div',{class:'tb-seg'}, children);
  const btn = (label, title, fn, cls)=> h('button',{class:'tb-btn'+(cls?' '+cls:''), title, onclick:fn}, label);
  return h('div',{class:'nt-toolbar', style:{display:'none'}, onpointerdown:e=>e.stopPropagation()},[
    h('div',{class:'tb-seg tb-swatches'}, [['Cobalt',C.cobalt],['Cyan',C.cyan],['White',C.white],['Ink',C.gray900]].map(([n,hex])=>
      h('button',{class:'tb-swatch', title:'Recolor '+n, style:{background:hex, border: hex===C.white?'1px solid '+C.gray300:'none'}, onclick:()=>setDecorColor(hex)}))),
    seg([ btn('◑','Cycle opacity', cycleDecorOpacity) ]),
    seg([ btn('⤓','Send behind text', ()=>setDecorBack(true)), btn('⤒','Bring in front of text', ()=>setDecorBack(false)) ]),
    alignSeg(),
    seg([ btn('⧉','Duplicate (⌘D)', duplicateDecor), btn('⌫','Delete (⌦)', deleteDecor, 'tb-reset') ])
  ]);
}
function setDecorBack(v){ const d=getDecor(); if(!d) return; pushUndo(); d.back=v; persist(); renderPreview(); toast(v?'Sent behind text':'Brought to front'); }

function buildToolbar(){
  const seg = (children)=> h('div',{class:'tb-seg'}, children);
  const btn = (label, title, fn, cls)=> h('button',{class:'tb-btn'+(cls?' '+cls:''), title, onclick:fn}, label);
  const bar = h('div',{class:'nt-toolbar', style:{display:'none'}, onpointerdown:e=>e.stopPropagation()},[
    seg([ btn('A−','Smaller', ()=> stepSize(-4)), btn('A+','Larger', ()=> stepSize(4)) ]),
    seg([ btn('W−','Lighter', ()=> stepWeight(-1)), btn('W+','Bolder', ()=> stepWeight(1)) ]),
    h('div',{class:'tb-seg tb-swatches'}, SWATCHES.map(([name,hex])=>
      h('button',{class:'tb-swatch', title:name, style:{background:hex, border: hex===C.white?'1px solid '+C.gray300:'none'}, onclick:()=> setColor(hex)}))),
    alignSeg(),
    seg([ btn('Edit','Edit text (or double-click)', ()=> _selEl && enterEdit(_selEl)),
          btn('Reset','Reset this element', resetEl, 'tb-reset') ]),
    h('div',{class:'tb-seg'},[ h('span',{class:'tb-contrast', id:'tb-contrast', style:{display:'none'}}) ])
  ]);
  return bar;
}

function curSize(el){ const o = ov()[bindOf(el)]; return parseFloat(o && o.fontSize) || parseFloat(getComputedStyle(el).fontSize) || 16; }
function curWeight(el){ const o = ov()[bindOf(el)]; return parseInt(o && o.fontWeight) || parseInt(getComputedStyle(el).fontWeight) || 400; }

function stepSize(d){ if(!_selEl) return; mut(()=> setOv(_selEl,'fontSize', Math.max(8, Math.round(curSize(_selEl)+d))+'px')); }
function stepWeight(dir){
  if(!_selEl) return;
  let i = WEIGHTS.indexOf(curWeight(_selEl)); if(i<0) i = 2;
  i = Math.max(0, Math.min(WEIGHTS.length-1, i+dir));
  mut(()=> setOv(_selEl,'fontWeight', WEIGHTS[i]));
}
function setAlign(a){ if(_selEl) mut(()=> setOv(_selEl,'textAlign', a)); }
function setColor(hex){ if(_selEl) mut(()=> setOv(_selEl,'color', hex)); }
function resetEl(){ if(!_selEl) return; pushUndo(); delete ov()[bindOf(_selEl)]; persist(); renderPreview(); }

/* ---------- selection ---------- */
function selectEl(el){
  if(_selEl) _selEl.classList.remove('nt-selected');
  _selKind = 'text'; _selDecorId = null;
  _sel = bindOf(el); _selEl = el; el.classList.add('nt-selected');
  _box.style.display = 'block'; _bar.style.display = 'flex'; _dbar.style.display = 'none';
  positionChrome(); updateContrast();
}
function selectDecor(div){
  if(_selEl) _selEl.classList.remove('nt-selected');
  _selKind = 'decor'; _selDecorId = div.getAttribute('data-decor'); _sel = null;
  _selEl = div; div.classList.add('nt-selected');
  _box.style.display = 'block'; _bar.style.display = 'none'; _dbar.style.display = 'flex';
  positionChrome();
}
function editorDeselect(){
  if(_selEl) _selEl.classList.remove('nt-selected');
  _sel = null; _selEl = null; _selKind = 'text'; _selDecorId = null; _selShape = null;
  clearMulti();
  if(_box) _box.style.display = 'none';
  if(_bar) _bar.style.display = 'none';
  if(_dbar) _dbar.style.display = 'none';
  if(_sbar) _sbar.style.display = 'none';
}
function editorReselect(){
  if(!_frameEl) return;
  if(_selKind==='shape' && _selShape){
    const sv = _frameEl.querySelector('[data-shape="'+_selShape.i+'.'+_selShape.k+'"]');
    if(sv) selectShape(sv); else editorDeselect();
    return;
  }
  if(_selKind==='multi' && _multi.length>1){
    _frameEl.querySelectorAll('.nt-decor').forEach(dv=> dv.classList.toggle('nt-multi', _multi.includes(dv.getAttribute('data-decor'))));
    _mbar.style.display='flex'; positionMulti(); return;
  }
  if(_selKind==='decor' && _selDecorId){
    const dv = _frameEl.querySelector(`.nt-decor[data-decor="${_selDecorId}"]`);
    if(dv){ _selEl = dv; dv.classList.add('nt-selected'); _box.style.display='block'; _dbar.style.display='flex'; _bar.style.display='none'; positionChrome(); }
    else editorDeselect();
    return;
  }
  if(!_sel){ return; }
  const el = _frameEl.querySelector(`[data-bind="${CSS.escape(_sel)}"]`);
  if(el){ _selEl = el; el.classList.add('nt-selected'); _box.style.display='block'; _bar.style.display='flex'; _dbar.style.display='none'; positionChrome(); updateContrast(); }
  else editorDeselect();
}
function positionChrome(){
  if(!_selEl || !_box || _box.style.display==='none') return;
  const bar = _selKind==='shape' ? _sbar : (_selKind==='decor' ? _dbar : _bar);
  const r = _selEl.getBoundingClientRect();
  Object.assign(_box.style, { left:r.left+'px', top:r.top+'px', width:r.width+'px', height:r.height+'px' });
  const bw = bar.offsetWidth || 320;
  let bx = r.left + r.width/2 - bw/2;
  bx = Math.max(8, Math.min(window.innerWidth - bw - 8, bx));
  let by = r.top - bar.offsetHeight - 10;
  if(by < 8) by = r.bottom + 10;
  Object.assign(bar.style, { left:bx+'px', top:by+'px' });
}

/* ---------- inline text editing ---------- */
function enterEdit(el){
  _editing = true;
  const path = bindOf(el);
  const raw = getByPath(state.data[state.kind], path);
  pushUndo();
  el.textContent = raw==null ? '' : String(raw);   // show raw (with ** markers) while editing
  el.contentEditable = 'true'; el.spellcheck = false;
  el.classList.add('nt-editing');
  el.focus();
  const range = document.createRange(); range.selectNodeContents(el);
  const seln = getSelection(); seln.removeAllRanges(); seln.addRange(range);
  const commit = (cancel)=>{
    el.removeEventListener('blur', onBlur); el.removeEventListener('keydown', onKey);
    el.contentEditable = 'false'; el.classList.remove('nt-editing'); _editing = false;
    if(!cancel){ setByPath(state.data[state.kind], path, el.innerText); persist(); }
    renderPreview();
  };
  const onBlur = ()=> commit(false);
  const onKey = (e)=>{
    if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); el.blur(); }
    else if(e.key==='Escape'){ e.preventDefault(); commit(true); }
  };
  el.addEventListener('blur', onBlur); el.addEventListener('keydown', onKey);
}

/* ---------- drag to move ---------- */
function editorAttach(frameEl){
  frameEl.addEventListener('pointerdown', onFramePointerDown);
  frameEl.addEventListener('dblclick', (e)=>{ const el = e.target.closest('[data-bind]'); if(el) enterEdit(el); });
}
function onFramePointerDown(e){
  if(_editing) return;
  if(state.markupOn){ addPinAt(e); return; }
  if(isDeckKind(state.kind)){
    const sEl = e.target.closest('[data-shape]');
    if(!sEl){ editorDeselect(); return; }
    if(sEl !== _selEl) selectShape(sEl);
    beginShapeDrag(e, sEl); return;
  }
  const dc = e.target.closest('.nt-decor');
  if(dc){
    const id = dc.getAttribute('data-decor');
    if(e.shiftKey){ toggleMulti(id); return; }
    if(_selKind==='multi' && _multi.includes(id)){ beginGroupDrag(e); return; }
    clearMulti(); if(dc !== _selEl) selectDecor(dc); beginDecorDrag(e, dc); return;
  }
  const el = e.target.closest('[data-bind]');
  if(!el){ editorDeselect(); return; }
  if(el !== _selEl) selectEl(el);
  beginDrag(e, el);
}
function beginDrag(e, el){
  const b = bindOf(el); const o0 = ov()[b] || {};
  const startX = e.clientX, startY = e.clientY;
  const dx0 = o0.dx||0, dy0 = o0.dy||0;
  let moved = false, pushed = false;
  const frameRect = ()=> _frameEl.getBoundingClientRect();
  const move = (ev)=>{
    const ddx = (ev.clientX-startX), ddy = (ev.clientY-startY);
    if(!moved && Math.abs(ddx)+Math.abs(ddy) < 3) return;
    if(!moved){ moved = true; }
    if(!pushed){ pushUndo(); pushed = true; }
    let nx = dx0 + ddx/_scale, ny = dy0 + ddy/_scale;
    el.style.transform = `translate(${nx}px, ${ny}px)`;
    const {ax, ay} = snapDrag(el);
    if(ax){ nx += ax/_scale; } if(ay){ ny += ay/_scale; }
    el.style.transform = `translate(${nx}px, ${ny}px)`;
    setOv(el,'dx',Math.round(nx)); setOv(el,'dy',Math.round(ny));
    positionChrome();
  };
  const up = ()=>{
    window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up);
    hideGuide(_gx); hideGuide(_gy);
    if(moved) persist();
  };
  window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
}
function showGuide(g, x, y, len, vertical){
  g.style.display='block';
  if(vertical) Object.assign(g.style,{left:x+'px', top:y+'px', height:len+'px'});
  else Object.assign(g.style,{left:x+'px', top:y+'px', width:len+'px'});
}
function hideGuide(g){ if(g) g.style.display='none'; }

/* ---------- resize handle = scale font size ---------- */
function beginResize(e){
  e.stopPropagation(); e.preventDefault();
  if(!_selEl) return;
  let pushed = false;
  if(_selKind==='decor'){
    const d = getDecor(); if(!d) return;
    const sx = e.clientX, w0 = d.w;
    const move = (ev)=>{ if(!pushed){ pushUndo(); pushed=true; }
      d.w = Math.max(40, Math.round(w0 + (ev.clientX-sx)/_scale)); _selEl.style.width = d.w+'px'; positionChrome(); };
    const up = ()=>{ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); persist(); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up); return;
  }
  if(_selKind==='shape'){
    const sh = shapeObj(); if(!sh) return;
    const sx=e.clientX, sy=e.clientY, w0=sh.w, h0=sh.h;
    const move=(ev)=>{ if(!pushed){ pushUndo(); pushed=true; }
      sh.w=Math.max(16, Math.round(w0+(ev.clientX-sx)/_scale)); sh.h=Math.max(12, Math.round(h0+(ev.clientY-sy)/_scale));
      _selEl.style.width=sh.w+'px'; _selEl.style.height=sh.h+'px'; positionChrome(); };
    const up=()=>{ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); persist(); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up); return;
  }
  const el = _selEl, start = e.clientY, s0 = curSize(el);
  const move = (ev)=>{
    if(!pushed){ pushUndo(); pushed = true; }
    const ns = Math.max(8, Math.round(s0 + (ev.clientY-start)/_scale * 0.6));
    setOv(el,'fontSize', ns+'px'); el.style.fontSize = ns+'px'; positionChrome();
  };
  const up = ()=>{ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); persist(); };
  window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
}

/* ---------- smart alignment snapping ---------- */
const SNAP_TH = 7;          // screen px
function snapDrag(el){
  const fr = _frameEl.getBoundingClientRect(), r = el.getBoundingClientRect();
  const mvx = fr.width*0.07, mvy = fr.height*0.07;
  // frame targets: edges, margins, centres
  const vt = [fr.left, fr.left+mvx, fr.left+fr.width/2, fr.right-mvx, fr.right];
  const ht = [fr.top, fr.top+mvy, fr.top+fr.height/2, fr.bottom-mvy, fr.bottom];
  // element-to-element targets: other elements' edges + centres
  const others = [];
  _frameEl.querySelectorAll('[data-bind], .nt-decor').forEach(o=>{
    if(o===el || el.contains(o) || o.contains(el)) return; others.push(o.getBoundingClientRect()); });
  others.forEach(o=>{ vt.push(o.left, o.left+o.width/2, o.right); ht.push(o.top, o.top+o.height/2, o.bottom); });
  // equal-spacing: midpoint between two elements that overlap on the other axis (skip when crowded)
  if(others.length<=12) for(let i=0;i<others.length;i++) for(let j=i+1;j<others.length;j++){ const a=others[i], b=others[j];
    if(Math.min(a.bottom,b.bottom) > Math.max(a.top,b.top)) vt.push((a.left+a.width/2 + b.left+b.width/2)/2);
    if(Math.min(a.right,b.right) > Math.max(a.left,b.left)) ht.push((a.top+a.height/2 + b.top+b.height/2)/2);
  }
  const va = [r.left, r.left+r.width/2, r.right];
  const ha = [r.top, r.top+r.height/2, r.bottom];
  let bx=Infinity, gx=null; vt.forEach(t=>va.forEach(a=>{ const d=t-a; if(Math.abs(d)<Math.abs(bx)){ bx=d; gx=t; } }));
  let ax=0; if(Math.abs(bx)<=SNAP_TH) ax=bx; else gx=null;
  let by=Infinity, gy=null; ht.forEach(t=>ha.forEach(a=>{ const d=t-a; if(Math.abs(d)<Math.abs(by)){ by=d; gy=t; } }));
  let ay=0; if(Math.abs(by)<=SNAP_TH) ay=by; else gy=null;
  if(gx!=null) showGuide(_gx, gx, fr.top, fr.height, true); else hideGuide(_gx);
  if(gy!=null) showGuide(_gy, fr.left, gy, fr.width, false); else hideGuide(_gy);
  return {ax, ay};
}

/* ---------- one-click alignment ---------- */
function alignSeg(handler){
  const fn = handler || alignSelected;
  const b=(t,title,where)=>h('button',{class:'tb-btn tb-min', title:'Align '+title, onclick:()=>fn(where)}, t);
  return h('div',{class:'tb-seg'},[ b('L','left','left'), b('C','center','hcenter'), b('R','right','right'),
    h('span',{class:'tb-div'}), b('T','top','top'), b('M','middle','vcenter'), b('B','bottom','bottom') ]);
}
function alignDecorTo(d, where){
  const fr = _frames[state.active]; const m = 0.07;
  const wF = d.w, hF = d.w * (ELEMENTS[d.key].ratio || 1);
  if(where==='left') d.x = Math.round(fr.w*m);
  if(where==='hcenter') d.x = Math.round((fr.w-wF)/2);
  if(where==='right') d.x = Math.round(fr.w - fr.w*m - wF);
  if(where==='top') d.y = Math.round(fr.h*m);
  if(where==='vcenter') d.y = Math.round((fr.h-hF)/2);
  if(where==='bottom') d.y = Math.round(fr.h - fr.h*m - hF);
}
function alignSelected(where){
  if(!_selEl) return;
  const frame = _frameEl.getBoundingClientRect();
  const m = 0.07;
  if(_selKind==='decor'){
    const d = getDecor(); if(!d) return;
    pushUndo(); alignDecorTo(d, where); persist(); renderPreview();
  } else {
    const el = _selEl, prev = el.style.transform; el.style.transform = 'none';
    const nat = el.getBoundingClientRect(); el.style.transform = prev;
    let tx=null, ty=null;
    if(where==='left') tx = frame.left + frame.width*m;
    if(where==='hcenter') tx = frame.left + frame.width/2 - nat.width/2;
    if(where==='right') tx = frame.right - frame.width*m - nat.width;
    if(where==='top') ty = frame.top + frame.height*m;
    if(where==='vcenter') ty = frame.top + frame.height/2 - nat.height/2;
    if(where==='bottom') ty = frame.bottom - frame.height*m - nat.height;
    pushUndo();
    if(tx!=null) setOv(el,'dx', Math.round((tx-nat.left)/_scale));
    if(ty!=null) setOv(el,'dy', Math.round((ty-nat.top)/_scale));
    if(where==='left'||where==='hcenter'||where==='right') setOv(el,'textAlign', where==='hcenter'?'center':where);
    applyOverrides(_frameEl); positionChrome(); updateContrast(); persist();
  }
}
function nudgeSel(dx, dy){
  if(_selKind==='shape'){ const sh=shapeObj(); if(!sh) return; pushUndo(); sh.x+=dx; sh.y+=dy;
    if(_selEl){ _selEl.style.left=sh.x+'px'; _selEl.style.top=sh.y+'px'; } positionChrome(); persist(); return; }
  if(_selKind==='multi' && _multi.length){ pushUndo();
    multiList().forEach(d=>{ d.x=(d.x||0)+dx; d.y=(d.y||0)+dy;
      const dv=_frameEl.querySelector(`.nt-decor[data-decor="${d.id}"]`); if(dv){ dv.style.left=d.x+'px'; dv.style.top=d.y+'px'; } });
    positionMulti(); persist(); return; }
  if(!_selEl) return; pushUndo();
  if(_selKind==='decor'){ const d=getDecor(); if(!d) return; d.x=(d.x||0)+dx; d.y=(d.y||0)+dy;
    _selEl.style.left=d.x+'px'; _selEl.style.top=d.y+'px'; }
  else { const o=ov()[bindOf(_selEl)]||{}; setOv(_selEl,'dx',(o.dx||0)+dx); setOv(_selEl,'dy',(o.dy||0)+dy); applyOverrides(_frameEl); }
  positionChrome(); persist();
}
function duplicateDecor(){
  const d=getDecor(); if(!d) return; pushUndo();
  const c=JSON.parse(JSON.stringify(d)); c.id=uid(); c.x=(d.x||0)+24; c.y=(d.y||0)+24;
  state.decor[state.kind].push(c); _selDecorId=c.id; persist(); renderPreview(); toast('Duplicated');
}

/* ---------- multi-select (decorations) ---------- */
let _multi = [], _mbar = null;
function buildMultiToolbar(){
  const seg=(c)=>h('div',{class:'tb-seg'},c);
  const btn=(t,title,fn,cls)=>h('button',{class:'tb-btn'+(cls?' '+cls:''),title,onclick:fn},t);
  return h('div',{class:'nt-toolbar', style:{display:'none'}, onpointerdown:e=>e.stopPropagation()},[
    h('div',{class:'tb-seg tb-count'}, [ h('span',{id:'multi-count'}, '2'), document.createTextNode(' selected') ]),
    alignSeg(alignMulti),
    seg([ btn('⧉','Duplicate all', dupMulti), btn('⌫','Delete all', delMulti, 'tb-reset') ])
  ]);
}
function multiList(){ const ds=state.decor[state.kind]||[]; return _multi.map(id=>ds.find(d=>d.id===id)).filter(Boolean); }
function alignMulti(where){ pushUndo(); multiList().forEach(d=>alignDecorTo(d,where)); persist(); renderPreview(); }
function dupMulti(){ pushUndo(); const clones=multiList().map(d=>{ const c=JSON.parse(JSON.stringify(d)); c.id=uid(); c.x=(d.x||0)+24; c.y=(d.y||0)+24; return c; });
  clones.forEach(c=>state.decor[state.kind].push(c)); _multi=clones.map(c=>c.id); persist(); renderPreview(); }
function delMulti(){ pushUndo(); const ids=new Set(_multi); state.decor[state.kind]=(state.decor[state.kind]||[]).filter(d=>!ids.has(d.id)); clearMulti(); persist(); renderPreview(); }
function toggleMulti(id){
  if(!_multi.length && _selKind==='decor' && _selDecorId && _selDecorId!==id) _multi=[_selDecorId];
  const i=_multi.indexOf(id); if(i>=0) _multi.splice(i,1); else _multi.push(id);
  if(_multi.length<=1){ const only=_multi[0]||id; clearMulti(); const dv=_frameEl.querySelector(`.nt-decor[data-decor="${only}"]`); if(dv) selectDecor(dv); return; }
  enterMulti();
}
function enterMulti(){
  if(_selEl) _selEl.classList.remove('nt-selected');
  _selKind='multi'; _selEl=null; _sel=null; _selDecorId=null;
  _box.style.display='none'; _bar.style.display='none'; _dbar.style.display='none';
  _frameEl.querySelectorAll('.nt-decor').forEach(dv=> dv.classList.toggle('nt-multi', _multi.includes(dv.getAttribute('data-decor'))));
  _mbar.querySelector('#multi-count').textContent = String(_multi.length);
  _mbar.style.display='flex'; positionMulti();
}
function clearMulti(){ _multi=[]; if(_mbar) _mbar.style.display='none';
  if(_frameEl) _frameEl.querySelectorAll('.nt-multi').forEach(x=>x.classList.remove('nt-multi'));
  if(_selKind==='multi') _selKind='text'; }
function positionMulti(){
  if(_selKind!=='multi' || !_multi.length || !_mbar) return;
  let l=Infinity,t=Infinity,rr=-Infinity,bb=-Infinity;
  _multi.forEach(id=>{ const dv=_frameEl.querySelector(`.nt-decor[data-decor="${id}"]`); if(!dv) return;
    const r=dv.getBoundingClientRect(); l=Math.min(l,r.left); t=Math.min(t,r.top); rr=Math.max(rr,r.right); bb=Math.max(bb,r.bottom); });
  if(l===Infinity) return;
  const bw=_mbar.offsetWidth||320; const bx=Math.max(8,Math.min(window.innerWidth-bw-8,(l+rr)/2-bw/2));
  let by=t-_mbar.offsetHeight-10; if(by<8) by=bb+10;
  Object.assign(_mbar.style,{left:bx+'px',top:by+'px'});
}
function beginGroupDrag(e){
  const items=multiList().map(d=>({d, x0:d.x||0, y0:d.y||0})); const sx=e.clientX, sy=e.clientY; let moved=false, pushed=false;
  const move=(ev)=>{ const ddx=ev.clientX-sx, ddy=ev.clientY-sy; if(!moved && Math.abs(ddx)+Math.abs(ddy)<3) return; moved=true;
    if(!pushed){ pushUndo(); pushed=true; }
    items.forEach(({d,x0,y0})=>{ d.x=Math.round(x0+ddx/_scale); d.y=Math.round(y0+ddy/_scale);
      const dv=_frameEl.querySelector(`.nt-decor[data-decor="${d.id}"]`); if(dv){ dv.style.left=d.x+'px'; dv.style.top=d.y+'px'; } });
    positionMulti(); };
  const up=()=>{ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); if(moved) persist(); };
  window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
}

/* ============================================================
   IMPORTED-DECK FREEFORM SHAPE EDITOR
   Every shape (text / rect / image) is selectable, movable, resizable,
   recolorable, duplicable, re-orderable and deletable. New shapes can be added.
   ============================================================ */
function shapeObj(){ if(!_selShape) return null; const s=state.data[state.kind].slides[_selShape.i]; return s && s.shapes[_selShape.k]; }
function smut(fn){ pushUndo(); fn(); persist(); renderPreview(); }
function buildShapeToolbar(){
  const seg=(c,id)=>h('div',{class:'tb-seg', id:id||null}, c);
  const btn=(t,title,fn,cls)=>h('button',{class:'tb-btn'+(cls?' '+cls:''),title,onclick:fn},t);
  return h('div',{class:'nt-toolbar', style:{display:'none'}, onpointerdown:e=>e.stopPropagation()},[
    alignSeg(alignShapeToSlide),
    seg([ btn('A−','Smaller text',()=>shapeFont(-2)), btn('A+','Larger text',()=>shapeFont(2)),
          btn('B','Bold',()=>shapeBold()), btn('Edit','Edit text',()=>{ if(_selEl) enterEdit(_selEl); }) ], 'sb-text'),
    h('div',{class:'tb-seg tb-swatches'}, [['Cobalt',C.cobalt],['Cyan',C.cyan],['Ink',C.gray900],['Muted',C.gray500],['White',C.white]].map(([n,hex])=>
      h('button',{class:'tb-swatch',title:'Colour '+n,style:{background:hex,border:hex===C.white?'1px solid '+C.gray300:'none'},onclick:()=>shapeColor(hex)}))),
    seg([ btn('⤺','Rotate left',()=>shapeRotate(-15)), btn('⤻','Rotate right',()=>shapeRotate(15)) ]),
    seg([ btn('Replace','Replace image',()=>shapeReplaceImage()) ], 'sb-img'),
    seg([ btn('⤒','Bring to front',()=>shapeLayer(1)), btn('⤓','Send to back',()=>shapeLayer(-1)) ]),
    seg([ btn('⧉','Duplicate (⌘D)',()=>shapeDup()), btn('⌫','Delete (⌦)',()=>shapeDel(),'tb-reset') ])
  ]);
}
function shapeRotate(d){ const sh=shapeObj(); if(!sh) return; smut(()=>{ sh.rot=(((sh.rot||0)+d)%360+360)%360; }); }
function shapeReplaceImage(){ const sh=shapeObj(); if(!sh||sh.t!=='img') return;
  const inp=h('input',{type:'file', accept:'image/*', style:{display:'none'}});
  inp.addEventListener('change', e=>{ const f=e.target.files[0]; if(!f) return; const rd=new FileReader();
    rd.onload=()=>{ pushUndo(); sh.src=rd.result; persist(); renderPreview(); toast('Image replaced'); }; rd.readAsDataURL(f); });
  document.body.appendChild(inp); inp.click(); setTimeout(()=>inp.remove(), 1000);
}
function selectShape(el){
  if(_selEl) _selEl.classList.remove('nt-selected');
  const ik = el.getAttribute('data-shape').split('.');
  _selShape = { i:+ik[0], k:+ik[1] }; _selKind='shape'; _sel=null; _selDecorId=null;
  _selEl = el; el.classList.add('nt-selected');
  const sh = shapeObj();
  _sbar.querySelector('#sb-text').style.display = (sh && sh.t==='text') ? 'flex' : 'none';
  _sbar.querySelector('#sb-img').style.display = (sh && sh.t==='img') ? 'flex' : 'none';
  _box.style.display='block'; _bar.style.display='none'; _dbar.style.display='none'; _mbar.style.display='none';
  _sbar.style.display='flex'; positionChrome();
}
function beginShapeDrag(e, el){
  const sh = shapeObj(); if(!sh) return;
  const sx=e.clientX, sy=e.clientY, x0=sh.x, y0=sh.y; let moved=false, pushed=false;
  const move=(ev)=>{ const ddx=ev.clientX-sx, ddy=ev.clientY-sy;
    if(!moved && Math.abs(ddx)+Math.abs(ddy)<3) return; moved=true; if(!pushed){ pushUndo(); pushed=true; }
    sh.x=Math.round(x0+ddx/_scale); sh.y=Math.round(y0+ddy/_scale);
    el.style.left=sh.x+'px'; el.style.top=sh.y+'px';
    const {ax,ay}=snapDrag(el); if(ax||ay){ sh.x+=Math.round(ax/_scale); sh.y+=Math.round(ay/_scale); el.style.left=sh.x+'px'; el.style.top=sh.y+'px'; }
    positionChrome(); };
  const up=()=>{ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); hideGuide(_gx); hideGuide(_gy); if(moved) persist(); };
  window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
}
function shapeColor(hex){ const sh=shapeObj(); if(!sh) return; smut(()=>{
  if(sh.t==='text' && sh.tx){ sh.tx.paras.forEach(p=>p.runs.forEach(r=>{ if(!r.br) r.col=hex; })); }
  else sh.fill=hex; }); }
function shapeFont(d){ const sh=shapeObj(); if(!sh||sh.t!=='text') return; smut(()=>{
  sh.tx.paras.forEach(p=>p.runs.forEach(r=>{ if(r.fs) r.fs=Math.max(6, Math.round(r.fs+d)); else if(!r.br) r.fs=Math.max(6,24+d); })); }); }
function shapeBold(){ const sh=shapeObj(); if(!sh||sh.t!=='text') return; smut(()=>{
  const allBold = sh.tx.paras.every(p=>p.runs.every(r=>r.br||r.b)); sh.tx.paras.forEach(p=>p.runs.forEach(r=>{ if(!r.br){ if(allBold) delete r.b; else r.b=1; } })); }); }
function shapeLayer(dir){ const sh=shapeObj(); if(!sh) return; const arr=state.data[state.kind].slides[_selShape.i].shapes;
  pushUndo(); arr.splice(_selShape.k,1); const ni = dir>0 ? arr.length : 0; arr.splice(ni,0,sh); _selShape.k=ni; persist(); renderPreview(); }
function shapeDup(){ const sh=shapeObj(); if(!sh) return; const arr=state.data[state.kind].slides[_selShape.i].shapes;
  pushUndo(); const c=JSON.parse(JSON.stringify(sh)); c.x+=16; c.y+=16; arr.push(c); _selShape.k=arr.length-1; persist(); renderPreview(); }
function shapeDel(){ if(!_selShape) return; const arr=state.data[state.kind].slides[_selShape.i].shapes;
  pushUndo(); arr.splice(_selShape.k,1); editorDeselect(); persist(); renderPreview(); }
function alignShapeToSlide(where){ const sh=shapeObj(); if(!sh) return; const d=state.data[state.kind], m=0.05; smut(()=>{
  if(where==='left') sh.x=Math.round(d.w*m);
  if(where==='hcenter') sh.x=Math.round((d.w-sh.w)/2);
  if(where==='right') sh.x=Math.round(d.w-d.w*m-sh.w);
  if(where==='top') sh.y=Math.round(d.h*m);
  if(where==='vcenter') sh.y=Math.round((d.h-sh.h)/2);
  if(where==='bottom') sh.y=Math.round(d.h-d.h*m-sh.h); }); }
function addImageShape(){
  const d = state.data[state.kind], sl = d.slides[state.active]; if(!sl) return;
  const inp = h('input',{type:'file', accept:'image/*', style:{display:'none'}});
  inp.addEventListener('change', e=>{ const f=e.target.files[0]; if(!f) return; const rd=new FileReader();
    rd.onload=()=>{ const img=new Image(); img.onload=()=>{ const maxW=d.w*0.5; let w=img.width, hh=img.height;
        if(w>maxW){ hh=hh*maxW/w; w=maxW; }
        pushUndo(); sl.shapes.push({ t:'img', x:Math.round(d.w*0.12), y:Math.round(d.h*0.18), w:Math.round(w), h:Math.round(hh), src:rd.result });
        _selShape={ i:state.active, k:sl.shapes.length-1 }; _selKind='shape'; persist(); renderPreview(); toast('Image added — drag to place'); };
      img.src = rd.result; };
    rd.readAsDataURL(f); });
  document.body.appendChild(inp); inp.click(); setTimeout(()=>inp.remove(), 1000);
}
function addShape(kind){
  const d=state.data[state.kind], sl=d.slides[state.active]; if(!sl) return;
  const x=Math.round(d.w*0.12), y=Math.round(d.h*0.18);
  const sh = kind==='text'
    ? { t:'text', x, y, w:Math.round(d.w*0.5), h:90, tx:{ anchor:'t', pads:[4,4,4,4], fscale:1,
        paras:[{a:'left', lh:1.25, mt:0, mb:0, bu:null, runs:[{s:'New text', fs:28, col:C.gray900}]}], orig:'New text' } }
    : { t:'rect', x, y, w:Math.round(d.w*0.4), h:Math.round(d.h*0.12), fill:C.gray50, bd:[1, C.gray200], r:10 };
  pushUndo(); sl.shapes.push(sh); _selShape={ i:state.active, k:sl.shapes.length-1 }; _selKind='shape'; persist(); renderPreview();
  toast('Added '+(kind==='text'?'text box':'rectangle'));
}

/* ---------- safe-area / margin overlay ---------- */
function safeAreaOverlay(fr){
  const mx = Math.round(fr.w*0.07), my = Math.round(fr.h*0.07);
  const ov = h('div',{class:'nt-safe', style:{position:'absolute', inset:'0', pointerEvents:'none', zIndex:'9'}});
  ov.appendChild(h('div',{style:{position:'absolute', left:mx+'px', top:my+'px', right:mx+'px', bottom:my+'px',
    border:'2px dashed rgba(0,184,217,0.7)', borderRadius:'4px'}}));
  ov.appendChild(h('div',{style:{position:'absolute', left:'50%', top:'0', bottom:'0', width:'1px', background:'rgba(0,184,217,0.4)'}}));
  ov.appendChild(h('div',{style:{position:'absolute', top:'50%', left:'0', right:'0', height:'1px', background:'rgba(0,184,217,0.4)'}}));
  return ov;
}
function toggleSafe(btn){ state.safeArea=!state.safeArea; btn.classList.toggle('on', state.safeArea); renderPreview();
  toast(state.safeArea ? 'Safe-area guides on' : 'Safe-area guides off'); }

/* ---------- AA contrast check ---------- */
function parseColor(s){
  if(!s) return null;
  const m = s.match(/rgba?\(([^)]+)\)/); if(!m) return null;
  const p = m[1].split(',').map(x=>parseFloat(x));
  return [p[0], p[1], p[2], p.length>3 ? p[3] : 1];
}
function relLum([r,g,b]){
  const f = c=>{ c/=255; return c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
  return 0.2126*f(r) + 0.7152*f(g) + 0.0722*f(b);
}
function contrastRatio(a, b){ const l1=relLum(a), l2=relLum(b); const hi=Math.max(l1,l2), lo=Math.min(l1,l2); return (hi+0.05)/(lo+0.05); }
function effectiveBg(el, strict){
  let n = el;
  while(n && n.nodeType===1){
    const cs = getComputedStyle(n);
    const c = parseColor(cs.backgroundColor);
    if(c && c[3] > 0.1) return c;
    if(strict && cs.backgroundImage && cs.backgroundImage !== 'none') return null;  // gradient/image — can't measure reliably
    n = n.parentElement;
  }
  return strict ? null : (state.theme==='dark' ? [10,14,42,1] : [255,255,255,1]);
}
function updateContrast(){
  const chip = document.getElementById('tb-contrast'); if(!chip) return;
  if(_selKind!=='text' || !_selEl){ chip.style.display='none'; return; }
  const cs = getComputedStyle(_selEl);
  const fg = parseColor(cs.color); if(!fg){ chip.style.display='none'; return; }
  const bg = effectiveBg(_selEl.parentElement || _selEl);
  const ratio = contrastRatio(fg, bg);
  const size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 600;
  const thr = (size>=28 || (bold && size>=22)) ? 3.0 : 4.5;
  const pass = ratio >= thr;
  chip.style.display='inline-flex';
  chip.textContent = (pass?'AA ✓ ':'AA ✗ ') + ratio.toFixed(1);
  chip.className = 'tb-contrast ' + (pass ? 'ok' : 'bad');
  chip.title = `Contrast ${ratio.toFixed(2)}:1 vs ${pass?'meets':'below'} AA (needs ${thr})`;
}

/* ---------- brand check (consistency audit) ---------- */
const BRAND_PALETTE = new Set([
  '0047ab','003c90','2e6fd6','00b8d9','ffffff','000000',
  'f7f8fa','eef0f4','e2e6ec','cbd2dc','9aa4b2','6b7686','4b5563','374151','0e1320',
  '02020a','0a0e2a','111145','141857','1d2b74','202e86','2c2bad','8fb4ff',
  '1fa971','e6f6ef','f2b705','fdf6e3','e8852b','fdefe2','d64545','fbeaea','f4f8fe'
]);
function rgbToHex(s){ const m=String(s).match(/rgba?\(([^)]+)\)/); if(!m) return null;
  const p=m[1].split(',').map(x=>parseFloat(x)); if(p.length>3 && p[3]<0.99) return null;
  return p.slice(0,3).map(n=>Math.round(n).toString(16).padStart(2,'0')).join('').toLowerCase(); }
function snippet(s){ s=s.replace(/\s+/g,' ').trim(); return s.length>34 ? s.slice(0,32)+'…' : s; }
async function runBrandCheck(){
  await document.fonts.ready;
  const map = new Map();   // dedupe identical issues across slides
  const add = (sev,type,msg,slide)=>{ const k=type+'|'+msg; let f=map.get(k);
    if(!f){ f={sev,type,msg,slides:[]}; map.set(k,f); } if(f.slides.indexOf(slide)<0) f.slides.push(slide); };
  const host = h('div',{style:{position:'fixed', left:'-100000px', top:'0'}}); document.body.appendChild(host);
  const ov = state.overrides[state.kind] || {};
  const deck = isDeckKind(state.kind);   // decks: backgrounds are sibling shapes → contrast needs pixels, skip (already approved)
  try {
    for(let i=0;i<_frames.length;i++){
      const fr = _frames[i]; const el = fr.build();
      applyOverridesTo(el, ov); appendDecor(el, state.kind, i, false); host.appendChild(el);
      if(deck) fitImported(el);
      const frameRect = el.getBoundingClientRect();
      el.querySelectorAll('[data-bind], .nt-imp-tx').forEach(t=>{
        const txt = (t.innerText||'').trim(); if(!txt) return;
        const cs = getComputedStyle(t);
        // AA contrast (templates only — background is the ancestor and measurable)
        const fg = parseColor(cs.color); const bg = deck ? null : effectiveBg(t.parentElement || t, false);
        if(fg && bg){ const ratio = contrastRatio(fg, bg); const size=parseFloat(cs.fontSize), bold=parseInt(cs.fontWeight)>=600;
          const thr = (size>=28 || (bold && size>=22)) ? 3.0 : 4.5;
          if(ratio < thr - 0.05) add('high','Contrast', `“${snippet(txt)}” — ${ratio.toFixed(1)}:1, below AA`, i+1); }
        // text running off the page edge (true clipping by the frame)
        const r = t.getBoundingClientRect();
        const L=r.left-frameRect.left, T=r.top-frameRect.top, R=r.right-frameRect.left, B=r.bottom-frameRect.top;
        if(L < -2 || T < -2 || R > fr.w+2 || B > fr.h+2) add('med','Bleed', `“${snippet(txt)}” runs off the edge of the page`, i+1);
      });
      host.removeChild(el);
    }
  } finally { host.remove(); }
  showBrandCheck([...map.values()]);
}
function showBrandCheck(findings){
  const order = {high:0, med:1, low:2};
  findings.sort((a,b)=> (order[a.sev]-order[b.sev]) || (a.slides[0]-b.slides[0]));
  const ov = h('div',{class:'lib-lightbox', onclick:e=>{ if(e.target===ov) ov.remove(); }});
  const n = findings.length;
  const card = h('div',{class:'bc-card'});
  card.appendChild(h('div',{class:'bc-head'},[
    h('div',{class:'bc-title'}, (n?'⚠ ':'✓ ') + (n ? `${n} thing${n>1?'s':''} to review` : 'On-brand — no issues found')),
    h('button',{class:'ghost-btn', onclick:()=>ov.remove()}, 'Close ✕') ]));
  const body = h('div',{class:'bc-body'});
  if(!n) body.appendChild(h('div',{class:'bc-ok'}, `Contrast and margins check out across ${_frames.length} ${_frames.length>1?'slides':'frame'}.`));
  findings.forEach(f=>{ const multi = f.slides.length>1;
    body.appendChild(h('div',{class:'bc-item', onclick:()=>{ state.active=f.slides[0]-1; editorDeselect(); renderPreview(); updateActiveThumb(); ov.remove(); }},
      [ h('span',{class:'bc-sev bc-'+f.sev}),
        h('span',{class:'bc-slide'}, multi ? f.slides.length+' slides' : 'Slide '+f.slides[0]),
        h('span',{class:'bc-type'}, f.type), h('span',{class:'bc-msg'}, f.msg) ])); });
  card.appendChild(body); ov.appendChild(card); document.body.appendChild(ov);
}

/* ---------- markup (review annotations) ---------- */
function renderMarkup(frameEl){
  const old = frameEl.querySelector('.nt-markup'); if(old) old.remove();
  const pins = state.markup[state.kind] || [];
  if(!pins.length && !state.markupOn) return;
  const layer = h('div',{class:'nt-markup', style:{position:'absolute', inset:'0', pointerEvents:'none'}});
  pins.forEach((p,i)=>{
    const pin = h('div',{class:'nt-pin', style:{left:p.x+'px', top:p.y+'px', pointerEvents:'auto'}},[
      h('div',{class:'nt-pin-dot'}, String(i+1)),
      h('div',{class:'nt-pin-note', contenteditable:'true', spellcheck:'false',
        onblur:e=>{ p.text = e.target.innerText; persist(); },
        onpointerdown:e=>e.stopPropagation()}, p.text||''),
      h('button',{class:'nt-pin-del', title:'Delete pin', onpointerdown:e=>e.stopPropagation(),
        onclick:()=>{ pushUndo(); pins.splice(i,1); persist(); renderMarkup(_frameEl); }}, '✕')
    ]);
    layer.appendChild(pin);
  });
  frameEl.appendChild(layer);
}
function addPinAt(e){
  const r = _frameEl.getBoundingClientRect();
  const x = (e.clientX - r.left)/_scale, y = (e.clientY - r.top)/_scale;
  pushUndo();
  (state.markup[state.kind] = state.markup[state.kind] || []).push({ x:Math.round(x), y:Math.round(y), text:'' });
  persist(); renderMarkup(_frameEl);
}

/* ============================================================
   DESIGN ELEMENTS — placeable brand decorations
   ============================================================ */
const ELEMENTS = {
  chevron: { name:'Chevron flow', w:420, op:1, svg:
    '<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#0047AB" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M40 30 96 60 40 90" opacity="0.35"/><path d="M120 30 176 60 120 90" opacity="0.6"/><path d="M200 30 256 60 200 90" opacity="0.85"/><path d="M280 30 336 60 280 90" stroke="#00B8D9"/></g></svg>' },
  circuit: { name:'Circuit corner', w:300, op:1, svg:
    '<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#0047AB" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M36 36 H150 a24 24 0 0 1 24 24 V120"/><path d="M36 84 H96 a24 24 0 0 1 24 24 V176"/><path d="M84 36 V72 a24 24 0 0 0 24 24 H168"/></g><g fill="#0047AB"><circle cx="36" cy="36" r="9"/><circle cx="36" cy="84" r="6"/><circle cx="84" cy="36" r="6"/></g><g fill="#00B8D9"><circle cx="174" cy="120" r="7"/><circle cx="120" cy="176" r="7"/><circle cx="168" cy="96" r="5"/></g></svg>' },
  quote: { name:'Quote mark', w:200, op:1, svg:
    '<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg"><g fill="#0047AB"><path d="M20 150 C20 96 48 60 96 50 L96 78 C70 86 58 104 58 124 L88 124 L88 150 Z"/><path d="M112 150 C112 96 140 60 188 50 L188 78 C162 86 150 104 150 124 L180 124 L180 150 Z" fill="#00B8D9"/></g></svg>' },
  divider: { name:'Gradient divider', w:520, op:1, svg:
    '<svg viewBox="0 0 480 12" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0047AB"/><stop offset="1" stop-color="#00B8D9"/></linearGradient></defs><rect x="0" y="4" width="480" height="4" rx="2" fill="url(#gd)"/></svg>' },
  dots: { name:'Dot field', w:340, op:0.6, svg:
    '<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dt" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="3" fill="#0047AB" opacity="0.55"/></pattern></defs><rect width="320" height="320" fill="url(#dt)"/><circle cx="92" cy="84" r="9" fill="#00B8D9"/><circle cx="232" cy="196" r="7" fill="#0047AB"/></svg>' },
  orb: { name:'Glow orb', w:520, op:0.55, svg:
    '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ob" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2E6FD6"/><stop offset="55%" stop-color="#0047AB"/><stop offset="100%" stop-color="#0047AB" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="200" fill="url(#ob)"/></svg>' },
  monogram: { name:'N monogram', w:160, op:1, svg:
    '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect width="512" height="512" rx="116" fill="#0047AB"/><path d="M150 358 V154 L362 358 V154" fill="none" stroke="#FFFFFF" stroke-width="34" stroke-linecap="square"/><circle cx="150" cy="154" r="13" fill="#00B8D9"/><circle cx="362" cy="358" r="13" fill="#00B8D9"/></svg>' },
  flow: { name:'Process flow', w:460, op:1, svg:
    '<svg viewBox="0 0 480 120" xmlns="http://www.w3.org/2000/svg"><g fill="#F7F8FA" stroke="#0047AB" stroke-width="2.5"><rect x="8" y="34" width="94" height="52" rx="12"/><rect x="130" y="34" width="94" height="52" rx="12"/><rect x="252" y="34" width="94" height="52" rx="12"/><rect x="374" y="34" width="94" height="52" rx="12"/></g><g stroke="#2E6FD6" stroke-width="3" fill="none" stroke-linecap="round"><path d="M106 60 H122"/><path d="M228 60 H244"/><path d="M350 60 H366"/></g><g fill="#2E6FD6"><path d="M120 54 L128 60 L120 66 Z"/><path d="M242 54 L250 60 L242 66 Z"/><path d="M364 54 L372 60 L364 66 Z"/></g><g fill="#0047AB"><circle cx="55" cy="60" r="5"/><circle cx="177" cy="60" r="5"/><circle cx="299" cy="60" r="5"/><circle cx="421" cy="60" r="5"/></g></svg>' },
  gantt: { name:'Timeline / Gantt', w:540, op:1, svg:
    '<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg"><g stroke="#E2E6EC" stroke-width="1"><path d="M20 18V196"/><path d="M58 18V196"/><path d="M95 18V196"/><path d="M133 18V196"/><path d="M170 18V196"/><path d="M208 18V196"/><path d="M245 18V196"/><path d="M283 18V196"/><path d="M320 18V196"/><path d="M358 18V196"/><path d="M395 18V196"/><path d="M433 18V196"/><path d="M470 18V196"/></g><rect x="20" y="28" width="75" height="22" rx="6" fill="#0047AB"/><rect x="58" y="62" width="150" height="22" rx="6" fill="#2E6FD6"/><rect x="95" y="96" width="165" height="22" rx="6" fill="#0047AB"/><rect x="170" y="130" width="113" height="22" rx="6" fill="#2E6FD6"/><rect x="283" y="164" width="165" height="22" rx="6" fill="#0047AB"/></svg>' }
};
/* aspect ratio (h/w) from each element's viewBox — used for alignment math */
Object.values(ELEMENTS).forEach(e=>{ const m = e.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/); e.ratio = m ? (+m[2]/+m[1]) : 1; });
function decorSVG(key, color){
  let s = ELEMENTS[key].svg;
  if(color) s = s.split('#0047AB').join(color);
  return s;
}
function getDecor(){ return (state.decor[state.kind]||[]).find(d=>d.id===_selDecorId); }

/* layering: backgrounds (z1) < back-decor (z2) < content/text (z3) < front-decor (z7).
   Content layers are made click-through so back decorations remain selectable. */
function layerFrame(frameEl){
  Array.from(frameEl.children).forEach(ch=>{
    if(ch.classList && ch.classList.contains('nt-decor-layer')) return;
    if(!ch.style.position) ch.style.position = 'relative';
    const hasText = ch.querySelector && ch.querySelector('[data-bind]');
    ch.style.zIndex = hasText ? '3' : (ch.style.zIndex || '1');
    if(hasText){ ch.style.pointerEvents = 'none'; ch.querySelectorAll('[data-bind]').forEach(t=> t.style.pointerEvents='auto'); }
  });
}
function decorElList(list, idx, interactive, wantBack){
  const items = list.filter(d=>(d.frame||0)===idx && (!!d.back===wantBack));
  if(!items.length) return null;
  const layer = h('div',{class:'nt-decor-layer', style:{position:'absolute', inset:'0', pointerEvents:'none', zIndex: wantBack?'2':'7'}});
  items.forEach(d=>{
    const e = ELEMENTS[d.key]; if(!e) return;
    const div = h('div',{class:'nt-decor', 'data-decor':d.id, style:{ position:'absolute',
      left:(d.x||0)+'px', top:(d.y||0)+'px', width:(d.w||e.w)+'px',
      opacity:(d.opacity!=null?d.opacity:e.op), pointerEvents: interactive?'auto':'none',
      cursor: interactive?'move':'default' }});
    div.innerHTML = decorSVG(d.key, d.color);
    const svg = div.querySelector('svg');
    if(svg){ svg.removeAttribute('width'); svg.removeAttribute('height'); svg.style.width='100%'; svg.style.height='auto'; svg.style.display='block'; }
    layer.appendChild(div);
  });
  return layer;
}
function appendDecor(frameEl, kind, idx, interactive){
  const list = state.decor[kind] || [];
  if(!list.length) return;          // no decorations → leave native stacking (e.g. imported decks) intact
  layerFrame(frameEl);
  const back = decorElList(list, idx, interactive, true); if(back) frameEl.appendChild(back);
  const front = decorElList(list, idx, interactive, false); if(front) frameEl.appendChild(front);
}

function beginDecorDrag(e, div){
  const d = getDecor(); if(!d) return;
  const sx=e.clientX, sy=e.clientY, x0=d.x||0, y0=d.y||0; let moved=false, pushed=false;
  const move = (ev)=>{ const ddx=ev.clientX-sx, ddy=ev.clientY-sy;
    if(!moved && Math.abs(ddx)+Math.abs(ddy)<3) return; moved=true;
    if(!pushed){ pushUndo(); pushed=true; }
    d.x=Math.round(x0+ddx/_scale); d.y=Math.round(y0+ddy/_scale);
    div.style.left=d.x+'px'; div.style.top=d.y+'px';
    const {ax, ay} = snapDrag(div);
    if(ax||ay){ d.x+=Math.round(ax/_scale); d.y+=Math.round(ay/_scale); div.style.left=d.x+'px'; div.style.top=d.y+'px'; }
    positionChrome(); };
  const up = ()=>{ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); hideGuide(_gx); hideGuide(_gy); if(moved) persist(); };
  window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
}
function setDecorColor(hex){ const d=getDecor(); if(!d) return; pushUndo(); d.color=hex; persist(); renderPreview(); }
function cycleDecorOpacity(){ const d=getDecor(); if(!d) return; const steps=[1,0.6,0.3];
  const cur = d.opacity!=null?d.opacity:(ELEMENTS[d.key].op); let i=steps.findIndex(v=>Math.abs(v-cur)<0.06);
  d.opacity = steps[(i+1+steps.length)%steps.length]; pushUndo(); persist(); renderPreview(); }
function deleteDecor(){ const d=getDecor(); if(!d) return; pushUndo();
  state.decor[state.kind] = state.decor[state.kind].filter(x=>x.id!==d.id); editorDeselect(); persist(); renderPreview(); }
function addDecor(key){
  const e = ELEMENTS[key]; const fr = _frames[state.active] || {w:1080, h:1080};
  const w = e.w, x = Math.round((fr.w-w)/2), y = Math.round(fr.h*0.36);
  pushUndo();
  const d = { id:uid(), frame:state.active, key, x, y, w, opacity:e.op };
  (state.decor[state.kind] = state.decor[state.kind] || []).push(d);
  _selKind='decor'; _selDecorId=d.id;            // so renderPreview reselects it
  persist(); renderPreview();
  toast('Added '+e.name+' — drag to place, corner to resize');
}
function renderElementsPanel(){
  const host = $('#elements-palette'); if(!host) return; host.innerHTML='';
  Object.keys(ELEMENTS).forEach(key=>{
    const e = ELEMENTS[key];
    const chip = h('button',{class:'el-chip', title:'Add '+e.name, onclick:()=>addDecor(key)},
      [ h('span',{class:'el-ico'+(['orb','monogram'].includes(key)?' on-dark':''), html:decorSVG(key,null)}),
        h('span',{class:'el-name'}, e.name) ]);
    host.appendChild(chip);
  });
}

/* ============================================================
   BRAND LIBRARY — collection of reusable, repurposable assets
   ============================================================ */
const clone = o => JSON.parse(JSON.stringify(o));
const uid = () => 'a' + Date.now().toString(36) + Math.floor(Math.random()*1e6).toString(36);
const LIB_KEY = 'nt-studio-library-v1';
let library = [];
function libLoad(){ try { library = JSON.parse(localStorage.getItem(LIB_KEY)||'[]'); } catch(e){ library = []; } }
function libPersist(){ try { localStorage.setItem(LIB_KEY, JSON.stringify(library)); } catch(e){} }

/* Curated starter collection — real newtuple.com copy across all 5 types */
const STARTERS = [
  { name:'Five questions (quote)', kind:'post', theme:'light', make:()=>({ variant:'quote',
      title:'We do not launch an agent until it can answer **five questions**.',
      attribution:'— Newtuple · On agent readiness' }) },
  { name:'95% document accuracy', kind:'post', theme:'dark', make:()=>({ variant:'stat',
      kicker:'Document intelligence', metric:'95%', title:'accuracy in production',
      body:'across **30–40k documents / month** — hours of manual work cut to seconds.' }) },
  { name:'15 days → under 1 day', kind:'post', theme:'light', make:()=>({ variant:'stat',
      kicker:'Incentive calculation', metric:'15d→1d', title:'cycle time, automated',
      body:'What took **15 days** of manual work now runs in **under a day**.' }) },
  { name:'$5M+ recovered', kind:'post', theme:'dark', make:()=>({ variant:'stat',
      kicker:'Retail · shrinkage', metric:'$5M+', title:'recovered annually',
      body:'Computer-vision automation on linen shrinkage, in production.' }) },
  { name:'Build Your Agentic Enterprise', kind:'post', theme:'dark', make:()=>({ variant:'announcement',
      kicker:'Generative AI experts', title:'Build Your **Agentic** Enterprise.',
      body:'Scale your AI operations. Ship production-grade intelligence.', cta:'Talk to our experts' }) },
  { name:'Generative AI Experts (banner)', kind:'banner', theme:'dark', make:()=>KINDS.banner.defaults() },
  { name:'Dialogtuple (banner)', kind:'banner', theme:'dark', make:()=>({ kicker:'Dialogtuple',
      title:'**100+ LLMs.** Native agents. One platform.',
      subtitle:'Multi-agent platform with prompt versioning, tracing and a built-in eval framework.' }) },
  { name:'Every engineer codes with AI (banner)', kind:'banner', theme:'light', make:()=>({ kicker:'The agentic enterprise',
      title:'Every engineer codes with **AI agents**. Every PM is **AI-augmented**.',
      subtitle:'Production-grade automation that runs all day, at scale, with governance.' }) },
  { name:'Capability one-pager', kind:'onepager', theme:'light', make:()=>KINDS.onepager.defaults() }
];
/* append custom starters from starters.js (plain {name,kind,theme,data}) */
(window.NT_STARTERS||[]).forEach(s=>{ if(s && s.kind && KINDS[s.kind] && s.data){
  STARTERS.push({ name:s.name||'Untitled', kind:s.kind, theme:s.theme||KINDS[s.kind].themes[0], make:()=>JSON.parse(JSON.stringify(s.data)) });
}});

/* ---------- content extract / rebuild (repurpose engine) ---------- */
function extractContent(kind, d){
  const n = { kicker:'', title:'', sub:'', bullets:[], metrics:[] };
  if(isDeckKind(kind)){
    const texts = [];
    (d.slides||[]).forEach(s=> (s.shapes||[]).forEach(sh=>{ if(sh.t==='text' && sh.tx && sh.tx.orig && sh.tx.orig.trim()) texts.push(sh.tx.orig.trim()); }));
    n.title = texts[0]||''; n.sub = texts[1]||''; n.bullets = texts.slice(2, 12);
    return n;
  }
  if(kind==='carousel'){
    const s0 = d.slides[0]||{}; n.kicker=s0.kicker||''; n.title=s0.title||''; n.sub=s0.body||'';
    d.slides.forEach(s=>{ if(s.items) n.bullets.push(...s.items); else if(s.type==='pattern' && s.title) n.bullets.push(s.title); });
  } else if(kind==='post'){
    n.kicker=d.kicker||''; n.title=d.title||''; n.sub=d.body||'';
    if(d.metric) n.metrics.push({ value:d.metric, label:plain(d.title||d.body||'') });
    if(d.attribution) n.sub = n.sub || d.attribution;
  } else if(kind==='banner'){
    n.kicker=d.kicker||''; n.title=d.title||''; n.sub=d.subtitle||'';
  } else if(kind==='onepager'){
    n.kicker=d.eyebrow||''; n.title=d.title||''; n.sub=d.intro||'';
    (d.features||[]).forEach(f=> n.bullets.push(f.desc ? `${f.title} — ${f.desc}` : f.title));
    n.metrics = clone(d.metrics||[]);
  } else if(kind==='proposal'){
    const c = d.pages.find(p=>p.type==='cover') || d.pages[0] || {};
    n.kicker=c.kicker||''; n.title=c.title||''; n.sub=c.subtitle||c.body||'';
    d.pages.forEach(p=>{ if(p.items) n.bullets.push(...p.items); if(p.metrics) n.metrics.push(...p.metrics); });
  }
  return n;
}
function buildFromContent(kind, n){
  const bl = n.bullets.length ? n.bullets : ['First point','Second point','Third point'];
  const mt = n.metrics.length ? n.metrics : [{value:'95%',label:'Accuracy in production'}];
  if(kind==='carousel') return { slides:[
    { type:'title', kicker:n.kicker||'Newtuple', title:n.title||'Headline', body:n.sub },
    { type:'list', kicker:'Highlights', title:'The key points', items:bl.slice(0,5) },
    { type:'closing', kicker:'Your turn', title:n.title||'Let’s talk.', body:'What would you build?', footLabel:'Follow Newtuple for more' } ] };
  if(kind==='post') return n.metrics.length
    ? { variant:'stat', kicker:n.kicker, metric:mt[0].value, title:plain(mt[0].label||''), body:n.sub }
    : { variant:'announcement', kicker:n.kicker, title:n.title||'Headline', body:n.sub, cta:'Talk to us' };
  if(kind==='banner') return { kicker:n.kicker, title:n.title||'Headline', subtitle:n.sub };
  if(kind==='onepager') return { eyebrow:n.kicker||'Overview', title:n.title||'Headline', intro:n.sub,
    features: bl.slice(0,4).map(b=>{ const [t,...r]=String(b).split(' — '); return { title:t||'Feature', desc:r.join(' — ') }; }),
    metrics: mt.slice(0,3), ctaText:'Build Your Agentic Enterprise.', ctaUrl:'newtuple.com' };
  if(kind==='proposal') return { pages:[
    { type:'cover', kicker:'Proposal', title:n.title||'Proposal', subtitle:n.sub, meta:'Prepared by Newtuple' },
    { type:'content', kicker:'Overview', title:'Highlights', body:n.sub, items:bl.slice(0,6) },
    { type:'metrics', kicker:'Impact', title:'Expected impact', body:'', metrics:mt.slice(0,4) },
    { type:'cta', kicker:'Next steps', title:'Let’s build it.', body:'', meta:'Talk to the Newtuple team', ctaUrl:'newtuple.com' } ] };
}

/* ---------- load an asset into the working state ---------- */
function loadAsset(kind, theme, data, overrides, markup, decor){
  pushUndo();
  state.kind = kind;
  state.theme = KINDS[kind].themes.includes(theme) ? theme : KINDS[kind].themes[0];
  state.data[kind] = clone(data);
  state.overrides[kind] = clone(overrides||{});
  state.markup[kind] = clone(markup||[]);
  state.decor[kind] = clone(decor||[]);
  state.active = 0; editorDeselect(); closeGallery(); renderAll();
}
function openEntry(e){ loadAsset(e.kind, e.theme, e.data, e.overrides, e.markup, e.decor); toast('Opened “'+e.name+'”'); }
function openStarter(s, theme){ loadAsset(s.kind, theme||s.theme, s.make()); toast('Opened “'+s.name+'”'); }
function openRepurposed(srcKind, srcData, targetKind){
  loadAsset(targetKind, state.theme, buildFromContent(targetKind, extractContent(srcKind, srcData)));
  toast('Repurposed into '+KINDS[targetKind].name);
}

/* ---------- save / manage ---------- */
function saveCurrentToLibrary(){
  const def = `${KINDS[state.kind].name} ${library.filter(e=>e.kind===state.kind).length+1}`;
  const name = prompt('Save to library as:', def); if(name==null) return;
  library.unshift({ id:uid(), name:name||def, kind:state.kind, theme:state.theme,
    data:clone(state.data[state.kind]), overrides:clone(state.overrides[state.kind]||{}),
    markup:clone(state.markup[state.kind]||[]), decor:clone(state.decor[state.kind]||[]), created:Date.now() });
  libPersist(); toast('Saved to library'); if(_gallery && _gallery.style.display!=='none') refreshGallery();
}
function duplicateEntry(e){ const c=clone(e); c.id=uid(); c.name=e.name+' copy'; c.created=Date.now();
  library.unshift(c); libPersist(); refreshGallery(); }
function renameEntry(e){ const nm=prompt('Rename asset:', e.name); if(nm==null) return; e.name=nm; libPersist(); refreshGallery(); }
function deleteEntry(e){ if(!confirm('Delete “'+e.name+'” from the library?')) return;
  library = library.filter(x=>x.id!==e.id); libPersist(); refreshGallery(); }

/* ---------- import / export ---------- */
function exportLibrary(){
  if(!library.length){ toast('Library is empty', true); return; }
  saveAs(new Blob([JSON.stringify({ version:1, library }, null, 2)], {type:'application/json'}), 'newtuple-brand-library.json');
}
function importLibrary(file){
  const rd = new FileReader();
  rd.onload = ()=>{ try {
    const obj = JSON.parse(rd.result); const items = Array.isArray(obj) ? obj : obj.library;
    if(!Array.isArray(items)) throw new Error('bad file');
    items.forEach(it=>{ if(it && it.kind && KINDS[it.kind]){ it.id=uid(); library.unshift(it); } });
    libPersist(); refreshGallery(); toast(`Imported ${items.length} asset(s)`);
  } catch(err){ toast('Import failed: '+(err.message||err), true); } };
  rd.readAsText(file);
}

/* ---------- gallery UI ---------- */
let _gallery = null;
function thumbEl(kind, data, theme, overrides){
  const fr = KINDS[kind].frames(data, theme)[0];
  const el = fr.build();
  applyOverridesTo(el, overrides||{});
  const W = 248, sc = W / fr.w;
  const box = h('div',{class:'lib-thumb', style:{width:W+'px', height:Math.round(fr.h*sc)+'px'}});
  box.appendChild(h('div',{style:{transformOrigin:'top left', transform:`scale(${sc})`, width:fr.w+'px', height:fr.h+'px'}}, [el]));
  return box;
}
function repurposeSelect(srcKind, srcData){
  const others = Object.keys(KINDS).filter(k=>k!==srcKind && !isDeckKind(k));
  return h('select',{class:'lib-repurpose', onchange:e=>{ const t=e.target.value; e.target.selectedIndex=0; if(t) openRepurposed(srcKind, srcData, t); }},
    [ h('option',{value:''}, 'Use as…'), ...others.map(k=>h('option',{value:k}, KINDS[k].name)) ]);
}
function card(opts){
  const c = h('div',{class:'lib-card'});
  c.appendChild(thumbEl(opts.kind, opts.data, opts.theme, opts.overrides));
  const frames = KINDS[opts.kind].frames(opts.data, opts.theme).length;
  c.appendChild(h('div',{class:'lib-badge'}, KINDS[opts.kind].name + (frames>1?` · ${frames}`:'')));
  c.appendChild(h('div',{class:'lib-meta'},[ h('div',{class:'lib-name'}, opts.name) ]));
  const row = h('div',{class:'lib-actions'});
  (opts.actions||[]).forEach(a=> row.appendChild(h('button',{class:'lib-act'+(a.cls?' '+a.cls:''), onclick:a.fn}, a.label)));
  row.appendChild(repurposeSelect(opts.kind, opts.data));
  c.appendChild(row);
  if(KINDS[opts.kind].themes.length>1){
    c.appendChild(h('div',{class:'lib-themes'},
      KINDS[opts.kind].themes.map(th=> h('button',{class:'lib-theme-pill'+(th===opts.theme?' on':''),
        title:'Open in '+(th==='dark'?'agentic dark':'light'), onclick:()=>opts.onTheme(th)}, th==='dark'?'Dark':'Light'))));
  }
  return c;
}
function refCard(ref){
  const c = h('div',{class:'lib-card lib-ref'});
  const src = ref.thumb || (ref.type==='image' ? ref.file : null);
  if(src){
    c.appendChild(h('div',{class:'lib-thumb lib-thumb-img'},
      [ h('img',{src, alt:ref.title, loading:'lazy'}) ]));
  } else {
    c.appendChild(h('div',{class:'lib-thumb lib-doc'}, [ h('div',{class:'lib-doc-ext'}, (ref.ext||'file').toUpperCase()) ]));
  }
  c.appendChild(h('div',{class:'lib-badge'}, ref.group==='approved' ? 'Approved' : 'Reference'));
  c.appendChild(h('div',{class:'lib-meta'},[ h('div',{class:'lib-name'}, ref.title) ]));
  const ed = refToEditable(ref);
  const rep = replicaFor(ref);
  const row = h('div',{class:'lib-actions'});
  if(rep) row.appendChild(h('button',{class:'lib-act primary', onclick:()=>previewRef(ref)}, 'Open replica'));
  if(ed) row.appendChild(h('button',{class:'lib-act'+(rep?'':' primary'), onclick:()=>{
    loadAsset(ed.kind, KINDS[ed.kind].themes[0], ed.deck ? ed.deck : KINDS[ed.kind].defaults());
    toast('Opened editable '+(ed.deck ? ed.deck.name || 'deck' : KINDS[ed.kind].name)); }}, 'Edit in Studio'));
  if(!rep) row.appendChild(h('button',{class:'lib-act'+(ed?'':' primary'), onclick:()=>previewRef(ref)}, 'Preview'));
  c.appendChild(row);
  return c;
}
/* faithful, exact HTML replica for an approved file (if one has been built) */
function replicaFor(ref){
  const t = ((ref.title||'')+' '+(ref.file||'')).toLowerCase();
  if(t.includes('pension') || (t.includes('proposal') && t.includes('contribution')))
    return '../Proposals/Pension-Proposal-Replica.html';
  return null;
}
/* an approved reference that has an editable Studio equivalent opens there, not the raw file */
function refToEditable(ref){
  const t = ((ref.title||'') + ' ' + (ref.file||'')).toLowerCase();
  const imp = window.NT_IMPORTED || {};
  // prefer the faithful editable import if one matches this reference
  for(const key in imp){
    const kk = key.toLowerCase();
    if((t.includes('pension') && kk.includes('pension')) ||
       (t.includes('proposal') && kk.includes('proposal')) ||
       (t.includes('fable') && kk.includes('fable')))
      return {kind:'imported', deck:imp[key]};
  }
  if(t.includes('onepager') || t.includes('one-pager') || t.includes('capability')) return {kind:'onepager'};
  return null;
}
/* in-app preview — never navigates the Studio away to the original file path */
function previewRef(ref){
  const ov = h('div',{class:'lib-lightbox', onclick:e=>{ if(e.target===ov) ov.remove(); }});
  const rep = replicaFor(ref);
  let media;
  if(rep) media = h('iframe',{src:rep, class:'lb-frame'});                              // exact multi-page replica
  else if(ref.type==='image') media = h('img',{src:ref.file, class:'lb-media', alt:ref.title});
  else if(ref.type==='pdf' || ref.type==='page') media = h('iframe',{src:ref.file, class:'lb-frame'});
  else media = h('img',{src:ref.thumb || ref.file, class:'lb-media', alt:ref.title}); // deck/doc → first-page thumbnail
  ov.appendChild(h('div',{class:'lb-card'},[
    h('div',{class:'lb-head'},[
      h('div',{class:'lb-title'}, ref.title),
      h('div',{class:'lb-head-actions'},[
        h('a',{class:'ghost-btn', href:ref.file, target:'_blank', rel:'noopener'}, 'Open original ↗'),
        h('button',{class:'ghost-btn', onclick:()=>ov.remove()}, 'Close ✕') ]) ]),
    media ]));
  document.body.appendChild(ov);
}
function buildGallery(){
  const overlay = h('div',{class:'lib-overlay', style:{display:'none'}, onclick:e=>{ if(e.target===overlay) closeGallery(); }});
  const fileInput = h('input',{type:'file', accept:'.json,application/json', style:{display:'none'},
    onchange:e=>{ if(e.target.files[0]) importLibrary(e.target.files[0]); e.target.value=''; }});
  overlay.appendChild(h('div',{class:'lib-panel'},[
    h('div',{class:'lib-head'},[
      h('div',{class:'lib-title'},[ h('span',{class:'lib-title-main'},'Brand library'),
        h('span',{class:'lib-title-sub nt-label'},'Reuse · repurpose · restyle') ]),
      h('div',{class:'lib-head-actions'},[
        h('button',{class:'ghost-btn', onclick:saveCurrentToLibrary}, '★ Save current'),
        h('button',{class:'ghost-btn', onclick:()=>fileInput.click()}, 'Import'),
        h('button',{class:'ghost-btn', onclick:exportLibrary}, 'Export'),
        h('button',{class:'ghost-btn lib-close', onclick:closeGallery}, 'Close ✕') ]) ]),
    fileInput,
    h('div',{class:'lib-body'},[
      h('div',{class:'rail-section-title nt-label'}, 'Starter collection'),
      h('div',{class:'lib-grid', id:'lib-grid-starters'}),
      h('div',{class:'rail-section-title nt-label', id:'lib-imported-title', style:{marginTop:'24px'}}, 'Imported decks (editable)'),
      h('div',{class:'lib-grid', id:'lib-grid-imported'}),
      h('div',{class:'rail-section-title nt-label', id:'lib-refs-title', style:{marginTop:'24px'}}, 'Approved references'),
      h('div',{class:'lib-grid', id:'lib-grid-refs'}),
      h('div',{class:'rail-section-title nt-label', style:{marginTop:'24px'}}, 'My library'),
      h('div',{class:'lib-grid', id:'lib-grid-mine'}) ]) ]));
  document.body.appendChild(overlay);
  _gallery = overlay;
}
function refreshGallery(){
  const gs = _gallery.querySelector('#lib-grid-starters'); gs.innerHTML='';
  STARTERS.forEach(s=>{ const data=s.make();
    gs.appendChild(card({ name:s.name, kind:s.kind, theme:s.theme, data,
      actions:[ {label:'Open', cls:'primary', fn:()=>openStarter(s)} ],
      onTheme:(th)=>openStarter(s, th) })); });
  const imp = window.NT_IMPORTED || {};
  const gi = _gallery.querySelector('#lib-grid-imported'), it = _gallery.querySelector('#lib-imported-title');
  gi.innerHTML = '';
  const impKeys = Object.keys(imp);
  if(!impKeys.length){ it.style.display='none'; gi.style.display='none'; }
  else { it.style.display=''; gi.style.display='';
    impKeys.forEach(key=>{ const deck = imp[key];
      gi.appendChild(card({ name:(deck.name||key), kind:'imported', theme:'light', data:deck,
        actions:[ {label:'Edit in Studio', cls:'primary', fn:()=>{ loadAsset('imported','light',deck); toast('Opened “'+(deck.name||key)+'”'); }} ],
        onTheme:()=>{} })); });
  }

  const refs = window.NT_REFERENCES || [];
  const gr = _gallery.querySelector('#lib-grid-refs'), rt = _gallery.querySelector('#lib-refs-title');
  gr.innerHTML='';
  if(!refs.length){ rt.style.display='none'; gr.style.display='none'; }
  else { rt.style.display=''; gr.style.display=''; refs.forEach(r=> gr.appendChild(refCard(r))); }

  const gm = _gallery.querySelector('#lib-grid-mine'); gm.innerHTML='';
  if(!library.length){ gm.appendChild(h('div',{class:'lib-empty'}, 'Nothing saved yet — design something, then “★ Save current”.')); }
  library.forEach(e=>{
    gm.appendChild(card({ name:e.name, kind:e.kind, theme:e.theme, data:e.data, overrides:e.overrides,
      actions:[ {label:'Open', cls:'primary', fn:()=>openEntry(e)},
                {label:'Duplicate', fn:()=>duplicateEntry(e)},
                {label:'Rename', fn:()=>renameEntry(e)},
                {label:'Delete', cls:'danger', fn:()=>deleteEntry(e)} ],
      onTheme:(th)=>{ loadAsset(e.kind, th, e.data, e.overrides, e.markup); toast('Opened “'+e.name+'” ('+th+')'); } })); });
}
function openGallery(){ if(!_gallery) buildGallery(); refreshGallery(); _gallery.style.display='flex'; }
function closeGallery(){ if(_gallery) _gallery.style.display='none'; }

/* ============================================================
   BOOT
   ============================================================ */
function toggleMarkup(btn){
  state.markupOn = !state.markupOn;
  btn.classList.toggle('on', state.markupOn);
  $('#stage').classList.toggle('markup-mode', state.markupOn);
  if(state.markupOn) editorDeselect();
  renderMarkup(_frameEl);
  toast(state.markupOn ? 'Markup on — click the design to drop a comment pin' : 'Markup off');
}
function resetAll(){
  if(!confirm('Reset this '+KINDS[state.kind].name+' to the brand template? Your tweaks on it will be cleared.')) return;
  pushUndo();
  state.data[state.kind] = KINDS[state.kind].defaults();
  state.overrides[state.kind] = {}; state.markup[state.kind] = [];
  editorDeselect(); renderAll(); persist();
  toast('Reset to template');
}
function buildStageControls(){
  const tools = document.querySelector('.stage-tools');
  const mk = (label,title,fn,id)=> h('button',{class:'ghost-btn', id, title, onclick:(e)=>fn(e.currentTarget)}, label);
  tools.prepend(
    mk('↺','Undo (⌘Z)', ()=>undo()),
    mk('↻','Redo (⇧⌘Z)', ()=>redo()),
    mk('Guides','Toggle safe-area & centre guides', toggleSafe, 'btn-safe'),
    mk('Check','Run a brand consistency check', ()=>runBrandCheck()),
    mk('Markup','Toggle review markup', toggleMarkup, 'btn-markup'),
    mk('Reset','Reset to brand template', resetAll)
  );
}
function boot(){
  $('#hdr-logo').src = A.logoCobalt;
  loadPersisted();
  libLoad();
  editorInitChrome();
  buildStageControls();
  $('#library-open').addEventListener('click', openGallery);
  /* optional deep-link: ?kind=onepager&theme=light */
  const q = new URLSearchParams(location.search);
  if(q.get('kind') && KINDS[q.get('kind')]) state.kind = q.get('kind');
  const qt = q.get('theme');
  if(qt && KINDS[state.kind].themes.includes(qt)) state.theme = qt;
  else if(!KINDS[state.kind].themes.includes(state.theme)) state.theme = KINDS[state.kind].themes[0];
  const pg = parseInt(q.get('page')); if(pg>0) state.active = pg-1;
  renderAll();
  $('#zoom-fit').addEventListener('click', ()=>{ _userZoom=null; fitStage(); });
  $('#zoom-in').addEventListener('click', ()=>setZoom(1.2));
  $('#zoom-out').addEventListener('click', ()=>setZoom(1/1.2));
  window.addEventListener('resize', ()=>{ fitStage(); positionChrome(); positionMulti(); });
  $('#stage').addEventListener('scroll', ()=>{ positionChrome(); positionMulti(); }, {passive:true});
  document.addEventListener('keydown', (e)=>{
    if(_editing) return;
    const ae = document.activeElement;
    const inField = ae && (ae.tagName==='INPUT' || ae.tagName==='TEXTAREA' || ae.tagName==='SELECT' || ae.isContentEditable);
    const meta = e.metaKey || e.ctrlKey;
    if(meta && e.key.toLowerCase()==='z'){ if(inField) return; e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
    if(inField) return;
    if(e.key==='Escape'){ editorDeselect(); return; }
    if(meta && e.key.toLowerCase()==='d'){ if(_selKind==='multi'){ e.preventDefault(); dupMulti(); } else if(_selKind==='shape'){ e.preventDefault(); shapeDup(); } else if(_selKind==='decor' && _selEl){ e.preventDefault(); duplicateDecor(); } return; }
    if(e.key==='Delete' || e.key==='Backspace'){ if(_selKind==='multi'){ e.preventDefault(); delMulti(); } else if(_selKind==='shape'){ e.preventDefault(); shapeDel(); } else if(_selKind==='decor' && _selEl){ e.preventDefault(); deleteDecor(); } return; }
    if((_selEl || _selKind==='multi') && e.key.indexOf('Arrow')===0){ e.preventDefault(); const s = e.shiftKey ? 10 : 1;
      if(e.key==='ArrowLeft') nudgeSel(-s,0); else if(e.key==='ArrowRight') nudgeSel(s,0);
      else if(e.key==='ArrowUp') nudgeSel(0,-s); else if(e.key==='ArrowDown') nudgeSel(0,s); }
  });
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
else boot();

})();
