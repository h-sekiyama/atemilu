var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var config = require('../config');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('webpack', function () {
  gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulpif(config.js.uglify, uglify()))
    .pipe(gulp.dest(config.js.dest))
    .pipe(notify({
        title: 'コンパイル完了！',
        message: new Date(),
        sound: 'Glass'
    }));
});