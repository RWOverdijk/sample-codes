var gulp = require('gulp'),
  connect = require('gulp-connect');
  uglify = require('gulp-uglify'),
  gulpif = require('gulp-if');

var outputDir;
var mode = 0; // 0:dev 1:test 2: prod
switch (mode) {
    case 0:
        devmod = 'development';
        outputDir = 'src';
        break;
    case 1:
        devmod = 'test';
        outputDir = 'src';
        break;
    case 2:
        devmod = 'production';
        outputDir = 'build';
        break;
};
var env = process.env.NODE_ENV || devmod;

gulp.task('bower-js', function() {
    return gulp.src('bower_components/**/*.min.js')
        .pipe(gulpif(env === "production", uglify()))
        .pipe(gulp.dest(outputDir + '/js/lib'))
        .pipe(connect.reload());
});

gulp.task('bower-css', function() {
    return gulp.src('bower_components/**/*.min.css')
        .pipe(gulpif(env === "production", uglify()))
        .pipe(gulp.dest(outputDir + '/css/lib'))
        .pipe(connect.reload());
});

gulp.task('bower-bootstrap-fonts', function() {
    return gulp.src('bower_components/bootstrap/dist/fonts/*')
        .pipe(gulpif(env === "production", uglify()))
        .pipe(gulp.dest(outputDir + '/css/lib/bootstrap/dist/fonts'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
  	root: [outputDir]
  });
});
 
gulp.task('default', ['connect','bower-js', 'bower-css', 'bower-bootstrap-fonts']);