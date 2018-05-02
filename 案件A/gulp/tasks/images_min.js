/*
|--------------------------------------------------------------------------
| TASKS/IMAGES_MIN
|--------------------------------------------------------------------------
*/
const $ = require('../plugin');
const config = require('../config').img_min;

$.gulp.task('img_min', () => {
    return $.gulp.src([config.input, config.reject], {base: 'src'})
        .pipe($.changed(config.dest)) // src内に変更がないかチェック
        .pipe($.imagemin([
        $.pngquant({ // png設定
            quality: '70-80', // 画質
            speed: 1, // 最低のスピード
            floyd: 0, // ディザリングなし
        }),
        $.mozjpeg({ // jpeg設定
            quality: 85, // 画質
            progressive: true
        }),
        $.imagemin.svgo(),
        $.imagemin.optipng(),
        $.imagemin.gifsicle()
        ]))
        .pipe($.gulp.dest(config.dest))
        .pipe($.notify({
            title: 'image min success!!'
        }));
});