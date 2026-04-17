import { cvData } from '@/data/cv'
import SectionHeader from './SectionHeader'

const contactItems = [
  { icon: '✉️', label: cvData.contact.email,                    href: `mailto:${cvData.contact.email}` },
  { icon: '💼', label: 'linkedin.com/in/ronaldnino',            href: cvData.contact.linkedin },
  { icon: '🐙', label: 'github.com/ronaldnino',                 href: cvData.contact.github },
  { icon: '📝', label: 'Blog personal',                         href: cvData.contact.blog },
  { icon: '📱', label: 'WhatsApp',                              href: cvData.contact.whatsapp },
  { icon: '📍', label: cvData.location,                         href: undefined },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-20 py-20 relative z-10">
      <SectionHeader index="// 06 — contacto" title="¿Hablamos?" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#e2e8f0] text-sm leading-relaxed max-w-md mb-8">
            Disponible para conversaciones sobre roles Cloud/DevOps Engineer en España.
            15 años de experiencia en AWS y Java respaldando la transición hacia stacks modernos
            de DevOps, contenedores e infraestructura como código.
          </p>
          <a
            href={`mailto:${cvData.contact.email}`}
            className="inline-flex items-center gap-2 bg-accent text-[#0a0e1a] font-mono font-bold text-xs tracking-wider px-6 py-3 rounded-md hover:bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,.3)]"
          >
            Enviar mensaje →
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-center gap-4 text-sm">
              <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/20 flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-[#e2e8f0] hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-[#e2e8f0]">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
