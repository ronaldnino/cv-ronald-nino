'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface EducationCardProps {
  degree: string
  school: string
  period: string
  index: number
}

export default function EducationCard({ degree, school, period, index }: EducationCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: '-30px',
  })

  const fromLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className="relative mb-10 last:mb-0 pl-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0) translateY(0)'
          : `translateX(${fromLeft ? '-40px' : '40px'}) translateY(16px)`,
        transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
    >
      {/* Dot */}
      <span
        className="absolute -left-[1.45rem] top-2 w-2.5 h-2.5 rounded-full bg-accent2 border-2 border-bg block"
        style={{ boxShadow: '0 0 0 4px rgba(124,58,237,.15)' }}
      />

      {/* Card */}
      <div className="bg-surface border border-[#1e2d45] rounded-xl p-5 hover:border-accent2 transition-colors max-w-xl">
        <h3 className="text-heading font-semibold text-base mb-1 leading-snug">{degree}</h3>
        <p className="font-mono text-accent2 text-xs tracking-wider">{school}</p>
        <p className="text-muted text-xs mt-1">{period}</p>
      </div>
    </div>
  )
}
