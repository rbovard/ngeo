(function(e){function t(t){var o=t[0];var u=t[1];var n=t[2];var s,l,c=0,f=[];for(;c<o.length;c++){l=o[c];if(i[l]){f.push(i[l][0])}i[l]=0}for(s in u){if(Object.prototype.hasOwnProperty.call(u,s)){e[s]=u[s]}}if(p)p(t);while(f.length){f.shift()()}a.push.apply(a,n||[]);return r()}function r(){var e;for(var t=0;t<a.length;t++){var r=a[t];var o=true;for(var n=1;n<r.length;n++){var s=r[n];if(i[s]!==0)o=false}if(o){a.splice(t--,1);e=u(u.s=r[0])}}return e}var o={};var i={9:0};var a=[];function u(t){if(o[t]){return o[t].exports}var r=o[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,u);r.l=true;return r.exports}u.m=e;u.c=o;u.d=function(e,t,r){if(!u.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};u.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};u.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};u.d(t,"a",t);return t};u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};u.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=n.push.bind(n);n.push=t;n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var p=s;a.push([359,0]);return r()})({358:function(e,t,r){"use strict";r.r(t);(function(e){var o=r(480);var i=r.n(o);var a=r(300);var u=r.n(a);var n=r(201);var s={};s.module=angular.module("app",["gettext",n["a"].module.name]);s.MainController=function(t,r){this.sce_=t;this.createPopup_=r;e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})};s.MainController.$inject=["$sce","ngeoCreatePopup"];s.MainController.prototype.simplePopup=function(){var e=this.createPopup_();e.setAutoDestroy(true);e.setTitle("Simple popup");var t=this.sce_.trustAsHtml("This is a simple 400x300 px popup.");e.setContent(t);e.setWidth("400px");e.setHeight("300px");e.setOpen(true)};s.MainController.prototype.iframePopup=function(){var e=this.createPopup_();e.setAutoDestroy(true);e.addClass("popup-with-iframe");e.setTitle("Iframe popup");e.setUrl("http://geomapfish.org/");e.setSize("400px","300px");e.setOpen(true)};s.MainController.prototype.heavyPopup=function(){var e=this.createPopup_();e.setAutoDestroy(true);e.setTitle("This is a popup with lots and lots of content and a very long title");var t=this.sce_.trustAsHtml("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget"+"quam at ex euismod bibendum et eget enim. Nulla sodales tortor ac"+"sagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc id"+"magna id risus malesuada elementum eget id purus. Curabitur vel augue"+"blandit, faucibus nulla quis, consequat tellus. Phasellus commodo,"+"tellus et vulputate ultricies, nulla libero ornare arcu, quis"+"fermentum sem diam quis tellus. Aliquam ut sapien tristique, lacinia"+"ante et, lacinia arcu. Quisque sagittis eros at quam blandit"+"gravida. Nulla sit amet enim semper, efficitur eros sit amet,"+"porttitor libero. Fusce quis tellus est. Quisque ornare, ex eget"+"luctus pharetra, nisl leo lobortis purus, sed tristique neque leo eget"+"odio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risus"+"convallis. Donec ullamcorper sollicitudin maximus. Quisque bibendum"+"elit sit amet ultrices ornare. Donec aliquam felis id urna ultrices"+"scelerisque.");e.setContent(t);e.setOpen(true)};s.MainController.prototype.openPopupWithContent=function(){var e=this.createPopup_();var t=this.sce_.trustAsHtml("This popup was opened using the <code>open</code> method.");e.open({autoDestroy:true,content:t,height:"200px",title:'Opened with "open"',width:"300px"})};s.MainController.prototype.openPopupWithUrl=function(){var e=this.createPopup_();e.open({autoDestroy:true,cls:"popup-with-iframe",height:"300px",title:'Opened with "open" and "iframe"',url:"http://geomapfish.org/",width:"400px"})};s.module.controller("MainController",s.MainController);t["default"]=s}).call(this,r(51))},359:function(e,t,r){r(53);r(55);e.exports=r(358)},480:function(e,t){}});
//# sourceMappingURL=popupservice.079291.js.map