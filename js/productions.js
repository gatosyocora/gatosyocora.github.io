<!--

// 自動的に制作物一覧を作成
$(function() {

  var createdDiv = document.getElementById("created"); // 制作物一覧を入れる場所を取得

  $.getJSON("./res/productions.json", function(data) {

    // 制作物を要素として追加していく
    for (var i = 0; i < data.length; i++) {

      var productionDiv = document.createElement("div");
      productionDiv.classList.add("production");
      productionDiv.id = "production"+i;

      // 名前を管理するdivを作成し追加
      if (data[i].name != "") {
        var nameDiv = document.createElement("div");
        nameDiv.id = "name";
        var h3 = document.createElement("h3");
        h3.innerHTML = data[i].name;
        nameDiv.appendChild(h3);
        productionDiv.appendChild(nameDiv);
      }

      // 画像を管理するdivを作成し追加
      if (data[i].image != "") {
        var imageDiv = document.createElement("div");
        imageDiv.id = "image";
        var img = document.createElement("img");
        img.src = "./image/"+data[i].image;
        imageDiv.appendChild(img);
        productionDiv.appendChild(imageDiv);
      }

      // 概要を管理するdivを作成し追加
      if (data[i].abstract != "") {
        var abstractDiv = document.createElement("div");
        abstractDiv.id = "abstract";
        var p = document.createElement("p");
        p.innerHTML = data[i].abstract;
        abstractDiv.appendChild(p);
        productionDiv.appendChild(abstractDiv);
      }

      createdDiv.appendChild(productionDiv);

    }

  });

});
-->
