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
/******/ 		"permalink": 0
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
/******/ 	deferredModules.push([33,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/permalink.js":
/*!*******************************!*\
  !*** ./examples/permalink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_format_FeatureHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/FeatureHash */ "./src/format/FeatureHash.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/misc/debounce */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_decorate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/misc/decorate */ "./src/misc/decorate.js");
/* harmony import */ var ngeo_statemanager_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/statemanager/module */ "./src/statemanager/module.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/interaction/Draw */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
// The MIT License (MIT)
//
// Copyright (c) 2014-2021 Camptocamp SA
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
const myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', [
  'gettext',
  ngeo_map_module__WEBPACK_IMPORTED_MODULE_2__["default"].name,
  ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_3__["default"].name,
  ngeo_statemanager_module__WEBPACK_IMPORTED_MODULE_5__["default"].name,
]);

/**
 * An application-specific map component that updates the URL in the browser
 * address bar when the map view changes. It also sets the initial view based
 * on the URL query params at init time.
 *
 * This component gets a reference to the map instance through the "app-map"
 * attribute.
 *
 * @type {angular.IComponentOptions}
 */
const mapComponent = {
  controller: 'AppMapController as ctrl',
  bindings: {
    'map': '=appMap',
  },
  template: '<div ngeo-map=ctrl.map></div>',
};

myModule.component('appMap', mapComponent);

/**
 * @param {import('ngeo/statemanager/Location').StatemanagerLocation} ngeoLocation ngeo Location service.
 * @param {import('ngeo/misc/debounce').miscDebounce<function(import('ol/events/Event').default): void>} ngeoDebounce
 *    ngeo Debounce factory.
 * @class
 * @ngInject
 */
function MapComponentController(ngeoLocation, ngeoDebounce) {
  /**
   * @type {?import('ol/Map').default}
   */
  this.map = null;

  /**
   * @type {import('ngeo/statemanager/Location').StatemanagerLocation}
   */
  this.ngeoLocation_ = ngeoLocation;

  /**
   * @type {import('ngeo/misc/debounce').miscDebounce<function(import('ol/events/Event').default): void>}
   */
  this.ngeoDebounce_ = ngeoDebounce;
}

myModule.controller('AppMapController', MapComponentController);

MapComponentController.prototype.$onInit = function () {
  if (!this.map) {
    throw new Error('Missing map');
  }
  const view = this.map.getView();

  const zoom_ = this.ngeoLocation_.getParam('z');
  const zoom = zoom_ !== undefined ? +zoom_ : 4;

  const x = this.ngeoLocation_.getParam('x');
  const y = this.ngeoLocation_.getParam('y');
  const center = x !== undefined && y !== undefined ? [+x, +y] : [0, 0];

  view.setCenter(center);
  view.setZoom(zoom);

  this.ngeoLocation_.updateParams({
    'z': `${zoom}`,
    'x': `${Math.round(center[0])}`,
    'y': `${Math.round(center[1])}`,
  });

  view.on(
    /** @type {import('ol/Observable').EventTypes} */ ('propertychange'),
    /** @type {function(?): ?} */ (
      this.ngeoDebounce_(
        /**
         * @param {import('ol/events/Event').default} e Object event.
         */
        // @ts-ignore
        (e) => {
          const center = view.getCenter();
          if (!center) {
            throw new Error('Missing center');
          }
          const params = {
            'z': `${view.getZoom()}`,
            'x': `${Math.round(center[0])}`,
            'y': `${Math.round(center[1])}`,
          };
          this.ngeoLocation_.updateParams(params);
        },
        300,
        /* invokeApply */ true
      )
    )
  );
};

/**
 * A draw component that adds a simple draw tool.
 *
 * @type {angular.IComponentOptions}
 */
const drawComponent = {
  controller: 'AppDrawController as ctrl',
  bindings: {
    'map': '=appDrawMap',
    'layer': '=appDrawLayer',
  },
  template:
    '<label>Enable drawing:' +
    '<input type="checkbox" ng-model="ctrl.interaction.active" />' +
    '</label><br>' +
    '<button ng-click="ctrl.clearLayer()">Clear layer</button>',
};

myModule.component('appDraw', drawComponent);

/**
 * @param {angular.IScope} $scope Scope.
 * @param {import('ngeo/statemanager/Location').StatemanagerLocation} ngeoLocation ngeo Location service.
 * @class
 * @ngInject
 */
function DrawComponentController($scope, ngeoLocation) {
  /**
   * @type {?import('ol/Map').default}
   */
  this.map = null;

  /**
   * @type {?import('ol/layer/Vector').default<import('ol/source/Vector').default<import('ol/geom/Geometry').default>>}
   */
  this.layer = null;

  /**
   * @type {import('ngeo/statemanager/Location').StatemanagerLocation}
   */
  this.ngeoLocation_ = ngeoLocation;

  /**
   * @type {angular.IScope}
   */
  this.scope_ = $scope;

  /**
   * @type {number}
   */
  this.featureSeq_ = 0;

  /**
   * @type {?import('ol/interaction/Draw').default}
   */
  this.interaction = null;
}

DrawComponentController.prototype.$onInit = function () {
  if (!this.map) {
    throw new Error('Missing map');
  }
  if (!this.layer) {
    throw new Error('Missing layer');
  }
  /**
   * @type {olSourceVector<import('ol/geom/Geometry').default>}
   */
  const vectorSource = this.layer.getSource();

  this.interaction = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_7__["default"]({
    type: 'LineString',
    source: vectorSource,
  });

  this.interaction.setActive(false);
  this.map.addInteraction(this.interaction);
  Object(ngeo_misc_decorate__WEBPACK_IMPORTED_MODULE_4__["interactionDecoration"])(this.interaction);

  this.interaction.on(
    /** @type {import('ol/Observable').EventTypes} */ ('drawend'),
    /** @type {function(?): ?} */ (
      /**
       * @param {import('ol/MapBrowserEvent').default<unknown>} e
       */ (e) => {
        // @ts-ignore
        e.feature.set('id', ++this.featureSeq_);
      }
    )
  );

  // Deal with the encoding and decoding of features in the URL.

  const fhFormat = new ngeo_format_FeatureHash__WEBPACK_IMPORTED_MODULE_1__["default"]();

  vectorSource.on(
    /** @type {import('ol/Observable').EventTypes} */ ('addfeature'),
    /** @type {function(?): ?} */ (
      /**
       * @param {import('ol/MapBrowserEvent').default<unknown>} e
       */ (e) => {
        // @ts-ignore
        const feature = e.feature;
        feature.setStyle(
          new ol_style_Style__WEBPACK_IMPORTED_MODULE_13__["default"]({
            stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_12__["default"]({
              color: [255, 0, 0, 1],
              width: 2,
            }),
          })
        );
        const features = vectorSource.getFeatures();
        const encodedFeatures = fhFormat.writeFeatures(features);
        if (typeof encodedFeatures == 'string') {
          this.scope_.$applyAsync(() => {
            this.ngeoLocation_.updateParams({'features': encodedFeatures});
          });
        } else {
          console.error(`Unsupported type: ${typeof encodedFeatures}`);
        }
      }
    )
  );

  const encodedFeatures = this.ngeoLocation_.getParam('features');
  if (encodedFeatures !== undefined) {
    const features = /** @type {import('ol/Feature').default<import('ol/geom/Geometry').default>[]} */ (
      fhFormat.readFeatures(encodedFeatures)
    );
    this.featureSeq_ = features.length;
    vectorSource.addFeatures(features);
  }
};

/**
 * Clear the vector layer.
 */
DrawComponentController.prototype.clearLayer = function () {
  if (!this.layer) {
    throw new Error('Missing layer');
  }
  const source = this.layer.getSource();
  if (!(source instanceof ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__["default"])) {
    throw new Error('Wrong source');
  }
  source.clear(true);
  this.featureSeq_ = 0;
  this.ngeoLocation_.deleteParam('features');
};

myModule.controller('AppDrawController', DrawComponentController);

/**
 * @class
 */
function MainController() {
  /**
   * @type {import('ol/Map').default}
   */
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_6__["default"]({
    layers: [
      new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_8__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__["default"](),
      }),
    ],
  });

  const vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]();

  /**
   * @type {import('ol/layer/Vector').default<import('ol/source/Vector').default<import('ol/geom/Geometry').default>>}
   */
  this.vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__["default"]({
    source: vectorSource,
  });

  // Use vectorLayer.setMap(map) rather than map.addLayer(vectorLayer). This
  // makes the vector layer "unmanaged", meaning that it is always on top.
  this.vectorLayer.setMap(this.map);
}

myModule.controller('MainController', MainController);

/* harmony default export */ __webpack_exports__["default"] = (myModule);


/***/ }),

/***/ "./node_modules/ol/format/Feature.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/ol/format/Feature.js from dll-reference vendor ***!
  \*******************************************************************************/
/*! exports provided: default, transformGeometryWithOptions, transformExtentWithOptions */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(57);

/***/ }),

/***/ "./node_modules/ol/format/TextFeature.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/ol/format/TextFeature.js from dll-reference vendor ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1091);

/***/ }),

/***/ "./src/format/FeatureHash.js":
/*!***********************************!*\
  !*** ./src/format/FeatureHash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/format/FeatureProperties */ "./src/format/FeatureProperties.js");
/* harmony import */ var ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/FeatureHashStyleType */ "./src/format/FeatureHashStyleType.js");
/* harmony import */ var ngeo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils */ "./src/utils.js");
/* harmony import */ var ol_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/color */ "./node_modules/ol/color.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_format_Feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/Feature */ "./node_modules/ol/format/Feature.js");
/* harmony import */ var ol_format_TextFeature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/TextFeature */ "./node_modules/ol/format/TextFeature.js");
/* harmony import */ var ol_geom_LineString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/LineString */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_MultiLineString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/MultiLineString */ "./node_modules/ol/geom/MultiLineString.js");
/* harmony import */ var ol_geom_MultiPoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/MultiPoint */ "./node_modules/ol/geom/MultiPoint.js");
/* harmony import */ var ol_geom_MultiPolygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom/MultiPolygon */ "./node_modules/ol/geom/MultiPolygon.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Polygon */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_style_Circle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Circle */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Text */ "./node_modules/ol/style/Text.js");
/* harmony import */ var ol_geom_Geometry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/geom/Geometry */ "./node_modules/ol/geom/Geometry.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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




















var LegacyProperties_ = {};
var DEFAULT_ACCURACY = 0.1;
var StyleTypes_ = {
  'LineString': ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING,
  'Point': ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].POINT,
  'Polygon': ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON,
  'MultiLineString': ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING,
  'MultiPoint': ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].POINT,
  'MultiPolygon': ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON
};
var CHAR64_ = '.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz';
var GEOMETRY_READERS_ = {
  'P': readMultiPointGeometry_,
  'L': readMultiLineStringGeometry_,
  'A': readMultiPolygonGeometry_,
  'l': readLineStringGeometry_,
  'p': readPointGeometry_,
  'a': readPolygonGeometry_
};
var GEOMETRY_WRITERS_ = {
  'MultiLineString': writeMultiLineStringGeometry_,
  'MultiPoint': writeMultiPointGeometry_,
  'MultiPolygon': writeMultiPolygonGeometry_,
  'LineString': writeLineStringGeometry_,
  'Point': writePointGeometry_,
  'Polygon': writePolygonGeometry_
};

