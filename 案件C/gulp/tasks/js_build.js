/*
|--------------------------------------------------------------------------
| TASKS/JS_BUILD
|--------------------------------------------------------------------------
*/
const $ = require('../plugin');
const config = require('../config').js;

$.gulp.task('js_build', () => {
    return $.gulp.src([config.input, config.reject], {base: 'src'})
        .pipe($.gulp.dest(config.dest))
});