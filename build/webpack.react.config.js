const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // entry: {
  //   index: "./src/index.js",
  //   // login: "./src/login.js",
  // },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../public"),
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "dist"),
  //     // directory: path.join(__dirname, "public"),
  //   },
  //   compress: true,
  //   port: 9000,
  //   hot: true,
  // },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "images/[name].[hash:6][ext]",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: path.resolve(__dirname, "../public"),
    //   chunks: ["index"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "login.html",
    //   template: "./public/index.html",
    //   chunks: ["login"],
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/img"),
          to: path.resolve(__dirname, "../public/img"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
