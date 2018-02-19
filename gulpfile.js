const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const order = require('gulp-order');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('html', () => {
  gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('images', () => {
  gulp.src('images/*')
    .pipe(imagemin(
      {
        progressive: true,
        use: [imageminPngquant()]
      }
    ))
    .pipe(gulp.dest('build/images'));
});

gulp.task('css', () => {
  gulp.src('./css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', () => {
  gulp.src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(order([
      'js/resources.js',
      'js/app.js',
      'js/engine.js'
    ], { base: './' }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('lint', () => {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', [ 'html', 'images', 'css', 'lint', 'js']);