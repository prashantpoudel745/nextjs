import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["your-domain.com", "avatars.githubusercontent.com"], // Add allowed domains
  },
};

export default nextConfig;
