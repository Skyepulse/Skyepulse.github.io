(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ni(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const de={},Qt=[],ut=()=>{},Wo=()=>!1,sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ri=e=>e.startsWith("onUpdate:"),Ie=Object.assign,ii=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$o=Object.prototype.hasOwnProperty,ie=(e,t)=>$o.call(e,t),Q=Array.isArray,Kt=e=>or(e)==="[object Map]",Ms=e=>or(e)==="[object Set]",J=e=>typeof e=="function",Pe=e=>typeof e=="string",It=e=>typeof e=="symbol",we=e=>e!==null&&typeof e=="object",Ts=e=>(we(e)||J(e))&&J(e.then)&&J(e.catch),Cs=Object.prototype.toString,or=e=>Cs.call(e),Yo=e=>or(e).slice(8,-1),Os=e=>or(e)==="[object Object]",si=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xo=/-(\w)/g,Ot=ar(e=>e.replace(Xo,(t,n)=>n?n.toUpperCase():"")),Qo=/\B([A-Z])/g,Rt=ar(e=>e.replace(Qo,"-$1").toLowerCase()),Es=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),yr=ar(e=>e?`on${Es(e)}`:""),Ct=(e,t)=>!Object.is(e,t),Br=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},zr=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ko=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ui;const lr=()=>Ui||(Ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cr(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Pe(r)?ta(r):cr(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Pe(e)||we(e))return e}const Jo=/;(?![^(]*\))/g,Zo=/:([^]+)/,ea=/\/\*[^]*?\*\//g;function ta(e){const t={};return e.replace(ea,"").split(Jo).forEach(n=>{if(n){const r=n.split(Zo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Mn(e){let t="";if(Pe(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const r=Mn(e[n]);r&&(t+=r+" ")}else if(we(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const na="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ra=ni(na);function _s(e){return!!e||e===""}const Is=e=>!!(e&&e.__v_isRef===!0),jn=e=>Pe(e)?e:e==null?"":Q(e)||we(e)&&(e.toString===Cs||!J(e.toString))?Is(e)?jn(e.value):JSON.stringify(e,Rs,2):String(e),Rs=(e,t)=>Is(t)?Rs(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[wr(r,s)+" =>"]=i,n),{})}:Ms(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wr(n))}:It(t)?wr(t):we(t)&&!Q(t)&&!Os(t)?String(t):t,wr=(e,t="")=>{var n;return It(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class ia{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function sa(){return ze}let me;const Sr=new WeakSet;class Us{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sr.has(this)&&(Sr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ds(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ai(this),Gs(this);const t=me,n=Ze;me=this,Ze=!0;try{return this.fn()}finally{Fs(this),me=t,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)li(t);this.deps=this.depsTail=void 0,Ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jr(this)&&this.run()}get dirty(){return jr(this)}}let As=0,vn,bn;function Ds(e,t=!1){if(e.flags|=8,t){e.next=bn,bn=e;return}e.next=vn,vn=e}function oi(){As++}function ai(){if(--As>0)return;if(bn){let t=bn;for(bn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;vn;){let t=vn;for(vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Gs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fs(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),li(r),oa(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function jr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Tn)||(e.globalVersion=Tn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!jr(e))))return;e.flags|=2;const t=e.dep,n=me,r=Ze;me=e,Ze=!0;try{Gs(e);const i=e.fn(e._value);(t.version===0||Ct(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{me=n,Ze=r,Fs(e),e.flags&=-3}}function li(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)li(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function oa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ze=!0;const Ls=[];function yt(){Ls.push(Ze),Ze=!1}function Bt(){const e=Ls.pop();Ze=e===void 0?!0:e}function Ai(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=me;me=void 0;try{t()}finally{me=n}}}let Tn=0;class aa{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ci{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!Ze||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new aa(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,zs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=r)}return n}trigger(t){this.version++,Tn++,this.notify(t)}notify(t){oi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ai()}}}function zs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)zs(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Nr=new WeakMap,Nt=Symbol(""),kr=Symbol(""),Cn=Symbol("");function Ee(e,t,n){if(Ze&&me){let r=Nr.get(e);r||Nr.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new ci),i.map=r,i.key=n),i.track()}}function vt(e,t,n,r,i,s){const o=Nr.get(e);if(!o){Tn++;return}const a=l=>{l&&l.trigger()};if(oi(),t==="clear")o.forEach(a);else{const l=Q(e),f=l&&si(n);if(l&&n==="length"){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h===Cn||!It(h)&&h>=c)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),f&&a(o.get(Cn)),t){case"add":l?f&&a(o.get("length")):(a(o.get(Nt)),Kt(e)&&a(o.get(kr)));break;case"delete":l||(a(o.get(Nt)),Kt(e)&&a(o.get(kr)));break;case"set":Kt(e)&&a(o.get(Nt));break}}ai()}function qt(e){const t=re(e);return t===e?t:(Ee(t,"iterate",Cn),Ke(e)?t:t.map(Te))}function ur(e){return Ee(e=re(e),"iterate",Cn),e}const la={__proto__:null,[Symbol.iterator](){return Pr(this,Symbol.iterator,Te)},concat(...e){return qt(this).concat(...e.map(t=>Q(t)?qt(t):t))},entries(){return Pr(this,"entries",e=>(e[1]=Te(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(Te),arguments)},find(e,t){return ht(this,"find",e,t,Te,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,Te,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Mr(this,"includes",e)},indexOf(...e){return Mr(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return Mr(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return cn(this,"pop")},push(...e){return cn(this,"push",e)},reduce(e,...t){return Di(this,"reduce",e,t)},reduceRight(e,...t){return Di(this,"reduceRight",e,t)},shift(){return cn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return cn(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return cn(this,"unshift",e)},values(){return Pr(this,"values",Te)}};function Pr(e,t,n){const r=ur(e),i=r[t]();return r!==e&&!Ke(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const ca=Array.prototype;function ht(e,t,n,r,i,s){const o=ur(e),a=o!==e&&!Ke(e),l=o[t];if(l!==ca[t]){const u=l.apply(e,s);return a?Te(u):u}let f=n;o!==e&&(a?f=function(u,h){return n.call(this,Te(u),h,e)}:n.length>2&&(f=function(u,h){return n.call(this,u,h,e)}));const c=l.call(o,f,r);return a&&i?i(c):c}function Di(e,t,n,r){const i=ur(e);let s=n;return i!==e&&(Ke(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Te(a),l,e)}),i[t](s,...r)}function Mr(e,t,n){const r=re(e);Ee(r,"iterate",Cn);const i=r[t](...n);return(i===-1||i===!1)&&di(n[0])?(n[0]=re(n[0]),r[t](...n)):i}function cn(e,t,n=[]){yt(),oi();const r=re(e)[t].apply(e,n);return ai(),Bt(),r}const ua=ni("__proto__,__v_isRef,__isVue"),js=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(It));function fa(e){It(e)||(e=String(e));const t=re(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ns{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Ba:Ws:s?Hs:qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=Q(t);if(!i){let l;if(o&&(l=la[n]))return l;if(n==="hasOwnProperty")return fa}const a=Reflect.get(t,n,_e(t)?t:r);return(It(n)?js.has(n):ua(n))||(i||Ee(t,"get",n),s)?a:_e(a)?o&&si(n)?a:a.value:we(a)?i?$s(a):fi(a):a}}class ks extends Ns{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const l=Et(s);if(!Ke(r)&&!Et(r)&&(s=re(s),r=re(r)),!Q(t)&&_e(s)&&!_e(r))return l?!1:(s.value=r,!0)}const o=Q(t)&&si(n)?Number(n)<t.length:ie(t,n),a=Reflect.set(t,n,r,_e(t)?t:i);return t===re(i)&&(o?Ct(r,s)&&vt(t,"set",n,r):vt(t,"add",n,r)),a}deleteProperty(t,n){const r=ie(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&vt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!It(n)||!js.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",Q(t)?"length":Nt),Reflect.ownKeys(t)}}class ha extends Ns{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const da=new ks,pa=new ha,ma=new ks(!0);const qr=e=>e,An=e=>Reflect.getPrototypeOf(e);function ga(e,t,n){return function(...r){const i=this.__v_raw,s=re(i),o=Kt(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?qr:t?Yn:Te;return!t&&Ee(s,"iterate",l?kr:Nt),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:a?[c(u[0]),c(u[1])]:c(u),done:h}},[Symbol.iterator](){return this}}}}function Dn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function va(e,t){const n={get(i){const s=this.__v_raw,o=re(s),a=re(i);e||(Ct(i,a)&&Ee(o,"get",i),Ee(o,"get",a));const{has:l}=An(o),f=t?qr:e?Yn:Te;if(l.call(o,i))return f(s.get(i));if(l.call(o,a))return f(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(re(i),"iterate",Nt),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=re(s),a=re(i);return e||(Ct(i,a)&&Ee(o,"has",i),Ee(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=re(a),f=t?qr:e?Yn:Te;return!e&&Ee(l,"iterate",Nt),a.forEach((c,u)=>i.call(s,f(c),f(u),o))}};return Ie(n,e?{add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear")}:{add(i){!t&&!Ke(i)&&!Et(i)&&(i=re(i));const s=re(this);return An(s).has.call(s,i)||(s.add(i),vt(s,"add",i,i)),this},set(i,s){!t&&!Ke(s)&&!Et(s)&&(s=re(s));const o=re(this),{has:a,get:l}=An(o);let f=a.call(o,i);f||(i=re(i),f=a.call(o,i));const c=l.call(o,i);return o.set(i,s),f?Ct(s,c)&&vt(o,"set",i,s):vt(o,"add",i,s),this},delete(i){const s=re(this),{has:o,get:a}=An(s);let l=o.call(s,i);l||(i=re(i),l=o.call(s,i)),a&&a.call(s,i);const f=s.delete(i);return l&&vt(s,"delete",i,void 0),f},clear(){const i=re(this),s=i.size!==0,o=i.clear();return s&&vt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ga(i,e,t)}),n}function ui(e,t){const n=va(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ie(n,i)&&i in r?n:r,i,s)}const ba={get:ui(!1,!1)},xa={get:ui(!1,!0)},ya={get:ui(!0,!1)};const qs=new WeakMap,Hs=new WeakMap,Ws=new WeakMap,Ba=new WeakMap;function wa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sa(e){return e.__v_skip||!Object.isExtensible(e)?0:wa(Yo(e))}function fi(e){return Et(e)?e:hi(e,!1,da,ba,qs)}function Pa(e){return hi(e,!1,ma,xa,Hs)}function $s(e){return hi(e,!0,pa,ya,Ws)}function hi(e,t,n,r,i){if(!we(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Sa(e);if(s===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function Jt(e){return Et(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Ke(e){return!!(e&&e.__v_isShallow)}function di(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Ma(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&zr(e,"__v_skip",!0),e}const Te=e=>we(e)?fi(e):e,Yn=e=>we(e)?$s(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function At(e){return Ta(e,!1)}function Ta(e,t){return _e(e)?e:new Ca(e,t)}class Ca{constructor(t,n){this.dep=new ci,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ke(t)||Et(t);t=r?t:re(t),Ct(t,n)&&(this._rawValue=t,this._value=r?t:Te(t),this.dep.trigger())}}function Ys(e){return _e(e)?e.value:e}const Oa={get:(e,t,n)=>t==="__v_raw"?e:Ys(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xs(e){return Jt(e)?e:new Proxy(e,Oa)}class Ea{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ci(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Ds(this,!0),!0}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _a(e,t,n=!1){let r,i;return J(e)?r=e:(r=e.get,i=e.set),new Ea(r,i,n)}const Gn={},Xn=new WeakMap;let zt;function Ia(e,t=!1,n=zt){if(n){let r=Xn.get(n);r||Xn.set(n,r=[]),r.push(e)}}function Ra(e,t,n=de){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,f=B=>i?B:Ke(B)||i===!1||i===0?bt(B,1):bt(B);let c,u,h,p,d=!1,m=!1;if(_e(e)?(u=()=>e.value,d=Ke(e)):Jt(e)?(u=()=>f(e),d=!0):Q(e)?(m=!0,d=e.some(B=>Jt(B)||Ke(B)),u=()=>e.map(B=>{if(_e(B))return B.value;if(Jt(B))return f(B);if(J(B))return l?l(B,2):B()})):J(e)?t?u=l?()=>l(e,2):e:u=()=>{if(h){yt();try{h()}finally{Bt()}}const B=zt;zt=c;try{return l?l(e,3,[p]):e(p)}finally{zt=B}}:u=ut,t&&i){const B=u,S=i===!0?1/0:i;u=()=>bt(B(),S)}const x=sa(),y=()=>{c.stop(),x&&x.active&&ii(x.effects,c)};if(s&&t){const B=t;t=(...S)=>{B(...S),y()}}let b=m?new Array(e.length).fill(Gn):Gn;const M=B=>{if(!(!(c.flags&1)||!c.dirty&&!B))if(t){const S=c.run();if(i||d||(m?S.some((O,I)=>Ct(O,b[I])):Ct(S,b))){h&&h();const O=zt;zt=c;try{const I=[S,b===Gn?void 0:m&&b[0]===Gn?[]:b,p];b=S,l?l(t,3,I):t(...I)}finally{zt=O}}}else c.run()};return a&&a(M),c=new Us(u),c.scheduler=o?()=>o(M,!1):M,p=B=>Ia(B,!1,c),h=c.onStop=()=>{const B=Xn.get(c);if(B){if(l)l(B,4);else for(const S of B)S();Xn.delete(c)}},t?r?M(!0):b=c.run():o?o(M.bind(null,!0),!0):c.run(),y.pause=c.pause.bind(c),y.resume=c.resume.bind(c),y.stop=y,y}function bt(e,t=1/0,n){if(t<=0||!we(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,_e(e))bt(e.value,t,n);else if(Q(e))for(let r=0;r<e.length;r++)bt(e[r],t,n);else if(Ms(e)||Kt(e))e.forEach(r=>{bt(r,t,n)});else if(Os(e)){for(const r in e)bt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&bt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rn(e,t,n,r){try{return r?e(...r):e()}catch(i){fr(i,t,n)}}function ft(e,t,n,r){if(J(e)){const i=Rn(e,t,n,r);return i&&Ts(i)&&i.catch(s=>{fr(s,t,n)}),i}if(Q(e)){const i=[];for(let s=0;s<e.length;s++)i.push(ft(e[s],t,n,r));return i}}function fr(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,l,f)===!1)return}a=a.parent}if(s){yt(),Rn(s,null,10,[e,l,f]),Bt();return}}Ua(e,n,i,r,o)}function Ua(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const Ae=[];let st=-1;const Zt=[];let Mt=null,Wt=0;const Qs=Promise.resolve();let Qn=null;function Aa(e){const t=Qn||Qs;return e?t.then(this?e.bind(this):e):t}function Da(e){let t=st+1,n=Ae.length;for(;t<n;){const r=t+n>>>1,i=Ae[r],s=On(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function pi(e){if(!(e.flags&1)){const t=On(e),n=Ae[Ae.length-1];!n||!(e.flags&2)&&t>=On(n)?Ae.push(e):Ae.splice(Da(t),0,e),e.flags|=1,Ks()}}function Ks(){Qn||(Qn=Qs.then(Zs))}function Ga(e){Q(e)?Zt.push(...e):Mt&&e.id===-1?Mt.splice(Wt+1,0,e):e.flags&1||(Zt.push(e),e.flags|=1),Ks()}function Gi(e,t,n=st+1){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Js(e){if(Zt.length){const t=[...new Set(Zt)].sort((n,r)=>On(n)-On(r));if(Zt.length=0,Mt){Mt.push(...t);return}for(Mt=t,Wt=0;Wt<Mt.length;Wt++){const n=Mt[Wt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,Wt=0}}const On=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Zs(e){try{for(st=0;st<Ae.length;st++){const t=Ae[st];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Rn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;st<Ae.length;st++){const t=Ae[st];t&&(t.flags&=-2)}st=-1,Ae.length=0,Js(),Qn=null,(Ae.length||Zt.length)&&Zs()}}let Qe=null,eo=null;function Kn(e){const t=Qe;return Qe=e,eo=e&&e.type.__scopeId||null,t}function Fa(e,t=Qe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Hi(-1);const s=Kn(t);let o;try{o=e(...i)}finally{Kn(s),r._d&&Hi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Va(e,t){if(Qe===null)return e;const n=mr(Qe),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,l=de]=t[i];s&&(J(s)&&(s={mounted:s,updated:s}),s.deep&&bt(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Dt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(yt(),ft(l,n,8,[e.el,a,e,t]),Bt())}}const La=Symbol("_vte"),za=e=>e.__isTeleport;function mi(e,t){e.shapeFlag&6&&e.component?(e.transition=t,mi(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ja(e,t){return J(e)?Ie({name:e.name},t,{setup:e}):e}function to(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function xn(e,t,n,r,i=!1){if(Q(e)){e.forEach((d,m)=>xn(d,t&&(Q(t)?t[m]:t),n,r,i));return}if(yn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?mr(r.component):r.el,o=i?null:s,{i:a,r:l}=e,f=t&&t.r,c=a.refs===de?a.refs={}:a.refs,u=a.setupState,h=re(u),p=u===de?()=>!1:d=>ie(h,d);if(f!=null&&f!==l&&(Pe(f)?(c[f]=null,p(f)&&(u[f]=null)):_e(f)&&(f.value=null)),J(l))Rn(l,a,12,[o,c]);else{const d=Pe(l),m=_e(l);if(d||m){const x=()=>{if(e.f){const y=d?p(l)?u[l]:c[l]:l.value;i?Q(y)&&ii(y,s):Q(y)?y.includes(s)||y.push(s):d?(c[l]=[s],p(l)&&(u[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else d?(c[l]=o,p(l)&&(u[l]=o)):m&&(l.value=o,e.k&&(c[e.k]=o))};o?(x.id=-1,He(x,n)):x()}}}lr().requestIdleCallback;lr().cancelIdleCallback;const yn=e=>!!e.type.__asyncLoader,no=e=>e.type.__isKeepAlive;function Na(e,t){ro(e,"a",t)}function ka(e,t){ro(e,"da",t)}function ro(e,t,n=De){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(hr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)no(i.parent.vnode)&&qa(r,t,n,i),i=i.parent}}function qa(e,t,n,r){const i=hr(t,e,r,!0);so(()=>{ii(r[t],i)},n)}function hr(e,t,n=De,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{yt();const a=Un(n),l=ft(t,n,e,o);return a(),Bt(),l});return r?i.unshift(s):i.push(s),s}}const wt=e=>(t,n=De)=>{(!_n||e==="sp")&&hr(e,(...r)=>t(...r),n)},Ha=wt("bm"),io=wt("m"),Wa=wt("bu"),$a=wt("u"),Ya=wt("bum"),so=wt("um"),Xa=wt("sp"),Qa=wt("rtg"),Ka=wt("rtc");function Ja(e,t=De){hr("ec",e,t)}const Za=Symbol.for("v-ndc");function el(e,t,n,r){let i;const s=n,o=Q(e);if(o||Pe(e)){const a=o&&Jt(e);let l=!1,f=!1;a&&(l=!Ke(e),f=Et(e),e=ur(e)),i=new Array(e.length);for(let c=0,u=e.length;c<u;c++)i[c]=t(l?f?Yn(Te(e[c])):Te(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s)}else if(we(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const c=a[l];i[l]=t(e[c],c,l,s)}}else i=[];return i}const Hr=e=>e?Co(e)?mr(e):Hr(e.parent):null,Bn=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hr(e.parent),$root:e=>Hr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||(e.f=()=>{pi(e.update)}),$nextTick:e=>e.n||(e.n=Aa.bind(e.proxy)),$watch:e=>wl.bind(e)}),Tr=(e,t)=>e!==de&&!e.__isScriptSetup&&ie(e,t),tl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(i!==de&&ie(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&ie(f,t))return o[t]=3,s[t];if(n!==de&&ie(n,t))return o[t]=4,n[t];Wr&&(o[t]=0)}}const c=Bn[t];let u,h;if(c)return t==="$attrs"&&Ee(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==de&&ie(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,ie(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Tr(i,t)?(i[t]=n,!0):r!==de&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==de&&ie(e,o)||Tr(t,o)||(a=s[0])&&ie(a,o)||ie(r,o)||ie(Bn,o)||ie(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fi(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wr=!0;function nl(e){const t=ao(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&Vi(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:f,created:c,beforeMount:u,mounted:h,beforeUpdate:p,updated:d,activated:m,deactivated:x,beforeDestroy:y,beforeUnmount:b,destroyed:M,unmounted:B,render:S,renderTracked:O,renderTriggered:I,errorCaptured:w,serverPrefetch:R,expose:L,inheritAttrs:q,components:k,directives:N,filters:z}=t;if(f&&rl(f,r,null),o)for(const j in o){const V=o[j];J(V)&&(r[j]=V.bind(n))}if(i){const j=i.call(n,n);we(j)&&(e.data=fi(j))}if(Wr=!0,s)for(const j in s){const V=s[j],ue=J(V)?V.bind(n,n):J(V.get)?V.get.bind(n,n):ut,be=!J(V)&&J(V.set)?V.set.bind(n):ut,ee=Qr({get:ue,set:be});Object.defineProperty(r,j,{enumerable:!0,configurable:!0,get:()=>ee.value,set:ne=>ee.value=ne})}if(a)for(const j in a)oo(a[j],r,n,j);if(l){const j=J(l)?l.call(n):l;Reflect.ownKeys(j).forEach(V=>{cl(V,j[V])})}c&&Vi(c,e,"c");function Y(j,V){Q(V)?V.forEach(ue=>j(ue.bind(n))):V&&j(V.bind(n))}if(Y(Ha,u),Y(io,h),Y(Wa,p),Y($a,d),Y(Na,m),Y(ka,x),Y(Ja,w),Y(Ka,O),Y(Qa,I),Y(Ya,b),Y(so,B),Y(Xa,R),Q(L))if(L.length){const j=e.exposed||(e.exposed={});L.forEach(V=>{Object.defineProperty(j,V,{get:()=>n[V],set:ue=>n[V]=ue,enumerable:!0})})}else e.exposed||(e.exposed={});S&&e.render===ut&&(e.render=S),q!=null&&(e.inheritAttrs=q),k&&(e.components=k),N&&(e.directives=N),R&&to(e)}function rl(e,t,n=ut){Q(e)&&(e=$r(e));for(const r in e){const i=e[r];let s;we(i)?"default"in i?s=Nn(i.from||r,i.default,!0):s=Nn(i.from||r):s=Nn(i),_e(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Vi(e,t,n){ft(Q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function oo(e,t,n,r){let i=r.includes(".")?Bo(n,r):()=>n[r];if(Pe(e)){const s=t[e];J(s)&&Or(i,s)}else if(J(e))Or(i,e.bind(n));else if(we(e))if(Q(e))e.forEach(s=>oo(s,t,n,r));else{const s=J(e.handler)?e.handler.bind(n):t[e.handler];J(s)&&Or(i,s,e)}}function ao(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Jn(l,f,o,!0)),Jn(l,t,o)),we(t)&&s.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Jn(e,s,n,!0),i&&i.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=il[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const il={data:Li,props:zi,emits:zi,methods:pn,computed:pn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:pn,directives:pn,watch:ol,provide:Li,inject:sl};function Li(e,t){return t?e?function(){return Ie(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function sl(e,t){return pn($r(e),$r(t))}function $r(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function pn(e,t){return e?Ie(Object.create(null),e,t):t}function zi(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:Ie(Object.create(null),Fi(e),Fi(t??{})):t}function ol(e,t){if(!e)return t;if(!t)return e;const n=Ie(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function lo(){return{app:null,config:{isNativeTag:Wo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let al=0;function ll(e,t){return function(r,i=null){J(r)||(r=Ie({},r)),i!=null&&!we(i)&&(i=null);const s=lo(),o=new WeakSet,a=[];let l=!1;const f=s.app={_uid:al++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ql,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(f,...u)):J(c)&&(o.add(c),c(f,...u))),f},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),f},component(c,u){return u?(s.components[c]=u,f):s.components[c]},directive(c,u){return u?(s.directives[c]=u,f):s.directives[c]},mount(c,u,h){if(!l){const p=f._ceVNode||kt(r,i);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(p,c,h),l=!0,f._container=c,c.__vue_app__=f,mr(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ft(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,u){return s.provides[c]=u,f},runWithContext(c){const u=en;en=f;try{return c()}finally{en=u}}};return f}}let en=null;function cl(e,t){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[e]=t}}function Nn(e,t,n=!1){const r=Vl();if(r||en){let i=en?en._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}const co={},uo=()=>Object.create(co),fo=e=>Object.getPrototypeOf(e)===co;function ul(e,t,n,r=!1){const i={},s=uo();e.propsDefaults=Object.create(null),ho(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Pa(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function fl(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=re(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(dr(e.emitsOptions,h))continue;const p=t[h];if(l)if(ie(s,h))p!==s[h]&&(s[h]=p,f=!0);else{const d=Ot(h);i[d]=Yr(l,a,d,p,e,!1)}else p!==s[h]&&(s[h]=p,f=!0)}}}else{ho(e,t,i,s)&&(f=!0);let c;for(const u in a)(!t||!ie(t,u)&&((c=Rt(u))===u||!ie(t,c)))&&(l?n&&(n[u]!==void 0||n[c]!==void 0)&&(i[u]=Yr(l,a,u,void 0,e,!0)):delete i[u]);if(s!==a)for(const u in s)(!t||!ie(t,u))&&(delete s[u],f=!0)}f&&vt(e.attrs,"set","")}function ho(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(gn(l))continue;const f=t[l];let c;i&&ie(i,c=Ot(l))?!s||!s.includes(c)?n[c]=f:(a||(a={}))[c]=f:dr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(s){const l=re(n),f=a||de;for(let c=0;c<s.length;c++){const u=s[c];n[u]=Yr(i,l,u,f[u],e,!ie(f,u))}}return o}function Yr(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=Un(i);r=f[n]=l.call(null,t),c()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}const hl=new WeakMap;function po(e,t,n=!1){const r=n?hl:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!J(e)){const c=u=>{l=!0;const[h,p]=po(u,t,!0);Ie(o,h),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return we(e)&&r.set(e,Qt),Qt;if(Q(s))for(let c=0;c<s.length;c++){const u=Ot(s[c]);ji(u)&&(o[u]=de)}else if(s)for(const c in s){const u=Ot(c);if(ji(u)){const h=s[c],p=o[u]=Q(h)||J(h)?{type:h}:Ie({},h),d=p.type;let m=!1,x=!0;if(Q(d))for(let y=0;y<d.length;++y){const b=d[y],M=J(b)&&b.name;if(M==="Boolean"){m=!0;break}else M==="String"&&(x=!1)}else m=J(d)&&d.name==="Boolean";p[0]=m,p[1]=x,(m||ie(p,"default"))&&a.push(u)}}const f=[o,a];return we(e)&&r.set(e,f),f}function ji(e){return e[0]!=="$"&&!gn(e)}const gi=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",vi=e=>Q(e)?e.map(ct):[ct(e)],dl=(e,t,n)=>{if(t._n)return t;const r=Fa((...i)=>vi(t(...i)),n);return r._c=!1,r},mo=(e,t,n)=>{const r=e._ctx;for(const i in e){if(gi(i))continue;const s=e[i];if(J(s))t[i]=dl(i,s,r);else if(s!=null){const o=vi(s);t[i]=()=>o}}},go=(e,t)=>{const n=vi(t);e.slots.default=()=>n},vo=(e,t,n)=>{for(const r in t)(n||!gi(r))&&(e[r]=t[r])},pl=(e,t,n)=>{const r=e.slots=uo();if(e.vnode.shapeFlag&32){const i=t.__;i&&zr(r,"__",i,!0);const s=t._;s?(vo(r,t,n),n&&zr(r,"_",s,!0)):mo(t,r)}else t&&go(e,t)},ml=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=de;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:vo(i,t,n):(s=!t.$stable,mo(t,i)),o=t}else t&&(go(e,t),o={default:1});if(s)for(const a in i)!gi(a)&&o[a]==null&&delete i[a]},He=El;function gl(e){return vl(e)}function vl(e,t){const n=lr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:f,setElementText:c,parentNode:u,nextSibling:h,setScopeId:p=ut,insertStaticContent:d}=e,m=(g,v,P,E=null,T=null,C=null,G=void 0,D=null,A=!!v.dynamicChildren)=>{if(g===v)return;g&&!un(g,v)&&(E=Se(g),ne(g,T,C,!0),g=null),v.patchFlag===-2&&(A=!1,v.dynamicChildren=null);const{type:_,ref:$,shapeFlag:F}=v;switch(_){case pr:x(g,v,P,E);break;case nn:y(g,v,P,E);break;case Er:g==null&&b(v,P,E,G);break;case lt:k(g,v,P,E,T,C,G,D,A);break;default:F&1?S(g,v,P,E,T,C,G,D,A):F&6?N(g,v,P,E,T,C,G,D,A):(F&64||F&128)&&_.process(g,v,P,E,T,C,G,D,A,fe)}$!=null&&T?xn($,g&&g.ref,C,v||g,!v):$==null&&g&&g.ref!=null&&xn(g.ref,null,C,g,!0)},x=(g,v,P,E)=>{if(g==null)r(v.el=a(v.children),P,E);else{const T=v.el=g.el;v.children!==g.children&&f(T,v.children)}},y=(g,v,P,E)=>{g==null?r(v.el=l(v.children||""),P,E):v.el=g.el},b=(g,v,P,E)=>{[g.el,g.anchor]=d(g.children,v,P,E,g.el,g.anchor)},M=({el:g,anchor:v},P,E)=>{let T;for(;g&&g!==v;)T=h(g),r(g,P,E),g=T;r(v,P,E)},B=({el:g,anchor:v})=>{let P;for(;g&&g!==v;)P=h(g),i(g),g=P;i(v)},S=(g,v,P,E,T,C,G,D,A)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),g==null?O(v,P,E,T,C,G,D,A):R(g,v,T,C,G,D,A)},O=(g,v,P,E,T,C,G,D)=>{let A,_;const{props:$,shapeFlag:F,transition:H,dirs:X}=g;if(A=g.el=o(g.type,C,$&&$.is,$),F&8?c(A,g.children):F&16&&w(g.children,A,null,E,T,Cr(g,C),G,D),X&&Dt(g,null,E,"created"),I(A,g,g.scopeId,G,E),$){for(const pe in $)pe!=="value"&&!gn(pe)&&s(A,pe,null,$[pe],C,E);"value"in $&&s(A,"value",null,$.value,C),(_=$.onVnodeBeforeMount)&&rt(_,E,g)}X&&Dt(g,null,E,"beforeMount");const te=bl(T,H);te&&H.beforeEnter(A),r(A,v,P),((_=$&&$.onVnodeMounted)||te||X)&&He(()=>{_&&rt(_,E,g),te&&H.enter(A),X&&Dt(g,null,E,"mounted")},T)},I=(g,v,P,E,T)=>{if(P&&p(g,P),E)for(let C=0;C<E.length;C++)p(g,E[C]);if(T){let C=T.subTree;if(v===C||So(C.type)&&(C.ssContent===v||C.ssFallback===v)){const G=T.vnode;I(g,G,G.scopeId,G.slotScopeIds,T.parent)}}},w=(g,v,P,E,T,C,G,D,A=0)=>{for(let _=A;_<g.length;_++){const $=g[_]=D?Tt(g[_]):ct(g[_]);m(null,$,v,P,E,T,C,G,D)}},R=(g,v,P,E,T,C,G)=>{const D=v.el=g.el;let{patchFlag:A,dynamicChildren:_,dirs:$}=v;A|=g.patchFlag&16;const F=g.props||de,H=v.props||de;let X;if(P&&Gt(P,!1),(X=H.onVnodeBeforeUpdate)&&rt(X,P,v,g),$&&Dt(v,g,P,"beforeUpdate"),P&&Gt(P,!0),(F.innerHTML&&H.innerHTML==null||F.textContent&&H.textContent==null)&&c(D,""),_?L(g.dynamicChildren,_,D,P,E,Cr(v,T),C):G||V(g,v,D,null,P,E,Cr(v,T),C,!1),A>0){if(A&16)q(D,F,H,P,T);else if(A&2&&F.class!==H.class&&s(D,"class",null,H.class,T),A&4&&s(D,"style",F.style,H.style,T),A&8){const te=v.dynamicProps;for(let pe=0;pe<te.length;pe++){const ae=te[pe],Fe=F[ae],Ve=H[ae];(Ve!==Fe||ae==="value")&&s(D,ae,Fe,Ve,T,P)}}A&1&&g.children!==v.children&&c(D,v.children)}else!G&&_==null&&q(D,F,H,P,T);((X=H.onVnodeUpdated)||$)&&He(()=>{X&&rt(X,P,v,g),$&&Dt(v,g,P,"updated")},E)},L=(g,v,P,E,T,C,G)=>{for(let D=0;D<v.length;D++){const A=g[D],_=v[D],$=A.el&&(A.type===lt||!un(A,_)||A.shapeFlag&198)?u(A.el):P;m(A,_,$,null,E,T,C,G,!0)}},q=(g,v,P,E,T)=>{if(v!==P){if(v!==de)for(const C in v)!gn(C)&&!(C in P)&&s(g,C,v[C],null,T,E);for(const C in P){if(gn(C))continue;const G=P[C],D=v[C];G!==D&&C!=="value"&&s(g,C,D,G,T,E)}"value"in P&&s(g,"value",v.value,P.value,T)}},k=(g,v,P,E,T,C,G,D,A)=>{const _=v.el=g?g.el:a(""),$=v.anchor=g?g.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:X}=v;X&&(D=D?D.concat(X):X),g==null?(r(_,P,E),r($,P,E),w(v.children||[],P,$,T,C,G,D,A)):F>0&&F&64&&H&&g.dynamicChildren?(L(g.dynamicChildren,H,P,T,C,G,D),(v.key!=null||T&&v===T.subTree)&&bo(g,v,!0)):V(g,v,P,$,T,C,G,D,A)},N=(g,v,P,E,T,C,G,D,A)=>{v.slotScopeIds=D,g==null?v.shapeFlag&512?T.ctx.activate(v,P,E,G,A):z(v,P,E,T,C,G,A):K(g,v,A)},z=(g,v,P,E,T,C,G)=>{const D=g.component=Fl(g,E,T);if(no(g)&&(D.ctx.renderer=fe),Ll(D,!1,G),D.asyncDep){if(T&&T.registerDep(D,Y,G),!g.el){const A=D.subTree=kt(nn);y(null,A,v,P),g.placeholder=A.el}}else Y(D,g,v,P,T,C,G)},K=(g,v,P)=>{const E=v.component=g.component;if(Cl(g,v,P))if(E.asyncDep&&!E.asyncResolved){j(E,v,P);return}else E.next=v,E.update();else v.el=g.el,E.vnode=v},Y=(g,v,P,E,T,C,G)=>{const D=()=>{if(g.isMounted){let{next:F,bu:H,u:X,parent:te,vnode:pe}=g;{const tt=xo(g);if(tt){F&&(F.el=pe.el,j(g,F,G)),tt.asyncDep.then(()=>{g.isUnmounted||D()});return}}let ae=F,Fe;Gt(g,!1),F?(F.el=pe.el,j(g,F,G)):F=pe,H&&Br(H),(Fe=F.props&&F.props.onVnodeBeforeUpdate)&&rt(Fe,te,F,pe),Gt(g,!0);const Ve=ki(g),et=g.subTree;g.subTree=Ve,m(et,Ve,u(et.el),Se(et),g,T,C),F.el=Ve.el,ae===null&&Ol(g,Ve.el),X&&He(X,T),(Fe=F.props&&F.props.onVnodeUpdated)&&He(()=>rt(Fe,te,F,pe),T)}else{let F;const{el:H,props:X}=v,{bm:te,m:pe,parent:ae,root:Fe,type:Ve}=g,et=yn(v);Gt(g,!1),te&&Br(te),!et&&(F=X&&X.onVnodeBeforeMount)&&rt(F,ae,v),Gt(g,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(Ve);const tt=g.subTree=ki(g);m(null,tt,P,E,g,T,C),v.el=tt.el}if(pe&&He(pe,T),!et&&(F=X&&X.onVnodeMounted)){const tt=v;He(()=>rt(F,ae,tt),T)}(v.shapeFlag&256||ae&&yn(ae.vnode)&&ae.vnode.shapeFlag&256)&&g.a&&He(g.a,T),g.isMounted=!0,v=P=E=null}};g.scope.on();const A=g.effect=new Us(D);g.scope.off();const _=g.update=A.run.bind(A),$=g.job=A.runIfDirty.bind(A);$.i=g,$.id=g.uid,A.scheduler=()=>pi($),Gt(g,!0),_()},j=(g,v,P)=>{v.component=g;const E=g.vnode.props;g.vnode=v,g.next=null,fl(g,v.props,E,P),ml(g,v.children,P),yt(),Gi(g),Bt()},V=(g,v,P,E,T,C,G,D,A=!1)=>{const _=g&&g.children,$=g?g.shapeFlag:0,F=v.children,{patchFlag:H,shapeFlag:X}=v;if(H>0){if(H&128){be(_,F,P,E,T,C,G,D,A);return}else if(H&256){ue(_,F,P,E,T,C,G,D,A);return}}X&8?($&16&&Be(_,T,C),F!==_&&c(P,F)):$&16?X&16?be(_,F,P,E,T,C,G,D,A):Be(_,T,C,!0):($&8&&c(P,""),X&16&&w(F,P,E,T,C,G,D,A))},ue=(g,v,P,E,T,C,G,D,A)=>{g=g||Qt,v=v||Qt;const _=g.length,$=v.length,F=Math.min(_,$);let H;for(H=0;H<F;H++){const X=v[H]=A?Tt(v[H]):ct(v[H]);m(g[H],X,P,null,T,C,G,D,A)}_>$?Be(g,T,C,!0,!1,F):w(v,P,E,T,C,G,D,A,F)},be=(g,v,P,E,T,C,G,D,A)=>{let _=0;const $=v.length;let F=g.length-1,H=$-1;for(;_<=F&&_<=H;){const X=g[_],te=v[_]=A?Tt(v[_]):ct(v[_]);if(un(X,te))m(X,te,P,null,T,C,G,D,A);else break;_++}for(;_<=F&&_<=H;){const X=g[F],te=v[H]=A?Tt(v[H]):ct(v[H]);if(un(X,te))m(X,te,P,null,T,C,G,D,A);else break;F--,H--}if(_>F){if(_<=H){const X=H+1,te=X<$?v[X].el:E;for(;_<=H;)m(null,v[_]=A?Tt(v[_]):ct(v[_]),P,te,T,C,G,D,A),_++}}else if(_>H)for(;_<=F;)ne(g[_],T,C,!0),_++;else{const X=_,te=_,pe=new Map;for(_=te;_<=H;_++){const ke=v[_]=A?Tt(v[_]):ct(v[_]);ke.key!=null&&pe.set(ke.key,_)}let ae,Fe=0;const Ve=H-te+1;let et=!1,tt=0;const ln=new Array(Ve);for(_=0;_<Ve;_++)ln[_]=0;for(_=X;_<=F;_++){const ke=g[_];if(Fe>=Ve){ne(ke,T,C,!0);continue}let nt;if(ke.key!=null)nt=pe.get(ke.key);else for(ae=te;ae<=H;ae++)if(ln[ae-te]===0&&un(ke,v[ae])){nt=ae;break}nt===void 0?ne(ke,T,C,!0):(ln[nt-te]=_+1,nt>=tt?tt=nt:et=!0,m(ke,v[nt],P,null,T,C,G,D,A),Fe++)}const _i=et?xl(ln):Qt;for(ae=_i.length-1,_=Ve-1;_>=0;_--){const ke=te+_,nt=v[ke],Ii=v[ke+1],Ri=ke+1<$?Ii.el||Ii.placeholder:E;ln[_]===0?m(null,nt,P,Ri,T,C,G,D,A):et&&(ae<0||_!==_i[ae]?ee(nt,P,Ri,2):ae--)}}},ee=(g,v,P,E,T=null)=>{const{el:C,type:G,transition:D,children:A,shapeFlag:_}=g;if(_&6){ee(g.component.subTree,v,P,E);return}if(_&128){g.suspense.move(v,P,E);return}if(_&64){G.move(g,v,P,fe);return}if(G===lt){r(C,v,P);for(let F=0;F<A.length;F++)ee(A[F],v,P,E);r(g.anchor,v,P);return}if(G===Er){M(g,v,P);return}if(E!==2&&_&1&&D)if(E===0)D.beforeEnter(C),r(C,v,P),He(()=>D.enter(C),T);else{const{leave:F,delayLeave:H,afterLeave:X}=D,te=()=>{g.ctx.isUnmounted?i(C):r(C,v,P)},pe=()=>{F(C,()=>{te(),X&&X()})};H?H(C,te,pe):pe()}else r(C,v,P)},ne=(g,v,P,E=!1,T=!1)=>{const{type:C,props:G,ref:D,children:A,dynamicChildren:_,shapeFlag:$,patchFlag:F,dirs:H,cacheIndex:X}=g;if(F===-2&&(T=!1),D!=null&&(yt(),xn(D,null,P,g,!0),Bt()),X!=null&&(v.renderCache[X]=void 0),$&256){v.ctx.deactivate(g);return}const te=$&1&&H,pe=!yn(g);let ae;if(pe&&(ae=G&&G.onVnodeBeforeUnmount)&&rt(ae,v,g),$&6)ye(g.component,P,E);else{if($&128){g.suspense.unmount(P,E);return}te&&Dt(g,null,v,"beforeUnmount"),$&64?g.type.remove(g,v,P,fe,E):_&&!_.hasOnce&&(C!==lt||F>0&&F&64)?Be(_,v,P,!1,!0):(C===lt&&F&384||!T&&$&16)&&Be(A,v,P),E&&xe(g)}(pe&&(ae=G&&G.onVnodeUnmounted)||te)&&He(()=>{ae&&rt(ae,v,g),te&&Dt(g,null,v,"unmounted")},P)},xe=g=>{const{type:v,el:P,anchor:E,transition:T}=g;if(v===lt){Me(P,E);return}if(v===Er){B(g);return}const C=()=>{i(P),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(g.shapeFlag&1&&T&&!T.persisted){const{leave:G,delayLeave:D}=T,A=()=>G(P,C);D?D(g.el,C,A):A()}else C()},Me=(g,v)=>{let P;for(;g!==v;)P=h(g),i(g),g=P;i(v)},ye=(g,v,P)=>{const{bum:E,scope:T,job:C,subTree:G,um:D,m:A,a:_,parent:$,slots:{__:F}}=g;Ni(A),Ni(_),E&&Br(E),$&&Q(F)&&F.forEach(H=>{$.renderCache[H]=void 0}),T.stop(),C&&(C.flags|=8,ne(G,g,v,P)),D&&He(D,v),He(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Be=(g,v,P,E=!1,T=!1,C=0)=>{for(let G=C;G<g.length;G++)ne(g[G],v,P,E,T)},Se=g=>{if(g.shapeFlag&6)return Se(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=h(g.anchor||g.el),P=v&&v[La];return P?h(P):v};let ge=!1;const Ne=(g,v,P)=>{g==null?v._vnode&&ne(v._vnode,null,null,!0):m(v._vnode||null,g,v,null,null,null,P),v._vnode=g,ge||(ge=!0,Gi(),Js(),ge=!1)},fe={p:m,um:ne,m:ee,r:xe,mt:z,mc:w,pc:V,pbc:L,n:Se,o:e};return{render:Ne,hydrate:void 0,createApp:ll(Ne)}}function Cr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function bl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bo(e,t,n=!1){const r=e.children,i=t.children;if(Q(r)&&Q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Tt(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&bo(o,a)),a.type===pr&&(a.el=o.el),a.type===nn&&!a.el&&(a.el=o.el)}}function xl(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<f?s=a+1:o=a;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function xo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xo(t)}function Ni(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yl=Symbol.for("v-scx"),Bl=()=>Nn(yl);function Or(e,t,n){return yo(e,t,n)}function yo(e,t,n=de){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ie({},n),l=t&&r||!t&&s!=="post";let f;if(_n){if(s==="sync"){const p=Bl();f=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ut,p.resume=ut,p.pause=ut,p}}const c=De;a.call=(p,d,m)=>ft(p,c,d,m);let u=!1;s==="post"?a.scheduler=p=>{He(p,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(p,d)=>{d?p():pi(p)}),a.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Ra(e,t,a);return _n&&(f?f.push(h):l&&h()),h}function wl(e,t,n){const r=this.proxy,i=Pe(e)?e.includes(".")?Bo(r,e):()=>r[e]:e.bind(r,r);let s;J(t)?s=t:(s=t.handler,n=t);const o=Un(this),a=yo(i,s.bind(r),n);return o(),a}function Bo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Sl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ot(t)}Modifiers`]||e[`${Rt(t)}Modifiers`];function Pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||de;let i=n;const s=t.startsWith("update:"),o=s&&Sl(r,t.slice(7));o&&(o.trim&&(i=n.map(c=>Pe(c)?c.trim():c)),o.number&&(i=n.map(Ko)));let a,l=r[a=yr(t)]||r[a=yr(Ot(t))];!l&&s&&(l=r[a=yr(Rt(t))]),l&&ft(l,e,6,i);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ft(f,e,6,i)}}function wo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!J(e)){const l=f=>{const c=wo(f,t,!0);c&&(a=!0,Ie(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(we(e)&&r.set(e,null),null):(Q(s)?s.forEach(l=>o[l]=null):Ie(o,s),we(e)&&r.set(e,o),o)}function dr(e,t){return!e||!sr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Rt(t))||ie(e,t))}function ki(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:f,renderCache:c,props:u,data:h,setupState:p,ctx:d,inheritAttrs:m}=e,x=Kn(e);let y,b;try{if(n.shapeFlag&4){const B=i||r,S=B;y=ct(f.call(S,B,c,u,p,h,d)),b=a}else{const B=t;y=ct(B.length>1?B(u,{attrs:a,slots:o,emit:l}):B(u,null)),b=t.props?a:Ml(a)}}catch(B){wn.length=0,fr(B,e,1),y=kt(nn)}let M=y;if(b&&m!==!1){const B=Object.keys(b),{shapeFlag:S}=M;B.length&&S&7&&(s&&B.some(ri)&&(b=Tl(b,s)),M=rn(M,b,!1,!0))}return n.dirs&&(M=rn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&mi(M,n.transition),y=M,Kn(x),y}const Ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||sr(n))&&((t||(t={}))[n]=e[n]);return t},Tl=(e,t)=>{const n={};for(const r in e)(!ri(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cl(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(o[h]!==r[h]&&!dr(f,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?qi(r,o,f):!0:!!o;return!1}function qi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!dr(n,s))return!0}return!1}function Ol({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const So=e=>e.__isSuspense;function El(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):Ga(e)}const lt=Symbol.for("v-fgt"),pr=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),Er=Symbol.for("v-stc"),wn=[];let $e=null;function _r(e=!1){wn.push($e=e?null:[])}function _l(){wn.pop(),$e=wn[wn.length-1]||null}let En=1;function Hi(e,t=!1){En+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function Il(e){return e.dynamicChildren=En>0?$e||Qt:null,_l(),En>0&&$e&&$e.push(e),e}function Ir(e,t,n,r,i,s){return Il(ot(e,t,n,r,i,s,!0))}function Po(e){return e?e.__v_isVNode===!0:!1}function un(e,t){return e.type===t.type&&e.key===t.key}const Mo=({key:e})=>e??null,kn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||_e(e)||J(e)?{i:Qe,r:e,k:t,f:!!n}:e:null);function ot(e,t=null,n=null,r=0,i=null,s=e===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mo(t),ref:t&&kn(t),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(bi(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Pe(n)?8:16),En>0&&!o&&$e&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$e.push(l),l}const kt=Rl;function Rl(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Za)&&(e=nn),Po(e)){const a=rn(e,t,!0);return n&&bi(a,n),En>0&&!s&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag=-2,a}if(kl(e)&&(e=e.__vccOpts),t){t=Ul(t);let{class:a,style:l}=t;a&&!Pe(a)&&(t.class=Mn(a)),we(l)&&(di(l)&&!Q(l)&&(l=Ie({},l)),t.style=cr(l))}const o=Pe(e)?1:So(e)?128:za(e)?64:we(e)?4:J(e)?2:0;return ot(e,t,n,r,i,o,s,!0)}function Ul(e){return e?di(e)||fo(e)?Ie({},e):e:null}function rn(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=e,f=t?Al(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Mo(f),ref:t&&t.ref?n&&s?Q(s)?s.concat(kn(t)):[s,kn(t)]:kn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==lt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&mi(c,l.clone(c)),c}function To(e=" ",t=0){return kt(pr,null,e,t)}function ct(e){return e==null||typeof e=="boolean"?kt(nn):Q(e)?kt(lt,null,e.slice()):Po(e)?Tt(e):kt(pr,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rn(e)}function bi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),bi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!fo(t)?t._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:Qe},n=32):(t=String(t),r&64?(n=16,t=[To(t)]):n=8);e.children=t,e.shapeFlag|=n}function Al(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Mn([t.class,r.class]));else if(i==="style")t.style=cr([t.style,r.style]);else if(sr(i)){const s=t[i],o=r[i];o&&s!==o&&!(Q(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function rt(e,t,n,r=null){ft(e,t,7,[n,r])}const Dl=lo();let Gl=0;function Fl(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Dl,s={uid:Gl++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ia(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:po(r,i),emitsOptions:wo(r,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Pl.bind(null,s),e.ce&&e.ce(s),s}let De=null;const Vl=()=>De||Qe;let Zn,Xr;{const e=lr(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Zn=t("__VUE_INSTANCE_SETTERS__",n=>De=n),Xr=t("__VUE_SSR_SETTERS__",n=>_n=n)}const Un=e=>{const t=De;return Zn(e),e.scope.on(),()=>{e.scope.off(),Zn(t)}},Wi=()=>{De&&De.scope.off(),Zn(null)};function Co(e){return e.vnode.shapeFlag&4}let _n=!1;function Ll(e,t=!1,n=!1){t&&Xr(t);const{props:r,children:i}=e.vnode,s=Co(e);ul(e,r,s,t),pl(e,i,n||t);const o=s?zl(e,t):void 0;return t&&Xr(!1),o}function zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,tl);const{setup:r}=n;if(r){yt();const i=e.setupContext=r.length>1?Nl(e):null,s=Un(e),o=Rn(r,e,0,[e.props,i]),a=Ts(o);if(Bt(),s(),(a||e.sp)&&!yn(e)&&to(e),a){if(o.then(Wi,Wi),t)return o.then(l=>{$i(e,l)}).catch(l=>{fr(l,e,0)});e.asyncDep=o}else $i(e,o)}else Oo(e)}function $i(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:we(t)&&(e.setupState=Xs(t)),Oo(e)}function Oo(e,t,n){const r=e.type;e.render||(e.render=r.render||ut);{const i=Un(e);yt();try{nl(e)}finally{Bt(),i()}}}const jl={get(e,t){return Ee(e,"get",""),e[t]}};function Nl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,jl),slots:e.slots,emit:e.emit,expose:t}}function mr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xs(Ma(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)},has(t,n){return n in t||n in Bn}})):e.proxy}function kl(e){return J(e)&&"__vccOpts"in e}const Qr=(e,t)=>_a(e,t,_n),ql="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kr;const Yi=typeof window<"u"&&window.trustedTypes;if(Yi)try{Kr=Yi.createPolicy("vue",{createHTML:e=>e})}catch{}const Eo=Kr?e=>Kr.createHTML(e):e=>e,Hl="http://www.w3.org/2000/svg",Wl="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Xi=mt&&mt.createElement("template"),$l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?mt.createElementNS(Hl,e):t==="mathml"?mt.createElementNS(Wl,e):n?mt.createElement(e,{is:n}):mt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Xi.innerHTML=Eo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Xi.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Yl=Symbol("_vtc");function Xl(e,t,n){const r=e[Yl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const er=Symbol("_vod"),_o=Symbol("_vsh"),Ql={beforeMount(e,{value:t},{transition:n}){e[er]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):fn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),fn(e,!0),r.enter(e)):r.leave(e,()=>{fn(e,!1)}):fn(e,t))},beforeUnmount(e,{value:t}){fn(e,t)}};function fn(e,t){e.style.display=t?e[er]:"none",e[_o]=!t}const Kl=Symbol(""),Jl=/(^|;)\s*display\s*:/;function Zl(e,t,n){const r=e.style,i=Pe(n);let s=!1;if(n&&!i){if(t)if(Pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qn(r,a,"")}else for(const o in t)n[o]==null&&qn(r,o,"");for(const o in n)o==="display"&&(s=!0),qn(r,o,n[o])}else if(i){if(t!==n){const o=r[Kl];o&&(n+=";"+o),r.cssText=n,s=Jl.test(n)}}else t&&e.removeAttribute("style");er in e&&(e[er]=s?r.display:"",e[_o]&&(r.display="none"))}const Qi=/\s*!important$/;function qn(e,t,n){if(Q(n))n.forEach(r=>qn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ec(e,t);Qi.test(n)?e.setProperty(Rt(r),n.replace(Qi,""),"important"):e[r]=n}}const Ki=["Webkit","Moz","ms"],Rr={};function ec(e,t){const n=Rr[t];if(n)return n;let r=Ot(t);if(r!=="filter"&&r in e)return Rr[t]=r;r=Es(r);for(let i=0;i<Ki.length;i++){const s=Ki[i]+r;if(s in e)return Rr[t]=s}return t}const Ji="http://www.w3.org/1999/xlink";function Zi(e,t,n,r,i,s=ra(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ji,t.slice(6,t.length)):e.setAttributeNS(Ji,t,n):n==null||s&&!_s(n)?e.removeAttribute(t):e.setAttribute(t,s?"":It(n)?String(n):n)}function es(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Eo(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=_s(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function tc(e,t,n,r){e.addEventListener(t,n,r)}function nc(e,t,n,r){e.removeEventListener(t,n,r)}const ts=Symbol("_vei");function rc(e,t,n,r,i=null){const s=e[ts]||(e[ts]={}),o=s[t];if(r&&o)o.value=r;else{const[a,l]=ic(t);if(r){const f=s[t]=ac(r,i);tc(e,a,f,l)}else o&&(nc(e,a,o,l),s[t]=void 0)}}const ns=/(?:Once|Passive|Capture)$/;function ic(e){let t;if(ns.test(e)){t={};let r;for(;r=e.match(ns);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rt(e.slice(2)),t]}let Ur=0;const sc=Promise.resolve(),oc=()=>Ur||(sc.then(()=>Ur=0),Ur=Date.now());function ac(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ft(lc(r,n.value),t,5,[r])};return n.value=e,n.attached=oc(),n}function lc(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cc=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?Xl(e,r,o):t==="style"?Zl(e,n,r):sr(t)?ri(t)||rc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uc(e,t,r,o))?(es(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zi(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Pe(r))?es(e,Ot(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Zi(e,t,r,o))};function uc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&rs(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return rs(t)&&Pe(n)?!1:t in e}const fc=["ctrl","shift","alt","meta"],hc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fc.some(n=>e[`${n}Key`]&&!t.includes(n))},is=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=hc[t[o]];if(a&&a(i,t))return}return e(i,...s)})},dc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ss=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Rt(i.key);if(t.some(o=>o===s||dc[o]===s))return e(i)})},pc=Ie({patchProp:cc},$l);let os;function mc(){return os||(os=gl(pc))}const gc=(...e)=>{const t=mc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=bc(r);if(!i)return;const s=t._component;!J(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,vc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function vc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function bc(e){return Pe(e)?document.querySelector(e):e}const xc="/projects/webGPU-Basics-Collections/assets/expand-yilVOYUy.png",Jr=16;function Ft({name:e="default",albedo:t=[1,1,1],roughness:n=.98,metalness:r=0,usePerlinRoughness:i=!1,usePerlinMetalness:s=!1,perlinFreq:o=2,useAlbedoTexture:a=!1,useMetalnessTexture:l=!1,useRoughnessTexture:f=!1,useNormalTexture:c=!1,textureIndex:u=-1}){return{name:e,albedo:t,roughness:n,usePerlinRoughness:i,metalness:r,usePerlinMetalness:s,perlinFreq:o,useAlbedoTexture:a,useMetalnessTexture:l,useRoughnessTexture:f,useNormalTexture:c,textureIndex:u}}function Io(e){const t=new Array(Jr),n=new Float32Array(t);return n.set(e.albedo,0),n[3]=e.metalness,n[4]=e.usePerlinMetalness?1:0,n[5]=e.roughness,n[6]=e.usePerlinRoughness?1:0,n[7]=e.perlinFreq,n[8]=e.useAlbedoTexture?1:0,n[9]=e.useMetalnessTexture?1:0,n[10]=e.useRoughnessTexture?1:0,n[11]=e.useNormalTexture?1:0,n[12]=e.textureIndex,n}function yc(e){const t=[];for(const n of e)t.push(...n.albedo),t.push(n.metalness),t.push(n.usePerlinMetalness?1:0),t.push(n.roughness),t.push(n.usePerlinRoughness?1:0),t.push(n.perlinFreq),t.push(n.useAlbedoTexture?1:0),t.push(n.useMetalnessTexture?1:0),t.push(n.useRoughnessTexture?1:0),t.push(n.useNormalTexture?1:0),t.push(n.textureIndex),t.push(0),t.push(0),t.push(0);return new Float32Array(t)}var je=typeof Float32Array<"u"?Float32Array:Array;function mn(){var e=new je(4);return je!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function tr(e,t,n,r){var i=new je(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function Hn(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function Bc(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],a=n[0],l=n[1],f=n[2],c=n[3];return e[0]=r*a+s*l,e[1]=i*a+o*l,e[2]=r*f+s*c,e[3]=i*f+o*c,e}function xi(){var e=new je(9);return je!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Zr(e,t,n,r,i,s,o,a,l){var f=new je(9);return f[0]=e,f[1]=t,f[2]=n,f[3]=r,f[4]=i,f[5]=s,f[6]=o,f[7]=a,f[8]=l,f}function as(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function ls(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function ce(){var e=new je(3);return je!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function wc(e){var t=new je(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Ar(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function U(e,t,n){var r=new je(3);return r[0]=e,r[1]=t,r[2]=n,r}function $t(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function ei(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function St(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function Sc(e,t){var n=t[0],r=t[1],i=t[2],s=n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function Fn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Pc(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],a=n[1],l=n[2];return e[0]=i*l-s*a,e[1]=s*o-r*l,e[2]=r*a-i*o,e}function ti(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e}var Xt=ei;(function(){var e=ce();return function(t,n,r,i,s,o){var a,l;for(n||(n=3),r||(r=0),i?l=Math.min(i*n+r,t.length):l=t.length,a=r;a<l;a+=n)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],s(e,e,o),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2];return t}})();function W(){var e=new je(2);return je!=Float32Array&&(e[0]=0,e[1]=0),e}function nr(e){var t=new je(2);return t[0]=e[0],t[1]=e[1],t}function Z(e,t){var n=new je(2);return n[0]=e,n[1]=t,n}function gt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function Mc(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function pt(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function Tc(e){var t=e[0],n=e[1];return t*t+n*n}function We(e,t){return e[0]*t[0]+e[1]*t[1]}function Cc(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e}function Oe(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}var it=Mc;(function(){var e=W();return function(t,n,r,i,s,o){var a,l;for(n||(n=2),r||(r=0),i?l=Math.min(i*n+r,t.length):l=t.length,a=r;a<l;a+=n)e[0]=t[a],e[1]=t[a+1],s(e,e,o),t[a]=e[0],t[a+1]=e[1];return t}})();function Ht(e){const t=Math.cos(e),n=Math.sin(e);return tr(t,n,-n,t)}function Ro(e,t,n){const r=Math.cos(e),i=Math.sin(e),s=Math.cos(t),o=Math.sin(t),a=Math.cos(n),l=Math.sin(n);return Zr(s*a,-s*l,o,i*o*a+r*l,-i*o*l+r*a,-i*s,-r*o*a+i*l,r*o*l+i*a,r*s)}function Oc(e,t){const n=xi();return n[0]=e[0]*t[0],n[1]=e[0]*t[1],n[2]=e[0]*t[2],n[3]=e[1]*t[0],n[4]=e[1]*t[1],n[5]=e[1]*t[2],n[6]=e[2]*t[0],n[7]=e[2]*t[1],n[8]=e[2]*t[2],n}function Ec(e,t){let n=e[0],r=e[3]/e[0],i=e[6]/e[0],s=e[4]-r*r*n,o=(e[7]-i*r*n)/s,a=e[8]-(i*i*n+o*o*s),l=t[0],f=t[1]-r*l,c=t[2]-i*l-o*f,u=l/n,h=f/s,p=c/a;const d=U(0,0,0);return d[2]=p,d[1]=h-o*d[2],d[0]=u-r*d[1]-i*d[2],d}function oe(e=0,t=1){return e===void 0?(e=0,t=1):t===void 0&&(t=e,e=0),e+Math.random()*(t-e)}function _c(e,t,n,r){return U(oe(e,e+n),oe(t,t+r),oe(0,Math.PI*2))}function Ic(){const e=Math.floor(oe(0,256)),t=Math.floor(oe(0,256)),n=Math.floor(oe(0,256)),r=255;return new Uint8Array([e,t,n,r])}function Vn(e,t){return e[0]*t[1]-e[1]*t[0]}function Uo(e,t,n){const r=ei(ce(),t,e),i=ei(ce(),n,e);return Sc(ce(),Pc(ce(),r,i))}function Rc(e){return e*(180/Math.PI)}function Uc(e){return e*(Math.PI/180)}function gr(){return document.getElementById("info")}function on(){return document.getElementById("utils")}function Ao(){on()}function vr(){const e=on();if(e)for(;e.firstChild;)e.removeChild(e.firstChild);Ao()}function cs(e,t,n,r){const i=document.createElement("label");i.textContent=e,i.htmlFor=`checkbox-${e}`;const s=document.createElement("input");return s.type="checkbox",s.id=`checkbox-${e}`,s.checked=t,s.tabIndex=-1,s.style.cssText=`
        margin-left: 8px;
        transform: scale(1.2);
        cursor: pointer;
    `,s.addEventListener("change",()=>{r(s.checked)}),n.appendChild(i),n.appendChild(s),s}function hn(e,t,n,r,i,s,o){const a=document.createElement("label");a.textContent=`${e}: ${t.toFixed(2)}`,a.htmlFor=`slider-${e}`;const l=document.createElement("input");return l.type="range",l.id=`slider-${e}`,l.min=n.toString(),l.max=r.toString(),l.step=i.toString(),l.value=t.toString(),l.style.cssText=`
        width: 150px;
        margin-left: 8px;
        cursor: pointer;
    `,l.addEventListener("input",()=>{const f=parseFloat(l.value);o(isNaN(f)?0:f),a.textContent=`${e}: ${f.toFixed(2)}`}),s.appendChild(a),s.appendChild(l),l}function Ac(e,t,n){const r=document.createElement("button");return r.style.cssText="background-color: #444444; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;",r.textContent=e,r.tabIndex=-1,r.addEventListener("click",n),t.appendChild(r),r}function Dc(e,t,n,r){const i=document.createElement("div");i.style.cssText=`
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
    `,i.appendChild(s);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const a=document.createElement("label");a.textContent="Albedo:",o.appendChild(a);const l=j=>Math.round(j*255).toString(16).padStart(2,"0"),f=`#${l(t.albedo[0])}${l(t.albedo[1])}${l(t.albedo[2])}`,c=document.createElement("input");c.type="color",c.value=f,c.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,c.tabIndex=-1,o.appendChild(c);const u=document.createElement("span");u.textContent=f.toUpperCase(),u.style.cssText="font-family: monospace; color: #aaa;",o.appendChild(u),c.addEventListener("input",()=>{u.textContent=c.value.toUpperCase();const j=parseInt(c.value.slice(1,3),16)/255,V=parseInt(c.value.slice(3,5),16)/255,ue=parseInt(c.value.slice(5,7),16)/255;t.albedo=[j,V,ue],n(t)}),i.appendChild(o);const h=document.createElement("label");h.textContent="Albedo texture",o.appendChild(h);const p=document.createElement("input");p.type="checkbox",p.checked=t.useAlbedoTexture,p.tabIndex=-1,o.appendChild(p),p.addEventListener("change",()=>{t.useAlbedoTexture=p.checked,n(t)});const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent=`Metalness: ${t.metalness.toFixed(2)}`,d.appendChild(m);const x=document.createElement("input");x.type="range",x.min="0",x.max="1",x.step="0.01",x.value=t.metalness.toString(),x.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,x.tabIndex=-1,d.appendChild(x),i.appendChild(d),x.addEventListener("input",()=>{const j=parseFloat(x.value);t.metalness=isNaN(j)?0:j,m.textContent=`Metalness: ${t.metalness.toFixed(2)}`,n(t)});const y=document.createElement("label");y.textContent="Perlin noise",d.appendChild(y);const b=document.createElement("input");b.type="checkbox",b.checked=t.usePerlinMetalness,b.tabIndex=-1,d.appendChild(b),b.addEventListener("change",()=>{t.usePerlinMetalness=b.checked,n(t)});const M=document.createElement("label");M.textContent="Metalness texture",d.appendChild(M);const B=document.createElement("input");B.type="checkbox",B.checked=t.useMetalnessTexture,B.tabIndex=-1,d.appendChild(B),B.addEventListener("change",()=>{t.useMetalnessTexture=B.checked,n(t)});const S=document.createElement("div");S.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const O=document.createElement("label");O.textContent=`Roughness: ${t.roughness.toFixed(2)}`,S.appendChild(O);const I=document.createElement("input");I.type="range",I.min="0",I.max="1",I.step="0.01",I.value=t.roughness.toString(),I.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,I.tabIndex=-1,S.appendChild(I),i.appendChild(S),I.addEventListener("input",()=>{const j=parseFloat(I.value);t.roughness=isNaN(j)?0:j,O.textContent=`Roughness: ${t.roughness.toFixed(2)}`,n(t)});const w=document.createElement("label");w.textContent="Perlin noise",S.appendChild(w);const R=document.createElement("input");R.type="checkbox",R.checked=t.usePerlinRoughness,R.tabIndex=-1,S.appendChild(R),R.addEventListener("change",()=>{t.usePerlinRoughness=R.checked,n(t)});const L=document.createElement("label");L.textContent="Roughness texture",S.appendChild(L);const q=document.createElement("input");q.type="checkbox",q.checked=t.useRoughnessTexture,q.tabIndex=-1,S.appendChild(q),q.addEventListener("change",()=>{t.useRoughnessTexture=q.checked,n(t)});const k=document.createElement("div");k.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const N=document.createElement("label");N.textContent=`Perlin Frequency: ${t.perlinFreq.toFixed(2)}`,k.appendChild(N);const z=document.createElement("input");z.type="range",z.min="0.1",z.max="10",z.step="0.1",z.value=t.perlinFreq.toString(),z.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,z.tabIndex=-1,k.appendChild(z),i.appendChild(k),z.addEventListener("input",()=>{const j=parseFloat(z.value);t.perlinFreq=isNaN(j)?.1:j,N.textContent=`Perlin Frequency: ${t.perlinFreq.toFixed(2)}`,n(t)});const K=document.createElement("div");K.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const Y=document.createElement("button");return Y.textContent="Cancel",Y.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,Y.tabIndex=-1,Y.addEventListener("click",()=>{r()}),K.appendChild(Y),i.appendChild(K),i}function Gc(e,t,n,r,i){const s=document.createElement("div");s.style.cssText=`
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
    `,s.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const l=document.createElement("label");l.textContent="Enabled:",a.appendChild(l);const f=document.createElement("input");f.type="checkbox",f.checked=t.enabled,f.tabIndex=-1,a.appendChild(f),f.addEventListener("change",()=>{t.enabled=f.checked,r(t)}),s.appendChild(a);const c=document.createElement("div");c.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const u=document.createElement("label");u.textContent="Light position:",c.appendChild(u),["X","Y","Z"].forEach((k,N)=>{const z=document.createElement("input");z.type="number",z.value=t.position[N].toFixed(2),z.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,z.tabIndex=-1,c.appendChild(z),z.addEventListener("input",()=>{const K=parseFloat(z.value);t.position[N]=isNaN(K)?0:K,r(t)}),z.placeholder=k}),s.appendChild(c);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Light direction:",h.appendChild(p),["X","Y","Z"].forEach((k,N)=>{const z=document.createElement("input");z.type="number",z.value=t.direction[N].toFixed(2),z.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,z.tabIndex=-1,h.appendChild(z),z.addEventListener("input",()=>{const K=parseFloat(z.value);t.direction[N]=isNaN(K)?0:K,r(t)}),z.placeholder=k}),s.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Light intensity:",d.appendChild(m);const x=document.createElement("input");x.type="number",x.value=t.intensity.toFixed(2),x.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,x.tabIndex=-1,d.appendChild(x),x.addEventListener("input",()=>{const k=parseFloat(x.value);t.intensity=isNaN(k)?0:k,r(t)}),s.appendChild(d);const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const b=document.createElement("label");b.textContent="Cone angle:",y.appendChild(b);const M=document.createElement("input");M.type="range",M.value=Rc(t.coneAngle).toFixed(2),M.min="0",M.max="180",M.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,M.tabIndex=-1,y.appendChild(M),M.addEventListener("input",()=>{const k=parseFloat(M.value),N=Uc(k);t.coneAngle=isNaN(N)?0:N,r(t)}),s.appendChild(y);const B=document.createElement("div");B.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const S=document.createElement("label");S.textContent="Light color:",B.appendChild(S);const O=k=>Math.round(k*255).toString(16).padStart(2,"0"),I=`#${O(t.color[0])}${O(t.color[1])}${O(t.color[2])}`,w=document.createElement("input");w.type="color",w.value=I,w.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,w.tabIndex=-1,B.appendChild(w);const R=document.createElement("span");R.textContent=I.toUpperCase(),R.style.cssText="font-family: monospace; color: #aaa;",B.appendChild(R),w.addEventListener("input",()=>{R.textContent=w.value.toUpperCase(),t.color=[parseInt(w.value.slice(1,3),16)/255,parseInt(w.value.slice(3,5),16)/255,parseInt(w.value.slice(5,7),16)/255],r(t)}),s.appendChild(B);const L=document.createElement("div");L.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const q=document.createElement("button");return q.textContent="Cancel",q.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,q.tabIndex=-1,q.addEventListener("click",()=>{i()}),L.appendChild(q),s.appendChild(L),s}const Fc=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,Vc=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function Lc(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=e.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:n,format:i,alphaMode:"premultiplied"});const s=zc(n),o=jc(n,s,s,i),a={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(f=>{for(const c of f){const u=c.target,h=c.contentBoxSize[0].inlineSize,p=c.contentBoxSize[0].blockSize;u.width=Math.max(1,Math.min(h,n.limits.maxTextureDimension2D)),u.height=Math.max(1,Math.min(p,n.limits.maxTextureDimension2D))}Nc(n,r,o,a)}).observe(e),null}function zc(e){return e.createShaderModule({label:"hardcoded red triangle",code:`${Fc}
${Vc}`})}function jc(e,t,n,r){return e.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Nc(e,t,n,r){r.colorAttachments[0].view=t.getCurrentTexture().createView();const i=e.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(r);s.setPipeline(n),s.draw(3),s.end();const o=i.finish();e.queue.submit([o])}const kc=`// We declare a storage variable to read from and write to\r
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
// }`;async function qc(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=Hc(n),i=Wc(n,r),s=new Float32Array([1,3,5]),o=$c(n,s),a=Yc(n,s.byteLength),l=Xc(n,i.getBindGroupLayout(0),o),f=n.createCommandEncoder({label:"command encoder"}),c=f.beginComputePass({label:"basic compute pass"});c.setPipeline(i),c.setBindGroup(0,l),c.dispatchWorkgroups(s.length),c.end(),f.copyBufferToBuffer(o,0,a,0,a.size);const u=f.finish();n.queue.submit([u]),console.log("We send this Input: ",s);const h=performance.now();await a.mapAsync(GPUMapMode.READ);const p=new Float32Array(a.getMappedRange());return console.log("Computation took: ",performance.now()-h,"ms"),console.log("We got this Result: ",p),a.unmap(),null}function Hc(e){return e.createShaderModule({label:"basic compute module",code:`${kc}`})}function Wc(e,t){return e.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:t,entryPoint:"computeSomething"}})}function $c(e,t){const n=e.createBuffer({label:"work buffer",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(n,0,t),n}function Yc(e,t){return e.createBuffer({label:"result buffer",size:t,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function Xc(e,t,n){return e.createBindGroup({label:"basic bind group",layout:t,entries:[{binding:0,resource:{buffer:n}}]})}const Qc=`// ============================== //\r
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
}`,Kc=`// ============================== //\r
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
}`;async function Ut(e=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const t=await navigator.gpu.requestAdapter();if(!t)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const n=i=>{const s=t.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};e=e.filter(i=>n(i));const r=await t.requestDevice({requiredFeatures:e});return r.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),r}function _t(e,t,n,r="shader module"){const i=e.createShaderModule({label:`${r} - vertex`,code:t}),s=e.createShaderModule({label:`${r} - fragment`,code:n});return{vertex:i,fragment:s}}function Do(e,t){if(!e)return null;const n=e.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:t}),r=e.createBuffer({label:"timestamp-query-resolve-buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=e.createBuffer({label:"timestamp-query-result-buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:n,resolveBuffer:r,resultBuffer:i}}function Jc(e,t){return!e||!t?!1:(t.resolveQuerySet(e.querySet,0,e.querySet.count,e.resolveBuffer,0),e.resultBuffer.mapState==="unmapped"&&t.copyBufferToBuffer(e.resolveBuffer,0,e.resultBuffer,0,e.resultBuffer.size),!0)}function Pt(e){const t=e.reduce((i,s)=>i+s.length,0),n=new Float32Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function us(e,t){const n=e.reduce((o,a)=>o+a.length,0),r=new Uint16Array(n);let i=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];for(let l=0;l<a.length;l++)r[i+l]=a[l]+s;i+=a.length,s+=t[o]}return r}const Zc=0,eu=4,tu=0,nu=100;async function ru(e){const t=await Ut();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=fs(t,"hardcoded triangle",Qc),s=fs(t,"hardcoded triangle",Kc),o=iu(t,i,s,r),a=32,l=8,f=[];for(let h=0;h<nu;h++){const p=hs(t,a);{const b=new Float32Array(a/4);b.set([oe(.1),oe(.1),oe(.1),1],Zc),b.set([oe(-.9,.9),oe(-.9,.9)],eu),t.queue.writeBuffer(p,0,b)}const d=new Float32Array(l/4),m=hs(t,l),y={uniformBindGroup:ou(t,o.getBindGroupLayout(0),p,m),uniformBuffer:m,uniformValues:d,scale:oe(.2,.5)};f.push(y)}const c={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(h=>{for(const p of h){const d=p.target,m=p.contentBoxSize[0].inlineSize,x=p.contentBoxSize[0].blockSize;d.width=Math.max(1,Math.min(m,t.limits.maxTextureDimension2D)),d.height=Math.max(1,Math.min(x,t.limits.maxTextureDimension2D))}su(t,e,n,o,c,f)}).observe(e),null}function fs(e,t,n){return e.createShaderModule({label:t,code:n})}function iu(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function su(e,t,n,r,i,s){i.colorAttachments[0].view=n.getCurrentTexture().createView();const o=e.createCommandEncoder({label:"pass encoder"}),a=o.beginRenderPass(i);a.setPipeline(r);const l=t.width/t.height;for(const c of s)c.uniformValues.set([c.scale/l,c.scale],tu),e.queue.writeBuffer(c.uniformBuffer,0,c.uniformValues),a.setBindGroup(0,c.uniformBindGroup),a.draw(3);a.end();const f=o.finish();e.queue.submit([f])}function hs(e,t){return e.createBuffer({label:"uniform buffer",size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function ou(e,t,n,r){return e.createBindGroup({label:"uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}}]})}const au=`// ============================== //\r
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
}`,lu=`// ============================== //\r
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
}`,Ye=Number.MAX_VALUE,Xe=-Number.MAX_VALUE,cu=32;class uu{constructor(t,n,r){this.v0=t,this.v1=n,this.v2=r;const i=t[0],s=t[1],o=t[2],a=n[0],l=n[1],f=n[2],c=r[0],u=r[1],h=r[2];this.center=[(i+a+c)/3,(s+l+u)/3,(o+f+h)/3];var p=Math.min(i,a,c),d=Math.min(s,l,u),m=Math.min(o,f,h);this.MinValues=[p,d,m];var x=Math.max(i,a,c),y=Math.max(s,l,u),b=Math.max(o,f,h);this.MaxValues=[x,y,b]}center;MinValues;MaxValues}class Dr{minBounds;maxBounds;triangleCount;startIndex;constructor(t,n,r,i){this.minBounds=t,this.maxBounds=n,this.triangleCount=r,this.startIndex=i}}class fu{Triangles=[];builtTriangles=[];Nodes=[];buildBVH(t){this.Triangles=[],this.builtTriangles=[],this.Nodes=[];const n=t.getNumTriangles();this.Triangles=t.getTriangles();let r=Ye,i=Ye,s=Ye,o=Xe,a=Xe,l=Xe;for(let f=0;f<n;f++){const c=[this.Triangles[f].vA.pos[0],this.Triangles[f].vA.pos[1],this.Triangles[f].vA.pos[2]],u=[this.Triangles[f].vB.pos[0],this.Triangles[f].vB.pos[1],this.Triangles[f].vB.pos[2]],h=[this.Triangles[f].vC.pos[0],this.Triangles[f].vC.pos[1],this.Triangles[f].vC.pos[2]],p=new uu(c,u,h);this.builtTriangles.push(p);const d=p.MinValues,m=p.MaxValues;d[0]<r&&(r=d[0]),d[1]<i&&(i=d[1]),d[2]<s&&(s=d[2]),m[0]>o&&(o=m[0]),m[1]>a&&(a=m[1]),m[2]>l&&(l=m[2])}this.Nodes.push(new Dr([r,i,s],[o,a,l],-1,-1)),this.buildTree(0,0,n)}buildTree(t,n,r,i=0){const s=this.Nodes[t],o=[s.maxBounds[0]-s.minBounds[0],s.maxBounds[1]-s.minBounds[1],s.maxBounds[2]-s.minBounds[2]],a=this.computeCost(o,r),l=this.chooseSplit(s,n,r);if(l.cost<a&&i<cu){let f=[Ye,Ye,Ye],c=[Xe,Xe,Xe],u=[Ye,Ye,Ye],h=[Xe,Xe,Xe],p=0;for(let B=n;B<n+r;B++){const S=this.builtTriangles[B];let O;switch(l.axis){case 0:O=S.center[0];break;case 1:O=S.center[1];break;case 2:O=S.center[2];break;default:O=S.center[0];break}if(O<l.position){S.MinValues[0]<f[0]&&(f[0]=S.MinValues[0]),S.MinValues[1]<f[1]&&(f[1]=S.MinValues[1]),S.MinValues[2]<f[2]&&(f[2]=S.MinValues[2]),S.MaxValues[0]>c[0]&&(c[0]=S.MaxValues[0]),S.MaxValues[1]>c[1]&&(c[1]=S.MaxValues[1]),S.MaxValues[2]>c[2]&&(c[2]=S.MaxValues[2]);const I=this.builtTriangles[n+p];this.builtTriangles[n+p]=S,this.builtTriangles[B]=I,p++}else S.MinValues[0]<u[0]&&(u[0]=S.MinValues[0]),S.MinValues[1]<u[1]&&(u[1]=S.MinValues[1]),S.MinValues[2]<u[2]&&(u[2]=S.MinValues[2]),S.MaxValues[0]>h[0]&&(h[0]=S.MaxValues[0]),S.MaxValues[1]>h[1]&&(h[1]=S.MaxValues[1]),S.MaxValues[2]>h[2]&&(h[2]=S.MaxValues[2])}if(p===0||p===r){s.startIndex=n,s.triangleCount=r,this.Nodes[t]=s;return}const d=n,m=n+p,x=new Dr(f,c,-1,d),y=new Dr(u,h,-1,m),b=this.Nodes.length;this.Nodes.push(x);const M=this.Nodes.length;this.Nodes.push(y),s.startIndex=b,this.Nodes[t]=s,this.buildTree(b,d,p,i+1),this.buildTree(M,m,r-p,i+1)}else s.startIndex=n,s.triangleCount=r,this.Nodes[t]=s}computeCost(t,n){return n===0?0:(t[0]*t[1]+t[1]*t[2]+t[2]*t[0])*n}expandBin(t,n){t.count++;for(let r=0;r<3;r++)n.MinValues[r]<t.minBounds[r]&&(t.minBounds[r]=n.MinValues[r]),n.MaxValues[r]>t.maxBounds[r]&&(t.maxBounds[r]=n.MaxValues[r])}mergeBins(t,n){return{count:t.count+n.count,minBounds:[Math.min(t.minBounds[0],n.minBounds[0]),Math.min(t.minBounds[1],n.minBounds[1]),Math.min(t.minBounds[2],n.minBounds[2])],maxBounds:[Math.max(t.maxBounds[0],n.maxBounds[0]),Math.max(t.maxBounds[1],n.maxBounds[1]),Math.max(t.maxBounds[2],n.maxBounds[2])]}}chooseSplit(t,n,r){let s=Number.MAX_VALUE,o=-1,a=0;for(let l=0;l<3;l++){const f=t.minBounds[l],u=t.maxBounds[l]-f;if(u<1e-5)continue;const h=[];for(let m=0;m<12;m++)h.push({count:0,minBounds:[Ye,Ye,Ye],maxBounds:[Xe,Xe,Xe]});for(let m=0;m<r;m++){const x=this.builtTriangles[n+m],y=(x.center[l]-f)/u;let b=Math.floor(y*12);b>=12&&(b=11),b<0&&(b=0),this.expandBin(h[b],x)}const p=[];p[0]=h[0];for(let m=1;m<11;m++)p[m]=this.mergeBins(p[m-1],h[m]);const d=[];d[10]=h[11];for(let m=9;m>=0;m--)d[m]=this.mergeBins(d[m+1],h[m+1]);for(let m=0;m<11;m++){const x=[p[m].maxBounds[0]-p[m].minBounds[0],p[m].maxBounds[1]-p[m].minBounds[1],p[m].maxBounds[2]-p[m].minBounds[2]],y=[d[m].maxBounds[0]-d[m].minBounds[0],d[m].maxBounds[1]-d[m].minBounds[1],d[m].maxBounds[2]-d[m].minBounds[2]],b=this.computeCost(x,p[m].count)+this.computeCost(y,d[m].count);b<s&&(s=b,o=l,a=f+u*(m+1)/12)}}return{axis:o,position:a,cost:s}}generateWireframeGeometry(t=1/0){const n=[],r=(a,l,f,c,u,h)=>{n.push(a,l,f,c,u,h)},i=(a,l)=>{r(a[0],a[1],a[2],l[0],a[1],a[2]),r(a[0],l[1],a[2],l[0],l[1],a[2]),r(a[0],a[1],l[2],l[0],a[1],l[2]),r(a[0],l[1],l[2],l[0],l[1],l[2]),r(a[0],a[1],a[2],a[0],l[1],a[2]),r(l[0],a[1],a[2],l[0],l[1],a[2]),r(a[0],a[1],l[2],a[0],l[1],l[2]),r(l[0],a[1],l[2],l[0],l[1],l[2]),r(a[0],a[1],a[2],a[0],a[1],l[2]),r(l[0],a[1],a[2],l[0],a[1],l[2]),r(a[0],l[1],a[2],a[0],l[1],l[2]),r(l[0],l[1],a[2],l[0],l[1],l[2])},s=[{index:0,depth:0}];for(;s.length>0;){const{index:a,depth:l}=s.pop(),f=this.Nodes[a];l>=t||(f.triangleCount===-1?(s.push({index:f.startIndex,depth:l+1}),s.push({index:f.startIndex+1,depth:l+1}),l==t-1&&i(f.minBounds,f.maxBounds)):i(f.minBounds,f.maxBounds))}const o=new Float32Array(n);return{vertexData:o,count:o.length/3}}}class Vt{triangles;vertices;indices;Material;name;transform;BVH;constructor(t,n){this.name=t,this.Material=n,this.triangles=[],this.indices=[],this.vertices=[],this.BVH=new fu,this.transform={translation:ce(),rotation:ce(),scale:U(1,1,1)}}TransformMesh(t){this.transform=t}GetTransform(){return this.transform}GetMaterial(){return this.Material}GetFlattenedMaterial(){return Io(this.Material)}addVertex(t){return this.vertices.push(t),this.vertices.length-1}addTriangle(t){if(t.length!==3)return;const n={vA:this.vertices[t[0]],vB:this.vertices[t[1]],vC:this.vertices[t[2]]};this.triangles.push(n),this.indices.push(...t)}getVertexData(){const t=Array(this.vertices.length*3),n=new Float32Array(t);for(let r=0;r<this.vertices.length;++r)n.set(this.vertices[r].pos,r*3);return n}getNormalData(){const t=Array(this.vertices.length*3),n=new Float32Array(t);for(let r=0;r<this.vertices.length;++r)n.set(this.vertices[r].normal,r*3);return n}getUVData(){const t=Array(this.vertices.length*2),n=new Float32Array(t);for(let r=0;r<this.vertices.length;++r)n.set(this.vertices[r].uv,r*2);return n}getIndexData16(){return new Uint16Array(this.indices)}getIndexData32(){return new Uint32Array(this.indices)}getNumVertices(){return this.vertices.length}getNumTriangles(){return this.triangles.length}getTriangles(){return this.triangles}ComputeBVH(){this.BVH.buildBVH(this)}}function Go(){const t=new Float32Array(8);let n=0;const r=s=>{t[n++]=s.x,t[n++]=s.y};r({x:-.5,y:-.5}),r({x:.5,y:-.5}),r({x:-.5,y:.5}),r({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:t,indexData:i,numVertices:i.length}}function hu({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*3),a=new Uint8Array(o.buffer);let l=0,f=8;const c=m=>{o[l++]=m.x,o[l++]=m.y,l+=1,a[f++]=(m.r??0)*255,a[f++]=(m.g??0)*255,a[f++]=(m.b??0)*255,f+=9},u=[1,1,1],h=[.1,.1,.1];for(let m=0;m<=t;m++){const x=r+(m+0)*(i-r)/t,y=Math.cos(x),b=Math.sin(x);c({x:y*e,y:b*e,r:h[0],g:h[1],b:h[2]}),c({x:y*n,y:b*n,r:u[0],g:u[1],b:u[2]})}const p=new Uint16Array(t*6);let d=0;for(let m=0;m<t;++m){const x=m*2;p[d++]=x,p[d++]=x+1,p[d++]=x+2,p[d++]=x+2,p[d++]=x+1,p[d++]=x+3}return{vertexData:o,indexData:p,numVertices:p.length}}function du({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*2);let a=0;const l=u=>{o[a++]=u.x,o[a++]=u.y};for(let u=0;u<=t;u++){const h=r+(u+0)*(i-r)/t,p=Math.cos(h),d=Math.sin(h);l({x:p*e,y:d*e}),l({x:p*n,y:d*n})}const f=new Uint16Array(t*6);let c=0;for(let u=0;u<t;++u){const h=u*2;f[c++]=h,f[c++]=h+1,f[c++]=h+2,f[c++]=h+2,f[c++]=h+1,f[c++]=h+3}return{vertexData:o,indexData:f,numVertices:f.length}}function pu({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=t*3*2,o=new Float32Array(s*2);let a=0;const l=(f,c)=>{o[a++]=f,o[a++]=c};for(let f=0;f<t;f++){const c=r+(f+0)*(i-r)/t,u=r+(f+1)*(i-r)/t,h=Math.cos(c),p=Math.sin(c),d=Math.cos(u),m=Math.sin(u);l(h*e,p*e),l(d*e,m*e),l(h*n,p*n),l(h*n,p*n),l(d*e,m*e),l(d*n,m*n)}return o}function mu(){const e=[.73,.73,.73],t=[.65,.05,.05],n=[.12,.45,.15],r=[1,1,1],i=[],s=[],o=[],a=[],l=[],f=[];let c=0;function u(b,M,B,S,O=0){return i.push(b[0],b[1],b[2]),s.push(M[0],M[1],M[2]),o.push(B[0],B[1],B[2]),l.push(S[0],S[1]),a.push(O),c++}function h(b,M,B,S,O,I=!1,w=0){let R=Uo(b,M,B);I&&(R=U(-R[0],-R[1],-R[2]));const L=u(b,[R[0],R[1],R[2]],O,[0,0],w),q=u(M,[R[0],R[1],R[2]],O,[1,0],w),k=u(B,[R[0],R[1],R[2]],O,[1,1],w),N=u(S,[R[0],R[1],R[2]],O,[0,1],w);f.push(L,q,k),f.push(L,k,N)}function p(b,M,B,S=[0,0,0],O=0){const I=M[0]/2,w=M[1]/2,R=M[2]/2;let L=[b[0]-I,b[1]-w,b[2]-R],q=[b[0]+I,b[1]-w,b[2]-R],k=[b[0]+I,b[1]+w,b[2]-R],N=[b[0]-I,b[1]+w,b[2]-R],z=[b[0]-I,b[1]-w,b[2]+R],K=[b[0]+I,b[1]-w,b[2]+R],Y=[b[0]+I,b[1]+w,b[2]+R],j=[b[0]-I,b[1]+w,b[2]+R];const V=new Float32Array(9),ue=Math.cos(S[0]),be=Math.sin(S[0]),ee=Math.cos(S[1]),ne=Math.sin(S[1]),xe=Math.cos(S[2]),Me=Math.sin(S[2]);V[0]=ee*xe,V[1]=-ee*Me,V[2]=ne,V[3]=be*ne*xe+ue*Me,V[4]=-be*ne*Me+ue*xe,V[5]=-be*ee,V[6]=-ue*ne*xe+be*Me,V[7]=ue*ne*Me+be*xe,V[8]=ue*ee;const ye=Be=>{const Se=Be[0]-b[0],ge=Be[1]-b[1],Ne=Be[2]-b[2];return[V[0]*Se+V[1]*ge+V[2]*Ne+b[0],V[3]*Se+V[4]*ge+V[5]*Ne+b[1],V[6]*Se+V[7]*ge+V[8]*Ne+b[2]]};L=ye(L),q=ye(q),k=ye(k),N=ye(N),z=ye(z),K=ye(K),Y=ye(Y),j=ye(j),h(z,K,Y,j,B,!1,O),h(q,L,N,k,B,!1,O),h(L,z,j,N,B,!1,O),h(K,q,k,Y,B,!1,O),h(N,j,Y,k,B,!1,O),h(L,q,K,z,B,!1,O)}h([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],e,!1,.98),h([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],e,!1,.98);const m=548.8-1;h([343,m,227],[343,m,332],[213,m,332],[213,m,227],r),h([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],e),h([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],n),h([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],t);let x=c;p([278,224.4,279.5],[120,120,120],e,[4,Math.PI/9,7],1);let y=c-x;return{vertexData:new Float32Array(i),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(s),colorData:new Float32Array(o),reflectanceData:new Float32Array(a),uvData:new Float32Array(l),additionalInfo:{cubeVertexStart:x,cubeVertexCount:y,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(i.slice(x*3,(x+y)*3)),cubeNormalsInfo:new Float32Array(s.slice(x*3,(x+y)*3))}}}function Gr(e,t){let n=4;const r=new Float32Array(n*3),i=new Float32Array(n*3),s=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint16Array([0,1,2,0,2,3]),l=e.translation,f=e.scale[0]/2,c=e.scale[1]/2,u=e.rotation,h=[U(-f,-c,0),U(f,-c,0),U(f,c,0),U(-f,c,0)],p=Ro(u[0],u[1],u[2]);for(let y=0;y<h.length;++y)ti(h[y],h[y],p),$t(h[y],h[y],l);let d=0;const m=(y,b)=>{r[d]=y[0],r[d+1]=y[1],r[d+2]=y[2],i[d]=b[0],i[d+1]=b[1],i[d+2]=b[2],d+=3};m(h[0],t),m(h[1],t),m(h[2],t),m(h[3],t);const x=U(0,0,1);ti(x,x,p);for(let y=0;y<n;++y)s[y*3+0]=x[0],s[y*3+1]=x[1],s[y*3+2]=x[2];return o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=1,o[5]=1,o[6]=0,o[7]=1,{vertexData:r,indexData:a,colorData:i,normalData:s,uvData:o,numVertices:a.length,transform:e}}function Fr(e,t,n,r=12,i=12){const s=[],o=[],a=[],l=[],f=[],c=(u,h,p,d)=>{s.push(u[0],u[1],u[2]),o.push(h[0],h[1],h[2]),a.push(p[0],p[1],p[2]),l.push(d[0],d[1])};for(let u=0;u<=r;u++){const h=u*Math.PI/r,p=Math.sin(h),d=Math.cos(h);for(let m=0;m<=i;m++){const x=m*2*Math.PI/i,y=Math.sin(x),M=Math.cos(x)*p,B=d,S=y*p,O=1-m/i,I=1-u/r,w=[e[0]+t*M,e[1]+t*B,e[2]+t*S];c(w,[M,B,S],n,[O,I])}}for(let u=0;u<r;u++)for(let h=0;h<i;h++){const p=u*(i+1)+h,d=p+i+1;f.push(p,p+1,d),f.push(d,p+1,d+1)}return{vertexData:new Float32Array(s),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(o),colorData:new Float32Array(a),uvData:new Float32Array(l),transform:{translation:U(e[0],e[1],e[2]),rotation:U(0,0,0),scale:U(t,t,t)}}}function gu(e,t=8){const n=[];n.push(new Vt("white wall",Ft({albedo:[.73,.73,.73],name:"whiteWall"}))),n.push(new Vt("red wall",Ft({albedo:[.65,.05,.05],name:"redWall"}))),n.push(new Vt("green wall",Ft({albedo:[.12,.45,.15],name:"greenWall"}))),n.push(new Vt("light",Ft({albedo:[1,1,1],roughness:0,name:"light"}))),n.push(new Vt("sphereOne",e.find(h=>h.name==="sphereOne")||Ft({albedo:[.12,.45,.15],name:"sphereOne",textureIndex:0}))),n.push(new Vt("sphereTwo",e.find(h=>h.name==="sphereTwo")||Ft({albedo:[.05,.05,.65],roughness:.5,metalness:.5,name:"sphereTwo",textureIndex:1}))),n.push(new Vt("sphereThree",e.find(h=>h.name==="sphereThree")||Ft({albedo:[.65,.05,.05],roughness:.01,metalness:.98,name:"sphereThree",textureIndex:2})));function r(h,p,d,m){const x={pos:p,normal:d,uv:m};h.addVertex(x)}function i(h,p,d,m,x,y=!1){let b=Uo(p,d,m);y&&(b=U(-b[0],-b[1],-b[2]));const M=h.addVertex({pos:p,normal:b,uv:Z(0,0)}),B=h.addVertex({pos:d,normal:b,uv:Z(1,0)}),S=h.addVertex({pos:m,normal:b,uv:Z(1,1)}),O=h.addVertex({pos:x,normal:b,uv:Z(0,1)});h.addTriangle([M,B,S]),h.addTriangle([M,S,O])}function s(h,p,d,m=12,x=12){const y=h.getNumVertices();for(let b=0;b<=m;b++){const M=b*Math.PI/m,B=Math.sin(M),S=Math.cos(M);for(let O=0;O<=x;O++){const I=O*2*Math.PI/x,w=Math.sin(I),L=Math.cos(I)*B,q=S,k=w*B,N=1-O/x,z=1-b/m,K=U(p[0]+d*L,p[1]+d*q,p[2]+d*k);r(h,K,U(L,q,k),Z(N,z))}}for(let b=0;b<m;b++)for(let M=0;M<x;M++){const B=y+b*(x+1)+M,S=B+x+1;h.addTriangle([B,B+1,S]),h.addTriangle([S,B+1,S+1])}}i(n[0],U(552.8,0,0),U(0,0,0),U(0,0,559.2),U(549.6,0,559.2),!1),i(n[0],U(556,548.8,0),U(556,548.8,559.2),U(0,548.8,559.2),U(0,548.8,0),!1);const a=548.8-1;i(n[3],U(343,a,227),U(343,a,332),U(213,a,332),U(213,a,227),!1),i(n[0],U(549.6,0,559.2),U(0,0,559.2),U(0,548.8,559.2),U(556,548.8,559.2),!1),i(n[2],U(0,0,559.2),U(0,0,0),U(0,548.8,0),U(0,548.8,559.2),!1),i(n[1],U(552.8,0,0),U(549.6,0,559.2),U(556,548.8,559.2),U(556,548.8,0),!1);let l=[278,224.4,279.5],f=90,c=120,u=[U(0,1,0),U(Math.sqrt(3)/2,-.5,0),U(-Math.sqrt(3)/2,-.5,0)];for(let h=0;h<3;++h){let p=u[h],d=U(l[0]+p[0]*c,l[1]+p[1]*c,l[2]+p[2]*c);s(n[h+4],d,f,t,t)}return n[4].TransformMesh({translation:U(l[0]+u[0][0]*c,l[1]+u[0][1]*c,l[2]+u[0][2]*c),rotation:U(0,0,0),scale:U(f,f,f)}),n[5].TransformMesh({translation:U(l[0]+u[1][0]*c,l[1]+u[1][1]*c,l[2]+u[1][2]*c),rotation:U(0,0,0),scale:U(f,f,f)}),n[6].TransformMesh({translation:U(l[0]+u[2][0]*c,l[1]+u[2][1]*c,l[2]+u[2][2]*c),rotation:U(0,0,0),scale:U(f,f,f)}),{meshes:n,additionalInfo:{sphereMaterialIndices:[4,5,6],sphereTransforms:[n[4].GetTransform(),n[5].GetTransform(),n[6].GetTransform()],sphereMaterials:[n[4].GetMaterial(),n[5].GetMaterial(),n[6].GetMaterial()]}}}const vu=0,bu=4,Wn=50;async function xu(e){const t=await Ut();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=ds(t,"hardcoded triangle",au),s=ds(t,"hardcoded triangle",lu),o=yu(t,i,s,r),a=32,l=8,f=a*Wn,c=l*Wn,u=pu({radius:1,innerRadius:.5}),h=u.byteLength,p=u.length/2,d=Vr(t,f),m=Vr(t,c),x=Vr(t,h);t.queue.writeBuffer(x,0,u);const y=[];{const O=new Float32Array(f/4);for(let I=0;I<Wn;I++){const w=I*(a/4);O.set([oe(.1),oe(.1),oe(.1),1],w+vu),O.set([oe(-.9,.9),oe(-.9,.9)],w+bu);const R={scale:oe(.1,.4)};y.push(R)}t.queue.writeBuffer(d,0,O)}const b=new Float32Array(c/4),M=wu(t,o.getBindGroupLayout(0),d,m,x),B={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(O=>{for(const I of O){const w=I.target,R=I.contentBoxSize[0].inlineSize,L=I.contentBoxSize[0].blockSize;w.width=Math.max(1,Math.min(R,t.limits.maxTextureDimension2D)),w.height=Math.max(1,Math.min(L,t.limits.maxTextureDimension2D))}Bu(t,e,n,o,B,y,M,b,m,p)}).observe(e),null}function ds(e,t,n){return e.createShaderModule({label:t,code:n})}function yu(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Bu(e,t,n,r,i,s,o,a,l,f){i.colorAttachments[0].view=n.getCurrentTexture().createView();const c=e.createCommandEncoder({label:"pass encoder"}),u=c.beginRenderPass(i);u.setPipeline(r);const h=t.width/t.height;s.forEach((d,m)=>{const x=2*m;a.set([d.scale/h,d.scale],x)}),e.queue.writeBuffer(l,0,a),u.setBindGroup(0,o),u.draw(f,Wn),u.end();const p=c.finish();e.queue.submit([p])}function Vr(e,t){return e.createBuffer({label:"storage buffer",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function wu(e,t,n,r,i){return e.createBindGroup({label:"storage bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}},{binding:2,resource:{buffer:i}}]})}const Su=`// ============================== //\r
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
}`,Pu=`// ============================== //\r
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
}`,Mu=0,Tu=1,$n=50;async function Cu(e){const t=await Ut();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=ps(t,"hardcoded triangle",Su),s=ps(t,"hardcoded triangle",Pu),o=Ou(t,i,s,r),a=12,l=8,f=a*$n,c=l*$n,u=hu({radius:1,innerRadius:.5}),h=u.vertexData.byteLength,p=u.numVertices,d=Lr(t,f),m=Lr(t,c),x=Lr(t,h),y=_u(t,u.indexData.byteLength);t.queue.writeBuffer(x,0,u.vertexData),t.queue.writeBuffer(y,0,u.indexData);const b=[];{const O=new Uint8Array(f),I=new Float32Array(O.buffer);for(let w=0;w<$n;w++){const R=w*a,L=w*(a/4);O.set([Math.round(oe(.1)*255),Math.round(oe(.1)*255),Math.round(oe(.1)*255),255],R+Mu),I.set([oe(-.9,.9),oe(-.9,.9)],L+Tu);const q={scale:oe(.1,.4)};b.push(q)}t.queue.writeBuffer(d,0,I)}const M=new Float32Array(c/4),B={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(O=>{for(const I of O){const w=I.target,R=I.contentBoxSize[0].inlineSize,L=I.contentBoxSize[0].blockSize;w.width=Math.max(1,Math.min(R,t.limits.maxTextureDimension2D)),w.height=Math.max(1,Math.min(L,t.limits.maxTextureDimension2D))}Eu(t,e,n,o,B,b,d,M,m,p,x,y)}).observe(e),null}function ps(e,t,n){return e.createShaderModule({label:t,code:n})}function Ou(e,t,n,r){return e.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Eu(e,t,n,r,i,s,o,a,l,f,c,u){i.colorAttachments[0].view=n.getCurrentTexture().createView();const h=e.createCommandEncoder({label:"pass encoder"}),p=h.beginRenderPass(i);p.setPipeline(r),p.setVertexBuffer(0,c),p.setVertexBuffer(1,o),p.setVertexBuffer(2,l),p.setIndexBuffer(u,"uint16");const d=t.width/t.height;s.forEach((x,y)=>{const b=2*y;a.set([x.scale/d,x.scale],b)}),e.queue.writeBuffer(l,0,a),p.drawIndexed(f,$n),p.end();const m=h.finish();e.queue.submit([m])}function Lr(e,t){return e.createBuffer({label:"vertex buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function _u(e,t){return e.createBuffer({label:"index buffer",size:t,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const Iu=`// ============================== //\r
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
}`,Ru=`// ============================== //\r
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
}`;let Ce=1e-6;const Uu=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);Uu.get(Float32Array);let br=Float32Array;function Je(e,t,n){const r=new br(3);return e!==void 0&&(r[0]=e,t!==void 0&&(r[1]=t,n!==void 0&&(r[2]=n))),r}function yi(e,t,n){return n=n||new br(3),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function sn(e,t,n){n=n||new br(3);const r=e[2]*t[0]-e[0]*t[2],i=e[0]*t[1]-e[1]*t[0];return n[0]=e[1]*t[2]-e[2]*t[1],n[1]=r,n[2]=i,n}function xt(e,t){t=t||new br(3);const n=e[0],r=e[1],i=e[2],s=Math.sqrt(n*n+r*r+i*i);return s>1e-5?(t[0]=n/s,t[1]=r/s,t[2]=i/s):(t[0]=0,t[1]=0,t[2]=0),t}let le=Float32Array;function Au(e){const t=le;return le=e,t}function Du(e,t,n,r,i,s,o,a,l,f,c,u,h,p,d,m){const x=new le(16);return e!==void 0&&(x[0]=e,t!==void 0&&(x[1]=t,n!==void 0&&(x[2]=n,r!==void 0&&(x[3]=r,i!==void 0&&(x[4]=i,s!==void 0&&(x[5]=s,o!==void 0&&(x[6]=o,a!==void 0&&(x[7]=a,l!==void 0&&(x[8]=l,f!==void 0&&(x[9]=f,c!==void 0&&(x[10]=c,u!==void 0&&(x[11]=u,h!==void 0&&(x[12]=h,p!==void 0&&(x[13]=p,d!==void 0&&(x[14]=d,m!==void 0&&(x[15]=m)))))))))))))))),x}function Gu(e,t){return t=t||new le(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=0,t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Fu(e,t){t=t||new le(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,a=r+r,l=i+i,f=n*o,c=r*o,u=r*a,h=i*o,p=i*a,d=i*l,m=s*o,x=s*a,y=s*l;return t[0]=1-u-d,t[1]=c+y,t[2]=h-x,t[3]=0,t[4]=c-y,t[5]=1-f-d,t[6]=p+m,t[7]=0,t[8]=h+x,t[9]=p-m,t[10]=1-f-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Vu(e,t){return t=t||new le(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function Bi(e,t){return t=t||new le(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}const Lu=Bi;function zu(e,t){return Math.abs(e[0]-t[0])<Ce&&Math.abs(e[1]-t[1])<Ce&&Math.abs(e[2]-t[2])<Ce&&Math.abs(e[3]-t[3])<Ce&&Math.abs(e[4]-t[4])<Ce&&Math.abs(e[5]-t[5])<Ce&&Math.abs(e[6]-t[6])<Ce&&Math.abs(e[7]-t[7])<Ce&&Math.abs(e[8]-t[8])<Ce&&Math.abs(e[9]-t[9])<Ce&&Math.abs(e[10]-t[10])<Ce&&Math.abs(e[11]-t[11])<Ce&&Math.abs(e[12]-t[12])<Ce&&Math.abs(e[13]-t[13])<Ce&&Math.abs(e[14]-t[14])<Ce&&Math.abs(e[15]-t[15])<Ce}function ju(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Fo(e){return e=e||new le(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Nu(e,t){if(t=t||new le(16),t===e){let b;return b=e[1],e[1]=e[4],e[4]=b,b=e[2],e[2]=e[8],e[8]=b,b=e[3],e[3]=e[12],e[12]=b,b=e[6],e[6]=e[9],e[9]=b,b=e[7],e[7]=e[13],e[13]=b,b=e[11],e[11]=e[14],e[14]=b,t}const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],c=e[8],u=e[9],h=e[10],p=e[11],d=e[12],m=e[13],x=e[14],y=e[15];return t[0]=n,t[1]=o,t[2]=c,t[3]=d,t[4]=r,t[5]=a,t[6]=u,t[7]=m,t[8]=i,t[9]=l,t[10]=h,t[11]=x,t[12]=s,t[13]=f,t[14]=p,t[15]=y,t}function Vo(e,t){t=t||new le(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],c=e[8],u=e[9],h=e[10],p=e[11],d=e[12],m=e[13],x=e[14],y=e[15],b=h*y,M=x*p,B=l*y,S=x*f,O=l*p,I=h*f,w=i*y,R=x*s,L=i*p,q=h*s,k=i*f,N=l*s,z=c*m,K=d*u,Y=o*m,j=d*a,V=o*u,ue=c*a,be=n*m,ee=d*r,ne=n*u,xe=c*r,Me=n*a,ye=o*r,Be=b*a+S*u+O*m-(M*a+B*u+I*m),Se=M*r+w*u+q*m-(b*r+R*u+L*m),ge=B*r+R*a+k*m-(S*r+w*a+N*m),Ne=I*r+L*a+N*u-(O*r+q*a+k*u),fe=1/(n*Be+o*Se+c*ge+d*Ne);return t[0]=fe*Be,t[1]=fe*Se,t[2]=fe*ge,t[3]=fe*Ne,t[4]=fe*(M*o+B*c+I*d-(b*o+S*c+O*d)),t[5]=fe*(b*n+R*c+L*d-(M*n+w*c+q*d)),t[6]=fe*(S*n+w*o+N*d-(B*n+R*o+k*d)),t[7]=fe*(O*n+q*o+k*c-(I*n+L*o+N*c)),t[8]=fe*(z*f+j*p+V*y-(K*f+Y*p+ue*y)),t[9]=fe*(K*s+be*p+xe*y-(z*s+ee*p+ne*y)),t[10]=fe*(Y*s+ee*f+Me*y-(j*s+be*f+ye*y)),t[11]=fe*(ue*s+ne*f+ye*p-(V*s+xe*f+Me*p)),t[12]=fe*(Y*h+ue*x+K*l-(V*x+z*l+j*h)),t[13]=fe*(ne*x+z*i+ee*h-(be*h+xe*x+K*i)),t[14]=fe*(be*l+ye*x+j*i-(Me*x+Y*i+ee*l)),t[15]=fe*(Me*h+V*i+xe*l-(ne*l+ye*h+ue*i)),t}function ku(e){const t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],l=e[7],f=e[8],c=e[9],u=e[10],h=e[11],p=e[12],d=e[13],m=e[14],x=e[15],y=u*x,b=m*h,M=a*x,B=m*l,S=a*h,O=u*l,I=r*x,w=m*i,R=r*h,L=u*i,q=r*l,k=a*i,N=y*o+B*c+S*d-(b*o+M*c+O*d),z=b*n+I*c+L*d-(y*n+w*c+R*d),K=M*n+w*o+q*d-(B*n+I*o+k*d),Y=O*n+R*o+k*c-(S*n+L*o+q*c);return t*N+s*z+f*K+p*Y}const qu=Vo;function Lo(e,t,n){n=n||new le(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],f=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],m=e[12],x=e[13],y=e[14],b=e[15],M=t[0],B=t[1],S=t[2],O=t[3],I=t[4],w=t[5],R=t[6],L=t[7],q=t[8],k=t[9],N=t[10],z=t[11],K=t[12],Y=t[13],j=t[14],V=t[15];return n[0]=r*M+a*B+u*S+m*O,n[1]=i*M+l*B+h*S+x*O,n[2]=s*M+f*B+p*S+y*O,n[3]=o*M+c*B+d*S+b*O,n[4]=r*I+a*w+u*R+m*L,n[5]=i*I+l*w+h*R+x*L,n[6]=s*I+f*w+p*R+y*L,n[7]=o*I+c*w+d*R+b*L,n[8]=r*q+a*k+u*N+m*z,n[9]=i*q+l*k+h*N+x*z,n[10]=s*q+f*k+p*N+y*z,n[11]=o*q+c*k+d*N+b*z,n[12]=r*K+a*Y+u*j+m*V,n[13]=i*K+l*Y+h*j+x*V,n[14]=s*K+f*Y+p*j+y*V,n[15]=o*K+c*Y+d*j+b*V,n}const Hu=Lo;function Wu(e,t,n){return n=n||Fo(),e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11]),n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function $u(e,t){return t=t||Je(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Yu(e,t,n){n=n||Je();const r=t*4;return n[0]=e[r+0],n[1]=e[r+1],n[2]=e[r+2],n}function Xu(e,t,n,r){r!==e&&(r=Bi(e,r));const i=n*4;return r[i+0]=t[0],r[i+1]=t[1],r[i+2]=t[2],r}function Qu(e,t){t=t||Je();const n=e[0],r=e[1],i=e[2],s=e[4],o=e[5],a=e[6],l=e[8],f=e[9],c=e[10];return t[0]=Math.sqrt(n*n+r*r+i*i),t[1]=Math.sqrt(s*s+o*o+a*a),t[2]=Math.sqrt(l*l+f*f+c*c),t}function Ku(e,t,n,r,i){i=i||new le(16);const s=Math.tan(Math.PI*.5-.5*e);if(i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,r===1/0)i[10]=-1,i[14]=-n;else{const o=1/(n-r);i[10]=r*o,i[14]=r*n*o}return i}function Ju(e,t,n,r,i,s,o){return o=o||new le(16),o[0]=2/(t-e),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(r-n),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(i-s),o[11]=0,o[12]=(t+e)/(e-t),o[13]=(r+n)/(n-r),o[14]=i/(i-s),o[15]=1,o}function Zu(e,t,n,r,i,s,o){o=o||new le(16);const a=t-e,l=r-n,f=i-s;return o[0]=2*i/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/l,o[6]=0,o[7]=0,o[8]=(e+t)/a,o[9]=(r+n)/l,o[10]=s/f,o[11]=-1,o[12]=0,o[13]=0,o[14]=i*s/f,o[15]=0,o}let he,ve,se;function ef(e,t,n,r){return r=r||new le(16),he=he||Je(),ve=ve||Je(),se=se||Je(),xt(yi(t,e,se),se),xt(sn(n,se,he),he),xt(sn(se,he,ve),ve),r[0]=he[0],r[1]=he[1],r[2]=he[2],r[3]=0,r[4]=ve[0],r[5]=ve[1],r[6]=ve[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function tf(e,t,n,r){return r=r||new le(16),he=he||Je(),ve=ve||Je(),se=se||Je(),xt(yi(e,t,se),se),xt(sn(n,se,he),he),xt(sn(se,he,ve),ve),r[0]=he[0],r[1]=he[1],r[2]=he[2],r[3]=0,r[4]=ve[0],r[5]=ve[1],r[6]=ve[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function nf(e,t,n,r){return r=r||new le(16),he=he||Je(),ve=ve||Je(),se=se||Je(),xt(yi(e,t,se),se),xt(sn(n,se,he),he),xt(sn(se,he,ve),ve),r[0]=he[0],r[1]=ve[0],r[2]=se[0],r[3]=0,r[4]=he[1],r[5]=ve[1],r[6]=se[1],r[7]=0,r[8]=he[2],r[9]=ve[2],r[10]=se[2],r[11]=0,r[12]=-(he[0]*e[0]+he[1]*e[1]+he[2]*e[2]),r[13]=-(ve[0]*e[0]+ve[1]*e[1]+ve[2]*e[2]),r[14]=-(se[0]*e[0]+se[1]*e[1]+se[2]*e[2]),r[15]=1,r}function rf(e,t){return t=t||new le(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function sf(e,t,n){n=n||new le(16);const r=t[0],i=t[1],s=t[2],o=e[0],a=e[1],l=e[2],f=e[3],c=e[4],u=e[5],h=e[6],p=e[7],d=e[8],m=e[9],x=e[10],y=e[11],b=e[12],M=e[13],B=e[14],S=e[15];return e!==n&&(n[0]=o,n[1]=a,n[2]=l,n[3]=f,n[4]=c,n[5]=u,n[6]=h,n[7]=p,n[8]=d,n[9]=m,n[10]=x,n[11]=y),n[12]=o*r+c*i+d*s+b,n[13]=a*r+u*i+m*s+M,n[14]=l*r+h*i+x*s+B,n[15]=f*r+p*i+y*s+S,n}function of(e,t){t=t||new le(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function af(e,t,n){n=n||new le(16);const r=e[4],i=e[5],s=e[6],o=e[7],a=e[8],l=e[9],f=e[10],c=e[11],u=Math.cos(t),h=Math.sin(t);return n[4]=u*r+h*a,n[5]=u*i+h*l,n[6]=u*s+h*f,n[7]=u*o+h*c,n[8]=u*a-h*r,n[9]=u*l-h*i,n[10]=u*f-h*s,n[11]=u*c-h*o,e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function lf(e,t){t=t||new le(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function cf(e,t,n){n=n||new le(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[8],l=e[9],f=e[10],c=e[11],u=Math.cos(t),h=Math.sin(t);return n[0]=u*r-h*a,n[1]=u*i-h*l,n[2]=u*s-h*f,n[3]=u*o-h*c,n[8]=u*a+h*r,n[9]=u*l+h*i,n[10]=u*f+h*s,n[11]=u*c+h*o,e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function uf(e,t){t=t||new le(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ff(e,t,n){n=n||new le(16);const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],f=e[6],c=e[7],u=Math.cos(t),h=Math.sin(t);return n[0]=u*r+h*a,n[1]=u*i+h*l,n[2]=u*s+h*f,n[3]=u*o+h*c,n[4]=u*a-h*r,n[5]=u*l-h*i,n[6]=u*f-h*s,n[7]=u*c-h*o,e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function zo(e,t,n){n=n||new le(16);let r=e[0],i=e[1],s=e[2];const o=Math.sqrt(r*r+i*i+s*s);r/=o,i/=o,s/=o;const a=r*r,l=i*i,f=s*s,c=Math.cos(t),u=Math.sin(t),h=1-c;return n[0]=a+(1-a)*c,n[1]=r*i*h+s*u,n[2]=r*s*h-i*u,n[3]=0,n[4]=r*i*h-s*u,n[5]=l+(1-l)*c,n[6]=i*s*h+r*u,n[7]=0,n[8]=r*s*h+i*u,n[9]=i*s*h-r*u,n[10]=f+(1-f)*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}const hf=zo;function jo(e,t,n,r){r=r||new le(16);let i=t[0],s=t[1],o=t[2];const a=Math.sqrt(i*i+s*s+o*o);i/=a,s/=a,o/=a;const l=i*i,f=s*s,c=o*o,u=Math.cos(n),h=Math.sin(n),p=1-u,d=l+(1-l)*u,m=i*s*p+o*h,x=i*o*p-s*h,y=i*s*p-o*h,b=f+(1-f)*u,M=s*o*p+i*h,B=i*o*p+s*h,S=s*o*p-i*h,O=c+(1-c)*u,I=e[0],w=e[1],R=e[2],L=e[3],q=e[4],k=e[5],N=e[6],z=e[7],K=e[8],Y=e[9],j=e[10],V=e[11];return r[0]=d*I+m*q+x*K,r[1]=d*w+m*k+x*Y,r[2]=d*R+m*N+x*j,r[3]=d*L+m*z+x*V,r[4]=y*I+b*q+M*K,r[5]=y*w+b*k+M*Y,r[6]=y*R+b*N+M*j,r[7]=y*L+b*z+M*V,r[8]=B*I+S*q+O*K,r[9]=B*w+S*k+O*Y,r[10]=B*R+S*N+O*j,r[11]=B*L+S*z+O*V,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}const df=jo;function pf(e,t){return t=t||new le(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mf(e,t,n){n=n||new le(16);const r=t[0],i=t[1],s=t[2];return n[0]=r*e[0],n[1]=r*e[1],n[2]=r*e[2],n[3]=r*e[3],n[4]=i*e[4],n[5]=i*e[5],n[6]=i*e[6],n[7]=i*e[7],n[8]=s*e[8],n[9]=s*e[9],n[10]=s*e[10],n[11]=s*e[11],e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}var dt=Object.freeze({__proto__:null,aim:ef,axisRotate:jo,axisRotation:zo,cameraAim:tf,clone:Lu,copy:Bi,create:Du,determinant:ku,equals:ju,equalsApproximately:zu,fromMat3:Gu,fromQuat:Fu,frustum:Zu,getAxis:Yu,getScaling:Qu,getTranslation:$u,identity:Fo,inverse:Vo,invert:qu,lookAt:nf,mul:Hu,multiply:Lo,negate:Vu,ortho:Ju,perspective:Ku,rotate:df,rotateX:af,rotateY:cf,rotateZ:ff,rotation:hf,rotationX:of,rotationY:lf,rotationZ:uf,scale:mf,scaling:pf,setAxis:Xu,setDefaultType:Au,setTranslation:Wu,translate:sf,translation:rf,transpose:Nu});async function gf(e){const t=new rr;return await t.initialize(e),t}class rr{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=gr();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(t){if(this.canvas=t,this.device=await Ut(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=_t(this.device,Iu,Ru,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(t){if(t!==null)return new Promise((n,r)=>{if(t.addEventListener("error",r),"requestVideoFrameCallback"in t)t.requestVideoFrameCallback((i,s)=>{n()});else{const i=s=>{s.currentTime>0?n():requestAnimationFrame(()=>i(s))};i(t)}t.play().catch(r)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const t=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),n=8,r=8,i=64,s=n*this.numberOfObjects,o=r*this.numberOfObjects,a=i*this.numberOfObjects,l=Go(),f=l.vertexData.byteLength,c=l.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:f,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,l.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:l.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,l.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const u=[];{const M=new Float32Array(s/4);for(let B=0;B<this.numberOfObjects;B++){const S=B*(n/4);M.set([oe(-.9,.9),oe(-.9,.9)],S);const O={scale:oe(.2,.6)};u.push(O)}this.perInstanceOffsets=new Float32Array(M),this.device.queue.writeBuffer(this.staticBuffer,0,M)}const h=new Float32Array(o/4),p=new Float32Array(a/4);let d=0,m=0,x=0;const y=1e4,b=M=>{if(this.canvas===null||this.device===null||this.context===null)return;const B=M-d;m+=B,d=M;const S=performance.now(),O=60*Math.PI/180,I=this.canvas.width/this.canvas.height,L=dt.perspective(O,I,.1,2e3),q=[0,0,2],k=[0,1,0],N=[0,0,0],z=dt.lookAt(q,N,k),Y=dt.multiply(L,z),j=m/y*2*Math.PI,V=this.canvas.width/this.canvas.height*.5;u.forEach((Se,ge)=>{const Ne=ge*(r/4),fe=ge*(i/4);h.set([Se.scale,Se.scale],Ne);const an=this.perInstanceOffsets[2*ge+0],g=this.perInstanceOffsets[2*ge+1],v=dt.create();dt.copy(Y,v),dt.translate(v,[an,g,0],v),dt.rotateX(v,j,v),dt.rotateY(v,.2*Math.sin(j),v),dt.scale(v,[2*V,1*V,1],v),p.set(v,fe)});const be={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},ee=this.device.createCommandEncoder({label:"Render Quad Encoder"}),ne=ee.beginRenderPass(be);ne.setPipeline(this.simpleTexturePipeline),ne.setVertexBuffer(0,this.vertexBuffer),ne.setVertexBuffer(1,this.staticBuffer),ne.setVertexBuffer(2,this.changingBuffer),ne.setIndexBuffer(this.indexBuffer,"uint16");const xe=this.device.importExternalTexture({source:this.video}),Me=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:t},{binding:1,resource:xe},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,h),this.device.queue.writeBuffer(this.storageBuffer,0,p),ne.setBindGroup(0,Me),ne.drawIndexed(c,this.numberOfObjects),ne.end(),this.timestampQuerySet!=null&&(ee.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&ee.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const ye=ee.finish();this.device.queue.submit([ye]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const Se=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());x=Number(Se[1]-Se[0]),this.timestampQuerySet.resultBuffer.unmap()});const Be=performance.now()-S;if(this.infoElement&&this.device){const Se=`                FPS: ${(1e3/B).toFixed(1)}
                JS Time: ${Be.toFixed(1)} ms
                GPU Time: ${(x/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=Se}this.animationFrameId=requestAnimationFrame(b)};this.animationFrameId=requestAnimationFrame(b),this.resizeObserver=new ResizeObserver(M=>{for(const B of M){const S=B.contentBoxSize[0].inlineSize,O=B.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(S,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(O,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){await this.smallCleanup(),this.slider&&(this.slider=null),vr()}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const t=on();if(t===null)return;const n=document.createElement("label");n.textContent=`Number of Objects: ${this.numberOfObjects}`,n.htmlFor="numObjectsSlider",t.appendChild(n),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=rr.minObjects.toString(),this.slider.max=rr.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",t.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),n.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let r=!1;const i=async()=>{if(!r){r=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{r=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const vf=`// ============================== //\r
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
}`,bf=`// ============================== //\r
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
}`,xf=`// ============================== //\r
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
`,yf=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class In{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(t,n){this.bodyA=t,this.bodyB=n;for(let r=0;r<In.MAX_ROWS;++r){this.J.push(U(0,0,0));const i=xi();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let t=0;t<In.MAX_ROWS;++t)this.stiffness[t]=0,this.penalty[t]=0,this.lambda[t]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(t){console.warn("This method should not be called directly.")}computeDerivatives(t){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class Bf{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=U(0,0,0);inertial=U(0,0,0);id=-1;forces=[];constructor(t,n,r,i,s,o){this.width=t[0],this.height=t[1],this.density=r,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*We(t,t)/12,this.radius=Math.sqrt(We(t,t))*.5,this.color=n}getScale(){return Z(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return Z(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(t){this.staticBody||(this.velocity=t)}getRotationMatrix(){const t=Math.cos(this.position[2]),n=Math.sin(this.position[2]);return tr(t,n,-n,t)}setPosition(t){this.staticBody||(this.position=t)}setColor(t){this.color=t}isConstrainedTo(t){for(let n=0;n<this.forces.length;++n){const r=this.forces[n];if(r.bodyA===this&&r.bodyB===t||r.bodyB===this&&r.bodyA===t)return!0}return!1}}const Le=12,qe=8,Lt=4,wf=8,Sf=6,ms=256,Pf=16;class at{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(ms*(Le+qe)/4);numInstances=0;maxInstances=ms;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(t,n){this.canvas=t,this.gameManager=n}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await Ut(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(t=>{for(const n of t){const r=n.contentBoxSize[0].inlineSize,i=n.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(r,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(t){return this.addInstance(t.getPosition(),t.getScale(),t.getColor())}addInstance(t,n,r){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*Lt,r);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,t),this.updateInstanceScale(s,n),s}removeInstance(t){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const n=this.idToIndexMap.get(t);if(n===void 0)return;const r=this.numInstances-1;if(n!==r){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,r*Lt,this.staticBuffer,n*Lt,Lt),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,o=n*(Le+qe)/4,a=r*(Le+qe)/4;s[o+0]=s[a+0],s[o+1]=s[a+1],s[o+2]=s[a+2],s[o+3]=s[a+3];const l=this.indexToId[r];this.indexToId[n]=l,this.idToIndexMap.set(l,n)}this.idToIndexMap.delete(t),this.indexToId.pop(),this.numInstances--}updateInstanceScale(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Le+qe)/4+3]=n[0],this.changingCpuArray[r*(Le+qe)/4+4]=n[1])}updateInstancePosition(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Le+qe)/4+0]=n[0],this.changingCpuArray[r*(Le+qe)/4+1]=n[1],this.changingCpuArray[r*(Le+qe)/4+2]=n[2])}updateContacts(t){if(this.numContacts=Math.min(t.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let n=0;n<this.numContacts;++n)this.contactPositions[n*2+0]=t[n].pos[0],this.contactPositions[n*2+1]=t[n].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const t=this.context.getCurrentTexture().createView(),n={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:t,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},r=this.device.createCommandEncoder({label:"canvas render encoder"}),i=r.beginRenderPass(n);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(Le+qe);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(Sf,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!Jc(this.timestampQuerySet,r)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([r.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const t=this.maxInstances*Lt,n=this.maxInstances*(Le+qe),r=Go(),i=r.vertexData.byteLength,s=r.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,r.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,r.indexData);const o=du({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=Do(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:Pf,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=new Float32Array([at.xWorldSize,at.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,a.buffer,a.byteOffset,a.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const t=this.maxInstances*Lt,n=this.maxInstances*(Le+qe),r=this.device.createBuffer({label:"Extended static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,r,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(Le+qe)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=r,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=_t(this.device,vf,bf,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[t]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:wf,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:Lt,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:Le+qe,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:Le,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=_t(this.device,xf,yf,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const Mf=5e-4,Tf=.01,jt=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),Cf=e=>{const t=e.inEdge1;e.inEdge1=e.inEdge2,e.inEdge2=t;const n=e.outEdge1;e.outEdge1=e.outEdge2,e.outEdge2=n};function Sn(e){return{inEdge1:e.inEdge1,outEdge1:e.outEdge1,inEdge2:e.inEdge2,outEdge2:e.outEdge2,ID:e.ID}}function No(e){return e.inEdge1&255|(e.outEdge1&255)<<8|(e.inEdge2&255)<<16|(e.outEdge2&255)<<24}function gs(){return{details:jt(),pA:W(),pB:W(),n:W(),JacNormA:ce(),JacNormB:ce(),JacTangA:ce(),JacTangB:ce(),C0:W(),stick:!1}}const vs=(e,t,n,r,i)=>{let s=0;const o=We(n,t[0].v)-r,a=We(n,t[1].v)-r;if(o<=0&&(e[s++]={v:nr(t[0].v),cd:Sn(t[0].cd)}),a<=0&&(e[s++]={v:nr(t[1].v),cd:Sn(t[1].cd)}),o*a<0){const l=o/(o-a),f=Cc(W(),t[0].v,t[1].v,l);let c=Sn(o>0?t[0].cd:t[1].cd);o>0?(c.inEdge1=i,c.inEdge2=0):(c.outEdge1=i,c.outEdge2=0),c.ID=No(c),e[s++]={v:f,cd:c}}return s},Ln=(e,t,n,r,i)=>{const s=Hn(mn(),r),o=Oe(W(),i,s);pt(o,o,-1);const a=Z(Math.abs(o[0]),Math.abs(o[1]));a[0]>a[1]?o[0]>0?(e[0].v=Z(t[0],-t[1]),e[0].cd.inEdge2=3,e[0].cd.outEdge2=4,e[1].v=Z(t[0],t[1]),e[1].cd.inEdge2=4,e[1].cd.outEdge2=1):(e[0].v=Z(-t[0],t[1]),e[0].cd.inEdge2=1,e[0].cd.outEdge2=2,e[1].v=Z(-t[0],-t[1]),e[1].cd.inEdge2=2,e[1].cd.outEdge2=3):o[1]>0?(e[0].v=Z(t[0],t[1]),e[0].cd.inEdge2=4,e[0].cd.outEdge2=1,e[1].v=Z(-t[0],t[1]),e[1].cd.inEdge2=1,e[1].cd.outEdge2=2):(e[0].v=Z(-t[0],-t[1]),e[0].cd.inEdge2=2,e[0].cd.outEdge2=3,e[1].v=Z(t[0],-t[1]),e[1].cd.inEdge2=3,e[1].cd.outEdge2=4),e[0].v=gt(W(),n,Oe(W(),e[0].v,r)),e[1].v=gt(W(),n,Oe(W(),e[1].v,r))};class wi extends In{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(t,n){super(t,n);for(let r=0;r<In.MAX_ROWS;++r)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const t=this.penalty.slice(),n=this.lambda.slice(),r=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=wi.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const o=this.contacts[s].details.ID,a=this.oldContacts.findIndex(l=>l.details.ID===o);a!==-1&&(this.penalty[s*2+0]=t[a*2+0],this.penalty[s*2+1]=t[a*2+1],this.lambda[s*2+0]=n[a*2+0],this.lambda[s*2+1]=n[a*2+1],this.contacts[s].stick=r[a],this.contacts[s].stick&&(this.contacts[s].pA=nr(this.oldContacts[a].pA),this.contacts[s].pB=nr(this.oldContacts[a].pB)))}for(let s=0;s<this.contacts.length;++s){const o=this.contacts[s].n,a=Z(o[1],-o[0]),l=tr(o[0],o[1],a[0],a[1]),f=Oe(W(),this.contacts[s].pA,Ht(this.bodyA.getPosition()[2])),c=Oe(W(),this.contacts[s].pB,Ht(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=U(l[0],l[2],Vn(f,o)),this.contacts[s].JacNormB=U(-l[0],-l[2],-Vn(c,o)),this.contacts[s].JacTangA=U(l[1],l[3],Vn(f,a)),this.contacts[s].JacTangB=U(-l[1],-l[3],-Vn(c,a));const u=it(W(),gt(W(),this.bodyA.getPos2(),f),gt(W(),this.bodyB.getPos2(),c));this.contacts[s].C0=Oe(this.contacts[s].C0,u,l),this.contacts[s].C0=gt(this.contacts[s].C0,this.contacts[s].C0,Z(Mf,0))}return this.contacts.length>0}computeConstraints(t){for(let n=0;n<this.contacts.length;++n){const r=Xt(ce(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=Xt(ce(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=pt(W(),this.contacts[n].C0,1-t);this.C[n*2+0]=s[0]+Fn(this.contacts[n].JacNormA,r)+Fn(this.contacts[n].JacNormB,i),this.C[n*2+1]=s[1]+Fn(this.contacts[n].JacTangA,r)+Fn(this.contacts[n].JacTangB,i);const o=Math.abs(this.lambda[n*2+0])*this.friction;this.fmax[n*2+1]=o,this.fmin[n*2+1]=-o,this.contacts[n].stick=Math.abs(this.lambda[n*2+1])<o&&Math.abs(this.contacts[n].C0[1])<Tf}}computeDerivatives(t){for(let n=0;n<this.contacts.length;++n)t===this.bodyA?(this.J[n*2+0]=this.contacts[n].JacNormA,this.J[n*2+1]=this.contacts[n].JacTangA):(this.J[n*2+0]=this.contacts[n].JacNormB,this.J[n*2+1]=this.contacts[n].JacTangB)}static collide(t,n,r){r.length=0;let i=W();const s=Ht(t.getPosition()[2]),o=Ht(n.getPosition()[2]),a=Hn(mn(),s),l=Hn(mn(),o),f=pt(W(),t.getScale(),.5),c=pt(W(),n.getScale(),.5),u=t.getPos2(),h=n.getPos2(),p=t.getRotationMatrix(),d=n.getRotationMatrix(),m=it(W(),h,u),x=Oe(W(),m,a),y=Oe(W(),m,l),b=Z(Math.abs(x[0]),Math.abs(x[1])),M=Z(Math.abs(y[0]),Math.abs(y[1])),B=Bc(mn(),a,d),S=tr(Math.abs(B[0]),Math.abs(B[1]),Math.abs(B[2]),Math.abs(B[3])),O=Hn(mn(),S),I=it(W(),b,gt(W(),f,Oe(W(),c,S))),w=it(W(),M,gt(W(),c,Oe(W(),f,O)));if(I[0]>0||I[1]>0||w[0]>0||w[1]>0)return 0;let R,L;R=1,L=I[0],x[0]>0?i=Z(p[0],p[1]):i=Z(-p[0],-p[1]);const q=.95,k=.01;I[1]>q*L+k*f[1]&&(R=2,L=I[1],x[1]>0?i=Z(p[2],p[3]):i=Z(-p[2],-p[3])),w[0]>q*L+k*c[0]&&(R=3,L=w[0],y[0]>0?i=Z(d[0],d[1]):i=Z(-d[0],-d[1])),w[1]>q*L+k*c[1]&&(R=4,L=w[1],y[1]>0?i=Z(d[2],d[3]):i=Z(-d[2],-d[3]));let N,z;const K=[{cd:jt(),v:W()},{cd:jt(),v:W()}];let Y,j,V,ue=0,be=0,ee;switch(R){case 1:N=i,Y=We(u,N)+f[0],z=Z(p[2],p[3]),ee=We(u,z),j=-ee+f[1],V=ee+f[1],ue=3,be=1,Ln(K,c,h,d,N);break;case 2:N=i,Y=We(u,N)+f[1],z=Z(p[0],p[1]),ee=We(u,z),j=-ee+f[0],V=ee+f[0],ue=2,be=4,Ln(K,c,h,d,N);break;case 3:N=pt(W(),i,-1),Y=We(h,N)+c[0],z=Z(d[2],d[3]),ee=We(h,z),j=-ee+c[1],V=ee+c[1],ue=3,be=1,Ln(K,f,u,p,N);break;case 4:N=pt(W(),i,-1),Y=We(h,N)+c[1],z=Z(d[0],d[1]),ee=We(h,z),j=-ee+c[0],V=ee+c[0],ue=2,be=4,Ln(K,f,u,p,N);break}const ne=[{cd:jt(),v:W()},{cd:jt(),v:W()}],xe=[{cd:jt(),v:W()},{cd:jt(),v:W()}];let Me;if(Me=vs(ne,K,pt(W(),z,-1),j,ue),Me<2||(Me=vs(xe,ne,z,V,be),Me<2))return 0;r.push(gs(),gs());let ye=0;for(let Be=0;Be<2;++Be){const Se=We(N,xe[Be].v)-Y;if(Se<=0){const ge=r[ye];ge.n=pt(W(),i,-1);const Ne=R===3||R===4,fe=it(W(),xe[Be].v,pt(W(),N,Se));if(!Ne)ge.pA=Oe(W(),it(W(),fe,u),a),ge.pB=Oe(W(),it(W(),xe[Be].v,h),l),ge.details=Sn(xe[Be].cd);else{ge.pA=Oe(W(),it(W(),xe[Be].v,u),a),ge.pB=Oe(W(),it(W(),fe,h),l);let an=Sn(xe[Be].cd);Cf(an),ge.details=an}if(ge.details.ID=No(ge.details),++ye,ye===2)break}}return r.length=ye,ye}getContactRenders(){const t=[],n=Ht(this.bodyA.getPosition()[2]),r=Ht(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const a=gt(W(),i,Oe(W(),this.contacts[o].pA,n));t.push({pos:a});const l=gt(W(),s,Oe(W(),this.contacts[o].pB,r));t.push({pos:l})}return t}getRows(){return this.contacts.length*2}}const zn=1,dn=1e9;class Of{dt=0;gravity=Z(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=Z(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(t){Math.abs(t-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${t}. This may cause instability.`),this.contactsToRender=[];for(let r=0;r<this.bodies.length;++r)for(let i=r+1;i<this.bodies.length;++i){const s=this.bodies[r],o=this.bodies[i],a=it(W(),s.getPos2(),o.getPos2()),l=s.getRadius()+o.getRadius();if(Tc(a)<=l*l&&!s.isConstrainedTo(o)){let f=new wi(s,o);this.forces.push(f),s.forces.push(f),o.forces.push(f)}}for(let r=0;r<this.forces.length;++r){const i=this.forces[r];if(!i.initialize()){this.forces.splice(r,1),--r;const o=i.bodyA.forces.indexOf(i);o!==-1&&i.bodyA.forces.splice(o,1);const a=i.bodyB.forces.indexOf(i);a!==-1&&i.bodyB.forces.splice(a,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let o=0;o<i.getRows();++o){if(this.postStabilization){let a=i.penalty[o]*this.gamma;a<zn&&(a=zn),a>dn&&(a=dn),i.penalty[o]=a}else{i.lambda[o]=i.lambda[o]*this.alpha*this.gamma;let a=i.penalty[o]*this.gamma;a<zn&&(a=zn),a>dn&&(a=dn),i.penalty[o]=a}i.penalty[o]=Math.min(i.penalty[o],i.stiffness[o])}}for(let r=0;r<this.bodies.length;++r){const i=this.bodies[r];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(U(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=$t(ce(),i.getPosition(),St(ce(),i.getVelocity(),this.dt)),i.getMass()!==0){let u=St(ce(),U(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=$t(i.inertial,i.inertial,u)}let l=St(ce(),Xt(ce(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);l<0&&(l=0),l>1&&(l=1),i.lastPosition=wc(i.getPosition());const f=St(ce(),i.getVelocity(),this.dt),c=St(ce(),U(this.gravity[0],this.gravity[1],0),l*this.dt*this.dt);i.setPosition($t(ce(),i.getPosition(),$t(ce(),f,c)))}const n=this.iterations+(this.postStabilization?1:0);for(let r=0;r<n;++r){let i=this.alpha;this.postStabilization&&(i=r<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const o=Zr(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),a=ls(xi(),o,1/(this.dt*this.dt)),l=ti(ce(),Xt(ce(),s.getPosition(),s.inertial),a);for(const c of s.forces){c.computeConstraints(i),c.computeDerivatives(s);for(let u=0;u<c.getRows();++u){let h=c.stiffness[u]===1/0?c.lambda[u]:0,p=c.penalty[u]*c.C[u]+h;p<c.fmin[u]&&(p=c.fmin[u]),p>c.fmax[u]&&(p=c.fmax[u]);const d=Zr(Ar(U(c.H[u][0],c.H[u][3],c.H[u][6])),0,0,0,Ar(U(c.H[u][1],c.H[u][4],c.H[u][7])),0,0,0,Ar(U(c.H[u][2],c.H[u][5],c.H[u][8])));ls(d,d,Math.abs(p)),$t(l,l,St(ce(),c.J[u],p));const m=Oc(c.J[u],St(ce(),c.J[u],c.penalty[u]));as(a,a,m),as(a,a,d)}}const f=Ec(a,l);s.setPosition(Xt(ce(),s.getPosition(),f))}if(r<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let o=0;o<s.getRows();++o){let a=s.stiffness[o]===1/0?s.lambda[o]:0;s.lambda[o]=a+s.penalty[o]*s.C[o],s.lambda[o]<s.fmin[o]&&(s.lambda[o]=s.fmin[o]),s.lambda[o]>s.fmax[o]&&(s.lambda[o]=s.fmax[o]),Math.abs(s.lambda[o])>=s.fracture[o]&&s.disable(),s.lambda[o]>s.fmin[o]&&s.lambda[o]<s.fmax[o]&&(s.penalty[o]=Math.min(s.penalty[o]+this.beta*Math.abs(s.C[o]),Math.min(s.stiffness[o],dn)))}}if(r==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const o=Xt(ce(),s.getPosition(),s.lastPosition);St(o,o,1/this.dt),s.setVelocity(o)}}}}addRigidBox(t){this.bodies.indexOf(t)===-1&&this.bodies.push(t)}removeRigidBox(t){const n=this.bodies.indexOf(t);n!==-1&&this.bodies.splice(n,1)}}class Ef{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(t){this.canvas=t,this.gameRenderer=new at(this.canvas,this),this.solver=new Of,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(t){this.logging&&console.log(`[GameManager] ${t}`)}logWarn(t){this.logging&&console.warn(`[GameManager] ${t}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const t=U(at.xWorldSize*.5,8,0),n=Z(at.xWorldSize-20,10);this.addRigidBox(t,n,U(0,0,0),new Uint8Array([200,200,200,255]),!0);const r=1/60;let i=0;this.lastFrameTime=performance.now();const s=o=>{if(!this.running)return;const a=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,i+=a;i>=r;)this.solver.step(r),i-=r;for(let l=0;l<this.solver.bodies.length;++l){const f=this.solver.bodies[l],c=f.getPosition(),u=new Float32Array([c[0],c[1],c[2]]);this.gameRenderer.updateInstancePosition(f.id,u)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s)};this.rafID=requestAnimationFrame(s)}addRigidBox(t=_c(0,0,at.xWorldSize,at.yWorldSize),n=Z(oe(2,10),oe(2,10)),r=U(0,0,0),i=Ic(),s=!1){const o=new Bf(n,i,s?0:1,1,t,r);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",t=>{if(!this.canvas)return;const n=this.canvas.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top,s=r/this.canvas.width*at.xWorldSize,o=(1-i/this.canvas.height)*at.yWorldSize,a=U(s,o,oe(0,Math.PI*2));this.addRigidBox(a)})}}async function _f(e){const t=new Ef(e);return await t.initialize(),t}const If=`// ============================== //\r
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
}`,Rf=`// ============================== //\r
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
}`,Uf=`struct Uniforms {\r
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
}`,Af=`struct Uniforms {\r
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
}`;function Si(e){const t={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:e,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,modelMatrix:bs(),viewMatrix:bs(),projectionMatrix:Ho(Math.PI/4,e,.1,1e3)};return ko(t),t}function Pi(e,t,n,r){e.position[0]=t,e.position[1]=n,e.position[2]=r,Oi(e)}function Mi(e,t){e.aspect=t,qo(e)}function Ti(e,t,n){e.near=t,e.far=n,qo(e)}function Ci(e,t,n,r){e.position[0]+=e.forward[0]*t+e.right[0]*n+e.up[0]*r,e.position[1]+=e.forward[1]*t+e.right[1]*n+e.up[1]*r,e.position[2]+=e.forward[2]*t+e.right[2]*n+e.up[2]*r,Oi(e)}function xr(e,t,n){e.yaw+=t,e.pitch+=n;const r=Math.PI/2-.01;for(e.pitch=Math.max(-r,Math.min(r,e.pitch));e.yaw>Math.PI;)e.yaw-=2*Math.PI;for(;e.yaw<-Math.PI;)e.yaw+=2*Math.PI;ko(e)}function Ge(e,t,n){xr(e,t*e.rotateSpeed,n*e.rotateSpeed)}function ko(e){e.forward[0]=Math.cos(e.pitch)*Math.cos(e.yaw),e.forward[1]=Math.sin(e.pitch),e.forward[2]=Math.cos(e.pitch)*Math.sin(e.yaw),tn(e.forward);const t=ir(e.forward,e.worldUp);tn(t),e.right[0]=t[0],e.right[1]=t[1],e.right[2]=t[2];const n=ir(e.right,e.forward);tn(n),e.up[0]=n[0],e.up[1]=n[1],e.up[2]=n[2],Oi(e)}function Oi(e){const t=new Float32Array([e.position[0]+e.forward[0],e.position[1]+e.forward[1],e.position[2]+e.forward[2]]);e.viewMatrix=Df(e.position,t,e.up)}function qo(e){e.projectionMatrix=Ho(e.fovY,e.aspect,e.near,e.far)}function bs(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Ho(e,t,n,r){const i=1/Math.tan(e*.5),s=1/(n-r);return new Float32Array([i/t,0,0,0,0,i,0,0,0,0,r*s,-1,0,0,n*r*s,0])}function Df(e,t,n){const r=new Float32Array([e[0]-t[0],e[1]-t[1],e[2]-t[2]]);tn(r);const i=ir(n,r);tn(i);const s=ir(r,i);return new Float32Array([i[0],s[0],r[0],0,i[1],s[1],r[1],0,i[2],s[2],r[2],0,-Pn(i,e),-Pn(s,e),-Pn(r,e),1])}function tn(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);t>1e-5&&(e[0]/=t,e[1]/=t,e[2]/=t)}function ir(e,t){return new Float32Array([e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]])}function Pn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ei(e){const t=Math.tan(e.fovY/2),n=e.aspect*t,r=t;return new Float32Array([e.right[0]*n,e.right[1]*n,e.right[2]*n,0,e.up[0]*r,e.up[1]*r,e.up[2]*r,0,e.forward[0],e.forward[1],e.forward[2],0,0,0,0,1])}function Gf(e,t,n){const r=Ei(e),i=new Float32Array([r[0]*t+r[4]*n+r[8]*1,r[1]*t+r[5]*n+r[9]*1,r[2]*t+r[6]*n+r[10]*1]);return tn(i),i}function Ff(e,t,n,r){const i=new Float32Array([n[0]-e[0],n[1]-e[1],n[2]-e[2]]),s=Pn(i,t);if(s<0)return-1;const o=Pn(i,i)-s*s,a=r*r;if(o>a)return-1;const l=Math.sqrt(a-o),f=s-l;return f<0?-1:f}async function Vf(e){const t=new kf;return await t.initialize(e),t}const xs=264,ys=128,Lf=0,zf=20,jf=0,Nf=1e3;let kf=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=gr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Si(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){Pi(this.camera,278,500,-700),xr(this.camera,0,-.3),Ti(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const t=on();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((s,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=s,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),t.appendChild(document.createElement("br")),t.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=Lf.toString(),this.intensitySlider.max=zf.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const r=document.createElement("label");r.htmlFor="intensitySlider",r.textContent=" Light Intensity",t.appendChild(document.createElement("br")),t.appendChild(this.intensitySlider),t.appendChild(r),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=jf.toString(),this.numBouncesSlider.max=Nf.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const i=document.createElement("label");i.htmlFor="numBouncesSlider",i.textContent=" Number of Bounces",t.appendChild(document.createElement("br")),t.appendChild(this.numBouncesSlider),t.appendChild(i)}async initialize(t){if(this.canvas=t,this.device=await Ut(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=_t(this.device,If,Rf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=_t(this.device,Uf,Af,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=mu();this.additionalInfo=t.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,t.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:t.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,t.indexData),this.normalObjects.numIndices=t.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,t.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:t.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,t.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,t.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:xs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,t.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,t.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,t.colorData);var n=new Uint32Array(t.indexData.length);for(let r=0;r<t.indexData.length;r++)n[r]=t.indexData[r];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,n),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:t.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,t.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:ys,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ge(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&Ci(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&Ge(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ge(this.camera,1,0),this.keysPressed.has("arrowup")&&Ge(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ge(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(ys),n=new Float32Array(t),r=new Uint32Array(t);n.set(Ei(this.camera),0),n.set(this.camera.position,16),n.set(this.light.position,20),n.set(this.light.color,24),r[28]=this.rayTracingMode,n[29]=this.light.intensity,r[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new Float32Array(xs/4);let n=0;t.set(this.camera.modelMatrix,n),n+=16,t.set(this.camera.viewMatrix,n),n+=16,t.set(this.camera.projectionMatrix,n),n+=16,t.set(this.light.position,n),n+=4,t.set(this.light.color,n),n+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){const t=performance.now()*.001,n=200,r=250,i=276,s=278.5,o=450;if(this.light.position[0]=i+n*Math.cos(t),this.light.position[1]=o,this.light.position[2]=s+r*Math.sin(t),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const a=this.additionalInfo.cubeCenter,f=Ro(0,t,0),c=this.additionalInfo.cubeVertexStart,u=this.additionalInfo.cubeVertexCount,h=this.additionalInfo.cubeVertexInfo,p=new Float32Array(u*3),d=this.additionalInfo.cubeNormalsInfo,m=new Float32Array(u*3);for(let x=0;x<u;x++){const y=x*3,b=h[y]-a[0],M=h[y+1]-a[1],B=h[y+2]-a[2];p[y]=f[0]*b+f[1]*M+f[2]*B+a[0],p[y+1]=f[3]*b+f[4]*M+f[5]*B+a[1],p[y+2]=f[6]*b+f[7]*M+f[8]*B+a[2];const S=d[y],O=d[y+1],I=d[y+2];m[y]=f[0]*S+f[1]*O+f[2]*I,m[y+1]=f[3]*S+f[4]*O+f[5]*I,m[y+2]=f[6]*S+f[7]*O+f[8]*I}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,c*3*4,p),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,c*3*4,m)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,c*3*4,p),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,c*3*4,m))}}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);this.useRaytracing?(u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.draw(6)):(u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup),u.setVertexBuffer(0,this.normalObjects.positionBuffer),u.setVertexBuffer(1,this.normalObjects.normalBuffer),u.setVertexBuffer(2,this.normalObjects.uvBuffer),u.setVertexBuffer(3,this.normalObjects.colorBuffer),u.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),u.drawIndexed(this.normalObjects.numIndices)),u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const p=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${p.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),Mi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),vr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const qf=`struct Uniforms {\r
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
}`,Hf=`struct Uniforms {\r
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
}`,Bs=264;async function Wf(e){const t=new $f;return await t.initialize(e),t}class $f{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=gr();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Si(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,Pi(this.camera,300,200,300),xr(this.camera,9*Math.PI/12,-Math.PI/6),Ti(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(t){if(this.canvas=t,this.device=await Ut(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=_t(this.device,qf,Hf,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeUtils(){const t=on();if(!t)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",t.appendChild(this.wireFrameCheckbox),t.appendChild(this.wireFrameLabel),t.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(r=>{const i=document.createElement("option");i.value=r,i.text=r.charAt(0).toUpperCase()+r.slice(1),this.cullModeSelect.appendChild(i)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),t.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",t.appendChild(document.createElement("br")),t.appendChild(this.useSortingCheckbox),t.appendChild(this.useSortingLabel)}initializeScene(){const t=Gr({translation:U(0,0,-100),rotation:U(0,0,0),scale:U(200,200,1)},[.8,.8,.7]);t.additionalInfo={order:0,numVertices:t.vertexData.length/3},this.facesTopologyInformation.push(t);const n=Gr({translation:U(-100,0,0),rotation:U(0,-Math.PI/2,0),scale:U(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:1,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const r=Gr({translation:U(0,-100,0),rotation:U(Math.PI/2,0,0),scale:U(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:2,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const i=25,s=32;let o=3,a=0;const l=-100+i;for(let h=-1;h<=1;h++)for(let p=-1;p<=1;p++){const d=[h*i*2,l,p*i*2],m=Fr(d,i,[Math.random(),Math.random(),Math.random()],s,s);m.additionalInfo={order:o++,numVertices:m.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(m),this.currentSphereOrders.push(m.additionalInfo.id)}const f=l+i*Math.sqrt(2);for(let h=0;h<=1;h++)for(let p=0;p<=1;p++){const d=[(h-.5)*i*2,f,(p-.5)*i*2],m=Fr(d,i,[Math.random(),Math.random(),Math.random()],s,s);m.additionalInfo={order:o++,numVertices:m.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(m),this.currentSphereOrders.push(m.additionalInfo.id)}const c=[0,f+i*Math.sqrt(2),0],u=Fr(c,i,[Math.random(),Math.random(),Math.random()],s,s);u.additionalInfo={order:o++,numVertices:u.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(u),this.currentSphereOrders.push(u.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const t=this.device.queue;this.initializeScene();const n=[],r=[],i=[],s=[],o=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const m=this.facesTopologyInformation[d];m.additionalInfo&&(n.push(m.vertexData),r.push(m.indexData),i.push(m.normalData),s.push(m.colorData),o.push(m.uvData))}const a=this.currentSphereOrders.slice();for(let d=a.length-1;d>0;d--){const m=Math.floor(Math.random()*(d+1));[a[d],a[m]]=[a[m],a[d]]}for(let d=0;d<this.spheresTopologyInformation.length;d++){const m=this.spheresTopologyInformation[a[d]];m.additionalInfo&&(n.push(m.vertexData),r.push(m.indexData),i.push(m.normalData),s.push(m.colorData),o.push(m.uvData))}const l=n.map(d=>d.length/3),f=Pt(n),c=us(r,l),u=Pt(i),h=Pt(s),p=Pt(o);this.totalIndices=c.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:Bs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.vertexBuffer,0,f),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:u.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.normalBuffer,0,u),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:h.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.colorBuffer,0,h),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:p.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.uvBuffer,0,p),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:c.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.writeBuffer(this.indexBuffer,0,c),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ge(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&(Ci(this.camera,-r,t,n),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&Ge(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ge(this.camera,1,0),this.keysPressed.has("arrowup")&&Ge(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ge(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const t=new ArrayBuffer(Bs),n=new Float32Array(t);n.set(this.camera.modelMatrix,0),n.set(this.camera.viewMatrix,16),n.set(this.camera.projectionMatrix,32),n.set(this.light.position,48),n.set(this.light.color,52),n[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,t)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const t=this.camera.position,n=[];for(let d=0;d<this.spheresTopologyInformation.length;d++){const x=this.spheresTopologyInformation[d].transform.translation,y=x[0]-t[0],b=x[1]-t[1],M=x[2]-t[2],B=Math.sqrt(y*y+b*b+M*M),S=this.spheresTopologyInformation[d].additionalInfo.id;n.push({id:S,distance:B})}n.sort((d,m)=>m.distance-d.distance),this.currentSphereOrders=n.map(d=>d.id);const r=[],i=[],s=[],o=[],a=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const m=this.facesTopologyInformation[d];m.additionalInfo&&(r.push(m.vertexData),i.push(m.indexData),s.push(m.normalData),o.push(m.colorData),a.push(m.uvData))}for(let d=0;d<this.currentSphereOrders.length;d++){const m=this.currentSphereOrders[d],x=this.spheresTopologyInformation.find(y=>y.additionalInfo.id===m);x&&(r.push(x.vertexData),i.push(x.indexData),s.push(x.normalData),o.push(x.colorData),a.push(x.uvData))}const l=r.map(d=>d.length/3),f=Pt(r),c=us(i,l),u=Pt(s),h=Pt(o),p=Pt(a);this.device.queue.writeBuffer(this.vertexBuffer,0,f),this.device.queue.writeBuffer(this.indexBuffer,0,c),this.device.queue.writeBuffer(this.normalBuffer,0,u),this.device.queue.writeBuffer(this.colorBuffer,0,h),this.device.queue.writeBuffer(this.uvBuffer,0,p)}startMainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const a=this.context.getCurrentTexture().createView(),l={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);u.setPipeline(this.renderPipeline),u.setBindGroup(0,this.bindGroup),u.setVertexBuffer(0,this.vertexBuffer),u.setVertexBuffer(1,this.normalBuffer),u.setVertexBuffer(2,this.uvBuffer),u.setVertexBuffer(3,this.colorBuffer),u.setIndexBuffer(this.indexBuffer,"uint16"),u.drawIndexed(this.totalIndices,1,0,0,0),u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const p=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${p.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),Mi(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),vr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const Yf=`// ============================== //\r
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
}`,Xf=`// ============================== //\r
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
}`,Qf=`struct SpotLight\r
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
}\r
\r
@vertex\r
fn vsBVH(@location(0) position: vec3f) -> VertexOutput {\r
    var output: VertexOutput;\r
    output.pos = uniforms.projMat * uniforms.viewMat * uniforms.modelMat * vec4f(position, 1.0);\r
    output.position = position;\r
    output.normal = vec3f(0.0);\r
    output.uv = vec2f(0.0);\r
    return output;\r
}`,Kf=`    struct Material {\r
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
    @fragment\r
    fn fsBVH(input: VertexOutput) -> @location(0) vec4f {\r
        return vec4f(0.0, 1.0, 0.0, 1.0);\r
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
    }`;var Ue=(e=>(e[e.Albedo=0]="Albedo",e[e.Metalness=1]="Metalness",e[e.Roughness=2]="Roughness",e[e.Normal=3]="Normal",e))(Ue||{});function Jf(e){return new Promise((t,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=i=>n(i),r.src=e})}function Zf(e,t,n="texture"){if(t.width<=0||t.height<=0)return console.warn(`Image has invalid dimensions (${t.width}x${t.height}). Using placeholder texture instead.`),Yt(e);const r=e.createTexture({label:n,size:{width:t.width,height:t.height,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return e.queue.copyExternalImageToTexture({source:t},{texture:r},[t.width,t.height]),r}function eh(e,t,n){const r=document.createElement("canvas");r.width=t,r.height=n;const i=r.getContext("2d");if(!i)return console.error("Failed to get 2D context for image resizing."),e;i.drawImage(e,0,0,t,n);const s=new Image;return s.src=r.toDataURL(),s}function Yt(e,t=256,n=32){const r=document.createElement("canvas");r.width=t,r.height=t;const i=r.getContext("2d"),s=t/n;for(let a=0;a<n;a++)for(let l=0;l<n;l++)i.fillStyle=(l+a)%2===0?"#FF00FF":"#000000",i.fillRect(l*s,a*s,s,s);const o=e.createTexture({label:"placeholder-texture",size:[t,t],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return e.queue.copyExternalImageToTexture({source:r},{texture:o},[t,t]),o}function ws(e=256,t=32){const n=document.createElement("canvas");n.width=e,n.height=e;const r=n.getContext("2d"),i=e/t;for(let s=0;s<t;s++)for(let o=0;o<t;o++)r.fillStyle=(o+s)%2===0?"#FF00FF":"#000000",r.fillRect(o*i,s*i,i,i);return n}const th="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg";async function nh(e){const t=new rh;return await t.initialize(e),t}const Ss=464,Ps=288;class rh{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=gr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Si(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;sphereResolution=8;spheresInfo;activeContextMenu=null;showBVH=!1;bvhDepth=1/0;constructor(){Pi(this.camera,278,500,-700),xr(this.camera,0,-.3),Ti(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const t={position:U(500,500,0),intensity:1e3,direction:U(-.5,-.9,1),coneAngle:Math.PI/6,color:U(.85,.1,.1),enabled:!0};this.lights.push(t);const n={position:U(50,500,0),intensity:1e3,direction:U(.5,-.9,1),coneAngle:Math.PI/6,color:U(.1,.85,.1),enabled:!0};this.lights.push(n);const r={position:U(275,255,0),intensity:1500,direction:U(0,0,1),coneAngle:Math.PI/6,color:U(.9,.9,.9),enabled:!0};this.lights.push(r)}initializeUtils(){const t=on();t&&(cs("Use Ray Tracing",this.useRaytracing,t,n=>{this.useRaytracing=n}),t.appendChild(document.createElement("br")),hn("Sphere Resolution",this.sphereResolution,8,64,1,t,n=>{this.sphereResolution=n,this.startRendering()}),this.lights.forEach((n,r)=>{const i=s=>{s.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const o={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Gc(o,this.lights[r],`Edit Light ${r+1}`,a=>{this.lights[r]=a},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};t.appendChild(document.createElement("br")),Ac(`Edit Light ${r+1}`,t,i)}),t.appendChild(document.createElement("br")),hn("Constant (ac)",this.a_c,0,2,.01,t,n=>{this.a_c=n}),t.appendChild(document.createElement("br")),hn("Linear (al)",this.a_l,0,.5,.001,t,n=>{this.a_l=n}),t.appendChild(document.createElement("br")),hn("Quadratic (aq)",this.a_q,0,.1,1e-4,t,n=>{this.a_q=n}),t.appendChild(document.createElement("br")),cs("Show BVH",this.showBVH,t,n=>{this.showBVH=n}),t.appendChild(document.createElement("br")),hn("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,t,n=>{this.bvhDepth=n===32?1/0:n,this.rebuildBVHBuffer()}))}async initialize(t){if(this.canvas=t,this.device=await Ut(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=_t(this.device,Yf,Xf,"Ray Trace Shader Module"),this.normalObjects.shaderModule=_t(this.device,Qf,Kf,"Normal Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.normalObjects.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.normalObjects.bvhDrawPipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=Do(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}initializeBuffers(){if(this.device===null)return;const t=Yt(this.device),n=this.spheresInfo?.sphereMaterials||[],r=gu(n,this.sphereResolution);this.normalObjects.sceneInformation=r,this.spheresInfo=r.additionalInfo;const i=r.meshes.length;for(let w of r.meshes)w.ComputeBVH();this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[];for(let w=0;w<i;w++){this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+w,size:Jr*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const R=r.meshes[w].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[w],0,R),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+w,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[w]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:r.meshes[w].Material.albedoGPUTexture?r.meshes[w].Material.albedoGPUTexture.createView():t.createView()},{binding:3,resource:r.meshes[w].Material.metalnessGPUTexture?r.meshes[w].Material.metalnessGPUTexture.createView():t.createView()},{binding:4,resource:r.meshes[w].Material.roughnessGPUTexture?r.meshes[w].Material.roughnessGPUTexture.createView():t.createView()},{binding:5,resource:r.meshes[w].Material.normalGPUTexture?r.meshes[w].Material.normalGPUTexture.createView():t.createView()}]}));const L=r.meshes[w].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+w,size:L.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[w],0,L);const q=r.meshes[w].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+w,size:q.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[w],0,q);const k=r.meshes[w].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+w,size:k.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[w],0,k);const N=r.meshes[w].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+w,size:N.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[w],0,N)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:Ss,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=this.getBVHGeometry(1/0);this.normalObjects.bvhLineGeometryBuffer=this.device.createBuffer({label:"BVH Line Geometry Buffer",size:s.length*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffer,0,s);const o=[],a=[],l=[],f=[],c=[];let u=0;for(let w=0;w<i;w++){let R=r.meshes[w];o.push(...R.getVertexData()),a.push(...R.getNormalData()),l.push(...R.getUVData());for(let L of R.getIndexData32())f.push(L+u);u+=R.getNumVertices();for(let L=0;L<R.getNumTriangles();L++)c.push(w)}const h=new Float32Array(o),p=new Float32Array(a),d=new Float32Array(l),m=new Uint32Array(f),x=new Uint32Array(c);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:Ps,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,h),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:p.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,p),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,d),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:m.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,m),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:x.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,x),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const y=r.meshes.map(w=>w.Material),b=yc(y);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:b.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,b);const M=4,B=3,S=256,O=256;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[S,O,M*B],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const I=ws(256,32);for(let w=0;w<B;w++){const R=this.spheresInfo?.sphereMaterials[w].albedoImage?this.spheresInfo.sphereMaterials[w].albedoImage:I,L=this.spheresInfo?.sphereMaterials[w].metalnessImage?this.spheresInfo.sphereMaterials[w].metalnessImage:I,q=this.spheresInfo?.sphereMaterials[w].roughnessImage?this.spheresInfo.sphereMaterials[w].roughnessImage:I,k=this.spheresInfo?.sphereMaterials[w].normalImage?this.spheresInfo.sphereMaterials[w].normalImage:I;this.device.queue.copyExternalImageToTexture({source:R},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*M]},[S,O]),this.device.queue.copyExternalImageToTexture({source:L},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*M+1]},[S,O]),this.device.queue.copyExternalImageToTexture({source:q},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*M+2]},[S,O]),this.device.queue.copyExternalImageToTexture({source:k},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*M+3]},[S,O])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=t=>{if(this.isMouseDown=!1,t.target!==this.canvas)return;if(this.activeContextMenu!==null){const r=this.activeContextMenu.getBoundingClientRect();if(t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom)return}let n=this.rayCastOnSpheres(t.clientX,t.clientY);n!==-1&&this.spawnMaterialContextMenu(n,t.clientX,t.clientY)};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;Ge(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&Ci(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&Ge(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ge(this.camera,1,0),this.keysPressed.has("arrowup")&&Ge(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ge(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Ue.Albedo,th),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Ue.Albedo,"textures/herringbone_brick_03_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Ue.Albedo,"textures/oak_veneer_01_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Ue.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Ue.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Ue.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Ue.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Ue.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Ue.Roughness,"textures/roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(Ps),n=new Float32Array(t),r=new Uint32Array(t);n.set(Ei(this.camera),0),n.set(this.camera.position,16),r[19]=0,n[20]=this.a_c,n[21]=this.a_l,n[22]=this.a_q,n[23]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],o=24+i*12;n.set(s.position,o),n[o+3]=s.intensity,n.set(s.direction,o+4),n[o+7]=s.coneAngle,n.set(s.color,o+8),n[o+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new ArrayBuffer(Ss),n=new Float32Array(t);n.set(this.camera.modelMatrix,0),n.set(this.camera.viewMatrix,16),n.set(this.camera.projectionMatrix,32),n.set(this.camera.position,48),n[52]=this.a_c,n[53]=this.a_l,n[54]=this.a_q,n[55]=0;for(let r=0;r<3&&!(r>=this.lights.length);r++){const i=this.lights[r],s=56+r*12;n.set(i.position,s),n[s+3]=i.intensity,n.set(i.direction,s+4),n[s+7]=i.coneAngle,n.set(i.color,s+8),n[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=c.beginRenderPass(f);if(this.useRaytracing)u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.setBindGroup(1,this.rayTracerObjects.materialBindGroup),u.draw(6);else{u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.sceneInformation.meshes.length;d++)u.setBindGroup(1,this.normalObjects.materialBindGroups[d]),u.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),u.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),u.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),u.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),u.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0);this.showBVH&&(u.setPipeline(this.normalObjects.bvhDrawPipeline),u.setBindGroup(0,this.normalObjects.bindGroup),u.setVertexBuffer(0,this.normalObjects.bvhLineGeometryBuffer),u.draw(this.normalObjects.bvhLineCount))}u.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=c.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const p=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${p.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),Mi(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),vr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(t,n){if(t<0||t>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const r=n.name,i=this.normalObjects.sceneInformation.meshes.findIndex(f=>f.Material.name===r)||-1;if(i===-1)return;this.spheresInfo.sphereMaterials[t]=n,this.normalObjects.sceneInformation.meshes[i].Material=n;const s=this.spheresInfo.sphereMaterialIndices[t],o=Io(n);let a=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(a,0,o);const l=s*Jr*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,l,o)}recreateBindGroup(t){const n=t.name,r=this.normalObjects.sceneInformation.meshes.findIndex(o=>o.Material.name===n)||-1;if(r===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+r,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[r]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:t.albedoGPUTexture?t.albedoGPUTexture.createView():Yt(this.device).createView()},{binding:3,resource:t.metalnessGPUTexture?t.metalnessGPUTexture.createView():Yt(this.device).createView()},{binding:4,resource:t.roughnessGPUTexture?t.roughnessGPUTexture.createView():Yt(this.device).createView()},{binding:5,resource:t.normalGPUTexture?t.normalGPUTexture.createView():Yt(this.device).createView()}]});this.normalObjects.materialBindGroups[r]=i;var s=t.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return t.albedoTexture;case 1:return t.metalnessTexture;case 2:return t.roughnessTexture;case 3:return t.normalTexture}})()||ws();this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+o]},[256,256])}}getBVHGeometry(t){if(this.normalObjects.sceneInformation.meshes.length===0)return new Float32Array;this.normalObjects.bvhLineCount=0;const n=[];let r=0;for(let o=0;o<this.normalObjects.sceneInformation.meshes.length;o++){const{vertexData:a,count:l}=this.normalObjects.sceneInformation.meshes[o].BVH.generateWireframeGeometry(t);n.push(a),r+=a.length,this.normalObjects.bvhLineCount+=l}const i=new Float32Array(r);let s=0;for(const o of n)i.set(o,s),s+=o.length;return i}rebuildBVHBuffer(){if(this.device===null)return;const t=this.getBVHGeometry(this.bvhDepth);this.normalObjects.bvhLineGeometryBuffer=this.device.createBuffer({label:"BVH Line Geometry Buffer",size:t.length*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffer,0,t)}rayCastOnSpheres(t,n){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const r=this.spheresInfo.sphereTransforms,i=this.canvas.getBoundingClientRect(),s=t-i.left,o=n-i.top,a=this.canvas.width/i.width,l=this.canvas.height/i.height,f=2*s*a/this.canvas.width-1,c=1-2*o*l/this.canvas.height,u=Gf(this.camera,f,c);let h=-1,p=Number.POSITIVE_INFINITY;for(let d=0;d<r.length;d++){const m=r[d],x=m.translation,y=m.scale[0],b=Ff(this.camera.position,u,x,y);b<=0||b<p&&(p=b,h=d)}return h}spawnMaterialContextMenu(t,n,r){if(this.canvas===null)return;this.removeContextMenu();const i=this.spheresInfo?.sphereMaterials?.[t];if(!i)return;this.activeContextMenu=Dc({x:n,y:r},i,o=>{this.changeSphereMaterial(t,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(t,n,r){if(!t)return;Jf(r).then(s=>{const o=eh(s,256,256),a=Zf(this.device,o);switch(n){case Ue.Albedo:t.albedoTexture=o,t.albedoGPUTexture=a;break;case Ue.Metalness:t.metalnessTexture=o,t.metalnessGPUTexture=a;break;case Ue.Roughness:t.roughnessTexture=o,t.roughnessGPUTexture=a;break;case Ue.Normal:t.normalTexture=o,t.normalGPUTexture=a;break}this.recreateBindGroup(t)}).catch(s=>{console.error("Error loading texture with name:",r,"and type:",Ue[n],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const ih={class:"flex justify-center items-center w-full h-full"},sh={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},oh=["onClick","onMouseenter"],ah={id:"utils-wrapper",class:"absolute bottom-0 right-0 flex flex-col items-end"},lh={id:"utils",class:"p-1 bg-gray-700"},ch=ja({__name:"App",setup(e){const t=At(null),n=At(null),r=At(!1),i=[Lc,qc,ru,xu,Cu,gf,_f,Vf,Wf,nh],s=i.length,o=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Video","Game","Ray Trace","Transparency","PBR"],a=At(null),l=At(0),f=At(0),c=At(!0);async function u(y){if(!r.value){if(r.value=!0,n.value&&typeof n.value.cleanup=="function"&&(await n.value.cleanup(),n.value=null),t.value){const b=i[y-1];b&&(n.value=await b(t.value))}r.value=!1}}function h(y,b){a.value=y;const M=b.currentTarget,B=M.parentElement;if(B){const S=B.getBoundingClientRect(),O=M.getBoundingClientRect();l.value=O.top-S.top,f.value=O.height}}function p(){a.value=null}const d=Qr(()=>a.value!==null?o[a.value-1]:""),m=Qr(()=>a.value===null?{top:l.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:l.value+"px",height:f.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});function x(){c.value=!c.value}return io(()=>{Ao(),u(8)}),(y,b)=>(_r(),Ir("div",ih,[ot("div",sh,[(_r(!0),Ir(lt,null,el(Ys(s),M=>(_r(),Ir("button",{key:M,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>u(M),onKeydown:[b[0]||(b[0]=ss(is(()=>{},["prevent"]),["space"])),b[1]||(b[1]=ss(is(()=>{},["prevent"]),["enter"]))],onMouseenter:B=>h(M,B),onMouseleave:p},jn(M),41,oh))),128))]),ot("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:t,class:"w-[90%] h-full"},null,512),b[2]||(b[2]=ot("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),ot("div",ah,[ot("button",{onClick:x,class:"m-0 p-0 bg-white text-black flex items-center"},[ot("img",{src:xc,class:Mn([c.value?"rotate-90":"-rotate-90","w-6 h-6 transition-transform duration-200"])},null,2),To(" "+jn(c.value?"Hide":"Show")+" Utils ",1)]),Va(ot("pre",lh,null,512),[[Ql,c.value]])]),ot("div",{class:Mn(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",a.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:cr(m.value)},jn(d.value),7)]))}}),uh=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},fh=uh(ch,[["__scopeId","data-v-498c70d2"]]);gc(fh).mount("#app");
