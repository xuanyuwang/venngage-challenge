/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
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
___CSS_LOADER_EXPORT___.push([module.id, "body #page {\n  width: 500px;\n  height: 500px;\n  top: 100px;\n  margin: auto;\n  background-color: bisque;\n  position: relative;\n}\nbody #page svg#verticalLine, body #page svg#horizontalLine {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\nbody #page svg#verticalLine.hide, body #page svg#horizontalLine.hide {\n  visibility: hidden;\n}\nbody #page svg#verticalLine line, body #page svg#horizontalLine line {\n  stroke: black;\n  stroke-width: 0.01;\n  stroke-dasharray: 0.05;\n}\nbody #page .vertical {\n  position: absolute;\n  width: 1px;\n  border-left-width: 1px;\n  border-left-color: black;\n  border-left-style: dashed;\n}\nbody #page .horizontal {\n  position: absolute;\n  height: 1px;\n  border-top-width: 1px;\n  border-top-color: black;\n  border-top-style: dashed;\n}\nbody #page .container {\n  position: absolute;\n  box-sizing: border-box;\n}\nbody #page .container.dragging {\n  border: chocolate 1px dotted;\n  opacity: 0.4;\n}", "",{"version":3,"sources":["webpack://./index.scss"],"names":[],"mappings":"AACE;EACD,YAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,wBAAA;EACA,kBAAA;AAAD;AAEC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;AAAF;AACE;EACC,kBAAA;AACH;AACI;EACA,aAAA;EACC,kBAAA;EACA,sBAAA;AACL;AAGC;EACC,kBAAA;EACA,UAAA;EACA,sBAAA;EACA,wBAAA;EACA,yBAAA;AADF;AAGC;EACC,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,uBAAA;EACA,wBAAA;AADF;AAGC;EACE,kBAAA;EACA,sBAAA;AADH;AAEG;EACD,4BAAA;EACA,YAAA;AAAF","sourcesContent":["body {\n  #page {\n\twidth: 500px;\n\theight: 500px;\n\ttop: 100px;\n\tmargin: auto;\n\tbackground-color: bisque;\n\tposition: relative;\n\n\tsvg#verticalLine, svg#horizontalLine {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\t&.hide{\n\t\t\tvisibility: hidden;\n\t\t}\n\t  \tline {\n\t\t \tstroke: black;\n\t\t  \tstroke-width: 0.01;\n\t\t  \tstroke-dasharray: 0.05;\n\t  \t}\n\t}\n\n\t.vertical {\n\t\tposition: absolute;\n\t\twidth: 1px;\n\t\tborder-left-width: 1px;\n\t\tborder-left-color: black;\n\t\tborder-left-style: dashed;\n\t}\n\t.horizontal {\n\t\tposition: absolute;\n\t\theight: 1px;\n\t\tborder-top-width: 1px;\n\t\tborder-top-color: black;\n\t\tborder-top-style: dashed;\n\t}\n\t.container {\n\t  position: absolute;\n\t  box-sizing: border-box;\n\t  &.dragging {\n\t\tborder: chocolate 1px dotted;\n\t\topacity: 0.4;\n\t  }\n\t}\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./index.scss");





var Circle = /*#__PURE__*/function () {
  function Circle(id, size) {
    var initTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var initLeft = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'cyan';

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Circle);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Circle, [{
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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Page);

    this.onMouseMoveHandlerBind = this.onMouseMoveHandler.bind(this);
    this.element = document.createElement('div');
    this.element.id = 'page';
    this.moveData = {};
    this.shapes = [];
    this.pageCenterX = null;
    this.pageCenterY = null;
    this.verticalAlignmentLine = null;
    this.horizontalAlignmentLine = null;
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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Page, [{
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
    key: "cleanAlignmentLines",
    value: function cleanAlignmentLines() {
      var existingVerticalLines = document.getElementsByClassName('vertical');

      for (var i = 0; i < existingVerticalLines.length; i++) {
        existingVerticalLines[i].remove();
      }

      var existingHorizontalLines = document.getElementsByClassName('horizontal');

      for (var _i = 0; _i < existingHorizontalLines.length; _i++) {
        existingHorizontalLines[_i].remove();
      }
    }
  }, {
    key: "isAlignWithCloestShape",
    value: function isAlignWithCloestShape() {
      var object = this.moveData.object;
      var _object$coords2 = object.coords,
          centerX = _object$coords2.centerX,
          centerY = _object$coords2.centerY;
      var minDistance = Infinity;
      var closestObject;
      this.shapes.forEach(function (shape) {
        var _shape$coords = shape.coords,
            x = _shape$coords.centerX,
            y = _shape$coords.centerY;
        var distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

        if (distance < minDistance && shape.element.id != object.element.id) {
          closestObject = shape;
          minDistance = distance;
        }
      });

      if (!closestObject) {
        return;
      }

      var alignment = {};

      if (Math.abs(closestObject.coords.left - object.coords.left) < 2 || Math.abs(closestObject.coords.left - object.coords.right) < 2 || Math.abs(closestObject.coords.left - object.coords.centerX) < 2) {
        alignment.type = 'vertical';
        alignment.pos = closestObject.coords.left;
        alignment.points = [closestObject.coords.top, closestObject.coords.bottom, object.coords.top, object.coords.bottom];
      } else if (Math.abs(closestObject.coords.right - object.coords.right) < 2 || Math.abs(closestObject.coords.right - object.coords.left) < 2 || Math.abs(closestObject.coords.right - object.coords.centerX) < 2) {
        alignment.type = 'vertical';
        alignment.pos = closestObject.coords.right;
        alignment.points = [closestObject.coords.top, closestObject.coords.bottom, object.coords.top, object.coords.bottom];
      } else if (Math.abs(closestObject.coords.centerX - object.coords.centerX) < 2 || Math.abs(closestObject.coords.centerX - object.coords.left) < 2 || Math.abs(closestObject.coords.centerX - object.coords.right) < 2) {
        alignment.type = 'vertical';
        alignment.pos = closestObject.coords.centerX;
        alignment.points = [closestObject.coords.top, closestObject.coords.bottom, object.coords.top, object.coords.bottom];
      } else if (Math.abs(closestObject.coords.centerY - object.coords.centerY) < 2 || Math.abs(closestObject.coords.centerY - object.coords.bottom) < 2 || Math.abs(closestObject.coords.centerY - object.coords.top) < 2) {
        alignment.type = 'horizontal';
        alignment.pos = closestObject.coords.centerY;
        alignment.params = [closestObject.coords.left, closestObject.coords.right, object.coords.left, object.coords.right];
      }

      this.cleanAlignmentLines();

      if (alignment.type == 'vertical') {
        var start = Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(alignment.points));
        var end = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(alignment.points));
        this.verticalAlignmentLine = document.createElement('div');
        this.verticalAlignmentLine.classList.add('vertical');
        this.verticalAlignmentLine.style.height = "".concat(end - start, "px");
        this.verticalAlignmentLine.style.top = "".concat(start, "px");
        this.verticalAlignmentLine.style.left = "".concat(alignment.pos, "px");
        this.element.appendChild(this.verticalAlignmentLine);
      } else if (alignment.type == 'horizontal') {
        var _start = Math.min(alignment.points);

        var _end = Math.max(alignment.points);

        this.horizontalAlignmentLine = document.createElement('div');
        this.horizontalAlignmentLine.classList.add('horizontal');
        this.horizontalAlignmentLine.style.width = "".concat(_end - _start, "px");
        this.horizontalAlignmentLine.style.top = "".concat(alignment.pos, "px");
        this.horizontalAlignmentLine.style.left = "".concat(_start, "px");
        this.element.appendChild(this.horizontalAlignmentLine);
      } else {
        this.verticalAlignmentLine = null;
        this.horizontalAlignmentLine = null;
      }
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
      this.isAlignWithCloestShape();
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
      this.cleanAlignmentLines();
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
  document.body.appendChild(page.element);
  circles.forEach(function (circle) {
    page.addShape(circle);
  });
};

Scene();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS8uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9pbmRleC5zY3NzPzMwYjMiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Zlbm5nYWdlLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmVubmdhZ2UtY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92ZW5uZ2FnZS1jaGFsbGVuZ2UvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJpZCIsInNpemUiLCJpbml0VG9wIiwiaW5pdExlZnQiLCJmaWxsQ29sb3IiLCJvbk1vdXNlRG93bkhhbmRsZXJCaW5kIiwib25Nb3VzZURvd25IYW5kbGVyIiwiYmluZCIsIm9uTW91c2VVcEhhbmRsZXJCaW5kIiwib25Nb3VzZVVwSGFuZGxlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJjaXJjbGUiLCJhcHBlbmRDaGlsZCIsImNvb3JkcyIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImNlbnRlclgiLCJjZW50ZXJZIiwicmlnaHQiLCJib3R0b20iLCJwYWdlIiwidXBkYXRlQ29vcmRzIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlRHJvcCIsImFkZCIsImhhbmRsZURyYWdnaW5nIiwiUGFnZSIsIm9uTW91c2VNb3ZlSGFuZGxlckJpbmQiLCJvbk1vdXNlTW92ZUhhbmRsZXIiLCJtb3ZlRGF0YSIsInNoYXBlcyIsInBhZ2VDZW50ZXJYIiwicGFnZUNlbnRlclkiLCJ2ZXJ0aWNhbEFsaWdubWVudExpbmUiLCJob3Jpem9udGFsQWxpZ25tZW50TGluZSIsImNlbnRlckxpbmVYU3ZnIiwibGluZVgiLCJjZW50ZXJMaW5lWVN2ZyIsImxpbmVZIiwidGFyZ2V0IiwibmV3VG9wIiwibmV3TGVmdCIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0IiwibmV3UmlnaHQiLCJuZXdCb3R0b20iLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiY29ycmVjdGVkTGVmdCIsImNvcnJlY3RlZFRvcCIsInNoYXBlIiwicHVzaCIsInNldFBhZ2UiLCJvYmplY3QiLCJwYWdlQWxpZ25YIiwicGFnZUFsaWduWSIsIk1hdGgiLCJhYnMiLCJleGlzdGluZ1ZlcnRpY2FsTGluZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImV4aXN0aW5nSG9yaXpvbnRhbExpbmVzIiwibWluRGlzdGFuY2UiLCJJbmZpbml0eSIsImNsb3Nlc3RPYmplY3QiLCJmb3JFYWNoIiwieCIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJwb3ciLCJhbGlnbm1lbnQiLCJ0eXBlIiwicG9zIiwicG9pbnRzIiwicGFyYW1zIiwiY2xlYW5BbGlnbm1lbnRMaW5lcyIsInN0YXJ0IiwibWluIiwiZW5kIiwibWF4Iiwic3RhcnRUb3AiLCJzdGFydExlZnQiLCJzdGFydFgiLCJzdGFydFkiLCJkZWx0YVkiLCJwYWdlWSIsImRlbHRhWCIsInBhZ2VYIiwicHVzaEJhY2siLCJwYWdlQWxpZ25tZW50IiwiaXNBbGlnbldpdGhQYWdlIiwiaXNBbGlnbldpdGhDbG9lc3RTaGFwZSIsIm1vdXNlRXZlbnQiLCJyZW1vdmVDaGlsZCIsIlNjZW5lIiwiZmlyc3RDaXJjbGUiLCJzZWNvbmRDaXJjbGUiLCJ0aGlyZENpcmNsZSIsImNpcmNsZXMiLCJib2R5IiwiYWRkU2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUnFEO0FBQ3RDO0FBQ2YsaUNBQWlDLDZEQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdUQ7QUFDSjtBQUNzQjtBQUNsQjtBQUN4QztBQUNmLFNBQVMsOERBQWlCLFNBQVMsNERBQWUsU0FBUyx1RUFBMEIsU0FBUyw4REFBaUI7QUFDL0csQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsNkRBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiw2REFBZ0I7QUFDdEcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDcUg7QUFDN0I7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxpQkFBaUIsa0JB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LElBQVQsQ0FBYzlGLFdBQWQsQ0FBMEJVLElBQUksQ0FBQ3hCLE9BQS9CO0FBQ0EyRyxTQUFPLENBQUNsQyxPQUFSLENBQWdCLFVBQUM1RCxNQUFELEVBQVk7QUFDeEJXLFFBQUksQ0FBQ3FGLFFBQUwsQ0FBY2hHLE1BQWQ7QUFDSCxHQUZEO0FBR0gsQ0FYRDs7QUFhQTBGLEtBQUssRyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgI3BhZ2Uge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHRvcDogMTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI3BhZ2Ugc3ZnI3ZlcnRpY2FsTGluZSwgYm9keSAjcGFnZSBzdmcjaG9yaXpvbnRhbExpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkgI3BhZ2Ugc3ZnI3ZlcnRpY2FsTGluZS5oaWRlLCBib2R5ICNwYWdlIHN2ZyNob3Jpem9udGFsTGluZS5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuYm9keSAjcGFnZSBzdmcjdmVydGljYWxMaW5lIGxpbmUsIGJvZHkgI3BhZ2Ugc3ZnI2hvcml6b250YWxMaW5lIGxpbmUge1xcbiAgc3Ryb2tlOiBibGFjaztcXG4gIHN0cm9rZS13aWR0aDogMC4wMTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDAuMDU7XFxufVxcbmJvZHkgI3BhZ2UgLnZlcnRpY2FsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGRhc2hlZDtcXG59XFxuYm9keSAjcGFnZSAuaG9yaXpvbnRhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gIGJvcmRlci10b3AtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkO1xcbn1cXG5ib2R5ICNwYWdlIC5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSAjcGFnZSAuY29udGFpbmVyLmRyYWdnaW5nIHtcXG4gIGJvcmRlcjogY2hvY29sYXRlIDFweCBkb3R0ZWQ7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRCxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUFEO0FBRUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUNDLGtCQUFBO0FBQ0g7QUFDSTtFQUNBLGFBQUE7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0FBQ0w7QUFHQztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQURGO0FBR0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFERjtBQUdDO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQURIO0FBRUc7RUFDRCw0QkFBQTtFQUNBLFlBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICNwYWdlIHtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0aGVpZ2h0OiA1MDBweDtcXG5cXHR0b3A6IDEwMHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdHN2ZyN2ZXJ0aWNhbExpbmUsIHN2ZyNob3Jpem9udGFsTGluZSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHQmLmhpZGV7XFxuXFx0XFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdFxcdH1cXG5cXHQgIFxcdGxpbmUge1xcblxcdFxcdCBcXHRzdHJva2U6IGJsYWNrO1xcblxcdFxcdCAgXFx0c3Ryb2tlLXdpZHRoOiAwLjAxO1xcblxcdFxcdCAgXFx0c3Ryb2tlLWRhc2hhcnJheTogMC4wNTtcXG5cXHQgIFxcdH1cXG5cXHR9XFxuXFxuXFx0LnZlcnRpY2FsIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0d2lkdGg6IDFweDtcXG5cXHRcXHRib3JkZXItbGVmdC13aWR0aDogMXB4O1xcblxcdFxcdGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcXG5cXHRcXHRib3JkZXItbGVmdC1zdHlsZTogZGFzaGVkO1xcblxcdH1cXG5cXHQuaG9yaXpvbnRhbCB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGhlaWdodDogMXB4O1xcblxcdFxcdGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG5cXHRcXHRib3JkZXItdG9wLWNvbG9yOiBibGFjaztcXG5cXHRcXHRib3JkZXItdG9wLXN0eWxlOiBkYXNoZWQ7XFxuXFx0fVxcblxcdC5jb250YWluZXIge1xcblxcdCAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdCAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICYuZHJhZ2dpbmcge1xcblxcdFxcdGJvcmRlcjogY2hvY29sYXRlIDFweCBkb3R0ZWQ7XFxuXFx0XFx0b3BhY2l0eTogMC40O1xcblxcdCAgfVxcblxcdH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHNpemUsIGluaXRUb3AgPSAwLCBpbml0TGVmdCA9IDAsIGZpbGxDb2xvciA9ICdjeWFuJykge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duSGFuZGxlckJpbmQgPSB0aGlzLm9uTW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcEhhbmRsZXJCaW5kID0gdGhpcy5vbk1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHtpbml0VG9wfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtpbml0TGVmdH1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duSGFuZGxlckJpbmQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxMCAxMGApO1xuICAgICAgICB0aGlzLnN2Zy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXG4gICAgICAgIHRoaXMuY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gICAgICAgIHRoaXMuY2lyY2xlLnN0eWxlWydjeCddID0gJzUnO1xuICAgICAgICB0aGlzLmNpcmNsZS5zdHlsZVsnY3knXSA9ICc1JztcbiAgICAgICAgdGhpcy5jaXJjbGUuc3R5bGVbJ3InXSA9ICc1JztcbiAgICAgICAgdGhpcy5jaXJjbGUuc3R5bGVbJ2ZpbGwnXSA9IGZpbGxDb2xvcjtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLmNpcmNsZSk7XG5cbiAgICAgICAgdGhpcy5jb29yZHMgPSB7fTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb29yZHMoKXtcbiAgICAgICAgY29uc3QgeyBvZmZzZXRMZWZ0OiBsZWZ0LCBvZmZzZXRXaWR0aDogd2lkdGgsIG9mZnNldFRvcDogdG9wLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBjZW50ZXJYOiBsZWZ0ICsgd2lkdGggLyAyLFxuICAgICAgICAgICAgY2VudGVyWTogdG9wICsgaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHJpZ2h0OiBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgICBib3R0b206IHRvcCArIGhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFBhZ2UocGFnZSl7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMudXBkYXRlQ29vcmRzKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwSGFuZGxlcihldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcEhhbmRsZXJCaW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGFnZS5oYW5kbGVEcm9wKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29vcmRzKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwSGFuZGxlckJpbmQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wYWdlLmhhbmRsZURyYWdnaW5nKHRoaXMsIGV2ZW50KTtcbiAgICB9XG59XG5cbmNsYXNzIFBhZ2V7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZUhhbmRsZXJCaW5kID0gdGhpcy5vbk1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9ICdwYWdlJztcbiAgICAgICAgdGhpcy5tb3ZlRGF0YSA9IHt9O1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhZ2VDZW50ZXJYID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYWdlQ2VudGVyWSA9IG51bGw7XG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnRMaW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50TGluZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgICAgICB0aGlzLmNlbnRlckxpbmVYU3ZnLmlkID0gJ3ZlcnRpY2FsTGluZSc7XG4gICAgICAgIHRoaXMuY2VudGVyTGluZVhTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB0aGlzLmNlbnRlckxpbmVYU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTAgMTBgKTtcbiAgICAgICAgdGhpcy5saW5lWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwibGluZVwiKTtcbiAgICAgICAgdGhpcy5saW5lWC5zZXRBdHRyaWJ1dGUoJ3gxJywgJzUnKTtcbiAgICAgICAgdGhpcy5saW5lWC5zZXRBdHRyaWJ1dGUoJ3kxJywgJzAnKTtcbiAgICAgICAgdGhpcy5saW5lWC5zZXRBdHRyaWJ1dGUoJ3gyJywgJzUnKTtcbiAgICAgICAgdGhpcy5saW5lWC5zZXRBdHRyaWJ1dGUoJ3kyJywgJzEwJyk7XG4gICAgICAgIHRoaXMubGluZVguc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWFN2Zy5hcHBlbmRDaGlsZCh0aGlzLmxpbmVYKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2VudGVyTGluZVhTdmcpO1xuXG4gICAgICAgIHRoaXMuY2VudGVyTGluZVlTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWVN2Zy5pZCA9ICdob3Jpem9udGFsTGluZSc7XG4gICAgICAgIHRoaXMuY2VudGVyTGluZVlTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB0aGlzLmNlbnRlckxpbmVZU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTAgMTBgKTtcbiAgICAgICAgdGhpcy5saW5lWSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwibGluZVwiKTtcbiAgICAgICAgdGhpcy5saW5lWS5zZXRBdHRyaWJ1dGUoJ3gxJywgJzAnKTtcbiAgICAgICAgdGhpcy5saW5lWS5zZXRBdHRyaWJ1dGUoJ3kxJywgJzUnKTtcbiAgICAgICAgdGhpcy5saW5lWS5zZXRBdHRyaWJ1dGUoJ3gyJywgJzEwJyk7XG4gICAgICAgIHRoaXMubGluZVkuc2V0QXR0cmlidXRlKCd5MicsICc1Jyk7XG4gICAgICAgIHRoaXMubGluZVkuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICAgICAgdGhpcy5jZW50ZXJMaW5lWVN2Zy5hcHBlbmRDaGlsZCh0aGlzLmxpbmVZKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2VudGVyTGluZVlTdmcpO1xuICAgIH1cbiAgICBwdXNoQmFjayh0YXJnZXQsIG5ld1RvcCwgbmV3TGVmdCl7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHRhcmdldFdpZHRoLCBvZmZzZXRIZWlnaHQ6IHRhcmdldEhlaWdodCB9ID0gdGFyZ2V0O1xuICAgICAgICBjb25zdCBuZXdSaWdodCA9IG5ld0xlZnQgKyB0YXJnZXRXaWR0aDtcbiAgICAgICAgY29uc3QgbmV3Qm90dG9tID0gbmV3VG9wICsgdGFyZ2V0SGVpZ2h0OyBcbiAgICAgICAgY29uc3QgeyBvZmZzZXRXaWR0aDogcGFnZVdpZHRoLCBvZmZzZXRIZWlnaHQ6IHBhZ2VIZWlnaHQgfSA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgICBsZXQgY29ycmVjdGVkTGVmdCwgY29ycmVjdGVkVG9wO1xuICAgICAgICAvLyBYIGF4aXNcbiAgICAgICAgaWYobmV3TGVmdCA8IDApe1xuICAgICAgICAgICAgY29ycmVjdGVkTGVmdCA9IDA7XG4gICAgICAgIH1lbHNlIGlmKG5ld1JpZ2h0ID4gcGFnZVdpZHRoKXtcbiAgICAgICAgICAgIGNvcnJlY3RlZExlZnQgPSBwYWdlV2lkdGggLSB0YXJnZXRXaWR0aDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb3JyZWN0ZWRMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFkgYXhpc1xuICAgICAgICBpZihuZXdUb3AgPCAwKXtcbiAgICAgICAgICAgIGNvcnJlY3RlZFRvcCA9IDA7XG4gICAgICAgIH1lbHNlIGlmKG5ld0JvdHRvbSA+IHBhZ2VIZWlnaHQpe1xuICAgICAgICAgICAgY29ycmVjdGVkVG9wID0gcGFnZUhlaWdodCAtIHRhcmdldEhlaWdodDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb3JyZWN0ZWRUb3AgPSBuZXdUb3A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29ycmVjdGVkVG9wLFxuICAgICAgICAgICAgY29ycmVjdGVkTGVmdFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRTaGFwZShzaGFwZSl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzaGFwZS5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICAgIHNoYXBlLnNldFBhZ2UodGhpcyk7XG4gICAgfVxuICAgIGlzQWxpZ25XaXRoUGFnZSgpe1xuICAgICAgICBjb25zdCB7IG9iamVjdCB9ID0gdGhpcy5tb3ZlRGF0YTtcbiAgICAgICAgY29uc3QgeyBjZW50ZXJYLCBjZW50ZXJZIH0gPSBvYmplY3QuY29vcmRzO1xuICAgICAgICBsZXQgcGFnZUFsaWduWCwgcGFnZUFsaWduWTtcblxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnBhZ2VDZW50ZXJYIC0gY2VudGVyWCkgPCAyKXtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyTGluZVhTdmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcGFnZUFsaWduWCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJMaW5lWFN2Zy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBwYWdlQWxpZ25YID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnBhZ2VDZW50ZXJZIC0gY2VudGVyWSkgPCAyKXtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyTGluZVlTdmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcGFnZUFsaWduWSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJMaW5lWVN2Zy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBwYWdlQWxpZ25ZID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUFsaWduWCxcbiAgICAgICAgICAgIHBhZ2VBbGlnbllcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYW5BbGlnbm1lbnRMaW5lcygpe1xuICAgICAgICBjb25zdCBleGlzdGluZ1ZlcnRpY2FsTGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nVmVydGljYWxMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZXhpc3RpbmdWZXJ0aWNhbExpbmVzW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSG9yaXpvbnRhbExpbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nSG9yaXpvbnRhbExpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBleGlzdGluZ0hvcml6b250YWxMaW5lc1tpXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0FsaWduV2l0aENsb2VzdFNoYXBlKCl7XG4gICAgICAgIGNvbnN0IHsgb2JqZWN0IH0gPSB0aGlzLm1vdmVEYXRhO1xuICAgICAgICBjb25zdCB7IGNlbnRlclgsIGNlbnRlclkgfSA9IG9iamVjdC5jb29yZHM7XG4gICAgICAgIGxldCBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgICBsZXQgY2xvc2VzdE9iamVjdDtcbiAgICAgICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2VudGVyWDogeCwgY2VudGVyWTogeSB9ID0gc2hhcGUuY29vcmRzO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coeCAtIGNlbnRlclgsIDIpICsgTWF0aC5wb3coeSAtIGNlbnRlclksIDIpKTtcbiAgICAgICAgICAgIGlmKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UgJiYgc2hhcGUuZWxlbWVudC5pZCAhPSBvYmplY3QuZWxlbWVudC5pZCl7XG4gICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZighY2xvc2VzdE9iamVjdCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSB7fTtcbiAgICAgICAgaWYoTWF0aC5hYnMoY2xvc2VzdE9iamVjdC5jb29yZHMubGVmdCAtIG9iamVjdC5jb29yZHMubGVmdCkgPCAyIHx8IE1hdGguYWJzKGNsb3Nlc3RPYmplY3QuY29vcmRzLmxlZnQgLSBvYmplY3QuY29vcmRzLnJpZ2h0KSA8IDIgfHwgTWF0aC5hYnMoY2xvc2VzdE9iamVjdC5jb29yZHMubGVmdCAtIG9iamVjdC5jb29yZHMuY2VudGVyWCkgPCAyKXtcbiAgICAgICAgICAgIGFsaWdubWVudC50eXBlID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGFsaWdubWVudC5wb3MgPSBjbG9zZXN0T2JqZWN0LmNvb3Jkcy5sZWZ0O1xuICAgICAgICAgICAgYWxpZ25tZW50LnBvaW50cyA9IFtcbiAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0LmNvb3Jkcy50b3AsXG4gICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdC5jb29yZHMuYm90dG9tLFxuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMudG9wLFxuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMuYm90dG9tXG4gICAgICAgICAgICBdO1xuICAgICAgICB9ZWxzZSBpZihNYXRoLmFicyhjbG9zZXN0T2JqZWN0LmNvb3Jkcy5yaWdodCAtIG9iamVjdC5jb29yZHMucmlnaHQpIDwgMiB8fCBNYXRoLmFicyhjbG9zZXN0T2JqZWN0LmNvb3Jkcy5yaWdodCAtIG9iamVjdC5jb29yZHMubGVmdCkgPCAyIHx8IE1hdGguYWJzKGNsb3Nlc3RPYmplY3QuY29vcmRzLnJpZ2h0IC0gb2JqZWN0LmNvb3Jkcy5jZW50ZXJYKSA8IDIpe1xuICAgICAgICAgICAgYWxpZ25tZW50LnR5cGUgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgYWxpZ25tZW50LnBvcyA9IGNsb3Nlc3RPYmplY3QuY29vcmRzLnJpZ2h0O1xuICAgICAgICAgICAgYWxpZ25tZW50LnBvaW50cyA9IFtcbiAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0LmNvb3Jkcy50b3AsXG4gICAgICAgICAgICAgICAgY2xvc2VzdE9iamVjdC5jb29yZHMuYm90dG9tLFxuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMudG9wLFxuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMuYm90dG9tXG4gICAgICAgICAgICBdO1xuICAgICAgICB9ZWxzZSBpZihNYXRoLmFicyhjbG9zZXN0T2JqZWN0LmNvb3Jkcy5jZW50ZXJYIC0gb2JqZWN0LmNvb3Jkcy5jZW50ZXJYKSA8IDIgfHwgTWF0aC5hYnMoY2xvc2VzdE9iamVjdC5jb29yZHMuY2VudGVyWCAtIG9iamVjdC5jb29yZHMubGVmdCkgPCAyIHx8IE1hdGguYWJzKGNsb3Nlc3RPYmplY3QuY29vcmRzLmNlbnRlclggLSBvYmplY3QuY29vcmRzLnJpZ2h0KSA8IDIpe1xuICAgICAgICAgICAgYWxpZ25tZW50LnR5cGUgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgYWxpZ25tZW50LnBvcyA9IGNsb3Nlc3RPYmplY3QuY29vcmRzLmNlbnRlclg7XG4gICAgICAgICAgICBhbGlnbm1lbnQucG9pbnRzID0gW1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RPYmplY3QuY29vcmRzLnRvcCxcbiAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0LmNvb3Jkcy5ib3R0b20sXG4gICAgICAgICAgICAgICAgb2JqZWN0LmNvb3Jkcy50b3AsXG4gICAgICAgICAgICAgICAgb2JqZWN0LmNvb3Jkcy5ib3R0b21cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1lbHNlIGlmKE1hdGguYWJzKGNsb3Nlc3RPYmplY3QuY29vcmRzLmNlbnRlclkgLSBvYmplY3QuY29vcmRzLmNlbnRlclkpIDwgMiB8fCBNYXRoLmFicyhjbG9zZXN0T2JqZWN0LmNvb3Jkcy5jZW50ZXJZIC0gb2JqZWN0LmNvb3Jkcy5ib3R0b20pIDwgMiB8fCBNYXRoLmFicyhjbG9zZXN0T2JqZWN0LmNvb3Jkcy5jZW50ZXJZIC0gb2JqZWN0LmNvb3Jkcy50b3ApIDwgMil7XG4gICAgICAgICAgICBhbGlnbm1lbnQudHlwZSA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIGFsaWdubWVudC5wb3MgPSBjbG9zZXN0T2JqZWN0LmNvb3Jkcy5jZW50ZXJZO1xuICAgICAgICAgICAgYWxpZ25tZW50LnBhcmFtcyA9IFtcbiAgICAgICAgICAgICAgICBjbG9zZXN0T2JqZWN0LmNvb3Jkcy5sZWZ0LFxuICAgICAgICAgICAgICAgIGNsb3Nlc3RPYmplY3QuY29vcmRzLnJpZ2h0LFxuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMubGVmdCxcbiAgICAgICAgICAgICAgICBvYmplY3QuY29vcmRzLnJpZ2h0XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhbkFsaWdubWVudExpbmVzKCk7XG4gICAgICAgIGlmKGFsaWdubWVudC50eXBlID09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbiguLi5hbGlnbm1lbnQucG9pbnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWF4KC4uLmFsaWdubWVudC5wb2ludHMpO1xuXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ25tZW50TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudExpbmUuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnRMaW5lLnN0eWxlLmhlaWdodCA9IGAke2VuZCAtIHN0YXJ0fXB4YDtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnRMaW5lLnN0eWxlLnRvcCA9IGAke3N0YXJ0fXB4YDtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBbGlnbm1lbnRMaW5lLnN0eWxlLmxlZnQgPSBgJHthbGlnbm1lbnQucG9zfXB4YDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnZlcnRpY2FsQWxpZ25tZW50TGluZSk7XG4gICAgICAgIH1lbHNlIGlmKGFsaWdubWVudC50eXBlID09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IE1hdGgubWluKGFsaWdubWVudC5wb2ludHMpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gTWF0aC5tYXgoYWxpZ25tZW50LnBvaW50cyk7XG5cbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudExpbmUuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50TGluZS5zdHlsZS53aWR0aCA9IGAke2VuZCAtIHN0YXJ0fXB4YDtcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudExpbmUuc3R5bGUudG9wID0gYCR7YWxpZ25tZW50LnBvc31weGA7XG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbm1lbnRMaW5lLnN0eWxlLmxlZnQgPSBgJHtzdGFydH1weGA7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ob3Jpem9udGFsQWxpZ25tZW50TGluZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWdubWVudExpbmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50TGluZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Nb3VzZU1vdmVIYW5kbGVyKGV2ZW50KXtcbiAgICAgICAgY29uc3QgeyBvYmplY3QsIHRhcmdldCwgc3RhcnRUb3AsIHN0YXJ0TGVmdCwgc3RhcnRYLCBzdGFydFkgfSA9IHRoaXMubW92ZURhdGE7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGV2ZW50LnBhZ2VZIC0gc3RhcnRZO1xuICAgICAgICBjb25zdCBkZWx0YVggPSBldmVudC5wYWdlWCAtIHN0YXJ0WDtcbiAgICAgICAgY29uc3QgbmV3VG9wID0gc3RhcnRUb3AgKyBkZWx0YVk7XG4gICAgICAgIGNvbnN0IG5ld0xlZnQgPSBzdGFydExlZnQgKyBkZWx0YVg7XG4gICAgICAgIGNvbnN0IHsgY29ycmVjdGVkVG9wLCBjb3JyZWN0ZWRMZWZ0IH0gPSB0aGlzLnB1c2hCYWNrKHRhcmdldCwgbmV3VG9wLCBuZXdMZWZ0KTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGAke2NvcnJlY3RlZFRvcH1weGA7XG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gYCR7Y29ycmVjdGVkTGVmdH1weGA7XG4gICAgICAgIG9iamVjdC51cGRhdGVDb29yZHMoKTtcbiAgICAgICAgdGhpcy5tb3ZlRGF0YS5wYWdlQWxpZ25tZW50ID0gdGhpcy5pc0FsaWduV2l0aFBhZ2UoKTtcbiAgICAgICAgdGhpcy5pc0FsaWduV2l0aENsb2VzdFNoYXBlKCk7XG4gICAgfVxuICAgIGhhbmRsZURyb3AodGFyZ2V0KXtcbiAgICAgICAgLy8gc25hcCB0byBjZW50ZXJcbiAgICAgICAgY29uc3Qge3BhZ2VBbGlnblgsIHBhZ2VBbGlnbll9ID0gdGhpcy5tb3ZlRGF0YS5wYWdlQWxpZ25tZW50O1xuICAgICAgICBpZihwYWdlQWxpZ25YKXtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wYWdlQ2VudGVyWCAtIHRhcmdldC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgICB9XG4gICAgICAgIGlmKHBhZ2VBbGlnblkpe1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGAke3RoaXMucGFnZUNlbnRlclkgLSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVEYXRhID0ge307XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlSGFuZGxlckJpbmQpO1xuICAgICAgICB0aGlzLmNsZWFuQWxpZ25tZW50TGluZXMoKTtcbiAgICB9XG4gICAgaGFuZGxlRHJhZ2dpbmcodGFyZ2V0LCBtb3VzZUV2ZW50KXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRhcmdldC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wYWdlQ2VudGVyWCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIHRoaXMucGFnZUNlbnRlclkgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMubW92ZURhdGEgPSB7XG4gICAgICAgICAgICBvYmplY3Q6IHRhcmdldCxcbiAgICAgICAgICAgIHRhcmdldDogZWxlbWVudCxcbiAgICAgICAgICAgIHN0YXJ0VG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIHN0YXJ0TGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnRYOiBtb3VzZUV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgc3RhcnRZOiBtb3VzZUV2ZW50LnBhZ2VZLFxuICAgICAgICAgICAgcGFnZUFsaWdubWVudDoge31cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmVIYW5kbGVyQmluZCk7XG4gICAgfVxufVxuXG5jb25zdCBTY2VuZSA9ICgpID0+IHtcbiAgICBjb25zdCBmaXJzdENpcmNsZSA9IG5ldyBDaXJjbGUoJ2ZpcnN0JywgMTAwLCAwLCAwLCAncmVkJyk7XG4gICAgY29uc3Qgc2Vjb25kQ2lyY2xlID0gbmV3IENpcmNsZSgnc2Vjb25kJywgMTUwLCAwLCAxMDAsICd5ZWxsb3cnKTtcbiAgICBjb25zdCB0aGlyZENpcmNsZSA9IG5ldyBDaXJjbGUoJ3RoaXJkJywgMjAwLCAwLCAyNTAsICdibHVlJyk7XG4gICAgY29uc3QgY2lyY2xlcyA9IFtmaXJzdENpcmNsZSwgc2Vjb25kQ2lyY2xlLCB0aGlyZENpcmNsZV1cblxuICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZS5lbGVtZW50KTtcbiAgICBjaXJjbGVzLmZvckVhY2goKGNpcmNsZSkgPT4ge1xuICAgICAgICBwYWdlLmFkZFNoYXBlKGNpcmNsZSk7XG4gICAgfSk7XG59O1xuXG5TY2VuZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=