const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  title: 'Hello webpack',
  minify: {
    collapseWhitespace: true
  },
  hash: true,
  filename: 'index.html',
  template: './src/templates/index.pug'

  // switch to ejs template it you wish...
  // template: './src/templates/index.ejs'
});