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
/******/ 		"disclaimer": 0
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
/******/ 	deferredModules.push([10,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/disclaimer.css":
/*!*********************************!*\
  !*** ./examples/disclaimer.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/disclaimer.js":
/*!********************************!*\
  !*** ./examples/disclaimer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _disclaimer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disclaimer.css */ "./examples/disclaimer.css");
/* harmony import */ var _disclaimer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_disclaimer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/src/tooltip */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngeo_message_Disclaimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Disclaimer */ "./src/message/Disclaimer.js");
/* harmony import */ var ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/message/Message */ "./src/message/Message.ts");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
// The MIT License (MIT)
//
// Copyright (c) 2016-2021 Camptocamp SA
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
const myModule = angular__WEBPACK_IMPORTED_MODULE_2___default.a.module('app', ['gettext', ngeo_map_module__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_message_Disclaimer__WEBPACK_IMPORTED_MODULE_3__["default"].name]);

/**
 * @param {import('ngeo/message/Disclaimer').MessageDisclaimerService} ngeoDisclaimer Ngeo disclaimer
 *    service.
 * @ngInject
 * @class
 */
function MainController(ngeoDisclaimer) {
  /**
   * @type {import('ngeo/message/Disclaimer').MessageDisclaimerService}
   */
  this.disclaimer = ngeoDisclaimer;

  /**
   * @type {import('ol/Map').default}
   */
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_5__["default"]({
    layers: [
      new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_7__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_8__["default"](),
      }),
    ],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_6__["default"]({
      center: [0, 0],
      zoom: 4,
    }),
  });

  /**
   * @type {string}
   */
  this.successMsg_ = 'Disclaimer with success style';

  /**
   * @type {string}
   */
  this.infoMsg_ = 'Disclaimer with info style';
  /**
   * @type {string}
   */
  this.warningMsg_ = 'Disclaimer with warning style';

  /**
   * @type {string}
   */
  this.errorMsg_ = 'Disclaimer with error style';

  /**
   * @type {string[]}
   */
  this.inMapMsgs_ = [
    'Disclaimer inside the map',
    'An other message ',
    'Map contributors',
    'This is a long message inside a map',
  ];

  // initialize tooltips
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    trigger: 'hover',
  });
}

/**
 */
MainController.prototype.success = function () {
  this.disclaimer.success(this.successMsg_);
};

/**
 */
MainController.prototype.info = function () {
  this.disclaimer.info(this.infoMsg_);
};

/**
 */
MainController.prototype.warn = function () {
  this.disclaimer.warn(this.warningMsg_);
};

/**
 */
MainController.prototype.error = function () {
  this.disclaimer.error(this.errorMsg_);
};

/**
 * Demonstrates how to display a disclaimer message in an other target. In
 * this case, it's shown in the map.
 */
MainController.prototype.inMap = function () {
  this.inMapMsgs_.forEach((message) => {
    this.disclaimer.alert({
      msg: message,
      target: '#disclaimers-in-map',
      type: ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__["MessageType"].WARNING,
    });
  });
};

/**
 * Demonstrates how to close disclaimer messages using JavaScript, i.e.
 * instead of clicking on the close button.
 */
MainController.prototype.closeAll = function () {
  this.disclaimer.close({
    msg: this.successMsg_,
    type: ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__["MessageType"].SUCCESS,
  });

  this.disclaimer.close({
    msg: this.infoMsg_,
    type: ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__["MessageType"].INFORMATION,
  });

  this.disclaimer.close({
    msg: this.warningMsg_,
    type: ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__["MessageType"].WARNING,
  });

  this.disclaimer.close({
    msg: this.errorMsg_,
    type: ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__["MessageType"].ERROR,
  });

  this.inMapMsgs_.forEach((message) => {
    this.disclaimer.close({
      msg: message,
      type: ngeo_message_Message__WEBPACK_IMPORTED_MODULE_4__["MessageType"].WARNING,
    });
  });
};

myModule.controller('MainController', MainController);

