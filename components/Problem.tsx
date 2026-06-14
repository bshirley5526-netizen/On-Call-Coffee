import { AlertCircle, EyeOff, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: EyeOff,
    title: 'You\'re settling without knowing it.',
    body: 'Most coffee programs, event setups, and morning routines default to whatever\'s convenient. Convenient and exceptional are rarely the same thing.',
  },
  {
    icon: TrendingDown,
    title: 'The wrong coffee sends the wrong signal.',
    body: 'What you serve speaks — to your team, your clients, your guests. The quality in the cup says something about your standards everywhere else.',
  },
  {
    icon: AlertCircle,
    title: 'Good coffee isn\'t a luxury. Ordinary is a waste.',
    body: 'Life is short. The minutes spent drinking something forgettable are minutes that could have been extraordinary. The upgrade is closer than you think.',
  },
]

export default function Problem() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            The problem
          </p>
          <h2
            className="font-display font-bold mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Ordinary coffee is everywhere. It doesn&apos;t have to be yours.
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}
          >
            Most people default to whatever&apos;s easiest — generic pods, bulk drip,
            catered mediocrity. Exceptional coffee is rarer than it should be.
            The difference between forgettable and unforgettable is just knowing where to look.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className={`card reveal reveal-delay-${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: 'rgba(196,146,62,0.10)',
                    border: '1px solid rgba(196,146,62,0.20)',
                  }}
                >
                  <Icon size={22} color="#C4923E" />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>

        {/* Pull quote */}
        <div
          className="mt-16 p-8 rounded-2xl text-center reveal"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <p
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;Life is too short to drink unremarkable coffee.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
