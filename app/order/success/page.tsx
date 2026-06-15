import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function OrderSuccess() {
  return (
    <div
      style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}
    >
      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
        {/* Logo */}
        <div style={{ height: '64px', width: '64px', borderRadius: '50%', overflow: 'hidden', position: 'relative', margin: '0 auto 28px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-on-call.png"
            alt="On Call Coffee Co."
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) scale(1.14)', width: '100%', height: 'auto' }}
          />
        </div>

        <CheckCircle size={48} color="var(--mint)" style={{ margin: '0 auto 20px' }} />

        <h1
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', letterSpacing: '-0.025em', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.15 }}
        >
          Order received.
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, marginBottom: '8px' }}>
          Your coffee is heading to the roaster now.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '36px' }}>
          You&apos;ll get a confirmation email shortly. Most orders ship within 48 hours of roasting.
        </p>

        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '18px 22px',
            marginBottom: '28px',
            textAlign: 'left',
          }}
        >
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Questions? Reply to your confirmation email or reach us at{' '}
            <a href="mailto:oncallcoffeeco@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              oncallcoffeeco@gmail.com
            </a>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/order" className="btn-primary" style={{ justifyContent: 'center', fontSize: '15px' }}>
            Order more coffee
          </Link>
          <Link
            href="/"
            style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', textAlign: 'center', padding: '10px' }}
          >
            Back to site
          </Link>
        </div>
      </div>
    </div>
  )
}
