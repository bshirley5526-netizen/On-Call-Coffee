import { Mail } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container-pad py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* TODO: replace with On Call Coffee logo */}
              <img
                src="/logo.png"
                alt="On Call Coffee"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-muted)', maxWidth: '280px' }}
            >
              {/* TODO: brand tagline */}
              [FOOTER_TAGLINE]
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = 'var(--text-primary)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'var(--text-muted)')
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              Get in touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Mail size={16} color="#5B7CFA" />
                <a
                  href="mailto:[CONTACT_EMAIL]"
                  className="text-sm transition-colors duration-150"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#5B7CFA')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--text-muted)')
                  }
                >
                  [CONTACT_EMAIL]
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            © {new Date().getFullYear()} On Call Coffee. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            {/* TODO: footer sign-off line */}
            [FOOTER_SIGNOFF]
          </p>
        </div>
      </div>
    </footer>
  )
}
