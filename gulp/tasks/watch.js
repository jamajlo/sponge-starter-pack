var config = require( '../config' ),
	gulp = require( 'gulp' ),
	browserSync = require( 'browser-sync' ).create();

gulp.task( 'watch', function() {
	var envConfig = config.getEnvConfig(),
		reload = browserSync.reload;

	browserSync.init( {
		server: envConfig.paths.dest,
		port: 3000
	} );

	global.reload = reload;
	global.watch = true;

	gulp.start( 'default' );

	gulp.watch( envConfig.css.watch, [ 'css' ] );
	gulp.watch( envConfig.img.watch, [ 'image' ] );
	gulp.watch( envConfig.html.watch, [ 'html' ] );
} );