const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {

    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env','@babel/preset-react'] ,
        "plugins": [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-transform-object-assign",
          [
            "@babel/plugin-proposal-decorators",
            {
              "legacy": true
            }
          ],
          ["@babel/plugin-proposal-class-properties", { "loose": true }]
        ]
      
      
      },
      }
    ]
  }
};