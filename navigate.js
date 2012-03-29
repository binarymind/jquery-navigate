if(typeof Modernizr =='undefined') {
	/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
	 * Build: http://www.modernizr.com/download/#-history-inputtypes-shiv-cssclasses-load
	 */
	window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}function A(){e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),o[a[d]]=!!e;return o}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.history=function(){return!!a.history&&!!history.pushState};for(var B in n)u(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.input||A(),v(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
}
jQuery.navigate = {init:function() {}};

// for now ajax navigate only if history is taken in charge by html5
if(Modernizr.history) {
	/*JSON*/
	if( typeof window.JSON === 'undefined' ) {
		var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}();
	}
	/* Amplify */
	(function(a,b){function d(a,d){var e=d.__amplify__?JSON.parse(d.__amplify__):{};c.addType(a,function(f,g,h){var i=g,j=(new Date).getTime(),k,l;if(!f){i={};for(var m in e)e.hasOwnProperty(m)&&(k=d[m],l=k?JSON.parse(k):{expires:-1},l.expires&&l.expires<=j?(delete d[m],delete e[m]):i[m.replace(/^__amplify__/,"")]=l.data);d.__amplify__=JSON.stringify(e);return i}f="__amplify__"+f;if(g===b){if(e[f]){k=d[f],l=k?JSON.parse(k):{expires:-1};if(l.expires&&l.expires<=j)delete d[f],delete e[f];else return l.data}}else if(g===null)delete d[f],delete e[f];else{l=JSON.stringify({data:g,expires:h.expires?j+h.expires:null});try{d[f]=l,e[f]=!0}catch(n){c[a]();try{d[f]=l,e[f]=!0}catch(o){throw c.error()}}}d.__amplify__=JSON.stringify(e);return i})}JSON.stringify=JSON.stringify||JSON.encode,JSON.parse=JSON.parse||JSON.decode;var c=a.store=function(a,b,d,e){e=c.type,d&&d.type&&d.type in c.types&&(e=d.type);return c.types[e](a,b,d||{})};c.types={},c.type=null,c.addType=function(a,b){c.type||(c.type=a),c.types[a]=b,c[a]=function(b,d,e){e=e||{},e.type=a;return c(b,d,e)}},c.error=function(){return"amplify.store quota exceeded"};var e={localStorage:1,sessionStorage:1};for(var f in e)if(e.hasOwnProperty(f))try{window[f].getItem&&d(f,window[f])}catch(g){}window.globalStorage&&(d("globalStorage",window.globalStorage[window.location.hostname]),c.type==="sessionStorage"&&(c.type="globalStorage")),function(){var a=document.createElement("div"),d="amplify",e;a.style.display="none",document.getElementsByTagName("head")[0].appendChild(a),a.addBehavior&&(a.addBehavior("#default#userdata"),a.load(d),e=a.getAttribute(d)?JSON.parse(a.getAttribute(d)):{},c.addType("userData",function(f,g,h){var i=g,j=(new Date).getTime(),k,l,m;if(!f){i={};for(var n in e)e.hasOwnProperty(n)&&(k=a.getAttribute(n),l=k?JSON.parse(k):{expires:-1},l.expires&&l.expires<=j?(a.removeAttribute(n),delete e[n]):i[n]=l.data);a.setAttribute(d,JSON.stringify(e)),a.save(d);return i}f=f.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");if(g===b){if(f in e){k=a.getAttribute(f),l=k?JSON.parse(k):{expires:-1};if(l.expires&&l.expires<=j)a.removeAttribute(f),delete e[f];else return l.data}}else g===null?(a.removeAttribute(f),delete e[f]):(m=a.getAttribute(f),l=JSON.stringify({data:g,expires:h.expires?j+h.expires:null}),a.setAttribute(f,l),e[f]=!0);a.setAttribute(d,JSON.stringify(e));try{a.save(d)}catch(o){m===null?(a.removeAttribute(f),delete e[f]):a.setAttribute(f,m),c.userData();try{a.setAttribute(f,l),e[f]=!0,a.save(d)}catch(p){m===null?(a.removeAttribute(f),delete e[f]):a.setAttribute(f,m);throw c.error()}}return i}))}(),d("memory",{})})(this.amplify=this.amplify||{});
	/* Adapter jQuery */
	(function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()})(window);
	/* History */
	(function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.amplify||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){if(typeof m.Adapter=="undefined")return!1;typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4();return!0},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0;var o,p;m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.temp={internal:!1,expectedStateId:!1,ignore:0,same:!1,anchor:!1},m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e)},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.bugs={},m.bugs.safariIFrame=Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)&&a.parent!==a),m.bugs.safariHash=Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),m.bugs.safariPoll=Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),m.bugs.noHashPopState=Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),m.bugs.noInitialPopState=Boolean(!m.emulated.pushState&&(e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)||/Gecko\//.test(e.userAgent))),m.bugs.ieDoubleCheck=Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),m.bugs.hashEscape=Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7),m.enabled=!m.emulated.pushState,m.isEmptyObject=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},m.cloneObject=function(a){var b,c;a?(b=k.stringify(a),c=k.parse(b)):c={};return c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;a+="/";return a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/");return c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"});return c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,""));return c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=m.getFullUrl(a),c=b,d=m.getBaseUrl(),e=m.getRootUrl();m.emulated.pushState&&(c=c.replace(d,"")),c=c.replace(e,"/"),/^\.?\.?\//.test(c)===!1&&(e+c===b?c="/"+c:c="./"+c),c=c.replace(/^(\.\/)+/g,"./").replace(/\#$/,"");return c},m.store=f?f.store("History.store")||{}:{},m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url,c.internal=m.temp.internal,c.same=m.temp.same,c.anchor=c.anchor||m.temp.anchor);return c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=String(Math.floor(Math.random()*1e3));if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.data=m.cloneObject(a.data),b.anchor=m.extractAnchor(b.url),b.hash=m.getShortUrl(b.url),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_anchor.*/,"").replace(/\??\&_suid.*/,"").replace(/#.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;b.anchor&&(/\?/.test(b.hash)||(b.hash+="?"),m.emulated.pushState&&(b.hash+="&_anchor="+b.anchor),b.url+="#"+b.anchor),b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl);return b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};d=m.normalizeState(d);return d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b=m.normalizeState(a),c,d;c={data:b.data,title:a.title,url:a.url},d=k.stringify(c);return d},m.getStateId=function(a){var b=m.normalizeState(a),c;c=b.id;return c},m.getHashByState=function(a){var b,c=m.normalizeState(a);b=c.hash;return b},m.extractAnchor=function(a){var b,c,d;b=a.replace(/^[^#]+#?/,""),b||(c=/(.*)\&_anchor=([a-zA-Z0-9_\-]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"");return b||!1},m.extractId=function(a){var b,c,d;c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"";return b||!1},m.isTraditionalAnchor=function(a){var b=!/[^a-zA-Z0-9_\-]/.test(a);return b},m.extractState=function(a,b,c){var d=null,e,f,g;b=b||!1,c=typeof c=="undefined"?!0:c,a=a,e=m.extractId(a),e&&(d=m.getStateById(e)),d||(f=m.getFullUrl(a),e=m.getIdByUrl(f)||!1,e&&(d=m.getStateById(e)),!d&&b&&(!!c||!m.isTraditionalAnchor(a))&&(d=m.createStateObject(null,null,f)));return d},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.getStateById(m.savedStates[m.savedStates.length-1])},m.getLastStoredState=function(){return m.getStateById(m.storedStates[m.storedStates.length-1])},m.hasUrlDuplicate=function(a){var b=!1,c;c=m.extractState(a.url),b=c&&c.id!==a.id;return b},m.storeState=function(a){if(m.isLastStoredState(a))return a;m.urlToId[a.url]=a.id,m.storedStates.push(a.id);return a},m.isLastStoredState=function(a){var b=!1,c,d,e;m.storedStates.length&&(c=m.getLastStoredState(),d=a.id,e=c.id,b=d===e);return b},m.isLastSavedState=function(a,b){var c=!1,d,e,f,g,h;m.savedStates.length&&(d=m.getLastSavedState(),b?(g={data:a.data,title:a.title,url:a.cleanUrl},h={data:d.data,title:d.title,url:d.cleanUrl},c=k.stringify(g)===k.stringify(h)):(e=a.id,f=d.id,c=e===f));return c},m.saveState=function(a){if(m.isLastSavedState(a))return a;m.savedStates.push(a.id);return a},m.getStateByIndex=function(a){var b=null,c;typeof a=="undefined"?c=m.savedStates[m.savedStates.length-1]:a<0?c=m.savedStates[m.savedStates.length+a]:c=m.savedStates[a],b=m.getStateById(c);return b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.decodeURI(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);b=m.unescapeString(b);return b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){if(b!==!1&&m.busy()){m.debug("History.setHash: we must wait",arguments),m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b});return!1}m.debug("History.setHash: called",a);var c=m.escapeHash(a),e,f,g;m.busy(!0),e=m.extractState(a,!0,!1),e&&!m.emulated.pushState?(m.debug("History.setHash: Hash is a state so skipping the hash set with a direct pushState call",arguments),m.pushState(e.data,e.title,e.url,!1)):d.location.hash!==c&&(m.bugs.safariHash?(f=m.getPageUrl(),g=m.extractState(f.replace(/#.*/,"")),g?m.pushState(g.data,g.title,g.url+"#"+c,!1):m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c);return m},m.escapeHash=function(b){var c=m.normalizeHash(b);c=a.encodeURI(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?"));return c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");b=m.unescapeHash(b);return b},m.setTitle=function(a){var b=typeof a=="string"?a:a.title,c,e;b||(e=m.getStateByIndex(0),e&&e.url===(a.url||d.location.href)&&(b=e.title||m.options.initialTitle)),c=d.getElementsByTagName("title");if(c.length===1)try{c[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(f){}d.title=b;return m},m.queues=[],m.busy=function(a){typeof a!="undefined"?(m.debug("History.busy: changing ["+(m.busy.flag||!1)+"] to ["+(a||!1)+"]",m.queues.length),m.busy.flag=a):typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);var b,c,d,e;m.busy.flag||(h(m.busy.timeout),b=function(){if(!m.busy.flag)for(c=m.queues.length-1;c>=0;--c){d=m.queues[c];if(d.length===0)continue;e=d.shift(),m.fireQueueItem(e),m.busy.timeout=g(b,m.options.busyDelay)}},m.busy.timeout=g(b,m.options.busyDelay));return m.busy.flag},m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a);return m},m.queue=function(a,b){typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a);return m},m.clearQueue=function(){m.busy.flag=!1,m.queues=[];return m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){m.stateChanged=!0,m.doubleCheckClear();return m},m.doubleCheckClear=function(){m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1);return m},m.doubleCheck=function(a){m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){m.doubleCheckClear(),m.stateChanged||(m.debug("History.doubleCheck: State has not yet changed, trying again",arguments),a());return!0},m.options.doubleCheckInterval));return m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(b&&!m.isLastSavedState(b))c=b;else return;c||(m.debug("History.safariStatePoll: new"),c=m.createStateObject()),m.debug("History.safariStatePoll: trigger"),m.Adapter.trigger(a,"popstate");return m},m.back=function(a){m.debug("History.back: called",arguments);if(a!==!1&&m.busy()){m.debug("History.back: we must wait",arguments),m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a});return!1}m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1);return!0},m.forward=function(a){m.debug("History.forward: called",arguments);if(a!==!1&&m.busy()){m.debug("History.forward: we must wait",arguments),m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a});return!1}m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1);return!0},m.go=function(a){m.debug("History.go: called",arguments);var b,c;c=(a<0?a*-1:a)-1,c&&m.queue(function(){m.temp.ignore=c,m.busy(!1)});if(a>0)for(b=1;b<=a;++b)m.forward();else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(b=-1;b>=a;--b)m.back()}return m},m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a=f.store("History.store")||{},b;a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState)m.idToState.hasOwnProperty(b)&&(a.idToState[b]=m.idToState[b]);for(b in m.urlToId)m.urlToId.hasOwnProperty(b)&&(a.urlToId[b]=m.urlToId[b]);for(b in m.stateToId)m.stateToId.hasOwnProperty(b)&&(a.stateToId[b]=m.stateToId[b]);m.store=a,f.store("History.store",a)},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload)),m.emulated.pushState?(p=function(){},m.pushState=m.pushState||p,m.replaceState=m.replaceState||p):(m.onPopState=function(b,c){var e,f,g,h=!1,i=!1,j=!1;m.doubleCheckComplete(),e=m.getHash();if(e){f=m.extractState(e||d.location.href,!0,!1);if(f){m.debug("History.onPopState: state anchor",e,f),m.replaceState(f.data,f.title,f.url,!1);return!1}m.debug("History.onPopState: traditional anchor",e)}i=m.Adapter.extractEventData("state",b,c)||!1,i?h=m.getStateById(i):m.temp.expectedStateId?h=m.getStateById(m.temp.expectedStateId):h=m.extractState(d.location.href),h||(e&&(g=m.extractState(d.location.href.replace(/#.*/,"")),g&&(h=m.createStateObject(g.data,g.title,d.location.href))),h||(h=m.createStateObject(null,null,d.location.href)));if(m.temp.ignore){--m.temp.ignore,m.busy(!1);return!1}if(m.temp.internal==="hashchange"){if(m.isLastSavedState(h)){m.busy(!1);return!1}m.temp.internal=!1}m.temp.expectedStateId||(m.temp.internal=!1),m.temp.expectedStateId=!1,m.temp.same=m.isLastSavedState(h,!0),m.storeState(h),m.saveState(h),m.setTitle(h),m.Adapter.trigger(a,"statechange"),m.busy(!1);return!0},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){m.debug("History.pushState: called",arguments);if(e!==!1&&m.busy()){m.debug("History.pushState: we must wait",arguments),m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e});return!1}m.busy(!0);var f=m.createStateObject(b,c,d),g;e!==!1&&(m.temp.internal="pushState"),m.temp.same=m.isLastSavedState(f,!0),m.isLastSavedState(f)?(m.Adapter.trigger(a,"statechange"),m.busy(!1)):(m.storeState(f),n.pushState(f.id,f.title,f.url),m.temp.expectedStateId=f.id,m.Adapter.trigger(a,"popstate"));return!0},m.replaceState=function(b,c,d,e){m.debug("History.replaceState: called",arguments);if(e!==!1&&m.busy()){m.debug("History.replaceState: we must wait",arguments),m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e});return!1}m.busy(!0);var f=m.createStateObject(b,c,d),g;e!==!1&&(m.temp.internal="replaceState"),m.temp.same=m.isLastSavedState(f,!0),m.isLastSavedState(f)?(m.Adapter.trigger(a,"statechange"),m.busy(!1)):(m.storeState(f),n.replaceState(f.id,f.title,f.url),m.temp.expectedStateId=f.id,m.Adapter.trigger(a,"popstate"));return!0},++m.temp.ignore,m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval)),m.bugs.safariIFrame&&(o=m.getState(),n.pushState(o.data,o.title,o.url)),m.bugs.noHashPopState&&(m.Adapter.bind(a,"hashchange",function(){m.temp.internal="hashchange",m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.bugs.noInitialPopState&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"popstate")})),m.bugs.noInitialPopState&&m.Adapter.trigger(a,"popstate"))},m.init()})(window);
	/* History html4 */
	(function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;c=a===b;return c},g.saveHash=function(a){if(g.isLastHash(a))return!1;g.savedHashes.push(a);return!0},g.getHashByIndex=function(a){var b=null;typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a];return b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};g.discardedHashes[a]=d},g.discardedState=function(a){var b=g.getHashByState(a),c;c=g.discardedStates[b]||!1;return c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);g.discardedState(a)&&delete g.discardedStates[b]},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){var c,d;if(i)return!1;i=!0,c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"",c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1;return!0}):g.checkerFunction=function(){var c=g.getHash();c!==b&&(b=c,g.Adapter.trigger(a,"hashchange"));return!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval));return!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;if(g.isLastHash(e)){g.busy(!1);return!1}g.doubleCheckComplete(),g.saveHash(e);if(e&&g.isTraditionalAnchor(e)){g.Adapter.trigger(a,"anchorchange"),g.busy(!1);return!1}f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0);if(g.isLastSavedState(f)){g.busy(!1);return!1}h=g.getHashByState(f),j=g.discardedState(f);if(j){g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1);return!1}g.busy(!0),g.addState(f.data,f.title,f.url);return!0},g.Adapter.bind(a,"hashchange",g.onHashChange),g.addState=function(b,d,e,f){var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash(),m;f==="replaceState"&&(m=g.getStateByIndex(-2),g.discardState(j,h,m)),g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h);if(i===k)g.debug("History.pushState: no change",i),g.temp.same=!0;else{if(i!==l&&i!==g.getShortUrl(c.location.href)){g.debug("History.pushState: update hash",i,l),g.setHash(i,!1);return!1}g.saveState(h);if(g.temp.ignore){--g.temp.ignore,g.busy(!1);return!1}g.temp.same=!1}g.Adapter.trigger(a,"statechange"),g.busy(!1);return!0},g.pushState=function(a,b,c,d){if(d!==!1&&g.busy()){g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:d});return!1}g.busy(!0),g.temp.internal=d!==!1?"pushState":!1;return g.addState(a,b,c,"pushState")},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy()){g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d});return!1}g.busy(!0),g.temp.internal=d!==!1?"replaceState":!1;return g.addState(a,b,c,"replaceState")},g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")}))},g.init()})(window);

