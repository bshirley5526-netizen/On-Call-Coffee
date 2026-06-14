// PLACEHOLDER: Illustrative target verticals — not real clients.
// Each card represents the type of business Synthesys builds for.
// Replace mockup visuals, business name, and outcome copy with real client work as it ships.

const projects = [
  {
    id: 'salon',
    business: 'Bloom Salon Co.',
    industry: 'Salon & Spa',
    outcome: 'Designed to drive more booking requests',
    accentPrimary: '#F472B6',
    accentSecondary: '#A78BFA',
    bgFrom: 'rgba(244,114,182,0.14)',
    bgTo: 'rgba(167,139,250,0.07)',
    barColor: 'rgba(244,114,182,0.55)',
    barColorLight: 'rgba(244,114,182,0.25)',
    btnColor: 'rgba(244,114,182,0.75)',
  },
  {
    id: 'hvac',
    business: 'Peak HVAC & Plumbing',
    industry: 'Trades & Contractors',
    outcome: 'Built to capture leads around the clock',
    accentPrimary: '#3B82F6',
    accentSecondary: '#06B6D4',
    bgFrom: 'rgba(59,130,246,0.14)',
    bgTo: 'rgba(6,182,212,0.07)',
    barColor: 'rgba(59,130,246,0.55)',
    barColorLight: 'rgba(59,130,246,0.25)',
    btnColor: 'rgba(59,130,246,0.75)',
  },
  {
    id: 'restaurant',
    business: 'The Corner Table',
    industry: 'Restaurant & Café',
    outcome: 'Made to fill seats and tell the story',
    accentPrimary: '#F59E0B',
    accentSecondary: '#EF4444',
    bgFrom: 'rgba(245,158,11,0.14)',
    bgTo: 'rgba(239,68,68,0.07)',
    barColor: 'rgba(245,158,11,0.55)',
    barColorLight: 'rgba(245,158,11,0.25)',
    btnColor: 'rgba(245,158,11,0.75)',
  },
  {
    id: 'clinic',
    business: 'Elevate Wellness',
    industry: 'Clinic & Wellness',
    outcome: 'Crafted to build trust before first contact',
    accentPrimary: '#10B981',
    accentSecondary: '#14B8A6',
    bgFrom: 'rgba(16,185,129,0.14)',
    bgTo: 'rgba(20,184,166,0.07)',
    barColor: 'rgba(16,185,129,0.55)',
    barColorLight: 'rgba(16,185,129,0.25)',
    btnColor: 'rgba(16,185,129,0.75)',
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
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
          >
            Our work
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Built for businesses like yours.
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
            Premium, conversion-focused sites built for the industries
            that need to earn trust fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`rounded-2xl overflow-hidden reveal reveal-delay-${i + 1}`}
              style={{
                border: '1px solid var(--border)',
                background: 'var(--surface)',
              }}
            >
              {/* Simulated website preview */}
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
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    justifyContent: 'space-between',
                    background: 'rgba(255,255,255,0.04)',
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
                          background: 'rgba(255,255,255,0.18)',
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
                      background: 'rgba(255,255,255,0.12)',
                      marginBottom: '6px',
                    }}
                  />
                  <div
                    style={{
                      height: '7px',
                      width: '78%',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.08)',
                      marginBottom: '6px',
                    }}
                  />
                  <div
                    style={{
                      height: '7px',
                      width: '55%',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.06)',
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
                    borderTop: '1px solid rgba(255,255,255,0.06)',
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
                        background: 'rgba(255,255,255,0.07)',
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
                <div
                  style={{
                    marginBottom: '8px',
                  }}
                >
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
          Want to be next?{' '}
          <a
            href="#contact"
            style={{ color: '#5B7CFA', textDecoration: 'none' }}
          >
            Get a free preview →
          </a>
        </p>
      </div>
    </section>
  )
}
