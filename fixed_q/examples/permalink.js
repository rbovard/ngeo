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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([30,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/permalink.css":
/*!********************************!*\
  !*** ./examples/permalink.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/permalink.css?");

/***/ }),

/***/ "./examples/permalink.js":
/*!*******************************!*\
  !*** ./examples/permalink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _permalink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permalink.css */ \"./examples/permalink.css\");\n/* harmony import */ var _permalink_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_permalink_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ngeo_format_FeatureHash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/format/FeatureHash.js */ \"./src/format/FeatureHash.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\n/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/misc/debounce.js */ \"./src/misc/debounce.js\");\n/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/misc/decorate.js */ \"./src/misc/decorate.js\");\n/* harmony import */ var ngeo_statemanager_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/statemanager/module.js */ \"./src/statemanager/module.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/interaction/Draw.js */ \"./node_modules/ol/interaction/Draw.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector.js */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/OSM.js */ \"./node_modules/ol/source/OSM.js\");\n/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/Vector.js */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Stroke.js */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Style.js */ \"./node_modules/ol/style/Style.js\");\nDrawComponentController.$inject = [\"$scope\", \"ngeoLocation\"];\nMapComponentController.$inject = [\"ngeoLocation\", \"ngeoDebounce\"];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name, ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name, ngeo_statemanager_module_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].name]);\nvar mapComponent = {\n  controller: 'AppMapController as ctrl',\n  bindings: {\n    'map': '=appMap'\n  },\n  template: '<div ngeo-map=ctrl.map></div>'\n};\nmodule.component('appMap', mapComponent);\n\nfunction MapComponentController(ngeoLocation, ngeoDebounce) {\n  this.map = null;\n  this.ngeoLocation_ = ngeoLocation;\n  this.ngeoDebounce_ = ngeoDebounce;\n}\n\nmodule.controller('AppMapController', MapComponentController);\n\nMapComponentController.prototype.$onInit = function () {\n  var _this = this;\n\n  if (!this.map) {\n    throw new Error('Missing map');\n  }\n\n  var view = this.map.getView();\n  var zoom_ = this.ngeoLocation_.getParam('z');\n  var zoom = zoom_ !== undefined ? +zoom_ : 4;\n  var x = this.ngeoLocation_.getParam('x');\n  var y = this.ngeoLocation_.getParam('y');\n  var center = x !== undefined && y !== undefined ? [+x, +y] : [0, 0];\n  view.setCenter(center);\n  view.setZoom(zoom);\n  this.ngeoLocation_.updateParams({\n    'z': \"\" + zoom,\n    'x': \"\" + Math.round(center[0]),\n    'y': \"\" + Math.round(center[1])\n  });\n  view.on('propertychange', this.ngeoDebounce_(function (e) {\n    var center = view.getCenter();\n\n    if (!center) {\n      throw new Error('Missing center');\n    }\n\n    var params = {\n      'z': \"\" + view.getZoom(),\n      'x': \"\" + Math.round(center[0]),\n      'y': \"\" + Math.round(center[1])\n    };\n\n    _this.ngeoLocation_.updateParams(params);\n  }, 300, true));\n};\n\nvar drawComponent = {\n  controller: 'AppDrawController as ctrl',\n  bindings: {\n    'map': '=appDrawMap',\n    'layer': '=appDrawLayer'\n  },\n  template: '<label>Enable drawing:' + '<input type=\"checkbox\" ng-model=\"ctrl.interaction.active\" />' + '</label><br>' + '<button ng-click=\"ctrl.clearLayer()\">Clear layer</button>'\n};\nmodule.component('appDraw', drawComponent);\n\nfunction DrawComponentController($scope, ngeoLocation) {\n  this.map = null;\n  this.layer = null;\n  this.ngeoLocation_ = ngeoLocation;\n  this.scope_ = $scope;\n  this.featureSeq_ = 0;\n  this.interaction = null;\n}\n\nDrawComponentController.prototype.$onInit = function () {\n  var _this2 = this;\n\n  if (!this.map) {\n    throw new Error('Missing map');\n  }\n\n  if (!this.layer) {\n    throw new Error('Missing layer');\n  }\n\n  var vectorSource = this.layer.getSource();\n  this.interaction = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    type: 'LineString',\n    source: vectorSource\n  });\n  this.interaction.setActive(false);\n  this.map.addInteraction(this.interaction);\n  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_5__[\"interactionDecoration\"])(this.interaction);\n  this.interaction.on('drawend', function (e) {\n    e.feature.set('id', ++_this2.featureSeq_);\n  });\n  var fhFormat = new ngeo_format_FeatureHash_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  vectorSource.on('addfeature', function (e) {\n    var feature = e.feature;\n    feature.setStyle(new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]({\n        color: [255, 0, 0, 1],\n        width: 2\n      })\n    }));\n    var features = vectorSource.getFeatures();\n    var encodedFeatures = fhFormat.writeFeatures(features);\n\n    _this2.scope_.$applyAsync(function () {\n      _this2.ngeoLocation_.updateParams({\n        'features': encodedFeatures\n      });\n    });\n  });\n  var encodedFeatures = this.ngeoLocation_.getParam('features');\n\n  if (encodedFeatures !== undefined) {\n    var features = fhFormat.readFeatures(encodedFeatures);\n    this.featureSeq_ = features.length;\n    vectorSource.addFeatures(features);\n  }\n};\n\nDrawComponentController.prototype.clearLayer = function () {\n  if (!this.layer) {\n    throw new Error('Missing layer');\n  }\n\n  var source = this.layer.getSource();\n\n  if (!(source instanceof ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])) {\n    throw new Error('Wrong source');\n  }\n\n  source.clear(true);\n  this.featureSeq_ = 0;\n  this.ngeoLocation_.deleteParam('features');\n};\n\nmodule.controller('AppDrawController', DrawComponentController);\n\nfunction MainController() {\n  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]()\n    })]\n  });\n  var vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]();\n  this.vectorLayer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n    source: vectorSource\n  });\n  this.vectorLayer.setMap(this.map);\n}\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./examples/permalink.js?");

