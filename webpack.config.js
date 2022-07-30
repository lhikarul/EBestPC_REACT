const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.html",
    }),
  ],
};
