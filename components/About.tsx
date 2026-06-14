export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="container-pad">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: 'var(--mint)', fontFamily: 'var(--font-inter)' }}
          >
            Our story
          </p>
          <h2
            className="font-display font-bold mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Built on a refusal to drink bad coffee.
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            On Call Coffee started with a simple conviction: good coffee shouldn&apos;t be
            hard to find. We source directly from small farms, roast in small batches,
            and ship immediately — so what arrives at your door is as close to the
            roaster as you can get without being there.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            No middlemen. No sitting in a warehouse. Just exceptional coffee, available
            whenever you need it.
          </p>
        </div>
      </div>
    </section>
  )
}