/* harmony default export */ __webpack_exports__["default"] = (myModule);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/message/Disclaimer.js":
/*!***********************************!*\
  !*** ./src/message/Disclaimer.js ***!
  \***********************************/
/*! exports provided: MessageDisclaimerService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDisclaimerService", function() { return MessageDisclaimerService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_src_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/src/alert */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var ngeo_message_Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Popup */ "./src/message/Popup.js");
/* harmony import */ var ngeo_message_Message_OLD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Message_OLD */ "./src/message/Message_OLD.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_4__);
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






var MessageDisclaimerService = function (_ngeoMessageMessage) {
  MessageDisclaimerService.$inject = ["$sce", "gettextCatalog", "ngeoCreatePopup"];

  _inherits(MessageDisclaimerService, _ngeoMessageMessage);

  var _super = _createSuper(MessageDisclaimerService);

  function MessageDisclaimerService($sce, gettextCatalog, ngeoCreatePopup) {
    var _this;

    _classCallCheck(this, MessageDisclaimerService);

    _this = _super.call(this);
    _this.sce_ = $sce;
    _this.gettextCatalog_ = gettextCatalog;
    _this.createPopup_ = ngeoCreatePopup;
    var container = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element('<div class="ngeo-disclaimer"></div>');
    angular__WEBPACK_IMPORTED_MODULE_0___default.a.element(document.body).append(container);
    _this.container_ = container;
    _this.messages_ = {};
    _this.messagesConsumerCount_ = {};
    _this.uids_ = {};
    return _this;
  }

  _createClass(MessageDisclaimerService, [{
    key: "alert",
    value: function alert(object) {
      this.show(object);
    }
  }, {
    key: "close",
    value: function close(object) {
      var _this2 = this;

      var msgObjects = this.getMessageObjects(object);
      msgObjects.forEach(function (message) {
        return _this2.closeMessage_(message);
      });
    }
  }, {
    key: "showMessage",
    value: function showMessage(message) {
      var _this3 = this;

      var gettextCatalog = this.gettextCatalog_;
      var type = message.type;
      console.assert(typeof type == 'string', 'Type should be set.');
      var uid = this.getMessageUid_(message);

      if (this.uids_[uid]) {
        return;
      }

      this.uids_[uid] = true;

      if (message.popup === true) {
        var popup = this.createPopup_();
        var content = this.sce_.trustAsHtml(message.msg);
        popup.open({
          autoDestroy: true,
          content: content,
          title: '&nbsp;'
        });
        popup.scope.$watch('open', function (newVal) {
          if (!newVal) {
            _this3.closeMessage_(message);
          }
        });
        this.messages_[uid] = popup;
      } else {
        var compatibleMessageUid = this.getCompatibleMessageUid_(message);

        if (this.messages_[compatibleMessageUid]) {
          this.messagesConsumerCount_[compatibleMessageUid]++;
          return;
        }

        var classNames = ['alert', 'fade', 'alert-dismissible', 'show'];

        switch (type) {
          case ngeo_message_Message_OLD__WEBPACK_IMPORTED_MODULE_3__["MessageType"].ERROR:
            classNames.push('alert-danger');
            break;

          case ngeo_message_Message_OLD__WEBPACK_IMPORTED_MODULE_3__["MessageType"].INFORMATION:
            classNames.push('alert-info');
            break;

          case ngeo_message_Message_OLD__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SUCCESS:
            classNames.push('alert-success');
            break;

          case ngeo_message_Message_OLD__WEBPACK_IMPORTED_MODULE_3__["MessageType"].WARNING:
            classNames.push('alert-warning');
            break;

          default:
            break;
        }

        var el = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element("<div role=\"alert\" class=\"".concat(classNames.join(' '), "\"></div>"));
        var button = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"".concat(gettextCatalog.getString('Close'), "\"><span aria-hidden=\"true\" class=\"fa fa-times\"></span></button>"));
        var msg = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element('<span />').html(message.msg);
        el.append(button).append(msg);
        var container;

        if (message.target) {
          container = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element(message.target);
        } else {
          container = this.container_;
        }

        container.append(el);
        el.addClass('show');
        el.on('closed.bs.alert', function () {
          _this3.closeMessage_(message, true);
        });
        this.messages_[compatibleMessageUid] = el;
        this.messagesConsumerCount_[compatibleMessageUid] = 1;
      }
    }
  }, {
    key: "getMessageUid_",
    value: function getMessageUid_(message) {
      return "".concat(message.msg, "-").concat(message.type, "-").concat(message.layerUid);
    }
  }, {
    key: "getCompatibleMessageUid_",
    value: function getCompatibleMessageUid_(message) {
      return "".concat(message.msg, "-").concat(message.type);
    }
  }, {
    key: "closeMessage_",
    value: function closeMessage_(message) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var uid = this.getMessageUid_(message);

      if (!this.uids_[uid]) {
        return;
      }

      delete this.uids_[uid];
      var compatibleMessageUid = this.getCompatibleMessageUid_(message);

      if (force) {
        this.messagesConsumerCount_[compatibleMessageUid] = 0;
      } else {
        this.messagesConsumerCount_[compatibleMessageUid]--;
      }

      if (this.messagesConsumerCount_[compatibleMessageUid] > 0) {
        return;
      }

      var obj = this.messages_[compatibleMessageUid];

      if (obj instanceof ngeo_message_Popup__WEBPACK_IMPORTED_MODULE_2__["MessagePopup"]) {
        var mpObj = obj;

        if (mpObj.getOpen()) {
          mpObj.setOpen(false);
        }
      } else {
        var jqueryObj = obj;

        if (jqueryObj.hasClass('show')) {
          jqueryObj.alert('close');
        }
      }

      delete this.messages_[compatibleMessageUid];
      delete this.messagesConsumerCount_[compatibleMessageUid];
    }
  }]);

  return MessageDisclaimerService;
}(ngeo_message_Message_OLD__WEBPACK_IMPORTED_MODULE_3__["default"]);
var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoDisclaimer', [ngeo_message_Popup__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
myModule.service('ngeoDisclaimer', MessageDisclaimerService);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/message/Message_OLD.js":
/*!************************************!*\
  !*** ./src/message/Message_OLD.js ***!
  \************************************/
