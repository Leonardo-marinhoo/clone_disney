const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compile_js(){
    return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

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
exports.default = gulp.parallel(compile_sass,compress_images, compile_js);

// To watch changes and compile sass and images automatically
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(compile_sass));
    gulp.watch('./src/js/**/*.js', gulp.parallel(compile_js));
}