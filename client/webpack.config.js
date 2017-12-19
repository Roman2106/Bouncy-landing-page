const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "./output"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {presets: ["es2015"]}
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract(
          {
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          }
        )
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(otf)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./fonts/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css")
  ]
};