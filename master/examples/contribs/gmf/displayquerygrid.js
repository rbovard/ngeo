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
/******/ 		"displayquerygrid": 0
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
/******/ 	deferredModules.push([3,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/displayquerygrid.css":
/*!****************************************************!*\
  !*** ./contribs/gmf/examples/displayquerygrid.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/displayquerygrid.js":
/*!***************************************************!*\
  !*** ./contribs/gmf/examples/displayquerygrid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayquerygrid.css */ "./contribs/gmf/examples/displayquerygrid.css");
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_displayquerygrid_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gmf-hidden.inc.css */ "./contribs/gmf/examples/gmf-hidden.inc.css");
/* harmony import */ var _gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gmf_datasource_Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/datasource/Manager */ "./contribs/gmf/src/datasource/Manager.js");
/* harmony import */ var gmf_layertree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/layertree/component */ "./contribs/gmf/src/layertree/component.js");
/* harmony import */ var gmf_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/map/component */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_query_gridComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gmf/query/gridComponent */ "./contribs/gmf/src/query/gridComponent.js");
/* harmony import */ var gmf_theme_Manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/theme/Manager */ "./contribs/gmf/src/theme/Manager.js");
/* harmony import */ var gmf_theme_Themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gmf/theme/Themes */ "./contribs/gmf/src/theme/Themes.js");
/* harmony import */ var ngeo_grid_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/grid/module */ "./src/grid/module.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_btnComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/misc/btnComponent */ "./src/misc/btnComponent.js");
/* harmony import */ var ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/proj/EPSG_2056 */ "./src/proj/EPSG_2056.js");
/* harmony import */ var ngeo_query_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/query/component */ "./src/query/component.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./options */ "./contribs/gmf/examples/options.js");
MainController.$inject = ["gmfThemes", "gmfDataSourcesManager", "ngeoFeatureOverlayMgr", "gmfThemeManager", "defaultTheme"];
QueryresultController.$inject = ["ngeoQueryResult"];



















var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_datasource_Manager__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_layertree_component__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_map_component__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_query_gridComponent__WEBPACK_IMPORTED_MODULE_6__["default"].name, gmf_theme_Manager__WEBPACK_IMPORTED_MODULE_7__["default"].name, gmf_theme_Themes__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_grid_module__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_map_module__WEBPACK_IMPORTED_MODULE_10__["default"].name, ngeo_misc_btnComponent__WEBPACK_IMPORTED_MODULE_11__["default"].name, ngeo_query_component__WEBPACK_IMPORTED_MODULE_13__["default"].name]);
var queryresultComponent = {
  controller: 'gmfappQueryresultController',
  template: __webpack_require__(/*! ./partials/queryresult.html */ "./contribs/gmf/examples/partials/queryresult.html")
};
myModule.component('gmfappQueryresult', queryresultComponent);

function QueryresultController(ngeoQueryResult) {
  this.result = ngeoQueryResult;
}

myModule.controller('gmfappQueryresultController', QueryresultController);

function MainController(gmfThemes, gmfDataSourcesManager, ngeoFeatureOverlayMgr, gmfThemeManager, defaultTheme) {
  var _this = this;

  gmfThemes.loadThemes();
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_14__["default"]({
    layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_16__["default"]({
      source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_17__["default"]()
    })],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_15__["default"]({
      projection: ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_12__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [2537635, 1152640],
      zoom: 3
    })
  });
  this.dimensions = {};
  gmfDataSourcesManager.setDatasourceMap(this.map);
  gmfDataSourcesManager.setDimensions(this.dimensions);
  this.queryActive = true;
  this.themes = undefined;
  this.selectedTheme = null;

  this.updateTheme = function () {
    gmfThemeManager.addTheme(this.selectedTheme);
  };

  this.queryGridActive = true;
  gmfThemes.getThemesObject().then(function (themes) {
    if (themes) {
      _this.themes = themes;
      themes.forEach(function (theme) {
        if (theme.name === defaultTheme) {
          _this.selectedTheme = theme;
          return;
        }
      });
    }
  });
  ngeoFeatureOverlayMgr.init(this.map);
}

myModule.controller('MainController', MainController);
myModule.constant('gmfDisplayQueryGridOptions', {
  featuresStyle: {
    fill: {
      color: [255, 170, 0, 0.6]
    },
    circle: {
      fill: {
        color: [255, 170, 0, 0.6]
      },
      radius: 5,
      stroke: {
        color: [255, 170, 0, 1],
        width: 2
      }
    },
    stroke: {
      color: [255, 170, 0, 1],
      width: 2
    }
  }
});
Object(_options__WEBPACK_IMPORTED_MODULE_18__["default"])(myModule);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./contribs/gmf/src/query/gridComponent.html":
/*!***************************************************!*\
  !*** ./contribs/gmf/src/query/gridComponent.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="gmf-displayquerygrid panel" ng-show="ctrl.active">\n  <div class="close" ng-click="ctrl.clear()">&times;</div>\n\n  <ul class="nav nav-pills" role="tablist">\n    <li\n      class="nav-item"\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="presentation"\n      ng-click="ctrl.selectTab(gridSource)"\n    >\n      <a\n        class="nav-link"\n        href="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n        data-target="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        aria-controls="{{ctrl.escapeValue(gridSource.source.label)}}"\n        role="tab"\n        data-toggle="tab"\n      >\n        <span> {{gridSource.source.label | translate}} ({{gridSource.source.features.length}}) </span>\n      </a>\n    </li>\n  </ul>\n\n  <div class="tab-content">\n    <div\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="tabpanel"\n      class="tab-pane"\n      ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n      id="{{ctrl.escapeValue(gridSource.source.label)}}"\n    >\n      <ngeo-grid ngeo-grid-configuration="gridSource.configuration"> </ngeo-grid>\n    </div>\n    <div class="container-fluid">\n      <div\n        ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null"\n        class="row"\n      >\n        <div class="col-md-5 my-auto">\n          <span ng-if="ctrl.hasOneWithTooManyResults_()" class="gmf-query-grid-too-many text-warning"\n            >{{\'Only\' | translate}} {{ctrl.sumOfFeatures}} {{\'of\' | translate}} {{ctrl.sumOfAvailableResults}}\n            {{\'results displayed, as the maximum number is reached. Please refine your query.\' | translate\n            }}</span\n          >\n        </div>\n        <div class="col-md-7" class="pull-right">\n          <ul class="nav justify-content-end">\n            <li class="ng-hide" ng-show="ctrl.isOneSelected()">\n              <div class="btn btn-sm ng-binding">\n                {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span>\n              </div>\n            </li>\n\n            <li ng-show="ctrl.isOneSelected()" class="ng-hide">\n              <button\n                class="btn btn-link btn-sm"\n                title="{{\'Zoom to selection\' | translate}}"\n                ng-click="ctrl.zoomToSelection()"\n              >\n                <i class="fa fa-search-plus"></i> <span translate>Zoom to</span>\n              </button>\n            </li>\n\n            <li ng-show="ctrl.isOneSelected()" class="ng-hide">\n              <button\n                class="btn btn-link btn-sm"\n                title="{{\'Export selection as CSV\' | translate}}"\n                ng-click="ctrl.downloadCsv()"\n              >\n                <i class="fa fa-download"></i> <span translate>Export as CSV</span>\n              </button>\n            </li>\n\n            <li class="dropdown">\n              <button\n                type="button"\n                class="dropup btn btn-default btn-sm dropdown-toggle"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="false"\n              >\n                <span translate>Select</span>\n              </button>\n              <ul class="dropdown-menu" aria-labelledby="dLabel">\n                <li>\n                  <a href="" ng-click="ctrl.selectAll()" translate>All</a>\n                </li>\n\n                <li>\n                  <a href="" ng-click="ctrl.unselectAll()" translate>None</a>\n                </li>\n\n                <li>\n                  <a href="" ng-click="ctrl.invertSelection()" translate>Reverse selection</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div ng-show="ctrl.pending" class="spinner-grid">\n      <i class="fa fa-spin"> ' +
((__t = (__webpack_require__(/*! gmf/icons/spinner.svg?viewbox&height=3rem */ "./contribs/gmf/src/icons/spinner.svg?viewbox&height=3rem"))) == null ? '' : __t) +
' </i>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./contribs/gmf/src/query/gridComponent.js":
/*!*************************************************!*\
  !*** ./contribs/gmf/src/query/gridComponent.js ***!
  \*************************************************/
/*! exports provided: QueryGridController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryGridController", function() { return QueryGridController; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_download_Csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/download/Csv */ "./src/download/Csv.js");
/* harmony import */ var ngeo_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/download/service */ "./src/download/service.js");
/* harmony import */ var ngeo_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/grid/component */ "./src/grid/component.js");
/* harmony import */ var ngeo_grid_Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/grid/Config */ "./src/grid/Config.js");
/* harmony import */ var ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_query_MapQuerent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/query/MapQuerent */ "./src/query/MapQuerent.js");
/* harmony import */ var ol_Collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ngeo_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/options */ "./src/options.js");
/* harmony import */ var gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gmfapi/store/panels */ "./srcapi/store/panels.ts");
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "./node_modules/bootstrap/js/src/dropdown.js");
QueryGridController.$inject = ["$scope", "ngeoQueryResult", "ngeoMapQuerent", "ngeoFeatureOverlayMgr", "$timeout", "ngeoCsvDownload", "ngeoQueryOptions", "gmfCsvFilename", "$element", "gmfDisplayQueryGridOptions"];













