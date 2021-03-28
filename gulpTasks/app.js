const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.img', 'app.popper'])

gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build'))
})
gulp.task('app.css', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})
gulp.task('app.js', () => {
    return gulp.src('src/js/main.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})
gulp.task('app.popper', () => {
    return gulp.src('src/js/popper.min.js')
        .pipe(gulp.dest('build/assets/js/vendors'))
})
gulp.task('app.img', () => {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/assets/img'))
})