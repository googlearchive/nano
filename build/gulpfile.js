var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyInline = require('gulp-minify-inline');

var minifyOptions = {
  //js: false
};
 
var annotations = [
  '../src/annotator.html',
  '../src/annotations.html'
];

var nano = [
  '../src/annotator.html',
  '../src/annotations.html',
  '../src/dom-module.html',
  '../src/nano-lib.html',
  '../src/nano-bootstrap.html'
];

gulp.task('annotations', function() {
  return gulp.src(annotations)
    .pipe(concat('annotations.html'))
    .pipe(minifyInline(minifyOptions))
    .pipe(gulp.dest('../'))
  ;
});

gulp.task('nano', function() {
  return gulp.src(nano)
    .pipe(concat('nano.html'))
    .pipe(minifyInline(minifyOptions))
    .pipe(gulp.dest('../'))
  ;
});

gulp.task('default', ['annotations', 'nano']);
