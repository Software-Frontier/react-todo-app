const { merge } = require('webpack-merge'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
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
  ],
});
