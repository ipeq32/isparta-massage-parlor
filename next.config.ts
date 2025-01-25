import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
        protocol: 'https',
        hostname: 'www.pienspavemasajsalonu.com',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
