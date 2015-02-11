/**
 * Clean the theme and plugin directories.
 */

var clean = function() {
	console.log( dest_theme );

	del( [dest_theme], function( err ) {
		console.log( 'Theme directory deleted.' );
	});

	del( [dest_plugin], function( err ) {
		console.log( 'Plugin directory deleted.' );
	});
};

module.exports = clean;
