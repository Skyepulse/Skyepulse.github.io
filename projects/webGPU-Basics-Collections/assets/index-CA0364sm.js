(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xs(t){const e=Object.create(null);for(const r of t.split(","))e[r]=1;return r=>r in e}const be={},Ir=[],Mt=()=>{},_u=()=>!1,Ti=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qs=t=>t.startsWith("onUpdate:"),je=Object.assign,$s=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},Uu=Object.prototype.hasOwnProperty,ce=(t,e)=>Uu.call(t,e),Z=Array.isArray,Or=t=>Ci(t)==="[object Map]",vc=t=>Ci(t)==="[object Set]",te=t=>typeof t=="function",Pe=t=>typeof t=="string",rr=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",xc=t=>(Ee(t)||te(t))&&te(t.then)&&te(t.catch),Bc=Object.prototype.toString,Ci=t=>Bc.call(t),Fu=t=>Ci(t).slice(8,-1),Ac=t=>Ci(t)==="[object Object]",Zs=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nn=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mi=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},Lu=/-(\w)/g,Zt=Mi(t=>t.replace(Lu,(e,r)=>r?r.toUpperCase():"")),Nu=/\B([A-Z])/g,nr=Mi(t=>t.replace(Nu,"-$1").toLowerCase()),Tc=Mi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hi=Mi(t=>t?`on${Tc(t)}`:""),Qt=(t,e)=>!Object.is(t,e),ki=(t,...e)=>{for(let r=0;r<t.length;r++)t[r](...e)},ws=(t,e,r,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:r})},ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ho;const Ei=()=>Ho||(Ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jr(t){if(Z(t)){const e={};for(let r=0;r<t.length;r++){const n=t[r],i=Pe(n)?zu(n):jr(n);if(i)for(const s in i)e[s]=i[s]}return e}else if(Pe(t)||Ee(t))return t}const Vu=/;(?![^(]*\))/g,Hu=/:([^]+)/,ku=/\/\*[^]*?\*\//g;function zu(t){const e={};return t.replace(ku,"").split(Vu).forEach(r=>{if(r){const n=r.split(Hu);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function pn(t){let e="";if(Pe(t))e=t;else if(Z(t))for(let r=0;r<t.length;r++){const n=pn(t[r]);n&&(e+=n+" ")}else if(Ee(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const Ju="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wu=Xs(Ju);function Cc(t){return!!t||t===""}const Mc=t=>!!(t&&t.__v_isRef===!0),Rr=t=>Pe(t)?t:t==null?"":Z(t)||Ee(t)&&(t.toString===Bc||!te(t.toString))?Mc(t)?Rr(t.value):JSON.stringify(t,Ec,2):String(t),Ec=(t,e)=>Mc(e)?Ec(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[n,i],s)=>(r[zi(n,s)+" =>"]=i,r),{})}:vc(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>zi(r))}:rr(e)?zi(e):Ee(e)&&!Z(e)&&!Ac(e)?String(e):e,zi=(t,e="")=>{var r;return rr(t)?`Symbol(${(r=t.description)!=null?r:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class qu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qe,!e&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){const r=qe;try{return qe=this,e()}finally{qe=r}}}on(){++this._on===1&&(this.prevScope=qe,qe=this)}off(){this._on>0&&--this._on===0&&(qe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ku(){return qe}let ve;const Ji=new WeakSet;class wc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qe&&qe.active&&qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ji.has(this)&&(Ji.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ko(this),Ic(this);const e=ve,r=dt;ve=this,dt=!0;try{return this.fn()}finally{Oc(this),ve=e,dt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ro(e);this.deps=this.depsTail=void 0,ko(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ji.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ss(this)&&this.run()}get dirty(){return Ss(this)}}let Sc=0,sn,on;function Pc(t,e=!1){if(t.flags|=8,e){t.next=on,on=t;return}t.next=sn,sn=t}function eo(){Sc++}function to(){if(--Sc>0)return;if(on){let e=on;for(on=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let t;for(;sn;){let e=sn;for(sn=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=r}}if(t)throw t}function Ic(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Oc(t){let e,r=t.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),ro(n),Yu(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}t.deps=e,t.depsTail=r}function Ss(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gn)||(t.globalVersion=gn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ss(t))))return;t.flags|=2;const e=t.dep,r=ve,n=dt;ve=t,dt=!0;try{Ic(t);const i=t.fn(t._value);(e.version===0||Qt(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ve=r,dt=n,Oc(t),t.flags&=-3}}function ro(t,e=!1){const{dep:r,prevSub:n,nextSub:i}=t;if(n&&(n.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=n,t.nextSub=void 0),r.subs===t&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)ro(s,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function Yu(t){const{prevDep:e,nextDep:r}=t;e&&(e.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=e,t.nextDep=void 0)}let dt=!0;const Gc=[];function Ft(){Gc.push(dt),dt=!1}function Lt(){const t=Gc.pop();dt=t===void 0?!0:t}function ko(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const r=ve;ve=void 0;try{e()}finally{ve=r}}}let gn=0;class Xu{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class no{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ve||!dt||ve===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==ve)r=this.activeLink=new Xu(ve,this),ve.deps?(r.prevDep=ve.depsTail,ve.depsTail.nextDep=r,ve.depsTail=r):ve.deps=ve.depsTail=r,Dc(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=ve.depsTail,r.nextDep=void 0,ve.depsTail.nextDep=r,ve.depsTail=r,ve.deps===r&&(ve.deps=n)}return r}trigger(e){this.version++,gn++,this.notify(e)}notify(e){eo();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{to()}}}function Dc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Dc(n)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const Ps=new WeakMap,fr=Symbol(""),Is=Symbol(""),bn=Symbol("");function Ue(t,e,r){if(dt&&ve){let n=Ps.get(t);n||Ps.set(t,n=new Map);let i=n.get(r);i||(n.set(r,i=new no),i.map=n,i.key=r),i.track()}}function Rt(t,e,r,n,i,s){const o=Ps.get(t);if(!o){gn++;return}const a=c=>{c&&c.trigger()};if(eo(),e==="clear")o.forEach(a);else{const c=Z(t),l=c&&Zs(r);if(c&&r==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===bn||!rr(h)&&h>=u)&&a(f)})}else switch((r!==void 0||o.has(void 0))&&a(o.get(r)),l&&a(o.get(bn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(fr)),Or(t)&&a(o.get(Is)));break;case"delete":c||(a(o.get(fr)),Or(t)&&a(o.get(Is)));break;case"set":Or(t)&&a(o.get(fr));break}}to()}function vr(t){const e=ae(t);return e===t?e:(Ue(e,"iterate",bn),ct(t)?e:e.map(Ge))}function wi(t){return Ue(t=ae(t),"iterate",bn),t}const Qu={__proto__:null,[Symbol.iterator](){return Wi(this,Symbol.iterator,Ge)},concat(...t){return vr(this).concat(...t.map(e=>Z(e)?vr(e):e))},entries(){return Wi(this,"entries",t=>(t[1]=Ge(t[1]),t))},every(t,e){return wt(this,"every",t,e,void 0,arguments)},filter(t,e){return wt(this,"filter",t,e,r=>r.map(Ge),arguments)},find(t,e){return wt(this,"find",t,e,Ge,arguments)},findIndex(t,e){return wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wt(this,"findLast",t,e,Ge,arguments)},findLastIndex(t,e){return wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return qi(this,"includes",t)},indexOf(...t){return qi(this,"indexOf",t)},join(t){return vr(this).join(t)},lastIndexOf(...t){return qi(this,"lastIndexOf",t)},map(t,e){return wt(this,"map",t,e,void 0,arguments)},pop(){return Xr(this,"pop")},push(...t){return Xr(this,"push",t)},reduce(t,...e){return zo(this,"reduce",t,e)},reduceRight(t,...e){return zo(this,"reduceRight",t,e)},shift(){return Xr(this,"shift")},some(t,e){return wt(this,"some",t,e,void 0,arguments)},splice(...t){return Xr(this,"splice",t)},toReversed(){return vr(this).toReversed()},toSorted(t){return vr(this).toSorted(t)},toSpliced(...t){return vr(this).toSpliced(...t)},unshift(...t){return Xr(this,"unshift",t)},values(){return Wi(this,"values",Ge)}};function Wi(t,e,r){const n=wi(t),i=n[e]();return n!==t&&!ct(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=r(s.value)),s}),i}const $u=Array.prototype;function wt(t,e,r,n,i,s){const o=wi(t),a=o!==t&&!ct(t),c=o[e];if(c!==$u[e]){const f=c.apply(t,s);return a?Ge(f):f}let l=r;o!==t&&(a?l=function(f,h){return r.call(this,Ge(f),h,t)}:r.length>2&&(l=function(f,h){return r.call(this,f,h,t)}));const u=c.call(o,l,n);return a&&i?i(u):u}function zo(t,e,r,n){const i=wi(t);let s=r;return i!==t&&(ct(t)?r.length>3&&(s=function(o,a,c){return r.call(this,o,a,c,t)}):s=function(o,a,c){return r.call(this,o,Ge(a),c,t)}),i[e](s,...n)}function qi(t,e,r){const n=ae(t);Ue(n,"iterate",bn);const i=n[e](...r);return(i===-1||i===!1)&&ao(r[0])?(r[0]=ae(r[0]),n[e](...r)):i}function Xr(t,e,r=[]){Ft(),eo();const n=ae(t)[e].apply(t,r);return to(),Lt(),n}const Zu=Xs("__proto__,__v_isRef,__isVue"),_c=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rr));function ef(t){rr(t)||(t=String(t));const e=ae(this);return Ue(e,"has",t),e.hasOwnProperty(t)}class Uc{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,n){if(r==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?ff:jc:s?Nc:Lc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Z(e);if(!i){let c;if(o&&(c=Qu[r]))return c;if(r==="hasOwnProperty")return ef}const a=Reflect.get(e,r,Ne(e)?e:n);return(rr(r)?_c.has(r):Zu(r))||(i||Ue(e,"get",r),s)?a:Ne(a)?o&&Zs(r)?a:a.value:Ee(a)?i?Vc(a):so(a):a}}class Fc extends Uc{constructor(e=!1){super(!1,e)}set(e,r,n,i){let s=e[r];if(!this._isShallow){const c=er(s);if(!ct(n)&&!er(n)&&(s=ae(s),n=ae(n)),!Z(e)&&Ne(s)&&!Ne(n))return c?!1:(s.value=n,!0)}const o=Z(e)&&Zs(r)?Number(r)<e.length:ce(e,r),a=Reflect.set(e,r,n,Ne(e)?e:i);return e===ae(i)&&(o?Qt(n,s)&&Rt(e,"set",r,n):Rt(e,"add",r,n)),a}deleteProperty(e,r){const n=ce(e,r);e[r];const i=Reflect.deleteProperty(e,r);return i&&n&&Rt(e,"delete",r,void 0),i}has(e,r){const n=Reflect.has(e,r);return(!rr(r)||!_c.has(r))&&Ue(e,"has",r),n}ownKeys(e){return Ue(e,"iterate",Z(e)?"length":fr),Reflect.ownKeys(e)}}class tf extends Uc{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const rf=new Fc,nf=new tf,sf=new Fc(!0);const Os=t=>t,Nn=t=>Reflect.getPrototypeOf(t);function of(t,e,r){return function(...n){const i=this.__v_raw,s=ae(i),o=Or(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...n),u=r?Os:e?si:Ge;return!e&&Ue(s,"iterate",c?Is:fr),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function af(t,e){const r={get(i){const s=this.__v_raw,o=ae(s),a=ae(i);t||(Qt(i,a)&&Ue(o,"get",i),Ue(o,"get",a));const{has:c}=Nn(o),l=e?Os:t?si:Ge;if(c.call(o,i))return l(s.get(i));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Ue(ae(i),"iterate",fr),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=ae(s),a=ae(i);return t||(Qt(i,a)&&Ue(o,"has",i),Ue(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,c=ae(a),l=e?Os:t?si:Ge;return!t&&Ue(c,"iterate",fr),a.forEach((u,f)=>i.call(s,l(u),l(f),o))}};return je(r,t?{add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear")}:{add(i){!e&&!ct(i)&&!er(i)&&(i=ae(i));const s=ae(this);return Nn(s).has.call(s,i)||(s.add(i),Rt(s,"add",i,i)),this},set(i,s){!e&&!ct(s)&&!er(s)&&(s=ae(s));const o=ae(this),{has:a,get:c}=Nn(o);let l=a.call(o,i);l||(i=ae(i),l=a.call(o,i));const u=c.call(o,i);return o.set(i,s),l?Qt(s,u)&&Rt(o,"set",i,s):Rt(o,"add",i,s),this},delete(i){const s=ae(this),{has:o,get:a}=Nn(s);let c=o.call(s,i);c||(i=ae(i),c=o.call(s,i)),a&&a.call(s,i);const l=s.delete(i);return c&&Rt(s,"delete",i,void 0),l},clear(){const i=ae(this),s=i.size!==0,o=i.clear();return s&&Rt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=of(i,t,e)}),r}function io(t,e){const r=af(t,e);return(n,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?n:Reflect.get(ce(r,i)&&i in n?r:n,i,s)}const cf={get:io(!1,!1)},lf={get:io(!1,!0)},uf={get:io(!0,!1)};const Lc=new WeakMap,Nc=new WeakMap,jc=new WeakMap,ff=new WeakMap;function hf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(t){return t.__v_skip||!Object.isExtensible(t)?0:hf(Fu(t))}function so(t){return er(t)?t:oo(t,!1,rf,cf,Lc)}function mf(t){return oo(t,!1,sf,lf,Nc)}function Vc(t){return oo(t,!0,nf,uf,jc)}function oo(t,e,r,n,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=df(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?n:r);return i.set(t,a),a}function Gr(t){return er(t)?Gr(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function ct(t){return!!(t&&t.__v_isShallow)}function ao(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function pf(t){return!ce(t,"__v_skip")&&Object.isExtensible(t)&&ws(t,"__v_skip",!0),t}const Ge=t=>Ee(t)?so(t):t,si=t=>Ee(t)?Vc(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function xt(t){return gf(t,!1)}function gf(t,e){return Ne(t)?t:new bf(t,e)}class bf{constructor(e,r){this.dep=new no,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:ae(e),this._value=r?e:Ge(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,n=this.__v_isShallow||ct(e)||er(e);e=n?e:ae(e),Qt(e,r)&&(this._rawValue=e,this._value=n?e:Ge(e),this.dep.trigger())}}function Hc(t){return Ne(t)?t.value:t}const yf={get:(t,e,r)=>e==="__v_raw"?t:Hc(Reflect.get(t,e,r)),set:(t,e,r,n)=>{const i=t[e];return Ne(i)&&!Ne(r)?(i.value=r,!0):Reflect.set(t,e,r,n)}};function kc(t){return Gr(t)?t:new Proxy(t,yf)}class vf{constructor(e,r,n){this.fn=e,this.setter=r,this._value=void 0,this.dep=new no(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return Pc(this,!0),!0}get value(){const e=this.dep.track();return Rc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xf(t,e,r=!1){let n,i;return te(t)?n=t:(n=t.get,i=t.set),new vf(n,i,r)}const Vn={},oi=new WeakMap;let ar;function Bf(t,e=!1,r=ar){if(r){let n=oi.get(r);n||oi.set(r,n=[]),n.push(t)}}function Af(t,e,r=be){const{immediate:n,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=r,l=g=>i?g:ct(g)||i===!1||i===0?Gt(g,1):Gt(g);let u,f,h,m,d=!1,p=!1;if(Ne(t)?(f=()=>t.value,d=ct(t)):Gr(t)?(f=()=>l(t),d=!0):Z(t)?(p=!0,d=t.some(g=>Gr(g)||ct(g)),f=()=>t.map(g=>{if(Ne(g))return g.value;if(Gr(g))return l(g);if(te(g))return c?c(g,2):g()})):te(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){Ft();try{h()}finally{Lt()}}const g=ar;ar=u;try{return c?c(t,3,[m]):t(m)}finally{ar=g}}:f=Mt,e&&i){const g=f,M=i===!0?1/0:i;f=()=>Gt(g(),M)}const b=Ku(),y=()=>{u.stop(),b&&b.active&&$s(b.effects,u)};if(s&&e){const g=e;e=(...M)=>{g(...M),y()}}let x=p?new Array(t.length).fill(Vn):Vn;const C=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const M=u.run();if(i||d||(p?M.some((E,B)=>Qt(E,x[B])):Qt(M,x))){h&&h();const E=ar;ar=u;try{const B=[M,x===Vn?void 0:p&&x[0]===Vn?[]:x,m];x=M,c?c(e,3,B):e(...B)}finally{ar=E}}}else u.run()};return a&&a(C),u=new wc(f),u.scheduler=o?()=>o(C,!1):C,m=g=>Bf(g,!1,u),h=u.onStop=()=>{const g=oi.get(u);if(g){if(c)c(g,4);else for(const M of g)M();oi.delete(u)}},e?n?C(!0):x=u.run():o?o(C.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function Gt(t,e=1/0,r){if(e<=0||!Ee(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),e--,Ne(t))Gt(t.value,e,r);else if(Z(t))for(let n=0;n<t.length;n++)Gt(t[n],e,r);else if(vc(t)||Or(t))t.forEach(n=>{Gt(n,e,r)});else if(Ac(t)){for(const n in t)Gt(t[n],e,r);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&Gt(t[n],e,r)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function En(t,e,r,n){try{return n?t(...n):t()}catch(i){Si(i,e,r)}}function Et(t,e,r,n){if(te(t)){const i=En(t,e,r,n);return i&&xc(i)&&i.catch(s=>{Si(s,e,r)}),i}if(Z(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Et(t[s],e,r,n));return i}}function Si(t,e,r,n=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||be;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(s){Ft(),En(s,null,10,[t,c,l]),Lt();return}}Tf(t,r,i,n,o)}function Tf(t,e,r,n=!0,i=!1){if(i)throw t;console.error(t)}const He=[];let Bt=-1;const Dr=[];let Jt=null,Mr=0;const zc=Promise.resolve();let ai=null;function Jc(t){const e=ai||zc;return t?e.then(this?t.bind(this):t):e}function Cf(t){let e=Bt+1,r=He.length;for(;e<r;){const n=e+r>>>1,i=He[n],s=yn(i);s<t||s===t&&i.flags&2?e=n+1:r=n}return e}function co(t){if(!(t.flags&1)){const e=yn(t),r=He[He.length-1];!r||!(t.flags&2)&&e>=yn(r)?He.push(t):He.splice(Cf(e),0,t),t.flags|=1,Wc()}}function Wc(){ai||(ai=zc.then(Kc))}function Mf(t){Z(t)?Dr.push(...t):Jt&&t.id===-1?Jt.splice(Mr+1,0,t):t.flags&1||(Dr.push(t),t.flags|=1),Wc()}function Jo(t,e,r=Bt+1){for(;r<He.length;r++){const n=He[r];if(n&&n.flags&2){if(t&&n.id!==t.uid)continue;He.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function qc(t){if(Dr.length){const e=[...new Set(Dr)].sort((r,n)=>yn(r)-yn(n));if(Dr.length=0,Jt){Jt.push(...e);return}for(Jt=e,Mr=0;Mr<Jt.length;Mr++){const r=Jt[Mr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Jt=null,Mr=0}}const yn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kc(t){try{for(Bt=0;Bt<He.length;Bt++){const e=He[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),En(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<He.length;Bt++){const e=He[Bt];e&&(e.flags&=-2)}Bt=-1,He.length=0,qc(),ai=null,(He.length||Dr.length)&&Kc()}}let at=null,Yc=null;function ci(t){const e=at;return at=t,Yc=t&&t.type.__scopeId||null,e}function Ef(t,e=at,r){if(!e||t._n)return t;const n=(...i)=>{n._d&&ea(-1);const s=ci(e);let o;try{o=t(...i)}finally{ci(s),n._d&&ea(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function wf(t,e){if(at===null)return t;const r=Ri(at),n=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,c=be]=e[i];s&&(te(s)&&(s={mounted:s,updated:s}),s.deep&&Gt(o),n.push({dir:s,instance:r,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ir(t,e,r,n){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[n];c&&(Ft(),Et(c,r,8,[t.el,a,t,e]),Lt())}}const Sf=Symbol("_vte"),Pf=t=>t.__isTeleport;function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Xc(t,e){return te(t)?je({name:t.name},e,{setup:t}):t}function Qc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function an(t,e,r,n,i=!1){if(Z(t)){t.forEach((d,p)=>an(d,e&&(Z(e)?e[p]:e),r,n,i));return}if(cn(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&an(t,e,r,n.component.subTree);return}const s=n.shapeFlag&4?Ri(n.component):n.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,f=a.setupState,h=ae(f),m=f===be?()=>!1:d=>ce(h,d);if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,m(l)&&(f[l]=null)):Ne(l)&&(l.value=null)),te(c))En(c,a,12,[o,u]);else{const d=Pe(c),p=Ne(c);if(d||p){const b=()=>{if(t.f){const y=d?m(c)?f[c]:u[c]:c.value;i?Z(y)&&$s(y,s):Z(y)?y.includes(s)||y.push(s):d?(u[c]=[s],m(c)&&(f[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,m(c)&&(f[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ze(b,r)):b()}}}Ei().requestIdleCallback;Ei().cancelIdleCallback;const cn=t=>!!t.type.__asyncLoader,$c=t=>t.type.__isKeepAlive;function If(t,e){Zc(t,"a",e)}function Of(t,e){Zc(t,"da",e)}function Zc(t,e,r=ke){const n=t.__wdc||(t.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pi(e,n,r),r){let i=r.parent;for(;i&&i.parent;)$c(i.parent.vnode)&&Rf(n,e,r,i),i=i.parent}}function Rf(t,e,r,n){const i=Pi(e,t,n,!0);tl(()=>{$s(n[e],i)},r)}function Pi(t,e,r=ke,n=!1){if(r){const i=r[t]||(r[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ft();const a=wn(r),c=Et(e,r,t,o);return a(),Lt(),c});return n?i.unshift(s):i.push(s),s}}const Vt=t=>(e,r=ke)=>{(!xn||t==="sp")&&Pi(t,(...n)=>e(...n),r)},Gf=Vt("bm"),el=Vt("m"),Df=Vt("bu"),_f=Vt("u"),Uf=Vt("bum"),tl=Vt("um"),Ff=Vt("sp"),Lf=Vt("rtg"),Nf=Vt("rtc");function jf(t,e=ke){Pi("ec",t,e)}const Vf=Symbol.for("v-ndc");function rl(t,e,r,n){let i;const s=r,o=Z(t);if(o||Pe(t)){const a=o&&Gr(t);let c=!1,l=!1;a&&(c=!ct(t),l=er(t),t=wi(t)),i=new Array(t.length);for(let u=0,f=t.length;u<f;u++)i[u]=e(c?l?si(Ge(t[u])):Ge(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];i[c]=e(t[u],u,c,s)}}else i=[];return i}const Rs=t=>t?Tl(t)?Ri(t):Rs(t.parent):null,ln=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rs(t.parent),$root:t=>Rs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>il(t),$forceUpdate:t=>t.f||(t.f=()=>{co(t.update)}),$nextTick:t=>t.n||(t.n=Jc.bind(t.proxy)),$watch:t=>lh.bind(t)}),Ki=(t,e)=>t!==be&&!t.__isScriptSetup&&ce(t,e),Hf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return r[e];case 3:return s[e]}else{if(Ki(n,e))return o[e]=1,n[e];if(i!==be&&ce(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,s[e];if(r!==be&&ce(r,e))return o[e]=4,r[e];Gs&&(o[e]=0)}}const u=ln[e];let f,h;if(u)return e==="$attrs"&&Ue(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(r!==be&&ce(r,e))return o[e]=4,r[e];if(h=c.config.globalProperties,ce(h,e))return h[e]},set({_:t},e,r){const{data:n,setupState:i,ctx:s}=t;return Ki(i,e)?(i[e]=r,!0):n!==be&&ce(n,e)?(n[e]=r,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!r[o]||t!==be&&ce(t,o)||Ki(e,o)||(a=s[0])&&ce(a,o)||ce(n,o)||ce(ln,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:ce(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function Wo(t){return Z(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}let Gs=!0;function kf(t){const e=il(t),r=t.proxy,n=t.ctx;Gs=!1,e.beforeCreate&&qo(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:d,activated:p,deactivated:b,beforeDestroy:y,beforeUnmount:x,destroyed:C,unmounted:g,render:M,renderTracked:E,renderTriggered:B,errorCaptured:P,serverPrefetch:S,expose:G,inheritAttrs:U,components:j,directives:V,filters:O}=e;if(l&&zf(l,n,null),o)for(const D in o){const F=o[D];te(F)&&(n[D]=F.bind(r))}if(i){const D=i.call(r,r);Ee(D)&&(t.data=so(D))}if(Gs=!0,s)for(const D in s){const F=s[D],ee=te(F)?F.bind(r,r):te(F.get)?F.get.bind(r,r):Mt,se=!te(F)&&te(F.set)?F.set.bind(r):Mt,re=Bn({get:ee,set:se});Object.defineProperty(n,D,{enumerable:!0,configurable:!0,get:()=>re.value,set:Q=>re.value=Q})}if(a)for(const D in a)nl(a[D],n,r,D);if(c){const D=te(c)?c.call(r):c;Reflect.ownKeys(D).forEach(F=>{Xf(F,D[F])})}u&&qo(u,t,"c");function H(D,F){Z(F)?F.forEach(ee=>D(ee.bind(r))):F&&D(F.bind(r))}if(H(Gf,f),H(el,h),H(Df,m),H(_f,d),H(If,p),H(Of,b),H(jf,P),H(Nf,E),H(Lf,B),H(Uf,x),H(tl,g),H(Ff,S),Z(G))if(G.length){const D=t.exposed||(t.exposed={});G.forEach(F=>{Object.defineProperty(D,F,{get:()=>r[F],set:ee=>r[F]=ee,enumerable:!0})})}else t.exposed||(t.exposed={});M&&t.render===Mt&&(t.render=M),U!=null&&(t.inheritAttrs=U),j&&(t.components=j),V&&(t.directives=V),S&&Qc(t)}function zf(t,e,r=Mt){Z(t)&&(t=Ds(t));for(const n in t){const i=t[n];let s;Ee(i)?"default"in i?s=Xn(i.from||n,i.default,!0):s=Xn(i.from||n):s=Xn(i),Ne(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function qo(t,e,r){Et(Z(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,r)}function nl(t,e,r,n){let i=n.includes(".")?bl(r,n):()=>r[n];if(Pe(t)){const s=e[t];te(s)&&Xi(i,s)}else if(te(t))Xi(i,t.bind(r));else if(Ee(t))if(Z(t))t.forEach(s=>nl(s,e,r,n));else{const s=te(t.handler)?t.handler.bind(r):e[t.handler];te(s)&&Xi(i,s,t)}}function il(t){const e=t.type,{mixins:r,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!r&&!n?c=e:(c={},i.length&&i.forEach(l=>li(c,l,o,!0)),li(c,e,o)),Ee(e)&&s.set(e,c),c}function li(t,e,r,n=!1){const{mixins:i,extends:s}=e;s&&li(t,s,r,!0),i&&i.forEach(o=>li(t,o,r,!0));for(const o in e)if(!(n&&o==="expose")){const a=Jf[o]||r&&r[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jf={data:Ko,props:Yo,emits:Yo,methods:en,computed:en,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:en,directives:en,watch:qf,provide:Ko,inject:Wf};function Ko(t,e){return e?t?function(){return je(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Wf(t,e){return en(Ds(t),Ds(e))}function Ds(t){if(Z(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?je(Object.create(null),t,e):e}function Yo(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:je(Object.create(null),Wo(t),Wo(e??{})):e}function qf(t,e){if(!t)return e;if(!e)return t;const r=je(Object.create(null),t);for(const n in e)r[n]=Ve(t[n],e[n]);return r}function sl(){return{app:null,config:{isNativeTag:_u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function Yf(t,e){return function(n,i=null){te(n)||(n=je({},n)),i!=null&&!Ee(i)&&(i=null);const s=sl(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:Kf++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Oh,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(l,...f)):te(u)&&(o.add(u),u(l,...f))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,f){return f?(s.components[u]=f,l):s.components[u]},directive(u,f){return f?(s.directives[u]=f,l):s.directives[u]},mount(u,f,h){if(!c){const m=l._ceVNode||$t(n,i);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),c=!0,l._container=u,u.__vue_app__=l,Ri(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Et(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return s.provides[u]=f,l},runWithContext(u){const f=_r;_r=l;try{return u()}finally{_r=f}}};return l}}let _r=null;function Xf(t,e){if(ke){let r=ke.provides;const n=ke.parent&&ke.parent.provides;n===r&&(r=ke.provides=Object.create(n)),r[t]=e}}function Xn(t,e,r=!1){const n=Mh();if(n||_r){let i=_r?_r._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return r&&te(e)?e.call(n&&n.proxy):e}}const ol={},al=()=>Object.create(ol),cl=t=>Object.getPrototypeOf(t)===ol;function Qf(t,e,r,n=!1){const i={},s=al();t.propsDefaults=Object.create(null),ll(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);r?t.props=n?i:mf(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function $f(t,e,r,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ae(i),[c]=t.propsOptions;let l=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ii(t.emitsOptions,h))continue;const m=e[h];if(c)if(ce(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const d=Zt(h);i[d]=_s(c,a,d,m,t,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{ll(t,e,i,s)&&(l=!0);let u;for(const f in a)(!e||!ce(e,f)&&((u=nr(f))===f||!ce(e,u)))&&(c?r&&(r[f]!==void 0||r[u]!==void 0)&&(i[f]=_s(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ce(e,f))&&(delete s[f],l=!0)}l&&Rt(t.attrs,"set","")}function ll(t,e,r,n){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(nn(c))continue;const l=e[c];let u;i&&ce(i,u=Zt(c))?!s||!s.includes(u)?r[u]=l:(a||(a={}))[u]=l:Ii(t.emitsOptions,c)||(!(c in n)||l!==n[c])&&(n[c]=l,o=!0)}if(s){const c=ae(r),l=a||be;for(let u=0;u<s.length;u++){const f=s[u];r[f]=_s(i,c,f,l[f],t,!ce(l,f))}}return o}function _s(t,e,r,n,i,s){const o=t[r];if(o!=null){const a=ce(o,"default");if(a&&n===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&te(c)){const{propsDefaults:l}=i;if(r in l)n=l[r];else{const u=wn(i);n=l[r]=c.call(null,e),u()}}else n=c;i.ce&&i.ce._setProp(r,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===nr(r))&&(n=!0))}return n}const Zf=new WeakMap;function ul(t,e,r=!1){const n=r?Zf:e.propsCache,i=n.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!te(t)){const u=f=>{c=!0;const[h,m]=ul(f,e,!0);je(o,h),m&&a.push(...m)};!r&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Ee(t)&&n.set(t,Ir),Ir;if(Z(s))for(let u=0;u<s.length;u++){const f=Zt(s[u]);Xo(f)&&(o[f]=be)}else if(s)for(const u in s){const f=Zt(u);if(Xo(f)){const h=s[u],m=o[f]=Z(h)||te(h)?{type:h}:je({},h),d=m.type;let p=!1,b=!0;if(Z(d))for(let y=0;y<d.length;++y){const x=d[y],C=te(x)&&x.name;if(C==="Boolean"){p=!0;break}else C==="String"&&(b=!1)}else p=te(d)&&d.name==="Boolean";m[0]=p,m[1]=b,(p||ce(m,"default"))&&a.push(f)}}const l=[o,a];return Ee(t)&&n.set(t,l),l}function Xo(t){return t[0]!=="$"&&!nn(t)}const uo=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",fo=t=>Z(t)?t.map(Tt):[Tt(t)],eh=(t,e,r)=>{if(e._n)return e;const n=Ef((...i)=>fo(e(...i)),r);return n._c=!1,n},fl=(t,e,r)=>{const n=t._ctx;for(const i in t){if(uo(i))continue;const s=t[i];if(te(s))e[i]=eh(i,s,n);else if(s!=null){const o=fo(s);e[i]=()=>o}}},hl=(t,e)=>{const r=fo(e);t.slots.default=()=>r},dl=(t,e,r)=>{for(const n in e)(r||!uo(n))&&(t[n]=e[n])},th=(t,e,r)=>{const n=t.slots=al();if(t.vnode.shapeFlag&32){const i=e.__;i&&ws(n,"__",i,!0);const s=e._;s?(dl(n,e,r),r&&ws(n,"_",s,!0)):fl(e,n)}else e&&hl(t,e)},rh=(t,e,r)=>{const{vnode:n,slots:i}=t;let s=!0,o=be;if(n.shapeFlag&32){const a=e._;a?r&&a===1?s=!1:dl(i,e,r):(s=!e.$stable,fl(e,i)),o=e}else e&&(hl(t,e),o={default:1});if(s)for(const a in i)!uo(a)&&o[a]==null&&delete i[a]},Ze=gh;function nh(t){return ih(t)}function ih(t,e){const r=Ei();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Mt,insertStaticContent:d}=t,p=(v,T,I,L=null,R=null,_=null,J=void 0,z=null,k=!!T.dynamicChildren)=>{if(v===T)return;v&&!Qr(v,T)&&(L=we(v),Q(v,R,_,!0),v=null),T.patchFlag===-2&&(k=!1,T.dynamicChildren=null);const{type:N,ref:Y,shapeFlag:W}=T;switch(N){case Oi:b(v,T,I,L);break;case Vr:y(v,T,I,L);break;case Qi:v==null&&x(T,I,L,J);break;case ht:j(v,T,I,L,R,_,J,z,k);break;default:W&1?M(v,T,I,L,R,_,J,z,k):W&6?V(v,T,I,L,R,_,J,z,k):(W&64||W&128)&&N.process(v,T,I,L,R,_,J,z,k,me)}Y!=null&&R?an(Y,v&&v.ref,_,T||v,!T):Y==null&&v&&v.ref!=null&&an(v.ref,null,_,v,!0)},b=(v,T,I,L)=>{if(v==null)n(T.el=a(T.children),I,L);else{const R=T.el=v.el;T.children!==v.children&&l(R,T.children)}},y=(v,T,I,L)=>{v==null?n(T.el=c(T.children||""),I,L):T.el=v.el},x=(v,T,I,L)=>{[v.el,v.anchor]=d(v.children,T,I,L,v.el,v.anchor)},C=({el:v,anchor:T},I,L)=>{let R;for(;v&&v!==T;)R=h(v),n(v,I,L),v=R;n(T,I,L)},g=({el:v,anchor:T})=>{let I;for(;v&&v!==T;)I=h(v),i(v),v=I;i(T)},M=(v,T,I,L,R,_,J,z,k)=>{T.type==="svg"?J="svg":T.type==="math"&&(J="mathml"),v==null?E(T,I,L,R,_,J,z,k):S(v,T,R,_,J,z,k)},E=(v,T,I,L,R,_,J,z)=>{let k,N;const{props:Y,shapeFlag:W,transition:q,dirs:$}=v;if(k=v.el=o(v.type,_,Y&&Y.is,Y),W&8?u(k,v.children):W&16&&P(v.children,k,null,L,R,Yi(v,_),J,z),$&&ir(v,null,L,"created"),B(k,v,v.scopeId,J,L),Y){for(const ye in Y)ye!=="value"&&!nn(ye)&&s(k,ye,null,Y[ye],_,L);"value"in Y&&s(k,"value",null,Y.value,_),(N=Y.onVnodeBeforeMount)&&yt(N,L,v)}$&&ir(v,null,L,"beforeMount");const oe=sh(R,q);oe&&q.beforeEnter(k),n(k,T,I),((N=Y&&Y.onVnodeMounted)||oe||$)&&Ze(()=>{N&&yt(N,L,v),oe&&q.enter(k),$&&ir(v,null,L,"mounted")},R)},B=(v,T,I,L,R)=>{if(I&&m(v,I),L)for(let _=0;_<L.length;_++)m(v,L[_]);if(R){let _=R.subTree;if(T===_||vl(_.type)&&(_.ssContent===T||_.ssFallback===T)){const J=R.vnode;B(v,J,J.scopeId,J.slotScopeIds,R.parent)}}},P=(v,T,I,L,R,_,J,z,k=0)=>{for(let N=k;N<v.length;N++){const Y=v[N]=z?Wt(v[N]):Tt(v[N]);p(null,Y,T,I,L,R,_,J,z)}},S=(v,T,I,L,R,_,J)=>{const z=T.el=v.el;let{patchFlag:k,dynamicChildren:N,dirs:Y}=T;k|=v.patchFlag&16;const W=v.props||be,q=T.props||be;let $;if(I&&sr(I,!1),($=q.onVnodeBeforeUpdate)&&yt($,I,T,v),Y&&ir(T,v,I,"beforeUpdate"),I&&sr(I,!0),(W.innerHTML&&q.innerHTML==null||W.textContent&&q.textContent==null)&&u(z,""),N?G(v.dynamicChildren,N,z,I,L,Yi(T,R),_):J||F(v,T,z,null,I,L,Yi(T,R),_,!1),k>0){if(k&16)U(z,W,q,I,R);else if(k&2&&W.class!==q.class&&s(z,"class",null,q.class,R),k&4&&s(z,"style",W.style,q.style,R),k&8){const oe=T.dynamicProps;for(let ye=0;ye<oe.length;ye++){const fe=oe[ye],ze=W[fe],Je=q[fe];(Je!==ze||fe==="value")&&s(z,fe,ze,Je,R,I)}}k&1&&v.children!==T.children&&u(z,T.children)}else!J&&N==null&&U(z,W,q,I,R);(($=q.onVnodeUpdated)||Y)&&Ze(()=>{$&&yt($,I,T,v),Y&&ir(T,v,I,"updated")},L)},G=(v,T,I,L,R,_,J)=>{for(let z=0;z<T.length;z++){const k=v[z],N=T[z],Y=k.el&&(k.type===ht||!Qr(k,N)||k.shapeFlag&198)?f(k.el):I;p(k,N,Y,null,L,R,_,J,!0)}},U=(v,T,I,L,R)=>{if(T!==I){if(T!==be)for(const _ in T)!nn(_)&&!(_ in I)&&s(v,_,T[_],null,R,L);for(const _ in I){if(nn(_))continue;const J=I[_],z=T[_];J!==z&&_!=="value"&&s(v,_,z,J,R,L)}"value"in I&&s(v,"value",T.value,I.value,R)}},j=(v,T,I,L,R,_,J,z,k)=>{const N=T.el=v?v.el:a(""),Y=T.anchor=v?v.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:$}=T;$&&(z=z?z.concat($):$),v==null?(n(N,I,L),n(Y,I,L),P(T.children||[],I,Y,R,_,J,z,k)):W>0&&W&64&&q&&v.dynamicChildren?(G(v.dynamicChildren,q,I,R,_,J,z),(T.key!=null||R&&T===R.subTree)&&ml(v,T,!0)):F(v,T,I,Y,R,_,J,z,k)},V=(v,T,I,L,R,_,J,z,k)=>{T.slotScopeIds=z,v==null?T.shapeFlag&512?R.ctx.activate(T,I,L,J,k):O(T,I,L,R,_,J,k):A(v,T,k)},O=(v,T,I,L,R,_,J)=>{const z=v.component=Ch(v,L,R);if($c(v)&&(z.ctx.renderer=me),Eh(z,!1,J),z.asyncDep){if(R&&R.registerDep(z,H,J),!v.el){const k=z.subTree=$t(Vr);y(null,k,T,I),v.placeholder=k.el}}else H(z,v,T,I,R,_,J)},A=(v,T,I)=>{const L=T.component=v.component;if(mh(v,T,I))if(L.asyncDep&&!L.asyncResolved){D(L,T,I);return}else L.next=T,L.update();else T.el=v.el,L.vnode=T},H=(v,T,I,L,R,_,J)=>{const z=()=>{if(v.isMounted){let{next:W,bu:q,u:$,parent:oe,vnode:ye}=v;{const gt=pl(v);if(gt){W&&(W.el=ye.el,D(v,W,J)),gt.asyncDep.then(()=>{v.isUnmounted||z()});return}}let fe=W,ze;sr(v,!1),W?(W.el=ye.el,D(v,W,J)):W=ye,q&&ki(q),(ze=W.props&&W.props.onVnodeBeforeUpdate)&&yt(ze,oe,W,ye),sr(v,!0);const Je=$o(v),pt=v.subTree;v.subTree=Je,p(pt,Je,f(pt.el),we(pt),v,R,_),W.el=Je.el,fe===null&&ph(v,Je.el),$&&Ze($,R),(ze=W.props&&W.props.onVnodeUpdated)&&Ze(()=>yt(ze,oe,W,ye),R)}else{let W;const{el:q,props:$}=T,{bm:oe,m:ye,parent:fe,root:ze,type:Je}=v,pt=cn(T);sr(v,!1),oe&&ki(oe),!pt&&(W=$&&$.onVnodeBeforeMount)&&yt(W,fe,T),sr(v,!0);{ze.ce&&ze.ce._def.shadowRoot!==!1&&ze.ce._injectChildStyle(Je);const gt=v.subTree=$o(v);p(null,gt,I,L,v,R,_),T.el=gt.el}if(ye&&Ze(ye,R),!pt&&(W=$&&$.onVnodeMounted)){const gt=T;Ze(()=>yt(W,fe,gt),R)}(T.shapeFlag&256||fe&&cn(fe.vnode)&&fe.vnode.shapeFlag&256)&&v.a&&Ze(v.a,R),v.isMounted=!0,T=I=L=null}};v.scope.on();const k=v.effect=new wc(z);v.scope.off();const N=v.update=k.run.bind(k),Y=v.job=k.runIfDirty.bind(k);Y.i=v,Y.id=v.uid,k.scheduler=()=>co(Y),sr(v,!0),N()},D=(v,T,I)=>{T.component=v;const L=v.vnode.props;v.vnode=T,v.next=null,$f(v,T.props,L,I),rh(v,T.children,I),Ft(),Jo(v),Lt()},F=(v,T,I,L,R,_,J,z,k=!1)=>{const N=v&&v.children,Y=v?v.shapeFlag:0,W=T.children,{patchFlag:q,shapeFlag:$}=T;if(q>0){if(q&128){se(N,W,I,L,R,_,J,z,k);return}else if(q&256){ee(N,W,I,L,R,_,J,z,k);return}}$&8?(Y&16&&Me(N,R,_),W!==N&&u(I,W)):Y&16?$&16?se(N,W,I,L,R,_,J,z,k):Me(N,R,_,!0):(Y&8&&u(I,""),$&16&&P(W,I,L,R,_,J,z,k))},ee=(v,T,I,L,R,_,J,z,k)=>{v=v||Ir,T=T||Ir;const N=v.length,Y=T.length,W=Math.min(N,Y);let q;for(q=0;q<W;q++){const $=T[q]=k?Wt(T[q]):Tt(T[q]);p(v[q],$,I,null,R,_,J,z,k)}N>Y?Me(v,R,_,!0,!1,W):P(T,I,L,R,_,J,z,k,W)},se=(v,T,I,L,R,_,J,z,k)=>{let N=0;const Y=T.length;let W=v.length-1,q=Y-1;for(;N<=W&&N<=q;){const $=v[N],oe=T[N]=k?Wt(T[N]):Tt(T[N]);if(Qr($,oe))p($,oe,I,null,R,_,J,z,k);else break;N++}for(;N<=W&&N<=q;){const $=v[W],oe=T[q]=k?Wt(T[q]):Tt(T[q]);if(Qr($,oe))p($,oe,I,null,R,_,J,z,k);else break;W--,q--}if(N>W){if(N<=q){const $=q+1,oe=$<Y?T[$].el:L;for(;N<=q;)p(null,T[N]=k?Wt(T[N]):Tt(T[N]),I,oe,R,_,J,z,k),N++}}else if(N>q)for(;N<=W;)Q(v[N],R,_,!0),N++;else{const $=N,oe=N,ye=new Map;for(N=oe;N<=q;N++){const Xe=T[N]=k?Wt(T[N]):Tt(T[N]);Xe.key!=null&&ye.set(Xe.key,N)}let fe,ze=0;const Je=q-oe+1;let pt=!1,gt=0;const Yr=new Array(Je);for(N=0;N<Je;N++)Yr[N]=0;for(N=$;N<=W;N++){const Xe=v[N];if(ze>=Je){Q(Xe,R,_,!0);continue}let bt;if(Xe.key!=null)bt=ye.get(Xe.key);else for(fe=oe;fe<=q;fe++)if(Yr[fe-oe]===0&&Qr(Xe,T[fe])){bt=fe;break}bt===void 0?Q(Xe,R,_,!0):(Yr[bt-oe]=N+1,bt>=gt?gt=bt:pt=!0,p(Xe,T[bt],I,null,R,_,J,z,k),ze++)}const No=pt?oh(Yr):Ir;for(fe=No.length-1,N=Je-1;N>=0;N--){const Xe=oe+N,bt=T[Xe],jo=T[Xe+1],Vo=Xe+1<Y?jo.el||jo.placeholder:L;Yr[N]===0?p(null,bt,I,Vo,R,_,J,z,k):pt&&(fe<0||N!==No[fe]?re(bt,I,Vo,2):fe--)}}},re=(v,T,I,L,R=null)=>{const{el:_,type:J,transition:z,children:k,shapeFlag:N}=v;if(N&6){re(v.component.subTree,T,I,L);return}if(N&128){v.suspense.move(T,I,L);return}if(N&64){J.move(v,T,I,me);return}if(J===ht){n(_,T,I);for(let W=0;W<k.length;W++)re(k[W],T,I,L);n(v.anchor,T,I);return}if(J===Qi){C(v,T,I);return}if(L!==2&&N&1&&z)if(L===0)z.beforeEnter(_),n(_,T,I),Ze(()=>z.enter(_),R);else{const{leave:W,delayLeave:q,afterLeave:$}=z,oe=()=>{v.ctx.isUnmounted?i(_):n(_,T,I)},ye=()=>{W(_,()=>{oe(),$&&$()})};q?q(_,oe,ye):ye()}else n(_,T,I)},Q=(v,T,I,L=!1,R=!1)=>{const{type:_,props:J,ref:z,children:k,dynamicChildren:N,shapeFlag:Y,patchFlag:W,dirs:q,cacheIndex:$}=v;if(W===-2&&(R=!1),z!=null&&(Ft(),an(z,null,I,v,!0),Lt()),$!=null&&(T.renderCache[$]=void 0),Y&256){T.ctx.deactivate(v);return}const oe=Y&1&&q,ye=!cn(v);let fe;if(ye&&(fe=J&&J.onVnodeBeforeUnmount)&&yt(fe,T,v),Y&6)Ce(v.component,I,L);else{if(Y&128){v.suspense.unmount(I,L);return}oe&&ir(v,null,T,"beforeUnmount"),Y&64?v.type.remove(v,T,I,me,L):N&&!N.hasOnce&&(_!==ht||W>0&&W&64)?Me(N,T,I,!1,!0):(_===ht&&W&384||!R&&Y&16)&&Me(k,T,I),L&&de(v)}(ye&&(fe=J&&J.onVnodeUnmounted)||oe)&&Ze(()=>{fe&&yt(fe,T,v),oe&&ir(v,null,T,"unmounted")},I)},de=v=>{const{type:T,el:I,anchor:L,transition:R}=v;if(T===ht){Ie(I,L);return}if(T===Qi){g(v);return}const _=()=>{i(I),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(v.shapeFlag&1&&R&&!R.persisted){const{leave:J,delayLeave:z}=R,k=()=>J(I,_);z?z(v.el,_,k):k()}else _()},Ie=(v,T)=>{let I;for(;v!==T;)I=h(v),i(v),v=I;i(T)},Ce=(v,T,I)=>{const{bum:L,scope:R,job:_,subTree:J,um:z,m:k,a:N,parent:Y,slots:{__:W}}=v;Qo(k),Qo(N),L&&ki(L),Y&&Z(W)&&W.forEach(q=>{Y.renderCache[q]=void 0}),R.stop(),_&&(_.flags|=8,Q(J,v,T,I)),z&&Ze(z,T),Ze(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Me=(v,T,I,L=!1,R=!1,_=0)=>{for(let J=_;J<v.length;J++)Q(v[J],T,I,L,R)},we=v=>{if(v.shapeFlag&6)return we(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=h(v.anchor||v.el),I=T&&T[Sf];return I?h(I):T};let xe=!1;const Ye=(v,T,I)=>{v==null?T._vnode&&Q(T._vnode,null,null,!0):p(T._vnode||null,v,T,null,null,null,I),T._vnode=v,xe||(xe=!0,Jo(),qc(),xe=!1)},me={p,um:Q,m:re,r:de,mt:O,mc:P,pc:F,pbc:G,n:we,o:t};return{render:Ye,hydrate:void 0,createApp:Yf(Ye)}}function Yi({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function sr({effect:t,job:e},r){r?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function sh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ml(t,e,r=!1){const n=t.children,i=e.children;if(Z(n)&&Z(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Wt(i[s]),a.el=o.el),!r&&a.patchFlag!==-2&&ml(o,a)),a.type===Oi&&(a.el=o.el),a.type===Vr&&!a.el&&(a.el=o.el)}}function oh(t){const e=t.slice(),r=[0];let n,i,s,o,a;const c=t.length;for(n=0;n<c;n++){const l=t[n];if(l!==0){if(i=r[r.length-1],t[i]<l){e[n]=i,r.push(n);continue}for(s=0,o=r.length-1;s<o;)a=s+o>>1,t[r[a]]<l?s=a+1:o=a;l<t[r[s]]&&(s>0&&(e[n]=r[s-1]),r[s]=n)}}for(s=r.length,o=r[s-1];s-- >0;)r[s]=o,o=e[o];return r}function pl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pl(e)}function Qo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ah=Symbol.for("v-scx"),ch=()=>Xn(ah);function Xi(t,e,r){return gl(t,e,r)}function gl(t,e,r=be){const{immediate:n,deep:i,flush:s,once:o}=r,a=je({},r),c=e&&n||!e&&s!=="post";let l;if(xn){if(s==="sync"){const m=ch();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Mt,m.resume=Mt,m.pause=Mt,m}}const u=ke;a.call=(m,d,p)=>Et(m,u,d,p);let f=!1;s==="post"?a.scheduler=m=>{Ze(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,d)=>{d?m():co(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Af(t,e,a);return xn&&(l?l.push(h):c&&h()),h}function lh(t,e,r){const n=this.proxy,i=Pe(t)?t.includes(".")?bl(n,t):()=>n[t]:t.bind(n,n);let s;te(e)?s=e:(s=e.handler,r=e);const o=wn(this),a=gl(i,s.bind(n),r);return o(),a}function bl(t,e){const r=e.split(".");return()=>{let n=t;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const uh=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${nr(e)}Modifiers`];function fh(t,e,...r){if(t.isUnmounted)return;const n=t.vnode.props||be;let i=r;const s=e.startsWith("update:"),o=s&&uh(n,e.slice(7));o&&(o.trim&&(i=r.map(u=>Pe(u)?u.trim():u)),o.number&&(i=r.map(ju)));let a,c=n[a=Hi(e)]||n[a=Hi(Zt(e))];!c&&s&&(c=n[a=Hi(nr(e))]),c&&Et(c,t,6,i);const l=n[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,i)}}function yl(t,e,r=!1){const n=e.emitsCache,i=n.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=yl(l,e,!0);u&&(a=!0,je(o,u))};!r&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ee(t)&&n.set(t,null),null):(Z(s)?s.forEach(c=>o[c]=null):je(o,s),Ee(t)&&n.set(t,o),o)}function Ii(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,nr(e))||ce(t,e))}function $o(t){const{type:e,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:m,ctx:d,inheritAttrs:p}=t,b=ci(t);let y,x;try{if(r.shapeFlag&4){const g=i||n,M=g;y=Tt(l.call(M,g,u,f,m,h,d)),x=a}else{const g=e;y=Tt(g.length>1?g(f,{attrs:a,slots:o,emit:c}):g(f,null)),x=e.props?a:hh(a)}}catch(g){un.length=0,Si(g,t,1),y=$t(Vr)}let C=y;if(x&&p!==!1){const g=Object.keys(x),{shapeFlag:M}=C;g.length&&M&7&&(s&&g.some(Qs)&&(x=dh(x,s)),C=Hr(C,x,!1,!0))}return r.dirs&&(C=Hr(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(r.dirs):r.dirs),r.transition&&lo(C,r.transition),y=C,ci(b),y}const hh=t=>{let e;for(const r in t)(r==="class"||r==="style"||Ti(r))&&((e||(e={}))[r]=t[r]);return e},dh=(t,e)=>{const r={};for(const n in t)(!Qs(n)||!(n.slice(9)in e))&&(r[n]=t[n]);return r};function mh(t,e,r){const{props:n,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&c>=0){if(c&1024)return!0;if(c&16)return n?Zo(n,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Ii(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Zo(n,o,l):!0:!!o;return!1}function Zo(t,e,r){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==t[s]&&!Ii(r,s))return!0}return!1}function ph({vnode:t,parent:e},r){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=r,e=e.parent;else break}}const vl=t=>t.__isSuspense;function gh(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Mf(t)}const ht=Symbol.for("v-fgt"),Oi=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Qi=Symbol.for("v-stc"),un=[];let rt=null;function Ur(t=!1){un.push(rt=t?null:[])}function bh(){un.pop(),rt=un[un.length-1]||null}let vn=1;function ea(t,e=!1){vn+=t,t<0&&rt&&e&&(rt.hasOnce=!0)}function yh(t){return t.dynamicChildren=vn>0?rt||Ir:null,bh(),vn>0&&rt&&rt.push(t),t}function Fr(t,e,r,n,i,s){return yh(Re(t,e,r,n,i,s,!0))}function xl(t){return t?t.__v_isVNode===!0:!1}function Qr(t,e){return t.type===e.type&&t.key===e.key}const Bl=({key:t})=>t??null,Qn=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||Ne(t)||te(t)?{i:at,r:t,k:e,f:!!r}:t:null);function Re(t,e=null,r=null,n=0,i=null,s=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bl(e),ref:e&&Qn(e),scopeId:Yc,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:at};return a?(ho(c,r),s&128&&t.normalize(c)):r&&(c.shapeFlag|=Pe(r)?8:16),vn>0&&!o&&rt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&rt.push(c),c}const $t=vh;function vh(t,e=null,r=null,n=0,i=null,s=!1){if((!t||t===Vf)&&(t=Vr),xl(t)){const a=Hr(t,e,!0);return r&&ho(a,r),vn>0&&!s&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag=-2,a}if(Ih(t)&&(t=t.__vccOpts),e){e=xh(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=pn(a)),Ee(c)&&(ao(c)&&!Z(c)&&(c=je({},c)),e.style=jr(c))}const o=Pe(t)?1:vl(t)?128:Pf(t)?64:Ee(t)?4:te(t)?2:0;return Re(t,e,r,n,i,o,s,!0)}function xh(t){return t?ao(t)||cl(t)?je({},t):t:null}function Hr(t,e,r=!1,n=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=t,l=e?Bh(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Bl(l),ref:e&&e.ref?r&&s?Z(s)?s.concat(Qn(e)):[s,Qn(e)]:Qn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&n&&lo(u,c.clone(u)),u}function Al(t=" ",e=0){return $t(Oi,null,t,e)}function Tt(t){return t==null||typeof t=="boolean"?$t(Vr):Z(t)?$t(ht,null,t.slice()):xl(t)?Wt(t):$t(Oi,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function ho(t,e){let r=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(Z(e))r=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),ho(t,i()),i._c&&(i._d=!0));return}else{r=32;const i=e._;!i&&!cl(e)?e._ctx=at:i===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:at},r=32):(e=String(e),n&64?(r=16,e=[Al(e)]):r=8);t.children=e,t.shapeFlag|=r}function Bh(...t){const e={};for(let r=0;r<t.length;r++){const n=t[r];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=pn([e.class,n.class]));else if(i==="style")e.style=jr([e.style,n.style]);else if(Ti(i)){const s=e[i],o=n[i];o&&s!==o&&!(Z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function yt(t,e,r,n=null){Et(t,e,7,[r,n])}const Ah=sl();let Th=0;function Ch(t,e,r){const n=t.type,i=(e?e.appContext:t.appContext)||Ah,s={uid:Th++,vnode:t,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ul(n,i),emitsOptions:yl(n,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:n.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fh.bind(null,s),t.ce&&t.ce(s),s}let ke=null;const Mh=()=>ke||at;let ui,Us;{const t=Ei(),e=(r,n)=>{let i;return(i=t[r])||(i=t[r]=[]),i.push(n),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};ui=e("__VUE_INSTANCE_SETTERS__",r=>ke=r),Us=e("__VUE_SSR_SETTERS__",r=>xn=r)}const wn=t=>{const e=ke;return ui(t),t.scope.on(),()=>{t.scope.off(),ui(e)}},ta=()=>{ke&&ke.scope.off(),ui(null)};function Tl(t){return t.vnode.shapeFlag&4}let xn=!1;function Eh(t,e=!1,r=!1){e&&Us(e);const{props:n,children:i}=t.vnode,s=Tl(t);Qf(t,n,s,e),th(t,i,r||e);const o=s?wh(t,e):void 0;return e&&Us(!1),o}function wh(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Hf);const{setup:n}=r;if(n){Ft();const i=t.setupContext=n.length>1?Ph(t):null,s=wn(t),o=En(n,t,0,[t.props,i]),a=xc(o);if(Lt(),s(),(a||t.sp)&&!cn(t)&&Qc(t),a){if(o.then(ta,ta),e)return o.then(c=>{ra(t,c)}).catch(c=>{Si(c,t,0)});t.asyncDep=o}else ra(t,o)}else Cl(t)}function ra(t,e,r){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=kc(e)),Cl(t)}function Cl(t,e,r){const n=t.type;t.render||(t.render=n.render||Mt);{const i=wn(t);Ft();try{kf(t)}finally{Lt(),i()}}}const Sh={get(t,e){return Ue(t,"get",""),t[e]}};function Ph(t){const e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,Sh),slots:t.slots,emit:t.emit,expose:e}}function Ri(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kc(pf(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in ln)return ln[r](t)},has(e,r){return r in e||r in ln}})):t.proxy}function Ih(t){return te(t)&&"__vccOpts"in t}const Bn=(t,e)=>xf(t,e,xn),Oh="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fs;const na=typeof window<"u"&&window.trustedTypes;if(na)try{Fs=na.createPolicy("vue",{createHTML:t=>t})}catch{}const Ml=Fs?t=>Fs.createHTML(t):t=>t,Rh="http://www.w3.org/2000/svg",Gh="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,ia=It&&It.createElement("template"),Dh={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,n)=>{const i=e==="svg"?It.createElementNS(Rh,t):e==="mathml"?It.createElementNS(Gh,t):r?It.createElement(t,{is:r}):It.createElement(t);return t==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,n,i,s){const o=r?r.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{ia.innerHTML=Ml(n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t);const a=ia.content;if(n==="svg"||n==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,r)}return[o?o.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},_h=Symbol("_vtc");function Uh(t,e,r){const n=t[_h];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const fi=Symbol("_vod"),El=Symbol("_vsh"),Fh={beforeMount(t,{value:e},{transition:r}){t[fi]=t.style.display==="none"?"":t.style.display,r&&e?r.beforeEnter(t):$r(t,e)},mounted(t,{value:e},{transition:r}){r&&e&&r.enter(t)},updated(t,{value:e,oldValue:r},{transition:n}){!e!=!r&&(n?e?(n.beforeEnter(t),$r(t,!0),n.enter(t)):n.leave(t,()=>{$r(t,!1)}):$r(t,e))},beforeUnmount(t,{value:e}){$r(t,e)}};function $r(t,e){t.style.display=e?t[fi]:"none",t[El]=!e}const Lh=Symbol(""),Nh=/(^|;)\s*display\s*:/;function jh(t,e,r){const n=t.style,i=Pe(r);let s=!1;if(r&&!i){if(e)if(Pe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();r[a]==null&&$n(n,a,"")}else for(const o in e)r[o]==null&&$n(n,o,"");for(const o in r)o==="display"&&(s=!0),$n(n,o,r[o])}else if(i){if(e!==r){const o=n[Lh];o&&(r+=";"+o),n.cssText=r,s=Nh.test(r)}}else e&&t.removeAttribute("style");fi in t&&(t[fi]=s?n.display:"",t[El]&&(n.display="none"))}const sa=/\s*!important$/;function $n(t,e,r){if(Z(r))r.forEach(n=>$n(t,e,n));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const n=Vh(t,e);sa.test(r)?t.setProperty(nr(n),r.replace(sa,""),"important"):t[n]=r}}const oa=["Webkit","Moz","ms"],$i={};function Vh(t,e){const r=$i[e];if(r)return r;let n=Zt(e);if(n!=="filter"&&n in t)return $i[e]=n;n=Tc(n);for(let i=0;i<oa.length;i++){const s=oa[i]+n;if(s in t)return $i[e]=s}return e}const aa="http://www.w3.org/1999/xlink";function ca(t,e,r,n,i,s=Wu(e)){n&&e.startsWith("xlink:")?r==null?t.removeAttributeNS(aa,e.slice(6,e.length)):t.setAttributeNS(aa,e,r):r==null||s&&!Cc(r)?t.removeAttribute(e):t.setAttribute(e,s?"":rr(r)?String(r):r)}function la(t,e,r,n,i){if(e==="innerHTML"||e==="textContent"){r!=null&&(t[e]=e==="innerHTML"?Ml(r):r);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=r==null?t.type==="checkbox"?"on":"":String(r);(a!==c||!("_value"in t))&&(t.value=c),r==null&&t.removeAttribute(e),t._value=r;return}let o=!1;if(r===""||r==null){const a=typeof t[e];a==="boolean"?r=Cc(r):r==null&&a==="string"?(r="",o=!0):a==="number"&&(r=0,o=!0)}try{t[e]=r}catch{}o&&t.removeAttribute(i||e)}function Hh(t,e,r,n){t.addEventListener(e,r,n)}function kh(t,e,r,n){t.removeEventListener(e,r,n)}const ua=Symbol("_vei");function zh(t,e,r,n,i=null){const s=t[ua]||(t[ua]={}),o=s[e];if(n&&o)o.value=n;else{const[a,c]=Jh(e);if(n){const l=s[e]=Kh(n,i);Hh(t,a,l,c)}else o&&(kh(t,a,o,c),s[e]=void 0)}}const fa=/(?:Once|Passive|Capture)$/;function Jh(t){let e;if(fa.test(t)){e={};let n;for(;n=t.match(fa);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let Zi=0;const Wh=Promise.resolve(),qh=()=>Zi||(Wh.then(()=>Zi=0),Zi=Date.now());function Kh(t,e){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Et(Yh(n,r.value),e,5,[n])};return r.value=t,r.attached=qh(),r}function Yh(t,e){if(Z(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xh=(t,e,r,n,i,s)=>{const o=i==="svg";e==="class"?Uh(t,n,o):e==="style"?jh(t,r,n):Ti(e)?Qs(e)||zh(t,e,r,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qh(t,e,n,o))?(la(t,e,n),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ca(t,e,n,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Pe(n))?la(t,Zt(e),n,s,e):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),ca(t,e,n,o))};function Qh(t,e,r,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&ha(e)&&te(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ha(e)&&Pe(r)?!1:e in t}const $h=["ctrl","shift","alt","meta"],Zh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$h.some(r=>t[`${r}Key`]&&!e.includes(r))},da=(t,e)=>{const r=t._withMods||(t._withMods={}),n=e.join(".");return r[n]||(r[n]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=Zh[e[o]];if(a&&a(i,e))return}return t(i,...s)})},ed={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ma=(t,e)=>{const r=t._withKeys||(t._withKeys={}),n=e.join(".");return r[n]||(r[n]=i=>{if(!("key"in i))return;const s=nr(i.key);if(e.some(o=>o===s||ed[o]===s))return t(i)})},td=je({patchProp:Xh},Dh);let pa;function rd(){return pa||(pa=nh(td))}const nd=(...t)=>{const e=rd().createApp(...t),{mount:r}=e;return e.mount=n=>{const i=sd(n);if(!i)return;const s=e._component;!te(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=r(i,!1,id(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function id(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sd(t){return Pe(t)?document.querySelector(t):t}const od="/projects/webGPU-Basics-Collections/assets/expand-yilVOYUy.png",dr=16;function ge({name:t="default",albedo:e=[1,1,1],roughness:r=.98,metalness:n=0,usePerlinRoughness:i=!1,usePerlinMetalness:s=!1,perlinFreq:o=2,useAlbedoTexture:a=!1,useMetalnessTexture:c=!1,useRoughnessTexture:l=!1,useNormalTexture:u=!1,textureIndex:f=-1}){return{name:t,albedo:e,roughness:r,usePerlinRoughness:i,metalness:n,usePerlinMetalness:s,perlinFreq:o,useAlbedoTexture:a,useMetalnessTexture:c,useRoughnessTexture:l,useNormalTexture:u,textureIndex:f}}function Gi(t){const e=new Array(dr),r=new Float32Array(e);return r.set(t.albedo,0),r[3]=t.metalness,r[4]=t.usePerlinMetalness?1:0,r[5]=t.roughness,r[6]=t.usePerlinRoughness?1:0,r[7]=t.perlinFreq,r[8]=t.useAlbedoTexture?1:0,r[9]=t.useMetalnessTexture?1:0,r[10]=t.useRoughnessTexture?1:0,r[11]=t.useNormalTexture?1:0,r[12]=t.textureIndex,r}function mo(t){const e=[];for(const r of t)e.push(...r.albedo),e.push(r.metalness),e.push(r.usePerlinMetalness?1:0),e.push(r.roughness),e.push(r.usePerlinRoughness?1:0),e.push(r.perlinFreq),e.push(r.useAlbedoTexture?1:0),e.push(r.useMetalnessTexture?1:0),e.push(r.useRoughnessTexture?1:0),e.push(r.useNormalTexture?1:0),e.push(r.textureIndex),e.push(0),e.push(0),e.push(0);return new Float32Array(e)}var ad=1e-6,Se=typeof Float32Array<"u"?Float32Array:Array,cd="zyx";function tn(){var t=new Se(4);return Se!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function hi(t,e,r,n){var i=new Se(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function Zn(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function ld(t,e,r){var n=e[0],i=e[1],s=e[2],o=e[3],a=r[0],c=r[1],l=r[2],u=r[3];return t[0]=n*a+s*c,t[1]=i*a+o*c,t[2]=n*l+s*u,t[3]=i*l+o*u,t}function Yt(){var t=new Se(9);return Se!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function ud(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Ls(t,e,r,n,i,s,o,a,c){var l=new Se(9);return l[0]=t,l[1]=e,l[2]=r,l[3]=n,l[4]=i,l[5]=s,l[6]=o,l[7]=a,l[8]=c,l}function es(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],d=e[12],p=e[13],b=e[14],y=e[15],x=r*a-n*o,C=r*c-i*o,g=r*l-s*o,M=n*c-i*a,E=n*l-s*a,B=i*l-s*c,P=u*p-f*d,S=u*b-h*d,G=u*y-m*d,U=f*b-h*p,j=f*y-m*p,V=h*y-m*b,O=x*V-C*j+g*U+M*G-E*S+B*P;return O?(O=1/O,t[0]=(a*V-c*j+l*U)*O,t[1]=(c*G-o*V-l*S)*O,t[2]=(o*j-a*G+l*P)*O,t[3]=(i*j-n*V-s*U)*O,t[4]=(r*V-i*G+s*S)*O,t[5]=(n*G-r*j-s*P)*O,t[6]=(p*B-b*E+y*M)*O,t[7]=(b*g-d*B-y*C)*O,t[8]=(d*E-p*g+y*x)*O,t):null}function ga(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function ba(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function wr(){var t=new Se(16);return Se!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function wl(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function fd(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],d=e[12],p=e[13],b=e[14],y=e[15],x=r*a-n*o,C=r*c-i*o,g=r*l-s*o,M=n*c-i*a,E=n*l-s*a,B=i*l-s*c,P=u*p-f*d,S=u*b-h*d,G=u*y-m*d,U=f*b-h*p,j=f*y-m*p,V=h*y-m*b,O=x*V-C*j+g*U+M*G-E*S+B*P;return O?(O=1/O,t[0]=(a*V-c*j+l*U)*O,t[1]=(i*j-n*V-s*U)*O,t[2]=(p*B-b*E+y*M)*O,t[3]=(h*E-f*B-m*M)*O,t[4]=(c*G-o*V-l*S)*O,t[5]=(r*V-i*G+s*S)*O,t[6]=(b*g-d*B-y*C)*O,t[7]=(u*B-h*g+m*C)*O,t[8]=(o*j-a*G+l*P)*O,t[9]=(n*G-r*j-s*P)*O,t[10]=(d*E-p*g+y*x)*O,t[11]=(f*g-u*E-m*x)*O,t[12]=(a*S-o*U-c*P)*O,t[13]=(r*U-n*S+i*P)*O,t[14]=(p*C-d*M-b*x)*O,t[15]=(u*M-f*C+h*x)*O,t):null}function hd(t,e,r,n){var i=e[0],s=e[1],o=e[2],a=e[3],c=i+i,l=s+s,u=o+o,f=i*c,h=i*l,m=i*u,d=s*l,p=s*u,b=o*u,y=a*c,x=a*l,C=a*u,g=n[0],M=n[1],E=n[2];return t[0]=(1-(d+b))*g,t[1]=(h+C)*g,t[2]=(m-x)*g,t[3]=0,t[4]=(h-C)*M,t[5]=(1-(f+b))*M,t[6]=(p+y)*M,t[7]=0,t[8]=(m+x)*E,t[9]=(p-y)*E,t[10]=(1-(f+d))*E,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function ne(){var t=new Se(3);return Se!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function dd(t){var e=new Se(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function ei(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function w(t,e,r){var n=new Se(3);return n[0]=t,n[1]=e,n[2]=r,n}function qt(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Ns(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function kt(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function An(t,e){var r=e[0],n=e[1],i=e[2],s=r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function lr(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ti(t,e,r){var n=e[0],i=e[1],s=e[2],o=r[0],a=r[1],c=r[2];return t[0]=i*c-s*a,t[1]=s*o-n*c,t[2]=n*a-i*o,t}function ts(t,e,r){var n=e[0],i=e[1],s=e[2],o=r[3]*n+r[7]*i+r[11]*s+r[15];return o=o||1,t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/o,t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/o,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/o,t}function Lr(t,e,r){var n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t}var Sr=Ns,md=ei;(function(){var t=ne();return function(e,r,n,i,s,o){var a,c;for(r||(r=3),n||(n=0),i?c=Math.min(i*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function pd(){var t=new Se(4);return Se!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function gd(t,e,r,n){var i=new Se(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function bd(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],o=r*r+n*n+i*i+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=r*o,t[1]=n*o,t[2]=i*o,t[3]=s*o,t}(function(){var t=pd();return function(e,r,n,i,s,o){var a,c;for(r||(r=4),n||(n=0),i?c=Math.min(i*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}})();function Dt(){var t=new Se(4);return Se!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function yd(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function vd(t,e,r){var n=e[0],i=e[1],s=e[2],o=e[3],a=r[0],c=r[1],l=r[2],u=r[3];return t[0]=n*u+o*a+i*l-s*c,t[1]=i*u+o*c+s*a-n*l,t[2]=s*u+o*l+n*c-i*a,t[3]=o*u-n*a-i*c-s*l,t}function rs(t,e,r,n){var i=e[0],s=e[1],o=e[2],a=e[3],c=r[0],l=r[1],u=r[2],f=r[3],h,m,d,p,b;return m=i*c+s*l+o*u+a*f,m<0&&(m=-m,c=-c,l=-l,u=-u,f=-f),1-m>ad?(h=Math.acos(m),d=Math.sin(h),p=Math.sin((1-n)*h)/d,b=Math.sin(n*h)/d):(p=1-n,b=n),t[0]=p*i+b*c,t[1]=p*s+b*l,t[2]=p*o+b*u,t[3]=p*a+b*f,t}function xd(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);var s=(i+1)%3,o=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[s*3+s]-e[o*3+o]+1),t[i]=.5*n,n=.5/n,t[3]=(e[s*3+o]-e[o*3+s])*n,t[s]=(e[s*3+i]+e[i*3+s])*n,t[o]=(e[o*3+i]+e[i*3+o])*n}return t}function Pr(t,e,r,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:cd,s=Math.PI/360;e*=s,n*=s,r*=s;var o=Math.sin(e),a=Math.cos(e),c=Math.sin(r),l=Math.cos(r),u=Math.sin(n),f=Math.cos(n);switch(i){case"xyz":t[0]=o*l*f+a*c*u,t[1]=a*c*f-o*l*u,t[2]=a*l*u+o*c*f,t[3]=a*l*f-o*c*u;break;case"xzy":t[0]=o*l*f-a*c*u,t[1]=a*c*f-o*l*u,t[2]=a*l*u+o*c*f,t[3]=a*l*f+o*c*u;break;case"yxz":t[0]=o*l*f+a*c*u,t[1]=a*c*f-o*l*u,t[2]=a*l*u-o*c*f,t[3]=a*l*f+o*c*u;break;case"yzx":t[0]=o*l*f+a*c*u,t[1]=a*c*f+o*l*u,t[2]=a*l*u-o*c*f,t[3]=a*l*f-o*c*u;break;case"zxy":t[0]=o*l*f-a*c*u,t[1]=a*c*f+o*l*u,t[2]=a*l*u+o*c*f,t[3]=a*l*f-o*c*u;break;case"zyx":t[0]=o*l*f-a*c*u,t[1]=a*c*f+o*l*u,t[2]=a*l*u-o*c*f,t[3]=a*l*f+o*c*u;break;default:throw new Error("Unknown angle order "+i)}return t}var ns=gd,Sl=bd;(function(){var t=ne(),e=w(1,0,0),r=w(0,1,0);return function(n,i,s){var o=lr(i,s);return o<-.999999?(ti(t,e,i),md(t)<1e-6&&ti(t,r,i),An(t,t),yd(n,t,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(ti(t,i,s),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+o,Sl(n,n))}})();(function(){var t=Dt(),e=Dt();return function(r,n,i,s,o,a){return rs(t,n,o,a),rs(e,i,s,a),rs(r,t,e,2*a*(1-a)),r}})();(function(){var t=Yt();return function(e,r,n,i){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=i[0],t[4]=i[1],t[7]=i[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],Sl(e,xd(e,t))}})();function K(){var t=new Se(2);return Se!=Float32Array&&(t[0]=0,t[1]=0),t}function di(t){var e=new Se(2);return e[0]=t[0],e[1]=t[1],e}function X(t,e){var r=new Se(2);return r[0]=t,r[1]=e,r}function Ot(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function Bd(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function Pt(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function Ad(t){var e=t[0],r=t[1];return e*e+r*r}function et(t,e){return t[0]*e[0]+t[1]*e[1]}function Td(t,e,r,n){var i=e[0],s=e[1];return t[0]=i+n*(r[0]-i),t[1]=s+n*(r[1]-s),t}function _e(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i,t[1]=r[1]*n+r[3]*i,t}var vt=Bd;(function(){var t=K();return function(e,r,n,i,s,o){var a,c;for(r||(r=2),n||(n=0),i?c=Math.min(i*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],s(t,t,o),e[a]=t[0],e[a+1]=t[1];return e}})();function xr(t){const e=Math.cos(t),r=Math.sin(t);return hi(e,r,-r,e)}function Pl(t,e,r){const n=Math.cos(t),i=Math.sin(t),s=Math.cos(e),o=Math.sin(e),a=Math.cos(r),c=Math.sin(r);return Ls(s*a,-s*c,o,i*o*a+n*c,-i*o*c+n*a,-i*s,-n*o*a+i*c,n*o*c+i*a,n*s)}function Cd(t,e){const r=Yt();return r[0]=t[0]*e[0],r[1]=t[0]*e[1],r[2]=t[0]*e[2],r[3]=t[1]*e[0],r[4]=t[1]*e[1],r[5]=t[1]*e[2],r[6]=t[2]*e[0],r[7]=t[2]*e[1],r[8]=t[2]*e[2],r}function Md(t,e){let r=t[0],n=t[3]/t[0],i=t[6]/t[0],s=t[4]-n*n*r,o=(t[7]-i*n*r)/s,a=t[8]-(i*i*r+o*o*s),c=e[0],l=e[1]-n*c,u=e[2]-i*c-o*l,f=c/r,h=l/s,m=u/a;const d=w(0,0,0);return d[2]=m,d[1]=h-o*d[2],d[0]=f-n*d[1]-i*d[2],d}function ue(t=0,e=1){return t===void 0?(t=0,e=1):e===void 0&&(e=t,t=0),t+Math.random()*(e-t)}function Ed(t,e,r,n){return w(ue(t,t+r),ue(e,e+n),ue(0,Math.PI*2))}function wd(){const t=Math.floor(ue(0,256)),e=Math.floor(ue(0,256)),r=Math.floor(ue(0,256)),n=255;return new Uint8Array([t,e,r,n])}function Hn(t,e){return t[0]*e[1]-t[1]*e[0]}function Di(t,e,r){const n=Ns(ne(),e,t),i=Ns(ne(),r,t);return An(ne(),ti(ne(),n,i))}function Sd(t){return t*(180/Math.PI)}function Pd(t){return t*(Math.PI/180)}function mr(){return document.getElementById("info")}function Ht(){return document.getElementById("utils")}let Il=null;function Id(t){Il=t}function pr(t){Il?.addFrame(t)}function Ol(){Ht()}function gr(){const t=Ht();if(t)for(;t.firstChild;)t.removeChild(t.firstChild);Ol()}function Xt(t,e,r,n){const i=document.createElement("label");i.textContent=t,i.htmlFor=`checkbox-${t}`;const s=document.createElement("input");return s.type="checkbox",s.id=`checkbox-${t}`,s.checked=e,s.tabIndex=-1,s.style.cssText=`
        margin-left: 8px;
        transform: scale(1.2);
        cursor: pointer;
    `,s.addEventListener("change",()=>{n(s.checked)}),r.appendChild(i),r.appendChild(s),s}function Od(t,e,r,n,i,s,o){const a=document.createElement("label");a.textContent=t,a.htmlFor=`number-${t}`;const c=document.createElement("input");return c.type="number",c.id=`number-${t}`,c.value=e.toString(),c.min=r.toString(),c.max=n.toString(),c.step=i.toString(),c.tabIndex=-1,c.style.cssText=`
        margin-left: 16px;
        transform: scale(1.2);
        cursor: pointer;
    `,c.addEventListener("change",()=>{const l=parseFloat(c.value);o(isNaN(l)?0:l)}),s.appendChild(a),s.appendChild(c),c}function _t(t,e,r,n,i,s,o){const a=document.createElement("label");a.textContent=`${t}: ${e.toFixed(2)}`,a.htmlFor=`slider-${t}`;const c=document.createElement("input");return c.type="range",c.id=`slider-${t}`,c.min=r.toString(),c.max=n.toString(),c.step=i.toString(),c.value=e.toString(),c.style.cssText=`
        width: 150px;
        margin-left: 8px;
        cursor: pointer;
    `,c.addEventListener("input",()=>{const l=parseFloat(c.value);o(isNaN(l)?0:l),a.textContent=`${t}: ${l.toFixed(2)}`}),s.appendChild(a),s.appendChild(c),c}function Tn(t,e,r){const n=document.createElement("button");return n.style.cssText="background-color: #444444; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;",n.textContent=t,n.tabIndex=-1,n.addEventListener("click",r),e.appendChild(n),n}function po(t,e,r,n){const i=document.createElement("div");i.style.cssText=`
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
    `;const s=document.createElement("div");s.textContent=`Material: ${e.name}`,s.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,i.appendChild(s);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const a=document.createElement("label");a.textContent="Albedo:",o.appendChild(a);const c=D=>Math.round(D*255).toString(16).padStart(2,"0"),l=`#${c(e.albedo[0])}${c(e.albedo[1])}${c(e.albedo[2])}`,u=document.createElement("input");u.type="color",u.value=l,u.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,u.tabIndex=-1,o.appendChild(u);const f=document.createElement("span");f.textContent=l.toUpperCase(),f.style.cssText="font-family: monospace; color: #aaa;",o.appendChild(f),u.addEventListener("input",()=>{f.textContent=u.value.toUpperCase();const D=parseInt(u.value.slice(1,3),16)/255,F=parseInt(u.value.slice(3,5),16)/255,ee=parseInt(u.value.slice(5,7),16)/255;e.albedo=[D,F,ee],r(e)}),i.appendChild(o);const h=document.createElement("label");h.textContent="Albedo texture",o.appendChild(h);const m=document.createElement("input");m.type="checkbox",m.checked=e.useAlbedoTexture,m.tabIndex=-1,o.appendChild(m),m.addEventListener("change",()=>{e.useAlbedoTexture=m.checked,r(e)});const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent=`Metalness: ${e.metalness.toFixed(2)}`,d.appendChild(p);const b=document.createElement("input");b.type="range",b.min="0",b.max="1",b.step="0.01",b.value=e.metalness.toString(),b.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,b.tabIndex=-1,d.appendChild(b),i.appendChild(d),b.addEventListener("input",()=>{const D=parseFloat(b.value);e.metalness=isNaN(D)?0:D,p.textContent=`Metalness: ${e.metalness.toFixed(2)}`,r(e)});const y=document.createElement("label");y.textContent="Perlin noise",d.appendChild(y);const x=document.createElement("input");x.type="checkbox",x.checked=e.usePerlinMetalness,x.tabIndex=-1,d.appendChild(x),x.addEventListener("change",()=>{e.usePerlinMetalness=x.checked,r(e)});const C=document.createElement("label");C.textContent="Metalness texture",d.appendChild(C);const g=document.createElement("input");g.type="checkbox",g.checked=e.useMetalnessTexture,g.tabIndex=-1,d.appendChild(g),g.addEventListener("change",()=>{e.useMetalnessTexture=g.checked,r(e)});const M=document.createElement("div");M.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const E=document.createElement("label");E.textContent=`Roughness: ${e.roughness.toFixed(2)}`,M.appendChild(E);const B=document.createElement("input");B.type="range",B.min="0",B.max="1",B.step="0.01",B.value=e.roughness.toString(),B.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,B.tabIndex=-1,M.appendChild(B),i.appendChild(M),B.addEventListener("input",()=>{const D=parseFloat(B.value);e.roughness=isNaN(D)?0:D,E.textContent=`Roughness: ${e.roughness.toFixed(2)}`,r(e)});const P=document.createElement("label");P.textContent="Perlin noise",M.appendChild(P);const S=document.createElement("input");S.type="checkbox",S.checked=e.usePerlinRoughness,S.tabIndex=-1,M.appendChild(S),S.addEventListener("change",()=>{e.usePerlinRoughness=S.checked,r(e)});const G=document.createElement("label");G.textContent="Roughness texture",M.appendChild(G);const U=document.createElement("input");U.type="checkbox",U.checked=e.useRoughnessTexture,U.tabIndex=-1,M.appendChild(U),U.addEventListener("change",()=>{e.useRoughnessTexture=U.checked,r(e)});const j=document.createElement("div");j.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const V=document.createElement("label");V.textContent=`Perlin Frequency: ${e.perlinFreq.toFixed(2)}`,j.appendChild(V);const O=document.createElement("input");O.type="range",O.min="0.1",O.max="10",O.step="0.1",O.value=e.perlinFreq.toString(),O.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,O.tabIndex=-1,j.appendChild(O),i.appendChild(j),O.addEventListener("input",()=>{const D=parseFloat(O.value);e.perlinFreq=isNaN(D)?.1:D,V.textContent=`Perlin Frequency: ${e.perlinFreq.toFixed(2)}`,r(e)});const A=document.createElement("div");A.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const H=document.createElement("button");return H.textContent="Cancel",H.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,H.tabIndex=-1,H.addEventListener("click",()=>{n()}),A.appendChild(H),i.appendChild(A),i}function Rd(t,e,r,n,i){const s=document.createElement("div");s.style.cssText=`
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
    `,s.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const c=document.createElement("label");c.textContent="Enabled:",a.appendChild(c);const l=document.createElement("input");l.type="checkbox",l.checked=e.enabled,l.tabIndex=-1,a.appendChild(l),l.addEventListener("change",()=>{e.enabled=l.checked,n(e)}),s.appendChild(a);const u=document.createElement("div");u.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const f=document.createElement("label");f.textContent="Area light center:",u.appendChild(f),["X","Y","Z"].forEach((A,H)=>{const D=document.createElement("input");D.type="number",D.value=e.center[H].toFixed(2),D.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,D.tabIndex=-1,u.appendChild(D),D.addEventListener("input",()=>{const F=parseFloat(D.value);e.center[H]=isNaN(F)?0:F,n(e)}),D.placeholder=A}),s.appendChild(u);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Area light normal direction:",h.appendChild(m),["X","Y","Z"].forEach((A,H)=>{const D=document.createElement("input");D.type="number",D.value=e.normalDirection[H].toFixed(2),D.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,D.tabIndex=-1,h.appendChild(D),D.addEventListener("input",()=>{const F=parseFloat(D.value);e.normalDirection[H]=isNaN(F)?0:F,n(e)}),D.placeholder=A}),s.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Area light intensity:",d.appendChild(p);const b=document.createElement("input");b.type="number",b.value=e.intensity.toFixed(2),b.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,b.tabIndex=-1,d.appendChild(b),b.addEventListener("input",()=>{const A=parseFloat(b.value);e.intensity=isNaN(A)?0:A,n(e)}),s.appendChild(d);const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const x=document.createElement("label");x.textContent="Area light height:",y.appendChild(x);const C=document.createElement("input");C.type="number",C.value=e.height.toFixed(2),C.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,C.tabIndex=-1,y.appendChild(C),C.addEventListener("input",()=>{const A=parseFloat(C.value);e.height=isNaN(A)?0:A,n(e)}),s.appendChild(y);const g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const M=document.createElement("label");M.textContent="Area light width:",g.appendChild(M);const E=document.createElement("input");E.type="number",E.value=e.width.toFixed(2),E.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,E.tabIndex=-1,g.appendChild(E),E.addEventListener("input",()=>{const A=parseFloat(E.value);e.width=isNaN(A)?0:A,n(e)}),s.appendChild(g);const B=document.createElement("div");B.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const P=document.createElement("label");P.textContent="Light color:",B.appendChild(P);const S=A=>Math.round(A*255).toString(16).padStart(2,"0"),G=`#${S(e.color[0])}${S(e.color[1])}${S(e.color[2])}`,U=document.createElement("input");U.type="color",U.value=G,U.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,U.tabIndex=-1,B.appendChild(U);const j=document.createElement("span");j.textContent=G.toUpperCase(),j.style.cssText="font-family: monospace; color: #aaa;",B.appendChild(j),U.addEventListener("input",()=>{j.textContent=U.value.toUpperCase(),e.color=[parseInt(U.value.slice(1,3),16)/255,parseInt(U.value.slice(3,5),16)/255,parseInt(U.value.slice(5,7),16)/255],n(e)}),s.appendChild(B);const V=document.createElement("div");V.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const O=document.createElement("button");return O.textContent="Cancel",O.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,O.tabIndex=-1,O.addEventListener("click",()=>{i()}),V.appendChild(O),s.appendChild(V),s}function Rl(t,e,r,n,i){const s=document.createElement("div");s.style.cssText=`
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
    `,s.appendChild(o);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const c=document.createElement("label");c.textContent="Enabled:",a.appendChild(c);const l=document.createElement("input");l.type="checkbox",l.checked=e.enabled,l.tabIndex=-1,a.appendChild(l),l.addEventListener("change",()=>{e.enabled=l.checked,n(e)}),s.appendChild(a);const u=document.createElement("div");u.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const f=document.createElement("label");f.textContent="Light position:",u.appendChild(f),["X","Y","Z"].forEach((j,V)=>{const O=document.createElement("input");O.type="number",O.value=e.position[V].toFixed(2),O.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,O.tabIndex=-1,u.appendChild(O),O.addEventListener("input",()=>{const A=parseFloat(O.value);e.position[V]=isNaN(A)?0:A,n(e)}),O.placeholder=j}),s.appendChild(u);const h=document.createElement("div");h.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Light direction:",h.appendChild(m),["X","Y","Z"].forEach((j,V)=>{const O=document.createElement("input");O.type="number",O.value=e.direction[V].toFixed(2),O.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,O.tabIndex=-1,h.appendChild(O),O.addEventListener("input",()=>{const A=parseFloat(O.value);e.direction[V]=isNaN(A)?0:A,n(e)}),O.placeholder=j}),s.appendChild(h);const d=document.createElement("div");d.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Light intensity:",d.appendChild(p);const b=document.createElement("input");b.type="number",b.value=e.intensity.toFixed(2),b.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,b.tabIndex=-1,d.appendChild(b),b.addEventListener("input",()=>{const j=parseFloat(b.value);e.intensity=isNaN(j)?0:j,n(e)}),s.appendChild(d);const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const x=document.createElement("label");x.textContent="Cone angle:",y.appendChild(x);const C=document.createElement("input");C.type="range",C.value=Sd(e.coneAngle).toFixed(2),C.min="0",C.max="180",C.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,C.tabIndex=-1,y.appendChild(C),C.addEventListener("input",()=>{const j=parseFloat(C.value),V=Pd(j);e.coneAngle=isNaN(V)?0:V,n(e)}),s.appendChild(y);const g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const M=document.createElement("label");M.textContent="Light color:",g.appendChild(M);const E=j=>Math.round(j*255).toString(16).padStart(2,"0"),B=`#${E(e.color[0])}${E(e.color[1])}${E(e.color[2])}`,P=document.createElement("input");P.type="color",P.value=B,P.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,P.tabIndex=-1,g.appendChild(P);const S=document.createElement("span");S.textContent=B.toUpperCase(),S.style.cssText="font-family: monospace; color: #aaa;",g.appendChild(S),P.addEventListener("input",()=>{S.textContent=P.value.toUpperCase(),e.color=[parseInt(P.value.slice(1,3),16)/255,parseInt(P.value.slice(3,5),16)/255,parseInt(P.value.slice(5,7),16)/255],n(e)}),s.appendChild(g);const G=document.createElement("div");G.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const U=document.createElement("button");return U.textContent="Cancel",U.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,U.tabIndex=-1,U.addEventListener("click",()=>{i()}),G.appendChild(U),s.appendChild(G),s}const Gd={class:"flex flex-row items-stretch h-20 font-mono text-[10px] select-none text-[#aaa]"},Dd={class:"flex-1 overflow-hidden relative bg-[#1a1a1a]/20 rounded-sm"},_d=["title"],Ud={class:"w-[30px] relative shrink-0 ml-[3px]"},Fd={class:"absolute left-1 top-0 leading-none whitespace-nowrap"},Ld={class:"absolute left-1 top-1/2 -translate-y-1/2 leading-none whitespace-nowrap"},Nd=Xc({__name:"profiler",props:{maxBars:{default:60}},setup(t,{expose:e}){const r=t;let n=0;const i=xt([]),s=xt(60),o=Bn(()=>s.value),a=Bn(()=>Math.round(s.value/2));function c(f){return Math.min(f/s.value*100,100)}function l(f){const h=Math.min(f/60,1),m=Math.round(255*(1-h)),d=Math.round(255*h);return`rgb(${m},${d},0)`}function u(f){i.value.length>=r.maxBars&&i.value.shift(),i.value.push({id:n++,duration:Math.min(Math.max(f,0),60)})}return e({addFrame:u}),(f,h)=>(Ur(),Fr("div",Gd,[Re("div",Dd,[Re("div",{class:"absolute left-0 bottom-0 top-0 flex flex-row items-end",style:jr({width:i.value.length/r.maxBars*100+"%"})},[(Ur(!0),Fr(ht,null,rl(i.value,m=>(Ur(),Fr("div",{key:m.id,class:"flex-1 min-w-0 rounded-t-[1px]",title:`${m.duration.toFixed(1)}ms`,style:jr({height:c(m.duration)+"%",backgroundColor:l(m.duration)})},null,12,_d))),128))],4)]),Re("div",Ud,[h[0]||(h[0]=Re("div",{class:"absolute left-0 top-0 bottom-0 w-px bg-[#555]"},null,-1)),Re("span",Fd,Rr(o.value),1),Re("span",Ld,Rr(a.value),1),h[1]||(h[1]=Re("span",{class:"absolute left-1 bottom-0 leading-none whitespace-nowrap"},"0",-1))])]))}}),jd=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,Vd=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function Hd(t){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=t.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:r,format:i,alphaMode:"premultiplied"});const s=kd(r),o=zd(r,s,s,i),a={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(l=>{for(const u of l){const f=u.target,h=u.contentBoxSize[0].inlineSize,m=u.contentBoxSize[0].blockSize;f.width=Math.max(1,Math.min(h,r.limits.maxTextureDimension2D)),f.height=Math.max(1,Math.min(m,r.limits.maxTextureDimension2D))}Jd(r,n,o,a)}).observe(t),null}function kd(t){return t.createShaderModule({label:"hardcoded red triangle",code:`${jd}
${Vd}`})}function zd(t,e,r,n){return t.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function Jd(t,e,r,n){n.colorAttachments[0].view=e.getCurrentTexture().createView();const i=t.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(n);s.setPipeline(r),s.draw(3),s.end();const o=i.finish();t.queue.submit([o])}const Wd=`// We declare a storage variable to read from and write to\r
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
// }`;async function qd(t){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=Kd(r),i=Yd(r,n),s=new Float32Array([1,3,5]),o=Xd(r,s),a=Qd(r,s.byteLength),c=$d(r,i.getBindGroupLayout(0),o),l=r.createCommandEncoder({label:"command encoder"}),u=l.beginComputePass({label:"basic compute pass"});u.setPipeline(i),u.setBindGroup(0,c),u.dispatchWorkgroups(s.length),u.end(),l.copyBufferToBuffer(o,0,a,0,a.size);const f=l.finish();r.queue.submit([f]),console.log("We send this Input: ",s);const h=performance.now();await a.mapAsync(GPUMapMode.READ);const m=new Float32Array(a.getMappedRange());return console.log("Computation took: ",performance.now()-h,"ms"),console.log("We got this Result: ",m),a.unmap(),null}function Kd(t){return t.createShaderModule({label:"basic compute module",code:`${Wd}`})}function Yd(t,e){return t.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:e,entryPoint:"computeSomething"}})}function Xd(t,e){const r=t.createBuffer({label:"work buffer",size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return t.queue.writeBuffer(r,0,e),r}function Qd(t,e){return t.createBuffer({label:"result buffer",size:e,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function $d(t,e,r){return t.createBindGroup({label:"basic bind group",layout:e,entries:[{binding:0,resource:{buffer:r}}]})}const Zd=`// ============================== //\r
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
}`,em=`// ============================== //\r
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
}`;async function mt(t=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const e=await navigator.gpu.requestAdapter();if(!e)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const r=i=>{const s=e.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};t=t.filter(i=>r(i));const n=await e.requestDevice({requiredFeatures:t});return n.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),n}function Le(t,e,r,n="shader module"){const i=t.createShaderModule({label:`${n} - vertex`,code:e}),s=t.createShaderModule({label:`${n} - fragment`,code:r});return{vertex:i,fragment:s}}function Sn(t,e){if(!t)return null;const r=t.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:e}),n=t.createBuffer({label:"timestamp-query-resolve-buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=t.createBuffer({label:"timestamp-query-result-buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:r,resolveBuffer:n,resultBuffer:i}}function tm(t,e){return!t||!e?!1:(e.resolveQuerySet(t.querySet,0,t.querySet.count,t.resolveBuffer,0),t.resultBuffer.mapState==="unmapped"&&e.copyBufferToBuffer(t.resolveBuffer,0,t.resultBuffer,0,t.resultBuffer.size),!0)}function zt(t){const e=t.reduce((i,s)=>i+s.length,0),r=new Float32Array(e);let n=0;for(const i of t)r.set(i,n),n+=i.length;return r}function ya(t,e){const r=t.reduce((o,a)=>o+a.length,0),n=new Uint16Array(r);let i=0,s=0;for(let o=0;o<t.length;o++){const a=t[o];for(let c=0;c<a.length;c++)n[i+c]=a[c]+s;i+=a.length,s+=e[o]}return n}const rm=0,nm=4,im=0,sm=100;async function om(t){const e=await mt();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const i=va(e,"hardcoded triangle",Zd),s=va(e,"hardcoded triangle",em),o=am(e,i,s,n),a=32,c=8,l=[];for(let h=0;h<sm;h++){const m=xa(e,a);{const x=new Float32Array(a/4);x.set([ue(.1),ue(.1),ue(.1),1],rm),x.set([ue(-.9,.9),ue(-.9,.9)],nm),e.queue.writeBuffer(m,0,x)}const d=new Float32Array(c/4),p=xa(e,c),y={uniformBindGroup:lm(e,o.getBindGroupLayout(0),m,p),uniformBuffer:p,uniformValues:d,scale:ue(.2,.5)};l.push(y)}const u={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(h=>{for(const m of h){const d=m.target,p=m.contentBoxSize[0].inlineSize,b=m.contentBoxSize[0].blockSize;d.width=Math.max(1,Math.min(p,e.limits.maxTextureDimension2D)),d.height=Math.max(1,Math.min(b,e.limits.maxTextureDimension2D))}cm(e,t,r,o,u,l)}).observe(t),null}function va(t,e,r){return t.createShaderModule({label:e,code:r})}function am(t,e,r,n){return t.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function cm(t,e,r,n,i,s){i.colorAttachments[0].view=r.getCurrentTexture().createView();const o=t.createCommandEncoder({label:"pass encoder"}),a=o.beginRenderPass(i);a.setPipeline(n);const c=e.width/e.height;for(const u of s)u.uniformValues.set([u.scale/c,u.scale],im),t.queue.writeBuffer(u.uniformBuffer,0,u.uniformValues),a.setBindGroup(0,u.uniformBindGroup),a.draw(3);a.end();const l=o.finish();t.queue.submit([l])}function xa(t,e){return t.createBuffer({label:"uniform buffer",size:e,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function lm(t,e,r,n){return t.createBindGroup({label:"uniform bind group",layout:e,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}}]})}const um=`// ============================== //\r
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
}`,fm=`// ============================== //\r
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
}`;function Pn(t){const e={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:t,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,viewMatrix:hm(),projectionMatrix:_l(Math.PI/4,t,.1,1e3),dirty:!0};return Gl(e),e}function In(t,e,r,n){t.position[0]=e,t.position[1]=r,t.position[2]=n,go(t)}function On(t,e){t.aspect=e,Dl(t)}function Rn(t,e,r){t.near=e,t.far=r,Dl(t)}function Gn(t,e,r,n){t.position[0]+=t.forward[0]*e+t.right[0]*r+t.up[0]*n,t.position[1]+=t.forward[1]*e+t.right[1]*r+t.up[1]*n,t.position[2]+=t.forward[2]*e+t.right[2]*r+t.up[2]*n,go(t)}function qr(t,e,r){t.yaw+=e,t.pitch+=r;const n=Math.PI/2-.01;for(t.pitch=Math.max(-n,Math.min(n,t.pitch));t.yaw>Math.PI;)t.yaw-=2*Math.PI;for(;t.yaw<-Math.PI;)t.yaw+=2*Math.PI;Gl(t)}function Be(t,e,r){qr(t,e*t.rotateSpeed,r*t.rotateSpeed)}function Gl(t){t.forward[0]=Math.cos(t.pitch)*Math.cos(t.yaw),t.forward[1]=Math.sin(t.pitch),t.forward[2]=Math.cos(t.pitch)*Math.sin(t.yaw),fn(t.forward);const e=mi(t.forward,t.worldUp);fn(e),t.right[0]=e[0],t.right[1]=e[1],t.right[2]=e[2];const r=mi(t.right,t.forward);fn(r),t.up[0]=r[0],t.up[1]=r[1],t.up[2]=r[2],go(t)}function go(t){const e=new Float32Array([t.position[0]+t.forward[0],t.position[1]+t.forward[1],t.position[2]+t.forward[2]]);t.viewMatrix=dm(t.position,e,t.up),t.dirty=!0}function Dl(t){t.projectionMatrix=_l(t.fovY,t.aspect,t.near,t.far),t.dirty=!0}function hm(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function _l(t,e,r,n){const i=1/Math.tan(t*.5),s=1/(r-n);return new Float32Array([i/e,0,0,0,0,i,0,0,0,0,n*s,-1,0,0,r*n*s,0])}function dm(t,e,r){const n=new Float32Array([t[0]-e[0],t[1]-e[1],t[2]-e[2]]);fn(n);const i=mi(r,n);fn(i);const s=mi(n,i);return new Float32Array([i[0],s[0],n[0],0,i[1],s[1],n[1],0,i[2],s[2],n[2],0,-is(i,t),-is(s,t),-is(n,t),1])}function fn(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);e>1e-5&&(t[0]/=e,t[1]/=e,t[2]/=e)}function mi(t,e){return new Float32Array([t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]])}function is(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Dn(t){const e=Math.tan(t.fovY/2),r=t.aspect*e,n=e;return new Float32Array([t.right[0]*r,t.right[1]*r,t.right[2]*r,0,t.up[0]*n,t.up[1]*n,t.up[2]*n,0,t.forward[0],t.forward[1],t.forward[2],0,0,0,0,1])}function bo(t,e,r){const n=Dn(t),i=w(n[0]*e+n[4]*r+n[8]*1,n[1]*e+n[5]*r+n[9]*1,n[2]*e+n[6]*r+n[10]*1);return An(i,i),{origin:t.position,direction:i,invDir:w(1/i[0],1/i[1],1/i[2])}}function mm(t,e,r){const n=w(e[0]-t.origin[0],e[1]-t.origin[1],e[2]-t.origin[2]),i=lr(n,t.direction);if(i<0)return-1;const s=lr(n,n)-i*i,o=r*r;if(s>o)return-1;const a=Math.sqrt(o-s),c=i-a;return c<0?-1:c}function ss(t,e,r){const n=t.direction[0]!==0?1/t.direction[0]:t.direction[0]>=0?1e30:-1e30;let i=(e[0]-t.origin[0])*n,s=(r[0]-t.origin[0])*n;i>s&&([i,s]=[s,i]);const o=t.direction[1]!==0?1/t.direction[1]:t.direction[1]>=0?1e30:-1e30;let a=(e[1]-t.origin[1])*o,c=(r[1]-t.origin[1])*o;if(a>c&&([a,c]=[c,a]),i>c||a>s)return-1;a>i&&(i=a),c<s&&(s=c);const l=t.direction[2]!==0?1/t.direction[2]:t.direction[2]>=0?1e30:-1e30;let u=(e[2]-t.origin[2])*l,f=(r[2]-t.origin[2])*l;return u>f&&([u,f]=[f,u]),i>f||u>s||(u>i&&(i=u),f<s&&(s=f),s<0)?-1:i>=0?i:0}const it=Number.MAX_VALUE,st=-Number.MAX_VALUE,pm=32;class gm{constructor(e,r,n,i){this.v0=e,this.v1=r,this.v2=n,this.originalIndex=i;const s=e[0],o=e[1],a=e[2],c=r[0],l=r[1],u=r[2],f=n[0],h=n[1],m=n[2];this.center=[(s+c+f)/3,(o+l+h)/3,(a+u+m)/3];var d=Math.min(s,c,f),p=Math.min(o,l,h),b=Math.min(a,u,m);this.MinValues=[d,p,b];var y=Math.max(s,c,f),x=Math.max(o,l,h),C=Math.max(a,u,m);this.MaxValues=[y,x,C]}originalIndex;center;MinValues;MaxValues}class os{minBounds;maxBounds;triangleCount;startIndex;constructor(e,r,n,i){this.minBounds=e,this.maxBounds=r,this.triangleCount=n,this.startIndex=i}}class bm{Triangles=[];builtTriangles=[];Nodes=[];buildBVH(e){this.Triangles=[],this.builtTriangles=[],this.Nodes=[];const r=e.getNumTriangles();this.Triangles=e.getTriangles();let n=it,i=it,s=it,o=st,a=st,c=st;for(let l=0;l<r;l++){const u=[this.Triangles[l].vA.pos[0],this.Triangles[l].vA.pos[1],this.Triangles[l].vA.pos[2]],f=[this.Triangles[l].vB.pos[0],this.Triangles[l].vB.pos[1],this.Triangles[l].vB.pos[2]],h=[this.Triangles[l].vC.pos[0],this.Triangles[l].vC.pos[1],this.Triangles[l].vC.pos[2]],m=new gm(u,f,h,l);this.builtTriangles.push(m);const d=m.MinValues,p=m.MaxValues;d[0]<n&&(n=d[0]),d[1]<i&&(i=d[1]),d[2]<s&&(s=d[2]),p[0]>o&&(o=p[0]),p[1]>a&&(a=p[1]),p[2]>c&&(c=p[2])}this.Nodes.push(new os([n,i,s],[o,a,c],-1,-1)),this.buildTree(0,0,r)}getReorderedIndices(e){const r=new Uint32Array(this.builtTriangles.length*3);for(let n=0;n<this.builtTriangles.length;n++){const i=this.builtTriangles[n].originalIndex;r[n*3+0]=e[i*3+0],r[n*3+1]=e[i*3+1],r[n*3+2]=e[i*3+2]}return r}buildTree(e,r,n,i=0){const s=this.Nodes[e],o=[s.maxBounds[0]-s.minBounds[0],s.maxBounds[1]-s.minBounds[1],s.maxBounds[2]-s.minBounds[2]],a=this.computeCost(o,n),c=this.chooseSplit(s,r,n);if(c.cost<a&&i<pm){let l=[it,it,it],u=[st,st,st],f=[it,it,it],h=[st,st,st],m=0;for(let g=r;g<r+n;g++){const M=this.builtTriangles[g];let E;switch(c.axis){case 0:E=M.center[0];break;case 1:E=M.center[1];break;case 2:E=M.center[2];break;default:E=M.center[0];break}if(E<c.position){M.MinValues[0]<l[0]&&(l[0]=M.MinValues[0]),M.MinValues[1]<l[1]&&(l[1]=M.MinValues[1]),M.MinValues[2]<l[2]&&(l[2]=M.MinValues[2]),M.MaxValues[0]>u[0]&&(u[0]=M.MaxValues[0]),M.MaxValues[1]>u[1]&&(u[1]=M.MaxValues[1]),M.MaxValues[2]>u[2]&&(u[2]=M.MaxValues[2]);const B=this.builtTriangles[r+m];this.builtTriangles[r+m]=M,this.builtTriangles[g]=B,m++}else M.MinValues[0]<f[0]&&(f[0]=M.MinValues[0]),M.MinValues[1]<f[1]&&(f[1]=M.MinValues[1]),M.MinValues[2]<f[2]&&(f[2]=M.MinValues[2]),M.MaxValues[0]>h[0]&&(h[0]=M.MaxValues[0]),M.MaxValues[1]>h[1]&&(h[1]=M.MaxValues[1]),M.MaxValues[2]>h[2]&&(h[2]=M.MaxValues[2])}if(m===0||m===n){s.startIndex=r,s.triangleCount=n,this.Nodes[e]=s;return}const d=r,p=r+m,b=new os(l,u,-1,d),y=new os(f,h,-1,p),x=this.Nodes.length;this.Nodes.push(b);const C=this.Nodes.length;this.Nodes.push(y),s.startIndex=x,this.Nodes[e]=s,this.buildTree(x,d,m,i+1),this.buildTree(C,p,n-m,i+1)}else s.startIndex=r,s.triangleCount=n,this.Nodes[e]=s}computeCost(e,r){return r===0?0:(e[0]*e[1]+e[1]*e[2]+e[2]*e[0])*r}expandBin(e,r){e.count++;for(let n=0;n<3;n++)r.MinValues[n]<e.minBounds[n]&&(e.minBounds[n]=r.MinValues[n]),r.MaxValues[n]>e.maxBounds[n]&&(e.maxBounds[n]=r.MaxValues[n])}mergeBins(e,r){return{count:e.count+r.count,minBounds:[Math.min(e.minBounds[0],r.minBounds[0]),Math.min(e.minBounds[1],r.minBounds[1]),Math.min(e.minBounds[2],r.minBounds[2])],maxBounds:[Math.max(e.maxBounds[0],r.maxBounds[0]),Math.max(e.maxBounds[1],r.maxBounds[1]),Math.max(e.maxBounds[2],r.maxBounds[2])]}}chooseSplit(e,r,n){let s=Number.MAX_VALUE,o=-1,a=0;for(let c=0;c<3;c++){const l=e.minBounds[c],f=e.maxBounds[c]-l;if(f<1e-5)continue;const h=[];for(let p=0;p<12;p++)h.push({count:0,minBounds:[it,it,it],maxBounds:[st,st,st]});for(let p=0;p<n;p++){const b=this.builtTriangles[r+p],y=(b.center[c]-l)/f;let x=Math.floor(y*12);x>=12&&(x=11),x<0&&(x=0),this.expandBin(h[x],b)}const m=[];m[0]=h[0];for(let p=1;p<11;p++)m[p]=this.mergeBins(m[p-1],h[p]);const d=[];d[10]=h[11];for(let p=9;p>=0;p--)d[p]=this.mergeBins(d[p+1],h[p+1]);for(let p=0;p<11;p++){const b=[m[p].maxBounds[0]-m[p].minBounds[0],m[p].maxBounds[1]-m[p].minBounds[1],m[p].maxBounds[2]-m[p].minBounds[2]],y=[d[p].maxBounds[0]-d[p].minBounds[0],d[p].maxBounds[1]-d[p].minBounds[1],d[p].maxBounds[2]-d[p].minBounds[2]],x=this.computeCost(b,m[p].count)+this.computeCost(y,d[p].count);x<s&&(s=x,o=c,a=l+f*(p+1)/12)}}return{axis:o,position:a,cost:s}}generateWireframeGeometry(e=1/0){const r=[],n=(a,c)=>{r.push(a[0],a[1],a[2],c[0],c[1],c[2])},i=(a,c)=>{const l=[a[0],a[1],a[2]],u=[c[0],a[1],a[2]],f=[a[0],c[1],a[2]],h=[c[0],c[1],a[2]],m=[a[0],a[1],c[2]],d=[c[0],a[1],c[2]],p=[a[0],c[1],c[2]],b=[c[0],c[1],c[2]];n(l,u),n(u,h),n(h,f),n(f,l),n(m,d),n(d,b),n(b,p),n(p,m),n(l,m),n(u,d),n(f,p),n(h,b)},s=[{index:0,depth:0}];for(;s.length>0;){const{index:a,depth:c}=s.pop(),l=this.Nodes[a];c>=e||(l.triangleCount===-1?(s.push({index:l.startIndex,depth:c+1}),s.push({index:l.startIndex+1,depth:c+1}),c==e-1&&i(l.minBounds,l.maxBounds)):i(l.minBounds,l.maxBounds))}const o=new Float32Array(r);return{vertexData:o,count:o.length/3}}traverse(e,r=1/0){let n=Number.MAX_VALUE;const i=this.Nodes[0],s=ss(e,i.minBounds,i.maxBounds);if(s<0)return-1;const o=[{index:0,depth:0,dist:s}];for(;o.length>0;){const{index:a,depth:c,dist:l}=o.pop(),u=this.Nodes[a];if(l>=n)continue;if(u.triangleCount>=0||c===r){l<n&&(n=l);continue}const m=u.startIndex,d=u.startIndex+1,p=this.Nodes[m],b=this.Nodes[d],y=ss(e,p.minBounds,p.maxBounds),x=ss(e,b.minBounds,b.maxBounds);y>=0&&x>=0?y<x?(o.push({index:d,depth:c+1,dist:x}),o.push({index:m,depth:c+1,dist:y})):(o.push({index:m,depth:c+1,dist:y}),o.push({index:d,depth:c+1,dist:x})):y>=0?o.push({index:m,depth:c+1,dist:y}):x>=0&&o.push({index:d,depth:c+1,dist:x})}return n===Number.MAX_VALUE?-1:n}getFlattenedBVHData(e=0){const r=this.Nodes.length,n=new ArrayBuffer(r*8*4),i=new Float32Array(n),s=new Uint32Array(n),o=l=>{const u=this.Nodes[l];return u.triangleCount>0?1:1+o(u.startIndex)+o(u.startIndex+1)};let a=0;const c=(l,u)=>{const f=a++,h=this.Nodes[l];if(i[f*8+0]=h.minBounds[0],i[f*8+1]=h.minBounds[1],i[f*8+2]=h.minBounds[2],i[f*8+4]=h.maxBounds[0],i[f*8+5]=h.maxBounds[1],i[f*8+6]=h.maxBounds[2],s[f*8+7]=h.triangleCount>0?h.triangleCount:0,h.triangleCount>0)s[f*8+3]=h.startIndex;else{s[f*8+3]=u+e;const m=h.startIndex,d=f+1+o(m);c(m,d),c(h.startIndex+1,u)}};return c(0,r),{data:n,numNodes:r}}}async function Ul(t,e,r,n){return n._parse(t,e,r,n)}function Nt(t,e){if(!t)throw new Error(e||"loader assertion failed.")}const _i=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),Ba=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Ba&&parseFloat(Ba[1]);const Aa=globalThis,Ta=globalThis.process||{};function ym(t){if(typeof window<"u"&&window.process?.type==="renderer"||typeof process<"u"&&process.versions?.electron)return!0;const r=typeof navigator<"u"&&navigator.userAgent;return!!(r&&r.indexOf("Electron")>=0)}function yo(){return!(typeof process=="object"&&String(process)==="[object process]"&&!process?.browser)||ym()}const Fl="4.1.0";function vm(t){try{const e=window[t],r="__storage_test__";return e.setItem(r,r),e.removeItem(r),e}catch{return null}}class xm{constructor(e,r,n="sessionStorage"){this.storage=vm(n),this.id=e,this.config=r,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){const r=JSON.stringify(this.config);this.storage.setItem(this.id,r)}}_loadConfiguration(){let e={};if(this.storage){const r=this.storage.getItem(this.id);e=r?JSON.parse(r):{}}return Object.assign(this.config,e),this}}function Bm(t){let e;return t<10?e=`${t.toFixed(2)}ms`:t<100?e=`${t.toFixed(1)}ms`:t<1e3?e=`${t.toFixed(0)}ms`:e=`${(t/1e3).toFixed(2)}s`,e}function Am(t,e=8){const r=Math.max(e-t.length,0);return`${" ".repeat(r)}${t}`}var pi;(function(t){t[t.BLACK=30]="BLACK",t[t.RED=31]="RED",t[t.GREEN=32]="GREEN",t[t.YELLOW=33]="YELLOW",t[t.BLUE=34]="BLUE",t[t.MAGENTA=35]="MAGENTA",t[t.CYAN=36]="CYAN",t[t.WHITE=37]="WHITE",t[t.BRIGHT_BLACK=90]="BRIGHT_BLACK",t[t.BRIGHT_RED=91]="BRIGHT_RED",t[t.BRIGHT_GREEN=92]="BRIGHT_GREEN",t[t.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",t[t.BRIGHT_BLUE=94]="BRIGHT_BLUE",t[t.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",t[t.BRIGHT_CYAN=96]="BRIGHT_CYAN",t[t.BRIGHT_WHITE=97]="BRIGHT_WHITE"})(pi||(pi={}));const Tm=10;function Ca(t){return typeof t!="string"?t:(t=t.toUpperCase(),pi[t]||pi.WHITE)}function Cm(t,e,r){return!yo&&typeof t=="string"&&(e&&(t=`\x1B[${Ca(e)}m${t}\x1B[39m`),r&&(t=`\x1B[${Ca(r)+Tm}m${t}\x1B[49m`)),t}function Mm(t,e=["constructor"]){const r=Object.getPrototypeOf(t),n=Object.getOwnPropertyNames(r),i=t;for(const s of n){const o=i[s];typeof o=="function"&&(e.find(a=>s===a)||(i[s]=o.bind(t)))}}function vo(t,e){if(!t)throw new Error("Assertion failed")}function Br(){let t;if(yo()&&Aa.performance)t=Aa?.performance?.now?.();else if("hrtime"in Ta){const e=Ta?.hrtime?.();t=e[0]*1e3+e[1]/1e6}else t=Date.now();return t}const Ar={debug:yo()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},Em={enabled:!0,level:0};function Tr(){}const Ma={},Ea={once:!0};class xo{constructor({id:e}={id:""}){this.VERSION=Fl,this._startTs=Br(),this._deltaTs=Br(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new xm(`__probe-${this.id}__`,Em),this.timeStamp(`${this.id} started`),Mm(this),Object.seal(this)}set level(e){this.setLevel(e)}get level(){return this.getLevel()}isEnabled(){return this._storage.config.enabled}getLevel(){return this._storage.config.level}getTotal(){return Number((Br()-this._startTs).toPrecision(10))}getDelta(){return Number((Br()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._storage.setConfiguration({enabled:e}),this}setLevel(e){return this._storage.setConfiguration({level:e}),this}get(e){return this._storage.config[e]}set(e,r){this._storage.setConfiguration({[e]:r})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,r){if(!e)throw new Error(r||"Assertion failed")}warn(e){return this._getLogFunction(0,e,Ar.warn,arguments,Ea)}error(e){return this._getLogFunction(0,e,Ar.error,arguments)}deprecated(e,r){return this.warn(`\`${e}\` is deprecated and will be removed in a later version. Use \`${r}\` instead`)}removed(e,r){return this.error(`\`${e}\` has been removed. Use \`${r}\` instead`)}probe(e,r){return this._getLogFunction(e,r,Ar.log,arguments,{time:!0,once:!0})}log(e,r){return this._getLogFunction(e,r,Ar.debug,arguments)}info(e,r){return this._getLogFunction(e,r,console.info,arguments)}once(e,r){return this._getLogFunction(e,r,Ar.debug||Ar.info,arguments,Ea)}table(e,r,n){return r?this._getLogFunction(e,r,console.table||Tr,n&&[n],{tag:Sm(r)}):Tr}time(e,r){return this._getLogFunction(e,r,console.time?console.time:console.info)}timeEnd(e,r){return this._getLogFunction(e,r,console.timeEnd?console.timeEnd:console.info)}timeStamp(e,r){return this._getLogFunction(e,r,console.timeStamp||Tr)}group(e,r,n={collapsed:!1}){const i=wa({logLevel:e,message:r,opts:n}),{collapsed:s}=n;return i.method=(s?console.groupCollapsed:console.group)||console.info,this._getLogFunction(i)}groupCollapsed(e,r,n={}){return this.group(e,r,Object.assign({},n,{collapsed:!0}))}groupEnd(e){return this._getLogFunction(e,"",console.groupEnd||Tr)}withGroup(e,r,n){this.group(e,r)();try{n()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&this.getLevel()>=Ll(e)}_getLogFunction(e,r,n,i,s){if(this._shouldLog(e)){s=wa({logLevel:e,message:r,args:i,opts:s}),n=n||s.method,vo(n),s.total=this.getTotal(),s.delta=this.getDelta(),this._deltaTs=Br();const o=s.tag||s.message;if(s.once&&o)if(!Ma[o])Ma[o]=Br();else return Tr;return r=wm(this.id,s.message,s),n.bind(console,r,...s.args)}return Tr}}xo.VERSION=Fl;function Ll(t){if(!t)return 0;let e;switch(typeof t){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return vo(Number.isFinite(e)&&e>=0),e}function wa(t){const{logLevel:e,message:r}=t;t.logLevel=Ll(e);const n=t.args?Array.from(t.args):[];for(;n.length&&n.shift()!==r;);switch(typeof e){case"string":case"function":r!==void 0&&n.unshift(r),t.message=e;break;case"object":Object.assign(t,e);break}typeof t.message=="function"&&(t.message=t.message());const i=typeof t.message;return vo(i==="string"||i==="object"),Object.assign(t,{args:n},t.opts)}function wm(t,e,r){if(typeof e=="string"){const n=r.time?Am(Bm(r.total)):"";e=r.time?`${t}: ${n}  ${e}`:`${t}: ${e}`,e=Cm(e,r.color,r.background)}return e}function Sm(t){for(const e in t)for(const r in t[e])return r||"untitled";return"empty"}const as="4.3.3",Pm=as[0]>="0"&&as[0]<="9"?`v${as}`:"";function Im(){const t=new xo({id:"loaders.gl"});return globalThis.loaders=globalThis.loaders||{},globalThis.loaders.log=t,globalThis.loaders.version=Pm,globalThis.probe=globalThis.probe||{},globalThis.probe.loaders=t,t}const Om=Im();function Rm(t,e){return Nl(t||{},e)}function Nl(t,e,r=0){if(r>3)return e;const n={...t};for(const[i,s]of Object.entries(e))s&&typeof s=="object"&&!Array.isArray(s)?n[i]=Nl(n[i]||{},e[i],r+1):n[i]=e[i];return n}function Gm(t){globalThis.loaders||={},globalThis.loaders.modules||={},Object.assign(globalThis.loaders.modules,t)}function Dm(t){return globalThis.loaders?.modules?.[t]||null}const _m="latest";function Um(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.3.3"),globalThis._loadersgl_.version}const jl=Um();function jt(t,e){if(!t)throw new Error(e||"loaders.gl assertion failed.")}const lt=typeof process!="object"||String(process)!=="[object process]"||process.browser,Bo=typeof importScripts=="function",Fm=typeof window<"u"&&typeof window.orientation<"u",Sa=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Sa&&parseFloat(Sa[1]);class Lm{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,r){this.name=e,this.workerThread=r,this.result=new Promise((n,i)=>{this._resolve=n,this._reject=i})}postMessage(e,r){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:r})}done(e){jt(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){jt(this.isRunning),this.isRunning=!1,this._reject(e)}}class cs{terminate(){}}const ls=new Map;function Nm(t){jt(t.source&&!t.url||!t.source&&t.url);let e=ls.get(t.source||t.url);return e||(t.url&&(e=jm(t.url),ls.set(t.url,e)),t.source&&(e=Vl(t.source),ls.set(t.source,e))),jt(e),e}function jm(t){if(!t.startsWith("http"))return t;const e=Vm(t);return Vl(e)}function Vl(t){const e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}function Vm(t){return`try {
  importScripts('${t}');
} catch (error) {
  console.error(error);
  throw error;
}`}function Hl(t,e=!0,r){const n=r||new Set;if(t){if(Pa(t))n.add(t);else if(Pa(t.buffer))n.add(t.buffer);else if(!ArrayBuffer.isView(t)){if(e&&typeof t=="object")for(const i in t)Hl(t[i],e,n)}}return r===void 0?Array.from(n):[]}function Pa(t){return t?t instanceof ArrayBuffer||typeof MessagePort<"u"&&t instanceof MessagePort||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas:!1}const us=()=>{};class js{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return typeof Worker<"u"&&lt||typeof cs<"u"&&!lt}constructor(e){const{name:r,source:n,url:i}=e;jt(n||i),this.name=r,this.source=n,this.url=i,this.onMessage=us,this.onError=s=>console.log(s),this.worker=lt?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=us,this.onError=us,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,r){r=r||Hl(e),this.worker.postMessage(e,r)}_getErrorFromErrorEvent(e){let r="Failed to load ";return r+=`worker ${this.name} from ${this.url}. `,e.message&&(r+=`${e.message} in `),e.lineno&&(r+=`:${e.lineno}:${e.colno}`),new Error(r)}_createBrowserWorker(){this._loadableURL=Nm({source:this.source,url:this.url});const e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=r=>{r.data?this.onMessage(r.data):this.onError(new Error("No data received"))},e.onerror=r=>{this.onError(this._getErrorFromErrorEvent(r)),this.terminated=!0},e.onmessageerror=r=>console.error(r),e}_createNodeWorker(){let e;if(this.url){const n=this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`;e=new cs(n,{eval:!1})}else if(this.source)e=new cs(this.source,{eval:!0});else throw new Error("no worker");return e.on("message",r=>{this.onMessage(r)}),e.on("error",r=>{this.onError(r)}),e.on("exit",r=>{}),e}}class Hm{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return js.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,r=(i,s,o)=>i.done(o),n=(i,s)=>i.error(s)){const i=new Promise(s=>(this.jobQueue.push({name:e,onMessage:r,onError:n,onStart:s}),this));return this._startQueuedJob(),await i}async _startQueuedJob(){if(!this.jobQueue.length)return;const e=this._getAvailableWorker();if(!e)return;const r=this.jobQueue.shift();if(r){this.onDebug({message:"Starting job",name:r.name,workerThread:e,backlog:this.jobQueue.length});const n=new Lm(r.name,e);e.onMessage=i=>r.onMessage(n,i.type,i.payload),e.onError=i=>r.onError(n,i),r.onStart(n);try{await n.result}catch(i){console.error(`Worker exception: ${i}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!lt||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this._getMaxConcurrency()){this.count++;const e=`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;return new js({name:e,source:this.source,url:this.url})}return null}_getMaxConcurrency(){return Fm?this.maxMobileConcurrency:this.maxConcurrency}}const km={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class Kt{props;workerPools=new Map;static _workerFarm;static isSupported(){return js.isSupported()}static getWorkerFarm(e={}){return Kt._workerFarm=Kt._workerFarm||new Kt({}),Kt._workerFarm.setProps(e),Kt._workerFarm}constructor(e){this.props={...km},this.setProps(e),this.workerPools=new Map}destroy(){for(const e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(const r of this.workerPools.values())r.setProps(this._getWorkerPoolProps())}getWorkerPool(e){const{name:r,source:n,url:i}=e;let s=this.workerPools.get(r);return s||(s=new Hm({name:r,source:n,url:i}),s.setProps(this._getWorkerPoolProps()),this.workerPools.set(r,s)),s}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}function zm(t,e={}){const r=e[t.id]||{},n=lt?`${t.id}-worker.js`:`${t.id}-worker-node.js`;let i=r.workerUrl;if(!i&&t.id==="compression"&&(i=e.workerUrl),e._workerType==="test"&&(lt?i=`modules/${t.module}/dist/${n}`:i=`modules/${t.module}/src/workers/${t.id}-worker-node.ts`),!i){let s=t.version;s==="latest"&&(s=_m);const o=s?`@${s}`:"";i=`https://unpkg.com/@loaders.gl/${t.module}${o}/dist/${n}`}return jt(i),i}function Jm(t,e=jl){jt(t,"no worker provided");const r=t.version;return!(!e||!r)}const fs={};async function hr(t,e=null,r={},n=null){return e&&(t=Wm(t,e,r,n)),fs[t]=fs[t]||qm(t),await fs[t]}function Wm(t,e,r={},n=null){if(!r.useLocalLibraries&&t.startsWith("http"))return t;n=n||t;const i=r.modules||{};return i[n]?i[n]:lt?r.CDN?(jt(r.CDN.startsWith("http")),`${r.CDN}/${e}@${jl}/dist/libs/${n}`):Bo?`../src/libs/${n}`:`modules/${e}/src/libs/${n}`:`modules/${e}/dist/libs/${n}`}async function qm(t){if(t.endsWith("wasm"))return await Ym(t);if(!lt)try{const{requireFromFile:r}=globalThis.loaders||{};return await r?.(t)}catch(r){return console.error(r),null}if(Bo)return importScripts(t);const e=await Xm(t);return Km(e,t)}function Km(t,e){if(!lt){const{requireFromString:n}=globalThis.loaders||{};return n?.(t,e)}if(Bo)return eval.call(globalThis,t),null;const r=document.createElement("script");r.id=e;try{r.appendChild(document.createTextNode(t))}catch{r.text=t}return document.body.appendChild(r),null}async function Ym(t){const{readFileAsArrayBuffer:e}=globalThis.loaders||{};return lt||!e||t.startsWith("http")?await(await fetch(t)).arrayBuffer():await e(t)}async function Xm(t){const{readFileAsText:e}=globalThis.loaders||{};return lt||!e||t.startsWith("http")?await(await fetch(t)).text():await e(t)}function Qm(t,e){return!Kt.isSupported()||!lt&&!e?._nodeWorkers?!1:t.worker&&e?.worker}async function $m(t,e,r,n,i){const s=t.id,o=zm(t,r),c=Kt.getWorkerFarm(r).getWorkerPool({name:s,url:o});r=JSON.parse(JSON.stringify(r)),n=JSON.parse(JSON.stringify(n||{}));const l=await c.startJob("process-on-worker",Zm.bind(null,i));return l.postMessage("process",{input:e,options:r,context:n}),await(await l.result).result}async function Zm(t,e,r,n){switch(r){case"done":e.done(n);break;case"error":e.error(new Error(n.error));break;case"process":const{id:i,input:s,options:o}=n;try{const a=await t(s,o);e.postMessage("done",{id:i,result:a})}catch(a){const c=a instanceof Error?a.message:"unknown error";e.postMessage("error",{id:i,error:c})}break;default:console.warn(`parse-with-worker unknown message ${r}`)}}function ep(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Ia(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Ia(t,0,e):""}function Ia(t,e,r){if(t.byteLength<=e+r)return"";const n=new DataView(t);let i="";for(let s=0;s<r;s++)i+=String.fromCharCode(n.getUint8(e+s));return i}function tp(t){try{return JSON.parse(t)}catch{throw new Error(`Failed to parse JSON from data starting with "${ep(t)}"`)}}function rp(t,e,r){if(r=r||t.byteLength,t.byteLength<r||e.byteLength<r)return!1;const n=new Uint8Array(t),i=new Uint8Array(e);for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}function np(...t){return ip(t)}function ip(t){const e=t.map(s=>s instanceof ArrayBuffer?new Uint8Array(s):s),r=e.reduce((s,o)=>s+o.byteLength,0),n=new Uint8Array(r);let i=0;for(const s of e)n.set(s,i),i+=s.byteLength;return n.buffer}function kl(t,e,r){const n=r!==void 0?new Uint8Array(t).subarray(e,e+r):new Uint8Array(t).subarray(e);return new Uint8Array(n).buffer}function _n(t,e){return Nt(t>=0),Nt(e>0),t+(e-1)&-4}function sp(t,e,r){let n;if(t instanceof ArrayBuffer)n=new Uint8Array(t);else{const i=t.byteOffset,s=t.byteLength;n=new Uint8Array(t.buffer||t.arrayBuffer,i,s)}return e.set(n,r),r+_n(n.byteLength,4)}async function op(t){const e=[];for await(const r of t)e.push(r);return np(...e)}let ap="";const Oa={};function cp(t){for(const e in Oa)if(t.startsWith(e)){const r=Oa[e];t=t.replace(e,r)}return!t.startsWith("http://")&&!t.startsWith("https://")&&(t=`${ap}${t}`),t}function lp(t){return t&&typeof t=="object"&&t.isBuffer}function zl(t){if(lp(t))return t;if(t instanceof ArrayBuffer)return t;if(ArrayBuffer.isView(t))return t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer:t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);if(typeof t=="string"){const e=t;return new TextEncoder().encode(e).buffer}if(t&&typeof t=="object"&&t._toArrayBuffer)return t._toArrayBuffer();throw new Error("toArrayBuffer")}function Jl(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(e+1):""}function up(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(0,e):""}const fp=t=>typeof t=="boolean",hn=t=>typeof t=="function",Un=t=>t!==null&&typeof t=="object",Ra=t=>Un(t)&&t.constructor==={}.constructor,hp=t=>!!t&&typeof t[Symbol.iterator]=="function",dp=t=>t&&typeof t[Symbol.asyncIterator]=="function",br=t=>typeof Response<"u"&&t instanceof Response||t&&t.arrayBuffer&&t.text&&t.json,yr=t=>typeof Blob<"u"&&t instanceof Blob,mp=t=>t&&typeof t=="object"&&t.isBuffer,pp=t=>typeof ReadableStream<"u"&&t instanceof ReadableStream||Un(t)&&hn(t.tee)&&hn(t.cancel)&&hn(t.getReader),gp=t=>Un(t)&&hn(t.read)&&hn(t.pipe)&&fp(t.readable),Wl=t=>pp(t)||gp(t);class bp extends Error{constructor(e,r){super(e),this.reason=r.reason,this.url=r.url,this.response=r.response}reason;url;response}const yp=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,vp=/^([-\w.]+\/[-\w.+]+)/;function Ga(t,e){return t.toLowerCase()===e.toLowerCase()}function xp(t){const e=vp.exec(t);return e?e[1]:t}function Da(t){const e=yp.exec(t);return e?e[1]:""}const ql=/\?.*/;function Bp(t){const e=t.match(ql);return e&&e[0]}function Ao(t){return t.replace(ql,"")}function Ap(t){if(t.length<50)return t;const e=t.slice(t.length-15);return`${t.substr(0,32)}...${e}`}function Ui(t){return br(t)?t.url:yr(t)?t.name||"":typeof t=="string"?t:""}function To(t){if(br(t)){const e=t,r=e.headers.get("content-type")||"",n=Ao(e.url);return xp(r)||Da(n)}return yr(t)?t.type||"":typeof t=="string"?Da(t):""}function Tp(t){return br(t)?t.headers["content-length"]||-1:yr(t)?t.size:typeof t=="string"?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1}async function Kl(t){if(br(t))return t;const e={},r=Tp(t);r>=0&&(e["content-length"]=String(r));const n=Ui(t),i=To(t);i&&(e["content-type"]=i);const s=await Ep(t);s&&(e["x-first-bytes"]=s),typeof t=="string"&&(t=new TextEncoder().encode(t));const o=new Response(t,{headers:e});return Object.defineProperty(o,"url",{value:n}),o}async function Cp(t){if(!t.ok)throw await Mp(t)}async function Mp(t){const e=Ap(t.url);let r=`Failed to fetch resource (${t.status}) ${t.statusText}: ${e}`;r=r.length>100?`${r.slice(0,100)}...`:r;const n={reason:t.statusText,url:t.url,response:t};try{const i=t.headers.get("Content-Type");n.reason=!t.bodyUsed&&i?.includes("application/json")?await t.json():await t.text()}catch{}return new bp(r,n)}async function Ep(t){if(typeof t=="string")return`data:,${t.slice(0,5)}`;if(t instanceof Blob){const r=t.slice(0,5);return await new Promise(n=>{const i=new FileReader;i.onload=s=>n(s?.target?.result),i.readAsDataURL(r)})}if(t instanceof ArrayBuffer){const r=t.slice(0,5);return`data:base64,${wp(r)}`}return null}function wp(t){let e="";const r=new Uint8Array(t);for(let n=0;n<r.byteLength;n++)e+=String.fromCharCode(r[n]);return btoa(e)}function Sp(t){return!Pp(t)&&!Ip(t)}function Pp(t){return t.startsWith("http:")||t.startsWith("https:")}function Ip(t){return t.startsWith("data:")}async function _a(t,e){if(typeof t=="string"){const r=cp(t);return Sp(r)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,e):await fetch(r,e)}return await Kl(t)}const Ua=new xo({id:"loaders.gl"});class Op{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}class Rp{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}}const Yl={fetch:null,mimeType:void 0,nothrow:!1,log:new Rp,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:_i,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]},Gp={throws:"nothrow",dataType:"(no longer used)",uri:"baseUri",method:"fetch.method",headers:"fetch.headers",body:"fetch.body",mode:"fetch.mode",credentials:"fetch.credentials",cache:"fetch.cache",redirect:"fetch.redirect",referrer:"fetch.referrer",referrerPolicy:"fetch.referrerPolicy",integrity:"fetch.integrity",keepalive:"fetch.keepalive",signal:"fetch.signal"};function Xl(){globalThis.loaders=globalThis.loaders||{};const{loaders:t}=globalThis;return t._state||(t._state={}),t._state}function Ql(){const t=Xl();return t.globalOptions=t.globalOptions||{...Yl},t.globalOptions}function Dp(t,e,r,n){return r=r||[],r=Array.isArray(r)?r:[r],_p(t,r),Fp(e,t,n)}function _p(t,e){Fa(t,null,Yl,Gp,e);for(const r of e){const n=t&&t[r.id]||{},i=r.options&&r.options[r.id]||{},s=r.deprecatedOptions&&r.deprecatedOptions[r.id]||{};Fa(n,r.id,i,s,e)}}function Fa(t,e,r,n,i){const s=e||"Top level",o=e?`${e}.`:"";for(const a in t){const c=!e&&Un(t[a]),l=a==="baseUri"&&!e,u=a==="workerUrl"&&e;if(!(a in r)&&!l&&!u){if(a in n)Ua.warn(`${s} loader option '${o}${a}' no longer supported, use '${n[a]}'`)();else if(!c){const f=Up(a,i);Ua.warn(`${s} loader option '${o}${a}' not recognized. ${f}`)()}}}}function Up(t,e){const r=t.toLowerCase();let n="";for(const i of e)for(const s in i.options){if(t===s)return`Did you mean '${i.id}.${s}'?`;const o=s.toLowerCase();(r.startsWith(o)||o.startsWith(r))&&(n=n||`Did you mean '${i.id}.${s}'?`)}return n}function Fp(t,e,r){const i={...t.options||{}};return Lp(i,r),i.log===null&&(i.log=new Op),La(i,Ql()),La(i,e),i}function La(t,e){for(const r in e)if(r in e){const n=e[r];Ra(n)&&Ra(t[r])?t[r]={...t[r],...e[r]}:t[r]=e[r]}}function Lp(t,e){e&&!("baseUri"in t)&&(t.baseUri=e)}function Co(t){return t?(Array.isArray(t)&&(t=t[0]),Array.isArray(t?.extensions)):!1}function $l(t){Nt(t,"null loader"),Nt(Co(t),"invalid loader");let e;return Array.isArray(t)&&(e=t[1],t=t[0],t={...t,options:{...t.options,...e}}),(t?.parseTextSync||t?.parseText)&&(t.text=!0),t.text||(t.binary=!0),t}const Np=()=>{const t=Xl();return t.loaderRegistry=t.loaderRegistry||[],t.loaderRegistry};function jp(){return Np()}const Vp=/\.([^.]+)$/;async function Hp(t,e=[],r,n){if(!Zl(t))return null;let i=Na(t,e,{...r,nothrow:!0},n);if(i)return i;if(yr(t)&&(t=await t.slice(0,10).arrayBuffer(),i=Na(t,e,r,n)),!i&&!r?.nothrow)throw new Error(eu(t));return i}function Na(t,e=[],r,n){if(!Zl(t))return null;if(e&&!Array.isArray(e))return $l(e);let i=[];e&&(i=i.concat(e)),r?.ignoreRegisteredLoaders||i.push(...jp()),zp(i);const s=kp(t,i,r,n);if(!s&&!r?.nothrow)throw new Error(eu(t));return s}function kp(t,e,r,n){const i=Ui(t),s=To(t),o=Ao(i)||n?.url;let a=null,c="";return r?.mimeType&&(a=hs(e,r?.mimeType),c=`match forced by supplied MIME type ${r?.mimeType}`),a=a||Jp(e,o),c=c||(a?`matched url ${o}`:""),a=a||hs(e,s),c=c||(a?`matched MIME type ${s}`:""),a=a||qp(e,t),c=c||(a?`matched initial data ${tu(t)}`:""),r?.fallbackMimeType&&(a=a||hs(e,r?.fallbackMimeType),c=c||(a?`matched fallback MIME type ${s}`:"")),c&&Om.log(1,`selectLoader selected ${a?.name}: ${c}.`),a}function Zl(t){return!(t instanceof Response&&t.status===204)}function eu(t){const e=Ui(t),r=To(t);let n="No valid loader found (";n+=e?`${Jl(e)}, `:"no url provided, ",n+=`MIME type: ${r?`"${r}"`:"not provided"}, `;const i=t?tu(t):"";return n+=i?` first bytes: "${i}"`:"first bytes: not available",n+=")",n}function zp(t){for(const e of t)$l(e)}function Jp(t,e){const r=e&&Vp.exec(e),n=r&&r[1];return n?Wp(t,n):null}function Wp(t,e){e=e.toLowerCase();for(const r of t)for(const n of r.extensions)if(n.toLowerCase()===e)return r;return null}function hs(t,e){for(const r of t)if(r.mimeTypes?.some(n=>Ga(e,n))||Ga(e,`application/x.${r.id}`))return r;return null}function qp(t,e){if(!e)return null;for(const r of t)if(typeof e=="string"){if(Kp(e,r))return r}else if(ArrayBuffer.isView(e)){if(ja(e.buffer,e.byteOffset,r))return r}else if(e instanceof ArrayBuffer&&ja(e,0,r))return r;return null}function Kp(t,e){return e.testText?e.testText(t):(Array.isArray(e.tests)?e.tests:[e.tests]).some(n=>t.startsWith(n))}function ja(t,e,r){return(Array.isArray(r.tests)?r.tests:[r.tests]).some(i=>Yp(t,e,r,i))}function Yp(t,e,r,n){if(n instanceof ArrayBuffer)return rp(n,t,n.byteLength);switch(typeof n){case"function":return n(t);case"string":const i=Vs(t,e,n.length);return n===i;default:return!1}}function tu(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Vs(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Vs(t,0,e):""}function Vs(t,e,r){if(t.byteLength<e+r)return"";const n=new DataView(t);let i="";for(let s=0;s<r;s++)i+=String.fromCharCode(n.getUint8(e+s));return i}const Xp=256*1024;function*Qp(t,e){const r=e?.chunkSize||Xp;let n=0;const i=new TextEncoder;for(;n<t.length;){const s=Math.min(t.length-n,r),o=t.slice(n,n+s);n+=s,yield i.encode(o)}}const $p=256*1024;function*Zp(t,e={}){const{chunkSize:r=$p}=e;let n=0;for(;n<t.byteLength;){const i=Math.min(t.byteLength-n,r),s=new ArrayBuffer(i),o=new Uint8Array(t,n,i);new Uint8Array(s).set(o),n+=i,yield s}}const e0=1024*1024;async function*t0(t,e){const r=e?.chunkSize||e0;let n=0;for(;n<t.size;){const i=n+r,s=await t.slice(n,i).arrayBuffer();n=i,yield s}}function Va(t,e){return _i?r0(t,e):n0(t)}async function*r0(t,e){const r=t.getReader();let n;try{for(;;){const i=n||r.read();e?._streamReadAhead&&(n=r.read());const{done:s,value:o}=await i;if(s)return;yield zl(o)}}catch{r.releaseLock()}}async function*n0(t,e){for await(const r of t)yield zl(r)}function i0(t,e){if(typeof t=="string")return Qp(t,e);if(t instanceof ArrayBuffer)return Zp(t,e);if(yr(t))return t0(t,e);if(Wl(t))return Va(t,e);if(br(t))return Va(t.body,e);throw new Error("makeIterator")}const ru="Cannot convert supplied data type";function s0(t,e,r){if(e.text&&typeof t=="string")return t;if(mp(t)&&(t=t.buffer),t instanceof ArrayBuffer){const n=t;return e.text&&!e.binary?new TextDecoder("utf8").decode(n):n}if(ArrayBuffer.isView(t)){if(e.text&&!e.binary)return new TextDecoder("utf8").decode(t);let n=t.buffer;const i=t.byteLength||t.length;return(t.byteOffset!==0||i!==n.byteLength)&&(n=n.slice(t.byteOffset,t.byteOffset+i)),n}throw new Error(ru)}async function o0(t,e,r){const n=t instanceof ArrayBuffer||ArrayBuffer.isView(t);if(typeof t=="string"||n)return s0(t,e);if(yr(t)&&(t=await Kl(t)),br(t)){const i=t;return await Cp(i),e.binary?await i.arrayBuffer():await i.text()}if(Wl(t)&&(t=i0(t,r)),hp(t)||dp(t))return op(t);throw new Error(ru)}function nu(t,e){const r=Ql(),n=t||r;return typeof n.fetch=="function"?n.fetch:Un(n.fetch)?i=>_a(i,n.fetch):e?.fetch?e?.fetch:_a}function a0(t,e,r){if(r)return r;const n={fetch:nu(e,t),...t};if(n.url){const i=Ao(n.url);n.baseUrl=i,n.queryString=Bp(n.url),n.filename=Jl(i),n.baseUrl=up(i)}return Array.isArray(n.loaders)||(n.loaders=null),n}function c0(t,e){if(t&&!Array.isArray(t))return t;let r;if(t&&(r=Array.isArray(t)?t:[t]),e&&e.loaders){const n=Array.isArray(e.loaders)?e.loaders:[e.loaders];r=r?[...r,...n]:n}return r&&r.length?r:void 0}async function gi(t,e,r,n){e&&!Array.isArray(e)&&!Co(e)&&(n=void 0,r=e,e=void 0),t=await t,r=r||{};const i=Ui(t),o=c0(e,n),a=await Hp(t,o,r);return a?(r=Dp(r,a,o,i),n=a0({url:i,_parse:gi,loaders:o},r,n||null),await l0(a,t,r,n)):null}async function l0(t,e,r,n){if(Jm(t),r=Rm(t.options,r),br(e)){const s=e,{ok:o,redirected:a,status:c,statusText:l,type:u,url:f}=s,h=Object.fromEntries(s.headers.entries());n.response={headers:h,ok:o,redirected:a,status:c,statusText:l,type:u,url:f}}e=await o0(e,t,r);const i=t;if(i.parseTextSync&&typeof e=="string")return i.parseTextSync(e,r,n);if(Qm(t,r))return await $m(t,e,r,n,gi);if(i.parseText&&typeof e=="string")return await i.parseText(e,r,n);if(i.parse)return await i.parse(e,r,n);throw jt(!i.parseSync),new Error(`${t.id} loader - no parser found and worker is disabled`)}function u0(t){switch(t.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function f0(t){let e=1/0,r=1/0,n=1/0,i=-1/0,s=-1/0,o=-1/0;const a=t.POSITION?t.POSITION.value:[],c=a&&a.length;for(let l=0;l<c;l+=3){const u=a[l],f=a[l+1],h=a[l+2];e=u<e?u:e,r=f<r?f:r,n=h<n?h:n,i=u>i?u:i,s=f>s?f:s,o=h>o?h:o}return[[e,r,n],[i,s,o]]}function h0(t,e,r){const n=u0(e.value),i=r||d0(e);return{name:t,type:{type:"fixed-size-list",listSize:e.size,children:[{name:"value",type:n}]},nullable:!1,metadata:i}}function d0(t){const e={};return"byteOffset"in t&&(e.byteOffset=t.byteOffset.toString(10)),"byteStride"in t&&(e.byteStride=t.byteStride.toString(10)),"normalized"in t&&(e.normalized=t.normalized.toString()),e}async function m0(t,e,r,n){let i,s;!Array.isArray(e)&&!Co(e)?(i=[],s=e):(i=e,s=r);const o=nu(s);let a=t;return typeof t=="string"&&(a=await o(t)),yr(t)&&(a=await o(t)),Array.isArray(i)?await gi(a,i,s):await gi(a,i,s)}const p0="4.3.3",g0=globalThis.loaders?.parseImageNode,Hs=typeof Image<"u",ks=typeof ImageBitmap<"u",b0=!!g0,zs=_i?!0:b0;function y0(t){switch(t){case"auto":return ks||Hs||zs;case"imagebitmap":return ks;case"image":return Hs;case"data":return zs;default:throw new Error(`@loaders.gl/images: image ${t} not supported in this environment`)}}function v0(){if(ks)return"imagebitmap";if(Hs)return"image";if(zs)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function x0(t){const e=B0(t);if(!e)throw new Error("Not an image");return e}function iu(t){switch(x0(t)){case"data":return t;case"image":case"imagebitmap":const e=document.createElement("canvas"),r=e.getContext("2d");if(!r)throw new Error("getImageData");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height);default:throw new Error("getImageData")}}function B0(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap?"imagebitmap":typeof Image<"u"&&t instanceof Image?"image":t&&typeof t=="object"&&t.data&&t.width&&t.height?"data":null}const A0=/^data:image\/svg\+xml/,T0=/\.svg((\?|#).*)?$/;function Mo(t){return t&&(A0.test(t)||T0.test(t))}function C0(t,e){if(Mo(e)){let n=new TextDecoder().decode(t);try{typeof unescape=="function"&&typeof encodeURIComponent=="function"&&(n=unescape(encodeURIComponent(n)))}catch(s){throw new Error(s.message)}return`data:image/svg+xml;base64,${btoa(n)}`}return su(t,e)}function su(t,e){if(Mo(e))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(t)])}async function ou(t,e,r){const n=C0(t,r),i=self.URL||self.webkitURL,s=typeof n!="string"&&i.createObjectURL(n);try{return await M0(s||n,e)}finally{s&&i.revokeObjectURL(s)}}async function M0(t,e){const r=new Image;return r.src=t,e.image&&e.image.decode&&r.decode?(await r.decode(),r):await new Promise((n,i)=>{try{r.onload=()=>n(r),r.onerror=s=>{const o=s instanceof Error?s.message:"error";i(new Error(o))}}catch(s){i(s)}})}const E0={};let Ha=!0;async function w0(t,e,r){let n;Mo(r)?n=await ou(t,e,r):n=su(t,r);const i=e&&e.imagebitmap;return await S0(n,i)}async function S0(t,e=null){if((P0(e)||!Ha)&&(e=null),e)try{return await createImageBitmap(t,e)}catch(r){console.warn(r),Ha=!1}return await createImageBitmap(t)}function P0(t){for(const e in t||E0)return!1;return!0}function I0(t){return!D0(t,"ftyp",4)||(t[8]&96)===0?null:O0(t)}function O0(t){switch(R0(t,8,12).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}function R0(t,e,r){return String.fromCharCode(...t.slice(e,r))}function G0(t){return[...t].map(e=>e.charCodeAt(0))}function D0(t,e,r=0){const n=G0(e);for(let i=0;i<n.length;++i)if(n[i]!==t[i+r])return!1;return!0}const Ct=!1,dn=!0;function Eo(t){const e=Fn(t);return U0(e)||N0(e)||F0(e)||L0(e)||_0(e)}function _0(t){const e=new Uint8Array(t instanceof DataView?t.buffer:t),r=I0(e);return r?{mimeType:r.mimeType,width:0,height:0}:null}function U0(t){const e=Fn(t);return e.byteLength>=24&&e.getUint32(0,Ct)===2303741511?{mimeType:"image/png",width:e.getUint32(16,Ct),height:e.getUint32(20,Ct)}:null}function F0(t){const e=Fn(t);return e.byteLength>=10&&e.getUint32(0,Ct)===1195984440?{mimeType:"image/gif",width:e.getUint16(6,dn),height:e.getUint16(8,dn)}:null}function L0(t){const e=Fn(t);return e.byteLength>=14&&e.getUint16(0,Ct)===16973&&e.getUint32(2,dn)===e.byteLength?{mimeType:"image/bmp",width:e.getUint32(18,dn),height:e.getUint32(22,dn)}:null}function N0(t){const e=Fn(t);if(!(e.byteLength>=3&&e.getUint16(0,Ct)===65496&&e.getUint8(2)===255))return null;const{tableMarkers:n,sofMarkers:i}=j0();let s=2;for(;s+9<e.byteLength;){const o=e.getUint16(s,Ct);if(i.has(o))return{mimeType:"image/jpeg",height:e.getUint16(s+5,Ct),width:e.getUint16(s+7,Ct)};if(!n.has(o))return null;s+=2,s+=e.getUint16(s,Ct)}return null}function j0(){const t=new Set([65499,65476,65484,65501,65534]);for(let r=65504;r<65520;++r)t.add(r);return{tableMarkers:t,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function Fn(t){if(t instanceof DataView)return t;if(ArrayBuffer.isView(t))return new DataView(t.buffer);if(t instanceof ArrayBuffer)return new DataView(t);throw new Error("toDataView")}async function V0(t,e){const{mimeType:r}=Eo(t)||{},n=globalThis.loaders?.parseImageNode;return Nt(n),await n(t,r)}async function H0(t,e,r){e=e||{};const i=(e.image||{}).type||"auto",{url:s}=r||{},o=k0(i);let a;switch(o){case"imagebitmap":a=await w0(t,e,s);break;case"image":a=await ou(t,e,s);break;case"data":a=await V0(t);break;default:Nt(!1)}return i==="data"&&(a=iu(a)),a}function k0(t){switch(t){case"auto":case"data":return v0();default:return y0(t),t}}const z0=["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],J0=["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],W0={image:{type:"auto",decode:!0}},q0={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:p0,mimeTypes:J0,extensions:z0,parse:H0,tests:[t=>!!Eo(new DataView(t))],options:W0},ds={};function K0(t){if(ds[t]===void 0){const e=_i?X0(t):Y0(t);ds[t]=e}return ds[t]}function Y0(t){const e=["image/png","image/jpeg","image/gif"],r=globalThis.loaders?.imageFormatsNode||e;return!!globalThis.loaders?.parseImageNode&&r.includes(t)}function X0(t){switch(t){case"image/avif":case"image/webp":return Q0(t);default:return!0}}function Q0(t){try{return document.createElement("canvas").toDataURL(t).indexOf(`data:${t}`)===0}catch{return!1}}function nt(t,e){if(!t)throw new Error(e||"assert failed: gltf")}const au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},ka=["SCALAR","VEC2","VEC3","VEC4"],$0=[[Int8Array,5120],[Uint8Array,5121],[Int16Array,5122],[Uint16Array,5123],[Uint32Array,5125],[Float32Array,5126],[Float64Array,5130]],Z0=new Map($0),eg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tg={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},rg={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function lu(t){return ka[t-1]||ka[0]}function Fi(t){const e=Z0.get(t.constructor);if(!e)throw new Error("Illegal typed array");return e}function wo(t,e){const r=rg[t.componentType],n=eg[t.type],i=tg[t.componentType],s=t.count*n,o=t.count*n*i;nt(o>=0&&o<=e.byteLength);const a=cu[t.componentType],c=au[t.type];return{ArrayType:r,length:s,byteLength:o,componentByteSize:a,numberOfComponentsInElement:c}}function ng(t,e,r){const n=t.bufferViews[r];nt(n);const i=n.buffer,s=e[i];nt(s);const o=(n.byteOffset||0)+s.byteOffset;return new Uint8Array(s.arrayBuffer,o,n.byteLength)}function ig(t,e,r){const n=typeof r=="number"?t.accessors?.[r]:r;if(!n)throw new Error(`No gltf accessor ${JSON.stringify(r)}`);const i=t.bufferViews?.[n.bufferView||0];if(!i)throw new Error(`No gltf buffer view for accessor ${i}`);const{arrayBuffer:s,byteOffset:o}=e[i.buffer],a=(o||0)+(n.byteOffset||0)+(i.byteOffset||0),{ArrayType:c,length:l,componentByteSize:u,numberOfComponentsInElement:f}=wo(n,i),h=u*f,m=i.byteStride||h;if(typeof i.byteStride>"u"||i.byteStride===h)return new c(s,a,l);const d=new c(l);for(let p=0;p<n.count;p++){const b=new c(s,a+p*m,f);d.set(b,p*f)}return d}function sg(){return{asset:{version:"2.0",generator:"loaders.gl"},buffers:[],extensions:{},extensionsRequired:[],extensionsUsed:[]}}class Oe{gltf;sourceBuffers;byteLength;constructor(e){this.gltf={json:e?.json||sg(),buffers:e?.buffers||[],images:e?.images||[]},this.sourceBuffers=[],this.byteLength=0,this.gltf.buffers&&this.gltf.buffers[0]&&(this.byteLength=this.gltf.buffers[0].byteLength,this.sourceBuffers=[this.gltf.buffers[0]])}get json(){return this.gltf.json}getApplicationData(e){return this.json[e]}getExtraData(e){return(this.json.extras||{})[e]}hasExtension(e){const r=this.getUsedExtensions().find(i=>i===e),n=this.getRequiredExtensions().find(i=>i===e);return typeof r=="string"||typeof n=="string"}getExtension(e){const r=this.getUsedExtensions().find(i=>i===e),n=this.json.extensions||{};return r?n[e]:null}getRequiredExtension(e){return this.getRequiredExtensions().find(n=>n===e)?this.getExtension(e):null}getRequiredExtensions(){return this.json.extensionsRequired||[]}getUsedExtensions(){return this.json.extensionsUsed||[]}getRemovedExtensions(){return this.json.extensionsRemoved||[]}getObjectExtension(e,r){return(e.extensions||{})[r]}getScene(e){return this.getObject("scenes",e)}getNode(e){return this.getObject("nodes",e)}getSkin(e){return this.getObject("skins",e)}getMesh(e){return this.getObject("meshes",e)}getMaterial(e){return this.getObject("materials",e)}getAccessor(e){return this.getObject("accessors",e)}getTexture(e){return this.getObject("textures",e)}getSampler(e){return this.getObject("samplers",e)}getImage(e){return this.getObject("images",e)}getBufferView(e){return this.getObject("bufferViews",e)}getBuffer(e){return this.getObject("buffers",e)}getObject(e,r){if(typeof r=="object")return r;const n=this.json[e]&&this.json[e][r];if(!n)throw new Error(`glTF file error: Could not find ${e}[${r}]`);return n}getTypedArrayForBufferView(e){e=this.getBufferView(e);const r=e.buffer,n=this.gltf.buffers[r];nt(n);const i=(e.byteOffset||0)+n.byteOffset;return new Uint8Array(n.arrayBuffer,i,e.byteLength)}getTypedArrayForAccessor(e){const r=this.getAccessor(e);return ig(this.gltf.json,this.gltf.buffers,r)}getTypedArrayForImageData(e){e=this.getAccessor(e);const r=this.getBufferView(e.bufferView),i=this.getBuffer(r.buffer).data,s=r.byteOffset||0;return new Uint8Array(i,s,r.byteLength)}addApplicationData(e,r){return this.json[e]=r,this}addExtraData(e,r){return this.json.extras=this.json.extras||{},this.json.extras[e]=r,this}addObjectExtension(e,r,n){return e.extensions=e.extensions||{},e.extensions[r]=n,this.registerUsedExtension(r),this}setObjectExtension(e,r,n){const i=e.extensions||{};i[r]=n}removeObjectExtension(e,r){const n=e?.extensions||{};if(n[r]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const i=this.json.extensionsRemoved;i.includes(r)||i.push(r)}delete n[r]}addExtension(e,r={}){return nt(r),this.json.extensions=this.json.extensions||{},this.json.extensions[e]=r,this.registerUsedExtension(e),r}addRequiredExtension(e,r={}){return nt(r),this.addExtension(e,r),this.registerRequiredExtension(e),r}registerUsedExtension(e){this.json.extensionsUsed=this.json.extensionsUsed||[],this.json.extensionsUsed.find(r=>r===e)||this.json.extensionsUsed.push(e)}registerRequiredExtension(e){this.registerUsedExtension(e),this.json.extensionsRequired=this.json.extensionsRequired||[],this.json.extensionsRequired.find(r=>r===e)||this.json.extensionsRequired.push(e)}removeExtension(e){if(this.json.extensions?.[e]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const r=this.json.extensionsRemoved;r.includes(e)||r.push(e)}this.json.extensions&&delete this.json.extensions[e],this.json.extensionsRequired&&this._removeStringFromArray(this.json.extensionsRequired,e),this.json.extensionsUsed&&this._removeStringFromArray(this.json.extensionsUsed,e)}setDefaultScene(e){this.json.scene=e}addScene(e){const{nodeIndices:r}=e;return this.json.scenes=this.json.scenes||[],this.json.scenes.push({nodes:r}),this.json.scenes.length-1}addNode(e){const{meshIndex:r,matrix:n}=e;this.json.nodes=this.json.nodes||[];const i={mesh:r};return n&&(i.matrix=n),this.json.nodes.push(i),this.json.nodes.length-1}addMesh(e){const{attributes:r,indices:n,material:i,mode:s=4}=e,a={primitives:[{attributes:this._addAttributes(r),mode:s}]};if(n){const c=this._addIndices(n);a.primitives[0].indices=c}return Number.isFinite(i)&&(a.primitives[0].material=i),this.json.meshes=this.json.meshes||[],this.json.meshes.push(a),this.json.meshes.length-1}addPointCloud(e){const n={primitives:[{attributes:this._addAttributes(e),mode:0}]};return this.json.meshes=this.json.meshes||[],this.json.meshes.push(n),this.json.meshes.length-1}addImage(e,r){const n=Eo(e),i=r||n?.mimeType,o={bufferView:this.addBufferView(e),mimeType:i};return this.json.images=this.json.images||[],this.json.images.push(o),this.json.images.length-1}addBufferView(e,r=0,n=this.byteLength){const i=e.byteLength;nt(Number.isFinite(i)),this.sourceBuffers=this.sourceBuffers||[],this.sourceBuffers.push(e);const s={buffer:r,byteOffset:n,byteLength:i};return this.byteLength+=_n(i,4),this.json.bufferViews=this.json.bufferViews||[],this.json.bufferViews.push(s),this.json.bufferViews.length-1}addAccessor(e,r){const n={bufferView:e,type:lu(r.size),componentType:r.componentType,count:r.count,max:r.max,min:r.min};return this.json.accessors=this.json.accessors||[],this.json.accessors.push(n),this.json.accessors.length-1}addBinaryBuffer(e,r={size:3}){const n=this.addBufferView(e);let i={min:r.min,max:r.max};(!i.min||!i.max)&&(i=this._getAccessorMinMax(e,r.size));const s={size:r.size,componentType:Fi(e),count:Math.round(e.length/r.size),min:i.min,max:i.max};return this.addAccessor(n,Object.assign(s,r))}addTexture(e){const{imageIndex:r}=e,n={source:r};return this.json.textures=this.json.textures||[],this.json.textures.push(n),this.json.textures.length-1}addMaterial(e){return this.json.materials=this.json.materials||[],this.json.materials.push(e),this.json.materials.length-1}createBinaryChunk(){const e=this.byteLength,r=new ArrayBuffer(e),n=new Uint8Array(r);let i=0;for(const s of this.sourceBuffers||[])i=sp(s,n,i);this.json?.buffers?.[0]?this.json.buffers[0].byteLength=e:this.json.buffers=[{byteLength:e}],this.gltf.binary=r,this.sourceBuffers=[r],this.gltf.buffers=[{arrayBuffer:r,byteOffset:0,byteLength:r.byteLength}]}_removeStringFromArray(e,r){let n=!0;for(;n;){const i=e.indexOf(r);i>-1?e.splice(i,1):n=!1}}_addAttributes(e={}){const r={};for(const n in e){const i=e[n],s=this._getGltfAttributeName(n),o=this.addBinaryBuffer(i.value,i);r[s]=o}return r}_addIndices(e){return this.addBinaryBuffer(e,{size:1})}_getGltfAttributeName(e){switch(e.toLowerCase()){case"position":case"positions":case"vertices":return"POSITION";case"normal":case"normals":return"NORMAL";case"color":case"colors":return"COLOR_0";case"texcoord":case"texcoords":return"TEXCOORD_0";default:return e}}_getAccessorMinMax(e,r){const n={min:null,max:null};if(e.length<r)return n;n.min=[],n.max=[];const i=e.subarray(0,r);for(const s of i)n.min.push(s),n.max.push(s);for(let s=r;s<e.length;s+=r)for(let o=0;o<r;o++)n.min[0+o]=Math.min(n.min[0+o],e[s+o]),n.max[0+o]=Math.max(n.max[0+o],e[s+o]);return n}}function za(t){return(t%1+1)%1}const uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,BOOLEAN:1,STRING:1,ENUM:1},og={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:BigInt64Array,UINT64:BigUint64Array,FLOAT32:Float32Array,FLOAT64:Float64Array},fu={INT8:1,UINT8:1,INT16:2,UINT16:2,INT32:4,UINT32:4,INT64:8,UINT64:8,FLOAT32:4,FLOAT64:8};function So(t,e){return fu[e]*uu[t]}function Li(t,e,r,n){if(r!=="UINT8"&&r!=="UINT16"&&r!=="UINT32"&&r!=="UINT64")return null;const i=t.getTypedArrayForBufferView(e),s=Ni(i,"SCALAR",r,n+1);return s instanceof BigInt64Array||s instanceof BigUint64Array?null:s}function Ni(t,e,r,n=1){const i=uu[e],s=og[r],o=fu[r],a=n*i,c=a*o;let l=t.buffer,u=t.byteOffset;return u%o!==0&&(l=new Uint8Array(l).slice(u,u+c).buffer,u=0),new s(l,u,a)}function Po(t,e,r){const n=`TEXCOORD_${e.texCoord||0}`,i=r.attributes[n],s=t.getTypedArrayForAccessor(i),o=t.gltf.json,a=e.index,c=o.textures?.[a]?.source;if(typeof c<"u"){const l=o.images?.[c]?.mimeType,u=t.gltf.images?.[c];if(u&&typeof u.width<"u"){const f=[];for(let h=0;h<s.length;h+=2){const m=ag(u,l,s,h,e.channels);f.push(m)}return f}}return[]}function hu(t,e,r,n,i){if(!r?.length)return;const s=[];for(const u of r){let f=n.findIndex(h=>h===u);f===-1&&(f=n.push(u)-1),s.push(f)}const o=new Uint32Array(s),a=t.gltf.buffers.push({arrayBuffer:o.buffer,byteOffset:o.byteOffset,byteLength:o.byteLength})-1,c=t.addBufferView(o,a,0),l=t.addAccessor(c,{size:1,componentType:Fi(o),count:o.length});i.attributes[e]=l}function ag(t,e,r,n,i=[0]){const s={r:{offset:0,shift:0},g:{offset:1,shift:8},b:{offset:2,shift:16},a:{offset:3,shift:24}},o=r[n],a=r[n+1];let c=1;e&&(e.indexOf("image/jpeg")!==-1||e.indexOf("image/png")!==-1)&&(c=4);const l=cg(o,a,t,c);let u=0;for(const f of i){const h=typeof f=="number"?Object.values(s)[f]:s[f],m=l+h.offset,d=iu(t);if(d.data.length<=m)throw new Error(`${d.data.length} <= ${m}`);const p=d.data[m];u|=p<<h.shift}return u}function cg(t,e,r,n=1){const i=r.width,s=za(t)*(i-1),o=Math.round(s),a=r.height,c=za(e)*(a-1),l=Math.round(c),u=r.components?r.components:n;return(l*i+o)*u}function du(t,e,r,n,i){const s=[];for(let o=0;o<e;o++){const a=r[o],c=r[o+1]-r[o];if(c+a>n)break;const l=a/i,u=c/i;s.push(t.slice(l,l+u))}return s}function mu(t,e,r){const n=[];for(let i=0;i<e;i++){const s=i*r;n.push(t.slice(s,s+r))}return n}function pu(t,e,r,n){if(r)throw new Error("Not implemented - arrayOffsets for strings is specified");if(n){const i=[],s=new TextDecoder("utf8");let o=0;for(let a=0;a<t;a++){const c=n[a+1]-n[a];if(c+o<=e.length){const l=e.subarray(o,c+o),u=s.decode(l);i.push(u),o+=c}}return i}return[]}const Nr="EXT_mesh_features",lg=Nr;async function ug(t,e){const r=new Oe(t);hg(r,e)}function fg(t,e){const r=new Oe(t);return mg(r),r.createBinaryChunk(),r.gltf}function hg(t,e){const r=t.gltf.json;if(r.meshes)for(const n of r.meshes)for(const i of n.primitives)dg(t,i,e)}function dg(t,e,r){if(!r?.gltf?.loadBuffers)return;const i=e.extensions?.[Nr]?.featureIds;if(i)for(const s of i){let o;if(typeof s.attribute<"u"){const a=`_FEATURE_ID_${s.attribute}`,c=e.attributes[a];o=t.getTypedArrayForAccessor(c)}else typeof s.texture<"u"&&r?.gltf?.loadImages?o=Po(t,s.texture,e):o=[];s.data=o}}function mg(t,e){const r=t.gltf.json.meshes;if(r)for(const n of r)for(const i of n.primitives)gg(t,i)}function pg(t,e,r,n){e.extensions||(e.extensions={});let i=e.extensions[Nr];i||(i={featureIds:[]},e.extensions[Nr]=i);const{featureIds:s}=i,o={featureCount:r.length,propertyTable:n,data:r};s.push(o),t.addObjectExtension(e,Nr,i)}function gg(t,e){const r=e.extensions?.[Nr];if(!r)return;const n=r.featureIds;n.forEach((i,s)=>{if(i.data){const{accessorKey:o,index:a}=bg(e.attributes),c=new Uint32Array(i.data);n[s]={featureCount:c.length,propertyTable:i.propertyTable,attribute:a},t.gltf.buffers.push({arrayBuffer:c.buffer,byteOffset:c.byteOffset,byteLength:c.byteLength});const l=t.addBufferView(c),u=t.addAccessor(l,{size:1,componentType:Fi(c),count:c.length});e.attributes[o]=u}})}function bg(t){const e="_FEATURE_ID_",r=Object.keys(t).filter(s=>s.indexOf(e)===0);let n=-1;for(const s of r){const o=Number(s.substring(e.length));o>n&&(n=o)}return n++,{accessorKey:`${e}${n}`,index:n}}const yg=Object.freeze(Object.defineProperty({__proto__:null,createExtMeshFeatures:pg,decode:ug,encode:fg,name:lg},Symbol.toStringTag,{value:"Module"})),kr="EXT_structural_metadata",vg=kr;async function xg(t,e){const r=new Oe(t);Ag(r,e)}function Bg(t,e){const r=new Oe(t);return Lg(r),r.createBinaryChunk(),r.gltf}function Ag(t,e){if(!e.gltf?.loadBuffers)return;const r=t.getExtension(kr);r&&(e.gltf?.loadImages&&Tg(t,r),Cg(t,r))}function Tg(t,e){const r=e.propertyTextures,n=t.gltf.json;if(r&&n.meshes)for(const i of n.meshes)for(const s of i.primitives)Eg(t,r,s,e)}function Cg(t,e){const r=e.schema;if(!r)return;const n=r.classes,i=e.propertyTables;if(n&&i)for(const s in n){const o=Mg(i,s);o&&Sg(t,r,o)}}function Mg(t,e){for(const r of t)if(r.class===e)return r;return null}function Eg(t,e,r,n){if(!e)return;const s=r.extensions?.[kr]?.propertyTextures;if(s)for(const o of s){const a=e[o];wg(t,a,r,n)}}function wg(t,e,r,n){if(!e.properties)return;n.dataAttributeNames||(n.dataAttributeNames=[]);const i=e.class;for(const s in e.properties){const o=`${i}_${s}`,a=e.properties?.[s];if(!a)continue;a.data||(a.data=[]);const c=a.data,l=Po(t,a,r);l!==null&&(hu(t,o,l,c,r),a.data=c,n.dataAttributeNames.push(o))}}function Sg(t,e,r){const n=e.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const i=r.count;for(const s in n.properties){const o=n.properties[s],a=r.properties?.[s];if(a){const c=Pg(t,e,o,i,a);a.data=c}}}function Pg(t,e,r,n,i){let s=[];const o=i.values,a=t.getTypedArrayForBufferView(o),c=Ig(t,r,i,n),l=Og(t,i,n);switch(r.type){case"SCALAR":case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":{s=Rg(r,n,a,c);break}case"BOOLEAN":throw new Error(`Not implemented - classProperty.type=${r.type}`);case"STRING":{s=pu(n,a,c,l);break}case"ENUM":{s=Gg(e,r,n,a,c);break}default:throw new Error(`Unknown classProperty type ${r.type}`)}return s}function Ig(t,e,r,n){return e.array&&typeof e.count>"u"&&typeof r.arrayOffsets<"u"?Li(t,r.arrayOffsets,r.arrayOffsetType||"UINT32",n):null}function Og(t,e,r){return typeof e.stringOffsets<"u"?Li(t,e.stringOffsets,e.stringOffsetType||"UINT32",r):null}function Rg(t,e,r,n){const i=t.array,s=t.count,o=So(t.type,t.componentType),a=r.byteLength/o;let c;return t.componentType?c=Ni(r,t.type,t.componentType,a):c=r,i?n?du(c,e,n,r.length,o):s?mu(c,e,s):[]:c}function Gg(t,e,r,n,i){const s=e.enumType;if(!s)throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");const o=t.enums?.[s];if(!o)throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${s}`);const a=o.valueType||"UINT16",c=So(e.type,a),l=n.byteLength/c;let u=Ni(n,e.type,a,l);if(u||(u=n),e.array){if(i)return Dg({valuesData:u,numberOfElements:r,arrayOffsets:i,valuesDataBytesLength:n.length,elementSize:c,enumEntry:o});const f=e.count;return f?_g(u,r,f,o):[]}return Io(u,0,r,o)}function Dg(t){const{valuesData:e,numberOfElements:r,arrayOffsets:n,valuesDataBytesLength:i,elementSize:s,enumEntry:o}=t,a=[];for(let c=0;c<r;c++){const l=n[c],u=n[c+1]-n[c];if(u+l>i)break;const f=l/s,h=u/s,m=Io(e,f,h,o);a.push(m)}return a}function _g(t,e,r,n){const i=[];for(let s=0;s<e;s++){const o=r*s,a=Io(t,o,r,n);i.push(a)}return i}function Io(t,e,r,n){const i=[];for(let s=0;s<r;s++)if(t instanceof BigInt64Array||t instanceof BigUint64Array)i.push("");else{const o=t[e+s],a=Ug(n,o);a?i.push(a.name):i.push("")}return i}function Ug(t,e){for(const r of t.values)if(r.value===e)return r;return null}const Fg="schemaClassId";function Lg(t,e){const r=t.getExtension(kr);if(r&&r.propertyTables)for(const n of r.propertyTables){const i=n.class,s=r.schema?.classes?.[i];n.properties&&s&&Ng(n,s,t)}}function Ng(t,e,r){for(const n in t.properties){const i=t.properties[n].data;if(i){const s=e.properties[n];if(s){const o=kg(i,s,r);t.properties[n]=o}}}}function jg(t,e,r=Fg){let n=t.getExtension(kr);n||(n=t.addExtension(kr)),n.schema=Vg(e,r,n.schema);const i=Hg(e,r,n.schema);return n.propertyTables||(n.propertyTables=[]),n.propertyTables.push(i)-1}function Vg(t,e,r){const n=r??{id:"schema_id"},i={properties:{}};for(const s of t){const o={type:s.elementType,componentType:s.componentType};i.properties[s.name]=o}return n.classes={},n.classes[e]=i,n}function Hg(t,e,r){const n={class:e,count:0};let i=0;const s=r.classes?.[e];for(const o of t){if(i===0&&(i=o.values.length),i!==o.values.length&&o.values.length)throw new Error("Illegal values in attributes");s?.properties[o.name]&&(n.properties||(n.properties={}),n.properties[o.name]={values:0,data:o.values})}return n.count=i,n}function kg(t,e,r){const n={values:0};if(e.type==="STRING"){const{stringData:i,stringOffsets:s}=Wg(t);n.stringOffsets=ms(s,r),n.values=ms(i,r)}else if(e.type==="SCALAR"&&e.componentType){const i=Jg(t,e.componentType);n.values=ms(i,r)}return n}const zg={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:Int32Array,UINT64:Uint32Array,FLOAT32:Float32Array,FLOAT64:Float64Array};function Jg(t,e){const r=[];for(const i of t)r.push(Number(i));const n=zg[e];if(!n)throw new Error("Illegal component type");return new n(r)}function Wg(t){const e=new TextEncoder,r=[];let n=0;for(const c of t){const l=e.encode(c);n+=l.length,r.push(l)}const i=new Uint8Array(n),s=[];let o=0;for(const c of r)i.set(c,o),s.push(o),o+=c.length;s.push(o);const a=new Uint32Array(s);return{stringData:i,stringOffsets:a}}function ms(t,e){return e.gltf.buffers.push({arrayBuffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength}),e.addBufferView(t)}const qg=Object.freeze(Object.defineProperty({__proto__:null,createExtStructuralMetadata:jg,decode:xg,encode:Bg,name:vg},Symbol.toStringTag,{value:"Module"})),gu="EXT_feature_metadata",Kg=gu;async function Yg(t,e){const r=new Oe(t);Xg(r,e)}function Xg(t,e){if(!e.gltf?.loadBuffers)return;const r=t.getExtension(gu);r&&(e.gltf?.loadImages&&Qg(t,r),$g(t,r))}function Qg(t,e){const r=e.schema;if(!r)return;const n=r.classes,{featureTextures:i}=e;if(n&&i)for(const s in n){const o=n[s],a=eb(i,s);a&&rb(t,a,o)}}function $g(t,e){const r=e.schema;if(!r)return;const n=r.classes,i=e.featureTables;if(n&&i)for(const s in n){const o=Zg(i,s);o&&tb(t,r,o)}}function Zg(t,e){for(const r in t){const n=t[r];if(n.class===e)return n}return null}function eb(t,e){for(const r in t){const n=t[r];if(n.class===e)return n}return null}function tb(t,e,r){if(!r.class)return;const n=e.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const i=r.count;for(const s in n.properties){const o=n.properties[s],a=r.properties?.[s];if(a){const c=nb(t,e,o,i,a);a.data=c}}}function rb(t,e,r){const n=e.class;for(const i in r.properties){const s=e?.properties?.[i];if(s){const o=cb(t,s,n);s.data=o}}}function nb(t,e,r,n,i){let s=[];const o=i.bufferView,a=t.getTypedArrayForBufferView(o),c=ib(t,r,i,n),l=sb(t,r,i,n);return r.type==="STRING"||r.componentType==="STRING"?s=pu(n,a,c,l):ob(r)&&(s=ab(r,n,a,c)),s}function ib(t,e,r,n){return e.type==="ARRAY"&&typeof e.componentCount>"u"&&typeof r.arrayOffsetBufferView<"u"?Li(t,r.arrayOffsetBufferView,r.offsetType||"UINT32",n):null}function sb(t,e,r,n){return typeof r.stringOffsetBufferView<"u"?Li(t,r.stringOffsetBufferView,r.offsetType||"UINT32",n):null}function ob(t){const e=["UINT8","INT16","UINT16","INT32","UINT32","INT64","UINT64","FLOAT32","FLOAT64"];return e.includes(t.type)||typeof t.componentType<"u"&&e.includes(t.componentType)}function ab(t,e,r,n){const i=t.type==="ARRAY",s=t.componentCount,o="SCALAR",a=t.componentType||t.type,c=So(o,a),l=r.byteLength/c,u=Ni(r,o,a,l);return i?n?du(u,e,n,r.length,c):s?mu(u,e,s):[]:u}function cb(t,e,r){const n=t.gltf.json;if(!n.meshes)return[];const i=[];for(const s of n.meshes)for(const o of s.primitives)lb(t,r,e,i,o);return i}function lb(t,e,r,n,i){const s={channels:r.channels,...r.texture},o=Po(t,s,i);o&&hu(t,e,o,n,i)}const ub=Object.freeze(Object.defineProperty({__proto__:null,decode:Yg,name:Kg},Symbol.toStringTag,{value:"Module"})),fb="4.3.3",hb="4.3.3",bi={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"};let Ja;async function Wa(t){Gm(t.modules);const e=Dm("basis");return e||(Ja||=db(t),await Ja)}async function db(t){let e=null,r=null;return[e,r]=await Promise.all([await hr(bi.TRANSCODER,"textures",t),await hr(bi.TRANSCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await mb(e,r)}function mb(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t(r).then(i=>{const{BasisFile:s,initializeBasis:o}=i;o(),n({BasisFile:s})})})}let ps;async function qa(t){const e=t.modules||{};return e.basisEncoder?e.basisEncoder:(ps=ps||pb(t),await ps)}async function pb(t){let e=null,r=null;return[e,r]=await Promise.all([await hr(bi.ENCODER,"textures",t),await hr(bi.ENCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await gb(e,r)}function gb(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t(r).then(i=>{const{BasisFile:s,KTX2File:o,initializeBasis:a,BasisEncoder:c}=i;a(),n({BasisFile:s,KTX2File:o,BasisEncoder:c})})})}const Cr={COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGBA_ASTC_4X4_KHR:37808},bb=["","WEBKIT_","MOZ_"],Ka={WEBGL_compressed_texture_s3tc:"dxt",WEBGL_compressed_texture_s3tc_srgb:"dxt-srgb",WEBGL_compressed_texture_etc1:"etc1",WEBGL_compressed_texture_etc:"etc2",WEBGL_compressed_texture_pvrtc:"pvrtc",WEBGL_compressed_texture_atc:"atc",WEBGL_compressed_texture_astc:"astc",EXT_texture_compression_rgtc:"rgtc"};let kn=null;function yb(t){if(!kn){t=t||vb()||void 0,kn=new Set;for(const e of bb)for(const r in Ka)if(t&&t.getExtension(`${e}${r}`)){const n=Ka[r];kn.add(n)}}return kn}function vb(){try{return document.createElement("canvas").getContext("webgl")}catch{return null}}const Qe=[171,75,84,88,32,50,48,187,13,10,26,10];function xb(t){const e=new Uint8Array(t);return!(e.byteLength<Qe.length||e[0]!==Qe[0]||e[1]!==Qe[1]||e[2]!==Qe[2]||e[3]!==Qe[3]||e[4]!==Qe[4]||e[5]!==Qe[5]||e[6]!==Qe[6]||e[7]!==Qe[7]||e[8]!==Qe[8]||e[9]!==Qe[9]||e[10]!==Qe[10]||e[11]!==Qe[11])}const Bb={etc1:{basisFormat:0,compressed:!0,format:Cr.COMPRESSED_RGB_ETC1_WEBGL},etc2:{basisFormat:1,compressed:!0},bc1:{basisFormat:2,compressed:!0,format:Cr.COMPRESSED_RGB_S3TC_DXT1_EXT},bc3:{basisFormat:3,compressed:!0,format:Cr.COMPRESSED_RGBA_S3TC_DXT5_EXT},bc4:{basisFormat:4,compressed:!0},bc5:{basisFormat:5,compressed:!0},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0},"bc7-m5":{basisFormat:7,compressed:!0},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:Cr.COMPRESSED_RGB_PVRTC_4BPPV1_IMG},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:Cr.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG},"astc-4x4":{basisFormat:10,compressed:!0,format:Cr.COMPRESSED_RGBA_ASTC_4X4_KHR},"atc-rgb":{basisFormat:11,compressed:!0},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0},rgba32:{basisFormat:13,compressed:!1},rgb565:{basisFormat:14,compressed:!1},bgr565:{basisFormat:15,compressed:!1},rgba4444:{basisFormat:16,compressed:!1}};async function Ab(t,e){if(e.basis.containerFormat==="auto"){if(xb(t)){const n=await qa(e);return Ya(n.KTX2File,t,e)}const{BasisFile:r}=await Wa(e);return gs(r,t,e)}switch(e.basis.module){case"encoder":const r=await qa(e);switch(e.basis.containerFormat){case"ktx2":return Ya(r.KTX2File,t,e);case"basis":default:return gs(r.BasisFile,t,e)}case"transcoder":default:const{BasisFile:n}=await Wa(e);return gs(n,t,e)}}function gs(t,e,r){const n=new t(new Uint8Array(e));try{if(!n.startTranscoding())throw new Error("Failed to start basis transcoding");const i=n.getNumImages(),s=[];for(let o=0;o<i;o++){const a=n.getNumLevels(o),c=[];for(let l=0;l<a;l++)c.push(Tb(n,o,l,r));s.push(c)}return s}finally{n.close(),n.delete()}}function Tb(t,e,r,n){const i=t.getImageWidth(e,r),s=t.getImageHeight(e,r),o=t.getHasAlpha(),{compressed:a,format:c,basisFormat:l}=bu(n,o),u=t.getImageTranscodedSizeInBytes(e,r,l),f=new Uint8Array(u);if(!t.transcodeImage(f,e,r,l,0,0))throw new Error("failed to start Basis transcoding");return{width:i,height:s,data:f,compressed:a,format:c,hasAlpha:o}}function Ya(t,e,r){const n=new t(new Uint8Array(e));try{if(!n.startTranscoding())throw new Error("failed to start KTX2 transcoding");const i=n.getLevels(),s=[];for(let o=0;o<i;o++)s.push(Cb(n,o,r));return[s]}finally{n.close(),n.delete()}}function Cb(t,e,r){const{alphaFlag:n,height:i,width:s}=t.getImageLevelInfo(e,0,0),{compressed:o,format:a,basisFormat:c}=bu(r,n),l=t.getImageTranscodedSizeInBytes(e,0,0,c),u=new Uint8Array(l);if(!t.transcodeImage(u,e,0,0,c,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{width:s,height:i,data:u,compressed:o,levelSize:l,hasAlpha:n,format:a}}function bu(t,e){let r=t&&t.basis&&t.basis.format;return r==="auto"&&(r=yu()),typeof r=="object"&&(r=e?r.alpha:r.noAlpha),r=r.toLowerCase(),Bb[r]}function yu(){const t=yb();return t.has("astc")?"astc-4x4":t.has("dxt")?{alpha:"bc3",noAlpha:"bc1"}:t.has("pvrtc")?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:t.has("etc1")?"etc1":t.has("etc2")?"etc2":"rgb565"}const Mb={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:hb,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",libraryPath:"libs/",containerFormat:"auto",module:"transcoder"}}},Eb={...Mb,parse:Ab},zr=!0,Xa=1735152710,Oo=12,yi=8,wb=1313821514,Sb=5130562,Pb=0,Ib=0,Ob=1;function Rb(t,e=0){return`${String.fromCharCode(t.getUint8(e+0))}${String.fromCharCode(t.getUint8(e+1))}${String.fromCharCode(t.getUint8(e+2))}${String.fromCharCode(t.getUint8(e+3))}`}function Gb(t,e=0,r={}){const n=new DataView(t),{magic:i=Xa}=r,s=n.getUint32(e,!1);return s===i||s===Xa}function Db(t,e,r=0,n={}){const i=new DataView(e),s=Rb(i,r+0),o=i.getUint32(r+4,zr),a=i.getUint32(r+8,zr);switch(Object.assign(t,{header:{byteOffset:r,byteLength:a,hasBinChunk:!1},type:s,version:o,json:{},binChunks:[]}),r+=Oo,t.version){case 1:return _b(t,i,r);case 2:return Ub(t,i,r,n={});default:throw new Error(`Invalid GLB version ${t.version}. Only supports version 1 and 2.`)}}function _b(t,e,r){Nt(t.header.byteLength>Oo+yi);const n=e.getUint32(r+0,zr),i=e.getUint32(r+4,zr);return r+=yi,Nt(i===Pb),Js(t,e,r,n),r+=n,r+=Ws(t,e,r,t.header.byteLength),r}function Ub(t,e,r,n){return Nt(t.header.byteLength>Oo+yi),Fb(t,e,r,n),r+t.header.byteLength}function Fb(t,e,r,n){for(;r+8<=t.header.byteLength;){const i=e.getUint32(r+0,zr),s=e.getUint32(r+4,zr);switch(r+=yi,s){case wb:Js(t,e,r,i);break;case Sb:Ws(t,e,r,i);break;case Ib:n.strict||Js(t,e,r,i);break;case Ob:n.strict||Ws(t,e,r,i);break}r+=_n(i,4)}return r}function Js(t,e,r,n){const i=new Uint8Array(e.buffer,r,n),o=new TextDecoder("utf8").decode(i);return t.json=JSON.parse(o),_n(n,4)}function Ws(t,e,r,n){return t.header.hasBinChunk=!0,t.binChunks.push({byteOffset:r,byteLength:n,arrayBuffer:e.buffer}),_n(n,4)}function vu(t,e){if(t.startsWith("data:")||t.startsWith("http:")||t.startsWith("https:"))return t;const n=e.baseUri||e.uri;if(!n)throw new Error(`'baseUri' must be provided to resolve relative url ${t}`);return n.substr(0,n.lastIndexOf("/")+1)+t}const Lb="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",Nb="B9h9z9tFBBBF8dL9gBB9gLaaaaaFa9gEaaaB9gGaaB9gFaFaEQSBBFBFFGEGEGIILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBNn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBcI9z9iqlBMc/j9JSIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMkRIbaG97FaK978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAnDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAnDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBRnCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBHiCFD9tAiAPD9OD9hD9RHiDQBTFtGmEYIPLdKeOnH8ZAIAQJDBIBHpCFD9tApAPD9OD9hD9RHpAIASJDBIBHyCFD9tAyAPD9OD9hD9RHyDQBTFtGmEYIPLdKeOnH8cDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAnD9uHnDyBjGBAEAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnA8ZA8cDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNiV8ZcpMyS8cQ8df8eb8fHdApAyDQNiV8ZcpMyS8cQ8df8eb8fHiDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/xLGEaK978jUUUUBCAlHE8kUUUUBGXGXAGCI9HQBGXAFC98ZHI9FQBABRGCBRLEXAGAGDBBBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMBBAGCTJRGALCIJHLAI9JQBMMAIAF9PQFAEAFCEZHLCGWHGqCBCTAGl/8MBAEABAICGWJHIAG/8cBBGXAL9FQBAEAEDBIBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMIBMAIAEAG/8cBBSFMABAFC98ZHGT+HUUUBAGAF9PQBAEAFCEZHICEWHLJCBCAALl/8MBAEABAGCEWJHGAL/8cBBAEAIT+HUUUBAGAEAL/8cBBMAECAJ8kUUUUBM+yEGGaO97GXAF9FQBCBRGEXABCTJHEAEDBBBHICBDtHLCUU98D8cFCUU98D8cEHKD9OABDBBBHOAIDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAOAIDQBFGENVcMTtmYi8ZpyHICTD+sFD/6FHND/gFAICTD+rFCTD+sFD/6FHVD/gFD/kFD/lFHI9DB/+g6DYAVAIALD+2FHLAVCUUUU94DtHcD9OD9RD/kFHVAVD/mFAIAID/mFANALANAcD9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHLD/kFCTD+rFAVAND/mFALD/kFCggEDtD9OD9QHVAIAND/mFALD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHIDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAOAKD9OAVAIDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM94FEa8jUUUUBCAlHE8kUUUUBABAFC98ZHIT+JUUUBGXAIAF9PQBAEAFCEZHLCEWHFJCBCAAFl/8MBAEABAICEWJHBAF/8cBBAEALT+JUUUBABAEAF/8cBBMAECAJ8kUUUUBM/hEIGaF97FaL978jUUUUBCTlRGGXAF9FQBCBREEXAGABDBBBHIABCTJHLDBBBHKDQILKOSQfbPden8c8d8e8fHOCTD+sFHNCID+rFDMIBAB9DBBU8/DY9D/zI818/DYANCEDtD9QD/6FD/nFHNAIAKDQBFGENVcMTtmYi8ZpyHICTD+rFCTD+sFD/6FD/mFHKAKD/mFANAICTD+sFD/6FD/mFHVAVD/mFANAOCTD+rFCTD+sFD/6FD/mFHOAOD/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHND/mF9DBBX9LDYHID/kFCggEDtHcD9OAVAND/mFAID/kFCTD+rFD9QHVAOAND/mFAID/kFCTD+rFAKAND/mFAID/kFAcD9OD9QHNDQBFTtGEmYILPdKOenHID8dBAGDBIBDyB+t+J83EBABCNJAID8dFAGDBIBDyF+t+J83EBALAVANDQNVi8ZcMpySQ8c8dfb8e8fHND8dBAGDBIBDyG+t+J83EBABCiJAND8dFAGDBIBDyE+t+J83EBABCAJRBAECIJHEAF9JQBMMM/3FGEaF978jUUUUBCoBlREGXAGCGrAF9sHIC98ZHL9FQBCBRGABRFEXAFAFDBBBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBAFCTJRFAGCIJHGAL9JQBMMGXALAI9PQBAEAICEZHGCGWHFqCBCoBAFl/8MBAEABALCGWJHLAF/8cBBGXAG9FQBAEAEDBIBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMIBMALAEAF/8cBBMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",jb=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),Vb=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]),Hb={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},kb={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};async function zb(t,e,r,n,i,s="NONE"){const o=await Jb();Kb(o,o.exports[kb[i]],t,e,r,n,o.exports[Hb[s||"NONE"]])}let bs;async function Jb(){return bs||(bs=Wb()),bs}async function Wb(){let t=Lb;WebAssembly.validate(jb)&&(t=Nb,console.log("Warning: meshopt_decoder is using experimental SIMD support"));const e=await WebAssembly.instantiate(qb(t),{});return await e.instance.exports.__wasm_call_ctors(),e.instance}function qb(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;++n){const i=t.charCodeAt(n);e[n]=i>96?i-71:i>64?i-65:i>47?i+4:i>46?63:62}let r=0;for(let n=0;n<t.length;++n)e[r++]=e[n]<60?Vb[e[n]]:(e[n]-60)*64+e[++n];return e.buffer.slice(0,r)}function Kb(t,e,r,n,i,s,o){const a=t.exports.sbrk,c=n+3&-4,l=a(c*i),u=a(s.length),f=new Uint8Array(t.exports.memory.buffer);f.set(s,u);const h=e(l,n,i,u,s.length);if(h===0&&o&&o(l,c,i),r.set(f.subarray(l,l+n*i)),a(l-a(0)),h!==0)throw new Error(`Malformed buffer data: ${h}`)}const vi="EXT_meshopt_compression",Yb=vi;async function Xb(t,e){const r=new Oe(t);if(!e?.gltf?.decompressMeshes||!e.gltf?.loadBuffers)return;const n=[];for(const i of t.json.bufferViews||[])n.push(Qb(r,i));await Promise.all(n),r.removeExtension(vi)}async function Qb(t,e){const r=t.getObjectExtension(e,vi);if(r){const{byteOffset:n=0,byteLength:i=0,byteStride:s,count:o,mode:a,filter:c="NONE",buffer:l}=r,u=t.gltf.buffers[l],f=new Uint8Array(u.arrayBuffer,u.byteOffset+n,i),h=new Uint8Array(t.gltf.buffers[e.buffer].arrayBuffer,e.byteOffset,e.byteLength);await zb(h,o,s,f,a,c),t.removeObjectExtension(e,vi)}}const $b=Object.freeze(Object.defineProperty({__proto__:null,decode:Xb,name:Yb},Symbol.toStringTag,{value:"Module"})),Er="EXT_texture_webp",Zb=Er;function e1(t,e){const r=new Oe(t);if(!K0("image/webp")){if(r.getRequiredExtensions().includes(Er))throw new Error(`gltf: Required extension ${Er} not supported by browser`);return}const{json:n}=r;for(const i of n.textures||[]){const s=r.getObjectExtension(i,Er);s&&(i.source=s.source),r.removeObjectExtension(i,Er)}r.removeExtension(Er)}const t1=Object.freeze(Object.defineProperty({__proto__:null,name:Zb,preprocess:e1},Symbol.toStringTag,{value:"Module"})),ri="KHR_texture_basisu",r1=ri;function n1(t,e){const r=new Oe(t),{json:n}=r;for(const i of n.textures||[]){const s=r.getObjectExtension(i,ri);s&&(i.source=s.source,r.removeObjectExtension(i,ri))}r.removeExtension(ri)}const i1=Object.freeze(Object.defineProperty({__proto__:null,name:r1,preprocess:n1},Symbol.toStringTag,{value:"Module"})),s1="4.3.3",o1={dataType:null,batchType:null,name:"Draco",id:"draco",module:"draco",version:s1,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:typeof WebAssembly=="object"?"wasm":"js",libraryPath:"libs/",extraAttributes:{},attributeNameEntry:void 0}}};function a1(t,e,r){const n=xu(e.metadata),i=[],s=c1(e.attributes);for(const o in t){const a=t[o],c=Qa(o,a,s[o]);i.push(c)}if(r){const o=Qa("indices",r);i.push(o)}return{fields:i,metadata:n}}function c1(t){const e={};for(const r in t){const n=t[r];e[n.name||"undefined"]=n}return e}function Qa(t,e,r){const n=r?xu(r.metadata):void 0;return h0(t,e,n)}function xu(t){Object.entries(t);const e={};for(const r in t)e[`${r}.string`]=JSON.stringify(t[r]);return e}const $a={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},l1={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},u1=4;class f1{draco;decoder;metadataQuerier;constructor(e){this.draco=e,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}destroy(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)}parseSync(e,r={}){const n=new this.draco.DecoderBuffer;n.Init(new Int8Array(e),e.byteLength),this._disableAttributeTransforms(r);const i=this.decoder.GetEncodedGeometryType(n),s=i===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{let o;switch(i){case this.draco.TRIANGULAR_MESH:o=this.decoder.DecodeBufferToMesh(n,s);break;case this.draco.POINT_CLOUD:o=this.decoder.DecodeBufferToPointCloud(n,s);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!o.ok()||!s.ptr){const h=`DRACO decompression failed: ${o.error_msg()}`;throw new Error(h)}const a=this._getDracoLoaderData(s,i,r),c=this._getMeshData(s,a,r),l=f0(c.attributes),u=a1(c.attributes,a,c.indices);return{loader:"draco",loaderData:a,header:{vertexCount:s.num_points(),boundingBox:l},...c,schema:u}}finally{this.draco.destroy(n),s&&this.draco.destroy(s)}}_getDracoLoaderData(e,r,n){const i=this._getTopLevelMetadata(e),s=this._getDracoAttributes(e,n);return{geometry_type:r,num_attributes:e.num_attributes(),num_points:e.num_points(),num_faces:e instanceof this.draco.Mesh?e.num_faces():0,metadata:i,attributes:s}}_getDracoAttributes(e,r){const n={};for(let i=0;i<e.num_attributes();i++){const s=this.decoder.GetAttribute(e,i),o=this._getAttributeMetadata(e,i);n[s.unique_id()]={unique_id:s.unique_id(),attribute_type:s.attribute_type(),data_type:s.data_type(),num_components:s.num_components(),byte_offset:s.byte_offset(),byte_stride:s.byte_stride(),normalized:s.normalized(),attribute_index:i,metadata:o};const a=this._getQuantizationTransform(s,r);a&&(n[s.unique_id()].quantization_transform=a);const c=this._getOctahedronTransform(s,r);c&&(n[s.unique_id()].octahedron_transform=c)}return n}_getMeshData(e,r,n){const i=this._getMeshAttributes(r,e,n);if(!i.POSITION)throw new Error("DRACO: No position attribute found.");if(e instanceof this.draco.Mesh)switch(n.topology){case"triangle-strip":return{topology:"triangle-strip",mode:4,attributes:i,indices:{value:this._getTriangleStripIndices(e),size:1}};case"triangle-list":default:return{topology:"triangle-list",mode:5,attributes:i,indices:{value:this._getTriangleListIndices(e),size:1}}}return{topology:"point-list",mode:0,attributes:i}}_getMeshAttributes(e,r,n){const i={};for(const s of Object.values(e.attributes)){const o=this._deduceAttributeName(s,n);s.name=o;const a=this._getAttributeValues(r,s);if(a){const{value:c,size:l}=a;i[o]={value:c,size:l,byteOffset:s.byte_offset,byteStride:s.byte_stride,normalized:s.normalized}}}return i}_getTriangleListIndices(e){const n=e.num_faces()*3,i=n*u1,s=this.draco._malloc(i);try{return this.decoder.GetTrianglesUInt32Array(e,i,s),new Uint32Array(this.draco.HEAPF32.buffer,s,n).slice()}finally{this.draco._free(s)}}_getTriangleStripIndices(e){const r=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(e,r),m1(r)}finally{this.draco.destroy(r)}}_getAttributeValues(e,r){const n=l1[r.data_type];if(!n)return console.warn(`DRACO: Unsupported attribute type ${r.data_type}`),null;const i=r.num_components,o=e.num_points()*i,a=o*n.BYTES_PER_ELEMENT,c=h1(this.draco,n);let l;const u=this.draco._malloc(a);try{const f=this.decoder.GetAttribute(e,r.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(e,f,c,a,u),l=new n(this.draco.HEAPF32.buffer,u,o).slice()}finally{this.draco._free(u)}return{value:l,size:i}}_deduceAttributeName(e,r){const n=e.unique_id;for(const[o,a]of Object.entries(r.extraAttributes||{}))if(a===n)return o;const i=e.attribute_type;for(const o in $a)if(this.draco[o]===i)return $a[o];const s=r.attributeNameEntry||"name";return e.metadata[s]?e.metadata[s].string:`CUSTOM_ATTRIBUTE_${n}`}_getTopLevelMetadata(e){const r=this.decoder.GetMetadata(e);return this._getDracoMetadata(r)}_getAttributeMetadata(e,r){const n=this.decoder.GetAttributeMetadata(e,r);return this._getDracoMetadata(n)}_getDracoMetadata(e){if(!e||!e.ptr)return{};const r={},n=this.metadataQuerier.NumEntries(e);for(let i=0;i<n;i++){const s=this.metadataQuerier.GetEntryName(e,i);r[s]=this._getDracoMetadataField(e,s)}return r}_getDracoMetadataField(e,r){const n=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(e,r,n);const i=d1(n);return{int:this.metadataQuerier.GetIntEntry(e,r),string:this.metadataQuerier.GetStringEntry(e,r),double:this.metadataQuerier.GetDoubleEntry(e,r),intArray:i}}finally{this.draco.destroy(n)}}_disableAttributeTransforms(e){const{quantizedAttributes:r=[],octahedronAttributes:n=[]}=e,i=[...r,...n];for(const s of i)this.decoder.SkipAttributeTransform(this.draco[s])}_getQuantizationTransform(e,r){const{quantizedAttributes:n=[]}=r,i=e.attribute_type();if(n.map(o=>this.decoder[o]).includes(i)){const o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(e))return{quantization_bits:o.quantization_bits(),range:o.range(),min_values:new Float32Array([1,2,3]).map(a=>o.min_value(a))}}finally{this.draco.destroy(o)}}return null}_getOctahedronTransform(e,r){const{octahedronAttributes:n=[]}=r,i=e.attribute_type();if(n.map(o=>this.decoder[o]).includes(i)){const o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(e))return{quantization_bits:o.quantization_bits()}}finally{this.draco.destroy(o)}}return null}}function h1(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32;default:return t.DT_INVALID}}function d1(t){const e=t.size(),r=new Int32Array(e);for(let n=0;n<e;n++)r[n]=t.GetValue(n);return r}function m1(t){const e=t.size(),r=new Int32Array(e);for(let n=0;n<e;n++)r[n]=t.GetValue(n);return r}const p1="1.5.6",g1="1.4.1",ys=`https://www.gstatic.com/draco/versioned/decoders/${p1}`,Ke={DECODER:"draco_wasm_wrapper.js",DECODER_WASM:"draco_decoder.wasm",FALLBACK_DECODER:"draco_decoder.js",ENCODER:"draco_encoder.js"},vs={[Ke.DECODER]:`${ys}/${Ke.DECODER}`,[Ke.DECODER_WASM]:`${ys}/${Ke.DECODER_WASM}`,[Ke.FALLBACK_DECODER]:`${ys}/${Ke.FALLBACK_DECODER}`,[Ke.ENCODER]:`https://raw.githubusercontent.com/google/draco/${g1}/javascript/${Ke.ENCODER}`};let xs;async function b1(t){const e=t.modules||{};return e.draco3d?xs||=e.draco3d.createDecoderModule({}).then(r=>({draco:r})):xs||=y1(t),await xs}async function y1(t){let e,r;switch(t.draco&&t.draco.decoderType){case"js":e=await hr(vs[Ke.FALLBACK_DECODER],"draco",t,Ke.FALLBACK_DECODER);break;case"wasm":default:[e,r]=await Promise.all([await hr(vs[Ke.DECODER],"draco",t,Ke.DECODER),await hr(vs[Ke.DECODER_WASM],"draco",t,Ke.DECODER_WASM)])}return e=e||globalThis.DracoDecoderModule,await v1(e,r)}function v1(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t({...r,onModuleLoaded:i=>n({draco:i})})})}const x1={...o1,parse:B1};async function B1(t,e){const{draco:r}=await b1(e),n=new f1(r);try{return n.parseSync(t,e?.draco)}finally{n.destroy()}}function A1(t){const e={};for(const r in t){const n=t[r];if(r!=="indices"){const i=Bu(n);e[r]=i}}return e}function Bu(t){const{buffer:e,size:r,count:n}=T1(t);return{value:e,size:r,byteOffset:0,count:n,type:lu(r),componentType:Fi(e)}}function T1(t){let e=t,r=1,n=0;return t&&t.value&&(e=t.value,r=t.size||1),e&&(ArrayBuffer.isView(e)||(e=C1(e,Float32Array)),n=e.length/r),{buffer:e,size:r,count:n}}function C1(t,e,r=!1){return t?Array.isArray(t)?new e(t):r&&!(t instanceof e)?new e(t):t:null}const tr="KHR_draco_mesh_compression",M1=tr;function E1(t,e,r){const n=new Oe(t);for(const i of Au(n))n.getObjectExtension(i,tr)}async function w1(t,e,r){if(!e?.gltf?.decompressMeshes)return;const n=new Oe(t),i=[];for(const s of Au(n))n.getObjectExtension(s,tr)&&i.push(P1(n,s,e,r));await Promise.all(i),n.removeExtension(tr)}function S1(t,e={}){const r=new Oe(t);for(const n of r.json.meshes||[])I1(n),r.addRequiredExtension(tr)}async function P1(t,e,r,n){const i=t.getObjectExtension(e,tr);if(!i)return;const s=t.getTypedArrayForBufferView(i.bufferView),o=kl(s.buffer,s.byteOffset),a={...r};delete a["3d-tiles"];const c=await Ul(o,x1,a,n),l=A1(c.attributes);for(const[u,f]of Object.entries(l))if(u in e.attributes){const h=e.attributes[u],m=t.getAccessor(h);m?.min&&m?.max&&(f.min=m.min,f.max=m.max)}e.attributes=l,c.indices&&(e.indices=Bu(c.indices)),t.removeObjectExtension(e,tr),O1(e)}function I1(t,e,r=4,n,i){if(!n.DracoWriter)throw new Error("options.gltf.DracoWriter not provided");const s=n.DracoWriter.encodeSync({attributes:t}),o=i?.parseSync?.({attributes:t}),a=n._addFauxAttributes(o.attributes),c=n.addBufferView(s);return{primitives:[{attributes:a,mode:r,extensions:{[tr]:{bufferView:c,attributes:a}}}]}}function O1(t){if(!t.attributes&&Object.keys(t.attributes).length>0)throw new Error("glTF: Empty primitive detected: Draco decompression failure?")}function*Au(t){for(const e of t.json.meshes||[])for(const r of e.primitives)yield r}const R1=Object.freeze(Object.defineProperty({__proto__:null,decode:w1,encode:S1,name:M1,preprocess:E1},Symbol.toStringTag,{value:"Module"})),G1={EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1};globalThis.mathgl=globalThis.mathgl||{config:{...G1}};const ut=globalThis.mathgl.config;function D1(t,{precision:e=ut.precision}={}){return t=_1(t),`${parseFloat(t.toPrecision(e))}`}function xi(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Tu(t,e,r){const n=ut.EPSILON;try{if(t===e)return!0;if(xi(t)&&xi(e)){if(t.length!==e.length)return!1;for(let i=0;i<t.length;++i)if(!Tu(t[i],e[i]))return!1;return!0}return t&&t.equals?t.equals(e):e&&e.equals?e.equals(t):typeof t=="number"&&typeof e=="number"?Math.abs(t-e)<=ut.EPSILON*Math.max(1,Math.abs(t),Math.abs(e)):!1}finally{ut.EPSILON=n}}function _1(t){return Math.round(t/ut.EPSILON)*ut.EPSILON}class Cu extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,r=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+r];return this.check()}toArray(e=[],r=0){for(let n=0;n<this.ELEMENTS;++n)e[r+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:xi(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(ut)}formatString(e){let r="";for(let n=0;n<this.ELEMENTS;++n)r+=(n>0?", ":"")+D1(this[n],e);return`${e.printTypes?this.constructor.name:""}[${r}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(!Tu(this[r],e[r]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(this[r]!==e[r])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,r,n){if(n===void 0)return this.lerp(this,e,r);for(let i=0;i<this.ELEMENTS;++i){const s=e[i],o=typeof r=="number"?r:r[i];this[i]=s+n*(o-s)}return this.check()}min(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.min(e[r],this[r]);return this.check()}max(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.max(e[r],this[r]);return this.check()}clamp(e,r){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),r[n]);return this.check()}add(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]+=r[n];return this.check()}subtract(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]-=r[n];return this.check()}scale(e){if(typeof e=="number")for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;else for(let r=0;r<this.ELEMENTS&&r<e.length;++r)this[r]*=e[r];return this.check()}multiplyByScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}check(){if(ut.debug&&!this.validate())throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let r=0;r<this.ELEMENTS;++r)e=e&&Number.isFinite(this[r]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=e;return this.check()}addScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,r){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),r);return this.check()}get elements(){return this}}function U1(t,e){if(t.length!==e)return!1;for(let r=0;r<t.length;++r)if(!Number.isFinite(t[r]))return!1;return!0}function tt(t){if(!Number.isFinite(t))throw new Error(`Invalid number ${JSON.stringify(t)}`);return t}function F1(t,e,r=""){if(ut.debug&&!U1(t,e))throw new Error(`math.gl: ${r} some fields set to invalid numbers'`);return t}function Za(t,e){if(!t)throw new Error(`math.gl assertion ${e}`)}class L1 extends Cu{get x(){return this[0]}set x(e){this[0]=tt(e)}get y(){return this[1]}set y(e){this[1]=tt(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let r=0;r<this.ELEMENTS;++r)e+=this[r]*this[r];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let r=0;for(let n=0;n<this.ELEMENTS;++n){const i=this[n]-e[n];r+=i*i}return tt(r)}dot(e){let r=0;for(let n=0;n<this.ELEMENTS;++n)r+=this[n]*e[n];return tt(r)}normalize(){const e=this.magnitude();if(e!==0)for(let r=0;r<this.ELEMENTS;++r)this[r]/=e;return this.check()}multiply(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]*=r[n];return this.check()}divide(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]/=r[n];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return Za(e>=0&&e<this.ELEMENTS,"index is out of range"),tt(this[e])}setComponent(e,r){return Za(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=r,this.check()}addVectors(e,r){return this.copy(e).add(r)}subVectors(e,r){return this.copy(e).subtract(r)}multiplyVectors(e,r){return this.copy(e).multiply(r)}addScaledVector(e,r){return this.add(new this.constructor(e).multiplyScalar(r))}}let Bi=typeof Float32Array<"u"?Float32Array:Array;function N1(){const t=new Bi(2);return Bi!=Float32Array&&(t[0]=0,t[1]=0),t}function j1(t,e,r){const n=e[0],i=e[1];return t[0]=r[0]*n+r[3]*i+r[6],t[1]=r[1]*n+r[4]*i+r[7],t}(function(){const t=N1();return function(e,r,n,i,s,o){let a,c;for(r||(r=2),n||(n=0),i?c=Math.min(i*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],s(t,t,o),e[a]=t[0],e[a+1]=t[1];return e}})();function V1(t,e,r){const n=e[0],i=e[1],s=e[2],o=r[3]*n+r[7]*i+r[11]*s||1;return t[0]=(r[0]*n+r[4]*i+r[8]*s)/o,t[1]=(r[1]*n+r[5]*i+r[9]*s)/o,t[2]=(r[2]*n+r[6]*i+r[10]*s)/o,t}function H1(t,e,r){const n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i,t[1]=r[1]*n+r[3]*i,t[2]=e[2],t}function k1(t,e,r){const n=e[0],i=e[1],s=e[2];return t[0]=r[0]*n+r[3]*i+r[6]*s,t[1]=r[1]*n+r[4]*i+r[7]*s,t[2]=r[2]*n+r[5]*i+r[8]*s,t[3]=e[3],t}function z1(){const t=new Bi(3);return Bi!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function J1(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function W1(t,e,r){const n=e[0],i=e[1],s=e[2],o=r[0],a=r[1],c=r[2];return t[0]=i*c-s*a,t[1]=s*o-n*c,t[2]=n*a-i*o,t}function q1(t,e,r){const n=e[0],i=e[1],s=e[2];let o=r[3]*n+r[7]*i+r[11]*s+r[15];return o=o||1,t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/o,t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/o,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/o,t}function Mu(t,e,r){const n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t}function K1(t,e,r){const n=r[0],i=r[1],s=r[2],o=r[3],a=e[0],c=e[1],l=e[2];let u=i*l-s*c,f=s*a-n*l,h=n*c-i*a,m=i*h-s*f,d=s*u-n*h,p=n*f-i*u;const b=o*2;return u*=b,f*=b,h*=b,m*=2,d*=2,p*=2,t[0]=a+u+m,t[1]=c+f+d,t[2]=l+h+p,t}function Y1(t,e,r,n){const i=[],s=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],s[0]=i[0],s[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),s[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t}function X1(t,e,r,n){const i=[],s=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],s[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),s[1]=i[1],s[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t}function Q1(t,e,r,n){const i=[],s=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],s[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),s[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),s[2]=i[2],t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t}function $1(t,e){const r=t[0],n=t[1],i=t[2],s=e[0],o=e[1],a=e[2],c=Math.sqrt((r*r+n*n+i*i)*(s*s+o*o+a*a)),l=c&&J1(t,e)/c;return Math.acos(Math.min(Math.max(l,-1),1))}(function(){const t=z1();return function(e,r,n,i,s,o){let a,c;for(r||(r=3),n||(n=0),i?c=Math.min(i*r+n,e.length):c=e.length,a=n;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();const Bs=[0,0,0];let zn;class Ro extends L1{static get ZERO(){return zn||(zn=new Ro(0,0,0),Object.freeze(zn)),zn}constructor(e=0,r=0,n=0){super(-0,-0,-0),arguments.length===1&&xi(e)?this.copy(e):(ut.debug&&(tt(e),tt(r),tt(n)),this[0]=e,this[1]=r,this[2]=n)}set(e,r,n){return this[0]=e,this[1]=r,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return ut.debug&&(tt(e.x),tt(e.y),tt(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=tt(e)}angle(e){return $1(this,e)}cross(e){return W1(this,this,e),this.check()}rotateX({radians:e,origin:r=Bs}){return Y1(this,this,r,e),this.check()}rotateY({radians:e,origin:r=Bs}){return X1(this,this,r,e),this.check()}rotateZ({radians:e,origin:r=Bs}){return Q1(this,this,r,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return q1(this,this,e),this.check()}transformAsVector(e){return V1(this,this,e),this.check()}transformByMatrix3(e){return Mu(this,this,e),this.check()}transformByMatrix2(e){return H1(this,this,e),this.check()}transformByQuaternion(e){return K1(this,this,e),this.check()}}class Z1 extends Cu{toString(){let e="[";if(ut.printRowMajor){e+="row-major:";for(let r=0;r<this.RANK;++r)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+r]}`}else{e+="column-major:";for(let r=0;r<this.ELEMENTS;++r)e+=` ${this[r]}`}return e+="]",e}getElementIndex(e,r){return r*this.RANK+e}getElement(e,r){return this[r*this.RANK+e]}setElement(e,r,n){return this[r*this.RANK+e]=tt(n),this}getColumn(e,r=new Array(this.RANK).fill(-0)){const n=e*this.RANK;for(let i=0;i<this.RANK;++i)r[i]=this[n+i];return r}setColumn(e,r){const n=e*this.RANK;for(let i=0;i<this.RANK;++i)this[n+i]=r[i];return this}}function ey(t,e){if(t===e){const r=e[1],n=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=i}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function ty(t,e){const r=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=-u*s+a*c,m=l*s-o*c;let d=r*f+n*h+i*m;return d?(d=1/d,t[0]=f*d,t[1]=(-u*n+i*l)*d,t[2]=(a*n-i*o)*d,t[3]=h*d,t[4]=(u*r-i*c)*d,t[5]=(-a*r+i*s)*d,t[6]=m*d,t[7]=(-l*r+n*c)*d,t[8]=(o*r-n*s)*d,t):null}function ry(t){const e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],o=t[5],a=t[6],c=t[7],l=t[8];return e*(l*s-o*c)+r*(-l*i+o*a)+n*(c*i-s*a)}function ec(t,e,r){const n=e[0],i=e[1],s=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=r[0],m=r[1],d=r[2],p=r[3],b=r[4],y=r[5],x=r[6],C=r[7],g=r[8];return t[0]=h*n+m*o+d*l,t[1]=h*i+m*a+d*u,t[2]=h*s+m*c+d*f,t[3]=p*n+b*o+y*l,t[4]=p*i+b*a+y*u,t[5]=p*s+b*c+y*f,t[6]=x*n+C*o+g*l,t[7]=x*i+C*a+g*u,t[8]=x*s+C*c+g*f,t}function ny(t,e,r){const n=e[0],i=e[1],s=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=r[0],m=r[1];return t[0]=n,t[1]=i,t[2]=s,t[3]=o,t[4]=a,t[5]=c,t[6]=h*n+m*o+l,t[7]=h*i+m*a+u,t[8]=h*s+m*c+f,t}function iy(t,e,r){const n=e[0],i=e[1],s=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=Math.sin(r),m=Math.cos(r);return t[0]=m*n+h*o,t[1]=m*i+h*a,t[2]=m*s+h*c,t[3]=m*o-h*n,t[4]=m*a-h*i,t[5]=m*c-h*s,t[6]=l,t[7]=u,t[8]=f,t}function tc(t,e,r){const n=r[0],i=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function sy(t,e){const r=e[0],n=e[1],i=e[2],s=e[3],o=r+r,a=n+n,c=i+i,l=r*o,u=n*o,f=n*a,h=i*o,m=i*a,d=i*c,p=s*o,b=s*a,y=s*c;return t[0]=1-f-d,t[3]=u-y,t[6]=h+b,t[1]=u+y,t[4]=1-l-d,t[7]=m-p,t[2]=h-b,t[5]=m+p,t[8]=1-l-f,t}var qs;(function(t){t[t.COL0ROW0=0]="COL0ROW0",t[t.COL0ROW1=1]="COL0ROW1",t[t.COL0ROW2=2]="COL0ROW2",t[t.COL1ROW0=3]="COL1ROW0",t[t.COL1ROW1=4]="COL1ROW1",t[t.COL1ROW2=5]="COL1ROW2",t[t.COL2ROW0=6]="COL2ROW0",t[t.COL2ROW1=7]="COL2ROW1",t[t.COL2ROW2=8]="COL2ROW2"})(qs||(qs={}));const oy=Object.freeze([1,0,0,0,1,0,0,0,1]);class Ln extends Z1{static get IDENTITY(){return cy()}static get ZERO(){return ay()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return qs}constructor(e,...r){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):r.length>0?this.copy([e,...r]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy(oy)}fromObject(e){return this.check()}fromQuaternion(e){return sy(this,e),this.check()}set(e,r,n,i,s,o,a,c,l){return this[0]=e,this[1]=r,this[2]=n,this[3]=i,this[4]=s,this[5]=o,this[6]=a,this[7]=c,this[8]=l,this.check()}setRowMajor(e,r,n,i,s,o,a,c,l){return this[0]=e,this[1]=i,this[2]=a,this[3]=r,this[4]=s,this[5]=c,this[6]=n,this[7]=o,this[8]=l,this.check()}determinant(){return ry(this)}transpose(){return ey(this,this),this.check()}invert(){return ty(this,this),this.check()}multiplyLeft(e){return ec(this,e,this),this.check()}multiplyRight(e){return ec(this,this,e),this.check()}rotate(e){return iy(this,this,e),this.check()}scale(e){return Array.isArray(e)?tc(this,this,e):tc(this,this,[e,e]),this.check()}translate(e){return ny(this,this,e),this.check()}transform(e,r){let n;switch(e.length){case 2:n=j1(r||[-0,-0],e,this);break;case 3:n=Mu(r||[-0,-0,-0],e,this);break;case 4:n=k1(r||[-0,-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return F1(n,e.length),n}transformVector(e,r){return this.transform(e,r)}transformVector2(e,r){return this.transform(e,r)}transformVector3(e,r){return this.transform(e,r)}}let Jn,Wn=null;function ay(){return Jn||(Jn=new Ln([0,0,0,0,0,0,0,0,0]),Object.freeze(Jn)),Jn}function cy(){return Wn||(Wn=new Ln,Object.freeze(Wn)),Wn}const ji="KHR_texture_transform",ly=ji,qn=new Ro,uy=new Ln,fy=new Ln;async function hy(t,e){if(!new Oe(t).hasExtension(ji)||!e.gltf?.loadBuffers)return;const i=t.json.materials||[];for(let s=0;s<i.length;s++)dy(s,t)}function dy(t,e){const r=e.json.materials?.[t],n=[r?.pbrMetallicRoughness?.baseColorTexture,r?.emissiveTexture,r?.normalTexture,r?.occlusionTexture,r?.pbrMetallicRoughness?.metallicRoughnessTexture],i=[];for(const s of n)s&&s?.extensions?.[ji]&&my(e,t,s,i)}function my(t,e,r,n){const i=py(r,n);if(!i)return;const s=t.json.meshes||[];for(const o of s)for(const a of o.primitives){const c=a.material;Number.isFinite(c)&&e===c&&gy(t,a,i)}}function py(t,e){const r=t.extensions?.[ji],{texCoord:n=0}=t,{texCoord:i=n}=r;if(!(e.findIndex(([o,a])=>o===n&&a===i)!==-1)){const o=vy(r);return n!==i&&(t.texCoord=i),e.push([n,i]),{originalTexCoord:n,texCoord:i,matrix:o}}return null}function gy(t,e,r){const{originalTexCoord:n,texCoord:i,matrix:s}=r,o=e.attributes[`TEXCOORD_${n}`];if(Number.isFinite(o)){const a=t.json.accessors?.[o];if(a&&a.bufferView){const c=t.json.bufferViews?.[a.bufferView];if(c){const{arrayBuffer:l,byteOffset:u}=t.buffers[c.buffer],f=(u||0)+(a.byteOffset||0)+(c.byteOffset||0),{ArrayType:h,length:m}=wo(a,c),d=cu[a.componentType],p=au[a.type],b=c.byteStride||d*p,y=new Float32Array(m);for(let x=0;x<a.count;x++){const C=new h(l,f+x*b,2);qn.set(C[0],C[1],1),qn.transformByMatrix3(s),y.set([qn[0],qn[1]],x*p)}n===i?by(a,c,t.buffers,y):yy(i,a,e,t,y)}}}}function by(t,e,r,n){t.componentType=5126,r.push({arrayBuffer:n.buffer,byteOffset:0,byteLength:n.buffer.byteLength}),e.buffer=r.length-1,e.byteLength=n.buffer.byteLength,e.byteOffset=0,delete e.byteStride}function yy(t,e,r,n,i){n.buffers.push({arrayBuffer:i.buffer,byteOffset:0,byteLength:i.buffer.byteLength});const s=n.json.bufferViews;if(!s)return;s.push({buffer:n.buffers.length-1,byteLength:i.buffer.byteLength,byteOffset:0});const o=n.json.accessors;o&&(o.push({bufferView:s?.length-1,byteOffset:0,componentType:5126,count:e.count,type:"VEC2"}),r.attributes[`TEXCOORD_${t}`]=o.length-1)}function vy(t){const{offset:e=[0,0],rotation:r=0,scale:n=[1,1]}=t,i=new Ln().set(1,0,0,0,1,0,e[0],e[1],1),s=uy.set(Math.cos(r),Math.sin(r),0,-Math.sin(r),Math.cos(r),0,0,0,1),o=fy.set(n[0],0,0,0,n[1],0,0,0,1);return i.multiplyRight(s).multiplyRight(o)}const xy=Object.freeze(Object.defineProperty({__proto__:null,decode:hy,name:ly},Symbol.toStringTag,{value:"Module"})),ur="KHR_lights_punctual",By=ur;async function Ay(t){const e=new Oe(t),{json:r}=e,n=e.getExtension(ur);n&&(e.json.lights=n.lights,e.removeExtension(ur));for(const i of r.nodes||[]){const s=e.getObjectExtension(i,ur);s&&(i.light=s.light),e.removeObjectExtension(i,ur)}}async function Ty(t){const e=new Oe(t),{json:r}=e;if(r.lights){const n=e.addExtension(ur);nt(!n.lights),n.lights=r.lights,delete r.lights}if(e.json.lights){for(const n of e.json.lights){const i=n.node;e.addObjectExtension(i,ur,n)}delete e.json.lights}}const Cy=Object.freeze(Object.defineProperty({__proto__:null,decode:Ay,encode:Ty,name:By},Symbol.toStringTag,{value:"Module"})),Cn="KHR_materials_unlit",My=Cn;async function Ey(t){const e=new Oe(t),{json:r}=e;for(const n of r.materials||[])n.extensions&&n.extensions.KHR_materials_unlit&&(n.unlit=!0),e.removeObjectExtension(n,Cn);e.removeExtension(Cn)}function wy(t){const e=new Oe(t),{json:r}=e;if(e.materials)for(const n of r.materials||[])n.unlit&&(delete n.unlit,e.addObjectExtension(n,Cn,{}),e.addExtension(Cn))}const Sy=Object.freeze(Object.defineProperty({__proto__:null,decode:Ey,encode:wy,name:My},Symbol.toStringTag,{value:"Module"})),rn="KHR_techniques_webgl",Py=rn;async function Iy(t){const e=new Oe(t),{json:r}=e,n=e.getExtension(rn);if(n){const i=Ry(n,e);for(const s of r.materials||[]){const o=e.getObjectExtension(s,rn);o&&(s.technique=Object.assign({},o,i[o.technique]),s.technique.values=Gy(s.technique,e)),e.removeObjectExtension(s,rn)}e.removeExtension(rn)}}async function Oy(t,e){}function Ry(t,e){const{programs:r=[],shaders:n=[],techniques:i=[]}=t,s=new TextDecoder;return n.forEach(o=>{if(Number.isFinite(o.bufferView))o.code=s.decode(e.getTypedArrayForBufferView(o.bufferView));else throw new Error("KHR_techniques_webgl: no shader code")}),r.forEach(o=>{o.fragmentShader=n[o.fragmentShader],o.vertexShader=n[o.vertexShader]}),i.forEach(o=>{o.program=r[o.program]}),i}function Gy(t,e){const r=Object.assign({},t.values);return Object.keys(t.uniforms||{}).forEach(n=>{t.uniforms[n].value&&!(n in r)&&(r[n]=t.uniforms[n].value)}),Object.keys(r).forEach(n=>{typeof r[n]=="object"&&r[n].index!==void 0&&(r[n].texture=e.getTexture(r[n].index))}),r}const Dy=Object.freeze(Object.defineProperty({__proto__:null,decode:Iy,encode:Oy,name:Py},Symbol.toStringTag,{value:"Module"})),Eu=[qg,yg,$b,t1,i1,R1,Cy,Sy,Dy,xy,ub];function _y(t,e={},r){const n=Eu.filter(i=>wu(i.name,e));for(const i of n)i.preprocess?.(t,e,r)}async function Uy(t,e={},r){const n=Eu.filter(i=>wu(i.name,e));for(const i of n)await i.decode?.(t,e,r)}function wu(t,e){const r=e?.gltf?.excludeExtensions||{};return!(t in r&&!r[t])}const As="KHR_binary_glTF";function Fy(t){const e=new Oe(t),{json:r}=e;for(const n of r.images||[]){const i=e.getObjectExtension(n,As);i&&Object.assign(n,i),e.removeObjectExtension(n,As)}r.buffers&&r.buffers[0]&&delete r.buffers[0].uri,e.removeExtension(As)}const rc={accessors:"accessor",animations:"animation",buffers:"buffer",bufferViews:"bufferView",images:"image",materials:"material",meshes:"mesh",nodes:"node",samplers:"sampler",scenes:"scene",skins:"skin",textures:"texture"},Ly={accessor:"accessors",animations:"animation",buffer:"buffers",bufferView:"bufferViews",image:"images",material:"materials",mesh:"meshes",node:"nodes",sampler:"samplers",scene:"scenes",skin:"skins",texture:"textures"};class Ny{idToIndexMap={animations:{},accessors:{},buffers:{},bufferViews:{},images:{},materials:{},meshes:{},nodes:{},samplers:{},scenes:{},skins:{},textures:{}};json;normalize(e,r){this.json=e.json;const n=e.json;switch(n.asset&&n.asset.version){case"2.0":return;case void 0:case"1.0":break;default:console.warn(`glTF: Unknown version ${n.asset.version}`);return}if(!r.normalize)throw new Error("glTF v1 is not supported.");console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."),this._addAsset(n),this._convertTopLevelObjectsToArrays(n),Fy(e),this._convertObjectIdsToArrayIndices(n),this._updateObjects(n),this._updateMaterial(n)}_addAsset(e){e.asset=e.asset||{},e.asset.version="2.0",e.asset.generator=e.asset.generator||"Normalized to glTF 2.0 by loaders.gl"}_convertTopLevelObjectsToArrays(e){for(const r in rc)this._convertTopLevelObjectToArray(e,r)}_convertTopLevelObjectToArray(e,r){const n=e[r];if(!(!n||Array.isArray(n))){e[r]=[];for(const i in n){const s=n[i];s.id=s.id||i;const o=e[r].length;e[r].push(s),this.idToIndexMap[r][i]=o}}}_convertObjectIdsToArrayIndices(e){for(const r in rc)this._convertIdsToIndices(e,r);"scene"in e&&(e.scene=this._convertIdToIndex(e.scene,"scene"));for(const r of e.textures)this._convertTextureIds(r);for(const r of e.meshes)this._convertMeshIds(r);for(const r of e.nodes)this._convertNodeIds(r);for(const r of e.scenes)this._convertSceneIds(r)}_convertTextureIds(e){e.source&&(e.source=this._convertIdToIndex(e.source,"image"))}_convertMeshIds(e){for(const r of e.primitives){const{attributes:n,indices:i,material:s}=r;for(const o in n)n[o]=this._convertIdToIndex(n[o],"accessor");i&&(r.indices=this._convertIdToIndex(i,"accessor")),s&&(r.material=this._convertIdToIndex(s,"material"))}}_convertNodeIds(e){e.children&&(e.children=e.children.map(r=>this._convertIdToIndex(r,"node"))),e.meshes&&(e.meshes=e.meshes.map(r=>this._convertIdToIndex(r,"mesh")))}_convertSceneIds(e){e.nodes&&(e.nodes=e.nodes.map(r=>this._convertIdToIndex(r,"node")))}_convertIdsToIndices(e,r){e[r]||(console.warn(`gltf v1: json doesn't contain attribute ${r}`),e[r]=[]);for(const n of e[r])for(const i in n){const s=n[i],o=this._convertIdToIndex(s,i);n[i]=o}}_convertIdToIndex(e,r){const n=Ly[r];if(n in this.idToIndexMap){const i=this.idToIndexMap[n][e];if(!Number.isFinite(i))throw new Error(`gltf v1: failed to resolve ${r} with id ${e}`);return i}return e}_updateObjects(e){for(const r of this.json.buffers)delete r.type}_updateMaterial(e){for(const r of e.materials){r.pbrMetallicRoughness={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1};const n=r.values?.tex||r.values?.texture2d_0||r.values?.diffuseTex,i=e.textures.findIndex(s=>s.id===n);i!==-1&&(r.pbrMetallicRoughness.baseColorTexture={index:i})}}}function jy(t,e={}){return new Ny().normalize(t,e)}async function Vy(t,e,r=0,n,i){return Hy(t,e,r,n),jy(t,{normalize:n?.gltf?.normalize}),_y(t,n,i),n?.gltf?.loadBuffers&&t.json.buffers&&await ky(t,n,i),n?.gltf?.loadImages&&await zy(t,n,i),await Uy(t,n,i),t}function Hy(t,e,r,n){if(n.uri&&(t.baseUri=n.uri),e instanceof ArrayBuffer&&!Gb(e,r,n)&&(e=new TextDecoder().decode(e)),typeof e=="string")t.json=tp(e);else if(e instanceof ArrayBuffer){const o={};r=Db(o,e,r,n.glb),nt(o.type==="glTF",`Invalid GLB magic string ${o.type}`),t._glb=o,t.json=o.json}else nt(!1,"GLTF: must be ArrayBuffer or string");const i=t.json.buffers||[];if(t.buffers=new Array(i.length).fill(null),t._glb&&t._glb.header.hasBinChunk){const{binChunks:o}=t._glb;t.buffers[0]={arrayBuffer:o[0].arrayBuffer,byteOffset:o[0].byteOffset,byteLength:o[0].byteLength}}const s=t.json.images||[];t.images=new Array(s.length).fill({})}async function ky(t,e,r){const n=t.json.buffers||[];for(let i=0;i<n.length;++i){const s=n[i];if(s.uri){const{fetch:o}=r;nt(o);const a=vu(s.uri,e),l=await(await r?.fetch?.(a))?.arrayBuffer?.();t.buffers[i]={arrayBuffer:l,byteOffset:0,byteLength:l.byteLength},delete s.uri}else t.buffers[i]===null&&(t.buffers[i]={arrayBuffer:new ArrayBuffer(s.byteLength),byteOffset:0,byteLength:s.byteLength})}}async function zy(t,e,r){const n=Jy(t),i=t.json.images||[],s=[];for(const o of n)s.push(Wy(t,i[o],o,e,r));return await Promise.all(s)}function Jy(t){const e=new Set,r=t.json.textures||[];for(const n of r)n.source!==void 0&&e.add(n.source);return Array.from(e).sort()}async function Wy(t,e,r,n,i){let s;if(e.uri&&!e.hasOwnProperty("bufferView")){const a=vu(e.uri,n),{fetch:c}=i;s=await(await c(a)).arrayBuffer(),e.bufferView={data:s}}if(Number.isFinite(e.bufferView)){const a=ng(t.json,t.buffers,e.bufferView);s=kl(a.buffer,a.byteOffset,a.byteLength)}nt(s,"glTF image has no data");let o=await Ul(s,[q0,Eb],{...n,mimeType:e.mimeType,basis:n.basis||{format:yu()}},i);o&&o[0]&&(o={compressed:!0,mipmaps:!1,width:o[0].width,height:o[0].height,data:o[0]}),t.images=t.images||[],t.images[r]=o}const Ks={dataType:null,batchType:null,name:"glTF",id:"gltf",module:"gltf",version:fb,extensions:["gltf","glb"],mimeTypes:["model/gltf+json","model/gltf-binary"],text:!0,binary:!0,tests:["glTF"],parse:qy,options:{gltf:{normalize:!0,loadBuffers:!0,loadImages:!0,decompressMeshes:!0},log:console}};async function qy(t,e={},r){e={...Ks.options,...e},e.gltf={...Ks.options.gltf,...e.gltf};const{byteOffset:n=0}=e;return await Vy({},t,n,e,r)}const Ky={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yy={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},ot={TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,REPEAT:10497,LINEAR:9729,NEAREST_MIPMAP_LINEAR:9986},Xy={magFilter:ot.TEXTURE_MAG_FILTER,minFilter:ot.TEXTURE_MIN_FILTER,wrapS:ot.TEXTURE_WRAP_S,wrapT:ot.TEXTURE_WRAP_T},Qy={[ot.TEXTURE_MAG_FILTER]:ot.LINEAR,[ot.TEXTURE_MIN_FILTER]:ot.NEAREST_MIPMAP_LINEAR,[ot.TEXTURE_WRAP_S]:ot.REPEAT,[ot.TEXTURE_WRAP_T]:ot.REPEAT};function $y(){return{id:"default-sampler",parameters:Qy}}function Zy(t){return Yy[t]}function ev(t){return Ky[t]}class tv{baseUri="";jsonUnprocessed;json;buffers=[];images=[];postProcess(e,r={}){const{json:n,buffers:i=[],images:s=[]}=e,{baseUri:o=""}=e;return nt(n),this.baseUri=o,this.buffers=i,this.images=s,this.jsonUnprocessed=n,this.json=this._resolveTree(e.json,r),this.json}_resolveTree(e,r={}){const n={...e};return this.json=n,e.bufferViews&&(n.bufferViews=e.bufferViews.map((i,s)=>this._resolveBufferView(i,s))),e.images&&(n.images=e.images.map((i,s)=>this._resolveImage(i,s))),e.samplers&&(n.samplers=e.samplers.map((i,s)=>this._resolveSampler(i,s))),e.textures&&(n.textures=e.textures.map((i,s)=>this._resolveTexture(i,s))),e.accessors&&(n.accessors=e.accessors.map((i,s)=>this._resolveAccessor(i,s))),e.materials&&(n.materials=e.materials.map((i,s)=>this._resolveMaterial(i,s))),e.meshes&&(n.meshes=e.meshes.map((i,s)=>this._resolveMesh(i,s))),e.nodes&&(n.nodes=e.nodes.map((i,s)=>this._resolveNode(i,s)),n.nodes=n.nodes.map((i,s)=>this._resolveNodeChildren(i))),e.skins&&(n.skins=e.skins.map((i,s)=>this._resolveSkin(i,s))),e.scenes&&(n.scenes=e.scenes.map((i,s)=>this._resolveScene(i,s))),typeof this.json.scene=="number"&&n.scenes&&(n.scene=n.scenes[this.json.scene]),n}getScene(e){return this._get(this.json.scenes,e)}getNode(e){return this._get(this.json.nodes,e)}getSkin(e){return this._get(this.json.skins,e)}getMesh(e){return this._get(this.json.meshes,e)}getMaterial(e){return this._get(this.json.materials,e)}getAccessor(e){return this._get(this.json.accessors,e)}getCamera(e){return this._get(this.json.cameras,e)}getTexture(e){return this._get(this.json.textures,e)}getSampler(e){return this._get(this.json.samplers,e)}getImage(e){return this._get(this.json.images,e)}getBufferView(e){return this._get(this.json.bufferViews,e)}getBuffer(e){return this._get(this.json.buffers,e)}_get(e,r){if(typeof r=="object")return r;const n=e&&e[r];return n||console.warn(`glTF file error: Could not find ${e}[${r}]`),n}_resolveScene(e,r){return{...e,id:e.id||`scene-${r}`,nodes:(e.nodes||[]).map(n=>this.getNode(n))}}_resolveNode(e,r){const n={...e,id:e?.id||`node-${r}`};return e.mesh!==void 0&&(n.mesh=this.getMesh(e.mesh)),e.camera!==void 0&&(n.camera=this.getCamera(e.camera)),e.skin!==void 0&&(n.skin=this.getSkin(e.skin)),e.meshes!==void 0&&e.meshes.length&&(n.mesh=e.meshes.reduce((i,s)=>{const o=this.getMesh(s);return i.id=o.id,i.primitives=i.primitives.concat(o.primitives),i},{primitives:[]})),n}_resolveNodeChildren(e){return e.children&&(e.children=e.children.map(r=>this.getNode(r))),e}_resolveSkin(e,r){const n=typeof e.inverseBindMatrices=="number"?this.getAccessor(e.inverseBindMatrices):void 0;return{...e,id:e.id||`skin-${r}`,inverseBindMatrices:n}}_resolveMesh(e,r){const n={...e,id:e.id||`mesh-${r}`,primitives:[]};return e.primitives&&(n.primitives=e.primitives.map(i=>{const s={...i,attributes:{},indices:void 0,material:void 0},o=i.attributes;for(const a in o)s.attributes[a]=this.getAccessor(o[a]);return i.indices!==void 0&&(s.indices=this.getAccessor(i.indices)),i.material!==void 0&&(s.material=this.getMaterial(i.material)),s})),n}_resolveMaterial(e,r){const n={...e,id:e.id||`material-${r}`};if(n.normalTexture&&(n.normalTexture={...n.normalTexture},n.normalTexture.texture=this.getTexture(n.normalTexture.index)),n.occlusionTexture&&(n.occlusionTexture={...n.occlusionTexture},n.occlusionTexture.texture=this.getTexture(n.occlusionTexture.index)),n.emissiveTexture&&(n.emissiveTexture={...n.emissiveTexture},n.emissiveTexture.texture=this.getTexture(n.emissiveTexture.index)),n.emissiveFactor||(n.emissiveFactor=n.emissiveTexture?[1,1,1]:[0,0,0]),n.pbrMetallicRoughness){n.pbrMetallicRoughness={...n.pbrMetallicRoughness};const i=n.pbrMetallicRoughness;i.baseColorTexture&&(i.baseColorTexture={...i.baseColorTexture},i.baseColorTexture.texture=this.getTexture(i.baseColorTexture.index)),i.metallicRoughnessTexture&&(i.metallicRoughnessTexture={...i.metallicRoughnessTexture},i.metallicRoughnessTexture.texture=this.getTexture(i.metallicRoughnessTexture.index))}return n}_resolveAccessor(e,r){const n=Zy(e.componentType),i=ev(e.type),s=n*i,o={...e,id:e.id||`accessor-${r}`,bytesPerComponent:n,components:i,bytesPerElement:s,value:void 0,bufferView:void 0,sparse:void 0};if(e.bufferView!==void 0&&(o.bufferView=this.getBufferView(e.bufferView)),o.bufferView){const a=o.bufferView.buffer,{ArrayType:c,byteLength:l}=wo(o,o.bufferView),u=(o.bufferView.byteOffset||0)+(o.byteOffset||0)+a.byteOffset;let f=a.arrayBuffer.slice(u,u+l);o.bufferView.byteStride&&(f=this._getValueFromInterleavedBuffer(a,u,o.bufferView.byteStride,o.bytesPerElement,o.count)),o.value=new c(f)}return o}_getValueFromInterleavedBuffer(e,r,n,i,s){const o=new Uint8Array(s*i);for(let a=0;a<s;a++){const c=r+a*n;o.set(new Uint8Array(e.arrayBuffer.slice(c,c+i)),a*i)}return o.buffer}_resolveTexture(e,r){return{...e,id:e.id||`texture-${r}`,sampler:typeof e.sampler=="number"?this.getSampler(e.sampler):$y(),source:typeof e.source=="number"?this.getImage(e.source):void 0}}_resolveSampler(e,r){const n={id:e.id||`sampler-${r}`,...e,parameters:{}};for(const i in n){const s=this._enumSamplerParameter(i);s!==void 0&&(n.parameters[s]=n[i])}return n}_enumSamplerParameter(e){return Xy[e]}_resolveImage(e,r){const n={...e,id:e.id||`image-${r}`,image:null,bufferView:e.bufferView!==void 0?this.getBufferView(e.bufferView):void 0},i=this.images[r];return i&&(n.image=i),n}_resolveBufferView(e,r){const n=e.buffer,i=this.buffers[n].arrayBuffer;let s=this.buffers[n].byteOffset||0;return e.byteOffset&&(s+=e.byteOffset),{id:`bufferView-${r}`,...e,buffer:this.buffers[n],data:new Uint8Array(i,s,e.byteLength)}}_resolveCamera(e,r){const n={...e,id:e.id||`camera-${r}`};return n.perspective,n.orthographic,n}}function rv(t,e){return new tv().postProcess(t,e)}async function Ys(t){if(!t.endsWith(".gltf")&&!t.endsWith(".glb"))return console.error("Unsupported file format. Only .gltf and .glb are supported."),new Te("EmptyMesh",ge({}));try{const e=await m0(t,Ks);if(!e)return console.error("Failed to load GLTF file."),new Te("EmptyMesh",ge({}));const n=rv(e).meshes;if(n.length===0)return console.warn("No meshes found in the GLTF file."),new Te("EmptyMesh",ge({}));const s=n[0],o=s.name||"UnnamedMesh",a=ge({}),c=new Te(o,a);for(const l of s.primitives){if(l.mode!==void 0&&l.mode!==4){console.warn(`Skipping non-triangle primitive (mode: ${l.mode})`);continue}const u=l.attributes,f=u.POSITION?.value,h=u.NORMAL?.value,m=u.TEXCOORD_0?.value;if(!f){console.warn("Primitive has no POSITION attribute, skipping.");continue}const d=f.length/3,p=c.getNumVertices();for(let y=0;y<d;++y){const x=w(f[y*3],f[y*3+1],f[y*3+2]),C=h?w(h[y*3],h[y*3+1],h[y*3+2]):w(0,0,1),g=m?X(m[y*2],m[y*2+1]):X(0,0);c.addVertex({pos:x,normal:C,uv:g})}const b=l.indices?.value;if(b)for(let y=0;y<b.length;y+=3)c.addTriangle([p+b[y],p+b[y+1],p+b[y+2]]);else for(let y=0;y<d;y+=3)c.addTriangle([p+y,p+y+1,p+y+2])}return console.log(`Loaded mesh "${o}" with ${c.getNumVertices()} vertices and ${c.getNumTriangles()} triangles.`),c}catch(e){return console.error("Error loading mesh:",e),new Te("EmptyMesh",ge({}))}}class Te{triangles;vertices;indices;Material;name;transform;BVH;WorldMatrix;inverseWorldMatrix;constructor(e,r){this.name=e,this.Material=r,this.triangles=[],this.indices=[],this.vertices=[],this.BVH=new bm,this.transform={translation:ne(),rotation:Dt(),scale:w(1,1,1)},this.WorldMatrix=wr(),this.inverseWorldMatrix=wr()}TransformMesh(e){this.transform=e,this.computeMatrices()}RotateMesh(e){vd(this.transform.rotation,this.transform.rotation,e),this.computeMatrices()}SetTranslation(e){this.transform.translation=e,this.computeMatrices()}computeMatrices(){this.WorldMatrix=wr(),hd(this.WorldMatrix,this.transform.rotation,this.transform.translation,this.transform.scale),this.inverseWorldMatrix=wr(),fd(this.inverseWorldMatrix,this.WorldMatrix)}GetWorldMatrix(){return this.WorldMatrix}GetInverseWorldMatrix(){return this.inverseWorldMatrix}GetFlatWorldMatrix(){return new Float32Array(this.WorldMatrix)}GetFlatNormalMatrix(){const e=Yt();es(e,this.WorldMatrix);const r=new Float32Array(12);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[4]=e[3],r[5]=e[4],r[6]=e[5],r[8]=e[6],r[9]=e[7],r[10]=e[8],r}GetFlatInverseWorldMatrix(){return new Float32Array(this.inverseWorldMatrix)}GetTransform(){return this.transform}GetMaterial(){return this.Material}GetFlattenedMaterial(){return Gi(this.Material)}addVertex(e){return this.vertices.push(e),this.vertices.length-1}addTriangle(e){if(e.length!==3)return;const r={vA:this.vertices[e[0]],vB:this.vertices[e[1]],vC:this.vertices[e[2]]};this.triangles.push(r),this.indices.push(...e)}getVertexData(){const e=Array(this.vertices.length*3),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n){const i=this.vertices[n].pos;r.set(i,n*3)}return r}getWorldVertexData(){const e=new Float32Array(this.vertices.length*3),r=ne();for(let n=0;n<this.vertices.length;++n)ts(r,this.vertices[n].pos,this.WorldMatrix),e.set(r,n*3);return e}getTransformedVertexData(){const e=new Float32Array(this.vertices.length*3),r=ne();for(let n=0;n<this.vertices.length;++n)ts(r,this.vertices[n].pos,this.WorldMatrix),e.set(r,n*3);return e}getNormalData(){const e=Array(this.vertices.length*3),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n)r.set(this.vertices[n].normal,n*3);return r}getWorldNormalData(){const e=new Float32Array(this.vertices.length*3),r=Yt();es(r,this.WorldMatrix);for(let n=0;n<this.vertices.length;++n){const i=this.vertices[n].normal,s=ne();Lr(s,i,r),An(s,s),e.set(s,n*3)}return e}getTransformedNormalData(){const e=new Float32Array(this.vertices.length*3),r=Yt();es(r,this.WorldMatrix);const n=ne();for(let i=0;i<this.vertices.length;++i)Lr(n,this.vertices[i].normal,r),An(n,n),e.set(n,i*3);return e}getUVData(){const e=Array(this.vertices.length*2),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n)r.set(this.vertices[n].uv,n*2);return r}getIndexData16(){return new Uint16Array(this.indices)}getIndexData32(){return new Uint32Array(this.indices)}getNumVertices(){return this.vertices.length}getNumTriangles(){return this.triangles.length}getTriangles(){return this.triangles}ComputeBVH(){this.BVH.buildBVH(this)}GetBVHGeometry(e=1/0){return this.BVH.generateWireframeGeometry(e)}getFlattenedBVHData(e=0){return this.BVH.getFlattenedBVHData(e)}intersectMeshWithRay(e,r){const n=ne();ts(n,e.origin,this.GetInverseWorldMatrix());const i=ne(),s=Yt();ud(s,this.GetInverseWorldMatrix()),Lr(i,e.direction,s);const o={origin:n,direction:i,invDir:w(1/i[0],1/i[1],1/i[2])};return this.BVH.traverse(o,r)}getReorderedIndexData32(){return this.BVH.getReorderedIndices(this.indices)}}function Su(){const e=new Float32Array(8);let r=0;const n=s=>{e[r++]=s.x,e[r++]=s.y};n({x:-.5,y:-.5}),n({x:.5,y:-.5}),n({x:-.5,y:.5}),n({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:e,indexData:i,numVertices:i.length}}function nv({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=(e+1)*2,o=new Float32Array(s*3),a=new Uint8Array(o.buffer);let c=0,l=8;const u=p=>{o[c++]=p.x,o[c++]=p.y,c+=1,a[l++]=(p.r??0)*255,a[l++]=(p.g??0)*255,a[l++]=(p.b??0)*255,l+=9},f=[1,1,1],h=[.1,.1,.1];for(let p=0;p<=e;p++){const b=n+(p+0)*(i-n)/e,y=Math.cos(b),x=Math.sin(b);u({x:y*t,y:x*t,r:h[0],g:h[1],b:h[2]}),u({x:y*r,y:x*r,r:f[0],g:f[1],b:f[2]})}const m=new Uint16Array(e*6);let d=0;for(let p=0;p<e;++p){const b=p*2;m[d++]=b,m[d++]=b+1,m[d++]=b+2,m[d++]=b+2,m[d++]=b+1,m[d++]=b+3}return{vertexData:o,indexData:m,numVertices:m.length}}function iv({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=(e+1)*2,o=new Float32Array(s*2);let a=0;const c=f=>{o[a++]=f.x,o[a++]=f.y};for(let f=0;f<=e;f++){const h=n+(f+0)*(i-n)/e,m=Math.cos(h),d=Math.sin(h);c({x:m*t,y:d*t}),c({x:m*r,y:d*r})}const l=new Uint16Array(e*6);let u=0;for(let f=0;f<e;++f){const h=f*2;l[u++]=h,l[u++]=h+1,l[u++]=h+2,l[u++]=h+2,l[u++]=h+1,l[u++]=h+3}return{vertexData:o,indexData:l,numVertices:l.length}}function sv({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=e*3*2,o=new Float32Array(s*2);let a=0;const c=(l,u)=>{o[a++]=l,o[a++]=u};for(let l=0;l<e;l++){const u=n+(l+0)*(i-n)/e,f=n+(l+1)*(i-n)/e,h=Math.cos(u),m=Math.sin(u),d=Math.cos(f),p=Math.sin(f);c(h*t,m*t),c(d*t,p*t),c(h*r,m*r),c(h*r,m*r),c(d*t,p*t),c(d*r,p*r)}return o}function ov(){const t=[.73,.73,.73],e=[.65,.05,.05],r=[.12,.45,.15],n=[1,1,1],i=[],s=[],o=[],a=[],c=[],l=[];let u=0;function f(x,C,g,M,E=0){return i.push(x[0],x[1],x[2]),s.push(C[0],C[1],C[2]),o.push(g[0],g[1],g[2]),c.push(M[0],M[1]),a.push(E),u++}function h(x,C,g,M,E,B=!1,P=0){let S=Di(x,C,g);B&&(S=w(-S[0],-S[1],-S[2]));const G=f(x,[S[0],S[1],S[2]],E,[0,0],P),U=f(C,[S[0],S[1],S[2]],E,[1,0],P),j=f(g,[S[0],S[1],S[2]],E,[1,1],P),V=f(M,[S[0],S[1],S[2]],E,[0,1],P);l.push(G,U,j),l.push(G,j,V)}function m(x,C,g,M=[0,0,0],E=0){const B=C[0]/2,P=C[1]/2,S=C[2]/2;let G=[x[0]-B,x[1]-P,x[2]-S],U=[x[0]+B,x[1]-P,x[2]-S],j=[x[0]+B,x[1]+P,x[2]-S],V=[x[0]-B,x[1]+P,x[2]-S],O=[x[0]-B,x[1]-P,x[2]+S],A=[x[0]+B,x[1]-P,x[2]+S],H=[x[0]+B,x[1]+P,x[2]+S],D=[x[0]-B,x[1]+P,x[2]+S];const F=new Float32Array(9),ee=Math.cos(M[0]),se=Math.sin(M[0]),re=Math.cos(M[1]),Q=Math.sin(M[1]),de=Math.cos(M[2]),Ie=Math.sin(M[2]);F[0]=re*de,F[1]=-re*Ie,F[2]=Q,F[3]=se*Q*de+ee*Ie,F[4]=-se*Q*Ie+ee*de,F[5]=-se*re,F[6]=-ee*Q*de+se*Ie,F[7]=ee*Q*Ie+se*de,F[8]=ee*re;const Ce=Me=>{const we=Me[0]-x[0],xe=Me[1]-x[1],Ye=Me[2]-x[2];return[F[0]*we+F[1]*xe+F[2]*Ye+x[0],F[3]*we+F[4]*xe+F[5]*Ye+x[1],F[6]*we+F[7]*xe+F[8]*Ye+x[2]]};G=Ce(G),U=Ce(U),j=Ce(j),V=Ce(V),O=Ce(O),A=Ce(A),H=Ce(H),D=Ce(D),h(O,A,H,D,g,!1,E),h(U,G,V,j,g,!1,E),h(G,O,D,V,g,!1,E),h(A,U,j,H,g,!1,E),h(V,D,H,j,g,!1,E),h(G,U,A,O,g,!1,E)}h([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],t,!1,.98),h([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],t,!1,.98);const p=548.8-1;h([343,p,227],[343,p,332],[213,p,332],[213,p,227],n),h([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],t),h([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],r),h([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],e);let b=u;m([278,224.4,279.5],[120,120,120],t,[4,Math.PI/9,7],1);let y=u-b;return{vertexData:new Float32Array(i),indexData:new Uint16Array(l),numVertices:l.length,normalData:new Float32Array(s),colorData:new Float32Array(o),reflectanceData:new Float32Array(a),uvData:new Float32Array(c),additionalInfo:{cubeVertexStart:b,cubeVertexCount:y,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(i.slice(b*3,(b+y)*3)),cubeNormalsInfo:new Float32Array(s.slice(b*3,(b+y)*3))}}}function Ts(t,e){let r=4;const n=new Float32Array(r*3),i=new Float32Array(r*3),s=new Float32Array(r*3),o=new Float32Array(r*2),a=new Uint16Array([0,1,2,0,2,3]),c=t.translation,l=t.scale[0]/2,u=t.scale[1]/2,f=t.rotation,h=[w(-l,-u,0),w(l,-u,0),w(l,u,0),w(-l,u,0)],m=Pl(f[0],f[1],f[2]);for(let y=0;y<h.length;++y)Lr(h[y],h[y],m),qt(h[y],h[y],c);let d=0;const p=(y,x)=>{n[d]=y[0],n[d+1]=y[1],n[d+2]=y[2],i[d]=x[0],i[d+1]=x[1],i[d+2]=x[2],d+=3};p(h[0],e),p(h[1],e),p(h[2],e),p(h[3],e);const b=w(0,0,1);Lr(b,b,m);for(let y=0;y<r;++y)s[y*3+0]=b[0],s[y*3+1]=b[1],s[y*3+2]=b[2];return o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=1,o[5]=1,o[6]=0,o[7]=1,{vertexData:n,indexData:a,colorData:i,normalData:s,uvData:o,numVertices:a.length,transform:t}}function Cs(t,e,r,n=12,i=12){const s=[],o=[],a=[],c=[],l=[],u=(f,h,m,d)=>{s.push(f[0],f[1],f[2]),o.push(h[0],h[1],h[2]),a.push(m[0],m[1],m[2]),c.push(d[0],d[1])};for(let f=0;f<=n;f++){const h=f*Math.PI/n,m=Math.sin(h),d=Math.cos(h);for(let p=0;p<=i;p++){const b=p*2*Math.PI/i,y=Math.sin(b),C=Math.cos(b)*m,g=d,M=y*m,E=1-p/i,B=1-f/n,P=[t[0]+e*C,t[1]+e*g,t[2]+e*M];u(P,[C,g,M],r,[E,B])}}for(let f=0;f<n;f++)for(let h=0;h<i;h++){const m=f*(i+1)+h,d=m+i+1;l.push(m,m+1,d),l.push(d,m+1,d+1)}return{vertexData:new Float32Array(s),indexData:new Uint16Array(l),numVertices:l.length,normalData:new Float32Array(o),colorData:new Float32Array(a),uvData:new Float32Array(c),transform:{translation:w(t[0],t[1],t[2]),rotation:w(0,0,0),scale:w(e,e,e)}}}function av(t,e=8){const r=[];r.push(new Te("white wall",ge({albedo:[.73,.73,.73],name:"whiteWall"}))),r.push(new Te("red wall",ge({albedo:[.65,.05,.05],name:"redWall"}))),r.push(new Te("green wall",ge({albedo:[.12,.45,.15],name:"greenWall"}))),r.push(new Te("light",ge({albedo:[1,1,1],roughness:0,name:"light"}))),r.push(new Te("sphereOne",t.find(h=>h.name==="sphereOne")||ge({albedo:[.12,.45,.15],name:"sphereOne",textureIndex:0}))),r.push(new Te("sphereTwo",t.find(h=>h.name==="sphereTwo")||ge({albedo:[.05,.05,.65],roughness:.5,metalness:.5,name:"sphereTwo",textureIndex:1}))),r.push(new Te("sphereThree",t.find(h=>h.name==="sphereThree")||ge({albedo:[.65,.05,.05],roughness:.01,metalness:.98,name:"sphereThree",textureIndex:2})));function n(h,m,d,p){const b={pos:m,normal:d,uv:p};h.addVertex(b)}function i(h,m,d,p,b,y=!1){let x=Di(m,d,p);y&&(x=w(-x[0],-x[1],-x[2]));const C=h.addVertex({pos:m,normal:x,uv:X(0,0)}),g=h.addVertex({pos:d,normal:x,uv:X(1,0)}),M=h.addVertex({pos:p,normal:x,uv:X(1,1)}),E=h.addVertex({pos:b,normal:x,uv:X(0,1)});h.addTriangle([C,g,M]),h.addTriangle([C,M,E])}function s(h,m,d,p=12,b=12){const y=h.getNumVertices();for(let x=0;x<=p;x++){const C=x*Math.PI/p,g=Math.sin(C),M=Math.cos(C);for(let E=0;E<=b;E++){const B=E*2*Math.PI/b,P=Math.sin(B),G=Math.cos(B)*g,U=M,j=P*g,V=1-E/b,O=1-x/p,A=w(m[0]+d*G,m[1]+d*U,m[2]+d*j);n(h,A,w(G,U,j),X(V,O))}}for(let x=0;x<p;x++)for(let C=0;C<b;C++){const g=y+x*(b+1)+C,M=g+b+1;h.addTriangle([g,g+1,M]),h.addTriangle([M,g+1,M+1])}}i(r[0],w(552.8,0,0),w(0,0,0),w(0,0,559.2),w(549.6,0,559.2),!1),i(r[0],w(556,548.8,0),w(556,548.8,559.2),w(0,548.8,559.2),w(0,548.8,0),!1);const a=548.8-1;i(r[3],w(343,a,227),w(343,a,332),w(213,a,332),w(213,a,227),!1),i(r[0],w(549.6,0,559.2),w(0,0,559.2),w(0,548.8,559.2),w(556,548.8,559.2),!1),i(r[2],w(0,0,559.2),w(0,0,0),w(0,548.8,0),w(0,548.8,559.2),!1),i(r[1],w(552.8,0,0),w(549.6,0,559.2),w(556,548.8,559.2),w(556,548.8,0),!1);let c=[278,224.4,279.5],l=90,u=120,f=[w(0,1,0),w(Math.sqrt(3)/2,-.5,0),w(-Math.sqrt(3)/2,-.5,0)];for(let h=0;h<3;++h)s(r[h+4],[0,0,0],1,e,e);return r[4].TransformMesh({translation:w(c[0]+f[0][0]*u,c[1]+f[0][1]*u,c[2]+f[0][2]*u),rotation:ns(0,0,0,1),scale:w(l,l,l)}),r[5].TransformMesh({translation:w(c[0]+f[1][0]*u,c[1]+f[1][1]*u,c[2]+f[1][2]*u),rotation:ns(0,0,0,1),scale:w(l,l,l)}),r[6].TransformMesh({translation:w(c[0]+f[2][0]*u,c[1]+f[2][1]*u,c[2]+f[2][2]*u),rotation:ns(0,0,0,1),scale:w(l,l,l)}),{meshes:r,additionalInfo:{sphereMaterialIndices:[4,5,6],sphereTransforms:[r[4].GetTransform(),r[5].GetTransform(),r[6].GetTransform()],sphereMaterials:[r[4].GetMaterial(),r[5].GetMaterial(),r[6].GetMaterial()]}}}async function cv(t){const e=[];e.push(new Te("white wall",ge({albedo:[.73,.73,.73],name:"whiteWall",metalness:1,roughness:0}))),e.push(new Te("Back Wall",ge({albedo:[.73,.73,.73],name:"backWall",metalness:.3,roughness:.6}))),e.push(new Te("red wall",ge({albedo:[.65,.05,.05],name:"redWall"}))),e.push(new Te("green wall",ge({albedo:[.12,.45,.15],name:"greenWall"}))),e.push(new Te("light",ge({albedo:[1,1,1],roughness:0,name:"light"})));const r=t.find(c=>c.name==="dragon")||ge({albedo:[.12,.45,.15],name:"dragon",textureIndex:0,useAlbedoTexture:!0,useRoughnessTexture:!0,useMetalnessTexture:!0});function n(c,l,u,f,h,m=!1){let d=Di(l,u,f);m&&(d=w(-d[0],-d[1],-d[2]));const p=c.addVertex({pos:l,normal:d,uv:X(0,0)}),b=c.addVertex({pos:u,normal:d,uv:X(1,0)}),y=c.addVertex({pos:f,normal:d,uv:X(1,1)}),x=c.addVertex({pos:h,normal:d,uv:X(0,1)});c.addTriangle([p,b,y]),c.addTriangle([p,y,x])}n(e[0],w(552.8,0,0),w(0,0,0),w(0,0,559.2),w(549.6,0,559.2),!1),n(e[0],w(556,548.8,0),w(556,548.8,559.2),w(0,548.8,559.2),w(0,548.8,0),!1);const s=548.8-1;n(e[4],w(343,s,227),w(343,s,332),w(213,s,332),w(213,s,227),!1),n(e[1],w(549.6,0,559.2),w(0,0,559.2),w(0,548.8,559.2),w(556,548.8,559.2),!1),n(e[3],w(0,0,559.2),w(0,0,0),w(0,548.8,0),w(0,548.8,559.2),!1),n(e[2],w(552.8,0,0),w(549.6,0,559.2),w(556,548.8,559.2),w(556,548.8,0),!1);let o=[278,224.4,279.5];const a=await Ys("/meshes/dragon/scene.gltf");a.Material=r,a.TransformMesh({translation:w(o[0],o[1],o[2]),rotation:Pr(Dt(),0,0,0),scale:w(2,2,2)}),e.push(a);for(const c of e)c.ComputeBVH();return{meshes:e,additionalInfo:{meshIndices:[5],meshTransforms:[e[5].GetTransform()],meshMaterials:[e[5].GetMaterial()]}}}async function lv(t){const e=[],r=t.find(C=>C.name==="topWall")||ge({albedo:[.73,.73,.73],name:"topWall",metalness:1,roughness:0});e.push(new Te("top wall",r));const n=t.find(C=>C.name==="floorWall")||ge({albedo:[.73,.73,.73],name:"floorWall",metalness:0,roughness:1});e.push(new Te("floor wall",n));const i=t.find(C=>C.name==="backWall")||ge({albedo:[.73,.73,.73],name:"backWall",textureIndex:0,useAlbedoTexture:!0,useRoughnessTexture:!0,useMetalnessTexture:!0,roughness:1,metalness:0});e.push(new Te("back wall",i));const s=t.find(C=>C.name==="redWall")||ge({albedo:[.65,.05,.05],name:"redWall",roughness:.07,metalness:.94});e.push(new Te("red wall",s));const o=t.find(C=>C.name==="greenWall")||ge({albedo:[.12,.45,.15],name:"greenWall",roughness:.07,metalness:.94});e.push(new Te("green wall",o));const a=t.find(C=>C.name==="cube1")||ge({albedo:[.73,.73,.73],name:"cube1"}),c=t.find(C=>C.name==="cube2")||ge({albedo:[.73,.73,.73],name:"cube2"}),l=t.find(C=>C.name==="calavera")||ge({albedo:[.73,.73,.73],name:"calavera",textureIndex:1,useAlbedoTexture:!0,useRoughnessTexture:!1,useMetalnessTexture:!1,roughness:.02,metalness:.27}),u=t.find(C=>C.name==="takis")||ge({albedo:[.73,.73,.73],name:"takis",textureIndex:2,useAlbedoTexture:!0,useRoughnessTexture:!1,useMetalnessTexture:!1,roughness:.01,metalness:.03});function f(C,g,M,E,B,P=!1){let S=Di(g,M,E);P&&(S=w(-S[0],-S[1],-S[2]));const G=C.addVertex({pos:g,normal:S,uv:X(0,0)}),U=C.addVertex({pos:M,normal:S,uv:X(1,0)}),j=C.addVertex({pos:E,normal:S,uv:X(1,1)}),V=C.addVertex({pos:B,normal:S,uv:X(0,1)});C.addTriangle([G,U,j]),C.addTriangle([G,j,V])}function h(C,g,M){const E=M[0]/2,B=M[1]/2,P=M[2]/2,S=[[g[0]-E,g[1]-B,g[2]+P],[g[0]+E,g[1]-B,g[2]+P],[g[0]+E,g[1]+B,g[2]+P],[g[0]-E,g[1]+B,g[2]+P],[g[0]-E,g[1]-B,g[2]-P],[g[0]+E,g[1]-B,g[2]-P],[g[0]+E,g[1]+B,g[2]-P],[g[0]-E,g[1]+B,g[2]-P],[g[0]-E,g[1]-B,g[2]-P],[g[0]-E,g[1]-B,g[2]+P],[g[0]-E,g[1]+B,g[2]+P],[g[0]-E,g[1]+B,g[2]-P],[g[0]+E,g[1]-B,g[2]-P],[g[0]+E,g[1]-B,g[2]+P],[g[0]+E,g[1]+B,g[2]+P],[g[0]+E,g[1]+B,g[2]-P],[g[0]-E,g[1]+B,g[2]-P],[g[0]-E,g[1]+B,g[2]+P],[g[0]+E,g[1]+B,g[2]+P],[g[0]+E,g[1]+B,g[2]-P],[g[0]-E,g[1]-B,g[2]-P],[g[0]-E,g[1]-B,g[2]+P],[g[0]+E,g[1]-B,g[2]+P],[g[0]+E,g[1]-B,g[2]-P]];f(C,S[0],S[1],S[2],S[3]),f(C,S[5],S[4],S[7],S[6]),f(C,S[8],S[9],S[10],S[11]),f(C,S[13],S[12],S[15],S[14]),f(C,S[16],S[17],S[18],S[19]),f(C,S[21],S[20],S[23],S[22])}f(e[1],w(552.8,0,0),w(0,0,0),w(0,0,559.2),w(549.6,0,559.2),!1),f(e[0],w(556,548.8,0),w(556,548.8,559.2),w(0,548.8,559.2),w(0,548.8,0),!1),f(e[2],w(549.6,0,559.2),w(0,0,559.2),w(0,548.8,559.2),w(556,548.8,559.2),!1),f(e[3],w(0,0,559.2),w(0,0,0),w(0,548.8,0),w(0,548.8,559.2),!1),f(e[4],w(552.8,0,0),w(549.6,0,559.2),w(556,548.8,559.2),w(556,548.8,0),!1);const m=new Te("short block",a);h(m,[0,0,0],[167.3,165,167]),m.TransformMesh({translation:w(185.5,82.5,169),rotation:Pr(Dt(),0,17,0),scale:w(1,1,1)}),e.push(m);const d=new Te("tall block",c);h(d,[0,0,0],[166.4,330,165.4]),d.TransformMesh({translation:w(368.5,165,351.25),rotation:Pr(Dt(),0,72.9,0),scale:w(1,1,1)}),e.push(d);const p=qt(ne(),d.GetTransform().translation,w(0,207,0)),b=await Ys("/meshes/calavera/scene.gltf");b.Material=l,b.TransformMesh({translation:p,rotation:Pr(Dt(),0,180,0),scale:w(60,60,60)}),e.push(b);const y=qt(ne(),m.GetTransform().translation,w(0,95.5,0)),x=await Ys("/meshes/takis/scene.gltf");x.Material=u,x.TransformMesh({translation:y,rotation:Pr(Dt(),190,180,0),scale:w(60,60,60)}),e.push(x);for(const C of e)C.ComputeBVH();return{meshes:e,additionalInfo:{meshIndices:[0,1,2,3,4,5,6,7,8],meshTransforms:[e[0].GetTransform(),e[1].GetTransform(),e[2].GetTransform(),e[3].GetTransform(),e[4].GetTransform(),e[5].GetTransform(),e[6].GetTransform(),e[7].GetTransform(),e[8].GetTransform()],meshMaterials:[r,n,i,s,o,a,c,l,u]}}}const uv=0,fv=4,ni=50;async function hv(t){const e=await mt();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const i=nc(e,"hardcoded triangle",um),s=nc(e,"hardcoded triangle",fm),o=dv(e,i,s,n),a=32,c=8,l=a*ni,u=c*ni,f=sv({radius:1,innerRadius:.5}),h=f.byteLength,m=f.length/2,d=Ms(e,l),p=Ms(e,u),b=Ms(e,h);e.queue.writeBuffer(b,0,f);const y=[];{const E=new Float32Array(l/4);for(let B=0;B<ni;B++){const P=B*(a/4);E.set([ue(.1),ue(.1),ue(.1),1],P+uv),E.set([ue(-.9,.9),ue(-.9,.9)],P+fv);const S={scale:ue(.1,.4)};y.push(S)}e.queue.writeBuffer(d,0,E)}const x=new Float32Array(u/4),C=pv(e,o.getBindGroupLayout(0),d,p,b),g={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(E=>{for(const B of E){const P=B.target,S=B.contentBoxSize[0].inlineSize,G=B.contentBoxSize[0].blockSize;P.width=Math.max(1,Math.min(S,e.limits.maxTextureDimension2D)),P.height=Math.max(1,Math.min(G,e.limits.maxTextureDimension2D))}mv(e,t,r,o,g,y,C,x,p,m)}).observe(t),null}function nc(t,e,r){return t.createShaderModule({label:e,code:r})}function dv(t,e,r,n){return t.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function mv(t,e,r,n,i,s,o,a,c,l){i.colorAttachments[0].view=r.getCurrentTexture().createView();const u=t.createCommandEncoder({label:"pass encoder"}),f=u.beginRenderPass(i);f.setPipeline(n);const h=e.width/e.height;s.forEach((d,p)=>{const b=2*p;a.set([d.scale/h,d.scale],b)}),t.queue.writeBuffer(c,0,a),f.setBindGroup(0,o),f.draw(l,ni),f.end();const m=u.finish();t.queue.submit([m])}function Ms(t,e){return t.createBuffer({label:"storage buffer",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function pv(t,e,r,n,i){return t.createBindGroup({label:"storage bind group",layout:e,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}},{binding:2,resource:{buffer:i}}]})}const gv=`// ============================== //\r
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
}`,bv=`// ============================== //\r
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
}`,yv=0,vv=1,ii=50;async function xv(t){const e=await mt();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const i=ic(e,"hardcoded triangle",gv),s=ic(e,"hardcoded triangle",bv),o=Bv(e,i,s,n),a=12,c=8,l=a*ii,u=c*ii,f=nv({radius:1,innerRadius:.5}),h=f.vertexData.byteLength,m=f.numVertices,d=Es(e,l),p=Es(e,u),b=Es(e,h),y=Tv(e,f.indexData.byteLength);e.queue.writeBuffer(b,0,f.vertexData),e.queue.writeBuffer(y,0,f.indexData);const x=[];{const E=new Uint8Array(l),B=new Float32Array(E.buffer);for(let P=0;P<ii;P++){const S=P*a,G=P*(a/4);E.set([Math.round(ue(.1)*255),Math.round(ue(.1)*255),Math.round(ue(.1)*255),255],S+yv),B.set([ue(-.9,.9),ue(-.9,.9)],G+vv);const U={scale:ue(.1,.4)};x.push(U)}e.queue.writeBuffer(d,0,B)}const C=new Float32Array(u/4),g={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(E=>{for(const B of E){const P=B.target,S=B.contentBoxSize[0].inlineSize,G=B.contentBoxSize[0].blockSize;P.width=Math.max(1,Math.min(S,e.limits.maxTextureDimension2D)),P.height=Math.max(1,Math.min(G,e.limits.maxTextureDimension2D))}Av(e,t,r,o,g,x,d,C,p,m,b,y)}).observe(t),null}function ic(t,e,r){return t.createShaderModule({label:e,code:r})}function Bv(t,e,r,n){return t.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function Av(t,e,r,n,i,s,o,a,c,l,u,f){i.colorAttachments[0].view=r.getCurrentTexture().createView();const h=t.createCommandEncoder({label:"pass encoder"}),m=h.beginRenderPass(i);m.setPipeline(n),m.setVertexBuffer(0,u),m.setVertexBuffer(1,o),m.setVertexBuffer(2,c),m.setIndexBuffer(f,"uint16");const d=e.width/e.height;s.forEach((b,y)=>{const x=2*y;a.set([b.scale/d,b.scale],x)}),t.queue.writeBuffer(c,0,a),m.drawIndexed(l,ii),m.end();const p=h.finish();t.queue.submit([p])}function Es(t,e){return t.createBuffer({label:"vertex buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function Tv(t,e){return t.createBuffer({label:"index buffer",size:e,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const Cv=`// ============================== //\r
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
}`,Mv=`// ============================== //\r
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
}`;let De=1e-6;const Ev=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);Ev.get(Float32Array);let Vi=Float32Array;function ft(t,e,r){const n=new Vi(3);return t!==void 0&&(n[0]=t,e!==void 0&&(n[1]=e,r!==void 0&&(n[2]=r))),n}function Go(t,e,r){return r=r||new Vi(3),r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function Jr(t,e,r){r=r||new Vi(3);const n=t[2]*e[0]-t[0]*e[2],i=t[0]*e[1]-t[1]*e[0];return r[0]=t[1]*e[2]-t[2]*e[1],r[1]=n,r[2]=i,r}function Ut(t,e){e=e||new Vi(3);const r=t[0],n=t[1],i=t[2],s=Math.sqrt(r*r+n*n+i*i);return s>1e-5?(e[0]=r/s,e[1]=n/s,e[2]=i/s):(e[0]=0,e[1]=0,e[2]=0),e}let he=Float32Array;function wv(t){const e=he;return he=t,e}function Sv(t,e,r,n,i,s,o,a,c,l,u,f,h,m,d,p){const b=new he(16);return t!==void 0&&(b[0]=t,e!==void 0&&(b[1]=e,r!==void 0&&(b[2]=r,n!==void 0&&(b[3]=n,i!==void 0&&(b[4]=i,s!==void 0&&(b[5]=s,o!==void 0&&(b[6]=o,a!==void 0&&(b[7]=a,c!==void 0&&(b[8]=c,l!==void 0&&(b[9]=l,u!==void 0&&(b[10]=u,f!==void 0&&(b[11]=f,h!==void 0&&(b[12]=h,m!==void 0&&(b[13]=m,d!==void 0&&(b[14]=d,p!==void 0&&(b[15]=p)))))))))))))))),b}function Pv(t,e){return e=e||new he(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=0,e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=0,e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Iv(t,e){e=e||new he(16);const r=t[0],n=t[1],i=t[2],s=t[3],o=r+r,a=n+n,c=i+i,l=r*o,u=n*o,f=n*a,h=i*o,m=i*a,d=i*c,p=s*o,b=s*a,y=s*c;return e[0]=1-f-d,e[1]=u+y,e[2]=h-b,e[3]=0,e[4]=u-y,e[5]=1-l-d,e[6]=m+p,e[7]=0,e[8]=h+b,e[9]=m-p,e[10]=1-l-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ov(t,e){return e=e||new he(16),e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=-t[7],e[8]=-t[8],e[9]=-t[9],e[10]=-t[10],e[11]=-t[11],e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=-t[15],e}function Do(t,e){return e=e||new he(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}const Rv=Do;function Gv(t,e){return Math.abs(t[0]-e[0])<De&&Math.abs(t[1]-e[1])<De&&Math.abs(t[2]-e[2])<De&&Math.abs(t[3]-e[3])<De&&Math.abs(t[4]-e[4])<De&&Math.abs(t[5]-e[5])<De&&Math.abs(t[6]-e[6])<De&&Math.abs(t[7]-e[7])<De&&Math.abs(t[8]-e[8])<De&&Math.abs(t[9]-e[9])<De&&Math.abs(t[10]-e[10])<De&&Math.abs(t[11]-e[11])<De&&Math.abs(t[12]-e[12])<De&&Math.abs(t[13]-e[13])<De&&Math.abs(t[14]-e[14])<De&&Math.abs(t[15]-e[15])<De}function Dv(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function Pu(t){return t=t||new he(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _v(t,e){if(e=e||new he(16),e===t){let x;return x=t[1],t[1]=t[4],t[4]=x,x=t[2],t[2]=t[8],t[8]=x,x=t[3],t[3]=t[12],t[12]=x,x=t[6],t[6]=t[9],t[9]=x,x=t[7],t[7]=t[13],t[13]=x,x=t[11],t[11]=t[14],t[14]=x,e}const r=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],d=t[12],p=t[13],b=t[14],y=t[15];return e[0]=r,e[1]=o,e[2]=u,e[3]=d,e[4]=n,e[5]=a,e[6]=f,e[7]=p,e[8]=i,e[9]=c,e[10]=h,e[11]=b,e[12]=s,e[13]=l,e[14]=m,e[15]=y,e}function Iu(t,e){e=e||new he(16);const r=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],d=t[12],p=t[13],b=t[14],y=t[15],x=h*y,C=b*m,g=c*y,M=b*l,E=c*m,B=h*l,P=i*y,S=b*s,G=i*m,U=h*s,j=i*l,V=c*s,O=u*p,A=d*f,H=o*p,D=d*a,F=o*f,ee=u*a,se=r*p,re=d*n,Q=r*f,de=u*n,Ie=r*a,Ce=o*n,Me=x*a+M*f+E*p-(C*a+g*f+B*p),we=C*n+P*f+U*p-(x*n+S*f+G*p),xe=g*n+S*a+j*p-(M*n+P*a+V*p),Ye=B*n+G*a+V*f-(E*n+U*a+j*f),me=1/(r*Me+o*we+u*xe+d*Ye);return e[0]=me*Me,e[1]=me*we,e[2]=me*xe,e[3]=me*Ye,e[4]=me*(C*o+g*u+B*d-(x*o+M*u+E*d)),e[5]=me*(x*r+S*u+G*d-(C*r+P*u+U*d)),e[6]=me*(M*r+P*o+V*d-(g*r+S*o+j*d)),e[7]=me*(E*r+U*o+j*u-(B*r+G*o+V*u)),e[8]=me*(O*l+D*m+F*y-(A*l+H*m+ee*y)),e[9]=me*(A*s+se*m+de*y-(O*s+re*m+Q*y)),e[10]=me*(H*s+re*l+Ie*y-(D*s+se*l+Ce*y)),e[11]=me*(ee*s+Q*l+Ce*m-(F*s+de*l+Ie*m)),e[12]=me*(H*h+ee*b+A*c-(F*b+O*c+D*h)),e[13]=me*(Q*b+O*i+re*h-(se*h+de*b+A*i)),e[14]=me*(se*c+Ce*b+D*i-(Ie*b+H*i+re*c)),e[15]=me*(Ie*h+F*i+de*c-(Q*c+Ce*h+ee*i)),e}function Uv(t){const e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],o=t[5],a=t[6],c=t[7],l=t[8],u=t[9],f=t[10],h=t[11],m=t[12],d=t[13],p=t[14],b=t[15],y=f*b,x=p*h,C=a*b,g=p*c,M=a*h,E=f*c,B=n*b,P=p*i,S=n*h,G=f*i,U=n*c,j=a*i,V=y*o+g*u+M*d-(x*o+C*u+E*d),O=x*r+B*u+G*d-(y*r+P*u+S*d),A=C*r+P*o+U*d-(g*r+B*o+j*d),H=E*r+S*o+j*u-(M*r+G*o+U*u);return e*V+s*O+l*A+m*H}const Fv=Iu;function Ou(t,e,r){r=r||new he(16);const n=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],f=t[8],h=t[9],m=t[10],d=t[11],p=t[12],b=t[13],y=t[14],x=t[15],C=e[0],g=e[1],M=e[2],E=e[3],B=e[4],P=e[5],S=e[6],G=e[7],U=e[8],j=e[9],V=e[10],O=e[11],A=e[12],H=e[13],D=e[14],F=e[15];return r[0]=n*C+a*g+f*M+p*E,r[1]=i*C+c*g+h*M+b*E,r[2]=s*C+l*g+m*M+y*E,r[3]=o*C+u*g+d*M+x*E,r[4]=n*B+a*P+f*S+p*G,r[5]=i*B+c*P+h*S+b*G,r[6]=s*B+l*P+m*S+y*G,r[7]=o*B+u*P+d*S+x*G,r[8]=n*U+a*j+f*V+p*O,r[9]=i*U+c*j+h*V+b*O,r[10]=s*U+l*j+m*V+y*O,r[11]=o*U+u*j+d*V+x*O,r[12]=n*A+a*H+f*D+p*F,r[13]=i*A+c*H+h*D+b*F,r[14]=s*A+l*H+m*D+y*F,r[15]=o*A+u*H+d*D+x*F,r}const Lv=Ou;function Nv(t,e,r){return r=r||Pu(),t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11]),r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function jv(t,e){return e=e||ft(),e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function Vv(t,e,r){r=r||ft();const n=e*4;return r[0]=t[n+0],r[1]=t[n+1],r[2]=t[n+2],r}function Hv(t,e,r,n){n!==t&&(n=Do(t,n));const i=r*4;return n[i+0]=e[0],n[i+1]=e[1],n[i+2]=e[2],n}function kv(t,e){e=e||ft();const r=t[0],n=t[1],i=t[2],s=t[4],o=t[5],a=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.sqrt(r*r+n*n+i*i),e[1]=Math.sqrt(s*s+o*o+a*a),e[2]=Math.sqrt(c*c+l*l+u*u),e}function zv(t,e,r,n,i){i=i||new he(16);const s=Math.tan(Math.PI*.5-.5*t);if(i[0]=s/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,n===1/0)i[10]=-1,i[14]=-r;else{const o=1/(r-n);i[10]=n*o,i[14]=n*r*o}return i}function Jv(t,e,r,n,i,s,o){return o=o||new he(16),o[0]=2/(e-t),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(n-r),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(i-s),o[11]=0,o[12]=(e+t)/(t-e),o[13]=(n+r)/(r-n),o[14]=i/(i-s),o[15]=1,o}function Wv(t,e,r,n,i,s,o){o=o||new he(16);const a=e-t,c=n-r,l=i-s;return o[0]=2*i/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/c,o[6]=0,o[7]=0,o[8]=(t+e)/a,o[9]=(n+r)/c,o[10]=s/l,o[11]=-1,o[12]=0,o[13]=0,o[14]=i*s/l,o[15]=0,o}let pe,Ae,le;function qv(t,e,r,n){return n=n||new he(16),pe=pe||ft(),Ae=Ae||ft(),le=le||ft(),Ut(Go(e,t,le),le),Ut(Jr(r,le,pe),pe),Ut(Jr(le,pe,Ae),Ae),n[0]=pe[0],n[1]=pe[1],n[2]=pe[2],n[3]=0,n[4]=Ae[0],n[5]=Ae[1],n[6]=Ae[2],n[7]=0,n[8]=le[0],n[9]=le[1],n[10]=le[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Kv(t,e,r,n){return n=n||new he(16),pe=pe||ft(),Ae=Ae||ft(),le=le||ft(),Ut(Go(t,e,le),le),Ut(Jr(r,le,pe),pe),Ut(Jr(le,pe,Ae),Ae),n[0]=pe[0],n[1]=pe[1],n[2]=pe[2],n[3]=0,n[4]=Ae[0],n[5]=Ae[1],n[6]=Ae[2],n[7]=0,n[8]=le[0],n[9]=le[1],n[10]=le[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Yv(t,e,r,n){return n=n||new he(16),pe=pe||ft(),Ae=Ae||ft(),le=le||ft(),Ut(Go(t,e,le),le),Ut(Jr(r,le,pe),pe),Ut(Jr(le,pe,Ae),Ae),n[0]=pe[0],n[1]=Ae[0],n[2]=le[0],n[3]=0,n[4]=pe[1],n[5]=Ae[1],n[6]=le[1],n[7]=0,n[8]=pe[2],n[9]=Ae[2],n[10]=le[2],n[11]=0,n[12]=-(pe[0]*t[0]+pe[1]*t[1]+pe[2]*t[2]),n[13]=-(Ae[0]*t[0]+Ae[1]*t[1]+Ae[2]*t[2]),n[14]=-(le[0]*t[0]+le[1]*t[1]+le[2]*t[2]),n[15]=1,n}function Xv(t,e){return e=e||new he(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function Qv(t,e,r){r=r||new he(16);const n=e[0],i=e[1],s=e[2],o=t[0],a=t[1],c=t[2],l=t[3],u=t[4],f=t[5],h=t[6],m=t[7],d=t[8],p=t[9],b=t[10],y=t[11],x=t[12],C=t[13],g=t[14],M=t[15];return t!==r&&(r[0]=o,r[1]=a,r[2]=c,r[3]=l,r[4]=u,r[5]=f,r[6]=h,r[7]=m,r[8]=d,r[9]=p,r[10]=b,r[11]=y),r[12]=o*n+u*i+d*s+x,r[13]=a*n+f*i+p*s+C,r[14]=c*n+h*i+b*s+g,r[15]=l*n+m*i+y*s+M,r}function $v(t,e){e=e||new he(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Zv(t,e,r){r=r||new he(16);const n=t[4],i=t[5],s=t[6],o=t[7],a=t[8],c=t[9],l=t[10],u=t[11],f=Math.cos(e),h=Math.sin(e);return r[4]=f*n+h*a,r[5]=f*i+h*c,r[6]=f*s+h*l,r[7]=f*o+h*u,r[8]=f*a-h*n,r[9]=f*c-h*i,r[10]=f*l-h*s,r[11]=f*u-h*o,t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function e2(t,e){e=e||new he(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function t2(t,e,r){r=r||new he(16);const n=t[0],i=t[1],s=t[2],o=t[3],a=t[8],c=t[9],l=t[10],u=t[11],f=Math.cos(e),h=Math.sin(e);return r[0]=f*n-h*a,r[1]=f*i-h*c,r[2]=f*s-h*l,r[3]=f*o-h*u,r[8]=f*a+h*n,r[9]=f*c+h*i,r[10]=f*l+h*s,r[11]=f*u+h*o,t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function r2(t,e){e=e||new he(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function n2(t,e,r){r=r||new he(16);const n=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],f=Math.cos(e),h=Math.sin(e);return r[0]=f*n+h*a,r[1]=f*i+h*c,r[2]=f*s+h*l,r[3]=f*o+h*u,r[4]=f*a-h*n,r[5]=f*c-h*i,r[6]=f*l-h*s,r[7]=f*u-h*o,t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function Ru(t,e,r){r=r||new he(16);let n=t[0],i=t[1],s=t[2];const o=Math.sqrt(n*n+i*i+s*s);n/=o,i/=o,s/=o;const a=n*n,c=i*i,l=s*s,u=Math.cos(e),f=Math.sin(e),h=1-u;return r[0]=a+(1-a)*u,r[1]=n*i*h+s*f,r[2]=n*s*h-i*f,r[3]=0,r[4]=n*i*h-s*f,r[5]=c+(1-c)*u,r[6]=i*s*h+n*f,r[7]=0,r[8]=n*s*h+i*f,r[9]=i*s*h-n*f,r[10]=l+(1-l)*u,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const i2=Ru;function Gu(t,e,r,n){n=n||new he(16);let i=e[0],s=e[1],o=e[2];const a=Math.sqrt(i*i+s*s+o*o);i/=a,s/=a,o/=a;const c=i*i,l=s*s,u=o*o,f=Math.cos(r),h=Math.sin(r),m=1-f,d=c+(1-c)*f,p=i*s*m+o*h,b=i*o*m-s*h,y=i*s*m-o*h,x=l+(1-l)*f,C=s*o*m+i*h,g=i*o*m+s*h,M=s*o*m-i*h,E=u+(1-u)*f,B=t[0],P=t[1],S=t[2],G=t[3],U=t[4],j=t[5],V=t[6],O=t[7],A=t[8],H=t[9],D=t[10],F=t[11];return n[0]=d*B+p*U+b*A,n[1]=d*P+p*j+b*H,n[2]=d*S+p*V+b*D,n[3]=d*G+p*O+b*F,n[4]=y*B+x*U+C*A,n[5]=y*P+x*j+C*H,n[6]=y*S+x*V+C*D,n[7]=y*G+x*O+C*F,n[8]=g*B+M*U+E*A,n[9]=g*P+M*j+E*H,n[10]=g*S+M*V+E*D,n[11]=g*G+M*O+E*F,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s2=Gu;function o2(t,e){return e=e||new he(16),e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function a2(t,e,r){r=r||new he(16);const n=e[0],i=e[1],s=e[2];return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=n*t[3],r[4]=i*t[4],r[5]=i*t[5],r[6]=i*t[6],r[7]=i*t[7],r[8]=s*t[8],r[9]=s*t[9],r[10]=s*t[10],r[11]=s*t[11],t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}var St=Object.freeze({__proto__:null,aim:qv,axisRotate:Gu,axisRotation:Ru,cameraAim:Kv,clone:Rv,copy:Do,create:Sv,determinant:Uv,equals:Dv,equalsApproximately:Gv,fromMat3:Pv,fromQuat:Iv,frustum:Wv,getAxis:Vv,getScaling:kv,getTranslation:jv,identity:Pu,inverse:Iu,invert:Fv,lookAt:Yv,mul:Lv,multiply:Ou,negate:Ov,ortho:Jv,perspective:zv,rotate:s2,rotateX:Zv,rotateY:t2,rotateZ:n2,rotation:i2,rotationX:$v,rotationY:e2,rotationZ:r2,scale:a2,scaling:o2,setAxis:Hv,setDefaultType:wv,setTranslation:Nv,translate:Qv,translation:Xv,transpose:_v});async function c2(t){const e=new Ai;return await e.initialize(t),e}class Ai{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=mr();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=Le(this.device,Cv,Mv,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(e){if(e!==null)return new Promise((r,n)=>{if(e.addEventListener("error",n),"requestVideoFrameCallback"in e)e.requestVideoFrameCallback((i,s)=>{r()});else{const i=s=>{s.currentTime>0?r():requestAnimationFrame(()=>i(s))};i(e)}e.play().catch(n)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const e=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),r=8,n=8,i=64,s=r*this.numberOfObjects,o=n*this.numberOfObjects,a=i*this.numberOfObjects,c=Su(),l=c.vertexData.byteLength,u=c.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:l,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,c.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:c.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,c.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:o,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const f=[];{const C=new Float32Array(s/4);for(let g=0;g<this.numberOfObjects;g++){const M=g*(r/4);C.set([ue(-.9,.9),ue(-.9,.9)],M);const E={scale:ue(.2,.6)};f.push(E)}this.perInstanceOffsets=new Float32Array(C),this.device.queue.writeBuffer(this.staticBuffer,0,C)}const h=new Float32Array(o/4),m=new Float32Array(a/4);let d=0,p=0,b=0;const y=1e4,x=C=>{if(this.canvas===null||this.device===null||this.context===null)return;const g=C-d;p+=g,d=C;const M=performance.now(),E=60*Math.PI/180,B=this.canvas.width/this.canvas.height,G=St.perspective(E,B,.1,2e3),U=[0,0,2],j=[0,1,0],V=[0,0,0],O=St.lookAt(U,V,j),H=St.multiply(G,O),D=p/y*2*Math.PI,F=this.canvas.width/this.canvas.height*.5;f.forEach((we,xe)=>{const Ye=xe*(n/4),me=xe*(i/4);h.set([we.scale,we.scale],Ye);const Kr=this.perInstanceOffsets[2*xe+0],v=this.perInstanceOffsets[2*xe+1],T=St.create();St.copy(H,T),St.translate(T,[Kr,v,0],T),St.rotateX(T,D,T),St.rotateY(T,.2*Math.sin(D),T),St.scale(T,[2*F,1*F,1],T),m.set(T,me)});const se={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},re=this.device.createCommandEncoder({label:"Render Quad Encoder"}),Q=re.beginRenderPass(se);Q.setPipeline(this.simpleTexturePipeline),Q.setVertexBuffer(0,this.vertexBuffer),Q.setVertexBuffer(1,this.staticBuffer),Q.setVertexBuffer(2,this.changingBuffer),Q.setIndexBuffer(this.indexBuffer,"uint16");const de=this.device.importExternalTexture({source:this.video}),Ie=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e},{binding:1,resource:de},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,h),this.device.queue.writeBuffer(this.storageBuffer,0,m),Q.setBindGroup(0,Ie),Q.drawIndexed(u,this.numberOfObjects),Q.end(),this.timestampQuerySet!=null&&(re.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&re.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const Ce=re.finish();this.device.queue.submit([Ce]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const we=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());b=Number(we[1]-we[0]),this.timestampQuerySet.resultBuffer.unmap()});const Me=performance.now()-M;if(this.infoElement&&this.device){const we=`                FPS: ${(1e3/g).toFixed(1)}
                JS Time: ${Me.toFixed(1)} ms
                GPU Time: ${(b/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=we,pr(1e3/g)}this.animationFrameId=requestAnimationFrame(x)};this.animationFrameId=requestAnimationFrame(x),this.resizeObserver=new ResizeObserver(C=>{for(const g of C){const M=g.contentBoxSize[0].inlineSize,E=g.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(M,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(E,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){await this.smallCleanup(),this.slider&&(this.slider=null),gr()}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const e=Ht();if(e===null)return;const r=document.createElement("label");r.textContent=`Number of Objects: ${this.numberOfObjects}`,r.htmlFor="numObjectsSlider",e.appendChild(r),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=Ai.minObjects.toString(),this.slider.max=Ai.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",e.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),r.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let n=!1;const i=async()=>{if(!n){n=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{n=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const l2=`// ============================== //\r
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
}`,u2=`// ============================== //\r
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
}`,f2=`// ============================== //\r
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
`,h2=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class Mn{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(e,r){this.bodyA=e,this.bodyB=r;for(let n=0;n<Mn.MAX_ROWS;++n){this.J.push(w(0,0,0));const i=Yt();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let e=0;e<Mn.MAX_ROWS;++e)this.stiffness[e]=0,this.penalty[e]=0,this.lambda[e]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(e){console.warn("This method should not be called directly.")}computeDerivatives(e){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class d2{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=w(0,0,0);inertial=w(0,0,0);id=-1;forces=[];constructor(e,r,n,i,s,o){this.width=e[0],this.height=e[1],this.density=n,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=o,this.prevVelocity=o,this.moment=this.mass*et(e,e)/12,this.radius=Math.sqrt(et(e,e))*.5,this.color=r}getScale(){return X(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return X(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(e){this.staticBody||(this.velocity=e)}getRotationMatrix(){const e=Math.cos(this.position[2]),r=Math.sin(this.position[2]);return hi(e,r,-r,e)}setPosition(e){this.staticBody||(this.position=e)}setColor(e){this.color=e}isConstrainedTo(e){for(let r=0;r<this.forces.length;++r){const n=this.forces[r];if(n.bodyA===this&&n.bodyB===e||n.bodyB===this&&n.bodyA===e)return!0}return!1}}const We=12,$e=8,or=4,m2=8,p2=6,sc=256,g2=16;class At{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(sc*(We+$e)/4);numInstances=0;maxInstances=sc;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(e,r){this.canvas=e,this.gameManager=r}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(e=>{for(const r of e){const n=r.contentBoxSize[0].inlineSize,i=r.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(n,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(e){return this.addInstance(e.getPosition(),e.getScale(),e.getColor())}addInstance(e,r,n){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*or,n);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,e),this.updateInstanceScale(s,r),s}removeInstance(e){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const r=this.idToIndexMap.get(e);if(r===void 0)return;const n=this.numInstances-1;if(r!==n){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,n*or,this.staticBuffer,r*or,or),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,o=r*(We+$e)/4,a=n*(We+$e)/4;s[o+0]=s[a+0],s[o+1]=s[a+1],s[o+2]=s[a+2],s[o+3]=s[a+3];const c=this.indexToId[n];this.indexToId[r]=c,this.idToIndexMap.set(c,r)}this.idToIndexMap.delete(e),this.indexToId.pop(),this.numInstances--}updateInstanceScale(e,r){const n=this.idToIndexMap.get(e);n!==void 0&&(this.changingCpuArray[n*(We+$e)/4+3]=r[0],this.changingCpuArray[n*(We+$e)/4+4]=r[1])}updateInstancePosition(e,r){const n=this.idToIndexMap.get(e);n!==void 0&&(this.changingCpuArray[n*(We+$e)/4+0]=r[0],this.changingCpuArray[n*(We+$e)/4+1]=r[1],this.changingCpuArray[n*(We+$e)/4+2]=r[2])}updateContacts(e){if(this.numContacts=Math.min(e.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let r=0;r<this.numContacts;++r)this.contactPositions[r*2+0]=e[r].pos[0],this.contactPositions[r*2+1]=e[r].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const e=this.context.getCurrentTexture().createView(),r={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:e,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},n=this.device.createCommandEncoder({label:"canvas render encoder"}),i=n.beginRenderPass(r);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(We+$e);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(p2,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!tm(this.timestampQuerySet,n)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([n.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const e=this.maxInstances*or,r=this.maxInstances*(We+$e),n=Su(),i=n.vertexData.byteLength,s=n.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,n.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,n.indexData);const o=iv({radius:1,innerRadius:.01});this.contactIndicesPerInstance=o.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:o.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,o.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:o.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,o.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=Sn(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:g2,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=new Float32Array([At.xWorldSize,At.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,a.buffer,a.byteOffset,a.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const e=this.maxInstances*or,r=this.maxInstances*(We+$e),n=this.device.createBuffer({label:"Extended static instance buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,n,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const o=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(We+$e)/4),this.changingCpuArray.set(o),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=n,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=Le(this.device,l2,u2,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[e]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:m2,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:or,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:We+$e,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:We,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:e,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=Le(this.device,f2,h2,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const b2=5e-4,y2=.01,cr=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),v2=t=>{const e=t.inEdge1;t.inEdge1=t.inEdge2,t.inEdge2=e;const r=t.outEdge1;t.outEdge1=t.outEdge2,t.outEdge2=r};function mn(t){return{inEdge1:t.inEdge1,outEdge1:t.outEdge1,inEdge2:t.inEdge2,outEdge2:t.outEdge2,ID:t.ID}}function Du(t){return t.inEdge1&255|(t.outEdge1&255)<<8|(t.inEdge2&255)<<16|(t.outEdge2&255)<<24}function oc(){return{details:cr(),pA:K(),pB:K(),n:K(),JacNormA:ne(),JacNormB:ne(),JacTangA:ne(),JacTangB:ne(),C0:K(),stick:!1}}const ac=(t,e,r,n,i)=>{let s=0;const o=et(r,e[0].v)-n,a=et(r,e[1].v)-n;if(o<=0&&(t[s++]={v:di(e[0].v),cd:mn(e[0].cd)}),a<=0&&(t[s++]={v:di(e[1].v),cd:mn(e[1].cd)}),o*a<0){const c=o/(o-a),l=Td(K(),e[0].v,e[1].v,c);let u=mn(o>0?e[0].cd:e[1].cd);o>0?(u.inEdge1=i,u.inEdge2=0):(u.outEdge1=i,u.outEdge2=0),u.ID=Du(u),t[s++]={v:l,cd:u}}return s},Kn=(t,e,r,n,i)=>{const s=Zn(tn(),n),o=_e(K(),i,s);Pt(o,o,-1);const a=X(Math.abs(o[0]),Math.abs(o[1]));a[0]>a[1]?o[0]>0?(t[0].v=X(e[0],-e[1]),t[0].cd.inEdge2=3,t[0].cd.outEdge2=4,t[1].v=X(e[0],e[1]),t[1].cd.inEdge2=4,t[1].cd.outEdge2=1):(t[0].v=X(-e[0],e[1]),t[0].cd.inEdge2=1,t[0].cd.outEdge2=2,t[1].v=X(-e[0],-e[1]),t[1].cd.inEdge2=2,t[1].cd.outEdge2=3):o[1]>0?(t[0].v=X(e[0],e[1]),t[0].cd.inEdge2=4,t[0].cd.outEdge2=1,t[1].v=X(-e[0],e[1]),t[1].cd.inEdge2=1,t[1].cd.outEdge2=2):(t[0].v=X(-e[0],-e[1]),t[0].cd.inEdge2=2,t[0].cd.outEdge2=3,t[1].v=X(e[0],-e[1]),t[1].cd.inEdge2=3,t[1].cd.outEdge2=4),t[0].v=Ot(K(),r,_e(K(),t[0].v,n)),t[1].v=Ot(K(),r,_e(K(),t[1].v,n))};class _o extends Mn{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(e,r){super(e,r);for(let n=0;n<Mn.MAX_ROWS;++n)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const e=this.penalty.slice(),r=this.lambda.slice(),n=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=_o.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const o=this.contacts[s].details.ID,a=this.oldContacts.findIndex(c=>c.details.ID===o);a!==-1&&(this.penalty[s*2+0]=e[a*2+0],this.penalty[s*2+1]=e[a*2+1],this.lambda[s*2+0]=r[a*2+0],this.lambda[s*2+1]=r[a*2+1],this.contacts[s].stick=n[a],this.contacts[s].stick&&(this.contacts[s].pA=di(this.oldContacts[a].pA),this.contacts[s].pB=di(this.oldContacts[a].pB)))}for(let s=0;s<this.contacts.length;++s){const o=this.contacts[s].n,a=X(o[1],-o[0]),c=hi(o[0],o[1],a[0],a[1]),l=_e(K(),this.contacts[s].pA,xr(this.bodyA.getPosition()[2])),u=_e(K(),this.contacts[s].pB,xr(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=w(c[0],c[2],Hn(l,o)),this.contacts[s].JacNormB=w(-c[0],-c[2],-Hn(u,o)),this.contacts[s].JacTangA=w(c[1],c[3],Hn(l,a)),this.contacts[s].JacTangB=w(-c[1],-c[3],-Hn(u,a));const f=vt(K(),Ot(K(),this.bodyA.getPos2(),l),Ot(K(),this.bodyB.getPos2(),u));this.contacts[s].C0=_e(this.contacts[s].C0,f,c),this.contacts[s].C0=Ot(this.contacts[s].C0,this.contacts[s].C0,X(b2,0))}return this.contacts.length>0}computeConstraints(e){for(let r=0;r<this.contacts.length;++r){const n=Sr(ne(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=Sr(ne(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=Pt(K(),this.contacts[r].C0,1-e);this.C[r*2+0]=s[0]+lr(this.contacts[r].JacNormA,n)+lr(this.contacts[r].JacNormB,i),this.C[r*2+1]=s[1]+lr(this.contacts[r].JacTangA,n)+lr(this.contacts[r].JacTangB,i);const o=Math.abs(this.lambda[r*2+0])*this.friction;this.fmax[r*2+1]=o,this.fmin[r*2+1]=-o,this.contacts[r].stick=Math.abs(this.lambda[r*2+1])<o&&Math.abs(this.contacts[r].C0[1])<y2}}computeDerivatives(e){for(let r=0;r<this.contacts.length;++r)e===this.bodyA?(this.J[r*2+0]=this.contacts[r].JacNormA,this.J[r*2+1]=this.contacts[r].JacTangA):(this.J[r*2+0]=this.contacts[r].JacNormB,this.J[r*2+1]=this.contacts[r].JacTangB)}static collide(e,r,n){n.length=0;let i=K();const s=xr(e.getPosition()[2]),o=xr(r.getPosition()[2]),a=Zn(tn(),s),c=Zn(tn(),o),l=Pt(K(),e.getScale(),.5),u=Pt(K(),r.getScale(),.5),f=e.getPos2(),h=r.getPos2(),m=e.getRotationMatrix(),d=r.getRotationMatrix(),p=vt(K(),h,f),b=_e(K(),p,a),y=_e(K(),p,c),x=X(Math.abs(b[0]),Math.abs(b[1])),C=X(Math.abs(y[0]),Math.abs(y[1])),g=ld(tn(),a,d),M=hi(Math.abs(g[0]),Math.abs(g[1]),Math.abs(g[2]),Math.abs(g[3])),E=Zn(tn(),M),B=vt(K(),x,Ot(K(),l,_e(K(),u,M))),P=vt(K(),C,Ot(K(),u,_e(K(),l,E)));if(B[0]>0||B[1]>0||P[0]>0||P[1]>0)return 0;let S,G;S=1,G=B[0],b[0]>0?i=X(m[0],m[1]):i=X(-m[0],-m[1]);const U=.95,j=.01;B[1]>U*G+j*l[1]&&(S=2,G=B[1],b[1]>0?i=X(m[2],m[3]):i=X(-m[2],-m[3])),P[0]>U*G+j*u[0]&&(S=3,G=P[0],y[0]>0?i=X(d[0],d[1]):i=X(-d[0],-d[1])),P[1]>U*G+j*u[1]&&(S=4,G=P[1],y[1]>0?i=X(d[2],d[3]):i=X(-d[2],-d[3]));let V,O;const A=[{cd:cr(),v:K()},{cd:cr(),v:K()}];let H,D,F,ee=0,se=0,re;switch(S){case 1:V=i,H=et(f,V)+l[0],O=X(m[2],m[3]),re=et(f,O),D=-re+l[1],F=re+l[1],ee=3,se=1,Kn(A,u,h,d,V);break;case 2:V=i,H=et(f,V)+l[1],O=X(m[0],m[1]),re=et(f,O),D=-re+l[0],F=re+l[0],ee=2,se=4,Kn(A,u,h,d,V);break;case 3:V=Pt(K(),i,-1),H=et(h,V)+u[0],O=X(d[2],d[3]),re=et(h,O),D=-re+u[1],F=re+u[1],ee=3,se=1,Kn(A,l,f,m,V);break;case 4:V=Pt(K(),i,-1),H=et(h,V)+u[1],O=X(d[0],d[1]),re=et(h,O),D=-re+u[0],F=re+u[0],ee=2,se=4,Kn(A,l,f,m,V);break}const Q=[{cd:cr(),v:K()},{cd:cr(),v:K()}],de=[{cd:cr(),v:K()},{cd:cr(),v:K()}];let Ie;if(Ie=ac(Q,A,Pt(K(),O,-1),D,ee),Ie<2||(Ie=ac(de,Q,O,F,se),Ie<2))return 0;n.push(oc(),oc());let Ce=0;for(let Me=0;Me<2;++Me){const we=et(V,de[Me].v)-H;if(we<=0){const xe=n[Ce];xe.n=Pt(K(),i,-1);const Ye=S===3||S===4,me=vt(K(),de[Me].v,Pt(K(),V,we));if(!Ye)xe.pA=_e(K(),vt(K(),me,f),a),xe.pB=_e(K(),vt(K(),de[Me].v,h),c),xe.details=mn(de[Me].cd);else{xe.pA=_e(K(),vt(K(),de[Me].v,f),a),xe.pB=_e(K(),vt(K(),me,h),c);let Kr=mn(de[Me].cd);v2(Kr),xe.details=Kr}if(xe.details.ID=Du(xe.details),++Ce,Ce===2)break}}return n.length=Ce,Ce}getContactRenders(){const e=[],r=xr(this.bodyA.getPosition()[2]),n=xr(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let o=0;o<this.numContacts;++o){const a=Ot(K(),i,_e(K(),this.contacts[o].pA,r));e.push({pos:a});const c=Ot(K(),s,_e(K(),this.contacts[o].pB,n));e.push({pos:c})}return e}getRows(){return this.contacts.length*2}}const Yn=1,Zr=1e9;class x2{dt=0;gravity=X(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=X(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(e){Math.abs(e-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${e}. This may cause instability.`),this.contactsToRender=[];for(let n=0;n<this.bodies.length;++n)for(let i=n+1;i<this.bodies.length;++i){const s=this.bodies[n],o=this.bodies[i],a=vt(K(),s.getPos2(),o.getPos2()),c=s.getRadius()+o.getRadius();if(Ad(a)<=c*c&&!s.isConstrainedTo(o)){let l=new _o(s,o);this.forces.push(l),s.forces.push(l),o.forces.push(l)}}for(let n=0;n<this.forces.length;++n){const i=this.forces[n];if(!i.initialize()){this.forces.splice(n,1),--n;const o=i.bodyA.forces.indexOf(i);o!==-1&&i.bodyA.forces.splice(o,1);const a=i.bodyB.forces.indexOf(i);a!==-1&&i.bodyB.forces.splice(a,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let o=0;o<i.getRows();++o){if(this.postStabilization){let a=i.penalty[o]*this.gamma;a<Yn&&(a=Yn),a>Zr&&(a=Zr),i.penalty[o]=a}else{i.lambda[o]=i.lambda[o]*this.alpha*this.gamma;let a=i.penalty[o]*this.gamma;a<Yn&&(a=Yn),a>Zr&&(a=Zr),i.penalty[o]=a}i.penalty[o]=Math.min(i.penalty[o],i.stiffness[o])}}for(let n=0;n<this.bodies.length;++n){const i=this.bodies[n];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(w(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=qt(ne(),i.getPosition(),kt(ne(),i.getVelocity(),this.dt)),i.getMass()!==0){let f=kt(ne(),w(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=qt(i.inertial,i.inertial,f)}let c=kt(ne(),Sr(ne(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);c<0&&(c=0),c>1&&(c=1),i.lastPosition=dd(i.getPosition());const l=kt(ne(),i.getVelocity(),this.dt),u=kt(ne(),w(this.gravity[0],this.gravity[1],0),c*this.dt*this.dt);i.setPosition(qt(ne(),i.getPosition(),qt(ne(),l,u)))}const r=this.iterations+(this.postStabilization?1:0);for(let n=0;n<r;++n){let i=this.alpha;this.postStabilization&&(i=n<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const o=Ls(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),a=ba(Yt(),o,1/(this.dt*this.dt)),c=Lr(ne(),Sr(ne(),s.getPosition(),s.inertial),a);for(const u of s.forces){u.computeConstraints(i),u.computeDerivatives(s);for(let f=0;f<u.getRows();++f){let h=u.stiffness[f]===1/0?u.lambda[f]:0,m=u.penalty[f]*u.C[f]+h;m<u.fmin[f]&&(m=u.fmin[f]),m>u.fmax[f]&&(m=u.fmax[f]);const d=Ls(ei(w(u.H[f][0],u.H[f][3],u.H[f][6])),0,0,0,ei(w(u.H[f][1],u.H[f][4],u.H[f][7])),0,0,0,ei(w(u.H[f][2],u.H[f][5],u.H[f][8])));ba(d,d,Math.abs(m)),qt(c,c,kt(ne(),u.J[f],m));const p=Cd(u.J[f],kt(ne(),u.J[f],u.penalty[f]));ga(a,a,p),ga(a,a,d)}}const l=Md(a,c);s.setPosition(Sr(ne(),s.getPosition(),l))}if(n<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let o=0;o<s.getRows();++o){let a=s.stiffness[o]===1/0?s.lambda[o]:0;s.lambda[o]=a+s.penalty[o]*s.C[o],s.lambda[o]<s.fmin[o]&&(s.lambda[o]=s.fmin[o]),s.lambda[o]>s.fmax[o]&&(s.lambda[o]=s.fmax[o]),Math.abs(s.lambda[o])>=s.fracture[o]&&s.disable(),s.lambda[o]>s.fmin[o]&&s.lambda[o]<s.fmax[o]&&(s.penalty[o]=Math.min(s.penalty[o]+this.beta*Math.abs(s.C[o]),Math.min(s.stiffness[o],Zr)))}}if(n==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const o=Sr(ne(),s.getPosition(),s.lastPosition);kt(o,o,1/this.dt),s.setVelocity(o)}}}}addRigidBox(e){this.bodies.indexOf(e)===-1&&this.bodies.push(e)}removeRigidBox(e){const r=this.bodies.indexOf(e);r!==-1&&this.bodies.splice(r,1)}}class B2{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(e){this.canvas=e,this.gameRenderer=new At(this.canvas,this),this.solver=new x2,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(e){this.logging&&console.log(`[GameManager] ${e}`)}logWarn(e){this.logging&&console.warn(`[GameManager] ${e}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const e=w(At.xWorldSize*.5,8,0),r=X(At.xWorldSize-20,10);this.addRigidBox(e,r,w(0,0,0),new Uint8Array([200,200,200,255]),!0);const n=1/60;let i=0;this.lastFrameTime=performance.now();const s=o=>{if(!this.running)return;const a=(o-this.lastFrameTime)/1e3;for(this.lastFrameTime=o,i+=a;i>=n;)this.solver.step(n),i-=n;for(let c=0;c<this.solver.bodies.length;++c){const l=this.solver.bodies[c],u=l.getPosition(),f=new Float32Array([u[0],u[1],u[2]]);this.gameRenderer.updateInstancePosition(l.id,f)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s),pr(1e3/a)};this.rafID=requestAnimationFrame(s)}addRigidBox(e=Ed(0,0,At.xWorldSize,At.yWorldSize),r=X(ue(2,10),ue(2,10)),n=w(0,0,0),i=wd(),s=!1){const o=new d2(r,i,s?0:1,1,e,n);o.id=this.gameRenderer.addInstanceBox(o),o.id!==-1?this.solver.addRigidBox(o):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",e=>{if(!this.canvas)return;const r=this.canvas.getBoundingClientRect(),n=e.clientX-r.left,i=e.clientY-r.top,s=n/this.canvas.width*At.xWorldSize,o=(1-i/this.canvas.height)*At.yWorldSize,a=w(s,o,ue(0,Math.PI*2));this.addRigidBox(a)})}}async function A2(t){const e=new B2(t);return await e.initialize(),e}const T2=`// ============================== //\r
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
}`,C2=`// ============================== //\r
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
}`,M2=`struct Uniforms {\r
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
}`,E2=`struct Uniforms {\r
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
}`;async function w2(t){const e=new R2;return await e.initialize(t),e}const cc=264,lc=128,S2=0,P2=20,I2=0,O2=1e3;let R2=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Pn(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){In(this.camera,278,500,-700),qr(this.camera,0,-.3),Rn(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const e=Ht();if(!e)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",e.appendChild(this.useRaytracingCheckBox),e.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((s,o)=>{const a=document.createElement("option");a.value=o.toString(),a.text=s,this.rayTracingModeSelect.appendChild(a)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),e.appendChild(document.createElement("br")),e.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=S2.toString(),this.intensitySlider.max=P2.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const n=document.createElement("label");n.htmlFor="intensitySlider",n.textContent=" Light Intensity",e.appendChild(document.createElement("br")),e.appendChild(this.intensitySlider),e.appendChild(n),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=I2.toString(),this.numBouncesSlider.max=O2.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const i=document.createElement("label");i.htmlFor="numBouncesSlider",i.textContent=" Number of Bounces",e.appendChild(document.createElement("br")),e.appendChild(this.numBouncesSlider),e.appendChild(i)}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Le(this.device,T2,C2,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Le(this.device,M2,E2,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const e=ov();this.additionalInfo=e.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:e.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,e.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:e.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,e.indexData),this.normalObjects.numIndices=e.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:e.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,e.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:e.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,e.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:e.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,e.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:cc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:e.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,e.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:e.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,e.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:e.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,e.colorData);var r=new Uint32Array(e.indexData.length);for(let n=0;n<e.indexData.length;n++)r[n]=e.indexData[n];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,r),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:e.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,e.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:lc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;Be(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Gn(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Be(this.camera,-1,0),this.keysPressed.has("arrowright")&&Be(this.camera,1,0),this.keysPressed.has("arrowup")&&Be(this.camera,0,1),this.keysPressed.has("arrowdown")&&Be(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(lc),r=new Float32Array(e),n=new Uint32Array(e);r.set(Dn(this.camera),0),r.set(this.camera.position,16),r.set(this.light.position,20),r.set(this.light.color,24),n[28]=this.rayTracingMode,r[29]=this.light.intensity,n[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new Float32Array(cc/4);let r=0;const n=wr();wl(n),e.set(n,r),r+=16,e.set(this.camera.viewMatrix,r),r+=16,e.set(this.camera.projectionMatrix,r),r+=16,e.set(this.light.position,r),r+=4,e.set(this.light.color,r),r+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){const e=performance.now()*.001,r=200,n=250,i=276,s=278.5,o=450;if(this.light.position[0]=i+r*Math.cos(e),this.light.position[1]=o,this.light.position[2]=s+n*Math.sin(e),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const a=this.additionalInfo.cubeCenter,l=Pl(0,e,0),u=this.additionalInfo.cubeVertexStart,f=this.additionalInfo.cubeVertexCount,h=this.additionalInfo.cubeVertexInfo,m=new Float32Array(f*3),d=this.additionalInfo.cubeNormalsInfo,p=new Float32Array(f*3);for(let b=0;b<f;b++){const y=b*3,x=h[y]-a[0],C=h[y+1]-a[1],g=h[y+2]-a[2];m[y]=l[0]*x+l[1]*C+l[2]*g+a[0],m[y+1]=l[3]*x+l[4]*C+l[5]*g+a[1],m[y+2]=l[6]*x+l[7]*C+l[8]*g+a[2];const M=d[y],E=d[y+1],B=d[y+2];p[y]=l[0]*M+l[1]*E+l[2]*B,p[y+1]=l[3]*M+l[4]*E+l[5]*B,p[y+2]=l[6]*M+l[7]*E+l[8]*B}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,u*3*4,m),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,u*3*4,p)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,u*3*4,m),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,u*3*4,p))}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const o=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},l={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},u=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=u.beginRenderPass(l);this.useRaytracing?(f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.draw(6)):(f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup),f.setVertexBuffer(0,this.normalObjects.positionBuffer),f.setVertexBuffer(1,this.normalObjects.normalBuffer),f.setVertexBuffer(2,this.normalObjects.uvBuffer),f.setVertexBuffer(3,this.normalObjects.colorBuffer),f.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),f.drawIndexed(this.normalObjects.numIndices)),f.end(),this.timestampQuerySet!=null&&(u.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&u.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=u.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d,pr(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),On(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),gr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const G2=`struct Uniforms {\r
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
}`,D2=`struct Uniforms {\r
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
}`,uc=264;async function _2(t){const e=new U2;return await e.initialize(t),e}class U2{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mr();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Pn(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,In(this.camera,300,200,300),qr(this.camera,9*Math.PI/12,-Math.PI/6),Rn(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=Le(this.device,G2,D2,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}initializeUtils(){const e=Ht();if(!e)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",e.appendChild(this.wireFrameCheckbox),e.appendChild(this.wireFrameLabel),e.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(n=>{const i=document.createElement("option");i.value=n,i.text=n.charAt(0).toUpperCase()+n.slice(1),this.cullModeSelect.appendChild(i)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),e.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",e.appendChild(document.createElement("br")),e.appendChild(this.useSortingCheckbox),e.appendChild(this.useSortingLabel)}initializeScene(){const e=Ts({translation:w(0,0,-100),rotation:w(0,0,0),scale:w(200,200,1)},[.8,.8,.7]);e.additionalInfo={order:0,numVertices:e.vertexData.length/3},this.facesTopologyInformation.push(e);const r=Ts({translation:w(-100,0,0),rotation:w(0,-Math.PI/2,0),scale:w(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:1,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const n=Ts({translation:w(0,-100,0),rotation:w(Math.PI/2,0,0),scale:w(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:2,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const i=25,s=32;let o=3,a=0;const c=-100+i;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++){const d=[h*i*2,c,m*i*2],p=Cs(d,i,[Math.random(),Math.random(),Math.random()],s,s);p.additionalInfo={order:o++,numVertices:p.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(p),this.currentSphereOrders.push(p.additionalInfo.id)}const l=c+i*Math.sqrt(2);for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){const d=[(h-.5)*i*2,l,(m-.5)*i*2],p=Cs(d,i,[Math.random(),Math.random(),Math.random()],s,s);p.additionalInfo={order:o++,numVertices:p.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(p),this.currentSphereOrders.push(p.additionalInfo.id)}const u=[0,l+i*Math.sqrt(2),0],f=Cs(u,i,[Math.random(),Math.random(),Math.random()],s,s);f.additionalInfo={order:o++,numVertices:f.vertexData.length/3,id:a++},this.spheresTopologyInformation.push(f),this.currentSphereOrders.push(f.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const e=this.device.queue;this.initializeScene();const r=[],n=[],i=[],s=[],o=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const p=this.facesTopologyInformation[d];p.additionalInfo&&(r.push(p.vertexData),n.push(p.indexData),i.push(p.normalData),s.push(p.colorData),o.push(p.uvData))}const a=this.currentSphereOrders.slice();for(let d=a.length-1;d>0;d--){const p=Math.floor(Math.random()*(d+1));[a[d],a[p]]=[a[p],a[d]]}for(let d=0;d<this.spheresTopologyInformation.length;d++){const p=this.spheresTopologyInformation[a[d]];p.additionalInfo&&(r.push(p.vertexData),n.push(p.indexData),i.push(p.normalData),s.push(p.colorData),o.push(p.uvData))}const c=r.map(d=>d.length/3),l=zt(r),u=ya(n,c),f=zt(i),h=zt(s),m=zt(o);this.totalIndices=u.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:uc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:l.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.vertexBuffer,0,l),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.normalBuffer,0,f),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:h.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.colorBuffer,0,h),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:m.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.uvBuffer,0,m),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:u.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.indexBuffer,0,u),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;Be(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&(Gn(this.camera,-n,e,r),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&Be(this.camera,-1,0),this.keysPressed.has("arrowright")&&Be(this.camera,1,0),this.keysPressed.has("arrowup")&&Be(this.camera,0,1),this.keysPressed.has("arrowdown")&&Be(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const e=new ArrayBuffer(uc),r=new Float32Array(e),n=wr();wl(n),r.set(n,0),r.set(this.camera.viewMatrix,16),r.set(this.camera.projectionMatrix,32),r.set(this.light.position,48),r.set(this.light.color,52),r[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,e)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const e=this.camera.position,r=[];for(let d=0;d<this.spheresTopologyInformation.length;d++){const b=this.spheresTopologyInformation[d].transform.translation,y=b[0]-e[0],x=b[1]-e[1],C=b[2]-e[2],g=Math.sqrt(y*y+x*x+C*C),M=this.spheresTopologyInformation[d].additionalInfo.id;r.push({id:M,distance:g})}r.sort((d,p)=>p.distance-d.distance),this.currentSphereOrders=r.map(d=>d.id);const n=[],i=[],s=[],o=[],a=[];for(let d=0;d<this.facesTopologyInformation.length;d++){const p=this.facesTopologyInformation[d];p.additionalInfo&&(n.push(p.vertexData),i.push(p.indexData),s.push(p.normalData),o.push(p.colorData),a.push(p.uvData))}for(let d=0;d<this.currentSphereOrders.length;d++){const p=this.currentSphereOrders[d],b=this.spheresTopologyInformation.find(y=>y.additionalInfo.id===p);b&&(n.push(b.vertexData),i.push(b.indexData),s.push(b.normalData),o.push(b.colorData),a.push(b.uvData))}const c=n.map(d=>d.length/3),l=zt(n),u=ya(i,c),f=zt(s),h=zt(o),m=zt(a);this.device.queue.writeBuffer(this.vertexBuffer,0,l),this.device.queue.writeBuffer(this.indexBuffer,0,u),this.device.queue.writeBuffer(this.normalBuffer,0,f),this.device.queue.writeBuffer(this.colorBuffer,0,h),this.device.queue.writeBuffer(this.uvBuffer,0,m)}startMainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const o=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const a=this.context.getCurrentTexture().createView(),c={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},l={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},u=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=u.beginRenderPass(l);f.setPipeline(this.renderPipeline),f.setBindGroup(0,this.bindGroup),f.setVertexBuffer(0,this.vertexBuffer),f.setVertexBuffer(1,this.normalBuffer),f.setVertexBuffer(2,this.uvBuffer),f.setVertexBuffer(3,this.colorBuffer),f.setIndexBuffer(this.indexBuffer,"uint16"),f.drawIndexed(this.totalIndices,1,0,0,0),f.end(),this.timestampQuerySet!=null&&(u.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&u.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=u.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d,pr(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),On(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),gr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const F2=`// ============================== //\r
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
}`,L2=`// ============================== //\r
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
}`,N2=`struct SpotLight\r
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
}`,j2=`struct Material {\r
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
}`;var ie=(t=>(t[t.Albedo=0]="Albedo",t[t.Metalness=1]="Metalness",t[t.Roughness=2]="Roughness",t[t.Normal=3]="Normal",t))(ie||{});function Uo(t){return new Promise((e,r)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=i=>r(i),n.src=t})}function Fo(t,e,r="texture"){if(e.width<=0||e.height<=0)return console.warn(`Image has invalid dimensions (${e.width}x${e.height}). Using placeholder texture instead.`),Fe(t);const n=t.createTexture({label:r,size:{width:e.width,height:e.height,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return t.queue.copyExternalImageToTexture({source:e},{texture:n},[e.width,e.height]),n}function Lo(t,e,r){const n=document.createElement("canvas");n.width=e,n.height=r;const i=n.getContext("2d");return i?(i.drawImage(t,0,0,e,r),n):(console.error("Failed to get 2D context for image resizing."),n)}function Fe(t,e=256,r=32){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),s=e/r;for(let a=0;a<r;a++)for(let c=0;c<r;c++)i.fillStyle=(c+a)%2===0?"#FF00FF":"#000000",i.fillRect(c*s,a*s,s,s);const o=t.createTexture({label:"placeholder-texture",size:[e,e],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return t.queue.copyExternalImageToTexture({source:n},{texture:o},[e,e]),o}function Wr(t=256,e=32){const r=document.createElement("canvas");r.width=t,r.height=t;const n=r.getContext("2d"),i=t/e;for(let s=0;s<e;s++)for(let o=0;o<e;o++)n.fillStyle=(o+s)%2===0?"#FF00FF":"#000000",n.fillRect(o*i,s*i,i,i);return r}const V2="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg";async function H2(t){const e=new k2;return await e.initialize(t),e}const fc=304,hc=288;let k2=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Pn(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;sphereResolution=8;spheresInfo;activeContextMenu=null;constructor(){In(this.camera,278,500,-700),qr(this.camera,0,-.3),Rn(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={position:w(500,500,0),intensity:1e3,direction:w(-.5,-.9,1),coneAngle:Math.PI/6,color:w(.85,.1,.1),enabled:!0};this.lights.push(e);const r={position:w(50,500,0),intensity:1e3,direction:w(.5,-.9,1),coneAngle:Math.PI/6,color:w(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:w(275,255,0),intensity:1500,direction:w(0,0,1),coneAngle:Math.PI/6,color:w(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const e=Ht();e&&(Xt("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),_t("Sphere Resolution",this.sphereResolution,8,64,1,e,r=>{this.sphereResolution=r,this.startRendering()}),this.lights.forEach((r,n)=>{const i=s=>{s.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const o={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Rl(o,this.lights[n],`Edit Light ${n+1}`,a=>{this.lights[n]=a},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Tn(`Edit Light ${n+1}`,e,i)}),e.appendChild(document.createElement("br")),_t("Constant (ac)",this.a_c,0,2,.01,e,r=>{this.a_c=r}),e.appendChild(document.createElement("br")),_t("Linear (al)",this.a_l,0,.5,.001,e,r=>{this.a_l=r}),e.appendChild(document.createElement("br")),_t("Quadratic (aq)",this.a_q,0,.1,1e-4,e,r=>{this.a_q=r}))}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Le(this.device,F2,L2,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Le(this.device,N2,j2,"Normal Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}})),this.timestampQuerySet=Sn(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}initializeBuffers(){if(this.device===null)return;const e=Fe(this.device),r=this.spheresInfo?.sphereMaterials||[],n=av(r,this.sphereResolution);this.normalObjects.sceneInformation=n,this.spheresInfo=n.additionalInfo;const i=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let B=0;B<i;B++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+B,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[B],0,n.meshes[B].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+B,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[B],0,n.meshes[B].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+B,size:dr*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const P=n.meshes[B].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[B],0,P),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+B,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[B]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[B].Material.albedoGPUTexture?n.meshes[B].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[B].Material.metalnessGPUTexture?n.meshes[B].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[B].Material.roughnessGPUTexture?n.meshes[B].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[B].Material.normalGPUTexture?n.meshes[B].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[B]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[B]}}]}));const S=n.meshes[B].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+B,size:S.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[B],0,S);const G=n.meshes[B].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+B,size:G.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[B],0,G);const U=n.meshes[B].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+B,size:U.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[B],0,U);const j=n.meshes[B].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+B,size:j.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[B],0,j)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:fc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=[],o=[],a=[],c=[],l=[];let u=0;for(let B=0;B<i;B++){let P=n.meshes[B];s.push(...P.getTransformedVertexData()),o.push(...P.getTransformedNormalData()),a.push(...P.getUVData());for(let S of P.getIndexData32())c.push(S+u);u+=P.getNumVertices();for(let S=0;S<P.getNumTriangles();S++)l.push(B)}const f=new Float32Array(s),h=new Float32Array(o),m=new Float32Array(a),d=new Uint32Array(c),p=new Uint32Array(l);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:hc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:f.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,f),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,h),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:m.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,m),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,d),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:p.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,p),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const b=n.meshes.map(B=>B.Material),y=mo(b);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,y);const x=4,C=3,g=256,M=256;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[g,M,x*C],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const E=Wr(256,32);for(let B=0;B<C;B++){const P=this.spheresInfo?.sphereMaterials[B].albedoImage?this.spheresInfo.sphereMaterials[B].albedoImage:E,S=this.spheresInfo?.sphereMaterials[B].metalnessImage?this.spheresInfo.sphereMaterials[B].metalnessImage:E,G=this.spheresInfo?.sphereMaterials[B].roughnessImage?this.spheresInfo.sphereMaterials[B].roughnessImage:E,U=this.spheresInfo?.sphereMaterials[B].normalImage?this.spheresInfo.sphereMaterials[B].normalImage:E;this.device.queue.copyExternalImageToTexture({source:P},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*x]},[g,M]),this.device.queue.copyExternalImageToTexture({source:S},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*x+1]},[g,M]),this.device.queue.copyExternalImageToTexture({source:G},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*x+2]},[g,M]),this.device.queue.copyExternalImageToTexture({source:U},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*x+3]},[g,M])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnSpheres(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;Be(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Gn(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Be(this.camera,-1,0),this.keysPressed.has("arrowright")&&Be(this.camera,1,0),this.keysPressed.has("arrowup")&&Be(this.camera,0,1),this.keysPressed.has("arrowdown")&&Be(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],ie.Albedo,V2),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],ie.Albedo,"textures/herringbone_brick_03_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],ie.Albedo,"textures/oak_veneer_01_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],ie.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],ie.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],ie.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],ie.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],ie.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],ie.Roughness,"textures/roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(hc),r=new Float32Array(e),n=new Uint32Array(e);r.set(Dn(this.camera),0),r.set(this.camera.position,16),n[19]=0,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],o=24+i*12;r.set(s.position,o),r[o+3]=s.intensity,r.set(s.direction,o+4),r[o+7]=s.coneAngle,r.set(s.color,o+8),r[o+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new ArrayBuffer(fc),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const i=this.lights[n],s=40+n*12;r.set(i.position,s),r[s+3]=i.intensity,r.set(i.direction,s+4),r[s+7]=i.coneAngle,r.set(i.color,s+8),r[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const o=performance.now();this.handleInput(),this.updateUniforms();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},l={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},u=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=u.beginRenderPass(l);if(this.useRaytracing)f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.setBindGroup(1,this.rayTracerObjects.materialBindGroup),f.draw(6);else{f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.sceneInformation.meshes.length;d++)f.setBindGroup(1,this.normalObjects.materialBindGroups[d]),f.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),f.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),f.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),f.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),f.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0)}f.end(),this.timestampQuerySet!=null&&(u.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&u.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=u.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d,pr(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),On(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),gr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(e,r){if(e<0||e>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const n=r.name,i=this.normalObjects.sceneInformation.meshes.findIndex(l=>l.Material.name===n)||-1;if(i===-1)return;this.spheresInfo.sphereMaterials[e]=r,this.normalObjects.sceneInformation.meshes[i].Material=r;const s=this.spheresInfo.sphereMaterialIndices[e],o=Gi(r);let a=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(a,0,o);const c=s*dr*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,c,o)}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(o=>o.Material.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():Fe(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():Fe(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():Fe(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():Fe(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=i;var s=e.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||Wr();this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+o]},[256,256])}}rayCastOnSpheres(e,r){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const n=this.spheresInfo.sphereTransforms,i=this.canvas.getBoundingClientRect(),s=e-i.left,o=r-i.top,a=this.canvas.width/i.width,c=this.canvas.height/i.height,l=2*s*a/this.canvas.width-1,u=1-2*o*c/this.canvas.height,f=bo(this.camera,l,u);let h=-1,m=Number.POSITIVE_INFINITY;for(let d=0;d<n.length;d++){const p=n[d],b=p.translation,y=p.scale[0],x=mm(f,b,y);x<=0||x<m&&(m=x,h=d)}return h}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.spheresInfo?.sphereMaterials?.[e];if(!i)return;this.activeContextMenu=po({x:r,y:n},i,o=>{this.changeSphereMaterial(e,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e)return;Uo(n).then(s=>{const o=Lo(s,256,256),a=Fo(this.device,o);switch(r){case ie.Albedo:e.albedoTexture=o,e.albedoGPUTexture=a;break;case ie.Metalness:e.metalnessTexture=o,e.metalnessGPUTexture=a;break;case ie.Roughness:e.roughnessTexture=o,e.roughnessGPUTexture=a;break;case ie.Normal:e.normalTexture=o,e.normalGPUTexture=a;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ie[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const z2=`// ============================== //\r
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
}`,J2=`// ============================== //\r
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
    numBounces: u32,\r
    pad1: u32,\r
    pad2: u32,\r
    pad3: u32,\r
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
    numBvhNodes: u32,\r
    _pad4: u32,\r
    _pad5: u32,\r
    _pad6: u32,\r
\r
}; // Total: 64 + 4*4 + 4*4 = 96 bytes\r
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
    var index = inst.bvhRootIndex;\r
    let endIndex = inst.bvhRootIndex + inst.numBvhNodes;\r
\r
    var hitAnything: bool = false;\r
    var numBoxQueries: u32 = 0u;\r
    var numTriangleQueries: u32 = 0u;\r
\r
    while (index < endIndex)\r
    {\r
        let node: BVHNode = bvhNodes[index];\r
\r
        if (!rayAABBIntersect(ray, invDir, node.minB, node.maxB, (*closestT)))\r
        {\r
            // Miss: for internal nodes jump to missLink (stored in leftOrFirst),\r
            // for leaves advance by 1 (leaf subtree size is always 1).\r
            if (node.count > 0u) { index++; } else { index = node.leftOrFirst; }\r
            continue;\r
        }\r
\r
        numBoxQueries = numBoxQueries + 1u;\r
\r
        if (node.count > 0u) // leaf\r
        {\r
            for (var i = 0u; i < node.count; i++)\r
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
            index++;\r
        }\r
        else\r
        {\r
            index++;\r
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
\r
    for (var j: u32 = 0u; j < numInstances; j++)\r
    {\r
        let inst = meshInstances[j];\r
\r
        var localRay: Ray;\r
        localRay.origin = (inst.inverseWorldMatrix * vec4f(ray.origin, 1.0)).xyz;\r
        localRay.direction = (inst.inverseWorldMatrix * vec4f(ray.direction, 0.0)).xyz;\r
        let invDir = vec3f(1.0 / localRay.direction.x, 1.0 / localRay.direction.y, 1.0 / localRay.direction.z);\r
\r
        let endIndex = inst.bvhRootIndex + inst.numBvhNodes;\r
        var index = inst.bvhRootIndex;\r
        var depth: u32 = 0u;\r
\r
        var returnTarget: array<u32, 32>;\r
\r
        while (index < endIndex)\r
        {\r
            let node = bvhNodes[index];\r
            let isLeaf = node.count > 0u;\r
\r
            if (!rayAABBIntersect(localRay, invDir, node.minB, node.maxB, 1e30))\r
            {\r
                if (isLeaf) { index++; } else { index = node.leftOrFirst; }\r
                while (depth > 0u && index >= returnTarget[depth - 1u]) { depth--; }\r
                continue;\r
            }\r
\r
            if (depth == targetDepth || isLeaf)\r
            {\r
                hitCount += 1u;\r
                if (isLeaf) { index++; } else { index = node.leftOrFirst; }\r
                while (depth > 0u && index >= returnTarget[depth - 1u]) { depth--; }\r
                continue;\r
            }\r
\r
            returnTarget[depth] = node.leftOrFirst;\r
            depth++;\r
            index++;\r
        }\r
    }\r
\r
    if (hitCount == 0u) { return vec3f(0.0); }\r
\r
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
    var closestT: f32 = maxDist;\r
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
fn reflectRay(direction: vec3f, normal: vec3f) -> vec3f\r
{\r
    return direction - 2.0 * dot(direction, normal) * normal;\r
}\r
\r
// ============================== //\r
fn getMaterialProperties(material: Material, uv: vec2f) -> vec3f\r
{\r
    var roughness = material.roughness;\r
    if (material.usePerlinRoughness > 0.5)\r
    {\r
        let perlinRoughness = fbmPerlin2D(uv * 5.0, material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        roughness = clamp(perlinRoughness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useRoughnessTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        roughness = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 2, 2.0).g;\r
    }\r
    roughness = max(roughness, 0.001);\r
\r
    var metalness = material.metalness;\r
    if (material.usePerlinMetalness > 0.5)\r
    {\r
        let perlinMetalness = fbmPerlin2D(uv * 5.0 + vec2f(5.2, 1.3), material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        metalness = clamp(perlinMetalness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useMetalnessTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        metalness = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 1, 2.0).r;\r
    }\r
\r
    return vec3f(metalness, roughness, 0.0);\r
}\r
\r
// ============================== //\r
fn rayTraceWithBounces(initialRay: Ray, maxBounces: u32) -> vec3f\r
{\r
    var currentRay = initialRay;\r
    let reflectanceEpsilon: f32 = 0.01;\r
    let maxDistance: f32 = 2000.0;\r
\r
    // 1. Primary ray\r
    var hit: Hit;\r
    if (!rayTraceOnce(currentRay, &hit, maxDistance, false))\r
    {\r
        return vec3f(0.0, 0.0, 0.0); // No hit, return black\r
    }\r
\r
    // 2. In case we hit something\r
    var primaryHit: Hit = hit;\r
    let primaryHitPos = getHitPosition(currentRay, primaryHit.distance);\r
    let material = getMaterial(primaryHit.instanceIndex);\r
\r
    let matProps = getMaterialProperties(material, primaryHit.uvAtHit);\r
    let metalness = matProps.x;\r
    let roughness = matProps.y;\r
\r
    // TODO: better reflectance model?\r
    let reflectance = metalness * (1.0 - roughness * 0.5);\r
    if (reflectance < reflectanceEpsilon)\r
    {\r
        return computeMicrofacetBRDF(primaryHitPos, primaryHit.normalAtHit, material, primaryHit.uvAtHit);\r
    }\r
\r
    var primaryShadedColor = vec3f(0.0, 0.0, 0.0);\r
    if (reflectance < 1.0)\r
    {\r
        primaryShadedColor = computeMicrofacetBRDF(primaryHitPos, primaryHit.normalAtHit, material, primaryHit.uvAtHit);\r
    }\r
\r
    // 3. Accumulate reflectancies\r
    var accumulatedReflectance: f32 = reflectance;\r
    var reflectedColor = vec3f(0.0, 0.0, 0.0);\r
\r
    let reflectedDir = reflectRay(currentRay.direction, primaryHit.normalAtHit);\r
    currentRay.origin = primaryHitPos + primaryHit.normalAtHit * 0.001; // EPSILON for avoidance of self intersection\r
    currentRay.direction = reflectedDir;\r
\r
    for (var bounce: u32 = 0u; bounce < maxBounces; bounce = bounce + 1u)\r
    {\r
        var bounceHit: Hit;\r
        if (!rayTraceOnce(currentRay, &bounceHit, maxDistance, false))\r
        {\r
            break;\r
        }\r
\r
        let bounceHitPos = getHitPosition(currentRay, bounceHit.distance);\r
        let bounceHitNormal = bounceHit.normalAtHit;\r
        let bounceMaterial = getMaterial(bounceHit.instanceIndex);\r
\r
        let bounceMatProps = getMaterialProperties(bounceMaterial, bounceHit.uvAtHit);\r
        let bounceMetalness = bounceMatProps.x;\r
        let bounceRoughness = bounceMatProps.y;\r
        let bounceReflectance = bounceMetalness * (1.0 - bounceRoughness * 0.5);\r
\r
        let distanceAttenuation = 1.0 / (1.0 + bounceHit.distance * 0.01);\r
\r
        var bounceShadedColor = vec3f(0.0, 0.0, 0.0);\r
        if (bounceReflectance < 1.0)\r
        {\r
            bounceShadedColor = computeMicrofacetBRDF(bounceHitPos, bounceHitNormal, bounceMaterial, bounceHit.uvAtHit);\r
        }\r
\r
        // (1 - bounceReflectance) for own albedo\r
        let colorContribution = (1.0 - bounceReflectance) * bounceShadedColor * distanceAttenuation;\r
        reflectedColor = reflectedColor + colorContribution * accumulatedReflectance;\r
        accumulatedReflectance = accumulatedReflectance * bounceReflectance;\r
\r
        if (accumulatedReflectance < reflectanceEpsilon)\r
        {\r
            break;\r
        }\r
\r
        let newReflectedDir = reflectRay(currentRay.direction, bounceHitNormal);\r
        currentRay.origin = bounceHitPos + bounceHitNormal * 0.001;\r
        currentRay.direction = newReflectedDir;\r
    }\r
\r
    let finalColor = (1.0 - reflectance) * primaryShadedColor + reflectedColor;\r
\r
    return finalColor;\r
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
        color = rayTraceWithBounces(ray, uniforms.numBounces);\r
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
}`,W2=`struct SpotLight\r
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
`,q2=`struct Material {\r
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
}`,K2=`struct SpotLight\r
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
}`,Y2=`struct VertexOutput {\r
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
}`;async function X2(t){const e=new Q2;return await e.initialize(t),e}const dc=304,mc=304,pc=96;let Q2=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Pn(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;meshesInfo;activeContextMenu=null;showBVH=!1;bvhDepth=1/0;rayTracerMode=0;numBounces=3;constructor(){In(this.camera,278,500,-700),qr(this.camera,0,-.3),Rn(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={position:w(500,500,0),intensity:5e3,direction:w(-.5,-.9,1),coneAngle:Math.PI/6,color:w(.85,.1,.1),enabled:!0};this.lights.push(e);const r={position:w(50,500,0),intensity:5e3,direction:w(.5,-.9,1),coneAngle:Math.PI/6,color:w(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:w(275,255,0),intensity:1e4,direction:w(0,0,1),coneAngle:Math.PI/3,color:w(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const e=Ht();e&&(Xt("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),_t("Number of Bounces",this.numBounces,0,20,1,e,r=>{this.numBounces=r}),e.appendChild(document.createElement("br")),this.lights.forEach((r,n)=>{const i=s=>{s.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const o={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Rl(o,this.lights[n],`Edit Light ${n+1}`,a=>{this.lights[n]=a},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Tn(`Edit Light ${n+1}`,e,i)}),e.appendChild(document.createElement("br")),Xt("Show BVH",this.showBVH,e,r=>{this.showBVH=r,this.rayTracerMode=r?1:0}),e.appendChild(document.createElement("br")),_t("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,e,r=>{this.bvhDepth=r===32?1/0:r,this.rebuildBVHBuffer()}))}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Le(this.device,z2,J2,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Le(this.device,W2,q2,"Normal Shader Module"),this.normalObjects.bvhShaderModule=Le(this.device,K2,Y2,"BVH Draw Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.normalObjects.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.normalObjects.bvhDrawPipelineLayout,vertex:{module:this.normalObjects.bvhShaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.bvhShaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=Sn(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}async initializeBuffers(){if(this.device===null)return;const e=Fe(this.device,1024,32),r=this.meshesInfo?.meshMaterials||[],n=await cv(r);this.normalObjects.sceneInformation=n,this.meshesInfo=n.additionalInfo;const i=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let A=0;A<i;A++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+A,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[A],0,n.meshes[A].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+A,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[A],0,n.meshes[A].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+A,size:dr*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const H=n.meshes[A].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[A],0,H),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+A,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[A]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[A].Material.albedoGPUTexture?n.meshes[A].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[A].Material.metalnessGPUTexture?n.meshes[A].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[A].Material.roughnessGPUTexture?n.meshes[A].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[A].Material.normalGPUTexture?n.meshes[A].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[A]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[A]}}]}));const D=n.meshes[A].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+A,size:D.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[A],0,D);const F=n.meshes[A].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+A,size:F.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[A],0,F);const ee=n.meshes[A].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+A,size:ee.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[A],0,ee);const se=n.meshes[A].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+A,size:se.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[A],0,se)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:dc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=this.getBVHGeometry(1/0);this.normalObjects.bvhLineGeometryBuffers=[];for(let A=0;A<s.length;A++)this.normalObjects.bvhLineGeometryBuffers[A]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${A}`,size:s[A].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[A],0,s[A]);const o=[],a=[],c=[],l=[],u=[],f=[];let h=0,m=0,d=0,p=0,b=0;for(let A=0;A<i;A++){let H=n.meshes[A];o.push(...H.getVertexData()),a.push(...H.getNormalData()),c.push(...H.getUVData());const D=H.getReorderedIndexData32();for(let de of D)l.push(de+m);const{data:F,numNodes:ee}=H.getFlattenedBVHData(b);f.push(F),h+=F.byteLength;const se=new ArrayBuffer(pc),re=new Float32Array(se),Q=new Uint32Array(se);re.set(H.GetFlatInverseWorldMatrix(),0),Q[16]=b,Q[17]=d,Q[18]=p,Q[19]=A,Q[20]=ee,u.push(...re),m+=H.getNumVertices(),d+=H.getNumTriangles(),p+=H.getNumVertices(),b+=ee}const y=new Float32Array(o),x=new Float32Array(a),C=new Float32Array(c),g=new Uint32Array(l),M=new Float32Array(u),E=new Uint8Array(h);let B=0;for(let A of f)E.set(new Uint8Array(A),B),B+=A.byteLength;this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:mc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,y),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:x.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,x),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:C.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,C),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:g.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,g),this.rayTracerObjects.bvhNodesStorageBuffer=this.device.createBuffer({label:"Ray Tracer BVH Nodes Storage Buffer",size:E.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.bvhNodesStorageBuffer,0,E),this.rayTracerObjects.meshInstancesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Mesh Instances Storage Buffer",size:M.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,0,M),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.bvhNodesStorageBuffer}},{binding:6,resource:{buffer:this.rayTracerObjects.meshInstancesStorageBuffer}}]});const P=n.meshes.map(A=>A.Material),S=mo(P);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:S.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,S);const G=4;var U=this.meshesInfo?.meshMaterials.filter(A=>A.textureIndex>=0).length||0;U===0&&(U=1);const j=1024,V=1024;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[j,V,G*U],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const O=Wr(1024,32);for(let A=0;A<U;A++){const H=this.meshesInfo?.meshMaterials[A].albedoImage?this.meshesInfo.meshMaterials[A].albedoImage:O,D=this.meshesInfo?.meshMaterials[A].metalnessImage?this.meshesInfo.meshMaterials[A].metalnessImage:O,F=this.meshesInfo?.meshMaterials[A].roughnessImage?this.meshesInfo.meshMaterials[A].roughnessImage:O,ee=this.meshesInfo?.meshMaterials[A].normalImage?this.meshesInfo.meshMaterials[A].normalImage:O;this.device.queue.copyExternalImageToTexture({source:H},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G]},[j,V]),this.device.queue.copyExternalImageToTexture({source:D},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G+1]},[j,V]),this.device.queue.copyExternalImageToTexture({source:F},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G+2]},[j,V]),this.device.queue.copyExternalImageToTexture({source:ee},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G+3]},[j,V])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnMeshes(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;Be(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Gn(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Be(this.camera,-1,0),this.keysPressed.has("arrowright")&&Be(this.camera,1,0),this.keysPressed.has("arrowup")&&Be(this.camera,0,1),this.keysPressed.has("arrowdown")&&Be(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers();const e=this.meshesInfo.meshMaterials[0];this.fetchTextureForMaterial(e,ie.Albedo,"meshes/dragon/textures/DefaultMaterial_baseColor.jpeg"),this.fetchTextureForMaterial(e,ie.Metalness,"meshes/dragon/textures/DefaultMaterial_metallicRoughness.png"),this.fetchTextureForMaterial(e,ie.Roughness,"meshes/dragon/textures/DefaultMaterial_metallicRoughness.png"),this.fetchTextureForMaterial(e,ie.Normal,"meshes/dragon/textures/DefaultMaterial_normal.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(mc),r=new Float32Array(e),n=new Uint32Array(e);r.set(Dn(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracerMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=this.bvhDepth,n[24]=this.numBounces,r[25]=0,r[26]=0,r[27]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],o=28+i*12;r.set(s.position,o),r[o+3]=s.intensity,r.set(s.direction,o+4),r[o+7]=s.coneAngle,r.set(s.color,o+8),r[o+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new ArrayBuffer(dc),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const i=this.lights[n],s=40+n*12;r.set(i.position,s),r[s+3]=i.intensity,r.set(i.direction,s+4),r[s+7]=i.coneAngle,r.set(i.color,s+8),r[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){if(5>=this.normalObjects.sceneInformation.meshes.length)return;const r=this.normalObjects.sceneInformation.meshes[5],n=Dt();Pr(n,0,.5,0),r.RotateMesh(n),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[5],0,r.GetFlatWorldMatrix()),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[5],0,r.GetFlatNormalMatrix());const i=r.GetFlatInverseWorldMatrix();this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,5*pc+0,i)}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const o=performance.now();this.handleInput(),this.updateUniforms(),this.animate();const a=this.context.getCurrentTexture().createView(),c=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},l={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},u=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=u.beginRenderPass(l);if(this.useRaytracing)f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.setBindGroup(1,this.rayTracerObjects.materialBindGroup),f.draw(6);else{f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.sceneInformation.meshes.length;d++)f.setBindGroup(1,this.normalObjects.materialBindGroups[d]),f.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),f.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),f.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),f.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),f.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0);if(this.showBVH){f.setPipeline(this.normalObjects.bvhDrawPipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.bvhLineGeometryBuffers.length;d++)f.setBindGroup(1,this.normalObjects.materialBindGroups[d]),f.setVertexBuffer(0,this.normalObjects.bvhLineGeometryBuffers[d]),f.draw(this.normalObjects.bvhLineCounts[d])}}f.end(),this.timestampQuerySet!=null&&(u.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&u.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const h=u.finish();this.device.queue.submit([h]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-o;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d,pr(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),On(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),gr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeMeshMaterial(e,r){if(e<0||e>=(this.meshesInfo?.meshIndices.length||0))return;const n=r.name,i=this.normalObjects.sceneInformation.meshes.findIndex(l=>l.Material.name===n)||-1;if(i===-1)return;this.meshesInfo.meshMaterials[e]=r,this.normalObjects.sceneInformation.meshes[i].Material=r;const s=this.meshesInfo.meshIndices[e],o=Gi(r);let a=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(a,0,o);const c=s*dr*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,c,o)}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(o=>o.Material.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():Fe(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():Fe(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():Fe(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():Fe(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=i;var s=e.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||Wr(1024,32);this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+o]},[1024,1024])}}getBVHGeometry(e){if(this.normalObjects.sceneInformation.meshes.length===0)return[];this.normalObjects.bvhLineCounts=[];const r=[];for(let n=0;n<this.normalObjects.sceneInformation.meshes.length;n++){const{vertexData:i,count:s}=this.normalObjects.sceneInformation.meshes[n].GetBVHGeometry(e);r.push(i),this.normalObjects.bvhLineCounts.push(s)}return r}rebuildBVHBuffer(){if(this.device===null)return;const e=this.getBVHGeometry(this.bvhDepth);for(let r=0;r<e.length;r++)this.normalObjects.bvhLineGeometryBuffers[r]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${r}`,size:e[r].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[r],0,e[r])}rayCastOnMeshes(e,r){if(this.canvas===null||this.camera===null||this.meshesInfo===null)return-1;const i=this.meshesInfo.meshIndices.map(p=>this.normalObjects.sceneInformation.meshes[p]),s=this.canvas.getBoundingClientRect(),o=e-s.left,a=r-s.top,c=this.canvas.width/s.width,l=this.canvas.height/s.height,u=2*o*c/this.canvas.width-1,f=1-2*a*l/this.canvas.height,h=bo(this.camera,u,f);let m=-1,d=Number.POSITIVE_INFINITY;for(let p=0;p<i.length;p++){const y=i[p].intersectMeshWithRay(h,this.bvhDepth);y<0||y<d&&(d=y,m=p)}return m}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.meshesInfo?.meshMaterials?.[e];if(!i)return;this.activeContextMenu=po({x:r,y:n},i,o=>{this.changeMeshMaterial(e,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e){console.error("Material is undefined when trying to fetch texture with name:",n,"and type:",ie[r]);return}Uo(n).then(s=>{const o=Lo(s,1024,1024),a=Fo(this.device,o);switch(r){case ie.Albedo:e.albedoTexture=o,e.albedoGPUTexture=a;break;case ie.Metalness:e.metalnessTexture=o,e.metalnessGPUTexture=a;break;case ie.Roughness:e.roughnessTexture=o,e.roughnessGPUTexture=a;break;case ie.Normal:e.normalTexture=o,e.normalGPUTexture=a;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ie[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const $2=`// ============================== //\r
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
}`,Z2=`// ============================== //\r
struct AreaLight\r
{\r
    center: vec3f,\r
    intensity: f32,\r
\r
    normalDirection: vec3f,\r
    width: f32,\r
\r
    color: vec3f,\r
    height: f32,\r
\r
    enabled: f32,\r
    _pad: f32,\r
    _pad2: f32,\r
    _pad3: f32,\r
}; // 4 * 4 = 64 bytes\r
\r
// ============================== //\r
struct Uniform\r
{\r
    pixelToRayMatrix: mat4x4<f32>, // 64 bytes\r
\r
    cameraPosition: vec3f, // 16\r
    mode: u32, \r
\r
    a_c: f32,   // 16\r
    a_l: f32,\r
    a_q: f32,\r
    bvhVisualizationDepth: f32,\r
\r
    ptDepth: u32, // 16\r
    frameSeed: u32,\r
    numSamples: u32,\r
    roulette: f32,\r
\r
    canvasDimensions: vec2f, // 16\r
    frameAccumulation: f32,  \r
    frameCount: u32,\r
\r
    light: AreaLight, // 64 bytes\r
}; // Total: 64 + 16 + 16 + 16 + 16 + 64 = 192 bytes\r
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
    numBvhNodes: u32,\r
    _pad4: u32,\r
    _pad5: u32,\r
    _pad6: u32,\r
\r
}; // Total: 64 + 4*4 + 4*4 = 96 bytes\r
\r
// ============================== //\r
struct VertexOutput \r
{\r
    @builtin(position) position: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
@group(0) @binding(0) var<uniform> uniforms: Uniform;\r
@group(0) @binding(1) var<storage, read> vertices: array<f32>;\r
@group(0) @binding(2) var<storage, read> normals: array<f32>;\r
@group(0) @binding(3) var<storage, read> uvs: array<f32>;\r
@group(0) @binding(4) var<storage, read> indices: array<u32>;\r
@group(0) @binding(5) var<storage, read> bvhNodes: array<BVHNode>;\r
@group(0) @binding(6) var<storage, read> meshInstances: array<MeshInstance>;\r
@group(0) @binding(7) var accumTexture: texture_2d<f32>;\r
\r
@group(1) @binding(0) var<storage, read> materials: array<f32>;\r
@group(1) @binding(1) var materialSampler: sampler;\r
@group(1) @binding(2) var textures: texture_2d_array<f32>;\r
\r
var<private> rngState: u32;\r
\r
// ============================== //\r
fn initRNG(pixel: vec2f, sampleIndex: u32) \r
{\r
    rngState = u32(pixel.x) * 1973u \r
             + u32(pixel.y) * 9277u \r
             + sampleIndex * 26699u \r
             + uniforms.frameSeed;\r
}\r
\r
// ============================== //\r
fn rand() -> f32 \r
{\r
    rngState = rngState * 747796405u + 2891336453u;\r
    let word = ((rngState >> ((rngState >> 28u) + 4u)) ^ rngState) * 277803737u;\r
    rngState = (word >> 22u) ^ word;\r
    return f32(rngState) / 4294967295.0;\r
}\r
\r
// ============================== //\r
// TODO: better sampling strategy, and pass seed in Uniform\r
fn sampleHemisphereUniform(normal: vec3f) -> vec3f \r
{\r
    let r1 = rand();\r
    let r2 = rand();\r
    let pi = 3.14159265359;\r
\r
    let phi = 2.0 * pi * r1;\r
    let cosTheta = r2;\r
    let sinTheta = sqrt(1.0 - cosTheta * cosTheta);\r
\r
    let localDir = vec3f(sinTheta * cos(phi), sinTheta * sin(phi), cosTheta);\r
\r
    var up = vec3f(0.0, 1.0, 0.0);\r
    if (abs(normal.y) > 0.999) {\r
        up = vec3f(1.0, 0.0, 0.0);\r
    }\r
    let tangent = normalize(cross(up, normal));\r
    let bitangent = cross(normal, tangent);\r
\r
    return normalize(tangent * localDir.x + bitangent * localDir.y + normal * localDir.z);\r
}\r
\r
// ============================== //\r
fn sampleUniformCosine(normal: vec3f) -> vec3f\r
{\r
    let a = rand();\r
    let b = rand();\r
    let pi = 3.14159265359;\r
\r
    let dist1 = cos(2.0 * pi * a) * sqrt(b);\r
    let dist2 = sin(2.0 * pi * a) * sqrt(b);\r
    let dist3 = sqrt(1.0 - b);\r
\r
    var up = vec3f(0.0, 1.0, 0.0);\r
    if (abs(normal.y) > 0.999) \r
    {\r
        up = vec3f(1.0, 0.0, 0.0);\r
    }\r
\r
    let tangent = normalize(cross(up, normal));\r
    let bitangent = cross(normal, tangent);\r
\r
    return normalize(tangent * dist1 + bitangent * dist2 + normal * dist3);\r
}\r
\r
// ============================== //\r
// In Crook Torrance GGX BRDF, if we sample on specular lobe,\r
// it is with regards to the roughness value.\r
fn sampleGGXHalfVector(normal: vec3f, alpha: f32) -> vec3f\r
{\r
    let r1 = rand();\r
    let r2 = rand();\r
    let pi = 3.14159265359;\r
    let alpha2 = alpha * alpha;\r
\r
    // inverse CDF\r
    let cosTheta = sqrt((1.0 - r1) / (1.0 + (alpha2 - 1.0) * r1));\r
    let sinTheta = sqrt(1.0 - cosTheta * cosTheta);\r
    let phi = 2.0 * pi * r2;\r
\r
    let localHalf = vec3f(sinTheta * cos(phi), sinTheta * sin(phi), cosTheta);\r
\r
    var up = vec3f(0.0, 1.0, 0.0);\r
    if (abs(normal.y) > 0.999) \r
    {\r
        up = vec3f(1.0, 0.0, 0.0);\r
    }\r
    let tangent = normalize(cross(up, normal));\r
    let bitangent = cross(normal, tangent);\r
\r
    return normalize(tangent * localHalf.x + bitangent * localHalf.y + normal * localHalf.z);\r
}\r
\r
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
    let materialIndex = meshInstance.matIndex;\r
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
    if (abs(det) < kEpsilon) \r
    {\r
        return false;\r
    }\r
\r
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
    if (t < kEpsilon)\r
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
    var index = inst.bvhRootIndex;\r
    let endIndex = inst.bvhRootIndex + inst.numBvhNodes;\r
\r
    var hitAnything: bool = false;\r
    var numBoxQueries: u32 = 0u;\r
    var numTriangleQueries: u32 = 0u;\r
\r
    while (index < endIndex)\r
    {\r
        let node: BVHNode = bvhNodes[index];\r
\r
        if (!rayAABBIntersect(ray, invDir, node.minB, node.maxB, (*closestT)))\r
        {\r
            // Miss: for internal nodes jump to missLink (stored in leftOrFirst),\r
            // for leaves advance by 1 (leaf subtree size is always 1).\r
            if (node.count > 0u) { index++; } else { index = node.leftOrFirst; }\r
            continue;\r
        }\r
\r
        numBoxQueries = numBoxQueries + 1u;\r
\r
        if (node.count > 0u)\r
        {\r
            for (var i = 0u; i < node.count; i++)\r
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
            index++;\r
        }\r
        else\r
        {\r
            index++;\r
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
\r
    for (var j: u32 = 0u; j < numInstances; j++)\r
    {\r
        let inst = meshInstances[j];\r
\r
        var localRay: Ray;\r
        localRay.origin = (inst.inverseWorldMatrix * vec4f(ray.origin, 1.0)).xyz;\r
        localRay.direction = (inst.inverseWorldMatrix * vec4f(ray.direction, 0.0)).xyz; \r
        let invDir = vec3f(1.0 / localRay.direction.x, 1.0 / localRay.direction.y, 1.0 / localRay.direction.z);\r
\r
        let endIndex = inst.bvhRootIndex + inst.numBvhNodes;\r
        var index = inst.bvhRootIndex;\r
        var depth: u32 = 0u;\r
\r
        var returnTarget: array<u32, 32>;\r
\r
        while (index < endIndex)\r
        {\r
            let node = bvhNodes[index];\r
            let isLeaf = node.count > 0u;\r
\r
            if (!rayAABBIntersect(localRay, invDir, node.minB, node.maxB, 1e30))\r
            {\r
                if (isLeaf) { index++; } else { index = node.leftOrFirst; }\r
                while (depth > 0u && index >= returnTarget[depth - 1u]) { depth--; }\r
                continue;\r
            }\r
\r
            if (depth == targetDepth || isLeaf)\r
            {\r
                hitCount += 1u;\r
                if (isLeaf) { index++; } else { index = node.leftOrFirst; }\r
                while (depth > 0u && index >= returnTarget[depth - 1u]) { depth--; }\r
                continue;\r
            }\r
\r
            returnTarget[depth] = node.leftOrFirst;\r
            depth++;\r
            index++;\r
        }\r
    }\r
\r
    if (hitCount == 0u) { return vec3f(0.0); }\r
\r
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
    var closestT: f32 = maxDist;\r
    var hitSomething: bool = false;\r
\r
    for (var j: u32 = 0u; j < numInstances; j = j + 1u)\r
    {\r
        let meshInstance = meshInstances[j];\r
\r
        var localRay: Ray;\r
        localRay.origin = (meshInstance.inverseWorldMatrix * vec4f(ray.origin, 1.0)).xyz;\r
        let rawDir = (meshInstance.inverseWorldMatrix * vec4f(ray.direction, 0.0)).xyz;\r
        let dirScale = length(rawDir);\r
        localRay.direction = rawDir / dirScale;\r
\r
        var closestTLocal = closestT * dirScale;\r
\r
        if (traverseBVH(localRay, meshInstance, &closestTLocal, hit, shadow, j))\r
        {\r
            hitSomething = true;\r
            closestT = closestTLocal / dirScale;\r
            if (shadow)\r
            {\r
                return true;\r
            }\r
        }\r
    }\r
\r
    if (hitSomething)\r
    {\r
        (*hit).distance = closestT;\r
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
fn reflectRay(direction: vec3f, normal: vec3f) -> vec3f\r
{\r
    return direction - 2.0 * dot(direction, normal) * normal;\r
}\r
\r
// ============================== //\r
fn getMaterialProperties(material: Material, uv: vec2f) -> vec3f\r
{\r
    var roughness = material.roughness;\r
    if (material.usePerlinRoughness > 0.5)\r
    {\r
        let perlinRoughness = fbmPerlin2D(uv * 5.0, material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        roughness = clamp(perlinRoughness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useRoughnessTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        roughness = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 2, 2.0).g;\r
    }\r
    roughness = max(roughness, 0.001);\r
\r
    var metalness = material.metalness;\r
    if (material.usePerlinMetalness > 0.5)\r
    {\r
        let perlinMetalness = fbmPerlin2D(uv * 5.0 + vec2f(5.2, 1.3), material.perlinFreq, 0.5, 4, 2.0, 0.5);\r
        metalness = clamp(perlinMetalness * 0.5 + 0.5, 0.0, 1.0);\r
    }\r
    if (material.useMetalnessTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        metalness = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4 + 1, 2.0).r;\r
    }\r
\r
    return vec3f(metalness, roughness, 0.0);\r
}\r
\r
// ============================== //\r
fn lambertBRDFPathTrace(initialRay: Ray, maxDepth: u32) -> vec3f\r
{\r
    var currentRay = initialRay;\r
    var accumulation = vec3f(0.0, 0.0, 0.0);\r
    var throughput = vec3f(1.0, 1.0, 1.0);\r
    let maxDistance = 1e30;\r
    let pi = 3.14159265359;\r
\r
    for (var depth = 0u; depth < maxDepth; depth++)\r
    {\r
        var hit: Hit;\r
        if (!rayTraceOnce(currentRay, &hit, maxDistance, false))\r
        {\r
            break;\r
        }\r
\r
        let hitPos = getHitPosition(currentRay, hit.distance);\r
        let normal = hit.normalAtHit;\r
        let mat = getMaterial(hit.instanceIndex);\r
\r
        // ---- DIRECT LIGHTING ----\r
        let direct = nextEventEstimation(hitPos, normal, mat, hit.uvAtHit);\r
        accumulation += throughput * direct;\r
\r
        // ---- INDIRECT BOUNCE ----\r
        var albedo = mat.albedo;\r
        if (mat.useAlbedoTexture > 0.5 && mat.textureIndex >= 0.0) \r
        {\r
            albedo = textureSampleLevel(textures, materialSampler, hit.uvAtHit, i32(mat.textureIndex) * 4, 2.0).rgb;\r
        }\r
\r
        var newDir = sampleUniformCosine(normal);\r
        throughput *= albedo;\r
\r
        // RUSSIAN ROULETTE\r
        if (depth >= 2u && uniforms.roulette > 0.5)\r
        {\r
            let pSurvive = clamp(max(throughput.r, max(throughput.g, throughput.b)), 0.05, 0.95);\r
            if (rand() > pSurvive)\r
            {\r
                break;\r
            }\r
            throughput /= pSurvive;\r
        }\r
\r
        // Launch indirect ray\r
        currentRay.origin = hitPos + normal * 0.001;\r
        currentRay.direction = newDir;\r
    }\r
\r
    return accumulation;\r
}\r
\r
// ============================== //\r
// A.K.A indirect global illumination\r
// MEMO FOR ME:\r
// "How much light arrives from everywhere else in the scene from indirect bounces?"\r
// 1) Based on material properties, decide if next bounce is specular or diffuse\r
// 2) Sample direction (example mirror follows snell's law, while diffuse is cosine weighted)\r
// 3) Evaluate full BRDF there\r
// 4) Divide by the PDF of the sampling strategy\r
fn CrookTorranceBRDFPathTrace(initialRay: Ray, maxDepth: u32) -> vec3f\r
{\r
    var currentRay = initialRay;\r
    var accumulation = vec3f(0.0, 0.0, 0.0);\r
    var throughput = vec3f(1.0, 1.0, 1.0);\r
    let maxDistance = 1e30;\r
    let pi = 3.14159265359;\r
\r
    for (var depth = 0u; depth < maxDepth; depth++)\r
    {\r
        var hit: Hit;\r
        if (!rayTraceOnce(currentRay, &hit, maxDistance, false))\r
        {\r
            break;\r
        }   \r
\r
        let hitPos = getHitPosition(currentRay, hit.distance);\r
        let normal = hit.normalAtHit;\r
        let mat = getMaterial(hit.instanceIndex);\r
\r
        let direct = nextEventEstimation(hitPos, normal, mat, hit.uvAtHit);\r
        accumulation += throughput * direct;\r
\r
        // -- INDIRECT BOUNCE (but with MIS) --\r
        var albedo = mat.albedo;\r
        if (mat.useAlbedoTexture > 0.5 && mat.textureIndex >= 0.0) \r
        {\r
            albedo = textureSampleLevel(textures, materialSampler, hit.uvAtHit, i32(mat.textureIndex) * 4, 2.0).rgb;\r
        }\r
\r
        let matProps = getMaterialProperties(mat, hit.uvAtHit);\r
        let metalness = matProps.x;\r
        let roughness = matProps.y;\r
        let alphap = roughness;\r
        let EPSILON = 0.0001;\r
\r
        let wo = normalize(-currentRay.direction);\r
        let n = normalize(normal);\r
        let NdotV = max(dot(n, wo), EPSILON);\r
\r
        // Based on material properties, decide if next bounce is specular or diffuse\r
        // Metals: F0 = albedo, kd = 0, all specular\r
        // Dielectrics: F0 = 0.04, kd = 0.96, mostly diffuse\r
        let F0 = mix(vec3(0.04), albedo, metalness);\r
        let specularWeight = max(max(F0.r, F0.g), F0.b);\r
        let probabilitySpecular = clamp(specularWeight + metalness * (1.0 - specularWeight), 0.1, 0.9);\r
        let probabilityDiffuse = 1.0 - probabilitySpecular;\r
\r
        var wi: vec3f;\r
        var wh: vec3f;\r
\r
        let decision = rand();\r
        if (decision < probabilitySpecular) // Spec choice\r
        {\r
            wh = sampleGGXHalfVector(n, alphap);\r
            wi = reflectRay(-wo, wh);\r
            if (dot(wi, n) <= 0.0)\r
            {\r
                break;\r
            }\r
        }\r
        else\r
        {\r
            wi = sampleUniformCosine(n);\r
            wh = normalize(wi + wo);\r
        }\r
\r
        // Full BRDF\r
        let NdotL = max(dot(n, wi), EPSILON);\r
        let NdotH = max(dot(n, wh), EPSILON);\r
        let VdotH = max(dot(wo, wh), EPSILON);\r
\r
        let F = F0 + (1.0 - F0) * pow(1.0 - VdotH, 5.0);\r
\r
        let lambert = albedo / pi;\r
        let kd = (1.0 - F) * (1.0 - metalness);\r
        let fd = kd * lambert; //\r
\r
        let D = (alphap * alphap) / (pi * pow((NdotH * NdotH) * (alphap * alphap - 1.0) + 1.0, 2.0));\r
\r
        let K = (alphap) * sqrt(2.0 / pi);\r
        let G_schlick_wo = NdotV / (NdotV * (1.0 - K) + K);\r
        let G_schlick_wi = NdotL / (NdotL * (1.0 - K) + K);\r
        let G = G_schlick_wo * G_schlick_wi;\r
\r
        let fs = (D * F * G) / (4.0 * NdotL * NdotV + EPSILON);\r
\r
        let f = fd + fs;\r
\r
        // BALANCE MIS\r
        let pdfSpecular = D * NdotH / (4.0 * VdotH + EPSILON);\r
        let pdfDiffuse = NdotL / pi;\r
        let PDF = probabilitySpecular * pdfSpecular + probabilityDiffuse * pdfDiffuse;\r
\r
        if (PDF < EPSILON)\r
        {\r
            break;\r
        }\r
        throughput *= f * NdotL / PDF;\r
\r
        if (depth >= 2u && uniforms.roulette > 0.5)\r
        {\r
            let pSurvive = clamp(max(throughput.r, max(throughput.g, throughput.b)), 0.05, 0.95);\r
            if (rand() > pSurvive)\r
            {\r
                break;\r
            }\r
            throughput /= pSurvive;\r
        }\r
\r
        currentRay.origin = hitPos + n * 0.001;\r
        currentRay.direction = wi;\r
    }\r
\r
    return accumulation;\r
}\r
\r
// ============================== //\r
// A.K.A direct lighting\r
// MEMO FOR ME:\r
// "How much light arrives at the point from area light?"\r
// 1) Sample direction based on light shape\r
// 2) Compute whole BRDF multiplied by radiance\r
// 3) Divide by the PDF of the sampling\r
fn nextEventEstimation(hitPos: vec3f, normal: vec3f, material: Material, uv: vec2f) -> vec3f\r
{\r
    var albedo = material.albedo;\r
    if (material.useAlbedoTexture > 0.5 && material.textureIndex >= 0.0)\r
    {\r
        albedo = textureSampleLevel(textures, materialSampler, uv, i32(material.textureIndex) * 4, 2.0).rgb;\r
    }\r
\r
    let matProps = getMaterialProperties(material, uv);\r
    let roughness = matProps.y;\r
    let metalness = matProps.x;\r
    let alphap = roughness;\r
    \r
    var n = normalize(normal);\r
    let pi = 3.14159265359;\r
\r
    var totalColor = vec3f(0.0, 0.0, 0.0);\r
\r
    if (uniforms.light.enabled < 0.5)\r
    {\r
        return totalColor;\r
    }\r
\r
    let lightNormal = normalize(uniforms.light.normalDirection);\r
    var lightUp = vec3f(0.0, 0.0, 1.0);\r
    if (abs(lightNormal.z) > 0.999) \r
    {\r
        lightUp = vec3f(1.0, 0.0, 0.0);\r
    }\r
    let lightTangent = normalize(cross(lightUp, lightNormal));\r
    let lightBitangent = cross(lightNormal, lightTangent);\r
\r
    let u = rand() - 0.5;\r
    let v = rand() - 0.5;\r
    let samplePoint = uniforms.light.center \r
                    + lightTangent * u * uniforms.light.width \r
                    + lightBitangent * v * uniforms.light.height;\r
\r
    let toLight = samplePoint - hitPos;\r
    let lightDistance = length(toLight);\r
    let wi = normalize(toLight);\r
\r
    // Check: is the shading point on the emitting side?\r
    let cosAtLight = dot(-wi, lightNormal);\r
    if (cosAtLight <= 0.0)\r
    {\r
        return totalColor;\r
    }\r
\r
    // Check: does the surface face the light?\r
    let NdotL = dot(n, wi);\r
    if (NdotL <= 0.0)\r
    {\r
        return totalColor;\r
    }\r
\r
    // Check: is the point in shadow?\r
    const shadowBias = 0.001;\r
    var shadowRay: Ray;\r
    shadowRay.origin = hitPos + shadowBias * n;\r
    shadowRay.direction = wi;\r
\r
    var shadowHit: Hit;\r
    let inShadow = rayTraceOnce(shadowRay, &shadowHit, lightDistance - shadowBias, true);\r
    if (inShadow)\r
    {\r
        return totalColor;\r
    }\r
\r
    let toCamera = uniforms.cameraPosition - hitPos;\r
    let wo = normalize(toCamera);\r
    let wh = normalize(wi + wo);\r
\r
    let NdotV = max(dot(n, wo), 0.0001);\r
    let NdotH = max(dot(n, wh), 0.0);\r
    let LdotH = max(dot(wi, wh), 0.0);\r
\r
    let F0 = mix(vec3(0.04), albedo, metalness);\r
    let F = F0 + (1.0 - F0) * pow(1.0 - LdotH, 5.0);\r
\r
    let lambert = albedo / pi;\r
    let kd = (1.0 - F) * (1.0 - metalness);\r
    let fd = kd * lambert;\r
\r
    let D = (alphap * alphap) / (pi * pow((NdotH * NdotH) * (alphap * alphap - 1.0) + 1.0, 2.0));\r
\r
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
    // Monte carlo area light PDF estimate\r
    let lightArea = uniforms.light.width * uniforms.light.height;\r
    let geometricTerm = cosAtLight / (lightDistance * lightDistance);\r
    let radiance = uniforms.light.intensity * uniforms.light.color;\r
\r
    totalColor = f * radiance * NdotL * geometricTerm * lightArea;\r
\r
    return totalColor;\r
}\r
\r
// ============================== //\r
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
    if (uniforms.mode == 0u)\r
    {\r
        let bvhdepth = u32(uniforms.bvhVisualizationDepth - 1.0);\r
        let color = debugBVHTraversal(ray, bvhdepth);\r
        return vec4f(color, 1.0);\r
    }\r
\r
    var hit: Hit;\r
    var color: vec3f = vec3f(0.0, 0.0, 0.0);\r
\r
    let n = uniforms.numSamples;\r
    let stratSize = u32(ceil(sqrt(f32(n))));\r
\r
    if (uniforms.mode == 1u) // lambert Path tracing\r
    {\r
        if (uniforms.frameAccumulation < 0.5 )\r
        {\r
            var totalColor = vec3f(0.0, 0.0, 0.0);\r
            var sampleIndex = 0u;\r
            for (var sy = 0u; sy < stratSize; sy++)\r
            {\r
                for (var sx = 0u; sx < stratSize; sx++)\r
                {\r
                    if (sampleIndex >= n) { break; }\r
\r
                    initRNG(input.position.xy, sampleIndex);\r
\r
                    let stratumOffset = vec2f(\r
                        (f32(sx) + rand()) / f32(stratSize),\r
                        (f32(sy) + rand()) / f32(stratSize)\r
                    );\r
\r
                    let jitteredUV = vec2f(\r
                        (input.position.x - 1.0 + stratumOffset.x) / uniforms.canvasDimensions.x,\r
                        1.0 - (input.position.y - 1.0 + stratumOffset.y) / uniforms.canvasDimensions.y\r
                    );\r
\r
                    let sampleRay = ray_at(jitteredUV);\r
                    totalColor += lambertBRDFPathTrace(sampleRay, uniforms.ptDepth);\r
                    sampleIndex++;\r
                }\r
            }\r
\r
            color = totalColor / f32(n);\r
        }\r
        else // One sample per frame, accumulate in texture\r
        {\r
            initRNG(input.position.xy, uniforms.frameCount - 1u);\r
            let stratIndex = (uniforms.frameCount - 1u) % (stratSize * stratSize);\r
            let stratumOffset = vec2f(\r
                (f32(stratIndex % stratSize) + rand()) / f32(stratSize),\r
                (f32(stratIndex / stratSize) + rand()) / f32(stratSize)\r
            );\r
        \r
            let jitteredUV = vec2f(\r
                (input.position.x - 1.0 + stratumOffset.x) / uniforms.canvasDimensions.x,\r
                1.0 - (input.position.y - 1.0 + stratumOffset.y) / uniforms.canvasDimensions.y\r
            );\r
            let sampleRay = ray_at(jitteredUV);\r
            let newSample = lambertBRDFPathTrace(sampleRay, uniforms.ptDepth);\r
            \r
            let oldColor = textureLoad(accumTexture, vec2i(input.position.xy), 0).rgb;\r
            \r
            let divider = f32(uniforms.frameCount);\r
            color = oldColor + (newSample - oldColor) / divider;\r
        }\r
        return vec4f(color, 1.0);\r
    }\r
    \r
    if (uniforms.mode == 2u) // Crook-Torrance Path tracing with MIS\r
    {\r
        if (uniforms.frameAccumulation < 0.5 )\r
        {\r
            var totalColor = vec3f(0.0, 0.0, 0.0);\r
            var sampleIndex = 0u;\r
            for (var sy = 0u; sy < stratSize; sy++)\r
            {\r
                for (var sx = 0u; sx < stratSize; sx++)\r
                {\r
                    if (sampleIndex >= n) { break; }\r
\r
                    initRNG(input.position.xy, sampleIndex);\r
\r
                    let stratumOffset = vec2f(\r
                        (f32(sx) + rand()) / f32(stratSize),\r
                        (f32(sy) + rand()) / f32(stratSize)\r
                    );\r
\r
                    let jitteredUV = vec2f(\r
                        (input.position.x - 1.0 + stratumOffset.x) / uniforms.canvasDimensions.x,\r
                        1.0 - (input.position.y - 1.0 + stratumOffset.y) / uniforms.canvasDimensions.y\r
                    );\r
\r
                    let sampleRay = ray_at(jitteredUV);\r
                    totalColor += CrookTorranceBRDFPathTrace(sampleRay, uniforms.ptDepth);\r
                    sampleIndex++;\r
                }\r
            }\r
\r
            color = totalColor / f32(n);\r
        }\r
        else // One sample per frame, accumulate in texture\r
        {\r
            initRNG(input.position.xy, uniforms.frameCount - 1u);\r
            let stratIndex = (uniforms.frameCount - 1u) % (stratSize * stratSize);\r
            let stratumOffset = vec2f(\r
                (f32(stratIndex % stratSize) + rand()) / f32(stratSize),\r
                (f32(stratIndex / stratSize) + rand()) / f32(stratSize)\r
            );\r
        \r
            let jitteredUV = vec2f(\r
                (input.position.x - 1.0 + stratumOffset.x) / uniforms.canvasDimensions.x,\r
                1.0 - (input.position.y - 1.0 + stratumOffset.y) / uniforms.canvasDimensions.y\r
            );\r
            let sampleRay = ray_at(jitteredUV);\r
            let newSample = CrookTorranceBRDFPathTrace(sampleRay, uniforms.ptDepth);\r
            \r
            let oldColor = textureLoad(accumTexture, vec2i(input.position.xy), 0).rgb;\r
            \r
            let divider = f32(uniforms.frameCount);\r
            color = oldColor + (newSample - oldColor) / divider;\r
        }\r
        return vec4f(color, 1.0);\r
    }\r
\r
    // Should not arrive here...\r
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
}`,ex=`struct AreaLight\r
{\r
    center: vec3f,\r
    intensity: f32,\r
\r
    normalDirection: vec3f,\r
    width: f32,\r
\r
    color: vec3f,\r
    height: f32,\r
\r
    enabled: f32,\r
    _pad: f32,\r
    _pad2: f32,\r
    _pad3: f32,\r
}; // 4 * 4 = 64 bytes\r
\r
struct Uniforms {\r
    viewMat : mat4x4<f32>, // 64 bytes\r
    projMat : mat4x4<f32>, // 64 bytes\r
\r
    cameraPosition: vec3f, \r
    _pad0: f32,\r
\r
    a_c: f32,\r
    a_l: f32,\r
    a_q: f32,\r
    _pad2: f32,\r
\r
    light : AreaLight,\r
}; // 64 + 64 + 16 + 16 + 64 = 224 bytes\r
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
`,tx=`struct Material {\r
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
struct AreaLight\r
{\r
    center: vec3f,\r
    intensity: f32,\r
\r
    normalDirection: vec3f,\r
    width: f32,\r
\r
    color: vec3f,\r
    height: f32,\r
\r
    enabled: f32,\r
    _pad: f32,\r
    _pad2: f32,\r
    _pad3: f32,\r
}; // 4 * 4 = 64 bytes\r
\r
struct Uniforms {\r
    viewMat : mat4x4<f32>, // 64 bytes\r
    projMat : mat4x4<f32>, // 64 bytes\r
\r
    cameraPosition: vec3f, \r
    _pad0: f32,\r
\r
    a_c: f32,\r
    a_l: f32,\r
    a_q: f32,\r
    _pad2: f32,\r
\r
    light : AreaLight,\r
}; // 64 + 64 + 16 + 16 + 64 = 224 bytes\r
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
    var totalColor = microfacetBRDF(input);\r
\r
    return vec4f(totalColor, 1.0);\r
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
    if (uniforms.light.enabled < 0.5)\r
    {\r
        return totalColor;\r
    }\r
\r
    // ---- Area light: sample the center as a point ----\r
    let toLight = uniforms.light.center - input.position;\r
    let lightDistance = length(toLight);\r
    let wi = normalize(toLight);\r
\r
    let lightNormal = normalize(uniforms.light.normalDirection);\r
    let cosAtLight = dot(-wi, lightNormal);\r
    if (cosAtLight <= 0.0)\r
    {\r
        return totalColor;\r
    }\r
\r
    let toCamera = uniforms.cameraPosition - input.position;\r
    let wo = normalize(toCamera);\r
    let wh = normalize(wi + wo);\r
\r
    // Dot products\r
    let NdotV = max(dot(n, wo), 0.0001);\r
    let NdotL = max(dot(n, wi), 0.0001);\r
    let NdotH = max(dot(n, wh), 0.0);\r
    let LdotH = max(dot(wi, wh), 0.0);\r
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
    // Area light radiance:\r
    // Power is spread over the light's area, and only the projected area contributes\r
    let lightArea = uniforms.light.width * uniforms.light.height;\r
    let geometricTerm = cosAtLight / (lightDistance * lightDistance);\r
    let radiance = uniforms.light.intensity * uniforms.light.color * geometricTerm * lightArea;\r
\r
    totalColor = totalColor + f * radiance * NdotL;\r
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
}`,rx=`struct AreaLight\r
{\r
    center: vec3f,\r
    intensity: f32,\r
\r
    normalDirection: vec3f,\r
    width: f32,\r
\r
    color: vec3f,\r
    height: f32,\r
\r
    enabled: f32,\r
    _pad: f32,\r
    _pad2: f32,\r
    _pad3: f32,\r
};\r
\r
struct Uniforms {\r
    viewMat : mat4x4<f32>,\r
    projMat : mat4x4<f32>,\r
\r
    cameraPosition: vec3f, \r
    _pad0: f32,\r
\r
    a_c: f32,\r
    a_l: f32,\r
    a_q: f32,\r
    _pad2: f32,\r
\r
    light : AreaLight,\r
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
}`,nx=`struct VertexOutput {\r
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
}`,ix=`struct VSOut \r
{\r
    @builtin(position) pos: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
@vertex\r
fn vs(@builtin(vertex_index) i: u32) -> VSOut \r
{\r
    var pos = array<vec2f, 6>(\r
        vec2f(-1, -1), vec2f(1, -1), vec2f(-1, 1),\r
        vec2f(-1, 1), vec2f(1, -1), vec2f(1, 1)\r
    );\r
    var out: VSOut;\r
    out.pos = vec4f(pos[i], 0, 1);\r
    out.uv = pos[i] * 0.5 + 0.5;\r
    return out;\r
}`,sx=`struct VSOut \r
{\r
    @builtin(position) pos: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
struct DisplayUniforms\r
{\r
    frameCount: u32,\r
    denoiseRenderTexture: f32,\r
    padding1: u32,\r
    padding2: u32,\r
};\r
\r
@group(0) @binding(0) var displayTex: texture_2d<f32>;\r
@group(0) @binding(1) var<uniform> displayUniforms: DisplayUniforms;\r
\r
\r
@fragment\r
fn fs(in: VSOut) -> @location(0) vec4f \r
{\r
    let coord = vec2i(in.pos.xy);\r
\r
    if (displayUniforms.denoiseRenderTexture < 0.5) \r
    {\r
        let color = textureLoad(displayTex, coord, 0).rgb;\r
        return vec4f(color, 1.0);\r
    }\r
    else\r
    {\r
        // Simple gaussian filtering\r
        let kernel = array<f32, 25>(\r
            1.0,  4.0,  6.0,  4.0, 1.0,\r
            4.0, 16.0, 24.0, 16.0, 4.0,\r
            6.0, 24.0, 36.0, 24.0, 6.0,\r
            4.0, 16.0, 24.0, 16.0, 4.0,\r
            1.0,  4.0,  6.0,  4.0, 1.0\r
        );\r
        let kernelSum = 256.0;\r
\r
        var color = vec3f(0.0);\r
        for (var y = -2; y <= 2; y++) // Go search up to two neighbors in each direction, 5x5 kernel\r
        {\r
            for (var x = -2; x <= 2; x++)\r
            {\r
                let idx = (y + 2) * 5 + (x + 2);\r
                let sample = textureLoad(displayTex, coord + vec2i(x, y), 0).rgb;\r
                color += sample * kernel[idx];\r
            }\r
        }\r
\r
        return vec4f(color / kernelSum, 1.0);\r
    }\r
}`;async function ox(t){const e=new cx;return await e.initialize(t),e}const gc=224,bc=192,yc=16,ax=96;class cx{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mr();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Pn(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;usePathTracing=!0;meshesInfo;activeContextMenu=null;showBVH=!1;bvhDepth=1/0;rayTracerMode=2;ptDepth=6;ptSamples=64;randSeed=Math.floor(Math.random()*4294967295);russianRoulette=!0;frameAccumulation=!0;accumTexture=null;renderTexture=null;frameCount=0;frameAccumulationReset=!1;denoiseRenderTexture=!1;constructor(){In(this.camera,278,500,-700),qr(this.camera,0,-.3),Rn(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={center:w(278,548,279),intensity:120,normalDirection:w(0,-1,0),width:100,height:100,color:w(1,1,1),enabled:!0};this.lights.push(e)}initializeUtils(){const e=Ht();if(!e)return;Xt("Use Path Tracing",this.usePathTracing,e,i=>{this.usePathTracing=i}),e.appendChild(document.createElement("br")),_t("Depth of path tracing",this.ptDepth,0,20,1,e,i=>{this.ptDepth=i,this.frameAccumulationReset=!0}),e.appendChild(document.createElement("br")),_t("Path tracing samples",this.ptSamples,1,100,1,e,i=>{this.ptSamples=i,this.frameAccumulationReset=!0}),e.appendChild(document.createElement("br")),Xt("Russian Roulette",this.russianRoulette,e,i=>{this.russianRoulette=i}),e.appendChild(document.createElement("br")),Xt("Frame Accumulation",this.frameAccumulation,e,i=>{this.frameAccumulation=i,this.frameAccumulationReset=!0}),e.appendChild(document.createElement("br")),Xt("Denoise Render Texture",this.denoiseRenderTexture,e,i=>{this.denoiseRenderTexture=i});const r=document.createElement("select");r.style.color="black",r.tabIndex=-1,["BVH","Lambert (only diffuse)","Crook Torrance"].forEach((i,s)=>{const o=document.createElement("option");o.value=s.toString(),o.text=i,r.appendChild(o)}),r.addEventListener("change",()=>{this.rayTracerMode=parseInt(r.value),this.frameAccumulationReset=!0}),r.value=this.rayTracerMode.toString(),e.appendChild(document.createElement("br")),e.appendChild(r),this.lights.forEach((i,s)=>{const o=a=>{a.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const c={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Rd(c,this.lights[s],`Edit Light ${s+1}`,l=>{this.lights[s]=l,this.frameAccumulationReset=!0},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Tn(`Edit Light ${s+1}`,e,o)}),e.appendChild(document.createElement("br")),_t("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,e,i=>{this.bvhDepth=i===32?1/0:i,this.rebuildBVHBuffer()})}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Le(this.device,$2,Z2,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Le(this.device,ex,tx,"Normal Shader Module"),this.normalObjects.bvhShaderModule=Le(this.device,rx,nx,"BVH Draw Shader Module"),this.rayTracerObjects.displayShaderModule=Le(this.device,ix,sx,"Display Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.displayBindGroupLayout=this.device.createBindGroupLayout({label:"Display Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.rayTracerObjects.displayPipeline=this.device.createRenderPipeline({label:"Display Pipeline",layout:this.device.createPipelineLayout({label:"Display Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.displayBindGroupLayout]}),vertex:{module:this.rayTracerObjects.displayShaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.displayShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"none"}}),this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:"rgba16float"}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.normalObjects.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.normalObjects.bvhDrawPipelineLayout,vertex:{module:this.normalObjects.bvhShaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.bvhShaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=Sn(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}async initializeBuffers(){if(this.device===null)return;const e=Fe(this.device,1024,32),r=this.meshesInfo?.meshMaterials||[],n=await lv(r);this.normalObjects.sceneInformation=n,this.meshesInfo=n.additionalInfo;const i=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let A=0;A<i;A++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+A,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[A],0,n.meshes[A].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+A,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[A],0,n.meshes[A].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+A,size:dr*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const H=n.meshes[A].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[A],0,H),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+A,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[A]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[A].Material.albedoGPUTexture?n.meshes[A].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[A].Material.metalnessGPUTexture?n.meshes[A].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[A].Material.roughnessGPUTexture?n.meshes[A].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[A].Material.normalGPUTexture?n.meshes[A].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[A]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[A]}}]}));const D=n.meshes[A].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+A,size:D.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[A],0,D);const F=n.meshes[A].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+A,size:F.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[A],0,F);const ee=n.meshes[A].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+A,size:ee.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[A],0,ee);const se=n.meshes[A].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+A,size:se.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[A],0,se)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:gc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=this.getBVHGeometry(1/0);this.normalObjects.bvhLineGeometryBuffers=[];for(let A=0;A<s.length;A++)this.normalObjects.bvhLineGeometryBuffers[A]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${A}`,size:s[A].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[A],0,s[A]);const o=[],a=[],c=[],l=[],u=[],f=[];let h=0,m=0,d=0,p=0,b=0;for(let A=0;A<i;A++){let H=n.meshes[A];o.push(...H.getVertexData()),a.push(...H.getNormalData()),c.push(...H.getUVData());const D=H.getReorderedIndexData32();for(let de of D)l.push(de+m);const{data:F,numNodes:ee}=H.getFlattenedBVHData(b);f.push(F),h+=F.byteLength;const se=new ArrayBuffer(ax),re=new Float32Array(se),Q=new Uint32Array(se);re.set(H.GetFlatInverseWorldMatrix(),0),Q[16]=b,Q[17]=d,Q[18]=p,Q[19]=A,Q[20]=ee,u.push(...re),m+=H.getNumVertices(),d+=H.getNumTriangles(),p+=H.getNumVertices(),b+=ee}const y=new Float32Array(o),x=new Float32Array(a),C=new Float32Array(c),g=new Uint32Array(l),M=new Float32Array(u),E=new Uint8Array(h);let B=0;for(let A of f)E.set(new Uint8Array(A),B),B+=A.byteLength;this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:bc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,y),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:x.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,x),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:C.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,C),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:g.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,g),this.rayTracerObjects.bvhNodesStorageBuffer=this.device.createBuffer({label:"Ray Tracer BVH Nodes Storage Buffer",size:E.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.bvhNodesStorageBuffer,0,E),this.rayTracerObjects.meshInstancesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Mesh Instances Storage Buffer",size:M.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,0,M),this.rayTracerObjects.displayUniformBuffer=this.device.createBuffer({label:"Display Uniform Buffer",size:yc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rebuildAccumulationTextures();const P=n.meshes.map(A=>A.Material),S=mo(P);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:S.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,S);const G=4;var U=this.meshesInfo?.meshMaterials.filter(A=>A.textureIndex>=0).length||0;U===0&&(U=1);const j=1024,V=1024;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[j,V,G*U],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const O=Wr(1024,32);for(let A=0;A<U;A++){const H=this.meshesInfo?.meshMaterials[A]?.albedoImage?this.meshesInfo.meshMaterials[A].albedoImage:O,D=this.meshesInfo?.meshMaterials[A]?.metalnessImage?this.meshesInfo.meshMaterials[A].metalnessImage:O,F=this.meshesInfo?.meshMaterials[A]?.roughnessImage?this.meshesInfo.meshMaterials[A].roughnessImage:O,ee=this.meshesInfo?.meshMaterials[A]?.normalImage?this.meshesInfo.meshMaterials[A].normalImage:O;this.device.queue.copyExternalImageToTexture({source:H},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G]},[j,V]),this.device.queue.copyExternalImageToTexture({source:D},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G+1]},[j,V]),this.device.queue.copyExternalImageToTexture({source:F},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G+2]},[j,V]),this.device.queue.copyExternalImageToTexture({source:ee},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*G+3]},[j,V])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnMeshes(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;Be(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&Gn(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&Be(this.camera,-1,0),this.keysPressed.has("arrowright")&&Be(this.camera,1,0),this.keysPressed.has("arrowup")&&Be(this.camera,0,1),this.keysPressed.has("arrowdown")&&Be(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers();const e=this.meshesInfo.meshMaterials[7];this.fetchTextureForMaterial(e,ie.Albedo,"meshes/calavera/textures/Material.002_baseColor.png");const r=this.meshesInfo.meshMaterials[8];this.fetchTextureForMaterial(r,ie.Albedo,"meshes/takis/textures/Material.001_baseColor.png");const n=this.meshesInfo.meshMaterials[2];this.fetchTextureForMaterial(n,ie.Albedo,"textures/eagle.jpg"),this.fetchTextureForMaterial(n,ie.Metalness,"textures/eagle_metalness_roughness.png"),this.fetchTextureForMaterial(n,ie.Roughness,"textures/eagle_metalness_roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.usePathTracing){const e=new ArrayBuffer(bc),r=new Float32Array(e),n=new Uint32Array(e);r.set(Dn(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracerMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=this.bvhDepth,n[24]=this.ptDepth,n[25]=this.randSeed,n[26]=this.ptSamples,r[27]=this.russianRoulette?1:0;const i=new Float32Array([this.canvas.width,this.canvas.height]);r.set(i,28),r[30]=this.frameAccumulation?1:0,n[31]=this.frameCount,r.set(this.lights[0].center,32),r[35]=this.lights[0].intensity,r.set(this.lights[0].normalDirection,36),r[39]=this.lights[0].width,r.set(this.lights[0].color,40),r[43]=this.lights[0].height,r[44]=this.lights[0].enabled?1:0,r[45]=0,r[46]=0,r[47]=0,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e);const s=new ArrayBuffer(yc),o=new Float32Array(s),a=new Uint32Array(s);a[0]=this.frameCount,o[1]=this.denoiseRenderTexture?1:0,a[2]=0,a[3]=0,this.device.queue.writeBuffer(this.rayTracerObjects.displayUniformBuffer,0,s)}else{const e=new ArrayBuffer(gc),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0,r.set(this.lights[0].center,40),r[43]=this.lights[0].intensity,r.set(this.lights[0].normalDirection,44),r[47]=this.lights[0].width,r.set(this.lights[0].color,48),r[51]=this.lights[0].height,r[52]=this.lights[0].enabled?1:0,r[53]=0,r[54]=0,r[55]=0,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const o=performance.now();if(this.handleInput(),this.camera.dirty&&(this.frameAccumulationReset=!0,this.camera.dirty=!1),this.frameAccumulationReset){this.frameCount=0;const h=this.device.createCommandEncoder({label:"Frame Accumulation Reset Encoder"});h.beginRenderPass({colorAttachments:[{view:this.renderTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]}).end(),h.copyTextureToTexture({texture:this.renderTexture},{texture:this.accumTexture},[this.canvas.width,this.canvas.height]),this.device.queue.submit([h.finish()]),this.frameAccumulationReset=!1}this.usePathTracing&&this.frameAccumulation&&this.frameCount++,this.updateUniforms(),this.animate();const a=this.context.getCurrentTexture().createView(),c=this.usePathTracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},l=this.device.createCommandEncoder({label:"Render Quad Encoder"});if(this.usePathTracing){const h=l.beginRenderPass({colorAttachments:[{view:this.renderTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}});h.setPipeline(this.rayTracerObjects.pipeline),h.setBindGroup(0,this.rayTracerObjects.bindGroup),h.setBindGroup(1,this.rayTracerObjects.materialBindGroup),h.draw(6),h.end(),this.frameAccumulation&&l.copyTextureToTexture({texture:this.renderTexture},{texture:this.accumTexture},[this.canvas.width,this.canvas.height]);const m={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:c},d=l.beginRenderPass(m);d.setPipeline(this.rayTracerObjects.displayPipeline),d.setBindGroup(0,this.rayTracerObjects.displayBindGroup),d.draw(6),d.end()}else{const h={label:"basic canvas renderPass",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:c,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},m=l.beginRenderPass(h);m.setPipeline(this.normalObjects.pipeline),m.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.sceneInformation.meshes.length;d++)m.setBindGroup(1,this.normalObjects.materialBindGroups[d]),m.setVertexBuffer(0,this.normalObjects.positionBuffers[d]),m.setVertexBuffer(1,this.normalObjects.normalBuffers[d]),m.setVertexBuffer(2,this.normalObjects.uvBuffers[d]),m.setIndexBuffer(this.normalObjects.indexBuffers[d],"uint16"),m.drawIndexed(this.normalObjects.indexBuffers[d].size/2,1,0,0,0);if(this.showBVH){m.setPipeline(this.normalObjects.bvhDrawPipeline),m.setBindGroup(0,this.normalObjects.bindGroup);for(let d=0;d<this.normalObjects.bvhLineGeometryBuffers.length;d++)m.setBindGroup(1,this.normalObjects.materialBindGroups[d]),m.setVertexBuffer(0,this.normalObjects.bvhLineGeometryBuffers[d]),m.draw(this.normalObjects.bvhLineCounts[d])}m.end()}this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const u=l.finish();this.device.queue.submit([u]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const h=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(h[1]-h[0]),this.timestampQuerySet.resultBuffer.unmap()});const f=performance.now()-o;if(this.infoElement&&this.device){const h=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${f.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=h,pr(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),On(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})),this.rebuildAccumulationTextures())}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),gr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeMeshMaterial(e,r){if(e<0||e>=(this.meshesInfo?.meshIndices.length||0))return;const n=r.name,i=this.normalObjects.sceneInformation.meshes.findIndex(l=>l.Material.name===n)||-1;if(i===-1)return;this.meshesInfo.meshMaterials[e]=r,this.normalObjects.sceneInformation.meshes[i].Material=r;const s=this.meshesInfo.meshIndices[e],o=Gi(r);let a=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(a,0,o);const c=s*dr*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,c,o),this.frameAccumulationReset=!0}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(o=>o.Material.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():Fe(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():Fe(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():Fe(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():Fe(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=i;var s=e.textureIndex;for(let o=0;o<4;o++){const a=(()=>{switch(o){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||Wr(1024,32);this.device.queue.copyExternalImageToTexture({source:a},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+o]},[1024,1024])}}getBVHGeometry(e){if(this.normalObjects.sceneInformation.meshes.length===0)return[];this.normalObjects.bvhLineCounts=[];const r=[];for(let n=0;n<this.normalObjects.sceneInformation.meshes.length;n++){const{vertexData:i,count:s}=this.normalObjects.sceneInformation.meshes[n].GetBVHGeometry(e);r.push(i),this.normalObjects.bvhLineCounts.push(s)}return r}rebuildBVHBuffer(){if(this.device===null)return;const e=this.getBVHGeometry(this.bvhDepth);for(let r=0;r<e.length;r++)this.normalObjects.bvhLineGeometryBuffers[r]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${r}`,size:e[r].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[r],0,e[r])}rayCastOnMeshes(e,r){if(this.canvas===null||this.camera===null||this.meshesInfo===null)return-1;const i=this.meshesInfo.meshIndices.map(p=>this.normalObjects.sceneInformation.meshes[p]),s=this.canvas.getBoundingClientRect(),o=e-s.left,a=r-s.top,c=this.canvas.width/s.width,l=this.canvas.height/s.height,u=2*o*c/this.canvas.width-1,f=1-2*a*l/this.canvas.height,h=bo(this.camera,u,f);let m=-1,d=Number.POSITIVE_INFINITY;for(let p=0;p<i.length;p++){const y=i[p].intersectMeshWithRay(h,4);y<0||(y<d&&(d=y,m=p),console.log(`Mesh ${p} intersection distance:`,y))}return m}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.meshesInfo?.meshMaterials?.[e];if(!i)return;this.activeContextMenu=po({x:r,y:n},i,o=>{this.changeMeshMaterial(e,o)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=o=>{this.activeContextMenu&&!this.activeContextMenu.contains(o.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}rebuildAccumulationTextures(){this.accumTexture?.destroy(),this.renderTexture?.destroy(),this.accumTexture=this.device.createTexture({label:"Accumulation Texture",size:[this.canvas.width,this.canvas.height],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.renderTexture=this.device.createTexture({label:"Render Target Texture",size:[this.canvas.width,this.canvas.height],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING}),this.frameAccumulationReset=!0,this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.bvhNodesStorageBuffer}},{binding:6,resource:{buffer:this.rayTracerObjects.meshInstancesStorageBuffer}},{binding:7,resource:this.accumTexture.createView()}]}),this.rayTracerObjects.displayBindGroup=this.device.createBindGroup({label:"Display Bind Group",layout:this.rayTracerObjects.displayBindGroupLayout,entries:[{binding:0,resource:this.renderTexture.createView()},{binding:1,resource:{buffer:this.rayTracerObjects.displayUniformBuffer}}]})}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e){console.error("Material is undefined when trying to fetch texture with name:",n,"and type:",ie[r]);return}Uo(n).then(s=>{const o=Lo(s,1024,1024),a=Fo(this.device,o);switch(r){case ie.Albedo:e.albedoTexture=o,e.albedoGPUTexture=a;break;case ie.Metalness:e.metalnessTexture=o,e.metalnessGPUTexture=a;break;case ie.Roughness:e.roughnessTexture=o,e.roughnessGPUTexture=a;break;case ie.Normal:e.normalTexture=o,e.normalGPUTexture=a;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ie[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const lx=`//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override X_SIZE: u32;\r
override Y_SIZE: u32;\r
override ELEMENT_COUNT: u32;\r
override WORKGROUP_COUNT: u32;\r
\r
//================================//\r
struct Uniform\r
{\r
    currentBit: u32,\r
    _pad0: u32,\r
    _pad1: u32,\r
    _pad2: u32,\r
};\r
//================================//\r
@group(0) @binding(0) var<storage, read> data: array<u32>;\r
@group(0) @binding(1) var<storage, read_write> localPrefixSums: array<u32>;\r
@group(0) @binding(2) var<storage, read_write> blockSums: array<u32>;\r
\r
@group(1) @binding(0) var<uniform> uniforms: Uniform;\r
\r
var<workgroup> prefixSumDoubleBuffer: array<u32, 2 * (THREADS_PER_WORKGROUP + 1)>;\r
\r
//================================//\r
@compute\r
@workgroup_size(X_SIZE, Y_SIZE, 1)\r
fn cs(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>, \r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    let WID = (w_id.x + w_id.y * num_work.x) * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    let element = select(data[GID], 0u, GID >= ELEMENT_COUNT);\r
    let bits: u32 = (element >> uniforms.currentBit) & 0x3; // 2 bits per pass\r
\r
    var bitPrefixSums = array<u32, 4>(0u, 0u, 0u, 0u);\r
\r
    var lastThreadID: u32 = 0xffffffff;\r
    if ( w_id.x + w_id.y * num_work.x < WORKGROUP_COUNT )\r
    {\r
        // In case our workgroup is not fully occupied\r
        lastThreadID = min(THREADS_PER_WORKGROUP, ELEMENT_COUNT - WID) - 1u;\r
    }\r
    let isLastThread = l_id == lastThreadID;\r
\r
    // Double buffering:we write to A or B\r
    let TPW = THREADS_PER_WORKGROUP + 1u;\r
    var swapOffset: u32 = 0u;\r
    var inOffset: u32 = l_id;\r
    var outOffset: u32 = l_id + TPW;\r
\r
    // prefx sum\r
    for (var bucket: u32 = 0u; bucket < 4u; bucket++)\r
    {\r
        let bitMask = select(0u, 1u, bits == bucket); // so 0 everywhere, except in our bucket\r
        prefixSumDoubleBuffer[inOffset + 1u] = bitMask;\r
        workgroupBarrier(); // Let all threads write bitmask to A before reading and writing to B\r
\r
        var prefixSum: u32 = 0u;\r
\r
        for (var offset: u32 = 1u; offset < THREADS_PER_WORKGROUP; offset *= 2u)\r
        {\r
            if (l_id >= offset)\r
            {\r
                prefixSum = prefixSumDoubleBuffer[inOffset] + prefixSumDoubleBuffer[inOffset - offset];\r
            }\r
            else\r
            {\r
                prefixSum = prefixSumDoubleBuffer[inOffset];\r
            }\r
\r
            prefixSumDoubleBuffer[outOffset] = prefixSum;\r
\r
            // Swap, we know read from B and write to A\r
            outOffset = inOffset;\r
            swapOffset = TPW - swapOffset;\r
            inOffset = l_id + swapOffset;\r
\r
            workgroupBarrier(); // Let all threads write their prefix sum before next iteration\r
        }\r
\r
        // in this workgroup, this many elements are in this current bucket\r
        bitPrefixSums[bucket] = prefixSum;\r
\r
        // Write it if last thread\r
        if (isLastThread)\r
        {\r
            let totalSum: u32 = prefixSum + bitMask;\r
            blockSums[bucket * WORKGROUP_COUNT + (w_id.x + w_id.y * num_work.x)] = totalSum;\r
        }\r
\r
        outOffset = inOffset;\r
        swapOffset = TPW - swapOffset;\r
        inOffset = l_id + swapOffset;\r
    }\r
\r
    if (GID < ELEMENT_COUNT)\r
    {\r
        localPrefixSums[GID] = bitPrefixSums[bits]; // bits is either 00, 01, 10, 11\r
    }\r
}`,ux=`// Help from: https://github.com/kishimisu/WebGPU-Radix-Sort\r
\r
//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override X_SIZE: u32;\r
override Y_SIZE: u32;\r
override ITEMS_PER_WORKGROUP: u32;\r
override ELEMENT_COUNT: u32;\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read_write> items: array<u32>;\r
@group(0) @binding(1) var<storage, read_write> blockSums: array<u32>;\r
\r
var<workgroup> tempBuffer: array<u32, ITEMS_PER_WORKGROUP>;\r
\r
//================================//\r
// SCAN SWEEP, Up and then Down\r
// Blelloch 2 elements per thread\r
@compute\r
@workgroup_size(X_SIZE, Y_SIZE, 1)\r
fn cs_reduce(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>, \r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    let WID = (w_id.x + w_id.y * num_work.x) * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    // elem 1\r
    tempBuffer[l_id * 2u] = select(items[GID * 2u], 0u, GID * 2u >= ELEMENT_COUNT);\r
    // elem 2\r
    tempBuffer[l_id * 2u + 1u] = select(items[GID * 2u + 1u], 0u, GID * 2u + 1u >= ELEMENT_COUNT);\r
\r
    var offset: u32 = 1u;\r
\r
    // Up sweep, one half of threads each iter\r
    // Will output the total sum of the items\r
    for(var d: u32 = ITEMS_PER_WORKGROUP >> 1u; d > 0u; d >>= 1u) // Divide by 2 each iter\r
    {\r
        workgroupBarrier();\r
\r
        if (l_id < d) // If active thread\r
        {\r
            let ai = offset * (2u * l_id + 1u) - 1u;\r
            let bi = offset * (2u * l_id + 2u) - 1u;\r
\r
            tempBuffer[bi] += tempBuffer[ai];\r
        }\r
        offset *= 2u;\r
    }\r
\r
    // only first thread saves result\r
    if (l_id == 0u)\r
    {\r
        let lastOffset = ITEMS_PER_WORKGROUP - 1u;\r
\r
        blockSums[(w_id.x + w_id.y * num_work.x)] = tempBuffer[lastOffset];\r
        tempBuffer[lastOffset] = 0u; // need to clear it so the down sweep produces the EXCLUSIVE correct prefix sum\r
    }\r
\r
    // Down Sweep, twice as many threads each iter\r
    for(var d: u32 = 1u; d < ITEMS_PER_WORKGROUP; d *= 2u)\r
    {   \r
        offset >>= 1u;\r
        workgroupBarrier();\r
\r
        if (l_id < d) // active thread\r
        {\r
            var ai: u32 = offset * (l_id * 2u + 1u) - 1u;\r
            var bi: u32 = offset * (l_id * 2u + 2u) - 1u;\r
\r
            let temp: u32 = tempBuffer[ai];\r
            tempBuffer[ai] = tempBuffer[bi];\r
            tempBuffer[bi] = temp + tempBuffer[bi];\r
        }\r
    }\r
    workgroupBarrier();\r
\r
    // Results to global memory\r
    if (GID * 2u >= ELEMENT_COUNT)\r
    {\r
        return;\r
    }\r
    items[GID * 2u] = tempBuffer[l_id * 2u];\r
\r
    if (GID * 2u + 1u >= ELEMENT_COUNT)\r
    {\r
        return;\r
    }\r
    items[GID * 2u + 1u] = tempBuffer[l_id * 2u + 1u];\r
}\r
\r
//================================//\r
@compute\r
@workgroup_size(X_SIZE, Y_SIZE, 1)\r
fn cs_add(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>, \r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    let WID = (w_id.x + w_id.y * num_work.x) * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    let addValue = blockSums[w_id.x + w_id.y * num_work.x];\r
\r
    if (GID * 2u >= ELEMENT_COUNT)\r
    {\r
         return;\r
    }\r
    items[GID * 2u] += addValue;\r
\r
    if (GID * 2u + 1u >= ELEMENT_COUNT)\r
    {\r
         return;\r
    }\r
    items[GID * 2u + 1u] += addValue;\r
}`,fx=`//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override X_SIZE: u32;\r
override Y_SIZE: u32;\r
override ELEMENT_COUNT: u32;\r
override WORKGROUP_COUNT: u32;\r
\r
//================================//\r
struct Uniform\r
{\r
    currentBit: u32,\r
    _pad0: u32,\r
    _pad1: u32,\r
    _pad2: u32,\r
};\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read> data: array<u32>;\r
@group(0) @binding(1) var<storage, read_write> output: array<u32>;\r
@group(0) @binding(2) var<storage, read> localPrefixSums: array<u32>;\r
@group(0) @binding(3) var<storage, read> blockSums: array<u32>;\r
\r
// In case of key-value sort.\r
@group(0) @binding(4) var<storage, read> valueData: array<u32>;\r
@group(0) @binding(5) var<storage, read_write> valueOutput: array<u32>;\r
\r
@group(1) @binding(0) var<uniform> uniforms: Uniform;\r
\r
//================================//\r
@compute\r
@workgroup_size(X_SIZE, Y_SIZE, 1)\r
fn cs(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>, \r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    let WID = (w_id.x + w_id.y * num_work.x) * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    if (GID >= ELEMENT_COUNT)\r
    {\r
        return;\r
    }\r
\r
    // The final position of the element is this formula:\r
    // finalPosition = blockSum[bucket * WORKGROUP_COUNT + (w_id.x + w_id.y * num_work.x)] + localPrefixSum[GID]\r
\r
    let key = data[GID];\r
    let value = valueData[GID];\r
\r
    let bits: u32 = (key >> uniforms.currentBit) & 0x3;\r
    let finalPosition = blockSums[bits * WORKGROUP_COUNT + (w_id.x + w_id.y * num_work.x)] + localPrefixSums[GID];\r
\r
    output[finalPosition] = key;\r
    valueOutput[finalPosition] = value;\r
}`,hx=`//================================//\r
@group(0) @binding(0) var<storage, read> keysBuffer : array<u32>;\r
\r
override ELEMENT_COUNT: u32 = 1024;\r
override GRID_SIZE: u32 = 32;\r
\r
//================================//\r
struct VertexOut\r
{\r
    @builtin(position) position : vec4<f32>,\r
    @location(0) color : vec3<f32>,\r
    @location(1) uv : vec2<f32>,\r
};\r
\r
//================================//\r
fn morton2D_decode(code: u32) -> vec2<u32>\r
{\r
    var x = code & 0x55555555u;\r
    var y = (code >> 1u) & 0x55555555u;\r
\r
    x = (x | (x >> 1u)) & 0x33333333u;\r
    x = (x | (x >> 2u)) & 0x0F0F0F0Fu;\r
    x = (x | (x >> 4u)) & 0x00FF00FFu;\r
    x = (x | (x >> 8u)) & 0x0000FFFFu;\r
\r
    y = (y | (y >> 1u)) & 0x33333333u;\r
    y = (y | (y >> 2u)) & 0x0F0F0F0Fu;\r
    y = (y | (y >> 4u)) & 0x00FF00FFu;\r
    y = (y | (y >> 8u)) & 0x0000FFFFu;\r
\r
    return vec2<u32>(x, y);\r
}\r
\r
//================================//\r
@vertex\r
fn vs(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VertexOut\r
{\r
    var output : VertexOut;\r
\r
    if (instanceIndex >= ELEMENT_COUNT)\r
    {\r
        output.position = vec4<f32>(0.0, 0.0, 0.0, 1.0);\r
        output.color = vec3<f32>(0.0);\r
        output.uv = vec2<f32>(0.0);\r
        return output;\r
    }\r
\r
    let cellSize = 2.0 / f32(GRID_SIZE);\r
    let mortonPosition = morton2D_decode(instanceIndex);\r
\r
    let cellX = -1.0 + cellSize * f32(mortonPosition.x);\r
    let cellY = 1.0 - cellSize * f32(mortonPosition.y);\r
\r
    let pad = 0.08 * cellSize;\r
    let drawSize = cellSize - 2.0 * pad;\r
\r
    var localQuadUV = array<vec2<f32>, 6>(\r
        vec2<f32>(0.0, 0.0),\r
        vec2<f32>(1.0, 0.0),\r
        vec2<f32>(1.0, 1.0),\r
        vec2<f32>(0.0, 0.0),\r
        vec2<f32>(1.0, 1.0),\r
        vec2<f32>(0.0, 1.0)\r
    );\r
\r
    let lp = localQuadUV[vertexIndex];\r
\r
    let position = vec2<f32>(cellX + pad + lp.x * drawSize, cellY - pad - lp.y * drawSize);\r
    output.position = vec4<f32>(position, 0.0, 1.0);\r
    output.uv = lp * 2.0 - 1.0;\r
\r
    let key = keysBuffer[instanceIndex];\r
    let t = f32(key) / f32(0x3FFFFFFFu);\r
\r
    let colorA = vec3<f32>(0.33, 0.21, 0.73);\r
    let colorB = vec3<f32>(0.94, 0.62, 0.15);\r
    output.color = mix(colorA, colorB, t);\r
\r
    return output;\r
}\r
\r
`,dx=`//================================//\r
struct VertexOut\r
{\r
    @builtin(position) position : vec4<f32>,\r
    @location(0) color : vec3<f32>,\r
    @location(1) uv : vec2<f32>,\r
};\r
\r
//================================//\r
@fragment\r
fn fs(input : VertexOut) -> @location(0) vec4<f32>\r
{\r
    // TRANSFORM QUAD INTO A CIRCLE\r
    let dist = length(input.uv);\r
    let edge = smoothstep(1.0, 0.85, dist);\r
    let finalColor = input.color * edge;\r
    return vec4<f32>(finalColor, 1.0);\r
}`;async function mx(t){const e=new px;return await e.initialize(t),e}class px{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=mr();desiredNewElementCount=1<<20;THREADS_PER_WORKGROUP=256;X_SIZE=16;Y_SIZE=16;ELEMENT_COUNT=1<<20;ITEMS_PER_WORKGROUP=2*this.THREADS_PER_WORKGROUP;BIT_COUNT=30;NUM_PASSES=this.BIT_COUNT/2;GRID_SIZE;WORKGROUP_COUNT;elements=[];radixSort=!0;sortFlag=!1;sortedThisFrame=!1;lastSortTime=0;radixSortResources={};reorderResources={};renderResources={};prefixSumBindGroupLayout;prefixSumLevels=[];radixSortBindGroups;reorderBindGroups;keysBufferA;keysBufferB;valuesBufferA;valuesBufferB;localPrefixSumBuffer;blockSumBuffer;uniformBuffers;uniformBindGroups;uniformBindGroupLayout;radixDispatchX;radixDispatchY;constructor(){this.device=null,this.computeConstants()}computeConstants(){this.WORKGROUP_COUNT=Math.ceil(this.ELEMENT_COUNT/this.THREADS_PER_WORKGROUP),this.GRID_SIZE=Math.ceil(Math.sqrt(this.ELEMENT_COUNT));const[e,r]=this.dispatchSize(this.WORKGROUP_COUNT);this.radixDispatchX=e,this.radixDispatchY=r}initializeUtils(){const e=Ht();e&&(Od("Element Count",this.ELEMENT_COUNT,0,1<<30,10,e,r=>{this.desiredNewElementCount=r,this.resizeElementCount(this.desiredNewElementCount)}),e.appendChild(document.createElement("br")),Tn("Randomize",e,()=>{this.shuffle()}),e.appendChild(document.createElement("br")),Xt("Radix Sort",this.radixSort,e,r=>this.radixSort=r),e.appendChild(document.createElement("br")),Tn("Sort",e,()=>{this.sortFlag=!0}))}async initialize(e){if(this.canvas=e,this.device=await mt(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.radixSortResources.shaderModule=this.device.createShaderModule({label:"Radix Sort Shader Module",code:lx}),this.reorderResources.shaderModule=this.device.createShaderModule({label:"Reorder Shader Module",code:fx}),this.renderResources.shaderModule=Le(this.device,hx,dx,"Render Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.uniformBindGroupLayout=this.device.createBindGroupLayout({label:"Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.prefixSumBindGroupLayout=this.device.createBindGroupLayout({label:"Prefix Sum Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.radixSortResources.bindGroupLayout=this.device.createBindGroupLayout({label:"Radix Sort Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.radixSortResources.pipelineLayout=this.device.createPipelineLayout({label:"Radix Sort Pipeline Layout",bindGroupLayouts:[this.radixSortResources.bindGroupLayout,this.uniformBindGroupLayout]}),this.radixSortResources.pipeline=this.device.createComputePipeline({label:"Radix Sort Compute Pipeline",layout:this.radixSortResources.pipelineLayout,compute:{module:this.radixSortResources.shaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ELEMENT_COUNT:this.ELEMENT_COUNT,WORKGROUP_COUNT:this.WORKGROUP_COUNT}}}),this.reorderResources.bindGroupLayout=this.device.createBindGroupLayout({label:"Reorder Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.reorderResources.pipelineLayout=this.device.createPipelineLayout({label:"Reorder Pipeline Layout",bindGroupLayouts:[this.reorderResources.bindGroupLayout,this.uniformBindGroupLayout]}),this.reorderResources.pipeline=this.device.createComputePipeline({label:"Reorder Compute Pipeline",layout:this.reorderResources.pipelineLayout,compute:{module:this.reorderResources.shaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ELEMENT_COUNT:this.ELEMENT_COUNT,WORKGROUP_COUNT:this.WORKGROUP_COUNT}}}),this.renderResources.bindGroupLayout=this.device.createBindGroupLayout({label:"Render Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.renderResources.pipelineLayout=this.device.createPipelineLayout({label:"Render Pipeline Layout",bindGroupLayouts:[this.renderResources.bindGroupLayout]}),this.renderResources.pipeline=this.device.createRenderPipeline({label:"Render Pipeline",layout:this.renderResources.pipelineLayout,vertex:{module:this.renderResources.shaderModule.vertex,entryPoint:"vs",constants:{ELEMENT_COUNT:this.ELEMENT_COUNT,GRID_SIZE:this.GRID_SIZE}},fragment:{module:this.renderResources.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}}),this.timestampQuerySet=Sn(this.device,4))}initializePrefixSum(e,r){if(this.device===null)return;this.prefixSumLevels=[];const n=this.device.createShaderModule({label:"Prefix Sum Shader Module",code:ux}),i=this.device.createPipelineLayout({label:"Prefix Sum Pipeline Layout",bindGroupLayouts:[this.prefixSumBindGroupLayout]});let s=r,o=e;for(;;){const a=Math.ceil(s/this.ITEMS_PER_WORKGROUP),[c,l]=this.dispatchSize(a),u=this.device.createBuffer({label:`Block Sum Buffer (Level ${this.prefixSumLevels.length})`,size:Math.max(a,1)*4,usage:GPUBufferUsage.STORAGE}),f=this.device.createComputePipeline({label:`Prefix Sum Reduce (level ${this.prefixSumLevels.length})`,layout:i,compute:{module:n,entryPoint:"cs_reduce",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ITEMS_PER_WORKGROUP:this.ITEMS_PER_WORKGROUP,ELEMENT_COUNT:s}}}),h=this.device.createComputePipeline({label:`Prefix Sum Add (level ${this.prefixSumLevels.length})`,layout:i,compute:{module:n,entryPoint:"cs_add",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ITEMS_PER_WORKGROUP:this.ITEMS_PER_WORKGROUP,ELEMENT_COUNT:s}}}),m=this.device.createBindGroup({label:`Prefix Sum Bind Group (level ${this.prefixSumLevels.length})`,layout:this.prefixSumBindGroupLayout,entries:[{binding:0,resource:{buffer:o}},{binding:1,resource:{buffer:u}}]});if(this.prefixSumLevels.push({elementCount:s,workgroupCount:a,reducePipeline:f,addPipeline:h,bindGroup:m,dataBuffer:o,blockSumBuffer:u,dispatchX:c,dispatchY:l}),a<=1)break;o=u,s=a}}async initializeBuffers(){if(this.device===null)return;this.keysBufferA=this.device.createBuffer({label:"Keys Buffer A",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.keysBufferB=this.device.createBuffer({label:"Keys Buffer B",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.shuffle(),this.valuesBufferA=this.device.createBuffer({label:"Values A",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.valuesBufferB=this.device.createBuffer({label:"Values B",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.localPrefixSumBuffer=this.device.createBuffer({label:"Local Prefix Sum Buffer",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE}),this.blockSumBuffer=this.device.createBuffer({label:"Block Sum Buffer",size:4*this.WORKGROUP_COUNT*4,usage:GPUBufferUsage.STORAGE});const e=4*this.WORKGROUP_COUNT;this.initializePrefixSum(this.blockSumBuffer,e),this.uniformBuffers=[],this.uniformBindGroups=[];for(let r=0;r<15;r++){const n=this.device.createBuffer({label:`Uniform Buffer pass ${r}`,size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(n,0,new Uint32Array([r*2])),this.uniformBuffers.push(n);const i=this.device.createBindGroup({label:`Uniform Bind Group for pass ${r}`,layout:this.uniformBindGroupLayout,entries:[{binding:0,resource:{buffer:n}}]});this.uniformBindGroups.push(i)}this.radixSortBindGroups=[this.device.createBindGroup({label:"Radix Sort Bind Group (A)",layout:this.radixSortResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferA}},{binding:1,resource:{buffer:this.localPrefixSumBuffer}},{binding:2,resource:{buffer:this.blockSumBuffer}}]}),this.device.createBindGroup({label:"Radix Sort Bind Group (B)",layout:this.radixSortResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}},{binding:1,resource:{buffer:this.localPrefixSumBuffer}},{binding:2,resource:{buffer:this.blockSumBuffer}}]})],this.reorderBindGroups=[this.device.createBindGroup({label:"Reorder Bind Group (A -> B)",layout:this.reorderResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferA}},{binding:1,resource:{buffer:this.keysBufferB}},{binding:2,resource:{buffer:this.localPrefixSumBuffer}},{binding:3,resource:{buffer:this.blockSumBuffer}},{binding:4,resource:{buffer:this.valuesBufferA}},{binding:5,resource:{buffer:this.valuesBufferB}}]}),this.device.createBindGroup({label:"Reorder Bind Group (B -> A)",layout:this.reorderResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}},{binding:1,resource:{buffer:this.keysBufferA}},{binding:2,resource:{buffer:this.localPrefixSumBuffer}},{binding:3,resource:{buffer:this.blockSumBuffer}},{binding:4,resource:{buffer:this.valuesBufferB}},{binding:5,resource:{buffer:this.valuesBufferA}}]})],this.renderResources.bindGroup=this.device.createBindGroup({label:"Render Bind Group",layout:this.renderResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}}]})}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.mainLoop()}updateUniforms(){this.device}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const o=performance.now();this.updateUniforms();const c={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},l=this.device.createCommandEncoder({label:"Main encoder"});this.sortFlag&&(this.sortFlag=!1,this.sort(l));const u=l.beginRenderPass(c);u.setPipeline(this.renderResources.pipeline),u.setBindGroup(0,this.renderResources.bindGroup),u.draw(6,this.ELEMENT_COUNT,0,0),u.end(),this.timestampQuerySet!=null&&(l.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&l.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const f=l.finish();this.device.queue.submit([f]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const m=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(m[1]-m[0]),this.sortedThisFrame&&(this.sortedThisFrame=!1,this.lastSortTime=Number(m[3]-m[2])/1e6),this.timestampQuerySet.resultBuffer.unmap()});const h=performance.now()-o;if(this.infoElement&&this.device){const m=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${h.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                Last Sort Time: ${this.lastSortTime>0?this.lastSortTime.toFixed(2):"N/A"} ${this.lastSortTime>0?"ms":""}
                `;this.infoElement.textContent=m}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const o=s.contentBoxSize[0].inlineSize,a=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}shuffle(){this.elements=[];for(let e=0;e<this.ELEMENT_COUNT;e++)this.elements.push(Math.floor(Math.random()*(1<<30)));this.device?.queue.writeBuffer(this.keysBufferA,0,new Uint32Array(this.elements)),this.device?.queue.writeBuffer(this.keysBufferB,0,new Uint32Array(this.elements))}resizeElementCount(e){this.device!==null&&e!==this.ELEMENT_COUNT&&(e<1||(this.ELEMENT_COUNT=e,this.computeConstants(),this.destroyBuffers(),this.initializePipelines(),this.initializeBuffers()))}destroyBuffers(){if(this.keysBufferA?.destroy(),this.keysBufferB?.destroy(),this.valuesBufferA?.destroy(),this.valuesBufferB?.destroy(),this.localPrefixSumBuffer?.destroy(),this.blockSumBuffer?.destroy(),this.uniformBuffers)for(const e of this.uniformBuffers)e.destroy();for(const e of this.prefixSumLevels)e.blockSumBuffer?.destroy();this.prefixSumLevels=[]}async cleanup(){if(await this.smallCleanup(),this.destroyBuffers(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}dispatchSize(e){const r=Math.min(e,65535),n=Math.ceil(e/65535);return[r,n]}async sort(e){if(this.device===null)return;if(!this.radixSort){const i=performance.now();this.elements.sort((o,a)=>o-a);const s=performance.now();this.lastSortTime=s-i,this.device.queue.writeBuffer(this.keysBufferA,0,new Uint32Array(this.elements)),this.device.queue.writeBuffer(this.keysBufferB,0,new Uint32Array(this.elements));return}this.sortedThisFrame=!0;let r={label:"Radix Sort Compute Pass",...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:2,endOfPassWriteIndex:3}}};const n=e.beginComputePass(r);for(let i=0;i<this.NUM_PASSES;i++){const s=i%2===0;let o=this.uniformBindGroups[i];n.setPipeline(this.radixSortResources.pipeline),n.setBindGroup(0,s?this.radixSortBindGroups[0]:this.radixSortBindGroups[1]),n.setBindGroup(1,o),n.dispatchWorkgroups(this.radixDispatchX,this.radixDispatchY,1),this.dispatchPrefixSum(n),n.setPipeline(this.reorderResources.pipeline),n.setBindGroup(0,s?this.reorderBindGroups[0]:this.reorderBindGroups[1]),n.setBindGroup(1,o),n.dispatchWorkgroups(this.radixDispatchX,this.radixDispatchY,1)}n.end()}dispatchPrefixSum(e){const r=this.prefixSumLevels.length;for(let n=0;n<r;n++){const i=this.prefixSumLevels[n];e.setPipeline(i.reducePipeline),e.setBindGroup(0,i.bindGroup),e.dispatchWorkgroups(i.dispatchX,i.dispatchY,1)}for(let n=r-2;n>=0;n--){const i=this.prefixSumLevels[n];e.setPipeline(i.addPipeline),e.setBindGroup(0,i.bindGroup),e.dispatchWorkgroups(i.dispatchX,i.dispatchY,1)}}async smallCleanup(){gr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const gx={class:"flex justify-center items-center w-full h-full"},bx={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},yx=["onClick","onMouseenter"],vx={id:"utils-wrapper",class:"absolute bottom-0 right-0 flex flex-col items-end"},xx={id:"utils",class:"p-1 bg-gray-700"},Bx=12,Ax=Xc({__name:"App",setup(t){const e=xt(null),r=xt(null),n=xt(null),i=xt(!1),s=[Hd,qd,om,hv,xv,c2,A2,w2,_2,H2,X2,ox,mx],o=s.length,a=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Video","Game","Ray Trace","Transparency","PBR","BVH","Monte Carlo","Radix Sort"],c=xt(null),l=xt(0),u=xt(0),f=xt(!0);function h(){const M=window.location.pathname.split("/").filter(Boolean),E=M.at(-1),B=Number.parseInt(E??"",10);if(!Number.isNaN(B)&&B>=1&&B<=o){const P=M.slice(0,-1);return{exampleIndex:B,basePath:P.length>0?`/${P.join("/")}`:""}}return{exampleIndex:Bx,basePath:M.length>0?`/${M.join("/")}`:""}}const{basePath:m}=h();function d(M){window.history.replaceState(null,"",`${m}/${M}`)}async function p(M){if(!i.value){if(i.value=!0,d(M),n.value&&typeof n.value.cleanup=="function"&&(await n.value.cleanup(),n.value=null),e.value){const E=s[M-1];E&&(n.value=await E(e.value))}i.value=!1}}function b(M,E){c.value=M;const B=E.currentTarget,P=B.parentElement;if(P){const S=P.getBoundingClientRect(),G=B.getBoundingClientRect();l.value=G.top-S.top,u.value=G.height}}function y(){c.value=null}const x=Bn(()=>c.value!==null?a[c.value-1]:""),C=Bn(()=>c.value===null?{top:l.value+"px",height:u.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:l.value+"px",height:u.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});function g(){f.value=!f.value}return el(async()=>{Ol(),await Jc(),r.value&&Id(r.value);const{exampleIndex:M}=h();p(M)}),(M,E)=>(Ur(),Fr("div",gx,[Re("div",bx,[(Ur(!0),Fr(ht,null,rl(Hc(o),B=>(Ur(),Fr("button",{key:B,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>p(B),onKeydown:[E[0]||(E[0]=ma(da(()=>{},["prevent"]),["space"])),E[1]||(E[1]=ma(da(()=>{},["prevent"]),["enter"]))],onMouseenter:P=>b(B,P),onMouseleave:y},Rr(B),41,yx))),128))]),Re("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:e,class:"w-[90%] h-full"},null,512),E[2]||(E[2]=Re("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),$t(Nd,{id:"profiler",class:"absolute top-2 left-[calc(10%+0.5rem)] w-48",ref_key:"profiler",ref:r,maxBars:60},null,512),Re("div",vx,[Re("button",{onClick:g,class:"m-0 p-0 bg-white text-black flex items-center"},[Re("img",{src:od,class:pn([f.value?"rotate-90":"-rotate-90","w-6 h-6 transition-transform duration-200"])},null,2),Al(" "+Rr(f.value?"Hide":"Show")+" Utils ",1)]),wf(Re("pre",xx,null,512),[[Fh,f.value]])]),Re("div",{class:pn(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",c.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:jr(C.value)},Rr(x.value),7)]))}}),Tx=(t,e)=>{const r=t.__vccOpts||t;for(const[n,i]of e)r[n]=i;return r},Cx=Tx(Ax,[["__scopeId","data-v-345ef293"]]);nd(Cx).mount("#app");
