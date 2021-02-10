let wordInput = document.getElementById('window');
const pulldown = document.getElementById('pulldown');
const clear = document.getElementById('clear');
const formClear = document.getElementById('form-clear');
const list = [
  'Photoshop', 'Illustrator', 'Premiere Pro', 'Premiere Rush', 'After Effects', 'Adobe XD', 'CLIP STUDIO', 'Blender', 'Unity', 'iMovie', 'GarageBand', 'Google スライド', 'Google ドキュメント', 'Google スプレッドシート', 'Google サイト', 'PowerPoint', 'Word', 'Excel', 'Slack', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'C#', 'PHP', 'WordPress', 'VS Code', 'Git', 'GitHub', 'Linux', 'OpenProcessing', 'Scratch', 'Arduino', 'micro:bit'
];
const button = [
  document.getElementById('google'),
  document.getElementById('gimages'),
  document.getElementById('gmaps'),
  document.getElementById('gtrans'),
  document.getElementById('youtube'),
  document.getElementById('yahoo'),
  document.getElementById('bing'),
  document.getElementById('duck'),
  document.getElementById('wiki'),
  document.getElementById('amazon'),
  document.getElementById('rakuten'),
  document.getElementById('y-shopping'),
  document.getElementById('twitter'),
  document.getElementById('instagram'),
  document.getElementById('facebook'),
  document.getElementById('note')
];
const random = document.getElementById('random');
const hashtag = document.getElementById('hashtag');
const google = 'http://www.google.co.jp/';
const query = 'search?q=';

// pulldownに中身を出力
window.onload = () => {
  for (var i=0; i<list.length; i++) {
    let option = document.createElement('option');
    option.value = list[i];
    option.text = list[i];
    pulldown.appendChild(option);
  }
}
// pulldownをクリア
clear.addEventListener('click', function() {
  pulldown.selectedIndex = 0;
  wordInput.focus();
})

// 検索ボックスをクリア
formClear.addEventListener('click', function() {
  wordInput.value = '';
  wordInput.focus();
})
// ダブルクリックでプルダウンもクリア
formClear.addEventListener('dblclick', function() {
  pulldown.selectedIndex = 0;
  wordInput.focus();
})

