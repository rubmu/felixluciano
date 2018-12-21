'use strict'

const Path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')



module.exports = {

  entry: './src/main.coffee',


  output: {
    path: Path.resolve(__dirname, '../dist'),

    publicPath: '/dist/',

    filename: 'main.bundle.js'
  },


  plugins: [
    new VueLoaderPlugin()
  ],


  resolve: {
    extensions: ['.js', '.json', '.vue'],

    alias: {
      '@': Path.resolve(__dirname, '../src/')
    }
  },


  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.coffee$/,
        use: ['coffee-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ]
  }
}
