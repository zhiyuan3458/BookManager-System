module.exports = {
	entry:__dirname+"/src/search.js",
	output:{
	   path: __dirname + "/public/javascripts/",
	   filename:"search.js"
	},
	module:{
		loaders:[
           {
           	test:/\.js$/,
           	exclude:/node_modules/,
           	loader:'babel-loader'
           },
           {
           	test:/\.css$/,
           	loader:"style-loader!css-loader?modules"
           }
		]
	}
}