const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  output: {
    filename: '[name].[contenthash].min.js',
    path: path.resolve(__dirname, '..', './build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html/i,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jp(e?)g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[hash].[ext]', outputPath: 'images' },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
      filename: 'index.html',
      inject: 'head',
    }),
  ],
};
