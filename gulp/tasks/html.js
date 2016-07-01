var config = require( '../config' ),
	environments = require( 'gulp-environments' ),
	gulp = require( 'gulp' ),
	htmlmin = require( 'gulp-htmlmin' ),
	inject = require( 'gulp-inject' );

var development = environments.development,
	production = environments.production;

gulp.task( 'html', function() {
	var envConfig = config.getEnvConfig(),
		target = gulp.src( envConfig.html.src ),
		sources = gulp.src( [ envConfig.css.inject, envConfig.js.inject ], {
			read: false
		} ),
		stream = target.pipe( inject( sources, {
			ignorePath: envConfig.folders.dest,
			addRootSlash: false
		} ) )
		.pipe( production( htmlmin( {
			collapseWhitespace: true
		} ) ) )
		.pipe( gulp.dest( envConfig.html.dest ) );

	if ( global.reload ) {
		return stream.pipe( global.reload( {
			stream: true
		} ) );
	}

	return stream;
} );