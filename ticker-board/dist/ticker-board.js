/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ticker.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ticker.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ticker_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticker-bg.svg */ \"./src/ticker-bg.svg\");\n/* harmony import */ var _ticker_bg_light_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticker-bg-light.svg */ \"./src/ticker-bg-light.svg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&amp;family=Roboto+Mono:wght@100;400&amp;display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_ticker_bg_svg__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_ticker_bg_light_svg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"ul.board {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  font-family: 'Nanum Gothic Coding', 'Roboto Mono', monospace;\\n  overflow-x: hidden;\\n  /* static for old browsers */\\n  font-size: 3rem;\\n  /* scale for new browsers */\\n  font-size: calc(3 * var(--base-size));\\n  max-width: min-content;\\n  --base-size: min(1rem, 2vw);\\n}\\n\\n@media screen and (max-width: 600px) {\\n  ul.board {\\n    overflow-x: scroll;\\n  }\\n}\\n\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border: 0;\\n}\\n\\nul.board li div.ticker-row {\\n  display: flex;\\n  padding: calc(var(--base-size) / 4);\\n}\\n\\nspan.ticker {\\n  display: block;\\n  background-size: cover;\\n  background-position: center left;\\n  background-repeat: no-repeat;\\n  overflow-y: hidden;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  /* static for old browsers */\\n  border-radius: 0.125rem;\\n  padding: 0.25rem 0;\\n  /* margin: 0 0.125rem; */\\n  /* scale for modern browsers */\\n  border-radius: calc(var(--base-size) / 8);\\n  padding: calc(var(--base-size) / 4) calc(var(--base-size) / 2);\\n  flex: auto 0 0;\\n}\\n\\nspan.ticker.animating {\\n  animation: squeeze 0.075s ease-in-out infinite;\\n}\\n@keyframes squeeze {\\n  50% {\\n    transform: scaleY(0);\\n  }\\n}\\n\\nspan.ticker,\\n[dark] span.ticker {\\n  color: hsl(60, 50%, 65%);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n[light] span.ticker {\\n  color: hsl(240, 25%, 15%);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n@media (prefers-color-scheme: light) {\\n  span.ticker {\\n    color: hsl(240, 25%, 15%);\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ticker-board/./src/ticker.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ticker-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ticker-board/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/ticker.css":
/*!************************!*\
  !*** ./src/ticker.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ticker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./ticker.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ticker.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ticker_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ticker_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://ticker-board/./src/ticker.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ticker-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/ticker-bg-light.svg":
/*!*********************************!*\
  !*** ./src/ticker-bg-light.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/svg+xml;base64,PHN2ZwogIHZpZXdCb3g9IjAgMCAxMDAgMTUwIgogIHdpZHRoPSIxMHB4IgogIGhlaWdodD0iMjBweCIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgaWQ9InRpY2tlci1iYWNrZ3JvdW5kIgo+CiAgPHJlY3QKICAgIHg9IjEwIgogICAgeT0iNiIKICAgIHdpZHRoPSI4MCIKICAgIGhlaWdodD0iMTM4IgogICAgc3Ryb2tlPSJyZ2IoMTkzLCAxOTMsIDE5MykiCiAgICBzdHJva2Utd2lkdGg9IjMiCiAgICByeD0iNCIKICAgIGZpbGw9InJnYigyNDYsIDI0MywgMjI0KSIKICAvPgogIDxyZWN0IHg9IjE1IiB5PSI3NCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIiIGZpbGw9InJnYigxMjgsIDEyOCwgMTI4KSIgLz4KICA8Y2lyY2xlCiAgICBjeD0iMTAiCiAgICBjeT0iNzUiCiAgICByPSI0IgogICAgZmlsbD0icmdiKDE5MywgMTkzLCAxOTMpIgogICAgc3Ryb2tlPSJyZ2IoMjQ2LCAyNDMsIDIyNCkiCiAgICBzdHJva2Utd2lkdGg9IjMiCiAgLz4KICA8Y2lyY2xlCiAgICBjeD0iOTAiCiAgICBjeT0iNzUiCiAgICByPSI0IgogICAgZmlsbD0icmdiKDE5MywgMTkzLCAxOTMpIgogICAgc3Ryb2tlPSJyZ2IoMjQ2LCAyNDMsIDIyNCkiCiAgICBzdHJva2Utd2lkdGg9IjMiCiAgLz4KPC9zdmc+\");\n\n//# sourceURL=webpack://ticker-board/./src/ticker-bg-light.svg?");

/***/ }),

/***/ "./src/ticker-bg.svg":
/*!***************************!*\
  !*** ./src/ticker-bg.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/svg+xml;base64,PHN2ZwogIHZpZXdCb3g9IjAgMCAxMDAgMTUwIgogIHdpZHRoPSIxMHB4IgogIGhlaWdodD0iMjBweCIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgaWQ9InRpY2tlci1iYWNrZ3JvdW5kIgo+CiAgPHJlY3QKICAgIHg9IjEwIgogICAgeT0iNiIKICAgIHdpZHRoPSI4MCIKICAgIGhlaWdodD0iMTM4IgogICAgc3Ryb2tlPSJyZ2IoMTkzLCAxOTMsIDE5MykiCiAgICBzdHJva2Utd2lkdGg9IjMiCiAgICByeD0iNCIKICAgIGZpbGw9ImhzbCgyMTUsIDE1JSwgNSUpIgogIC8+CiAgPHJlY3QgeD0iMTUiIHk9Ijc0IiB3aWR0aD0iNzAiIGhlaWdodD0iMiIgZmlsbD0icmdiKDEyOCwgMTI4LCAxMjgpIiAvPgogIDxjaXJjbGUKICAgIGN4PSIxMCIKICAgIGN5PSI3NSIKICAgIHI9IjQiCiAgICBmaWxsPSJyZ2IoMTkzLCAxOTMsIDE5MykiCiAgICBzdHJva2U9Im5vbmUiCiAgICBzdHJva2Utd2lkdGg9IjIiCiAgLz4KICA8Y2lyY2xlCiAgICBjeD0iOTAiCiAgICBjeT0iNzUiCiAgICByPSI0IgogICAgZmlsbD0icmdiKDE5MywgMTkzLCAxOTMpIgogICAgc3Ryb2tlPSJub25lIgogICAgc3Ryb2tlLXdpZHRoPSIyIgogIC8+Cjwvc3ZnPg==\");\n\n//# sourceURL=webpack://ticker-board/./src/ticker-bg.svg?");

/***/ }),

