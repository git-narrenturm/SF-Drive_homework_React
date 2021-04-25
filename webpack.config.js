const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
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
    port: 8081,
    historyApiFallback: true,
    proxy: [{
      context: ['/api'],
      target: 'http://localhost:8080',
      secure: false,
      changeOrigin: false
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}