(function(t){function e(e){var n=e[0];var a=e[1];var u=e[2];var l,s,c=0,p=[];for(;c<n.length;c++){s=n[c];if(o[s]){p.push(o[s][0])}o[s]=0}for(l in a){if(Object.prototype.hasOwnProperty.call(a,l)){t[l]=a[l]}}if(f)f(e);while(p.length){p.shift()()}i.push.apply(i,u||[]);return r()}function r(){var t;for(var e=0;e<i.length;e++){var r=i[e];var n=true;for(var u=1;u<r.length;u++){var l=r[u];if(o[l]!==0)n=false}if(n){i.splice(e--,1);t=a(a.s=r[0])}}return t}var n={};var o={1:0};var i=[];function a(e){if(n[e]){return n[e].exports}var r=n[e]={i:e,l:false,exports:{}};t[e].call(r.exports,r,r.exports,a);r.l=true;return r.exports}a.m=t;a.c=n;a.d=function(t,e,r){if(!a.o(t,e)){Object.defineProperty(t,e,{configurable:false,enumerable:true,get:r})}};a.r=function(t){Object.defineProperty(t,"__esModule",{value:true})};a.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};a.d(e,"a",e);return e};a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=u.push.bind(u);u.push=e;u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var f=l;i.push([403,0]);return r()})({402:function(t,e,r){"use strict";r.r(e);var n=r(538);var o=r.n(n);var i=r(25);var a=r(217);var u=r(258);var l=r(176);var s=r(14);var f=r(608);var c=r.n(f);var p={};p.module=angular.module("gmfapp",["gettext",a["a"].module.name,i["a"].module.name,u["a"].name]);p.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background");p.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/");p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");p.MainController=function(t,e,r){var n=this;this.timeout_=t;this.xsdAttributes_=r;this.attributes=null;this.feature=null;this.layers=[];var o=["line","point","polygon"];e.loadThemes();e.getThemesObject().then(function(t){if(!t){return}var e=[];t.forEach(function(t){t.children.forEach(function(t){n.getDistinctFlatNodes_(t,e)})});e.forEach(function(t){if(t.children===undefined&&o.indexOf(t.name)!==-1){n.layers.push(t)}})})};p.MainController.$inject=["$timeout","gmfThemes","gmfXSDAttributes"];p.MainController.prototype.getSetLayers=function(t){var e=this;if(t!==undefined&&t!==null){this.xsdAttributes_.getAttributes(t.id).then(function(t){return e.setAttributes_(t)})}return this.layers};p.MainController.prototype.setAttributes_=function(t){var e=this;this.feature=null;this.attributes=null;this.timeout_(function(){e.feature=new s["a"];e.attributes=t},0)};p.MainController.prototype.getGeomType=function(){var t="N/A";if(this.attributes){var e=l["a"].getGeometryAttribute(this.attributes);if(e&&e.geomType){t=e.geomType}}return t};p.MainController.prototype.getDistinctFlatNodes_=function(t,e){var r=void 0;var n=t.children;if(n!==undefined){for(r=0;r<n.length;r++){this.getDistinctFlatNodes_(n[r],e)}}var o=false;e.some(function(e){if(e.id===t.id){return o=true}});if(!o){e.push(t)}};p.module.controller("MainController",p.MainController);e["default"]=p},403:function(t,e,r){r(73);r(72);t.exports=r(402)},538:function(t,e){}});
//# sourceMappingURL=xsdattributes.7bcbd3.js.map