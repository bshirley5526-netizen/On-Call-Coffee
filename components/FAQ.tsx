'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Projects start at $799 for a Starter Site and go up to $3,500+ for a Full Brand + Site package. We don\'t do hidden fees or surprise invoices. Every project is scoped and priced upfront before you commit to anything. The first step — a free homepage preview — costs you nothing.',
  },
  {
    q: 'How long does it take to build?',
    a: 'Most Starter Sites are live in 3–5 days. Storefront builds typically take 7–14 days depending on how much content we\'re working with. Full Brand + Site packages run 2–4 weeks. We move fast without cutting corners — and we keep you updated throughout.',
  },
  {
    q: 'I already have a website. Why would I switch?',
    a: 'If your site was built from a template, hasn\'t been updated in years, or just doesn\'t look like the business you\'ve actually built — it\'s quietly costing you customers. We\'ll mock up your new homepage for free so you can see the difference before you decide anything. You have nothing to lose.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Not much. We handle the design and layout. You\'ll need to provide: your logo (or let us create one), a brief about your business and services, any photos you have (or we can source professional stock), and your contact info. That\'s it. We do the rest.',
  },
  {
    q: 'Who owns the website after it\'s built?',
    a: 'You do. Completely. You get all the files, full ownership of the domain, and no lock-in. We don\'t hold your site hostage behind a platform subscription. Once you pay, it\'s yours to keep forever.',
  },
  {
    q: 'What about ongoing updates?',
    a: 'We offer ongoing support for all clients. Small edits and content updates are quick and affordable — most changes are handled within 24 hours. For bigger updates (new services, seasonal promotions, expanding pages), we quote individually. You\'re never left stranded after launch.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-200 reveal reveal-delay-${Math.min(index + 1, 4)}`}
      style={{
        background: 'var(--surface)',
        border: open ? '1px solid #5B7CFA' : '1px solid var(--border)',
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
          color="#5B7CFA"
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
            style={{ color: '#5B7CFA', fontFamily: 'var(--font-inter)' }}
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
              href="mailto:synthesyscontact@gmail.com"
              style={{ color: '#5B7CFA', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Email us directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
