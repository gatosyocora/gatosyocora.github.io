class SkillElement extends HTMLElement {
  get name() {
    return this._name;
  }
  set name(v) {
    this.setAttribute("name", v);
  }
  get level() {
    return this._level;
  }
  set level(v) {
    this.setAttribute("level", v);
  }

  get detail() {
    return this._detail;
  }

  set detail(v) {
    this.setAttribute("detail", v);
  }

  constructor() {
    super();
    this._name = null;
    this._level = 0;
    this._detail = null;
  }
  static get observedAttributes() {
    return ["name", "level", "detail"];
  }
  attributeChangedCallback(attrName, oldValue, newValue)  {
    if (attrName == "name") {
      this._name = newValue;
    }
    else if (attrName == "level") {
      this._level = newValue;
    }
    else if (attrName == "detail") {
      this._detail = newValue;
    }
    this._updateRendering();
  }

  _updateRendering() {
    this.innerHTML = null;
    var li = document.createElement("li");
    this.appendChild(li);
    var nameSpan = document.createElement("span");
    nameSpan.className = "skillname";
    nameSpan.textContent = this._name;
    li.appendChild(nameSpan);
    var starSpan = document.createElement("span");
    starSpan.class = "stars";
    li.appendChild(starSpan);
    for (var i = 0; i < this._level; i++) {
      var star = document.createElement("img");
      star.src = "./image/star1.png";
      starSpan.appendChild(star);
    }
    for (var i = 0; i < 5 - this._level; i++) {
      var star = document.createElement("img");
      star.src = "./image/star0.png";
      starSpan.appendChild(star);
    }
    var detailSpan = document.createElement("span");
    detailSpan.className = "skilldetail";
    detailSpan.textContent = this._detail;
    li.appendChild(detailSpan);
  }
}
window.customElements.define("li-skill-element", SkillElement);
