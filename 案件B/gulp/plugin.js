/*
|--------------------------------------------------------------------------
| PLUGINS
|--------------------------------------------------------------------------
*/
module.exports = {
    gulp: require("gulp"), // gulp本体
    cache: require('gulp-cached'), //変更監視用(scss)
    plumber: require('gulp-plumber'), //watch中にエラー防止
    csscomb: require('gulp-csscomb'), //cssプロパティ順序
    sass: require("gulp-sass"), //sassコンパイル
    sassGlob: require("gulp-sass-glob"), //sassの@importを使用可能にする
    rename: require('gulp-rename'),// 名前変更用
    runSequence: require('run-sequence'), //タスクの処理順指定
    htmlhint: require('gulp-htmlhint'), // HTML文法チェック
    csslint: require('gulp-csslint'), // CSS文法チェック
    htmlReporter: require('gulp-csslint-report'), // HTML形式のレポート出力
    autoprefixer: require("gulp-autoprefixer"),//ベンダープレフィックス
    gcmq: require('gulp-group-css-media-queries'), //CSSメディアクエリー整理
    notify: require('gulp-notify'), //エラーを通知
    changed: require('gulp-changed'), //変更監視用(images)
    requireDir: require('require-dir'), // 下層ディレクトリにあるファイル読み込み用
    imagemin: require('gulp-imagemin'), // 画像圧縮用
    pngquant: require('imagemin-pngquant'), // 圧縮率を高めるのにプラグインを入れる png
    mozjpeg: require('imagemin-mozjpeg'), // 圧縮率を高めるのにプラグインを入れる jpg
    browser_sync: require('browser-sync').create() // ブラウザのライブリロード
};