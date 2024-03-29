# Ultimate search

![logo](./images/ultimate.svg)

https://app.tanukizzan.com/ultimate-search/

16個のサイトを1つのページで検索できるサイトです。  
読み方は「アルティメットサーチ」です。

Qiita記事：https://qiita.com/Tanukizzan/items/ffc2e11d8c7cb6f11e27

## 更新情報

検索キーワードの前後にスペースが空いていた場合、自動で除去されるようになりました。[またInstagramで検索するときに自動でハッシュタグとキーワード間のスペースが除去されるようになりました。](#instagramについて)（2021/07/01）

[画面左下に「検索設定」の項目を追加しました。キーワードボックスを自分好みにカスタマイズできます。](#検索設定の使い方)（2021/04/20）

[ライトモードを実装しました。URLの末尾に `?lite` をつけるとSNSボタンが非表示になります。](#liteモード)(2021/10/09)

[イベントモードを実装しました。背景がハロウィンやクリスマス仕様になります。](#イベントモード)(2021/12/13)

## 使い方

検索ボックスに検索したいキーワードを入力して、検索したいサイトのボタンを押すだけで検索できます。

検索したい語句を入力した、検索したいサイトのボタンをクリックすると、検索ワードの先頭にそのキーワードを含めて検索できます。

また検索ボックスの上にある「キーワードボックス」からキーワードを選択すると検索ボックスに入力することができます。

未入力の状態でボタンを押すと、各サイトのトップページに遷移します。

またスマートフォンで使用した場合アプリが開くことがあります。

### 特別な機能を持つボタンの使い方

| ボタン名 | 機能 |
| - | - |
| Google 翻訳 | ・入力された言語を自動選択して日本語に翻訳します |
| ハッシュタグボタン | ・入力したキーワードの先頭にハッシュタグを追加します |
| Twitter, Instagram, TikTok, note | ・先頭に@マークをつけて検索するとそのID名のアカウントに直接遷移します |
| I'm Feeling Lucky | ・この中のサイトからランダムに検索します |

### Instagramについて
~~Instagramでは最近キーワード検索に対応したようですが、日本国内ではまだ利用できないためアラートが出ます。~~

~~なぜか半年経っても一向に国内解禁されないため、自動でキーワード間のスペースが除去されるようになりました。解禁されたらできるだけ早く対応します。~~

いつの間にか国内でもキーワード検索に対応したようですが、スマホアプリ限定の機能になっており検索クエリが不明なため今のところ対応できません。Instagramでキーワード検索をしたい場合は直接アプリの検索タブをご利用ください。Ultimate searchでキーワード検索をしようとすると自動でキーワード間のスペースが除去されハッシュタグ検索になります。

### Liteモード

YouTube, Yahoo!, Twitter, Instagram, TikTok, note のボタンを非表示にするモードです。URLの末尾に `?lite` をつけることで機能する隠しモードになっています。ついついSNSを開いてしまい時間を潰してしまうことで困っている方におすすめの機能です。

※ I'm Feeling Lucky ボタンでランダムに検索されるサイトは、Liteモードにかかわらず全てのサイトが対象になります。

リンク： https://app.tanukizzan.com/ultimate-search/?lite

## イベントモード

背景がハロウィンやクリスマスなどの季節のイベント仕様になるモードです。URLの末尾にそれぞれのワードを加えることで機能します。（Liteモードと仕組みは同じです）

Halloweenモード：https://app.tanukizzan.com/ultimate-search/?halloween

Xmasモード：https://app.tanukizzan.com/ultimate-search/?xmas

## 検索設定の使い方

### キーワードボックスの編集

キーワードボックスのリストを編集することができます。ブラウザ内に保存されるためタブを閉じても利用できます。よく検索するキーワードを保存しておくと便利です。**Web Storage API**を使用しています。

編集する際は**カンマ区切りでスペースを開けずに**入力してください。「ブラウザに保存」ボタンを押すと設定が完了して自動で再読み込みされます。

「ブラウザから削除」ボタンを押すとブラウザに保存されていた設定が全て削除されます。ただし再読み込みするか再度Ultimate searchにアクセスすると、デフォルトのキーワードのリストがブラウザに保存されます。

## Google Chromeにおいて検索履歴を削除したい場合

Google Chrome標準の検索履歴機能に対応しています。  
ここでは、誤字のまま検索した時や他のサイトで入力した履歴が残っている時など、検索履歴を削除したい場合の対処法を載せておきます。

マウスのカーソルを消したい検索履歴の上に置き、

- Windowsでは `Shift` + `Delete`
- Macでは `Shift` + `Fn` + `Delete`
- スマートフォンでは長押し

で削除できます。

すべての検索履歴を削除したい場合は、設定→プライバシーとセキュリティ→閲覧履歴データの削除から、詳細設定で「自動入力フォームのデータ」のみ削除してください。**ただし、この場合他のサイトの入力履歴も含めて削除されます。**

## 推奨環境

**最新の"Google Chrome"を推奨します。**  
IEでは利用できませんが、それ以外のブラウザでは一部の機能（検索履歴が残らない等）を除いて利用できる場合があります。

## Ultimate searchの元となったサイトたち

究極の検索サイトを作るに当たって前身となったサイト

- [GATY search](https://app.tanukizzan.com/gaty-search/)
  - Google, Amazon, Twitter, YouTubeなどで検索できるサイト
- [HowTo search](https://app.tanukizzan.com/howto-search/)
  - PCツールやプログラミング言語などのキーワードとともに検索できるサイト
- [Simple search](https://app.tanukizzan.com/simple-search/)
  - 背景がランダムに表示されるシンプルな検索サイト
- [HashTag search](https://app.tanukizzan.com/hashtag-search/)
  - ハッシュタグ付きで検索できるサイト

（作成日時順）

---

[&copy; 2020-2021 Tanukizzan](https://app.tanukizzan.com/)