/***/ }),

/***/ "./node_modules/ol/format/Feature.js":
/*!****************************************************************************************************!*\
  !*** delegated ./node_modules/ol/format/Feature.js from dll-reference vendor_e4544f9f18f52e898dc0 ***!
  \****************************************************************************************************/
/*! exports provided: default, transformGeometryWithOptions, transformExtentWithOptions */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_e4544f9f18f52e898dc0 */ \"dll-reference vendor_e4544f9f18f52e898dc0\"))(53);\n\n//# sourceURL=webpack:///delegated_./node_modules/ol/format/Feature.js_from_dll-reference_vendor_e4544f9f18f52e898dc0?");

/***/ }),

/***/ "./node_modules/ol/format/TextFeature.js":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/ol/format/TextFeature.js from dll-reference vendor_e4544f9f18f52e898dc0 ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_e4544f9f18f52e898dc0 */ \"dll-reference vendor_e4544f9f18f52e898dc0\"))(992);\n\n//# sourceURL=webpack:///delegated_./node_modules/ol/format/TextFeature.js_from_dll-reference_vendor_e4544f9f18f52e898dc0?");

/***/ }),

/***/ "./node_modules/ol/geom/GeometryLayout.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/GeometryLayout.js from dll-reference vendor_e4544f9f18f52e898dc0 ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_e4544f9f18f52e898dc0 */ \"dll-reference vendor_e4544f9f18f52e898dc0\"))(27);\n\n//# sourceURL=webpack:///delegated_./node_modules/ol/geom/GeometryLayout.js_from_dll-reference_vendor_e4544f9f18f52e898dc0?");

/***/ }),

