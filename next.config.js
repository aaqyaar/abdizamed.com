/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["images.unsplash.com", "skillicons.dev"],
  },
};

module.exports = nextConfig;