/***/ "./src/boards/Board.js":
/*!*****************************!*\
  !*** ./src/boards/Board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_TickerRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TickerRow */ \"./src/components/TickerRow.js\");\n/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array */ \"./src/utils/array.js\");\n/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/string */ \"./src/utils/string.js\");\n\n\n\n\n\nclass Board {\n  constructor(element, { count, size, delay, theme }) {\n    this.options = {\n      delay: delay || 250,\n      theme,\n    }\n    this.size = size\n    this.messages = new Array(count).fill(\n      ''.padEnd(this.size, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE)\n    )\n    this._createElement(element)\n    this._createTickers()\n    this.update()\n  }\n\n  _createElement(element) {\n    const boardElement = document.createElement('ul')\n    boardElement.classList.add('board')\n    if (typeof element === 'string') {\n      element = document.querySelector(element)\n    }\n    if (element instanceof HTMLElement) {\n      element.replaceWith(boardElement)\n    }\n    if (typeof this.options.theme === 'string') {\n      const { theme } = this.options\n      boardElement.setAttribute(theme, true)\n    }\n    this.element = boardElement\n  }\n\n  _createTickers() {\n    this.tickers = this.messages.map((_, i) => this.setupTicker(i))\n  }\n\n  updateCount(count) {\n    if (count === this.tickers.length) {\n      return\n    }\n    while (count > this.tickers.length) {\n      this.messages.push(''.padEnd(this.size, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE))\n      this.tickers.push(this.setupTicker(this.tickers.length))\n    }\n    while (count < this.tickers.length) {\n      this.tickers.pop()\n    }\n  }\n\n  setupTicker(i) {\n    const ticker = new _components_TickerRow__WEBPACK_IMPORTED_MODULE_1__.default(\n      this.size,\n      this.messages[i].padEnd(this.size, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE)\n    )\n    this.element.appendChild(ticker.element)\n    return ticker\n  }\n\n  update() {\n    this.tickers.forEach((ticker, i) => {\n      this.messages[i] = (0,_utils_string__WEBPACK_IMPORTED_MODULE_3__.padNonBreakingSpace)(this.messages[i], this.size)\n      setTimeout(\n        () => ticker.updateMessage(this.messages[i]),\n        i * this.options.delay\n      )\n    })\n  }\n\n  updateMessages(messages) {\n    this.messages = (0,_utils_array__WEBPACK_IMPORTED_MODULE_2__.appendItemsUpToLength)(messages, '', this.tickers.length)\n    this.update()\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://ticker-board/./src/boards/Board.js?");

