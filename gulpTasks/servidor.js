const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watchChanges', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/img/**/*.*', () => gulp.start('app.img'))
})
gulp.task('servidor', ['watchChanges'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))
})