const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin} = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [ 
        new HtmlWebpackPlugin(),
        new HotModuleReplacementPlugin() 
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dev.js'
    }
}