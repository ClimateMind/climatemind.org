/*jslint node: true */
'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
  html: 'docs/*.html',
  pug: 'src/*.pug',
  js: 'src/javascript/**/*.js',
  stylesWatch: 'src/styles/**/*.styl',
  stylesInput: 'src/styles/styles.styl',
  output: 'docs',
  outputJs: 'docs/*.js',
  img: 'docs/img'
};

gulp.task('styles', function () {
  gulp.src(path.stylesInput)
    .pipe(stylus({
      paths: ['node_modules'],
      'include css': true,
      compress: true
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src(path.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(path.output));
});

gulp.task('uglify', function() {
  return gulp.src('docs/app.js')
    .pipe(uglify())
    .pipe(gulp.dest(path.output));
});

gulp.task('lint', function() {
  return gulp.src(path.js).pipe(eslint({
    'rules':{
        'semi': [1, 'always']
    }
  }))
  .pipe(eslint.format());
});

gulp.task('minify', function () {
  return gulp.src(path.pug)
    .pipe(pug())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(path.output));
});

gulp.task('observeFiles', function () {
  gulp.watch(path.stylesWatch, ['styles']);
  gulp.watch(path.js, ['lint', 'scripts']);
  gulp.watch(path.pug, ['minify']);
  gulp.watch(path.html).on('change', reload);
  gulp.watch(path.outputJs).on('change', reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: path.output,
      index: 'index.html'
    }
  });
});

gulp.task('build', ['styles', 'scripts', 'minify']);
gulp.task('publish', ['build', 'uglify']);
gulp.task('default', ['build', 'observeFiles', 'browserSync']);
