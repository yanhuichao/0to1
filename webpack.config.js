var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: [
  	'webpack/hot/dev-server',
  	'webpack-dev-server/client?http://localhost:8080', 
  	path.resolve(__dirname, 'app/entry.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  devServer:{
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by radio')
  ]
}
