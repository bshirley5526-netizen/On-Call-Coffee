import { MessageSquare, Star, Package, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    body: 'We start with a conversation — your taste, your team, your occasion. No forms, no assumptions. We listen first.',
    accent: '#C4923E',
  },
  {
    number: '02',
    icon: Star,
    title: 'Curation',
    body: 'We hand-select the right roasts, service format, and delivery cadence for you specifically. Not a catalog pick — a considered recommendation.',
    accent: '#D4B896',
  },
  {
    number: '03',
    icon: Package,
    title: 'Delivery',
    body: 'Exceptional coffee arrives exactly when and where you need it. For events, we arrive early and leave nothing to chance.',
    accent: '#C4923E',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Refinement',
    body: 'We check in, adjust, and improve. Your coffee program evolves with your feedback. You\'re never stuck with something that doesn\'t work.',
    accent: '#D4B896',
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
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
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
            From first conversation to first sip.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A simple, tailored process so you know exactly what to expect — and can look forward to every step.
          </p>
        </div>

        {/* Steps — horizontal line connector on desktop */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, #C4923E, #D4B896)' }}
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
                      border: `1px solid rgba(${step.accent === '#C4923E' ? '196,146,62' : '212,184,150'},0.3)`,
                      boxShadow: `0 0 24px rgba(${step.accent === '#C4923E' ? '196,146,62' : '212,184,150'},0.15)`,
                    }}
                  >
                    <Icon size={26} color={step.accent} />
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: step.accent, fontSize: '10px', color: '#0A0806' }}
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