// ハッシュタグ追加ボタン
hashtag.addEventListener('click', function() {
  if (wordInput.value.match(/^#/)) {
    return;
  } else if (wordInput.value.length > 0) {
    wordInput.value = '#' + wordInput.value;
    wordInput.focus();
  } else {
    wordInput.value = '#';
    wordInput.focus();
  }
})

// google エリア
// 0 google 検索
button[0].onclick = () => {
  const target = pulldown.value;
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(google);
  } else if (wordInput.value.length === 0) {
    window.open(google + query + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(google + query + encodeURIComponent(wordInput.value));
  } else {
    window.open(google + query + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
wordInput.addEventListener('keypress', onkeypress);
function onkeypress(event) {
  if (event.keyCode === 13) {
    button[0].onclick();
  }
}
// 1 google 画像
button[1].onclick = () => {
  const target = pulldown.value;
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(google + 'imghp');
  } else if (wordInput.value.length === 0) {
    window.open(google + query + encodeURIComponent(target) + '&tbm=isch');
  } else if (target === 'null') {
    window.open(google + query + encodeURIComponent(wordInput.value) + '&tbm=isch');
  } else {
    window.open(google + query + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value) + '&tbm=isch');
  }
}
// 2 google 地図
button[2].onclick = () => {
  const target = pulldown.value;
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(google + 'maps');
  } else if (wordInput.value.length === 0) {
    window.open(google + 'maps/search/' + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(google + 'maps/search/' + encodeURIComponent(wordInput.value));
  } else {
    window.open(google + 'maps/search/' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 3 google 翻訳
button[3].onclick = () => {
  const target = pulldown.value;
  const translate = '?sl=auto&tl=ja&text=';
  const link = 'https://translate.google.co.jp/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + translate + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link + translate + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + translate + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 4 youtube
button[4].onclick = () => {
  const target = pulldown.value;
  const link = 'https://www.youtube.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + 'results?q=' + encodeURIComponent(target));
  } else if (wordInput.value.match(/^#/)) {
    pulldown.selectedIndex = 0;
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.slice(1)));
  } else if (target === 'null') {
    window.open(link + 'results?q=' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + 'results?q=' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}

// その他検索エリア
// 5 yahoo
button[5].onclick = () => {
  const target = pulldown.value;
  const link = ['https://www.yahoo.co.jp/', 'https://search.yahoo.co.jp/'];
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link[0]);
  } else if (wordInput.value.length === 0) {
    window.open(link[1] + 'search?p=' + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link[1] + 'search?p=' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link[1] + 'search?p=' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 6 bing
button[6].onclick = () => {
  const target = pulldown.value;
  const link = 'https://www.bing.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + query + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link + query + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + query + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 7 duckduckgo
button[7].onclick = () => {
  const target = pulldown.value;
  const link = 'https://duckduckgo.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + '&q=' + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link + '&q=' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + '&q=' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 8 wikipedia
button[8].onclick = () => {
  const target = pulldown.value;
  const link = 'https://ja.wikipedia.org/wiki/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + '特別:検索/' + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link + '特別:検索/' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + '特別:検索/' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}

// 買い物エリア
// 9 amazon
button[9].onclick = () => {
  const target = pulldown.value;
  const link = 'https://www.amazon.co.jp/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + 's?k=' + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link + 's?k=' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + 's?k=' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}

// 10 rakuten
button[10].onclick = () => {
  const target = pulldown.value;
  const link = ['https://rakuten.co.jp/', 'https://search.rakuten.co.jp/search/mall/'];
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link[0]);
  } else if (wordInput.value.length === 0) {
    window.open(link[1] + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link[1] + encodeURIComponent(wordInput.value));
  } else {
    window.open(link[1] + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 11 yahoo shopping
button[11].onclick = () => {
  const target = pulldown.value;
  const link = 'https://shopping.yahoo.co.jp/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + 'search?p=' + encodeURIComponent(target));
  } else if (target === 'null') {
    window.open(link + 'search?p=' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + 'search?p=' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}

// snsエリア
// 12 twitter
button[12].onclick = () => {
  const target = pulldown.value;
  const link = 'https://twitter.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + query + encodeURIComponent(target));
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.slice(1)));
  } else if (wordInput.value.match(/^#/)) {
    pulldown.selectedIndex = 0;
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.slice(1)));
  } else if (target === 'null') {
    window.open(link + query + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + query + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 13 instagram
button[13].onclick = () => {
  const target = pulldown.value;
  const link = 'https://instagram.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    alert('現在Instagramのキーワード検索は日本国内で利用できません。解禁されるまではハッシュタグボタンを押してハッシュタグ検索をご利用ください。');
    // window.open(link + '検索クエリ + encodeURIComponent(target));
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.slice(1)));
  } else if (wordInput.value.match(/^#/)) {
    pulldown.selectedIndex = 0;
    window.open(link + 'explore/tags/' + encodeURIComponent(wordInput.value.slice(1)));
  } else if (target === 'null') {
    alert('現在Instagramのキーワード検索は日本国内で利用できません。解禁されるまではハッシュタグボタンを押してハッシュタグ検索をご利用ください。');
    // window.open(link + '検索クエリ' + encodeURIComponent(wordInput.value));
  } else {
    alert('現在Instagramのキーワード検索は日本国内で利用できません。解禁されるまではハッシュタグボタンを押してハッシュタグ検索をご利用ください。');
    // window.open(link + '検索クエリ' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 14 facebook
button[14].onclick = () => {
  const target = pulldown.value;
  const link = 'https://facebook.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + query + encodeURIComponent(target));
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.slice(1)));
  } else if (wordInput.value.match(/^#/)) {
    pulldown.selectedIndex = 0;
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.slice(1)));
  } else if (target === 'null') {
    window.open(link + query + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + query + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}
// 15 note
button[15].onclick = () => {
  const target = pulldown.value;
  const link = 'https://note.com/';
  if (wordInput.value.length === 0 && target === 'null') {
    window.open(link);
  } else if (wordInput.value.length === 0) {
    window.open(link + 'search?context=note&q=' + encodeURIComponent(target));
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.slice(1)));
  } else if (wordInput.value.match(/^#/)) {
    pulldown.selectedIndex = 0;
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.slice(1)));
  } else if (target === 'null') {
    window.open(link + 'search?context=note&q=' + encodeURIComponent(wordInput.value));
  } else {
    window.open(link + 'search?context=note&q=' + encodeURIComponent(target) + ' ' + encodeURIComponent(wordInput.value));
  }
}

// I'm feeling lucky ランダムに表示
random.onclick = () => {
  const randomLink = button[Math.floor(Math.random() * button.length)];
  randomLink.onclick();
}