var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: [
		'./public/javascripts/angularApp'
	],
	target: 'web',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({ inject: 'head',
			template: __dirname + "/public/index.tmpl.html"})
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css?sourceMap'
			},
			{
				test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
				loader: 'url?limit=100000&name=img/[name].[ext]'
			},
			{
				test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
				loader: 'url?limit=100000&name=fonts/[name].[ext]'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"}
		]
	}
};