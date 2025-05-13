/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure compatibility with newer Next.js versions
  reactStrictMode: true,
  swcMinify: true,
}

// Use CommonJS module.exports instead of ES export default
module.exports = nextConfig;
