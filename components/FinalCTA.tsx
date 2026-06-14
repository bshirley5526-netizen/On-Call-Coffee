import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container-pad">
        <div
          className="rounded-3xl p-12 md:p-16 text-center reveal"
          style={{ background: 'var(--text-primary)' }}
        >
          <h2
            className="font-display font-bold mb-4 mx-auto"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--bg)',
              letterSpacing: '-0.025em',
              maxWidth: '600px',
              lineHeight: '1.2',
            }}
          >
            Your next great cup is one order away.
          </h2>
          <p className="mb-8 mx-auto" style={{ maxWidth: '400px', fontSize: '1rem', color: 'rgba(248,244,238,0.6)', lineHeight: '1.7' }}>
            Roasted fresh. Shipped fast. No subscription required.
          </p>
          <a href="#products" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl" style={{ background: 'var(--bg)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '15px', fontFamily: 'var(--font-space-grotesk)' }}>
            Shop the roasts <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
