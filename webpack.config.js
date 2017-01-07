var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.resolve('./entry.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by radio')
  ]
}
