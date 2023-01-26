/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/trends", destination: "/trends/es", permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.INSTANCE_URL_API,
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: process.env.INSTANCE_URL_PROXY,
        pathname: "/**/*",
      },
    ],
  },
};
