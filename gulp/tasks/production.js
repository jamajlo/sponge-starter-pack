var config = require( '../config' ),
	gulp = require( 'gulp' ),
	browserSync = require( 'browser-sync' ).create(),
	environments = require( 'gulp-environments' );

gulp.task( 'production', ['clean'], function() {
	var envConfig;

	environments.current( environments.production );
	gulp.start( [ 'default' ] );

	envConfig = config.getEnvConfig();

	browserSync.init( {
		server: envConfig.paths.dest,
		port: 3001
	} );
} );