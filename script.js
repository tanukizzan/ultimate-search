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
  document.getElementById('tiktok'),
  document.getElementById('note')
];
const random = document.getElementById('random');
const hashtag = document.getElementById('hashtag');
const snsRow = document.getElementById('sns-row');
const edit = document.getElementById('edit');
const dialog = document.getElementById('dialog');
const dialogBg = document.getElementById('dialog-bg');
const editList = document.getElementById('edit-list');
const saveList = document.getElementById('save-list');
const closeDialog = document.getElementById('close-dialog');
const ressetList = document.getElementById('resset-list');

window.onload = () => {
  // キーワードボックスが空の場合デフォルトリストを挿入
  if (localStorage.getItem('localList') === null) {
    let setJson = JSON.stringify(defaultList);
    localStorage.setItem('localList', setJson);
  }
  pulldownCreate();
  editList.value = JSON.parse(localStorage.getItem('localList'));
  // Liteモード・イベントモード用のクエリパラメータ設定
  if (window.location.search === '?lite') {
    document.title = 'Ultimate search: Lite'
    button[4].style.display = 'none';
    button[5].style.display = 'none';
    button[5].style.display = 'none';
    snsRow.style.display = 'none';
  } else if (window.location.search === '?halloween') {
    document.title = 'Ultimate search: Halloween';
    document.body.style.backgroundImage = 'url(./images/background/halloween.jpg)';
    document.body.classList.add('dark-mode');
  } else if (window.location.search === '?xmas') {
    document.title = 'Ultimate search: Xmas';
    document.body.style.backgroundImage = 'url(./images/background/xmas.jpg)';
    document.body.classList.add('dark-mode');
  }
}

// ダークモード
const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeConfig = () => {
  if (darkMode.matches) { // Dark
    document.body.classList.add('dark-mode');
  } else { // Light
    document.body.classList.remove('dark-mode');
  }
};
darkModeConfig();
darkMode.addEventListener('change', () => {
  if (window.location.search === '?halloween' || window.location.search === '?xmas') {
    return;
  } else {
    darkModeConfig();
  }
})

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
  const url = 'https://www.google.co.jp/';
  const query = 'search?q=';
  search1(url, query);
}
wordInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    button[0].onclick();
  }
});
// 1 google 画像
button[1].onclick = () => {
  const url = 'https://www.google.co.jp/';
  const query = ['imghp', 'search?q=', '&tbm=isch'];
  search2(url, query);
}
// 2 google 地図
button[2].onclick = () => {
  const url = 'https://www.google.co.jp/';
  const query = ['maps', 'maps/search/', ''];
  search2(url, query);
}
// 3 google 翻訳
button[3].onclick = () => {
  const url = 'https://translate.google.co.jp/';
  const query = '?sl=auto&tl=ja&text=';
  search1(url, query);
}
// 4 youtube
button[4].onclick = () => {
  const url = 'https://www.youtube.com/';
  const query = ['hashtag/', 'results?q='];
  search4(url, query);
}

// その他検索エリア
// 5 yahoo
button[5].onclick = () => {
  const url = ['https://www.yahoo.co.jp/', 'https://search.yahoo.co.jp/'];
  const query = 'search?p=';
  search3(url, query);
}
// 6 bing
button[6].onclick = () => {
  const url = 'https://www.bing.com/';
  const query = 'search?q=';
  search1(url, query);
}
// 7 duckduckgo
button[7].onclick = () => {
  const url = 'https://duckduckgo.com/';
  const query = '?q=';
  search1(url, query);
}
// 8 wikipedia
button[8].onclick = () => {
  const url = 'https://ja.wikipedia.org/wiki/';
  const query = '特別:検索/';
  search1(url, query);
}

// 買い物エリア
// 9 amazon
button[9].onclick = () => {
  const url = 'https://www.amazon.co.jp/';
  const query = 's?k=';
  search1(url, query);
}

// 10 rakuten
button[10].onclick = () => {
  const url = ['https://www.rakuten.co.jp/', 'https://search.rakuten.co.jp/search/mall/'];
  const query = '';
  search3(url, query);
}
// 11 yahoo shopping
button[11].onclick = () => {
  const url = 'https://shopping.yahoo.co.jp/';
  const query = 'search?p=';
  search1(url, query);
}

// snsエリア
// 12 twitter
button[12].onclick = () => {
  const url = 'https://twitter.com/';
  const query = ['hashtag/', 'search?q='];
  search4(url, query);
}
// 13 instagram
button[13].onclick = () => {
  const url = 'https://www.instagram.com/';
  const query = 'explore/tags/';
  if (wordInput.value.length === 0) {
    window.open(url);
  } else if (wordInput.value.match(/^@/)) {
    window.open(url + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(url + query + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(url + query + encodeURIComponent(wordInput.value.replace(/[\p{C}\p{Z}]/gu, '')));
  }
}
// 14 tiktok
button[14].onclick = () => {
  const url = 'https://www.tiktok.com/';
  const query = ['tag/', 'search?q='];
  search5(url, query);
}
// 15 note
button[15].onclick = () => {
  const url = 'https://note.com/';
  const query = ['hashtag/', 'search?context=note&q='];
  search4(url, query);
}

// I'm feeling lucky ランダムに表示
random.onclick = () => {
  const randomLink = button[Math.floor(Math.random() * button.length)];
  randomLink.onclick();
}

// 検索機能
const search1 = (url, query) => {
  if (wordInput.value.length === 0) {
    window.open(url);
  } else {
    window.open(url + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
const search2 = (url, query) => {
  if (wordInput.value.length === 0) {
    window.open(url + query[0]);
  } else {
    window.open(url + query[1] + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')) + query[2]);
  }
}
const search3 = (url, query) => {
  if (wordInput.value.length === 0) {
    window.open(url[0]);
  } else {
    window.open(url[1] + query + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
const search4 = (url, query) => {
  if (wordInput.value.length === 0) {
    window.open(url);
  } else if (wordInput.value.match(/^@/)) {
    window.open(url + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(url + query[0] + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(url + query[1] + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}
const search5 = (url, query) => {
  if (wordInput.value.length === 0) {
    window.open(url);
  } else if (wordInput.value.match(/^@/)) {
    window.open(url + '@' + encodeURIComponent(wordInput.value.replace(/^@+|[\p{C}\p{Z}]/gu, '')));
  } else if (wordInput.value.match(/^#/)) {
    window.open(url + query[0] + encodeURIComponent(wordInput.value.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  } else {
    window.open(url + query[1] + encodeURIComponent(wordInput.value.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, '')));
  }
}