/***/ }),

/***/ "./src/boards/RotationBoard.js":
/*!*************************************!*\
  !*** ./src/boards/RotationBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string */ \"./src/utils/string.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ \"./src/boards/Board.js\");\n\n\n\nclass RotationBoard extends _Board__WEBPACK_IMPORTED_MODULE_1__.default {\n  constructor(element, options) {\n    super(element, options)\n\n    this.defaultMessage = new Array(options.size).fill('\\xa0').join('')\n    this.originalMessages = options.messages.map((m) =>\n      (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.padNonBreakingSpace)(m, this.size)\n    )\n    this.delay = options.delay || 8000\n    this.initialDelay = options.initialDelay || 1000\n\n    this.rotate()\n  }\n\n  rotate() {\n    setTimeout(() => {\n      this.advance()\n      this.interval = setInterval(this.advance.bind(this), this.delay)\n    }, this.initialDelay)\n  }\n\n  cancel() {\n    clearInterval(this.interval)\n  }\n\n  advance() {\n    const newMessages = Array.from(this.messages)\n    newMessages.shift()\n    const lastMessage = this.messages[this.messages.length - 1]\n\n    const indexToAdd = this.originalMessages.indexOf(lastMessage) + 1\n\n    newMessages.push(this.originalMessages[indexToAdd])\n\n    this.updateMessages(newMessages)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotationBoard);\n\n\n//# sourceURL=webpack://ticker-board/./src/boards/RotationBoard.js?");

/***/ }),

/***/ "./src/boards/TickerBoard.js":
/*!***********************************!*\
  !*** ./src/boards/TickerBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _RotationBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationBoard */ \"./src/boards/RotationBoard.js\");\n\n\nclass TickerBoard {\n  constructor(selector, options) {\n    const { size, theme, delay } = options || {}\n    const selectedElements = document.querySelectorAll(selector)\n    this.boards = Array.from(selectedElements).map((selected) => {\n      const messages = Array.from(selected.children).map((m) => m.innerText)\n      const boardElement = document.createElement('ul')\n      selected.replaceWith(boardElement)\n\n      const board = new _RotationBoard__WEBPACK_IMPORTED_MODULE_0__.default(boardElement, {\n        count: messages.length,\n        size: size || Math.max(...messages.map((x) => x.length)),\n        messages,\n        theme,\n        delay,\n      })\n\n      board.element.addEventListener('click', () => board.advance())\n\n      return board\n    })\n  }\n\n  advance(index) {\n    this.boards[index].advance()\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TickerBoard);\n\n\n//# sourceURL=webpack://ticker-board/./src/boards/TickerBoard.js?");