/***/ "./src/format/FeatureHash.js":
/*!***********************************!*\
  !*** ./src/format/FeatureHash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/format/FeatureProperties.js */ \"./src/format/FeatureProperties.js\");\n/* harmony import */ var ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/FeatureHashStyleType.js */ \"./src/format/FeatureHashStyleType.js\");\n/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ \"./src/utils.js\");\n/* harmony import */ var ol_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/color.js */ \"./node_modules/ol/color.js\");\n/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature.js */ \"./node_modules/ol/Feature.js\");\n/* harmony import */ var ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/Feature.js */ \"./node_modules/ol/format/Feature.js\");\n/* harmony import */ var ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/TextFeature.js */ \"./node_modules/ol/format/TextFeature.js\");\n/* harmony import */ var ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/GeometryLayout.js */ \"./node_modules/ol/geom/GeometryLayout.js\");\n/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/LineString.js */ \"./node_modules/ol/geom/LineString.js\");\n/* harmony import */ var ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/MultiLineString.js */ \"./node_modules/ol/geom/MultiLineString.js\");\n/* harmony import */ var ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom/MultiPoint.js */ \"./node_modules/ol/geom/MultiPoint.js\");\n/* harmony import */ var ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/MultiPolygon.js */ \"./node_modules/ol/geom/MultiPolygon.js\");\n/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Point.js */ \"./node_modules/ol/geom/Point.js\");\n/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/geom/Polygon.js */ \"./node_modules/ol/geom/Polygon.js\");\n/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Circle.js */ \"./node_modules/ol/style/Circle.js\");\n/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Fill.js */ \"./node_modules/ol/style/Fill.js\");\n/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Stroke.js */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Style.js */ \"./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/style/Text.js */ \"./node_modules/ol/style/Text.js\");\n/* harmony import */ var ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/geom/Geometry.js */ \"./node_modules/ol/geom/Geometry.js\");\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LegacyProperties_ = {};\nvar DEFAULT_ACCURACY = 0.1;\nvar StyleTypes_ = {\n  'LineString': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LINE_STRING,\n  'Point': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].POINT,\n  'Polygon': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].POLYGON,\n  'MultiLineString': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LINE_STRING,\n  'MultiPoint': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].POINT,\n  'MultiPolygon': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].POLYGON\n};\nvar CHAR64_ = '.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz';\nvar GEOMETRY_READERS_ = {\n  'P': readMultiPointGeometry_,\n  'L': readMultiLineStringGeometry_,\n  'A': readMultiPolygonGeometry_,\n  'l': readLineStringGeometry_,\n  'p': readPointGeometry_,\n  'a': readPolygonGeometry_\n};\nvar GEOMETRY_WRITERS_ = {\n  'MultiLineString': writeMultiLineStringGeometry_,\n  'MultiPoint': writeMultiPointGeometry_,\n  'MultiPolygon': writeMultiPolygonGeometry_,\n  'LineString': writeLineStringGeometry_,\n  'Point': writePointGeometry_,\n  'Polygon': writePolygonGeometry_\n};\n\nvar FeatureHash = function (_olFormatTextFeature) {\n  _inheritsLoose(FeatureHash, _olFormatTextFeature);\n\n  function FeatureHash(opt_options) {\n    var _this;\n\n    _this = _olFormatTextFeature.call(this) || this;\n    var options = opt_options || {};\n    _this.accuracy_ = options.accuracy || DEFAULT_ACCURACY;\n    _this.encodeStyles_ = options.encodeStyles || true;\n    _this.propertiesFunction_ = options.properties || defaultPropertiesFunction_;\n    _this.setStyle_ = options.setStyle !== undefined ? options.setStyle : true;\n    _this.prevX_ = 0;\n    _this.prevY_ = 0;\n    LegacyProperties_ = options.propertiesType || {};\n    _this.defaultValues_ = options.defaultValues || {};\n    return _this;\n  }\n\n  var _proto = FeatureHash.prototype;\n\n  _proto.decodeCoordinates_ = function decodeCoordinates_(text, opt_flatCoordinates) {\n    var len = text.length;\n    var index = 0;\n    var flatCoordinates = opt_flatCoordinates !== undefined ? opt_flatCoordinates : [];\n    var i = flatCoordinates.length;\n\n    while (index < len) {\n      var b = void 0;\n      var shift = 0;\n      var result = 0;\n\n      do {\n        b = CHAR64_.indexOf(text.charAt(index++));\n        result |= (b & 0x1f) << shift;\n        shift += 5;\n      } while (b >= 32);\n\n      var dx = result & 1 ? ~(result >> 1) : result >> 1;\n      this.prevX_ += dx;\n      shift = 0;\n      result = 0;\n\n      do {\n        b = CHAR64_.indexOf(text.charAt(index++));\n        result |= (b & 0x1f) << shift;\n        shift += 5;\n      } while (b >= 32);\n\n      var dy = result & 1 ? ~(result >> 1) : result >> 1;\n      this.prevY_ += dy;\n      flatCoordinates[i++] = this.prevX_ * this.accuracy_;\n      flatCoordinates[i++] = this.prevY_ * this.accuracy_;\n    }\n\n    return flatCoordinates;\n  };\n\n  _proto.encodeCoordinates_ = function encodeCoordinates_(flatCoordinates, stride, offset, end) {\n    var encodedCoordinates = '';\n\n    for (var i = offset; i < end; i += stride) {\n      var x = flatCoordinates[i];\n      var y = flatCoordinates[i + 1];\n      x = Math.floor(x / this.accuracy_);\n      y = Math.floor(y / this.accuracy_);\n      var dx = x - this.prevX_;\n      var dy = y - this.prevY_;\n      this.prevX_ = x;\n      this.prevY_ = y;\n      encodedCoordinates += encodeSignedNumber_(dx) + encodeSignedNumber_(dy);\n    }\n\n    return encodedCoordinates;\n  };\n\n  _proto.readFeatureFromText = function readFeatureFromText(text, opt_options) {\n    console.assert(text.length > 2);\n    console.assert(text[1] === '(');\n    console.assert(text.endsWith(')'));\n    var splitIndex = text.indexOf('~');\n    var geometryText = splitIndex >= 0 ? text.substring(0, splitIndex) + \")\" : text;\n    var geometry = this.readGeometryFromText(geometryText, opt_options);\n    var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](geometry);\n\n    if (splitIndex >= 0) {\n      var attributesAndStylesText = text.substring(splitIndex + 1, text.length - 1);\n      splitIndex = attributesAndStylesText.indexOf('~');\n      var attributesText = splitIndex >= 0 ? attributesAndStylesText.substring(0, splitIndex) : attributesAndStylesText;\n\n      if (attributesText != '') {\n        var parts = attributesText.split('\\'');\n\n        for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {\n          var _ref;\n\n          if (_isArray) {\n            if (_i >= _iterator.length) break;\n            _ref = _iterator[_i++];\n          } else {\n            _i = _iterator.next();\n            if (_i.done) break;\n            _ref = _i.value;\n          }\n\n          var encodedPart = _ref;\n          var part = decodeURIComponent(encodedPart);\n          var keyVal = part.split('*');\n          console.assert(keyVal.length === 2);\n          var key = keyVal[0];\n          var value = keyVal[1];\n\n          if (!this.setStyle_ && LegacyProperties_[key]) {\n            key = LegacyProperties_[key];\n          }\n\n          feature.set(key, castValue_(key, value));\n        }\n      }\n\n      if (splitIndex >= 0) {\n        var stylesText = attributesAndStylesText.substring(splitIndex + 1);\n\n        if (this.setStyle_) {\n          setStyleInFeature_(stylesText, feature);\n        } else {\n          setStyleProperties_(stylesText, feature);\n        }\n      }\n    }\n\n    return feature;\n  };\n\n  _proto.readFeaturesFromText = function readFeaturesFromText(text, opt_options) {\n    var _this2 = this;\n\n    console.assert(text.startsWith('F'));\n    this.prevX_ = 0;\n    this.prevY_ = 0;\n    var features = [];\n    text = text.substring(1);\n\n    while (text.length > 0) {\n      var index = text.indexOf(')');\n      console.assert(index >= 0);\n      var feature = this.readFeatureFromText(text.substring(0, index + 1), opt_options);\n      features.push(feature);\n      text = text.substring(index + 1);\n    }\n\n    features.forEach(function (feature) {\n      for (var key in _this2.defaultValues_) {\n        var property = LegacyProperties_[key];\n\n        if (feature.get(property) === undefined) {\n          feature.set(property, _this2.defaultValues_[key].call(null, feature));\n        }\n      }\n    });\n    return features;\n  };\n\n  _proto.readGeometryFromText = function readGeometryFromText(text, opt_options) {\n    var geometryReader = GEOMETRY_READERS_[text[0]];\n    console.assert(geometryReader !== undefined);\n    return geometryReader.call(this, text);\n  };\n\n  _proto.writeFeatureText = function writeFeatureText(feature, opt_options) {\n    var encodedParts = [];\n    var encodedGeometry = '';\n    var geometry = feature.getGeometry();\n\n    if (geometry) {\n      encodedGeometry = this.writeGeometryText(geometry, opt_options);\n    }\n\n    if (encodedGeometry.length > 0) {\n      console.assert(encodedGeometry.endsWith(')'));\n      encodedGeometry = encodedGeometry.substring(0, encodedGeometry.length - 1);\n      encodedParts.push(encodedGeometry);\n    }\n\n    var encodedProperties = [];\n    var propFunction = this.propertiesFunction_(feature);\n\n    for (var key in propFunction) {\n      var value = propFunction[key];\n\n      if (value !== undefined && value !== null && key !== feature.getGeometryName()) {\n        if (encodedProperties.length !== 0) {\n          encodedProperties.push('\\'');\n        }\n\n        var encoded = encodeURIComponent(key.replace(/[()'*]/g, '_') + \"*\" + value.toString().replace(/[()'*]/g, '_'));\n        encodedProperties.push(encoded);\n      }\n    }\n\n    if (encodedProperties.length > 0) {\n      encodedParts.push('~');\n      Array.prototype.push.apply(encodedParts, encodedProperties);\n    }\n\n    if (this.encodeStyles_) {\n      var styleFunction = feature.getStyleFunction();\n\n      if (styleFunction !== undefined) {\n        var styles = styleFunction(feature, 0);\n\n        if (styles !== null) {\n          var encodedStyles = [];\n          styles = Array.isArray(styles) ? styles : [styles];\n\n          if (!geometry) {\n            throw new Error('Missing geometry');\n          }\n\n          encodeStyles_(styles, geometry.getType(), encodedStyles);\n\n          if (encodedStyles.length > 0) {\n            encodedParts.push('~');\n            Array.prototype.push.apply(encodedParts, encodedStyles);\n          }\n        }\n      }\n    }\n\n    encodedParts.push(')');\n    return encodedParts.join('');\n  };\n\n  _proto.writeFeaturesText = function writeFeaturesText(features, opt_options) {\n    this.prevX_ = 0;\n    this.prevY_ = 0;\n    var textArray = [];\n\n    if (features.length > 0) {\n      textArray.push('F');\n\n      for (var i = 0, ii = features.length; i < ii; ++i) {\n        textArray.push(this.writeFeatureText(features[i], opt_options));\n      }\n    }\n\n    return textArray.join('');\n  };\n\n  _proto.writeGeometryText = function writeGeometryText(geometry, opt_options) {\n    var geometryWriter = GEOMETRY_WRITERS_[geometry.getType()];\n    console.assert(geometryWriter !== undefined);\n    var transformedGeometry = Object(ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_5__[\"transformGeometryWithOptions\"])(geometry, true, opt_options);\n\n    if (!(transformedGeometry instanceof ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"])) {\n      throw new Error('Missing transformedGeometry');\n    }\n\n    var encGeom = geometryWriter.call(this, transformedGeometry);\n\n    if (!encGeom) {\n      throw new Error('Missing encodedGeometry');\n    }\n\n    return encGeom;\n  };\n\n  return FeatureHash;\n}(ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeatureHash);\n\nfunction defaultPropertiesFunction_(feature) {\n  return feature.getProperties();\n}\n\nfunction encodeSignedNumber_(num) {\n  var signedNum = num << 1;\n\n  if (num < 0) {\n    signedNum = ~signedNum;\n  }\n\n  return encodeNumber_(signedNum);\n}\n\nfunction encodeNumber_(num) {\n  var encodedNumber = '';\n\n  while (num >= 0x20) {\n    encodedNumber += CHAR64_.charAt(0x20 | num & 0x1f);\n    num >>= 5;\n  }\n\n  encodedNumber += CHAR64_.charAt(num);\n  return encodedNumber;\n}\n\nfunction encodeStyles_(styles, geometryType, encodedStyles) {\n  var styleType = StyleTypes_[geometryType];\n  console.assert(styleType !== undefined);\n\n  for (var _iterator2 = styles, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {\n    var _ref2;\n\n    if (_isArray2) {\n      if (_i2 >= _iterator2.length) break;\n      _ref2 = _iterator2[_i2++];\n    } else {\n      _i2 = _iterator2.next();\n      if (_i2.done) break;\n      _ref2 = _i2.value;\n    }\n\n    var style = _ref2;\n    var fillStyle = style.getFill();\n    var imageStyle = style.getImage();\n    var strokeStyle = style.getStroke();\n    var textStyle = style.getText();\n\n    if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].POLYGON) {\n      if (fillStyle !== null) {\n        encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles);\n      }\n    } else if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LINE_STRING) {\n      if (strokeStyle !== null) {\n        encodeStyleLine_(strokeStyle, encodedStyles);\n      }\n    } else if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].POINT) {\n      if (imageStyle !== null) {\n        encodeStylePoint_(imageStyle, encodedStyles);\n      }\n    }\n\n    if (textStyle !== null) {\n      encodeStyleText_(textStyle, encodedStyles);\n    }\n  }\n}\n\nfunction encodeStyleLine_(strokeStyle, encodedStyles) {\n  encodeStyleStroke_(strokeStyle, encodedStyles);\n}\n\nfunction encodeStylePoint_(imageStyle, encodedStyles) {\n  if (imageStyle instanceof ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]) {\n    var radius = imageStyle.getRadius();\n\n    if (encodedStyles.length > 0) {\n      encodedStyles.push('\\'');\n    }\n\n    encodedStyles.push(encodeURIComponent(\"pointRadius*\" + radius));\n    var fillStyle = imageStyle.getFill();\n\n    if (fillStyle !== null) {\n      encodeStyleFill_(fillStyle, encodedStyles);\n    }\n\n    var strokeStyle = imageStyle.getStroke();\n\n    if (strokeStyle !== null) {\n      encodeStyleStroke_(strokeStyle, encodedStyles);\n    }\n  }\n}\n\nfunction encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles) {\n  encodeStyleFill_(fillStyle, encodedStyles);\n\n  if (strokeStyle !== null) {\n    encodeStyleStroke_(strokeStyle, encodedStyles);\n  }\n}\n\nfunction encodeStyleFill_(fillStyle, encodedStyles, propertyName) {\n  if (propertyName === void 0) {\n    propertyName = 'fillColor';\n  }\n\n  var fillColor = fillStyle.getColor();\n  var fillColorHex;\n\n  if (fillColor !== null) {\n    if (Array.isArray(fillColor)) {\n      fillColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"rgbArrayToHex\"])(fillColor);\n    } else if (typeof fillColor === 'string') {\n      fillColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"rgbArrayToHex\"])(Object(ol_color_js__WEBPACK_IMPORTED_MODULE_3__[\"asArray\"])(fillColor));\n    } else {\n      throw new Error('Unsupported color');\n    }\n\n    if (encodedStyles.length > 0) {\n      encodedStyles.push('\\'');\n    }\n\n    encodedStyles.push(encodeURIComponent(propertyName + \"*\" + fillColorHex));\n  }\n}\n\nfunction encodeStyleStroke_(strokeStyle, encodedStyles) {\n  var strokeColor = strokeStyle.getColor();\n\n  if (strokeColor !== null) {\n    if (Array.isArray(strokeColor)) {\n      var strokeColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"rgbArrayToHex\"])(strokeColor);\n\n      if (encodedStyles.length > 0) {\n        encodedStyles.push('\\'');\n      }\n\n      encodedStyles.push(encodeURIComponent(\"strokeColor*\" + strokeColorHex));\n    }\n  }\n\n  var strokeWidth = strokeStyle.getWidth();\n\n  if (strokeWidth !== undefined) {\n    if (encodedStyles.length > 0) {\n      encodedStyles.push('\\'');\n    }\n\n    encodedStyles.push(encodeURIComponent(\"strokeWidth*\" + strokeWidth));\n  }\n}\n\nfunction encodeStyleText_(textStyle, encodedStyles) {\n  var fontStyle = textStyle.getFont();\n\n  if (fontStyle !== undefined) {\n    var font = fontStyle.split(' ');\n\n    if (font.length >= 3) {\n      if (encodedStyles.length > 0) {\n        encodedStyles.push('\\'');\n      }\n\n      encodedStyles.push(encodeURIComponent(\"fontSize*\" + font[1]));\n    }\n  }\n\n  var fillStyle = textStyle.getFill();\n\n  if (fillStyle !== null) {\n    encodeStyleFill_(fillStyle, encodedStyles, 'fontColor');\n  }\n}\n\nfunction readLineStringGeometry_(text) {\n  console.assert(text.startsWith('l('));\n  console.assert(text.endsWith(')'));\n  text = text.substring(2, text.length - 1);\n  var flatCoordinates = this.decodeCoordinates_(text);\n  return new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].XY);\n}\n\nfunction readMultiLineStringGeometry_(text) {\n  console.assert(text.startsWith('L('));\n  console.assert(text.endsWith(')'));\n  text = text.substring(2, text.length - 1);\n  var flatCoordinates = [];\n  var ends = [];\n  var lineStrings = text.split('\\'');\n\n  for (var i = 0, ii = lineStrings.length; i < ii; ++i) {\n    flatCoordinates = this.decodeCoordinates_(lineStrings[i], flatCoordinates);\n    ends[i] = flatCoordinates.length;\n  }\n\n  return new ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].XY, ends);\n}\n\nfunction readPointGeometry_(text) {\n  console.assert(text.startsWith('p('));\n  console.assert(text.endsWith(')'));\n  text = text.substring(2, text.length - 1);\n  var flatCoordinates = this.decodeCoordinates_(text);\n  console.assert(flatCoordinates.length === 2);\n  return new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].XY);\n}\n\nfunction readMultiPointGeometry_(text) {\n  console.assert(text.startsWith('P('));\n  console.assert(text.endsWith(')'));\n  text = text.substring(2, text.length - 1);\n  var flatCoordinates = this.decodeCoordinates_(text);\n  return new ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].XY);\n}\n\nfunction readPolygonGeometry_(text) {\n  console.assert(text.startsWith('a('));\n  console.assert(text.endsWith(')'));\n  text = text.substring(2, text.length - 1);\n  var flatCoordinates = [];\n  var ends = [];\n  var rings = text.split('\\'');\n\n  for (var i = 0, ii = rings.length; i < ii; ++i) {\n    flatCoordinates = this.decodeCoordinates_(rings[i], flatCoordinates);\n    var end = flatCoordinates.length;\n\n    if (i === 0) {\n      flatCoordinates[end++] = flatCoordinates[0];\n      flatCoordinates[end++] = flatCoordinates[1];\n    } else {\n      flatCoordinates[end++] = flatCoordinates[ends[i - 1]];\n      flatCoordinates[end++] = flatCoordinates[ends[i - 1] + 1];\n    }\n\n    ends[i] = end;\n  }\n\n  return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].XY, ends);\n}\n\nfunction readMultiPolygonGeometry_(text) {\n  console.assert(text.startsWith('A('));\n  console.assert(text.endsWith(')'));\n  text = text.substring(2, text.length - 1);\n  var flatCoordinates = [];\n  var endss = [];\n  var polygons = text.split(')(');\n\n  for (var i = 0, ii = polygons.length; i < ii; ++i) {\n    var rings = polygons[i].split('\\'');\n    var ends = endss[i] = [];\n\n    for (var j = 0, jj = rings.length; j < jj; ++j) {\n      flatCoordinates = this.decodeCoordinates_(rings[j], flatCoordinates);\n      var end = flatCoordinates.length;\n\n      if (j === 0) {\n        flatCoordinates[end++] = flatCoordinates[0];\n        flatCoordinates[end++] = flatCoordinates[1];\n      } else {\n        flatCoordinates[end++] = flatCoordinates[ends[j - 1]];\n        flatCoordinates[end++] = flatCoordinates[ends[j - 1] + 1];\n      }\n\n      ends[j] = end;\n    }\n  }\n\n  return new ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].XY, endss);\n}\n\nfunction setStyleInFeature_(text, feature) {\n  if (text == '') {\n    return;\n  }\n\n  var properties = getStyleProperties_(text, feature);\n  var fillColor = properties.fillColor;\n  var fontSize = properties.fontSize;\n  var fontColor = properties.fontColor;\n  var pointRadius = properties.pointRadius;\n  var strokeColor = properties.strokeColor;\n  var strokeWidth = properties.strokeWidth;\n  var fillStyle = null;\n\n  if (fillColor !== undefined) {\n    fillStyle = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n      color: fillColor\n    });\n  }\n\n  var strokeStyle = null;\n\n  if (strokeColor !== undefined && strokeWidth !== undefined) {\n    if (typeof strokeWidth != 'number') {\n      throw new Error('Missing strokeWidth');\n    }\n\n    strokeStyle = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]({\n      color: strokeColor,\n      width: strokeWidth\n    });\n  }\n\n  var imageStyle = null;\n\n  if (pointRadius !== undefined) {\n    if (typeof pointRadius != 'number') {\n      throw new Error('Missing pointRadius');\n    }\n\n    var _options = {\n      radius: pointRadius\n    };\n\n    if (fillStyle) {\n      _options.fill = fillStyle;\n    }\n\n    if (strokeStyle) {\n      _options.stroke = strokeStyle;\n    }\n\n    imageStyle = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"](_options);\n    fillStyle = strokeStyle = null;\n  }\n\n  var textStyle = null;\n\n  if (fontSize !== undefined && fontColor !== undefined) {\n    textStyle = new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]({\n      font: fontSize + \" sans-serif\",\n      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n        color: fontColor\n      })\n    });\n  }\n\n  var options = {};\n\n  if (fillStyle) {\n    options.fill = fillStyle;\n  }\n\n  if (strokeStyle) {\n    options.stroke = strokeStyle;\n  }\n\n  if (imageStyle) {\n    options.image = imageStyle;\n  }\n\n  if (textStyle) {\n    options.text = textStyle;\n  }\n\n  var style = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"](options);\n  feature.setStyle(style);\n}\n\nfunction setStyleProperties_(text, feature) {\n  var properties = getStyleProperties_(text, feature);\n  var geometry = feature.getGeometry();\n\n  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]) {\n    if (properties.isLabel || properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IS_TEXT]) {\n      delete properties.strokeColor;\n      delete properties.fillColor;\n    } else {\n      delete properties.fontColor;\n      delete properties.fontSize;\n    }\n  } else {\n    delete properties.fontColor;\n\n    if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) {\n      delete properties.fillColor;\n      delete properties.fillOpacity;\n    }\n  }\n\n  if (properties.fontSize) {\n    var fontSizeStr = properties.fontSize;\n\n    if (typeof fontSizeStr !== 'string') {\n      throw new Error('Wrong fontSizeStr type');\n    }\n\n    var fontSize = parseFloat(fontSizeStr);\n\n    if (fontSizeStr.includes('px')) {\n      fontSize = Math.round(fontSize / 1.333333);\n    }\n\n    properties.fontSize = fontSize;\n  }\n\n  var clone = {};\n\n  for (var key in properties) {\n    var value = properties[key];\n\n    if (LegacyProperties_[key]) {\n      clone[LegacyProperties_[key]] = value;\n    } else {\n      clone[key] = value;\n    }\n  }\n\n  feature.setProperties(clone);\n}\n\nfunction castValue_(key, value) {\n  var numProperties = [ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANGLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OPACITY, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SIZE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].STROKE, 'pointRadius', 'strokeWidth'];\n  var boolProperties = [ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IS_CIRCLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IS_RECTANGLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IS_TEXT, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SHOW_MEASURE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SHOW_LABEL, 'isCircle', 'isRectangle', 'isLabel', 'showMeasure', 'showLabel'];\n\n  if (numProperties.includes(key)) {\n    return +value;\n  } else if (boolProperties.includes(key)) {\n    return value === 'true' ? true : false;\n  } else {\n    return value;\n  }\n}\n\nfunction getStyleProperties_(text, feature) {\n  var parts = text.split('\\'');\n  var properties = {};\n\n  for (var _iterator3 = parts, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {\n    var _ref3;\n\n    if (_isArray3) {\n      if (_i3 >= _iterator3.length) break;\n      _ref3 = _iterator3[_i3++];\n    } else {\n      _i3 = _iterator3.next();\n      if (_i3.done) break;\n      _ref3 = _i3.value;\n    }\n\n    var encodedPart = _ref3;\n    var part = decodeURIComponent(encodedPart);\n    var keyVal = part.split('*');\n    console.assert(keyVal.length === 2);\n    var key = keyVal[0];\n    var val = keyVal[1];\n    properties[key] = castValue_(key, val);\n  }\n\n  return properties;\n}\n\nfunction writeLineStringGeometry_(geometry) {\n  if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) {\n    var flatCoordinates = geometry.getFlatCoordinates();\n    var stride = geometry.getStride();\n    var end = flatCoordinates.length;\n    return \"l(\" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + \")\";\n  }\n\n  return null;\n}\n\nfunction writeMultiLineStringGeometry_(geometry) {\n  if (geometry instanceof ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) {\n    var ends = geometry.getEnds();\n    var lineStringCount = ends.length;\n    var flatCoordinates = geometry.getFlatCoordinates();\n    var stride = geometry.getStride();\n    var offset = 0;\n    var textArray = ['L('];\n\n    for (var i = 0; i < lineStringCount; ++i) {\n      var end = ends[i];\n      var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);\n\n      if (i !== 0) {\n        textArray.push('\\'');\n      }\n\n      textArray.push(text);\n      offset = end;\n    }\n\n    textArray.push(')');\n    return textArray.join('');\n  }\n\n  return null;\n}\n\nfunction writePointGeometry_(geometry) {\n  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]) {\n    var flatCoordinates = geometry.getFlatCoordinates();\n    var stride = geometry.getStride();\n    var end = flatCoordinates.length;\n    return \"p(\" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + \")\";\n  }\n\n  return null;\n}\n\nfunction writeMultiPointGeometry_(geometry) {\n  if (geometry instanceof ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]) {\n    var flatCoordinates = geometry.getFlatCoordinates();\n    var stride = geometry.getStride();\n    var end = flatCoordinates.length;\n    return \"P(\" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + \")\";\n  }\n\n  return null;\n}\n\nfunction encodeRings_(flatCoordinates, stride, offset, ends, textArray) {\n  var linearRingCount = ends.length;\n\n  for (var i = 0; i < linearRingCount; ++i) {\n    var end = ends[i] - stride;\n    var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);\n\n    if (i !== 0) {\n      textArray.push('\\'');\n    }\n\n    textArray.push(text);\n    offset = ends[i];\n  }\n\n  return offset;\n}\n\nfunction writePolygonGeometry_(geometry) {\n  if (geometry instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]) {\n    var flatCoordinates = geometry.getFlatCoordinates();\n    var stride = geometry.getStride();\n    var ends = geometry.getEnds();\n    var offset = 0;\n    var textArray = ['a('];\n    encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);\n    textArray.push(')');\n    return textArray.join('');\n  }\n\n  return null;\n}\n\nfunction writeMultiPolygonGeometry_(geometry) {\n  if (geometry instanceof ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]) {\n    var flatCoordinates = geometry.getFlatCoordinates();\n    var stride = geometry.getStride();\n    var endss = geometry.getEndss();\n    var polygonCount = endss.length;\n    var offset = 0;\n    var textArray = ['A'];\n\n    for (var i = 0; i < polygonCount; ++i) {\n      var ends = endss[i];\n      textArray.push('(');\n      offset = encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);\n      textArray.push(')');\n    }\n\n    return textArray.join('');\n  } else {\n    throw new Error('Wrong geometry type');\n  }\n}\n\n//# sourceURL=webpack:///./src/format/FeatureHash.js?");

/***/ }),

/***/ "./src/format/FeatureHashStyleType.js":
/*!********************************************!*\
  !*** ./src/format/FeatureHashStyleType.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  LINE_STRING: 'LineString',\n  POINT: 'Point',\n  POLYGON: 'Polygon'\n});\n\n//# sourceURL=webpack:///./src/format/FeatureHashStyleType.js?");

/***/ }),

/***/ 30:
/*!******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/permalink.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/permalink.js */\"./examples/permalink.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/permalink.js?");

/***/ }),

/***/ "dll-reference vendor_e4544f9f18f52e898dc0":
/*!**********************************************!*\
  !*** external "vendor_e4544f9f18f52e898dc0" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_e4544f9f18f52e898dc0;\n\n//# sourceURL=webpack:///external_%22vendor_e4544f9f18f52e898dc0%22?");

/***/ })

/******/ });