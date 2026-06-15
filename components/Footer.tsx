import { Mail } from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '#products' },
  { label: 'Our Story', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container-pad py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-on-call.png" alt="On Call Coffee Co." style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '12px' }} />
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Small-batch coffee. Roasted to order.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm"
                    style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Contact
            </h4>
            <a
              href="mailto:hello@oncallcoffee.com"
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Mail size={14} />
              hello@oncallcoffee.com
            </a>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} On Call Coffee Co. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Roasted fresh. Shipped fast.
          </p>
        </div>
      </div>
    </footer>
  )
}
