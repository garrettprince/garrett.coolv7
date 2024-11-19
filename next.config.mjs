/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]  // required for Three.js
    return config
  },
}

export default nextConfig
