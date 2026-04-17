'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#home',       label: 'inicio' },
  { href: '#skills',     label: 'skills' },
  { href: '#experience', label: 'exp' },
  { href: '#education',  label: 'edu' },
  { href: '#course',     label: 'certs' },
  { href: '#contact',    label: 'contacto' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((s) => {
        const el = s as HTMLElement
        if (window.scrollY >= el.offsetTop - 130) setActive(el.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-[#1e2d45]'
          : 'bg-transparent'
      }`}
    >
      <span className="font-mono text-sm text-accent tracking-widest">
        rn@cloud:~$
      </span>

      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                active === l.href.slice(1) ? 'text-accent' : 'text-muted hover:text-accent'
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile: just show a pill */}
      <a
        href="#contact"
        className="md:hidden font-mono text-xs bg-accent/10 border border-accent/30 text-accent px-3 py-1 rounded-full tracking-wider"
      >
        contactar
      </a>
    </nav>
  )
}
