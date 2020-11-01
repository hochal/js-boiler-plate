const base = require('./webpack.base.config');
const path = require('path');
const {merge} = require('webpack-merge');

const prod = {
  mode: 'production'
};

module.exports = merge(base, prod);
