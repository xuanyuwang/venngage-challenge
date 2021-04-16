/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body #page {\n  width: 500px;\n  height: 500px;\n  top: 100px;\n  margin: auto;\n  background-color: bisque;\n  position: relative;\n}\nbody #page svg#verticalLine, body #page svg#horizontalLine {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\nbody #page svg#verticalLine.hide, body #page svg#horizontalLine.hide {\n  visibility: hidden;\n}\nbody #page svg#verticalLine line, body #page svg#horizontalLine line {\n  stroke: black;\n  stroke-width: 0.01;\n  stroke-dasharray: 0.05;\n}\nbody #page .container {\n  position: absolute;\n  box-sizing: border-box;\n}\nbody #page .container.dragging {\n  border: chocolate 1px dotted;\n  opacity: 0.4;\n}", "",{"version":3,"sources":["webpack://./index.scss"],"names":[],"mappings":"AACE;EACD,YAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,wBAAA;EACA,kBAAA;AAAD;AAEC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;AAAF;AACE;EACC,kBAAA;AACH;AACI;EACA,aAAA;EACC,kBAAA;EACA,sBAAA;AACL;AAEC;EACE,kBAAA;EACA,sBAAA;AAAH;AACG;EACD,4BAAA;EACA,YAAA;AACF","sourcesContent":["body {\n  #page {\n\twidth: 500px;\n\theight: 500px;\n\ttop: 100px;\n\tmargin: auto;\n\tbackground-color: bisque;\n\tposition: relative;\n\n\tsvg#verticalLine, svg#horizontalLine {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\t&.hide{\n\t\t\tvisibility: hidden;\n\t\t}\n\t  \tline {\n\t\t \tstroke: black;\n\t\t  \tstroke-width: 0.01;\n\t\t  \tstroke-dasharray: 0.05;\n\t  \t}\n\t}\n\t.container {\n\t  position: absolute;\n\t  box-sizing: border-box;\n\t  &.dragging {\n\t\tborder: chocolate 1px dotted;\n\t\topacity: 0.4;\n\t  }\n\t}\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./index.scss");




var Circle = /*#__PURE__*/function () {
  function Circle(id, size) {
    var initTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var initLeft = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'cyan';

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Circle);

    this.onMouseDownHandlerBind = this.onMouseDownHandler.bind(this);
    this.onMouseUpHandlerBind = this.onMouseUpHandler.bind(this);
    this.element = document.createElement('div');
    this.element.className = 'container';
    this.element.id = id;
    this.element.style.width = "".concat(size, "px");
    this.element.style.height = "".concat(size, "px");
    this.element.style.top = "".concat(initTop, "px");
    this.element.style.left = "".concat(initLeft, "px");
    this.element.addEventListener('mousedown', this.onMouseDownHandlerBind, false);
    this.element.addEventListener('dragstart', function () {
      return false;
    }, false);
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute('viewBox', "0 0 10 10");
    this.svg.style.width = '100%';
    this.svg.style.height = '100%';
    this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.circle.style['cx'] = '5';
    this.circle.style['cy'] = '5';
    this.circle.style['r'] = '5';
    this.circle.style['fill'] = fillColor;
    this.element.appendChild(this.svg);
    this.svg.appendChild(this.circle);
    this.coords = {};
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Circle, [{
    key: "updateCoords",
    value: function updateCoords() {
      var _this$element = this.element,
          left = _this$element.offsetLeft,
          width = _this$element.offsetWidth,
          top = _this$element.offsetTop,
          height = _this$element.offsetHeight;
      this.coords = {
        top: top,
        left: left,
        centerX: left + width / 2,
        centerY: top + height / 2,
        right: left + width,
        bottom: top + height
      };
    }
  }, {
    key: "setPage",
    value: function setPage(page) {
      this.page = page;
      this.updateCoords();
    }
  }, {
    key: "onMouseUpHandler",
    value: function onMouseUpHandler(event) {
      this.element.classList.remove('dragging');
      this.element.removeEventListener('mouseup', this.onMouseUpHandlerBind, false);
      this.page.handleDrop(this.element);
      this.updateCoords();
    }
  }, {
    key: "onMouseDownHandler",
    value: function onMouseDownHandler(event) {
      this.element.classList.add('dragging');
      this.element.addEventListener('mouseup', this.onMouseUpHandlerBind, false);
      this.page.handleDragging(this, event);
    }
  }]);

  return Circle;
}();

