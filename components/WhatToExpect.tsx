import { MessageCircle, Star, Package, Shield, RefreshCw, User } from 'lucide-react'

const items = [
  {
    icon: MessageCircle,
    title: 'A conversation, not a questionnaire.',
    body: 'We start by listening. Tell us what you\'re after and we\'ll ask the right questions — no lengthy intake forms, no automated replies.',
  },
  {
    icon: Star,
    title: 'Curated to your taste, not a catalog.',
    body: 'Every selection is matched to your preferences. You don\'t pick from a generic menu — we curate for you specifically and explain why.',
  },
  {
    icon: Package,
    title: 'Delivered exactly when you need it.',
    body: 'No chasing restocks or managing suppliers. Your coffee arrives on your schedule, every time. For events, we arrive early and leave nothing to chance.',
  },
  {
    icon: Shield,
    title: 'No lock-in. Ever.',
    body: 'Monthly subscriptions pause or cancel anytime. Programs adjust as you grow. You\'re never stuck with something that doesn\'t work for you.',
  },
  {
    icon: RefreshCw,
    title: 'We refine until it\'s right.',
    body: 'After your first delivery or event, we follow up. We ask how it went, what to adjust, what to amplify. Your experience improves every time.',
  },
  {
    icon: User,
    title: 'A real person. Always.',
    body: 'Questions, adjustments, last-minute requests — you get a response, not a ticket number. Premium coffee deserves premium service.',
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
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
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
            No surprises. No compromises.
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
            Here&apos;s exactly what working with On Call Coffee looks like — from first contact to the first exceptional cup.
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
                    background: 'rgba(196,146,62,0.08)',
                    border: '1px solid rgba(196,146,62,0.15)',
                  }}
                >
                  <Icon size={20} color="#C4923E" />
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
