module.exports = function() {
	var config = {
		allHtml: './src/**/*.html',
        allScss: './src/**/*.scss',
        allJson: './src/**/*.json',
		allTs: './src/**/*.ts',
		allImages: './src/**/*.png',
		allTypings: './typings/**/*.d.ts',
		extLibs: [
            './src/vendor/**/*'
        ],
		destLibPath: './dist-root/vendor/',
		destSrcPath: './dist-root/'
	};

	return config;
}