var FeatureHash = function (_olFormatTextFeature) {
  _inherits(FeatureHash, _olFormatTextFeature);

  var _super = _createSuper(FeatureHash);

  function FeatureHash(opt_options) {
    var _this;

    _classCallCheck(this, FeatureHash);

    _this = _super.call(this);
    var options = opt_options || {};
    _this.accuracy_ = options.accuracy || DEFAULT_ACCURACY;
    _this.encodeStyles_ = options.encodeStyles || true;
    _this.propertiesFunction_ = options.properties || defaultPropertiesFunction_;
    _this.setStyle_ = options.setStyle !== undefined ? options.setStyle : true;
    _this.prevX_ = 0;
    _this.prevY_ = 0;
    LegacyProperties_ = options.propertiesType || {};
    _this.defaultValues_ = options.defaultValues || {};
    return _this;
  }

  _createClass(FeatureHash, [{
    key: "decodeCoordinates_",
    value: function decodeCoordinates_(text, opt_flatCoordinates) {
      var len = text.length;
      var index = 0;
      var flatCoordinates = opt_flatCoordinates !== undefined ? opt_flatCoordinates : [];
      var i = flatCoordinates.length;

      while (index < len) {
        var b = void 0;
        var shift = 0;
        var result = 0;

        do {
          b = CHAR64_.indexOf(text.charAt(index++));
          result |= (b & 0x1f) << shift;
          shift += 5;
        } while (b >= 32);

        var dx = result & 1 ? ~(result >> 1) : result >> 1;
        this.prevX_ += dx;
        shift = 0;
        result = 0;

        do {
          b = CHAR64_.indexOf(text.charAt(index++));
          result |= (b & 0x1f) << shift;
          shift += 5;
        } while (b >= 32);

        var dy = result & 1 ? ~(result >> 1) : result >> 1;
        this.prevY_ += dy;
        flatCoordinates[i++] = this.prevX_ * this.accuracy_;
        flatCoordinates[i++] = this.prevY_ * this.accuracy_;
      }

      return flatCoordinates;
    }
  }, {
    key: "encodeCoordinates_",
    value: function encodeCoordinates_(flatCoordinates, stride, offset, end) {
      var encodedCoordinates = '';

      for (var i = offset; i < end; i += stride) {
        var x = flatCoordinates[i];
        var y = flatCoordinates[i + 1];
        x = Math.floor(x / this.accuracy_);
        y = Math.floor(y / this.accuracy_);
        var dx = x - this.prevX_;
        var dy = y - this.prevY_;
        this.prevX_ = x;
        this.prevY_ = y;
        encodedCoordinates += encodeSignedNumber_(dx) + encodeSignedNumber_(dy);
      }

      return encodedCoordinates;
    }
  }, {
    key: "readFeatureFromText",
    value: function readFeatureFromText(text, opt_options) {
      console.assert(text.length > 2);
      console.assert(text[1] === '(');
      console.assert(text.endsWith(')'));
      var splitIndex = text.indexOf('~');
      var geometryText = splitIndex >= 0 ? "".concat(text.substring(0, splitIndex), ")") : text;
      var geometry = this.readGeometryFromText(geometryText, opt_options);
      var feature = new ol_Feature__WEBPACK_IMPORTED_MODULE_4__["default"](geometry);

      if (splitIndex >= 0) {
        var attributesAndStylesText = text.substring(splitIndex + 1, text.length - 1);
        splitIndex = attributesAndStylesText.indexOf('~');
        var attributesText = splitIndex >= 0 ? attributesAndStylesText.substring(0, splitIndex) : attributesAndStylesText;

        if (attributesText != '') {
          var parts = attributesText.split("'");

          var _iterator = _createForOfIteratorHelper(parts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var encodedPart = _step.value;
              var part = decodeURIComponent(encodedPart);
              var keyVal = part.split('*');
              console.assert(keyVal.length === 2);
              var key = keyVal[0];
              var value = keyVal[1];

              if (!this.setStyle_ && LegacyProperties_[key]) {
                key = LegacyProperties_[key];
              }

              feature.set(key, castValue_(key, value));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (splitIndex >= 0) {
          var stylesText = attributesAndStylesText.substring(splitIndex + 1);

          if (this.setStyle_) {
            setStyleInFeature_(stylesText, feature);
          } else {
            setStyleProperties_(stylesText, feature);
          }
        }
      }

      return feature;
    }
  }, {
    key: "readFeaturesFromText",
    value: function readFeaturesFromText(text, opt_options) {
      var _this2 = this;

      console.assert(text.startsWith('F'));
      this.prevX_ = 0;
      this.prevY_ = 0;
      var features = [];
      text = text.substring(1);

      while (text.length > 0) {
        var index = text.indexOf(')');
        console.assert(index >= 0);
        var feature = this.readFeatureFromText(text.substring(0, index + 1), opt_options);
        features.push(feature);
        text = text.substring(index + 1);
      }

      features.forEach(function (feature) {
        for (var key in _this2.defaultValues_) {
          var property = LegacyProperties_[key];

          if (feature.get(property) === undefined) {
            feature.set(property, _this2.defaultValues_[key].call(null, feature));
          }
        }
      });
      return features;
    }
  }, {
    key: "readGeometryFromText",
    value: function readGeometryFromText(text, opt_options) {
      var geometryReader = GEOMETRY_READERS_[text[0]];
      console.assert(geometryReader !== undefined);
      return geometryReader.call(this, text);
    }
  }, {
    key: "writeFeatureText",
    value: function writeFeatureText(feature, opt_options) {
      var encodedParts = [];
      var encodedGeometry = '';
      var geometry = feature.getGeometry();

      if (geometry) {
        encodedGeometry = this.writeGeometryText(geometry, opt_options);
      }

      if (encodedGeometry.length > 0) {
        console.assert(encodedGeometry.endsWith(')'));
        encodedGeometry = encodedGeometry.substring(0, encodedGeometry.length - 1);
        encodedParts.push(encodedGeometry);
      }

      var encodedProperties = [];
      var propFunction = this.propertiesFunction_(feature);

      for (var key in propFunction) {
        var value = propFunction[key];

        if (value !== undefined && value !== null && key !== feature.getGeometryName()) {
          if (encodedProperties.length !== 0) {
            encodedProperties.push("'");
          }

          var encoded = encodeURIComponent("".concat(key.replace(/[()'*]/g, '_'), "*").concat(value.toString().replace(/[()'*]/g, '_')));
          encodedProperties.push(encoded);
        }
      }

      if (encodedProperties.length > 0) {
        encodedParts.push('~');
        Array.prototype.push.apply(encodedParts, encodedProperties);
      }

      if (this.encodeStyles_) {
        var styleFunction = feature.getStyleFunction();

        if (styleFunction !== undefined) {
          var styles = styleFunction(feature, 0);

          if (styles) {
            var encodedStyles = [];
            styles = Array.isArray(styles) ? styles : [styles];

            if (!geometry) {
              throw new Error('Missing geometry');
            }

            encodeStyles_(styles, geometry.getType(), encodedStyles);

            if (encodedStyles.length > 0) {
              encodedParts.push('~');
              Array.prototype.push.apply(encodedParts, encodedStyles);
            }
          }
        }
      }

      encodedParts.push(')');
      return encodedParts.join('');
    }
  }, {
    key: "writeFeaturesText",
    value: function writeFeaturesText(features, opt_options) {
      this.prevX_ = 0;
      this.prevY_ = 0;
      var textArray = [];

      if (features.length > 0) {
        textArray.push('F');

        for (var i = 0, ii = features.length; i < ii; ++i) {
          textArray.push(this.writeFeatureText(features[i], opt_options));
        }
      }

      return textArray.join('');
    }
  }, {
    key: "writeGeometryText",
    value: function writeGeometryText(geometry, opt_options) {
      var geometryWriter = GEOMETRY_WRITERS_[geometry.getType()];
      console.assert(geometryWriter !== undefined);
      var transformedGeometry = Object(ol_format_Feature__WEBPACK_IMPORTED_MODULE_5__["transformGeometryWithOptions"])(geometry, true, opt_options);

      if (!(transformedGeometry instanceof ol_geom_Geometry__WEBPACK_IMPORTED_MODULE_18__["default"])) {
        throw new Error('Missing transformedGeometry');
      }

      var encGeom = geometryWriter.call(this, transformedGeometry);

      if (!encGeom) {
        throw new Error('Missing encodedGeometry');
      }

      return encGeom;
    }
  }]);

  return FeatureHash;
}(ol_format_TextFeature__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureHash);

function defaultPropertiesFunction_(feature) {
  return feature.getProperties();
}

function encodeSignedNumber_(num) {
  var signedNum = num << 1;

  if (num < 0) {
    signedNum = ~signedNum;
  }

  return encodeNumber_(signedNum);
}

function encodeNumber_(num) {
  var encodedNumber = '';

  while (num >= 0x20) {
    encodedNumber += CHAR64_.charAt(0x20 | num & 0x1f);
    num >>= 5;
  }

  encodedNumber += CHAR64_.charAt(num);
  return encodedNumber;
}

function encodeStyles_(styles, geometryType, encodedStyles) {
  var styleType = StyleTypes_[geometryType];
  console.assert(styleType !== undefined);

  var _iterator2 = _createForOfIteratorHelper(styles),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var style = _step2.value;
      var fillStyle = style.getFill();
      var imageStyle = style.getImage();
      var strokeStyle = style.getStroke();
      var textStyle = style.getText();

      if (styleType == ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON) {
        if (fillStyle !== null) {
          encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles);
        }
      } else if (styleType == ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING) {
        if (strokeStyle !== null) {
          encodeStyleLine_(strokeStyle, encodedStyles);
        }
      } else if (styleType == ngeo_format_FeatureHashStyleType__WEBPACK_IMPORTED_MODULE_1__["default"].POINT) {
        if (imageStyle !== null) {
          encodeStylePoint_(imageStyle, encodedStyles);
        }
      }

      if (textStyle !== null) {
        encodeStyleText_(textStyle, encodedStyles);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function encodeStyleLine_(strokeStyle, encodedStyles) {
  encodeStyleStroke_(strokeStyle, encodedStyles);
}

function encodeStylePoint_(imageStyle, encodedStyles) {
  if (imageStyle instanceof ol_style_Circle__WEBPACK_IMPORTED_MODULE_13__["default"]) {
    var radius = imageStyle.getRadius();

    if (encodedStyles.length > 0) {
      encodedStyles.push("'");
    }

    encodedStyles.push(encodeURIComponent("pointRadius*".concat(radius)));
    var fillStyle = imageStyle.getFill();

    if (fillStyle !== null) {
      encodeStyleFill_(fillStyle, encodedStyles);
    }

    var strokeStyle = imageStyle.getStroke();

    if (strokeStyle !== null) {
      encodeStyleStroke_(strokeStyle, encodedStyles);
    }
  }
}

function encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles) {
  encodeStyleFill_(fillStyle, encodedStyles);

  if (strokeStyle !== null) {
    encodeStyleStroke_(strokeStyle, encodedStyles);
  }
}

function encodeStyleFill_(fillStyle, encodedStyles) {
  var propertyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fillColor';
  var fillColor = fillStyle.getColor();
  var fillColorHex;

  if (fillColor !== null) {
    if (Array.isArray(fillColor)) {
      fillColorHex = Object(ngeo_utils__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(fillColor);
    } else if (typeof fillColor === 'string') {
      fillColorHex = Object(ngeo_utils__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(Object(ol_color__WEBPACK_IMPORTED_MODULE_3__["asArray"])(fillColor));
    } else {
      throw new Error('Unsupported color');
    }

    if (encodedStyles.length > 0) {
      encodedStyles.push("'");
    }

    encodedStyles.push(encodeURIComponent("".concat(propertyName, "*").concat(fillColorHex)));
  }
}

function encodeStyleStroke_(strokeStyle, encodedStyles) {
  var strokeColor = strokeStyle.getColor();

  if (strokeColor !== null) {
    if (Array.isArray(strokeColor)) {
      var strokeColorHex = Object(ngeo_utils__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(strokeColor);

      if (encodedStyles.length > 0) {
        encodedStyles.push("'");
      }

      encodedStyles.push(encodeURIComponent("strokeColor*".concat(strokeColorHex)));
    }
  }

  var strokeWidth = strokeStyle.getWidth();

  if (strokeWidth !== undefined) {
    if (encodedStyles.length > 0) {
      encodedStyles.push("'");
    }

    encodedStyles.push(encodeURIComponent("strokeWidth*".concat(strokeWidth)));
  }
}

function encodeStyleText_(textStyle, encodedStyles) {
  var fontStyle = textStyle.getFont();

  if (fontStyle !== undefined) {
    var font = fontStyle.split(' ');

    if (font.length >= 3) {
      if (encodedStyles.length > 0) {
        encodedStyles.push("'");
      }

      encodedStyles.push(encodeURIComponent("fontSize*".concat(font[1])));
    }
  }

  var fillStyle = textStyle.getFill();

  if (fillStyle !== null) {
    encodeStyleFill_(fillStyle, encodedStyles, 'fontColor');
  }
}

function readLineStringGeometry_(text) {
  console.assert(text.startsWith('l('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_LineString__WEBPACK_IMPORTED_MODULE_7__["default"](flatCoordinates, 'XY');
}

function readMultiLineStringGeometry_(text) {
  console.assert(text.startsWith('L('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var lineStrings = text.split("'");

  for (var i = 0, ii = lineStrings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(lineStrings[i], flatCoordinates);
    ends[i] = flatCoordinates.length;
  }

  return new ol_geom_MultiLineString__WEBPACK_IMPORTED_MODULE_8__["default"](flatCoordinates, 'XY', ends);
}

function readPointGeometry_(text) {
  console.assert(text.startsWith('p('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  console.assert(flatCoordinates.length === 2);
  return new ol_geom_Point__WEBPACK_IMPORTED_MODULE_11__["default"](flatCoordinates, 'XY');
}

function readMultiPointGeometry_(text) {
  console.assert(text.startsWith('P('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_MultiPoint__WEBPACK_IMPORTED_MODULE_9__["default"](flatCoordinates, 'XY');
}

function readPolygonGeometry_(text) {
  console.assert(text.startsWith('a('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var rings = text.split("'");

  for (var i = 0, ii = rings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(rings[i], flatCoordinates);
    var end = flatCoordinates.length;

    if (i === 0) {
      flatCoordinates[end++] = flatCoordinates[0];
      flatCoordinates[end++] = flatCoordinates[1];
    } else {
      flatCoordinates[end++] = flatCoordinates[ends[i - 1]];
      flatCoordinates[end++] = flatCoordinates[ends[i - 1] + 1];
    }

    ends[i] = end;
  }

  return new ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_12__["default"](flatCoordinates, 'XY', ends);
}

function readMultiPolygonGeometry_(text) {
  console.assert(text.startsWith('A('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var endss = [];
  var polygons = text.split(')(');

  for (var i = 0, ii = polygons.length; i < ii; ++i) {
    var rings = polygons[i].split("'");
    endss[i] = [];
    var ends = endss[i];

    for (var j = 0, jj = rings.length; j < jj; ++j) {
      flatCoordinates = this.decodeCoordinates_(rings[j], flatCoordinates);
      var end = flatCoordinates.length;

      if (j === 0) {
        flatCoordinates[end++] = flatCoordinates[0];
        flatCoordinates[end++] = flatCoordinates[1];
      } else {
        flatCoordinates[end++] = flatCoordinates[ends[j - 1]];
        flatCoordinates[end++] = flatCoordinates[ends[j - 1] + 1];
      }

      ends[j] = end;
    }
  }

  return new ol_geom_MultiPolygon__WEBPACK_IMPORTED_MODULE_10__["default"](flatCoordinates, 'XY', endss);
}

function setStyleInFeature_(text, feature) {
  if (text == '') {
    return;
  }

  var properties = getStyleProperties_(text, feature);
  var fillColor = properties.fillColor;
  var fontSize = properties.fontSize;
  var fontColor = properties.fontColor;
  var pointRadius = properties.pointRadius;
  var strokeColor = properties.strokeColor;
  var strokeWidth = properties.strokeWidth;
  var fillStyle = null;

  if (fillColor !== undefined) {
    fillStyle = new ol_style_Fill__WEBPACK_IMPORTED_MODULE_14__["default"]({
      color: fillColor
    });
  }

  var strokeStyle = null;

  if (strokeColor !== undefined && strokeWidth !== undefined) {
    if (typeof strokeWidth != 'number') {
      throw new Error('Missing strokeWidth');
    }

    strokeStyle = new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_15__["default"]({
      color: strokeColor,
      width: strokeWidth
    });
  }

  var imageStyle = null;

  if (pointRadius !== undefined) {
    if (typeof pointRadius != 'number') {
      throw new Error('Missing pointRadius');
    }

    var _options = {
      radius: pointRadius
    };

    if (fillStyle) {
      _options.fill = fillStyle;
    }

    if (strokeStyle) {
      _options.stroke = strokeStyle;
    }

    imageStyle = new ol_style_Circle__WEBPACK_IMPORTED_MODULE_13__["default"](_options);
    fillStyle = null;
    strokeStyle = null;
  }

  var textStyle = null;

  if (fontSize !== undefined && fontColor !== undefined) {
    textStyle = new ol_style_Text__WEBPACK_IMPORTED_MODULE_17__["default"]({
      font: "".concat(fontSize, " sans-serif"),
      fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_14__["default"]({
        color: fontColor
      })
    });
  }

  var options = {};

  if (fillStyle) {
    options.fill = fillStyle;
  }

  if (strokeStyle) {
    options.stroke = strokeStyle;
  }

  if (imageStyle) {
    options.image = imageStyle;
  }

  if (textStyle) {
    options.text = textStyle;
  }

  var style = new ol_style_Style__WEBPACK_IMPORTED_MODULE_16__["default"](options);
  feature.setStyle(style);
}

function setStyleProperties_(text, feature) {
  var properties = getStyleProperties_(text, feature);
  var geometry = feature.getGeometry();

  if (geometry instanceof ol_geom_Point__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    if (properties.isLabel || properties[ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT]) {
      delete properties.strokeColor;
      delete properties.fillColor;
    } else {
      delete properties.fontColor;
      delete properties.fontSize;
    }
  } else {
    delete properties.fontColor;

    if (geometry instanceof ol_geom_LineString__WEBPACK_IMPORTED_MODULE_7__["default"]) {
      delete properties.fillColor;
      delete properties.fillOpacity;
    }
  }

  if (properties.fontSize) {
    var fontSizeStr = properties.fontSize;

    if (typeof fontSizeStr !== 'string') {
      throw new Error('Wrong fontSizeStr type');
    }

    var fontSize = parseFloat(fontSizeStr);

    if (fontSizeStr.includes('px')) {
      fontSize = Math.round(fontSize / 1.333333);
    }

    properties.fontSize = fontSize;
  }

  var clone = {};

  for (var key in properties) {
    var value = properties[key];

    if (LegacyProperties_[key]) {
      clone[LegacyProperties_[key]] = value;
    } else {
      clone[key] = value;
    }
  }

  feature.setProperties(clone);
}

function castValue_(key, value) {
  var numProperties = [ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].ANGLE, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].OPACITY, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].SIZE, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].STROKE, 'pointRadius', 'strokeWidth'];
  var boolProperties = [ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].IS_CIRCLE, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].IS_RECTANGLE, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_MEASURE, ngeo_format_FeatureProperties__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_LABEL, 'isCircle', 'isRectangle', 'isLabel', 'showMeasure', 'showLabel'];

  if (numProperties.includes(key)) {
    return +value;
  } else if (boolProperties.includes(key)) {
    return value === 'true' ? true : false;
  } else {
    return value;
  }
}

function getStyleProperties_(text, feature) {
  var parts = text.split("'");
  var properties = {};

  var _iterator3 = _createForOfIteratorHelper(parts),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var encodedPart = _step3.value;
      var part = decodeURIComponent(encodedPart);
      var keyVal = part.split('*');
      console.assert(keyVal.length === 2);
      var key = keyVal[0];
      var val = keyVal[1];
      properties[key] = castValue_(key, val);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return properties;
}

function writeLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_LineString__WEBPACK_IMPORTED_MODULE_7__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "l(".concat(this.encodeCoordinates_(flatCoordinates, stride, 0, end), ")");
  }

  return null;
}

function writeMultiLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiLineString__WEBPACK_IMPORTED_MODULE_8__["default"]) {
    var ends = geometry.getEnds();
    var lineStringCount = ends.length;
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var offset = 0;
    var textArray = ['L('];

    for (var i = 0; i < lineStringCount; ++i) {
      var end = ends[i];
      var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);

      if (i !== 0) {
        textArray.push("'");
      }

      textArray.push(text);
      offset = end;
    }

    textArray.push(')');
    return textArray.join('');
  }

  return null;
}

function writePointGeometry_(geometry) {
  if (geometry instanceof ol_geom_Point__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "p(".concat(this.encodeCoordinates_(flatCoordinates, stride, 0, end), ")");
  }

  return null;
}

function writeMultiPointGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPoint__WEBPACK_IMPORTED_MODULE_9__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "P(".concat(this.encodeCoordinates_(flatCoordinates, stride, 0, end), ")");
  }

  return null;
}

function encodeRings_(flatCoordinates, stride, offset, ends, textArray) {
  var linearRingCount = ends.length;

  for (var i = 0; i < linearRingCount; ++i) {
    var end = ends[i] - stride;
    var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);

    if (i !== 0) {
      textArray.push("'");
    }

    textArray.push(text);
    offset = ends[i];
  }

  return offset;
}

function writePolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_12__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var ends = geometry.getEnds();
    var offset = 0;
    var textArray = ['a('];
    encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
    textArray.push(')');
    return textArray.join('');
  }

  return null;
}

function writeMultiPolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPolygon__WEBPACK_IMPORTED_MODULE_10__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var endss = geometry.getEndss();
    var polygonCount = endss.length;
    var offset = 0;
    var textArray = ['A'];

    for (var i = 0; i < polygonCount; ++i) {
      var ends = endss[i];
      textArray.push('(');
      offset = encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
      textArray.push(')');
    }

    return textArray.join('');
  } else {
    throw new Error('Wrong geometry type');
  }
}

