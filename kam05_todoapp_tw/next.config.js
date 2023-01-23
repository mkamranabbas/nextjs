/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://kam00-jsonapi.vercel.app/api/:path*', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
