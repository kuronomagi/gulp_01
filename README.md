# **Gulpとは?**
下記引用。 [ざっくりGulp.js入門（Mac向け）](https://qiita.com/kazukichi/items/884a1379eea5918689ed)
>タスク自動化ツール。
画像やjs、cssなどの色々なファイルを圧縮してくれたり、CSSプリプロセッサのSASS、LESS、Stylusなどを自動でコンパイルしてくれたり、ファイルが更新されたら自動でブラウザを更新して最新の画面を表示してくれたりと色々なことが出来ちゃうツール。
同じタスク自動化ツールでGruntというものもあるが、Gulpの方が後発なのでシンプルに書け、Gruntと違い非同期で処理を行うので処理速度も速い。
WEBサービスを効率的に量産したり、保守性を高めたい場合には必須。
一度使い始めちゃうと便利すぎて手放せなくなる。


上記、圧縮やコンパイルの他にも、slimやejs（「cssに対するsassの関係」みたいなもの）などのコンパイルや<br>コンパイル時にlintチェックをかけたり、sassを記載するだけでスタイルガイドを作成したりといったことを短いコマンドで実行できたりします。



# **Gulpの導入**

## **1.Node.jsをインストール**
gulpはNode.jsのパッケージ(ライブラリ)のひとつです。glupを利用するにはNode.jsのインストールが必要です。

[Node.js](https://nodejs.org/en/download/)

上記サイトからOSに合うインストーラーをDLし実行します。

参考
* [windowsにNode.jsをインストールする](https://qiita.com/Masayuki-M/items/840a997a824e18f576d8)



## **2.コマンドラインの起動(Windows7)**
1. 画面左下のWindowsボタンをクリック
2. 全てのプログラム
3. アクセサリ
4. コマンドプロンプトで起動

Node.jsのインストールが完了したらターミナルを起動し、以下のコマンドを実行します。

```terminal:ターミナル
node -v
```

バージョン番号が表示されれば無事にインストール完了できています。




### **おすすめツール**
こちらの設定がなくても動作しますが、使ってみると少し幸せになるかもです。

#### **PowerShell（コマンドプロンプトのようなもの）**
インストールは不要
* Windowsにデフォルトでインストールされているはず。

利点
* macのコマンドと共通しているものが多い。（ ` ls ` など）
* 共通のコマンドが多い為、比較的参考にできる記事が増える。

詳細が知りたい方は、下記を参照。
>[PowerShell 使い方メモ](https://qiita.com/opengl-8080/items/bb0f5e4f1c7ce045cc57)


#### **Visual Studio Code**
下記引用。[すごいぞ!! Visual Studio Code!!](https://qiita.com/kmurae/items/d1438ea62dc02bdb301c)
>Visual Studio Codeとは？
Visual Studio Code はオープンソースのソースコードエディタである。 マイクロソフトにより開発され、Windows, Linux, OS X 上で動作する。 デバッグ、gitクライアントの統合、シンタックスハイライト、インテリセンス、スニペット、リファクタリングなどの機能を持つ。

利点
* 他エディタで出来ることは、設定次第で大体可能。
* Visual Studio Code内でターミナルが開ける。
個人的には、VScodeで開いたフォルダをターミナルでも**rootフォルダ**にしてくれるのがすごく便利です。


## **3.npmを利用したgulp環境構築**
Node.jsには、「npm(node package manager)」と呼ばれるパッケージマネージャー(*Rubyでいうgemのようなもの)があります。gulp自体のインストールだけでなく、gulpで利用するプラグインについても、ターミナル上（黒い画面）でnpmコマンドを使ってインストールしていきます。



### **パッケージのインストール**

ターミナルで「package.json」のあるディレクトリへ移動し、以下のコマンド実行。<br>プラグインをインストールします。<br>

```terminal:ターミナル
npm i
```

そうするとプロジェクトフォルダ内に下記のようなフォルダが作られます。
*たまにインストールに失敗するので、そのときは ` node_modules ` のフォルダごと削除してもう一度 ` npm i ` します。

```text:フォルダ内
/node_modules
```

下記、構造例です。
プラグインを追加すると` /node_modules `の中にプラグインごとのフォルダが作られ、そこにプラグインのプログラムが追加されます。

```text:フォルダ内
/node_modules　←　gulpを動かすためのnode.jsのフォルダ
    |_/gulp　←　gulpが入ってるフォルダ
    |_/gulp-stylus　←　Stylusプラグインのフォルダ
```


※「package.json」が既に用意されている場合は不要ですが、自分で一から新規作成する際は  `npm init` で「package.json」の作成が必要になります。詳細は検索してみてください。
[ざっくりGulp.js入門（Mac向け） package.jsonの作成](https://qiita.com/kazukichi/items/884a1379eea5918689ed#packagejson%E3%81%AE%E4%BD%9C%E6%88%90)


## **4 Gulpの実行**
パッケージのインストールが完了したら、ターミナルで ` gulpfile.js ` のあるディレクトリに移動し、下記のコマンドを実行。

```terminal:ターミナル
gulp build
```

上手く動作すると下記のような表示がコマンド上に出るかと思います。

```ruby:buildを実行
[17:28:35] Starting 'build'...
[17:28:35] Starting 'html_build'...
[17:28:35] Starting 'sass'...
[17:28:35] Starting 'js_build'...
[17:28:35] Starting 'img_min'...
[17:28:44] Finished 'js_build' after 8.97 s
[17:28:44] Finished 'html_build' after 9.03 s
[17:28:45] gulp-imagemin: Minified 0 images
[17:28:45] Finished 'img_min' after 9.5 s
[17:28:47] Finished 'sass' after 11 s
[17:28:47] Starting 'css_lint'...
[17:28:48] Finished 'css_lint' after 1.06 s
[17:28:48] Finished 'build' after 12 s
```

```ruby:watchを実行
[17:34:44] Starting 'browser_sync'...
[17:34:44] Finished 'browser_sync' after 31 ms
[17:34:44] Starting 'watch'...
[17:34:45] Finished 'watch' after 108 ms
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:8000
    External: http://192.168.XX.XX:8000
 --------------------------------------
          UI: http://localhost:8001
 UI External: http://192.168.XX.XX:8001
 --------------------------------------
[Browsersync] Serving files from: ./dest
```

今回 ` gulpfile.js ` で設定しているコマンドは以下になります。
主に ` gulp watch ` で作業し、必要に応じて ` gulp build ` する想定です。

```terminal:ターミナル
gulp build ... html、scss、js、imageのコンパイルや圧縮。

gulp watch ... ライブリロード（html、scss、jsなどに変更があった際にブラウザを自動で更新）

gulp img ... 画像圧縮のみ実行（srcフォルダの画像をdestフォルダへ出力）

gulp lint ... バリデートチェックのみ実行（エラー結果をターミナル上に出力）
```

エラーが出ると、下記のように出力して教えてくれます。

```ruby:lintエラー
[11:05:00] Finished 'css_lint' after 309 ms
[11:05:15] Starting 'sass'...
[11:05:15] Starting 'bs_reload'...
[11:05:15] Finished 'bs_reload' after 68 μs
[11:05:15] Finished 'sass' after 291 ms
[11:05:15] Starting 'css_lint'...
[11:05:15] 1 lint errors in style.css
[Browsersync] Reloading Browsers...


csslint: There is 1 problem in C:\Users\root\案件A\dest\css\style.css.

style.css
1: warning at line 742, col 1
Don't use IDs in selectors.
#top {[11:05:15] Finished 'css_lint' after 351 ms
```

```ruby:scssにエラーがあるとき
events.js:182
      throw er; // Unhandled 'error' event
      ^
Error: src\scss\object\project\_top.scss
Error: Invalid CSS after "}": expected selector or at-rule, was "}"
        on line 15 of src/scss/object/project/_top.scss
        from line 4 of src/scss/style.scss
>> }
   -^
```

全て英語ですが、翻訳すれば大体エラー内容がわかるかと思います。


<br>

# **ファイル詳細**

以下ディレクトリ構造になります。

```text:
root/
　├─ node_modules/
　├─ 案件A/
　│　├─ dest/
　│　│　├─ images/
　│　│　├─ js/
　│　│　├─ css/
　│　│　├─ store/
　│　│　└─ index.html
　│　└─ gulp/
　│　│　├─ tasks/
　│　│　│　├─ browser_sync.js
　│　│　│　├─ css_lint.js
　│　│　│　├─ html.js
　│　│　│　├─ images_min.js
　│　│　│　├─ js_build.js
　│　│　│　└─ sass.js
　│　│　├─ config.js
　│　│　└─ plugin.js
　│　├─ src/
　│　│　├─ images/
　│　│　├─ js/
　│　│　├─ scss/
　│　│　├─ store/
　│　│　└─ index.html
　│　└─ gulpfile.js
　├─ 案件B/
　├─ 案件C/
　└─ package.json
```

## **はじめに**
- gulpfile.jsにほとんどの設定を記述可能ですが、すごく長くなり見通しが悪くなる為、機能ごと分割して作成しています。

- 今回設定している機能は、「scssのコンパイル」、「画像圧縮」、「ブラウザのライブリロード」の基本的なもののみです。「html」「js」は形だけの作成ですので使用の際に削除しても問題ないです。

- 案件ごとに ` npm i ` をしたくない為、` root ` フォルダ直下に置いた ` node_modules ` を使いまわしていく想定で作成しています。その為「案件」の階層では、 ` node_modules ` ` package.json ` は不要です。

- 基本的にsrcフォルダが制作用。destフォルダが公開用で設定しています。加工しないhtml、jsもすべてsrcフォルダ内で管理する想定ですが、案件によって随時変更してください。（設定ではdestフォルダ内にファイルを入れてても大丈夫なように作成しています。）

- 案件の要件に応じて各案件フォルダ内の ` gulpfile.js ` の設定を変更してください。（lint設定や、ベンダープレフィックスに対応させるデバイスなど）

- パッケージを追加する際は、` root ` 直下の ` package.json ` がある階層で追加してください。

## **gulpfile.js**

```json:package.json
{
  "name": "hoge",
  "version": "1.0.0",
  "description": "",
  "main": "gulpfile.js",
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "browser-sync": "^2.23.7",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^5.0.0",
    "gulp-cached": "^1.1.1",
    "gulp-changed": "^3.2.0",
    "gulp-csscomb": "^3.0.8",
    "gulp-csslint": "^1.0.1",
    "gulp-csslint-report": "^2.0.0",
    "gulp-group-css-media-queries": "^1.2.2",
    "gulp-htmlhint": "^2.1.1",
    "gulp-htmlhint-checkstyle-file-reporter": "^0.3.0",
    "gulp-imagemin": "^4.1.0",
    "gulp-notify": "^3.2.0",
    "gulp-plumber": "^1.2.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^4.0.1",
    "gulp-sass-glob": "^1.0.9",
    "imagemin-mozjpeg": "^7.0.0",
    "imagemin-pngquant": "^5.0.1",
    "require-dir": "^1.0.0",
    "run-sequence": "^2.2.1"
  }
}
```

npmでインストールするパッケージ一覧になります。


## **gulpfile.js**

```js:gulpfile.js
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

```
` gulpfile.js ` では主に基本設定とタスク管理で切り分けています。
` gulp watch ` が開発用、` gulp build ` はファイルが必要な際に都度実行する想定です。
パスは変数で管理、またrunSequenceでcssのlint処理が最後になるよう順番を指定しています。


## **gulp/config.js**

```js:config.js
/*
|--------------------------------------------------------------------------
| CONFIG
|--------------------------------------------------------------------------
*/
const path = require
const base = {
    root:  './',
    src:   './src',
    dest:  './dest',
    tasks: './gulp/tasks'
}

module.exports = {
    path: base,
    sass : {
        src: base.src,
        input: [base.src, '**', '*.scss'].join('/'),
        reject: '!' + [ base.src,'**', '_*.scss'].join('/'),
        dest: [base.dest].join('/'),
        opt: {
            plumber: {message : 'Error: Sass syntax error \n <%= error.message %>', icon: './gulp/.icon/notify-icon.png'},
        }
    },
    js : {
        src: base.src,
        input: [base.src, '**', '*.js'].join('/'),
        reject: '!' + [ base.src,'**', '_*.js'].join('/'),
        dest: [base.dest].join('/'),
        opt: {
            plumber: {message : 'Error: Js syntax error \n <%= error.message %>', icon: './gulp/.icon/notify-icon.png'},
        }
    },
    css_lint : {
        src: base.dest,
        input: [base.dest, '**' , '*.css'].join('/'),
        opt: {
            csslint: {
                'empty-rules': true, // 空のセレクタをチェック
                'display-property-grouping': true, //指定が誤っているプロパティをチェック
                'import': false, //他の外部cssを読み込んでいるかチェック
                'known-properties': true, // 存在しないプロパティがないかチェック
                'star-property-hack': false, // 古いブラウザ対策
                'order-alphabetical': false, // アルファベット順を考慮しない
                'qualified-headings': false, // タグにスタイル追加を許可する
                'outline-none': false,
                'adjoining-classes': false, // IE6無視ならfalse
                'box-sizing': false, // box-sizingプロパティ(IE6と7を無視して良いならfalse)
                'important': false, // import使用許可
                'universal-selector': false, // 全称セレクタ(*)使用許可
                'box-model': false, // box-sizing: border-box;を設定していれば問題なし
                'zero-units': false, // 0の時に単位を省略するか
                'font-sizes': false, // font-sizeを指定しすぎかどうが(汎用classがあるならfalse)
                'regex-selectors': false, // CSS3の属性セレクタ、正規表現に似たものの使用許可
                'unqualified-attributes': false // [type="file"]などの使用許可
            }
        }
    },
    html: {
        src: base.src,
        input: [base.src, '**' , '*.html'].join('/'),
        reject: '!' + [ base.src,'**', '_*.html'].join('/'),
        dest: [base.dest].join('/'),
        opt: {
            plumber: { message : 'Error: HTML syntax error \n <%= error.message %>', icon: './.icon/notify-icon.png'  },
            // HTMLHint：http://htmlhint.com/ から設定詳細確認可能
            htmlhintrc: {
                'tagname-lowercase': true,  //タグ名がLowerCaseか
                'attr-lowercase': true, //属性名がLowerCaseか
                'attr-value-double-quotes': true, //属性の値がダブルクォートでかこまれているか
                'doctype-first': false, //DOCTYPE宣言が先頭にあるか
                'tag-pair': true, //閉じタグが正しいか
                // 'tag-self-close': true, // 「/>」が必要なものについているか 例:<img src='dammy.img' />
                'spec-char-escape': true, //特殊文字を使用しているか
                'id-unique': true, //IDはユニークか
                'src-not-empty': true, //srcの値があるか
                'attr-no-duplication': true, //同じ属性が複数指定されていないか
                'title-require': true, //タイトルタグの中身があるか
                'doctype-html5': true, // html5の形式になっているか
                'space-tab-mixed-disabled': 'space', // スペースタブ混載禁止  設定値は['space' or 'tab']
                'inline-style-disabled': true, // styleをhtmlに直書きしていないか
                // 'inline-script-disabled': ture, // jsをhtmlに直書きしていないか
                'head-script-disabled': true, // head内にscriptを記述してないか
                'alt-require': true // altがない画像がないか
            }
        }
    },
    img_min : {
        src: base.src,
        input: [base.src, '**', '*.{jpg,jpeg,png,gif,svg}'].join('/'),
        reject: '!' + [base.src, '**', '_*.{jpg,jpeg,png,gif,svg}'].join('/'),
        dest: [base.dest].join('/'),
    },
    browser_sync: {
        ghostMode: false,
        notify: false,
        domain: '0.0.0.0',
        port: 8000,
        ui: {port: 8001},
        browser: 'chrome.exe',
        server : {baseDir: base.dest}
    }
}
```

各タスクの基本設定で切り分けています。
プロジェクトによって、変更が必要になる箇所です。html、cssのlint設定もここでまとめています。
gulpfile.jsからの**相対path**で全てのpathを設定するので注意が必要です。


## **gulp/plugin.js**

```js:plugin.js
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
```

プラグインの読み込み設定です。` gulp-rename ` 等、プラグイン名で検索すると使い方が色々と出てきます。




## **gulp/tasks/browser_sync.js**

```js:browser_sync.js
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
```

ライブリロード用の設定です。



## **gulp/tasks/css_lint.js**

```js:css_lint.js
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
```

cssのlint設定です。` src ` フォルダのcssを対象にlintするように設定しています。




## **gulp/tasks/html.js**

```js:html.js
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
```

htmlの設定です。初期ではlintのみ設定していますが、 ` config.js ` と合わせて色々追加可能です。<br>良い感じのものがあれば教えてほしいです。




## **gulp/tasks/images_min.js**

```js:images_min.js
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
```

画像の圧縮設定です。 ` jpg,jpeg,png,gif,svg ` の形式のものを圧縮します。<br>
`quality ` で圧縮率の変更が可能です。




## **gulp/tasks/js_build.js**

```js:js_build.js
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
```

jsの設定用です。初期では、srcへの吐き出し設定しか用意してません。lintやmin化など各自で追加してもよいかもです。


## **gulp/tasks/sass.js**

```js:sass.js
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
```

sass設定用です。拡張子は ` scss ` を想定しています。` outputStyle ` でビルド時のフォーマットを設定。<br>
` autoprefixer ` でベンダープレフィックスの対応を個別に設定ができます。
- 「last 3 versions」ブラウザのバージョン3つ前まで対応
- 「ie >= 9」IE9以上
- 「Android >= 4」 Android4以上
- 「iOS >= 9」 iOS9以上









## **おまけ**
### **【補足】ターミナル（黒が画面）で処理を中断したいとき**
` Crlt + C ` の後にでてくる ` ^Cバッチ ジョブを終了しますか (Y/N)? ` で ` y ` を入力し ` Enter ` で実行中の処理を中断できます。

### **【補足】nodebrewとは？（Node.jsのバージョン管理について）**
gulpを使用する上ではあまり問題になる機会は少ないですが、railsなどの別言語を使用する際にバージョン管理ができないとやっかいなものがある為、コマンド入力でNodeのバージョン管理が出来たりします。興味のある方は検索してみて下さい。

### **【補足】npmコマンドと一緒に記載されている ` -g ` とは？**
コマンドは下記の用に半スペでつなげて、オプションを設定することができます。
` -g ` オプションはグローバル、全体共通で使いたい場合のインストール方法です。

```terminal:ターミナル
npm install gulp -g
```

### **【補足】yarnとは？**
記事を読んでいると` yarn install `のようなものを見かける機会があるかと思いますが、最初は特に気にせず「npmと似たもの」の認識でで問題ないです。
yarnはパッケージのインストールがnpmより早く、node_modulesの容量が小さくなるメリットがあります。

詳細が知りたい方は、下記を参照。
>[Yarn：Facebook発のパッケージマネジャーはnpmに代わるスタンダードになるか](https://www.webprofessional.jp/yarn-vs-npm/)
>[yarnがnpmと何が違うのか試してみた](https://qiita.com/0829/items/ec5271c06f8ff0633dd3)

### **gulpfile.jsと同じ階層にnode_modulesを置かなくてもよいのか？**
公開されている記事の大部分で、**シンボリックリンク**を作成しないと動作しないよう記載されているようですがWindows7だと作成不要のようです。
もし今回記載した構造で動作しない場合は一度、「node_modules」のシンボリックリンクを作成して試してみてください。

下記windowsのコマンドプロンプトでのシンボリックリンク作成コマンドです。（macは検索すればすぐ出てくるかと思います。）

```terminal:ターミナル
mklink /D 作成リンク+node_modules 元ディレクトリ
```


## **最後に**
今回拡張性を考えてgulpの設定を切り分けていますが、余り機能を使わないならもっとシンプルにまとめるかnpm-scriptsを使ってもよいかもです。自分の好みでいじってみてください。
Gulpはいろんな使い方ができるので、必要に応じて調べてみるとよいかと思います。

## **以下参考サイト一覧です**
* [ざっくりGulp.js入門（Mac向け）](https://qiita.com/kazukichi/items/884a1379eea5918689ed)
* [windowsにNode.jsをインストールする](https://qiita.com/Masayuki-M/items/840a997a824e18f576d8)
* [すごいぞ!! Visual Studio Code!!](https://qiita.com/kmurae/items/d1438ea62dc02bdb301c)
* [ざっくりGulp.js入門（Mac向け） package.jsonの作成](https://qiita.com/kazukichi/items/884a1379eea5918689ed#packagejson%E3%81%AE%E4%BD%9C%E6%88%90)
* [PowerShell 使い方メモ](https://qiita.com/opengl-8080/items/bb0f5e4f1c7ce045cc57)
* [Gulp.js入門](https://qiita.com/yoshinariiii/items/8340286ec6f3ed6ff888)
* [Yarn：Facebook発のパッケージマネジャーはnpmに代わるスタンダードになるか](https://www.webprofessional.jp/yarn-vs-npm/)
* [yarnがnpmと何が違うのか試してみた](https://qiita.com/0829/items/ec5271c06f8ff0633dd3)
* [Gulpでよく使うタスクを分割して、個人的に使いやすくした設定](https://qiita.com/nisshy0516/items/a0c079d08b377a8ef69d#gulptaskssassjs)