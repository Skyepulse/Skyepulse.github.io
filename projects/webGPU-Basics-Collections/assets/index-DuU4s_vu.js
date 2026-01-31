(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const pe={},Wt=[],ot=()=>{},Oo=()=>!1,Yn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nr=e=>e.startsWith("onUpdate:"),Ue=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Eo=Object.prototype.hasOwnProperty,ie=(e,t)=>Eo.call(e,t),K=Array.isArray,Ht=e=>Qn(e)==="[object Map]",hs=e=>Qn(e)==="[object Set]",J=e=>typeof e=="function",Ce=e=>typeof e=="string",Ot=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",ds=e=>(Se(e)||J(e))&&J(e.then)&&J(e.catch),ps=Object.prototype.toString,Qn=e=>ps.call(e),_o=e=>Qn(e).slice(8,-1),ms=e=>Qn(e)==="[object Object]",Wr=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cn=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Uo=/-(\w)/g,Ct=Xn(e=>e.replace(Uo,(t,n)=>n?n.toUpperCase():"")),Ro=/\B([A-Z])/g,Et=Xn(e=>e.replace(Ro,"-$1").toLowerCase()),gs=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Xn(e=>e?`on${gs(e)}`:""),Bt=(e,t)=>!Object.is(e,t),lr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Tr=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Io=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let xi;const Kn=()=>xi||(xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ce(r)?zo(r):Jn(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ce(e)||Se(e))return e}const Do=/;(?![^(]*\))/g,Ao=/:([^]+)/,Fo=/\/\*[^]*?\*\//g;function zo(e){const t={};return e.replace(Fo,"").split(Do).forEach(n=>{if(n){const r=n.split(Ao);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zn(e){let t="";if(Ce(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Zn(e[n]);r&&(t+=r+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lo=kr(Go);function vs(e){return!!e||e===""}const ys=e=>!!(e&&e.__v_isRef===!0),Or=e=>Ce(e)?e:e==null?"":K(e)||Se(e)&&(e.toString===ps||!J(e.toString))?ys(e)?Or(e.value):JSON.stringify(e,bs,2):String(e),bs=(e,t)=>ys(t)?bs(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[ur(r,s)+" =>"]=i,n),{})}:hs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ur(n))}:Ot(t)?ur(t):Se(t)&&!K(t)&&!ms(t)?String(t):t,ur=(e,t="")=>{var n;return Ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Vo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function jo(){return Le}let de;const fr=new WeakSet;class xs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fr.has(this)&&(fr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ws(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Si(this),Bs(this);const t=de,n=Qe;de=this,Qe=!0;try{return this.fn()}finally{Cs(this),de=t,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Yr(t);this.deps=this.depsTail=void 0,Si(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Er(this)&&this.run()}get dirty(){return Er(this)}}let Ss=0,ln,un;function ws(e,t=!1){if(e.flags|=8,t){e.next=un,un=e;return}e.next=ln,ln=e}function Hr(){Ss++}function $r(){if(--Ss>0)return;if(un){let t=un;for(un=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ln;){let t=ln;for(ln=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Bs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cs(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Yr(r),ko(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Er(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ps(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ps(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vn)||(e.globalVersion=vn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Er(e))))return;e.flags|=2;const t=e.dep,n=de,r=Qe;de=e,Qe=!0;try{Bs(e);const i=e.fn(e._value);(t.version===0||Bt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{de=n,Qe=r,Cs(e),e.flags&=-3}}function Yr(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Yr(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ko(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qe=!0;const Ms=[];function mt(){Ms.push(Qe),Qe=!1}function gt(){const e=Ms.pop();Qe=e===void 0?!0:e}function Si(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let vn=0;class No{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!Qe||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new No(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Ts(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=r)}return n}trigger(t){this.version++,vn++,this.notify(t)}notify(t){Hr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$r()}}}function Ts(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ts(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const _r=new WeakMap,zt=Symbol(""),Ur=Symbol(""),yn=Symbol("");function Ee(e,t,n){if(Qe&&de){let r=_r.get(e);r||_r.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Qr),i.map=r,i.key=n),i.track()}}function dt(e,t,n,r,i,s){const o=_r.get(e);if(!o){vn++;return}const a=c=>{c&&c.trigger()};if(Hr(),t==="clear")o.forEach(a);else{const c=K(e),f=c&&Wr(n);if(c&&n==="length"){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h===yn||!Ot(h)&&h>=l)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),f&&a(o.get(yn)),t){case"add":c?f&&a(o.get("length")):(a(o.get(zt)),Ht(e)&&a(o.get(Ur)));break;case"delete":c||(a(o.get(zt)),Ht(e)&&a(o.get(Ur)));break;case"set":Ht(e)&&a(o.get(zt));break}}$r()}function Lt(e){const t=re(e);return t===e?t:(Ee(t,"iterate",yn),$e(e)?t:t.map(Me))}function er(e){return Ee(e=re(e),"iterate",yn),e}const qo={__proto__:null,[Symbol.iterator](){return hr(this,Symbol.iterator,Me)},concat(...e){return Lt(this).concat(...e.map(t=>K(t)?Lt(t):t))},entries(){return hr(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(Me),arguments)},find(e,t){return ct(this,"find",e,t,Me,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return dr(this,"includes",e)},indexOf(...e){return dr(this,"indexOf",e)},join(e){return Lt(this).join(e)},lastIndexOf(...e){return dr(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return nn(this,"pop")},push(...e){return nn(this,"push",e)},reduce(e,...t){return wi(this,"reduce",e,t)},reduceRight(e,...t){return wi(this,"reduceRight",e,t)},shift(){return nn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return nn(this,"splice",e)},toReversed(){return Lt(this).toReversed()},toSorted(e){return Lt(this).toSorted(e)},toSpliced(...e){return Lt(this).toSpliced(...e)},unshift(...e){return nn(this,"unshift",e)},values(){return hr(this,"values",Me)}};function hr(e,t,n){const r=er(e),i=r[t]();return r!==e&&!$e(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Wo=Array.prototype;function ct(e,t,n,r,i,s){const o=er(e),a=o!==e&&!$e(e),c=o[t];if(c!==Wo[t]){const u=c.apply(e,s);return a?Me(u):u}let f=n;o!==e&&(a?f=function(u,h){return n.call(this,Me(u),h,e)}:n.length>2&&(f=function(u,h){return n.call(this,u,h,e)}));const l=c.call(o,f,r);return a&&i?i(l):l}function wi(e,t,n,r){const i=er(e);let s=n;return i!==e&&($e(e)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,e)}):s=function(o,a,c){return n.call(this,o,Me(a),c,e)}),i[t](s,...r)}function dr(e,t,n){const r=re(e);Ee(r,"iterate",yn);const i=r[t](...n);return(i===-1||i===!1)&&Zr(n[0])?(n[0]=re(n[0]),r[t](...n)):i}function nn(e,t,n=[]){mt(),Hr();const r=re(e)[t].apply(e,n);return $r(),gt(),r}const Ho=kr("__proto__,__v_isRef,__isVue"),Os=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ot));function $o(e){Ot(e)||(e=String(e));const t=re(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Es{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?ra:Is:s?Rs:Us).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!i){let c;if(o&&(c=qo[n]))return c;if(n==="hasOwnProperty")return $o}const a=Reflect.get(t,n,_e(t)?t:r);return(Ot(n)?Os.has(n):Ho(n))||(i||Ee(t,"get",n),s)?a:_e(a)?o&&Wr(n)?a:a.value:Se(a)?i?Ds(a):Kr(a):a}}class _s extends Es{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=Pt(s);if(!$e(r)&&!Pt(r)&&(s=re(s),r=re(r)),!K(t)&&_e(s)&&!_e(r))return c?!1:(s.value=r,!0)}const o=K(t)&&Wr(n)?Number(n)<t.length:ie(t,n),a=Reflect.set(t,n,r,_e(t)?t:i);return t===re(i)&&(o?Bt(r,s)&&dt(t,"set",n,r):dt(t,"add",n,r)),a}deleteProperty(t,n){const r=ie(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&dt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ot(n)||!Os.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",K(t)?"length":zt),Reflect.ownKeys(t)}}class Yo extends Es{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qo=new _s,Xo=new Yo,Ko=new _s(!0);const Rr=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Jo(e,t,n){return function(...r){const i=this.__v_raw,s=re(i),o=Ht(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,f=i[e](...r),l=n?Rr:t?Gn:Me;return!t&&Ee(s,"iterate",c?Ur:zt),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:a?[l(u[0]),l(u[1])]:l(u),done:h}},[Symbol.iterator](){return this}}}}function Mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Zo(e,t){const n={get(i){const s=this.__v_raw,o=re(s),a=re(i);e||(Bt(i,a)&&Ee(o,"get",i),Ee(o,"get",a));const{has:c}=Pn(o),f=t?Rr:e?Gn:Me;if(c.call(o,i))return f(s.get(i));if(c.call(o,a))return f(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(re(i),"iterate",zt),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=re(s),a=re(i);return e||(Bt(i,a)&&Ee(o,"has",i),Ee(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,c=re(a),f=t?Rr:e?Gn:Me;return!e&&Ee(c,"iterate",zt),a.forEach((l,u)=>i.call(s,f(l),f(u),o))}};return Ue(n,e?{add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear")}:{add(i){!t&&!$e(i)&&!Pt(i)&&(i=re(i));const s=re(this);return Pn(s).has.call(s,i)||(s.add(i),dt(s,"add",i,i)),this},set(i,s){!t&&!$e(s)&&!Pt(s)&&(s=re(s));const o=re(this),{has:a,get:c}=Pn(o);let f=a.call(o,i);f||(i=re(i),f=a.call(o,i));const l=c.call(o,i);return o.set(i,s),f?Bt(s,l)&&dt(o,"set",i,s):dt(o,"add",i,s),this},delete(i){const s=re(this),{has:o,get:a}=Pn(s);let c=o.call(s,i);c||(i=re(i),c=o.call(s,i)),a&&a.call(s,i);const f=s.delete(i);return c&&dt(s,"delete",i,void 0),f},clear(){const i=re(this),s=i.size!==0,o=i.clear();return s&&dt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Jo(i,e,t)}),n}function Xr(e,t){const n=Zo(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ie(n,i)&&i in r?n:r,i,s)}const ea={get:Xr(!1,!1)},ta={get:Xr(!1,!0)},na={get:Xr(!0,!1)};const Us=new WeakMap,Rs=new WeakMap,Is=new WeakMap,ra=new WeakMap;function ia(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sa(e){return e.__v_skip||!Object.isExtensible(e)?0:ia(_o(e))}function Kr(e){return Pt(e)?e:Jr(e,!1,Qo,ea,Us)}function oa(e){return Jr(e,!1,Ko,ta,Rs)}function Ds(e){return Jr(e,!0,Xo,na,Is)}function Jr(e,t,n,r,i){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=sa(e);if(s===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function $t(e){return Pt(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function Zr(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function aa(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Tr(e,"__v_skip",!0),e}const Me=e=>Se(e)?Kr(e):e,Gn=e=>Se(e)?Ds(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function Vt(e){return ca(e,!1)}function ca(e,t){return _e(e)?e:new la(e,t)}class la{constructor(t,n){this.dep=new Qr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Me(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||$e(t)||Pt(t);t=r?t:re(t),Bt(t,n)&&(this._rawValue=t,this._value=r?t:Me(t),this.dep.trigger())}}function As(e){return _e(e)?e.value:e}const ua={get:(e,t,n)=>t==="__v_raw"?e:As(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Fs(e){return $t(e)?e:new Proxy(e,ua)}class fa{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Qr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return ws(this,!0),!0}get value(){const t=this.dep.track();return Ps(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ha(e,t,n=!1){let r,i;return J(e)?r=e:(r=e.get,i=e.set),new fa(r,i,n)}const Tn={},Ln=new WeakMap;let Dt;function da(e,t=!1,n=Dt){if(n){let r=Ln.get(n);r||Ln.set(n,r=[]),r.push(e)}}function pa(e,t,n=pe){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=n,f=S=>i?S:$e(S)||i===!1||i===0?wt(S,1):wt(S);let l,u,h,m,d=!1,v=!1;if(_e(e)?(u=()=>e.value,d=$e(e)):$t(e)?(u=()=>f(e),d=!0):K(e)?(v=!0,d=e.some(S=>$t(S)||$e(S)),u=()=>e.map(S=>{if(_e(S))return S.value;if($t(S))return f(S);if(J(S))return c?c(S,2):S()})):J(e)?t?u=c?()=>c(e,2):e:u=()=>{if(h){mt();try{h()}finally{gt()}}const S=Dt;Dt=l;try{return c?c(e,3,[m]):e(m)}finally{Dt=S}}:u=ot,t&&i){const S=u,E=i===!0?1/0:i;u=()=>wt(S(),E)}const x=jo(),b=()=>{l.stop(),x&&x.active&&qr(x.effects,l)};if(s&&t){const S=t;t=(...E)=>{S(...E),b()}}let y=v?new Array(e.length).fill(Tn):Tn;const B=S=>{if(!(!(l.flags&1)||!l.dirty&&!S))if(t){const E=l.run();if(i||d||(v?E.some((_,R)=>Bt(_,y[R])):Bt(E,y))){h&&h();const _=Dt;Dt=l;try{const R=[E,y===Tn?void 0:v&&y[0]===Tn?[]:y,m];y=E,c?c(t,3,R):t(...R)}finally{Dt=_}}}else l.run()};return a&&a(B),l=new xs(u),l.scheduler=o?()=>o(B,!1):B,m=S=>da(S,!1,l),h=l.onStop=()=>{const S=Ln.get(l);if(S){if(c)c(S,4);else for(const E of S)E();Ln.delete(l)}},t?r?B(!0):y=l.run():o?o(B.bind(null,!0),!0):l.run(),b.pause=l.pause.bind(l),b.resume=l.resume.bind(l),b.stop=b,b}function wt(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,_e(e))wt(e.value,t,n);else if(K(e))for(let r=0;r<e.length;r++)wt(e[r],t,n);else if(hs(e)||Ht(e))e.forEach(r=>{wt(r,t,n)});else if(ms(e)){for(const r in e)wt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&wt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bn(e,t,n,r){try{return r?e(...r):e()}catch(i){tr(i,t,n)}}function at(e,t,n,r){if(J(e)){const i=Bn(e,t,n,r);return i&&ds(i)&&i.catch(s=>{tr(s,t,n)}),i}if(K(e)){const i=[];for(let s=0;s<e.length;s++)i.push(at(e[s],t,n,r));return i}}function tr(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let a=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,c,f)===!1)return}a=a.parent}if(s){mt(),Bn(s,null,10,[e,c,f]),gt();return}}ma(e,n,i,r,o)}function ma(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const Ie=[];let tt=-1;const Yt=[];let xt=null,kt=0;const zs=Promise.resolve();let Vn=null;function ga(e){const t=Vn||zs;return e?t.then(this?e.bind(this):e):t}function va(e){let t=tt+1,n=Ie.length;for(;t<n;){const r=t+n>>>1,i=Ie[r],s=bn(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function ei(e){if(!(e.flags&1)){const t=bn(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=bn(n)?Ie.push(e):Ie.splice(va(t),0,e),e.flags|=1,Gs()}}function Gs(){Vn||(Vn=zs.then(Vs))}function ya(e){K(e)?Yt.push(...e):xt&&e.id===-1?xt.splice(kt+1,0,e):e.flags&1||(Yt.push(e),e.flags|=1),Gs()}function Bi(e,t,n=tt+1){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ls(e){if(Yt.length){const t=[...new Set(Yt)].sort((n,r)=>bn(n)-bn(r));if(Yt.length=0,xt){xt.push(...t);return}for(xt=t,kt=0;kt<xt.length;kt++){const n=xt[kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xt=null,kt=0}}const bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Vs(e){try{for(tt=0;tt<Ie.length;tt++){const t=Ie[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Ie.length;tt++){const t=Ie[tt];t&&(t.flags&=-2)}tt=-1,Ie.length=0,Ls(),Vn=null,(Ie.length||Yt.length)&&Vs()}}let st=null,js=null;function jn(e){const t=st;return st=e,js=e&&e.type.__scopeId||null,t}function ba(e,t=st,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ri(-1);const s=jn(t);let o;try{o=e(...i)}finally{jn(s),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ut(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(mt(),at(c,n,8,[e.el,a,e,t]),gt())}}const xa=Symbol("_vte"),Sa=e=>e.__isTeleport;function ti(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ti(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function wa(e,t){return J(e)?Ue({name:e.name},t,{setup:e}):e}function ks(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function fn(e,t,n,r,i=!1){if(K(e)){e.forEach((d,v)=>fn(d,t&&(K(t)?t[v]:t),n,r,i));return}if(hn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?si(r.component):r.el,o=i?null:s,{i:a,r:c}=e,f=t&&t.r,l=a.refs===pe?a.refs={}:a.refs,u=a.setupState,h=re(u),m=u===pe?()=>!1:d=>ie(h,d);if(f!=null&&f!==c&&(Ce(f)?(l[f]=null,m(f)&&(u[f]=null)):_e(f)&&(f.value=null)),J(c))Bn(c,a,12,[o,l]);else{const d=Ce(c),v=_e(c);if(d||v){const x=()=>{if(e.f){const b=d?m(c)?u[c]:l[c]:c.value;i?K(b)&&qr(b,s):K(b)?b.includes(s)||b.push(s):d?(l[c]=[s],m(c)&&(u[c]=l[c])):(c.value=[s],e.k&&(l[e.k]=c.value))}else d?(l[c]=o,m(c)&&(u[c]=o)):v&&(c.value=o,e.k&&(l[e.k]=o))};o?(x.id=-1,qe(x,n)):x()}}}Kn().requestIdleCallback;Kn().cancelIdleCallback;const hn=e=>!!e.type.__asyncLoader,Ns=e=>e.type.__isKeepAlive;function Ba(e,t){qs(e,"a",t)}function Ca(e,t){qs(e,"da",t)}function qs(e,t,n=De){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(nr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ns(i.parent.vnode)&&Pa(r,t,n,i),i=i.parent}}function Pa(e,t,n,r){const i=nr(t,e,r,!0);Hs(()=>{qr(r[t],i)},n)}function nr(e,t,n=De,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{mt();const a=Cn(n),c=at(t,n,e,o);return a(),gt(),c});return r?i.unshift(s):i.push(s),s}}const vt=e=>(t,n=De)=>{(!Sn||e==="sp")&&nr(e,(...r)=>t(...r),n)},Ma=vt("bm"),Ws=vt("m"),Ta=vt("bu"),Oa=vt("u"),Ea=vt("bum"),Hs=vt("um"),_a=vt("sp"),Ua=vt("rtg"),Ra=vt("rtc");function Ia(e,t=De){nr("ec",e,t)}const Da=Symbol.for("v-ndc");function Aa(e,t,n,r){let i;const s=n,o=K(e);if(o||Ce(e)){const a=o&&$t(e);let c=!1,f=!1;a&&(c=!$e(e),f=Pt(e),e=er(e)),i=new Array(e.length);for(let l=0,u=e.length;l<u;l++)i[l]=t(c?f?Gn(Me(e[l])):Me(e[l]):e[l],l,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s)}else if(Se(e))if(e[Symbol.iterator])i=Array.from(e,(a,c)=>t(a,c,void 0,s));else{const a=Object.keys(e);i=new Array(a.length);for(let c=0,f=a.length;c<f;c++){const l=a[c];i[c]=t(e[l],l,c,s)}}else i=[];return i}const Ir=e=>e?ho(e)?si(e):Ir(e.parent):null,dn=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ys(e),$forceUpdate:e=>e.f||(e.f=()=>{ei(e.update)}),$nextTick:e=>e.n||(e.n=ga.bind(e.proxy)),$watch:e=>rc.bind(e)}),pr=(e,t)=>e!==pe&&!e.__isScriptSetup&&ie(e,t),Fa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(pr(r,t))return o[t]=1,r[t];if(i!==pe&&ie(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&ie(f,t))return o[t]=3,s[t];if(n!==pe&&ie(n,t))return o[t]=4,n[t];Dr&&(o[t]=0)}}const l=dn[t];let u,h;if(l)return t==="$attrs"&&Ee(e.attrs,"get",""),l(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==pe&&ie(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,ie(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return pr(i,t)?(i[t]=n,!0):r!==pe&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==pe&&ie(e,o)||pr(t,o)||(a=s[0])&&ie(a,o)||ie(r,o)||ie(dn,o)||ie(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ci(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dr=!0;function za(e){const t=Ys(e),n=e.proxy,r=e.ctx;Dr=!1,t.beforeCreate&&Pi(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:f,created:l,beforeMount:u,mounted:h,beforeUpdate:m,updated:d,activated:v,deactivated:x,beforeDestroy:b,beforeUnmount:y,destroyed:B,unmounted:S,render:E,renderTracked:_,renderTriggered:R,errorCaptured:M,serverPrefetch:F,expose:G,inheritAttrs:W,components:Y,directives:L,filters:Q}=t;if(f&&Ga(f,r,null),o)for(const V in o){const z=o[V];J(z)&&(r[V]=z.bind(n))}if(i){const V=i.call(n,n);Se(V)&&(e.data=Kr(V))}if(Dr=!0,s)for(const V in s){const z=s[V],le=J(z)?z.bind(n,n):J(z.get)?z.get.bind(n,n):ot,me=!J(z)&&J(z.set)?z.set.bind(n):ot,Z=Gr({get:le,set:me});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Z.value,set:te=>Z.value=te})}if(a)for(const V in a)$s(a[V],r,n,V);if(c){const V=J(c)?c.call(n):c;Reflect.ownKeys(V).forEach(z=>{qa(z,V[z])})}l&&Pi(l,e,"c");function k(V,z){K(z)?z.forEach(le=>V(le.bind(n))):z&&V(z.bind(n))}if(k(Ma,u),k(Ws,h),k(Ta,m),k(Oa,d),k(Ba,v),k(Ca,x),k(Ia,M),k(Ra,_),k(Ua,R),k(Ea,y),k(Hs,S),k(_a,F),K(G))if(G.length){const V=e.exposed||(e.exposed={});G.forEach(z=>{Object.defineProperty(V,z,{get:()=>n[z],set:le=>n[z]=le,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===ot&&(e.render=E),W!=null&&(e.inheritAttrs=W),Y&&(e.components=Y),L&&(e.directives=L),F&&ks(e)}function Ga(e,t,n=ot){K(e)&&(e=Ar(e));for(const r in e){const i=e[r];let s;Se(i)?"default"in i?s=Rn(i.from||r,i.default,!0):s=Rn(i.from||r):s=Rn(i),_e(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Pi(e,t,n){at(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $s(e,t,n,r){let i=r.includes(".")?ao(n,r):()=>n[r];if(Ce(e)){const s=t[e];J(s)&&gr(i,s)}else if(J(e))gr(i,e.bind(n));else if(Se(e))if(K(e))e.forEach(s=>$s(s,t,n,r));else{const s=J(e.handler)?e.handler.bind(n):t[e.handler];J(s)&&gr(i,s,e)}}function Ys(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(f=>kn(c,f,o,!0)),kn(c,t,o)),Se(t)&&s.set(t,c),c}function kn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&kn(e,s,n,!0),i&&i.forEach(o=>kn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=La[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const La={data:Mi,props:Ti,emits:Ti,methods:on,computed:on,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:on,directives:on,watch:ja,provide:Mi,inject:Va};function Mi(e,t){return t?e?function(){return Ue(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function Va(e,t){return on(Ar(e),Ar(t))}function Ar(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?Ue(Object.create(null),e,t):t}function Ti(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Ue(Object.create(null),Ci(e),Ci(t??{})):t}function ja(e,t){if(!e)return t;if(!t)return e;const n=Ue(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function Qs(){return{app:null,config:{isNativeTag:Oo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ka=0;function Na(e,t){return function(r,i=null){J(r)||(r=Ue({},r)),i!=null&&!Se(i)&&(i=null);const s=Qs(),o=new WeakSet,a=[];let c=!1;const f=s.app={_uid:ka++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Mc,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(f,...u)):J(l)&&(o.add(l),l(f,...u))),f},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),f},component(l,u){return u?(s.components[l]=u,f):s.components[l]},directive(l,u){return u?(s.directives[l]=u,f):s.directives[l]},mount(l,u,h){if(!c){const m=f._ceVNode||Gt(r,i);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(m,l,h),c=!0,f._container=l,l.__vue_app__=f,si(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(at(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(l,u){return s.provides[l]=u,f},runWithContext(l){const u=Qt;Qt=f;try{return l()}finally{Qt=u}}};return f}}let Qt=null;function qa(e,t){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[e]=t}}function Rn(e,t,n=!1){const r=xc();if(r||Qt){let i=Qt?Qt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}const Xs={},Ks=()=>Object.create(Xs),Js=e=>Object.getPrototypeOf(e)===Xs;function Wa(e,t,n,r=!1){const i={},s=Ks();e.propsDefaults=Object.create(null),Zs(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:oa(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Ha(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=re(i),[c]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let u=0;u<l.length;u++){let h=l[u];if(rr(e.emitsOptions,h))continue;const m=t[h];if(c)if(ie(s,h))m!==s[h]&&(s[h]=m,f=!0);else{const d=Ct(h);i[d]=Fr(c,a,d,m,e,!1)}else m!==s[h]&&(s[h]=m,f=!0)}}}else{Zs(e,t,i,s)&&(f=!0);let l;for(const u in a)(!t||!ie(t,u)&&((l=Et(u))===u||!ie(t,l)))&&(c?n&&(n[u]!==void 0||n[l]!==void 0)&&(i[u]=Fr(c,a,u,void 0,e,!0)):delete i[u]);if(s!==a)for(const u in s)(!t||!ie(t,u))&&(delete s[u],f=!0)}f&&dt(e.attrs,"set","")}function Zs(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(cn(c))continue;const f=t[c];let l;i&&ie(i,l=Ct(c))?!s||!s.includes(l)?n[l]=f:(a||(a={}))[l]=f:rr(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(s){const c=re(n),f=a||pe;for(let l=0;l<s.length;l++){const u=s[l];n[u]=Fr(i,c,u,f[u],e,!ie(f,u))}}return o}function Fr(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const l=Cn(i);r=f[n]=c.call(null,t),l()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Et(n))&&(r=!0))}return r}const $a=new WeakMap;function eo(e,t,n=!1){const r=n?$a:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!J(e)){const l=u=>{c=!0;const[h,m]=eo(u,t,!0);Ue(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!c)return Se(e)&&r.set(e,Wt),Wt;if(K(s))for(let l=0;l<s.length;l++){const u=Ct(s[l]);Oi(u)&&(o[u]=pe)}else if(s)for(const l in s){const u=Ct(l);if(Oi(u)){const h=s[l],m=o[u]=K(h)||J(h)?{type:h}:Ue({},h),d=m.type;let v=!1,x=!0;if(K(d))for(let b=0;b<d.length;++b){const y=d[b],B=J(y)&&y.name;if(B==="Boolean"){v=!0;break}else B==="String"&&(x=!1)}else v=J(d)&&d.name==="Boolean";m[0]=v,m[1]=x,(v||ie(m,"default"))&&a.push(u)}}const f=[o,a];return Se(e)&&r.set(e,f),f}function Oi(e){return e[0]!=="$"&&!cn(e)}const ni=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",ri=e=>K(e)?e.map(it):[it(e)],Ya=(e,t,n)=>{if(t._n)return t;const r=ba((...i)=>ri(t(...i)),n);return r._c=!1,r},to=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ni(i))continue;const s=e[i];if(J(s))t[i]=Ya(i,s,r);else if(s!=null){const o=ri(s);t[i]=()=>o}}},no=(e,t)=>{const n=ri(t);e.slots.default=()=>n},ro=(e,t,n)=>{for(const r in t)(n||!ni(r))&&(e[r]=t[r])},Qa=(e,t,n)=>{const r=e.slots=Ks();if(e.vnode.shapeFlag&32){const i=t.__;i&&Tr(r,"__",i,!0);const s=t._;s?(ro(r,t,n),n&&Tr(r,"_",s,!0)):to(t,r)}else t&&no(e,t)},Xa=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=pe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:ro(i,t,n):(s=!t.$stable,to(t,i)),o=t}else t&&(no(e,t),o={default:1});if(s)for(const a in i)!ni(a)&&o[a]==null&&delete i[a]},qe=uc;function Ka(e){return Ja(e)}function Ja(e,t){const n=Kn();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:f,setElementText:l,parentNode:u,nextSibling:h,setScopeId:m=ot,insertStaticContent:d}=e,v=(p,g,w,T=null,C=null,P=null,D=void 0,I=null,U=!!g.dynamicChildren)=>{if(p===g)return;p&&!rn(p,g)&&(T=we(p),te(p,C,P,!0),p=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:O,ref:H,shapeFlag:A}=g;switch(O){case ir:x(p,g,w,T);break;case Kt:b(p,g,w,T);break;case vr:p==null&&y(g,w,T,D);break;case rt:Y(p,g,w,T,C,P,D,I,U);break;default:A&1?E(p,g,w,T,C,P,D,I,U):A&6?L(p,g,w,T,C,P,D,I,U):(A&64||A&128)&&O.process(p,g,w,T,C,P,D,I,U,ue)}H!=null&&C?fn(H,p&&p.ref,P,g||p,!g):H==null&&p&&p.ref!=null&&fn(p.ref,null,P,p,!0)},x=(p,g,w,T)=>{if(p==null)r(g.el=a(g.children),w,T);else{const C=g.el=p.el;g.children!==p.children&&f(C,g.children)}},b=(p,g,w,T)=>{p==null?r(g.el=c(g.children||""),w,T):g.el=p.el},y=(p,g,w,T)=>{[p.el,p.anchor]=d(p.children,g,w,T,p.el,p.anchor)},B=({el:p,anchor:g},w,T)=>{let C;for(;p&&p!==g;)C=h(p),r(p,w,T),p=C;r(g,w,T)},S=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=h(p),i(p),p=w;i(g)},E=(p,g,w,T,C,P,D,I,U)=>{g.type==="svg"?D="svg":g.type==="math"&&(D="mathml"),p==null?_(g,w,T,C,P,D,I,U):F(p,g,C,P,D,I,U)},_=(p,g,w,T,C,P,D,I)=>{let U,O;const{props:H,shapeFlag:A,transition:N,dirs:X}=p;if(U=p.el=o(p.type,P,H&&H.is,H),A&8?l(U,p.children):A&16&&M(p.children,U,null,T,C,mr(p,P),D,I),X&&Ut(p,null,T,"created"),R(U,p,p.scopeId,D,T),H){for(const he in H)he!=="value"&&!cn(he)&&s(U,he,null,H[he],P,T);"value"in H&&s(U,"value",null,H.value,P),(O=H.onVnodeBeforeMount)&&Ze(O,T,p)}X&&Ut(p,null,T,"beforeMount");const ee=Za(C,N);ee&&N.beforeEnter(U),r(U,g,w),((O=H&&H.onVnodeMounted)||ee||X)&&qe(()=>{O&&Ze(O,T,p),ee&&N.enter(U),X&&Ut(p,null,T,"mounted")},C)},R=(p,g,w,T,C)=>{if(w&&m(p,w),T)for(let P=0;P<T.length;P++)m(p,T[P]);if(C){let P=C.subTree;if(g===P||lo(P.type)&&(P.ssContent===g||P.ssFallback===g)){const D=C.vnode;R(p,D,D.scopeId,D.slotScopeIds,C.parent)}}},M=(p,g,w,T,C,P,D,I,U=0)=>{for(let O=U;O<p.length;O++){const H=p[O]=I?St(p[O]):it(p[O]);v(null,H,g,w,T,C,P,D,I)}},F=(p,g,w,T,C,P,D)=>{const I=g.el=p.el;let{patchFlag:U,dynamicChildren:O,dirs:H}=g;U|=p.patchFlag&16;const A=p.props||pe,N=g.props||pe;let X;if(w&&Rt(w,!1),(X=N.onVnodeBeforeUpdate)&&Ze(X,w,g,p),H&&Ut(g,p,w,"beforeUpdate"),w&&Rt(w,!0),(A.innerHTML&&N.innerHTML==null||A.textContent&&N.textContent==null)&&l(I,""),O?G(p.dynamicChildren,O,I,w,T,mr(g,C),P):D||z(p,g,I,null,w,T,mr(g,C),P,!1),U>0){if(U&16)W(I,A,N,w,C);else if(U&2&&A.class!==N.class&&s(I,"class",null,N.class,C),U&4&&s(I,"style",A.style,N.style,C),U&8){const ee=g.dynamicProps;for(let he=0;he<ee.length;he++){const ae=ee[he],Fe=A[ae],ze=N[ae];(ze!==Fe||ae==="value")&&s(I,ae,Fe,ze,C,w)}}U&1&&p.children!==g.children&&l(I,g.children)}else!D&&O==null&&W(I,A,N,w,C);((X=N.onVnodeUpdated)||H)&&qe(()=>{X&&Ze(X,w,g,p),H&&Ut(g,p,w,"updated")},T)},G=(p,g,w,T,C,P,D)=>{for(let I=0;I<g.length;I++){const U=p[I],O=g[I],H=U.el&&(U.type===rt||!rn(U,O)||U.shapeFlag&198)?u(U.el):w;v(U,O,H,null,T,C,P,D,!0)}},W=(p,g,w,T,C)=>{if(g!==w){if(g!==pe)for(const P in g)!cn(P)&&!(P in w)&&s(p,P,g[P],null,C,T);for(const P in w){if(cn(P))continue;const D=w[P],I=g[P];D!==I&&P!=="value"&&s(p,P,I,D,C,T)}"value"in w&&s(p,"value",g.value,w.value,C)}},Y=(p,g,w,T,C,P,D,I,U)=>{const O=g.el=p?p.el:a(""),H=g.anchor=p?p.anchor:a("");let{patchFlag:A,dynamicChildren:N,slotScopeIds:X}=g;X&&(I=I?I.concat(X):X),p==null?(r(O,w,T),r(H,w,T),M(g.children||[],w,H,C,P,D,I,U)):A>0&&A&64&&N&&p.dynamicChildren?(G(p.dynamicChildren,N,w,C,P,D,I),(g.key!=null||C&&g===C.subTree)&&io(p,g,!0)):z(p,g,w,H,C,P,D,I,U)},L=(p,g,w,T,C,P,D,I,U)=>{g.slotScopeIds=I,p==null?g.shapeFlag&512?C.ctx.activate(g,w,T,D,U):Q(g,w,T,C,P,D,U):$(p,g,U)},Q=(p,g,w,T,C,P,D)=>{const I=p.component=bc(p,T,C);if(Ns(p)&&(I.ctx.renderer=ue),Sc(I,!1,D),I.asyncDep){if(C&&C.registerDep(I,k,D),!p.el){const U=I.subTree=Gt(Kt);b(null,U,g,w),p.placeholder=U.el}}else k(I,p,g,w,C,P,D)},$=(p,g,w)=>{const T=g.component=p.component;if(cc(p,g,w))if(T.asyncDep&&!T.asyncResolved){V(T,g,w);return}else T.next=g,T.update();else g.el=p.el,T.vnode=g},k=(p,g,w,T,C,P,D)=>{const I=()=>{if(p.isMounted){let{next:A,bu:N,u:X,parent:ee,vnode:he}=p;{const Ke=so(p);if(Ke){A&&(A.el=he.el,V(p,A,D)),Ke.asyncDep.then(()=>{p.isUnmounted||I()});return}}let ae=A,Fe;Rt(p,!1),A?(A.el=he.el,V(p,A,D)):A=he,N&&lr(N),(Fe=A.props&&A.props.onVnodeBeforeUpdate)&&Ze(Fe,ee,A,he),Rt(p,!0);const ze=_i(p),Xe=p.subTree;p.subTree=ze,v(Xe,ze,u(Xe.el),we(Xe),p,C,P),A.el=ze.el,ae===null&&lc(p,ze.el),X&&qe(X,C),(Fe=A.props&&A.props.onVnodeUpdated)&&qe(()=>Ze(Fe,ee,A,he),C)}else{let A;const{el:N,props:X}=g,{bm:ee,m:he,parent:ae,root:Fe,type:ze}=p,Xe=hn(g);Rt(p,!1),ee&&lr(ee),!Xe&&(A=X&&X.onVnodeBeforeMount)&&Ze(A,ae,g),Rt(p,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(ze);const Ke=p.subTree=_i(p);v(null,Ke,w,T,p,C,P),g.el=Ke.el}if(he&&qe(he,C),!Xe&&(A=X&&X.onVnodeMounted)){const Ke=g;qe(()=>Ze(A,ae,Ke),C)}(g.shapeFlag&256||ae&&hn(ae.vnode)&&ae.vnode.shapeFlag&256)&&p.a&&qe(p.a,C),p.isMounted=!0,g=w=T=null}};p.scope.on();const U=p.effect=new xs(I);p.scope.off();const O=p.update=U.run.bind(U),H=p.job=U.runIfDirty.bind(U);H.i=p,H.id=p.uid,U.scheduler=()=>ei(H),Rt(p,!0),O()},V=(p,g,w)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,Ha(p,g.props,T,w),Xa(p,g.children,w),mt(),Bi(p),gt()},z=(p,g,w,T,C,P,D,I,U=!1)=>{const O=p&&p.children,H=p?p.shapeFlag:0,A=g.children,{patchFlag:N,shapeFlag:X}=g;if(N>0){if(N&128){me(O,A,w,T,C,P,D,I,U);return}else if(N&256){le(O,A,w,T,C,P,D,I,U);return}}X&8?(H&16&&xe(O,C,P),A!==O&&l(w,A)):H&16?X&16?me(O,A,w,T,C,P,D,I,U):xe(O,C,P,!0):(H&8&&l(w,""),X&16&&M(A,w,T,C,P,D,I,U))},le=(p,g,w,T,C,P,D,I,U)=>{p=p||Wt,g=g||Wt;const O=p.length,H=g.length,A=Math.min(O,H);let N;for(N=0;N<A;N++){const X=g[N]=U?St(g[N]):it(g[N]);v(p[N],X,w,null,C,P,D,I,U)}O>H?xe(p,C,P,!0,!1,A):M(g,w,T,C,P,D,I,U,A)},me=(p,g,w,T,C,P,D,I,U)=>{let O=0;const H=g.length;let A=p.length-1,N=H-1;for(;O<=A&&O<=N;){const X=p[O],ee=g[O]=U?St(g[O]):it(g[O]);if(rn(X,ee))v(X,ee,w,null,C,P,D,I,U);else break;O++}for(;O<=A&&O<=N;){const X=p[A],ee=g[N]=U?St(g[N]):it(g[N]);if(rn(X,ee))v(X,ee,w,null,C,P,D,I,U);else break;A--,N--}if(O>A){if(O<=N){const X=N+1,ee=X<H?g[X].el:T;for(;O<=N;)v(null,g[O]=U?St(g[O]):it(g[O]),w,ee,C,P,D,I,U),O++}}else if(O>N)for(;O<=A;)te(p[O],C,P,!0),O++;else{const X=O,ee=O,he=new Map;for(O=ee;O<=N;O++){const ke=g[O]=U?St(g[O]):it(g[O]);ke.key!=null&&he.set(ke.key,O)}let ae,Fe=0;const ze=N-ee+1;let Xe=!1,Ke=0;const tn=new Array(ze);for(O=0;O<ze;O++)tn[O]=0;for(O=X;O<=A;O++){const ke=p[O];if(Fe>=ze){te(ke,C,P,!0);continue}let Je;if(ke.key!=null)Je=he.get(ke.key);else for(ae=ee;ae<=N;ae++)if(tn[ae-ee]===0&&rn(ke,g[ae])){Je=ae;break}Je===void 0?te(ke,C,P,!0):(tn[Je-ee]=O+1,Je>=Ke?Ke=Je:Xe=!0,v(ke,g[Je],w,null,C,P,D,I,U),Fe++)}const vi=Xe?ec(tn):Wt;for(ae=vi.length-1,O=ze-1;O>=0;O--){const ke=ee+O,Je=g[ke],yi=g[ke+1],bi=ke+1<H?yi.el||yi.placeholder:T;tn[O]===0?v(null,Je,w,bi,C,P,D,I,U):Xe&&(ae<0||O!==vi[ae]?Z(Je,w,bi,2):ae--)}}},Z=(p,g,w,T,C=null)=>{const{el:P,type:D,transition:I,children:U,shapeFlag:O}=p;if(O&6){Z(p.component.subTree,g,w,T);return}if(O&128){p.suspense.move(g,w,T);return}if(O&64){D.move(p,g,w,ue);return}if(D===rt){r(P,g,w);for(let A=0;A<U.length;A++)Z(U[A],g,w,T);r(p.anchor,g,w);return}if(D===vr){B(p,g,w);return}if(T!==2&&O&1&&I)if(T===0)I.beforeEnter(P),r(P,g,w),qe(()=>I.enter(P),C);else{const{leave:A,delayLeave:N,afterLeave:X}=I,ee=()=>{p.ctx.isUnmounted?i(P):r(P,g,w)},he=()=>{A(P,()=>{ee(),X&&X()})};N?N(P,ee,he):he()}else r(P,g,w)},te=(p,g,w,T=!1,C=!1)=>{const{type:P,props:D,ref:I,children:U,dynamicChildren:O,shapeFlag:H,patchFlag:A,dirs:N,cacheIndex:X}=p;if(A===-2&&(C=!1),I!=null&&(mt(),fn(I,null,w,p,!0),gt()),X!=null&&(g.renderCache[X]=void 0),H&256){g.ctx.deactivate(p);return}const ee=H&1&&N,he=!hn(p);let ae;if(he&&(ae=D&&D.onVnodeBeforeUnmount)&&Ze(ae,g,p),H&6)be(p.component,w,T);else{if(H&128){p.suspense.unmount(w,T);return}ee&&Ut(p,null,g,"beforeUnmount"),H&64?p.type.remove(p,g,w,ue,T):O&&!O.hasOnce&&(P!==rt||A>0&&A&64)?xe(O,g,w,!1,!0):(P===rt&&A&384||!C&&H&16)&&xe(U,g,w),T&&ye(p)}(he&&(ae=D&&D.onVnodeUnmounted)||ee)&&qe(()=>{ae&&Ze(ae,g,p),ee&&Ut(p,null,g,"unmounted")},w)},ye=p=>{const{type:g,el:w,anchor:T,transition:C}=p;if(g===rt){Pe(w,T);return}if(g===vr){S(p);return}const P=()=>{i(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:D,delayLeave:I}=C,U=()=>D(w,P);I?I(p.el,P,U):U()}else P()},Pe=(p,g)=>{let w;for(;p!==g;)w=h(p),i(p),p=w;i(g)},be=(p,g,w)=>{const{bum:T,scope:C,job:P,subTree:D,um:I,m:U,a:O,parent:H,slots:{__:A}}=p;Ei(U),Ei(O),T&&lr(T),H&&K(A)&&A.forEach(N=>{H.renderCache[N]=void 0}),C.stop(),P&&(P.flags|=8,te(D,p,g,w)),I&&qe(I,g),qe(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},xe=(p,g,w,T=!1,C=!1,P=0)=>{for(let D=P;D<p.length;D++)te(p[D],g,w,T,C)},we=p=>{if(p.shapeFlag&6)return we(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=h(p.anchor||p.el),w=g&&g[xa];return w?h(w):g};let ge=!1;const je=(p,g,w)=>{p==null?g._vnode&&te(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,w),g._vnode=p,ge||(ge=!0,Bi(),Ls(),ge=!1)},ue={p:v,um:te,m:Z,r:ye,mt:Q,mc:M,pc:z,pbc:G,n:we,o:e};return{render:je,hydrate:void 0,createApp:Na(je)}}function mr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Za(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function io(e,t,n=!1){const r=e.children,i=t.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=St(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&io(o,a)),a.type===ir&&(a.el=o.el),a.type===Kt&&!a.el&&(a.el=o.el)}}function ec(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<f?s=a+1:o=a;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function so(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:so(t)}function Ei(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const tc=Symbol.for("v-scx"),nc=()=>Rn(tc);function gr(e,t,n){return oo(e,t,n)}function oo(e,t,n=pe){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ue({},n),c=t&&r||!t&&s!=="post";let f;if(Sn){if(s==="sync"){const m=nc();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=ot,m.resume=ot,m.pause=ot,m}}const l=De;a.call=(m,d,v)=>at(m,l,d,v);let u=!1;s==="post"?a.scheduler=m=>{qe(m,l&&l.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(m,d)=>{d?m():ei(m)}),a.augmentJob=m=>{t&&(m.flags|=4),u&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const h=pa(e,t,a);return Sn&&(f?f.push(h):c&&h()),h}function rc(e,t,n){const r=this.proxy,i=Ce(e)?e.includes(".")?ao(r,e):()=>r[e]:e.bind(r,r);let s;J(t)?s=t:(s=t.handler,n=t);const o=Cn(this),a=oo(i,s.bind(r),n);return o(),a}function ao(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const ic=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ct(t)}Modifiers`]||e[`${Et(t)}Modifiers`];function sc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||pe;let i=n;const s=t.startsWith("update:"),o=s&&ic(r,t.slice(7));o&&(o.trim&&(i=n.map(l=>Ce(l)?l.trim():l)),o.number&&(i=n.map(Io)));let a,c=r[a=cr(t)]||r[a=cr(Ct(t))];!c&&s&&(c=r[a=cr(Et(t))]),c&&at(c,e,6,i);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,at(f,e,6,i)}}function co(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!J(e)){const c=f=>{const l=co(f,t,!0);l&&(a=!0,Ue(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(Se(e)&&r.set(e,null),null):(K(s)?s.forEach(c=>o[c]=null):Ue(o,s),Se(e)&&r.set(e,o),o)}function rr(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Et(t))||ie(e,t))}function _i(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:f,renderCache:l,props:u,data:h,setupState:m,ctx:d,inheritAttrs:v}=e,x=jn(e);let b,y;try{if(n.shapeFlag&4){const S=i||r,E=S;b=it(f.call(E,S,l,u,m,h,d)),y=a}else{const S=t;b=it(S.length>1?S(u,{attrs:a,slots:o,emit:c}):S(u,null)),y=t.props?a:oc(a)}}catch(S){pn.length=0,tr(S,e,1),b=Gt(Kt)}let B=b;if(y&&v!==!1){const S=Object.keys(y),{shapeFlag:E}=B;S.length&&E&7&&(s&&S.some(Nr)&&(y=ac(y,s)),B=Jt(B,y,!1,!0))}return n.dirs&&(B=Jt(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&ti(B,n.transition),b=B,jn(x),b}const oc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},ac=(e,t)=>{const n={};for(const r in e)(!Nr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cc(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ui(r,o,f):!!o;if(c&8){const l=t.dynamicProps;for(let u=0;u<l.length;u++){const h=l[u];if(o[h]!==r[h]&&!rr(f,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ui(r,o,f):!0:!!o;return!1}function Ui(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!rr(n,s))return!0}return!1}function lc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const lo=e=>e.__isSuspense;function uc(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):ya(e)}const rt=Symbol.for("v-fgt"),ir=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),pn=[];let He=null;function yr(e=!1){pn.push(He=e?null:[])}function fc(){pn.pop(),He=pn[pn.length-1]||null}let xn=1;function Ri(e,t=!1){xn+=e,e<0&&He&&t&&(He.hasOnce=!0)}function hc(e){return e.dynamicChildren=xn>0?He||Wt:null,fc(),xn>0&&He&&He.push(e),e}function br(e,t,n,r,i,s){return hc(Ft(e,t,n,r,i,s,!0))}function uo(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const fo=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||_e(e)||J(e)?{i:st,r:e,k:t,f:!!n}:e:null);function Ft(e,t=null,n=null,r=0,i=null,s=e===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fo(t),ref:t&&In(t),scopeId:js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return a?(ii(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),xn>0&&!o&&He&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&He.push(c),c}const Gt=dc;function dc(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Da)&&(e=Kt),uo(e)){const a=Jt(e,t,!0);return n&&ii(a,n),xn>0&&!s&&He&&(a.shapeFlag&6?He[He.indexOf(e)]=a:He.push(a)),a.patchFlag=-2,a}if(Pc(e)&&(e=e.__vccOpts),t){t=pc(t);let{class:a,style:c}=t;a&&!Ce(a)&&(t.class=Zn(a)),Se(c)&&(Zr(c)&&!K(c)&&(c=Ue({},c)),t.style=Jn(c))}const o=Ce(e)?1:lo(e)?128:Sa(e)?64:Se(e)?4:J(e)?2:0;return Ft(e,t,n,r,i,o,s,!0)}function pc(e){return e?Zr(e)||Js(e)?Ue({},e):e:null}function Jt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=e,f=t?gc(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&fo(f),ref:t&&t.ref?n&&s?K(s)?s.concat(In(t)):[s,In(t)]:In(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jt(e.ssContent),ssFallback:e.ssFallback&&Jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ti(l,c.clone(l)),l}function mc(e=" ",t=0){return Gt(ir,null,e,t)}function it(e){return e==null||typeof e=="boolean"?Gt(Kt):K(e)?Gt(rt,null,e.slice()):uo(e)?St(e):Gt(ir,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jt(e)}function ii(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ii(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Js(t)?t._ctx=st:i===3&&st&&(st.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:st},n=32):(t=String(t),r&64?(n=16,t=[mc(t)]):n=8);e.children=t,e.shapeFlag|=n}function gc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Zn([t.class,r.class]));else if(i==="style")t.style=Jn([t.style,r.style]);else if(Yn(i)){const s=t[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ze(e,t,n,r=null){at(e,t,7,[n,r])}const vc=Qs();let yc=0;function bc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||vc,s={uid:yc++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eo(r,i),emitsOptions:co(r,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=sc.bind(null,s),e.ce&&e.ce(s),s}let De=null;const xc=()=>De||st;let Nn,zr;{const e=Kn(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Nn=t("__VUE_INSTANCE_SETTERS__",n=>De=n),zr=t("__VUE_SSR_SETTERS__",n=>Sn=n)}const Cn=e=>{const t=De;return Nn(e),e.scope.on(),()=>{e.scope.off(),Nn(t)}},Ii=()=>{De&&De.scope.off(),Nn(null)};function ho(e){return e.vnode.shapeFlag&4}let Sn=!1;function Sc(e,t=!1,n=!1){t&&zr(t);const{props:r,children:i}=e.vnode,s=ho(e);Wa(e,r,s,t),Qa(e,i,n||t);const o=s?wc(e,t):void 0;return t&&zr(!1),o}function wc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fa);const{setup:r}=n;if(r){mt();const i=e.setupContext=r.length>1?Cc(e):null,s=Cn(e),o=Bn(r,e,0,[e.props,i]),a=ds(o);if(gt(),s(),(a||e.sp)&&!hn(e)&&ks(e),a){if(o.then(Ii,Ii),t)return o.then(c=>{Di(e,c)}).catch(c=>{tr(c,e,0)});e.asyncDep=o}else Di(e,o)}else po(e)}function Di(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=Fs(t)),po(e)}function po(e,t,n){const r=e.type;e.render||(e.render=r.render||ot);{const i=Cn(e);mt();try{za(e)}finally{gt(),i()}}}const Bc={get(e,t){return Ee(e,"get",""),e[t]}};function Cc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bc),slots:e.slots,emit:e.emit,expose:t}}function si(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Fs(aa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}})):e.proxy}function Pc(e){return J(e)&&"__vccOpts"in e}const Gr=(e,t)=>ha(e,t,Sn),Mc="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lr;const Ai=typeof window<"u"&&window.trustedTypes;if(Ai)try{Lr=Ai.createPolicy("vue",{createHTML:e=>e})}catch{}const mo=Lr?e=>Lr.createHTML(e):e=>e,Tc="http://www.w3.org/2000/svg",Oc="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Fi=ft&&ft.createElement("template"),Ec={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ft.createElementNS(Tc,e):t==="mathml"?ft.createElementNS(Oc,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Fi.innerHTML=mo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Fi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_c=Symbol("_vtc");function Uc(e,t,n){const r=e[_c];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const zi=Symbol("_vod"),Rc=Symbol("_vsh"),Ic=Symbol(""),Dc=/(^|;)\s*display\s*:/;function Ac(e,t,n){const r=e.style,i=Ce(n);let s=!1;if(n&&!i){if(t)if(Ce(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Dn(r,a,"")}else for(const o in t)n[o]==null&&Dn(r,o,"");for(const o in n)o==="display"&&(s=!0),Dn(r,o,n[o])}else if(i){if(t!==n){const o=r[Ic];o&&(n+=";"+o),r.cssText=n,s=Dc.test(n)}}else t&&e.removeAttribute("style");zi in e&&(e[zi]=s?r.display:"",e[Rc]&&(r.display="none"))}const Gi=/\s*!important$/;function Dn(e,t,n){if(K(n))n.forEach(r=>Dn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fc(e,t);Gi.test(n)?e.setProperty(Et(r),n.replace(Gi,""),"important"):e[r]=n}}const Li=["Webkit","Moz","ms"],xr={};function Fc(e,t){const n=xr[t];if(n)return n;let r=Ct(t);if(r!=="filter"&&r in e)return xr[t]=r;r=gs(r);for(let i=0;i<Li.length;i++){const s=Li[i]+r;if(s in e)return xr[t]=s}return t}const Vi="http://www.w3.org/1999/xlink";function ji(e,t,n,r,i,s=Lo(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Vi,t.slice(6,t.length)):e.setAttributeNS(Vi,t,n):n==null||s&&!vs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ot(n)?String(n):n)}function ki(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?mo(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=vs(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function zc(e,t,n,r){e.addEventListener(t,n,r)}function Gc(e,t,n,r){e.removeEventListener(t,n,r)}const Ni=Symbol("_vei");function Lc(e,t,n,r,i=null){const s=e[Ni]||(e[Ni]={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=Vc(t);if(r){const f=s[t]=Nc(r,i);zc(e,a,f,c)}else o&&(Gc(e,a,o,c),s[t]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(qi.test(e)){t={};let r;for(;r=e.match(qi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),t]}let Sr=0;const jc=Promise.resolve(),kc=()=>Sr||(jc.then(()=>Sr=0),Sr=Date.now());function Nc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;at(qc(r,n.value),t,5,[r])};return n.value=e,n.attached=kc(),n}function qc(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Wi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wc=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?Uc(e,r,o):t==="style"?Ac(e,n,r):Yn(t)?Nr(t)||Lc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,r,o))?(ki(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ji(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ce(r))?ki(e,Ct(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ji(e,t,r,o))};function Hc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wi(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Wi(t)&&Ce(n)?!1:t in e}const $c=["ctrl","shift","alt","meta"],Yc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$c.some(n=>e[`${n}Key`]&&!t.includes(n))},Hi=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=Yc[t[o]];if(a&&a(i,t))return}return e(i,...s)})},Qc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$i=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Et(i.key);if(t.some(o=>o===s||Qc[o]===s))return e(i)})},Xc=Ue({patchProp:Wc},Ec);let Yi;function Kc(){return Yi||(Yi=Ka(Xc))}const Jc=(...e)=>{const t=Kc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=el(r);if(!i)return;const s=t._component;!J(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Zc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Zc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function el(e){return Ce(e)?document.querySelector(e):e}const tl=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,nl=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function rl(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=e.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:n,format:i,alphaMode:"premultiplied"});const s=il(n),o=sl(n,s,s,i),a={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(f=>{for(const l of f){const u=l.target,h=l.contentBoxSize[0].inlineSize,m=l.contentBoxSize[0].blockSize;u.width=Math.max(1,Math.min(h,n.limits.maxTextureDimension2D)),u.height=Math.max(1,Math.min(m,n.limits.maxTextureDimension2D))}ol(n,r,o,a)}).observe(e),null}function il(e){return e.createShaderModule({label:"hardcoded red triangle",code:`${tl}
${nl}`})}function sl(e,t,n,r){return e.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function ol(e,t,n,r){r.colorAttachments[0].view=t.getCurrentTexture().createView();const i=e.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(r);s.setPipeline(n),s.draw(3),s.end();const o=i.finish();e.queue.submit([o])}const al=`// We declare a storage variable to read from and write to\r
@group(0) @binding(0) var<storage, read_write> data: array<f32>;\r
\r
@compute @workgroup_size(1) fn computeSomething(@builtin(global_invocation_id) id: vec3u) {\r
    let i = id.x;\r
    data[i] = data[i] * 2.0;\r
}\r
\r
// Over simplification explanation of work group size and invocation ID:\r
// function dispatchWorkgroups(width, height, depth) {\r
//   for (z = 0; z < depth; ++z) {\r
//     for (y = 0; y < height; ++y) {\r
//       for (x = 0; x < width; ++x) {\r
//         const workgroup_id = {x, y, z};\r
//         dispatchWorkgroup(workgroup_id)\r
//       }\r
//     }\r
//   }\r
// }\r
//  \r
// function dispatchWorkgroup(workgroup_id) {\r
//   // from @workgroup_size in WGSL\r
//   const workgroup_size = shaderCode.workgroup_size;\r
//   const {x: width, y: height, z: depth} = workgroup_size;\r
//   for (z = 0; z < depth; ++z) {\r
//     for (y = 0; y < height; ++y) {\r
//       for (x = 0; x < width; ++x) {\r
//         const local_invocation_id = {x, y, z};\r
//         const global_invocation_id =\r
//             workgroup_id * workgroup_size + local_invocation_id;\r
//         computeShader(global_invocation_id)\r
//       }\r
//     }\r
//   }\r
// }`;async function cl(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=ll(n),i=ul(n,r),s=new Float32Array([1,3,5]),o=fl(n,s),a=hl(n,s.byteLength),c=dl(n,i.getBindGroupLayout(0),o),f=n.createCommandEncoder({label:"command encoder"}),l=f.beginComputePass({label:"basic compute pass"});l.setPipeline(i),l.setBindGroup(0,c),l.dispatchWorkgroups(s.length),l.end(),f.copyBufferToBuffer(o,0,a,0,a.size);const u=f.finish();n.queue.submit([u]),console.log("We send this Input: ",s);const h=performance.now();await a.mapAsync(GPUMapMode.READ);const m=new Float32Array(a.getMappedRange());return console.log("Computation took: ",performance.now()-h,"ms"),console.log("We got this Result: ",m),a.unmap(),null}function ll(e){return e.createShaderModule({label:"basic compute module",code:`${al}`})}function ul(e,t){return e.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:t,entryPoint:"computeSomething"}})}function fl(e,t){const n=e.createBuffer({label:"work buffer",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(n,0,t),n}function hl(e,t){return e.createBuffer({label:"result buffer",size:t,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function dl(e,t,n){return e.createBindGroup({label:"basic bind group",layout:t,entries:[{binding:0,resource:{buffer:n}}]})}const pl=`// ============================== //\r
struct ourStruct {\r
    color: vec4f,\r
    offset: vec2f\r
};\r
\r
struct scaleStruct {\r
    scale: vec2f\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f, // Inter stage variable example\r
    @location(1) @interpolate(perspective) scale: vec2f,\r
    @location(2) @interpolate(perspective) offset: vec2f,\r
};\r
\r
// ============================== //\r
@group(0) @binding(0) var<uniform> ourUniform: ourStruct;\r
@group(0) @binding(1) var<uniform> scaleUniform: scaleStruct;\r
\r
// ============================== //\r
@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> OurVertexShaderOutput\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
\r
    var Output: OurVertexShaderOutput;\r
    Output.position = vec4f(pos[vertex_index] * scaleUniform.scale + ourUniform.offset, 0.0, 1.0);\r
    Output.color = ourUniform.color;\r
    Output.scale = scaleUniform.scale;\r
    Output.offset = ourUniform.offset;\r
    return Output;\r
}`,ml=`// ============================== //\r
struct ourStruct {\r
    color: vec4f,\r
    scale: vec2f,\r
    offset: vec2f\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f,\r
    @location(1) @interpolate(perspective) scale: vec2f,\r
    @location(2) @interpolate(perspective) offset: vec2f,\r
};\r
\r
// ============================== //\r
@fragment\r
fn fs(input: OurVertexShaderOutput) -> @location(0) vec4f\r
{\r
    let white = vec4f(1.0, 1.0, 1.0, 1.0);\r
    let black = vec4f(0.0, 0.0, 0.0, 1.0);\r
\r
    let grid = vec2f(input.position.xy) / 15.0; // Example of using the builtin position\r
    let checker = (i32(floor(grid.x)) + i32(floor(grid.y))) % 2 == 1;\r
    // Diagonal stripes:\r
    // let diagonal = i32(floor(grid.x + grid.y)) % 2 == 1;\r
\r
    return select(white, black, checker) * input.color;\r
}`;async function _t(e=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const t=await navigator.gpu.requestAdapter();if(!t)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const n=i=>{const s=t.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};e=e.filter(i=>n(i));const r=await t.requestDevice({requiredFeatures:e});return r.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),r}function Mt(e,t,n,r="shader module"){const i=e.createShaderModule({label:`${r} - vertex`,code:t}),s=e.createShaderModule({label:`${r} - fragment`,code:n});return{vertex:i,fragment:s}}function gl(e,t){if(!e)return null;const n=e.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:t}),r=e.createBuffer({label:"timestamp-query-resolve-buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=e.createBuffer({label:"timestamp-query-result-buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:n,resolveBuffer:r,resultBuffer:i}}function vl(e,t){return!e||!t?!1:(t.resolveQuerySet(e.querySet,0,e.querySet.count,e.resolveBuffer,0),e.resultBuffer.mapState==="unmapped"&&t.copyBufferToBuffer(e.resolveBuffer,0,e.resultBuffer,0,e.resultBuffer.size),!0)}function yt(e){const t=e.reduce((i,s)=>i+s.length,0),n=new Float32Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function Qi(e,t){const n=e.reduce((o,a)=>o+a.length,0),r=new Uint16Array(n);let i=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];for(let c=0;c<a.length;c++)r[i+c]=a[c]+s;i+=a.length,s+=t[o]}return r}var Ve=typeof Float32Array<"u"?Float32Array:Array;function an(){var e=new Ve(4);return Ve!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function qn(e,t,n,r){var i=new Ve(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function An(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function yl(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],a=n[0],c=n[1],f=n[2],l=n[3];return e[0]=r*a+s*c,e[1]=i*a+o*c,e[2]=r*f+s*l,e[3]=i*f+o*l,e}function oi(){var e=new Ve(9);return Ve!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Vr(e,t,n,r,i,s,o,a,c){var f=new Ve(9);return f[0]=e,f[1]=t,f[2]=n,f[3]=r,f[4]=i,f[5]=s,f[6]=o,f[7]=a,f[8]=c,f}function Xi(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function Ki(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function Be(){var e=new Ve(3);return Ve!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function bl(e){var t=new Ve(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function wr(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function j(e,t,n){var r=new Ve(3);return r[0]=e,r[1]=t,r[2]=n,r}function Nt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function xl(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function bt(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function On(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function jr(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e}var qt=xl;(function(){var e=Be();return function(t,n,r,i,s,o){var a,c;for(n||(n=3),r||(r=0),i?c=Math.min(i*n+r,t.length):c=t.length,a=r;a<c;a+=n)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],s(e,e,o),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2];return t}})();function q(){var e=new Ve(2);return Ve!=Float32Array&&(e[0]=0,e[1]=0),e}function Wn(e){var t=new Ve(2);return t[0]=e[0],t[1]=e[1],t}function ne(e,t){var n=new Ve(2);return n[0]=e,n[1]=t,n}function ht(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function Sl(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function ut(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function wl(e){var t=e[0],n=e[1];return t*t+n*n}function We(e,t){return e[0]*t[0]+e[1]*t[1]}function Bl(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e}function Oe(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}var et=Sl;(function(){var e=q();return function(t,n,r,i,s,o){var a,c;for(n||(n=2),r||(r=0),i?c=Math.min(i*n+r,t.length):c=t.length,a=r;a<c;a+=n)e[0]=t[a],e[1]=t[a+1],s(e,e,o),t[a]=e[0],t[a+1]=e[1];return t}})();function jt(e){const t=Math.cos(e),n=Math.sin(e);return qn(t,n,-n,t)}function go(e,t,n){const r=Math.cos(e),i=Math.sin(e),s=Math.cos(t),o=Math.sin(t),a=Math.cos(n),c=Math.sin(n);return Vr(s*a,-s*c,o,i*o*a+r*c,-i*o*c+r*a,-i*s,-r*o*a+i*c,r*o*c+i*a,r*s)}function Cl(e,t){const n=oi();return n[0]=e[0]*t[0],n[1]=e[0]*t[1],n[2]=e[0]*t[2],n[3]=e[1]*t[0],n[4]=e[1]*t[1],n[5]=e[1]*t[2],n[6]=e[2]*t[0],n[7]=e[2]*t[1],n[8]=e[2]*t[2],n}function Pl(e,t){let n=e[0],r=e[3]/e[0],i=e[6]/e[0],s=e[4]-r*r*n,o=(e[7]-i*r*n)/s,a=e[8]-(i*i*n+o*o*s),c=t[0],f=t[1]-r*c,l=t[2]-i*c-o*f,u=c/n,h=f/s,m=l/a;const d=j(0,0,0);return d[2]=m,d[1]=h-o*d[2],d[0]=u-r*d[1]-i*d[2],d}function oe(e=0,t=1){return e===void 0?(e=0,t=1):t===void 0&&(t=e,e=0),e+Math.random()*(t-e)}function Ml(e,t,n,r){return j(oe(e,e+n),oe(t,t+r),oe(0,Math.PI*2))}function Tl(){const e=Math.floor(oe(0,256)),t=Math.floor(oe(0,256)),n=Math.floor(oe(0,256)),r=255;return new Uint8Array([e,t,n,r])}function En(e,t){return e[0]*t[1]-e[1]*t[0]}function Ji(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function Ol(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function El(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return t>1e-5?[e[0]/t,e[1]/t,e[2]/t]:[0,0,0]}function vo(e,t,n){const r=Ji(t,e),i=Ji(n,e);return El(Ol(r,i))}const _l=0,Ul=4,Rl=0,Il=100;async function Dl(e){const t=await _t();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=Zi(t,"hardcoded triangle",pl),s=Zi(t,"hardcoded triangle",ml),o=Al(t,i,s,r),a=32,c=8,f=[];for(let h=0;h<Il;h++){const m=es(t,a);{const y=new Float32Array(a/4);y.set([oe(.1),oe(.1),oe(.1),1],_l),y.set([oe(-.9,.9),oe(-.9,.9)],Ul),t.queue.writeBuffer(m,0,y)}const d=new Float32Array(c/4),v=es(t,c),b={uniformBindGroup:zl(t,o.getBindGroupLayout(0),m,v),uniformBuffer:v,uniformValues:d,scale:oe(.2,.5)};f.push(b)}const l={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(h=>{for(const m of h){const d=m.target,v=m.contentBoxSize[0].inlineSize,x=m.contentBoxSize[0].blockSize;d.width=Math.max(1,Math.min(v,t.limits.maxTextureDimension2D)),d.height=Math.max(1,Math.min(x,t.limits.maxTextureDimension2D))}Fl(t,e,n,o,l,f)}).observe(e),null}function Zi(e,t,n){return e.createShaderModule({label:t,code:n})}function Al(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Fl(e,t,n,r,i,s){i.colorAttachments[0].view=n.getCurrentTexture().createView();const o=e.createCommandEncoder({label:"pass encoder"}),a=o.beginRenderPass(i);a.setPipeline(r);const c=t.width/t.height;for(const l of s)l.uniformValues.set([l.scale/c,l.scale],Rl),e.queue.writeBuffer(l.uniformBuffer,0,l.uniformValues),a.setBindGroup(0,l.uniformBindGroup),a.draw(3);a.end();const f=o.finish();e.queue.submit([f])}function es(e,t){return e.createBuffer({label:"uniform buffer",size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function zl(e,t,n,r){return e.createBindGroup({label:"uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}}]})}const Gl=`// ============================== //\r
struct ourStruct {\r
    color: vec4f,\r
    offset: vec2f\r
};\r
\r
struct scaleStruct {\r
    scale: vec2f\r
};\r
\r
struct vertexStruct {\r
    position: vec2f\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f, // Inter stage variable example\r
    @location(1) @interpolate(perspective) scale: vec2f,\r
    @location(2) @interpolate(perspective) offset: vec2f,\r
};\r
\r
// ============================== //\r
@group(0) @binding(0) var<storage, read> staticStorage: array<ourStruct>;\r
@group(0) @binding(1) var<storage, read> scaleStorage: array<scaleStruct>;\r
@group(0) @binding(2) var<storage, read> pos: array<vertexStruct>;\r
\r
// ============================== //\r
@vertex\r
fn vs(\r
    @builtin(vertex_index) vertex_index: u32,\r
    @builtin(instance_index) instance_index: u32\r
) -> OurVertexShaderOutput\r
{\r
    let staticInstance = staticStorage[instance_index];\r
    let scaleInstance = scaleStorage[instance_index];\r
\r
    var Output: OurVertexShaderOutput;\r
    Output.position = vec4f(pos[vertex_index].position * scaleInstance.scale + staticInstance.offset, 0.0, 1.0);\r
    Output.color = staticInstance.color;\r
    Output.scale = scaleInstance.scale;\r
    Output.offset = staticInstance.offset;\r
    return Output;\r
}`,Ll=`// ============================== //\r
struct ourStruct {\r
    color: vec4f,\r
    scale: vec2f,\r
    offset: vec2f\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f,\r
    @location(1) @interpolate(perspective) scale: vec2f,\r
    @location(2) @interpolate(perspective) offset: vec2f,\r
};\r
\r
// ============================== //\r
@fragment\r
fn fs(input: OurVertexShaderOutput) -> @location(0) vec4f\r
{\r
    return input.color;\r
}`;function yo(){const t=new Float32Array(8);let n=0;const r=s=>{t[n++]=s.x,t[n++]=s.y};r({x:-.5,y:-.5}),r({x:.5,y:-.5}),r({x:-.5,y:.5}),r({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:t,indexData:i,numVertices:i.length}}function Vl({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*3),a=new Uint8Array(o.buffer);let c=0,f=8;const l=v=>{o[c++]=v.x,o[c++]=v.y,c+=1,a[f++]=(v.r??0)*255,a[f++]=(v.g??0)*255,a[f++]=(v.b??0)*255,f+=9},u=[1,1,1],h=[.1,.1,.1];for(let v=0;v<=t;v++){const x=r+(v+0)*(i-r)/t,b=Math.cos(x),y=Math.sin(x);l({x:b*e,y:y*e,r:h[0],g:h[1],b:h[2]}),l({x:b*n,y:y*n,r:u[0],g:u[1],b:u[2]})}const m=new Uint16Array(t*6);let d=0;for(let v=0;v<t;++v){const x=v*2;m[d++]=x,m[d++]=x+1,m[d++]=x+2,m[d++]=x+2,m[d++]=x+1,m[d++]=x+3}return{vertexData:o,indexData:m,numVertices:m.length}}function jl({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*2);let a=0;const c=u=>{o[a++]=u.x,o[a++]=u.y};for(let u=0;u<=t;u++){const h=r+(u+0)*(i-r)/t,m=Math.cos(h),d=Math.sin(h);c({x:m*e,y:d*e}),c({x:m*n,y:d*n})}const f=new Uint16Array(t*6);let l=0;for(let u=0;u<t;++u){const h=u*2;f[l++]=h,f[l++]=h+1,f[l++]=h+2,f[l++]=h+2,f[l++]=h+1,f[l++]=h+3}return{vertexData:o,indexData:f,numVertices:f.length}}function kl({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=t*3*2,o=new Float32Array(s*2);let a=0;const c=(f,l)=>{o[a++]=f,o[a++]=l};for(let f=0;f<t;f++){const l=r+(f+0)*(i-r)/t,u=r+(f+1)*(i-r)/t,h=Math.cos(l),m=Math.sin(l),d=Math.cos(u),v=Math.sin(u);c(h*e,m*e),c(d*e,v*e),c(h*n,m*n),c(h*n,m*n),c(d*e,v*e),c(d*n,v*n)}return o}function Nl(){const e=[.73,.73,.73],t=[.65,.05,.05],n=[.12,.45,.15],r=[1,1,1],i=[],s=[],o=[],a=[],c=[],f=[];let l=0;function u(y,B,S,E,_=0){return i.push(y[0],y[1],y[2]),s.push(B[0],B[1],B[2]),o.push(S[0],S[1],S[2]),c.push(E[0],E[1]),a.push(_),l++}function h(y,B,S,E,_,R=!1,M=0){let F=vo(y,B,S);R&&(F=[-F[0],-F[1],-F[2]]);const G=u(y,F,_,[0,0],M),W=u(B,F,_,[1,0],M),Y=u(S,F,_,[1,1],M),L=u(E,F,_,[0,1],M);f.push(G,W,Y),f.push(G,Y,L)}function m(y,B,S,E=[0,0,0],_=0){const R=B[0]/2,M=B[1]/2,F=B[2]/2;let G=[y[0]-R,y[1]-M,y[2]-F],W=[y[0]+R,y[1]-M,y[2]-F],Y=[y[0]+R,y[1]+M,y[2]-F],L=[y[0]-R,y[1]+M,y[2]-F],Q=[y[0]-R,y[1]-M,y[2]+F],$=[y[0]+R,y[1]-M,y[2]+F],k=[y[0]+R,y[1]+M,y[2]+F],V=[y[0]-R,y[1]+M,y[2]+F];const z=new Float32Array(9),le=Math.cos(E[0]),me=Math.sin(E[0]),Z=Math.cos(E[1]),te=Math.sin(E[1]),ye=Math.cos(E[2]),Pe=Math.sin(E[2]);z[0]=Z*ye,z[1]=-Z*Pe,z[2]=te,z[3]=me*te*ye+le*Pe,z[4]=-me*te*Pe+le*ye,z[5]=-me*Z,z[6]=-le*te*ye+me*Pe,z[7]=le*te*Pe+me*ye,z[8]=le*Z;const be=xe=>{const we=xe[0]-y[0],ge=xe[1]-y[1],je=xe[2]-y[2];return[z[0]*we+z[1]*ge+z[2]*je+y[0],z[3]*we+z[4]*ge+z[5]*je+y[1],z[6]*we+z[7]*ge+z[8]*je+y[2]]};G=be(G),W=be(W),Y=be(Y),L=be(L),Q=be(Q),$=be($),k=be(k),V=be(V),h(Q,$,k,V,S,!1,_),h(W,G,L,Y,S,!1,_),h(G,Q,V,L,S,!1,_),h($,W,Y,k,S,!1,_),h(L,V,k,Y,S,!1,_),h(G,W,$,Q,S,!1,_)}h([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],e,!1,.98),h([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],e,!1,.98);const v=548.8-1;h([343,v,227],[343,v,332],[213,v,332],[213,v,227],r),h([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],e),h([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],n),h([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],t);let x=l;m([278,224.4,279.5],[120,120,120],e,[4,Math.PI/9,7],1);let b=l-x;return{vertexData:new Float32Array(i),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(s),colorData:new Float32Array(o),reflectanceData:new Float32Array(a),uvData:new Float32Array(c),additionalInfo:{cubeVertexStart:x,cubeVertexCount:b,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(i.slice(x*3,(x+b)*3)),cubeNormalsInfo:new Float32Array(s.slice(x*3,(x+b)*3))}}}function Br(e,t){let n=4;const r=new Float32Array(n*3),i=new Float32Array(n*3),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint16Array([0,1,2,0,2,3]),c=e.translation,f=e.scale[0]/2,l=e.scale[1]/2,u=e.rotation,h=[j(-f,-l,0),j(f,-l,0),j(f,l,0),j(-f,l,0)],m=go(u[0],u[1],u[2]);for(let b=0;b<h.length;++b)jr(h[b],h[b],m),Nt(h[b],h[b],c);let d=0;const v=(b,y)=>{r[d]=b[0],r[d+1]=b[1],r[d+2]=b[2],i[d]=y[0],i[d+1]=y[1],i[d+2]=y[2],d+=3};v(h[0],t),v(h[1],t),v(h[2],t),v(h[3],t);const x=j(0,0,1);jr(x,x,m);for(let b=0;b<n;++b)s[b*3+0]=x[0],s[b*3+1]=x[1],s[b*3+2]=x[2];return o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=1,o[5]=1,o[6]=0,o[7]=1,{vertexData:r,indexData:a,colorData:i,normalData:s,uvData:o,numVertices:a.length,transform:e}}function Cr(e,t,n,r=12,i=12){const s=[],o=[],a=[],c=[],f=[],l=(u,h,m,d)=>{s.push(u[0],u[1],u[2]),o.push(h[0],h[1],h[2]),a.push(m[0],m[1],m[2]),c.push(d[0],d[1])};for(let u=0;u<=r;u++){const h=u*Math.PI/r,m=Math.sin(h),d=Math.cos(h);for(let v=0;v<=i;v++){const x=v*2*Math.PI/i,b=Math.sin(x),B=Math.cos(x)*m,S=d,E=b*m,_=1-v/i,R=1-u/r,M=[e[0]+t*B,e[1]+t*S,e[2]+t*E];l(M,[B,S,E],n,[_,R])}}for(let u=0;u<r;u++)for(let h=0;h<i;h++){const m=u*(i+1)+h,d=m+i+1;f.push(m,m+1,d),f.push(d,m+1,d+1)}return{vertexData:new Float32Array(s),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(o),colorData:new Float32Array(a),uvData:new Float32Array(c),transform:{translation:j(e[0],e[1],e[2]),rotation:j(0,0,0),scale:j(t,t,t)}}}function ql(e,t=8){e.length>0?console.log(`Using custom sphere materials for Cornell Box: ${e.map(y=>y.name).join(", ")}`):console.log("Using default sphere materials for Cornell Box.");const n={whiteWall:{albedo:[.73,.73,.73],name:"whiteWall"},redWall:{albedo:[.65,.05,.05],name:"redWall"},greenWall:{albedo:[.12,.45,.15],name:"greenWall"},light:{albedo:[1,1,1],name:"light"},sphereOne:e.find(y=>y.name==="sphereOne")||{albedo:[.12,.45,.15],name:"sphereOne"},sphereTwo:e.find(y=>y.name==="sphereTwo")||{albedo:[.05,.05,.65],name:"sphereTwo"},sphereThree:e.find(y=>y.name==="sphereThree")||{albedo:[.65,.05,.05],name:"sphereThree"}},r={};function i(y,B,S,E){E in r||(r[E]={vertexData:[],normalData:[],uvData:[],indexData:[],numVertices:0});const _=r[E];return _.vertexData.push(y[0],y[1],y[2]),_.normalData.push(B[0],B[1],B[2]),_.uvData.push(S[0],S[1]),_.numVertices++}function s(y,B,S,E,_=!1,R){let M=vo(y,B,S);_&&(M=[-M[0],-M[1],-M[2]]);const F=i(y,M,[0,0],R),G=i(B,M,[1,0],R),W=i(S,M,[1,1],R),Y=i(E,M,[0,1],R);r[R].indexData.push(F,G,W),r[R].indexData.push(F,W,Y)}function o(y,B,S=12,E=12,_){const R=r[_]?.numVertices||0;for(let M=0;M<=S;M++){const F=M*Math.PI/S,G=Math.sin(F),W=Math.cos(F);for(let Y=0;Y<=E;Y++){const L=Y*2*Math.PI/E,Q=Math.sin(L),k=Math.cos(L)*G,V=W,z=Q*G,le=1-Y/E,me=1-M/S,Z=[y[0]+B*k,y[1]+B*V,y[2]+B*z];i(Z,[k,V,z],[le,me],_)}}for(let M=0;M<S;M++)for(let F=0;F<E;F++){const G=R+M*(E+1)+F,W=G+E+1;r[_].indexData.push(G,G+1,W),r[_].indexData.push(W,G+1,W+1)}}s([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],!1,"whiteWall"),s([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],!1,"whiteWall");const c=548.8-1;s([343,c,227],[343,c,332],[213,c,332],[213,c,227],!1,"light"),s([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],!1,"whiteWall"),s([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],!1,"greenWall"),s([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],!1,"redWall");let f=[278,224.4,279.5],l=90,u=120,h=[j(0,1,0),j(Math.sqrt(3)/2,-.5,0),j(-Math.sqrt(3)/2,-.5,0)];for(let y=0;y<3;++y){let B=h[y],S=[f[0]+B[0]*u,f[1]+B[1]*u,f[2]+B[2]*u];o(S,l,t,t,y===0?"sphereOne":y===1?"sphereThree":"sphereTwo")}const m=[],d=[],v=[],x=[];let b=0;for(const y in r){y==="sphereOne"?(v.push(b),x.push({translation:j(f[0]+h[0][0]*u,f[1]+h[0][1]*u,f[2]+h[0][2]*u),rotation:j(0,0,0),scale:j(l,l,l)})):y==="sphereThree"?(v.push(b),x.push({translation:j(f[0]+h[1][0]*u,f[1]+h[1][1]*u,f[2]+h[1][2]*u),rotation:j(0,0,0),scale:j(l,l,l)})):y==="sphereTwo"&&(v.push(b),x.push({translation:j(f[0]+h[2][0]*u,f[1]+h[2][1]*u,f[2]+h[2][2]*u),rotation:j(0,0,0),scale:j(l,l,l)}));const B=r[y];m.push({vertexData:new Float32Array(B.vertexData),indexData:new Uint16Array(B.indexData),numVertices:B.indexData.length,normalData:new Float32Array(B.normalData),uvData:new Float32Array(B.uvData)}),d.push(n[y]),b+=1}return{materials:d,pmTopologies:m,additionalInfo:{sphereMaterialIndices:v,sphereTransforms:x,sphereMaterials:[n.sphereOne,n.sphereThree,n.sphereTwo]}}}const Wl=0,Hl=4,Fn=50;async function $l(e){const t=await _t();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=ts(t,"hardcoded triangle",Gl),s=ts(t,"hardcoded triangle",Ll),o=Yl(t,i,s,r),a=32,c=8,f=a*Fn,l=c*Fn,u=kl({radius:1,innerRadius:.5}),h=u.byteLength,m=u.length/2,d=Pr(t,f),v=Pr(t,l),x=Pr(t,h);t.queue.writeBuffer(x,0,u);const b=[];{const _=new Float32Array(f/4);for(let R=0;R<Fn;R++){const M=R*(a/4);_.set([oe(.1),oe(.1),oe(.1),1],M+Wl),_.set([oe(-.9,.9),oe(-.9,.9)],M+Hl);const F={scale:oe(.1,.4)};b.push(F)}t.queue.writeBuffer(d,0,_)}const y=new Float32Array(l/4),B=Xl(t,o.getBindGroupLayout(0),d,v,x),S={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(_=>{for(const R of _){const M=R.target,F=R.contentBoxSize[0].inlineSize,G=R.contentBoxSize[0].blockSize;M.width=Math.max(1,Math.min(F,t.limits.maxTextureDimension2D)),M.height=Math.max(1,Math.min(G,t.limits.maxTextureDimension2D))}Ql(t,e,n,o,S,b,B,y,v,m)}).observe(e),null}function ts(e,t,n){return e.createShaderModule({label:t,code:n})}function Yl(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Ql(e,t,n,r,i,s,o,a,c,f){i.colorAttachments[0].view=n.getCurrentTexture().createView();const l=e.createCommandEncoder({label:"pass encoder"}),u=l.beginRenderPass(i);u.setPipeline(r);const h=t.width/t.height;s.forEach((d,v)=>{const x=2*v;a.set([d.scale/h,d.scale],x)}),e.queue.writeBuffer(c,0,a),u.setBindGroup(0,o),u.draw(f,Fn),u.end();const m=l.finish();e.queue.submit([m])}function Pr(e,t){return e.createBuffer({label:"storage buffer",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function Xl(e,t,n,r,i){return e.createBindGroup({label:"storage bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}},{binding:2,resource:{buffer:i}}]})}const Kl=`// ============================== //\r
struct vertexStruct {\r
    @location(0) position: vec2f,\r
    @location(1) color: vec4f,\r
    @location(2) offset: vec2f,\r
    @location(3) scale: vec2f,\r
    @location(4) perVertexColor: vec3f\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f, // Inter stage variable example\r
    @location(1) @interpolate(perspective) scale: vec2f,\r
    @location(2) @interpolate(perspective) offset: vec2f,\r
};\r
\r
// ============================== //\r
@vertex\r
fn vs(\r
    vert: vertexStruct,\r
) -> OurVertexShaderOutput\r
{\r
    var Output: OurVertexShaderOutput;\r
    Output.position = vec4f(vert.position * vert.scale + vert.offset, 0.0, 1.0);\r
    Output.color = vert.color * vec4f(vert.perVertexColor.rgb, 1.0);\r
    Output.scale = vert.scale;\r
    Output.offset = vert.offset;\r
    return Output;\r
}`,Jl=`// ============================== //\r
struct ourStruct {\r
    color: vec4f,\r
    scale: vec2f,\r
    offset: vec2f\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f,\r
    @location(1) @interpolate(perspective) scale: vec2f,\r
    @location(2) @interpolate(perspective) offset: vec2f,\r
};\r
\r
// ============================== //\r
@fragment\r
fn fs(input: OurVertexShaderOutput) -> @location(0) vec4f\r
{\r
    return input.color;\r
}`,Zl=0,eu=1,zn=50;async function tu(e){const t=await _t();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=ns(t,"hardcoded triangle",Kl),s=ns(t,"hardcoded triangle",Jl),o=nu(t,i,s,r),a=12,c=8,f=a*zn,l=c*zn,u=Vl({radius:1,innerRadius:.5}),h=u.vertexData.byteLength,m=u.numVertices,d=Mr(t,f),v=Mr(t,l),x=Mr(t,h),b=iu(t,u.indexData.byteLength);t.queue.writeBuffer(x,0,u.vertexData),t.queue.writeBuffer(b,0,u.indexData);const y=[];{const _=new Uint8Array(f),R=new Float32Array(_.buffer);for(let M=0;M<zn;M++){const F=M*a,G=M*(a/4);_.set([Math.round(oe(.1)*255),Math.round(oe(.1)*255),Math.round(oe(.1)*255),255],F+Zl),R.set([oe(-.9,.9),oe(-.9,.9)],G+eu);const W={scale:oe(.1,.4)};y.push(W)}t.queue.writeBuffer(d,0,R)}const B=new Float32Array(l/4),S={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(_=>{for(const R of _){const M=R.target,F=R.contentBoxSize[0].inlineSize,G=R.contentBoxSize[0].blockSize;M.width=Math.max(1,Math.min(F,t.limits.maxTextureDimension2D)),M.height=Math.max(1,Math.min(G,t.limits.maxTextureDimension2D))}ru(t,e,n,o,S,y,d,B,v,m,x,b)}).observe(e),null}function ns(e,t,n){return e.createShaderModule({label:t,code:n})}function nu(e,t,n,r){return e.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function ru(e,t,n,r,i,s,o,a,c,f,l,u){i.colorAttachments[0].view=n.getCurrentTexture().createView();const h=e.createCommandEncoder({label:"pass encoder"}),m=h.beginRenderPass(i);m.setPipeline(r),m.setVertexBuffer(0,l),m.setVertexBuffer(1,o),m.setVertexBuffer(2,c),m.setIndexBuffer(u,"uint16");const d=t.width/t.height;s.forEach((x,b)=>{const y=2*b;a.set([x.scale/d,x.scale],y)}),e.queue.writeBuffer(c,0,a),m.drawIndexed(f,zn),m.end();const v=h.finish();e.queue.submit([v])}function Mr(e,t){return e.createBuffer({label:"vertex buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function iu(e,t){return e.createBuffer({label:"index buffer",size:t,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const su=`// ============================== //\r
struct vertexStruct {\r
    @location(0) position: vec2f,\r
    @location(1) offset: vec2f,\r
    @location(2) scale: vec2f,\r
};\r
\r
// ============================== //\r
struct MVPBuffer {\r
    mvp: array<mat4x4f>,\r
};\r
\r
@group(0) @binding(2)\r
var<storage, read> mvpBuffer: MVPBuffer;\r
\r
// ============================== //\r
struct VertexShaderOutput\r
{\r
    @builtin(position) Position : vec4f,\r
    @location(0) texCoord : vec2f,\r
};\r
\r
// ============================== //\r
@vertex\r
fn vs(vert: vertexStruct, @builtin(instance_index) instanceIdx: u32) -> VertexShaderOutput\r
{\r
    var vsOutput: VertexShaderOutput;\r
    let mvp = mvpBuffer.mvp[instanceIdx];\r
    let pos = vert.position * vert.scale;\r
    vsOutput.Position = mvp * vec4f(pos, 0.0, 1.0);\r
    let uv = vert.position * vec2f(0.5, -0.5) + vec2f(0.5, 0.5);\r
    vsOutput.texCoord = uv;\r
    return vsOutput;\r
}`,ou=`// ============================== //\r
struct VertexShaderOutput\r
{\r
    @builtin(position) Position : vec4f,\r
    @location(0) texCoord : vec2f,\r
};\r
\r
// ============================== //\r
@group(0) @binding(0) var mySampler: sampler;\r
@group(0) @binding(1) var myTexture: texture_external; // mandatory for Video\r
\r
// ============================== //\r
@fragment\r
fn fs(fsInput: VertexShaderOutput) -> @location(0) vec4f\r
{\r
    return textureSampleBaseClampToEdge(myTexture, mySampler, fsInput.texCoord);\r
}`;function sr(){return document.getElementById("info")}function Tt(){return document.getElementById("utils")}function au(e,t,n,r){const i=document.createElement("div");i.style.cssText=`
        position: fixed;
        left: ${e.x+15}px;
        top: ${e.y}px;
        background: rgba(40, 40, 40, 0.95);
        border: 1px solid #555;
        border-radius: 8px;
        padding: 12px;
        z-index: 10000;
        min-width: 180px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        font-family: sans-serif;
        font-size: 13px;
        color: #eee;
    `;const s=document.createElement("div");s.textContent=`Material: ${t.name}`,s.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,i.appendChild(s);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const a=document.createElement("label");a.textContent="Albedo:",o.appendChild(a);const c=v=>Math.round(v*255).toString(16).padStart(2,"0"),f=`#${c(t.albedo[0])}${c(t.albedo[1])}${c(t.albedo[2])}`,l=document.createElement("input");l.type="color",l.value=f,l.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,l.tabIndex=-1,o.appendChild(l);const u=document.createElement("span");u.textContent=f.toUpperCase(),u.style.cssText="font-family: monospace; color: #aaa;",o.appendChild(u),l.addEventListener("input",()=>{u.textContent=l.value.toUpperCase()}),i.appendChild(o);const h=document.createElement("div");h.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const m=document.createElement("button");m.textContent="Apply",m.style.cssText=`
        padding: 6px 16px;
        background: #4a9eff;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,m.tabIndex=-1,m.addEventListener("click",()=>{const v=l.value,x=parseInt(v.slice(1,3),16)/255,b=parseInt(v.slice(3,5),16)/255,y=parseInt(v.slice(5,7),16)/255,B={name:t.name,albedo:[x,b,y]};n(B)});const d=document.createElement("button");return d.textContent="Cancel",d.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,d.tabIndex=-1,d.addEventListener("click",()=>{r()}),h.appendChild(d),h.appendChild(m),i.appendChild(h),i}function cu(e,t,n,r,i){const s=document.createElement("div");s.style.cssText=`
        position: fixed;
        left: ${e.x+15}px;
        top: ${e.y}px;
        background: rgba(40, 40, 40, 0.95);
        border: 1px solid #555;
        border-radius: 8px;
        padding: 12px;
        z-index: 10000;
        min-width: 180px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        font-family: sans-serif;
        font-size: 13px;
        color: #eee;
    `;const o=document.createElement("div");o.textContent=n,o.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,s.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const c=document.createElement("label");c.textContent="Enabled:",a.appendChild(c);const f=document.createElement("input");f.type="checkbox",f.checked=t.enabled,f.tabIndex=-1,a.appendChild(f),f.addEventListener("change",()=>{t.enabled=f.checked}),s.appendChild(a);const l=document.createElement("div");l.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const u=document.createElement("label");u.textContent="Light position:",l.appendChild(u),["X","Y","Z"].forEach((L,Q)=>{const $=document.createElement("input");$.type="number",$.value=t.position[Q].toFixed(2),$.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,$.tabIndex=-1,l.appendChild($),$.addEventListener("input",()=>{const k=parseFloat($.value);t.position[Q]=isNaN(k)?0:k}),$.placeholder=L}),s.appendChild(l);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Light direction:",h.appendChild(m),["X","Y","Z"].forEach((L,Q)=>{const $=document.createElement("input");$.type="number",$.value=t.direction[Q].toFixed(2),$.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,$.tabIndex=-1,h.appendChild($),$.addEventListener("input",()=>{const k=parseFloat($.value);t.direction[Q]=isNaN(k)?0:k}),$.placeholder=L}),s.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const v=document.createElement("label");v.textContent="Light intensity:",d.appendChild(v);const x=document.createElement("input");x.type="number",x.value=t.intensity.toFixed(2),x.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,x.tabIndex=-1,d.appendChild(x),x.addEventListener("input",()=>{const L=parseFloat(x.value);t.intensity=isNaN(L)?0:L}),s.appendChild(d);const b=document.createElement("div");b.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const y=document.createElement("label");y.textContent="Cone angle:",b.appendChild(y);const B=document.createElement("input");B.type="number",B.value=t.coneAngle.toFixed(2),B.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,B.tabIndex=-1,b.appendChild(B),B.addEventListener("input",()=>{const L=parseFloat(B.value);t.coneAngle=isNaN(L)?0:L}),s.appendChild(b);const S=document.createElement("div");S.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const E=document.createElement("label");E.textContent="Light color:",S.appendChild(E);const _=L=>Math.round(L*255).toString(16).padStart(2,"0"),R=`#${_(t.color[0])}${_(t.color[1])}${_(t.color[2])}`,M=document.createElement("input");M.type="color",M.value=R,M.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,M.tabIndex=-1,S.appendChild(M);const F=document.createElement("span");F.textContent=R.toUpperCase(),F.style.cssText="font-family: monospace; color: #aaa;",S.appendChild(F),M.addEventListener("input",()=>{F.textContent=M.value.toUpperCase(),t.color=[parseInt(M.value.slice(1,3),16)/255,parseInt(M.value.slice(3,5),16)/255,parseInt(M.value.slice(5,7),16)/255]}),s.appendChild(S);const G=document.createElement("div");G.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const W=document.createElement("button");W.textContent="Apply",W.style.cssText=`
        padding: 6px 16px;
        background: #4a9eff;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,W.tabIndex=-1,W.addEventListener("click",()=>{const L=M.value,Q=parseInt(L.slice(1,3),16)/255,$=parseInt(L.slice(3,5),16)/255,k=parseInt(L.slice(5,7),16)/255,V={position:t.position,intensity:t.intensity,direction:t.direction,coneAngle:t.coneAngle,color:[Q,$,k],enabled:t.enabled};r(V)});const Y=document.createElement("button");return Y.textContent="Cancel",Y.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,Y.tabIndex=-1,Y.addEventListener("click",()=>{i()}),G.appendChild(Y),G.appendChild(W),s.appendChild(G),s}let Te=1e-6;const lu=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);lu.get(Float32Array);let or=Float32Array;function Ye(e,t,n){const r=new or(3);return e!==void 0&&(r[0]=e,t!==void 0&&(r[1]=t,n!==void 0&&(r[2]=n))),r}function ai(e,t,n){return n=n||new or(3),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function Zt(e,t,n){n=n||new or(3);const r=e[2]*t[0]-e[0]*t[2],i=e[0]*t[1]-e[1]*t[0];return n[0]=e[1]*t[2]-e[2]*t[1],n[1]=r,n[2]=i,n}function pt(e,t){t=t||new or(3);const n=e[0],r=e[1],i=e[2],s=Math.sqrt(n*n+r*r+i*i);return s>1e-5?(t[0]=n/s,t[1]=r/s,t[2]=i/s):(t[0]=0,t[1]=0,t[2]=0),t}let ce=Float32Array;function uu(e){const t=ce;return ce=e,t}function fu(e,t,n,r,i,s,o,a,c,f,l,u,h,m,d,v){const x=new ce(16);return e!==void 0&&(x[0]=e,t!==void 0&&(x[1]=t,n!==void 0&&(x[2]=n,r!==void 0&&(x[3]=r,i!==void 0&&(x[4]=i,s!==void 0&&(x[5]=s,o!==void 0&&(x[6]=o,a!==void 0&&(x[7]=a,c!==void 0&&(x[8]=c,f!==void 0&&(x[9]=f,l!==void 0&&(x[10]=l,u!==void 0&&(x[11]=u,h!==void 0&&(x[12]=h,m!==void 0&&(x[13]=m,d!==void 0&&(x[14]=d,v!==void 0&&(x[15]=v)))))))))))))))),x}function hu(e,t){return t=t||new ce(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=0,t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function du(e,t){t=t||new ce(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,a=r+r,c=i+i,f=n*o,l=r*o,u=r*a,h=i*o,m=i*a,d=i*c,v=s*o,x=s*a,b=s*c;return t[0]=1-u-d,t[1]=l+b,t[2]=h-x,t[3]=0,t[4]=l-b,t[5]=1-f-d,t[6]=m+v,t[7]=0,t[8]=h+x,t[9]=m-v,t[10]=1-f-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function pu(e,t){return t=t||new ce(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function ci(e,t){return t=t||new ce(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}const mu=ci;function gu(e,t){return Math.abs(e[0]-t[0])<Te&&Math.abs(e[1]-t[1])<Te&&Math.abs(e[2]-t[2])<Te&&Math.abs(e[3]-t[3])<Te&&Math.abs(e[4]-t[4])<Te&&Math.abs(e[5]-t[5])<Te&&Math.abs(e[6]-t[6])<Te&&Math.abs(e[7]-t[7])<Te&&Math.abs(e[8]-t[8])<Te&&Math.abs(e[9]-t[9])<Te&&Math.abs(e[10]-t[10])<Te&&Math.abs(e[11]-t[11])<Te&&Math.abs(e[12]-t[12])<Te&&Math.abs(e[13]-t[13])<Te&&Math.abs(e[14]-t[14])<Te&&Math.abs(e[15]-t[15])<Te}function vu(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function bo(e){return e=e||new ce(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function yu(e,t){if(t=t||new ce(16),t===e){let y;return y=e[1],e[1]=e[4],e[4]=y,y=e[2],e[2]=e[8],e[8]=y,y=e[3],e[3]=e[12],e[12]=y,y=e[6],e[6]=e[9],e[9]=y,y=e[7],e[7]=e[13],e[13]=y,y=e[11],e[11]=e[14],e[14]=y,t}const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],l=e[8],u=e[9],h=e[10],m=e[11],d=e[12],v=e[13],x=e[14],b=e[15];return t[0]=n,t[1]=o,t[2]=l,t[3]=d,t[4]=r,t[5]=a,t[6]=u,t[7]=v,t[8]=i,t[9]=c,t[10]=h,t[11]=x,t[12]=s,t[13]=f,t[14]=m,t[15]=b,t}function xo(e,t){t=t||new ce(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],l=e[8],u=e[9],h=e[10],m=e[11],d=e[12],v=e[13],x=e[14],b=e[15],y=h*b,B=x*m,S=c*b,E=x*f,_=c*m,R=h*f,M=i*b,F=x*s,G=i*m,W=h*s,Y=i*f,L=c*s,Q=l*v,$=d*u,k=o*v,V=d*a,z=o*u,le=l*a,me=n*v,Z=d*r,te=n*u,ye=l*r,Pe=n*a,be=o*r,xe=y*a+E*u+_*v-(B*a+S*u+R*v),we=B*r+M*u+W*v-(y*r+F*u+G*v),ge=S*r+F*a+Y*v-(E*r+M*a+L*v),je=R*r+G*a+L*u-(_*r+W*a+Y*u),ue=1/(n*xe+o*we+l*ge+d*je);return t[0]=ue*xe,t[1]=ue*we,t[2]=ue*ge,t[3]=ue*je,t[4]=ue*(B*o+S*l+R*d-(y*o+E*l+_*d)),t[5]=ue*(y*n+F*l+G*d-(B*n+M*l+W*d)),t[6]=ue*(E*n+M*o+L*d-(S*n+F*o+Y*d)),t[7]=ue*(_*n+W*o+Y*l-(R*n+G*o+L*l)),t[8]=ue*(Q*f+V*m+z*b-($*f+k*m+le*b)),t[9]=ue*($*s+me*m+ye*b-(Q*s+Z*m+te*b)),t[10]=ue*(k*s+Z*f+Pe*b-(V*s+me*f+be*b)),t[11]=ue*(le*s+te*f+be*m-(z*s+ye*f+Pe*m)),t[12]=ue*(k*h+le*x+$*c-(z*x+Q*c+V*h)),t[13]=ue*(te*x+Q*i+Z*h-(me*h+ye*x+$*i)),t[14]=ue*(me*c+be*x+V*i-(Pe*x+k*i+Z*c)),t[15]=ue*(Pe*h+z*i+ye*c-(te*c+be*h+le*i)),t}function bu(e){const t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],c=e[7],f=e[8],l=e[9],u=e[10],h=e[11],m=e[12],d=e[13],v=e[14],x=e[15],b=u*x,y=v*h,B=a*x,S=v*c,E=a*h,_=u*c,R=r*x,M=v*i,F=r*h,G=u*i,W=r*c,Y=a*i,L=b*o+S*l+E*d-(y*o+B*l+_*d),Q=y*n+R*l+G*d-(b*n+M*l+F*d),$=B*n+M*o+W*d-(S*n+R*o+Y*d),k=_*n+F*o+Y*l-(E*n+G*o+W*l);return t*L+s*Q+f*$+m*k}const xu=xo;function So(e,t,n){n=n||new ce(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],c=e[5],f=e[6],l=e[7],u=e[8],h=e[9],m=e[10],d=e[11],v=e[12],x=e[13],b=e[14],y=e[15],B=t[0],S=t[1],E=t[2],_=t[3],R=t[4],M=t[5],F=t[6],G=t[7],W=t[8],Y=t[9],L=t[10],Q=t[11],$=t[12],k=t[13],V=t[14],z=t[15];return n[0]=r*B+a*S+u*E+v*_,n[1]=i*B+c*S+h*E+x*_,n[2]=s*B+f*S+m*E+b*_,n[3]=o*B+l*S+d*E+y*_,n[4]=r*R+a*M+u*F+v*G,n[5]=i*R+c*M+h*F+x*G,n[6]=s*R+f*M+m*F+b*G,n[7]=o*R+l*M+d*F+y*G,n[8]=r*W+a*Y+u*L+v*Q,n[9]=i*W+c*Y+h*L+x*Q,n[10]=s*W+f*Y+m*L+b*Q,n[11]=o*W+l*Y+d*L+y*Q,n[12]=r*$+a*k+u*V+v*z,n[13]=i*$+c*k+h*V+x*z,n[14]=s*$+f*k+m*V+b*z,n[15]=o*$+l*k+d*V+y*z,n}const Su=So;function wu(e,t,n){return n=n||bo(),e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11]),n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Bu(e,t){return t=t||Ye(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Cu(e,t,n){n=n||Ye();const r=t*4;return n[0]=e[r+0],n[1]=e[r+1],n[2]=e[r+2],n}function Pu(e,t,n,r){r!==e&&(r=ci(e,r));const i=n*4;return r[i+0]=t[0],r[i+1]=t[1],r[i+2]=t[2],r}function Mu(e,t){t=t||Ye();const n=e[0],r=e[1],i=e[2],s=e[4],o=e[5],a=e[6],c=e[8],f=e[9],l=e[10];return t[0]=Math.sqrt(n*n+r*r+i*i),t[1]=Math.sqrt(s*s+o*o+a*a),t[2]=Math.sqrt(c*c+f*f+l*l),t}function Tu(e,t,n,r,i){i=i||new ce(16);const s=Math.tan(Math.PI*.5-.5*e);if(i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,r===1/0)i[10]=-1,i[14]=-n;else{const o=1/(n-r);i[10]=r*o,i[14]=r*n*o}return i}function Ou(e,t,n,r,i,s,o){return o=o||new ce(16),o[0]=2/(t-e),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(r-n),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(i-s),o[11]=0,o[12]=(t+e)/(e-t),o[13]=(r+n)/(n-r),o[14]=i/(i-s),o[15]=1,o}function Eu(e,t,n,r,i,s,o){o=o||new ce(16);const a=t-e,c=r-n,f=i-s;return o[0]=2*i/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/c,o[6]=0,o[7]=0,o[8]=(e+t)/a,o[9]=(r+n)/c,o[10]=s/f,o[11]=-1,o[12]=0,o[13]=0,o[14]=i*s/f,o[15]=0,o}let fe,ve,se;function _u(e,t,n,r){return r=r||new ce(16),fe=fe||Ye(),ve=ve||Ye(),se=se||Ye(),pt(ai(t,e,se),se),pt(Zt(n,se,fe),fe),pt(Zt(se,fe,ve),ve),r[0]=fe[0],r[1]=fe[1],r[2]=fe[2],r[3]=0,r[4]=ve[0],r[5]=ve[1],r[6]=ve[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function Uu(e,t,n,r){return r=r||new ce(16),fe=fe||Ye(),ve=ve||Ye(),se=se||Ye(),pt(ai(e,t,se),se),pt(Zt(n,se,fe),fe),pt(Zt(se,fe,ve),ve),r[0]=fe[0],r[1]=fe[1],r[2]=fe[2],r[3]=0,r[4]=ve[0],r[5]=ve[1],r[6]=ve[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function Ru(e,t,n,r){return r=r||new ce(16),fe=fe||Ye(),ve=ve||Ye(),se=se||Ye(),pt(ai(e,t,se),se),pt(Zt(n,se,fe),fe),pt(Zt(se,fe,ve),ve),r[0]=fe[0],r[1]=ve[0],r[2]=se[0],r[3]=0,r[4]=fe[1],r[5]=ve[1],r[6]=se[1],r[7]=0,r[8]=fe[2],r[9]=ve[2],r[10]=se[2],r[11]=0,r[12]=-(fe[0]*e[0]+fe[1]*e[1]+fe[2]*e[2]),r[13]=-(ve[0]*e[0]+ve[1]*e[1]+ve[2]*e[2]),r[14]=-(se[0]*e[0]+se[1]*e[1]+se[2]*e[2]),r[15]=1,r}function Iu(e,t){return t=t||new ce(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Du(e,t,n){n=n||new ce(16);const r=t[0],i=t[1],s=t[2],o=e[0],a=e[1],c=e[2],f=e[3],l=e[4],u=e[5],h=e[6],m=e[7],d=e[8],v=e[9],x=e[10],b=e[11],y=e[12],B=e[13],S=e[14],E=e[15];return e!==n&&(n[0]=o,n[1]=a,n[2]=c,n[3]=f,n[4]=l,n[5]=u,n[6]=h,n[7]=m,n[8]=d,n[9]=v,n[10]=x,n[11]=b),n[12]=o*r+l*i+d*s+y,n[13]=a*r+u*i+v*s+B,n[14]=c*r+h*i+x*s+S,n[15]=f*r+m*i+b*s+E,n}function Au(e,t){t=t||new ce(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Fu(e,t,n){n=n||new ce(16);const r=e[4],i=e[5],s=e[6],o=e[7],a=e[8],c=e[9],f=e[10],l=e[11],u=Math.cos(t),h=Math.sin(t);return n[4]=u*r+h*a,n[5]=u*i+h*c,n[6]=u*s+h*f,n[7]=u*o+h*l,n[8]=u*a-h*r,n[9]=u*c-h*i,n[10]=u*f-h*s,n[11]=u*l-h*o,e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function zu(e,t){t=t||new ce(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Gu(e,t,n){n=n||new ce(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[8],c=e[9],f=e[10],l=e[11],u=Math.cos(t),h=Math.sin(t);return n[0]=u*r-h*a,n[1]=u*i-h*c,n[2]=u*s-h*f,n[3]=u*o-h*l,n[8]=u*a+h*r,n[9]=u*c+h*i,n[10]=u*f+h*s,n[11]=u*l+h*o,e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Lu(e,t){t=t||new ce(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Vu(e,t,n){n=n||new ce(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],c=e[5],f=e[6],l=e[7],u=Math.cos(t),h=Math.sin(t);return n[0]=u*r+h*a,n[1]=u*i+h*c,n[2]=u*s+h*f,n[3]=u*o+h*l,n[4]=u*a-h*r,n[5]=u*c-h*i,n[6]=u*f-h*s,n[7]=u*l-h*o,e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function wo(e,t,n){n=n||new ce(16);let r=e[0],i=e[1],s=e[2];const o=Math.sqrt(r*r+i*i+s*s);r/=o,i/=o,s/=o;const a=r*r,c=i*i,f=s*s,l=Math.cos(t),u=Math.sin(t),h=1-l;return n[0]=a+(1-a)*l,n[1]=r*i*h+s*u,n[2]=r*s*h-i*u,n[3]=0,n[4]=r*i*h-s*u,n[5]=c+(1-c)*l,n[6]=i*s*h+r*u,n[7]=0,n[8]=r*s*h+i*u,n[9]=i*s*h-r*u,n[10]=f+(1-f)*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}const ju=wo;function Bo(e,t,n,r){r=r||new ce(16);let i=t[0],s=t[1],o=t[2];const a=Math.sqrt(i*i+s*s+o*o);i/=a,s/=a,o/=a;const c=i*i,f=s*s,l=o*o,u=Math.cos(n),h=Math.sin(n),m=1-u,d=c+(1-c)*u,v=i*s*m+o*h,x=i*o*m-s*h,b=i*s*m-o*h,y=f+(1-f)*u,B=s*o*m+i*h,S=i*o*m+s*h,E=s*o*m-i*h,_=l+(1-l)*u,R=e[0],M=e[1],F=e[2],G=e[3],W=e[4],Y=e[5],L=e[6],Q=e[7],$=e[8],k=e[9],V=e[10],z=e[11];return r[0]=d*R+v*W+x*$,r[1]=d*M+v*Y+x*k,r[2]=d*F+v*L+x*V,r[3]=d*G+v*Q+x*z,r[4]=b*R+y*W+B*$,r[5]=b*M+y*Y+B*k,r[6]=b*F+y*L+B*V,r[7]=b*G+y*Q+B*z,r[8]=S*R+E*W+_*$,r[9]=S*M+E*Y+_*k,r[10]=S*F+E*L+_*V,r[11]=S*G+E*Q+_*z,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}const ku=Bo;function Nu(e,t){return t=t||new ce(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function qu(e,t,n){n=n||new ce(16);const r=t[0],i=t[1],s=t[2];return n[0]=r*e[0],n[1]=r*e[1],n[2]=r*e[2],n[3]=r*e[3],n[4]=i*e[4],n[5]=i*e[5],n[6]=i*e[6],n[7]=i*e[7],n[8]=s*e[8],n[9]=s*e[9],n[10]=s*e[10],n[11]=s*e[11],e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}var lt=Object.freeze({__proto__:null,aim:_u,axisRotate:Bo,axisRotation:wo,cameraAim:Uu,clone:mu,copy:ci,create:fu,determinant:bu,equals:vu,equalsApproximately:gu,fromMat3:hu,fromQuat:du,frustum:Eu,getAxis:Cu,getScaling:Mu,getTranslation:Bu,identity:bo,inverse:xo,invert:xu,lookAt:Ru,mul:Su,multiply:So,negate:pu,ortho:Ou,perspective:Tu,rotate:ku,rotateX:Fu,rotateY:Gu,rotateZ:Vu,rotation:ju,rotationX:Au,rotationY:zu,rotationZ:Lu,scale:qu,scaling:Nu,setAxis:Pu,setDefaultType:uu,setTranslation:wu,translate:Du,translation:Iu,transpose:yu});async function Wu(e){const t=new Hn;return await t.initialize(e),t}class Hn{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=sr();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=Mt(this.device,su,ou,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(t){if(t!==null)return new Promise((n,r)=>{if(t.addEventListener("error",r),"requestVideoFrameCallback"in t)t.requestVideoFrameCallback((i,s)=>{n()});else{const i=s=>{s.currentTime>0?n():requestAnimationFrame(()=>i(s))};i(t)}t.play().catch(r)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const t=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),n=8,r=8,i=64,s=n*this.numberOfObjects,o=r*this.numberOfObjects,a=i*this.numberOfObjects,c=yo(),f=c.vertexData.byteLength,l=c.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:f,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,c.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:c.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,c.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const u=[];{const B=new Float32Array(s/4);for(let S=0;S<this.numberOfObjects;S++){const E=S*(n/4);B.set([oe(-.9,.9),oe(-.9,.9)],E);const _={scale:oe(.2,.6)};u.push(_)}this.perInstanceOffsets=new Float32Array(B),this.device.queue.writeBuffer(this.staticBuffer,0,B)}const h=new Float32Array(o/4),m=new Float32Array(a/4);let d=0,v=0,x=0;const b=1e4,y=B=>{if(this.canvas===null||this.device===null||this.context===null)return;const S=B-d;v+=S,d=B;const E=performance.now(),_=60*Math.PI/180,R=this.canvas.width/this.canvas.height,G=lt.perspective(_,R,.1,2e3),W=[0,0,2],Y=[0,1,0],L=[0,0,0],Q=lt.lookAt(W,L,Y),k=lt.multiply(G,Q),V=v/b*2*Math.PI,z=this.canvas.width/this.canvas.height*.5;u.forEach((we,ge)=>{const je=ge*(r/4),ue=ge*(i/4);h.set([we.scale,we.scale],je);const en=this.perInstanceOffsets[2*ge+0],p=this.perInstanceOffsets[2*ge+1],g=lt.create();lt.copy(k,g),lt.translate(g,[en,p,0],g),lt.rotateX(g,V,g),lt.rotateY(g,.2*Math.sin(V),g),lt.scale(g,[2*z,1*z,1],g),m.set(g,ue)});const me={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},Z=this.device.createCommandEncoder({label:"Render Quad Encoder"}),te=Z.beginRenderPass(me);te.setPipeline(this.simpleTexturePipeline),te.setVertexBuffer(0,this.vertexBuffer),te.setVertexBuffer(1,this.staticBuffer),te.setVertexBuffer(2,this.changingBuffer),te.setIndexBuffer(this.indexBuffer,"uint16");const ye=this.device.importExternalTexture({source:this.video}),Pe=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:t},{binding:1,resource:ye},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,h),this.device.queue.writeBuffer(this.storageBuffer,0,m),te.setBindGroup(0,Pe),te.drawIndexed(l,this.numberOfObjects),te.end(),this.timestampQuerySet!=null&&(Z.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&Z.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const be=Z.finish();this.device.queue.submit([be]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const we=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());x=Number(we[1]-we[0]),this.timestampQuerySet.resultBuffer.unmap()});const xe=performance.now()-E;if(this.infoElement&&this.device){const we=`                FPS: ${(1e3/S).toFixed(1)}
                JS Time: ${xe.toFixed(1)} ms
                GPU Time: ${(x/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=we}this.animationFrameId=requestAnimationFrame(y)};this.animationFrameId=requestAnimationFrame(y),this.resizeObserver=new ResizeObserver(B=>{for(const S of B){const E=S.contentBoxSize[0].inlineSize,_=S.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(E,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(_,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.slider){const t=Tt();if(t!==null)for(;t.firstChild;)t.removeChild(t.firstChild);this.slider=null}if(this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const t=Tt();if(t===null)return;const n=document.createElement("label");n.textContent=`Number of Objects: ${this.numberOfObjects}`,n.htmlFor="numObjectsSlider",t.appendChild(n),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=Hn.minObjects.toString(),this.slider.max=Hn.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",t.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),n.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let r=!1;const i=async()=>{if(!r){r=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{r=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const Hu=`// ============================== //\r
struct vertexStruct {\r
    @location(0) position: vec2f,\r
    @location(1) color: vec4f,\r
    @location(2) worldPos: vec3f,\r
    @location(3) scale: vec2f,\r
};\r
\r
// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f,\r
};\r
\r
// ============================== //\r
struct ScreenInfo {\r
    worldSize : vec2f, // e.g. vec2f(100.0, 50.0)\r
};\r
\r
@group(0) @binding(0) \r
var<uniform> uScreen : ScreenInfo;\r
\r
// ============================== //\r
@vertex\r
fn vs(\r
    vert: vertexStruct,\r
) -> OurVertexShaderOutput\r
{\r
    var out: OurVertexShaderOutput;\r
\r
    let rotation : f32 = vert.worldPos.z;\r
    let cosR : f32 = cos(rotation);\r
    let sinR : f32 = sin(rotation);\r
\r
    let scaledPos : vec2f = vert.position * vert.scale;\r
    let rotatedX : f32 = scaledPos.x * cosR - scaledPos.y * sinR;\r
    let rotatedY : f32 = scaledPos.x * sinR + scaledPos.y * cosR;\r
    let worldRotated : vec2f = vert.worldPos.xy + vec2f(rotatedX, rotatedY);\r
\r
    // Map world [0..worldSize] -> NDC [-1..1]\r
    let ndc : vec2f = vec2f(\r
        (worldRotated.x / uScreen.worldSize.x) * 2.0 - 1.0,\r
        (worldRotated.y / uScreen.worldSize.y) * 2.0 - 1.0\r
    );\r
\r
    out.position = vec4f(ndc, 0.0, 1.0);\r
    out.color = vert.color;\r
    return out;\r
}`,$u=`// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) @interpolate(perspective) color: vec4f\r
};\r
\r
// ============================== //\r
@fragment\r
fn fs(input: OurVertexShaderOutput) -> @location(0) vec4f\r
{\r
    return input.color;\r
}`,Yu=`// ============================== //\r
struct Screen {\r
    worldSize : vec2<f32>,\r
    pad : vec2<f32>,\r
};\r
\r
// ============================== //\r
@group(0) @binding(0) var<uniform> screen : Screen;\r
\r
// ============================== //\r
struct VSOut {\r
    @builtin(position) position : vec4<f32>,\r
    @location(0) color : vec3<f32>,\r
};\r
\r
// ============================== //\r
@vertex\r
fn vs(\r
    @location(0) position : vec2<f32>,     // Circle vertex local coordinates\r
    @location(1) instancePos : vec2<f32>   // Contact center (world-space)\r
) -> VSOut {\r
    var out : VSOut;\r
\r
    let radius = 0.1;\r
    let posFixed = vec2<f32>(position.x, position.y);\r
    let world = instancePos + posFixed * radius;\r
    let ndc = vec2<f32>(\r
        (world.x / screen.worldSize.x) * 2.0 - 1.0,\r
        (world.y / screen.worldSize.y) * 2.0 - 1.0\r
    );\r
\r
    out.position = vec4<f32>(ndc.x, ndc.y, 0.0, 1.0);\r
\r
    out.color = vec3<f32>(1.0, 0.0, 0.0);\r
    return out;\r
}\r
`,Qu=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class wn{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(t,n){this.bodyA=t,this.bodyB=n;for(let r=0;r<wn.MAX_ROWS;++r){this.J.push(j(0,0,0));const i=oi();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let t=0;t<wn.MAX_ROWS;++t)this.stiffness[t]=0,this.penalty[t]=0,this.lambda[t]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(t){console.warn("This method should not be called directly.")}computeDerivatives(t){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class Xu{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=j(0,0,0);inertial=j(0,0,0);id=-1;forces=[];constructor(t,n,r,i,s,o){this.width=t[0],this.height=t[1],this.density=r,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*We(t,t)/12,this.radius=Math.sqrt(We(t,t))*.5,this.color=n}getScale(){return ne(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return ne(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(t){this.staticBody||(this.velocity=t)}getRotationMatrix(){const t=Math.cos(this.position[2]),n=Math.sin(this.position[2]);return qn(t,n,-n,t)}setPosition(t){this.staticBody||(this.position=t)}setColor(t){this.color=t}isConstrainedTo(t){for(let n=0;n<this.forces.length;++n){const r=this.forces[n];if(r.bodyA===this&&r.bodyB===t||r.bodyB===this&&r.bodyA===t)return!0}return!1}}const Ge=12,Ne=8,It=4,Ku=8,Ju=6,rs=256,Zu=16;class nt{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(rs*(Ge+Ne)/4);numInstances=0;maxInstances=rs;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(t,n){this.canvas=t,this.gameManager=n}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(t=>{for(const n of t){const r=n.contentBoxSize[0].inlineSize,i=n.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(r,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(t){return this.addInstance(t.getPosition(),t.getScale(),t.getColor())}addInstance(t,n,r){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*It,r);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,t),this.updateInstanceScale(s,n),s}removeInstance(t){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const n=this.idToIndexMap.get(t);if(n===void 0)return;const r=this.numInstances-1;if(n!==r){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,r*It,this.staticBuffer,n*It,It),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,o=n*(Ge+Ne)/4,a=r*(Ge+Ne)/4;s[o+0]=s[a+0],s[o+1]=s[a+1],s[o+2]=s[a+2],s[o+3]=s[a+3];const c=this.indexToId[r];this.indexToId[n]=c,this.idToIndexMap.set(c,n)}this.idToIndexMap.delete(t),this.indexToId.pop(),this.numInstances--}updateInstanceScale(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Ge+Ne)/4+3]=n[0],this.changingCpuArray[r*(Ge+Ne)/4+4]=n[1])}updateInstancePosition(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Ge+Ne)/4+0]=n[0],this.changingCpuArray[r*(Ge+Ne)/4+1]=n[1],this.changingCpuArray[r*(Ge+Ne)/4+2]=n[2])}updateContacts(t){if(this.numContacts=Math.min(t.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let n=0;n<this.numContacts;++n)this.contactPositions[n*2+0]=t[n].pos[0],this.contactPositions[n*2+1]=t[n].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const t=this.context.getCurrentTexture().createView(),n={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:t,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},r=this.device.createCommandEncoder({label:"canvas render encoder"}),i=r.beginRenderPass(n);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(Ge+Ne);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(Ju,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!vl(this.timestampQuerySet,r)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([r.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const t=this.maxInstances*It,n=this.maxInstances*(Ge+Ne),r=yo(),i=r.vertexData.byteLength,s=r.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,r.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,r.indexData);const o=jl({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=gl(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:Zu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=new Float32Array([nt.xWorldSize,nt.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,a.buffer,a.byteOffset,a.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const t=this.maxInstances*It,n=this.maxInstances*(Ge+Ne),r=this.device.createBuffer({label:"Extended static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,r,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(Ge+Ne)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=r,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=Mt(this.device,Hu,$u,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[t]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:Ku,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:It,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:Ge+Ne,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:Ge,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=Mt(this.device,Yu,Qu,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const ef=5e-4,tf=.01,At=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),nf=e=>{const t=e.inEdge1;e.inEdge1=e.inEdge2,e.inEdge2=t;const n=e.outEdge1;e.outEdge1=e.outEdge2,e.outEdge2=n};function mn(e){return{inEdge1:e.inEdge1,outEdge1:e.outEdge1,inEdge2:e.inEdge2,outEdge2:e.outEdge2,ID:e.ID}}function Co(e){return e.inEdge1&255|(e.outEdge1&255)<<8|(e.inEdge2&255)<<16|(e.outEdge2&255)<<24}function is(){return{details:At(),pA:q(),pB:q(),n:q(),JacNormA:Be(),JacNormB:Be(),JacTangA:Be(),JacTangB:Be(),C0:q(),stick:!1}}const ss=(e,t,n,r,i)=>{let s=0;const o=We(n,t[0].v)-r,a=We(n,t[1].v)-r;if(o<=0&&(e[s++]={v:Wn(t[0].v),cd:mn(t[0].cd)}),a<=0&&(e[s++]={v:Wn(t[1].v),cd:mn(t[1].cd)}),o*a<0){const c=o/(o-a),f=Bl(q(),t[0].v,t[1].v,c);let l=mn(o>0?t[0].cd:t[1].cd);o>0?(l.inEdge1=i,l.inEdge2=0):(l.outEdge1=i,l.outEdge2=0),l.ID=Co(l),e[s++]={v:f,cd:l}}return s},_n=(e,t,n,r,i)=>{const s=An(an(),r),o=Oe(q(),i,s);ut(o,o,-1);const a=ne(Math.abs(o[0]),Math.abs(o[1]));a[0]>a[1]?o[0]>0?(e[0].v=ne(t[0],-t[1]),e[0].cd.inEdge2=3,e[0].cd.outEdge2=4,e[1].v=ne(t[0],t[1]),e[1].cd.inEdge2=4,e[1].cd.outEdge2=1):(e[0].v=ne(-t[0],t[1]),e[0].cd.inEdge2=1,e[0].cd.outEdge2=2,e[1].v=ne(-t[0],-t[1]),e[1].cd.inEdge2=2,e[1].cd.outEdge2=3):o[1]>0?(e[0].v=ne(t[0],t[1]),e[0].cd.inEdge2=4,e[0].cd.outEdge2=1,e[1].v=ne(-t[0],t[1]),e[1].cd.inEdge2=1,e[1].cd.outEdge2=2):(e[0].v=ne(-t[0],-t[1]),e[0].cd.inEdge2=2,e[0].cd.outEdge2=3,e[1].v=ne(t[0],-t[1]),e[1].cd.inEdge2=3,e[1].cd.outEdge2=4),e[0].v=ht(q(),n,Oe(q(),e[0].v,r)),e[1].v=ht(q(),n,Oe(q(),e[1].v,r))};class li extends wn{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(t,n){super(t,n);for(let r=0;r<wn.MAX_ROWS;++r)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const t=this.penalty.slice(),n=this.lambda.slice(),r=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=li.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const o=this.contacts[s].details.ID,a=this.oldContacts.findIndex(c=>c.details.ID===o);a!==-1&&(this.penalty[s*2+0]=t[a*2+0],this.penalty[s*2+1]=t[a*2+1],this.lambda[s*2+0]=n[a*2+0],this.lambda[s*2+1]=n[a*2+1],this.contacts[s].stick=r[a],this.contacts[s].stick&&(this.contacts[s].pA=Wn(this.oldContacts[a].pA),this.contacts[s].pB=Wn(this.oldContacts[a].pB)))}for(let s=0;s<this.contacts.length;++s){const o=this.contacts[s].n,a=ne(o[1],-o[0]),c=qn(o[0],o[1],a[0],a[1]),f=Oe(q(),this.contacts[s].pA,jt(this.bodyA.getPosition()[2])),l=Oe(q(),this.contacts[s].pB,jt(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=j(c[0],c[2],En(f,o)),this.contacts[s].JacNormB=j(-c[0],-c[2],-En(l,o)),this.contacts[s].JacTangA=j(c[1],c[3],En(f,a)),this.contacts[s].JacTangB=j(-c[1],-c[3],-En(l,a));const u=et(q(),ht(q(),this.bodyA.getPos2(),f),ht(q(),this.bodyB.getPos2(),l));this.contacts[s].C0=Oe(this.contacts[s].C0,u,c),this.contacts[s].C0=ht(this.contacts[s].C0,this.contacts[s].C0,ne(ef,0))}return this.contacts.length>0}computeConstraints(t){for(let n=0;n<this.contacts.length;++n){const r=qt(Be(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=qt(Be(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=ut(q(),this.contacts[n].C0,1-t);this.C[n*2+0]=s[0]+On(this.contacts[n].JacNormA,r)+On(this.contacts[n].JacNormB,i),this.C[n*2+1]=s[1]+On(this.contacts[n].JacTangA,r)+On(this.contacts[n].JacTangB,i);const o=Math.abs(this.lambda[n*2+0])*this.friction;this.fmax[n*2+1]=o,this.fmin[n*2+1]=-o,this.contacts[n].stick=Math.abs(this.lambda[n*2+1])<o&&Math.abs(this.contacts[n].C0[1])<tf}}computeDerivatives(t){for(let n=0;n<this.contacts.length;++n)t===this.bodyA?(this.J[n*2+0]=this.contacts[n].JacNormA,this.J[n*2+1]=this.contacts[n].JacTangA):(this.J[n*2+0]=this.contacts[n].JacNormB,this.J[n*2+1]=this.contacts[n].JacTangB)}static collide(t,n,r){r.length=0;let i=q();const s=jt(t.getPosition()[2]),o=jt(n.getPosition()[2]),a=An(an(),s),c=An(an(),o),f=ut(q(),t.getScale(),.5),l=ut(q(),n.getScale(),.5),u=t.getPos2(),h=n.getPos2(),m=t.getRotationMatrix(),d=n.getRotationMatrix(),v=et(q(),h,u),x=Oe(q(),v,a),b=Oe(q(),v,c),y=ne(Math.abs(x[0]),Math.abs(x[1])),B=ne(Math.abs(b[0]),Math.abs(b[1])),S=yl(an(),a,d),E=qn(Math.abs(S[0]),Math.abs(S[1]),Math.abs(S[2]),Math.abs(S[3])),_=An(an(),E),R=et(q(),y,ht(q(),f,Oe(q(),l,E))),M=et(q(),B,ht(q(),l,Oe(q(),f,_)));if(R[0]>0||R[1]>0||M[0]>0||M[1]>0)return 0;let F,G;F=1,G=R[0],x[0]>0?i=ne(m[0],m[1]):i=ne(-m[0],-m[1]);const W=.95,Y=.01;R[1]>W*G+Y*f[1]&&(F=2,G=R[1],x[1]>0?i=ne(m[2],m[3]):i=ne(-m[2],-m[3])),M[0]>W*G+Y*l[0]&&(F=3,G=M[0],b[0]>0?i=ne(d[0],d[1]):i=ne(-d[0],-d[1])),M[1]>W*G+Y*l[1]&&(F=4,G=M[1],b[1]>0?i=ne(d[2],d[3]):i=ne(-d[2],-d[3]));let L,Q;const $=[{cd:At(),v:q()},{cd:At(),v:q()}];let k,V,z,le=0,me=0,Z;switch(F){case 1:L=i,k=We(u,L)+f[0],Q=ne(m[2],m[3]),Z=We(u,Q),V=-Z+f[1],z=Z+f[1],le=3,me=1,_n($,l,h,d,L);break;case 2:L=i,k=We(u,L)+f[1],Q=ne(m[0],m[1]),Z=We(u,Q),V=-Z+f[0],z=Z+f[0],le=2,me=4,_n($,l,h,d,L);break;case 3:L=ut(q(),i,-1),k=We(h,L)+l[0],Q=ne(d[2],d[3]),Z=We(h,Q),V=-Z+l[1],z=Z+l[1],le=3,me=1,_n($,f,u,m,L);break;case 4:L=ut(q(),i,-1),k=We(h,L)+l[1],Q=ne(d[0],d[1]),Z=We(h,Q),V=-Z+l[0],z=Z+l[0],le=2,me=4,_n($,f,u,m,L);break}const te=[{cd:At(),v:q()},{cd:At(),v:q()}],ye=[{cd:At(),v:q()},{cd:At(),v:q()}];let Pe;if(Pe=ss(te,$,ut(q(),Q,-1),V,le),Pe<2||(Pe=ss(ye,te,Q,z,me),Pe<2))return 0;r.push(is(),is());let be=0;for(let xe=0;xe<2;++xe){const we=We(L,ye[xe].v)-k;if(we<=0){const ge=r[be];ge.n=ut(q(),i,-1);const je=F===3||F===4,ue=et(q(),ye[xe].v,ut(q(),L,we));if(!je)ge.pA=Oe(q(),et(q(),ue,u),a),ge.pB=Oe(q(),et(q(),ye[xe].v,h),c),ge.details=mn(ye[xe].cd);else{ge.pA=Oe(q(),et(q(),ye[xe].v,u),a),ge.pB=Oe(q(),et(q(),ue,h),c);let en=mn(ye[xe].cd);nf(en),ge.details=en}if(ge.details.ID=Co(ge.details),++be,be===2)break}}return r.length=be,be}getContactRenders(){const t=[],n=jt(this.bodyA.getPosition()[2]),r=jt(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const a=ht(q(),i,Oe(q(),this.contacts[o].pA,n));t.push({pos:a});const c=ht(q(),s,Oe(q(),this.contacts[o].pB,r));t.push({pos:c})}return t}getRows(){return this.contacts.length*2}}const Un=1,sn=1e9;class rf{dt=0;gravity=ne(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=ne(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(t){Math.abs(t-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${t}. This may cause instability.`),this.contactsToRender=[];for(let r=0;r<this.bodies.length;++r)for(let i=r+1;i<this.bodies.length;++i){const s=this.bodies[r],o=this.bodies[i],a=et(q(),s.getPos2(),o.getPos2()),c=s.getRadius()+o.getRadius();if(wl(a)<=c*c&&!s.isConstrainedTo(o)){let f=new li(s,o);this.forces.push(f),s.forces.push(f),o.forces.push(f)}}for(let r=0;r<this.forces.length;++r){const i=this.forces[r];if(!i.initialize()){this.forces.splice(r,1),--r;const o=i.bodyA.forces.indexOf(i);o!==-1&&i.bodyA.forces.splice(o,1);const a=i.bodyB.forces.indexOf(i);a!==-1&&i.bodyB.forces.splice(a,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let o=0;o<i.getRows();++o){if(this.postStabilization){let a=i.penalty[o]*this.gamma;a<Un&&(a=Un),a>sn&&(a=sn),i.penalty[o]=a}else{i.lambda[o]=i.lambda[o]*this.alpha*this.gamma;let a=i.penalty[o]*this.gamma;a<Un&&(a=Un),a>sn&&(a=sn),i.penalty[o]=a}i.penalty[o]=Math.min(i.penalty[o],i.stiffness[o])}}for(let r=0;r<this.bodies.length;++r){const i=this.bodies[r];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(j(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=Nt(Be(),i.getPosition(),bt(Be(),i.getVelocity(),this.dt)),i.getMass()!==0){let u=bt(Be(),j(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=Nt(i.inertial,i.inertial,u)}let c=bt(Be(),qt(Be(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);c<0&&(c=0),c>1&&(c=1),i.lastPosition=bl(i.getPosition());const f=bt(Be(),i.getVelocity(),this.dt),l=bt(Be(),j(this.gravity[0],this.gravity[1],0),c*this.dt*this.dt);i.setPosition(Nt(Be(),i.getPosition(),Nt(Be(),f,l)))}const n=this.iterations+(this.postStabilization?1:0);for(let r=0;r<n;++r){let i=this.alpha;this.postStabilization&&(i=r<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const o=Vr(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),a=Ki(oi(),o,1/(this.dt*this.dt)),c=jr(Be(),qt(Be(),s.getPosition(),s.inertial),a);for(const l of s.forces){l.computeConstraints(i),l.computeDerivatives(s);for(let u=0;u<l.getRows();++u){let h=l.stiffness[u]===1/0?l.lambda[u]:0,m=l.penalty[u]*l.C[u]+h;m<l.fmin[u]&&(m=l.fmin[u]),m>l.fmax[u]&&(m=l.fmax[u]);const d=Vr(wr(j(l.H[u][0],l.H[u][3],l.H[u][6])),0,0,0,wr(j(l.H[u][1],l.H[u][4],l.H[u][7])),0,0,0,wr(j(l.H[u][2],l.H[u][5],l.H[u][8])));Ki(d,d,Math.abs(m)),Nt(c,c,bt(Be(),l.J[u],m));const v=Cl(l.J[u],bt(Be(),l.J[u],l.penalty[u]));Xi(a,a,v),Xi(a,a,d)}}const f=Pl(a,c);s.setPosition(qt(Be(),s.getPosition(),f))}if(r<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let o=0;o<s.getRows();++o){let a=s.stiffness[o]===1/0?s.lambda[o]:0;s.lambda[o]=a+s.penalty[o]*s.C[o],s.lambda[o]<s.fmin[o]&&(s.lambda[o]=s.fmin[o]),s.lambda[o]>s.fmax[o]&&(s.lambda[o]=s.fmax[o]),Math.abs(s.lambda[o])>=s.fracture[o]&&s.disable(),s.lambda[o]>s.fmin[o]&&s.lambda[o]<s.fmax[o]&&(s.penalty[o]=Math.min(s.penalty[o]+this.beta*Math.abs(s.C[o]),Math.min(s.stiffness[o],sn)))}}if(r==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const o=qt(Be(),s.getPosition(),s.lastPosition);bt(o,o,1/this.dt),s.setVelocity(o)}}}}addRigidBox(t){this.bodies.indexOf(t)===-1&&this.bodies.push(t)}removeRigidBox(t){const n=this.bodies.indexOf(t);n!==-1&&this.bodies.splice(n,1)}}class sf{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(t){this.canvas=t,this.gameRenderer=new nt(this.canvas,this),this.solver=new rf,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(t){this.logging&&console.log(`[GameManager] ${t}`)}logWarn(t){this.logging&&console.warn(`[GameManager] ${t}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const t=j(nt.xWorldSize*.5,8,0),n=ne(nt.xWorldSize-20,10);this.addRigidBox(t,n,j(0,0,0),new Uint8Array([200,200,200,255]),!0);const r=1/60;let i=0;this.lastFrameTime=performance.now();const s=o=>{if(!this.running)return;const a=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,i+=a;i>=r;)this.solver.step(r),i-=r;for(let c=0;c<this.solver.bodies.length;++c){const f=this.solver.bodies[c],l=f.getPosition(),u=new Float32Array([l[0],l[1],l[2]]);this.gameRenderer.updateInstancePosition(f.id,u)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s)};this.rafID=requestAnimationFrame(s)}addRigidBox(t=Ml(0,0,nt.xWorldSize,nt.yWorldSize),n=ne(oe(2,10),oe(2,10)),r=j(0,0,0),i=Tl(),s=!1){const o=new Xu(n,i,s?0:1,1,t,r);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",t=>{if(!this.canvas)return;const n=this.canvas.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top,s=r/this.canvas.width*nt.xWorldSize,o=(1-i/this.canvas.height)*nt.yWorldSize,a=j(s,o,oe(0,Math.PI*2));this.addRigidBox(a)})}}async function of(e){const t=new sf(e);return await t.initialize(),t}const af=`// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
// ============================== //\r
@vertex\r
fn vs(\r
    @builtin(vertex_index) vertex_index: u32\r
) -> OurVertexShaderOutput\r
{\r
    var positions = array<vec2f, 6>(\r
        vec2f(-1.0, -1.0),  // Triangle 1\r
        vec2f( 1.0, -1.0),\r
        vec2f(-1.0,  1.0),\r
        vec2f(-1.0,  1.0),  // Triangle 2\r
        vec2f( 1.0, -1.0),\r
        vec2f( 1.0,  1.0),\r
    );\r
    \r
    let pos = positions[vertex_index];\r
    \r
    var output: OurVertexShaderOutput;\r
    output.position = vec4f(pos, 0.0, 1.0);\r
    output.uv = pos * 0.5 + 0.5;\r
    return output;\r
}`,cf=`// ============================== //\r
struct Uniform\r
{\r
    pixelToRayMatrix: mat4x4<f32>,\r
    cameraPosition: vec4f, // w unused\r
    lightPosition: vec4f,  // w unused\r
    lightColor: vec4f,     // w unused\r
    mode: u32,\r
    lightIntensity: f32,\r
    numBounces: u32,\r
    _pad2: u32,\r
};\r
\r
// MODE FOLLOWS:\r
// 0 - normal shading\r
// 1 - normals\r
// 2 - distance\r
// 3 - reflectance debug\r
\r
// ============================== //\r
struct Ray \r
{\r
    origin: vec3f,\r
    direction: vec3f,\r
};\r
\r
// ============================== //\r
struct Hit\r
{\r
    triIndex: u32,\r
    barycentricCoords: vec3f,\r
    distance: f32,\r
    normalAtHit: vec3f,\r
    accumulatedColor: vec3f,\r
};\r
\r
// ============================== //\r
struct VertexOutput \r
{\r
    @builtin(position) position: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
@group(0) @binding(0) var<uniform> uniforms: Uniform;\r
@group(0) @binding(1) var<storage, read> vertices: array<f32>; // vec3f does not work here cause would expect a 16 byte alignment\r
@group(0) @binding(2) var<storage, read> normals: array<f32>;\r
@group(0) @binding(3) var<storage, read> colors: array<f32>;\r
@group(0) @binding(4) var<storage, read> reflectances: array<f32>;\r
@group(0) @binding(5) var<storage, read> indices: array<u32>;\r
\r
// Helper function to read a vec3 from the flat array\r
// ============================== //\r
fn getVertex(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(vertices[i], vertices[i + 1u], vertices[i + 2u]);\r
}\r
\r
// ============================== //\r
fn getNormal(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(normals[i], normals[i + 1u], normals[i + 2u]);\r
}\r
\r
// ============================== //\r
fn getColor(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(colors[i], colors[i + 1u], colors[i + 2u]);\r
}\r
\r
// ============================== //\r
fn getReflectance(index: u32) -> f32 \r
{\r
    return reflectances[index]; // one f32 per vertex\r
}\r
\r
// ============================== //\r
fn rayTriangleIntersect(ray: Ray, triIndex: u32, hitCoord: ptr<function, vec3f>) -> bool\r
{\r
    // https://scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-rendering-a-triangle/moller-trumbore-ray-triangle-intersection.html\r
    let v0 = getVertex(indices[triIndex * 3u + 0u]);\r
    let v1 = getVertex(indices[triIndex * 3u + 1u]);\r
    let v2 = getVertex(indices[triIndex * 3u + 2u]);\r
\r
    let e0 = v1 - v0;\r
    let e1 = v2 - v0;\r
\r
    let pvec: vec3f = cross(ray.direction, e1);\r
    let det: f32 = dot(e0, pvec);\r
\r
    let kEpsilon: f32 = 0.000001;\r
\r
    // culling or not, we do or don't compare absolute value of det\r
    if (det < kEpsilon) \r
    {\r
        return false; // No intersection\r
    }\r
\r
    // compute u. reject if u not in [0,1]\r
    // then v, same check and reject if u+v > 1\r
    // if met, compute t to get intersection point we know there is intersection\r
    let invDet: f32 = 1.0 / det;\r
    let tvec: vec3f = ray.origin - v0;\r
\r
    let u = dot(tvec, pvec) * invDet;\r
    if (u < 0.0 || u > 1.0) \r
    {\r
        return false;\r
    }\r
\r
    let qvec: vec3f = cross(tvec, e0);\r
    let v = dot(ray.direction, qvec) * invDet;\r
    if (v < 0.0 || (u + v) > 1.0) \r
    {\r
        return false;\r
    }\r
\r
    let t = dot(e1, qvec) * invDet;\r
\r
    if (t < kEpsilon)  // behind camera\r
    {\r
        return false;\r
    }\r
\r
    let barycentricCoords = vec3f(t, u, v);\r
    (*hitCoord) = barycentricCoords;\r
\r
    return true;\r
}\r
\r
// ============================== //\r
fn rayTraceOnce(ray: Ray, hit: ptr<function, Hit>) -> bool\r
{\r
    let numTriangles: u32 = u32(arrayLength(&indices)) / 3u;\r
\r
    var closestT: f32 = 1e30;\r
    var hitSomething: bool = false;\r
\r
    for (var i: u32 = 0u; i < numTriangles; i = i + 1u)\r
    {\r
        var barycentricCoords: vec3f;\r
        if (rayTriangleIntersect(ray, i, &barycentricCoords))\r
        {\r
            let t = barycentricCoords.x;\r
            if (t < closestT)\r
            {\r
                closestT = t;\r
                hitSomething = true;\r
\r
                let normal0 = getNormal(indices[i * 3u + 0u]);\r
                let normal1 = getNormal(indices[i * 3u + 1u]);\r
                let normal2 = getNormal(indices[i * 3u + 2u]);\r
                let interpolatedNormal = normalize(normal0 * (1.0 - barycentricCoords.y - barycentricCoords.z) + normal1 * barycentricCoords.y + normal2 * barycentricCoords.z);\r
            \r
                (*hit).triIndex = i;\r
                (*hit).barycentricCoords = barycentricCoords;\r
                (*hit).distance = t;\r
                (*hit).normalAtHit = interpolatedNormal;\r
            }\r
        }\r
    }\r
\r
    return hitSomething;\r
}\r
\r
// ============================== //\r
fn getHitColor(hit: Hit) -> vec3f\r
{\r
    let i = hit.triIndex;\r
    let bary = hit.barycentricCoords;\r
    let w = 1.0 - bary.y - bary.z;\r
    \r
    let color0 = getColor(indices[i * 3u + 0u]);\r
    let color1 = getColor(indices[i * 3u + 1u]);\r
    let color2 = getColor(indices[i * 3u + 2u]);\r
    \r
    return color0 * w + color1 * bary.y + color2 * bary.z;\r
}\r
\r
// ============================== //\r
fn getHitReflectance(hit: Hit) -> f32\r
{\r
    // suffice to take the first vertex's reflectance\r
    let i = hit.triIndex;\r
    return getReflectance(indices[i * 3u + 0u]);\r
}\r
\r
// ============================== //\r
fn getHitPosition(ray: Ray, distance: f32) -> vec3f\r
{\r
    return ray.origin + ray.direction * distance;\r
}\r
\r
// ============================== //\r
// Reflect around the normal (snell's law)\r
fn reflectRay(direction: vec3f, normal: vec3f) -> vec3f\r
{\r
    return direction - 2.0 * dot(direction, normal) * normal;\r
}\r
\r
// ============================== //\r
fn computeLambertShading(hitPos: vec3f, normal: vec3f, baseColor: vec3f) -> vec3f\r
{\r
    let lightDir = normalize(uniforms.lightPosition.xyz - hitPos);\r
    let lightDistance = length(uniforms.lightPosition.xyz - hitPos);\r
    \r
    let NdotL = max(0.0, dot(normal, lightDir));\r
    let lightAttenuation = uniforms.lightIntensity / (1.0 + lightDistance * 0.01);\r
    \r
    return baseColor * uniforms.lightColor.xyz * NdotL * lightAttenuation;\r
}\r
\r
// ============================== //\r
// Multi-bounce ray tracing with color bleeding\r
fn rayTraceWithBounces(initialRay: Ray, maxBounces: u32) -> vec3f\r
{\r
    var currentRay = initialRay;\r
    let reflectanceEpsilon: f32 = 0.01; // Stop is accumulated reflectance is below this\r
\r
    // Trace primary ray\r
    var hit: Hit;\r
    if (!rayTraceOnce(currentRay, &hit))\r
    {\r
        return vec3f(0.0, 0.0, 0.0); // No hit, return black\r
    }\r
    \r
    // we touch something\r
    var primaryHit: Hit = hit;\r
    var objectColor = getHitColor(hit); // primary color of the first hit object\r
    var objectReflectance = getHitReflectance(primaryHit);\r
    let primaryHitPos = getHitPosition(currentRay, primaryHit.distance);\r
    \r
    // if reflectance is already below epsilon, just do lambert shading and return\r
    if (objectReflectance < reflectanceEpsilon)\r
    {\r
        return computeLambertShading(primaryHitPos, primaryHit.normalAtHit, objectColor);\r
    }\r
    \r
    // Compute the non-reflected portion (Lambert shaded) for primary hit\r
    // Only applies if reflectance < 1.0\r
    var primaryShadedColor = vec3f(0.0, 0.0, 0.0);\r
    if (objectReflectance < 1.0)\r
    {\r
        primaryShadedColor = computeLambertShading(primaryHitPos, primaryHit.normalAtHit, objectColor);\r
    }\r
    \r
    // Start bouncing rays to gather reflected color\r
    var accumulatedReflectance: f32 = objectReflectance;\r
    var reflectedColor = vec3f(0.0, 0.0, 0.0);\r
    \r
    // Setup first bounce ray\r
    let reflectedDir = reflectRay(currentRay.direction, primaryHit.normalAtHit);\r
    currentRay.origin = primaryHitPos + primaryHit.normalAtHit * 0.001; // self intersection avoidance offset\r
    currentRay.direction = reflectedDir;\r
    \r
    for (var bounce: u32 = 0u; bounce < maxBounces; bounce = bounce + 1u)\r
    {\r
        var bounceHit: Hit;\r
        if (!rayTraceOnce(currentRay, &bounceHit))\r
        {\r
            // Ray escaped to background - no more color to gather\r
            break;\r
        }\r
        \r
        let bounceHitPos = getHitPosition(currentRay, bounceHit.distance);\r
        let bounceHitColor = getHitColor(bounceHit);\r
        let bounceHitNormal = bounceHit.normalAtHit;\r
        let bounceReflectance = getHitReflectance(bounceHit);\r
        \r
        // Still compute some sort of distance attenuation\r
        let distanceAttenuation = 1.0;\r
        \r
        // Compute shaded color at this bounce point (if not a perfect mirror)\r
        var bounceShadedColor = vec3f(0.0, 0.0, 0.0);\r
        if (bounceReflectance < 1.0)\r
        {\r
            bounceShadedColor = computeLambertShading(bounceHitPos, bounceHitNormal, bounceHitColor);\r
        }\r
        \r
        // The contribution from this surface:\r
        // (1 - bounceReflectance) portion comes from its own shaded color\r
        let colorContribution = (1.0 - bounceReflectance) * bounceShadedColor * distanceAttenuation;\r
        reflectedColor = reflectedColor + colorContribution * accumulatedReflectance;\r
        accumulatedReflectance = accumulatedReflectance * bounceReflectance;\r
        \r
        if (accumulatedReflectance < reflectanceEpsilon) // too low of a possible next contribution\r
        {\r
            break;\r
        }\r
        \r
        let newReflectedDir = reflectRay(currentRay.direction, bounceHitNormal);\r
        currentRay.origin = bounceHitPos + bounceHitNormal * 0.001;\r
        currentRay.direction = newReflectedDir;\r
    }\r
    \r
    let finalColor = (1.0 - objectReflectance) * primaryShadedColor + reflectedColor;\r
    \r
    return finalColor;\r
}\r
\r
// ============================== //\r
// Need to pass Screen -> NDC -> Clip -> View -> World\r
fn ray_at(screen_coord: vec2f) -> Ray \r
{\r
    let ndc = vec2f(screen_coord.x * 2.0 - 1.0, screen_coord.y * 2.0 - 1.0);\r
    let rayDirection = normalize((uniforms.pixelToRayMatrix * vec4f(ndc, 1.0, 0.0)).xyz);\r
    \r
    var ray: Ray;\r
    ray.origin = uniforms.cameraPosition.xyz;\r
    ray.direction = rayDirection;\r
\r
    return ray;\r
}\r
\r
// ============================== //\r
@fragment\r
fn fs(input: VertexOutput) -> @location(0) vec4f\r
{\r
    let ray = ray_at(input.uv);\r
    let maxDistance: f32 = 2000.0;\r
\r
    var hit: Hit;\r
    var color: vec3f = vec3f(0.0, 0.0, 0.0);\r
\r
    if (uniforms.mode == 0u)\r
    {\r
        color = rayTraceWithBounces(ray, uniforms.numBounces);\r
    }\r
    else if (uniforms.mode == 1u)\r
    {\r
        if (rayTraceOnce(ray, &hit))\r
        {\r
            let normal = hit.normalAtHit;\r
            color = normal * 0.5 + vec3f(0.5, 0.5, 0.5); // map from [-1,1] to [0,1]\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 2u)\r
    {\r
        if (rayTraceOnce(ray, &hit))\r
        {\r
            let distance = hit.distance;\r
            let intensity = 1.0 - min(distance / maxDistance, 1.0);\r
            color = vec3f(intensity, intensity, intensity);\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 3u)\r
    {\r
        if (rayTraceOnce(ray, &hit))\r
        {\r
            let distance = hit.distance;\r
            let intensity = 1.0 - min(distance / maxDistance, 1.0);\r
            let reflectance = getHitReflectance(hit);\r
\r
            // A reflectance of 1.0 shows up as full red, 0.0 as totally white\r
            let totallyWhite = vec3f(1.0, 1.0, 1.0);\r
            let totallyRed = vec3f(1.0, 0.0, 0.0);\r
\r
            let reflectanceColor = mix(totallyWhite, totallyRed, reflectance);\r
            color = reflectanceColor * intensity;\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 4u)\r
    {\r
        // visualize ray directions\r
        let dir = normalize(ray.direction);\r
        color = dir;\r
    }\r
    \r
    return vec4f(color, 1.0);\r
}`,lf=`struct Uniforms {\r
    modelMat : mat4x4<f32>,\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
    lightPosition : vec3<f32>,\r
    _pad0 : f32,\r
    lightColor : vec3<f32>,\r
    _pad1 : f32,\r
};\r
\r
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
struct VertexInput {\r
    @location(0) pos: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,  \r
    @location(3) color: vec3f,\r
    @builtin(instance_index) instance: u32\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
    @location(3) color: vec3f,\r
};\r
\r
@vertex\r
fn vs(input: VertexInput) -> VertexOutput {\r
    var output: VertexOutput;\r
    output.pos = uniforms.projMat * uniforms.viewMat * uniforms.modelMat * vec4f (input.pos, 1);\r
    output.position = input.pos;\r
    output.normal = input.normal;\r
    output.uv = input.uv;\r
    output.color = input.color;\r
    return output;\r
}`,uf=`struct Uniforms {\r
    modelMat : mat4x4<f32>,\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
    lightPosition : vec3<f32>,\r
    _pad0 : f32,\r
    lightColor : vec3<f32>,\r
    _pad1 : f32,\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
    @location(3) color: vec3f,\r
};\r
\r
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
@fragment\r
fn fs(input: VertexOutput) -> @location(0) vec4f {\r
    var albedo = input.color;\r
    const kd = 1.0;\r
    const ka = 0.1;\r
    \r
    var n = normalize(input.normal);\r
    var wi = normalize(uniforms.lightPosition - input.position);\r
    \r
    // Diffuse\r
    var fd = uniforms.lightColor * max(0.0, dot(wi, n));\r
    \r
    // Ambient should also be multiplied by albedo!\r
    var ambient = ka * albedo;\r
    var diffuse = kd * fd * albedo;\r
    \r
    return vec4f(ambient + diffuse, 1.0);\r
}`;function ui(e){const t={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:e,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,modelMatrix:os(),viewMatrix:os(),projectionMatrix:To(Math.PI/4,e,.1,1e3)};return Po(t),t}function fi(e,t,n,r){e.position[0]=t,e.position[1]=n,e.position[2]=r,mi(e)}function hi(e,t){e.aspect=t,Mo(e)}function di(e,t,n){e.near=t,e.far=n,Mo(e)}function pi(e,t,n,r){e.position[0]+=e.forward[0]*t+e.right[0]*n+e.up[0]*r,e.position[1]+=e.forward[1]*t+e.right[1]*n+e.up[1]*r,e.position[2]+=e.forward[2]*t+e.right[2]*n+e.up[2]*r,mi(e)}function ar(e,t,n){e.yaw+=t,e.pitch+=n;const r=Math.PI/2-.01;for(e.pitch=Math.max(-r,Math.min(r,e.pitch));e.yaw>Math.PI;)e.yaw-=2*Math.PI;for(;e.yaw<-Math.PI;)e.yaw+=2*Math.PI;Po(e)}function Ae(e,t,n){ar(e,t*e.rotateSpeed,n*e.rotateSpeed)}function Po(e){e.forward[0]=Math.cos(e.pitch)*Math.cos(e.yaw),e.forward[1]=Math.sin(e.pitch),e.forward[2]=Math.cos(e.pitch)*Math.sin(e.yaw),Xt(e.forward);const t=$n(e.forward,e.worldUp);Xt(t),e.right[0]=t[0],e.right[1]=t[1],e.right[2]=t[2];const n=$n(e.right,e.forward);Xt(n),e.up[0]=n[0],e.up[1]=n[1],e.up[2]=n[2],mi(e)}function mi(e){const t=new Float32Array([e.position[0]+e.forward[0],e.position[1]+e.forward[1],e.position[2]+e.forward[2]]);e.viewMatrix=ff(e.position,t,e.up)}function Mo(e){e.projectionMatrix=To(e.fovY,e.aspect,e.near,e.far)}function os(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function To(e,t,n,r){const i=1/Math.tan(e*.5),s=1/(n-r);return new Float32Array([i/t,0,0,0,0,i,0,0,0,0,r*s,-1,0,0,n*r*s,0])}function ff(e,t,n){const r=new Float32Array([e[0]-t[0],e[1]-t[1],e[2]-t[2]]);Xt(r);const i=$n(n,r);Xt(i);const s=$n(r,i);return new Float32Array([i[0],s[0],r[0],0,i[1],s[1],r[1],0,i[2],s[2],r[2],0,-gn(i,e),-gn(s,e),-gn(r,e),1])}function Xt(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);t>1e-5&&(e[0]/=t,e[1]/=t,e[2]/=t)}function $n(e,t){return new Float32Array([e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]])}function gn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function gi(e){const t=Math.tan(e.fovY/2),n=e.aspect*t,r=t;return new Float32Array([e.right[0]*n,e.right[1]*n,e.right[2]*n,0,e.up[0]*r,e.up[1]*r,e.up[2]*r,0,e.forward[0],e.forward[1],e.forward[2],0,0,0,0,1])}function hf(e,t,n){const r=gi(e),i=new Float32Array([r[0]*t+r[4]*n+r[8]*1,r[1]*t+r[5]*n+r[9]*1,r[2]*t+r[6]*n+r[10]*1]);return Xt(i),i}function df(e,t,n,r){const i=new Float32Array([n[0]-e[0],n[1]-e[1],n[2]-e[2]]),s=gn(i,t);if(s<0)return-1;const o=gn(i,i)-s*s,a=r*r;if(o>a)return-1;const c=Math.sqrt(a-o),f=s-c;return f<0?-1:f}async function pf(e){const t=new bf;return await t.initialize(e),t}const as=264,cs=128,mf=0,gf=20,vf=0,yf=1e3;let bf=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=sr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=ui(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){fi(this.camera,278,500,-700),ar(this.camera,0,-.3),di(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const t=Tt();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((s,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=s,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),t.appendChild(document.createElement("br")),t.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=mf.toString(),this.intensitySlider.max=gf.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const r=document.createElement("label");r.htmlFor="intensitySlider",r.textContent=" Light Intensity",t.appendChild(document.createElement("br")),t.appendChild(this.intensitySlider),t.appendChild(r),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=vf.toString(),this.numBouncesSlider.max=yf.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const i=document.createElement("label");i.htmlFor="numBouncesSlider",i.textContent=" Number of Bounces",t.appendChild(document.createElement("br")),t.appendChild(this.numBouncesSlider),t.appendChild(i)}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Mt(this.device,af,cf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Mt(this.device,lf,uf,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=Nl();this.additionalInfo=t.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,t.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:t.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,t.indexData),this.normalObjects.numIndices=t.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,t.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:t.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,t.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,t.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:as,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,t.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,t.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,t.colorData);var n=new Uint32Array(t.indexData.length);for(let r=0;r<t.indexData.length;r++)n[r]=t.indexData[r];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,n),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:t.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,t.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:cs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ae(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&pi(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&Ae(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ae(this.camera,1,0),this.keysPressed.has("arrowup")&&Ae(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ae(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(cs),n=new Float32Array(t),r=new Uint32Array(t);n.set(gi(this.camera),0),n.set(this.camera.position,16),n.set(this.light.position,20),n.set(this.light.color,24),r[28]=this.rayTracingMode,n[29]=this.light.intensity,r[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new Float32Array(as/4);let n=0;t.set(this.camera.modelMatrix,n),n+=16,t.set(this.camera.viewMatrix,n),n+=16,t.set(this.camera.projectionMatrix,n),n+=16,t.set(this.light.position,n),n+=4,t.set(this.light.color,n),n+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){const t=performance.now()*.001,n=200,r=250,i=276,s=278.5,o=450;if(this.light.position[0]=i+n*Math.cos(t),this.light.position[1]=o,this.light.position[2]=s+r*Math.sin(t),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const a=this.additionalInfo.cubeCenter,f=go(0,t,0),l=this.additionalInfo.cubeVertexStart,u=this.additionalInfo.cubeVertexCount,h=this.additionalInfo.cubeVertexInfo,m=new Float32Array(u*3),d=this.additionalInfo.cubeNormalsInfo,v=new Float32Array(u*3);for(let x=0;x<u;x++){const b=x*3,y=h[b]-a[0],B=h[b+1]-a[1],S=h[b+2]-a[2];m[b]=f[0]*y+f[1]*B+f[2]*S+a[0],m[b+1]=f[3]*y+f[4]*B+f[5]*S+a[1],m[b+2]=f[6]*y+f[7]*B+f[8]*S+a[2];const E=d[b],_=d[b+1],R=d[b+2];v[b]=f[0]*E+f[1]*_+f[2]*R,v[b+1]=f[3]*E+f[4]*_+f[5]*R,v[b+2]=f[6]*E+f[7]*_+f[8]*R}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,l*3*4,m),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,l*3*4,v)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,l*3*4,m),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,l*3*4,v))}}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=l.beginRenderPass(f);this.useRaytracing?(u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.draw(6)):(u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup),u.setVertexBuffer(0,this.normalObjects.positionBuffer),u.setVertexBuffer(1,this.normalObjects.normalBuffer),u.setVertexBuffer(2,this.normalObjects.uvBuffer),u.setVertexBuffer(3,this.normalObjects.colorBuffer),u.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),u.drawIndexed(this.normalObjects.numIndices)),u.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),hi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)});const t=Tt();for(const n of Array.from(t?.children||[]))n.remove();this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const xf=`struct Uniforms {\r
    modelMat : mat4x4<f32>,\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
    lightPosition : vec3<f32>,\r
    _pad0 : f32,\r
    lightColor : vec3<f32>,\r
    lightIntensity: f32,\r
};\r
\r
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
struct VertexInput {\r
    @location(0) pos: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,  \r
    @location(3) color: vec3f,\r
    @builtin(instance_index) instance: u32\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
    @location(3) color: vec3f,\r
};\r
\r
@vertex\r
fn vs(input: VertexInput) -> VertexOutput {\r
    var output: VertexOutput;\r
    output.pos = uniforms.projMat * uniforms.viewMat * uniforms.modelMat * vec4f (input.pos, 1);\r
    output.position = input.pos;\r
    output.normal = input.normal;\r
    output.uv = input.uv;\r
    output.color = input.color;\r
    return output;\r
}`,Sf=`struct Uniforms {\r
    modelMat : mat4x4<f32>,\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
    lightPosition : vec3<f32>,\r
    _pad0 : f32,\r
    lightColor : vec3<f32>,\r
    lightIntensity : f32,\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
    @location(3) color: vec3f,\r
};\r
\r
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
@fragment\r
fn fs(input: VertexOutput) -> @location(0) vec4f {\r
    var albedo = input.color;\r
    const kd = 1.0;\r
    const ka = 0.1;\r
    \r
    var n = normalize(input.normal);\r
    var wi = normalize(uniforms.lightPosition - input.position);\r
    \r
    // Diffuse\r
    var fd = uniforms.lightColor * max(0.0, dot(wi, n)) * uniforms.lightIntensity;\r
    \r
    // Ambient should also be multiplied by albedo!\r
    var ambient = ka * albedo;\r
    var diffuse = kd * fd * albedo;\r
    \r
    return vec4f(ambient + diffuse, 0.5);\r
}`,ls=264;async function wf(e){const t=new Bf;return await t.initialize(e),t}class Bf{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=sr();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=ui(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,fi(this.camera,300,200,300),ar(this.camera,9*Math.PI/12,-Math.PI/6),di(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=Mt(this.device,xf,Sf,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeUtils(){const t=Tt();if(!t)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",t.appendChild(this.wireFrameCheckbox),t.appendChild(this.wireFrameLabel),t.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(r=>{const i=document.createElement("option");i.value=r,i.text=r.charAt(0).toUpperCase()+r.slice(1),this.cullModeSelect.appendChild(i)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),t.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",t.appendChild(document.createElement("br")),t.appendChild(this.useSortingCheckbox),t.appendChild(this.useSortingLabel)}initializeScene(){const t=Br({translation:j(0,0,-100),rotation:j(0,0,0),scale:j(200,200,1)},[.8,.8,.7]);t.additionalInfo={order:0,numVertices:t.vertexData.length/3},this.facesTopologyInformation.push(t);const n=Br({translation:j(-100,0,0),rotation:j(0,-Math.PI/2,0),scale:j(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:1,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const r=Br({translation:j(0,-100,0),rotation:j(Math.PI/2,0,0),scale:j(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:2,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const i=25,s=32;let o=3,a=0;const c=-100+i;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++){const d=[h*i*2,c,m*i*2],v=Cr(d,i,[Math.random(),Math.random(),Math.random()],s,s);v.additionalInfo={order:o++,numVertices:v.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(v),this.currentSphereOrders.push(v.additionalInfo.id)}const f=c+i*Math.sqrt(2);for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){const d=[(h-.5)*i*2,f,(m-.5)*i*2],v=Cr(d,i,[Math.random(),Math.random(),Math.random()],s,s);v.additionalInfo={order:o++,numVertices:v.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(v),this.currentSphereOrders.push(v.additionalInfo.id)}const l=[0,f+i*Math.sqrt(2),0],u=Cr(l,i,[Math.random(),Math.random(),Math.random()],s,s);u.additionalInfo={order:o++,numVertices:u.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(u),this.currentSphereOrders.push(u.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const t=this.device.queue;this.initializeScene();const n=[],r=[],i=[],s=[],o=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const v=this.facesTopologyInformation[d];v.additionalInfo&&(n.push(v.vertexData),r.push(v.indexData),i.push(v.normalData),s.push(v.colorData),o.push(v.uvData))}const a=this.currentSphereOrders.slice();for(let d=a.length-1;d>0;d--){const v=Math.floor(Math.random()*(d+1));[a[d],a[v]]=[a[v],a[d]]}for(let d=0;d<this.spheresTopologyInformation.length;d++){const v=this.spheresTopologyInformation[a[d]];v.additionalInfo&&(n.push(v.vertexData),r.push(v.indexData),i.push(v.normalData),s.push(v.colorData),o.push(v.uvData))}const c=n.map(d=>d.length/3),f=yt(n),l=Qi(r,c),u=yt(i),h=yt(s),m=yt(o);this.totalIndices=l.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:ls,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.vertexBuffer,0,f),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:u.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.normalBuffer,0,u),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:h.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.colorBuffer,0,h),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:m.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.uvBuffer,0,m),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:l.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.indexBuffer,0,l),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ae(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&(pi(this.camera,-r,t,n),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&Ae(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ae(this.camera,1,0),this.keysPressed.has("arrowup")&&Ae(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ae(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const t=new ArrayBuffer(ls),n=new Float32Array(t);n.set(this.camera.modelMatrix,0),n.set(this.camera.viewMatrix,16),n.set(this.camera.projectionMatrix,32),n.set(this.light.position,48),n.set(this.light.color,52),n[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,t)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const t=this.camera.position,n=[];for(let d=0;d<this.spheresTopologyInformation.length;d++){const x=this.spheresTopologyInformation[d].transform.translation,b=x[0]-t[0],y=x[1]-t[1],B=x[2]-t[2],S=Math.sqrt(b*b+y*y+B*B),E=this.spheresTopologyInformation[d].additionalInfo.id;n.push({id:E,distance:S})}n.sort((d,v)=>v.distance-d.distance),this.currentSphereOrders=n.map(d=>d.id);const r=[],i=[],s=[],o=[],a=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const v=this.facesTopologyInformation[d];v.additionalInfo&&(r.push(v.vertexData),i.push(v.indexData),s.push(v.normalData),o.push(v.colorData),a.push(v.uvData))}for(let d=0;d<this.currentSphereOrders.length;d++){const v=this.currentSphereOrders[d],x=this.spheresTopologyInformation.find(b=>b.additionalInfo.id===v);x&&(r.push(x.vertexData),i.push(x.indexData),s.push(x.normalData),o.push(x.colorData),a.push(x.uvData))}const c=r.map(d=>d.length/3),f=yt(r),l=Qi(i,c),u=yt(s),h=yt(o),m=yt(a);this.device.queue.writeBuffer(this.vertexBuffer,0,f),this.device.queue.writeBuffer(this.indexBuffer,0,l),this.device.queue.writeBuffer(this.normalBuffer,0,u),this.device.queue.writeBuffer(this.colorBuffer,0,h),this.device.queue.writeBuffer(this.uvBuffer,0,m)}startMainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const a=this.context.getCurrentTexture().createView(),c={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=l.beginRenderPass(f);u.setPipeline(this.renderPipeline),u.setBindGroup(0,this.bindGroup),u.setVertexBuffer(0,this.vertexBuffer),u.setVertexBuffer(1,this.normalBuffer),u.setVertexBuffer(2,this.uvBuffer),u.setVertexBuffer(3,this.colorBuffer),u.setIndexBuffer(this.indexBuffer,"uint16"),u.drawIndexed(this.totalIndices,1,0,0,0),u.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),hi(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked});const t=Tt();for(const n of Array.from(t?.children||[]))n.remove();this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const Cf=`// ============================== //\r
struct OurVertexShaderOutput {\r
    @builtin(position) position: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
// ============================== //\r
@vertex\r
fn vs(\r
    @builtin(vertex_index) vertex_index: u32\r
) -> OurVertexShaderOutput\r
{\r
    var positions = array<vec2f, 6>(\r
        vec2f(-1.0, -1.0),  // Triangle 1\r
        vec2f( 1.0, -1.0),\r
        vec2f(-1.0,  1.0),\r
        vec2f(-1.0,  1.0),  // Triangle 2\r
        vec2f( 1.0, -1.0),\r
        vec2f( 1.0,  1.0),\r
    );\r
    \r
    let pos = positions[vertex_index];\r
    \r
    var output: OurVertexShaderOutput;\r
    output.position = vec4f(pos, 0.0, 1.0);\r
    output.uv = pos * 0.5 + 0.5;\r
    return output;\r
}`,Pf=`// ============================== //\r
struct SpotLight\r
{\r
    position: vec3f,\r
    intensity: f32,\r
\r
    direction: vec3f,\r
    coneAngle: f32,\r
\r
    color: vec3f,\r
    enabled: f32,\r
}; // Total : 48 bytes\r
\r
// ============================== //\r
struct Uniform\r
{\r
    pixelToRayMatrix: mat4x4<f32>, // 4 * 4 * 4 = 64 bytes\r
\r
    cameraPosition: vec3f,\r
    mode: u32,              // 16 bytes\r
\r
    a_c: f32,\r
    a_l: f32,\r
    a_q: f32,\r
    _pad0: f32,\r
\r
    lights: array<SpotLight, 3>, // 48 * 3 = 144 bytes\r
}; // Total: 224 bytes\r
\r
struct Material\r
{\r
    albedo: vec3f,\r
};\r
\r
// MODE FOLLOWS:\r
// 0 - normal shading\r
// 1 - normals\r
// 2 - distance\r
\r
// ============================== //\r
struct Ray \r
{\r
    origin: vec3f,\r
    direction: vec3f,\r
};\r
\r
// ============================== //\r
struct Hit\r
{\r
    triIndex: u32,\r
    barycentricCoords: vec3f,\r
    distance: f32,\r
    normalAtHit: vec3f,\r
    accumulatedColor: vec3f,\r
};\r
\r
// ============================== //\r
struct VertexOutput \r
{\r
    @builtin(position) position: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
@group(0) @binding(0) var<uniform> uniforms: Uniform;\r
@group(0) @binding(1) var<storage, read> vertices: array<f32>; // vec3f does not work here cause would expect a 16 byte alignment\r
@group(0) @binding(2) var<storage, read> normals: array<f32>;\r
@group(0) @binding(3) var<storage, read> uvs: array<f32>;\r
@group(0) @binding(4) var<storage, read> indices: array<u32>;\r
@group(0) @binding(5) var<storage, read> materialIndices: array<u32>; // which material for each triangle\r
\r
@group(1) @binding(0) var<storage, read> materials: array<f32>;\r
\r
// Helper function to read a vec3 from the flat array\r
// ============================== //\r
fn getVertex(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(vertices[i], vertices[i + 1u], vertices[i + 2u]);\r
}\r
\r
// ============================== //\r
fn getNormal(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(normals[i], normals[i + 1u], normals[i + 2u]);\r
}\r
\r
// ============================== //\r
fn getUV(index: u32) -> vec2f \r
{\r
    let i = index * 2u;\r
    return vec2f(uvs[i], uvs[i + 1u]);\r
}\r
\r
// ============================== //\r
fn getMaterial(TriIndex: u32) -> Material\r
{\r
    let materialIndex = materialIndices[TriIndex]; // Which material are we talking about ?\r
    let baseIndex = materialIndex * 3u;\r
\r
    var mat: Material;\r
    mat.albedo = vec3f(\r
        materials[baseIndex],\r
        materials[baseIndex + 1u],\r
        materials[baseIndex + 2u]\r
    );\r
    return mat;\r
}\r
\r
// ============================== //\r
fn rayTriangleIntersect(ray: Ray, triIndex: u32, hitCoord: ptr<function, vec3f>) -> bool\r
{\r
    // https://scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-rendering-a-triangle/moller-trumbore-ray-triangle-intersection.html\r
    let v0 = getVertex(indices[triIndex * 3u + 0u]);\r
    let v1 = getVertex(indices[triIndex * 3u + 1u]);\r
    let v2 = getVertex(indices[triIndex * 3u + 2u]);\r
\r
    let e0 = v1 - v0;\r
    let e1 = v2 - v0;\r
\r
    let pvec: vec3f = cross(ray.direction, e1);\r
    let det: f32 = dot(e0, pvec);\r
\r
    let kEpsilon: f32 = 0.000001;\r
\r
    // culling or not, we do or don't compare absolute value of det\r
    if (det < kEpsilon) \r
    {\r
        return false; // No intersection\r
    }\r
\r
    // compute u. reject if u not in [0,1]\r
    // then v, same check and reject if u+v > 1\r
    // if met, compute t to get intersection point we know there is intersection\r
    let invDet: f32 = 1.0 / det;\r
    let tvec: vec3f = ray.origin - v0;\r
\r
    let u = dot(tvec, pvec) * invDet;\r
    if (u < 0.0 || u > 1.0) \r
    {\r
        return false;\r
    }\r
\r
    let qvec: vec3f = cross(tvec, e0);\r
    let v = dot(ray.direction, qvec) * invDet;\r
    if (v < 0.0 || (u + v) > 1.0) \r
    {\r
        return false;\r
    }\r
\r
    let t = dot(e1, qvec) * invDet;\r
\r
    if (t < kEpsilon)  // behind camera\r
    {\r
        return false;\r
    }\r
\r
    let barycentricCoords = vec3f(t, u, v);\r
    (*hitCoord) = barycentricCoords;\r
\r
    return true;\r
}\r
\r
// ============================== //\r
fn rayTraceOnce(ray: Ray, hit: ptr<function, Hit>) -> bool\r
{\r
    let numTriangles: u32 = u32(arrayLength(&indices)) / 3u;\r
\r
    var closestT: f32 = 1e30;\r
    var hitSomething: bool = false;\r
\r
    for (var i: u32 = 0u; i < numTriangles; i = i + 1u)\r
    {\r
        var barycentricCoords: vec3f;\r
        if (rayTriangleIntersect(ray, i, &barycentricCoords))\r
        {\r
            let t = barycentricCoords.x;\r
            if (t < closestT)\r
            {\r
                closestT = t;\r
                hitSomething = true;\r
\r
                let normal0 = getNormal(indices[i * 3u + 0u]);\r
                let normal1 = getNormal(indices[i * 3u + 1u]);\r
                let normal2 = getNormal(indices[i * 3u + 2u]);\r
                let interpolatedNormal = normalize(normal0 * (1.0 - barycentricCoords.y - barycentricCoords.z) + normal1 * barycentricCoords.y + normal2 * barycentricCoords.z);\r
            \r
                (*hit).triIndex = i;\r
                (*hit).barycentricCoords = barycentricCoords;\r
                (*hit).distance = t;\r
                (*hit).normalAtHit = interpolatedNormal;\r
            }\r
        }\r
    }\r
\r
    return hitSomething;\r
}\r
\r
// ============================== //\r
fn getHitColor(hit: Hit) -> vec3f\r
{\r
    let i = hit.triIndex;\r
    let bary = hit.barycentricCoords;\r
    let w = 1.0 - bary.y - bary.z;\r
    \r
    let material = getMaterial(i);\r
    let color = material.albedo;\r
    \r
    return color;\r
}\r
\r
// ============================== //\r
fn getHitPosition(ray: Ray, distance: f32) -> vec3f\r
{\r
    return ray.origin + ray.direction * distance;\r
}\r
\r
// ============================== //\r
fn computeLambertShading(hitPos: vec3f, normal: vec3f, baseColor: vec3f) -> vec3f\r
{\r
    let ambientStrength = 0.1;\r
    let ambientColor = baseColor * ambientStrength;\r
\r
    var totalColor = vec3f(0.0, 0.0, 0.0);\r
    for (var i = 0; i < 3; i++)\r
    {\r
        if (uniforms.lights[i].enabled < 0.5)\r
        {\r
            continue;\r
        }\r
\r
        let pos2light = uniforms.lights[i].position - hitPos;\r
        let lightDistance = length(pos2light);\r
        let wi = normalize(pos2light);\r
        let spotDir = normalize(uniforms.lights[i].direction);\r
\r
        // Are we in the cone\r
        let cosAngle = dot(-wi, spotDir);\r
        if (cosAngle < cos(uniforms.lights[i].coneAngle)) \r
        {\r
            continue;\r
        }\r
\r
        // Shadow ray tracing\r
        const shadowBias = 0.0001;\r
        var shadowRay: Ray;\r
        shadowRay.origin = hitPos + shadowBias * normal;\r
        shadowRay.direction = wi;\r
\r
        var shadowHit: Hit;\r
        let inShadow = rayTraceOnce(shadowRay, &shadowHit);\r
    \r
        // If in shadow (and we find blocker)\r
        if (inShadow && shadowHit.distance < lightDistance)\r
        {\r
            continue;\r
        }\r
\r
        // Not in shadow, compute full Lambert shading\r
        let NdotL = max(0.0, dot(normal, wi));\r
        let lightAttenuation = uniforms.lights[i].intensity / (uniforms.a_c + uniforms.a_l * lightDistance + uniforms.a_q * lightDistance * lightDistance);\r
        let diffuse = baseColor * uniforms.lights[i].color * NdotL * lightAttenuation;\r
        \r
        totalColor = totalColor + diffuse;\r
    }\r
   \r
    return ambientColor + totalColor;\r
}\r
\r
// ============================== //\r
// Need to pass Screen -> NDC -> Clip -> View -> World\r
fn ray_at(screen_coord: vec2f) -> Ray \r
{\r
    let ndc = vec2f(screen_coord.x * 2.0 - 1.0, screen_coord.y * 2.0 - 1.0);\r
    let rayDirection = normalize((uniforms.pixelToRayMatrix * vec4f(ndc, 1.0, 0.0)).xyz);\r
    \r
    var ray: Ray;\r
    ray.origin = uniforms.cameraPosition.xyz;\r
    ray.direction = rayDirection;\r
\r
    return ray;\r
}\r
\r
// ============================== //\r
@fragment\r
fn fs(input: VertexOutput) -> @location(0) vec4f\r
{\r
    let ray = ray_at(input.uv);\r
    let maxDistance: f32 = 2000.0;\r
\r
    var hit: Hit;\r
    var color: vec3f = vec3f(0.0, 0.0, 0.0);\r
\r
    if (uniforms.mode == 0u)\r
    {\r
        if (rayTraceOnce(ray, &hit))\r
        {\r
            let hitPos = getHitPosition(ray, hit.distance);\r
            let baseColor = getHitColor(hit);\r
            color = computeLambertShading(hitPos, hit.normalAtHit, baseColor);\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 1u)\r
    {\r
        if (rayTraceOnce(ray, &hit))\r
        {\r
            let normal = hit.normalAtHit;\r
            color = normal * 0.5 + vec3f(0.5, 0.5, 0.5); // map from [-1,1] to [0,1]\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 2u)\r
    {\r
        if (rayTraceOnce(ray, &hit))\r
        {\r
            let distance = hit.distance;\r
            let intensity = 1.0 - min(distance / maxDistance, 1.0);\r
            color = vec3f(intensity, intensity, intensity);\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 3u)\r
    {\r
        // visualize ray directions\r
        let dir = normalize(ray.direction);\r
        color = dir;\r
    }\r
    \r
    return vec4f(color, 1.0);\r
}\r
\r
`,Mf=`struct SpotLight\r
{\r
    position: vec3f,\r
    intensity: f32,\r
\r
    direction: vec3f,\r
    coneAngle: f32,\r
\r
    color: vec3f,\r
    _pad: f32,\r
}; // 48 bytes\r
\r
struct Uniforms {\r
    modelMat : mat4x4<f32>,\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
\r
    // Three light sources: 48 * 3 = 144 bytes\r
    lights : array<SpotLight, 3>,\r
};\r
\r
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
struct VertexInput {\r
    @location(0) pos: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,  \r
    @builtin(instance_index) instance: u32\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
};\r
\r
@vertex\r
fn vs(input: VertexInput) -> VertexOutput {\r
    var output: VertexOutput;\r
    output.pos = uniforms.projMat * uniforms.viewMat * uniforms.modelMat * vec4f (input.pos, 1);\r
    output.position = input.pos;\r
    output.normal = input.normal;\r
    output.uv = input.uv;\r
    return output;\r
}`,Tf=`struct Material {\r
    albedo : vec3<f32>,\r
    _pad0 : f32,\r
};\r
\r
struct SpotLight\r
{\r
    position: vec3f,\r
    intensity: f32,\r
\r
    direction: vec3f,\r
    coneAngle: f32,\r
\r
    color: vec3f,\r
    enabled: f32,\r
};\r
struct Uniforms {\r
    modelMat : mat4x4<f32>,\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
\r
    a_c: f32,\r
    a_l: f32,\r
    a_q: f32,\r
    _pad0: f32,\r
\r
    lights : array<SpotLight, 3>,\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
};\r
\r
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
@group(1) @binding(0)\r
var<uniform> material : Material;\r
\r
@fragment\r
fn fs(input: VertexOutput) -> @location(0) vec4f {\r
    var albedo = material.albedo;\r
    const kd = 1.0;\r
    const ka = 0.1;\r
\r
    var totalColor = vec3f(0.0, 0.0, 0.0);\r
    var n = normalize(input.normal);\r
\r
    for (var i = 0; i < 3; i = i + 1)\r
    {\r
        if (uniforms.lights[i].enabled > 0.0)\r
        {\r
            var wi = normalize(uniforms.lights[i].position - input.position);\r
        \r
            // Diffuse\r
            var fd = uniforms.lights[i].color * max(0.0, dot(wi, n));\r
            var toLight = uniforms.lights[i].position - input.position;\r
            var lightDistance = length(toLight);\r
\r
            // Check if we are in the cone \r
            var lightDir = normalize(-uniforms.lights[i].direction);\r
            var cosAngle = dot(wi, lightDir);\r
            if (cosAngle < cos(uniforms.lights[i].coneAngle)) \r
            {\r
                fd = vec3f(0.0, 0.0, 0.0);\r
            }\r
            else\r
            {\r
                let NdotL = max(0.0, dot(n, wi));\r
                let lightAttenuation = 1.0 / (uniforms.a_c + uniforms.a_l * lightDistance + uniforms.a_q * lightDistance * lightDistance);\r
                fd = fd * NdotL * lightAttenuation;\r
            }\r
            var ambient = ka * albedo;\r
            var diffuse = kd * fd * albedo * uniforms.lights[i].intensity * uniforms.lights[i].enabled;\r
            \r
            totalColor = totalColor + ambient + diffuse;\r
        }\r
    }\r
    \r
    return vec4f(totalColor, 1.0);\r
}`;async function Of(e){const t=new _f;return await t.initialize(e),t}const us=400,Ef=16,fs=288;class _f{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=sr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=ui(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;useRaytracingCheckBox=null;rayTracingModeSelect=null;rayTracingMode=0;sphereResolution=8;sphereResolutionSlider=null;spheresInfo;activeContextMenu=null;constructor(){fi(this.camera,278,500,-700),ar(this.camera,0,-.3),di(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const t={position:j(500,500,0),intensity:1e3,direction:j(-.5,-.9,1),coneAngle:Math.PI/6,color:j(.85,.1,.1),enabled:!0};this.lights.push(t);const n={position:j(50,500,0),intensity:1e3,direction:j(.5,-.9,1),coneAngle:Math.PI/6,color:j(.1,.85,.1),enabled:!0};this.lights.push(n);const r={position:j(275,255,0),intensity:1e3,direction:j(0,0,1),coneAngle:Math.PI/8,color:j(.1,.1,.85),enabled:!0};this.lights.push(r)}initializeUtils(){const t=Tt();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked});const n=document.createElement("label");n.htmlFor="useRaytracingCheckbox",n.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(n),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Ray Directions"].forEach((s,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=s,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),t.appendChild(document.createElement("br")),t.appendChild(this.rayTracingModeSelect),this.sphereResolutionSlider=document.createElement("input"),this.sphereResolutionSlider.type="range",this.sphereResolutionSlider.min="8",this.sphereResolutionSlider.max="64",this.sphereResolutionSlider.step="1",this.sphereResolutionSlider.value=this.sphereResolution.toString(),this.sphereResolutionSlider.tabIndex=-1,this.sphereResolutionSlider.addEventListener("input",()=>{this.sphereResolution=parseInt(this.sphereResolutionSlider.value),this.startRendering()});const i=document.createElement("label");i.htmlFor="sphereResolutionSlider",i.textContent=" Sphere Resolution",t.appendChild(document.createElement("br")),t.appendChild(this.sphereResolutionSlider),t.appendChild(i),this.lights.forEach((s,o)=>{const a=document.createElement("button");a.textContent=`Edit Light ${o+1}`,a.tabIndex=-1,a.addEventListener("click",c=>{c.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const f={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=cu(f,this.lights[o],`Edit Light ${o+1}`,l=>{this.lights[o]=l,this.activeContextMenu?.remove(),this.activeContextMenu=null},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)}),t.appendChild(document.createElement("br")),t.appendChild(a)})}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Mt(this.device,Cf,Pf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Mt(this.device,Mf,Tf,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=this.spheresInfo?.sphereMaterials||[],n=ql(t,this.sphereResolution);this.normalObjects.perMaterialTopologies=n,this.spheresInfo=n.additionalInfo;const r=n.materials.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[];for(let b=0;b<r;b++){this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+b,size:Ef,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const y=new Float32Array(n.materials[b].albedo);this.device.queue.writeBuffer(this.normalObjects.materialUniforms[b],0,y),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+b,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[b]}}]})),this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+b,size:n.pmTopologies[b].vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[b],0,n.pmTopologies[b].vertexData),this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+b,size:n.pmTopologies[b].indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[b],0,n.pmTopologies[b].indexData),this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+b,size:n.pmTopologies[b].normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[b],0,n.pmTopologies[b].normalData),this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+b,size:n.pmTopologies[b].uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[b],0,n.pmTopologies[b].uvData)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:us,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const i=[],s=[],o=[],a=[],c=[];let f=0;for(let b=0;b<r;b++){let y=n.pmTopologies[b];i.push(...y.vertexData),s.push(...y.normalData),o.push(...y.uvData);for(let B of y.indexData)a.push(B+f);f+=y.vertexData.length/3;for(let B=0;B<y.indexData.length/3;B++)c.push(b)}const l=new Float32Array(i),u=new Float32Array(s),h=new Float32Array(o),m=new Uint32Array(a),d=new Uint32Array(c);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:fs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:l.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,l),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:u.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,u),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,h),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:m.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,m),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,d),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const v=[];for(let b of this.normalObjects.perMaterialTopologies.materials)v.push(...b.albedo);const x=new Float32Array(v);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:x.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,x),this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=t=>{if(this.isMouseDown=!1,this.activeContextMenu!==null){const r=this.activeContextMenu.getBoundingClientRect();if(t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom)return}let n=this.rayCastOnSpheres(t.clientX,t.clientY);n!==-1&&(console.log("Clicked on sphere index: ",n),this.spawnMaterialContextMenu(n,t.clientX,t.clientY))};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ae(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&pi(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&Ae(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ae(this.camera,1,0),this.keysPressed.has("arrowup")&&Ae(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ae(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(fs),n=new Float32Array(t),r=new Uint32Array(t);n.set(gi(this.camera),0),n.set(this.camera.position,16),r[19]=this.rayTracingMode,n[20]=this.a_c,n[21]=this.a_l,n[22]=this.a_q,n[23]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],o=24+i*12;n.set(s.position,o),n[o+3]=s.intensity,n.set(s.direction,o+4),n[o+7]=s.coneAngle,n.set(s.color,o+8),n[o+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new ArrayBuffer(us),n=new Float32Array(t);n.set(this.camera.modelMatrix,0),n.set(this.camera.viewMatrix,16),n.set(this.camera.projectionMatrix,32),n[48]=this.a_c,n[49]=this.a_l,n[50]=this.a_q,n[51]=0;for(let r=0;r<3&&!(r>=this.lights.length);r++){const i=this.lights[r],s=52+r*12;n.set(i.position,s),n[s+3]=i.intensity,n.set(i.direction,s+4),n[s+7]=i.coneAngle,n.set(i.color,s+8),n[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=l.beginRenderPass(f);if(this.useRaytracing)u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.setBindGroup(1,this.rayTracerObjects.materialBindGroup),u.draw(6);else{u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.perMaterialTopologies.materials.length;d++)u.setBindGroup(1,this.normalObjects.materialBindGroups[d]),u.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),u.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),u.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),u.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),u.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0)}u.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),hi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox?.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.rayTracingModeSelect?.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),this.sphereResolutionSlider?.removeEventListener("input",()=>{this.sphereResolution=parseInt(this.sphereResolutionSlider.value),this.startRendering()}),this.removeInputHandlers();const t=Tt();for(const n of Array.from(t?.children||[]))n.remove();this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(t,n){if(t<0||t>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const r=n.name,i=this.normalObjects.perMaterialTopologies.materials.findIndex(l=>l.name===r)||-1;if(i===-1)return;this.spheresInfo.sphereMaterials[t]=n,this.normalObjects.perMaterialTopologies.materials[i]=n;const s=this.spheresInfo.sphereMaterialIndices[t],o=new Float32Array(n.albedo);let a=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(a,0,o);const f=s*3*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,f,o)}rayCastOnSpheres(t,n){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const r=this.spheresInfo.sphereTransforms,i=this.canvas.getBoundingClientRect(),s=t-i.left,o=n-i.top,a=this.canvas.width/i.width,c=this.canvas.height/i.height,f=2*s*a/this.canvas.width-1,l=1-2*o*c/this.canvas.height,u=hf(this.camera,f,l);let h=-1,m=Number.POSITIVE_INFINITY;for(let d=0;d<r.length;d++){const v=r[d],x=v.translation,b=v.scale[0],y=df(this.camera.position,u,x,b);y<=0||y<m&&(m=y,h=d)}return h}spawnMaterialContextMenu(t,n,r){if(this.canvas===null)return;this.removeContextMenu();const i=this.spheresInfo?.sphereMaterials?.[t];if(!i)return;this.activeContextMenu=au({x:n,y:r},i,o=>{this.changeSphereMaterial(t,o),this.removeContextMenu()},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const Uf={class:"flex justify-center items-center w-full h-full"},Rf={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},If=["onClick","onMouseenter"],Df=wa({__name:"App",setup(e){const t=Vt(null),n=Vt(null),r=Vt(!1),i=[rl,cl,Dl,$l,tu,Wu,of,pf,wf,Of],s=i.length,o=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Textures","Game","Ray Trace","Transparency","PBR"],a=Vt(null),c=Vt(0),f=Vt(0);async function l(v){if(!r.value){if(r.value=!0,n.value&&typeof n.value.cleanup=="function"&&(await n.value.cleanup(),n.value=null),t.value){const x=i[v-1];x&&(n.value=await x(t.value))}r.value=!1}}function u(v,x){a.value=v;const b=x.currentTarget,y=b.parentElement;if(y){const B=y.getBoundingClientRect(),S=b.getBoundingClientRect();c.value=S.top-B.top,f.value=S.height}}function h(){a.value=null}const m=Gr(()=>a.value!==null?o[a.value-1]:""),d=Gr(()=>a.value===null?{top:c.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:c.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});return Ws(()=>{l(8)}),(v,x)=>(yr(),br("div",Uf,[Ft("div",Rf,[(yr(!0),br(rt,null,Aa(As(s),b=>(yr(),br("button",{key:b,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>l(b),onKeydown:[x[0]||(x[0]=$i(Hi(()=>{},["prevent"]),["space"])),x[1]||(x[1]=$i(Hi(()=>{},["prevent"]),["enter"]))],onMouseenter:y=>u(b,y),onMouseleave:h},Or(b),41,If))),128))]),Ft("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:t,class:"w-[90%] h-full"},null,512),x[2]||(x[2]=Ft("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),x[3]||(x[3]=Ft("pre",{id:"utils",class:"absolute bottom-0 right-0 p-1 bg-gray-700"},null,-1)),Ft("div",{class:Zn(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",a.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:Jn(d.value)},Or(m.value),7)]))}}),Af=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Ff=Af(Df,[["__scopeId","data-v-9b9907f2"]]);Jc(Ff).mount("#app");
