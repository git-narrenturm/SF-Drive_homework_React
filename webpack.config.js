const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff(2)?|svg)(\?[a-z0-9=.])?$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'fonts',
            outputPath: 'fonts'
          }
        }
      },
      {
        test: /\.(png|jpe?g|svg)?$/i,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'assets/',
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}