/*! exports provided: MessageType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MessageType = {
  ERROR: 'error',
  INFORMATION: 'information',
  SUCCESS: 'success',
  WARNING: 'warning'
};

var _default = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "showMessage",
    value: function showMessage(message) {}
  }, {
    key: "show",
    value: function show(object) {
      var msgObjects = this.getMessageObjects(object);
      msgObjects.forEach(this.showMessage, this);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.show(this.getMessageObjects(message, MessageType.ERROR));
    }
  }, {
    key: "info",
    value: function info(message) {
      this.show(this.getMessageObjects(message, MessageType.INFORMATION));
    }
  }, {
    key: "success",
    value: function success(message) {
      this.show(this.getMessageObjects(message, MessageType.SUCCESS));
    }
  }, {
    key: "warn",
    value: function warn(message) {
      this.show(this.getMessageObjects(message, MessageType.WARNING));
    }
  }, {
    key: "getMessageObjects",
    value: function getMessageObjects(object, opt_type) {
      var msgObjects = [];
      var defaultType = MessageType.INFORMATION;

      if (typeof object === 'string') {
        msgObjects.push({
          msg: object,
          type: opt_type !== undefined ? opt_type : defaultType
        });
      } else if (Array.isArray(object)) {
        object.forEach(function (msg) {
          if (typeof object === 'string') {
            msgObjects.push({
              msg: msg,
              type: opt_type !== undefined ? opt_type : defaultType
            });
          } else {
            if (typeof msg == 'string') {
              throw new Error('Wrong msg type');
            }

            if (opt_type !== undefined) {
              msg.type = opt_type;
            }

            msgObjects.push(msg);
          }
        });
      } else {
        var msgObject = object;

        if (opt_type !== undefined) {
          msgObject.type = opt_type;
        }

        if (msgObject.type === undefined) {
          msgObject.type = defaultType;
        }

        msgObjects.push(msgObject);
      }

      return msgObjects;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ 10:
/*!*******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/disclaimer.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/disclaimer.js */"./examples/disclaimer.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2xhaW1lci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kaXNjbGFpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlL0Rpc2NsYWltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc3NhZ2UvTWVzc2FnZV9PTEQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImRpc2NsYWltZXJcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHQvLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbiBcdC8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZSgpIHtcbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzEwLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNi0yMDIxIENhbXB0b2NhbXAgU0Fcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCAnLi9kaXNjbGFpbWVyLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcCc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWVzc2FnZURpc2NsYWltZXIgZnJvbSAnbmdlby9tZXNzYWdlL0Rpc2NsYWltZXInO1xuXG5pbXBvcnQge01lc3NhZ2VUeXBlfSBmcm9tICduZ2VvL21lc3NhZ2UvTWVzc2FnZSc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZSc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTSc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUnO1xuXG4vKiogQHR5cGUge2FuZ3VsYXIuSU1vZHVsZX0gKiovXG5jb25zdCBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9NZXNzYWdlRGlzY2xhaW1lci5uYW1lXSk7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJ25nZW8vbWVzc2FnZS9EaXNjbGFpbWVyJykuTWVzc2FnZURpc2NsYWltZXJTZXJ2aWNlfSBuZ2VvRGlzY2xhaW1lciBOZ2VvIGRpc2NsYWltZXJcbiAqICAgIHNlcnZpY2UuXG4gKiBAbmdJbmplY3RcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcihuZ2VvRGlzY2xhaW1lcikge1xuICAvKipcbiAgICogQHR5cGUge2ltcG9ydCgnbmdlby9tZXNzYWdlL0Rpc2NsYWltZXInKS5NZXNzYWdlRGlzY2xhaW1lclNlcnZpY2V9XG4gICAqL1xuICB0aGlzLmRpc2NsYWltZXIgPSBuZ2VvRGlzY2xhaW1lcjtcblxuICAvKipcbiAgICogQHR5cGUge2ltcG9ydCgnb2wvTWFwJykuZGVmYXVsdH1cbiAgICovXG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtcbiAgICAgIG5ldyBvbExheWVyVGlsZSh7XG4gICAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKCksXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgY2VudGVyOiBbMCwgMF0sXG4gICAgICB6b29tOiA0LFxuICAgIH0pLFxuICB9KTtcblxuICAvKipcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRoaXMuc3VjY2Vzc01zZ18gPSAnRGlzY2xhaW1lciB3aXRoIHN1Y2Nlc3Mgc3R5bGUnO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5pbmZvTXNnXyA9ICdEaXNjbGFpbWVyIHdpdGggaW5mbyBzdHlsZSc7XG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy53YXJuaW5nTXNnXyA9ICdEaXNjbGFpbWVyIHdpdGggd2FybmluZyBzdHlsZSc7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLmVycm9yTXNnXyA9ICdEaXNjbGFpbWVyIHdpdGggZXJyb3Igc3R5bGUnO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqL1xuICB0aGlzLmluTWFwTXNnc18gPSBbXG4gICAgJ0Rpc2NsYWltZXIgaW5zaWRlIHRoZSBtYXAnLFxuICAgICdBbiBvdGhlciBtZXNzYWdlICcsXG4gICAgJ01hcCBjb250cmlidXRvcnMnLFxuICAgICdUaGlzIGlzIGEgbG9uZyBtZXNzYWdlIGluc2lkZSBhIG1hcCcsXG4gIF07XG5cbiAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwc1xuICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XG4gICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgfSk7XG59XG5cbi8qKlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5kaXNjbGFpbWVyLnN1Y2Nlc3ModGhpcy5zdWNjZXNzTXNnXyk7XG59O1xuXG4vKipcbiAqL1xuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZGlzY2xhaW1lci5pbmZvKHRoaXMuaW5mb01zZ18pO1xufTtcblxuLyoqXG4gKi9cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRpc2NsYWltZXIud2Fybih0aGlzLndhcm5pbmdNc2dfKTtcbn07XG5cbi8qKlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZGlzY2xhaW1lci5lcnJvcih0aGlzLmVycm9yTXNnXyk7XG59O1xuXG4vKipcbiAqIERlbW9uc3RyYXRlcyBob3cgdG8gZGlzcGxheSBhIGRpc2NsYWltZXIgbWVzc2FnZSBpbiBhbiBvdGhlciB0YXJnZXQuIEluXG4gKiB0aGlzIGNhc2UsIGl0J3Mgc2hvd24gaW4gdGhlIG1hcC5cbiAqL1xuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmluTWFwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmluTWFwTXNnc18uZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgIHRoaXMuZGlzY2xhaW1lci5hbGVydCh7XG4gICAgICBtc2c6IG1lc3NhZ2UsXG4gICAgICB0YXJnZXQ6ICcjZGlzY2xhaW1lcnMtaW4tbWFwJyxcbiAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLldBUk5JTkcsXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZW1vbnN0cmF0ZXMgaG93IHRvIGNsb3NlIGRpc2NsYWltZXIgbWVzc2FnZXMgdXNpbmcgSmF2YVNjcmlwdCwgaS5lLlxuICogaW5zdGVhZCBvZiBjbGlja2luZyBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuICovXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuY2xvc2VBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZGlzY2xhaW1lci5jbG9zZSh7XG4gICAgbXNnOiB0aGlzLnN1Y2Nlc3NNc2dfLFxuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNVQ0NFU1MsXG4gIH0pO1xuXG4gIHRoaXMuZGlzY2xhaW1lci5jbG9zZSh7XG4gICAgbXNnOiB0aGlzLmluZm9Nc2dfLFxuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLklORk9STUFUSU9OLFxuICB9KTtcblxuICB0aGlzLmRpc2NsYWltZXIuY2xvc2Uoe1xuICAgIG1zZzogdGhpcy53YXJuaW5nTXNnXyxcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5XQVJOSU5HLFxuICB9KTtcblxuICB0aGlzLmRpc2NsYWltZXIuY2xvc2Uoe1xuICAgIG1zZzogdGhpcy5lcnJvck1zZ18sXG4gICAgdHlwZTogTWVzc2FnZVR5cGUuRVJST1IsXG4gIH0pO1xuXG4gIHRoaXMuaW5NYXBNc2dzXy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgdGhpcy5kaXNjbGFpbWVyLmNsb3NlKHtcbiAgICAgIG1zZzogbWVzc2FnZSxcbiAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLldBUk5JTkcsXG4gICAgfSk7XG4gIH0pO1xufTtcblxubXlNb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvYWxlcnQnO1xuaW1wb3J0IG5nZW9NZXNzYWdlUG9wdXAsIHsgTWVzc2FnZVBvcHVwIH0gZnJvbSAnbmdlby9tZXNzYWdlL1BvcHVwJztcbmltcG9ydCBuZ2VvTWVzc2FnZU1lc3NhZ2UsIHsgTWVzc2FnZVR5cGUgfSBmcm9tICduZ2VvL21lc3NhZ2UvTWVzc2FnZV9PTEQnO1xuaW1wb3J0ICduZ2VvL3Nhc3MvZm9udC5zY3NzJztcbmV4cG9ydCB2YXIgTWVzc2FnZURpc2NsYWltZXJTZXJ2aWNlID0gZnVuY3Rpb24gKF9uZ2VvTWVzc2FnZU1lc3NhZ2UpIHtcbiAgTWVzc2FnZURpc2NsYWltZXJTZXJ2aWNlLiRpbmplY3QgPSBbXCIkc2NlXCIsIFwiZ2V0dGV4dENhdGFsb2dcIiwgXCJuZ2VvQ3JlYXRlUG9wdXBcIl07XG5cbiAgX2luaGVyaXRzKE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSwgX25nZW9NZXNzYWdlTWVzc2FnZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNZXNzYWdlRGlzY2xhaW1lclNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSgkc2NlLCBnZXR0ZXh0Q2F0YWxvZywgbmdlb0NyZWF0ZVBvcHVwKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLnNjZV8gPSAkc2NlO1xuICAgIF90aGlzLmdldHRleHRDYXRhbG9nXyA9IGdldHRleHRDYXRhbG9nO1xuICAgIF90aGlzLmNyZWF0ZVBvcHVwXyA9IG5nZW9DcmVhdGVQb3B1cDtcbiAgICB2YXIgY29udGFpbmVyID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IGNsYXNzPVwibmdlby1kaXNjbGFpbWVyXCI+PC9kaXY+Jyk7XG4gICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLmFwcGVuZChjb250YWluZXIpO1xuICAgIF90aGlzLmNvbnRhaW5lcl8gPSBjb250YWluZXI7XG4gICAgX3RoaXMubWVzc2FnZXNfID0ge307XG4gICAgX3RoaXMubWVzc2FnZXNDb25zdW1lckNvdW50XyA9IHt9O1xuICAgIF90aGlzLnVpZHNfID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSwgW3tcbiAgICBrZXk6IFwiYWxlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxlcnQob2JqZWN0KSB7XG4gICAgICB0aGlzLnNob3cob2JqZWN0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2Uob2JqZWN0KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG1zZ09iamVjdHMgPSB0aGlzLmdldE1lc3NhZ2VPYmplY3RzKG9iamVjdCk7XG4gICAgICBtc2dPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jbG9zZU1lc3NhZ2VfKG1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZ2V0dGV4dENhdGFsb2cgPSB0aGlzLmdldHRleHRDYXRhbG9nXztcbiAgICAgIHZhciB0eXBlID0gbWVzc2FnZS50eXBlO1xuICAgICAgY29uc29sZS5hc3NlcnQodHlwZW9mIHR5cGUgPT0gJ3N0cmluZycsICdUeXBlIHNob3VsZCBiZSBzZXQuJyk7XG4gICAgICB2YXIgdWlkID0gdGhpcy5nZXRNZXNzYWdlVWlkXyhtZXNzYWdlKTtcblxuICAgICAgaWYgKHRoaXMudWlkc19bdWlkXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMudWlkc19bdWlkXSA9IHRydWU7XG5cbiAgICAgIGlmIChtZXNzYWdlLnBvcHVwID09PSB0cnVlKSB7XG4gICAgICAgIHZhciBwb3B1cCA9IHRoaXMuY3JlYXRlUG9wdXBfKCk7XG4gICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5zY2VfLnRydXN0QXNIdG1sKG1lc3NhZ2UubXNnKTtcbiAgICAgICAgcG9wdXAub3Blbih7XG4gICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICB0aXRsZTogJyZuYnNwOydcbiAgICAgICAgfSk7XG4gICAgICAgIHBvcHVwLnNjb3BlLiR3YXRjaCgnb3BlbicsIGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgICAgX3RoaXMzLmNsb3NlTWVzc2FnZV8obWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tZXNzYWdlc19bdWlkXSA9IHBvcHVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbXBhdGlibGVNZXNzYWdlVWlkID0gdGhpcy5nZXRDb21wYXRpYmxlTWVzc2FnZVVpZF8obWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXNfW2NvbXBhdGlibGVNZXNzYWdlVWlkXSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXNDb25zdW1lckNvdW50X1tjb21wYXRpYmxlTWVzc2FnZVVpZF0rKztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xhc3NOYW1lcyA9IFsnYWxlcnQnLCAnZmFkZScsICdhbGVydC1kaXNtaXNzaWJsZScsICdzaG93J107XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FUlJPUjpcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWxlcnQtZGFuZ2VyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSU5GT1JNQVRJT046XG4gICAgICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsZXJ0LWluZm8nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5TVUNDRVNTOlxuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGVydC1zdWNjZXNzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuV0FSTklORzpcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWxlcnQtd2FybmluZycpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWwgPSBhbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IHJvbGU9XFxcImFsZXJ0XFxcIiBjbGFzcz1cXFwiXCIuY29uY2F0KGNsYXNzTmFtZXMuam9pbignICcpLCBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGFuZ3VsYXIuZWxlbWVudChcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtbGFiZWw9XFxcIlwiLmNvbmNhdChnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ0Nsb3NlJyksIFwiXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIj48L3NwYW4+PC9idXR0b24+XCIpKTtcbiAgICAgICAgdmFyIG1zZyA9IGFuZ3VsYXIuZWxlbWVudCgnPHNwYW4gLz4nKS5odG1sKG1lc3NhZ2UubXNnKTtcbiAgICAgICAgZWwuYXBwZW5kKGJ1dHRvbikuYXBwZW5kKG1zZyk7XG4gICAgICAgIHZhciBjb250YWluZXI7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UudGFyZ2V0KSB7XG4gICAgICAgICAgY29udGFpbmVyID0gYW5ndWxhci5lbGVtZW50KG1lc3NhZ2UudGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcl87XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGVsKTtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgZWwub24oJ2Nsb3NlZC5icy5hbGVydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMuY2xvc2VNZXNzYWdlXyhtZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWVzc2FnZXNfW2NvbXBhdGlibGVNZXNzYWdlVWlkXSA9IGVsO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzQ29uc3VtZXJDb3VudF9bY29tcGF0aWJsZU1lc3NhZ2VVaWRdID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWVzc2FnZVVpZF9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWVzc2FnZVVpZF8obWVzc2FnZSkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG1lc3NhZ2UubXNnLCBcIi1cIikuY29uY2F0KG1lc3NhZ2UudHlwZSwgXCItXCIpLmNvbmNhdChtZXNzYWdlLmxheWVyVWlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29tcGF0aWJsZU1lc3NhZ2VVaWRfXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbXBhdGlibGVNZXNzYWdlVWlkXyhtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobWVzc2FnZS5tc2csIFwiLVwiKS5jb25jYXQobWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VNZXNzYWdlX1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1lc3NhZ2VfKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgdWlkID0gdGhpcy5nZXRNZXNzYWdlVWlkXyhtZXNzYWdlKTtcblxuICAgICAgaWYgKCF0aGlzLnVpZHNfW3VpZF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy51aWRzX1t1aWRdO1xuICAgICAgdmFyIGNvbXBhdGlibGVNZXNzYWdlVWlkID0gdGhpcy5nZXRDb21wYXRpYmxlTWVzc2FnZVVpZF8obWVzc2FnZSk7XG5cbiAgICAgIGlmIChmb3JjZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzQ29uc3VtZXJDb3VudF9bY29tcGF0aWJsZU1lc3NhZ2VVaWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXNDb25zdW1lckNvdW50X1tjb21wYXRpYmxlTWVzc2FnZVVpZF0tLTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubWVzc2FnZXNDb25zdW1lckNvdW50X1tjb21wYXRpYmxlTWVzc2FnZVVpZF0gPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9iaiA9IHRoaXMubWVzc2FnZXNfW2NvbXBhdGlibGVNZXNzYWdlVWlkXTtcblxuICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2VQb3B1cCkge1xuICAgICAgICB2YXIgbXBPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKG1wT2JqLmdldE9wZW4oKSkge1xuICAgICAgICAgIG1wT2JqLnNldE9wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIganF1ZXJ5T2JqID0gb2JqO1xuXG4gICAgICAgIGlmIChqcXVlcnlPYmouaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICAgIGpxdWVyeU9iai5hbGVydCgnY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5tZXNzYWdlc19bY29tcGF0aWJsZU1lc3NhZ2VVaWRdO1xuICAgICAgZGVsZXRlIHRoaXMubWVzc2FnZXNDb25zdW1lckNvdW50X1tjb21wYXRpYmxlTWVzc2FnZVVpZF07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZTtcbn0obmdlb01lc3NhZ2VNZXNzYWdlKTtcbnZhciBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvRGlzY2xhaW1lcicsIFtuZ2VvTWVzc2FnZVBvcHVwLm5hbWVdKTtcbm15TW9kdWxlLnNlcnZpY2UoJ25nZW9EaXNjbGFpbWVyJywgTWVzc2FnZURpc2NsYWltZXJTZXJ2aWNlKTtcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZXhwb3J0IHZhciBNZXNzYWdlVHlwZSA9IHtcbiAgRVJST1I6ICdlcnJvcicsXG4gIElORk9STUFUSU9OOiAnaW5mb3JtYXRpb24nLFxuICBTVUNDRVNTOiAnc3VjY2VzcycsXG4gIFdBUk5JTkc6ICd3YXJuaW5nJ1xufTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJzaG93TWVzc2FnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInNob3dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdyhvYmplY3QpIHtcbiAgICAgIHZhciBtc2dPYmplY3RzID0gdGhpcy5nZXRNZXNzYWdlT2JqZWN0cyhvYmplY3QpO1xuICAgICAgbXNnT2JqZWN0cy5mb3JFYWNoKHRoaXMuc2hvd01lc3NhZ2UsIHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICB0aGlzLnNob3codGhpcy5nZXRNZXNzYWdlT2JqZWN0cyhtZXNzYWdlLCBNZXNzYWdlVHlwZS5FUlJPUikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xuICAgICAgdGhpcy5zaG93KHRoaXMuZ2V0TWVzc2FnZU9iamVjdHMobWVzc2FnZSwgTWVzc2FnZVR5cGUuSU5GT1JNQVRJT04pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VjY2Vzc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWNjZXNzKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2hvdyh0aGlzLmdldE1lc3NhZ2VPYmplY3RzKG1lc3NhZ2UsIE1lc3NhZ2VUeXBlLlNVQ0NFU1MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2FyblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2hvdyh0aGlzLmdldE1lc3NhZ2VPYmplY3RzKG1lc3NhZ2UsIE1lc3NhZ2VUeXBlLldBUk5JTkcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWVzc2FnZU9iamVjdHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWVzc2FnZU9iamVjdHMob2JqZWN0LCBvcHRfdHlwZSkge1xuICAgICAgdmFyIG1zZ09iamVjdHMgPSBbXTtcbiAgICAgIHZhciBkZWZhdWx0VHlwZSA9IE1lc3NhZ2VUeXBlLklORk9STUFUSU9OO1xuXG4gICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbXNnT2JqZWN0cy5wdXNoKHtcbiAgICAgICAgICBtc2c6IG9iamVjdCxcbiAgICAgICAgICB0eXBlOiBvcHRfdHlwZSAhPT0gdW5kZWZpbmVkID8gb3B0X3R5cGUgOiBkZWZhdWx0VHlwZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIG9iamVjdC5mb3JFYWNoKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG1zZ09iamVjdHMucHVzaCh7XG4gICAgICAgICAgICAgIG1zZzogbXNnLFxuICAgICAgICAgICAgICB0eXBlOiBvcHRfdHlwZSAhPT0gdW5kZWZpbmVkID8gb3B0X3R5cGUgOiBkZWZhdWx0VHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgbXNnIHR5cGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdF90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbXNnLnR5cGUgPSBvcHRfdHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbXNnT2JqZWN0cy5wdXNoKG1zZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtc2dPYmplY3QgPSBvYmplY3Q7XG5cbiAgICAgICAgaWYgKG9wdF90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtc2dPYmplY3QudHlwZSA9IG9wdF90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1zZ09iamVjdC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtc2dPYmplY3QudHlwZSA9IGRlZmF1bHRUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbXNnT2JqZWN0cy5wdXNoKG1zZ09iamVjdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtc2dPYmplY3RzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL01BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9