jQuery.navigate = {
	ajaxLinks : 'a:not(.noAjax)[rel!="external"][target!="_blank"], .ajaxLink',
	init:function() {
		// Prepare HISTORY
	    var History = window.History; // Note: We are using a capital H instead of a lower h
	    if ( !History.enabled ) {
	         // History.js is disabled for this browser.
	         // This is because we can optionally choose to support HTML4 browsers or not.
	        return false;
	    }
		//ajax loader
		History.loader = null;
		
	    // Bind to StateChange Event
	   History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
	   	 	var State = History.getState(false, false);
			var reverse = History.getState().internal == false;
			//get target and content
	       	var target = State.data.target ? $(State.data.target) : $("body");
	       	var content = State.data.content ? ' '+State.data.content : '';
	      	   	
	        //get previous state
	        var previousState = null;
	        if(History.savedStates.length>1)
	        	previousState = History.getStateByIndex(-2);
	        
	        //function to load new state
	        var loadNewState = function() {
	        	if(History.loader) {History.loader.abort();}
	        	//load the content  
	        	if(previousState ==null) {
	        		//first load
	        		//--------------------------------------------------------
	        		//get the onload and onunload functions of this state
		            var onload = State.data.onload;
		            var onunload = State.data.onunload;
    				
    				//transform clicks to discrete clicks
    				$("body").find($.navigate.ajaxLinks).each(function(){
	            		$(this).discreteClick();
	            	});
    				//eval the onload
					if(onload) {
						var onloadResult = eval(State.data.onload);
			        	if(typeof onloadResult =="function") {
			        		//onunload is a function name, give it the onload as parameter
			        		onloadResult({
			        			reverse : false,
			        			target:State.data.target ? $(State.data.target) : $("body"),
			        			currentState:State, 
			        			clickedSelector:State.data.clickedSelector,
			        			previousState:null
			        		});
			        	} 	
					}
					return;
	        	}
	        	History.loader = $.ajax({
				    type: "GET",
				    url: State.url,
				    dataType: "html",
				    success: function(data) {
				    	History.loader=null;
				    	var State = History.getState(false, false);
				    	
				    	//get target and content
				       	var target = State.data.target ? $(State.data.target) : $("body");
				       	var content = State.data.content ? ' '+State.data.content : '';
				       	
				       	//Remove the body tag not to load all scripts and header of the loaded page
				       	//-------------------------------------------------------------------------
				       	var re = /<body[\s\S]*\/body>/;
						var check=data.match(re);
						if(!check || check.length==0) {
							alert('no body tag inside the page '+State.url);
							return false;
						}
	    	
						check=check[0].replace(/^<body/, '<div');
						check=check.replace(/body>$/, 'div>');
						//get the wanted content
						if(typeof State.data.content != 'undefined' &&  State.data.content) {
							var element=$(State.data.content, '<div>'+check+'</div>');//check).find(State.data.content);
							var myHtml = element.html();
						} else {
							var element=$(check);
							//var myHtml = check;
							var myHtml = element.html();
						}
						
						if(!myHtml) return;
						
						//insert content into the target    
		            	var myTarget = target.last(); 
		            	myTarget.html(myHtml);
		            	
		            	myTarget.find($.navigate.ajaxLinks).each(function(){
		            		$(this).discreteClick();
		            	});
				    	
		            	if(element.attr("class"))
	    					target.attr("class", element.attr("class"));
		            	
		            	//get the onload and onunload functions of this state
			            var onload = element.attr("ajax-onload");
			            var onunload = element.attr("ajax-onunload");
						
						//record them	
			            if(onload) State.data.onload =onload;
			            if(onunload) State.data.onunload =onunload;
	    
						//eval the onload
						if(onload) {
							var onloadResult = eval(State.data.onload);
				        	if(typeof onloadResult =="function") {
				        		//onunload is a function name, give it the onload as parameter
				        		onloadResult({
				        			reverse : reverse,
				        			target:State.data.target ? $(State.data.target) : $("body"),
				        			currentState:State, 
				        			clickedSelector:State.data.clickedSelector,
				        			previousState:previousState
				        		});
				        	} 	
						}
				    }
				});
		        	
	        };
					
	        //Unload the previous state
			//-------------------------
	        if(previousState && previousState.data.onunload) {
	        	var onUnloadResult = eval(previousState.data.onunload);
	        	if(typeof onUnloadResult =="function") {
					//onunload is a function name, give it the onload as parameter
	        		onUnloadResult({
	        			reverse : reverse,
	        			target:typeof previousState.data.target != "undefined" ? $(previousState.data.target) : null, 
	        			currentState:State, 
	        			clickedSelector:previousState.data.clickedSelector,
	        			previousState:previousState, 
	        			callback:loadNewState
	        		});
	        	} else {
					//we executed the onunload with the eval, thus execute the onload
					loadNewState();
	        	}
	        } else {
				loadNewState();
	        }
	        
	        //done
	        return false;
	    });
		//un touched prohib the urlbar to show
	    $("html").on("click",$.navigate.ajaxLinks, function(e) {
	    	var that = $(this);
	    	return that.navigate(e);
	     });
	     //push the first state
	     History.pushState({
	     	onload:$("body").attr("ajax-onload"),
	     	onunload:$("body").attr("ajax-onunload")
	     });
	}
};
(function($) {
	// get unique selector as #id if have id otherwise create id and return the proper selector
	$.fn.getSelector = function(){
		var me=$(this);
		if(!$.isWindow(me[0])){	
			var toReturn = me.attr('id'); if(!toReturn){toReturn = "me-" + Math.floor(Math.random()*1000000); me.attr('id', toReturn);}
			me=null;
			return '#'+toReturn;
		} else {me=null;return window;} //this is the window
	};
	$.fn.discreteClick = function(){
		var that = $(this);
		if(that.attr("href") !="javascript://") {
	    	that.attr("ajax-href", that.attr("href"));
	    	that.attr("href", "javascript://");
		}
	};
	
	/**
	 * This function navigate in ajax thanks to the data of this element
	 * target : the jquery selector in which we insert the data
	 * href : the url from which we take the data
	 * content : the jquery selector in the href page from which we take the data
	 * title : the page new title
	 **/
	$.fn.navigate = function(e){
		var me = $(this);
		var rel = me.attr("rel");
		
		/* get the ajax content */
		var content = me.attr('ajax-content');
		if(!content) content = me.attr("content");
		
		/* get the href */
		var href=me.attr('ajax-href');
		if(!href) href=me.attr('href');
		
		/* get the target */
		var target = me.attr('ajax-target');
		if(!target) me.attr("target");
		
		/* get the title */
		var title = me.attr('title');
		if(!title) title=null;
		
		//ie add the absolute location on href attribute
		var base = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1);
		href = href.replace(base, ""); 
		
		//don't do anything on links with rel="external" or target = blank or target of potential other domain
        if(href=="javascript://") {return true;}
   	 	History.pushState(
			{
				target:target, 
				content:content, 
				clickedSelector:me.getSelector()
			}, 
			title, href
		);
		return false;
	};
})(jQuery);	
}
$(document).ready(function() {
   $.navigate.init(); 
});