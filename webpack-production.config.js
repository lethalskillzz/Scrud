const webpack = require('webpack');
const path = require('path');
const createBabelConfig = require('./babelrc');
const nodeExternals = require('webpack-node-externals');
//const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {

    target: 'node',

    externals: [nodeExternals()],

    node: {
        __dirname: true
    },

    entry: path.resolve('./src/app/app.js'),


    output: {
        path: path.resolve(__dirname, 'build'), // Path of output file
        filename: 'app.js',
    },
    // plugins: [
    //     // Enables Hot Modules Replacement
    //     new webpack.HotModuleReplacementPlugin(),
    //     // Moves files
    //     new TransferWebpackPlugin([
    //         { from: 'www' },
    //     ], path.resolve(__dirname, 'src')),
    // ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: createBabelConfig({ server: true }),
            },

            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            {
                test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
                loader: 'url-loader?limit=8192'
            },

            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }
        ],
    },


};

module.exports = config;