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
              background: 'radial-gradient(ellipse at center, rgba(91,124,250,0.12) 0%, transparent 65%)',
            }}
          />

          {/* Accent lines */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
            style={{ background: 'linear-gradient(to bottom, #5B7CFA, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16"
            style={{ background: 'linear-gradient(to top, #2DE2C0, transparent)' }}
          />

          <div className="relative z-10">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
            >
              Ready to stand out?
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
              Stand out.{' '}
              <span style={{ color: '#5B7CFA' }}>Get chosen.</span>{' '}
              Win the customer.
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
              Get a free mockup of your new homepage — no strings, no payment.
              See exactly what your business could look like before you commit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-primary">
                Get a free preview of your new website
                <ArrowRight size={16} />
              </a>
              <a href="#process" className="btn-secondary">
                See how it works
              </a>
            </div>

            <p
              className="mt-8 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Free preview · No card required · Yours to keep
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
