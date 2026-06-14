import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg)', minHeight: '88vh', paddingTop: '80px' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,94,60,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container-pad">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: 'var(--mint)', fontFamily: 'var(--font-inter)' }}
        >
          Small-batch · Single origin · Roasted to order
        </p>

        <h1
          className="font-display font-bold leading-tight mb-6 mx-auto"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            maxWidth: '800px',
          }}
        >
          Coffee worth waking up for.
        </h1>

        <p
          className="mx-auto mb-10"
          style={{
            maxWidth: '480px',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
          }}
        >
          Hand-selected single-origin roasts, shipped fresh within 48 hours of roasting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products" className="btn-primary">
            Shop the roasts
            <ArrowRight size={16} />
          </a>
          <a href="#about" className="btn-secondary">
            Our story
          </a>
        </div>
      </div>

      {/* Divider fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />
    </section>
  )
}
