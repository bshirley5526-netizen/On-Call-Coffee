import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Starter Site',
    price: '$999',
    tagline: 'Get online and look legit, fast.',
    description: 'One-page site, mobile-perfect, contact form + map. For businesses that need a clean, professional presence right now.',
    features: [
      'Single-page design',
      'Mobile responsive',
      'Contact form + Google Maps',
      'Basic on-page SEO',
      'Fast turnaround',
    ],
    cta: 'Send an email',
    featured: false,
    accent: '#5B7CFA',
  },
  {
    name: 'Storefront',
    price: '$1,200',
    listPrice: '$1,800',
    badge: 'Founding Client Rate',
    tagline: 'The full professional presence.',
    description: 'Multi-page site, custom design, lead and booking form, SEO basics. The standard for businesses ready to compete.',
    features: [
      'Up to 6 custom pages',
      'Custom design (no templates)',
      'Lead capture + booking form',
      'SEO foundations + local search',
      'Speed + performance optimized',
      'Ongoing support included',
    ],
    foundingNote: 'First 5 clients only — in exchange for a testimonial and permission to feature your site. Rate rises to $1,800 once slots fill.',
    cta: 'Claim a founding spot',
    featured: true,
    accent: '#5B7CFA',
  },
  {
    name: 'Full Brand + Site',
    price: '$3,500',
    tagline: 'Look like the leader in your market.',
    description: 'Everything in Storefront plus logo and brand polish, professional copywriting, and conversion add-ons. For businesses going all-in.',
    features: [
      'Everything in Storefront',
      'Logo + brand identity',
      'Professional copywriting',
      'Online booking integration',
      'Automated follow-up emails',
      'Smart contact + lead tools',
      'Priority support',
    ],
    cta: 'Send an email',
    featured: false,
    accent: '#2DE2C0',
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
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
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
            Simple pricing. No surprises.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Every project starts with a free preview. Email us and we&apos;ll
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
                  ? '1px solid #5B7CFA'
                  : '1px solid var(--border)',
                boxShadow: tier.featured
                  ? '0 0 48px rgba(91,124,250,0.18), 0 8px 32px rgba(0,0,0,0.2)'
                  : 'none',
              }}
            >
              {tier.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #5B7CFA, #2DE2C0)' }}
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
                      {tier.listPrice}
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
                      color={tier.featured ? '#5B7CFA' : '#2DE2C0'}
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
                    background: 'rgba(91,124,250,0.08)',
                    border: '1px solid rgba(91,124,250,0.18)',
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
          Not sure which tier is right? Send an email and we&apos;ll figure it out together.
        </p>
      </div>
    </section>
  )
}
