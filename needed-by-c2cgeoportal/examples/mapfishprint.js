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
/******/ 		"mapfishprint": 0
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
/******/ 	deferredModules.push([22,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mapfishprint.js":
/*!**********************************!*\
  !*** ./examples/mapfishprint.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url */ "./examples/url.js");
/* harmony import */ var ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/proj/EPSG_2056 */ "./src/proj/EPSG_2056.js");
/* harmony import */ var ngeo_print_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/print/Service */ "./src/print/Service.js");
/* harmony import */ var ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/print/Utils */ "./src/print/Utils.js");
/* harmony import */ var ngeo_print_Mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/print/Mask */ "./src/print/Mask.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_layer_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Image */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_ImageWMS__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/ImageWMS */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
// The MIT License (MIT)
//
// Copyright (c) 2015-2021 Camptocamp SA
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
const appmodule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', [
  'gettext',
  ngeo_map_module__WEBPACK_IMPORTED_MODULE_13__["default"].name,
  ngeo_print_Service__WEBPACK_IMPORTED_MODULE_3__["default"].name,
  ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_4__["default"].name,
]);

/**
 * @private
 * @hidden
 */
const PRINT_SCALES_ = [100, 250, 500, 2500, 5000, 10000, 25000, 50000, 100000, 500000];

/**
 * @private
 * @hidden
 */
const PRINT_FORMAT_ = 'pdf';

/**
 * @private
 * @hidden
 */
const PRINT_LAYOUT_ = '1 A4 portrait';

/**
 * @private
 * @hidden
 */
const PRINT_DPI_ = 72;

/**
 * @private
 * @hidden
 * @type {import('ol/size').Size}
 */
const PRINT_PAPER_SIZE_ = [555, 675];

/**
 * @class
 * @param {angular.ITimeoutService} $timeout Angular timeout service.
 * @param {import('ngeo/print/Service').CreatePrint} ngeoCreatePrint The ngeo Create Print function.
 * @param {import('ngeo/print/Utils').PrintUtils} ngeoPrintUtils The ngeo PrintUtils service.
 * @ngInject
 * @hidden
 */
function MainController($timeout, ngeoCreatePrint, ngeoPrintUtils) {
  const source = new ol_source_ImageWMS__WEBPACK_IMPORTED_MODULE_11__["default"]({
    url: _url__WEBPACK_IMPORTED_MODULE_1__["MAPSERVER_PROXY"],
    params: {
      'LAYERS': 'default',
    },
    serverType: 'mapserver',
  });
  /**
   * @type {import('ol/Map').default}
   */
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_6__["default"]({
    layers: [
      new ol_layer_Image__WEBPACK_IMPORTED_MODULE_9__["default"]({
        source,
      }),
      new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_10__["default"]({
        source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_12__["default"]({
          url: 'data/polygon-swizerland.json',
          format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_8__["default"]({
            dataProjection: ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_2__["default"],
          }),
        }),
      }),
    ],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_7__["default"]({
      projection: ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_2__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1],
      center: [2537635, 1152640],
      zoom: 3,
    }),
  });

  /**
   * Text to display a "loading" message while waiting for the report.
   *
   * @type {string}
   */
  this.printState = '';

  /**
   * @type {angular.ITimeoutService}
   */
  this.$timeout_ = $timeout;

  /**
   * @type {import('ngeo/print/Service').PrintService}
   */
  this.print_ = ngeoCreatePrint(_url__WEBPACK_IMPORTED_MODULE_1__["PRINT_PROXY"]);

  /**
   * @type {import('ngeo/print/Utils').PrintUtils}
   */
  this.printUtils_ = ngeoPrintUtils;

  this.maskLayer_ = new ngeo_print_Mask__WEBPACK_IMPORTED_MODULE_5__["default"]();

  this.maskLayer_.getSize = () => PRINT_PAPER_SIZE_;
  this.maskLayer_.getScale = (frameState) => {
    const mapSize = frameState.size;
    const mapResolution = frameState.viewState.resolution;
    // we test mapSize and mapResolution just to please the compiler
    if (mapSize !== undefined && mapResolution !== undefined) {
      return ngeoPrintUtils.getOptimalScale(mapSize, mapResolution, PRINT_PAPER_SIZE_, PRINT_SCALES_);
    } else {
      return PRINT_SCALES_[0];
    }
  };
  this.map.addLayer(this.maskLayer_);
}

