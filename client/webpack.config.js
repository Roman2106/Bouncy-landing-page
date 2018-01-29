const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
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
            use: ["css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => {
                    return [autoprefixer]
                  }
                }
              }, "resolve-url-loader", "sass-loader?sourceMap"
            ]
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
    new ExtractTextPlugin("index.css"),
    new UglifyJsPlugin(
      {
        test: /\.js($|\?)/i
      }
    )
  ]
};