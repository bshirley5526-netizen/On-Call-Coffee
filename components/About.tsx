import { CheckCircle } from 'lucide-react'

const values = [
  'Hand-crafted for your business, never copy-pasted.',
  'Fast turnaround because your time matters.',
  'No agency bloat. No retainers. Just results.',
  "I'm not done until it brings you customers.",
]

export default function About() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

          {/* Logo panel */}
          <div className="lg:col-span-2 reveal">
            <div
              className="relative rounded-2xl overflow-hidden w-full flex items-center justify-center"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(160deg, rgba(91,124,250,0.12) 0%, rgba(45,226,192,0.07) 100%)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(91,124,250,0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  opacity: 0.5,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-new.png"
                alt="Synthesys"
                style={{ position: 'relative', zIndex: 1, width: '70%', maxWidth: '220px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
            >
              Why Synthesys
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
              Built by someone who&apos;s tired of small businesses being overlooked.
            </h2>

            <div
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              <p className="mb-4">
                Too many great businesses lose customers to worse competitors — not because
                they do worse work, but because their website makes them look that way.
                You&apos;ve built something real. You show up, do the job right, and care
                about every customer. Your website should say the same thing the moment
                someone lands on it.
              </p>
              <p className="mb-4">
                Synthesys exists because I genuinely believe every business that works hard
                deserves to look the part. Not a template with your name swapped in — a
                real, crafted presence that earns trust and brings people through the door.
              </p>
              <p>
                The bar I hold every project to: a stranger should trust you in five seconds
                and want to reach out in ten.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="mb-8 pl-5 text-base italic leading-relaxed"
              style={{
                color: 'var(--text-primary)',
                borderLeft: '2px solid #5B7CFA',
              }}
            >
              &ldquo;I&apos;m not here to sell you a website. I&apos;m here to make sure
              the quality of your work is actually visible to the people looking for it.&rdquo;
            </blockquote>

            <ul className="grid sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    color="#5B7CFA"
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
