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