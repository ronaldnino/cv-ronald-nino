'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ExperienceCardProps {
  period: string
  company: string
  role: string
  desc: string
  badges: string[]
  index: number
}

export default function ExperienceCard({
  period,
  company,
  role,
  desc,
  badges,
  index,
}: ExperienceCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: '-40px',
  })

  // Alternar dirección: pares vienen de izquierda, impares de derecha
  const fromLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className="relative mb-12 last:mb-0 pl-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0) translateY(0)'
          : `translateX(${fromLeft ? '-40px' : '40px'}) translateY(16px)`,
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
      }}
    >
      {/* Dot del timeline */}
      <span className="absolute -left-[1.45rem] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg glow-accent block" />

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <span className="font-mono text-accent text-xs tracking-wider">{period}</span>
        <span className="text-muted text-xs italic">{company}</span>
      </div>

      <h3 className="text-heading font-semibold text-lg mb-2">{role}</h3>
      <p className="text-[#e2e8f0] text-sm leading-relaxed mb-3">{desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {badges.map((b) => (
          <span
            key={b}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent2/10 border border-accent2/25 text-[#c4b5fd]"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
