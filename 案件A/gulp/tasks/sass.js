/*
|--------------------------------------------------------------------------
| TASKS/SASS
|--------------------------------------------------------------------------
*/
const $ = require('../plugin');
const config = require('../config').sass;

$.gulp.task('sass', () => {
    return $.gulp.src([config.input, config.reject], {base: 'src'})
        .pipe($.plumber({errorHandler: $.notify.onError(config.opt.plumber)}))
        .pipe($.sassGlob())
        .pipe($.sass({
            outputStyle: 'expanded'
        }))
        .pipe($.csscomb())
        .pipe($.autoprefixer(['last 3 versions', 'ie >= 9', 'Android >= 4', 'iOS >= 9']))
        .pipe($.gcmq())
        .pipe($.rename(function (path) {
            path.dirname = path.dirname.replace('scss', 'css');
        }))
        .pipe($.gulp.dest(config.dest))
});