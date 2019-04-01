// next.config.js
const withCSS = require('@zeit/next-css');

const nextConfig = {
  target: 'serverless',
};

module.exports = withCSS(nextConfig);
