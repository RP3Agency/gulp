/**
 * Establish our gulp/node plugins for this project.
 */
var gulp			= require('gulp'),

	// Sass/Compass/related CSSy things
	sass			= require('gulp-ruby-sass'),
	autoprefixer	= require('gulp-autoprefixer'),
	minifycss		= require('gulp-minify-css'),
	sourcemaps		= require('gulp-sourcemaps'),

	// JavaScript
	jshint			= require('gulp-jshint'),
	uglify			= require('gulp-uglify'),

	// File system
	concat			= require('gulp-concat'),
	rename			= require('gulp-rename'),
	del				= require('del'),

	// Notifications and error handling
	gutil			= require('gulp-util');

/**
 * Pull in our configuration and other files
 */
var	config			= require( './gulp/config.json' );

var src				= __dirname + '/src',
	src_js			= src + '/js',
	src_js_vendor	= src_js + '/vendor',
	src_js_plugins	= src_js + '/plugins',
	src_sass		= src + '/sass',
	src_theme		= src + '/theme',
	src_plugin		= src + '/plugin',

	// Destination files, WordPress
	dest_theme		= __dirname + '/wp-content/themes/' + config.project,
	dest_theme_js	= dest_theme + '/js',
	dest_theme_css	= dest_theme + '/css',
	dest_plugin		= __dirname + '/wp-content/plugins/' + config.project;

/**
 * Pull in the appropriate sub-file, dependent on the project platform
 */
var dir = require( './gulp/gulpfile-' + config.platform + '.js' );

/**
 * Now, let's do things.
 */

gulp.task( 'clean', function() {
	dir.clean;
});

// Styles
// gulp.task( 'styles', function() {
// 	return sass( src_sass, {
// 		require: [ 'breakpoint', 'susy' ],
// 		sourcemap: true
// 	})
// 	.on( 'error', function( err ) {
// 		console.error( 'Error', err.message );
// 	})
// 	.pipe( autoprefixer({
// 		browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'last 2 iOS versions', 'android 4']
// 	}) )
// 	.pipe( gulp.dest(dest_theme_css))
// 	.pipe( rename({
// 		suffix: '.min'
// 	}) )
// 	.pipe( minifycss() )
// 	.pipe( sourcemaps.write() )
// 	.pipe( gulp.dest( dest_theme_css ) );
// });

// // Scripts task: JSHint & minify custom js
// gulp.task( 'scripts-custom', function() {
// 	return gulp.src(config.javascript)
// 		.pipe( jshint( __dirname + '/.jshintrc' ) )
// 		.pipe( jshint.reporter( 'default' ) )
// 		.pipe( concat( config.project + '.js' ) )
// 		.pipe( gulp.dest( dest_theme_js ) )
// 		.pipe( rename({
// 			suffix: '.min'
// 		}) )
// 		.pipe( uglify() )
// 		.on( 'error', function( err ) {
// 			console.error( 'Error', err.message );
// 		})
// 		.pipe( gulp.dest( dest_theme_js ) );
// } );

// // Scripts task: Plugins
// gulp.task( 'scripts-plugins', function() {
// 	return gulp.src( src_js_plugins + '/*.js' )
// 		.pipe( concat( config.project + '-plugins.js' ) )
// 		.pipe( gulp.dest( dest_theme_js ) )
// 		.pipe( rename({
// 			suffix: '.min'
// 		}) )
// 		.pipe( uglify() )
// 		.on( 'error', function( err ) {
// 			console.error( 'Error', err.message );
// 		})
// 		.pipe( gulp.dest( dest_theme_js ) );
// });

// // Scripts task: Vendor
// gulp.task( 'scripts-vendor', function() {
// 	return gulp.src( src_js_vendor + '/*.js' )
// 		.pipe( concat( config.project + '-vendor.js' ) )
// 		.pipe( gulp.dest( dest_theme_js ) )
// 		.pipe( rename({
// 			suffix: '.min'
// 		}))
// 		.pipe( uglify() )
// 		.on( 'error', function( err ) {
// 			console.error( 'Error', err.message );
// 		})
// 		.pipe(gulp.dest( dest_theme_js ) );
// });

// // Scripts task: run the three other scripts tasks
// gulp.task('scripts', function() {
// 	gulp.start('scripts-custom');
// 	gulp.start('scripts-plugins');
// 	gulp.start('scripts-vendor');
// });

// Dist: much like build, except clean our destination first.
// gulp.task('dist', ['clean'], function() {
// 	gulp.start('build');
// });


// Default: right now, just running build
// gulp.task('default', function() {
// 	gulp.start('build');
// });


// // Watch: watch our files and do things when they change
// gulp.task('watch', function() {
// 	// Watch .scss files
// 	gulp.watch( src_sass + '/**/*.scss', ['styles'] );

// 	// Watch custom JavaScript files
// 	gulp.watch( src_js + '/*.js', ['scripts-custom'] );

// 	// Watch theme template files
// 	gulp.watch( src_theme + '/**/*.*', ['build-theme'] );
// });
