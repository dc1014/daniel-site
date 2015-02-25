var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var paths = {
	css: ['./public/css/**/*.css'],
	app_js: ['./app/react_components/main.jsx'],
	jsx: ['app/react_components/*.jsx'],
};

gulp.task('js', function() {
	browserify(paths.app_js)
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./public/assets/dist/'));
});

gulp.task('watch', function() {
	gulp.watch(paths.jsx, ['js'])
});

gulp.task('default', ['js', 'watch']);