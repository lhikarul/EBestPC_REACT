const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  target: "node",
  entry: path.resolve(__dirname, "../src/server/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../ssrbuild"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64:5]",
              },
              esModule: false,
            },
          },
        ],
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
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
