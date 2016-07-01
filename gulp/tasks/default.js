var gulp = require( 'gulp' ),
	runSequence = require( 'run-sequence' );

gulp.task( 'default', function() {
	runSequence( [ 'css', 'js', 'image' ], 'html' );
} );