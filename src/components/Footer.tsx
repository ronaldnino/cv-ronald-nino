export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-[#1e2d45] font-mono text-xs text-muted relative z-10">
      <p>
        © {new Date().getFullYear()}{' '}
        <span className="text-accent">Ronald Niño</span> · Cloud &amp; DevOps Engineer ·
        Built with Next.js &amp; Tailwind CSS
      </p>
    </footer>
  )
}
