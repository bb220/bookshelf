/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images1.penguinrandomhouse.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "pictures.abebooks.com",
      },
      {
        protocol: "https",
        hostname: "prodimage.images-bn.com",
      },
      {
        protocol: "https",
        hostname: "www.youcanjustdothingsbook.com",
      },
    ],
  },
}

export default nextConfig
