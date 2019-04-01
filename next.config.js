// next.config.js
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  target: 'serverless',
};

module.exports = withCSS(nextConfig);
