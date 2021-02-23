const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "src/index.html",
    }),
    new ExtractTextPlugin({ filename: "css/style.css" }),
  ],
};
