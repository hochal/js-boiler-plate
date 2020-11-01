const base = require('./webpack.base.config');
const path = require('path');
const {merge} = require('webpack-merge');
const {HotModuleReplacementPlugin} = require('webpack');

const dev = {
  mode: 'development',
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    hot: true,
    open: true
  },
  devtool: 'source-map'
};

module.exports = merge(base, dev);
