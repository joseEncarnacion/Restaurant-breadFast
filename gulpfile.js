const gulp = require('gulp');
const sass = require('gulp-sass')
const browserSync = require('browser-sync');

const server = browserSync.create();


// sass
gulp.task('sass', () => 
gulp.src('./dev/sass/**/*main.scss')
.pipe(sass())
.pipe(gulp.dest('./public/css/'))
.pipe(browserSync.stream())
);

// html

gulp.task('html', () => 
gulp.src('./public/**/*.html')

);

gulp.task('server', () => {
    server.init({
        server: {
            baseDir: "./public"
        }
    })
    
    
    gulp.watch('./dev/sass/**/*.scss', gulp.series('sass')).on('change', server.reload);
    gulp.watch('./public/**/*.html', gulp.series('html')).on('change', server.reload);
    
    
})



