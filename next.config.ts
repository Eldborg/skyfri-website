import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "skyfri.com" },
    ],
  },
};

export default nextConfig;
