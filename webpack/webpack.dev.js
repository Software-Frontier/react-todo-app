const { merge } = require('webpack-merge'),
  ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'),
  config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
