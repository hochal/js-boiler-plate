const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [ new HtmlWebpackPlugin() ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dev.js'
    }
}