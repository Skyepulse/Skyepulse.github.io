(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xn(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const he={},Wt=[],lt=()=>{},Lo=()=>!1,en=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Kn=e=>e.startsWith("onUpdate:"),Re=Object.assign,Jn=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},zo=Object.prototype.hasOwnProperty,ie=(e,t)=>zo.call(e,t),X=Array.isArray,$t=e=>tn(e)==="[object Map]",ys=e=>tn(e)==="[object Set]",J=e=>typeof e=="function",Pe=e=>typeof e=="string",Et=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",xs=e=>(Se(e)||J(e))&&J(e.then)&&J(e.catch),Ss=Object.prototype.toString,tn=e=>Ss.call(e),Vo=e=>tn(e).slice(8,-1),ws=e=>tn(e)==="[object Object]",Zn=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fr=Xn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},jo=/-(\w)/g,Mt=rn(e=>e.replace(jo,(t,r)=>r?r.toUpperCase():"")),No=/\B([A-Z])/g,_t=rn(e=>e.replace(No,"-$1").toLowerCase()),Bs=rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),gn=rn(e=>e?`on${Bs(e)}`:""),Tt=(e,t)=>!Object.is(e,t),vn=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Fn=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},ko=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ci;const nn=()=>Ci||(Ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sn(e){if(X(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=Pe(n)?$o(n):sn(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(Pe(e)||Se(e))return e}const qo=/;(?![^(]*\))/g,Ho=/:([^]+)/,Wo=/\/\*[^]*?\*\//g;function $o(e){const t={};return e.replace(Wo,"").split(qo).forEach(r=>{if(r){const n=r.split(Ho);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function xr(e){let t="";if(Pe(e))t=e;else if(X(e))for(let r=0;r<e.length;r++){const n=xr(e[r]);n&&(t+=n+" ")}else if(Se(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Yo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qo=Xn(Yo);function Ps(e){return!!e||e===""}const Ts=e=>!!(e&&e.__v_isRef===!0),Fr=e=>Pe(e)?e:e==null?"":X(e)||Se(e)&&(e.toString===Ss||!J(e.toString))?Ts(e)?Fr(e.value):JSON.stringify(e,Ms,2):String(e),Ms=(e,t)=>Ts(t)?Ms(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[bn(n,s)+" =>"]=i,r),{})}:ys(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>bn(r))}:Et(t)?bn(t):Se(t)&&!X(t)&&!ws(t)?String(t):t,bn=(e,t="")=>{var r;return Et(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class Xo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=Ve;try{return Ve=this,t()}finally{Ve=r}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ko(){return Ve}let pe;const yn=new WeakSet;class Cs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yn.has(this)&&(yn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Es(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oi(this),_s(this);const t=pe,r=Ke;pe=this,Ke=!0;try{return this.fn()}finally{Rs(this),pe=t,Ke=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ri(t);this.deps=this.depsTail=void 0,Oi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gn(this)&&this.run()}get dirty(){return Gn(this)}}let Os=0,hr,dr;function Es(e,t=!1){if(e.flags|=8,t){e.next=dr,dr=e;return}e.next=hr,hr=e}function ei(){Os++}function ti(){if(--Os>0)return;if(dr){let t=dr;for(dr=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;hr;){let t=hr;for(hr=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function _s(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rs(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),ri(n),Jo(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Gn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Is(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Is(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sr)||(e.globalVersion=Sr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gn(e))))return;e.flags|=2;const t=e.dep,r=pe,n=Ke;pe=e,Ke=!0;try{_s(e);const i=e.fn(e._value);(t.version===0||Tt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{pe=r,Ke=n,Rs(e),e.flags&=-3}}function ri(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)ri(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Jo(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Ke=!0;const Us=[];function bt(){Us.push(Ke),Ke=!1}function yt(){const e=Us.pop();Ke=e===void 0?!0:e}function Oi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=pe;pe=void 0;try{t()}finally{pe=r}}}let Sr=0;class Zo{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ni{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!Ke||pe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==pe)r=this.activeLink=new Zo(pe,this),pe.deps?(r.prevDep=pe.depsTail,pe.depsTail.nextDep=r,pe.depsTail=r):pe.deps=pe.depsTail=r,As(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=pe.depsTail,r.nextDep=void 0,pe.depsTail.nextDep=r,pe.depsTail=r,pe.deps===r&&(pe.deps=n)}return r}trigger(t){this.version++,Sr++,this.notify(t)}notify(t){ei();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{ti()}}}function As(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)As(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ln=new WeakMap,zt=Symbol(""),zn=Symbol(""),wr=Symbol("");function Ee(e,t,r){if(Ke&&pe){let n=Ln.get(e);n||Ln.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new ni),i.map=n,i.key=r),i.track()}}function mt(e,t,r,n,i,s){const o=Ln.get(e);if(!o){Sr++;return}const a=l=>{l&&l.trigger()};if(ei(),t==="clear")o.forEach(a);else{const l=X(e),f=l&&Zn(r);if(l&&r==="length"){const c=Number(n);o.forEach((u,h)=>{(h==="length"||h===wr||!Et(h)&&h>=c)&&a(u)})}else switch((r!==void 0||o.has(void 0))&&a(o.get(r)),f&&a(o.get(wr)),t){case"add":l?f&&a(o.get("length")):(a(o.get(zt)),$t(e)&&a(o.get(zn)));break;case"delete":l||(a(o.get(zt)),$t(e)&&a(o.get(zn)));break;case"set":$t(e)&&a(o.get(zt));break}}ti()}function jt(e){const t=ne(e);return t===e?t:(Ee(t,"iterate",wr),Qe(e)?t:t.map(Me))}function on(e){return Ee(e=ne(e),"iterate",wr),e}const ea={__proto__:null,[Symbol.iterator](){return xn(this,Symbol.iterator,Me)},concat(...e){return jt(this).concat(...e.map(t=>X(t)?jt(t):t))},entries(){return xn(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,r=>r.map(Me),arguments)},find(e,t){return ut(this,"find",e,t,Me,arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Sn(this,"includes",e)},indexOf(...e){return Sn(this,"indexOf",e)},join(e){return jt(this).join(e)},lastIndexOf(...e){return Sn(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return ir(this,"pop")},push(...e){return ir(this,"push",e)},reduce(e,...t){return Ei(this,"reduce",e,t)},reduceRight(e,...t){return Ei(this,"reduceRight",e,t)},shift(){return ir(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return ir(this,"splice",e)},toReversed(){return jt(this).toReversed()},toSorted(e){return jt(this).toSorted(e)},toSpliced(...e){return jt(this).toSpliced(...e)},unshift(...e){return ir(this,"unshift",e)},values(){return xn(this,"values",Me)}};function xn(e,t,r){const n=on(e),i=n[t]();return n!==e&&!Qe(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=r(s.value)),s}),i}const ta=Array.prototype;function ut(e,t,r,n,i,s){const o=on(e),a=o!==e&&!Qe(e),l=o[t];if(l!==ta[t]){const u=l.apply(e,s);return a?Me(u):u}let f=r;o!==e&&(a?f=function(u,h){return r.call(this,Me(u),h,e)}:r.length>2&&(f=function(u,h){return r.call(this,u,h,e)}));const c=l.call(o,f,n);return a&&i?i(c):c}function Ei(e,t,r,n){const i=on(e);let s=r;return i!==e&&(Qe(e)?r.length>3&&(s=function(o,a,l){return r.call(this,o,a,l,e)}):s=function(o,a,l){return r.call(this,o,Me(a),l,e)}),i[t](s,...n)}function Sn(e,t,r){const n=ne(e);Ee(n,"iterate",wr);const i=n[t](...r);return(i===-1||i===!1)&&ai(r[0])?(r[0]=ne(r[0]),n[t](...r)):i}function ir(e,t,r=[]){bt(),ei();const n=ne(e)[t].apply(e,r);return ti(),yt(),n}const ra=Xn("__proto__,__v_isRef,__isVue"),Ds=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Et));function na(e){Et(e)||(e=String(e));const t=ne(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Fs{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?da:Vs:s?zs:Ls).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=X(t);if(!i){let l;if(o&&(l=ea[r]))return l;if(r==="hasOwnProperty")return na}const a=Reflect.get(t,r,_e(t)?t:n);return(Et(r)?Ds.has(r):ra(r))||(i||Ee(t,"get",r),s)?a:_e(a)?o&&Zn(r)?a:a.value:Se(a)?i?js(a):si(a):a}}class Gs extends Fs{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];if(!this._isShallow){const l=Ct(s);if(!Qe(n)&&!Ct(n)&&(s=ne(s),n=ne(n)),!X(t)&&_e(s)&&!_e(n))return l?!1:(s.value=n,!0)}const o=X(t)&&Zn(r)?Number(r)<t.length:ie(t,r),a=Reflect.set(t,r,n,_e(t)?t:i);return t===ne(i)&&(o?Tt(n,s)&&mt(t,"set",r,n):mt(t,"add",r,n)),a}deleteProperty(t,r){const n=ie(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&mt(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!Et(r)||!Ds.has(r))&&Ee(t,"has",r),n}ownKeys(t){return Ee(t,"iterate",X(t)?"length":zt),Reflect.ownKeys(t)}}class ia extends Fs{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const sa=new Gs,oa=new ia,aa=new Gs(!0);const Vn=e=>e,Er=e=>Reflect.getPrototypeOf(e);function la(e,t,r){return function(...n){const i=this.__v_raw,s=ne(i),o=$t(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...n),c=r?Vn:t?kr:Me;return!t&&Ee(s,"iterate",l?zn:zt),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:a?[c(u[0]),c(u[1])]:c(u),done:h}},[Symbol.iterator](){return this}}}}function _r(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ca(e,t){const r={get(i){const s=this.__v_raw,o=ne(s),a=ne(i);e||(Tt(i,a)&&Ee(o,"get",i),Ee(o,"get",a));const{has:l}=Er(o),f=t?Vn:e?kr:Me;if(l.call(o,i))return f(s.get(i));if(l.call(o,a))return f(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(ne(i),"iterate",zt),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=ne(s),a=ne(i);return e||(Tt(i,a)&&Ee(o,"has",i),Ee(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=ne(a),f=t?Vn:e?kr:Me;return!e&&Ee(l,"iterate",zt),a.forEach((c,u)=>i.call(s,f(c),f(u),o))}};return Re(r,e?{add:_r("add"),set:_r("set"),delete:_r("delete"),clear:_r("clear")}:{add(i){!t&&!Qe(i)&&!Ct(i)&&(i=ne(i));const s=ne(this);return Er(s).has.call(s,i)||(s.add(i),mt(s,"add",i,i)),this},set(i,s){!t&&!Qe(s)&&!Ct(s)&&(s=ne(s));const o=ne(this),{has:a,get:l}=Er(o);let f=a.call(o,i);f||(i=ne(i),f=a.call(o,i));const c=l.call(o,i);return o.set(i,s),f?Tt(s,c)&&mt(o,"set",i,s):mt(o,"add",i,s),this},delete(i){const s=ne(this),{has:o,get:a}=Er(s);let l=o.call(s,i);l||(i=ne(i),l=o.call(s,i)),a&&a.call(s,i);const f=s.delete(i);return l&&mt(s,"delete",i,void 0),f},clear(){const i=ne(this),s=i.size!==0,o=i.clear();return s&&mt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=la(i,e,t)}),r}function ii(e,t){const r=ca(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(ie(r,i)&&i in n?r:n,i,s)}const ua={get:ii(!1,!1)},fa={get:ii(!1,!0)},ha={get:ii(!0,!1)};const Ls=new WeakMap,zs=new WeakMap,Vs=new WeakMap,da=new WeakMap;function pa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ma(e){return e.__v_skip||!Object.isExtensible(e)?0:pa(Vo(e))}function si(e){return Ct(e)?e:oi(e,!1,sa,ua,Ls)}function ga(e){return oi(e,!1,aa,fa,zs)}function js(e){return oi(e,!0,oa,ha,Vs)}function oi(e,t,r,n,i){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=ma(e);if(s===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function Yt(e){return Ct(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function Qe(e){return!!(e&&e.__v_isShallow)}function ai(e){return e?!!e.__v_raw:!1}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function va(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Fn(e,"__v_skip",!0),e}const Me=e=>Se(e)?si(e):e,kr=e=>Se(e)?js(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function It(e){return ba(e,!1)}function ba(e,t){return _e(e)?e:new ya(e,t)}class ya{constructor(t,r){this.dep=new ni,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ne(t),this._value=r?t:Me(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Qe(t)||Ct(t);t=n?t:ne(t),Tt(t,r)&&(this._rawValue=t,this._value=n?t:Me(t),this.dep.trigger())}}function Ns(e){return _e(e)?e.value:e}const xa={get:(e,t,r)=>t==="__v_raw"?e:Ns(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return _e(i)&&!_e(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function ks(e){return Yt(e)?e:new Proxy(e,xa)}class Sa{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new ni(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Es(this,!0),!0}get value(){const t=this.dep.track();return Is(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wa(e,t,r=!1){let n,i;return J(e)?n=e:(n=e.get,i=e.set),new Sa(n,i,r)}const Rr={},qr=new WeakMap;let Gt;function Ba(e,t=!1,r=Gt){if(r){let n=qr.get(r);n||qr.set(r,n=[]),n.push(e)}}function Pa(e,t,r=he){const{immediate:n,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=r,f=S=>i?S:Qe(S)||i===!1||i===0?gt(S,1):gt(S);let c,u,h,p,d=!1,v=!1;if(_e(e)?(u=()=>e.value,d=Qe(e)):Yt(e)?(u=()=>f(e),d=!0):X(e)?(v=!0,d=e.some(S=>Yt(S)||Qe(S)),u=()=>e.map(S=>{if(_e(S))return S.value;if(Yt(S))return f(S);if(J(S))return l?l(S,2):S()})):J(e)?t?u=l?()=>l(e,2):e:u=()=>{if(h){bt();try{h()}finally{yt()}}const S=Gt;Gt=c;try{return l?l(e,3,[p]):e(p)}finally{Gt=S}}:u=lt,t&&i){const S=u,M=i===!0?1/0:i;u=()=>gt(S(),M)}const y=Ko(),w=()=>{c.stop(),y&&y.active&&Jn(y.effects,c)};if(s&&t){const S=t;t=(...M)=>{S(...M),w()}}let b=v?new Array(e.length).fill(Rr):Rr;const P=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const M=c.run();if(i||d||(v?M.some((_,x)=>Tt(_,b[x])):Tt(M,b))){h&&h();const _=Gt;Gt=c;try{const x=[M,b===Rr?void 0:v&&b[0]===Rr?[]:b,p];b=M,l?l(t,3,x):t(...x)}finally{Gt=_}}}else c.run()};return a&&a(P),c=new Cs(u),c.scheduler=o?()=>o(P,!1):P,p=S=>Ba(S,!1,c),h=c.onStop=()=>{const S=qr.get(c);if(S){if(l)l(S,4);else for(const M of S)M();qr.delete(c)}},t?n?P(!0):b=c.run():o?o(P.bind(null,!0),!0):c.run(),w.pause=c.pause.bind(c),w.resume=c.resume.bind(c),w.stop=w,w}function gt(e,t=1/0,r){if(t<=0||!Se(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,_e(e))gt(e.value,t,r);else if(X(e))for(let n=0;n<e.length;n++)gt(e[n],t,r);else if(ys(e)||$t(e))e.forEach(n=>{gt(n,t,r)});else if(ws(e)){for(const n in e)gt(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&gt(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cr(e,t,r,n){try{return n?e(...n):e()}catch(i){an(i,t,r)}}function ct(e,t,r,n){if(J(e)){const i=Cr(e,t,r,n);return i&&xs(i)&&i.catch(s=>{an(s,t,r)}),i}if(X(e)){const i=[];for(let s=0;s<e.length;s++)i.push(ct(e[s],t,r,n));return i}}function an(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,l,f)===!1)return}a=a.parent}if(s){bt(),Cr(s,null,10,[e,l,f]),yt();return}}Ta(e,r,i,n,o)}function Ta(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const Ae=[];let nt=-1;const Qt=[];let Bt=null,kt=0;const qs=Promise.resolve();let Hr=null;function Ma(e){const t=Hr||qs;return e?t.then(this?e.bind(this):e):t}function Ca(e){let t=nt+1,r=Ae.length;for(;t<r;){const n=t+r>>>1,i=Ae[n],s=Br(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function li(e){if(!(e.flags&1)){const t=Br(e),r=Ae[Ae.length-1];!r||!(e.flags&2)&&t>=Br(r)?Ae.push(e):Ae.splice(Ca(t),0,e),e.flags|=1,Hs()}}function Hs(){Hr||(Hr=qs.then($s))}function Oa(e){X(e)?Qt.push(...e):Bt&&e.id===-1?Bt.splice(kt+1,0,e):e.flags&1||(Qt.push(e),e.flags|=1),Hs()}function _i(e,t,r=nt+1){for(;r<Ae.length;r++){const n=Ae[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Ae.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ws(e){if(Qt.length){const t=[...new Set(Qt)].sort((r,n)=>Br(r)-Br(n));if(Qt.length=0,Bt){Bt.push(...t);return}for(Bt=t,kt=0;kt<Bt.length;kt++){const r=Bt[kt];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Bt=null,kt=0}}const Br=e=>e.id==null?e.flags&2?-1:1/0:e.id;function $s(e){try{for(nt=0;nt<Ae.length;nt++){const t=Ae[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Cr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nt<Ae.length;nt++){const t=Ae[nt];t&&(t.flags&=-2)}nt=-1,Ae.length=0,Ws(),Hr=null,(Ae.length||Qt.length)&&$s()}}let Ye=null,Ys=null;function Wr(e){const t=Ye;return Ye=e,Ys=e&&e.type.__scopeId||null,t}function Ea(e,t=Ye,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&zi(-1);const s=Wr(t);let o;try{o=e(...i)}finally{Wr(s),n._d&&zi(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function _a(e,t){if(Ye===null)return e;const r=fn(Ye),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,l=he]=t[i];s&&(J(s)&&(s={mounted:s,updated:s}),s.deep&&gt(o),n.push({dir:s,instance:r,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Ut(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(bt(),ct(l,r,8,[e.el,a,e,t]),yt())}}const Ra=Symbol("_vte"),Ia=e=>e.__isTeleport;function ci(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ci(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ua(e,t){return J(e)?Re({name:e.name},t,{setup:e}):e}function Qs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function pr(e,t,r,n,i=!1){if(X(e)){e.forEach((d,v)=>pr(d,t&&(X(t)?t[v]:t),r,n,i));return}if(mr(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&pr(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?fn(n.component):n.el,o=i?null:s,{i:a,r:l}=e,f=t&&t.r,c=a.refs===he?a.refs={}:a.refs,u=a.setupState,h=ne(u),p=u===he?()=>!1:d=>ie(h,d);if(f!=null&&f!==l&&(Pe(f)?(c[f]=null,p(f)&&(u[f]=null)):_e(f)&&(f.value=null)),J(l))Cr(l,a,12,[o,c]);else{const d=Pe(l),v=_e(l);if(d||v){const y=()=>{if(e.f){const w=d?p(l)?u[l]:c[l]:l.value;i?X(w)&&Jn(w,s):X(w)?w.includes(s)||w.push(s):d?(c[l]=[s],p(l)&&(u[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else d?(c[l]=o,p(l)&&(u[l]=o)):v&&(l.value=o,e.k&&(c[e.k]=o))};o?(y.id=-1,He(y,r)):y()}}}nn().requestIdleCallback;nn().cancelIdleCallback;const mr=e=>!!e.type.__asyncLoader,Xs=e=>e.type.__isKeepAlive;function Aa(e,t){Ks(e,"a",t)}function Da(e,t){Ks(e,"da",t)}function Ks(e,t,r=De){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ln(t,n,r),r){let i=r.parent;for(;i&&i.parent;)Xs(i.parent.vnode)&&Fa(n,t,r,i),i=i.parent}}function Fa(e,t,r,n){const i=ln(t,e,n,!0);Zs(()=>{Jn(n[t],i)},r)}function ln(e,t,r=De,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...o)=>{bt();const a=Or(r),l=ct(t,r,e,o);return a(),yt(),l});return n?i.unshift(s):i.push(s),s}}const xt=e=>(t,r=De)=>{(!Tr||e==="sp")&&ln(e,(...n)=>t(...n),r)},Ga=xt("bm"),Js=xt("m"),La=xt("bu"),za=xt("u"),Va=xt("bum"),Zs=xt("um"),ja=xt("sp"),Na=xt("rtg"),ka=xt("rtc");function qa(e,t=De){ln("ec",e,t)}const Ha=Symbol.for("v-ndc");function Wa(e,t,r,n){let i;const s=r,o=X(e);if(o||Pe(e)){const a=o&&Yt(e);let l=!1,f=!1;a&&(l=!Qe(e),f=Ct(e),e=on(e)),i=new Array(e.length);for(let c=0,u=e.length;c<u;c++)i[c]=t(l?f?kr(Me(e[c])):Me(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s)}else if(Se(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const c=a[l];i[l]=t(e[c],c,l,s)}}else i=[];return i}const jn=e=>e?So(e)?fn(e):jn(e.parent):null,gr=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jn(e.parent),$root:e=>jn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>{li(e.update)}),$nextTick:e=>e.n||(e.n=Ma.bind(e.proxy)),$watch:e=>pl.bind(e)}),wn=(e,t)=>e!==he&&!e.__isScriptSetup&&ie(e,t),$a={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(wn(n,t))return o[t]=1,n[t];if(i!==he&&ie(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&ie(f,t))return o[t]=3,s[t];if(r!==he&&ie(r,t))return o[t]=4,r[t];Nn&&(o[t]=0)}}const c=gr[t];let u,h;if(c)return t==="$attrs"&&Ee(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(r!==he&&ie(r,t))return o[t]=4,r[t];if(h=l.config.globalProperties,ie(h,t))return h[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return wn(i,t)?(i[t]=r,!0):n!==he&&ie(n,t)?(n[t]=r,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!r[o]||e!==he&&ie(e,o)||wn(t,o)||(a=s[0])&&ie(a,o)||ie(n,o)||ie(gr,o)||ie(i.config.globalProperties,o)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:ie(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Ri(e){return X(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Nn=!0;function Ya(e){const t=to(e),r=e.proxy,n=e.ctx;Nn=!1,t.beforeCreate&&Ii(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:f,created:c,beforeMount:u,mounted:h,beforeUpdate:p,updated:d,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:P,unmounted:S,render:M,renderTracked:_,renderTriggered:x,errorCaptured:T,serverPrefetch:O,expose:z,inheritAttrs:j,components:k,directives:N,filters:L}=t;if(f&&Qa(f,n,null),o)for(const V in o){const D=o[V];J(D)&&(n[V]=D.bind(r))}if(i){const V=i.call(r,r);Se(V)&&(e.data=si(V))}if(Nn=!0,s)for(const V in s){const D=s[V],ae=J(D)?D.bind(r,r):J(D.get)?D.get.bind(r,r):lt,me=!J(D)&&J(D.set)?D.set.bind(r):lt,Z=Wn({get:ae,set:me});Object.defineProperty(n,V,{enumerable:!0,configurable:!0,get:()=>Z.value,set:te=>Z.value=te})}if(a)for(const V in a)eo(a[V],n,r,V);if(l){const V=J(l)?l.call(r):l;Reflect.ownKeys(V).forEach(D=>{tl(D,V[D])})}c&&Ii(c,e,"c");function H(V,D){X(D)?D.forEach(ae=>V(ae.bind(r))):D&&V(D.bind(r))}if(H(Ga,u),H(Js,h),H(La,p),H(za,d),H(Aa,v),H(Da,y),H(qa,T),H(ka,_),H(Na,x),H(Va,b),H(Zs,S),H(ja,O),X(z))if(z.length){const V=e.exposed||(e.exposed={});z.forEach(D=>{Object.defineProperty(V,D,{get:()=>r[D],set:ae=>r[D]=ae,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===lt&&(e.render=M),j!=null&&(e.inheritAttrs=j),k&&(e.components=k),N&&(e.directives=N),O&&Qs(e)}function Qa(e,t,r=lt){X(e)&&(e=kn(e));for(const n in e){const i=e[n];let s;Se(i)?"default"in i?s=Gr(i.from||n,i.default,!0):s=Gr(i.from||n):s=Gr(i),_e(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[n]=s}}function Ii(e,t,r){ct(X(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function eo(e,t,r,n){let i=n.includes(".")?mo(r,n):()=>r[n];if(Pe(e)){const s=t[e];J(s)&&Pn(i,s)}else if(J(e))Pn(i,e.bind(r));else if(Se(e))if(X(e))e.forEach(s=>eo(s,t,r,n));else{const s=J(e.handler)?e.handler.bind(r):t[e.handler];J(s)&&Pn(i,s,e)}}function to(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(f=>$r(l,f,o,!0)),$r(l,t,o)),Se(t)&&s.set(t,l),l}function $r(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&$r(e,s,r,!0),i&&i.forEach(o=>$r(e,o,r,!0));for(const o in t)if(!(n&&o==="expose")){const a=Xa[o]||r&&r[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Xa={data:Ui,props:Ai,emits:Ai,methods:cr,computed:cr,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:cr,directives:cr,watch:Ja,provide:Ui,inject:Ka};function Ui(e,t){return t?e?function(){return Re(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function Ka(e,t){return cr(kn(e),kn(t))}function kn(e){if(X(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function cr(e,t){return e?Re(Object.create(null),e,t):t}function Ai(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Re(Object.create(null),Ri(e),Ri(t??{})):t}function Ja(e,t){if(!e)return t;if(!t)return e;const r=Re(Object.create(null),e);for(const n in t)r[n]=Ie(e[n],t[n]);return r}function ro(){return{app:null,config:{isNativeTag:Lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Za=0;function el(e,t){return function(n,i=null){J(n)||(n=Re({},n)),i!=null&&!Se(i)&&(i=null);const s=ro(),o=new WeakSet,a=[];let l=!1;const f=s.app={_uid:Za++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Fl,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(f,...u)):J(c)&&(o.add(c),c(f,...u))),f},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),f},component(c,u){return u?(s.components[c]=u,f):s.components[c]},directive(c,u){return u?(s.directives[c]=u,f):s.directives[c]},mount(c,u,h){if(!l){const p=f._ceVNode||Vt(n,i);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(p,c,h),l=!0,f._container=c,c.__vue_app__=f,fn(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ct(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,u){return s.provides[c]=u,f},runWithContext(c){const u=Xt;Xt=f;try{return c()}finally{Xt=u}}};return f}}let Xt=null;function tl(e,t){if(De){let r=De.provides;const n=De.parent&&De.parent.provides;n===r&&(r=De.provides=Object.create(n)),r[e]=t}}function Gr(e,t,r=!1){const n=_l();if(n||Xt){let i=Xt?Xt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&J(t)?t.call(n&&n.proxy):t}}const no={},io=()=>Object.create(no),so=e=>Object.getPrototypeOf(e)===no;function rl(e,t,r,n=!1){const i={},s=io();e.propsDefaults=Object.create(null),oo(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);r?e.props=n?i:ga(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function nl(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ne(i),[l]=e.propsOptions;let f=!1;if((n||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(cn(e.emitsOptions,h))continue;const p=t[h];if(l)if(ie(s,h))p!==s[h]&&(s[h]=p,f=!0);else{const d=Mt(h);i[d]=qn(l,a,d,p,e,!1)}else p!==s[h]&&(s[h]=p,f=!0)}}}else{oo(e,t,i,s)&&(f=!0);let c;for(const u in a)(!t||!ie(t,u)&&((c=_t(u))===u||!ie(t,c)))&&(l?r&&(r[u]!==void 0||r[c]!==void 0)&&(i[u]=qn(l,a,u,void 0,e,!0)):delete i[u]);if(s!==a)for(const u in s)(!t||!ie(t,u))&&(delete s[u],f=!0)}f&&mt(e.attrs,"set","")}function oo(e,t,r,n){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(fr(l))continue;const f=t[l];let c;i&&ie(i,c=Mt(l))?!s||!s.includes(c)?r[c]=f:(a||(a={}))[c]=f:cn(e.emitsOptions,l)||(!(l in n)||f!==n[l])&&(n[l]=f,o=!0)}if(s){const l=ne(r),f=a||he;for(let c=0;c<s.length;c++){const u=s[c];r[u]=qn(i,l,u,f[u],e,!ie(f,u))}}return o}function qn(e,t,r,n,i,s){const o=e[r];if(o!=null){const a=ie(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:f}=i;if(r in f)n=f[r];else{const c=Or(i);n=f[r]=l.call(null,t),c()}}else n=l;i.ce&&i.ce._setProp(r,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===_t(r))&&(n=!0))}return n}const il=new WeakMap;function ao(e,t,r=!1){const n=r?il:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!J(e)){const c=u=>{l=!0;const[h,p]=ao(u,t,!0);Re(o,h),p&&a.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Se(e)&&n.set(e,Wt),Wt;if(X(s))for(let c=0;c<s.length;c++){const u=Mt(s[c]);Di(u)&&(o[u]=he)}else if(s)for(const c in s){const u=Mt(c);if(Di(u)){const h=s[c],p=o[u]=X(h)||J(h)?{type:h}:Re({},h),d=p.type;let v=!1,y=!0;if(X(d))for(let w=0;w<d.length;++w){const b=d[w],P=J(b)&&b.name;if(P==="Boolean"){v=!0;break}else P==="String"&&(y=!1)}else v=J(d)&&d.name==="Boolean";p[0]=v,p[1]=y,(v||ie(p,"default"))&&a.push(u)}}const f=[o,a];return Se(e)&&n.set(e,f),f}function Di(e){return e[0]!=="$"&&!fr(e)}const ui=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",fi=e=>X(e)?e.map(at):[at(e)],sl=(e,t,r)=>{if(t._n)return t;const n=Ea((...i)=>fi(t(...i)),r);return n._c=!1,n},lo=(e,t,r)=>{const n=e._ctx;for(const i in e){if(ui(i))continue;const s=e[i];if(J(s))t[i]=sl(i,s,n);else if(s!=null){const o=fi(s);t[i]=()=>o}}},co=(e,t)=>{const r=fi(t);e.slots.default=()=>r},uo=(e,t,r)=>{for(const n in t)(r||!ui(n))&&(e[n]=t[n])},ol=(e,t,r)=>{const n=e.slots=io();if(e.vnode.shapeFlag&32){const i=t.__;i&&Fn(n,"__",i,!0);const s=t._;s?(uo(n,t,r),r&&Fn(n,"_",s,!0)):lo(t,n)}else t&&co(e,t)},al=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,o=he;if(n.shapeFlag&32){const a=t._;a?r&&a===1?s=!1:uo(i,t,r):(s=!t.$stable,lo(t,i)),o=t}else t&&(co(e,t),o={default:1});if(s)for(const a in i)!ui(a)&&o[a]==null&&delete i[a]},He=Sl;function ll(e){return cl(e)}function cl(e,t){const r=nn();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:f,setElementText:c,parentNode:u,nextSibling:h,setScopeId:p=lt,insertStaticContent:d}=e,v=(m,g,B,R=null,C=null,E=null,F=void 0,A=null,U=!!g.dynamicChildren)=>{if(m===g)return;m&&!sr(m,g)&&(R=we(m),te(m,C,E,!0),m=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:I,ref:Y,shapeFlag:G}=g;switch(I){case un:y(m,g,B,R);break;case Jt:w(m,g,B,R);break;case Tn:m==null&&b(g,B,R,F);break;case ot:k(m,g,B,R,C,E,F,A,U);break;default:G&1?M(m,g,B,R,C,E,F,A,U):G&6?N(m,g,B,R,C,E,F,A,U):(G&64||G&128)&&I.process(m,g,B,R,C,E,F,A,U,ue)}Y!=null&&C?pr(Y,m&&m.ref,E,g||m,!g):Y==null&&m&&m.ref!=null&&pr(m.ref,null,E,m,!0)},y=(m,g,B,R)=>{if(m==null)n(g.el=a(g.children),B,R);else{const C=g.el=m.el;g.children!==m.children&&f(C,g.children)}},w=(m,g,B,R)=>{m==null?n(g.el=l(g.children||""),B,R):g.el=m.el},b=(m,g,B,R)=>{[m.el,m.anchor]=d(m.children,g,B,R,m.el,m.anchor)},P=({el:m,anchor:g},B,R)=>{let C;for(;m&&m!==g;)C=h(m),n(m,B,R),m=C;n(g,B,R)},S=({el:m,anchor:g})=>{let B;for(;m&&m!==g;)B=h(m),i(m),m=B;i(g)},M=(m,g,B,R,C,E,F,A,U)=>{g.type==="svg"?F="svg":g.type==="math"&&(F="mathml"),m==null?_(g,B,R,C,E,F,A,U):O(m,g,C,E,F,A,U)},_=(m,g,B,R,C,E,F,A)=>{let U,I;const{props:Y,shapeFlag:G,transition:W,dirs:Q}=m;if(U=m.el=o(m.type,E,Y&&Y.is,Y),G&8?c(U,m.children):G&16&&T(m.children,U,null,R,C,Bn(m,E),F,A),Q&&Ut(m,null,R,"created"),x(U,m,m.scopeId,F,R),Y){for(const de in Y)de!=="value"&&!fr(de)&&s(U,de,null,Y[de],E,R);"value"in Y&&s(U,"value",null,Y.value,E),(I=Y.onVnodeBeforeMount)&&tt(I,R,m)}Q&&Ut(m,null,R,"beforeMount");const ee=ul(C,W);ee&&W.beforeEnter(U),n(U,g,B),((I=Y&&Y.onVnodeMounted)||ee||Q)&&He(()=>{I&&tt(I,R,m),ee&&W.enter(U),Q&&Ut(m,null,R,"mounted")},C)},x=(m,g,B,R,C)=>{if(B&&p(m,B),R)for(let E=0;E<R.length;E++)p(m,R[E]);if(C){let E=C.subTree;if(g===E||vo(E.type)&&(E.ssContent===g||E.ssFallback===g)){const F=C.vnode;x(m,F,F.scopeId,F.slotScopeIds,C.parent)}}},T=(m,g,B,R,C,E,F,A,U=0)=>{for(let I=U;I<m.length;I++){const Y=m[I]=A?Pt(m[I]):at(m[I]);v(null,Y,g,B,R,C,E,F,A)}},O=(m,g,B,R,C,E,F)=>{const A=g.el=m.el;let{patchFlag:U,dynamicChildren:I,dirs:Y}=g;U|=m.patchFlag&16;const G=m.props||he,W=g.props||he;let Q;if(B&&At(B,!1),(Q=W.onVnodeBeforeUpdate)&&tt(Q,B,g,m),Y&&Ut(g,m,B,"beforeUpdate"),B&&At(B,!0),(G.innerHTML&&W.innerHTML==null||G.textContent&&W.textContent==null)&&c(A,""),I?z(m.dynamicChildren,I,A,B,R,Bn(g,C),E):F||D(m,g,A,null,B,R,Bn(g,C),E,!1),U>0){if(U&16)j(A,G,W,B,C);else if(U&2&&G.class!==W.class&&s(A,"class",null,W.class,C),U&4&&s(A,"style",G.style,W.style,C),U&8){const ee=g.dynamicProps;for(let de=0;de<ee.length;de++){const le=ee[de],Ge=G[le],Le=W[le];(Le!==Ge||le==="value")&&s(A,le,Ge,Le,C,B)}}U&1&&m.children!==g.children&&c(A,g.children)}else!F&&I==null&&j(A,G,W,B,C);((Q=W.onVnodeUpdated)||Y)&&He(()=>{Q&&tt(Q,B,g,m),Y&&Ut(g,m,B,"updated")},R)},z=(m,g,B,R,C,E,F)=>{for(let A=0;A<g.length;A++){const U=m[A],I=g[A],Y=U.el&&(U.type===ot||!sr(U,I)||U.shapeFlag&198)?u(U.el):B;v(U,I,Y,null,R,C,E,F,!0)}},j=(m,g,B,R,C)=>{if(g!==B){if(g!==he)for(const E in g)!fr(E)&&!(E in B)&&s(m,E,g[E],null,C,R);for(const E in B){if(fr(E))continue;const F=B[E],A=g[E];F!==A&&E!=="value"&&s(m,E,A,F,C,R)}"value"in B&&s(m,"value",g.value,B.value,C)}},k=(m,g,B,R,C,E,F,A,U)=>{const I=g.el=m?m.el:a(""),Y=g.anchor=m?m.anchor:a("");let{patchFlag:G,dynamicChildren:W,slotScopeIds:Q}=g;Q&&(A=A?A.concat(Q):Q),m==null?(n(I,B,R),n(Y,B,R),T(g.children||[],B,Y,C,E,F,A,U)):G>0&&G&64&&W&&m.dynamicChildren?(z(m.dynamicChildren,W,B,C,E,F,A),(g.key!=null||C&&g===C.subTree)&&fo(m,g,!0)):D(m,g,B,Y,C,E,F,A,U)},N=(m,g,B,R,C,E,F,A,U)=>{g.slotScopeIds=A,m==null?g.shapeFlag&512?C.ctx.activate(g,B,R,F,U):L(g,B,R,C,E,F,U):K(m,g,U)},L=(m,g,B,R,C,E,F)=>{const A=m.component=El(m,R,C);if(Xs(m)&&(A.ctx.renderer=ue),Rl(A,!1,F),A.asyncDep){if(C&&C.registerDep(A,H,F),!m.el){const U=A.subTree=Vt(Jt);w(null,U,g,B),m.placeholder=U.el}}else H(A,m,g,B,C,E,F)},K=(m,g,B)=>{const R=g.component=m.component;if(yl(m,g,B))if(R.asyncDep&&!R.asyncResolved){V(R,g,B);return}else R.next=g,R.update();else g.el=m.el,R.vnode=g},H=(m,g,B,R,C,E,F)=>{const A=()=>{if(m.isMounted){let{next:G,bu:W,u:Q,parent:ee,vnode:de}=m;{const Ze=ho(m);if(Ze){G&&(G.el=de.el,V(m,G,F)),Ze.asyncDep.then(()=>{m.isUnmounted||A()});return}}let le=G,Ge;At(m,!1),G?(G.el=de.el,V(m,G,F)):G=de,W&&vn(W),(Ge=G.props&&G.props.onVnodeBeforeUpdate)&&tt(Ge,ee,G,de),At(m,!0);const Le=Gi(m),Je=m.subTree;m.subTree=Le,v(Je,Le,u(Je.el),we(Je),m,C,E),G.el=Le.el,le===null&&xl(m,Le.el),Q&&He(Q,C),(Ge=G.props&&G.props.onVnodeUpdated)&&He(()=>tt(Ge,ee,G,de),C)}else{let G;const{el:W,props:Q}=g,{bm:ee,m:de,parent:le,root:Ge,type:Le}=m,Je=mr(g);At(m,!1),ee&&vn(ee),!Je&&(G=Q&&Q.onVnodeBeforeMount)&&tt(G,le,g),At(m,!0);{Ge.ce&&Ge.ce._def.shadowRoot!==!1&&Ge.ce._injectChildStyle(Le);const Ze=m.subTree=Gi(m);v(null,Ze,B,R,m,C,E),g.el=Ze.el}if(de&&He(de,C),!Je&&(G=Q&&Q.onVnodeMounted)){const Ze=g;He(()=>tt(G,le,Ze),C)}(g.shapeFlag&256||le&&mr(le.vnode)&&le.vnode.shapeFlag&256)&&m.a&&He(m.a,C),m.isMounted=!0,g=B=R=null}};m.scope.on();const U=m.effect=new Cs(A);m.scope.off();const I=m.update=U.run.bind(U),Y=m.job=U.runIfDirty.bind(U);Y.i=m,Y.id=m.uid,U.scheduler=()=>li(Y),At(m,!0),I()},V=(m,g,B)=>{g.component=m;const R=m.vnode.props;m.vnode=g,m.next=null,nl(m,g.props,R,B),al(m,g.children,B),bt(),_i(m),yt()},D=(m,g,B,R,C,E,F,A,U=!1)=>{const I=m&&m.children,Y=m?m.shapeFlag:0,G=g.children,{patchFlag:W,shapeFlag:Q}=g;if(W>0){if(W&128){me(I,G,B,R,C,E,F,A,U);return}else if(W&256){ae(I,G,B,R,C,E,F,A,U);return}}Q&8?(Y&16&&xe(I,C,E),G!==I&&c(B,G)):Y&16?Q&16?me(I,G,B,R,C,E,F,A,U):xe(I,C,E,!0):(Y&8&&c(B,""),Q&16&&T(G,B,R,C,E,F,A,U))},ae=(m,g,B,R,C,E,F,A,U)=>{m=m||Wt,g=g||Wt;const I=m.length,Y=g.length,G=Math.min(I,Y);let W;for(W=0;W<G;W++){const Q=g[W]=U?Pt(g[W]):at(g[W]);v(m[W],Q,B,null,C,E,F,A,U)}I>Y?xe(m,C,E,!0,!1,G):T(g,B,R,C,E,F,A,U,G)},me=(m,g,B,R,C,E,F,A,U)=>{let I=0;const Y=g.length;let G=m.length-1,W=Y-1;for(;I<=G&&I<=W;){const Q=m[I],ee=g[I]=U?Pt(g[I]):at(g[I]);if(sr(Q,ee))v(Q,ee,B,null,C,E,F,A,U);else break;I++}for(;I<=G&&I<=W;){const Q=m[G],ee=g[W]=U?Pt(g[W]):at(g[W]);if(sr(Q,ee))v(Q,ee,B,null,C,E,F,A,U);else break;G--,W--}if(I>G){if(I<=W){const Q=W+1,ee=Q<Y?g[Q].el:R;for(;I<=W;)v(null,g[I]=U?Pt(g[I]):at(g[I]),B,ee,C,E,F,A,U),I++}}else if(I>W)for(;I<=G;)te(m[I],C,E,!0),I++;else{const Q=I,ee=I,de=new Map;for(I=ee;I<=W;I++){const ke=g[I]=U?Pt(g[I]):at(g[I]);ke.key!=null&&de.set(ke.key,I)}let le,Ge=0;const Le=W-ee+1;let Je=!1,Ze=0;const nr=new Array(Le);for(I=0;I<Le;I++)nr[I]=0;for(I=Q;I<=G;I++){const ke=m[I];if(Ge>=Le){te(ke,C,E,!0);continue}let et;if(ke.key!=null)et=de.get(ke.key);else for(le=ee;le<=W;le++)if(nr[le-ee]===0&&sr(ke,g[le])){et=le;break}et===void 0?te(ke,C,E,!0):(nr[et-ee]=I+1,et>=Ze?Ze=et:Je=!0,v(ke,g[et],B,null,C,E,F,A,U),Ge++)}const Pi=Je?fl(nr):Wt;for(le=Pi.length-1,I=Le-1;I>=0;I--){const ke=ee+I,et=g[ke],Ti=g[ke+1],Mi=ke+1<Y?Ti.el||Ti.placeholder:R;nr[I]===0?v(null,et,B,Mi,C,E,F,A,U):Je&&(le<0||I!==Pi[le]?Z(et,B,Mi,2):le--)}}},Z=(m,g,B,R,C=null)=>{const{el:E,type:F,transition:A,children:U,shapeFlag:I}=m;if(I&6){Z(m.component.subTree,g,B,R);return}if(I&128){m.suspense.move(g,B,R);return}if(I&64){F.move(m,g,B,ue);return}if(F===ot){n(E,g,B);for(let G=0;G<U.length;G++)Z(U[G],g,B,R);n(m.anchor,g,B);return}if(F===Tn){P(m,g,B);return}if(R!==2&&I&1&&A)if(R===0)A.beforeEnter(E),n(E,g,B),He(()=>A.enter(E),C);else{const{leave:G,delayLeave:W,afterLeave:Q}=A,ee=()=>{m.ctx.isUnmounted?i(E):n(E,g,B)},de=()=>{G(E,()=>{ee(),Q&&Q()})};W?W(E,ee,de):de()}else n(E,g,B)},te=(m,g,B,R=!1,C=!1)=>{const{type:E,props:F,ref:A,children:U,dynamicChildren:I,shapeFlag:Y,patchFlag:G,dirs:W,cacheIndex:Q}=m;if(G===-2&&(C=!1),A!=null&&(bt(),pr(A,null,B,m,!0),yt()),Q!=null&&(g.renderCache[Q]=void 0),Y&256){g.ctx.deactivate(m);return}const ee=Y&1&&W,de=!mr(m);let le;if(de&&(le=F&&F.onVnodeBeforeUnmount)&&tt(le,g,m),Y&6)ye(m.component,B,R);else{if(Y&128){m.suspense.unmount(B,R);return}ee&&Ut(m,null,g,"beforeUnmount"),Y&64?m.type.remove(m,g,B,ue,R):I&&!I.hasOnce&&(E!==ot||G>0&&G&64)?xe(I,g,B,!1,!0):(E===ot&&G&384||!C&&Y&16)&&xe(U,g,B),R&&be(m)}(de&&(le=F&&F.onVnodeUnmounted)||ee)&&He(()=>{le&&tt(le,g,m),ee&&Ut(m,null,g,"unmounted")},B)},be=m=>{const{type:g,el:B,anchor:R,transition:C}=m;if(g===ot){Te(B,R);return}if(g===Tn){S(m);return}const E=()=>{i(B),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:F,delayLeave:A}=C,U=()=>F(B,E);A?A(m.el,E,U):U()}else E()},Te=(m,g)=>{let B;for(;m!==g;)B=h(m),i(m),m=B;i(g)},ye=(m,g,B)=>{const{bum:R,scope:C,job:E,subTree:F,um:A,m:U,a:I,parent:Y,slots:{__:G}}=m;Fi(U),Fi(I),R&&vn(R),Y&&X(G)&&G.forEach(W=>{Y.renderCache[W]=void 0}),C.stop(),E&&(E.flags|=8,te(F,m,g,B)),A&&He(A,g),He(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},xe=(m,g,B,R=!1,C=!1,E=0)=>{for(let F=E;F<m.length;F++)te(m[F],g,B,R,C)},we=m=>{if(m.shapeFlag&6)return we(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const g=h(m.anchor||m.el),B=g&&g[Ra];return B?h(B):g};let ge=!1;const Ne=(m,g,B)=>{m==null?g._vnode&&te(g._vnode,null,null,!0):v(g._vnode||null,m,g,null,null,null,B),g._vnode=m,ge||(ge=!0,_i(),Ws(),ge=!1)},ue={p:v,um:te,m:Z,r:be,mt:L,mc:T,pc:D,pbc:z,n:we,o:e};return{render:Ne,hydrate:void 0,createApp:el(Ne)}}function Bn({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function At({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ul(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fo(e,t,r=!1){const n=e.children,i=t.children;if(X(n)&&X(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Pt(i[s]),a.el=o.el),!r&&a.patchFlag!==-2&&fo(o,a)),a.type===un&&(a.el=o.el),a.type===Jt&&!a.el&&(a.el=o.el)}}function fl(e){const t=e.slice(),r=[0];let n,i,s,o,a;const l=e.length;for(n=0;n<l;n++){const f=e[n];if(f!==0){if(i=r[r.length-1],e[i]<f){t[n]=i,r.push(n);continue}for(s=0,o=r.length-1;s<o;)a=s+o>>1,e[r[a]]<f?s=a+1:o=a;f<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,o=r[s-1];s-- >0;)r[s]=o,o=t[o];return r}function ho(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ho(t)}function Fi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const hl=Symbol.for("v-scx"),dl=()=>Gr(hl);function Pn(e,t,r){return po(e,t,r)}function po(e,t,r=he){const{immediate:n,deep:i,flush:s,once:o}=r,a=Re({},r),l=t&&n||!t&&s!=="post";let f;if(Tr){if(s==="sync"){const p=dl();f=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=lt,p.resume=lt,p.pause=lt,p}}const c=De;a.call=(p,d,v)=>ct(p,c,d,v);let u=!1;s==="post"?a.scheduler=p=>{He(p,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(p,d)=>{d?p():li(p)}),a.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Pa(e,t,a);return Tr&&(f?f.push(h):l&&h()),h}function pl(e,t,r){const n=this.proxy,i=Pe(e)?e.includes(".")?mo(n,e):()=>n[e]:e.bind(n,n);let s;J(t)?s=t:(s=t.handler,r=t);const o=Or(this),a=po(i,s.bind(n),r);return o(),a}function mo(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const ml=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Mt(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function gl(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||he;let i=r;const s=t.startsWith("update:"),o=s&&ml(n,t.slice(7));o&&(o.trim&&(i=r.map(c=>Pe(c)?c.trim():c)),o.number&&(i=r.map(ko)));let a,l=n[a=gn(t)]||n[a=gn(Mt(t))];!l&&s&&(l=n[a=gn(_t(t))]),l&&ct(l,e,6,i);const f=n[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ct(f,e,6,i)}}function go(e,t,r=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!J(e)){const l=f=>{const c=go(f,t,!0);c&&(a=!0,Re(o,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Se(e)&&n.set(e,null),null):(X(s)?s.forEach(l=>o[l]=null):Re(o,s),Se(e)&&n.set(e,o),o)}function cn(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,_t(t))||ie(e,t))}function Gi(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:f,renderCache:c,props:u,data:h,setupState:p,ctx:d,inheritAttrs:v}=e,y=Wr(e);let w,b;try{if(r.shapeFlag&4){const S=i||n,M=S;w=at(f.call(M,S,c,u,p,h,d)),b=a}else{const S=t;w=at(S.length>1?S(u,{attrs:a,slots:o,emit:l}):S(u,null)),b=t.props?a:vl(a)}}catch(S){vr.length=0,an(S,e,1),w=Vt(Jt)}let P=w;if(b&&v!==!1){const S=Object.keys(b),{shapeFlag:M}=P;S.length&&M&7&&(s&&S.some(Kn)&&(b=bl(b,s)),P=Zt(P,b,!1,!0))}return r.dirs&&(P=Zt(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(r.dirs):r.dirs),r.transition&&ci(P,r.transition),w=P,Wr(y),w}const vl=e=>{let t;for(const r in e)(r==="class"||r==="style"||en(r))&&((t||(t={}))[r]=e[r]);return t},bl=(e,t)=>{const r={};for(const n in e)(!Kn(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function yl(e,t,r){const{props:n,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Li(n,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(o[h]!==n[h]&&!cn(f,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Li(n,o,f):!0:!!o;return!1}function Li(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(t[s]!==e[s]&&!cn(r,s))return!0}return!1}function xl({vnode:e,parent:t},r){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=r,t=t.parent;else break}}const vo=e=>e.__isSuspense;function Sl(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):Oa(e)}const ot=Symbol.for("v-fgt"),un=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),vr=[];let $e=null;function Mn(e=!1){vr.push($e=e?null:[])}function wl(){vr.pop(),$e=vr[vr.length-1]||null}let Pr=1;function zi(e,t=!1){Pr+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function Bl(e){return e.dynamicChildren=Pr>0?$e||Wt:null,wl(),Pr>0&&$e&&$e.push(e),e}function Cn(e,t,r,n,i,s){return Bl(it(e,t,r,n,i,s,!0))}function bo(e){return e?e.__v_isVNode===!0:!1}function sr(e,t){return e.type===t.type&&e.key===t.key}const yo=({key:e})=>e??null,Lr=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||_e(e)||J(e)?{i:Ye,r:e,k:t,f:!!r}:e:null);function it(e,t=null,r=null,n=0,i=null,s=e===ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yo(t),ref:t&&Lr(t),scopeId:Ys,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return a?(hi(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Pe(r)?8:16),Pr>0&&!o&&$e&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$e.push(l),l}const Vt=Pl;function Pl(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===Ha)&&(e=Jt),bo(e)){const a=Zt(e,t,!0);return r&&hi(a,r),Pr>0&&!s&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag=-2,a}if(Dl(e)&&(e=e.__vccOpts),t){t=Tl(t);let{class:a,style:l}=t;a&&!Pe(a)&&(t.class=xr(a)),Se(l)&&(ai(l)&&!X(l)&&(l=Re({},l)),t.style=sn(l))}const o=Pe(e)?1:vo(e)?128:Ia(e)?64:Se(e)?4:J(e)?2:0;return it(e,t,r,n,i,o,s,!0)}function Tl(e){return e?ai(e)||so(e)?Re({},e):e:null}function Zt(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=e,f=t?Ml(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&yo(f),ref:t&&t.ref?r&&s?X(s)?s.concat(Lr(t)):[s,Lr(t)]:Lr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ot?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&ci(c,l.clone(c)),c}function xo(e=" ",t=0){return Vt(un,null,e,t)}function at(e){return e==null||typeof e=="boolean"?Vt(Jt):X(e)?Vt(ot,null,e.slice()):bo(e)?Pt(e):Vt(un,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function hi(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(X(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),hi(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!so(t)?t._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:Ye},r=32):(t=String(t),n&64?(r=16,t=[xo(t)]):r=8);e.children=t,e.shapeFlag|=r}function Ml(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=xr([t.class,n.class]));else if(i==="style")t.style=sn([t.style,n.style]);else if(en(i)){const s=t[i],o=n[i];o&&s!==o&&!(X(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=n[i])}return t}function tt(e,t,r,n=null){ct(e,t,7,[r,n])}const Cl=ro();let Ol=0;function El(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||Cl,s={uid:Ol++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ao(n,i),emitsOptions:go(n,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:n.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=gl.bind(null,s),e.ce&&e.ce(s),s}let De=null;const _l=()=>De||Ye;let Yr,Hn;{const e=nn(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Yr=t("__VUE_INSTANCE_SETTERS__",r=>De=r),Hn=t("__VUE_SSR_SETTERS__",r=>Tr=r)}const Or=e=>{const t=De;return Yr(e),e.scope.on(),()=>{e.scope.off(),Yr(t)}},Vi=()=>{De&&De.scope.off(),Yr(null)};function So(e){return e.vnode.shapeFlag&4}let Tr=!1;function Rl(e,t=!1,r=!1){t&&Hn(t);const{props:n,children:i}=e.vnode,s=So(e);rl(e,n,s,t),ol(e,i,r||t);const o=s?Il(e,t):void 0;return t&&Hn(!1),o}function Il(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$a);const{setup:n}=r;if(n){bt();const i=e.setupContext=n.length>1?Al(e):null,s=Or(e),o=Cr(n,e,0,[e.props,i]),a=xs(o);if(yt(),s(),(a||e.sp)&&!mr(e)&&Qs(e),a){if(o.then(Vi,Vi),t)return o.then(l=>{ji(e,l)}).catch(l=>{an(l,e,0)});e.asyncDep=o}else ji(e,o)}else wo(e)}function ji(e,t,r){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=ks(t)),wo(e)}function wo(e,t,r){const n=e.type;e.render||(e.render=n.render||lt);{const i=Or(e);bt();try{Ya(e)}finally{yt(),i()}}}const Ul={get(e,t){return Ee(e,"get",""),e[t]}};function Al(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Ul),slots:e.slots,emit:e.emit,expose:t}}function fn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ks(va(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in gr)return gr[r](e)},has(t,r){return r in t||r in gr}})):e.proxy}function Dl(e){return J(e)&&"__vccOpts"in e}const Wn=(e,t)=>wa(e,t,Tr),Fl="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $n;const Ni=typeof window<"u"&&window.trustedTypes;if(Ni)try{$n=Ni.createPolicy("vue",{createHTML:e=>e})}catch{}const Bo=$n?e=>$n.createHTML(e):e=>e,Gl="http://www.w3.org/2000/svg",Ll="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,ki=dt&&dt.createElement("template"),zl={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?dt.createElementNS(Gl,e):t==="mathml"?dt.createElementNS(Ll,e):r?dt.createElement(e,{is:r}):dt.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const o=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{ki.innerHTML=Bo(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const a=ki.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[o?o.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Vl=Symbol("_vtc");function jl(e,t,r){const n=e[Vl];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Qr=Symbol("_vod"),Po=Symbol("_vsh"),Nl={beforeMount(e,{value:t},{transition:r}){e[Qr]=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):or(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:n}){!t!=!r&&(n?t?(n.beforeEnter(e),or(e,!0),n.enter(e)):n.leave(e,()=>{or(e,!1)}):or(e,t))},beforeUnmount(e,{value:t}){or(e,t)}};function or(e,t){e.style.display=t?e[Qr]:"none",e[Po]=!t}const kl=Symbol(""),ql=/(^|;)\s*display\s*:/;function Hl(e,t,r){const n=e.style,i=Pe(r);let s=!1;if(r&&!i){if(t)if(Pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();r[a]==null&&zr(n,a,"")}else for(const o in t)r[o]==null&&zr(n,o,"");for(const o in r)o==="display"&&(s=!0),zr(n,o,r[o])}else if(i){if(t!==r){const o=n[kl];o&&(r+=";"+o),n.cssText=r,s=ql.test(r)}}else t&&e.removeAttribute("style");Qr in e&&(e[Qr]=s?n.display:"",e[Po]&&(n.display="none"))}const qi=/\s*!important$/;function zr(e,t,r){if(X(r))r.forEach(n=>zr(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=Wl(e,t);qi.test(r)?e.setProperty(_t(n),r.replace(qi,""),"important"):e[n]=r}}const Hi=["Webkit","Moz","ms"],On={};function Wl(e,t){const r=On[t];if(r)return r;let n=Mt(t);if(n!=="filter"&&n in e)return On[t]=n;n=Bs(n);for(let i=0;i<Hi.length;i++){const s=Hi[i]+n;if(s in e)return On[t]=s}return t}const Wi="http://www.w3.org/1999/xlink";function $i(e,t,r,n,i,s=Qo(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Wi,t.slice(6,t.length)):e.setAttributeNS(Wi,t,r):r==null||s&&!Ps(r)?e.removeAttribute(t):e.setAttribute(t,s?"":Et(r)?String(r):r)}function Yi(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?Bo(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(a!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let o=!1;if(r===""||r==null){const a=typeof e[t];a==="boolean"?r=Ps(r):r==null&&a==="string"?(r="",o=!0):a==="number"&&(r=0,o=!0)}try{e[t]=r}catch{}o&&e.removeAttribute(i||t)}function $l(e,t,r,n){e.addEventListener(t,r,n)}function Yl(e,t,r,n){e.removeEventListener(t,r,n)}const Qi=Symbol("_vei");function Ql(e,t,r,n,i=null){const s=e[Qi]||(e[Qi]={}),o=s[t];if(n&&o)o.value=n;else{const[a,l]=Xl(t);if(n){const f=s[t]=Zl(n,i);$l(e,a,f,l)}else o&&(Yl(e,a,o,l),s[t]=void 0)}}const Xi=/(?:Once|Passive|Capture)$/;function Xl(e){let t;if(Xi.test(e)){t={};let n;for(;n=e.match(Xi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let En=0;const Kl=Promise.resolve(),Jl=()=>En||(Kl.then(()=>En=0),En=Date.now());function Zl(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ct(ec(n,r.value),t,5,[n])};return r.value=e,r.attached=Jl(),r}function ec(e,t){if(X(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const Ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,tc=(e,t,r,n,i,s)=>{const o=i==="svg";t==="class"?jl(e,n,o):t==="style"?Hl(e,r,n):en(t)?Kn(t)||Ql(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rc(e,t,n,o))?(Yi(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&$i(e,t,n,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Pe(n))?Yi(e,Mt(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),$i(e,t,n,o))};function rc(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ki(t)&&J(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ki(t)&&Pe(r)?!1:t in e}const nc=["ctrl","shift","alt","meta"],ic={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nc.some(r=>e[`${r}Key`]&&!t.includes(r))},Ji=(e,t)=>{const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=ic[t[o]];if(a&&a(i,t))return}return e(i,...s)})},sc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zi=(e,t)=>{const r=e._withKeys||(e._withKeys={}),n=t.join(".");return r[n]||(r[n]=i=>{if(!("key"in i))return;const s=_t(i.key);if(t.some(o=>o===s||sc[o]===s))return e(i)})},oc=Re({patchProp:tc},zl);let es;function ac(){return es||(es=ll(oc))}const lc=(...e)=>{const t=ac().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=uc(n);if(!i)return;const s=t._component;!J(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=r(i,!1,cc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function cc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function uc(e){return Pe(e)?document.querySelector(e):e}const fc="/projects/webGPU-Basics-Collections/assets/expand-yilVOYUy.png";var je=typeof Float32Array<"u"?Float32Array:Array;function ur(){var e=new je(4);return je!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function Xr(e,t,r,n){var i=new je(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function Vr(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function hc(e,t,r){var n=t[0],i=t[1],s=t[2],o=t[3],a=r[0],l=r[1],f=r[2],c=r[3];return e[0]=n*a+s*l,e[1]=i*a+o*l,e[2]=n*f+s*c,e[3]=i*f+o*c,e}function di(){var e=new je(9);return je!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Yn(e,t,r,n,i,s,o,a,l){var f=new je(9);return f[0]=e,f[1]=t,f[2]=r,f[3]=n,f[4]=i,f[5]=s,f[6]=o,f[7]=a,f[8]=l,f}function ts(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e}function rs(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e}function Be(){var e=new je(3);return je!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function dc(e){var t=new je(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function _n(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}function q(e,t,r){var n=new je(3);return n[0]=e,n[1]=t,n[2]=r,n}function qt(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function pc(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function St(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function Ir(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Qn(e,t,r){var n=t[0],i=t[1],s=t[2];return e[0]=n*r[0]+i*r[3]+s*r[6],e[1]=n*r[1]+i*r[4]+s*r[7],e[2]=n*r[2]+i*r[5]+s*r[8],e}var Ht=pc;(function(){var e=Be();return function(t,r,n,i,s,o){var a,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,a=n;a<l;a+=r)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],s(e,e,o),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2];return t}})();function $(){var e=new je(2);return je!=Float32Array&&(e[0]=0,e[1]=0),e}function Kr(e){var t=new je(2);return t[0]=e[0],t[1]=e[1],t}function re(e,t){var r=new je(2);return r[0]=e,r[1]=t,r}function pt(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function mc(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function ht(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function gc(e){var t=e[0],r=e[1];return t*t+r*r}function We(e,t){return e[0]*t[0]+e[1]*t[1]}function vc(e,t,r,n){var i=t[0],s=t[1];return e[0]=i+n*(r[0]-i),e[1]=s+n*(r[1]-s),e}function Oe(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i,e[1]=r[1]*n+r[3]*i,e}var rt=mc;(function(){var e=$();return function(t,r,n,i,s,o){var a,l;for(r||(r=2),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,a=n;a<l;a+=r)e[0]=t[a],e[1]=t[a+1],s(e,e,o),t[a]=e[0],t[a+1]=e[1];return t}})();function Nt(e){const t=Math.cos(e),r=Math.sin(e);return Xr(t,r,-r,t)}function To(e,t,r){const n=Math.cos(e),i=Math.sin(e),s=Math.cos(t),o=Math.sin(t),a=Math.cos(r),l=Math.sin(r);return Yn(s*a,-s*l,o,i*o*a+n*l,-i*o*l+n*a,-i*s,-n*o*a+i*l,n*o*l+i*a,n*s)}function bc(e,t){const r=di();return r[0]=e[0]*t[0],r[1]=e[0]*t[1],r[2]=e[0]*t[2],r[3]=e[1]*t[0],r[4]=e[1]*t[1],r[5]=e[1]*t[2],r[6]=e[2]*t[0],r[7]=e[2]*t[1],r[8]=e[2]*t[2],r}function yc(e,t){let r=e[0],n=e[3]/e[0],i=e[6]/e[0],s=e[4]-n*n*r,o=(e[7]-i*n*r)/s,a=e[8]-(i*i*r+o*o*s),l=t[0],f=t[1]-n*l,c=t[2]-i*l-o*f,u=l/r,h=f/s,p=c/a;const d=q(0,0,0);return d[2]=p,d[1]=h-o*d[2],d[0]=u-n*d[1]-i*d[2],d}function oe(e=0,t=1){return e===void 0?(e=0,t=1):t===void 0&&(t=e,e=0),e+Math.random()*(t-e)}function xc(e,t,r,n){return q(oe(e,e+r),oe(t,t+n),oe(0,Math.PI*2))}function Sc(){const e=Math.floor(oe(0,256)),t=Math.floor(oe(0,256)),r=Math.floor(oe(0,256)),n=255;return new Uint8Array([e,t,r,n])}function Ur(e,t){return e[0]*t[1]-e[1]*t[0]}function ns(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function wc(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Bc(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return t>1e-5?[e[0]/t,e[1]/t,e[2]/t]:[0,0,0]}function Mo(e,t,r){const n=ns(t,e),i=ns(r,e);return Bc(wc(n,i))}function Pc(e){return e*(180/Math.PI)}function Tc(e){return e*(Math.PI/180)}function Dt({name:e="default",albedo:t=[1,1,1],roughness:r=.98,metalness:n=0,usePerlinRoughness:i=!1,usePerlinMetalness:s=!1,perlinFreq:o=2,useAlbedoTexture:a=!1,useMetalnessTexture:l=!1,useRoughnessTexture:f=!1,useNormalTexture:c=!1,textureIndex:u=-1}){return{name:e,albedo:t,roughness:r,usePerlinRoughness:i,metalness:n,usePerlinMetalness:s,perlinFreq:o,useAlbedoTexture:a,useMetalnessTexture:l,useRoughnessTexture:f,useNormalTexture:c,textureIndex:u}}function Co(){const t=new Float32Array(8);let r=0;const n=s=>{t[r++]=s.x,t[r++]=s.y};n({x:-.5,y:-.5}),n({x:.5,y:-.5}),n({x:-.5,y:.5}),n({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:t,indexData:i,numVertices:i.length}}function Mc({radius:e=1,subdivisions:t=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*3),a=new Uint8Array(o.buffer);let l=0,f=8;const c=v=>{o[l++]=v.x,o[l++]=v.y,l+=1,a[f++]=(v.r??0)*255,a[f++]=(v.g??0)*255,a[f++]=(v.b??0)*255,f+=9},u=[1,1,1],h=[.1,.1,.1];for(let v=0;v<=t;v++){const y=n+(v+0)*(i-n)/t,w=Math.cos(y),b=Math.sin(y);c({x:w*e,y:b*e,r:h[0],g:h[1],b:h[2]}),c({x:w*r,y:b*r,r:u[0],g:u[1],b:u[2]})}const p=new Uint16Array(t*6);let d=0;for(let v=0;v<t;++v){const y=v*2;p[d++]=y,p[d++]=y+1,p[d++]=y+2,p[d++]=y+2,p[d++]=y+1,p[d++]=y+3}return{vertexData:o,indexData:p,numVertices:p.length}}function Cc({radius:e=1,subdivisions:t=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*2);let a=0;const l=u=>{o[a++]=u.x,o[a++]=u.y};for(let u=0;u<=t;u++){const h=n+(u+0)*(i-n)/t,p=Math.cos(h),d=Math.sin(h);l({x:p*e,y:d*e}),l({x:p*r,y:d*r})}const f=new Uint16Array(t*6);let c=0;for(let u=0;u<t;++u){const h=u*2;f[c++]=h,f[c++]=h+1,f[c++]=h+2,f[c++]=h+2,f[c++]=h+1,f[c++]=h+3}return{vertexData:o,indexData:f,numVertices:f.length}}function Oc({radius:e=1,subdivisions:t=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=t*3*2,o=new Float32Array(s*2);let a=0;const l=(f,c)=>{o[a++]=f,o[a++]=c};for(let f=0;f<t;f++){const c=n+(f+0)*(i-n)/t,u=n+(f+1)*(i-n)/t,h=Math.cos(c),p=Math.sin(c),d=Math.cos(u),v=Math.sin(u);l(h*e,p*e),l(d*e,v*e),l(h*r,p*r),l(h*r,p*r),l(d*e,v*e),l(d*r,v*r)}return o}function Ec(){const e=[.73,.73,.73],t=[.65,.05,.05],r=[.12,.45,.15],n=[1,1,1],i=[],s=[],o=[],a=[],l=[],f=[];let c=0;function u(b,P,S,M,_=0){return i.push(b[0],b[1],b[2]),s.push(P[0],P[1],P[2]),o.push(S[0],S[1],S[2]),l.push(M[0],M[1]),a.push(_),c++}function h(b,P,S,M,_,x=!1,T=0){let O=Mo(b,P,S);x&&(O=[-O[0],-O[1],-O[2]]);const z=u(b,O,_,[0,0],T),j=u(P,O,_,[1,0],T),k=u(S,O,_,[1,1],T),N=u(M,O,_,[0,1],T);f.push(z,j,k),f.push(z,k,N)}function p(b,P,S,M=[0,0,0],_=0){const x=P[0]/2,T=P[1]/2,O=P[2]/2;let z=[b[0]-x,b[1]-T,b[2]-O],j=[b[0]+x,b[1]-T,b[2]-O],k=[b[0]+x,b[1]+T,b[2]-O],N=[b[0]-x,b[1]+T,b[2]-O],L=[b[0]-x,b[1]-T,b[2]+O],K=[b[0]+x,b[1]-T,b[2]+O],H=[b[0]+x,b[1]+T,b[2]+O],V=[b[0]-x,b[1]+T,b[2]+O];const D=new Float32Array(9),ae=Math.cos(M[0]),me=Math.sin(M[0]),Z=Math.cos(M[1]),te=Math.sin(M[1]),be=Math.cos(M[2]),Te=Math.sin(M[2]);D[0]=Z*be,D[1]=-Z*Te,D[2]=te,D[3]=me*te*be+ae*Te,D[4]=-me*te*Te+ae*be,D[5]=-me*Z,D[6]=-ae*te*be+me*Te,D[7]=ae*te*Te+me*be,D[8]=ae*Z;const ye=xe=>{const we=xe[0]-b[0],ge=xe[1]-b[1],Ne=xe[2]-b[2];return[D[0]*we+D[1]*ge+D[2]*Ne+b[0],D[3]*we+D[4]*ge+D[5]*Ne+b[1],D[6]*we+D[7]*ge+D[8]*Ne+b[2]]};z=ye(z),j=ye(j),k=ye(k),N=ye(N),L=ye(L),K=ye(K),H=ye(H),V=ye(V),h(L,K,H,V,S,!1,_),h(j,z,N,k,S,!1,_),h(z,L,V,N,S,!1,_),h(K,j,k,H,S,!1,_),h(N,V,H,k,S,!1,_),h(z,j,K,L,S,!1,_)}h([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],e,!1,.98),h([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],e,!1,.98);const v=548.8-1;h([343,v,227],[343,v,332],[213,v,332],[213,v,227],n),h([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],e),h([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],r),h([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],t);let y=c;p([278,224.4,279.5],[120,120,120],e,[4,Math.PI/9,7],1);let w=c-y;return{vertexData:new Float32Array(i),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(s),colorData:new Float32Array(o),reflectanceData:new Float32Array(a),uvData:new Float32Array(l),additionalInfo:{cubeVertexStart:y,cubeVertexCount:w,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(i.slice(y*3,(y+w)*3)),cubeNormalsInfo:new Float32Array(s.slice(y*3,(y+w)*3))}}}function Rn(e,t){let r=4;const n=new Float32Array(r*3),i=new Float32Array(r*3),s=new Float32Array(r*3),o=new Float32Array(r*2),a=new Uint16Array([0,1,2,0,2,3]),l=e.translation,f=e.scale[0]/2,c=e.scale[1]/2,u=e.rotation,h=[q(-f,-c,0),q(f,-c,0),q(f,c,0),q(-f,c,0)],p=To(u[0],u[1],u[2]);for(let w=0;w<h.length;++w)Qn(h[w],h[w],p),qt(h[w],h[w],l);let d=0;const v=(w,b)=>{n[d]=w[0],n[d+1]=w[1],n[d+2]=w[2],i[d]=b[0],i[d+1]=b[1],i[d+2]=b[2],d+=3};v(h[0],t),v(h[1],t),v(h[2],t),v(h[3],t);const y=q(0,0,1);Qn(y,y,p);for(let w=0;w<r;++w)s[w*3+0]=y[0],s[w*3+1]=y[1],s[w*3+2]=y[2];return o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=1,o[5]=1,o[6]=0,o[7]=1,{vertexData:n,indexData:a,colorData:i,normalData:s,uvData:o,numVertices:a.length,transform:e}}function In(e,t,r,n=12,i=12){const s=[],o=[],a=[],l=[],f=[],c=(u,h,p,d)=>{s.push(u[0],u[1],u[2]),o.push(h[0],h[1],h[2]),a.push(p[0],p[1],p[2]),l.push(d[0],d[1])};for(let u=0;u<=n;u++){const h=u*Math.PI/n,p=Math.sin(h),d=Math.cos(h);for(let v=0;v<=i;v++){const y=v*2*Math.PI/i,w=Math.sin(y),P=Math.cos(y)*p,S=d,M=w*p,_=1-v/i,x=1-u/n,T=[e[0]+t*P,e[1]+t*S,e[2]+t*M];c(T,[P,S,M],r,[_,x])}}for(let u=0;u<n;u++)for(let h=0;h<i;h++){const p=u*(i+1)+h,d=p+i+1;f.push(p,p+1,d),f.push(d,p+1,d+1)}return{vertexData:new Float32Array(s),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(o),colorData:new Float32Array(a),uvData:new Float32Array(l),transform:{translation:q(e[0],e[1],e[2]),rotation:q(0,0,0),scale:q(t,t,t)}}}function _c(e,t=8){e.length>0?console.log(`Using custom sphere materials for Cornell Box: ${e.map(b=>b.name).join(", ")}`):console.log("Using default sphere materials for Cornell Box.");const r={whiteWall:Dt({albedo:[.73,.73,.73],name:"whiteWall"}),redWall:Dt({albedo:[.65,.05,.05],name:"redWall"}),greenWall:Dt({albedo:[.12,.45,.15],name:"greenWall"}),light:Dt({albedo:[1,1,1],roughness:0,name:"light"}),sphereOne:e.find(b=>b.name==="sphereOne")||Dt({albedo:[.12,.45,.15],name:"sphereOne",textureIndex:0}),sphereTwo:e.find(b=>b.name==="sphereTwo")||Dt({albedo:[.05,.05,.65],roughness:.5,metalness:.5,name:"sphereTwo",textureIndex:1}),sphereThree:e.find(b=>b.name==="sphereThree")||Dt({albedo:[.65,.05,.05],roughness:.01,metalness:.98,name:"sphereThree",textureIndex:2})},n={};function i(b,P,S,M){M in n||(n[M]={vertexData:[],normalData:[],uvData:[],indexData:[],numVertices:0});const _=n[M];return _.vertexData.push(b[0],b[1],b[2]),_.normalData.push(P[0],P[1],P[2]),_.uvData.push(S[0],S[1]),_.numVertices++}function s(b,P,S,M,_=!1,x){let T=Mo(b,P,S);_&&(T=[-T[0],-T[1],-T[2]]);const O=i(b,T,[0,0],x),z=i(P,T,[1,0],x),j=i(S,T,[1,1],x),k=i(M,T,[0,1],x);n[x].indexData.push(O,z,j),n[x].indexData.push(O,j,k)}function o(b,P,S=12,M=12,_){const x=n[_]?.numVertices||0;for(let T=0;T<=S;T++){const O=T*Math.PI/S,z=Math.sin(O),j=Math.cos(O);for(let k=0;k<=M;k++){const N=k*2*Math.PI/M,L=Math.sin(N),H=Math.cos(N)*z,V=j,D=L*z,ae=1-k/M,me=1-T/S,Z=[b[0]+P*H,b[1]+P*V,b[2]+P*D];i(Z,[H,V,D],[ae,me],_)}}for(let T=0;T<S;T++)for(let O=0;O<M;O++){const z=x+T*(M+1)+O,j=z+M+1;n[_].indexData.push(z,z+1,j),n[_].indexData.push(j,z+1,j+1)}}s([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],!1,"whiteWall"),s([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],!1,"whiteWall");const l=548.8-1;s([343,l,227],[343,l,332],[213,l,332],[213,l,227],!1,"light"),s([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],!1,"whiteWall"),s([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],!1,"greenWall"),s([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],!1,"redWall");let f=[278,224.4,279.5],c=90,u=120,h=[q(0,1,0),q(Math.sqrt(3)/2,-.5,0),q(-Math.sqrt(3)/2,-.5,0)];for(let b=0;b<3;++b){let P=h[b],S=[f[0]+P[0]*u,f[1]+P[1]*u,f[2]+P[2]*u];o(S,c,t,t,b===0?"sphereOne":b===1?"sphereThree":"sphereTwo")}const p=[],d=[],v=[],y=[];let w=0;for(const b in n){b==="sphereOne"?(v.push(w),y.push({translation:q(f[0]+h[0][0]*u,f[1]+h[0][1]*u,f[2]+h[0][2]*u),rotation:q(0,0,0),scale:q(c,c,c)})):b==="sphereThree"?(v.push(w),y.push({translation:q(f[0]+h[1][0]*u,f[1]+h[1][1]*u,f[2]+h[1][2]*u),rotation:q(0,0,0),scale:q(c,c,c)})):b==="sphereTwo"&&(v.push(w),y.push({translation:q(f[0]+h[2][0]*u,f[1]+h[2][1]*u,f[2]+h[2][2]*u),rotation:q(0,0,0),scale:q(c,c,c)}));const P=n[b];p.push({vertexData:new Float32Array(P.vertexData),indexData:new Uint16Array(P.indexData),numVertices:P.indexData.length,normalData:new Float32Array(P.normalData),uvData:new Float32Array(P.uvData)}),d.push(r[b]),w+=1}return{materials:d,pmTopologies:p,additionalInfo:{sphereMaterialIndices:v,sphereTransforms:y,sphereMaterials:[r.sphereOne,r.sphereThree,r.sphereTwo]}}}function hn(){return document.getElementById("info")}function tr(){return document.getElementById("utils")}function Oo(){tr()}function dn(){const e=tr();if(e)for(;e.firstChild;)e.removeChild(e.firstChild);Oo()}function Rc(e,t,r,n){const i=document.createElement("div");i.style.cssText=`
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
    `,i.appendChild(s);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const a=document.createElement("label");a.textContent="Albedo:",o.appendChild(a);const l=V=>Math.round(V*255).toString(16).padStart(2,"0"),f=`#${l(t.albedo[0])}${l(t.albedo[1])}${l(t.albedo[2])}`,c=document.createElement("input");c.type="color",c.value=f,c.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,c.tabIndex=-1,o.appendChild(c);const u=document.createElement("span");u.textContent=f.toUpperCase(),u.style.cssText="font-family: monospace; color: #aaa;",o.appendChild(u),c.addEventListener("input",()=>{u.textContent=c.value.toUpperCase();const V=parseInt(c.value.slice(1,3),16)/255,D=parseInt(c.value.slice(3,5),16)/255,ae=parseInt(c.value.slice(5,7),16)/255;t.albedo=[V,D,ae],r(t)}),i.appendChild(o);const h=document.createElement("label");h.textContent="Albedo texture",o.appendChild(h);const p=document.createElement("input");p.type="checkbox",p.checked=t.useAlbedoTexture,p.tabIndex=-1,o.appendChild(p),p.addEventListener("change",()=>{t.useAlbedoTexture=p.checked,r(t)});const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const v=document.createElement("label");v.textContent=`Metalness: ${t.metalness.toFixed(2)}`,d.appendChild(v);const y=document.createElement("input");y.type="range",y.min="0",y.max="1",y.step="0.01",y.value=t.metalness.toString(),y.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,y.tabIndex=-1,d.appendChild(y),i.appendChild(d),y.addEventListener("input",()=>{const V=parseFloat(y.value);t.metalness=isNaN(V)?0:V,v.textContent=`Metalness: ${t.metalness.toFixed(2)}`,r(t)});const w=document.createElement("label");w.textContent="Perlin noise",d.appendChild(w);const b=document.createElement("input");b.type="checkbox",b.checked=t.usePerlinMetalness,b.tabIndex=-1,d.appendChild(b),b.addEventListener("change",()=>{t.usePerlinMetalness=b.checked,r(t)});const P=document.createElement("label");P.textContent="Metalness texture",d.appendChild(P);const S=document.createElement("input");S.type="checkbox",S.checked=t.useMetalnessTexture,S.tabIndex=-1,d.appendChild(S),S.addEventListener("change",()=>{t.useMetalnessTexture=S.checked,r(t)});const M=document.createElement("div");M.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const _=document.createElement("label");_.textContent=`Roughness: ${t.roughness.toFixed(2)}`,M.appendChild(_);const x=document.createElement("input");x.type="range",x.min="0",x.max="1",x.step="0.01",x.value=t.roughness.toString(),x.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,x.tabIndex=-1,M.appendChild(x),i.appendChild(M),x.addEventListener("input",()=>{const V=parseFloat(x.value);t.roughness=isNaN(V)?0:V,_.textContent=`Roughness: ${t.roughness.toFixed(2)}`,r(t)});const T=document.createElement("label");T.textContent="Perlin noise",M.appendChild(T);const O=document.createElement("input");O.type="checkbox",O.checked=t.usePerlinRoughness,O.tabIndex=-1,M.appendChild(O),O.addEventListener("change",()=>{t.usePerlinRoughness=O.checked,r(t)});const z=document.createElement("label");z.textContent="Roughness texture",M.appendChild(z);const j=document.createElement("input");j.type="checkbox",j.checked=t.useRoughnessTexture,j.tabIndex=-1,M.appendChild(j),j.addEventListener("change",()=>{t.useRoughnessTexture=j.checked,r(t)});const k=document.createElement("div");k.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const N=document.createElement("label");N.textContent=`Perlin Frequency: ${t.perlinFreq.toFixed(2)}`,k.appendChild(N);const L=document.createElement("input");L.type="range",L.min="0.1",L.max="10",L.step="0.1",L.value=t.perlinFreq.toString(),L.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,L.tabIndex=-1,k.appendChild(L),i.appendChild(k),L.addEventListener("input",()=>{const V=parseFloat(L.value);t.perlinFreq=isNaN(V)?.1:V,N.textContent=`Perlin Frequency: ${t.perlinFreq.toFixed(2)}`,r(t)});const K=document.createElement("div");K.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const H=document.createElement("button");return H.textContent="Cancel",H.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,H.tabIndex=-1,H.addEventListener("click",()=>{n()}),K.appendChild(H),i.appendChild(K),i}function Ic(e,t,r,n,i){const s=document.createElement("div");s.style.cssText=`
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
    `;const o=document.createElement("div");o.textContent=r,o.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,s.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const l=document.createElement("label");l.textContent="Enabled:",a.appendChild(l);const f=document.createElement("input");f.type="checkbox",f.checked=t.enabled,f.tabIndex=-1,a.appendChild(f),f.addEventListener("change",()=>{t.enabled=f.checked,n(t)}),s.appendChild(a);const c=document.createElement("div");c.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const u=document.createElement("label");u.textContent="Light position:",c.appendChild(u),["X","Y","Z"].forEach((k,N)=>{const L=document.createElement("input");L.type="number",L.value=t.position[N].toFixed(2),L.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,L.tabIndex=-1,c.appendChild(L),L.addEventListener("input",()=>{const K=parseFloat(L.value);t.position[N]=isNaN(K)?0:K,n(t)}),L.placeholder=k}),s.appendChild(c);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Light direction:",h.appendChild(p),["X","Y","Z"].forEach((k,N)=>{const L=document.createElement("input");L.type="number",L.value=t.direction[N].toFixed(2),L.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,L.tabIndex=-1,h.appendChild(L),L.addEventListener("input",()=>{const K=parseFloat(L.value);t.direction[N]=isNaN(K)?0:K,n(t)}),L.placeholder=k}),s.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const v=document.createElement("label");v.textContent="Light intensity:",d.appendChild(v);const y=document.createElement("input");y.type="number",y.value=t.intensity.toFixed(2),y.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,y.tabIndex=-1,d.appendChild(y),y.addEventListener("input",()=>{const k=parseFloat(y.value);t.intensity=isNaN(k)?0:k,n(t)}),s.appendChild(d);const w=document.createElement("div");w.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const b=document.createElement("label");b.textContent="Cone angle:",w.appendChild(b);const P=document.createElement("input");P.type="range",P.value=Pc(t.coneAngle).toFixed(2),P.min="0",P.max="180",P.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,P.tabIndex=-1,w.appendChild(P),P.addEventListener("input",()=>{const k=parseFloat(P.value),N=Tc(k);t.coneAngle=isNaN(N)?0:N,n(t)}),s.appendChild(w);const S=document.createElement("div");S.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const M=document.createElement("label");M.textContent="Light color:",S.appendChild(M);const _=k=>Math.round(k*255).toString(16).padStart(2,"0"),x=`#${_(t.color[0])}${_(t.color[1])}${_(t.color[2])}`,T=document.createElement("input");T.type="color",T.value=x,T.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,T.tabIndex=-1,S.appendChild(T);const O=document.createElement("span");O.textContent=x.toUpperCase(),O.style.cssText="font-family: monospace; color: #aaa;",S.appendChild(O),T.addEventListener("input",()=>{O.textContent=T.value.toUpperCase(),t.color=[parseInt(T.value.slice(1,3),16)/255,parseInt(T.value.slice(3,5),16)/255,parseInt(T.value.slice(5,7),16)/255],n(t)}),s.appendChild(S);const z=document.createElement("div");z.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const j=document.createElement("button");return j.textContent="Cancel",j.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,j.tabIndex=-1,j.addEventListener("click",()=>{i()}),z.appendChild(j),s.appendChild(z),s}const Uc=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,Ac=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function Dc(e){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=e.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:r,format:i,alphaMode:"premultiplied"});const s=Fc(r),o=Gc(r,s,s,i),a={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(f=>{for(const c of f){const u=c.target,h=c.contentBoxSize[0].inlineSize,p=c.contentBoxSize[0].blockSize;u.width=Math.max(1,Math.min(h,r.limits.maxTextureDimension2D)),u.height=Math.max(1,Math.min(p,r.limits.maxTextureDimension2D))}Lc(r,n,o,a)}).observe(e),null}function Fc(e){return e.createShaderModule({label:"hardcoded red triangle",code:`${Uc}
${Ac}`})}function Gc(e,t,r,n){return e.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function Lc(e,t,r,n){n.colorAttachments[0].view=t.getCurrentTexture().createView();const i=e.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(n);s.setPipeline(r),s.draw(3),s.end();const o=i.finish();e.queue.submit([o])}const zc=`// We declare a storage variable to read from and write to\r
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
// }`;async function Vc(e){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=jc(r),i=Nc(r,n),s=new Float32Array([1,3,5]),o=kc(r,s),a=qc(r,s.byteLength),l=Hc(r,i.getBindGroupLayout(0),o),f=r.createCommandEncoder({label:"command encoder"}),c=f.beginComputePass({label:"basic compute pass"});c.setPipeline(i),c.setBindGroup(0,l),c.dispatchWorkgroups(s.length),c.end(),f.copyBufferToBuffer(o,0,a,0,a.size);const u=f.finish();r.queue.submit([u]),console.log("We send this Input: ",s);const h=performance.now();await a.mapAsync(GPUMapMode.READ);const p=new Float32Array(a.getMappedRange());return console.log("Computation took: ",performance.now()-h,"ms"),console.log("We got this Result: ",p),a.unmap(),null}function jc(e){return e.createShaderModule({label:"basic compute module",code:`${zc}`})}function Nc(e,t){return e.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:t,entryPoint:"computeSomething"}})}function kc(e,t){const r=e.createBuffer({label:"work buffer",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(r,0,t),r}function qc(e,t){return e.createBuffer({label:"result buffer",size:t,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function Hc(e,t,r){return e.createBindGroup({label:"basic bind group",layout:t,entries:[{binding:0,resource:{buffer:r}}]})}const Wc=`// ============================== //\r
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
}`,$c=`// ============================== //\r
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
}`;async function Rt(e=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const t=await navigator.gpu.requestAdapter();if(!t)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const r=i=>{const s=t.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};e=e.filter(i=>r(i));const n=await t.requestDevice({requiredFeatures:e});return n.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),n}function Ot(e,t,r,n="shader module"){const i=e.createShaderModule({label:`${n} - vertex`,code:t}),s=e.createShaderModule({label:`${n} - fragment`,code:r});return{vertex:i,fragment:s}}function Yc(e,t){if(!e)return null;const r=e.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:t}),n=e.createBuffer({label:"timestamp-query-resolve-buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=e.createBuffer({label:"timestamp-query-result-buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:r,resolveBuffer:n,resultBuffer:i}}function Qc(e,t){return!e||!t?!1:(t.resolveQuerySet(e.querySet,0,e.querySet.count,e.resolveBuffer,0),e.resultBuffer.mapState==="unmapped"&&t.copyBufferToBuffer(e.resolveBuffer,0,e.resultBuffer,0,e.resultBuffer.size),!0)}function wt(e){const t=e.reduce((i,s)=>i+s.length,0),r=new Float32Array(t);let n=0;for(const i of e)r.set(i,n),n+=i.length;return r}function is(e,t){const r=e.reduce((o,a)=>o+a.length,0),n=new Uint16Array(r);let i=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];for(let l=0;l<a.length;l++)n[i+l]=a[l]+s;i+=a.length,s+=t[o]}return n}const Xc=0,Kc=4,Jc=0,Zc=100;async function eu(e){const t=await Rt();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const r=e.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:t,format:n,alphaMode:"premultiplied"});const i=ss(t,"hardcoded triangle",Wc),s=ss(t,"hardcoded triangle",$c),o=tu(t,i,s,n),a=32,l=8,f=[];for(let h=0;h<Zc;h++){const p=os(t,a);{const b=new Float32Array(a/4);b.set([oe(.1),oe(.1),oe(.1),1],Xc),b.set([oe(-.9,.9),oe(-.9,.9)],Kc),t.queue.writeBuffer(p,0,b)}const d=new Float32Array(l/4),v=os(t,l),w={uniformBindGroup:nu(t,o.getBindGroupLayout(0),p,v),uniformBuffer:v,uniformValues:d,scale:oe(.2,.5)};f.push(w)}const c={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(h=>{for(const p of h){const d=p.target,v=p.contentBoxSize[0].inlineSize,y=p.contentBoxSize[0].blockSize;d.width=Math.max(1,Math.min(v,t.limits.maxTextureDimension2D)),d.height=Math.max(1,Math.min(y,t.limits.maxTextureDimension2D))}ru(t,e,r,o,c,f)}).observe(e),null}function ss(e,t,r){return e.createShaderModule({label:t,code:r})}function tu(e,t,r,n){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function ru(e,t,r,n,i,s){i.colorAttachments[0].view=r.getCurrentTexture().createView();const o=e.createCommandEncoder({label:"pass encoder"}),a=o.beginRenderPass(i);a.setPipeline(n);const l=t.width/t.height;for(const c of s)c.uniformValues.set([c.scale/l,c.scale],Jc),e.queue.writeBuffer(c.uniformBuffer,0,c.uniformValues),a.setBindGroup(0,c.uniformBindGroup),a.draw(3);a.end();const f=o.finish();e.queue.submit([f])}function os(e,t){return e.createBuffer({label:"uniform buffer",size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function nu(e,t,r,n){return e.createBindGroup({label:"uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}}]})}const iu=`// ============================== //\r
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
}`,su=`// ============================== //\r
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
}`,ou=0,au=4,jr=50;async function lu(e){const t=await Rt();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const r=e.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:t,format:n,alphaMode:"premultiplied"});const i=as(t,"hardcoded triangle",iu),s=as(t,"hardcoded triangle",su),o=cu(t,i,s,n),a=32,l=8,f=a*jr,c=l*jr,u=Oc({radius:1,innerRadius:.5}),h=u.byteLength,p=u.length/2,d=Un(t,f),v=Un(t,c),y=Un(t,h);t.queue.writeBuffer(y,0,u);const w=[];{const _=new Float32Array(f/4);for(let x=0;x<jr;x++){const T=x*(a/4);_.set([oe(.1),oe(.1),oe(.1),1],T+ou),_.set([oe(-.9,.9),oe(-.9,.9)],T+au);const O={scale:oe(.1,.4)};w.push(O)}t.queue.writeBuffer(d,0,_)}const b=new Float32Array(c/4),P=fu(t,o.getBindGroupLayout(0),d,v,y),S={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(_=>{for(const x of _){const T=x.target,O=x.contentBoxSize[0].inlineSize,z=x.contentBoxSize[0].blockSize;T.width=Math.max(1,Math.min(O,t.limits.maxTextureDimension2D)),T.height=Math.max(1,Math.min(z,t.limits.maxTextureDimension2D))}uu(t,e,r,o,S,w,P,b,v,p)}).observe(e),null}function as(e,t,r){return e.createShaderModule({label:t,code:r})}function cu(e,t,r,n){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function uu(e,t,r,n,i,s,o,a,l,f){i.colorAttachments[0].view=r.getCurrentTexture().createView();const c=e.createCommandEncoder({label:"pass encoder"}),u=c.beginRenderPass(i);u.setPipeline(n);const h=t.width/t.height;s.forEach((d,v)=>{const y=2*v;a.set([d.scale/h,d.scale],y)}),e.queue.writeBuffer(l,0,a),u.setBindGroup(0,o),u.draw(f,jr),u.end();const p=c.finish();e.queue.submit([p])}function Un(e,t){return e.createBuffer({label:"storage buffer",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function fu(e,t,r,n,i){return e.createBindGroup({label:"storage bind group",layout:t,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}},{binding:2,resource:{buffer:i}}]})}const hu=`// ============================== //\r
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
}`,du=`// ============================== //\r
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
}`,pu=0,mu=1,Nr=50;async function gu(e){const t=await Rt();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const r=e.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:t,format:n,alphaMode:"premultiplied"});const i=ls(t,"hardcoded triangle",hu),s=ls(t,"hardcoded triangle",du),o=vu(t,i,s,n),a=12,l=8,f=a*Nr,c=l*Nr,u=Mc({radius:1,innerRadius:.5}),h=u.vertexData.byteLength,p=u.numVertices,d=An(t,f),v=An(t,c),y=An(t,h),w=yu(t,u.indexData.byteLength);t.queue.writeBuffer(y,0,u.vertexData),t.queue.writeBuffer(w,0,u.indexData);const b=[];{const _=new Uint8Array(f),x=new Float32Array(_.buffer);for(let T=0;T<Nr;T++){const O=T*a,z=T*(a/4);_.set([Math.round(oe(.1)*255),Math.round(oe(.1)*255),Math.round(oe(.1)*255),255],O+pu),x.set([oe(-.9,.9),oe(-.9,.9)],z+mu);const j={scale:oe(.1,.4)};b.push(j)}t.queue.writeBuffer(d,0,x)}const P=new Float32Array(c/4),S={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(_=>{for(const x of _){const T=x.target,O=x.contentBoxSize[0].inlineSize,z=x.contentBoxSize[0].blockSize;T.width=Math.max(1,Math.min(O,t.limits.maxTextureDimension2D)),T.height=Math.max(1,Math.min(z,t.limits.maxTextureDimension2D))}bu(t,e,r,o,S,b,d,P,v,p,y,w)}).observe(e),null}function ls(e,t,r){return e.createShaderModule({label:t,code:r})}function vu(e,t,r,n){return e.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function bu(e,t,r,n,i,s,o,a,l,f,c,u){i.colorAttachments[0].view=r.getCurrentTexture().createView();const h=e.createCommandEncoder({label:"pass encoder"}),p=h.beginRenderPass(i);p.setPipeline(n),p.setVertexBuffer(0,c),p.setVertexBuffer(1,o),p.setVertexBuffer(2,l),p.setIndexBuffer(u,"uint16");const d=t.width/t.height;s.forEach((y,w)=>{const b=2*w;a.set([y.scale/d,y.scale],b)}),e.queue.writeBuffer(l,0,a),p.drawIndexed(f,Nr),p.end();const v=h.finish();e.queue.submit([v])}function An(e,t){return e.createBuffer({label:"vertex buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function yu(e,t){return e.createBuffer({label:"index buffer",size:t,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const xu=`// ============================== //\r
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
}`,Su=`// ============================== //\r
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
}`;let Ce=1e-6;const wu=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);wu.get(Float32Array);let pn=Float32Array;function Xe(e,t,r){const n=new pn(3);return e!==void 0&&(n[0]=e,t!==void 0&&(n[1]=t,r!==void 0&&(n[2]=r))),n}function pi(e,t,r){return r=r||new pn(3),r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r}function er(e,t,r){r=r||new pn(3);const n=e[2]*t[0]-e[0]*t[2],i=e[0]*t[1]-e[1]*t[0];return r[0]=e[1]*t[2]-e[2]*t[1],r[1]=n,r[2]=i,r}function vt(e,t){t=t||new pn(3);const r=e[0],n=e[1],i=e[2],s=Math.sqrt(r*r+n*n+i*i);return s>1e-5?(t[0]=r/s,t[1]=n/s,t[2]=i/s):(t[0]=0,t[1]=0,t[2]=0),t}let ce=Float32Array;function Bu(e){const t=ce;return ce=e,t}function Pu(e,t,r,n,i,s,o,a,l,f,c,u,h,p,d,v){const y=new ce(16);return e!==void 0&&(y[0]=e,t!==void 0&&(y[1]=t,r!==void 0&&(y[2]=r,n!==void 0&&(y[3]=n,i!==void 0&&(y[4]=i,s!==void 0&&(y[5]=s,o!==void 0&&(y[6]=o,a!==void 0&&(y[7]=a,l!==void 0&&(y[8]=l,f!==void 0&&(y[9]=f,c!==void 0&&(y[10]=c,u!==void 0&&(y[11]=u,h!==void 0&&(y[12]=h,p!==void 0&&(y[13]=p,d!==void 0&&(y[14]=d,v!==void 0&&(y[15]=v)))))))))))))))),y}function Tu(e,t){return t=t||new ce(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=0,t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Mu(e,t){t=t||new ce(16);const r=e[0],n=e[1],i=e[2],s=e[3],o=r+r,a=n+n,l=i+i,f=r*o,c=n*o,u=n*a,h=i*o,p=i*a,d=i*l,v=s*o,y=s*a,w=s*l;return t[0]=1-u-d,t[1]=c+w,t[2]=h-y,t[3]=0,t[4]=c-w,t[5]=1-f-d,t[6]=p+v,t[7]=0,t[8]=h+y,t[9]=p-v,t[10]=1-f-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Cu(e,t){return t=t||new ce(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function mi(e,t){return t=t||new ce(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}const Ou=mi;function Eu(e,t){return Math.abs(e[0]-t[0])<Ce&&Math.abs(e[1]-t[1])<Ce&&Math.abs(e[2]-t[2])<Ce&&Math.abs(e[3]-t[3])<Ce&&Math.abs(e[4]-t[4])<Ce&&Math.abs(e[5]-t[5])<Ce&&Math.abs(e[6]-t[6])<Ce&&Math.abs(e[7]-t[7])<Ce&&Math.abs(e[8]-t[8])<Ce&&Math.abs(e[9]-t[9])<Ce&&Math.abs(e[10]-t[10])<Ce&&Math.abs(e[11]-t[11])<Ce&&Math.abs(e[12]-t[12])<Ce&&Math.abs(e[13]-t[13])<Ce&&Math.abs(e[14]-t[14])<Ce&&Math.abs(e[15]-t[15])<Ce}function _u(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Eo(e){return e=e||new ce(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ru(e,t){if(t=t||new ce(16),t===e){let b;return b=e[1],e[1]=e[4],e[4]=b,b=e[2],e[2]=e[8],e[8]=b,b=e[3],e[3]=e[12],e[12]=b,b=e[6],e[6]=e[9],e[9]=b,b=e[7],e[7]=e[13],e[13]=b,b=e[11],e[11]=e[14],e[14]=b,t}const r=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],c=e[8],u=e[9],h=e[10],p=e[11],d=e[12],v=e[13],y=e[14],w=e[15];return t[0]=r,t[1]=o,t[2]=c,t[3]=d,t[4]=n,t[5]=a,t[6]=u,t[7]=v,t[8]=i,t[9]=l,t[10]=h,t[11]=y,t[12]=s,t[13]=f,t[14]=p,t[15]=w,t}function _o(e,t){t=t||new ce(16);const r=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],c=e[8],u=e[9],h=e[10],p=e[11],d=e[12],v=e[13],y=e[14],w=e[15],b=h*w,P=y*p,S=l*w,M=y*f,_=l*p,x=h*f,T=i*w,O=y*s,z=i*p,j=h*s,k=i*f,N=l*s,L=c*v,K=d*u,H=o*v,V=d*a,D=o*u,ae=c*a,me=r*v,Z=d*n,te=r*u,be=c*n,Te=r*a,ye=o*n,xe=b*a+M*u+_*v-(P*a+S*u+x*v),we=P*n+T*u+j*v-(b*n+O*u+z*v),ge=S*n+O*a+k*v-(M*n+T*a+N*v),Ne=x*n+z*a+N*u-(_*n+j*a+k*u),ue=1/(r*xe+o*we+c*ge+d*Ne);return t[0]=ue*xe,t[1]=ue*we,t[2]=ue*ge,t[3]=ue*Ne,t[4]=ue*(P*o+S*c+x*d-(b*o+M*c+_*d)),t[5]=ue*(b*r+O*c+z*d-(P*r+T*c+j*d)),t[6]=ue*(M*r+T*o+N*d-(S*r+O*o+k*d)),t[7]=ue*(_*r+j*o+k*c-(x*r+z*o+N*c)),t[8]=ue*(L*f+V*p+D*w-(K*f+H*p+ae*w)),t[9]=ue*(K*s+me*p+be*w-(L*s+Z*p+te*w)),t[10]=ue*(H*s+Z*f+Te*w-(V*s+me*f+ye*w)),t[11]=ue*(ae*s+te*f+ye*p-(D*s+be*f+Te*p)),t[12]=ue*(H*h+ae*y+K*l-(D*y+L*l+V*h)),t[13]=ue*(te*y+L*i+Z*h-(me*h+be*y+K*i)),t[14]=ue*(me*l+ye*y+V*i-(Te*y+H*i+Z*l)),t[15]=ue*(Te*h+D*i+be*l-(te*l+ye*h+ae*i)),t}function Iu(e){const t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],a=e[6],l=e[7],f=e[8],c=e[9],u=e[10],h=e[11],p=e[12],d=e[13],v=e[14],y=e[15],w=u*y,b=v*h,P=a*y,S=v*l,M=a*h,_=u*l,x=n*y,T=v*i,O=n*h,z=u*i,j=n*l,k=a*i,N=w*o+S*c+M*d-(b*o+P*c+_*d),L=b*r+x*c+z*d-(w*r+T*c+O*d),K=P*r+T*o+j*d-(S*r+x*o+k*d),H=_*r+O*o+k*c-(M*r+z*o+j*c);return t*N+s*L+f*K+p*H}const Uu=_o;function Ro(e,t,r){r=r||new ce(16);const n=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],f=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],v=e[12],y=e[13],w=e[14],b=e[15],P=t[0],S=t[1],M=t[2],_=t[3],x=t[4],T=t[5],O=t[6],z=t[7],j=t[8],k=t[9],N=t[10],L=t[11],K=t[12],H=t[13],V=t[14],D=t[15];return r[0]=n*P+a*S+u*M+v*_,r[1]=i*P+l*S+h*M+y*_,r[2]=s*P+f*S+p*M+w*_,r[3]=o*P+c*S+d*M+b*_,r[4]=n*x+a*T+u*O+v*z,r[5]=i*x+l*T+h*O+y*z,r[6]=s*x+f*T+p*O+w*z,r[7]=o*x+c*T+d*O+b*z,r[8]=n*j+a*k+u*N+v*L,r[9]=i*j+l*k+h*N+y*L,r[10]=s*j+f*k+p*N+w*L,r[11]=o*j+c*k+d*N+b*L,r[12]=n*K+a*H+u*V+v*D,r[13]=i*K+l*H+h*V+y*D,r[14]=s*K+f*H+p*V+w*D,r[15]=o*K+c*H+d*V+b*D,r}const Au=Ro;function Du(e,t,r){return r=r||Eo(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function Fu(e,t){return t=t||Xe(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Gu(e,t,r){r=r||Xe();const n=t*4;return r[0]=e[n+0],r[1]=e[n+1],r[2]=e[n+2],r}function Lu(e,t,r,n){n!==e&&(n=mi(e,n));const i=r*4;return n[i+0]=t[0],n[i+1]=t[1],n[i+2]=t[2],n}function zu(e,t){t=t||Xe();const r=e[0],n=e[1],i=e[2],s=e[4],o=e[5],a=e[6],l=e[8],f=e[9],c=e[10];return t[0]=Math.sqrt(r*r+n*n+i*i),t[1]=Math.sqrt(s*s+o*o+a*a),t[2]=Math.sqrt(l*l+f*f+c*c),t}function Vu(e,t,r,n,i){i=i||new ce(16);const s=Math.tan(Math.PI*.5-.5*e);if(i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,n===1/0)i[10]=-1,i[14]=-r;else{const o=1/(r-n);i[10]=n*o,i[14]=n*r*o}return i}function ju(e,t,r,n,i,s,o){return o=o||new ce(16),o[0]=2/(t-e),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(n-r),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(i-s),o[11]=0,o[12]=(t+e)/(e-t),o[13]=(n+r)/(r-n),o[14]=i/(i-s),o[15]=1,o}function Nu(e,t,r,n,i,s,o){o=o||new ce(16);const a=t-e,l=n-r,f=i-s;return o[0]=2*i/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/l,o[6]=0,o[7]=0,o[8]=(e+t)/a,o[9]=(n+r)/l,o[10]=s/f,o[11]=-1,o[12]=0,o[13]=0,o[14]=i*s/f,o[15]=0,o}let fe,ve,se;function ku(e,t,r,n){return n=n||new ce(16),fe=fe||Xe(),ve=ve||Xe(),se=se||Xe(),vt(pi(t,e,se),se),vt(er(r,se,fe),fe),vt(er(se,fe,ve),ve),n[0]=fe[0],n[1]=fe[1],n[2]=fe[2],n[3]=0,n[4]=ve[0],n[5]=ve[1],n[6]=ve[2],n[7]=0,n[8]=se[0],n[9]=se[1],n[10]=se[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function qu(e,t,r,n){return n=n||new ce(16),fe=fe||Xe(),ve=ve||Xe(),se=se||Xe(),vt(pi(e,t,se),se),vt(er(r,se,fe),fe),vt(er(se,fe,ve),ve),n[0]=fe[0],n[1]=fe[1],n[2]=fe[2],n[3]=0,n[4]=ve[0],n[5]=ve[1],n[6]=ve[2],n[7]=0,n[8]=se[0],n[9]=se[1],n[10]=se[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Hu(e,t,r,n){return n=n||new ce(16),fe=fe||Xe(),ve=ve||Xe(),se=se||Xe(),vt(pi(e,t,se),se),vt(er(r,se,fe),fe),vt(er(se,fe,ve),ve),n[0]=fe[0],n[1]=ve[0],n[2]=se[0],n[3]=0,n[4]=fe[1],n[5]=ve[1],n[6]=se[1],n[7]=0,n[8]=fe[2],n[9]=ve[2],n[10]=se[2],n[11]=0,n[12]=-(fe[0]*e[0]+fe[1]*e[1]+fe[2]*e[2]),n[13]=-(ve[0]*e[0]+ve[1]*e[1]+ve[2]*e[2]),n[14]=-(se[0]*e[0]+se[1]*e[1]+se[2]*e[2]),n[15]=1,n}function Wu(e,t){return t=t||new ce(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function $u(e,t,r){r=r||new ce(16);const n=t[0],i=t[1],s=t[2],o=e[0],a=e[1],l=e[2],f=e[3],c=e[4],u=e[5],h=e[6],p=e[7],d=e[8],v=e[9],y=e[10],w=e[11],b=e[12],P=e[13],S=e[14],M=e[15];return e!==r&&(r[0]=o,r[1]=a,r[2]=l,r[3]=f,r[4]=c,r[5]=u,r[6]=h,r[7]=p,r[8]=d,r[9]=v,r[10]=y,r[11]=w),r[12]=o*n+c*i+d*s+b,r[13]=a*n+u*i+v*s+P,r[14]=l*n+h*i+y*s+S,r[15]=f*n+p*i+w*s+M,r}function Yu(e,t){t=t||new ce(16);const r=Math.cos(e),n=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Qu(e,t,r){r=r||new ce(16);const n=e[4],i=e[5],s=e[6],o=e[7],a=e[8],l=e[9],f=e[10],c=e[11],u=Math.cos(t),h=Math.sin(t);return r[4]=u*n+h*a,r[5]=u*i+h*l,r[6]=u*s+h*f,r[7]=u*o+h*c,r[8]=u*a-h*n,r[9]=u*l-h*i,r[10]=u*f-h*s,r[11]=u*c-h*o,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Xu(e,t){t=t||new ce(16);const r=Math.cos(e),n=Math.sin(e);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ku(e,t,r){r=r||new ce(16);const n=e[0],i=e[1],s=e[2],o=e[3],a=e[8],l=e[9],f=e[10],c=e[11],u=Math.cos(t),h=Math.sin(t);return r[0]=u*n-h*a,r[1]=u*i-h*l,r[2]=u*s-h*f,r[3]=u*o-h*c,r[8]=u*a+h*n,r[9]=u*l+h*i,r[10]=u*f+h*s,r[11]=u*c+h*o,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Ju(e,t){t=t||new ce(16);const r=Math.cos(e),n=Math.sin(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Zu(e,t,r){r=r||new ce(16);const n=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],f=e[6],c=e[7],u=Math.cos(t),h=Math.sin(t);return r[0]=u*n+h*a,r[1]=u*i+h*l,r[2]=u*s+h*f,r[3]=u*o+h*c,r[4]=u*a-h*n,r[5]=u*l-h*i,r[6]=u*f-h*s,r[7]=u*c-h*o,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Io(e,t,r){r=r||new ce(16);let n=e[0],i=e[1],s=e[2];const o=Math.sqrt(n*n+i*i+s*s);n/=o,i/=o,s/=o;const a=n*n,l=i*i,f=s*s,c=Math.cos(t),u=Math.sin(t),h=1-c;return r[0]=a+(1-a)*c,r[1]=n*i*h+s*u,r[2]=n*s*h-i*u,r[3]=0,r[4]=n*i*h-s*u,r[5]=l+(1-l)*c,r[6]=i*s*h+n*u,r[7]=0,r[8]=n*s*h+i*u,r[9]=i*s*h-n*u,r[10]=f+(1-f)*c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const ef=Io;function Uo(e,t,r,n){n=n||new ce(16);let i=t[0],s=t[1],o=t[2];const a=Math.sqrt(i*i+s*s+o*o);i/=a,s/=a,o/=a;const l=i*i,f=s*s,c=o*o,u=Math.cos(r),h=Math.sin(r),p=1-u,d=l+(1-l)*u,v=i*s*p+o*h,y=i*o*p-s*h,w=i*s*p-o*h,b=f+(1-f)*u,P=s*o*p+i*h,S=i*o*p+s*h,M=s*o*p-i*h,_=c+(1-c)*u,x=e[0],T=e[1],O=e[2],z=e[3],j=e[4],k=e[5],N=e[6],L=e[7],K=e[8],H=e[9],V=e[10],D=e[11];return n[0]=d*x+v*j+y*K,n[1]=d*T+v*k+y*H,n[2]=d*O+v*N+y*V,n[3]=d*z+v*L+y*D,n[4]=w*x+b*j+P*K,n[5]=w*T+b*k+P*H,n[6]=w*O+b*N+P*V,n[7]=w*z+b*L+P*D,n[8]=S*x+M*j+_*K,n[9]=S*T+M*k+_*H,n[10]=S*O+M*N+_*V,n[11]=S*z+M*L+_*D,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}const tf=Uo;function rf(e,t){return t=t||new ce(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function nf(e,t,r){r=r||new ce(16);const n=t[0],i=t[1],s=t[2];return r[0]=n*e[0],r[1]=n*e[1],r[2]=n*e[2],r[3]=n*e[3],r[4]=i*e[4],r[5]=i*e[5],r[6]=i*e[6],r[7]=i*e[7],r[8]=s*e[8],r[9]=s*e[9],r[10]=s*e[10],r[11]=s*e[11],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}var ft=Object.freeze({__proto__:null,aim:ku,axisRotate:Uo,axisRotation:Io,cameraAim:qu,clone:Ou,copy:mi,create:Pu,determinant:Iu,equals:_u,equalsApproximately:Eu,fromMat3:Tu,fromQuat:Mu,frustum:Nu,getAxis:Gu,getScaling:zu,getTranslation:Fu,identity:Eo,inverse:_o,invert:Uu,lookAt:Hu,mul:Au,multiply:Ro,negate:Cu,ortho:ju,perspective:Vu,rotate:tf,rotateX:Qu,rotateY:Ku,rotateZ:Zu,rotation:ef,rotationX:Yu,rotationY:Xu,rotationZ:Ju,scale:nf,scaling:rf,setAxis:Lu,setDefaultType:Bu,setTranslation:Du,translate:$u,translation:Wu,transpose:Ru});async function sf(e){const t=new Jr;return await t.initialize(e),t}class Jr{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=hn();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(t){if(this.canvas=t,this.device=await Rt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=Ot(this.device,xu,Su,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const t=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(t){if(t!==null)return new Promise((r,n)=>{if(t.addEventListener("error",n),"requestVideoFrameCallback"in t)t.requestVideoFrameCallback((i,s)=>{r()});else{const i=s=>{s.currentTime>0?r():requestAnimationFrame(()=>i(s))};i(t)}t.play().catch(n)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const t=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),r=8,n=8,i=64,s=r*this.numberOfObjects,o=n*this.numberOfObjects,a=i*this.numberOfObjects,l=Co(),f=l.vertexData.byteLength,c=l.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:f,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,l.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:l.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,l.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const u=[];{const P=new Float32Array(s/4);for(let S=0;S<this.numberOfObjects;S++){const M=S*(r/4);P.set([oe(-.9,.9),oe(-.9,.9)],M);const _={scale:oe(.2,.6)};u.push(_)}this.perInstanceOffsets=new Float32Array(P),this.device.queue.writeBuffer(this.staticBuffer,0,P)}const h=new Float32Array(o/4),p=new Float32Array(a/4);let d=0,v=0,y=0;const w=1e4,b=P=>{if(this.canvas===null||this.device===null||this.context===null)return;const S=P-d;v+=S,d=P;const M=performance.now(),_=60*Math.PI/180,x=this.canvas.width/this.canvas.height,z=ft.perspective(_,x,.1,2e3),j=[0,0,2],k=[0,1,0],N=[0,0,0],L=ft.lookAt(j,N,k),H=ft.multiply(z,L),V=v/w*2*Math.PI,D=this.canvas.width/this.canvas.height*.5;u.forEach((we,ge)=>{const Ne=ge*(n/4),ue=ge*(i/4);h.set([we.scale,we.scale],Ne);const rr=this.perInstanceOffsets[2*ge+0],m=this.perInstanceOffsets[2*ge+1],g=ft.create();ft.copy(H,g),ft.translate(g,[rr,m,0],g),ft.rotateX(g,V,g),ft.rotateY(g,.2*Math.sin(V),g),ft.scale(g,[2*D,1*D,1],g),p.set(g,ue)});const me={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},Z=this.device.createCommandEncoder({label:"Render Quad Encoder"}),te=Z.beginRenderPass(me);te.setPipeline(this.simpleTexturePipeline),te.setVertexBuffer(0,this.vertexBuffer),te.setVertexBuffer(1,this.staticBuffer),te.setVertexBuffer(2,this.changingBuffer),te.setIndexBuffer(this.indexBuffer,"uint16");const be=this.device.importExternalTexture({source:this.video}),Te=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:t},{binding:1,resource:be},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,h),this.device.queue.writeBuffer(this.storageBuffer,0,p),te.setBindGroup(0,Te),te.drawIndexed(c,this.numberOfObjects),te.end(),this.timestampQuerySet!=null&&(Z.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&Z.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const ye=Z.finish();this.device.queue.submit([ye]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const we=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());y=Number(we[1]-we[0]),this.timestampQuerySet.resultBuffer.unmap()});const xe=performance.now()-M;if(this.infoElement&&this.device){const we=`                FPS: ${(1e3/S).toFixed(1)}
                JS Time: ${xe.toFixed(1)} ms
                GPU Time: ${(y/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=we}this.animationFrameId=requestAnimationFrame(b)};this.animationFrameId=requestAnimationFrame(b),this.resizeObserver=new ResizeObserver(P=>{for(const S of P){const M=S.contentBoxSize[0].inlineSize,_=S.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(M,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(_,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){await this.smallCleanup(),this.slider&&(this.slider=null),dn()}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const t=tr();if(t===null)return;const r=document.createElement("label");r.textContent=`Number of Objects: ${this.numberOfObjects}`,r.htmlFor="numObjectsSlider",t.appendChild(r),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=Jr.minObjects.toString(),this.slider.max=Jr.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",t.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),r.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let n=!1;const i=async()=>{if(!n){n=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{n=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const of=`// ============================== //\r
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
}`,af=`// ============================== //\r
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
}`,lf=`// ============================== //\r
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
`,cf=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class Mr{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(t,r){this.bodyA=t,this.bodyB=r;for(let n=0;n<Mr.MAX_ROWS;++n){this.J.push(q(0,0,0));const i=di();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let t=0;t<Mr.MAX_ROWS;++t)this.stiffness[t]=0,this.penalty[t]=0,this.lambda[t]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(t){console.warn("This method should not be called directly.")}computeDerivatives(t){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class uf{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=q(0,0,0);inertial=q(0,0,0);id=-1;forces=[];constructor(t,r,n,i,s,o){this.width=t[0],this.height=t[1],this.density=n,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*We(t,t)/12,this.radius=Math.sqrt(We(t,t))*.5,this.color=r}getScale(){return re(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return re(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(t){this.staticBody||(this.velocity=t)}getRotationMatrix(){const t=Math.cos(this.position[2]),r=Math.sin(this.position[2]);return Xr(t,r,-r,t)}setPosition(t){this.staticBody||(this.position=t)}setColor(t){this.color=t}isConstrainedTo(t){for(let r=0;r<this.forces.length;++r){const n=this.forces[r];if(n.bodyA===this&&n.bodyB===t||n.bodyB===this&&n.bodyA===t)return!0}return!1}}const ze=12,qe=8,Ft=4,ff=8,hf=6,cs=256,df=16;class st{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(cs*(ze+qe)/4);numInstances=0;maxInstances=cs;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(t,r){this.canvas=t,this.gameManager=r}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await Rt(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(t=>{for(const r of t){const n=r.contentBoxSize[0].inlineSize,i=r.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(n,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(t){return this.addInstance(t.getPosition(),t.getScale(),t.getColor())}addInstance(t,r,n){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*Ft,n);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,t),this.updateInstanceScale(s,r),s}removeInstance(t){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const r=this.idToIndexMap.get(t);if(r===void 0)return;const n=this.numInstances-1;if(r!==n){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,n*Ft,this.staticBuffer,r*Ft,Ft),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,o=r*(ze+qe)/4,a=n*(ze+qe)/4;s[o+0]=s[a+0],s[o+1]=s[a+1],s[o+2]=s[a+2],s[o+3]=s[a+3];const l=this.indexToId[n];this.indexToId[r]=l,this.idToIndexMap.set(l,r)}this.idToIndexMap.delete(t),this.indexToId.pop(),this.numInstances--}updateInstanceScale(t,r){const n=this.idToIndexMap.get(t);n!==void 0&&(this.changingCpuArray[n*(ze+qe)/4+3]=r[0],this.changingCpuArray[n*(ze+qe)/4+4]=r[1])}updateInstancePosition(t,r){const n=this.idToIndexMap.get(t);n!==void 0&&(this.changingCpuArray[n*(ze+qe)/4+0]=r[0],this.changingCpuArray[n*(ze+qe)/4+1]=r[1],this.changingCpuArray[n*(ze+qe)/4+2]=r[2])}updateContacts(t){if(this.numContacts=Math.min(t.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let r=0;r<this.numContacts;++r)this.contactPositions[r*2+0]=t[r].pos[0],this.contactPositions[r*2+1]=t[r].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const t=this.context.getCurrentTexture().createView(),r={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:t,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},n=this.device.createCommandEncoder({label:"canvas render encoder"}),i=n.beginRenderPass(r);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(ze+qe);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(hf,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!Qc(this.timestampQuerySet,n)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([n.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const t=this.maxInstances*Ft,r=this.maxInstances*(ze+qe),n=Co(),i=n.vertexData.byteLength,s=n.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,n.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,n.indexData);const o=Cc({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=Yc(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:df,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=new Float32Array([st.xWorldSize,st.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,a.buffer,a.byteOffset,a.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const t=this.maxInstances*Ft,r=this.maxInstances*(ze+qe),n=this.device.createBuffer({label:"Extended static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,n,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(ze+qe)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=n,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=Ot(this.device,of,af,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[t]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:ff,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:Ft,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:ze+qe,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:ze,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=Ot(this.device,lf,cf,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const pf=5e-4,mf=.01,Lt=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),gf=e=>{const t=e.inEdge1;e.inEdge1=e.inEdge2,e.inEdge2=t;const r=e.outEdge1;e.outEdge1=e.outEdge2,e.outEdge2=r};function br(e){return{inEdge1:e.inEdge1,outEdge1:e.outEdge1,inEdge2:e.inEdge2,outEdge2:e.outEdge2,ID:e.ID}}function Ao(e){return e.inEdge1&255|(e.outEdge1&255)<<8|(e.inEdge2&255)<<16|(e.outEdge2&255)<<24}function us(){return{details:Lt(),pA:$(),pB:$(),n:$(),JacNormA:Be(),JacNormB:Be(),JacTangA:Be(),JacTangB:Be(),C0:$(),stick:!1}}const fs=(e,t,r,n,i)=>{let s=0;const o=We(r,t[0].v)-n,a=We(r,t[1].v)-n;if(o<=0&&(e[s++]={v:Kr(t[0].v),cd:br(t[0].cd)}),a<=0&&(e[s++]={v:Kr(t[1].v),cd:br(t[1].cd)}),o*a<0){const l=o/(o-a),f=vc($(),t[0].v,t[1].v,l);let c=br(o>0?t[0].cd:t[1].cd);o>0?(c.inEdge1=i,c.inEdge2=0):(c.outEdge1=i,c.outEdge2=0),c.ID=Ao(c),e[s++]={v:f,cd:c}}return s},Ar=(e,t,r,n,i)=>{const s=Vr(ur(),n),o=Oe($(),i,s);ht(o,o,-1);const a=re(Math.abs(o[0]),Math.abs(o[1]));a[0]>a[1]?o[0]>0?(e[0].v=re(t[0],-t[1]),e[0].cd.inEdge2=3,e[0].cd.outEdge2=4,e[1].v=re(t[0],t[1]),e[1].cd.inEdge2=4,e[1].cd.outEdge2=1):(e[0].v=re(-t[0],t[1]),e[0].cd.inEdge2=1,e[0].cd.outEdge2=2,e[1].v=re(-t[0],-t[1]),e[1].cd.inEdge2=2,e[1].cd.outEdge2=3):o[1]>0?(e[0].v=re(t[0],t[1]),e[0].cd.inEdge2=4,e[0].cd.outEdge2=1,e[1].v=re(-t[0],t[1]),e[1].cd.inEdge2=1,e[1].cd.outEdge2=2):(e[0].v=re(-t[0],-t[1]),e[0].cd.inEdge2=2,e[0].cd.outEdge2=3,e[1].v=re(t[0],-t[1]),e[1].cd.inEdge2=3,e[1].cd.outEdge2=4),e[0].v=pt($(),r,Oe($(),e[0].v,n)),e[1].v=pt($(),r,Oe($(),e[1].v,n))};class gi extends Mr{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(t,r){super(t,r);for(let n=0;n<Mr.MAX_ROWS;++n)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const t=this.penalty.slice(),r=this.lambda.slice(),n=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=gi.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const o=this.contacts[s].details.ID,a=this.oldContacts.findIndex(l=>l.details.ID===o);a!==-1&&(this.penalty[s*2+0]=t[a*2+0],this.penalty[s*2+1]=t[a*2+1],this.lambda[s*2+0]=r[a*2+0],this.lambda[s*2+1]=r[a*2+1],this.contacts[s].stick=n[a],this.contacts[s].stick&&(this.contacts[s].pA=Kr(this.oldContacts[a].pA),this.contacts[s].pB=Kr(this.oldContacts[a].pB)))}for(let s=0;s<this.contacts.length;++s){const o=this.contacts[s].n,a=re(o[1],-o[0]),l=Xr(o[0],o[1],a[0],a[1]),f=Oe($(),this.contacts[s].pA,Nt(this.bodyA.getPosition()[2])),c=Oe($(),this.contacts[s].pB,Nt(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=q(l[0],l[2],Ur(f,o)),this.contacts[s].JacNormB=q(-l[0],-l[2],-Ur(c,o)),this.contacts[s].JacTangA=q(l[1],l[3],Ur(f,a)),this.contacts[s].JacTangB=q(-l[1],-l[3],-Ur(c,a));const u=rt($(),pt($(),this.bodyA.getPos2(),f),pt($(),this.bodyB.getPos2(),c));this.contacts[s].C0=Oe(this.contacts[s].C0,u,l),this.contacts[s].C0=pt(this.contacts[s].C0,this.contacts[s].C0,re(pf,0))}return this.contacts.length>0}computeConstraints(t){for(let r=0;r<this.contacts.length;++r){const n=Ht(Be(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=Ht(Be(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=ht($(),this.contacts[r].C0,1-t);this.C[r*2+0]=s[0]+Ir(this.contacts[r].JacNormA,n)+Ir(this.contacts[r].JacNormB,i),this.C[r*2+1]=s[1]+Ir(this.contacts[r].JacTangA,n)+Ir(this.contacts[r].JacTangB,i);const o=Math.abs(this.lambda[r*2+0])*this.friction;this.fmax[r*2+1]=o,this.fmin[r*2+1]=-o,this.contacts[r].stick=Math.abs(this.lambda[r*2+1])<o&&Math.abs(this.contacts[r].C0[1])<mf}}computeDerivatives(t){for(let r=0;r<this.contacts.length;++r)t===this.bodyA?(this.J[r*2+0]=this.contacts[r].JacNormA,this.J[r*2+1]=this.contacts[r].JacTangA):(this.J[r*2+0]=this.contacts[r].JacNormB,this.J[r*2+1]=this.contacts[r].JacTangB)}static collide(t,r,n){n.length=0;let i=$();const s=Nt(t.getPosition()[2]),o=Nt(r.getPosition()[2]),a=Vr(ur(),s),l=Vr(ur(),o),f=ht($(),t.getScale(),.5),c=ht($(),r.getScale(),.5),u=t.getPos2(),h=r.getPos2(),p=t.getRotationMatrix(),d=r.getRotationMatrix(),v=rt($(),h,u),y=Oe($(),v,a),w=Oe($(),v,l),b=re(Math.abs(y[0]),Math.abs(y[1])),P=re(Math.abs(w[0]),Math.abs(w[1])),S=hc(ur(),a,d),M=Xr(Math.abs(S[0]),Math.abs(S[1]),Math.abs(S[2]),Math.abs(S[3])),_=Vr(ur(),M),x=rt($(),b,pt($(),f,Oe($(),c,M))),T=rt($(),P,pt($(),c,Oe($(),f,_)));if(x[0]>0||x[1]>0||T[0]>0||T[1]>0)return 0;let O,z;O=1,z=x[0],y[0]>0?i=re(p[0],p[1]):i=re(-p[0],-p[1]);const j=.95,k=.01;x[1]>j*z+k*f[1]&&(O=2,z=x[1],y[1]>0?i=re(p[2],p[3]):i=re(-p[2],-p[3])),T[0]>j*z+k*c[0]&&(O=3,z=T[0],w[0]>0?i=re(d[0],d[1]):i=re(-d[0],-d[1])),T[1]>j*z+k*c[1]&&(O=4,z=T[1],w[1]>0?i=re(d[2],d[3]):i=re(-d[2],-d[3]));let N,L;const K=[{cd:Lt(),v:$()},{cd:Lt(),v:$()}];let H,V,D,ae=0,me=0,Z;switch(O){case 1:N=i,H=We(u,N)+f[0],L=re(p[2],p[3]),Z=We(u,L),V=-Z+f[1],D=Z+f[1],ae=3,me=1,Ar(K,c,h,d,N);break;case 2:N=i,H=We(u,N)+f[1],L=re(p[0],p[1]),Z=We(u,L),V=-Z+f[0],D=Z+f[0],ae=2,me=4,Ar(K,c,h,d,N);break;case 3:N=ht($(),i,-1),H=We(h,N)+c[0],L=re(d[2],d[3]),Z=We(h,L),V=-Z+c[1],D=Z+c[1],ae=3,me=1,Ar(K,f,u,p,N);break;case 4:N=ht($(),i,-1),H=We(h,N)+c[1],L=re(d[0],d[1]),Z=We(h,L),V=-Z+c[0],D=Z+c[0],ae=2,me=4,Ar(K,f,u,p,N);break}const te=[{cd:Lt(),v:$()},{cd:Lt(),v:$()}],be=[{cd:Lt(),v:$()},{cd:Lt(),v:$()}];let Te;if(Te=fs(te,K,ht($(),L,-1),V,ae),Te<2||(Te=fs(be,te,L,D,me),Te<2))return 0;n.push(us(),us());let ye=0;for(let xe=0;xe<2;++xe){const we=We(N,be[xe].v)-H;if(we<=0){const ge=n[ye];ge.n=ht($(),i,-1);const Ne=O===3||O===4,ue=rt($(),be[xe].v,ht($(),N,we));if(!Ne)ge.pA=Oe($(),rt($(),ue,u),a),ge.pB=Oe($(),rt($(),be[xe].v,h),l),ge.details=br(be[xe].cd);else{ge.pA=Oe($(),rt($(),be[xe].v,u),a),ge.pB=Oe($(),rt($(),ue,h),l);let rr=br(be[xe].cd);gf(rr),ge.details=rr}if(ge.details.ID=Ao(ge.details),++ye,ye===2)break}}return n.length=ye,ye}getContactRenders(){const t=[],r=Nt(this.bodyA.getPosition()[2]),n=Nt(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const a=pt($(),i,Oe($(),this.contacts[o].pA,r));t.push({pos:a});const l=pt($(),s,Oe($(),this.contacts[o].pB,n));t.push({pos:l})}return t}getRows(){return this.contacts.length*2}}const Dr=1,ar=1e9;class vf{dt=0;gravity=re(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=re(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(t){Math.abs(t-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${t}. This may cause instability.`),this.contactsToRender=[];for(let n=0;n<this.bodies.length;++n)for(let i=n+1;i<this.bodies.length;++i){const s=this.bodies[n],o=this.bodies[i],a=rt($(),s.getPos2(),o.getPos2()),l=s.getRadius()+o.getRadius();if(gc(a)<=l*l&&!s.isConstrainedTo(o)){let f=new gi(s,o);this.forces.push(f),s.forces.push(f),o.forces.push(f)}}for(let n=0;n<this.forces.length;++n){const i=this.forces[n];if(!i.initialize()){this.forces.splice(n,1),--n;const o=i.bodyA.forces.indexOf(i);o!==-1&&i.bodyA.forces.splice(o,1);const a=i.bodyB.forces.indexOf(i);a!==-1&&i.bodyB.forces.splice(a,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let o=0;o<i.getRows();++o){if(this.postStabilization){let a=i.penalty[o]*this.gamma;a<Dr&&(a=Dr),a>ar&&(a=ar),i.penalty[o]=a}else{i.lambda[o]=i.lambda[o]*this.alpha*this.gamma;let a=i.penalty[o]*this.gamma;a<Dr&&(a=Dr),a>ar&&(a=ar),i.penalty[o]=a}i.penalty[o]=Math.min(i.penalty[o],i.stiffness[o])}}for(let n=0;n<this.bodies.length;++n){const i=this.bodies[n];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(q(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=qt(Be(),i.getPosition(),St(Be(),i.getVelocity(),this.dt)),i.getMass()!==0){let u=St(Be(),q(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=qt(i.inertial,i.inertial,u)}let l=St(Be(),Ht(Be(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);l<0&&(l=0),l>1&&(l=1),i.lastPosition=dc(i.getPosition());const f=St(Be(),i.getVelocity(),this.dt),c=St(Be(),q(this.gravity[0],this.gravity[1],0),l*this.dt*this.dt);i.setPosition(qt(Be(),i.getPosition(),qt(Be(),f,c)))}const r=this.iterations+(this.postStabilization?1:0);for(let n=0;n<r;++n){let i=this.alpha;this.postStabilization&&(i=n<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const o=Yn(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),a=rs(di(),o,1/(this.dt*this.dt)),l=Qn(Be(),Ht(Be(),s.getPosition(),s.inertial),a);for(const c of s.forces){c.computeConstraints(i),c.computeDerivatives(s);for(let u=0;u<c.getRows();++u){let h=c.stiffness[u]===1/0?c.lambda[u]:0,p=c.penalty[u]*c.C[u]+h;p<c.fmin[u]&&(p=c.fmin[u]),p>c.fmax[u]&&(p=c.fmax[u]);const d=Yn(_n(q(c.H[u][0],c.H[u][3],c.H[u][6])),0,0,0,_n(q(c.H[u][1],c.H[u][4],c.H[u][7])),0,0,0,_n(q(c.H[u][2],c.H[u][5],c.H[u][8])));rs(d,d,Math.abs(p)),qt(l,l,St(Be(),c.J[u],p));const v=bc(c.J[u],St(Be(),c.J[u],c.penalty[u]));ts(a,a,v),ts(a,a,d)}}const f=yc(a,l);s.setPosition(Ht(Be(),s.getPosition(),f))}if(n<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let o=0;o<s.getRows();++o){let a=s.stiffness[o]===1/0?s.lambda[o]:0;s.lambda[o]=a+s.penalty[o]*s.C[o],s.lambda[o]<s.fmin[o]&&(s.lambda[o]=s.fmin[o]),s.lambda[o]>s.fmax[o]&&(s.lambda[o]=s.fmax[o]),Math.abs(s.lambda[o])>=s.fracture[o]&&s.disable(),s.lambda[o]>s.fmin[o]&&s.lambda[o]<s.fmax[o]&&(s.penalty[o]=Math.min(s.penalty[o]+this.beta*Math.abs(s.C[o]),Math.min(s.stiffness[o],ar)))}}if(n==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const o=Ht(Be(),s.getPosition(),s.lastPosition);St(o,o,1/this.dt),s.setVelocity(o)}}}}addRigidBox(t){this.bodies.indexOf(t)===-1&&this.bodies.push(t)}removeRigidBox(t){const r=this.bodies.indexOf(t);r!==-1&&this.bodies.splice(r,1)}}class bf{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(t){this.canvas=t,this.gameRenderer=new st(this.canvas,this),this.solver=new vf,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(t){this.logging&&console.log(`[GameManager] ${t}`)}logWarn(t){this.logging&&console.warn(`[GameManager] ${t}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const t=q(st.xWorldSize*.5,8,0),r=re(st.xWorldSize-20,10);this.addRigidBox(t,r,q(0,0,0),new Uint8Array([200,200,200,255]),!0);const n=1/60;let i=0;this.lastFrameTime=performance.now();const s=o=>{if(!this.running)return;const a=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,i+=a;i>=n;)this.solver.step(n),i-=n;for(let l=0;l<this.solver.bodies.length;++l){const f=this.solver.bodies[l],c=f.getPosition(),u=new Float32Array([c[0],c[1],c[2]]);this.gameRenderer.updateInstancePosition(f.id,u)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s)};this.rafID=requestAnimationFrame(s)}addRigidBox(t=xc(0,0,st.xWorldSize,st.yWorldSize),r=re(oe(2,10),oe(2,10)),n=q(0,0,0),i=Sc(),s=!1){const o=new uf(r,i,s?0:1,1,t,n);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",t=>{if(!this.canvas)return;const r=this.canvas.getBoundingClientRect(),n=t.clientX-r.left,i=t.clientY-r.top,s=n/this.canvas.width*st.xWorldSize,o=(1-i/this.canvas.height)*st.yWorldSize,a=q(s,o,oe(0,Math.PI*2));this.addRigidBox(a)})}}async function yf(e){const t=new bf(e);return await t.initialize(),t}const xf=`// ============================== //\r
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
}`,Sf=`// ============================== //\r
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
}`,wf=`struct Uniforms {\r
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
}`,Bf=`struct Uniforms {\r
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
}`;function vi(e){const t={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:e,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,modelMatrix:hs(),viewMatrix:hs(),projectionMatrix:Go(Math.PI/4,e,.1,1e3)};return Do(t),t}function bi(e,t,r,n){e.position[0]=t,e.position[1]=r,e.position[2]=n,wi(e)}function yi(e,t){e.aspect=t,Fo(e)}function xi(e,t,r){e.near=t,e.far=r,Fo(e)}function Si(e,t,r,n){e.position[0]+=e.forward[0]*t+e.right[0]*r+e.up[0]*n,e.position[1]+=e.forward[1]*t+e.right[1]*r+e.up[1]*n,e.position[2]+=e.forward[2]*t+e.right[2]*r+e.up[2]*n,wi(e)}function mn(e,t,r){e.yaw+=t,e.pitch+=r;const n=Math.PI/2-.01;for(e.pitch=Math.max(-n,Math.min(n,e.pitch));e.yaw>Math.PI;)e.yaw-=2*Math.PI;for(;e.yaw<-Math.PI;)e.yaw+=2*Math.PI;Do(e)}function Fe(e,t,r){mn(e,t*e.rotateSpeed,r*e.rotateSpeed)}function Do(e){e.forward[0]=Math.cos(e.pitch)*Math.cos(e.yaw),e.forward[1]=Math.sin(e.pitch),e.forward[2]=Math.cos(e.pitch)*Math.sin(e.yaw),Kt(e.forward);const t=Zr(e.forward,e.worldUp);Kt(t),e.right[0]=t[0],e.right[1]=t[1],e.right[2]=t[2];const r=Zr(e.right,e.forward);Kt(r),e.up[0]=r[0],e.up[1]=r[1],e.up[2]=r[2],wi(e)}function wi(e){const t=new Float32Array([e.position[0]+e.forward[0],e.position[1]+e.forward[1],e.position[2]+e.forward[2]]);e.viewMatrix=Pf(e.position,t,e.up)}function Fo(e){e.projectionMatrix=Go(e.fovY,e.aspect,e.near,e.far)}function hs(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Go(e,t,r,n){const i=1/Math.tan(e*.5),s=1/(r-n);return new Float32Array([i/t,0,0,0,0,i,0,0,0,0,n*s,-1,0,0,r*n*s,0])}function Pf(e,t,r){const n=new Float32Array([e[0]-t[0],e[1]-t[1],e[2]-t[2]]);Kt(n);const i=Zr(r,n);Kt(i);const s=Zr(n,i);return new Float32Array([i[0],s[0],n[0],0,i[1],s[1],n[1],0,i[2],s[2],n[2],0,-yr(i,e),-yr(s,e),-yr(n,e),1])}function Kt(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);t>1e-5&&(e[0]/=t,e[1]/=t,e[2]/=t)}function Zr(e,t){return new Float32Array([e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]])}function yr(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Bi(e){const t=Math.tan(e.fovY/2),r=e.aspect*t,n=t;return new Float32Array([e.right[0]*r,e.right[1]*r,e.right[2]*r,0,e.up[0]*n,e.up[1]*n,e.up[2]*n,0,e.forward[0],e.forward[1],e.forward[2],0,0,0,0,1])}function Tf(e,t,r){const n=Bi(e),i=new Float32Array([n[0]*t+n[4]*r+n[8]*1,n[1]*t+n[5]*r+n[9]*1,n[2]*t+n[6]*r+n[10]*1]);return Kt(i),i}function Mf(e,t,r,n){const i=new Float32Array([r[0]-e[0],r[1]-e[1],r[2]-e[2]]),s=yr(i,t);if(s<0)return-1;const o=yr(i,i)-s*s,a=n*n;if(o>a)return-1;const l=Math.sqrt(a-o),f=s-l;return f<0?-1:f}async function Cf(e){const t=new If;return await t.initialize(e),t}const ds=264,ps=128,Of=0,Ef=20,_f=0,Rf=1e3;let If=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=hn();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=vi(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){bi(this.camera,278,500,-700),mn(this.camera,0,-.3),xi(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const t=tr();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((s,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=s,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),t.appendChild(document.createElement("br")),t.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=Of.toString(),this.intensitySlider.max=Ef.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const n=document.createElement("label");n.htmlFor="intensitySlider",n.textContent=" Light Intensity",t.appendChild(document.createElement("br")),t.appendChild(this.intensitySlider),t.appendChild(n),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=_f.toString(),this.numBouncesSlider.max=Rf.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const i=document.createElement("label");i.htmlFor="numBouncesSlider",i.textContent=" Number of Bounces",t.appendChild(document.createElement("br")),t.appendChild(this.numBouncesSlider),t.appendChild(i)}async initialize(t){if(this.canvas=t,this.device=await Rt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Ot(this.device,xf,Sf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Ot(this.device,wf,Bf,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=Ec();this.additionalInfo=t.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,t.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:t.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,t.indexData),this.normalObjects.numIndices=t.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,t.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:t.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,t.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,t.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:ds,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,t.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,t.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,t.colorData);var r=new Uint32Array(t.indexData.length);for(let n=0;n<t.indexData.length;n++)r[n]=t.indexData[n];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,r),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:t.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,t.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:ps,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const r=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY,i=.05;Fe(this.camera,r*i,-n*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(t!==0||r!==0||n!==0)&&Si(this.camera,-n,t,r),this.keysPressed.has("arrowleft")&&Fe(this.camera,-1,0),this.keysPressed.has("arrowright")&&Fe(this.camera,1,0),this.keysPressed.has("arrowup")&&Fe(this.camera,0,1),this.keysPressed.has("arrowdown")&&Fe(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(ps),r=new Float32Array(t),n=new Uint32Array(t);r.set(Bi(this.camera),0),r.set(this.camera.position,16),r.set(this.light.position,20),r.set(this.light.color,24),n[28]=this.rayTracingMode,r[29]=this.light.intensity,n[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new Float32Array(ds/4);let r=0;t.set(this.camera.modelMatrix,r),r+=16,t.set(this.camera.viewMatrix,r),r+=16,t.set(this.camera.projectionMatrix,r),r+=16,t.set(this.light.position,r),r+=4,t.set(this.light.color,r),r+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){const t=performance.now()*.001,r=200,n=250,i=276,s=278.5,o=450;if(this.light.position[0]=i+r*Math.cos(t),this.light.position[1]=o,this.light.position[2]=s+n*Math.sin(t),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const a=this.additionalInfo.cubeCenter,f=To(0,t,0),c=this.additionalInfo.cubeVertexStart,u=this.additionalInfo.cubeVertexCount,h=this.additionalInfo.cubeVertexInfo,p=new Float32Array(u*3),d=this.additionalInfo.cubeNormalsInfo,v=new Float32Array(u*3);for(let y=0;y<u;y++){const w=y*3,b=h[w]-a[0],P=h[w+1]-a[1],S=h[w+2]-a[2];p[w]=f[0]*b+f[1]*P+f[2]*S+a[0],p[w+1]=f[3]*b+f[4]*P+f[5]*S+a[1],p[w+2]=f[6]*b+f[7]*P+f[8]*S+a[2];const M=d[w],_=d[w+1],x=d[w+2];v[w]=f[0]*M+f[1]*_+f[2]*x,v[w+1]=f[3]*M+f[4]*_+f[5]*x,v[w+2]=f[6]*M+f[7]*_+f[8]*x}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,c*3*4,p),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,c*3*4,v)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,c*3*4,p),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,c*3*4,v))}}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);this.useRaytracing?(u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.draw(6)):(u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup),u.setVertexBuffer(0,this.normalObjects.positionBuffer),u.setVertexBuffer(1,this.normalObjects.normalBuffer),u.setVertexBuffer(2,this.normalObjects.uvBuffer),u.setVertexBuffer(3,this.normalObjects.colorBuffer),u.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),u.drawIndexed(this.normalObjects.numIndices)),u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const p=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${p.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),yi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),dn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const Uf=`struct Uniforms {\r
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
}`,Af=`struct Uniforms {\r
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
}`,ms=264;async function Df(e){const t=new Ff;return await t.initialize(e),t}class Ff{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=hn();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=vi(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,bi(this.camera,300,200,300),mn(this.camera,9*Math.PI/12,-Math.PI/6),xi(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(t){if(this.canvas=t,this.device=await Rt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=Ot(this.device,Uf,Af,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}initializeUtils(){const t=tr();if(!t)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",t.appendChild(this.wireFrameCheckbox),t.appendChild(this.wireFrameLabel),t.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(n=>{const i=document.createElement("option");i.value=n,i.text=n.charAt(0).toUpperCase()+n.slice(1),this.cullModeSelect.appendChild(i)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),t.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",t.appendChild(document.createElement("br")),t.appendChild(this.useSortingCheckbox),t.appendChild(this.useSortingLabel)}initializeScene(){const t=Rn({translation:q(0,0,-100),rotation:q(0,0,0),scale:q(200,200,1)},[.8,.8,.7]);t.additionalInfo={order:0,numVertices:t.vertexData.length/3},this.facesTopologyInformation.push(t);const r=Rn({translation:q(-100,0,0),rotation:q(0,-Math.PI/2,0),scale:q(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:1,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const n=Rn({translation:q(0,-100,0),rotation:q(Math.PI/2,0,0),scale:q(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:2,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const i=25,s=32;let o=3,a=0;const l=-100+i;for(let h=-1;h<=1;h++)for(let p=-1;p<=1;p++){const d=[h*i*2,l,p*i*2],v=In(d,i,[Math.random(),Math.random(),Math.random()],s,s);v.additionalInfo={order:o++,numVertices:v.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(v),this.currentSphereOrders.push(v.additionalInfo.id)}const f=l+i*Math.sqrt(2);for(let h=0;h<=1;h++)for(let p=0;p<=1;p++){const d=[(h-.5)*i*2,f,(p-.5)*i*2],v=In(d,i,[Math.random(),Math.random(),Math.random()],s,s);v.additionalInfo={order:o++,numVertices:v.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(v),this.currentSphereOrders.push(v.additionalInfo.id)}const c=[0,f+i*Math.sqrt(2),0],u=In(c,i,[Math.random(),Math.random(),Math.random()],s,s);u.additionalInfo={order:o++,numVertices:u.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(u),this.currentSphereOrders.push(u.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const t=this.device.queue;this.initializeScene();const r=[],n=[],i=[],s=[],o=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const v=this.facesTopologyInformation[d];v.additionalInfo&&(r.push(v.vertexData),n.push(v.indexData),i.push(v.normalData),s.push(v.colorData),o.push(v.uvData))}const a=this.currentSphereOrders.slice();for(let d=a.length-1;d>0;d--){const v=Math.floor(Math.random()*(d+1));[a[d],a[v]]=[a[v],a[d]]}for(let d=0;d<this.spheresTopologyInformation.length;d++){const v=this.spheresTopologyInformation[a[d]];v.additionalInfo&&(r.push(v.vertexData),n.push(v.indexData),i.push(v.normalData),s.push(v.colorData),o.push(v.uvData))}const l=r.map(d=>d.length/3),f=wt(r),c=is(n,l),u=wt(i),h=wt(s),p=wt(o);this.totalIndices=c.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:ms,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.vertexBuffer,0,f),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:u.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.normalBuffer,0,u),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:h.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.colorBuffer,0,h),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:p.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.uvBuffer,0,p),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:c.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.indexBuffer,0,c),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const r=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY,i=.05;Fe(this.camera,r*i,-n*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(r-=this.camera.moveSpeed),(t!==0||r!==0||n!==0)&&(Si(this.camera,-n,t,r),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&Fe(this.camera,-1,0),this.keysPressed.has("arrowright")&&Fe(this.camera,1,0),this.keysPressed.has("arrowup")&&Fe(this.camera,0,1),this.keysPressed.has("arrowdown")&&Fe(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const t=new ArrayBuffer(ms),r=new Float32Array(t);r.set(this.camera.modelMatrix,0),r.set(this.camera.viewMatrix,16),r.set(this.camera.projectionMatrix,32),r.set(this.light.position,48),r.set(this.light.color,52),r[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,t)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const t=this.camera.position,r=[];for(let d=0;d<this.spheresTopologyInformation.length;d++){const y=this.spheresTopologyInformation[d].transform.translation,w=y[0]-t[0],b=y[1]-t[1],P=y[2]-t[2],S=Math.sqrt(w*w+b*b+P*P),M=this.spheresTopologyInformation[d].additionalInfo.id;r.push({id:M,distance:S})}r.sort((d,v)=>v.distance-d.distance),this.currentSphereOrders=r.map(d=>d.id);const n=[],i=[],s=[],o=[],a=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const v=this.facesTopologyInformation[d];v.additionalInfo&&(n.push(v.vertexData),i.push(v.indexData),s.push(v.normalData),o.push(v.colorData),a.push(v.uvData))}for(let d=0;d<this.currentSphereOrders.length;d++){const v=this.currentSphereOrders[d],y=this.spheresTopologyInformation.find(w=>w.additionalInfo.id===v);y&&(n.push(y.vertexData),i.push(y.indexData),s.push(y.normalData),o.push(y.colorData),a.push(y.uvData))}const l=n.map(d=>d.length/3),f=wt(n),c=is(i,l),u=wt(s),h=wt(o),p=wt(a);this.device.queue.writeBuffer(this.vertexBuffer,0,f),this.device.queue.writeBuffer(this.indexBuffer,0,c),this.device.queue.writeBuffer(this.normalBuffer,0,u),this.device.queue.writeBuffer(this.colorBuffer,0,h),this.device.queue.writeBuffer(this.uvBuffer,0,p)}startMainLoop(){if(this.device===null||this.canvas===null)return;let t=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const a=this.context.getCurrentTexture().createView(),l={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);u.setPipeline(this.renderPipeline),u.setBindGroup(0,this.bindGroup),u.setVertexBuffer(0,this.vertexBuffer),u.setVertexBuffer(1,this.normalBuffer),u.setVertexBuffer(2,this.uvBuffer),u.setVertexBuffer(3,this.colorBuffer),u.setIndexBuffer(this.indexBuffer,"uint16"),u.drawIndexed(this.totalIndices,1,0,0,0),u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const p=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${p.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),yi(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),dn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const Gf=`// ============================== //\r
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
}`,Lf=`// ============================== //\r
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
struct Material {\r
    albedo : vec3<f32>,\r
    metalness : f32,\r
\r
    usePerlinMetalness : f32,\r
    roughness : f32,\r
    usePerlinRoughness : f32,\r
    perlinFreq : f32,\r
\r
    useAlbedoTexture : f32,\r
    useMetalnessTexture : f32,\r
    useRoughnessTexture : f32,\r
    useNormalTexture : f32,\r
\r
    textureIndex: f32,\r
    _pad0: f32,\r
    _pad1: f32,\r
    _pad2: f32,\r
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
    uvAtHit: vec2f,\r
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
@group(1) @binding(1) var materialSampler: sampler;\r
@group(1) @binding(2) var textures: texture_2d_array<f32>; // (albedo -> metalness -> roughness -> normal) for each material\r
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
    let baseIndex = materialIndex * 16u;\r
\r
    var mat: Material;\r
    mat.albedo = vec3f(\r
        materials[baseIndex],\r
        materials[baseIndex + 1u],\r
        materials[baseIndex + 2u]\r
    );\r
\r
    mat.metalness = materials[baseIndex + 3u];\r
    mat.usePerlinMetalness = materials[baseIndex + 4u];\r
    mat.roughness = materials[baseIndex + 5u];\r
    mat.usePerlinRoughness = materials[baseIndex + 6u];\r
    mat.perlinFreq = materials[baseIndex + 7u];\r
\r
    mat.useAlbedoTexture = materials[baseIndex + 8u];\r
    mat.useMetalnessTexture = materials[baseIndex + 9u];\r
    mat.useRoughnessTexture = materials[baseIndex + 10u];\r
    mat.useNormalTexture = materials[baseIndex + 11u];\r
\r
    mat.textureIndex = materials[baseIndex + 12u];\r
\r
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
fn rayTraceOnce(ray: Ray, hit: ptr<function, Hit>, maxDist: f32, shadow: bool) -> bool\r
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
            if (t > maxDist)\r
            {\r
                continue;\r
            }\r
\r
            if (shadow)\r
            {\r
                return true; // If we are just checking for shadow ray, we can return immediately on first hit\r
            }\r
\r
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
                let uv0 = getUV(indices[i * 3u + 0u]);\r
                let uv1 = getUV(indices[i * 3u + 1u]);\r
                let uv2 = getUV(indices[i * 3u + 2u]);\r
                let interpolatedUV = uv0 * (1.0 - barycentricCoords.y - barycentricCoords.z) + uv1 * barycentricCoords.y + uv2 * barycentricCoords.z;\r
            \r
                (*hit).triIndex = i;\r
                (*hit).barycentricCoords = barycentricCoords;\r
                (*hit).distance = t;\r
                (*hit).normalAtHit = interpolatedNormal;\r
                (*hit).uvAtHit = interpolatedUV;\r
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
fn computeMicrofacetBRDF(hitPos: vec3f, normal: vec3f, material: Material, uv: vec2f) -> vec3f\r
{\r
    var albedo = material.albedo;\r
    if (material.useAlbedoTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        albedo = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4, 2.0).rgb;\r
    }\r
\r
    var alphap = material.roughness;\r
    if (material.usePerlinRoughness > 0.5)\r
    {\r
        let perlinRoughness = fbmPerlin2D(uv * 5.0, material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        alphap = clamp(perlinRoughness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useRoughnessTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        alphap = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 2, 2.0).r;\r
    }\r
    alphap = max(alphap, 0.001);\r
    \r
    var metalness = material.metalness;\r
    if (material.usePerlinMetalness > 0.5)\r
    {\r
        // Slight offset from UVS of perlin roughness to avoid correlation\r
        let perlinMetalness = fbmPerlin2D(uv * 5.0 + vec2f(5.2, 1.3), material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        metalness = clamp(perlinMetalness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useMetalnessTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        metalness = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 1, 2.0).r;\r
    }\r
    \r
    let ka = 0.1;\r
    var n = normalize(normal);\r
    let pi = 3.14159265359;\r
\r
    var totalColor = ka * albedo * (1.0 - metalness); // Prepare a small ambient term\r
\r
    for (var i = 0; i < 3; i = i + 1)\r
    {\r
        if (uniforms.lights[i].enabled < 0.5)\r
        {\r
            continue;\r
        }\r
\r
        let toLight = uniforms.lights[i].position - hitPos;\r
        let lightDistance = length(toLight);\r
        let wi = normalize(toLight);\r
\r
        let toCamera = uniforms.cameraPosition - hitPos;\r
        let wo = normalize(toCamera);\r
\r
        let wh = normalize(wi + wo);\r
\r
        // Dot products\r
        let NdotV = max(dot(n, wo), 0.0001);\r
        let NdotL = max(dot(n, wi), 0.0001);\r
        let NdotH = max(dot(n, wh), 0.0);\r
        let LdotH = max(dot(wi, wh), 0.0);\r
\r
        // Check if we are in the cone \r
        var lightDir = normalize(uniforms.lights[i].direction);\r
        var cosAngle = dot(-wi, lightDir);\r
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
        let inShadow = rayTraceOnce(shadowRay, &shadowHit, lightDistance, true);\r
    \r
        // If in shadow (and we find blocker)\r
        if (inShadow && shadowHit.distance < lightDistance)\r
        {\r
            continue;\r
        }\r
\r
        let fade = smoothstep(cos(uniforms.lights[i].coneAngle), cos(uniforms.lights[i].coneAngle) + 0.05, cosAngle);\r
\r
\r
        // Fresnel term (schlick's approximation)\r
        let F0 = mix(vec3(0.04), albedo, metalness);\r
        let F = F0 + (1.0 - F0) * pow(1.0 - LdotH, 5.0);\r
\r
        // f = fd + fs\r
        // fd = lambert BRDF\r
        // fs = microfacet BRDF = DFG term\r
\r
        // DIFFUSE\r
        let lambert = albedo / pi;\r
        let kd = (1.0 - F) * (1.0 - metalness);\r
        let fd = kd * lambert;\r
\r
        // SPECULAR\r
\r
        // Trowbridge-Reitz Distribution\r
        let D = (alphap * alphap) / (pi * pow((NdotH * NdotH) * (alphap * alphap - 1.0) + 1.0, 2.0));\r
\r
        // Geometry term (GGX)\r
        let K = (alphap) * sqrt(2.0 / pi);\r
        let G_schlick_wo = NdotV / (NdotV * (1.0 - K) + K);\r
        let G_schlick_wi = NdotL / (NdotL * (1.0 - K) + K);\r
        let G = G_schlick_wo * G_schlick_wi;\r
\r
        let EPSILON = 0.0001;\r
        let fs = (D * F * G) / (4.0 * NdotL * NdotV + EPSILON);\r
\r
        let f = fd + fs;\r
\r
        let lightAttenuation = 1.0 / (uniforms.a_c + uniforms.a_l * lightDistance + uniforms.a_q * lightDistance * lightDistance);\r
        let radiance = uniforms.lights[i].intensity * uniforms.lights[i].color * lightAttenuation;\r
\r
        totalColor = totalColor + f * radiance * NdotL * fade;\r
    }\r
\r
    return totalColor;\r
} \r
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
        let inShadow = rayTraceOnce(shadowRay, &shadowHit, lightDistance, true);\r
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
        if (rayTraceOnce(ray, &hit, maxDistance, false))\r
        {\r
            let hitPos = getHitPosition(ray, hit.distance);\r
            let material = getMaterial(hit.triIndex);\r
            //color = computeLambertShading(hitPos, hit.normalAtHit, material.albedo);\r
            color = computeMicrofacetBRDF(hitPos, hit.normalAtHit, material, hit.uvAtHit);\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 1u)\r
    {\r
        if (rayTraceOnce(ray, &hit, maxDistance, false))\r
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
        if (rayTraceOnce(ray, &hit, maxDistance, false))\r
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
// ============================== //\r
//      NOISE IMPLEMENTATION      //\r
// ============================== //\r
const PERM = array<i32, 256>( \r
    151,160,137,91,90,15,\r
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,\r
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,\r
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,\r
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,\r
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,\r
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,\r
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,\r
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,\r
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,\r
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,\r
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,\r
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180\r
);\r
\r
// ============================== //\r
fn fade(t: f32) -> f32\r
{\r
    return t * t * t *( t * (t * 6.0 - 15.0) + 10.0);\r
}\r
\r
// ============================== //\r
fn lerp(t: f32, a: f32, b: f32) -> f32\r
{\r
    return a + t * (b - a);\r
}\r
\r
// ============================== //\r
fn grad(hash: i32, x: f32, y: f32, z: f32) -> f32\r
{\r
    let h: i32 = hash & 15;\r
    var u: f32 = y;\r
    if (h < 8) {\r
        u = x;\r
    }\r
    \r
    var v: f32 = y;\r
    if (h >= 4)\r
    {\r
        if (h == 12 || h == 14) {\r
            v = x;\r
        }\r
        else {\r
            v = z;\r
        }\r
    }\r
\r
    var t1 = -u;\r
    if ((h & 1) == 0) {\r
        t1 = u;\r
    }\r
\r
    var t2 = -v;\r
    if ((h & 2) == 0) {\r
        t2 = v;\r
    }\r
\r
    return (t1 + t2);\r
}\r
\r
// ============================== //\r
fn perlinNoise2D(P: vec2f, freq: f32, amp: f32) -> f32\r
{\r
    let X: i32 = i32(floor(P.x * freq)) & 255;\r
    let Y: i32 = i32(floor(P.y * freq)) & 255;\r
\r
    let relx: f32 = P.x * freq - floor(P.x * freq);\r
    let rely: f32 = P.y * freq - floor(P.y * freq);\r
\r
    let u: f32 = fade(relx);\r
    let v: f32 = fade(rely);\r
\r
    let A: i32 = PERM[X] + Y;\r
    let AA: i32 = PERM[A];\r
    let AB: i32 = PERM[A + 1];\r
    let B: i32 = PERM[X + 1] + Y;\r
    let BA: i32 = PERM[B];\r
    let BB: i32 = PERM[B + 1];\r
\r
    return lerp(\r
        v, \r
        lerp(u, grad(PERM[AA], relx, rely, 0.0), grad(PERM[BA], relx - 1.0, rely, 0.0)), \r
        lerp(u, grad(PERM[AB], relx, rely - 1.0, 0.0), grad(PERM[BB], relx - 1.0, rely - 1.0, 0.0))\r
    ) * amp;\r
}\r
\r
// ============================== //\r
fn perlinNoise3D(P: vec3f, freq: f32, amp: f32) -> f32\r
{\r
    let X: i32 = i32(floor(P.x * freq)) & 255;\r
    let Y: i32 = i32(floor(P.y * freq)) & 255;\r
    let Z: i32 = i32(floor(P.z * freq)) & 255;\r
\r
    let relx: f32 = P.x * freq - floor(P.x * freq);\r
    let rely: f32 = P.y * freq - floor(P.y * freq);\r
    let relz: f32 = P.z * freq - floor(P.z * freq);\r
\r
    let u : f32 = fade(relx);\r
    let v : f32 = fade(rely);\r
    let w : f32 = fade(relz);\r
\r
    let A: i32 = PERM[X] + Y;\r
    let AA: i32 = PERM[A] + Z;\r
    let AB: i32 = PERM[A + 1] + Z;\r
\r
    let B: i32 = PERM[X + 1] + Y;\r
    let BA: i32 = PERM[B] + Z;\r
    let BB: i32 = PERM[B + 1] + Z;\r
\r
    return lerp(\r
        w, \r
        lerp(\r
            v,\r
            lerp(u, grad(PERM[AA], relx, rely, relz), grad(PERM[BA], relx - 1.0, rely, relz)),\r
            lerp(u, grad(PERM[AB], relx, rely - 1.0, relz), grad(PERM[BB], relx - 1.0, rely - 1.0, relz))\r
        ),\r
        lerp(\r
            v,\r
            lerp(u, grad(PERM[AA + 1], relx, rely, relz - 1.0), grad(PERM[BA + 1], relx - 1.0, rely, relz - 1.0)),\r
            lerp(u, grad(PERM[AB + 1], relx, rely - 1.0, relz - 1.0), grad(PERM[BB + 1], relx - 1.0, rely - 1.0, relz - 1.0))\r
        )\r
    ) * amp;\r
}\r
\r
// ============================== //\r
fn fbmPerlin2D(P: vec2f, base_freq: f32, base_amp: f32, octaves: i32, freq_mult: f32, amp_mult: f32) -> f32\r
{\r
    var total: f32 = 0.0;\r
    var f: f32 = base_freq;\r
    var a: f32 = base_amp;\r
\r
    for (var i = 0; i < octaves; i++)\r
    {\r
        total = total + perlinNoise2D(P, f, a);\r
        f = f * freq_mult;\r
        a = a * amp_mult;\r
    }\r
\r
    return total;\r
}`,zf=`struct SpotLight\r
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
}`,Vf=`struct Material {\r
    albedo : vec3<f32>,\r
    metalness : f32,\r
\r
    usePerlinMetalness : f32,\r
    roughness : f32,\r
    usePerlinRoughness : f32,\r
    perlinFreq : f32,\r
\r
    useAlbedoTexture : f32,\r
    useMetalnessTexture : f32,\r
    useRoughnessTexture : f32,\r
    useNormalTexture : f32,\r
\r
    textureIndex: f32,\r
    _pad0: f32,\r
    _pad1: f32,\r
    _pad2: f32,\r
}; // Total: 64  bytes\r
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
    cameraPosition: vec3f,\r
    _pad0: f32,\r
\r
    a_c: f32,\r
    a_l: f32,\r
    a_q: f32,\r
    _pad2: f32,\r
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
\r
@group(1) @binding(0)\r
var<uniform> material : Material;\r
@group(1) @binding(1)\r
var materialSampler: sampler;\r
@group(1) @binding(2)\r
var albedoTexture: texture_2d<f32>;\r
@group(1) @binding(3)\r
var metalnessTexture: texture_2d<f32>;\r
@group(1) @binding(4)\r
var roughnessTexture: texture_2d<f32>;\r
@group(1) @binding(5)\r
var normalTexture: texture_2d<f32>;\r
\r
// ============================== //\r
@fragment\r
fn fs(input: VertexOutput) -> @location(0) vec4f {\r
    \r
    // var totalColor = lambertShading(input);\r
    var totalColor = microfacetBRDF(input);\r
\r
    return vec4f(totalColor, 1.0);\r
}\r
\r
// ============================== //\r
fn lambertShading(input: VertexOutput) -> vec3f\r
{\r
    var albedo = material.albedo;\r
\r
    let ka = 0.1;\r
    var n = normalize(input.normal);\r
\r
    var totalColor = ka * albedo;\r
\r
    for (var i = 0; i < 3; i = i + 1)\r
    {\r
        if (uniforms.lights[i].enabled < 0.5)\r
        {   \r
            continue;\r
        }\r
\r
        var toLight = uniforms.lights[i].position - input.position;\r
        var lightDistance = length(toLight);\r
        var wi = normalize(toLight);\r
        \r
        // Check if we are in the cone \r
        var lightDir = normalize(uniforms.lights[i].direction);\r
        var cosAngle = dot(-wi, lightDir);\r
        if (cosAngle < cos(uniforms.lights[i].coneAngle)) \r
        {\r
            continue;\r
        }\r
\r
        let NdotL = max(dot(n, wi), 0.0);\r
        let lightAttenuation = 1.0 / (uniforms.a_c + uniforms.a_l * lightDistance + uniforms.a_q * lightDistance * lightDistance);\r
        let diffuse = NdotL * lightAttenuation * uniforms.lights[i].intensity * uniforms.lights[i].color * albedo;\r
\r
        totalColor = totalColor + diffuse;\r
    }\r
\r
    return totalColor;\r
}\r
\r
// ============================== //\r
fn microfacetBRDF(input: VertexOutput) -> vec3f\r
{\r
    // Trowbridge-Reitz (GGX) normal distribution function\r
    var albedo = material.albedo;\r
    if (material.useAlbedoTexture > 0.5)\r
    {\r
        albedo = textureSample(albedoTexture, materialSampler, input.uv).rgb;\r
    }\r
\r
    var alphap = material.roughness;\r
    if (material.usePerlinRoughness > 0.5)\r
    {\r
        let perlinRoughness = fbmPerlin2D(input.uv * 5.0, material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        alphap = clamp(perlinRoughness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useRoughnessTexture > 0.5)\r
    {\r
        alphap = textureSample(roughnessTexture, materialSampler, input.uv).r;\r
    }\r
    alphap = max(alphap, 0.001);\r
\r
    var metalness = material.metalness;\r
    if (material.usePerlinMetalness > 0.5)\r
    {\r
        // Slight offset from UVS of perlin roughness to avoid correlation\r
        let perlinMetalness = fbmPerlin2D(input.uv * 5.0 + vec2f(5.2, 1.3), material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        metalness = clamp(perlinMetalness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useMetalnessTexture > 0.5)\r
    {\r
        metalness = textureSample(metalnessTexture, materialSampler, input.uv).r;\r
    }\r
\r
    let ka = 0.1;\r
    var n = normalize(input.normal);\r
\r
    let pi = 3.14159265359;\r
\r
    var totalColor = ka * albedo * (1.0 - metalness); // Prepare a small ambient term\r
\r
    for (var i = 0; i < 3; i = i + 1)\r
    {\r
        if (uniforms.lights[i].enabled < 0.5)\r
        {\r
            continue;\r
        }\r
\r
        let toLight = uniforms.lights[i].position - input.position;\r
        let lightDistance = length(toLight);\r
        let wi = normalize(toLight);\r
\r
        let toCamera = uniforms.cameraPosition - input.position;\r
        let wo = normalize(toCamera);\r
\r
        let wh = normalize(wi + wo);\r
\r
        // Dot products\r
        let NdotV = max(dot(n, wo), 0.0001);\r
        let NdotL = max(dot(n, wi), 0.0001);\r
        let NdotH = max(dot(n, wh), 0.0);\r
        let LdotH = max(dot(wi, wh), 0.0);\r
\r
        // Check if we are in the cone \r
        var lightDir = normalize(uniforms.lights[i].direction);\r
        var cosAngle = dot(-wi, lightDir);\r
        if (cosAngle < cos(uniforms.lights[i].coneAngle)) \r
        {\r
            continue;\r
        }\r
\r
        // Fade term (we fade as we approach the end of the cone\r
        let fade = smoothstep(cos(uniforms.lights[i].coneAngle), cos(uniforms.lights[i].coneAngle) + 0.05, cosAngle);\r
\r
        // Fresnel term (schlick's approximation)\r
        let F0 = mix(vec3(0.04), albedo, metalness);\r
        let F = F0 + (1.0 - F0) * pow(1.0 - LdotH, 5.0);\r
\r
        // f = fd + fs\r
        // fd = lambert BRDF\r
        // fs = microfacet BRDF = DFG term\r
\r
        // DIFFUSE\r
        let lambert = albedo / pi;\r
        let kd = (1.0 - F) * (1.0 - metalness);\r
        let fd = kd * lambert;\r
\r
        // SPECULAR\r
\r
        // Trowbridge-Reitz Distribution\r
        let D = (alphap * alphap) / (pi * pow((NdotH * NdotH) * (alphap * alphap - 1.0) + 1.0, 2.0));\r
\r
        // Geometry term (GGX)\r
        let K = (alphap) * sqrt(2.0 / pi);\r
        let G_schlick_wo = NdotV / (NdotV * (1.0 - K) + K);\r
        let G_schlick_wi = NdotL / (NdotL * (1.0 - K) + K);\r
        let G = G_schlick_wo * G_schlick_wi;\r
\r
        let EPSILON = 0.0001;\r
        let fs = (D * F * G) / (4.0 * NdotL * NdotV + EPSILON);\r
\r
        let f = fd + fs;\r
\r
        let lightAttenuation = 1.0 / (uniforms.a_c + uniforms.a_l * lightDistance + uniforms.a_q * lightDistance * lightDistance);\r
        let radiance = uniforms.lights[i].intensity * uniforms.lights[i].color * lightAttenuation;\r
\r
        totalColor = totalColor + f * radiance * NdotL * fade;\r
    }\r
\r
    return totalColor;\r
}\r
\r
// ============================== //\r
//      NOISE IMPLEMENTATION      //\r
// ============================== //\r
const PERM = array<i32, 256>( \r
    151,160,137,91,90,15,\r
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,\r
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,\r
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,\r
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,\r
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,\r
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,\r
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,\r
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,\r
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,\r
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,\r
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,\r
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180\r
);\r
\r
// ============================== //\r
fn fade(t: f32) -> f32\r
{\r
    return t * t * t *( t * (t * 6.0 - 15.0) + 10.0);\r
}\r
\r
// ============================== //\r
fn lerp(t: f32, a: f32, b: f32) -> f32\r
{\r
    return a + t * (b - a);\r
}\r
\r
// ============================== //\r
fn grad(hash: i32, x: f32, y: f32, z: f32) -> f32\r
{\r
    let h: i32 = hash & 15;\r
    var u: f32 = y;\r
    if (h < 8) {\r
        u = x;\r
    }\r
    \r
    var v: f32 = y;\r
    if (h >= 4)\r
    {\r
        if (h == 12 || h == 14) {\r
            v = x;\r
        }\r
        else {\r
            v = z;\r
        }\r
    }\r
\r
    var t1 = -u;\r
    if ((h & 1) == 0) {\r
        t1 = u;\r
    }\r
\r
    var t2 = -v;\r
    if ((h & 2) == 0) {\r
        t2 = v;\r
    }\r
\r
    return (t1 + t2);\r
}\r
\r
// ============================== //\r
fn perlinNoise2D(P: vec2f, freq: f32, amp: f32) -> f32\r
{\r
    let X: i32 = i32(floor(P.x * freq)) & 255;\r
    let Y: i32 = i32(floor(P.y * freq)) & 255;\r
\r
    let relx: f32 = P.x * freq - floor(P.x * freq);\r
    let rely: f32 = P.y * freq - floor(P.y * freq);\r
\r
    let u: f32 = fade(relx);\r
    let v: f32 = fade(rely);\r
\r
    let A: i32 = PERM[X] + Y;\r
    let AA: i32 = PERM[A];\r
    let AB: i32 = PERM[A + 1];\r
    let B: i32 = PERM[X + 1] + Y;\r
    let BA: i32 = PERM[B];\r
    let BB: i32 = PERM[B + 1];\r
\r
    return lerp(\r
        v, \r
        lerp(u, grad(PERM[AA], relx, rely, 0.0), grad(PERM[BA], relx - 1.0, rely, 0.0)), \r
        lerp(u, grad(PERM[AB], relx, rely - 1.0, 0.0), grad(PERM[BB], relx - 1.0, rely - 1.0, 0.0))\r
    ) * amp;\r
}\r
\r
// ============================== //\r
fn perlinNoise3D(P: vec3f, freq: f32, amp: f32) -> f32\r
{\r
    let X: i32 = i32(floor(P.x * freq)) & 255;\r
    let Y: i32 = i32(floor(P.y * freq)) & 255;\r
    let Z: i32 = i32(floor(P.z * freq)) & 255;\r
\r
    let relx: f32 = P.x * freq - floor(P.x * freq);\r
    let rely: f32 = P.y * freq - floor(P.y * freq);\r
    let relz: f32 = P.z * freq - floor(P.z * freq);\r
\r
    let u : f32 = fade(relx);\r
    let v : f32 = fade(rely);\r
    let w : f32 = fade(relz);\r
\r
    let A: i32 = PERM[X] + Y;\r
    let AA: i32 = PERM[A] + Z;\r
    let AB: i32 = PERM[A + 1] + Z;\r
\r
    let B: i32 = PERM[X + 1] + Y;\r
    let BA: i32 = PERM[B] + Z;\r
    let BB: i32 = PERM[B + 1] + Z;\r
\r
    return lerp(\r
        w, \r
        lerp(\r
            v,\r
            lerp(u, grad(PERM[AA], relx, rely, relz), grad(PERM[BA], relx - 1.0, rely, relz)),\r
            lerp(u, grad(PERM[AB], relx, rely - 1.0, relz), grad(PERM[BB], relx - 1.0, rely - 1.0, relz))\r
        ),\r
        lerp(\r
            v,\r
            lerp(u, grad(PERM[AA + 1], relx, rely, relz - 1.0), grad(PERM[BA + 1], relx - 1.0, rely, relz - 1.0)),\r
            lerp(u, grad(PERM[AB + 1], relx, rely - 1.0, relz - 1.0), grad(PERM[BB + 1], relx - 1.0, rely - 1.0, relz - 1.0))\r
        )\r
    ) * amp;\r
}\r
\r
// ============================== //\r
fn fbmPerlin2D(P: vec2f, base_freq: f32, base_amp: f32, octaves: i32, freq_mult: f32, amp_mult: f32) -> f32\r
{\r
    var total: f32 = 0.0;\r
    var f: f32 = base_freq;\r
    var a: f32 = base_amp;\r
\r
    for (var i = 0; i < octaves; i++)\r
    {\r
        total = total + perlinNoise2D(P, f, a);\r
        f = f * freq_mult;\r
        a = a * amp_mult;\r
    }\r
\r
    return total;\r
}`;var Ue=(e=>(e[e.Albedo=0]="Albedo",e[e.Metalness=1]="Metalness",e[e.Roughness=2]="Roughness",e[e.Normal=3]="Normal",e))(Ue||{});function jf(e){return new Promise((t,r)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=i=>r(i),n.src=e})}function Nf(e,t,r="texture"){const n=e.createTexture({label:r,size:{width:t.width,height:t.height,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return e.queue.copyExternalImageToTexture({source:t},{texture:n},[t.width,t.height]),n}function kf(e,t,r){const n=document.createElement("canvas");n.width=t,n.height=r;const i=n.getContext("2d");if(!i)return console.error("Failed to get 2D context for image resizing."),e;i.drawImage(e,0,0,t,r);const s=new Image;return s.src=n.toDataURL(),s}function lr(e,t=256,r=32){const n=document.createElement("canvas");n.width=t,n.height=t;const i=n.getContext("2d"),s=t/r;for(let a=0;a<r;a++)for(let l=0;l<r;l++)i.fillStyle=(l+a)%2===0?"#FF00FF":"#000000",i.fillRect(l*s,a*s,s,s);const o=e.createTexture({label:"placeholder-texture",size:[t,t],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return e.queue.copyExternalImageToTexture({source:n},{texture:o},[t,t]),o}function gs(e=256,t=32){const r=document.createElement("canvas");r.width=e,r.height=e;const n=r.getContext("2d"),i=e/t;for(let s=0;s<t;s++)for(let o=0;o<t;o++)n.fillStyle=(o+s)%2===0?"#FF00FF":"#000000",n.fillRect(o*i,s*i,i,i);return r}const qf="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg";async function Hf(e){const t=new $f;return await t.initialize(e),t}const vs=464,Dn=64,bs=288,Wf=16;class $f{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=hn();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=vi(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;useRaytracingCheckBox=null;rayTracingModeSelect=null;rayTracingMode=0;sphereResolution=8;sphereResolutionSlider=null;spheresInfo;activeContextMenu=null;constructor(){bi(this.camera,278,500,-700),mn(this.camera,0,-.3),xi(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const t={position:q(500,500,0),intensity:1e3,direction:q(-.5,-.9,1),coneAngle:Math.PI/6,color:q(.85,.1,.1),enabled:!0};this.lights.push(t);const r={position:q(50,500,0),intensity:1e3,direction:q(.5,-.9,1),coneAngle:Math.PI/6,color:q(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:q(275,255,0),intensity:1500,direction:q(0,0,1),coneAngle:Math.PI/6,color:q(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const t=tr();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked});const r=document.createElement("label");r.htmlFor="useRaytracingCheckbox",r.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(r),this.sphereResolutionSlider=document.createElement("input"),this.sphereResolutionSlider.type="range",this.sphereResolutionSlider.min="8",this.sphereResolutionSlider.max="64",this.sphereResolutionSlider.step="1",this.sphereResolutionSlider.value=this.sphereResolution.toString(),this.sphereResolutionSlider.tabIndex=-1,this.sphereResolutionSlider.addEventListener("input",()=>{this.sphereResolution=parseInt(this.sphereResolutionSlider.value),this.startRendering()});const n=document.createElement("label");n.htmlFor="sphereResolutionSlider",n.textContent=" Sphere Resolution",t.appendChild(document.createElement("br")),t.appendChild(this.sphereResolutionSlider),t.appendChild(n),this.lights.forEach((c,u)=>{const h=document.createElement("button");h.style.cssText="background-color: #444444; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;",h.textContent=`Edit Light ${u+1}`,h.tabIndex=-1,h.addEventListener("click",p=>{p.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const d={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Ic(d,this.lights[u],`Edit Light ${u+1}`,v=>{this.lights[u]=v},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)}),t.appendChild(document.createElement("br")),t.appendChild(h)});const i=document.createElement("label");i.htmlFor="acSlider",i.textContent=`Constant (ac): ${this.a_c.toFixed(2)}`,t.appendChild(document.createElement("br")),t.appendChild(i);const s=document.createElement("input");s.type="range",s.min="0.0",s.max="2.0",s.step="0.01",s.value=this.a_c.toString(),s.tabIndex=-1,s.addEventListener("input",()=>{this.a_c=parseFloat(s.value),i.textContent=`Constant (ac): ${this.a_c.toFixed(2)}`}),t.appendChild(s);const o=document.createElement("label");o.htmlFor="alSlider",o.textContent=`Linear (al): ${this.a_l.toFixed(3)}`,t.appendChild(document.createElement("br")),t.appendChild(o);const a=document.createElement("input");a.type="range",a.min="0.0",a.max="0.5",a.step="0.001",a.value=this.a_l.toString(),a.tabIndex=-1,a.addEventListener("input",()=>{this.a_l=parseFloat(a.value),o.textContent=`Linear (al): ${this.a_l.toFixed(3)}`}),t.appendChild(a);const l=document.createElement("label");l.htmlFor="aqSlider",l.textContent=`Quadratic (aq): ${this.a_q.toFixed(4)}`,t.appendChild(document.createElement("br")),t.appendChild(l);const f=document.createElement("input");f.type="range",f.min="0.0",f.max="0.1",f.step="0.0001",f.value=this.a_q.toString(),f.tabIndex=-1,f.addEventListener("input",()=>{this.a_q=parseFloat(f.value),l.textContent=`Quadratic (aq): ${this.a_q.toFixed(4)}`}),t.appendChild(f)}async initialize(t){if(this.canvas=t,this.device=await Rt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Ot(this.device,Gf,Lf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Ot(this.device,zf,Vf,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"})}initializeBuffers(){if(this.device===null)return;const t=lr(this.device),r=this.spheresInfo?.sphereMaterials||[],n=_c(r,this.sphereResolution);this.normalObjects.perMaterialTopologies=n,this.spheresInfo=n.additionalInfo;const i=n.materials.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[];for(let x=0;x<i;x++){this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+x,size:Dn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const T=new ArrayBuffer(Dn),O=new Float32Array(T);O.set(n.materials[x].albedo,0),O[3]=n.materials[x].metalness,O[4]=n.materials[x].usePerlinMetalness?1:0,O[5]=n.materials[x].roughness,O[6]=n.materials[x].usePerlinRoughness?1:0,O[7]=n.materials[x].perlinFreq,O[8]=n.materials[x].useAlbedoTexture?1:0,O[9]=n.materials[x].useMetalnessTexture?1:0,O[10]=n.materials[x].useRoughnessTexture?1:0,O[11]=n.materials[x].useNormalTexture?1:0,O[12]=n.materials[x].textureIndex,this.device.queue.writeBuffer(this.normalObjects.materialUniforms[x],0,T),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+x,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[x]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.materials[x].albedoGPUTexture?n.materials[x].albedoGPUTexture.createView():t.createView()},{binding:3,resource:n.materials[x].metalnessGPUTexture?n.materials[x].metalnessGPUTexture.createView():t.createView()},{binding:4,resource:n.materials[x].roughnessGPUTexture?n.materials[x].roughnessGPUTexture.createView():t.createView()},{binding:5,resource:n.materials[x].normalGPUTexture?n.materials[x].normalGPUTexture.createView():t.createView()}]})),this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+x,size:n.pmTopologies[x].vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[x],0,n.pmTopologies[x].vertexData),this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+x,size:n.pmTopologies[x].indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[x],0,n.pmTopologies[x].indexData),this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+x,size:n.pmTopologies[x].normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[x],0,n.pmTopologies[x].normalData),this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+x,size:n.pmTopologies[x].uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[x],0,n.pmTopologies[x].uvData)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:vs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=[],o=[],a=[],l=[],f=[];let c=0;for(let x=0;x<i;x++){let T=n.pmTopologies[x];s.push(...T.vertexData),o.push(...T.normalData),a.push(...T.uvData);for(let O of T.indexData)l.push(O+c);c+=T.vertexData.length/3;for(let O=0;O<T.indexData.length/3;O++)f.push(x)}const u=new Float32Array(s),h=new Float32Array(o),p=new Float32Array(a),d=new Uint32Array(l),v=new Uint32Array(f);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:bs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:u.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,u),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,h),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:p.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,p),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,d),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:v.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,v),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const y=[];for(let x of this.normalObjects.perMaterialTopologies.materials)y.push(...x.albedo),y.push(x.metalness),y.push(x.usePerlinMetalness?1:0),y.push(x.roughness),y.push(x.usePerlinRoughness?1:0),y.push(x.perlinFreq),y.push(x.useAlbedoTexture?1:0),y.push(x.useMetalnessTexture?1:0),y.push(x.useRoughnessTexture?1:0),y.push(x.useNormalTexture?1:0),y.push(x.textureIndex),y.push(0),y.push(0),y.push(0);const w=new Float32Array(y);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:w.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,w);const b=4,P=3,S=256,M=256;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[S,M,b*P],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const _=gs(256,32);for(let x=0;x<P;x++){const T=this.spheresInfo?.sphereMaterials[x].albedoImage?this.spheresInfo.sphereMaterials[x].albedoImage:_,O=this.spheresInfo?.sphereMaterials[x].metalnessImage?this.spheresInfo.sphereMaterials[x].metalnessImage:_,z=this.spheresInfo?.sphereMaterials[x].roughnessImage?this.spheresInfo.sphereMaterials[x].roughnessImage:_,j=this.spheresInfo?.sphereMaterials[x].normalImage?this.spheresInfo.sphereMaterials[x].normalImage:_;this.device.queue.copyExternalImageToTexture({source:T},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*b]},[S,M]),this.device.queue.copyExternalImageToTexture({source:O},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*b+1]},[S,M]),this.device.queue.copyExternalImageToTexture({source:z},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*b+2]},[S,M]),this.device.queue.copyExternalImageToTexture({source:j},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*b+3]},[S,M])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=t=>{if(this.isMouseDown=!1,this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(t.clientX>=n.left&&t.clientX<=n.right&&t.clientY>=n.top&&t.clientY<=n.bottom)return}let r=this.rayCastOnSpheres(t.clientX,t.clientY);r!==-1&&this.spawnMaterialContextMenu(r,t.clientX,t.clientY)};onMouseMove=t=>{if(!this.isMouseDown)return;const r=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY,i=.05;Fe(this.camera,r*i,-n*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(t!==0||r!==0||n!==0)&&Si(this.camera,-n,t,r),this.keysPressed.has("arrowleft")&&Fe(this.camera,-1,0),this.keysPressed.has("arrowright")&&Fe(this.camera,1,0),this.keysPressed.has("arrowup")&&Fe(this.camera,0,1),this.keysPressed.has("arrowdown")&&Fe(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Ue.Albedo,qf),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Ue.Albedo,"textures/herringbone_brick_03_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Ue.Albedo,"textures/oak_veneer_01_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Ue.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Ue.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Ue.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Ue.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Ue.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Ue.Roughness,"textures/roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(bs),r=new Float32Array(t),n=new Uint32Array(t);r.set(Bi(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracingMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],o=24+i*12;r.set(s.position,o),r[o+3]=s.intensity,r.set(s.direction,o+4),r[o+7]=s.coneAngle,r.set(s.color,o+8),r[o+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new ArrayBuffer(vs),r=new Float32Array(t);r.set(this.camera.modelMatrix,0),r.set(this.camera.viewMatrix,16),r.set(this.camera.projectionMatrix,32),r.set(this.camera.position,48),r[52]=this.a_c,r[53]=this.a_l,r[54]=this.a_q,r[55]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const i=this.lights[n],s=56+n*12;r.set(i.position,s),r[s+3]=i.intensity,r.set(i.direction,s+4),r[s+7]=i.coneAngle,r.set(i.color,s+8),r[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);if(this.useRaytracing)u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.setBindGroup(1,this.rayTracerObjects.materialBindGroup),u.draw(6);else{u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.perMaterialTopologies.materials.length;d++)u.setBindGroup(1,this.normalObjects.materialBindGroups[d]),u.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),u.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),u.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),u.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),u.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0)}u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const p=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${p.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),yi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox?.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.rayTracingModeSelect?.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),this.sphereResolutionSlider?.removeEventListener("input",()=>{this.sphereResolution=parseInt(this.sphereResolutionSlider.value),this.startRendering()}),this.removeInputHandlers(),dn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(t,r){if(t<0||t>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const n=r.name,i=this.normalObjects.perMaterialTopologies.materials.findIndex(c=>c.name===n)||-1;if(i===-1)return;this.spheresInfo.sphereMaterials[t]=r,this.normalObjects.perMaterialTopologies.materials[i]=r;const s=this.spheresInfo.sphereMaterialIndices[t],o=new ArrayBuffer(Dn),a=new Float32Array(o);a.set(r.albedo,0),a[3]=r.metalness,a[4]=r.usePerlinMetalness?1:0,a[5]=r.roughness,a[6]=r.usePerlinRoughness?1:0,a[7]=r.perlinFreq,a[8]=r.useAlbedoTexture?1:0,a[9]=r.useMetalnessTexture?1:0,a[10]=r.useRoughnessTexture?1:0,a[11]=r.useNormalTexture?1:0,a[12]=r.textureIndex;let l=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(l,0,o);const f=s*Wf*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,f,o)}recreateBindGroup(t){const r=t.name,n=this.normalObjects.perMaterialTopologies.materials.findIndex(o=>o.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:t.albedoGPUTexture?t.albedoGPUTexture.createView():lr(this.device).createView()},{binding:3,resource:t.metalnessGPUTexture?t.metalnessGPUTexture.createView():lr(this.device).createView()},{binding:4,resource:t.roughnessGPUTexture?t.roughnessGPUTexture.createView():lr(this.device).createView()},{binding:5,resource:t.normalGPUTexture?t.normalGPUTexture.createView():lr(this.device).createView()}]});this.normalObjects.materialBindGroups[n]=i;var s=t.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return t.albedoTexture;case 1:return t.metalnessTexture;case 2:return t.roughnessTexture;case 3:return t.normalTexture}})()||gs();this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+o]},[256,256])}}rayCastOnSpheres(t,r){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const n=this.spheresInfo.sphereTransforms,i=this.canvas.getBoundingClientRect(),s=t-i.left,o=r-i.top,a=this.canvas.width/i.width,l=this.canvas.height/i.height,f=2*s*a/this.canvas.width-1,c=1-2*o*l/this.canvas.height,u=Tf(this.camera,f,c);let h=-1,p=Number.POSITIVE_INFINITY;for(let d=0;d<n.length;d++){const v=n[d],y=v.translation,w=v.scale[0],b=Mf(this.camera.position,u,y,w);b<=0||b<p&&(p=b,h=d)}return h}spawnMaterialContextMenu(t,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.spheresInfo?.sphereMaterials?.[t];if(!i)return;this.activeContextMenu=Rc({x:r,y:n},i,o=>{this.changeSphereMaterial(t,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(t,r,n){if(!t)return;jf(n).then(s=>{const o=kf(s,256,256),a=Nf(this.device,o);switch(r){case Ue.Albedo:t.albedoTexture=o,t.albedoGPUTexture=a;break;case Ue.Metalness:t.metalnessTexture=o,t.metalnessGPUTexture=a;break;case Ue.Roughness:t.roughnessTexture=o,t.roughnessGPUTexture=a;break;case Ue.Normal:t.normalTexture=o,t.normalGPUTexture=a;break}this.recreateBindGroup(t)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",Ue[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const Yf={class:"flex justify-center items-center w-full h-full"},Qf={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},Xf=["onClick","onMouseenter"],Kf={id:"utils-wrapper",class:"absolute bottom-0 right-0 flex flex-col items-end"},Jf={id:"utils",class:"p-1 bg-gray-700"},Zf=Ua({__name:"App",setup(e){const t=It(null),r=It(null),n=It(!1),i=[Dc,Vc,eu,lu,gu,sf,yf,Cf,Df,Hf],s=i.length,o=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Video","Game","Ray Trace","Transparency","PBR"],a=It(null),l=It(0),f=It(0),c=It(!0);async function u(w){if(!n.value){if(n.value=!0,r.value&&typeof r.value.cleanup=="function"&&(await r.value.cleanup(),r.value=null),t.value){const b=i[w-1];b&&(r.value=await b(t.value))}n.value=!1}}function h(w,b){a.value=w;const P=b.currentTarget,S=P.parentElement;if(S){const M=S.getBoundingClientRect(),_=P.getBoundingClientRect();l.value=_.top-M.top,f.value=_.height}}function p(){a.value=null}const d=Wn(()=>a.value!==null?o[a.value-1]:""),v=Wn(()=>a.value===null?{top:l.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:l.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});function y(){c.value=!c.value}return Js(()=>{Oo(),u(8)}),(w,b)=>(Mn(),Cn("div",Yf,[it("div",Qf,[(Mn(!0),Cn(ot,null,Wa(Ns(s),P=>(Mn(),Cn("button",{key:P,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>u(P),onKeydown:[b[0]||(b[0]=Zi(Ji(()=>{},["prevent"]),["space"])),b[1]||(b[1]=Zi(Ji(()=>{},["prevent"]),["enter"]))],onMouseenter:S=>h(P,S),onMouseleave:p},Fr(P),41,Xf))),128))]),it("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:t,class:"w-[90%] h-full"},null,512),b[2]||(b[2]=it("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),it("div",Kf,[it("button",{onClick:y,class:"m-0 p-0 bg-white text-black flex items-center"},[it("img",{src:fc,class:xr([c.value?"rotate-90":"-rotate-90","w-6 h-6 transition-transform duration-200"])},null,2),xo(" "+Fr(c.value?"Hide":"Show")+" Utils ",1)]),_a(it("pre",Jf,null,512),[[Nl,c.value]])]),it("div",{class:xr(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",a.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:sn(v.value)},Fr(d.value),7)]))}}),eh=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},th=eh(Zf,[["__scopeId","data-v-498c70d2"]]);lc(th).mount("#app");
