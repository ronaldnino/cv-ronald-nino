import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ronald Niño · Cloud & DevOps Engineer',
  description:
    'CV de Ronald Niño — Cloud & DevOps Engineer con 15+ años de experiencia en AWS, Java y automatización. Disponible para el mercado tecnológico español.',
  keywords: ['Cloud Engineer', 'DevOps', 'AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'España'],
  authors: [{ name: 'Ronald Niño' }],
  icons: {
    icon: [
      { url: '/favicon.ico',   sizes: '48x48',  type: 'image/x-icon' },
      { url: '/icon-192.png',  sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png',  sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Ronald Niño · Cloud & DevOps Engineer',
    description: 'CV profesional de Ronald Niño — Cloud & DevOps Engineer',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
