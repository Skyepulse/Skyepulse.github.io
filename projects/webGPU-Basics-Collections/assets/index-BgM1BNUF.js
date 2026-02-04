(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},kt=[],at=()=>{},Io=()=>!1,Jn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yr=e=>e.startsWith("onUpdate:"),Re=Object.assign,Qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ao=Object.prototype.hasOwnProperty,ie=(e,t)=>Ao.call(e,t),X=Array.isArray,Ht=e=>Zn(e)==="[object Map]",ms=e=>Zn(e)==="[object Set]",K=e=>typeof e=="function",Pe=e=>typeof e=="string",Ot=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",gs=e=>(Se(e)||K(e))&&K(e.then)&&K(e.catch),vs=Object.prototype.toString,Zn=e=>vs.call(e),Fo=e=>Zn(e).slice(8,-1),bs=e=>Zn(e)==="[object Object]",Xr=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cn=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zo=/-(\w)/g,Ct=er(e=>e.replace(zo,(t,n)=>n?n.toUpperCase():"")),Lo=/\B([A-Z])/g,Et=er(e=>e.replace(Lo,"-$1").toLowerCase()),ys=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=er(e=>e?`on${ys(e)}`:""),Pt=(e,t)=>!Object.is(e,t),pr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Dr=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Go=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pi;const tr=()=>Pi||(Pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nr(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Pe(r)?No(r):nr(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Pe(e)||Se(e))return e}const Vo=/;(?![^(]*\))/g,jo=/:([^]+)/,qo=/\/\*[^]*?\*\//g;function No(e){const t={};return e.replace(qo,"").split(Vo).forEach(n=>{if(n){const r=n.split(jo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function bn(e){let t="";if(Pe(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const r=bn(e[n]);r&&(t+=r+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ko="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ho=$r(ko);function xs(e){return!!e||e===""}const Ss=e=>!!(e&&e.__v_isRef===!0),In=e=>Pe(e)?e:e==null?"":X(e)||Se(e)&&(e.toString===vs||!K(e.toString))?Ss(e)?In(e.value):JSON.stringify(e,ws,2):String(e),ws=(e,t)=>Ss(t)?ws(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[mr(r,s)+" =>"]=i,n),{})}:ms(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>mr(n))}:Ot(t)?mr(t):Se(t)&&!X(t)&&!bs(t)?String(t):t,mr=(e,t="")=>{var n;return Ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Wo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ge,!t&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ge;try{return Ge=this,t()}finally{Ge=n}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function $o(){return Ge}let pe;const gr=new WeakSet;class Bs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gr.has(this)&&(gr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ci(this),Ms(this);const t=pe,n=Xe;pe=this,Xe=!0;try{return this.fn()}finally{Ts(this),pe=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zr(t);this.deps=this.depsTail=void 0,Ci(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ir(this)&&this.run()}get dirty(){return Ir(this)}}let Ps=0,un,fn;function Cs(e,t=!1){if(e.flags|=8,t){e.next=fn,fn=e;return}e.next=un,un=e}function Kr(){Ps++}function Jr(){if(--Ps>0)return;if(fn){let t=fn;for(fn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;un;){let t=un;for(un=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ms(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ts(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Zr(r),Yo(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Ir(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Os(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Os(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yn)||(e.globalVersion=yn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ir(e))))return;e.flags|=2;const t=e.dep,n=pe,r=Xe;pe=e,Xe=!0;try{Ms(e);const i=e.fn(e._value);(t.version===0||Pt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{pe=n,Xe=r,Ts(e),e.flags&=-3}}function Zr(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Zr(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Yo(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const Es=[];function vt(){Es.push(Xe),Xe=!1}function bt(){const e=Es.pop();Xe=e===void 0?!0:e}function Ci(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let yn=0;class Qo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ei{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!Xe||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Qo(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,_s(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=r)}return n}trigger(t){this.version++,yn++,this.notify(t)}notify(t){Kr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jr()}}}function _s(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)_s(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ar=new WeakMap,zt=Symbol(""),Fr=Symbol(""),xn=Symbol("");function Ee(e,t,n){if(Xe&&pe){let r=Ar.get(e);r||Ar.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new ei),i.map=r,i.key=n),i.track()}}function pt(e,t,n,r,i,s){const o=Ar.get(e);if(!o){yn++;return}const a=l=>{l&&l.trigger()};if(Kr(),t==="clear")o.forEach(a);else{const l=X(e),f=l&&Xr(n);if(l&&n==="length"){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h===xn||!Ot(h)&&h>=c)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),f&&a(o.get(xn)),t){case"add":l?f&&a(o.get("length")):(a(o.get(zt)),Ht(e)&&a(o.get(Fr)));break;case"delete":l||(a(o.get(zt)),Ht(e)&&a(o.get(Fr)));break;case"set":Ht(e)&&a(o.get(zt));break}}Jr()}function Gt(e){const t=re(e);return t===e?t:(Ee(t,"iterate",xn),Ye(e)?t:t.map(Me))}function rr(e){return Ee(e=re(e),"iterate",xn),e}const Xo={__proto__:null,[Symbol.iterator](){return vr(this,Symbol.iterator,Me)},concat(...e){return Gt(this).concat(...e.map(t=>X(t)?Gt(t):t))},entries(){return vr(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(Me),arguments)},find(e,t){return ct(this,"find",e,t,Me,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return br(this,"includes",e)},indexOf(...e){return br(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return br(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return nn(this,"pop")},push(...e){return nn(this,"push",e)},reduce(e,...t){return Mi(this,"reduce",e,t)},reduceRight(e,...t){return Mi(this,"reduceRight",e,t)},shift(){return nn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return nn(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return nn(this,"unshift",e)},values(){return vr(this,"values",Me)}};function vr(e,t,n){const r=rr(e),i=r[t]();return r!==e&&!Ye(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Ko=Array.prototype;function ct(e,t,n,r,i,s){const o=rr(e),a=o!==e&&!Ye(e),l=o[t];if(l!==Ko[t]){const u=l.apply(e,s);return a?Me(u):u}let f=n;o!==e&&(a?f=function(u,h){return n.call(this,Me(u),h,e)}:n.length>2&&(f=function(u,h){return n.call(this,u,h,e)}));const c=l.call(o,f,r);return a&&i?i(c):c}function Mi(e,t,n,r){const i=rr(e);let s=n;return i!==e&&(Ye(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Me(a),l,e)}),i[t](s,...r)}function br(e,t,n){const r=re(e);Ee(r,"iterate",xn);const i=r[t](...n);return(i===-1||i===!1)&&ii(n[0])?(n[0]=re(n[0]),r[t](...n)):i}function nn(e,t,n=[]){vt(),Kr();const r=re(e)[t].apply(e,n);return Jr(),bt(),r}const Jo=$r("__proto__,__v_isRef,__isVue"),Rs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ot));function Zo(e){Ot(e)||(e=String(e));const t=re(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Us{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?ca:Fs:s?As:Is).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=X(t);if(!i){let l;if(o&&(l=Xo[n]))return l;if(n==="hasOwnProperty")return Zo}const a=Reflect.get(t,n,_e(t)?t:r);return(Ot(n)?Rs.has(n):Jo(n))||(i||Ee(t,"get",n),s)?a:_e(a)?o&&Xr(n)?a:a.value:Se(a)?i?zs(a):ni(a):a}}class Ds extends Us{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const l=Mt(s);if(!Ye(r)&&!Mt(r)&&(s=re(s),r=re(r)),!X(t)&&_e(s)&&!_e(r))return l?!1:(s.value=r,!0)}const o=X(t)&&Xr(n)?Number(n)<t.length:ie(t,n),a=Reflect.set(t,n,r,_e(t)?t:i);return t===re(i)&&(o?Pt(r,s)&&pt(t,"set",n,r):pt(t,"add",n,r)),a}deleteProperty(t,n){const r=ie(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&pt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ot(n)||!Rs.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",X(t)?"length":zt),Reflect.ownKeys(t)}}class ea extends Us{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ta=new Ds,na=new ea,ra=new Ds(!0);const zr=e=>e,Tn=e=>Reflect.getPrototypeOf(e);function ia(e,t,n){return function(...r){const i=this.__v_raw,s=re(i),o=Ht(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?zr:t?jn:Me;return!t&&Ee(s,"iterate",l?Fr:zt),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:a?[c(u[0]),c(u[1])]:c(u),done:h}},[Symbol.iterator](){return this}}}}function On(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sa(e,t){const n={get(i){const s=this.__v_raw,o=re(s),a=re(i);e||(Pt(i,a)&&Ee(o,"get",i),Ee(o,"get",a));const{has:l}=Tn(o),f=t?zr:e?jn:Me;if(l.call(o,i))return f(s.get(i));if(l.call(o,a))return f(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(re(i),"iterate",zt),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=re(s),a=re(i);return e||(Pt(i,a)&&Ee(o,"has",i),Ee(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=re(a),f=t?zr:e?jn:Me;return!e&&Ee(l,"iterate",zt),a.forEach((c,u)=>i.call(s,f(c),f(u),o))}};return Re(n,e?{add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear")}:{add(i){!t&&!Ye(i)&&!Mt(i)&&(i=re(i));const s=re(this);return Tn(s).has.call(s,i)||(s.add(i),pt(s,"add",i,i)),this},set(i,s){!t&&!Ye(s)&&!Mt(s)&&(s=re(s));const o=re(this),{has:a,get:l}=Tn(o);let f=a.call(o,i);f||(i=re(i),f=a.call(o,i));const c=l.call(o,i);return o.set(i,s),f?Pt(s,c)&&pt(o,"set",i,s):pt(o,"add",i,s),this},delete(i){const s=re(this),{has:o,get:a}=Tn(s);let l=o.call(s,i);l||(i=re(i),l=o.call(s,i)),a&&a.call(s,i);const f=s.delete(i);return l&&pt(s,"delete",i,void 0),f},clear(){const i=re(this),s=i.size!==0,o=i.clear();return s&&pt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ia(i,e,t)}),n}function ti(e,t){const n=sa(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ie(n,i)&&i in r?n:r,i,s)}const oa={get:ti(!1,!1)},aa={get:ti(!1,!0)},la={get:ti(!0,!1)};const Is=new WeakMap,As=new WeakMap,Fs=new WeakMap,ca=new WeakMap;function ua(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fa(e){return e.__v_skip||!Object.isExtensible(e)?0:ua(Fo(e))}function ni(e){return Mt(e)?e:ri(e,!1,ta,oa,Is)}function ha(e){return ri(e,!1,ra,aa,As)}function zs(e){return ri(e,!0,na,la,Fs)}function ri(e,t,n,r,i){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=fa(e);if(s===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function Wt(e){return Mt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function Ye(e){return!!(e&&e.__v_isShallow)}function ii(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function da(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Dr(e,"__v_skip",!0),e}const Me=e=>Se(e)?ni(e):e,jn=e=>Se(e)?zs(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function Rt(e){return pa(e,!1)}function pa(e,t){return _e(e)?e:new ma(e,t)}class ma{constructor(t,n){this.dep=new ei,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Me(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ye(t)||Mt(t);t=r?t:re(t),Pt(t,n)&&(this._rawValue=t,this._value=r?t:Me(t),this.dep.trigger())}}function Ls(e){return _e(e)?e.value:e}const ga={get:(e,t,n)=>t==="__v_raw"?e:Ls(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Gs(e){return Wt(e)?e:new Proxy(e,ga)}class va{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ei(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Cs(this,!0),!0}get value(){const t=this.dep.track();return Os(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ba(e,t,n=!1){let r,i;return K(e)?r=e:(r=e.get,i=e.set),new va(r,i,n)}const En={},qn=new WeakMap;let At;function ya(e,t=!1,n=At){if(n){let r=qn.get(n);r||qn.set(n,r=[]),r.push(e)}}function xa(e,t,n=he){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,f=w=>i?w:Ye(w)||i===!1||i===0?mt(w,1):mt(w);let c,u,h,m,d=!1,v=!1;if(_e(e)?(u=()=>e.value,d=Ye(e)):Wt(e)?(u=()=>f(e),d=!0):X(e)?(v=!0,d=e.some(w=>Wt(w)||Ye(w)),u=()=>e.map(w=>{if(_e(w))return w.value;if(Wt(w))return f(w);if(K(w))return l?l(w,2):w()})):K(e)?t?u=l?()=>l(e,2):e:u=()=>{if(h){vt();try{h()}finally{bt()}}const w=At;At=c;try{return l?l(e,3,[m]):e(m)}finally{At=w}}:u=at,t&&i){const w=u,M=i===!0?1/0:i;u=()=>mt(w(),M)}const x=$o(),y=()=>{c.stop(),x&&x.active&&Qr(x.effects,c)};if(s&&t){const w=t;t=(...M)=>{w(...M),y()}}let b=v?new Array(e.length).fill(En):En;const S=w=>{if(!(!(c.flags&1)||!c.dirty&&!w))if(t){const M=c.run();if(i||d||(v?M.some((_,R)=>Pt(_,b[R])):Pt(M,b))){h&&h();const _=At;At=c;try{const R=[M,b===En?void 0:v&&b[0]===En?[]:b,m];b=M,l?l(t,3,R):t(...R)}finally{At=_}}}else c.run()};return a&&a(S),c=new Bs(u),c.scheduler=o?()=>o(S,!1):S,m=w=>ya(w,!1,c),h=c.onStop=()=>{const w=qn.get(c);if(w){if(l)l(w,4);else for(const M of w)M();qn.delete(c)}},t?r?S(!0):b=c.run():o?o(S.bind(null,!0),!0):c.run(),y.pause=c.pause.bind(c),y.resume=c.resume.bind(c),y.stop=y,y}function mt(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,_e(e))mt(e.value,t,n);else if(X(e))for(let r=0;r<e.length;r++)mt(e[r],t,n);else if(ms(e)||Ht(e))e.forEach(r=>{mt(r,t,n)});else if(bs(e)){for(const r in e)mt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&mt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cn(e,t,n,r){try{return r?e(...r):e()}catch(i){ir(i,t,n)}}function lt(e,t,n,r){if(K(e)){const i=Cn(e,t,n,r);return i&&gs(i)&&i.catch(s=>{ir(s,t,n)}),i}if(X(e)){const i=[];for(let s=0;s<e.length;s++)i.push(lt(e[s],t,n,r));return i}}function ir(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,l,f)===!1)return}a=a.parent}if(s){vt(),Cn(s,null,10,[e,l,f]),bt();return}}Sa(e,n,i,r,o)}function Sa(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const De=[];let nt=-1;const $t=[];let wt=null,jt=0;const Vs=Promise.resolve();let Nn=null;function wa(e){const t=Nn||Vs;return e?t.then(this?e.bind(this):e):t}function Ba(e){let t=nt+1,n=De.length;for(;t<n;){const r=t+n>>>1,i=De[r],s=Sn(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function si(e){if(!(e.flags&1)){const t=Sn(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=Sn(n)?De.push(e):De.splice(Ba(t),0,e),e.flags|=1,js()}}function js(){Nn||(Nn=Vs.then(Ns))}function Pa(e){X(e)?$t.push(...e):wt&&e.id===-1?wt.splice(jt+1,0,e):e.flags&1||($t.push(e),e.flags|=1),js()}function Ti(e,t,n=nt+1){for(;n<De.length;n++){const r=De[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;De.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qs(e){if($t.length){const t=[...new Set($t)].sort((n,r)=>Sn(n)-Sn(r));if($t.length=0,wt){wt.push(...t);return}for(wt=t,jt=0;jt<wt.length;jt++){const n=wt[jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,jt=0}}const Sn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ns(e){try{for(nt=0;nt<De.length;nt++){const t=De[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Cn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nt<De.length;nt++){const t=De[nt];t&&(t.flags&=-2)}nt=-1,De.length=0,qs(),Nn=null,(De.length||$t.length)&&Ns()}}let $e=null,ks=null;function kn(e){const t=$e;return $e=e,ks=e&&e.type.__scopeId||null,t}function Ca(e,t=$e,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Fi(-1);const s=kn(t);let o;try{o=e(...i)}finally{kn(s),r._d&&Fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ma(e,t){if($e===null)return e;const n=lr($e),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,l=he]=t[i];s&&(K(s)&&(s={mounted:s,updated:s}),s.deep&&mt(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Ut(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(vt(),lt(l,n,8,[e.el,a,e,t]),bt())}}const Ta=Symbol("_vte"),Oa=e=>e.__isTeleport;function oi(e,t){e.shapeFlag&6&&e.component?(e.transition=t,oi(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ea(e,t){return K(e)?Re({name:e.name},t,{setup:e}):e}function Hs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function hn(e,t,n,r,i=!1){if(X(e)){e.forEach((d,v)=>hn(d,t&&(X(t)?t[v]:t),n,r,i));return}if(dn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?lr(r.component):r.el,o=i?null:s,{i:a,r:l}=e,f=t&&t.r,c=a.refs===he?a.refs={}:a.refs,u=a.setupState,h=re(u),m=u===he?()=>!1:d=>ie(h,d);if(f!=null&&f!==l&&(Pe(f)?(c[f]=null,m(f)&&(u[f]=null)):_e(f)&&(f.value=null)),K(l))Cn(l,a,12,[o,c]);else{const d=Pe(l),v=_e(l);if(d||v){const x=()=>{if(e.f){const y=d?m(l)?u[l]:c[l]:l.value;i?X(y)&&Qr(y,s):X(y)?y.includes(s)||y.push(s):d?(c[l]=[s],m(l)&&(u[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else d?(c[l]=o,m(l)&&(u[l]=o)):v&&(l.value=o,e.k&&(c[e.k]=o))};o?(x.id=-1,ke(x,n)):x()}}}tr().requestIdleCallback;tr().cancelIdleCallback;const dn=e=>!!e.type.__asyncLoader,Ws=e=>e.type.__isKeepAlive;function _a(e,t){$s(e,"a",t)}function Ra(e,t){$s(e,"da",t)}function $s(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(sr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ws(i.parent.vnode)&&Ua(r,t,n,i),i=i.parent}}function Ua(e,t,n,r){const i=sr(t,e,r,!0);Qs(()=>{Qr(r[t],i)},n)}function sr(e,t,n=Ie,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{vt();const a=Mn(n),l=lt(t,n,e,o);return a(),bt(),l});return r?i.unshift(s):i.push(s),s}}const yt=e=>(t,n=Ie)=>{(!Bn||e==="sp")&&sr(e,(...r)=>t(...r),n)},Da=yt("bm"),Ys=yt("m"),Ia=yt("bu"),Aa=yt("u"),Fa=yt("bum"),Qs=yt("um"),za=yt("sp"),La=yt("rtg"),Ga=yt("rtc");function Va(e,t=Ie){sr("ec",e,t)}const ja=Symbol.for("v-ndc");function qa(e,t,n,r){let i;const s=n,o=X(e);if(o||Pe(e)){const a=o&&Wt(e);let l=!1,f=!1;a&&(l=!Ye(e),f=Mt(e),e=rr(e)),i=new Array(e.length);for(let c=0,u=e.length;c<u;c++)i[c]=t(l?f?jn(Me(e[c])):Me(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s)}else if(Se(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const c=a[l];i[l]=t(e[c],c,l,s)}}else i=[];return i}const Lr=e=>e?vo(e)?lr(e):Lr(e.parent):null,pn=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ks(e),$forceUpdate:e=>e.f||(e.f=()=>{si(e.update)}),$nextTick:e=>e.n||(e.n=wa.bind(e.proxy)),$watch:e=>ul.bind(e)}),yr=(e,t)=>e!==he&&!e.__isScriptSetup&&ie(e,t),Na={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(yr(r,t))return o[t]=1,r[t];if(i!==he&&ie(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&ie(f,t))return o[t]=3,s[t];if(n!==he&&ie(n,t))return o[t]=4,n[t];Gr&&(o[t]=0)}}const c=pn[t];let u,h;if(c)return t==="$attrs"&&Ee(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==he&&ie(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,ie(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return yr(i,t)?(i[t]=n,!0):r!==he&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==he&&ie(e,o)||yr(t,o)||(a=s[0])&&ie(a,o)||ie(r,o)||ie(pn,o)||ie(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Oi(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gr=!0;function ka(e){const t=Ks(e),n=e.proxy,r=e.ctx;Gr=!1,t.beforeCreate&&Ei(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:f,created:c,beforeMount:u,mounted:h,beforeUpdate:m,updated:d,activated:v,deactivated:x,beforeDestroy:y,beforeUnmount:b,destroyed:S,unmounted:w,render:M,renderTracked:_,renderTriggered:R,errorCaptured:P,serverPrefetch:I,expose:L,inheritAttrs:G,components:N,directives:V,filters:j}=t;if(f&&Ha(f,r,null),o)for(const k in o){const z=o[k];K(z)&&(r[k]=z.bind(n))}if(i){const k=i.call(n,n);Se(k)&&(e.data=ni(k))}if(Gr=!0,s)for(const k in s){const z=s[k],ce=K(z)?z.bind(n,n):K(z.get)?z.get.bind(n,n):at,me=!K(z)&&K(z.set)?z.set.bind(n):at,Z=Nr({get:ce,set:me});Object.defineProperty(r,k,{enumerable:!0,configurable:!0,get:()=>Z.value,set:te=>Z.value=te})}if(a)for(const k in a)Xs(a[k],r,n,k);if(l){const k=K(l)?l.call(n):l;Reflect.ownKeys(k).forEach(z=>{Ka(z,k[z])})}c&&Ei(c,e,"c");function Y(k,z){X(z)?z.forEach(ce=>k(ce.bind(n))):z&&k(z.bind(n))}if(Y(Da,u),Y(Ys,h),Y(Ia,m),Y(Aa,d),Y(_a,v),Y(Ra,x),Y(Va,P),Y(Ga,_),Y(La,R),Y(Fa,b),Y(Qs,w),Y(za,I),X(L))if(L.length){const k=e.exposed||(e.exposed={});L.forEach(z=>{Object.defineProperty(k,z,{get:()=>n[z],set:ce=>n[z]=ce,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===at&&(e.render=M),G!=null&&(e.inheritAttrs=G),N&&(e.components=N),V&&(e.directives=V),I&&Hs(e)}function Ha(e,t,n=at){X(e)&&(e=Vr(e));for(const r in e){const i=e[r];let s;Se(i)?"default"in i?s=An(i.from||r,i.default,!0):s=An(i.from||r):s=An(i),_e(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Ei(e,t,n){lt(X(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xs(e,t,n,r){let i=r.includes(".")?uo(n,r):()=>n[r];if(Pe(e)){const s=t[e];K(s)&&Sr(i,s)}else if(K(e))Sr(i,e.bind(n));else if(Se(e))if(X(e))e.forEach(s=>Xs(s,t,n,r));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&Sr(i,s,e)}}function Ks(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Hn(l,f,o,!0)),Hn(l,t,o)),Se(t)&&s.set(t,l),l}function Hn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Hn(e,s,n,!0),i&&i.forEach(o=>Hn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Wa[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Wa={data:_i,props:Ri,emits:Ri,methods:an,computed:an,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:an,directives:an,watch:Ya,provide:_i,inject:$a};function _i(e,t){return t?e?function(){return Re(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function $a(e,t){return an(Vr(e),Vr(t))}function Vr(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function an(e,t){return e?Re(Object.create(null),e,t):t}function Ri(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Re(Object.create(null),Oi(e),Oi(t??{})):t}function Ya(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const r in t)n[r]=Ue(e[r],t[r]);return n}function Js(){return{app:null,config:{isNativeTag:Io,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qa=0;function Xa(e,t){return function(r,i=null){K(r)||(r=Re({},r)),i!=null&&!Se(i)&&(i=null);const s=Js(),o=new WeakSet,a=[];let l=!1;const f=s.app={_uid:Qa++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ul,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(f,...u)):K(c)&&(o.add(c),c(f,...u))),f},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),f},component(c,u){return u?(s.components[c]=u,f):s.components[c]},directive(c,u){return u?(s.directives[c]=u,f):s.directives[c]},mount(c,u,h){if(!l){const m=f._ceVNode||Lt(r,i);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(m,c,h),l=!0,f._container=c,c.__vue_app__=f,lr(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(lt(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,u){return s.provides[c]=u,f},runWithContext(c){const u=Yt;Yt=f;try{return c()}finally{Yt=u}}};return f}}let Yt=null;function Ka(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){const r=Ml();if(r||Yt){let i=Yt?Yt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}const Zs={},eo=()=>Object.create(Zs),to=e=>Object.getPrototypeOf(e)===Zs;function Ja(e,t,n,r=!1){const i={},s=eo();e.propsDefaults=Object.create(null),no(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:ha(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Za(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=re(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(or(e.emitsOptions,h))continue;const m=t[h];if(l)if(ie(s,h))m!==s[h]&&(s[h]=m,f=!0);else{const d=Ct(h);i[d]=jr(l,a,d,m,e,!1)}else m!==s[h]&&(s[h]=m,f=!0)}}}else{no(e,t,i,s)&&(f=!0);let c;for(const u in a)(!t||!ie(t,u)&&((c=Et(u))===u||!ie(t,c)))&&(l?n&&(n[u]!==void 0||n[c]!==void 0)&&(i[u]=jr(l,a,u,void 0,e,!0)):delete i[u]);if(s!==a)for(const u in s)(!t||!ie(t,u))&&(delete s[u],f=!0)}f&&pt(e.attrs,"set","")}function no(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(cn(l))continue;const f=t[l];let c;i&&ie(i,c=Ct(l))?!s||!s.includes(c)?n[c]=f:(a||(a={}))[c]=f:or(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(s){const l=re(n),f=a||he;for(let c=0;c<s.length;c++){const u=s[c];n[u]=jr(i,l,u,f[u],e,!ie(f,u))}}return o}function jr(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=Mn(i);r=f[n]=l.call(null,t),c()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Et(n))&&(r=!0))}return r}const el=new WeakMap;function ro(e,t,n=!1){const r=n?el:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!K(e)){const c=u=>{l=!0;const[h,m]=ro(u,t,!0);Re(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Se(e)&&r.set(e,kt),kt;if(X(s))for(let c=0;c<s.length;c++){const u=Ct(s[c]);Ui(u)&&(o[u]=he)}else if(s)for(const c in s){const u=Ct(c);if(Ui(u)){const h=s[c],m=o[u]=X(h)||K(h)?{type:h}:Re({},h),d=m.type;let v=!1,x=!0;if(X(d))for(let y=0;y<d.length;++y){const b=d[y],S=K(b)&&b.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(x=!1)}else v=K(d)&&d.name==="Boolean";m[0]=v,m[1]=x,(v||ie(m,"default"))&&a.push(u)}}const f=[o,a];return Se(e)&&r.set(e,f),f}function Ui(e){return e[0]!=="$"&&!cn(e)}const ai=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",li=e=>X(e)?e.map(ot):[ot(e)],tl=(e,t,n)=>{if(t._n)return t;const r=Ca((...i)=>li(t(...i)),n);return r._c=!1,r},io=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ai(i))continue;const s=e[i];if(K(s))t[i]=tl(i,s,r);else if(s!=null){const o=li(s);t[i]=()=>o}}},so=(e,t)=>{const n=li(t);e.slots.default=()=>n},oo=(e,t,n)=>{for(const r in t)(n||!ai(r))&&(e[r]=t[r])},nl=(e,t,n)=>{const r=e.slots=eo();if(e.vnode.shapeFlag&32){const i=t.__;i&&Dr(r,"__",i,!0);const s=t._;s?(oo(r,t,n),n&&Dr(r,"_",s,!0)):io(t,r)}else t&&so(e,t)},rl=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=he;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:oo(i,t,n):(s=!t.$stable,io(t,i)),o=t}else t&&(so(e,t),o={default:1});if(s)for(const a in i)!ai(a)&&o[a]==null&&delete i[a]},ke=vl;function il(e){return sl(e)}function sl(e,t){const n=tr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:f,setElementText:c,parentNode:u,nextSibling:h,setScopeId:m=at,insertStaticContent:d}=e,v=(p,g,B,O=null,C=null,T=null,A=void 0,D=null,U=!!g.dynamicChildren)=>{if(p===g)return;p&&!rn(p,g)&&(O=we(p),te(p,C,T,!0),p=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:E,ref:$,shapeFlag:F}=g;switch(E){case ar:x(p,g,B,O);break;case Xt:y(p,g,B,O);break;case wr:p==null&&b(g,B,O,A);break;case st:N(p,g,B,O,C,T,A,D,U);break;default:F&1?M(p,g,B,O,C,T,A,D,U):F&6?V(p,g,B,O,C,T,A,D,U):(F&64||F&128)&&E.process(p,g,B,O,C,T,A,D,U,ue)}$!=null&&C?hn($,p&&p.ref,T,g||p,!g):$==null&&p&&p.ref!=null&&hn(p.ref,null,T,p,!0)},x=(p,g,B,O)=>{if(p==null)r(g.el=a(g.children),B,O);else{const C=g.el=p.el;g.children!==p.children&&f(C,g.children)}},y=(p,g,B,O)=>{p==null?r(g.el=l(g.children||""),B,O):g.el=p.el},b=(p,g,B,O)=>{[p.el,p.anchor]=d(p.children,g,B,O,p.el,p.anchor)},S=({el:p,anchor:g},B,O)=>{let C;for(;p&&p!==g;)C=h(p),r(p,B,O),p=C;r(g,B,O)},w=({el:p,anchor:g})=>{let B;for(;p&&p!==g;)B=h(p),i(p),p=B;i(g)},M=(p,g,B,O,C,T,A,D,U)=>{g.type==="svg"?A="svg":g.type==="math"&&(A="mathml"),p==null?_(g,B,O,C,T,A,D,U):I(p,g,C,T,A,D,U)},_=(p,g,B,O,C,T,A,D)=>{let U,E;const{props:$,shapeFlag:F,transition:H,dirs:Q}=p;if(U=p.el=o(p.type,T,$&&$.is,$),F&8?c(U,p.children):F&16&&P(p.children,U,null,O,C,xr(p,T),A,D),Q&&Ut(p,null,O,"created"),R(U,p,p.scopeId,A,O),$){for(const de in $)de!=="value"&&!cn(de)&&s(U,de,null,$[de],T,O);"value"in $&&s(U,"value",null,$.value,T),(E=$.onVnodeBeforeMount)&&et(E,O,p)}Q&&Ut(p,null,O,"beforeMount");const ee=ol(C,H);ee&&H.beforeEnter(U),r(U,g,B),((E=$&&$.onVnodeMounted)||ee||Q)&&ke(()=>{E&&et(E,O,p),ee&&H.enter(U),Q&&Ut(p,null,O,"mounted")},C)},R=(p,g,B,O,C)=>{if(B&&m(p,B),O)for(let T=0;T<O.length;T++)m(p,O[T]);if(C){let T=C.subTree;if(g===T||ho(T.type)&&(T.ssContent===g||T.ssFallback===g)){const A=C.vnode;R(p,A,A.scopeId,A.slotScopeIds,C.parent)}}},P=(p,g,B,O,C,T,A,D,U=0)=>{for(let E=U;E<p.length;E++){const $=p[E]=D?Bt(p[E]):ot(p[E]);v(null,$,g,B,O,C,T,A,D)}},I=(p,g,B,O,C,T,A)=>{const D=g.el=p.el;let{patchFlag:U,dynamicChildren:E,dirs:$}=g;U|=p.patchFlag&16;const F=p.props||he,H=g.props||he;let Q;if(B&&Dt(B,!1),(Q=H.onVnodeBeforeUpdate)&&et(Q,B,g,p),$&&Ut(g,p,B,"beforeUpdate"),B&&Dt(B,!0),(F.innerHTML&&H.innerHTML==null||F.textContent&&H.textContent==null)&&c(D,""),E?L(p.dynamicChildren,E,D,B,O,xr(g,C),T):A||z(p,g,D,null,B,O,xr(g,C),T,!1),U>0){if(U&16)G(D,F,H,B,C);else if(U&2&&F.class!==H.class&&s(D,"class",null,H.class,C),U&4&&s(D,"style",F.style,H.style,C),U&8){const ee=g.dynamicProps;for(let de=0;de<ee.length;de++){const ae=ee[de],Fe=F[ae],ze=H[ae];(ze!==Fe||ae==="value")&&s(D,ae,Fe,ze,C,B)}}U&1&&p.children!==g.children&&c(D,g.children)}else!A&&E==null&&G(D,F,H,B,C);((Q=H.onVnodeUpdated)||$)&&ke(()=>{Q&&et(Q,B,g,p),$&&Ut(g,p,B,"updated")},O)},L=(p,g,B,O,C,T,A)=>{for(let D=0;D<g.length;D++){const U=p[D],E=g[D],$=U.el&&(U.type===st||!rn(U,E)||U.shapeFlag&198)?u(U.el):B;v(U,E,$,null,O,C,T,A,!0)}},G=(p,g,B,O,C)=>{if(g!==B){if(g!==he)for(const T in g)!cn(T)&&!(T in B)&&s(p,T,g[T],null,C,O);for(const T in B){if(cn(T))continue;const A=B[T],D=g[T];A!==D&&T!=="value"&&s(p,T,D,A,C,O)}"value"in B&&s(p,"value",g.value,B.value,C)}},N=(p,g,B,O,C,T,A,D,U)=>{const E=g.el=p?p.el:a(""),$=g.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:Q}=g;Q&&(D=D?D.concat(Q):Q),p==null?(r(E,B,O),r($,B,O),P(g.children||[],B,$,C,T,A,D,U)):F>0&&F&64&&H&&p.dynamicChildren?(L(p.dynamicChildren,H,B,C,T,A,D),(g.key!=null||C&&g===C.subTree)&&ao(p,g,!0)):z(p,g,B,$,C,T,A,D,U)},V=(p,g,B,O,C,T,A,D,U)=>{g.slotScopeIds=D,p==null?g.shapeFlag&512?C.ctx.activate(g,B,O,A,U):j(g,B,O,C,T,A,U):J(p,g,U)},j=(p,g,B,O,C,T,A)=>{const D=p.component=Cl(p,O,C);if(Ws(p)&&(D.ctx.renderer=ue),Tl(D,!1,A),D.asyncDep){if(C&&C.registerDep(D,Y,A),!p.el){const U=D.subTree=Lt(Xt);y(null,U,g,B),p.placeholder=U.el}}else Y(D,p,g,B,C,T,A)},J=(p,g,B)=>{const O=g.component=p.component;if(ml(p,g,B))if(O.asyncDep&&!O.asyncResolved){k(O,g,B);return}else O.next=g,O.update();else g.el=p.el,O.vnode=g},Y=(p,g,B,O,C,T,A)=>{const D=()=>{if(p.isMounted){let{next:F,bu:H,u:Q,parent:ee,vnode:de}=p;{const Je=lo(p);if(Je){F&&(F.el=de.el,k(p,F,A)),Je.asyncDep.then(()=>{p.isUnmounted||D()});return}}let ae=F,Fe;Dt(p,!1),F?(F.el=de.el,k(p,F,A)):F=de,H&&pr(H),(Fe=F.props&&F.props.onVnodeBeforeUpdate)&&et(Fe,ee,F,de),Dt(p,!0);const ze=Ii(p),Ke=p.subTree;p.subTree=ze,v(Ke,ze,u(Ke.el),we(Ke),p,C,T),F.el=ze.el,ae===null&&gl(p,ze.el),Q&&ke(Q,C),(Fe=F.props&&F.props.onVnodeUpdated)&&ke(()=>et(Fe,ee,F,de),C)}else{let F;const{el:H,props:Q}=g,{bm:ee,m:de,parent:ae,root:Fe,type:ze}=p,Ke=dn(g);Dt(p,!1),ee&&pr(ee),!Ke&&(F=Q&&Q.onVnodeBeforeMount)&&et(F,ae,g),Dt(p,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(ze);const Je=p.subTree=Ii(p);v(null,Je,B,O,p,C,T),g.el=Je.el}if(de&&ke(de,C),!Ke&&(F=Q&&Q.onVnodeMounted)){const Je=g;ke(()=>et(F,ae,Je),C)}(g.shapeFlag&256||ae&&dn(ae.vnode)&&ae.vnode.shapeFlag&256)&&p.a&&ke(p.a,C),p.isMounted=!0,g=B=O=null}};p.scope.on();const U=p.effect=new Bs(D);p.scope.off();const E=p.update=U.run.bind(U),$=p.job=U.runIfDirty.bind(U);$.i=p,$.id=p.uid,U.scheduler=()=>si($),Dt(p,!0),E()},k=(p,g,B)=>{g.component=p;const O=p.vnode.props;p.vnode=g,p.next=null,Za(p,g.props,O,B),rl(p,g.children,B),vt(),Ti(p),bt()},z=(p,g,B,O,C,T,A,D,U=!1)=>{const E=p&&p.children,$=p?p.shapeFlag:0,F=g.children,{patchFlag:H,shapeFlag:Q}=g;if(H>0){if(H&128){me(E,F,B,O,C,T,A,D,U);return}else if(H&256){ce(E,F,B,O,C,T,A,D,U);return}}Q&8?($&16&&xe(E,C,T),F!==E&&c(B,F)):$&16?Q&16?me(E,F,B,O,C,T,A,D,U):xe(E,C,T,!0):($&8&&c(B,""),Q&16&&P(F,B,O,C,T,A,D,U))},ce=(p,g,B,O,C,T,A,D,U)=>{p=p||kt,g=g||kt;const E=p.length,$=g.length,F=Math.min(E,$);let H;for(H=0;H<F;H++){const Q=g[H]=U?Bt(g[H]):ot(g[H]);v(p[H],Q,B,null,C,T,A,D,U)}E>$?xe(p,C,T,!0,!1,F):P(g,B,O,C,T,A,D,U,F)},me=(p,g,B,O,C,T,A,D,U)=>{let E=0;const $=g.length;let F=p.length-1,H=$-1;for(;E<=F&&E<=H;){const Q=p[E],ee=g[E]=U?Bt(g[E]):ot(g[E]);if(rn(Q,ee))v(Q,ee,B,null,C,T,A,D,U);else break;E++}for(;E<=F&&E<=H;){const Q=p[F],ee=g[H]=U?Bt(g[H]):ot(g[H]);if(rn(Q,ee))v(Q,ee,B,null,C,T,A,D,U);else break;F--,H--}if(E>F){if(E<=H){const Q=H+1,ee=Q<$?g[Q].el:O;for(;E<=H;)v(null,g[E]=U?Bt(g[E]):ot(g[E]),B,ee,C,T,A,D,U),E++}}else if(E>H)for(;E<=F;)te(p[E],C,T,!0),E++;else{const Q=E,ee=E,de=new Map;for(E=ee;E<=H;E++){const qe=g[E]=U?Bt(g[E]):ot(g[E]);qe.key!=null&&de.set(qe.key,E)}let ae,Fe=0;const ze=H-ee+1;let Ke=!1,Je=0;const tn=new Array(ze);for(E=0;E<ze;E++)tn[E]=0;for(E=Q;E<=F;E++){const qe=p[E];if(Fe>=ze){te(qe,C,T,!0);continue}let Ze;if(qe.key!=null)Ze=de.get(qe.key);else for(ae=ee;ae<=H;ae++)if(tn[ae-ee]===0&&rn(qe,g[ae])){Ze=ae;break}Ze===void 0?te(qe,C,T,!0):(tn[Ze-ee]=E+1,Ze>=Je?Je=Ze:Ke=!0,v(qe,g[Ze],B,null,C,T,A,D,U),Fe++)}const Si=Ke?al(tn):kt;for(ae=Si.length-1,E=ze-1;E>=0;E--){const qe=ee+E,Ze=g[qe],wi=g[qe+1],Bi=qe+1<$?wi.el||wi.placeholder:O;tn[E]===0?v(null,Ze,B,Bi,C,T,A,D,U):Ke&&(ae<0||E!==Si[ae]?Z(Ze,B,Bi,2):ae--)}}},Z=(p,g,B,O,C=null)=>{const{el:T,type:A,transition:D,children:U,shapeFlag:E}=p;if(E&6){Z(p.component.subTree,g,B,O);return}if(E&128){p.suspense.move(g,B,O);return}if(E&64){A.move(p,g,B,ue);return}if(A===st){r(T,g,B);for(let F=0;F<U.length;F++)Z(U[F],g,B,O);r(p.anchor,g,B);return}if(A===wr){S(p,g,B);return}if(O!==2&&E&1&&D)if(O===0)D.beforeEnter(T),r(T,g,B),ke(()=>D.enter(T),C);else{const{leave:F,delayLeave:H,afterLeave:Q}=D,ee=()=>{p.ctx.isUnmounted?i(T):r(T,g,B)},de=()=>{F(T,()=>{ee(),Q&&Q()})};H?H(T,ee,de):de()}else r(T,g,B)},te=(p,g,B,O=!1,C=!1)=>{const{type:T,props:A,ref:D,children:U,dynamicChildren:E,shapeFlag:$,patchFlag:F,dirs:H,cacheIndex:Q}=p;if(F===-2&&(C=!1),D!=null&&(vt(),hn(D,null,B,p,!0),bt()),Q!=null&&(g.renderCache[Q]=void 0),$&256){g.ctx.deactivate(p);return}const ee=$&1&&H,de=!dn(p);let ae;if(de&&(ae=A&&A.onVnodeBeforeUnmount)&&et(ae,g,p),$&6)ye(p.component,B,O);else{if($&128){p.suspense.unmount(B,O);return}ee&&Ut(p,null,g,"beforeUnmount"),$&64?p.type.remove(p,g,B,ue,O):E&&!E.hasOnce&&(T!==st||F>0&&F&64)?xe(E,g,B,!1,!0):(T===st&&F&384||!C&&$&16)&&xe(U,g,B),O&&be(p)}(de&&(ae=A&&A.onVnodeUnmounted)||ee)&&ke(()=>{ae&&et(ae,g,p),ee&&Ut(p,null,g,"unmounted")},B)},be=p=>{const{type:g,el:B,anchor:O,transition:C}=p;if(g===st){Ce(B,O);return}if(g===wr){w(p);return}const T=()=>{i(B),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:D}=C,U=()=>A(B,T);D?D(p.el,T,U):U()}else T()},Ce=(p,g)=>{let B;for(;p!==g;)B=h(p),i(p),p=B;i(g)},ye=(p,g,B)=>{const{bum:O,scope:C,job:T,subTree:A,um:D,m:U,a:E,parent:$,slots:{__:F}}=p;Di(U),Di(E),O&&pr(O),$&&X(F)&&F.forEach(H=>{$.renderCache[H]=void 0}),C.stop(),T&&(T.flags|=8,te(A,p,g,B)),D&&ke(D,g),ke(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},xe=(p,g,B,O=!1,C=!1,T=0)=>{for(let A=T;A<p.length;A++)te(p[A],g,B,O,C)},we=p=>{if(p.shapeFlag&6)return we(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=h(p.anchor||p.el),B=g&&g[Ta];return B?h(B):g};let ge=!1;const je=(p,g,B)=>{p==null?g._vnode&&te(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,B),g._vnode=p,ge||(ge=!0,Ti(),qs(),ge=!1)},ue={p:v,um:te,m:Z,r:be,mt:j,mc:P,pc:z,pbc:L,n:we,o:e};return{render:je,hydrate:void 0,createApp:Xa(je)}}function xr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ol(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ao(e,t,n=!1){const r=e.children,i=t.children;if(X(r)&&X(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Bt(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&ao(o,a)),a.type===ar&&(a.el=o.el),a.type===Xt&&!a.el&&(a.el=o.el)}}function al(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<f?s=a+1:o=a;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function lo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:lo(t)}function Di(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ll=Symbol.for("v-scx"),cl=()=>An(ll);function Sr(e,t,n){return co(e,t,n)}function co(e,t,n=he){const{immediate:r,deep:i,flush:s,once:o}=n,a=Re({},n),l=t&&r||!t&&s!=="post";let f;if(Bn){if(s==="sync"){const m=cl();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=at,m.resume=at,m.pause=at,m}}const c=Ie;a.call=(m,d,v)=>lt(m,c,d,v);let u=!1;s==="post"?a.scheduler=m=>{ke(m,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(m,d)=>{d?m():si(m)}),a.augmentJob=m=>{t&&(m.flags|=4),u&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=xa(e,t,a);return Bn&&(f?f.push(h):l&&h()),h}function ul(e,t,n){const r=this.proxy,i=Pe(e)?e.includes(".")?uo(r,e):()=>r[e]:e.bind(r,r);let s;K(t)?s=t:(s=t.handler,n=t);const o=Mn(this),a=co(i,s.bind(r),n);return o(),a}function uo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const fl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ct(t)}Modifiers`]||e[`${Et(t)}Modifiers`];function hl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||he;let i=n;const s=t.startsWith("update:"),o=s&&fl(r,t.slice(7));o&&(o.trim&&(i=n.map(c=>Pe(c)?c.trim():c)),o.number&&(i=n.map(Go)));let a,l=r[a=dr(t)]||r[a=dr(Ct(t))];!l&&s&&(l=r[a=dr(Et(t))]),l&&lt(l,e,6,i);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,lt(f,e,6,i)}}function fo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!K(e)){const l=f=>{const c=fo(f,t,!0);c&&(a=!0,Re(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Se(e)&&r.set(e,null),null):(X(s)?s.forEach(l=>o[l]=null):Re(o,s),Se(e)&&r.set(e,o),o)}function or(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Et(t))||ie(e,t))}function Ii(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:f,renderCache:c,props:u,data:h,setupState:m,ctx:d,inheritAttrs:v}=e,x=kn(e);let y,b;try{if(n.shapeFlag&4){const w=i||r,M=w;y=ot(f.call(M,w,c,u,m,h,d)),b=a}else{const w=t;y=ot(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=t.props?a:dl(a)}}catch(w){mn.length=0,ir(w,e,1),y=Lt(Xt)}let S=y;if(b&&v!==!1){const w=Object.keys(b),{shapeFlag:M}=S;w.length&&M&7&&(s&&w.some(Yr)&&(b=pl(b,s)),S=Kt(S,b,!1,!0))}return n.dirs&&(S=Kt(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&oi(S,n.transition),y=S,kn(x),y}const dl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},pl=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ml(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ai(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(o[h]!==r[h]&&!or(f,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ai(r,o,f):!0:!!o;return!1}function Ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!or(n,s))return!0}return!1}function gl({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const ho=e=>e.__isSuspense;function vl(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):Pa(e)}const st=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),mn=[];let We=null;function Br(e=!1){mn.push(We=e?null:[])}function bl(){mn.pop(),We=mn[mn.length-1]||null}let wn=1;function Fi(e,t=!1){wn+=e,e<0&&We&&t&&(We.hasOnce=!0)}function yl(e){return e.dynamicChildren=wn>0?We||kt:null,bl(),wn>0&&We&&We.push(e),e}function Pr(e,t,n,r,i,s){return yl(rt(e,t,n,r,i,s,!0))}function po(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const mo=({key:e})=>e??null,Fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||_e(e)||K(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function rt(e,t=null,n=null,r=0,i=null,s=e===st?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&Fn(t),scopeId:ks,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(ci(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Pe(n)?8:16),wn>0&&!o&&We&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&We.push(l),l}const Lt=xl;function xl(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===ja)&&(e=Xt),po(e)){const a=Kt(e,t,!0);return n&&ci(a,n),wn>0&&!s&&We&&(a.shapeFlag&6?We[We.indexOf(e)]=a:We.push(a)),a.patchFlag=-2,a}if(Rl(e)&&(e=e.__vccOpts),t){t=Sl(t);let{class:a,style:l}=t;a&&!Pe(a)&&(t.class=bn(a)),Se(l)&&(ii(l)&&!X(l)&&(l=Re({},l)),t.style=nr(l))}const o=Pe(e)?1:ho(e)?128:Oa(e)?64:Se(e)?4:K(e)?2:0;return rt(e,t,n,r,i,o,s,!0)}function Sl(e){return e?ii(e)||to(e)?Re({},e):e:null}function Kt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=e,f=t?wl(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&mo(f),ref:t&&t.ref?n&&s?X(s)?s.concat(Fn(t)):[s,Fn(t)]:Fn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==st?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&oi(c,l.clone(c)),c}function go(e=" ",t=0){return Lt(ar,null,e,t)}function ot(e){return e==null||typeof e=="boolean"?Lt(Xt):X(e)?Lt(st,null,e.slice()):po(e)?Bt(e):Lt(ar,null,String(e))}function Bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function ci(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ci(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!to(t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[go(t)]):n=8);e.children=t,e.shapeFlag|=n}function wl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=bn([t.class,r.class]));else if(i==="style")t.style=nr([t.style,r.style]);else if(Jn(i)){const s=t[i],o=r[i];o&&s!==o&&!(X(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function et(e,t,n,r=null){lt(e,t,7,[n,r])}const Bl=Js();let Pl=0;function Cl(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Bl,s={uid:Pl++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ro(r,i),emitsOptions:fo(r,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=hl.bind(null,s),e.ce&&e.ce(s),s}let Ie=null;const Ml=()=>Ie||$e;let Wn,qr;{const e=tr(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Wn=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),qr=t("__VUE_SSR_SETTERS__",n=>Bn=n)}const Mn=e=>{const t=Ie;return Wn(e),e.scope.on(),()=>{e.scope.off(),Wn(t)}},zi=()=>{Ie&&Ie.scope.off(),Wn(null)};function vo(e){return e.vnode.shapeFlag&4}let Bn=!1;function Tl(e,t=!1,n=!1){t&&qr(t);const{props:r,children:i}=e.vnode,s=vo(e);Ja(e,r,s,t),nl(e,i,n||t);const o=s?Ol(e,t):void 0;return t&&qr(!1),o}function Ol(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Na);const{setup:r}=n;if(r){vt();const i=e.setupContext=r.length>1?_l(e):null,s=Mn(e),o=Cn(r,e,0,[e.props,i]),a=gs(o);if(bt(),s(),(a||e.sp)&&!dn(e)&&Hs(e),a){if(o.then(zi,zi),t)return o.then(l=>{Li(e,l)}).catch(l=>{ir(l,e,0)});e.asyncDep=o}else Li(e,o)}else bo(e)}function Li(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=Gs(t)),bo(e)}function bo(e,t,n){const r=e.type;e.render||(e.render=r.render||at);{const i=Mn(e);vt();try{ka(e)}finally{bt(),i()}}}const El={get(e,t){return Ee(e,"get",""),e[t]}};function _l(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,El),slots:e.slots,emit:e.emit,expose:t}}function lr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Gs(da(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pn)return pn[n](e)},has(t,n){return n in t||n in pn}})):e.proxy}function Rl(e){return K(e)&&"__vccOpts"in e}const Nr=(e,t)=>ba(e,t,Bn),Ul="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kr;const Gi=typeof window<"u"&&window.trustedTypes;if(Gi)try{kr=Gi.createPolicy("vue",{createHTML:e=>e})}catch{}const yo=kr?e=>kr.createHTML(e):e=>e,Dl="http://www.w3.org/2000/svg",Il="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,Vi=ht&&ht.createElement("template"),Al={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ht.createElementNS(Dl,e):t==="mathml"?ht.createElementNS(Il,e):n?ht.createElement(e,{is:n}):ht.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Vi.innerHTML=yo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Vi.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fl=Symbol("_vtc");function zl(e,t,n){const r=e[Fl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $n=Symbol("_vod"),xo=Symbol("_vsh"),Ll={beforeMount(e,{value:t},{transition:n}){e[$n]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):sn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),sn(e,!0),r.enter(e)):r.leave(e,()=>{sn(e,!1)}):sn(e,t))},beforeUnmount(e,{value:t}){sn(e,t)}};function sn(e,t){e.style.display=t?e[$n]:"none",e[xo]=!t}const Gl=Symbol(""),Vl=/(^|;)\s*display\s*:/;function jl(e,t,n){const r=e.style,i=Pe(n);let s=!1;if(n&&!i){if(t)if(Pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&zn(r,a,"")}else for(const o in t)n[o]==null&&zn(r,o,"");for(const o in n)o==="display"&&(s=!0),zn(r,o,n[o])}else if(i){if(t!==n){const o=r[Gl];o&&(n+=";"+o),r.cssText=n,s=Vl.test(n)}}else t&&e.removeAttribute("style");$n in e&&(e[$n]=s?r.display:"",e[xo]&&(r.display="none"))}const ji=/\s*!important$/;function zn(e,t,n){if(X(n))n.forEach(r=>zn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ql(e,t);ji.test(n)?e.setProperty(Et(r),n.replace(ji,""),"important"):e[r]=n}}const qi=["Webkit","Moz","ms"],Cr={};function ql(e,t){const n=Cr[t];if(n)return n;let r=Ct(t);if(r!=="filter"&&r in e)return Cr[t]=r;r=ys(r);for(let i=0;i<qi.length;i++){const s=qi[i]+r;if(s in e)return Cr[t]=s}return t}const Ni="http://www.w3.org/1999/xlink";function ki(e,t,n,r,i,s=Ho(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ni,t.slice(6,t.length)):e.setAttributeNS(Ni,t,n):n==null||s&&!xs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ot(n)?String(n):n)}function Hi(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?yo(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=xs(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Nl(e,t,n,r){e.addEventListener(t,n,r)}function kl(e,t,n,r){e.removeEventListener(t,n,r)}const Wi=Symbol("_vei");function Hl(e,t,n,r,i=null){const s=e[Wi]||(e[Wi]={}),o=s[t];if(r&&o)o.value=r;else{const[a,l]=Wl(t);if(r){const f=s[t]=Ql(r,i);Nl(e,a,f,l)}else o&&(kl(e,a,o,l),s[t]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Wl(e){let t;if($i.test(e)){t={};let r;for(;r=e.match($i);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),t]}let Mr=0;const $l=Promise.resolve(),Yl=()=>Mr||($l.then(()=>Mr=0),Mr=Date.now());function Ql(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;lt(Xl(r,n.value),t,5,[r])};return n.value=e,n.attached=Yl(),n}function Xl(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Kl=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?zl(e,r,o):t==="style"?jl(e,n,r):Jn(t)?Yr(t)||Hl(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jl(e,t,r,o))?(Hi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ki(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Pe(r))?Hi(e,Ct(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ki(e,t,r,o))};function Jl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Yi(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yi(t)&&Pe(n)?!1:t in e}const Zl=["ctrl","shift","alt","meta"],ec={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zl.some(n=>e[`${n}Key`]&&!t.includes(n))},Qi=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=ec[t[o]];if(a&&a(i,t))return}return e(i,...s)})},tc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xi=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Et(i.key);if(t.some(o=>o===s||tc[o]===s))return e(i)})},nc=Re({patchProp:Kl},Al);let Ki;function rc(){return Ki||(Ki=il(nc))}const ic=(...e)=>{const t=rc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=oc(r);if(!i)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,sc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function sc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function oc(e){return Pe(e)?document.querySelector(e):e}const ac="/projects/webGPU-Basics-Collections/assets/expand-yilVOYUy.png";var Ve=typeof Float32Array<"u"?Float32Array:Array;function ln(){var e=new Ve(4);return Ve!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function Yn(e,t,n,r){var i=new Ve(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function Ln(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function lc(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],a=n[0],l=n[1],f=n[2],c=n[3];return e[0]=r*a+s*l,e[1]=i*a+o*l,e[2]=r*f+s*c,e[3]=i*f+o*c,e}function ui(){var e=new Ve(9);return Ve!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Hr(e,t,n,r,i,s,o,a,l){var f=new Ve(9);return f[0]=e,f[1]=t,f[2]=n,f[3]=r,f[4]=i,f[5]=s,f[6]=o,f[7]=a,f[8]=l,f}function Ji(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function Zi(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function Be(){var e=new Ve(3);return Ve!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function cc(e){var t=new Ve(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Tr(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function q(e,t,n){var r=new Ve(3);return r[0]=e,r[1]=t,r[2]=n,r}function qt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function uc(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function xt(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function _n(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Wr(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e}var Nt=uc;(function(){var e=Be();return function(t,n,r,i,s,o){var a,l;for(n||(n=3),r||(r=0),i?l=Math.min(i*n+r,t.length):l=t.length,a=r;a<l;a+=n)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],s(e,e,o),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2];return t}})();function W(){var e=new Ve(2);return Ve!=Float32Array&&(e[0]=0,e[1]=0),e}function Qn(e){var t=new Ve(2);return t[0]=e[0],t[1]=e[1],t}function ne(e,t){var n=new Ve(2);return n[0]=e,n[1]=t,n}function dt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function fc(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function ft(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function hc(e){var t=e[0],n=e[1];return t*t+n*n}function He(e,t){return e[0]*t[0]+e[1]*t[1]}function dc(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e}function Oe(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}var tt=fc;(function(){var e=W();return function(t,n,r,i,s,o){var a,l;for(n||(n=2),r||(r=0),i?l=Math.min(i*n+r,t.length):l=t.length,a=r;a<l;a+=n)e[0]=t[a],e[1]=t[a+1],s(e,e,o),t[a]=e[0],t[a+1]=e[1];return t}})();function Vt(e){const t=Math.cos(e),n=Math.sin(e);return Yn(t,n,-n,t)}function So(e,t,n){const r=Math.cos(e),i=Math.sin(e),s=Math.cos(t),o=Math.sin(t),a=Math.cos(n),l=Math.sin(n);return Hr(s*a,-s*l,o,i*o*a+r*l,-i*o*l+r*a,-i*s,-r*o*a+i*l,r*o*l+i*a,r*s)}function pc(e,t){const n=ui();return n[0]=e[0]*t[0],n[1]=e[0]*t[1],n[2]=e[0]*t[2],n[3]=e[1]*t[0],n[4]=e[1]*t[1],n[5]=e[1]*t[2],n[6]=e[2]*t[0],n[7]=e[2]*t[1],n[8]=e[2]*t[2],n}function mc(e,t){let n=e[0],r=e[3]/e[0],i=e[6]/e[0],s=e[4]-r*r*n,o=(e[7]-i*r*n)/s,a=e[8]-(i*i*n+o*o*s),l=t[0],f=t[1]-r*l,c=t[2]-i*l-o*f,u=l/n,h=f/s,m=c/a;const d=q(0,0,0);return d[2]=m,d[1]=h-o*d[2],d[0]=u-r*d[1]-i*d[2],d}function oe(e=0,t=1){return e===void 0?(e=0,t=1):t===void 0&&(t=e,e=0),e+Math.random()*(t-e)}function gc(e,t,n,r){return q(oe(e,e+n),oe(t,t+r),oe(0,Math.PI*2))}function vc(){const e=Math.floor(oe(0,256)),t=Math.floor(oe(0,256)),n=Math.floor(oe(0,256)),r=255;return new Uint8Array([e,t,n,r])}function Rn(e,t){return e[0]*t[1]-e[1]*t[0]}function es(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function bc(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function yc(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return t>1e-5?[e[0]/t,e[1]/t,e[2]/t]:[0,0,0]}function wo(e,t,n){const r=es(t,e),i=es(n,e);return yc(bc(r,i))}function xc(e){return e*(180/Math.PI)}function Sc(e){return e*(Math.PI/180)}function Bo(){const t=new Float32Array(8);let n=0;const r=s=>{t[n++]=s.x,t[n++]=s.y};r({x:-.5,y:-.5}),r({x:.5,y:-.5}),r({x:-.5,y:.5}),r({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:t,indexData:i,numVertices:i.length}}function wc({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*3),a=new Uint8Array(o.buffer);let l=0,f=8;const c=v=>{o[l++]=v.x,o[l++]=v.y,l+=1,a[f++]=(v.r??0)*255,a[f++]=(v.g??0)*255,a[f++]=(v.b??0)*255,f+=9},u=[1,1,1],h=[.1,.1,.1];for(let v=0;v<=t;v++){const x=r+(v+0)*(i-r)/t,y=Math.cos(x),b=Math.sin(x);c({x:y*e,y:b*e,r:h[0],g:h[1],b:h[2]}),c({x:y*n,y:b*n,r:u[0],g:u[1],b:u[2]})}const m=new Uint16Array(t*6);let d=0;for(let v=0;v<t;++v){const x=v*2;m[d++]=x,m[d++]=x+1,m[d++]=x+2,m[d++]=x+2,m[d++]=x+1,m[d++]=x+3}return{vertexData:o,indexData:m,numVertices:m.length}}function Bc({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*2);let a=0;const l=u=>{o[a++]=u.x,o[a++]=u.y};for(let u=0;u<=t;u++){const h=r+(u+0)*(i-r)/t,m=Math.cos(h),d=Math.sin(h);l({x:m*e,y:d*e}),l({x:m*n,y:d*n})}const f=new Uint16Array(t*6);let c=0;for(let u=0;u<t;++u){const h=u*2;f[c++]=h,f[c++]=h+1,f[c++]=h+2,f[c++]=h+2,f[c++]=h+1,f[c++]=h+3}return{vertexData:o,indexData:f,numVertices:f.length}}function Pc({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=t*3*2,o=new Float32Array(s*2);let a=0;const l=(f,c)=>{o[a++]=f,o[a++]=c};for(let f=0;f<t;f++){const c=r+(f+0)*(i-r)/t,u=r+(f+1)*(i-r)/t,h=Math.cos(c),m=Math.sin(c),d=Math.cos(u),v=Math.sin(u);l(h*e,m*e),l(d*e,v*e),l(h*n,m*n),l(h*n,m*n),l(d*e,v*e),l(d*n,v*n)}return o}function Cc(){const e=[.73,.73,.73],t=[.65,.05,.05],n=[.12,.45,.15],r=[1,1,1],i=[],s=[],o=[],a=[],l=[],f=[];let c=0;function u(b,S,w,M,_=0){return i.push(b[0],b[1],b[2]),s.push(S[0],S[1],S[2]),o.push(w[0],w[1],w[2]),l.push(M[0],M[1]),a.push(_),c++}function h(b,S,w,M,_,R=!1,P=0){let I=wo(b,S,w);R&&(I=[-I[0],-I[1],-I[2]]);const L=u(b,I,_,[0,0],P),G=u(S,I,_,[1,0],P),N=u(w,I,_,[1,1],P),V=u(M,I,_,[0,1],P);f.push(L,G,N),f.push(L,N,V)}function m(b,S,w,M=[0,0,0],_=0){const R=S[0]/2,P=S[1]/2,I=S[2]/2;let L=[b[0]-R,b[1]-P,b[2]-I],G=[b[0]+R,b[1]-P,b[2]-I],N=[b[0]+R,b[1]+P,b[2]-I],V=[b[0]-R,b[1]+P,b[2]-I],j=[b[0]-R,b[1]-P,b[2]+I],J=[b[0]+R,b[1]-P,b[2]+I],Y=[b[0]+R,b[1]+P,b[2]+I],k=[b[0]-R,b[1]+P,b[2]+I];const z=new Float32Array(9),ce=Math.cos(M[0]),me=Math.sin(M[0]),Z=Math.cos(M[1]),te=Math.sin(M[1]),be=Math.cos(M[2]),Ce=Math.sin(M[2]);z[0]=Z*be,z[1]=-Z*Ce,z[2]=te,z[3]=me*te*be+ce*Ce,z[4]=-me*te*Ce+ce*be,z[5]=-me*Z,z[6]=-ce*te*be+me*Ce,z[7]=ce*te*Ce+me*be,z[8]=ce*Z;const ye=xe=>{const we=xe[0]-b[0],ge=xe[1]-b[1],je=xe[2]-b[2];return[z[0]*we+z[1]*ge+z[2]*je+b[0],z[3]*we+z[4]*ge+z[5]*je+b[1],z[6]*we+z[7]*ge+z[8]*je+b[2]]};L=ye(L),G=ye(G),N=ye(N),V=ye(V),j=ye(j),J=ye(J),Y=ye(Y),k=ye(k),h(j,J,Y,k,w,!1,_),h(G,L,V,N,w,!1,_),h(L,j,k,V,w,!1,_),h(J,G,N,Y,w,!1,_),h(V,k,Y,N,w,!1,_),h(L,G,J,j,w,!1,_)}h([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],e,!1,.98),h([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],e,!1,.98);const v=548.8-1;h([343,v,227],[343,v,332],[213,v,332],[213,v,227],r),h([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],e),h([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],n),h([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],t);let x=c;m([278,224.4,279.5],[120,120,120],e,[4,Math.PI/9,7],1);let y=c-x;return{vertexData:new Float32Array(i),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(s),colorData:new Float32Array(o),reflectanceData:new Float32Array(a),uvData:new Float32Array(l),additionalInfo:{cubeVertexStart:x,cubeVertexCount:y,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(i.slice(x*3,(x+y)*3)),cubeNormalsInfo:new Float32Array(s.slice(x*3,(x+y)*3))}}}function Or(e,t){let n=4;const r=new Float32Array(n*3),i=new Float32Array(n*3),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint16Array([0,1,2,0,2,3]),l=e.translation,f=e.scale[0]/2,c=e.scale[1]/2,u=e.rotation,h=[q(-f,-c,0),q(f,-c,0),q(f,c,0),q(-f,c,0)],m=So(u[0],u[1],u[2]);for(let y=0;y<h.length;++y)Wr(h[y],h[y],m),qt(h[y],h[y],l);let d=0;const v=(y,b)=>{r[d]=y[0],r[d+1]=y[1],r[d+2]=y[2],i[d]=b[0],i[d+1]=b[1],i[d+2]=b[2],d+=3};v(h[0],t),v(h[1],t),v(h[2],t),v(h[3],t);const x=q(0,0,1);Wr(x,x,m);for(let y=0;y<n;++y)s[y*3+0]=x[0],s[y*3+1]=x[1],s[y*3+2]=x[2];return o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=1,o[5]=1,o[6]=0,o[7]=1,{vertexData:r,indexData:a,colorData:i,normalData:s,uvData:o,numVertices:a.length,transform:e}}function Er(e,t,n,r=12,i=12){const s=[],o=[],a=[],l=[],f=[],c=(u,h,m,d)=>{s.push(u[0],u[1],u[2]),o.push(h[0],h[1],h[2]),a.push(m[0],m[1],m[2]),l.push(d[0],d[1])};for(let u=0;u<=r;u++){const h=u*Math.PI/r,m=Math.sin(h),d=Math.cos(h);for(let v=0;v<=i;v++){const x=v*2*Math.PI/i,y=Math.sin(x),S=Math.cos(x)*m,w=d,M=y*m,_=1-v/i,R=1-u/r,P=[e[0]+t*S,e[1]+t*w,e[2]+t*M];c(P,[S,w,M],n,[_,R])}}for(let u=0;u<r;u++)for(let h=0;h<i;h++){const m=u*(i+1)+h,d=m+i+1;f.push(m,m+1,d),f.push(d,m+1,d+1)}return{vertexData:new Float32Array(s),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(o),colorData:new Float32Array(a),uvData:new Float32Array(l),transform:{translation:q(e[0],e[1],e[2]),rotation:q(0,0,0),scale:q(t,t,t)}}}function Mc(e,t=8){e.length>0?console.log(`Using custom sphere materials for Cornell Box: ${e.map(b=>b.name).join(", ")}`):console.log("Using default sphere materials for Cornell Box.");const n={whiteWall:{albedo:[.73,.73,.73],roughness:.98,metalness:0,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"whiteWall"},redWall:{albedo:[.65,.05,.05],roughness:.98,metalness:0,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"redWall"},greenWall:{albedo:[.12,.45,.15],roughness:.98,metalness:0,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"greenWall"},light:{albedo:[1,1,1],roughness:0,metalness:0,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"light"},sphereOne:e.find(b=>b.name==="sphereOne")||{albedo:[.12,.45,.15],roughness:.98,metalness:0,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"sphereOne"},sphereTwo:e.find(b=>b.name==="sphereTwo")||{albedo:[.05,.05,.65],roughness:.5,metalness:.5,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"sphereTwo"},sphereThree:e.find(b=>b.name==="sphereThree")||{albedo:[.65,.05,.05],roughness:.01,metalness:.98,usePerlinMetalness:!1,usePerlinRoughness:!1,perlinFreq:2,name:"sphereThree"}},r={};function i(b,S,w,M){M in r||(r[M]={vertexData:[],normalData:[],uvData:[],indexData:[],numVertices:0});const _=r[M];return _.vertexData.push(b[0],b[1],b[2]),_.normalData.push(S[0],S[1],S[2]),_.uvData.push(w[0],w[1]),_.numVertices++}function s(b,S,w,M,_=!1,R){let P=wo(b,S,w);_&&(P=[-P[0],-P[1],-P[2]]);const I=i(b,P,[0,0],R),L=i(S,P,[1,0],R),G=i(w,P,[1,1],R),N=i(M,P,[0,1],R);r[R].indexData.push(I,L,G),r[R].indexData.push(I,G,N)}function o(b,S,w=12,M=12,_){const R=r[_]?.numVertices||0;for(let P=0;P<=w;P++){const I=P*Math.PI/w,L=Math.sin(I),G=Math.cos(I);for(let N=0;N<=M;N++){const V=N*2*Math.PI/M,j=Math.sin(V),Y=Math.cos(V)*L,k=G,z=j*L,ce=1-N/M,me=1-P/w,Z=[b[0]+S*Y,b[1]+S*k,b[2]+S*z];i(Z,[Y,k,z],[ce,me],_)}}for(let P=0;P<w;P++)for(let I=0;I<M;I++){const L=R+P*(M+1)+I,G=L+M+1;r[_].indexData.push(L,L+1,G),r[_].indexData.push(G,L+1,G+1)}}s([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],!1,"whiteWall"),s([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],!1,"whiteWall");const l=548.8-1;s([343,l,227],[343,l,332],[213,l,332],[213,l,227],!1,"light"),s([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],!1,"whiteWall"),s([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],!1,"greenWall"),s([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],!1,"redWall");let f=[278,224.4,279.5],c=90,u=120,h=[q(0,1,0),q(Math.sqrt(3)/2,-.5,0),q(-Math.sqrt(3)/2,-.5,0)];for(let b=0;b<3;++b){let S=h[b],w=[f[0]+S[0]*u,f[1]+S[1]*u,f[2]+S[2]*u];o(w,c,t,t,b===0?"sphereOne":b===1?"sphereThree":"sphereTwo")}const m=[],d=[],v=[],x=[];let y=0;for(const b in r){b==="sphereOne"?(v.push(y),x.push({translation:q(f[0]+h[0][0]*u,f[1]+h[0][1]*u,f[2]+h[0][2]*u),rotation:q(0,0,0),scale:q(c,c,c)})):b==="sphereThree"?(v.push(y),x.push({translation:q(f[0]+h[1][0]*u,f[1]+h[1][1]*u,f[2]+h[1][2]*u),rotation:q(0,0,0),scale:q(c,c,c)})):b==="sphereTwo"&&(v.push(y),x.push({translation:q(f[0]+h[2][0]*u,f[1]+h[2][1]*u,f[2]+h[2][2]*u),rotation:q(0,0,0),scale:q(c,c,c)}));const S=r[b];m.push({vertexData:new Float32Array(S.vertexData),indexData:new Uint16Array(S.indexData),numVertices:S.indexData.length,normalData:new Float32Array(S.normalData),uvData:new Float32Array(S.uvData)}),d.push(n[b]),y+=1}return{materials:d,pmTopologies:m,additionalInfo:{sphereMaterialIndices:v,sphereTransforms:x,sphereMaterials:[n.sphereOne,n.sphereThree,n.sphereTwo]}}}function cr(){return document.getElementById("info")}function Zt(){return document.getElementById("utils")}function Po(){Zt()}function ur(){const e=Zt();if(e)for(;e.firstChild;)e.removeChild(e.firstChild);Po()}function Tc(e,t,n,r){const i=document.createElement("div");i.style.cssText=`
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
    `,i.appendChild(s);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const a=document.createElement("label");a.textContent="Albedo:",o.appendChild(a);const l=G=>Math.round(G*255).toString(16).padStart(2,"0"),f=`#${l(t.albedo[0])}${l(t.albedo[1])}${l(t.albedo[2])}`,c=document.createElement("input");c.type="color",c.value=f,c.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,c.tabIndex=-1,o.appendChild(c);const u=document.createElement("span");u.textContent=f.toUpperCase(),u.style.cssText="font-family: monospace; color: #aaa;",o.appendChild(u),c.addEventListener("input",()=>{u.textContent=c.value.toUpperCase();const G=parseInt(c.value.slice(1,3),16)/255,N=parseInt(c.value.slice(3,5),16)/255,V=parseInt(c.value.slice(5,7),16)/255;t.albedo=[G,N,V],n(t)}),i.appendChild(o);const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent=`Metalness: ${t.metalness.toFixed(2)}`,h.appendChild(m);const d=document.createElement("input");d.type="range",d.min="0",d.max="1",d.step="0.01",d.value=t.metalness.toString(),d.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,d.tabIndex=-1,h.appendChild(d),i.appendChild(h),d.addEventListener("input",()=>{const G=parseFloat(d.value);t.metalness=isNaN(G)?0:G,m.textContent=`Metalness: ${t.metalness.toFixed(2)}`,n(t)});const v=document.createElement("label");v.textContent="Perlin noise",h.appendChild(v);const x=document.createElement("input");x.type="checkbox",x.checked=t.usePerlinMetalness,x.tabIndex=-1,h.appendChild(x),x.addEventListener("change",()=>{t.usePerlinMetalness=x.checked,n(t)});const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const b=document.createElement("label");b.textContent=`Roughness: ${t.roughness.toFixed(2)}`,y.appendChild(b);const S=document.createElement("input");S.type="range",S.min="0",S.max="1",S.step="0.01",S.value=t.roughness.toString(),S.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,S.tabIndex=-1,y.appendChild(S),i.appendChild(y),S.addEventListener("input",()=>{const G=parseFloat(S.value);t.roughness=isNaN(G)?0:G,b.textContent=`Roughness: ${t.roughness.toFixed(2)}`,n(t)});const w=document.createElement("label");w.textContent="Perlin noise",y.appendChild(w);const M=document.createElement("input");M.type="checkbox",M.checked=t.usePerlinRoughness,M.tabIndex=-1,y.appendChild(M),M.addEventListener("change",()=>{t.usePerlinRoughness=M.checked,n(t)});const _=document.createElement("div");_.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const R=document.createElement("label");R.textContent=`Perlin Frequency: ${t.perlinFreq.toFixed(2)}`,_.appendChild(R);const P=document.createElement("input");P.type="range",P.min="0.1",P.max="10",P.step="0.1",P.value=t.perlinFreq.toString(),P.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,P.tabIndex=-1,_.appendChild(P),i.appendChild(_),P.addEventListener("input",()=>{const G=parseFloat(P.value);t.perlinFreq=isNaN(G)?.1:G,R.textContent=`Perlin Frequency: ${t.perlinFreq.toFixed(2)}`,n(t)});const I=document.createElement("div");I.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const L=document.createElement("button");return L.textContent="Cancel",L.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,L.tabIndex=-1,L.addEventListener("click",()=>{r()}),I.appendChild(L),i.appendChild(I),i}function Oc(e,t,n,r,i){const s=document.createElement("div");s.style.cssText=`
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
    `,s.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const l=document.createElement("label");l.textContent="Enabled:",a.appendChild(l);const f=document.createElement("input");f.type="checkbox",f.checked=t.enabled,f.tabIndex=-1,a.appendChild(f),f.addEventListener("change",()=>{t.enabled=f.checked,r(t)}),s.appendChild(a);const c=document.createElement("div");c.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const u=document.createElement("label");u.textContent="Light position:",c.appendChild(u),["X","Y","Z"].forEach((N,V)=>{const j=document.createElement("input");j.type="number",j.value=t.position[V].toFixed(2),j.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,j.tabIndex=-1,c.appendChild(j),j.addEventListener("input",()=>{const J=parseFloat(j.value);t.position[V]=isNaN(J)?0:J,r(t)}),j.placeholder=N}),s.appendChild(c);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Light direction:",h.appendChild(m),["X","Y","Z"].forEach((N,V)=>{const j=document.createElement("input");j.type="number",j.value=t.direction[V].toFixed(2),j.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,j.tabIndex=-1,h.appendChild(j),j.addEventListener("input",()=>{const J=parseFloat(j.value);t.direction[V]=isNaN(J)?0:J,r(t)}),j.placeholder=N}),s.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const v=document.createElement("label");v.textContent="Light intensity:",d.appendChild(v);const x=document.createElement("input");x.type="number",x.value=t.intensity.toFixed(2),x.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,x.tabIndex=-1,d.appendChild(x),x.addEventListener("input",()=>{const N=parseFloat(x.value);t.intensity=isNaN(N)?0:N,r(t)}),s.appendChild(d);const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const b=document.createElement("label");b.textContent="Cone angle:",y.appendChild(b);const S=document.createElement("input");S.type="range",S.value=xc(t.coneAngle).toFixed(2),S.min="0",S.max="180",S.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,S.tabIndex=-1,y.appendChild(S),S.addEventListener("input",()=>{const N=parseFloat(S.value),V=Sc(N);t.coneAngle=isNaN(V)?0:V,r(t)}),s.appendChild(y);const w=document.createElement("div");w.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const M=document.createElement("label");M.textContent="Light color:",w.appendChild(M);const _=N=>Math.round(N*255).toString(16).padStart(2,"0"),R=`#${_(t.color[0])}${_(t.color[1])}${_(t.color[2])}`,P=document.createElement("input");P.type="color",P.value=R,P.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,P.tabIndex=-1,w.appendChild(P);const I=document.createElement("span");I.textContent=R.toUpperCase(),I.style.cssText="font-family: monospace; color: #aaa;",w.appendChild(I),P.addEventListener("input",()=>{I.textContent=P.value.toUpperCase(),t.color=[parseInt(P.value.slice(1,3),16)/255,parseInt(P.value.slice(3,5),16)/255,parseInt(P.value.slice(5,7),16)/255],r(t)}),s.appendChild(w);const L=document.createElement("div");L.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const G=document.createElement("button");return G.textContent="Cancel",G.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,G.tabIndex=-1,G.addEventListener("click",()=>{i()}),L.appendChild(G),s.appendChild(L),s}const Ec=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,_c=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function Rc(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=e.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:n,format:i,alphaMode:"premultiplied"});const s=Uc(n),o=Dc(n,s,s,i),a={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(f=>{for(const c of f){const u=c.target,h=c.contentBoxSize[0].inlineSize,m=c.contentBoxSize[0].blockSize;u.width=Math.max(1,Math.min(h,n.limits.maxTextureDimension2D)),u.height=Math.max(1,Math.min(m,n.limits.maxTextureDimension2D))}Ic(n,r,o,a)}).observe(e),null}function Uc(e){return e.createShaderModule({label:"hardcoded red triangle",code:`${Ec}
${_c}`})}function Dc(e,t,n,r){return e.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Ic(e,t,n,r){r.colorAttachments[0].view=t.getCurrentTexture().createView();const i=e.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(r);s.setPipeline(n),s.draw(3),s.end();const o=i.finish();e.queue.submit([o])}const Ac=`// We declare a storage variable to read from and write to\r
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
// }`;async function Fc(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=zc(n),i=Lc(n,r),s=new Float32Array([1,3,5]),o=Gc(n,s),a=Vc(n,s.byteLength),l=jc(n,i.getBindGroupLayout(0),o),f=n.createCommandEncoder({label:"command encoder"}),c=f.beginComputePass({label:"basic compute pass"});c.setPipeline(i),c.setBindGroup(0,l),c.dispatchWorkgroups(s.length),c.end(),f.copyBufferToBuffer(o,0,a,0,a.size);const u=f.finish();n.queue.submit([u]),console.log("We send this Input: ",s);const h=performance.now();await a.mapAsync(GPUMapMode.READ);const m=new Float32Array(a.getMappedRange());return console.log("Computation took: ",performance.now()-h,"ms"),console.log("We got this Result: ",m),a.unmap(),null}function zc(e){return e.createShaderModule({label:"basic compute module",code:`${Ac}`})}function Lc(e,t){return e.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:t,entryPoint:"computeSomething"}})}function Gc(e,t){const n=e.createBuffer({label:"work buffer",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(n,0,t),n}function Vc(e,t){return e.createBuffer({label:"result buffer",size:t,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function jc(e,t,n){return e.createBindGroup({label:"basic bind group",layout:t,entries:[{binding:0,resource:{buffer:n}}]})}const qc=`// ============================== //\r
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
}`,Nc=`// ============================== //\r
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
}`;async function _t(e=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const t=await navigator.gpu.requestAdapter();if(!t)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const n=i=>{const s=t.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};e=e.filter(i=>n(i));const r=await t.requestDevice({requiredFeatures:e});return r.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),r}function Tt(e,t,n,r="shader module"){const i=e.createShaderModule({label:`${r} - vertex`,code:t}),s=e.createShaderModule({label:`${r} - fragment`,code:n});return{vertex:i,fragment:s}}function kc(e,t){if(!e)return null;const n=e.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:t}),r=e.createBuffer({label:"timestamp-query-resolve-buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=e.createBuffer({label:"timestamp-query-result-buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:n,resolveBuffer:r,resultBuffer:i}}function Hc(e,t){return!e||!t?!1:(t.resolveQuerySet(e.querySet,0,e.querySet.count,e.resolveBuffer,0),e.resultBuffer.mapState==="unmapped"&&t.copyBufferToBuffer(e.resolveBuffer,0,e.resultBuffer,0,e.resultBuffer.size),!0)}function St(e){const t=e.reduce((i,s)=>i+s.length,0),n=new Float32Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function ts(e,t){const n=e.reduce((o,a)=>o+a.length,0),r=new Uint16Array(n);let i=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];for(let l=0;l<a.length;l++)r[i+l]=a[l]+s;i+=a.length,s+=t[o]}return r}const Wc=0,$c=4,Yc=0,Qc=100;async function Xc(e){const t=await _t();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=ns(t,"hardcoded triangle",qc),s=ns(t,"hardcoded triangle",Nc),o=Kc(t,i,s,r),a=32,l=8,f=[];for(let h=0;h<Qc;h++){const m=rs(t,a);{const b=new Float32Array(a/4);b.set([oe(.1),oe(.1),oe(.1),1],Wc),b.set([oe(-.9,.9),oe(-.9,.9)],$c),t.queue.writeBuffer(m,0,b)}const d=new Float32Array(l/4),v=rs(t,l),y={uniformBindGroup:Zc(t,o.getBindGroupLayout(0),m,v),uniformBuffer:v,uniformValues:d,scale:oe(.2,.5)};f.push(y)}const c={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(h=>{for(const m of h){const d=m.target,v=m.contentBoxSize[0].inlineSize,x=m.contentBoxSize[0].blockSize;d.width=Math.max(1,Math.min(v,t.limits.maxTextureDimension2D)),d.height=Math.max(1,Math.min(x,t.limits.maxTextureDimension2D))}Jc(t,e,n,o,c,f)}).observe(e),null}function ns(e,t,n){return e.createShaderModule({label:t,code:n})}function Kc(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Jc(e,t,n,r,i,s){i.colorAttachments[0].view=n.getCurrentTexture().createView();const o=e.createCommandEncoder({label:"pass encoder"}),a=o.beginRenderPass(i);a.setPipeline(r);const l=t.width/t.height;for(const c of s)c.uniformValues.set([c.scale/l,c.scale],Yc),e.queue.writeBuffer(c.uniformBuffer,0,c.uniformValues),a.setBindGroup(0,c.uniformBindGroup),a.draw(3);a.end();const f=o.finish();e.queue.submit([f])}function rs(e,t){return e.createBuffer({label:"uniform buffer",size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function Zc(e,t,n,r){return e.createBindGroup({label:"uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}}]})}const eu=`// ============================== //\r
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
}`,tu=`// ============================== //\r
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
}`,nu=0,ru=4,Gn=50;async function iu(e){const t=await _t();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=is(t,"hardcoded triangle",eu),s=is(t,"hardcoded triangle",tu),o=su(t,i,s,r),a=32,l=8,f=a*Gn,c=l*Gn,u=Pc({radius:1,innerRadius:.5}),h=u.byteLength,m=u.length/2,d=_r(t,f),v=_r(t,c),x=_r(t,h);t.queue.writeBuffer(x,0,u);const y=[];{const _=new Float32Array(f/4);for(let R=0;R<Gn;R++){const P=R*(a/4);_.set([oe(.1),oe(.1),oe(.1),1],P+nu),_.set([oe(-.9,.9),oe(-.9,.9)],P+ru);const I={scale:oe(.1,.4)};y.push(I)}t.queue.writeBuffer(d,0,_)}const b=new Float32Array(c/4),S=au(t,o.getBindGroupLayout(0),d,v,x),w={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(_=>{for(const R of _){const P=R.target,I=R.contentBoxSize[0].inlineSize,L=R.contentBoxSize[0].blockSize;P.width=Math.max(1,Math.min(I,t.limits.maxTextureDimension2D)),P.height=Math.max(1,Math.min(L,t.limits.maxTextureDimension2D))}ou(t,e,n,o,w,y,S,b,v,m)}).observe(e),null}function is(e,t,n){return e.createShaderModule({label:t,code:n})}function su(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function ou(e,t,n,r,i,s,o,a,l,f){i.colorAttachments[0].view=n.getCurrentTexture().createView();const c=e.createCommandEncoder({label:"pass encoder"}),u=c.beginRenderPass(i);u.setPipeline(r);const h=t.width/t.height;s.forEach((d,v)=>{const x=2*v;a.set([d.scale/h,d.scale],x)}),e.queue.writeBuffer(l,0,a),u.setBindGroup(0,o),u.draw(f,Gn),u.end();const m=c.finish();e.queue.submit([m])}function _r(e,t){return e.createBuffer({label:"storage buffer",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function au(e,t,n,r,i){return e.createBindGroup({label:"storage bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}},{binding:2,resource:{buffer:i}}]})}const lu=`// ============================== //\r
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
}`,cu=`// ============================== //\r
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
}`,uu=0,fu=1,Vn=50;async function hu(e){const t=await _t();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=ss(t,"hardcoded triangle",lu),s=ss(t,"hardcoded triangle",cu),o=du(t,i,s,r),a=12,l=8,f=a*Vn,c=l*Vn,u=wc({radius:1,innerRadius:.5}),h=u.vertexData.byteLength,m=u.numVertices,d=Rr(t,f),v=Rr(t,c),x=Rr(t,h),y=mu(t,u.indexData.byteLength);t.queue.writeBuffer(x,0,u.vertexData),t.queue.writeBuffer(y,0,u.indexData);const b=[];{const _=new Uint8Array(f),R=new Float32Array(_.buffer);for(let P=0;P<Vn;P++){const I=P*a,L=P*(a/4);_.set([Math.round(oe(.1)*255),Math.round(oe(.1)*255),Math.round(oe(.1)*255),255],I+uu),R.set([oe(-.9,.9),oe(-.9,.9)],L+fu);const G={scale:oe(.1,.4)};b.push(G)}t.queue.writeBuffer(d,0,R)}const S=new Float32Array(c/4),w={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(_=>{for(const R of _){const P=R.target,I=R.contentBoxSize[0].inlineSize,L=R.contentBoxSize[0].blockSize;P.width=Math.max(1,Math.min(I,t.limits.maxTextureDimension2D)),P.height=Math.max(1,Math.min(L,t.limits.maxTextureDimension2D))}pu(t,e,n,o,w,b,d,S,v,m,x,y)}).observe(e),null}function ss(e,t,n){return e.createShaderModule({label:t,code:n})}function du(e,t,n,r){return e.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function pu(e,t,n,r,i,s,o,a,l,f,c,u){i.colorAttachments[0].view=n.getCurrentTexture().createView();const h=e.createCommandEncoder({label:"pass encoder"}),m=h.beginRenderPass(i);m.setPipeline(r),m.setVertexBuffer(0,c),m.setVertexBuffer(1,o),m.setVertexBuffer(2,l),m.setIndexBuffer(u,"uint16");const d=t.width/t.height;s.forEach((x,y)=>{const b=2*y;a.set([x.scale/d,x.scale],b)}),e.queue.writeBuffer(l,0,a),m.drawIndexed(f,Vn),m.end();const v=h.finish();e.queue.submit([v])}function Rr(e,t){return e.createBuffer({label:"vertex buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function mu(e,t){return e.createBuffer({label:"index buffer",size:t,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const gu=`// ============================== //\r
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
}`,vu=`// ============================== //\r
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
}`;let Te=1e-6;const bu=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);bu.get(Float32Array);let fr=Float32Array;function Qe(e,t,n){const r=new fr(3);return e!==void 0&&(r[0]=e,t!==void 0&&(r[1]=t,n!==void 0&&(r[2]=n))),r}function fi(e,t,n){return n=n||new fr(3),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function Jt(e,t,n){n=n||new fr(3);const r=e[2]*t[0]-e[0]*t[2],i=e[0]*t[1]-e[1]*t[0];return n[0]=e[1]*t[2]-e[2]*t[1],n[1]=r,n[2]=i,n}function gt(e,t){t=t||new fr(3);const n=e[0],r=e[1],i=e[2],s=Math.sqrt(n*n+r*r+i*i);return s>1e-5?(t[0]=n/s,t[1]=r/s,t[2]=i/s):(t[0]=0,t[1]=0,t[2]=0),t}let le=Float32Array;function yu(e){const t=le;return le=e,t}function xu(e,t,n,r,i,s,o,a,l,f,c,u,h,m,d,v){const x=new le(16);return e!==void 0&&(x[0]=e,t!==void 0&&(x[1]=t,n!==void 0&&(x[2]=n,r!==void 0&&(x[3]=r,i!==void 0&&(x[4]=i,s!==void 0&&(x[5]=s,o!==void 0&&(x[6]=o,a!==void 0&&(x[7]=a,l!==void 0&&(x[8]=l,f!==void 0&&(x[9]=f,c!==void 0&&(x[10]=c,u!==void 0&&(x[11]=u,h!==void 0&&(x[12]=h,m!==void 0&&(x[13]=m,d!==void 0&&(x[14]=d,v!==void 0&&(x[15]=v)))))))))))))))),x}function Su(e,t){return t=t||new le(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=0,t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function wu(e,t){t=t||new le(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,a=r+r,l=i+i,f=n*o,c=r*o,u=r*a,h=i*o,m=i*a,d=i*l,v=s*o,x=s*a,y=s*l;return t[0]=1-u-d,t[1]=c+y,t[2]=h-x,t[3]=0,t[4]=c-y,t[5]=1-f-d,t[6]=m+v,t[7]=0,t[8]=h+x,t[9]=m-v,t[10]=1-f-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Bu(e,t){return t=t||new le(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function hi(e,t){return t=t||new le(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}const Pu=hi;function Cu(e,t){return Math.abs(e[0]-t[0])<Te&&Math.abs(e[1]-t[1])<Te&&Math.abs(e[2]-t[2])<Te&&Math.abs(e[3]-t[3])<Te&&Math.abs(e[4]-t[4])<Te&&Math.abs(e[5]-t[5])<Te&&Math.abs(e[6]-t[6])<Te&&Math.abs(e[7]-t[7])<Te&&Math.abs(e[8]-t[8])<Te&&Math.abs(e[9]-t[9])<Te&&Math.abs(e[10]-t[10])<Te&&Math.abs(e[11]-t[11])<Te&&Math.abs(e[12]-t[12])<Te&&Math.abs(e[13]-t[13])<Te&&Math.abs(e[14]-t[14])<Te&&Math.abs(e[15]-t[15])<Te}function Mu(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Co(e){return e=e||new le(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Tu(e,t){if(t=t||new le(16),t===e){let b;return b=e[1],e[1]=e[4],e[4]=b,b=e[2],e[2]=e[8],e[8]=b,b=e[3],e[3]=e[12],e[12]=b,b=e[6],e[6]=e[9],e[9]=b,b=e[7],e[7]=e[13],e[13]=b,b=e[11],e[11]=e[14],e[14]=b,t}const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],c=e[8],u=e[9],h=e[10],m=e[11],d=e[12],v=e[13],x=e[14],y=e[15];return t[0]=n,t[1]=o,t[2]=c,t[3]=d,t[4]=r,t[5]=a,t[6]=u,t[7]=v,t[8]=i,t[9]=l,t[10]=h,t[11]=x,t[12]=s,t[13]=f,t[14]=m,t[15]=y,t}function Mo(e,t){t=t||new le(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],c=e[8],u=e[9],h=e[10],m=e[11],d=e[12],v=e[13],x=e[14],y=e[15],b=h*y,S=x*m,w=l*y,M=x*f,_=l*m,R=h*f,P=i*y,I=x*s,L=i*m,G=h*s,N=i*f,V=l*s,j=c*v,J=d*u,Y=o*v,k=d*a,z=o*u,ce=c*a,me=n*v,Z=d*r,te=n*u,be=c*r,Ce=n*a,ye=o*r,xe=b*a+M*u+_*v-(S*a+w*u+R*v),we=S*r+P*u+G*v-(b*r+I*u+L*v),ge=w*r+I*a+N*v-(M*r+P*a+V*v),je=R*r+L*a+V*u-(_*r+G*a+N*u),ue=1/(n*xe+o*we+c*ge+d*je);return t[0]=ue*xe,t[1]=ue*we,t[2]=ue*ge,t[3]=ue*je,t[4]=ue*(S*o+w*c+R*d-(b*o+M*c+_*d)),t[5]=ue*(b*n+I*c+L*d-(S*n+P*c+G*d)),t[6]=ue*(M*n+P*o+V*d-(w*n+I*o+N*d)),t[7]=ue*(_*n+G*o+N*c-(R*n+L*o+V*c)),t[8]=ue*(j*f+k*m+z*y-(J*f+Y*m+ce*y)),t[9]=ue*(J*s+me*m+be*y-(j*s+Z*m+te*y)),t[10]=ue*(Y*s+Z*f+Ce*y-(k*s+me*f+ye*y)),t[11]=ue*(ce*s+te*f+ye*m-(z*s+be*f+Ce*m)),t[12]=ue*(Y*h+ce*x+J*l-(z*x+j*l+k*h)),t[13]=ue*(te*x+j*i+Z*h-(me*h+be*x+J*i)),t[14]=ue*(me*l+ye*x+k*i-(Ce*x+Y*i+Z*l)),t[15]=ue*(Ce*h+z*i+be*l-(te*l+ye*h+ce*i)),t}function Ou(e){const t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],l=e[7],f=e[8],c=e[9],u=e[10],h=e[11],m=e[12],d=e[13],v=e[14],x=e[15],y=u*x,b=v*h,S=a*x,w=v*l,M=a*h,_=u*l,R=r*x,P=v*i,I=r*h,L=u*i,G=r*l,N=a*i,V=y*o+w*c+M*d-(b*o+S*c+_*d),j=b*n+R*c+L*d-(y*n+P*c+I*d),J=S*n+P*o+G*d-(w*n+R*o+N*d),Y=_*n+I*o+N*c-(M*n+L*o+G*c);return t*V+s*j+f*J+m*Y}const Eu=Mo;function To(e,t,n){n=n||new le(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],f=e[6],c=e[7],u=e[8],h=e[9],m=e[10],d=e[11],v=e[12],x=e[13],y=e[14],b=e[15],S=t[0],w=t[1],M=t[2],_=t[3],R=t[4],P=t[5],I=t[6],L=t[7],G=t[8],N=t[9],V=t[10],j=t[11],J=t[12],Y=t[13],k=t[14],z=t[15];return n[0]=r*S+a*w+u*M+v*_,n[1]=i*S+l*w+h*M+x*_,n[2]=s*S+f*w+m*M+y*_,n[3]=o*S+c*w+d*M+b*_,n[4]=r*R+a*P+u*I+v*L,n[5]=i*R+l*P+h*I+x*L,n[6]=s*R+f*P+m*I+y*L,n[7]=o*R+c*P+d*I+b*L,n[8]=r*G+a*N+u*V+v*j,n[9]=i*G+l*N+h*V+x*j,n[10]=s*G+f*N+m*V+y*j,n[11]=o*G+c*N+d*V+b*j,n[12]=r*J+a*Y+u*k+v*z,n[13]=i*J+l*Y+h*k+x*z,n[14]=s*J+f*Y+m*k+y*z,n[15]=o*J+c*Y+d*k+b*z,n}const _u=To;function Ru(e,t,n){return n=n||Co(),e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11]),n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Uu(e,t){return t=t||Qe(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Du(e,t,n){n=n||Qe();const r=t*4;return n[0]=e[r+0],n[1]=e[r+1],n[2]=e[r+2],n}function Iu(e,t,n,r){r!==e&&(r=hi(e,r));const i=n*4;return r[i+0]=t[0],r[i+1]=t[1],r[i+2]=t[2],r}function Au(e,t){t=t||Qe();const n=e[0],r=e[1],i=e[2],s=e[4],o=e[5],a=e[6],l=e[8],f=e[9],c=e[10];return t[0]=Math.sqrt(n*n+r*r+i*i),t[1]=Math.sqrt(s*s+o*o+a*a),t[2]=Math.sqrt(l*l+f*f+c*c),t}function Fu(e,t,n,r,i){i=i||new le(16);const s=Math.tan(Math.PI*.5-.5*e);if(i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,r===1/0)i[10]=-1,i[14]=-n;else{const o=1/(n-r);i[10]=r*o,i[14]=r*n*o}return i}function zu(e,t,n,r,i,s,o){return o=o||new le(16),o[0]=2/(t-e),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(r-n),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(i-s),o[11]=0,o[12]=(t+e)/(e-t),o[13]=(r+n)/(n-r),o[14]=i/(i-s),o[15]=1,o}function Lu(e,t,n,r,i,s,o){o=o||new le(16);const a=t-e,l=r-n,f=i-s;return o[0]=2*i/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/l,o[6]=0,o[7]=0,o[8]=(e+t)/a,o[9]=(r+n)/l,o[10]=s/f,o[11]=-1,o[12]=0,o[13]=0,o[14]=i*s/f,o[15]=0,o}let fe,ve,se;function Gu(e,t,n,r){return r=r||new le(16),fe=fe||Qe(),ve=ve||Qe(),se=se||Qe(),gt(fi(t,e,se),se),gt(Jt(n,se,fe),fe),gt(Jt(se,fe,ve),ve),r[0]=fe[0],r[1]=fe[1],r[2]=fe[2],r[3]=0,r[4]=ve[0],r[5]=ve[1],r[6]=ve[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function Vu(e,t,n,r){return r=r||new le(16),fe=fe||Qe(),ve=ve||Qe(),se=se||Qe(),gt(fi(e,t,se),se),gt(Jt(n,se,fe),fe),gt(Jt(se,fe,ve),ve),r[0]=fe[0],r[1]=fe[1],r[2]=fe[2],r[3]=0,r[4]=ve[0],r[5]=ve[1],r[6]=ve[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function ju(e,t,n,r){return r=r||new le(16),fe=fe||Qe(),ve=ve||Qe(),se=se||Qe(),gt(fi(e,t,se),se),gt(Jt(n,se,fe),fe),gt(Jt(se,fe,ve),ve),r[0]=fe[0],r[1]=ve[0],r[2]=se[0],r[3]=0,r[4]=fe[1],r[5]=ve[1],r[6]=se[1],r[7]=0,r[8]=fe[2],r[9]=ve[2],r[10]=se[2],r[11]=0,r[12]=-(fe[0]*e[0]+fe[1]*e[1]+fe[2]*e[2]),r[13]=-(ve[0]*e[0]+ve[1]*e[1]+ve[2]*e[2]),r[14]=-(se[0]*e[0]+se[1]*e[1]+se[2]*e[2]),r[15]=1,r}function qu(e,t){return t=t||new le(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Nu(e,t,n){n=n||new le(16);const r=t[0],i=t[1],s=t[2],o=e[0],a=e[1],l=e[2],f=e[3],c=e[4],u=e[5],h=e[6],m=e[7],d=e[8],v=e[9],x=e[10],y=e[11],b=e[12],S=e[13],w=e[14],M=e[15];return e!==n&&(n[0]=o,n[1]=a,n[2]=l,n[3]=f,n[4]=c,n[5]=u,n[6]=h,n[7]=m,n[8]=d,n[9]=v,n[10]=x,n[11]=y),n[12]=o*r+c*i+d*s+b,n[13]=a*r+u*i+v*s+S,n[14]=l*r+h*i+x*s+w,n[15]=f*r+m*i+y*s+M,n}function ku(e,t){t=t||new le(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Hu(e,t,n){n=n||new le(16);const r=e[4],i=e[5],s=e[6],o=e[7],a=e[8],l=e[9],f=e[10],c=e[11],u=Math.cos(t),h=Math.sin(t);return n[4]=u*r+h*a,n[5]=u*i+h*l,n[6]=u*s+h*f,n[7]=u*o+h*c,n[8]=u*a-h*r,n[9]=u*l-h*i,n[10]=u*f-h*s,n[11]=u*c-h*o,e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Wu(e,t){t=t||new le(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $u(e,t,n){n=n||new le(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[8],l=e[9],f=e[10],c=e[11],u=Math.cos(t),h=Math.sin(t);return n[0]=u*r-h*a,n[1]=u*i-h*l,n[2]=u*s-h*f,n[3]=u*o-h*c,n[8]=u*a+h*r,n[9]=u*l+h*i,n[10]=u*f+h*s,n[11]=u*c+h*o,e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Yu(e,t){t=t||new le(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Qu(e,t,n){n=n||new le(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],f=e[6],c=e[7],u=Math.cos(t),h=Math.sin(t);return n[0]=u*r+h*a,n[1]=u*i+h*l,n[2]=u*s+h*f,n[3]=u*o+h*c,n[4]=u*a-h*r,n[5]=u*l-h*i,n[6]=u*f-h*s,n[7]=u*c-h*o,e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Oo(e,t,n){n=n||new le(16);let r=e[0],i=e[1],s=e[2];const o=Math.sqrt(r*r+i*i+s*s);r/=o,i/=o,s/=o;const a=r*r,l=i*i,f=s*s,c=Math.cos(t),u=Math.sin(t),h=1-c;return n[0]=a+(1-a)*c,n[1]=r*i*h+s*u,n[2]=r*s*h-i*u,n[3]=0,n[4]=r*i*h-s*u,n[5]=l+(1-l)*c,n[6]=i*s*h+r*u,n[7]=0,n[8]=r*s*h+i*u,n[9]=i*s*h-r*u,n[10]=f+(1-f)*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}const Xu=Oo;function Eo(e,t,n,r){r=r||new le(16);let i=t[0],s=t[1],o=t[2];const a=Math.sqrt(i*i+s*s+o*o);i/=a,s/=a,o/=a;const l=i*i,f=s*s,c=o*o,u=Math.cos(n),h=Math.sin(n),m=1-u,d=l+(1-l)*u,v=i*s*m+o*h,x=i*o*m-s*h,y=i*s*m-o*h,b=f+(1-f)*u,S=s*o*m+i*h,w=i*o*m+s*h,M=s*o*m-i*h,_=c+(1-c)*u,R=e[0],P=e[1],I=e[2],L=e[3],G=e[4],N=e[5],V=e[6],j=e[7],J=e[8],Y=e[9],k=e[10],z=e[11];return r[0]=d*R+v*G+x*J,r[1]=d*P+v*N+x*Y,r[2]=d*I+v*V+x*k,r[3]=d*L+v*j+x*z,r[4]=y*R+b*G+S*J,r[5]=y*P+b*N+S*Y,r[6]=y*I+b*V+S*k,r[7]=y*L+b*j+S*z,r[8]=w*R+M*G+_*J,r[9]=w*P+M*N+_*Y,r[10]=w*I+M*V+_*k,r[11]=w*L+M*j+_*z,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}const Ku=Eo;function Ju(e,t){return t=t||new le(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Zu(e,t,n){n=n||new le(16);const r=t[0],i=t[1],s=t[2];return n[0]=r*e[0],n[1]=r*e[1],n[2]=r*e[2],n[3]=r*e[3],n[4]=i*e[4],n[5]=i*e[5],n[6]=i*e[6],n[7]=i*e[7],n[8]=s*e[8],n[9]=s*e[9],n[10]=s*e[10],n[11]=s*e[11],e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}var ut=Object.freeze({__proto__:null,aim:Gu,axisRotate:Eo,axisRotation:Oo,cameraAim:Vu,clone:Pu,copy:hi,create:xu,determinant:Ou,equals:Mu,equalsApproximately:Cu,fromMat3:Su,fromQuat:wu,frustum:Lu,getAxis:Du,getScaling:Au,getTranslation:Uu,identity:Co,inverse:Mo,invert:Eu,lookAt:ju,mul:_u,multiply:To,negate:Bu,ortho:zu,perspective:Fu,rotate:Ku,rotateX:Hu,rotateY:$u,rotateZ:Qu,rotation:Xu,rotationX:ku,rotationY:Wu,rotationZ:Yu,scale:Zu,scaling:Ju,setAxis:Iu,setDefaultType:yu,setTranslation:Ru,translate:Nu,translation:qu,transpose:Tu});async function ef(e){const t=new Xn;return await t.initialize(e),t}class Xn{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=cr();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=Tt(this.device,gu,vu,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(t){if(t!==null)return new Promise((n,r)=>{if(t.addEventListener("error",r),"requestVideoFrameCallback"in t)t.requestVideoFrameCallback((i,s)=>{n()});else{const i=s=>{s.currentTime>0?n():requestAnimationFrame(()=>i(s))};i(t)}t.play().catch(r)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const t=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),n=8,r=8,i=64,s=n*this.numberOfObjects,o=r*this.numberOfObjects,a=i*this.numberOfObjects,l=Bo(),f=l.vertexData.byteLength,c=l.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:f,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,l.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:l.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,l.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const u=[];{const S=new Float32Array(s/4);for(let w=0;w<this.numberOfObjects;w++){const M=w*(n/4);S.set([oe(-.9,.9),oe(-.9,.9)],M);const _={scale:oe(.2,.6)};u.push(_)}this.perInstanceOffsets=new Float32Array(S),this.device.queue.writeBuffer(this.staticBuffer,0,S)}const h=new Float32Array(o/4),m=new Float32Array(a/4);let d=0,v=0,x=0;const y=1e4,b=S=>{if(this.canvas===null||this.device===null||this.context===null)return;const w=S-d;v+=w,d=S;const M=performance.now(),_=60*Math.PI/180,R=this.canvas.width/this.canvas.height,L=ut.perspective(_,R,.1,2e3),G=[0,0,2],N=[0,1,0],V=[0,0,0],j=ut.lookAt(G,V,N),Y=ut.multiply(L,j),k=v/y*2*Math.PI,z=this.canvas.width/this.canvas.height*.5;u.forEach((we,ge)=>{const je=ge*(r/4),ue=ge*(i/4);h.set([we.scale,we.scale],je);const en=this.perInstanceOffsets[2*ge+0],p=this.perInstanceOffsets[2*ge+1],g=ut.create();ut.copy(Y,g),ut.translate(g,[en,p,0],g),ut.rotateX(g,k,g),ut.rotateY(g,.2*Math.sin(k),g),ut.scale(g,[2*z,1*z,1],g),m.set(g,ue)});const me={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},Z=this.device.createCommandEncoder({label:"Render Quad Encoder"}),te=Z.beginRenderPass(me);te.setPipeline(this.simpleTexturePipeline),te.setVertexBuffer(0,this.vertexBuffer),te.setVertexBuffer(1,this.staticBuffer),te.setVertexBuffer(2,this.changingBuffer),te.setIndexBuffer(this.indexBuffer,"uint16");const be=this.device.importExternalTexture({source:this.video}),Ce=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:t},{binding:1,resource:be},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,h),this.device.queue.writeBuffer(this.storageBuffer,0,m),te.setBindGroup(0,Ce),te.drawIndexed(c,this.numberOfObjects),te.end(),this.timestampQuerySet!=null&&(Z.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&Z.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const ye=Z.finish();this.device.queue.submit([ye]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const we=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());x=Number(we[1]-we[0]),this.timestampQuerySet.resultBuffer.unmap()});const xe=performance.now()-M;if(this.infoElement&&this.device){const we=`                FPS: ${(1e3/w).toFixed(1)}
                JS Time: ${xe.toFixed(1)} ms
                GPU Time: ${(x/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=we}this.animationFrameId=requestAnimationFrame(b)};this.animationFrameId=requestAnimationFrame(b),this.resizeObserver=new ResizeObserver(S=>{for(const w of S){const M=w.contentBoxSize[0].inlineSize,_=w.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(M,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(_,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){await this.smallCleanup(),this.slider&&(this.slider=null),ur()}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const t=Zt();if(t===null)return;const n=document.createElement("label");n.textContent=`Number of Objects: ${this.numberOfObjects}`,n.htmlFor="numObjectsSlider",t.appendChild(n),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=Xn.minObjects.toString(),this.slider.max=Xn.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",t.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),n.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let r=!1;const i=async()=>{if(!r){r=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{r=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const tf=`// ============================== //\r
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
}`,nf=`// ============================== //\r
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
}`,rf=`// ============================== //\r
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
`,sf=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class Pn{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(t,n){this.bodyA=t,this.bodyB=n;for(let r=0;r<Pn.MAX_ROWS;++r){this.J.push(q(0,0,0));const i=ui();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let t=0;t<Pn.MAX_ROWS;++t)this.stiffness[t]=0,this.penalty[t]=0,this.lambda[t]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(t){console.warn("This method should not be called directly.")}computeDerivatives(t){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class of{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=q(0,0,0);inertial=q(0,0,0);id=-1;forces=[];constructor(t,n,r,i,s,o){this.width=t[0],this.height=t[1],this.density=r,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*He(t,t)/12,this.radius=Math.sqrt(He(t,t))*.5,this.color=n}getScale(){return ne(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return ne(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(t){this.staticBody||(this.velocity=t)}getRotationMatrix(){const t=Math.cos(this.position[2]),n=Math.sin(this.position[2]);return Yn(t,n,-n,t)}setPosition(t){this.staticBody||(this.position=t)}setColor(t){this.color=t}isConstrainedTo(t){for(let n=0;n<this.forces.length;++n){const r=this.forces[n];if(r.bodyA===this&&r.bodyB===t||r.bodyB===this&&r.bodyA===t)return!0}return!1}}const Le=12,Ne=8,It=4,af=8,lf=6,os=256,cf=16;class it{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(os*(Le+Ne)/4);numInstances=0;maxInstances=os;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(t,n){this.canvas=t,this.gameManager=n}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(t=>{for(const n of t){const r=n.contentBoxSize[0].inlineSize,i=n.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(r,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(t){return this.addInstance(t.getPosition(),t.getScale(),t.getColor())}addInstance(t,n,r){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*It,r);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,t),this.updateInstanceScale(s,n),s}removeInstance(t){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const n=this.idToIndexMap.get(t);if(n===void 0)return;const r=this.numInstances-1;if(n!==r){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,r*It,this.staticBuffer,n*It,It),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,o=n*(Le+Ne)/4,a=r*(Le+Ne)/4;s[o+0]=s[a+0],s[o+1]=s[a+1],s[o+2]=s[a+2],s[o+3]=s[a+3];const l=this.indexToId[r];this.indexToId[n]=l,this.idToIndexMap.set(l,n)}this.idToIndexMap.delete(t),this.indexToId.pop(),this.numInstances--}updateInstanceScale(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Le+Ne)/4+3]=n[0],this.changingCpuArray[r*(Le+Ne)/4+4]=n[1])}updateInstancePosition(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Le+Ne)/4+0]=n[0],this.changingCpuArray[r*(Le+Ne)/4+1]=n[1],this.changingCpuArray[r*(Le+Ne)/4+2]=n[2])}updateContacts(t){if(this.numContacts=Math.min(t.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let n=0;n<this.numContacts;++n)this.contactPositions[n*2+0]=t[n].pos[0],this.contactPositions[n*2+1]=t[n].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const t=this.context.getCurrentTexture().createView(),n={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:t,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},r=this.device.createCommandEncoder({label:"canvas render encoder"}),i=r.beginRenderPass(n);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(Le+Ne);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(lf,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!Hc(this.timestampQuerySet,r)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([r.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const t=this.maxInstances*It,n=this.maxInstances*(Le+Ne),r=Bo(),i=r.vertexData.byteLength,s=r.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,r.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,r.indexData);const o=Bc({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=kc(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:cf,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=new Float32Array([it.xWorldSize,it.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,a.buffer,a.byteOffset,a.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const t=this.maxInstances*It,n=this.maxInstances*(Le+Ne),r=this.device.createBuffer({label:"Extended static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,r,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(Le+Ne)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=r,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=Tt(this.device,tf,nf,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[t]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:af,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:It,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:Le+Ne,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:Le,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=Tt(this.device,rf,sf,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const uf=5e-4,ff=.01,Ft=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),hf=e=>{const t=e.inEdge1;e.inEdge1=e.inEdge2,e.inEdge2=t;const n=e.outEdge1;e.outEdge1=e.outEdge2,e.outEdge2=n};function gn(e){return{inEdge1:e.inEdge1,outEdge1:e.outEdge1,inEdge2:e.inEdge2,outEdge2:e.outEdge2,ID:e.ID}}function _o(e){return e.inEdge1&255|(e.outEdge1&255)<<8|(e.inEdge2&255)<<16|(e.outEdge2&255)<<24}function as(){return{details:Ft(),pA:W(),pB:W(),n:W(),JacNormA:Be(),JacNormB:Be(),JacTangA:Be(),JacTangB:Be(),C0:W(),stick:!1}}const ls=(e,t,n,r,i)=>{let s=0;const o=He(n,t[0].v)-r,a=He(n,t[1].v)-r;if(o<=0&&(e[s++]={v:Qn(t[0].v),cd:gn(t[0].cd)}),a<=0&&(e[s++]={v:Qn(t[1].v),cd:gn(t[1].cd)}),o*a<0){const l=o/(o-a),f=dc(W(),t[0].v,t[1].v,l);let c=gn(o>0?t[0].cd:t[1].cd);o>0?(c.inEdge1=i,c.inEdge2=0):(c.outEdge1=i,c.outEdge2=0),c.ID=_o(c),e[s++]={v:f,cd:c}}return s},Un=(e,t,n,r,i)=>{const s=Ln(ln(),r),o=Oe(W(),i,s);ft(o,o,-1);const a=ne(Math.abs(o[0]),Math.abs(o[1]));a[0]>a[1]?o[0]>0?(e[0].v=ne(t[0],-t[1]),e[0].cd.inEdge2=3,e[0].cd.outEdge2=4,e[1].v=ne(t[0],t[1]),e[1].cd.inEdge2=4,e[1].cd.outEdge2=1):(e[0].v=ne(-t[0],t[1]),e[0].cd.inEdge2=1,e[0].cd.outEdge2=2,e[1].v=ne(-t[0],-t[1]),e[1].cd.inEdge2=2,e[1].cd.outEdge2=3):o[1]>0?(e[0].v=ne(t[0],t[1]),e[0].cd.inEdge2=4,e[0].cd.outEdge2=1,e[1].v=ne(-t[0],t[1]),e[1].cd.inEdge2=1,e[1].cd.outEdge2=2):(e[0].v=ne(-t[0],-t[1]),e[0].cd.inEdge2=2,e[0].cd.outEdge2=3,e[1].v=ne(t[0],-t[1]),e[1].cd.inEdge2=3,e[1].cd.outEdge2=4),e[0].v=dt(W(),n,Oe(W(),e[0].v,r)),e[1].v=dt(W(),n,Oe(W(),e[1].v,r))};class di extends Pn{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(t,n){super(t,n);for(let r=0;r<Pn.MAX_ROWS;++r)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const t=this.penalty.slice(),n=this.lambda.slice(),r=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=di.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const o=this.contacts[s].details.ID,a=this.oldContacts.findIndex(l=>l.details.ID===o);a!==-1&&(this.penalty[s*2+0]=t[a*2+0],this.penalty[s*2+1]=t[a*2+1],this.lambda[s*2+0]=n[a*2+0],this.lambda[s*2+1]=n[a*2+1],this.contacts[s].stick=r[a],this.contacts[s].stick&&(this.contacts[s].pA=Qn(this.oldContacts[a].pA),this.contacts[s].pB=Qn(this.oldContacts[a].pB)))}for(let s=0;s<this.contacts.length;++s){const o=this.contacts[s].n,a=ne(o[1],-o[0]),l=Yn(o[0],o[1],a[0],a[1]),f=Oe(W(),this.contacts[s].pA,Vt(this.bodyA.getPosition()[2])),c=Oe(W(),this.contacts[s].pB,Vt(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=q(l[0],l[2],Rn(f,o)),this.contacts[s].JacNormB=q(-l[0],-l[2],-Rn(c,o)),this.contacts[s].JacTangA=q(l[1],l[3],Rn(f,a)),this.contacts[s].JacTangB=q(-l[1],-l[3],-Rn(c,a));const u=tt(W(),dt(W(),this.bodyA.getPos2(),f),dt(W(),this.bodyB.getPos2(),c));this.contacts[s].C0=Oe(this.contacts[s].C0,u,l),this.contacts[s].C0=dt(this.contacts[s].C0,this.contacts[s].C0,ne(uf,0))}return this.contacts.length>0}computeConstraints(t){for(let n=0;n<this.contacts.length;++n){const r=Nt(Be(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=Nt(Be(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=ft(W(),this.contacts[n].C0,1-t);this.C[n*2+0]=s[0]+_n(this.contacts[n].JacNormA,r)+_n(this.contacts[n].JacNormB,i),this.C[n*2+1]=s[1]+_n(this.contacts[n].JacTangA,r)+_n(this.contacts[n].JacTangB,i);const o=Math.abs(this.lambda[n*2+0])*this.friction;this.fmax[n*2+1]=o,this.fmin[n*2+1]=-o,this.contacts[n].stick=Math.abs(this.lambda[n*2+1])<o&&Math.abs(this.contacts[n].C0[1])<ff}}computeDerivatives(t){for(let n=0;n<this.contacts.length;++n)t===this.bodyA?(this.J[n*2+0]=this.contacts[n].JacNormA,this.J[n*2+1]=this.contacts[n].JacTangA):(this.J[n*2+0]=this.contacts[n].JacNormB,this.J[n*2+1]=this.contacts[n].JacTangB)}static collide(t,n,r){r.length=0;let i=W();const s=Vt(t.getPosition()[2]),o=Vt(n.getPosition()[2]),a=Ln(ln(),s),l=Ln(ln(),o),f=ft(W(),t.getScale(),.5),c=ft(W(),n.getScale(),.5),u=t.getPos2(),h=n.getPos2(),m=t.getRotationMatrix(),d=n.getRotationMatrix(),v=tt(W(),h,u),x=Oe(W(),v,a),y=Oe(W(),v,l),b=ne(Math.abs(x[0]),Math.abs(x[1])),S=ne(Math.abs(y[0]),Math.abs(y[1])),w=lc(ln(),a,d),M=Yn(Math.abs(w[0]),Math.abs(w[1]),Math.abs(w[2]),Math.abs(w[3])),_=Ln(ln(),M),R=tt(W(),b,dt(W(),f,Oe(W(),c,M))),P=tt(W(),S,dt(W(),c,Oe(W(),f,_)));if(R[0]>0||R[1]>0||P[0]>0||P[1]>0)return 0;let I,L;I=1,L=R[0],x[0]>0?i=ne(m[0],m[1]):i=ne(-m[0],-m[1]);const G=.95,N=.01;R[1]>G*L+N*f[1]&&(I=2,L=R[1],x[1]>0?i=ne(m[2],m[3]):i=ne(-m[2],-m[3])),P[0]>G*L+N*c[0]&&(I=3,L=P[0],y[0]>0?i=ne(d[0],d[1]):i=ne(-d[0],-d[1])),P[1]>G*L+N*c[1]&&(I=4,L=P[1],y[1]>0?i=ne(d[2],d[3]):i=ne(-d[2],-d[3]));let V,j;const J=[{cd:Ft(),v:W()},{cd:Ft(),v:W()}];let Y,k,z,ce=0,me=0,Z;switch(I){case 1:V=i,Y=He(u,V)+f[0],j=ne(m[2],m[3]),Z=He(u,j),k=-Z+f[1],z=Z+f[1],ce=3,me=1,Un(J,c,h,d,V);break;case 2:V=i,Y=He(u,V)+f[1],j=ne(m[0],m[1]),Z=He(u,j),k=-Z+f[0],z=Z+f[0],ce=2,me=4,Un(J,c,h,d,V);break;case 3:V=ft(W(),i,-1),Y=He(h,V)+c[0],j=ne(d[2],d[3]),Z=He(h,j),k=-Z+c[1],z=Z+c[1],ce=3,me=1,Un(J,f,u,m,V);break;case 4:V=ft(W(),i,-1),Y=He(h,V)+c[1],j=ne(d[0],d[1]),Z=He(h,j),k=-Z+c[0],z=Z+c[0],ce=2,me=4,Un(J,f,u,m,V);break}const te=[{cd:Ft(),v:W()},{cd:Ft(),v:W()}],be=[{cd:Ft(),v:W()},{cd:Ft(),v:W()}];let Ce;if(Ce=ls(te,J,ft(W(),j,-1),k,ce),Ce<2||(Ce=ls(be,te,j,z,me),Ce<2))return 0;r.push(as(),as());let ye=0;for(let xe=0;xe<2;++xe){const we=He(V,be[xe].v)-Y;if(we<=0){const ge=r[ye];ge.n=ft(W(),i,-1);const je=I===3||I===4,ue=tt(W(),be[xe].v,ft(W(),V,we));if(!je)ge.pA=Oe(W(),tt(W(),ue,u),a),ge.pB=Oe(W(),tt(W(),be[xe].v,h),l),ge.details=gn(be[xe].cd);else{ge.pA=Oe(W(),tt(W(),be[xe].v,u),a),ge.pB=Oe(W(),tt(W(),ue,h),l);let en=gn(be[xe].cd);hf(en),ge.details=en}if(ge.details.ID=_o(ge.details),++ye,ye===2)break}}return r.length=ye,ye}getContactRenders(){const t=[],n=Vt(this.bodyA.getPosition()[2]),r=Vt(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const a=dt(W(),i,Oe(W(),this.contacts[o].pA,n));t.push({pos:a});const l=dt(W(),s,Oe(W(),this.contacts[o].pB,r));t.push({pos:l})}return t}getRows(){return this.contacts.length*2}}const Dn=1,on=1e9;class df{dt=0;gravity=ne(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=ne(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(t){Math.abs(t-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${t}. This may cause instability.`),this.contactsToRender=[];for(let r=0;r<this.bodies.length;++r)for(let i=r+1;i<this.bodies.length;++i){const s=this.bodies[r],o=this.bodies[i],a=tt(W(),s.getPos2(),o.getPos2()),l=s.getRadius()+o.getRadius();if(hc(a)<=l*l&&!s.isConstrainedTo(o)){let f=new di(s,o);this.forces.push(f),s.forces.push(f),o.forces.push(f)}}for(let r=0;r<this.forces.length;++r){const i=this.forces[r];if(!i.initialize()){this.forces.splice(r,1),--r;const o=i.bodyA.forces.indexOf(i);o!==-1&&i.bodyA.forces.splice(o,1);const a=i.bodyB.forces.indexOf(i);a!==-1&&i.bodyB.forces.splice(a,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let o=0;o<i.getRows();++o){if(this.postStabilization){let a=i.penalty[o]*this.gamma;a<Dn&&(a=Dn),a>on&&(a=on),i.penalty[o]=a}else{i.lambda[o]=i.lambda[o]*this.alpha*this.gamma;let a=i.penalty[o]*this.gamma;a<Dn&&(a=Dn),a>on&&(a=on),i.penalty[o]=a}i.penalty[o]=Math.min(i.penalty[o],i.stiffness[o])}}for(let r=0;r<this.bodies.length;++r){const i=this.bodies[r];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(q(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=qt(Be(),i.getPosition(),xt(Be(),i.getVelocity(),this.dt)),i.getMass()!==0){let u=xt(Be(),q(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=qt(i.inertial,i.inertial,u)}let l=xt(Be(),Nt(Be(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);l<0&&(l=0),l>1&&(l=1),i.lastPosition=cc(i.getPosition());const f=xt(Be(),i.getVelocity(),this.dt),c=xt(Be(),q(this.gravity[0],this.gravity[1],0),l*this.dt*this.dt);i.setPosition(qt(Be(),i.getPosition(),qt(Be(),f,c)))}const n=this.iterations+(this.postStabilization?1:0);for(let r=0;r<n;++r){let i=this.alpha;this.postStabilization&&(i=r<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const o=Hr(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),a=Zi(ui(),o,1/(this.dt*this.dt)),l=Wr(Be(),Nt(Be(),s.getPosition(),s.inertial),a);for(const c of s.forces){c.computeConstraints(i),c.computeDerivatives(s);for(let u=0;u<c.getRows();++u){let h=c.stiffness[u]===1/0?c.lambda[u]:0,m=c.penalty[u]*c.C[u]+h;m<c.fmin[u]&&(m=c.fmin[u]),m>c.fmax[u]&&(m=c.fmax[u]);const d=Hr(Tr(q(c.H[u][0],c.H[u][3],c.H[u][6])),0,0,0,Tr(q(c.H[u][1],c.H[u][4],c.H[u][7])),0,0,0,Tr(q(c.H[u][2],c.H[u][5],c.H[u][8])));Zi(d,d,Math.abs(m)),qt(l,l,xt(Be(),c.J[u],m));const v=pc(c.J[u],xt(Be(),c.J[u],c.penalty[u]));Ji(a,a,v),Ji(a,a,d)}}const f=mc(a,l);s.setPosition(Nt(Be(),s.getPosition(),f))}if(r<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let o=0;o<s.getRows();++o){let a=s.stiffness[o]===1/0?s.lambda[o]:0;s.lambda[o]=a+s.penalty[o]*s.C[o],s.lambda[o]<s.fmin[o]&&(s.lambda[o]=s.fmin[o]),s.lambda[o]>s.fmax[o]&&(s.lambda[o]=s.fmax[o]),Math.abs(s.lambda[o])>=s.fracture[o]&&s.disable(),s.lambda[o]>s.fmin[o]&&s.lambda[o]<s.fmax[o]&&(s.penalty[o]=Math.min(s.penalty[o]+this.beta*Math.abs(s.C[o]),Math.min(s.stiffness[o],on)))}}if(r==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const o=Nt(Be(),s.getPosition(),s.lastPosition);xt(o,o,1/this.dt),s.setVelocity(o)}}}}addRigidBox(t){this.bodies.indexOf(t)===-1&&this.bodies.push(t)}removeRigidBox(t){const n=this.bodies.indexOf(t);n!==-1&&this.bodies.splice(n,1)}}class pf{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(t){this.canvas=t,this.gameRenderer=new it(this.canvas,this),this.solver=new df,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(t){this.logging&&console.log(`[GameManager] ${t}`)}logWarn(t){this.logging&&console.warn(`[GameManager] ${t}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const t=q(it.xWorldSize*.5,8,0),n=ne(it.xWorldSize-20,10);this.addRigidBox(t,n,q(0,0,0),new Uint8Array([200,200,200,255]),!0);const r=1/60;let i=0;this.lastFrameTime=performance.now();const s=o=>{if(!this.running)return;const a=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,i+=a;i>=r;)this.solver.step(r),i-=r;for(let l=0;l<this.solver.bodies.length;++l){const f=this.solver.bodies[l],c=f.getPosition(),u=new Float32Array([c[0],c[1],c[2]]);this.gameRenderer.updateInstancePosition(f.id,u)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s)};this.rafID=requestAnimationFrame(s)}addRigidBox(t=gc(0,0,it.xWorldSize,it.yWorldSize),n=ne(oe(2,10),oe(2,10)),r=q(0,0,0),i=vc(),s=!1){const o=new of(n,i,s?0:1,1,t,r);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",t=>{if(!this.canvas)return;const n=this.canvas.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top,s=r/this.canvas.width*it.xWorldSize,o=(1-i/this.canvas.height)*it.yWorldSize,a=q(s,o,oe(0,Math.PI*2));this.addRigidBox(a)})}}async function mf(e){const t=new pf(e);return await t.initialize(),t}const gf=`// ============================== //\r
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
}`,vf=`// ============================== //\r
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
}`,bf=`struct Uniforms {\r
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
}`,yf=`struct Uniforms {\r
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
}`;function pi(e){const t={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:e,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,modelMatrix:cs(),viewMatrix:cs(),projectionMatrix:Do(Math.PI/4,e,.1,1e3)};return Ro(t),t}function mi(e,t,n,r){e.position[0]=t,e.position[1]=n,e.position[2]=r,yi(e)}function gi(e,t){e.aspect=t,Uo(e)}function vi(e,t,n){e.near=t,e.far=n,Uo(e)}function bi(e,t,n,r){e.position[0]+=e.forward[0]*t+e.right[0]*n+e.up[0]*r,e.position[1]+=e.forward[1]*t+e.right[1]*n+e.up[1]*r,e.position[2]+=e.forward[2]*t+e.right[2]*n+e.up[2]*r,yi(e)}function hr(e,t,n){e.yaw+=t,e.pitch+=n;const r=Math.PI/2-.01;for(e.pitch=Math.max(-r,Math.min(r,e.pitch));e.yaw>Math.PI;)e.yaw-=2*Math.PI;for(;e.yaw<-Math.PI;)e.yaw+=2*Math.PI;Ro(e)}function Ae(e,t,n){hr(e,t*e.rotateSpeed,n*e.rotateSpeed)}function Ro(e){e.forward[0]=Math.cos(e.pitch)*Math.cos(e.yaw),e.forward[1]=Math.sin(e.pitch),e.forward[2]=Math.cos(e.pitch)*Math.sin(e.yaw),Qt(e.forward);const t=Kn(e.forward,e.worldUp);Qt(t),e.right[0]=t[0],e.right[1]=t[1],e.right[2]=t[2];const n=Kn(e.right,e.forward);Qt(n),e.up[0]=n[0],e.up[1]=n[1],e.up[2]=n[2],yi(e)}function yi(e){const t=new Float32Array([e.position[0]+e.forward[0],e.position[1]+e.forward[1],e.position[2]+e.forward[2]]);e.viewMatrix=xf(e.position,t,e.up)}function Uo(e){e.projectionMatrix=Do(e.fovY,e.aspect,e.near,e.far)}function cs(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Do(e,t,n,r){const i=1/Math.tan(e*.5),s=1/(n-r);return new Float32Array([i/t,0,0,0,0,i,0,0,0,0,r*s,-1,0,0,n*r*s,0])}function xf(e,t,n){const r=new Float32Array([e[0]-t[0],e[1]-t[1],e[2]-t[2]]);Qt(r);const i=Kn(n,r);Qt(i);const s=Kn(r,i);return new Float32Array([i[0],s[0],r[0],0,i[1],s[1],r[1],0,i[2],s[2],r[2],0,-vn(i,e),-vn(s,e),-vn(r,e),1])}function Qt(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);t>1e-5&&(e[0]/=t,e[1]/=t,e[2]/=t)}function Kn(e,t){return new Float32Array([e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]])}function vn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function xi(e){const t=Math.tan(e.fovY/2),n=e.aspect*t,r=t;return new Float32Array([e.right[0]*n,e.right[1]*n,e.right[2]*n,0,e.up[0]*r,e.up[1]*r,e.up[2]*r,0,e.forward[0],e.forward[1],e.forward[2],0,0,0,0,1])}function Sf(e,t,n){const r=xi(e),i=new Float32Array([r[0]*t+r[4]*n+r[8]*1,r[1]*t+r[5]*n+r[9]*1,r[2]*t+r[6]*n+r[10]*1]);return Qt(i),i}function wf(e,t,n,r){const i=new Float32Array([n[0]-e[0],n[1]-e[1],n[2]-e[2]]),s=vn(i,t);if(s<0)return-1;const o=vn(i,i)-s*s,a=r*r;if(o>a)return-1;const l=Math.sqrt(a-o),f=s-l;return f<0?-1:f}async function Bf(e){const t=new Of;return await t.initialize(e),t}const us=264,fs=128,Pf=0,Cf=20,Mf=0,Tf=1e3;let Of=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=cr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=pi(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){mi(this.camera,278,500,-700),hr(this.camera,0,-.3),vi(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const t=Zt();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((s,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=s,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),t.appendChild(document.createElement("br")),t.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=Pf.toString(),this.intensitySlider.max=Cf.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const r=document.createElement("label");r.htmlFor="intensitySlider",r.textContent=" Light Intensity",t.appendChild(document.createElement("br")),t.appendChild(this.intensitySlider),t.appendChild(r),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=Mf.toString(),this.numBouncesSlider.max=Tf.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const i=document.createElement("label");i.htmlFor="numBouncesSlider",i.textContent=" Number of Bounces",t.appendChild(document.createElement("br")),t.appendChild(this.numBouncesSlider),t.appendChild(i)}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Tt(this.device,gf,vf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Tt(this.device,bf,yf,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=Cc();this.additionalInfo=t.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,t.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:t.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,t.indexData),this.normalObjects.numIndices=t.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,t.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:t.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,t.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,t.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:us,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,t.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,t.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,t.colorData);var n=new Uint32Array(t.indexData.length);for(let r=0;r<t.indexData.length;r++)n[r]=t.indexData[r];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,n),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:t.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,t.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:fs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ae(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&bi(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&Ae(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ae(this.camera,1,0),this.keysPressed.has("arrowup")&&Ae(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ae(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(fs),n=new Float32Array(t),r=new Uint32Array(t);n.set(xi(this.camera),0),n.set(this.camera.position,16),n.set(this.light.position,20),n.set(this.light.color,24),r[28]=this.rayTracingMode,n[29]=this.light.intensity,r[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new Float32Array(us/4);let n=0;t.set(this.camera.modelMatrix,n),n+=16,t.set(this.camera.viewMatrix,n),n+=16,t.set(this.camera.projectionMatrix,n),n+=16,t.set(this.light.position,n),n+=4,t.set(this.light.color,n),n+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){const t=performance.now()*.001,n=200,r=250,i=276,s=278.5,o=450;if(this.light.position[0]=i+n*Math.cos(t),this.light.position[1]=o,this.light.position[2]=s+r*Math.sin(t),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const a=this.additionalInfo.cubeCenter,f=So(0,t,0),c=this.additionalInfo.cubeVertexStart,u=this.additionalInfo.cubeVertexCount,h=this.additionalInfo.cubeVertexInfo,m=new Float32Array(u*3),d=this.additionalInfo.cubeNormalsInfo,v=new Float32Array(u*3);for(let x=0;x<u;x++){const y=x*3,b=h[y]-a[0],S=h[y+1]-a[1],w=h[y+2]-a[2];m[y]=f[0]*b+f[1]*S+f[2]*w+a[0],m[y+1]=f[3]*b+f[4]*S+f[5]*w+a[1],m[y+2]=f[6]*b+f[7]*S+f[8]*w+a[2];const M=d[y],_=d[y+1],R=d[y+2];v[y]=f[0]*M+f[1]*_+f[2]*R,v[y+1]=f[3]*M+f[4]*_+f[5]*R,v[y+2]=f[6]*M+f[7]*_+f[8]*R}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,c*3*4,m),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,c*3*4,v)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,c*3*4,m),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,c*3*4,v))}}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);this.useRaytracing?(u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.draw(6)):(u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup),u.setVertexBuffer(0,this.normalObjects.positionBuffer),u.setVertexBuffer(1,this.normalObjects.normalBuffer),u.setVertexBuffer(2,this.normalObjects.uvBuffer),u.setVertexBuffer(3,this.normalObjects.colorBuffer),u.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),u.drawIndexed(this.normalObjects.numIndices)),u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),gi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),ur(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const Ef=`struct Uniforms {\r
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
}`,_f=`struct Uniforms {\r
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
}`,hs=264;async function Rf(e){const t=new Uf;return await t.initialize(e),t}class Uf{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=cr();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=pi(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,mi(this.camera,300,200,300),hr(this.camera,9*Math.PI/12,-Math.PI/6),vi(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=Tt(this.device,Ef,_f,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeUtils(){const t=Zt();if(!t)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",t.appendChild(this.wireFrameCheckbox),t.appendChild(this.wireFrameLabel),t.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(r=>{const i=document.createElement("option");i.value=r,i.text=r.charAt(0).toUpperCase()+r.slice(1),this.cullModeSelect.appendChild(i)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),t.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",t.appendChild(document.createElement("br")),t.appendChild(this.useSortingCheckbox),t.appendChild(this.useSortingLabel)}initializeScene(){const t=Or({translation:q(0,0,-100),rotation:q(0,0,0),scale:q(200,200,1)},[.8,.8,.7]);t.additionalInfo={order:0,numVertices:t.vertexData.length/3},this.facesTopologyInformation.push(t);const n=Or({translation:q(-100,0,0),rotation:q(0,-Math.PI/2,0),scale:q(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:1,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const r=Or({translation:q(0,-100,0),rotation:q(Math.PI/2,0,0),scale:q(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:2,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const i=25,s=32;let o=3,a=0;const l=-100+i;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++){const d=[h*i*2,l,m*i*2],v=Er(d,i,[Math.random(),Math.random(),Math.random()],s,s);v.additionalInfo={order:o++,numVertices:v.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(v),this.currentSphereOrders.push(v.additionalInfo.id)}const f=l+i*Math.sqrt(2);for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){const d=[(h-.5)*i*2,f,(m-.5)*i*2],v=Er(d,i,[Math.random(),Math.random(),Math.random()],s,s);v.additionalInfo={order:o++,numVertices:v.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(v),this.currentSphereOrders.push(v.additionalInfo.id)}const c=[0,f+i*Math.sqrt(2),0],u=Er(c,i,[Math.random(),Math.random(),Math.random()],s,s);u.additionalInfo={order:o++,numVertices:u.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(u),this.currentSphereOrders.push(u.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const t=this.device.queue;this.initializeScene();const n=[],r=[],i=[],s=[],o=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const v=this.facesTopologyInformation[d];v.additionalInfo&&(n.push(v.vertexData),r.push(v.indexData),i.push(v.normalData),s.push(v.colorData),o.push(v.uvData))}const a=this.currentSphereOrders.slice();for(let d=a.length-1;d>0;d--){const v=Math.floor(Math.random()*(d+1));[a[d],a[v]]=[a[v],a[d]]}for(let d=0;d<this.spheresTopologyInformation.length;d++){const v=this.spheresTopologyInformation[a[d]];v.additionalInfo&&(n.push(v.vertexData),r.push(v.indexData),i.push(v.normalData),s.push(v.colorData),o.push(v.uvData))}const l=n.map(d=>d.length/3),f=St(n),c=ts(r,l),u=St(i),h=St(s),m=St(o);this.totalIndices=c.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:hs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.vertexBuffer,0,f),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:u.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.normalBuffer,0,u),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:h.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.colorBuffer,0,h),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:m.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.uvBuffer,0,m),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:c.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.indexBuffer,0,c),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ae(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&(bi(this.camera,-r,t,n),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&Ae(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ae(this.camera,1,0),this.keysPressed.has("arrowup")&&Ae(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ae(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const t=new ArrayBuffer(hs),n=new Float32Array(t);n.set(this.camera.modelMatrix,0),n.set(this.camera.viewMatrix,16),n.set(this.camera.projectionMatrix,32),n.set(this.light.position,48),n.set(this.light.color,52),n[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,t)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const t=this.camera.position,n=[];for(let d=0;d<this.spheresTopologyInformation.length;d++){const x=this.spheresTopologyInformation[d].transform.translation,y=x[0]-t[0],b=x[1]-t[1],S=x[2]-t[2],w=Math.sqrt(y*y+b*b+S*S),M=this.spheresTopologyInformation[d].additionalInfo.id;n.push({id:M,distance:w})}n.sort((d,v)=>v.distance-d.distance),this.currentSphereOrders=n.map(d=>d.id);const r=[],i=[],s=[],o=[],a=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const v=this.facesTopologyInformation[d];v.additionalInfo&&(r.push(v.vertexData),i.push(v.indexData),s.push(v.normalData),o.push(v.colorData),a.push(v.uvData))}for(let d=0;d<this.currentSphereOrders.length;d++){const v=this.currentSphereOrders[d],x=this.spheresTopologyInformation.find(y=>y.additionalInfo.id===v);x&&(r.push(x.vertexData),i.push(x.indexData),s.push(x.normalData),o.push(x.colorData),a.push(x.uvData))}const l=r.map(d=>d.length/3),f=St(r),c=ts(i,l),u=St(s),h=St(o),m=St(a);this.device.queue.writeBuffer(this.vertexBuffer,0,f),this.device.queue.writeBuffer(this.indexBuffer,0,c),this.device.queue.writeBuffer(this.normalBuffer,0,u),this.device.queue.writeBuffer(this.colorBuffer,0,h),this.device.queue.writeBuffer(this.uvBuffer,0,m)}startMainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const a=this.context.getCurrentTexture().createView(),l={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);u.setPipeline(this.renderPipeline),u.setBindGroup(0,this.bindGroup),u.setVertexBuffer(0,this.vertexBuffer),u.setVertexBuffer(1,this.normalBuffer),u.setVertexBuffer(2,this.uvBuffer),u.setVertexBuffer(3,this.colorBuffer),u.setIndexBuffer(this.indexBuffer,"uint16"),u.drawIndexed(this.totalIndices,1,0,0,0),u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),gi(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),ur(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const Df=`// ============================== //\r
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
}`,If=`// ============================== //\r
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
    metalness: f32,\r
    usePerlinMetalness : f32,\r
    roughness : f32,\r
    usePerlinRoughness : f32,\r
    perlinFreq : f32,\r
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
    let baseIndex = materialIndex * 8u;\r
\r
    var mat: Material;\r
    mat.albedo = vec3f(\r
        materials[baseIndex],\r
        materials[baseIndex + 1u],\r
        materials[baseIndex + 2u]\r
    );\r
    mat.metalness = materials[baseIndex + 3u];\r
    mat.usePerlinMetalness = materials[baseIndex + 4u];\r
    mat.roughness = materials[baseIndex + 5u];\r
    mat.usePerlinRoughness = materials[baseIndex + 6u];\r
    mat.perlinFreq = materials[baseIndex + 7u];\r
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
    let albedo = material.albedo;\r
\r
    var alphap = material.roughness;\r
    if (material.usePerlinRoughness > 0.5)\r
    {\r
        let perlinRoughness = fbmPerlin2D(uv * 5.0, material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        alphap = clamp(perlinRoughness * 0.5 + 0.5, 0.0, 1.0);\r
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
        let inShadow = rayTraceOnce(shadowRay, &shadowHit);\r
    \r
        // If in shadow (and we find blocker)\r
        if (inShadow && shadowHit.distance < lightDistance)\r
        {\r
            continue;\r
        }\r
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
        totalColor = totalColor + f * radiance * NdotL;\r
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
}`,Af=`struct SpotLight\r
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
}`,Ff=`struct Material {\r
    albedo : vec3<f32>,\r
    metalness : f32,\r
    usePerlinMetalness : f32,\r
    roughness : f32,\r
    usePerlinRoughness : f32,\r
    perlinFreq : f32,\r
}; // Total: 32 bytes\r
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
@group(1) @binding(0)\r
var<uniform> material : Material;\r
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
    let albedo = material.albedo;\r
\r
    var alphap = material.roughness;\r
    if (material.usePerlinRoughness > 0.5)\r
    {\r
        let perlinRoughness = fbmPerlin2D(input.uv * 5.0, material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        alphap = clamp(perlinRoughness * 0.5 + 0.5, 0.0, 1.0);\r
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
\r
    let ka = 0.1;\r
    var n = normalize(input.normal);\r
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
        totalColor = totalColor + f * radiance * NdotL;\r
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
}`;async function zf(e){const t=new Gf;return await t.initialize(e),t}const ds=464,Ur=32,ps=288,Lf=8;class Gf{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=cr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=pi(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;useRaytracingCheckBox=null;rayTracingModeSelect=null;rayTracingMode=0;sphereResolution=8;sphereResolutionSlider=null;spheresInfo;activeContextMenu=null;constructor(){mi(this.camera,278,500,-700),hr(this.camera,0,-.3),vi(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const t={position:q(500,500,0),intensity:1e3,direction:q(-.5,-.9,1),coneAngle:Math.PI/6,color:q(.85,.1,.1),enabled:!0};this.lights.push(t);const n={position:q(50,500,0),intensity:1e3,direction:q(.5,-.9,1),coneAngle:Math.PI/6,color:q(.1,.85,.1),enabled:!0};this.lights.push(n);const r={position:q(275,255,0),intensity:1500,direction:q(0,0,1),coneAngle:Math.PI/6,color:q(.9,.9,.9),enabled:!0};this.lights.push(r)}initializeUtils(){const t=Zt();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked});const n=document.createElement("label");n.htmlFor="useRaytracingCheckbox",n.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(n),this.sphereResolutionSlider=document.createElement("input"),this.sphereResolutionSlider.type="range",this.sphereResolutionSlider.min="8",this.sphereResolutionSlider.max="64",this.sphereResolutionSlider.step="1",this.sphereResolutionSlider.value=this.sphereResolution.toString(),this.sphereResolutionSlider.tabIndex=-1,this.sphereResolutionSlider.addEventListener("input",()=>{this.sphereResolution=parseInt(this.sphereResolutionSlider.value),this.startRendering()});const r=document.createElement("label");r.htmlFor="sphereResolutionSlider",r.textContent=" Sphere Resolution",t.appendChild(document.createElement("br")),t.appendChild(this.sphereResolutionSlider),t.appendChild(r),this.lights.forEach((c,u)=>{const h=document.createElement("button");h.style.cssText="background-color: #444444; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;",h.textContent=`Edit Light ${u+1}`,h.tabIndex=-1,h.addEventListener("click",m=>{m.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const d={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Oc(d,this.lights[u],`Edit Light ${u+1}`,v=>{this.lights[u]=v},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)}),t.appendChild(document.createElement("br")),t.appendChild(h)});const i=document.createElement("label");i.htmlFor="acSlider",i.textContent=`Constant (ac): ${this.a_c.toFixed(2)}`,t.appendChild(document.createElement("br")),t.appendChild(i);const s=document.createElement("input");s.type="range",s.min="0.0",s.max="2.0",s.step="0.01",s.value=this.a_c.toString(),s.tabIndex=-1,s.addEventListener("input",()=>{this.a_c=parseFloat(s.value),i.textContent=`Constant (ac): ${this.a_c.toFixed(2)}`}),t.appendChild(s);const o=document.createElement("label");o.htmlFor="alSlider",o.textContent=`Linear (al): ${this.a_l.toFixed(3)}`,t.appendChild(document.createElement("br")),t.appendChild(o);const a=document.createElement("input");a.type="range",a.min="0.0",a.max="0.5",a.step="0.001",a.value=this.a_l.toString(),a.tabIndex=-1,a.addEventListener("input",()=>{this.a_l=parseFloat(a.value),o.textContent=`Linear (al): ${this.a_l.toFixed(3)}`}),t.appendChild(a);const l=document.createElement("label");l.htmlFor="aqSlider",l.textContent=`Quadratic (aq): ${this.a_q.toFixed(4)}`,t.appendChild(document.createElement("br")),t.appendChild(l);const f=document.createElement("input");f.type="range",f.min="0.0",f.max="0.1",f.step="0.0001",f.value=this.a_q.toString(),f.tabIndex=-1,f.addEventListener("input",()=>{this.a_q=parseFloat(f.value),l.textContent=`Quadratic (aq): ${this.a_q.toFixed(4)}`}),t.appendChild(f)}async initialize(t){if(this.canvas=t,this.device=await _t(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Tt(this.device,Df,If,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Tt(this.device,Af,Ff,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=this.spheresInfo?.sphereMaterials||[],n=Mc(t,this.sphereResolution);this.normalObjects.perMaterialTopologies=n,this.spheresInfo=n.additionalInfo;const r=n.materials.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[];for(let y=0;y<r;y++){this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+y,size:Ur,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const b=new ArrayBuffer(Ur),S=new Float32Array(b);S.set(n.materials[y].albedo,0),S[3]=n.materials[y].metalness,S[4]=n.materials[y].usePerlinMetalness?1:0,S[5]=n.materials[y].roughness,S[6]=n.materials[y].usePerlinRoughness?1:0,S[7]=n.materials[y].perlinFreq,this.device.queue.writeBuffer(this.normalObjects.materialUniforms[y],0,b),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+y,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[y]}}]})),this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+y,size:n.pmTopologies[y].vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[y],0,n.pmTopologies[y].vertexData),this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+y,size:n.pmTopologies[y].indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[y],0,n.pmTopologies[y].indexData),this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+y,size:n.pmTopologies[y].normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[y],0,n.pmTopologies[y].normalData),this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+y,size:n.pmTopologies[y].uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[y],0,n.pmTopologies[y].uvData)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:ds,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const i=[],s=[],o=[],a=[],l=[];let f=0;for(let y=0;y<r;y++){let b=n.pmTopologies[y];i.push(...b.vertexData),s.push(...b.normalData),o.push(...b.uvData);for(let S of b.indexData)a.push(S+f);f+=b.vertexData.length/3;for(let S=0;S<b.indexData.length/3;S++)l.push(y)}const c=new Float32Array(i),u=new Float32Array(s),h=new Float32Array(o),m=new Uint32Array(a),d=new Uint32Array(l);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:ps,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:c.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,c),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:u.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,u),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,h),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:m.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,m),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,d),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const v=[];for(let y of this.normalObjects.perMaterialTopologies.materials)v.push(...y.albedo),v.push(y.metalness),v.push(y.usePerlinMetalness?1:0),v.push(y.roughness),v.push(y.usePerlinRoughness?1:0),v.push(y.perlinFreq);const x=new Float32Array(v);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:x.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,x),this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=t=>{if(this.isMouseDown=!1,this.activeContextMenu!==null){const r=this.activeContextMenu.getBoundingClientRect();if(t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom)return}let n=this.rayCastOnSpheres(t.clientX,t.clientY);n!==-1&&(console.log("Clicked on sphere index: ",n),this.spawnMaterialContextMenu(n,t.clientX,t.clientY))};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ae(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&bi(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&Ae(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ae(this.camera,1,0),this.keysPressed.has("arrowup")&&Ae(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ae(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(ps),n=new Float32Array(t),r=new Uint32Array(t);n.set(xi(this.camera),0),n.set(this.camera.position,16),r[19]=this.rayTracingMode,n[20]=this.a_c,n[21]=this.a_l,n[22]=this.a_q,n[23]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],o=24+i*12;n.set(s.position,o),n[o+3]=s.intensity,n.set(s.direction,o+4),n[o+7]=s.coneAngle,n.set(s.color,o+8),n[o+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new ArrayBuffer(ds),n=new Float32Array(t);n.set(this.camera.modelMatrix,0),n.set(this.camera.viewMatrix,16),n.set(this.camera.projectionMatrix,32),n.set(this.camera.position,48),n[52]=this.a_c,n[53]=this.a_l,n[54]=this.a_q,n[55]=0;for(let r=0;r<3&&!(r>=this.lights.length);r++){const i=this.lights[r],s=56+r*12;n.set(i.position,s),n[s+3]=i.intensity,n.set(i.direction,s+4),n[s+7]=i.coneAngle,n.set(i.color,s+8),n[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);if(this.useRaytracing)u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.setBindGroup(1,this.rayTracerObjects.materialBindGroup),u.draw(6);else{u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.perMaterialTopologies.materials.length;d++)u.setBindGroup(1,this.normalObjects.materialBindGroups[d]),u.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),u.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),u.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),u.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),u.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0)}u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),gi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox?.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.rayTracingModeSelect?.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),this.sphereResolutionSlider?.removeEventListener("input",()=>{this.sphereResolution=parseInt(this.sphereResolutionSlider.value),this.startRendering()}),this.removeInputHandlers(),ur(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(t,n){if(t<0||t>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const r=n.name,i=this.normalObjects.perMaterialTopologies.materials.findIndex(c=>c.name===r)||-1;if(i===-1)return;this.spheresInfo.sphereMaterials[t]=n,this.normalObjects.perMaterialTopologies.materials[i]=n;const s=this.spheresInfo.sphereMaterialIndices[t],o=new ArrayBuffer(Ur),a=new Float32Array(o);a.set(n.albedo,0),a[3]=n.metalness,a[4]=n.usePerlinMetalness?1:0,a[5]=n.roughness,a[6]=n.usePerlinRoughness?1:0,a[7]=n.perlinFreq;let l=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(l,0,o);const f=s*Lf*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,f,o)}rayCastOnSpheres(t,n){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const r=this.spheresInfo.sphereTransforms,i=this.canvas.getBoundingClientRect(),s=t-i.left,o=n-i.top,a=this.canvas.width/i.width,l=this.canvas.height/i.height,f=2*s*a/this.canvas.width-1,c=1-2*o*l/this.canvas.height,u=Sf(this.camera,f,c);let h=-1,m=Number.POSITIVE_INFINITY;for(let d=0;d<r.length;d++){const v=r[d],x=v.translation,y=v.scale[0],b=wf(this.camera.position,u,x,y);b<=0||b<m&&(m=b,h=d)}return h}spawnMaterialContextMenu(t,n,r){if(this.canvas===null)return;this.removeContextMenu();const i=this.spheresInfo?.sphereMaterials?.[t];if(!i)return;this.activeContextMenu=Tc({x:n,y:r},i,o=>{this.changeSphereMaterial(t,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const Vf={class:"flex justify-center items-center w-full h-full"},jf={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},qf=["onClick","onMouseenter"],Nf={id:"utils-wrapper",class:"absolute bottom-0 right-0 flex flex-col items-end"},kf={id:"utils",class:"p-1 bg-gray-700"},Hf=Ea({__name:"App",setup(e){const t=Rt(null),n=Rt(null),r=Rt(!1),i=[Rc,Fc,Xc,iu,hu,ef,mf,Bf,Rf,zf],s=i.length,o=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Video","Game","Ray Trace","Transparency","PBR"],a=Rt(null),l=Rt(0),f=Rt(0),c=Rt(!0);async function u(y){if(!r.value){if(r.value=!0,n.value&&typeof n.value.cleanup=="function"&&(await n.value.cleanup(),n.value=null),t.value){const b=i[y-1];b&&(n.value=await b(t.value))}r.value=!1}}function h(y,b){a.value=y;const S=b.currentTarget,w=S.parentElement;if(w){const M=w.getBoundingClientRect(),_=S.getBoundingClientRect();l.value=_.top-M.top,f.value=_.height}}function m(){a.value=null}const d=Nr(()=>a.value!==null?o[a.value-1]:""),v=Nr(()=>a.value===null?{top:l.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:l.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});function x(){c.value=!c.value}return Ys(()=>{Po(),u(8)}),(y,b)=>(Br(),Pr("div",Vf,[rt("div",jf,[(Br(!0),Pr(st,null,qa(Ls(s),S=>(Br(),Pr("button",{key:S,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>u(S),onKeydown:[b[0]||(b[0]=Xi(Qi(()=>{},["prevent"]),["space"])),b[1]||(b[1]=Xi(Qi(()=>{},["prevent"]),["enter"]))],onMouseenter:w=>h(S,w),onMouseleave:m},In(S),41,qf))),128))]),rt("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:t,class:"w-[90%] h-full"},null,512),b[2]||(b[2]=rt("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),rt("div",Nf,[rt("button",{onClick:x,class:"m-0 p-0 bg-white text-black flex items-center"},[rt("img",{src:ac,class:bn([c.value?"rotate-90":"-rotate-90","w-6 h-6 transition-transform duration-200"])},null,2),go(" "+In(c.value?"Hide":"Show")+" Utils ",1)]),Ma(rt("pre",kf,null,512),[[Ll,c.value]])]),rt("div",{class:bn(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",a.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:nr(v.value)},In(d.value),7)]))}}),Wf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},$f=Wf(Hf,[["__scopeId","data-v-498c70d2"]]);ic($f).mount("#app");
