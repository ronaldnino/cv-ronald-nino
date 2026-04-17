/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // If deploying to https://username.github.io/cv-ronald-nino set basePath
  // basePath: '/cv-ronald-nino',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
