const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    theory: path.resolve(__dirname, "./src/theory.js"),
  },
  output: { path: path.resolve(__dirname, "build"), filename: ["name"].js },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      chunks: ["theory", "main"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};
