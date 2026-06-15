'use client'

import { useState } from 'react'
import { Plus, Minus, ArrowRight, ArrowLeft, Lock, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import CoffeeBag from '@/components/CoffeeBag'

const GRIND_OPTIONS = ['Whole Bean', 'Drip', 'Pour Over', 'French Press', 'Espresso']
const FREE_SHIP_THRESHOLD = 40
const SHIP_COST = 5.99

export default function OrderPage() {
  const { items, setQty, setGrind } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const freeShip = subtotal >= FREE_SHIP_THRESHOLD
  const total = freeShip ? subtotal : subtotal > 0 ? subtotal + SHIP_COST : 0

  const checkout = async () => {
    if (!items.length) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({ id: i.id, name: i.name, grind: i.grind, qty: i.qty, price: i.price })),
          freeShip,
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(248,244,238,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', paddingBottom: '14px' }}>
          <div style={{ height: '44px', width: '44px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-on-call.png" alt="On Call Coffee Co." style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) scale(1.14)', width: '100%', height: 'auto' }} />
          </div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--font-inter)' }}>
            <ArrowLeft size={13} /> Back to shop
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ marginBottom: '36px' }}>
          <p className="font-display" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '10px' }}>
            On Call Coffee Co.
          </p>
          <h1 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: '10px' }}>
            Your Cart
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Roasted within 48 hours of your order and shipped the same day.
          </p>
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <ShoppingBag size={40} color="var(--border)" style={{ margin: '0 auto 16px' }} />
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Your cart is empty.</p>
            <Link href="/#products" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              Shop the roasts <ArrowRight size={15} />
            </Link>
          </div>
        )}

        {/* Cart items */}
        {items.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {items.map(item => (
              <div
                key={item.id}
                style={{ background: 'var(--surface)', border: '1px solid var(--text-primary)', borderRadius: '16px', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 18px' }}>
                  {/* Mini bag illustration */}
                  <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '70px', borderRadius: '10px', background: item.bg }}>
                    <CoffeeBag name={item.name} origin={item.origin} roast={item.roast} bagColor={item.bagColor} foldColor={item.foldColor} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="font-display font-bold" style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '2px' }}>{item.name}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.roast} · {item.origin} · {item.size}</p>
                  </div>

                  {/* Price + qty */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
                    <span className="font-display font-bold" style={{ fontSize: '15px', color: 'var(--text-primary)' }}>${item.price}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button onClick={() => setQty(item.id, item.qty - 1)} style={btnStyle(false)}>
                        <Minus size={11} />
                      </button>
                      <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '18px', textAlign: 'center', color: 'var(--text-primary)' }}>{item.qty}</span>
                      <button onClick={() => setQty(item.id, item.qty + 1)} style={btnStyle(true)}>
                        <Plus size={11} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grind selector */}
                <div style={{ padding: '0 18px 16px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', margin: '12px 0 8px' }}>
                    Grind
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {GRIND_OPTIONS.map(g => {
                      const active = item.grind === g
                      return (
                        <button
                          key={g}
                          onClick={() => setGrind(item.id, g)}
                          style={{
                            padding: '5px 11px', borderRadius: '20px', fontSize: '12px', fontWeight: 500,
                            border: `1px solid ${active ? 'var(--text-primary)' : 'var(--border)'}`,
                            background: active ? 'var(--text-primary)' : 'transparent',
                            color: active ? 'var(--bg)' : 'var(--text-muted)',
                            cursor: 'pointer', transition: 'all 0.15s',
                          }}
                        >
                          {g}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order summary */}
        {items.length > 0 && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px' }}>
            <h2 className="font-display font-bold" style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Order summary
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '16px' }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>
                    {item.qty}× {item.name}
                    {item.grind !== 'Whole Bean' && <span style={{ fontSize: '11px' }}> ({item.grind})</span>}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>${(item.qty * item.price).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                {freeShip
                  ? <span style={{ color: 'var(--mint)', fontWeight: 700 }}>Free</span>
                  : <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>${SHIP_COST.toFixed(2)}</span>
                }
              </div>
              {!freeShip && (
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Add ${(FREE_SHIP_THRESHOLD - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <span className="font-display font-bold" style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Total</span>
                <span className="font-display font-bold" style={{ fontSize: '16px', color: 'var(--text-primary)' }}>${total.toFixed(2)}</span>
              </div>
            </div>

            {error && (
              <p style={{ fontSize: '13px', color: '#c0392b', marginBottom: '12px', textAlign: 'center' }}>{error}</p>
            )}

            <button
              onClick={checkout}
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px', opacity: loading ? 0.65 : 1, cursor: loading ? 'not-allowed' : 'pointer', border: 'none' }}
            >
              {loading ? 'Redirecting to checkout...' : `Pay $${total.toFixed(2)}`}
              {!loading && <ArrowRight size={16} />}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px' }}>
              <Lock size={11} color="var(--text-muted)" />
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Secured by Square</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function btnStyle(filled: boolean): React.CSSProperties {
  return {
    width: '28px', height: '28px', borderRadius: '50%',
    border: `1px solid ${filled ? 'var(--text-primary)' : 'var(--border)'}`,
    background: filled ? 'var(--text-primary)' : 'transparent',
    color: filled ? 'var(--bg)' : 'var(--text-primary)',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, transition: 'all 0.15s',
  }
}
