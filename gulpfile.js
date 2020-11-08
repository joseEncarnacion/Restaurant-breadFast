const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');


const server = browserSync.create();


// sass
gulp.task('sass', () => 
gulp.src('./dev/sass/**/*main.scss')
.pipe(sass())
.pipe(gulp.dest('./public/css/'))
.pipe(browserSync.stream())
);

// pug
gulp.task('pug', () =>
gulp.src('./dev/pug/pages/**/*.pug')
.pipe(pug())
.pipe(gulp.dest('./public/'))
)

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
    gulp.watch('./dev/pug/**/*.pug', gulp.series('pug')).on('change', server.reload);
    gulp.watch('./public/**/*.html', gulp.series('html')).on('change', server.reload);
    
    
})



