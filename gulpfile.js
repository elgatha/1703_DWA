const gulp = require('gulp');
const bump = require('gulp-bump');
const argv = require('yargs').argv;

const version = '';

if (argv.major) {
  version = 'major';
} else if (argv.minor) {
  version = 'minor';
} else {
  version = 'patch';
}

gulp.task('bump', () => {
  gulp.src('./package.json')
    .pipe(bump({type:version}))
    .pipe(gulp.dest('./'));
});
