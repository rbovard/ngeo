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
/******/ 		"modal": 0
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
/******/ 	deferredModules.push([26,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/modal.css":
/*!****************************!*\
  !*** ./examples/modal.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/modal.css?");

/***/ }),

/***/ "./examples/modal.js":
/*!***************************!*\
  !*** ./examples/modal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ \"./examples/modal.css\");\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/modalComponent.js */ \"./src/message/modalComponent.js\");\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name]);\n\nfunction MainController() {\n  this.modalShown = false;\n}\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./examples/modal.js?");

/***/ }),

/***/ "./node_modules/bootstrap/js/src/modal.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap/js/src/modal.js from dll-reference vendor_e4544f9f18f52e898dc0 ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_e4544f9f18f52e898dc0 */ \"dll-reference vendor_e4544f9f18f52e898dc0\"))(963);\n\n//# sourceURL=webpack:///delegated_./node_modules/bootstrap/js/src/modal.js_from_dll-reference_vendor_e4544f9f18f52e898dc0?");

/***/ }),

/***/ "./src/message/modalComponent.js":
/*!***************************************!*\
  !*** ./src/message/modalComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery_ui_ui_widgets_draggable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/draggable.js */ \"./node_modules/jquery-ui/ui/widgets/draggable.js\");\n/* harmony import */ var jquery_ui_ui_widgets_draggable_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_draggable_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_js_src_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/src/modal.js */ \"./node_modules/bootstrap/js/src/modal.js\");\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoModal', []);\nvar messageModalComponent = {\n  template: \"<div class=\\\"modal fade\\\" tabindex=\\\"-1\\\" role=\\\"dialog\\\">\\n    <div class=\\\"modal-dialog\\\">\\n      <div class=\\\"modal-content\\\">\\n        <ng-transclude></ng-transclude>\\n      </div>\\n    </div>\\n  </div>\",\n  require: {\n    'ngModel': 'ngModel'\n  },\n  transclude: true,\n  controller: 'ngeoModalController',\n  bindings: {\n    'draggableHandle': '=?ngeodraggableHandle',\n    'resizable': '<ngeoModalResizable',\n    'closable': '<ngeoModalClosable'\n  }\n};\nmodule.component('ngeoModal', messageModalComponent);\n\nvar Controller = function () {\n  Controller.$inject = [\"$scope\", \"$element\"];\n\n  function Controller($scope, $element) {\n    this.$element_ = $element;\n    this.$scope_ = $scope;\n    this.modal_ = null;\n    this.draggableHandle = '';\n    this.closable = false;\n    this.resizable = false;\n    this.ngModel = null;\n  }\n\n  var _proto = Controller.prototype;\n\n  _proto.$onInit = function $onInit() {\n    this.closable = this.closable !== false;\n    this.resizable = !!this.resizable;\n    this.draggableHandle = this.draggableHandle || '.ui-draggable-handle';\n  };\n\n  _proto.$postLink = function $postLink() {\n    var _this = this;\n\n    this.modal_ = this.$element_.children();\n\n    if (!this.closable) {\n      this.modal_.attr('data-keyboard', 'false');\n      this.modal_.attr('data-backdrop', 'static');\n    }\n\n    var dialog = this.modal_.find('.modal-dialog');\n    dialog.draggable({\n      handle: this.draggableHandle\n    });\n\n    if (this.resizable) {\n      dialog.resizable();\n    }\n\n    if (!this.ngModel) {\n      throw new Error('Missing model');\n    }\n\n    this.ngModel.$render = function () {\n      if (!_this.ngModel) {\n        throw new Error('Missing model');\n      }\n\n      if (!_this.modal_) {\n        throw new Error('Missing modal');\n      }\n\n      _this.modal_.modal(_this.ngModel.$viewValue ? 'show' : 'hide');\n    };\n\n    this.modal_.on('shown.bs.modal hidden.bs.modal', function (e) {\n      if (!_this.ngModel) {\n        throw new Error('Missing model');\n      }\n\n      var type = e.type;\n      console.assert(type == 'shown' || type == 'hidden');\n\n      _this.ngModel.$setViewValue(type == 'shown');\n    });\n  };\n\n  _proto.$onDestroy = function $onDestroy() {\n    if (!this.modal_) {\n      throw new Error('Missing modal');\n    }\n\n    this.modal_.modal('hide');\n    var dialog = this.modal_.find('.modal-dialog');\n    dialog.draggable('destroy');\n\n    if (this.resizable) {\n      dialog.resizable('destroy');\n    }\n  };\n\n  return Controller;\n}();\n\nmodule.controller('ngeoModalController', Controller);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./src/message/modalComponent.js?");

/***/ }),

/***/ 26:
/*!**************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/modal.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/modal.js */\"./examples/modal.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/modal.js?");

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