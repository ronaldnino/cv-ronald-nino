import { cvData } from '@/data/cv'
import SectionHeader from './SectionHeader'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="px-6 lg:px-20 py-20 bg-surface relative z-10">
      <SectionHeader index="// 02 — habilidades técnicas" title="Stack tecnológico" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {cvData.skills.map((skill, i) => (
          <SkillCard
            key={skill.title}
            index={i}
            icon={skill.icon}
            title={skill.title}
            tags={skill.tags}
          />
        ))}
      </div>
    </section>
  )
}
