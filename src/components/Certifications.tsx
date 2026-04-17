import { cvData } from '@/data/cv'
import SectionHeader from './SectionHeader'
import CertificationCard from './CertificationCard'

// Map cert titles → local image paths
const certImages: Record<string, string> = {
  'AWS Certified Solutions Architect – Associate': '/aws-saa.png',
  'AWS Certified Cloud Practitioner':             '/aws-ccp.png',
}

export default function Certifications() {
  return (
    <section id="course" className="px-6 lg:px-20 py-20 bg-surface relative z-10">
      <SectionHeader index="// 05 — certificaciones" title="Credenciales" />

      <div className="relative pl-8 max-w-3xl">
        {/* Línea vertical */}
        <div
          className="absolute left-0 top-1.5 bottom-1.5 w-0.5"
          style={{
            background: 'linear-gradient(to bottom, #10b981, #00d4ff, transparent)',
          }}
        />

        {cvData.certifications.map((cert, i) => (
          <CertificationCard
            key={cert.title}
            index={i}
            icon={cert.icon}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            href={cert.href}
            imageSrc={certImages[cert.title]}
          />
        ))}
      </div>
    </section>
  )
}
