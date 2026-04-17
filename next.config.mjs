/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // ──────────────────────────────────────────────────────────────
  // REGLA DE ORO para GitHub Pages:
  //
  //  • Dominio personalizado (ej: cv.ninodevops.dev)
  //    → NO basePath, NO assetPrefix  ← configuración actual
  //
  //  • Sub-ruta de github.io (ej: ronaldnino.github.io/cv-ronald-nino)
  //    → basePath: '/cv-ronald-nino'
  //    → assetPrefix: '/cv-ronald-nino/'
  // ──────────────────────────────────────────────────────────────

  images: {
    unoptimized: true,
  },
}

export default nextConfig
