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

  constructor() {
    super();
    this._name = null;
    this._level = 0;
  }
  static get observedAttributes() {
    return ["name", "level"];
  }
  attributeChangedCallback(attrName, oldValue, newValue)  {
    if (attrName == "name") {
      this._name = newValue;
    }
    else if (attrName == "level") {
      this._level = newValue;
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
  }
}
window.customElements.define("li-skill-element", SkillElement);
