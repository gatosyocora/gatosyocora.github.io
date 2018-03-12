<!--

// 自動的に制作物一覧を作成
window.onload = function() {
  var name = ["ホームページ", "だんじょん", "バーチャルアシスタント"];
  var image = ["", "dungeon.png", ""];
  var abstract = ["このWebページです。<br>GitHubを使ってWebページを公開しています。",
                  "ステージを回転させたり, キャラクターを動かしたりしながらゴールを目指す2Dアクションゲームです。",
                  "デスクトップ上でキャラクターと話したり、作業を手伝ってもらったりできるものです。"];

  var createdDiv = document.getElementById("created"); // 制作物一覧を入れる場所を取得

  // 制作物を要素として追加していく
  for (var i = 0; i < name.length; i++) {

    var productionDiv = document.createElement("div");
    productionDiv.classList.add("production");
    productionDiv.id = "production"+i;

    // 名前を管理するdivを作成し追加
    if (name[i] != "") {
      var nameDiv = document.createElement("div");
      nameDiv.id = "name";
      var h3 = document.createElement("h3");
      h3.innerHTML = name[i];
      nameDiv.appendChild(h3);
      productionDiv.appendChild(nameDiv);
    }

    // 画像を管理するdivを作成し追加
    if (image[i] != "") {
      var imageDiv = document.createElement("div");
      imageDiv.id = "image";
      var img = document.createElement("img");
      img.src = "./image/"+image[i];
      imageDiv.appendChild(img);
      productionDiv.appendChild(imageDiv);
    }

    // 概要を管理するdivを作成し追加
    if (abstract[i] != "") {
      var abstractDiv = document.createElement("div");
      abstractDiv.id = "abstract";
      var p = document.createElement("p");
      p.innerHTML = abstract[i];
      abstractDiv.appendChild(p);
      productionDiv.appendChild(abstractDiv);
    }
    createdDiv.appendChild(productionDiv);
  }
};
-->