/***/ }),

/***/ "./src/boards/index.js":
/*!*****************************!*\
  !*** ./src/boards/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* reexport safe */ _Board_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"TickerBoard\": () => (/* reexport safe */ _TickerBoard__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"RotationBoard\": () => (/* reexport safe */ _RotationBoard__WEBPACK_IMPORTED_MODULE_2__.default)\n/* harmony export */ });\n/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ \"./src/boards/Board.js\");\n/* harmony import */ var _TickerBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TickerBoard */ \"./src/boards/TickerBoard.js\");\n/* harmony import */ var _RotationBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RotationBoard */ \"./src/boards/RotationBoard.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://ticker-board/./src/boards/index.js?");

/***/ }),

/***/ "./src/components/TickerCard.js":
/*!**************************************!*\
  !*** ./src/components/TickerCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string */ \"./src/utils/string.js\");\n\n\nconst acceptableCodes = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:,'-\\xa0`\nconst delayInMilliseconds = 25\n\nclass TickerCard {\n  constructor(letter) {\n    this.visibleLetter = letter\n    this.createElement()\n  }\n\n  createElement() {\n    this.element = document.createElement('span')\n    this.element.classList.add('ticker')\n    this.element.innerText = this.visibleLetter\n  }\n\n  changeCharacter(letter) {\n    this.visibleLetter = letter\n    this.render()\n  }\n\n  animateTo(letter) {\n    if (this.visibleLetter === letter) {\n      return\n    }\n    const letters = (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.sliceBetween)(acceptableCodes, this.visibleLetter, letter)\n\n    let start\n    const updateLetter = (timestamp) => {\n      if (start === undefined) {\n        start = timestamp\n      }\n      const elapsed = timestamp - start\n      const letterIndex = Math.floor(elapsed / delayInMilliseconds)\n\n      if (letterIndex < letters.length) {\n        this.changeCharacter(letters[letterIndex])\n        window.requestAnimationFrame(updateLetter)\n      } else {\n        this.changeCharacter(letter)\n        this.element.classList.remove('animating')\n      }\n    }\n\n    this.element.classList.add('animating')\n    window.requestAnimationFrame(updateLetter)\n  }\n\n  render() {\n    this.element.innerText = this.visibleLetter\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TickerCard);\n\n\n//# sourceURL=webpack://ticker-board/./src/components/TickerCard.js?");

/***/ }),

/***/ "./src/components/TickerRow.js":
/*!*************************************!*\
  !*** ./src/components/TickerRow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _TickerCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TickerCard */ \"./src/components/TickerCard.js\");\n\n\n\nclass TickerRow {\n  constructor(size, message) {\n    this.size = size\n    this.message = message.padEnd(size, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE)\n    this.delay = 200\n    this.cards = this.createCards()\n    this.element = this.render()\n  }\n\n  updateMessage(message) {\n    this.message = message.padEnd(this.size, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE)\n    this.changeMessage()\n  }\n\n  changeMessage() {\n    let newMessage = this.message.replace(/\\s/g, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE)\n\n    this.cards.forEach((card, i) => {\n      setTimeout(() => card.animateTo(newMessage[i]), i * this.delay)\n    })\n    this.screenReaderElement.innerText = this.message\n  }\n\n  createCards() {\n    return new Array(this.size)\n      .fill('')\n      .map(() => new _TickerCard__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE))\n  }\n\n  render() {\n    const element = document.createElement('li')\n    const innerElement = document.createElement('div')\n    this.screenReaderElement = document.createElement('div')\n\n    innerElement.setAttribute('aria-hidden', 'true')\n    innerElement.classList.add('ticker-row')\n    this.screenReaderElement.classList.add('sr-only')\n\n    this.cards.forEach((card) => {\n      innerElement.appendChild(card.element)\n    })\n    element.append(this.screenReaderElement, innerElement)\n    return element\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TickerRow);\n\n\n//# sourceURL=webpack://ticker-board/./src/components/TickerRow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* reexport safe */ _boards_index_js__WEBPACK_IMPORTED_MODULE_0__.Board),\n/* harmony export */   \"TickerBoard\": () => (/* reexport safe */ _boards_index_js__WEBPACK_IMPORTED_MODULE_0__.TickerBoard),\n/* harmony export */   \"RotationBoard\": () => (/* reexport safe */ _boards_index_js__WEBPACK_IMPORTED_MODULE_0__.RotationBoard)\n/* harmony export */ });\n/* harmony import */ var _boards_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boards/index.js */ \"./src/boards/index.js\");\n/* harmony import */ var _ticker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticker.css */ \"./src/ticker.css\");\n\n\n\n// for ease-of-use, we expose these classes in window\nif (window) {\n  window.Board = _boards_index_js__WEBPACK_IMPORTED_MODULE_0__.Board\n  window.TickerBoard = _boards_index_js__WEBPACK_IMPORTED_MODULE_0__.TickerBoard\n  window.RotationBoard = _boards_index_js__WEBPACK_IMPORTED_MODULE_0__.RotationBoard\n}\n\n\n\n\n//# sourceURL=webpack://ticker-board/./src/index.js?");

