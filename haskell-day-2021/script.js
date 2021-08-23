const Winter = {
  title: 'Introduction to Z.Haskell',
  speaker: 'Winter',
  description:
    "In the past few years, I've been working on a new engineering toolkit to make writing Haskell applications especially network applications easier, that effort became the Z.Haskell project. It includes new array and slice types build on ByteArray# provided by GHC runtime, UTF8 based text, and a new IO subsystem based on the libuv, In this talk, I will present many details on how do we solve concrete problems in Z.Haskell, and the project's future plan." +
    "<h4 >Winterさんについて</h4>" +
    "北京理工大学07級、浙江大学11級修士（後退学）。著書「魔力Haskell」の他、「Z.Haskell」プロジェクトを通じて多数のパッケージを開発している。"
};
const mod_poppo = {
  title: 'GHC の動向 2021',
  speaker: 'mod_poppo',
  description: 'Haskell の処理系である GHC は現在も活発に開発が行われています。この発表では GHC の最近の開発状況や、直近あるいは将来リリースされる GHC 9.x での新機能・変更点を簡単に紹介します。'
};
const fumieval = {
  title: 'Haskell は別言語になりました――RecordDotSyntax と NoFieldSelectors',
  speaker: 'fumieval',
  description: 'Haskell は、レコード（構造体）を定義すると、各フィールドにアクセスするための関数が定義されます。しかし、フィールド名が衝突したり、それを避けるために名前が冗長になったりするため、レコードが使いにくいという評価を受けることも。GHC 9.2 では、その問題の解決策として NoFieldSelectors と RecordDotSyntax という二つの言語拡張が導入されました。それらの動機、仕組み、使い方について解説します。'
};
const チェシャ猫 = {
  title: 'Asterius による WebAssembly 開発（仮）',
  speaker: 'チェシャ猫',
  description: 'Asterius を用いて Haskell のソースコードを WebAssembly にコンパイルして実行する流れを解説します。動きのあるデモを発表の主体とし、中間言語やコンパイラの実装などには触れない予定です。WebAssembly 自体に関する予備知識も仮定しません。Haskell 自体の文法に関する予備知識は仮定します。'
};
const 中嶋大嗣 = {
  title: 'GraphQL と Haskell',
  speaker: '中嶋大嗣',
  description: 'GraphQL の入門<br>Haskell による GraphQL API の実装を目的に、関連ライブラリの紹介及び、サンプルを交えて実装の紹介を行います'
};
const sakaguchi = {
  title: '<code>take k (sort xs)</code> in Haskell has O(n + k log k) time complexity',
  speaker: 'Kazuhiko Sakaguchi',
  description: '本発表では、長さ n のリスト xs の最小（もしくは最大）の k 要素を take k (sort xs) を必要呼びで評価することで求めるのにかかる時間計算量が O(n + k log k) であることを証明する。<br>In this talk, we prove that computing the first <code>k</code> smallest (or largest) elements of a list <code>xs</code> of length <code>n</code> by <code>take k (sort xs)</code> in the call-by-need evaluation strategy has O(n + k log k) time complexity, which is the optimal time-bound of the incremental sorting problem [Paredes and Navarro 2006].'
};
const 岡本和樹 = {
  title: '線形型の刹那的不変データ構造への利用',
  speaker: '岡本和樹',
  description: 'GHC 9.0 で線形型が導入されました<br>線形型は「値が一度しか使われない」ことを保証するものです<br>これを使用して計算量の関係から1回しか値の使えない「刹那的データ構造」を型安全にする方法を説明します'
};
const 山本悠滋 = {
  title: 'slack-log の紹介',
  speaker: '山本悠滋',
  description: 'Slack の発言を保存するバッチアプリケーション、<a href="https://github.com/haskell-jp/slack-log/">slack-log</a> について開発の動機や実装、設計、使用するライブラリーの紹介、今後加えたい修正についてお話しします。'
};
const mizunashi = {
  title: 'GHC による Haskell プログラムの動かし方',
  speaker: 'Mizunashi Mana',
  description: 'Haskell は他の言語にない意味論的特徴を多く持っています．そのため，Haskell の標準的実装 GHC でも，Haskell プログラムを動かす上で，他の言語では見られないような様々な工夫が施されています．この工夫を知ることは，Haskell プログラムへの理解を深める上でも，プログラムの動作を調査する上でも役に立つでしょう．この発表では，GHC が Haskell プログラムをどのように動かすのかについて，基本的な概要を紹介します．'
};

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalSpeaker = document.getElementById('modal-speaker')
const modalDescription = document.getElementById('modal-description');

const timetable_winter = document.getElementById('timetable-winter');
const timetable_mod_poppo = document.getElementById('timetable-mod_poppo');
const timetable_fumieval = document.getElementById('timetable-fumieval');
const timetable_チェシャ猫 = document.getElementById('timetable-チェシャ猫');
const timetable_中嶋大嗣 = document.getElementById('timetable-中嶋大嗣');
const timetable_sakaguchi = document.getElementById('timetable-sakaguchi');
const timetable_岡本和樹 = document.getElementById('timetable-岡本和樹');
const timetable_山本悠滋 = document.getElementById('timetable-山本悠滋');
const timetable_mizunashi = document.getElementById('timetable-mizunashi');

let openedItem = null;

const openModal = (data) => {
  return (event) => {
    if (event instanceof KeyboardEvent && (event.repeat || (event.code !== 'Enter' && event.code !== 'Space'))) {
      return;
    }
    event.preventDefault();
    openedItem = event.target;
    modal.style.display = 'block';
    modalTitle.innerHTML = data.title;
    modalSpeaker.textContent = data.speaker;
    modalDescription.innerHTML = data.description;
    modalClose.focus();
  };
};

const closeModal = (event) => {
  if (event instanceof KeyboardEvent && (event.repeat || (event.code !== 'Enter' && event.code !== 'Space'))) {
    return;
  }
  event.preventDefault();
  modal.style.display = 'none';
  openedItem.focus();
  openedItem = null;
};

timetable_winter.onclick = openModal(Winter);
timetable_winter.onkeydown = openModal(Winter);
timetable_mod_poppo.onclick = openModal(mod_poppo);
timetable_mod_poppo.onkeydown = openModal(mod_poppo);
timetable_fumieval.onclick = openModal(fumieval);
timetable_fumieval.onkeydown = openModal(fumieval);
timetable_チェシャ猫.onclick = openModal(チェシャ猫);
timetable_チェシャ猫.onkeydown = openModal(チェシャ猫);
timetable_中嶋大嗣.onclick = openModal(中嶋大嗣);
timetable_中嶋大嗣.onkeydown = openModal(中嶋大嗣);
timetable_sakaguchi.onclick = openModal(sakaguchi);
timetable_sakaguchi.onkeydown = openModal(sakaguchi);
timetable_岡本和樹.onclick = openModal(岡本和樹);
timetable_岡本和樹.onkeydown = openModal(岡本和樹);
timetable_山本悠滋.onclick = openModal(山本悠滋);
timetable_山本悠滋.onkeydown = openModal(山本悠滋);
timetable_mizunashi.onclick = openModal(mizunashi);
timetable_mizunashi.onkeydown = openModal(mizunashi);

modal.onclick = closeModal;
modal.onkeydown = closeModal;

modalContent.onclick = (event) => { event.stopPropagation(); };
modalContent.onkeydown = (event) => { event.stopPropagation(); };

modalClose.onclick = closeModal;
modalClose.onkeydown = closeModal;
