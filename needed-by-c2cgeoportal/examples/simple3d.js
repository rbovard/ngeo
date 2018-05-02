/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"simple3d": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([43,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/simple3d.css":
/*!*******************************!*\
  !*** ./examples/simple3d.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/simple3d.js":
/*!******************************!*\
  !*** ./examples/simple3d.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple3d_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple3d.css */ "./examples/simple3d.css");
/* harmony import */ var _simple3d_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simple3d_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_olcs_olcsModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/olcs/olcsModule */ "./src/olcs/olcsModule.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
/* harmony import */ var ngeo_olcs_Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/olcs/Manager */ "./src/olcs/Manager.js");
// The MIT License (MIT)
//
// Copyright (c) 2017-2021 Camptocamp SA
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.












/** @type {angular.IModule} **/
const myModule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_olcs_olcsModule__WEBPACK_IMPORTED_MODULE_6__["default"].name]);

/**
 * @class
 * @ngInject
 * @param {angular.IScope} $rootScope Root scope.
 * @param {import('ngeo/olcs/Service').OlcsService} ngeoOlcsService The service.
 */
function MainController($rootScope, ngeoOlcsService) {
  /**
   * @type {import('ol/Map').default}
   */
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
    layers: [
      new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"](),
      }),
    ],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({
      center: [0, 0],
      zoom: 4,
    }),
  });

  const cesiumUrl = document.location.search.includes('mode=dev')
    ? 'https://cesium.com/downloads/cesiumjs/releases/1.62/Build/CesiumUnminified/Cesium.js'
    : 'https://cesium.com/downloads/cesiumjs/releases/1.62/Build/Cesium/Cesium.js';

  this.ol3dm = new ngeo_olcs_Manager__WEBPACK_IMPORTED_MODULE_8__["default"](cesiumUrl, $rootScope, {
    map: this.map,
  });

  // Optionally, the manager can be registered into the olcs service
  ngeoOlcsService.initialize(this.ol3dm);
}

myModule.controller('MainController', MainController);
myModule.constant('ngeoUsedKeyRegexp', []);

/* harmony default export */ __webpack_exports__["default"] = (myModule);


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/node-libs-browser/node_modules/buffer/index.js from dll-reference vendor ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1082);

/***/ }),

/***/ "./node_modules/ol/Disposable.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/ol/Disposable.js from dll-reference vendor ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(317);

/***/ }),

/***/ "./node_modules/ol/Image.js":
/*!**********************************************************************!*\
  !*** delegated ./node_modules/ol/Image.js from dll-reference vendor ***!
  \**********************************************************************/
/*! exports provided: listenImage, default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(318);

/***/ }),

/***/ "./node_modules/ol/ImageBase.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/ImageBase.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(491);

/***/ }),

/***/ "./node_modules/ol/ImageState.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/ol/ImageState.js from dll-reference vendor ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(33);

/***/ }),

/***/ "./node_modules/ol/ImageTile.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/ImageTile.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(984);

/***/ }),

/***/ "./node_modules/ol/Tile.js":
/*!*********************************************************************!*\
  !*** delegated ./node_modules/ol/Tile.js from dll-reference vendor ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(246);

/***/ }),

/***/ "./node_modules/ol/TileQueue.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/TileQueue.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default, getTilePriority */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(610);

/***/ }),

/***/ "./node_modules/ol/TileState.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/TileState.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(18);

/***/ }),

/***/ "./node_modules/ol/asserts.js":
/*!************************************************************************!*\
  !*** delegated ./node_modules/ol/asserts.js from dll-reference vendor ***!
  \************************************************************************/
/*! exports provided: assert */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(20);

/***/ }),

/***/ "./node_modules/ol/events/EventType.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/events/EventType.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(15);

/***/ }),

/***/ "./node_modules/ol/proj/Units.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/ol/proj/Units.js from dll-reference vendor ***!
  \***************************************************************************/
/*! exports provided: fromCode, METERS_PER_UNIT, default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(56);

/***/ }),

/***/ "./node_modules/ol/render/canvas/Immediate.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/ol/render/canvas/Immediate.js from dll-reference vendor ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(952);

/***/ }),

/***/ "./node_modules/ol/renderer/vector.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/renderer/vector.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: defaultOrder, getSquaredTolerance, getTolerance, renderFeature */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(164);

/***/ }),

/***/ "./node_modules/ol/source/Source.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/ol/source/Source.js from dll-reference vendor ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(323);

/***/ }),

/***/ "./node_modules/ol/source/State.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/ol/source/State.js from dll-reference vendor ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(137);

/***/ }),

/***/ "./node_modules/ol/source/TileEventType.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/ol/source/TileEventType.js from dll-reference vendor ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(522);

/***/ }),

/***/ "./node_modules/ol/source/UrlTile.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/ol/source/UrlTile.js from dll-reference vendor ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(509);

/***/ }),

/***/ "./node_modules/ol/structs/LRUCache.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/structs/LRUCache.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(983);

/***/ }),

/***/ "./node_modules/ol/tilecoord.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/tilecoord.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: createOrUpdate, getKeyZXY, getKey, getCacheKeyForTileKey, fromKey, hash, withinExtentAndZ */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(81);

/***/ }),

/***/ "./node_modules/ol/tilegrid/common.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/tilegrid/common.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: DEFAULT_MAX_ZOOM, DEFAULT_TILE_SIZE */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(274);

/***/ }),

/***/ "./node_modules/ol/tileurlfunction.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/tileurlfunction.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: createFromTemplate, createFromTemplates, createFromTileUrlFunctions, nullTileUrlFunction, expandUrl */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(281);

/***/ }),

