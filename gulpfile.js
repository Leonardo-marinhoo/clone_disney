const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compile_sass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'));
}

function compress_images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));

}
exports.default = gulp.parallel(compile_sass,compress_images);

// To watch changes and compile sass and images automatically
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(compile_sass));
}