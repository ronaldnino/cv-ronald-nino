/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // ⚠️  IMPORTANTE: debe coincidir exactamente con el nombre del repositorio en GitHub
  // Si el repo se llama "cv-ronald-nino" → basePath: '/cv-ronald-nino'
  // Si el repo es "ronaldnino.github.io" (usuario root) → comentar esta línea
  basePath: '/cv-ronald-nino',
  assetPrefix: '/cv-ronald-nino/',

  images: {
    unoptimized: true,
  },
}

export default nextConfig
