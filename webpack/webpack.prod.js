const { merge } = require('webpack-merge'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  WebpackBundleAnalyzer = require('webpack-bundle-analyzer'),
  config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
    new WebpackBundleAnalyzer(),
  ],
});
