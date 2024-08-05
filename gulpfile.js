const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compile_sass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'));
}

exports.default = compile_sass;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(compile_sass));
}