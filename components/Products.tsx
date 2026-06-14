import { ArrowRight } from 'lucide-react'

// PLACEHOLDER: Replace with real product photos and details.
const products = [
  {
    id: 'ethiopia',
    name: 'Ethiopia Yirgacheffe',
    roast: 'Light Roast',
    notes: 'Jasmine · Blueberry · Lemon zest',
    origin: 'Single Origin',
    price: '$18',
    size: '12 oz',
    bg: '#F5EDE0',
    tag: 'Fan favorite',
  },
  {
    id: 'colombia',
    name: 'Colombia Huila',
    roast: 'Medium Roast',
    notes: 'Caramel · Red apple · Almond',
    origin: 'Single Origin',
    price: '$17',
    size: '12 oz',
    bg: '#EDE5D8',
    tag: null,
  },
  {
    id: 'house',
    name: 'House Blend',
    roast: 'Medium Dark',
    notes: 'Dark chocolate · Walnut · Brown sugar',
    origin: 'Signature Blend',
    price: '$16',
    size: '12 oz',
    bg: '#E8DDD0',
    tag: null,
  },
  {
    id: 'midnight',
    name: 'The Midnight',
    roast: 'Dark Roast',
    notes: 'Bittersweet chocolate · Smoke · Molasses',
    origin: 'Espresso Blend',
    price: '$17',
    size: '12 oz',
    bg: '#DDD0C4',
    tag: 'Best for espresso',
  },
  {
    id: 'subscription',
    name: 'Monthly Tasting Box',
    roast: '3 rotating roasts',
    notes: 'Curated to your taste profile',
    origin: 'Curated Selection',
    price: '$45',
    size: '3 × 6 oz',
    bg: '#F0E6D8',
    tag: 'Most popular',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="section-pad"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="container-pad">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--mint)', fontFamily: 'var(--font-inter)' }}
            >
              The lineup
            </p>
            <h2
              className="font-display font-bold"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
            >
              Pick your roast.
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '320px' }}>
            All bags roasted within 48 hours of your order and shipped the same day.
          </p>
        </div>

        {/* Grid — 4 bags + 1 wide subscription */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {products.slice(0, 4).map((p, i) => (
            <div
              key={p.id}
              className={`relative rounded-2xl overflow-hidden reveal reveal-delay-${i + 1}`}
              style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
            >
              {/* Product visual placeholder */}
              <div
                className="relative flex items-center justify-center"
                style={{ height: '200px', background: p.bg }}
              >
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
                  >
                    {p.tag}
                  </span>
                )}
                {/* PLACEHOLDER: replace with real product image */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    className="font-display font-bold"
                    style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}
                  >
                    {p.roast}
                  </div>
                  <div
                    style={{
                      width: '72px',
                      height: '96px',
                      borderRadius: '8px',
                      background: 'rgba(28,20,16,0.12)',
                      margin: '0 auto',
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: '18px 20px' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--mint)' }}>
                  {p.origin}
                </p>
                <h3 className="font-display font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  {p.name}
                </h3>
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                  {p.notes}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                      {p.price}
                    </span>
                    <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>{p.size}</span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-semibold flex items-center gap-1"
                    style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                  >
                    Order <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription — full width */}
        {products[4] && (
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col sm:flex-row reveal"
            style={{ border: '1px solid var(--border)', background: products[4].bg }}
          >
            <span
              className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
            >
              {products[4].tag}
            </span>

            <div className="flex items-center justify-center sm:w-64 flex-shrink-0" style={{ minHeight: '180px' }}>
              {/* PLACEHOLDER: replace with subscription box image */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {[0, 1, 2].map((j) => (
                  <div
                    key={j}
                    style={{
                      width: '48px',
                      height: '72px',
                      borderRadius: '6px',
                      background: 'rgba(28,20,16,0.12)',
                      transform: `rotate(${(j - 1) * 5}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--mint)' }}>
                {products[4].origin}
              </p>
              <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {products[4].name}
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                {products[4].roast} · {products[4].notes}
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                {products[4].size} · Ships monthly · Cancel anytime
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <span className="font-display font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
                    {products[4].price}
                  </span>
                  <span className="text-sm ml-1" style={{ color: 'var(--text-muted)' }}>/month</span>
                </div>
                <a href="#contact" className="btn-primary">
                  Subscribe <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
