let wordInput = document.getElementById('window');
const pulldown = document.getElementById('pulldown');
const randomSelect = document.getElementById('random-select');
const formClear = document.getElementById('form-clear');
let defaultList = [
  'Photoshop', 'Illustrator', 'Premiere Pro', 'Premiere Rush', 'After Effects', 'Adobe XD', 'Blender', 'Unity', 'iMovie', 'GarageBand', 'Google スライド', 'Google ドキュメント', 'Google スプレッドシート', 'Google サイト', 'PowerPoint', 'Word', 'Excel', 'Slack', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'C#', 'PHP', 'WordPress', 'VS Code', 'Git', 'GitHub', 'Linux'
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
const edit = document.getElementById('edit');
const dialog = document.getElementById('dialog');
const dialogBg = document.getElementById('dialog-bg');
const editList = document.getElementById('edit-list');
const saveList = document.getElementById('save-list');
const closeDialog = document.getElementById('close-dialog');
const ressetList = document.getElementById('resset-list');

const google = 'https://www.google.co.jp/';
const query = 'search?q=';

window.onload = () => {
  if (localStorage.getItem('localList') === null) {
    let setJson = JSON.stringify(defaultList);
    localStorage.setItem('localList', setJson);
  }
  pulldownCreate();
  editList.value = JSON.parse(localStorage.getItem('localList'));
}
// pulldownに中身を出力
function pulldownCreate() {
  let list = JSON.parse(localStorage.getItem('localList'));
  for (var i=0; i<list.length; i++) {
    let option = document.createElement('option');
    option.value = list[i];
    option.text = list[i];
    pulldown.appendChild(option);
  }
}

// 検索設定を開く
edit.addEventListener('click', () => {
  dialog.classList.remove('close');
  dialog.classList.add('open');
})
// キャンセルボタンで検索設定を閉じる
closeDialog.addEventListener('click', () => {
  dialog.classList.remove('open');
  dialog.classList.add('close');
})
// 背景クリックで検索設定を閉じる
dialogBg.addEventListener('click', () => {
  dialog.classList.remove('open');
  dialog.classList.add('close');
})
// 編集したリストをlocalListに保存
saveList.addEventListener('click', () => {
  const listItem = editList.value.split(',');
  let setJson = JSON.stringify(listItem);
  localStorage.setItem('localList', setJson);
  location.reload();
})
// 検索設定をブラウザから削除
ressetList.addEventListener('click', () => {
  if (confirm('キーワードボックスをブラウザから削除します。再読み込みするとデフォルトの設定が適用されます。よろしいですか？')) {
    localStorage.removeItem('localList');
    editList.value = '';
    while (pulldown.firstChild) {
      pulldown.removeChild(pulldown.firstChild);
    };
    dialog.classList.remove('open');
    dialog.classList.add('close');
    alert('ご利用ありがとうございました！');
  }
})

// 選択したpulldownをwordInputに入力
pulldown.addEventListener('change', () => {
  if (wordInput.value.length > 0) {
    wordInput.value = wordInput.value + ' ' + pulldown.value;
  } else {
    wordInput.value = pulldown.value;
  }
  pulldown.value = 'キーワードボックス';
  wordInput.focus();
})

// 検索ボックスをクリア
formClear.addEventListener('click', function() {
  wordInput.value = '';
  wordInput.focus();
})

// ハッシュタグ追加ボタン
hashtag.addEventListener('click', function() {
  if (wordInput.value.match(/^#/)) {
    return;
  } else if (wordInput.value.length > 0) {
    wordInput.value = '#' + wordInput.value;
  } else {
    wordInput.value = '#';
  }
  wordInput.focus();
})

// google エリア
// 0 google 検索
button[0].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(google);
  } else {
    window.open(google + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
wordInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    button[0].onclick();
  }
});
// 1 google 画像
button[1].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(google + 'imghp');
  } else {
    window.open(google + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')) + '&tbm=isch');
  }
}
// 2 google 地図
button[2].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(google + 'maps');
  } else {
    window.open(google + 'maps/search/' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 3 google 翻訳
button[3].onclick = () => {
  const translate = '?sl=auto&tl=ja&text=';
  const link = 'https://translate.google.co.jp/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else {
    window.open(link + translate + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 4 youtube
button[4].onclick = () => {
  const link = 'https://www.youtube.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else if (wordInput.value.match(/^#/)) {
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(link + 'results?q=' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}

// その他検索エリア
// 5 yahoo
button[5].onclick = () => {
  const link = ['https://www.yahoo.co.jp/', 'https://search.yahoo.co.jp/'];
  if (wordInput.value.length === 0) {
    window.open(link[0]);
  } else {
    window.open(link[1] + 'search?p=' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 6 bing
button[6].onclick = () => {
  const link = 'https://www.bing.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else {
    window.open(link + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 7 duckduckgo
button[7].onclick = () => {
  const link = 'https://duckduckgo.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else {
    window.open(link + '&q=' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 8 wikipedia
button[8].onclick = () => {
  const link = 'https://ja.wikipedia.org/wiki/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else {
    window.open(link + '特別:検索/' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}

// 買い物エリア
// 9 amazon
button[9].onclick = () => {
  const link = 'https://www.amazon.co.jp/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else {
    window.open(link + 's?k=' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}

// 10 rakuten
button[10].onclick = () => {
  const link = ['https://rakuten.co.jp/', 'https://search.rakuten.co.jp/search/mall/'];
  if (wordInput.value.length === 0) {
    window.open(link[0]);
  } else {
    window.open(link[1] + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 11 yahoo shopping
button[11].onclick = () => {
  const link = 'https://shopping.yahoo.co.jp/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else {
    window.open(link + 'search?p=' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}

// snsエリア
// 12 twitter
button[12].onclick = () => {
  const link = 'https://twitter.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(link + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 13 instagram
button[13].onclick = () => {
  const link = 'https://instagram.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(link + 'explore/tags/' + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(link + 'explore/tags/' + encodeURIComponent(wordInput.value.replace(/[\p{C}\p{Z}]/gu, '')));
  }
}
// 14 facebook
button[14].onclick = () => {
  const link = 'https://facebook.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(link + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
// 15 note
button[15].onclick = () => {
  const link = 'https://note.com/';
  if (wordInput.value.length === 0) {
    window.open(link);
  } else if (wordInput.value.match(/^@/)) {
    window.open(link + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(link + 'hashtag/' + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(link + 'search?context=note&q=' + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}

// I'm feeling lucky ランダムに表示
random.onclick = () => {
  const randomLink = button[Math.floor(Math.random() * button.length)];
  randomLink.onclick();
}