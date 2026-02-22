/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Do not generate production browser source maps (keeps bundles minified only)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
