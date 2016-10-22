var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var ignorePlugin = new webpack.IgnorePlugin(/\.\/src\/jquery.js/);
module.exports = {
	entry:{
		index:'./src/index.js'
	},
	output:{
		path:'builds',
		filename:'[name].js',
		chunkFilename:'chunk.[name].js'
	},
	externals:{
		'jquery':'window.jQuery'
	},
	plugins:[
		new htmlPlugin({
			filename:__dirname+'/builds/index.html',
			template:'./index.html'
		}),
		ignorePlugin
	],
	devServer:{
		contentBase:'./builds',
		inline:true
	}
}