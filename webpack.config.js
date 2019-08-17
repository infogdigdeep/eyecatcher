const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HTMLWebpackPlugin ({
  template : './src/index.html',
  filename : './index.html'
})
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module : {
      rules : [
        {
          test : /\.js$/,
          exclude : /node_modules/,
          use : ['babel-loader']
        },
        {
          test : /\.css$/,
          use : [
            {
              loader : 'style-loader'
            },
            {
              loader : 'css-loader',
              options : {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          ]
        }
      ]
  },
  plugins : [htmlPlugin]
};
