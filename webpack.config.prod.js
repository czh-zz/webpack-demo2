const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        //filename: 'index.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack首页',
            template: 'src/assets/index.html'
        }),
        //css抽成文件
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            //chunkFilename: '[id].[contenthash].css',
            //ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                //抽成文件：
                //use: [MiniCssExtractPlugin.loader, "css-loader"],

                //再页面生成
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

