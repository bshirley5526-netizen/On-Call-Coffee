import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function PaySuccess() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div style={{ maxWidth: '420px', width: '100%' }}>
        <div className="flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-new.png" alt="Synthesys" style={{ height: '36px' }} />
        </div>

        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(45,226,192,0.12)', border: '1px solid rgba(45,226,192,0.3)' }}
          >
            <CheckCircle size={32} color="#2DE2C0" />
          </div>
        </div>

        <h1
          className="font-display font-bold mb-3"
          style={{ fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          Deposit received.
        </h1>
        <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          You&apos;re officially in. I&apos;ll be in touch within 24 hours to get the
          project moving. Check your email for a receipt from Stripe.
        </p>

        <Link
          href="/"
          className="btn-secondary justify-center"
          style={{ display: 'inline-flex' }}
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
