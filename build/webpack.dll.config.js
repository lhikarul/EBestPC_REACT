const path = require("path");
const webpack = require("webpack");

const dllPath = "../dll";

module.exports = {
  mode: "production",
  entry: {
    react: ["react", "react-dom", "react-router-dom"],
    jquery: ["jquery", "flexslider"],
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, "[name]-manifest.json"),
      name: "[name]_[hash]",
      context: __dirname,
    }),
  ],
};
