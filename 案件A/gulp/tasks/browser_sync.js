/*
|--------------------------------------------------------------------------
| TASKS/BROWSER
|--------------------------------------------------------------------------
*/
const $ = require('../plugin');
const config = require('../config').browser_sync;

$.gulp.task('browser_sync', () => {
    return $.browser_sync.init(config);
});

$.gulp.task('bs_reload', () => {
    return $.browser_sync.reload();
});