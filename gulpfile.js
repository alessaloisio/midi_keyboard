"use strict";

const gulp = require("gulp");
const rename = require("gulp-rename");
const browserify = require("gulp-browserify");
const babelify = require("babelify");

const dirs = {
  src: "./src/MidiKeyboard.js",
  dest: "./public/js/"
};

gulp.task("watch", function() {
  gulp.watch("./src/*.js").on("change", function(event) {
    gulp
      .src(dirs.src)
      .pipe(
        browserify({
          transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
        })
      )
      .pipe(rename("bundle.js"))
      .pipe(gulp.dest(dirs.dest));
  });
});
