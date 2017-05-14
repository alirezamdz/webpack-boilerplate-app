const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  title: 'Schutz Pro',
  minify: {
    collapseWhitespace: true
  },
  hash: true,
  template: './src/templates/index.ejs'
});