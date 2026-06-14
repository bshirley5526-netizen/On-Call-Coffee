import { Globe, Palette, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    badge: 'The hero offer',
    title: 'Custom Storefront Websites',
    body: 'Premium, fast, mobile-perfect sites designed to convert. Every pixel deliberate. Every page built to make a stranger trust you in five seconds.',
    outcome: 'A storefront that sells while you sleep.',
    accent: '#5B7CFA',
    featured: true,
  },
  {
    icon: Palette,
    badge: 'Polish',
    title: 'Brand & Design Polish',
    body: 'Logo refresh, consistent colors and fonts, professional imagery — so every touchpoint looks intentional and every first impression lands.',
    outcome: 'Look established from the first glance.',
    accent: '#2DE2C0',
    featured: false,
  },
  {
    icon: Zap,
    badge: 'Add-on',
    title: 'Conversion Add-ons',
    body: 'Online booking, lead capture forms, automated follow-ups, and smart contact tools. The extras that turn your site from a brochure into a sales machine.',
    outcome: 'Turn clicks into booked customers — automatically.',
    accent: '#A78BFA',
    featured: false,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
          >
            What we build
          </p>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            One focus. Done properly.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'var(--surface)',
                  border: s.featured
                    ? `1px solid ${s.accent}`
                    : '1px solid var(--border)',
                  boxShadow: s.featured
                    ? `0 0 40px rgba(91,124,250,0.15), 0 4px 24px rgba(0,0,0,0.2)`
                    : 'none',
                }}
              >
                {s.featured && (
                  <div
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #5B7CFA, #2DE2C0)' }}
                  >
                    Most requested
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: `rgba(${
                      s.accent === '#5B7CFA' ? '91,124,250' :
                      s.accent === '#2DE2C0' ? '45,226,192' : '167,139,250'
                    },0.12)`,
                    border: `1px solid rgba(${
                      s.accent === '#5B7CFA' ? '91,124,250' :
                      s.accent === '#2DE2C0' ? '45,226,192' : '167,139,250'
                    },0.25)`,
                  }}
                >
                  <Icon size={22} color={s.accent} />
                </div>

                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: s.accent, fontFamily: 'var(--font-inter)' }}
                >
                  {s.badge}
                </span>

                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {s.title}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {s.body}
                </p>

                <div
                  className="flex items-center gap-2 pt-5"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <ArrowRight size={14} color={s.accent} />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: s.accent, fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {s.outcome}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
