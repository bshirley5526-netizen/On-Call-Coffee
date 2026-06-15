'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function SuccessContent() {
  const params = useSearchParams()
  const total = params.get('total')
  const id = params.get('id')
  const shortId = id ? id.slice(-8).toUpperCase() : null

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      {/* Check mark */}
      <div style={{
        width: '64px', height: '64px', borderRadius: '50%',
        background: 'var(--text-primary)', color: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 28px', fontSize: '28px',
      }}>
        ✓
      </div>

      <p className="font-display" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '10px' }}>
        Order confirmed
      </p>
      <h1 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
        Your coffee is on its way.
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
        We'll roast your order within 48 hours and ship it the same day.
        Check your email for a receipt and tracking info.
      </p>

      {(total || shortId) && (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', marginBottom: '32px' }}>
          {total && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: shortId ? '8px' : 0 }}>
              <span style={{ color: 'var(--text-muted)' }}>Amount charged</span>
              <span className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>${total}</span>
            </div>
          )}
          {shortId && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Order #</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'monospace' }}>{shortId}</span>
            </div>
          )}
        </div>
      )}

      <Link
        href="/"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--text-primary)', color: 'var(--bg)',
          textDecoration: 'none', padding: '12px 24px', borderRadius: '10px',
          fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-space-grotesk)',
        }}
      >
        Back to shop
      </Link>
    </div>
  )
}

export default function CheckoutSuccess() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Suspense>
        <SuccessContent />
      </Suspense>
    </div>
  )
}
