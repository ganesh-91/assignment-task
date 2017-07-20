// var webpack = require("webpack");
var path = require("path");

var APP_DIR = path.resolve(__dirname, "src/app");
var BUILD_DIR = path.resolve(__dirname, "src/dist");

var config = {
    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: "babel"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                query: {
                    limit: 10000,
                    name: "images/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                query: {
                    limit: 10000,
                    name: "fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 5001,
        contentBase: "src"
    }
};

module.exports = config;

