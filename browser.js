// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return"number"==typeof e}function r(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function t(e,t,i){var n=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+r(a):r(a)+e,n&&(e="-"+e)),e}var i=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function a(r){var a,o,c;switch(r.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;default:a=10}if(o=r.arg,c=parseInt(o,10),!isFinite(c)){if(!e(o))throw new Error("invalid integer. Value: "+o);c=0}return c<0&&("u"===r.specifier||10!==a)&&(c=4294967295+c+1),c<0?(o=(-c).toString(a),r.precision&&(o=t(o,r.precision,r.padRight)),o="-"+o):(o=c.toString(a),c||r.precision?r.precision&&(o=t(o,r.precision,r.padRight)):o="",r.sign&&(o=r.sign+o)),16===a&&(r.alternate&&(o="0x"+o),o=r.specifier===n.call(r.specifier)?n.call(o):i.call(o)),8===a&&r.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}function o(e){return"string"==typeof e}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,u=/e\+(\d)$/,f=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function y(r){var t,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":c(n)<1e-4?((t=r.precision)>0&&(t-=1),i=n.toExponential(t)):i=n.toPrecision(r.precision),r.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,b,"e"),i=p.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=p.call(i,u,"e+0$1"),i=p.call(i,f,"e-0$1"),r.alternate&&(i=p.call(i,g,"$1."),i=p.call(i,d,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):s.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function v(e,r,t){var i=r-e.length;return i<0?e:e=t?e+m(i):m(i)+e}var E=String.fromCharCode,_=isNaN,S=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,i,n,c,s,l,p,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(o(n=e[u]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),i=n.flags,f=0;f<i.length;f++)switch(c=i.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+c)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,_(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((s=parseInt(n.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(s)?String(n.arg):E(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=t(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=v(n.arg,n.width,n.padRight)),l+=n.arg||"",p+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function j(e){return"string"==typeof e}function I(e){var r,t,i;if(!j(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return k.apply(null,t)}var $="function"==typeof Object.defineProperty?Object.defineProperty:null,A=Object.defineProperty;function C(e){return"number"==typeof e}function R(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function O(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+R(n):R(n)+e,i&&(e="-"+e)),e}var N=String.prototype.toLowerCase,P=String.prototype.toUpperCase;function L(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!C(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=O(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=O(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===P.call(e.specifier)?P.call(t):N.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Z(e){return"string"==typeof e}var W=Math.abs,G=String.prototype.toLowerCase,M=String.prototype.toUpperCase,U=String.prototype.replace,X=/e\+(\d)$/,Y=/e-(\d)$/,z=/^(\d+)$/,B=/^(\d+)e/,J=/\.0$/,q=/\.0*e/,D=/(\..*[^0])0*e/;function H(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!C(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":W(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=U.call(t,D,"$1e"),t=U.call(t,q,"e"),t=U.call(t,J,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=U.call(t,X,"e+0$1"),t=U.call(t,Y,"e-0$1"),e.alternate&&(t=U.call(t,z,"$1."),t=U.call(t,B,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===M.call(e.specifier)?M.call(t):G.call(t)}function K(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Q(e,r,t){var i=r-e.length;return i<0?e:e=t?e+K(i):K(i)+e}var ee=String.fromCharCode,re=isNaN,te=Array.isArray;function ie(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ne(e){var r,t,i,n,a,o,c,s,l;if(!te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Z(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=ie(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,re(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,re(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=L(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!re(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=re(a)?String(i.arg):ee(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=H(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=O(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Q(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function oe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ce(e){var r,t,i,n;for(t=[],n=0,i=ae.exec(e);i;)(r=e.slice(n,ae.lastIndex-i[0].length)).length&&t.push(r),t.push(oe(i)),n=ae.lastIndex,i=ae.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function se(e){return"string"==typeof e}function le(e){var r,t;if(!se(e))throw new TypeError(le("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ce(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ne.apply(null,r)}var pe=Object.prototype,ue=pe.toString,fe=pe.__defineGetter__,ge=pe.__defineSetter__,de=pe.__lookupGetter__,he=pe.__lookupSetter__,be=function(){try{return $({},"x",{}),!0}catch(e){return!1}}()?A:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===ue.call(e))throw new TypeError(le("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===ue.call(t))throw new TypeError(le("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(de.call(e,r)||he.call(e,r)?(i=e.__proto__,e.__proto__=pe,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&fe&&fe.call(e,r,t.get),o&&ge&&ge.call(e,r,t.set),e};function we(e,r,t){be(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ye(e){return"number"==typeof e}function me(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var ve=me();function Ee(){return ve&&"symbol"==typeof Symbol.toStringTag}var _e=Object.prototype.toString,Se=Object.prototype.hasOwnProperty;function xe(e,r){return null!=e&&Se.call(e,r)}var ke="function"==typeof Symbol?Symbol:void 0,Te="function"==typeof ke?ke.toStringTag:"",Ve=Ee()?function(e){var r,t,i;if(null==e)return _e.call(e);t=e[Te],r=xe(e,Te);try{e[Te]=void 0}catch(r){return _e.call(e)}return i=_e.call(e),r?e[Te]=t:delete e[Te],i}:function(e){return _e.call(e)},Fe=Number,je=Fe.prototype.toString,Ie=Ee();function $e(e){return"object"==typeof e&&(e instanceof Fe||(Ie?function(e){try{return je.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ve(e)))}function Ae(e){return ye(e)||$e(e)}function Ce(e,r){if(!(this instanceof Ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ye(e))throw new TypeError(le("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ye(r))throw new TypeError(le("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return be(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),be(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}we(Ae,"isPrimitive",ye),we(Ae,"isObject",$e),we(Ce,"BYTES_PER_ELEMENT",8),we(Ce.prototype,"BYTES_PER_ELEMENT",8),we(Ce.prototype,"byteLength",16),we(Ce.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),we(Ce.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Re="function"==typeof Object.defineProperty?Object.defineProperty:null,Oe=Object.defineProperty;function Ne(e){return"number"==typeof e}function Pe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Le(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Pe(n):Pe(n)+e,i&&(e="-"+e)),e}var Ze=String.prototype.toLowerCase,We=String.prototype.toUpperCase;function Ge(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Le(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Le(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===We.call(e.specifier)?We.call(t):Ze.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Me(e){return"string"==typeof e}var Ue=Math.abs,Xe=String.prototype.toLowerCase,Ye=String.prototype.toUpperCase,ze=String.prototype.replace,Be=/e\+(\d)$/,Je=/e-(\d)$/,qe=/^(\d+)$/,De=/^(\d+)e/,He=/\.0$/,Ke=/\.0*e/,Qe=/(\..*[^0])0*e/;function er(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Ue(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ze.call(t,Qe,"$1e"),t=ze.call(t,Ke,"e"),t=ze.call(t,He,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ze.call(t,Be,"e+0$1"),t=ze.call(t,Je,"e-0$1"),e.alternate&&(t=ze.call(t,qe,"$1."),t=ze.call(t,De,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ye.call(e.specifier)?Ye.call(t):Xe.call(t)}function rr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function tr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+rr(i):rr(i)+e}var ir=String.fromCharCode,nr=isNaN,ar=Array.isArray;function or(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function cr(e){var r,t,i,n,a,o,c,s,l;if(!ar(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Me(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=or(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,nr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,nr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ge(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!nr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=nr(a)?String(i.arg):ir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=er(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Le(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=tr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function lr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pr(e){var r,t,i,n;for(t=[],n=0,i=sr.exec(e);i;)(r=e.slice(n,sr.lastIndex-i[0].length)).length&&t.push(r),t.push(lr(i)),n=sr.lastIndex,i=sr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function ur(e){return"string"==typeof e}function fr(e){var r,t;if(!ur(e))throw new TypeError(fr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[pr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return cr.apply(null,r)}var gr=Object.prototype,dr=gr.toString,hr=gr.__defineGetter__,br=gr.__defineSetter__,wr=gr.__lookupGetter__,yr=gr.__lookupSetter__,mr=function(){try{return Re({},"x",{}),!0}catch(e){return!1}}()?Oe:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===dr.call(e))throw new TypeError(fr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===dr.call(t))throw new TypeError(fr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(wr.call(e,r)||yr.call(e,r)?(i=e.__proto__,e.__proto__=gr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&hr&&hr.call(e,r,t.get),o&&br&&br.call(e,r,t.set),e};function vr(e,r,t){mr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Er(e){return"number"==typeof e}var _r=me();function Sr(){return _r&&"symbol"==typeof Symbol.toStringTag}var xr=Object.prototype.toString,kr="function"==typeof Symbol?Symbol:void 0,Tr="function"==typeof kr?kr.toStringTag:"",Vr=Sr()?function(e){var r,t,i;if(null==e)return xr.call(e);t=e[Tr],r=xe(e,Tr);try{e[Tr]=void 0}catch(r){return xr.call(e)}return i=xr.call(e),r?e[Tr]=t:delete e[Tr],i}:function(e){return xr.call(e)},Fr=Number,jr=Fr.prototype.toString,Ir=Sr();function $r(e){return"object"==typeof e&&(e instanceof Fr||(Ir?function(e){try{return jr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Vr(e)))}function Ar(e){return Er(e)||$r(e)}vr(Ar,"isPrimitive",Er),vr(Ar,"isObject",$r);var Cr="function"==typeof Math.fround?Math.fround:null,Rr=me(),Or=Object.prototype.toString,Nr="function"==typeof Symbol?Symbol:void 0,Pr="function"==typeof Nr?Nr.toStringTag:"",Lr=Rr&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return Or.call(e);t=e[Pr],r=xe(e,Pr);try{e[Pr]=void 0}catch(r){return Or.call(e)}return i=Or.call(e),r?e[Pr]=t:delete e[Pr],i}:function(e){return Or.call(e)},Zr="function"==typeof Float32Array,Wr=Number.POSITIVE_INFINITY,Gr="function"==typeof Float32Array?Float32Array:null,Mr="function"==typeof Float32Array?Float32Array:void 0,Ur=new(function(){var e,r,t;if("function"!=typeof Gr)return!1;try{r=new Gr([1,3.14,-3.14,5e40]),t=r,e=(Zr&&t instanceof Float32Array||"[object Float32Array]"===Lr(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Wr}catch(r){e=!1}return e}()?Mr:function(){throw new Error("not implemented")})(1),Xr="function"==typeof Cr?Cr:function(e){return Ur[0]=e,Ur[0]};function Yr(e,r){if(!(this instanceof Yr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Er(e))throw new TypeError(fr("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Er(r))throw new TypeError(fr("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return mr(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Xr(e)}),mr(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Xr(r)}),this}vr(Yr,"BYTES_PER_ELEMENT",4),vr(Yr.prototype,"BYTES_PER_ELEMENT",4),vr(Yr.prototype,"byteLength",8),vr(Yr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),vr(Yr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var zr={float64:Ce,float32:Yr};return function(e,r,t){var i;if(arguments.length>2){if(i=zr[t])return new i(e,r);throw new TypeError(I("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new zr.float64(e,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).complex=r();
//# sourceMappingURL=browser.js.map
