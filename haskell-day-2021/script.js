const pages = {
  Winter: {
    title: "Introduction to Z.Haskell",
    speaker: "Winter",
    icon: "./icon/winter.jpg",
    description:
      "In the past few years, I've been working on a new engineering toolkit to make writing Haskell applications especially network applications easier, that effort became the Z.Haskell project. It includes new array and slice types build on ByteArray# provided by GHC runtime, UTF8 based text, and a new IO subsystem based on the libuv, In this talk, I will present many details on how do we solve concrete problems in Z.Haskell, and the project's future plan." +
      "<h4 >Winterさんについて</h4>" +
      "北京理工大学07級、浙江大学11級修士（後退学）。著書「魔力Haskell」の他、「Z.Haskell」プロジェクトを通じて多数のパッケージを開発している。",
  },
  mod_poppo: {
    title: "GHC の動向 2021",
    speaker: "mod_poppo",
    icon: "./icon/mod_poppo.png",
    twitter: "mod_poppo",
    description:
      "Haskell の処理系である GHC は現在も活発に開発が行われています。この発表では GHC の最近の開発状況や、直近あるいは将来リリースされる GHC 9.x での新機能・変更点を簡単に紹介します。",
  },
  fumieval: {
    title: "Haskell は別言語になりました――RecordDotSyntax と NoFieldSelectors",
    speaker: "fumieval",
    icon: "./icon/fumieval.png",
    description:
      "Haskell は、レコード（構造体）を定義すると、各フィールドにアクセスするための関数が定義されます。しかし、フィールド名が衝突したり、それを避けるために名前が冗長になったりするため、レコードが使いにくいという評価を受けることも。GHC 9.2 では、その問題の解決策として NoFieldSelectors と RecordDotSyntax という二つの言語拡張が導入されました。それらの動機、仕組み、使い方について解説します。",
  },
  中嶋大嗣: {
    title: "GraphQL と Haskell",
    speaker: "中嶋大嗣",
    icon: "./icon/nakaji_dayo.png",
    twitter: "nakaji_dayo",
    description:
      "GraphQL の入門<br>Haskell による GraphQL API の実装を目的に、関連ライブラリの紹介及び、サンプルを交えた実装の解説を行います。<br/>さらにN+1問題の解決を試みます。",
  },
  sakaguchi: {
    title:
      "<code>take k (sort xs)</code> in Haskell has O(n + k log k) time complexity",
    speaker: "Kazuhiko Sakaguchi",
    description:
      'In this talk, we prove that non-tail-recursive mergesort (e.g., <code>Data.List.sort</code> of GHC) is an asymptotically optimal incremental sorting algorithm <a href="https://doi.org/10.1137/1.9781611972863.16">[Paredes and Navarro 2006]</a> in the call-by-need (lazy) evaluation strategy. That is to say, computing the first <code>k</code> smallest (or largest) elements of a list <code>xs</code> of length <code>n</code> by <code>take k (sort xs)</code> costs O(n + k log k) time. On the other hand, tail-recursive mergesort (e.g., <code>List.stable_sort</code> of OCaml) is more suited for the call-by-value evaluation strategy in the sense that it does not consume the call stack linearly and thus prevents stack overflow. Therefore, the best mergesort function depends on the situation, in particular, the evaluation strategy and whether it should be incremental or not. To prove the correctness of these mergesort functions, we present a methodology to characterize and verify stable sort functions in the Coq proof assistant using the parametricity translation <a href="https://doi.org/10.4230/LIPIcs.CSL.2012.381">[Keller and Lasson 2012]</a>.<br/><br/>本講演では、非末尾再帰マージソート（GHC の <code>Data.List.sort</code> など）が必要呼び（遅延）評価戦略において漸近的に最適なインクリメンタルソートアルゴリズム <a href="https://doi.org/10.1137/1.9781611972863.16">[Paredes and Navarro 2006]</a> となることを証明する。すなわち、長さ <code>n</code> のリスト <code>xs</code> の最小（もしくは最大） <code>k</code> 要素を <code>take k (sort xs)</code> で求めるのに要する時間計算量は O(n + k log k) である。一方で、末尾再帰マージソート（OCaml の <code>List.stable_sort</code> など）はコールスタックを線形に消費せずスタックオーバーフローを避けるという点において、値呼び評価戦略により適している。したがって、最適なマージソート関数は評価戦略やそれがインクリメンタルな計算を許すべきかどうか等によって異なる。これらのマージソート関数の正しさを証明するため、パラメトリシティ変換 <a href="https://doi.org/10.4230/LIPIcs.CSL.2012.381">[Keller and Lasson 2012]</a> を用いて対話的定理証明器 Coq 上で安定ソート関数を特徴付け検証する方法を提案する。<h4>Supplementary material:</h4> <ul><li><a href="https://github.com/pi8027/stablesort">pi8027/stablesort</a></li></ul>',
    twitter: "pi8027",
  },
  岡本和樹: {
    title: "線形型の刹那的不変データ構造への利用",
    speaker: "岡本和樹",
    icon: "./icon/kakkun61.png",
    twitter: "kakkun61",
    description:
      "GHC 9.0 で線形型が導入されました<br>線形型は「値が一度しか使われない」ことを保証するものです<br>これを使用して計算量の関係から1回しか値の使えない「刹那的データ構造」を型安全にする方法を説明します",
  },
  山本悠滋: {
    title: "slack-log の紹介",
    speaker: "山本悠滋",
    icon: "./icon/igrep.png",
    twitter: "igrep",
    description:
      'Slack の発言を保存するバッチアプリケーション、<a href="https://github.com/haskell-jp/slack-log/">slack-log</a> について開発の動機や実装、設計、使用するライブラリーの紹介、今後加えたい修正についてお話しします。',
  },
  mizunashi: {
    title: "GHC による Haskell プログラムの動かし方",
    speaker: "Mizunashi Mana",
    twitter: "Mizunashi_Mana",
    icon: "./icon/mizunashi.jpg",
    description:
      "Haskell は他の言語にない意味論的特徴を多く持っています．そのため，Haskell の標準的実装 GHC でも，Haskell プログラムを動かす上で，他の言語では見られないような様々な工夫が施されています．この工夫を知ることは，Haskell プログラムへの理解を深める上でも，プログラムの動作を調査する上でも役に立つでしょう．この発表では，GHC が Haskell プログラムをどのように動かすのかについて，基本的な概要を紹介します．",
  },
};

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalSpeaker = document.getElementById("modal-speaker");
const modalIcon = document.getElementById("modal-icon");
const modalTwitter = document.getElementById("modal-twitter");
const modalTwitterContainer = document.getElementById(
  "modal-twitter-container"
);
const modalDescription = document.getElementById("modal-description");
const modalYoutube = document.getElementById("modal-youtube");
const modalSlide = document.getElementById("modal-slide");

