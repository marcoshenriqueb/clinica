var gulp = require('gulp');
// var data = require('gulp-data');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

function stylusTask() {
  return gulp.src('./src/stylus/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./front/static/css'));
};

gulp.task('default', function() {
    gulp.watch('src/stylus/**/*.styl', stylusTask);
});
