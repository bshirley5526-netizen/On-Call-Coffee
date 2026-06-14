import { Gift, Map, Hammer, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Gift,
    title: 'Free Preview',
    body: 'We mock up your new homepage — no strings attached, no payment required. You see exactly what you\'re getting before you commit to anything.',
    accent: '#5B7CFA',
  },
  {
    number: '02',
    icon: Map,
    title: 'Blueprint',
    body: 'We lock in the look, the pages, and the goals. A clear plan so there are no surprises — you know what\'s being built and why.',
    accent: '#2DE2C0',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    body: 'We ship a premium, fully responsive site — usually in days, not weeks. Fast without cutting corners. Every detail hand-crafted.',
    accent: '#5B7CFA',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch + Support',
    body: 'You go live. We make sure everything runs sharp. Edits, updates, and questions — handled. Your site stays current as your business grows.',
    accent: '#2DE2C0',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
          >
            How it works
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            From first look to live site.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A simple, fast process designed so you always know what&apos;s happening.
          </p>
        </div>

        {/* Steps — horizontal line connector on desktop */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, #5B7CFA, #2DE2C0)' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className={`flex flex-col items-center text-center lg:items-start lg:text-left reveal reveal-delay-${i + 1}`}
                >
                  {/* Icon circle */}
                  <div
                    className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={{
                      background: 'var(--surface)',
                      border: `1px solid ${step.accent}40`,
                      boxShadow: `0 0 24px ${step.accent}20`,
                    }}
                  >
                    <Icon size={26} color={step.accent} />
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: step.accent, fontSize: '10px' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-xl mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {step.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