var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfQueryGridComponent', [ngeo_download_Csv__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_download_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_grid_component__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_query_MapQuerent__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
myModule.value('gmfDisplayquerygridTemplateUrl', function ($element, $attrs) {
  var templateUrl = $attrs.gmfDisplayquerygridTemplateurl;
  return templateUrl !== undefined ? templateUrl : 'gmf/query/gridComponent';
});
myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/query/gridComponent', __webpack_require__(/*! ./gridComponent.html */ "./contribs/gmf/src/query/gridComponent.html"));
}]);
gmfDisplayquerygridTemplateUrl.$inject = ["$element", "$attrs", "gmfDisplayquerygridTemplateUrl"];

function gmfDisplayquerygridTemplateUrl($element, $attrs, gmfDisplayquerygridTemplateUrl) {
  return gmfDisplayquerygridTemplateUrl($element, $attrs);
}

var queryGridComponent = {
  controller: 'GmfDisplayquerygridController as ctrl',
  bindings: {
    'active': '=?gmfDisplayquerygridActive',
    'getMapFn': '&gmfDisplayquerygridMap'
  },
  templateUrl: gmfDisplayquerygridTemplateUrl
};
myModule.component('gmfDisplayquerygrid', queryGridComponent);
function QueryGridController($scope, ngeoQueryResult, ngeoMapQuerent, ngeoFeatureOverlayMgr, $timeout, ngeoCsvDownload, ngeoQueryOptions, gmfCsvFilename, $element, gmfDisplayQueryGridOptions) {
  var _this = this;

  this.options = gmfDisplayQueryGridOptions;
  this.$scope_ = $scope;
  this.$timeout_ = $timeout;
  this.ngeoQueryResult = ngeoQueryResult;
  this.ngeoMapQuerent_ = ngeoMapQuerent;
  this.ngeoCsvDownload_ = ngeoCsvDownload;
  this.$element_ = $element;
  this.maxResults = ngeoQueryOptions.limit !== undefined ? ngeoQueryOptions.limit : 50;
  this.active = false;
  this.pending = false;
  this.gridSources = {};
  this.loadedGridSources = [];
  this.selectedTab = null;
  this.featuresForSources_ = {};
  this.features_ = new ol_Collection__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.ngeoFeatureOverlayMgr_ = ngeoFeatureOverlayMgr;
  this.highlightFeatures_ = new ol_Collection__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.filename_ = gmfCsvFilename;
  this.map_ = null;
  this.sumOfFeatures = 0;
  this.sumOfAvailableResults = 0;
  this.$scope_.$watchCollection(function () {
    return ngeoQueryResult;
  }, function (newQueryResult, oldQueryResult) {
    if (ngeoQueryResult.pending) {
      _this.active = true;
      _this.pending = true;
      gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_11__["default"].openFooterPanel('queryresult', {
        state: true,
        noError: true
      });
    }

    if (newQueryResult !== oldQueryResult) {
      _this.updateData_();
    }
  });
  this.unregisterSelectWatcher_ = null;
  this.getMapFn = null;
}

QueryGridController.prototype.$onInit = function () {
  if (!this.getMapFn) {
    throw new Error('Missing getMapFn');
  }

  var featuresOverlay = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  featuresOverlay.setFeatures(this.features_);
  featuresOverlay.setStyle(Object(ngeo_options__WEBPACK_IMPORTED_MODULE_10__["buildStyle"])(this.options.featuresStyle));
  var highlightFeaturesOverlay = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  highlightFeaturesOverlay.setFeatures(this.highlightFeatures_);
  var highlightFeatureStyle = Object(ngeo_options__WEBPACK_IMPORTED_MODULE_10__["buildStyle"])(this.options.selectedFeatureStyle);
  highlightFeaturesOverlay.setStyle(highlightFeatureStyle);
  var mapFn = this.getMapFn;

  if (mapFn) {
    var map = mapFn();

    if (!(map instanceof ol_Map__WEBPACK_IMPORTED_MODULE_9__["default"])) {
      throw new Error('Wrong map type');
    }

    this.map_ = map;
  }
};

QueryGridController.prototype.getGridSources = function () {
  var _this2 = this;

  return this.loadedGridSources.map(function (sourceLabel) {
    return _this2.gridSources[sourceLabel];
  });
};

QueryGridController.prototype.updateData_ = function () {
  var _this3 = this;

  if ((this.ngeoQueryResult.pending || this.ngeoQueryResult.total === 0) && !this.hasOneWithTooManyResults_()) {
    var oldActive = this.active;
    this.clear();

    if (oldActive) {
      this.active = this.ngeoQueryResult.pending;
      gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_11__["default"].openFooterPanel('queryresult', {
        state: this.active
      });
      this.pending = this.ngeoQueryResult.pending;
    }

    return;
  }

  this.sumOfAvailableResults = 0;
  this.sumOfFeatures = 0;
  var countedSources = [];
  this.ngeoQueryResult.sources.forEach(function (source) {
    if (!countedSources.includes(source.label)) {
      _this3.sumOfFeatures += source.features.length;
    }

    if (!source.requestPartners || !source.requestPartners.some(function (label) {
      return countedSources.includes(label);
    })) {
      _this3.sumOfAvailableResults += source.totalFeatureCount;
    }

    countedSources.push(source.label);
  });
  this.active = true;
  gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_11__["default"].openFooterPanel('queryresult', {
    state: true
  });
  this.pending = false;
  var sources = this.ngeoQueryResult.sources;

  if (Object.keys(this.options.mergeTabs || {}).length > 0) {
    sources = this.getMergedSources_(sources);
  }

  sources.forEach(function (source) {
    if (source.tooManyResults && source.features.length === 0) {
      _this3.makeGrid_(null, source);
    } else {
      source.id = _this3.escapeValue(source.id);
      var features = source.features;

      if (features.length > 0) {
        _this3.collectData_(source);
      }
    }
  });

  if (this.loadedGridSources.length === 0) {
    this.active = false;
    gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_11__["default"].openFooterPanel('queryresult', {
      state: false,
      noError: true
    });
    return;
  }

  if (this.selectedTab === null || !("" + this.selectedTab in this.gridSources)) {
    this.$timeout_(function () {
      var firstSourceId = _this3.loadedGridSources[0];

      _this3.selectTab(_this3.gridSources[firstSourceId]);
    }, 0);
  }
};

QueryGridController.prototype.hasOneWithTooManyResults_ = function () {
  return this.ngeoQueryResult.sources.some(function (source) {
    return source.tooManyResults;
  });
};

QueryGridController.prototype.escapeValue = function (value) {
  if (typeof value == 'number') {
    return value;
  } else {
    var toEscape = /[-[\]/{}()*+?.\\^$ |]/g;

    if (value.match(toEscape) !== null) {
      return value.replace(toEscape, '_');
    } else {
      return value;
    }
  }
};

QueryGridController.prototype.isSelected = function (gridSource) {
  return this.selectedTab === gridSource.source.label;
};

QueryGridController.prototype.getMergedSources_ = function (sources) {
  var _this4 = this;

  var allSources = [];
  var mergedSources = {};
  sources.forEach(function (source) {
    var mergedSource = _this4.getMergedSource_(source, mergedSources);

    if (mergedSource === null) {
      allSources.push(source);
    }
  });

  for (var mergedSourceId in mergedSources) {
    allSources.push(mergedSources[mergedSourceId]);
  }

  return allSources;
};

QueryGridController.prototype.getMergedSource_ = function (source, mergedSources) {
  var mergeSourceId = null;

  for (var currentMergeSourceId in this.options.mergeTabs || {}) {
    var sourceLabels = this.options.mergeTabs[currentMergeSourceId];
    var containsSource = sourceLabels.some(function (sourceLabel) {
      return sourceLabel == source.label;
    });

    if (containsSource) {
      mergeSourceId = currentMergeSourceId;
      break;
    }
  }

  if (mergeSourceId === null) {
    return null;
  }

  var newRequest = true;
  var mergeSource;

  if (mergeSourceId in mergedSources) {
    mergeSource = mergedSources[mergeSourceId];

    if (source.requestPartners) {
      newRequest = !source.requestPartners.some(function (label) {
        return mergeSource.mergeComposants.includes(label);
      });
    }

    mergeSource.mergeComposants.push(source.label);
  } else {
    mergeSource = {
      features: [],
      id: mergeSourceId,
      label: mergeSourceId,
      limit: 0,
      pending: false,
      tooManyResults: false,
      mergeComposants: [source.label]
    };
    mergedSources[mergeSourceId] = mergeSource;
  }

  source.features.forEach(function (feature) {
    mergeSource.features.push(feature);
  });
  mergeSource.tooManyResults = mergeSource.tooManyResults || source.tooManyResults;

  if (newRequest) {
    if (source.totalFeatureCount !== undefined) {
      mergeSource.totalFeatureCount = mergeSource.totalFeatureCount !== undefined ? mergeSource.totalFeatureCount + source.totalFeatureCount : source.totalFeatureCount;
    }

    mergeSource.limit += source.limit;
  }

  return mergeSource;
};

