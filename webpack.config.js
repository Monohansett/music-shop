const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: ['css-loader']
              })
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: './dist/index.html',
          filename: 'index.html'
        })
      ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };