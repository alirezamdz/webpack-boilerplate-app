const isProd = process.env.NODE_ENV === 'production';
const path = require('path');
const webpack = require('webpack');
const devServerConf = require('./config/devServerConf');
const webpackHtmlPlugin = require('./config/webpackHtmlPlugin')
const extractCss = require("./config/extractCss");
const loaders = require('./config/loadersList');
const bootstrapEntryPoint = require('./config/webpack.bootstrap.config.js');

const bootstrapConfig = isProd ? bootstrapEntryPoint.prod : bootstrapEntryPoint.dev;

module.exports = {

  entry: {
    bootstrap: bootstrapConfig,
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  devtool: "source-map",

  module: {
    loaders: loaders
  },

  devServer: devServerConf,

  plugins: [
    webpackHtmlPlugin,
    extractCss.plugin
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  ]

};