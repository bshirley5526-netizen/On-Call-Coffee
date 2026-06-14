'use client'

import { useState } from 'react'
import { ArrowRight, Lock } from 'lucide-react'

const tiers = [
  { name: 'Starter Site', deposit: 500, description: '50% deposit — $999 total' },
  { name: 'Storefront', deposit: 600, description: '50% deposit — $1,200 founding rate' },
  { name: 'Full Brand + Site', deposit: 1750, description: '50% deposit — $3,500 total' },
  { name: 'Custom', deposit: 0, description: 'Enter a custom amount' },
]

export default function PayPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [clientName, setClientName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedTier = tiers.find((t) => t.name === selected)
  const amount =
    selected === 'Custom'
      ? parseFloat(customAmount) || 0
      : selectedTier?.deposit || 0

  const handlePay = async () => {
    if (!selected || amount < 1) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, tier: selected, clientName }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div style={{ maxWidth: '480px', width: '100%' }}>
        {/* Logo */}
        <div className="flex justify-center mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-new.png" alt="Synthesys" style={{ height: '36px' }} />
        </div>

        <h1
          className="font-display font-bold text-center mb-2"
          style={{ fontSize: '1.9rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          Pay your deposit
        </h1>
        <p className="text-center mb-10 text-sm" style={{ color: 'var(--text-muted)' }}>
          50% now to kick things off. The rest when you&apos;re live and happy.
        </p>

        {/* Your name */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Your name or business
          </label>
          <input
            type="text"
            placeholder="e.g. Bloom Salon Co."
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              outline: 'none',
            }}
          />
        </div>

        {/* Tier selection */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Select your package
          </label>
          <div className="flex flex-col gap-3">
            {tiers.map((tier) => (
              <button
                key={tier.name}
                onClick={() => setSelected(tier.name)}
                className="w-full text-left px-4 py-4 rounded-xl transition-all duration-150"
                style={{
                  background: selected === tier.name ? 'rgba(91,124,250,0.08)' : 'var(--surface)',
                  border: selected === tier.name ? '1px solid #5B7CFA' : '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-display font-semibold text-sm"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {tier.name}
                  </span>
                  {tier.deposit > 0 && (
                    <span
                      className="font-display font-bold"
                      style={{ color: '#5B7CFA', fontSize: '1.05rem' }}
                    >
                      ${tier.deposit.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {tier.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Custom amount input */}
        {selected === 'Custom' && (
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Deposit amount (USD)
            </label>
            <div className="relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                $
              </span>
              <input
                type="number"
                min="1"
                placeholder="0.00"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-xl text-sm"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        )}

        {error && (
          <p className="text-sm mb-4 text-center" style={{ color: '#ef4444' }}>
            {error}
          </p>
        )}

        <button
          onClick={handlePay}
          disabled={!selected || amount < 1 || loading}
          className="btn-primary w-full justify-center"
          style={{
            opacity: !selected || amount < 1 || loading ? 0.5 : 1,
            cursor: !selected || amount < 1 || loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading
            ? 'Redirecting to payment...'
            : amount > 0
            ? `Pay $${amount.toLocaleString()} securely`
            : 'Select a package above'}
          {!loading && <ArrowRight size={16} />}
        </button>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Lock size={12} color="var(--text-muted)" />
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Secured by Stripe. Your card details never touch our server.
          </p>
        </div>
      </div>
    </main>
  )
}
