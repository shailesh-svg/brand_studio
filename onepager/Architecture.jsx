/* eslint-disable */
/**
 * Hub-and-spoke architecture diagram.
 * Boxes are real DOM (so PPTX export keeps text editable);
 * connectors are an SVG overlay positioned over the same coordinate space.
 */

const ARCH_W = 1160;
const ARCH_H = 640;

function ArchitectureDiagram({ accent, labelMode, density }) {
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
  const COL_C_W = ARCH_W - 320 * 2;   // ~520

  // Center column rows
  const TOP_Y = 0;            // Human-review card
  const TOP_H = 96;
  const HUB_Y = 130;          // Cobalt hub
  const HUB_H = 282;
  const BOT_Y = 440;          // Model layer
  const BOT_H = 72;
  const OUT_Y = 540;          // Output strip
  const OUT_H = 60;

  // Left input cards
  const inputCards = [
    {
      label: 'Capture sources',
      items: ['Mobile · Forms · IoT', 'Field operations · sensors'],
    },
    {
      label: 'Enterprise systems',
      items: ['EDW · ERP · CRM · DAM', 'Auth · workflow · storage'],
    },
    {
      label: 'External signals',
      items: ['Documents · APIs · streams', 'Reference data · market'],
    },
  ];

  // Right outcome cards. two label modes
  const outcomeLabels = {
    capabilities: [
      { label: 'Extraction',     desc: 'parse · normalize · enrich' },
      { label: 'Classification', desc: 'taxonomy · tagging' },
      { label: 'Matching',       desc: 'dedup · canonicalize' },
      { label: 'Ranking',        desc: 'confidence · priority' },
      { label: 'Review',         desc: 'queue · escalate · approve' },
      { label: 'Audit',          desc: 'event log · evidence chain' },
    ],
    outcomes: [
      { label: 'Governed decisions', desc: 'every action gated on confidence' },
      { label: 'Reduced exceptions', desc: 'patterns learned and resolved' },
      { label: 'Faster cycle time',  desc: 'discovery → production in weeks' },
      { label: 'Measurable quality', desc: 'evals attached to every release' },
      { label: 'Full audit coverage',desc: '100% trace, AI + human + system' },
      { label: 'Production scale',   desc: 'workloads that run, not demos' },
    ],
  }[labelMode];

  // Vertical layout for left column (3 cards in COL_L_W × ARCH_H box)
  const leftPad = 60;
  const leftCardH = (ARCH_H - leftPad * 2 - 40) / 3;       // 3 cards w/ small gaps
  const leftGap = 20;
  const leftCardY = (i) => leftPad + i * (leftCardH + leftGap);

  // Vertical layout for right column (6 cards)
  const rightPad = 30;
  const rightGap = density === 'compact' ? 10 : 16;
  const rightCardH = (ARCH_H - rightPad * 2 - rightGap * 5) / 6;
  const rightCardY = (i) => rightPad + i * (rightCardH + rightGap);

  // ── connector anchor points (in diagram coords) ───────────────────────
  const hubCx = COL_C_X + COL_C_W / 2;
  const hubLeftX = COL_C_X;
  const hubRightX = COL_C_X + COL_C_W;
  const hubTopY = HUB_Y;
  const hubBotY = HUB_Y + HUB_H;
  const hubMidY = HUB_Y + HUB_H / 2;

  return (
    <div className="arch-wrap">
      <div className="arch-inner" style={{ width: ARCH_W, height: ARCH_H, position: 'relative' }}>

        {/* ───────── LEFT COLUMN. inputs ───────── */}
        {inputCards.map((card, i) => (
          <div
            key={i}
            className="arch-card arch-card--input"
            style={{
              position: 'absolute',
              left: COL_L_X,
              top: leftCardY(i),
              width: COL_L_W,
              height: leftCardH,
            }}
          >
            <div className="arch-card__label">{card.label}</div>
            {card.items.map((it, j) => (
              <div key={j} className="arch-card__item">{it}</div>
            ))}
          </div>
        ))}

        {/* ───────── CENTER TOP. human review ───────── */}
        <div
          className="arch-card arch-card--review"
          style={{ position: 'absolute', left: COL_C_X, top: TOP_Y, width: COL_C_W, height: TOP_H }}
        >
          <div className="arch-card__label arch-card__label--accent">Human review workflow</div>
          <div className="arch-card__item arch-card__item--lg">Review · approve · refine · regenerate</div>
          <div className="arch-card__item arch-card__item--muted">GREEN · YELLOW · RED escalation</div>
        </div>

        {/* ───────── CENTER HUB. cobalt orchestration ───────── */}
        <div
          className="arch-card arch-card--hub"
          style={{
            position: 'absolute', left: COL_C_X, top: HUB_Y, width: COL_C_W, height: HUB_H,
            background: cobalt,
          }}
        >
          <div className="arch-card__eyebrow">AI ENGINEERING CAPABILITY</div>
          <div className="arch-card__title">Client-owned<br/>orchestration layer</div>
          <div className="arch-hub__divider" />
          <div className="arch-hub__row">Model routing  ·  prompts  ·  retrieval</div>
          <div className="arch-hub__row">Rules  ·  confidence scoring  ·  evals</div>
          <div className="arch-hub__row">Human review  ·  audit trail</div>
          <div className="arch-hub__row">APIs  ·  monitoring  ·  policy controls</div>
        </div>

        {/* ───────── CENTER BOTTOM. model layer ───────── */}
        <div
          className="arch-card arch-card--input"
          style={{ position: 'absolute', left: COL_C_X, top: BOT_Y, width: COL_C_W, height: BOT_H }}
        >
          <div className="arch-card__label">Model layer</div>
          <div className="arch-card__item">LLMs · translation engines · vision models · BYOM</div>
        </div>

        {/* ───────── OUTPUT STRIP ───────── */}
        <div
          className="arch-card arch-card--output"
          style={{
            position: 'absolute', left: COL_C_X, top: OUT_Y, width: COL_C_W, height: OUT_H,
            background: cobaltDark,
          }}
        >
          <div className="arch-card__eyebrow arch-card__eyebrow--light">GOVERNED OUTPUT  ·  AUDIT TRAIL  ·  MEASURABLE RESULT</div>
          <div className="arch-card__item arch-card__item--onDark">Retailer feeds · D2C · marketplaces · downstream systems</div>
        </div>

        {/* ───────── RIGHT COLUMN. outcomes / capabilities ───────── */}
        {outcomeLabels.map((card, i) => (
          <div
            key={i}
            className="arch-card arch-card--outcome"
            style={{
              position: 'absolute',
              left: COL_R_X,
              top: rightCardY(i),
              width: COL_R_W,
              height: rightCardH,
            }}
          >
            <div className="arch-card__num">{String(i + 1).padStart(2, '0')}</div>
            <div className="arch-outcome__body">
              <div className="arch-card__heading">{card.label}</div>
              <div className="arch-card__item arch-card__item--tight">{card.desc}</div>
            </div>
          </div>
        ))}

        {/* ───────── CONNECTORS (SVG overlay) ───────── */}
        <svg
          className="arch-svg"
          viewBox={`0 0 ${ARCH_W} ${ARCH_H}`}
          width={ARCH_W}
          height={ARCH_H}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          <defs>
            <marker id="ar-cobalt" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={arrowColor} />
            </marker>
            <marker id="ar-gray" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={dataArrowColor} />
            </marker>
          </defs>

          {/* INPUTS → HUB (gray, data flowing in) */}
          {[0, 1, 2].map((i) => {
            const y = leftCardY(i) + leftCardH / 2;
            const startX = COL_L_X + COL_L_W;
            const endX = hubLeftX;
            const targetY = hubMidY + (i - 1) * 60;
            const mid = (startX + endX) / 2;
            return (
              <path
                key={`l${i}`}
                d={`M ${startX} ${y} C ${mid} ${y}, ${mid} ${targetY}, ${endX - 2} ${targetY}`}
                fill="none"
                stroke={dataArrowColor}
                strokeWidth={1.8}
                markerEnd="url(#ar-gray)"
              />
            );
          })}

          {/* HUB → OUTCOMES (cobalt, AI fanning out) */}
          {outcomeLabels.map((_, i) => {
            const y = rightCardY(i) + rightCardH / 2;
            const startX = hubRightX;
            const endX = COL_R_X;
            const sourceY = hubMidY + (i - 2.5) * 22;
            const mid = (startX + endX) / 2;
            return (
              <path
                key={`r${i}`}
                d={`M ${startX + 2} ${sourceY} C ${mid} ${sourceY}, ${mid} ${y}, ${endX - 2} ${y}`}
                fill="none"
                stroke={arrowColor}
                strokeWidth={1.6}
                markerEnd="url(#ar-cobalt)"
                opacity={0.9}
              />
            );
          })}

          {/* HUB ↔ HUMAN REVIEW (above, vertical) */}
          <path
            d={`M ${hubCx} ${hubTopY} L ${hubCx} ${TOP_Y + TOP_H + 4}`}
            stroke={arrowColor} strokeWidth={2} fill="none"
            markerEnd="url(#ar-cobalt)" markerStart="url(#ar-cobalt)"
          />

          {/* HUB → MODEL LAYER (below) */}
          <path
            d={`M ${hubCx} ${hubBotY} L ${hubCx} ${BOT_Y - 4}`}
            stroke={arrowColor} strokeWidth={2} fill="none"
            markerEnd="url(#ar-cobalt)" markerStart="url(#ar-cobalt)"
          />

          {/* MODEL → OUTPUT */}
          <path
            d={`M ${hubCx} ${BOT_Y + BOT_H} L ${hubCx} ${OUT_Y - 4}`}
            stroke={dataArrowColor} strokeWidth={2} fill="none"
            markerEnd="url(#ar-gray)"
          />
        </svg>
      </div>
    </div>
  );
}

window.ArchitectureDiagram = ArchitectureDiagram;
