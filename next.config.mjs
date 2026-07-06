/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site builds to plain HTML/CSS/JS in /out,
  // deployable to GitHub Pages (current host) or Vercel unchanged.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
