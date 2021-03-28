const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.libs.js', 'deps.fonts', 'deps.fa'])

gulp.task('deps.libs.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/jquery-migrate/dist/jquery-migrate.min.js',
        // 'node_modules/bootstrap-validate/dist/bootstrap-validate.js',
        'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'
    ])
    .pipe(gulp.dest('build/assets/js/vendors'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['src/fonts/*.*'])
    .pipe(gulp.dest('build/assets/fonts'))
})

gulp.task('deps.fa', () => {
    // return gulp.src([
    //     'node_modules/font-awesome/fonts/*.*'
    // ])
    // .pipe(gulp.dest('build/assets/fonts'))
})