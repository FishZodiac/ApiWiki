var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var markdown = require('gulp-markdown');
var rename = require("gulp-rename");

gulp.task("marked", function() {
  return gulp.src("www/static/markdown/**/*.md")
    .pipe(markdown())
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest("www/static/template/"))
});

gulp.task("default", function() {
  browserSync.init({
    server: {
      baseDir: 'www'
    }
  });
  gulp.watch('www/static/markdown/**/*.md', ["marked"]);
  gulp.watch('www/**/*.html').on('change', browserSync.reload);
  gulp.watch('www/**/*.css').on('change', browserSync.reload);
});