/***/ }),

/***/ "./src/format/FeatureHashStyleType.js":
/*!********************************************!*\
  !*** ./src/format/FeatureHashStyleType.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  LINE_STRING: 'LineString',
  POINT: 'Point',
  POLYGON: 'Polygon'
});

/***/ }),

/***/ 33:
/*!******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/permalink.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/permalink.js */"./examples/permalink.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWFsaW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Blcm1hbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0L0ZlYXR1cmVIYXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtYXQvRmVhdHVyZUhhc2hTdHlsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBlcm1hbGlua1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdC8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuIFx0Ly8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKCkge1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMzMsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgQ2FtcHRvY2FtcCBTQVxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVIYXNoIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVIYXNoJztcblxuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZSc7XG5pbXBvcnQge2ludGVyYWN0aW9uRGVjb3JhdGlvbn0gZnJvbSAnbmdlby9taXNjL2RlY29yYXRlJztcbmltcG9ydCBuZ2VvU3RhdGVtYW5hZ2VyTW9kdWxlIGZyb20gJ25nZW8vc3RhdGVtYW5hZ2VyL21vZHVsZSc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwJztcbmltcG9ydCBvbEludGVyYWN0aW9uRHJhdyBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvcic7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTSc7XG5pbXBvcnQgb2xTb3VyY2VWZWN0b3IgZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5cbi8qKiBAdHlwZSB7YW5ndWxhci5JTW9kdWxlfSAqKi9cbmNvbnN0IG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgJ2dldHRleHQnLFxuICBuZ2VvTWFwTW9kdWxlLm5hbWUsXG4gIG5nZW9NaXNjRGVib3VuY2UubmFtZSxcbiAgbmdlb1N0YXRlbWFuYWdlck1vZHVsZS5uYW1lLFxuXSk7XG5cbi8qKlxuICogQW4gYXBwbGljYXRpb24tc3BlY2lmaWMgbWFwIGNvbXBvbmVudCB0aGF0IHVwZGF0ZXMgdGhlIFVSTCBpbiB0aGUgYnJvd3NlclxuICogYWRkcmVzcyBiYXIgd2hlbiB0aGUgbWFwIHZpZXcgY2hhbmdlcy4gSXQgYWxzbyBzZXRzIHRoZSBpbml0aWFsIHZpZXcgYmFzZWRcbiAqIG9uIHRoZSBVUkwgcXVlcnkgcGFyYW1zIGF0IGluaXQgdGltZS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBnZXRzIGEgcmVmZXJlbmNlIHRvIHRoZSBtYXAgaW5zdGFuY2UgdGhyb3VnaCB0aGUgXCJhcHAtbWFwXCJcbiAqIGF0dHJpYnV0ZS5cbiAqXG4gKiBAdHlwZSB7YW5ndWxhci5JQ29tcG9uZW50T3B0aW9uc31cbiAqL1xuY29uc3QgbWFwQ29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiAnQXBwTWFwQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJz1hcHBNYXAnLFxuICB9LFxuICB0ZW1wbGF0ZTogJzxkaXYgbmdlby1tYXA9Y3RybC5tYXA+PC9kaXY+Jyxcbn07XG5cbm15TW9kdWxlLmNvbXBvbmVudCgnYXBwTWFwJywgbWFwQ29tcG9uZW50KTtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnbmdlby9zdGF0ZW1hbmFnZXIvTG9jYXRpb24nKS5TdGF0ZW1hbmFnZXJMb2NhdGlvbn0gbmdlb0xvY2F0aW9uIG5nZW8gTG9jYXRpb24gc2VydmljZS5cbiAqIEBwYXJhbSB7aW1wb3J0KCduZ2VvL21pc2MvZGVib3VuY2UnKS5taXNjRGVib3VuY2U8ZnVuY3Rpb24oaW1wb3J0KCdvbC9ldmVudHMvRXZlbnQnKS5kZWZhdWx0KTogdm9pZD59IG5nZW9EZWJvdW5jZVxuICogICAgbmdlbyBEZWJvdW5jZSBmYWN0b3J5LlxuICogQGNsYXNzXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTWFwQ29tcG9uZW50Q29udHJvbGxlcihuZ2VvTG9jYXRpb24sIG5nZW9EZWJvdW5jZSkge1xuICAvKipcbiAgICogQHR5cGUgez9pbXBvcnQoJ29sL01hcCcpLmRlZmF1bHR9XG4gICAqL1xuICB0aGlzLm1hcCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtpbXBvcnQoJ25nZW8vc3RhdGVtYW5hZ2VyL0xvY2F0aW9uJykuU3RhdGVtYW5hZ2VyTG9jYXRpb259XG4gICAqL1xuICB0aGlzLm5nZW9Mb2NhdGlvbl8gPSBuZ2VvTG9jYXRpb247XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtpbXBvcnQoJ25nZW8vbWlzYy9kZWJvdW5jZScpLm1pc2NEZWJvdW5jZTxmdW5jdGlvbihpbXBvcnQoJ29sL2V2ZW50cy9FdmVudCcpLmRlZmF1bHQpOiB2b2lkPn1cbiAgICovXG4gIHRoaXMubmdlb0RlYm91bmNlXyA9IG5nZW9EZWJvdW5jZTtcbn1cblxubXlNb2R1bGUuY29udHJvbGxlcignQXBwTWFwQ29udHJvbGxlcicsIE1hcENvbXBvbmVudENvbnRyb2xsZXIpO1xuXG5NYXBDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMubWFwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG1hcCcpO1xuICB9XG4gIGNvbnN0IHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG5cbiAgY29uc3Qgem9vbV8gPSB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW0oJ3onKTtcbiAgY29uc3Qgem9vbSA9IHpvb21fICE9PSB1bmRlZmluZWQgPyArem9vbV8gOiA0O1xuXG4gIGNvbnN0IHggPSB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW0oJ3gnKTtcbiAgY29uc3QgeSA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneScpO1xuICBjb25zdCBjZW50ZXIgPSB4ICE9PSB1bmRlZmluZWQgJiYgeSAhPT0gdW5kZWZpbmVkID8gWyt4LCAreV0gOiBbMCwgMF07XG5cbiAgdmlldy5zZXRDZW50ZXIoY2VudGVyKTtcbiAgdmlldy5zZXRab29tKHpvb20pO1xuXG4gIHRoaXMubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMoe1xuICAgICd6JzogYCR7em9vbX1gLFxuICAgICd4JzogYCR7TWF0aC5yb3VuZChjZW50ZXJbMF0pfWAsXG4gICAgJ3knOiBgJHtNYXRoLnJvdW5kKGNlbnRlclsxXSl9YCxcbiAgfSk7XG5cbiAgdmlldy5vbihcbiAgICAvKiogQHR5cGUge2ltcG9ydCgnb2wvT2JzZXJ2YWJsZScpLkV2ZW50VHlwZXN9ICovICgncHJvcGVydHljaGFuZ2UnKSxcbiAgICAvKiogQHR5cGUge2Z1bmN0aW9uKD8pOiA/fSAqLyAoXG4gICAgICB0aGlzLm5nZW9EZWJvdW5jZV8oXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge2ltcG9ydCgnb2wvZXZlbnRzL0V2ZW50JykuZGVmYXVsdH0gZSBPYmplY3QgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VudGVyID0gdmlldy5nZXRDZW50ZXIoKTtcbiAgICAgICAgICBpZiAoIWNlbnRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNlbnRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAneic6IGAke3ZpZXcuZ2V0Wm9vbSgpfWAsXG4gICAgICAgICAgICAneCc6IGAke01hdGgucm91bmQoY2VudGVyWzBdKX1gLFxuICAgICAgICAgICAgJ3knOiBgJHtNYXRoLnJvdW5kKGNlbnRlclsxXSl9YCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgMzAwLFxuICAgICAgICAvKiBpbnZva2VBcHBseSAqLyB0cnVlXG4gICAgICApXG4gICAgKVxuICApO1xufTtcblxuLyoqXG4gKiBBIGRyYXcgY29tcG9uZW50IHRoYXQgYWRkcyBhIHNpbXBsZSBkcmF3IHRvb2wuXG4gKlxuICogQHR5cGUge2FuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnN9XG4gKi9cbmNvbnN0IGRyYXdDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6ICdBcHBEcmF3Q29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJz1hcHBEcmF3TWFwJyxcbiAgICAnbGF5ZXInOiAnPWFwcERyYXdMYXllcicsXG4gIH0sXG4gIHRlbXBsYXRlOlxuICAgICc8bGFiZWw+RW5hYmxlIGRyYXdpbmc6JyArXG4gICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuZy1tb2RlbD1cImN0cmwuaW50ZXJhY3Rpb24uYWN0aXZlXCIgLz4nICtcbiAgICAnPC9sYWJlbD48YnI+JyArXG4gICAgJzxidXR0b24gbmctY2xpY2s9XCJjdHJsLmNsZWFyTGF5ZXIoKVwiPkNsZWFyIGxheWVyPC9idXR0b24+Jyxcbn07XG5cbm15TW9kdWxlLmNvbXBvbmVudCgnYXBwRHJhdycsIGRyYXdDb21wb25lbnQpO1xuXG4vKipcbiAqIEBwYXJhbSB7YW5ndWxhci5JU2NvcGV9ICRzY29wZSBTY29wZS5cbiAqIEBwYXJhbSB7aW1wb3J0KCduZ2VvL3N0YXRlbWFuYWdlci9Mb2NhdGlvbicpLlN0YXRlbWFuYWdlckxvY2F0aW9ufSBuZ2VvTG9jYXRpb24gbmdlbyBMb2NhdGlvbiBzZXJ2aWNlLlxuICogQGNsYXNzXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRHJhd0NvbXBvbmVudENvbnRyb2xsZXIoJHNjb3BlLCBuZ2VvTG9jYXRpb24pIHtcbiAgLyoqXG4gICAqIEB0eXBlIHs/aW1wb3J0KCdvbC9NYXAnKS5kZWZhdWx0fVxuICAgKi9cbiAgdGhpcy5tYXAgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7P2ltcG9ydCgnb2wvbGF5ZXIvVmVjdG9yJykuZGVmYXVsdDxpbXBvcnQoJ29sL3NvdXJjZS9WZWN0b3InKS5kZWZhdWx0PGltcG9ydCgnb2wvZ2VvbS9HZW9tZXRyeScpLmRlZmF1bHQ+Pn1cbiAgICovXG4gIHRoaXMubGF5ZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7aW1wb3J0KCduZ2VvL3N0YXRlbWFuYWdlci9Mb2NhdGlvbicpLlN0YXRlbWFuYWdlckxvY2F0aW9ufVxuICAgKi9cbiAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7YW5ndWxhci5JU2NvcGV9XG4gICAqL1xuICB0aGlzLnNjb3BlXyA9ICRzY29wZTtcblxuICAvKipcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuZmVhdHVyZVNlcV8gPSAwO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7P2ltcG9ydCgnb2wvaW50ZXJhY3Rpb24vRHJhdycpLmRlZmF1bHR9XG4gICAqL1xuICB0aGlzLmludGVyYWN0aW9uID0gbnVsbDtcbn1cblxuRHJhd0NvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5tYXApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFwJyk7XG4gIH1cbiAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGxheWVyJyk7XG4gIH1cbiAgLyoqXG4gICAqIEB0eXBlIHtvbFNvdXJjZVZlY3RvcjxpbXBvcnQoJ29sL2dlb20vR2VvbWV0cnknKS5kZWZhdWx0Pn1cbiAgICovXG4gIGNvbnN0IHZlY3RvclNvdXJjZSA9IHRoaXMubGF5ZXIuZ2V0U291cmNlKCk7XG5cbiAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBvbEludGVyYWN0aW9uRHJhdyh7XG4gICAgdHlwZTogJ0xpbmVTdHJpbmcnLFxuICAgIHNvdXJjZTogdmVjdG9yU291cmNlLFxuICB9KTtcblxuICB0aGlzLmludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG4gIHRoaXMubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuICBpbnRlcmFjdGlvbkRlY29yYXRpb24odGhpcy5pbnRlcmFjdGlvbik7XG5cbiAgdGhpcy5pbnRlcmFjdGlvbi5vbihcbiAgICAvKiogQHR5cGUge2ltcG9ydCgnb2wvT2JzZXJ2YWJsZScpLkV2ZW50VHlwZXN9ICovICgnZHJhd2VuZCcpLFxuICAgIC8qKiBAdHlwZSB7ZnVuY3Rpb24oPyk6ID99ICovIChcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtpbXBvcnQoJ29sL01hcEJyb3dzZXJFdmVudCcpLmRlZmF1bHQ8dW5rbm93bj59IGVcbiAgICAgICAqLyAoZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGUuZmVhdHVyZS5zZXQoJ2lkJywgKyt0aGlzLmZlYXR1cmVTZXFfKTtcbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgLy8gRGVhbCB3aXRoIHRoZSBlbmNvZGluZyBhbmQgZGVjb2Rpbmcgb2YgZmVhdHVyZXMgaW4gdGhlIFVSTC5cblxuICBjb25zdCBmaEZvcm1hdCA9IG5ldyBuZ2VvRm9ybWF0RmVhdHVyZUhhc2goKTtcblxuICB2ZWN0b3JTb3VyY2Uub24oXG4gICAgLyoqIEB0eXBlIHtpbXBvcnQoJ29sL09ic2VydmFibGUnKS5FdmVudFR5cGVzfSAqLyAoJ2FkZGZlYXR1cmUnKSxcbiAgICAvKiogQHR5cGUge2Z1bmN0aW9uKD8pOiA/fSAqLyAoXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7aW1wb3J0KCdvbC9NYXBCcm93c2VyRXZlbnQnKS5kZWZhdWx0PHVua25vd24+fSBlXG4gICAgICAgKi8gKGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBmZWF0dXJlID0gZS5mZWF0dXJlO1xuICAgICAgICBmZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgIG5ldyBvbFN0eWxlU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICAgICAgICAgIGNvbG9yOiBbMjU1LCAwLCAwLCAxXSxcbiAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBmZWF0dXJlcyA9IHZlY3RvclNvdXJjZS5nZXRGZWF0dXJlcygpO1xuICAgICAgICBjb25zdCBlbmNvZGVkRmVhdHVyZXMgPSBmaEZvcm1hdC53cml0ZUZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmNvZGVkRmVhdHVyZXMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLnNjb3BlXy4kYXBwbHlBc3luYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nZW9Mb2NhdGlvbl8udXBkYXRlUGFyYW1zKHsnZmVhdHVyZXMnOiBlbmNvZGVkRmVhdHVyZXN9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbnN1cHBvcnRlZCB0eXBlOiAke3R5cGVvZiBlbmNvZGVkRmVhdHVyZXN9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgY29uc3QgZW5jb2RlZEZlYXR1cmVzID0gdGhpcy5uZ2VvTG9jYXRpb25fLmdldFBhcmFtKCdmZWF0dXJlcycpO1xuICBpZiAoZW5jb2RlZEZlYXR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBmZWF0dXJlcyA9IC8qKiBAdHlwZSB7aW1wb3J0KCdvbC9GZWF0dXJlJykuZGVmYXVsdDxpbXBvcnQoJ29sL2dlb20vR2VvbWV0cnknKS5kZWZhdWx0PltdfSAqLyAoXG4gICAgICBmaEZvcm1hdC5yZWFkRmVhdHVyZXMoZW5jb2RlZEZlYXR1cmVzKVxuICAgICk7XG4gICAgdGhpcy5mZWF0dXJlU2VxXyA9IGZlYXR1cmVzLmxlbmd0aDtcbiAgICB2ZWN0b3JTb3VyY2UuYWRkRmVhdHVyZXMoZmVhdHVyZXMpO1xuICB9XG59O1xuXG4vKipcbiAqIENsZWFyIHRoZSB2ZWN0b3IgbGF5ZXIuXG4gKi9cbkRyYXdDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS5jbGVhckxheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbGF5ZXInKTtcbiAgfVxuICBjb25zdCBzb3VyY2UgPSB0aGlzLmxheWVyLmdldFNvdXJjZSgpO1xuICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBvbFNvdXJjZVZlY3RvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIHNvdXJjZScpO1xuICB9XG4gIHNvdXJjZS5jbGVhcih0cnVlKTtcbiAgdGhpcy5mZWF0dXJlU2VxXyA9IDA7XG4gIHRoaXMubmdlb0xvY2F0aW9uXy5kZWxldGVQYXJhbSgnZmVhdHVyZXMnKTtcbn07XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ0FwcERyYXdDb250cm9sbGVyJywgRHJhd0NvbXBvbmVudENvbnRyb2xsZXIpO1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtpbXBvcnQoJ29sL01hcCcpLmRlZmF1bHR9XG4gICAqL1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbXG4gICAgICBuZXcgb2xMYXllclRpbGUoe1xuICAgICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSk7XG5cbiAgY29uc3QgdmVjdG9yU291cmNlID0gbmV3IG9sU291cmNlVmVjdG9yKCk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtpbXBvcnQoJ29sL2xheWVyL1ZlY3RvcicpLmRlZmF1bHQ8aW1wb3J0KCdvbC9zb3VyY2UvVmVjdG9yJykuZGVmYXVsdDxpbXBvcnQoJ29sL2dlb20vR2VvbWV0cnknKS5kZWZhdWx0Pj59XG4gICAqL1xuICB0aGlzLnZlY3RvckxheWVyID0gbmV3IG9sTGF5ZXJWZWN0b3Ioe1xuICAgIHNvdXJjZTogdmVjdG9yU291cmNlLFxuICB9KTtcblxuICAvLyBVc2UgdmVjdG9yTGF5ZXIuc2V0TWFwKG1hcCkgcmF0aGVyIHRoYW4gbWFwLmFkZExheWVyKHZlY3RvckxheWVyKS4gVGhpc1xuICAvLyBtYWtlcyB0aGUgdmVjdG9yIGxheWVyIFwidW5tYW5hZ2VkXCIsIG1lYW5pbmcgdGhhdCBpdCBpcyBhbHdheXMgb24gdG9wLlxuICB0aGlzLnZlY3RvckxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG59XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTtcbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuaW1wb3J0IG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcyBmcm9tICduZ2VvL2Zvcm1hdC9GZWF0dXJlUHJvcGVydGllcyc7XG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVIYXNoU3R5bGVUeXBlJztcbmltcG9ydCB7IHJnYkFycmF5VG9IZXggfSBmcm9tICduZ2VvL3V0aWxzJztcbmltcG9ydCB7IGFzQXJyYXkgYXMgYXNDb2xvckFycmF5IH0gZnJvbSAnb2wvY29sb3InO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7IHRyYW5zZm9ybUdlb21ldHJ5V2l0aE9wdGlvbnMgfSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgb2xGb3JtYXRUZXh0RmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvVGV4dEZlYXR1cmUnO1xuaW1wb3J0IG9sR2VvbUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nJztcbmltcG9ydCBvbEdlb21NdWx0aUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9NdWx0aUxpbmVTdHJpbmcnO1xuaW1wb3J0IG9sR2VvbU11bHRpUG9pbnQgZnJvbSAnb2wvZ2VvbS9NdWx0aVBvaW50JztcbmltcG9ydCBvbEdlb21NdWx0aVBvbHlnb24gZnJvbSAnb2wvZ2VvbS9NdWx0aVBvbHlnb24nO1xuaW1wb3J0IG9sR2VvbVBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IG9sR2VvbVBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uJztcbmltcG9ydCBvbFN0eWxlQ2lyY2xlIGZyb20gJ29sL3N0eWxlL0NpcmNsZSc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbCc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgb2xTdHlsZVRleHQgZnJvbSAnb2wvc3R5bGUvVGV4dCc7XG5pbXBvcnQgR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG52YXIgTGVnYWN5UHJvcGVydGllc18gPSB7fTtcbnZhciBERUZBVUxUX0FDQ1VSQUNZID0gMC4xO1xudmFyIFN0eWxlVHlwZXNfID0ge1xuICAnTGluZVN0cmluZyc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5MSU5FX1NUUklORyxcbiAgJ1BvaW50Jzogbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLlBPSU5ULFxuICAnUG9seWdvbic6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OLFxuICAnTXVsdGlMaW5lU3RyaW5nJzogbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLkxJTkVfU1RSSU5HLFxuICAnTXVsdGlQb2ludCc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0lOVCxcbiAgJ011bHRpUG9seWdvbic6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OXG59O1xudmFyIENIQVI2NF8gPSAnLi1fISpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODlhYmNkZWZnaGprbW5wcXJzdHV2d3h5eic7XG52YXIgR0VPTUVUUllfUkVBREVSU18gPSB7XG4gICdQJzogcmVhZE11bHRpUG9pbnRHZW9tZXRyeV8sXG4gICdMJzogcmVhZE11bHRpTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ0EnOiByZWFkTXVsdGlQb2x5Z29uR2VvbWV0cnlfLFxuICAnbCc6IHJlYWRMaW5lU3RyaW5nR2VvbWV0cnlfLFxuICAncCc6IHJlYWRQb2ludEdlb21ldHJ5XyxcbiAgJ2EnOiByZWFkUG9seWdvbkdlb21ldHJ5X1xufTtcbnZhciBHRU9NRVRSWV9XUklURVJTXyA9IHtcbiAgJ011bHRpTGluZVN0cmluZyc6IHdyaXRlTXVsdGlMaW5lU3RyaW5nR2VvbWV0cnlfLFxuICAnTXVsdGlQb2ludCc6IHdyaXRlTXVsdGlQb2ludEdlb21ldHJ5XyxcbiAgJ011bHRpUG9seWdvbic6IHdyaXRlTXVsdGlQb2x5Z29uR2VvbWV0cnlfLFxuICAnTGluZVN0cmluZyc6IHdyaXRlTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ1BvaW50Jzogd3JpdGVQb2ludEdlb21ldHJ5XyxcbiAgJ1BvbHlnb24nOiB3cml0ZVBvbHlnb25HZW9tZXRyeV9cbn07XG5cbnZhciBGZWF0dXJlSGFzaCA9IGZ1bmN0aW9uIChfb2xGb3JtYXRUZXh0RmVhdHVyZSkge1xuICBfaW5oZXJpdHMoRmVhdHVyZUhhc2gsIF9vbEZvcm1hdFRleHRGZWF0dXJlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZlYXR1cmVIYXNoKTtcblxuICBmdW5jdGlvbiBGZWF0dXJlSGFzaChvcHRfb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGZWF0dXJlSGFzaCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gICAgX3RoaXMuYWNjdXJhY3lfID0gb3B0aW9ucy5hY2N1cmFjeSB8fCBERUZBVUxUX0FDQ1VSQUNZO1xuICAgIF90aGlzLmVuY29kZVN0eWxlc18gPSBvcHRpb25zLmVuY29kZVN0eWxlcyB8fCB0cnVlO1xuICAgIF90aGlzLnByb3BlcnRpZXNGdW5jdGlvbl8gPSBvcHRpb25zLnByb3BlcnRpZXMgfHwgZGVmYXVsdFByb3BlcnRpZXNGdW5jdGlvbl87XG4gICAgX3RoaXMuc2V0U3R5bGVfID0gb3B0aW9ucy5zZXRTdHlsZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zZXRTdHlsZSA6IHRydWU7XG4gICAgX3RoaXMucHJldlhfID0gMDtcbiAgICBfdGhpcy5wcmV2WV8gPSAwO1xuICAgIExlZ2FjeVByb3BlcnRpZXNfID0gb3B0aW9ucy5wcm9wZXJ0aWVzVHlwZSB8fCB7fTtcbiAgICBfdGhpcy5kZWZhdWx0VmFsdWVzXyA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlcyB8fCB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRmVhdHVyZUhhc2gsIFt7XG4gICAga2V5OiBcImRlY29kZUNvb3JkaW5hdGVzX1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWNvZGVDb29yZGluYXRlc18odGV4dCwgb3B0X2ZsYXRDb29yZGluYXRlcykge1xuICAgICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBvcHRfZmxhdENvb3JkaW5hdGVzICE9PSB1bmRlZmluZWQgPyBvcHRfZmxhdENvb3JkaW5hdGVzIDogW107XG4gICAgICB2YXIgaSA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbikge1xuICAgICAgICB2YXIgYiA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHNoaWZ0ID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIGIgPSBDSEFSNjRfLmluZGV4T2YodGV4dC5jaGFyQXQoaW5kZXgrKykpO1xuICAgICAgICAgIHJlc3VsdCB8PSAoYiAmIDB4MWYpIDw8IHNoaWZ0O1xuICAgICAgICAgIHNoaWZ0ICs9IDU7XG4gICAgICAgIH0gd2hpbGUgKGIgPj0gMzIpO1xuXG4gICAgICAgIHZhciBkeCA9IHJlc3VsdCAmIDEgPyB+KHJlc3VsdCA+PiAxKSA6IHJlc3VsdCA+PiAxO1xuICAgICAgICB0aGlzLnByZXZYXyArPSBkeDtcbiAgICAgICAgc2hpZnQgPSAwO1xuICAgICAgICByZXN1bHQgPSAwO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBiID0gQ0hBUjY0Xy5pbmRleE9mKHRleHQuY2hhckF0KGluZGV4KyspKTtcbiAgICAgICAgICByZXN1bHQgfD0gKGIgJiAweDFmKSA8PCBzaGlmdDtcbiAgICAgICAgICBzaGlmdCArPSA1O1xuICAgICAgICB9IHdoaWxlIChiID49IDMyKTtcblxuICAgICAgICB2YXIgZHkgPSByZXN1bHQgJiAxID8gfihyZXN1bHQgPj4gMSkgOiByZXN1bHQgPj4gMTtcbiAgICAgICAgdGhpcy5wcmV2WV8gKz0gZHk7XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tpKytdID0gdGhpcy5wcmV2WF8gKiB0aGlzLmFjY3VyYWN5XztcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW2krK10gPSB0aGlzLnByZXZZXyAqIHRoaXMuYWNjdXJhY3lfO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhdENvb3JkaW5hdGVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmNvZGVDb29yZGluYXRlc19cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlQ29vcmRpbmF0ZXNfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCBvZmZzZXQsIGVuZCkge1xuICAgICAgdmFyIGVuY29kZWRDb29yZGluYXRlcyA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IHN0cmlkZSkge1xuICAgICAgICB2YXIgeCA9IGZsYXRDb29yZGluYXRlc1tpXTtcbiAgICAgICAgdmFyIHkgPSBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgICB4ID0gTWF0aC5mbG9vcih4IC8gdGhpcy5hY2N1cmFjeV8pO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5IC8gdGhpcy5hY2N1cmFjeV8pO1xuICAgICAgICB2YXIgZHggPSB4IC0gdGhpcy5wcmV2WF87XG4gICAgICAgIHZhciBkeSA9IHkgLSB0aGlzLnByZXZZXztcbiAgICAgICAgdGhpcy5wcmV2WF8gPSB4O1xuICAgICAgICB0aGlzLnByZXZZXyA9IHk7XG4gICAgICAgIGVuY29kZWRDb29yZGluYXRlcyArPSBlbmNvZGVTaWduZWROdW1iZXJfKGR4KSArIGVuY29kZVNpZ25lZE51bWJlcl8oZHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jb2RlZENvb3JkaW5hdGVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkRmVhdHVyZUZyb21UZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRGZWF0dXJlRnJvbVRleHQodGV4dCwgb3B0X29wdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KHRleHQubGVuZ3RoID4gMik7XG4gICAgICBjb25zb2xlLmFzc2VydCh0ZXh0WzFdID09PSAnKCcpO1xuICAgICAgY29uc29sZS5hc3NlcnQodGV4dC5lbmRzV2l0aCgnKScpKTtcbiAgICAgIHZhciBzcGxpdEluZGV4ID0gdGV4dC5pbmRleE9mKCd+Jyk7XG4gICAgICB2YXIgZ2VvbWV0cnlUZXh0ID0gc3BsaXRJbmRleCA+PSAwID8gXCJcIi5jb25jYXQodGV4dC5zdWJzdHJpbmcoMCwgc3BsaXRJbmRleCksIFwiKVwiKSA6IHRleHQ7XG4gICAgICB2YXIgZ2VvbWV0cnkgPSB0aGlzLnJlYWRHZW9tZXRyeUZyb21UZXh0KGdlb21ldHJ5VGV4dCwgb3B0X29wdGlvbnMpO1xuICAgICAgdmFyIGZlYXR1cmUgPSBuZXcgb2xGZWF0dXJlKGdlb21ldHJ5KTtcblxuICAgICAgaWYgKHNwbGl0SW5kZXggPj0gMCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlc0FuZFN0eWxlc1RleHQgPSB0ZXh0LnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSwgdGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgc3BsaXRJbmRleCA9IGF0dHJpYnV0ZXNBbmRTdHlsZXNUZXh0LmluZGV4T2YoJ34nKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXNUZXh0ID0gc3BsaXRJbmRleCA+PSAwID8gYXR0cmlidXRlc0FuZFN0eWxlc1RleHQuc3Vic3RyaW5nKDAsIHNwbGl0SW5kZXgpIDogYXR0cmlidXRlc0FuZFN0eWxlc1RleHQ7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNUZXh0ICE9ICcnKSB7XG4gICAgICAgICAgdmFyIHBhcnRzID0gYXR0cmlidXRlc1RleHQuc3BsaXQoXCInXCIpO1xuXG4gICAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHBhcnRzKSxcbiAgICAgICAgICAgICAgX3N0ZXA7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgdmFyIGVuY29kZWRQYXJ0ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIHZhciBwYXJ0ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRQYXJ0KTtcbiAgICAgICAgICAgICAgdmFyIGtleVZhbCA9IHBhcnQuc3BsaXQoJyonKTtcbiAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoa2V5VmFsLmxlbmd0aCA9PT0gMik7XG4gICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlWYWxbMF07XG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGtleVZhbFsxXTtcblxuICAgICAgICAgICAgICBpZiAoIXRoaXMuc2V0U3R5bGVfICYmIExlZ2FjeVByb3BlcnRpZXNfW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBMZWdhY3lQcm9wZXJ0aWVzX1trZXldO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZmVhdHVyZS5zZXQoa2V5LCBjYXN0VmFsdWVfKGtleSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0SW5kZXggPj0gMCkge1xuICAgICAgICAgIHZhciBzdHlsZXNUZXh0ID0gYXR0cmlidXRlc0FuZFN0eWxlc1RleHQuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcblxuICAgICAgICAgIGlmICh0aGlzLnNldFN0eWxlXykge1xuICAgICAgICAgICAgc2V0U3R5bGVJbkZlYXR1cmVfKHN0eWxlc1RleHQsIGZlYXR1cmUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTdHlsZVByb3BlcnRpZXNfKHN0eWxlc1RleHQsIGZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZEZlYXR1cmVzRnJvbVRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZEZlYXR1cmVzRnJvbVRleHQodGV4dCwgb3B0X29wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBjb25zb2xlLmFzc2VydCh0ZXh0LnN0YXJ0c1dpdGgoJ0YnKSk7XG4gICAgICB0aGlzLnByZXZYXyA9IDA7XG4gICAgICB0aGlzLnByZXZZXyA9IDA7XG4gICAgICB2YXIgZmVhdHVyZXMgPSBbXTtcbiAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcblxuICAgICAgd2hpbGUgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0ZXh0LmluZGV4T2YoJyknKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaW5kZXggPj0gMCk7XG4gICAgICAgIHZhciBmZWF0dXJlID0gdGhpcy5yZWFkRmVhdHVyZUZyb21UZXh0KHRleHQuc3Vic3RyaW5nKDAsIGluZGV4ICsgMSksIG9wdF9vcHRpb25zKTtcbiAgICAgICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIF90aGlzMi5kZWZhdWx0VmFsdWVzXykge1xuICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IExlZ2FjeVByb3BlcnRpZXNfW2tleV07XG5cbiAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZlYXR1cmUuc2V0KHByb3BlcnR5LCBfdGhpczIuZGVmYXVsdFZhbHVlc19ba2V5XS5jYWxsKG51bGwsIGZlYXR1cmUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZlYXR1cmVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkR2VvbWV0cnlGcm9tVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkR2VvbWV0cnlGcm9tVGV4dCh0ZXh0LCBvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIGdlb21ldHJ5UmVhZGVyID0gR0VPTUVUUllfUkVBREVSU19bdGV4dFswXV07XG4gICAgICBjb25zb2xlLmFzc2VydChnZW9tZXRyeVJlYWRlciAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIHJldHVybiBnZW9tZXRyeVJlYWRlci5jYWxsKHRoaXMsIHRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3cml0ZUZlYXR1cmVUZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlRmVhdHVyZVRleHQoZmVhdHVyZSwgb3B0X29wdGlvbnMpIHtcbiAgICAgIHZhciBlbmNvZGVkUGFydHMgPSBbXTtcbiAgICAgIHZhciBlbmNvZGVkR2VvbWV0cnkgPSAnJztcbiAgICAgIHZhciBnZW9tZXRyeSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcblxuICAgICAgaWYgKGdlb21ldHJ5KSB7XG4gICAgICAgIGVuY29kZWRHZW9tZXRyeSA9IHRoaXMud3JpdGVHZW9tZXRyeVRleHQoZ2VvbWV0cnksIG9wdF9vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuY29kZWRHZW9tZXRyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGVuY29kZWRHZW9tZXRyeS5lbmRzV2l0aCgnKScpKTtcbiAgICAgICAgZW5jb2RlZEdlb21ldHJ5ID0gZW5jb2RlZEdlb21ldHJ5LnN1YnN0cmluZygwLCBlbmNvZGVkR2VvbWV0cnkubGVuZ3RoIC0gMSk7XG4gICAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKGVuY29kZWRHZW9tZXRyeSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbmNvZGVkUHJvcGVydGllcyA9IFtdO1xuICAgICAgdmFyIHByb3BGdW5jdGlvbiA9IHRoaXMucHJvcGVydGllc0Z1bmN0aW9uXyhmZWF0dXJlKTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BGdW5jdGlvbikge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wRnVuY3Rpb25ba2V5XTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiBrZXkgIT09IGZlYXR1cmUuZ2V0R2VvbWV0cnlOYW1lKCkpIHtcbiAgICAgICAgICBpZiAoZW5jb2RlZFByb3BlcnRpZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBlbmNvZGVkUHJvcGVydGllcy5wdXNoKFwiJ1wiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChcIlwiLmNvbmNhdChrZXkucmVwbGFjZSgvWygpJypdL2csICdfJyksIFwiKlwiKS5jb25jYXQodmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9bKCknKl0vZywgJ18nKSkpO1xuICAgICAgICAgIGVuY29kZWRQcm9wZXJ0aWVzLnB1c2goZW5jb2RlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVuY29kZWRQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5jb2RlZFBhcnRzLnB1c2goJ34nKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZW5jb2RlZFBhcnRzLCBlbmNvZGVkUHJvcGVydGllcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVuY29kZVN0eWxlc18pIHtcbiAgICAgICAgdmFyIHN0eWxlRnVuY3Rpb24gPSBmZWF0dXJlLmdldFN0eWxlRnVuY3Rpb24oKTtcblxuICAgICAgICBpZiAoc3R5bGVGdW5jdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlRnVuY3Rpb24oZmVhdHVyZSwgMCk7XG5cbiAgICAgICAgICBpZiAoc3R5bGVzKSB7XG4gICAgICAgICAgICB2YXIgZW5jb2RlZFN0eWxlcyA9IFtdO1xuICAgICAgICAgICAgc3R5bGVzID0gQXJyYXkuaXNBcnJheShzdHlsZXMpID8gc3R5bGVzIDogW3N0eWxlc107XG5cbiAgICAgICAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGdlb21ldHJ5Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVuY29kZVN0eWxlc18oc3R5bGVzLCBnZW9tZXRyeS5nZXRUeXBlKCksIGVuY29kZWRTdHlsZXMpO1xuXG4gICAgICAgICAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKCd+Jyk7XG4gICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVuY29kZWRQYXJ0cywgZW5jb2RlZFN0eWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKCcpJyk7XG4gICAgICByZXR1cm4gZW5jb2RlZFBhcnRzLmpvaW4oJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3cml0ZUZlYXR1cmVzVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZUZlYXR1cmVzVGV4dChmZWF0dXJlcywgb3B0X29wdGlvbnMpIHtcbiAgICAgIHRoaXMucHJldlhfID0gMDtcbiAgICAgIHRoaXMucHJldllfID0gMDtcbiAgICAgIHZhciB0ZXh0QXJyYXkgPSBbXTtcblxuICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGV4dEFycmF5LnB1c2goJ0YnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBmZWF0dXJlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgdGV4dEFycmF5LnB1c2godGhpcy53cml0ZUZlYXR1cmVUZXh0KGZlYXR1cmVzW2ldLCBvcHRfb3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndyaXRlR2VvbWV0cnlUZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlR2VvbWV0cnlUZXh0KGdlb21ldHJ5LCBvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIGdlb21ldHJ5V3JpdGVyID0gR0VPTUVUUllfV1JJVEVSU19bZ2VvbWV0cnkuZ2V0VHlwZSgpXTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KGdlb21ldHJ5V3JpdGVyICE9PSB1bmRlZmluZWQpO1xuICAgICAgdmFyIHRyYW5zZm9ybWVkR2VvbWV0cnkgPSB0cmFuc2Zvcm1HZW9tZXRyeVdpdGhPcHRpb25zKGdlb21ldHJ5LCB0cnVlLCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIGlmICghKHRyYW5zZm9ybWVkR2VvbWV0cnkgaW5zdGFuY2VvZiBHZW9tZXRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHRyYW5zZm9ybWVkR2VvbWV0cnknKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVuY0dlb20gPSBnZW9tZXRyeVdyaXRlci5jYWxsKHRoaXMsIHRyYW5zZm9ybWVkR2VvbWV0cnkpO1xuXG4gICAgICBpZiAoIWVuY0dlb20pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVuY29kZWRHZW9tZXRyeScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jR2VvbTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmVhdHVyZUhhc2g7XG59KG9sRm9ybWF0VGV4dEZlYXR1cmUpO1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlSGFzaDtcblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGdW5jdGlvbl8oZmVhdHVyZSkge1xuICByZXR1cm4gZmVhdHVyZS5nZXRQcm9wZXJ0aWVzKCk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVNpZ25lZE51bWJlcl8obnVtKSB7XG4gIHZhciBzaWduZWROdW0gPSBudW0gPDwgMTtcblxuICBpZiAobnVtIDwgMCkge1xuICAgIHNpZ25lZE51bSA9IH5zaWduZWROdW07XG4gIH1cblxuICByZXR1cm4gZW5jb2RlTnVtYmVyXyhzaWduZWROdW0pO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVOdW1iZXJfKG51bSkge1xuICB2YXIgZW5jb2RlZE51bWJlciA9ICcnO1xuXG4gIHdoaWxlIChudW0gPj0gMHgyMCkge1xuICAgIGVuY29kZWROdW1iZXIgKz0gQ0hBUjY0Xy5jaGFyQXQoMHgyMCB8IG51bSAmIDB4MWYpO1xuICAgIG51bSA+Pj0gNTtcbiAgfVxuXG4gIGVuY29kZWROdW1iZXIgKz0gQ0hBUjY0Xy5jaGFyQXQobnVtKTtcbiAgcmV0dXJuIGVuY29kZWROdW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlc18oc3R5bGVzLCBnZW9tZXRyeVR5cGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgdmFyIHN0eWxlVHlwZSA9IFN0eWxlVHlwZXNfW2dlb21ldHJ5VHlwZV07XG4gIGNvbnNvbGUuYXNzZXJ0KHN0eWxlVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHN0eWxlcyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIHN0eWxlID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgdmFyIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHZhciBpbWFnZVN0eWxlID0gc3R5bGUuZ2V0SW1hZ2UoKTtcbiAgICAgIHZhciBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgICAgdmFyIHRleHRTdHlsZSA9IHN0eWxlLmdldFRleHQoKTtcblxuICAgICAgaWYgKHN0eWxlVHlwZSA9PSBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9MWUdPTikge1xuICAgICAgICBpZiAoZmlsbFN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW5jb2RlU3R5bGVQb2x5Z29uXyhmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdHlsZVR5cGUgPT0gbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLkxJTkVfU1RSSU5HKSB7XG4gICAgICAgIGlmIChzdHJva2VTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVuY29kZVN0eWxlTGluZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0eWxlVHlwZSA9PSBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9JTlQpIHtcbiAgICAgICAgaWYgKGltYWdlU3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgICBlbmNvZGVTdHlsZVBvaW50XyhpbWFnZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGV4dFN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgIGVuY29kZVN0eWxlVGV4dF8odGV4dFN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlTGluZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgZW5jb2RlU3R5bGVTdHJva2VfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVQb2ludF8oaW1hZ2VTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICBpZiAoaW1hZ2VTdHlsZSBpbnN0YW5jZW9mIG9sU3R5bGVDaXJjbGUpIHtcbiAgICB2YXIgcmFkaXVzID0gaW1hZ2VTdHlsZS5nZXRSYWRpdXMoKTtcblxuICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaChcIidcIik7XG4gICAgfVxuXG4gICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcInBvaW50UmFkaXVzKlwiLmNvbmNhdChyYWRpdXMpKSk7XG4gICAgdmFyIGZpbGxTdHlsZSA9IGltYWdlU3R5bGUuZ2V0RmlsbCgpO1xuXG4gICAgaWYgKGZpbGxTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgZW5jb2RlU3R5bGVGaWxsXyhmaWxsU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgIH1cblxuICAgIHZhciBzdHJva2VTdHlsZSA9IGltYWdlU3R5bGUuZ2V0U3Ryb2tlKCk7XG5cbiAgICBpZiAoc3Ryb2tlU3R5bGUgIT09IG51bGwpIHtcbiAgICAgIGVuY29kZVN0eWxlU3Ryb2tlXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlUG9seWdvbl8oZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG5cbiAgaWYgKHN0cm9rZVN0eWxlICE9PSBudWxsKSB7XG4gICAgZW5jb2RlU3R5bGVTdHJva2VfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICB2YXIgcHJvcGVydHlOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnZmlsbENvbG9yJztcbiAgdmFyIGZpbGxDb2xvciA9IGZpbGxTdHlsZS5nZXRDb2xvcigpO1xuICB2YXIgZmlsbENvbG9ySGV4O1xuXG4gIGlmIChmaWxsQ29sb3IgIT09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsQ29sb3IpKSB7XG4gICAgICBmaWxsQ29sb3JIZXggPSByZ2JBcnJheVRvSGV4KGZpbGxDb2xvcik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlsbENvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgZmlsbENvbG9ySGV4ID0gcmdiQXJyYXlUb0hleChhc0NvbG9yQXJyYXkoZmlsbENvbG9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgY29sb3InKTtcbiAgICB9XG5cbiAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBlbmNvZGVkU3R5bGVzLnB1c2goXCInXCIpO1xuICAgIH1cblxuICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoXCJcIi5jb25jYXQocHJvcGVydHlOYW1lLCBcIipcIikuY29uY2F0KGZpbGxDb2xvckhleCkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZVN0cm9rZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgdmFyIHN0cm9rZUNvbG9yID0gc3Ryb2tlU3R5bGUuZ2V0Q29sb3IoKTtcblxuICBpZiAoc3Ryb2tlQ29sb3IgIT09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHJva2VDb2xvcikpIHtcbiAgICAgIHZhciBzdHJva2VDb2xvckhleCA9IHJnYkFycmF5VG9IZXgoc3Ryb2tlQ29sb3IpO1xuXG4gICAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVuY29kZWRTdHlsZXMucHVzaChcIidcIik7XG4gICAgICB9XG5cbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoXCJzdHJva2VDb2xvcipcIi5jb25jYXQoc3Ryb2tlQ29sb3JIZXgpKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0cm9rZVdpZHRoID0gc3Ryb2tlU3R5bGUuZ2V0V2lkdGgoKTtcblxuICBpZiAoc3Ryb2tlV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaChcIidcIik7XG4gICAgfVxuXG4gICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcInN0cm9rZVdpZHRoKlwiLmNvbmNhdChzdHJva2VXaWR0aCkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZVRleHRfKHRleHRTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICB2YXIgZm9udFN0eWxlID0gdGV4dFN0eWxlLmdldEZvbnQoKTtcblxuICBpZiAoZm9udFN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZm9udCA9IGZvbnRTdHlsZS5zcGxpdCgnICcpO1xuXG4gICAgaWYgKGZvbnQubGVuZ3RoID49IDMpIHtcbiAgICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKFwiJ1wiKTtcbiAgICAgIH1cblxuICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcImZvbnRTaXplKlwiLmNvbmNhdChmb250WzFdKSkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaWxsU3R5bGUgPSB0ZXh0U3R5bGUuZ2V0RmlsbCgpO1xuXG4gIGlmIChmaWxsU3R5bGUgIT09IG51bGwpIHtcbiAgICBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcywgJ2ZvbnRDb2xvcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRMaW5lU3RyaW5nR2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdGFydHNXaXRoKCdsKCcpKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5lbmRzV2l0aCgnKScpKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyh0ZXh0KTtcbiAgcmV0dXJuIG5ldyBvbEdlb21MaW5lU3RyaW5nKGZsYXRDb29yZGluYXRlcywgJ1hZJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRNdWx0aUxpbmVTdHJpbmdHZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN0YXJ0c1dpdGgoJ0woJykpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LmVuZHNXaXRoKCcpJykpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IFtdO1xuICB2YXIgZW5kcyA9IFtdO1xuICB2YXIgbGluZVN0cmluZ3MgPSB0ZXh0LnNwbGl0KFwiJ1wiKTtcblxuICBmb3IgKHZhciBpID0gMCwgaWkgPSBsaW5lU3RyaW5ncy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18obGluZVN0cmluZ3NbaV0sIGZsYXRDb29yZGluYXRlcyk7XG4gICAgZW5kc1tpXSA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gbmV3IG9sR2VvbU11bHRpTGluZVN0cmluZyhmbGF0Q29vcmRpbmF0ZXMsICdYWScsIGVuZHMpO1xufVxuXG5mdW5jdGlvbiByZWFkUG9pbnRHZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN0YXJ0c1dpdGgoJ3AoJykpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LmVuZHNXaXRoKCcpJykpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKHRleHQpO1xuICBjb25zb2xlLmFzc2VydChmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAyKTtcbiAgcmV0dXJuIG5ldyBvbEdlb21Qb2ludChmbGF0Q29vcmRpbmF0ZXMsICdYWScpO1xufVxuXG5mdW5jdGlvbiByZWFkTXVsdGlQb2ludEdlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3RhcnRzV2l0aCgnUCgnKSk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuZW5kc1dpdGgoJyknKSk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18odGV4dCk7XG4gIHJldHVybiBuZXcgb2xHZW9tTXVsdGlQb2ludChmbGF0Q29vcmRpbmF0ZXMsICdYWScpO1xufVxuXG5mdW5jdGlvbiByZWFkUG9seWdvbkdlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3RhcnRzV2l0aCgnYSgnKSk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuZW5kc1dpdGgoJyknKSk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gW107XG4gIHZhciBlbmRzID0gW107XG4gIHZhciByaW5ncyA9IHRleHQuc3BsaXQoXCInXCIpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IHJpbmdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyhyaW5nc1tpXSwgZmxhdENvb3JkaW5hdGVzKTtcbiAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzBdO1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1tlbmRzW2kgLSAxXV07XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzW2VuZHNbaSAtIDFdICsgMV07XG4gICAgfVxuXG4gICAgZW5kc1tpXSA9IGVuZDtcbiAgfVxuXG4gIHJldHVybiBuZXcgb2xHZW9tUG9seWdvbihmbGF0Q29vcmRpbmF0ZXMsICdYWScsIGVuZHMpO1xufVxuXG5mdW5jdGlvbiByZWFkTXVsdGlQb2x5Z29uR2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdGFydHNXaXRoKCdBKCcpKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5lbmRzV2l0aCgnKScpKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgdmFyIGVuZHNzID0gW107XG4gIHZhciBwb2x5Z29ucyA9IHRleHQuc3BsaXQoJykoJyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gcG9seWdvbnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIHZhciByaW5ncyA9IHBvbHlnb25zW2ldLnNwbGl0KFwiJ1wiKTtcbiAgICBlbmRzc1tpXSA9IFtdO1xuICAgIHZhciBlbmRzID0gZW5kc3NbaV07XG5cbiAgICBmb3IgKHZhciBqID0gMCwgamogPSByaW5ncy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyhyaW5nc1tqXSwgZmxhdENvb3JkaW5hdGVzKTtcbiAgICAgIHZhciBlbmQgPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzBdO1xuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1tlbmRzW2ogLSAxXV07XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbZW5kc1tqIC0gMV0gKyAxXTtcbiAgICAgIH1cblxuICAgICAgZW5kc1tqXSA9IGVuZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IG9sR2VvbU11bHRpUG9seWdvbihmbGF0Q29vcmRpbmF0ZXMsICdYWScsIGVuZHNzKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVJbkZlYXR1cmVfKHRleHQsIGZlYXR1cmUpIHtcbiAgaWYgKHRleHQgPT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcHJvcGVydGllcyA9IGdldFN0eWxlUHJvcGVydGllc18odGV4dCwgZmVhdHVyZSk7XG4gIHZhciBmaWxsQ29sb3IgPSBwcm9wZXJ0aWVzLmZpbGxDb2xvcjtcbiAgdmFyIGZvbnRTaXplID0gcHJvcGVydGllcy5mb250U2l6ZTtcbiAgdmFyIGZvbnRDb2xvciA9IHByb3BlcnRpZXMuZm9udENvbG9yO1xuICB2YXIgcG9pbnRSYWRpdXMgPSBwcm9wZXJ0aWVzLnBvaW50UmFkaXVzO1xuICB2YXIgc3Ryb2tlQ29sb3IgPSBwcm9wZXJ0aWVzLnN0cm9rZUNvbG9yO1xuICB2YXIgc3Ryb2tlV2lkdGggPSBwcm9wZXJ0aWVzLnN0cm9rZVdpZHRoO1xuICB2YXIgZmlsbFN0eWxlID0gbnVsbDtcblxuICBpZiAoZmlsbENvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICBmaWxsU3R5bGUgPSBuZXcgb2xTdHlsZUZpbGwoe1xuICAgICAgY29sb3I6IGZpbGxDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0cm9rZVN0eWxlID0gbnVsbDtcblxuICBpZiAoc3Ryb2tlQ29sb3IgIT09IHVuZGVmaW5lZCAmJiBzdHJva2VXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJva2VXaWR0aCAhPSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHN0cm9rZVdpZHRoJyk7XG4gICAgfVxuXG4gICAgc3Ryb2tlU3R5bGUgPSBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXG4gICAgICB3aWR0aDogc3Ryb2tlV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBpbWFnZVN0eWxlID0gbnVsbDtcblxuICBpZiAocG9pbnRSYWRpdXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgcG9pbnRSYWRpdXMgIT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwb2ludFJhZGl1cycpO1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IHtcbiAgICAgIHJhZGl1czogcG9pbnRSYWRpdXNcbiAgICB9O1xuXG4gICAgaWYgKGZpbGxTdHlsZSkge1xuICAgICAgX29wdGlvbnMuZmlsbCA9IGZpbGxTdHlsZTtcbiAgICB9XG5cbiAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICAgIF9vcHRpb25zLnN0cm9rZSA9IHN0cm9rZVN0eWxlO1xuICAgIH1cblxuICAgIGltYWdlU3R5bGUgPSBuZXcgb2xTdHlsZUNpcmNsZShfb3B0aW9ucyk7XG4gICAgZmlsbFN0eWxlID0gbnVsbDtcbiAgICBzdHJva2VTdHlsZSA9IG51bGw7XG4gIH1cblxuICB2YXIgdGV4dFN0eWxlID0gbnVsbDtcblxuICBpZiAoZm9udFNpemUgIT09IHVuZGVmaW5lZCAmJiBmb250Q29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHRleHRTdHlsZSA9IG5ldyBvbFN0eWxlVGV4dCh7XG4gICAgICBmb250OiBcIlwiLmNvbmNhdChmb250U2l6ZSwgXCIgc2Fucy1zZXJpZlwiKSxcbiAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgIGNvbG9yOiBmb250Q29sb3JcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gIGlmIChmaWxsU3R5bGUpIHtcbiAgICBvcHRpb25zLmZpbGwgPSBmaWxsU3R5bGU7XG4gIH1cblxuICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICBvcHRpb25zLnN0cm9rZSA9IHN0cm9rZVN0eWxlO1xuICB9XG5cbiAgaWYgKGltYWdlU3R5bGUpIHtcbiAgICBvcHRpb25zLmltYWdlID0gaW1hZ2VTdHlsZTtcbiAgfVxuXG4gIGlmICh0ZXh0U3R5bGUpIHtcbiAgICBvcHRpb25zLnRleHQgPSB0ZXh0U3R5bGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKG9wdGlvbnMpO1xuICBmZWF0dXJlLnNldFN0eWxlKHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wZXJ0aWVzXyh0ZXh0LCBmZWF0dXJlKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3R5bGVQcm9wZXJ0aWVzXyh0ZXh0LCBmZWF0dXJlKTtcbiAgdmFyIGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuXG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbVBvaW50KSB7XG4gICAgaWYgKHByb3BlcnRpZXMuaXNMYWJlbCB8fCBwcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19URVhUXSkge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXMuc3Ryb2tlQ29sb3I7XG4gICAgICBkZWxldGUgcHJvcGVydGllcy5maWxsQ29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLmZvbnRDb2xvcjtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLmZvbnRTaXplO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgcHJvcGVydGllcy5mb250Q29sb3I7XG5cbiAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21MaW5lU3RyaW5nKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllcy5maWxsQ29sb3I7XG4gICAgICBkZWxldGUgcHJvcGVydGllcy5maWxsT3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcGVydGllcy5mb250U2l6ZSkge1xuICAgIHZhciBmb250U2l6ZVN0ciA9IHByb3BlcnRpZXMuZm9udFNpemU7XG5cbiAgICBpZiAodHlwZW9mIGZvbnRTaXplU3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBmb250U2l6ZVN0ciB0eXBlJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvbnRTaXplID0gcGFyc2VGbG9hdChmb250U2l6ZVN0cik7XG5cbiAgICBpZiAoZm9udFNpemVTdHIuaW5jbHVkZXMoJ3B4JykpIHtcbiAgICAgIGZvbnRTaXplID0gTWF0aC5yb3VuZChmb250U2l6ZSAvIDEuMzMzMzMzKTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmZvbnRTaXplID0gZm9udFNpemU7XG4gIH1cblxuICB2YXIgY2xvbmUgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnRpZXNba2V5XTtcblxuICAgIGlmIChMZWdhY3lQcm9wZXJ0aWVzX1trZXldKSB7XG4gICAgICBjbG9uZVtMZWdhY3lQcm9wZXJ0aWVzX1trZXldXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9uZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZmVhdHVyZS5zZXRQcm9wZXJ0aWVzKGNsb25lKTtcbn1cblxuZnVuY3Rpb24gY2FzdFZhbHVlXyhrZXksIHZhbHVlKSB7XG4gIHZhciBudW1Qcm9wZXJ0aWVzID0gW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5BTkdMRSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLk9QQUNJVFksIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TSVpFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU1RST0tFLCAncG9pbnRSYWRpdXMnLCAnc3Ryb2tlV2lkdGgnXTtcbiAgdmFyIGJvb2xQcm9wZXJ0aWVzID0gW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19DSVJDTEUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19SRUNUQU5HTEUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19URVhULCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU0hPV19NRUFTVVJFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU0hPV19MQUJFTCwgJ2lzQ2lyY2xlJywgJ2lzUmVjdGFuZ2xlJywgJ2lzTGFiZWwnLCAnc2hvd01lYXN1cmUnLCAnc2hvd0xhYmVsJ107XG5cbiAgaWYgKG51bVByb3BlcnRpZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgIHJldHVybiArdmFsdWU7XG4gIH0gZWxzZSBpZiAoYm9vbFByb3BlcnRpZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnRpZXNfKHRleHQsIGZlYXR1cmUpIHtcbiAgdmFyIHBhcnRzID0gdGV4dC5zcGxpdChcIidcIik7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG5cbiAgdmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihwYXJ0cyksXG4gICAgICBfc3RlcDM7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjMucygpOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMubigpKS5kb25lOykge1xuICAgICAgdmFyIGVuY29kZWRQYXJ0ID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgdmFyIHBhcnQgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFBhcnQpO1xuICAgICAgdmFyIGtleVZhbCA9IHBhcnQuc3BsaXQoJyonKTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KGtleVZhbC5sZW5ndGggPT09IDIpO1xuICAgICAgdmFyIGtleSA9IGtleVZhbFswXTtcbiAgICAgIHZhciB2YWwgPSBrZXlWYWxbMV07XG4gICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjYXN0VmFsdWVfKGtleSwgdmFsKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjMuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjMuZigpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIHdyaXRlTGluZVN0cmluZ0dlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21MaW5lU3RyaW5nKSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICByZXR1cm4gXCJsKFwiLmNvbmNhdCh0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgMCwgZW5kKSwgXCIpXCIpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHdyaXRlTXVsdGlMaW5lU3RyaW5nR2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbU11bHRpTGluZVN0cmluZykge1xuICAgIHZhciBlbmRzID0gZ2VvbWV0cnkuZ2V0RW5kcygpO1xuICAgIHZhciBsaW5lU3RyaW5nQ291bnQgPSBlbmRzLmxlbmd0aDtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciB0ZXh0QXJyYXkgPSBbJ0woJ107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVTdHJpbmdDb3VudDsgKytpKSB7XG4gICAgICB2YXIgZW5kID0gZW5kc1tpXTtcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kKTtcblxuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgdGV4dEFycmF5LnB1c2goXCInXCIpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0QXJyYXkucHVzaCh0ZXh0KTtcbiAgICAgIG9mZnNldCA9IGVuZDtcbiAgICB9XG5cbiAgICB0ZXh0QXJyYXkucHVzaCgnKScpO1xuICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gd3JpdGVQb2ludEdlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21Qb2ludCkge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFwicChcIi5jb25jYXQodGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIDAsIGVuZCksIFwiKVwiKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB3cml0ZU11bHRpUG9pbnRHZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTXVsdGlQb2ludCkge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFwiUChcIi5jb25jYXQodGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIDAsIGVuZCksIFwiKVwiKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVSaW5nc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kcywgdGV4dEFycmF5KSB7XG4gIHZhciBsaW5lYXJSaW5nQ291bnQgPSBlbmRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVhclJpbmdDb3VudDsgKytpKSB7XG4gICAgdmFyIGVuZCA9IGVuZHNbaV0gLSBzdHJpZGU7XG4gICAgdmFyIHRleHQgPSB0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmQpO1xuXG4gICAgaWYgKGkgIT09IDApIHtcbiAgICAgIHRleHRBcnJheS5wdXNoKFwiJ1wiKTtcbiAgICB9XG5cbiAgICB0ZXh0QXJyYXkucHVzaCh0ZXh0KTtcbiAgICBvZmZzZXQgPSBlbmRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gd3JpdGVQb2x5Z29uR2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbVBvbHlnb24pIHtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBlbmRzID0gZ2VvbWV0cnkuZ2V0RW5kcygpO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciB0ZXh0QXJyYXkgPSBbJ2EoJ107XG4gICAgZW5jb2RlUmluZ3NfLmNhbGwodGhpcywgZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kcywgdGV4dEFycmF5KTtcbiAgICB0ZXh0QXJyYXkucHVzaCgnKScpO1xuICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gd3JpdGVNdWx0aVBvbHlnb25HZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTXVsdGlQb2x5Z29uKSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kc3MgPSBnZW9tZXRyeS5nZXRFbmRzcygpO1xuICAgIHZhciBwb2x5Z29uQ291bnQgPSBlbmRzcy5sZW5ndGg7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIHRleHRBcnJheSA9IFsnQSddO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2x5Z29uQ291bnQ7ICsraSkge1xuICAgICAgdmFyIGVuZHMgPSBlbmRzc1tpXTtcbiAgICAgIHRleHRBcnJheS5wdXNoKCcoJyk7XG4gICAgICBvZmZzZXQgPSBlbmNvZGVSaW5nc18uY2FsbCh0aGlzLCBmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmRzLCB0ZXh0QXJyYXkpO1xuICAgICAgdGV4dEFycmF5LnB1c2goJyknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dEFycmF5LmpvaW4oJycpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgZ2VvbWV0cnkgdHlwZScpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBMSU5FX1NUUklORzogJ0xpbmVTdHJpbmcnLFxuICBQT0lOVDogJ1BvaW50JyxcbiAgUE9MWUdPTjogJ1BvbHlnb24nXG59OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25VQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMTVCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=