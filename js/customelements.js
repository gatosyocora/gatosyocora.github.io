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
    var skill = document.createElement("div");
    skill.className = "skill";
    this.appendChild(skill);
    var name = document.createElement("div");
    name.className = "skillname";
    name.textContent = this._name;
    skill.appendChild(name);
    var stars = document.createElement("div");
    stars.class = "stars";
    skill.appendChild(stars);
    for (var i = 0; i < this._level; i++) {
      var star = document.createElement("img");
      star.src = "./image/star1.png";
      stars.appendChild(star);
    }
    for (var i = 0; i < 5 - this._level; i++) {
      var star = document.createElement("img");
      star.src = "./image/star0.png";
      stars.appendChild(star);
    }
    var detail = document.createElement("div");
    detail.className = "skilldetail";
    detail.textContent = this._detail;
    skill.appendChild(detail);
  }
}
window.customElements.define("skill-element", SkillElement);
