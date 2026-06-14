'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-blur border-b' : ''
        }`}
        style={{
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          backgroundColor: scrolled
            ? 'rgba(255,255,255,0.85)'
            : 'transparent',
        }}
        aria-label="Main navigation"
      >
        <div className="container-pad flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="flex items-center no-underline"
            aria-label="On Call Coffee home"
          >
            {/* TODO: replace with On Call Coffee logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="On Call Coffee"
              style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--text-primary)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-muted)')
                }
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="btn-primary hidden md:inline-flex"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Get a free preview
            </a>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(11,15,23,0.4)' }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 p-6 flex flex-col gap-6 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'var(--surface)',
            borderLeft: '1px solid var(--border)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-left px-4 py-3 rounded-xl text-base font-medium"
                style={{
                  color: 'var(--text-primary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="btn-primary text-center justify-center w-full"
            >
              Get a free preview
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
