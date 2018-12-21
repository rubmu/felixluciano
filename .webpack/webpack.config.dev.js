'use strict'

const Path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')



module.exports = {

  mode: 'development',


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


  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8080,

    open: true,
    inline: true,
    overlay: true,
    stats: 'none'
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
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
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
