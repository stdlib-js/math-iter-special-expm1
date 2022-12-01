// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterExpm1=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,N=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",I);var x=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function B(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=I.exec(e.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!x(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(V));var G="function"==typeof y||"object"==typeof N||"function"==typeof F?function(t){return B(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?B(t).toLowerCase():r};function k(t){return"function"===G(t)}function C(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&k(t.next)}function L(t){return"number"==typeof t}var M=Number,Y=M.prototype.toString;var R=b();function X(t){return"object"==typeof t&&(t instanceof M||(R?function(t){try{return Y.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function q(t){return L(t)||X(t)}l(q,"isPrimitive",L),l(q,"isObject",X);var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var D,H=Object.getPrototypeOf;D=k(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=D;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!x(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&k(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,i,u;if(!C(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!k(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(i=W(e,n)))throw i;return l(o={},"next",a),l(o,"return",f),z&&k(t[z])&&l(o,z,c),o;function a(){var n;return u?{done:!0}:(n=t.next()).done?(u=!0,n):{value:L(n.value)?r(n.value):e.invalid,done:!1}}function f(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return Z(t[z](),r,e)}}var $="function"==typeof Uint32Array;var tt="function"==typeof Uint32Array?Uint32Array:null;var rt,nt="function"==typeof Uint32Array?Uint32Array:void 0;rt=function(){var t,r,n;if("function"!=typeof tt)return!1;try{r=new tt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=($&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?nt:function(){throw new Error("not implemented")};var et=rt,ot="function"==typeof Float64Array;var it="function"==typeof Float64Array?Float64Array:null;var ut,at="function"==typeof Float64Array?Float64Array:void 0;ut=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it([1,3.14,-3.14,NaN]),n=r,t=(ot&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?at:function(){throw new Error("not implemented")};var ft=ut,ct="function"==typeof Uint8Array;var lt="function"==typeof Uint8Array?Uint8Array:null;var yt,pt="function"==typeof Uint8Array?Uint8Array:void 0;yt=function(){var t,r,n;if("function"!=typeof lt)return!1;try{r=new lt(r=[1,3.14,-3.14,256,257]),n=r,t=(ct&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?pt:function(){throw new Error("not implemented")};var vt=yt,bt="function"==typeof Uint16Array;var st="function"==typeof Uint16Array?Uint16Array:null;var dt,mt="function"==typeof Uint16Array?Uint16Array:void 0;dt=function(){var t,r,n;if("function"!=typeof st)return!1;try{r=new st(r=[1,3.14,-3.14,65536,65537]),n=r,t=(bt&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?mt:function(){throw new Error("not implemented")};var wt,jt={uint16:dt,uint8:vt};(wt=new jt.uint16(1))[0]=4660;var At=52===new jt.uint8(wt.buffer)[0],gt=!0===At?1:0,_t=new ft(1),ht=new et(_t.buffer);function Ot(t){return _t[0]=t,ht[gt]}var Ut=!0===At?1:0,St=new ft(1),Et=new et(St.buffer);function Tt(t,r){return St[0]=t,Et[Ut]=r>>>0,St[0]}var Ft=Number.POSITIVE_INFINITY,Nt=M.NEGATIVE_INFINITY;var Pt=.6931471803691238,It=1.9082149292705877e-10,xt=1.4426950408889634;function Vt(t){var r,n,e,o,i,u,a,f,c,l,y,p;if(t===Ft||function(t){return t!=t}(t))return t;if(t===Nt)return-1;if(0===t)return t;if(t<0?(n=!0,a=-t):(n=!1,a=t),a>=38.816242111356935){if(n)return-1;if(a>=709.782712893384)return Ft}if(i=0|Ot(a),a>.34657359027997264)a<1.0397207708399179?n?(e=t+Pt,o=-It,p=-1):(e=t-Pt,o=It,p=1):(p=n?xt*t-.5:xt*t+.5,e=t-(l=p|=0)*Pt,o=l*It),c=e-(t=e-o)-o;else{if(i<1016070144)return t;p=0}return u=1+(f=t*(r=.5*t))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(f),y=f*((u-(l=3-u*r))/(6-t*l)),0===p?t-(t*y-f):(y=t*(y-c)-c,y-=f,-1===p?.5*(t-y)-.5:1===p?t<-.25?-2*(y-(t+.5)):1+2*(t-y):p<=-2||p>56?(a=Tt(a=1-(y-t),e=Ot(a)+(p<<20)|0))-1:(l=1,p<20?a=(l=Tt(l,e=1072693248-(2097152>>p)|0))-(y-t):(a=t-(y+(l=Tt(l,e=1023-p<<20|0))),a+=1),Tt(a,e=Ot(a)+(p<<20)|0)))}return function(t){return Z(t,Vt)}}));
//# sourceMappingURL=index.js.map
