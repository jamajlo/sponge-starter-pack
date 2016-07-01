var config = require( '../config' ),
	gulp = require( 'gulp' ),
	environments = require( 'gulp-environments' ),
	gulpif = require( 'gulp-if' ),
	notify = require( 'gulp-notify' ),
	plumber = require( 'gulp-plumber' ),
	uglify = require( 'gulp-uglify' ),
	webpack = require( 'webpack-stream' );

var isDev = environments.development,
	isProd = environments.production;

gulp.task( 'js', function() {
	var envConfig = config.getEnvConfig();

	gulp.src( envConfig.js.src )
		.pipe( plumber( {
			errorHandler: notify.onError( "Error: <%= error.message %>" )
		} ) )
		.pipe( webpack( {
			output: {
				filename: isProd() ? '[hash].js' : '[name].js',
			},
			watch: Boolean( global.watch )
		}, null, function( err, stats ) {
			if ( global.reload ) {
				global.reload( envConfig.js.src );
			}
		} ) )
		.pipe( gulpif( isProd(), uglify() ) )
		.pipe( gulp.dest( envConfig.js.dest ) );
} );