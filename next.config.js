module.exports = {
  async headers() {
    return [
       {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=300',
          },
        ],
      },
      {
        source: '/blog',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store',
          },
        ],
      }
    ]
  },
  reactStrictMode: true,
  poweredByHeader: false
}