/***/ "./node_modules/ol/transform.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/transform.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: create, reset, multiply, set, setFromArray, apply, rotate, scale, makeScale, translate, compose, composeCssTransform, invert, makeInverse, determinant, toString */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(25);

/***/ }),

/***/ "./src/olcs/Manager.js":
/*!*****************************!*\
  !*** ./src/olcs/Manager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_contrib_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/contrib/Manager */ "./node_modules/ol-cesium/src/olcs/contrib/Manager.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Manager = function (_olcsContribManager) {
  _inherits(Manager, _olcsContribManager);

  var _super = _createSuper(Manager);

  function Manager(url, $rootScope, options) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _super.call(this, url, options);
    _this.rootScope_ = $rootScope;
    return _this;
  }

  _createClass(Manager, [{
    key: "toggle3d",
    value: function toggle3d() {
      var _this2 = this;

      var promise = _get(_getPrototypeOf(Manager.prototype), "toggle3d", this).call(this);

      return promise.then(function () {
        _this2.rootScope_.$apply();
      });
    }
  }]);

  return Manager;
}(olcs_contrib_Manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./src/olcs/Service.js":
/*!*****************************!*\
  !*** ./src/olcs/Service.js ***!
  \*****************************/
/*! exports provided: OlcsService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlcsService", function() { return OlcsService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_statemanager_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/statemanager/Location */ "./src/statemanager/Location.js");
/* harmony import */ var ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/olcs/constants */ "./src/olcs/constants.js");
/* harmony import */ var ngeo_statemanager_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/statemanager/Service */ "./src/statemanager/Service.js");
/* harmony import */ var ol_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/math */ "./node_modules/ol/math.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var OlcsService = function () {
  OlcsService.$inject = ["ngeoDebounce", "ngeoLocation", "ngeoStateManager"];

  function OlcsService(ngeoDebounce, ngeoLocation, ngeoStateManager) {
    _classCallCheck(this, OlcsService);

    this.manager_ = null;
    this.ngeoDebounce_ = ngeoDebounce;
    this.ngeoLocation_ = ngeoLocation;
    this.ngeoStateManager_ = ngeoStateManager;
  }

  _createClass(OlcsService, [{
    key: "initialize",
    value: function initialize(manager) {
      var _this = this;

      this.manager_ = manager;
      this.manager_.on('load', function () {
        _this.cameraToState_();
      });

      if (this.ngeoStateManager_.getInitialBooleanValue('3d_enabled')) {
        this.initialStateToCamera_();
      }
    }
  }, {
    key: "getManager",
    value: function getManager() {
      return this.manager_;
    }
  }, {
    key: "initialStateToCamera_",
    value: function initialStateToCamera_() {
      if (!this.manager_) {
        throw new Error('Missing manager');
      }

      var stateManager = this.ngeoStateManager_;
      var lon = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON);
      var lat = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT);
      var elevation = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION);
      var heading = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING) || 0;
      var pitch = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH) || 0;

      if (!lon) {
        throw new Error('Missing lon');
      }

      if (!lat) {
        throw new Error('Missing lat');
      }

      if (!elevation) {
        throw new Error('Missing elevation');
      }

      return this.manager_.set3dWithView(lon, lat, elevation, heading, pitch);
    }
  }, {
    key: "cameraToState_",
    value: function cameraToState_() {
      var _this2 = this;

      if (!this.manager_) {
        throw new Error('Missing manager');
      }

      var manager = this.manager_;
      var scene = manager.getOl3d().getCesiumScene();
      var camera = scene.camera;
      camera.moveEnd.addEventListener(this.ngeoDebounce_(function () {
        var _this2$ngeoStateManag;

        var position = camera.positionCartographic;

        _this2.ngeoStateManager_.updateState((_this2$ngeoStateManag = {}, _defineProperty(_this2$ngeoStateManag, ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ENABLED, true), _defineProperty(_this2$ngeoStateManag, ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON, Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(position.longitude).toFixed(5)), _defineProperty(_this2$ngeoStateManag, ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT, Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(position.latitude).toFixed(5)), _defineProperty(_this2$ngeoStateManag, ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION, position.height.toFixed(0)), _defineProperty(_this2$ngeoStateManag, ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING, Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(camera.heading).toFixed(3)), _defineProperty(_this2$ngeoStateManag, ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH, Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(camera.pitch).toFixed(3)), _this2$ngeoStateManag));
      }, 1000, true));
      this.manager_.on('toggle', function (event) {
        if (!event.target.is3dEnabled()) {
          _this2.remove3dState_();
        }
      });
    }
  }, {
    key: "remove3dState_",
    value: function remove3dState_() {
      var _this3 = this;

      this.ngeoLocation_.getParamKeysWithPrefix(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PREFIX).forEach(function (key) {
        _this3.ngeoStateManager_.deleteParam(key);
      });
    }
  }]);

  return OlcsService;
}();
var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module(name, [ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_statemanager_Location__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_statemanager_Service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).service('ngeoOlcsService', OlcsService);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/olcs/constants.js":
/*!*******************************!*\
  !*** ./src/olcs/constants.js ***!
  \*******************************/
/*! exports provided: Permalink3dParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permalink3dParam", function() { return Permalink3dParam; });
var Permalink3dParam = {
  ENABLED: '3d_enabled',
  LON: '3d_lon',
  LAT: '3d_lat',
  ELEVATION: '3d_elevation',
  HEADING: '3d_heading',
  PITCH: '3d_pitch',
  PREFIX: '3d_'
};

/***/ }),

