var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs, config.allTypings
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.destSrcPath));
});

gulp.task('html-copy', function() {
    return gulp.src(config.allHtml)
        .pipe(gulp.dest(config.destSrcPath));
});

gulp.task('css-copy', function() {
    return gulp.src(config.allCss)
        .pipe(gulp.dest(config.destSrcPath));
});

gulp.task('resource-copy', function() {
    return gulp.src(config.allImages)
        .pipe(gulp.dest(config.destSrcPath));
});

gulp.task('lib-copy', function() {
    return gulp.src(config.extLibs)
        .pipe(gulp.dest(config.destLibPath));
});

gulp.task('dev', ['ts-lint', 'compile-ts', 'html-copy', 'css-copy', 'resource-copy', 'lib-copy']);

gulp.task('serve', ['dev'], function() {
    	
    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
    gulp.watch([config.allCss], ['css-copy', 'ts-lint', 'compile-ts']);
    gulp.watch([config.allHtml], ['html-copy', 'ts-lint', 'compile-ts']);
	
    browserSync({
        port: 3000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',    
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./dist-root'],
            middleware: superstatic({ debug: false})
        }
    });	
});

gulp.task('default', ['serve']);