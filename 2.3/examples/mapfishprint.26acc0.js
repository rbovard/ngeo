(function(t){function e(e){var n=e[0];var i=e[1];var s=e[2];var p,u,c=0,_=[];for(;c<n.length;c++){u=n[c];if(a[u]){_.push(a[u][0])}a[u]=0}for(p in i){if(Object.prototype.hasOwnProperty.call(i,p)){t[p]=i[p]}}if(l)l(e);while(_.length){_.shift()()}o.push.apply(o,s||[]);return r()}function r(){var t;for(var e=0;e<o.length;e++){var r=o[e];var n=true;for(var s=1;s<r.length;s++){var p=r[s];if(a[p]!==0)n=false}if(n){o.splice(e--,1);t=i(i.s=r[0])}}return t}var n={};var a={20:0};var o=[];function i(e){if(n[e]){return n[e].exports}var r=n[e]={i:e,l:false,exports:{}};t[e].call(r.exports,r,r.exports,i);r.l=true;return r.exports}i.m=t;i.c=n;i.d=function(t,e,r){if(!i.o(t,e)){Object.defineProperty(t,e,{configurable:false,enumerable:true,get:r})}};i.r=function(t){Object.defineProperty(t,"__esModule",{value:true})};i.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};i.d(e,"a",e);return e};i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[];var p=s.push.bind(s);s.push=e;s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=p;o.push([382,0]);return r()})({381:function(t,e,r){"use strict";r.r(e);var n=r(492);var a=r.n(n);var o=r(92);var i=r(252);var s=r(267);var p=r(19);var u=r(26);var l=r(160);var c=r(76);var _=r(38);var f=r(71);var h=r(34);var v=r(23);var d={};var P=angular.module("app",["gettext",v["a"].name,i["a"].module.name,s["a"].module.name]);d.WMS_URL_="https://geomapfish-demo.camptocamp.com/2.3/wsgi/"+"mapserv_proxy";d.PRINT_URL_="https://geomapfish-demo.camptocamp.com/2.3/wsgi/"+"printproxy";d.PRINT_SCALES_=[100,250,500,2500,5e3,1e4,25e3,5e4,1e5,5e5];d.PRINT_FORMAT_="pdf";d.PRINT_LAYOUT_="1 A4 portrait";d.PRINT_DPI_=72;d.PRINT_PAPER_SIZE_=[555,675];d.MainController=function(t,e,r){this.map=new p["a"]({layers:[new c["a"]({source:new f["a"]({url:d.WMS_URL_,params:{LAYERS:"osm"},serverType:"mapserver"})}),new _["a"]({source:new h["b"]({url:"data/polygon-swizerland.json",format:new l["a"]({defaultDataProjection:o["a"]})})})],view:new u["a"]({projection:o["a"],resolutions:[200,100,50,20,10,5,2.5,2,1],center:[537635,152640],zoom:3})});this.printState="";this.$timeout_=t;this.print_=e(d.PRINT_URL_);this.printUtils_=r;var n=r.createPrintMaskPostcompose(function(){return d.PRINT_PAPER_SIZE_},function(t){var e=t.size;var n=t.viewState.resolution;return e!==undefined&&n!==undefined?r.getOptimalScale(e,n,d.PRINT_PAPER_SIZE_,d.PRINT_SCALES_):d.PRINT_SCALES_[0]});this.map.on("postcompose",n)};d.MainController.$inject=["$timeout","ngeoCreatePrint","ngeoPrintUtils"];d.MainController.prototype.print=function(){var t=this.map;var e=t.getSize();var r=t.getView().getResolution();var n=e!==undefined&&r!==undefined?this.printUtils_.getOptimalScale(e,r,d.PRINT_PAPER_SIZE_,d.PRINT_SCALES_):d.PRINT_SCALES_[0];var a=d.PRINT_DPI_;var o=d.PRINT_FORMAT_;var i=d.PRINT_LAYOUT_;this.printState="Printing...";var s=this.print_.createSpec(t,n,a,i,o,{datasource:[],debug:0,comments:"My comments",title:"My print"});this.print_.createReport(s).then(this.handleCreateReportSuccess_.bind(this),this.handleCreateReportError_.bind(this))};d.MainController.prototype.handleCreateReportSuccess_=function(t){var e=t.data;this.getStatus_(e.ref)};d.MainController.prototype.getStatus_=function(t){this.print_.getStatus(t).then(this.handleGetStatusSuccess_.bind(this,t),this.handleGetStatusError_.bind(this))};d.MainController.prototype.handleCreateReportError_=function(t){this.printState="Print error"};d.MainController.prototype.handleGetStatusSuccess_=function(t,e){var r=e.data;var n=r.done;if(n){this.printState="";window.location.href=this.print_.getReportUrl(t)}else{var a=this;this.$timeout_(function(){a.getStatus_(t)},1e3,false)}};d.MainController.prototype.handleGetStatusError_=function(t){this.printState="Print error"};P.controller("MainController",d.MainController);e["default"]=d},382:function(t,e,r){r(53);r(55);t.exports=r(381)},492:function(t,e){}});
//# sourceMappingURL=mapfishprint.26acc0.js.map