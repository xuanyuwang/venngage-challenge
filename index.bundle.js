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
___CSS_LOADER_EXPORT___.push([module.id, "body #page {\n  width: 700px;\n  height: 500px;\n  top: 100px;\n  margin: auto;\n  background-color: bisque;\n  position: relative;\n}\nbody #page .container {\n  position: absolute;\n  box-sizing: border-box;\n}\nbody #page .container.dragging {\n  border: chocolate 1px dotted;\n  opacity: 0.4;\n}", "",{"version":3,"sources":["webpack://./index.scss"],"names":[],"mappings":"AACE;EACE,YAAA;EACA,aAAA;EACH,UAAA;EACG,YAAA;EACA,wBAAA;EACH,kBAAA;AAAD;AAEC;EACC,kBAAA;EACA,sBAAA;AAAF;AACE;EACC,4BAAA;EACA,YAAA;AACH","sourcesContent":["body {\n  #page {\n    width: 700px;\n    height: 500px;\n\ttop: 100px;\n    margin: auto;\n    background-color: bisque;\n\tposition: relative;\n\n\t.container {\n\t\tposition: absolute;\n\t\tbox-sizing: border-box;\n\t\t&.dragging {\n\t\t\tborder: chocolate 1px dotted;\n\t\t\topacity: 0.4;\n\t\t}\n\t}\n  }\n}\n"],"sourceRoot":""}]);
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
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Circle, [{
    key: "setPage",
    value: function setPage(page) {
      this.page = page;
    }
  }, {
    key: "onMouseUpHandler",
    value: function onMouseUpHandler(event) {
      this.element.classList.remove('dragging');
      this.element.removeEventListener('mouseup', this.onMouseUpHandlerBind, false);
      this.page.handleDrop(this.element);
    }
  }, {
    key: "onMouseDownHandler",
    value: function onMouseDownHandler(event) {
      this.element.classList.add('dragging');
      this.element.addEventListener('mouseup', this.onMouseUpHandlerBind, false);
      this.page.handleDragging(this.element, event);
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
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Page, [{
    key: "pushBack",
    value: function pushBack(target, newTop, newLeft) {
      var targetWidth = target.offsetWidth,
          targetHeight = target.offsetHeight;
      var newRight = newLeft + targetWidth;
      var newBottom = newTop + targetHeight;
      var _this$element = this.element,
          pageWidth = _this$element.offsetWidth,
          pageHeight = _this$element.offsetHeight;
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
    key: "onMouseMoveHandler",
    value: function onMouseMoveHandler(event) {
      var _this$moveData = this.moveData,
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
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(target) {
      this.moveData = {};
      this.element.removeEventListener('mousemove', this.onMouseMoveHandlerBind);
    }
  }, {
    key: "handleDragging",
    value: function handleDragging(target, mouseEvent) {
      this.moveData = {
        target: target,
        startTop: target.offsetTop,
        startLeft: target.offsetLeft,
        startX: mouseEvent.pageX,
        startY: mouseEvent.pageY
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS8uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9pbmRleC5zY3NzPzMwYjMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJpZCIsInNpemUiLCJpbml0VG9wIiwiaW5pdExlZnQiLCJmaWxsQ29sb3IiLCJvbk1vdXNlRG93bkhhbmRsZXJCaW5kIiwib25Nb3VzZURvd25IYW5kbGVyIiwiYmluZCIsIm9uTW91c2VVcEhhbmRsZXJCaW5kIiwib25Nb3VzZVVwSGFuZGxlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJjaXJjbGUiLCJhcHBlbmRDaGlsZCIsInBhZ2UiLCJldmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVEcm9wIiwiYWRkIiwiaGFuZGxlRHJhZ2dpbmciLCJQYWdlIiwib25Nb3VzZU1vdmVIYW5kbGVyQmluZCIsIm9uTW91c2VNb3ZlSGFuZGxlciIsIm1vdmVEYXRhIiwic2hhcGVzIiwidGFyZ2V0IiwibmV3VG9wIiwibmV3TGVmdCIsInRhcmdldFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJuZXdSaWdodCIsIm5ld0JvdHRvbSIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJjb3JyZWN0ZWRMZWZ0IiwiY29ycmVjdGVkVG9wIiwic2hhcGUiLCJwdXNoIiwic2V0UGFnZSIsInN0YXJ0VG9wIiwic3RhcnRMZWZ0Iiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFZIiwicGFnZVkiLCJkZWx0YVgiLCJwYWdlWCIsInB1c2hCYWNrIiwibW91c2VFdmVudCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJTY2VuZSIsImZpcnN0Q2lyY2xlIiwic2Vjb25kQ2lyY2xlIiwidGhpcmRDaXJj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V0FBS2pELE9BQUwsQ0FBYVMsZ0JBQWIsQ0FBOEIsV0FBOUIsRUFBMkMsS0FBS2Usc0JBQWhEO0FBQ0g7Ozs7OztBQUdMLElBQU1nQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLE1BQU1DLFdBQVcsR0FBRyxJQUFJcEUsTUFBSixDQUFXLE9BQVgsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsS0FBL0IsQ0FBcEI7QUFDQSxNQUFNcUUsWUFBWSxHQUFHLElBQUlyRSxNQUFKLENBQVcsUUFBWCxFQUFxQixHQUFyQixFQUEwQixDQUExQixFQUE2QixHQUE3QixFQUFrQyxRQUFsQyxDQUFyQjtBQUNBLE1BQU1zRSxXQUFXLEdBQUcsSUFBSXRFLE1BQUosQ0FBVyxPQUFYLEVBQW9CLEdBQXBCLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDLE1BQWpDLENBQXBCO0FBQ0EsTUFBTXVFLE9BQU8sR0FBRyxDQUFDSCxXQUFELEVBQWNDLFlBQWQsRUFBNEJDLFdBQTVCLENBQWhCO0FBRUEsTUFBTTVDLElBQUksR0FBRyxJQUFJUSxJQUFKLEVBQWI7QUFDQXFDLFNBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFDaEQsTUFBRCxFQUFZO0FBQ3hCRSxRQUFJLENBQUMrQyxRQUFMLENBQWNqRCxNQUFkO0FBQ0gsR0FGRDtBQUdBWixVQUFRLENBQUM4RCxJQUFULENBQWNqRCxXQUFkLENBQTBCQyxJQUFJLENBQUNmLE9BQS9CO0FBQ0gsQ0FYRDs7QUFhQXdELEtBQUssRyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5ICNwYWdlIHtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNwYWdlIC5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSAjcGFnZSAuY29udGFpbmVyLmRyYWdnaW5nIHtcXG4gIGJvcmRlcjogY2hvY29sYXRlIDFweCBkb3R0ZWQ7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNILFVBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDSCxrQkFBQTtBQUFEO0FBRUM7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0FBQUY7QUFDRTtFQUNDLDRCQUFBO0VBQ0EsWUFBQTtBQUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgI3BhZ2Uge1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuXFx0dG9wOiAxMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdFxcdCYuZHJhZ2dpbmcge1xcblxcdFxcdFxcdGJvcmRlcjogY2hvY29sYXRlIDFweCBkb3R0ZWQ7XFxuXFx0XFx0XFx0b3BhY2l0eTogMC40O1xcblxcdFxcdH1cXG5cXHR9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBzaXplLCBpbml0VG9wID0gMCwgaW5pdExlZnQgPSAwLCBmaWxsQ29sb3IgPSAnY3lhbicpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bkhhbmRsZXJCaW5kID0gdGhpcy5vbk1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBIYW5kbGVyQmluZCA9IHRoaXMub25Nb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7aW5pdFRvcH1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7aW5pdExlZnR9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bkhhbmRsZXJCaW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTAgMTBgKTtcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuc3ZnLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuICAgICAgICB0aGlzLmNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICAgICAgICB0aGlzLmNpcmNsZS5zdHlsZVsnY3gnXSA9ICc1JztcbiAgICAgICAgdGhpcy5jaXJjbGUuc3R5bGVbJ2N5J10gPSAnNSc7XG4gICAgICAgIHRoaXMuY2lyY2xlLnN0eWxlWydyJ10gPSAnNSc7XG4gICAgICAgIHRoaXMuY2lyY2xlLnN0eWxlWydmaWxsJ10gPSBmaWxsQ29sb3I7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnKTtcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGhpcy5jaXJjbGUpO1xuICAgIH1cblxuICAgIHNldFBhZ2UocGFnZSl7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwSGFuZGxlcihldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcEhhbmRsZXJCaW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGFnZS5oYW5kbGVEcm9wKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwSGFuZGxlckJpbmQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wYWdlLmhhbmRsZURyYWdnaW5nKHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgIH1cbn1cblxuY2xhc3MgUGFnZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlSGFuZGxlckJpbmQgPSB0aGlzLm9uTW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gJ3BhZ2UnO1xuICAgICAgICB0aGlzLm1vdmVEYXRhID0ge307XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgfVxuICAgIHB1c2hCYWNrKHRhcmdldCwgbmV3VG9wLCBuZXdMZWZ0KXtcbiAgICAgICAgY29uc3QgeyBvZmZzZXRXaWR0aDogdGFyZ2V0V2lkdGgsIG9mZnNldEhlaWdodDogdGFyZ2V0SGVpZ2h0IH0gPSB0YXJnZXQ7XG4gICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gbmV3TGVmdCArIHRhcmdldFdpZHRoO1xuICAgICAgICBjb25zdCBuZXdCb3R0b20gPSBuZXdUb3AgKyB0YXJnZXRIZWlnaHQ7IFxuICAgICAgICBjb25zdCB7IG9mZnNldFdpZHRoOiBwYWdlV2lkdGgsIG9mZnNldEhlaWdodDogcGFnZUhlaWdodCB9ID0gdGhpcy5lbGVtZW50O1xuXG4gICAgICAgIGxldCBjb3JyZWN0ZWRMZWZ0LCBjb3JyZWN0ZWRUb3A7XG4gICAgICAgIC8vIFggYXhpc1xuICAgICAgICBpZihuZXdMZWZ0IDwgMCl7XG4gICAgICAgICAgICBjb3JyZWN0ZWRMZWZ0ID0gMDtcbiAgICAgICAgfWVsc2UgaWYobmV3UmlnaHQgPiBwYWdlV2lkdGgpe1xuICAgICAgICAgICAgY29ycmVjdGVkTGVmdCA9IHBhZ2VXaWR0aCAtIHRhcmdldFdpZHRoO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvcnJlY3RlZExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gWSBheGlzXG4gICAgICAgIGlmKG5ld1RvcCA8IDApe1xuICAgICAgICAgICAgY29ycmVjdGVkVG9wID0gMDtcbiAgICAgICAgfWVsc2UgaWYobmV3Qm90dG9tID4gcGFnZUhlaWdodCl7XG4gICAgICAgICAgICBjb3JyZWN0ZWRUb3AgPSBwYWdlSGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvcnJlY3RlZFRvcCA9IG5ld1RvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb3JyZWN0ZWRUb3AsXG4gICAgICAgICAgICBjb3JyZWN0ZWRMZWZ0XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFkZFNoYXBlKHNoYXBlKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNoYXBlLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgICAgc2hhcGUuc2V0UGFnZSh0aGlzKTtcbiAgICB9XG4gICAgb25Nb3VzZU1vdmVIYW5kbGVyKGV2ZW50KXtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQsIHN0YXJ0VG9wLCBzdGFydExlZnQsIHN0YXJ0WCwgc3RhcnRZIH0gPSB0aGlzLm1vdmVEYXRhO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBldmVudC5wYWdlWSAtIHN0YXJ0WTtcbiAgICAgICAgY29uc3QgZGVsdGFYID0gZXZlbnQucGFnZVggLSBzdGFydFg7XG4gICAgICAgIGNvbnN0IG5ld1RvcCA9IHN0YXJ0VG9wICsgZGVsdGFZO1xuICAgICAgICBjb25zdCBuZXdMZWZ0ID0gc3RhcnRMZWZ0ICsgZGVsdGFYO1xuICAgICAgICBjb25zdCB7IGNvcnJlY3RlZFRvcCwgY29ycmVjdGVkTGVmdCB9ID0gdGhpcy5wdXNoQmFjayh0YXJnZXQsIG5ld1RvcCwgbmV3TGVmdCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHtjb3JyZWN0ZWRUb3B9cHhgO1xuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IGAke2NvcnJlY3RlZExlZnR9cHhgO1xuICAgIH1cbiAgICBoYW5kbGVEcm9wKHRhcmdldCl7XG4gICAgICAgIHRoaXMubW92ZURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmVIYW5kbGVyQmluZCk7XG4gICAgfVxuICAgIGhhbmRsZURyYWdnaW5nKHRhcmdldCwgbW91c2VFdmVudCl7XG4gICAgICAgIHRoaXMubW92ZURhdGEgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIHN0YXJ0VG9wOiB0YXJnZXQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgc3RhcnRMZWZ0OiB0YXJnZXQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHN0YXJ0WDogbW91c2VFdmVudC5wYWdlWCxcbiAgICAgICAgICAgIHN0YXJ0WTogbW91c2VFdmVudC5wYWdlWVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZUhhbmRsZXJCaW5kKTtcbiAgICB9XG59XG5cbmNvbnN0IFNjZW5lID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0Q2lyY2xlID0gbmV3IENpcmNsZSgnZmlyc3QnLCAxMDAsIDAsIDAsICdyZWQnKTtcbiAgICBjb25zdCBzZWNvbmRDaXJjbGUgPSBuZXcgQ2lyY2xlKCdzZWNvbmQnLCAxNTAsIDAsIDEwMCwgJ3llbGxvdycpO1xuICAgIGNvbnN0IHRoaXJkQ2lyY2xlID0gbmV3IENpcmNsZSgndGhpcmQnLCAyMDAsIDAsIDI1MCwgJ2JsdWUnKTtcbiAgICBjb25zdCBjaXJjbGVzID0gW2ZpcnN0Q2lyY2xlLCBzZWNvbmRDaXJjbGUsIHRoaXJkQ2lyY2xlXVxuXG4gICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKCk7XG4gICAgY2lyY2xlcy5mb3JFYWNoKChjaXJjbGUpID0+IHtcbiAgICAgICAgcGFnZS5hZGRTaGFwZShjaXJjbGUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZS5lbGVtZW50KTtcbn07XG5cblNjZW5lKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==