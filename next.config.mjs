/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