/***/ "./src/olcs/controls3d.html":
/*!**********************************!*\
  !*** ./src/olcs/controls3d.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-tools">\n  <div class="ngeo-angle"><div class="ngeo-angle3d"></div></div>\n  <button class="ngeo-left ngeo-tilt-left" ng-click="$ctrl.tilt(5)"></button>\n  <button class="ngeo-right ngeo-tilt-right" ng-click="$ctrl.tilt(-5)"></button>\n</div>\n<div class="ngeo-zoom">\n  <button class="ol-zoom-in" ng-click="$ctrl.zoom(1)"></button>\n  <button class="ol-zoom-out" ng-click="$ctrl.zoom(-1)"></button>\n</div>\n<div class="ngeo-tools">\n  <div class="ngeo-rotation"><div class="ngeo-rotation3d"></div></div>\n  <button class="ngeo-left" ng-click="$ctrl.rotate(-15)"></button>\n  <button class="ngeo-right" ng-click="$ctrl.rotate(15)"></button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/olcs/controls3d.js":
/*!********************************!*\
  !*** ./src/olcs/controls3d.js ***!
  \********************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");
/* harmony import */ var ol_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/math */ "./node_modules/ol/math.js");
/* harmony import */ var olcs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! olcs/core */ "./node_modules/ol-cesium/src/olcs/core.js");
ngeoOlcsControls3dTemplateUrlInjectable.$inject = ["$attrs", "ngeoOlcsControls3dTemplateUrl"];

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsControls3d', []);

function shouldUpdate(older, newer) {
  return Number.isFinite(newer) && (!Number.isFinite(older) || Math.abs(newer - older) > 0.05);
}

var Controller = function () {
  Controller.$inject = ["$element", "ngeoOlcsService"];

  function Controller($element, ngeoOlcsService) {
    _classCallCheck(this, Controller);

    this.element_ = $element;
    this.ol3dm = null;
    this.minTilt = -1;
    this.maxTilt = -1;
    this.tiltRightEl_ = null;
    this.tiltLeftEl_ = null;
    this.rotation3dEl_ = null;
    this.angle3dEl_ = null;
    this.previousRotation_ = -1;
    this.previousViewMatrix_ = null;
    this.animationFrameRequestId_ = -1;
    this.olcsService_ = ngeoOlcsService;
  }

  _createClass(Controller, [{
    key: "updateWidget_",
    value: function updateWidget_() {
      var _this = this;

      if (!this.ol3dm) {
        throw new Error('Missing ol3dm');
      }

      if (!this.rotation3dEl_) {
        throw new Error('Missing rotation3dEl_');
      }

      if (!this.angle3dEl_) {
        throw new Error('Missing angle3dEl_');
      }

      if (!this.tiltRightEl_) {
        throw new Error('Missing tiltRightEl_');
      }

      if (!this.tiltLeftEl_) {
        throw new Error('Missing tiltLeftEl_');
      }

      var newRotation = this.ol3dm.getOl3d().getOlView().getRotation();

      if (shouldUpdate(this.previousRotation_, newRotation)) {
        this.rotateElement_(this.rotation3dEl_, newRotation);
        this.previousRotation_ = newRotation;
      }

      var newViewMatrix = this.ol3dm.getCesiumViewMatrix();

      if (!Cesium.Matrix4.equalsEpsilon(this.previousViewMatrix_, newViewMatrix, 1e-5)) {
        var newTilt = this.ol3dm.getTiltOnGlobe();

        if (newTilt != undefined && Number.isFinite(newTilt || 0)) {
          this.rotateElement_(this.angle3dEl_, newTilt);
          this.previousViewMatrix_ = Cesium.Matrix4.clone(newViewMatrix);
          var buffer = 0.01;

          if (newTilt - this.minTilt < buffer) {
            this.tiltRightEl_.addClass('ngeo-right-inactive');
          } else if (this.tiltRightEl_.hasClass('ngeo-right-inactive')) {
            this.tiltRightEl_.removeClass('ngeo-right-inactive');
          }

          if (this.maxTilt - newTilt < buffer) {
            this.tiltLeftEl_.addClass('ngeo-left-inactive');
          } else if (this.tiltLeftEl_.hasClass('ngeo-left-inactive')) {
            this.tiltLeftEl_.removeClass('ngeo-left-inactive');
          }
        }
      }

      this.animationFrameRequestId_ = requestAnimationFrame(function () {
        return _this.updateWidget_();
      });
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      if (this.animationFrameRequestId_) {
        cancelAnimationFrame(this.animationFrameRequestId_);
      }
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      if (this.minTilt === undefined) {
        this.minTilt = 0;
      }

      if (this.maxTilt === undefined) {
        this.maxTilt = 7 * Math.PI / 16;
      }

      if (!this.ol3dm) {
        this.ol3dm = this.olcsService_.getManager() || null;
      }

      this.tiltRightEl_ = this.element_.find('.ngeo-tilt-right');
      this.tiltLeftEl_ = this.element_.find('.ngeo-tilt-left');
      this.rotation3dEl_ = this.element_.find('.ngeo-rotation3d');
      this.angle3dEl_ = this.element_.find('.ngeo-angle3d');
      this.updateWidget_();
    }
  }, {
    key: "rotateElement_",
    value: function rotateElement_(element, angle) {
      var r = "rotate(".concat(angle, "rad)");
      element.css({
        '-moz-transform': r,
        '-webkit-transform': r,
        '-o-transform': r,
        '-ms-transform': r,
        'transform': r
      });
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      if (!this.ol3dm) {
        throw new Error('Missing ol3dm');
      }

      this.ol3dm.setHeading(Object(ol_math__WEBPACK_IMPORTED_MODULE_2__["toRadians"])(angle));
    }
  }, {
    key: "tilt",
    value: function tilt(angle) {
      if (!this.ol3dm) {
        throw new Error('Missing ol3dm');
      }

      angle = Object(ol_math__WEBPACK_IMPORTED_MODULE_2__["toRadians"])(angle);
      var tiltOnGlobe = Number(this.ol3dm.getTiltOnGlobe());

      if (tiltOnGlobe + angle < this.minTilt) {
        angle = this.minTilt - tiltOnGlobe;
      } else if (tiltOnGlobe + angle > this.maxTilt) {
        angle = this.maxTilt - tiltOnGlobe;
      }

      var scene = this.ol3dm.getCesiumScene();
      olcs_core__WEBPACK_IMPORTED_MODULE_3__["default"].rotateAroundBottomCenter(scene, angle);
    }
  }, {
    key: "zoom",
    value: function zoom(delta) {
      if (!this.ol3dm) {
        throw new Error('Missing ol3dm');
      }

      var view = this.ol3dm.getOlView();
      var cur = view.getResolution();
      var newResolution = view.constrainResolution(cur, delta);

      if (view.getAnimating()) {
        view.cancelAnimations();
      }

      view.animate({
        resolution: newResolution,
        duration: 250,
        easing: ol_easing__WEBPACK_IMPORTED_MODULE_1__["easeOut"]
      });
    }
  }]);

  return Controller;
}();

