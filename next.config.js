/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optional Turbopack config (safe)
  experimental: {
    turbo: {
      rules: {},
    },
  },
};

module.exports = nextConfig;




