/*
|--------------------------------------------------------------------------
| TASKS/CSS_LINT
|--------------------------------------------------------------------------
*/
const $ = require('../plugin');
const config = require('../config').css_lint;

$.gulp.task('css_lint', () => {
    return $.gulp.src(config.input)
        .pipe($.plumber({errorHandler: $.notify.onError(config.opt.plumber)}))
        .pipe($.csslint(config.opt.csslint))
        .pipe($.csslint.formatter())
        .pipe($.htmlReporter())
});