var Page = /*#__PURE__*/function () {
  function Page() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Page);

    this.onMouseMoveHandlerBind = this.onMouseMoveHandler.bind(this);
    this.element = document.createElement('div');
    this.element.id = 'page';
    this.moveData = {};
    this.shapes = [];
    this.pageCenterX = null;
    this.pageCenterY = null;
    this.centerLineXSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.centerLineXSvg.id = 'verticalLine';
    this.centerLineXSvg.classList.add('hide');
    this.centerLineXSvg.setAttribute('viewBox', "0 0 10 10");
    this.lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    this.lineX.setAttribute('x1', '5');
    this.lineX.setAttribute('y1', '0');
    this.lineX.setAttribute('x2', '5');
    this.lineX.setAttribute('y2', '10');
    this.lineX.setAttribute('stroke', 'black');
    this.centerLineXSvg.appendChild(this.lineX);
    this.element.appendChild(this.centerLineXSvg);
    this.centerLineYSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.centerLineYSvg.id = 'horizontalLine';
    this.centerLineYSvg.classList.add('hide');
    this.centerLineYSvg.setAttribute('viewBox', "0 0 10 10");
    this.lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
    this.lineY.setAttribute('x1', '0');
    this.lineY.setAttribute('y1', '5');
    this.lineY.setAttribute('x2', '10');
    this.lineY.setAttribute('y2', '5');
    this.lineY.setAttribute('stroke', 'black');
    this.centerLineYSvg.appendChild(this.lineY);
    this.element.appendChild(this.centerLineYSvg);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Page, [{
    key: "pushBack",
    value: function pushBack(target, newTop, newLeft) {
      var targetWidth = target.offsetWidth,
          targetHeight = target.offsetHeight;
      var newRight = newLeft + targetWidth;
      var newBottom = newTop + targetHeight;
      var _this$element2 = this.element,
          pageWidth = _this$element2.offsetWidth,
          pageHeight = _this$element2.offsetHeight;
      var correctedLeft, correctedTop; // X axis

      if (newLeft < 0) {
        correctedLeft = 0;
      } else if (newRight > pageWidth) {
        correctedLeft = pageWidth - targetWidth;
      } else {
        correctedLeft = newLeft;
      } // Y axis


      if (newTop < 0) {
        correctedTop = 0;
      } else if (newBottom > pageHeight) {
        correctedTop = pageHeight - targetHeight;
      } else {
        correctedTop = newTop;
      }

      return {
        correctedTop: correctedTop,
        correctedLeft: correctedLeft
      };
    }
  }, {
    key: "addShape",
    value: function addShape(shape) {
      this.element.appendChild(shape.element);
      this.shapes.push(shape);
      shape.setPage(this);
    }
  }, {
    key: "isAlignWithPage",
    value: function isAlignWithPage() {
      var object = this.moveData.object;
      var _object$coords = object.coords,
          centerX = _object$coords.centerX,
          centerY = _object$coords.centerY;
      var pageAlignX, pageAlignY;

      if (Math.abs(this.pageCenterX - centerX) < 2) {
        this.centerLineXSvg.classList.remove('hide');
        pageAlignX = true;
      } else {
        this.centerLineXSvg.classList.add('hide');
        pageAlignX = false;
      }

      if (Math.abs(this.pageCenterY - centerY) < 2) {
        this.centerLineYSvg.classList.remove('hide');
        pageAlignY = true;
      } else {
        this.centerLineYSvg.classList.add('hide');
        pageAlignY = false;
      }

      return {
        pageAlignX: pageAlignX,
        pageAlignY: pageAlignY
      };
    }
  }, {
    key: "onMouseMoveHandler",
    value: function onMouseMoveHandler(event) {
      var _this$moveData = this.moveData,
          object = _this$moveData.object,
          target = _this$moveData.target,
          startTop = _this$moveData.startTop,
          startLeft = _this$moveData.startLeft,
          startX = _this$moveData.startX,
          startY = _this$moveData.startY;
      var deltaY = event.pageY - startY;
      var deltaX = event.pageX - startX;
      var newTop = startTop + deltaY;
      var newLeft = startLeft + deltaX;

      var _this$pushBack = this.pushBack(target, newTop, newLeft),
          correctedTop = _this$pushBack.correctedTop,
          correctedLeft = _this$pushBack.correctedLeft;

      target.style.top = "".concat(correctedTop, "px");
      target.style.left = "".concat(correctedLeft, "px");
      object.updateCoords();
      this.moveData.pageAlignment = this.isAlignWithPage();
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(target) {
      // snap to center
      var _this$moveData$pageAl = this.moveData.pageAlignment,
          pageAlignX = _this$moveData$pageAl.pageAlignX,
          pageAlignY = _this$moveData$pageAl.pageAlignY;

      if (pageAlignX) {
        target.style.left = "".concat(this.pageCenterX - target.offsetWidth / 2, "px");
      }

      if (pageAlignY) {
        target.style.top = "".concat(this.pageCenterY - target.offsetHeight / 2, "px");
      }

      this.moveData = {};
      this.element.removeEventListener('mousemove', this.onMouseMoveHandlerBind);
    }
  }, {
    key: "handleDragging",
    value: function handleDragging(target, mouseEvent) {
      this.element.removeChild(target.element);
      this.element.appendChild(target.element);
      this.pageCenterX = this.element.offsetWidth / 2;
      this.pageCenterY = this.element.offsetHeight / 2;
      var element = target.element;
      this.moveData = {
        object: target,
        target: element,
        startTop: element.offsetTop,
        startLeft: element.offsetLeft,
        startX: mouseEvent.pageX,
        startY: mouseEvent.pageY,
        pageAlignment: {}
      };
      this.element.addEventListener('mousemove', this.onMouseMoveHandlerBind);
    }
  }]);

  return Page;
}();

