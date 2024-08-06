/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist', // This will change the output directory to 'dist'
};

export default nextConfig;
