import { Building2, Calendar, Package, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Building2,
    badge: 'The signature offer',
    title: 'Corporate Coffee Programs',
    body: 'Curated premium coffee for your office — from weekly bean delivery to full equipment programs. We make sure every meeting, every morning, and every client visit leaves a lasting impression.',
    outcome: 'Elevate every meeting room.',
    accentHex: '#C4923E',
    accentRgb: '196,146,62',
    featured: true,
  },
  {
    icon: Calendar,
    badge: 'Special occasions',
    title: 'Private Event Service',
    body: 'A luxury barista experience for your wedding, launch event, private dinner, or corporate gathering. We bring the craft, the equipment, and the showmanship — you take the credit.',
    outcome: 'An impression they won\'t forget.',
    accentHex: '#D4B896',
    accentRgb: '212,184,150',
    featured: false,
  },
  {
    icon: Package,
    badge: 'Daily ritual',
    title: 'Home Delivery Subscription',
    body: 'Small-batch, single-origin roasts curated to your palate and delivered on your schedule. No compromises. No guesswork. Just exceptional coffee, exactly when you want it.',
    outcome: 'World-class coffee, at your door.',
    accentHex: '#B8956A',
    accentRgb: '184,149,106',
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
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            What we offer
          </p>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            One focus. Done exceptionally.
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
                    ? `1px solid ${s.accentHex}`
                    : '1px solid var(--border)',
                  boxShadow: s.featured
                    ? `0 0 40px rgba(${s.accentRgb},0.15), 0 4px 24px rgba(0,0,0,0.3)`
                    : 'none',
                }}
              >
                {s.featured && (
                  <div
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #C4923E, #D4B896)',
                      color: '#0A0806',
                    }}
                  >
                    Most requested
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: `rgba(${s.accentRgb},0.12)`,
                    border: `1px solid rgba(${s.accentRgb},0.25)`,
                  }}
                >
                  <Icon size={22} color={s.accentHex} />
                </div>

                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: s.accentHex, fontFamily: 'var(--font-inter)' }}
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
                  <ArrowRight size={14} color={s.accentHex} />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: s.accentHex, fontFamily: 'var(--font-space-grotesk)' }}
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
