// next.config.js
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  target: 'serverless',
};

if (localEnv) {
  nextConfig.webpack = config => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  };
}

module.exports = withCSS(nextConfig);
