/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {},

  compiler: {
    tsconfigPaths: true, // enables TS path alias automatically
  },
};

module.exports = nextConfig;



