const jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', function() {
	console.log(" Pase por Aqui");
});

gulp.task('lint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish.ja'));
});
