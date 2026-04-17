interface SectionHeaderProps {
  index: string
  title: string
}

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-accent text-xs tracking-[.2em] uppercase mb-2">
        {index}
      </p>
      <h2 className="text-heading font-bold" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
        {title}
      </h2>
    </div>
  )
}
