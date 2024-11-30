/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'http://twbeauty.us.kg' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig
