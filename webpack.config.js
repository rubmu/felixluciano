const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


const { NODE_ENV } = process.env
const styleLoader = NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader


module.exports = {

  mode: NODE_ENV,


  entry: './src/main.coffee',


  output: {
    path: path.resolve(__dirname, './dist'),

    publicPath: '/dist/',

    filename: 'bundle.min.js'
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.min.css",
    }),

    new CompressionPlugin(),

    new VueLoaderPlugin()
  ],


  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),

      new OptimizeCSSAssetsPlugin()
    ]
  },


  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
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
        test: /\.css$/,
        use: [ styleLoader, 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ styleLoader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.sass$/,
        use: [
          styleLoader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ],
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
