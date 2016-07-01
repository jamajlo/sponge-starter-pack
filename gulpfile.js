var requireDir = require( 'require-dir' );

global.production = true;

// Pulling in all tasks from the tasks folder
requireDir( './gulp/tasks', {
	recurse: true
} );