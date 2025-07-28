/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

// at the top of pages/signup.tsx or index.tsx
import Head from 'next/head';

<Head>
  <title>Sign Up | EKAM</title>
  <meta name="description" content="Create your EKAM account to access AI components and hire top talent." />
  <meta property="og:image" content="/og-image.png" />
</Head>

