import { Eye, CreditCard, Clock, Shield, Globe, MessageCircle } from 'lucide-react'

const items = [
  {
    icon: Eye,
    title: 'You see it before you commit.',
    body: "We mock up your new homepage for free — no payment, no pressure. You get a real look at what your site could be before deciding anything.",
  },
  {
    icon: CreditCard,
    title: '50% to start. 50% on launch.',
    body: 'Half upfront to kick things off, the rest when you\'re happy and ready to go live. You never pay in full before seeing the finished product.',
  },
  {
    icon: Clock,
    title: 'Live in under two weeks.',
    body: 'Most builds ship in days, not months. No waiting around in an agency queue. You tell me your goals and I move fast.',
  },
  {
    icon: Shield,
    title: 'You own everything.',
    body: 'The site, the code, the domain — all yours. Once you\'re paid up, I transfer the whole project to your account. No lock-in, no strings.',
  },
  {
    icon: Globe,
    title: 'Hosting costs almost nothing.',
    body: 'Your site runs on Vercel — free for most small businesses. Your only ongoing cost is your domain, usually around $12 a year.',
  },
  {
    icon: MessageCircle,
    title: 'Just send an email to get started.',
    body: "Tell me a little about your business and what you're looking for. I'll reply personally, and if it makes sense, we can jump on a quick call from there.",
  },
]

export default function WhatToExpect() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
          >
            What to expect
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            No surprises. No fine print.
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Here&apos;s exactly what working together looks like — from first contact to your site going live.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: 'rgba(91,124,250,0.08)',
                    border: '1px solid rgba(91,124,250,0.15)',
                  }}
                >
                  <Icon size={20} color="#5B7CFA" />
                </div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
