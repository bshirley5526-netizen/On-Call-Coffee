// PLACEHOLDER: Illustrative target occasions — not real client work.
// Each card represents the type of coffee experience On Call Coffee provides.
// Replace with real photos and testimonials as they come in.

const occasions = [
  {
    id: 'corporate',
    business: 'Executive Coffee Program',
    industry: 'Corporate & Office',
    outcome: 'Premium weekly coffee service that impresses every visitor',
    accentPrimary: '#E8A53A',
    accentSecondary: '#C4923E',
    bgFrom: 'rgba(232,165,58,0.14)',
    bgTo: 'rgba(196,146,62,0.07)',
    barColor: 'rgba(232,165,58,0.55)',
    barColorLight: 'rgba(232,165,58,0.25)',
    btnColor: 'rgba(232,165,58,0.75)',
  },
  {
    id: 'events',
    business: 'Signature Event Bar',
    industry: 'Private Events',
    outcome: 'Luxury barista experience that elevates your occasion',
    accentPrimary: '#D4B896',
    accentSecondary: '#C8A87A',
    bgFrom: 'rgba(212,184,150,0.14)',
    bgTo: 'rgba(200,168,122,0.07)',
    barColor: 'rgba(212,184,150,0.55)',
    barColorLight: 'rgba(212,184,150,0.25)',
    btnColor: 'rgba(212,184,150,0.65)',
  },
  {
    id: 'home',
    business: 'Home Roast Subscription',
    industry: 'Home Delivery',
    outcome: 'Single-origin curation delivered to your door monthly',
    accentPrimary: '#B8956A',
    accentSecondary: '#8A6A4A',
    bgFrom: 'rgba(184,149,106,0.14)',
    bgTo: 'rgba(138,106,74,0.07)',
    barColor: 'rgba(184,149,106,0.55)',
    barColorLight: 'rgba(184,149,106,0.25)',
    btnColor: 'rgba(184,149,106,0.75)',
  },
  {
    id: 'hospitality',
    business: 'Hospitality Partnership',
    industry: 'Hotel & Venue',
    outcome: 'White-label luxury coffee program for premium properties',
    accentPrimary: '#C4B090',
    accentSecondary: '#9A8A70',
    bgFrom: 'rgba(196,176,144,0.14)',
    bgTo: 'rgba(154,138,112,0.07)',
    barColor: 'rgba(196,176,144,0.55)',
    barColorLight: 'rgba(196,176,144,0.25)',
    btnColor: 'rgba(196,176,144,0.65)',
  },
]

export default function Portfolio() {
  return (
    <section
      id="work"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            Where we show up
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Exceptional coffee for every occasion.
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            From boardrooms to backyard gatherings — we bring premium coffee
            experiences to the moments that deserve them most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {occasions.map((p, i) => (
            <div
              key={p.id}
              className={`rounded-2xl overflow-hidden reveal reveal-delay-${i + 1}`}
              style={{
                border: '1px solid var(--border)',
                background: 'var(--surface)',
              }}
            >
              {/* Visual preview */}
              <div
                style={{
                  height: '220px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(145deg, ${p.bgFrom}, ${p.bgTo})`,
                }}
              >
                {/* Fake nav */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '36px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    justifyContent: 'space-between',
                    background: 'rgba(8,6,4,0.3)',
                  }}
                >
                  <div
                    style={{
                      height: '7px',
                      width: '56px',
                      borderRadius: '4px',
                      background: p.barColor,
                    }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {[40, 32, 44].map((w, j) => (
                      <div
                        key={j}
                        style={{
                          height: '5px',
                          width: `${w}px`,
                          borderRadius: '3px',
                          background: 'rgba(255,255,255,0.15)',
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      height: '22px',
                      width: '64px',
                      borderRadius: '6px',
                      background: p.btnColor,
                    }}
                  />
                </div>

                {/* Fake hero content */}
                <div
                  style={{
                    position: 'absolute',
                    top: '52px',
                    left: '20px',
                    right: '100px',
                  }}
                >
                  <div
                    style={{
                      height: '14px',
                      width: '65%',
                      borderRadius: '7px',
                      background: p.barColor,
                      marginBottom: '10px',
                    }}
                  />
                  <div
                    style={{
                      height: '10px',
                      width: '45%',
                      borderRadius: '5px',
                      background: p.barColorLight,
                      marginBottom: '14px',
                    }}
                  />
                  <div
                    style={{
                      height: '7px',
                      width: '90%',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.10)',
                      marginBottom: '6px',
                    }}
                  />
                  <div
                    style={{
                      height: '7px',
                      width: '78%',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.07)',
                      marginBottom: '6px',
                    }}
                  />
                  <div
                    style={{
                      height: '7px',
                      width: '55%',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.05)',
                      marginBottom: '18px',
                    }}
                  />
                  <div
                    style={{
                      height: '28px',
                      width: '96px',
                      borderRadius: '8px',
                      background: p.btnColor,
                    }}
                  />
                </div>

                {/* Right image block */}
                <div
                  style={{
                    position: 'absolute',
                    top: '44px',
                    right: '16px',
                    width: '72px',
                    bottom: '24px',
                    borderRadius: '12px',
                    background: `linear-gradient(160deg, ${p.barColor}, ${p.barColorLight})`,
                  }}
                />

                {/* Bottom cards row */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    gap: '8px',
                    padding: '0 16px 12px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '10px',
                  }}
                >
                  {[1, 2, 3].map((j) => (
                    <div
                      key={j}
                      style={{
                        flex: 1,
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.06)',
                        opacity: 1 - (j - 1) * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Card info */}
              <div
                style={{
                  padding: '20px 22px',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <div style={{ marginBottom: '8px' }}>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: p.accentPrimary }}
                  >
                    {p.industry}
                  </span>
                </div>
                <h3
                  className="font-display font-bold mb-1"
                  style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}
                >
                  {p.business}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {p.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-10 text-sm reveal"
          style={{ color: 'var(--text-muted)' }}
        >
          Ready to experience it yourself?{' '}
          <a
            href="#contact"
            style={{ color: '#C4923E', textDecoration: 'none' }}
          >
            Book a consultation →
          </a>
        </p>
      </div>
    </section>
  )
}
