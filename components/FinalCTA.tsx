import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center reveal"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(196,146,62,0.10) 0%, transparent 65%)',
            }}
          />

          {/* Accent lines */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
            style={{ background: 'linear-gradient(to bottom, #C4923E, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16"
            style={{ background: 'linear-gradient(to top, #D4B896, transparent)' }}
          />

          <div className="relative z-10">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
            >
              Ready to experience better coffee?
            </p>

            <h2
              className="font-display font-bold mb-6 mx-auto"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                maxWidth: '800px',
                lineHeight: '1.15',
              }}
            >
              Exceptional coffee.{' '}
              <span style={{ color: '#C4923E' }}>Wherever you are.</span>
            </h2>

            <p
              className="mb-10 mx-auto"
              style={{
                maxWidth: '520px',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
              }}
            >
              Book a free consultation and we&apos;ll build the perfect coffee program
              for your office, your event, or your morning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-primary">
                Reserve a consultation
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-secondary">
                Explore offerings
              </a>
            </div>

            <p
              className="mt-8 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Free consultation &middot; No commitment &middot; Ships nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
