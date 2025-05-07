/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "serverless",
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;
