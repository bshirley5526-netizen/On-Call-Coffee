import { CheckCircle } from 'lucide-react'

const values = [
  'Small-batch sourced. Hand-curated. Never generic.',
  'Premium quality at every price point — no compromises.',
  'Flexible programs with zero long-term lock-in.',
  'We\'re not done until the cup exceeds your expectations.',
]

export default function About() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

          {/* Logo panel */}
          <div className="lg:col-span-2 reveal">
            <div
              className="relative rounded-2xl overflow-hidden w-full flex items-center justify-center"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(160deg, rgba(196,146,62,0.10) 0%, rgba(212,184,150,0.05) 100%)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(196,146,62,0.12) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  opacity: 0.5,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-stacked-clean.png"
                alt="On Call Coffee"
                style={{ position: 'relative', zIndex: 1, width: '70%', maxWidth: '220px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
            >
              Why On Call Coffee
            </p>

            <h2
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Built by someone who refuses to drink average coffee.
            </h2>

            <div
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              <p className="mb-4">
                On Call Coffee started with a simple refusal: to accept that good coffee had to
                be inconvenient, and that convenient coffee had to be mediocre. Too many
                extraordinary moments — important meetings, milestone events, quiet mornings
                that set the tone for everything that follows — are marked by forgettable coffee.
              </p>
              <p className="mb-4">
                So On Call Coffee does one thing, properly: delivers premium, specialty-grade
                coffee experiences wherever you need them. Every program, every event, every
                delivery is curated by hand — not sourced from the lowest bidder and rebranded.
              </p>
              <p>
                The standard is simple: the coffee you serve should be worth remembering. No
                compromise on quality. No settling for the default. Just exceptional coffee,
                available when you need it.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="mb-8 pl-5 text-base italic leading-relaxed"
              style={{
                color: 'var(--text-primary)',
                borderLeft: '2px solid #C4923E',
              }}
            >
              &ldquo;The coffee you serve says something about you before you say a word.&rdquo;
            </blockquote>

            <ul className="grid sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    color="#C4923E"
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
