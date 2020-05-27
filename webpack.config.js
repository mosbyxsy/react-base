var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        base: "babel-polyfill",
        index: "./src/root.jsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: ['.js', '.jsx','.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/env', '@babel/react'],
                            plugins: [
                                ['babel-plugin-import', {
                                    libraryName: '@alifd/next',
                                    style: true
                                }]
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'fast-sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: '测试页面',
            inject: true
        })
    ]
};