/**
 */
MainController.prototype.print = function () {
  const map = this.map;

  const mapSize = map.getSize();
  const viewResolution = map.getView().getResolution();

  // we test mapSize and viewResolution just to please the compiler
  const scale =
    mapSize !== undefined && viewResolution !== undefined
      ? this.printUtils_.getOptimalScale(mapSize, viewResolution, PRINT_PAPER_SIZE_, PRINT_SCALES_)
      : PRINT_SCALES_[0];

  const rotation = map.getView().getRotation();
  const dpi = PRINT_DPI_;
  const format = PRINT_FORMAT_;
  const layout = PRINT_LAYOUT_;

  this.printState = 'Printing...';

  const spec = this.print_.createSpec(map, scale, rotation, dpi, layout, format, {
    'datasource': [],
    'debug': 0,
    'comments': 'My comments',
    'title': 'My print',
  });

  this.print_
    .createReport(spec)
    .then(this.handleCreateReportSuccess_.bind(this), this.handleCreateReportError_.bind(this));
};

/**
 * @param {angular.IHttpResponse<import('ngeo/print/mapfish-print-v3').MapFishPrintReportResponse>} resp
 *    Response.
 */
MainController.prototype.handleCreateReportSuccess_ = function (resp) {
  this.getStatus_(resp.data.ref);
};

/**
 * @param {string} ref Ref.
 */
MainController.prototype.getStatus_ = function (ref) {
  this.print_
    .getStatus(ref)
    .then(this.handleGetStatusSuccess_.bind(this, ref), this.handleGetStatusError_.bind(this));
};

/**
 * @param {angular.IHttpResponse<import('ngeo/print/mapfish-print-v3').MapFishPrintStatusResponse>} resp
 *    Response.
 */
MainController.prototype.handleCreateReportError_ = function (resp) {
  this.printState = 'Print error';
};

/**
 * @param {string} ref Ref.
 * @param {angular.IHttpResponse<import('ngeo/print/mapfish-print-v3').MapFishPrintStatusResponse>} resp
 *    Response.
 */
MainController.prototype.handleGetStatusSuccess_ = function (ref, resp) {
  const mfResp = resp.data;
  const done = mfResp.done;
  if (done) {
    // The report is ready. Open it by changing the window location.
    this.printState = '';
    window.location.href = this.print_.getReportUrl(ref);
  } else {
    // The report is not ready yet. Check again in 1s.
    this.$timeout_(
      () => {
        this.getStatus_(ref);
      },
      1000,
      false
    );
  }
};

/**
 * @param {angular.IHttpResponse<import('ngeo/print/mapfish-print-v3').MapFishPrintStatusResponse>} resp
 *    Response.
 */
MainController.prototype.handleGetStatusError_ = function (resp) {
  this.printState = 'Print error';
};

appmodule.controller('MainController', MainController);

appmodule.constant('ngeoTilesPreloadingLimit', 0);

/* harmony default export */ __webpack_exports__["default"] = (module);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/print/Mask.js":
/*!***************************!*\
  !*** ./src/print/Mask.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var ol_layer_Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Layer */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/dom */ "./node_modules/ol/dom.js");
