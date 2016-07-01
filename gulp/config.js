var environments = require( 'gulp-environments' );

var dirs = {
	src: 'src',
	dev: 'dev',
	prod: 'dist'
}

function getEnvConfig() {
	var folders = {
			src: dirs.src,
			dest: environments.production() ? dirs.prod : dirs.dev,
			dev: dirs.dev,
			prod: dirs.prod
		},
		paths = {
			src: folders.src,
			dest: folders.dest
		};

	return {
		folders: folders,
		paths: paths,
		css: {
			src: paths.src + '/css/*.styl',
			dest: paths.dest + '/css',
			watch: paths.src + '/css/**/*.styl',
			inject: paths.dest + '/css/**/*.css',
		},
		js: {
			src: paths.src + '/js/main.js',
			dest: paths.dest + '/js',
			watch: paths.src + '/js/**/*.js',
			inject: paths.dest + '/js/**/*.js',
		},
		html: {
			src: paths.src + '/index.html',
			dest: paths.dest,
			watch: paths.src + '/index.html',
		},
		img: {
			src: paths.src + '/img/*',
			dest: paths.dest + '/img',
			watch: paths.src + '/img/*.jpg'
		}
	}
}

module.exports = {
	getEnvConfig: getEnvConfig
};