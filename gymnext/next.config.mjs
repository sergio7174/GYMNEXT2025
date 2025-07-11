/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('http://localhost:4000/public/images/**')],
  },
  
};

export default nextConfig;
