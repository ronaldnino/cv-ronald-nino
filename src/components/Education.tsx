import { cvData } from '@/data/cv'
import SectionHeader from './SectionHeader'
import EducationCard from './EducationCard'

export default function Education() {
  return (
    <section id="education" className="px-6 lg:px-20 py-20 relative z-10">
      <SectionHeader index="// 04 — formación académica" title="Educación" />

      <div className="relative pl-8 max-w-2xl">
        {/* Línea vertical */}
        <div
          className="absolute left-0 top-1.5 bottom-1.5 w-0.5"
          style={{
            background: 'linear-gradient(to bottom, #7c3aed, #00d4ff, transparent)',
          }}
        />

        {cvData.education.map((edu, i) => (
          <EducationCard
            key={edu.degree}
            index={i}
            degree={edu.degree}
            school={edu.school}
            period={edu.period}
          />
        ))}
      </div>
    </section>
  )
}
