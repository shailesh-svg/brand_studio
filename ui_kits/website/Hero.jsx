/* Hero — dark agentic backdrop (grid bg image), big ExtraLight headline */
function Hero() {
  useLucide();
  return (
    <header style={{
      position: 'relative', overflow: 'hidden',
      background: '#02020A', minHeight: 660,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <img src="../../assets/carousel-bg.png" alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center 35%',
      }} />
      {/* readability veil */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,2,10,.55) 0%, rgba(2,2,10,.1) 45%, rgba(2,2,10,.35) 100%)' }} />
      <Nav />
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '120px 32px 80px', maxWidth: 980 }}>
        <div style={{ marginBottom: 22 }}><Kicker onDark>Generative AI Experts</Kicker></div>
        <h1 style={{
          margin: 0, fontWeight: 200, fontSize: 60, lineHeight: 1.08,
          letterSpacing: '-0.02em', color: '#fff',
        }}>
          Build Your{' '}
          <span style={{
            fontWeight: 200,
            background: 'linear-gradient(90deg,#8FB4FF,#00B8D9)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>Agentic Enterprise.</span>
          <br />Ship Production-Grade Intelligence.
        </h1>
        <p style={{
          margin: '28px auto 0', maxWidth: 640, fontWeight: 300, fontSize: 19,
          lineHeight: 1.65, color: 'rgba(255,255,255,0.74)',
        }}>
          We help organizations deploy reliable &amp; scalable AI agents and applications.
          Every engineer codes with AI agents. Every PM is AI-augmented. We've done this for years.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36 }}>
          <Button variant="primary" icon="arrow-right">Talk to Our Experts</Button>
          <Button variant="secondary" onDark>Explore Accelerators</Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Hero });
