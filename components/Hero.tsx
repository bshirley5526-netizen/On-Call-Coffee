import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Ambient gradient orbs */}
      <div
        className="orb animate-[orb-float-1_14s_ease-in-out_infinite]"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(196,146,62,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="orb animate-[orb-float-2_18s_ease-in-out_infinite]"
        style={{
          width: '500px',
          height: '500px',
          bottom: '0%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(212,184,150,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #3A3028 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-pad w-full pt-40 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            Specialty-grade · Small-batch · On call
          </p>

          {/* H1 */}
          <h1
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            The coffee your{' '}
            <span style={{ color: '#C4923E' }}>standards</span>{' '}
            deserve.
          </h1>

          {/* Subline */}
          <p
            className="mx-auto mb-10 leading-relaxed"
            style={{
              maxWidth: '600px',
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              color: 'var(--text-muted)',
            }}
          >
            On Call Coffee delivers specialty-grade, hand-crafted coffee
            experiences — for your office, your event, or your morning ritual.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Reserve a consultation
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-secondary">
              Explore offerings
            </a>
          </div>

          {/* Trust line */}
          <p
            className="mt-8 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            Free consultation &middot; No commitment &middot; Available on call
          </p>
        </div>

        {/* Mockup — styled as a premium coffee website preview */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Glow behind mockup */}
          <div
            className="absolute inset-0 -m-6 rounded-3xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(196,146,62,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: 'rgba(17,16,9,0.95)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
              </div>
              <div
                className="flex-1 mx-4 px-3 py-1 rounded-md text-xs font-mono"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  maxWidth: '260px',
                }}
              >
                oncallcoffee.com
              </div>
            </div>

            {/* Simulated website preview */}
            <div
              className="relative"
              style={{
                height: '380px',
                background: 'var(--bg)',
                overflow: 'hidden',
              }}
            >
              {/* Fake hero gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, rgba(196,146,62,0.10) 0%, rgba(212,184,150,0.04) 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-start p-8 gap-8">
                {/* Left content */}
                <div className="flex-1 flex flex-col gap-4 pt-4">
                  <div className="h-3 w-20 rounded-full" style={{ background: 'rgba(196,146,62,0.3)' }} />
                  <div className="h-6 w-3/4 rounded-lg" style={{ background: 'rgba(196,146,62,0.25)' }} />
                  <div className="h-6 w-1/2 rounded-lg" style={{ background: 'rgba(196,146,62,0.15)' }} />
                  <div className="h-4 w-full rounded-md mt-2" style={{ background: 'var(--border)', opacity: 0.5 }} />
                  <div className="h-4 w-5/6 rounded-md" style={{ background: 'var(--border)', opacity: 0.4 }} />
                  <div className="h-4 w-2/3 rounded-md" style={{ background: 'var(--border)', opacity: 0.3 }} />
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-32 rounded-xl" style={{ background: 'rgba(196,146,62,0.7)' }} />
                    <div className="h-10 w-28 rounded-xl" style={{ background: 'var(--border)' }} />
                  </div>
                </div>
                {/* Right image placeholder */}
                <div
                  className="hidden sm:block w-48 h-48 rounded-2xl flex-shrink-0 mt-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(196,146,62,0.18), rgba(212,184,150,0.10))',
                    border: '1px solid var(--border)',
                  }}
                />
              </div>

              {/* Fake nav bar in mockup */}
              <div
                className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 h-12"
                style={{
                  borderBottom: '1px solid var(--border)',
                  background: 'rgba(8,6,4,0.85)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="h-4 w-24 rounded-md" style={{ background: 'rgba(196,146,62,0.4)' }} />
                <div className="hidden sm:flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-3 w-12 rounded-md" style={{ background: 'var(--border)' }} />
                  ))}
                </div>
                <div className="h-7 w-20 rounded-lg" style={{ background: 'rgba(196,146,62,0.5)' }} />
              </div>

              {/* Service cards row at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 flex gap-3 px-8 pb-6 pt-4"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex-1 h-16 rounded-xl"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      opacity: 1 - i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <div
          className="w-0.5 h-8 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(196,146,62,0.4), transparent)',
          }}
        />
      </div>
    </section>
  )
}
