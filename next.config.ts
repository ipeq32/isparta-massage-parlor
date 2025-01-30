import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    //   localPatterns: [
    //     {
    //       pathname: "/assets/**",
    //       search: "",
    //     },
    //     {
    //       pathname: "/**",
    //       search: "",
    //     },

    //   ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.atasehirmasajspa.com.tr",
        port: "",
        pathname: "/wp-content/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