function ngeoOlcsControls3dTemplateUrlInjectable($attrs, ngeoOlcsControls3dTemplateUrl) {
  if (ngeoOlcsControls3dTemplateUrl) {
    return ngeoOlcsControls3dTemplateUrl;
  }

  var templateUrl = $attrs['ngeoOlcsControls3dTemplateUrl'];
  return templateUrl ? templateUrl : 'ngeo/olsc/controls3d';
}

myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/olsc/controls3d', __webpack_require__(/*! ./controls3d.html */ "./src/olcs/controls3d.html"));
}]);
var olscControls3dComponent = {
  bindings: {
    'minTilt': '<?',
    'maxTilt': '<?',
    'ol3dm': '<?'
  },
  controller: Controller,
  templateUrl: ngeoOlcsControls3dTemplateUrlInjectable
};
myModule.component('ngeoOlcsControls3d', olscControls3dComponent);
myModule.value('ngeoOlcsControls3dTemplateUrl', '');
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/olcs/olcsModule.js":
/*!********************************!*\
  !*** ./src/olcs/olcsModule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_olcs_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/olcs/Service */ "./src/olcs/Service.js");
/* harmony import */ var ngeo_olcs_controls3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/olcs/controls3d */ "./src/olcs/controls3d.js");



var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsModule', [ngeo_olcs_controls3d__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_olcs_Service__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ 43:
/*!*****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/simple3d.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/simple3d.js */"./examples/simple3d.js");


/***/ }),

