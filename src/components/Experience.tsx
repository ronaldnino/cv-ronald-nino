import { cvData } from '@/data/cv'
import SectionHeader from './SectionHeader'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="px-6 lg:px-20 py-20 relative z-10">
      <SectionHeader index="// 03 — trayectoria profesional" title="Experiencia" />

      <div className="relative pl-8">
        {/* Línea vertical del timeline */}
        <div
          className="absolute left-0 top-1.5 bottom-1.5 w-0.5"
          style={{
            background: 'linear-gradient(to bottom, #00d4ff, #7c3aed, transparent)',
          }}
        />

        {cvData.experience.map((exp, i) => (
          <ExperienceCard
            key={i}
            index={i}
            period={exp.period}
            company={exp.company}
            role={exp.role}
            desc={exp.desc}
            badges={exp.badges}
          />
        ))}
      </div>
    </section>
  )
}
