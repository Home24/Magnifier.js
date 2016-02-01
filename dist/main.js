!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Magnifier=t():e.Magnifier=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){var n=o(1),a=function(e){"use strict";var t=e||{},o=null,a={x:0,y:0,w:0,h:0,lensW:0,lensH:0,lensBgX:0,lensBgY:0,largeW:0,largeH:0,largeL:0,largeT:0,zoom:2,zoomMin:1.1,zoomMax:5,mode:"outside",largeWrapperId:void 0!==t.largeWrapper?t.largeWrapper.id||null:null,status:0,zoomAttached:!1,zoomable:void 0!==t.zoomable?t.zoomable:!1,onthumbenter:void 0!==t.onthumbenter?t.onthumbenter:null,onthumbmove:void 0!==t.onthumbmove?t.onthumbmove:null,onthumbleave:void 0!==t.onthumbleave?t.onthumbleave:null,onzoom:void 0!==t.onzoom?t.onzoom:null},l={t:0,l:0,x:0,y:0},r=0,s=0,i="",m=null,u=null,d=void 0!==t.zoom?t.zoom:a.zoom,h=void 0!==t.zoomMin?t.zoomMin:a.zoomMin,g=void 0!==t.zoomMax?t.zoomMax:a.zoomMax,c=t.mode||a.mode,p={},f=!1,v=0,b=function(e){var t=[],o=null,n=0,a="",l=0,r=0;if(document.getElementsByClassName)t=document.getElementsByClassName(e);else for(o=document.getElementsByTagName("*"),n=o.length,a=new RegExp("(^|\\s)"+e+"(\\s|$)"),r;n>l;l+=1)a.test(o[l].className)&&(t[r]=o[l],r+=1);return t},z=function(e){var t="",o=e.charAt(0),n=null;if(("#"===o||"."===o)&&(t=e.substr(1,e.length)),""!==t)switch(o){case"#":n=document.getElementById(t);break;case".":n=b(t)}return n},x=function(e,t){var o=document.createElement("div");o.id=t+"-lens",o.className="magnifier-loader",e.parentNode.appendChild(o)},y=function(){m.style.left=l.l+"px",m.style.top=l.t+"px",m.style.width=a.lensW+"px",m.style.height=a.lensH+"px",m.style.backgroundPosition="-"+a.lensBgX+"px -"+a.lensBgY+"px",u.style.left="-"+a.largeL+"px",u.style.top="-"+a.largeT+"px",u.style.width=a.largeW+"px",u.style.height=a.largeH+"px"},M=function(e,t,o,n){var a=z("#"+e+"-lens"),l=null;1===p[e].status?(l=document.createElement("div"),l.className="magnifier-loader-text",a.className="magnifier-loader hidden",l.appendChild(document.createTextNode("Loading...")),a.appendChild(l)):2===p[e].status&&(a.className="magnifier-lens hidden",a.removeChild(a.childNodes[0]),a.style.background="url("+t.src+") no-repeat 0 0 scroll",o.id=e+"-large",o.style.width=p[e].largeW+"px",o.style.height=p[e].largeH+"px",o.className="magnifier-large hidden","inside"===p[e].mode?a.appendChild(o):n.appendChild(o)),a.style.width=p[e].lensW+"px",a.style.height=p[e].lensH+"px"},W=function(){var e,t,o=l.x-a.x,n=l.y-a.y;f=!(0>o||0>n||o>a.w||n>a.h),t=o-a.lensW/2,e=n-a.lensH/2,"inside"!==a.mode&&(o<a.lensW/2&&(t=0),n<a.lensH/2&&(e=0),o-a.w+a.lensW/2>0&&(t=a.w-(a.lensW+2)),n-a.h+a.lensH/2>0&&(e=a.h-(a.lensH+2))),l.l=Math.round(t),l.t=Math.round(e),a.lensBgX=l.l+1,a.lensBgY=l.t+1,"inside"===a.mode?(a.largeL=Math.round(o*(a.zoom-a.lensW/a.w)),a.largeT=Math.round(n*(a.zoom-a.lensH/a.h))):(a.largeL=Math.round(a.lensBgX*a.zoom*(a.largeWrapperW/a.w)),a.largeT=Math.round(a.lensBgY*a.zoom*(a.largeWrapperH/a.h)))},w=function(e){var t=e.wheelDelta>0||e.detail<0?.1:-.1,n=a.onzoom,r=1,s=0,i=0;e.preventDefault&&e.preventDefault(),e.returnValue=!1,a.zoom=Math.round(10*(a.zoom+t))/10,a.zoom>=a.zoomMax?a.zoom=a.zoomMax:a.zoom>=a.zoomMin?(a.lensW=Math.round(a.w/a.zoom),a.lensH=Math.round(a.h/a.zoom),"inside"===a.mode?(s=a.w,i=a.h):(s=a.largeWrapperW,i=a.largeWrapperH,r=a.largeWrapperW/a.w),a.largeW=Math.round(a.zoom*s),a.largeH=Math.round(a.zoom*i),W(),y(),null!==n&&n({thumb:o,lens:m,large:u,x:l.x,y:l.y,zoom:Math.round(a.zoom*r*10)/10,w:a.lensW,h:a.lensH})):a.zoom=a.zoomMin},N=function(){a=p[i],m=z("#"+i+"-lens"),2===a.status?(m.className="magnifier-lens",a.zoomAttached===!1&&(void 0!==a.zoomable&&a.zoomable===!0&&(n.attach("mousewheel",m,w),window.addEventListener&&m.addEventListener("DOMMouseScroll",function(e){w(e)})),a.zoomAttached=!0),u=z("#"+i+"-large"),u.className="magnifier-large"):1===a.status&&(m.className="magnifier-loader")},H=function(){if(a.status>0){var e=a.onthumbleave;null!==e&&e({thumb:o,lens:m,large:u,x:l.x,y:l.y}),-1===m.className.indexOf("hidden")&&(m.className+=" hidden",o.className=a.thumbCssClass,null!==u&&(u.className+=" hidden"))}},B=function(){if(s!==a.status&&N(),a.status>0){o.className=a.thumbCssClass+" opaque",1===a.status?m.className="magnifier-loader":2===a.status&&(m.className="magnifier-lens",u.className="magnifier-large",u.style.left="-"+a.largeL+"px",u.style.top="-"+a.largeT+"px"),m.style.left=l.l+"px",m.style.top=l.t+"px",m.style.backgroundPosition="-"+a.lensBgX+"px -"+a.lensBgY+"px";var e=a.onthumbmove;null!==e&&e({thumb:o,lens:m,large:u,x:l.x,y:l.y})}s=a.status},E=function(e,t){var o=e.getBoundingClientRect(),n=0,a=0;t.x=o.left,t.y=o.top,t.w=Math.round(o.right-t.x),t.h=Math.round(o.bottom-t.y),t.lensW=Math.round(t.w/t.zoom),t.lensH=Math.round(t.h/t.zoom),"inside"===t.mode?(n=t.w,a=t.h):(n=t.largeWrapperW,a=t.largeWrapperH),t.largeW=Math.round(t.zoom*n),t.largeH=Math.round(t.zoom*a)};this.attach=function(e){if(void 0===e.thumb)throw{name:"Magnifier error",message:"Please set thumbnail",toString:function(){return this.name+": "+this.message}};var t=z(e.thumb),o=0;if(void 0!==t.length)for(o;o<t.length;o+=1)e.thumb=t[o],this.set(e);else e.thumb=t,this.set(e)},this.setThumb=function(e){o=e},this.set=function(e){if(void 0!==p[e.thumb.id])return o=e.thumb,!1;var t=new Image,s=new Image,f=e.thumb,b=f.id,y=null,w=null,C=z("#"+e.largeWrapper)||z("#"+f.getAttribute("data-large-img-wrapper"))||z("#"+a.largeWrapperId),A=e.zoom||f.getAttribute("data-zoom")||d,L=e.zoomMin||f.getAttribute("data-zoom-min")||h,T=e.zoomMax||f.getAttribute("data-zoom-max")||g,D=e.mode||f.getAttribute("data-mode")||c,X=void 0!==e.onthumbenter?e.onthumbenter:a.onthumbenter,Y=void 0!==e.onthumbleave?e.onthumbleave:a.onthumbleave,I=void 0!==e.onthumbmove?e.onthumbmove:a.onthumbmove,P=void 0!==e.onzoom?e.onzoom:a.onzoom;if(w=void 0===e.large?e.thumb.getAttribute("data-large-img-url")||e.thumb.src:e.large,null===C&&"inside"!==D)throw{name:"Magnifier error",message:"Please specify large image wrapper DOM element",toString:function(){return this.name+": "+this.message}};void 0!==e.zoomable?y=e.zoomable:f.getAttribute("data-zoomable")?y="true"===f.getAttribute("data-zoomable"):void 0!==a.zoomable&&(y=a.zoomable),""===f.id&&(b=f.id="magnifier-item-"+r,r+=1),x(f,b),p[b]={zoom:A,zoomMin:L,zoomMax:T,mode:D,zoomable:y,thumbCssClass:f.className,zoomAttached:!1,status:0,largeUrl:w,largeWrapperId:"outside"===D?C.id:null,largeWrapperW:"outside"===D?C.offsetWidth:null,largeWrapperH:"outside"===D?C.offsetHeight:null,onzoom:P,onthumbenter:X,onthumbleave:Y,onthumbmove:I},n.attach("mouseover",f,function(e,t){0!==a.status&&H(),i=t.id,o=t,N(t),E(o,a),l.x=e.clientX,l.y=e.clientY,W(),B();var n=a.onthumbenter;null!==n&&n({thumb:o,lens:m,large:u,x:l.x,y:l.y})},!1),n.attach("mousemove",f,function(){v=1}),n.attach("load",t,function(){p[b].status=1,E(f,p[b]),M(b),n.attach("load",s,function(){p[b].status=2,M(b,f,s,C)}),s.src=p[b].largeUrl}),t.src=f.src},n.attach("mousemove",document,function(e){l.x=e.clientX,l.y=e.clientY,W(),f===!0?B():(0!==v&&H(),v=0)},!1),n.attach("scroll",window,function(){null!==o&&E(o,a)})};e.exports=a},function(e,t){var o=function(){"use strict";this.attach=function(e,t,n,a){var l="",r=void 0===a?!0:a,s=null;return void 0===window.addEventListener?(l="on"+e,s=function(e,o){return t.attachEvent(e,o),o}):(l=e,s=function(e,o,n){return t.addEventListener(e,o,n),o}),s.apply(t,[l,function(e){var t=e||o,a=t.srcElement||t.target;n(t,a)},r])},this.detach=function(e,t,o,n){var a="",l=void 0===n?!0:n;void 0===window.removeEventListener?(a="on"+e,t.detachEvent(a,o)):(a=e,t.removeEventListener(a,o,l))},this.stop=function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},this.prevent=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}};e.exports=o}])});