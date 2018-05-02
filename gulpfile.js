// Include gulp
const gulp = require('gulp');

// Include Our Plugins
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const livereload = require('gulp-livereload')
const minifyCss = require('gulp-cssnano')
const minify = require('gulp-minify')
const uglify = require('gulp-uglify')
const babel = require("gulp-babel");
const sourcemaps = require('gulp-sourcemaps');
const gulpCopy = require('gulp-copy');

// Compile Our Js
gulp.task('compress', () => {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
		.pipe(concat('app.debug.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/js'));
})

// Compile Our Sass
gulp.task('sass', () => {
    return gulp.src('src/style.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload())
})

const styleSources = [
    'node_modules/bulma/css/*.min.css'
]

gulp.task('copyStyle', () => {
    return gulp.src(styleSources)
    .pipe(gulpCopy('public/css', { prefix: 3 }))
    .pipe(gulp.dest('public/css'))
})

const scriptSources = [
    'node_modules/vue/dist/vue.min.js',
    'node_modules/axios/dist/axios.min.js'
]
gulp.task('copyScript', () => {
    return gulp.src(scriptSources)
    .pipe(gulpCopy('public/js', { prefix: 3 }))
    .pipe(gulp.dest('public/js'))
})

// Watch Files For Changes
gulp.task('watch', () => {
    livereload.listen()
    gulp.watch(['src/**/*'], ['sass', 'compress'])
})

// Default Task
gulp.task('default', ['compress', 'sass', 'copyStyle', 'copyScript', 'watch'])