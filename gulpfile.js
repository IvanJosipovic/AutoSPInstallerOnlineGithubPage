/// <binding ProjectOpened='default' />
var gulp = require('gulp');
var tslint = require("gulp-tslint");
var tsd = require('gulp-tsd');
var ts = require('gulp-typescript');
var ngmin = require('gulp-ngmin');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

//gulp.task('default', ['tslint', 'ts', 'concat'], function () {
//});

gulp.task('default', [],
    function(cb) {
        runSequence(['ts', 'concat'], cb);
    });

gulp.task('ts', function () {
    return gulp.src('App/**/*.ts')
		.pipe(ts({
                noImplicitAny: false,
                out: 'output.js'
		}))
        //.pipe(ngmin({ dynamic: true }))
		.pipe(gulp.dest('dist'));
});

gulp.task('concat', function () {
    return gulp.src([
            'lib/angular/angular.min.js',
            'lib/angular-route/angular-route.min.js',
            'lib/angular-messages/angular-messages.min.js',
            'lib/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
            'lib/jsonix/dist/Jsonix-min.js',
            'lib/vkbeautify/vkbeautify.js',
            'Schema/*.js', 
            'dist/output.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest(''));
});

/* gulp.task("tslint", () =>
    gulp.src(".ts")
        .pipe(tslint())
        .pipe(tslint.report({
        summarizeFailureOutput: true
    }))
); */

gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});