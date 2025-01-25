import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.pienspavemasajsalonu.com"],
    localPatterns: [
      {
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
