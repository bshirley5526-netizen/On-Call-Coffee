// PLACEHOLDER: Replace each card with a real client quote, name, role, and business as they come in.
// Never present fabricated quotes as real — these are structural placeholders only.

const placeholders = [
  { delay: 1 },
  { delay: 2 },
  { delay: 3 },
]

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C4923E" aria-hidden="true">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.435L7 8.895 3.91 10.505 4.5 7.07 2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-12 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            Client reviews
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Real words from real clients.
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              maxWidth: '460px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            First programs are underway. Reviews arrive here as they do —
            unedited, no fabricated praise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 reveal reveal-delay-${p.delay}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <StarRow />

              {/* Quote text skeleton */}
              <div style={{ marginBottom: '24px' }}>
                {[90, 100, 85, 70].map((w, j) => (
                  <div
                    key={j}
                    style={{
                      height: '9px',
                      width: `${w}%`,
                      borderRadius: '5px',
                      background: 'var(--border)',
                      marginBottom: '8px',
                      opacity: 1 - j * 0.12,
                    }}
                  />
                ))}
              </div>

              {/* Avatar + name skeleton */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--border)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      height: '9px',
                      width: '55%',
                      borderRadius: '5px',
                      background: 'var(--border)',
                      marginBottom: '7px',
                    }}
                  />
                  <div
                    style={{
                      height: '7px',
                      width: '40%',
                      borderRadius: '4px',
                      background: 'var(--border)',
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
