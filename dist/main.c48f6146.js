// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = exports.Select = exports.InputFieldTitle = exports.Input = exports.Button = void 0;
var _form = _interopRequireDefault(require("./form"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Textarea = /*#__PURE__*/_createClass(function Textarea(typeOfTextarea) {
  _classCallCheck(this, Textarea);
  this._elem = document.createElement("textarea");
  if (typeOfTextarea === "shortDiscriptionsOfVisit") {
    this._elem.classList = "textarea";
    this._elem.setAttribute("name", "shortDiscriptionsOfVisit");
    this._elem.setAttribute("placeholder", "Краткое описание визита");
    return this._elem;
  }
  if (typeOfTextarea === "pastDiseases") {
    this._elem.classList = "textarea";
    this._elem.setAttribute("name", "pastDiseases");
    this._elem.setAttribute("placeholder", "Перенесенные заболевания сердечно-сосудистой системы");
    this._elem.setAttribute("required", "required");
    return this._elem;
  }
});
exports.Textarea = Textarea;
var Button = /*#__PURE__*/_createClass(function Button(typeOfButton) {
  _classCallCheck(this, Button);
  this._elem = document.createElement("button");
  if (typeOfButton === "login") {
    this._elem.classList = "login-btn";
    this._elem.setAttribute("type", "submit");
    this._elem.innerText = "Войти";
    return this._elem;
  }
  if (typeOfButton === "createVisitModalBtn") {
    this._elem.classList = "create-visit-modal-btn";
    this._elem.setAttribute("type", "submit");
    this._elem.innerText = "Создать";
    return this._elem;
  }
  if (typeOfButton === "editVisitModalBtn") {
    this._elem.classList = "edit-visit-modal-btn";
    this._elem.setAttribute("type", "submit");
    this._elem.innerText = "Редактировать";
    return this._elem;
  }
  if (typeOfButton === "signIn") {
    this._elem.classList = "sign-in-btn";
    this._elem.innerHTML = "Войти";
    return this._elem;
  }
  if (typeOfButton === "createVisit") {
    this._elem.classList = "create-visit-btn";
    this._elem.innerHTML = "Создать визит";
    this._elem.style.display = "none";
    return this._elem;
  }
  if (typeOfButton === "editVisitButton") {
    this._elem.classList = "edit-visit-button";
    this._elem.innerHTML = "Редактировать";
    return this._elem;
  }
  if (typeOfButton === "removeVisitButton") {
    this._elem.classList = "remove-visit-button";
    this._elem.innerHTML = "Удалить визит";
    return this._elem;
  }
  if (typeOfButton === "showMoreButton") {
    this._elem.classList = "show-more-btn";
    this._elem.innerHTML = "Показать больше";
    return this._elem;
  }
  if (typeOfButton === "showLessButton") {
    this._elem.classList = "show-less-btn";
    this._elem.innerHTML = "Показать меньше";
    this._elem.classList.add("hidden");
    return this._elem;
  }
});
exports.Button = Button;
var Input = /*#__PURE__*/function () {
  function Input(typeOfInput) {
    _classCallCheck(this, Input);
    this._elem = document.createElement("input");
    if (typeOfInput === "email") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("name", "email");
      this._elem.setAttribute("id", "email");
      this._elem.classList = "email-input";
      this._elem.setAttribute("required", "required");
      this._inputLabel = document.createElement("label");
      this._inputLabel.classList = "input-label";
      this._inputLabel.innerText = "E-mail";
      this._inputLabel.append(this._elem);
      return this._inputLabel;
    }
    if (typeOfInput === "password") {
      this._elem.setAttribute("type", "password");
      this._elem.setAttribute("name", "password");
      this._elem.setAttribute("id", "password");
      this._elem.classList.add("password-input");
      this._elem.setAttribute("required", "required");
      this._inputLabel = document.createElement("label");
      this._inputLabel.classList.add("input-label");
      this._inputLabel.innerText = "Password";
      this._inputLabel.append(this._elem);
      return this._inputLabel;
    }
    if (typeOfInput === "fullName") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("name", "fullName");
      this._elem.setAttribute("required", "required");
      this._elem.setAttribute("placeholder", "ФИО");
      this._elem.classList.add("one-line-input");
      return this._elem;
    }
    if (typeOfInput === "age") {
      this._elem.setAttribute("type", "number");
      this._elem.setAttribute("name", "age");
      this._elem.setAttribute("required", "required");
      this._elem.setAttribute("placeholder", "Возраст");
      this._elem.classList.add("one-line-input");
      this._checkAgeBind = this._checkAge.bind(this);
      this._elem.addEventListener("focusout", this._checkAgeBind);
      return this._elem;
    }
    if (typeOfInput === "purposeOfVisit") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("name", "purposeOfVisit");
      this._elem.setAttribute("required", "required");
      this._elem.setAttribute("placeholder", "Цель визита");
      this._elem.classList.add("one-line-input");
      return this._elem;
    }
    if (typeOfInput === "bloodPressure") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("name", "bloodPressure");
      this._elem.setAttribute("required", "required");
      this._elem.setAttribute("placeholder", "Обычное давление");
      this._elem.classList.add("one-line-input");
      return this._elem;
    }
    if (typeOfInput === "bodyMassIndex") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("name", "bodyMassIndex");
      this._elem.setAttribute("required", "required");
      this._elem.setAttribute("placeholder", "Индекс массы тела");
      this._elem.classList.add("one-line-input");
      return this._elem;
    }
    if (typeOfInput === "dateOfPreviousVisit") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("name", "dateOfPreviousVisit");
      this._elem.setAttribute("required", "required");
      this._elem.setAttribute("placeholder", "Дата последнего визита");
      this._elem.classList.add("one-line-input");
      return this._elem;
    }
    if (typeOfInput === "search") {
      this._elem.setAttribute("type", "text");
      this._elem.setAttribute("placeholder", "ФИО, доктор, описание");
      this._elem.classList.add("filter-live-search");
      return this._elem;
    }
  }
  _createClass(Input, [{
    key: "_checkAge",
    value: function _checkAge() {
      if (this._elem.value < 5) {
        alert("Возраст должен быть не меньше 5 лет");
        this._elem.value = "";
      } else if (this._elem.value > 100) {
        alert("Возраст должен быть не больше 100 лет");
        this._elem.value = "";
      }
    }
  }]);
  return Input;
}();
exports.Input = Input;
var Select = /*#__PURE__*/function () {
  function Select(typeOfSelect) {
    _classCallCheck(this, Select);
    if (typeOfSelect === "doctor") {
      this._elem = document.createElement("select");
      this._elem.classList = "doctor-select";
      this._elem.setAttribute("required", "required");
      this._elem.insertAdjacentHTML("afterbegin", "<option selected disabled value=\"\">\u0414\u043E\u043A\u0442\u043E\u0440</option>\n                 <option>Cardiologist</option>\n                 <option>Dentist</option>\n                 <option>Therapist</option>");
      this._onDoctorSelectBind = this._onDoctorSelect.bind(this);
      this._elem.addEventListener("change", this._onDoctorSelectBind);
      return this._elem;
    }
    if (typeOfSelect === "urgency") {
      this._elem = document.createElement("select");
      this._elem.classList = "urgency-select";
      this._elem.setAttribute("required", "required");
      this._elem.insertAdjacentHTML("afterbegin", "<option selected disabled value=\"\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C</option>\n                 <option>Regular</option>\n                 <option>Priority</option>\n                 <option>Urgent</option>\n            ");
      return this._elem;
    }
    if (typeOfSelect === "searchUrgency") {
      this._elem = document.createElement("select");
      this._elem.classList = "filter-select-urgency";
      return this._elem;
    }
    if (typeOfSelect === "searchStatus") {
      this._elem = document.createElement("select");
      this._elem.classList = "filter-select-status";
      return this._elem;
    }
  }
  _createClass(Select, [{
    key: "_onDoctorSelect",
    value: function _onDoctorSelect() {
      var selectedIndex = document.querySelector(".doctor-select").selectedIndex;
      var options = document.querySelector(".doctor-select").options;
      var selectedOption = options[selectedIndex].value;
      var createVisitForm = document.querySelector(".createVisit-form");
      while (createVisitForm.children.length > 2) {
        createVisitForm.removeChild(createVisitForm.lastChild);
      }
      switch (selectedOption) {
        case "Cardiologist":
          new _form.default("doctorCardiologist");
          break;
        case "Dentist":
          new _form.default("doctorDentist");
          break;
        case "Therapist":
          new _form.default("doctorTherapist");
          break;
      }
    }
  }]);
  return Select;
}();
exports.Select = Select;
var InputFieldTitle = /*#__PURE__*/_createClass(function InputFieldTitle(fieldName) {
  _classCallCheck(this, InputFieldTitle);
  this._elem = document.createElement("span");
  this._elem.classList = "field-name";
  this._elem.innerText = fieldName;
  return this._elem;
});
exports.InputFieldTitle = InputFieldTitle;
},{"./form":"src/js/form.js"}],"src/js/request.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Request = /*#__PURE__*/function () {
  function Request(typeOfRequest, data, id) {
    _classCallCheck(this, Request);
    if (typeOfRequest === "login") {
      return this._login(data);
    }
    if (typeOfRequest === "post") {
      return this._post(data);
    }
    if (typeOfRequest === "put") {
      return this._put(data, id);
    }
    if (typeOfRequest === "delete") {
      return this._delete(data, id);
    }
    if (typeOfRequest === "getAllVisits") {
      return this._getAllVisits();
    }
  }
  _createClass(Request, [{
    key: "_login",
    value: function _login(data) {
      return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (data) {
        if (!data.ok) {
          var errorNote = document.querySelector(".error-note");
          errorNote.style.visibility = "visible";
          errorNote.style.opacity = "1";
          throw new Error("Wrong email or password");
        } else {
          return data;
        }
      }).then(function (response) {
        return response.text();
      });
      // .then(token => console.log(token))
    }
  }, {
    key: "_post",
    value: function _post(data) {
      return fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ".concat(localStorage.getItem("token"))
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response;
      });
    }
  }, {
    key: "_put",
    value: function _put(data, id) {
      return fetch("https://ajax.test-danit.com/api/v2/cards/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ".concat(localStorage.getItem("token"))
        },
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "_delete",
    value: function _delete(data, id) {
      return fetch("https://ajax.test-danit.com/api/v2/cards/" + id, {
        method: "DELETE",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ".concat(localStorage.getItem("token"))
        }
      });
    }
  }, {
    key: "_getAllVisits",
    value: function _getAllVisits() {
      return fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ".concat(localStorage.getItem("token"))
        }
      }).then(function (response) {
        return response.json();
      });
    }
  }]);
  return Request;
}();
exports.default = Request;
},{}],"src/js/drag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var DragAndDrop = /*#__PURE__*/function () {
  function DragAndDrop(box, main) {
    _classCallCheck(this, DragAndDrop);
    this.box = document.querySelector(box);
    this.dragging = false;
    this.main = main;
  }
  _createClass(DragAndDrop, [{
    key: "scrollHeight",
    get: function get() {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    }
  }, {
    key: "size",
    get: function get() {
      return {
        box: {
          width: document.documentElement.offsetWidth,
          height: this.scrollHeight
        },
        elem: {
          width: this.currentElem.offsetWidth,
          height: this.currentElem.offsetHeight
        }
      };
    }
  }, {
    key: "data",
    get: function get() {
      return {
        left: this.currentElem.getBoundingClientRect().left,
        top: this.currentElem.getBoundingClientRect().top
      };
    }
  }, {
    key: "checkedCards",
    value: function checkedCards(event) {
      var target = event.target;
      this.currentElem = target.closest(this.main);
      if (!this.currentElem) return;
      this.mouseMove();
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      this.dragging = true;
      this.checkedCards(event);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove() {
      var _this = this;
      this.currentElem.ondragstart = function () {
        return false;
      };
      document.onmousemove = function (event) {
        if (!_this.dragging) return;
        var currentHeight = _this.size.box.height;
        _this.currentElem.style.position = "absolute";
        _this.currentElem.style.left = event.pageX - _this.size.elem.width / 2 + "px";
        _this.currentElem.style.top = event.pageY - _this.size.elem.height / 2 + "px";
        if (_this.data.left <= 0) _this.currentElem.style.left = 0;
        if (_this.data.top <= 0) _this.currentElem.style.top = 0;
        if (_this.data.left + _this.size.elem.width >= _this.size.box.width) _this.currentElem.style.left = _this.size.box.width - _this.size.elem.width + "px";
        if (_this.data.top + document.documentElement.scrollTop + _this.size.elem.height >= _this.size.box.height) _this.currentElem.style.top = currentHeight - _this.size.elem.height + "px";
      };
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this.dragging = false;
      document.onmousemove = null;
    }
  }]);
  return DragAndDrop;
}();
exports.default = DragAndDrop;
},{}],"src/js/visit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VisitTherapist = exports.VisitDentist = exports.VisitCardiologist = void 0;
var _request = _interopRequireDefault(require("./request.js"));
var _modal = _interopRequireDefault(require("./modal.js"));
var _drag = _interopRequireDefault(require("./drag.js"));
var _classes = require("./classes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Visit = /*#__PURE__*/function () {
  function Visit(visit) {
    _classCallCheck(this, Visit);
    this._data = visit;
    this._age = visit.age;
    this._purposeOfVisit = visit.purposeOfVisit;
    this._bloodPressure = visit.bloodPressure;
    this._bodyMassIndex = visit.bodyMassIndex;
    this._pastDiseases = visit.pastDiseases;
    this._shortDiscriptionsOfVisit = visit.shortDiscriptionsOfVisit;
    this._urgency = visit.urgency;
    this._dateOfPreviousVisit = visit.dateOfPreviousVisit;
  }
  _createClass(Visit, [{
    key: "render",
    value: function render(visit) {
      this._container = document.querySelector(".visits");
      this._visit = document.createElement("div");
      this._visit.classList = "visit-card";
      this._visitIdContainer = document.createElement("p");
      this._visitIdContainer.classList = "visit-id-container";
      this._visitIdContainer.innerText = "ID: ".concat(this._data.id);
      this._fullName = document.createElement("p");
      this._fullName.classList.add("full-name-container");
      this._fullName.innerHTML = "\u0424\u0418\u041E: <span class=\"full-name\">".concat(this._data.fullName, "</span>");
      this._doctor = document.createElement("p");
      this._doctor.classList.add("doctor");
      this._doctor.innerText = "\u0414\u043E\u043A\u0442\u043E\u0440: ".concat(this._data.doctor);
      this._showMoreBtn = new _classes.Button("showMoreButton");
      this._showMoreBind = this.showMore.bind(this);
      this._showMoreBtn.addEventListener("click", this._showMoreBind);
      this._visit.append(this._visitIdContainer);
      this._visit.append(this._fullName);
      this._visit.append(this._doctor);
      this._visit.append(this._showMoreBtn);
      this._showLessBtn = new _classes.Button("showLessButton");
      this._showLessBind = this.showLess.bind(this);
      this._showLessBtn.addEventListener("click", this._showLessBind);
      this._editPanel = document.createElement("div");
      this._editPanel.classList.add("edit-panel");
      this._editPanel.classList.add("hidden");
      this._editVisitIcon = new _classes.Button("editVisitButton");
      this._enableEditModeBind = this.enableEditMode.bind(this);
      this._editVisitIcon.addEventListener("click", this._enableEditModeBind);
      this._removeVisitIcon = new _classes.Button("removeVisitButton");
      this._removeVisitBind = this.removeVisit.bind(this);
      this._removeVisitIcon.addEventListener("click", this._removeVisitBind);
      this._editPanel.append(this._editVisitIcon);
      this._editPanel.append(this._removeVisitIcon);
      this._visit.append(this._editPanel);
      this._visit.append(this._showLessBtn);
      this._container.append(this._visit);
    }
  }, {
    key: "showMore",
    value: function showMore() {
      this._showMoreBtn.classList.add("hidden");
      this._showLessBtn.classList.remove("hidden");
      this._visit.querySelector(".extra-info").classList.remove("hidden");
      this._visit.querySelector(".edit-panel").classList.remove("hidden");
    }
  }, {
    key: "showLess",
    value: function showLess() {
      this._showLessBtn.classList.add("hidden");
      this._showMoreBtn.classList.remove("hidden");
      this._visit.querySelector(".extra-info").classList.add("hidden");
      this._visit.querySelector(".edit-panel").classList.add("hidden");
    }
  }, {
    key: "enableEditMode",
    value: function enableEditMode() {
      new _modal.default("editVisit", this, this._data.id, this._data);
    }
  }, {
    key: "updateValue",
    value: function updateValue(data, visit) {
      this._data = data;
      if (data.doctor === "Cardiologist") {
        visit._visit.querySelector(".full-name").innerHTML = data.fullName;
        visit._visit.querySelector(".age").innerHTML = data.age;
        visit._visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
        visit._visit.querySelector(".blood-pressure").innerHTML = data.bloodPressure;
        visit._visit.querySelector(".body-mass-index").innerHTML = data.bodyMassIndex;
        visit._visit.querySelector(".past-diseases").innerHTML = data.pastDiseases;
        visit._visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
      }
      if (data.doctor === "Dentist") {
        visit._visit.querySelector(".full-name").innerHTML = data.fullName;
        visit._visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
        visit._visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
        visit._visit.querySelector(".date-of-previous-visit").innerHTML = data.dateOfPreviousVisit;
      }
      if (data.doctor === "Therapist") {
        visit._visit.querySelector(".full-name").innerHTML = data.fullName;
        visit._visit.querySelector(".age").innerHTML = data.age;
        visit._visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
        visit._visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
      }
    }
  }, {
    key: "removeVisit",
    value: function removeVisit() {
      var _this = this;
      new _request.default("delete", null, this._data.id).then(function (response) {
        return response.text();
      }).then(function () {
        _this.destroy();
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._visit.remove();
      if (this._container.children.length === 0) {
        this._noVisitsNotice = document.createElement("div");
        this._noVisitsNotice.classList.add("no-visits-notice");
        this._noVisitsNotice.innerText = "No items have been added yet.";
        this._container.append(this._noVisitsNotice);
      }
    }
  }], [{
    key: "renderAllVisits",
    value: function renderAllVisits(data) {
      var visitsContainer = document.querySelector(".visits");
      visitsContainer.innerHTML = "";
      data.forEach(function (visit) {
        switch (visit.doctor) {
          case "Cardiologist":
            new VisitCardiologist(visit);
            break;
          case "Dentist":
            new VisitDentist(visit);
            break;
          case "Therapist":
            new VisitTherapist(visit);
            break;
          default:
            new _request.default("delete", null, visit.id);
        }
        var drag = new _drag.default(".visits", ".visit-card");
        document.addEventListener("mousedown", function (event) {
          return drag.mouseDown(event);
        });
        document.addEventListener("mouseup", function (event) {
          return drag.mouseUp(event);
        });
      });
    }
  }]);
  return Visit;
}();
exports.default = Visit;
var VisitCardiologist = /*#__PURE__*/function (_Visit) {
  _inherits(VisitCardiologist, _Visit);
  var _super = _createSuper(VisitCardiologist);
  function VisitCardiologist(visit) {
    var _this2;
    _classCallCheck(this, VisitCardiologist);
    _this2 = _super.call(this, visit);
    _this2.render();
    return _this2;
  }
  _createClass(VisitCardiologist, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(VisitCardiologist.prototype), "render", this).call(this);
      var extraInfo = document.createElement("div");
      extraInfo.classList.add("extra-info");
      extraInfo.innerHTML = "\n        <p class=\"line-in-visit\">\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(this._age, "</p>\n        <p class=\"line-in-visit\">\u0426\u0435\u043B\u044C \u0432\u0438\u0437\u0438\u0442\u0430: ").concat(this._purposeOfVisit, "</p>\n        <p class=\"line-in-visit\">\u041E\u0431\u044B\u0447\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435: ").concat(this._bloodPressure, "</p>\n        <p class=\"line-in-visit\">\u0418\u043D\u0434\u0435\u043A\u0441 \u043C\u0430\u0441\u0441\u044B \u0442\u0435\u043B\u0430: ").concat(this._bodyMassIndex, "</p>\n        <p class=\"line-in-visit\">\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0435\u0447\u043D\u043E-\u0441\u043E\u0441\u0443\u0434\u0438\u0441\u0442\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B: ").concat(this._pastDiseases, "</p>\n        <p class=\"line-in-visit\">\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u0430: ").concat(this._shortDiscriptionsOfVisit, "</p>\n        <p class=\"line-in-visit\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C: ").concat(this._urgency, "</p>\n        ");
      extraInfo.classList.add("hidden");
      this._visit.querySelector(".edit-panel").before(extraInfo);
    }
  }]);
  return VisitCardiologist;
}(Visit);
exports.VisitCardiologist = VisitCardiologist;
var VisitDentist = /*#__PURE__*/function (_Visit2) {
  _inherits(VisitDentist, _Visit2);
  var _super2 = _createSuper(VisitDentist);
  function VisitDentist(visit) {
    var _this3;
    _classCallCheck(this, VisitDentist);
    _this3 = _super2.call(this, visit);
    _this3.render();
    return _this3;
  }
  _createClass(VisitDentist, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(VisitDentist.prototype), "render", this).call(this);
      var extraInfo = document.createElement("div");
      extraInfo.classList.add("extra-info");
      extraInfo.innerHTML = "\n        <p class=\"line-in-visit\">\u0426\u0435\u043B\u044C \u0432\u0438\u0437\u0438\u0442\u0430: ".concat(this._purposeOfVisit, "</p>\n        <p class=\"line-in-visit\">\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0432\u0438\u0437\u0438\u0442\u0430: ").concat(this._dateOfPreviousVisit, "</p>\n        <p class=\"line-in-visit\">\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u0430: ").concat(this._shortDiscriptionsOfVisit, "</p>\n        <p class=\"line-in-visit\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C: ").concat(this._urgency, "</p>\n        ");
      extraInfo.classList.add("hidden");
      this._visit.querySelector(".edit-panel").before(extraInfo);
    }
  }]);
  return VisitDentist;
}(Visit);
exports.VisitDentist = VisitDentist;
var VisitTherapist = /*#__PURE__*/function (_Visit3) {
  _inherits(VisitTherapist, _Visit3);
  var _super3 = _createSuper(VisitTherapist);
  function VisitTherapist(visit) {
    var _this4;
    _classCallCheck(this, VisitTherapist);
    _this4 = _super3.call(this, visit);
    _this4.render();
    return _this4;
  }
  _createClass(VisitTherapist, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(VisitTherapist.prototype), "render", this).call(this);
      var extraInfo = document.createElement("div");
      extraInfo.classList.add("extra-info");
      extraInfo.innerHTML = "\n        <p class=\"line-in-visit\">\u0412\u0440\u0437\u0440\u0430\u0441\u0442: ".concat(this._age, "</p>\n        <p class=\"line-in-visit\">\u0426\u0435\u043B\u044C \u0432\u0438\u0437\u0438\u0442\u0430: ").concat(this._purposeOfVisit, "</p>\n        <p class=\"line-in-visit\">\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u0430: ").concat(this._shortDiscriptionsOfVisit, "</p>\n        <p class=\"line-in-visit\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C: ").concat(this._urgency, "</p>\n        ");
      extraInfo.classList.add("hidden");
      this._visit.querySelector(".edit-panel").before(extraInfo);
    }
  }]);
  return VisitTherapist;
}(Visit);
exports.VisitTherapist = VisitTherapist;
},{"./request.js":"src/js/request.js","./modal.js":"src/js/modal.js","./drag.js":"src/js/drag.js","./classes.js":"src/js/classes.js"}],"src/js/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _visit = _interopRequireDefault(require("./visit.js"));
var _request = _interopRequireDefault(require("./request.js"));
var _classes = require("./classes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Filter = /*#__PURE__*/function () {
  function Filter() {
    _classCallCheck(this, Filter);
    this._searchContainer = document.querySelector(".filter-container");
    this._getVisitsData();
    this._createInput();
    this._createSelectUrgency();
    this._createSelectStatus();
  }
  _createClass(Filter, [{
    key: "_createInput",
    value: function _createInput() {
      this._input = new _classes.Input("search");
      this._searchContainer.append(this._input);
    }
  }, {
    key: "_createSelectUrgency",
    value: function _createSelectUrgency() {
      var _this = this;
      var urgency = ["All", "Regular", "Priority", "Urgent"];
      this._urgencySelect = new _classes.Select("searchUrgency");
      var urgencyTitle = document.createElement("span");
      urgencyTitle.classList.add("filter_urgency-title");
      urgencyTitle.innerText = "Выберите срочность посещения:";
      urgency.forEach(function (e) {
        _this._selectOption = document.createElement("option");
        _this._selectOption.text = e;
        _this._urgencySelect.options.add(_this._selectOption);
      });
      this._searchContainer.append(urgencyTitle);
      this._searchContainer.append(this._urgencySelect);
    }
  }, {
    key: "_createSelectStatus",
    value: function _createSelectStatus() {
      var _this2 = this;
      var status = ["All", "Open", "Done"];
      this._statusSelect = new _classes.Select("searchStatus");
      var statusTitle = document.createElement("span");
      statusTitle.classList.add("filter_urgency-title");
      statusTitle.innerText = "Выберите статус заявки:";
      status.forEach(function (e) {
        _this2._selectOption = document.createElement("option");
        _this2._selectOption.text = e;
        _this2._statusSelect.options.add(_this2._selectOption);
      });
      this._searchContainer.append(statusTitle);
      this._searchContainer.append(this._statusSelect);
    }
  }, {
    key: "_getVisitsData",
    value: function _getVisitsData() {
      var _this3 = this;
      new Promise(function (resolve, reject) {
        resolve(new _request.default("getAllVisits"));
      }).then(function (data) {
        _this3._filter(data);
        _this3._filterByUrgency(data);
        _this3._filterByStatus(data);
      });
    }
  }, {
    key: "_filter",
    value: function _filter(allVisits) {
      this._input.addEventListener("input", function () {
        var visitsArray = [];
        var inputedValue = this.value.trim();
        var inputedData = new RegExp(inputedValue, "i");
        if (inputedValue !== "") {
          allVisits.forEach(function (el) {
            var inputedName = el.fullName.search(inputedData);
            var inputedDoctor = el.doctor.search(inputedData);
            var inputedDiscription = el.shortDiscriptionsOfVisit.search(inputedData);
            if (inputedName !== -1 || inputedDoctor !== -1 || inputedDiscription !== -1) {
              visitsArray.push(el);
            }
          });
          _visit.default.renderAllVisits(visitsArray);
        } else {
          _visit.default.renderAllVisits(allVisits);
        }
      });
    }
  }, {
    key: "_filterByUrgency",
    value: function _filterByUrgency(allVisits) {
      var _this4 = this;
      this._urgencySelect.addEventListener("change", function (e) {
        _this4._input.value = "";
        e.preventDefault();
        e.stopPropagation();
        var filteredUrgencyArray = [];
        if (e.currentTarget.value === "All") {
          _visit.default.renderAllVisits(allVisits);
          _this4._filter(allVisits);
        } else {
          allVisits.forEach(function (elem) {
            if (elem.urgency === e.currentTarget.value) {
              filteredUrgencyArray.push(elem);
            } else {
              var visitsContainer = document.querySelector(".visits");
              visitsContainer.innerHTML = "No data found";
            }
          });
          _this4._filter(filteredUrgencyArray);
          _visit.default.renderAllVisits(filteredUrgencyArray);
        }
      });
    }
  }, {
    key: "_filterByStatus",
    value: function _filterByStatus(allVisits) {
      var _this5 = this;
      this._statusSelect.addEventListener("change", function (e) {
        _this5._input.value = "";
        e.preventDefault();
        e.stopPropagation();
        var filteredStatusArray = [];
        if (e.currentTarget.value === "All") {
          _visit.default.renderAllVisits(allVisits);
          _this5._filter(allVisits);
        } else {
          allVisits.forEach(function (elem) {
            if (elem.status === e.currentTarget.value) {
              filteredStatusArray.push(elem);
            }
          });
          _this5._filter(filteredStatusArray);
          _visit.default.renderAllVisits(filteredStatusArray);
        }
      });
    }
  }], [{
    key: "filterHide",
    value: function filterHide() {
      var filter = document.querySelector(".filter");
      filter.classList.add("hidden");
    }
  }, {
    key: "filterShow",
    value: function filterShow() {
      var filter = document.querySelector(".filter");
      filter.classList.remove("hidden");
      new Filter();
    }
  }]);
  return Filter;
}();
exports.default = Filter;
},{"./visit.js":"src/js/visit.js","./request.js":"src/js/request.js","./classes.js":"src/js/classes.js"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classes = require("./classes.js");
var _request = _interopRequireDefault(require("./request.js"));
var _visit = _interopRequireWildcard(require("./visit.js"));
var _filter = _interopRequireDefault(require("./filter"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Form = /*#__PURE__*/function () {
  function Form(typeOfForm, visit, id, data) {
    _classCallCheck(this, Form);
    this._visit = visit;
    this._id = id;
    this._data = data;
    // console.log(this._visit);

    this._elem = document.createElement("form");
    if (typeOfForm === "login") {
      this._elem.classList = "login-form";
      this._mailInput = new _classes.Input("email");
      this._elem.append(this._mailInput);
      this._passwordInput = new _classes.Input("password");
      this._elem.append(this._passwordInput);
      this._loginButton = new _classes.Button("login");
      this._elem.append(this._loginButton);
      this._errorNote = document.createElement("p");
      this._errorNote.className = "error-note";
      this._errorNote.innerText = "Неправильный e-mail или пароль";
      this._errorNote.style.visibility = "hidden";
      this._errorNote.style.opacity = "0";
      this._elem.append(this._errorNote);
      this._elem.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        formData = Object.fromEntries(formData);
        new _request.default("login", formData, null).then(function (token) {
          console.log(token);
          var signIn = document.querySelector(".sign-in-btn");
          signIn.style.display = "none";
          var createVisit = document.querySelector(".create-visit-btn");
          createVisit.style.display = "block";
          localStorage.setItem("token", token);
          var modal = document.querySelector(".modal-dialog");
          modal.remove();
          new Promise(function (resolve, reject) {
            resolve(new _request.default("getAllVisits"));
          }).then(function (data) {
            if (data.length !== 0) {
              _visit.default.renderAllVisits(data);
            }
          });
          _filter.default.filterShow();
        }).catch(function (error) {
          return console.error(error);
        });
        this.reset();
      });
      return this._elem;
    }
    if (typeOfForm === "createVisit") {
      this._elem.classList = "createVisit-form";
      this._select = new _classes.Select("doctor");
      this._elem.append(this._select);
      return this._elem;
    }
    if (typeOfForm === "editVisit") {
      this._elem.classList = "editVisit-form";

      // console.log(this._visit);
      if (this._visit._data.doctor === "Cardiologist") {
        this._doctor = new _classes.InputFieldTitle("Доктор: ");
        this._doctor.insertAdjacentHTML("beforeend", "".concat(this._visit._data.doctor));
        this._urgency = new _classes.InputFieldTitle("Срочность: ");
        this._urgency.insertAdjacentHTML("beforeend", "".concat(this._visit._data.urgency));
        this._fullName = new _classes.Input("fullName");
        this._fullName.value = this._visit._data.fullName;
        this._age = new _classes.Input("age");
        this._age.value = this._visit._data.age;
        this._inputPurpose = new _classes.Input("purposeOfVisit");
        this._inputPurpose.value = this._visit._data.purposeOfVisit;
        this._bloodPressure = new _classes.Input("bloodPressure");
        this._bloodPressure.value = this._visit._data.bloodPressure;
        this._bodyMassIndex = new _classes.Input("bodyMassIndex");
        this._bodyMassIndex.value = this._visit._data.bodyMassIndex;
        this._pastDiseases = new _classes.Textarea("pastDiseases");
        this._pastDiseases.value = this._visit._data.pastDiseases;
        this._shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
        this._shortDiscriptionsOfVisit.value = this._visit._data.shortDiscriptionsOfVisit;
        this._editVisitModalBtn = new _classes.Button("editVisitModalBtn");
        this._editVisitClickBind = this._editVisitClick.bind(this);
        this._elem.addEventListener("submit", this._editVisitClickBind);
        this._elem.append(this._doctor);
        this._elem.append(this._urgency);
        this._elem.append(new _classes.InputFieldTitle("ФИО:"));
        this._elem.append(this._fullName);
        this._elem.append(new _classes.InputFieldTitle("Возраст:"));
        this._elem.append(this._age);
        this._elem.append(new _classes.InputFieldTitle("Цель визита:"));
        this._elem.append(this._inputPurpose);
        this._elem.append(new _classes.InputFieldTitle("Обычное давление:"));
        this._elem.append(this._bloodPressure);
        this._elem.append(new _classes.InputFieldTitle("Индекс массы тела:"));
        this._elem.append(this._bodyMassIndex);
        this._elem.append(new _classes.InputFieldTitle("Перенесенные заболевания сердечно-сосудистой системы:"));
        this._elem.append(this._pastDiseases);
        this._elem.append(new _classes.InputFieldTitle("Краткое описание визита:"));
        this._elem.append(this._shortDiscriptionsOfVisit);
        this._elem.append(this._editVisitModalBtn);
        return this._elem;
      }
      if (this._visit._data.doctor === "Dentist") {
        this._doctor = new _classes.InputFieldTitle("Доктор: ");
        this._doctor.insertAdjacentHTML("beforeend", "".concat(this._visit._data.doctor));
        this._urgency = new _classes.InputFieldTitle("Срочность: ");
        this._urgency.insertAdjacentHTML("beforeend", "".concat(this._visit._data.urgency));
        this._fullName = new _classes.Input("fullName");
        this._fullName.value = this._visit._data.fullName;
        this._inputPurpose = new _classes.Input("purposeOfVisit");
        this._inputPurpose.value = this._visit._data.purposeOfVisit;
        this._inputDateOfPrevVisit = new _classes.Input("dateOfPreviousVisit");
        this._inputDateOfPrevVisit.value = this._visit._data.dateOfPreviousVisit;
        this._shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
        this._shortDiscriptionsOfVisit.value = this._visit._data.shortDiscriptionsOfVisit;
        this._editVisitModalBtn = new _classes.Button("editVisitModalBtn");
        this._editVisitClickBind = this._editVisitClick.bind(this);
        this._elem.addEventListener("submit", this._editVisitClickBind);
        this._elem.append(this._doctor);
        this._elem.append(this._urgency);
        this._elem.append(new _classes.InputFieldTitle("ФИО:"));
        this._elem.append(this._fullName);
        this._elem.append(new _classes.InputFieldTitle("Цель визита:"));
        this._elem.append(this._inputPurpose);
        this._elem.append(new _classes.InputFieldTitle("Дата последнего визита:"));
        this._elem.append(this._inputDateOfPrevVisit);
        this._elem.append(new _classes.InputFieldTitle("Краткое описание визита:"));
        this._elem.append(this._shortDiscriptionsOfVisit);
        this._elem.append(this._editVisitModalBtn);
      }
      if (this._visit._data.doctor === "Therapist") {
        this._doctor = new _classes.InputFieldTitle("Доктор: ");
        this._doctor.insertAdjacentHTML("beforeend", "".concat(this._visit._data.doctor));
        this._urgency = new _classes.InputFieldTitle("Срочность: ");
        this._urgency.insertAdjacentHTML("beforeend", "".concat(this._visit._data.urgency));
        this._fullName = new _classes.Input("fullName");
        this._fullName.value = this._visit._data.fullName;
        this._age = new _classes.Input("age");
        this._age.value = this._visit._data.age;
        this._inputPurpose = new _classes.Input("purposeOfVisit");
        this._inputPurpose.value = this._visit._data.purposeOfVisit;
        this._shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
        this._shortDiscriptionsOfVisit.value = this._visit._data.shortDiscriptionsOfVisit;
        this._editVisitModalBtn = new _classes.Button("editVisitModalBtn");
        this._editVisitClickBind = this._editVisitClick.bind(this);
        this._elem.addEventListener("submit", this._editVisitClickBind);
        this._elem.append(this._doctor);
        this._elem.append(this._urgency);
        this._elem.append(new _classes.InputFieldTitle("ФИО:"));
        this._elem.append(this._fullName);
        this._elem.append(new _classes.InputFieldTitle("Возраст:"));
        this._elem.append(this._age);
        this._elem.append(new _classes.InputFieldTitle("Цель визита:"));
        this._elem.append(this._inputPurpose);
        this._elem.append(new _classes.InputFieldTitle("Краткое описание визита:"));
        this._elem.append(this._shortDiscriptionsOfVisit);
        this._elem.append(this._editVisitModalBtn);
      }
      return this._elem;
    }
    if (typeOfForm === "doctorCardiologist") {
      this._elem = document.querySelector(".createVisit-form");
      this._fullName = new _classes.Input("fullName");
      this._age = new _classes.Input("age");
      this._purposeOfVisit = new _classes.Input("purposeOfVisit");
      this._bloodPressure = new _classes.Input("bloodPressure");
      this._bodyMassIndex = new _classes.Input("bodyMassIndex");
      this._pastDiseases = new _classes.Textarea("pastDiseases");
      this._urgency = new _classes.Select("urgency");
      this._shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
      this._createVisitModalBtn = new _classes.Button("createVisitModalBtn");
      this._createVisitClickBind = this._createVisit.bind(this);
      this._elem.addEventListener("submit", this._createVisitClickBind);
      this._elem.append(this._fullName);
      this._elem.append(this._age);
      this._elem.append(this._purposeOfVisit);
      this._elem.append(this._bloodPressure);
      this._elem.append(this._bodyMassIndex);
      this._elem.append(this._pastDiseases);
      this._elem.append(this._urgency);
      this._elem.append(this._shortDiscriptionsOfVisit);
      this._elem.append(this._createVisitModalBtn);
    }
    if (typeOfForm === "doctorDentist") {
      this._elem = document.querySelector(".createVisit-form");
      this._fullName = new _classes.Input("fullName");
      this._purposeOfVisit = new _classes.Input("purposeOfVisit");
      this._urgency = new _classes.Select("urgency");
      this._dateOfPreviousVisit = new _classes.Input("dateOfPreviousVisit");
      this._shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
      this._createVisitModalBtn = new _classes.Button("createVisitModalBtn");
      this._createVisitClickBind = this._createVisit.bind(this);
      this._elem.addEventListener("submit", this._createVisitClickBind);
      this._elem.append(this._fullName);
      this._elem.append(this._purposeOfVisit);
      this._elem.append(this._urgency);
      this._elem.append(this._dateOfPreviousVisit);
      this._elem.append(this._shortDiscriptionsOfVisit);
      this._elem.append(this._createVisitModalBtn);
    }
    if (typeOfForm === "doctorTherapist") {
      this._elem = document.querySelector(".createVisit-form");
      this._fullName = new _classes.Input("fullName");
      this._age = new _classes.Input("age");
      this._purposeOfVisit = new _classes.Input("purposeOfVisit");
      this._urgency = new _classes.Select("urgency");
      this._shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
      this._createVisitModalBtn = new _classes.Button("createVisitModalBtn");
      this._createVisitClickBind = this._createVisit.bind(this);
      this._elem.addEventListener("submit", this._createVisitClickBind);
      this._elem.append(this._fullName);
      this._elem.append(this._age);
      this._elem.append(this._purposeOfVisit);
      this._elem.append(this._urgency);
      this._elem.append(this._shortDiscriptionsOfVisit);
      this._elem.append(this._createVisitModalBtn);
    }
  }
  _createClass(Form, [{
    key: "_createVisit",
    value: function _createVisit(e) {
      e.preventDefault();
      var selectedDoctor = document.querySelector(".doctor-select").value;
      var selectedUrgency = document.querySelector(".urgency-select").value;
      var formData = new FormData(this._elem);
      formData = Object.fromEntries(formData);
      formData["doctor"] = selectedDoctor;
      formData["urgency"] = selectedUrgency;
      new _request.default("post", formData, null).then(function (data) {
        console.log(data);
        var modal = document.querySelector(".modal-dialog");
        modal.remove();
        var noVisitsNotice = document.querySelector(".no-visits-notice");
        if (noVisitsNotice) {
          noVisitsNotice.remove();
        }
        switch (data.doctor) {
          case "Cardiologist":
            new _visit.VisitCardiologist(data);
            break;
          case "Dentist":
            new _visit.VisitDentist(data);
            break;
          case "Therapist":
            new _visit.VisitTherapist(data);
            break;
        }
      }).catch(function (error) {
        return console.error(error);
      });
      this._elem.reset();
    }
  }, {
    key: "_editVisitClick",
    value: function _editVisitClick(e) {
      var _this = this;
      e.preventDefault();
      var formData = new FormData(this._elem);
      formData = Object.fromEntries(formData);
      formData["doctor"] = this._visit._data.doctor;
      formData["urgency"] = this._visit._data.urgency;
      new _request.default("put", formData, this._visit._data.id).then(function (response) {
        var modal = document.querySelector(".modal-dialog");
        modal.remove();
        return response.json();
      }).then(function (data) {
        _this._visit.updateValue(data, _this._visit);
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }]);
  return Form;
}();
exports.default = Form;
},{"./classes.js":"src/js/classes.js","./request.js":"src/js/request.js","./visit.js":"src/js/visit.js","./filter":"src/js/filter.js"}],"src/js/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _form = _interopRequireDefault(require("./form.js"));
var _classes = require("./classes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Modal = /*#__PURE__*/function () {
  function Modal(typeOfModal, visit, data, id) {
    _classCallCheck(this, Modal);
    this._overlay = document.querySelector(".overlay");
    this._overlay.classList.add("active");
    this._modalContainer = document.createElement("div");
    this._modalContainer.classList.add("modal-dialog");
    this._modalContainer.tabinde = "-1";
    this._modalContent = document.createElement("div");
    this._modalContent.classList.add("modal-content");
    this._modalContainer.append(this._modalContent);
    this._modalHeader = document.createElement("div");
    this._modalHeader.classList.add("modal-header");
    this._modalContent.append(this._modalHeader);
    this._modalButtonClose = document.createElement("span");
    this._modalButtonClose.classList.add("btn-close");
    this._modalHeader.append(this._modalButtonClose);
    this._modalBody = document.createElement("div");
    this._modalBody.classList.add("modal-body");
    this._modalContent.append(this._modalBody);
    this._modalButtonClose = document.createElement("span");
    this._modalButtonClose.classList.add("btn-close");
    this._modalHeader.append(this._modalButtonClose);
    this._removeModalBind = this._removeModal.bind(this);
    this._modalButtonClose.addEventListener("click", this._removeModalBind);
    this._onBackgroundClick();
    if (typeOfModal === "login") {
      this._titleHeader = document.createElement("h3");
      this._modalHeader.append(this._titleHeader);
      this._titleHeader.innerHTML = "Введите e-mail и пароль";
      this._loginForm = new _form.default("login");
      this._modalBody.append(this._loginForm);
    }
    if (typeOfModal === "createVisit") {
      this._titleHeader = document.createElement("h3");
      this._modalHeader.append(this._titleHeader);
      this._titleHeader.innerHTML = "Заполните данные о посещении";
      this._createVisitForm = new _form.default("createVisit");
      this._modalBody.append(this._createVisitForm);
    }
    if (typeOfModal === "editVisit") {
      this._titleHeader = document.createElement("h3");
      this._modalHeader.append(this._titleHeader);
      this._titleHeader.innerHTML = "Измените информацию о визите";
      this._editVisitForm = new _form.default("editVisit", visit, id, data);
      this._modalBody.append(this._editVisitForm);
    }
    document.body.prepend(this._modalContainer);
    this._modalContainer.classList.add("active");
  }
  _createClass(Modal, [{
    key: "_removeModal",
    value: function _removeModal() {
      this._modalContainer.remove();
      this._overlay.classList.remove("active");
      this._modalButtonClose.removeEventListener("click", this._removeModalBind);
    }
  }, {
    key: "_onBackgroundClick",
    value: function _onBackgroundClick() {
      this._body = document.body.addEventListener("keyup", function (e) {
        var key = e.keyCode;
        if (key == 27) {
          var overlay = document.querySelector(".overlay");
          var modalContainer = document.querySelector(".modal-dialog");
          modalContainer.remove();
          overlay.classList.remove("active");
        }
        ;
      }, false);
      this._overlay.addEventListener("click", function () {
        var overlay = document.querySelector(".overlay");
        var modalContainer = document.querySelector(".modal-dialog");
        modalContainer.remove();
        overlay.classList.remove("active");
      });
    }
  }]);
  return Modal;
}();
exports.default = Modal;
},{"./form.js":"src/js/form.js","./classes.js":"src/js/classes.js"}],"src/js/main.js":[function(require,module,exports) {
"use strict";

var _modal = _interopRequireDefault(require("./modal.js"));
var _request = _interopRequireDefault(require("./request.js"));
var _visit = _interopRequireDefault(require("./visit.js"));
var _filter = _interopRequireDefault(require("./filter.js"));
var _classes = require("./classes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createContent() {
  var header = document.createElement("header");
  header.className = "header";
  document.body.prepend(header);
  var a = document.createElement("a");
  a.className = "header-logo-link";
  a.innerHTML = "CARDS";
  a.href = "#";
  header.append(a);
  var signIn = new _classes.Button("signIn");
  header.append(signIn);
  var createVisit = new _classes.Button("createVisit");
  header.append(createVisit);
  var main = document.createElement("main");
  header.after(main);
  var mainContainer = document.createElement("div");
  mainContainer.classList = "main-container";
  main.append(mainContainer);
  var sectionFilter = document.createElement("section");
  sectionFilter.className = "filter";
  mainContainer.append(sectionFilter);
  var divFilter = document.createElement("div");
  divFilter.className = "filter-container";
  sectionFilter.append(divFilter);
  var sectionVisits = document.createElement("section");
  sectionVisits.className = "visits";
  mainContainer.append(sectionVisits);
  var divVisits = document.createElement("div");
  divVisits.className = "no-visits-notice";
  divVisits.innerHTML = "No items have been added yet.";
  sectionVisits.append(divVisits);
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.id = "overlay-moda";
  document.body.append(overlay);
}
window.onload = function () {
  createContent();
  _filter.default.filterHide();
  var token = localStorage.getItem("token");
  var signIn = document.querySelector(".sign-in-btn");
  signIn.addEventListener("click", function () {
    return new _modal.default("login");
  });
  var createVisit = document.querySelector(".create-visit-btn");
  createVisit.addEventListener("click", function () {
    return new _modal.default("createVisit");
  });
  if (token) {
    signIn.style.display = "none";
    createVisit.style.display = "block";
    new Promise(function (resolve, reject) {
      resolve(new _request.default("getAllVisits"));
    }).then(function (data) {
      console.log(data);
      if (data.length !== 0) {
        _visit.default.renderAllVisits(data);
        _filter.default.filterShow();
      }
    }).catch(function (error) {
      return console.error(error);
    });
  }
};
},{"./modal.js":"src/js/modal.js","./request.js":"src/js/request.js","./visit.js":"src/js/visit.js","./filter.js":"src/js/filter.js","./classes.js":"src/js/classes.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61097" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/main.js"], null)
//# sourceMappingURL=/main.c48f6146.js.map