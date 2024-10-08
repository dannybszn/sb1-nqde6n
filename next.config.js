/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Vercel specific configuration
  output: 'standalone',
};

module.exports = nextConfig;