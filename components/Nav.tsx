'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '#products' },
  { label: 'Our Story', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count } = useCart()

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur border-b' : ''}`}
        style={{
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          backgroundColor: scrolled ? 'rgba(248, 244, 238, 0.92)' : 'transparent',
        }}
        aria-label="Main navigation"
      >
        <div className="container-pad flex items-center justify-between py-2">

          {/* Left: logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            aria-label="On Call Coffee Co. home"
            style={{ display: 'block', flexShrink: 0 }}
          >
            <div style={{ height: '100px', width: '100px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-on-call.png"
                alt="On Call Coffee Co."
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) scale(1.14)',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>

          {/* Center: all 3 nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right: cart + mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/order"
              aria-label={`Cart — ${count} item${count !== 1 ? 's' : ''}`}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', textDecoration: 'none', flexShrink: 0 }}
            >
              <CoffeeCupIcon />
              {count > 0 && (
                <span
                  style={{
                    position: 'absolute', top: '-4px', right: '-4px',
                    width: '18px', height: '18px', borderRadius: '50%',
                    background: 'var(--text-primary)', color: 'var(--bg)',
                    fontSize: '10px', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </Link>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', cursor: 'pointer' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay — also update shop link */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(28,20,16,0.3)' }} onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-64 p-6 flex flex-col gap-6 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
        >
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-sm" style={{ color: 'var(--text-muted)' }}>Menu</span>
            <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-left px-4 py-3 rounded-xl text-base font-medium"
                style={{ color: 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter)' }}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a href="#products" onClick={(e) => { e.preventDefault(); handleNav('#products') }} className="btn-primary text-center justify-center w-full">
              Shop Now
            </a>
            <Link href="/order" className="btn-primary text-center justify-center w-full" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
              View Cart {count > 0 && `(${count})`}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function CoffeeCupIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Steam */}
      <path d="M8 2 Q9 0.5 8 -0.5" opacity="0" />
      <path d="M7 3.5 C7.5 2.5 6.5 1.5 7 0.5" strokeWidth="1.4" opacity="0.5" />
      <path d="M11 3.5 C11.5 2.5 10.5 1.5 11 0.5" strokeWidth="1.4" opacity="0.5" />
      {/* Cup body */}
      <path d="M5 6h12l-1.8 10.5A2 2 0 0113.2 18H8.8a2 2 0 01-2-1.5L5 6z" />
      {/* Handle */}
      <path d="M17 8.5h1.5a2 2 0 010 4H17" />
      {/* Rim */}
      <line x1="4" y1="6" x2="18" y2="6" />
    </svg>
  )
}
