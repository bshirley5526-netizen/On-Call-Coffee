'use client'

import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import CoffeeBag from './CoffeeBag'
import { useCart } from '@/context/CartContext'

const products = [
  {
    id: 'huehue',
    name: 'Hue Hue',
    roast: 'Medium Roast',
    notes: 'Smooth Body · Milk Chocolate · Clean Finish',
    origin: 'Guatemala',
    price: 18,
    size: '12 oz',
    bg: '#EDE5D8',
    bagColor: '#A0714A',
    foldColor: '#8A5E3A',
    tag: null,
  },
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    roast: 'Light Roast',
    notes: 'Juicy · Floral · Blueberry Finish',
    origin: 'Ethiopia',
    price: 18,
    size: '12 oz',
    bg: '#F5EDE0',
    bagColor: '#C49A6A',
    foldColor: '#B48858',
    tag: 'Fan favorite',
  },
  {
    id: 'mandheling',
    name: 'Mandheling',
    roast: 'Dark Roast',
    notes: 'Bold · Earthy · Nutty',
    origin: 'Sumatra',
    price: 18,
    size: '12 oz',
    bg: '#DDD0C4',
    bagColor: '#4A2E18',
    foldColor: '#3A2210',
    tag: null,
  },
  {
    id: 'subscription',
    name: 'Tasting Box',
    roast: '3 rotating roasts',
    notes: 'Curated to your taste profile',
    origin: 'Curated Selection',
    price: 45,
    size: '3 × 6 oz',
    bg: '#F0E6D8',
    bagColor: '#8B5E3C',
    foldColor: '#7A4E2C',
    tag: 'Most popular',
  },
]

export default function Products() {
  const { addItem } = useCart()
  const router = useRouter()

  const handleAdd = (p: typeof products[number]) => {
    addItem({
      id: p.id, name: p.name, origin: p.origin, roast: p.roast,
      price: p.price, size: p.size, bg: p.bg, bagColor: p.bagColor, foldColor: p.foldColor,
    })
    router.push('/order')
  }

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {products.slice(0, 3).map((p, i) => (
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
                <CoffeeBag
                  name={p.name}
                  origin={p.origin}
                  roast={p.roast}
                  bagColor={p.bagColor}
                  foldColor={p.foldColor}
                />
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
                      ${p.price}
                    </span>
                    <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>{p.size}</span>
                  </div>
                  <button
                    onClick={() => handleAdd(p)}
                    className="text-xs font-semibold flex items-center gap-1"
                    style={{ background: 'var(--text-primary)', color: 'var(--bg)', border: 'none', borderRadius: '20px', padding: '6px 12px', cursor: 'pointer' }}
                  >
                    <Plus size={11} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription — full width */}
        {(() => { const sub = products[3]; return (
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col sm:flex-row reveal"
            style={{ border: '1px solid var(--border)', background: sub.bg }}
          >
            <span
              className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
            >
              {sub.tag}
            </span>

            <div className="flex items-center justify-center sm:w-64 flex-shrink-0" style={{ minHeight: '180px' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end' }}>
                {([products[0], products[1], products[2]] as typeof products).map((p, j) => (
                  <div key={p.id} style={{ transform: `rotate(${(j - 1) * 6}deg)`, transformOrigin: 'bottom center' }}>
                    <CoffeeBag
                      name={p.name}
                      origin={p.origin}
                      roast={p.roast}
                      bagColor={p.bagColor}
                      foldColor={p.foldColor}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--mint)' }}>
                {sub.origin}
              </p>
              <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {sub.name}
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                {sub.roast} · {sub.notes}
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                {sub.size} · Ships monthly · Cancel anytime
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <span className="font-display font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
                    ${sub.price}
                  </span>
                  <span className="text-sm ml-1" style={{ color: 'var(--text-muted)' }}>/month</span>
                </div>
                <button onClick={() => handleAdd(sub)} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  <Plus size={14} /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ); })()}
      </div>
    </section>
  )
}
