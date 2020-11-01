const base = require('./webpack.base.config');
const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');

const dev = {
  mode: 'development',
  plugins: [new HtmlWebpackPlugin(), new HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    hot: true,
    open: true
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'dev.js'
  }
};

module.exports = merge(base, dev);
