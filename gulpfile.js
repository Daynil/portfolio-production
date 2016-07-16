'use strict';

let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

// Start a local server in base directory after compile-ts runs
gulp.task('serve', ['compile-scss'], () => {
	browserSync.init({
		server: {
			baseDir: ['./dist', './']
		}
	});
	
	// Watch for changes in html and ts files in base directory, reload if they occur
	gulp.watch(['./index.html'], browserSync.reload);
	gulp.watch(['./assets/scss/*.scss'], ['src-watch']);
	
});

// Make sure the compile-ts task completes before reloading browsers
gulp.task('src-watch', ['compile-scss', 'reload']);

gulp.task('reload', ['compile-scss'], () => {
	browserSync.reload();
});

gulp.task('compile-scss', () => {
	var sourceScssFiles = [
		'./assets/scss/*.scss'
	];
	
	var scssResult = gulp
                    .src(sourceScssFiles)
                    .pipe(sourcemaps.init())
                    .pipe(sass().on('error', sass.logError));
		
	var stream = scssResult
                    .pipe(sourcemaps.write('.'))
                    .pipe(gulp.dest('./assets/css'));
		
	return stream;
});