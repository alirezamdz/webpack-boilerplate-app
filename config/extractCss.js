const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugin = new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: false,
  allChunks: true
});

const css = {}
const stylus = {}

stylus.dev = ['style-loader?outputPath=styles/', 'css-loader', 'stylus-loader'];
stylus.prod = plugin.extract({fallback: 'style-loader', use: ['css-loader', 'stylus-loader']});

css.prod = plugin.extract({fallback: 'style-loader', use: ['css-loader']});

module.exports = {
  plugin,
  css,
  stylus
};