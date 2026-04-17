'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface CertificationCardProps {
  icon: string
  title: string
  issuer: string
  date: string
  href: string
  imageSrc?: string
  index: number
}

export default function CertificationCard({
  icon,
  title,
  issuer,
  date,
  href,
  imageSrc,
  index,
}: CertificationCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>({
    threshold: 0.12,
    rootMargin: '-30px',
  })

  const fromLeft = index % 2 === 0

  return (
    <a
      ref={ref}
      href={href}
      target={href !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="relative mb-10 last:mb-0 pl-6 flex gap-4 items-start group no-underline"
      style={{
        display: 'flex',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0) translateY(0)'
          : `translateX(${fromLeft ? '-40px' : '40px'}) translateY(16px)`,
        transition: `opacity 0.55s ease ${index * 0.09}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.09}s`,
      }}
    >
      {/* Dot */}
      <span className="absolute -left-[1.45rem] top-2 w-2.5 h-2.5 rounded-full bg-accent3 border-2 border-bg block"
        style={{ boxShadow: '0 0 0 4px rgba(16,185,129,.15)' }}
      />

      {/* Icon / badge image */}
      <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-surface border border-[#1e2d45] flex items-center justify-center group-hover:border-accent3 transition-colors">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl">{icon}</span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-heading font-semibold text-sm mb-0.5 group-hover:text-accent3 transition-colors leading-snug">
          {title}
        </h3>
        <p className="font-mono text-accent3 text-xs">{issuer}</p>
        <p className="text-muted text-xs mt-0.5">{date}</p>
      </div>
    </a>
  )
}
