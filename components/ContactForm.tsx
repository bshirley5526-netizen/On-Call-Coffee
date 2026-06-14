'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  fontSize: '15px',
  fontFamily: 'var(--font-inter)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    website: '',
    email: '',
    message: '',
  })

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.businessName.trim()) e.businessName = 'Business name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Tell us about your goals'
    return e
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setState('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        if (data.fallback) {
          window.location.href = `mailto:synthesyscontact@gmail.com?subject=Free Preview Request from ${encodeURIComponent(form.businessName)}&body=${encodeURIComponent(`Name: ${form.name}\nBusiness: ${form.businessName}\nEmail: ${form.email}\nWebsite: ${form.website}\n\nGoals:\n${form.message}`)}`
        }
        setSubmittedEmail(form.email)
        setState('success')
        setForm({ name: '', businessName: '', website: '', email: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      // Fallback to mailto if fetch fails
      window.location.href = `mailto:synthesyscontact@gmail.com?subject=Free Preview Request from ${form.businessName}&body=Name: ${form.name}%0ABusiness: ${form.businessName}%0AEmail: ${form.email}%0AWebsite: ${form.website}%0A%0AGoals:%0A${form.message}`
      setState('success')
    }
  }

  if (state === 'success') {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center"
        style={{ minHeight: '400px' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(45,226,192,0.15)', border: '1px solid rgba(45,226,192,0.3)' }}
        >
          <CheckCircle size={32} color="#2DE2C0" />
        </div>
        <h3
          className="font-display font-bold text-2xl mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          You&apos;re on the list.
        </h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
          We&apos;ll start working on your free homepage preview and reach out within 48 hours.
          Keep an eye on {submittedEmail || 'your inbox'}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
          >
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            autoComplete="name"
            style={{
              ...inputStyle,
              borderColor: errors.name ? '#EF4444' : undefined,
            }}
            onFocus={(e) => (e.target.style.borderColor = '#5B7CFA')}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.name ? '#EF4444' : 'var(--border)')
            }
          />
          {errors.name && (
            <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
          >
            Business name *
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Bloom Salon Co."
            autoComplete="organization"
            style={{
              ...inputStyle,
              borderColor: errors.businessName ? '#EF4444' : undefined,
            }}
            onFocus={(e) => (e.target.style.borderColor = '#5B7CFA')}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.businessName ? '#EF4444' : 'var(--border)')
            }
          />
          {errors.businessName && (
            <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>
              {errors.businessName}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
          >
            Your email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@yourbusiness.com"
            autoComplete="email"
            style={{
              ...inputStyle,
              borderColor: errors.email ? '#EF4444' : undefined,
            }}
            onFocus={(e) => (e.target.style.borderColor = '#5B7CFA')}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.email ? '#EF4444' : 'var(--border)')
            }
          />
          {errors.email && (
            <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
          >
            Current website{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            placeholder="https://yourbusiness.com"
            autoComplete="url"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#5B7CFA')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
        >
          What do you want your site to do? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business, who your customers are, and what you want visitors to do when they land on your site..."
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '120px',
            borderColor: errors.message ? '#EF4444' : undefined,
          }}
          onFocus={(e) => (e.target.style.borderColor = '#5B7CFA')}
          onBlur={(e) =>
            (e.target.style.borderColor = errors.message ? '#EF4444' : 'var(--border)')
          }
        />
        {errors.message && (
          <p className="mt-1 text-xs" style={{ color: '#EF4444' }}>
            {errors.message}
          </p>
        )}
      </div>

      {state === 'error' && (
        <div
          className="flex items-center gap-2 p-4 rounded-xl mb-4 text-sm"
          style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.3)',
            color: '#EF4444',
          }}
        >
          <AlertCircle size={16} />
          Something went wrong. Try emailing us directly at synthesyscontact@gmail.com
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn-primary w-full justify-center"
        style={{
          opacity: state === 'loading' ? 0.7 : 1,
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {state === 'loading' ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              style={{ animation: 'spin 0.8s linear infinite' }}
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Get my free homepage preview
          </>
        )}
      </button>

      <p
        className="text-center mt-4 text-xs"
        style={{ color: 'var(--text-muted)' }}
      >
        We&apos;ll reply within 48 hours. No spam, ever.
      </p>

    </form>
  )
}
