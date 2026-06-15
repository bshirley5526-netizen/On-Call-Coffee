'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'When will my order ship?',
    a: 'We roast your beans within 48 hours of your order and ship the same day as roasting. Most orders arrive within 3–5 business days depending on your location.',
  },
  {
    q: 'How fresh is the coffee?',
    a: 'Very. We roast to order, so your bag isn\'t sitting on a shelf waiting. Coffee is at peak flavor 5–14 days after roasting, and we make sure yours arrives right in that window.',
  },
  {
    q: 'How does the subscription work?',
    a: 'You\'ll receive a curated tasting box every month: 3 bags of 6oz, rotated seasonally based on what\'s tasting best. You can pause or cancel anytime, no fees.',
  },
  {
    q: 'Can I choose my grind size?',
    a: 'Yes. Whole bean is the default (best for freshness), but we offer ground options: drip, French press, pour over, and espresso. Just select at checkout.',
  },
  {
    q: 'Do you ship everywhere?',
    a: 'We ship to all 50 US states. International shipping is coming soon, so join the email list and we\'ll let you know when it\'s live.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-200 reveal reveal-delay-${Math.min(index + 1, 4)}`}
      style={{
        background: 'var(--surface)',
        border: open ? '1px solid var(--text-primary)' : '1px solid var(--border)',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="font-display font-semibold text-base pr-4" style={{ color: 'var(--text-primary)' }}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          color="var(--text-muted)"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        />
      </button>
      <div
        className="accordion-content"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
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
        <div className="text-center mb-12 reveal">
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Common questions.
          </h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
        <div className="text-center mt-10 reveal">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Something else?{' '}
            <a href="mailto:hello@oncallcoffee.com" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Email us →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
