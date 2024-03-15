/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'romsons.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/site-assets/**',
      },
    ],
  },
  i18n: {
    locales: ['nl', 'es',  'en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    )
    return config;
  }
}

module.exports = nextConfig
