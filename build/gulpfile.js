/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

*/
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
