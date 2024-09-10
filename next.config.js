/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'endsWithSlash',
          },
        ],
        destination: '/:path*/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'noSlash',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
