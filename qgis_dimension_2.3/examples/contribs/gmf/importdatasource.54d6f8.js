!function(e){function t(t){for(var o,l,s=t[0],i=t[1],u=t[2],m=0,p=[];m<s.length;m++)l=s[m],n[l]&&p.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},n={18:0},r=[];function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;r.push([435,0]),a()}({434:function(e,t,a){"use strict";a.r(t),function(e){a(564),a(255);var o=a(162),n=a(316),r=a(90),l=a(62),s=a(43),i=a(19),u=a(113),c=a(157),m=a(158),p=a(45),f=a(59),g=a(73),h=a(54),d=a(83);var v={};v.module=angular.module("gmfapp",["gettext",o.a.module.name,n.a.name,r.a.name,l.a.module.name,s.a.name,i.a.module.name,u.a.module.name,c.a.name,m.a.name]),v.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),v.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),v.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/"),v.module.value("gmfExternalOGCServers",[{name:"Swiss Topo WMS",type:"WMS",url:"https://wms.geo.admin.ch/?lang=fr"},{name:"ASIT VD",type:"WMTS",url:"https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml"},{name:"Swiss Topo WMTS",type:"WMTS",url:"https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr"}]),v.module.constant("defaultTheme","Filters"),v.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),v.MainController=function(){function t(a,o,n,r,l){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope_=a,n.loadThemes(),this.gmfTreeManager=r,this.map=new f.a({layers:[new h.a({source:new d.a})],view:new g.a({projection:p.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),o.setDatasourceMap(this.map),n.getThemesObject().then(function(e){if(e)for(var t=0,a=e.length;t<a;t++)if(175===e[t].id){s.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.queryActive=!0,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources"],t}(),v.module.controller("MainController",v.MainController),t.default=v}.call(this,a(24))},435:function(e,t,a){a(61),a(60),e.exports=a(434)},564:function(e,t){}});
//# sourceMappingURL=importdatasource.54d6f8.js.map