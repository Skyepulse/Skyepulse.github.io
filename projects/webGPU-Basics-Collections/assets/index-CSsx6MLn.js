(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ur(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},Gt=[],it=()=>{},lo=()=>!1,qn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ir=e=>e.startsWith("onUpdate:"),Te=Object.assign,Dr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},uo=Object.prototype.hasOwnProperty,te=(e,t)=>uo.call(e,t),H=Array.isArray,Lt=e=>kn(e)==="[object Map]",Qi=e=>kn(e)==="[object Set]",q=e=>typeof e=="function",ye=e=>typeof e=="string",Ct=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Xi=e=>(pe(e)||q(e))&&q(e.then)&&q(e.catch),Ji=Object.prototype.toString,kn=e=>Ji.call(e),fo=e=>kn(e).slice(8,-1),Zi=e=>kn(e)==="[object Object]",Fr=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ho=/-(\w)/g,Bt=Yn(e=>e.replace(ho,(t,n)=>n?n.toUpperCase():"")),po=/\B([A-Z])/g,Mt=Yn(e=>e.replace(po,"-$1").toLowerCase()),es=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Yn(e=>e?`on${es(e)}`:""),wt=(e,t)=>!Object.is(e,t),sr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},xr=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},go=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let si;const Kn=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qn(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ye(r)?bo(r):Qn(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(ye(e)||pe(e))return e}const mo=/;(?![^(]*\))/g,vo=/:([^]+)/,yo=/\/\*[^]*?\*\//g;function bo(e){const t={};return e.replace(yo,"").split(mo).forEach(n=>{if(n){const r=n.split(vo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xn(e){let t="";if(ye(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Xn(e[n]);r&&(t+=r+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",So=Ur(xo);function ts(e){return!!e||e===""}const ns=e=>!!(e&&e.__v_isRef===!0),Sr=e=>ye(e)?e:e==null?"":H(e)||pe(e)&&(e.toString===Ji||!q(e.toString))?ns(e)?Sr(e.value):JSON.stringify(e,rs,2):String(e),rs=(e,t)=>ns(t)?rs(e,t.value):Lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[or(r,s)+" =>"]=i,n),{})}:Qi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>or(n))}:Ct(t)?or(t):pe(t)&&!H(t)&&!Zi(t)?String(t):t,or=(e,t="")=>{var n;return Ct(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class wo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Bo(){return ze}let fe;const cr=new WeakSet;class is{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cr.has(this)&&(cr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||os(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oi(this),cs(this);const t=fe,n=ke;fe=this,ke=!0;try{return this.fn()}finally{as(this),fe=t,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Gr(t);this.deps=this.depsTail=void 0,oi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wr(this)&&this.run()}get dirty(){return wr(this)}}let ss=0,sn,on;function os(e,t=!1){if(e.flags|=8,t){e.next=on,on=e;return}e.next=sn,sn=e}function zr(){ss++}function Vr(){if(--ss>0)return;if(on){let t=on;for(on=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;sn;){let t=sn;for(sn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function cs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function as(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Gr(r),Po(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function wr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ls(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ls(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===dn)||(e.globalVersion=dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!wr(e))))return;e.flags|=2;const t=e.dep,n=fe,r=ke;fe=e,ke=!0;try{cs(e);const i=e.fn(e._value);(t.version===0||wt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{fe=n,ke=r,as(e),e.flags&=-3}}function Gr(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Gr(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Po(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ke=!0;const us=[];function pt(){us.push(ke),ke=!1}function gt(){const e=us.pop();ke=e===void 0?!0:e}function oi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let dn=0;class Co{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!ke||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Co(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,fs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=r)}return n}trigger(t){this.version++,dn++,this.notify(t)}notify(t){zr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vr()}}}function fs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)fs(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Br=new WeakMap,At=Symbol(""),Pr=Symbol(""),pn=Symbol("");function _e(e,t,n){if(ke&&fe){let r=Br.get(e);r||Br.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Lr),i.map=r,i.key=n),i.track()}}function ht(e,t,n,r,i,s){const o=Br.get(e);if(!o){dn++;return}const c=a=>{a&&a.trigger()};if(zr(),t==="clear")o.forEach(c);else{const a=H(e),f=a&&Fr(n);if(a&&n==="length"){const l=Number(r);o.forEach((u,p)=>{(p==="length"||p===pn||!Ct(p)&&p>=l)&&c(u)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),f&&c(o.get(pn)),t){case"add":a?f&&c(o.get("length")):(c(o.get(At)),Lt(e)&&c(o.get(Pr)));break;case"delete":a||(c(o.get(At)),Lt(e)&&c(o.get(Pr)));break;case"set":Lt(e)&&c(o.get(At));break}}Vr()}function It(e){const t=ee(e);return t===e?t:(_e(t,"iterate",pn),$e(e)?t:t.map(Pe))}function Jn(e){return _e(e=ee(e),"iterate",pn),e}const Mo={__proto__:null,[Symbol.iterator](){return ar(this,Symbol.iterator,Pe)},concat(...e){return It(this).concat(...e.map(t=>H(t)?It(t):t))},entries(){return ar(this,"entries",e=>(e[1]=Pe(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(Pe),arguments)},find(e,t){return ct(this,"find",e,t,Pe,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,Pe,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return lr(this,"includes",e)},indexOf(...e){return lr(this,"indexOf",e)},join(e){return It(this).join(e)},lastIndexOf(...e){return lr(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return Qt(this,"pop")},push(...e){return Qt(this,"push",e)},reduce(e,...t){return ci(this,"reduce",e,t)},reduceRight(e,...t){return ci(this,"reduceRight",e,t)},shift(){return Qt(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return Qt(this,"splice",e)},toReversed(){return It(this).toReversed()},toSorted(e){return It(this).toSorted(e)},toSpliced(...e){return It(this).toSpliced(...e)},unshift(...e){return Qt(this,"unshift",e)},values(){return ar(this,"values",Pe)}};function ar(e,t,n){const r=Jn(e),i=r[t]();return r!==e&&!$e(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const _o=Array.prototype;function ct(e,t,n,r,i,s){const o=Jn(e),c=o!==e&&!$e(e),a=o[t];if(a!==_o[t]){const u=a.apply(e,s);return c?Pe(u):u}let f=n;o!==e&&(c?f=function(u,p){return n.call(this,Pe(u),p,e)}:n.length>2&&(f=function(u,p){return n.call(this,u,p,e)}));const l=a.call(o,f,r);return c&&i?i(l):l}function ci(e,t,n,r){const i=Jn(e);let s=n;return i!==e&&($e(e)?n.length>3&&(s=function(o,c,a){return n.call(this,o,c,a,e)}):s=function(o,c,a){return n.call(this,o,Pe(c),a,e)}),i[t](s,...r)}function lr(e,t,n){const r=ee(e);_e(r,"iterate",pn);const i=r[t](...n);return(i===-1||i===!1)&&Hr(n[0])?(n[0]=ee(n[0]),r[t](...n)):i}function Qt(e,t,n=[]){pt(),zr();const r=ee(e)[t].apply(e,n);return Vr(),gt(),r}const Oo=Ur("__proto__,__v_isRef,__isVue"),hs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ct));function To(e){Ct(e)||(e=String(e));const t=ee(this);return _e(t,"has",e),t.hasOwnProperty(e)}class ds{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Go:vs:s?ms:gs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=H(t);if(!i){let a;if(o&&(a=Mo[n]))return a;if(n==="hasOwnProperty")return To}const c=Reflect.get(t,n,Oe(t)?t:r);return(Ct(n)?hs.has(n):Oo(n))||(i||_e(t,"get",n),s)?c:Oe(c)?o&&Fr(n)?c:c.value:pe(c)?i?ys(c):Nr(c):c}}class ps extends ds{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const a=Pt(s);if(!$e(r)&&!Pt(r)&&(s=ee(s),r=ee(r)),!H(t)&&Oe(s)&&!Oe(r))return a?!1:(s.value=r,!0)}const o=H(t)&&Fr(n)?Number(n)<t.length:te(t,n),c=Reflect.set(t,n,r,Oe(t)?t:i);return t===ee(i)&&(o?wt(r,s)&&ht(t,"set",n,r):ht(t,"add",n,r)),c}deleteProperty(t,n){const r=te(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&ht(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ct(n)||!hs.has(n))&&_e(t,"has",n),r}ownKeys(t){return _e(t,"iterate",H(t)?"length":At),Reflect.ownKeys(t)}}class Ro extends ds{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Eo=new ps,Ao=new Ro,Uo=new ps(!0);const Cr=e=>e,wn=e=>Reflect.getPrototypeOf(e);function Io(e,t,n){return function(...r){const i=this.__v_raw,s=ee(i),o=Lt(s),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,f=i[e](...r),l=n?Cr:t?Dn:Pe;return!t&&_e(s,"iterate",a?Pr:At),{next(){const{value:u,done:p}=f.next();return p?{value:u,done:p}:{value:c?[l(u[0]),l(u[1])]:l(u),done:p}},[Symbol.iterator](){return this}}}}function Bn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Do(e,t){const n={get(i){const s=this.__v_raw,o=ee(s),c=ee(i);e||(wt(i,c)&&_e(o,"get",i),_e(o,"get",c));const{has:a}=wn(o),f=t?Cr:e?Dn:Pe;if(a.call(o,i))return f(s.get(i));if(a.call(o,c))return f(s.get(c));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&_e(ee(i),"iterate",At),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=ee(s),c=ee(i);return e||(wt(i,c)&&_e(o,"has",i),_e(o,"has",c)),i===c?s.has(i):s.has(i)||s.has(c)},forEach(i,s){const o=this,c=o.__v_raw,a=ee(c),f=t?Cr:e?Dn:Pe;return!e&&_e(a,"iterate",At),c.forEach((l,u)=>i.call(s,f(l),f(u),o))}};return Te(n,e?{add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear")}:{add(i){!t&&!$e(i)&&!Pt(i)&&(i=ee(i));const s=ee(this);return wn(s).has.call(s,i)||(s.add(i),ht(s,"add",i,i)),this},set(i,s){!t&&!$e(s)&&!Pt(s)&&(s=ee(s));const o=ee(this),{has:c,get:a}=wn(o);let f=c.call(o,i);f||(i=ee(i),f=c.call(o,i));const l=a.call(o,i);return o.set(i,s),f?wt(s,l)&&ht(o,"set",i,s):ht(o,"add",i,s),this},delete(i){const s=ee(this),{has:o,get:c}=wn(s);let a=o.call(s,i);a||(i=ee(i),a=o.call(s,i)),c&&c.call(s,i);const f=s.delete(i);return a&&ht(s,"delete",i,void 0),f},clear(){const i=ee(this),s=i.size!==0,o=i.clear();return s&&ht(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Io(i,e,t)}),n}function jr(e,t){const n=Do(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(te(n,i)&&i in r?n:r,i,s)}const Fo={get:jr(!1,!1)},zo={get:jr(!1,!0)},Vo={get:jr(!0,!1)};const gs=new WeakMap,ms=new WeakMap,vs=new WeakMap,Go=new WeakMap;function Lo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jo(e){return e.__v_skip||!Object.isExtensible(e)?0:Lo(fo(e))}function Nr(e){return Pt(e)?e:Wr(e,!1,Eo,Fo,gs)}function No(e){return Wr(e,!1,Uo,zo,ms)}function ys(e){return Wr(e,!0,Ao,Vo,vs)}function Wr(e,t,n,r,i){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=jo(e);if(s===0)return e;const o=i.get(e);if(o)return o;const c=new Proxy(e,s===2?r:n);return i.set(e,c),c}function jt(e){return Pt(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function Hr(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Wo(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&xr(e,"__v_skip",!0),e}const Pe=e=>pe(e)?Nr(e):e,Dn=e=>pe(e)?ys(e):e;function Oe(e){return e?e.__v_isRef===!0:!1}function Dt(e){return Ho(e,!1)}function Ho(e,t){return Oe(e)?e:new $o(e,t)}class $o{constructor(t,n){this.dep=new Lr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Pe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||$e(t)||Pt(t);t=r?t:ee(t),wt(t,n)&&(this._rawValue=t,this._value=r?t:Pe(t),this.dep.trigger())}}function qo(e){return Oe(e)?e.value:e}const ko={get:(e,t,n)=>t==="__v_raw"?e:qo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function bs(e){return jt(e)?e:new Proxy(e,ko)}class Yo{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Lr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return os(this,!0),!0}get value(){const t=this.dep.track();return ls(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ko(e,t,n=!1){let r,i;return q(e)?r=e:(r=e.get,i=e.set),new Yo(r,i,n)}const Pn={},Fn=new WeakMap;let Rt;function Qo(e,t=!1,n=Rt){if(n){let r=Fn.get(n);r||Fn.set(n,r=[]),r.push(e)}}function Xo(e,t,n=he){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:c,call:a}=n,f=S=>i?S:$e(S)||i===!1||i===0?St(S,1):St(S);let l,u,p,g,m=!1,v=!1;if(Oe(e)?(u=()=>e.value,m=$e(e)):jt(e)?(u=()=>f(e),m=!0):H(e)?(v=!0,m=e.some(S=>jt(S)||$e(S)),u=()=>e.map(S=>{if(Oe(S))return S.value;if(jt(S))return f(S);if(q(S))return a?a(S,2):S()})):q(e)?t?u=a?()=>a(e,2):e:u=()=>{if(p){pt();try{p()}finally{gt()}}const S=Rt;Rt=l;try{return a?a(e,3,[g]):e(g)}finally{Rt=S}}:u=it,t&&i){const S=u,I=i===!0?1/0:i;u=()=>St(S(),I)}const b=Bo(),B=()=>{l.stop(),b&&b.active&&Dr(b.effects,l)};if(s&&t){const S=t;t=(...I)=>{S(...I),B()}}let M=v?new Array(e.length).fill(Pn):Pn;const E=S=>{if(!(!(l.flags&1)||!l.dirty&&!S))if(t){const I=l.run();if(i||m||(v?I.some((V,A)=>wt(V,M[A])):wt(I,M))){p&&p();const V=Rt;Rt=l;try{const A=[I,M===Pn?void 0:v&&M[0]===Pn?[]:M,g];M=I,a?a(t,3,A):t(...A)}finally{Rt=V}}}else l.run()};return c&&c(E),l=new is(u),l.scheduler=o?()=>o(E,!1):E,g=S=>Qo(S,!1,l),p=l.onStop=()=>{const S=Fn.get(l);if(S){if(a)a(S,4);else for(const I of S)I();Fn.delete(l)}},t?r?E(!0):M=l.run():o?o(E.bind(null,!0),!0):l.run(),B.pause=l.pause.bind(l),B.resume=l.resume.bind(l),B.stop=B,B}function St(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Oe(e))St(e.value,t,n);else if(H(e))for(let r=0;r<e.length;r++)St(e[r],t,n);else if(Qi(e)||Lt(e))e.forEach(r=>{St(r,t,n)});else if(Zi(e)){for(const r in e)St(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&St(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xn(e,t,n,r){try{return r?e(...r):e()}catch(i){Zn(i,t,n)}}function st(e,t,n,r){if(q(e)){const i=xn(e,t,n,r);return i&&Xi(i)&&i.catch(s=>{Zn(s,t,n)}),i}if(H(e)){const i=[];for(let s=0;s<e.length;s++)i.push(st(e[s],t,n,r));return i}}function Zn(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let c=t.parent;const a=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const l=c.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,f)===!1)return}c=c.parent}if(s){pt(),xn(s,null,10,[e,a,f]),gt();return}}Jo(e,n,i,r,o)}function Jo(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const Ee=[];let Ze=-1;const Nt=[];let yt=null,zt=0;const xs=Promise.resolve();let zn=null;function Zo(e){const t=zn||xs;return e?t.then(this?e.bind(this):e):t}function ec(e){let t=Ze+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,i=Ee[r],s=gn(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function $r(e){if(!(e.flags&1)){const t=gn(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=gn(n)?Ee.push(e):Ee.splice(ec(t),0,e),e.flags|=1,Ss()}}function Ss(){zn||(zn=xs.then(Bs))}function tc(e){H(e)?Nt.push(...e):yt&&e.id===-1?yt.splice(zt+1,0,e):e.flags&1||(Nt.push(e),e.flags|=1),Ss()}function ai(e,t,n=Ze+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ws(e){if(Nt.length){const t=[...new Set(Nt)].sort((n,r)=>gn(n)-gn(r));if(Nt.length=0,yt){yt.push(...t);return}for(yt=t,zt=0;zt<yt.length;zt++){const n=yt[zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,zt=0}}const gn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Bs(e){try{for(Ze=0;Ze<Ee.length;Ze++){const t=Ee[Ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),xn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ze<Ee.length;Ze++){const t=Ee[Ze];t&&(t.flags&=-2)}Ze=-1,Ee.length=0,ws(),zn=null,(Ee.length||Nt.length)&&Bs()}}let rt=null,Ps=null;function Vn(e){const t=rt;return rt=e,Ps=e&&e.type.__scopeId||null,t}function nc(e,t=rt,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&yi(-1);const s=Vn(t);let o;try{o=e(...i)}finally{Vn(s),r._d&&yi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _t(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const c=i[o];s&&(c.oldValue=s[o].value);let a=c.dir[r];a&&(pt(),st(a,n,8,[e.el,c,e,t]),gt())}}const rc=Symbol("_vte"),ic=e=>e.__isTeleport;function qr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,qr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function sc(e,t){return q(e)?Te({name:e.name},t,{setup:e}):e}function Cs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function cn(e,t,n,r,i=!1){if(H(e)){e.forEach((m,v)=>cn(m,t&&(H(t)?t[v]:t),n,r,i));return}if(an(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&cn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?Qr(r.component):r.el,o=i?null:s,{i:c,r:a}=e,f=t&&t.r,l=c.refs===he?c.refs={}:c.refs,u=c.setupState,p=ee(u),g=u===he?()=>!1:m=>te(p,m);if(f!=null&&f!==a&&(ye(f)?(l[f]=null,g(f)&&(u[f]=null)):Oe(f)&&(f.value=null)),q(a))xn(a,c,12,[o,l]);else{const m=ye(a),v=Oe(a);if(m||v){const b=()=>{if(e.f){const B=m?g(a)?u[a]:l[a]:a.value;i?H(B)&&Dr(B,s):H(B)?B.includes(s)||B.push(s):m?(l[a]=[s],g(a)&&(u[a]=l[a])):(a.value=[s],e.k&&(l[e.k]=a.value))}else m?(l[a]=o,g(a)&&(u[a]=o)):v&&(a.value=o,e.k&&(l[e.k]=o))};o?(b.id=-1,Ne(b,n)):b()}}}Kn().requestIdleCallback;Kn().cancelIdleCallback;const an=e=>!!e.type.__asyncLoader,Ms=e=>e.type.__isKeepAlive;function oc(e,t){_s(e,"a",t)}function cc(e,t){_s(e,"da",t)}function _s(e,t,n=Ae){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(er(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ms(i.parent.vnode)&&ac(r,t,n,i),i=i.parent}}function ac(e,t,n,r){const i=er(t,e,r,!0);Ts(()=>{Dr(r[t],i)},n)}function er(e,t,n=Ae,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{pt();const c=Sn(n),a=st(t,n,e,o);return c(),gt(),a});return r?i.unshift(s):i.push(s),s}}const mt=e=>(t,n=Ae)=>{(!vn||e==="sp")&&er(e,(...r)=>t(...r),n)},lc=mt("bm"),Os=mt("m"),uc=mt("bu"),fc=mt("u"),hc=mt("bum"),Ts=mt("um"),dc=mt("sp"),pc=mt("rtg"),gc=mt("rtc");function mc(e,t=Ae){er("ec",e,t)}const vc=Symbol.for("v-ndc");function yc(e,t,n,r){let i;const s=n,o=H(e);if(o||ye(e)){const c=o&&jt(e);let a=!1,f=!1;c&&(a=!$e(e),f=Pt(e),e=Jn(e)),i=new Array(e.length);for(let l=0,u=e.length;l<u;l++)i[l]=t(a?f?Dn(Pe(e[l])):Pe(e[l]):e[l],l,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let c=0;c<e;c++)i[c]=t(c+1,c,void 0,s)}else if(pe(e))if(e[Symbol.iterator])i=Array.from(e,(c,a)=>t(c,a,void 0,s));else{const c=Object.keys(e);i=new Array(c.length);for(let a=0,f=c.length;a<f;a++){const l=c[a];i[a]=t(e[l],l,a,s)}}else i=[];return i}const Mr=e=>e?Ks(e)?Qr(e):Mr(e.parent):null,ln=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Es(e),$forceUpdate:e=>e.f||(e.f=()=>{$r(e.update)}),$nextTick:e=>e.n||(e.n=Zo.bind(e.proxy)),$watch:e=>Lc.bind(e)}),ur=(e,t)=>e!==he&&!e.__isScriptSetup&&te(e,t),bc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:c,appContext:a}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(ur(r,t))return o[t]=1,r[t];if(i!==he&&te(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&te(f,t))return o[t]=3,s[t];if(n!==he&&te(n,t))return o[t]=4,n[t];_r&&(o[t]=0)}}const l=ln[t];let u,p;if(l)return t==="$attrs"&&_e(e.attrs,"get",""),l(e);if((u=c.__cssModules)&&(u=u[t]))return u;if(n!==he&&te(n,t))return o[t]=4,n[t];if(p=a.config.globalProperties,te(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return ur(i,t)?(i[t]=n,!0):r!==he&&te(r,t)?(r[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let c;return!!n[o]||e!==he&&te(e,o)||ur(t,o)||(c=s[0])&&te(c,o)||te(r,o)||te(ln,o)||te(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function li(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let _r=!0;function xc(e){const t=Es(e),n=e.proxy,r=e.ctx;_r=!1,t.beforeCreate&&ui(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:c,provide:a,inject:f,created:l,beforeMount:u,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:b,beforeDestroy:B,beforeUnmount:M,destroyed:E,unmounted:S,render:I,renderTracked:V,renderTriggered:A,errorCaptured:U,serverPrefetch:N,expose:L,inheritAttrs:Y,components:J,directives:k,filters:Q}=t;if(f&&Sc(f,r,null),o)for(const j in o){const G=o[j];q(G)&&(r[j]=G.bind(n))}if(i){const j=i.call(n,n);pe(j)&&(e.data=Nr(j))}if(_r=!0,s)for(const j in s){const G=s[j],me=q(G)?G.bind(n,n):q(G.get)?G.get.bind(n,n):it,be=!q(G)&&q(G.set)?G.set.bind(n):it,Z=Er({get:me,set:be});Object.defineProperty(r,j,{enumerable:!0,configurable:!0,get:()=>Z.value,set:ce=>Z.value=ce})}if(c)for(const j in c)Rs(c[j],r,n,j);if(a){const j=q(a)?a.call(n):a;Reflect.ownKeys(j).forEach(G=>{_c(G,j[G])})}l&&ui(l,e,"c");function $(j,G){H(G)?G.forEach(me=>j(me.bind(n))):G&&j(G.bind(n))}if($(lc,u),$(Os,p),$(uc,g),$(fc,m),$(oc,v),$(cc,b),$(mc,U),$(gc,V),$(pc,A),$(hc,M),$(Ts,S),$(dc,N),H(L))if(L.length){const j=e.exposed||(e.exposed={});L.forEach(G=>{Object.defineProperty(j,G,{get:()=>n[G],set:me=>n[G]=me,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===it&&(e.render=I),Y!=null&&(e.inheritAttrs=Y),J&&(e.components=J),k&&(e.directives=k),N&&Cs(e)}function Sc(e,t,n=it){H(e)&&(e=Or(e));for(const r in e){const i=e[r];let s;pe(i)?"default"in i?s=Tn(i.from||r,i.default,!0):s=Tn(i.from||r):s=Tn(i),Oe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function ui(e,t,n){st(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rs(e,t,n,r){let i=r.includes(".")?Hs(n,r):()=>n[r];if(ye(e)){const s=t[e];q(s)&&hr(i,s)}else if(q(e))hr(i,e.bind(n));else if(pe(e))if(H(e))e.forEach(s=>Rs(s,t,n,r));else{const s=q(e.handler)?e.handler.bind(n):t[e.handler];q(s)&&hr(i,s,e)}}function Es(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,c=s.get(t);let a;return c?a=c:!i.length&&!n&&!r?a=t:(a={},i.length&&i.forEach(f=>Gn(a,f,o,!0)),Gn(a,t,o)),pe(t)&&s.set(t,a),a}function Gn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Gn(e,s,n,!0),i&&i.forEach(o=>Gn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=wc[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const wc={data:fi,props:hi,emits:hi,methods:tn,computed:tn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:tn,directives:tn,watch:Pc,provide:fi,inject:Bc};function fi(e,t){return t?e?function(){return Te(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Bc(e,t){return tn(Or(e),Or(t))}function Or(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function tn(e,t){return e?Te(Object.create(null),e,t):t}function hi(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Te(Object.create(null),li(e),li(t??{})):t}function Pc(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function As(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cc=0;function Mc(e,t){return function(r,i=null){q(r)||(r=Te({},r)),i!=null&&!pe(i)&&(i=null);const s=As(),o=new WeakSet,c=[];let a=!1;const f=s.app={_uid:Cc++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:la,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(f,...u)):q(l)&&(o.add(l),l(f,...u))),f},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),f},component(l,u){return u?(s.components[l]=u,f):s.components[l]},directive(l,u){return u?(s.directives[l]=u,f):s.directives[l]},mount(l,u,p){if(!a){const g=f._ceVNode||Ut(r,i);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),e(g,l,p),a=!0,f._container=l,l.__vue_app__=f,Qr(g.component)}},onUnmount(l){c.push(l)},unmount(){a&&(st(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(l,u){return s.provides[l]=u,f},runWithContext(l){const u=Wt;Wt=f;try{return l()}finally{Wt=u}}};return f}}let Wt=null;function _c(e,t){if(Ae){let n=Ae.provides;const r=Ae.parent&&Ae.parent.provides;r===n&&(n=Ae.provides=Object.create(r)),n[e]=t}}function Tn(e,t,n=!1){const r=ra();if(r||Wt){let i=Wt?Wt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&q(t)?t.call(r&&r.proxy):t}}const Us={},Is=()=>Object.create(Us),Ds=e=>Object.getPrototypeOf(e)===Us;function Oc(e,t,n,r=!1){const i={},s=Is();e.propsDefaults=Object.create(null),Fs(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:No(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Tc(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,c=ee(i),[a]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let u=0;u<l.length;u++){let p=l[u];if(tr(e.emitsOptions,p))continue;const g=t[p];if(a)if(te(s,p))g!==s[p]&&(s[p]=g,f=!0);else{const m=Bt(p);i[m]=Tr(a,c,m,g,e,!1)}else g!==s[p]&&(s[p]=g,f=!0)}}}else{Fs(e,t,i,s)&&(f=!0);let l;for(const u in c)(!t||!te(t,u)&&((l=Mt(u))===u||!te(t,l)))&&(a?n&&(n[u]!==void 0||n[l]!==void 0)&&(i[u]=Tr(a,c,u,void 0,e,!0)):delete i[u]);if(s!==c)for(const u in s)(!t||!te(t,u))&&(delete s[u],f=!0)}f&&ht(e.attrs,"set","")}function Fs(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(rn(a))continue;const f=t[a];let l;i&&te(i,l=Bt(a))?!s||!s.includes(l)?n[l]=f:(c||(c={}))[l]=f:tr(e.emitsOptions,a)||(!(a in r)||f!==r[a])&&(r[a]=f,o=!0)}if(s){const a=ee(n),f=c||he;for(let l=0;l<s.length;l++){const u=s[l];n[u]=Tr(i,a,u,f[u],e,!te(f,u))}}return o}function Tr(e,t,n,r,i,s){const o=e[n];if(o!=null){const c=te(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&q(a)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const l=Sn(i);r=f[n]=a.call(null,t),l()}}else r=a;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!c?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}const Rc=new WeakMap;function zs(e,t,n=!1){const r=n?Rc:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},c=[];let a=!1;if(!q(e)){const l=u=>{a=!0;const[p,g]=zs(u,t,!0);Te(o,p),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!a)return pe(e)&&r.set(e,Gt),Gt;if(H(s))for(let l=0;l<s.length;l++){const u=Bt(s[l]);di(u)&&(o[u]=he)}else if(s)for(const l in s){const u=Bt(l);if(di(u)){const p=s[l],g=o[u]=H(p)||q(p)?{type:p}:Te({},p),m=g.type;let v=!1,b=!0;if(H(m))for(let B=0;B<m.length;++B){const M=m[B],E=q(M)&&M.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(b=!1)}else v=q(m)&&m.name==="Boolean";g[0]=v,g[1]=b,(v||te(g,"default"))&&c.push(u)}}const f=[o,c];return pe(e)&&r.set(e,f),f}function di(e){return e[0]!=="$"&&!rn(e)}const kr=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",Yr=e=>H(e)?e.map(nt):[nt(e)],Ec=(e,t,n)=>{if(t._n)return t;const r=nc((...i)=>Yr(t(...i)),n);return r._c=!1,r},Vs=(e,t,n)=>{const r=e._ctx;for(const i in e){if(kr(i))continue;const s=e[i];if(q(s))t[i]=Ec(i,s,r);else if(s!=null){const o=Yr(s);t[i]=()=>o}}},Gs=(e,t)=>{const n=Yr(t);e.slots.default=()=>n},Ls=(e,t,n)=>{for(const r in t)(n||!kr(r))&&(e[r]=t[r])},Ac=(e,t,n)=>{const r=e.slots=Is();if(e.vnode.shapeFlag&32){const i=t.__;i&&xr(r,"__",i,!0);const s=t._;s?(Ls(r,t,n),n&&xr(r,"_",s,!0)):Vs(t,r)}else t&&Gs(e,t)},Uc=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=he;if(r.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:Ls(i,t,n):(s=!t.$stable,Vs(t,i)),o=t}else t&&(Gs(e,t),o={default:1});if(s)for(const c in i)!kr(c)&&o[c]==null&&delete i[c]},Ne=kc;function Ic(e){return Dc(e)}function Dc(e,t){const n=Kn();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:c,createComment:a,setText:f,setElementText:l,parentNode:u,nextSibling:p,setScopeId:g=it,insertStaticContent:m}=e,v=(h,d,y,P=null,x=null,w=null,T=void 0,O=null,_=!!d.dynamicChildren)=>{if(h===d)return;h&&!Xt(h,d)&&(P=we(h),ce(h,x,w,!0),h=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:C,ref:z,shapeFlag:R}=d;switch(C){case nr:b(h,d,y,P);break;case Ht:B(h,d,y,P);break;case dr:h==null&&M(d,y,P,T);break;case tt:J(h,d,y,P,x,w,T,O,_);break;default:R&1?I(h,d,y,P,x,w,T,O,_):R&6?k(h,d,y,P,x,w,T,O,_):(R&64||R&128)&&C.process(h,d,y,P,x,w,T,O,_,ae)}z!=null&&x?cn(z,h&&h.ref,w,d||h,!d):z==null&&h&&h.ref!=null&&cn(h.ref,null,w,h,!0)},b=(h,d,y,P)=>{if(h==null)r(d.el=c(d.children),y,P);else{const x=d.el=h.el;d.children!==h.children&&f(x,d.children)}},B=(h,d,y,P)=>{h==null?r(d.el=a(d.children||""),y,P):d.el=h.el},M=(h,d,y,P)=>{[h.el,h.anchor]=m(h.children,d,y,P,h.el,h.anchor)},E=({el:h,anchor:d},y,P)=>{let x;for(;h&&h!==d;)x=p(h),r(h,y,P),h=x;r(d,y,P)},S=({el:h,anchor:d})=>{let y;for(;h&&h!==d;)y=p(h),i(h),h=y;i(d)},I=(h,d,y,P,x,w,T,O,_)=>{d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),h==null?V(d,y,P,x,w,T,O,_):N(h,d,x,w,T,O,_)},V=(h,d,y,P,x,w,T,O)=>{let _,C;const{props:z,shapeFlag:R,transition:D,dirs:W}=h;if(_=h.el=o(h.type,w,z&&z.is,z),R&8?l(_,h.children):R&16&&U(h.children,_,null,P,x,fr(h,w),T,O),W&&_t(h,null,P,"created"),A(_,h,h.scopeId,T,P),z){for(const ue in z)ue!=="value"&&!rn(ue)&&s(_,ue,null,z[ue],w,P);"value"in z&&s(_,"value",null,z.value,w),(C=z.onVnodeBeforeMount)&&Xe(C,P,h)}W&&_t(h,null,P,"beforeMount");const K=Fc(x,D);K&&D.beforeEnter(_),r(_,d,y),((C=z&&z.onVnodeMounted)||K||W)&&Ne(()=>{C&&Xe(C,P,h),K&&D.enter(_),W&&_t(h,null,P,"mounted")},x)},A=(h,d,y,P,x)=>{if(y&&g(h,y),P)for(let w=0;w<P.length;w++)g(h,P[w]);if(x){let w=x.subTree;if(d===w||qs(w.type)&&(w.ssContent===d||w.ssFallback===d)){const T=x.vnode;A(h,T,T.scopeId,T.slotScopeIds,x.parent)}}},U=(h,d,y,P,x,w,T,O,_=0)=>{for(let C=_;C<h.length;C++){const z=h[C]=O?xt(h[C]):nt(h[C]);v(null,z,d,y,P,x,w,T,O)}},N=(h,d,y,P,x,w,T)=>{const O=d.el=h.el;let{patchFlag:_,dynamicChildren:C,dirs:z}=d;_|=h.patchFlag&16;const R=h.props||he,D=d.props||he;let W;if(y&&Ot(y,!1),(W=D.onVnodeBeforeUpdate)&&Xe(W,y,d,h),z&&_t(d,h,y,"beforeUpdate"),y&&Ot(y,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&l(O,""),C?L(h.dynamicChildren,C,O,y,P,fr(d,x),w):T||G(h,d,O,null,y,P,fr(d,x),w,!1),_>0){if(_&16)Y(O,R,D,y,x);else if(_&2&&R.class!==D.class&&s(O,"class",null,D.class,x),_&4&&s(O,"style",R.style,D.style,x),_&8){const K=d.dynamicProps;for(let ue=0;ue<K.length;ue++){const ie=K[ue],Ie=R[ie],De=D[ie];(De!==Ie||ie==="value")&&s(O,ie,Ie,De,x,y)}}_&1&&h.children!==d.children&&l(O,d.children)}else!T&&C==null&&Y(O,R,D,y,x);((W=D.onVnodeUpdated)||z)&&Ne(()=>{W&&Xe(W,y,d,h),z&&_t(d,h,y,"updated")},P)},L=(h,d,y,P,x,w,T)=>{for(let O=0;O<d.length;O++){const _=h[O],C=d[O],z=_.el&&(_.type===tt||!Xt(_,C)||_.shapeFlag&198)?u(_.el):y;v(_,C,z,null,P,x,w,T,!0)}},Y=(h,d,y,P,x)=>{if(d!==y){if(d!==he)for(const w in d)!rn(w)&&!(w in y)&&s(h,w,d[w],null,x,P);for(const w in y){if(rn(w))continue;const T=y[w],O=d[w];T!==O&&w!=="value"&&s(h,w,O,T,x,P)}"value"in y&&s(h,"value",d.value,y.value,x)}},J=(h,d,y,P,x,w,T,O,_)=>{const C=d.el=h?h.el:c(""),z=d.anchor=h?h.anchor:c("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:W}=d;W&&(O=O?O.concat(W):W),h==null?(r(C,y,P),r(z,y,P),U(d.children||[],y,z,x,w,T,O,_)):R>0&&R&64&&D&&h.dynamicChildren?(L(h.dynamicChildren,D,y,x,w,T,O),(d.key!=null||x&&d===x.subTree)&&js(h,d,!0)):G(h,d,y,z,x,w,T,O,_)},k=(h,d,y,P,x,w,T,O,_)=>{d.slotScopeIds=O,h==null?d.shapeFlag&512?x.ctx.activate(d,y,P,T,_):Q(d,y,P,x,w,T,_):oe(h,d,_)},Q=(h,d,y,P,x,w,T)=>{const O=h.component=na(h,P,x);if(Ms(h)&&(O.ctx.renderer=ae),ia(O,!1,T),O.asyncDep){if(x&&x.registerDep(O,$,T),!h.el){const _=O.subTree=Ut(Ht);B(null,_,d,y),h.placeholder=_.el}}else $(O,h,d,y,x,w,T)},oe=(h,d,y)=>{const P=d.component=h.component;if($c(h,d,y))if(P.asyncDep&&!P.asyncResolved){j(P,d,y);return}else P.next=d,P.update();else d.el=h.el,P.vnode=d},$=(h,d,y,P,x,w,T)=>{const O=()=>{if(h.isMounted){let{next:R,bu:D,u:W,parent:K,vnode:ue}=h;{const Ke=Ns(h);if(Ke){R&&(R.el=ue.el,j(h,R,T)),Ke.asyncDep.then(()=>{h.isUnmounted||O()});return}}let ie=R,Ie;Ot(h,!1),R?(R.el=ue.el,j(h,R,T)):R=ue,D&&sr(D),(Ie=R.props&&R.props.onVnodeBeforeUpdate)&&Xe(Ie,K,R,ue),Ot(h,!0);const De=gi(h),Ye=h.subTree;h.subTree=De,v(Ye,De,u(Ye.el),we(Ye),h,x,w),R.el=De.el,ie===null&&qc(h,De.el),W&&Ne(W,x),(Ie=R.props&&R.props.onVnodeUpdated)&&Ne(()=>Xe(Ie,K,R,ue),x)}else{let R;const{el:D,props:W}=d,{bm:K,m:ue,parent:ie,root:Ie,type:De}=h,Ye=an(d);Ot(h,!1),K&&sr(K),!Ye&&(R=W&&W.onVnodeBeforeMount)&&Xe(R,ie,d),Ot(h,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(De);const Ke=h.subTree=gi(h);v(null,Ke,y,P,h,x,w),d.el=Ke.el}if(ue&&Ne(ue,x),!Ye&&(R=W&&W.onVnodeMounted)){const Ke=d;Ne(()=>Xe(R,ie,Ke),x)}(d.shapeFlag&256||ie&&an(ie.vnode)&&ie.vnode.shapeFlag&256)&&h.a&&Ne(h.a,x),h.isMounted=!0,d=y=P=null}};h.scope.on();const _=h.effect=new is(O);h.scope.off();const C=h.update=_.run.bind(_),z=h.job=_.runIfDirty.bind(_);z.i=h,z.id=h.uid,_.scheduler=()=>$r(z),Ot(h,!0),C()},j=(h,d,y)=>{d.component=h;const P=h.vnode.props;h.vnode=d,h.next=null,Tc(h,d.props,P,y),Uc(h,d.children,y),pt(),ai(h),gt()},G=(h,d,y,P,x,w,T,O,_=!1)=>{const C=h&&h.children,z=h?h.shapeFlag:0,R=d.children,{patchFlag:D,shapeFlag:W}=d;if(D>0){if(D&128){be(C,R,y,P,x,w,T,O,_);return}else if(D&256){me(C,R,y,P,x,w,T,O,_);return}}W&8?(z&16&&xe(C,x,w),R!==C&&l(y,R)):z&16?W&16?be(C,R,y,P,x,w,T,O,_):xe(C,x,w,!0):(z&8&&l(y,""),W&16&&U(R,y,P,x,w,T,O,_))},me=(h,d,y,P,x,w,T,O,_)=>{h=h||Gt,d=d||Gt;const C=h.length,z=d.length,R=Math.min(C,z);let D;for(D=0;D<R;D++){const W=d[D]=_?xt(d[D]):nt(d[D]);v(h[D],W,y,null,x,w,T,O,_)}C>z?xe(h,x,w,!0,!1,R):U(d,y,P,x,w,T,O,_,R)},be=(h,d,y,P,x,w,T,O,_)=>{let C=0;const z=d.length;let R=h.length-1,D=z-1;for(;C<=R&&C<=D;){const W=h[C],K=d[C]=_?xt(d[C]):nt(d[C]);if(Xt(W,K))v(W,K,y,null,x,w,T,O,_);else break;C++}for(;C<=R&&C<=D;){const W=h[R],K=d[D]=_?xt(d[D]):nt(d[D]);if(Xt(W,K))v(W,K,y,null,x,w,T,O,_);else break;R--,D--}if(C>R){if(C<=D){const W=D+1,K=W<z?d[W].el:P;for(;C<=D;)v(null,d[C]=_?xt(d[C]):nt(d[C]),y,K,x,w,T,O,_),C++}}else if(C>D)for(;C<=R;)ce(h[C],x,w,!0),C++;else{const W=C,K=C,ue=new Map;for(C=K;C<=D;C++){const Le=d[C]=_?xt(d[C]):nt(d[C]);Le.key!=null&&ue.set(Le.key,C)}let ie,Ie=0;const De=D-K+1;let Ye=!1,Ke=0;const Kt=new Array(De);for(C=0;C<De;C++)Kt[C]=0;for(C=W;C<=R;C++){const Le=h[C];if(Ie>=De){ce(Le,x,w,!0);continue}let Qe;if(Le.key!=null)Qe=ue.get(Le.key);else for(ie=K;ie<=D;ie++)if(Kt[ie-K]===0&&Xt(Le,d[ie])){Qe=ie;break}Qe===void 0?ce(Le,x,w,!0):(Kt[Qe-K]=C+1,Qe>=Ke?Ke=Qe:Ye=!0,v(Le,d[Qe],y,null,x,w,T,O,_),Ie++)}const ni=Ye?zc(Kt):Gt;for(ie=ni.length-1,C=De-1;C>=0;C--){const Le=K+C,Qe=d[Le],ri=d[Le+1],ii=Le+1<z?ri.el||ri.placeholder:P;Kt[C]===0?v(null,Qe,y,ii,x,w,T,O,_):Ye&&(ie<0||C!==ni[ie]?Z(Qe,y,ii,2):ie--)}}},Z=(h,d,y,P,x=null)=>{const{el:w,type:T,transition:O,children:_,shapeFlag:C}=h;if(C&6){Z(h.component.subTree,d,y,P);return}if(C&128){h.suspense.move(d,y,P);return}if(C&64){T.move(h,d,y,ae);return}if(T===tt){r(w,d,y);for(let R=0;R<_.length;R++)Z(_[R],d,y,P);r(h.anchor,d,y);return}if(T===dr){E(h,d,y);return}if(P!==2&&C&1&&O)if(P===0)O.beforeEnter(w),r(w,d,y),Ne(()=>O.enter(w),x);else{const{leave:R,delayLeave:D,afterLeave:W}=O,K=()=>{h.ctx.isUnmounted?i(w):r(w,d,y)},ue=()=>{R(w,()=>{K(),W&&W()})};D?D(w,K,ue):ue()}else r(w,d,y)},ce=(h,d,y,P=!1,x=!1)=>{const{type:w,props:T,ref:O,children:_,dynamicChildren:C,shapeFlag:z,patchFlag:R,dirs:D,cacheIndex:W}=h;if(R===-2&&(x=!1),O!=null&&(pt(),cn(O,null,y,h,!0),gt()),W!=null&&(d.renderCache[W]=void 0),z&256){d.ctx.deactivate(h);return}const K=z&1&&D,ue=!an(h);let ie;if(ue&&(ie=T&&T.onVnodeBeforeUnmount)&&Xe(ie,d,h),z&6)Ue(h.component,y,P);else{if(z&128){h.suspense.unmount(y,P);return}K&&_t(h,null,d,"beforeUnmount"),z&64?h.type.remove(h,d,y,ae,P):C&&!C.hasOnce&&(w!==tt||R>0&&R&64)?xe(C,d,y,!1,!0):(w===tt&&R&384||!x&&z&16)&&xe(_,d,y),P&&Be(h)}(ue&&(ie=T&&T.onVnodeUnmounted)||K)&&Ne(()=>{ie&&Xe(ie,d,h),K&&_t(h,null,d,"unmounted")},y)},Be=h=>{const{type:d,el:y,anchor:P,transition:x}=h;if(d===tt){Ge(y,P);return}if(d===dr){S(h);return}const w=()=>{i(y),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:T,delayLeave:O}=x,_=()=>T(y,w);O?O(h.el,w,_):_()}else w()},Ge=(h,d)=>{let y;for(;h!==d;)y=p(h),i(h),h=y;i(d)},Ue=(h,d,y)=>{const{bum:P,scope:x,job:w,subTree:T,um:O,m:_,a:C,parent:z,slots:{__:R}}=h;pi(_),pi(C),P&&sr(P),z&&H(R)&&R.forEach(D=>{z.renderCache[D]=void 0}),x.stop(),w&&(w.flags|=8,ce(T,h,d,y)),O&&Ne(O,d),Ne(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},xe=(h,d,y,P=!1,x=!1,w=0)=>{for(let T=w;T<h.length;T++)ce(h[T],d,y,P,x)},we=h=>{if(h.shapeFlag&6)return we(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const d=p(h.anchor||h.el),y=d&&d[rc];return y?p(y):d};let ve=!1;const ot=(h,d,y)=>{h==null?d._vnode&&ce(d._vnode,null,null,!0):v(d._vnode||null,h,d,null,null,null,y),d._vnode=h,ve||(ve=!0,ai(),ws(),ve=!1)},ae={p:v,um:ce,m:Z,r:Be,mt:Q,mc:U,pc:G,pbc:L,n:we,o:e};return{render:ot,hydrate:void 0,createApp:Mc(ot)}}function fr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ot({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function js(e,t,n=!1){const r=e.children,i=t.children;if(H(r)&&H(i))for(let s=0;s<r.length;s++){const o=r[s];let c=i[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[s]=xt(i[s]),c.el=o.el),!n&&c.patchFlag!==-2&&js(o,c)),c.type===nr&&(c.el=o.el),c.type===Ht&&!c.el&&(c.el=o.el)}}function zc(e){const t=e.slice(),n=[0];let r,i,s,o,c;const a=e.length;for(r=0;r<a;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)c=s+o>>1,e[n[c]]<f?s=c+1:o=c;f<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Ns(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ns(t)}function pi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Vc=Symbol.for("v-scx"),Gc=()=>Tn(Vc);function hr(e,t,n){return Ws(e,t,n)}function Ws(e,t,n=he){const{immediate:r,deep:i,flush:s,once:o}=n,c=Te({},n),a=t&&r||!t&&s!=="post";let f;if(vn){if(s==="sync"){const g=Gc();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=it,g.resume=it,g.pause=it,g}}const l=Ae;c.call=(g,m,v)=>st(g,l,m,v);let u=!1;s==="post"?c.scheduler=g=>{Ne(g,l&&l.suspense)}:s!=="sync"&&(u=!0,c.scheduler=(g,m)=>{m?g():$r(g)}),c.augmentJob=g=>{t&&(g.flags|=4),u&&(g.flags|=2,l&&(g.id=l.uid,g.i=l))};const p=Xo(e,t,c);return vn&&(f?f.push(p):a&&p()),p}function Lc(e,t,n){const r=this.proxy,i=ye(e)?e.includes(".")?Hs(r,e):()=>r[e]:e.bind(r,r);let s;q(t)?s=t:(s=t.handler,n=t);const o=Sn(this),c=Ws(i,s.bind(r),n);return o(),c}function Hs(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const jc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Bt(t)}Modifiers`]||e[`${Mt(t)}Modifiers`];function Nc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||he;let i=n;const s=t.startsWith("update:"),o=s&&jc(r,t.slice(7));o&&(o.trim&&(i=n.map(l=>ye(l)?l.trim():l)),o.number&&(i=n.map(go)));let c,a=r[c=ir(t)]||r[c=ir(Bt(t))];!a&&s&&(a=r[c=ir(Mt(t))]),a&&st(a,e,6,i);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,st(f,e,6,i)}}function $s(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},c=!1;if(!q(e)){const a=f=>{const l=$s(f,t,!0);l&&(c=!0,Te(o,l))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(pe(e)&&r.set(e,null),null):(H(s)?s.forEach(a=>o[a]=null):Te(o,s),pe(e)&&r.set(e,o),o)}function tr(e,t){return!e||!qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,Mt(t))||te(e,t))}function gi(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:c,emit:a,render:f,renderCache:l,props:u,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,b=Vn(e);let B,M;try{if(n.shapeFlag&4){const S=i||r,I=S;B=nt(f.call(I,S,l,u,g,p,m)),M=c}else{const S=t;B=nt(S.length>1?S(u,{attrs:c,slots:o,emit:a}):S(u,null)),M=t.props?c:Wc(c)}}catch(S){un.length=0,Zn(S,e,1),B=Ut(Ht)}let E=B;if(M&&v!==!1){const S=Object.keys(M),{shapeFlag:I}=E;S.length&&I&7&&(s&&S.some(Ir)&&(M=Hc(M,s)),E=$t(E,M,!1,!0))}return n.dirs&&(E=$t(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&qr(E,n.transition),B=E,Vn(b),B}const Wc=e=>{let t;for(const n in e)(n==="class"||n==="style"||qn(n))&&((t||(t={}))[n]=e[n]);return t},Hc=(e,t)=>{const n={};for(const r in e)(!Ir(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $c(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:c,patchFlag:a}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?mi(r,o,f):!!o;if(a&8){const l=t.dynamicProps;for(let u=0;u<l.length;u++){const p=l[u];if(o[p]!==r[p]&&!tr(f,p))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?mi(r,o,f):!0:!!o;return!1}function mi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!tr(n,s))return!0}return!1}function qc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const qs=e=>e.__isSuspense;function kc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):tc(e)}const tt=Symbol.for("v-fgt"),nr=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),un=[];let He=null;function vi(e=!1){un.push(He=e?null:[])}function Yc(){un.pop(),He=un[un.length-1]||null}let mn=1;function yi(e,t=!1){mn+=e,e<0&&He&&t&&(He.hasOnce=!0)}function Kc(e){return e.dynamicChildren=mn>0?He||Gt:null,Yc(),mn>0&&He&&He.push(e),e}function bi(e,t,n,r,i,s){return Kc(bt(e,t,n,r,i,s,!0))}function ks(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Ys=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||Oe(e)||q(e)?{i:rt,r:e,k:t,f:!!n}:e:null);function bt(e,t=null,n=null,r=0,i=null,s=e===tt?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ys(t),ref:t&&Rn(t),scopeId:Ps,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rt};return c?(Kr(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=ye(n)?8:16),mn>0&&!o&&He&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&He.push(a),a}const Ut=Qc;function Qc(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===vc)&&(e=Ht),ks(e)){const c=$t(e,t,!0);return n&&Kr(c,n),mn>0&&!s&&He&&(c.shapeFlag&6?He[He.indexOf(e)]=c:He.push(c)),c.patchFlag=-2,c}if(aa(e)&&(e=e.__vccOpts),t){t=Xc(t);let{class:c,style:a}=t;c&&!ye(c)&&(t.class=Xn(c)),pe(a)&&(Hr(a)&&!H(a)&&(a=Te({},a)),t.style=Qn(a))}const o=ye(e)?1:qs(e)?128:ic(e)?64:pe(e)?4:q(e)?2:0;return bt(e,t,n,r,i,o,s,!0)}function Xc(e){return e?Hr(e)||Ds(e)?Te({},e):e:null}function $t(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:c,transition:a}=e,f=t?Zc(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Ys(f),ref:t&&t.ref?n&&s?H(s)?s.concat(Rn(t)):[s,Rn(t)]:Rn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&qr(l,a.clone(l)),l}function Jc(e=" ",t=0){return Ut(nr,null,e,t)}function nt(e){return e==null||typeof e=="boolean"?Ut(Ht):H(e)?Ut(tt,null,e.slice()):ks(e)?xt(e):Ut(nr,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Kr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Kr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ds(t)?t._ctx=rt:i===3&&rt&&(rt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:rt},n=32):(t=String(t),r&64?(n=16,t=[Jc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Xn([t.class,r.class]));else if(i==="style")t.style=Qn([t.style,r.style]);else if(qn(i)){const s=t[i],o=r[i];o&&s!==o&&!(H(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Xe(e,t,n,r=null){st(e,t,7,[n,r])}const ea=As();let ta=0;function na(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||ea,s={uid:ta++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zs(r,i),emitsOptions:$s(r,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Nc.bind(null,s),e.ce&&e.ce(s),s}let Ae=null;const ra=()=>Ae||rt;let Ln,Rr;{const e=Kn(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Ln=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Rr=t("__VUE_SSR_SETTERS__",n=>vn=n)}const Sn=e=>{const t=Ae;return Ln(e),e.scope.on(),()=>{e.scope.off(),Ln(t)}},xi=()=>{Ae&&Ae.scope.off(),Ln(null)};function Ks(e){return e.vnode.shapeFlag&4}let vn=!1;function ia(e,t=!1,n=!1){t&&Rr(t);const{props:r,children:i}=e.vnode,s=Ks(e);Oc(e,r,s,t),Ac(e,i,n||t);const o=s?sa(e,t):void 0;return t&&Rr(!1),o}function sa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bc);const{setup:r}=n;if(r){pt();const i=e.setupContext=r.length>1?ca(e):null,s=Sn(e),o=xn(r,e,0,[e.props,i]),c=Xi(o);if(gt(),s(),(c||e.sp)&&!an(e)&&Cs(e),c){if(o.then(xi,xi),t)return o.then(a=>{Si(e,a)}).catch(a=>{Zn(a,e,0)});e.asyncDep=o}else Si(e,o)}else Qs(e)}function Si(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=bs(t)),Qs(e)}function Qs(e,t,n){const r=e.type;e.render||(e.render=r.render||it);{const i=Sn(e);pt();try{xc(e)}finally{gt(),i()}}}const oa={get(e,t){return _e(e,"get",""),e[t]}};function ca(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,oa),slots:e.slots,emit:e.emit,expose:t}}function Qr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(bs(Wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ln)return ln[n](e)},has(t,n){return n in t||n in ln}})):e.proxy}function aa(e){return q(e)&&"__vccOpts"in e}const Er=(e,t)=>Ko(e,t,vn),la="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ar;const wi=typeof window<"u"&&window.trustedTypes;if(wi)try{Ar=wi.createPolicy("vue",{createHTML:e=>e})}catch{}const Xs=Ar?e=>Ar.createHTML(e):e=>e,ua="http://www.w3.org/2000/svg",fa="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Bi=ut&&ut.createElement("template"),ha={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ut.createElementNS(ua,e):t==="mathml"?ut.createElementNS(fa,e):n?ut.createElement(e,{is:n}):ut.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Bi.innerHTML=Xs(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=Bi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},da=Symbol("_vtc");function pa(e,t,n){const r=e[da];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pi=Symbol("_vod"),ga=Symbol("_vsh"),ma=Symbol(""),va=/(^|;)\s*display\s*:/;function ya(e,t,n){const r=e.style,i=ye(n);let s=!1;if(n&&!i){if(t)if(ye(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&En(r,c,"")}else for(const o in t)n[o]==null&&En(r,o,"");for(const o in n)o==="display"&&(s=!0),En(r,o,n[o])}else if(i){if(t!==n){const o=r[ma];o&&(n+=";"+o),r.cssText=n,s=va.test(n)}}else t&&e.removeAttribute("style");Pi in e&&(e[Pi]=s?r.display:"",e[ga]&&(r.display="none"))}const Ci=/\s*!important$/;function En(e,t,n){if(H(n))n.forEach(r=>En(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ba(e,t);Ci.test(n)?e.setProperty(Mt(r),n.replace(Ci,""),"important"):e[r]=n}}const Mi=["Webkit","Moz","ms"],pr={};function ba(e,t){const n=pr[t];if(n)return n;let r=Bt(t);if(r!=="filter"&&r in e)return pr[t]=r;r=es(r);for(let i=0;i<Mi.length;i++){const s=Mi[i]+r;if(s in e)return pr[t]=s}return t}const _i="http://www.w3.org/1999/xlink";function Oi(e,t,n,r,i,s=So(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n):n==null||s&&!ts(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ct(n)?String(n):n)}function Ti(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xs(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ts(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function xa(e,t,n,r){e.addEventListener(t,n,r)}function Sa(e,t,n,r){e.removeEventListener(t,n,r)}const Ri=Symbol("_vei");function wa(e,t,n,r,i=null){const s=e[Ri]||(e[Ri]={}),o=s[t];if(r&&o)o.value=r;else{const[c,a]=Ba(t);if(r){const f=s[t]=Ma(r,i);xa(e,c,f,a)}else o&&(Sa(e,c,o,a),s[t]=void 0)}}const Ei=/(?:Once|Passive|Capture)$/;function Ba(e){let t;if(Ei.test(e)){t={};let r;for(;r=e.match(Ei);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let gr=0;const Pa=Promise.resolve(),Ca=()=>gr||(Pa.then(()=>gr=0),gr=Date.now());function Ma(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(_a(r,n.value),t,5,[r])};return n.value=e,n.attached=Ca(),n}function _a(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ai=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Oa=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?pa(e,r,o):t==="style"?ya(e,n,r):qn(t)?Ir(t)||wa(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ta(e,t,r,o))?(Ti(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oi(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ye(r))?Ti(e,Bt(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Oi(e,t,r,o))};function Ta(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ai(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ai(t)&&ye(n)?!1:t in e}const Ra=["ctrl","shift","alt","meta"],Ea={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ra.some(n=>e[`${n}Key`]&&!t.includes(n))},Ui=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const c=Ea[t[o]];if(c&&c(i,t))return}return e(i,...s)})},Aa={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ii=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Mt(i.key);if(t.some(o=>o===s||Aa[o]===s))return e(i)})},Ua=Te({patchProp:Oa},ha);let Di;function Ia(){return Di||(Di=Ic(Ua))}const Da=(...e)=>{const t=Ia().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=za(r);if(!i)return;const s=t._component;!q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Fa(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Fa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function za(e){return ye(e)?document.querySelector(e):e}const Va=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,Ga=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function La(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=e.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:n,format:i,alphaMode:"premultiplied"});const s=ja(n),o=Na(n,s,s,i),c={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(f=>{for(const l of f){const u=l.target,p=l.contentBoxSize[0].inlineSize,g=l.contentBoxSize[0].blockSize;u.width=Math.max(1,Math.min(p,n.limits.maxTextureDimension2D)),u.height=Math.max(1,Math.min(g,n.limits.maxTextureDimension2D))}Wa(n,r,o,c)}).observe(e),null}function ja(e){return e.createShaderModule({label:"hardcoded red triangle",code:`${Va}
${Ga}`})}function Na(e,t,n,r){return e.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Wa(e,t,n,r){r.colorAttachments[0].view=t.getCurrentTexture().createView();const i=e.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(r);s.setPipeline(n),s.draw(3),s.end();const o=i.finish();e.queue.submit([o])}const Ha=`// We declare a storage variable to read from and write to\r
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
// }`;async function $a(e){const n=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(n)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const r=qa(n),i=ka(n,r),s=new Float32Array([1,3,5]),o=Ya(n,s),c=Ka(n,s.byteLength),a=Qa(n,i.getBindGroupLayout(0),o),f=n.createCommandEncoder({label:"command encoder"}),l=f.beginComputePass({label:"basic compute pass"});l.setPipeline(i),l.setBindGroup(0,a),l.dispatchWorkgroups(s.length),l.end(),f.copyBufferToBuffer(o,0,c,0,c.size);const u=f.finish();n.queue.submit([u]),console.log("We send this Input: ",s);const p=performance.now();await c.mapAsync(GPUMapMode.READ);const g=new Float32Array(c.getMappedRange());return console.log("Computation took: ",performance.now()-p,"ms"),console.log("We got this Result: ",g),c.unmap(),null}function qa(e){return e.createShaderModule({label:"basic compute module",code:`${Ha}`})}function ka(e,t){return e.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:t,entryPoint:"computeSomething"}})}function Ya(e,t){const n=e.createBuffer({label:"work buffer",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(n,0,t),n}function Ka(e,t){return e.createBuffer({label:"result buffer",size:t,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function Qa(e,t,n){return e.createBindGroup({label:"basic bind group",layout:t,entries:[{binding:0,resource:{buffer:n}}]})}const Xa=`// ============================== //\r
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
}`,Ja=`// ============================== //\r
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
}`;async function kt(e=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const t=await navigator.gpu.requestAdapter();if(!t)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const n=i=>{const s=t.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};e=e.filter(i=>n(i));const r=await t.requestDevice({requiredFeatures:e});return r.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),r}function yn(e,t,n,r="shader module"){const i=e.createShaderModule({label:`${r} - vertex`,code:t}),s=e.createShaderModule({label:`${r} - fragment`,code:n});return{vertex:i,fragment:s}}function Za(e,t){if(!e)return null;const n=e.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:t}),r=e.createBuffer({label:"timestamp-query-resolve-buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=e.createBuffer({label:"timestamp-query-result-buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:n,resolveBuffer:r,resultBuffer:i}}function el(e,t){return!e||!t?!1:(t.resolveQuerySet(e.querySet,0,e.querySet.count,e.resolveBuffer,0),e.resultBuffer.mapState==="unmapped"&&t.copyBufferToBuffer(e.resolveBuffer,0,e.resultBuffer,0,e.resultBuffer.size),!0)}var Ve=typeof Float32Array<"u"?Float32Array:Array;function nn(){var e=new Ve(4);return Ve!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function jn(e,t,n,r){var i=new Ve(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function An(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function tl(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],c=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*c+s*a,e[1]=i*c+o*a,e[2]=r*f+s*l,e[3]=i*f+o*l,e}function Xr(){var e=new Ve(9);return Ve!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Fi(e,t,n,r,i,s,o,c,a){var f=new Ve(9);return f[0]=e,f[1]=t,f[2]=n,f[3]=r,f[4]=i,f[5]=s,f[6]=o,f[7]=c,f[8]=a,f}function zi(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function Vi(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function ge(){var e=new Ve(3);return Ve!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function nl(e){var t=new Ve(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function mr(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function Se(e,t,n){var r=new Ve(3);return r[0]=e,r[1]=t,r[2]=n,r}function Jt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function rl(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function vt(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function Cn(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function il(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e}var Vt=rl;(function(){var e=ge();return function(t,n,r,i,s,o){var c,a;for(n||(n=3),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length,c=r;c<a;c+=n)e[0]=t[c],e[1]=t[c+1],e[2]=t[c+2],s(e,e,o),t[c]=e[0],t[c+1]=e[1],t[c+2]=e[2];return t}})();function F(){var e=new Ve(2);return Ve!=Float32Array&&(e[0]=0,e[1]=0),e}function Nn(e){var t=new Ve(2);return t[0]=e[0],t[1]=e[1],t}function X(e,t){var n=new Ve(2);return n[0]=e,n[1]=t,n}function ft(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function sl(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function lt(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function ol(e){var t=e[0],n=e[1];return t*t+n*n}function We(e,t){return e[0]*t[0]+e[1]*t[1]}function cl(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e}function Me(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}var Je=sl;(function(){var e=F();return function(t,n,r,i,s,o){var c,a;for(n||(n=2),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length,c=r;c<a;c+=n)e[0]=t[c],e[1]=t[c+1],s(e,e,o),t[c]=e[0],t[c+1]=e[1];return t}})();function Ft(e){const t=Math.cos(e),n=Math.sin(e);return jn(t,n,-n,t)}function al(e,t){const n=Xr();return n[0]=e[0]*t[0],n[1]=e[0]*t[1],n[2]=e[0]*t[2],n[3]=e[1]*t[0],n[4]=e[1]*t[1],n[5]=e[1]*t[2],n[6]=e[2]*t[0],n[7]=e[2]*t[1],n[8]=e[2]*t[2],n}function ll(e,t){let n=e[0],r=e[3]/e[0],i=e[6]/e[0],s=e[4]-r*r*n,o=(e[7]-i*r*n)/s,c=e[8]-(i*i*n+o*o*s),a=t[0],f=t[1]-r*a,l=t[2]-i*a-o*f,u=a/n,p=f/s,g=l/c;const m=Se(0,0,0);return m[2]=g,m[1]=p-o*m[2],m[0]=u-r*m[1]-i*m[2],m}function re(e=0,t=1){return e===void 0?(e=0,t=1):t===void 0&&(t=e,e=0),e+Math.random()*(t-e)}function ul(e,t,n,r){return Se(re(e,e+n),re(t,t+r),re(0,Math.PI*2))}function fl(){const e=Math.floor(re(0,256)),t=Math.floor(re(0,256)),n=Math.floor(re(0,256)),r=255;return new Uint8Array([e,t,n,r])}function Mn(e,t){return e[0]*t[1]-e[1]*t[0]}function Gi(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function hl(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function dl(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return t>1e-5?[e[0]/t,e[1]/t,e[2]/t]:[0,0,0]}function pl(e,t,n){const r=Gi(t,e),i=Gi(n,e);return dl(hl(r,i))}const gl=0,ml=4,vl=0,yl=100;async function bl(e){const t=await kt();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=Li(t,"hardcoded triangle",Xa),s=Li(t,"hardcoded triangle",Ja),o=xl(t,i,s,r),c=32,a=8,f=[];for(let p=0;p<yl;p++){const g=ji(t,c);{const M=new Float32Array(c/4);M.set([re(.1),re(.1),re(.1),1],gl),M.set([re(-.9,.9),re(-.9,.9)],ml),t.queue.writeBuffer(g,0,M)}const m=new Float32Array(a/4),v=ji(t,a),B={uniformBindGroup:wl(t,o.getBindGroupLayout(0),g,v),uniformBuffer:v,uniformValues:m,scale:re(.2,.5)};f.push(B)}const l={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(p=>{for(const g of p){const m=g.target,v=g.contentBoxSize[0].inlineSize,b=g.contentBoxSize[0].blockSize;m.width=Math.max(1,Math.min(v,t.limits.maxTextureDimension2D)),m.height=Math.max(1,Math.min(b,t.limits.maxTextureDimension2D))}Sl(t,e,n,o,l,f)}).observe(e),null}function Li(e,t,n){return e.createShaderModule({label:t,code:n})}function xl(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Sl(e,t,n,r,i,s){i.colorAttachments[0].view=n.getCurrentTexture().createView();const o=e.createCommandEncoder({label:"pass encoder"}),c=o.beginRenderPass(i);c.setPipeline(r);const a=t.width/t.height;for(const l of s)l.uniformValues.set([l.scale/a,l.scale],vl),e.queue.writeBuffer(l.uniformBuffer,0,l.uniformValues),c.setBindGroup(0,l.uniformBindGroup),c.draw(3);c.end();const f=o.finish();e.queue.submit([f])}function ji(e,t){return e.createBuffer({label:"uniform buffer",size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function wl(e,t,n,r){return e.createBindGroup({label:"uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}}]})}const Bl=`// ============================== //\r
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
}`,Pl=`// ============================== //\r
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
}`;function Js(){const t=new Float32Array(8);let n=0;const r=s=>{t[n++]=s.x,t[n++]=s.y};r({x:-.5,y:-.5}),r({x:.5,y:-.5}),r({x:-.5,y:.5}),r({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:t,indexData:i,numVertices:i.length}}function Cl({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*3),c=new Uint8Array(o.buffer);let a=0,f=8;const l=v=>{o[a++]=v.x,o[a++]=v.y,a+=1,c[f++]=(v.r??0)*255,c[f++]=(v.g??0)*255,c[f++]=(v.b??0)*255,f+=9},u=[1,1,1],p=[.1,.1,.1];for(let v=0;v<=t;v++){const b=r+(v+0)*(i-r)/t,B=Math.cos(b),M=Math.sin(b);l({x:B*e,y:M*e,r:p[0],g:p[1],b:p[2]}),l({x:B*n,y:M*n,r:u[0],g:u[1],b:u[2]})}const g=new Uint16Array(t*6);let m=0;for(let v=0;v<t;++v){const b=v*2;g[m++]=b,g[m++]=b+1,g[m++]=b+2,g[m++]=b+2,g[m++]=b+1,g[m++]=b+3}return{vertexData:o,indexData:g,numVertices:g.length}}function Ml({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=(t+1)*2,o=new Float32Array(s*2);let c=0;const a=u=>{o[c++]=u.x,o[c++]=u.y};for(let u=0;u<=t;u++){const p=r+(u+0)*(i-r)/t,g=Math.cos(p),m=Math.sin(p);a({x:g*e,y:m*e}),a({x:g*n,y:m*n})}const f=new Uint16Array(t*6);let l=0;for(let u=0;u<t;++u){const p=u*2;f[l++]=p,f[l++]=p+1,f[l++]=p+2,f[l++]=p+2,f[l++]=p+1,f[l++]=p+3}return{vertexData:o,indexData:f,numVertices:f.length}}function _l({radius:e=1,subdivisions:t=24,innerRadius:n=0,startAngle:r=0,endAngle:i=Math.PI*2}={}){const s=t*3*2,o=new Float32Array(s*2);let c=0;const a=(f,l)=>{o[c++]=f,o[c++]=l};for(let f=0;f<t;f++){const l=r+(f+0)*(i-r)/t,u=r+(f+1)*(i-r)/t,p=Math.cos(l),g=Math.sin(l),m=Math.cos(u),v=Math.sin(u);a(p*e,g*e),a(m*e,v*e),a(p*n,g*n),a(p*n,g*n),a(m*e,v*e),a(m*n,v*n)}return o}function Ol(){const e=[.73,.73,.73],t=[.65,.05,.05],n=[.12,.45,.15],r=[1,1,1],i=[],s=[],o=[],c=[],a=[],f=[];let l=0;function u(b,B,M,E,S=0){return i.push(b[0],b[1],b[2]),s.push(B[0],B[1],B[2]),o.push(M[0],M[1],M[2]),a.push(E[0],E[1]),c.push(S),l++}function p(b,B,M,E,S,I=!1,V=0){let A=pl(b,B,M);I&&(A=[-A[0],-A[1],-A[2]]);const U=u(b,A,S,[0,0],V),N=u(B,A,S,[1,0],V),L=u(M,A,S,[1,1],V),Y=u(E,A,S,[0,1],V);f.push(U,N,L),f.push(U,L,Y)}function g(b,B,M,E=12,S=12,I=0){const V=l;for(let A=0;A<=E;A++){const U=A*Math.PI/E,N=Math.sin(U),L=Math.cos(U);for(let Y=0;Y<=S;Y++){const J=Y*2*Math.PI/S,k=Math.sin(J),oe=Math.cos(J)*N,$=L,j=k*N,G=1-Y/S,me=1-A/E,be=[b[0]+B*oe,b[1]+B*$,b[2]+B*j];u(be,[oe,$,j],M,[G,me],I)}}for(let A=0;A<E;A++)for(let U=0;U<S;U++){const N=V+A*(S+1)+U,L=N+S+1;f.push(N,N+1,L),f.push(L,N+1,L+1)}}p([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],e,!1,.2),p([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],e,!1,.2);const v=548.8-1;return p([343,v,227],[343,v,332],[213,v,332],[213,v,227],r),p([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],e,!1,.6),p([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],n),p([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],t),g([278,224.4,279.5],120,e,16,16,1),{vertexData:new Float32Array(i),indexData:new Uint16Array(f),numVertices:f.length,normalData:new Float32Array(s),colorData:new Float32Array(o),reflectanceData:new Float32Array(c),uvData:new Float32Array(a)}}const Tl=0,Rl=4,Un=50;async function El(e){const t=await kt();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=Ni(t,"hardcoded triangle",Bl),s=Ni(t,"hardcoded triangle",Pl),o=Al(t,i,s,r),c=32,a=8,f=c*Un,l=a*Un,u=_l({radius:1,innerRadius:.5}),p=u.byteLength,g=u.length/2,m=vr(t,f),v=vr(t,l),b=vr(t,p);t.queue.writeBuffer(b,0,u);const B=[];{const V=new Float32Array(f/4);for(let A=0;A<Un;A++){const U=A*(c/4);V.set([re(.1),re(.1),re(.1),1],U+Tl),V.set([re(-.9,.9),re(-.9,.9)],U+Rl);const N={scale:re(.1,.4)};B.push(N)}t.queue.writeBuffer(m,0,V)}const M=new Float32Array(l/4),E=Il(t,o.getBindGroupLayout(0),m,v,b),S={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(V=>{for(const A of V){const U=A.target,N=A.contentBoxSize[0].inlineSize,L=A.contentBoxSize[0].blockSize;U.width=Math.max(1,Math.min(N,t.limits.maxTextureDimension2D)),U.height=Math.max(1,Math.min(L,t.limits.maxTextureDimension2D))}Ul(t,e,n,o,S,B,E,M,v,g)}).observe(e),null}function Ni(e,t,n){return e.createShaderModule({label:t,code:n})}function Al(e,t,n,r){return e.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function Ul(e,t,n,r,i,s,o,c,a,f){i.colorAttachments[0].view=n.getCurrentTexture().createView();const l=e.createCommandEncoder({label:"pass encoder"}),u=l.beginRenderPass(i);u.setPipeline(r);const p=t.width/t.height;s.forEach((m,v)=>{const b=2*v;c.set([m.scale/p,m.scale],b)}),e.queue.writeBuffer(a,0,c),u.setBindGroup(0,o),u.draw(f,Un),u.end();const g=l.finish();e.queue.submit([g])}function vr(e,t){return e.createBuffer({label:"storage buffer",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function Il(e,t,n,r,i){return e.createBindGroup({label:"storage bind group",layout:t,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:r}},{binding:2,resource:{buffer:i}}]})}const Dl=`// ============================== //\r
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
}`,Fl=`// ============================== //\r
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
}`,zl=0,Vl=1,In=50;async function Gl(e){const t=await kt();if(t==null){console.log("Was not able to acquire a WebGPU device.");return}const n=e.getContext("webgpu"),r=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:t,format:r,alphaMode:"premultiplied"});const i=Wi(t,"hardcoded triangle",Dl),s=Wi(t,"hardcoded triangle",Fl),o=Ll(t,i,s,r),c=12,a=8,f=c*In,l=a*In,u=Cl({radius:1,innerRadius:.5}),p=u.vertexData.byteLength,g=u.numVertices,m=yr(t,f),v=yr(t,l),b=yr(t,p),B=Nl(t,u.indexData.byteLength);t.queue.writeBuffer(b,0,u.vertexData),t.queue.writeBuffer(B,0,u.indexData);const M=[];{const V=new Uint8Array(f),A=new Float32Array(V.buffer);for(let U=0;U<In;U++){const N=U*c,L=U*(c/4);V.set([Math.round(re(.1)*255),Math.round(re(.1)*255),Math.round(re(.1)*255),255],N+zl),A.set([re(-.9,.9),re(-.9,.9)],L+Vl);const Y={scale:re(.1,.4)};M.push(Y)}t.queue.writeBuffer(m,0,A)}const E=new Float32Array(l/4),S={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(V=>{for(const A of V){const U=A.target,N=A.contentBoxSize[0].inlineSize,L=A.contentBoxSize[0].blockSize;U.width=Math.max(1,Math.min(N,t.limits.maxTextureDimension2D)),U.height=Math.max(1,Math.min(L,t.limits.maxTextureDimension2D))}jl(t,e,n,o,S,M,m,E,v,g,b,B)}).observe(e),null}function Wi(e,t,n){return e.createShaderModule({label:t,code:n})}function Ll(e,t,n,r){return e.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:t,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:n,entryPoint:"fs",targets:[{format:r}]}})}function jl(e,t,n,r,i,s,o,c,a,f,l,u){i.colorAttachments[0].view=n.getCurrentTexture().createView();const p=e.createCommandEncoder({label:"pass encoder"}),g=p.beginRenderPass(i);g.setPipeline(r),g.setVertexBuffer(0,l),g.setVertexBuffer(1,o),g.setVertexBuffer(2,a),g.setIndexBuffer(u,"uint16");const m=t.width/t.height;s.forEach((b,B)=>{const M=2*B;c.set([b.scale/m,b.scale],M)}),e.queue.writeBuffer(a,0,c),g.drawIndexed(f,In),g.end();const v=p.finish();e.queue.submit([v])}function yr(e,t){return e.createBuffer({label:"vertex buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function Nl(e,t){return e.createBuffer({label:"index buffer",size:t,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const Wl=`// ============================== //\r
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
}`,Hl=`// ============================== //\r
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
}`;function Zs(){return document.getElementById("info")}function Wn(){return document.getElementById("utils")}let Ce=1e-6;const $l=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);$l.get(Float32Array);let rr=Float32Array;function qe(e,t,n){const r=new rr(3);return e!==void 0&&(r[0]=e,t!==void 0&&(r[1]=t,n!==void 0&&(r[2]=n))),r}function Jr(e,t,n){return n=n||new rr(3),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function qt(e,t,n){n=n||new rr(3);const r=e[2]*t[0]-e[0]*t[2],i=e[0]*t[1]-e[1]*t[0];return n[0]=e[1]*t[2]-e[2]*t[1],n[1]=r,n[2]=i,n}function dt(e,t){t=t||new rr(3);const n=e[0],r=e[1],i=e[2],s=Math.sqrt(n*n+r*r+i*i);return s>1e-5?(t[0]=n/s,t[1]=r/s,t[2]=i/s):(t[0]=0,t[1]=0,t[2]=0),t}let se=Float32Array;function ql(e){const t=se;return se=e,t}function kl(e,t,n,r,i,s,o,c,a,f,l,u,p,g,m,v){const b=new se(16);return e!==void 0&&(b[0]=e,t!==void 0&&(b[1]=t,n!==void 0&&(b[2]=n,r!==void 0&&(b[3]=r,i!==void 0&&(b[4]=i,s!==void 0&&(b[5]=s,o!==void 0&&(b[6]=o,c!==void 0&&(b[7]=c,a!==void 0&&(b[8]=a,f!==void 0&&(b[9]=f,l!==void 0&&(b[10]=l,u!==void 0&&(b[11]=u,p!==void 0&&(b[12]=p,g!==void 0&&(b[13]=g,m!==void 0&&(b[14]=m,v!==void 0&&(b[15]=v)))))))))))))))),b}function Yl(e,t){return t=t||new se(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=0,t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Kl(e,t){t=t||new se(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,c=r+r,a=i+i,f=n*o,l=r*o,u=r*c,p=i*o,g=i*c,m=i*a,v=s*o,b=s*c,B=s*a;return t[0]=1-u-m,t[1]=l+B,t[2]=p-b,t[3]=0,t[4]=l-B,t[5]=1-f-m,t[6]=g+v,t[7]=0,t[8]=p+b,t[9]=g-v,t[10]=1-f-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ql(e,t){return t=t||new se(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function Zr(e,t){return t=t||new se(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}const Xl=Zr;function Jl(e,t){return Math.abs(e[0]-t[0])<Ce&&Math.abs(e[1]-t[1])<Ce&&Math.abs(e[2]-t[2])<Ce&&Math.abs(e[3]-t[3])<Ce&&Math.abs(e[4]-t[4])<Ce&&Math.abs(e[5]-t[5])<Ce&&Math.abs(e[6]-t[6])<Ce&&Math.abs(e[7]-t[7])<Ce&&Math.abs(e[8]-t[8])<Ce&&Math.abs(e[9]-t[9])<Ce&&Math.abs(e[10]-t[10])<Ce&&Math.abs(e[11]-t[11])<Ce&&Math.abs(e[12]-t[12])<Ce&&Math.abs(e[13]-t[13])<Ce&&Math.abs(e[14]-t[14])<Ce&&Math.abs(e[15]-t[15])<Ce}function Zl(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function eo(e){return e=e||new se(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function eu(e,t){if(t=t||new se(16),t===e){let M;return M=e[1],e[1]=e[4],e[4]=M,M=e[2],e[2]=e[8],e[8]=M,M=e[3],e[3]=e[12],e[12]=M,M=e[6],e[6]=e[9],e[9]=M,M=e[7],e[7]=e[13],e[13]=M,M=e[11],e[11]=e[14],e[14]=M,t}const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],c=e[5],a=e[6],f=e[7],l=e[8],u=e[9],p=e[10],g=e[11],m=e[12],v=e[13],b=e[14],B=e[15];return t[0]=n,t[1]=o,t[2]=l,t[3]=m,t[4]=r,t[5]=c,t[6]=u,t[7]=v,t[8]=i,t[9]=a,t[10]=p,t[11]=b,t[12]=s,t[13]=f,t[14]=g,t[15]=B,t}function to(e,t){t=t||new se(16);const n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],c=e[5],a=e[6],f=e[7],l=e[8],u=e[9],p=e[10],g=e[11],m=e[12],v=e[13],b=e[14],B=e[15],M=p*B,E=b*g,S=a*B,I=b*f,V=a*g,A=p*f,U=i*B,N=b*s,L=i*g,Y=p*s,J=i*f,k=a*s,Q=l*v,oe=m*u,$=o*v,j=m*c,G=o*u,me=l*c,be=n*v,Z=m*r,ce=n*u,Be=l*r,Ge=n*c,Ue=o*r,xe=M*c+I*u+V*v-(E*c+S*u+A*v),we=E*r+U*u+Y*v-(M*r+N*u+L*v),ve=S*r+N*c+J*v-(I*r+U*c+k*v),ot=A*r+L*c+k*u-(V*r+Y*c+J*u),ae=1/(n*xe+o*we+l*ve+m*ot);return t[0]=ae*xe,t[1]=ae*we,t[2]=ae*ve,t[3]=ae*ot,t[4]=ae*(E*o+S*l+A*m-(M*o+I*l+V*m)),t[5]=ae*(M*n+N*l+L*m-(E*n+U*l+Y*m)),t[6]=ae*(I*n+U*o+k*m-(S*n+N*o+J*m)),t[7]=ae*(V*n+Y*o+J*l-(A*n+L*o+k*l)),t[8]=ae*(Q*f+j*g+G*B-(oe*f+$*g+me*B)),t[9]=ae*(oe*s+be*g+Be*B-(Q*s+Z*g+ce*B)),t[10]=ae*($*s+Z*f+Ge*B-(j*s+be*f+Ue*B)),t[11]=ae*(me*s+ce*f+Ue*g-(G*s+Be*f+Ge*g)),t[12]=ae*($*p+me*b+oe*a-(G*b+Q*a+j*p)),t[13]=ae*(ce*b+Q*i+Z*p-(be*p+Be*b+oe*i)),t[14]=ae*(be*a+Ue*b+j*i-(Ge*b+$*i+Z*a)),t[15]=ae*(Ge*p+G*i+Be*a-(ce*a+Ue*p+me*i)),t}function tu(e){const t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],c=e[6],a=e[7],f=e[8],l=e[9],u=e[10],p=e[11],g=e[12],m=e[13],v=e[14],b=e[15],B=u*b,M=v*p,E=c*b,S=v*a,I=c*p,V=u*a,A=r*b,U=v*i,N=r*p,L=u*i,Y=r*a,J=c*i,k=B*o+S*l+I*m-(M*o+E*l+V*m),Q=M*n+A*l+L*m-(B*n+U*l+N*m),oe=E*n+U*o+Y*m-(S*n+A*o+J*m),$=V*n+N*o+J*l-(I*n+L*o+Y*l);return t*k+s*Q+f*oe+g*$}const nu=to;function no(e,t,n){n=n||new se(16);const r=e[0],i=e[1],s=e[2],o=e[3],c=e[4],a=e[5],f=e[6],l=e[7],u=e[8],p=e[9],g=e[10],m=e[11],v=e[12],b=e[13],B=e[14],M=e[15],E=t[0],S=t[1],I=t[2],V=t[3],A=t[4],U=t[5],N=t[6],L=t[7],Y=t[8],J=t[9],k=t[10],Q=t[11],oe=t[12],$=t[13],j=t[14],G=t[15];return n[0]=r*E+c*S+u*I+v*V,n[1]=i*E+a*S+p*I+b*V,n[2]=s*E+f*S+g*I+B*V,n[3]=o*E+l*S+m*I+M*V,n[4]=r*A+c*U+u*N+v*L,n[5]=i*A+a*U+p*N+b*L,n[6]=s*A+f*U+g*N+B*L,n[7]=o*A+l*U+m*N+M*L,n[8]=r*Y+c*J+u*k+v*Q,n[9]=i*Y+a*J+p*k+b*Q,n[10]=s*Y+f*J+g*k+B*Q,n[11]=o*Y+l*J+m*k+M*Q,n[12]=r*oe+c*$+u*j+v*G,n[13]=i*oe+a*$+p*j+b*G,n[14]=s*oe+f*$+g*j+B*G,n[15]=o*oe+l*$+m*j+M*G,n}const ru=no;function iu(e,t,n){return n=n||eo(),e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11]),n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function su(e,t){return t=t||qe(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function ou(e,t,n){n=n||qe();const r=t*4;return n[0]=e[r+0],n[1]=e[r+1],n[2]=e[r+2],n}function cu(e,t,n,r){r!==e&&(r=Zr(e,r));const i=n*4;return r[i+0]=t[0],r[i+1]=t[1],r[i+2]=t[2],r}function au(e,t){t=t||qe();const n=e[0],r=e[1],i=e[2],s=e[4],o=e[5],c=e[6],a=e[8],f=e[9],l=e[10];return t[0]=Math.sqrt(n*n+r*r+i*i),t[1]=Math.sqrt(s*s+o*o+c*c),t[2]=Math.sqrt(a*a+f*f+l*l),t}function lu(e,t,n,r,i){i=i||new se(16);const s=Math.tan(Math.PI*.5-.5*e);if(i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,r===1/0)i[10]=-1,i[14]=-n;else{const o=1/(n-r);i[10]=r*o,i[14]=r*n*o}return i}function uu(e,t,n,r,i,s,o){return o=o||new se(16),o[0]=2/(t-e),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(r-n),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(i-s),o[11]=0,o[12]=(t+e)/(e-t),o[13]=(r+n)/(n-r),o[14]=i/(i-s),o[15]=1,o}function fu(e,t,n,r,i,s,o){o=o||new se(16);const c=t-e,a=r-n,f=i-s;return o[0]=2*i/c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/a,o[6]=0,o[7]=0,o[8]=(e+t)/c,o[9]=(r+n)/a,o[10]=s/f,o[11]=-1,o[12]=0,o[13]=0,o[14]=i*s/f,o[15]=0,o}let le,de,ne;function hu(e,t,n,r){return r=r||new se(16),le=le||qe(),de=de||qe(),ne=ne||qe(),dt(Jr(t,e,ne),ne),dt(qt(n,ne,le),le),dt(qt(ne,le,de),de),r[0]=le[0],r[1]=le[1],r[2]=le[2],r[3]=0,r[4]=de[0],r[5]=de[1],r[6]=de[2],r[7]=0,r[8]=ne[0],r[9]=ne[1],r[10]=ne[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function du(e,t,n,r){return r=r||new se(16),le=le||qe(),de=de||qe(),ne=ne||qe(),dt(Jr(e,t,ne),ne),dt(qt(n,ne,le),le),dt(qt(ne,le,de),de),r[0]=le[0],r[1]=le[1],r[2]=le[2],r[3]=0,r[4]=de[0],r[5]=de[1],r[6]=de[2],r[7]=0,r[8]=ne[0],r[9]=ne[1],r[10]=ne[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function pu(e,t,n,r){return r=r||new se(16),le=le||qe(),de=de||qe(),ne=ne||qe(),dt(Jr(e,t,ne),ne),dt(qt(n,ne,le),le),dt(qt(ne,le,de),de),r[0]=le[0],r[1]=de[0],r[2]=ne[0],r[3]=0,r[4]=le[1],r[5]=de[1],r[6]=ne[1],r[7]=0,r[8]=le[2],r[9]=de[2],r[10]=ne[2],r[11]=0,r[12]=-(le[0]*e[0]+le[1]*e[1]+le[2]*e[2]),r[13]=-(de[0]*e[0]+de[1]*e[1]+de[2]*e[2]),r[14]=-(ne[0]*e[0]+ne[1]*e[1]+ne[2]*e[2]),r[15]=1,r}function gu(e,t){return t=t||new se(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function mu(e,t,n){n=n||new se(16);const r=t[0],i=t[1],s=t[2],o=e[0],c=e[1],a=e[2],f=e[3],l=e[4],u=e[5],p=e[6],g=e[7],m=e[8],v=e[9],b=e[10],B=e[11],M=e[12],E=e[13],S=e[14],I=e[15];return e!==n&&(n[0]=o,n[1]=c,n[2]=a,n[3]=f,n[4]=l,n[5]=u,n[6]=p,n[7]=g,n[8]=m,n[9]=v,n[10]=b,n[11]=B),n[12]=o*r+l*i+m*s+M,n[13]=c*r+u*i+v*s+E,n[14]=a*r+p*i+b*s+S,n[15]=f*r+g*i+B*s+I,n}function vu(e,t){t=t||new se(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function yu(e,t,n){n=n||new se(16);const r=e[4],i=e[5],s=e[6],o=e[7],c=e[8],a=e[9],f=e[10],l=e[11],u=Math.cos(t),p=Math.sin(t);return n[4]=u*r+p*c,n[5]=u*i+p*a,n[6]=u*s+p*f,n[7]=u*o+p*l,n[8]=u*c-p*r,n[9]=u*a-p*i,n[10]=u*f-p*s,n[11]=u*l-p*o,e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function bu(e,t){t=t||new se(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function xu(e,t,n){n=n||new se(16);const r=e[0],i=e[1],s=e[2],o=e[3],c=e[8],a=e[9],f=e[10],l=e[11],u=Math.cos(t),p=Math.sin(t);return n[0]=u*r-p*c,n[1]=u*i-p*a,n[2]=u*s-p*f,n[3]=u*o-p*l,n[8]=u*c+p*r,n[9]=u*a+p*i,n[10]=u*f+p*s,n[11]=u*l+p*o,e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Su(e,t){t=t||new se(16);const n=Math.cos(e),r=Math.sin(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function wu(e,t,n){n=n||new se(16);const r=e[0],i=e[1],s=e[2],o=e[3],c=e[4],a=e[5],f=e[6],l=e[7],u=Math.cos(t),p=Math.sin(t);return n[0]=u*r+p*c,n[1]=u*i+p*a,n[2]=u*s+p*f,n[3]=u*o+p*l,n[4]=u*c-p*r,n[5]=u*a-p*i,n[6]=u*f-p*s,n[7]=u*l-p*o,e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function ro(e,t,n){n=n||new se(16);let r=e[0],i=e[1],s=e[2];const o=Math.sqrt(r*r+i*i+s*s);r/=o,i/=o,s/=o;const c=r*r,a=i*i,f=s*s,l=Math.cos(t),u=Math.sin(t),p=1-l;return n[0]=c+(1-c)*l,n[1]=r*i*p+s*u,n[2]=r*s*p-i*u,n[3]=0,n[4]=r*i*p-s*u,n[5]=a+(1-a)*l,n[6]=i*s*p+r*u,n[7]=0,n[8]=r*s*p+i*u,n[9]=i*s*p-r*u,n[10]=f+(1-f)*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}const Bu=ro;function io(e,t,n,r){r=r||new se(16);let i=t[0],s=t[1],o=t[2];const c=Math.sqrt(i*i+s*s+o*o);i/=c,s/=c,o/=c;const a=i*i,f=s*s,l=o*o,u=Math.cos(n),p=Math.sin(n),g=1-u,m=a+(1-a)*u,v=i*s*g+o*p,b=i*o*g-s*p,B=i*s*g-o*p,M=f+(1-f)*u,E=s*o*g+i*p,S=i*o*g+s*p,I=s*o*g-i*p,V=l+(1-l)*u,A=e[0],U=e[1],N=e[2],L=e[3],Y=e[4],J=e[5],k=e[6],Q=e[7],oe=e[8],$=e[9],j=e[10],G=e[11];return r[0]=m*A+v*Y+b*oe,r[1]=m*U+v*J+b*$,r[2]=m*N+v*k+b*j,r[3]=m*L+v*Q+b*G,r[4]=B*A+M*Y+E*oe,r[5]=B*U+M*J+E*$,r[6]=B*N+M*k+E*j,r[7]=B*L+M*Q+E*G,r[8]=S*A+I*Y+V*oe,r[9]=S*U+I*J+V*$,r[10]=S*N+I*k+V*j,r[11]=S*L+I*Q+V*G,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}const Pu=io;function Cu(e,t){return t=t||new se(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Mu(e,t,n){n=n||new se(16);const r=t[0],i=t[1],s=t[2];return n[0]=r*e[0],n[1]=r*e[1],n[2]=r*e[2],n[3]=r*e[3],n[4]=i*e[4],n[5]=i*e[5],n[6]=i*e[6],n[7]=i*e[7],n[8]=s*e[8],n[9]=s*e[9],n[10]=s*e[10],n[11]=s*e[11],e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}var at=Object.freeze({__proto__:null,aim:hu,axisRotate:io,axisRotation:ro,cameraAim:du,clone:Xl,copy:Zr,create:kl,determinant:tu,equals:Zl,equalsApproximately:Jl,fromMat3:Yl,fromQuat:Kl,frustum:fu,getAxis:ou,getScaling:au,getTranslation:su,identity:eo,inverse:to,invert:nu,lookAt:pu,mul:ru,multiply:no,negate:Ql,ortho:uu,perspective:lu,rotate:Pu,rotateX:yu,rotateY:xu,rotateZ:wu,rotation:Bu,rotationX:vu,rotationY:bu,rotationZ:Su,scale:Mu,scaling:Cu,setAxis:cu,setDefaultType:ql,setTranslation:iu,translate:mu,translation:gu,transpose:eu});async function _u(e){const t=new Hn;return await t.initialize(e),t}class Hn{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=Zs();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(t){if(this.canvas=t,this.device=await kt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=yn(this.device,Wl,Hl,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(t){if(t!==null)return new Promise((n,r)=>{if(t.addEventListener("error",r),"requestVideoFrameCallback"in t)t.requestVideoFrameCallback((i,s)=>{n()});else{const i=s=>{s.currentTime>0?n():requestAnimationFrame(()=>i(s))};i(t)}t.play().catch(r)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const t=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),n=8,r=8,i=64,s=n*this.numberOfObjects,o=r*this.numberOfObjects,c=i*this.numberOfObjects,a=Js(),f=a.vertexData.byteLength,l=a.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:f,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,a.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:a.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,a.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const u=[];{const E=new Float32Array(s/4);for(let S=0;S<this.numberOfObjects;S++){const I=S*(n/4);E.set([re(-.9,.9),re(-.9,.9)],I);const V={scale:re(.2,.6)};u.push(V)}this.perInstanceOffsets=new Float32Array(E),this.device.queue.writeBuffer(this.staticBuffer,0,E)}const p=new Float32Array(o/4),g=new Float32Array(c/4);let m=0,v=0,b=0;const B=1e4,M=E=>{if(this.canvas===null||this.device===null||this.context===null)return;const S=E-m;v+=S,m=E;const I=performance.now(),V=60*Math.PI/180,A=this.canvas.width/this.canvas.height,L=at.perspective(V,A,.1,2e3),Y=[0,0,2],J=[0,1,0],k=[0,0,0],Q=at.lookAt(Y,k,J),$=at.multiply(L,Q),j=v/B*2*Math.PI,G=this.canvas.width/this.canvas.height*.5;u.forEach((we,ve)=>{const ot=ve*(r/4),ae=ve*(i/4);p.set([we.scale,we.scale],ot);const Yt=this.perInstanceOffsets[2*ve+0],h=this.perInstanceOffsets[2*ve+1],d=at.create();at.copy($,d),at.translate(d,[Yt,h,0],d),at.rotateX(d,j,d),at.rotateY(d,.2*Math.sin(j),d),at.scale(d,[2*G,1*G,1],d),g.set(d,ae)});const be={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},Z=this.device.createCommandEncoder({label:"Render Quad Encoder"}),ce=Z.beginRenderPass(be);ce.setPipeline(this.simpleTexturePipeline),ce.setVertexBuffer(0,this.vertexBuffer),ce.setVertexBuffer(1,this.staticBuffer),ce.setVertexBuffer(2,this.changingBuffer),ce.setIndexBuffer(this.indexBuffer,"uint16");const Be=this.device.importExternalTexture({source:this.video}),Ge=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:t},{binding:1,resource:Be},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,p),this.device.queue.writeBuffer(this.storageBuffer,0,g),ce.setBindGroup(0,Ge),ce.drawIndexed(l,this.numberOfObjects),ce.end(),this.timestampQuerySet!=null&&(Z.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&Z.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const Ue=Z.finish();this.device.queue.submit([Ue]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const we=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());b=Number(we[1]-we[0]),this.timestampQuerySet.resultBuffer.unmap()});const xe=performance.now()-I;if(this.infoElement&&this.device){const we=`                FPS: ${(1e3/S).toFixed(1)}
                JS Time: ${xe.toFixed(1)} ms
                GPU Time: ${(b/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=we}this.animationFrameId=requestAnimationFrame(M)};this.animationFrameId=requestAnimationFrame(M),this.resizeObserver=new ResizeObserver(E=>{for(const S of E){const I=S.contentBoxSize[0].inlineSize,V=S.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(I,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(V,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.slider){const t=Wn();if(t!==null)for(;t.firstChild;)t.removeChild(t.firstChild);this.slider=null}if(this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const t=Wn();if(t===null)return;const n=document.createElement("label");n.textContent=`Number of Objects: ${this.numberOfObjects}`,n.htmlFor="numObjectsSlider",t.appendChild(n),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=Hn.minObjects.toString(),this.slider.max=Hn.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",t.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),n.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let r=!1;const i=async()=>{if(!r){r=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{r=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const Ou=`// ============================== //\r
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
}`,Tu=`// ============================== //\r
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
}`,Ru=`// ============================== //\r
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
`,Eu=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class bn{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(t,n){this.bodyA=t,this.bodyB=n;for(let r=0;r<bn.MAX_ROWS;++r){this.J.push(Se(0,0,0));const i=Xr();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let t=0;t<bn.MAX_ROWS;++t)this.stiffness[t]=0,this.penalty[t]=0,this.lambda[t]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(t){console.warn("This method should not be called directly.")}computeDerivatives(t){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class Au{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=Se(0,0,0);inertial=Se(0,0,0);id=-1;forces=[];constructor(t,n,r,i,s,o){this.width=t[0],this.height=t[1],this.density=r,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*We(t,t)/12,this.radius=Math.sqrt(We(t,t))*.5,this.color=n}getScale(){return X(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return X(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(t){this.staticBody||(this.velocity=t)}getRotationMatrix(){const t=Math.cos(this.position[2]),n=Math.sin(this.position[2]);return jn(t,n,-n,t)}setPosition(t){this.staticBody||(this.position=t)}setColor(t){this.color=t}isConstrainedTo(t){for(let n=0;n<this.forces.length;++n){const r=this.forces[n];if(r.bodyA===this&&r.bodyB===t||r.bodyB===this&&r.bodyA===t)return!0}return!1}}const Fe=12,je=8,Tt=4,Uu=8,Iu=6,Hi=256,Du=16;class et{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(Hi*(Fe+je)/4);numInstances=0;maxInstances=Hi;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(t,n){this.canvas=t,this.gameManager=n}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await kt(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(t=>{for(const n of t){const r=n.contentBoxSize[0].inlineSize,i=n.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(r,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(t){return this.addInstance(t.getPosition(),t.getScale(),t.getColor())}addInstance(t,n,r){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*Tt,r);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,t),this.updateInstanceScale(s,n),s}removeInstance(t){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const n=this.idToIndexMap.get(t);if(n===void 0)return;const r=this.numInstances-1;if(n!==r){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,r*Tt,this.staticBuffer,n*Tt,Tt),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,o=n*(Fe+je)/4,c=r*(Fe+je)/4;s[o+0]=s[c+0],s[o+1]=s[c+1],s[o+2]=s[c+2],s[o+3]=s[c+3];const a=this.indexToId[r];this.indexToId[n]=a,this.idToIndexMap.set(a,n)}this.idToIndexMap.delete(t),this.indexToId.pop(),this.numInstances--}updateInstanceScale(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Fe+je)/4+3]=n[0],this.changingCpuArray[r*(Fe+je)/4+4]=n[1])}updateInstancePosition(t,n){const r=this.idToIndexMap.get(t);r!==void 0&&(this.changingCpuArray[r*(Fe+je)/4+0]=n[0],this.changingCpuArray[r*(Fe+je)/4+1]=n[1],this.changingCpuArray[r*(Fe+je)/4+2]=n[2])}updateContacts(t){if(this.numContacts=Math.min(t.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let n=0;n<this.numContacts;++n)this.contactPositions[n*2+0]=t[n].pos[0],this.contactPositions[n*2+1]=t[n].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const t=this.context.getCurrentTexture().createView(),n={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:t,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},r=this.device.createCommandEncoder({label:"canvas render encoder"}),i=r.beginRenderPass(n);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(Fe+je);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(Iu,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!el(this.timestampQuerySet,r)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([r.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const t=this.maxInstances*Tt,n=this.maxInstances*(Fe+je),r=Js(),i=r.vertexData.byteLength,s=r.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,r.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,r.indexData);const o=Ml({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=Za(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:Du,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const c=new Float32Array([et.xWorldSize,et.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,c.buffer,c.byteOffset,c.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const t=this.maxInstances*Tt,n=this.maxInstances*(Fe+je),r=this.device.createBuffer({label:"Extended static instance buffer",size:t,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:n,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,r,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(Fe+je)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=r,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=yn(this.device,Ou,Tu,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[t]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:Uu,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:Tt,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:Fe+je,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:Fe,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:t,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=yn(this.device,Ru,Eu,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const Fu=5e-4,zu=.01,Et=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),Vu=e=>{const t=e.inEdge1;e.inEdge1=e.inEdge2,e.inEdge2=t;const n=e.outEdge1;e.outEdge1=e.outEdge2,e.outEdge2=n};function fn(e){return{inEdge1:e.inEdge1,outEdge1:e.outEdge1,inEdge2:e.inEdge2,outEdge2:e.outEdge2,ID:e.ID}}function so(e){return e.inEdge1&255|(e.outEdge1&255)<<8|(e.inEdge2&255)<<16|(e.outEdge2&255)<<24}function $i(){return{details:Et(),pA:F(),pB:F(),n:F(),JacNormA:ge(),JacNormB:ge(),JacTangA:ge(),JacTangB:ge(),C0:F(),stick:!1}}const qi=(e,t,n,r,i)=>{let s=0;const o=We(n,t[0].v)-r,c=We(n,t[1].v)-r;if(o<=0&&(e[s++]={v:Nn(t[0].v),cd:fn(t[0].cd)}),c<=0&&(e[s++]={v:Nn(t[1].v),cd:fn(t[1].cd)}),o*c<0){const a=o/(o-c),f=cl(F(),t[0].v,t[1].v,a);let l=fn(o>0?t[0].cd:t[1].cd);o>0?(l.inEdge1=i,l.inEdge2=0):(l.outEdge1=i,l.outEdge2=0),l.ID=so(l),e[s++]={v:f,cd:l}}return s},_n=(e,t,n,r,i)=>{const s=An(nn(),r),o=Me(F(),i,s);lt(o,o,-1);const c=X(Math.abs(o[0]),Math.abs(o[1]));c[0]>c[1]?o[0]>0?(e[0].v=X(t[0],-t[1]),e[0].cd.inEdge2=3,e[0].cd.outEdge2=4,e[1].v=X(t[0],t[1]),e[1].cd.inEdge2=4,e[1].cd.outEdge2=1):(e[0].v=X(-t[0],t[1]),e[0].cd.inEdge2=1,e[0].cd.outEdge2=2,e[1].v=X(-t[0],-t[1]),e[1].cd.inEdge2=2,e[1].cd.outEdge2=3):o[1]>0?(e[0].v=X(t[0],t[1]),e[0].cd.inEdge2=4,e[0].cd.outEdge2=1,e[1].v=X(-t[0],t[1]),e[1].cd.inEdge2=1,e[1].cd.outEdge2=2):(e[0].v=X(-t[0],-t[1]),e[0].cd.inEdge2=2,e[0].cd.outEdge2=3,e[1].v=X(t[0],-t[1]),e[1].cd.inEdge2=3,e[1].cd.outEdge2=4),e[0].v=ft(F(),n,Me(F(),e[0].v,r)),e[1].v=ft(F(),n,Me(F(),e[1].v,r))};class ei extends bn{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(t,n){super(t,n);for(let r=0;r<bn.MAX_ROWS;++r)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const t=this.penalty.slice(),n=this.lambda.slice(),r=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=ei.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const o=this.contacts[s].details.ID,c=this.oldContacts.findIndex(a=>a.details.ID===o);c!==-1&&(this.penalty[s*2+0]=t[c*2+0],this.penalty[s*2+1]=t[c*2+1],this.lambda[s*2+0]=n[c*2+0],this.lambda[s*2+1]=n[c*2+1],this.contacts[s].stick=r[c],this.contacts[s].stick&&(this.contacts[s].pA=Nn(this.oldContacts[c].pA),this.contacts[s].pB=Nn(this.oldContacts[c].pB)))}for(let s=0;s<this.contacts.length;++s){const o=this.contacts[s].n,c=X(o[1],-o[0]),a=jn(o[0],o[1],c[0],c[1]),f=Me(F(),this.contacts[s].pA,Ft(this.bodyA.getPosition()[2])),l=Me(F(),this.contacts[s].pB,Ft(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=Se(a[0],a[2],Mn(f,o)),this.contacts[s].JacNormB=Se(-a[0],-a[2],-Mn(l,o)),this.contacts[s].JacTangA=Se(a[1],a[3],Mn(f,c)),this.contacts[s].JacTangB=Se(-a[1],-a[3],-Mn(l,c));const u=Je(F(),ft(F(),this.bodyA.getPos2(),f),ft(F(),this.bodyB.getPos2(),l));this.contacts[s].C0=Me(this.contacts[s].C0,u,a),this.contacts[s].C0=ft(this.contacts[s].C0,this.contacts[s].C0,X(Fu,0))}return this.contacts.length>0}computeConstraints(t){for(let n=0;n<this.contacts.length;++n){const r=Vt(ge(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=Vt(ge(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=lt(F(),this.contacts[n].C0,1-t);this.C[n*2+0]=s[0]+Cn(this.contacts[n].JacNormA,r)+Cn(this.contacts[n].JacNormB,i),this.C[n*2+1]=s[1]+Cn(this.contacts[n].JacTangA,r)+Cn(this.contacts[n].JacTangB,i);const o=Math.abs(this.lambda[n*2+0])*this.friction;this.fmax[n*2+1]=o,this.fmin[n*2+1]=-o,this.contacts[n].stick=Math.abs(this.lambda[n*2+1])<o&&Math.abs(this.contacts[n].C0[1])<zu}}computeDerivatives(t){for(let n=0;n<this.contacts.length;++n)t===this.bodyA?(this.J[n*2+0]=this.contacts[n].JacNormA,this.J[n*2+1]=this.contacts[n].JacTangA):(this.J[n*2+0]=this.contacts[n].JacNormB,this.J[n*2+1]=this.contacts[n].JacTangB)}static collide(t,n,r){r.length=0;let i=F();const s=Ft(t.getPosition()[2]),o=Ft(n.getPosition()[2]),c=An(nn(),s),a=An(nn(),o),f=lt(F(),t.getScale(),.5),l=lt(F(),n.getScale(),.5),u=t.getPos2(),p=n.getPos2(),g=t.getRotationMatrix(),m=n.getRotationMatrix(),v=Je(F(),p,u),b=Me(F(),v,c),B=Me(F(),v,a),M=X(Math.abs(b[0]),Math.abs(b[1])),E=X(Math.abs(B[0]),Math.abs(B[1])),S=tl(nn(),c,m),I=jn(Math.abs(S[0]),Math.abs(S[1]),Math.abs(S[2]),Math.abs(S[3])),V=An(nn(),I),A=Je(F(),M,ft(F(),f,Me(F(),l,I))),U=Je(F(),E,ft(F(),l,Me(F(),f,V)));if(A[0]>0||A[1]>0||U[0]>0||U[1]>0)return 0;let N,L;N=1,L=A[0],b[0]>0?i=X(g[0],g[1]):i=X(-g[0],-g[1]);const Y=.95,J=.01;A[1]>Y*L+J*f[1]&&(N=2,L=A[1],b[1]>0?i=X(g[2],g[3]):i=X(-g[2],-g[3])),U[0]>Y*L+J*l[0]&&(N=3,L=U[0],B[0]>0?i=X(m[0],m[1]):i=X(-m[0],-m[1])),U[1]>Y*L+J*l[1]&&(N=4,L=U[1],B[1]>0?i=X(m[2],m[3]):i=X(-m[2],-m[3]));let k,Q;const oe=[{cd:Et(),v:F()},{cd:Et(),v:F()}];let $,j,G,me=0,be=0,Z;switch(N){case 1:k=i,$=We(u,k)+f[0],Q=X(g[2],g[3]),Z=We(u,Q),j=-Z+f[1],G=Z+f[1],me=3,be=1,_n(oe,l,p,m,k);break;case 2:k=i,$=We(u,k)+f[1],Q=X(g[0],g[1]),Z=We(u,Q),j=-Z+f[0],G=Z+f[0],me=2,be=4,_n(oe,l,p,m,k);break;case 3:k=lt(F(),i,-1),$=We(p,k)+l[0],Q=X(m[2],m[3]),Z=We(p,Q),j=-Z+l[1],G=Z+l[1],me=3,be=1,_n(oe,f,u,g,k);break;case 4:k=lt(F(),i,-1),$=We(p,k)+l[1],Q=X(m[0],m[1]),Z=We(p,Q),j=-Z+l[0],G=Z+l[0],me=2,be=4,_n(oe,f,u,g,k);break}const ce=[{cd:Et(),v:F()},{cd:Et(),v:F()}],Be=[{cd:Et(),v:F()},{cd:Et(),v:F()}];let Ge;if(Ge=qi(ce,oe,lt(F(),Q,-1),j,me),Ge<2||(Ge=qi(Be,ce,Q,G,be),Ge<2))return 0;r.push($i(),$i());let Ue=0;for(let xe=0;xe<2;++xe){const we=We(k,Be[xe].v)-$;if(we<=0){const ve=r[Ue];ve.n=lt(F(),i,-1);const ot=N===3||N===4,ae=Je(F(),Be[xe].v,lt(F(),k,we));if(!ot)ve.pA=Me(F(),Je(F(),ae,u),c),ve.pB=Me(F(),Je(F(),Be[xe].v,p),a),ve.details=fn(Be[xe].cd);else{ve.pA=Me(F(),Je(F(),Be[xe].v,u),c),ve.pB=Me(F(),Je(F(),ae,p),a);let Yt=fn(Be[xe].cd);Vu(Yt),ve.details=Yt}if(ve.details.ID=so(ve.details),++Ue,Ue===2)break}}return r.length=Ue,Ue}getContactRenders(){const t=[],n=Ft(this.bodyA.getPosition()[2]),r=Ft(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const c=ft(F(),i,Me(F(),this.contacts[o].pA,n));t.push({pos:c});const a=ft(F(),s,Me(F(),this.contacts[o].pB,r));t.push({pos:a})}return t}getRows(){return this.contacts.length*2}}const On=1,Zt=1e9;class Gu{dt=0;gravity=X(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=X(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(t){Math.abs(t-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${t}. This may cause instability.`),this.contactsToRender=[];for(let r=0;r<this.bodies.length;++r)for(let i=r+1;i<this.bodies.length;++i){const s=this.bodies[r],o=this.bodies[i],c=Je(F(),s.getPos2(),o.getPos2()),a=s.getRadius()+o.getRadius();if(ol(c)<=a*a&&!s.isConstrainedTo(o)){let f=new ei(s,o);this.forces.push(f),s.forces.push(f),o.forces.push(f)}}for(let r=0;r<this.forces.length;++r){const i=this.forces[r];if(!i.initialize()){this.forces.splice(r,1),--r;const o=i.bodyA.forces.indexOf(i);o!==-1&&i.bodyA.forces.splice(o,1);const c=i.bodyB.forces.indexOf(i);c!==-1&&i.bodyB.forces.splice(c,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let o=0;o<i.getRows();++o){if(this.postStabilization){let c=i.penalty[o]*this.gamma;c<On&&(c=On),c>Zt&&(c=Zt),i.penalty[o]=c}else{i.lambda[o]=i.lambda[o]*this.alpha*this.gamma;let c=i.penalty[o]*this.gamma;c<On&&(c=On),c>Zt&&(c=Zt),i.penalty[o]=c}i.penalty[o]=Math.min(i.penalty[o],i.stiffness[o])}}for(let r=0;r<this.bodies.length;++r){const i=this.bodies[r];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(Se(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=Jt(ge(),i.getPosition(),vt(ge(),i.getVelocity(),this.dt)),i.getMass()!==0){let u=vt(ge(),Se(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=Jt(i.inertial,i.inertial,u)}let a=vt(ge(),Vt(ge(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);a<0&&(a=0),a>1&&(a=1),i.lastPosition=nl(i.getPosition());const f=vt(ge(),i.getVelocity(),this.dt),l=vt(ge(),Se(this.gravity[0],this.gravity[1],0),a*this.dt*this.dt);i.setPosition(Jt(ge(),i.getPosition(),Jt(ge(),f,l)))}const n=this.iterations+(this.postStabilization?1:0);for(let r=0;r<n;++r){let i=this.alpha;this.postStabilization&&(i=r<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const o=Fi(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),c=Vi(Xr(),o,1/(this.dt*this.dt)),a=il(ge(),Vt(ge(),s.getPosition(),s.inertial),c);for(const l of s.forces){l.computeConstraints(i),l.computeDerivatives(s);for(let u=0;u<l.getRows();++u){let p=l.stiffness[u]===1/0?l.lambda[u]:0,g=l.penalty[u]*l.C[u]+p;g<l.fmin[u]&&(g=l.fmin[u]),g>l.fmax[u]&&(g=l.fmax[u]);const m=Fi(mr(Se(l.H[u][0],l.H[u][3],l.H[u][6])),0,0,0,mr(Se(l.H[u][1],l.H[u][4],l.H[u][7])),0,0,0,mr(Se(l.H[u][2],l.H[u][5],l.H[u][8])));Vi(m,m,Math.abs(g)),Jt(a,a,vt(ge(),l.J[u],g));const v=al(l.J[u],vt(ge(),l.J[u],l.penalty[u]));zi(c,c,v),zi(c,c,m)}}const f=ll(c,a);s.setPosition(Vt(ge(),s.getPosition(),f))}if(r<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let o=0;o<s.getRows();++o){let c=s.stiffness[o]===1/0?s.lambda[o]:0;s.lambda[o]=c+s.penalty[o]*s.C[o],s.lambda[o]<s.fmin[o]&&(s.lambda[o]=s.fmin[o]),s.lambda[o]>s.fmax[o]&&(s.lambda[o]=s.fmax[o]),Math.abs(s.lambda[o])>=s.fracture[o]&&s.disable(),s.lambda[o]>s.fmin[o]&&s.lambda[o]<s.fmax[o]&&(s.penalty[o]=Math.min(s.penalty[o]+this.beta*Math.abs(s.C[o]),Math.min(s.stiffness[o],Zt)))}}if(r==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const o=Vt(ge(),s.getPosition(),s.lastPosition);vt(o,o,1/this.dt),s.setVelocity(o)}}}}addRigidBox(t){this.bodies.indexOf(t)===-1&&this.bodies.push(t)}removeRigidBox(t){const n=this.bodies.indexOf(t);n!==-1&&this.bodies.splice(n,1)}}class Lu{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(t){this.canvas=t,this.gameRenderer=new et(this.canvas,this),this.solver=new Gu,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(t){this.logging&&console.log(`[GameManager] ${t}`)}logWarn(t){this.logging&&console.warn(`[GameManager] ${t}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const t=Se(et.xWorldSize*.5,8,0),n=X(et.xWorldSize-20,10);this.addRigidBox(t,n,Se(0,0,0),new Uint8Array([200,200,200,255]),!0);const r=1/60;let i=0;this.lastFrameTime=performance.now();const s=o=>{if(!this.running)return;const c=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,i+=c;i>=r;)this.solver.step(r),i-=r;for(let a=0;a<this.solver.bodies.length;++a){const f=this.solver.bodies[a],l=f.getPosition(),u=new Float32Array([l[0],l[1],l[2]]);this.gameRenderer.updateInstancePosition(f.id,u)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s)};this.rafID=requestAnimationFrame(s)}addRigidBox(t=ul(0,0,et.xWorldSize,et.yWorldSize),n=X(re(2,10),re(2,10)),r=Se(0,0,0),i=fl(),s=!1){const o=new Au(n,i,s?0:1,1,t,r);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",t=>{if(!this.canvas)return;const n=this.canvas.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top,s=r/this.canvas.width*et.xWorldSize,o=(1-i/this.canvas.height)*et.yWorldSize,c=Se(s,o,re(0,Math.PI*2));this.addRigidBox(c)})}}async function ju(e){const t=new Lu(e);return await t.initialize(),t}const Nu=`// ============================== //\r
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
}`,Wu=`// ============================== //\r
struct Uniform\r
{\r
    pixelToRayMatrix: mat4x4<f32>,\r
    cameraPosition: vec4f, // w unused\r
    lightPosition: vec4f,  // w unused\r
    lightColor: vec4f,     // w unused\r
    mode: u32,\r
    lightIntensity: f32,\r
    _pad1: u32,\r
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
    if (abs(det) < kEpsilon) \r
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
        let maxBounces: u32 = 1u;\r
        color = rayTraceWithBounces(ray, maxBounces);\r
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
    \r
    return vec4f(color, 1.0);\r
}`,Hu=`struct Uniforms {\r
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
}`,$u=`struct Uniforms {\r
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
}`;function qu(e){const t={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:e,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,modelMatrix:ki(),viewMatrix:ki(),projectionMatrix:ao(Math.PI/4,e,.1,1e3)};return oo(t),t}function ku(e,t,n,r){e.position[0]=t,e.position[1]=n,e.position[2]=r,ti(e)}function Yu(e,t){e.aspect=t,co(e)}function Ku(e,t,n){e.near=t,e.far=n,co(e)}function Qu(e,t,n,r){e.position[0]+=e.forward[0]*t+e.right[0]*n+e.up[0]*r,e.position[1]+=e.forward[1]*t+e.right[1]*n+e.up[1]*r,e.position[2]+=e.forward[2]*t+e.right[2]*n+e.up[2]*r,ti(e)}function Xu(e,t,n){e.yaw+=t,e.pitch+=n;const r=Math.PI/2-.01;for(e.pitch=Math.max(-r,Math.min(r,e.pitch));e.yaw>Math.PI;)e.yaw-=2*Math.PI;for(;e.yaw<-Math.PI;)e.yaw+=2*Math.PI;oo(e)}function en(e,t,n){Xu(e,t*e.rotateSpeed,n*e.rotateSpeed)}function oo(e){e.forward[0]=Math.cos(e.pitch)*Math.cos(e.yaw),e.forward[1]=Math.sin(e.pitch),e.forward[2]=Math.cos(e.pitch)*Math.sin(e.yaw),hn(e.forward);const t=$n(e.forward,e.worldUp);hn(t),e.right[0]=t[0],e.right[1]=t[1],e.right[2]=t[2];const n=$n(e.right,e.forward);hn(n),e.up[0]=n[0],e.up[1]=n[1],e.up[2]=n[2],ti(e)}function ti(e){const t=new Float32Array([e.position[0]+e.forward[0],e.position[1]+e.forward[1],e.position[2]+e.forward[2]]);e.viewMatrix=Ju(e.position,t,e.up)}function co(e){e.projectionMatrix=ao(e.fovY,e.aspect,e.near,e.far)}function ki(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function ao(e,t,n,r){const i=1/Math.tan(e*.5),s=1/(n-r);return new Float32Array([i/t,0,0,0,0,i,0,0,0,0,r*s,-1,0,0,n*r*s,0])}function Ju(e,t,n){const r=new Float32Array([e[0]-t[0],e[1]-t[1],e[2]-t[2]]);hn(r);const i=$n(n,r);hn(i);const s=$n(r,i);return new Float32Array([i[0],s[0],r[0],0,i[1],s[1],r[1],0,i[2],s[2],r[2],0,-br(i,e),-br(s,e),-br(r,e),1])}function hn(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);t>1e-5&&(e[0]/=t,e[1]/=t,e[2]/=t)}function $n(e,t){return new Float32Array([e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]])}function br(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Zu(e){const t=Math.tan(e.fovY/2),n=e.aspect*t,r=t;return new Float32Array([e.right[0]*n,e.right[1]*n,e.right[2]*n,0,e.up[0]*r,e.up[1]*r,e.up[2]*r,0,e.forward[0],e.forward[1],e.forward[2],0,0,0,0,1])}async function ef(e){const t=new rf;return await t.initialize(e),t}const Yi=264,Ki=128,tf=0,nf=20;class rf{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=Zs();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=qu(1);light;normalObjects;rayTracerObjects;useRaytracing=!1;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;constructor(){ku(this.camera,278,273,-800),Ku(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([1,1,1]),intensity:4}}initializeUtils(){const t=Wn();if(!t)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",t.appendChild(this.useRaytracingCheckBox),t.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug"].forEach((i,s)=>{const o=document.createElement("option");o.value=s.toString(),o.text=i,this.rayTracingModeSelect.appendChild(o)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),t.appendChild(document.createElement("br")),t.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=tf.toString(),this.intensitySlider.max=nf.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const r=document.createElement("label");r.htmlFor="intensitySlider",r.textContent=" Light Intensity",t.appendChild(document.createElement("br")),t.appendChild(this.intensitySlider),t.appendChild(r)}async initialize(t){if(this.canvas=t,this.device=await kt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=t.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=yn(this.device,Nu,Wu,"Ray Trace Shader Module"),this.normalObjects.shaderModule=yn(this.device,Hu,$u,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const t=2;if(this.device.features.has("timestamp-query")){const n=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:t}),r=this.device.createBuffer({label:"timestamp resolve buffer",size:t*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:t*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:n,resolveBuffer:r,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const t=Ol();this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,t.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:t.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,t.indexData),this.normalObjects.numIndices=t.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,t.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:t.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,t.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,t.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:Yi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:t.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,t.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:t.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,t.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:t.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,t.colorData);var n=new Uint32Array(t.indexData.length);for(let r=0;r<t.indexData.length;r++)n[r]=t.indexData[r];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,n),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:t.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,t.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:Ki,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()))}onKeyDown=t=>{this.keysPressed.add(t.key.toLowerCase())};onKeyUp=t=>{this.keysPressed.delete(t.key.toLowerCase())};onMouseDown=t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=t=>{if(!this.isMouseDown)return;const n=t.clientX-this.lastMouseX,r=t.clientY-this.lastMouseY,i=.05;en(this.camera,n*i,-r*i),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY};handleInput(){let t=0,n=0,r=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(r-=this.camera.moveSpeed),this.keysPressed.has("s")&&(r+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(t-=this.camera.moveSpeed),this.keysPressed.has("d")&&(t+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(n+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(n-=this.camera.moveSpeed),(t!==0||n!==0||r!==0)&&Qu(this.camera,-r,t,n),this.keysPressed.has("arrowleft")&&en(this.camera,-1,0),this.keysPressed.has("arrowright")&&en(this.camera,1,0),this.keysPressed.has("arrowup")&&en(this.camera,0,1),this.keysPressed.has("arrowdown")&&en(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const t=new ArrayBuffer(Ki),n=new Float32Array(t),r=new Uint32Array(t);n.set(Zu(this.camera),0),n.set(this.camera.position,16),n.set(this.light.position,20),n.set(this.light.color,24),r[28]=this.rayTracingMode,n[29]=this.light.intensity,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,t)}else{const t=new Float32Array(Yi/4);let n=0;t.set(this.camera.modelMatrix,n),n+=16,t.set(this.camera.viewMatrix,n),n+=16,t.set(this.camera.projectionMatrix,n),n+=16,t.set(this.light.position,n),n+=4,t.set(this.light.color,n),n+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,t)}}animate(){const t=performance.now()*.001,n=200,r=250,i=276,s=278.5,o=450;this.light.position[0]=i+n*Math.cos(t),this.light.position[1]=o,this.light.position[2]=s+r*Math.sin(t)}mainLoop(){if(this.device===null||this.canvas===null)return;let t=0,n=0;const r=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-t;t=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const c=this.context.getCurrentTexture().createView(),a=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},f={label:"basic canvas renderPass",colorAttachments:[{view:c,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:a,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),u=l.beginRenderPass(f);this.useRaytracing?(u.setPipeline(this.rayTracerObjects.pipeline),u.setBindGroup(0,this.rayTracerObjects.bindGroup),u.draw(6)):(u.setPipeline(this.normalObjects.pipeline),u.setBindGroup(0,this.normalObjects.bindGroup),u.setVertexBuffer(0,this.normalObjects.positionBuffer),u.setVertexBuffer(1,this.normalObjects.normalBuffer),u.setVertexBuffer(2,this.normalObjects.uvBuffer),u.setVertexBuffer(3,this.normalObjects.colorBuffer),u.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),u.drawIndexed(this.normalObjects.numIndices)),u.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const p=l.finish();this.device.queue.submit([p]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const m=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());n=Number(m[1]-m[0]),this.timestampQuerySet.resultBuffer.unmap()});const g=performance.now()-o;if(this.infoElement&&this.device){const m=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${g.toFixed(1)} ms
                GPU Time: ${(n/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=m}this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,c=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(c,this.device.limits.maxTextureDimension2D)),Yu(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)});const t=Wn();for(const n of Array.from(t?.children||[]))n.remove();this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const sf={class:"flex justify-center items-center w-full h-full"},of={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},cf=["onClick","onMouseenter"],af=8,lf=sc({__name:"App",setup(e){const t=Dt(null),n=Dt(null),r=Dt(!1),i=[La,$a,bl,El,Gl,_u,ju,ef],s=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Textures","Game","Ray Trace"],o=Dt(null),c=Dt(0),a=Dt(0);async function f(m){if(!r.value){if(r.value=!0,n.value&&typeof n.value.cleanup=="function"&&(await n.value.cleanup(),n.value=null),t.value){const v=i[m-1];v&&(n.value=await v(t.value))}r.value=!1}}function l(m,v){o.value=m;const b=v.currentTarget,B=b.parentElement;if(B){const M=B.getBoundingClientRect(),E=b.getBoundingClientRect();c.value=E.top-M.top,a.value=E.height}}function u(){o.value=null}const p=Er(()=>o.value!==null?s[o.value-1]:""),g=Er(()=>o.value===null?{top:c.value+"px",height:a.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:c.value+"px",height:a.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});return Os(()=>{f(8)}),(m,v)=>(vi(),bi("div",sf,[bt("div",of,[(vi(),bi(tt,null,yc(af,b=>bt("button",{key:b,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>f(b),onKeydown:[v[0]||(v[0]=Ii(Ui(()=>{},["prevent"]),["space"])),v[1]||(v[1]=Ii(Ui(()=>{},["prevent"]),["enter"]))],onMouseenter:B=>l(b,B),onMouseleave:u},Sr(b),41,cf)),64))]),bt("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:t,class:"w-[90%] h-full"},null,512),v[2]||(v[2]=bt("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),v[3]||(v[3]=bt("pre",{id:"utils",class:"absolute bottom-0 right-0 p-1 bg-gray-700"},null,-1)),bt("div",{class:Xn(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",o.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:Qn(g.value)},Sr(p.value),7)]))}}),uf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},ff=uf(lf,[["__scopeId","data-v-34fe7d6d"]]);Da(ff).mount("#app");
