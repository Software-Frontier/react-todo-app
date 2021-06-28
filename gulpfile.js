import { src, dest, watch, series, lastRun } from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass';
import cleanDir from 'gulp-clean-dir';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';

// Set SASS compiler to Dart SASS.
sass.compiler = dartSass;

const path = {
  bulma: {
    src: './node_modules/bulma/css/bulma.min.css',
    dest: './src/vendor',
  },
  scss: {
    src: './src/scss/**/*.scss',
    dest: './src/css',
    rename: 'styles.min.css',
  },
};

const buildBulma = () => {
  return src(path.bulma.src, { since: lastRun(buildBulma) }).pipe(
    dest(path.bulma.dest)
  );
};

const buildCSS = () => {
  return src(path.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename(path.scss.rename))
    .pipe(cleanDir(path.scss.dest))
    .pipe(cleanCss())
    .pipe(dest(path.scss.dest));
};

const serve = () => {
  return watch(
    [path.scss.src],
    { events: ['add', 'change', 'unlink'] },
    series(buildBulma, buildCSS)
  );
};

export default serve;
