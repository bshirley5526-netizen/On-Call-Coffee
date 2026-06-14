import { AlertCircle, EyeOff, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: EyeOff,
    title: 'You blend in.',
    body: 'In a crowded market, looking like everyone else means getting skipped. Your competitor with the sharper site wins, even if their work is worse.',
  },
  {
    icon: TrendingDown,
    title: 'Every bounce is a lost customer.',
    body: 'A visitor who leaves in 3 seconds didn\'t give you a chance. A dated or generic site signals: "we\'re not serious." They choose someone else.',
  },
  {
    icon: AlertCircle,
    title: 'Your site doesn\'t reflect your business.',
    body: 'You\'ve built something real. Your website doesn\'t show it. The gap between the quality of your work and how it looks online is costing you trust.',
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
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
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
            Your website is quietly losing you customers.
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}
          >
            In a market where everyone&apos;s fighting for attention online, a forgettable
            website isn&apos;t neutral. It&apos;s a liability. The difference between getting
            chosen and getting skipped is often just how you look at first glance.
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
                    background: 'rgba(91,124,250,0.1)',
                    border: '1px solid rgba(91,124,250,0.2)',
                  }}
                >
                  <Icon size={22} color="#5B7CFA" />
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
            &ldquo;Your business is better than your website makes it look —
            and that&apos;s costing you.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
