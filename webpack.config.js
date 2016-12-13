'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './src/joi-date-extensions-browser.js',
  output: {
    library: 'JoiDateExtensions',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'joi-date-extensions-browser.js'
  },
  module: {
    loaders: [
      {
        // need to babelify joi-date-extensions, joi, isemail, hoek, and topo's lib
        test: /[\\\/]node_modules[\\\/](joi-date-extensions[\\\/]lib[\\\/]|joi[\\\/]lib[\\\/]|isemail[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  node: {
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    // Since moment is now external, we can comment this out
    // but leaving it here in case we reverse that decision
    // english locale is included, exclude the rest
    // new webpack.IgnorePlugin(/locale/, /moment$/)
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.json', '.js'],
    alias: {
      joi: 'joi-browser'
    }
  },
  externals: {
    "joi": "joi",
    "moment": "moment"
  }
};