/***/ 44:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 45:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 46:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlM2QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2ltcGxlM2QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vbGNzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9jb250cm9sczNkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvY29udHJvbHMzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9vbGNzTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzaW1wbGUzZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdC8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuIFx0Ly8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKCkge1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNDMsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjEgQ2FtcHRvY2FtcCBTQVxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0ICcuL3NpbXBsZTNkLmNzcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuXG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00nO1xuaW1wb3J0IG5nZW9PbGNzT2xjc01vZHVsZSBmcm9tICduZ2VvL29sY3Mvb2xjc01vZHVsZSc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUnO1xuaW1wb3J0IG5nZW9PbGNzTWFuYWdlciBmcm9tICduZ2VvL29sY3MvTWFuYWdlcic7XG5cbi8qKiBAdHlwZSB7YW5ndWxhci5JTW9kdWxlfSAqKi9cbmNvbnN0IG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb09sY3NPbGNzTW9kdWxlLm5hbWVdKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBuZ0luamVjdFxuICogQHBhcmFtIHthbmd1bGFyLklTY29wZX0gJHJvb3RTY29wZSBSb290IHNjb3BlLlxuICogQHBhcmFtIHtpbXBvcnQoJ25nZW8vb2xjcy9TZXJ2aWNlJykuT2xjc1NlcnZpY2V9IG5nZW9PbGNzU2VydmljZSBUaGUgc2VydmljZS5cbiAqL1xuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHJvb3RTY29wZSwgbmdlb09sY3NTZXJ2aWNlKSB7XG4gIC8qKlxuICAgKiBAdHlwZSB7aW1wb3J0KCdvbC9NYXAnKS5kZWZhdWx0fVxuICAgKi9cbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW1xuICAgICAgbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgIHpvb206IDQsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGNlc2l1bVVybCA9IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbW9kZT1kZXYnKVxuICAgID8gJ2h0dHBzOi8vY2VzaXVtLmNvbS9kb3dubG9hZHMvY2VzaXVtanMvcmVsZWFzZXMvMS42Mi9CdWlsZC9DZXNpdW1Vbm1pbmlmaWVkL0Nlc2l1bS5qcydcbiAgICA6ICdodHRwczovL2Nlc2l1bS5jb20vZG93bmxvYWRzL2Nlc2l1bWpzL3JlbGVhc2VzLzEuNjIvQnVpbGQvQ2VzaXVtL0Nlc2l1bS5qcyc7XG5cbiAgdGhpcy5vbDNkbSA9IG5ldyBuZ2VvT2xjc01hbmFnZXIoY2VzaXVtVXJsLCAkcm9vdFNjb3BlLCB7XG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgfSk7XG5cbiAgLy8gT3B0aW9uYWxseSwgdGhlIG1hbmFnZXIgY2FuIGJlIHJlZ2lzdGVyZWQgaW50byB0aGUgb2xjcyBzZXJ2aWNlXG4gIG5nZW9PbGNzU2VydmljZS5pbml0aWFsaXplKHRoaXMub2wzZG0pO1xufVxuXG5teU1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbm15TW9kdWxlLmNvbnN0YW50KCduZ2VvVXNlZEtleVJlZ2V4cCcsIFtdKTtcblxuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldDsgfSBlbHNlIHsgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgaWYgKCFiYXNlKSByZXR1cm47IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLmdldCkgeyByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgb2xjc0NvbnRyaWJNYW5hZ2VyIGZyb20gJ29sY3MvY29udHJpYi9NYW5hZ2VyJztcblxudmFyIE1hbmFnZXIgPSBmdW5jdGlvbiAoX29sY3NDb250cmliTWFuYWdlcikge1xuICBfaW5oZXJpdHMoTWFuYWdlciwgX29sY3NDb250cmliTWFuYWdlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYW5hZ2VyKTtcblxuICBmdW5jdGlvbiBNYW5hZ2VyKHVybCwgJHJvb3RTY29wZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5hZ2VyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdXJsLCBvcHRpb25zKTtcbiAgICBfdGhpcy5yb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFuYWdlciwgW3tcbiAgICBrZXk6IFwidG9nZ2xlM2RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlM2QoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHByb21pc2UgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYW5hZ2VyLnByb3RvdHlwZSksIFwidG9nZ2xlM2RcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5yb290U2NvcGVfLiRhcHBseSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbmFnZXI7XG59KG9sY3NDb250cmliTWFuYWdlcik7XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZSc7XG5pbXBvcnQgbmdlb1N0YXRlbWFuYWdlckxvY2F0aW9uIGZyb20gJ25nZW8vc3RhdGVtYW5hZ2VyL0xvY2F0aW9uJztcbmltcG9ydCB7IFBlcm1hbGluazNkUGFyYW0gfSBmcm9tICduZ2VvL29sY3MvY29uc3RhbnRzJztcbmltcG9ydCBuZ2VvU3RhdGVtYW5hZ2VyU2VydmljZSBmcm9tICduZ2VvL3N0YXRlbWFuYWdlci9TZXJ2aWNlJztcbmltcG9ydCB7IHRvRGVncmVlcyB9IGZyb20gJ29sL21hdGgnO1xuZXhwb3J0IHZhciBPbGNzU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgT2xjc1NlcnZpY2UuJGluamVjdCA9IFtcIm5nZW9EZWJvdW5jZVwiLCBcIm5nZW9Mb2NhdGlvblwiLCBcIm5nZW9TdGF0ZU1hbmFnZXJcIl07XG5cbiAgZnVuY3Rpb24gT2xjc1NlcnZpY2Uobmdlb0RlYm91bmNlLCBuZ2VvTG9jYXRpb24sIG5nZW9TdGF0ZU1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2xjc1NlcnZpY2UpO1xuXG4gICAgdGhpcy5tYW5hZ2VyXyA9IG51bGw7XG4gICAgdGhpcy5uZ2VvRGVib3VuY2VfID0gbmdlb0RlYm91bmNlO1xuICAgIHRoaXMubmdlb0xvY2F0aW9uXyA9IG5nZW9Mb2NhdGlvbjtcbiAgICB0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfID0gbmdlb1N0YXRlTWFuYWdlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPbGNzU2VydmljZSwgW3tcbiAgICBrZXk6IFwiaW5pdGlhbGl6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplKG1hbmFnZXIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMubWFuYWdlcl8gPSBtYW5hZ2VyO1xuICAgICAgdGhpcy5tYW5hZ2VyXy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2FtZXJhVG9TdGF0ZV8oKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5uZ2VvU3RhdGVNYW5hZ2VyXy5nZXRJbml0aWFsQm9vbGVhblZhbHVlKCczZF9lbmFibGVkJykpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVUb0NhbWVyYV8oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWFuYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFuYWdlcl87XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRpYWxTdGF0ZVRvQ2FtZXJhX1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsU3RhdGVUb0NhbWVyYV8oKSB7XG4gICAgICBpZiAoIXRoaXMubWFuYWdlcl8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG1hbmFnZXInKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlTWFuYWdlciA9IHRoaXMubmdlb1N0YXRlTWFuYWdlcl87XG4gICAgICB2YXIgbG9uID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkxPTik7XG4gICAgICB2YXIgbGF0ID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkxBVCk7XG4gICAgICB2YXIgZWxldmF0aW9uID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkVMRVZBVElPTik7XG4gICAgICB2YXIgaGVhZGluZyA9IHN0YXRlTWFuYWdlci5nZXRJbml0aWFsTnVtYmVyVmFsdWUoUGVybWFsaW5rM2RQYXJhbS5IRUFESU5HKSB8fCAwO1xuICAgICAgdmFyIHBpdGNoID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLlBJVENIKSB8fCAwO1xuXG4gICAgICBpZiAoIWxvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbG9uJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbGF0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBsYXQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbGV2YXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZXZhdGlvbicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyXy5zZXQzZFdpdGhWaWV3KGxvbiwgbGF0LCBlbGV2YXRpb24sIGhlYWRpbmcsIHBpdGNoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FtZXJhVG9TdGF0ZV9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FtZXJhVG9TdGF0ZV8oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLm1hbmFnZXJfKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYW5hZ2VyJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtYW5hZ2VyID0gdGhpcy5tYW5hZ2VyXztcbiAgICAgIHZhciBzY2VuZSA9IG1hbmFnZXIuZ2V0T2wzZCgpLmdldENlc2l1bVNjZW5lKCk7XG4gICAgICB2YXIgY2FtZXJhID0gc2NlbmUuY2FtZXJhO1xuICAgICAgY2FtZXJhLm1vdmVFbmQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5nZW9EZWJvdW5jZV8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnO1xuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbkNhcnRvZ3JhcGhpYztcblxuICAgICAgICBfdGhpczIubmdlb1N0YXRlTWFuYWdlcl8udXBkYXRlU3RhdGUoKF90aGlzMiRuZ2VvU3RhdGVNYW5hZyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnLCBQZXJtYWxpbmszZFBhcmFtLkVOQUJMRUQsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnLCBQZXJtYWxpbmszZFBhcmFtLkxPTiwgdG9EZWdyZWVzKHBvc2l0aW9uLmxvbmdpdHVkZSkudG9GaXhlZCg1KSksIF9kZWZpbmVQcm9wZXJ0eShfdGhpczIkbmdlb1N0YXRlTWFuYWcsIFBlcm1hbGluazNkUGFyYW0uTEFULCB0b0RlZ3JlZXMocG9zaXRpb24ubGF0aXR1ZGUpLnRvRml4ZWQoNSkpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnLCBQZXJtYWxpbmszZFBhcmFtLkVMRVZBVElPTiwgcG9zaXRpb24uaGVpZ2h0LnRvRml4ZWQoMCkpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnLCBQZXJtYWxpbmszZFBhcmFtLkhFQURJTkcsIHRvRGVncmVlcyhjYW1lcmEuaGVhZGluZykudG9GaXhlZCgzKSksIF9kZWZpbmVQcm9wZXJ0eShfdGhpczIkbmdlb1N0YXRlTWFuYWcsIFBlcm1hbGluazNkUGFyYW0uUElUQ0gsIHRvRGVncmVlcyhjYW1lcmEucGl0Y2gpLnRvRml4ZWQoMykpLCBfdGhpczIkbmdlb1N0YXRlTWFuYWcpKTtcbiAgICAgIH0sIDEwMDAsIHRydWUpKTtcbiAgICAgIHRoaXMubWFuYWdlcl8ub24oJ3RvZ2dsZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5pczNkRW5hYmxlZCgpKSB7XG4gICAgICAgICAgX3RoaXMyLnJlbW92ZTNkU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmUzZFN0YXRlX1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUzZFN0YXRlXygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW1LZXlzV2l0aFByZWZpeChQZXJtYWxpbmszZFBhcmFtLlBSRUZJWCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzMy5uZ2VvU3RhdGVNYW5hZ2VyXy5kZWxldGVQYXJhbShrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9sY3NTZXJ2aWNlO1xufSgpO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW25nZW9NaXNjRGVib3VuY2UubmFtZSwgbmdlb1N0YXRlbWFuYWdlckxvY2F0aW9uLm5hbWUsIG5nZW9TdGF0ZW1hbmFnZXJTZXJ2aWNlLm5hbWVdKS5zZXJ2aWNlKCduZ2VvT2xjc1NlcnZpY2UnLCBPbGNzU2VydmljZSk7XG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTsiLCJleHBvcnQgdmFyIFBlcm1hbGluazNkUGFyYW0gPSB7XG4gIEVOQUJMRUQ6ICczZF9lbmFibGVkJyxcbiAgTE9OOiAnM2RfbG9uJyxcbiAgTEFUOiAnM2RfbGF0JyxcbiAgRUxFVkFUSU9OOiAnM2RfZWxldmF0aW9uJyxcbiAgSEVBRElORzogJzNkX2hlYWRpbmcnLFxuICBQSVRDSDogJzNkX3BpdGNoJyxcbiAgUFJFRklYOiAnM2RfJ1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibmdlby10b29sc1wiPlxcbiAgPGRpdiBjbGFzcz1cIm5nZW8tYW5nbGVcIj48ZGl2IGNsYXNzPVwibmdlby1hbmdsZTNkXCI+PC9kaXY+PC9kaXY+XFxuICA8YnV0dG9uIGNsYXNzPVwibmdlby1sZWZ0IG5nZW8tdGlsdC1sZWZ0XCIgbmctY2xpY2s9XCIkY3RybC50aWx0KDUpXCI+PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVwibmdlby1yaWdodCBuZ2VvLXRpbHQtcmlnaHRcIiBuZy1jbGljaz1cIiRjdHJsLnRpbHQoLTUpXCI+PC9idXR0b24+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cIm5nZW8tem9vbVwiPlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm9sLXpvb20taW5cIiBuZy1jbGljaz1cIiRjdHJsLnpvb20oMSlcIj48L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XCJvbC16b29tLW91dFwiIG5nLWNsaWNrPVwiJGN0cmwuem9vbSgtMSlcIj48L2J1dHRvbj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwibmdlby10b29sc1wiPlxcbiAgPGRpdiBjbGFzcz1cIm5nZW8tcm90YXRpb25cIj48ZGl2IGNsYXNzPVwibmdlby1yb3RhdGlvbjNkXCI+PC9kaXY+PC9kaXY+XFxuICA8YnV0dG9uIGNsYXNzPVwibmdlby1sZWZ0XCIgbmctY2xpY2s9XCIkY3RybC5yb3RhdGUoLTE1KVwiPjwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tcmlnaHRcIiBuZy1jbGljaz1cIiRjdHJsLnJvdGF0ZSgxNSlcIj48L2J1dHRvbj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59Iiwibmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmxJbmplY3RhYmxlLiRpbmplY3QgPSBbXCIkYXR0cnNcIiwgXCJuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybFwiXTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCAqIGFzIG9sRWFzaW5nIGZyb20gJ29sL2Vhc2luZyc7XG5pbXBvcnQgeyB0b1JhZGlhbnMgfSBmcm9tICdvbC9tYXRoJztcbmltcG9ydCBvbGNzQ29yZSBmcm9tICdvbGNzL2NvcmUnO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PbGNzQ29udHJvbHMzZCcsIFtdKTtcblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlKG9sZGVyLCBuZXdlcikge1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG5ld2VyKSAmJiAoIU51bWJlci5pc0Zpbml0ZShvbGRlcikgfHwgTWF0aC5hYnMobmV3ZXIgLSBvbGRlcikgPiAwLjA1KTtcbn1cblxuZXhwb3J0IHZhciBDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICBDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkZWxlbWVudFwiLCBcIm5nZW9PbGNzU2VydmljZVwiXTtcblxuICBmdW5jdGlvbiBDb250cm9sbGVyKCRlbGVtZW50LCBuZ2VvT2xjc1NlcnZpY2UpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmVsZW1lbnRfID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vbDNkbSA9IG51bGw7XG4gICAgdGhpcy5taW5UaWx0ID0gLTE7XG4gICAgdGhpcy5tYXhUaWx0ID0gLTE7XG4gICAgdGhpcy50aWx0UmlnaHRFbF8gPSBudWxsO1xuICAgIHRoaXMudGlsdExlZnRFbF8gPSBudWxsO1xuICAgIHRoaXMucm90YXRpb24zZEVsXyA9IG51bGw7XG4gICAgdGhpcy5hbmdsZTNkRWxfID0gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzUm90YXRpb25fID0gLTE7XG4gICAgdGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfID0gbnVsbDtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUmVxdWVzdElkXyA9IC0xO1xuICAgIHRoaXMub2xjc1NlcnZpY2VfID0gbmdlb09sY3NTZXJ2aWNlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiBcInVwZGF0ZVdpZGdldF9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlV2lkZ2V0XygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5vbDNkbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgb2wzZG0nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnJvdGF0aW9uM2RFbF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJvdGF0aW9uM2RFbF8nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmFuZ2xlM2RFbF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuZ2xlM2RFbF8nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnRpbHRSaWdodEVsXykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGlsdFJpZ2h0RWxfJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy50aWx0TGVmdEVsXykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGlsdExlZnRFbF8nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1JvdGF0aW9uID0gdGhpcy5vbDNkbS5nZXRPbDNkKCkuZ2V0T2xWaWV3KCkuZ2V0Um90YXRpb24oKTtcblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSh0aGlzLnByZXZpb3VzUm90YXRpb25fLCBuZXdSb3RhdGlvbikpIHtcbiAgICAgICAgdGhpcy5yb3RhdGVFbGVtZW50Xyh0aGlzLnJvdGF0aW9uM2RFbF8sIG5ld1JvdGF0aW9uKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1JvdGF0aW9uXyA9IG5ld1JvdGF0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Vmlld01hdHJpeCA9IHRoaXMub2wzZG0uZ2V0Q2VzaXVtVmlld01hdHJpeCgpO1xuXG4gICAgICBpZiAoIUNlc2l1bS5NYXRyaXg0LmVxdWFsc0Vwc2lsb24odGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfLCBuZXdWaWV3TWF0cml4LCAxZS01KSkge1xuICAgICAgICB2YXIgbmV3VGlsdCA9IHRoaXMub2wzZG0uZ2V0VGlsdE9uR2xvYmUoKTtcblxuICAgICAgICBpZiAobmV3VGlsdCAhPSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzRmluaXRlKG5ld1RpbHQgfHwgMCkpIHtcbiAgICAgICAgICB0aGlzLnJvdGF0ZUVsZW1lbnRfKHRoaXMuYW5nbGUzZEVsXywgbmV3VGlsdCk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfID0gQ2VzaXVtLk1hdHJpeDQuY2xvbmUobmV3Vmlld01hdHJpeCk7XG4gICAgICAgICAgdmFyIGJ1ZmZlciA9IDAuMDE7XG5cbiAgICAgICAgICBpZiAobmV3VGlsdCAtIHRoaXMubWluVGlsdCA8IGJ1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy50aWx0UmlnaHRFbF8uYWRkQ2xhc3MoJ25nZW8tcmlnaHQtaW5hY3RpdmUnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGlsdFJpZ2h0RWxfLmhhc0NsYXNzKCduZ2VvLXJpZ2h0LWluYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMudGlsdFJpZ2h0RWxfLnJlbW92ZUNsYXNzKCduZ2VvLXJpZ2h0LWluYWN0aXZlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMubWF4VGlsdCAtIG5ld1RpbHQgPCBidWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGlsdExlZnRFbF8uYWRkQ2xhc3MoJ25nZW8tbGVmdC1pbmFjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50aWx0TGVmdEVsXy5oYXNDbGFzcygnbmdlby1sZWZ0LWluYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMudGlsdExlZnRFbF8ucmVtb3ZlQ2xhc3MoJ25nZW8tbGVmdC1pbmFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUmVxdWVzdElkXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVXaWRnZXRfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiJG9uRGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAkb25EZXN0cm95KCkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWVSZXF1ZXN0SWRfKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVSZXF1ZXN0SWRfKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiJG9uSW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAkb25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMubWluVGlsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWluVGlsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1heFRpbHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1heFRpbHQgPSA3ICogTWF0aC5QSSAvIDE2O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub2wzZG0pIHtcbiAgICAgICAgdGhpcy5vbDNkbSA9IHRoaXMub2xjc1NlcnZpY2VfLmdldE1hbmFnZXIoKSB8fCBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRpbHRSaWdodEVsXyA9IHRoaXMuZWxlbWVudF8uZmluZCgnLm5nZW8tdGlsdC1yaWdodCcpO1xuICAgICAgdGhpcy50aWx0TGVmdEVsXyA9IHRoaXMuZWxlbWVudF8uZmluZCgnLm5nZW8tdGlsdC1sZWZ0Jyk7XG4gICAgICB0aGlzLnJvdGF0aW9uM2RFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLXJvdGF0aW9uM2QnKTtcbiAgICAgIHRoaXMuYW5nbGUzZEVsXyA9IHRoaXMuZWxlbWVudF8uZmluZCgnLm5nZW8tYW5nbGUzZCcpO1xuICAgICAgdGhpcy51cGRhdGVXaWRnZXRfKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJvdGF0ZUVsZW1lbnRfXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdGF0ZUVsZW1lbnRfKGVsZW1lbnQsIGFuZ2xlKSB7XG4gICAgICB2YXIgciA9IFwicm90YXRlKFwiLmNvbmNhdChhbmdsZSwgXCJyYWQpXCIpO1xuICAgICAgZWxlbWVudC5jc3Moe1xuICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiByLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByLFxuICAgICAgICAnLW8tdHJhbnNmb3JtJzogcixcbiAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiByLFxuICAgICAgICAndHJhbnNmb3JtJzogclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJvdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICAgIGlmICghdGhpcy5vbDNkbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgb2wzZG0nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbDNkbS5zZXRIZWFkaW5nKHRvUmFkaWFucyhhbmdsZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aWx0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbHQoYW5nbGUpIHtcbiAgICAgIGlmICghdGhpcy5vbDNkbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgb2wzZG0nKTtcbiAgICAgIH1cblxuICAgICAgYW5nbGUgPSB0b1JhZGlhbnMoYW5nbGUpO1xuICAgICAgdmFyIHRpbHRPbkdsb2JlID0gTnVtYmVyKHRoaXMub2wzZG0uZ2V0VGlsdE9uR2xvYmUoKSk7XG5cbiAgICAgIGlmICh0aWx0T25HbG9iZSArIGFuZ2xlIDwgdGhpcy5taW5UaWx0KSB7XG4gICAgICAgIGFuZ2xlID0gdGhpcy5taW5UaWx0IC0gdGlsdE9uR2xvYmU7XG4gICAgICB9IGVsc2UgaWYgKHRpbHRPbkdsb2JlICsgYW5nbGUgPiB0aGlzLm1heFRpbHQpIHtcbiAgICAgICAgYW5nbGUgPSB0aGlzLm1heFRpbHQgLSB0aWx0T25HbG9iZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjZW5lID0gdGhpcy5vbDNkbS5nZXRDZXNpdW1TY2VuZSgpO1xuICAgICAgb2xjc0NvcmUucm90YXRlQXJvdW5kQm90dG9tQ2VudGVyKHNjZW5lLCBhbmdsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInpvb21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gem9vbShkZWx0YSkge1xuICAgICAgaWYgKCF0aGlzLm9sM2RtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBvbDNkbScpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlldyA9IHRoaXMub2wzZG0uZ2V0T2xWaWV3KCk7XG4gICAgICB2YXIgY3VyID0gdmlldy5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICB2YXIgbmV3UmVzb2x1dGlvbiA9IHZpZXcuY29uc3RyYWluUmVzb2x1dGlvbihjdXIsIGRlbHRhKTtcblxuICAgICAgaWYgKHZpZXcuZ2V0QW5pbWF0aW5nKCkpIHtcbiAgICAgICAgdmlldy5jYW5jZWxBbmltYXRpb25zKCk7XG4gICAgICB9XG5cbiAgICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICAgIHJlc29sdXRpb246IG5ld1Jlc29sdXRpb24sXG4gICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgIGVhc2luZzogb2xFYXNpbmcuZWFzZU91dFxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KCk7XG5cbmZ1bmN0aW9uIG5nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsSW5qZWN0YWJsZSgkYXR0cnMsIG5nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsKSB7XG4gIGlmIChuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCkge1xuICAgIHJldHVybiBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybDtcbiAgfVxuXG4gIHZhciB0ZW1wbGF0ZVVybCA9ICRhdHRyc1snbmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmwnXTtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsID8gdGVtcGxhdGVVcmwgOiAnbmdlby9vbHNjL2NvbnRyb2xzM2QnO1xufVxuXG5teU1vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnbmdlby9vbHNjL2NvbnRyb2xzM2QnLCByZXF1aXJlKCcuL2NvbnRyb2xzM2QuaHRtbCcpKTtcbn1dKTtcbnZhciBvbHNjQ29udHJvbHMzZENvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICAnbWluVGlsdCc6ICc8PycsXG4gICAgJ21heFRpbHQnOiAnPD8nLFxuICAgICdvbDNkbSc6ICc8PydcbiAgfSxcbiAgY29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgdGVtcGxhdGVVcmw6IG5nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsSW5qZWN0YWJsZVxufTtcbm15TW9kdWxlLmNvbXBvbmVudCgnbmdlb09sY3NDb250cm9sczNkJywgb2xzY0NvbnRyb2xzM2RDb21wb25lbnQpO1xubXlNb2R1bGUudmFsdWUoJ25nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsJywgJycpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgU2VydmljZSBmcm9tICduZ2VvL29sY3MvU2VydmljZSc7XG5pbXBvcnQgY29udHJvbCBmcm9tICduZ2VvL29sY3MvY29udHJvbHMzZCc7XG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09sY3NNb2R1bGUnLCBbY29udHJvbC5uYW1lLCBTZXJ2aWNlLm5hbWVdKTtcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==