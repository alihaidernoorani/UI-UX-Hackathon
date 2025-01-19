/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'], // Add Sanity's image CDN here
    },
  };
  
export default nextConfig;
  