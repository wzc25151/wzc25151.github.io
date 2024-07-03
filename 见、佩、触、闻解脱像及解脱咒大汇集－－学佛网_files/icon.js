/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

function AllotIconMain()
{
    var version = "Icon version: TelefonicaSMB 15.1.15.19";
	
	// Redmine #37487 (CP040): This variable is used to determine the screen percentege that icon size takes up
	var iconSizeScreenPercentage = 7;
	var iconMinSizePx = 25;
	var iconMaxSizePx = 40;
	
	// Redmine #37736: This variable is used to determine if the icon must be removed when MutationObserver detects an attack
	var destroyIfMutationDetected = true;
	
	// Redmine #38369: This variable is used to determine if "Explanation Text" module must be shown
	var showExplanationTextModule = true;
	
	// Redmine #38369: This variable is used to determine if "Config Button" module must be shown
	var showConfigButtonModule = true;
	
	// #38822: This variable is used to determine if "Download URL" module must be shown
	var showDownloadURL = true;
	
    'use strict';
	
	var dom = {};
	dom.jquery = jQuery.noConflict(true);
	
	var obs;
	var launchAuditRequest = true;

    ///////////////////
    // Configuration //
    ///////////////////
    var AllotSettingsURL = 'http://www.conexionseguraempresas.movistar.es' ;

	///////////
    // Texts //
    ///////////
    var overlayText = dom.jquery.parseJSON(
        '{'                                                         +
        '"header"                 : "Conexión Segura Empresas",'            		+
	
		'"explanationTextHeader"  : "DEGUSTACIÓN",'							+
		'"explanationTextBody"    : "",'	+
		
		'"contactText"			  : "Cualquier consulta, contacte con el Administrador de su empresa",' +
	
		'"moreInfoText"			  : "Consulte más información y contrate el servicio: www.movistar.es/empresas/aplicacionesdigitales/conexion-segura-empresas",' +
	
        '"settingsButton"         : "Accede a la configuración del servicio",'     	+
		
		'"downloadURLText"		  : "Download your Unified Security app now:",'				+
		'"W"					  : "Filtrado Web",'		+
		'"V"					  : "Antivirus",'		+
		'"A"					  : "AdsFree",'		+
		'"P"					  : "Antiphishing",'		+
		'"L"					  : "Wolf"'		+
        '}'
    );
	
	var IconAllotStylesheetId = generateRandomID();
	var IconAllotContainerId = generateRandomID();
	var IconAllotWholeId = generateRandomID();
	var IconAllotOrangeId = generateRandomID();
	var iconbarId = generateRandomID();
	var iconbarbgId = generateRandomID();
	var iconbarimageId = generateRandomID();
	var IconAllotPanelId = generateRandomID();
	var IconAllotPanelLinksId = generateRandomID();
	var IconAllotPanelLeftClass = generateRandomID();
	var IconAllotPanelLeftId = generateRandomID();
	var IconAllotPopularId = generateRandomID();
	var iconbariconId = generateRandomID();
	var IconAllotTabId = generateRandomID();
	var IconAllotTabId2 = generateRandomID();
	var IconAllotTabId3 = generateRandomID();	
	var IconAllotPanel2Id = generateRandomID();
	var explanationTextId = generateRandomID();
	var explanationTextParentId = generateRandomID();
	var IconAllotButtonBarId = generateRandomID();
	var IconAllotStatsId = generateRandomID();
	var iconCBimage = generateRandomID();
	var iconChevronImage = generateRandomID();
	var downloadURLId = generateRandomID();
	var downloadURLLinkId = generateRandomID();
	var IconAllotServicesStatusId = generateRandomID();
	var contactId = generateRandomID();
	var moreInfoId = generateRandomID();
	var moreInfoTabId = generateRandomID();
	
	//////////////////////////////////////////
    // Checks if vertical scroll is present //
    //////////////////////////////////////////
	function verticalScrollPresent() {
		return (getViewportWidth().width !== document.documentElement.clientWidth);
	}
	
	//////////////////////////
    // Get the scroll width //
    //////////////////////////
	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
		document.body.appendChild(outer);
		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = "scroll";
		// add inner div
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);        
		var widthWithScroll = inner.offsetWidth;
		// remove divs
		outer.parentNode.removeChild(outer);
		return widthNoScroll - widthWithScroll;
	}
	
	//////////////////////////////////////////
    // Get the width for the icon container //
    //////////////////////////////////////////
	function getIconContainerWidth()
	{
		var iconContainerWidth = getViewportWidth().width;
		
		if(verticalScrollPresent()) {
			iconContainerWidth = iconContainerWidth - getScrollbarWidth();
		}
		
		containerElem = document.getElementById(IconAllotContainerId);
		if(containerElem) {
			var bordT = dom.jquery("#" + IconAllotContainerId).outerWidth() - dom.jquery("#" + IconAllotContainerId).innerWidth();
			var paddT = dom.jquery("#" + IconAllotContainerId).innerWidth() - dom.jquery("#" + IconAllotContainerId).width();
			var margT = dom.jquery("#" + IconAllotContainerId).outerWidth(true) - dom.jquery("#" + IconAllotContainerId).outerWidth();
	
			iconContainerWidth = iconContainerWidth - bordT - paddT - margT;
	
		}
		// minus default values
		else {
			iconContainerWidth = iconContainerWidth - 20; // 10 (padding-right) + 10 (padding-left) +  0 (border) + 0 (margin)
		}
		
		return iconContainerWidth;
	}
	
	///////////////////////
    // Generation of IDs //
    ///////////////////////
	function generateRandomID() {
		var resID = "";
		var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		// Variable IDlength = Random number between 3 and 15 [Math.floor(Math.random()*(max-min+1)+min)]
		var IDlength = Math.floor(Math.random() * 13) + 3; 
		for(var i = 0; i < IDlength; i++ )
			resID += charList.charAt(Math.floor(Math.random() * charList.length));
		return resID;
	}
	
    /////////////////////////////////
    // Detection of mobile devices //
    /////////////////////////////////
    window.mobilecheck = function() {
		return 'ontouchstart' in window || navigator.maxTouchPoints; 
		// 'ontouchstart' in window  works on most browsers
		// navigator.maxTouchPoints works on IE10/11 and Surface
	};

	////////////////////////////////////////////////
    // Check if overalay icon data panel is shown //
    ////////////////////////////////////////////////
    function isOpen() {
		return dom.jquery("div#" + IconAllotPanelId).is(':visible');
    }

    /////////////////////////////////
    // Draggable without jQuery UI //
    /////////////////////////////////
    (function(jq) {
		jq.fn.drags = function(opt) {
			opt = jq.extend({handle:"",cursor:"pointer"}, opt);

            if(opt.handle === "") {
				var $el = this;
            } else {
				var $el = this.find(opt.handle);
            }

			if(window.mobilecheck()) {
				
				return $el.css('cursor', opt.cursor).on("touchstart", function(event) {
				
					// Disconnecting MutationObserver object to avoid detecting user clicks on the icon/bar
					if((obs) && (event) && (event.originalEvent)) {
						if (event.originalEvent.hasOwnProperty("isTrusted")) {
							if (event.originalEvent.isTrusted)
								obs.disconnect();
						} else
							obs.disconnect();
					}
				
					var e = event.originalEvent;
					if(opt.handle === "") {
						var $drag = jq(this).addClass('draggable');
					} else {
						var $drag = jq(this).addClass('active-handle').parent().addClass('draggable');
            	    }
            	    var z_idx = $drag.css('z-index'),
                    drg_h = $drag.outerHeight(),
                    drg_w = $drag.outerWidth(),
                    pos_y = $drag.offset().top + drg_h - e.targetTouches[0].pageY,
                    pos_x = $drag.offset().left + drg_w - e.targetTouches[0].pageX;

					jq(this).on("touchmove", function(event) {
						var e = event.originalEvent;
						e.preventDefault();
						// Redmine 37360: Avoid undesirable effect in iOS >= 9 when moving the overlay icon
						// Redmine: 44711: Icon is movable completely out of screen with the mobile in landscape mode.
						var curr_pos = e.targetTouches[0].pageX + pos_x - drg_w;
						if(curr_pos > 0 && curr_pos < getIconContainerWidth())
							jq('.draggable').css('left', curr_pos + 'px');
            	    });
					
				}).on("touchend", function() {
            	    if(opt.handle === "") {
						jq(this).removeClass('draggable');
            	    } else {
						jq(this).removeClass('active-handle').parent().removeClass('draggable');
            	    }
				});
			} else {
				
				return $el.css('cursor', opt.cursor).on("mousedown", function(e) {

					// Disconnecting MutationObserver object to avoid detecting user clicks on the icon/bar
					if((obs) && (e) && (e.originalEvent)) {
						if (e.originalEvent.hasOwnProperty("isTrusted")) {
							if (e.originalEvent.isTrusted)
								obs.disconnect();
						} else
							obs.disconnect();
					}
			
					if(opt.handle === "") {
						var $drag = jq(this).addClass('draggable');
					} else {
						var $drag = jq(this).addClass('active-handle').parent().addClass('draggable');
					}
            	    
					var z_idx = $drag.css('z-index'),
					drg_h = $drag.outerHeight(),
					drg_w = $drag.outerWidth(),
					pos_y = $drag.offset().top + drg_h - e.pageY,
					pos_x = $drag.offset().left + drg_w - e.pageX;

					$drag.css('z-index', 1000).parents().on("mousemove", function(e) {
						var curr_pos = e.pageX + pos_x - drg_w;
						if(curr_pos > 0 && curr_pos < getIconContainerWidth())
							jq('.draggable').css('left', curr_pos + 'px');
					});
				
					e.preventDefault(); // disable selection
					
				}).on("mouseup", function() {
            	    if(opt.handle === "") {
						jq(this).removeClass('draggable');
            	    } else {
						jq(this).removeClass('active-handle').parent().removeClass('draggable');
            	    }
				});
			}
		}
    })(dom.jquery);

	///////////////////////////////////////
    // Click event on overlay icon/panel //
    ///////////////////////////////////////
    function onTabOpenClick(p_event) {
		// Disconnecting MutationObserver object to avoid detecting user clicks on the icon/bar
		if((obs) && (p_event) && (p_event.originalEvent)) {
			if (p_event.originalEvent.hasOwnProperty("isTrusted")) {
				if (p_event.originalEvent.isTrusted)
					obs.disconnect();
			} else
				obs.disconnect();
		}
		
		var __isOpen = isOpen();
        var __panel1  = dom.jquery("div#" + IconAllotPanelId);
		var __panel2  = dom.jquery("div#" + IconAllotPanel2Id);

        if (p_event) {
            p_event.stopPropagation();
        }

		if (!__isOpen) {
            var newMargin = dom.jquery("#" + IconAllotPanelId).height() + dom.jquery("#" + IconAllotPanel2Id).height() + 15;
            dom.jquery("#" + IconAllotContainerId).css('margin-bottom', newMargin);
        }
        else if (dom.jquery("#" + IconAllotContainerId).css('position') == 'relative') {
            dom.jquery("#" + IconAllotContainerId).css('margin-bottom', "auto");
        }

        __panel1.slideToggle('slow');
		__panel2.slideToggle('slow');

		if(__isOpen) {
			setTimeout(function(){
				dom.jquery("#" + IconAllotWholeId).show();
			},700);
			
			// Redmine 37262: Make icon content scrollable just when it takes up all the screen
			dom.jquery("div#" + IconAllotContainerId).css("height", "5px");
			dom.jquery("div#" + IconAllotContainerId).css("overflow", "visible");
		} else {
			dom.jquery("#" + IconAllotWholeId).hide();
			
			// Redmine 37262: Make icon content scrollable just when it takes up all the screen (and just for mobile devices)
			dom.jquery("div#" + IconAllotContainerId).css("height", newMargin - 15);
			if(window.mobilecheck() && ((navigator.userAgent.match(/iPad/i) == null) || (window.orientation == 0)) &&
			  (parseInt(dom.jquery("div#" + IconAllotContainerId).css("height")) >= getViewportWidth().height))
			{
				dom.jquery("div#" + IconAllotContainerId).css("height", "100%");
				//dom.jquery("div#" + IconAllotContainerId).css("overflow", "scroll");
			} else
				dom.jquery("div#" + IconAllotContainerId).css("overflow", "visible");
		}

		dom.jquery("#" + iconbarId).removeClass('draggable');
    }

	//////////////////////////////////////////////
    // Click event on whatever area of document //
    //////////////////////////////////////////////
    function onDocumentClick(p_event) {
		if (isOpen() && (p_event.which == 1)) {
			onTabOpenClick();
		} else {
			dom.jquery("#" + iconbarId).removeClass('draggable');
		}
    }

	/////////////////////////////////////////////////
    // Mouse up event on whatever area of document //
    /////////////////////////////////////////////////
    function onDocumentMouseUp(p_event) {
		dom.jquery("#" + iconbarId).removeClass('draggable');
    }
	
	////////////////////////////////////////////////////////////////////////////
    // Get the value of an URL parameter of the "OPTSmartBannerScript" script //
    ////////////////////////////////////////////////////////////////////////////
    function getURLVarFromScript(name){
		var regexp = new RegExp("[?|&]" + name + "(?:=([^&]*))?", "i");
		var res = regexp.exec(decodeURIComponent(dom.jquery("#OPTSmartBannerScript").attr("src")));
		if(res === null)
			return undefined;
		return res[1] || "";
    }

	///////////////////////////////////
    // Get viewport width and height //
    ///////////////////////////////////
    function getViewportWidth() {
    	var e = document.documentElement || document.body;
		var a = 'client';
		//console.log('window[innerWidth]' + window["innerWidth"] + '**e.tagName: ' + e.tagName + '**document.documentElement[clientWidth]: ' + document.documentElement["clientWidth"] + '**document.body[clientWidth]: ' + document.body["clientWidth"] + '**width : e[ ' + a + 'Width ]');
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }
	    
    dom.jquery(document).ready(
		function() {
			
			// Redmine #36691: Use the variable "version" to avoid minify tools remove it
			// Redmine #38451: Move console.log to "ready" function
			console.log(version);

			// Avoid several icons when the host webpage is composed of several frames
			for(var i=0; i<window.parent.frames.length; ++i) {
				try {
					if(window.parent.frames[i].document.getElementById("OPTSmartBannerScript")){
						if(window.parent != window)                                   
							return;
                        else
                            if( document.getElementById(IconAllotContainerId) ) return;   
					}
				} catch (ex) { }
			}
			
			dom.jquery("head").append(
				'<style id="' + IconAllotStylesheetId + '" type="text/css">' +
				'html{box-sizing:border-box;-moz-box-sizing:border-box;}' +
				'div#' + IconAllotContainerId + ' {' +
				'    display: none;' +
				'    height: 5px;' +
				//Redmine: 42689
				'    box-sizing:content-box;' +
				'    padding-left: 10px !important;' +
				'    padding-right: 10px !important;' +
				'    margin: 0px auto;' +
				'    overflow:visible;' +
				'    position: absolute;' +
				'    top: 0px !important;' +
				'    width: ' + getIconContainerWidth() + 'px;' + 
				'    z-index: 2147483647 !important;' +
				'    font-size: 13px !important;' +
				'}' +
				' div#' + IconAllotContainerId + ' * {' +
				'    background: none;' +
				'    border: none !important;' +
				'    float: none !important;' +
				'    font-size: 90%;' +
				'    font-family: Arial, Helvetica, sans-serif !important;' +
				'    font-weight: normal !important;' +
				'    left:auto;' +
				'    line-height: 2ex !important;' +
				'    letter-spacing:0;' +
				'    margin: 0 !important;' +
				'    outline:none !important;' +
				'    padding: 0 !important;' +
				'    text-decoration: none !important;' +
				'	 text-transform: none !important;' + 
				'    text-shadow:none !important;' +
				'    vertical-align:middle !important;' +
				'    white-space:nowrap !important;' +
				'    z-index: 2147483647 !important;' +
				'    zoom: 1;' +
				'}' +
				' div#' + IconAllotContainerId + ' td {' +
				'    text-align: left !important;' +
				'}' +
				' div#' + IconAllotContainerId  + ' {' +
				'    bottom       : 0;' +
				'    clear        : both !important;' +
				'    margin-bottom: 10px !important;' +
				//inigo'    margin-right : 13px !important;' +
				//		    '    position     : absolute !important;' +
				//'    width        : 100% !important;' +
				'}' +
				' div#' + IconAllotButtonBarId + ' {' +
				'    bottom       : 0;' +
				'    clear        : both !important;' +
				'    margin-bottom: 0px !important;' +
				'    margin-right : 13px !important;' +
				'    width        : 96% !important;' +
				'}' +
				' div#' + IconAllotContainerId + '  button {' +
				'    cursor               : pointer' +
				'    display              : inline !important;' +
				'    margin               : 10px 2px !important;' +
				'    padding              : 5px 10px !important;' +
				'}' +
				' div#' + IconAllotContainerId + '  button img {' +
				'    margin               : 0 5px 0 0 !important;' +
				'}' +
				' div#' + IconAllotContainerId + '  button span {' +
				'    font-size            : 1.8em;' +
				'    font-weight          : bold !important;' +
				'    line-height          : 1em !important;' +
				'}' +
				' div#' + IconAllotPanelId + ', div#' + IconAllotPanel2Id + ' {' +
				'    background-repeat: repeat-x !important;' +
				'    background-position: 0 100% !important;' +
				'    background-color: #ffffff !important;' +
				'    -moz-box-sizing: content-box;' +
				'    -moz-box-shadow:    0 5px 5px 5px #ccc;' +
				'    -ms-box-shadow:     0 5px 5px 5px #ccc;' +
				'    -o-box-shadow:      0 5px 5px 5px #ccc;' +
				'    -webkit-box-shadow: 0 5px 5px 5px #ccc;' +
				'    text-shadow: 0 1px 0 rgba(255, 255, 255, .8);' +
				'    -moz-border-radius-bottomright: 5px;' +
				'    -moz-border-radius-bottomleft: 5px;' +
				'    -ms-border-radius-bottomright: 5px;' +
				'    -ms-border-radius-bottomleft: 5px;' +
				'    -o-border-radius-bottomright: 5px;' +
				'    -o-border-radius-bottomleft: 5px;' +
				'    -webkit-border-radius-bottomright: 5px;' +
				'    -webkit-border-radius-bottomleft: 5px;' +
				'    color: #999999;' +
				'    display: none;' +
				'    overflow: hidden !important;' +
				'    position: relative !important;' +
				'    white-space: nowrap !important;' +
				'    width: 100%;' +
				'    height: auto;' +
				'}' +
				' div#' + IconAllotWholeId + ', div#' + IconAllotPanel2Id + ' {' +
				'    text-align: left !important;' +
				'}' +
				' div#' + IconAllotPanelId + ', div#' + IconAllotPanel2Id + ' div.' + IconAllotPanelLeftId + ', div#' + IconAllotPanelId + ' {' +
				'    overflow-x:hidden !important;' +
				'    overflow-y:auto !important;' +
				'    position: absolute;' +
				'    top: 0px !important;' +
				'    width: 100% !important;' +
				'    white-space:nowrap;' +
				'}' +
				' div#' + IconAllotPanelId + ', div#' + IconAllotPanel2Id + ' .' + IconAllotPanelLeftClass + ' {' +
				'    left: 0 !important;' +
				'}' +
				' div#' + IconAllotContainerId + ' div#' + IconAllotOrangeId + ' {' +
				'    overflow:visible !important;' +
				'    cursor: pointer' +
				'}' +
				' img#' + iconbarimageId + ', img#' + iconbariconId + ', img#' + iconbarbgId + ' {' +
				'    box-shadow : none !important;' +
				'    display    : inline !important;' +
				'}' +
				' div#' + IconAllotContainerId + ' span {' +
				'	white-space: -moz-pre-wrap !important;' +  /* Mozilla, since 1999 */
				'	white-space: -pre-wrap !important;' +      /* Opera 4-6 */
				'	white-space: -o-pre-wrap !important;' +    /* Opera 7 */
				'	white-space: pre-wrap !important;' +       /* css-3 */
				'	word-wrap: break-word !important;' +       /* Internet Explorer 5.5+ */
				'	white-space: normal !important;' +
				'}' +
				' img#' + iconCBimage + ' {' + 
				'    box-shadow : none !important;' +
				'    display    : inline !important;' +
				'}' +
				' img#' + iconChevronImage + ' {' + 
				'    box-shadow : none !important;' +
				'    display    : inline !important;' +
				'}' +
				' svg { ' +
				'	display		: inline !important;' + 
				'}' + 
				'</style>'
			);
							
			var closeIcon = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
							'<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
							'	<!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->' +
							'	<title>ic_close_24</title>' +
							'	<desc>Created with Sketch.</desc>' +
							'	<defs/>' + 
							'	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
							'		<g id="web_companion" transform="translate(-316.000000, -93.000000)">' +
							'			<g id="Group" transform="translate(10.000000, 81.000000)">' +
							'				<g id="close-r:10" transform="translate(306.000000, 12.000000)">' +
							'					<g id="ICON-/-CLOSE">' +
							'						<rect id="Rectangle-path" x="0" y="0" width="24" height="24"/>' +
							'						<path d="M3.14644661,3.85355339 L20.1464466,20.8535534 C20.3417088,21.0488155 20.6582912,21.0488155 20.8535534,20.8535534 C21.0488155,20.6582912 21.0488155,20.3417088 20.8535534,20.1464466 L3.85355339,3.14644661 C3.65829124,2.95118446 3.34170876,2.95118446 3.14644661,3.14644661 C2.95118446,3.34170876 2.95118446,3.65829124 3.14644661,3.85355339 Z" id="c33595e8-181e-4076-a9f0-227b8fdd48ef" fill="#00a9e0"/>' +
							'						<path d="M3.85355339,20.8535534 L20.8535534,3.85355339 C21.0488155,3.65829124 21.0488155,3.34170876 20.8535534,3.14644661 C20.6582912,2.95118446 20.3417088,2.95118446 20.1464466,3.14644661 L3.14644661,20.1464466 C2.95118446,20.3417088 2.95118446,20.6582912 3.14644661,20.8535534 C3.34170876,21.0488155 3.65829124,21.0488155 3.85355339,20.8535534 Z" id="56502c87-b986-44ba-a730-3fc53d646431" fill="#00a9e0"/>' +
							'					</g>' +
							'				</g>' +
							'			</g>' +
							'		</g>' +
							'	</g>' +
							'</svg>';
							
			var configIcon = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
								'<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
								'	<!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->' + 
								'	<title>ic_settings_32</title>' + 
								'	<desc>Created with Sketch.</desc>' + 
								'	<defs/>' + 
								'	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
								'		<g id="web_companion" transform="translate(-20.000000, -287.000000)">' + 
								'			<g id="Group" transform="translate(10.000000, 271.000000)">' + 
								'				<g id="l:10" transform="translate(10.000000, 16.000000)">' + 
								'					<g id="ICON-/-SETTINGS">' + 
								'						<rect id="Rectangle-path" x="0" y="0" width="32" height="32"/>' + 
								'						<path d="M25.0922838,25.7300764 C25.4087752,25.9135711 25.8140128,25.8077373 26.0003621,25.4929183 L29.1770288,20.1262516 C29.3657527,19.8074211 29.2583115,19.3958756 28.9378211,19.2099844 L26.156838,17.5969561 C26.3135826,16.608978 26.3229272,15.6031727 26.1845586,14.6124367 L28.9955465,13.018232 C29.317851,12.8354424 29.4292652,12.4249103 29.2435891,12.10426 L26.1185891,6.70759332 C25.9352812,6.3910328 25.5311287,6.28130771 25.2128999,6.46170387 L22.4241487,8.04257901 C21.6284367,7.40948084 20.7436101,6.89728752 19.7983333,6.52258634 L19.7983333,3.33333333 C19.7983333,2.9651435 19.4998565,2.66666667 19.1316667,2.66666667 L12.8466667,2.66666667 C12.4784768,2.66666667 12.18,2.9651435 12.18,3.33333333 L12.18,6.50897613 C11.248259,6.87422091 10.3745571,7.37305083 9.58638216,7.98977895 L6.85114998,6.4033152 C6.53485808,6.21986253 6.12982362,6.32540673 5.94328365,6.63988772 L2.75995032,12.0065544 C2.57070405,12.3255978 2.67828047,12.7377588 2.99930915,12.9236175 L5.7642473,14.5243712 C5.61879259,15.505883 5.61859908,16.5034848 5.76366676,17.4850394 L3.00388892,19.0537552 C2.68198339,19.2367331 2.5708621,19.6469762 2.75641094,19.9674067 L5.88141094,25.3640733 C6.06445055,25.6801705 6.46777068,25.790116 6.78590426,25.6106391 L9.59733148,24.024556 C10.3844729,24.6394252 11.2566947,25.1368051 12.1866667,25.5011295 L12.1866667,28.6666667 C12.1866667,29.0348565 12.4851435,29.3333333 12.8533333,29.3333333 L19.1383333,29.3333333 C19.5065232,29.3333333 19.805,29.0348565 19.805,28.6666667 L19.805,25.5816277 C20.8259962,25.3588124 21.7892011,24.9233752 22.6314258,24.3033253 L25.0922838,25.7300764 Z M13.52,28 L13.52,25.035 C13.52,24.7492586 13.3379031,24.495292 13.0672749,24.4035941 C11.9795327,24.0350304 10.9724865,23.4614565 10.1006059,22.7138961 C9.8877114,22.5313579 9.5833438,22.501567 9.33909574,22.6393609 L6.70491462,24.1254496 L4.24701409,19.8808192 L6.82944442,18.4129115 C7.07880611,18.271169 7.20955322,17.9858156 7.15407994,17.7043997 C6.93309905,16.583364 6.93309905,15.4299694 7.15407994,14.3089336 C7.20917764,14.029423 7.08057485,13.745789 6.83402418,13.6030491 L4.25044785,12.1072944 L6.75325052,7.88790983 L9.31718335,9.37501813 C9.5626087,9.51736744 9.87124069,9.48878871 10.0863546,9.30379432 C10.9598685,8.55258705 11.9696568,7.97631766 13.0607436,7.60636006 C13.3313023,7.51462099 13.5133333,7.26068885 13.5133333,6.975 L13.5133333,4 L18.465,4 L18.465,6.98666667 C18.465,7.27136307 18.6457885,7.52464335 18.915035,7.61715472 C20.0172453,7.99586705 21.0354078,8.58505217 21.9129661,9.3519823 C22.1262459,9.53837527 22.4340217,9.56964762 22.6804335,9.42996279 L25.2957669,7.94739396 L27.7526578,12.1902808 L25.1227868,13.681768 C24.8748619,13.8223745 24.7437476,14.1050396 24.7965322,14.3851303 C25.009532,15.5153702 24.9984792,16.67644 24.7640013,17.8024201 C24.7054271,18.083698 24.8336474,18.3708621 25.0821789,18.5150156 L27.6870302,20.0258838 L25.1894989,24.2452178 L22.9093829,22.923257 C22.6665204,22.7824507 22.3614728,22.8088711 22.1464359,22.9893365 C21.2636989,23.7301557 20.1894978,24.206305 19.0477743,24.362846 C18.7176678,24.4081067 18.4716667,24.6901384 18.4716667,25.0233333 L18.4716667,28 L13.52,28 Z M21.3219224,15.6533157 C21.1477839,12.9810182 19.0189818,10.8522161 16.3466843,10.6780776 C14.1309295,10.5336895 12.0575363,11.7772317 11.141521,13.7999361 C10.2255057,15.8226405 10.6585424,18.2012611 12.2286406,19.7713594 C13.7987389,21.3414576 16.1773595,21.7744943 18.2000639,20.858479 C20.2227683,19.9424637 21.4663105,17.8690705 21.3219224,15.6533157 Z M17.6500171,19.6438901 C16.1329888,20.3309015 14.3490234,20.006124 13.1714497,18.8285503 C11.993876,17.6509766 11.6690985,15.8670112 12.3561099,14.3499829 C13.0431214,12.8329546 14.5981663,11.9002979 16.2599824,12.008589 C18.2642055,12.1391929 19.8608071,13.7357945 19.991411,15.7400176 C20.0997021,17.4018337 19.1670454,18.9568786 17.6500171,19.6438901 Z" id="Combined-Shape" fill="#00a9e0"/>' + 
								'					</g>' + 
								'				</g>' + 
								'			</g>' + 
								'		</g>' +
								'	</g>' + 
								'</svg>';
								
			var chevronIcon = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
								'<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + 
								'	<!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->' + 
								'	<title>ic_chevron_24</title>' + 
								'	<desc>Created with Sketch.</desc>' + 
								'	<defs/>' +
								'	<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
								'		<g id="ICON-/-CHEVRON-RIGHT">' + 
								'			<g id="Group-2">' +
								'				<rect id="Rectangle-path" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " x="0" y="0" width="24" height="24"/>' +
								'				<polyline id="259e14f8-3d8b-4ae1-b945-69f9c598b490" stroke="#757575" stroke-linecap="round" stroke-linejoin="round" points="7.75 3.5 16.25 12 7.75 20.5"/>' + 
								'			</g>' + 
								'		</g>' + 
								'	</g>' +
								'</svg>';
								
			var onIcon = '<svg style="padding-top: 10px !important;" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 40 44" enable-background="new 0 0 24 24" xml:space="preserve">'+  
							'<image id="image0" width="24" height="24" x="0" y="0"'+
							'xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAs'+
							'Y8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnRJREFUSEutlM9rE0EUx787STZN0iY5WAuimFqjRTxIS6XFe'+
							'hH0quRSD7141JP/iCAe9CReitBL8KwgiJEWQoMH0UqsSa1Y2gomaZImm2TX+U5+UJM01GS/j0eyb9583r6Z2dEsKfTQSiGGRDGOTSOFfTOnYiPCj7P6OKa8M5jzzavYUTqywNO9x4'+
							'hml+HWhqBrOpyaE5o0ypJWtaowLANlq4RIYAEPRh+qsXZ1FEiXv+P+1j0F9ApvI9pbRbOoCj478wIh97lGtC7R+FWKF1exmI7AJ3zwCI960+MYczmHc8k4rFYHqfKGSjjlOq0G+tWv'+
							'yk8shaIYd0+o51aBW8lrGBYjsqV/mvpvmdLy5j5ehz+oZ0V7svsIDmncxMOt92NkkEUmpTq4vj6NE87RxhkZXFyS39U9vJ9cg4jl38EtdJaCZZOTRSbZIp5fhQs6LFMO2uhkki1Sxg'+
							'aE5uj6JoM4mYqdrWbYUde3GMTJJFuY8pQqkztsq0sjW/g1P2qWKava62SSLUL6hLxHKrIqu7DPySRbXPXOomSWZFXZlo1OJtnqQ5v6OImTnjFbP7Tdgx0krqzXr4q7/kUUanlZWbZng'+
							'5NFJtW67GbWLiPoC9py2WUKGcSnP6nnFu1lOIqt/A8eLlhyEftyOZcMsppqFQj7L+B5aAmbuTRqGpPra3lc5xzOJYOsplpL1FQy9xULn+9AH9bhc/hkQu+t55Es1Aow8gaWL72S8IuN'+
							'kbo6FpwJidkvuO2KYDuzjUzlDw6sIiowUENVOf8zxjHmMJdz2uFURwftervzBivZGL6VksjWMioWcARxfiiMucA8bozdVLHuAv4CO/8XitNQYAgAAAAASUVORK5CYII=" />'+
							'</svg>';
							
			var offIcon = '<svg style="padding-top: 10px !important;" version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 40 44" enable-background="new 0 0 24 24" xml:space="preserve">'+  
							'<image id="image0" width="24" height="24" x="0" y="0"'+
							'xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQ'+
							'AAA7EAZUrDhsAAAH2SURBVEhLvZbPTlNBFMa/mdjLTbFYMZioMa7Bh0AtUFiwxi7E+FIa1AXBhax1YdTU4EMIazXKgiCtJPW2hRnPd6Y09h9gvfZLmtzOmfnNOWdmzozxIgwQ'+
							'Tcn6CzQ/bOHo0w78/g9tN1cmcWFmGpl7s4gfPYAxVtv7aeAEP0sPkWxuwly8BBOPAZkMYFsg54BmE75ehz+sIr6/gomXG8HWpZ4JGu/LqCwsw17OA9mseGdalv7S4bUa3EEF+b'+
							'evEC3MtSxBHbH9evpc4Iuw16/BjI+fCafYh305plJcEsazliWoHUHwXOA3bp0L3E9EuW+fJZI37Uh0As6wZ7LB85M8Dykv6+O+72LK10A3lXZYWtWc/yucIoMsMvW/c87v2VhS'+
							'c3Po1HQrpOorplwCW1/fgMnJVkwJTunCC7MuZ8g2yh9hxmSfpywyG+Ut2KPtnXCI0pYwybZ6/FNY3B4Jk+z/QO6UZeHS2pK2hEm2ZVVk4UpdwiTbRoVZrYppi8yocGcEB43QuL'+
							'SiJTc1CYt3hB64kRQ7fuTfvRbDl3CBDClNjTB48Zwku+1uNF9Abu2J1nN68bdSz2Vsbu1xx6022iuTYiRXJX9RcV53gqtU4ZME/vhYYfrjt7S5alX7RMW5MKYLTvVE8KdoGvhs'+
							'uS3Plrt8tqyeEiXwG7OJGqaBx0kwAAAAAElFTkSuQmCC" />'+
							'</svg>';	
										
			dom.jquery('body').prepend('<div id="' + IconAllotContainerId + '" style="position:absolute;top:0px;left:0px;z-index:2147483647;display:block;min-height:5px;direction:ltr;-webkit-transform: translate3d(0, 0, 0);">'  +
				'<div id="' + IconAllotWholeId + '">'  +
					'<div id="' + IconAllotOrangeId + '"   style="background: #00a9e0 !important;"></div>'  +
					'<div id="' + iconbarId + '" style="cursor: pointer; position: absolute; top: 0px !important;">'  + 
						'<div id="' + iconbarbgId + '" style="max-width:none !important; position: absolute; top: 0px !important;" />'  +
						'<div id="' + iconbarimageId + '" style="max-width:none !important; position: absolute; top: 0px !important;" />'  +
					'</div>' + 
				'</div>'  +
				'<div id="' + IconAllotPanelId + '" style="height: auto; -moz-box-sizing: content-box !important;">'  +
					'<div id="' + IconAllotPanelLinksId + '" style="margin-right: 13px !important; width: 96% !important;">'  +
						'<div class="' + IconAllotPanelLeftClass + '" id="' + IconAllotPanelLeftId + '">'  +			    
							'<div id="' + IconAllotPopularId + '">'  +
								'<div style="margin-left: 10px ! important; padding-top: 7px !important; ">'  +	
									'<div style="display:inline-block !important; float:left !important">'	+
										'<div id="' + iconbariconId + '" style="display: inline; width: 64px; height: 64px;" >' +
										'</div>' + 
										'<span style="font-size: 19px !important; padding-left:10px !important; letter-spacing: 0.14px; color: #00a9e0 !important;">'  +
											overlayText.header + 
										'</span>'  +
									'</div>' +
								'</div>' +
	
								'<div style="width: 24px; height:24px; display:inline !important; float:right !important; padding-top:3px !important">' +
									closeIcon +
								'</div>' +

								'<div id="' + IconAllotTabId + '" style="float:left !important; display:block !important;background: none repeat scroll 0px 0px #EBEBEB ! important; cursor: auto; height: 1px !important; margin-top: 8px ! important; width: 110% ! important; margin-left: 0px !important;">'  +
								'</div>'  +	

								'<div id="' + explanationTextParentId + '" style="display: none !important;margin-left: 10px ! important; padding-top: 7px !important; ">'  +	
									'<div id="' + explanationTextId + '" style="text-align: center;width: 100%; float:left !important; padding: 16px 0px 6px 0px !important;">'	+
									'<span style="font-weight: bold !important;font-size: 16px !important;color: #00c944 !important; letter-spacing: 0.11px !important;">' + overlayText.explanationTextHeader + '</span>'+
									'</div>' +
								'</div>' +
								'<div id="' + IconAllotTabId3 + '" style="float:left !important; display:none !important;background: none repeat scroll 0px 0px #EBEBEB ! important; cursor: auto; height: 1px !important; margin-top: 8px ! important; width: 110% ! important; margin-left: 0px !important;">'  +
								'</div>'  +										
								
								'<div style="margin-left: 10px ! important; padding-top: 7px !important; ">'  +	
									'<div id="' + IconAllotServicesStatusId + '" style="width: 100%; float:left !important; padding-top: 10px !important;">'	+
									'</div>' +
								'</div>' +

								'<div id="' + IconAllotTabId2 + '" style="float:left !important; display:block !important;background: none repeat scroll 0px 0px #EBEBEB ! important; cursor: auto; height: 1px !important; margin-top: 8px ! important; width: 100% ! important; margin-left: 0px !important;">'  +
								'</div>'  +								
							'</div>'  +
						'</div>'  +
					'</div>'  +
				'</div>'  +
				'<div id="' + IconAllotPanel2Id + '" style="-moz-box-sizing: content-box !important;">'  +
					'<div id="' + IconAllotButtonBarId + '" style="min-height: 50px !important; padding-left: 10px !important; padding-top: 16px !important; cursor: pointer !important;">'  +	
						'<div style="display:inline-block !important; float: left !important;">' +
							'<div id="' + iconCBimage + '" style="display: inline; width: 32px; height: 32px; text-align: left;">' + 
							'</div>' +	
							'<span '+ '" id="' + IconAllotStatsId + '" style="font-size: 16px !important; padding-left: 10px !important; color: #00a9e0 !important; letter-spacing: 0.11px !important; width: 244px !important;">' + overlayText.settingsButton + '</span>'  +
						'</div>' +
						'<div id="' + iconChevronImage + '" style="display: inline; width: 24px; height: 24px; padding-top: 4px !important; float: right !important;">' + 
						'</div>' +
					'</div>' + 

					'<div id="' + moreInfoTabId + '" style="float:left !important; display:none !important;background: none repeat scroll 0px 0px #EBEBEB ! important; cursor: auto; height: 2px !important; width: 110% ! important; margin-left: 0px !important;">'  +
					'</div>'  +	
					
					'<div style="display: none !important; min-height: 45px !important; z-index: 1; padding-bottom: 10px !important; padding-left: 10px !important; padding-right:10px !important; padding-top: 10px !important;" id="' + moreInfoId + '">' + 
						'<span style="font-size: 16px !important;color: #00a9e0 !important; letter-spacing: 0.11px !important;">' + overlayText.moreInfoText + '</span>' + 
					'</div>' +
					
					'<div id="' + IconAllotTabId + '" style="float:left !important; display:block !important;background: none repeat scroll 0px 0px #EBEBEB ! important; cursor: auto; height: 2px !important; width: 110% ! important; margin-left: 0px !important;">'  +
					'</div>'  +	
					
					'<div style="min-height: 45px !important; z-index: 1; padding-left: 10px !important; padding-right:10px !important; padding-top: 10px !important;" id="' + contactId + '">' + 
						'<span style="font-size: 16px !important;color: #00a9e0 !important; letter-spacing: 0.11px !important;">' + overlayText.contactText + '</span>' + 
					'</div>' +
						
					'<div style="min-height: 62px !important; padding-top: 11px ! important; z-index: 1; padding-left: 10px !important; padding-right:10px !important;" id="' + downloadURLId + '">' + 
						'<span style="font-size: 16px !important;color: #333333 !important; letter-spacing: 0.11px !important;">' + overlayText.downloadURLText + '</span>' + 
						'</br>' + '</br>' +
						'<a id="' + downloadURLLinkId + '"></a>' + 
					'</div>' +
				'</div>' + 
			'</div>' 	
			);
				
			if( !showExplanationTextModule ) {
				dom.jquery('#' + explanationTextId).hide();
			}
			
			if( showConfigButtonModule ){				
				dom.jquery("#" + iconCBimage).append(configIcon);
				dom.jquery("#" + iconCBimage + " svg").css("width",  "32px").css("height", "32px");
				dom.jquery("#" + iconChevronImage).append(chevronIcon);
				dom.jquery("#" + iconChevronImage + " svg").css("width",  "24px").css("height", "24px");
			
			} else {
				dom.jquery('#' + IconAllotButtonBarId).hide();				
			}
						
			// Make the icon draggable
			dom.jquery("#" + iconbarId).drags();
  
			// Definition of SVG format of image			
			/*var orangeIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="44px" viewBox="0 0 32 44" enable-background="new 0 0 32 44" xml:space="preserve">' + 
							 '	<image id="image0" width="32" height="44" x="0" y="0" xlink:href="data:image/png;base64,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"/>' + 
							 '</svg>';*/
			var orangeIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="44px" viewBox="0 0 40 44" enable-background="new 0 0 40 44" xml:space="preserve">  <image id="image0" width="40" height="44" x="0" y="0"'+
							'    xlink:href="data:image/png;base64,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" />'+
							'</svg>';
										
			// Append images to corresponding divs and set SVGs width and height
			dom.jquery("#" + iconbarimageId).append(orangeIcon);
			dom.jquery("#" + iconbarbgId + " svg, #" + iconbarimageId + " svg, #" + iconbarId).css("width",  "48px").css("height", "48px");
			dom.jquery("#" + iconbariconId).append(orangeIcon);
			dom.jquery("#" + iconbariconId + " svg").css("width",  "32px").css("height", "32px");
			
			// Tunning width's and height's depending on device type and device orientation
			if(window.mobilecheck() && ((navigator.userAgent.match(/iPad/i) == null) || (window.orientation == 0))) {
				dom.jquery("#" + IconAllotOrangeId).css('height','200%');
				if((dom.jquery("#" + IconAllotOrangeId).css('height') == "0px") || (parseInt(dom.jquery("#" + IconAllotOrangeId).css('height')) > 2)) 
					dom.jquery("#" + IconAllotOrangeId).css('height',   '2px');
			
				// Redmine #37487: Determining icon width and height depending on the configuration variables
				var iconSizeFactor;
				
				if((typeof iconSizeScreenPercentage === "undefined") || (iconSizeScreenPercentage < 1) || (iconSizeScreenPercentage > 100))
					iconSizeFactor = 100/7;
				else
					iconSizeFactor = 100/iconSizeScreenPercentage;
				
				var iconSize;
				if(getViewportWidth().width/iconSizeFactor < iconMinSizePx)
					iconSize = iconMinSizePx;
				else if(getViewportWidth().width/iconSizeFactor > iconMaxSizePx)
					iconSize = iconMaxSizePx;
				else
					iconSize = getViewportWidth().width/iconSizeFactor;
				
				dom.jquery("#" + iconbarimageId + " svg, #" + iconbarbgId + " svg, #" + iconbarId)
					.css("width",  iconSize)
					.css("height", iconSize);
			} else {
				dom.jquery("#" + IconAllotPanel2Id).css("min-width", "400px");
				dom.jquery("#" + IconAllotPanel2Id).css("width", "26%");
				dom.jquery("#" + IconAllotPanelId).css("min-width", "400px");
				dom.jquery("#" + IconAllotPanelId).attr("style", function(i,s) { return s + 'width: 26% !important;' });
				dom.jquery("#" + IconAllotOrangeId).css('height',   '2px');
				dom.jquery("#" + iconbarId).css('height', ''); 
				dom.jquery("#" + iconbarimageId + ", #" + iconbarbgId).css('height','');
			}
						
			// Get the value of the parameters received from WebFilter
			var view, uriMutationRequest, uriAuditRequest, downloadURL, servicesStatus, servicesType;
			if(window.g_icon_parameters) { // Global variable does exist => New version of WebFilter
				if(window.g_icon_parameters.hasOwnProperty("view"))
					view = window.g_icon_parameters.view;
				else
					view = getURLVarFromScript('view');
				if(window.g_icon_parameters.hasOwnProperty("uriMutationRequest"))
					uriMutationRequest = window.g_icon_parameters.uriMutationRequest;
				else
					uriMutationRequest = getURLVarFromScript("uriMutationRequest");
				if(window.g_icon_parameters.hasOwnProperty("uriAuditRequest"))
					uriAuditRequest = window.g_icon_parameters.uriAuditRequest;
				else
					uriAuditRequest = getURLVarFromScript("uriAuditRequest");
				if(window.g_icon_parameters.hasOwnProperty("DownloadURL"))
					downloadURL = window.g_icon_parameters.DownloadURL;
				else
					downloadURL = getURLVarFromScript('DownloadURL');
				if(window.g_icon_parameters.hasOwnProperty("servicesStatus"))
					servicesStatus = window.g_icon_parameters.servicesStatus;
				else
					servicesStatus = getURLVarFromScript('servicesStatus');
				if(window.g_icon_parameters.hasOwnProperty("type"))
					servicesType = window.g_icon_parameters.servicesType;
				else
					servicesType = getURLVarFromScript('type');
			} else { // Global variable does NOT exist => Old version of WebFilter
				view = getURLVarFromScript('view');
				uriMutationRequest = getURLVarFromScript("uriMutationRequest");
				uriAuditRequest = getURLVarFromScript("uriAuditRequest");
				downloadURL = getURLVarFromScript('DownloadURL');
				servicesStatus = getURLVarFromScript('servicesStatus');
				servicesType = getURLVarFromScript('type');
			}
			
			//type (degustacion, service) to show / hide text
			if(servicesType == "degustacion") {
				dom.jquery("#" + explanationTextParentId).show();
				dom.jquery("#" + IconAllotTabId3).show();
				dom.jquery("#" + moreInfoId).show();
				dom.jquery("#" + moreInfoTabId).show();
			}
				
			// Set view style
			if(view == "small")
				dom.jquery("#" + IconAllotOrangeId).hide();
			
			// #38822: Hide DownloadURL section if WebFilter sends a "-" (or empty) => installed_devices = true
			if((!showDownloadURL) || (!downloadURL) || (downloadURL == "-") || (downloadURL == ""))
				dom.jquery("#" + downloadURLId).hide();
			else {
				dom.jquery("#" + downloadURLLinkId).attr("href", downloadURL);
				dom.jquery("#" + downloadURLLinkId).html(downloadURL);
				dom.jquery("#" + downloadURLId).show();
			}

			// #46371, #45690: Show services status
			if((servicesStatus === undefined) || (servicesStatus == ""))  {
				dom.jquery("#" + IconAllotServicesStatusId).hide();
				dom.jquery("#" + IconAllotTabId2).hide();
			} else {
				servicesStatusArr = servicesStatus.split(";");
				for(var i = 0; i < servicesStatusArr.length; ++i) {
					if(servicesStatusArr[i] != "") {
						var service = servicesStatusArr[i].split("=")[0];
						var status = servicesStatusArr[i].split("=")[1];
						var serviceName;
						if(service == "W")
							serviceName = overlayText.W;
						else if(service == "V")
							serviceName = overlayText.V;
						else if(service == "A")
							serviceName = overlayText.A;
						else if(service == "P")
							serviceName = overlayText.P;
						else if(service == "L")
							serviceName = overlayText.L;
						var statusIcon = (status == 1) ? onIcon : offIcon;
						dom.jquery("#" + IconAllotServicesStatusId).append('<div>'+
																		   '<span style="font-size: 19px !important; font-weight: bold !important; padding-left:10px !important; letter-spacing: 0.14px; color: #00a9e0 !important; width: 150px; display: inline-block;">'+
																		   serviceName+
																		   '</span>'+
																		   '<div style="width: 24px; height:24px; display:inline !important; padding-left: 10px !important;">'+
																		   statusIcon+
																		   '</div>'+
																		   '</div>');
					}
				}
			}
			
			// Set events
			var eventsSetInterval = setInterval(function() {
				dom.jquery(document).off('click').on('click', onDocumentClick);
				dom.jquery(document).on("mouseup", onDocumentMouseUp);
				dom.jquery("#" + IconAllotButtonBarId).off('click').on('click', function (p_event) {
					location.href = AllotSettingsURL;
				});
				dom.jquery("#" + IconAllotContainerId).off('click').on('click', onTabOpenClick);
				
				dom.jquery(window).off("resize").on("resize", function(event) {
					// Disconnecting MutationObserver object to avoid detecting user orientation change 
					if((obs) && (event) && (event.originalEvent)) {
						if (event.originalEvent.hasOwnProperty("isTrusted")) {
							if (event.originalEvent.isTrusted)
								obs.disconnect();
						} else
							obs.disconnect();
					}
									
					// Redmine #37487: Determining icon width and height depending on the configuration variables
					var iconSizeFactor, iconSize;
										
					if((typeof iconSizeScreenPercentage === "undefined") || (iconSizeScreenPercentage < 1) || (iconSizeScreenPercentage > 100))
						iconSizeFactor = 100/7;
					else
						iconSizeFactor = 100/iconSizeScreenPercentage;
					
					if(getViewportWidth().width/iconSizeFactor < iconMinSizePx)
						iconSize = iconMinSizePx;
					else if(getViewportWidth().width/iconSizeFactor > iconMaxSizePx)
						iconSize = iconMaxSizePx;
					else
						iconSize = getViewportWidth().width/iconSizeFactor;
					
					dom.jquery("#" + iconbarimageId + " svg, #" + iconbarbgId + " svg")
						.css("width",  iconSize)
						.css("height", iconSize);
						
					dom.jquery("#" + IconAllotContainerId).css("width", getIconContainerWidth() + "px");
				
					// #37262: Make icon content scrollable just when it takes up all the screen (and just for mobile devices)
					if (isOpen()) {
						var newHeight = dom.jquery("#" + IconAllotPanelId).height() + dom.jquery("#" + IconAllotPanel2Id).height() + 15;
						dom.jquery("div#" + IconAllotContainerId).css("height", newHeight - 15);
						if(window.mobilecheck() && ((navigator.userAgent.match(/iPad/i) == null) || (window.orientation == 0)) && 
						   (parseInt(dom.jquery("div#" + IconAllotContainerId).css("height")) >= getViewportWidth().height))
						{
							dom.jquery("div#" + IconAllotContainerId).css("height", "100%");
							//dom.jquery("div#" + IconAllotContainerId).css("overflow", "scroll");
						} else
							dom.jquery("div#" + IconAllotContainerId).css("overflow", "visible");
					}
				});
			}, 3000);
		
			// Creating MutationObserver object
			obs = new MutationObserver(function(mutations, observer){
				mutations.forEach(function(mutation) {
					clearInterval(eventsSetInterval);
					clearInterval(stylesSetInterval);
							
					// If detecting an attack, NO Audit Request must be launch for indicating that the icon has been loaded
					launchAuditRequest = false;
					
					// Remove overlay icon from DOM when detecting an attack
					if(destroyIfMutationDetected)
						dom.jquery("#" + IconAllotContainerId).remove();
										
					// Launch GET request to indicate WF that an attack to overlay icon has been made (uriMutationRequest)
					if(uriMutationRequest)
						dom.jquery.get(uriMutationRequest, function( data ) {});
				});
			});
		
			// Activating MutationObserver object
			obs.observe( document.getElementById(IconAllotContainerId), { attributes:true, childList:true, subtree:true, characterData:true });
			
			// Detect styles than may affect the icon
			var stylesSetInterval = setInterval(function(){
				var sheets = document.styleSheets;
				var mySheetStyleRules = [];
				var hostSheetStyleRules = [];
				for (var i=0; i < sheets.length; ++i) {
					var rules = sheets[i].rules || sheets[i].cssRules;
					if(rules) {
						for (var r=0; r < rules.length; ++r) {
							if(rules[r].selectorText) {
								var ruleSet = rules[r].selectorText.split(',');
								for(var j=0; j < ruleSet.length; ++j) {
									var currentRule = ruleSet[j].split(' ');
									for(var k=0; k < currentRule.length; k++) {
										var hashPosition = currentRule[k].indexOf('#');
										if(hashPosition >= 0) {
											if(sheets[i].ownerNode.id == IconAllotStylesheetId) 
												mySheetStyleRules.push(currentRule[k].substring(hashPosition));
											else
												hostSheetStyleRules.push(currentRule[k].substring(hashPosition));
										}
									}
								}
							}
						}
					}
				}
				var found = false;
				var mySheetIndex = 0;
				var hostSheetIndex = 0;
				while((!found) && (mySheetIndex < mySheetStyleRules.length)) {
					var currId = mySheetStyleRules[mySheetIndex];
					
					while((!found) && (hostSheetIndex < hostSheetStyleRules.length)) {
						if(hostSheetStyleRules[hostSheetIndex].indexOf(currId) >= 0) {
							found = true;
							clearInterval(eventsSetInterval);
							clearInterval(stylesSetInterval);
							
							// If detecting an attack, NO Audit Request must be launch for indicating that the icon has been loaded
							launchAuditRequest = false;
							
							// Remove overlay icon from DOM when detecting an attack
							if(destroyIfMutationDetected)
								dom.jquery("#" + IconAllotContainerId).remove();
													
							// Launch GET request to indicate WF that an attack to overlay icon has been made (uriMutationRequest)
							if(uriMutationRequest)
								dom.jquery.get(uriMutationRequest, function( data ) {});
						}
						else
							hostSheetIndex++;
					}
					
					if(!found)
						mySheetIndex++;
				}
			}, 3000);
			
			// Launch GET request to indicate WF that overlay icon has been correctly loaded (uriAuditRequest)
			if(launchAuditRequest)
				if(uriAuditRequest)
					dom.jquery.get(uriAuditRequest, function( data ) {});
		}
    );
}

(function AllotIconLoader(i)
{
    var script
    , head = document.getElementsByTagName('head')[0]
    , makeScript = function () {
        script = document.createElement('script');
        script.type = 'text/javascript';
    }
    , loadLocal = function (fn) {
        makeScript();
        script.textContent = '(' + fn.toString() + ')();';
        head.appendChild(script);
    }
    ;
    (function (i) {
		loadLocal(AllotIconMain);
    })(i || 0);
})();
