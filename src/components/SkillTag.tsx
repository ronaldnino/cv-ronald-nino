'use client'

import { useState } from 'react'

interface SkillTagProps {
  label: string
  delay?: number
}

export default function SkillTag({ label, delay = 0 }: SkillTagProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-default select-none inline-flex items-center
        font-mono text-[11px] px-2 py-0.5 rounded
        border border-accent/15 text-[#e2e8f0]
        transition-all duration-300"
      style={{
        background: hovered
          ? 'rgba(0,212,255,0.15)'
          : 'rgba(0,212,255,0.05)',
        borderColor: hovered ? 'rgba(0,212,255,0.5)' : 'rgba(0,212,255,0.15)',
        color: hovered ? '#00d4ff' : '#e2e8f0',
        boxShadow: hovered ? '0 0 12px rgba(0,212,255,0.25)' : 'none',
        transform: hovered ? 'translateY(-1px) scale(1.04)' : 'translateY(0) scale(1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Shimmer sweep */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.25), transparent)',
          transform: hovered ? 'translateX(200%)' : 'translateX(-100%)',
          transition: hovered ? 'transform 0.55s ease' : 'none',
        }}
      />
      <span className="relative z-10">{label}</span>
    </span>
  )
}
