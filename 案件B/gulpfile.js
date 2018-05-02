/*
|--------------------------------------------------------------------------
| REQUIRE
|--------------------------------------------------------------------------
*/
const $      = require('./gulp/plugin');
const config = require('./gulp/config').path;
const path   = require('path');


/*
|--------------------------------------------------------------------------
| INITIALIZE
|--------------------------------------------------------------------------
*/
$.requireDir(config.task, {recurse: true});


/*
|--------------------------------------------------------------------------
| TASK GROUPS
|--------------------------------------------------------------------------
*/
$.gulp.task('build', (callback) => {
    $.runSequence(['html_build', 'sass', 'js_build', 'img_min'], 'css_lint', callback);
});

$.gulp.task('img', ['img_min'], () => {});

$.gulp.task('lint', ['css_lint'], () => {});

$.gulp.task('watch', ['browser_sync'], () => {
    $.gulp.watch(path.join(config.src, 'scss',  '**', '*.scss'), () => { return $.runSequence('sass', 'css_lint');});
    $.gulp.watch(path.join(config.src, '**', '*.html'         ), () => { return $.gulp.start('html_build');});
    $.gulp.watch(path.join(config.src, '**', '*.*'            ), () => { return $.gulp.start('bs_reload');});
});
