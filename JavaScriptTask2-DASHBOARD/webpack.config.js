const path = require("path");
const webpack = require("webpack");
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            }
        ]
    },
    resolve: { 
        extensions: ["*", ".js"],
        alias: {
            '~': path.resolve(__dirname, 'src/')
        }
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    // comment out the following to use an external server (e.g. XAMP)
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        publicPath: "http://localhost:9000/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new LiveReloadPlugin({})
    ]
};