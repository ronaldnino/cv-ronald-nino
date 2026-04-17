'use client'

import { useEffect, useState } from 'react'
import { cvData } from '@/data/cv'

const terminalLines = cvData.terminal

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 90)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 pt-28 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      {/* Glow blob */}
      <div
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,.18) 0%, transparent 70%)' }}
      />

      {/* Left: text */}
      <div className="relative z-10">
        {/* Available tag */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent font-mono text-xs tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          Disponible para nuevas oportunidades
        </div>

        <h1
          className="font-sans font-bold leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', animationDelay: '0.1s' }}
        >
          <span className="text-heading block animate-fade-up">Ronald</span>
          <span className="text-gradient block animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Niño
          </span>
        </h1>

        <p
          className="font-mono text-muted text-sm tracking-wider mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {'>'} Cloud &amp; DevOps Engineer · 15+ años de experiencia
        </p>

        <p
          className="text-[#e2e8f0] max-w-xl text-sm leading-relaxed mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {cvData.summary}
        </p>

        <div
          className="flex flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-[#0a0e1a] font-mono font-bold text-xs tracking-wider px-6 py-3 rounded-md hover:bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,.3)]"
          >
            Contactar →
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 border border-[#1e2d45] text-[#e2e8f0] font-mono text-xs tracking-wider px-6 py-3 rounded-md hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver experiencia
          </a>
        </div>
      </div>

      {/* Right: terminal */}
      <div
        className="hidden lg:block relative z-10 animate-fade-up"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="bg-surface border border-[#1e2d45] rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,.5)] max-w-[440px] ml-auto">
          {/* Terminal bar */}
          <div className="bg-[#1c2636] px-4 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="font-mono text-muted text-xs ml-auto tracking-wider">
              ronald-nino.yaml
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-xs leading-[1.9] min-h-[320px]">
            {terminalLines.slice(0, visibleLines).map((line, i) => {
              if (line.type === 'blank') return <div key={i}>&nbsp;</div>
              if (line.type === 'section')
                return (
                  <div key={i}>
                    <span className="text-accent">{line.key}</span>:
                  </div>
                )
              return (
                <div key={i}>
                  <span className={line.key.startsWith('  ') ? 'text-[#10b981]' : 'text-accent'}>
                    {line.key}
                  </span>
                  {line.val && (
                    <>
                      :{' '}
                      <span
                        className={
                          line.type === 'str'
                            ? 'text-[#86efac]'
                            : line.type === 'num'
                            ? 'text-[#f9a8d4]'
                            : line.type === 'bool'
                            ? 'text-[#f9a8d4]'
                            : 'text-[#86efac]'
                        }
                      >
                        {line.val}
                      </span>
                      {line.comment && (
                        <span className="text-muted"> {line.comment}</span>
                      )}
                    </>
                  )}
                </div>
              )
            })}
            {visibleLines < terminalLines.length && (
              <span className="inline-block w-0.5 h-[0.9em] bg-accent animate-blink align-text-bottom" />
            )}
            {visibleLines >= terminalLines.length && (
              <span className="inline-block w-0.5 h-[0.9em] bg-accent animate-blink align-text-bottom" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
