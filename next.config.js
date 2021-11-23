/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages()
const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);



module.exports = {
   reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com'],
  }
}





