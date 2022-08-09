const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CssMinizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../src/index.js"),
  },
  // entry: {
  //   index: "./src/index.js",
  //   // login: "./src/login.js",
  // },
  // output: {
  //   filename: "index.js",
  //   path: path.resolve(__dirname, "../public"),
  // },
  output: {
    filename: "js/[name].js",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin(), new CssMinizerPlugin()],
    // splitChunks: {
    //   chunks: "all",
    // },
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
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].chunk.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
