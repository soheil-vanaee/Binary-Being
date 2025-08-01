/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "out",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 300,
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: false,
}

module.exports = nextConfig
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // برای static export
  basePath: '/MYblog', // نام ریپوی شما در گیتهاب
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
