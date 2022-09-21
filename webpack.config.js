const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/main.js"),
    theory: path.resolve(__dirname, "./src/theory.js"),
  },
  output: { path: path.resolve(__dirname, "build"), filename: ["name"].js },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/template/index.html"),
      filename: "index.html",
      chunks: ["index", "theory"],
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
    proxy: {
      "**/api/**": {
        target: "http://web/api/index.php",
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
