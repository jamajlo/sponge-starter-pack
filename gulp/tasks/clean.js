var config = require( '../config' ),
	gulp = require( 'gulp' ),
	clean = require( 'gulp-clean' );

gulp.task( 'clean', function() {
	var envConfig = config.getEnvConfig();

	return gulp.src( [ envConfig.folders.dev, envConfig.folders.prod + '/*'], {
			read: false
		} )
		.pipe( clean() );
} );