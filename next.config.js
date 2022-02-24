/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    reactRoot: true,
    runtime: "nodejs",
    serverComponents: true,
  },
};
