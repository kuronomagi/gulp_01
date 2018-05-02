/*
|--------------------------------------------------------------------------
| TASKS/HTML
|--------------------------------------------------------------------------
*/
const $ = require('../plugin');
const config = require('../config').html;

$.gulp.task( 'html_build', () => {
    return $.gulp.src([config.input, config.reject], {base: config.src})
        .pipe($.htmlhint(config.opt.htmlhintrc))
        .pipe($.htmlhint.reporter())
        .pipe($.gulp.dest(config.dest))
});