window.onload = CreateWorks();

function CreateWorks() {
  var works = document.getElementById('works');

  $.getJSON("./res/works.json", (data) => {
    var worksData = data.works;

    for (let i = 0; i < worksData.length; i++) {
      let workdiv = document.createElement('div');
      workdiv.id = worksData[i].name;
      workdiv.class = "work fly";
      workdiv.onclick = "window.open("+worksData[i].url+",'_blank')";
      works.appendChild(workdiv);

      let worknamediv = document.createElement('div');
      worknamediv.class = "work-name";
      worknamediv.textContent = worksData[i].name;
      workdiv.appendChild(worknamediv);

      let workimg = document.createElement('img');
      let imageurl = worksData[i].imageurl;
      if (imageurl == "") {
        imageurl = "./image/work/noimage.png";
      }
      workimg.src = imageurl;
      workdiv.appendChild(workimg);
    }
  });
}