var Scene = function Scene() {
  var firstCircle = new Circle('first', 100, 0, 0, 'red');
  var secondCircle = new Circle('second', 150, 0, 100, 'yellow');
  var thirdCircle = new Circle('third', 200, 0, 250, 'blue');
  var circles = [firstCircle, secondCircle, thirdCircle];
  var page = new Page();
  circles.forEach(function (circle) {
    page.addShape(circle);
  });
  document.body.appendChild(page.element);
};

Scene();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS8uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9pbmRleC5zY3NzPzMwYjMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJpZCIsInNpemUiLCJpbml0VG9wIiwiaW5pdExlZnQiLCJmaWxsQ29sb3IiLCJvbk1vdXNlRG93bkhhbmRsZXJCaW5kIiwib25Nb3VzZURvd25IYW5kbGVyIiwiYmluZCIsIm9uTW91c2VVcEhhbmRsZXJCaW5kIiwib25Nb3VzZVVwSGFuZGxlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJjaXJjbGUiLCJhcHBlbmRDaGlsZCIsImNvb3JkcyIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImNlbnRlclgiLCJjZW50ZXJZIiwicmlnaHQiLCJib3R0b20iLCJwYWdlIiwidXBkYXRlQ29vcmRzIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlRHJvcCIsImFkZCIsImhhbmRsZURyYWdnaW5nIiwiUGFnZSIsIm9uTW91c2VNb3ZlSGFuZGxlckJpbmQiLCJvbk1vdXNlTW92ZUhhbmRsZXIiLCJtb3ZlRGF0YSIsInNoYXBlcyIsInBhZ2VDZW50ZXJYIiwicGFnZUNlbnRlclkiLCJjZW50ZXJMaW5lWFN2ZyIsImxpbmVYIiwiY2VudGVyTGluZVlTdmciLCJsaW5lWSIsInRhcmdldCIsIm5ld1RvcCIsIm5ld0xlZnQiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsIm5ld1JpZ2h0IiwibmV3Qm90dG9tIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImNvcnJlY3RlZExlZnQiLCJjb3JyZWN0ZWRUb3AiLCJzaGFwZSIsInB1c2giLCJzZXRQYWdlIiwib2JqZWN0IiwicGFnZUFsaWduWCIsInBhZ2VBbGlnblkiLCJNYXRoIiwiYWJzIiwic3RhcnRUb3AiLCJzdGFydExlZnQiLCJzdGFydFgiLCJzdGFydFkiLCJkZWx0YVkiLCJwYWdlWSIsImRlbHRhWCIsInBhZ2VYIiwicHVzaEJhY2siLCJwYWdlQWxpZ25tZW50IiwiaXNBbGlnbldpdGhQYWdlIiwibW91c2VFdmVudCIsInJlbW92ZUNoaWxkIiwiU2NlbmUiLCJmaXJzdENpcmNsZSIsInNlY29uZENpcmNsZSIsInRoaXJkQ2lyY2xlIiwiY2lyY2xlcyIsImZvckVhY2giLCJhZGRTaGFwZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ3FIO0FBQzdCO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsaUJBQWlCLGtCQUFrQixlQUFlLGlCQUFpQiw2QkFBNkIsdUJBQXVCLEdBQUcsOERBQThELHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcsd0VBQXdFLHVCQUF1QixHQUFHLHdFQUF3RSxrQkFBa0IsdUJBQXVCLDJCQUEyQixHQUFHLHlCQUF5Qix1QkFBdUIsMkJBQTJCLEdBQUcsa0NBQWtDLGlDQUFpQyxpQkFBaUIsR0FBRyxPQUFPLDZFQUE2RSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSwrQkFBK0IsV0FBVyxpQkFBaUIsa0JBQWtCLGVBQWUsaUJBQWlCLDZCQUE2Qix1QkFBdUIsNENB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ZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSAjcGFnZSB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjcGFnZSBzdmcjdmVydGljYWxMaW5lLCBib2R5ICNwYWdlIHN2ZyNob3Jpem9udGFsTGluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSAjcGFnZSBzdmcjdmVydGljYWxMaW5lLmhpZGUsIGJvZHkgI3BhZ2Ugc3ZnI2hvcml6b250YWxMaW5lLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5ib2R5ICNwYWdlIHN2ZyN2ZXJ0aWNhbExpbmUgbGluZSwgYm9keSAjcGFnZSBzdmcjaG9yaXpvbnRhbExpbmUgbGluZSB7XFxuICBzdHJva2U6IGJsYWNrO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjAxO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMC4wNTtcXG59XFxuYm9keSAjcGFnZSAuY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkgI3BhZ2UgLmNvbnRhaW5lci5kcmFnZ2luZyB7XFxuICBib3JkZXI6IGNob2NvbGF0ZSAxcHggZG90dGVkO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0QsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFBRDtBQUVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGO0FBQ0U7RUFDQyxrQkFBQTtBQUNIO0FBQ0k7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtBQUNMO0FBRUM7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQUg7QUFDRztFQUNELDRCQUFBO0VBQ0EsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgI3BhZ2Uge1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcblxcdHRvcDogMTAwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFx0c3ZnI3ZlcnRpY2FsTGluZSwgc3ZnI2hvcml6b250YWxMaW5lIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdCYuaGlkZXtcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0XFx0fVxcblxcdCAgXFx0bGluZSB7XFxuXFx0XFx0IFxcdHN0cm9rZTogYmxhY2s7XFxuXFx0XFx0ICBcXHRzdHJva2Utd2lkdGg6IDAuMDE7XFxuXFx0XFx0ICBcXHRzdHJva2UtZGFzaGFycmF5OiAwLjA1O1xcblxcdCAgXFx0fVxcblxcdH1cXG5cXHQuY29udGFpbmVyIHtcXG5cXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHQgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAmLmRyYWdnaW5nIHtcXG5cXHRcXHRib3JkZXI6IGNob2NvbGF0ZSAxcHggZG90dGVkO1xcblxcdFxcdG9wYWNpdHk6IDAuNDtcXG5cXHQgIH1cXG5cXHR9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBzaXplLCBpbml0VG9wID0gMCwgaW5pdExlZnQgPSAwLCBmaWxsQ29sb3IgPSAnY3lhbicpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bkhhbmRsZXJCaW5kID0gdGhpcy5vbk1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBIYW5kbGVyQmluZCA9IHRoaXMub25Nb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7aW5pdFRvcH1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7aW5pdExlZnR9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bkhhbmRsZXJCaW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTAgMTBgKTtcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuc3ZnLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuICAgICAgICB0aGlzLmNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICAgICAgICB0aGlzLmNpcmNsZS5zdHlsZVsnY3gnXSA9ICc1JztcbiAgICAgICAgdGhpcy5jaXJjbGUuc3R5bGVbJ2N5J10gPSAnNSc7XG4gICAgICAgIHRoaXMuY2lyY2xlLnN0eWxlWydyJ10gPSAnNSc7XG4gICAgICAgIHRoaXMuY2lyY2xlLnN0eWxlWydmaWxsJ10gPSBmaWxsQ29sb3I7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnKTtcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGhpcy5jaXJjbGUpO1xuXG4gICAgICAgIHRoaXMuY29vcmRzID0ge307XG4gICAgfVxuXG4gICAgdXBkYXRlQ29vcmRzKCl7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0TGVmdDogbGVmdCwgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRUb3A6IHRvcCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgY2VudGVyWDogbGVmdCArIHdpZHRoIC8gMixcbiAgICAgICAgICAgIGNlbnRlclk6IHRvcCArIGhlaWdodCAvIDIsXG4gICAgICAgICAgICByaWdodDogbGVmdCArIHdpZHRoLFxuICAgICAgICAgICAgYm90dG9tOiB0b3AgKyBoZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRQYWdlKHBhZ2Upe1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvb3JkcygpO1xuICAgIH1cblxuICAgIG9uTW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXBIYW5kbGVyQmluZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBhZ2UuaGFuZGxlRHJvcCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvb3JkcygpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcEhhbmRsZXJCaW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGFnZS5oYW5kbGVEcmFnZ2luZyh0aGlzLCBldmVudCk7XG4gICAgfVxufVxuXG5jbGFzcyBQYWdle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVIYW5kbGVyQmluZCA9IHRoaXMub25Nb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSAncGFnZSc7XG4gICAgICAgIHRoaXMubW92ZURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYWdlQ2VudGVyWCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFnZUNlbnRlclkgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2VudGVyTGluZVhTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWFN2Zy5pZCA9ICd2ZXJ0aWNhbExpbmUnO1xuICAgICAgICB0aGlzLmNlbnRlckxpbmVYU3ZnLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWFN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDEwIDEwYCk7XG4gICAgICAgIHRoaXMubGluZVggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImxpbmVcIik7XG4gICAgICAgIHRoaXMubGluZVguc2V0QXR0cmlidXRlKCd4MScsICc1Jyk7XG4gICAgICAgIHRoaXMubGluZVguc2V0QXR0cmlidXRlKCd5MScsICcwJyk7XG4gICAgICAgIHRoaXMubGluZVguc2V0QXR0cmlidXRlKCd4MicsICc1Jyk7XG4gICAgICAgIHRoaXMubGluZVguc2V0QXR0cmlidXRlKCd5MicsICcxMCcpO1xuICAgICAgICB0aGlzLmxpbmVYLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgIHRoaXMuY2VudGVyTGluZVhTdmcuYXBwZW5kQ2hpbGQodGhpcy5saW5lWCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNlbnRlckxpbmVYU3ZnKTtcblxuICAgICAgICB0aGlzLmNlbnRlckxpbmVZU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAgIHRoaXMuY2VudGVyTGluZVlTdmcuaWQgPSAnaG9yaXpvbnRhbExpbmUnO1xuICAgICAgICB0aGlzLmNlbnRlckxpbmVZU3ZnLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWVN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDEwIDEwYCk7XG4gICAgICAgIHRoaXMubGluZVkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImxpbmVcIik7XG4gICAgICAgIHRoaXMubGluZVkuc2V0QXR0cmlidXRlKCd4MScsICcwJyk7XG4gICAgICAgIHRoaXMubGluZVkuc2V0QXR0cmlidXRlKCd5MScsICc1Jyk7XG4gICAgICAgIHRoaXMubGluZVkuc2V0QXR0cmlidXRlKCd4MicsICcxMCcpO1xuICAgICAgICB0aGlzLmxpbmVZLnNldEF0dHJpYnV0ZSgneTInLCAnNScpO1xuICAgICAgICB0aGlzLmxpbmVZLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgIHRoaXMuY2VudGVyTGluZVlTdmcuYXBwZW5kQ2hpbGQodGhpcy5saW5lWSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNlbnRlckxpbmVZU3ZnKTtcbiAgICB9XG4gICAgcHVzaEJhY2sodGFyZ2V0LCBuZXdUb3AsIG5ld0xlZnQpe1xuICAgICAgICBjb25zdCB7IG9mZnNldFdpZHRoOiB0YXJnZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0OiB0YXJnZXRIZWlnaHQgfSA9IHRhcmdldDtcbiAgICAgICAgY29uc3QgbmV3UmlnaHQgPSBuZXdMZWZ0ICsgdGFyZ2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IG5ld0JvdHRvbSA9IG5ld1RvcCArIHRhcmdldEhlaWdodDsgXG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHBhZ2VXaWR0aCwgb2Zmc2V0SGVpZ2h0OiBwYWdlSGVpZ2h0IH0gPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgICAgbGV0IGNvcnJlY3RlZExlZnQsIGNvcnJlY3RlZFRvcDtcbiAgICAgICAgLy8gWCBheGlzXG4gICAgICAgIGlmKG5ld0xlZnQgPCAwKXtcbiAgICAgICAgICAgIGNvcnJlY3RlZExlZnQgPSAwO1xuICAgICAgICB9ZWxzZSBpZihuZXdSaWdodCA+IHBhZ2VXaWR0aCl7XG4gICAgICAgICAgICBjb3JyZWN0ZWRMZWZ0ID0gcGFnZVdpZHRoIC0gdGFyZ2V0V2lkdGg7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29ycmVjdGVkTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBZIGF4aXNcbiAgICAgICAgaWYobmV3VG9wIDwgMCl7XG4gICAgICAgICAgICBjb3JyZWN0ZWRUb3AgPSAwO1xuICAgICAgICB9ZWxzZSBpZihuZXdCb3R0b20gPiBwYWdlSGVpZ2h0KXtcbiAgICAgICAgICAgIGNvcnJlY3RlZFRvcCA9IHBhZ2VIZWlnaHQgLSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29ycmVjdGVkVG9wID0gbmV3VG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvcnJlY3RlZFRvcCxcbiAgICAgICAgICAgIGNvcnJlY3RlZExlZnRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYWRkU2hhcGUoc2hhcGUpe1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc2hhcGUuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgICAgICBzaGFwZS5zZXRQYWdlKHRoaXMpO1xuICAgIH1cbiAgICBpc0FsaWduV2l0aFBhZ2UoKXtcbiAgICAgICAgY29uc3QgeyBvYmplY3QgfSA9IHRoaXMubW92ZURhdGE7XG4gICAgICAgIGNvbnN0IHsgY2VudGVyWCwgY2VudGVyWSB9ID0gb2JqZWN0LmNvb3JkcztcbiAgICAgICAgbGV0IHBhZ2VBbGlnblgsIHBhZ2VBbGlnblk7XG5cbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5wYWdlQ2VudGVyWCAtIGNlbnRlclgpIDwgMil7XG4gICAgICAgICAgICB0aGlzLmNlbnRlckxpbmVYU3ZnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHBhZ2VBbGlnblggPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyTGluZVhTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgcGFnZUFsaWduWCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5wYWdlQ2VudGVyWSAtIGNlbnRlclkpIDwgMil7XG4gICAgICAgICAgICB0aGlzLmNlbnRlckxpbmVZU3ZnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHBhZ2VBbGlnblkgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyTGluZVlTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgcGFnZUFsaWduWSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VBbGlnblgsXG4gICAgICAgICAgICBwYWdlQWxpZ25ZXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uTW91c2VNb3ZlSGFuZGxlcihldmVudCl7XG4gICAgICAgIGNvbnN0IHsgb2JqZWN0LCB0YXJnZXQsIHN0YXJ0VG9wLCBzdGFydExlZnQsIHN0YXJ0WCwgc3RhcnRZIH0gPSB0aGlzLm1vdmVEYXRhO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBldmVudC5wYWdlWSAtIHN0YXJ0WTtcbiAgICAgICAgY29uc3QgZGVsdGFYID0gZXZlbnQucGFnZVggLSBzdGFydFg7XG4gICAgICAgIGNvbnN0IG5ld1RvcCA9IHN0YXJ0VG9wICsgZGVsdGFZO1xuICAgICAgICBjb25zdCBuZXdMZWZ0ID0gc3RhcnRMZWZ0ICsgZGVsdGFYO1xuICAgICAgICBjb25zdCB7IGNvcnJlY3RlZFRvcCwgY29ycmVjdGVkTGVmdCB9ID0gdGhpcy5wdXNoQmFjayh0YXJnZXQsIG5ld1RvcCwgbmV3TGVmdCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHtjb3JyZWN0ZWRUb3B9cHhgO1xuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IGAke2NvcnJlY3RlZExlZnR9cHhgO1xuICAgICAgICBvYmplY3QudXBkYXRlQ29vcmRzKCk7XG4gICAgICAgIHRoaXMubW92ZURhdGEucGFnZUFsaWdubWVudCA9IHRoaXMuaXNBbGlnbldpdGhQYWdlKCk7XG4gICAgfVxuICAgIGhhbmRsZURyb3AodGFyZ2V0KXtcbiAgICAgICAgLy8gc25hcCB0byBjZW50ZXJcbiAgICAgICAgY29uc3Qge3BhZ2VBbGlnblgsIHBhZ2VBbGlnbll9ID0gdGhpcy5tb3ZlRGF0YS5wYWdlQWxpZ25tZW50O1xuICAgICAgICBpZihwYWdlQWxpZ25YKXtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wYWdlQ2VudGVyWCAtIHRhcmdldC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgICB9XG4gICAgICAgIGlmKHBhZ2VBbGlnblkpe1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGAke3RoaXMucGFnZUNlbnRlclkgLSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVEYXRhID0ge307XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlSGFuZGxlckJpbmQpO1xuICAgIH1cbiAgICBoYW5kbGVEcmFnZ2luZyh0YXJnZXQsIG1vdXNlRXZlbnQpe1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0LmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFyZ2V0LmVsZW1lbnQpO1xuICAgICAgICB0aGlzLnBhZ2VDZW50ZXJYID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5wYWdlQ2VudGVyWSA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5tb3ZlRGF0YSA9IHtcbiAgICAgICAgICAgIG9iamVjdDogdGFyZ2V0LFxuICAgICAgICAgICAgdGFyZ2V0OiBlbGVtZW50LFxuICAgICAgICAgICAgc3RhcnRUb3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgc3RhcnRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBzdGFydFg6IG1vdXNlRXZlbnQucGFnZVgsXG4gICAgICAgICAgICBzdGFydFk6IG1vdXNlRXZlbnQucGFnZVksXG4gICAgICAgICAgICBwYWdlQWxpZ25tZW50OiB7fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZUhhbmRsZXJCaW5kKTtcbiAgICB9XG59XG5cbmNvbnN0IFNjZW5lID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0Q2lyY2xlID0gbmV3IENpcmNsZSgnZmlyc3QnLCAxMDAsIDAsIDAsICdyZWQnKTtcbiAgICBjb25zdCBzZWNvbmRDaXJjbGUgPSBuZXcgQ2lyY2xlKCdzZWNvbmQnLCAxNTAsIDAsIDEwMCwgJ3llbGxvdycpO1xuICAgIGNvbnN0IHRoaXJkQ2lyY2xlID0gbmV3IENpcmNsZSgndGhpcmQnLCAyMDAsIDAsIDI1MCwgJ2JsdWUnKTtcbiAgICBjb25zdCBjaXJjbGVzID0gW2ZpcnN0Q2lyY2xlLCBzZWNvbmRDaXJjbGUsIHRoaXJkQ2lyY2xlXVxuXG4gICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKCk7XG4gICAgY2lyY2xlcy5mb3JFYWNoKChjaXJjbGUpID0+IHtcbiAgICAgICAgcGFnZS5hZGRTaGFwZShjaXJjbGUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZS5lbGVtZW50KTtcbn07XG5cblNjZW5lKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==