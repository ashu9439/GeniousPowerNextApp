import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com', // Add this
      'via.placeholder.com', // optional: for placeholder images
    ],
  },
};

export default nextConfig;
