'use strict'
let webpack = require('webpack');
let htmlPlugin = require('html-webpack-plugin');
let config = {
	entry:{
		index:'./src/js/index.js'
	},
	output:{
		path:'builds',
		filename:'[name].js',
		chunkFilename:'chunk.[name].js'
	},
	plugins:[
		new htmlPlugin({
			file:__dirname+'/builds/index.html',
			template:'./index.html'
		})
	],
	devServer:{
		contentBase:'./builds',
		inline:true
	}
}

module.exports = config;
