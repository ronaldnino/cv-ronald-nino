'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import SkillTag from './SkillTag'

interface SkillCardProps {
  icon: string
  title: string
  tags: string[]
  index: number
}

export default function SkillCard({ icon, title, tags, index }: SkillCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '-20px',
  })

  return (
    <div
      ref={ref}
      className="bg-bg border border-[#1e2d45] rounded-xl p-6 hover:border-accent group
        transition-[border-color] duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.5s ease ${index * 0.06}s,
                     transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 0.06}s,
                     border-color 0.3s`,
      }}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-mono text-accent text-xs tracking-widest uppercase mb-4">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, ti) => (
          <SkillTag key={tag} label={tag} delay={ti * 20} />
        ))}
      </div>
    </div>
  )
}
