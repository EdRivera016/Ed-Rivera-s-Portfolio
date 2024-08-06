/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  reactStrictMode: true, // Enables React Strict Mode
  swcMinify: true, // Enables the SWC compiler for minification
  distDir: 'dist', // Change the output directory to 'dist'
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   reactStrictMode: true, // Enables React Strict Mode
//   swcMinify: true, // Enables the SWC compiler for minification
// };

// export default nextConfig;