/* harmony import */ var ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/print/Utils */ "./src/print/Utils.js");
/* harmony import */ var ol_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/math */ "./node_modules/ol/math.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Mask = function (_Layer) {
  _inherits(Mask, _Layer);

  var _super = _createSuper(Mask);

  function Mask() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Mask);

    _this = _super.call(this, options);
    _this.context_ = Object(ol_dom__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext2D"])();
    _this.context_.canvas.style.opacity = '0.5';
    _this.context_.canvas.style.position = 'absolute';
    _this.getScale;
    _this.getSize;
    _this.getRotation;
    return _this;
  }

  _createClass(Mask, [{
    key: "render",
    value: function render(frameState) {
      var cwidth = frameState.size[0];
      this.context_.canvas.width = cwidth;
      var cheight = frameState.size[1];
      this.context_.canvas.height = cheight;
      var center = [cwidth / 2, cheight / 2];
      this.context_.beginPath();
      this.context_.moveTo(0, 0);
      this.context_.lineTo(cwidth, 0);
      this.context_.lineTo(cwidth, cheight);
      this.context_.lineTo(0, cheight);
      this.context_.lineTo(0, 0);
      this.context_.closePath();
      var size = this.getSize();
      var height = size[1];
      var width = size[0];
      var scale = this.getScale(frameState);
      var resolution = frameState.viewState.resolution;
      var extentHalfWidth = width / ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_2__["DOTS_PER_INCH"] / ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_2__["INCHES_PER_METER"] * scale / resolution / 2;
      var extentHalfHeight = height / ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_2__["DOTS_PER_INCH"] / ngeo_print_Utils__WEBPACK_IMPORTED_MODULE_2__["INCHES_PER_METER"] * scale / resolution / 2;
      var rotation = this.getRotation !== undefined ? Object(ol_math__WEBPACK_IMPORTED_MODULE_3__["toRadians"])(this.getRotation()) : 0;
      var diagonal = Math.sqrt(Math.pow(extentHalfWidth, 2) + Math.pow(extentHalfHeight, 2));
      var gamma = Math.atan(extentHalfHeight / extentHalfWidth) - rotation;
      var omega = Math.atan(extentHalfWidth / extentHalfHeight) - rotation;
      var x1 = center[0] - Math.cos(gamma) * diagonal;
      var y1 = center[1] + Math.sin(gamma) * diagonal;
      var x2 = center[0] + Math.sin(omega) * diagonal;
      var y2 = center[1] + Math.cos(omega) * diagonal;
      var x3 = center[0] + Math.cos(gamma) * diagonal;
      var y3 = center[1] - Math.sin(gamma) * diagonal;
      var x4 = center[0] - Math.sin(omega) * diagonal;
      var y4 = center[1] - Math.cos(omega) * diagonal;
      this.context_.moveTo(x1, y1);
      this.context_.lineTo(x2, y2);
      this.context_.lineTo(x3, y3);
      this.context_.lineTo(x4, y4);
      this.context_.lineTo(x1, y1);
      this.context_.closePath();
      this.context_.fillStyle = '#000';
      this.context_.fill();
      return this.context_.canvas;
    }
  }]);

  return Mask;
}(ol_layer_Layer__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 22:
/*!*********************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mapfishprint.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/mapfishprint.js */"./examples/mapfishprint.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwZmlzaHByaW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL21hcGZpc2hwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQvTWFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFwZmlzaHByaW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0Ly8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4gXHQvLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoKSB7XG4gXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsyMixcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyMSBDYW1wdG9jYW1wIFNBXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7TUFQU0VSVkVSX1BST1hZLCBQUklOVF9QUk9YWX0gZnJvbSAnLi91cmwnO1xuaW1wb3J0IEVQU0cyMDU2IGZyb20gJ25nZW8vcHJvai9FUFNHXzIwNTYnO1xuXG5pbXBvcnQgbmdlb1ByaW50U2VydmljZSBmcm9tICduZ2VvL3ByaW50L1NlcnZpY2UnO1xuaW1wb3J0IG5nZW9QcmludFV0aWxzIGZyb20gJ25nZW8vcHJpbnQvVXRpbHMnO1xuaW1wb3J0IE1hc2tMYXllciBmcm9tICduZ2VvL3ByaW50L01hc2snO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IG9sRm9ybWF0R2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XG5pbXBvcnQgb2xMYXllckltYWdlIGZyb20gJ29sL2xheWVyL0ltYWdlJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvcic7XG5pbXBvcnQgb2xTb3VyY2VJbWFnZVdNUyBmcm9tICdvbC9zb3VyY2UvSW1hZ2VXTVMnO1xuaW1wb3J0IG9sU291cmNlVmVjdG9yIGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlJztcblxuLyoqIEB0eXBlIHthbmd1bGFyLklNb2R1bGV9ICoqL1xuY29uc3QgYXBwbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgJ2dldHRleHQnLFxuICBuZ2VvTWFwTW9kdWxlLm5hbWUsXG4gIG5nZW9QcmludFNlcnZpY2UubmFtZSxcbiAgbmdlb1ByaW50VXRpbHMubmFtZSxcbl0pO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFBSSU5UX1NDQUxFU18gPSBbMTAwLCAyNTAsIDUwMCwgMjUwMCwgNTAwMCwgMTAwMDAsIDI1MDAwLCA1MDAwMCwgMTAwMDAwLCA1MDAwMDBdO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFBSSU5UX0ZPUk1BVF8gPSAncGRmJztcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQGhpZGRlblxuICovXG5jb25zdCBQUklOVF9MQVlPVVRfID0gJzEgQTQgcG9ydHJhaXQnO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IFBSSU5UX0RQSV8gPSA3MjtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQGhpZGRlblxuICogQHR5cGUge2ltcG9ydCgnb2wvc2l6ZScpLlNpemV9XG4gKi9cbmNvbnN0IFBSSU5UX1BBUEVSX1NJWkVfID0gWzU1NSwgNjc1XTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7YW5ndWxhci5JVGltZW91dFNlcnZpY2V9ICR0aW1lb3V0IEFuZ3VsYXIgdGltZW91dCBzZXJ2aWNlLlxuICogQHBhcmFtIHtpbXBvcnQoJ25nZW8vcHJpbnQvU2VydmljZScpLkNyZWF0ZVByaW50fSBuZ2VvQ3JlYXRlUHJpbnQgVGhlIG5nZW8gQ3JlYXRlIFByaW50IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoJ25nZW8vcHJpbnQvVXRpbHMnKS5QcmludFV0aWxzfSBuZ2VvUHJpbnRVdGlscyBUaGUgbmdlbyBQcmludFV0aWxzIHNlcnZpY2UuXG4gKiBAbmdJbmplY3RcbiAqIEBoaWRkZW5cbiAqL1xuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHRpbWVvdXQsIG5nZW9DcmVhdGVQcmludCwgbmdlb1ByaW50VXRpbHMpIHtcbiAgY29uc3Qgc291cmNlID0gbmV3IG9sU291cmNlSW1hZ2VXTVMoe1xuICAgIHVybDogTUFQU0VSVkVSX1BST1hZLFxuICAgIHBhcmFtczoge1xuICAgICAgJ0xBWUVSUyc6ICdkZWZhdWx0JyxcbiAgICB9LFxuICAgIHNlcnZlclR5cGU6ICdtYXBzZXJ2ZXInLFxuICB9KTtcbiAgLyoqXG4gICAqIEB0eXBlIHtpbXBvcnQoJ29sL01hcCcpLmRlZmF1bHR9XG4gICAqL1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbXG4gICAgICBuZXcgb2xMYXllckltYWdlKHtcbiAgICAgICAgc291cmNlLFxuICAgICAgfSksXG4gICAgICBuZXcgb2xMYXllclZlY3Rvcih7XG4gICAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlVmVjdG9yKHtcbiAgICAgICAgICB1cmw6ICdkYXRhL3BvbHlnb24tc3dpemVybGFuZC5qc29uJyxcbiAgICAgICAgICBmb3JtYXQ6IG5ldyBvbEZvcm1hdEdlb0pTT04oe1xuICAgICAgICAgICAgZGF0YVByb2plY3Rpb246IEVQU0cyMDU2LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBwcm9qZWN0aW9uOiBFUFNHMjA1NixcbiAgICAgIHJlc29sdXRpb25zOiBbMjAwLCAxMDAsIDUwLCAyMCwgMTAsIDUsIDIuNSwgMiwgMV0sXG4gICAgICBjZW50ZXI6IFsyNTM3NjM1LCAxMTUyNjQwXSxcbiAgICAgIHpvb206IDMsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgYSBcImxvYWRpbmdcIiBtZXNzYWdlIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSByZXBvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLnByaW50U3RhdGUgPSAnJztcblxuICAvKipcbiAgICogQHR5cGUge2FuZ3VsYXIuSVRpbWVvdXRTZXJ2aWNlfVxuICAgKi9cbiAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcblxuICAvKipcbiAgICogQHR5cGUge2ltcG9ydCgnbmdlby9wcmludC9TZXJ2aWNlJykuUHJpbnRTZXJ2aWNlfVxuICAgKi9cbiAgdGhpcy5wcmludF8gPSBuZ2VvQ3JlYXRlUHJpbnQoUFJJTlRfUFJPWFkpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7aW1wb3J0KCduZ2VvL3ByaW50L1V0aWxzJykuUHJpbnRVdGlsc31cbiAgICovXG4gIHRoaXMucHJpbnRVdGlsc18gPSBuZ2VvUHJpbnRVdGlscztcblxuICB0aGlzLm1hc2tMYXllcl8gPSBuZXcgTWFza0xheWVyKCk7XG5cbiAgdGhpcy5tYXNrTGF5ZXJfLmdldFNpemUgPSAoKSA9PiBQUklOVF9QQVBFUl9TSVpFXztcbiAgdGhpcy5tYXNrTGF5ZXJfLmdldFNjYWxlID0gKGZyYW1lU3RhdGUpID0+IHtcbiAgICBjb25zdCBtYXBTaXplID0gZnJhbWVTdGF0ZS5zaXplO1xuICAgIGNvbnN0IG1hcFJlc29sdXRpb24gPSBmcmFtZVN0YXRlLnZpZXdTdGF0ZS5yZXNvbHV0aW9uO1xuICAgIC8vIHdlIHRlc3QgbWFwU2l6ZSBhbmQgbWFwUmVzb2x1dGlvbiBqdXN0IHRvIHBsZWFzZSB0aGUgY29tcGlsZXJcbiAgICBpZiAobWFwU2l6ZSAhPT0gdW5kZWZpbmVkICYmIG1hcFJlc29sdXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5nZW9QcmludFV0aWxzLmdldE9wdGltYWxTY2FsZShtYXBTaXplLCBtYXBSZXNvbHV0aW9uLCBQUklOVF9QQVBFUl9TSVpFXywgUFJJTlRfU0NBTEVTXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQUklOVF9TQ0FMRVNfWzBdO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXNrTGF5ZXJfKTtcbn1cblxuLyoqXG4gKi9cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFwID0gdGhpcy5tYXA7XG5cbiAgY29uc3QgbWFwU2l6ZSA9IG1hcC5nZXRTaXplKCk7XG4gIGNvbnN0IHZpZXdSZXNvbHV0aW9uID0gbWFwLmdldFZpZXcoKS5nZXRSZXNvbHV0aW9uKCk7XG5cbiAgLy8gd2UgdGVzdCBtYXBTaXplIGFuZCB2aWV3UmVzb2x1dGlvbiBqdXN0IHRvIHBsZWFzZSB0aGUgY29tcGlsZXJcbiAgY29uc3Qgc2NhbGUgPVxuICAgIG1hcFNpemUgIT09IHVuZGVmaW5lZCAmJiB2aWV3UmVzb2x1dGlvbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMucHJpbnRVdGlsc18uZ2V0T3B0aW1hbFNjYWxlKG1hcFNpemUsIHZpZXdSZXNvbHV0aW9uLCBQUklOVF9QQVBFUl9TSVpFXywgUFJJTlRfU0NBTEVTXylcbiAgICAgIDogUFJJTlRfU0NBTEVTX1swXTtcblxuICBjb25zdCByb3RhdGlvbiA9IG1hcC5nZXRWaWV3KCkuZ2V0Um90YXRpb24oKTtcbiAgY29uc3QgZHBpID0gUFJJTlRfRFBJXztcbiAgY29uc3QgZm9ybWF0ID0gUFJJTlRfRk9STUFUXztcbiAgY29uc3QgbGF5b3V0ID0gUFJJTlRfTEFZT1VUXztcblxuICB0aGlzLnByaW50U3RhdGUgPSAnUHJpbnRpbmcuLi4nO1xuXG4gIGNvbnN0IHNwZWMgPSB0aGlzLnByaW50Xy5jcmVhdGVTcGVjKG1hcCwgc2NhbGUsIHJvdGF0aW9uLCBkcGksIGxheW91dCwgZm9ybWF0LCB7XG4gICAgJ2RhdGFzb3VyY2UnOiBbXSxcbiAgICAnZGVidWcnOiAwLFxuICAgICdjb21tZW50cyc6ICdNeSBjb21tZW50cycsXG4gICAgJ3RpdGxlJzogJ015IHByaW50JyxcbiAgfSk7XG5cbiAgdGhpcy5wcmludF9cbiAgICAuY3JlYXRlUmVwb3J0KHNwZWMpXG4gICAgLnRoZW4odGhpcy5oYW5kbGVDcmVhdGVSZXBvcnRTdWNjZXNzXy5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZUNyZWF0ZVJlcG9ydEVycm9yXy5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHthbmd1bGFyLklIdHRwUmVzcG9uc2U8aW1wb3J0KCduZ2VvL3ByaW50L21hcGZpc2gtcHJpbnQtdjMnKS5NYXBGaXNoUHJpbnRSZXBvcnRSZXNwb25zZT59IHJlc3BcbiAqICAgIFJlc3BvbnNlLlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlQ3JlYXRlUmVwb3J0U3VjY2Vzc18gPSBmdW5jdGlvbiAocmVzcCkge1xuICB0aGlzLmdldFN0YXR1c18ocmVzcC5kYXRhLnJlZik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgUmVmLlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0U3RhdHVzXyA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdGhpcy5wcmludF9cbiAgICAuZ2V0U3RhdHVzKHJlZilcbiAgICAudGhlbih0aGlzLmhhbmRsZUdldFN0YXR1c1N1Y2Nlc3NfLmJpbmQodGhpcywgcmVmKSwgdGhpcy5oYW5kbGVHZXRTdGF0dXNFcnJvcl8uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW5ndWxhci5JSHR0cFJlc3BvbnNlPGltcG9ydCgnbmdlby9wcmludC9tYXBmaXNoLXByaW50LXYzJykuTWFwRmlzaFByaW50U3RhdHVzUmVzcG9uc2U+fSByZXNwXG4gKiAgICBSZXNwb25zZS5cbiAqL1xuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZUNyZWF0ZVJlcG9ydEVycm9yXyA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gIHRoaXMucHJpbnRTdGF0ZSA9ICdQcmludCBlcnJvcic7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgUmVmLlxuICogQHBhcmFtIHthbmd1bGFyLklIdHRwUmVzcG9uc2U8aW1wb3J0KCduZ2VvL3ByaW50L21hcGZpc2gtcHJpbnQtdjMnKS5NYXBGaXNoUHJpbnRTdGF0dXNSZXNwb25zZT59IHJlc3BcbiAqICAgIFJlc3BvbnNlLlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlR2V0U3RhdHVzU3VjY2Vzc18gPSBmdW5jdGlvbiAocmVmLCByZXNwKSB7XG4gIGNvbnN0IG1mUmVzcCA9IHJlc3AuZGF0YTtcbiAgY29uc3QgZG9uZSA9IG1mUmVzcC5kb25lO1xuICBpZiAoZG9uZSkge1xuICAgIC8vIFRoZSByZXBvcnQgaXMgcmVhZHkuIE9wZW4gaXQgYnkgY2hhbmdpbmcgdGhlIHdpbmRvdyBsb2NhdGlvbi5cbiAgICB0aGlzLnByaW50U3RhdGUgPSAnJztcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucHJpbnRfLmdldFJlcG9ydFVybChyZWYpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRoZSByZXBvcnQgaXMgbm90IHJlYWR5IHlldC4gQ2hlY2sgYWdhaW4gaW4gMXMuXG4gICAgdGhpcy4kdGltZW91dF8oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0U3RhdHVzXyhyZWYpO1xuICAgICAgfSxcbiAgICAgIDEwMDAsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbmd1bGFyLklIdHRwUmVzcG9uc2U8aW1wb3J0KCduZ2VvL3ByaW50L21hcGZpc2gtcHJpbnQtdjMnKS5NYXBGaXNoUHJpbnRTdGF0dXNSZXNwb25zZT59IHJlc3BcbiAqICAgIFJlc3BvbnNlLlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlR2V0U3RhdHVzRXJyb3JfID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgdGhpcy5wcmludFN0YXRlID0gJ1ByaW50IGVycm9yJztcbn07XG5cbmFwcG1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcblxuYXBwbW9kdWxlLmNvbnN0YW50KCduZ2VvVGlsZXNQcmVsb2FkaW5nTGltaXQnLCAwKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuaW1wb3J0IExheWVyIGZyb20gJ29sL2xheWVyL0xheWVyJztcbmltcG9ydCB7IGNyZWF0ZUNhbnZhc0NvbnRleHQyRCB9IGZyb20gJ29sL2RvbSc7XG5pbXBvcnQgeyBJTkNIRVNfUEVSX01FVEVSLCBET1RTX1BFUl9JTkNIIH0gZnJvbSAnbmdlby9wcmludC9VdGlscyc7XG5pbXBvcnQgeyB0b1JhZGlhbnMgfSBmcm9tICdvbC9tYXRoJztcblxudmFyIE1hc2sgPSBmdW5jdGlvbiAoX0xheWVyKSB7XG4gIF9pbmhlcml0cyhNYXNrLCBfTGF5ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFzayk7XG5cbiAgZnVuY3Rpb24gTWFzaygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFzayk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIF90aGlzLmNvbnRleHRfID0gY3JlYXRlQ2FudmFzQ29udGV4dDJEKCk7XG4gICAgX3RoaXMuY29udGV4dF8uY2FudmFzLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICBfdGhpcy5jb250ZXh0Xy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIF90aGlzLmdldFNjYWxlO1xuICAgIF90aGlzLmdldFNpemU7XG4gICAgX3RoaXMuZ2V0Um90YXRpb247XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2ssIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoZnJhbWVTdGF0ZSkge1xuICAgICAgdmFyIGN3aWR0aCA9IGZyYW1lU3RhdGUuc2l6ZVswXTtcbiAgICAgIHRoaXMuY29udGV4dF8uY2FudmFzLndpZHRoID0gY3dpZHRoO1xuICAgICAgdmFyIGNoZWlnaHQgPSBmcmFtZVN0YXRlLnNpemVbMV07XG4gICAgICB0aGlzLmNvbnRleHRfLmNhbnZhcy5oZWlnaHQgPSBjaGVpZ2h0O1xuICAgICAgdmFyIGNlbnRlciA9IFtjd2lkdGggLyAyLCBjaGVpZ2h0IC8gMl07XG4gICAgICB0aGlzLmNvbnRleHRfLmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jb250ZXh0Xy5tb3ZlVG8oMCwgMCk7XG4gICAgICB0aGlzLmNvbnRleHRfLmxpbmVUbyhjd2lkdGgsIDApO1xuICAgICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oY3dpZHRoLCBjaGVpZ2h0KTtcbiAgICAgIHRoaXMuY29udGV4dF8ubGluZVRvKDAsIGNoZWlnaHQpO1xuICAgICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oMCwgMCk7XG4gICAgICB0aGlzLmNvbnRleHRfLmNsb3NlUGF0aCgpO1xuICAgICAgdmFyIHNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBzaXplWzFdO1xuICAgICAgdmFyIHdpZHRoID0gc2l6ZVswXTtcbiAgICAgIHZhciBzY2FsZSA9IHRoaXMuZ2V0U2NhbGUoZnJhbWVTdGF0ZSk7XG4gICAgICB2YXIgcmVzb2x1dGlvbiA9IGZyYW1lU3RhdGUudmlld1N0YXRlLnJlc29sdXRpb247XG4gICAgICB2YXIgZXh0ZW50SGFsZldpZHRoID0gd2lkdGggLyBET1RTX1BFUl9JTkNIIC8gSU5DSEVTX1BFUl9NRVRFUiAqIHNjYWxlIC8gcmVzb2x1dGlvbiAvIDI7XG4gICAgICB2YXIgZXh0ZW50SGFsZkhlaWdodCA9IGhlaWdodCAvIERPVFNfUEVSX0lOQ0ggLyBJTkNIRVNfUEVSX01FVEVSICogc2NhbGUgLyByZXNvbHV0aW9uIC8gMjtcbiAgICAgIHZhciByb3RhdGlvbiA9IHRoaXMuZ2V0Um90YXRpb24gIT09IHVuZGVmaW5lZCA/IHRvUmFkaWFucyh0aGlzLmdldFJvdGF0aW9uKCkpIDogMDtcbiAgICAgIHZhciBkaWFnb25hbCA9IE1hdGguc3FydChNYXRoLnBvdyhleHRlbnRIYWxmV2lkdGgsIDIpICsgTWF0aC5wb3coZXh0ZW50SGFsZkhlaWdodCwgMikpO1xuICAgICAgdmFyIGdhbW1hID0gTWF0aC5hdGFuKGV4dGVudEhhbGZIZWlnaHQgLyBleHRlbnRIYWxmV2lkdGgpIC0gcm90YXRpb247XG4gICAgICB2YXIgb21lZ2EgPSBNYXRoLmF0YW4oZXh0ZW50SGFsZldpZHRoIC8gZXh0ZW50SGFsZkhlaWdodCkgLSByb3RhdGlvbjtcbiAgICAgIHZhciB4MSA9IGNlbnRlclswXSAtIE1hdGguY29zKGdhbW1hKSAqIGRpYWdvbmFsO1xuICAgICAgdmFyIHkxID0gY2VudGVyWzFdICsgTWF0aC5zaW4oZ2FtbWEpICogZGlhZ29uYWw7XG4gICAgICB2YXIgeDIgPSBjZW50ZXJbMF0gKyBNYXRoLnNpbihvbWVnYSkgKiBkaWFnb25hbDtcbiAgICAgIHZhciB5MiA9IGNlbnRlclsxXSArIE1hdGguY29zKG9tZWdhKSAqIGRpYWdvbmFsO1xuICAgICAgdmFyIHgzID0gY2VudGVyWzBdICsgTWF0aC5jb3MoZ2FtbWEpICogZGlhZ29uYWw7XG4gICAgICB2YXIgeTMgPSBjZW50ZXJbMV0gLSBNYXRoLnNpbihnYW1tYSkgKiBkaWFnb25hbDtcbiAgICAgIHZhciB4NCA9IGNlbnRlclswXSAtIE1hdGguc2luKG9tZWdhKSAqIGRpYWdvbmFsO1xuICAgICAgdmFyIHk0ID0gY2VudGVyWzFdIC0gTWF0aC5jb3Mob21lZ2EpICogZGlhZ29uYWw7XG4gICAgICB0aGlzLmNvbnRleHRfLm1vdmVUbyh4MSwgeTEpO1xuICAgICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oeDIsIHkyKTtcbiAgICAgIHRoaXMuY29udGV4dF8ubGluZVRvKHgzLCB5Myk7XG4gICAgICB0aGlzLmNvbnRleHRfLmxpbmVUbyh4NCwgeTQpO1xuICAgICAgdGhpcy5jb250ZXh0Xy5saW5lVG8oeDEsIHkxKTtcbiAgICAgIHRoaXMuY29udGV4dF8uY2xvc2VQYXRoKCk7XG4gICAgICB0aGlzLmNvbnRleHRfLmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgIHRoaXMuY29udGV4dF8uZmlsbCgpO1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uY2FudmFzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrO1xufShMYXllcik7XG5cbmV4cG9ydCB7IE1hc2sgYXMgZGVmYXVsdCB9OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDelBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9