QueryGridController.prototype.collectData_ = function (source) {
  var features = source.features;
  var allProperties = [];
  var featureGeometriesNames = [];
  var featuresForSource = {};
  var properties, featureGeometryName;
  features.forEach(function (feature) {
    properties = feature.getProperties();

    if (properties !== undefined) {
      featureGeometryName = feature.getGeometryName();

      if (!featureGeometriesNames.includes(featureGeometryName)) {
        featureGeometriesNames.push(featureGeometryName);
      }

      allProperties.push(properties);
      featuresForSource[Object(ngeo_grid_Config__WEBPACK_IMPORTED_MODULE_4__["getRowUid"])(properties)] = feature;
    }
  });
  this.cleanProperties_(allProperties, featureGeometriesNames);

  if (allProperties.length > 0) {
    var gridCreated = this.makeGrid_(allProperties, source);

    if (gridCreated) {
      this.featuresForSources_["" + source.label] = featuresForSource;
    }
  }
};

QueryGridController.prototype.cleanProperties_ = function (allProperties, featureGeometriesNames) {
  allProperties.forEach(function (properties) {
    featureGeometriesNames.forEach(function (featureGeometryName) {
      delete properties[featureGeometryName];
    });
    delete properties.boundedBy;
    delete properties.ngeo_feature_type_;
  });

  if (this.options.removeEmptyColumns === true) {
    this.removeEmptyColumnsFn_(allProperties);
  }
};

QueryGridController.prototype.removeEmptyColumnsFn_ = function (allProperties) {
  var keysToKeep = [];
  var i, key;

  for (key in allProperties[0]) {
    for (i = 0; i < allProperties.length; i++) {
      if (allProperties[i][key] !== undefined) {
        keysToKeep.push(key);
        break;
      }
    }
  }

  var keyToRemove;
  allProperties.forEach(function (properties) {
    keyToRemove = [];

    for (key in properties) {
      if (!keysToKeep.includes(key)) {
        keyToRemove.push(key);
      }
    }

    keyToRemove.forEach(function (key) {
      delete properties[key];
    });
  });
};

QueryGridController.prototype.makeGrid_ = function (data, source) {
  var sourceLabel = "" + source.label;
  var gridConfig = null;

  if (data !== null) {
    gridConfig = this.getGridConfiguration_(data);

    if (gridConfig === null) {
      return false;
    }
  }

  if (!this.loadedGridSources.includes(sourceLabel)) {
    this.loadedGridSources.push(sourceLabel);
  }

  this.gridSources[sourceLabel] = {
    source: source
  };

  if (gridConfig) {
    this.gridSources[sourceLabel].configuration = gridConfig;
  }

  return true;
};

QueryGridController.prototype.getGridConfiguration_ = function (data) {
  if (!data.length) {
    throw new Error('Missing data');
  }

  var clone = {};
  Object.assign(clone, data[0]);
  delete clone.ol_uid;
  var columns = Object.keys(clone);
  var columnDefs = [];
  columns.forEach(function (column) {
    columnDefs.push({
      name: column
    });
  });

  if (columnDefs.length > 0) {
    return new ngeo_grid_Config__WEBPACK_IMPORTED_MODULE_4__["default"](data, columnDefs);
  } else {
    return null;
  }
};

QueryGridController.prototype.getActiveGridSource = function () {
  if (this.selectedTab === null) {
    return null;
  } else {
    return this.gridSources["" + this.selectedTab];
  }
};

QueryGridController.prototype.clear = function () {
  this.active = false;
  gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_11__["default"].openFooterPanel('queryresult', {
    state: false,
    noError: true
  });
  this.pending = false;
  this.gridSources = {};
  this.loadedGridSources = [];
  this.selectedTab = null;
  this.tooManyResults = false;
  this.features_.clear();
  this.highlightFeatures_.clear();
  this.ngeoMapQuerent_.clear();
  this.featuresForSources_ = {};

  if (this.unregisterSelectWatcher_) {
    this.unregisterSelectWatcher_();
  }
};

QueryGridController.prototype.selectTab = function (gridSource) {
  var _this5 = this;

  var source = gridSource.source;
  this.selectedTab = source.label;

  if (this.unregisterSelectWatcher_) {
    this.unregisterSelectWatcher_();
    this.unregisterSelectWatcher_ = null;
  }

  if (gridSource.configuration !== undefined) {
    this.unregisterSelectWatcher_ = this.$scope_.$watchCollection(function () {
      return gridSource.configuration.selectedRows;
    }, function (newSelected, oldSelectedRows) {
      if (Object.keys(newSelected) !== Object.keys(oldSelectedRows)) {
        _this5.onSelectionChanged_();
      }
    });
  }

  this.updateFeatures_(gridSource);
  this.reflowGrid_();
};

QueryGridController.prototype.reflowGrid_ = function () {
  var id = this.escapeValue(this.selectedTab || '');
  var activePane = this.$element_.find("div.tab-pane#" + id);
  activePane.removeClass('active').addClass('active');
  this.$timeout_(function () {
    activePane.find('div.ngeo-grid-table-container table').trigger('reflow');
  });
};

QueryGridController.prototype.onSelectionChanged_ = function () {
  if (this.selectedTab === null) {
    return;
  }

  var gridSource = this.gridSources["" + this.selectedTab];
  this.updateFeatures_(gridSource);
};

QueryGridController.prototype.updateFeatures_ = function (gridSource) {
  this.features_.clear();
  this.highlightFeatures_.clear();

  if (!gridSource.configuration) {
    return;
  }

  var sourceLabel = "" + gridSource.source.label;
  var featuresForSource = this.featuresForSources_[sourceLabel];
  var selectedRows = gridSource.configuration.selectedRows;

  for (var rowId in featuresForSource) {
    var feature = featuresForSource[rowId];

    if (rowId in selectedRows) {
      this.highlightFeatures_.push(feature);
    } else {
      this.features_.push(feature);
    }
  }
};

QueryGridController.prototype.isOneSelected = function () {
  var source = this.getActiveGridSource();

  if (source === null || source.configuration === null) {
    return false;
  } else {
    return source.configuration.getSelectedCount() > 0;
  }
};

QueryGridController.prototype.getSelectedRowCount = function () {
  var source = this.getActiveGridSource();

  if (source === null || source.configuration === null) {
    return 0;
  } else {
    return source.configuration.getSelectedCount();
  }
};

QueryGridController.prototype.selectAll = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.selectAll();
  }
};

QueryGridController.prototype.unselectAll = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.unselectAll();
  }
};

QueryGridController.prototype.invertSelection = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.invertSelection();
  }
};

QueryGridController.prototype.zoomToSelection = function () {
  if (!this.map_) {
    throw new Error('Missing map');
  }

  var source = this.getActiveGridSource();

  if (source !== null) {
    var extent = ol_extent__WEBPACK_IMPORTED_MODULE_8__["createEmpty"]();
    this.highlightFeatures_.forEach(function (feature) {
      var geometry = feature.getGeometry();

      if (!geometry) {
        throw new Error('Missing geometry');
      }

      ol_extent__WEBPACK_IMPORTED_MODULE_8__["extend"](extent, geometry.getExtent());
    });
    var size = this.map_.getSize();

    if (!size) {
      throw new Error('Missing size');
    }

    this.map_.getView().fit(extent, {
      size: size,
      maxZoom: this.options.maxRecenterZoom
    });
  }
};

QueryGridController.prototype.downloadCsv = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    var columnDefs = source.configuration.columnDefs;

    if (!columnDefs) {
      throw new Error('Missing columnDefs');
    }

    var selectedRows = source.configuration.getSelectedRows();
    this.ngeoCsvDownload_.startDownload(selectedRows, columnDefs, this.filename_);
  }
};

