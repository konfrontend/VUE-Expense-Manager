const path = require('path');

module.exports = {
	// outputDir: path.resolve(__dirname, '/dist'),
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5000'
			}
		}
	},
	// configureWebpack: {
	// 	resolve: {
	// 		alias: {
	// 			'@components': path.join(__dirname, 'src/components')
	// 		}
	// 	}
	// }
}