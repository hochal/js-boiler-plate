const base = require('./webpack.base.config');
const path = require('path');
const {merge} = require('webpack-merge');

const prod = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'prod.js'
  }
};

module.exports = merge(base, prod);
