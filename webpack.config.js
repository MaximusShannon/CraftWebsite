var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [
        './public/javascripts/angularApp'
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3000/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"}
        ]
    }
};