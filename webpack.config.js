const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    module: {
        rules: [
            ...base.module.rules,
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