myModule.controller('GmfDisplayquerygridController', QueryGridController);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/displayquerygrid.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/displayquerygrid.js */"./contribs/gmf/examples/displayquerygrid.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvZXhhbXBsZXMvZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL3F1ZXJ5L2dyaWRDb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL3F1ZXJ5L2dyaWRDb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImRpc3BsYXlxdWVyeWdyaWRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHQvLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbiBcdC8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZSgpIHtcbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzMsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcImdtZlRoZW1lc1wiLCBcImdtZkRhdGFTb3VyY2VzTWFuYWdlclwiLCBcIm5nZW9GZWF0dXJlT3ZlcmxheU1nclwiLCBcImdtZlRoZW1lTWFuYWdlclwiLCBcImRlZmF1bHRUaGVtZVwiXTtcblF1ZXJ5cmVzdWx0Q29udHJvbGxlci4kaW5qZWN0ID0gW1wibmdlb1F1ZXJ5UmVzdWx0XCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgJy4vZGlzcGxheXF1ZXJ5Z3JpZC5jc3MnO1xuaW1wb3J0ICcuL2dtZi1oaWRkZW4uaW5jLmNzcyc7XG5pbXBvcnQgZ21mRGF0YXNvdXJjZU1hbmFnZXIgZnJvbSAnZ21mL2RhdGFzb3VyY2UvTWFuYWdlcic7XG5pbXBvcnQgZ21mTGF5ZXJ0cmVlQ29tcG9uZW50IGZyb20gJ2dtZi9sYXllcnRyZWUvY29tcG9uZW50JztcbmltcG9ydCBnbWZNYXBDb21wb25lbnQgZnJvbSAnZ21mL21hcC9jb21wb25lbnQnO1xuaW1wb3J0IGdtZlF1ZXJ5R3JpZENvbXBvbmVudCBmcm9tICdnbWYvcXVlcnkvZ3JpZENvbXBvbmVudCc7XG5pbXBvcnQgZ21mVGhlbWVNYW5hZ2VyIGZyb20gJ2dtZi90aGVtZS9NYW5hZ2VyJztcbmltcG9ydCBnbWZUaGVtZVRoZW1lcyBmcm9tICdnbWYvdGhlbWUvVGhlbWVzJztcbmltcG9ydCBuZ2VvR3JpZE1vZHVsZSBmcm9tICduZ2VvL2dyaWQvbW9kdWxlJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZSc7XG5pbXBvcnQgbmdlb01pc2NCdG5Db21wb25lbnQgZnJvbSAnbmdlby9taXNjL2J0bkNvbXBvbmVudCc7XG5pbXBvcnQgRVBTRzIwNTYgZnJvbSAnbmdlby9wcm9qL0VQU0dfMjA1Nic7XG5pbXBvcnQgbmdlb1F1ZXJ5Q29tcG9uZW50IGZyb20gJ25nZW8vcXVlcnkvY29tcG9uZW50JztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZ21mYXBwJywgWydnZXR0ZXh0JywgZ21mRGF0YXNvdXJjZU1hbmFnZXIubmFtZSwgZ21mTGF5ZXJ0cmVlQ29tcG9uZW50Lm5hbWUsIGdtZk1hcENvbXBvbmVudC5uYW1lLCBnbWZRdWVyeUdyaWRDb21wb25lbnQubmFtZSwgZ21mVGhlbWVNYW5hZ2VyLm5hbWUsIGdtZlRoZW1lVGhlbWVzLm5hbWUsIG5nZW9HcmlkTW9kdWxlLm5hbWUsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb01pc2NCdG5Db21wb25lbnQubmFtZSwgbmdlb1F1ZXJ5Q29tcG9uZW50Lm5hbWVdKTtcbnZhciBxdWVyeXJlc3VsdENvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogJ2dtZmFwcFF1ZXJ5cmVzdWx0Q29udHJvbGxlcicsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3BhcnRpYWxzL3F1ZXJ5cmVzdWx0Lmh0bWwnKVxufTtcbm15TW9kdWxlLmNvbXBvbmVudCgnZ21mYXBwUXVlcnlyZXN1bHQnLCBxdWVyeXJlc3VsdENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIFF1ZXJ5cmVzdWx0Q29udHJvbGxlcihuZ2VvUXVlcnlSZXN1bHQpIHtcbiAgdGhpcy5yZXN1bHQgPSBuZ2VvUXVlcnlSZXN1bHQ7XG59XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ2dtZmFwcFF1ZXJ5cmVzdWx0Q29udHJvbGxlcicsIFF1ZXJ5cmVzdWx0Q29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKGdtZlRoZW1lcywgZ21mRGF0YVNvdXJjZXNNYW5hZ2VyLCBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IsIGdtZlRoZW1lTWFuYWdlciwgZGVmYXVsdFRoZW1lKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgZ21mVGhlbWVzLmxvYWRUaGVtZXMoKTtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgcHJvamVjdGlvbjogRVBTRzIwNTYsXG4gICAgICByZXNvbHV0aW9uczogWzIwMCwgMTAwLCA1MCwgMjAsIDEwLCA1LCAyLjUsIDIsIDEsIDAuNV0sXG4gICAgICBjZW50ZXI6IFsyNTM3NjM1LCAxMTUyNjQwXSxcbiAgICAgIHpvb206IDNcbiAgICB9KVxuICB9KTtcbiAgdGhpcy5kaW1lbnNpb25zID0ge307XG4gIGdtZkRhdGFTb3VyY2VzTWFuYWdlci5zZXREYXRhc291cmNlTWFwKHRoaXMubWFwKTtcbiAgZ21mRGF0YVNvdXJjZXNNYW5hZ2VyLnNldERpbWVuc2lvbnModGhpcy5kaW1lbnNpb25zKTtcbiAgdGhpcy5xdWVyeUFjdGl2ZSA9IHRydWU7XG4gIHRoaXMudGhlbWVzID0gdW5kZWZpbmVkO1xuICB0aGlzLnNlbGVjdGVkVGhlbWUgPSBudWxsO1xuXG4gIHRoaXMudXBkYXRlVGhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZ21mVGhlbWVNYW5hZ2VyLmFkZFRoZW1lKHRoaXMuc2VsZWN0ZWRUaGVtZSk7XG4gIH07XG5cbiAgdGhpcy5xdWVyeUdyaWRBY3RpdmUgPSB0cnVlO1xuICBnbWZUaGVtZXMuZ2V0VGhlbWVzT2JqZWN0KCkudGhlbihmdW5jdGlvbiAodGhlbWVzKSB7XG4gICAgaWYgKHRoZW1lcykge1xuICAgICAgX3RoaXMudGhlbWVzID0gdGhlbWVzO1xuICAgICAgdGhlbWVzLmZvckVhY2goZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIGlmICh0aGVtZS5uYW1lID09PSBkZWZhdWx0VGhlbWUpIHtcbiAgICAgICAgICBfdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhlbWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuaW5pdCh0aGlzLm1hcCk7XG59XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xubXlNb2R1bGUuY29uc3RhbnQoJ2dtZkRpc3BsYXlRdWVyeUdyaWRPcHRpb25zJywge1xuICBmZWF0dXJlc1N0eWxlOiB7XG4gICAgZmlsbDoge1xuICAgICAgY29sb3I6IFsyNTUsIDE3MCwgMCwgMC42XVxuICAgIH0sXG4gICAgY2lyY2xlOiB7XG4gICAgICBmaWxsOiB7XG4gICAgICAgIGNvbG9yOiBbMjU1LCAxNzAsIDAsIDAuNl1cbiAgICAgIH0sXG4gICAgICByYWRpdXM6IDUsXG4gICAgICBzdHJva2U6IHtcbiAgICAgICAgY29sb3I6IFsyNTUsIDE3MCwgMCwgMV0sXG4gICAgICAgIHdpZHRoOiAyXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHJva2U6IHtcbiAgICAgIGNvbG9yOiBbMjU1LCAxNzAsIDAsIDFdLFxuICAgICAgd2lkdGg6IDJcbiAgICB9XG4gIH1cbn0pO1xub3B0aW9ucyhteU1vZHVsZSk7XG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwiZ21mLWRpc3BsYXlxdWVyeWdyaWQgcGFuZWxcIiBuZy1zaG93PVwiY3RybC5hY3RpdmVcIj5cXG4gIDxkaXYgY2xhc3M9XCJjbG9zZVwiIG5nLWNsaWNrPVwiY3RybC5jbGVhcigpXCI+JnRpbWVzOzwvZGl2PlxcblxcbiAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiIHJvbGU9XCJ0YWJsaXN0XCI+XFxuICAgIDxsaVxcbiAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxcbiAgICAgIG5nLXJlcGVhdD1cImdyaWRTb3VyY2UgaW4gY3RybC5nZXRHcmlkU291cmNlcygpIHRyYWNrIGJ5IGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsXCJcXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcXG4gICAgICBuZy1jbGljaz1cImN0cmwuc2VsZWN0VGFiKGdyaWRTb3VyY2UpXCJcXG4gICAgPlxcbiAgICAgIDxhXFxuICAgICAgICBjbGFzcz1cIm5hdi1saW5rXCJcXG4gICAgICAgIGhyZWY9XCIje3tjdHJsLmVzY2FwZVZhbHVlKGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsKX19XCJcXG4gICAgICAgIG5nLWNsYXNzPVwie1xcJ2FjdGl2ZVxcJyA6IGN0cmwuaXNTZWxlY3RlZChncmlkU291cmNlKX1cIlxcbiAgICAgICAgZGF0YS10YXJnZXQ9XCIje3tjdHJsLmVzY2FwZVZhbHVlKGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsKX19XCJcXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJ7e2N0cmwuZXNjYXBlVmFsdWUoZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWwpfX1cIlxcbiAgICAgICAgcm9sZT1cInRhYlwiXFxuICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXFxuICAgICAgPlxcbiAgICAgICAgPHNwYW4+IHt7Z3JpZFNvdXJjZS5zb3VyY2UubGFiZWwgfCB0cmFuc2xhdGV9fSAoe3tncmlkU291cmNlLnNvdXJjZS5mZWF0dXJlcy5sZW5ndGh9fSkgPC9zcGFuPlxcbiAgICAgIDwvYT5cXG4gICAgPC9saT5cXG4gIDwvdWw+XFxuXFxuICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cXG4gICAgPGRpdlxcbiAgICAgIG5nLXJlcGVhdD1cImdyaWRTb3VyY2UgaW4gY3RybC5nZXRHcmlkU291cmNlcygpIHRyYWNrIGJ5IGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsXCJcXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxcbiAgICAgIGNsYXNzPVwidGFiLXBhbmVcIlxcbiAgICAgIG5nLWNsYXNzPVwie1xcJ2FjdGl2ZVxcJyA6IGN0cmwuaXNTZWxlY3RlZChncmlkU291cmNlKX1cIlxcbiAgICAgIGlkPVwie3tjdHJsLmVzY2FwZVZhbHVlKGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsKX19XCJcXG4gICAgPlxcbiAgICAgIDxuZ2VvLWdyaWQgbmdlby1ncmlkLWNvbmZpZ3VyYXRpb249XCJncmlkU291cmNlLmNvbmZpZ3VyYXRpb25cIj4gPC9uZ2VvLWdyaWQ+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XFxuICAgICAgPGRpdlxcbiAgICAgICAgbmctc2hvdz1cIiFjdHJsLnBlbmRpbmcgJiYgY3RybC5nZXRBY3RpdmVHcmlkU291cmNlKCkgJiYgY3RybC5nZXRBY3RpdmVHcmlkU291cmNlKCkuY29uZmlndXJhdGlvbiAhPT0gbnVsbFwiXFxuICAgICAgICBjbGFzcz1cInJvd1wiXFxuICAgICAgPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IG15LWF1dG9cIj5cXG4gICAgICAgICAgPHNwYW4gbmctaWY9XCJjdHJsLmhhc09uZVdpdGhUb29NYW55UmVzdWx0c18oKVwiIGNsYXNzPVwiZ21mLXF1ZXJ5LWdyaWQtdG9vLW1hbnkgdGV4dC13YXJuaW5nXCJcXG4gICAgICAgICAgICA+e3tcXCdPbmx5XFwnIHwgdHJhbnNsYXRlfX0ge3tjdHJsLnN1bU9mRmVhdHVyZXN9fSB7e1xcJ29mXFwnIHwgdHJhbnNsYXRlfX0ge3tjdHJsLnN1bU9mQXZhaWxhYmxlUmVzdWx0c319XFxuICAgICAgICAgICAge3tcXCdyZXN1bHRzIGRpc3BsYXllZCwgYXMgdGhlIG1heGltdW0gbnVtYmVyIGlzIHJlYWNoZWQuIFBsZWFzZSByZWZpbmUgeW91ciBxdWVyeS5cXCcgfCB0cmFuc2xhdGVcXG4gICAgICAgICAgICB9fTwvc3BhblxcbiAgICAgICAgICA+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiIGNsYXNzPVwicHVsbC1yaWdodFwiPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYganVzdGlmeS1jb250ZW50LWVuZFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5nLWhpZGVcIiBuZy1zaG93PVwiY3RybC5pc09uZVNlbGVjdGVkKClcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4gYnRuLXNtIG5nLWJpbmRpbmdcIj5cXG4gICAgICAgICAgICAgICAge3tjdHJsLmdldFNlbGVjdGVkUm93Q291bnQoKX19IDxzcGFuIHRyYW5zbGF0ZT5zZWxlY3RlZCBlbGVtZW50KHMpPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgICA8bGkgbmctc2hvdz1cImN0cmwuaXNPbmVTZWxlY3RlZCgpXCIgY2xhc3M9XCJuZy1oaWRlXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uXFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiXFxuICAgICAgICAgICAgICAgIHRpdGxlPVwie3tcXCdab29tIHRvIHNlbGVjdGlvblxcJyB8IHRyYW5zbGF0ZX19XCJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XCJjdHJsLnpvb21Ub1NlbGVjdGlvbigpXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT4gPHNwYW4gdHJhbnNsYXRlPlpvb20gdG88L3NwYW4+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICAgIDxsaSBuZy1zaG93PVwiY3RybC5pc09uZVNlbGVjdGVkKClcIiBjbGFzcz1cIm5nLWhpZGVcIj5cXG4gICAgICAgICAgICAgIDxidXR0b25cXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJ7e1xcJ0V4cG9ydCBzZWxlY3Rpb24gYXMgQ1NWXFwnIHwgdHJhbnNsYXRlfX1cIlxcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cImN0cmwuZG93bmxvYWRDc3YoKVwiXFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5FeHBvcnQgYXMgQ1NWPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvblxcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkcm9wdXAgYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIlxcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8c3BhbiB0cmFuc2xhdGU+U2VsZWN0PC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZExhYmVsXCI+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgbmctY2xpY2s9XCJjdHJsLnNlbGVjdEFsbCgpXCIgdHJhbnNsYXRlPkFsbDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBuZy1jbGljaz1cImN0cmwudW5zZWxlY3RBbGwoKVwiIHRyYW5zbGF0ZT5Ob25lPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG5nLWNsaWNrPVwiY3RybC5pbnZlcnRTZWxlY3Rpb24oKVwiIHRyYW5zbGF0ZT5SZXZlcnNlIHNlbGVjdGlvbjwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBuZy1zaG93PVwiY3RybC5wZW5kaW5nXCIgY2xhc3M9XCJzcGlubmVyLWdyaWRcIj5cXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXNwaW5cIj4gJyArXG4oKF9fdCA9IChyZXF1aXJlKCdnbWYvaWNvbnMvc3Bpbm5lci5zdmc/dmlld2JveCZoZWlnaHQ9M3JlbScpKSkgPT0gbnVsbCA/ICcnIDogX190KSArXG4nIDwvaT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59IiwiUXVlcnlHcmlkQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwibmdlb1F1ZXJ5UmVzdWx0XCIsIFwibmdlb01hcFF1ZXJlbnRcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCIkdGltZW91dFwiLCBcIm5nZW9Dc3ZEb3dubG9hZFwiLCBcIm5nZW9RdWVyeU9wdGlvbnNcIiwgXCJnbWZDc3ZGaWxlbmFtZVwiLCBcIiRlbGVtZW50XCIsIFwiZ21mRGlzcGxheVF1ZXJ5R3JpZE9wdGlvbnNcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvRG93bmxvYWRDc3YgZnJvbSAnbmdlby9kb3dubG9hZC9Dc3YnO1xuaW1wb3J0IG5nZW9Eb3dubG9hZFNlcnZpY2UgZnJvbSAnbmdlby9kb3dubG9hZC9zZXJ2aWNlJztcbmltcG9ydCBuZ2VvR3JpZENvbXBvbmVudCBmcm9tICduZ2VvL2dyaWQvY29tcG9uZW50JztcbmltcG9ydCBuZ2VvR3JpZENvbmZpZywgeyBnZXRSb3dVaWQgfSBmcm9tICduZ2VvL2dyaWQvQ29uZmlnJztcbmltcG9ydCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IgZnJvbSAnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3InO1xuaW1wb3J0IG5nZW9RdWVyeU1hcFF1ZXJlbnQgZnJvbSAnbmdlby9xdWVyeS9NYXBRdWVyZW50JztcbmltcG9ydCBvbENvbGxlY3Rpb24gZnJvbSAnb2wvQ29sbGVjdGlvbic7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgeyBidWlsZFN0eWxlIH0gZnJvbSAnbmdlby9vcHRpb25zJztcbmltcG9ydCBwYW5lbHMgZnJvbSAnZ21mYXBpL3N0b3JlL3BhbmVscyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24nO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZlF1ZXJ5R3JpZENvbXBvbmVudCcsIFtuZ2VvRG93bmxvYWRDc3YubmFtZSwgbmdlb0Rvd25sb2FkU2VydmljZS5uYW1lLCBuZ2VvR3JpZENvbXBvbmVudC5uYW1lLCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb1F1ZXJ5TWFwUXVlcmVudC5uYW1lXSk7XG5teU1vZHVsZS52YWx1ZSgnZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsJywgZnVuY3Rpb24gKCRlbGVtZW50LCAkYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gJGF0dHJzLmdtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZXVybDtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICdnbWYvcXVlcnkvZ3JpZENvbXBvbmVudCc7XG59KTtcbm15TW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdnbWYvcXVlcnkvZ3JpZENvbXBvbmVudCcsIHJlcXVpcmUoJy4vZ3JpZENvbXBvbmVudC5odG1sJykpO1xufV0pO1xuZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkZWxlbWVudFwiLCBcIiRhdHRyc1wiLCBcImdtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybFwiXTtcblxuZnVuY3Rpb24gZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsKCRlbGVtZW50LCAkYXR0cnMsIGdtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsKCRlbGVtZW50LCAkYXR0cnMpO1xufVxuXG52YXIgcXVlcnlHcmlkQ29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiAnR21mRGlzcGxheXF1ZXJ5Z3JpZENvbnRyb2xsZXIgYXMgY3RybCcsXG4gIGJpbmRpbmdzOiB7XG4gICAgJ2FjdGl2ZSc6ICc9P2dtZkRpc3BsYXlxdWVyeWdyaWRBY3RpdmUnLFxuICAgICdnZXRNYXBGbic6ICcmZ21mRGlzcGxheXF1ZXJ5Z3JpZE1hcCdcbiAgfSxcbiAgdGVtcGxhdGVVcmw6IGdtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybFxufTtcbm15TW9kdWxlLmNvbXBvbmVudCgnZ21mRGlzcGxheXF1ZXJ5Z3JpZCcsIHF1ZXJ5R3JpZENvbXBvbmVudCk7XG5leHBvcnQgZnVuY3Rpb24gUXVlcnlHcmlkQ29udHJvbGxlcigkc2NvcGUsIG5nZW9RdWVyeVJlc3VsdCwgbmdlb01hcFF1ZXJlbnQsIG5nZW9GZWF0dXJlT3ZlcmxheU1nciwgJHRpbWVvdXQsIG5nZW9Dc3ZEb3dubG9hZCwgbmdlb1F1ZXJ5T3B0aW9ucywgZ21mQ3N2RmlsZW5hbWUsICRlbGVtZW50LCBnbWZEaXNwbGF5UXVlcnlHcmlkT3B0aW9ucykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMub3B0aW9ucyA9IGdtZkRpc3BsYXlRdWVyeUdyaWRPcHRpb25zO1xuICB0aGlzLiRzY29wZV8gPSAkc2NvcGU7XG4gIHRoaXMuJHRpbWVvdXRfID0gJHRpbWVvdXQ7XG4gIHRoaXMubmdlb1F1ZXJ5UmVzdWx0ID0gbmdlb1F1ZXJ5UmVzdWx0O1xuICB0aGlzLm5nZW9NYXBRdWVyZW50XyA9IG5nZW9NYXBRdWVyZW50O1xuICB0aGlzLm5nZW9Dc3ZEb3dubG9hZF8gPSBuZ2VvQ3N2RG93bmxvYWQ7XG4gIHRoaXMuJGVsZW1lbnRfID0gJGVsZW1lbnQ7XG4gIHRoaXMubWF4UmVzdWx0cyA9IG5nZW9RdWVyeU9wdGlvbnMubGltaXQgIT09IHVuZGVmaW5lZCA/IG5nZW9RdWVyeU9wdGlvbnMubGltaXQgOiA1MDtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHRoaXMuZ3JpZFNvdXJjZXMgPSB7fTtcbiAgdGhpcy5sb2FkZWRHcmlkU291cmNlcyA9IFtdO1xuICB0aGlzLnNlbGVjdGVkVGFiID0gbnVsbDtcbiAgdGhpcy5mZWF0dXJlc0ZvclNvdXJjZXNfID0ge307XG4gIHRoaXMuZmVhdHVyZXNfID0gbmV3IG9sQ29sbGVjdGlvbigpO1xuICB0aGlzLm5nZW9GZWF0dXJlT3ZlcmxheU1ncl8gPSBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3I7XG4gIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfID0gbmV3IG9sQ29sbGVjdGlvbigpO1xuICB0aGlzLmZpbGVuYW1lXyA9IGdtZkNzdkZpbGVuYW1lO1xuICB0aGlzLm1hcF8gPSBudWxsO1xuICB0aGlzLnN1bU9mRmVhdHVyZXMgPSAwO1xuICB0aGlzLnN1bU9mQXZhaWxhYmxlUmVzdWx0cyA9IDA7XG4gIHRoaXMuJHNjb3BlXy4kd2F0Y2hDb2xsZWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmdlb1F1ZXJ5UmVzdWx0O1xuICB9LCBmdW5jdGlvbiAobmV3UXVlcnlSZXN1bHQsIG9sZFF1ZXJ5UmVzdWx0KSB7XG4gICAgaWYgKG5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nKSB7XG4gICAgICBfdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgX3RoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICBwYW5lbHMub3BlbkZvb3RlclBhbmVsKCdxdWVyeXJlc3VsdCcsIHtcbiAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgICAgIG5vRXJyb3I6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChuZXdRdWVyeVJlc3VsdCAhPT0gb2xkUXVlcnlSZXN1bHQpIHtcbiAgICAgIF90aGlzLnVwZGF0ZURhdGFfKCk7XG4gICAgfVxuICB9KTtcbiAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8gPSBudWxsO1xuICB0aGlzLmdldE1hcEZuID0gbnVsbDtcbn1cblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmdldE1hcEZuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGdldE1hcEZuJyk7XG4gIH1cblxuICB2YXIgZmVhdHVyZXNPdmVybGF5ID0gdGhpcy5uZ2VvRmVhdHVyZU92ZXJsYXlNZ3JfLmdldEZlYXR1cmVPdmVybGF5KCk7XG4gIGZlYXR1cmVzT3ZlcmxheS5zZXRGZWF0dXJlcyh0aGlzLmZlYXR1cmVzXyk7XG4gIGZlYXR1cmVzT3ZlcmxheS5zZXRTdHlsZShidWlsZFN0eWxlKHRoaXMub3B0aW9ucy5mZWF0dXJlc1N0eWxlKSk7XG4gIHZhciBoaWdobGlnaHRGZWF0dXJlc092ZXJsYXkgPSB0aGlzLm5nZW9GZWF0dXJlT3ZlcmxheU1ncl8uZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgaGlnaGxpZ2h0RmVhdHVyZXNPdmVybGF5LnNldEZlYXR1cmVzKHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfKTtcbiAgdmFyIGhpZ2hsaWdodEZlYXR1cmVTdHlsZSA9IGJ1aWxkU3R5bGUodGhpcy5vcHRpb25zLnNlbGVjdGVkRmVhdHVyZVN0eWxlKTtcbiAgaGlnaGxpZ2h0RmVhdHVyZXNPdmVybGF5LnNldFN0eWxlKGhpZ2hsaWdodEZlYXR1cmVTdHlsZSk7XG4gIHZhciBtYXBGbiA9IHRoaXMuZ2V0TWFwRm47XG5cbiAgaWYgKG1hcEZuKSB7XG4gICAgdmFyIG1hcCA9IG1hcEZuKCk7XG5cbiAgICBpZiAoIShtYXAgaW5zdGFuY2VvZiBvbE1hcCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgbWFwIHR5cGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcF8gPSBtYXA7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldEdyaWRTb3VyY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICByZXR1cm4gdGhpcy5sb2FkZWRHcmlkU291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZUxhYmVsKSB7XG4gICAgcmV0dXJuIF90aGlzMi5ncmlkU291cmNlc1tzb3VyY2VMYWJlbF07XG4gIH0pO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlRGF0YV8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gIGlmICgodGhpcy5uZ2VvUXVlcnlSZXN1bHQucGVuZGluZyB8fCB0aGlzLm5nZW9RdWVyeVJlc3VsdC50b3RhbCA9PT0gMCkgJiYgIXRoaXMuaGFzT25lV2l0aFRvb01hbnlSZXN1bHRzXygpKSB7XG4gICAgdmFyIG9sZEFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIGlmIChvbGRBY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5uZ2VvUXVlcnlSZXN1bHQucGVuZGluZztcbiAgICAgIHBhbmVscy5vcGVuRm9vdGVyUGFuZWwoJ3F1ZXJ5cmVzdWx0Jywge1xuICAgICAgICBzdGF0ZTogdGhpcy5hY3RpdmVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wZW5kaW5nID0gdGhpcy5uZ2VvUXVlcnlSZXN1bHQucGVuZGluZztcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnN1bU9mQXZhaWxhYmxlUmVzdWx0cyA9IDA7XG4gIHRoaXMuc3VtT2ZGZWF0dXJlcyA9IDA7XG4gIHZhciBjb3VudGVkU291cmNlcyA9IFtdO1xuICB0aGlzLm5nZW9RdWVyeVJlc3VsdC5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmICghY291bnRlZFNvdXJjZXMuaW5jbHVkZXMoc291cmNlLmxhYmVsKSkge1xuICAgICAgX3RoaXMzLnN1bU9mRmVhdHVyZXMgKz0gc291cmNlLmZlYXR1cmVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoIXNvdXJjZS5yZXF1ZXN0UGFydG5lcnMgfHwgIXNvdXJjZS5yZXF1ZXN0UGFydG5lcnMuc29tZShmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgIHJldHVybiBjb3VudGVkU291cmNlcy5pbmNsdWRlcyhsYWJlbCk7XG4gICAgfSkpIHtcbiAgICAgIF90aGlzMy5zdW1PZkF2YWlsYWJsZVJlc3VsdHMgKz0gc291cmNlLnRvdGFsRmVhdHVyZUNvdW50O1xuICAgIH1cblxuICAgIGNvdW50ZWRTb3VyY2VzLnB1c2goc291cmNlLmxhYmVsKTtcbiAgfSk7XG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgcGFuZWxzLm9wZW5Gb290ZXJQYW5lbCgncXVlcnlyZXN1bHQnLCB7XG4gICAgc3RhdGU6IHRydWVcbiAgfSk7XG4gIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICB2YXIgc291cmNlcyA9IHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnNvdXJjZXM7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tZXJnZVRhYnMgfHwge30pLmxlbmd0aCA+IDApIHtcbiAgICBzb3VyY2VzID0gdGhpcy5nZXRNZXJnZWRTb3VyY2VzXyhzb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS50b29NYW55UmVzdWx0cyAmJiBzb3VyY2UuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBfdGhpczMubWFrZUdyaWRfKG51bGwsIHNvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZS5pZCA9IF90aGlzMy5lc2NhcGVWYWx1ZShzb3VyY2UuaWQpO1xuICAgICAgdmFyIGZlYXR1cmVzID0gc291cmNlLmZlYXR1cmVzO1xuXG4gICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfdGhpczMuY29sbGVjdERhdGFfKHNvdXJjZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAodGhpcy5sb2FkZWRHcmlkU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHBhbmVscy5vcGVuRm9vdGVyUGFuZWwoJ3F1ZXJ5cmVzdWx0Jywge1xuICAgICAgc3RhdGU6IGZhbHNlLFxuICAgICAgbm9FcnJvcjogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSBudWxsIHx8ICEoXCJcIiArIHRoaXMuc2VsZWN0ZWRUYWIgaW4gdGhpcy5ncmlkU291cmNlcykpIHtcbiAgICB0aGlzLiR0aW1lb3V0XyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmlyc3RTb3VyY2VJZCA9IF90aGlzMy5sb2FkZWRHcmlkU291cmNlc1swXTtcblxuICAgICAgX3RoaXMzLnNlbGVjdFRhYihfdGhpczMuZ3JpZFNvdXJjZXNbZmlyc3RTb3VyY2VJZF0pO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5oYXNPbmVXaXRoVG9vTWFueVJlc3VsdHNfID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5uZ2VvUXVlcnlSZXN1bHQuc291cmNlcy5zb21lKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLnRvb01hbnlSZXN1bHRzO1xuICB9KTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmVzY2FwZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRvRXNjYXBlID0gL1stW1xcXS97fSgpKis/LlxcXFxeJCB8XS9nO1xuXG4gICAgaWYgKHZhbHVlLm1hdGNoKHRvRXNjYXBlKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodG9Fc2NhcGUsICdfJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmlzU2VsZWN0ZWQgPSBmdW5jdGlvbiAoZ3JpZFNvdXJjZSkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYiA9PT0gZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWw7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNZXJnZWRTb3VyY2VzXyA9IGZ1bmN0aW9uIChzb3VyY2VzKSB7XG4gIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gIHZhciBhbGxTb3VyY2VzID0gW107XG4gIHZhciBtZXJnZWRTb3VyY2VzID0ge307XG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgdmFyIG1lcmdlZFNvdXJjZSA9IF90aGlzNC5nZXRNZXJnZWRTb3VyY2VfKHNvdXJjZSwgbWVyZ2VkU291cmNlcyk7XG5cbiAgICBpZiAobWVyZ2VkU291cmNlID09PSBudWxsKSB7XG4gICAgICBhbGxTb3VyY2VzLnB1c2goc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZvciAodmFyIG1lcmdlZFNvdXJjZUlkIGluIG1lcmdlZFNvdXJjZXMpIHtcbiAgICBhbGxTb3VyY2VzLnB1c2gobWVyZ2VkU291cmNlc1ttZXJnZWRTb3VyY2VJZF0pO1xuICB9XG5cbiAgcmV0dXJuIGFsbFNvdXJjZXM7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNZXJnZWRTb3VyY2VfID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVyZ2VkU291cmNlcykge1xuICB2YXIgbWVyZ2VTb3VyY2VJZCA9IG51bGw7XG5cbiAgZm9yICh2YXIgY3VycmVudE1lcmdlU291cmNlSWQgaW4gdGhpcy5vcHRpb25zLm1lcmdlVGFicyB8fCB7fSkge1xuICAgIHZhciBzb3VyY2VMYWJlbHMgPSB0aGlzLm9wdGlvbnMubWVyZ2VUYWJzW2N1cnJlbnRNZXJnZVNvdXJjZUlkXTtcbiAgICB2YXIgY29udGFpbnNTb3VyY2UgPSBzb3VyY2VMYWJlbHMuc29tZShmdW5jdGlvbiAoc291cmNlTGFiZWwpIHtcbiAgICAgIHJldHVybiBzb3VyY2VMYWJlbCA9PSBzb3VyY2UubGFiZWw7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGFpbnNTb3VyY2UpIHtcbiAgICAgIG1lcmdlU291cmNlSWQgPSBjdXJyZW50TWVyZ2VTb3VyY2VJZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXJnZVNvdXJjZUlkID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbmV3UmVxdWVzdCA9IHRydWU7XG4gIHZhciBtZXJnZVNvdXJjZTtcblxuICBpZiAobWVyZ2VTb3VyY2VJZCBpbiBtZXJnZWRTb3VyY2VzKSB7XG4gICAgbWVyZ2VTb3VyY2UgPSBtZXJnZWRTb3VyY2VzW21lcmdlU291cmNlSWRdO1xuXG4gICAgaWYgKHNvdXJjZS5yZXF1ZXN0UGFydG5lcnMpIHtcbiAgICAgIG5ld1JlcXVlc3QgPSAhc291cmNlLnJlcXVlc3RQYXJ0bmVycy5zb21lKGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICByZXR1cm4gbWVyZ2VTb3VyY2UubWVyZ2VDb21wb3NhbnRzLmluY2x1ZGVzKGxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lcmdlU291cmNlLm1lcmdlQ29tcG9zYW50cy5wdXNoKHNvdXJjZS5sYWJlbCk7XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VTb3VyY2UgPSB7XG4gICAgICBmZWF0dXJlczogW10sXG4gICAgICBpZDogbWVyZ2VTb3VyY2VJZCxcbiAgICAgIGxhYmVsOiBtZXJnZVNvdXJjZUlkLFxuICAgICAgbGltaXQ6IDAsXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcbiAgICAgIHRvb01hbnlSZXN1bHRzOiBmYWxzZSxcbiAgICAgIG1lcmdlQ29tcG9zYW50czogW3NvdXJjZS5sYWJlbF1cbiAgICB9O1xuICAgIG1lcmdlZFNvdXJjZXNbbWVyZ2VTb3VyY2VJZF0gPSBtZXJnZVNvdXJjZTtcbiAgfVxuXG4gIHNvdXJjZS5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgbWVyZ2VTb3VyY2UuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgfSk7XG4gIG1lcmdlU291cmNlLnRvb01hbnlSZXN1bHRzID0gbWVyZ2VTb3VyY2UudG9vTWFueVJlc3VsdHMgfHwgc291cmNlLnRvb01hbnlSZXN1bHRzO1xuXG4gIGlmIChuZXdSZXF1ZXN0KSB7XG4gICAgaWYgKHNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZXJnZVNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCA9IG1lcmdlU291cmNlLnRvdGFsRmVhdHVyZUNvdW50ICE9PSB1bmRlZmluZWQgPyBtZXJnZVNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCArIHNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCA6IHNvdXJjZS50b3RhbEZlYXR1cmVDb3VudDtcbiAgICB9XG5cbiAgICBtZXJnZVNvdXJjZS5saW1pdCArPSBzb3VyY2UubGltaXQ7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VTb3VyY2U7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5jb2xsZWN0RGF0YV8gPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gIHZhciBmZWF0dXJlcyA9IHNvdXJjZS5mZWF0dXJlcztcbiAgdmFyIGFsbFByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMgPSBbXTtcbiAgdmFyIGZlYXR1cmVzRm9yU291cmNlID0ge307XG4gIHZhciBwcm9wZXJ0aWVzLCBmZWF0dXJlR2VvbWV0cnlOYW1lO1xuICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcHJvcGVydGllcyA9IGZlYXR1cmUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgaWYgKHByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmVhdHVyZUdlb21ldHJ5TmFtZSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnlOYW1lKCk7XG5cbiAgICAgIGlmICghZmVhdHVyZUdlb21ldHJpZXNOYW1lcy5pbmNsdWRlcyhmZWF0dXJlR2VvbWV0cnlOYW1lKSkge1xuICAgICAgICBmZWF0dXJlR2VvbWV0cmllc05hbWVzLnB1c2goZmVhdHVyZUdlb21ldHJ5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGFsbFByb3BlcnRpZXMucHVzaChwcm9wZXJ0aWVzKTtcbiAgICAgIGZlYXR1cmVzRm9yU291cmNlW2dldFJvd1VpZChwcm9wZXJ0aWVzKV0gPSBmZWF0dXJlO1xuICAgIH1cbiAgfSk7XG4gIHRoaXMuY2xlYW5Qcm9wZXJ0aWVzXyhhbGxQcm9wZXJ0aWVzLCBmZWF0dXJlR2VvbWV0cmllc05hbWVzKTtcblxuICBpZiAoYWxsUHJvcGVydGllcy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGdyaWRDcmVhdGVkID0gdGhpcy5tYWtlR3JpZF8oYWxsUHJvcGVydGllcywgc291cmNlKTtcblxuICAgIGlmIChncmlkQ3JlYXRlZCkge1xuICAgICAgdGhpcy5mZWF0dXJlc0ZvclNvdXJjZXNfW1wiXCIgKyBzb3VyY2UubGFiZWxdID0gZmVhdHVyZXNGb3JTb3VyY2U7XG4gICAgfVxuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5jbGVhblByb3BlcnRpZXNfID0gZnVuY3Rpb24gKGFsbFByb3BlcnRpZXMsIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMpIHtcbiAgYWxsUHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgZmVhdHVyZUdlb21ldHJpZXNOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlR2VvbWV0cnlOYW1lKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1tmZWF0dXJlR2VvbWV0cnlOYW1lXTtcbiAgICB9KTtcbiAgICBkZWxldGUgcHJvcGVydGllcy5ib3VuZGVkQnk7XG4gICAgZGVsZXRlIHByb3BlcnRpZXMubmdlb19mZWF0dXJlX3R5cGVfO1xuICB9KTtcblxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZUVtcHR5Q29sdW1ucyA9PT0gdHJ1ZSkge1xuICAgIHRoaXMucmVtb3ZlRW1wdHlDb2x1bW5zRm5fKGFsbFByb3BlcnRpZXMpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVFbXB0eUNvbHVtbnNGbl8gPSBmdW5jdGlvbiAoYWxsUHJvcGVydGllcykge1xuICB2YXIga2V5c1RvS2VlcCA9IFtdO1xuICB2YXIgaSwga2V5O1xuXG4gIGZvciAoa2V5IGluIGFsbFByb3BlcnRpZXNbMF0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYWxsUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbFByb3BlcnRpZXNbaV1ba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleXNUb0tlZXAucHVzaChrZXkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIga2V5VG9SZW1vdmU7XG4gIGFsbFByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGtleVRvUmVtb3ZlID0gW107XG5cbiAgICBmb3IgKGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIWtleXNUb0tlZXAuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBrZXlUb1JlbW92ZS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5VG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1trZXldO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLm1ha2VHcmlkXyA9IGZ1bmN0aW9uIChkYXRhLCBzb3VyY2UpIHtcbiAgdmFyIHNvdXJjZUxhYmVsID0gXCJcIiArIHNvdXJjZS5sYWJlbDtcbiAgdmFyIGdyaWRDb25maWcgPSBudWxsO1xuXG4gIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgZ3JpZENvbmZpZyA9IHRoaXMuZ2V0R3JpZENvbmZpZ3VyYXRpb25fKGRhdGEpO1xuXG4gICAgaWYgKGdyaWRDb25maWcgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXRoaXMubG9hZGVkR3JpZFNvdXJjZXMuaW5jbHVkZXMoc291cmNlTGFiZWwpKSB7XG4gICAgdGhpcy5sb2FkZWRHcmlkU291cmNlcy5wdXNoKHNvdXJjZUxhYmVsKTtcbiAgfVxuXG4gIHRoaXMuZ3JpZFNvdXJjZXNbc291cmNlTGFiZWxdID0ge1xuICAgIHNvdXJjZTogc291cmNlXG4gIH07XG5cbiAgaWYgKGdyaWRDb25maWcpIHtcbiAgICB0aGlzLmdyaWRTb3VyY2VzW3NvdXJjZUxhYmVsXS5jb25maWd1cmF0aW9uID0gZ3JpZENvbmZpZztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0R3JpZENvbmZpZ3VyYXRpb25fID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBkYXRhJyk7XG4gIH1cblxuICB2YXIgY2xvbmUgPSB7fTtcbiAgT2JqZWN0LmFzc2lnbihjbG9uZSwgZGF0YVswXSk7XG4gIGRlbGV0ZSBjbG9uZS5vbF91aWQ7XG4gIHZhciBjb2x1bW5zID0gT2JqZWN0LmtleXMoY2xvbmUpO1xuICB2YXIgY29sdW1uRGVmcyA9IFtdO1xuICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgIGNvbHVtbkRlZnMucHVzaCh7XG4gICAgICBuYW1lOiBjb2x1bW5cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKGNvbHVtbkRlZnMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBuZXcgbmdlb0dyaWRDb25maWcoZGF0YSwgY29sdW1uRGVmcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldEFjdGl2ZUdyaWRTb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZFNvdXJjZXNbXCJcIiArIHRoaXMuc2VsZWN0ZWRUYWJdO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgcGFuZWxzLm9wZW5Gb290ZXJQYW5lbCgncXVlcnlyZXN1bHQnLCB7XG4gICAgc3RhdGU6IGZhbHNlLFxuICAgIG5vRXJyb3I6IHRydWVcbiAgfSk7XG4gIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICB0aGlzLmdyaWRTb3VyY2VzID0ge307XG4gIHRoaXMubG9hZGVkR3JpZFNvdXJjZXMgPSBbXTtcbiAgdGhpcy5zZWxlY3RlZFRhYiA9IG51bGw7XG4gIHRoaXMudG9vTWFueVJlc3VsdHMgPSBmYWxzZTtcbiAgdGhpcy5mZWF0dXJlc18uY2xlYXIoKTtcbiAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18uY2xlYXIoKTtcbiAgdGhpcy5uZ2VvTWFwUXVlcmVudF8uY2xlYXIoKTtcbiAgdGhpcy5mZWF0dXJlc0ZvclNvdXJjZXNfID0ge307XG5cbiAgaWYgKHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8oKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuc2VsZWN0VGFiID0gZnVuY3Rpb24gKGdyaWRTb3VyY2UpIHtcbiAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgdmFyIHNvdXJjZSA9IGdyaWRTb3VyY2Uuc291cmNlO1xuICB0aGlzLnNlbGVjdGVkVGFiID0gc291cmNlLmxhYmVsO1xuXG4gIGlmICh0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXykge1xuICAgIHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfKCk7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8gPSBudWxsO1xuICB9XG5cbiAgaWYgKGdyaWRTb3VyY2UuY29uZmlndXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8gPSB0aGlzLiRzY29wZV8uJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uLnNlbGVjdGVkUm93cztcbiAgICB9LCBmdW5jdGlvbiAobmV3U2VsZWN0ZWQsIG9sZFNlbGVjdGVkUm93cykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld1NlbGVjdGVkKSAhPT0gT2JqZWN0LmtleXMob2xkU2VsZWN0ZWRSb3dzKSkge1xuICAgICAgICBfdGhpczUub25TZWxlY3Rpb25DaGFuZ2VkXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhpcy51cGRhdGVGZWF0dXJlc18oZ3JpZFNvdXJjZSk7XG4gIHRoaXMucmVmbG93R3JpZF8oKTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnJlZmxvd0dyaWRfID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSB0aGlzLmVzY2FwZVZhbHVlKHRoaXMuc2VsZWN0ZWRUYWIgfHwgJycpO1xuICB2YXIgYWN0aXZlUGFuZSA9IHRoaXMuJGVsZW1lbnRfLmZpbmQoXCJkaXYudGFiLXBhbmUjXCIgKyBpZCk7XG4gIGFjdGl2ZVBhbmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgdGhpcy4kdGltZW91dF8oZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZVBhbmUuZmluZCgnZGl2Lm5nZW8tZ3JpZC10YWJsZS1jb250YWluZXIgdGFibGUnKS50cmlnZ2VyKCdyZWZsb3cnKTtcbiAgfSk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5vblNlbGVjdGlvbkNoYW5nZWRfID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBncmlkU291cmNlID0gdGhpcy5ncmlkU291cmNlc1tcIlwiICsgdGhpcy5zZWxlY3RlZFRhYl07XG4gIHRoaXMudXBkYXRlRmVhdHVyZXNfKGdyaWRTb3VyY2UpO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlRmVhdHVyZXNfID0gZnVuY3Rpb24gKGdyaWRTb3VyY2UpIHtcbiAgdGhpcy5mZWF0dXJlc18uY2xlYXIoKTtcbiAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18uY2xlYXIoKTtcblxuICBpZiAoIWdyaWRTb3VyY2UuY29uZmlndXJhdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzb3VyY2VMYWJlbCA9IFwiXCIgKyBncmlkU291cmNlLnNvdXJjZS5sYWJlbDtcbiAgdmFyIGZlYXR1cmVzRm9yU291cmNlID0gdGhpcy5mZWF0dXJlc0ZvclNvdXJjZXNfW3NvdXJjZUxhYmVsXTtcbiAgdmFyIHNlbGVjdGVkUm93cyA9IGdyaWRTb3VyY2UuY29uZmlndXJhdGlvbi5zZWxlY3RlZFJvd3M7XG5cbiAgZm9yICh2YXIgcm93SWQgaW4gZmVhdHVyZXNGb3JTb3VyY2UpIHtcbiAgICB2YXIgZmVhdHVyZSA9IGZlYXR1cmVzRm9yU291cmNlW3Jvd0lkXTtcblxuICAgIGlmIChyb3dJZCBpbiBzZWxlY3RlZFJvd3MpIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfLnB1c2goZmVhdHVyZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmVhdHVyZXNfLnB1c2goZmVhdHVyZSk7XG4gICAgfVxuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5pc09uZVNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSA9PT0gbnVsbCB8fCBzb3VyY2UuY29uZmlndXJhdGlvbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc291cmNlLmNvbmZpZ3VyYXRpb24uZ2V0U2VsZWN0ZWRDb3VudCgpID4gMDtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRSb3dDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgPT09IG51bGwgfHwgc291cmNlLmNvbmZpZ3VyYXRpb24gPT09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc291cmNlLmNvbmZpZ3VyYXRpb24uZ2V0U2VsZWN0ZWRDb3VudCgpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5zZWxlY3RBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgc291cmNlLmNvbmZpZ3VyYXRpb24uc2VsZWN0QWxsKCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgIHNvdXJjZS5jb25maWd1cmF0aW9uLnVuc2VsZWN0QWxsKCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmludmVydFNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICBzb3VyY2UuY29uZmlndXJhdGlvbi5pbnZlcnRTZWxlY3Rpb24oKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuem9vbVRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMubWFwXykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYXAnKTtcbiAgfVxuXG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgdmFyIGV4dGVudCA9IG9sRXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG4gICAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18uZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgdmFyIGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBnZW9tZXRyeScpO1xuICAgICAgfVxuXG4gICAgICBvbEV4dGVudC5leHRlbmQoZXh0ZW50LCBnZW9tZXRyeS5nZXRFeHRlbnQoKSk7XG4gICAgfSk7XG4gICAgdmFyIHNpemUgPSB0aGlzLm1hcF8uZ2V0U2l6ZSgpO1xuXG4gICAgaWYgKCFzaXplKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgc2l6ZScpO1xuICAgIH1cblxuICAgIHRoaXMubWFwXy5nZXRWaWV3KCkuZml0KGV4dGVudCwge1xuICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgIG1heFpvb206IHRoaXMub3B0aW9ucy5tYXhSZWNlbnRlclpvb21cbiAgICB9KTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZG93bmxvYWRDc3YgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgdmFyIGNvbHVtbkRlZnMgPSBzb3VyY2UuY29uZmlndXJhdGlvbi5jb2x1bW5EZWZzO1xuXG4gICAgaWYgKCFjb2x1bW5EZWZzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29sdW1uRGVmcycpO1xuICAgIH1cblxuICAgIHZhciBzZWxlY3RlZFJvd3MgPSBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB0aGlzLm5nZW9Dc3ZEb3dubG9hZF8uc3RhcnREb3dubG9hZChzZWxlY3RlZFJvd3MsIGNvbHVtbkRlZnMsIHRoaXMuZmlsZW5hbWVfKTtcbiAgfVxufTtcblxubXlNb2R1bGUuY29udHJvbGxlcignR21mRGlzcGxheXF1ZXJ5Z3JpZENvbnRyb2xsZXInLCBRdWVyeUdyaWRDb250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=