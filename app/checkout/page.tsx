'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowLeft, Lock, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '@/context/CartContext'

declare global {
  interface Window { Square: any }
}

const FREE_SHIP_THRESHOLD = 40
const SHIP_COST = 5.99

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY',
]

export default function CheckoutPage() {
  const { items, clear } = useCart()
  const router = useRouter()
  const [card, setCard] = useState<any>(null)
  const [sdkReady, setSdkReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [summaryOpen, setSummaryOpen] = useState(false)

  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [phone, setPhone]     = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity]       = useState('')
  const [usState, setUsState] = useState('')
  const [zip, setZip]         = useState('')

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const freeShip = subtotal >= FREE_SHIP_THRESHOLD
  const shipping = items.length === 0 ? 0 : freeShip ? 0 : SHIP_COST
  const total = subtotal + shipping

  useEffect(() => {
    if (items.length === 0) router.replace('/order')
  }, [items, router])

  useEffect(() => {
    if (!sdkReady) return
    ;(async () => {
      try {
        const appId = process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID!
        const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!
        const payments = window.Square.payments(appId, locationId)
        const cardInstance = await payments.card({
          style: {
            '.input-container': { borderColor: '#E2D6C8', borderRadius: '12px' },
            '.input-container.is-focus': { borderColor: '#1C1410' },
            '.input-container.is-error': { borderColor: '#c0392b' },
            '.message-text': { color: '#7A6A58' },
            '.message-icon': { color: '#7A6A58' },
            input: { backgroundColor: '#FFFFFF', color: '#1C1410', fontFamily: 'Inter, sans-serif', fontSize: '14px' },
            'input::placeholder': { color: '#B0A090' },
          },
        })
        await cardInstance.attach('#card-container')
        setCard(cardInstance)
      } catch (e) {
        console.error('Square init error:', e)
      }
    })()
  }, [sdkReady])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!card) return
    setLoading(true)
    setError('')
    try {
      const result = await card.tokenize()
      if (result.status !== 'OK') {
        setError(result.errors?.[0]?.message ?? 'Card error. Please try again.')
        setLoading(false)
        return
      }
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceId: result.token,
          amount: Math.round(total * 100),
          items: items.map(i => ({ name: i.name, qty: i.qty, grind: i.grind, price: i.price })),
          contact: { name, email, phone },
          shipping: { address1, address2, city, state: usState, zip },
        }),
      })
      const data = await res.json()
      if (data.paymentId) {
        clear()
        router.push(`/checkout/success?id=${data.paymentId}&total=${total.toFixed(2)}`)
      } else {
        setError(data.error ?? 'Payment failed. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const isSandbox = process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT !== 'production'
  const sdkUrl = isSandbox
    ? 'https://sandbox.web.squarecdn.com/v1/square.js'
    : 'https://web.squarecdn.com/v1/square.js'

  return (
    <>
      <Script src={sdkUrl} onLoad={() => setSdkReady(true)} />

      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
        {/* Header */}
        <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(248,244,238,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', paddingBottom: '14px' }}>
            <div style={{ height: '44px', width: '44px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-on-call.png" alt="On Call Coffee Co." style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) scale(1.14)', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={13} color="var(--text-muted)" />
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}>Secure checkout</span>
            </div>
            <Link href="/order" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--font-inter)' }}>
              <ArrowLeft size={13} /> Edit cart
            </Link>
          </div>
        </header>

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Collapsible order summary */}
          <button
            type="button"
            onClick={() => setSummaryOpen(o => !o)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 18px', cursor: 'pointer', marginBottom: '24px' }}
          >
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}>
              {summaryOpen ? 'Hide' : 'Show'} order summary ({items.reduce((s, i) => s + i.qty, 0)} item{items.reduce((s, i) => s + i.qty, 0) !== 1 ? 's' : ''})
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-display font-bold" style={{ color: 'var(--text-primary)', fontSize: '15px' }}>${total.toFixed(2)}</span>
              {summaryOpen ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
            </div>
          </button>

          {summaryOpen && (
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '14px' }}>
                {items.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>
                      {item.qty}× {item.name}{item.grind !== 'Whole Bean' && ` (${item.grind})`}
                    </span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>${(item.qty * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                  <span style={{ color: freeShip ? 'var(--mint)' : 'var(--text-primary)', fontWeight: 600 }}>
                    {freeShip ? 'Free' : `$${SHIP_COST.toFixed(2)}`}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="font-display font-bold" style={{ fontSize: '15px', color: 'var(--text-primary)' }}>Total</span>
                  <span className="font-display font-bold" style={{ fontSize: '15px', color: 'var(--text-primary)' }}>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Sandbox notice */}
            {isSandbox && (
              <div style={{ background: '#FFF8E7', border: '1px solid #F0C040', borderRadius: '12px', padding: '14px 18px' }}>
                <p style={{ fontSize: '12px', color: '#7A5800', fontWeight: 700, marginBottom: '3px' }}>Test mode — no real charges</p>
                <p style={{ fontSize: '12px', color: '#7A5800' }}>
                  Card: <strong>4111 1111 1111 1111</strong> · Any future date · Any CVV · Any ZIP
                </p>
              </div>
            )}

            {/* Contact */}
            <div>
              <h2 className="font-display font-bold" style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '14px' }}>Contact</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name" style={inputStyle} />
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" style={inputStyle} />
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone (optional)" style={inputStyle} />
              </div>
            </div>

            {/* Shipping address */}
            <div>
              <h2 className="font-display font-bold" style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '14px' }}>Shipping address</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input required value={address1} onChange={e => setAddress1(e.target.value)} placeholder="Street address" style={inputStyle} />
                <input value={address2} onChange={e => setAddress2(e.target.value)} placeholder="Apt, suite, unit (optional)" style={inputStyle} />
                <input required value={city} onChange={e => setCity(e.target.value)} placeholder="City" style={inputStyle} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <select required value={usState} onChange={e => setUsState(e.target.value)} style={{ ...inputStyle, color: usState ? 'var(--text-primary)' : '#B0A090' }}>
                    <option value="" disabled>State</option>
                    {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input required value={zip} onChange={e => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))} placeholder="ZIP code" style={inputStyle} />
                </div>
              </div>
            </div>

            {/* Card */}
            <div>
              <h2 className="font-display font-bold" style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '14px' }}>Payment</h2>
              <div
                id="card-container"
                style={{ minHeight: '89px', borderRadius: '12px', overflow: 'hidden' }}
              />
              {!card && sdkReady && (
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>Loading card input...</p>
              )}
            </div>

            {error && (
              <p style={{ fontSize: '13px', color: '#c0392b', textAlign: 'center' }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !card}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                fontSize: '16px', fontWeight: 700, padding: '16px', borderRadius: '12px',
                background: 'var(--text-primary)', color: 'var(--bg)', border: 'none',
                opacity: loading || !card ? 0.65 : 1,
                cursor: loading || !card ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--font-space-grotesk)',
                transition: 'opacity 0.2s',
              }}
            >
              <Lock size={15} />
              {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </button>

            <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>
              Your card details are encrypted by Square and never touch our server.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '12px',
  border: '1px solid var(--border)',
  background: 'var(--surface)',
  color: 'var(--text-primary)',
  fontSize: '14px',
  fontFamily: 'var(--font-inter)',
  outline: 'none',
  appearance: 'none',
}
