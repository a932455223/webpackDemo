var htmlPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		index:'./src/index.js'
	},
	output:{
		path:'builds',
		filename:'[name].js',
		chunkFilename:'chunk.[name].js'
	},
	plugins:[
		new htmlPlugin({
			filename:__dirname+'/builds/index.html',
			template:'./index.html'
		})
	],
	devServer:{
		contentBase:'./builds',
		inline:true
	}
}