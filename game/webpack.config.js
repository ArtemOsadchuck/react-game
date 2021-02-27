const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    open: true,
    port: 4200,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp3|svg|wav)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] //MiniCssExtractPlugin.loader "sass-loader"
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: './assets/', to: 'assets/' },
        ],
      },
    ),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

//   devServer: {
//     historyApiFallback: true,
//     port: 5010
//   }
}