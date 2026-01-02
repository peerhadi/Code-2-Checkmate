import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [{
    }]
  },
  turbopack(config) {
    config.ignoreWarnings = [
      /Hydration failed because the initial UI does not match/
    ]
    return config
  },
};

export default nextConfig;
