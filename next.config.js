const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? '/sentinel-docs' : '',
  assetPrefix: isProd ? '/sentinel-docs/' : '',
}

module.exports = withNextra(nextConfig)