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
              style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
            >
              Free consultation
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
              Tell us what you&apos;re
              looking for.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)', maxWidth: '440px' }}
            >
              Whether it&apos;s your office, your event, or your morning ritual —
              we&apos;ll find the right coffee program for you. No pushy sales,
              no generic recommendations.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { label: 'Free consultation', desc: 'We talk first, then we curate.' },
                { label: 'No commitment required', desc: 'Explore your options with zero pressure.' },
                { label: 'Fast response', desc: 'We\'ll be in touch within 24 hours.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C4923E, #D4B896)' }}
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
