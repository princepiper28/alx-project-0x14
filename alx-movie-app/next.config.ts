import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // ✅ Allow Amazon images
  },
};

export default nextConfig;