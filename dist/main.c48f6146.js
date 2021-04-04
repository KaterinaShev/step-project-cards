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
exports.InputFieldTitle = exports.Select = exports.Input = exports.Button = exports.Textarea = void 0;

var _form = _interopRequireDefault(require("./form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Textarea = function Textarea(typeOfTextarea) {
  _classCallCheck(this, Textarea);

  this.e = document.createElement("textarea");

  if (typeOfTextarea === "shortDiscriptionsOfVisit") {
    this.e.classList = "textarea";
    this.e.setAttribute("name", "shortDiscriptionsOfVisit");
    this.e.setAttribute("placeholder", "Краткое описание визита");
    return this.e;
  }

  if (typeOfTextarea === "pastDiseases") {
    this.e.classList = "textarea";
    this.e.setAttribute("name", "pastDiseases");
    this.e.setAttribute("placeholder", "Перенесенные заболевания сердечно-сосудистой системы");
    this.e.setAttribute("required", "required");
    return this.e;
  }
};

exports.Textarea = Textarea;

var Button = function Button(typeOfButton) {
  _classCallCheck(this, Button);

  this.e = document.createElement("button");

  if (typeOfButton === "login") {
    this.e.classList = "login-btn";
    this.e.setAttribute("type", "submit");
    this.e.innerText = "Войти";
    return this.e;
  }

  if (typeOfButton === "createVisitModalBtn") {
    this.e.classList = "create-visit-modal-btn";
    this.e.setAttribute("type", "submit");
    this.e.innerText = "Создать";
    return this.e;
  }

  if (typeOfButton === "editVisitModalBtn") {
    this.e.classList = "edit-visit-modal-btn";
    this.e.setAttribute("type", "submit");
    this.e.innerText = "Редактировать";
    return this.e;
  } // if (typeOfButton === "signIn") {
  //     this.e.classList = "btn_sign_in"
  //     this.e.innerHTML = "Sign in"
  //     return this.e;
  // }

};

exports.Button = Button;

var Input = /*#__PURE__*/function () {
  function Input(typeOfInput) {
    _classCallCheck(this, Input);

    this.e = document.createElement('input');

    if (typeOfInput === "email") {
      this.e.setAttribute("type", "text");
      this.e.setAttribute("name", "email");
      this.e.setAttribute("id", "email");
      this.e.classList = "email-input";
      this.e.setAttribute("required", "required");
      this.inputLabel = document.createElement("label");
      this.inputLabel.classList = "input-label";
      this.inputLabel.innerText = "E-mail";
      this.inputLabel.append(this.e);
      return this.inputLabel;
    }

    if (typeOfInput === "password") {
      this.e.setAttribute("type", "password");
      this.e.setAttribute("name", "password");
      this.e.setAttribute("id", "password");
      this.e.classList.add("password-input");
      this.e.setAttribute("required", "required");
      this.inputLabel = document.createElement("label");
      this.inputLabel.classList.add("input-label");
      this.inputLabel.innerText = "Password";
      this.inputLabel.append(this.e);
      return this.inputLabel;
    }

    if (typeOfInput === "fullName") {
      this.e.setAttribute("type", "text");
      this.e.setAttribute("name", "fullName");
      this.e.setAttribute("required", "required");
      this.e.setAttribute("placeholder", "ФИО");
      this.e.classList.add("one-line-input");
      return this.e;
    }

    if (typeOfInput === "age") {
      this.e.setAttribute("type", "number");
      this.e.setAttribute("name", "age");
      this.e.setAttribute("required", "required");
      this.e.setAttribute("placeholder", "Возраст");
      this.e.classList.add("one-line-input");
      this.checkAgeBound = this.checkAge.bind(this);
      this.e.addEventListener("focusout", this.checkAgeBound);
      return this.e;
    }

    if (typeOfInput === "purposeOfVisit") {
      this.e.setAttribute("type", "text");
      this.e.setAttribute("name", "purposeOfVisit");
      this.e.setAttribute("required", "required");
      this.e.setAttribute("placeholder", "Цель визита");
      this.e.classList.add("one-line-input");
      return this.e;
    }

    if (typeOfInput === "bloodPressure") {
      this.e.setAttribute("type", "text");
      this.e.setAttribute("name", "bloodPressure");
      this.e.setAttribute("required", "required");
      this.e.setAttribute("placeholder", "Обычное давление");
      this.e.classList.add("one-line-input");
      return this.e;
    }

    if (typeOfInput === "bodyMassIndex") {
      this.e.setAttribute("type", "text");
      this.e.setAttribute("name", "bodyMassIndex");
      this.e.setAttribute("required", "required");
      this.e.setAttribute("placeholder", "Индекс массы тела");
      this.e.classList.add("one-line-input");
      return this.e;
    }

    if (typeOfInput === "dateOfPreviousVisit") {
      this.e.setAttribute("type", "text");
      this.e.setAttribute("name", "dateOfPreviousVisit");
      this.e.setAttribute("required", "required");
      this.e.setAttribute("placeholder", "Дата последнего визита");
      this.e.classList.add("one-line-input");
      return this.e;
    }
  }

  _createClass(Input, [{
    key: "checkAge",
    value: function checkAge() {
      if (this.e.value < 5) {
        alert("Возраст должен быть не меньше 5 лет");
        this.e.value = "";
      } else if (this.e.value > 100) {
        alert("Возраст должен быть не больше 100 лет");
        this.e.value = "";
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
      this.e = document.createElement("select");
      this.e.classList = "doctor-select";
      this.e.setAttribute("required", "required");
      this.e.insertAdjacentHTML("afterbegin", "<option selected disabled value=\"\">\u0414\u043E\u043A\u0442\u043E\u0440</option>\n                 <option>Cardiologist</option>\n                 <option>Dentist</option>\n                 <option>Therapist</option>");
      this.onDoctorSelectBound = this.onDoctorSelect.bind(this);
      this.e.addEventListener("change", this.onDoctorSelectBound);
      return this.e;
    }

    if (typeOfSelect === "urgency") {
      this.e = document.createElement("select");
      this.e.classList = "urgency-select";
      this.e.setAttribute("required", "required");
      this.e.insertAdjacentHTML("afterbegin", "<option selected disabled value=\"\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C</option>\n                 <option>Regular</option>\n                 <option>Priority</option>\n                 <option>Urgent</option>\n            ");
      return this.e;
    }
  }

  _createClass(Select, [{
    key: "onDoctorSelect",
    value: function onDoctorSelect() {
      var selectedIndex = document.querySelector(".doctor-select").selectedIndex;
      var options = document.querySelector(".doctor-select").options;
      var selectedOption = options[selectedIndex].value;
      var createVisitForm = document.querySelector('.createVisit-form');

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

var InputFieldTitle = function InputFieldTitle(fieldName) {
  _classCallCheck(this, InputFieldTitle);

  this.e = document.createElement("span");
  this.e.classList.add("field-name");
  this.e.innerText = fieldName;
  return this.e;
};

exports.InputFieldTitle = InputFieldTitle;
},{"./form":"src/js/form.js"}],"src/js/request.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Request = /*#__PURE__*/function () {
  function Request(typeOfRequest, data, id) {
    _classCallCheck(this, Request);

    if (typeOfRequest === "login") {
      return this.login(data);
    }

    if (typeOfRequest === "post") {
      return this.post(data);
    }

    if (typeOfRequest === "put") {
      return this.put(data, id);
    }

    if (typeOfRequest === "delete") {
      return this.delete(data, id);
    }

    if (typeOfRequest === "getAllVisits") {
      return this.getAllVisits();
    }
  }

  _createClass(Request, [{
    key: "login",
    value: function login(data) {
      return fetch('https://ajax.test-danit.com/api/v2/cards/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (data) {
        if (!data.ok) {
          var errorNote = document.querySelector(".error-note");
          errorNote.style.visibility = 'visible';
          errorNote.style.opacity = "1";
          throw new Error("Wrong email or password");
        } else {
          return data;
        }
      }).then(function (response) {
        return response.text();
      }); // .then(token => console.log(token))
    }
  }, {
    key: "post",
    value: function post(data) {
      return fetch('https://ajax.test-danit.com/api/v2/cards', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response;
      });
    }
  }, {
    key: "put",
    value: function put(data, id) {
      return fetch('https://ajax.test-danit.com/api/v2/cards' + id, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        },
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "delete",
    value: function _delete(data, id) {
      return fetch('https://ajax.test-danit.com/api/v2/cards/' + id, {
        method: "DELETE",
        // mode: "no-cors",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      });
    }
  }, {
    key: "getAllVisits",
    value: function getAllVisits() {
      return fetch('https://ajax.test-danit.com/api/v2/cards', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
        _this.currentElem.style.left = event.pageX - _this.size.elem.width / 2 + 'px';
        _this.currentElem.style.top = event.pageY - _this.size.elem.height / 2 + 'px';
        if (_this.data.left <= 0) _this.currentElem.style.left = 0;
        if (_this.data.top <= 0) _this.currentElem.style.top = 0;
        if (_this.data.left + _this.size.elem.width >= _this.size.box.width) _this.currentElem.style.left = _this.size.box.width - _this.size.elem.width + 'px';
        if (_this.data.top + document.documentElement.scrollTop + _this.size.elem.height >= _this.size.box.height) _this.currentElem.style.top = currentHeight - _this.size.elem.height + 'px';
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

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
} // const drag = new DragAndDrop(`#field`, `.m4`);
// document.addEventListener("mousedown", event => drag.mouseDown(event));
// document.addEventListener("mouseup", event => drag.mouseUp(event));
},{}],"src/js/visit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisitTherapist = exports.VisitDentist = exports.VisitCardiologist = exports.default = void 0;

var _request = _interopRequireDefault(require("./request.js"));

var _modal = _interopRequireDefault(require("./modal.js"));

var _drag = _interopRequireDefault(require("./drag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Visit = /*#__PURE__*/function () {
  function Visit(visit) {
    _classCallCheck(this, Visit);

    this.data = visit;
    this.age = visit.age;
    this.purposeOfVisit = visit.purposeOfVisit;
    this.bloodPressure = visit.bloodPressure;
    this.bodyMassIndex = visit.bodyMassIndex;
    this.pastDiseases = visit.pastDiseases;
    this.shortDiscriptionsOfVisit = visit.shortDiscriptionsOfVisit;
    this.urgency = visit.urgency;
    this.dateOfPreviousVisit = visit.dateOfPreviousVisit;
  }

  _createClass(Visit, [{
    key: "render",
    value: function render(visit) {
      this.container = document.querySelector(".visits");
      this.visit = document.createElement("div");
      this.visit.classList = "visit-card";
      this.visitIdContainer = document.createElement("p");
      this.visitIdContainer.classList = "visit-id-container";
      this.visitIdContainer.innerText = "ID: ".concat(this.data.id);
      this.fullName = document.createElement("p");
      this.fullName.classList.add("full-name-container");
      this.fullName.innerHTML = "\u0424\u0418\u041E: <span class=\"full-name\">".concat(this.data.fullName, "</span>");
      this.doctor = document.createElement("p");
      this.doctor.classList.add("doctor");
      this.doctor.innerText = "\u0414\u043E\u043A\u0442\u043E\u0440: ".concat(this.data.doctor);
      this.showMoreBtn = document.createElement("button");
      this.showMoreBtn.classList.add("show-more-btn");
      this.showMoreBtn.setAttribute("vertical-align", "middle");
      this.showMoreBtn.insertAdjacentHTML("afterbegin", "<span>Показать больше</span>");
      this.showMoreBound = this.showMore.bind(this);
      this.showMoreBtn.addEventListener('click', this.showMoreBound);
      this.visit.append(this.visitIdContainer);
      this.visit.append(this.fullName);
      this.visit.append(this.doctor);
      this.visit.append(this.showMoreBtn);
      this.showLessBtn = document.createElement("button");
      this.showLessBtn.classList.add("show-less-btn");
      this.showLessBtn.setAttribute("vertical-align", "middle");
      this.showLessBtn.insertAdjacentHTML("afterbegin", "<span>Показать меньше</span>");
      this.showLessBtn.classList.add("hidden");
      this.showLessBound = this.showLess.bind(this);
      this.showLessBtn.addEventListener("click", this.showLessBound);
      this.editPanel = document.createElement("div");
      this.editPanel.classList.add('edit-panel');
      this.editPanel.classList.add('hidden');
      this.editVisitIcon = document.createElement("button");
      this.editVisitIcon.classList.add("edit-visit-button");
      this.editVisitIcon.innerHTML = "Редактировать";
      this.enableEditModeBound = this.enableEditMode.bind(this);
      this.editVisitIcon.addEventListener("click", this.enableEditModeBound);
      this.removeVisitIcon = document.createElement("button");
      this.removeVisitIcon.classList.add("remove-visit-button");
      this.removeVisitIcon.innerHTML = "Удалить визит";
      this.removeVisitBound = this.removeVisit.bind(this);
      this.removeVisitIcon.addEventListener("click", this.removeVisitBound);
      this.editPanel.append(this.editVisitIcon);
      this.editPanel.append(this.removeVisitIcon);
      this.visit.append(this.editPanel);
      this.visit.append(this.showLessBtn);
      this.container.append(this.visit);
    }
  }, {
    key: "showMore",
    value: function showMore() {
      this.showMoreBtn.classList.add('hidden');
      this.showLessBtn.classList.remove("hidden");
      this.visit.querySelector(".extra-info").classList.remove("hidden");
      this.visit.querySelector(".edit-panel").classList.remove("hidden");
    }
  }, {
    key: "showLess",
    value: function showLess() {
      this.showLessBtn.classList.add("hidden");
      this.showMoreBtn.classList.remove("hidden");
      this.visit.querySelector(".extra-info").classList.add("hidden");
      this.visit.querySelector(".edit-panel").classList.add("hidden");
    }
  }, {
    key: "enableEditMode",
    value: function enableEditMode() {
      new _modal.default("editVisit", this, this.data.id, this.data);
    }
  }, {
    key: "updateValue",
    value: function updateValue(data, visit) {
      this.data = data;

      if (data.doctor === "Cardiologist") {
        visit.visit.querySelector(".full-name").innerHTML = data.fullName;
        visit.visit.querySelector(".age").innerHTML = data.age;
        visit.visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
        visit.visit.querySelector(".blood-pressure").innerHTML = data.bloodPressure;
        visit.visit.querySelector(".body-mass-index").innerHTML = data.bodyMassIndex;
        visit.visit.querySelector(".past-diseases").innerHTML = data.pastIllnesses;
        visit.visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
      }

      if (data.doctor === "Dentist") {
        visit.visit.querySelector(".full-name").innerHTML = data.fullName;
        visit.visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
        visit.visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
        visit.visit.querySelector(".date-of-previous-visit").innerHTML = data.dateOfPreviousVisit;
      }

      if (data.doctor === "Therapist") {
        visit.visit.querySelector(".full-name").innerHTML = data.fullName;
        visit.visit.querySelector(".age").innerHTML = data.age;
        visit.visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
        visit.visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
      }
    }
  }, {
    key: "removeVisit",
    value: function removeVisit() {
      var _this = this;

      new _request.default("delete", null, this.data.id).then(function (response) {
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
      this.visit.remove();

      if (this.container.children.length === 0) {
        this.noVisitsNotice = document.createElement("div");
        this.noVisitsNotice.classList.add("no-visits-notice");
        this.noVisitsNotice.innerText = "No items have been added yet.";
        this.container.append(this.noVisitsNotice);
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
      extraInfo.classList.add('extra-info');
      extraInfo.innerHTML = "\n        <p class=\"line-in-visit\">\u0412\u043E\u0437\u0440\u0430\u0441\u0442: <span class=\"regular-text age\">".concat(this.age, "</span></p>\n        <p class=\"line-in-visit\">\u0426\u0435\u043B\u044C \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text purpose-of-visit\">").concat(this.purposeOfVisit, "</span></p>\n        <p class=\"line-in-visit\">\u041E\u0431\u044B\u0447\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435: <span class=\"regular-text blood-pressure\">").concat(this.bloodPressure, "</span></p>\n        <p class=\"line-in-visit\">\u0418\u043D\u0434\u0435\u043A\u0441 \u043C\u0430\u0441\u0441\u044B \u0442\u0435\u043B\u0430: <span class=\"regular-text body-mass-index\">").concat(this.bodyMassIndex, "</span></p>\n        <p class=\"line-in-visit\">\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0435\u0447\u043D\u043E-\u0441\u043E\u0441\u0443\u0434\u0438\u0441\u0442\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B: <span class=\"regular-text past-diseases\">").concat(this.pastDiseases, "</span></p>\n        <p class=\"line-in-visit\">\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text short-description\">").concat(this.shortDiscriptionsOfVisit, "</span></p>\n        <p class=\"line-in-visit\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C: <span class=\"regular-text urgency\">").concat(this.urgency, "</span></p>\n        ");
      extraInfo.classList.add("hidden");
      this.visit.querySelector(".edit-panel").before(extraInfo);
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
      extraInfo.classList.add('extra-info');
      extraInfo.innerHTML = "\n        <p class=\"line-in-visit\">\u0426\u0435\u043B\u044C \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text purpose-of-visit\">".concat(this.purposeOfVisit, "</span></p>\n        <p class=\"line-in-visit\">\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text date-of-previous-visit\">").concat(this.dateOfPreviousVisit, "</span></p>\n        <p class=\"line-in-visit\">\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text short-description\">").concat(this.shortDiscriptionsOfVisit, "</span></p>\n        <p class=\"line-in-visit\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C: <span class=\"regular-text urgency\">").concat(this.urgency, "</span></p>\n        ");
      extraInfo.classList.add("hidden");
      this.visit.querySelector(".edit-panel").before(extraInfo);
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
      extraInfo.classList.add('extra-info');
      extraInfo.innerHTML = "\n        <p class=\"line-in-visit\">\u0412\u0440\u0437\u0440\u0430\u0441\u0442: <span class=\"regular-text age\">".concat(this.age, "</span></p>\n        <p class=\"line-in-visit\">\u0426\u0435\u043B\u044C \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text purpose-of-visit\">").concat(this.purposeOfVisit, "</span></p>\n        <p class=\"line-in-visit\">\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0437\u0438\u0442\u0430: <span class=\"regular-text short-description\">").concat(this.shortDiscriptionsOfVisit, "</span></p>\n        <p class=\"line-in-visit\">\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C: <span class=\"regular-text urgency\">").concat(this.urgency, "</span></p>\n        ");
      extraInfo.classList.add("hidden");
      this.visit.querySelector(".edit-panel").before(extraInfo);
    }
  }]);

  return VisitTherapist;
}(Visit);

exports.VisitTherapist = VisitTherapist;
},{"./request.js":"src/js/request.js","./modal.js":"src/js/modal.js","./drag.js":"src/js/drag.js"}],"src/js/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _visit = _interopRequireDefault(require("./visit.js"));

var _request = _interopRequireDefault(require("./request.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter = /*#__PURE__*/function () {
  function Filter() {
    _classCallCheck(this, Filter);

    this.searchContainer = document.querySelector(".filter-container");
    this.getVisitsData();
    this.createSearchInput();
    this.createUrgencySelect();
  }

  _createClass(Filter, [{
    key: "createSearchInput",
    value: function createSearchInput() {
      this.input = document.createElement('input');
      this.input.classList.add('filter-live-search');
      this.input.type = 'text';
      this.input.placeholder = 'id, ФИО, доктор';
      this.searchContainer.append(this.input);
    }
  }, {
    key: "createUrgencySelect",
    value: function createUrgencySelect() {
      var _this = this;

      var urgency = ['All', 'Regular', 'Priority', 'Urgent'];
      this.urgencySelect = document.createElement('select');
      var urgencyTitle = document.createElement('span');
      urgencyTitle.classList.add('filter_urgency-title');
      urgencyTitle.innerText = 'Выберите срочность посещения:';
      this.urgencySelect.classList.add('filter-select-urgency');
      urgency.forEach(function (el) {
        _this.selectOption = document.createElement('option');
        _this.selectOption.text = el;

        _this.urgencySelect.options.add(_this.selectOption);
      });
      this.searchContainer.append(urgencyTitle);
      this.searchContainer.append(this.urgencySelect);
    }
  }, {
    key: "getVisitsData",
    value: function getVisitsData() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        resolve(new _request.default("getAllVisits"));
      }).then(function (data) {
        _this2.filter(data);

        _this2.filterByUrgency(data);
      });
    }
  }, {
    key: "filter",
    value: function filter(allVisits) {
      this.input.addEventListener('input', function () {
        var visitsArray = [];
        var visitsContainer = document.querySelector(".visits");
        visitsContainer.innerHTML = "No data found";
        var inputedValue = this.value.trim();
        var inputedData = new RegExp(inputedValue, 'i');

        if (inputedValue !== '') {
          allVisits.forEach(function (el) {
            var inputedId = el.id.search(inputedData);
            var inputedName = el.fullName.search(inputedData);
            var inputedDoctor = el.doctor.search(inputedData);

            if (inputedId !== -1 || inputedName !== -1 || inputedDoctor !== -1) {
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
    key: "filterByUrgency",
    value: function filterByUrgency(allVisits) {
      var _this3 = this;

      this.urgencySelect.addEventListener('change', function (e) {
        _this3.input.value = '';
        e.preventDefault();
        e.stopPropagation();
        var filteredUrgencyArray = [];
        var visitsContainer = document.querySelector(".visits");
        visitsContainer.innerHTML = "";

        if (e.currentTarget.value === 'All') {
          _visit.default.renderAllVisits(allVisits);

          _this3.filter(allVisits);
        } else {
          allVisits.forEach(function (el) {
            if (el.urgency === e.currentTarget.value) {
              filteredUrgencyArray.push(el);
            }
          });

          _this3.filter(filteredUrgencyArray);

          _visit.default.renderAllVisits(filteredUrgencyArray);
        }
      });
    }
  }], [{
    key: "filterHide",
    value: function filterHide() {
      var filter = document.querySelector('.filter');
      filter.classList.add('hidden');
    }
  }, {
    key: "filterShow",
    value: function filterShow() {
      var filter = document.querySelector('.filter');
      filter.classList.remove('hidden');
      new Filter();
    }
  }]);

  return Filter;
}();

exports.default = Filter;
},{"./visit.js":"src/js/visit.js","./request.js":"src/js/request.js"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classes = require("./classes.js");

var _request = _interopRequireDefault(require("./request.js"));

var _visit = _interopRequireWildcard(require("./visit.js"));

var _filter = _interopRequireDefault(require("./filter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form(typeOfForm, visit, id, data) {
    _classCallCheck(this, Form);

    this.visit = visit;
    this.id = id;
    this.data = data;
    this.e = document.createElement("form");

    if (typeOfForm === "login") {
      this.e.classList = "login-form";
      this.mailInput = new _classes.Input("email");
      this.e.append(this.mailInput);
      this.passwordInput = new _classes.Input("password");
      this.e.append(this.passwordInput);
      this.loginButton = new _classes.Button("login");
      this.e.append(this.loginButton);
      this.errorNote = document.createElement("p");
      this.errorNote.className = "error-note";
      this.errorNote.innerText = "Неправильный e-mail или пароль";
      this.errorNote.style.visibility = "hidden";
      this.errorNote.style.opacity = "0";
      this.e.append(this.errorNote);
      this.e.addEventListener("submit", function (e) {
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
      return this.e;
    }

    if (typeOfForm === "createVisit") {
      this.e.classList = "createVisit-form";
      this.select = new _classes.Select("doctor");
      this.e.append(this.select);
      return this.e;
    }

    if (typeOfForm === "editVisit") {
      this.e.classList = "editVisit-form";

      if (this.data.doctor === "Cardiologist") {
        this.doctor = new _classes.InputFieldTitle("Doctor: ");
        this.doctor.insertAdjacentHTML("beforeend", "".concat(this.data.doctor));
        this.urgency = new _classes.InputFieldTitle("Urgency: ");
        this.urgency.insertAdjacentHTML("beforeend", "".concat(this.data.urgency));
        this.fullName = new _classes.Input("fullName");
        this.fullName.value = data.fullName;
        this.age = new _classes.Input("age");
        this.age.value = data.age;
        this.inputPurpose = new _classes.Input("purposeOfVisit");
        this.inputPurpose.value = data.purposeOfVisit;
        this.bloodPressure = new _classes.Input('bloodPressure');
        this.bloodPressure.value = data.bloodPressure;
        this.bodyMassIndex = new _classes.Input("bodyMassIndex");
        this.bodyMassIndex.value = data.bodyMassIndex;
        this.pastIllnesses = new _classes.Textarea("pastIllnesses");
        this.pastIllnesses.value = data.pastIllnesses;
        this.shortDescription = new _classes.Textarea("shortDescription");
        this.shortDescription.value = data.shortDescription;
        this.editVisitModalBtn = new _classes.Button("editVisitModalBtn");
        this.onEditVisitClickBound = this.onEditVisitClick.bind(this);
        this.e.addEventListener("submit", this.onEditVisitClickBound);
        this.e.append(this.doctor);
        this.e.append(this.urgency);
        this.e.append(new _classes.InputFieldTitle("Full name:"));
        this.e.append(this.fullName);
        this.e.append(new _classes.InputFieldTitle("Age:"));
        this.e.append(this.age);
        this.e.append(new _classes.InputFieldTitle("Purpose of visit:"));
        this.e.append(this.inputPurpose);
        this.e.append(new _classes.InputFieldTitle("Usual blood pressure:"));
        this.e.append(this.bloodPressure);
        this.e.append(new _classes.InputFieldTitle("Body mass index:"));
        this.e.append(this.bodyMassIndex);
        this.e.append(new _classes.InputFieldTitle("Past illnesses of cardiovascular system:"));
        this.e.append(this.pastIllnesses);
        this.e.append(new _classes.InputFieldTitle("Short description:"));
        this.e.append(this.shortDescription);
        this.e.append(this.editVisitModalBtn);
        return this.e;
      }

      if (this.data.doctor === "Dentist") {
        this.doctor = new _classes.InputFieldTitle("Doctor: ");
        this.doctor.insertAdjacentHTML("beforeend", "".concat(this.data.doctor));
        this.urgency = new _classes.InputFieldTitle("Urgency: ");
        this.urgency.insertAdjacentHTML("beforeend", "".concat(this.data.urgency));
        this.fullName = new _classes.Input("fullName");
        this.fullName.value = data.fullName;
        this.inputPurpose = new _classes.Input("purposeOfVisit");
        this.inputPurpose.value = data.purposeOfVisit;
        this.inputDateOfPrevVisit = new _classes.Input("dateOfPreviousVisit");
        this.inputDateOfPrevVisit.value = data.dateOfPreviousVisit;
        this.shortDescription = new _classes.Textarea("shortDescription");
        this.shortDescription.value = data.shortDescription;
        this.editVisitModalBtn = new _classes.Button("editVisitModalBtn");
        this.onEditVisitClickBound = this.onEditVisitClick.bind(this);
        this.e.addEventListener("submit", this.onEditVisitClickBound);
        this.e.append(this.doctor);
        this.e.append(this.urgency);
        this.e.append(new _classes.InputFieldTitle("Full name:"));
        this.e.append(this.fullName);
        this.e.append(new _classes.InputFieldTitle("Purpose of visit:"));
        this.e.append(this.inputPurpose);
        this.e.append(new _classes.InputFieldTitle("Date of previous visit:"));
        this.e.append(this.inputDateOfPrevVisit);
        this.e.append(new _classes.InputFieldTitle("Short description:"));
        this.e.append(this.shortDescription);
        this.e.append(this.editVisitModalBtn);
      }

      if (this.data.doctor === "Therapist") {
        this.doctor = new _classes.InputFieldTitle("Doctor: ");
        this.doctor.insertAdjacentHTML("beforeend", "".concat(this.data.doctor));
        this.urgency = new _classes.InputFieldTitle("Urgency: ");
        this.urgency.insertAdjacentHTML("beforeend", "".concat(this.data.urgency));
        this.fullName = new _classes.Input("fullName");
        this.fullName.value = data.fullName;
        this.age = new _classes.Input("age");
        this.age.value = data.age;
        this.inputPurpose = new _classes.Input("purposeOfVisit");
        this.inputPurpose.value = data.purposeOfVisit;
        this.shortDescription = new _classes.Textarea("shortDescription");
        this.shortDescription.value = data.shortDescription;
        this.editVisitModalBtn = new _classes.Button("editVisitModalBtn");
        this.onEditVisitClickBound = this.onEditVisitClick.bind(this);
        this.e.addEventListener("submit", this._onEditVisitClickBound);
        this.e.append(this.doctor);
        this.e.append(this.urgency);
        this.e.append(new _classes.InputFieldTitle("Full name:"));
        this.e.append(this.fullName);
        this.e.append(new _classes.InputFieldTitle("Age:"));
        this.e.append(this.age);
        this.e.append(new _classes.InputFieldTitle("Purpose of visit:"));
        this.e.append(this.inputPurpose);
        this.e.append(new _classes.InputFieldTitle("Short description:"));
        this.e.append(this.shortDescription);
        this.e.append(this.editVisitModalBtn);
      }

      return this.e;
    }

    if (typeOfForm === "doctorCardiologist") {
      this.e = document.querySelector(".createVisit-form");
      this.fullName = new _classes.Input("fullName");
      this.age = new _classes.Input("age");
      this.purposeOfVisit = new _classes.Input("purposeOfVisit");
      this.bloodPressure = new _classes.Input("bloodPressure");
      this.bodyMassIndex = new _classes.Input("bodyMassIndex");
      this.pastDiseases = new _classes.Textarea("pastDiseases");
      this.urgency = new _classes.Select("urgency");
      this.shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
      this.createVisitModalBtn = new _classes.Button("createVisitModalBtn");
      this.CreateVisitClickBound = this.onCreateVisit.bind(this);
      this.e.addEventListener("submit", this.CreateVisitClickBound);
      this.e.append(this.fullName);
      this.e.append(this.age);
      this.e.append(this.purposeOfVisit);
      this.e.append(this.bloodPressure);
      this.e.append(this.bodyMassIndex);
      this.e.append(this.pastDiseases);
      this.e.append(this.urgency);
      this.e.append(this.shortDiscriptionsOfVisit);
      this.e.append(this.createVisitModalBtn);
    }

    if (typeOfForm === "doctorDentist") {
      this.e = document.querySelector(".createVisit-form");
      this.fullName = new _classes.Input("fullName");
      this.purposeOfVisit = new _classes.Input("purposeOfVisit");
      this.urgency = new _classes.Select("urgency");
      this.dateOfPreviousVisit = new _classes.Input("dateOfPreviousVisit");
      this.shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
      this.createVisitModalBtn = new _classes.Button("createVisitModalBtn");
      this.CreateVisitClickBound = this.onCreateVisit.bind(this);
      this.e.addEventListener('submit', this.CreateVisitClickBound);
      this.e.append(this.fullName);
      this.e.append(this.purposeOfVisit);
      this.e.append(this.urgency);
      this.e.append(this.dateOfPreviousVisit);
      this.e.append(this.shortDiscriptionsOfVisit);
      this.e.append(this.createVisitModalBtn);
    }

    if (typeOfForm === "doctorTherapist") {
      this.e = document.querySelector(".createVisit-form");
      this.fullName = new _classes.Input("fullName");
      this.age = new _classes.Input("age");
      this.purposeOfVisit = new _classes.Input("purposeOfVisit");
      this.urgency = new _classes.Select("urgency");
      this.shortDiscriptionsOfVisit = new _classes.Textarea("shortDiscriptionsOfVisit");
      this.createVisitModalBtn = new _classes.Button("createVisitModalBtn");
      this.CreateVisitClickBound = this.onCreateVisit.bind(this);
      this.e.addEventListener("submit", this.CreateVisitClickBound);
      this.e.append(this.fullName);
      this.e.append(this.age);
      this.e.append(this.purposeOfVisit);
      this.e.append(this.urgency);
      this.e.append(this.shortDiscriptionsOfVisit);
      this.e.append(this.createVisitModalBtn);
    }
  }

  _createClass(Form, [{
    key: "onCreateVisit",
    value: function onCreateVisit(e) {
      e.preventDefault();
      var selectedDoctor = document.querySelector(".doctor-select").value;
      var selectedUrgency = document.querySelector(".urgency-select").value;
      var formData = new FormData(this.e);
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
      this.e.reset();
    }
  }, {
    key: "onEditVisitClick",
    value: function onEditVisitClick(e) {
      var _this = this;

      e.preventDefault();
      var formData = new FormData(this.e);
      formData = Object.fromEntries(formData);
      formData["doctor"] = this.data.doctor;
      formData["urgency"] = this.data.urgency;
      new _request.default("put", formData, this.id).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.visit.updateValue(data, _this.visit);
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(typeOfModal, visit, data, id) {
    _classCallCheck(this, Modal);

    this.modalContainer = document.createElement("div");
    this.modalContainer.classList.add("modal-dialog");
    this.modalContainer.tabinde = "-1";
    this.modalContent = document.createElement("div");
    this.modalContent.classList.add("modal-content");
    this.modalContainer.append(this.modalContent);
    this.modalHeader = document.createElement("div");
    this.modalHeader.classList.add("modal-header");
    this.modalContent.append(this.modalHeader);
    this.modalButtonClose = document.createElement("span");
    this.modalButtonClose.classList.add("btn-close");
    this.modalHeader.append(this.modalButtonClose);
    this.modalBody = document.createElement("div");
    this.modalBody.classList.add("modal-body");
    this.modalContent.append(this.modalBody);
    this.modalButtonClose = document.createElement("span");
    this.modalButtonClose.classList.add("btn-close");
    this.modalHeader.append(this.modalButtonClose);
    this.removeModalBound = this.removeModal.bind(this);
    this.modalButtonClose.addEventListener("click", this.removeModalBound); // this.onBackgroundClickBound = this.onBackgroundClick.bind(this);
    // this.modalContainer.addEventListener("mousedown", this.onBackgroundClickBound);

    if (typeOfModal === "login") {
      this.titleHeader = document.createElement("h5");
      this.modalHeader.append(this.titleHeader);
      this.titleHeader.innerHTML = "Введите e-mail и пароль";
      this.loginForm = new _form.default("login");
      this.modalBody.append(this.loginForm);
    }

    if (typeOfModal === "createVisit") {
      this.titleHeader = document.createElement("h5");
      this.modalHeader.append(this.titleHeader);
      this.titleHeader.innerHTML = "Заполните данные о посещении";
      this.createVisitForm = new _form.default("createVisit");
      this.modalBody.append(this.createVisitForm);
    }

    if (typeOfModal === "editVisit") {
      this.titleHeader = document.createElement("h5");
      this.modalHeader.append(this.titleHeader);
      this.titleHeader.innerHTML = "Измените информацию о визите";
      this.editVisitForm = new _form.default("editVisit", visit, id, data);
      this.modalBody.append(this.editVisitForm);
    }

    document.body.prepend(this.modalContainer);
    this.modalContainer.classList.add("active");
  } // onBackgroundClick(evt) {
  //     let clickedItem = evt.target;
  //     if (clickedItem === this.modalContent) {
  //         this.removeModal();
  //         this.modalContainer.removeEventListener("click",this.onBackgroundClickBound);
  //     }
  // }


  _createClass(Modal, [{
    key: "removeModal",
    value: function removeModal() {
      this.modalContainer.remove();
      this.modalButtonClose.removeEventListener("click", this.removeModalBound);
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
  var signIn = document.createElement("button");
  signIn.className = "sign-in-btn btn btn-primary";
  signIn.innerHTML = "Войти";
  header.append(signIn);
  var createVisit = document.createElement("button");
  createVisit.className = "create-visit-btn btn btn-primary";
  createVisit.style.display = "none";
  createVisit.innerHTML = "Создать визит";
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
},{"./modal.js":"src/js/modal.js","./request.js":"src/js/request.js","./visit.js":"src/js/visit.js","./filter.js":"src/js/filter.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49483" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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