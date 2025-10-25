import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'res.cloudinary.com',
      'via.placeholder.com',
      'www.example.com', 
    ],
  },
};

export default nextConfig;
