// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,c,f,l,s,p,y,d,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=O.exec(r);n;)(t=r.slice(o,O.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=O.lastIndex,n=O.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var T,I=Object.prototype,k=I.toString,V=I.__defineGetter__,P=I.__defineSetter__,N=I.__lookupGetter__,$=I.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(N.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&P&&P.call(r,t,e.set),r};var C=T;function G(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var L=/./;function B(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return R&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function M(r,t){return null!=r&&H.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=W()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[Y],t=M(r,Y);try{r[Y]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return Z.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return B(r)||K(r)}G(Q,"isPrimitive",B),G(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof er?er:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!B(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;G(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=fr.exec(n.toString()))return t[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var yr="function"==typeof L||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function dr(r){return"function"===yr(r)}function gr(r){return"number"==typeof r}var vr=Number,br=vr.prototype.toString;var wr=W();function hr(r){return"object"==typeof r&&(r instanceof vr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return gr(r)||hr(r)}G(mr,"isPrimitive",gr),G(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&M(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=dr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=Ar;var Or=Object.prototype;function Ur(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Sr(r))}(r),!t||!M(r,"constructor")&&M(t,"constructor")&&dr(t.constructor)&&"[object Function]"===z(t.constructor)&&M(t,"isPrototypeOf")&&dr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!M(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!dr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!dr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Ur(t)?(M(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return G(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:gr(e.value)?t(e.value):n.invalid,done:!1}})),G(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&dr(r[jr])&&G(o,jr,(function(){return xr(r[jr](),t,n)})),o}var Fr="function"==typeof Uint32Array;var Tr="function"==typeof Uint32Array?Uint32Array:null;var Ir,kr="function"==typeof Uint32Array?Uint32Array:void 0;Ir=function(){var r,t,e;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Fr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Vr=Ir,Pr="function"==typeof Float64Array;var Nr="function"==typeof Float64Array?Float64Array:null;var $r,Cr="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var r,t,e;if("function"!=typeof Nr)return!1;try{t=new Nr([1,3.14,-3.14,NaN]),e=t,r=(Pr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Gr=$r,Lr="function"==typeof Uint8Array;var Br="function"==typeof Uint8Array?Uint8Array:null;var Rr,Wr="function"==typeof Uint8Array?Uint8Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Br)return!1;try{t=new Br(t=[1,3.14,-3.14,256,257]),e=t,r=(Lr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Zr=Rr,Hr="function"==typeof Uint16Array;var Mr="function"==typeof Uint16Array?Uint16Array:null;var Xr,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Xr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Hr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr={uint16:Xr,uint8:Zr};(zr=new qr.uint16(1))[0]=4660;var Dr=52===new qr.uint8(zr.buffer)[0],Jr=!0===Dr?1:0,Kr=new Gr(1),Qr=new Vr(Kr.buffer);function rt(r){return Kr[0]=r,Qr[Jr]}var tt,et,nt=!0===Dr?1:0,ot=new Gr(1),it=new Vr(ot.buffer);function at(r,t){return ot[0]=r,it[nt]=t>>>0,ot[0]}!0===Dr?(tt=1,et=0):(tt=0,et=1);var ut={HIGH:tt,LOW:et},ct=new Gr(1),ft=new Vr(ct.buffer),lt=ut.HIGH,st=ut.LOW;var pt=Number.POSITIVE_INFINITY,yt=vr.NEGATIVE_INFINITY,dt=1023,gt=.34657359027997264;var vt=709.782712893384,bt=.6931471803691238,wt=1.9082149292705877e-10,ht=1.4426950408889634,mt=38.816242111356935,jt=1.0397207708399179;function At(r){var t,e,n,o,i,a,u,c,f,l,s,p,y,d,g;if(r===pt||function(r){return r!=r}(r))return r;if(r===yt)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=mt){if(n)return-1;if(c>=vt)return pt}if(a=0|rt(c),c>gt)c<jt?n?(o=r+bt,i=-wt,y=-1):(o=r-bt,i=wt,y=1):(y=n?ht*r-.5:ht*r+.5,o=r-(s=y|=0)*bt,i=s*wt),l=o-(r=o-i)-i;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(d=dt+y<<20,g=0,ft[lt]=d,ft[st]=g,e=ct[0],p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=at(c,o=rt(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=at(s,o=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=at(s,o=dt-y<<20|0))),c+=1),c*=e))}function _t(r){return xr(r,At)}export{_t as default};
//# sourceMappingURL=mod.js.map
