export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="container-pad">
        <div className="max-w-2xl mx-auto reveal">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: 'var(--mint)', fontFamily: 'var(--font-inter)' }}
          >
            Our story
          </p>
          <h2
            className="font-display font-bold mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            It started with a bag of beans and a lot of overnight shifts.
          </h2>

          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
            Before nursing, I worked as a barista. That&apos;s where I fell in love with coffee. Not just
            drinking it, but understanding it. The origin, the processing, the way a single bean from
            Ethiopia tastes completely different than one from Mexico. It got under my skin in the best way.
          </p>
          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
            I went back to school, graduated nursing in 2015, and spent the next decade in critical care.
            ICUs, long nights, high stakes. Coffee was always there. Not just as fuel, but as a ritual.
            Something familiar in the middle of everything unpredictable.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
            I always wanted to build something of my own. After a conversation at home, the idea of roasting
            coffee finally clicked. Not just as a business, but as something that genuinely made sense for
            who I am.
          </p>

          <blockquote
            className="relative mb-8 pl-6"
            style={{ borderLeft: '3px solid var(--text-primary)' }}
          >
            <p
              className="text-lg leading-relaxed italic font-display"
              style={{ color: 'var(--text-primary)' }}
            >
              &ldquo;On Call Coffee brings together the two most impactful things in my working life:
              Coffee and nursing share the same core: human connection.&rdquo;
            </p>
          </blockquote>

          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
            I&apos;ve seen it in both. The conversation that happens over a cup. The moment someone feels
            seen, heard, cared for. A patient at 3am or a customer across the counter, that
            authentic connection is what makes the work worth doing.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
            On Call Coffee Co. is small-batch, intentional, and rooted in that same idea. Roasted here
            in Indiana, built around the belief that a good cup of coffee is one of the simplest ways
            to bring people together.
          </p>

          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Tomy Bruno, RN &nbsp;·&nbsp; Founder, On Call Coffee Co.
          </p>
        </div>
      </div>
    </section>
  )
}
