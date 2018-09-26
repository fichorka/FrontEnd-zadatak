var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


//Sass compiler:
gulp.task('sass', function () {
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('distr/css'))
});

//Watch sass
gulp.task('watch:sass', ['sass'], function (done) {
	browserSync.reload(done);
	done();
});


//Transpile js to ES5 and minify:
gulp.task('js', function () {
	return gulp.src('app/js/es6/main.js')
		.pipe(babel ({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('distr/js'));
});

//Watch js
gulp.task('watch:js', ['js'], function (done) {
	browserSync.reload(done);
	done();
});


//Minify PNG, JPEG, GIF and SVG images:
gulp.task('imagemin', function() {
	return gulp.src('app/assets/*')
		.pipe(imagemin())
		.pipe(gulp.dest('distr/assets'));
});

//Watch imagemin
gulp.task('watch:imagemin', ['imagemin'], function (done) {
	browserSync.reload(done);
	done();
});


//BrowserSync serve
gulp.task('serve', ['sass', 'js', 'imagemin'], function () {
	
	browserSync.init({
		server: './'
	});
	
	gulp.watch('app/scss/main.scss', ['watch:sass']);
	gulp.watch('app/js/es6/*.js', ['watch:js']);
	gulp.watch('app/assets/*', ['watch:imagemin']);
	gulp.watch('./index.html').on('change', browserSync.reload);
});

//build
gulp.task('build', ['sass', 'js', 'imagemin']);

//Default task
gulp.task('default', ['serve']);