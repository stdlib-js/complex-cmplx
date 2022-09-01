// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";function t(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&a&&a.call(t,e,r.set),t};function f(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",v=m()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[h],i=h,e=null!=(o=t)&&s.call(o,i);try{t[h]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[h]=r:delete t[h],n}:function(t){return b.call(t)},d=Number,w=d.prototype.toString,_=m();function g(t){return"object"==typeof t&&(t instanceof d||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function E(t){return p(t)||g(t)}function T(t,e){if(!(this instanceof T))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!p(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}f(E,"isPrimitive",p),f(E,"isObject",g),f(T,"BYTES_PER_ELEMENT",8),f(T.prototype,"BYTES_PER_ELEMENT",8),f(T.prototype,"byteLength",16),f(T.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),f(T.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var S="function"==typeof Math.fround?Math.fround:null,j="function"==typeof Float32Array,N=Number.POSITIVE_INFINITY,O="function"==typeof Float32Array?Float32Array:null,P="function"==typeof Float32Array?Float32Array:void 0,A=new(function(){var t,e,r;if("function"!=typeof O)return!1;try{e=new O([1,3.14,-3.14,5e40]),r=e,t=(j&&r instanceof Float32Array||"[object Float32Array]"===v(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===N}catch(e){t=!1}return t}()?P:function(){throw new Error("not implemented")})(1),F="function"==typeof S?S:function(t){return A[0]=t,A[0]};function I(t,e){if(!(this instanceof I))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!p(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:F(t)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:F(e)}),this}f(I,"BYTES_PER_ELEMENT",4),f(I.prototype,"BYTES_PER_ELEMENT",4),f(I.prototype,"byteLength",8),f(I.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),f(I.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var R={float64:T,float32:I};return function(e,r,n){var o;if(arguments.length>2){if(o=R[n])return new o(e,r);throw new TypeError(t("08I2k",n))}return new R.float64(e,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).complex=e();
//# sourceMappingURL=index.js.map
