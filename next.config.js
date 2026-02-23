/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  // Isso ajuda o Cloudflare a entender a exportação das rotas
  output: 'standalone', 
}

module.exports = nextConfig
