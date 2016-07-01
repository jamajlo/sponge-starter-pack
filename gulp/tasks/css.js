var config = require( '../config' ),
	environments = require( 'gulp-environments' ),
	gulp = require( 'gulp' ),
	notify = require( 'gulp-notify' ),
	plumber = require( 'gulp-plumber' ),
	stylus = require( 'gulp-stylus' );

var isDev = environments.development,
	isProd = environments.production;

gulp.task( 'css', function() {
	var envConfig = config.getEnvConfig(),
		stream = gulp.src( envConfig.css.src )
			.pipe( plumber( {
				errorHandler: notify.onError( "Error: <%= error.message %>" )
			} ) )
			.pipe( stylus( {
				compress: isProd()
			} ) )
			.pipe( gulp.dest( envConfig.css.dest ) );

	if ( global.reload ) {
		return stream.pipe( global.reload( {
			stream: true
		} ) );
	}

	return stream;
} );