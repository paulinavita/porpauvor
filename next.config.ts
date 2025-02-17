import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "/img.notionusercontent.com",
    ], // Add the hostname here
  },
};

export default nextConfig;