const timetable_winter = document.getElementById("timetable-Winter");
const timetable_mod_poppo = document.getElementById("timetable-mod_poppo");
const timetable_fumieval = document.getElementById("timetable-fumieval");
const timetable_中嶋大嗣 = document.getElementById("timetable-中嶋大嗣");
const timetable_sakaguchi = document.getElementById("timetable-sakaguchi");
const timetable_岡本和樹 = document.getElementById("timetable-岡本和樹");
const timetable_山本悠滋 = document.getElementById("timetable-山本悠滋");
const timetable_mizunashi = document.getElementById("timetable-mizunashi");

let openedItem = null;

const openModal = (key) => {
  return (event) => {
    if (
      event instanceof KeyboardEvent &&
      (event.repeat || (event.code !== "Enter" && event.code !== "Space"))
    ) {
      return;
    }
    event.preventDefault();
    window.history.replaceState(null, null, "#timetable-" + key);
    openedItem = event.target;
    updateModal();
  };
};

const closeModal = (event) => {
  if (
    event instanceof KeyboardEvent &&
    (event.repeat || (event.code !== "Enter" && event.code !== "Space"))
  ) {
    return;
  }
  event.preventDefault();
  window.history.replaceState(null, null, "#");
  openedItem && openedItem.focus();
  openedItem = null;
  updateModal();
};

timetable_winter.onclick = openModal("Winter");
timetable_winter.onkeydown = openModal("Winter");
timetable_mod_poppo.onclick = openModal("mod_poppo");
timetable_mod_poppo.onkeydown = openModal("mod_poppo");
timetable_fumieval.onclick = openModal("fumieval");
timetable_fumieval.onkeydown = openModal("fumieval");
timetable_中嶋大嗣.onclick = openModal("中嶋大嗣");
timetable_中嶋大嗣.onkeydown = openModal("中嶋大嗣");
timetable_sakaguchi.onclick = openModal("sakaguchi");
timetable_sakaguchi.onkeydown = openModal("sakaguchi");
timetable_岡本和樹.onclick = openModal("岡本和樹");
timetable_岡本和樹.onkeydown = openModal("岡本和樹");
timetable_山本悠滋.onclick = openModal("山本悠滋");
timetable_山本悠滋.onkeydown = openModal("山本悠滋");
timetable_mizunashi.onclick = openModal("mizunashi");
timetable_mizunashi.onkeydown = openModal("mizunashi");

modal.onclick = closeModal;
modal.onkeydown = closeModal;

modalContent.onclick = (event) => {
  event.stopPropagation();
};
modalContent.onkeydown = (event) => {
  event.stopPropagation();
};

modalClose.onclick = closeModal;
modalClose.onkeydown = closeModal;

const updateModal = () => {
  const hash = window.location.hash;
  if (!hash || hash.indexOf("#timetable-") != 0) {
    // 非表示
    modal.style.display = "none";
    return;
  }
  // 表示
  const key = decodeURIComponent(hash.slice("#timetable-".length));
  const data = pages[key];
  if (!data) {
    return;
  }
  modal.style.display = "block";
  modalTitle.innerHTML = data.title;
  modalSpeaker.textContent = data.speaker;
  if (data.icon) {
    modalIcon.src = data.icon;
    modalIcon.style.display = "inline";
  } else {
    modalIcon.style.display = "none";
  }
  if (data.twitter) {
    modalTwitter.textContent = data.twitter;
    modalTwitter.href = "https://twitter.com/" + data.twitter;
    modalTwitterContainer.style.display = "block";
  } else {
    modalTwitterContainer.style.display = "none";
  }
  modalDescription.innerHTML = data.description;
  if (data.youtube) {
    modalYoutube.href = data.youtube;
    modalYoutube.style.display = "inline-block";
  } else {
    modalYoutube.style.display = "none";
  }
  if (data.slide) {
    modalSlide.href = data.slide;
    modalSlide.style.display = "inline-block";
  } else {
    modalSlide.style.display = "none";
  }
  modalClose.focus();
};

window.addEventListener("load", (e) => {
  updateModal();
});

window.addEventListener(
  "hashchange",
  (e) => {
    updateModal();
  },
  false
);
