'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with corporate offices, restaurants, event venues, hotels, wedding planners, and private individuals who want exceptional coffee delivered. If you have a space and people who appreciate quality, we have a program for you.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve the greater Indianapolis area and surrounding regions for our corporate programs and event service. Our home delivery subscription ships nationwide. Reach out and we\'ll confirm availability for your location.',
  },
  {
    q: 'Can I customize my subscription?',
    a: 'Absolutely. We profile your palate preferences and match you to roasts you\'ll love — light, medium, dark, single-origin, or blended. You can update your preferences, pause, or cancel anytime. Most people stick around because the curation is that good.',
  },
  {
    q: 'What\'s included in the Office Program?',
    a: 'Weekly premium bean delivery (volume sized to your team), equipment recommendations and setup assistance, a brewing guide tailored to your setup, and priority restocks if you run low before your next delivery. All without a long-term contract.',
  },
  {
    q: 'What makes On Call Coffee different from other services?',
    a: 'We don\'t sell volume — we curate experience. Every selection is hand-chosen, every program is tailored to you specifically, and we don\'t source anything we wouldn\'t serve ourselves. Generic is easy. Exceptional takes intention.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'No lock-in. Cancel monthly subscriptions anytime with no fees — just give us 3 days before your next ship date. For office programs, we ask for 30 days notice. For event service, see our booking terms. We don\'t hold you hostage.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-200 reveal reveal-delay-${Math.min(index + 1, 4)}`}
      style={{
        background: 'var(--surface)',
        border: open ? '1px solid #C4923E' : '1px solid var(--border)',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span
          className="font-display font-semibold text-base pr-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          color="#C4923E"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </button>

      <div
        className="accordion-content"
        style={{
          maxHeight: open ? '400px' : '0',
          opacity: open ? 1 : 0,
        }}
      >
        <p
          className="px-6 pb-6 text-sm leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C4923E', fontFamily: 'var(--font-inter)' }}
          >
            FAQ
          </p>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Questions, answered.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Still have questions?{' '}
            <a
              href="mailto:hello@oncallcoffee.com"
              style={{ color: '#C4923E', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Email us directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
