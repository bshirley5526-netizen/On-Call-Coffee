import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="reveal">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
            >
              Free homepage preview
            </p>
            <h2
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              See what your new site
              could look like — free.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)', maxWidth: '440px' }}
            >
              Fill in the form and we&apos;ll mock up your homepage at no cost, no
              strings attached. If you love it, we&apos;ll talk about the rest. If
              you don&apos;t — keep the mockup anyway.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { label: 'No payment required', desc: 'The preview is completely free.' },
                { label: 'Fast turnaround', desc: 'We\'ll reach out within 48 hours.' },
                { label: 'No pressure', desc: 'The mockup is yours to keep either way.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #5B7CFA, #2DE2C0)' }}
                  />
                  <div>
                    <p
                      className="font-semibold text-sm mb-0.5"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl p-8 reveal reveal-delay-2"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