/***/ }),

/***/ "./src/utils/array.js":
/*!****************************!*\
  !*** ./src/utils/array.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomChoice\": () => (/* binding */ getRandomChoice),\n/* harmony export */   \"getRandomFilterChoice\": () => (/* binding */ getRandomFilterChoice),\n/* harmony export */   \"getRandomSlice\": () => (/* binding */ getRandomSlice),\n/* harmony export */   \"appendItemsUpToLength\": () => (/* binding */ appendItemsUpToLength)\n/* harmony export */ });\nconst getRandomChoice = function (array) {\n  const i = Math.floor(Math.random() * array.length)\n  return array[i]\n}\nconst getRandomFilterChoice = function (array, filter) {\n  return array.filter(filter).getRandomChoice()\n}\nconst getRandomSlice = function (array, n) {\n  const i = Math.floor(Math.random() * array.length)\n  return array.slice(i, i + (n || 1))\n}\n\nconst appendItemsUpToLength = function (array, item, length) {\n  if (length <= array.length) {\n    return array\n  }\n  return array.concat(new Array(length - array.length).fill(item))\n}\n\n\n\n\n//# sourceURL=webpack://ticker-board/./src/utils/array.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NON_BREAKING_SPACE\": () => (/* binding */ NON_BREAKING_SPACE)\n/* harmony export */ });\nconst NON_BREAKING_SPACE = `\\xa0`\n\n\n\n\n//# sourceURL=webpack://ticker-board/./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/string.js":
/*!*****************************!*\
  !*** ./src/utils/string.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliceBetween\": () => (/* binding */ sliceBetween),\n/* harmony export */   \"padNonBreakingSpace\": () => (/* binding */ padNonBreakingSpace)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/utils/constants.js\");\n\n\nconst sliceAt = function (str, character) {\n  return str.slice(str.indexOf(character) + 1)\n}\nconst sliceTo = function (str, character) {\n  return str.slice(0, str.indexOf(character) + 1)\n}\nconst sliceBetween = function (str, from, to) {\n  const doubleStr = str + str\n  const slicedAt = sliceAt(doubleStr, from)\n  const slicedBetween = sliceTo(slicedAt, to)\n  return slicedBetween\n}\n\nconst padNonBreakingSpace = (message, size) =>\n  (message || '').padEnd(size, _constants__WEBPACK_IMPORTED_MODULE_0__.NON_BREAKING_SPACE)\n\n\n\n\n//# sourceURL=webpack://ticker-board/./src/utils/string.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;