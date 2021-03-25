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
exports.Input = exports.Button = exports.Textarea = void 0;

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
    this.e.classList = "login-btn btn btn-primary";
    this.e.setAttribute("type", "submit");
    this.e.innerText = "Войти";
    return this.e;
  }

  if (typeOfButton === "createVisitModalBtn") {
    this.e.classList.add = "create-visit-modal-btn";
    this.e.setAttribute("type", "submit");
    this.e.innerText = "Создать";
    return this.e;
  }

  if (typeOfButton === "editVisitModalBtn") {
    this.e.classList = "edit-visit-modal-btn";
    this.e.setAttribute("type", "submit");
    this.e.innerText = "Редактировать";
    return this.e;
  }

  if (typeOfButton === "signIn") {
    this.e.classList = "btn_sign_in";
    this.e.innerHTML = "Sign in";
    return this.e;
  }
};

exports.Button = Button;

var Input = function Input(typeOfInput) {
  _classCallCheck(this, Input);

  this.e = document.createElement('input');

  if (typeOfInput === "email") {
    this.e.setAttribute('type', 'text');
    this.e.setAttribute('name', 'email');
    this.e.setAttribute('id', 'email');
    this.e.classList = 'email-input';
    this.e.setAttribute("required", "required");
    this.inputLabel = document.createElement("label");
    this.inputLabel.classList = "input-label";
    this.inputLabel.innerText = "E-mail";
    this.inputLabel.append(this.e);
    return this.inputLabel;
  }

  if (typeOfInput === "password") {
    this.e.setAttribute('type', 'password');
    this.e.setAttribute('name', 'password');
    this.e.setAttribute('id', 'password');
    this.e.classList.add('password-input');
    this.e.setAttribute("required", "required");
    this.inputLabel = document.createElement("label");
    this.inputLabel.classList.add("input-label");
    this.inputLabel.innerText = "Password";
    this.inputLabel.append(this.e);
    return this.inputLabel;
  }
};

exports.Input = Input;
},{}],"src/js/request.js":[function(require,module,exports) {
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
      }).then(function (response) {
        return response;
      }); // .then(token => console.log(token))
    }
  }]);

  return Request;
}();

exports.default = Request;
},{}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classes = require("./classes.js");

var _request = _interopRequireDefault(require("./request.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function Form(typeOfForm, visit, id, data) {
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
    this.errorNote.innerText = "Wrong e-mail or password.";
    this.errorNote.style.visibility = 'hidden';
    this.errorNote.style.opacity = "0";
    this.e.append(this.errorNote);
    this.e.addEventListener("submit", function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      formData = Object.fromEntries(formData);
      new _request.default("login", formData, null).then(function (data) {
        console.log(data);

        if (!data.ok) {
          var errorNote = document.querySelector(".error-note");
          errorNote.style.visibility = 'visible';
          errorNote.style.opacity = "1";
          throw new Error("Wrong email or password");
        } else {
          var signIn = document.querySelector('.sign-in-btn');
          signIn.style.display = "none";
          var createVisit = document.querySelector('.create-visit-btn');
          createVisit.style.display = "block";
          sessionStorage.setItem("token", data.token);
          var modal = document.querySelector(".modal-dialog");
          modal.remove();
        }

        return data;
      }).catch(function (error) {
        return console.error(error);
      });
      this.reset();
    });
    return this.e;
  }
};

exports.default = Form;
},{"./classes.js":"src/js/classes.js","./request.js":"src/js/request.js"}],"src/js/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _form = _interopRequireDefault(require("./form.js"));

var _classes = require("./classes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function Modal(typeOfModal, visit, data, id) {
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
  this.modalButtonClose = document.createElement("button");
  this.modalButtonClose.classList.add("btn-close");
  this.modalButtonClose.type = "button";
  this.modalButtonClose.setAttribute("data-bs-dismiss", "modal");
  this.modalButtonClose.setAttribute("aria-label", "Close");
  this.modalHeader.append(this.modalButtonClose);
  this.modalBody = document.createElement("div");
  this.modalBody.classList.add("modal-body");
  this.modalContent.append(this.modalBody);
  this.modalFooter = document.createElement("div");
  this.modalFooter.classList.add("modal-footer");
  this.modalContent.append(this.modalFooter);

  if (typeOfModal === "login") {
    this.modalHeader.innerHTML = "Login";
    this.loginForm = new _form.default("login");
    this.modalBody.append(this.loginForm); // this.loginButton = new Button("login");
    // this.modalFooter.append(this.loginButton);
  }

  document.body.prepend(this.modalContainer);
  this.modalContainer.classList.add("active");
};

exports.default = Modal;
},{"./form.js":"src/js/form.js","./classes.js":"src/js/classes.js"}],"src/js/main.js":[function(require,module,exports) {
"use strict";

var _modal = _interopRequireDefault(require("./modal.js"));

var _request = _interopRequireDefault(require("./request.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Button from "./classes.js"
function createContent() {
  var header = document.createElement("header");
  header.className = "header";
  document.body.prepend(header);
  var a = document.createElement("a");
  a.className = "header__logo_link";
  a.innerHTML = "CARDS";
  a.href = "#";
  header.append(a); // let signIn = new Button("signIn");
  // header.append(signIn);

  var signIn = document.createElement("button");
  signIn.className = "sign-in-btn btn btn-primary";
  signIn.innerHTML = "SIGN IN";
  header.append(signIn);
  var createVisit = document.createElement("button");
  createVisit.className = "create-visit-btn btn btn-primary";
  createVisit.style.display = "none";
  createVisit.innerHTML = "CREATE VISIT";
  header.append(createVisit);
  var main = document.createElement("main");
  header.after(main);
  var sectionFilter = document.createElement("section");
  sectionFilter.className = "filter";
  main.append(sectionFilter);
  var divFilter = document.createElement("div");
  divFilter.className = "filter__container";
  sectionFilter.append(divFilter);
  var sectionVisits = document.createElement("section");
  sectionVisits.className = "visits";
  main.append(sectionVisits);
  var divVisits = document.createElement("div");
  divVisits.className = "no-visits-notice";
  divVisits.innerHTML = "No items have been added yet.";
  sectionVisits.append(divVisits);
}

window.onload = function () {
  createContent();
  var signIn = document.querySelector('.sign-in-btn');
  signIn.addEventListener('click', function () {
    return new _modal.default("login");
  });
};
},{"./modal.js":"src/js/modal.js","./request.js":"src/js/request.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49366" + '/');

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