import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Daily Ritual',
    price: '$45',
    tagline: 'Exceptional coffee, every morning.',
    description: 'Monthly delivery of two curated single-origin bags (12oz each), matched to your taste profile. Free shipping, cancel anytime.',
    features: [
      'Two 12oz bags per month',
      'Flavor profile matching',
      'Single-origin, small-batch roasts',
      'Free shipping',
      'Pause or cancel anytime',
    ],
    cta: 'Start my subscription',
    featured: false,
    accent: '#C4923E',
  },
  {
    name: 'Office Program',
    price: '$199',
    listPrice: '$299',
    badge: 'Founding Client Rate',
    tagline: 'Make every meeting memorable.',
    description: 'Premium weekly coffee service for teams up to 10. Includes equipment setup, brewing guide, and same-week restocks if you run low.',
    features: [
      'Weekly premium bean delivery',
      'Equipment setup + recommendations',
      'Brewing guide + team onboarding',
      'Priority restocks on demand',
      'Dedicated account support',
      'Monthly taste rotation',
    ],
    foundingNote: 'First 5 clients only — in exchange for a testimonial and permission to feature your program. Rate rises to $299/mo once spots fill.',
    cta: 'Reserve a program',
    featured: true,
    accent: '#C4923E',
  },
  {
    name: 'Event Service',
    price: '$750',
    tagline: 'An impression that lingers.',
    description: 'Private barista experience for your event — weddings, launches, dinners, and corporate gatherings. Full setup and teardown included.',
    features: [
      'Private barista for up to 4 hours',
      'Specialty espresso bar setup',
      'Curated menu for your occasion',
      'All equipment provided',
      'Setup and teardown included',
      'Up to 80 guests',
    ],
    cta: 'Book an event',
    featured: false,
    accent: '#D4B896',
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            Pricing
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Straightforward pricing. Exceptional coffee.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Every engagement starts with a free consultation. Reach out and we&apos;ll
            scope exactly what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-7 reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--surface)',
                border: tier.featured
                  ? '1px solid #C4923E'
                  : '1px solid var(--border)',
                boxShadow: tier.featured
                  ? '0 0 48px rgba(196,146,62,0.18), 0 8px 32px rgba(0,0,0,0.3)'
                  : 'none',
              }}
            >
              {tier.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #C4923E, #D4B896)',
                    color: '#0A0806',
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {tier.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {tier.tagline}
                </p>

                {'listPrice' in tier ? (
                  <div>
                    <span
                      className="text-sm font-medium line-through"
                      style={{ color: 'var(--text-muted)', marginRight: '8px' }}
                    >
                      {tier.listPrice}/mo
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span
                        className="text-xs font-medium"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        from
                      </span>
                      <span
                        className="font-display font-bold"
                        style={{
                          fontSize: '2.4rem',
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {tier.price}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>/mo</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      from
                    </span>
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: '2.4rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {tier.price}
                    </span>
                    {tier.name !== 'Event Service' && (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>/mo</span>
                    )}
                  </div>
                )}
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'var(--text-muted)' }}
              >
                {tier.description}
              </p>

              <ul className="flex flex-col gap-3 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={16}
                      color={tier.featured ? '#C4923E' : '#D4B896'}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {'foundingNote' in tier && (
                <div
                  className="mb-6 p-3 rounded-xl text-xs leading-relaxed"
                  style={{
                    background: 'rgba(196,146,62,0.08)',
                    border: '1px solid rgba(196,146,62,0.18)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tier.foundingNote}
                </div>
              )}

              <a
                href="#contact"
                className={tier.featured ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                style={{ textAlign: 'center' }}
              >
                {tier.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm reveal"
          style={{ color: 'var(--text-muted)' }}
        >
          Not sure which is right for you? Reach out and we&apos;ll figure it out together.
        </p>
      </div>
    </section>
  )
}
