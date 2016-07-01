var config = require( '../config' ),
	environments = require( 'gulp-environments' ),
	gulp = require( 'gulp' ),
	notify = require( 'gulp-notify' ),
	plumber = require( 'gulp-plumber' ),
	changed = require( 'gulp-changed' ),
	imagemin = require( 'gulp-imagemin' );

var isDev = environments.development,
	isProd = environments.production;

gulp.task( 'image', function() {
	var envConfig = config.getEnvConfig(),
		stream = gulp.src( envConfig.img.src )
		.pipe( plumber( {
			errorHandler: notify.onError( "Error: <%= error.message %>" )
		} ) )
		.pipe( changed( envConfig.img.dest ) )
		.pipe( imagemin() )
		.pipe( gulp.dest( envConfig.img.dest ) );

	if ( global.reload ) {
		return stream.pipe( global.reload( {
			stream: true
		} ) );
	}

	return stream;
} );