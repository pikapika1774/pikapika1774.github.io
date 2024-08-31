/* リセットCSS：ブラウザごとのデフォルトスタイルをリセットします */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ページ全体のスタイル */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #c4fff9;
    color: #343232;
    padding: 35px;
    overflow-x: hidden; /* 横スクロールを無効にする */
}

/* ヘッダーのスタイル */
header {
    background-color: #333;
    color: #fff;
    padding: 5px 0;
    text-align: center;
    border-radius: 10px;
}

header h1 {
    margin-bottom: 15px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

/* メインセクションのスタイル */
main {
    margin-top: 20px;
}
.sl {
    display: flow-root;
}
.left {
    float: left;
}
.right {
    float: right;
}

section {
    background-color: rgba(255,255,255,.7);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
}

/* フッターのスタイル */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
}

footer p {
    margin: 0;
}

/* ヘッダー、フッター、メインセクションのz-indexを設定 */
header, footer, main {
    position: relative;
    z-index: 10; /* ここを高く設定して、流れるテキストの下に表示 */
}

/* Hello Pythonのアニメーション */
/* Hello Pythonのアニメーション */
.hello-world {
    position: absolute;
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;
    z-index: 1;
    animation: move-background 10s linear infinite;
}

/* Hello Pythonが流れるアニメーション */
@keyframes move-background {
    0% {
        transform: translateX(100%); /* コンテナ内の右端から開始 */
    }
    100% {
        transform: translateX(-100%); /* コンテナ内の左端まで移動 */
    }
}

