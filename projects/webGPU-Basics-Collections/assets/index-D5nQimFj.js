(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hi(t){const e=Object.create(null);for(const r of t.split(","))e[r]=1;return r=>r in e}const me={},xr=[],Ct=()=>{},Eu=()=>!1,as=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vi=t=>t.startsWith("onUpdate:"),Ue=Object.assign,ki=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},wu=Object.prototype.hasOwnProperty,oe=(t,e)=>wu.call(t,e),Y=Array.isArray,Cr=t=>cs(t)==="[object Map]",oc=t=>cs(t)==="[object Set]",Z=t=>typeof t=="function",we=t=>typeof t=="string",qt=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",ac=t=>(Ce(t)||Z(t))&&Z(t.then)&&Z(t.catch),cc=Object.prototype.toString,cs=t=>cc.call(t),Su=t=>cs(t).slice(8,-1),lc=t=>cs(t)==="[object Object]",zi=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kr=Hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},Iu=/-(\w)/g,Jt=ls(t=>t.replace(Iu,(e,r)=>r?r.toUpperCase():"")),Pu=/\B([A-Z])/g,Qt=ls(t=>t.replace(Pu,"-$1").toLowerCase()),uc=ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rs=ls(t=>t?`on${uc(t)}`:""),zt=(t,e)=>!Object.is(t,e),Ds=(t,...e)=>{for(let r=0;r<t.length;r++)t[r](...e)},bi=(t,e,r,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:r})},Ou=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Po;const us=()=>Po||(Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fs(t){if(Y(t)){const e={};for(let r=0;r<t.length;r++){const n=t[r],s=we(n)?Gu(n):fs(n);if(s)for(const i in s)e[i]=s[i]}return e}else if(we(t)||Ce(t))return t}const Ru=/;(?![^(]*\))/g,Du=/:([^]+)/,Fu=/\/\*[^]*?\*\//g;function Gu(t){const e={};return t.replace(Fu,"").split(Ru).forEach(r=>{if(r){const n=r.split(Du);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function en(t){let e="";if(we(t))e=t;else if(Y(t))for(let r=0;r<t.length;r++){const n=en(t[r]);n&&(e+=n+" ")}else if(Ce(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const _u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uu=Hi(_u);function fc(t){return!!t||t===""}const hc=t=>!!(t&&t.__v_isRef===!0),Rn=t=>we(t)?t:t==null?"":Y(t)||Ce(t)&&(t.toString===cc||!Z(t.toString))?hc(t)?Rn(t.value):JSON.stringify(t,dc,2):String(t),dc=(t,e)=>hc(e)?dc(t,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[n,s],i)=>(r[Fs(n,i)+" =>"]=s,r),{})}:oc(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>Fs(r))}:qt(e)?Fs(e):Ce(e)&&!Y(e)&&!lc(e)?String(e):e,Fs=(t,e="")=>{var r;return qt(t)?`Symbol(${(r=t.description)!=null?r:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class Lu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!e&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){const r=ze;try{return ze=this,e()}finally{ze=r}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nu(){return ze}let ge;const Gs=new WeakSet;class mc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gs.has(this)&&(Gs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oo(this),bc(this);const e=ge,r=ut;ge=this,ut=!0;try{return this.fn()}finally{yc(this),ge=e,ut=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wi(e);this.deps=this.depsTail=void 0,Oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yi(this)&&this.run()}get dirty(){return yi(this)}}let pc=0,zr,Jr;function gc(t,e=!1){if(t.flags|=8,e){t.next=Jr,Jr=t;return}t.next=zr,zr=t}function Ji(){pc++}function Ki(){if(--pc>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let t;for(;zr;){let e=zr;for(zr=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=r}}if(t)throw t}function bc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yc(t){let e,r=t.depsTail,n=r;for(;n;){const s=n.prevDep;n.version===-1?(n===r&&(r=s),Wi(n),ju(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}t.deps=e,t.depsTail=r}function yi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===tn)||(t.globalVersion=tn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yi(t))))return;t.flags|=2;const e=t.dep,r=ge,n=ut;ge=t,ut=!0;try{bc(t);const s=t.fn(t._value);(e.version===0||zt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ge=r,ut=n,yc(t),t.flags&=-3}}function Wi(t,e=!1){const{dep:r,prevSub:n,nextSub:s}=t;if(n&&(n.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=n,t.nextSub=void 0),r.subs===t&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)Wi(i,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function ju(t){const{prevDep:e,nextDep:r}=t;e&&(e.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=e,t.nextDep=void 0)}let ut=!0;const vc=[];function Dt(){vc.push(ut),ut=!1}function Ft(){const t=vc.pop();ut=t===void 0?!0:t}function Oo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const r=ge;ge=void 0;try{e()}finally{ge=r}}}let tn=0;class Hu{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ge||!ut||ge===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==ge)r=this.activeLink=new Hu(ge,this),ge.deps?(r.prevDep=ge.depsTail,ge.depsTail.nextDep=r,ge.depsTail=r):ge.deps=ge.depsTail=r,Ac(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=ge.depsTail,r.nextDep=void 0,ge.depsTail.nextDep=r,ge.depsTail=r,ge.deps===r&&(ge.deps=n)}return r}trigger(e){this.version++,tn++,this.notify(e)}notify(e){Ji();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Ki()}}}function Ac(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Ac(n)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const Bi=new WeakMap,sr=Symbol(""),vi=Symbol(""),rn=Symbol("");function Ge(t,e,r){if(ut&&ge){let n=Bi.get(t);n||Bi.set(t,n=new Map);let s=n.get(r);s||(n.set(r,s=new qi),s.map=n,s.key=r),s.track()}}function Pt(t,e,r,n,s,i){const o=Bi.get(t);if(!o){tn++;return}const a=c=>{c&&c.trigger()};if(Ji(),e==="clear")o.forEach(a);else{const c=Y(t),u=c&&zi(r);if(c&&r==="length"){const l=Number(n);o.forEach((f,h)=>{(h==="length"||h===rn||!qt(h)&&h>=l)&&a(f)})}else switch((r!==void 0||o.has(void 0))&&a(o.get(r)),u&&a(o.get(rn)),e){case"add":c?u&&a(o.get("length")):(a(o.get(sr)),Cr(t)&&a(o.get(vi)));break;case"delete":c||(a(o.get(sr)),Cr(t)&&a(o.get(vi)));break;case"set":Cr(t)&&a(o.get(sr));break}}Ki()}function fr(t){const e=ie(t);return e===t?e:(Ge(e,"iterate",rn),it(t)?e:e.map(Oe))}function hs(t){return Ge(t=ie(t),"iterate",rn),t}const Vu={__proto__:null,[Symbol.iterator](){return _s(this,Symbol.iterator,Oe)},concat(...t){return fr(this).concat(...t.map(e=>Y(e)?fr(e):e))},entries(){return _s(this,"entries",t=>(t[1]=Oe(t[1]),t))},every(t,e){return Tt(this,"every",t,e,void 0,arguments)},filter(t,e){return Tt(this,"filter",t,e,r=>r.map(Oe),arguments)},find(t,e){return Tt(this,"find",t,e,Oe,arguments)},findIndex(t,e){return Tt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tt(this,"findLast",t,e,Oe,arguments)},findLastIndex(t,e){return Tt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Us(this,"includes",t)},indexOf(...t){return Us(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return Us(this,"lastIndexOf",t)},map(t,e){return Tt(this,"map",t,e,void 0,arguments)},pop(){return Gr(this,"pop")},push(...t){return Gr(this,"push",t)},reduce(t,...e){return Ro(this,"reduce",t,e)},reduceRight(t,...e){return Ro(this,"reduceRight",t,e)},shift(){return Gr(this,"shift")},some(t,e){return Tt(this,"some",t,e,void 0,arguments)},splice(...t){return Gr(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return Gr(this,"unshift",t)},values(){return _s(this,"values",Oe)}};function _s(t,e,r){const n=hs(t),s=n[e]();return n!==t&&!it(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=r(i.value)),i}),s}const ku=Array.prototype;function Tt(t,e,r,n,s,i){const o=hs(t),a=o!==t&&!it(t),c=o[e];if(c!==ku[e]){const f=c.apply(t,i);return a?Oe(f):f}let u=r;o!==t&&(a?u=function(f,h){return r.call(this,Oe(f),h,t)}:r.length>2&&(u=function(f,h){return r.call(this,f,h,t)}));const l=c.call(o,u,n);return a&&s?s(l):l}function Ro(t,e,r,n){const s=hs(t);let i=r;return s!==t&&(it(t)?r.length>3&&(i=function(o,a,c){return r.call(this,o,a,c,t)}):i=function(o,a,c){return r.call(this,o,Oe(a),c,t)}),s[e](i,...n)}function Us(t,e,r){const n=ie(t);Ge(n,"iterate",rn);const s=n[e](...r);return(s===-1||s===!1)&&$i(r[0])?(r[0]=ie(r[0]),n[e](...r)):s}function Gr(t,e,r=[]){Dt(),Ji();const n=ie(t)[e].apply(t,r);return Ki(),Ft(),n}const zu=Hi("__proto__,__v_isRef,__isVue"),xc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qt));function Ju(t){qt(t)||(t=String(t));const e=ie(this);return Ge(e,"has",t),e.hasOwnProperty(t)}class Cc{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,n){if(r==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!s;if(r==="__v_isReadonly")return s;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(s?i?tf:wc:i?Ec:Tc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Y(e);if(!s){let c;if(o&&(c=Vu[r]))return c;if(r==="hasOwnProperty")return Ju}const a=Reflect.get(e,r,_e(e)?e:n);return(qt(r)?xc.has(r):zu(r))||(s||Ge(e,"get",r),i)?a:_e(a)?o&&zi(r)?a:a.value:Ce(a)?s?Sc(a):Xi(a):a}}class Mc extends Cc{constructor(e=!1){super(!1,e)}set(e,r,n,s){let i=e[r];if(!this._isShallow){const c=Kt(i);if(!it(n)&&!Kt(n)&&(i=ie(i),n=ie(n)),!Y(e)&&_e(i)&&!_e(n))return c?!1:(i.value=n,!0)}const o=Y(e)&&zi(r)?Number(r)<e.length:oe(e,r),a=Reflect.set(e,r,n,_e(e)?e:s);return e===ie(s)&&(o?zt(n,i)&&Pt(e,"set",r,n):Pt(e,"add",r,n)),a}deleteProperty(e,r){const n=oe(e,r);e[r];const s=Reflect.deleteProperty(e,r);return s&&n&&Pt(e,"delete",r,void 0),s}has(e,r){const n=Reflect.has(e,r);return(!qt(r)||!xc.has(r))&&Ge(e,"has",r),n}ownKeys(e){return Ge(e,"iterate",Y(e)?"length":sr),Reflect.ownKeys(e)}}class Ku extends Cc{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const Wu=new Mc,qu=new Ku,Qu=new Mc(!0);const Ai=t=>t,An=t=>Reflect.getPrototypeOf(t);function Xu(t,e,r){return function(...n){const s=this.__v_raw,i=ie(s),o=Cr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...n),l=r?Ai:e?Vn:Oe;return!e&&Ge(i,"iterate",c?vi:sr),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yu(t,e){const r={get(s){const i=this.__v_raw,o=ie(i),a=ie(s);t||(zt(s,a)&&Ge(o,"get",s),Ge(o,"get",a));const{has:c}=An(o),u=e?Ai:t?Vn:Oe;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ge(ie(s),"iterate",sr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ie(i),a=ie(s);return t||(zt(s,a)&&Ge(o,"has",s),Ge(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=ie(a),u=e?Ai:t?Vn:Oe;return!t&&Ge(c,"iterate",sr),a.forEach((l,f)=>s.call(i,u(l),u(f),o))}};return Ue(r,t?{add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear")}:{add(s){!e&&!it(s)&&!Kt(s)&&(s=ie(s));const i=ie(this);return An(i).has.call(i,s)||(i.add(s),Pt(i,"add",s,s)),this},set(s,i){!e&&!it(i)&&!Kt(i)&&(i=ie(i));const o=ie(this),{has:a,get:c}=An(o);let u=a.call(o,s);u||(s=ie(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?zt(i,l)&&Pt(o,"set",s,i):Pt(o,"add",s,i),this},delete(s){const i=ie(this),{has:o,get:a}=An(i);let c=o.call(i,s);c||(s=ie(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Pt(i,"delete",s,void 0),u},clear(){const s=ie(this),i=s.size!==0,o=s.clear();return i&&Pt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Xu(s,t,e)}),r}function Qi(t,e){const r=Yu(t,e);return(n,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?n:Reflect.get(oe(r,s)&&s in n?r:n,s,i)}const $u={get:Qi(!1,!1)},Zu={get:Qi(!1,!0)},ef={get:Qi(!0,!1)};const Tc=new WeakMap,Ec=new WeakMap,wc=new WeakMap,tf=new WeakMap;function rf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(t){return t.__v_skip||!Object.isExtensible(t)?0:rf(Su(t))}function Xi(t){return Kt(t)?t:Yi(t,!1,Wu,$u,Tc)}function sf(t){return Yi(t,!1,Qu,Zu,Ec)}function Sc(t){return Yi(t,!0,qu,ef,wc)}function Yi(t,e,r,n,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=nf(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?n:r);return s.set(t,a),a}function Mr(t){return Kt(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Kt(t){return!!(t&&t.__v_isReadonly)}function it(t){return!!(t&&t.__v_isShallow)}function $i(t){return t?!!t.__v_raw:!1}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function of(t){return!oe(t,"__v_skip")&&Object.isExtensible(t)&&bi(t,"__v_skip",!0),t}const Oe=t=>Ce(t)?Xi(t):t,Vn=t=>Ce(t)?Sc(t):t;function _e(t){return t?t.__v_isRef===!0:!1}function Xt(t){return af(t,!1)}function af(t,e){return _e(t)?t:new cf(t,e)}class cf{constructor(e,r){this.dep=new qi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:ie(e),this._value=r?e:Oe(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,n=this.__v_isShallow||it(e)||Kt(e);e=n?e:ie(e),zt(e,r)&&(this._rawValue=e,this._value=n?e:Oe(e),this.dep.trigger())}}function Ic(t){return _e(t)?t.value:t}const lf={get:(t,e,r)=>e==="__v_raw"?t:Ic(Reflect.get(t,e,r)),set:(t,e,r,n)=>{const s=t[e];return _e(s)&&!_e(r)?(s.value=r,!0):Reflect.set(t,e,r,n)}};function Pc(t){return Mr(t)?t:new Proxy(t,lf)}class uf{constructor(e,r,n){this.fn=e,this.setter=r,this._value=void 0,this.dep=new qi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return gc(this,!0),!0}get value(){const e=this.dep.track();return Bc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ff(t,e,r=!1){let n,s;return Z(t)?n=t:(n=t.get,s=t.set),new uf(n,s,r)}const Cn={},kn=new WeakMap;let er;function hf(t,e=!1,r=er){if(r){let n=kn.get(r);n||kn.set(r,n=[]),n.push(t)}}function df(t,e,r=me){const{immediate:n,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=r,u=A=>s?A:it(A)||s===!1||s===0?Ot(A,1):Ot(A);let l,f,h,m,d=!1,p=!1;if(_e(t)?(f=()=>t.value,d=it(t)):Mr(t)?(f=()=>u(t),d=!0):Y(t)?(p=!0,d=t.some(A=>Mr(A)||it(A)),f=()=>t.map(A=>{if(_e(A))return A.value;if(Mr(A))return u(A);if(Z(A))return c?c(A,2):A()})):Z(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){Dt();try{h()}finally{Ft()}}const A=er;er=l;try{return c?c(t,3,[m]):t(m)}finally{er=A}}:f=Ct,e&&s){const A=f,C=s===!0?1/0:s;f=()=>Ot(A(),C)}const g=Nu(),B=()=>{l.stop(),g&&g.active&&ki(g.effects,l)};if(i&&e){const A=e;e=(...C)=>{A(...C),B()}}let y=p?new Array(t.length).fill(Cn):Cn;const M=A=>{if(!(!(l.flags&1)||!l.dirty&&!A))if(e){const C=l.run();if(s||d||(p?C.some((S,x)=>zt(S,y[x])):zt(C,y))){h&&h();const S=er;er=l;try{const x=[C,y===Cn?void 0:p&&y[0]===Cn?[]:y,m];y=C,c?c(e,3,x):e(...x)}finally{er=S}}}else l.run()};return a&&a(M),l=new mc(f),l.scheduler=o?()=>o(M,!1):M,m=A=>hf(A,!1,l),h=l.onStop=()=>{const A=kn.get(l);if(A){if(c)c(A,4);else for(const C of A)C();kn.delete(l)}},e?n?M(!0):y=l.run():o?o(M.bind(null,!0),!0):l.run(),B.pause=l.pause.bind(l),B.resume=l.resume.bind(l),B.stop=B,B}function Ot(t,e=1/0,r){if(e<=0||!Ce(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),e--,_e(t))Ot(t.value,e,r);else if(Y(t))for(let n=0;n<t.length;n++)Ot(t[n],e,r);else if(oc(t)||Cr(t))t.forEach(n=>{Ot(n,e,r)});else if(lc(t)){for(const n in t)Ot(t[n],e,r);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&Ot(t[n],e,r)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hn(t,e,r,n){try{return n?t(...n):t()}catch(s){ds(s,e,r)}}function Mt(t,e,r,n){if(Z(t)){const s=hn(t,e,r,n);return s&&ac(s)&&s.catch(i=>{ds(i,e,r)}),s}if(Y(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,r,n));return s}}function ds(t,e,r,n=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||me;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,c,u)===!1)return}a=a.parent}if(i){Dt(),hn(i,null,10,[t,c,u]),Ft();return}}mf(t,r,s,n,o)}function mf(t,e,r,n=!0,s=!1){if(s)throw t;console.error(t)}const Ne=[];let bt=-1;const Tr=[];let Ht=null,br=0;const Oc=Promise.resolve();let zn=null;function pf(t){const e=zn||Oc;return t?e.then(this?t.bind(this):t):e}function gf(t){let e=bt+1,r=Ne.length;for(;e<r;){const n=e+r>>>1,s=Ne[n],i=nn(s);i<t||i===t&&s.flags&2?e=n+1:r=n}return e}function Zi(t){if(!(t.flags&1)){const e=nn(t),r=Ne[Ne.length-1];!r||!(t.flags&2)&&e>=nn(r)?Ne.push(t):Ne.splice(gf(e),0,t),t.flags|=1,Rc()}}function Rc(){zn||(zn=Oc.then(Fc))}function bf(t){Y(t)?Tr.push(...t):Ht&&t.id===-1?Ht.splice(br+1,0,t):t.flags&1||(Tr.push(t),t.flags|=1),Rc()}function Do(t,e,r=bt+1){for(;r<Ne.length;r++){const n=Ne[r];if(n&&n.flags&2){if(t&&n.id!==t.uid)continue;Ne.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Dc(t){if(Tr.length){const e=[...new Set(Tr)].sort((r,n)=>nn(r)-nn(n));if(Tr.length=0,Ht){Ht.push(...e);return}for(Ht=e,br=0;br<Ht.length;br++){const r=Ht[br];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Ht=null,br=0}}const nn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fc(t){try{for(bt=0;bt<Ne.length;bt++){const e=Ne[bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bt<Ne.length;bt++){const e=Ne[bt];e&&(e.flags&=-2)}bt=-1,Ne.length=0,Dc(),zn=null,(Ne.length||Tr.length)&&Fc()}}let st=null,Gc=null;function Jn(t){const e=st;return st=t,Gc=t&&t.type.__scopeId||null,e}function yf(t,e=st,r){if(!e||t._n)return t;const n=(...s)=>{n._d&&Vo(-1);const i=Jn(e);let o;try{o=t(...s)}finally{Jn(i),n._d&&Vo(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Bf(t,e){if(st===null)return t;const r=bs(st),n=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=me]=e[s];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(o),n.push({dir:i,instance:r,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Yt(t,e,r,n){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[n];c&&(Dt(),Mt(c,r,8,[t.el,a,t,e]),Ft())}}const vf=Symbol("_vte"),Af=t=>t.__isTeleport;function eo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,eo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xf(t,e){return Z(t)?Ue({name:t.name},e,{setup:t}):t}function _c(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Kr(t,e,r,n,s=!1){if(Y(t)){t.forEach((d,p)=>Kr(d,e&&(Y(e)?e[p]:e),r,n,s));return}if(Wr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Kr(t,e,r,n.component.subTree);return}const i=n.shapeFlag&4?bs(n.component):n.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===me?a.refs={}:a.refs,f=a.setupState,h=ie(f),m=f===me?()=>!1:d=>oe(h,d);if(u!=null&&u!==c&&(we(u)?(l[u]=null,m(u)&&(f[u]=null)):_e(u)&&(u.value=null)),Z(c))hn(c,a,12,[o,l]);else{const d=we(c),p=_e(c);if(d||p){const g=()=>{if(t.f){const B=d?m(c)?f[c]:l[c]:c.value;s?Y(B)&&ki(B,i):Y(B)?B.includes(i)||B.push(i):d?(l[c]=[i],m(c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,m(c)&&(f[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,Xe(g,r)):g()}}}us().requestIdleCallback;us().cancelIdleCallback;const Wr=t=>!!t.type.__asyncLoader,Uc=t=>t.type.__isKeepAlive;function Cf(t,e){Lc(t,"a",e)}function Mf(t,e){Lc(t,"da",e)}function Lc(t,e,r=je){const n=t.__wdc||(t.__wdc=()=>{let s=r;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ms(e,n,r),r){let s=r.parent;for(;s&&s.parent;)Uc(s.parent.vnode)&&Tf(n,e,r,s),s=s.parent}}function Tf(t,e,r,n){const s=ms(e,t,n,!0);jc(()=>{ki(n[e],s)},r)}function ms(t,e,r=je,n=!1){if(r){const s=r[t]||(r[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dt();const a=dn(r),c=Mt(e,r,t,o);return a(),Ft(),c});return n?s.unshift(i):s.push(i),i}}const Ut=t=>(e,r=je)=>{(!on||t==="sp")&&ms(t,(...n)=>e(...n),r)},Ef=Ut("bm"),Nc=Ut("m"),wf=Ut("bu"),Sf=Ut("u"),If=Ut("bum"),jc=Ut("um"),Pf=Ut("sp"),Of=Ut("rtg"),Rf=Ut("rtc");function Df(t,e=je){ms("ec",t,e)}const Ff=Symbol.for("v-ndc");function Gf(t,e,r,n){let s;const i=r,o=Y(t);if(o||we(t)){const a=o&&Mr(t);let c=!1,u=!1;a&&(c=!it(t),u=Kt(t),t=hs(t)),s=new Array(t.length);for(let l=0,f=t.length;l<f;l++)s[l]=e(c?u?Vn(Oe(t[l])):Oe(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];s[c]=e(t[l],l,c,i)}}else s=[];return s}const xi=t=>t?al(t)?bs(t):xi(t.parent):null,qr=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xi(t.parent),$root:t=>xi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vc(t),$forceUpdate:t=>t.f||(t.f=()=>{Zi(t.update)}),$nextTick:t=>t.n||(t.n=pf.bind(t.proxy)),$watch:t=>nh.bind(t)}),Ls=(t,e)=>t!==me&&!t.__isScriptSetup&&oe(t,e),_f={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:n,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return s[e];case 4:return r[e];case 3:return i[e]}else{if(Ls(n,e))return o[e]=1,n[e];if(s!==me&&oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&oe(u,e))return o[e]=3,i[e];if(r!==me&&oe(r,e))return o[e]=4,r[e];Ci&&(o[e]=0)}}const l=qr[e];let f,h;if(l)return e==="$attrs"&&Ge(t.attrs,"get",""),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(r!==me&&oe(r,e))return o[e]=4,r[e];if(h=c.config.globalProperties,oe(h,e))return h[e]},set({_:t},e,r){const{data:n,setupState:s,ctx:i}=t;return Ls(s,e)?(s[e]=r,!0):n!==me&&oe(n,e)?(n[e]=r,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:n,appContext:s,propsOptions:i}},o){let a;return!!r[o]||t!==me&&oe(t,o)||Ls(e,o)||(a=i[0])&&oe(a,o)||oe(n,o)||oe(qr,o)||oe(s.config.globalProperties,o)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:oe(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function Fo(t){return Y(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}let Ci=!0;function Uf(t){const e=Vc(t),r=t.proxy,n=t.ctx;Ci=!1,e.beforeCreate&&Go(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:h,beforeUpdate:m,updated:d,activated:p,deactivated:g,beforeDestroy:B,beforeUnmount:y,destroyed:M,unmounted:A,render:C,renderTracked:S,renderTriggered:x,errorCaptured:P,serverPrefetch:O,expose:_,inheritAttrs:V,components:H,directives:L,filters:I}=e;if(u&&Lf(u,n,null),o)for(const z in o){const N=o[z];Z(N)&&(n[z]=N.bind(r))}if(s){const z=s.call(r,r);Ce(z)&&(t.data=Xi(z))}if(Ci=!0,i)for(const z in i){const N=i[z],re=Z(N)?N.bind(r,r):Z(N.get)?N.get.bind(r,r):Ct,le=!Z(N)&&Z(N.set)?N.set.bind(r):Ct,ee=wi({get:re,set:le});Object.defineProperty(n,z,{enumerable:!0,configurable:!0,get:()=>ee.value,set:te=>ee.value=te})}if(a)for(const z in a)Hc(a[z],n,r,z);if(c){const z=Z(c)?c.call(r):c;Reflect.ownKeys(z).forEach(N=>{zf(N,z[N])})}l&&Go(l,t,"c");function K(z,N){Y(N)?N.forEach(re=>z(re.bind(r))):N&&z(N.bind(r))}if(K(Ef,f),K(Nc,h),K(wf,m),K(Sf,d),K(Cf,p),K(Mf,g),K(Df,P),K(Rf,S),K(Of,x),K(If,y),K(jc,A),K(Pf,O),Y(_))if(_.length){const z=t.exposed||(t.exposed={});_.forEach(N=>{Object.defineProperty(z,N,{get:()=>r[N],set:re=>r[N]=re,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===Ct&&(t.render=C),V!=null&&(t.inheritAttrs=V),H&&(t.components=H),L&&(t.directives=L),O&&_c(t)}function Lf(t,e,r=Ct){Y(t)&&(t=Mi(t));for(const n in t){const s=t[n];let i;Ce(s)?"default"in s?i=Dn(s.from||n,s.default,!0):i=Dn(s.from||n):i=Dn(s),_e(i)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[n]=i}}function Go(t,e,r){Mt(Y(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,r)}function Hc(t,e,r,n){let s=n.includes(".")?tl(r,n):()=>r[n];if(we(t)){const i=e[t];Z(i)&&js(s,i)}else if(Z(t))js(s,t.bind(r));else if(Ce(t))if(Y(t))t.forEach(i=>Hc(i,e,r,n));else{const i=Z(t.handler)?t.handler.bind(r):e[t.handler];Z(i)&&js(s,i,t)}}function Vc(t){const e=t.type,{mixins:r,extends:n}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!r&&!n?c=e:(c={},s.length&&s.forEach(u=>Kn(c,u,o,!0)),Kn(c,e,o)),Ce(e)&&i.set(e,c),c}function Kn(t,e,r,n=!1){const{mixins:s,extends:i}=e;i&&Kn(t,i,r,!0),s&&s.forEach(o=>Kn(t,o,r,!0));for(const o in e)if(!(n&&o==="expose")){const a=Nf[o]||r&&r[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Nf={data:_o,props:Uo,emits:Uo,methods:Nr,computed:Nr,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Nr,directives:Nr,watch:Hf,provide:_o,inject:jf};function _o(t,e){return e?t?function(){return Ue(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function jf(t,e){return Nr(Mi(t),Mi(e))}function Mi(t){if(Y(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?Ue(Object.create(null),t,e):e}function Uo(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:Ue(Object.create(null),Fo(t),Fo(e??{})):e}function Hf(t,e){if(!t)return e;if(!e)return t;const r=Ue(Object.create(null),t);for(const n in e)r[n]=Le(t[n],e[n]);return r}function kc(){return{app:null,config:{isNativeTag:Eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function kf(t,e){return function(n,s=null){Z(n)||(n=Ue({},n)),s!=null&&!Ce(s)&&(s=null);const i=kc(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Vf++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:Th,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(u,...f)):Z(l)&&(o.add(l),l(u,...f))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,f){return f?(i.components[l]=f,u):i.components[l]},directive(l,f){return f?(i.directives[l]=f,u):i.directives[l]},mount(l,f,h){if(!c){const m=u._ceVNode||ir(n,s);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(m,l,h),c=!0,u._container=l,l.__vue_app__=u,bs(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Mt(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(l,f){return i.provides[l]=f,u},runWithContext(l){const f=Er;Er=u;try{return l()}finally{Er=f}}};return u}}let Er=null;function zf(t,e){if(je){let r=je.provides;const n=je.parent&&je.parent.provides;n===r&&(r=je.provides=Object.create(n)),r[t]=e}}function Dn(t,e,r=!1){const n=Bh();if(n||Er){let s=Er?Er._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return r&&Z(e)?e.call(n&&n.proxy):e}}const zc={},Jc=()=>Object.create(zc),Kc=t=>Object.getPrototypeOf(t)===zc;function Jf(t,e,r,n=!1){const s={},i=Jc();t.propsDefaults=Object.create(null),Wc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);r?t.props=n?s:sf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Kf(t,e,r,n){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ie(s),[c]=t.propsOptions;let u=!1;if((n||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(ps(t.emitsOptions,h))continue;const m=e[h];if(c)if(oe(i,h))m!==i[h]&&(i[h]=m,u=!0);else{const d=Jt(h);s[d]=Ti(c,a,d,m,t,!1)}else m!==i[h]&&(i[h]=m,u=!0)}}}else{Wc(t,e,s,i)&&(u=!0);let l;for(const f in a)(!e||!oe(e,f)&&((l=Qt(f))===f||!oe(e,l)))&&(c?r&&(r[f]!==void 0||r[l]!==void 0)&&(s[f]=Ti(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!oe(e,f))&&(delete i[f],u=!0)}u&&Pt(t.attrs,"set","")}function Wc(t,e,r,n){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(kr(c))continue;const u=e[c];let l;s&&oe(s,l=Jt(c))?!i||!i.includes(l)?r[l]=u:(a||(a={}))[l]=u:ps(t.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,o=!0)}if(i){const c=ie(r),u=a||me;for(let l=0;l<i.length;l++){const f=i[l];r[f]=Ti(s,c,f,u[f],t,!oe(u,f))}}return o}function Ti(t,e,r,n,s,i){const o=t[r];if(o!=null){const a=oe(o,"default");if(a&&n===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:u}=s;if(r in u)n=u[r];else{const l=dn(s);n=u[r]=c.call(null,e),l()}}else n=c;s.ce&&s.ce._setProp(r,n)}o[0]&&(i&&!a?n=!1:o[1]&&(n===""||n===Qt(r))&&(n=!0))}return n}const Wf=new WeakMap;function qc(t,e,r=!1){const n=r?Wf:e.propsCache,s=n.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const l=f=>{c=!0;const[h,m]=qc(f,e,!0);Ue(o,h),m&&a.push(...m)};!r&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ce(t)&&n.set(t,xr),xr;if(Y(i))for(let l=0;l<i.length;l++){const f=Jt(i[l]);Lo(f)&&(o[f]=me)}else if(i)for(const l in i){const f=Jt(l);if(Lo(f)){const h=i[l],m=o[f]=Y(h)||Z(h)?{type:h}:Ue({},h),d=m.type;let p=!1,g=!0;if(Y(d))for(let B=0;B<d.length;++B){const y=d[B],M=Z(y)&&y.name;if(M==="Boolean"){p=!0;break}else M==="String"&&(g=!1)}else p=Z(d)&&d.name==="Boolean";m[0]=p,m[1]=g,(p||oe(m,"default"))&&a.push(f)}}const u=[o,a];return Ce(t)&&n.set(t,u),u}function Lo(t){return t[0]!=="$"&&!kr(t)}const to=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",ro=t=>Y(t)?t.map(At):[At(t)],qf=(t,e,r)=>{if(e._n)return e;const n=yf((...s)=>ro(e(...s)),r);return n._c=!1,n},Qc=(t,e,r)=>{const n=t._ctx;for(const s in t){if(to(s))continue;const i=t[s];if(Z(i))e[s]=qf(s,i,n);else if(i!=null){const o=ro(i);e[s]=()=>o}}},Xc=(t,e)=>{const r=ro(e);t.slots.default=()=>r},Yc=(t,e,r)=>{for(const n in e)(r||!to(n))&&(t[n]=e[n])},Qf=(t,e,r)=>{const n=t.slots=Jc();if(t.vnode.shapeFlag&32){const s=e.__;s&&bi(n,"__",s,!0);const i=e._;i?(Yc(n,e,r),r&&bi(n,"_",i,!0)):Qc(e,n)}else e&&Xc(t,e)},Xf=(t,e,r)=>{const{vnode:n,slots:s}=t;let i=!0,o=me;if(n.shapeFlag&32){const a=e._;a?r&&a===1?i=!1:Yc(s,e,r):(i=!e.$stable,Qc(e,s)),o=e}else e&&(Xc(t,e),o={default:1});if(i)for(const a in s)!to(a)&&o[a]==null&&delete s[a]},Xe=uh;function Yf(t){return $f(t)}function $f(t,e){const r=us();r.__VUE__=!0;const{insert:n,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:h,setScopeId:m=Ct,insertStaticContent:d}=t,p=(b,v,E,F=null,R=null,D=null,k=void 0,j=null,U=!!v.dynamicChildren)=>{if(b===v)return;b&&!_r(b,v)&&(F=Me(b),te(b,R,D,!0),b=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:G,ref:Q,shapeFlag:J}=v;switch(G){case gs:g(b,v,E,F);break;case Sr:B(b,v,E,F);break;case Hs:b==null&&y(v,E,F,k);break;case vt:H(b,v,E,F,R,D,k,j,U);break;default:J&1?C(b,v,E,F,R,D,k,j,U):J&6?L(b,v,E,F,R,D,k,j,U):(J&64||J&128)&&G.process(b,v,E,F,R,D,k,j,U,he)}Q!=null&&R?Kr(Q,b&&b.ref,D,v||b,!v):Q==null&&b&&b.ref!=null&&Kr(b.ref,null,D,b,!0)},g=(b,v,E,F)=>{if(b==null)n(v.el=a(v.children),E,F);else{const R=v.el=b.el;v.children!==b.children&&u(R,v.children)}},B=(b,v,E,F)=>{b==null?n(v.el=c(v.children||""),E,F):v.el=b.el},y=(b,v,E,F)=>{[b.el,b.anchor]=d(b.children,v,E,F,b.el,b.anchor)},M=({el:b,anchor:v},E,F)=>{let R;for(;b&&b!==v;)R=h(b),n(b,E,F),b=R;n(v,E,F)},A=({el:b,anchor:v})=>{let E;for(;b&&b!==v;)E=h(b),s(b),b=E;s(v)},C=(b,v,E,F,R,D,k,j,U)=>{v.type==="svg"?k="svg":v.type==="math"&&(k="mathml"),b==null?S(v,E,F,R,D,k,j,U):O(b,v,R,D,k,j,U)},S=(b,v,E,F,R,D,k,j)=>{let U,G;const{props:Q,shapeFlag:J,transition:W,dirs:X}=b;if(U=b.el=o(b.type,D,Q&&Q.is,Q),J&8?l(U,b.children):J&16&&P(b.children,U,null,F,R,Ns(b,D),k,j),X&&Yt(b,null,F,"created"),x(U,b,b.scopeId,k,F),Q){for(const pe in Q)pe!=="value"&&!kr(pe)&&i(U,pe,null,Q[pe],D,F);"value"in Q&&i(U,"value",null,Q.value,D),(G=Q.onVnodeBeforeMount)&&pt(G,F,b)}X&&Yt(b,null,F,"beforeMount");const ne=Zf(R,W);ne&&W.beforeEnter(U),n(U,v,E),((G=Q&&Q.onVnodeMounted)||ne||X)&&Xe(()=>{G&&pt(G,F,b),ne&&W.enter(U),X&&Yt(b,null,F,"mounted")},R)},x=(b,v,E,F,R)=>{if(E&&m(b,E),F)for(let D=0;D<F.length;D++)m(b,F[D]);if(R){let D=R.subTree;if(v===D||nl(D.type)&&(D.ssContent===v||D.ssFallback===v)){const k=R.vnode;x(b,k,k.scopeId,k.slotScopeIds,R.parent)}}},P=(b,v,E,F,R,D,k,j,U=0)=>{for(let G=U;G<b.length;G++){const Q=b[G]=j?Vt(b[G]):At(b[G]);p(null,Q,v,E,F,R,D,k,j)}},O=(b,v,E,F,R,D,k)=>{const j=v.el=b.el;let{patchFlag:U,dynamicChildren:G,dirs:Q}=v;U|=b.patchFlag&16;const J=b.props||me,W=v.props||me;let X;if(E&&$t(E,!1),(X=W.onVnodeBeforeUpdate)&&pt(X,E,v,b),Q&&Yt(v,b,E,"beforeUpdate"),E&&$t(E,!0),(J.innerHTML&&W.innerHTML==null||J.textContent&&W.textContent==null)&&l(j,""),G?_(b.dynamicChildren,G,j,E,F,Ns(v,R),D):k||N(b,v,j,null,E,F,Ns(v,R),D,!1),U>0){if(U&16)V(j,J,W,E,R);else if(U&2&&J.class!==W.class&&i(j,"class",null,W.class,R),U&4&&i(j,"style",J.style,W.style,R),U&8){const ne=v.dynamicProps;for(let pe=0;pe<ne.length;pe++){const ue=ne[pe],He=J[ue],Ve=W[ue];(Ve!==He||ue==="value")&&i(j,ue,He,Ve,R,E)}}U&1&&b.children!==v.children&&l(j,v.children)}else!k&&G==null&&V(j,J,W,E,R);((X=W.onVnodeUpdated)||Q)&&Xe(()=>{X&&pt(X,E,v,b),Q&&Yt(v,b,E,"updated")},F)},_=(b,v,E,F,R,D,k)=>{for(let j=0;j<v.length;j++){const U=b[j],G=v[j],Q=U.el&&(U.type===vt||!_r(U,G)||U.shapeFlag&198)?f(U.el):E;p(U,G,Q,null,F,R,D,k,!0)}},V=(b,v,E,F,R)=>{if(v!==E){if(v!==me)for(const D in v)!kr(D)&&!(D in E)&&i(b,D,v[D],null,R,F);for(const D in E){if(kr(D))continue;const k=E[D],j=v[D];k!==j&&D!=="value"&&i(b,D,j,k,R,F)}"value"in E&&i(b,"value",v.value,E.value,R)}},H=(b,v,E,F,R,D,k,j,U)=>{const G=v.el=b?b.el:a(""),Q=v.anchor=b?b.anchor:a("");let{patchFlag:J,dynamicChildren:W,slotScopeIds:X}=v;X&&(j=j?j.concat(X):X),b==null?(n(G,E,F),n(Q,E,F),P(v.children||[],E,Q,R,D,k,j,U)):J>0&&J&64&&W&&b.dynamicChildren?(_(b.dynamicChildren,W,E,R,D,k,j),(v.key!=null||R&&v===R.subTree)&&$c(b,v,!0)):N(b,v,E,Q,R,D,k,j,U)},L=(b,v,E,F,R,D,k,j,U)=>{v.slotScopeIds=j,b==null?v.shapeFlag&512?R.ctx.activate(v,E,F,k,U):I(v,E,F,R,D,k,U):w(b,v,U)},I=(b,v,E,F,R,D,k)=>{const j=b.component=yh(b,F,R);if(Uc(b)&&(j.ctx.renderer=he),vh(j,!1,k),j.asyncDep){if(R&&R.registerDep(j,K,k),!b.el){const U=j.subTree=ir(Sr);B(null,U,v,E),b.placeholder=U.el}}else K(j,b,v,E,R,D,k)},w=(b,v,E)=>{const F=v.component=b.component;if(ch(b,v,E))if(F.asyncDep&&!F.asyncResolved){z(F,v,E);return}else F.next=v,F.update();else v.el=b.el,F.vnode=v},K=(b,v,E,F,R,D,k)=>{const j=()=>{if(b.isMounted){let{next:J,bu:W,u:X,parent:ne,vnode:pe}=b;{const dt=Zc(b);if(dt){J&&(J.el=pe.el,z(b,J,k)),dt.asyncDep.then(()=>{b.isUnmounted||j()});return}}let ue=J,He;$t(b,!1),J?(J.el=pe.el,z(b,J,k)):J=pe,W&&Ds(W),(He=J.props&&J.props.onVnodeBeforeUpdate)&&pt(He,ne,J,pe),$t(b,!0);const Ve=jo(b),ht=b.subTree;b.subTree=Ve,p(ht,Ve,f(ht.el),Me(ht),b,R,D),J.el=Ve.el,ue===null&&lh(b,Ve.el),X&&Xe(X,R),(He=J.props&&J.props.onVnodeUpdated)&&Xe(()=>pt(He,ne,J,pe),R)}else{let J;const{el:W,props:X}=v,{bm:ne,m:pe,parent:ue,root:He,type:Ve}=b,ht=Wr(v);$t(b,!1),ne&&Ds(ne),!ht&&(J=X&&X.onVnodeBeforeMount)&&pt(J,ue,v),$t(b,!0);{He.ce&&He.ce._def.shadowRoot!==!1&&He.ce._injectChildStyle(Ve);const dt=b.subTree=jo(b);p(null,dt,E,F,b,R,D),v.el=dt.el}if(pe&&Xe(pe,R),!ht&&(J=X&&X.onVnodeMounted)){const dt=v;Xe(()=>pt(J,ue,dt),R)}(v.shapeFlag&256||ue&&Wr(ue.vnode)&&ue.vnode.shapeFlag&256)&&b.a&&Xe(b.a,R),b.isMounted=!0,v=E=F=null}};b.scope.on();const U=b.effect=new mc(j);b.scope.off();const G=b.update=U.run.bind(U),Q=b.job=U.runIfDirty.bind(U);Q.i=b,Q.id=b.uid,U.scheduler=()=>Zi(Q),$t(b,!0),G()},z=(b,v,E)=>{v.component=b;const F=b.vnode.props;b.vnode=v,b.next=null,Kf(b,v.props,F,E),Xf(b,v.children,E),Dt(),Do(b),Ft()},N=(b,v,E,F,R,D,k,j,U=!1)=>{const G=b&&b.children,Q=b?b.shapeFlag:0,J=v.children,{patchFlag:W,shapeFlag:X}=v;if(W>0){if(W&128){le(G,J,E,F,R,D,k,j,U);return}else if(W&256){re(G,J,E,F,R,D,k,j,U);return}}X&8?(Q&16&&xe(G,R,D),J!==G&&l(E,J)):Q&16?X&16?le(G,J,E,F,R,D,k,j,U):xe(G,R,D,!0):(Q&8&&l(E,""),X&16&&P(J,E,F,R,D,k,j,U))},re=(b,v,E,F,R,D,k,j,U)=>{b=b||xr,v=v||xr;const G=b.length,Q=v.length,J=Math.min(G,Q);let W;for(W=0;W<J;W++){const X=v[W]=U?Vt(v[W]):At(v[W]);p(b[W],X,E,null,R,D,k,j,U)}G>Q?xe(b,R,D,!0,!1,J):P(v,E,F,R,D,k,j,U,J)},le=(b,v,E,F,R,D,k,j,U)=>{let G=0;const Q=v.length;let J=b.length-1,W=Q-1;for(;G<=J&&G<=W;){const X=b[G],ne=v[G]=U?Vt(v[G]):At(v[G]);if(_r(X,ne))p(X,ne,E,null,R,D,k,j,U);else break;G++}for(;G<=J&&G<=W;){const X=b[J],ne=v[W]=U?Vt(v[W]):At(v[W]);if(_r(X,ne))p(X,ne,E,null,R,D,k,j,U);else break;J--,W--}if(G>J){if(G<=W){const X=W+1,ne=X<Q?v[X].el:F;for(;G<=W;)p(null,v[G]=U?Vt(v[G]):At(v[G]),E,ne,R,D,k,j,U),G++}}else if(G>W)for(;G<=J;)te(b[G],R,D,!0),G++;else{const X=G,ne=G,pe=new Map;for(G=ne;G<=W;G++){const We=v[G]=U?Vt(v[G]):At(v[G]);We.key!=null&&pe.set(We.key,G)}let ue,He=0;const Ve=W-ne+1;let ht=!1,dt=0;const Fr=new Array(Ve);for(G=0;G<Ve;G++)Fr[G]=0;for(G=X;G<=J;G++){const We=b[G];if(He>=Ve){te(We,R,D,!0);continue}let mt;if(We.key!=null)mt=pe.get(We.key);else for(ue=ne;ue<=W;ue++)if(Fr[ue-ne]===0&&_r(We,v[ue])){mt=ue;break}mt===void 0?te(We,R,D,!0):(Fr[mt-ne]=G+1,mt>=dt?dt=mt:ht=!0,p(We,v[mt],E,null,R,D,k,j,U),He++)}const wo=ht?eh(Fr):xr;for(ue=wo.length-1,G=Ve-1;G>=0;G--){const We=ne+G,mt=v[We],So=v[We+1],Io=We+1<Q?So.el||So.placeholder:F;Fr[G]===0?p(null,mt,E,Io,R,D,k,j,U):ht&&(ue<0||G!==wo[ue]?ee(mt,E,Io,2):ue--)}}},ee=(b,v,E,F,R=null)=>{const{el:D,type:k,transition:j,children:U,shapeFlag:G}=b;if(G&6){ee(b.component.subTree,v,E,F);return}if(G&128){b.suspense.move(v,E,F);return}if(G&64){k.move(b,v,E,he);return}if(k===vt){n(D,v,E);for(let J=0;J<U.length;J++)ee(U[J],v,E,F);n(b.anchor,v,E);return}if(k===Hs){M(b,v,E);return}if(F!==2&&G&1&&j)if(F===0)j.beforeEnter(D),n(D,v,E),Xe(()=>j.enter(D),R);else{const{leave:J,delayLeave:W,afterLeave:X}=j,ne=()=>{b.ctx.isUnmounted?s(D):n(D,v,E)},pe=()=>{J(D,()=>{ne(),X&&X()})};W?W(D,ne,pe):pe()}else n(D,v,E)},te=(b,v,E,F=!1,R=!1)=>{const{type:D,props:k,ref:j,children:U,dynamicChildren:G,shapeFlag:Q,patchFlag:J,dirs:W,cacheIndex:X}=b;if(J===-2&&(R=!1),j!=null&&(Dt(),Kr(j,null,E,b,!0),Ft()),X!=null&&(v.renderCache[X]=void 0),Q&256){v.ctx.deactivate(b);return}const ne=Q&1&&W,pe=!Wr(b);let ue;if(pe&&(ue=k&&k.onVnodeBeforeUnmount)&&pt(ue,v,b),Q&6)Ae(b.component,E,F);else{if(Q&128){b.suspense.unmount(E,F);return}ne&&Yt(b,null,v,"beforeUnmount"),Q&64?b.type.remove(b,v,E,he,F):G&&!G.hasOnce&&(D!==vt||J>0&&J&64)?xe(G,v,E,!1,!0):(D===vt&&J&384||!R&&Q&16)&&xe(U,v,E),F&&be(b)}(pe&&(ue=k&&k.onVnodeUnmounted)||ne)&&Xe(()=>{ue&&pt(ue,v,b),ne&&Yt(b,null,v,"unmounted")},E)},be=b=>{const{type:v,el:E,anchor:F,transition:R}=b;if(v===vt){Se(E,F);return}if(v===Hs){A(b);return}const D=()=>{s(E),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(b.shapeFlag&1&&R&&!R.persisted){const{leave:k,delayLeave:j}=R,U=()=>k(E,D);j?j(b.el,D,U):U()}else D()},Se=(b,v)=>{let E;for(;b!==v;)E=h(b),s(b),b=E;s(v)},Ae=(b,v,E)=>{const{bum:F,scope:R,job:D,subTree:k,um:j,m:U,a:G,parent:Q,slots:{__:J}}=b;No(U),No(G),F&&Ds(F),Q&&Y(J)&&J.forEach(W=>{Q.renderCache[W]=void 0}),R.stop(),D&&(D.flags|=8,te(k,b,v,E)),j&&Xe(j,v),Xe(()=>{b.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},xe=(b,v,E,F=!1,R=!1,D=0)=>{for(let k=D;k<b.length;k++)te(b[k],v,E,F,R)},Me=b=>{if(b.shapeFlag&6)return Me(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const v=h(b.anchor||b.el),E=v&&v[vf];return E?h(E):v};let ye=!1;const Ke=(b,v,E)=>{b==null?v._vnode&&te(v._vnode,null,null,!0):p(v._vnode||null,b,v,null,null,null,E),v._vnode=b,ye||(ye=!0,Do(),Dc(),ye=!1)},he={p,um:te,m:ee,r:be,mt:I,mc:P,pc:N,pbc:_,n:Me,o:t};return{render:Ke,hydrate:void 0,createApp:kf(Ke)}}function Ns({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function $t({effect:t,job:e},r){r?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Zf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $c(t,e,r=!1){const n=t.children,s=e.children;if(Y(n)&&Y(s))for(let i=0;i<n.length;i++){const o=n[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vt(s[i]),a.el=o.el),!r&&a.patchFlag!==-2&&$c(o,a)),a.type===gs&&(a.el=o.el),a.type===Sr&&!a.el&&(a.el=o.el)}}function eh(t){const e=t.slice(),r=[0];let n,s,i,o,a;const c=t.length;for(n=0;n<c;n++){const u=t[n];if(u!==0){if(s=r[r.length-1],t[s]<u){e[n]=s,r.push(n);continue}for(i=0,o=r.length-1;i<o;)a=i+o>>1,t[r[a]]<u?i=a+1:o=a;u<t[r[i]]&&(i>0&&(e[n]=r[i-1]),r[i]=n)}}for(i=r.length,o=r[i-1];i-- >0;)r[i]=o,o=e[o];return r}function Zc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zc(e)}function No(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const th=Symbol.for("v-scx"),rh=()=>Dn(th);function js(t,e,r){return el(t,e,r)}function el(t,e,r=me){const{immediate:n,deep:s,flush:i,once:o}=r,a=Ue({},r),c=e&&n||!e&&i!=="post";let u;if(on){if(i==="sync"){const m=rh();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ct,m.resume=Ct,m.pause=Ct,m}}const l=je;a.call=(m,d,p)=>Mt(m,l,d,p);let f=!1;i==="post"?a.scheduler=m=>{Xe(m,l&&l.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,d)=>{d?m():Zi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const h=df(t,e,a);return on&&(u?u.push(h):c&&h()),h}function nh(t,e,r){const n=this.proxy,s=we(t)?t.includes(".")?tl(n,t):()=>n[t]:t.bind(n,n);let i;Z(e)?i=e:(i=e.handler,r=e);const o=dn(this),a=el(s,i.bind(n),r);return o(),a}function tl(t,e){const r=e.split(".");return()=>{let n=t;for(let s=0;s<r.length&&n;s++)n=n[r[s]];return n}}const sh=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${Qt(e)}Modifiers`];function ih(t,e,...r){if(t.isUnmounted)return;const n=t.vnode.props||me;let s=r;const i=e.startsWith("update:"),o=i&&sh(n,e.slice(7));o&&(o.trim&&(s=r.map(l=>we(l)?l.trim():l)),o.number&&(s=r.map(Ou)));let a,c=n[a=Rs(e)]||n[a=Rs(Jt(e))];!c&&i&&(c=n[a=Rs(Qt(e))]),c&&Mt(c,t,6,s);const u=n[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(u,t,6,s)}}function rl(t,e,r=!1){const n=e.emitsCache,s=n.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=u=>{const l=rl(u,e,!0);l&&(a=!0,Ue(o,l))};!r&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&n.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):Ue(o,i),Ce(t)&&n.set(t,o),o)}function ps(t,e){return!t||!as(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Qt(e))||oe(t,e))}function jo(t){const{type:e,vnode:r,proxy:n,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:h,setupState:m,ctx:d,inheritAttrs:p}=t,g=Jn(t);let B,y;try{if(r.shapeFlag&4){const A=s||n,C=A;B=At(u.call(C,A,l,f,m,h,d)),y=a}else{const A=e;B=At(A.length>1?A(f,{attrs:a,slots:o,emit:c}):A(f,null)),y=e.props?a:oh(a)}}catch(A){Qr.length=0,ds(A,t,1),B=ir(Sr)}let M=B;if(y&&p!==!1){const A=Object.keys(y),{shapeFlag:C}=M;A.length&&C&7&&(i&&A.some(Vi)&&(y=ah(y,i)),M=Ir(M,y,!1,!0))}return r.dirs&&(M=Ir(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(r.dirs):r.dirs),r.transition&&eo(M,r.transition),B=M,Jn(g),B}const oh=t=>{let e;for(const r in t)(r==="class"||r==="style"||as(r))&&((e||(e={}))[r]=t[r]);return e},ah=(t,e)=>{const r={};for(const n in t)(!Vi(n)||!(n.slice(9)in e))&&(r[n]=t[n]);return r};function ch(t,e,r){const{props:n,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&c>=0){if(c&1024)return!0;if(c&16)return n?Ho(n,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(o[h]!==n[h]&&!ps(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ho(n,o,u):!0:!!o;return!1}function Ho(t,e,r){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let s=0;s<n.length;s++){const i=n[s];if(e[i]!==t[i]&&!ps(r,i))return!0}return!1}function lh({vnode:t,parent:e},r){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=r,e=e.parent;else break}}const nl=t=>t.__isSuspense;function uh(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):bf(t)}const vt=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),Hs=Symbol.for("v-stc"),Qr=[];let Ze=null;function Vs(t=!1){Qr.push(Ze=t?null:[])}function fh(){Qr.pop(),Ze=Qr[Qr.length-1]||null}let sn=1;function Vo(t,e=!1){sn+=t,t<0&&Ze&&e&&(Ze.hasOnce=!0)}function hh(t){return t.dynamicChildren=sn>0?Ze||xr:null,fh(),sn>0&&Ze&&Ze.push(t),t}function ks(t,e,r,n,s,i){return hh(yt(t,e,r,n,s,i,!0))}function sl(t){return t?t.__v_isVNode===!0:!1}function _r(t,e){return t.type===e.type&&t.key===e.key}const il=({key:t})=>t??null,Fn=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||_e(t)||Z(t)?{i:st,r:t,k:e,f:!!r}:t:null);function yt(t,e=null,r=null,n=0,s=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&il(e),ref:e&&Fn(e),scopeId:Gc,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return a?(no(c,r),i&128&&t.normalize(c)):r&&(c.shapeFlag|=we(r)?8:16),sn>0&&!o&&Ze&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ze.push(c),c}const ir=dh;function dh(t,e=null,r=null,n=0,s=null,i=!1){if((!t||t===Ff)&&(t=Sr),sl(t)){const a=Ir(t,e,!0);return r&&no(a,r),sn>0&&!i&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(t)]=a:Ze.push(a)),a.patchFlag=-2,a}if(Mh(t)&&(t=t.__vccOpts),e){e=mh(e);let{class:a,style:c}=e;a&&!we(a)&&(e.class=en(a)),Ce(c)&&($i(c)&&!Y(c)&&(c=Ue({},c)),e.style=fs(c))}const o=we(t)?1:nl(t)?128:Af(t)?64:Ce(t)?4:Z(t)?2:0;return yt(t,e,r,n,s,o,i,!0)}function mh(t){return t?$i(t)||Kc(t)?Ue({},t):t:null}function Ir(t,e,r=!1,n=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?ph(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&il(u),ref:e&&e.ref?r&&i?Y(i)?i.concat(Fn(e)):[i,Fn(e)]:Fn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ir(t.ssContent),ssFallback:t.ssFallback&&Ir(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&n&&eo(l,c.clone(l)),l}function ol(t=" ",e=0){return ir(gs,null,t,e)}function At(t){return t==null||typeof t=="boolean"?ir(Sr):Y(t)?ir(vt,null,t.slice()):sl(t)?Vt(t):ir(gs,null,String(t))}function Vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ir(t)}function no(t,e){let r=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(Y(e))r=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),no(t,s()),s._c&&(s._d=!0));return}else{r=32;const s=e._;!s&&!Kc(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:st},r=32):(e=String(e),n&64?(r=16,e=[ol(e)]):r=8);t.children=e,t.shapeFlag|=r}function ph(...t){const e={};for(let r=0;r<t.length;r++){const n=t[r];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=en([e.class,n.class]));else if(s==="style")e.style=fs([e.style,n.style]);else if(as(s)){const i=e[s],o=n[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=n[s])}return e}function pt(t,e,r,n=null){Mt(t,e,7,[r,n])}const gh=kc();let bh=0;function yh(t,e,r){const n=t.type,s=(e?e.appContext:t.appContext)||gh,i={uid:bh++,vnode:t,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qc(n,s),emitsOptions:rl(n,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:n.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ih.bind(null,i),t.ce&&t.ce(i),i}let je=null;const Bh=()=>je||st;let Wn,Ei;{const t=us(),e=(r,n)=>{let s;return(s=t[r])||(s=t[r]=[]),s.push(n),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wn=e("__VUE_INSTANCE_SETTERS__",r=>je=r),Ei=e("__VUE_SSR_SETTERS__",r=>on=r)}const dn=t=>{const e=je;return Wn(t),t.scope.on(),()=>{t.scope.off(),Wn(e)}},ko=()=>{je&&je.scope.off(),Wn(null)};function al(t){return t.vnode.shapeFlag&4}let on=!1;function vh(t,e=!1,r=!1){e&&Ei(e);const{props:n,children:s}=t.vnode,i=al(t);Jf(t,n,i,e),Qf(t,s,r||e);const o=i?Ah(t,e):void 0;return e&&Ei(!1),o}function Ah(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_f);const{setup:n}=r;if(n){Dt();const s=t.setupContext=n.length>1?Ch(t):null,i=dn(t),o=hn(n,t,0,[t.props,s]),a=ac(o);if(Ft(),i(),(a||t.sp)&&!Wr(t)&&_c(t),a){if(o.then(ko,ko),e)return o.then(c=>{zo(t,c)}).catch(c=>{ds(c,t,0)});t.asyncDep=o}else zo(t,o)}else cl(t)}function zo(t,e,r){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Pc(e)),cl(t)}function cl(t,e,r){const n=t.type;t.render||(t.render=n.render||Ct);{const s=dn(t);Dt();try{Uf(t)}finally{Ft(),s()}}}const xh={get(t,e){return Ge(t,"get",""),t[e]}};function Ch(t){const e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,xh),slots:t.slots,emit:t.emit,expose:e}}function bs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pc(of(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in qr)return qr[r](t)},has(e,r){return r in e||r in qr}})):t.proxy}function Mh(t){return Z(t)&&"__vccOpts"in t}const wi=(t,e)=>ff(t,e,on),Th="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Si;const Jo=typeof window<"u"&&window.trustedTypes;if(Jo)try{Si=Jo.createPolicy("vue",{createHTML:t=>t})}catch{}const ll=Si?t=>Si.createHTML(t):t=>t,Eh="http://www.w3.org/2000/svg",wh="http://www.w3.org/1998/Math/MathML",St=typeof document<"u"?document:null,Ko=St&&St.createElement("template"),Sh={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,n)=>{const s=e==="svg"?St.createElementNS(Eh,t):e==="mathml"?St.createElementNS(wh,t):r?St.createElement(t,{is:r}):St.createElement(t);return t==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,n,s,i){const o=r?r.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),r),!(s===i||!(s=s.nextSibling)););else{Ko.innerHTML=ll(n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t);const a=Ko.content;if(n==="svg"||n==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,r)}return[o?o.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},Ih=Symbol("_vtc");function Ph(t,e,r){const n=t[Ih];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const qn=Symbol("_vod"),ul=Symbol("_vsh"),Oh={beforeMount(t,{value:e},{transition:r}){t[qn]=t.style.display==="none"?"":t.style.display,r&&e?r.beforeEnter(t):Ur(t,e)},mounted(t,{value:e},{transition:r}){r&&e&&r.enter(t)},updated(t,{value:e,oldValue:r},{transition:n}){!e!=!r&&(n?e?(n.beforeEnter(t),Ur(t,!0),n.enter(t)):n.leave(t,()=>{Ur(t,!1)}):Ur(t,e))},beforeUnmount(t,{value:e}){Ur(t,e)}};function Ur(t,e){t.style.display=e?t[qn]:"none",t[ul]=!e}const Rh=Symbol(""),Dh=/(^|;)\s*display\s*:/;function Fh(t,e,r){const n=t.style,s=we(r);let i=!1;if(r&&!s){if(e)if(we(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();r[a]==null&&Gn(n,a,"")}else for(const o in e)r[o]==null&&Gn(n,o,"");for(const o in r)o==="display"&&(i=!0),Gn(n,o,r[o])}else if(s){if(e!==r){const o=n[Rh];o&&(r+=";"+o),n.cssText=r,i=Dh.test(r)}}else e&&t.removeAttribute("style");qn in t&&(t[qn]=i?n.display:"",t[ul]&&(n.display="none"))}const Wo=/\s*!important$/;function Gn(t,e,r){if(Y(r))r.forEach(n=>Gn(t,e,n));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const n=Gh(t,e);Wo.test(r)?t.setProperty(Qt(n),r.replace(Wo,""),"important"):t[n]=r}}const qo=["Webkit","Moz","ms"],zs={};function Gh(t,e){const r=zs[e];if(r)return r;let n=Jt(e);if(n!=="filter"&&n in t)return zs[e]=n;n=uc(n);for(let s=0;s<qo.length;s++){const i=qo[s]+n;if(i in t)return zs[e]=i}return e}const Qo="http://www.w3.org/1999/xlink";function Xo(t,e,r,n,s,i=Uu(e)){n&&e.startsWith("xlink:")?r==null?t.removeAttributeNS(Qo,e.slice(6,e.length)):t.setAttributeNS(Qo,e,r):r==null||i&&!fc(r)?t.removeAttribute(e):t.setAttribute(e,i?"":qt(r)?String(r):r)}function Yo(t,e,r,n,s){if(e==="innerHTML"||e==="textContent"){r!=null&&(t[e]=e==="innerHTML"?ll(r):r);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=r==null?t.type==="checkbox"?"on":"":String(r);(a!==c||!("_value"in t))&&(t.value=c),r==null&&t.removeAttribute(e),t._value=r;return}let o=!1;if(r===""||r==null){const a=typeof t[e];a==="boolean"?r=fc(r):r==null&&a==="string"?(r="",o=!0):a==="number"&&(r=0,o=!0)}try{t[e]=r}catch{}o&&t.removeAttribute(s||e)}function _h(t,e,r,n){t.addEventListener(e,r,n)}function Uh(t,e,r,n){t.removeEventListener(e,r,n)}const $o=Symbol("_vei");function Lh(t,e,r,n,s=null){const i=t[$o]||(t[$o]={}),o=i[e];if(n&&o)o.value=n;else{const[a,c]=Nh(e);if(n){const u=i[e]=Vh(n,s);_h(t,a,u,c)}else o&&(Uh(t,a,o,c),i[e]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function Nh(t){let e;if(Zo.test(t)){e={};let n;for(;n=t.match(Zo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Js=0;const jh=Promise.resolve(),Hh=()=>Js||(jh.then(()=>Js=0),Js=Date.now());function Vh(t,e){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Mt(kh(n,r.value),e,5,[n])};return r.value=t,r.attached=Hh(),r}function kh(t,e){if(Y(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zh=(t,e,r,n,s,i)=>{const o=s==="svg";e==="class"?Ph(t,n,o):e==="style"?Fh(t,r,n):as(e)?Vi(e)||Lh(t,e,r,n,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jh(t,e,n,o))?(Yo(t,e,n),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xo(t,e,n,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!we(n))?Yo(t,Jt(e),n,i,e):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),Xo(t,e,n,o))};function Jh(t,e,r,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&ea(e)&&Z(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ea(e)&&we(r)?!1:e in t}const Kh=["ctrl","shift","alt","meta"],Wh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kh.some(r=>t[`${r}Key`]&&!e.includes(r))},ta=(t,e)=>{const r=t._withMods||(t._withMods={}),n=e.join(".");return r[n]||(r[n]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Wh[e[o]];if(a&&a(s,e))return}return t(s,...i)})},qh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ra=(t,e)=>{const r=t._withKeys||(t._withKeys={}),n=e.join(".");return r[n]||(r[n]=s=>{if(!("key"in s))return;const i=Qt(s.key);if(e.some(o=>o===i||qh[o]===i))return t(s)})},Qh=Ue({patchProp:zh},Sh);let na;function Xh(){return na||(na=Yf(Qh))}const Yh=(...t)=>{const e=Xh().createApp(...t),{mount:r}=e;return e.mount=n=>{const s=Zh(n);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=r(s,!1,$h(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $h(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zh(t){return we(t)?document.querySelector(t):t}const ed="/projects/webGPU-Basics-Collections/assets/expand-yilVOYUy.png",an=16;function Pe({name:t="default",albedo:e=[1,1,1],roughness:r=.98,metalness:n=0,usePerlinRoughness:s=!1,usePerlinMetalness:i=!1,perlinFreq:o=2,useAlbedoTexture:a=!1,useMetalnessTexture:c=!1,useRoughnessTexture:u=!1,useNormalTexture:l=!1,textureIndex:f=-1}){return{name:t,albedo:e,roughness:r,usePerlinRoughness:s,metalness:n,usePerlinMetalness:i,perlinFreq:o,useAlbedoTexture:a,useMetalnessTexture:c,useRoughnessTexture:u,useNormalTexture:l,textureIndex:f}}function so(t){const e=new Array(an),r=new Float32Array(e);return r.set(t.albedo,0),r[3]=t.metalness,r[4]=t.usePerlinMetalness?1:0,r[5]=t.roughness,r[6]=t.usePerlinRoughness?1:0,r[7]=t.perlinFreq,r[8]=t.useAlbedoTexture?1:0,r[9]=t.useMetalnessTexture?1:0,r[10]=t.useRoughnessTexture?1:0,r[11]=t.useNormalTexture?1:0,r[12]=t.textureIndex,r}function fl(t){const e=[];for(const r of t)e.push(...r.albedo),e.push(r.metalness),e.push(r.usePerlinMetalness?1:0),e.push(r.roughness),e.push(r.usePerlinRoughness?1:0),e.push(r.perlinFreq),e.push(r.useAlbedoTexture?1:0),e.push(r.useMetalnessTexture?1:0),e.push(r.useRoughnessTexture?1:0),e.push(r.useNormalTexture?1:0),e.push(r.textureIndex),e.push(0),e.push(0),e.push(0);return new Float32Array(e)}var td=1e-6,Te=typeof Float32Array<"u"?Float32Array:Array,rd="zyx";function jr(){var t=new Te(4);return Te!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function Qn(t,e,r,n){var s=new Te(4);return s[0]=t,s[1]=e,s[2]=r,s[3]=n,s}function _n(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function nd(t,e,r){var n=e[0],s=e[1],i=e[2],o=e[3],a=r[0],c=r[1],u=r[2],l=r[3];return t[0]=n*a+i*c,t[1]=s*a+o*c,t[2]=n*u+i*l,t[3]=s*u+o*l,t}function or(){var t=new Te(9);return Te!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function sd(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Ii(t,e,r,n,s,i,o,a,c){var u=new Te(9);return u[0]=t,u[1]=e,u[2]=r,u[3]=n,u[4]=s,u[5]=i,u[6]=o,u[7]=a,u[8]=c,u}function sa(t,e){var r=e[0],n=e[1],s=e[2],i=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],f=e[9],h=e[10],m=e[11],d=e[12],p=e[13],g=e[14],B=e[15],y=r*a-n*o,M=r*c-s*o,A=r*u-i*o,C=n*c-s*a,S=n*u-i*a,x=s*u-i*c,P=l*p-f*d,O=l*g-h*d,_=l*B-m*d,V=f*g-h*p,H=f*B-m*p,L=h*B-m*g,I=y*L-M*H+A*V+C*_-S*O+x*P;return I?(I=1/I,t[0]=(a*L-c*H+u*V)*I,t[1]=(c*_-o*L-u*O)*I,t[2]=(o*H-a*_+u*P)*I,t[3]=(s*H-n*L-i*V)*I,t[4]=(r*L-s*_+i*O)*I,t[5]=(n*_-r*H-i*P)*I,t[6]=(p*x-g*S+B*C)*I,t[7]=(g*A-d*x-B*M)*I,t[8]=(d*S-p*A+B*y)*I,t):null}function ia(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function oa(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function vr(){var t=new Te(16);return Te!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function hl(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function id(t,e){var r=e[0],n=e[1],s=e[2],i=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],f=e[9],h=e[10],m=e[11],d=e[12],p=e[13],g=e[14],B=e[15],y=r*a-n*o,M=r*c-s*o,A=r*u-i*o,C=n*c-s*a,S=n*u-i*a,x=s*u-i*c,P=l*p-f*d,O=l*g-h*d,_=l*B-m*d,V=f*g-h*p,H=f*B-m*p,L=h*B-m*g,I=y*L-M*H+A*V+C*_-S*O+x*P;return I?(I=1/I,t[0]=(a*L-c*H+u*V)*I,t[1]=(s*H-n*L-i*V)*I,t[2]=(p*x-g*S+B*C)*I,t[3]=(h*S-f*x-m*C)*I,t[4]=(c*_-o*L-u*O)*I,t[5]=(r*L-s*_+i*O)*I,t[6]=(g*A-d*x-B*M)*I,t[7]=(l*x-h*A+m*M)*I,t[8]=(o*H-a*_+u*P)*I,t[9]=(n*_-r*H-i*P)*I,t[10]=(d*S-p*A+B*y)*I,t[11]=(f*A-l*S-m*y)*I,t[12]=(a*O-o*V-c*P)*I,t[13]=(r*V-n*O+s*P)*I,t[14]=(p*M-d*C-g*y)*I,t[15]=(l*C-f*M+h*y)*I,t):null}function od(t,e,r,n){var s=e[0],i=e[1],o=e[2],a=e[3],c=s+s,u=i+i,l=o+o,f=s*c,h=s*u,m=s*l,d=i*u,p=i*l,g=o*l,B=a*c,y=a*u,M=a*l,A=n[0],C=n[1],S=n[2];return t[0]=(1-(d+g))*A,t[1]=(h+M)*A,t[2]=(m-y)*A,t[3]=0,t[4]=(h-M)*C,t[5]=(1-(f+g))*C,t[6]=(p+B)*C,t[7]=0,t[8]=(m+y)*S,t[9]=(p-B)*S,t[10]=(1-(f+d))*S,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function se(){var t=new Te(3);return Te!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function ad(t){var e=new Te(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Un(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function T(t,e,r){var n=new Te(3);return n[0]=t,n[1]=e,n[2]=r,n}function yr(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Pi(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function Nt(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function ys(t,e){var r=e[0],n=e[1],s=e[2],i=r*r+n*n+s*s;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function rr(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Ln(t,e,r){var n=e[0],s=e[1],i=e[2],o=r[0],a=r[1],c=r[2];return t[0]=s*c-i*a,t[1]=i*o-n*c,t[2]=n*a-s*o,t}function aa(t,e,r){var n=e[0],s=e[1],i=e[2],o=r[3]*n+r[7]*s+r[11]*i+r[15];return o=o||1,t[0]=(r[0]*n+r[4]*s+r[8]*i+r[12])/o,t[1]=(r[1]*n+r[5]*s+r[9]*i+r[13])/o,t[2]=(r[2]*n+r[6]*s+r[10]*i+r[14])/o,t}function cn(t,e,r){var n=e[0],s=e[1],i=e[2];return t[0]=n*r[0]+s*r[3]+i*r[6],t[1]=n*r[1]+s*r[4]+i*r[7],t[2]=n*r[2]+s*r[5]+i*r[8],t}var Ar=Pi,cd=Un;(function(){var t=se();return function(e,r,n,s,i,o){var a,c;for(r||(r=3),n||(n=0),s?c=Math.min(s*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],i(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function ld(){var t=new Te(4);return Te!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function ud(t,e,r,n){var s=new Te(4);return s[0]=t,s[1]=e,s[2]=r,s[3]=n,s}function fd(t,e){var r=e[0],n=e[1],s=e[2],i=e[3],o=r*r+n*n+s*s+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=r*o,t[1]=n*o,t[2]=s*o,t[3]=i*o,t}(function(){var t=ld();return function(e,r,n,s,i,o){var a,c;for(r||(r=4),n||(n=0),s?c=Math.min(s*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],i(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}})();function ln(){var t=new Te(4);return Te!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function hd(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function dd(t,e,r){var n=e[0],s=e[1],i=e[2],o=e[3],a=r[0],c=r[1],u=r[2],l=r[3];return t[0]=n*l+o*a+s*u-i*c,t[1]=s*l+o*c+i*a-n*u,t[2]=i*l+o*u+n*c-s*a,t[3]=o*l-n*a-s*c-i*u,t}function Ks(t,e,r,n){var s=e[0],i=e[1],o=e[2],a=e[3],c=r[0],u=r[1],l=r[2],f=r[3],h,m,d,p,g;return m=s*c+i*u+o*l+a*f,m<0&&(m=-m,c=-c,u=-u,l=-l,f=-f),1-m>td?(h=Math.acos(m),d=Math.sin(h),p=Math.sin((1-n)*h)/d,g=Math.sin(n*h)/d):(p=1-n,g=n),t[0]=p*s+g*c,t[1]=p*i+g*u,t[2]=p*o+g*l,t[3]=p*a+g*f,t}function md(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var s=0;e[4]>e[0]&&(s=1),e[8]>e[s*3+s]&&(s=2);var i=(s+1)%3,o=(s+2)%3;n=Math.sqrt(e[s*3+s]-e[i*3+i]-e[o*3+o]+1),t[s]=.5*n,n=.5/n,t[3]=(e[i*3+o]-e[o*3+i])*n,t[i]=(e[i*3+s]+e[s*3+i])*n,t[o]=(e[o*3+s]+e[s*3+o])*n}return t}function dl(t,e,r,n){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:rd,i=Math.PI/360;e*=i,n*=i,r*=i;var o=Math.sin(e),a=Math.cos(e),c=Math.sin(r),u=Math.cos(r),l=Math.sin(n),f=Math.cos(n);switch(s){case"xyz":t[0]=o*u*f+a*c*l,t[1]=a*c*f-o*u*l,t[2]=a*u*l+o*c*f,t[3]=a*u*f-o*c*l;break;case"xzy":t[0]=o*u*f-a*c*l,t[1]=a*c*f-o*u*l,t[2]=a*u*l+o*c*f,t[3]=a*u*f+o*c*l;break;case"yxz":t[0]=o*u*f+a*c*l,t[1]=a*c*f-o*u*l,t[2]=a*u*l-o*c*f,t[3]=a*u*f+o*c*l;break;case"yzx":t[0]=o*u*f+a*c*l,t[1]=a*c*f+o*u*l,t[2]=a*u*l-o*c*f,t[3]=a*u*f-o*c*l;break;case"zxy":t[0]=o*u*f-a*c*l,t[1]=a*c*f+o*u*l,t[2]=a*u*l+o*c*f,t[3]=a*u*f-o*c*l;break;case"zyx":t[0]=o*u*f-a*c*l,t[1]=a*c*f+o*u*l,t[2]=a*u*l-o*c*f,t[3]=a*u*f+o*c*l;break;default:throw new Error("Unknown angle order "+s)}return t}var Ws=ud,ml=fd;(function(){var t=se(),e=T(1,0,0),r=T(0,1,0);return function(n,s,i){var o=rr(s,i);return o<-.999999?(Ln(t,e,s),cd(t)<1e-6&&Ln(t,r,s),ys(t,t),hd(n,t,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(Ln(t,s,i),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+o,ml(n,n))}})();(function(){var t=ln(),e=ln();return function(r,n,s,i,o,a){return Ks(t,n,o,a),Ks(e,s,i,a),Ks(r,t,e,2*a*(1-a)),r}})();(function(){var t=or();return function(e,r,n,s){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=s[0],t[4]=s[1],t[7]=s[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],ml(e,md(e,t))}})();function q(){var t=new Te(2);return Te!=Float32Array&&(t[0]=0,t[1]=0),t}function Xn(t){var e=new Te(2);return e[0]=t[0],e[1]=t[1],e}function $(t,e){var r=new Te(2);return r[0]=t,r[1]=e,r}function It(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function pd(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function wt(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function gd(t){var e=t[0],r=t[1];return e*e+r*r}function Ye(t,e){return t[0]*e[0]+t[1]*e[1]}function bd(t,e,r,n){var s=e[0],i=e[1];return t[0]=s+n*(r[0]-s),t[1]=i+n*(r[1]-i),t}function De(t,e,r){var n=e[0],s=e[1];return t[0]=r[0]*n+r[2]*s,t[1]=r[1]*n+r[3]*s,t}var gt=pd;(function(){var t=q();return function(e,r,n,s,i,o){var a,c;for(r||(r=2),n||(n=0),s?c=Math.min(s*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],i(t,t,o),e[a]=t[0],e[a+1]=t[1];return e}})();function hr(t){const e=Math.cos(t),r=Math.sin(t);return Qn(e,r,-r,e)}function pl(t,e,r){const n=Math.cos(t),s=Math.sin(t),i=Math.cos(e),o=Math.sin(e),a=Math.cos(r),c=Math.sin(r);return Ii(i*a,-i*c,o,s*o*a+n*c,-s*o*c+n*a,-s*i,-n*o*a+s*c,n*o*c+s*a,n*i)}function yd(t,e){const r=or();return r[0]=t[0]*e[0],r[1]=t[0]*e[1],r[2]=t[0]*e[2],r[3]=t[1]*e[0],r[4]=t[1]*e[1],r[5]=t[1]*e[2],r[6]=t[2]*e[0],r[7]=t[2]*e[1],r[8]=t[2]*e[2],r}function Bd(t,e){let r=t[0],n=t[3]/t[0],s=t[6]/t[0],i=t[4]-n*n*r,o=(t[7]-s*n*r)/i,a=t[8]-(s*s*r+o*o*i),c=e[0],u=e[1]-n*c,l=e[2]-s*c-o*u,f=c/r,h=u/i,m=l/a;const d=T(0,0,0);return d[2]=m,d[1]=h-o*d[2],d[0]=f-n*d[1]-s*d[2],d}function ce(t=0,e=1){return t===void 0?(t=0,e=1):e===void 0&&(e=t,t=0),t+Math.random()*(e-t)}function vd(t,e,r,n){return T(ce(t,t+r),ce(e,e+n),ce(0,Math.PI*2))}function Ad(){const t=Math.floor(ce(0,256)),e=Math.floor(ce(0,256)),r=Math.floor(ce(0,256)),n=255;return new Uint8Array([t,e,r,n])}function Mn(t,e){return t[0]*e[1]-t[1]*e[0]}function io(t,e,r){const n=Pi(se(),e,t),s=Pi(se(),r,t);return ys(se(),Ln(se(),n,s))}function xd(t){return t*(180/Math.PI)}function Cd(t){return t*(Math.PI/180)}function mn(){return document.getElementById("info")}function cr(){return document.getElementById("utils")}function gl(){cr()}function pn(){const t=cr();if(t)for(;t.firstChild;)t.removeChild(t.firstChild);gl()}function Oi(t,e,r,n){const s=document.createElement("label");s.textContent=t,s.htmlFor=`checkbox-${t}`;const i=document.createElement("input");return i.type="checkbox",i.id=`checkbox-${t}`,i.checked=e,i.tabIndex=-1,i.style.cssText=`
        margin-left: 8px;
        transform: scale(1.2);
        cursor: pointer;
    `,i.addEventListener("change",()=>{n(i.checked)}),r.appendChild(s),r.appendChild(i),i}function Hr(t,e,r,n,s,i,o){const a=document.createElement("label");a.textContent=`${t}: ${e.toFixed(2)}`,a.htmlFor=`slider-${t}`;const c=document.createElement("input");return c.type="range",c.id=`slider-${t}`,c.min=r.toString(),c.max=n.toString(),c.step=s.toString(),c.value=e.toString(),c.style.cssText=`
        width: 150px;
        margin-left: 8px;
        cursor: pointer;
    `,c.addEventListener("input",()=>{const u=parseFloat(c.value);o(isNaN(u)?0:u),a.textContent=`${t}: ${u.toFixed(2)}`}),i.appendChild(a),i.appendChild(c),c}function bl(t,e,r){const n=document.createElement("button");return n.style.cssText="background-color: #444444; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;",n.textContent=t,n.tabIndex=-1,n.addEventListener("click",r),e.appendChild(n),n}function yl(t,e,r,n){const s=document.createElement("div");s.style.cssText=`
        position: fixed;
        left: ${t.x+15}px;
        top: ${t.y}px;
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
    `;const i=document.createElement("div");i.textContent=`Material: ${e.name}`,i.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,s.appendChild(i);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const a=document.createElement("label");a.textContent="Albedo:",o.appendChild(a);const c=z=>Math.round(z*255).toString(16).padStart(2,"0"),u=`#${c(e.albedo[0])}${c(e.albedo[1])}${c(e.albedo[2])}`,l=document.createElement("input");l.type="color",l.value=u,l.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,l.tabIndex=-1,o.appendChild(l);const f=document.createElement("span");f.textContent=u.toUpperCase(),f.style.cssText="font-family: monospace; color: #aaa;",o.appendChild(f),l.addEventListener("input",()=>{f.textContent=l.value.toUpperCase();const z=parseInt(l.value.slice(1,3),16)/255,N=parseInt(l.value.slice(3,5),16)/255,re=parseInt(l.value.slice(5,7),16)/255;e.albedo=[z,N,re],r(e)}),s.appendChild(o);const h=document.createElement("label");h.textContent="Albedo texture",o.appendChild(h);const m=document.createElement("input");m.type="checkbox",m.checked=e.useAlbedoTexture,m.tabIndex=-1,o.appendChild(m),m.addEventListener("change",()=>{e.useAlbedoTexture=m.checked,r(e)});const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent=`Metalness: ${e.metalness.toFixed(2)}`,d.appendChild(p);const g=document.createElement("input");g.type="range",g.min="0",g.max="1",g.step="0.01",g.value=e.metalness.toString(),g.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,g.tabIndex=-1,d.appendChild(g),s.appendChild(d),g.addEventListener("input",()=>{const z=parseFloat(g.value);e.metalness=isNaN(z)?0:z,p.textContent=`Metalness: ${e.metalness.toFixed(2)}`,r(e)});const B=document.createElement("label");B.textContent="Perlin noise",d.appendChild(B);const y=document.createElement("input");y.type="checkbox",y.checked=e.usePerlinMetalness,y.tabIndex=-1,d.appendChild(y),y.addEventListener("change",()=>{e.usePerlinMetalness=y.checked,r(e)});const M=document.createElement("label");M.textContent="Metalness texture",d.appendChild(M);const A=document.createElement("input");A.type="checkbox",A.checked=e.useMetalnessTexture,A.tabIndex=-1,d.appendChild(A),A.addEventListener("change",()=>{e.useMetalnessTexture=A.checked,r(e)});const C=document.createElement("div");C.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const S=document.createElement("label");S.textContent=`Roughness: ${e.roughness.toFixed(2)}`,C.appendChild(S);const x=document.createElement("input");x.type="range",x.min="0",x.max="1",x.step="0.01",x.value=e.roughness.toString(),x.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,x.tabIndex=-1,C.appendChild(x),s.appendChild(C),x.addEventListener("input",()=>{const z=parseFloat(x.value);e.roughness=isNaN(z)?0:z,S.textContent=`Roughness: ${e.roughness.toFixed(2)}`,r(e)});const P=document.createElement("label");P.textContent="Perlin noise",C.appendChild(P);const O=document.createElement("input");O.type="checkbox",O.checked=e.usePerlinRoughness,O.tabIndex=-1,C.appendChild(O),O.addEventListener("change",()=>{e.usePerlinRoughness=O.checked,r(e)});const _=document.createElement("label");_.textContent="Roughness texture",C.appendChild(_);const V=document.createElement("input");V.type="checkbox",V.checked=e.useRoughnessTexture,V.tabIndex=-1,C.appendChild(V),V.addEventListener("change",()=>{e.useRoughnessTexture=V.checked,r(e)});const H=document.createElement("div");H.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const L=document.createElement("label");L.textContent=`Perlin Frequency: ${e.perlinFreq.toFixed(2)}`,H.appendChild(L);const I=document.createElement("input");I.type="range",I.min="0.1",I.max="10",I.step="0.1",I.value=e.perlinFreq.toString(),I.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,I.tabIndex=-1,H.appendChild(I),s.appendChild(H),I.addEventListener("input",()=>{const z=parseFloat(I.value);e.perlinFreq=isNaN(z)?.1:z,L.textContent=`Perlin Frequency: ${e.perlinFreq.toFixed(2)}`,r(e)});const w=document.createElement("div");w.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const K=document.createElement("button");return K.textContent="Cancel",K.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,K.tabIndex=-1,K.addEventListener("click",()=>{n()}),w.appendChild(K),s.appendChild(w),s}function Bl(t,e,r,n,s){const i=document.createElement("div");i.style.cssText=`
        position: fixed;
        left: ${t.x+15}px;
        top: ${t.y}px;
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
    `,i.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const c=document.createElement("label");c.textContent="Enabled:",a.appendChild(c);const u=document.createElement("input");u.type="checkbox",u.checked=e.enabled,u.tabIndex=-1,a.appendChild(u),u.addEventListener("change",()=>{e.enabled=u.checked,n(e)}),i.appendChild(a);const l=document.createElement("div");l.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const f=document.createElement("label");f.textContent="Light position:",l.appendChild(f),["X","Y","Z"].forEach((H,L)=>{const I=document.createElement("input");I.type="number",I.value=e.position[L].toFixed(2),I.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,I.tabIndex=-1,l.appendChild(I),I.addEventListener("input",()=>{const w=parseFloat(I.value);e.position[L]=isNaN(w)?0:w,n(e)}),I.placeholder=H}),i.appendChild(l);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Light direction:",h.appendChild(m),["X","Y","Z"].forEach((H,L)=>{const I=document.createElement("input");I.type="number",I.value=e.direction[L].toFixed(2),I.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,I.tabIndex=-1,h.appendChild(I),I.addEventListener("input",()=>{const w=parseFloat(I.value);e.direction[L]=isNaN(w)?0:w,n(e)}),I.placeholder=H}),i.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Light intensity:",d.appendChild(p);const g=document.createElement("input");g.type="number",g.value=e.intensity.toFixed(2),g.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,g.tabIndex=-1,d.appendChild(g),g.addEventListener("input",()=>{const H=parseFloat(g.value);e.intensity=isNaN(H)?0:H,n(e)}),i.appendChild(d);const B=document.createElement("div");B.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const y=document.createElement("label");y.textContent="Cone angle:",B.appendChild(y);const M=document.createElement("input");M.type="range",M.value=xd(e.coneAngle).toFixed(2),M.min="0",M.max="180",M.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,M.tabIndex=-1,B.appendChild(M),M.addEventListener("input",()=>{const H=parseFloat(M.value),L=Cd(H);e.coneAngle=isNaN(L)?0:L,n(e)}),i.appendChild(B);const A=document.createElement("div");A.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const C=document.createElement("label");C.textContent="Light color:",A.appendChild(C);const S=H=>Math.round(H*255).toString(16).padStart(2,"0"),x=`#${S(e.color[0])}${S(e.color[1])}${S(e.color[2])}`,P=document.createElement("input");P.type="color",P.value=x,P.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,P.tabIndex=-1,A.appendChild(P);const O=document.createElement("span");O.textContent=x.toUpperCase(),O.style.cssText="font-family: monospace; color: #aaa;",A.appendChild(O),P.addEventListener("input",()=>{O.textContent=P.value.toUpperCase(),e.color=[parseInt(P.value.slice(1,3),16)/255,parseInt(P.value.slice(3,5),16)/255,parseInt(P.value.slice(5,7),16)/255],n(e)}),i.appendChild(A);const _=document.createElement("div");_.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const V=document.createElement("button");return V.textContent="Cancel",V.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,V.tabIndex=-1,V.addEventListener("click",()=>{s()}),_.appendChild(V),i.appendChild(_),i}const Md=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,Td=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function Ed(t){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=t.getContext("webgpu"),s=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:r,format:s,alphaMode:"premultiplied"});const i=wd(r),o=Sd(r,i,i,s),a={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(u=>{for(const l of u){const f=l.target,h=l.contentBoxSize[0].inlineSize,m=l.contentBoxSize[0].blockSize;f.width=Math.max(1,Math.min(h,r.limits.maxTextureDimension2D)),f.height=Math.max(1,Math.min(m,r.limits.maxTextureDimension2D))}Id(r,n,o,a)}).observe(t),null}function wd(t){return t.createShaderModule({label:"hardcoded red triangle",code:`${Md}
${Td}`})}function Sd(t,e,r,n){return t.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function Id(t,e,r,n){n.colorAttachments[0].view=e.getCurrentTexture().createView();const s=t.createCommandEncoder({label:"pass encoder"}),i=s.beginRenderPass(n);i.setPipeline(r),i.draw(3),i.end();const o=s.finish();t.queue.submit([o])}const Pd=`// We declare a storage variable to read from and write to\r
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
// }`;async function Od(t){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=Rd(r),s=Dd(r,n),i=new Float32Array([1,3,5]),o=Fd(r,i),a=Gd(r,i.byteLength),c=_d(r,s.getBindGroupLayout(0),o),u=r.createCommandEncoder({label:"command encoder"}),l=u.beginComputePass({label:"basic compute pass"});l.setPipeline(s),l.setBindGroup(0,c),l.dispatchWorkgroups(i.length),l.end(),u.copyBufferToBuffer(o,0,a,0,a.size);const f=u.finish();r.queue.submit([f]),console.log("We send this Input: ",i);const h=performance.now();await a.mapAsync(GPUMapMode.READ);const m=new Float32Array(a.getMappedRange());return console.log("Computation took: ",performance.now()-h,"ms"),console.log("We got this Result: ",m),a.unmap(),null}function Rd(t){return t.createShaderModule({label:"basic compute module",code:`${Pd}`})}function Dd(t,e){return t.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:e,entryPoint:"computeSomething"}})}function Fd(t,e){const r=t.createBuffer({label:"work buffer",size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return t.queue.writeBuffer(r,0,e),r}function Gd(t,e){return t.createBuffer({label:"result buffer",size:e,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function _d(t,e,r){return t.createBindGroup({label:"basic bind group",layout:e,entries:[{binding:0,resource:{buffer:r}}]})}const Ud=`// ============================== //\r
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
}`,Ld=`// ============================== //\r
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
}`;async function Lt(t=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const e=await navigator.gpu.requestAdapter();if(!e)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const r=s=>{const i=e.features.has(s);return i?console.log(`WebGPU feature supported: ${s}`):console.warn(`WebGPU feature not supported: ${s}`),i};t=t.filter(s=>r(s));const n=await e.requestDevice({requiredFeatures:t});return n.lost.then(s=>{console.error(`WebGPU device was lost: ${s.message}`)}),n}function ft(t,e,r,n="shader module"){const s=t.createShaderModule({label:`${n} - vertex`,code:e}),i=t.createShaderModule({label:`${n} - fragment`,code:r});return{vertex:s,fragment:i}}function oo(t,e){if(!t)return null;const r=t.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:e}),n=t.createBuffer({label:"timestamp-query-resolve-buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),s=t.createBuffer({label:"timestamp-query-result-buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:r,resolveBuffer:n,resultBuffer:s}}function Nd(t,e){return!t||!e?!1:(e.resolveQuerySet(t.querySet,0,t.querySet.count,t.resolveBuffer,0),t.resultBuffer.mapState==="unmapped"&&e.copyBufferToBuffer(t.resolveBuffer,0,t.resultBuffer,0,t.resultBuffer.size),!0)}function jt(t){const e=t.reduce((s,i)=>s+i.length,0),r=new Float32Array(e);let n=0;for(const s of t)r.set(s,n),n+=s.length;return r}function ca(t,e){const r=t.reduce((o,a)=>o+a.length,0),n=new Uint16Array(r);let s=0,i=0;for(let o=0;o<t.length;o++){const a=t[o];for(let c=0;c<a.length;c++)n[s+c]=a[c]+i;s+=a.length,i+=e[o]}return n}const jd=0,Hd=4,Vd=0,kd=100;async function zd(t){const e=await Lt();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const s=la(e,"hardcoded triangle",Ud),i=la(e,"hardcoded triangle",Ld),o=Jd(e,s,i,n),a=32,c=8,u=[];for(let h=0;h<kd;h++){const m=ua(e,a);{const y=new Float32Array(a/4);y.set([ce(.1),ce(.1),ce(.1),1],jd),y.set([ce(-.9,.9),ce(-.9,.9)],Hd),e.queue.writeBuffer(m,0,y)}const d=new Float32Array(c/4),p=ua(e,c),B={uniformBindGroup:Wd(e,o.getBindGroupLayout(0),m,p),uniformBuffer:p,uniformValues:d,scale:ce(.2,.5)};u.push(B)}const l={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(h=>{for(const m of h){const d=m.target,p=m.contentBoxSize[0].inlineSize,g=m.contentBoxSize[0].blockSize;d.width=Math.max(1,Math.min(p,e.limits.maxTextureDimension2D)),d.height=Math.max(1,Math.min(g,e.limits.maxTextureDimension2D))}Kd(e,t,r,o,l,u)}).observe(t),null}function la(t,e,r){return t.createShaderModule({label:e,code:r})}function Jd(t,e,r,n){return t.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function Kd(t,e,r,n,s,i){s.colorAttachments[0].view=r.getCurrentTexture().createView();const o=t.createCommandEncoder({label:"pass encoder"}),a=o.beginRenderPass(s);a.setPipeline(n);const c=e.width/e.height;for(const l of i)l.uniformValues.set([l.scale/c,l.scale],Vd),t.queue.writeBuffer(l.uniformBuffer,0,l.uniformValues),a.setBindGroup(0,l.uniformBindGroup),a.draw(3);a.end();const u=o.finish();t.queue.submit([u])}function ua(t,e){return t.createBuffer({label:"uniform buffer",size:e,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function Wd(t,e,r,n){return t.createBindGroup({label:"uniform bind group",layout:e,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}}]})}const qd=`// ============================== //\r
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
}`,Qd=`// ============================== //\r
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
}`;function Bs(t){const e={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:t,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,viewMatrix:Xd(),projectionMatrix:xl(Math.PI/4,t,.1,1e3)};return vl(e),e}function vs(t,e,r,n){t.position[0]=e,t.position[1]=r,t.position[2]=n,ao(t)}function As(t,e){t.aspect=e,Al(t)}function xs(t,e,r){t.near=e,t.far=r,Al(t)}function Cs(t,e,r,n){t.position[0]+=t.forward[0]*e+t.right[0]*r+t.up[0]*n,t.position[1]+=t.forward[1]*e+t.right[1]*r+t.up[1]*n,t.position[2]+=t.forward[2]*e+t.right[2]*r+t.up[2]*n,ao(t)}function gn(t,e,r){t.yaw+=e,t.pitch+=r;const n=Math.PI/2-.01;for(t.pitch=Math.max(-n,Math.min(n,t.pitch));t.yaw>Math.PI;)t.yaw-=2*Math.PI;for(;t.yaw<-Math.PI;)t.yaw+=2*Math.PI;vl(t)}function Ee(t,e,r){gn(t,e*t.rotateSpeed,r*t.rotateSpeed)}function vl(t){t.forward[0]=Math.cos(t.pitch)*Math.cos(t.yaw),t.forward[1]=Math.sin(t.pitch),t.forward[2]=Math.cos(t.pitch)*Math.sin(t.yaw),Xr(t.forward);const e=Yn(t.forward,t.worldUp);Xr(e),t.right[0]=e[0],t.right[1]=e[1],t.right[2]=e[2];const r=Yn(t.right,t.forward);Xr(r),t.up[0]=r[0],t.up[1]=r[1],t.up[2]=r[2],ao(t)}function ao(t){const e=new Float32Array([t.position[0]+t.forward[0],t.position[1]+t.forward[1],t.position[2]+t.forward[2]]);t.viewMatrix=Yd(t.position,e,t.up)}function Al(t){t.projectionMatrix=xl(t.fovY,t.aspect,t.near,t.far)}function Xd(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function xl(t,e,r,n){const s=1/Math.tan(t*.5),i=1/(r-n);return new Float32Array([s/e,0,0,0,0,s,0,0,0,0,n*i,-1,0,0,r*n*i,0])}function Yd(t,e,r){const n=new Float32Array([t[0]-e[0],t[1]-e[1],t[2]-e[2]]);Xr(n);const s=Yn(r,n);Xr(s);const i=Yn(n,s);return new Float32Array([s[0],i[0],n[0],0,s[1],i[1],n[1],0,s[2],i[2],n[2],0,-qs(s,t),-qs(i,t),-qs(n,t),1])}function Xr(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);e>1e-5&&(t[0]/=e,t[1]/=e,t[2]/=e)}function Yn(t,e){return new Float32Array([t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]])}function qs(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Ms(t){const e=Math.tan(t.fovY/2),r=t.aspect*e,n=e;return new Float32Array([t.right[0]*r,t.right[1]*r,t.right[2]*r,0,t.up[0]*n,t.up[1]*n,t.up[2]*n,0,t.forward[0],t.forward[1],t.forward[2],0,0,0,0,1])}function Cl(t,e,r){const n=Ms(t),s=T(n[0]*e+n[4]*r+n[8]*1,n[1]*e+n[5]*r+n[9]*1,n[2]*e+n[6]*r+n[10]*1);return ys(s,s),{origin:t.position,direction:s,invDir:T(1/s[0],1/s[1],1/s[2])}}function $d(t,e,r){const n=T(e[0]-t.origin[0],e[1]-t.origin[1],e[2]-t.origin[2]),s=rr(n,t.direction);if(s<0)return-1;const i=rr(n,n)-s*s,o=r*r;if(i>o)return-1;const a=Math.sqrt(o-i),c=s-a;return c<0?-1:c}function Qs(t,e,r){const n=t.direction[0]!==0?1/t.direction[0]:t.direction[0]>=0?1e30:-1e30;let s=(e[0]-t.origin[0])*n,i=(r[0]-t.origin[0])*n;s>i&&([s,i]=[i,s]);const o=t.direction[1]!==0?1/t.direction[1]:t.direction[1]>=0?1e30:-1e30;let a=(e[1]-t.origin[1])*o,c=(r[1]-t.origin[1])*o;if(a>c&&([a,c]=[c,a]),s>c||a>i)return-1;a>s&&(s=a),c<i&&(i=c);const u=t.direction[2]!==0?1/t.direction[2]:t.direction[2]>=0?1e30:-1e30;let l=(e[2]-t.origin[2])*u,f=(r[2]-t.origin[2])*u;return l>f&&([l,f]=[f,l]),s>f||l>i||(l>s&&(s=l),f<i&&(i=f),i<0)?-1:s>=0?s:0}const tt=Number.MAX_VALUE,rt=-Number.MAX_VALUE,Zd=32;class em{constructor(e,r,n,s){this.v0=e,this.v1=r,this.v2=n,this.originalIndex=s;const i=e[0],o=e[1],a=e[2],c=r[0],u=r[1],l=r[2],f=n[0],h=n[1],m=n[2];this.center=[(i+c+f)/3,(o+u+h)/3,(a+l+m)/3];var d=Math.min(i,c,f),p=Math.min(o,u,h),g=Math.min(a,l,m);this.MinValues=[d,p,g];var B=Math.max(i,c,f),y=Math.max(o,u,h),M=Math.max(a,l,m);this.MaxValues=[B,y,M]}originalIndex;center;MinValues;MaxValues}class Xs{minBounds;maxBounds;triangleCount;startIndex;constructor(e,r,n,s){this.minBounds=e,this.maxBounds=r,this.triangleCount=n,this.startIndex=s}}class tm{Triangles=[];builtTriangles=[];Nodes=[];buildBVH(e){this.Triangles=[],this.builtTriangles=[],this.Nodes=[];const r=e.getNumTriangles();this.Triangles=e.getTriangles();let n=tt,s=tt,i=tt,o=rt,a=rt,c=rt;for(let u=0;u<r;u++){const l=[this.Triangles[u].vA.pos[0],this.Triangles[u].vA.pos[1],this.Triangles[u].vA.pos[2]],f=[this.Triangles[u].vB.pos[0],this.Triangles[u].vB.pos[1],this.Triangles[u].vB.pos[2]],h=[this.Triangles[u].vC.pos[0],this.Triangles[u].vC.pos[1],this.Triangles[u].vC.pos[2]],m=new em(l,f,h,u);this.builtTriangles.push(m);const d=m.MinValues,p=m.MaxValues;d[0]<n&&(n=d[0]),d[1]<s&&(s=d[1]),d[2]<i&&(i=d[2]),p[0]>o&&(o=p[0]),p[1]>a&&(a=p[1]),p[2]>c&&(c=p[2])}this.Nodes.push(new Xs([n,s,i],[o,a,c],-1,-1)),this.buildTree(0,0,r)}getReorderedIndices(e){const r=new Uint32Array(this.builtTriangles.length*3);for(let n=0;n<this.builtTriangles.length;n++){const s=this.builtTriangles[n].originalIndex;r[n*3+0]=e[s*3+0],r[n*3+1]=e[s*3+1],r[n*3+2]=e[s*3+2]}return r}buildTree(e,r,n,s=0){const i=this.Nodes[e],o=[i.maxBounds[0]-i.minBounds[0],i.maxBounds[1]-i.minBounds[1],i.maxBounds[2]-i.minBounds[2]],a=this.computeCost(o,n),c=this.chooseSplit(i,r,n);if(c.cost<a&&s<Zd){let u=[tt,tt,tt],l=[rt,rt,rt],f=[tt,tt,tt],h=[rt,rt,rt],m=0;for(let A=r;A<r+n;A++){const C=this.builtTriangles[A];let S;switch(c.axis){case 0:S=C.center[0];break;case 1:S=C.center[1];break;case 2:S=C.center[2];break;default:S=C.center[0];break}if(S<c.position){C.MinValues[0]<u[0]&&(u[0]=C.MinValues[0]),C.MinValues[1]<u[1]&&(u[1]=C.MinValues[1]),C.MinValues[2]<u[2]&&(u[2]=C.MinValues[2]),C.MaxValues[0]>l[0]&&(l[0]=C.MaxValues[0]),C.MaxValues[1]>l[1]&&(l[1]=C.MaxValues[1]),C.MaxValues[2]>l[2]&&(l[2]=C.MaxValues[2]);const x=this.builtTriangles[r+m];this.builtTriangles[r+m]=C,this.builtTriangles[A]=x,m++}else C.MinValues[0]<f[0]&&(f[0]=C.MinValues[0]),C.MinValues[1]<f[1]&&(f[1]=C.MinValues[1]),C.MinValues[2]<f[2]&&(f[2]=C.MinValues[2]),C.MaxValues[0]>h[0]&&(h[0]=C.MaxValues[0]),C.MaxValues[1]>h[1]&&(h[1]=C.MaxValues[1]),C.MaxValues[2]>h[2]&&(h[2]=C.MaxValues[2])}if(m===0||m===n){i.startIndex=r,i.triangleCount=n,this.Nodes[e]=i;return}const d=r,p=r+m,g=new Xs(u,l,-1,d),B=new Xs(f,h,-1,p),y=this.Nodes.length;this.Nodes.push(g);const M=this.Nodes.length;this.Nodes.push(B),i.startIndex=y,this.Nodes[e]=i,this.buildTree(y,d,m,s+1),this.buildTree(M,p,n-m,s+1)}else i.startIndex=r,i.triangleCount=n,this.Nodes[e]=i}computeCost(e,r){return r===0?0:(e[0]*e[1]+e[1]*e[2]+e[2]*e[0])*r}expandBin(e,r){e.count++;for(let n=0;n<3;n++)r.MinValues[n]<e.minBounds[n]&&(e.minBounds[n]=r.MinValues[n]),r.MaxValues[n]>e.maxBounds[n]&&(e.maxBounds[n]=r.MaxValues[n])}mergeBins(e,r){return{count:e.count+r.count,minBounds:[Math.min(e.minBounds[0],r.minBounds[0]),Math.min(e.minBounds[1],r.minBounds[1]),Math.min(e.minBounds[2],r.minBounds[2])],maxBounds:[Math.max(e.maxBounds[0],r.maxBounds[0]),Math.max(e.maxBounds[1],r.maxBounds[1]),Math.max(e.maxBounds[2],r.maxBounds[2])]}}chooseSplit(e,r,n){let i=Number.MAX_VALUE,o=-1,a=0;for(let c=0;c<3;c++){const u=e.minBounds[c],f=e.maxBounds[c]-u;if(f<1e-5)continue;const h=[];for(let p=0;p<12;p++)h.push({count:0,minBounds:[tt,tt,tt],maxBounds:[rt,rt,rt]});for(let p=0;p<n;p++){const g=this.builtTriangles[r+p],B=(g.center[c]-u)/f;let y=Math.floor(B*12);y>=12&&(y=11),y<0&&(y=0),this.expandBin(h[y],g)}const m=[];m[0]=h[0];for(let p=1;p<11;p++)m[p]=this.mergeBins(m[p-1],h[p]);const d=[];d[10]=h[11];for(let p=9;p>=0;p--)d[p]=this.mergeBins(d[p+1],h[p+1]);for(let p=0;p<11;p++){const g=[m[p].maxBounds[0]-m[p].minBounds[0],m[p].maxBounds[1]-m[p].minBounds[1],m[p].maxBounds[2]-m[p].minBounds[2]],B=[d[p].maxBounds[0]-d[p].minBounds[0],d[p].maxBounds[1]-d[p].minBounds[1],d[p].maxBounds[2]-d[p].minBounds[2]],y=this.computeCost(g,m[p].count)+this.computeCost(B,d[p].count);y<i&&(i=y,o=c,a=u+f*(p+1)/12)}}return{axis:o,position:a,cost:i}}generateWireframeGeometry(e=1/0){const r=[],n=(a,c)=>{r.push(a[0],a[1],a[2],c[0],c[1],c[2])},s=(a,c)=>{const u=[a[0],a[1],a[2]],l=[c[0],a[1],a[2]],f=[a[0],c[1],a[2]],h=[c[0],c[1],a[2]],m=[a[0],a[1],c[2]],d=[c[0],a[1],c[2]],p=[a[0],c[1],c[2]],g=[c[0],c[1],c[2]];n(u,l),n(l,h),n(h,f),n(f,u),n(m,d),n(d,g),n(g,p),n(p,m),n(u,m),n(l,d),n(f,p),n(h,g)},i=[{index:0,depth:0}];for(;i.length>0;){const{index:a,depth:c}=i.pop(),u=this.Nodes[a];c>=e||(u.triangleCount===-1?(i.push({index:u.startIndex,depth:c+1}),i.push({index:u.startIndex+1,depth:c+1}),c==e-1&&s(u.minBounds,u.maxBounds)):s(u.minBounds,u.maxBounds))}const o=new Float32Array(r);return{vertexData:o,count:o.length/3}}traverse(e,r=1/0){let n=Number.MAX_VALUE;const s=this.Nodes[0],i=Qs(e,s.minBounds,s.maxBounds);if(i<0)return-1;const o=[{index:0,depth:0,dist:i}];for(;o.length>0;){const{index:a,depth:c,dist:u}=o.pop(),l=this.Nodes[a];if(l.triangleCount===-1)if(c<r){const f=l.startIndex,h=l.startIndex+1,m=Qs(e,this.Nodes[f].minBounds,this.Nodes[f].maxBounds),d=Qs(e,this.Nodes[h].minBounds,this.Nodes[h].maxBounds);m<d?(d>=0&&o.push({index:h,depth:c+1,dist:d}),m>=0&&o.push({index:f,depth:c+1,dist:m})):(m>=0&&o.push({index:f,depth:c+1,dist:m}),d>=0&&o.push({index:h,depth:c+1,dist:d}))}else u<n&&(n=u)}return n}getFlattenedBVHData(e=0){const r=this.Nodes.length,n=new ArrayBuffer(r*8*4),s=new Float32Array(n),i=new Uint32Array(n);for(let o=0;o<this.Nodes.length;++o){const a=o*8,c=this.Nodes[o];s[a+0]=c.minBounds[0],s[a+1]=c.minBounds[1],s[a+2]=c.minBounds[2],s[a+4]=c.maxBounds[0],s[a+5]=c.maxBounds[1],s[a+6]=c.maxBounds[2],i[a+7]=c.triangleCount>0?c.triangleCount:0,c.triangleCount>0?i[a+3]=c.startIndex:i[a+3]=c.startIndex+e}return{data:n,numNodes:this.Nodes.length}}}async function Ml(t,e,r,n){return n._parse(t,e,r,n)}function Gt(t,e){if(!t)throw new Error(e||"loader assertion failed.")}const Ts=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),fa=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);fa&&parseFloat(fa[1]);const ha=globalThis,da=globalThis.process||{};function rm(t){if(typeof window<"u"&&window.process?.type==="renderer"||typeof process<"u"&&process.versions?.electron)return!0;const r=typeof navigator<"u"&&navigator.userAgent;return!!(r&&r.indexOf("Electron")>=0)}function co(){return!(typeof process=="object"&&String(process)==="[object process]"&&!process?.browser)||rm()}const Tl="4.1.0";function nm(t){try{const e=window[t],r="__storage_test__";return e.setItem(r,r),e.removeItem(r),e}catch{return null}}class sm{constructor(e,r,n="sessionStorage"){this.storage=nm(n),this.id=e,this.config=r,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){const r=JSON.stringify(this.config);this.storage.setItem(this.id,r)}}_loadConfiguration(){let e={};if(this.storage){const r=this.storage.getItem(this.id);e=r?JSON.parse(r):{}}return Object.assign(this.config,e),this}}function im(t){let e;return t<10?e=`${t.toFixed(2)}ms`:t<100?e=`${t.toFixed(1)}ms`:t<1e3?e=`${t.toFixed(0)}ms`:e=`${(t/1e3).toFixed(2)}s`,e}function om(t,e=8){const r=Math.max(e-t.length,0);return`${" ".repeat(r)}${t}`}var $n;(function(t){t[t.BLACK=30]="BLACK",t[t.RED=31]="RED",t[t.GREEN=32]="GREEN",t[t.YELLOW=33]="YELLOW",t[t.BLUE=34]="BLUE",t[t.MAGENTA=35]="MAGENTA",t[t.CYAN=36]="CYAN",t[t.WHITE=37]="WHITE",t[t.BRIGHT_BLACK=90]="BRIGHT_BLACK",t[t.BRIGHT_RED=91]="BRIGHT_RED",t[t.BRIGHT_GREEN=92]="BRIGHT_GREEN",t[t.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",t[t.BRIGHT_BLUE=94]="BRIGHT_BLUE",t[t.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",t[t.BRIGHT_CYAN=96]="BRIGHT_CYAN",t[t.BRIGHT_WHITE=97]="BRIGHT_WHITE"})($n||($n={}));const am=10;function ma(t){return typeof t!="string"?t:(t=t.toUpperCase(),$n[t]||$n.WHITE)}function cm(t,e,r){return!co&&typeof t=="string"&&(e&&(t=`\x1B[${ma(e)}m${t}\x1B[39m`),r&&(t=`\x1B[${ma(r)+am}m${t}\x1B[49m`)),t}function lm(t,e=["constructor"]){const r=Object.getPrototypeOf(t),n=Object.getOwnPropertyNames(r),s=t;for(const i of n){const o=s[i];typeof o=="function"&&(e.find(a=>i===a)||(s[i]=o.bind(t)))}}function lo(t,e){if(!t)throw new Error("Assertion failed")}function dr(){let t;if(co()&&ha.performance)t=ha?.performance?.now?.();else if("hrtime"in da){const e=da?.hrtime?.();t=e[0]*1e3+e[1]/1e6}else t=Date.now();return t}const mr={debug:co()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},um={enabled:!0,level:0};function pr(){}const pa={},ga={once:!0};class uo{constructor({id:e}={id:""}){this.VERSION=Tl,this._startTs=dr(),this._deltaTs=dr(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new sm(`__probe-${this.id}__`,um),this.timeStamp(`${this.id} started`),lm(this),Object.seal(this)}set level(e){this.setLevel(e)}get level(){return this.getLevel()}isEnabled(){return this._storage.config.enabled}getLevel(){return this._storage.config.level}getTotal(){return Number((dr()-this._startTs).toPrecision(10))}getDelta(){return Number((dr()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._storage.setConfiguration({enabled:e}),this}setLevel(e){return this._storage.setConfiguration({level:e}),this}get(e){return this._storage.config[e]}set(e,r){this._storage.setConfiguration({[e]:r})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,r){if(!e)throw new Error(r||"Assertion failed")}warn(e){return this._getLogFunction(0,e,mr.warn,arguments,ga)}error(e){return this._getLogFunction(0,e,mr.error,arguments)}deprecated(e,r){return this.warn(`\`${e}\` is deprecated and will be removed in a later version. Use \`${r}\` instead`)}removed(e,r){return this.error(`\`${e}\` has been removed. Use \`${r}\` instead`)}probe(e,r){return this._getLogFunction(e,r,mr.log,arguments,{time:!0,once:!0})}log(e,r){return this._getLogFunction(e,r,mr.debug,arguments)}info(e,r){return this._getLogFunction(e,r,console.info,arguments)}once(e,r){return this._getLogFunction(e,r,mr.debug||mr.info,arguments,ga)}table(e,r,n){return r?this._getLogFunction(e,r,console.table||pr,n&&[n],{tag:hm(r)}):pr}time(e,r){return this._getLogFunction(e,r,console.time?console.time:console.info)}timeEnd(e,r){return this._getLogFunction(e,r,console.timeEnd?console.timeEnd:console.info)}timeStamp(e,r){return this._getLogFunction(e,r,console.timeStamp||pr)}group(e,r,n={collapsed:!1}){const s=ba({logLevel:e,message:r,opts:n}),{collapsed:i}=n;return s.method=(i?console.groupCollapsed:console.group)||console.info,this._getLogFunction(s)}groupCollapsed(e,r,n={}){return this.group(e,r,Object.assign({},n,{collapsed:!0}))}groupEnd(e){return this._getLogFunction(e,"",console.groupEnd||pr)}withGroup(e,r,n){this.group(e,r)();try{n()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&this.getLevel()>=El(e)}_getLogFunction(e,r,n,s,i){if(this._shouldLog(e)){i=ba({logLevel:e,message:r,args:s,opts:i}),n=n||i.method,lo(n),i.total=this.getTotal(),i.delta=this.getDelta(),this._deltaTs=dr();const o=i.tag||i.message;if(i.once&&o)if(!pa[o])pa[o]=dr();else return pr;return r=fm(this.id,i.message,i),n.bind(console,r,...i.args)}return pr}}uo.VERSION=Tl;function El(t){if(!t)return 0;let e;switch(typeof t){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return lo(Number.isFinite(e)&&e>=0),e}function ba(t){const{logLevel:e,message:r}=t;t.logLevel=El(e);const n=t.args?Array.from(t.args):[];for(;n.length&&n.shift()!==r;);switch(typeof e){case"string":case"function":r!==void 0&&n.unshift(r),t.message=e;break;case"object":Object.assign(t,e);break}typeof t.message=="function"&&(t.message=t.message());const s=typeof t.message;return lo(s==="string"||s==="object"),Object.assign(t,{args:n},t.opts)}function fm(t,e,r){if(typeof e=="string"){const n=r.time?om(im(r.total)):"";e=r.time?`${t}: ${n}  ${e}`:`${t}: ${e}`,e=cm(e,r.color,r.background)}return e}function hm(t){for(const e in t)for(const r in t[e])return r||"untitled";return"empty"}const Ys="4.3.3",dm=Ys[0]>="0"&&Ys[0]<="9"?`v${Ys}`:"";function mm(){const t=new uo({id:"loaders.gl"});return globalThis.loaders=globalThis.loaders||{},globalThis.loaders.log=t,globalThis.loaders.version=dm,globalThis.probe=globalThis.probe||{},globalThis.probe.loaders=t,t}const pm=mm();function gm(t,e){return wl(t||{},e)}function wl(t,e,r=0){if(r>3)return e;const n={...t};for(const[s,i]of Object.entries(e))i&&typeof i=="object"&&!Array.isArray(i)?n[s]=wl(n[s]||{},e[s],r+1):n[s]=e[s];return n}function bm(t){globalThis.loaders||={},globalThis.loaders.modules||={},Object.assign(globalThis.loaders.modules,t)}function ym(t){return globalThis.loaders?.modules?.[t]||null}const Bm="latest";function vm(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.3.3"),globalThis._loadersgl_.version}const Sl=vm();function _t(t,e){if(!t)throw new Error(e||"loaders.gl assertion failed.")}const ot=typeof process!="object"||String(process)!=="[object process]"||process.browser,fo=typeof importScripts=="function",Am=typeof window<"u"&&typeof window.orientation<"u",ya=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);ya&&parseFloat(ya[1]);class xm{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,r){this.name=e,this.workerThread=r,this.result=new Promise((n,s)=>{this._resolve=n,this._reject=s})}postMessage(e,r){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:r})}done(e){_t(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){_t(this.isRunning),this.isRunning=!1,this._reject(e)}}class $s{terminate(){}}const Zs=new Map;function Cm(t){_t(t.source&&!t.url||!t.source&&t.url);let e=Zs.get(t.source||t.url);return e||(t.url&&(e=Mm(t.url),Zs.set(t.url,e)),t.source&&(e=Il(t.source),Zs.set(t.source,e))),_t(e),e}function Mm(t){if(!t.startsWith("http"))return t;const e=Tm(t);return Il(e)}function Il(t){const e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}function Tm(t){return`try {
  importScripts('${t}');
} catch (error) {
  console.error(error);
  throw error;
}`}function Pl(t,e=!0,r){const n=r||new Set;if(t){if(Ba(t))n.add(t);else if(Ba(t.buffer))n.add(t.buffer);else if(!ArrayBuffer.isView(t)){if(e&&typeof t=="object")for(const s in t)Pl(t[s],e,n)}}return r===void 0?Array.from(n):[]}function Ba(t){return t?t instanceof ArrayBuffer||typeof MessagePort<"u"&&t instanceof MessagePort||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas:!1}const ei=()=>{};class Ri{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return typeof Worker<"u"&&ot||typeof $s<"u"&&!ot}constructor(e){const{name:r,source:n,url:s}=e;_t(n||s),this.name=r,this.source=n,this.url=s,this.onMessage=ei,this.onError=i=>console.log(i),this.worker=ot?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=ei,this.onError=ei,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,r){r=r||Pl(e),this.worker.postMessage(e,r)}_getErrorFromErrorEvent(e){let r="Failed to load ";return r+=`worker ${this.name} from ${this.url}. `,e.message&&(r+=`${e.message} in `),e.lineno&&(r+=`:${e.lineno}:${e.colno}`),new Error(r)}_createBrowserWorker(){this._loadableURL=Cm({source:this.source,url:this.url});const e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=r=>{r.data?this.onMessage(r.data):this.onError(new Error("No data received"))},e.onerror=r=>{this.onError(this._getErrorFromErrorEvent(r)),this.terminated=!0},e.onmessageerror=r=>console.error(r),e}_createNodeWorker(){let e;if(this.url){const n=this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`;e=new $s(n,{eval:!1})}else if(this.source)e=new $s(this.source,{eval:!0});else throw new Error("no worker");return e.on("message",r=>{this.onMessage(r)}),e.on("error",r=>{this.onError(r)}),e.on("exit",r=>{}),e}}class Em{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return Ri.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,r=(s,i,o)=>s.done(o),n=(s,i)=>s.error(i)){const s=new Promise(i=>(this.jobQueue.push({name:e,onMessage:r,onError:n,onStart:i}),this));return this._startQueuedJob(),await s}async _startQueuedJob(){if(!this.jobQueue.length)return;const e=this._getAvailableWorker();if(!e)return;const r=this.jobQueue.shift();if(r){this.onDebug({message:"Starting job",name:r.name,workerThread:e,backlog:this.jobQueue.length});const n=new xm(r.name,e);e.onMessage=s=>r.onMessage(n,s.type,s.payload),e.onError=s=>r.onError(n,s),r.onStart(n);try{await n.result}catch(s){console.error(`Worker exception: ${s}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!ot||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this._getMaxConcurrency()){this.count++;const e=`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;return new Ri({name:e,source:this.source,url:this.url})}return null}_getMaxConcurrency(){return Am?this.maxMobileConcurrency:this.maxConcurrency}}const wm={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class kt{props;workerPools=new Map;static _workerFarm;static isSupported(){return Ri.isSupported()}static getWorkerFarm(e={}){return kt._workerFarm=kt._workerFarm||new kt({}),kt._workerFarm.setProps(e),kt._workerFarm}constructor(e){this.props={...wm},this.setProps(e),this.workerPools=new Map}destroy(){for(const e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(const r of this.workerPools.values())r.setProps(this._getWorkerPoolProps())}getWorkerPool(e){const{name:r,source:n,url:s}=e;let i=this.workerPools.get(r);return i||(i=new Em({name:r,source:n,url:s}),i.setProps(this._getWorkerPoolProps()),this.workerPools.set(r,i)),i}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}function Sm(t,e={}){const r=e[t.id]||{},n=ot?`${t.id}-worker.js`:`${t.id}-worker-node.js`;let s=r.workerUrl;if(!s&&t.id==="compression"&&(s=e.workerUrl),e._workerType==="test"&&(ot?s=`modules/${t.module}/dist/${n}`:s=`modules/${t.module}/src/workers/${t.id}-worker-node.ts`),!s){let i=t.version;i==="latest"&&(i=Bm);const o=i?`@${i}`:"";s=`https://unpkg.com/@loaders.gl/${t.module}${o}/dist/${n}`}return _t(s),s}function Im(t,e=Sl){_t(t,"no worker provided");const r=t.version;return!(!e||!r)}const ti={};async function ar(t,e=null,r={},n=null){return e&&(t=Pm(t,e,r,n)),ti[t]=ti[t]||Om(t),await ti[t]}function Pm(t,e,r={},n=null){if(!r.useLocalLibraries&&t.startsWith("http"))return t;n=n||t;const s=r.modules||{};return s[n]?s[n]:ot?r.CDN?(_t(r.CDN.startsWith("http")),`${r.CDN}/${e}@${Sl}/dist/libs/${n}`):fo?`../src/libs/${n}`:`modules/${e}/src/libs/${n}`:`modules/${e}/dist/libs/${n}`}async function Om(t){if(t.endsWith("wasm"))return await Dm(t);if(!ot)try{const{requireFromFile:r}=globalThis.loaders||{};return await r?.(t)}catch(r){return console.error(r),null}if(fo)return importScripts(t);const e=await Fm(t);return Rm(e,t)}function Rm(t,e){if(!ot){const{requireFromString:n}=globalThis.loaders||{};return n?.(t,e)}if(fo)return eval.call(globalThis,t),null;const r=document.createElement("script");r.id=e;try{r.appendChild(document.createTextNode(t))}catch{r.text=t}return document.body.appendChild(r),null}async function Dm(t){const{readFileAsArrayBuffer:e}=globalThis.loaders||{};return ot||!e||t.startsWith("http")?await(await fetch(t)).arrayBuffer():await e(t)}async function Fm(t){const{readFileAsText:e}=globalThis.loaders||{};return ot||!e||t.startsWith("http")?await(await fetch(t)).text():await e(t)}function Gm(t,e){return!kt.isSupported()||!ot&&!e?._nodeWorkers?!1:t.worker&&e?.worker}async function _m(t,e,r,n,s){const i=t.id,o=Sm(t,r),c=kt.getWorkerFarm(r).getWorkerPool({name:i,url:o});r=JSON.parse(JSON.stringify(r)),n=JSON.parse(JSON.stringify(n||{}));const u=await c.startJob("process-on-worker",Um.bind(null,s));return u.postMessage("process",{input:e,options:r,context:n}),await(await u.result).result}async function Um(t,e,r,n){switch(r){case"done":e.done(n);break;case"error":e.error(new Error(n.error));break;case"process":const{id:s,input:i,options:o}=n;try{const a=await t(i,o);e.postMessage("done",{id:s,result:a})}catch(a){const c=a instanceof Error?a.message:"unknown error";e.postMessage("error",{id:s,error:c})}break;default:console.warn(`parse-with-worker unknown message ${r}`)}}function Lm(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?va(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?va(t,0,e):""}function va(t,e,r){if(t.byteLength<=e+r)return"";const n=new DataView(t);let s="";for(let i=0;i<r;i++)s+=String.fromCharCode(n.getUint8(e+i));return s}function Nm(t){try{return JSON.parse(t)}catch{throw new Error(`Failed to parse JSON from data starting with "${Lm(t)}"`)}}function jm(t,e,r){if(r=r||t.byteLength,t.byteLength<r||e.byteLength<r)return!1;const n=new Uint8Array(t),s=new Uint8Array(e);for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}function Hm(...t){return Vm(t)}function Vm(t){const e=t.map(i=>i instanceof ArrayBuffer?new Uint8Array(i):i),r=e.reduce((i,o)=>i+o.byteLength,0),n=new Uint8Array(r);let s=0;for(const i of e)n.set(i,s),s+=i.byteLength;return n.buffer}function Ol(t,e,r){const n=r!==void 0?new Uint8Array(t).subarray(e,e+r):new Uint8Array(t).subarray(e);return new Uint8Array(n).buffer}function bn(t,e){return Gt(t>=0),Gt(e>0),t+(e-1)&-4}function km(t,e,r){let n;if(t instanceof ArrayBuffer)n=new Uint8Array(t);else{const s=t.byteOffset,i=t.byteLength;n=new Uint8Array(t.buffer||t.arrayBuffer,s,i)}return e.set(n,r),r+bn(n.byteLength,4)}async function zm(t){const e=[];for await(const r of t)e.push(r);return Hm(...e)}let Jm="";const Aa={};function Km(t){for(const e in Aa)if(t.startsWith(e)){const r=Aa[e];t=t.replace(e,r)}return!t.startsWith("http://")&&!t.startsWith("https://")&&(t=`${Jm}${t}`),t}function Wm(t){return t&&typeof t=="object"&&t.isBuffer}function Rl(t){if(Wm(t))return t;if(t instanceof ArrayBuffer)return t;if(ArrayBuffer.isView(t))return t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer:t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);if(typeof t=="string"){const e=t;return new TextEncoder().encode(e).buffer}if(t&&typeof t=="object"&&t._toArrayBuffer)return t._toArrayBuffer();throw new Error("toArrayBuffer")}function Dl(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(e+1):""}function qm(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(0,e):""}const Qm=t=>typeof t=="boolean",Yr=t=>typeof t=="function",yn=t=>t!==null&&typeof t=="object",xa=t=>yn(t)&&t.constructor==={}.constructor,Xm=t=>!!t&&typeof t[Symbol.iterator]=="function",Ym=t=>t&&typeof t[Symbol.asyncIterator]=="function",lr=t=>typeof Response<"u"&&t instanceof Response||t&&t.arrayBuffer&&t.text&&t.json,ur=t=>typeof Blob<"u"&&t instanceof Blob,$m=t=>t&&typeof t=="object"&&t.isBuffer,Zm=t=>typeof ReadableStream<"u"&&t instanceof ReadableStream||yn(t)&&Yr(t.tee)&&Yr(t.cancel)&&Yr(t.getReader),ep=t=>yn(t)&&Yr(t.read)&&Yr(t.pipe)&&Qm(t.readable),Fl=t=>Zm(t)||ep(t);class tp extends Error{constructor(e,r){super(e),this.reason=r.reason,this.url=r.url,this.response=r.response}reason;url;response}const rp=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,np=/^([-\w.]+\/[-\w.+]+)/;function Ca(t,e){return t.toLowerCase()===e.toLowerCase()}function sp(t){const e=np.exec(t);return e?e[1]:t}function Ma(t){const e=rp.exec(t);return e?e[1]:""}const Gl=/\?.*/;function ip(t){const e=t.match(Gl);return e&&e[0]}function ho(t){return t.replace(Gl,"")}function op(t){if(t.length<50)return t;const e=t.slice(t.length-15);return`${t.substr(0,32)}...${e}`}function Es(t){return lr(t)?t.url:ur(t)?t.name||"":typeof t=="string"?t:""}function mo(t){if(lr(t)){const e=t,r=e.headers.get("content-type")||"",n=ho(e.url);return sp(r)||Ma(n)}return ur(t)?t.type||"":typeof t=="string"?Ma(t):""}function ap(t){return lr(t)?t.headers["content-length"]||-1:ur(t)?t.size:typeof t=="string"?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1}async function _l(t){if(lr(t))return t;const e={},r=ap(t);r>=0&&(e["content-length"]=String(r));const n=Es(t),s=mo(t);s&&(e["content-type"]=s);const i=await up(t);i&&(e["x-first-bytes"]=i),typeof t=="string"&&(t=new TextEncoder().encode(t));const o=new Response(t,{headers:e});return Object.defineProperty(o,"url",{value:n}),o}async function cp(t){if(!t.ok)throw await lp(t)}async function lp(t){const e=op(t.url);let r=`Failed to fetch resource (${t.status}) ${t.statusText}: ${e}`;r=r.length>100?`${r.slice(0,100)}...`:r;const n={reason:t.statusText,url:t.url,response:t};try{const s=t.headers.get("Content-Type");n.reason=!t.bodyUsed&&s?.includes("application/json")?await t.json():await t.text()}catch{}return new tp(r,n)}async function up(t){if(typeof t=="string")return`data:,${t.slice(0,5)}`;if(t instanceof Blob){const r=t.slice(0,5);return await new Promise(n=>{const s=new FileReader;s.onload=i=>n(i?.target?.result),s.readAsDataURL(r)})}if(t instanceof ArrayBuffer){const r=t.slice(0,5);return`data:base64,${fp(r)}`}return null}function fp(t){let e="";const r=new Uint8Array(t);for(let n=0;n<r.byteLength;n++)e+=String.fromCharCode(r[n]);return btoa(e)}function hp(t){return!dp(t)&&!mp(t)}function dp(t){return t.startsWith("http:")||t.startsWith("https:")}function mp(t){return t.startsWith("data:")}async function Ta(t,e){if(typeof t=="string"){const r=Km(t);return hp(r)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,e):await fetch(r,e)}return await _l(t)}const Ea=new uo({id:"loaders.gl"});class pp{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}class gp{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}}const Ul={fetch:null,mimeType:void 0,nothrow:!1,log:new gp,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:Ts,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]},bp={throws:"nothrow",dataType:"(no longer used)",uri:"baseUri",method:"fetch.method",headers:"fetch.headers",body:"fetch.body",mode:"fetch.mode",credentials:"fetch.credentials",cache:"fetch.cache",redirect:"fetch.redirect",referrer:"fetch.referrer",referrerPolicy:"fetch.referrerPolicy",integrity:"fetch.integrity",keepalive:"fetch.keepalive",signal:"fetch.signal"};function Ll(){globalThis.loaders=globalThis.loaders||{};const{loaders:t}=globalThis;return t._state||(t._state={}),t._state}function Nl(){const t=Ll();return t.globalOptions=t.globalOptions||{...Ul},t.globalOptions}function yp(t,e,r,n){return r=r||[],r=Array.isArray(r)?r:[r],Bp(t,r),Ap(e,t,n)}function Bp(t,e){wa(t,null,Ul,bp,e);for(const r of e){const n=t&&t[r.id]||{},s=r.options&&r.options[r.id]||{},i=r.deprecatedOptions&&r.deprecatedOptions[r.id]||{};wa(n,r.id,s,i,e)}}function wa(t,e,r,n,s){const i=e||"Top level",o=e?`${e}.`:"";for(const a in t){const c=!e&&yn(t[a]),u=a==="baseUri"&&!e,l=a==="workerUrl"&&e;if(!(a in r)&&!u&&!l){if(a in n)Ea.warn(`${i} loader option '${o}${a}' no longer supported, use '${n[a]}'`)();else if(!c){const f=vp(a,s);Ea.warn(`${i} loader option '${o}${a}' not recognized. ${f}`)()}}}}function vp(t,e){const r=t.toLowerCase();let n="";for(const s of e)for(const i in s.options){if(t===i)return`Did you mean '${s.id}.${i}'?`;const o=i.toLowerCase();(r.startsWith(o)||o.startsWith(r))&&(n=n||`Did you mean '${s.id}.${i}'?`)}return n}function Ap(t,e,r){const s={...t.options||{}};return xp(s,r),s.log===null&&(s.log=new pp),Sa(s,Nl()),Sa(s,e),s}function Sa(t,e){for(const r in e)if(r in e){const n=e[r];xa(n)&&xa(t[r])?t[r]={...t[r],...e[r]}:t[r]=e[r]}}function xp(t,e){e&&!("baseUri"in t)&&(t.baseUri=e)}function po(t){return t?(Array.isArray(t)&&(t=t[0]),Array.isArray(t?.extensions)):!1}function jl(t){Gt(t,"null loader"),Gt(po(t),"invalid loader");let e;return Array.isArray(t)&&(e=t[1],t=t[0],t={...t,options:{...t.options,...e}}),(t?.parseTextSync||t?.parseText)&&(t.text=!0),t.text||(t.binary=!0),t}const Cp=()=>{const t=Ll();return t.loaderRegistry=t.loaderRegistry||[],t.loaderRegistry};function Mp(){return Cp()}const Tp=/\.([^.]+)$/;async function Ep(t,e=[],r,n){if(!Hl(t))return null;let s=Ia(t,e,{...r,nothrow:!0},n);if(s)return s;if(ur(t)&&(t=await t.slice(0,10).arrayBuffer(),s=Ia(t,e,r,n)),!s&&!r?.nothrow)throw new Error(Vl(t));return s}function Ia(t,e=[],r,n){if(!Hl(t))return null;if(e&&!Array.isArray(e))return jl(e);let s=[];e&&(s=s.concat(e)),r?.ignoreRegisteredLoaders||s.push(...Mp()),Sp(s);const i=wp(t,s,r,n);if(!i&&!r?.nothrow)throw new Error(Vl(t));return i}function wp(t,e,r,n){const s=Es(t),i=mo(t),o=ho(s)||n?.url;let a=null,c="";return r?.mimeType&&(a=ri(e,r?.mimeType),c=`match forced by supplied MIME type ${r?.mimeType}`),a=a||Ip(e,o),c=c||(a?`matched url ${o}`:""),a=a||ri(e,i),c=c||(a?`matched MIME type ${i}`:""),a=a||Op(e,t),c=c||(a?`matched initial data ${kl(t)}`:""),r?.fallbackMimeType&&(a=a||ri(e,r?.fallbackMimeType),c=c||(a?`matched fallback MIME type ${i}`:"")),c&&pm.log(1,`selectLoader selected ${a?.name}: ${c}.`),a}function Hl(t){return!(t instanceof Response&&t.status===204)}function Vl(t){const e=Es(t),r=mo(t);let n="No valid loader found (";n+=e?`${Dl(e)}, `:"no url provided, ",n+=`MIME type: ${r?`"${r}"`:"not provided"}, `;const s=t?kl(t):"";return n+=s?` first bytes: "${s}"`:"first bytes: not available",n+=")",n}function Sp(t){for(const e of t)jl(e)}function Ip(t,e){const r=e&&Tp.exec(e),n=r&&r[1];return n?Pp(t,n):null}function Pp(t,e){e=e.toLowerCase();for(const r of t)for(const n of r.extensions)if(n.toLowerCase()===e)return r;return null}function ri(t,e){for(const r of t)if(r.mimeTypes?.some(n=>Ca(e,n))||Ca(e,`application/x.${r.id}`))return r;return null}function Op(t,e){if(!e)return null;for(const r of t)if(typeof e=="string"){if(Rp(e,r))return r}else if(ArrayBuffer.isView(e)){if(Pa(e.buffer,e.byteOffset,r))return r}else if(e instanceof ArrayBuffer&&Pa(e,0,r))return r;return null}function Rp(t,e){return e.testText?e.testText(t):(Array.isArray(e.tests)?e.tests:[e.tests]).some(n=>t.startsWith(n))}function Pa(t,e,r){return(Array.isArray(r.tests)?r.tests:[r.tests]).some(s=>Dp(t,e,r,s))}function Dp(t,e,r,n){if(n instanceof ArrayBuffer)return jm(n,t,n.byteLength);switch(typeof n){case"function":return n(t);case"string":const s=Di(t,e,n.length);return n===s;default:return!1}}function kl(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Di(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Di(t,0,e):""}function Di(t,e,r){if(t.byteLength<e+r)return"";const n=new DataView(t);let s="";for(let i=0;i<r;i++)s+=String.fromCharCode(n.getUint8(e+i));return s}const Fp=256*1024;function*Gp(t,e){const r=e?.chunkSize||Fp;let n=0;const s=new TextEncoder;for(;n<t.length;){const i=Math.min(t.length-n,r),o=t.slice(n,n+i);n+=i,yield s.encode(o)}}const _p=256*1024;function*Up(t,e={}){const{chunkSize:r=_p}=e;let n=0;for(;n<t.byteLength;){const s=Math.min(t.byteLength-n,r),i=new ArrayBuffer(s),o=new Uint8Array(t,n,s);new Uint8Array(i).set(o),n+=s,yield i}}const Lp=1024*1024;async function*Np(t,e){const r=e?.chunkSize||Lp;let n=0;for(;n<t.size;){const s=n+r,i=await t.slice(n,s).arrayBuffer();n=s,yield i}}function Oa(t,e){return Ts?jp(t,e):Hp(t)}async function*jp(t,e){const r=t.getReader();let n;try{for(;;){const s=n||r.read();e?._streamReadAhead&&(n=r.read());const{done:i,value:o}=await s;if(i)return;yield Rl(o)}}catch{r.releaseLock()}}async function*Hp(t,e){for await(const r of t)yield Rl(r)}function Vp(t,e){if(typeof t=="string")return Gp(t,e);if(t instanceof ArrayBuffer)return Up(t,e);if(ur(t))return Np(t,e);if(Fl(t))return Oa(t,e);if(lr(t))return Oa(t.body,e);throw new Error("makeIterator")}const zl="Cannot convert supplied data type";function kp(t,e,r){if(e.text&&typeof t=="string")return t;if($m(t)&&(t=t.buffer),t instanceof ArrayBuffer){const n=t;return e.text&&!e.binary?new TextDecoder("utf8").decode(n):n}if(ArrayBuffer.isView(t)){if(e.text&&!e.binary)return new TextDecoder("utf8").decode(t);let n=t.buffer;const s=t.byteLength||t.length;return(t.byteOffset!==0||s!==n.byteLength)&&(n=n.slice(t.byteOffset,t.byteOffset+s)),n}throw new Error(zl)}async function zp(t,e,r){const n=t instanceof ArrayBuffer||ArrayBuffer.isView(t);if(typeof t=="string"||n)return kp(t,e);if(ur(t)&&(t=await _l(t)),lr(t)){const s=t;return await cp(s),e.binary?await s.arrayBuffer():await s.text()}if(Fl(t)&&(t=Vp(t,r)),Xm(t)||Ym(t))return zm(t);throw new Error(zl)}function Jl(t,e){const r=Nl(),n=t||r;return typeof n.fetch=="function"?n.fetch:yn(n.fetch)?s=>Ta(s,n.fetch):e?.fetch?e?.fetch:Ta}function Jp(t,e,r){if(r)return r;const n={fetch:Jl(e,t),...t};if(n.url){const s=ho(n.url);n.baseUrl=s,n.queryString=ip(n.url),n.filename=Dl(s),n.baseUrl=qm(s)}return Array.isArray(n.loaders)||(n.loaders=null),n}function Kp(t,e){if(t&&!Array.isArray(t))return t;let r;if(t&&(r=Array.isArray(t)?t:[t]),e&&e.loaders){const n=Array.isArray(e.loaders)?e.loaders:[e.loaders];r=r?[...r,...n]:n}return r&&r.length?r:void 0}async function Zn(t,e,r,n){e&&!Array.isArray(e)&&!po(e)&&(n=void 0,r=e,e=void 0),t=await t,r=r||{};const s=Es(t),o=Kp(e,n),a=await Ep(t,o,r);return a?(r=yp(r,a,o,s),n=Jp({url:s,_parse:Zn,loaders:o},r,n||null),await Wp(a,t,r,n)):null}async function Wp(t,e,r,n){if(Im(t),r=gm(t.options,r),lr(e)){const i=e,{ok:o,redirected:a,status:c,statusText:u,type:l,url:f}=i,h=Object.fromEntries(i.headers.entries());n.response={headers:h,ok:o,redirected:a,status:c,statusText:u,type:l,url:f}}e=await zp(e,t,r);const s=t;if(s.parseTextSync&&typeof e=="string")return s.parseTextSync(e,r,n);if(Gm(t,r))return await _m(t,e,r,n,Zn);if(s.parseText&&typeof e=="string")return await s.parseText(e,r,n);if(s.parse)return await s.parse(e,r,n);throw _t(!s.parseSync),new Error(`${t.id} loader - no parser found and worker is disabled`)}function qp(t){switch(t.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function Qp(t){let e=1/0,r=1/0,n=1/0,s=-1/0,i=-1/0,o=-1/0;const a=t.POSITION?t.POSITION.value:[],c=a&&a.length;for(let u=0;u<c;u+=3){const l=a[u],f=a[u+1],h=a[u+2];e=l<e?l:e,r=f<r?f:r,n=h<n?h:n,s=l>s?l:s,i=f>i?f:i,o=h>o?h:o}return[[e,r,n],[s,i,o]]}function Xp(t,e,r){const n=qp(e.value),s=r||Yp(e);return{name:t,type:{type:"fixed-size-list",listSize:e.size,children:[{name:"value",type:n}]},nullable:!1,metadata:s}}function Yp(t){const e={};return"byteOffset"in t&&(e.byteOffset=t.byteOffset.toString(10)),"byteStride"in t&&(e.byteStride=t.byteStride.toString(10)),"normalized"in t&&(e.normalized=t.normalized.toString()),e}async function $p(t,e,r,n){let s,i;!Array.isArray(e)&&!po(e)?(s=[],i=e):(s=e,i=r);const o=Jl(i);let a=t;return a=await o(t),ur(t)&&(a=await o(t)),Array.isArray(s)?await Zn(a,s,i):await Zn(a,s,i)}const Zp="4.3.3",eg=globalThis.loaders?.parseImageNode,Fi=typeof Image<"u",Gi=typeof ImageBitmap<"u",tg=!!eg,_i=Ts?!0:tg;function rg(t){switch(t){case"auto":return Gi||Fi||_i;case"imagebitmap":return Gi;case"image":return Fi;case"data":return _i;default:throw new Error(`@loaders.gl/images: image ${t} not supported in this environment`)}}function ng(){if(Gi)return"imagebitmap";if(Fi)return"image";if(_i)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function sg(t){const e=ig(t);if(!e)throw new Error("Not an image");return e}function Kl(t){switch(sg(t)){case"data":return t;case"image":case"imagebitmap":const e=document.createElement("canvas"),r=e.getContext("2d");if(!r)throw new Error("getImageData");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height);default:throw new Error("getImageData")}}function ig(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap?"imagebitmap":typeof Image<"u"&&t instanceof Image?"image":t&&typeof t=="object"&&t.data&&t.width&&t.height?"data":null}const og=/^data:image\/svg\+xml/,ag=/\.svg((\?|#).*)?$/;function go(t){return t&&(og.test(t)||ag.test(t))}function cg(t,e){if(go(e)){let n=new TextDecoder().decode(t);try{typeof unescape=="function"&&typeof encodeURIComponent=="function"&&(n=unescape(encodeURIComponent(n)))}catch(i){throw new Error(i.message)}return`data:image/svg+xml;base64,${btoa(n)}`}return Wl(t,e)}function Wl(t,e){if(go(e))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(t)])}async function ql(t,e,r){const n=cg(t,r),s=self.URL||self.webkitURL,i=typeof n!="string"&&s.createObjectURL(n);try{return await lg(i||n,e)}finally{i&&s.revokeObjectURL(i)}}async function lg(t,e){const r=new Image;return r.src=t,e.image&&e.image.decode&&r.decode?(await r.decode(),r):await new Promise((n,s)=>{try{r.onload=()=>n(r),r.onerror=i=>{const o=i instanceof Error?i.message:"error";s(new Error(o))}}catch(i){s(i)}})}const ug={};let Ra=!0;async function fg(t,e,r){let n;go(r)?n=await ql(t,e,r):n=Wl(t,r);const s=e&&e.imagebitmap;return await hg(n,s)}async function hg(t,e=null){if((dg(e)||!Ra)&&(e=null),e)try{return await createImageBitmap(t,e)}catch(r){console.warn(r),Ra=!1}return await createImageBitmap(t)}function dg(t){for(const e in t||ug)return!1;return!0}function mg(t){return!yg(t,"ftyp",4)||(t[8]&96)===0?null:pg(t)}function pg(t){switch(gg(t,8,12).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}function gg(t,e,r){return String.fromCharCode(...t.slice(e,r))}function bg(t){return[...t].map(e=>e.charCodeAt(0))}function yg(t,e,r=0){const n=bg(e);for(let s=0;s<n.length;++s)if(n[s]!==t[s+r])return!1;return!0}const xt=!1,$r=!0;function bo(t){const e=Bn(t);return vg(e)||Cg(e)||Ag(e)||xg(e)||Bg(e)}function Bg(t){const e=new Uint8Array(t instanceof DataView?t.buffer:t),r=mg(e);return r?{mimeType:r.mimeType,width:0,height:0}:null}function vg(t){const e=Bn(t);return e.byteLength>=24&&e.getUint32(0,xt)===2303741511?{mimeType:"image/png",width:e.getUint32(16,xt),height:e.getUint32(20,xt)}:null}function Ag(t){const e=Bn(t);return e.byteLength>=10&&e.getUint32(0,xt)===1195984440?{mimeType:"image/gif",width:e.getUint16(6,$r),height:e.getUint16(8,$r)}:null}function xg(t){const e=Bn(t);return e.byteLength>=14&&e.getUint16(0,xt)===16973&&e.getUint32(2,$r)===e.byteLength?{mimeType:"image/bmp",width:e.getUint32(18,$r),height:e.getUint32(22,$r)}:null}function Cg(t){const e=Bn(t);if(!(e.byteLength>=3&&e.getUint16(0,xt)===65496&&e.getUint8(2)===255))return null;const{tableMarkers:n,sofMarkers:s}=Mg();let i=2;for(;i+9<e.byteLength;){const o=e.getUint16(i,xt);if(s.has(o))return{mimeType:"image/jpeg",height:e.getUint16(i+5,xt),width:e.getUint16(i+7,xt)};if(!n.has(o))return null;i+=2,i+=e.getUint16(i,xt)}return null}function Mg(){const t=new Set([65499,65476,65484,65501,65534]);for(let r=65504;r<65520;++r)t.add(r);return{tableMarkers:t,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function Bn(t){if(t instanceof DataView)return t;if(ArrayBuffer.isView(t))return new DataView(t.buffer);if(t instanceof ArrayBuffer)return new DataView(t);throw new Error("toDataView")}async function Tg(t,e){const{mimeType:r}=bo(t)||{},n=globalThis.loaders?.parseImageNode;return Gt(n),await n(t,r)}async function Eg(t,e,r){e=e||{};const s=(e.image||{}).type||"auto",{url:i}=r||{},o=wg(s);let a;switch(o){case"imagebitmap":a=await fg(t,e,i);break;case"image":a=await ql(t,e,i);break;case"data":a=await Tg(t);break;default:Gt(!1)}return s==="data"&&(a=Kl(a)),a}function wg(t){switch(t){case"auto":case"data":return ng();default:return rg(t),t}}const Sg=["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],Ig=["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],Pg={image:{type:"auto",decode:!0}},Og={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:Zp,mimeTypes:Ig,extensions:Sg,parse:Eg,tests:[t=>!!bo(new DataView(t))],options:Pg},ni={};function Rg(t){if(ni[t]===void 0){const e=Ts?Fg(t):Dg(t);ni[t]=e}return ni[t]}function Dg(t){const e=["image/png","image/jpeg","image/gif"],r=globalThis.loaders?.imageFormatsNode||e;return!!globalThis.loaders?.parseImageNode&&r.includes(t)}function Fg(t){switch(t){case"image/avif":case"image/webp":return Gg(t);default:return!0}}function Gg(t){try{return document.createElement("canvas").toDataURL(t).indexOf(`data:${t}`)===0}catch{return!1}}function et(t,e){if(!t)throw new Error(e||"assert failed: gltf")}const Ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},Da=["SCALAR","VEC2","VEC3","VEC4"],_g=[[Int8Array,5120],[Uint8Array,5121],[Int16Array,5122],[Uint16Array,5123],[Uint32Array,5125],[Float32Array,5126],[Float64Array,5130]],Ug=new Map(_g),Lg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ng={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},jg={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function Yl(t){return Da[t-1]||Da[0]}function ws(t){const e=Ug.get(t.constructor);if(!e)throw new Error("Illegal typed array");return e}function yo(t,e){const r=jg[t.componentType],n=Lg[t.type],s=Ng[t.componentType],i=t.count*n,o=t.count*n*s;et(o>=0&&o<=e.byteLength);const a=Xl[t.componentType],c=Ql[t.type];return{ArrayType:r,length:i,byteLength:o,componentByteSize:a,numberOfComponentsInElement:c}}function Hg(t,e,r){const n=t.bufferViews[r];et(n);const s=n.buffer,i=e[s];et(i);const o=(n.byteOffset||0)+i.byteOffset;return new Uint8Array(i.arrayBuffer,o,n.byteLength)}function Vg(t,e,r){const n=typeof r=="number"?t.accessors?.[r]:r;if(!n)throw new Error(`No gltf accessor ${JSON.stringify(r)}`);const s=t.bufferViews?.[n.bufferView||0];if(!s)throw new Error(`No gltf buffer view for accessor ${s}`);const{arrayBuffer:i,byteOffset:o}=e[s.buffer],a=(o||0)+(n.byteOffset||0)+(s.byteOffset||0),{ArrayType:c,length:u,componentByteSize:l,numberOfComponentsInElement:f}=yo(n,s),h=l*f,m=s.byteStride||h;if(typeof s.byteStride>"u"||s.byteStride===h)return new c(i,a,u);const d=new c(u);for(let p=0;p<n.count;p++){const g=new c(i,a+p*m,f);d.set(g,p*f)}return d}function kg(){return{asset:{version:"2.0",generator:"loaders.gl"},buffers:[],extensions:{},extensionsRequired:[],extensionsUsed:[]}}class Ie{gltf;sourceBuffers;byteLength;constructor(e){this.gltf={json:e?.json||kg(),buffers:e?.buffers||[],images:e?.images||[]},this.sourceBuffers=[],this.byteLength=0,this.gltf.buffers&&this.gltf.buffers[0]&&(this.byteLength=this.gltf.buffers[0].byteLength,this.sourceBuffers=[this.gltf.buffers[0]])}get json(){return this.gltf.json}getApplicationData(e){return this.json[e]}getExtraData(e){return(this.json.extras||{})[e]}hasExtension(e){const r=this.getUsedExtensions().find(s=>s===e),n=this.getRequiredExtensions().find(s=>s===e);return typeof r=="string"||typeof n=="string"}getExtension(e){const r=this.getUsedExtensions().find(s=>s===e),n=this.json.extensions||{};return r?n[e]:null}getRequiredExtension(e){return this.getRequiredExtensions().find(n=>n===e)?this.getExtension(e):null}getRequiredExtensions(){return this.json.extensionsRequired||[]}getUsedExtensions(){return this.json.extensionsUsed||[]}getRemovedExtensions(){return this.json.extensionsRemoved||[]}getObjectExtension(e,r){return(e.extensions||{})[r]}getScene(e){return this.getObject("scenes",e)}getNode(e){return this.getObject("nodes",e)}getSkin(e){return this.getObject("skins",e)}getMesh(e){return this.getObject("meshes",e)}getMaterial(e){return this.getObject("materials",e)}getAccessor(e){return this.getObject("accessors",e)}getTexture(e){return this.getObject("textures",e)}getSampler(e){return this.getObject("samplers",e)}getImage(e){return this.getObject("images",e)}getBufferView(e){return this.getObject("bufferViews",e)}getBuffer(e){return this.getObject("buffers",e)}getObject(e,r){if(typeof r=="object")return r;const n=this.json[e]&&this.json[e][r];if(!n)throw new Error(`glTF file error: Could not find ${e}[${r}]`);return n}getTypedArrayForBufferView(e){e=this.getBufferView(e);const r=e.buffer,n=this.gltf.buffers[r];et(n);const s=(e.byteOffset||0)+n.byteOffset;return new Uint8Array(n.arrayBuffer,s,e.byteLength)}getTypedArrayForAccessor(e){const r=this.getAccessor(e);return Vg(this.gltf.json,this.gltf.buffers,r)}getTypedArrayForImageData(e){e=this.getAccessor(e);const r=this.getBufferView(e.bufferView),s=this.getBuffer(r.buffer).data,i=r.byteOffset||0;return new Uint8Array(s,i,r.byteLength)}addApplicationData(e,r){return this.json[e]=r,this}addExtraData(e,r){return this.json.extras=this.json.extras||{},this.json.extras[e]=r,this}addObjectExtension(e,r,n){return e.extensions=e.extensions||{},e.extensions[r]=n,this.registerUsedExtension(r),this}setObjectExtension(e,r,n){const s=e.extensions||{};s[r]=n}removeObjectExtension(e,r){const n=e?.extensions||{};if(n[r]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const s=this.json.extensionsRemoved;s.includes(r)||s.push(r)}delete n[r]}addExtension(e,r={}){return et(r),this.json.extensions=this.json.extensions||{},this.json.extensions[e]=r,this.registerUsedExtension(e),r}addRequiredExtension(e,r={}){return et(r),this.addExtension(e,r),this.registerRequiredExtension(e),r}registerUsedExtension(e){this.json.extensionsUsed=this.json.extensionsUsed||[],this.json.extensionsUsed.find(r=>r===e)||this.json.extensionsUsed.push(e)}registerRequiredExtension(e){this.registerUsedExtension(e),this.json.extensionsRequired=this.json.extensionsRequired||[],this.json.extensionsRequired.find(r=>r===e)||this.json.extensionsRequired.push(e)}removeExtension(e){if(this.json.extensions?.[e]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const r=this.json.extensionsRemoved;r.includes(e)||r.push(e)}this.json.extensions&&delete this.json.extensions[e],this.json.extensionsRequired&&this._removeStringFromArray(this.json.extensionsRequired,e),this.json.extensionsUsed&&this._removeStringFromArray(this.json.extensionsUsed,e)}setDefaultScene(e){this.json.scene=e}addScene(e){const{nodeIndices:r}=e;return this.json.scenes=this.json.scenes||[],this.json.scenes.push({nodes:r}),this.json.scenes.length-1}addNode(e){const{meshIndex:r,matrix:n}=e;this.json.nodes=this.json.nodes||[];const s={mesh:r};return n&&(s.matrix=n),this.json.nodes.push(s),this.json.nodes.length-1}addMesh(e){const{attributes:r,indices:n,material:s,mode:i=4}=e,a={primitives:[{attributes:this._addAttributes(r),mode:i}]};if(n){const c=this._addIndices(n);a.primitives[0].indices=c}return Number.isFinite(s)&&(a.primitives[0].material=s),this.json.meshes=this.json.meshes||[],this.json.meshes.push(a),this.json.meshes.length-1}addPointCloud(e){const n={primitives:[{attributes:this._addAttributes(e),mode:0}]};return this.json.meshes=this.json.meshes||[],this.json.meshes.push(n),this.json.meshes.length-1}addImage(e,r){const n=bo(e),s=r||n?.mimeType,o={bufferView:this.addBufferView(e),mimeType:s};return this.json.images=this.json.images||[],this.json.images.push(o),this.json.images.length-1}addBufferView(e,r=0,n=this.byteLength){const s=e.byteLength;et(Number.isFinite(s)),this.sourceBuffers=this.sourceBuffers||[],this.sourceBuffers.push(e);const i={buffer:r,byteOffset:n,byteLength:s};return this.byteLength+=bn(s,4),this.json.bufferViews=this.json.bufferViews||[],this.json.bufferViews.push(i),this.json.bufferViews.length-1}addAccessor(e,r){const n={bufferView:e,type:Yl(r.size),componentType:r.componentType,count:r.count,max:r.max,min:r.min};return this.json.accessors=this.json.accessors||[],this.json.accessors.push(n),this.json.accessors.length-1}addBinaryBuffer(e,r={size:3}){const n=this.addBufferView(e);let s={min:r.min,max:r.max};(!s.min||!s.max)&&(s=this._getAccessorMinMax(e,r.size));const i={size:r.size,componentType:ws(e),count:Math.round(e.length/r.size),min:s.min,max:s.max};return this.addAccessor(n,Object.assign(i,r))}addTexture(e){const{imageIndex:r}=e,n={source:r};return this.json.textures=this.json.textures||[],this.json.textures.push(n),this.json.textures.length-1}addMaterial(e){return this.json.materials=this.json.materials||[],this.json.materials.push(e),this.json.materials.length-1}createBinaryChunk(){const e=this.byteLength,r=new ArrayBuffer(e),n=new Uint8Array(r);let s=0;for(const i of this.sourceBuffers||[])s=km(i,n,s);this.json?.buffers?.[0]?this.json.buffers[0].byteLength=e:this.json.buffers=[{byteLength:e}],this.gltf.binary=r,this.sourceBuffers=[r],this.gltf.buffers=[{arrayBuffer:r,byteOffset:0,byteLength:r.byteLength}]}_removeStringFromArray(e,r){let n=!0;for(;n;){const s=e.indexOf(r);s>-1?e.splice(s,1):n=!1}}_addAttributes(e={}){const r={};for(const n in e){const s=e[n],i=this._getGltfAttributeName(n),o=this.addBinaryBuffer(s.value,s);r[i]=o}return r}_addIndices(e){return this.addBinaryBuffer(e,{size:1})}_getGltfAttributeName(e){switch(e.toLowerCase()){case"position":case"positions":case"vertices":return"POSITION";case"normal":case"normals":return"NORMAL";case"color":case"colors":return"COLOR_0";case"texcoord":case"texcoords":return"TEXCOORD_0";default:return e}}_getAccessorMinMax(e,r){const n={min:null,max:null};if(e.length<r)return n;n.min=[],n.max=[];const s=e.subarray(0,r);for(const i of s)n.min.push(i),n.max.push(i);for(let i=r;i<e.length;i+=r)for(let o=0;o<r;o++)n.min[0+o]=Math.min(n.min[0+o],e[i+o]),n.max[0+o]=Math.max(n.max[0+o],e[i+o]);return n}}function Fa(t){return(t%1+1)%1}const $l={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,BOOLEAN:1,STRING:1,ENUM:1},zg={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:BigInt64Array,UINT64:BigUint64Array,FLOAT32:Float32Array,FLOAT64:Float64Array},Zl={INT8:1,UINT8:1,INT16:2,UINT16:2,INT32:4,UINT32:4,INT64:8,UINT64:8,FLOAT32:4,FLOAT64:8};function Bo(t,e){return Zl[e]*$l[t]}function Ss(t,e,r,n){if(r!=="UINT8"&&r!=="UINT16"&&r!=="UINT32"&&r!=="UINT64")return null;const s=t.getTypedArrayForBufferView(e),i=Is(s,"SCALAR",r,n+1);return i instanceof BigInt64Array||i instanceof BigUint64Array?null:i}function Is(t,e,r,n=1){const s=$l[e],i=zg[r],o=Zl[r],a=n*s,c=a*o;let u=t.buffer,l=t.byteOffset;return l%o!==0&&(u=new Uint8Array(u).slice(l,l+c).buffer,l=0),new i(u,l,a)}function vo(t,e,r){const n=`TEXCOORD_${e.texCoord||0}`,s=r.attributes[n],i=t.getTypedArrayForAccessor(s),o=t.gltf.json,a=e.index,c=o.textures?.[a]?.source;if(typeof c<"u"){const u=o.images?.[c]?.mimeType,l=t.gltf.images?.[c];if(l&&typeof l.width<"u"){const f=[];for(let h=0;h<i.length;h+=2){const m=Jg(l,u,i,h,e.channels);f.push(m)}return f}}return[]}function eu(t,e,r,n,s){if(!r?.length)return;const i=[];for(const l of r){let f=n.findIndex(h=>h===l);f===-1&&(f=n.push(l)-1),i.push(f)}const o=new Uint32Array(i),a=t.gltf.buffers.push({arrayBuffer:o.buffer,byteOffset:o.byteOffset,byteLength:o.byteLength})-1,c=t.addBufferView(o,a,0),u=t.addAccessor(c,{size:1,componentType:ws(o),count:o.length});s.attributes[e]=u}function Jg(t,e,r,n,s=[0]){const i={r:{offset:0,shift:0},g:{offset:1,shift:8},b:{offset:2,shift:16},a:{offset:3,shift:24}},o=r[n],a=r[n+1];let c=1;e&&(e.indexOf("image/jpeg")!==-1||e.indexOf("image/png")!==-1)&&(c=4);const u=Kg(o,a,t,c);let l=0;for(const f of s){const h=typeof f=="number"?Object.values(i)[f]:i[f],m=u+h.offset,d=Kl(t);if(d.data.length<=m)throw new Error(`${d.data.length} <= ${m}`);const p=d.data[m];l|=p<<h.shift}return l}function Kg(t,e,r,n=1){const s=r.width,i=Fa(t)*(s-1),o=Math.round(i),a=r.height,c=Fa(e)*(a-1),u=Math.round(c),l=r.components?r.components:n;return(u*s+o)*l}function tu(t,e,r,n,s){const i=[];for(let o=0;o<e;o++){const a=r[o],c=r[o+1]-r[o];if(c+a>n)break;const u=a/s,l=c/s;i.push(t.slice(u,u+l))}return i}function ru(t,e,r){const n=[];for(let s=0;s<e;s++){const i=s*r;n.push(t.slice(i,i+r))}return n}function nu(t,e,r,n){if(r)throw new Error("Not implemented - arrayOffsets for strings is specified");if(n){const s=[],i=new TextDecoder("utf8");let o=0;for(let a=0;a<t;a++){const c=n[a+1]-n[a];if(c+o<=e.length){const u=e.subarray(o,c+o),l=i.decode(u);s.push(l),o+=c}}return s}return[]}const wr="EXT_mesh_features",Wg=wr;async function qg(t,e){const r=new Ie(t);Xg(r,e)}function Qg(t,e){const r=new Ie(t);return $g(r),r.createBinaryChunk(),r.gltf}function Xg(t,e){const r=t.gltf.json;if(r.meshes)for(const n of r.meshes)for(const s of n.primitives)Yg(t,s,e)}function Yg(t,e,r){if(!r?.gltf?.loadBuffers)return;const s=e.extensions?.[wr]?.featureIds;if(s)for(const i of s){let o;if(typeof i.attribute<"u"){const a=`_FEATURE_ID_${i.attribute}`,c=e.attributes[a];o=t.getTypedArrayForAccessor(c)}else typeof i.texture<"u"&&r?.gltf?.loadImages?o=vo(t,i.texture,e):o=[];i.data=o}}function $g(t,e){const r=t.gltf.json.meshes;if(r)for(const n of r)for(const s of n.primitives)e0(t,s)}function Zg(t,e,r,n){e.extensions||(e.extensions={});let s=e.extensions[wr];s||(s={featureIds:[]},e.extensions[wr]=s);const{featureIds:i}=s,o={featureCount:r.length,propertyTable:n,data:r};i.push(o),t.addObjectExtension(e,wr,s)}function e0(t,e){const r=e.extensions?.[wr];if(!r)return;const n=r.featureIds;n.forEach((s,i)=>{if(s.data){const{accessorKey:o,index:a}=t0(e.attributes),c=new Uint32Array(s.data);n[i]={featureCount:c.length,propertyTable:s.propertyTable,attribute:a},t.gltf.buffers.push({arrayBuffer:c.buffer,byteOffset:c.byteOffset,byteLength:c.byteLength});const u=t.addBufferView(c),l=t.addAccessor(u,{size:1,componentType:ws(c),count:c.length});e.attributes[o]=l}})}function t0(t){const e="_FEATURE_ID_",r=Object.keys(t).filter(i=>i.indexOf(e)===0);let n=-1;for(const i of r){const o=Number(i.substring(e.length));o>n&&(n=o)}return n++,{accessorKey:`${e}${n}`,index:n}}const r0=Object.freeze(Object.defineProperty({__proto__:null,createExtMeshFeatures:Zg,decode:qg,encode:Qg,name:Wg},Symbol.toStringTag,{value:"Module"})),Pr="EXT_structural_metadata",n0=Pr;async function s0(t,e){const r=new Ie(t);o0(r,e)}function i0(t,e){const r=new Ie(t);return x0(r),r.createBinaryChunk(),r.gltf}function o0(t,e){if(!e.gltf?.loadBuffers)return;const r=t.getExtension(Pr);r&&(e.gltf?.loadImages&&a0(t,r),c0(t,r))}function a0(t,e){const r=e.propertyTextures,n=t.gltf.json;if(r&&n.meshes)for(const s of n.meshes)for(const i of s.primitives)u0(t,r,i,e)}function c0(t,e){const r=e.schema;if(!r)return;const n=r.classes,s=e.propertyTables;if(n&&s)for(const i in n){const o=l0(s,i);o&&h0(t,r,o)}}function l0(t,e){for(const r of t)if(r.class===e)return r;return null}function u0(t,e,r,n){if(!e)return;const i=r.extensions?.[Pr]?.propertyTextures;if(i)for(const o of i){const a=e[o];f0(t,a,r,n)}}function f0(t,e,r,n){if(!e.properties)return;n.dataAttributeNames||(n.dataAttributeNames=[]);const s=e.class;for(const i in e.properties){const o=`${s}_${i}`,a=e.properties?.[i];if(!a)continue;a.data||(a.data=[]);const c=a.data,u=vo(t,a,r);u!==null&&(eu(t,o,u,c,r),a.data=c,n.dataAttributeNames.push(o))}}function h0(t,e,r){const n=e.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const s=r.count;for(const i in n.properties){const o=n.properties[i],a=r.properties?.[i];if(a){const c=d0(t,e,o,s,a);a.data=c}}}function d0(t,e,r,n,s){let i=[];const o=s.values,a=t.getTypedArrayForBufferView(o),c=m0(t,r,s,n),u=p0(t,s,n);switch(r.type){case"SCALAR":case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":{i=g0(r,n,a,c);break}case"BOOLEAN":throw new Error(`Not implemented - classProperty.type=${r.type}`);case"STRING":{i=nu(n,a,c,u);break}case"ENUM":{i=b0(e,r,n,a,c);break}default:throw new Error(`Unknown classProperty type ${r.type}`)}return i}function m0(t,e,r,n){return e.array&&typeof e.count>"u"&&typeof r.arrayOffsets<"u"?Ss(t,r.arrayOffsets,r.arrayOffsetType||"UINT32",n):null}function p0(t,e,r){return typeof e.stringOffsets<"u"?Ss(t,e.stringOffsets,e.stringOffsetType||"UINT32",r):null}function g0(t,e,r,n){const s=t.array,i=t.count,o=Bo(t.type,t.componentType),a=r.byteLength/o;let c;return t.componentType?c=Is(r,t.type,t.componentType,a):c=r,s?n?tu(c,e,n,r.length,o):i?ru(c,e,i):[]:c}function b0(t,e,r,n,s){const i=e.enumType;if(!i)throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");const o=t.enums?.[i];if(!o)throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${i}`);const a=o.valueType||"UINT16",c=Bo(e.type,a),u=n.byteLength/c;let l=Is(n,e.type,a,u);if(l||(l=n),e.array){if(s)return y0({valuesData:l,numberOfElements:r,arrayOffsets:s,valuesDataBytesLength:n.length,elementSize:c,enumEntry:o});const f=e.count;return f?B0(l,r,f,o):[]}return Ao(l,0,r,o)}function y0(t){const{valuesData:e,numberOfElements:r,arrayOffsets:n,valuesDataBytesLength:s,elementSize:i,enumEntry:o}=t,a=[];for(let c=0;c<r;c++){const u=n[c],l=n[c+1]-n[c];if(l+u>s)break;const f=u/i,h=l/i,m=Ao(e,f,h,o);a.push(m)}return a}function B0(t,e,r,n){const s=[];for(let i=0;i<e;i++){const o=r*i,a=Ao(t,o,r,n);s.push(a)}return s}function Ao(t,e,r,n){const s=[];for(let i=0;i<r;i++)if(t instanceof BigInt64Array||t instanceof BigUint64Array)s.push("");else{const o=t[e+i],a=v0(n,o);a?s.push(a.name):s.push("")}return s}function v0(t,e){for(const r of t.values)if(r.value===e)return r;return null}const A0="schemaClassId";function x0(t,e){const r=t.getExtension(Pr);if(r&&r.propertyTables)for(const n of r.propertyTables){const s=n.class,i=r.schema?.classes?.[s];n.properties&&i&&C0(n,i,t)}}function C0(t,e,r){for(const n in t.properties){const s=t.properties[n].data;if(s){const i=e.properties[n];if(i){const o=w0(s,i,r);t.properties[n]=o}}}}function M0(t,e,r=A0){let n=t.getExtension(Pr);n||(n=t.addExtension(Pr)),n.schema=T0(e,r,n.schema);const s=E0(e,r,n.schema);return n.propertyTables||(n.propertyTables=[]),n.propertyTables.push(s)-1}function T0(t,e,r){const n=r??{id:"schema_id"},s={properties:{}};for(const i of t){const o={type:i.elementType,componentType:i.componentType};s.properties[i.name]=o}return n.classes={},n.classes[e]=s,n}function E0(t,e,r){const n={class:e,count:0};let s=0;const i=r.classes?.[e];for(const o of t){if(s===0&&(s=o.values.length),s!==o.values.length&&o.values.length)throw new Error("Illegal values in attributes");i?.properties[o.name]&&(n.properties||(n.properties={}),n.properties[o.name]={values:0,data:o.values})}return n.count=s,n}function w0(t,e,r){const n={values:0};if(e.type==="STRING"){const{stringData:s,stringOffsets:i}=P0(t);n.stringOffsets=si(i,r),n.values=si(s,r)}else if(e.type==="SCALAR"&&e.componentType){const s=I0(t,e.componentType);n.values=si(s,r)}return n}const S0={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:Int32Array,UINT64:Uint32Array,FLOAT32:Float32Array,FLOAT64:Float64Array};function I0(t,e){const r=[];for(const s of t)r.push(Number(s));const n=S0[e];if(!n)throw new Error("Illegal component type");return new n(r)}function P0(t){const e=new TextEncoder,r=[];let n=0;for(const c of t){const u=e.encode(c);n+=u.length,r.push(u)}const s=new Uint8Array(n),i=[];let o=0;for(const c of r)s.set(c,o),i.push(o),o+=c.length;i.push(o);const a=new Uint32Array(i);return{stringData:s,stringOffsets:a}}function si(t,e){return e.gltf.buffers.push({arrayBuffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength}),e.addBufferView(t)}const O0=Object.freeze(Object.defineProperty({__proto__:null,createExtStructuralMetadata:M0,decode:s0,encode:i0,name:n0},Symbol.toStringTag,{value:"Module"})),su="EXT_feature_metadata",R0=su;async function D0(t,e){const r=new Ie(t);F0(r,e)}function F0(t,e){if(!e.gltf?.loadBuffers)return;const r=t.getExtension(su);r&&(e.gltf?.loadImages&&G0(t,r),_0(t,r))}function G0(t,e){const r=e.schema;if(!r)return;const n=r.classes,{featureTextures:s}=e;if(n&&s)for(const i in n){const o=n[i],a=L0(s,i);a&&j0(t,a,o)}}function _0(t,e){const r=e.schema;if(!r)return;const n=r.classes,s=e.featureTables;if(n&&s)for(const i in n){const o=U0(s,i);o&&N0(t,r,o)}}function U0(t,e){for(const r in t){const n=t[r];if(n.class===e)return n}return null}function L0(t,e){for(const r in t){const n=t[r];if(n.class===e)return n}return null}function N0(t,e,r){if(!r.class)return;const n=e.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const s=r.count;for(const i in n.properties){const o=n.properties[i],a=r.properties?.[i];if(a){const c=H0(t,e,o,s,a);a.data=c}}}function j0(t,e,r){const n=e.class;for(const s in r.properties){const i=e?.properties?.[s];if(i){const o=K0(t,i,n);i.data=o}}}function H0(t,e,r,n,s){let i=[];const o=s.bufferView,a=t.getTypedArrayForBufferView(o),c=V0(t,r,s,n),u=k0(t,r,s,n);return r.type==="STRING"||r.componentType==="STRING"?i=nu(n,a,c,u):z0(r)&&(i=J0(r,n,a,c)),i}function V0(t,e,r,n){return e.type==="ARRAY"&&typeof e.componentCount>"u"&&typeof r.arrayOffsetBufferView<"u"?Ss(t,r.arrayOffsetBufferView,r.offsetType||"UINT32",n):null}function k0(t,e,r,n){return typeof r.stringOffsetBufferView<"u"?Ss(t,r.stringOffsetBufferView,r.offsetType||"UINT32",n):null}function z0(t){const e=["UINT8","INT16","UINT16","INT32","UINT32","INT64","UINT64","FLOAT32","FLOAT64"];return e.includes(t.type)||typeof t.componentType<"u"&&e.includes(t.componentType)}function J0(t,e,r,n){const s=t.type==="ARRAY",i=t.componentCount,o="SCALAR",a=t.componentType||t.type,c=Bo(o,a),u=r.byteLength/c,l=Is(r,o,a,u);return s?n?tu(l,e,n,r.length,c):i?ru(l,e,i):[]:l}function K0(t,e,r){const n=t.gltf.json;if(!n.meshes)return[];const s=[];for(const i of n.meshes)for(const o of i.primitives)W0(t,r,e,s,o);return s}function W0(t,e,r,n,s){const i={channels:r.channels,...r.texture},o=vo(t,i,s);o&&eu(t,e,o,n,s)}const q0=Object.freeze(Object.defineProperty({__proto__:null,decode:D0,name:R0},Symbol.toStringTag,{value:"Module"})),Q0="4.3.3",X0="4.3.3",es={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"};let Ga;async function _a(t){bm(t.modules);const e=ym("basis");return e||(Ga||=Y0(t),await Ga)}async function Y0(t){let e=null,r=null;return[e,r]=await Promise.all([await ar(es.TRANSCODER,"textures",t),await ar(es.TRANSCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await $0(e,r)}function $0(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t(r).then(s=>{const{BasisFile:i,initializeBasis:o}=s;o(),n({BasisFile:i})})})}let ii;async function Ua(t){const e=t.modules||{};return e.basisEncoder?e.basisEncoder:(ii=ii||Z0(t),await ii)}async function Z0(t){let e=null,r=null;return[e,r]=await Promise.all([await ar(es.ENCODER,"textures",t),await ar(es.ENCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await e1(e,r)}function e1(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t(r).then(s=>{const{BasisFile:i,KTX2File:o,initializeBasis:a,BasisEncoder:c}=s;a(),n({BasisFile:i,KTX2File:o,BasisEncoder:c})})})}const gr={COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGBA_ASTC_4X4_KHR:37808},t1=["","WEBKIT_","MOZ_"],La={WEBGL_compressed_texture_s3tc:"dxt",WEBGL_compressed_texture_s3tc_srgb:"dxt-srgb",WEBGL_compressed_texture_etc1:"etc1",WEBGL_compressed_texture_etc:"etc2",WEBGL_compressed_texture_pvrtc:"pvrtc",WEBGL_compressed_texture_atc:"atc",WEBGL_compressed_texture_astc:"astc",EXT_texture_compression_rgtc:"rgtc"};let Tn=null;function r1(t){if(!Tn){t=t||n1()||void 0,Tn=new Set;for(const e of t1)for(const r in La)if(t&&t.getExtension(`${e}${r}`)){const n=La[r];Tn.add(n)}}return Tn}function n1(){try{return document.createElement("canvas").getContext("webgl")}catch{return null}}const qe=[171,75,84,88,32,50,48,187,13,10,26,10];function s1(t){const e=new Uint8Array(t);return!(e.byteLength<qe.length||e[0]!==qe[0]||e[1]!==qe[1]||e[2]!==qe[2]||e[3]!==qe[3]||e[4]!==qe[4]||e[5]!==qe[5]||e[6]!==qe[6]||e[7]!==qe[7]||e[8]!==qe[8]||e[9]!==qe[9]||e[10]!==qe[10]||e[11]!==qe[11])}const i1={etc1:{basisFormat:0,compressed:!0,format:gr.COMPRESSED_RGB_ETC1_WEBGL},etc2:{basisFormat:1,compressed:!0},bc1:{basisFormat:2,compressed:!0,format:gr.COMPRESSED_RGB_S3TC_DXT1_EXT},bc3:{basisFormat:3,compressed:!0,format:gr.COMPRESSED_RGBA_S3TC_DXT5_EXT},bc4:{basisFormat:4,compressed:!0},bc5:{basisFormat:5,compressed:!0},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0},"bc7-m5":{basisFormat:7,compressed:!0},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:gr.COMPRESSED_RGB_PVRTC_4BPPV1_IMG},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:gr.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG},"astc-4x4":{basisFormat:10,compressed:!0,format:gr.COMPRESSED_RGBA_ASTC_4X4_KHR},"atc-rgb":{basisFormat:11,compressed:!0},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0},rgba32:{basisFormat:13,compressed:!1},rgb565:{basisFormat:14,compressed:!1},bgr565:{basisFormat:15,compressed:!1},rgba4444:{basisFormat:16,compressed:!1}};async function o1(t,e){if(e.basis.containerFormat==="auto"){if(s1(t)){const n=await Ua(e);return Na(n.KTX2File,t,e)}const{BasisFile:r}=await _a(e);return oi(r,t,e)}switch(e.basis.module){case"encoder":const r=await Ua(e);switch(e.basis.containerFormat){case"ktx2":return Na(r.KTX2File,t,e);case"basis":default:return oi(r.BasisFile,t,e)}case"transcoder":default:const{BasisFile:n}=await _a(e);return oi(n,t,e)}}function oi(t,e,r){const n=new t(new Uint8Array(e));try{if(!n.startTranscoding())throw new Error("Failed to start basis transcoding");const s=n.getNumImages(),i=[];for(let o=0;o<s;o++){const a=n.getNumLevels(o),c=[];for(let u=0;u<a;u++)c.push(a1(n,o,u,r));i.push(c)}return i}finally{n.close(),n.delete()}}function a1(t,e,r,n){const s=t.getImageWidth(e,r),i=t.getImageHeight(e,r),o=t.getHasAlpha(),{compressed:a,format:c,basisFormat:u}=iu(n,o),l=t.getImageTranscodedSizeInBytes(e,r,u),f=new Uint8Array(l);if(!t.transcodeImage(f,e,r,u,0,0))throw new Error("failed to start Basis transcoding");return{width:s,height:i,data:f,compressed:a,format:c,hasAlpha:o}}function Na(t,e,r){const n=new t(new Uint8Array(e));try{if(!n.startTranscoding())throw new Error("failed to start KTX2 transcoding");const s=n.getLevels(),i=[];for(let o=0;o<s;o++)i.push(c1(n,o,r));return[i]}finally{n.close(),n.delete()}}function c1(t,e,r){const{alphaFlag:n,height:s,width:i}=t.getImageLevelInfo(e,0,0),{compressed:o,format:a,basisFormat:c}=iu(r,n),u=t.getImageTranscodedSizeInBytes(e,0,0,c),l=new Uint8Array(u);if(!t.transcodeImage(l,e,0,0,c,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{width:i,height:s,data:l,compressed:o,levelSize:u,hasAlpha:n,format:a}}function iu(t,e){let r=t&&t.basis&&t.basis.format;return r==="auto"&&(r=ou()),typeof r=="object"&&(r=e?r.alpha:r.noAlpha),r=r.toLowerCase(),i1[r]}function ou(){const t=r1();return t.has("astc")?"astc-4x4":t.has("dxt")?{alpha:"bc3",noAlpha:"bc1"}:t.has("pvrtc")?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:t.has("etc1")?"etc1":t.has("etc2")?"etc2":"rgb565"}const l1={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:X0,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",libraryPath:"libs/",containerFormat:"auto",module:"transcoder"}}},u1={...l1,parse:o1},Or=!0,ja=1735152710,xo=12,ts=8,f1=1313821514,h1=5130562,d1=0,m1=0,p1=1;function g1(t,e=0){return`${String.fromCharCode(t.getUint8(e+0))}${String.fromCharCode(t.getUint8(e+1))}${String.fromCharCode(t.getUint8(e+2))}${String.fromCharCode(t.getUint8(e+3))}`}function b1(t,e=0,r={}){const n=new DataView(t),{magic:s=ja}=r,i=n.getUint32(e,!1);return i===s||i===ja}function y1(t,e,r=0,n={}){const s=new DataView(e),i=g1(s,r+0),o=s.getUint32(r+4,Or),a=s.getUint32(r+8,Or);switch(Object.assign(t,{header:{byteOffset:r,byteLength:a,hasBinChunk:!1},type:i,version:o,json:{},binChunks:[]}),r+=xo,t.version){case 1:return B1(t,s,r);case 2:return v1(t,s,r,n={});default:throw new Error(`Invalid GLB version ${t.version}. Only supports version 1 and 2.`)}}function B1(t,e,r){Gt(t.header.byteLength>xo+ts);const n=e.getUint32(r+0,Or),s=e.getUint32(r+4,Or);return r+=ts,Gt(s===d1),Ui(t,e,r,n),r+=n,r+=Li(t,e,r,t.header.byteLength),r}function v1(t,e,r,n){return Gt(t.header.byteLength>xo+ts),A1(t,e,r,n),r+t.header.byteLength}function A1(t,e,r,n){for(;r+8<=t.header.byteLength;){const s=e.getUint32(r+0,Or),i=e.getUint32(r+4,Or);switch(r+=ts,i){case f1:Ui(t,e,r,s);break;case h1:Li(t,e,r,s);break;case m1:n.strict||Ui(t,e,r,s);break;case p1:n.strict||Li(t,e,r,s);break}r+=bn(s,4)}return r}function Ui(t,e,r,n){const s=new Uint8Array(e.buffer,r,n),o=new TextDecoder("utf8").decode(s);return t.json=JSON.parse(o),bn(n,4)}function Li(t,e,r,n){return t.header.hasBinChunk=!0,t.binChunks.push({byteOffset:r,byteLength:n,arrayBuffer:e.buffer}),bn(n,4)}function au(t,e){if(t.startsWith("data:")||t.startsWith("http:")||t.startsWith("https:"))return t;const n=e.baseUri||e.uri;if(!n)throw new Error(`'baseUri' must be provided to resolve relative url ${t}`);return n.substr(0,n.lastIndexOf("/")+1)+t}const x1="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",C1="B9h9z9tFBBBF8dL9gBB9gLaaaaaFa9gEaaaB9gGaaB9gFaFaEQSBBFBFFGEGEGIILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBNn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBcI9z9iqlBMc/j9JSIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMkRIbaG97FaK978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAnDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAnDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBRnCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBHiCFD9tAiAPD9OD9hD9RHiDQBTFtGmEYIPLdKeOnH8ZAIAQJDBIBHpCFD9tApAPD9OD9hD9RHpAIASJDBIBHyCFD9tAyAPD9OD9hD9RHyDQBTFtGmEYIPLdKeOnH8cDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAnD9uHnDyBjGBAEAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnA8ZA8cDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNiV8ZcpMyS8cQ8df8eb8fHdApAyDQNiV8ZcpMyS8cQ8df8eb8fHiDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/xLGEaK978jUUUUBCAlHE8kUUUUBGXGXAGCI9HQBGXAFC98ZHI9FQBABRGCBRLEXAGAGDBBBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMBBAGCTJRGALCIJHLAI9JQBMMAIAF9PQFAEAFCEZHLCGWHGqCBCTAGl/8MBAEABAICGWJHIAG/8cBBGXAL9FQBAEAEDBIBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMIBMAIAEAG/8cBBSFMABAFC98ZHGT+HUUUBAGAF9PQBAEAFCEZHICEWHLJCBCAALl/8MBAEABAGCEWJHGAL/8cBBAEAIT+HUUUBAGAEAL/8cBBMAECAJ8kUUUUBM+yEGGaO97GXAF9FQBCBRGEXABCTJHEAEDBBBHICBDtHLCUU98D8cFCUU98D8cEHKD9OABDBBBHOAIDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAOAIDQBFGENVcMTtmYi8ZpyHICTD+sFD/6FHND/gFAICTD+rFCTD+sFD/6FHVD/gFD/kFD/lFHI9DB/+g6DYAVAIALD+2FHLAVCUUUU94DtHcD9OD9RD/kFHVAVD/mFAIAID/mFANALANAcD9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHLD/kFCTD+rFAVAND/mFALD/kFCggEDtD9OD9QHVAIAND/mFALD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHIDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAOAKD9OAVAIDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM94FEa8jUUUUBCAlHE8kUUUUBABAFC98ZHIT+JUUUBGXAIAF9PQBAEAFCEZHLCEWHFJCBCAAFl/8MBAEABAICEWJHBAF/8cBBAEALT+JUUUBABAEAF/8cBBMAECAJ8kUUUUBM/hEIGaF97FaL978jUUUUBCTlRGGXAF9FQBCBREEXAGABDBBBHIABCTJHLDBBBHKDQILKOSQfbPden8c8d8e8fHOCTD+sFHNCID+rFDMIBAB9DBBU8/DY9D/zI818/DYANCEDtD9QD/6FD/nFHNAIAKDQBFGENVcMTtmYi8ZpyHICTD+rFCTD+sFD/6FD/mFHKAKD/mFANAICTD+sFD/6FD/mFHVAVD/mFANAOCTD+rFCTD+sFD/6FD/mFHOAOD/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHND/mF9DBBX9LDYHID/kFCggEDtHcD9OAVAND/mFAID/kFCTD+rFD9QHVAOAND/mFAID/kFCTD+rFAKAND/mFAID/kFAcD9OD9QHNDQBFTtGEmYILPdKOenHID8dBAGDBIBDyB+t+J83EBABCNJAID8dFAGDBIBDyF+t+J83EBALAVANDQNVi8ZcMpySQ8c8dfb8e8fHND8dBAGDBIBDyG+t+J83EBABCiJAND8dFAGDBIBDyE+t+J83EBABCAJRBAECIJHEAF9JQBMMM/3FGEaF978jUUUUBCoBlREGXAGCGrAF9sHIC98ZHL9FQBCBRGABRFEXAFAFDBBBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBAFCTJRFAGCIJHGAL9JQBMMGXALAI9PQBAEAICEZHGCGWHFqCBCoBAFl/8MBAEABALCGWJHLAF/8cBBGXAG9FQBAEAEDBIBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMIBMALAEAF/8cBBMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",M1=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),T1=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]),E1={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},w1={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};async function S1(t,e,r,n,s,i="NONE"){const o=await I1();R1(o,o.exports[w1[s]],t,e,r,n,o.exports[E1[i||"NONE"]])}let ai;async function I1(){return ai||(ai=P1()),ai}async function P1(){let t=x1;WebAssembly.validate(M1)&&(t=C1,console.log("Warning: meshopt_decoder is using experimental SIMD support"));const e=await WebAssembly.instantiate(O1(t),{});return await e.instance.exports.__wasm_call_ctors(),e.instance}function O1(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;++n){const s=t.charCodeAt(n);e[n]=s>96?s-71:s>64?s-65:s>47?s+4:s>46?63:62}let r=0;for(let n=0;n<t.length;++n)e[r++]=e[n]<60?T1[e[n]]:(e[n]-60)*64+e[++n];return e.buffer.slice(0,r)}function R1(t,e,r,n,s,i,o){const a=t.exports.sbrk,c=n+3&-4,u=a(c*s),l=a(i.length),f=new Uint8Array(t.exports.memory.buffer);f.set(i,l);const h=e(u,n,s,l,i.length);if(h===0&&o&&o(u,c,s),r.set(f.subarray(u,u+n*s)),a(u-a(0)),h!==0)throw new Error(`Malformed buffer data: ${h}`)}const rs="EXT_meshopt_compression",D1=rs;async function F1(t,e){const r=new Ie(t);if(!e?.gltf?.decompressMeshes||!e.gltf?.loadBuffers)return;const n=[];for(const s of t.json.bufferViews||[])n.push(G1(r,s));await Promise.all(n),r.removeExtension(rs)}async function G1(t,e){const r=t.getObjectExtension(e,rs);if(r){const{byteOffset:n=0,byteLength:s=0,byteStride:i,count:o,mode:a,filter:c="NONE",buffer:u}=r,l=t.gltf.buffers[u],f=new Uint8Array(l.arrayBuffer,l.byteOffset+n,s),h=new Uint8Array(t.gltf.buffers[e.buffer].arrayBuffer,e.byteOffset,e.byteLength);await S1(h,o,i,f,a,c),t.removeObjectExtension(e,rs)}}const _1=Object.freeze(Object.defineProperty({__proto__:null,decode:F1,name:D1},Symbol.toStringTag,{value:"Module"})),Br="EXT_texture_webp",U1=Br;function L1(t,e){const r=new Ie(t);if(!Rg("image/webp")){if(r.getRequiredExtensions().includes(Br))throw new Error(`gltf: Required extension ${Br} not supported by browser`);return}const{json:n}=r;for(const s of n.textures||[]){const i=r.getObjectExtension(s,Br);i&&(s.source=i.source),r.removeObjectExtension(s,Br)}r.removeExtension(Br)}const N1=Object.freeze(Object.defineProperty({__proto__:null,name:U1,preprocess:L1},Symbol.toStringTag,{value:"Module"})),Nn="KHR_texture_basisu",j1=Nn;function H1(t,e){const r=new Ie(t),{json:n}=r;for(const s of n.textures||[]){const i=r.getObjectExtension(s,Nn);i&&(s.source=i.source,r.removeObjectExtension(s,Nn))}r.removeExtension(Nn)}const V1=Object.freeze(Object.defineProperty({__proto__:null,name:j1,preprocess:H1},Symbol.toStringTag,{value:"Module"})),k1="4.3.3",z1={dataType:null,batchType:null,name:"Draco",id:"draco",module:"draco",version:k1,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:typeof WebAssembly=="object"?"wasm":"js",libraryPath:"libs/",extraAttributes:{},attributeNameEntry:void 0}}};function J1(t,e,r){const n=cu(e.metadata),s=[],i=K1(e.attributes);for(const o in t){const a=t[o],c=Ha(o,a,i[o]);s.push(c)}if(r){const o=Ha("indices",r);s.push(o)}return{fields:s,metadata:n}}function K1(t){const e={};for(const r in t){const n=t[r];e[n.name||"undefined"]=n}return e}function Ha(t,e,r){const n=r?cu(r.metadata):void 0;return Xp(t,e,n)}function cu(t){Object.entries(t);const e={};for(const r in t)e[`${r}.string`]=JSON.stringify(t[r]);return e}const Va={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},W1={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},q1=4;class Q1{draco;decoder;metadataQuerier;constructor(e){this.draco=e,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}destroy(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)}parseSync(e,r={}){const n=new this.draco.DecoderBuffer;n.Init(new Int8Array(e),e.byteLength),this._disableAttributeTransforms(r);const s=this.decoder.GetEncodedGeometryType(n),i=s===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{let o;switch(s){case this.draco.TRIANGULAR_MESH:o=this.decoder.DecodeBufferToMesh(n,i);break;case this.draco.POINT_CLOUD:o=this.decoder.DecodeBufferToPointCloud(n,i);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!o.ok()||!i.ptr){const h=`DRACO decompression failed: ${o.error_msg()}`;throw new Error(h)}const a=this._getDracoLoaderData(i,s,r),c=this._getMeshData(i,a,r),u=Qp(c.attributes),l=J1(c.attributes,a,c.indices);return{loader:"draco",loaderData:a,header:{vertexCount:i.num_points(),boundingBox:u},...c,schema:l}}finally{this.draco.destroy(n),i&&this.draco.destroy(i)}}_getDracoLoaderData(e,r,n){const s=this._getTopLevelMetadata(e),i=this._getDracoAttributes(e,n);return{geometry_type:r,num_attributes:e.num_attributes(),num_points:e.num_points(),num_faces:e instanceof this.draco.Mesh?e.num_faces():0,metadata:s,attributes:i}}_getDracoAttributes(e,r){const n={};for(let s=0;s<e.num_attributes();s++){const i=this.decoder.GetAttribute(e,s),o=this._getAttributeMetadata(e,s);n[i.unique_id()]={unique_id:i.unique_id(),attribute_type:i.attribute_type(),data_type:i.data_type(),num_components:i.num_components(),byte_offset:i.byte_offset(),byte_stride:i.byte_stride(),normalized:i.normalized(),attribute_index:s,metadata:o};const a=this._getQuantizationTransform(i,r);a&&(n[i.unique_id()].quantization_transform=a);const c=this._getOctahedronTransform(i,r);c&&(n[i.unique_id()].octahedron_transform=c)}return n}_getMeshData(e,r,n){const s=this._getMeshAttributes(r,e,n);if(!s.POSITION)throw new Error("DRACO: No position attribute found.");if(e instanceof this.draco.Mesh)switch(n.topology){case"triangle-strip":return{topology:"triangle-strip",mode:4,attributes:s,indices:{value:this._getTriangleStripIndices(e),size:1}};case"triangle-list":default:return{topology:"triangle-list",mode:5,attributes:s,indices:{value:this._getTriangleListIndices(e),size:1}}}return{topology:"point-list",mode:0,attributes:s}}_getMeshAttributes(e,r,n){const s={};for(const i of Object.values(e.attributes)){const o=this._deduceAttributeName(i,n);i.name=o;const a=this._getAttributeValues(r,i);if(a){const{value:c,size:u}=a;s[o]={value:c,size:u,byteOffset:i.byte_offset,byteStride:i.byte_stride,normalized:i.normalized}}}return s}_getTriangleListIndices(e){const n=e.num_faces()*3,s=n*q1,i=this.draco._malloc(s);try{return this.decoder.GetTrianglesUInt32Array(e,s,i),new Uint32Array(this.draco.HEAPF32.buffer,i,n).slice()}finally{this.draco._free(i)}}_getTriangleStripIndices(e){const r=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(e,r),$1(r)}finally{this.draco.destroy(r)}}_getAttributeValues(e,r){const n=W1[r.data_type];if(!n)return console.warn(`DRACO: Unsupported attribute type ${r.data_type}`),null;const s=r.num_components,o=e.num_points()*s,a=o*n.BYTES_PER_ELEMENT,c=X1(this.draco,n);let u;const l=this.draco._malloc(a);try{const f=this.decoder.GetAttribute(e,r.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(e,f,c,a,l),u=new n(this.draco.HEAPF32.buffer,l,o).slice()}finally{this.draco._free(l)}return{value:u,size:s}}_deduceAttributeName(e,r){const n=e.unique_id;for(const[o,a]of Object.entries(r.extraAttributes||{}))if(a===n)return o;const s=e.attribute_type;for(const o in Va)if(this.draco[o]===s)return Va[o];const i=r.attributeNameEntry||"name";return e.metadata[i]?e.metadata[i].string:`CUSTOM_ATTRIBUTE_${n}`}_getTopLevelMetadata(e){const r=this.decoder.GetMetadata(e);return this._getDracoMetadata(r)}_getAttributeMetadata(e,r){const n=this.decoder.GetAttributeMetadata(e,r);return this._getDracoMetadata(n)}_getDracoMetadata(e){if(!e||!e.ptr)return{};const r={},n=this.metadataQuerier.NumEntries(e);for(let s=0;s<n;s++){const i=this.metadataQuerier.GetEntryName(e,s);r[i]=this._getDracoMetadataField(e,i)}return r}_getDracoMetadataField(e,r){const n=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(e,r,n);const s=Y1(n);return{int:this.metadataQuerier.GetIntEntry(e,r),string:this.metadataQuerier.GetStringEntry(e,r),double:this.metadataQuerier.GetDoubleEntry(e,r),intArray:s}}finally{this.draco.destroy(n)}}_disableAttributeTransforms(e){const{quantizedAttributes:r=[],octahedronAttributes:n=[]}=e,s=[...r,...n];for(const i of s)this.decoder.SkipAttributeTransform(this.draco[i])}_getQuantizationTransform(e,r){const{quantizedAttributes:n=[]}=r,s=e.attribute_type();if(n.map(o=>this.decoder[o]).includes(s)){const o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(e))return{quantization_bits:o.quantization_bits(),range:o.range(),min_values:new Float32Array([1,2,3]).map(a=>o.min_value(a))}}finally{this.draco.destroy(o)}}return null}_getOctahedronTransform(e,r){const{octahedronAttributes:n=[]}=r,s=e.attribute_type();if(n.map(o=>this.decoder[o]).includes(s)){const o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(e))return{quantization_bits:o.quantization_bits()}}finally{this.draco.destroy(o)}}return null}}function X1(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32;default:return t.DT_INVALID}}function Y1(t){const e=t.size(),r=new Int32Array(e);for(let n=0;n<e;n++)r[n]=t.GetValue(n);return r}function $1(t){const e=t.size(),r=new Int32Array(e);for(let n=0;n<e;n++)r[n]=t.GetValue(n);return r}const Z1="1.5.6",eb="1.4.1",ci=`https://www.gstatic.com/draco/versioned/decoders/${Z1}`,Je={DECODER:"draco_wasm_wrapper.js",DECODER_WASM:"draco_decoder.wasm",FALLBACK_DECODER:"draco_decoder.js",ENCODER:"draco_encoder.js"},li={[Je.DECODER]:`${ci}/${Je.DECODER}`,[Je.DECODER_WASM]:`${ci}/${Je.DECODER_WASM}`,[Je.FALLBACK_DECODER]:`${ci}/${Je.FALLBACK_DECODER}`,[Je.ENCODER]:`https://raw.githubusercontent.com/google/draco/${eb}/javascript/${Je.ENCODER}`};let ui;async function tb(t){const e=t.modules||{};return e.draco3d?ui||=e.draco3d.createDecoderModule({}).then(r=>({draco:r})):ui||=rb(t),await ui}async function rb(t){let e,r;switch(t.draco&&t.draco.decoderType){case"js":e=await ar(li[Je.FALLBACK_DECODER],"draco",t,Je.FALLBACK_DECODER);break;case"wasm":default:[e,r]=await Promise.all([await ar(li[Je.DECODER],"draco",t,Je.DECODER),await ar(li[Je.DECODER_WASM],"draco",t,Je.DECODER_WASM)])}return e=e||globalThis.DracoDecoderModule,await nb(e,r)}function nb(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t({...r,onModuleLoaded:s=>n({draco:s})})})}const sb={...z1,parse:ib};async function ib(t,e){const{draco:r}=await tb(e),n=new Q1(r);try{return n.parseSync(t,e?.draco)}finally{n.destroy()}}function ob(t){const e={};for(const r in t){const n=t[r];if(r!=="indices"){const s=lu(n);e[r]=s}}return e}function lu(t){const{buffer:e,size:r,count:n}=ab(t);return{value:e,size:r,byteOffset:0,count:n,type:Yl(r),componentType:ws(e)}}function ab(t){let e=t,r=1,n=0;return t&&t.value&&(e=t.value,r=t.size||1),e&&(ArrayBuffer.isView(e)||(e=cb(e,Float32Array)),n=e.length/r),{buffer:e,size:r,count:n}}function cb(t,e,r=!1){return t?Array.isArray(t)?new e(t):r&&!(t instanceof e)?new e(t):t:null}const Wt="KHR_draco_mesh_compression",lb=Wt;function ub(t,e,r){const n=new Ie(t);for(const s of uu(n))n.getObjectExtension(s,Wt)}async function fb(t,e,r){if(!e?.gltf?.decompressMeshes)return;const n=new Ie(t),s=[];for(const i of uu(n))n.getObjectExtension(i,Wt)&&s.push(db(n,i,e,r));await Promise.all(s),n.removeExtension(Wt)}function hb(t,e={}){const r=new Ie(t);for(const n of r.json.meshes||[])mb(n),r.addRequiredExtension(Wt)}async function db(t,e,r,n){const s=t.getObjectExtension(e,Wt);if(!s)return;const i=t.getTypedArrayForBufferView(s.bufferView),o=Ol(i.buffer,i.byteOffset),a={...r};delete a["3d-tiles"];const c=await Ml(o,sb,a,n),u=ob(c.attributes);for(const[l,f]of Object.entries(u))if(l in e.attributes){const h=e.attributes[l],m=t.getAccessor(h);m?.min&&m?.max&&(f.min=m.min,f.max=m.max)}e.attributes=u,c.indices&&(e.indices=lu(c.indices)),t.removeObjectExtension(e,Wt),pb(e)}function mb(t,e,r=4,n,s){if(!n.DracoWriter)throw new Error("options.gltf.DracoWriter not provided");const i=n.DracoWriter.encodeSync({attributes:t}),o=s?.parseSync?.({attributes:t}),a=n._addFauxAttributes(o.attributes),c=n.addBufferView(i);return{primitives:[{attributes:a,mode:r,extensions:{[Wt]:{bufferView:c,attributes:a}}}]}}function pb(t){if(!t.attributes&&Object.keys(t.attributes).length>0)throw new Error("glTF: Empty primitive detected: Draco decompression failure?")}function*uu(t){for(const e of t.json.meshes||[])for(const r of e.primitives)yield r}const gb=Object.freeze(Object.defineProperty({__proto__:null,decode:fb,encode:hb,name:lb,preprocess:ub},Symbol.toStringTag,{value:"Module"})),bb={EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1};globalThis.mathgl=globalThis.mathgl||{config:{...bb}};const at=globalThis.mathgl.config;function yb(t,{precision:e=at.precision}={}){return t=Bb(t),`${parseFloat(t.toPrecision(e))}`}function ns(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function fu(t,e,r){const n=at.EPSILON;try{if(t===e)return!0;if(ns(t)&&ns(e)){if(t.length!==e.length)return!1;for(let s=0;s<t.length;++s)if(!fu(t[s],e[s]))return!1;return!0}return t&&t.equals?t.equals(e):e&&e.equals?e.equals(t):typeof t=="number"&&typeof e=="number"?Math.abs(t-e)<=at.EPSILON*Math.max(1,Math.abs(t),Math.abs(e)):!1}finally{at.EPSILON=n}}function Bb(t){return Math.round(t/at.EPSILON)*at.EPSILON}class hu extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,r=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+r];return this.check()}toArray(e=[],r=0){for(let n=0;n<this.ELEMENTS;++n)e[r+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:ns(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(at)}formatString(e){let r="";for(let n=0;n<this.ELEMENTS;++n)r+=(n>0?", ":"")+yb(this[n],e);return`${e.printTypes?this.constructor.name:""}[${r}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(!fu(this[r],e[r]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(this[r]!==e[r])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,r,n){if(n===void 0)return this.lerp(this,e,r);for(let s=0;s<this.ELEMENTS;++s){const i=e[s],o=typeof r=="number"?r:r[s];this[s]=i+n*(o-i)}return this.check()}min(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.min(e[r],this[r]);return this.check()}max(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.max(e[r],this[r]);return this.check()}clamp(e,r){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),r[n]);return this.check()}add(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]+=r[n];return this.check()}subtract(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]-=r[n];return this.check()}scale(e){if(typeof e=="number")for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;else for(let r=0;r<this.ELEMENTS&&r<e.length;++r)this[r]*=e[r];return this.check()}multiplyByScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}check(){if(at.debug&&!this.validate())throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let r=0;r<this.ELEMENTS;++r)e=e&&Number.isFinite(this[r]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=e;return this.check()}addScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,r){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),r);return this.check()}get elements(){return this}}function vb(t,e){if(t.length!==e)return!1;for(let r=0;r<t.length;++r)if(!Number.isFinite(t[r]))return!1;return!0}function $e(t){if(!Number.isFinite(t))throw new Error(`Invalid number ${JSON.stringify(t)}`);return t}function Ab(t,e,r=""){if(at.debug&&!vb(t,e))throw new Error(`math.gl: ${r} some fields set to invalid numbers'`);return t}function ka(t,e){if(!t)throw new Error(`math.gl assertion ${e}`)}class xb extends hu{get x(){return this[0]}set x(e){this[0]=$e(e)}get y(){return this[1]}set y(e){this[1]=$e(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let r=0;r<this.ELEMENTS;++r)e+=this[r]*this[r];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let r=0;for(let n=0;n<this.ELEMENTS;++n){const s=this[n]-e[n];r+=s*s}return $e(r)}dot(e){let r=0;for(let n=0;n<this.ELEMENTS;++n)r+=this[n]*e[n];return $e(r)}normalize(){const e=this.magnitude();if(e!==0)for(let r=0;r<this.ELEMENTS;++r)this[r]/=e;return this.check()}multiply(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]*=r[n];return this.check()}divide(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]/=r[n];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return ka(e>=0&&e<this.ELEMENTS,"index is out of range"),$e(this[e])}setComponent(e,r){return ka(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=r,this.check()}addVectors(e,r){return this.copy(e).add(r)}subVectors(e,r){return this.copy(e).subtract(r)}multiplyVectors(e,r){return this.copy(e).multiply(r)}addScaledVector(e,r){return this.add(new this.constructor(e).multiplyScalar(r))}}let ss=typeof Float32Array<"u"?Float32Array:Array;function Cb(){const t=new ss(2);return ss!=Float32Array&&(t[0]=0,t[1]=0),t}function Mb(t,e,r){const n=e[0],s=e[1];return t[0]=r[0]*n+r[3]*s+r[6],t[1]=r[1]*n+r[4]*s+r[7],t}(function(){const t=Cb();return function(e,r,n,s,i,o){let a,c;for(r||(r=2),n||(n=0),s?c=Math.min(s*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],i(t,t,o),e[a]=t[0],e[a+1]=t[1];return e}})();function Tb(t,e,r){const n=e[0],s=e[1],i=e[2],o=r[3]*n+r[7]*s+r[11]*i||1;return t[0]=(r[0]*n+r[4]*s+r[8]*i)/o,t[1]=(r[1]*n+r[5]*s+r[9]*i)/o,t[2]=(r[2]*n+r[6]*s+r[10]*i)/o,t}function Eb(t,e,r){const n=e[0],s=e[1];return t[0]=r[0]*n+r[2]*s,t[1]=r[1]*n+r[3]*s,t[2]=e[2],t}function wb(t,e,r){const n=e[0],s=e[1],i=e[2];return t[0]=r[0]*n+r[3]*s+r[6]*i,t[1]=r[1]*n+r[4]*s+r[7]*i,t[2]=r[2]*n+r[5]*s+r[8]*i,t[3]=e[3],t}function Sb(){const t=new ss(3);return ss!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Ib(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Pb(t,e,r){const n=e[0],s=e[1],i=e[2],o=r[0],a=r[1],c=r[2];return t[0]=s*c-i*a,t[1]=i*o-n*c,t[2]=n*a-s*o,t}function Ob(t,e,r){const n=e[0],s=e[1],i=e[2];let o=r[3]*n+r[7]*s+r[11]*i+r[15];return o=o||1,t[0]=(r[0]*n+r[4]*s+r[8]*i+r[12])/o,t[1]=(r[1]*n+r[5]*s+r[9]*i+r[13])/o,t[2]=(r[2]*n+r[6]*s+r[10]*i+r[14])/o,t}function du(t,e,r){const n=e[0],s=e[1],i=e[2];return t[0]=n*r[0]+s*r[3]+i*r[6],t[1]=n*r[1]+s*r[4]+i*r[7],t[2]=n*r[2]+s*r[5]+i*r[8],t}function Rb(t,e,r){const n=r[0],s=r[1],i=r[2],o=r[3],a=e[0],c=e[1],u=e[2];let l=s*u-i*c,f=i*a-n*u,h=n*c-s*a,m=s*h-i*f,d=i*l-n*h,p=n*f-s*l;const g=o*2;return l*=g,f*=g,h*=g,m*=2,d*=2,p*=2,t[0]=a+l+m,t[1]=c+f+d,t[2]=u+h+p,t}function Db(t,e,r,n){const s=[],i=[];return s[0]=e[0]-r[0],s[1]=e[1]-r[1],s[2]=e[2]-r[2],i[0]=s[0],i[1]=s[1]*Math.cos(n)-s[2]*Math.sin(n),i[2]=s[1]*Math.sin(n)+s[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Fb(t,e,r,n){const s=[],i=[];return s[0]=e[0]-r[0],s[1]=e[1]-r[1],s[2]=e[2]-r[2],i[0]=s[2]*Math.sin(n)+s[0]*Math.cos(n),i[1]=s[1],i[2]=s[2]*Math.cos(n)-s[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Gb(t,e,r,n){const s=[],i=[];return s[0]=e[0]-r[0],s[1]=e[1]-r[1],s[2]=e[2]-r[2],i[0]=s[0]*Math.cos(n)-s[1]*Math.sin(n),i[1]=s[0]*Math.sin(n)+s[1]*Math.cos(n),i[2]=s[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function _b(t,e){const r=t[0],n=t[1],s=t[2],i=e[0],o=e[1],a=e[2],c=Math.sqrt((r*r+n*n+s*s)*(i*i+o*o+a*a)),u=c&&Ib(t,e)/c;return Math.acos(Math.min(Math.max(u,-1),1))}(function(){const t=Sb();return function(e,r,n,s,i,o){let a,c;for(r||(r=3),n||(n=0),s?c=Math.min(s*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],i(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();const fi=[0,0,0];let En;class Co extends xb{static get ZERO(){return En||(En=new Co(0,0,0),Object.freeze(En)),En}constructor(e=0,r=0,n=0){super(-0,-0,-0),arguments.length===1&&ns(e)?this.copy(e):(at.debug&&($e(e),$e(r),$e(n)),this[0]=e,this[1]=r,this[2]=n)}set(e,r,n){return this[0]=e,this[1]=r,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return at.debug&&($e(e.x),$e(e.y),$e(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=$e(e)}angle(e){return _b(this,e)}cross(e){return Pb(this,this,e),this.check()}rotateX({radians:e,origin:r=fi}){return Db(this,this,r,e),this.check()}rotateY({radians:e,origin:r=fi}){return Fb(this,this,r,e),this.check()}rotateZ({radians:e,origin:r=fi}){return Gb(this,this,r,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return Ob(this,this,e),this.check()}transformAsVector(e){return Tb(this,this,e),this.check()}transformByMatrix3(e){return du(this,this,e),this.check()}transformByMatrix2(e){return Eb(this,this,e),this.check()}transformByQuaternion(e){return Rb(this,this,e),this.check()}}class Ub extends hu{toString(){let e="[";if(at.printRowMajor){e+="row-major:";for(let r=0;r<this.RANK;++r)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+r]}`}else{e+="column-major:";for(let r=0;r<this.ELEMENTS;++r)e+=` ${this[r]}`}return e+="]",e}getElementIndex(e,r){return r*this.RANK+e}getElement(e,r){return this[r*this.RANK+e]}setElement(e,r,n){return this[r*this.RANK+e]=$e(n),this}getColumn(e,r=new Array(this.RANK).fill(-0)){const n=e*this.RANK;for(let s=0;s<this.RANK;++s)r[s]=this[n+s];return r}setColumn(e,r){const n=e*this.RANK;for(let s=0;s<this.RANK;++s)this[n+s]=r[s];return this}}function Lb(t,e){if(t===e){const r=e[1],n=e[2],s=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=s}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function Nb(t,e){const r=e[0],n=e[1],s=e[2],i=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],f=l*o-a*u,h=-l*i+a*c,m=u*i-o*c;let d=r*f+n*h+s*m;return d?(d=1/d,t[0]=f*d,t[1]=(-l*n+s*u)*d,t[2]=(a*n-s*o)*d,t[3]=h*d,t[4]=(l*r-s*c)*d,t[5]=(-a*r+s*i)*d,t[6]=m*d,t[7]=(-u*r+n*c)*d,t[8]=(o*r-n*i)*d,t):null}function jb(t){const e=t[0],r=t[1],n=t[2],s=t[3],i=t[4],o=t[5],a=t[6],c=t[7],u=t[8];return e*(u*i-o*c)+r*(-u*s+o*a)+n*(c*s-i*a)}function za(t,e,r){const n=e[0],s=e[1],i=e[2],o=e[3],a=e[4],c=e[5],u=e[6],l=e[7],f=e[8],h=r[0],m=r[1],d=r[2],p=r[3],g=r[4],B=r[5],y=r[6],M=r[7],A=r[8];return t[0]=h*n+m*o+d*u,t[1]=h*s+m*a+d*l,t[2]=h*i+m*c+d*f,t[3]=p*n+g*o+B*u,t[4]=p*s+g*a+B*l,t[5]=p*i+g*c+B*f,t[6]=y*n+M*o+A*u,t[7]=y*s+M*a+A*l,t[8]=y*i+M*c+A*f,t}function Hb(t,e,r){const n=e[0],s=e[1],i=e[2],o=e[3],a=e[4],c=e[5],u=e[6],l=e[7],f=e[8],h=r[0],m=r[1];return t[0]=n,t[1]=s,t[2]=i,t[3]=o,t[4]=a,t[5]=c,t[6]=h*n+m*o+u,t[7]=h*s+m*a+l,t[8]=h*i+m*c+f,t}function Vb(t,e,r){const n=e[0],s=e[1],i=e[2],o=e[3],a=e[4],c=e[5],u=e[6],l=e[7],f=e[8],h=Math.sin(r),m=Math.cos(r);return t[0]=m*n+h*o,t[1]=m*s+h*a,t[2]=m*i+h*c,t[3]=m*o-h*n,t[4]=m*a-h*s,t[5]=m*c-h*i,t[6]=u,t[7]=l,t[8]=f,t}function Ja(t,e,r){const n=r[0],s=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=s*e[3],t[4]=s*e[4],t[5]=s*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function kb(t,e){const r=e[0],n=e[1],s=e[2],i=e[3],o=r+r,a=n+n,c=s+s,u=r*o,l=n*o,f=n*a,h=s*o,m=s*a,d=s*c,p=i*o,g=i*a,B=i*c;return t[0]=1-f-d,t[3]=l-B,t[6]=h+g,t[1]=l+B,t[4]=1-u-d,t[7]=m-p,t[2]=h-g,t[5]=m+p,t[8]=1-u-f,t}var Ni;(function(t){t[t.COL0ROW0=0]="COL0ROW0",t[t.COL0ROW1=1]="COL0ROW1",t[t.COL0ROW2=2]="COL0ROW2",t[t.COL1ROW0=3]="COL1ROW0",t[t.COL1ROW1=4]="COL1ROW1",t[t.COL1ROW2=5]="COL1ROW2",t[t.COL2ROW0=6]="COL2ROW0",t[t.COL2ROW1=7]="COL2ROW1",t[t.COL2ROW2=8]="COL2ROW2"})(Ni||(Ni={}));const zb=Object.freeze([1,0,0,0,1,0,0,0,1]);class vn extends Ub{static get IDENTITY(){return Kb()}static get ZERO(){return Jb()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return Ni}constructor(e,...r){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):r.length>0?this.copy([e,...r]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy(zb)}fromObject(e){return this.check()}fromQuaternion(e){return kb(this,e),this.check()}set(e,r,n,s,i,o,a,c,u){return this[0]=e,this[1]=r,this[2]=n,this[3]=s,this[4]=i,this[5]=o,this[6]=a,this[7]=c,this[8]=u,this.check()}setRowMajor(e,r,n,s,i,o,a,c,u){return this[0]=e,this[1]=s,this[2]=a,this[3]=r,this[4]=i,this[5]=c,this[6]=n,this[7]=o,this[8]=u,this.check()}determinant(){return jb(this)}transpose(){return Lb(this,this),this.check()}invert(){return Nb(this,this),this.check()}multiplyLeft(e){return za(this,e,this),this.check()}multiplyRight(e){return za(this,this,e),this.check()}rotate(e){return Vb(this,this,e),this.check()}scale(e){return Array.isArray(e)?Ja(this,this,e):Ja(this,this,[e,e]),this.check()}translate(e){return Hb(this,this,e),this.check()}transform(e,r){let n;switch(e.length){case 2:n=Mb(r||[-0,-0],e,this);break;case 3:n=du(r||[-0,-0,-0],e,this);break;case 4:n=wb(r||[-0,-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return Ab(n,e.length),n}transformVector(e,r){return this.transform(e,r)}transformVector2(e,r){return this.transform(e,r)}transformVector3(e,r){return this.transform(e,r)}}let wn,Sn=null;function Jb(){return wn||(wn=new vn([0,0,0,0,0,0,0,0,0]),Object.freeze(wn)),wn}function Kb(){return Sn||(Sn=new vn,Object.freeze(Sn)),Sn}const Ps="KHR_texture_transform",Wb=Ps,In=new Co,qb=new vn,Qb=new vn;async function Xb(t,e){if(!new Ie(t).hasExtension(Ps)||!e.gltf?.loadBuffers)return;const s=t.json.materials||[];for(let i=0;i<s.length;i++)Yb(i,t)}function Yb(t,e){const r=e.json.materials?.[t],n=[r?.pbrMetallicRoughness?.baseColorTexture,r?.emissiveTexture,r?.normalTexture,r?.occlusionTexture,r?.pbrMetallicRoughness?.metallicRoughnessTexture],s=[];for(const i of n)i&&i?.extensions?.[Ps]&&$b(e,t,i,s)}function $b(t,e,r,n){const s=Zb(r,n);if(!s)return;const i=t.json.meshes||[];for(const o of i)for(const a of o.primitives){const c=a.material;Number.isFinite(c)&&e===c&&ey(t,a,s)}}function Zb(t,e){const r=t.extensions?.[Ps],{texCoord:n=0}=t,{texCoord:s=n}=r;if(!(e.findIndex(([o,a])=>o===n&&a===s)!==-1)){const o=ny(r);return n!==s&&(t.texCoord=s),e.push([n,s]),{originalTexCoord:n,texCoord:s,matrix:o}}return null}function ey(t,e,r){const{originalTexCoord:n,texCoord:s,matrix:i}=r,o=e.attributes[`TEXCOORD_${n}`];if(Number.isFinite(o)){const a=t.json.accessors?.[o];if(a&&a.bufferView){const c=t.json.bufferViews?.[a.bufferView];if(c){const{arrayBuffer:u,byteOffset:l}=t.buffers[c.buffer],f=(l||0)+(a.byteOffset||0)+(c.byteOffset||0),{ArrayType:h,length:m}=yo(a,c),d=Xl[a.componentType],p=Ql[a.type],g=c.byteStride||d*p,B=new Float32Array(m);for(let y=0;y<a.count;y++){const M=new h(u,f+y*g,2);In.set(M[0],M[1],1),In.transformByMatrix3(i),B.set([In[0],In[1]],y*p)}n===s?ty(a,c,t.buffers,B):ry(s,a,e,t,B)}}}}function ty(t,e,r,n){t.componentType=5126,r.push({arrayBuffer:n.buffer,byteOffset:0,byteLength:n.buffer.byteLength}),e.buffer=r.length-1,e.byteLength=n.buffer.byteLength,e.byteOffset=0,delete e.byteStride}function ry(t,e,r,n,s){n.buffers.push({arrayBuffer:s.buffer,byteOffset:0,byteLength:s.buffer.byteLength});const i=n.json.bufferViews;if(!i)return;i.push({buffer:n.buffers.length-1,byteLength:s.buffer.byteLength,byteOffset:0});const o=n.json.accessors;o&&(o.push({bufferView:i?.length-1,byteOffset:0,componentType:5126,count:e.count,type:"VEC2"}),r.attributes[`TEXCOORD_${t}`]=o.length-1)}function ny(t){const{offset:e=[0,0],rotation:r=0,scale:n=[1,1]}=t,s=new vn().set(1,0,0,0,1,0,e[0],e[1],1),i=qb.set(Math.cos(r),Math.sin(r),0,-Math.sin(r),Math.cos(r),0,0,0,1),o=Qb.set(n[0],0,0,0,n[1],0,0,0,1);return s.multiplyRight(i).multiplyRight(o)}const sy=Object.freeze(Object.defineProperty({__proto__:null,decode:Xb,name:Wb},Symbol.toStringTag,{value:"Module"})),nr="KHR_lights_punctual",iy=nr;async function oy(t){const e=new Ie(t),{json:r}=e,n=e.getExtension(nr);n&&(e.json.lights=n.lights,e.removeExtension(nr));for(const s of r.nodes||[]){const i=e.getObjectExtension(s,nr);i&&(s.light=i.light),e.removeObjectExtension(s,nr)}}async function ay(t){const e=new Ie(t),{json:r}=e;if(r.lights){const n=e.addExtension(nr);et(!n.lights),n.lights=r.lights,delete r.lights}if(e.json.lights){for(const n of e.json.lights){const s=n.node;e.addObjectExtension(s,nr,n)}delete e.json.lights}}const cy=Object.freeze(Object.defineProperty({__proto__:null,decode:oy,encode:ay,name:iy},Symbol.toStringTag,{value:"Module"})),un="KHR_materials_unlit",ly=un;async function uy(t){const e=new Ie(t),{json:r}=e;for(const n of r.materials||[])n.extensions&&n.extensions.KHR_materials_unlit&&(n.unlit=!0),e.removeObjectExtension(n,un);e.removeExtension(un)}function fy(t){const e=new Ie(t),{json:r}=e;if(e.materials)for(const n of r.materials||[])n.unlit&&(delete n.unlit,e.addObjectExtension(n,un,{}),e.addExtension(un))}const hy=Object.freeze(Object.defineProperty({__proto__:null,decode:uy,encode:fy,name:ly},Symbol.toStringTag,{value:"Module"})),Vr="KHR_techniques_webgl",dy=Vr;async function my(t){const e=new Ie(t),{json:r}=e,n=e.getExtension(Vr);if(n){const s=gy(n,e);for(const i of r.materials||[]){const o=e.getObjectExtension(i,Vr);o&&(i.technique=Object.assign({},o,s[o.technique]),i.technique.values=by(i.technique,e)),e.removeObjectExtension(i,Vr)}e.removeExtension(Vr)}}async function py(t,e){}function gy(t,e){const{programs:r=[],shaders:n=[],techniques:s=[]}=t,i=new TextDecoder;return n.forEach(o=>{if(Number.isFinite(o.bufferView))o.code=i.decode(e.getTypedArrayForBufferView(o.bufferView));else throw new Error("KHR_techniques_webgl: no shader code")}),r.forEach(o=>{o.fragmentShader=n[o.fragmentShader],o.vertexShader=n[o.vertexShader]}),s.forEach(o=>{o.program=r[o.program]}),s}function by(t,e){const r=Object.assign({},t.values);return Object.keys(t.uniforms||{}).forEach(n=>{t.uniforms[n].value&&!(n in r)&&(r[n]=t.uniforms[n].value)}),Object.keys(r).forEach(n=>{typeof r[n]=="object"&&r[n].index!==void 0&&(r[n].texture=e.getTexture(r[n].index))}),r}const yy=Object.freeze(Object.defineProperty({__proto__:null,decode:my,encode:py,name:dy},Symbol.toStringTag,{value:"Module"})),mu=[O0,r0,_1,N1,V1,gb,cy,hy,yy,sy,q0];function By(t,e={},r){const n=mu.filter(s=>pu(s.name,e));for(const s of n)s.preprocess?.(t,e,r)}async function vy(t,e={},r){const n=mu.filter(s=>pu(s.name,e));for(const s of n)await s.decode?.(t,e,r)}function pu(t,e){const r=e?.gltf?.excludeExtensions||{};return!(t in r&&!r[t])}const hi="KHR_binary_glTF";function Ay(t){const e=new Ie(t),{json:r}=e;for(const n of r.images||[]){const s=e.getObjectExtension(n,hi);s&&Object.assign(n,s),e.removeObjectExtension(n,hi)}r.buffers&&r.buffers[0]&&delete r.buffers[0].uri,e.removeExtension(hi)}const Ka={accessors:"accessor",animations:"animation",buffers:"buffer",bufferViews:"bufferView",images:"image",materials:"material",meshes:"mesh",nodes:"node",samplers:"sampler",scenes:"scene",skins:"skin",textures:"texture"},xy={accessor:"accessors",animations:"animation",buffer:"buffers",bufferView:"bufferViews",image:"images",material:"materials",mesh:"meshes",node:"nodes",sampler:"samplers",scene:"scenes",skin:"skins",texture:"textures"};class Cy{idToIndexMap={animations:{},accessors:{},buffers:{},bufferViews:{},images:{},materials:{},meshes:{},nodes:{},samplers:{},scenes:{},skins:{},textures:{}};json;normalize(e,r){this.json=e.json;const n=e.json;switch(n.asset&&n.asset.version){case"2.0":return;case void 0:case"1.0":break;default:console.warn(`glTF: Unknown version ${n.asset.version}`);return}if(!r.normalize)throw new Error("glTF v1 is not supported.");console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."),this._addAsset(n),this._convertTopLevelObjectsToArrays(n),Ay(e),this._convertObjectIdsToArrayIndices(n),this._updateObjects(n),this._updateMaterial(n)}_addAsset(e){e.asset=e.asset||{},e.asset.version="2.0",e.asset.generator=e.asset.generator||"Normalized to glTF 2.0 by loaders.gl"}_convertTopLevelObjectsToArrays(e){for(const r in Ka)this._convertTopLevelObjectToArray(e,r)}_convertTopLevelObjectToArray(e,r){const n=e[r];if(!(!n||Array.isArray(n))){e[r]=[];for(const s in n){const i=n[s];i.id=i.id||s;const o=e[r].length;e[r].push(i),this.idToIndexMap[r][s]=o}}}_convertObjectIdsToArrayIndices(e){for(const r in Ka)this._convertIdsToIndices(e,r);"scene"in e&&(e.scene=this._convertIdToIndex(e.scene,"scene"));for(const r of e.textures)this._convertTextureIds(r);for(const r of e.meshes)this._convertMeshIds(r);for(const r of e.nodes)this._convertNodeIds(r);for(const r of e.scenes)this._convertSceneIds(r)}_convertTextureIds(e){e.source&&(e.source=this._convertIdToIndex(e.source,"image"))}_convertMeshIds(e){for(const r of e.primitives){const{attributes:n,indices:s,material:i}=r;for(const o in n)n[o]=this._convertIdToIndex(n[o],"accessor");s&&(r.indices=this._convertIdToIndex(s,"accessor")),i&&(r.material=this._convertIdToIndex(i,"material"))}}_convertNodeIds(e){e.children&&(e.children=e.children.map(r=>this._convertIdToIndex(r,"node"))),e.meshes&&(e.meshes=e.meshes.map(r=>this._convertIdToIndex(r,"mesh")))}_convertSceneIds(e){e.nodes&&(e.nodes=e.nodes.map(r=>this._convertIdToIndex(r,"node")))}_convertIdsToIndices(e,r){e[r]||(console.warn(`gltf v1: json doesn't contain attribute ${r}`),e[r]=[]);for(const n of e[r])for(const s in n){const i=n[s],o=this._convertIdToIndex(i,s);n[s]=o}}_convertIdToIndex(e,r){const n=xy[r];if(n in this.idToIndexMap){const s=this.idToIndexMap[n][e];if(!Number.isFinite(s))throw new Error(`gltf v1: failed to resolve ${r} with id ${e}`);return s}return e}_updateObjects(e){for(const r of this.json.buffers)delete r.type}_updateMaterial(e){for(const r of e.materials){r.pbrMetallicRoughness={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1};const n=r.values?.tex||r.values?.texture2d_0||r.values?.diffuseTex,s=e.textures.findIndex(i=>i.id===n);s!==-1&&(r.pbrMetallicRoughness.baseColorTexture={index:s})}}}function My(t,e={}){return new Cy().normalize(t,e)}async function Ty(t,e,r=0,n,s){return Ey(t,e,r,n),My(t,{normalize:n?.gltf?.normalize}),By(t,n,s),n?.gltf?.loadBuffers&&t.json.buffers&&await wy(t,n,s),n?.gltf?.loadImages&&await Sy(t,n,s),await vy(t,n,s),t}function Ey(t,e,r,n){if(n.uri&&(t.baseUri=n.uri),e instanceof ArrayBuffer&&!b1(e,r,n)&&(e=new TextDecoder().decode(e)),typeof e=="string")t.json=Nm(e);else if(e instanceof ArrayBuffer){const o={};r=y1(o,e,r,n.glb),et(o.type==="glTF",`Invalid GLB magic string ${o.type}`),t._glb=o,t.json=o.json}else et(!1,"GLTF: must be ArrayBuffer or string");const s=t.json.buffers||[];if(t.buffers=new Array(s.length).fill(null),t._glb&&t._glb.header.hasBinChunk){const{binChunks:o}=t._glb;t.buffers[0]={arrayBuffer:o[0].arrayBuffer,byteOffset:o[0].byteOffset,byteLength:o[0].byteLength}}const i=t.json.images||[];t.images=new Array(i.length).fill({})}async function wy(t,e,r){const n=t.json.buffers||[];for(let s=0;s<n.length;++s){const i=n[s];if(i.uri){const{fetch:o}=r;et(o);const a=au(i.uri,e),u=await(await r?.fetch?.(a))?.arrayBuffer?.();t.buffers[s]={arrayBuffer:u,byteOffset:0,byteLength:u.byteLength},delete i.uri}else t.buffers[s]===null&&(t.buffers[s]={arrayBuffer:new ArrayBuffer(i.byteLength),byteOffset:0,byteLength:i.byteLength})}}async function Sy(t,e,r){const n=Iy(t),s=t.json.images||[],i=[];for(const o of n)i.push(Py(t,s[o],o,e,r));return await Promise.all(i)}function Iy(t){const e=new Set,r=t.json.textures||[];for(const n of r)n.source!==void 0&&e.add(n.source);return Array.from(e).sort()}async function Py(t,e,r,n,s){let i;if(e.uri&&!e.hasOwnProperty("bufferView")){const a=au(e.uri,n),{fetch:c}=s;i=await(await c(a)).arrayBuffer(),e.bufferView={data:i}}if(Number.isFinite(e.bufferView)){const a=Hg(t.json,t.buffers,e.bufferView);i=Ol(a.buffer,a.byteOffset,a.byteLength)}et(i,"glTF image has no data");let o=await Ml(i,[Og,u1],{...n,mimeType:e.mimeType,basis:n.basis||{format:ou()}},s);o&&o[0]&&(o={compressed:!0,mipmaps:!1,width:o[0].width,height:o[0].height,data:o[0]}),t.images=t.images||[],t.images[r]=o}const ji={dataType:null,batchType:null,name:"glTF",id:"gltf",module:"gltf",version:Q0,extensions:["gltf","glb"],mimeTypes:["model/gltf+json","model/gltf-binary"],text:!0,binary:!0,tests:["glTF"],parse:Oy,options:{gltf:{normalize:!0,loadBuffers:!0,loadImages:!0,decompressMeshes:!0},log:console}};async function Oy(t,e={},r){e={...ji.options,...e},e.gltf={...ji.options.gltf,...e.gltf};const{byteOffset:n=0}=e;return await Ty({},t,n,e,r)}const Ry={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dy={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},nt={TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,REPEAT:10497,LINEAR:9729,NEAREST_MIPMAP_LINEAR:9986},Fy={magFilter:nt.TEXTURE_MAG_FILTER,minFilter:nt.TEXTURE_MIN_FILTER,wrapS:nt.TEXTURE_WRAP_S,wrapT:nt.TEXTURE_WRAP_T},Gy={[nt.TEXTURE_MAG_FILTER]:nt.LINEAR,[nt.TEXTURE_MIN_FILTER]:nt.NEAREST_MIPMAP_LINEAR,[nt.TEXTURE_WRAP_S]:nt.REPEAT,[nt.TEXTURE_WRAP_T]:nt.REPEAT};function _y(){return{id:"default-sampler",parameters:Gy}}function Uy(t){return Dy[t]}function Ly(t){return Ry[t]}class Ny{baseUri="";jsonUnprocessed;json;buffers=[];images=[];postProcess(e,r={}){const{json:n,buffers:s=[],images:i=[]}=e,{baseUri:o=""}=e;return et(n),this.baseUri=o,this.buffers=s,this.images=i,this.jsonUnprocessed=n,this.json=this._resolveTree(e.json,r),this.json}_resolveTree(e,r={}){const n={...e};return this.json=n,e.bufferViews&&(n.bufferViews=e.bufferViews.map((s,i)=>this._resolveBufferView(s,i))),e.images&&(n.images=e.images.map((s,i)=>this._resolveImage(s,i))),e.samplers&&(n.samplers=e.samplers.map((s,i)=>this._resolveSampler(s,i))),e.textures&&(n.textures=e.textures.map((s,i)=>this._resolveTexture(s,i))),e.accessors&&(n.accessors=e.accessors.map((s,i)=>this._resolveAccessor(s,i))),e.materials&&(n.materials=e.materials.map((s,i)=>this._resolveMaterial(s,i))),e.meshes&&(n.meshes=e.meshes.map((s,i)=>this._resolveMesh(s,i))),e.nodes&&(n.nodes=e.nodes.map((s,i)=>this._resolveNode(s,i)),n.nodes=n.nodes.map((s,i)=>this._resolveNodeChildren(s))),e.skins&&(n.skins=e.skins.map((s,i)=>this._resolveSkin(s,i))),e.scenes&&(n.scenes=e.scenes.map((s,i)=>this._resolveScene(s,i))),typeof this.json.scene=="number"&&n.scenes&&(n.scene=n.scenes[this.json.scene]),n}getScene(e){return this._get(this.json.scenes,e)}getNode(e){return this._get(this.json.nodes,e)}getSkin(e){return this._get(this.json.skins,e)}getMesh(e){return this._get(this.json.meshes,e)}getMaterial(e){return this._get(this.json.materials,e)}getAccessor(e){return this._get(this.json.accessors,e)}getCamera(e){return this._get(this.json.cameras,e)}getTexture(e){return this._get(this.json.textures,e)}getSampler(e){return this._get(this.json.samplers,e)}getImage(e){return this._get(this.json.images,e)}getBufferView(e){return this._get(this.json.bufferViews,e)}getBuffer(e){return this._get(this.json.buffers,e)}_get(e,r){if(typeof r=="object")return r;const n=e&&e[r];return n||console.warn(`glTF file error: Could not find ${e}[${r}]`),n}_resolveScene(e,r){return{...e,id:e.id||`scene-${r}`,nodes:(e.nodes||[]).map(n=>this.getNode(n))}}_resolveNode(e,r){const n={...e,id:e?.id||`node-${r}`};return e.mesh!==void 0&&(n.mesh=this.getMesh(e.mesh)),e.camera!==void 0&&(n.camera=this.getCamera(e.camera)),e.skin!==void 0&&(n.skin=this.getSkin(e.skin)),e.meshes!==void 0&&e.meshes.length&&(n.mesh=e.meshes.reduce((s,i)=>{const o=this.getMesh(i);return s.id=o.id,s.primitives=s.primitives.concat(o.primitives),s},{primitives:[]})),n}_resolveNodeChildren(e){return e.children&&(e.children=e.children.map(r=>this.getNode(r))),e}_resolveSkin(e,r){const n=typeof e.inverseBindMatrices=="number"?this.getAccessor(e.inverseBindMatrices):void 0;return{...e,id:e.id||`skin-${r}`,inverseBindMatrices:n}}_resolveMesh(e,r){const n={...e,id:e.id||`mesh-${r}`,primitives:[]};return e.primitives&&(n.primitives=e.primitives.map(s=>{const i={...s,attributes:{},indices:void 0,material:void 0},o=s.attributes;for(const a in o)i.attributes[a]=this.getAccessor(o[a]);return s.indices!==void 0&&(i.indices=this.getAccessor(s.indices)),s.material!==void 0&&(i.material=this.getMaterial(s.material)),i})),n}_resolveMaterial(e,r){const n={...e,id:e.id||`material-${r}`};if(n.normalTexture&&(n.normalTexture={...n.normalTexture},n.normalTexture.texture=this.getTexture(n.normalTexture.index)),n.occlusionTexture&&(n.occlusionTexture={...n.occlusionTexture},n.occlusionTexture.texture=this.getTexture(n.occlusionTexture.index)),n.emissiveTexture&&(n.emissiveTexture={...n.emissiveTexture},n.emissiveTexture.texture=this.getTexture(n.emissiveTexture.index)),n.emissiveFactor||(n.emissiveFactor=n.emissiveTexture?[1,1,1]:[0,0,0]),n.pbrMetallicRoughness){n.pbrMetallicRoughness={...n.pbrMetallicRoughness};const s=n.pbrMetallicRoughness;s.baseColorTexture&&(s.baseColorTexture={...s.baseColorTexture},s.baseColorTexture.texture=this.getTexture(s.baseColorTexture.index)),s.metallicRoughnessTexture&&(s.metallicRoughnessTexture={...s.metallicRoughnessTexture},s.metallicRoughnessTexture.texture=this.getTexture(s.metallicRoughnessTexture.index))}return n}_resolveAccessor(e,r){const n=Uy(e.componentType),s=Ly(e.type),i=n*s,o={...e,id:e.id||`accessor-${r}`,bytesPerComponent:n,components:s,bytesPerElement:i,value:void 0,bufferView:void 0,sparse:void 0};if(e.bufferView!==void 0&&(o.bufferView=this.getBufferView(e.bufferView)),o.bufferView){const a=o.bufferView.buffer,{ArrayType:c,byteLength:u}=yo(o,o.bufferView),l=(o.bufferView.byteOffset||0)+(o.byteOffset||0)+a.byteOffset;let f=a.arrayBuffer.slice(l,l+u);o.bufferView.byteStride&&(f=this._getValueFromInterleavedBuffer(a,l,o.bufferView.byteStride,o.bytesPerElement,o.count)),o.value=new c(f)}return o}_getValueFromInterleavedBuffer(e,r,n,s,i){const o=new Uint8Array(i*s);for(let a=0;a<i;a++){const c=r+a*n;o.set(new Uint8Array(e.arrayBuffer.slice(c,c+s)),a*s)}return o.buffer}_resolveTexture(e,r){return{...e,id:e.id||`texture-${r}`,sampler:typeof e.sampler=="number"?this.getSampler(e.sampler):_y(),source:typeof e.source=="number"?this.getImage(e.source):void 0}}_resolveSampler(e,r){const n={id:e.id||`sampler-${r}`,...e,parameters:{}};for(const s in n){const i=this._enumSamplerParameter(s);i!==void 0&&(n.parameters[i]=n[s])}return n}_enumSamplerParameter(e){return Fy[e]}_resolveImage(e,r){const n={...e,id:e.id||`image-${r}`,image:null,bufferView:e.bufferView!==void 0?this.getBufferView(e.bufferView):void 0},s=this.images[r];return s&&(n.image=s),n}_resolveBufferView(e,r){const n=e.buffer,s=this.buffers[n].arrayBuffer;let i=this.buffers[n].byteOffset||0;return e.byteOffset&&(i+=e.byteOffset),{id:`bufferView-${r}`,...e,buffer:this.buffers[n],data:new Uint8Array(s,i,e.byteLength)}}_resolveCamera(e,r){const n={...e,id:e.id||`camera-${r}`};return n.perspective,n.orthographic,n}}function jy(t,e){return new Ny().postProcess(t,e)}async function Hy(t){if(!t.endsWith(".gltf")&&!t.endsWith(".glb"))return console.error("Unsupported file format. Only .gltf and .glb are supported."),new Fe("EmptyMesh",Pe({}));try{const e=await $p(t,ji);if(!e)return console.error("Failed to load GLTF file."),new Fe("EmptyMesh",Pe({}));const n=jy(e).meshes;if(n.length===0)return console.warn("No meshes found in the GLTF file."),new Fe("EmptyMesh",Pe({}));const i=n[0],o=i.name||"UnnamedMesh",a=Pe({}),c=new Fe(o,a);for(const u of i.primitives){if(u.mode!==void 0&&u.mode!==4){console.warn(`Skipping non-triangle primitive (mode: ${u.mode})`);continue}const l=u.attributes,f=l.POSITION?.value,h=l.NORMAL?.value,m=l.TEXCOORD_0?.value;if(!f){console.warn("Primitive has no POSITION attribute, skipping.");continue}const d=f.length/3,p=c.getNumVertices();for(let B=0;B<d;++B){const y=T(f[B*3],f[B*3+1],f[B*3+2]),M=h?T(h[B*3],h[B*3+1],h[B*3+2]):T(0,0,1),A=m?$(m[B*2],m[B*2+1]):$(0,0);c.addVertex({pos:y,normal:M,uv:A})}const g=u.indices?.value;if(g)for(let B=0;B<g.length;B+=3)c.addTriangle([p+g[B],p+g[B+1],p+g[B+2]]);else for(let B=0;B<d;B+=3)c.addTriangle([p+B,p+B+1,p+B+2])}return c}catch(e){return console.error("Error loading mesh:",e),new Fe("EmptyMesh",Pe({}))}}class Fe{triangles;vertices;indices;Material;name;transform;BVH;WorldMatrix;inverseWorldMatrix;constructor(e,r){this.name=e,this.Material=r,this.triangles=[],this.indices=[],this.vertices=[],this.BVH=new tm,this.transform={translation:se(),rotation:ln(),scale:T(1,1,1)},this.WorldMatrix=vr(),this.inverseWorldMatrix=vr()}TransformMesh(e){this.transform=e,this.computeMatrices()}RotateMesh(e){dd(this.transform.rotation,this.transform.rotation,e),this.computeMatrices()}computeMatrices(){this.WorldMatrix=vr(),od(this.WorldMatrix,this.transform.rotation,this.transform.translation,this.transform.scale),this.inverseWorldMatrix=vr(),id(this.inverseWorldMatrix,this.WorldMatrix)}GetWorldMatrix(){return this.WorldMatrix}GetInverseWorldMatrix(){return this.inverseWorldMatrix}GetFlatWorldMatrix(){return new Float32Array(this.WorldMatrix)}GetFlatNormalMatrix(){const e=or();sa(e,this.WorldMatrix);const r=new Float32Array(12);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[4]=e[3],r[5]=e[4],r[6]=e[5],r[8]=e[6],r[9]=e[7],r[10]=e[8],r}GetFlatInverseWorldMatrix(){return new Float32Array(this.inverseWorldMatrix)}GetTransform(){return this.transform}GetMaterial(){return this.Material}GetFlattenedMaterial(){return so(this.Material)}addVertex(e){return this.vertices.push(e),this.vertices.length-1}addTriangle(e){if(e.length!==3)return;const r={vA:this.vertices[e[0]],vB:this.vertices[e[1]],vC:this.vertices[e[2]]};this.triangles.push(r),this.indices.push(...e)}getVertexData(){const e=Array(this.vertices.length*3),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n){const s=this.vertices[n].pos;r.set(s,n*3)}return r}getTransformedVertexData(){const e=new Float32Array(this.vertices.length*3),r=se();for(let n=0;n<this.vertices.length;++n)aa(r,this.vertices[n].pos,this.WorldMatrix),e.set(r,n*3);return e}getNormalData(){const e=Array(this.vertices.length*3),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n)r.set(this.vertices[n].normal,n*3);return r}getTransformedNormalData(){const e=new Float32Array(this.vertices.length*3),r=or();sa(r,this.WorldMatrix);const n=se();for(let s=0;s<this.vertices.length;++s)cn(n,this.vertices[s].normal,r),ys(n,n),e.set(n,s*3);return e}getUVData(){const e=Array(this.vertices.length*2),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n)r.set(this.vertices[n].uv,n*2);return r}getIndexData16(){return new Uint16Array(this.indices)}getIndexData32(){return new Uint32Array(this.indices)}getNumVertices(){return this.vertices.length}getNumTriangles(){return this.triangles.length}getTriangles(){return this.triangles}ComputeBVH(){this.BVH.buildBVH(this)}GetBVHGeometry(e=1/0){return this.BVH.generateWireframeGeometry(e)}getFlattenedBVHData(e=0){return this.BVH.getFlattenedBVHData(e)}intersectMeshWithRay(e,r){const n=se();aa(n,e.origin,this.GetInverseWorldMatrix());const s=se(),i=or();sd(i,this.GetInverseWorldMatrix()),cn(s,e.direction,i);const o={origin:n,direction:s,invDir:T(1/s[0],1/s[1],1/s[2])};return this.BVH.traverse(o,r)}getReorderedIndexData32(){return this.BVH.getReorderedIndices(this.indices)}}function gu(){const e=new Float32Array(8);let r=0;const n=i=>{e[r++]=i.x,e[r++]=i.y};n({x:-.5,y:-.5}),n({x:.5,y:-.5}),n({x:-.5,y:.5}),n({x:.5,y:.5});const s=new Uint16Array([0,1,2,2,1,3]);return{vertexData:e,indexData:s,numVertices:s.length}}function Vy({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:s=Math.PI*2}={}){const i=(e+1)*2,o=new Float32Array(i*3),a=new Uint8Array(o.buffer);let c=0,u=8;const l=p=>{o[c++]=p.x,o[c++]=p.y,c+=1,a[u++]=(p.r??0)*255,a[u++]=(p.g??0)*255,a[u++]=(p.b??0)*255,u+=9},f=[1,1,1],h=[.1,.1,.1];for(let p=0;p<=e;p++){const g=n+(p+0)*(s-n)/e,B=Math.cos(g),y=Math.sin(g);l({x:B*t,y:y*t,r:h[0],g:h[1],b:h[2]}),l({x:B*r,y:y*r,r:f[0],g:f[1],b:f[2]})}const m=new Uint16Array(e*6);let d=0;for(let p=0;p<e;++p){const g=p*2;m[d++]=g,m[d++]=g+1,m[d++]=g+2,m[d++]=g+2,m[d++]=g+1,m[d++]=g+3}return{vertexData:o,indexData:m,numVertices:m.length}}function ky({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:s=Math.PI*2}={}){const i=(e+1)*2,o=new Float32Array(i*2);let a=0;const c=f=>{o[a++]=f.x,o[a++]=f.y};for(let f=0;f<=e;f++){const h=n+(f+0)*(s-n)/e,m=Math.cos(h),d=Math.sin(h);c({x:m*t,y:d*t}),c({x:m*r,y:d*r})}const u=new Uint16Array(e*6);let l=0;for(let f=0;f<e;++f){const h=f*2;u[l++]=h,u[l++]=h+1,u[l++]=h+2,u[l++]=h+2,u[l++]=h+1,u[l++]=h+3}return{vertexData:o,indexData:u,numVertices:u.length}}function zy({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:s=Math.PI*2}={}){const i=e*3*2,o=new Float32Array(i*2);let a=0;const c=(u,l)=>{o[a++]=u,o[a++]=l};for(let u=0;u<e;u++){const l=n+(u+0)*(s-n)/e,f=n+(u+1)*(s-n)/e,h=Math.cos(l),m=Math.sin(l),d=Math.cos(f),p=Math.sin(f);c(h*t,m*t),c(d*t,p*t),c(h*r,m*r),c(h*r,m*r),c(d*t,p*t),c(d*r,p*r)}return o}function Jy(){const t=[.73,.73,.73],e=[.65,.05,.05],r=[.12,.45,.15],n=[1,1,1],s=[],i=[],o=[],a=[],c=[],u=[];let l=0;function f(y,M,A,C,S=0){return s.push(y[0],y[1],y[2]),i.push(M[0],M[1],M[2]),o.push(A[0],A[1],A[2]),c.push(C[0],C[1]),a.push(S),l++}function h(y,M,A,C,S,x=!1,P=0){let O=io(y,M,A);x&&(O=T(-O[0],-O[1],-O[2]));const _=f(y,[O[0],O[1],O[2]],S,[0,0],P),V=f(M,[O[0],O[1],O[2]],S,[1,0],P),H=f(A,[O[0],O[1],O[2]],S,[1,1],P),L=f(C,[O[0],O[1],O[2]],S,[0,1],P);u.push(_,V,H),u.push(_,H,L)}function m(y,M,A,C=[0,0,0],S=0){const x=M[0]/2,P=M[1]/2,O=M[2]/2;let _=[y[0]-x,y[1]-P,y[2]-O],V=[y[0]+x,y[1]-P,y[2]-O],H=[y[0]+x,y[1]+P,y[2]-O],L=[y[0]-x,y[1]+P,y[2]-O],I=[y[0]-x,y[1]-P,y[2]+O],w=[y[0]+x,y[1]-P,y[2]+O],K=[y[0]+x,y[1]+P,y[2]+O],z=[y[0]-x,y[1]+P,y[2]+O];const N=new Float32Array(9),re=Math.cos(C[0]),le=Math.sin(C[0]),ee=Math.cos(C[1]),te=Math.sin(C[1]),be=Math.cos(C[2]),Se=Math.sin(C[2]);N[0]=ee*be,N[1]=-ee*Se,N[2]=te,N[3]=le*te*be+re*Se,N[4]=-le*te*Se+re*be,N[5]=-le*ee,N[6]=-re*te*be+le*Se,N[7]=re*te*Se+le*be,N[8]=re*ee;const Ae=xe=>{const Me=xe[0]-y[0],ye=xe[1]-y[1],Ke=xe[2]-y[2];return[N[0]*Me+N[1]*ye+N[2]*Ke+y[0],N[3]*Me+N[4]*ye+N[5]*Ke+y[1],N[6]*Me+N[7]*ye+N[8]*Ke+y[2]]};_=Ae(_),V=Ae(V),H=Ae(H),L=Ae(L),I=Ae(I),w=Ae(w),K=Ae(K),z=Ae(z),h(I,w,K,z,A,!1,S),h(V,_,L,H,A,!1,S),h(_,I,z,L,A,!1,S),h(w,V,H,K,A,!1,S),h(L,z,K,H,A,!1,S),h(_,V,w,I,A,!1,S)}h([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],t,!1,.98),h([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],t,!1,.98);const p=548.8-1;h([343,p,227],[343,p,332],[213,p,332],[213,p,227],n),h([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],t),h([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],r),h([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],e);let g=l;m([278,224.4,279.5],[120,120,120],t,[4,Math.PI/9,7],1);let B=l-g;return{vertexData:new Float32Array(s),indexData:new Uint16Array(u),numVertices:u.length,normalData:new Float32Array(i),colorData:new Float32Array(o),reflectanceData:new Float32Array(a),uvData:new Float32Array(c),additionalInfo:{cubeVertexStart:g,cubeVertexCount:B,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(s.slice(g*3,(g+B)*3)),cubeNormalsInfo:new Float32Array(i.slice(g*3,(g+B)*3))}}}function di(t,e){let r=4;const n=new Float32Array(r*3),s=new Float32Array(r*3),i=new Float32Array(r*3),o=new Float32Array(r*2),a=new Uint16Array([0,1,2,0,2,3]),c=t.translation,u=t.scale[0]/2,l=t.scale[1]/2,f=t.rotation,h=[T(-u,-l,0),T(u,-l,0),T(u,l,0),T(-u,l,0)],m=pl(f[0],f[1],f[2]);for(let B=0;B<h.length;++B)cn(h[B],h[B],m),yr(h[B],h[B],c);let d=0;const p=(B,y)=>{n[d]=B[0],n[d+1]=B[1],n[d+2]=B[2],s[d]=y[0],s[d+1]=y[1],s[d+2]=y[2],d+=3};p(h[0],e),p(h[1],e),p(h[2],e),p(h[3],e);const g=T(0,0,1);cn(g,g,m);for(let B=0;B<r;++B)i[B*3+0]=g[0],i[B*3+1]=g[1],i[B*3+2]=g[2];return o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=1,o[5]=1,o[6]=0,o[7]=1,{vertexData:n,indexData:a,colorData:s,normalData:i,uvData:o,numVertices:a.length,transform:t}}function mi(t,e,r,n=12,s=12){const i=[],o=[],a=[],c=[],u=[],l=(f,h,m,d)=>{i.push(f[0],f[1],f[2]),o.push(h[0],h[1],h[2]),a.push(m[0],m[1],m[2]),c.push(d[0],d[1])};for(let f=0;f<=n;f++){const h=f*Math.PI/n,m=Math.sin(h),d=Math.cos(h);for(let p=0;p<=s;p++){const g=p*2*Math.PI/s,B=Math.sin(g),M=Math.cos(g)*m,A=d,C=B*m,S=1-p/s,x=1-f/n,P=[t[0]+e*M,t[1]+e*A,t[2]+e*C];l(P,[M,A,C],r,[S,x])}}for(let f=0;f<n;f++)for(let h=0;h<s;h++){const m=f*(s+1)+h,d=m+s+1;u.push(m,m+1,d),u.push(d,m+1,d+1)}return{vertexData:new Float32Array(i),indexData:new Uint16Array(u),numVertices:u.length,normalData:new Float32Array(o),colorData:new Float32Array(a),uvData:new Float32Array(c),transform:{translation:T(t[0],t[1],t[2]),rotation:T(0,0,0),scale:T(e,e,e)}}}function Ky(t,e=8){const r=[];r.push(new Fe("white wall",Pe({albedo:[.73,.73,.73],name:"whiteWall"}))),r.push(new Fe("red wall",Pe({albedo:[.65,.05,.05],name:"redWall"}))),r.push(new Fe("green wall",Pe({albedo:[.12,.45,.15],name:"greenWall"}))),r.push(new Fe("light",Pe({albedo:[1,1,1],roughness:0,name:"light"}))),r.push(new Fe("sphereOne",t.find(h=>h.name==="sphereOne")||Pe({albedo:[.12,.45,.15],name:"sphereOne",textureIndex:0}))),r.push(new Fe("sphereTwo",t.find(h=>h.name==="sphereTwo")||Pe({albedo:[.05,.05,.65],roughness:.5,metalness:.5,name:"sphereTwo",textureIndex:1}))),r.push(new Fe("sphereThree",t.find(h=>h.name==="sphereThree")||Pe({albedo:[.65,.05,.05],roughness:.01,metalness:.98,name:"sphereThree",textureIndex:2})));function n(h,m,d,p){const g={pos:m,normal:d,uv:p};h.addVertex(g)}function s(h,m,d,p,g,B=!1){let y=io(m,d,p);B&&(y=T(-y[0],-y[1],-y[2]));const M=h.addVertex({pos:m,normal:y,uv:$(0,0)}),A=h.addVertex({pos:d,normal:y,uv:$(1,0)}),C=h.addVertex({pos:p,normal:y,uv:$(1,1)}),S=h.addVertex({pos:g,normal:y,uv:$(0,1)});h.addTriangle([M,A,C]),h.addTriangle([M,C,S])}function i(h,m,d,p=12,g=12){const B=h.getNumVertices();for(let y=0;y<=p;y++){const M=y*Math.PI/p,A=Math.sin(M),C=Math.cos(M);for(let S=0;S<=g;S++){const x=S*2*Math.PI/g,P=Math.sin(x),_=Math.cos(x)*A,V=C,H=P*A,L=1-S/g,I=1-y/p,w=T(m[0]+d*_,m[1]+d*V,m[2]+d*H);n(h,w,T(_,V,H),$(L,I))}}for(let y=0;y<p;y++)for(let M=0;M<g;M++){const A=B+y*(g+1)+M,C=A+g+1;h.addTriangle([A,A+1,C]),h.addTriangle([C,A+1,C+1])}}s(r[0],T(552.8,0,0),T(0,0,0),T(0,0,559.2),T(549.6,0,559.2),!1),s(r[0],T(556,548.8,0),T(556,548.8,559.2),T(0,548.8,559.2),T(0,548.8,0),!1);const a=548.8-1;s(r[3],T(343,a,227),T(343,a,332),T(213,a,332),T(213,a,227),!1),s(r[0],T(549.6,0,559.2),T(0,0,559.2),T(0,548.8,559.2),T(556,548.8,559.2),!1),s(r[2],T(0,0,559.2),T(0,0,0),T(0,548.8,0),T(0,548.8,559.2),!1),s(r[1],T(552.8,0,0),T(549.6,0,559.2),T(556,548.8,559.2),T(556,548.8,0),!1);let c=[278,224.4,279.5],u=90,l=120,f=[T(0,1,0),T(Math.sqrt(3)/2,-.5,0),T(-Math.sqrt(3)/2,-.5,0)];for(let h=0;h<3;++h)i(r[h+4],[0,0,0],1,e,e);return r[4].TransformMesh({translation:T(c[0]+f[0][0]*l,c[1]+f[0][1]*l,c[2]+f[0][2]*l),rotation:Ws(0,0,0,1),scale:T(u,u,u)}),r[5].TransformMesh({translation:T(c[0]+f[1][0]*l,c[1]+f[1][1]*l,c[2]+f[1][2]*l),rotation:Ws(0,0,0,1),scale:T(u,u,u)}),r[6].TransformMesh({translation:T(c[0]+f[2][0]*l,c[1]+f[2][1]*l,c[2]+f[2][2]*l),rotation:Ws(0,0,0,1),scale:T(u,u,u)}),{meshes:r,additionalInfo:{sphereMaterialIndices:[4,5,6],sphereTransforms:[r[4].GetTransform(),r[5].GetTransform(),r[6].GetTransform()],sphereMaterials:[r[4].GetMaterial(),r[5].GetMaterial(),r[6].GetMaterial()]}}}async function Wy(t){const e=[];e.push(new Fe("white wall",Pe({albedo:[.73,.73,.73],name:"whiteWall"}))),e.push(new Fe("red wall",Pe({albedo:[.65,.05,.05],name:"redWall"}))),e.push(new Fe("green wall",Pe({albedo:[.12,.45,.15],name:"greenWall"}))),e.push(new Fe("light",Pe({albedo:[1,1,1],roughness:0,name:"light"})));const r=t.find(c=>c.name==="dragon")||Pe({albedo:[.12,.45,.15],name:"dragon",textureIndex:0});function n(c,u,l,f,h,m=!1){let d=io(u,l,f);m&&(d=T(-d[0],-d[1],-d[2]));const p=c.addVertex({pos:u,normal:d,uv:$(0,0)}),g=c.addVertex({pos:l,normal:d,uv:$(1,0)}),B=c.addVertex({pos:f,normal:d,uv:$(1,1)}),y=c.addVertex({pos:h,normal:d,uv:$(0,1)});c.addTriangle([p,g,B]),c.addTriangle([p,B,y])}n(e[0],T(552.8,0,0),T(0,0,0),T(0,0,559.2),T(549.6,0,559.2),!1),n(e[0],T(556,548.8,0),T(556,548.8,559.2),T(0,548.8,559.2),T(0,548.8,0),!1);const i=548.8-1;n(e[3],T(343,i,227),T(343,i,332),T(213,i,332),T(213,i,227),!1),n(e[0],T(549.6,0,559.2),T(0,0,559.2),T(0,548.8,559.2),T(556,548.8,559.2),!1),n(e[2],T(0,0,559.2),T(0,0,0),T(0,548.8,0),T(0,548.8,559.2),!1),n(e[1],T(552.8,0,0),T(549.6,0,559.2),T(556,548.8,559.2),T(556,548.8,0),!1);let o=[278,224.4,279.5];const a=await Hy("/meshes/dragon/scene.gltf");a.Material=r,a.TransformMesh({translation:T(o[0],o[1],o[2]),rotation:dl(ln(),0,0,0),scale:T(2,2,2)}),e.push(a);for(const c of e)c.ComputeBVH();return{meshes:e,additionalInfo:{meshIndices:[4],meshTransforms:[e[4].GetTransform()],meshMaterials:[e[4].GetMaterial()]}}}const qy=0,Qy=4,jn=50;async function Xy(t){const e=await Lt();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const s=Wa(e,"hardcoded triangle",qd),i=Wa(e,"hardcoded triangle",Qd),o=Yy(e,s,i,n),a=32,c=8,u=a*jn,l=c*jn,f=zy({radius:1,innerRadius:.5}),h=f.byteLength,m=f.length/2,d=pi(e,u),p=pi(e,l),g=pi(e,h);e.queue.writeBuffer(g,0,f);const B=[];{const S=new Float32Array(u/4);for(let x=0;x<jn;x++){const P=x*(a/4);S.set([ce(.1),ce(.1),ce(.1),1],P+qy),S.set([ce(-.9,.9),ce(-.9,.9)],P+Qy);const O={scale:ce(.1,.4)};B.push(O)}e.queue.writeBuffer(d,0,S)}const y=new Float32Array(l/4),M=Zy(e,o.getBindGroupLayout(0),d,p,g),A={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(S=>{for(const x of S){const P=x.target,O=x.contentBoxSize[0].inlineSize,_=x.contentBoxSize[0].blockSize;P.width=Math.max(1,Math.min(O,e.limits.maxTextureDimension2D)),P.height=Math.max(1,Math.min(_,e.limits.maxTextureDimension2D))}$y(e,t,r,o,A,B,M,y,p,m)}).observe(t),null}function Wa(t,e,r){return t.createShaderModule({label:e,code:r})}function Yy(t,e,r,n){return t.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function $y(t,e,r,n,s,i,o,a,c,u){s.colorAttachments[0].view=r.getCurrentTexture().createView();const l=t.createCommandEncoder({label:"pass encoder"}),f=l.beginRenderPass(s);f.setPipeline(n);const h=e.width/e.height;i.forEach((d,p)=>{const g=2*p;a.set([d.scale/h,d.scale],g)}),t.queue.writeBuffer(c,0,a),f.setBindGroup(0,o),f.draw(u,jn),f.end();const m=l.finish();t.queue.submit([m])}function pi(t,e){return t.createBuffer({label:"storage buffer",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function Zy(t,e,r,n,s){return t.createBindGroup({label:"storage bind group",layout:e,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}},{binding:2,resource:{buffer:s}}]})}const eB=`// ============================== //\r
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
}`,tB=`// ============================== //\r
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
}`,rB=0,nB=1,Hn=50;async function sB(t){const e=await Lt();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const s=qa(e,"hardcoded triangle",eB),i=qa(e,"hardcoded triangle",tB),o=iB(e,s,i,n),a=12,c=8,u=a*Hn,l=c*Hn,f=Vy({radius:1,innerRadius:.5}),h=f.vertexData.byteLength,m=f.numVertices,d=gi(e,u),p=gi(e,l),g=gi(e,h),B=aB(e,f.indexData.byteLength);e.queue.writeBuffer(g,0,f.vertexData),e.queue.writeBuffer(B,0,f.indexData);const y=[];{const S=new Uint8Array(u),x=new Float32Array(S.buffer);for(let P=0;P<Hn;P++){const O=P*a,_=P*(a/4);S.set([Math.round(ce(.1)*255),Math.round(ce(.1)*255),Math.round(ce(.1)*255),255],O+rB),x.set([ce(-.9,.9),ce(-.9,.9)],_+nB);const V={scale:ce(.1,.4)};y.push(V)}e.queue.writeBuffer(d,0,x)}const M=new Float32Array(l/4),A={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(S=>{for(const x of S){const P=x.target,O=x.contentBoxSize[0].inlineSize,_=x.contentBoxSize[0].blockSize;P.width=Math.max(1,Math.min(O,e.limits.maxTextureDimension2D)),P.height=Math.max(1,Math.min(_,e.limits.maxTextureDimension2D))}oB(e,t,r,o,A,y,d,M,p,m,g,B)}).observe(t),null}function qa(t,e,r){return t.createShaderModule({label:e,code:r})}function iB(t,e,r,n){return t.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function oB(t,e,r,n,s,i,o,a,c,u,l,f){s.colorAttachments[0].view=r.getCurrentTexture().createView();const h=t.createCommandEncoder({label:"pass encoder"}),m=h.beginRenderPass(s);m.setPipeline(n),m.setVertexBuffer(0,l),m.setVertexBuffer(1,o),m.setVertexBuffer(2,c),m.setIndexBuffer(f,"uint16");const d=e.width/e.height;i.forEach((g,B)=>{const y=2*B;a.set([g.scale/d,g.scale],y)}),t.queue.writeBuffer(c,0,a),m.drawIndexed(u,Hn),m.end();const p=h.finish();t.queue.submit([p])}function gi(t,e){return t.createBuffer({label:"vertex buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function aB(t,e){return t.createBuffer({label:"index buffer",size:e,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const cB=`// ============================== //\r
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
}`,lB=`// ============================== //\r
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
}`;let Re=1e-6;const uB=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);uB.get(Float32Array);let Os=Float32Array;function ct(t,e,r){const n=new Os(3);return t!==void 0&&(n[0]=t,e!==void 0&&(n[1]=e,r!==void 0&&(n[2]=r))),n}function Mo(t,e,r){return r=r||new Os(3),r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function Rr(t,e,r){r=r||new Os(3);const n=t[2]*e[0]-t[0]*e[2],s=t[0]*e[1]-t[1]*e[0];return r[0]=t[1]*e[2]-t[2]*e[1],r[1]=n,r[2]=s,r}function Rt(t,e){e=e||new Os(3);const r=t[0],n=t[1],s=t[2],i=Math.sqrt(r*r+n*n+s*s);return i>1e-5?(e[0]=r/i,e[1]=n/i,e[2]=s/i):(e[0]=0,e[1]=0,e[2]=0),e}let fe=Float32Array;function fB(t){const e=fe;return fe=t,e}function hB(t,e,r,n,s,i,o,a,c,u,l,f,h,m,d,p){const g=new fe(16);return t!==void 0&&(g[0]=t,e!==void 0&&(g[1]=e,r!==void 0&&(g[2]=r,n!==void 0&&(g[3]=n,s!==void 0&&(g[4]=s,i!==void 0&&(g[5]=i,o!==void 0&&(g[6]=o,a!==void 0&&(g[7]=a,c!==void 0&&(g[8]=c,u!==void 0&&(g[9]=u,l!==void 0&&(g[10]=l,f!==void 0&&(g[11]=f,h!==void 0&&(g[12]=h,m!==void 0&&(g[13]=m,d!==void 0&&(g[14]=d,p!==void 0&&(g[15]=p)))))))))))))))),g}function dB(t,e){return e=e||new fe(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=0,e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=0,e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function mB(t,e){e=e||new fe(16);const r=t[0],n=t[1],s=t[2],i=t[3],o=r+r,a=n+n,c=s+s,u=r*o,l=n*o,f=n*a,h=s*o,m=s*a,d=s*c,p=i*o,g=i*a,B=i*c;return e[0]=1-f-d,e[1]=l+B,e[2]=h-g,e[3]=0,e[4]=l-B,e[5]=1-u-d,e[6]=m+p,e[7]=0,e[8]=h+g,e[9]=m-p,e[10]=1-u-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function pB(t,e){return e=e||new fe(16),e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=-t[7],e[8]=-t[8],e[9]=-t[9],e[10]=-t[10],e[11]=-t[11],e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=-t[15],e}function To(t,e){return e=e||new fe(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}const gB=To;function bB(t,e){return Math.abs(t[0]-e[0])<Re&&Math.abs(t[1]-e[1])<Re&&Math.abs(t[2]-e[2])<Re&&Math.abs(t[3]-e[3])<Re&&Math.abs(t[4]-e[4])<Re&&Math.abs(t[5]-e[5])<Re&&Math.abs(t[6]-e[6])<Re&&Math.abs(t[7]-e[7])<Re&&Math.abs(t[8]-e[8])<Re&&Math.abs(t[9]-e[9])<Re&&Math.abs(t[10]-e[10])<Re&&Math.abs(t[11]-e[11])<Re&&Math.abs(t[12]-e[12])<Re&&Math.abs(t[13]-e[13])<Re&&Math.abs(t[14]-e[14])<Re&&Math.abs(t[15]-e[15])<Re}function yB(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function bu(t){return t=t||new fe(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function BB(t,e){if(e=e||new fe(16),e===t){let y;return y=t[1],t[1]=t[4],t[4]=y,y=t[2],t[2]=t[8],t[8]=y,y=t[3],t[3]=t[12],t[12]=y,y=t[6],t[6]=t[9],t[9]=y,y=t[7],t[7]=t[13],t[13]=y,y=t[11],t[11]=t[14],t[14]=y,e}const r=t[0],n=t[1],s=t[2],i=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],f=t[9],h=t[10],m=t[11],d=t[12],p=t[13],g=t[14],B=t[15];return e[0]=r,e[1]=o,e[2]=l,e[3]=d,e[4]=n,e[5]=a,e[6]=f,e[7]=p,e[8]=s,e[9]=c,e[10]=h,e[11]=g,e[12]=i,e[13]=u,e[14]=m,e[15]=B,e}function yu(t,e){e=e||new fe(16);const r=t[0],n=t[1],s=t[2],i=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],f=t[9],h=t[10],m=t[11],d=t[12],p=t[13],g=t[14],B=t[15],y=h*B,M=g*m,A=c*B,C=g*u,S=c*m,x=h*u,P=s*B,O=g*i,_=s*m,V=h*i,H=s*u,L=c*i,I=l*p,w=d*f,K=o*p,z=d*a,N=o*f,re=l*a,le=r*p,ee=d*n,te=r*f,be=l*n,Se=r*a,Ae=o*n,xe=y*a+C*f+S*p-(M*a+A*f+x*p),Me=M*n+P*f+V*p-(y*n+O*f+_*p),ye=A*n+O*a+H*p-(C*n+P*a+L*p),Ke=x*n+_*a+L*f-(S*n+V*a+H*f),he=1/(r*xe+o*Me+l*ye+d*Ke);return e[0]=he*xe,e[1]=he*Me,e[2]=he*ye,e[3]=he*Ke,e[4]=he*(M*o+A*l+x*d-(y*o+C*l+S*d)),e[5]=he*(y*r+O*l+_*d-(M*r+P*l+V*d)),e[6]=he*(C*r+P*o+L*d-(A*r+O*o+H*d)),e[7]=he*(S*r+V*o+H*l-(x*r+_*o+L*l)),e[8]=he*(I*u+z*m+N*B-(w*u+K*m+re*B)),e[9]=he*(w*i+le*m+be*B-(I*i+ee*m+te*B)),e[10]=he*(K*i+ee*u+Se*B-(z*i+le*u+Ae*B)),e[11]=he*(re*i+te*u+Ae*m-(N*i+be*u+Se*m)),e[12]=he*(K*h+re*g+w*c-(N*g+I*c+z*h)),e[13]=he*(te*g+I*s+ee*h-(le*h+be*g+w*s)),e[14]=he*(le*c+Ae*g+z*s-(Se*g+K*s+ee*c)),e[15]=he*(Se*h+N*s+be*c-(te*c+Ae*h+re*s)),e}function vB(t){const e=t[0],r=t[1],n=t[2],s=t[3],i=t[4],o=t[5],a=t[6],c=t[7],u=t[8],l=t[9],f=t[10],h=t[11],m=t[12],d=t[13],p=t[14],g=t[15],B=f*g,y=p*h,M=a*g,A=p*c,C=a*h,S=f*c,x=n*g,P=p*s,O=n*h,_=f*s,V=n*c,H=a*s,L=B*o+A*l+C*d-(y*o+M*l+S*d),I=y*r+x*l+_*d-(B*r+P*l+O*d),w=M*r+P*o+V*d-(A*r+x*o+H*d),K=S*r+O*o+H*l-(C*r+_*o+V*l);return e*L+i*I+u*w+m*K}const AB=yu;function Bu(t,e,r){r=r||new fe(16);const n=t[0],s=t[1],i=t[2],o=t[3],a=t[4],c=t[5],u=t[6],l=t[7],f=t[8],h=t[9],m=t[10],d=t[11],p=t[12],g=t[13],B=t[14],y=t[15],M=e[0],A=e[1],C=e[2],S=e[3],x=e[4],P=e[5],O=e[6],_=e[7],V=e[8],H=e[9],L=e[10],I=e[11],w=e[12],K=e[13],z=e[14],N=e[15];return r[0]=n*M+a*A+f*C+p*S,r[1]=s*M+c*A+h*C+g*S,r[2]=i*M+u*A+m*C+B*S,r[3]=o*M+l*A+d*C+y*S,r[4]=n*x+a*P+f*O+p*_,r[5]=s*x+c*P+h*O+g*_,r[6]=i*x+u*P+m*O+B*_,r[7]=o*x+l*P+d*O+y*_,r[8]=n*V+a*H+f*L+p*I,r[9]=s*V+c*H+h*L+g*I,r[10]=i*V+u*H+m*L+B*I,r[11]=o*V+l*H+d*L+y*I,r[12]=n*w+a*K+f*z+p*N,r[13]=s*w+c*K+h*z+g*N,r[14]=i*w+u*K+m*z+B*N,r[15]=o*w+l*K+d*z+y*N,r}const xB=Bu;function CB(t,e,r){return r=r||bu(),t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11]),r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function MB(t,e){return e=e||ct(),e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function TB(t,e,r){r=r||ct();const n=e*4;return r[0]=t[n+0],r[1]=t[n+1],r[2]=t[n+2],r}function EB(t,e,r,n){n!==t&&(n=To(t,n));const s=r*4;return n[s+0]=e[0],n[s+1]=e[1],n[s+2]=e[2],n}function wB(t,e){e=e||ct();const r=t[0],n=t[1],s=t[2],i=t[4],o=t[5],a=t[6],c=t[8],u=t[9],l=t[10];return e[0]=Math.sqrt(r*r+n*n+s*s),e[1]=Math.sqrt(i*i+o*o+a*a),e[2]=Math.sqrt(c*c+u*u+l*l),e}function SB(t,e,r,n,s){s=s||new fe(16);const i=Math.tan(Math.PI*.5-.5*t);if(s[0]=i/e,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=i,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[11]=-1,s[12]=0,s[13]=0,s[15]=0,n===1/0)s[10]=-1,s[14]=-r;else{const o=1/(r-n);s[10]=n*o,s[14]=n*r*o}return s}function IB(t,e,r,n,s,i,o){return o=o||new fe(16),o[0]=2/(e-t),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(n-r),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(s-i),o[11]=0,o[12]=(e+t)/(t-e),o[13]=(n+r)/(r-n),o[14]=s/(s-i),o[15]=1,o}function PB(t,e,r,n,s,i,o){o=o||new fe(16);const a=e-t,c=n-r,u=s-i;return o[0]=2*s/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*s/c,o[6]=0,o[7]=0,o[8]=(t+e)/a,o[9]=(n+r)/c,o[10]=i/u,o[11]=-1,o[12]=0,o[13]=0,o[14]=s*i/u,o[15]=0,o}let de,ve,ae;function OB(t,e,r,n){return n=n||new fe(16),de=de||ct(),ve=ve||ct(),ae=ae||ct(),Rt(Mo(e,t,ae),ae),Rt(Rr(r,ae,de),de),Rt(Rr(ae,de,ve),ve),n[0]=de[0],n[1]=de[1],n[2]=de[2],n[3]=0,n[4]=ve[0],n[5]=ve[1],n[6]=ve[2],n[7]=0,n[8]=ae[0],n[9]=ae[1],n[10]=ae[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function RB(t,e,r,n){return n=n||new fe(16),de=de||ct(),ve=ve||ct(),ae=ae||ct(),Rt(Mo(t,e,ae),ae),Rt(Rr(r,ae,de),de),Rt(Rr(ae,de,ve),ve),n[0]=de[0],n[1]=de[1],n[2]=de[2],n[3]=0,n[4]=ve[0],n[5]=ve[1],n[6]=ve[2],n[7]=0,n[8]=ae[0],n[9]=ae[1],n[10]=ae[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function DB(t,e,r,n){return n=n||new fe(16),de=de||ct(),ve=ve||ct(),ae=ae||ct(),Rt(Mo(t,e,ae),ae),Rt(Rr(r,ae,de),de),Rt(Rr(ae,de,ve),ve),n[0]=de[0],n[1]=ve[0],n[2]=ae[0],n[3]=0,n[4]=de[1],n[5]=ve[1],n[6]=ae[1],n[7]=0,n[8]=de[2],n[9]=ve[2],n[10]=ae[2],n[11]=0,n[12]=-(de[0]*t[0]+de[1]*t[1]+de[2]*t[2]),n[13]=-(ve[0]*t[0]+ve[1]*t[1]+ve[2]*t[2]),n[14]=-(ae[0]*t[0]+ae[1]*t[1]+ae[2]*t[2]),n[15]=1,n}function FB(t,e){return e=e||new fe(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function GB(t,e,r){r=r||new fe(16);const n=e[0],s=e[1],i=e[2],o=t[0],a=t[1],c=t[2],u=t[3],l=t[4],f=t[5],h=t[6],m=t[7],d=t[8],p=t[9],g=t[10],B=t[11],y=t[12],M=t[13],A=t[14],C=t[15];return t!==r&&(r[0]=o,r[1]=a,r[2]=c,r[3]=u,r[4]=l,r[5]=f,r[6]=h,r[7]=m,r[8]=d,r[9]=p,r[10]=g,r[11]=B),r[12]=o*n+l*s+d*i+y,r[13]=a*n+f*s+p*i+M,r[14]=c*n+h*s+g*i+A,r[15]=u*n+m*s+B*i+C,r}function _B(t,e){e=e||new fe(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function UB(t,e,r){r=r||new fe(16);const n=t[4],s=t[5],i=t[6],o=t[7],a=t[8],c=t[9],u=t[10],l=t[11],f=Math.cos(e),h=Math.sin(e);return r[4]=f*n+h*a,r[5]=f*s+h*c,r[6]=f*i+h*u,r[7]=f*o+h*l,r[8]=f*a-h*n,r[9]=f*c-h*s,r[10]=f*u-h*i,r[11]=f*l-h*o,t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function LB(t,e){e=e||new fe(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function NB(t,e,r){r=r||new fe(16);const n=t[0],s=t[1],i=t[2],o=t[3],a=t[8],c=t[9],u=t[10],l=t[11],f=Math.cos(e),h=Math.sin(e);return r[0]=f*n-h*a,r[1]=f*s-h*c,r[2]=f*i-h*u,r[3]=f*o-h*l,r[8]=f*a+h*n,r[9]=f*c+h*s,r[10]=f*u+h*i,r[11]=f*l+h*o,t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function jB(t,e){e=e||new fe(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function HB(t,e,r){r=r||new fe(16);const n=t[0],s=t[1],i=t[2],o=t[3],a=t[4],c=t[5],u=t[6],l=t[7],f=Math.cos(e),h=Math.sin(e);return r[0]=f*n+h*a,r[1]=f*s+h*c,r[2]=f*i+h*u,r[3]=f*o+h*l,r[4]=f*a-h*n,r[5]=f*c-h*s,r[6]=f*u-h*i,r[7]=f*l-h*o,t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function vu(t,e,r){r=r||new fe(16);let n=t[0],s=t[1],i=t[2];const o=Math.sqrt(n*n+s*s+i*i);n/=o,s/=o,i/=o;const a=n*n,c=s*s,u=i*i,l=Math.cos(e),f=Math.sin(e),h=1-l;return r[0]=a+(1-a)*l,r[1]=n*s*h+i*f,r[2]=n*i*h-s*f,r[3]=0,r[4]=n*s*h-i*f,r[5]=c+(1-c)*l,r[6]=s*i*h+n*f,r[7]=0,r[8]=n*i*h+s*f,r[9]=s*i*h-n*f,r[10]=u+(1-u)*l,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const VB=vu;function Au(t,e,r,n){n=n||new fe(16);let s=e[0],i=e[1],o=e[2];const a=Math.sqrt(s*s+i*i+o*o);s/=a,i/=a,o/=a;const c=s*s,u=i*i,l=o*o,f=Math.cos(r),h=Math.sin(r),m=1-f,d=c+(1-c)*f,p=s*i*m+o*h,g=s*o*m-i*h,B=s*i*m-o*h,y=u+(1-u)*f,M=i*o*m+s*h,A=s*o*m+i*h,C=i*o*m-s*h,S=l+(1-l)*f,x=t[0],P=t[1],O=t[2],_=t[3],V=t[4],H=t[5],L=t[6],I=t[7],w=t[8],K=t[9],z=t[10],N=t[11];return n[0]=d*x+p*V+g*w,n[1]=d*P+p*H+g*K,n[2]=d*O+p*L+g*z,n[3]=d*_+p*I+g*N,n[4]=B*x+y*V+M*w,n[5]=B*P+y*H+M*K,n[6]=B*O+y*L+M*z,n[7]=B*_+y*I+M*N,n[8]=A*x+C*V+S*w,n[9]=A*P+C*H+S*K,n[10]=A*O+C*L+S*z,n[11]=A*_+C*I+S*N,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const kB=Au;function zB(t,e){return e=e||new fe(16),e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function JB(t,e,r){r=r||new fe(16);const n=e[0],s=e[1],i=e[2];return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=n*t[3],r[4]=s*t[4],r[5]=s*t[5],r[6]=s*t[6],r[7]=s*t[7],r[8]=i*t[8],r[9]=i*t[9],r[10]=i*t[10],r[11]=i*t[11],t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}var Et=Object.freeze({__proto__:null,aim:OB,axisRotate:Au,axisRotation:vu,cameraAim:RB,clone:gB,copy:To,create:hB,determinant:vB,equals:yB,equalsApproximately:bB,fromMat3:dB,fromQuat:mB,frustum:PB,getAxis:TB,getScaling:wB,getTranslation:MB,identity:bu,inverse:yu,invert:AB,lookAt:DB,mul:xB,multiply:Bu,negate:pB,ortho:IB,perspective:SB,rotate:kB,rotateX:UB,rotateY:NB,rotateZ:HB,rotation:VB,rotationX:_B,rotationY:LB,rotationZ:jB,scale:JB,scaling:zB,setAxis:EB,setDefaultType:fB,setTranslation:CB,translate:GB,translation:FB,transpose:BB});async function KB(t){const e=new is;return await e.initialize(t),e}class is{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=mn();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(e){if(this.canvas=e,this.device=await Lt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=ft(this.device,cB,lB,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),s=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:s}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(e){if(e!==null)return new Promise((r,n)=>{if(e.addEventListener("error",n),"requestVideoFrameCallback"in e)e.requestVideoFrameCallback((s,i)=>{r()});else{const s=i=>{i.currentTime>0?r():requestAnimationFrame(()=>s(i))};s(e)}e.play().catch(n)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const e=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),r=8,n=8,s=64,i=r*this.numberOfObjects,o=n*this.numberOfObjects,a=s*this.numberOfObjects,c=gu(),u=c.vertexData.byteLength,l=c.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:u,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,c.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:c.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,c.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const f=[];{const M=new Float32Array(i/4);for(let A=0;A<this.numberOfObjects;A++){const C=A*(r/4);M.set([ce(-.9,.9),ce(-.9,.9)],C);const S={scale:ce(.2,.6)};f.push(S)}this.perInstanceOffsets=new Float32Array(M),this.device.queue.writeBuffer(this.staticBuffer,0,M)}const h=new Float32Array(o/4),m=new Float32Array(a/4);let d=0,p=0,g=0;const B=1e4,y=M=>{if(this.canvas===null||this.device===null||this.context===null)return;const A=M-d;p+=A,d=M;const C=performance.now(),S=60*Math.PI/180,x=this.canvas.width/this.canvas.height,_=Et.perspective(S,x,.1,2e3),V=[0,0,2],H=[0,1,0],L=[0,0,0],I=Et.lookAt(V,L,H),K=Et.multiply(_,I),z=p/B*2*Math.PI,N=this.canvas.width/this.canvas.height*.5;f.forEach((Me,ye)=>{const Ke=ye*(n/4),he=ye*(s/4);h.set([Me.scale,Me.scale],Ke);const Dr=this.perInstanceOffsets[2*ye+0],b=this.perInstanceOffsets[2*ye+1],v=Et.create();Et.copy(K,v),Et.translate(v,[Dr,b,0],v),Et.rotateX(v,z,v),Et.rotateY(v,.2*Math.sin(z),v),Et.scale(v,[2*N,1*N,1],v),m.set(v,he)});const le={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},ee=this.device.createCommandEncoder({label:"Render Quad Encoder"}),te=ee.beginRenderPass(le);te.setPipeline(this.simpleTexturePipeline),te.setVertexBuffer(0,this.vertexBuffer),te.setVertexBuffer(1,this.staticBuffer),te.setVertexBuffer(2,this.changingBuffer),te.setIndexBuffer(this.indexBuffer,"uint16");const be=this.device.importExternalTexture({source:this.video}),Se=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e},{binding:1,resource:be},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,h),this.device.queue.writeBuffer(this.storageBuffer,0,m),te.setBindGroup(0,Se),te.drawIndexed(l,this.numberOfObjects),te.end(),this.timestampQuerySet!=null&&(ee.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&ee.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const Ae=ee.finish();this.device.queue.submit([Ae]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const Me=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());g=Number(Me[1]-Me[0]),this.timestampQuerySet.resultBuffer.unmap()});const xe=performance.now()-C;if(this.infoElement&&this.device){const Me=`                FPS: ${(1e3/A).toFixed(1)}
                JS Time: ${xe.toFixed(1)} ms
                GPU Time: ${(g/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=Me}this.animationFrameId=requestAnimationFrame(y)};this.animationFrameId=requestAnimationFrame(y),this.resizeObserver=new ResizeObserver(M=>{for(const A of M){const C=A.contentBoxSize[0].inlineSize,S=A.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(C,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(S,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){await this.smallCleanup(),this.slider&&(this.slider=null),pn()}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const e=cr();if(e===null)return;const r=document.createElement("label");r.textContent=`Number of Objects: ${this.numberOfObjects}`,r.htmlFor="numObjectsSlider",e.appendChild(r),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=is.minObjects.toString(),this.slider.max=is.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",e.appendChild(this.slider),this.slider.addEventListener("input",i=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),r.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let n=!1;const s=async()=>{if(!n){n=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{n=!1}}};this.slider.addEventListener("change",s),this.slider.addEventListener("pointerup",s),this.slider.addEventListener("mouseup",s),this.slider.addEventListener("touchend",s)}}const WB=`// ============================== //\r
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
}`,qB=`// ============================== //\r
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
}`,QB=`// ============================== //\r
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
`,XB=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class fn{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(e,r){this.bodyA=e,this.bodyB=r;for(let n=0;n<fn.MAX_ROWS;++n){this.J.push(T(0,0,0));const s=or();this.H.push(s),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let e=0;e<fn.MAX_ROWS;++e)this.stiffness[e]=0,this.penalty[e]=0,this.lambda[e]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(e){console.warn("This method should not be called directly.")}computeDerivatives(e){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class YB{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=T(0,0,0);inertial=T(0,0,0);id=-1;forces=[];constructor(e,r,n,s,i,o){this.width=e[0],this.height=e[1],this.density=n,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=s,this.position=i,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*Ye(e,e)/12,this.radius=Math.sqrt(Ye(e,e))*.5,this.color=r}getScale(){return $(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return $(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(e){this.staticBody||(this.velocity=e)}getRotationMatrix(){const e=Math.cos(this.position[2]),r=Math.sin(this.position[2]);return Qn(e,r,-r,e)}setPosition(e){this.staticBody||(this.position=e)}setColor(e){this.color=e}isConstrainedTo(e){for(let r=0;r<this.forces.length;++r){const n=this.forces[r];if(n.bodyA===this&&n.bodyB===e||n.bodyB===this&&n.bodyA===e)return!0}return!1}}const ke=12,Qe=8,Zt=4,$B=8,ZB=6,Qa=256,ev=16;class Bt{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(Qa*(ke+Qe)/4);numInstances=0;maxInstances=Qa;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(e,r){this.canvas=e,this.gameManager=r}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await Lt(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(e=>{for(const r of e){const n=r.contentBoxSize[0].inlineSize,s=r.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(n,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(s,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(e){return this.addInstance(e.getPosition(),e.getScale(),e.getColor())}addInstance(e,r,n){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let s;this.numInstances>=this.maxInstances&&this.extendBuffers(),s=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,s*Zt,n);const i=this.nextId++;return this.indexToId[s]=i,this.idToIndexMap.set(i,s),this.updateInstancePosition(i,e),this.updateInstanceScale(i,r),i}removeInstance(e){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const r=this.idToIndexMap.get(e);if(r===void 0)return;const n=this.numInstances-1;if(r!==n){const s=this.device.createCommandEncoder({label:"Remove instance encoder"});s.copyBufferToBuffer(this.staticBuffer,n*Zt,this.staticBuffer,r*Zt,Zt),this.device.queue.submit([s.finish()]);const i=this.changingCpuArray,o=r*(ke+Qe)/4,a=n*(ke+Qe)/4;i[o+0]=i[a+0],i[o+1]=i[a+1],i[o+2]=i[a+2],i[o+3]=i[a+3];const c=this.indexToId[n];this.indexToId[r]=c,this.idToIndexMap.set(c,r)}this.idToIndexMap.delete(e),this.indexToId.pop(),this.numInstances--}updateInstanceScale(e,r){const n=this.idToIndexMap.get(e);n!==void 0&&(this.changingCpuArray[n*(ke+Qe)/4+3]=r[0],this.changingCpuArray[n*(ke+Qe)/4+4]=r[1])}updateInstancePosition(e,r){const n=this.idToIndexMap.get(e);n!==void 0&&(this.changingCpuArray[n*(ke+Qe)/4+0]=r[0],this.changingCpuArray[n*(ke+Qe)/4+1]=r[1],this.changingCpuArray[n*(ke+Qe)/4+2]=r[2])}updateContacts(e){if(this.numContacts=Math.min(e.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let r=0;r<this.numContacts;++r)this.contactPositions[r*2+0]=e[r].pos[0],this.contactPositions[r*2+1]=e[r].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const e=this.context.getCurrentTexture().createView(),r={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:e,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},n=this.device.createCommandEncoder({label:"canvas render encoder"}),s=n.beginRenderPass(r);if(this.CubesPipeline&&this.changingBuffer){const i=this.numInstances*(ke+Qe);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,i),s.setPipeline(this.CubesPipeline),s.setVertexBuffer(0,this.vertexBuffer),s.setVertexBuffer(1,this.staticBuffer),s.setVertexBuffer(2,this.changingBuffer),s.setIndexBuffer(this.indexBuffer,"uint16"),s.setBindGroup(0,this.screenBindGroup),s.drawIndexed(ZB,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(s.setPipeline(this.ContactPipeline),s.setVertexBuffer(0,this.contactVertexBuffer),s.setVertexBuffer(1,this.contactPositionBuffer),s.setIndexBuffer(this.contactIndexBuffer,"uint16"),s.setBindGroup(0,this.screenBindGroup),s.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),s.end(),this.timestampQuerySet!=null&&!Nd(this.timestampQuerySet,n)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([n.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const e=this.maxInstances*Zt,r=this.maxInstances*(ke+Qe),n=gu(),s=n.vertexData.byteLength,i=n.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,n.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:i,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,n.indexData);const o=ky({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=oo(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:ev,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=new Float32Array([Bt.xWorldSize,Bt.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,a.buffer,a.byteOffset,a.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const e=this.maxInstances*Zt,r=this.maxInstances*(ke+Qe),n=this.device.createBuffer({label:"Extended static instance buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createBuffer({label:"Extended changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createCommandEncoder({label:"Extend buffer encoder"});i.copyBufferToBuffer(this.staticBuffer,0,n,0,this.staticBuffer.size),this.device.queue.submit([i.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(ke+Qe)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=n,this.changingBuffer=s}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=ft(this.device,WB,qB,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[e]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:$B,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:Zt,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:ke+Qe,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:ke,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:e,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=ft(this.device,QB,XB,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const tv=5e-4,rv=.01,tr=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),nv=t=>{const e=t.inEdge1;t.inEdge1=t.inEdge2,t.inEdge2=e;const r=t.outEdge1;t.outEdge1=t.outEdge2,t.outEdge2=r};function Zr(t){return{inEdge1:t.inEdge1,outEdge1:t.outEdge1,inEdge2:t.inEdge2,outEdge2:t.outEdge2,ID:t.ID}}function xu(t){return t.inEdge1&255|(t.outEdge1&255)<<8|(t.inEdge2&255)<<16|(t.outEdge2&255)<<24}function Xa(){return{details:tr(),pA:q(),pB:q(),n:q(),JacNormA:se(),JacNormB:se(),JacTangA:se(),JacTangB:se(),C0:q(),stick:!1}}const Ya=(t,e,r,n,s)=>{let i=0;const o=Ye(r,e[0].v)-n,a=Ye(r,e[1].v)-n;if(o<=0&&(t[i++]={v:Xn(e[0].v),cd:Zr(e[0].cd)}),a<=0&&(t[i++]={v:Xn(e[1].v),cd:Zr(e[1].cd)}),o*a<0){const c=o/(o-a),u=bd(q(),e[0].v,e[1].v,c);let l=Zr(o>0?e[0].cd:e[1].cd);o>0?(l.inEdge1=s,l.inEdge2=0):(l.outEdge1=s,l.outEdge2=0),l.ID=xu(l),t[i++]={v:u,cd:l}}return i},Pn=(t,e,r,n,s)=>{const i=_n(jr(),n),o=De(q(),s,i);wt(o,o,-1);const a=$(Math.abs(o[0]),Math.abs(o[1]));a[0]>a[1]?o[0]>0?(t[0].v=$(e[0],-e[1]),t[0].cd.inEdge2=3,t[0].cd.outEdge2=4,t[1].v=$(e[0],e[1]),t[1].cd.inEdge2=4,t[1].cd.outEdge2=1):(t[0].v=$(-e[0],e[1]),t[0].cd.inEdge2=1,t[0].cd.outEdge2=2,t[1].v=$(-e[0],-e[1]),t[1].cd.inEdge2=2,t[1].cd.outEdge2=3):o[1]>0?(t[0].v=$(e[0],e[1]),t[0].cd.inEdge2=4,t[0].cd.outEdge2=1,t[1].v=$(-e[0],e[1]),t[1].cd.inEdge2=1,t[1].cd.outEdge2=2):(t[0].v=$(-e[0],-e[1]),t[0].cd.inEdge2=2,t[0].cd.outEdge2=3,t[1].v=$(e[0],-e[1]),t[1].cd.inEdge2=3,t[1].cd.outEdge2=4),t[0].v=It(q(),r,De(q(),t[0].v,n)),t[1].v=It(q(),r,De(q(),t[1].v,n))};class Eo extends fn{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(e,r){super(e,r);for(let n=0;n<fn.MAX_ROWS;++n)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const e=this.penalty.slice(),r=this.lambda.slice(),n=this.oldContacts.map(i=>i.stick);this.contacts.length=0;const s=Eo.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=s;for(let i=0;i<this.contacts.length;++i){this.penalty[i*2+0]=0,this.penalty[i*2+1]=0,this.lambda[i*2+0]=0,this.lambda[i*2+1]=0,this.contacts[i].stick=!1;const o=this.contacts[i].details.ID,a=this.oldContacts.findIndex(c=>c.details.ID===o);a!==-1&&(this.penalty[i*2+0]=e[a*2+0],this.penalty[i*2+1]=e[a*2+1],this.lambda[i*2+0]=r[a*2+0],this.lambda[i*2+1]=r[a*2+1],this.contacts[i].stick=n[a],this.contacts[i].stick&&(this.contacts[i].pA=Xn(this.oldContacts[a].pA),this.contacts[i].pB=Xn(this.oldContacts[a].pB)))}for(let i=0;i<this.contacts.length;++i){const o=this.contacts[i].n,a=$(o[1],-o[0]),c=Qn(o[0],o[1],a[0],a[1]),u=De(q(),this.contacts[i].pA,hr(this.bodyA.getPosition()[2])),l=De(q(),this.contacts[i].pB,hr(this.bodyB.getPosition()[2]));this.contacts[i].JacNormA=T(c[0],c[2],Mn(u,o)),this.contacts[i].JacNormB=T(-c[0],-c[2],-Mn(l,o)),this.contacts[i].JacTangA=T(c[1],c[3],Mn(u,a)),this.contacts[i].JacTangB=T(-c[1],-c[3],-Mn(l,a));const f=gt(q(),It(q(),this.bodyA.getPos2(),u),It(q(),this.bodyB.getPos2(),l));this.contacts[i].C0=De(this.contacts[i].C0,f,c),this.contacts[i].C0=It(this.contacts[i].C0,this.contacts[i].C0,$(tv,0))}return this.contacts.length>0}computeConstraints(e){for(let r=0;r<this.contacts.length;++r){const n=Ar(se(),this.bodyA.getPosition(),this.bodyA.lastPosition),s=Ar(se(),this.bodyB.getPosition(),this.bodyB.lastPosition),i=wt(q(),this.contacts[r].C0,1-e);this.C[r*2+0]=i[0]+rr(this.contacts[r].JacNormA,n)+rr(this.contacts[r].JacNormB,s),this.C[r*2+1]=i[1]+rr(this.contacts[r].JacTangA,n)+rr(this.contacts[r].JacTangB,s);const o=Math.abs(this.lambda[r*2+0])*this.friction;this.fmax[r*2+1]=o,this.fmin[r*2+1]=-o,this.contacts[r].stick=Math.abs(this.lambda[r*2+1])<o&&Math.abs(this.contacts[r].C0[1])<rv}}computeDerivatives(e){for(let r=0;r<this.contacts.length;++r)e===this.bodyA?(this.J[r*2+0]=this.contacts[r].JacNormA,this.J[r*2+1]=this.contacts[r].JacTangA):(this.J[r*2+0]=this.contacts[r].JacNormB,this.J[r*2+1]=this.contacts[r].JacTangB)}static collide(e,r,n){n.length=0;let s=q();const i=hr(e.getPosition()[2]),o=hr(r.getPosition()[2]),a=_n(jr(),i),c=_n(jr(),o),u=wt(q(),e.getScale(),.5),l=wt(q(),r.getScale(),.5),f=e.getPos2(),h=r.getPos2(),m=e.getRotationMatrix(),d=r.getRotationMatrix(),p=gt(q(),h,f),g=De(q(),p,a),B=De(q(),p,c),y=$(Math.abs(g[0]),Math.abs(g[1])),M=$(Math.abs(B[0]),Math.abs(B[1])),A=nd(jr(),a,d),C=Qn(Math.abs(A[0]),Math.abs(A[1]),Math.abs(A[2]),Math.abs(A[3])),S=_n(jr(),C),x=gt(q(),y,It(q(),u,De(q(),l,C))),P=gt(q(),M,It(q(),l,De(q(),u,S)));if(x[0]>0||x[1]>0||P[0]>0||P[1]>0)return 0;let O,_;O=1,_=x[0],g[0]>0?s=$(m[0],m[1]):s=$(-m[0],-m[1]);const V=.95,H=.01;x[1]>V*_+H*u[1]&&(O=2,_=x[1],g[1]>0?s=$(m[2],m[3]):s=$(-m[2],-m[3])),P[0]>V*_+H*l[0]&&(O=3,_=P[0],B[0]>0?s=$(d[0],d[1]):s=$(-d[0],-d[1])),P[1]>V*_+H*l[1]&&(O=4,_=P[1],B[1]>0?s=$(d[2],d[3]):s=$(-d[2],-d[3]));let L,I;const w=[{cd:tr(),v:q()},{cd:tr(),v:q()}];let K,z,N,re=0,le=0,ee;switch(O){case 1:L=s,K=Ye(f,L)+u[0],I=$(m[2],m[3]),ee=Ye(f,I),z=-ee+u[1],N=ee+u[1],re=3,le=1,Pn(w,l,h,d,L);break;case 2:L=s,K=Ye(f,L)+u[1],I=$(m[0],m[1]),ee=Ye(f,I),z=-ee+u[0],N=ee+u[0],re=2,le=4,Pn(w,l,h,d,L);break;case 3:L=wt(q(),s,-1),K=Ye(h,L)+l[0],I=$(d[2],d[3]),ee=Ye(h,I),z=-ee+l[1],N=ee+l[1],re=3,le=1,Pn(w,u,f,m,L);break;case 4:L=wt(q(),s,-1),K=Ye(h,L)+l[1],I=$(d[0],d[1]),ee=Ye(h,I),z=-ee+l[0],N=ee+l[0],re=2,le=4,Pn(w,u,f,m,L);break}const te=[{cd:tr(),v:q()},{cd:tr(),v:q()}],be=[{cd:tr(),v:q()},{cd:tr(),v:q()}];let Se;if(Se=Ya(te,w,wt(q(),I,-1),z,re),Se<2||(Se=Ya(be,te,I,N,le),Se<2))return 0;n.push(Xa(),Xa());let Ae=0;for(let xe=0;xe<2;++xe){const Me=Ye(L,be[xe].v)-K;if(Me<=0){const ye=n[Ae];ye.n=wt(q(),s,-1);const Ke=O===3||O===4,he=gt(q(),be[xe].v,wt(q(),L,Me));if(!Ke)ye.pA=De(q(),gt(q(),he,f),a),ye.pB=De(q(),gt(q(),be[xe].v,h),c),ye.details=Zr(be[xe].cd);else{ye.pA=De(q(),gt(q(),be[xe].v,f),a),ye.pB=De(q(),gt(q(),he,h),c);let Dr=Zr(be[xe].cd);nv(Dr),ye.details=Dr}if(ye.details.ID=xu(ye.details),++Ae,Ae===2)break}}return n.length=Ae,Ae}getContactRenders(){const e=[],r=hr(this.bodyA.getPosition()[2]),n=hr(this.bodyB.getPosition()[2]),s=this.bodyA.getPos2(),i=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const a=It(q(),s,De(q(),this.contacts[o].pA,r));e.push({pos:a});const c=It(q(),i,De(q(),this.contacts[o].pB,n));e.push({pos:c})}return e}getRows(){return this.contacts.length*2}}const On=1,Lr=1e9;class sv{dt=0;gravity=$(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=$(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(e){Math.abs(e-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${e}. This may cause instability.`),this.contactsToRender=[];for(let n=0;n<this.bodies.length;++n)for(let s=n+1;s<this.bodies.length;++s){const i=this.bodies[n],o=this.bodies[s],a=gt(q(),i.getPos2(),o.getPos2()),c=i.getRadius()+o.getRadius();if(gd(a)<=c*c&&!i.isConstrainedTo(o)){let u=new Eo(i,o);this.forces.push(u),i.forces.push(u),o.forces.push(u)}}for(let n=0;n<this.forces.length;++n){const s=this.forces[n];if(!s.initialize()){this.forces.splice(n,1),--n;const o=s.bodyA.forces.indexOf(s);o!==-1&&s.bodyA.forces.splice(o,1);const a=s.bodyB.forces.indexOf(s);a!==-1&&s.bodyB.forces.splice(a,1);continue}this.contactsToRender.push(...s.getContactRenders());for(let o=0;o<s.getRows();++o){if(this.postStabilization){let a=s.penalty[o]*this.gamma;a<On&&(a=On),a>Lr&&(a=Lr),s.penalty[o]=a}else{s.lambda[o]=s.lambda[o]*this.alpha*this.gamma;let a=s.penalty[o]*this.gamma;a<On&&(a=On),a>Lr&&(a=Lr),s.penalty[o]=a}s.penalty[o]=Math.min(s.penalty[o],s.stiffness[o])}}for(let n=0;n<this.bodies.length;++n){const s=this.bodies[n];let i=s.getVelocity()[2];if(i>50&&(i=50),i<-50&&(i=-50),s.setVelocity(T(s.getVelocity()[0],s.getVelocity()[1],i)),s.inertial=yr(se(),s.getPosition(),Nt(se(),s.getVelocity(),this.dt)),s.getMass()!==0){let f=Nt(se(),T(this.gravity[0],this.gravity[1],0),this.dt*this.dt);s.inertial=yr(s.inertial,s.inertial,f)}let c=Nt(se(),Ar(se(),s.getVelocity(),s.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);c<0&&(c=0),c>1&&(c=1),s.lastPosition=ad(s.getPosition());const u=Nt(se(),s.getVelocity(),this.dt),l=Nt(se(),T(this.gravity[0],this.gravity[1],0),c*this.dt*this.dt);s.setPosition(yr(se(),s.getPosition(),yr(se(),u,l)))}const r=this.iterations+(this.postStabilization?1:0);for(let n=0;n<r;++n){let s=this.alpha;this.postStabilization&&(s=n<this.iterations?1:0);for(const i of this.bodies){if(i.isStatic())continue;const o=Ii(i.getMass(),0,0,0,i.getMass(),0,0,0,i.getMoment()),a=oa(or(),o,1/(this.dt*this.dt)),c=cn(se(),Ar(se(),i.getPosition(),i.inertial),a);for(const l of i.forces){l.computeConstraints(s),l.computeDerivatives(i);for(let f=0;f<l.getRows();++f){let h=l.stiffness[f]===1/0?l.lambda[f]:0,m=l.penalty[f]*l.C[f]+h;m<l.fmin[f]&&(m=l.fmin[f]),m>l.fmax[f]&&(m=l.fmax[f]);const d=Ii(Un(T(l.H[f][0],l.H[f][3],l.H[f][6])),0,0,0,Un(T(l.H[f][1],l.H[f][4],l.H[f][7])),0,0,0,Un(T(l.H[f][2],l.H[f][5],l.H[f][8])));oa(d,d,Math.abs(m)),yr(c,c,Nt(se(),l.J[f],m));const p=yd(l.J[f],Nt(se(),l.J[f],l.penalty[f]));ia(a,a,p),ia(a,a,d)}}const u=Bd(a,c);i.setPosition(Ar(se(),i.getPosition(),u))}if(n<this.iterations)for(const i of this.forces){i.computeConstraints(s);for(let o=0;o<i.getRows();++o){let a=i.stiffness[o]===1/0?i.lambda[o]:0;i.lambda[o]=a+i.penalty[o]*i.C[o],i.lambda[o]<i.fmin[o]&&(i.lambda[o]=i.fmin[o]),i.lambda[o]>i.fmax[o]&&(i.lambda[o]=i.fmax[o]),Math.abs(i.lambda[o])>=i.fracture[o]&&i.disable(),i.lambda[o]>i.fmin[o]&&i.lambda[o]<i.fmax[o]&&(i.penalty[o]=Math.min(i.penalty[o]+this.beta*Math.abs(i.C[o]),Math.min(i.stiffness[o],Lr)))}}if(n==this.iterations-1){for(const i of this.bodies)if(i.prevVelocity=i.getVelocity(),i.getMass()>0){const o=Ar(se(),i.getPosition(),i.lastPosition);Nt(o,o,1/this.dt),i.setVelocity(o)}}}}addRigidBox(e){this.bodies.indexOf(e)===-1&&this.bodies.push(e)}removeRigidBox(e){const r=this.bodies.indexOf(e);r!==-1&&this.bodies.splice(r,1)}}class iv{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(e){this.canvas=e,this.gameRenderer=new Bt(this.canvas,this),this.solver=new sv,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(e){this.logging&&console.log(`[GameManager] ${e}`)}logWarn(e){this.logging&&console.warn(`[GameManager] ${e}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const e=T(Bt.xWorldSize*.5,8,0),r=$(Bt.xWorldSize-20,10);this.addRigidBox(e,r,T(0,0,0),new Uint8Array([200,200,200,255]),!0);const n=1/60;let s=0;this.lastFrameTime=performance.now();const i=o=>{if(!this.running)return;const a=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,s+=a;s>=n;)this.solver.step(n),s-=n;for(let c=0;c<this.solver.bodies.length;++c){const u=this.solver.bodies[c],l=u.getPosition(),f=new Float32Array([l[0],l[1],l[2]]);this.gameRenderer.updateInstancePosition(u.id,f)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(i)};this.rafID=requestAnimationFrame(i)}addRigidBox(e=vd(0,0,Bt.xWorldSize,Bt.yWorldSize),r=$(ce(2,10),ce(2,10)),n=T(0,0,0),s=Ad(),i=!1){const o=new YB(r,s,i?0:1,1,e,n);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",e=>{if(!this.canvas)return;const r=this.canvas.getBoundingClientRect(),n=e.clientX-r.left,s=e.clientY-r.top,i=n/this.canvas.width*Bt.xWorldSize,o=(1-s/this.canvas.height)*Bt.yWorldSize,a=T(i,o,ce(0,Math.PI*2));this.addRigidBox(a)})}}async function ov(t){const e=new iv(t);return await e.initialize(),e}const av=`// ============================== //\r
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
}`,cv=`// ============================== //\r
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
}`,lv=`struct Uniforms {\r
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
}`,uv=`struct Uniforms {\r
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
}`;async function fv(t){const e=new gv;return await e.initialize(t),e}const $a=264,Za=128,hv=0,dv=20,mv=0,pv=1e3;let gv=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mn();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Bs(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){vs(this.camera,278,500,-700),gn(this.camera,0,-.3),xs(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const e=cr();if(!e)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",e.appendChild(this.useRaytracingCheckBox),e.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((i,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=i,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),e.appendChild(document.createElement("br")),e.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=hv.toString(),this.intensitySlider.max=dv.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const n=document.createElement("label");n.htmlFor="intensitySlider",n.textContent=" Light Intensity",e.appendChild(document.createElement("br")),e.appendChild(this.intensitySlider),e.appendChild(n),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=mv.toString(),this.numBouncesSlider.max=pv.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const s=document.createElement("label");s.htmlFor="numBouncesSlider",s.textContent=" Number of Bounces",e.appendChild(document.createElement("br")),e.appendChild(this.numBouncesSlider),e.appendChild(s)}async initialize(e){if(this.canvas=e,this.device=await Lt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=ft(this.device,av,cv,"Ray Trace Shader Module"),this.normalObjects.shaderModule=ft(this.device,lv,uv,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),s=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:s}}}initializeBuffers(){if(this.device===null)return;const e=Jy();this.additionalInfo=e.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:e.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,e.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:e.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,e.indexData),this.normalObjects.numIndices=e.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:e.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,e.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:e.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,e.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:e.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,e.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:$a,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:e.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,e.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:e.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,e.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:e.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,e.colorData);var r=new Uint32Array(e.indexData.length);for(let n=0;n<e.indexData.length;n++)r[n]=e.indexData[n];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,r),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:e.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,e.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:Za,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,s=.05;Ee(this.camera,r*s,-n*s),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Cs(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Ee(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ee(this.camera,1,0),this.keysPressed.has("arrowup")&&Ee(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ee(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(Za),r=new Float32Array(e),n=new Uint32Array(e);r.set(Ms(this.camera),0),r.set(this.camera.position,16),r.set(this.light.position,20),r.set(this.light.color,24),n[28]=this.rayTracingMode,r[29]=this.light.intensity,n[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new Float32Array($a/4);let r=0;const n=vr();hl(n),e.set(n,r),r+=16,e.set(this.camera.viewMatrix,r),r+=16,e.set(this.camera.projectionMatrix,r),r+=16,e.set(this.light.position,r),r+=4,e.set(this.light.color,r),r+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){const e=performance.now()*.001,r=200,n=250,s=276,i=278.5,o=450;if(this.light.position[0]=s+r*Math.cos(e),this.light.position[1]=o,this.light.position[2]=i+n*Math.sin(e),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const a=this.additionalInfo.cubeCenter,u=pl(0,e,0),l=this.additionalInfo.cubeVertexStart,f=this.additionalInfo.cubeVertexCount,h=this.additionalInfo.cubeVertexInfo,m=new Float32Array(f*3),d=this.additionalInfo.cubeNormalsInfo,p=new Float32Array(f*3);for(let g=0;g<f;g++){const B=g*3,y=h[B]-a[0],M=h[B+1]-a[1],A=h[B+2]-a[2];m[B]=u[0]*y+u[1]*M+u[2]*A+a[0],m[B+1]=u[3]*y+u[4]*M+u[5]*A+a[1],m[B+2]=u[6]*y+u[7]*M+u[8]*A+a[2];const C=d[B],S=d[B+1],x=d[B+2];p[B]=u[0]*C+u[1]*S+u[2]*x,p[B+1]=u[3]*C+u[4]*S+u[5]*x,p[B+2]=u[6]*C+u[7]*S+u[8]*x}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,l*3*4,m),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,l*3*4,p)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,l*3*4,m),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,l*3*4,p))}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=s=>{if(this.canvas===null||this.device===null||this.context===null)return;const i=s-e;e=s;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=l.beginRenderPass(u);this.useRaytracing?(f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.draw(6)):(f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup),f.setVertexBuffer(0,this.normalObjects.positionBuffer),f.setVertexBuffer(1,this.normalObjects.normalBuffer),f.setVertexBuffer(2,this.normalObjects.uvBuffer),f.setVertexBuffer(3,this.normalObjects.colorBuffer),f.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),f.drawIndexed(this.normalObjects.numIndices)),f.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/i).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(s=>{for(const i of s){const o=i.contentBoxSize[0].inlineSize,a=i.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),As(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),pn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const bv=`struct Uniforms {\r
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
}`,yv=`struct Uniforms {\r
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
}`,ec=264;async function Bv(t){const e=new vv;return await e.initialize(t),e}class vv{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mn();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Bs(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,vs(this.camera,300,200,300),gn(this.camera,9*Math.PI/12,-Math.PI/6),xs(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(e){if(this.canvas=e,this.device=await Lt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=ft(this.device,bv,yv,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),s=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:s}}}initializeUtils(){const e=cr();if(!e)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",e.appendChild(this.wireFrameCheckbox),e.appendChild(this.wireFrameLabel),e.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(n=>{const s=document.createElement("option");s.value=n,s.text=n.charAt(0).toUpperCase()+n.slice(1),this.cullModeSelect.appendChild(s)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),e.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",e.appendChild(document.createElement("br")),e.appendChild(this.useSortingCheckbox),e.appendChild(this.useSortingLabel)}initializeScene(){const e=di({translation:T(0,0,-100),rotation:T(0,0,0),scale:T(200,200,1)},[.8,.8,.7]);e.additionalInfo={order:0,numVertices:e.vertexData.length/3},this.facesTopologyInformation.push(e);const r=di({translation:T(-100,0,0),rotation:T(0,-Math.PI/2,0),scale:T(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:1,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const n=di({translation:T(0,-100,0),rotation:T(Math.PI/2,0,0),scale:T(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:2,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const s=25,i=32;let o=3,a=0;const c=-100+s;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++){const d=[h*s*2,c,m*s*2],p=mi(d,s,[Math.random(),Math.random(),Math.random()],i,i);p.additionalInfo={order:o++,numVertices:p.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(p),this.currentSphereOrders.push(p.additionalInfo.id)}const u=c+s*Math.sqrt(2);for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){const d=[(h-.5)*s*2,u,(m-.5)*s*2],p=mi(d,s,[Math.random(),Math.random(),Math.random()],i,i);p.additionalInfo={order:o++,numVertices:p.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(p),this.currentSphereOrders.push(p.additionalInfo.id)}const l=[0,u+s*Math.sqrt(2),0],f=mi(l,s,[Math.random(),Math.random(),Math.random()],i,i);f.additionalInfo={order:o++,numVertices:f.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(f),this.currentSphereOrders.push(f.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const e=this.device.queue;this.initializeScene();const r=[],n=[],s=[],i=[],o=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const p=this.facesTopologyInformation[d];p.additionalInfo&&(r.push(p.vertexData),n.push(p.indexData),s.push(p.normalData),i.push(p.colorData),o.push(p.uvData))}const a=this.currentSphereOrders.slice();for(let d=a.length-1;d>0;d--){const p=Math.floor(Math.random()*(d+1));[a[d],a[p]]=[a[p],a[d]]}for(let d=0;d<this.spheresTopologyInformation.length;d++){const p=this.spheresTopologyInformation[a[d]];p.additionalInfo&&(r.push(p.vertexData),n.push(p.indexData),s.push(p.normalData),i.push(p.colorData),o.push(p.uvData))}const c=r.map(d=>d.length/3),u=jt(r),l=ca(n,c),f=jt(s),h=jt(i),m=jt(o);this.totalIndices=l.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:ec,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:u.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.vertexBuffer,0,u),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.normalBuffer,0,f),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:h.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.colorBuffer,0,h),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:m.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.uvBuffer,0,m),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:l.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.indexBuffer,0,l),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,s=.05;Ee(this.camera,r*s,-n*s),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&(Cs(this.camera,-n,e,r),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&Ee(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ee(this.camera,1,0),this.keysPressed.has("arrowup")&&Ee(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ee(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const e=new ArrayBuffer(ec),r=new Float32Array(e),n=vr();hl(n),r.set(n,0),r.set(this.camera.viewMatrix,16),r.set(this.camera.projectionMatrix,32),r.set(this.light.position,48),r.set(this.light.color,52),r[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,e)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const e=this.camera.position,r=[];for(let d=0;d<this.spheresTopologyInformation.length;d++){const g=this.spheresTopologyInformation[d].transform.translation,B=g[0]-e[0],y=g[1]-e[1],M=g[2]-e[2],A=Math.sqrt(B*B+y*y+M*M),C=this.spheresTopologyInformation[d].additionalInfo.id;r.push({id:C,distance:A})}r.sort((d,p)=>p.distance-d.distance),this.currentSphereOrders=r.map(d=>d.id);const n=[],s=[],i=[],o=[],a=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const p=this.facesTopologyInformation[d];p.additionalInfo&&(n.push(p.vertexData),s.push(p.indexData),i.push(p.normalData),o.push(p.colorData),a.push(p.uvData))}for(let d=0;d<this.currentSphereOrders.length;d++){const p=this.currentSphereOrders[d],g=this.spheresTopologyInformation.find(B=>B.additionalInfo.id===p);g&&(n.push(g.vertexData),s.push(g.indexData),i.push(g.normalData),o.push(g.colorData),a.push(g.uvData))}const c=n.map(d=>d.length/3),u=jt(n),l=ca(s,c),f=jt(i),h=jt(o),m=jt(a);this.device.queue.writeBuffer(this.vertexBuffer,0,u),this.device.queue.writeBuffer(this.indexBuffer,0,l),this.device.queue.writeBuffer(this.normalBuffer,0,f),this.device.queue.writeBuffer(this.colorBuffer,0,h),this.device.queue.writeBuffer(this.uvBuffer,0,m)}startMainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=s=>{if(this.canvas===null||this.device===null||this.context===null)return;const i=s-e;e=s;const o=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const a=this.context.getCurrentTexture().createView(),c={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=l.beginRenderPass(u);f.setPipeline(this.renderPipeline),f.setBindGroup(0,this.bindGroup),f.setVertexBuffer(0,this.vertexBuffer),f.setVertexBuffer(1,this.normalBuffer),f.setVertexBuffer(2,this.uvBuffer),f.setVertexBuffer(3,this.colorBuffer),f.setIndexBuffer(this.indexBuffer,"uint16"),f.drawIndexed(this.totalIndices,1,0,0,0),f.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/i).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(s=>{for(const i of s){const o=i.contentBoxSize[0].inlineSize,a=i.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),As(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),pn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const Av=`// ============================== //\r
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
}`,xv=`// ============================== //\r
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
}`,Cv=`struct SpotLight\r
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
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
@group(1) @binding(6)\r
var<storage, read> modelMatrix : mat4x4<f32>;\r
@group(1) @binding(7)\r
var<storage, read> normalMatrix : mat3x3<f32>;\r
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
\r
    let worldPos = modelMatrix * vec4f(input.pos, 1.0);\r
    output.pos = uniforms.projMat * uniforms.viewMat * worldPos;\r
    output.position = worldPos.xyz;\r
    output.normal = normalize(normalMatrix * input.normal);\r
    output.uv = input.uv;\r
    return output;\r
}`,Mv=`struct Material {\r
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
}`;var Be=(t=>(t[t.Albedo=0]="Albedo",t[t.Metalness=1]="Metalness",t[t.Roughness=2]="Roughness",t[t.Normal=3]="Normal",t))(Be||{});function Cu(t){return new Promise((e,r)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=s=>r(s),n.src=t})}function Mu(t,e,r="texture"){if(e.width<=0||e.height<=0)return console.warn(`Image has invalid dimensions (${e.width}x${e.height}). Using placeholder texture instead.`),lt(t);const n=t.createTexture({label:r,size:{width:e.width,height:e.height,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return t.queue.copyExternalImageToTexture({source:e},{texture:n},[e.width,e.height]),n}function Tu(t,e,r){const n=document.createElement("canvas");n.width=e,n.height=r;const s=n.getContext("2d");return s?(s.drawImage(t,0,0,e,r),n):(console.error("Failed to get 2D context for image resizing."),n)}function lt(t,e=256,r=32){const n=document.createElement("canvas");n.width=e,n.height=e;const s=n.getContext("2d"),i=e/r;for(let a=0;a<r;a++)for(let c=0;c<r;c++)s.fillStyle=(c+a)%2===0?"#FF00FF":"#000000",s.fillRect(c*i,a*i,i,i);const o=t.createTexture({label:"placeholder-texture",size:[e,e],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return t.queue.copyExternalImageToTexture({source:n},{texture:o},[e,e]),o}function os(t=256,e=32){const r=document.createElement("canvas");r.width=t,r.height=t;const n=r.getContext("2d"),s=t/e;for(let i=0;i<e;i++)for(let o=0;o<e;o++)n.fillStyle=(o+i)%2===0?"#FF00FF":"#000000",n.fillRect(o*s,i*s,s,s);return r}const Tv="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg";async function Ev(t){const e=new wv;return await e.initialize(t),e}const tc=304,rc=288;let wv=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mn();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Bs(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;sphereResolution=8;spheresInfo;activeContextMenu=null;constructor(){vs(this.camera,278,500,-700),gn(this.camera,0,-.3),xs(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={position:T(500,500,0),intensity:1e3,direction:T(-.5,-.9,1),coneAngle:Math.PI/6,color:T(.85,.1,.1),enabled:!0};this.lights.push(e);const r={position:T(50,500,0),intensity:1e3,direction:T(.5,-.9,1),coneAngle:Math.PI/6,color:T(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:T(275,255,0),intensity:1500,direction:T(0,0,1),coneAngle:Math.PI/6,color:T(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const e=cr();e&&(Oi("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),Hr("Sphere Resolution",this.sphereResolution,8,64,1,e,r=>{this.sphereResolution=r,this.startRendering()}),this.lights.forEach((r,n)=>{const s=i=>{i.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const o={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Bl(o,this.lights[n],`Edit Light ${n+1}`,a=>{this.lights[n]=a},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),bl(`Edit Light ${n+1}`,e,s)}),e.appendChild(document.createElement("br")),Hr("Constant (ac)",this.a_c,0,2,.01,e,r=>{this.a_c=r}),e.appendChild(document.createElement("br")),Hr("Linear (al)",this.a_l,0,.5,.001,e,r=>{this.a_l=r}),e.appendChild(document.createElement("br")),Hr("Quadratic (aq)",this.a_q,0,.1,1e-4,e,r=>{this.a_q=r}))}async initialize(e){if(this.canvas=e,this.device=await Lt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=ft(this.device,Av,xv,"Ray Trace Shader Module"),this.normalObjects.shaderModule=ft(this.device,Cv,Mv,"Normal Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}})),this.timestampQuerySet=oo(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}initializeBuffers(){if(this.device===null)return;const e=lt(this.device),r=this.spheresInfo?.sphereMaterials||[],n=Ky(r,this.sphereResolution);this.normalObjects.sceneInformation=n,this.spheresInfo=n.additionalInfo;const s=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let x=0;x<s;x++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+x,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[x],0,n.meshes[x].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+x,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[x],0,n.meshes[x].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+x,size:an*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const P=n.meshes[x].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[x],0,P),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+x,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[x]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[x].Material.albedoGPUTexture?n.meshes[x].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[x].Material.metalnessGPUTexture?n.meshes[x].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[x].Material.roughnessGPUTexture?n.meshes[x].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[x].Material.normalGPUTexture?n.meshes[x].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[x]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[x]}}]}));const O=n.meshes[x].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+x,size:O.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[x],0,O);const _=n.meshes[x].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+x,size:_.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[x],0,_);const V=n.meshes[x].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+x,size:V.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[x],0,V);const H=n.meshes[x].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+x,size:H.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[x],0,H)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:tc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const i=[],o=[],a=[],c=[],u=[];let l=0;for(let x=0;x<s;x++){let P=n.meshes[x];i.push(...P.getTransformedVertexData()),o.push(...P.getTransformedNormalData()),a.push(...P.getUVData());for(let O of P.getIndexData32())c.push(O+l);l+=P.getNumVertices();for(let O=0;O<P.getNumTriangles();O++)u.push(x)}const f=new Float32Array(i),h=new Float32Array(o),m=new Float32Array(a),d=new Uint32Array(c),p=new Uint32Array(u);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:f.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,f),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,h),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:m.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,m),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,d),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:p.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,p),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const g=n.meshes.map(x=>x.Material),B=fl(g);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:B.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,B);const y=4,M=3,A=256,C=256;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[A,C,y*M],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const S=os(256,32);for(let x=0;x<M;x++){const P=this.spheresInfo?.sphereMaterials[x].albedoImage?this.spheresInfo.sphereMaterials[x].albedoImage:S,O=this.spheresInfo?.sphereMaterials[x].metalnessImage?this.spheresInfo.sphereMaterials[x].metalnessImage:S,_=this.spheresInfo?.sphereMaterials[x].roughnessImage?this.spheresInfo.sphereMaterials[x].roughnessImage:S,V=this.spheresInfo?.sphereMaterials[x].normalImage?this.spheresInfo.sphereMaterials[x].normalImage:S;this.device.queue.copyExternalImageToTexture({source:P},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*y]},[A,C]),this.device.queue.copyExternalImageToTexture({source:O},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*y+1]},[A,C]),this.device.queue.copyExternalImageToTexture({source:_},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*y+2]},[A,C]),this.device.queue.copyExternalImageToTexture({source:V},{texture:this.rayTracerObjects.textureArray,origin:[0,0,x*y+3]},[A,C])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnSpheres(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,s=.05;Ee(this.camera,r*s,-n*s),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Cs(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Ee(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ee(this.camera,1,0),this.keysPressed.has("arrowup")&&Ee(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ee(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Be.Albedo,Tv),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Be.Albedo,"textures/herringbone_brick_03_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Be.Albedo,"textures/oak_veneer_01_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Be.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Be.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Be.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],Be.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],Be.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],Be.Roughness,"textures/roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(rc),r=new Float32Array(e),n=new Uint32Array(e);r.set(Ms(this.camera),0),r.set(this.camera.position,16),n[19]=0,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=0;for(let s=0;s<3&&!(s>=this.lights.length);s++){const i=this.lights[s],o=24+s*12;r.set(i.position,o),r[o+3]=i.intensity,r.set(i.direction,o+4),r[o+7]=i.coneAngle,r.set(i.color,o+8),r[o+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new ArrayBuffer(tc),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const s=this.lights[n],i=40+n*12;r.set(s.position,i),r[i+3]=s.intensity,r.set(s.direction,i+4),r[i+7]=s.coneAngle,r.set(s.color,i+8),r[i+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=s=>{if(this.canvas===null||this.device===null||this.context===null)return;const i=s-e;e=s;const o=performance.now();this.handleInput(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=l.beginRenderPass(u);if(this.useRaytracing)f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.setBindGroup(1,this.rayTracerObjects.materialBindGroup),f.draw(6);else{f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.sceneInformation.meshes.length;d++)f.setBindGroup(1,this.normalObjects.materialBindGroups[d]),f.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),f.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),f.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),f.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),f.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0)}f.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/i).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(s=>{for(const i of s){const o=i.contentBoxSize[0].inlineSize,a=i.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),As(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),pn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(e,r){if(e<0||e>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const n=r.name,s=this.normalObjects.sceneInformation.meshes.findIndex(u=>u.Material.name===n)||-1;if(s===-1)return;this.spheresInfo.sphereMaterials[e]=r,this.normalObjects.sceneInformation.meshes[s].Material=r;const i=this.spheresInfo.sphereMaterialIndices[e],o=so(r);let a=this.normalObjects.materialUniforms[i];this.device.queue.writeBuffer(a,0,o);const c=i*an*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,c,o)}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(o=>o.Material.name===r)||-1;if(n===-1)return;const s=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():lt(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():lt(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():lt(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():lt(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=s;var i=e.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||os();this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,i*4+o]},[256,256])}}rayCastOnSpheres(e,r){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const n=this.spheresInfo.sphereTransforms,s=this.canvas.getBoundingClientRect(),i=e-s.left,o=r-s.top,a=this.canvas.width/s.width,c=this.canvas.height/s.height,u=2*i*a/this.canvas.width-1,l=1-2*o*c/this.canvas.height,f=Cl(this.camera,u,l);let h=-1,m=Number.POSITIVE_INFINITY;for(let d=0;d<n.length;d++){const p=n[d],g=p.translation,B=p.scale[0],y=$d(f,g,B);y<=0||y<m&&(m=y,h=d)}return h}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const s=this.spheresInfo?.sphereMaterials?.[e];if(!s)return;this.activeContextMenu=yl({x:r,y:n},s,o=>{this.changeSphereMaterial(e,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const i=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",i))};setTimeout(()=>{document.addEventListener("mousedown",i)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e)return;Cu(n).then(i=>{const o=Tu(i,256,256),a=Mu(this.device,o);switch(r){case Be.Albedo:e.albedoTexture=o,e.albedoGPUTexture=a;break;case Be.Metalness:e.metalnessTexture=o,e.metalnessGPUTexture=a;break;case Be.Roughness:e.roughnessTexture=o,e.roughnessGPUTexture=a;break;case Be.Normal:e.normalTexture=o,e.normalGPUTexture=a;break}this.recreateBindGroup(e)}).catch(i=>{console.error("Error loading texture with name:",n,"and type:",Be[r],i)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const Sv=`// ============================== //\r
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
}`,Iv=`// ============================== //\r
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
    bvhVisualizationDepth: f32,\r
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
    instanceIndex: u32,\r
    numBoxQueries: u32,\r
    numTriangleQueries: u32,\r
};\r
\r
// ============================== //\r
struct BVHNode\r
{\r
    minB: vec3f,\r
    leftOrFirst: u32,\r
    maxB: vec3f,\r
    count: u32,\r
};\r
\r
// ============================== //\r
struct MeshInstance\r
{\r
    inverseWorldMatrix: mat4x4<f32>,\r
\r
    bvhRootIndex: u32,\r
    triOffset: u32,\r
    vertOffset: u32,\r
    matIndex: u32,\r
\r
}; // Total: 16 * 4 + 4 * 4 = 80 bytes\r
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
@group(0) @binding(5) var<storage, read> bvhNodes: array<BVHNode>;\r
@group(0) @binding(6) var<storage, read> meshInstances: array<MeshInstance>;\r
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
fn getMaterial(instance: u32) -> Material\r
{\r
    let meshInstance = meshInstances[instance];\r
    let materialIndex = meshInstance.matIndex; // Which material are we talking about ?\r
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
fn rayAABBIntersect(ray: Ray, invDir: vec3f, bMin: vec3f, bMax: vec3f, maxDist: f32) -> bool\r
{\r
    let t1 = (bMin - ray.origin) * invDir;\r
    let t2 = (bMax - ray.origin) * invDir;\r
\r
    let tmin = max(max(min(t1.x, t2.x), min(t1.y, t2.y)), min(t1.z, t2.z));\r
    let tmax = min(min(max(t1.x, t2.x), max(t1.y, t2.y)), max(t1.z, t2.z));\r
\r
    return tmax >= max(tmin, 0.0) && tmin < maxDist;\r
}\r
\r
// ============================== //\r
fn traverseBVH(ray: Ray, inst: MeshInstance, closestT: ptr<function, f32>, hit: ptr<function, Hit>, shadow: bool, instanceIndex: u32) -> bool\r
{\r
    let invDir = vec3f(1.0 / ray.direction.x, 1.0 / ray.direction.y, 1.0 / ray.direction.z);\r
\r
    var stack: array<u32, 32>;\r
    var stackPtr: i32 = 0;\r
\r
    // Push the root\r
    stack[0] = inst.bvhRootIndex;\r
    stackPtr = 1;\r
\r
    var hitAnything: bool = false;\r
    var numBoxQueries: u32 = 0u;\r
    var numTriangleQueries: u32 = 0u;\r
\r
    while (stackPtr > 0)\r
    {\r
        stackPtr = stackPtr - 1;\r
        let nodeIndex = stack[stackPtr];\r
        let node: BVHNode = bvhNodes[nodeIndex];\r
\r
        if (!rayAABBIntersect(ray, invDir, node.minB, node.maxB, (*closestT)))\r
        {\r
            continue;\r
        }\r
\r
        numBoxQueries = numBoxQueries + 1u;\r
\r
        if (node.count > 0u) // leaf\r
        {\r
            for (var i = 0u; i < node.count; i++) // triangles per se...\r
            {\r
                let localTriIdx = node.leftOrFirst + i;\r
                let globalTriIdx = localTriIdx + inst.triOffset;\r
\r
                var bary: vec3f;\r
                if (rayTriangleIntersect(ray, globalTriIdx, &bary))\r
                {\r
                    numTriangleQueries = numTriangleQueries + 1u;\r
                    if (bary.x < *closestT)\r
                    {\r
                        if (shadow) { return true; }\r
\r
                        *closestT = bary.x;\r
                        hitAnything = true;\r
\r
                        let idx0 = indices[globalTriIdx * 3u + 0u];\r
                        let idx1 = indices[globalTriIdx * 3u + 1u];\r
                        let idx2 = indices[globalTriIdx * 3u + 2u];\r
\r
                        let w = 1.0 - bary.y - bary.z;\r
                        let interpNormal = normalize(getNormal(idx0) * w + getNormal(idx1) * bary.y + getNormal(idx2) * bary.z);\r
                        let interpUV = getUV(idx0) * w + getUV(idx1) * bary.y + getUV(idx2) * bary.z;\r
\r
                        (*hit).triIndex = globalTriIdx;\r
                        (*hit).barycentricCoords = bary;\r
                        (*hit).distance = bary.x;\r
                        (*hit).normalAtHit = interpNormal;\r
                        (*hit).uvAtHit = interpUV;\r
                        (*hit).instanceIndex = instanceIndex;\r
                        (*hit).numBoxQueries = numBoxQueries;\r
                        (*hit).numTriangleQueries = numTriangleQueries;\r
                    }\r
                }\r
            }\r
        }\r
        else\r
        {\r
            // Small optimization: push farthest node first, so we traverse closest one first\r
            let leftIdx = node.leftOrFirst;\r
            let rightIdx = node.leftOrFirst + 1u;\r
\r
            let leftNode = bvhNodes[leftIdx];\r
            let rightNode = bvhNodes[rightIdx];\r
\r
            let leftCenter = (leftNode.minB + leftNode.maxB) * 0.5;\r
            let rightCenter = (rightNode.minB + rightNode.maxB) * 0.5;\r
\r
            let leftDist = dot(leftCenter - ray.origin, ray.direction);\r
            let rightDist = dot(rightCenter - ray.origin, ray.direction);\r
\r
            if (leftDist < rightDist)\r
            {\r
                stack[stackPtr] = rightIdx; stackPtr += 1;\r
                stack[stackPtr] = leftIdx;  stackPtr += 1;\r
            }\r
            else\r
            {\r
                stack[stackPtr] = leftIdx;  stackPtr += 1;\r
                stack[stackPtr] = rightIdx; stackPtr += 1;\r
            }\r
        }\r
    }\r
\r
    return hitAnything;\r
}\r
\r
// ============================== //\r
fn debugBVHTraversal(ray: Ray, targetDepth: u32) -> vec3f\r
{\r
    let numInstances = arrayLength(&meshInstances);\r
    var hitCount: u32 = 0u;\r
    var leafTriCount: u32 = 0u;\r
    var deepestHit: u32 = 0u;\r
\r
    for (var j: u32 = 0u; j < numInstances; j++)\r
    {\r
        let inst = meshInstances[j];\r
\r
        var localRay: Ray;\r
        localRay.origin = (inst.inverseWorldMatrix * vec4f(ray.origin, 1.0)).xyz;\r
        localRay.direction = (inst.inverseWorldMatrix * vec4f(ray.direction, 0.0)).xyz;\r
\r
        let invDir = vec3f(1.0 / localRay.direction.x, 1.0 / localRay.direction.y, 1.0 / localRay.direction.z);\r
\r
        var stackNode: array<u32, 64>;\r
        var stackDepth: array<u32, 64>;\r
        var stackPtr: i32 = 0;\r
        stackNode[0] = inst.bvhRootIndex;\r
        stackDepth[0] = 0u;\r
        stackPtr = 1;\r
\r
        while (stackPtr > 0)\r
        {\r
            stackPtr -= 1;\r
            let nodeIndex = stackNode[stackPtr];\r
            let depth = stackDepth[stackPtr];\r
            let node = bvhNodes[nodeIndex];\r
\r
            if (!rayAABBIntersect(localRay, invDir, node.minB, node.maxB, 1e30))\r
            {\r
                continue;\r
            }\r
\r
            if (depth > deepestHit) { deepestHit = depth; }\r
\r
            if (depth == targetDepth)\r
            {\r
                hitCount += 1u;\r
                continue;\r
            }\r
\r
            if (node.count > 0u)\r
            {\r
                hitCount += 1u;\r
                leafTriCount += node.count;\r
                continue;\r
            }\r
\r
            let leftIdx = node.leftOrFirst;\r
            let rightIdx = node.leftOrFirst + 1u;\r
            stackNode[stackPtr] = rightIdx;\r
            stackDepth[stackPtr] = depth + 1u;\r
            stackPtr += 1;\r
            stackNode[stackPtr] = leftIdx;\r
            stackDepth[stackPtr] = depth + 1u;\r
            stackPtr += 1;\r
        }\r
    }\r
\r
    if (hitCount == 0u) { return vec3f(0.0); }\r
\r
    // Heatmap: blue (1 hit) → green (few) → yellow → red (many)\r
    let t = clamp(f32(hitCount) / 8.0, 0.0, 1.0);\r
    if (t < 0.5)\r
    {\r
        return mix(vec3f(0.0, 0.0, 1.0), vec3f(0.0, 1.0, 0.0), t * 2.0);\r
    }\r
    return mix(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), (t - 0.5) * 2.0);\r
}\r
\r
// ============================== //\r
fn rayTraceOnce(ray: Ray, hit: ptr<function, Hit>, maxDist: f32, shadow: bool) -> bool\r
{\r
    let numInstances: u32 = u32(arrayLength(&meshInstances));\r
\r
    var closestT: f32 = 1e30;\r
    var hitSomething: bool = false;\r
\r
    for (var j: u32 = 0u; j < numInstances; j = j + 1u)\r
    {\r
        let meshInstance = meshInstances[j];\r
\r
        var localRay: Ray;\r
        localRay.origin = (meshInstance.inverseWorldMatrix * vec4f(ray.origin, 1.0)).xyz;\r
        localRay.direction = (meshInstance.inverseWorldMatrix * vec4f(ray.direction, 0.0)).xyz;\r
\r
        if (traverseBVH(localRay, meshInstance, &closestT, hit, shadow, j))\r
        {\r
            hitSomething = true;\r
            if (shadow)\r
            {\r
                return true;\r
            }\r
        }\r
    }\r
\r
    // Get the normal back into world space\r
    if (hitSomething)\r
    {\r
        let inst = meshInstances[(*hit).instanceIndex];\r
        let normalMatrix = transpose(mat3x3f(\r
            inst.inverseWorldMatrix[0].xyz,\r
            inst.inverseWorldMatrix[1].xyz,\r
            inst.inverseWorldMatrix[2].xyz\r
        ));\r
        (*hit).normalAtHit = normalize(normalMatrix * (*hit).normalAtHit);\r
    }\r
\r
    return hitSomething;\r
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
        alphap = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 2, 2.0).g;\r
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
    if (uniforms.mode == 1u)\r
    {\r
        let depth = u32(uniforms.bvhVisualizationDepth - 1.0);\r
        let color = debugBVHTraversal(ray, depth);\r
        return vec4f(color, 1.0);\r
    }\r
\r
    var hit: Hit;\r
    var color: vec3f = vec3f(0.0, 0.0, 0.0);\r
\r
    if (uniforms.mode == 0u)\r
    {\r
        if (rayTraceOnce(ray, &hit, maxDistance, false))\r
        {\r
            let hitPos = getHitPosition(ray, hit.distance);\r
            let material = getMaterial(hit.instanceIndex);\r
            //color = computeLambertShading(hitPos, hit.normalAtHit, material.albedo);\r
            color = computeMicrofacetBRDF(hitPos, hit.normalAtHit, material, hit.uvAtHit);\r
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
            let normal = hit.normalAtHit;\r
            color = normal * 0.5 + vec3f(0.5, 0.5, 0.5); // map from [-1,1] to [0,1]\r
        }\r
        else\r
        {\r
            color = vec3f(0.0, 0.0, 0.0);\r
        }\r
    }\r
    else if (uniforms.mode == 3u)\r
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
    else if (uniforms.mode == 4u)\r
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
}`,Pv=`struct SpotLight\r
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
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
@group(1) @binding(6)\r
var<storage, read> modelMatrix : mat4x4<f32>;\r
@group(1) @binding(7)\r
var<storage, read> normalMatrix : mat3x3<f32>;\r
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
\r
    let worldPos = modelMatrix * vec4f(input.pos, 1.0);\r
    output.pos = uniforms.projMat * uniforms.viewMat * worldPos;\r
    output.position = worldPos.xyz;\r
    output.normal = normalize(normalMatrix * input.normal);\r
    output.uv = input.uv;\r
    return output;\r
}\r
`,Ov=`struct Material {\r
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
        alphap = textureSample(roughnessTexture, materialSampler, input.uv).g; // green channel for roughness\r
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
}`,Rv=`struct SpotLight\r
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
@group(0) @binding(0)\r
var<uniform> uniforms : Uniforms;\r
\r
@group(1) @binding(6)\r
var<storage, read> modelMatrix : mat4x4<f32>;\r
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
fn vsBVH(@location(0) position: vec3f) -> VertexOutput {\r
    var output: VertexOutput;\r
    let worldPos = modelMatrix * vec4f(position, 1.0);\r
    output.pos = uniforms.projMat * uniforms.viewMat * worldPos;\r
    output.position = worldPos.xyz;\r
    output.normal = vec3f(0.0);\r
    output.uv = vec2f(0.0);\r
    return output;\r
}`,Dv=`struct VertexOutput {\r
    @builtin(position) pos : vec4f,\r
    @location(0) position: vec3f,\r
    @location(1) normal: vec3f,\r
    @location(2) uv: vec2f,\r
};\r
\r
// ============================== //\r
@fragment\r
fn fsBVH(input: VertexOutput) -> @location(0) vec4f {\r
    return vec4f(0.0, 1.0, 0.0, 1.0);\r
}`;async function Fv(t){const e=new Gv;return await e.initialize(t),e}const nc=304,sc=288,ic=80;class Gv{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mn();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Bs(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;meshesInfo;activeContextMenu=null;showBVH=!1;bvhDepth=1/0;rayTracerMode=0;constructor(){vs(this.camera,278,500,-700),gn(this.camera,0,-.3),xs(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={position:T(500,500,0),intensity:1e3,direction:T(-.5,-.9,1),coneAngle:Math.PI/6,color:T(.85,.1,.1),enabled:!0};this.lights.push(e);const r={position:T(50,500,0),intensity:1e3,direction:T(.5,-.9,1),coneAngle:Math.PI/6,color:T(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:T(275,255,0),intensity:1500,direction:T(0,0,1),coneAngle:Math.PI/6,color:T(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const e=cr();e&&(Oi("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),this.lights.forEach((r,n)=>{const s=i=>{i.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const o={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Bl(o,this.lights[n],`Edit Light ${n+1}`,a=>{this.lights[n]=a},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),bl(`Edit Light ${n+1}`,e,s)}),e.appendChild(document.createElement("br")),Oi("Show BVH",this.showBVH,e,r=>{this.showBVH=r,this.rayTracerMode=r?1:0}),e.appendChild(document.createElement("br")),Hr("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,e,r=>{this.bvhDepth=r===32?1/0:r,this.rebuildBVHBuffer()}))}async initialize(e){if(this.canvas=e,this.device=await Lt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=ft(this.device,Sv,Iv,"Ray Trace Shader Module"),this.normalObjects.shaderModule=ft(this.device,Pv,Ov,"Normal Shader Module"),this.normalObjects.bvhShaderModule=ft(this.device,Rv,Dv,"BVH Draw Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.normalObjects.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.normalObjects.bvhDrawPipelineLayout,vertex:{module:this.normalObjects.bvhShaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.bvhShaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=oo(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}async initializeBuffers(){if(this.device===null)return;const e=lt(this.device,1024,32),r=this.meshesInfo?.meshMaterials||[],n=await Wy(r);this.normalObjects.sceneInformation=n,this.meshesInfo=n.additionalInfo;const s=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let w=0;w<s;w++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+w,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[w],0,n.meshes[w].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+w,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[w],0,n.meshes[w].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+w,size:an*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const K=n.meshes[w].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[w],0,K),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+w,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[w]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[w].Material.albedoGPUTexture?n.meshes[w].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[w].Material.metalnessGPUTexture?n.meshes[w].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[w].Material.roughnessGPUTexture?n.meshes[w].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[w].Material.normalGPUTexture?n.meshes[w].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[w]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[w]}}]}));const z=n.meshes[w].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+w,size:z.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[w],0,z);const N=n.meshes[w].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+w,size:N.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[w],0,N);const re=n.meshes[w].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+w,size:re.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[w],0,re);const le=n.meshes[w].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+w,size:le.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[w],0,le)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:nc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const i=this.getBVHGeometry(1/0);this.normalObjects.bvhLineGeometryBuffers=[];for(let w=0;w<i.length;w++)this.normalObjects.bvhLineGeometryBuffers[w]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${w}`,size:i[w].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[w],0,i[w]);const o=[],a=[],c=[],u=[],l=[],f=[];let h=0,m=0,d=0,p=0,g=0;for(let w=0;w<s;w++){let K=n.meshes[w];o.push(...K.getVertexData()),a.push(...K.getNormalData()),c.push(...K.getUVData());const z=K.getReorderedIndexData32();for(let be of z)u.push(be+m);const{data:N,numNodes:re}=K.getFlattenedBVHData(g);f.push(N),h+=N.byteLength;const le=new ArrayBuffer(ic),ee=new Float32Array(le),te=new Uint32Array(le);ee.set(K.GetFlatInverseWorldMatrix(),0),te[16]=g,te[17]=d,te[18]=p,te[19]=w,l.push(...ee),m+=K.getNumVertices(),d+=K.getNumTriangles(),p+=K.getNumVertices(),g+=re}const B=new Float32Array(o),y=new Float32Array(a),M=new Float32Array(c),A=new Uint32Array(u),C=new Float32Array(l),S=new Uint8Array(h);let x=0;for(let w of f)S.set(new Uint8Array(w),x),x+=w.byteLength;this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:sc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:B.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,B),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,y),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:M.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,M),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:A.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,A),this.rayTracerObjects.bvhNodesStorageBuffer=this.device.createBuffer({label:"Ray Tracer BVH Nodes Storage Buffer",size:S.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.bvhNodesStorageBuffer,0,S),this.rayTracerObjects.meshInstancesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Mesh Instances Storage Buffer",size:C.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,0,C),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.bvhNodesStorageBuffer}},{binding:6,resource:{buffer:this.rayTracerObjects.meshInstancesStorageBuffer}}]});const P=n.meshes.map(w=>w.Material),O=fl(P);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:O.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,O);const _=4;var V=this.meshesInfo?.meshMaterials.filter(w=>w.albedoTexture||w.metalnessTexture||w.roughnessTexture||w.normalTexture).length||0;V===0&&(V=1);const H=1024,L=1024;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[H,L,_*V],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const I=os(1024,32);for(let w=0;w<V;w++){const K=this.meshesInfo?.meshMaterials[w].albedoImage?this.meshesInfo.meshMaterials[w].albedoImage:I,z=this.meshesInfo?.meshMaterials[w].metalnessImage?this.meshesInfo.meshMaterials[w].metalnessImage:I,N=this.meshesInfo?.meshMaterials[w].roughnessImage?this.meshesInfo.meshMaterials[w].roughnessImage:I,re=this.meshesInfo?.meshMaterials[w].normalImage?this.meshesInfo.meshMaterials[w].normalImage:I;this.device.queue.copyExternalImageToTexture({source:K},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*_]},[H,L]),this.device.queue.copyExternalImageToTexture({source:z},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*_+1]},[H,L]),this.device.queue.copyExternalImageToTexture({source:N},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*_+2]},[H,L]),this.device.queue.copyExternalImageToTexture({source:re},{texture:this.rayTracerObjects.textureArray,origin:[0,0,w*_+3]},[H,L])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnMeshes(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,s=.05;Ee(this.camera,r*s,-n*s),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Cs(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Ee(this.camera,-1,0),this.keysPressed.has("arrowright")&&Ee(this.camera,1,0),this.keysPressed.has("arrowup")&&Ee(this.camera,0,1),this.keysPressed.has("arrowdown")&&Ee(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers();const e=this.meshesInfo.meshMaterials[0];this.fetchTextureForMaterial(e,Be.Albedo,"meshes/dragon/textures/DefaultMaterial_baseColor.jpeg"),this.fetchTextureForMaterial(e,Be.Metalness,"meshes/dragon/textures/DefaultMaterial_metallicRoughness.png"),this.fetchTextureForMaterial(e,Be.Roughness,"meshes/dragon/textures/DefaultMaterial_metallicRoughness.png"),this.fetchTextureForMaterial(e,Be.Normal,"meshes/dragon/textures/DefaultMaterial_normal.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(sc),r=new Float32Array(e),n=new Uint32Array(e);r.set(Ms(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracerMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=this.bvhDepth;for(let s=0;s<3&&!(s>=this.lights.length);s++){const i=this.lights[s],o=24+s*12;r.set(i.position,o),r[o+3]=i.intensity,r.set(i.direction,o+4),r[o+7]=i.coneAngle,r.set(i.color,o+8),r[o+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new ArrayBuffer(nc),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const s=this.lights[n],i=40+n*12;r.set(s.position,i),r[i+3]=s.intensity,r.set(s.direction,i+4),r[i+7]=s.coneAngle,r.set(s.color,i+8),r[i+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){if(4>=this.normalObjects.sceneInformation.meshes.length)return;const r=this.normalObjects.sceneInformation.meshes[4],n=ln();dl(n,0,.5,0),r.RotateMesh(n),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[4],0,r.GetFlatWorldMatrix()),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[4],0,r.GetFlatNormalMatrix());const s=r.GetFlatInverseWorldMatrix();this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,4*ic+0,s)}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=s=>{if(this.canvas===null||this.device===null||this.context===null)return;const i=s-e;e=s;const o=performance.now();this.handleInput(),this.updateUniforms(),this.animate();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=l.beginRenderPass(u);if(this.useRaytracing)f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.setBindGroup(1,this.rayTracerObjects.materialBindGroup),f.draw(6);else{f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.sceneInformation.meshes.length;d++)f.setBindGroup(1,this.normalObjects.materialBindGroups[d]),f.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),f.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),f.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),f.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),f.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0);if(this.showBVH){f.setPipeline(this.normalObjects.bvhDrawPipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.bvhLineGeometryBuffers.length;d++)f.setBindGroup(1,this.normalObjects.materialBindGroups[d]),f.setVertexBuffer(0,this.normalObjects.bvhLineGeometryBuffers[d]),f.draw(this.normalObjects.bvhLineCounts[d])}}f.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=l.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/i).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(s=>{for(const i of s){const o=i.contentBoxSize[0].inlineSize,a=i.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),As(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),pn(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeMeshMaterial(e,r){if(e<0||e>=(this.meshesInfo?.meshIndices.length||0))return;const n=r.name,s=this.normalObjects.sceneInformation.meshes.findIndex(u=>u.Material.name===n)||-1;if(s===-1)return;this.meshesInfo.meshMaterials[e]=r,this.normalObjects.sceneInformation.meshes[s].Material=r;const i=this.meshesInfo.meshIndices[e],o=so(r);let a=this.normalObjects.materialUniforms[i];this.device.queue.writeBuffer(a,0,o);const c=i*an*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,c,o)}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(o=>o.Material.name===r)||-1;if(n===-1)return;const s=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():lt(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():lt(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():lt(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():lt(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=s;var i=e.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||os(1024,32);this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,i*4+o]},[1024,1024])}}getBVHGeometry(e){if(this.normalObjects.sceneInformation.meshes.length===0)return[];this.normalObjects.bvhLineCounts=[];const r=[];for(let n=0;n<this.normalObjects.sceneInformation.meshes.length;n++){const{vertexData:s,count:i}=this.normalObjects.sceneInformation.meshes[n].GetBVHGeometry(e);r.push(s),this.normalObjects.bvhLineCounts.push(i)}return r}rebuildBVHBuffer(){if(this.device===null)return;const e=this.getBVHGeometry(this.bvhDepth);for(let r=0;r<e.length;r++)this.normalObjects.bvhLineGeometryBuffers[r]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${r}`,size:e[r].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[r],0,e[r])}rayCastOnMeshes(e,r){if(this.canvas===null||this.camera===null||this.meshesInfo===null)return-1;const s=this.meshesInfo.meshIndices.map(p=>this.normalObjects.sceneInformation.meshes[p]),i=this.canvas.getBoundingClientRect(),o=e-i.left,a=r-i.top,c=this.canvas.width/i.width,u=this.canvas.height/i.height,l=2*o*c/this.canvas.width-1,f=1-2*a*u/this.canvas.height,h=Cl(this.camera,l,f);let m=-1,d=Number.POSITIVE_INFINITY;for(let p=0;p<s.length;p++){const B=s[p].intersectMeshWithRay(h,this.bvhDepth);B<0||B<d&&(d=B,m=p)}return m}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const s=this.meshesInfo?.meshMaterials?.[e];if(!s)return;this.activeContextMenu=yl({x:r,y:n},s,o=>{this.changeMeshMaterial(e,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const i=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",i))};setTimeout(()=>{document.addEventListener("mousedown",i)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e){console.error("Material is undefined when trying to fetch texture with name:",n,"and type:",Be[r]);return}Cu(n).then(i=>{const o=Tu(i,1024,1024),a=Mu(this.device,o);switch(r){case Be.Albedo:e.albedoTexture=o,e.albedoGPUTexture=a;break;case Be.Metalness:e.metalnessTexture=o,e.metalnessGPUTexture=a;break;case Be.Roughness:e.roughnessTexture=o,e.roughnessGPUTexture=a;break;case Be.Normal:e.normalTexture=o,e.normalGPUTexture=a;break}this.recreateBindGroup(e)}).catch(i=>{console.error("Error loading texture with name:",n,"and type:",Be[r],i)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const _v={class:"flex justify-center items-center w-full h-full"},Uv={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},Lv=["onClick","onMouseenter"],Nv={id:"utils-wrapper",class:"absolute bottom-0 right-0 flex flex-col items-end"},jv={id:"utils",class:"p-1 bg-gray-700"},Hv=xf({__name:"App",setup(t){const e=Xt(null),r=Xt(null),n=Xt(!1),s=[Ed,Od,zd,Xy,sB,KB,ov,fv,Bv,Ev,Fv],i=s.length,o=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Video","Game","Ray Trace","Transparency","PBR","BVH"],a=Xt(null),c=Xt(0),u=Xt(0),l=Xt(!0);async function f(B){if(!n.value){if(n.value=!0,r.value&&typeof r.value.cleanup=="function"&&(await r.value.cleanup(),r.value=null),e.value){const y=s[B-1];y&&(r.value=await y(e.value))}n.value=!1}}function h(B,y){a.value=B;const M=y.currentTarget,A=M.parentElement;if(A){const C=A.getBoundingClientRect(),S=M.getBoundingClientRect();c.value=S.top-C.top,u.value=S.height}}function m(){a.value=null}const d=wi(()=>a.value!==null?o[a.value-1]:""),p=wi(()=>a.value===null?{top:c.value+"px",height:u.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:c.value+"px",height:u.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});function g(){l.value=!l.value}return Nc(()=>{gl(),f(8)}),(B,y)=>(Vs(),ks("div",_v,[yt("div",Uv,[(Vs(!0),ks(vt,null,Gf(Ic(i),M=>(Vs(),ks("button",{key:M,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>f(M),onKeydown:[y[0]||(y[0]=ra(ta(()=>{},["prevent"]),["space"])),y[1]||(y[1]=ra(ta(()=>{},["prevent"]),["enter"]))],onMouseenter:A=>h(M,A),onMouseleave:m},Rn(M),41,Lv))),128))]),yt("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:e,class:"w-[90%] h-full"},null,512),y[2]||(y[2]=yt("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),yt("div",Nv,[yt("button",{onClick:g,class:"m-0 p-0 bg-white text-black flex items-center"},[yt("img",{src:ed,class:en([l.value?"rotate-90":"-rotate-90","w-6 h-6 transition-transform duration-200"])},null,2),ol(" "+Rn(l.value?"Hide":"Show")+" Utils ",1)]),Bf(yt("pre",jv,null,512),[[Oh,l.value]])]),yt("div",{class:en(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",a.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:fs(p.value)},Rn(d.value),7)]))}}),Vv=(t,e)=>{const r=t.__vccOpts||t;for(const[n,s]of e)r[n]=s;return r},kv=Vv(Hv,[["__scopeId","data-v-b0e71559"]]);Yh(kv).mount("#app");
