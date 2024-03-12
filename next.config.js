/** @type {import('next').NextConfig} */
require("dotenv").config();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = withBundleAnalyzer({
  env: {
    MAPBOXGL_ACCESS_TOKEN: process.env.MAPBOXGL_ACCESS_TOKEN,
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
  },
  eslint: {
    dirs: ["."],
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  basePath: "",
  typescript: {
    ignoreBuildErrors: true,
    ignoreDevErrors: true,
  },
  reactStrictMode: false,
});

module.exports = nextConfig;
