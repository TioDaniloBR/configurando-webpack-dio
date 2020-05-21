const path = require('path');
const HtmlWebPackPlugins = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundler.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins:[
		new HtmlWebPackPlugins({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
}