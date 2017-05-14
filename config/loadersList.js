const extractStylus = require("./extractCss");

module.exports = [
  {
    test: /\.css$/,
    use: extractStylus.css.prod
  },

  {
    test: /\.styl$/,
    use: extractStylus.stylus.prod
  },

  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      'file-loader?hash=sha512&name=[name].[ext]&outputPath=images/&publicPath=/',
      'image-webpack-loader'
    ]
  },

  {
    test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
    use: 'imports-loader?jQuery=jquery'
  },

  {
    test: /\.(woff2?|svg)$/,
    use: 'url-loader?limit=10000&name=fonts/[name].[ext]&publicPath=/'
  },

  {
    test: /\.(ttf|eot)$/,
    use: 'file-loader?name=fonts/[name].[ext]&publicPath=/'
  }

];