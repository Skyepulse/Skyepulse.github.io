(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ra(t){const e=Object.create(null);for(const r of t.split(","))e[r]=1;return r=>r in e}const ve={},Ir=[],Ct=()=>{},Nc=()=>!1,Mi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),na=t=>t.startsWith("onUpdate:"),Ve=Object.assign,ia=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},Vc=Object.prototype.hasOwnProperty,ce=(t,e)=>Vc.call(t,e),re=Array.isArray,Gr=t=>Si(t)==="[object Map]",Tl=t=>Si(t)==="[object Set]",ie=t=>typeof t=="function",Oe=t=>typeof t=="string",ir=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Ml=t=>(Ee(t)||ie(t))&&ie(t.then)&&ie(t.catch),Sl=Object.prototype.toString,Si=t=>Sl.call(t),Hc=t=>Si(t).slice(8,-1),Pl=t=>Si(t)==="[object Object]",sa=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dn=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},kc=/-(\w)/g,er=Pi(t=>t.replace(kc,(e,r)=>r?r.toUpperCase():"")),jc=/\B([A-Z])/g,sr=Pi(t=>t.replace(jc,"-$1").toLowerCase()),El=Pi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ji=Pi(t=>t?`on${El(t)}`:""),$t=(t,e)=>!Object.is(t,e),Yi=(t,...e)=>{for(let r=0;r<t.length;r++)t[r](...e)},Gs=(t,e,r,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:r})},zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ka;const Ei=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kr(t){if(re(t)){const e={};for(let r=0;r<t.length;r++){const n=t[r],i=Oe(n)?Jc(n):kr(n);if(i)for(const s in i)e[s]=i[s]}return e}else if(Oe(t)||Ee(t))return t}const Wc=/;(?![^(]*\))/g,qc=/:([^]+)/,Kc=/\/\*[^]*?\*\//g;function Jc(t){const e={};return t.replace(Kc,"").split(Wc).forEach(r=>{if(r){const n=r.split(qc);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Tn(t){let e="";if(Oe(t))e=t;else if(re(t))for(let r=0;r<t.length;r++){const n=Tn(t[r]);n&&(e+=n+" ")}else if(Ee(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const Yc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xc=ra(Yc);function Cl(t){return!!t||t===""}const wl=t=>!!(t&&t.__v_isRef===!0),_r=t=>Oe(t)?t:t==null?"":re(t)||Ee(t)&&(t.toString===Sl||!ie(t.toString))?wl(t)?_r(t.value):JSON.stringify(t,Rl,2):String(t),Rl=(t,e)=>wl(e)?Rl(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[n,i],s)=>(r[Xi(n,s)+" =>"]=i,r),{})}:Tl(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>Xi(r))}:ir(e)?Xi(e):Ee(e)&&!re(e)&&!Pl(e)?String(e):e,Xi=(t,e="")=>{var r;return ir(t)?`Symbol(${(r=t.description)!=null?r:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Qc{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){const r=Ke;try{return Ke=this,e()}finally{Ke=r}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){this._on>0&&--this._on===0&&(Ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function $c(){return Ke}let Be;const Qi=new WeakSet;class Ol{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qi.has(this)&&(Qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ja(this),_l(this);const e=Be,r=bt;Be=this,bt=!0;try{return this.fn()}finally{Ul(this),Be=e,bt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)la(e);this.deps=this.depsTail=void 0,ja(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let Il=0,hn,mn;function Gl(t,e=!1){if(t.flags|=8,e){t.next=mn,mn=t;return}t.next=hn,hn=t}function aa(){Il++}function oa(){if(--Il>0)return;if(mn){let e=mn;for(mn=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let t;for(;hn;){let e=hn;for(hn=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=r}}if(t)throw t}function _l(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ul(t){let e,r=t.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),la(n),Zc(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}t.deps=e,t.depsTail=r}function _s(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Dl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mn)||(t.globalVersion=Mn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!_s(t))))return;t.flags|=2;const e=t.dep,r=Be,n=bt;Be=t,bt=!0;try{_l(t);const i=t.fn(t._value);(e.version===0||$t(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Be=r,bt=n,Ul(t),t.flags&=-3}}function la(t,e=!1){const{dep:r,prevSub:n,nextSub:i}=t;if(n&&(n.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=n,t.nextSub=void 0),r.subs===t&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)la(s,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function Zc(t){const{prevDep:e,nextDep:r}=t;e&&(e.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=e,t.nextDep=void 0)}let bt=!0;const Fl=[];function Vt(){Fl.push(bt),bt=!1}function Ht(){const t=Fl.pop();bt=t===void 0?!0:t}function ja(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const r=Be;Be=void 0;try{e()}finally{Be=r}}}let Mn=0;class ef{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ua{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Be||!bt||Be===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Be)r=this.activeLink=new ef(Be,this),Be.deps?(r.prevDep=Be.depsTail,Be.depsTail.nextDep=r,Be.depsTail=r):Be.deps=Be.depsTail=r,Ll(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Be.depsTail,r.nextDep=void 0,Be.depsTail.nextDep=r,Be.depsTail=r,Be.deps===r&&(Be.deps=n)}return r}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){aa();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{oa()}}}function Ll(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Ll(n)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const Us=new WeakMap,br=Symbol(""),Ds=Symbol(""),Sn=Symbol("");function Le(t,e,r){if(bt&&Be){let n=Us.get(t);n||Us.set(t,n=new Map);let i=n.get(r);i||(n.set(r,i=new ua),i.map=n,i.key=r),i.track()}}function Dt(t,e,r,n,i,s){const a=Us.get(t);if(!a){Mn++;return}const o=l=>{l&&l.trigger()};if(aa(),e==="clear")a.forEach(o);else{const l=re(t),u=l&&sa(r);if(l&&r==="length"){const c=Number(n);a.forEach((f,d)=>{(d==="length"||d===Sn||!ir(d)&&d>=c)&&o(f)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),u&&o(a.get(Sn)),e){case"add":l?u&&o(a.get("length")):(o(a.get(br)),Gr(t)&&o(a.get(Ds)));break;case"delete":l||(o(a.get(br)),Gr(t)&&o(a.get(Ds)));break;case"set":Gr(t)&&o(a.get(br));break}}oa()}function Ar(t){const e=ue(t);return e===t?e:(Le(e,"iterate",Sn),ut(t)?e:e.map(Ue))}function Ci(t){return Le(t=ue(t),"iterate",Sn),t}const tf={__proto__:null,[Symbol.iterator](){return $i(this,Symbol.iterator,Ue)},concat(...t){return Ar(this).concat(...t.map(e=>re(e)?Ar(e):e))},entries(){return $i(this,"entries",t=>(t[1]=Ue(t[1]),t))},every(t,e){return Ot(this,"every",t,e,void 0,arguments)},filter(t,e){return Ot(this,"filter",t,e,r=>r.map(Ue),arguments)},find(t,e){return Ot(this,"find",t,e,Ue,arguments)},findIndex(t,e){return Ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ot(this,"findLast",t,e,Ue,arguments)},findLastIndex(t,e){return Ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zi(this,"includes",t)},indexOf(...t){return Zi(this,"indexOf",t)},join(t){return Ar(this).join(t)},lastIndexOf(...t){return Zi(this,"lastIndexOf",t)},map(t,e){return Ot(this,"map",t,e,void 0,arguments)},pop(){return sn(this,"pop")},push(...t){return sn(this,"push",t)},reduce(t,...e){return za(this,"reduce",t,e)},reduceRight(t,...e){return za(this,"reduceRight",t,e)},shift(){return sn(this,"shift")},some(t,e){return Ot(this,"some",t,e,void 0,arguments)},splice(...t){return sn(this,"splice",t)},toReversed(){return Ar(this).toReversed()},toSorted(t){return Ar(this).toSorted(t)},toSpliced(...t){return Ar(this).toSpliced(...t)},unshift(...t){return sn(this,"unshift",t)},values(){return $i(this,"values",Ue)}};function $i(t,e,r){const n=Ci(t),i=n[e]();return n!==t&&!ut(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=r(s.value)),s}),i}const rf=Array.prototype;function Ot(t,e,r,n,i,s){const a=Ci(t),o=a!==t&&!ut(t),l=a[e];if(l!==rf[e]){const f=l.apply(t,s);return o?Ue(f):f}let u=r;a!==t&&(o?u=function(f,d){return r.call(this,Ue(f),d,t)}:r.length>2&&(u=function(f,d){return r.call(this,f,d,t)}));const c=l.call(a,u,n);return o&&i?i(c):c}function za(t,e,r,n){const i=Ci(t);let s=r;return i!==t&&(ut(t)?r.length>3&&(s=function(a,o,l){return r.call(this,a,o,l,t)}):s=function(a,o,l){return r.call(this,a,Ue(o),l,t)}),i[e](s,...n)}function Zi(t,e,r){const n=ue(t);Le(n,"iterate",Sn);const i=n[e](...r);return(i===-1||i===!1)&&ha(r[0])?(r[0]=ue(r[0]),n[e](...r)):i}function sn(t,e,r=[]){Vt(),aa();const n=ue(t)[e].apply(t,r);return oa(),Ht(),n}const nf=ra("__proto__,__v_isRef,__isVue"),Nl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ir));function sf(t){ir(t)||(t=String(t));const e=ue(this);return Le(e,"has",t),e.hasOwnProperty(t)}class Vl{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,n){if(r==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?pf:zl:s?jl:kl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=re(e);if(!i){let l;if(a&&(l=tf[r]))return l;if(r==="hasOwnProperty")return sf}const o=Reflect.get(e,r,Ne(e)?e:n);return(ir(r)?Nl.has(r):nf(r))||(i||Le(e,"get",r),s)?o:Ne(o)?a&&sa(r)?o:o.value:Ee(o)?i?Wl(o):fa(o):o}}class Hl extends Vl{constructor(e=!1){super(!1,e)}set(e,r,n,i){let s=e[r];if(!this._isShallow){const l=tr(s);if(!ut(n)&&!tr(n)&&(s=ue(s),n=ue(n)),!re(e)&&Ne(s)&&!Ne(n))return l?!1:(s.value=n,!0)}const a=re(e)&&sa(r)?Number(r)<e.length:ce(e,r),o=Reflect.set(e,r,n,Ne(e)?e:i);return e===ue(i)&&(a?$t(n,s)&&Dt(e,"set",r,n):Dt(e,"add",r,n)),o}deleteProperty(e,r){const n=ce(e,r);e[r];const i=Reflect.deleteProperty(e,r);return i&&n&&Dt(e,"delete",r,void 0),i}has(e,r){const n=Reflect.has(e,r);return(!ir(r)||!Nl.has(r))&&Le(e,"has",r),n}ownKeys(e){return Le(e,"iterate",re(e)?"length":br),Reflect.ownKeys(e)}}class af extends Vl{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const of=new Hl,lf=new af,uf=new Hl(!0);const Fs=t=>t,Vn=t=>Reflect.getPrototypeOf(t);function cf(t,e,r){return function(...n){const i=this.__v_raw,s=ue(i),a=Gr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,u=i[t](...n),c=r?Fs:e?ai:Ue;return!e&&Le(s,"iterate",l?Ds:br),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function Hn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ff(t,e){const r={get(i){const s=this.__v_raw,a=ue(s),o=ue(i);t||($t(i,o)&&Le(a,"get",i),Le(a,"get",o));const{has:l}=Vn(a),u=e?Fs:t?ai:Ue;if(l.call(a,i))return u(s.get(i));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Le(ue(i),"iterate",br),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,a=ue(s),o=ue(i);return t||($t(i,o)&&Le(a,"has",i),Le(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ue(o),u=e?Fs:t?ai:Ue;return!t&&Le(l,"iterate",br),o.forEach((c,f)=>i.call(s,u(c),u(f),a))}};return Ve(r,t?{add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear")}:{add(i){!e&&!ut(i)&&!tr(i)&&(i=ue(i));const s=ue(this);return Vn(s).has.call(s,i)||(s.add(i),Dt(s,"add",i,i)),this},set(i,s){!e&&!ut(s)&&!tr(s)&&(s=ue(s));const a=ue(this),{has:o,get:l}=Vn(a);let u=o.call(a,i);u||(i=ue(i),u=o.call(a,i));const c=l.call(a,i);return a.set(i,s),u?$t(s,c)&&Dt(a,"set",i,s):Dt(a,"add",i,s),this},delete(i){const s=ue(this),{has:a,get:o}=Vn(s);let l=a.call(s,i);l||(i=ue(i),l=a.call(s,i)),o&&o.call(s,i);const u=s.delete(i);return l&&Dt(s,"delete",i,void 0),u},clear(){const i=ue(this),s=i.size!==0,a=i.clear();return s&&Dt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=cf(i,t,e)}),r}function ca(t,e){const r=ff(t,e);return(n,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?n:Reflect.get(ce(r,i)&&i in n?r:n,i,s)}const df={get:ca(!1,!1)},hf={get:ca(!1,!0)},mf={get:ca(!0,!1)};const kl=new WeakMap,jl=new WeakMap,zl=new WeakMap,pf=new WeakMap;function gf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bf(t){return t.__v_skip||!Object.isExtensible(t)?0:gf(Hc(t))}function fa(t){return tr(t)?t:da(t,!1,of,df,kl)}function yf(t){return da(t,!1,uf,hf,jl)}function Wl(t){return da(t,!0,lf,mf,zl)}function da(t,e,r,n,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=bf(t);if(s===0)return t;const a=i.get(t);if(a)return a;const o=new Proxy(t,s===2?n:r);return i.set(t,o),o}function Ur(t){return tr(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function ut(t){return!!(t&&t.__v_isShallow)}function ha(t){return t?!!t.__v_raw:!1}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function vf(t){return!ce(t,"__v_skip")&&Object.isExtensible(t)&&Gs(t,"__v_skip",!0),t}const Ue=t=>Ee(t)?fa(t):t,ai=t=>Ee(t)?Wl(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function Tt(t){return xf(t,!1)}function xf(t,e){return Ne(t)?t:new Bf(t,e)}class Bf{constructor(e,r){this.dep=new ua,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:ue(e),this._value=r?e:Ue(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,n=this.__v_isShallow||ut(e)||tr(e);e=n?e:ue(e),$t(e,r)&&(this._rawValue=e,this._value=n?e:Ue(e),this.dep.trigger())}}function ql(t){return Ne(t)?t.value:t}const Af={get:(t,e,r)=>e==="__v_raw"?t:ql(Reflect.get(t,e,r)),set:(t,e,r,n)=>{const i=t[e];return Ne(i)&&!Ne(r)?(i.value=r,!0):Reflect.set(t,e,r,n)}};function Kl(t){return Ur(t)?t:new Proxy(t,Af)}class Tf{constructor(e,r,n){this.fn=e,this.setter=r,this._value=void 0,this.dep=new ua(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return Gl(this,!0),!0}get value(){const e=this.dep.track();return Dl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mf(t,e,r=!1){let n,i;return ie(t)?n=t:(n=t.get,i=t.set),new Tf(n,i,r)}const kn={},oi=new WeakMap;let dr;function Sf(t,e=!1,r=dr){if(r){let n=oi.get(r);n||oi.set(r,n=[]),n.push(t)}}function Pf(t,e,r=ve){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,u=y=>i?y:ut(y)||i===!1||i===0?Ft(y,1):Ft(y);let c,f,d,m,h=!1,p=!1;if(Ne(t)?(f=()=>t.value,h=ut(t)):Ur(t)?(f=()=>u(t),h=!0):re(t)?(p=!0,h=t.some(y=>Ur(y)||ut(y)),f=()=>t.map(y=>{if(Ne(y))return y.value;if(Ur(y))return u(y);if(ie(y))return l?l(y,2):y()})):ie(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Vt();try{d()}finally{Ht()}}const y=dr;dr=c;try{return l?l(t,3,[m]):t(m)}finally{dr=y}}:f=Ct,e&&i){const y=f,P=i===!0?1/0:i;f=()=>Ft(y(),P)}const b=$c(),g=()=>{c.stop(),b&&b.active&&ia(b.effects,c)};if(s&&e){const y=e;e=(...P)=>{y(...P),g()}}let v=p?new Array(t.length).fill(kn):kn;const S=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const P=c.run();if(i||h||(p?P.some((C,A)=>$t(C,v[A])):$t(P,v))){d&&d();const C=dr;dr=c;try{const A=[P,v===kn?void 0:p&&v[0]===kn?[]:v,m];v=P,l?l(e,3,A):e(...A)}finally{dr=C}}}else c.run()};return o&&o(S),c=new Ol(f),c.scheduler=a?()=>a(S,!1):S,m=y=>Sf(y,!1,c),d=c.onStop=()=>{const y=oi.get(c);if(y){if(l)l(y,4);else for(const P of y)P();oi.delete(c)}},e?n?S(!0):v=c.run():a?a(S.bind(null,!0),!0):c.run(),g.pause=c.pause.bind(c),g.resume=c.resume.bind(c),g.stop=g,g}function Ft(t,e=1/0,r){if(e<=0||!Ee(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),e--,Ne(t))Ft(t.value,e,r);else if(re(t))for(let n=0;n<t.length;n++)Ft(t[n],e,r);else if(Tl(t)||Gr(t))t.forEach(n=>{Ft(n,e,r)});else if(Pl(t)){for(const n in t)Ft(t[n],e,r);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&Ft(t[n],e,r)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gn(t,e,r,n){try{return n?t(...n):t()}catch(i){wi(i,e,r)}}function wt(t,e,r,n){if(ie(t)){const i=Gn(t,e,r,n);return i&&Ml(i)&&i.catch(s=>{wi(s,e,r)}),i}if(re(t)){const i=[];for(let s=0;s<t.length;s++)i.push(wt(t[s],e,r,n));return i}}function wi(t,e,r,n=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ve;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}o=o.parent}if(s){Vt(),Gn(s,null,10,[t,l,u]),Ht();return}}Ef(t,r,i,n,a)}function Ef(t,e,r,n=!0,i=!1){if(i)throw t;console.error(t)}const ke=[];let Mt=-1;const Dr=[];let Kt=null,Cr=0;const Jl=Promise.resolve();let li=null;function Yl(t){const e=li||Jl;return t?e.then(this?t.bind(this):t):e}function Cf(t){let e=Mt+1,r=ke.length;for(;e<r;){const n=e+r>>>1,i=ke[n],s=Pn(i);s<t||s===t&&i.flags&2?e=n+1:r=n}return e}function ma(t){if(!(t.flags&1)){const e=Pn(t),r=ke[ke.length-1];!r||!(t.flags&2)&&e>=Pn(r)?ke.push(t):ke.splice(Cf(e),0,t),t.flags|=1,Xl()}}function Xl(){li||(li=Jl.then($l))}function wf(t){re(t)?Dr.push(...t):Kt&&t.id===-1?Kt.splice(Cr+1,0,t):t.flags&1||(Dr.push(t),t.flags|=1),Xl()}function Wa(t,e,r=Mt+1){for(;r<ke.length;r++){const n=ke[r];if(n&&n.flags&2){if(t&&n.id!==t.uid)continue;ke.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ql(t){if(Dr.length){const e=[...new Set(Dr)].sort((r,n)=>Pn(r)-Pn(n));if(Dr.length=0,Kt){Kt.push(...e);return}for(Kt=e,Cr=0;Cr<Kt.length;Cr++){const r=Kt[Cr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Kt=null,Cr=0}}const Pn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $l(t){try{for(Mt=0;Mt<ke.length;Mt++){const e=ke[Mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mt<ke.length;Mt++){const e=ke[Mt];e&&(e.flags&=-2)}Mt=-1,ke.length=0,Ql(),li=null,(ke.length||Dr.length)&&$l()}}let ot=null,Zl=null;function ui(t){const e=ot;return ot=t,Zl=t&&t.type.__scopeId||null,e}function Rf(t,e=ot,r){if(!e||t._n)return t;const n=(...i)=>{n._d&&eo(-1);const s=ui(e);let a;try{a=t(...i)}finally{ui(s),n._d&&eo(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Of(t,e){if(ot===null)return t;const r=Gi(ot),n=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,a,o,l=ve]=e[i];s&&(ie(s)&&(s={mounted:s,updated:s}),s.deep&&Ft(a),n.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function ur(t,e,r,n){const i=t.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(Vt(),wt(l,r,8,[t.el,o,t,e]),Ht())}}const If=Symbol("_vte"),Gf=t=>t.__isTeleport;function pa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,pa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function eu(t,e){return ie(t)?Ve({name:t.name},e,{setup:t}):t}function tu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pn(t,e,r,n,i=!1){if(re(t)){t.forEach((h,p)=>pn(h,e&&(re(e)?e[p]:e),r,n,i));return}if(gn(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&pn(t,e,r,n.component.subTree);return}const s=n.shapeFlag&4?Gi(n.component):n.el,a=i?null:s,{i:o,r:l}=t,u=e&&e.r,c=o.refs===ve?o.refs={}:o.refs,f=o.setupState,d=ue(f),m=f===ve?()=>!1:h=>ce(d,h);if(u!=null&&u!==l&&(Oe(u)?(c[u]=null,m(u)&&(f[u]=null)):Ne(u)&&(u.value=null)),ie(l))Gn(l,o,12,[a,c]);else{const h=Oe(l),p=Ne(l);if(h||p){const b=()=>{if(t.f){const g=h?m(l)?f[l]:c[l]:l.value;i?re(g)&&ia(g,s):re(g)?g.includes(s)||g.push(s):h?(c[l]=[s],m(l)&&(f[l]=c[l])):(l.value=[s],t.k&&(c[t.k]=l.value))}else h?(c[l]=a,m(l)&&(f[l]=a)):p&&(l.value=a,t.k&&(c[t.k]=a))};a?(b.id=-1,Ze(b,r)):b()}}}Ei().requestIdleCallback;Ei().cancelIdleCallback;const gn=t=>!!t.type.__asyncLoader,ru=t=>t.type.__isKeepAlive;function _f(t,e){nu(t,"a",e)}function Uf(t,e){nu(t,"da",e)}function nu(t,e,r=je){const n=t.__wdc||(t.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ri(e,n,r),r){let i=r.parent;for(;i&&i.parent;)ru(i.parent.vnode)&&Df(n,e,r,i),i=i.parent}}function Df(t,e,r,n){const i=Ri(e,t,n,!0);su(()=>{ia(n[e],i)},r)}function Ri(t,e,r=je,n=!1){if(r){const i=r[t]||(r[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Vt();const o=_n(r),l=wt(e,r,t,a);return o(),Ht(),l});return n?i.unshift(s):i.push(s),s}}const zt=t=>(e,r=je)=>{(!Cn||t==="sp")&&Ri(t,(...n)=>e(...n),r)},Ff=zt("bm"),iu=zt("m"),Lf=zt("bu"),Nf=zt("u"),Vf=zt("bum"),su=zt("um"),Hf=zt("sp"),kf=zt("rtg"),jf=zt("rtc");function zf(t,e=je){Ri("ec",t,e)}const Wf=Symbol.for("v-ndc");function au(t,e,r,n){let i;const s=r,a=re(t);if(a||Oe(t)){const o=a&&Ur(t);let l=!1,u=!1;o&&(l=!ut(t),u=tr(t),t=Ci(t)),i=new Array(t.length);for(let c=0,f=t.length;c<f;c++)i[c]=e(l?u?ai(Ue(t[c])):Ue(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s)}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];i[l]=e(t[c],c,l,s)}}else i=[];return i}const Ls=t=>t?Eu(t)?Gi(t):Ls(t.parent):null,bn=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ls(t.parent),$root:t=>Ls(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lu(t),$forceUpdate:t=>t.f||(t.f=()=>{ma(t.update)}),$nextTick:t=>t.n||(t.n=Yl.bind(t.proxy)),$watch:t=>hd.bind(t)}),es=(t,e)=>t!==ve&&!t.__isScriptSetup&&ce(t,e),qf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=t;let u;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return r[e];case 3:return s[e]}else{if(es(n,e))return a[e]=1,n[e];if(i!==ve&&ce(i,e))return a[e]=2,i[e];if((u=t.propsOptions[0])&&ce(u,e))return a[e]=3,s[e];if(r!==ve&&ce(r,e))return a[e]=4,r[e];Ns&&(a[e]=0)}}const c=bn[e];let f,d;if(c)return e==="$attrs"&&Le(t.attrs,"get",""),c(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(r!==ve&&ce(r,e))return a[e]=4,r[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,r){const{data:n,setupState:i,ctx:s}=t;return es(i,e)?(i[e]=r,!0):n!==ve&&ce(n,e)?(n[e]=r,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!r[a]||t!==ve&&ce(t,a)||es(e,a)||(o=s[0])&&ce(o,a)||ce(n,a)||ce(bn,a)||ce(i.config.globalProperties,a)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:ce(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function qa(t){return re(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}let Ns=!0;function Kf(t){const e=lu(t),r=t.proxy,n=t.ctx;Ns=!1,e.beforeCreate&&Ka(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:m,updated:h,activated:p,deactivated:b,beforeDestroy:g,beforeUnmount:v,destroyed:S,unmounted:y,render:P,renderTracked:C,renderTriggered:A,errorCaptured:R,serverPrefetch:M,expose:G,inheritAttrs:D,components:F,directives:U,filters:O}=e;if(u&&Jf(u,n,null),a)for(const _ in a){const w=a[_];ie(w)&&(n[_]=w.bind(r))}if(i){const _=i.call(r,r);Ee(_)&&(t.data=fa(_))}if(Ns=!0,s)for(const _ in s){const w=s[_],K=ie(w)?w.bind(r,r):ie(w.get)?w.get.bind(r,r):Ct,ee=!ie(w)&&ie(w.set)?w.set.bind(r):Ct,$=wn({get:K,set:ee});Object.defineProperty(n,_,{enumerable:!0,configurable:!0,get:()=>$.value,set:J=>$.value=J})}if(o)for(const _ in o)ou(o[_],n,r,_);if(l){const _=ie(l)?l.call(r):l;Reflect.ownKeys(_).forEach(w=>{ed(w,_[w])})}c&&Ka(c,t,"c");function N(_,w){re(w)?w.forEach(K=>_(K.bind(r))):w&&_(w.bind(r))}if(N(Ff,f),N(iu,d),N(Lf,m),N(Nf,h),N(_f,p),N(Uf,b),N(zf,R),N(jf,C),N(kf,A),N(Vf,v),N(su,y),N(Hf,M),re(G))if(G.length){const _=t.exposed||(t.exposed={});G.forEach(w=>{Object.defineProperty(_,w,{get:()=>r[w],set:K=>r[w]=K,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===Ct&&(t.render=P),D!=null&&(t.inheritAttrs=D),F&&(t.components=F),U&&(t.directives=U),M&&tu(t)}function Jf(t,e,r=Ct){re(t)&&(t=Vs(t));for(const n in t){const i=t[n];let s;Ee(i)?"default"in i?s=Qn(i.from||n,i.default,!0):s=Qn(i.from||n):s=Qn(i),Ne(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[n]=s}}function Ka(t,e,r){wt(re(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,r)}function ou(t,e,r,n){let i=n.includes(".")?Bu(r,n):()=>r[n];if(Oe(t)){const s=e[t];ie(s)&&rs(i,s)}else if(ie(t))rs(i,t.bind(r));else if(Ee(t))if(re(t))t.forEach(s=>ou(s,e,r,n));else{const s=ie(t.handler)?t.handler.bind(r):e[t.handler];ie(s)&&rs(i,s,t)}}function lu(t){const e=t.type,{mixins:r,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!i.length&&!r&&!n?l=e:(l={},i.length&&i.forEach(u=>ci(l,u,a,!0)),ci(l,e,a)),Ee(e)&&s.set(e,l),l}function ci(t,e,r,n=!1){const{mixins:i,extends:s}=e;s&&ci(t,s,r,!0),i&&i.forEach(a=>ci(t,a,r,!0));for(const a in e)if(!(n&&a==="expose")){const o=Yf[a]||r&&r[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Yf={data:Ja,props:Ya,emits:Ya,methods:un,computed:un,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:un,directives:un,watch:Qf,provide:Ja,inject:Xf};function Ja(t,e){return e?t?function(){return Ve(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Xf(t,e){return un(Vs(t),Vs(e))}function Vs(t){if(re(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function un(t,e){return t?Ve(Object.create(null),t,e):e}function Ya(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ve(Object.create(null),qa(t),qa(e??{})):e}function Qf(t,e){if(!t)return e;if(!e)return t;const r=Ve(Object.create(null),t);for(const n in e)r[n]=He(t[n],e[n]);return r}function uu(){return{app:null,config:{isNativeTag:Nc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $f=0;function Zf(t,e){return function(n,i=null){ie(n)||(n=Ve({},n)),i!=null&&!Ee(i)&&(i=null);const s=uu(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:$f++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ud,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&ie(c.install)?(a.add(c),c.install(u,...f)):ie(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const m=u._ceVNode||Zt(n,i);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(m,c,d),l=!0,u._container=c,c.__vue_app__=u,Gi(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(wt(o,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Fr;Fr=u;try{return c()}finally{Fr=f}}};return u}}let Fr=null;function ed(t,e){if(je){let r=je.provides;const n=je.parent&&je.parent.provides;n===r&&(r=je.provides=Object.create(n)),r[t]=e}}function Qn(t,e,r=!1){const n=wd();if(n||Fr){let i=Fr?Fr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return r&&ie(e)?e.call(n&&n.proxy):e}}const cu={},fu=()=>Object.create(cu),du=t=>Object.getPrototypeOf(t)===cu;function td(t,e,r,n=!1){const i={},s=fu();t.propsDefaults=Object.create(null),hu(t,e,i,s);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);r?t.props=n?i:yf(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function rd(t,e,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=t,o=ue(i),[l]=t.propsOptions;let u=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Oi(t.emitsOptions,d))continue;const m=e[d];if(l)if(ce(s,d))m!==s[d]&&(s[d]=m,u=!0);else{const h=er(d);i[h]=Hs(l,o,h,m,t,!1)}else m!==s[d]&&(s[d]=m,u=!0)}}}else{hu(t,e,i,s)&&(u=!0);let c;for(const f in o)(!e||!ce(e,f)&&((c=sr(f))===f||!ce(e,c)))&&(l?r&&(r[f]!==void 0||r[c]!==void 0)&&(i[f]=Hs(l,o,f,void 0,t,!0)):delete i[f]);if(s!==o)for(const f in s)(!e||!ce(e,f))&&(delete s[f],u=!0)}u&&Dt(t.attrs,"set","")}function hu(t,e,r,n){const[i,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(dn(l))continue;const u=e[l];let c;i&&ce(i,c=er(l))?!s||!s.includes(c)?r[c]=u:(o||(o={}))[c]=u:Oi(t.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,a=!0)}if(s){const l=ue(r),u=o||ve;for(let c=0;c<s.length;c++){const f=s[c];r[f]=Hs(i,l,f,u[f],t,!ce(u,f))}}return a}function Hs(t,e,r,n,i,s){const a=t[r];if(a!=null){const o=ce(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ie(l)){const{propsDefaults:u}=i;if(r in u)n=u[r];else{const c=_n(i);n=u[r]=l.call(null,e),c()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===sr(r))&&(n=!0))}return n}const nd=new WeakMap;function mu(t,e,r=!1){const n=r?nd:e.propsCache,i=n.get(t);if(i)return i;const s=t.props,a={},o=[];let l=!1;if(!ie(t)){const c=f=>{l=!0;const[d,m]=mu(f,e,!0);Ve(a,d),m&&o.push(...m)};!r&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return Ee(t)&&n.set(t,Ir),Ir;if(re(s))for(let c=0;c<s.length;c++){const f=er(s[c]);Xa(f)&&(a[f]=ve)}else if(s)for(const c in s){const f=er(c);if(Xa(f)){const d=s[c],m=a[f]=re(d)||ie(d)?{type:d}:Ve({},d),h=m.type;let p=!1,b=!0;if(re(h))for(let g=0;g<h.length;++g){const v=h[g],S=ie(v)&&v.name;if(S==="Boolean"){p=!0;break}else S==="String"&&(b=!1)}else p=ie(h)&&h.name==="Boolean";m[0]=p,m[1]=b,(p||ce(m,"default"))&&o.push(f)}}const u=[a,o];return Ee(t)&&n.set(t,u),u}function Xa(t){return t[0]!=="$"&&!dn(t)}const ga=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",ba=t=>re(t)?t.map(Pt):[Pt(t)],id=(t,e,r)=>{if(e._n)return e;const n=Rf((...i)=>ba(e(...i)),r);return n._c=!1,n},pu=(t,e,r)=>{const n=t._ctx;for(const i in t){if(ga(i))continue;const s=t[i];if(ie(s))e[i]=id(i,s,n);else if(s!=null){const a=ba(s);e[i]=()=>a}}},gu=(t,e)=>{const r=ba(e);t.slots.default=()=>r},bu=(t,e,r)=>{for(const n in e)(r||!ga(n))&&(t[n]=e[n])},sd=(t,e,r)=>{const n=t.slots=fu();if(t.vnode.shapeFlag&32){const i=e.__;i&&Gs(n,"__",i,!0);const s=e._;s?(bu(n,e,r),r&&Gs(n,"_",s,!0)):pu(e,n)}else e&&gu(t,e)},ad=(t,e,r)=>{const{vnode:n,slots:i}=t;let s=!0,a=ve;if(n.shapeFlag&32){const o=e._;o?r&&o===1?s=!1:bu(i,e,r):(s=!e.$stable,pu(e,i)),a=e}else e&&(gu(t,e),a={default:1});if(s)for(const o in i)!ga(o)&&a[o]==null&&delete i[o]},Ze=xd;function od(t){return ld(t)}function ld(t,e){const r=Ei();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:m=Ct,insertStaticContent:h}=t,p=(x,T,I,H=null,L=null,V=null,W=void 0,z=null,j=!!T.dynamicChildren)=>{if(x===T)return;x&&!an(x,T)&&(H=Ce(x),J(x,L,V,!0),x=null),T.patchFlag===-2&&(j=!1,T.dynamicChildren=null);const{type:k,ref:Q,shapeFlag:q}=T;switch(k){case Ii:b(x,T,I,H);break;case jr:g(x,T,I,H);break;case ns:x==null&&v(T,I,H,W);break;case mt:F(x,T,I,H,L,V,W,z,j);break;default:q&1?P(x,T,I,H,L,V,W,z,j):q&6?U(x,T,I,H,L,V,W,z,j):(q&64||q&128)&&k.process(x,T,I,H,L,V,W,z,j,be)}Q!=null&&L?pn(Q,x&&x.ref,V,T||x,!T):Q==null&&x&&x.ref!=null&&pn(x.ref,null,V,x,!0)},b=(x,T,I,H)=>{if(x==null)n(T.el=o(T.children),I,H);else{const L=T.el=x.el;T.children!==x.children&&u(L,T.children)}},g=(x,T,I,H)=>{x==null?n(T.el=l(T.children||""),I,H):T.el=x.el},v=(x,T,I,H)=>{[x.el,x.anchor]=h(x.children,T,I,H,x.el,x.anchor)},S=({el:x,anchor:T},I,H)=>{let L;for(;x&&x!==T;)L=d(x),n(x,I,H),x=L;n(T,I,H)},y=({el:x,anchor:T})=>{let I;for(;x&&x!==T;)I=d(x),i(x),x=I;i(T)},P=(x,T,I,H,L,V,W,z,j)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),x==null?C(T,I,H,L,V,W,z,j):M(x,T,L,V,W,z,j)},C=(x,T,I,H,L,V,W,z)=>{let j,k;const{props:Q,shapeFlag:q,transition:Y,dirs:te}=x;if(j=x.el=a(x.type,V,Q&&Q.is,Q),q&8?c(j,x.children):q&16&&R(x.children,j,null,H,L,ts(x,V),W,z),te&&ur(x,null,H,"created"),A(j,x,x.scopeId,W,H),Q){for(const xe in Q)xe!=="value"&&!dn(xe)&&s(j,xe,null,Q[xe],V,H);"value"in Q&&s(j,"value",null,Q.value,V),(k=Q.onVnodeBeforeMount)&&Bt(k,H,x)}te&&ur(x,null,H,"beforeMount");const oe=ud(L,Y);oe&&Y.beforeEnter(j),n(j,T,I),((k=Q&&Q.onVnodeMounted)||oe||te)&&Ze(()=>{k&&Bt(k,H,x),oe&&Y.enter(j),te&&ur(x,null,H,"mounted")},L)},A=(x,T,I,H,L)=>{if(I&&m(x,I),H)for(let V=0;V<H.length;V++)m(x,H[V]);if(L){let V=L.subTree;if(T===V||Tu(V.type)&&(V.ssContent===T||V.ssFallback===T)){const W=L.vnode;A(x,W,W.scopeId,W.slotScopeIds,L.parent)}}},R=(x,T,I,H,L,V,W,z,j=0)=>{for(let k=j;k<x.length;k++){const Q=x[k]=z?Jt(x[k]):Pt(x[k]);p(null,Q,T,I,H,L,V,W,z)}},M=(x,T,I,H,L,V,W)=>{const z=T.el=x.el;let{patchFlag:j,dynamicChildren:k,dirs:Q}=T;j|=x.patchFlag&16;const q=x.props||ve,Y=T.props||ve;let te;if(I&&cr(I,!1),(te=Y.onVnodeBeforeUpdate)&&Bt(te,I,T,x),Q&&ur(T,x,I,"beforeUpdate"),I&&cr(I,!0),(q.innerHTML&&Y.innerHTML==null||q.textContent&&Y.textContent==null)&&c(z,""),k?G(x.dynamicChildren,k,z,I,H,ts(T,L),V):W||w(x,T,z,null,I,H,ts(T,L),V,!1),j>0){if(j&16)D(z,q,Y,I,L);else if(j&2&&q.class!==Y.class&&s(z,"class",null,Y.class,L),j&4&&s(z,"style",q.style,Y.style,L),j&8){const oe=T.dynamicProps;for(let xe=0;xe<oe.length;xe++){const me=oe[xe],ze=q[me],We=Y[me];(We!==ze||me==="value")&&s(z,me,ze,We,L,I)}}j&1&&x.children!==T.children&&c(z,T.children)}else!W&&k==null&&D(z,q,Y,I,L);((te=Y.onVnodeUpdated)||Q)&&Ze(()=>{te&&Bt(te,I,T,x),Q&&ur(T,x,I,"updated")},H)},G=(x,T,I,H,L,V,W)=>{for(let z=0;z<T.length;z++){const j=x[z],k=T[z],Q=j.el&&(j.type===mt||!an(j,k)||j.shapeFlag&198)?f(j.el):I;p(j,k,Q,null,H,L,V,W,!0)}},D=(x,T,I,H,L)=>{if(T!==I){if(T!==ve)for(const V in T)!dn(V)&&!(V in I)&&s(x,V,T[V],null,L,H);for(const V in I){if(dn(V))continue;const W=I[V],z=T[V];W!==z&&V!=="value"&&s(x,V,z,W,L,H)}"value"in I&&s(x,"value",T.value,I.value,L)}},F=(x,T,I,H,L,V,W,z,j)=>{const k=T.el=x?x.el:o(""),Q=T.anchor=x?x.anchor:o("");let{patchFlag:q,dynamicChildren:Y,slotScopeIds:te}=T;te&&(z=z?z.concat(te):te),x==null?(n(k,I,H),n(Q,I,H),R(T.children||[],I,Q,L,V,W,z,j)):q>0&&q&64&&Y&&x.dynamicChildren?(G(x.dynamicChildren,Y,I,L,V,W,z),(T.key!=null||L&&T===L.subTree)&&yu(x,T,!0)):w(x,T,I,Q,L,V,W,z,j)},U=(x,T,I,H,L,V,W,z,j)=>{T.slotScopeIds=z,x==null?T.shapeFlag&512?L.ctx.activate(T,I,H,W,j):O(T,I,H,L,V,W,j):B(x,T,j)},O=(x,T,I,H,L,V,W)=>{const z=x.component=Cd(x,H,L);if(ru(x)&&(z.ctx.renderer=be),Rd(z,!1,W),z.asyncDep){if(L&&L.registerDep(z,N,W),!x.el){const j=z.subTree=Zt(jr);g(null,j,T,I),x.placeholder=j.el}}else N(z,x,T,I,L,V,W)},B=(x,T,I)=>{const H=T.component=x.component;if(yd(x,T,I))if(H.asyncDep&&!H.asyncResolved){_(H,T,I);return}else H.next=T,H.update();else T.el=x.el,H.vnode=T},N=(x,T,I,H,L,V,W)=>{const z=()=>{if(x.isMounted){let{next:q,bu:Y,u:te,parent:oe,vnode:xe}=x;{const vt=vu(x);if(vt){q&&(q.el=xe.el,_(x,q,W)),vt.asyncDep.then(()=>{x.isUnmounted||z()});return}}let me=q,ze;cr(x,!1),q?(q.el=xe.el,_(x,q,W)):q=xe,Y&&Yi(Y),(ze=q.props&&q.props.onVnodeBeforeUpdate)&&Bt(ze,oe,q,xe),cr(x,!0);const We=$a(x),yt=x.subTree;x.subTree=We,p(yt,We,f(yt.el),Ce(yt),x,L,V),q.el=We.el,me===null&&vd(x,We.el),te&&Ze(te,L),(ze=q.props&&q.props.onVnodeUpdated)&&Ze(()=>Bt(ze,oe,q,xe),L)}else{let q;const{el:Y,props:te}=T,{bm:oe,m:xe,parent:me,root:ze,type:We}=x,yt=gn(T);cr(x,!1),oe&&Yi(oe),!yt&&(q=te&&te.onVnodeBeforeMount)&&Bt(q,me,T),cr(x,!0);{ze.ce&&ze.ce._def.shadowRoot!==!1&&ze.ce._injectChildStyle(We);const vt=x.subTree=$a(x);p(null,vt,I,H,x,L,V),T.el=vt.el}if(xe&&Ze(xe,L),!yt&&(q=te&&te.onVnodeMounted)){const vt=T;Ze(()=>Bt(q,me,vt),L)}(T.shapeFlag&256||me&&gn(me.vnode)&&me.vnode.shapeFlag&256)&&x.a&&Ze(x.a,L),x.isMounted=!0,T=I=H=null}};x.scope.on();const j=x.effect=new Ol(z);x.scope.off();const k=x.update=j.run.bind(j),Q=x.job=j.runIfDirty.bind(j);Q.i=x,Q.id=x.uid,j.scheduler=()=>ma(Q),cr(x,!0),k()},_=(x,T,I)=>{T.component=x;const H=x.vnode.props;x.vnode=T,x.next=null,rd(x,T.props,H,I),ad(x,T.children,I),Vt(),Wa(x),Ht()},w=(x,T,I,H,L,V,W,z,j=!1)=>{const k=x&&x.children,Q=x?x.shapeFlag:0,q=T.children,{patchFlag:Y,shapeFlag:te}=T;if(Y>0){if(Y&128){ee(k,q,I,H,L,V,W,z,j);return}else if(Y&256){K(k,q,I,H,L,V,W,z,j);return}}te&8?(Q&16&&Me(k,L,V),q!==k&&c(I,q)):Q&16?te&16?ee(k,q,I,H,L,V,W,z,j):Me(k,L,V,!0):(Q&8&&c(I,""),te&16&&R(q,I,H,L,V,W,z,j))},K=(x,T,I,H,L,V,W,z,j)=>{x=x||Ir,T=T||Ir;const k=x.length,Q=T.length,q=Math.min(k,Q);let Y;for(Y=0;Y<q;Y++){const te=T[Y]=j?Jt(T[Y]):Pt(T[Y]);p(x[Y],te,I,null,L,V,W,z,j)}k>Q?Me(x,L,V,!0,!1,q):R(T,I,H,L,V,W,z,j,q)},ee=(x,T,I,H,L,V,W,z,j)=>{let k=0;const Q=T.length;let q=x.length-1,Y=Q-1;for(;k<=q&&k<=Y;){const te=x[k],oe=T[k]=j?Jt(T[k]):Pt(T[k]);if(an(te,oe))p(te,oe,I,null,L,V,W,z,j);else break;k++}for(;k<=q&&k<=Y;){const te=x[q],oe=T[Y]=j?Jt(T[Y]):Pt(T[Y]);if(an(te,oe))p(te,oe,I,null,L,V,W,z,j);else break;q--,Y--}if(k>q){if(k<=Y){const te=Y+1,oe=te<Q?T[te].el:H;for(;k<=Y;)p(null,T[k]=j?Jt(T[k]):Pt(T[k]),I,oe,L,V,W,z,j),k++}}else if(k>Y)for(;k<=q;)J(x[k],L,V,!0),k++;else{const te=k,oe=k,xe=new Map;for(k=oe;k<=Y;k++){const Xe=T[k]=j?Jt(T[k]):Pt(T[k]);Xe.key!=null&&xe.set(Xe.key,k)}let me,ze=0;const We=Y-oe+1;let yt=!1,vt=0;const nn=new Array(We);for(k=0;k<We;k++)nn[k]=0;for(k=te;k<=q;k++){const Xe=x[k];if(ze>=We){J(Xe,L,V,!0);continue}let xt;if(Xe.key!=null)xt=xe.get(Xe.key);else for(me=oe;me<=Y;me++)if(nn[me-oe]===0&&an(Xe,T[me])){xt=me;break}xt===void 0?J(Xe,L,V,!0):(nn[xt-oe]=k+1,xt>=vt?vt=xt:yt=!0,p(Xe,T[xt],I,null,L,V,W,z,j),ze++)}const Na=yt?cd(nn):Ir;for(me=Na.length-1,k=We-1;k>=0;k--){const Xe=oe+k,xt=T[Xe],Va=T[Xe+1],Ha=Xe+1<Q?Va.el||Va.placeholder:H;nn[k]===0?p(null,xt,I,Ha,L,V,W,z,j):yt&&(me<0||k!==Na[me]?$(xt,I,Ha,2):me--)}}},$=(x,T,I,H,L=null)=>{const{el:V,type:W,transition:z,children:j,shapeFlag:k}=x;if(k&6){$(x.component.subTree,T,I,H);return}if(k&128){x.suspense.move(T,I,H);return}if(k&64){W.move(x,T,I,be);return}if(W===mt){n(V,T,I);for(let q=0;q<j.length;q++)$(j[q],T,I,H);n(x.anchor,T,I);return}if(W===ns){S(x,T,I);return}if(H!==2&&k&1&&z)if(H===0)z.beforeEnter(V),n(V,T,I),Ze(()=>z.enter(V),L);else{const{leave:q,delayLeave:Y,afterLeave:te}=z,oe=()=>{x.ctx.isUnmounted?i(V):n(V,T,I)},xe=()=>{q(V,()=>{oe(),te&&te()})};Y?Y(V,oe,xe):xe()}else n(V,T,I)},J=(x,T,I,H=!1,L=!1)=>{const{type:V,props:W,ref:z,children:j,dynamicChildren:k,shapeFlag:Q,patchFlag:q,dirs:Y,cacheIndex:te}=x;if(q===-2&&(L=!1),z!=null&&(Vt(),pn(z,null,I,x,!0),Ht()),te!=null&&(T.renderCache[te]=void 0),Q&256){T.ctx.deactivate(x);return}const oe=Q&1&&Y,xe=!gn(x);let me;if(xe&&(me=W&&W.onVnodeBeforeUnmount)&&Bt(me,T,x),Q&6)le(x.component,I,H);else{if(Q&128){x.suspense.unmount(I,H);return}oe&&ur(x,null,T,"beforeUnmount"),Q&64?x.type.remove(x,T,I,be,H):k&&!k.hasOnce&&(V!==mt||q>0&&q&64)?Me(k,T,I,!1,!0):(V===mt&&q&384||!L&&Q&16)&&Me(j,T,I),H&&se(x)}(xe&&(me=W&&W.onVnodeUnmounted)||oe)&&Ze(()=>{me&&Bt(me,T,x),oe&&ur(x,null,T,"unmounted")},I)},se=x=>{const{type:T,el:I,anchor:H,transition:L}=x;if(T===mt){Te(I,H);return}if(T===ns){y(x);return}const V=()=>{i(I),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(x.shapeFlag&1&&L&&!L.persisted){const{leave:W,delayLeave:z}=L,j=()=>W(I,V);z?z(x.el,V,j):j()}else V()},Te=(x,T)=>{let I;for(;x!==T;)I=d(x),i(x),x=I;i(T)},le=(x,T,I)=>{const{bum:H,scope:L,job:V,subTree:W,um:z,m:j,a:k,parent:Q,slots:{__:q}}=x;Qa(j),Qa(k),H&&Yi(H),Q&&re(q)&&q.forEach(Y=>{Q.renderCache[Y]=void 0}),L.stop(),V&&(V.flags|=8,J(W,x,T,I)),z&&Ze(z,T),Ze(()=>{x.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Me=(x,T,I,H=!1,L=!1,V=0)=>{for(let W=V;W<x.length;W++)J(x[W],T,I,H,L)},Ce=x=>{if(x.shapeFlag&6)return Ce(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const T=d(x.anchor||x.el),I=T&&T[If];return I?d(I):T};let Se=!1;const Ye=(x,T,I)=>{x==null?T._vnode&&J(T._vnode,null,null,!0):p(T._vnode||null,x,T,null,null,null,I),T._vnode=x,Se||(Se=!0,Wa(),Ql(),Se=!1)},be={p,um:J,m:$,r:se,mt:O,mc:R,pc:w,pbc:G,n:Ce,o:t};return{render:Ye,hydrate:void 0,createApp:Zf(Ye)}}function ts({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function cr({effect:t,job:e},r){r?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ud(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yu(t,e,r=!1){const n=t.children,i=e.children;if(re(n)&&re(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Jt(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&yu(a,o)),o.type===Ii&&(o.el=a.el),o.type===jr&&!o.el&&(o.el=a.el)}}function cd(t){const e=t.slice(),r=[0];let n,i,s,a,o;const l=t.length;for(n=0;n<l;n++){const u=t[n];if(u!==0){if(i=r[r.length-1],t[i]<u){e[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,t[r[o]]<u?s=o+1:a=o;u<t[r[s]]&&(s>0&&(e[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=e[a];return r}function vu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vu(e)}function Qa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fd=Symbol.for("v-scx"),dd=()=>Qn(fd);function rs(t,e,r){return xu(t,e,r)}function xu(t,e,r=ve){const{immediate:n,deep:i,flush:s,once:a}=r,o=Ve({},r),l=e&&n||!e&&s!=="post";let u;if(Cn){if(s==="sync"){const m=dd();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Ct,m.resume=Ct,m.pause=Ct,m}}const c=je;o.call=(m,h,p)=>wt(m,c,h,p);let f=!1;s==="post"?o.scheduler=m=>{Ze(m,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,h)=>{h?m():ma(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=Pf(t,e,o);return Cn&&(u?u.push(d):l&&d()),d}function hd(t,e,r){const n=this.proxy,i=Oe(t)?t.includes(".")?Bu(n,t):()=>n[t]:t.bind(n,n);let s;ie(e)?s=e:(s=e.handler,r=e);const a=_n(this),o=xu(i,s.bind(n),r);return a(),o}function Bu(t,e){const r=e.split(".");return()=>{let n=t;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const md=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${er(e)}Modifiers`]||t[`${sr(e)}Modifiers`];function pd(t,e,...r){if(t.isUnmounted)return;const n=t.vnode.props||ve;let i=r;const s=e.startsWith("update:"),a=s&&md(n,e.slice(7));a&&(a.trim&&(i=r.map(c=>Oe(c)?c.trim():c)),a.number&&(i=r.map(zc)));let o,l=n[o=Ji(e)]||n[o=Ji(er(e))];!l&&s&&(l=n[o=Ji(sr(e))]),l&&wt(l,t,6,i);const u=n[o+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,wt(u,t,6,i)}}function Au(t,e,r=!1){const n=e.emitsCache,i=n.get(t);if(i!==void 0)return i;const s=t.emits;let a={},o=!1;if(!ie(t)){const l=u=>{const c=Au(u,e,!0);c&&(o=!0,Ve(a,c))};!r&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(Ee(t)&&n.set(t,null),null):(re(s)?s.forEach(l=>a[l]=null):Ve(a,s),Ee(t)&&n.set(t,a),a)}function Oi(t,e){return!t||!Mi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,sr(e))||ce(t,e))}function $a(t){const{type:e,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:m,ctx:h,inheritAttrs:p}=t,b=ui(t);let g,v;try{if(r.shapeFlag&4){const y=i||n,P=y;g=Pt(u.call(P,y,c,f,m,d,h)),v=o}else{const y=e;g=Pt(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),v=e.props?o:gd(o)}}catch(y){yn.length=0,wi(y,t,1),g=Zt(jr)}let S=g;if(v&&p!==!1){const y=Object.keys(v),{shapeFlag:P}=S;y.length&&P&7&&(s&&y.some(na)&&(v=bd(v,s)),S=zr(S,v,!1,!0))}return r.dirs&&(S=zr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(r.dirs):r.dirs),r.transition&&pa(S,r.transition),g=S,ui(b),g}const gd=t=>{let e;for(const r in t)(r==="class"||r==="style"||Mi(r))&&((e||(e={}))[r]=t[r]);return e},bd=(t,e)=>{const r={};for(const n in t)(!na(n)||!(n.slice(9)in e))&&(r[n]=t[n]);return r};function yd(t,e,r){const{props:n,children:i,component:s}=t,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Za(n,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(a[d]!==n[d]&&!Oi(u,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Za(n,a,u):!0:!!a;return!1}function Za(t,e,r){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==t[s]&&!Oi(r,s))return!0}return!1}function vd({vnode:t,parent:e},r){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=r,e=e.parent;else break}}const Tu=t=>t.__isSuspense;function xd(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):wf(t)}const mt=Symbol.for("v-fgt"),Ii=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),yn=[];let rt=null;function Lr(t=!1){yn.push(rt=t?null:[])}function Bd(){yn.pop(),rt=yn[yn.length-1]||null}let En=1;function eo(t,e=!1){En+=t,t<0&&rt&&e&&(rt.hasOnce=!0)}function Ad(t){return t.dynamicChildren=En>0?rt||Ir:null,Bd(),En>0&&rt&&rt.push(t),t}function Nr(t,e,r,n,i,s){return Ad(_e(t,e,r,n,i,s,!0))}function Mu(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Su=({key:t})=>t??null,$n=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Ne(t)||ie(t)?{i:ot,r:t,k:e,f:!!r}:t:null);function _e(t,e=null,r=null,n=0,i=null,s=t===mt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Su(e),ref:e&&$n(e),scopeId:Zl,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return o?(ya(l,r),s&128&&t.normalize(l)):r&&(l.shapeFlag|=Oe(r)?8:16),En>0&&!a&&rt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rt.push(l),l}const Zt=Td;function Td(t,e=null,r=null,n=0,i=null,s=!1){if((!t||t===Wf)&&(t=jr),Mu(t)){const o=zr(t,e,!0);return r&&ya(o,r),En>0&&!s&&rt&&(o.shapeFlag&6?rt[rt.indexOf(t)]=o:rt.push(o)),o.patchFlag=-2,o}if(_d(t)&&(t=t.__vccOpts),e){e=Md(e);let{class:o,style:l}=e;o&&!Oe(o)&&(e.class=Tn(o)),Ee(l)&&(ha(l)&&!re(l)&&(l=Ve({},l)),e.style=kr(l))}const a=Oe(t)?1:Tu(t)?128:Gf(t)?64:Ee(t)?4:ie(t)?2:0;return _e(t,e,r,n,i,a,s,!0)}function Md(t){return t?ha(t)||du(t)?Ve({},t):t:null}function zr(t,e,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=t,u=e?Sd(i||{},e):i,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Su(u),ref:e&&e.ref?r&&s?re(s)?s.concat($n(e)):[s,$n(e)]:$n(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&n&&pa(c,l.clone(c)),c}function Pu(t=" ",e=0){return Zt(Ii,null,t,e)}function Pt(t){return t==null||typeof t=="boolean"?Zt(jr):re(t)?Zt(mt,null,t.slice()):Mu(t)?Jt(t):Zt(Ii,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function ya(t,e){let r=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(re(e))r=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),ya(t,i()),i._c&&(i._d=!0));return}else{r=32;const i=e._;!i&&!du(e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:ot},r=32):(e=String(e),n&64?(r=16,e=[Pu(e)]):r=8);t.children=e,t.shapeFlag|=r}function Sd(...t){const e={};for(let r=0;r<t.length;r++){const n=t[r];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=Tn([e.class,n.class]));else if(i==="style")e.style=kr([e.style,n.style]);else if(Mi(i)){const s=e[i],a=n[i];a&&s!==a&&!(re(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=n[i])}return e}function Bt(t,e,r,n=null){wt(t,e,7,[r,n])}const Pd=uu();let Ed=0;function Cd(t,e,r){const n=t.type,i=(e?e.appContext:t.appContext)||Pd,s={uid:Ed++,vnode:t,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(n,i),emitsOptions:Au(n,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:n.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=pd.bind(null,s),t.ce&&t.ce(s),s}let je=null;const wd=()=>je||ot;let fi,ks;{const t=Ei(),e=(r,n)=>{let i;return(i=t[r])||(i=t[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};fi=e("__VUE_INSTANCE_SETTERS__",r=>je=r),ks=e("__VUE_SSR_SETTERS__",r=>Cn=r)}const _n=t=>{const e=je;return fi(t),t.scope.on(),()=>{t.scope.off(),fi(e)}},to=()=>{je&&je.scope.off(),fi(null)};function Eu(t){return t.vnode.shapeFlag&4}let Cn=!1;function Rd(t,e=!1,r=!1){e&&ks(e);const{props:n,children:i}=t.vnode,s=Eu(t);td(t,n,s,e),sd(t,i,r||e);const a=s?Od(t,e):void 0;return e&&ks(!1),a}function Od(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qf);const{setup:n}=r;if(n){Vt();const i=t.setupContext=n.length>1?Gd(t):null,s=_n(t),a=Gn(n,t,0,[t.props,i]),o=Ml(a);if(Ht(),s(),(o||t.sp)&&!gn(t)&&tu(t),o){if(a.then(to,to),e)return a.then(l=>{ro(t,l)}).catch(l=>{wi(l,t,0)});t.asyncDep=a}else ro(t,a)}else Cu(t)}function ro(t,e,r){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Kl(e)),Cu(t)}function Cu(t,e,r){const n=t.type;t.render||(t.render=n.render||Ct);{const i=_n(t);Vt();try{Kf(t)}finally{Ht(),i()}}}const Id={get(t,e){return Le(t,"get",""),t[e]}};function Gd(t){const e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,Id),slots:t.slots,emit:t.emit,expose:e}}function Gi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kl(vf(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in bn)return bn[r](t)},has(e,r){return r in e||r in bn}})):t.proxy}function _d(t){return ie(t)&&"__vccOpts"in t}const wn=(t,e)=>Mf(t,e,Cn),Ud="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let js;const no=typeof window<"u"&&window.trustedTypes;if(no)try{js=no.createPolicy("vue",{createHTML:t=>t})}catch{}const wu=js?t=>js.createHTML(t):t=>t,Dd="http://www.w3.org/2000/svg",Fd="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,io=_t&&_t.createElement("template"),Ld={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,n)=>{const i=e==="svg"?_t.createElementNS(Dd,t):e==="mathml"?_t.createElementNS(Fd,t):r?_t.createElement(t,{is:r}):_t.createElement(t);return t==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,n,i,s){const a=r?r.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{io.innerHTML=wu(n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t);const o=io.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,r)}return[a?a.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},Nd=Symbol("_vtc");function Vd(t,e,r){const n=t[Nd];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const di=Symbol("_vod"),Ru=Symbol("_vsh"),Hd={beforeMount(t,{value:e},{transition:r}){t[di]=t.style.display==="none"?"":t.style.display,r&&e?r.beforeEnter(t):on(t,e)},mounted(t,{value:e},{transition:r}){r&&e&&r.enter(t)},updated(t,{value:e,oldValue:r},{transition:n}){!e!=!r&&(n?e?(n.beforeEnter(t),on(t,!0),n.enter(t)):n.leave(t,()=>{on(t,!1)}):on(t,e))},beforeUnmount(t,{value:e}){on(t,e)}};function on(t,e){t.style.display=e?t[di]:"none",t[Ru]=!e}const kd=Symbol(""),jd=/(^|;)\s*display\s*:/;function zd(t,e,r){const n=t.style,i=Oe(r);let s=!1;if(r&&!i){if(e)if(Oe(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Zn(n,o,"")}else for(const a in e)r[a]==null&&Zn(n,a,"");for(const a in r)a==="display"&&(s=!0),Zn(n,a,r[a])}else if(i){if(e!==r){const a=n[kd];a&&(r+=";"+a),n.cssText=r,s=jd.test(r)}}else e&&t.removeAttribute("style");di in t&&(t[di]=s?n.display:"",t[Ru]&&(n.display="none"))}const so=/\s*!important$/;function Zn(t,e,r){if(re(r))r.forEach(n=>Zn(t,e,n));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const n=Wd(t,e);so.test(r)?t.setProperty(sr(n),r.replace(so,""),"important"):t[n]=r}}const ao=["Webkit","Moz","ms"],is={};function Wd(t,e){const r=is[e];if(r)return r;let n=er(e);if(n!=="filter"&&n in t)return is[e]=n;n=El(n);for(let i=0;i<ao.length;i++){const s=ao[i]+n;if(s in t)return is[e]=s}return e}const oo="http://www.w3.org/1999/xlink";function lo(t,e,r,n,i,s=Xc(e)){n&&e.startsWith("xlink:")?r==null?t.removeAttributeNS(oo,e.slice(6,e.length)):t.setAttributeNS(oo,e,r):r==null||s&&!Cl(r)?t.removeAttribute(e):t.setAttribute(e,s?"":ir(r)?String(r):r)}function uo(t,e,r,n,i){if(e==="innerHTML"||e==="textContent"){r!=null&&(t[e]=e==="innerHTML"?wu(r):r);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=r==null?t.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in t))&&(t.value=l),r==null&&t.removeAttribute(e),t._value=r;return}let a=!1;if(r===""||r==null){const o=typeof t[e];o==="boolean"?r=Cl(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{t[e]=r}catch{}a&&t.removeAttribute(i||e)}function qd(t,e,r,n){t.addEventListener(e,r,n)}function Kd(t,e,r,n){t.removeEventListener(e,r,n)}const co=Symbol("_vei");function Jd(t,e,r,n,i=null){const s=t[co]||(t[co]={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=Yd(e);if(n){const u=s[e]=$d(n,i);qd(t,o,u,l)}else a&&(Kd(t,o,a,l),s[e]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function Yd(t){let e;if(fo.test(t)){e={};let n;for(;n=t.match(fo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let ss=0;const Xd=Promise.resolve(),Qd=()=>ss||(Xd.then(()=>ss=0),ss=Date.now());function $d(t,e){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;wt(Zd(n,r.value),e,5,[n])};return r.value=t,r.attached=Qd(),r}function Zd(t,e){if(re(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,eh=(t,e,r,n,i,s)=>{const a=i==="svg";e==="class"?Vd(t,n,a):e==="style"?zd(t,r,n):Mi(e)?na(e)||Jd(t,e,r,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):th(t,e,n,a))?(uo(t,e,n),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lo(t,e,n,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(n))?uo(t,er(e),n,s,e):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),lo(t,e,n,a))};function th(t,e,r,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&ho(e)&&ie(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ho(e)&&Oe(r)?!1:e in t}const rh=["ctrl","shift","alt","meta"],nh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>rh.some(r=>t[`${r}Key`]&&!e.includes(r))},mo=(t,e)=>{const r=t._withMods||(t._withMods={}),n=e.join(".");return r[n]||(r[n]=(i,...s)=>{for(let a=0;a<e.length;a++){const o=nh[e[a]];if(o&&o(i,e))return}return t(i,...s)})},ih={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},po=(t,e)=>{const r=t._withKeys||(t._withKeys={}),n=e.join(".");return r[n]||(r[n]=i=>{if(!("key"in i))return;const s=sr(i.key);if(e.some(a=>a===s||ih[a]===s))return t(i)})},sh=Ve({patchProp:eh},Ld);let go;function ah(){return go||(go=od(sh))}const oh=(...t)=>{const e=ah().createApp(...t),{mount:r}=e;return e.mount=n=>{const i=uh(n);if(!i)return;const s=e._component;!ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,lh(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function lh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function uh(t){return Oe(t)?document.querySelector(t):t}const ch="/projects/webGPU-Basics-Collections/assets/expand-yilVOYUy.png",pt=16;function pe({name:t="default",albedo:e=[1,1,1],roughness:r=.98,metalness:n=0,usePerlinRoughness:i=!1,usePerlinMetalness:s=!1,perlinFreq:a=2,useAlbedoTexture:o=!1,useMetalnessTexture:l=!1,useRoughnessTexture:u=!1,useNormalTexture:c=!1,textureIndex:f=-1}){return{name:t,albedo:e,roughness:r,usePerlinRoughness:i,metalness:n,usePerlinMetalness:s,perlinFreq:a,useAlbedoTexture:o,useMetalnessTexture:l,useRoughnessTexture:u,useNormalTexture:c,textureIndex:f}}function Un(t){const e=new Array(pt),r=new Float32Array(e);return r.set(t.albedo,0),r[3]=t.metalness,r[4]=t.usePerlinMetalness?1:0,r[5]=t.roughness,r[6]=t.usePerlinRoughness?1:0,r[7]=t.perlinFreq,r[8]=t.useAlbedoTexture?1:0,r[9]=t.useMetalnessTexture?1:0,r[10]=t.useRoughnessTexture?1:0,r[11]=t.useNormalTexture?1:0,r[12]=t.textureIndex,r}function _i(t){const e=[];for(const r of t)e.push(...r.albedo),e.push(r.metalness),e.push(r.usePerlinMetalness?1:0),e.push(r.roughness),e.push(r.usePerlinRoughness?1:0),e.push(r.perlinFreq),e.push(r.useAlbedoTexture?1:0),e.push(r.useMetalnessTexture?1:0),e.push(r.useRoughnessTexture?1:0),e.push(r.useNormalTexture?1:0),e.push(r.textureIndex),e.push(0),e.push(0),e.push(0);return new Float32Array(e)}var fh=1e-6,Re=typeof Float32Array<"u"?Float32Array:Array,dh="zyx";function cn(){var t=new Re(4);return Re!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function hi(t,e,r,n){var i=new Re(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function ei(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function hh(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3],o=r[0],l=r[1],u=r[2],c=r[3];return t[0]=n*o+s*l,t[1]=i*o+a*l,t[2]=n*u+s*c,t[3]=i*u+a*c,t}function Qt(){var t=new Re(9);return Re!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function mh(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function zs(t,e,r,n,i,s,a,o,l){var u=new Re(9);return u[0]=t,u[1]=e,u[2]=r,u[3]=n,u[4]=i,u[5]=s,u[6]=a,u[7]=o,u[8]=l,u}function as(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],h=e[12],p=e[13],b=e[14],g=e[15],v=r*o-n*a,S=r*l-i*a,y=r*u-s*a,P=n*l-i*o,C=n*u-s*o,A=i*u-s*l,R=c*p-f*h,M=c*b-d*h,G=c*g-m*h,D=f*b-d*p,F=f*g-m*p,U=d*g-m*b,O=v*U-S*F+y*D+P*G-C*M+A*R;return O?(O=1/O,t[0]=(o*U-l*F+u*D)*O,t[1]=(l*G-a*U-u*M)*O,t[2]=(a*F-o*G+u*R)*O,t[3]=(i*F-n*U-s*D)*O,t[4]=(r*U-i*G+s*M)*O,t[5]=(n*G-r*F-s*R)*O,t[6]=(p*A-b*C+g*P)*O,t[7]=(b*y-h*A-g*S)*O,t[8]=(h*C-p*y+g*v)*O,t):null}function bo(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function yo(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function mr(){var t=new Re(16);return Re!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Ou(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ph(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],h=e[12],p=e[13],b=e[14],g=e[15],v=r*o-n*a,S=r*l-i*a,y=r*u-s*a,P=n*l-i*o,C=n*u-s*o,A=i*u-s*l,R=c*p-f*h,M=c*b-d*h,G=c*g-m*h,D=f*b-d*p,F=f*g-m*p,U=d*g-m*b,O=v*U-S*F+y*D+P*G-C*M+A*R;return O?(O=1/O,t[0]=(o*U-l*F+u*D)*O,t[1]=(i*F-n*U-s*D)*O,t[2]=(p*A-b*C+g*P)*O,t[3]=(d*C-f*A-m*P)*O,t[4]=(l*G-a*U-u*M)*O,t[5]=(r*U-i*G+s*M)*O,t[6]=(b*y-h*A-g*S)*O,t[7]=(c*A-d*y+m*S)*O,t[8]=(a*F-o*G+u*R)*O,t[9]=(n*G-r*F-s*R)*O,t[10]=(h*C-p*y+g*v)*O,t[11]=(f*y-c*C-m*v)*O,t[12]=(o*M-a*D-l*R)*O,t[13]=(r*D-n*M+i*R)*O,t[14]=(p*S-h*P-b*v)*O,t[15]=(c*P-f*S+d*v)*O,t):null}function gh(t,e,r,n){var i=e[0],s=e[1],a=e[2],o=e[3],l=i+i,u=s+s,c=a+a,f=i*l,d=i*u,m=i*c,h=s*u,p=s*c,b=a*c,g=o*l,v=o*u,S=o*c,y=n[0],P=n[1],C=n[2];return t[0]=(1-(h+b))*y,t[1]=(d+S)*y,t[2]=(m-v)*y,t[3]=0,t[4]=(d-S)*P,t[5]=(1-(f+b))*P,t[6]=(p+g)*P,t[7]=0,t[8]=(m+v)*C,t[9]=(p-g)*C,t[10]=(1-(f+h))*C,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function ae(){var t=new Re(3);return Re!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function bh(t){var e=new Re(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function ti(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function E(t,e,r){var n=new Re(3);return n[0]=t,n[1]=e,n[2]=r,n}function Yt(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Ws(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function Wt(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function Rn(t,e){var r=e[0],n=e[1],i=e[2],s=r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function pr(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ri(t,e,r){var n=e[0],i=e[1],s=e[2],a=r[0],o=r[1],l=r[2];return t[0]=i*l-s*o,t[1]=s*a-n*l,t[2]=n*o-i*a,t}function os(t,e,r){var n=e[0],i=e[1],s=e[2],a=r[3]*n+r[7]*i+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/a,t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/a,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/a,t}function Vr(t,e,r){var n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t}var Rr=Ws,yh=ti;(function(){var t=ae();return function(e,r,n,i,s,a){var o,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,e.length):l=e.length,o=n;o<l;o+=r)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],s(t,t,a),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}})();function vh(){var t=new Re(4);return Re!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function xh(t,e,r,n){var i=new Re(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function Bh(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=r*r+n*n+i*i+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=i*a,t[3]=s*a,t}(function(){var t=vh();return function(e,r,n,i,s,a){var o,l;for(r||(r=4),n||(n=0),i?l=Math.min(i*r+n,e.length):l=e.length,o=n;o<l;o+=r)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],t[3]=e[o+3],s(t,t,a),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2],e[o+3]=t[3];return e}})();function Lt(){var t=new Re(4);return Re!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ah(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function Th(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3],o=r[0],l=r[1],u=r[2],c=r[3];return t[0]=n*c+a*o+i*u-s*l,t[1]=i*c+a*l+s*o-n*u,t[2]=s*c+a*u+n*l-i*o,t[3]=a*c-n*o-i*l-s*u,t}function ls(t,e,r,n){var i=e[0],s=e[1],a=e[2],o=e[3],l=r[0],u=r[1],c=r[2],f=r[3],d,m,h,p,b;return m=i*l+s*u+a*c+o*f,m<0&&(m=-m,l=-l,u=-u,c=-c,f=-f),1-m>fh?(d=Math.acos(m),h=Math.sin(d),p=Math.sin((1-n)*d)/h,b=Math.sin(n*d)/h):(p=1-n,b=n),t[0]=p*i+b*l,t[1]=p*s+b*u,t[2]=p*a+b*c,t[3]=p*o+b*f,t}function Mh(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);var s=(i+1)%3,a=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[s*3+s]-e[a*3+a]+1),t[i]=.5*n,n=.5/n,t[3]=(e[s*3+a]-e[a*3+s])*n,t[s]=(e[s*3+i]+e[i*3+s])*n,t[a]=(e[a*3+i]+e[i*3+a])*n}return t}function Or(t,e,r,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:dh,s=Math.PI/360;e*=s,n*=s,r*=s;var a=Math.sin(e),o=Math.cos(e),l=Math.sin(r),u=Math.cos(r),c=Math.sin(n),f=Math.cos(n);switch(i){case"xyz":t[0]=a*u*f+o*l*c,t[1]=o*l*f-a*u*c,t[2]=o*u*c+a*l*f,t[3]=o*u*f-a*l*c;break;case"xzy":t[0]=a*u*f-o*l*c,t[1]=o*l*f-a*u*c,t[2]=o*u*c+a*l*f,t[3]=o*u*f+a*l*c;break;case"yxz":t[0]=a*u*f+o*l*c,t[1]=o*l*f-a*u*c,t[2]=o*u*c-a*l*f,t[3]=o*u*f+a*l*c;break;case"yzx":t[0]=a*u*f+o*l*c,t[1]=o*l*f+a*u*c,t[2]=o*u*c-a*l*f,t[3]=o*u*f-a*l*c;break;case"zxy":t[0]=a*u*f-o*l*c,t[1]=o*l*f+a*u*c,t[2]=o*u*c+a*l*f,t[3]=o*u*f-a*l*c;break;case"zyx":t[0]=a*u*f-o*l*c,t[1]=o*l*f+a*u*c,t[2]=o*u*c-a*l*f,t[3]=o*u*f+a*l*c;break;default:throw new Error("Unknown angle order "+i)}return t}var us=xh,Iu=Bh;(function(){var t=ae(),e=E(1,0,0),r=E(0,1,0);return function(n,i,s){var a=pr(i,s);return a<-.999999?(ri(t,e,i),yh(t)<1e-6&&ri(t,r,i),Rn(t,t),Ah(n,t,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(ri(t,i,s),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+a,Iu(n,n))}})();(function(){var t=Lt(),e=Lt();return function(r,n,i,s,a,o){return ls(t,n,a,o),ls(e,i,s,o),ls(r,t,e,2*o*(1-o)),r}})();(function(){var t=Qt();return function(e,r,n,i){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=i[0],t[4]=i[1],t[7]=i[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],Iu(e,Mh(e,t))}})();function X(){var t=new Re(2);return Re!=Float32Array&&(t[0]=0,t[1]=0),t}function mi(t){var e=new Re(2);return e[0]=t[0],e[1]=t[1],e}function Z(t,e){var r=new Re(2);return r[0]=t,r[1]=e,r}function Ut(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function Sh(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function Gt(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function Ph(t){var e=t[0],r=t[1];return e*e+r*r}function et(t,e){return t[0]*e[0]+t[1]*e[1]}function Eh(t,e,r,n){var i=e[0],s=e[1];return t[0]=i+n*(r[0]-i),t[1]=s+n*(r[1]-s),t}function Fe(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i,t[1]=r[1]*n+r[3]*i,t}var At=Sh;(function(){var t=X();return function(e,r,n,i,s,a){var o,l;for(r||(r=2),n||(n=0),i?l=Math.min(i*r+n,e.length):l=e.length,o=n;o<l;o+=r)t[0]=e[o],t[1]=e[o+1],s(t,t,a),e[o]=t[0],e[o+1]=t[1];return e}})();function Tr(t){const e=Math.cos(t),r=Math.sin(t);return hi(e,r,-r,e)}function Gu(t,e,r){const n=Math.cos(t),i=Math.sin(t),s=Math.cos(e),a=Math.sin(e),o=Math.cos(r),l=Math.sin(r);return zs(s*o,-s*l,a,i*a*o+n*l,-i*a*l+n*o,-i*s,-n*a*o+i*l,n*a*l+i*o,n*s)}function Ch(t,e){const r=Qt();return r[0]=t[0]*e[0],r[1]=t[0]*e[1],r[2]=t[0]*e[2],r[3]=t[1]*e[0],r[4]=t[1]*e[1],r[5]=t[1]*e[2],r[6]=t[2]*e[0],r[7]=t[2]*e[1],r[8]=t[2]*e[2],r}function wh(t,e){let r=t[0],n=t[3]/t[0],i=t[6]/t[0],s=t[4]-n*n*r,a=(t[7]-i*n*r)/s,o=t[8]-(i*i*r+a*a*s),l=e[0],u=e[1]-n*l,c=e[2]-i*l-a*u,f=l/r,d=u/s,m=c/o;const h=E(0,0,0);return h[2]=m,h[1]=d-a*h[2],h[0]=f-n*h[1]-i*h[2],h}function de(t=0,e=1){return t===void 0?(t=0,e=1):e===void 0&&(e=t,t=0),t+Math.random()*(e-t)}function Rh(t,e,r,n){return E(de(t,t+r),de(e,e+n),de(0,Math.PI*2))}function Oh(){const t=Math.floor(de(0,256)),e=Math.floor(de(0,256)),r=Math.floor(de(0,256)),n=255;return new Uint8Array([t,e,r,n])}function jn(t,e){return t[0]*e[1]-t[1]*e[0]}function Ui(t,e,r){const n=Ws(ae(),e,t),i=Ws(ae(),r,t);return Rn(ae(),ri(ae(),n,i))}function Ih(t){return t*(180/Math.PI)}function Gh(t){return t*(Math.PI/180)}function ar(){return document.getElementById("info")}function Rt(){return document.getElementById("utils")}let _u=null;function _h(t){_u=t}function or(t){_u?.addFrame(t)}function Uu(){Rt()}function lr(){const t=Rt();if(t)for(;t.firstChild;)t.removeChild(t.firstChild);Uu()}function gt(t,e,r,n){const i=document.createElement("label");i.textContent=t,i.htmlFor=`checkbox-${t}`;const s=document.createElement("input");return s.type="checkbox",s.id=`checkbox-${t}`,s.checked=e,s.tabIndex=-1,s.style.cssText=`
        margin-left: 8px;
        transform: scale(1.2);
        cursor: pointer;
    `,s.addEventListener("change",()=>{n(s.checked)}),r.appendChild(i),r.appendChild(s),s}function Du(t,e,r,n,i,s,a){const o=document.createElement("label");o.textContent=t,o.htmlFor=`number-${t}`;const l=document.createElement("input");return l.type="number",l.id=`number-${t}`,l.value=e.toString(),l.min=r.toString(),l.max=n.toString(),l.step=i.toString(),l.tabIndex=-1,l.style.cssText=`
        margin-left: 16px;
        transform: scale(1.2);
        cursor: pointer;
    `,l.addEventListener("change",()=>{const u=parseFloat(l.value);a(isNaN(u)?0:u)}),s.appendChild(o),s.appendChild(l),l}function lt(t,e,r,n,i,s,a){const o=document.createElement("label");o.textContent=`${t}: ${e.toFixed(2)}`,o.htmlFor=`slider-${t}`;const l=document.createElement("input");return l.type="range",l.id=`slider-${t}`,l.min=r.toString(),l.max=n.toString(),l.step=i.toString(),l.value=e.toString(),l.style.cssText=`
        width: 150px;
        margin-left: 8px;
        cursor: pointer;
    `,l.addEventListener("input",()=>{const u=parseFloat(l.value);a(isNaN(u)?0:u),o.textContent=`${t}: ${u.toFixed(2)}`}),s.appendChild(o),s.appendChild(l),l}function Wr(t,e,r){const n=document.createElement("button");return n.style.cssText="background-color: #444444; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;",n.textContent=t,n.tabIndex=-1,n.addEventListener("click",r),e.appendChild(n),n}function Di(t,e,r,n){const i=document.createElement("div");i.style.cssText=`
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
    `,i.appendChild(s);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const o=document.createElement("label");o.textContent="Albedo:",a.appendChild(o);const l=_=>Math.round(_*255).toString(16).padStart(2,"0"),u=`#${l(e.albedo[0])}${l(e.albedo[1])}${l(e.albedo[2])}`,c=document.createElement("input");c.type="color",c.value=u,c.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,c.tabIndex=-1,a.appendChild(c);const f=document.createElement("span");f.textContent=u.toUpperCase(),f.style.cssText="font-family: monospace; color: #aaa;",a.appendChild(f),c.addEventListener("input",()=>{f.textContent=c.value.toUpperCase();const _=parseInt(c.value.slice(1,3),16)/255,w=parseInt(c.value.slice(3,5),16)/255,K=parseInt(c.value.slice(5,7),16)/255;e.albedo=[_,w,K],r(e)}),i.appendChild(a);const d=document.createElement("label");d.textContent="Albedo texture",a.appendChild(d);const m=document.createElement("input");m.type="checkbox",m.checked=e.useAlbedoTexture,m.tabIndex=-1,a.appendChild(m),m.addEventListener("change",()=>{e.useAlbedoTexture=m.checked,r(e)});const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent=`Metalness: ${e.metalness.toFixed(2)}`,h.appendChild(p);const b=document.createElement("input");b.type="range",b.min="0",b.max="1",b.step="0.01",b.value=e.metalness.toString(),b.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,b.tabIndex=-1,h.appendChild(b),i.appendChild(h),b.addEventListener("input",()=>{const _=parseFloat(b.value);e.metalness=isNaN(_)?0:_,p.textContent=`Metalness: ${e.metalness.toFixed(2)}`,r(e)});const g=document.createElement("label");g.textContent="Perlin noise",h.appendChild(g);const v=document.createElement("input");v.type="checkbox",v.checked=e.usePerlinMetalness,v.tabIndex=-1,h.appendChild(v),v.addEventListener("change",()=>{e.usePerlinMetalness=v.checked,r(e)});const S=document.createElement("label");S.textContent="Metalness texture",h.appendChild(S);const y=document.createElement("input");y.type="checkbox",y.checked=e.useMetalnessTexture,y.tabIndex=-1,h.appendChild(y),y.addEventListener("change",()=>{e.useMetalnessTexture=y.checked,r(e)});const P=document.createElement("div");P.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const C=document.createElement("label");C.textContent=`Roughness: ${e.roughness.toFixed(2)}`,P.appendChild(C);const A=document.createElement("input");A.type="range",A.min="0",A.max="1",A.step="0.01",A.value=e.roughness.toString(),A.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,A.tabIndex=-1,P.appendChild(A),i.appendChild(P),A.addEventListener("input",()=>{const _=parseFloat(A.value);e.roughness=isNaN(_)?0:_,C.textContent=`Roughness: ${e.roughness.toFixed(2)}`,r(e)});const R=document.createElement("label");R.textContent="Perlin noise",P.appendChild(R);const M=document.createElement("input");M.type="checkbox",M.checked=e.usePerlinRoughness,M.tabIndex=-1,P.appendChild(M),M.addEventListener("change",()=>{e.usePerlinRoughness=M.checked,r(e)});const G=document.createElement("label");G.textContent="Roughness texture",P.appendChild(G);const D=document.createElement("input");D.type="checkbox",D.checked=e.useRoughnessTexture,D.tabIndex=-1,P.appendChild(D),D.addEventListener("change",()=>{e.useRoughnessTexture=D.checked,r(e)});const F=document.createElement("div");F.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const U=document.createElement("label");U.textContent=`Perlin Frequency: ${e.perlinFreq.toFixed(2)}`,F.appendChild(U);const O=document.createElement("input");O.type="range",O.min="0.1",O.max="10",O.step="0.1",O.value=e.perlinFreq.toString(),O.style.cssText=`
        flex: 1;
        cursor: pointer;
    `,O.tabIndex=-1,F.appendChild(O),i.appendChild(F),O.addEventListener("input",()=>{const _=parseFloat(O.value);e.perlinFreq=isNaN(_)?.1:_,U.textContent=`Perlin Frequency: ${e.perlinFreq.toFixed(2)}`,r(e)});const B=document.createElement("div");B.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const N=document.createElement("button");return N.textContent="Cancel",N.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,N.tabIndex=-1,N.addEventListener("click",()=>{n()}),B.appendChild(N),i.appendChild(B),i}function Uh(t,e,r,n,i){const s=document.createElement("div");s.style.cssText=`
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
    `;const a=document.createElement("div");a.textContent=r,a.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,s.appendChild(a);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const l=document.createElement("label");l.textContent="Enabled:",o.appendChild(l);const u=document.createElement("input");u.type="checkbox",u.checked=e.enabled,u.tabIndex=-1,o.appendChild(u),u.addEventListener("change",()=>{e.enabled=u.checked,n(e)}),s.appendChild(o);const c=document.createElement("div");c.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const f=document.createElement("label");f.textContent="Area light center:",c.appendChild(f),["X","Y","Z"].forEach((B,N)=>{const _=document.createElement("input");_.type="number",_.value=e.center[N].toFixed(2),_.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,_.tabIndex=-1,c.appendChild(_),_.addEventListener("input",()=>{const w=parseFloat(_.value);e.center[N]=isNaN(w)?0:w,n(e)}),_.placeholder=B}),s.appendChild(c);const d=document.createElement("div");d.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Area light normal direction:",d.appendChild(m),["X","Y","Z"].forEach((B,N)=>{const _=document.createElement("input");_.type="number",_.value=e.normalDirection[N].toFixed(2),_.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,_.tabIndex=-1,d.appendChild(_),_.addEventListener("input",()=>{const w=parseFloat(_.value);e.normalDirection[N]=isNaN(w)?0:w,n(e)}),_.placeholder=B}),s.appendChild(d);const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Area light intensity:",h.appendChild(p);const b=document.createElement("input");b.type="number",b.value=e.intensity.toFixed(2),b.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,b.tabIndex=-1,h.appendChild(b),b.addEventListener("input",()=>{const B=parseFloat(b.value);e.intensity=isNaN(B)?0:B,n(e)}),s.appendChild(h);const g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const v=document.createElement("label");v.textContent="Area light height:",g.appendChild(v);const S=document.createElement("input");S.type="number",S.value=e.height.toFixed(2),S.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,S.tabIndex=-1,g.appendChild(S),S.addEventListener("input",()=>{const B=parseFloat(S.value);e.height=isNaN(B)?0:B,n(e)}),s.appendChild(g);const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const P=document.createElement("label");P.textContent="Area light width:",y.appendChild(P);const C=document.createElement("input");C.type="number",C.value=e.width.toFixed(2),C.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,C.tabIndex=-1,y.appendChild(C),C.addEventListener("input",()=>{const B=parseFloat(C.value);e.width=isNaN(B)?0:B,n(e)}),s.appendChild(y);const A=document.createElement("div");A.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const R=document.createElement("label");R.textContent="Light color:",A.appendChild(R);const M=B=>Math.round(B*255).toString(16).padStart(2,"0"),G=`#${M(e.color[0])}${M(e.color[1])}${M(e.color[2])}`,D=document.createElement("input");D.type="color",D.value=G,D.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,D.tabIndex=-1,A.appendChild(D);const F=document.createElement("span");F.textContent=G.toUpperCase(),F.style.cssText="font-family: monospace; color: #aaa;",A.appendChild(F),D.addEventListener("input",()=>{F.textContent=D.value.toUpperCase(),e.color=[parseInt(D.value.slice(1,3),16)/255,parseInt(D.value.slice(3,5),16)/255,parseInt(D.value.slice(5,7),16)/255],n(e)}),s.appendChild(A);const U=document.createElement("div");U.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const O=document.createElement("button");return O.textContent="Cancel",O.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,O.tabIndex=-1,O.addEventListener("click",()=>{i()}),U.appendChild(O),s.appendChild(U),s}function va(t,e,r,n,i){const s=document.createElement("div");s.style.cssText=`
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
    `;const a=document.createElement("div");a.textContent=r,a.style.cssText=`
        font-weight: bold;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #555;
    `,s.appendChild(a);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const l=document.createElement("label");l.textContent="Enabled:",o.appendChild(l);const u=document.createElement("input");u.type="checkbox",u.checked=e.enabled,u.tabIndex=-1,o.appendChild(u),u.addEventListener("change",()=>{e.enabled=u.checked,n(e)}),s.appendChild(o);const c=document.createElement("div");c.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const f=document.createElement("label");f.textContent="Light position:",c.appendChild(f),["X","Y","Z"].forEach((F,U)=>{const O=document.createElement("input");O.type="number",O.value=e.position[U].toFixed(2),O.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,O.tabIndex=-1,c.appendChild(O),O.addEventListener("input",()=>{const B=parseFloat(O.value);e.position[U]=isNaN(B)?0:B,n(e)}),O.placeholder=F}),s.appendChild(c);const d=document.createElement("div");d.style.cssText="display: flex; flex-direction: row; gap: 6px; margin-bottom: 12px;";const m=document.createElement("label");m.textContent="Light direction:",d.appendChild(m),["X","Y","Z"].forEach((F,U)=>{const O=document.createElement("input");O.type="number",O.value=e.direction[U].toFixed(2),O.style.cssText=`
            width: 50px;
            padding: 4px;
            border: 1px solid #555;
            border-radius: 4px;
            background: #222;
            color: #eee;
        `,O.tabIndex=-1,d.appendChild(O),O.addEventListener("input",()=>{const B=parseFloat(O.value);e.direction[U]=isNaN(B)?0:B,n(e)}),O.placeholder=F}),s.appendChild(d);const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const p=document.createElement("label");p.textContent="Light intensity:",h.appendChild(p);const b=document.createElement("input");b.type="number",b.value=e.intensity.toFixed(2),b.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,b.tabIndex=-1,h.appendChild(b),b.addEventListener("input",()=>{const F=parseFloat(b.value);e.intensity=isNaN(F)?0:F,n(e)}),s.appendChild(h);const g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const v=document.createElement("label");v.textContent="Cone angle:",g.appendChild(v);const S=document.createElement("input");S.type="range",S.value=Ih(e.coneAngle).toFixed(2),S.min="0",S.max="180",S.style.cssText=`
        width: 80px;
        padding: 4px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #222;
        color: #eee;
    `,S.tabIndex=-1,g.appendChild(S),S.addEventListener("input",()=>{const F=parseFloat(S.value),U=Gh(F);e.coneAngle=isNaN(U)?0:U,n(e)}),s.appendChild(g);const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;";const P=document.createElement("label");P.textContent="Light color:",y.appendChild(P);const C=F=>Math.round(F*255).toString(16).padStart(2,"0"),A=`#${C(e.color[0])}${C(e.color[1])}${C(e.color[2])}`,R=document.createElement("input");R.type="color",R.value=A,R.style.cssText=`
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
    `,R.tabIndex=-1,y.appendChild(R);const M=document.createElement("span");M.textContent=A.toUpperCase(),M.style.cssText="font-family: monospace; color: #aaa;",y.appendChild(M),R.addEventListener("input",()=>{M.textContent=R.value.toUpperCase(),e.color=[parseInt(R.value.slice(1,3),16)/255,parseInt(R.value.slice(3,5),16)/255,parseInt(R.value.slice(5,7),16)/255],n(e)}),s.appendChild(y);const G=document.createElement("div");G.style.cssText="display: flex; gap: 8px; justify-content: flex-end;";const D=document.createElement("button");return D.textContent="Cancel",D.style.cssText=`
        padding: 6px 16px;
        background: #555;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 13px;
    `,D.tabIndex=-1,D.addEventListener("click",()=>{i()}),G.appendChild(D),s.appendChild(G),s}const Dh={class:"flex flex-row items-stretch h-20 font-mono text-[10px] select-none text-[#aaa]"},Fh={class:"flex-1 overflow-hidden relative bg-[#1a1a1a]/20 rounded-sm"},Lh=["title"],Nh={class:"w-[30px] relative shrink-0 ml-[3px]"},Vh={class:"absolute left-1 top-0 leading-none whitespace-nowrap"},Hh={class:"absolute left-1 top-1/2 -translate-y-1/2 leading-none whitespace-nowrap"},kh=eu({__name:"profiler",props:{maxBars:{default:60}},setup(t,{expose:e}){const r=t;let n=0;const i=Tt([]),s=Tt(60),a=wn(()=>s.value),o=wn(()=>Math.round(s.value/2));function l(f){return Math.min(f/s.value*100,100)}function u(f){const d=Math.min(f/60,1),m=Math.round(255*(1-d)),h=Math.round(255*d);return`rgb(${m},${h},0)`}function c(f){i.value.length>=r.maxBars&&i.value.shift(),i.value.push({id:n++,duration:Math.min(Math.max(f,0),60)})}return e({addFrame:c}),(f,d)=>(Lr(),Nr("div",Dh,[_e("div",Fh,[_e("div",{class:"absolute left-0 bottom-0 top-0 flex flex-row items-end",style:kr({width:i.value.length/r.maxBars*100+"%"})},[(Lr(!0),Nr(mt,null,au(i.value,m=>(Lr(),Nr("div",{key:m.id,class:"flex-1 min-w-0 rounded-t-[1px]",title:`${m.duration.toFixed(1)}ms`,style:kr({height:l(m.duration)+"%",backgroundColor:u(m.duration)})},null,12,Lh))),128))],4)]),_e("div",Nh,[d[0]||(d[0]=_e("div",{class:"absolute left-0 top-0 bottom-0 w-px bg-[#555]"},null,-1)),_e("span",Vh,_r(a.value),1),_e("span",Hh,_r(o.value),1),d[1]||(d[1]=_e("span",{class:"absolute left-1 bottom-0 leading-none whitespace-nowrap"},"0",-1))])]))}}),jh=`@vertex\r
fn vs(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f\r
{\r
    let pos = array(\r
        vec2f(0.0, 0.5),\r
        vec2f(0.5, -0.5),\r
        vec2f(-0.5, -0.5)\r
    );\r
    return vec4f(pos[vertex_index], 0.0, 1.0);\r
}`,zh=`@fragment\r
fn fs() -> @location(0) vec4f\r
{\r
    return vec4f(1.0, 0.0, 0.0, 1.0);\r
}`;async function Wh(t){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=t.getContext("webgpu"),i=navigator.gpu.getPreferredCanvasFormat();if(!n){console.error("WebGPU context is not available.");return}n.configure({device:r,format:i,alphaMode:"premultiplied"});const s=qh(r),a=Kh(r,s,s,i),o={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(u=>{for(const c of u){const f=c.target,d=c.contentBoxSize[0].inlineSize,m=c.contentBoxSize[0].blockSize;f.width=Math.max(1,Math.min(d,r.limits.maxTextureDimension2D)),f.height=Math.max(1,Math.min(m,r.limits.maxTextureDimension2D))}Jh(r,n,a,o)}).observe(t),null}function qh(t){return t.createShaderModule({label:"hardcoded red triangle",code:`${jh}
${zh}`})}function Kh(t,e,r,n){return t.createRenderPipeline({label:"basic red triangle pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function Jh(t,e,r,n){n.colorAttachments[0].view=e.getCurrentTexture().createView();const i=t.createCommandEncoder({label:"pass encoder"}),s=i.beginRenderPass(n);s.setPipeline(r),s.draw(3),s.end();const a=i.finish();t.queue.submit([a])}const Yh=`// We declare a storage variable to read from and write to\r
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
// }`;async function Xh(t){const r=await(await navigator.gpu?.requestAdapter())?.requestDevice();if(r)console.log("WebGPU is supported on this device.");else{console.log("WebGPU is not supported on this device.");return}const n=Qh(r),i=$h(r,n),s=new Float32Array([1,3,5]),a=Zh(r,s),o=em(r,s.byteLength),l=tm(r,i.getBindGroupLayout(0),a),u=r.createCommandEncoder({label:"command encoder"}),c=u.beginComputePass({label:"basic compute pass"});c.setPipeline(i),c.setBindGroup(0,l),c.dispatchWorkgroups(s.length),c.end(),u.copyBufferToBuffer(a,0,o,0,o.size);const f=u.finish();r.queue.submit([f]),console.log("We send this Input: ",s);const d=performance.now();await o.mapAsync(GPUMapMode.READ);const m=new Float32Array(o.getMappedRange());return console.log("Computation took: ",performance.now()-d,"ms"),console.log("We got this Result: ",m),o.unmap(),null}function Qh(t){return t.createShaderModule({label:"basic compute module",code:`${Yh}`})}function $h(t,e){return t.createComputePipeline({label:"doubling compute pipeline",layout:"auto",compute:{module:e,entryPoint:"computeSomething"}})}function Zh(t,e){const r=t.createBuffer({label:"work buffer",size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return t.queue.writeBuffer(r,0,e),r}function em(t,e){return t.createBuffer({label:"result buffer",size:e,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}function tm(t,e,r){return t.createBindGroup({label:"basic bind group",layout:e,entries:[{binding:0,resource:{buffer:r}}]})}const rm=`// ============================== //\r
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
}`,nm=`// ============================== //\r
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
}`;async function ht(t=[]){if(!navigator.gpu)return alert("WebGPU is not supported in this browser."),console.error("WebGPU is not supported in this browser."),null;const e=await navigator.gpu.requestAdapter();if(!e)return alert("This browser supports WebGPU, but it appears disabled."),console.error("This browser supports WebGPU, but it appears disabled."),null;const r=i=>{const s=e.features.has(i);return s?console.log(`WebGPU feature supported: ${i}`):console.warn(`WebGPU feature not supported: ${i}`),s};t=t.filter(i=>r(i));const n=await e.requestDevice({requiredFeatures:t});return n.lost.then(i=>{console.error(`WebGPU device was lost: ${i.message}`)}),n}function Ie(t,e,r,n="shader module"){const i=t.createShaderModule({label:`${n} - vertex`,code:e}),s=t.createShaderModule({label:`${n} - fragment`,code:r});return{vertex:i,fragment:s}}function Yr(t,e){if(!t)return null;const r=t.createQuerySet({label:"timestamp-query-set",type:"timestamp",count:e}),n=t.createBuffer({label:"timestamp-query-resolve-buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=t.createBuffer({label:"timestamp-query-result-buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});return{querySet:r,resolveBuffer:n,resultBuffer:i}}function im(t,e){return!t||!e?!1:(e.resolveQuerySet(t.querySet,0,t.querySet.count,t.resolveBuffer,0),t.resultBuffer.mapState==="unmapped"&&e.copyBufferToBuffer(t.resolveBuffer,0,t.resultBuffer,0,t.resultBuffer.size),!0)}function qt(t){const e=t.reduce((i,s)=>i+s.length,0),r=new Float32Array(e);let n=0;for(const i of t)r.set(i,n),n+=i.length;return r}function vo(t,e){const r=t.reduce((a,o)=>a+o.length,0),n=new Uint16Array(r);let i=0,s=0;for(let a=0;a<t.length;a++){const o=t[a];for(let l=0;l<o.length;l++)n[i+l]=o[l]+s;i+=o.length,s+=e[a]}return n}const sm=0,am=4,om=0,lm=100;async function um(t){const e=await ht();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const i=xo(e,"hardcoded triangle",rm),s=xo(e,"hardcoded triangle",nm),a=cm(e,i,s,n),o=32,l=8,u=[];for(let d=0;d<lm;d++){const m=Bo(e,o);{const v=new Float32Array(o/4);v.set([de(.1),de(.1),de(.1),1],sm),v.set([de(-.9,.9),de(-.9,.9)],am),e.queue.writeBuffer(m,0,v)}const h=new Float32Array(l/4),p=Bo(e,l),g={uniformBindGroup:dm(e,a.getBindGroupLayout(0),m,p),uniformBuffer:p,uniformValues:h,scale:de(.2,.5)};u.push(g)}const c={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(d=>{for(const m of d){const h=m.target,p=m.contentBoxSize[0].inlineSize,b=m.contentBoxSize[0].blockSize;h.width=Math.max(1,Math.min(p,e.limits.maxTextureDimension2D)),h.height=Math.max(1,Math.min(b,e.limits.maxTextureDimension2D))}fm(e,t,r,a,c,u)}).observe(t),null}function xo(t,e,r){return t.createShaderModule({label:e,code:r})}function cm(t,e,r,n){return t.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function fm(t,e,r,n,i,s){i.colorAttachments[0].view=r.getCurrentTexture().createView();const a=t.createCommandEncoder({label:"pass encoder"}),o=a.beginRenderPass(i);o.setPipeline(n);const l=e.width/e.height;for(const c of s)c.uniformValues.set([c.scale/l,c.scale],om),t.queue.writeBuffer(c.uniformBuffer,0,c.uniformValues),o.setBindGroup(0,c.uniformBindGroup),o.draw(3);o.end();const u=a.finish();t.queue.submit([u])}function Bo(t,e){return t.createBuffer({label:"uniform buffer",size:e,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function dm(t,e,r,n){return t.createBindGroup({label:"uniform bind group",layout:e,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}}]})}const hm=`// ============================== //\r
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
}`,mm=`// ============================== //\r
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
}`;function Xr(t){const e={position:new Float32Array([0,0,4]),forward:new Float32Array([0,0,1]),up:new Float32Array([0,1,0]),right:new Float32Array([1,0,0]),worldUp:new Float32Array([0,1,0]),fovY:Math.PI/4,aspect:t,near:.1,far:1e3,yaw:Math.PI/2,pitch:0,moveSpeed:.01,rotateSpeed:.5,viewMatrix:pm(),projectionMatrix:Nu(Math.PI/4,t,.1,1e3),dirty:!0};return Fu(e),e}function Qr(t,e,r,n){t.position[0]=e,t.position[1]=r,t.position[2]=n,xa(t)}function $r(t,e){t.aspect=e,Lu(t)}function Zr(t,e,r){t.near=e,t.far=r,Lu(t)}function en(t,e,r,n){t.position[0]+=t.forward[0]*e+t.right[0]*r+t.up[0]*n,t.position[1]+=t.forward[1]*e+t.right[1]*r+t.up[1]*n,t.position[2]+=t.forward[2]*e+t.right[2]*r+t.up[2]*n,xa(t)}function vr(t,e,r){t.yaw+=e,t.pitch+=r;const n=Math.PI/2-.01;for(t.pitch=Math.max(-n,Math.min(n,t.pitch));t.yaw>Math.PI;)t.yaw-=2*Math.PI;for(;t.yaw<-Math.PI;)t.yaw+=2*Math.PI;Fu(t)}function he(t,e,r){vr(t,e*t.rotateSpeed,r*t.rotateSpeed)}function Fu(t){t.forward[0]=Math.cos(t.pitch)*Math.cos(t.yaw),t.forward[1]=Math.sin(t.pitch),t.forward[2]=Math.cos(t.pitch)*Math.sin(t.yaw),vn(t.forward);const e=pi(t.forward,t.worldUp);vn(e),t.right[0]=e[0],t.right[1]=e[1],t.right[2]=e[2];const r=pi(t.right,t.forward);vn(r),t.up[0]=r[0],t.up[1]=r[1],t.up[2]=r[2],xa(t)}function xa(t){const e=new Float32Array([t.position[0]+t.forward[0],t.position[1]+t.forward[1],t.position[2]+t.forward[2]]);t.viewMatrix=gm(t.position,e,t.up),t.dirty=!0}function Lu(t){t.projectionMatrix=Nu(t.fovY,t.aspect,t.near,t.far),t.dirty=!0}function pm(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Nu(t,e,r,n){const i=1/Math.tan(t*.5),s=1/(r-n);return new Float32Array([i/e,0,0,0,0,i,0,0,0,0,n*s,-1,0,0,r*n*s,0])}function gm(t,e,r){const n=new Float32Array([t[0]-e[0],t[1]-e[1],t[2]-e[2]]);vn(n);const i=pi(r,n);vn(i);const s=pi(n,i);return new Float32Array([i[0],s[0],n[0],0,i[1],s[1],n[1],0,i[2],s[2],n[2],0,-cs(i,t),-cs(s,t),-cs(n,t),1])}function vn(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);e>1e-5&&(t[0]/=e,t[1]/=e,t[2]/=e)}function pi(t,e){return new Float32Array([t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]])}function cs(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function tn(t){const e=Math.tan(t.fovY/2),r=t.aspect*e,n=e;return new Float32Array([t.right[0]*r,t.right[1]*r,t.right[2]*r,0,t.up[0]*n,t.up[1]*n,t.up[2]*n,0,t.forward[0],t.forward[1],t.forward[2],0,0,0,0,1])}function Fi(t,e,r){const n=tn(t),i=E(n[0]*e+n[4]*r+n[8]*1,n[1]*e+n[5]*r+n[9]*1,n[2]*e+n[6]*r+n[10]*1);return Rn(i,i),{origin:t.position,direction:i,invDir:E(1/i[0],1/i[1],1/i[2])}}function bm(t,e,r){const n=E(e[0]-t.origin[0],e[1]-t.origin[1],e[2]-t.origin[2]),i=pr(n,t.direction);if(i<0)return-1;const s=pr(n,n)-i*i,a=r*r;if(s>a)return-1;const o=Math.sqrt(a-s),l=i-o;return l<0?-1:l}function fs(t,e,r){const n=t.direction[0]!==0?1/t.direction[0]:t.direction[0]>=0?1e30:-1e30;let i=(e[0]-t.origin[0])*n,s=(r[0]-t.origin[0])*n;i>s&&([i,s]=[s,i]);const a=t.direction[1]!==0?1/t.direction[1]:t.direction[1]>=0?1e30:-1e30;let o=(e[1]-t.origin[1])*a,l=(r[1]-t.origin[1])*a;if(o>l&&([o,l]=[l,o]),i>l||o>s)return-1;o>i&&(i=o),l<s&&(s=l);const u=t.direction[2]!==0?1/t.direction[2]:t.direction[2]>=0?1e30:-1e30;let c=(e[2]-t.origin[2])*u,f=(r[2]-t.origin[2])*u;return c>f&&([c,f]=[f,c]),i>f||c>s||(c>i&&(i=c),f<s&&(s=f),s<0)?-1:i>=0?i:0}const it=Number.MAX_VALUE,st=-Number.MAX_VALUE,ym=32;class vm{constructor(e,r,n,i){this.v0=e,this.v1=r,this.v2=n,this.originalIndex=i;const s=e[0],a=e[1],o=e[2],l=r[0],u=r[1],c=r[2],f=n[0],d=n[1],m=n[2];this.center=[(s+l+f)/3,(a+u+d)/3,(o+c+m)/3];var h=Math.min(s,l,f),p=Math.min(a,u,d),b=Math.min(o,c,m);this.MinValues=[h,p,b];var g=Math.max(s,l,f),v=Math.max(a,u,d),S=Math.max(o,c,m);this.MaxValues=[g,v,S]}originalIndex;center;MinValues;MaxValues}class ds{minBounds;maxBounds;triangleCount;startIndex;constructor(e,r,n,i){this.minBounds=e,this.maxBounds=r,this.triangleCount=n,this.startIndex=i}}class xm{Triangles=[];builtTriangles=[];Nodes=[];buildBVH(e){this.Triangles=[],this.builtTriangles=[],this.Nodes=[];const r=e.getNumTriangles();this.Triangles=e.getTriangles();let n=it,i=it,s=it,a=st,o=st,l=st;for(let u=0;u<r;u++){const c=[this.Triangles[u].vA.pos[0],this.Triangles[u].vA.pos[1],this.Triangles[u].vA.pos[2]],f=[this.Triangles[u].vB.pos[0],this.Triangles[u].vB.pos[1],this.Triangles[u].vB.pos[2]],d=[this.Triangles[u].vC.pos[0],this.Triangles[u].vC.pos[1],this.Triangles[u].vC.pos[2]],m=new vm(c,f,d,u);this.builtTriangles.push(m);const h=m.MinValues,p=m.MaxValues;h[0]<n&&(n=h[0]),h[1]<i&&(i=h[1]),h[2]<s&&(s=h[2]),p[0]>a&&(a=p[0]),p[1]>o&&(o=p[1]),p[2]>l&&(l=p[2])}this.Nodes.push(new ds([n,i,s],[a,o,l],-1,-1)),this.buildTree(0,0,r)}getReorderedIndices(e){const r=new Uint32Array(this.builtTriangles.length*3);for(let n=0;n<this.builtTriangles.length;n++){const i=this.builtTriangles[n].originalIndex;r[n*3+0]=e[i*3+0],r[n*3+1]=e[i*3+1],r[n*3+2]=e[i*3+2]}return r}buildTree(e,r,n,i=0){const s=this.Nodes[e],a=[s.maxBounds[0]-s.minBounds[0],s.maxBounds[1]-s.minBounds[1],s.maxBounds[2]-s.minBounds[2]],o=this.computeCost(a,n),l=this.chooseSplit(s,r,n);if(l.cost<o&&i<ym){let u=[it,it,it],c=[st,st,st],f=[it,it,it],d=[st,st,st],m=0;for(let y=r;y<r+n;y++){const P=this.builtTriangles[y];let C;switch(l.axis){case 0:C=P.center[0];break;case 1:C=P.center[1];break;case 2:C=P.center[2];break;default:C=P.center[0];break}if(C<l.position){P.MinValues[0]<u[0]&&(u[0]=P.MinValues[0]),P.MinValues[1]<u[1]&&(u[1]=P.MinValues[1]),P.MinValues[2]<u[2]&&(u[2]=P.MinValues[2]),P.MaxValues[0]>c[0]&&(c[0]=P.MaxValues[0]),P.MaxValues[1]>c[1]&&(c[1]=P.MaxValues[1]),P.MaxValues[2]>c[2]&&(c[2]=P.MaxValues[2]);const A=this.builtTriangles[r+m];this.builtTriangles[r+m]=P,this.builtTriangles[y]=A,m++}else P.MinValues[0]<f[0]&&(f[0]=P.MinValues[0]),P.MinValues[1]<f[1]&&(f[1]=P.MinValues[1]),P.MinValues[2]<f[2]&&(f[2]=P.MinValues[2]),P.MaxValues[0]>d[0]&&(d[0]=P.MaxValues[0]),P.MaxValues[1]>d[1]&&(d[1]=P.MaxValues[1]),P.MaxValues[2]>d[2]&&(d[2]=P.MaxValues[2])}if(m===0||m===n){s.startIndex=r,s.triangleCount=n,this.Nodes[e]=s;return}const h=r,p=r+m,b=new ds(u,c,-1,h),g=new ds(f,d,-1,p),v=this.Nodes.length;this.Nodes.push(b);const S=this.Nodes.length;this.Nodes.push(g),s.startIndex=v,this.Nodes[e]=s,this.buildTree(v,h,m,i+1),this.buildTree(S,p,n-m,i+1)}else s.startIndex=r,s.triangleCount=n,this.Nodes[e]=s}computeCost(e,r){return r===0?0:(e[0]*e[1]+e[1]*e[2]+e[2]*e[0])*r}expandBin(e,r){e.count++;for(let n=0;n<3;n++)r.MinValues[n]<e.minBounds[n]&&(e.minBounds[n]=r.MinValues[n]),r.MaxValues[n]>e.maxBounds[n]&&(e.maxBounds[n]=r.MaxValues[n])}mergeBins(e,r){return{count:e.count+r.count,minBounds:[Math.min(e.minBounds[0],r.minBounds[0]),Math.min(e.minBounds[1],r.minBounds[1]),Math.min(e.minBounds[2],r.minBounds[2])],maxBounds:[Math.max(e.maxBounds[0],r.maxBounds[0]),Math.max(e.maxBounds[1],r.maxBounds[1]),Math.max(e.maxBounds[2],r.maxBounds[2])]}}chooseSplit(e,r,n){let s=Number.MAX_VALUE,a=-1,o=0;for(let l=0;l<3;l++){const u=e.minBounds[l],f=e.maxBounds[l]-u;if(f<1e-5)continue;const d=[];for(let p=0;p<12;p++)d.push({count:0,minBounds:[it,it,it],maxBounds:[st,st,st]});for(let p=0;p<n;p++){const b=this.builtTriangles[r+p],g=(b.center[l]-u)/f;let v=Math.floor(g*12);v>=12&&(v=11),v<0&&(v=0),this.expandBin(d[v],b)}const m=[];m[0]=d[0];for(let p=1;p<11;p++)m[p]=this.mergeBins(m[p-1],d[p]);const h=[];h[10]=d[11];for(let p=9;p>=0;p--)h[p]=this.mergeBins(h[p+1],d[p+1]);for(let p=0;p<11;p++){const b=[m[p].maxBounds[0]-m[p].minBounds[0],m[p].maxBounds[1]-m[p].minBounds[1],m[p].maxBounds[2]-m[p].minBounds[2]],g=[h[p].maxBounds[0]-h[p].minBounds[0],h[p].maxBounds[1]-h[p].minBounds[1],h[p].maxBounds[2]-h[p].minBounds[2]],v=this.computeCost(b,m[p].count)+this.computeCost(g,h[p].count);v<s&&(s=v,a=l,o=u+f*(p+1)/12)}}return{axis:a,position:o,cost:s}}generateWireframeGeometry(e=1/0){const r=[],n=(o,l)=>{r.push(o[0],o[1],o[2],l[0],l[1],l[2])},i=(o,l)=>{const u=[o[0],o[1],o[2]],c=[l[0],o[1],o[2]],f=[o[0],l[1],o[2]],d=[l[0],l[1],o[2]],m=[o[0],o[1],l[2]],h=[l[0],o[1],l[2]],p=[o[0],l[1],l[2]],b=[l[0],l[1],l[2]];n(u,c),n(c,d),n(d,f),n(f,u),n(m,h),n(h,b),n(b,p),n(p,m),n(u,m),n(c,h),n(f,p),n(d,b)},s=[{index:0,depth:0}];for(;s.length>0;){const{index:o,depth:l}=s.pop(),u=this.Nodes[o];l>=e||(u.triangleCount===-1?(s.push({index:u.startIndex,depth:l+1}),s.push({index:u.startIndex+1,depth:l+1}),l==e-1&&i(u.minBounds,u.maxBounds)):i(u.minBounds,u.maxBounds))}const a=new Float32Array(r);return{vertexData:a,count:a.length/3}}traverse(e,r=1/0){let n=Number.MAX_VALUE;const i=this.Nodes[0],s=fs(e,i.minBounds,i.maxBounds);if(s<0)return-1;const a=[{index:0,depth:0,dist:s}];for(;a.length>0;){const{index:o,depth:l,dist:u}=a.pop(),c=this.Nodes[o];if(u>=n)continue;if(c.triangleCount>=0||l===r){u<n&&(n=u);continue}const m=c.startIndex,h=c.startIndex+1,p=this.Nodes[m],b=this.Nodes[h],g=fs(e,p.minBounds,p.maxBounds),v=fs(e,b.minBounds,b.maxBounds);g>=0&&v>=0?g<v?(a.push({index:h,depth:l+1,dist:v}),a.push({index:m,depth:l+1,dist:g})):(a.push({index:m,depth:l+1,dist:g}),a.push({index:h,depth:l+1,dist:v})):g>=0?a.push({index:m,depth:l+1,dist:g}):v>=0&&a.push({index:h,depth:l+1,dist:v})}return n===Number.MAX_VALUE?-1:n}getFlattenedBVHData(e=0){const r=this.Nodes.length,n=new ArrayBuffer(r*8*4),i=new Float32Array(n),s=new Uint32Array(n),a=u=>{const c=this.Nodes[u];return c.triangleCount>0?1:1+a(c.startIndex)+a(c.startIndex+1)};let o=0;const l=(u,c)=>{const f=o++,d=this.Nodes[u];if(i[f*8+0]=d.minBounds[0],i[f*8+1]=d.minBounds[1],i[f*8+2]=d.minBounds[2],i[f*8+4]=d.maxBounds[0],i[f*8+5]=d.maxBounds[1],i[f*8+6]=d.maxBounds[2],s[f*8+7]=d.triangleCount>0?d.triangleCount:0,d.triangleCount>0)s[f*8+3]=d.startIndex;else{s[f*8+3]=c+e;const m=d.startIndex,h=f+1+a(m);l(m,h),l(d.startIndex+1,c)}};return l(0,r),{data:n,numNodes:r}}}async function Vu(t,e,r,n){return n._parse(t,e,r,n)}function kt(t,e){if(!t)throw new Error(e||"loader assertion failed.")}const Li=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),Ao=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Ao&&parseFloat(Ao[1]);const To=globalThis,Mo=globalThis.process||{};function Bm(t){if(typeof window<"u"&&window.process?.type==="renderer"||typeof process<"u"&&process.versions?.electron)return!0;const r=typeof navigator<"u"&&navigator.userAgent;return!!(r&&r.indexOf("Electron")>=0)}function Ba(){return!(typeof process=="object"&&String(process)==="[object process]"&&!process?.browser)||Bm()}const Hu="4.1.0";function Am(t){try{const e=window[t],r="__storage_test__";return e.setItem(r,r),e.removeItem(r),e}catch{return null}}class Tm{constructor(e,r,n="sessionStorage"){this.storage=Am(n),this.id=e,this.config=r,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){const r=JSON.stringify(this.config);this.storage.setItem(this.id,r)}}_loadConfiguration(){let e={};if(this.storage){const r=this.storage.getItem(this.id);e=r?JSON.parse(r):{}}return Object.assign(this.config,e),this}}function Mm(t){let e;return t<10?e=`${t.toFixed(2)}ms`:t<100?e=`${t.toFixed(1)}ms`:t<1e3?e=`${t.toFixed(0)}ms`:e=`${(t/1e3).toFixed(2)}s`,e}function Sm(t,e=8){const r=Math.max(e-t.length,0);return`${" ".repeat(r)}${t}`}var gi;(function(t){t[t.BLACK=30]="BLACK",t[t.RED=31]="RED",t[t.GREEN=32]="GREEN",t[t.YELLOW=33]="YELLOW",t[t.BLUE=34]="BLUE",t[t.MAGENTA=35]="MAGENTA",t[t.CYAN=36]="CYAN",t[t.WHITE=37]="WHITE",t[t.BRIGHT_BLACK=90]="BRIGHT_BLACK",t[t.BRIGHT_RED=91]="BRIGHT_RED",t[t.BRIGHT_GREEN=92]="BRIGHT_GREEN",t[t.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",t[t.BRIGHT_BLUE=94]="BRIGHT_BLUE",t[t.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",t[t.BRIGHT_CYAN=96]="BRIGHT_CYAN",t[t.BRIGHT_WHITE=97]="BRIGHT_WHITE"})(gi||(gi={}));const Pm=10;function So(t){return typeof t!="string"?t:(t=t.toUpperCase(),gi[t]||gi.WHITE)}function Em(t,e,r){return!Ba&&typeof t=="string"&&(e&&(t=`\x1B[${So(e)}m${t}\x1B[39m`),r&&(t=`\x1B[${So(r)+Pm}m${t}\x1B[49m`)),t}function Cm(t,e=["constructor"]){const r=Object.getPrototypeOf(t),n=Object.getOwnPropertyNames(r),i=t;for(const s of n){const a=i[s];typeof a=="function"&&(e.find(o=>s===o)||(i[s]=a.bind(t)))}}function Aa(t,e){if(!t)throw new Error("Assertion failed")}function Mr(){let t;if(Ba()&&To.performance)t=To?.performance?.now?.();else if("hrtime"in Mo){const e=Mo?.hrtime?.();t=e[0]*1e3+e[1]/1e6}else t=Date.now();return t}const Sr={debug:Ba()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},wm={enabled:!0,level:0};function Pr(){}const Po={},Eo={once:!0};class Ta{constructor({id:e}={id:""}){this.VERSION=Hu,this._startTs=Mr(),this._deltaTs=Mr(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new Tm(`__probe-${this.id}__`,wm),this.timeStamp(`${this.id} started`),Cm(this),Object.seal(this)}set level(e){this.setLevel(e)}get level(){return this.getLevel()}isEnabled(){return this._storage.config.enabled}getLevel(){return this._storage.config.level}getTotal(){return Number((Mr()-this._startTs).toPrecision(10))}getDelta(){return Number((Mr()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._storage.setConfiguration({enabled:e}),this}setLevel(e){return this._storage.setConfiguration({level:e}),this}get(e){return this._storage.config[e]}set(e,r){this._storage.setConfiguration({[e]:r})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,r){if(!e)throw new Error(r||"Assertion failed")}warn(e){return this._getLogFunction(0,e,Sr.warn,arguments,Eo)}error(e){return this._getLogFunction(0,e,Sr.error,arguments)}deprecated(e,r){return this.warn(`\`${e}\` is deprecated and will be removed in a later version. Use \`${r}\` instead`)}removed(e,r){return this.error(`\`${e}\` has been removed. Use \`${r}\` instead`)}probe(e,r){return this._getLogFunction(e,r,Sr.log,arguments,{time:!0,once:!0})}log(e,r){return this._getLogFunction(e,r,Sr.debug,arguments)}info(e,r){return this._getLogFunction(e,r,console.info,arguments)}once(e,r){return this._getLogFunction(e,r,Sr.debug||Sr.info,arguments,Eo)}table(e,r,n){return r?this._getLogFunction(e,r,console.table||Pr,n&&[n],{tag:Om(r)}):Pr}time(e,r){return this._getLogFunction(e,r,console.time?console.time:console.info)}timeEnd(e,r){return this._getLogFunction(e,r,console.timeEnd?console.timeEnd:console.info)}timeStamp(e,r){return this._getLogFunction(e,r,console.timeStamp||Pr)}group(e,r,n={collapsed:!1}){const i=Co({logLevel:e,message:r,opts:n}),{collapsed:s}=n;return i.method=(s?console.groupCollapsed:console.group)||console.info,this._getLogFunction(i)}groupCollapsed(e,r,n={}){return this.group(e,r,Object.assign({},n,{collapsed:!0}))}groupEnd(e){return this._getLogFunction(e,"",console.groupEnd||Pr)}withGroup(e,r,n){this.group(e,r)();try{n()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&this.getLevel()>=ku(e)}_getLogFunction(e,r,n,i,s){if(this._shouldLog(e)){s=Co({logLevel:e,message:r,args:i,opts:s}),n=n||s.method,Aa(n),s.total=this.getTotal(),s.delta=this.getDelta(),this._deltaTs=Mr();const a=s.tag||s.message;if(s.once&&a)if(!Po[a])Po[a]=Mr();else return Pr;return r=Rm(this.id,s.message,s),n.bind(console,r,...s.args)}return Pr}}Ta.VERSION=Hu;function ku(t){if(!t)return 0;let e;switch(typeof t){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return Aa(Number.isFinite(e)&&e>=0),e}function Co(t){const{logLevel:e,message:r}=t;t.logLevel=ku(e);const n=t.args?Array.from(t.args):[];for(;n.length&&n.shift()!==r;);switch(typeof e){case"string":case"function":r!==void 0&&n.unshift(r),t.message=e;break;case"object":Object.assign(t,e);break}typeof t.message=="function"&&(t.message=t.message());const i=typeof t.message;return Aa(i==="string"||i==="object"),Object.assign(t,{args:n},t.opts)}function Rm(t,e,r){if(typeof e=="string"){const n=r.time?Sm(Mm(r.total)):"";e=r.time?`${t}: ${n}  ${e}`:`${t}: ${e}`,e=Em(e,r.color,r.background)}return e}function Om(t){for(const e in t)for(const r in t[e])return r||"untitled";return"empty"}const hs="4.3.3",Im=hs[0]>="0"&&hs[0]<="9"?`v${hs}`:"";function Gm(){const t=new Ta({id:"loaders.gl"});return globalThis.loaders=globalThis.loaders||{},globalThis.loaders.log=t,globalThis.loaders.version=Im,globalThis.probe=globalThis.probe||{},globalThis.probe.loaders=t,t}const _m=Gm();function Um(t,e){return ju(t||{},e)}function ju(t,e,r=0){if(r>3)return e;const n={...t};for(const[i,s]of Object.entries(e))s&&typeof s=="object"&&!Array.isArray(s)?n[i]=ju(n[i]||{},e[i],r+1):n[i]=e[i];return n}function Dm(t){globalThis.loaders||={},globalThis.loaders.modules||={},Object.assign(globalThis.loaders.modules,t)}function Fm(t){return globalThis.loaders?.modules?.[t]||null}const Lm="latest";function Nm(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.3.3"),globalThis._loadersgl_.version}const zu=Nm();function jt(t,e){if(!t)throw new Error(e||"loaders.gl assertion failed.")}const ct=typeof process!="object"||String(process)!=="[object process]"||process.browser,Ma=typeof importScripts=="function",Vm=typeof window<"u"&&typeof window.orientation<"u",wo=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);wo&&parseFloat(wo[1]);class Hm{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,r){this.name=e,this.workerThread=r,this.result=new Promise((n,i)=>{this._resolve=n,this._reject=i})}postMessage(e,r){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:r})}done(e){jt(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){jt(this.isRunning),this.isRunning=!1,this._reject(e)}}class ms{terminate(){}}const ps=new Map;function km(t){jt(t.source&&!t.url||!t.source&&t.url);let e=ps.get(t.source||t.url);return e||(t.url&&(e=jm(t.url),ps.set(t.url,e)),t.source&&(e=Wu(t.source),ps.set(t.source,e))),jt(e),e}function jm(t){if(!t.startsWith("http"))return t;const e=zm(t);return Wu(e)}function Wu(t){const e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}function zm(t){return`try {
  importScripts('${t}');
} catch (error) {
  console.error(error);
  throw error;
}`}function qu(t,e=!0,r){const n=r||new Set;if(t){if(Ro(t))n.add(t);else if(Ro(t.buffer))n.add(t.buffer);else if(!ArrayBuffer.isView(t)){if(e&&typeof t=="object")for(const i in t)qu(t[i],e,n)}}return r===void 0?Array.from(n):[]}function Ro(t){return t?t instanceof ArrayBuffer||typeof MessagePort<"u"&&t instanceof MessagePort||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas:!1}const gs=()=>{};class qs{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return typeof Worker<"u"&&ct||typeof ms<"u"&&!ct}constructor(e){const{name:r,source:n,url:i}=e;jt(n||i),this.name=r,this.source=n,this.url=i,this.onMessage=gs,this.onError=s=>console.log(s),this.worker=ct?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=gs,this.onError=gs,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,r){r=r||qu(e),this.worker.postMessage(e,r)}_getErrorFromErrorEvent(e){let r="Failed to load ";return r+=`worker ${this.name} from ${this.url}. `,e.message&&(r+=`${e.message} in `),e.lineno&&(r+=`:${e.lineno}:${e.colno}`),new Error(r)}_createBrowserWorker(){this._loadableURL=km({source:this.source,url:this.url});const e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=r=>{r.data?this.onMessage(r.data):this.onError(new Error("No data received"))},e.onerror=r=>{this.onError(this._getErrorFromErrorEvent(r)),this.terminated=!0},e.onmessageerror=r=>console.error(r),e}_createNodeWorker(){let e;if(this.url){const n=this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`;e=new ms(n,{eval:!1})}else if(this.source)e=new ms(this.source,{eval:!0});else throw new Error("no worker");return e.on("message",r=>{this.onMessage(r)}),e.on("error",r=>{this.onError(r)}),e.on("exit",r=>{}),e}}class Wm{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return qs.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,r=(i,s,a)=>i.done(a),n=(i,s)=>i.error(s)){const i=new Promise(s=>(this.jobQueue.push({name:e,onMessage:r,onError:n,onStart:s}),this));return this._startQueuedJob(),await i}async _startQueuedJob(){if(!this.jobQueue.length)return;const e=this._getAvailableWorker();if(!e)return;const r=this.jobQueue.shift();if(r){this.onDebug({message:"Starting job",name:r.name,workerThread:e,backlog:this.jobQueue.length});const n=new Hm(r.name,e);e.onMessage=i=>r.onMessage(n,i.type,i.payload),e.onError=i=>r.onError(n,i),r.onStart(n);try{await n.result}catch(i){console.error(`Worker exception: ${i}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!ct||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this._getMaxConcurrency()){this.count++;const e=`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;return new qs({name:e,source:this.source,url:this.url})}return null}_getMaxConcurrency(){return Vm?this.maxMobileConcurrency:this.maxConcurrency}}const qm={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class Xt{props;workerPools=new Map;static _workerFarm;static isSupported(){return qs.isSupported()}static getWorkerFarm(e={}){return Xt._workerFarm=Xt._workerFarm||new Xt({}),Xt._workerFarm.setProps(e),Xt._workerFarm}constructor(e){this.props={...qm},this.setProps(e),this.workerPools=new Map}destroy(){for(const e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(const r of this.workerPools.values())r.setProps(this._getWorkerPoolProps())}getWorkerPool(e){const{name:r,source:n,url:i}=e;let s=this.workerPools.get(r);return s||(s=new Wm({name:r,source:n,url:i}),s.setProps(this._getWorkerPoolProps()),this.workerPools.set(r,s)),s}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}function Km(t,e={}){const r=e[t.id]||{},n=ct?`${t.id}-worker.js`:`${t.id}-worker-node.js`;let i=r.workerUrl;if(!i&&t.id==="compression"&&(i=e.workerUrl),e._workerType==="test"&&(ct?i=`modules/${t.module}/dist/${n}`:i=`modules/${t.module}/src/workers/${t.id}-worker-node.ts`),!i){let s=t.version;s==="latest"&&(s=Lm);const a=s?`@${s}`:"";i=`https://unpkg.com/@loaders.gl/${t.module}${a}/dist/${n}`}return jt(i),i}function Jm(t,e=zu){jt(t,"no worker provided");const r=t.version;return!(!e||!r)}const bs={};async function yr(t,e=null,r={},n=null){return e&&(t=Ym(t,e,r,n)),bs[t]=bs[t]||Xm(t),await bs[t]}function Ym(t,e,r={},n=null){if(!r.useLocalLibraries&&t.startsWith("http"))return t;n=n||t;const i=r.modules||{};return i[n]?i[n]:ct?r.CDN?(jt(r.CDN.startsWith("http")),`${r.CDN}/${e}@${zu}/dist/libs/${n}`):Ma?`../src/libs/${n}`:`modules/${e}/src/libs/${n}`:`modules/${e}/dist/libs/${n}`}async function Xm(t){if(t.endsWith("wasm"))return await $m(t);if(!ct)try{const{requireFromFile:r}=globalThis.loaders||{};return await r?.(t)}catch(r){return console.error(r),null}if(Ma)return importScripts(t);const e=await Zm(t);return Qm(e,t)}function Qm(t,e){if(!ct){const{requireFromString:n}=globalThis.loaders||{};return n?.(t,e)}if(Ma)return eval.call(globalThis,t),null;const r=document.createElement("script");r.id=e;try{r.appendChild(document.createTextNode(t))}catch{r.text=t}return document.body.appendChild(r),null}async function $m(t){const{readFileAsArrayBuffer:e}=globalThis.loaders||{};return ct||!e||t.startsWith("http")?await(await fetch(t)).arrayBuffer():await e(t)}async function Zm(t){const{readFileAsText:e}=globalThis.loaders||{};return ct||!e||t.startsWith("http")?await(await fetch(t)).text():await e(t)}function ep(t,e){return!Xt.isSupported()||!ct&&!e?._nodeWorkers?!1:t.worker&&e?.worker}async function tp(t,e,r,n,i){const s=t.id,a=Km(t,r),l=Xt.getWorkerFarm(r).getWorkerPool({name:s,url:a});r=JSON.parse(JSON.stringify(r)),n=JSON.parse(JSON.stringify(n||{}));const u=await l.startJob("process-on-worker",rp.bind(null,i));return u.postMessage("process",{input:e,options:r,context:n}),await(await u.result).result}async function rp(t,e,r,n){switch(r){case"done":e.done(n);break;case"error":e.error(new Error(n.error));break;case"process":const{id:i,input:s,options:a}=n;try{const o=await t(s,a);e.postMessage("done",{id:i,result:o})}catch(o){const l=o instanceof Error?o.message:"unknown error";e.postMessage("error",{id:i,error:l})}break;default:console.warn(`parse-with-worker unknown message ${r}`)}}function np(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Oo(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Oo(t,0,e):""}function Oo(t,e,r){if(t.byteLength<=e+r)return"";const n=new DataView(t);let i="";for(let s=0;s<r;s++)i+=String.fromCharCode(n.getUint8(e+s));return i}function ip(t){try{return JSON.parse(t)}catch{throw new Error(`Failed to parse JSON from data starting with "${np(t)}"`)}}function sp(t,e,r){if(r=r||t.byteLength,t.byteLength<r||e.byteLength<r)return!1;const n=new Uint8Array(t),i=new Uint8Array(e);for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}function ap(...t){return op(t)}function op(t){const e=t.map(s=>s instanceof ArrayBuffer?new Uint8Array(s):s),r=e.reduce((s,a)=>s+a.byteLength,0),n=new Uint8Array(r);let i=0;for(const s of e)n.set(s,i),i+=s.byteLength;return n.buffer}function Ku(t,e,r){const n=r!==void 0?new Uint8Array(t).subarray(e,e+r):new Uint8Array(t).subarray(e);return new Uint8Array(n).buffer}function Dn(t,e){return kt(t>=0),kt(e>0),t+(e-1)&-4}function lp(t,e,r){let n;if(t instanceof ArrayBuffer)n=new Uint8Array(t);else{const i=t.byteOffset,s=t.byteLength;n=new Uint8Array(t.buffer||t.arrayBuffer,i,s)}return e.set(n,r),r+Dn(n.byteLength,4)}async function up(t){const e=[];for await(const r of t)e.push(r);return ap(...e)}let cp="";const Io={};function fp(t){for(const e in Io)if(t.startsWith(e)){const r=Io[e];t=t.replace(e,r)}return!t.startsWith("http://")&&!t.startsWith("https://")&&(t=`${cp}${t}`),t}function dp(t){return t&&typeof t=="object"&&t.isBuffer}function Ju(t){if(dp(t))return t;if(t instanceof ArrayBuffer)return t;if(ArrayBuffer.isView(t))return t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer:t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);if(typeof t=="string"){const e=t;return new TextEncoder().encode(e).buffer}if(t&&typeof t=="object"&&t._toArrayBuffer)return t._toArrayBuffer();throw new Error("toArrayBuffer")}function Yu(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(e+1):""}function hp(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(0,e):""}const mp=t=>typeof t=="boolean",xn=t=>typeof t=="function",Fn=t=>t!==null&&typeof t=="object",Go=t=>Fn(t)&&t.constructor==={}.constructor,pp=t=>!!t&&typeof t[Symbol.iterator]=="function",gp=t=>t&&typeof t[Symbol.asyncIterator]=="function",xr=t=>typeof Response<"u"&&t instanceof Response||t&&t.arrayBuffer&&t.text&&t.json,Br=t=>typeof Blob<"u"&&t instanceof Blob,bp=t=>t&&typeof t=="object"&&t.isBuffer,yp=t=>typeof ReadableStream<"u"&&t instanceof ReadableStream||Fn(t)&&xn(t.tee)&&xn(t.cancel)&&xn(t.getReader),vp=t=>Fn(t)&&xn(t.read)&&xn(t.pipe)&&mp(t.readable),Xu=t=>yp(t)||vp(t);class xp extends Error{constructor(e,r){super(e),this.reason=r.reason,this.url=r.url,this.response=r.response}reason;url;response}const Bp=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,Ap=/^([-\w.]+\/[-\w.+]+)/;function _o(t,e){return t.toLowerCase()===e.toLowerCase()}function Tp(t){const e=Ap.exec(t);return e?e[1]:t}function Uo(t){const e=Bp.exec(t);return e?e[1]:""}const Qu=/\?.*/;function Mp(t){const e=t.match(Qu);return e&&e[0]}function Sa(t){return t.replace(Qu,"")}function Sp(t){if(t.length<50)return t;const e=t.slice(t.length-15);return`${t.substr(0,32)}...${e}`}function Ni(t){return xr(t)?t.url:Br(t)?t.name||"":typeof t=="string"?t:""}function Pa(t){if(xr(t)){const e=t,r=e.headers.get("content-type")||"",n=Sa(e.url);return Tp(r)||Uo(n)}return Br(t)?t.type||"":typeof t=="string"?Uo(t):""}function Pp(t){return xr(t)?t.headers["content-length"]||-1:Br(t)?t.size:typeof t=="string"?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1}async function $u(t){if(xr(t))return t;const e={},r=Pp(t);r>=0&&(e["content-length"]=String(r));const n=Ni(t),i=Pa(t);i&&(e["content-type"]=i);const s=await wp(t);s&&(e["x-first-bytes"]=s),typeof t=="string"&&(t=new TextEncoder().encode(t));const a=new Response(t,{headers:e});return Object.defineProperty(a,"url",{value:n}),a}async function Ep(t){if(!t.ok)throw await Cp(t)}async function Cp(t){const e=Sp(t.url);let r=`Failed to fetch resource (${t.status}) ${t.statusText}: ${e}`;r=r.length>100?`${r.slice(0,100)}...`:r;const n={reason:t.statusText,url:t.url,response:t};try{const i=t.headers.get("Content-Type");n.reason=!t.bodyUsed&&i?.includes("application/json")?await t.json():await t.text()}catch{}return new xp(r,n)}async function wp(t){if(typeof t=="string")return`data:,${t.slice(0,5)}`;if(t instanceof Blob){const r=t.slice(0,5);return await new Promise(n=>{const i=new FileReader;i.onload=s=>n(s?.target?.result),i.readAsDataURL(r)})}if(t instanceof ArrayBuffer){const r=t.slice(0,5);return`data:base64,${Rp(r)}`}return null}function Rp(t){let e="";const r=new Uint8Array(t);for(let n=0;n<r.byteLength;n++)e+=String.fromCharCode(r[n]);return btoa(e)}function Op(t){return!Ip(t)&&!Gp(t)}function Ip(t){return t.startsWith("http:")||t.startsWith("https:")}function Gp(t){return t.startsWith("data:")}async function Do(t,e){if(typeof t=="string"){const r=fp(t);return Op(r)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,e):await fetch(r,e)}return await $u(t)}const Fo=new Ta({id:"loaders.gl"});class _p{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}class Up{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}}const Zu={fetch:null,mimeType:void 0,nothrow:!1,log:new Up,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:Li,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]},Dp={throws:"nothrow",dataType:"(no longer used)",uri:"baseUri",method:"fetch.method",headers:"fetch.headers",body:"fetch.body",mode:"fetch.mode",credentials:"fetch.credentials",cache:"fetch.cache",redirect:"fetch.redirect",referrer:"fetch.referrer",referrerPolicy:"fetch.referrerPolicy",integrity:"fetch.integrity",keepalive:"fetch.keepalive",signal:"fetch.signal"};function ec(){globalThis.loaders=globalThis.loaders||{};const{loaders:t}=globalThis;return t._state||(t._state={}),t._state}function tc(){const t=ec();return t.globalOptions=t.globalOptions||{...Zu},t.globalOptions}function Fp(t,e,r,n){return r=r||[],r=Array.isArray(r)?r:[r],Lp(t,r),Vp(e,t,n)}function Lp(t,e){Lo(t,null,Zu,Dp,e);for(const r of e){const n=t&&t[r.id]||{},i=r.options&&r.options[r.id]||{},s=r.deprecatedOptions&&r.deprecatedOptions[r.id]||{};Lo(n,r.id,i,s,e)}}function Lo(t,e,r,n,i){const s=e||"Top level",a=e?`${e}.`:"";for(const o in t){const l=!e&&Fn(t[o]),u=o==="baseUri"&&!e,c=o==="workerUrl"&&e;if(!(o in r)&&!u&&!c){if(o in n)Fo.warn(`${s} loader option '${a}${o}' no longer supported, use '${n[o]}'`)();else if(!l){const f=Np(o,i);Fo.warn(`${s} loader option '${a}${o}' not recognized. ${f}`)()}}}}function Np(t,e){const r=t.toLowerCase();let n="";for(const i of e)for(const s in i.options){if(t===s)return`Did you mean '${i.id}.${s}'?`;const a=s.toLowerCase();(r.startsWith(a)||a.startsWith(r))&&(n=n||`Did you mean '${i.id}.${s}'?`)}return n}function Vp(t,e,r){const i={...t.options||{}};return Hp(i,r),i.log===null&&(i.log=new _p),No(i,tc()),No(i,e),i}function No(t,e){for(const r in e)if(r in e){const n=e[r];Go(n)&&Go(t[r])?t[r]={...t[r],...e[r]}:t[r]=e[r]}}function Hp(t,e){e&&!("baseUri"in t)&&(t.baseUri=e)}function Ea(t){return t?(Array.isArray(t)&&(t=t[0]),Array.isArray(t?.extensions)):!1}function rc(t){kt(t,"null loader"),kt(Ea(t),"invalid loader");let e;return Array.isArray(t)&&(e=t[1],t=t[0],t={...t,options:{...t.options,...e}}),(t?.parseTextSync||t?.parseText)&&(t.text=!0),t.text||(t.binary=!0),t}const kp=()=>{const t=ec();return t.loaderRegistry=t.loaderRegistry||[],t.loaderRegistry};function jp(){return kp()}const zp=/\.([^.]+)$/;async function Wp(t,e=[],r,n){if(!nc(t))return null;let i=Vo(t,e,{...r,nothrow:!0},n);if(i)return i;if(Br(t)&&(t=await t.slice(0,10).arrayBuffer(),i=Vo(t,e,r,n)),!i&&!r?.nothrow)throw new Error(ic(t));return i}function Vo(t,e=[],r,n){if(!nc(t))return null;if(e&&!Array.isArray(e))return rc(e);let i=[];e&&(i=i.concat(e)),r?.ignoreRegisteredLoaders||i.push(...jp()),Kp(i);const s=qp(t,i,r,n);if(!s&&!r?.nothrow)throw new Error(ic(t));return s}function qp(t,e,r,n){const i=Ni(t),s=Pa(t),a=Sa(i)||n?.url;let o=null,l="";return r?.mimeType&&(o=ys(e,r?.mimeType),l=`match forced by supplied MIME type ${r?.mimeType}`),o=o||Jp(e,a),l=l||(o?`matched url ${a}`:""),o=o||ys(e,s),l=l||(o?`matched MIME type ${s}`:""),o=o||Xp(e,t),l=l||(o?`matched initial data ${sc(t)}`:""),r?.fallbackMimeType&&(o=o||ys(e,r?.fallbackMimeType),l=l||(o?`matched fallback MIME type ${s}`:"")),l&&_m.log(1,`selectLoader selected ${o?.name}: ${l}.`),o}function nc(t){return!(t instanceof Response&&t.status===204)}function ic(t){const e=Ni(t),r=Pa(t);let n="No valid loader found (";n+=e?`${Yu(e)}, `:"no url provided, ",n+=`MIME type: ${r?`"${r}"`:"not provided"}, `;const i=t?sc(t):"";return n+=i?` first bytes: "${i}"`:"first bytes: not available",n+=")",n}function Kp(t){for(const e of t)rc(e)}function Jp(t,e){const r=e&&zp.exec(e),n=r&&r[1];return n?Yp(t,n):null}function Yp(t,e){e=e.toLowerCase();for(const r of t)for(const n of r.extensions)if(n.toLowerCase()===e)return r;return null}function ys(t,e){for(const r of t)if(r.mimeTypes?.some(n=>_o(e,n))||_o(e,`application/x.${r.id}`))return r;return null}function Xp(t,e){if(!e)return null;for(const r of t)if(typeof e=="string"){if(Qp(e,r))return r}else if(ArrayBuffer.isView(e)){if(Ho(e.buffer,e.byteOffset,r))return r}else if(e instanceof ArrayBuffer&&Ho(e,0,r))return r;return null}function Qp(t,e){return e.testText?e.testText(t):(Array.isArray(e.tests)?e.tests:[e.tests]).some(n=>t.startsWith(n))}function Ho(t,e,r){return(Array.isArray(r.tests)?r.tests:[r.tests]).some(i=>$p(t,e,r,i))}function $p(t,e,r,n){if(n instanceof ArrayBuffer)return sp(n,t,n.byteLength);switch(typeof n){case"function":return n(t);case"string":const i=Ks(t,e,n.length);return n===i;default:return!1}}function sc(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Ks(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Ks(t,0,e):""}function Ks(t,e,r){if(t.byteLength<e+r)return"";const n=new DataView(t);let i="";for(let s=0;s<r;s++)i+=String.fromCharCode(n.getUint8(e+s));return i}const Zp=256*1024;function*e0(t,e){const r=e?.chunkSize||Zp;let n=0;const i=new TextEncoder;for(;n<t.length;){const s=Math.min(t.length-n,r),a=t.slice(n,n+s);n+=s,yield i.encode(a)}}const t0=256*1024;function*r0(t,e={}){const{chunkSize:r=t0}=e;let n=0;for(;n<t.byteLength;){const i=Math.min(t.byteLength-n,r),s=new ArrayBuffer(i),a=new Uint8Array(t,n,i);new Uint8Array(s).set(a),n+=i,yield s}}const n0=1024*1024;async function*i0(t,e){const r=e?.chunkSize||n0;let n=0;for(;n<t.size;){const i=n+r,s=await t.slice(n,i).arrayBuffer();n=i,yield s}}function ko(t,e){return Li?s0(t,e):a0(t)}async function*s0(t,e){const r=t.getReader();let n;try{for(;;){const i=n||r.read();e?._streamReadAhead&&(n=r.read());const{done:s,value:a}=await i;if(s)return;yield Ju(a)}}catch{r.releaseLock()}}async function*a0(t,e){for await(const r of t)yield Ju(r)}function o0(t,e){if(typeof t=="string")return e0(t,e);if(t instanceof ArrayBuffer)return r0(t,e);if(Br(t))return i0(t,e);if(Xu(t))return ko(t,e);if(xr(t))return ko(t.body,e);throw new Error("makeIterator")}const ac="Cannot convert supplied data type";function l0(t,e,r){if(e.text&&typeof t=="string")return t;if(bp(t)&&(t=t.buffer),t instanceof ArrayBuffer){const n=t;return e.text&&!e.binary?new TextDecoder("utf8").decode(n):n}if(ArrayBuffer.isView(t)){if(e.text&&!e.binary)return new TextDecoder("utf8").decode(t);let n=t.buffer;const i=t.byteLength||t.length;return(t.byteOffset!==0||i!==n.byteLength)&&(n=n.slice(t.byteOffset,t.byteOffset+i)),n}throw new Error(ac)}async function u0(t,e,r){const n=t instanceof ArrayBuffer||ArrayBuffer.isView(t);if(typeof t=="string"||n)return l0(t,e);if(Br(t)&&(t=await $u(t)),xr(t)){const i=t;return await Ep(i),e.binary?await i.arrayBuffer():await i.text()}if(Xu(t)&&(t=o0(t,r)),pp(t)||gp(t))return up(t);throw new Error(ac)}function oc(t,e){const r=tc(),n=t||r;return typeof n.fetch=="function"?n.fetch:Fn(n.fetch)?i=>Do(i,n.fetch):e?.fetch?e?.fetch:Do}function c0(t,e,r){if(r)return r;const n={fetch:oc(e,t),...t};if(n.url){const i=Sa(n.url);n.baseUrl=i,n.queryString=Mp(n.url),n.filename=Yu(i),n.baseUrl=hp(i)}return Array.isArray(n.loaders)||(n.loaders=null),n}function f0(t,e){if(t&&!Array.isArray(t))return t;let r;if(t&&(r=Array.isArray(t)?t:[t]),e&&e.loaders){const n=Array.isArray(e.loaders)?e.loaders:[e.loaders];r=r?[...r,...n]:n}return r&&r.length?r:void 0}async function bi(t,e,r,n){e&&!Array.isArray(e)&&!Ea(e)&&(n=void 0,r=e,e=void 0),t=await t,r=r||{};const i=Ni(t),a=f0(e,n),o=await Wp(t,a,r);return o?(r=Fp(r,o,a,i),n=c0({url:i,_parse:bi,loaders:a},r,n||null),await d0(o,t,r,n)):null}async function d0(t,e,r,n){if(Jm(t),r=Um(t.options,r),xr(e)){const s=e,{ok:a,redirected:o,status:l,statusText:u,type:c,url:f}=s,d=Object.fromEntries(s.headers.entries());n.response={headers:d,ok:a,redirected:o,status:l,statusText:u,type:c,url:f}}e=await u0(e,t,r);const i=t;if(i.parseTextSync&&typeof e=="string")return i.parseTextSync(e,r,n);if(ep(t,r))return await tp(t,e,r,n,bi);if(i.parseText&&typeof e=="string")return await i.parseText(e,r,n);if(i.parse)return await i.parse(e,r,n);throw jt(!i.parseSync),new Error(`${t.id} loader - no parser found and worker is disabled`)}function h0(t){switch(t.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function m0(t){let e=1/0,r=1/0,n=1/0,i=-1/0,s=-1/0,a=-1/0;const o=t.POSITION?t.POSITION.value:[],l=o&&o.length;for(let u=0;u<l;u+=3){const c=o[u],f=o[u+1],d=o[u+2];e=c<e?c:e,r=f<r?f:r,n=d<n?d:n,i=c>i?c:i,s=f>s?f:s,a=d>a?d:a}return[[e,r,n],[i,s,a]]}function p0(t,e,r){const n=h0(e.value),i=r||g0(e);return{name:t,type:{type:"fixed-size-list",listSize:e.size,children:[{name:"value",type:n}]},nullable:!1,metadata:i}}function g0(t){const e={};return"byteOffset"in t&&(e.byteOffset=t.byteOffset.toString(10)),"byteStride"in t&&(e.byteStride=t.byteStride.toString(10)),"normalized"in t&&(e.normalized=t.normalized.toString()),e}async function b0(t,e,r,n){let i,s;!Array.isArray(e)&&!Ea(e)?(i=[],s=e):(i=e,s=r);const a=oc(s);let o=t;return typeof t=="string"&&(o=await a(t)),Br(t)&&(o=await a(t)),Array.isArray(i)?await bi(o,i,s):await bi(o,i,s)}const y0="4.3.3",v0=globalThis.loaders?.parseImageNode,Js=typeof Image<"u",Ys=typeof ImageBitmap<"u",x0=!!v0,Xs=Li?!0:x0;function B0(t){switch(t){case"auto":return Ys||Js||Xs;case"imagebitmap":return Ys;case"image":return Js;case"data":return Xs;default:throw new Error(`@loaders.gl/images: image ${t} not supported in this environment`)}}function A0(){if(Ys)return"imagebitmap";if(Js)return"image";if(Xs)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function T0(t){const e=M0(t);if(!e)throw new Error("Not an image");return e}function lc(t){switch(T0(t)){case"data":return t;case"image":case"imagebitmap":const e=document.createElement("canvas"),r=e.getContext("2d");if(!r)throw new Error("getImageData");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height);default:throw new Error("getImageData")}}function M0(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap?"imagebitmap":typeof Image<"u"&&t instanceof Image?"image":t&&typeof t=="object"&&t.data&&t.width&&t.height?"data":null}const S0=/^data:image\/svg\+xml/,P0=/\.svg((\?|#).*)?$/;function Ca(t){return t&&(S0.test(t)||P0.test(t))}function E0(t,e){if(Ca(e)){let n=new TextDecoder().decode(t);try{typeof unescape=="function"&&typeof encodeURIComponent=="function"&&(n=unescape(encodeURIComponent(n)))}catch(s){throw new Error(s.message)}return`data:image/svg+xml;base64,${btoa(n)}`}return uc(t,e)}function uc(t,e){if(Ca(e))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(t)])}async function cc(t,e,r){const n=E0(t,r),i=self.URL||self.webkitURL,s=typeof n!="string"&&i.createObjectURL(n);try{return await C0(s||n,e)}finally{s&&i.revokeObjectURL(s)}}async function C0(t,e){const r=new Image;return r.src=t,e.image&&e.image.decode&&r.decode?(await r.decode(),r):await new Promise((n,i)=>{try{r.onload=()=>n(r),r.onerror=s=>{const a=s instanceof Error?s.message:"error";i(new Error(a))}}catch(s){i(s)}})}const w0={};let jo=!0;async function R0(t,e,r){let n;Ca(r)?n=await cc(t,e,r):n=uc(t,r);const i=e&&e.imagebitmap;return await O0(n,i)}async function O0(t,e=null){if((I0(e)||!jo)&&(e=null),e)try{return await createImageBitmap(t,e)}catch(r){console.warn(r),jo=!1}return await createImageBitmap(t)}function I0(t){for(const e in t||w0)return!1;return!0}function G0(t){return!F0(t,"ftyp",4)||(t[8]&96)===0?null:_0(t)}function _0(t){switch(U0(t,8,12).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}function U0(t,e,r){return String.fromCharCode(...t.slice(e,r))}function D0(t){return[...t].map(e=>e.charCodeAt(0))}function F0(t,e,r=0){const n=D0(e);for(let i=0;i<n.length;++i)if(n[i]!==t[i+r])return!1;return!0}const Et=!1,Bn=!0;function wa(t){const e=Ln(t);return N0(e)||k0(e)||V0(e)||H0(e)||L0(e)}function L0(t){const e=new Uint8Array(t instanceof DataView?t.buffer:t),r=G0(e);return r?{mimeType:r.mimeType,width:0,height:0}:null}function N0(t){const e=Ln(t);return e.byteLength>=24&&e.getUint32(0,Et)===2303741511?{mimeType:"image/png",width:e.getUint32(16,Et),height:e.getUint32(20,Et)}:null}function V0(t){const e=Ln(t);return e.byteLength>=10&&e.getUint32(0,Et)===1195984440?{mimeType:"image/gif",width:e.getUint16(6,Bn),height:e.getUint16(8,Bn)}:null}function H0(t){const e=Ln(t);return e.byteLength>=14&&e.getUint16(0,Et)===16973&&e.getUint32(2,Bn)===e.byteLength?{mimeType:"image/bmp",width:e.getUint32(18,Bn),height:e.getUint32(22,Bn)}:null}function k0(t){const e=Ln(t);if(!(e.byteLength>=3&&e.getUint16(0,Et)===65496&&e.getUint8(2)===255))return null;const{tableMarkers:n,sofMarkers:i}=j0();let s=2;for(;s+9<e.byteLength;){const a=e.getUint16(s,Et);if(i.has(a))return{mimeType:"image/jpeg",height:e.getUint16(s+5,Et),width:e.getUint16(s+7,Et)};if(!n.has(a))return null;s+=2,s+=e.getUint16(s,Et)}return null}function j0(){const t=new Set([65499,65476,65484,65501,65534]);for(let r=65504;r<65520;++r)t.add(r);return{tableMarkers:t,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function Ln(t){if(t instanceof DataView)return t;if(ArrayBuffer.isView(t))return new DataView(t.buffer);if(t instanceof ArrayBuffer)return new DataView(t);throw new Error("toDataView")}async function z0(t,e){const{mimeType:r}=wa(t)||{},n=globalThis.loaders?.parseImageNode;return kt(n),await n(t,r)}async function W0(t,e,r){e=e||{};const i=(e.image||{}).type||"auto",{url:s}=r||{},a=q0(i);let o;switch(a){case"imagebitmap":o=await R0(t,e,s);break;case"image":o=await cc(t,e,s);break;case"data":o=await z0(t);break;default:kt(!1)}return i==="data"&&(o=lc(o)),o}function q0(t){switch(t){case"auto":case"data":return A0();default:return B0(t),t}}const K0=["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],J0=["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],Y0={image:{type:"auto",decode:!0}},X0={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:y0,mimeTypes:J0,extensions:K0,parse:W0,tests:[t=>!!wa(new DataView(t))],options:Y0},vs={};function Q0(t){if(vs[t]===void 0){const e=Li?Z0(t):$0(t);vs[t]=e}return vs[t]}function $0(t){const e=["image/png","image/jpeg","image/gif"],r=globalThis.loaders?.imageFormatsNode||e;return!!globalThis.loaders?.parseImageNode&&r.includes(t)}function Z0(t){switch(t){case"image/avif":case"image/webp":return eg(t);default:return!0}}function eg(t){try{return document.createElement("canvas").toDataURL(t).indexOf(`data:${t}`)===0}catch{return!1}}function nt(t,e){if(!t)throw new Error(e||"assert failed: gltf")}const fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},zo=["SCALAR","VEC2","VEC3","VEC4"],tg=[[Int8Array,5120],[Uint8Array,5121],[Int16Array,5122],[Uint16Array,5123],[Uint32Array,5125],[Float32Array,5126],[Float64Array,5130]],rg=new Map(tg),ng={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ig={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},sg={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function hc(t){return zo[t-1]||zo[0]}function Vi(t){const e=rg.get(t.constructor);if(!e)throw new Error("Illegal typed array");return e}function Ra(t,e){const r=sg[t.componentType],n=ng[t.type],i=ig[t.componentType],s=t.count*n,a=t.count*n*i;nt(a>=0&&a<=e.byteLength);const o=dc[t.componentType],l=fc[t.type];return{ArrayType:r,length:s,byteLength:a,componentByteSize:o,numberOfComponentsInElement:l}}function ag(t,e,r){const n=t.bufferViews[r];nt(n);const i=n.buffer,s=e[i];nt(s);const a=(n.byteOffset||0)+s.byteOffset;return new Uint8Array(s.arrayBuffer,a,n.byteLength)}function og(t,e,r){const n=typeof r=="number"?t.accessors?.[r]:r;if(!n)throw new Error(`No gltf accessor ${JSON.stringify(r)}`);const i=t.bufferViews?.[n.bufferView||0];if(!i)throw new Error(`No gltf buffer view for accessor ${i}`);const{arrayBuffer:s,byteOffset:a}=e[i.buffer],o=(a||0)+(n.byteOffset||0)+(i.byteOffset||0),{ArrayType:l,length:u,componentByteSize:c,numberOfComponentsInElement:f}=Ra(n,i),d=c*f,m=i.byteStride||d;if(typeof i.byteStride>"u"||i.byteStride===d)return new l(s,o,u);const h=new l(u);for(let p=0;p<n.count;p++){const b=new l(s,o+p*m,f);h.set(b,p*f)}return h}function lg(){return{asset:{version:"2.0",generator:"loaders.gl"},buffers:[],extensions:{},extensionsRequired:[],extensionsUsed:[]}}class Ge{gltf;sourceBuffers;byteLength;constructor(e){this.gltf={json:e?.json||lg(),buffers:e?.buffers||[],images:e?.images||[]},this.sourceBuffers=[],this.byteLength=0,this.gltf.buffers&&this.gltf.buffers[0]&&(this.byteLength=this.gltf.buffers[0].byteLength,this.sourceBuffers=[this.gltf.buffers[0]])}get json(){return this.gltf.json}getApplicationData(e){return this.json[e]}getExtraData(e){return(this.json.extras||{})[e]}hasExtension(e){const r=this.getUsedExtensions().find(i=>i===e),n=this.getRequiredExtensions().find(i=>i===e);return typeof r=="string"||typeof n=="string"}getExtension(e){const r=this.getUsedExtensions().find(i=>i===e),n=this.json.extensions||{};return r?n[e]:null}getRequiredExtension(e){return this.getRequiredExtensions().find(n=>n===e)?this.getExtension(e):null}getRequiredExtensions(){return this.json.extensionsRequired||[]}getUsedExtensions(){return this.json.extensionsUsed||[]}getRemovedExtensions(){return this.json.extensionsRemoved||[]}getObjectExtension(e,r){return(e.extensions||{})[r]}getScene(e){return this.getObject("scenes",e)}getNode(e){return this.getObject("nodes",e)}getSkin(e){return this.getObject("skins",e)}getMesh(e){return this.getObject("meshes",e)}getMaterial(e){return this.getObject("materials",e)}getAccessor(e){return this.getObject("accessors",e)}getTexture(e){return this.getObject("textures",e)}getSampler(e){return this.getObject("samplers",e)}getImage(e){return this.getObject("images",e)}getBufferView(e){return this.getObject("bufferViews",e)}getBuffer(e){return this.getObject("buffers",e)}getObject(e,r){if(typeof r=="object")return r;const n=this.json[e]&&this.json[e][r];if(!n)throw new Error(`glTF file error: Could not find ${e}[${r}]`);return n}getTypedArrayForBufferView(e){e=this.getBufferView(e);const r=e.buffer,n=this.gltf.buffers[r];nt(n);const i=(e.byteOffset||0)+n.byteOffset;return new Uint8Array(n.arrayBuffer,i,e.byteLength)}getTypedArrayForAccessor(e){const r=this.getAccessor(e);return og(this.gltf.json,this.gltf.buffers,r)}getTypedArrayForImageData(e){e=this.getAccessor(e);const r=this.getBufferView(e.bufferView),i=this.getBuffer(r.buffer).data,s=r.byteOffset||0;return new Uint8Array(i,s,r.byteLength)}addApplicationData(e,r){return this.json[e]=r,this}addExtraData(e,r){return this.json.extras=this.json.extras||{},this.json.extras[e]=r,this}addObjectExtension(e,r,n){return e.extensions=e.extensions||{},e.extensions[r]=n,this.registerUsedExtension(r),this}setObjectExtension(e,r,n){const i=e.extensions||{};i[r]=n}removeObjectExtension(e,r){const n=e?.extensions||{};if(n[r]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const i=this.json.extensionsRemoved;i.includes(r)||i.push(r)}delete n[r]}addExtension(e,r={}){return nt(r),this.json.extensions=this.json.extensions||{},this.json.extensions[e]=r,this.registerUsedExtension(e),r}addRequiredExtension(e,r={}){return nt(r),this.addExtension(e,r),this.registerRequiredExtension(e),r}registerUsedExtension(e){this.json.extensionsUsed=this.json.extensionsUsed||[],this.json.extensionsUsed.find(r=>r===e)||this.json.extensionsUsed.push(e)}registerRequiredExtension(e){this.registerUsedExtension(e),this.json.extensionsRequired=this.json.extensionsRequired||[],this.json.extensionsRequired.find(r=>r===e)||this.json.extensionsRequired.push(e)}removeExtension(e){if(this.json.extensions?.[e]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const r=this.json.extensionsRemoved;r.includes(e)||r.push(e)}this.json.extensions&&delete this.json.extensions[e],this.json.extensionsRequired&&this._removeStringFromArray(this.json.extensionsRequired,e),this.json.extensionsUsed&&this._removeStringFromArray(this.json.extensionsUsed,e)}setDefaultScene(e){this.json.scene=e}addScene(e){const{nodeIndices:r}=e;return this.json.scenes=this.json.scenes||[],this.json.scenes.push({nodes:r}),this.json.scenes.length-1}addNode(e){const{meshIndex:r,matrix:n}=e;this.json.nodes=this.json.nodes||[];const i={mesh:r};return n&&(i.matrix=n),this.json.nodes.push(i),this.json.nodes.length-1}addMesh(e){const{attributes:r,indices:n,material:i,mode:s=4}=e,o={primitives:[{attributes:this._addAttributes(r),mode:s}]};if(n){const l=this._addIndices(n);o.primitives[0].indices=l}return Number.isFinite(i)&&(o.primitives[0].material=i),this.json.meshes=this.json.meshes||[],this.json.meshes.push(o),this.json.meshes.length-1}addPointCloud(e){const n={primitives:[{attributes:this._addAttributes(e),mode:0}]};return this.json.meshes=this.json.meshes||[],this.json.meshes.push(n),this.json.meshes.length-1}addImage(e,r){const n=wa(e),i=r||n?.mimeType,a={bufferView:this.addBufferView(e),mimeType:i};return this.json.images=this.json.images||[],this.json.images.push(a),this.json.images.length-1}addBufferView(e,r=0,n=this.byteLength){const i=e.byteLength;nt(Number.isFinite(i)),this.sourceBuffers=this.sourceBuffers||[],this.sourceBuffers.push(e);const s={buffer:r,byteOffset:n,byteLength:i};return this.byteLength+=Dn(i,4),this.json.bufferViews=this.json.bufferViews||[],this.json.bufferViews.push(s),this.json.bufferViews.length-1}addAccessor(e,r){const n={bufferView:e,type:hc(r.size),componentType:r.componentType,count:r.count,max:r.max,min:r.min};return this.json.accessors=this.json.accessors||[],this.json.accessors.push(n),this.json.accessors.length-1}addBinaryBuffer(e,r={size:3}){const n=this.addBufferView(e);let i={min:r.min,max:r.max};(!i.min||!i.max)&&(i=this._getAccessorMinMax(e,r.size));const s={size:r.size,componentType:Vi(e),count:Math.round(e.length/r.size),min:i.min,max:i.max};return this.addAccessor(n,Object.assign(s,r))}addTexture(e){const{imageIndex:r}=e,n={source:r};return this.json.textures=this.json.textures||[],this.json.textures.push(n),this.json.textures.length-1}addMaterial(e){return this.json.materials=this.json.materials||[],this.json.materials.push(e),this.json.materials.length-1}createBinaryChunk(){const e=this.byteLength,r=new ArrayBuffer(e),n=new Uint8Array(r);let i=0;for(const s of this.sourceBuffers||[])i=lp(s,n,i);this.json?.buffers?.[0]?this.json.buffers[0].byteLength=e:this.json.buffers=[{byteLength:e}],this.gltf.binary=r,this.sourceBuffers=[r],this.gltf.buffers=[{arrayBuffer:r,byteOffset:0,byteLength:r.byteLength}]}_removeStringFromArray(e,r){let n=!0;for(;n;){const i=e.indexOf(r);i>-1?e.splice(i,1):n=!1}}_addAttributes(e={}){const r={};for(const n in e){const i=e[n],s=this._getGltfAttributeName(n),a=this.addBinaryBuffer(i.value,i);r[s]=a}return r}_addIndices(e){return this.addBinaryBuffer(e,{size:1})}_getGltfAttributeName(e){switch(e.toLowerCase()){case"position":case"positions":case"vertices":return"POSITION";case"normal":case"normals":return"NORMAL";case"color":case"colors":return"COLOR_0";case"texcoord":case"texcoords":return"TEXCOORD_0";default:return e}}_getAccessorMinMax(e,r){const n={min:null,max:null};if(e.length<r)return n;n.min=[],n.max=[];const i=e.subarray(0,r);for(const s of i)n.min.push(s),n.max.push(s);for(let s=r;s<e.length;s+=r)for(let a=0;a<r;a++)n.min[0+a]=Math.min(n.min[0+a],e[s+a]),n.max[0+a]=Math.max(n.max[0+a],e[s+a]);return n}}function Wo(t){return(t%1+1)%1}const mc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,BOOLEAN:1,STRING:1,ENUM:1},ug={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:BigInt64Array,UINT64:BigUint64Array,FLOAT32:Float32Array,FLOAT64:Float64Array},pc={INT8:1,UINT8:1,INT16:2,UINT16:2,INT32:4,UINT32:4,INT64:8,UINT64:8,FLOAT32:4,FLOAT64:8};function Oa(t,e){return pc[e]*mc[t]}function Hi(t,e,r,n){if(r!=="UINT8"&&r!=="UINT16"&&r!=="UINT32"&&r!=="UINT64")return null;const i=t.getTypedArrayForBufferView(e),s=ki(i,"SCALAR",r,n+1);return s instanceof BigInt64Array||s instanceof BigUint64Array?null:s}function ki(t,e,r,n=1){const i=mc[e],s=ug[r],a=pc[r],o=n*i,l=o*a;let u=t.buffer,c=t.byteOffset;return c%a!==0&&(u=new Uint8Array(u).slice(c,c+l).buffer,c=0),new s(u,c,o)}function Ia(t,e,r){const n=`TEXCOORD_${e.texCoord||0}`,i=r.attributes[n],s=t.getTypedArrayForAccessor(i),a=t.gltf.json,o=e.index,l=a.textures?.[o]?.source;if(typeof l<"u"){const u=a.images?.[l]?.mimeType,c=t.gltf.images?.[l];if(c&&typeof c.width<"u"){const f=[];for(let d=0;d<s.length;d+=2){const m=cg(c,u,s,d,e.channels);f.push(m)}return f}}return[]}function gc(t,e,r,n,i){if(!r?.length)return;const s=[];for(const c of r){let f=n.findIndex(d=>d===c);f===-1&&(f=n.push(c)-1),s.push(f)}const a=new Uint32Array(s),o=t.gltf.buffers.push({arrayBuffer:a.buffer,byteOffset:a.byteOffset,byteLength:a.byteLength})-1,l=t.addBufferView(a,o,0),u=t.addAccessor(l,{size:1,componentType:Vi(a),count:a.length});i.attributes[e]=u}function cg(t,e,r,n,i=[0]){const s={r:{offset:0,shift:0},g:{offset:1,shift:8},b:{offset:2,shift:16},a:{offset:3,shift:24}},a=r[n],o=r[n+1];let l=1;e&&(e.indexOf("image/jpeg")!==-1||e.indexOf("image/png")!==-1)&&(l=4);const u=fg(a,o,t,l);let c=0;for(const f of i){const d=typeof f=="number"?Object.values(s)[f]:s[f],m=u+d.offset,h=lc(t);if(h.data.length<=m)throw new Error(`${h.data.length} <= ${m}`);const p=h.data[m];c|=p<<d.shift}return c}function fg(t,e,r,n=1){const i=r.width,s=Wo(t)*(i-1),a=Math.round(s),o=r.height,l=Wo(e)*(o-1),u=Math.round(l),c=r.components?r.components:n;return(u*i+a)*c}function bc(t,e,r,n,i){const s=[];for(let a=0;a<e;a++){const o=r[a],l=r[a+1]-r[a];if(l+o>n)break;const u=o/i,c=l/i;s.push(t.slice(u,u+c))}return s}function yc(t,e,r){const n=[];for(let i=0;i<e;i++){const s=i*r;n.push(t.slice(s,s+r))}return n}function vc(t,e,r,n){if(r)throw new Error("Not implemented - arrayOffsets for strings is specified");if(n){const i=[],s=new TextDecoder("utf8");let a=0;for(let o=0;o<t;o++){const l=n[o+1]-n[o];if(l+a<=e.length){const u=e.subarray(a,l+a),c=s.decode(u);i.push(c),a+=l}}return i}return[]}const Hr="EXT_mesh_features",dg=Hr;async function hg(t,e){const r=new Ge(t);pg(r,e)}function mg(t,e){const r=new Ge(t);return bg(r),r.createBinaryChunk(),r.gltf}function pg(t,e){const r=t.gltf.json;if(r.meshes)for(const n of r.meshes)for(const i of n.primitives)gg(t,i,e)}function gg(t,e,r){if(!r?.gltf?.loadBuffers)return;const i=e.extensions?.[Hr]?.featureIds;if(i)for(const s of i){let a;if(typeof s.attribute<"u"){const o=`_FEATURE_ID_${s.attribute}`,l=e.attributes[o];a=t.getTypedArrayForAccessor(l)}else typeof s.texture<"u"&&r?.gltf?.loadImages?a=Ia(t,s.texture,e):a=[];s.data=a}}function bg(t,e){const r=t.gltf.json.meshes;if(r)for(const n of r)for(const i of n.primitives)vg(t,i)}function yg(t,e,r,n){e.extensions||(e.extensions={});let i=e.extensions[Hr];i||(i={featureIds:[]},e.extensions[Hr]=i);const{featureIds:s}=i,a={featureCount:r.length,propertyTable:n,data:r};s.push(a),t.addObjectExtension(e,Hr,i)}function vg(t,e){const r=e.extensions?.[Hr];if(!r)return;const n=r.featureIds;n.forEach((i,s)=>{if(i.data){const{accessorKey:a,index:o}=xg(e.attributes),l=new Uint32Array(i.data);n[s]={featureCount:l.length,propertyTable:i.propertyTable,attribute:o},t.gltf.buffers.push({arrayBuffer:l.buffer,byteOffset:l.byteOffset,byteLength:l.byteLength});const u=t.addBufferView(l),c=t.addAccessor(u,{size:1,componentType:Vi(l),count:l.length});e.attributes[a]=c}})}function xg(t){const e="_FEATURE_ID_",r=Object.keys(t).filter(s=>s.indexOf(e)===0);let n=-1;for(const s of r){const a=Number(s.substring(e.length));a>n&&(n=a)}return n++,{accessorKey:`${e}${n}`,index:n}}const Bg=Object.freeze(Object.defineProperty({__proto__:null,createExtMeshFeatures:yg,decode:hg,encode:mg,name:dg},Symbol.toStringTag,{value:"Module"})),qr="EXT_structural_metadata",Ag=qr;async function Tg(t,e){const r=new Ge(t);Sg(r,e)}function Mg(t,e){const r=new Ge(t);return Hg(r),r.createBinaryChunk(),r.gltf}function Sg(t,e){if(!e.gltf?.loadBuffers)return;const r=t.getExtension(qr);r&&(e.gltf?.loadImages&&Pg(t,r),Eg(t,r))}function Pg(t,e){const r=e.propertyTextures,n=t.gltf.json;if(r&&n.meshes)for(const i of n.meshes)for(const s of i.primitives)wg(t,r,s,e)}function Eg(t,e){const r=e.schema;if(!r)return;const n=r.classes,i=e.propertyTables;if(n&&i)for(const s in n){const a=Cg(i,s);a&&Og(t,r,a)}}function Cg(t,e){for(const r of t)if(r.class===e)return r;return null}function wg(t,e,r,n){if(!e)return;const s=r.extensions?.[qr]?.propertyTextures;if(s)for(const a of s){const o=e[a];Rg(t,o,r,n)}}function Rg(t,e,r,n){if(!e.properties)return;n.dataAttributeNames||(n.dataAttributeNames=[]);const i=e.class;for(const s in e.properties){const a=`${i}_${s}`,o=e.properties?.[s];if(!o)continue;o.data||(o.data=[]);const l=o.data,u=Ia(t,o,r);u!==null&&(gc(t,a,u,l,r),o.data=l,n.dataAttributeNames.push(a))}}function Og(t,e,r){const n=e.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const i=r.count;for(const s in n.properties){const a=n.properties[s],o=r.properties?.[s];if(o){const l=Ig(t,e,a,i,o);o.data=l}}}function Ig(t,e,r,n,i){let s=[];const a=i.values,o=t.getTypedArrayForBufferView(a),l=Gg(t,r,i,n),u=_g(t,i,n);switch(r.type){case"SCALAR":case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":{s=Ug(r,n,o,l);break}case"BOOLEAN":throw new Error(`Not implemented - classProperty.type=${r.type}`);case"STRING":{s=vc(n,o,l,u);break}case"ENUM":{s=Dg(e,r,n,o,l);break}default:throw new Error(`Unknown classProperty type ${r.type}`)}return s}function Gg(t,e,r,n){return e.array&&typeof e.count>"u"&&typeof r.arrayOffsets<"u"?Hi(t,r.arrayOffsets,r.arrayOffsetType||"UINT32",n):null}function _g(t,e,r){return typeof e.stringOffsets<"u"?Hi(t,e.stringOffsets,e.stringOffsetType||"UINT32",r):null}function Ug(t,e,r,n){const i=t.array,s=t.count,a=Oa(t.type,t.componentType),o=r.byteLength/a;let l;return t.componentType?l=ki(r,t.type,t.componentType,o):l=r,i?n?bc(l,e,n,r.length,a):s?yc(l,e,s):[]:l}function Dg(t,e,r,n,i){const s=e.enumType;if(!s)throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");const a=t.enums?.[s];if(!a)throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${s}`);const o=a.valueType||"UINT16",l=Oa(e.type,o),u=n.byteLength/l;let c=ki(n,e.type,o,u);if(c||(c=n),e.array){if(i)return Fg({valuesData:c,numberOfElements:r,arrayOffsets:i,valuesDataBytesLength:n.length,elementSize:l,enumEntry:a});const f=e.count;return f?Lg(c,r,f,a):[]}return Ga(c,0,r,a)}function Fg(t){const{valuesData:e,numberOfElements:r,arrayOffsets:n,valuesDataBytesLength:i,elementSize:s,enumEntry:a}=t,o=[];for(let l=0;l<r;l++){const u=n[l],c=n[l+1]-n[l];if(c+u>i)break;const f=u/s,d=c/s,m=Ga(e,f,d,a);o.push(m)}return o}function Lg(t,e,r,n){const i=[];for(let s=0;s<e;s++){const a=r*s,o=Ga(t,a,r,n);i.push(o)}return i}function Ga(t,e,r,n){const i=[];for(let s=0;s<r;s++)if(t instanceof BigInt64Array||t instanceof BigUint64Array)i.push("");else{const a=t[e+s],o=Ng(n,a);o?i.push(o.name):i.push("")}return i}function Ng(t,e){for(const r of t.values)if(r.value===e)return r;return null}const Vg="schemaClassId";function Hg(t,e){const r=t.getExtension(qr);if(r&&r.propertyTables)for(const n of r.propertyTables){const i=n.class,s=r.schema?.classes?.[i];n.properties&&s&&kg(n,s,t)}}function kg(t,e,r){for(const n in t.properties){const i=t.properties[n].data;if(i){const s=e.properties[n];if(s){const a=qg(i,s,r);t.properties[n]=a}}}}function jg(t,e,r=Vg){let n=t.getExtension(qr);n||(n=t.addExtension(qr)),n.schema=zg(e,r,n.schema);const i=Wg(e,r,n.schema);return n.propertyTables||(n.propertyTables=[]),n.propertyTables.push(i)-1}function zg(t,e,r){const n=r??{id:"schema_id"},i={properties:{}};for(const s of t){const a={type:s.elementType,componentType:s.componentType};i.properties[s.name]=a}return n.classes={},n.classes[e]=i,n}function Wg(t,e,r){const n={class:e,count:0};let i=0;const s=r.classes?.[e];for(const a of t){if(i===0&&(i=a.values.length),i!==a.values.length&&a.values.length)throw new Error("Illegal values in attributes");s?.properties[a.name]&&(n.properties||(n.properties={}),n.properties[a.name]={values:0,data:a.values})}return n.count=i,n}function qg(t,e,r){const n={values:0};if(e.type==="STRING"){const{stringData:i,stringOffsets:s}=Yg(t);n.stringOffsets=xs(s,r),n.values=xs(i,r)}else if(e.type==="SCALAR"&&e.componentType){const i=Jg(t,e.componentType);n.values=xs(i,r)}return n}const Kg={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:Int32Array,UINT64:Uint32Array,FLOAT32:Float32Array,FLOAT64:Float64Array};function Jg(t,e){const r=[];for(const i of t)r.push(Number(i));const n=Kg[e];if(!n)throw new Error("Illegal component type");return new n(r)}function Yg(t){const e=new TextEncoder,r=[];let n=0;for(const l of t){const u=e.encode(l);n+=u.length,r.push(u)}const i=new Uint8Array(n),s=[];let a=0;for(const l of r)i.set(l,a),s.push(a),a+=l.length;s.push(a);const o=new Uint32Array(s);return{stringData:i,stringOffsets:o}}function xs(t,e){return e.gltf.buffers.push({arrayBuffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength}),e.addBufferView(t)}const Xg=Object.freeze(Object.defineProperty({__proto__:null,createExtStructuralMetadata:jg,decode:Tg,encode:Mg,name:Ag},Symbol.toStringTag,{value:"Module"})),xc="EXT_feature_metadata",Qg=xc;async function $g(t,e){const r=new Ge(t);Zg(r,e)}function Zg(t,e){if(!e.gltf?.loadBuffers)return;const r=t.getExtension(xc);r&&(e.gltf?.loadImages&&eb(t,r),tb(t,r))}function eb(t,e){const r=e.schema;if(!r)return;const n=r.classes,{featureTextures:i}=e;if(n&&i)for(const s in n){const a=n[s],o=nb(i,s);o&&sb(t,o,a)}}function tb(t,e){const r=e.schema;if(!r)return;const n=r.classes,i=e.featureTables;if(n&&i)for(const s in n){const a=rb(i,s);a&&ib(t,r,a)}}function rb(t,e){for(const r in t){const n=t[r];if(n.class===e)return n}return null}function nb(t,e){for(const r in t){const n=t[r];if(n.class===e)return n}return null}function ib(t,e,r){if(!r.class)return;const n=e.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const i=r.count;for(const s in n.properties){const a=n.properties[s],o=r.properties?.[s];if(o){const l=ab(t,e,a,i,o);o.data=l}}}function sb(t,e,r){const n=e.class;for(const i in r.properties){const s=e?.properties?.[i];if(s){const a=fb(t,s,n);s.data=a}}}function ab(t,e,r,n,i){let s=[];const a=i.bufferView,o=t.getTypedArrayForBufferView(a),l=ob(t,r,i,n),u=lb(t,r,i,n);return r.type==="STRING"||r.componentType==="STRING"?s=vc(n,o,l,u):ub(r)&&(s=cb(r,n,o,l)),s}function ob(t,e,r,n){return e.type==="ARRAY"&&typeof e.componentCount>"u"&&typeof r.arrayOffsetBufferView<"u"?Hi(t,r.arrayOffsetBufferView,r.offsetType||"UINT32",n):null}function lb(t,e,r,n){return typeof r.stringOffsetBufferView<"u"?Hi(t,r.stringOffsetBufferView,r.offsetType||"UINT32",n):null}function ub(t){const e=["UINT8","INT16","UINT16","INT32","UINT32","INT64","UINT64","FLOAT32","FLOAT64"];return e.includes(t.type)||typeof t.componentType<"u"&&e.includes(t.componentType)}function cb(t,e,r,n){const i=t.type==="ARRAY",s=t.componentCount,a="SCALAR",o=t.componentType||t.type,l=Oa(a,o),u=r.byteLength/l,c=ki(r,a,o,u);return i?n?bc(c,e,n,r.length,l):s?yc(c,e,s):[]:c}function fb(t,e,r){const n=t.gltf.json;if(!n.meshes)return[];const i=[];for(const s of n.meshes)for(const a of s.primitives)db(t,r,e,i,a);return i}function db(t,e,r,n,i){const s={channels:r.channels,...r.texture},a=Ia(t,s,i);a&&gc(t,e,a,n,i)}const hb=Object.freeze(Object.defineProperty({__proto__:null,decode:$g,name:Qg},Symbol.toStringTag,{value:"Module"})),mb="4.3.3",pb="4.3.3",yi={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"};let qo;async function Ko(t){Dm(t.modules);const e=Fm("basis");return e||(qo||=gb(t),await qo)}async function gb(t){let e=null,r=null;return[e,r]=await Promise.all([await yr(yi.TRANSCODER,"textures",t),await yr(yi.TRANSCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await bb(e,r)}function bb(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t(r).then(i=>{const{BasisFile:s,initializeBasis:a}=i;a(),n({BasisFile:s})})})}let Bs;async function Jo(t){const e=t.modules||{};return e.basisEncoder?e.basisEncoder:(Bs=Bs||yb(t),await Bs)}async function yb(t){let e=null,r=null;return[e,r]=await Promise.all([await yr(yi.ENCODER,"textures",t),await yr(yi.ENCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await vb(e,r)}function vb(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t(r).then(i=>{const{BasisFile:s,KTX2File:a,initializeBasis:o,BasisEncoder:l}=i;o(),n({BasisFile:s,KTX2File:a,BasisEncoder:l})})})}const Er={COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGBA_ASTC_4X4_KHR:37808},xb=["","WEBKIT_","MOZ_"],Yo={WEBGL_compressed_texture_s3tc:"dxt",WEBGL_compressed_texture_s3tc_srgb:"dxt-srgb",WEBGL_compressed_texture_etc1:"etc1",WEBGL_compressed_texture_etc:"etc2",WEBGL_compressed_texture_pvrtc:"pvrtc",WEBGL_compressed_texture_atc:"atc",WEBGL_compressed_texture_astc:"astc",EXT_texture_compression_rgtc:"rgtc"};let zn=null;function Bb(t){if(!zn){t=t||Ab()||void 0,zn=new Set;for(const e of xb)for(const r in Yo)if(t&&t.getExtension(`${e}${r}`)){const n=Yo[r];zn.add(n)}}return zn}function Ab(){try{return document.createElement("canvas").getContext("webgl")}catch{return null}}const Qe=[171,75,84,88,32,50,48,187,13,10,26,10];function Tb(t){const e=new Uint8Array(t);return!(e.byteLength<Qe.length||e[0]!==Qe[0]||e[1]!==Qe[1]||e[2]!==Qe[2]||e[3]!==Qe[3]||e[4]!==Qe[4]||e[5]!==Qe[5]||e[6]!==Qe[6]||e[7]!==Qe[7]||e[8]!==Qe[8]||e[9]!==Qe[9]||e[10]!==Qe[10]||e[11]!==Qe[11])}const Mb={etc1:{basisFormat:0,compressed:!0,format:Er.COMPRESSED_RGB_ETC1_WEBGL},etc2:{basisFormat:1,compressed:!0},bc1:{basisFormat:2,compressed:!0,format:Er.COMPRESSED_RGB_S3TC_DXT1_EXT},bc3:{basisFormat:3,compressed:!0,format:Er.COMPRESSED_RGBA_S3TC_DXT5_EXT},bc4:{basisFormat:4,compressed:!0},bc5:{basisFormat:5,compressed:!0},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0},"bc7-m5":{basisFormat:7,compressed:!0},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:Er.COMPRESSED_RGB_PVRTC_4BPPV1_IMG},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:Er.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG},"astc-4x4":{basisFormat:10,compressed:!0,format:Er.COMPRESSED_RGBA_ASTC_4X4_KHR},"atc-rgb":{basisFormat:11,compressed:!0},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0},rgba32:{basisFormat:13,compressed:!1},rgb565:{basisFormat:14,compressed:!1},bgr565:{basisFormat:15,compressed:!1},rgba4444:{basisFormat:16,compressed:!1}};async function Sb(t,e){if(e.basis.containerFormat==="auto"){if(Tb(t)){const n=await Jo(e);return Xo(n.KTX2File,t,e)}const{BasisFile:r}=await Ko(e);return As(r,t,e)}switch(e.basis.module){case"encoder":const r=await Jo(e);switch(e.basis.containerFormat){case"ktx2":return Xo(r.KTX2File,t,e);case"basis":default:return As(r.BasisFile,t,e)}case"transcoder":default:const{BasisFile:n}=await Ko(e);return As(n,t,e)}}function As(t,e,r){const n=new t(new Uint8Array(e));try{if(!n.startTranscoding())throw new Error("Failed to start basis transcoding");const i=n.getNumImages(),s=[];for(let a=0;a<i;a++){const o=n.getNumLevels(a),l=[];for(let u=0;u<o;u++)l.push(Pb(n,a,u,r));s.push(l)}return s}finally{n.close(),n.delete()}}function Pb(t,e,r,n){const i=t.getImageWidth(e,r),s=t.getImageHeight(e,r),a=t.getHasAlpha(),{compressed:o,format:l,basisFormat:u}=Bc(n,a),c=t.getImageTranscodedSizeInBytes(e,r,u),f=new Uint8Array(c);if(!t.transcodeImage(f,e,r,u,0,0))throw new Error("failed to start Basis transcoding");return{width:i,height:s,data:f,compressed:o,format:l,hasAlpha:a}}function Xo(t,e,r){const n=new t(new Uint8Array(e));try{if(!n.startTranscoding())throw new Error("failed to start KTX2 transcoding");const i=n.getLevels(),s=[];for(let a=0;a<i;a++)s.push(Eb(n,a,r));return[s]}finally{n.close(),n.delete()}}function Eb(t,e,r){const{alphaFlag:n,height:i,width:s}=t.getImageLevelInfo(e,0,0),{compressed:a,format:o,basisFormat:l}=Bc(r,n),u=t.getImageTranscodedSizeInBytes(e,0,0,l),c=new Uint8Array(u);if(!t.transcodeImage(c,e,0,0,l,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{width:s,height:i,data:c,compressed:a,levelSize:u,hasAlpha:n,format:o}}function Bc(t,e){let r=t&&t.basis&&t.basis.format;return r==="auto"&&(r=Ac()),typeof r=="object"&&(r=e?r.alpha:r.noAlpha),r=r.toLowerCase(),Mb[r]}function Ac(){const t=Bb();return t.has("astc")?"astc-4x4":t.has("dxt")?{alpha:"bc3",noAlpha:"bc1"}:t.has("pvrtc")?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:t.has("etc1")?"etc1":t.has("etc2")?"etc2":"rgb565"}const Cb={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:pb,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",libraryPath:"libs/",containerFormat:"auto",module:"transcoder"}}},wb={...Cb,parse:Sb},Kr=!0,Qo=1735152710,_a=12,vi=8,Rb=1313821514,Ob=5130562,Ib=0,Gb=0,_b=1;function Ub(t,e=0){return`${String.fromCharCode(t.getUint8(e+0))}${String.fromCharCode(t.getUint8(e+1))}${String.fromCharCode(t.getUint8(e+2))}${String.fromCharCode(t.getUint8(e+3))}`}function Db(t,e=0,r={}){const n=new DataView(t),{magic:i=Qo}=r,s=n.getUint32(e,!1);return s===i||s===Qo}function Fb(t,e,r=0,n={}){const i=new DataView(e),s=Ub(i,r+0),a=i.getUint32(r+4,Kr),o=i.getUint32(r+8,Kr);switch(Object.assign(t,{header:{byteOffset:r,byteLength:o,hasBinChunk:!1},type:s,version:a,json:{},binChunks:[]}),r+=_a,t.version){case 1:return Lb(t,i,r);case 2:return Nb(t,i,r,n={});default:throw new Error(`Invalid GLB version ${t.version}. Only supports version 1 and 2.`)}}function Lb(t,e,r){kt(t.header.byteLength>_a+vi);const n=e.getUint32(r+0,Kr),i=e.getUint32(r+4,Kr);return r+=vi,kt(i===Ib),Qs(t,e,r,n),r+=n,r+=$s(t,e,r,t.header.byteLength),r}function Nb(t,e,r,n){return kt(t.header.byteLength>_a+vi),Vb(t,e,r,n),r+t.header.byteLength}function Vb(t,e,r,n){for(;r+8<=t.header.byteLength;){const i=e.getUint32(r+0,Kr),s=e.getUint32(r+4,Kr);switch(r+=vi,s){case Rb:Qs(t,e,r,i);break;case Ob:$s(t,e,r,i);break;case Gb:n.strict||Qs(t,e,r,i);break;case _b:n.strict||$s(t,e,r,i);break}r+=Dn(i,4)}return r}function Qs(t,e,r,n){const i=new Uint8Array(e.buffer,r,n),a=new TextDecoder("utf8").decode(i);return t.json=JSON.parse(a),Dn(n,4)}function $s(t,e,r,n){return t.header.hasBinChunk=!0,t.binChunks.push({byteOffset:r,byteLength:n,arrayBuffer:e.buffer}),Dn(n,4)}function Tc(t,e){if(t.startsWith("data:")||t.startsWith("http:")||t.startsWith("https:"))return t;const n=e.baseUri||e.uri;if(!n)throw new Error(`'baseUri' must be provided to resolve relative url ${t}`);return n.substr(0,n.lastIndexOf("/")+1)+t}const Hb="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",kb="B9h9z9tFBBBF8dL9gBB9gLaaaaaFa9gEaaaB9gGaaB9gFaFaEQSBBFBFFGEGEGIILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBNn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBcI9z9iqlBMc/j9JSIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMkRIbaG97FaK978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAnDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAnDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBRnCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBHiCFD9tAiAPD9OD9hD9RHiDQBTFtGmEYIPLdKeOnH8ZAIAQJDBIBHpCFD9tApAPD9OD9hD9RHpAIASJDBIBHyCFD9tAyAPD9OD9hD9RHyDQBTFtGmEYIPLdKeOnH8cDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAnD9uHnDyBjGBAEAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnA8ZA8cDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNiV8ZcpMyS8cQ8df8eb8fHdApAyDQNiV8ZcpMyS8cQ8df8eb8fHiDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/xLGEaK978jUUUUBCAlHE8kUUUUBGXGXAGCI9HQBGXAFC98ZHI9FQBABRGCBRLEXAGAGDBBBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMBBAGCTJRGALCIJHLAI9JQBMMAIAF9PQFAEAFCEZHLCGWHGqCBCTAGl/8MBAEABAICGWJHIAG/8cBBGXAL9FQBAEAEDBIBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMIBMAIAEAG/8cBBSFMABAFC98ZHGT+HUUUBAGAF9PQBAEAFCEZHICEWHLJCBCAALl/8MBAEABAGCEWJHGAL/8cBBAEAIT+HUUUBAGAEAL/8cBBMAECAJ8kUUUUBM+yEGGaO97GXAF9FQBCBRGEXABCTJHEAEDBBBHICBDtHLCUU98D8cFCUU98D8cEHKD9OABDBBBHOAIDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAOAIDQBFGENVcMTtmYi8ZpyHICTD+sFD/6FHND/gFAICTD+rFCTD+sFD/6FHVD/gFD/kFD/lFHI9DB/+g6DYAVAIALD+2FHLAVCUUUU94DtHcD9OD9RD/kFHVAVD/mFAIAID/mFANALANAcD9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHLD/kFCTD+rFAVAND/mFALD/kFCggEDtD9OD9QHVAIAND/mFALD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHIDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAOAKD9OAVAIDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM94FEa8jUUUUBCAlHE8kUUUUBABAFC98ZHIT+JUUUBGXAIAF9PQBAEAFCEZHLCEWHFJCBCAAFl/8MBAEABAICEWJHBAF/8cBBAEALT+JUUUBABAEAF/8cBBMAECAJ8kUUUUBM/hEIGaF97FaL978jUUUUBCTlRGGXAF9FQBCBREEXAGABDBBBHIABCTJHLDBBBHKDQILKOSQfbPden8c8d8e8fHOCTD+sFHNCID+rFDMIBAB9DBBU8/DY9D/zI818/DYANCEDtD9QD/6FD/nFHNAIAKDQBFGENVcMTtmYi8ZpyHICTD+rFCTD+sFD/6FD/mFHKAKD/mFANAICTD+sFD/6FD/mFHVAVD/mFANAOCTD+rFCTD+sFD/6FD/mFHOAOD/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHND/mF9DBBX9LDYHID/kFCggEDtHcD9OAVAND/mFAID/kFCTD+rFD9QHVAOAND/mFAID/kFCTD+rFAKAND/mFAID/kFAcD9OD9QHNDQBFTtGEmYILPdKOenHID8dBAGDBIBDyB+t+J83EBABCNJAID8dFAGDBIBDyF+t+J83EBALAVANDQNVi8ZcMpySQ8c8dfb8e8fHND8dBAGDBIBDyG+t+J83EBABCiJAND8dFAGDBIBDyE+t+J83EBABCAJRBAECIJHEAF9JQBMMM/3FGEaF978jUUUUBCoBlREGXAGCGrAF9sHIC98ZHL9FQBCBRGABRFEXAFAFDBBBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBAFCTJRFAGCIJHGAL9JQBMMGXALAI9PQBAEAICEZHGCGWHFqCBCoBAFl/8MBAEABALCGWJHLAF/8cBBGXAG9FQBAEAEDBIBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMIBMALAEAF/8cBBMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",jb=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),zb=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]),Wb={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},qb={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};async function Kb(t,e,r,n,i,s="NONE"){const a=await Jb();Qb(a,a.exports[qb[i]],t,e,r,n,a.exports[Wb[s||"NONE"]])}let Ts;async function Jb(){return Ts||(Ts=Yb()),Ts}async function Yb(){let t=Hb;WebAssembly.validate(jb)&&(t=kb,console.log("Warning: meshopt_decoder is using experimental SIMD support"));const e=await WebAssembly.instantiate(Xb(t),{});return await e.instance.exports.__wasm_call_ctors(),e.instance}function Xb(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;++n){const i=t.charCodeAt(n);e[n]=i>96?i-71:i>64?i-65:i>47?i+4:i>46?63:62}let r=0;for(let n=0;n<t.length;++n)e[r++]=e[n]<60?zb[e[n]]:(e[n]-60)*64+e[++n];return e.buffer.slice(0,r)}function Qb(t,e,r,n,i,s,a){const o=t.exports.sbrk,l=n+3&-4,u=o(l*i),c=o(s.length),f=new Uint8Array(t.exports.memory.buffer);f.set(s,c);const d=e(u,n,i,c,s.length);if(d===0&&a&&a(u,l,i),r.set(f.subarray(u,u+n*i)),o(u-o(0)),d!==0)throw new Error(`Malformed buffer data: ${d}`)}const xi="EXT_meshopt_compression",$b=xi;async function Zb(t,e){const r=new Ge(t);if(!e?.gltf?.decompressMeshes||!e.gltf?.loadBuffers)return;const n=[];for(const i of t.json.bufferViews||[])n.push(e1(r,i));await Promise.all(n),r.removeExtension(xi)}async function e1(t,e){const r=t.getObjectExtension(e,xi);if(r){const{byteOffset:n=0,byteLength:i=0,byteStride:s,count:a,mode:o,filter:l="NONE",buffer:u}=r,c=t.gltf.buffers[u],f=new Uint8Array(c.arrayBuffer,c.byteOffset+n,i),d=new Uint8Array(t.gltf.buffers[e.buffer].arrayBuffer,e.byteOffset,e.byteLength);await Kb(d,a,s,f,o,l),t.removeObjectExtension(e,xi)}}const t1=Object.freeze(Object.defineProperty({__proto__:null,decode:Zb,name:$b},Symbol.toStringTag,{value:"Module"})),wr="EXT_texture_webp",r1=wr;function n1(t,e){const r=new Ge(t);if(!Q0("image/webp")){if(r.getRequiredExtensions().includes(wr))throw new Error(`gltf: Required extension ${wr} not supported by browser`);return}const{json:n}=r;for(const i of n.textures||[]){const s=r.getObjectExtension(i,wr);s&&(i.source=s.source),r.removeObjectExtension(i,wr)}r.removeExtension(wr)}const i1=Object.freeze(Object.defineProperty({__proto__:null,name:r1,preprocess:n1},Symbol.toStringTag,{value:"Module"})),ni="KHR_texture_basisu",s1=ni;function a1(t,e){const r=new Ge(t),{json:n}=r;for(const i of n.textures||[]){const s=r.getObjectExtension(i,ni);s&&(i.source=s.source,r.removeObjectExtension(i,ni))}r.removeExtension(ni)}const o1=Object.freeze(Object.defineProperty({__proto__:null,name:s1,preprocess:a1},Symbol.toStringTag,{value:"Module"})),l1="4.3.3",u1={dataType:null,batchType:null,name:"Draco",id:"draco",module:"draco",version:l1,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:typeof WebAssembly=="object"?"wasm":"js",libraryPath:"libs/",extraAttributes:{},attributeNameEntry:void 0}}};function c1(t,e,r){const n=Mc(e.metadata),i=[],s=f1(e.attributes);for(const a in t){const o=t[a],l=$o(a,o,s[a]);i.push(l)}if(r){const a=$o("indices",r);i.push(a)}return{fields:i,metadata:n}}function f1(t){const e={};for(const r in t){const n=t[r];e[n.name||"undefined"]=n}return e}function $o(t,e,r){const n=r?Mc(r.metadata):void 0;return p0(t,e,n)}function Mc(t){Object.entries(t);const e={};for(const r in t)e[`${r}.string`]=JSON.stringify(t[r]);return e}const Zo={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},d1={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},h1=4;class m1{draco;decoder;metadataQuerier;constructor(e){this.draco=e,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}destroy(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)}parseSync(e,r={}){const n=new this.draco.DecoderBuffer;n.Init(new Int8Array(e),e.byteLength),this._disableAttributeTransforms(r);const i=this.decoder.GetEncodedGeometryType(n),s=i===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{let a;switch(i){case this.draco.TRIANGULAR_MESH:a=this.decoder.DecodeBufferToMesh(n,s);break;case this.draco.POINT_CLOUD:a=this.decoder.DecodeBufferToPointCloud(n,s);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!a.ok()||!s.ptr){const d=`DRACO decompression failed: ${a.error_msg()}`;throw new Error(d)}const o=this._getDracoLoaderData(s,i,r),l=this._getMeshData(s,o,r),u=m0(l.attributes),c=c1(l.attributes,o,l.indices);return{loader:"draco",loaderData:o,header:{vertexCount:s.num_points(),boundingBox:u},...l,schema:c}}finally{this.draco.destroy(n),s&&this.draco.destroy(s)}}_getDracoLoaderData(e,r,n){const i=this._getTopLevelMetadata(e),s=this._getDracoAttributes(e,n);return{geometry_type:r,num_attributes:e.num_attributes(),num_points:e.num_points(),num_faces:e instanceof this.draco.Mesh?e.num_faces():0,metadata:i,attributes:s}}_getDracoAttributes(e,r){const n={};for(let i=0;i<e.num_attributes();i++){const s=this.decoder.GetAttribute(e,i),a=this._getAttributeMetadata(e,i);n[s.unique_id()]={unique_id:s.unique_id(),attribute_type:s.attribute_type(),data_type:s.data_type(),num_components:s.num_components(),byte_offset:s.byte_offset(),byte_stride:s.byte_stride(),normalized:s.normalized(),attribute_index:i,metadata:a};const o=this._getQuantizationTransform(s,r);o&&(n[s.unique_id()].quantization_transform=o);const l=this._getOctahedronTransform(s,r);l&&(n[s.unique_id()].octahedron_transform=l)}return n}_getMeshData(e,r,n){const i=this._getMeshAttributes(r,e,n);if(!i.POSITION)throw new Error("DRACO: No position attribute found.");if(e instanceof this.draco.Mesh)switch(n.topology){case"triangle-strip":return{topology:"triangle-strip",mode:4,attributes:i,indices:{value:this._getTriangleStripIndices(e),size:1}};case"triangle-list":default:return{topology:"triangle-list",mode:5,attributes:i,indices:{value:this._getTriangleListIndices(e),size:1}}}return{topology:"point-list",mode:0,attributes:i}}_getMeshAttributes(e,r,n){const i={};for(const s of Object.values(e.attributes)){const a=this._deduceAttributeName(s,n);s.name=a;const o=this._getAttributeValues(r,s);if(o){const{value:l,size:u}=o;i[a]={value:l,size:u,byteOffset:s.byte_offset,byteStride:s.byte_stride,normalized:s.normalized}}}return i}_getTriangleListIndices(e){const n=e.num_faces()*3,i=n*h1,s=this.draco._malloc(i);try{return this.decoder.GetTrianglesUInt32Array(e,i,s),new Uint32Array(this.draco.HEAPF32.buffer,s,n).slice()}finally{this.draco._free(s)}}_getTriangleStripIndices(e){const r=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(e,r),b1(r)}finally{this.draco.destroy(r)}}_getAttributeValues(e,r){const n=d1[r.data_type];if(!n)return console.warn(`DRACO: Unsupported attribute type ${r.data_type}`),null;const i=r.num_components,a=e.num_points()*i,o=a*n.BYTES_PER_ELEMENT,l=p1(this.draco,n);let u;const c=this.draco._malloc(o);try{const f=this.decoder.GetAttribute(e,r.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(e,f,l,o,c),u=new n(this.draco.HEAPF32.buffer,c,a).slice()}finally{this.draco._free(c)}return{value:u,size:i}}_deduceAttributeName(e,r){const n=e.unique_id;for(const[a,o]of Object.entries(r.extraAttributes||{}))if(o===n)return a;const i=e.attribute_type;for(const a in Zo)if(this.draco[a]===i)return Zo[a];const s=r.attributeNameEntry||"name";return e.metadata[s]?e.metadata[s].string:`CUSTOM_ATTRIBUTE_${n}`}_getTopLevelMetadata(e){const r=this.decoder.GetMetadata(e);return this._getDracoMetadata(r)}_getAttributeMetadata(e,r){const n=this.decoder.GetAttributeMetadata(e,r);return this._getDracoMetadata(n)}_getDracoMetadata(e){if(!e||!e.ptr)return{};const r={},n=this.metadataQuerier.NumEntries(e);for(let i=0;i<n;i++){const s=this.metadataQuerier.GetEntryName(e,i);r[s]=this._getDracoMetadataField(e,s)}return r}_getDracoMetadataField(e,r){const n=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(e,r,n);const i=g1(n);return{int:this.metadataQuerier.GetIntEntry(e,r),string:this.metadataQuerier.GetStringEntry(e,r),double:this.metadataQuerier.GetDoubleEntry(e,r),intArray:i}}finally{this.draco.destroy(n)}}_disableAttributeTransforms(e){const{quantizedAttributes:r=[],octahedronAttributes:n=[]}=e,i=[...r,...n];for(const s of i)this.decoder.SkipAttributeTransform(this.draco[s])}_getQuantizationTransform(e,r){const{quantizedAttributes:n=[]}=r,i=e.attribute_type();if(n.map(a=>this.decoder[a]).includes(i)){const a=new this.draco.AttributeQuantizationTransform;try{if(a.InitFromAttribute(e))return{quantization_bits:a.quantization_bits(),range:a.range(),min_values:new Float32Array([1,2,3]).map(o=>a.min_value(o))}}finally{this.draco.destroy(a)}}return null}_getOctahedronTransform(e,r){const{octahedronAttributes:n=[]}=r,i=e.attribute_type();if(n.map(a=>this.decoder[a]).includes(i)){const a=new this.draco.AttributeQuantizationTransform;try{if(a.InitFromAttribute(e))return{quantization_bits:a.quantization_bits()}}finally{this.draco.destroy(a)}}return null}}function p1(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32;default:return t.DT_INVALID}}function g1(t){const e=t.size(),r=new Int32Array(e);for(let n=0;n<e;n++)r[n]=t.GetValue(n);return r}function b1(t){const e=t.size(),r=new Int32Array(e);for(let n=0;n<e;n++)r[n]=t.GetValue(n);return r}const y1="1.5.6",v1="1.4.1",Ms=`https://www.gstatic.com/draco/versioned/decoders/${y1}`,Je={DECODER:"draco_wasm_wrapper.js",DECODER_WASM:"draco_decoder.wasm",FALLBACK_DECODER:"draco_decoder.js",ENCODER:"draco_encoder.js"},Ss={[Je.DECODER]:`${Ms}/${Je.DECODER}`,[Je.DECODER_WASM]:`${Ms}/${Je.DECODER_WASM}`,[Je.FALLBACK_DECODER]:`${Ms}/${Je.FALLBACK_DECODER}`,[Je.ENCODER]:`https://raw.githubusercontent.com/google/draco/${v1}/javascript/${Je.ENCODER}`};let Ps;async function x1(t){const e=t.modules||{};return e.draco3d?Ps||=e.draco3d.createDecoderModule({}).then(r=>({draco:r})):Ps||=B1(t),await Ps}async function B1(t){let e,r;switch(t.draco&&t.draco.decoderType){case"js":e=await yr(Ss[Je.FALLBACK_DECODER],"draco",t,Je.FALLBACK_DECODER);break;case"wasm":default:[e,r]=await Promise.all([await yr(Ss[Je.DECODER],"draco",t,Je.DECODER),await yr(Ss[Je.DECODER_WASM],"draco",t,Je.DECODER_WASM)])}return e=e||globalThis.DracoDecoderModule,await A1(e,r)}function A1(t,e){const r={};return e&&(r.wasmBinary=e),new Promise(n=>{t({...r,onModuleLoaded:i=>n({draco:i})})})}const T1={...u1,parse:M1};async function M1(t,e){const{draco:r}=await x1(e),n=new m1(r);try{return n.parseSync(t,e?.draco)}finally{n.destroy()}}function S1(t){const e={};for(const r in t){const n=t[r];if(r!=="indices"){const i=Sc(n);e[r]=i}}return e}function Sc(t){const{buffer:e,size:r,count:n}=P1(t);return{value:e,size:r,byteOffset:0,count:n,type:hc(r),componentType:Vi(e)}}function P1(t){let e=t,r=1,n=0;return t&&t.value&&(e=t.value,r=t.size||1),e&&(ArrayBuffer.isView(e)||(e=E1(e,Float32Array)),n=e.length/r),{buffer:e,size:r,count:n}}function E1(t,e,r=!1){return t?Array.isArray(t)?new e(t):r&&!(t instanceof e)?new e(t):t:null}const rr="KHR_draco_mesh_compression",C1=rr;function w1(t,e,r){const n=new Ge(t);for(const i of Pc(n))n.getObjectExtension(i,rr)}async function R1(t,e,r){if(!e?.gltf?.decompressMeshes)return;const n=new Ge(t),i=[];for(const s of Pc(n))n.getObjectExtension(s,rr)&&i.push(I1(n,s,e,r));await Promise.all(i),n.removeExtension(rr)}function O1(t,e={}){const r=new Ge(t);for(const n of r.json.meshes||[])G1(n),r.addRequiredExtension(rr)}async function I1(t,e,r,n){const i=t.getObjectExtension(e,rr);if(!i)return;const s=t.getTypedArrayForBufferView(i.bufferView),a=Ku(s.buffer,s.byteOffset),o={...r};delete o["3d-tiles"];const l=await Vu(a,T1,o,n),u=S1(l.attributes);for(const[c,f]of Object.entries(u))if(c in e.attributes){const d=e.attributes[c],m=t.getAccessor(d);m?.min&&m?.max&&(f.min=m.min,f.max=m.max)}e.attributes=u,l.indices&&(e.indices=Sc(l.indices)),t.removeObjectExtension(e,rr),_1(e)}function G1(t,e,r=4,n,i){if(!n.DracoWriter)throw new Error("options.gltf.DracoWriter not provided");const s=n.DracoWriter.encodeSync({attributes:t}),a=i?.parseSync?.({attributes:t}),o=n._addFauxAttributes(a.attributes),l=n.addBufferView(s);return{primitives:[{attributes:o,mode:r,extensions:{[rr]:{bufferView:l,attributes:o}}}]}}function _1(t){if(!t.attributes&&Object.keys(t.attributes).length>0)throw new Error("glTF: Empty primitive detected: Draco decompression failure?")}function*Pc(t){for(const e of t.json.meshes||[])for(const r of e.primitives)yield r}const U1=Object.freeze(Object.defineProperty({__proto__:null,decode:R1,encode:O1,name:C1,preprocess:w1},Symbol.toStringTag,{value:"Module"})),D1={EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1};globalThis.mathgl=globalThis.mathgl||{config:{...D1}};const ft=globalThis.mathgl.config;function F1(t,{precision:e=ft.precision}={}){return t=L1(t),`${parseFloat(t.toPrecision(e))}`}function Bi(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ec(t,e,r){const n=ft.EPSILON;try{if(t===e)return!0;if(Bi(t)&&Bi(e)){if(t.length!==e.length)return!1;for(let i=0;i<t.length;++i)if(!Ec(t[i],e[i]))return!1;return!0}return t&&t.equals?t.equals(e):e&&e.equals?e.equals(t):typeof t=="number"&&typeof e=="number"?Math.abs(t-e)<=ft.EPSILON*Math.max(1,Math.abs(t),Math.abs(e)):!1}finally{ft.EPSILON=n}}function L1(t){return Math.round(t/ft.EPSILON)*ft.EPSILON}class Cc extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,r=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+r];return this.check()}toArray(e=[],r=0){for(let n=0;n<this.ELEMENTS;++n)e[r+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:Bi(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(ft)}formatString(e){let r="";for(let n=0;n<this.ELEMENTS;++n)r+=(n>0?", ":"")+F1(this[n],e);return`${e.printTypes?this.constructor.name:""}[${r}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(!Ec(this[r],e[r]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(this[r]!==e[r])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,r,n){if(n===void 0)return this.lerp(this,e,r);for(let i=0;i<this.ELEMENTS;++i){const s=e[i],a=typeof r=="number"?r:r[i];this[i]=s+n*(a-s)}return this.check()}min(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.min(e[r],this[r]);return this.check()}max(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.max(e[r],this[r]);return this.check()}clamp(e,r){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),r[n]);return this.check()}add(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]+=r[n];return this.check()}subtract(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]-=r[n];return this.check()}scale(e){if(typeof e=="number")for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;else for(let r=0;r<this.ELEMENTS&&r<e.length;++r)this[r]*=e[r];return this.check()}multiplyByScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}check(){if(ft.debug&&!this.validate())throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let r=0;r<this.ELEMENTS;++r)e=e&&Number.isFinite(this[r]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=e;return this.check()}addScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,r){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),r);return this.check()}get elements(){return this}}function N1(t,e){if(t.length!==e)return!1;for(let r=0;r<t.length;++r)if(!Number.isFinite(t[r]))return!1;return!0}function tt(t){if(!Number.isFinite(t))throw new Error(`Invalid number ${JSON.stringify(t)}`);return t}function V1(t,e,r=""){if(ft.debug&&!N1(t,e))throw new Error(`math.gl: ${r} some fields set to invalid numbers'`);return t}function el(t,e){if(!t)throw new Error(`math.gl assertion ${e}`)}class H1 extends Cc{get x(){return this[0]}set x(e){this[0]=tt(e)}get y(){return this[1]}set y(e){this[1]=tt(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let r=0;r<this.ELEMENTS;++r)e+=this[r]*this[r];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let r=0;for(let n=0;n<this.ELEMENTS;++n){const i=this[n]-e[n];r+=i*i}return tt(r)}dot(e){let r=0;for(let n=0;n<this.ELEMENTS;++n)r+=this[n]*e[n];return tt(r)}normalize(){const e=this.magnitude();if(e!==0)for(let r=0;r<this.ELEMENTS;++r)this[r]/=e;return this.check()}multiply(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]*=r[n];return this.check()}divide(...e){for(const r of e)for(let n=0;n<this.ELEMENTS;++n)this[n]/=r[n];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return el(e>=0&&e<this.ELEMENTS,"index is out of range"),tt(this[e])}setComponent(e,r){return el(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=r,this.check()}addVectors(e,r){return this.copy(e).add(r)}subVectors(e,r){return this.copy(e).subtract(r)}multiplyVectors(e,r){return this.copy(e).multiply(r)}addScaledVector(e,r){return this.add(new this.constructor(e).multiplyScalar(r))}}let Ai=typeof Float32Array<"u"?Float32Array:Array;function k1(){const t=new Ai(2);return Ai!=Float32Array&&(t[0]=0,t[1]=0),t}function j1(t,e,r){const n=e[0],i=e[1];return t[0]=r[0]*n+r[3]*i+r[6],t[1]=r[1]*n+r[4]*i+r[7],t}(function(){const t=k1();return function(e,r,n,i,s,a){let o,l;for(r||(r=2),n||(n=0),i?l=Math.min(i*r+n,e.length):l=e.length,o=n;o<l;o+=r)t[0]=e[o],t[1]=e[o+1],s(t,t,a),e[o]=t[0],e[o+1]=t[1];return e}})();function z1(t,e,r){const n=e[0],i=e[1],s=e[2],a=r[3]*n+r[7]*i+r[11]*s||1;return t[0]=(r[0]*n+r[4]*i+r[8]*s)/a,t[1]=(r[1]*n+r[5]*i+r[9]*s)/a,t[2]=(r[2]*n+r[6]*i+r[10]*s)/a,t}function W1(t,e,r){const n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i,t[1]=r[1]*n+r[3]*i,t[2]=e[2],t}function q1(t,e,r){const n=e[0],i=e[1],s=e[2];return t[0]=r[0]*n+r[3]*i+r[6]*s,t[1]=r[1]*n+r[4]*i+r[7]*s,t[2]=r[2]*n+r[5]*i+r[8]*s,t[3]=e[3],t}function K1(){const t=new Ai(3);return Ai!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function J1(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Y1(t,e,r){const n=e[0],i=e[1],s=e[2],a=r[0],o=r[1],l=r[2];return t[0]=i*l-s*o,t[1]=s*a-n*l,t[2]=n*o-i*a,t}function X1(t,e,r){const n=e[0],i=e[1],s=e[2];let a=r[3]*n+r[7]*i+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/a,t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/a,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/a,t}function wc(t,e,r){const n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t}function Q1(t,e,r){const n=r[0],i=r[1],s=r[2],a=r[3],o=e[0],l=e[1],u=e[2];let c=i*u-s*l,f=s*o-n*u,d=n*l-i*o,m=i*d-s*f,h=s*c-n*d,p=n*f-i*c;const b=a*2;return c*=b,f*=b,d*=b,m*=2,h*=2,p*=2,t[0]=o+c+m,t[1]=l+f+h,t[2]=u+d+p,t}function $1(t,e,r,n){const i=[],s=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],s[0]=i[0],s[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),s[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t}function Z1(t,e,r,n){const i=[],s=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],s[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),s[1]=i[1],s[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t}function ey(t,e,r,n){const i=[],s=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],s[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),s[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),s[2]=i[2],t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t}function ty(t,e){const r=t[0],n=t[1],i=t[2],s=e[0],a=e[1],o=e[2],l=Math.sqrt((r*r+n*n+i*i)*(s*s+a*a+o*o)),u=l&&J1(t,e)/l;return Math.acos(Math.min(Math.max(u,-1),1))}(function(){const t=K1();return function(e,r,n,i,s,a){let o,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,e.length):l=e.length,o=n;o<l;o+=r)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],s(t,t,a),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}})();const Es=[0,0,0];let Wn;class Ua extends H1{static get ZERO(){return Wn||(Wn=new Ua(0,0,0),Object.freeze(Wn)),Wn}constructor(e=0,r=0,n=0){super(-0,-0,-0),arguments.length===1&&Bi(e)?this.copy(e):(ft.debug&&(tt(e),tt(r),tt(n)),this[0]=e,this[1]=r,this[2]=n)}set(e,r,n){return this[0]=e,this[1]=r,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return ft.debug&&(tt(e.x),tt(e.y),tt(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=tt(e)}angle(e){return ty(this,e)}cross(e){return Y1(this,this,e),this.check()}rotateX({radians:e,origin:r=Es}){return $1(this,this,r,e),this.check()}rotateY({radians:e,origin:r=Es}){return Z1(this,this,r,e),this.check()}rotateZ({radians:e,origin:r=Es}){return ey(this,this,r,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return X1(this,this,e),this.check()}transformAsVector(e){return z1(this,this,e),this.check()}transformByMatrix3(e){return wc(this,this,e),this.check()}transformByMatrix2(e){return W1(this,this,e),this.check()}transformByQuaternion(e){return Q1(this,this,e),this.check()}}class ry extends Cc{toString(){let e="[";if(ft.printRowMajor){e+="row-major:";for(let r=0;r<this.RANK;++r)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+r]}`}else{e+="column-major:";for(let r=0;r<this.ELEMENTS;++r)e+=` ${this[r]}`}return e+="]",e}getElementIndex(e,r){return r*this.RANK+e}getElement(e,r){return this[r*this.RANK+e]}setElement(e,r,n){return this[r*this.RANK+e]=tt(n),this}getColumn(e,r=new Array(this.RANK).fill(-0)){const n=e*this.RANK;for(let i=0;i<this.RANK;++i)r[i]=this[n+i];return r}setColumn(e,r){const n=e*this.RANK;for(let i=0;i<this.RANK;++i)this[n+i]=r[i];return this}}function ny(t,e){if(t===e){const r=e[1],n=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=i}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function iy(t,e){const r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=-c*s+o*l,m=u*s-a*l;let h=r*f+n*d+i*m;return h?(h=1/h,t[0]=f*h,t[1]=(-c*n+i*u)*h,t[2]=(o*n-i*a)*h,t[3]=d*h,t[4]=(c*r-i*l)*h,t[5]=(-o*r+i*s)*h,t[6]=m*h,t[7]=(-u*r+n*l)*h,t[8]=(a*r-n*s)*h,t):null}function sy(t){const e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],a=t[5],o=t[6],l=t[7],u=t[8];return e*(u*s-a*l)+r*(-u*i+a*o)+n*(l*i-s*o)}function tl(t,e,r){const n=e[0],i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],f=e[8],d=r[0],m=r[1],h=r[2],p=r[3],b=r[4],g=r[5],v=r[6],S=r[7],y=r[8];return t[0]=d*n+m*a+h*u,t[1]=d*i+m*o+h*c,t[2]=d*s+m*l+h*f,t[3]=p*n+b*a+g*u,t[4]=p*i+b*o+g*c,t[5]=p*s+b*l+g*f,t[6]=v*n+S*a+y*u,t[7]=v*i+S*o+y*c,t[8]=v*s+S*l+y*f,t}function ay(t,e,r){const n=e[0],i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],f=e[8],d=r[0],m=r[1];return t[0]=n,t[1]=i,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=d*n+m*a+u,t[7]=d*i+m*o+c,t[8]=d*s+m*l+f,t}function oy(t,e,r){const n=e[0],i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],f=e[8],d=Math.sin(r),m=Math.cos(r);return t[0]=m*n+d*a,t[1]=m*i+d*o,t[2]=m*s+d*l,t[3]=m*a-d*n,t[4]=m*o-d*i,t[5]=m*l-d*s,t[6]=u,t[7]=c,t[8]=f,t}function rl(t,e,r){const n=r[0],i=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function ly(t,e){const r=e[0],n=e[1],i=e[2],s=e[3],a=r+r,o=n+n,l=i+i,u=r*a,c=n*a,f=n*o,d=i*a,m=i*o,h=i*l,p=s*a,b=s*o,g=s*l;return t[0]=1-f-h,t[3]=c-g,t[6]=d+b,t[1]=c+g,t[4]=1-u-h,t[7]=m-p,t[2]=d-b,t[5]=m+p,t[8]=1-u-f,t}var Zs;(function(t){t[t.COL0ROW0=0]="COL0ROW0",t[t.COL0ROW1=1]="COL0ROW1",t[t.COL0ROW2=2]="COL0ROW2",t[t.COL1ROW0=3]="COL1ROW0",t[t.COL1ROW1=4]="COL1ROW1",t[t.COL1ROW2=5]="COL1ROW2",t[t.COL2ROW0=6]="COL2ROW0",t[t.COL2ROW1=7]="COL2ROW1",t[t.COL2ROW2=8]="COL2ROW2"})(Zs||(Zs={}));const uy=Object.freeze([1,0,0,0,1,0,0,0,1]);class Nn extends ry{static get IDENTITY(){return fy()}static get ZERO(){return cy()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return Zs}constructor(e,...r){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):r.length>0?this.copy([e,...r]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy(uy)}fromObject(e){return this.check()}fromQuaternion(e){return ly(this,e),this.check()}set(e,r,n,i,s,a,o,l,u){return this[0]=e,this[1]=r,this[2]=n,this[3]=i,this[4]=s,this[5]=a,this[6]=o,this[7]=l,this[8]=u,this.check()}setRowMajor(e,r,n,i,s,a,o,l,u){return this[0]=e,this[1]=i,this[2]=o,this[3]=r,this[4]=s,this[5]=l,this[6]=n,this[7]=a,this[8]=u,this.check()}determinant(){return sy(this)}transpose(){return ny(this,this),this.check()}invert(){return iy(this,this),this.check()}multiplyLeft(e){return tl(this,e,this),this.check()}multiplyRight(e){return tl(this,this,e),this.check()}rotate(e){return oy(this,this,e),this.check()}scale(e){return Array.isArray(e)?rl(this,this,e):rl(this,this,[e,e]),this.check()}translate(e){return ay(this,this,e),this.check()}transform(e,r){let n;switch(e.length){case 2:n=j1(r||[-0,-0],e,this);break;case 3:n=wc(r||[-0,-0,-0],e,this);break;case 4:n=q1(r||[-0,-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return V1(n,e.length),n}transformVector(e,r){return this.transform(e,r)}transformVector2(e,r){return this.transform(e,r)}transformVector3(e,r){return this.transform(e,r)}}let qn,Kn=null;function cy(){return qn||(qn=new Nn([0,0,0,0,0,0,0,0,0]),Object.freeze(qn)),qn}function fy(){return Kn||(Kn=new Nn,Object.freeze(Kn)),Kn}const ji="KHR_texture_transform",dy=ji,Jn=new Ua,hy=new Nn,my=new Nn;async function py(t,e){if(!new Ge(t).hasExtension(ji)||!e.gltf?.loadBuffers)return;const i=t.json.materials||[];for(let s=0;s<i.length;s++)gy(s,t)}function gy(t,e){const r=e.json.materials?.[t],n=[r?.pbrMetallicRoughness?.baseColorTexture,r?.emissiveTexture,r?.normalTexture,r?.occlusionTexture,r?.pbrMetallicRoughness?.metallicRoughnessTexture],i=[];for(const s of n)s&&s?.extensions?.[ji]&&by(e,t,s,i)}function by(t,e,r,n){const i=yy(r,n);if(!i)return;const s=t.json.meshes||[];for(const a of s)for(const o of a.primitives){const l=o.material;Number.isFinite(l)&&e===l&&vy(t,o,i)}}function yy(t,e){const r=t.extensions?.[ji],{texCoord:n=0}=t,{texCoord:i=n}=r;if(!(e.findIndex(([a,o])=>a===n&&o===i)!==-1)){const a=Ay(r);return n!==i&&(t.texCoord=i),e.push([n,i]),{originalTexCoord:n,texCoord:i,matrix:a}}return null}function vy(t,e,r){const{originalTexCoord:n,texCoord:i,matrix:s}=r,a=e.attributes[`TEXCOORD_${n}`];if(Number.isFinite(a)){const o=t.json.accessors?.[a];if(o&&o.bufferView){const l=t.json.bufferViews?.[o.bufferView];if(l){const{arrayBuffer:u,byteOffset:c}=t.buffers[l.buffer],f=(c||0)+(o.byteOffset||0)+(l.byteOffset||0),{ArrayType:d,length:m}=Ra(o,l),h=dc[o.componentType],p=fc[o.type],b=l.byteStride||h*p,g=new Float32Array(m);for(let v=0;v<o.count;v++){const S=new d(u,f+v*b,2);Jn.set(S[0],S[1],1),Jn.transformByMatrix3(s),g.set([Jn[0],Jn[1]],v*p)}n===i?xy(o,l,t.buffers,g):By(i,o,e,t,g)}}}}function xy(t,e,r,n){t.componentType=5126,r.push({arrayBuffer:n.buffer,byteOffset:0,byteLength:n.buffer.byteLength}),e.buffer=r.length-1,e.byteLength=n.buffer.byteLength,e.byteOffset=0,delete e.byteStride}function By(t,e,r,n,i){n.buffers.push({arrayBuffer:i.buffer,byteOffset:0,byteLength:i.buffer.byteLength});const s=n.json.bufferViews;if(!s)return;s.push({buffer:n.buffers.length-1,byteLength:i.buffer.byteLength,byteOffset:0});const a=n.json.accessors;a&&(a.push({bufferView:s?.length-1,byteOffset:0,componentType:5126,count:e.count,type:"VEC2"}),r.attributes[`TEXCOORD_${t}`]=a.length-1)}function Ay(t){const{offset:e=[0,0],rotation:r=0,scale:n=[1,1]}=t,i=new Nn().set(1,0,0,0,1,0,e[0],e[1],1),s=hy.set(Math.cos(r),Math.sin(r),0,-Math.sin(r),Math.cos(r),0,0,0,1),a=my.set(n[0],0,0,0,n[1],0,0,0,1);return i.multiplyRight(s).multiplyRight(a)}const Ty=Object.freeze(Object.defineProperty({__proto__:null,decode:py,name:dy},Symbol.toStringTag,{value:"Module"})),gr="KHR_lights_punctual",My=gr;async function Sy(t){const e=new Ge(t),{json:r}=e,n=e.getExtension(gr);n&&(e.json.lights=n.lights,e.removeExtension(gr));for(const i of r.nodes||[]){const s=e.getObjectExtension(i,gr);s&&(i.light=s.light),e.removeObjectExtension(i,gr)}}async function Py(t){const e=new Ge(t),{json:r}=e;if(r.lights){const n=e.addExtension(gr);nt(!n.lights),n.lights=r.lights,delete r.lights}if(e.json.lights){for(const n of e.json.lights){const i=n.node;e.addObjectExtension(i,gr,n)}delete e.json.lights}}const Ey=Object.freeze(Object.defineProperty({__proto__:null,decode:Sy,encode:Py,name:My},Symbol.toStringTag,{value:"Module"})),On="KHR_materials_unlit",Cy=On;async function wy(t){const e=new Ge(t),{json:r}=e;for(const n of r.materials||[])n.extensions&&n.extensions.KHR_materials_unlit&&(n.unlit=!0),e.removeObjectExtension(n,On);e.removeExtension(On)}function Ry(t){const e=new Ge(t),{json:r}=e;if(e.materials)for(const n of r.materials||[])n.unlit&&(delete n.unlit,e.addObjectExtension(n,On,{}),e.addExtension(On))}const Oy=Object.freeze(Object.defineProperty({__proto__:null,decode:wy,encode:Ry,name:Cy},Symbol.toStringTag,{value:"Module"})),fn="KHR_techniques_webgl",Iy=fn;async function Gy(t){const e=new Ge(t),{json:r}=e,n=e.getExtension(fn);if(n){const i=Uy(n,e);for(const s of r.materials||[]){const a=e.getObjectExtension(s,fn);a&&(s.technique=Object.assign({},a,i[a.technique]),s.technique.values=Dy(s.technique,e)),e.removeObjectExtension(s,fn)}e.removeExtension(fn)}}async function _y(t,e){}function Uy(t,e){const{programs:r=[],shaders:n=[],techniques:i=[]}=t,s=new TextDecoder;return n.forEach(a=>{if(Number.isFinite(a.bufferView))a.code=s.decode(e.getTypedArrayForBufferView(a.bufferView));else throw new Error("KHR_techniques_webgl: no shader code")}),r.forEach(a=>{a.fragmentShader=n[a.fragmentShader],a.vertexShader=n[a.vertexShader]}),i.forEach(a=>{a.program=r[a.program]}),i}function Dy(t,e){const r=Object.assign({},t.values);return Object.keys(t.uniforms||{}).forEach(n=>{t.uniforms[n].value&&!(n in r)&&(r[n]=t.uniforms[n].value)}),Object.keys(r).forEach(n=>{typeof r[n]=="object"&&r[n].index!==void 0&&(r[n].texture=e.getTexture(r[n].index))}),r}const Fy=Object.freeze(Object.defineProperty({__proto__:null,decode:Gy,encode:_y,name:Iy},Symbol.toStringTag,{value:"Module"})),Rc=[Xg,Bg,t1,i1,o1,U1,Ey,Oy,Fy,Ty,hb];function Ly(t,e={},r){const n=Rc.filter(i=>Oc(i.name,e));for(const i of n)i.preprocess?.(t,e,r)}async function Ny(t,e={},r){const n=Rc.filter(i=>Oc(i.name,e));for(const i of n)await i.decode?.(t,e,r)}function Oc(t,e){const r=e?.gltf?.excludeExtensions||{};return!(t in r&&!r[t])}const Cs="KHR_binary_glTF";function Vy(t){const e=new Ge(t),{json:r}=e;for(const n of r.images||[]){const i=e.getObjectExtension(n,Cs);i&&Object.assign(n,i),e.removeObjectExtension(n,Cs)}r.buffers&&r.buffers[0]&&delete r.buffers[0].uri,e.removeExtension(Cs)}const nl={accessors:"accessor",animations:"animation",buffers:"buffer",bufferViews:"bufferView",images:"image",materials:"material",meshes:"mesh",nodes:"node",samplers:"sampler",scenes:"scene",skins:"skin",textures:"texture"},Hy={accessor:"accessors",animations:"animation",buffer:"buffers",bufferView:"bufferViews",image:"images",material:"materials",mesh:"meshes",node:"nodes",sampler:"samplers",scene:"scenes",skin:"skins",texture:"textures"};class ky{idToIndexMap={animations:{},accessors:{},buffers:{},bufferViews:{},images:{},materials:{},meshes:{},nodes:{},samplers:{},scenes:{},skins:{},textures:{}};json;normalize(e,r){this.json=e.json;const n=e.json;switch(n.asset&&n.asset.version){case"2.0":return;case void 0:case"1.0":break;default:console.warn(`glTF: Unknown version ${n.asset.version}`);return}if(!r.normalize)throw new Error("glTF v1 is not supported.");console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."),this._addAsset(n),this._convertTopLevelObjectsToArrays(n),Vy(e),this._convertObjectIdsToArrayIndices(n),this._updateObjects(n),this._updateMaterial(n)}_addAsset(e){e.asset=e.asset||{},e.asset.version="2.0",e.asset.generator=e.asset.generator||"Normalized to glTF 2.0 by loaders.gl"}_convertTopLevelObjectsToArrays(e){for(const r in nl)this._convertTopLevelObjectToArray(e,r)}_convertTopLevelObjectToArray(e,r){const n=e[r];if(!(!n||Array.isArray(n))){e[r]=[];for(const i in n){const s=n[i];s.id=s.id||i;const a=e[r].length;e[r].push(s),this.idToIndexMap[r][i]=a}}}_convertObjectIdsToArrayIndices(e){for(const r in nl)this._convertIdsToIndices(e,r);"scene"in e&&(e.scene=this._convertIdToIndex(e.scene,"scene"));for(const r of e.textures)this._convertTextureIds(r);for(const r of e.meshes)this._convertMeshIds(r);for(const r of e.nodes)this._convertNodeIds(r);for(const r of e.scenes)this._convertSceneIds(r)}_convertTextureIds(e){e.source&&(e.source=this._convertIdToIndex(e.source,"image"))}_convertMeshIds(e){for(const r of e.primitives){const{attributes:n,indices:i,material:s}=r;for(const a in n)n[a]=this._convertIdToIndex(n[a],"accessor");i&&(r.indices=this._convertIdToIndex(i,"accessor")),s&&(r.material=this._convertIdToIndex(s,"material"))}}_convertNodeIds(e){e.children&&(e.children=e.children.map(r=>this._convertIdToIndex(r,"node"))),e.meshes&&(e.meshes=e.meshes.map(r=>this._convertIdToIndex(r,"mesh")))}_convertSceneIds(e){e.nodes&&(e.nodes=e.nodes.map(r=>this._convertIdToIndex(r,"node")))}_convertIdsToIndices(e,r){e[r]||(console.warn(`gltf v1: json doesn't contain attribute ${r}`),e[r]=[]);for(const n of e[r])for(const i in n){const s=n[i],a=this._convertIdToIndex(s,i);n[i]=a}}_convertIdToIndex(e,r){const n=Hy[r];if(n in this.idToIndexMap){const i=this.idToIndexMap[n][e];if(!Number.isFinite(i))throw new Error(`gltf v1: failed to resolve ${r} with id ${e}`);return i}return e}_updateObjects(e){for(const r of this.json.buffers)delete r.type}_updateMaterial(e){for(const r of e.materials){r.pbrMetallicRoughness={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1};const n=r.values?.tex||r.values?.texture2d_0||r.values?.diffuseTex,i=e.textures.findIndex(s=>s.id===n);i!==-1&&(r.pbrMetallicRoughness.baseColorTexture={index:i})}}}function jy(t,e={}){return new ky().normalize(t,e)}async function zy(t,e,r=0,n,i){return Wy(t,e,r,n),jy(t,{normalize:n?.gltf?.normalize}),Ly(t,n,i),n?.gltf?.loadBuffers&&t.json.buffers&&await qy(t,n,i),n?.gltf?.loadImages&&await Ky(t,n,i),await Ny(t,n,i),t}function Wy(t,e,r,n){if(n.uri&&(t.baseUri=n.uri),e instanceof ArrayBuffer&&!Db(e,r,n)&&(e=new TextDecoder().decode(e)),typeof e=="string")t.json=ip(e);else if(e instanceof ArrayBuffer){const a={};r=Fb(a,e,r,n.glb),nt(a.type==="glTF",`Invalid GLB magic string ${a.type}`),t._glb=a,t.json=a.json}else nt(!1,"GLTF: must be ArrayBuffer or string");const i=t.json.buffers||[];if(t.buffers=new Array(i.length).fill(null),t._glb&&t._glb.header.hasBinChunk){const{binChunks:a}=t._glb;t.buffers[0]={arrayBuffer:a[0].arrayBuffer,byteOffset:a[0].byteOffset,byteLength:a[0].byteLength}}const s=t.json.images||[];t.images=new Array(s.length).fill({})}async function qy(t,e,r){const n=t.json.buffers||[];for(let i=0;i<n.length;++i){const s=n[i];if(s.uri){const{fetch:a}=r;nt(a);const o=Tc(s.uri,e),u=await(await r?.fetch?.(o))?.arrayBuffer?.();t.buffers[i]={arrayBuffer:u,byteOffset:0,byteLength:u.byteLength},delete s.uri}else t.buffers[i]===null&&(t.buffers[i]={arrayBuffer:new ArrayBuffer(s.byteLength),byteOffset:0,byteLength:s.byteLength})}}async function Ky(t,e,r){const n=Jy(t),i=t.json.images||[],s=[];for(const a of n)s.push(Yy(t,i[a],a,e,r));return await Promise.all(s)}function Jy(t){const e=new Set,r=t.json.textures||[];for(const n of r)n.source!==void 0&&e.add(n.source);return Array.from(e).sort()}async function Yy(t,e,r,n,i){let s;if(e.uri&&!e.hasOwnProperty("bufferView")){const o=Tc(e.uri,n),{fetch:l}=i;s=await(await l(o)).arrayBuffer(),e.bufferView={data:s}}if(Number.isFinite(e.bufferView)){const o=ag(t.json,t.buffers,e.bufferView);s=Ku(o.buffer,o.byteOffset,o.byteLength)}nt(s,"glTF image has no data");let a=await Vu(s,[X0,wb],{...n,mimeType:e.mimeType,basis:n.basis||{format:Ac()}},i);a&&a[0]&&(a={compressed:!0,mipmaps:!1,width:a[0].width,height:a[0].height,data:a[0]}),t.images=t.images||[],t.images[r]=a}const ea={dataType:null,batchType:null,name:"glTF",id:"gltf",module:"gltf",version:mb,extensions:["gltf","glb"],mimeTypes:["model/gltf+json","model/gltf-binary"],text:!0,binary:!0,tests:["glTF"],parse:Xy,options:{gltf:{normalize:!0,loadBuffers:!0,loadImages:!0,decompressMeshes:!0},log:console}};async function Xy(t,e={},r){e={...ea.options,...e},e.gltf={...ea.options.gltf,...e.gltf};const{byteOffset:n=0}=e;return await zy({},t,n,e,r)}const Qy={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$y={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},at={TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,REPEAT:10497,LINEAR:9729,NEAREST_MIPMAP_LINEAR:9986},Zy={magFilter:at.TEXTURE_MAG_FILTER,minFilter:at.TEXTURE_MIN_FILTER,wrapS:at.TEXTURE_WRAP_S,wrapT:at.TEXTURE_WRAP_T},e2={[at.TEXTURE_MAG_FILTER]:at.LINEAR,[at.TEXTURE_MIN_FILTER]:at.NEAREST_MIPMAP_LINEAR,[at.TEXTURE_WRAP_S]:at.REPEAT,[at.TEXTURE_WRAP_T]:at.REPEAT};function t2(){return{id:"default-sampler",parameters:e2}}function r2(t){return $y[t]}function n2(t){return Qy[t]}class i2{baseUri="";jsonUnprocessed;json;buffers=[];images=[];postProcess(e,r={}){const{json:n,buffers:i=[],images:s=[]}=e,{baseUri:a=""}=e;return nt(n),this.baseUri=a,this.buffers=i,this.images=s,this.jsonUnprocessed=n,this.json=this._resolveTree(e.json,r),this.json}_resolveTree(e,r={}){const n={...e};return this.json=n,e.bufferViews&&(n.bufferViews=e.bufferViews.map((i,s)=>this._resolveBufferView(i,s))),e.images&&(n.images=e.images.map((i,s)=>this._resolveImage(i,s))),e.samplers&&(n.samplers=e.samplers.map((i,s)=>this._resolveSampler(i,s))),e.textures&&(n.textures=e.textures.map((i,s)=>this._resolveTexture(i,s))),e.accessors&&(n.accessors=e.accessors.map((i,s)=>this._resolveAccessor(i,s))),e.materials&&(n.materials=e.materials.map((i,s)=>this._resolveMaterial(i,s))),e.meshes&&(n.meshes=e.meshes.map((i,s)=>this._resolveMesh(i,s))),e.nodes&&(n.nodes=e.nodes.map((i,s)=>this._resolveNode(i,s)),n.nodes=n.nodes.map((i,s)=>this._resolveNodeChildren(i))),e.skins&&(n.skins=e.skins.map((i,s)=>this._resolveSkin(i,s))),e.scenes&&(n.scenes=e.scenes.map((i,s)=>this._resolveScene(i,s))),typeof this.json.scene=="number"&&n.scenes&&(n.scene=n.scenes[this.json.scene]),n}getScene(e){return this._get(this.json.scenes,e)}getNode(e){return this._get(this.json.nodes,e)}getSkin(e){return this._get(this.json.skins,e)}getMesh(e){return this._get(this.json.meshes,e)}getMaterial(e){return this._get(this.json.materials,e)}getAccessor(e){return this._get(this.json.accessors,e)}getCamera(e){return this._get(this.json.cameras,e)}getTexture(e){return this._get(this.json.textures,e)}getSampler(e){return this._get(this.json.samplers,e)}getImage(e){return this._get(this.json.images,e)}getBufferView(e){return this._get(this.json.bufferViews,e)}getBuffer(e){return this._get(this.json.buffers,e)}_get(e,r){if(typeof r=="object")return r;const n=e&&e[r];return n||console.warn(`glTF file error: Could not find ${e}[${r}]`),n}_resolveScene(e,r){return{...e,id:e.id||`scene-${r}`,nodes:(e.nodes||[]).map(n=>this.getNode(n))}}_resolveNode(e,r){const n={...e,id:e?.id||`node-${r}`};return e.mesh!==void 0&&(n.mesh=this.getMesh(e.mesh)),e.camera!==void 0&&(n.camera=this.getCamera(e.camera)),e.skin!==void 0&&(n.skin=this.getSkin(e.skin)),e.meshes!==void 0&&e.meshes.length&&(n.mesh=e.meshes.reduce((i,s)=>{const a=this.getMesh(s);return i.id=a.id,i.primitives=i.primitives.concat(a.primitives),i},{primitives:[]})),n}_resolveNodeChildren(e){return e.children&&(e.children=e.children.map(r=>this.getNode(r))),e}_resolveSkin(e,r){const n=typeof e.inverseBindMatrices=="number"?this.getAccessor(e.inverseBindMatrices):void 0;return{...e,id:e.id||`skin-${r}`,inverseBindMatrices:n}}_resolveMesh(e,r){const n={...e,id:e.id||`mesh-${r}`,primitives:[]};return e.primitives&&(n.primitives=e.primitives.map(i=>{const s={...i,attributes:{},indices:void 0,material:void 0},a=i.attributes;for(const o in a)s.attributes[o]=this.getAccessor(a[o]);return i.indices!==void 0&&(s.indices=this.getAccessor(i.indices)),i.material!==void 0&&(s.material=this.getMaterial(i.material)),s})),n}_resolveMaterial(e,r){const n={...e,id:e.id||`material-${r}`};if(n.normalTexture&&(n.normalTexture={...n.normalTexture},n.normalTexture.texture=this.getTexture(n.normalTexture.index)),n.occlusionTexture&&(n.occlusionTexture={...n.occlusionTexture},n.occlusionTexture.texture=this.getTexture(n.occlusionTexture.index)),n.emissiveTexture&&(n.emissiveTexture={...n.emissiveTexture},n.emissiveTexture.texture=this.getTexture(n.emissiveTexture.index)),n.emissiveFactor||(n.emissiveFactor=n.emissiveTexture?[1,1,1]:[0,0,0]),n.pbrMetallicRoughness){n.pbrMetallicRoughness={...n.pbrMetallicRoughness};const i=n.pbrMetallicRoughness;i.baseColorTexture&&(i.baseColorTexture={...i.baseColorTexture},i.baseColorTexture.texture=this.getTexture(i.baseColorTexture.index)),i.metallicRoughnessTexture&&(i.metallicRoughnessTexture={...i.metallicRoughnessTexture},i.metallicRoughnessTexture.texture=this.getTexture(i.metallicRoughnessTexture.index))}return n}_resolveAccessor(e,r){const n=r2(e.componentType),i=n2(e.type),s=n*i,a={...e,id:e.id||`accessor-${r}`,bytesPerComponent:n,components:i,bytesPerElement:s,value:void 0,bufferView:void 0,sparse:void 0};if(e.bufferView!==void 0&&(a.bufferView=this.getBufferView(e.bufferView)),a.bufferView){const o=a.bufferView.buffer,{ArrayType:l,byteLength:u}=Ra(a,a.bufferView),c=(a.bufferView.byteOffset||0)+(a.byteOffset||0)+o.byteOffset;let f=o.arrayBuffer.slice(c,c+u);a.bufferView.byteStride&&(f=this._getValueFromInterleavedBuffer(o,c,a.bufferView.byteStride,a.bytesPerElement,a.count)),a.value=new l(f)}return a}_getValueFromInterleavedBuffer(e,r,n,i,s){const a=new Uint8Array(s*i);for(let o=0;o<s;o++){const l=r+o*n;a.set(new Uint8Array(e.arrayBuffer.slice(l,l+i)),o*i)}return a.buffer}_resolveTexture(e,r){return{...e,id:e.id||`texture-${r}`,sampler:typeof e.sampler=="number"?this.getSampler(e.sampler):t2(),source:typeof e.source=="number"?this.getImage(e.source):void 0}}_resolveSampler(e,r){const n={id:e.id||`sampler-${r}`,...e,parameters:{}};for(const i in n){const s=this._enumSamplerParameter(i);s!==void 0&&(n.parameters[s]=n[i])}return n}_enumSamplerParameter(e){return Zy[e]}_resolveImage(e,r){const n={...e,id:e.id||`image-${r}`,image:null,bufferView:e.bufferView!==void 0?this.getBufferView(e.bufferView):void 0},i=this.images[r];return i&&(n.image=i),n}_resolveBufferView(e,r){const n=e.buffer,i=this.buffers[n].arrayBuffer;let s=this.buffers[n].byteOffset||0;return e.byteOffset&&(s+=e.byteOffset),{id:`bufferView-${r}`,...e,buffer:this.buffers[n],data:new Uint8Array(i,s,e.byteLength)}}_resolveCamera(e,r){const n={...e,id:e.id||`camera-${r}`};return n.perspective,n.orthographic,n}}function s2(t,e){return new i2().postProcess(t,e)}async function ta(t){if(!t.endsWith(".gltf")&&!t.endsWith(".glb"))return console.error("Unsupported file format. Only .gltf and .glb are supported."),new Ae("EmptyMesh",pe({}));try{const e=await b0(t,ea);if(!e)return console.error("Failed to load GLTF file."),new Ae("EmptyMesh",pe({}));const n=s2(e).meshes;if(n.length===0)return console.warn("No meshes found in the GLTF file."),new Ae("EmptyMesh",pe({}));const s=n[0],a=s.name||"UnnamedMesh",o=pe({}),l=new Ae(a,o);for(const u of s.primitives){if(u.mode!==void 0&&u.mode!==4){console.warn(`Skipping non-triangle primitive (mode: ${u.mode})`);continue}const c=u.attributes,f=c.POSITION?.value,d=c.NORMAL?.value,m=c.TEXCOORD_0?.value;if(!f){console.warn("Primitive has no POSITION attribute, skipping.");continue}const h=f.length/3,p=l.getNumVertices();for(let g=0;g<h;++g){const v=E(f[g*3],f[g*3+1],f[g*3+2]),S=d?E(d[g*3],d[g*3+1],d[g*3+2]):E(0,0,1),y=m?Z(m[g*2],m[g*2+1]):Z(0,0);l.addVertex({pos:v,normal:S,uv:y})}const b=u.indices?.value;if(b)for(let g=0;g<b.length;g+=3)l.addTriangle([p+b[g],p+b[g+1],p+b[g+2]]);else for(let g=0;g<h;g+=3)l.addTriangle([p+g,p+g+1,p+g+2])}return console.log(`Loaded mesh "${a}" with ${l.getNumVertices()} vertices and ${l.getNumTriangles()} triangles.`),l}catch(e){return console.error("Error loading mesh:",e),new Ae("EmptyMesh",pe({}))}}class Ae{triangles;vertices;indices;Material;name;transform;BVH;WorldMatrix;inverseWorldMatrix;constructor(e,r){this.name=e,this.Material=r,this.triangles=[],this.indices=[],this.vertices=[],this.BVH=new xm,this.transform={translation:ae(),rotation:Lt(),scale:E(1,1,1)},this.WorldMatrix=mr(),this.inverseWorldMatrix=mr()}TransformMesh(e){this.transform=e,this.computeMatrices()}RotateMesh(e){Th(this.transform.rotation,this.transform.rotation,e),this.computeMatrices()}SetTranslation(e){this.transform.translation=e,this.computeMatrices()}computeMatrices(){this.WorldMatrix=mr(),gh(this.WorldMatrix,this.transform.rotation,this.transform.translation,this.transform.scale),this.inverseWorldMatrix=mr(),ph(this.inverseWorldMatrix,this.WorldMatrix)}GetWorldMatrix(){return this.WorldMatrix}GetInverseWorldMatrix(){return this.inverseWorldMatrix}GetFlatWorldMatrix(){return new Float32Array(this.WorldMatrix)}GetFlatNormalMatrix(){const e=Qt();as(e,this.WorldMatrix);const r=new Float32Array(12);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[4]=e[3],r[5]=e[4],r[6]=e[5],r[8]=e[6],r[9]=e[7],r[10]=e[8],r}GetFlatInverseWorldMatrix(){return new Float32Array(this.inverseWorldMatrix)}GetTransform(){return this.transform}GetMaterial(){return this.Material}GetFlattenedMaterial(){return Un(this.Material)}addVertex(e){return this.vertices.push(e),this.vertices.length-1}addTriangle(e){if(e.length!==3)return;const r={vA:this.vertices[e[0]],vB:this.vertices[e[1]],vC:this.vertices[e[2]]};this.triangles.push(r),this.indices.push(...e)}getVertexData(){const e=Array(this.vertices.length*3),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n){const i=this.vertices[n].pos;r.set(i,n*3)}return r}getWorldVertexData(){const e=new Float32Array(this.vertices.length*3),r=ae();for(let n=0;n<this.vertices.length;++n)os(r,this.vertices[n].pos,this.WorldMatrix),e.set(r,n*3);return e}getTransformedVertexData(){const e=new Float32Array(this.vertices.length*3),r=ae();for(let n=0;n<this.vertices.length;++n)os(r,this.vertices[n].pos,this.WorldMatrix),e.set(r,n*3);return e}getNormalData(){const e=Array(this.vertices.length*3),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n)r.set(this.vertices[n].normal,n*3);return r}getWorldNormalData(){const e=new Float32Array(this.vertices.length*3),r=Qt();as(r,this.WorldMatrix);for(let n=0;n<this.vertices.length;++n){const i=this.vertices[n].normal,s=ae();Vr(s,i,r),Rn(s,s),e.set(s,n*3)}return e}getTransformedNormalData(){const e=new Float32Array(this.vertices.length*3),r=Qt();as(r,this.WorldMatrix);const n=ae();for(let i=0;i<this.vertices.length;++i)Vr(n,this.vertices[i].normal,r),Rn(n,n),e.set(n,i*3);return e}getUVData(){const e=Array(this.vertices.length*2),r=new Float32Array(e);for(let n=0;n<this.vertices.length;++n)r.set(this.vertices[n].uv,n*2);return r}getIndexData16(){return new Uint16Array(this.indices)}getIndexData32(){return new Uint32Array(this.indices)}getNumVertices(){return this.vertices.length}getNumTriangles(){return this.triangles.length}getTriangles(){return this.triangles}ComputeBVH(){this.BVH.buildBVH(this)}GetBVHGeometry(e=1/0){return this.BVH.generateWireframeGeometry(e)}getFlattenedBVHData(e=0){return this.BVH.getFlattenedBVHData(e)}intersectMeshWithRay(e,r){const n=ae();os(n,e.origin,this.GetInverseWorldMatrix());const i=ae(),s=Qt();mh(s,this.GetInverseWorldMatrix()),Vr(i,e.direction,s);const a={origin:n,direction:i,invDir:E(1/i[0],1/i[1],1/i[2])};return this.BVH.traverse(a,r)}getReorderedIndexData32(){return this.BVH.getReorderedIndices(this.indices)}}function Ic(){const e=new Float32Array(8);let r=0;const n=s=>{e[r++]=s.x,e[r++]=s.y};n({x:-.5,y:-.5}),n({x:.5,y:-.5}),n({x:-.5,y:.5}),n({x:.5,y:.5});const i=new Uint16Array([0,1,2,2,1,3]);return{vertexData:e,indexData:i,numVertices:i.length}}function a2({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=(e+1)*2,a=new Float32Array(s*3),o=new Uint8Array(a.buffer);let l=0,u=8;const c=p=>{a[l++]=p.x,a[l++]=p.y,l+=1,o[u++]=(p.r??0)*255,o[u++]=(p.g??0)*255,o[u++]=(p.b??0)*255,u+=9},f=[1,1,1],d=[.1,.1,.1];for(let p=0;p<=e;p++){const b=n+(p+0)*(i-n)/e,g=Math.cos(b),v=Math.sin(b);c({x:g*t,y:v*t,r:d[0],g:d[1],b:d[2]}),c({x:g*r,y:v*r,r:f[0],g:f[1],b:f[2]})}const m=new Uint16Array(e*6);let h=0;for(let p=0;p<e;++p){const b=p*2;m[h++]=b,m[h++]=b+1,m[h++]=b+2,m[h++]=b+2,m[h++]=b+1,m[h++]=b+3}return{vertexData:a,indexData:m,numVertices:m.length}}function o2({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=(e+1)*2,a=new Float32Array(s*2);let o=0;const l=f=>{a[o++]=f.x,a[o++]=f.y};for(let f=0;f<=e;f++){const d=n+(f+0)*(i-n)/e,m=Math.cos(d),h=Math.sin(d);l({x:m*t,y:h*t}),l({x:m*r,y:h*r})}const u=new Uint16Array(e*6);let c=0;for(let f=0;f<e;++f){const d=f*2;u[c++]=d,u[c++]=d+1,u[c++]=d+2,u[c++]=d+2,u[c++]=d+1,u[c++]=d+3}return{vertexData:a,indexData:u,numVertices:u.length}}function l2({radius:t=1,subdivisions:e=24,innerRadius:r=0,startAngle:n=0,endAngle:i=Math.PI*2}={}){const s=e*3*2,a=new Float32Array(s*2);let o=0;const l=(u,c)=>{a[o++]=u,a[o++]=c};for(let u=0;u<e;u++){const c=n+(u+0)*(i-n)/e,f=n+(u+1)*(i-n)/e,d=Math.cos(c),m=Math.sin(c),h=Math.cos(f),p=Math.sin(f);l(d*t,m*t),l(h*t,p*t),l(d*r,m*r),l(d*r,m*r),l(h*t,p*t),l(h*r,p*r)}return a}function u2(){const t=[.73,.73,.73],e=[.65,.05,.05],r=[.12,.45,.15],n=[1,1,1],i=[],s=[],a=[],o=[],l=[],u=[];let c=0;function f(v,S,y,P,C=0){return i.push(v[0],v[1],v[2]),s.push(S[0],S[1],S[2]),a.push(y[0],y[1],y[2]),l.push(P[0],P[1]),o.push(C),c++}function d(v,S,y,P,C,A=!1,R=0){let M=Ui(v,S,y);A&&(M=E(-M[0],-M[1],-M[2]));const G=f(v,[M[0],M[1],M[2]],C,[0,0],R),D=f(S,[M[0],M[1],M[2]],C,[1,0],R),F=f(y,[M[0],M[1],M[2]],C,[1,1],R),U=f(P,[M[0],M[1],M[2]],C,[0,1],R);u.push(G,D,F),u.push(G,F,U)}function m(v,S,y,P=[0,0,0],C=0){const A=S[0]/2,R=S[1]/2,M=S[2]/2;let G=[v[0]-A,v[1]-R,v[2]-M],D=[v[0]+A,v[1]-R,v[2]-M],F=[v[0]+A,v[1]+R,v[2]-M],U=[v[0]-A,v[1]+R,v[2]-M],O=[v[0]-A,v[1]-R,v[2]+M],B=[v[0]+A,v[1]-R,v[2]+M],N=[v[0]+A,v[1]+R,v[2]+M],_=[v[0]-A,v[1]+R,v[2]+M];const w=new Float32Array(9),K=Math.cos(P[0]),ee=Math.sin(P[0]),$=Math.cos(P[1]),J=Math.sin(P[1]),se=Math.cos(P[2]),Te=Math.sin(P[2]);w[0]=$*se,w[1]=-$*Te,w[2]=J,w[3]=ee*J*se+K*Te,w[4]=-ee*J*Te+K*se,w[5]=-ee*$,w[6]=-K*J*se+ee*Te,w[7]=K*J*Te+ee*se,w[8]=K*$;const le=Me=>{const Ce=Me[0]-v[0],Se=Me[1]-v[1],Ye=Me[2]-v[2];return[w[0]*Ce+w[1]*Se+w[2]*Ye+v[0],w[3]*Ce+w[4]*Se+w[5]*Ye+v[1],w[6]*Ce+w[7]*Se+w[8]*Ye+v[2]]};G=le(G),D=le(D),F=le(F),U=le(U),O=le(O),B=le(B),N=le(N),_=le(_),d(O,B,N,_,y,!1,C),d(D,G,U,F,y,!1,C),d(G,O,_,U,y,!1,C),d(B,D,F,N,y,!1,C),d(U,_,N,F,y,!1,C),d(G,D,B,O,y,!1,C)}d([552.8,0,0],[0,0,0],[0,0,559.2],[549.6,0,559.2],t,!1,.98),d([556,548.8,0],[556,548.8,559.2],[0,548.8,559.2],[0,548.8,0],t,!1,.98);const p=548.8-1;d([343,p,227],[343,p,332],[213,p,332],[213,p,227],n),d([549.6,0,559.2],[0,0,559.2],[0,548.8,559.2],[556,548.8,559.2],t),d([0,0,559.2],[0,0,0],[0,548.8,0],[0,548.8,559.2],r),d([552.8,0,0],[549.6,0,559.2],[556,548.8,559.2],[556,548.8,0],e);let b=c;m([278,224.4,279.5],[120,120,120],t,[4,Math.PI/9,7],1);let g=c-b;return{vertexData:new Float32Array(i),indexData:new Uint16Array(u),numVertices:u.length,normalData:new Float32Array(s),colorData:new Float32Array(a),reflectanceData:new Float32Array(o),uvData:new Float32Array(l),additionalInfo:{cubeVertexStart:b,cubeVertexCount:g,cubeCenter:[278,224.4,279.5],cubeVertexInfo:new Float32Array(i.slice(b*3,(b+g)*3)),cubeNormalsInfo:new Float32Array(s.slice(b*3,(b+g)*3))}}}function ws(t,e){let r=4;const n=new Float32Array(r*3),i=new Float32Array(r*3),s=new Float32Array(r*3),a=new Float32Array(r*2),o=new Uint16Array([0,1,2,0,2,3]),l=t.translation,u=t.scale[0]/2,c=t.scale[1]/2,f=t.rotation,d=[E(-u,-c,0),E(u,-c,0),E(u,c,0),E(-u,c,0)],m=Gu(f[0],f[1],f[2]);for(let g=0;g<d.length;++g)Vr(d[g],d[g],m),Yt(d[g],d[g],l);let h=0;const p=(g,v)=>{n[h]=g[0],n[h+1]=g[1],n[h+2]=g[2],i[h]=v[0],i[h+1]=v[1],i[h+2]=v[2],h+=3};p(d[0],e),p(d[1],e),p(d[2],e),p(d[3],e);const b=E(0,0,1);Vr(b,b,m);for(let g=0;g<r;++g)s[g*3+0]=b[0],s[g*3+1]=b[1],s[g*3+2]=b[2];return a[0]=0,a[1]=0,a[2]=1,a[3]=0,a[4]=1,a[5]=1,a[6]=0,a[7]=1,{vertexData:n,indexData:o,colorData:i,normalData:s,uvData:a,numVertices:o.length,transform:t}}function Rs(t,e,r,n=12,i=12){const s=[],a=[],o=[],l=[],u=[],c=(f,d,m,h)=>{s.push(f[0],f[1],f[2]),a.push(d[0],d[1],d[2]),o.push(m[0],m[1],m[2]),l.push(h[0],h[1])};for(let f=0;f<=n;f++){const d=f*Math.PI/n,m=Math.sin(d),h=Math.cos(d);for(let p=0;p<=i;p++){const b=p*2*Math.PI/i,g=Math.sin(b),S=Math.cos(b)*m,y=h,P=g*m,C=1-p/i,A=1-f/n,R=[t[0]+e*S,t[1]+e*y,t[2]+e*P];c(R,[S,y,P],r,[C,A])}}for(let f=0;f<n;f++)for(let d=0;d<i;d++){const m=f*(i+1)+d,h=m+i+1;u.push(m,m+1,h),u.push(h,m+1,h+1)}return{vertexData:new Float32Array(s),indexData:new Uint16Array(u),numVertices:u.length,normalData:new Float32Array(a),colorData:new Float32Array(o),uvData:new Float32Array(l),transform:{translation:E(t[0],t[1],t[2]),rotation:E(0,0,0),scale:E(e,e,e)}}}function c2(t,e=8){const r=[];r.push(new Ae("white wall",pe({albedo:[.73,.73,.73],name:"whiteWall"}))),r.push(new Ae("red wall",pe({albedo:[.65,.05,.05],name:"redWall"}))),r.push(new Ae("green wall",pe({albedo:[.12,.45,.15],name:"greenWall"}))),r.push(new Ae("light",pe({albedo:[1,1,1],roughness:0,name:"light"}))),r.push(new Ae("sphereOne",t.find(d=>d.name==="sphereOne")||pe({albedo:[.12,.45,.15],name:"sphereOne",textureIndex:0}))),r.push(new Ae("sphereTwo",t.find(d=>d.name==="sphereTwo")||pe({albedo:[.05,.05,.65],roughness:.5,metalness:.5,name:"sphereTwo",textureIndex:1}))),r.push(new Ae("sphereThree",t.find(d=>d.name==="sphereThree")||pe({albedo:[.65,.05,.05],roughness:.01,metalness:.98,name:"sphereThree",textureIndex:2})));function n(d,m,h,p){const b={pos:m,normal:h,uv:p};d.addVertex(b)}function i(d,m,h,p,b,g=!1){let v=Ui(m,h,p);g&&(v=E(-v[0],-v[1],-v[2]));const S=d.addVertex({pos:m,normal:v,uv:Z(0,0)}),y=d.addVertex({pos:h,normal:v,uv:Z(1,0)}),P=d.addVertex({pos:p,normal:v,uv:Z(1,1)}),C=d.addVertex({pos:b,normal:v,uv:Z(0,1)});d.addTriangle([S,y,P]),d.addTriangle([S,P,C])}function s(d,m,h,p=12,b=12){const g=d.getNumVertices();for(let v=0;v<=p;v++){const S=v*Math.PI/p,y=Math.sin(S),P=Math.cos(S);for(let C=0;C<=b;C++){const A=C*2*Math.PI/b,R=Math.sin(A),G=Math.cos(A)*y,D=P,F=R*y,U=1-C/b,O=1-v/p,B=E(m[0]+h*G,m[1]+h*D,m[2]+h*F);n(d,B,E(G,D,F),Z(U,O))}}for(let v=0;v<p;v++)for(let S=0;S<b;S++){const y=g+v*(b+1)+S,P=y+b+1;d.addTriangle([y,y+1,P]),d.addTriangle([P,y+1,P+1])}}i(r[0],E(552.8,0,0),E(0,0,0),E(0,0,559.2),E(549.6,0,559.2),!1),i(r[0],E(556,548.8,0),E(556,548.8,559.2),E(0,548.8,559.2),E(0,548.8,0),!1);const o=548.8-1;i(r[3],E(343,o,227),E(343,o,332),E(213,o,332),E(213,o,227),!1),i(r[0],E(549.6,0,559.2),E(0,0,559.2),E(0,548.8,559.2),E(556,548.8,559.2),!1),i(r[2],E(0,0,559.2),E(0,0,0),E(0,548.8,0),E(0,548.8,559.2),!1),i(r[1],E(552.8,0,0),E(549.6,0,559.2),E(556,548.8,559.2),E(556,548.8,0),!1);let l=[278,224.4,279.5],u=90,c=120,f=[E(0,1,0),E(Math.sqrt(3)/2,-.5,0),E(-Math.sqrt(3)/2,-.5,0)];for(let d=0;d<3;++d)s(r[d+4],[0,0,0],1,e,e);return r[4].TransformMesh({translation:E(l[0]+f[0][0]*c,l[1]+f[0][1]*c,l[2]+f[0][2]*c),rotation:us(0,0,0,1),scale:E(u,u,u)}),r[5].TransformMesh({translation:E(l[0]+f[1][0]*c,l[1]+f[1][1]*c,l[2]+f[1][2]*c),rotation:us(0,0,0,1),scale:E(u,u,u)}),r[6].TransformMesh({translation:E(l[0]+f[2][0]*c,l[1]+f[2][1]*c,l[2]+f[2][2]*c),rotation:us(0,0,0,1),scale:E(u,u,u)}),{meshes:r,additionalInfo:{sphereMaterialIndices:[4,5,6],sphereTransforms:[r[4].GetTransform(),r[5].GetTransform(),r[6].GetTransform()],sphereMaterials:[r[4].GetMaterial(),r[5].GetMaterial(),r[6].GetMaterial()]}}}async function f2(t){const e=[];e.push(new Ae("white wall",pe({albedo:[.73,.73,.73],name:"whiteWall",metalness:1,roughness:0}))),e.push(new Ae("Back Wall",pe({albedo:[.73,.73,.73],name:"backWall",metalness:.3,roughness:.6}))),e.push(new Ae("red wall",pe({albedo:[.65,.05,.05],name:"redWall"}))),e.push(new Ae("green wall",pe({albedo:[.12,.45,.15],name:"greenWall"}))),e.push(new Ae("light",pe({albedo:[1,1,1],roughness:0,name:"light"})));const r=t.find(l=>l.name==="dragon")||pe({albedo:[.12,.45,.15],name:"dragon",textureIndex:0,useAlbedoTexture:!0,useRoughnessTexture:!0,useMetalnessTexture:!0});function n(l,u,c,f,d,m=!1){let h=Ui(u,c,f);m&&(h=E(-h[0],-h[1],-h[2]));const p=l.addVertex({pos:u,normal:h,uv:Z(0,0)}),b=l.addVertex({pos:c,normal:h,uv:Z(1,0)}),g=l.addVertex({pos:f,normal:h,uv:Z(1,1)}),v=l.addVertex({pos:d,normal:h,uv:Z(0,1)});l.addTriangle([p,b,g]),l.addTriangle([p,g,v])}n(e[0],E(552.8,0,0),E(0,0,0),E(0,0,559.2),E(549.6,0,559.2),!1),n(e[0],E(556,548.8,0),E(556,548.8,559.2),E(0,548.8,559.2),E(0,548.8,0),!1);const s=548.8-1;n(e[4],E(343,s,227),E(343,s,332),E(213,s,332),E(213,s,227),!1),n(e[1],E(549.6,0,559.2),E(0,0,559.2),E(0,548.8,559.2),E(556,548.8,559.2),!1),n(e[3],E(0,0,559.2),E(0,0,0),E(0,548.8,0),E(0,548.8,559.2),!1),n(e[2],E(552.8,0,0),E(549.6,0,559.2),E(556,548.8,559.2),E(556,548.8,0),!1);let a=[278,224.4,279.5];const o=await ta("/meshes/dragon/scene.gltf");o.Material=r,o.TransformMesh({translation:E(a[0],a[1],a[2]),rotation:Or(Lt(),0,0,0),scale:E(2,2,2)}),e.push(o);for(const l of e)l.ComputeBVH();return{meshes:e,additionalInfo:{meshIndices:[5],meshTransforms:[e[5].GetTransform()],meshMaterials:[e[5].GetMaterial()]}}}async function d2(t){const e=[],r=t.find(S=>S.name==="topWall")||pe({albedo:[.73,.73,.73],name:"topWall",metalness:1,roughness:0});e.push(new Ae("top wall",r));const n=t.find(S=>S.name==="floorWall")||pe({albedo:[.73,.73,.73],name:"floorWall",metalness:0,roughness:1});e.push(new Ae("floor wall",n));const i=t.find(S=>S.name==="backWall")||pe({albedo:[.73,.73,.73],name:"backWall",textureIndex:0,useAlbedoTexture:!0,useRoughnessTexture:!0,useMetalnessTexture:!0,roughness:1,metalness:0});e.push(new Ae("back wall",i));const s=t.find(S=>S.name==="redWall")||pe({albedo:[.65,.05,.05],name:"redWall",roughness:.07,metalness:.94});e.push(new Ae("red wall",s));const a=t.find(S=>S.name==="greenWall")||pe({albedo:[.12,.45,.15],name:"greenWall",roughness:.07,metalness:.94});e.push(new Ae("green wall",a));const o=t.find(S=>S.name==="cube1")||pe({albedo:[.73,.73,.73],name:"cube1"}),l=t.find(S=>S.name==="cube2")||pe({albedo:[.73,.73,.73],name:"cube2"}),u=t.find(S=>S.name==="calavera")||pe({albedo:[.73,.73,.73],name:"calavera",textureIndex:1,useAlbedoTexture:!0,useRoughnessTexture:!1,useMetalnessTexture:!1,roughness:.02,metalness:.27}),c=t.find(S=>S.name==="takis")||pe({albedo:[.73,.73,.73],name:"takis",textureIndex:2,useAlbedoTexture:!0,useRoughnessTexture:!1,useMetalnessTexture:!1,roughness:.01,metalness:.03});function f(S,y,P,C,A,R=!1){let M=Ui(y,P,C);R&&(M=E(-M[0],-M[1],-M[2]));const G=S.addVertex({pos:y,normal:M,uv:Z(0,0)}),D=S.addVertex({pos:P,normal:M,uv:Z(1,0)}),F=S.addVertex({pos:C,normal:M,uv:Z(1,1)}),U=S.addVertex({pos:A,normal:M,uv:Z(0,1)});S.addTriangle([G,D,F]),S.addTriangle([G,F,U])}function d(S,y,P){const C=P[0]/2,A=P[1]/2,R=P[2]/2,M=[[y[0]-C,y[1]-A,y[2]+R],[y[0]+C,y[1]-A,y[2]+R],[y[0]+C,y[1]+A,y[2]+R],[y[0]-C,y[1]+A,y[2]+R],[y[0]-C,y[1]-A,y[2]-R],[y[0]+C,y[1]-A,y[2]-R],[y[0]+C,y[1]+A,y[2]-R],[y[0]-C,y[1]+A,y[2]-R],[y[0]-C,y[1]-A,y[2]-R],[y[0]-C,y[1]-A,y[2]+R],[y[0]-C,y[1]+A,y[2]+R],[y[0]-C,y[1]+A,y[2]-R],[y[0]+C,y[1]-A,y[2]-R],[y[0]+C,y[1]-A,y[2]+R],[y[0]+C,y[1]+A,y[2]+R],[y[0]+C,y[1]+A,y[2]-R],[y[0]-C,y[1]+A,y[2]-R],[y[0]-C,y[1]+A,y[2]+R],[y[0]+C,y[1]+A,y[2]+R],[y[0]+C,y[1]+A,y[2]-R],[y[0]-C,y[1]-A,y[2]-R],[y[0]-C,y[1]-A,y[2]+R],[y[0]+C,y[1]-A,y[2]+R],[y[0]+C,y[1]-A,y[2]-R]];f(S,M[0],M[1],M[2],M[3]),f(S,M[5],M[4],M[7],M[6]),f(S,M[8],M[9],M[10],M[11]),f(S,M[13],M[12],M[15],M[14]),f(S,M[16],M[17],M[18],M[19]),f(S,M[21],M[20],M[23],M[22])}f(e[1],E(552.8,0,0),E(0,0,0),E(0,0,559.2),E(549.6,0,559.2),!1),f(e[0],E(556,548.8,0),E(556,548.8,559.2),E(0,548.8,559.2),E(0,548.8,0),!1),f(e[2],E(549.6,0,559.2),E(0,0,559.2),E(0,548.8,559.2),E(556,548.8,559.2),!1),f(e[3],E(0,0,559.2),E(0,0,0),E(0,548.8,0),E(0,548.8,559.2),!1),f(e[4],E(552.8,0,0),E(549.6,0,559.2),E(556,548.8,559.2),E(556,548.8,0),!1);const m=new Ae("short block",o);d(m,[0,0,0],[167.3,165,167]),m.TransformMesh({translation:E(185.5,82.5,169),rotation:Or(Lt(),0,17,0),scale:E(1,1,1)}),e.push(m);const h=new Ae("tall block",l);d(h,[0,0,0],[166.4,330,165.4]),h.TransformMesh({translation:E(368.5,165,351.25),rotation:Or(Lt(),0,72.9,0),scale:E(1,1,1)}),e.push(h);const p=Yt(ae(),h.GetTransform().translation,E(0,207,0)),b=await ta("/meshes/calavera/scene.gltf");b.Material=u,b.TransformMesh({translation:p,rotation:Or(Lt(),0,180,0),scale:E(60,60,60)}),e.push(b);const g=Yt(ae(),m.GetTransform().translation,E(0,95.5,0)),v=await ta("/meshes/takis/scene.gltf");v.Material=c,v.TransformMesh({translation:g,rotation:Or(Lt(),190,180,0),scale:E(60,60,60)}),e.push(v);for(const S of e)S.ComputeBVH();return{meshes:e,additionalInfo:{meshIndices:[0,1,2,3,4,5,6,7,8],meshTransforms:[e[0].GetTransform(),e[1].GetTransform(),e[2].GetTransform(),e[3].GetTransform(),e[4].GetTransform(),e[5].GetTransform(),e[6].GetTransform(),e[7].GetTransform(),e[8].GetTransform()],meshMaterials:[r,n,i,s,a,o,l,u,c]}}}async function h2(t,e,r){const n=[];let a=e|0;const o=()=>{a=a+1831565813|0;let M=Math.imul(a^a>>>15,1|a);return M=M+Math.imul(M^M>>>7,61|M)^M,((M^M>>>14)>>>0)/4294967296},l=(M,G)=>o()*(G-M)+M,u=new Ae("ground",pe({albedo:[.9,.9,.9],name:"ground",roughness:1,metalness:0})),c=0,f=u.addVertex({pos:E(-100,c,-100),normal:E(0,1,0),uv:Z(0,0)}),d=u.addVertex({pos:E(100,c,-100),normal:E(0,1,0),uv:Z(1,0)}),m=u.addVertex({pos:E(100,c,100),normal:E(0,1,0),uv:Z(1,1)}),h=u.addVertex({pos:E(-100,c,100),normal:E(0,1,0),uv:Z(0,1)});u.addTriangle([f,m,d]),u.addTriangle([f,h,m]),n.push(u);const p=16;function b(M,G,D,F=12,U=12){const O=M.getNumVertices();for(let B=0;B<=F;B++){const N=B*Math.PI/F,_=Math.sin(N),w=Math.cos(N);for(let K=0;K<=U;K++){const ee=K*2*Math.PI/U,$=Math.sin(ee),se=Math.cos(ee)*_,Te=w,le=$*_;M.addVertex({pos:E(G[0]+D*se,G[1]+D*Te,G[2]+D*le),normal:E(se,Te,le),uv:Z(1-K/U,1-B/F)})}}for(let B=0;B<F;B++)for(let N=0;N<U;N++){const _=O+B*(U+1)+N,w=_+U+1;M.addTriangle([_,_+1,w]),M.addTriangle([w,_+1,w+1])}}for(let M=0;M<r;M++){const G=t.find(O=>O.name===`sphere${M}`)||pe({albedo:[o(),o(),o()],name:`sphere${M}`,roughness:l(.01,1),metalness:o()>.5?l(.8,1):l(0,.2)}),D=l(2,8),F=[l(-100+D,100-D),D,l(-100+D,100-D)],U=new Ae(`sphere${M}`,G);b(U,F,D,p,p),n.push(U)}for(const M of n)M.ComputeBVH();const g=[],v=[],S=[],y=[];let P=0;for(let M=0;M<n.length;M++){const G=n[M].getWorldVertexData(),D=n[M].getWorldNormalData();g.push(...G),v.push(...D),S.push(P),P+=n[M].getNumVertices()*3*4;const F=n[M].getNumTriangles(),U=M;for(let O=0;O<F;O++)y.push(U)}const C=new Float32Array(g),A=new Float32Array(v),R=new Uint32Array(y);return{meshes:n,additionalInfo:{meshIndices:n.map((M,G)=>G),meshTransforms:n.map(M=>M.GetTransform()),meshMaterials:n.map(M=>M.GetMaterial()),worldPositionData:C,worldNormalData:A,perTriangleMaterialIndices:R,perMeshWorldPositionOffsets:S}}}const m2=0,p2=4,ii=50;async function g2(t){const e=await ht();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const i=il(e,"hardcoded triangle",hm),s=il(e,"hardcoded triangle",mm),a=b2(e,i,s,n),o=32,l=8,u=o*ii,c=l*ii,f=l2({radius:1,innerRadius:.5}),d=f.byteLength,m=f.length/2,h=Os(e,u),p=Os(e,c),b=Os(e,d);e.queue.writeBuffer(b,0,f);const g=[];{const C=new Float32Array(u/4);for(let A=0;A<ii;A++){const R=A*(o/4);C.set([de(.1),de(.1),de(.1),1],R+m2),C.set([de(-.9,.9),de(-.9,.9)],R+p2);const M={scale:de(.1,.4)};g.push(M)}e.queue.writeBuffer(h,0,C)}const v=new Float32Array(c/4),S=v2(e,a.getBindGroupLayout(0),h,p,b),y={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(C=>{for(const A of C){const R=A.target,M=A.contentBoxSize[0].inlineSize,G=A.contentBoxSize[0].blockSize;R.width=Math.max(1,Math.min(M,e.limits.maxTextureDimension2D)),R.height=Math.max(1,Math.min(G,e.limits.maxTextureDimension2D))}y2(e,t,r,a,y,g,S,v,p,m)}).observe(t),null}function il(t,e,r){return t.createShaderModule({label:e,code:r})}function b2(t,e,r,n){return t.createRenderPipeline({label:"slightly more advanced pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function y2(t,e,r,n,i,s,a,o,l,u){i.colorAttachments[0].view=r.getCurrentTexture().createView();const c=t.createCommandEncoder({label:"pass encoder"}),f=c.beginRenderPass(i);f.setPipeline(n);const d=e.width/e.height;s.forEach((h,p)=>{const b=2*p;o.set([h.scale/d,h.scale],b)}),t.queue.writeBuffer(l,0,o),f.setBindGroup(0,a),f.draw(u,ii),f.end();const m=c.finish();t.queue.submit([m])}function Os(t,e){return t.createBuffer({label:"storage buffer",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}function v2(t,e,r,n,i){return t.createBindGroup({label:"storage bind group",layout:e,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}},{binding:2,resource:{buffer:i}}]})}const x2=`// ============================== //\r
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
}`,B2=`// ============================== //\r
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
}`,A2=0,T2=1,si=50;async function M2(t){const e=await ht();if(e==null){console.log("Was not able to acquire a WebGPU device.");return}const r=t.getContext("webgpu"),n=navigator.gpu.getPreferredCanvasFormat();if(!r){console.error("WebGPU context is not available.");return}r.configure({device:e,format:n,alphaMode:"premultiplied"});const i=sl(e,"hardcoded triangle",x2),s=sl(e,"hardcoded triangle",B2),a=S2(e,i,s,n),o=12,l=8,u=o*si,c=l*si,f=a2({radius:1,innerRadius:.5}),d=f.vertexData.byteLength,m=f.numVertices,h=Is(e,u),p=Is(e,c),b=Is(e,d),g=E2(e,f.indexData.byteLength);e.queue.writeBuffer(b,0,f.vertexData),e.queue.writeBuffer(g,0,f.indexData);const v=[];{const C=new Uint8Array(u),A=new Float32Array(C.buffer);for(let R=0;R<si;R++){const M=R*o,G=R*(o/4);C.set([Math.round(de(.1)*255),Math.round(de(.1)*255),Math.round(de(.1)*255),255],M+A2),A.set([de(-.9,.9),de(-.9,.9)],G+T2);const D={scale:de(.1,.4)};v.push(D)}e.queue.writeBuffer(h,0,A)}const S=new Float32Array(c/4),y={label:"basic canvas renderPass",colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}]};return new ResizeObserver(C=>{for(const A of C){const R=A.target,M=A.contentBoxSize[0].inlineSize,G=A.contentBoxSize[0].blockSize;R.width=Math.max(1,Math.min(M,e.limits.maxTextureDimension2D)),R.height=Math.max(1,Math.min(G,e.limits.maxTextureDimension2D))}P2(e,t,r,a,y,v,h,S,p,m,b,g)}).observe(t),null}function sl(t,e,r){return t.createShaderModule({label:e,code:r})}function S2(t,e,r,n){return t.createRenderPipeline({label:"vertex buffer pipeline",layout:"auto",vertex:{module:e,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:4,offset:8,format:"unorm8x4"}]},{arrayStride:12,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"},{shaderLocation:2,offset:4,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:3,offset:0,format:"float32x2"}]}]},fragment:{module:r,entryPoint:"fs",targets:[{format:n}]}})}function P2(t,e,r,n,i,s,a,o,l,u,c,f){i.colorAttachments[0].view=r.getCurrentTexture().createView();const d=t.createCommandEncoder({label:"pass encoder"}),m=d.beginRenderPass(i);m.setPipeline(n),m.setVertexBuffer(0,c),m.setVertexBuffer(1,a),m.setVertexBuffer(2,l),m.setIndexBuffer(f,"uint16");const h=e.width/e.height;s.forEach((b,g)=>{const v=2*g;o.set([b.scale/h,b.scale],v)}),t.queue.writeBuffer(l,0,o),m.drawIndexed(u,si),m.end();const p=d.finish();t.queue.submit([p])}function Is(t,e){return t.createBuffer({label:"vertex buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}function E2(t,e){return t.createBuffer({label:"index buffer",size:e,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})}const C2=`// ============================== //\r
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
}`,w2=`// ============================== //\r
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
}`;let De=1e-6;const R2=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>new Array(12).fill(0)]]);R2.get(Float32Array);let zi=Float32Array;function dt(t,e,r){const n=new zi(3);return t!==void 0&&(n[0]=t,e!==void 0&&(n[1]=e,r!==void 0&&(n[2]=r))),n}function Da(t,e,r){return r=r||new zi(3),r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function Jr(t,e,r){r=r||new zi(3);const n=t[2]*e[0]-t[0]*e[2],i=t[0]*e[1]-t[1]*e[0];return r[0]=t[1]*e[2]-t[2]*e[1],r[1]=n,r[2]=i,r}function Nt(t,e){e=e||new zi(3);const r=t[0],n=t[1],i=t[2],s=Math.sqrt(r*r+n*n+i*i);return s>1e-5?(e[0]=r/s,e[1]=n/s,e[2]=i/s):(e[0]=0,e[1]=0,e[2]=0),e}let ge=Float32Array;function O2(t){const e=ge;return ge=t,e}function I2(t,e,r,n,i,s,a,o,l,u,c,f,d,m,h,p){const b=new ge(16);return t!==void 0&&(b[0]=t,e!==void 0&&(b[1]=e,r!==void 0&&(b[2]=r,n!==void 0&&(b[3]=n,i!==void 0&&(b[4]=i,s!==void 0&&(b[5]=s,a!==void 0&&(b[6]=a,o!==void 0&&(b[7]=o,l!==void 0&&(b[8]=l,u!==void 0&&(b[9]=u,c!==void 0&&(b[10]=c,f!==void 0&&(b[11]=f,d!==void 0&&(b[12]=d,m!==void 0&&(b[13]=m,h!==void 0&&(b[14]=h,p!==void 0&&(b[15]=p)))))))))))))))),b}function G2(t,e){return e=e||new ge(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=0,e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=0,e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _2(t,e){e=e||new ge(16);const r=t[0],n=t[1],i=t[2],s=t[3],a=r+r,o=n+n,l=i+i,u=r*a,c=n*a,f=n*o,d=i*a,m=i*o,h=i*l,p=s*a,b=s*o,g=s*l;return e[0]=1-f-h,e[1]=c+g,e[2]=d-b,e[3]=0,e[4]=c-g,e[5]=1-u-h,e[6]=m+p,e[7]=0,e[8]=d+b,e[9]=m-p,e[10]=1-u-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function U2(t,e){return e=e||new ge(16),e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=-t[7],e[8]=-t[8],e[9]=-t[9],e[10]=-t[10],e[11]=-t[11],e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=-t[15],e}function Fa(t,e){return e=e||new ge(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}const D2=Fa;function F2(t,e){return Math.abs(t[0]-e[0])<De&&Math.abs(t[1]-e[1])<De&&Math.abs(t[2]-e[2])<De&&Math.abs(t[3]-e[3])<De&&Math.abs(t[4]-e[4])<De&&Math.abs(t[5]-e[5])<De&&Math.abs(t[6]-e[6])<De&&Math.abs(t[7]-e[7])<De&&Math.abs(t[8]-e[8])<De&&Math.abs(t[9]-e[9])<De&&Math.abs(t[10]-e[10])<De&&Math.abs(t[11]-e[11])<De&&Math.abs(t[12]-e[12])<De&&Math.abs(t[13]-e[13])<De&&Math.abs(t[14]-e[14])<De&&Math.abs(t[15]-e[15])<De}function L2(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function Gc(t){return t=t||new ge(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function N2(t,e){if(e=e||new ge(16),e===t){let v;return v=t[1],t[1]=t[4],t[4]=v,v=t[2],t[2]=t[8],t[8]=v,v=t[3],t[3]=t[12],t[12]=v,v=t[6],t[6]=t[9],t[9]=v,v=t[7],t[7]=t[13],t[13]=v,v=t[11],t[11]=t[14],t[14]=v,e}const r=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],m=t[11],h=t[12],p=t[13],b=t[14],g=t[15];return e[0]=r,e[1]=a,e[2]=c,e[3]=h,e[4]=n,e[5]=o,e[6]=f,e[7]=p,e[8]=i,e[9]=l,e[10]=d,e[11]=b,e[12]=s,e[13]=u,e[14]=m,e[15]=g,e}function _c(t,e){e=e||new ge(16);const r=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],m=t[11],h=t[12],p=t[13],b=t[14],g=t[15],v=d*g,S=b*m,y=l*g,P=b*u,C=l*m,A=d*u,R=i*g,M=b*s,G=i*m,D=d*s,F=i*u,U=l*s,O=c*p,B=h*f,N=a*p,_=h*o,w=a*f,K=c*o,ee=r*p,$=h*n,J=r*f,se=c*n,Te=r*o,le=a*n,Me=v*o+P*f+C*p-(S*o+y*f+A*p),Ce=S*n+R*f+D*p-(v*n+M*f+G*p),Se=y*n+M*o+F*p-(P*n+R*o+U*p),Ye=A*n+G*o+U*f-(C*n+D*o+F*f),be=1/(r*Me+a*Ce+c*Se+h*Ye);return e[0]=be*Me,e[1]=be*Ce,e[2]=be*Se,e[3]=be*Ye,e[4]=be*(S*a+y*c+A*h-(v*a+P*c+C*h)),e[5]=be*(v*r+M*c+G*h-(S*r+R*c+D*h)),e[6]=be*(P*r+R*a+U*h-(y*r+M*a+F*h)),e[7]=be*(C*r+D*a+F*c-(A*r+G*a+U*c)),e[8]=be*(O*u+_*m+w*g-(B*u+N*m+K*g)),e[9]=be*(B*s+ee*m+se*g-(O*s+$*m+J*g)),e[10]=be*(N*s+$*u+Te*g-(_*s+ee*u+le*g)),e[11]=be*(K*s+J*u+le*m-(w*s+se*u+Te*m)),e[12]=be*(N*d+K*b+B*l-(w*b+O*l+_*d)),e[13]=be*(J*b+O*i+$*d-(ee*d+se*b+B*i)),e[14]=be*(ee*l+le*b+_*i-(Te*b+N*i+$*l)),e[15]=be*(Te*d+w*i+se*l-(J*l+le*d+K*i)),e}function V2(t){const e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],a=t[5],o=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11],m=t[12],h=t[13],p=t[14],b=t[15],g=f*b,v=p*d,S=o*b,y=p*l,P=o*d,C=f*l,A=n*b,R=p*i,M=n*d,G=f*i,D=n*l,F=o*i,U=g*a+y*c+P*h-(v*a+S*c+C*h),O=v*r+A*c+G*h-(g*r+R*c+M*h),B=S*r+R*a+D*h-(y*r+A*a+F*h),N=C*r+M*a+F*c-(P*r+G*a+D*c);return e*U+s*O+u*B+m*N}const H2=_c;function Uc(t,e,r){r=r||new ge(16);const n=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=t[5],u=t[6],c=t[7],f=t[8],d=t[9],m=t[10],h=t[11],p=t[12],b=t[13],g=t[14],v=t[15],S=e[0],y=e[1],P=e[2],C=e[3],A=e[4],R=e[5],M=e[6],G=e[7],D=e[8],F=e[9],U=e[10],O=e[11],B=e[12],N=e[13],_=e[14],w=e[15];return r[0]=n*S+o*y+f*P+p*C,r[1]=i*S+l*y+d*P+b*C,r[2]=s*S+u*y+m*P+g*C,r[3]=a*S+c*y+h*P+v*C,r[4]=n*A+o*R+f*M+p*G,r[5]=i*A+l*R+d*M+b*G,r[6]=s*A+u*R+m*M+g*G,r[7]=a*A+c*R+h*M+v*G,r[8]=n*D+o*F+f*U+p*O,r[9]=i*D+l*F+d*U+b*O,r[10]=s*D+u*F+m*U+g*O,r[11]=a*D+c*F+h*U+v*O,r[12]=n*B+o*N+f*_+p*w,r[13]=i*B+l*N+d*_+b*w,r[14]=s*B+u*N+m*_+g*w,r[15]=a*B+c*N+h*_+v*w,r}const k2=Uc;function j2(t,e,r){return r=r||Gc(),t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11]),r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function z2(t,e){return e=e||dt(),e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function W2(t,e,r){r=r||dt();const n=e*4;return r[0]=t[n+0],r[1]=t[n+1],r[2]=t[n+2],r}function q2(t,e,r,n){n!==t&&(n=Fa(t,n));const i=r*4;return n[i+0]=e[0],n[i+1]=e[1],n[i+2]=e[2],n}function K2(t,e){e=e||dt();const r=t[0],n=t[1],i=t[2],s=t[4],a=t[5],o=t[6],l=t[8],u=t[9],c=t[10];return e[0]=Math.sqrt(r*r+n*n+i*i),e[1]=Math.sqrt(s*s+a*a+o*o),e[2]=Math.sqrt(l*l+u*u+c*c),e}function J2(t,e,r,n,i){i=i||new ge(16);const s=Math.tan(Math.PI*.5-.5*t);if(i[0]=s/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,n===1/0)i[10]=-1,i[14]=-r;else{const a=1/(r-n);i[10]=n*a,i[14]=n*r*a}return i}function Y2(t,e,r,n,i,s,a){return a=a||new ge(16),a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-r),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1/(i-s),a[11]=0,a[12]=(e+t)/(t-e),a[13]=(n+r)/(r-n),a[14]=i/(i-s),a[15]=1,a}function X2(t,e,r,n,i,s,a){a=a||new ge(16);const o=e-t,l=n-r,u=i-s;return a[0]=2*i/o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*i/l,a[6]=0,a[7]=0,a[8]=(t+e)/o,a[9]=(n+r)/l,a[10]=s/u,a[11]=-1,a[12]=0,a[13]=0,a[14]=i*s/u,a[15]=0,a}let ye,Pe,fe;function Q2(t,e,r,n){return n=n||new ge(16),ye=ye||dt(),Pe=Pe||dt(),fe=fe||dt(),Nt(Da(e,t,fe),fe),Nt(Jr(r,fe,ye),ye),Nt(Jr(fe,ye,Pe),Pe),n[0]=ye[0],n[1]=ye[1],n[2]=ye[2],n[3]=0,n[4]=Pe[0],n[5]=Pe[1],n[6]=Pe[2],n[7]=0,n[8]=fe[0],n[9]=fe[1],n[10]=fe[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function $2(t,e,r,n){return n=n||new ge(16),ye=ye||dt(),Pe=Pe||dt(),fe=fe||dt(),Nt(Da(t,e,fe),fe),Nt(Jr(r,fe,ye),ye),Nt(Jr(fe,ye,Pe),Pe),n[0]=ye[0],n[1]=ye[1],n[2]=ye[2],n[3]=0,n[4]=Pe[0],n[5]=Pe[1],n[6]=Pe[2],n[7]=0,n[8]=fe[0],n[9]=fe[1],n[10]=fe[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Z2(t,e,r,n){return n=n||new ge(16),ye=ye||dt(),Pe=Pe||dt(),fe=fe||dt(),Nt(Da(t,e,fe),fe),Nt(Jr(r,fe,ye),ye),Nt(Jr(fe,ye,Pe),Pe),n[0]=ye[0],n[1]=Pe[0],n[2]=fe[0],n[3]=0,n[4]=ye[1],n[5]=Pe[1],n[6]=fe[1],n[7]=0,n[8]=ye[2],n[9]=Pe[2],n[10]=fe[2],n[11]=0,n[12]=-(ye[0]*t[0]+ye[1]*t[1]+ye[2]*t[2]),n[13]=-(Pe[0]*t[0]+Pe[1]*t[1]+Pe[2]*t[2]),n[14]=-(fe[0]*t[0]+fe[1]*t[1]+fe[2]*t[2]),n[15]=1,n}function ev(t,e){return e=e||new ge(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function tv(t,e,r){r=r||new ge(16);const n=e[0],i=e[1],s=e[2],a=t[0],o=t[1],l=t[2],u=t[3],c=t[4],f=t[5],d=t[6],m=t[7],h=t[8],p=t[9],b=t[10],g=t[11],v=t[12],S=t[13],y=t[14],P=t[15];return t!==r&&(r[0]=a,r[1]=o,r[2]=l,r[3]=u,r[4]=c,r[5]=f,r[6]=d,r[7]=m,r[8]=h,r[9]=p,r[10]=b,r[11]=g),r[12]=a*n+c*i+h*s+v,r[13]=o*n+f*i+p*s+S,r[14]=l*n+d*i+b*s+y,r[15]=u*n+m*i+g*s+P,r}function rv(t,e){e=e||new ge(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function nv(t,e,r){r=r||new ge(16);const n=t[4],i=t[5],s=t[6],a=t[7],o=t[8],l=t[9],u=t[10],c=t[11],f=Math.cos(e),d=Math.sin(e);return r[4]=f*n+d*o,r[5]=f*i+d*l,r[6]=f*s+d*u,r[7]=f*a+d*c,r[8]=f*o-d*n,r[9]=f*l-d*i,r[10]=f*u-d*s,r[11]=f*c-d*a,t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function iv(t,e){e=e||new ge(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function sv(t,e,r){r=r||new ge(16);const n=t[0],i=t[1],s=t[2],a=t[3],o=t[8],l=t[9],u=t[10],c=t[11],f=Math.cos(e),d=Math.sin(e);return r[0]=f*n-d*o,r[1]=f*i-d*l,r[2]=f*s-d*u,r[3]=f*a-d*c,r[8]=f*o+d*n,r[9]=f*l+d*i,r[10]=f*u+d*s,r[11]=f*c+d*a,t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function av(t,e){e=e||new ge(16);const r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ov(t,e,r){r=r||new ge(16);const n=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=t[5],u=t[6],c=t[7],f=Math.cos(e),d=Math.sin(e);return r[0]=f*n+d*o,r[1]=f*i+d*l,r[2]=f*s+d*u,r[3]=f*a+d*c,r[4]=f*o-d*n,r[5]=f*l-d*i,r[6]=f*u-d*s,r[7]=f*c-d*a,t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function Dc(t,e,r){r=r||new ge(16);let n=t[0],i=t[1],s=t[2];const a=Math.sqrt(n*n+i*i+s*s);n/=a,i/=a,s/=a;const o=n*n,l=i*i,u=s*s,c=Math.cos(e),f=Math.sin(e),d=1-c;return r[0]=o+(1-o)*c,r[1]=n*i*d+s*f,r[2]=n*s*d-i*f,r[3]=0,r[4]=n*i*d-s*f,r[5]=l+(1-l)*c,r[6]=i*s*d+n*f,r[7]=0,r[8]=n*s*d+i*f,r[9]=i*s*d-n*f,r[10]=u+(1-u)*c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const lv=Dc;function Fc(t,e,r,n){n=n||new ge(16);let i=e[0],s=e[1],a=e[2];const o=Math.sqrt(i*i+s*s+a*a);i/=o,s/=o,a/=o;const l=i*i,u=s*s,c=a*a,f=Math.cos(r),d=Math.sin(r),m=1-f,h=l+(1-l)*f,p=i*s*m+a*d,b=i*a*m-s*d,g=i*s*m-a*d,v=u+(1-u)*f,S=s*a*m+i*d,y=i*a*m+s*d,P=s*a*m-i*d,C=c+(1-c)*f,A=t[0],R=t[1],M=t[2],G=t[3],D=t[4],F=t[5],U=t[6],O=t[7],B=t[8],N=t[9],_=t[10],w=t[11];return n[0]=h*A+p*D+b*B,n[1]=h*R+p*F+b*N,n[2]=h*M+p*U+b*_,n[3]=h*G+p*O+b*w,n[4]=g*A+v*D+S*B,n[5]=g*R+v*F+S*N,n[6]=g*M+v*U+S*_,n[7]=g*G+v*O+S*w,n[8]=y*A+P*D+C*B,n[9]=y*R+P*F+C*N,n[10]=y*M+P*U+C*_,n[11]=y*G+P*O+C*w,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const uv=Fc;function cv(t,e){return e=e||new ge(16),e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function fv(t,e,r){r=r||new ge(16);const n=e[0],i=e[1],s=e[2];return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=n*t[3],r[4]=i*t[4],r[5]=i*t[5],r[6]=i*t[6],r[7]=i*t[7],r[8]=s*t[8],r[9]=s*t[9],r[10]=s*t[10],r[11]=s*t[11],t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}var It=Object.freeze({__proto__:null,aim:Q2,axisRotate:Fc,axisRotation:Dc,cameraAim:$2,clone:D2,copy:Fa,create:I2,determinant:V2,equals:L2,equalsApproximately:F2,fromMat3:G2,fromQuat:_2,frustum:X2,getAxis:W2,getScaling:K2,getTranslation:z2,identity:Gc,inverse:_c,invert:H2,lookAt:Z2,mul:k2,multiply:Uc,negate:U2,ortho:Y2,perspective:J2,rotate:uv,rotateX:nv,rotateY:sv,rotateZ:ov,rotation:lv,rotationX:rv,rotationY:iv,rotationZ:av,scale:fv,scaling:cv,setAxis:q2,setDefaultType:O2,setTranslation:j2,translate:tv,translation:ev,transpose:N2});async function dv(t){const e=new Ti;return await e.initialize(t),e}class Ti{device;canvas=null;context=null;presentationFormat=null;simpleTextureModule=null;simpleTexturePipeline=null;timestampQuerySet=null;video=null;animationFrameId=null;resizeObserver=null;infoElement=ar();vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;storageBuffer=null;perInstanceOffsets=null;static maxObjects=100;static minObjects=1;numberOfObjects=10;newNumberOfObjects=this.numberOfObjects;slider=null;constructor(){this.device=null}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.addNumberOfObjectsSlider(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.simpleTextureModule=Ie(this.device,C2,w2,"simple texture"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.simpleTextureModule!==null&&(this.simpleTexturePipeline=this.device.createRenderPipeline({label:"Simple Texture Video Pipeline",layout:"auto",vertex:{module:this.simpleTextureModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.simpleTextureModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}async startRendering(){await this.smallCleanup(),await this.initializeVideo(),this.simpleTextureContentInit()}async initializeVideo(){this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.muted=!0,this.video.playsInline=!0,this.video.loop=!0,this.video.preload="auto",this.video.src=encodeURI("https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4"),await this.startAndWaitVideo(this.video)}startAndWaitVideo(e){if(e!==null)return new Promise((r,n)=>{if(e.addEventListener("error",n),"requestVideoFrameCallback"in e)e.requestVideoFrameCallback((i,s)=>{r()});else{const i=s=>{s.currentTime>0?r():requestAnimationFrame(()=>i(s))};i(e)}e.play().catch(n)})}simpleTextureContentInit(){if(this.device===null||this.video===null||this.canvas===null)return;const e=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),r=8,n=8,i=64,s=r*this.numberOfObjects,a=n*this.numberOfObjects,o=i*this.numberOfObjects,l=Ic(),u=l.vertexData.byteLength,c=l.numVertices;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:u,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,l.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:l.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,l.indexData),this.staticBuffer=this.device.createBuffer({label:"Static vertex buffer",size:s,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.changingBuffer=this.device.createBuffer({label:"Changing vertex buffer",size:a,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.storageBuffer=this.device.createBuffer({label:"MVP storage buffer",size:o,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const f=[];{const S=new Float32Array(s/4);for(let y=0;y<this.numberOfObjects;y++){const P=y*(r/4);S.set([de(-.9,.9),de(-.9,.9)],P);const C={scale:de(.2,.6)};f.push(C)}this.perInstanceOffsets=new Float32Array(S),this.device.queue.writeBuffer(this.staticBuffer,0,S)}const d=new Float32Array(a/4),m=new Float32Array(o/4);let h=0,p=0,b=0;const g=1e4,v=S=>{if(this.canvas===null||this.device===null||this.context===null)return;const y=S-h;p+=y,h=S;const P=performance.now(),C=60*Math.PI/180,A=this.canvas.width/this.canvas.height,G=It.perspective(C,A,.1,2e3),D=[0,0,2],F=[0,1,0],U=[0,0,0],O=It.lookAt(D,U,F),N=It.multiply(G,O),_=p/g*2*Math.PI,w=this.canvas.width/this.canvas.height*.5;f.forEach((Ce,Se)=>{const Ye=Se*(n/4),be=Se*(i/4);d.set([Ce.scale,Ce.scale],Ye);const rn=this.perInstanceOffsets[2*Se+0],x=this.perInstanceOffsets[2*Se+1],T=It.create();It.copy(N,T),It.translate(T,[rn,x,0],T),It.rotateX(T,_,T),It.rotateY(T,.2*Math.sin(_),T),It.scale(T,[2*w,1*w,1],T),m.set(T,be)});const ee={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},$=this.device.createCommandEncoder({label:"Render Quad Encoder"}),J=$.beginRenderPass(ee);J.setPipeline(this.simpleTexturePipeline),J.setVertexBuffer(0,this.vertexBuffer),J.setVertexBuffer(1,this.staticBuffer),J.setVertexBuffer(2,this.changingBuffer),J.setIndexBuffer(this.indexBuffer,"uint16");const se=this.device.importExternalTexture({source:this.video}),Te=this.device.createBindGroup({layout:this.simpleTexturePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e},{binding:1,resource:se},{binding:2,resource:{buffer:this.storageBuffer}}]});this.device.queue.writeBuffer(this.changingBuffer,0,d),this.device.queue.writeBuffer(this.storageBuffer,0,m),J.setBindGroup(0,Te),J.drawIndexed(c,this.numberOfObjects),J.end(),this.timestampQuerySet!=null&&($.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&$.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const le=$.finish();this.device.queue.submit([le]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const Ce=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());b=Number(Ce[1]-Ce[0]),this.timestampQuerySet.resultBuffer.unmap()});const Me=performance.now()-P;if(this.infoElement&&this.device){const Ce=`                FPS: ${(1e3/y).toFixed(1)}
                JS Time: ${Me.toFixed(1)} ms
                GPU Time: ${(b/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=Ce,or(1e3/y)}this.animationFrameId=requestAnimationFrame(v)};this.animationFrameId=requestAnimationFrame(v),this.resizeObserver=new ResizeObserver(S=>{for(const y of S){const P=y.contentBoxSize[0].inlineSize,C=y.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(P,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(C,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){await this.smallCleanup(),this.slider&&(this.slider=null),lr()}async smallCleanup(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null),this.video&&(this.video.pause(),this.video.src="",this.video.load(),this.video=null)}addNumberOfObjectsSlider(){const e=Rt();if(e===null)return;const r=document.createElement("label");r.textContent=`Number of Objects: ${this.numberOfObjects}`,r.htmlFor="numObjectsSlider",e.appendChild(r),this.slider=document.createElement("input"),this.slider.type="range",this.slider.id="numObjectsSlider",this.slider.min=Ti.minObjects.toString(),this.slider.max=Ti.maxObjects.toString(),this.slider.value=this.numberOfObjects.toString(),this.slider.step="1",this.slider.style.width="150px",e.appendChild(this.slider),this.slider.addEventListener("input",s=>{this.slider&&(this.newNumberOfObjects=parseInt(this.slider.value,10),r.textContent=`Number of Objects: ${this.newNumberOfObjects}`)});let n=!1;const i=async()=>{if(!n){n=!0;try{this.numberOfObjects=this.newNumberOfObjects,await this.startRendering()}finally{n=!1}}};this.slider.addEventListener("change",i),this.slider.addEventListener("pointerup",i),this.slider.addEventListener("mouseup",i),this.slider.addEventListener("touchend",i)}}const hv=`// ============================== //\r
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
}`,mv=`// ============================== //\r
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
}`,pv=`// ============================== //\r
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
`,gv=`@fragment\r
fn fs(@location(0) color : vec3<f32>) -> @location(0) vec4<f32> {\r
    return vec4<f32>(color, 1.0);\r
}`;class In{bodyA;bodyB;static MAX_ROWS=4;J=[];H=[];C=[];fmin=[];fmax=[];stiffness=[];fracture=[];penalty=[];lambda=[];constructor(e,r){this.bodyA=e,this.bodyB=r;for(let n=0;n<In.MAX_ROWS;++n){this.J.push(E(0,0,0));const i=Qt();this.H.push(i),this.C.push(0),this.fmin.push(-1/0),this.fmax.push(1/0),this.stiffness.push(1/0),this.fracture.push(1/0),this.penalty.push(0),this.lambda.push(0)}}disable(){for(let e=0;e<In.MAX_ROWS;++e)this.stiffness[e]=0,this.penalty[e]=0,this.lambda[e]=0}initialize(){return console.warn("This method should not be called directly."),!0}computeConstraints(e){console.warn("This method should not be called directly.")}computeDerivatives(e){console.warn("This method should not be called directly.")}getRows(){return console.warn("This method should not be called directly."),0}getContactRenders(){return console.warn("This method should not be called directly."),[]}}class bv{width;height;mass;density;friction;position;velocity;prevVelocity;color;staticBody;moment=0;radius=0;lastPosition=E(0,0,0);inertial=E(0,0,0);id=-1;forces=[];constructor(e,r,n,i,s,a){this.width=e[0],this.height=e[1],this.density=n,this.mass=this.width*this.height*this.density,this.staticBody=this.mass===0,this.friction=i,this.position=s,this.velocity=a,this.prevVelocity=a,this.moment=this.mass*et(e,e)/12,this.radius=Math.sqrt(et(e,e))*.5,this.color=r}getScale(){return Z(this.width,this.height)}getDensity(){return this.density}getMass(){return this.mass}getPosition(){return this.position}getPos2(){return Z(this.position[0],this.position[1])}getColor(){return this.color}getVelocity(){return this.velocity}getPrevVelocity(){return this.prevVelocity}getFriction(){return this.friction}isStatic(){return this.staticBody}getMoment(){return this.moment}getRadius(){return this.radius}setVelocity(e){this.staticBody||(this.velocity=e)}getRotationMatrix(){const e=Math.cos(this.position[2]),r=Math.sin(this.position[2]);return hi(e,r,-r,e)}setPosition(e){this.staticBody||(this.position=e)}setColor(e){this.color=e}isConstrainedTo(e){for(let r=0;r<this.forces.length;++r){const n=this.forces[r];if(n.bodyA===this&&n.bodyB===e||n.bodyB===this&&n.bodyA===e)return!0}return!1}}const qe=12,$e=8,fr=4,yv=8,vv=6,al=256,xv=16;class St{gameManager=null;canvas=null;device=null;context=null;presentationFormat=null;observer=null;CubesShaderModule=null;CubesPipeline=null;ContactShaderModule=null;ContactPipeline=null;cubePipelineLayout=null;vertexBuffer=null;indexBuffer=null;staticBuffer=null;changingBuffer=null;contactVertexBuffer=null;contactIndexBuffer=null;contactPositionBuffer=null;timestampQuerySet=null;screenUniformBuffer=null;screenBindGroup=null;changingCpuArray=new Float32Array(al*(qe+$e)/4);numInstances=0;maxInstances=al;nextId=1;idToIndexMap=new Map;indexToId=[];contactPositions=new Float32Array(0);numContacts=0;maxContacts=128;contactIndicesPerInstance=0;static xWorldSize=100;static yWorldSize=60;msaaTexture=null;msaaView=null;sampleCount=4;constructor(e,r){this.canvas=e,this.gameManager=r}async initialize(){if(!this.canvas){this.gameManager?.logWarn("No canvas provided to GameRenderer.");return}if(this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){this.gameManager?.logWarn("Was not able to acquire a WebGPU device.");return}if(this.context=this.canvas.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){this.gameManager?.logWarn("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.observer=new ResizeObserver(e=>{for(const r of e){const n=r.contentBoxSize[0].inlineSize,i=r.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(n,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(i,this.device.limits.maxTextureDimension2D))),this.createMSAATexture()}}),this.observer.observe(this.canvas),this.createMSAATexture(),this.buildBuffers(),this.initializePipeline(),this.initializeContactPipeline()}addInstanceBox(e){return this.addInstance(e.getPosition(),e.getScale(),e.getColor())}addInstance(e,r,n){if(!this.device||!this.staticBuffer||!this.changingBuffer)return-1;let i;this.numInstances>=this.maxInstances&&this.extendBuffers(),i=this.numInstances++,this.device.queue.writeBuffer(this.staticBuffer,i*fr,n);const s=this.nextId++;return this.indexToId[i]=s,this.idToIndexMap.set(s,i),this.updateInstancePosition(s,e),this.updateInstanceScale(s,r),s}removeInstance(e){if(!this.device||!this.staticBuffer||!this.changingBuffer)return;const r=this.idToIndexMap.get(e);if(r===void 0)return;const n=this.numInstances-1;if(r!==n){const i=this.device.createCommandEncoder({label:"Remove instance encoder"});i.copyBufferToBuffer(this.staticBuffer,n*fr,this.staticBuffer,r*fr,fr),this.device.queue.submit([i.finish()]);const s=this.changingCpuArray,a=r*(qe+$e)/4,o=n*(qe+$e)/4;s[a+0]=s[o+0],s[a+1]=s[o+1],s[a+2]=s[o+2],s[a+3]=s[o+3];const l=this.indexToId[n];this.indexToId[r]=l,this.idToIndexMap.set(l,r)}this.idToIndexMap.delete(e),this.indexToId.pop(),this.numInstances--}updateInstanceScale(e,r){const n=this.idToIndexMap.get(e);n!==void 0&&(this.changingCpuArray[n*(qe+$e)/4+3]=r[0],this.changingCpuArray[n*(qe+$e)/4+4]=r[1])}updateInstancePosition(e,r){const n=this.idToIndexMap.get(e);n!==void 0&&(this.changingCpuArray[n*(qe+$e)/4+0]=r[0],this.changingCpuArray[n*(qe+$e)/4+1]=r[1],this.changingCpuArray[n*(qe+$e)/4+2]=r[2])}updateContacts(e){if(this.numContacts=Math.min(e.length,this.maxContacts),this.numContacts!==0){this.contactPositions.length<this.numContacts*2&&(this.contactPositions=new Float32Array(this.maxContacts*2));for(let r=0;r<this.numContacts;++r)this.contactPositions[r*2+0]=e[r].pos[0],this.contactPositions[r*2+1]=e[r].pos[1];this.device&&this.contactPositionBuffer&&this.device.queue.writeBuffer(this.contactPositionBuffer,0,this.contactPositions)}}render(){if(!this.device||!this.context||!this.presentationFormat)return;const e=this.context.getCurrentTexture().createView(),r={label:"basic canvas renderPass",colorAttachments:[{view:this.msaaView,resolveTarget:e,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},n=this.device.createCommandEncoder({label:"canvas render encoder"}),i=n.beginRenderPass(r);if(this.CubesPipeline&&this.changingBuffer){const s=this.numInstances*(qe+$e);this.device.queue.writeBuffer(this.changingBuffer,0,this.changingCpuArray.buffer,0,s),i.setPipeline(this.CubesPipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.staticBuffer),i.setVertexBuffer(2,this.changingBuffer),i.setIndexBuffer(this.indexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(vv,this.numInstances,0,0,0)}else this.gameManager?.logWarn("CubesPipeline or changingBuffer not initialized.");if(this.ContactPipeline&&this.contactVertexBuffer&&this.contactIndexBuffer&&this.contactPositionBuffer?(i.setPipeline(this.ContactPipeline),i.setVertexBuffer(0,this.contactVertexBuffer),i.setVertexBuffer(1,this.contactPositionBuffer),i.setIndexBuffer(this.contactIndexBuffer,"uint16"),i.setBindGroup(0,this.screenBindGroup),i.drawIndexed(this.contactIndicesPerInstance,this.numContacts,0,0,0)):this.gameManager?.logWarn("ContactPipeline or contact buffers not initialized."),i.end(),this.timestampQuerySet!=null&&!im(this.timestampQuerySet,n)){this.gameManager?.logWarn("Failed to resolve timestamp query.");return}this.device.queue.submit([n.finish()])}createMSAATexture(){!this.device||!this.presentationFormat||!this.canvas||(this.msaaTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],sampleCount:this.sampleCount,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView())}buildBuffers(){if(!this.device)return;const e=this.maxInstances*fr,r=this.maxInstances*(qe+$e),n=Ic(),i=n.vertexData.byteLength,s=n.indexData.byteLength;this.vertexBuffer=this.device.createBuffer({label:"Quad vertex buffer",size:i,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,n.vertexData),this.indexBuffer=this.device.createBuffer({label:"Quad index buffer",size:s,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,n.indexData);const a=o2({radius:1,innerRadius:.01});this.contactIndicesPerInstance=a.numVertices,this.contactVertexBuffer=this.device.createBuffer({label:"Contact vertex buffer",size:a.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactVertexBuffer,0,a.vertexData),this.contactIndexBuffer=this.device.createBuffer({label:"Contact index buffer",size:a.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.contactIndexBuffer,0,a.indexData),this.contactPositionBuffer=this.device.createBuffer({label:"Contact position buffer",size:this.maxContacts*2*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.staticBuffer=this.device.createBuffer({label:"Quad static instance buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.changingBuffer=this.device.createBuffer({label:"Quad changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.timestampQuerySet=Yr(this.device,2),this.screenUniformBuffer=this.device.createBuffer({label:"Screen uniform buffer",size:xv,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const o=new Float32Array([St.xWorldSize,St.yWorldSize,0,0]);this.device.queue.writeBuffer(this.screenUniformBuffer,0,o.buffer,o.byteOffset,o.byteLength)}extendBuffers(){if(!this.device||!this.staticBuffer||!this.changingBuffer||!this.indexBuffer)return;this.maxInstances*=2;const e=this.maxInstances*fr,r=this.maxInstances*(qe+$e),n=this.device.createBuffer({label:"Extended static instance buffer",size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"Extended changing instance buffer",size:r,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),s=this.device.createCommandEncoder({label:"Extend buffer encoder"});s.copyBufferToBuffer(this.staticBuffer,0,n,0,this.staticBuffer.size),this.device.queue.submit([s.finish()]);const a=this.changingCpuArray;this.changingCpuArray=new Float32Array(this.maxInstances*(qe+$e)/4),this.changingCpuArray.set(a),this.staticBuffer.destroy(),this.changingBuffer.destroy(),this.staticBuffer=n,this.changingBuffer=i}initializePipeline(){if(!this.device||!this.presentationFormat)return;if(this.CubesShaderModule=Ie(this.device,hv,mv,"Cubes Shader"),!this.CubesShaderModule){this.gameManager?.logWarn("Failed to create shader modules.");return}const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.cubePipelineLayout=this.device.createPipelineLayout({bindGroupLayouts:[e]}),this.CubesPipeline=this.device.createRenderPipeline({label:"Cubes Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.CubesShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:yv,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:fr,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"unorm8x4"}]},{arrayStride:qe+$e,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:qe,format:"float32x2"}]}]},fragment:{module:this.CubesShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},multisample:{count:4}}),!(!this.device||!this.screenUniformBuffer)&&(this.screenBindGroup=this.device.createBindGroup({label:"Screen uniform bind group",layout:e,entries:[{binding:0,resource:{buffer:this.screenUniformBuffer}}]}))}initializeContactPipeline(){if(!(!this.device||!this.presentationFormat||!this.cubePipelineLayout)){if(this.ContactShaderModule=Ie(this.device,pv,gv,"Contact Shader"),!this.ContactShaderModule){this.gameManager?.logWarn("Failed to create contact shader modules.");return}this.ContactPipeline=this.device.createRenderPipeline({label:"Contacts Render Pipeline",layout:this.cubePipelineLayout,vertex:{module:this.ContactShaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]},{arrayStride:8,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x2"}]}]},fragment:{module:this.ContactShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"},multisample:{count:4}})}}}const Bv=5e-4,Av=.01,hr=()=>({inEdge1:0,outEdge1:0,inEdge2:0,outEdge2:0,ID:0}),Tv=t=>{const e=t.inEdge1;t.inEdge1=t.inEdge2,t.inEdge2=e;const r=t.outEdge1;t.outEdge1=t.outEdge2,t.outEdge2=r};function An(t){return{inEdge1:t.inEdge1,outEdge1:t.outEdge1,inEdge2:t.inEdge2,outEdge2:t.outEdge2,ID:t.ID}}function Lc(t){return t.inEdge1&255|(t.outEdge1&255)<<8|(t.inEdge2&255)<<16|(t.outEdge2&255)<<24}function ol(){return{details:hr(),pA:X(),pB:X(),n:X(),JacNormA:ae(),JacNormB:ae(),JacTangA:ae(),JacTangB:ae(),C0:X(),stick:!1}}const ll=(t,e,r,n,i)=>{let s=0;const a=et(r,e[0].v)-n,o=et(r,e[1].v)-n;if(a<=0&&(t[s++]={v:mi(e[0].v),cd:An(e[0].cd)}),o<=0&&(t[s++]={v:mi(e[1].v),cd:An(e[1].cd)}),a*o<0){const l=a/(a-o),u=Eh(X(),e[0].v,e[1].v,l);let c=An(a>0?e[0].cd:e[1].cd);a>0?(c.inEdge1=i,c.inEdge2=0):(c.outEdge1=i,c.outEdge2=0),c.ID=Lc(c),t[s++]={v:u,cd:c}}return s},Yn=(t,e,r,n,i)=>{const s=ei(cn(),n),a=Fe(X(),i,s);Gt(a,a,-1);const o=Z(Math.abs(a[0]),Math.abs(a[1]));o[0]>o[1]?a[0]>0?(t[0].v=Z(e[0],-e[1]),t[0].cd.inEdge2=3,t[0].cd.outEdge2=4,t[1].v=Z(e[0],e[1]),t[1].cd.inEdge2=4,t[1].cd.outEdge2=1):(t[0].v=Z(-e[0],e[1]),t[0].cd.inEdge2=1,t[0].cd.outEdge2=2,t[1].v=Z(-e[0],-e[1]),t[1].cd.inEdge2=2,t[1].cd.outEdge2=3):a[1]>0?(t[0].v=Z(e[0],e[1]),t[0].cd.inEdge2=4,t[0].cd.outEdge2=1,t[1].v=Z(-e[0],e[1]),t[1].cd.inEdge2=1,t[1].cd.outEdge2=2):(t[0].v=Z(-e[0],-e[1]),t[0].cd.inEdge2=2,t[0].cd.outEdge2=3,t[1].v=Z(e[0],-e[1]),t[1].cd.inEdge2=3,t[1].cd.outEdge2=4),t[0].v=Ut(X(),r,Fe(X(),t[0].v,n)),t[1].v=Ut(X(),r,Fe(X(),t[1].v,n))};class La extends In{contacts=[];numContacts=0;oldContacts=[];friction=0;constructor(e,r){super(e,r);for(let n=0;n<In.MAX_ROWS;++n)this.fmax[0]=0,this.fmax[2]=0,this.fmin[0]=-1/0,this.fmin[2]=-1/0}initialize(){this.friction=Math.sqrt(this.bodyA.getFriction()*this.bodyB.getFriction()),this.oldContacts=this.contacts.slice();const e=this.penalty.slice(),r=this.lambda.slice(),n=this.oldContacts.map(s=>s.stick);this.contacts.length=0;const i=La.collide(this.bodyA,this.bodyB,this.contacts);this.numContacts=i;for(let s=0;s<this.contacts.length;++s){this.penalty[s*2+0]=0,this.penalty[s*2+1]=0,this.lambda[s*2+0]=0,this.lambda[s*2+1]=0,this.contacts[s].stick=!1;const a=this.contacts[s].details.ID,o=this.oldContacts.findIndex(l=>l.details.ID===a);o!==-1&&(this.penalty[s*2+0]=e[o*2+0],this.penalty[s*2+1]=e[o*2+1],this.lambda[s*2+0]=r[o*2+0],this.lambda[s*2+1]=r[o*2+1],this.contacts[s].stick=n[o],this.contacts[s].stick&&(this.contacts[s].pA=mi(this.oldContacts[o].pA),this.contacts[s].pB=mi(this.oldContacts[o].pB)))}for(let s=0;s<this.contacts.length;++s){const a=this.contacts[s].n,o=Z(a[1],-a[0]),l=hi(a[0],a[1],o[0],o[1]),u=Fe(X(),this.contacts[s].pA,Tr(this.bodyA.getPosition()[2])),c=Fe(X(),this.contacts[s].pB,Tr(this.bodyB.getPosition()[2]));this.contacts[s].JacNormA=E(l[0],l[2],jn(u,a)),this.contacts[s].JacNormB=E(-l[0],-l[2],-jn(c,a)),this.contacts[s].JacTangA=E(l[1],l[3],jn(u,o)),this.contacts[s].JacTangB=E(-l[1],-l[3],-jn(c,o));const f=At(X(),Ut(X(),this.bodyA.getPos2(),u),Ut(X(),this.bodyB.getPos2(),c));this.contacts[s].C0=Fe(this.contacts[s].C0,f,l),this.contacts[s].C0=Ut(this.contacts[s].C0,this.contacts[s].C0,Z(Bv,0))}return this.contacts.length>0}computeConstraints(e){for(let r=0;r<this.contacts.length;++r){const n=Rr(ae(),this.bodyA.getPosition(),this.bodyA.lastPosition),i=Rr(ae(),this.bodyB.getPosition(),this.bodyB.lastPosition),s=Gt(X(),this.contacts[r].C0,1-e);this.C[r*2+0]=s[0]+pr(this.contacts[r].JacNormA,n)+pr(this.contacts[r].JacNormB,i),this.C[r*2+1]=s[1]+pr(this.contacts[r].JacTangA,n)+pr(this.contacts[r].JacTangB,i);const a=Math.abs(this.lambda[r*2+0])*this.friction;this.fmax[r*2+1]=a,this.fmin[r*2+1]=-a,this.contacts[r].stick=Math.abs(this.lambda[r*2+1])<a&&Math.abs(this.contacts[r].C0[1])<Av}}computeDerivatives(e){for(let r=0;r<this.contacts.length;++r)e===this.bodyA?(this.J[r*2+0]=this.contacts[r].JacNormA,this.J[r*2+1]=this.contacts[r].JacTangA):(this.J[r*2+0]=this.contacts[r].JacNormB,this.J[r*2+1]=this.contacts[r].JacTangB)}static collide(e,r,n){n.length=0;let i=X();const s=Tr(e.getPosition()[2]),a=Tr(r.getPosition()[2]),o=ei(cn(),s),l=ei(cn(),a),u=Gt(X(),e.getScale(),.5),c=Gt(X(),r.getScale(),.5),f=e.getPos2(),d=r.getPos2(),m=e.getRotationMatrix(),h=r.getRotationMatrix(),p=At(X(),d,f),b=Fe(X(),p,o),g=Fe(X(),p,l),v=Z(Math.abs(b[0]),Math.abs(b[1])),S=Z(Math.abs(g[0]),Math.abs(g[1])),y=hh(cn(),o,h),P=hi(Math.abs(y[0]),Math.abs(y[1]),Math.abs(y[2]),Math.abs(y[3])),C=ei(cn(),P),A=At(X(),v,Ut(X(),u,Fe(X(),c,P))),R=At(X(),S,Ut(X(),c,Fe(X(),u,C)));if(A[0]>0||A[1]>0||R[0]>0||R[1]>0)return 0;let M,G;M=1,G=A[0],b[0]>0?i=Z(m[0],m[1]):i=Z(-m[0],-m[1]);const D=.95,F=.01;A[1]>D*G+F*u[1]&&(M=2,G=A[1],b[1]>0?i=Z(m[2],m[3]):i=Z(-m[2],-m[3])),R[0]>D*G+F*c[0]&&(M=3,G=R[0],g[0]>0?i=Z(h[0],h[1]):i=Z(-h[0],-h[1])),R[1]>D*G+F*c[1]&&(M=4,G=R[1],g[1]>0?i=Z(h[2],h[3]):i=Z(-h[2],-h[3]));let U,O;const B=[{cd:hr(),v:X()},{cd:hr(),v:X()}];let N,_,w,K=0,ee=0,$;switch(M){case 1:U=i,N=et(f,U)+u[0],O=Z(m[2],m[3]),$=et(f,O),_=-$+u[1],w=$+u[1],K=3,ee=1,Yn(B,c,d,h,U);break;case 2:U=i,N=et(f,U)+u[1],O=Z(m[0],m[1]),$=et(f,O),_=-$+u[0],w=$+u[0],K=2,ee=4,Yn(B,c,d,h,U);break;case 3:U=Gt(X(),i,-1),N=et(d,U)+c[0],O=Z(h[2],h[3]),$=et(d,O),_=-$+c[1],w=$+c[1],K=3,ee=1,Yn(B,u,f,m,U);break;case 4:U=Gt(X(),i,-1),N=et(d,U)+c[1],O=Z(h[0],h[1]),$=et(d,O),_=-$+c[0],w=$+c[0],K=2,ee=4,Yn(B,u,f,m,U);break}const J=[{cd:hr(),v:X()},{cd:hr(),v:X()}],se=[{cd:hr(),v:X()},{cd:hr(),v:X()}];let Te;if(Te=ll(J,B,Gt(X(),O,-1),_,K),Te<2||(Te=ll(se,J,O,w,ee),Te<2))return 0;n.push(ol(),ol());let le=0;for(let Me=0;Me<2;++Me){const Ce=et(U,se[Me].v)-N;if(Ce<=0){const Se=n[le];Se.n=Gt(X(),i,-1);const Ye=M===3||M===4,be=At(X(),se[Me].v,Gt(X(),U,Ce));if(!Ye)Se.pA=Fe(X(),At(X(),be,f),o),Se.pB=Fe(X(),At(X(),se[Me].v,d),l),Se.details=An(se[Me].cd);else{Se.pA=Fe(X(),At(X(),se[Me].v,f),o),Se.pB=Fe(X(),At(X(),be,d),l);let rn=An(se[Me].cd);Tv(rn),Se.details=rn}if(Se.details.ID=Lc(Se.details),++le,le===2)break}}return n.length=le,le}getContactRenders(){const e=[],r=Tr(this.bodyA.getPosition()[2]),n=Tr(this.bodyB.getPosition()[2]),i=this.bodyA.getPos2(),s=this.bodyB.getPos2();for(let a=0;a<this.numContacts;++a){const o=Ut(X(),i,Fe(X(),this.contacts[a].pA,r));e.push({pos:o});const l=Ut(X(),s,Fe(X(),this.contacts[a].pB,n));e.push({pos:l})}return e}getRows(){return this.contacts.length*2}}const Xn=1,ln=1e9;class Mv{dt=0;gravity=Z(0,-9.81);iterations=0;alpha=.99;beta=1e5;gamma=.99;postStabilization=!1;bodies=[];forces=[];contactsToRender=[];Clear(){this.bodies=[],this.forces=[]}setDefaults(){this.dt=1/60,this.gravity=Z(0,-9.81),this.iterations=10,this.beta=1e5,this.alpha=.99,this.gamma=.99,this.postStabilization=!0}step(e){Math.abs(e-this.dt)>.01&&console.warn(`Warning: Physics timestep changed from ${this.dt} to ${e}. This may cause instability.`),this.contactsToRender=[];for(let n=0;n<this.bodies.length;++n)for(let i=n+1;i<this.bodies.length;++i){const s=this.bodies[n],a=this.bodies[i],o=At(X(),s.getPos2(),a.getPos2()),l=s.getRadius()+a.getRadius();if(Ph(o)<=l*l&&!s.isConstrainedTo(a)){let u=new La(s,a);this.forces.push(u),s.forces.push(u),a.forces.push(u)}}for(let n=0;n<this.forces.length;++n){const i=this.forces[n];if(!i.initialize()){this.forces.splice(n,1),--n;const a=i.bodyA.forces.indexOf(i);a!==-1&&i.bodyA.forces.splice(a,1);const o=i.bodyB.forces.indexOf(i);o!==-1&&i.bodyB.forces.splice(o,1);continue}this.contactsToRender.push(...i.getContactRenders());for(let a=0;a<i.getRows();++a){if(this.postStabilization){let o=i.penalty[a]*this.gamma;o<Xn&&(o=Xn),o>ln&&(o=ln),i.penalty[a]=o}else{i.lambda[a]=i.lambda[a]*this.alpha*this.gamma;let o=i.penalty[a]*this.gamma;o<Xn&&(o=Xn),o>ln&&(o=ln),i.penalty[a]=o}i.penalty[a]=Math.min(i.penalty[a],i.stiffness[a])}}for(let n=0;n<this.bodies.length;++n){const i=this.bodies[n];let s=i.getVelocity()[2];if(s>50&&(s=50),s<-50&&(s=-50),i.setVelocity(E(i.getVelocity()[0],i.getVelocity()[1],s)),i.inertial=Yt(ae(),i.getPosition(),Wt(ae(),i.getVelocity(),this.dt)),i.getMass()!==0){let f=Wt(ae(),E(this.gravity[0],this.gravity[1],0),this.dt*this.dt);i.inertial=Yt(i.inertial,i.inertial,f)}let l=Wt(ae(),Rr(ae(),i.getVelocity(),i.getPrevVelocity()),1/this.dt)[1]*Math.sign(this.gravity[1])/Math.abs(this.gravity[1]);l<0&&(l=0),l>1&&(l=1),i.lastPosition=bh(i.getPosition());const u=Wt(ae(),i.getVelocity(),this.dt),c=Wt(ae(),E(this.gravity[0],this.gravity[1],0),l*this.dt*this.dt);i.setPosition(Yt(ae(),i.getPosition(),Yt(ae(),u,c)))}const r=this.iterations+(this.postStabilization?1:0);for(let n=0;n<r;++n){let i=this.alpha;this.postStabilization&&(i=n<this.iterations?1:0);for(const s of this.bodies){if(s.isStatic())continue;const a=zs(s.getMass(),0,0,0,s.getMass(),0,0,0,s.getMoment()),o=yo(Qt(),a,1/(this.dt*this.dt)),l=Vr(ae(),Rr(ae(),s.getPosition(),s.inertial),o);for(const c of s.forces){c.computeConstraints(i),c.computeDerivatives(s);for(let f=0;f<c.getRows();++f){let d=c.stiffness[f]===1/0?c.lambda[f]:0,m=c.penalty[f]*c.C[f]+d;m<c.fmin[f]&&(m=c.fmin[f]),m>c.fmax[f]&&(m=c.fmax[f]);const h=zs(ti(E(c.H[f][0],c.H[f][3],c.H[f][6])),0,0,0,ti(E(c.H[f][1],c.H[f][4],c.H[f][7])),0,0,0,ti(E(c.H[f][2],c.H[f][5],c.H[f][8])));yo(h,h,Math.abs(m)),Yt(l,l,Wt(ae(),c.J[f],m));const p=Ch(c.J[f],Wt(ae(),c.J[f],c.penalty[f]));bo(o,o,p),bo(o,o,h)}}const u=wh(o,l);s.setPosition(Rr(ae(),s.getPosition(),u))}if(n<this.iterations)for(const s of this.forces){s.computeConstraints(i);for(let a=0;a<s.getRows();++a){let o=s.stiffness[a]===1/0?s.lambda[a]:0;s.lambda[a]=o+s.penalty[a]*s.C[a],s.lambda[a]<s.fmin[a]&&(s.lambda[a]=s.fmin[a]),s.lambda[a]>s.fmax[a]&&(s.lambda[a]=s.fmax[a]),Math.abs(s.lambda[a])>=s.fracture[a]&&s.disable(),s.lambda[a]>s.fmin[a]&&s.lambda[a]<s.fmax[a]&&(s.penalty[a]=Math.min(s.penalty[a]+this.beta*Math.abs(s.C[a]),Math.min(s.stiffness[a],ln)))}}if(n==this.iterations-1){for(const s of this.bodies)if(s.prevVelocity=s.getVelocity(),s.getMass()>0){const a=Rr(ae(),s.getPosition(),s.lastPosition);Wt(a,a,1/this.dt),s.setVelocity(a)}}}}addRigidBox(e){this.bodies.indexOf(e)===-1&&this.bodies.push(e)}removeRigidBox(e){const r=this.bodies.indexOf(e);r!==-1&&this.bodies.splice(r,1)}}class Sv{logging=!0;running=!1;rafID=null;canvas=null;gameRenderer;solver;lastFrameTime=0;constructor(e){this.canvas=e,this.gameRenderer=new St(this.canvas,this),this.solver=new Mv,this.solver.setDefaults()}async initialize(){this.log("Hello World!"),await this.gameRenderer.initialize(),this.initializeWindowEvents(),this.startMainLoop()}async cleanup(){this.log("Goodbye World!"),this.stop()}toggleLogging(){this.logging=!this.logging}stop(){this.running&&(this.running=!1,this.rafID!=null&&(cancelAnimationFrame(this.rafID),this.rafID=null),this.log("Main loop stopped."))}log(e){this.logging&&console.log(`[GameManager] ${e}`)}logWarn(e){this.logging&&console.warn(`[GameManager] ${e}`)}startMainLoop(){if(this.running){this.logWarn("Main loop already running!");return}this.running=!0;const e=E(St.xWorldSize*.5,8,0),r=Z(St.xWorldSize-20,10);this.addRigidBox(e,r,E(0,0,0),new Uint8Array([200,200,200,255]),!0);const n=1/60;let i=0;this.lastFrameTime=performance.now();const s=a=>{if(!this.running)return;const o=(a-this.lastFrameTime)/1e3;for(this.lastFrameTime=a,i+=o;i>=n;)this.solver.step(n),i-=n;for(let l=0;l<this.solver.bodies.length;++l){const u=this.solver.bodies[l],c=u.getPosition(),f=new Float32Array([c[0],c[1],c[2]]);this.gameRenderer.updateInstancePosition(u.id,f)}this.gameRenderer.updateContacts(this.solver.contactsToRender),this.gameRenderer.render(),this.rafID=requestAnimationFrame(s),or(1e3/o)};this.rafID=requestAnimationFrame(s)}addRigidBox(e=Rh(0,0,St.xWorldSize,St.yWorldSize),r=Z(de(2,10),de(2,10)),n=E(0,0,0),i=Oh(),s=!1){const a=new bv(r,i,s?0:1,1,e,n);a.id=this.gameRenderer.addInstanceBox(a),a.id!==-1?this.solver.addRigidBox(a):this.logWarn("Failed to add box instance to renderer.")}initializeWindowEvents(){window.addEventListener("click",e=>{if(!this.canvas)return;const r=this.canvas.getBoundingClientRect(),n=e.clientX-r.left,i=e.clientY-r.top,s=n/this.canvas.width*St.xWorldSize,a=(1-i/this.canvas.height)*St.yWorldSize,o=E(s,a,de(0,Math.PI*2));this.addRigidBox(o)})}}async function Pv(t){const e=new Sv(t);return await e.initialize(),e}const Ev=`// ============================== //\r
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
}`,Cv=`// ============================== //\r
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
}`,wv=`struct Uniforms {\r
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
}`,Rv=`struct Uniforms {\r
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
}`;async function Ov(t){const e=new Dv;return await e.initialize(t),e}const ul=264,cl=128,Iv=0,Gv=20,_v=0,Uv=1e3;let Dv=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Xr(1);light;normalObjects;rayTracerObjects;useRaytracing=!0;rayTracingMode=0;useRaytracingCheckBox=null;useRaytracingLabel=null;rayTracingModeSelect=null;intensitySlider=null;numBouncesSlider=null;additionalInfo=null;constructor(){Qr(this.camera,278,500,-700),vr(this.camera,0,-.3),Zr(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={},this.light={position:new Float32Array([276,450,1]),color:new Float32Array([.9,.9,1]),intensity:5,bounces:10}}initializeUtils(){const e=Rt();if(!e)return;this.useRaytracingCheckBox=document.createElement("input"),this.useRaytracingCheckBox.type="checkbox",this.useRaytracingCheckBox.checked=this.useRaytracing,this.useRaytracingCheckBox.id="useRaytracingCheckbox",this.useRaytracingCheckBox.tabIndex=-1,this.useRaytracingCheckBox.addEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.useRaytracingLabel=document.createElement("label"),this.useRaytracingLabel.htmlFor="useRaytracingCheckbox",this.useRaytracingLabel.textContent=" Use Raytracing",e.appendChild(this.useRaytracingCheckBox),e.appendChild(this.useRaytracingLabel),this.rayTracingModeSelect=document.createElement("select"),this.rayTracingModeSelect.style.color="black",this.rayTracingModeSelect.tabIndex=-1,["Normal Shading","Normals","Distance","Reflectance Debug","Ray Directions"].forEach((s,a)=>{const o=document.createElement("option");o.value=a.toString(),o.text=s,this.rayTracingModeSelect.appendChild(o)}),this.rayTracingModeSelect.value=this.rayTracingMode.toString(),this.rayTracingModeSelect.addEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),e.appendChild(document.createElement("br")),e.appendChild(this.rayTracingModeSelect),this.intensitySlider=document.createElement("input"),this.intensitySlider.type="range",this.intensitySlider.min=Iv.toString(),this.intensitySlider.max=Gv.toString(),this.intensitySlider.step="0.5",this.intensitySlider.value=this.light.intensity.toString(),this.intensitySlider.tabIndex=-1,this.intensitySlider.addEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)});const n=document.createElement("label");n.htmlFor="intensitySlider",n.textContent=" Light Intensity",e.appendChild(document.createElement("br")),e.appendChild(this.intensitySlider),e.appendChild(n),this.numBouncesSlider=document.createElement("input"),this.numBouncesSlider.type="range",this.numBouncesSlider.min=_v.toString(),this.numBouncesSlider.max=Uv.toString(),this.numBouncesSlider.step="1",this.numBouncesSlider.value=this.light.bounces.toString(),this.numBouncesSlider.tabIndex=-1,this.numBouncesSlider.addEventListener("input",()=>{this.light.bounces=parseInt(this.numBouncesSlider.value)});const i=document.createElement("label");i.htmlFor="numBouncesSlider",i.textContent=" Number of Bounces",e.appendChild(document.createElement("br")),e.appendChild(this.numBouncesSlider),e.appendChild(i)}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Ie(this.device,Ev,Cv,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Ie(this.device,wv,Rv,"Normal Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}initializeBuffers(){if(this.device===null)return;const e=u2();this.additionalInfo=e.additionalInfo,this.normalObjects.positionBuffer=this.device.createBuffer({label:"Normal Position Buffer",size:e.vertexData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.positionBuffer,0,e.vertexData),this.normalObjects.indexBuffer=this.device.createBuffer({label:"Normal Index Buffer",size:e.indexData.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.indexBuffer,0,e.indexData),this.normalObjects.numIndices=e.indexData.length,this.normalObjects.normalBuffer=this.device.createBuffer({label:"Normal Normal Buffer",size:e.normalData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,0,e.normalData),this.normalObjects.uvBuffer=this.device.createBuffer({label:"Normal UV Buffer",size:e.uvData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.uvBuffer,0,e.uvData),this.normalObjects.colorBuffer=this.device.createBuffer({label:"Normal Color Buffer",size:e.colorData.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.colorBuffer,0,e.colorData),this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:ul,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]}),this.rayTracerObjects.triangleStorageBuffer=this.device.createBuffer({label:"Ray Tracer Triangle Storage Buffer",size:e.vertexData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,0,e.vertexData),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:e.normalData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,e.normalData),this.rayTracerObjects.colorStorageBuffer=this.device.createBuffer({label:"Ray Tracer Color Storage Buffer",size:e.colorData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.colorStorageBuffer,0,e.colorData);var r=new Uint32Array(e.indexData.length);for(let n=0;n<e.indexData.length;n++)r[n]=e.indexData[n];this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,r),this.rayTracerObjects.reflectanceStorageBuffer=this.device.createBuffer({label:"Ray Tracer Reflectance Storage Buffer",size:e.reflectanceData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.reflectanceStorageBuffer,0,e.reflectanceData),this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:cl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.triangleStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.colorStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.reflectanceStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;he(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&en(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&he(this.camera,-1,0),this.keysPressed.has("arrowright")&&he(this.camera,1,0),this.keysPressed.has("arrowup")&&he(this.camera,0,1),this.keysPressed.has("arrowdown")&&he(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(cl),r=new Float32Array(e),n=new Uint32Array(e);r.set(tn(this.camera),0),r.set(this.camera.position,16),r.set(this.light.position,20),r.set(this.light.color,24),n[28]=this.rayTracingMode,r[29]=this.light.intensity,n[30]=this.light.bounces,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new Float32Array(ul/4);let r=0;const n=mr();Ou(n),e.set(n,r),r+=16,e.set(this.camera.viewMatrix,r),r+=16,e.set(this.camera.projectionMatrix,r),r+=16,e.set(this.light.position,r),r+=4,e.set(this.light.color,r),r+=4,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){const e=performance.now()*.001,r=200,n=250,i=276,s=278.5,a=450;if(this.light.position[0]=i+r*Math.cos(e),this.light.position[1]=a,this.light.position[2]=s+n*Math.sin(e),this.additionalInfo&&this.additionalInfo.cubeVertexStart!==void 0){const o=this.additionalInfo.cubeCenter,u=Gu(0,e,0),c=this.additionalInfo.cubeVertexStart,f=this.additionalInfo.cubeVertexCount,d=this.additionalInfo.cubeVertexInfo,m=new Float32Array(f*3),h=this.additionalInfo.cubeNormalsInfo,p=new Float32Array(f*3);for(let b=0;b<f;b++){const g=b*3,v=d[g]-o[0],S=d[g+1]-o[1],y=d[g+2]-o[2];m[g]=u[0]*v+u[1]*S+u[2]*y+o[0],m[g+1]=u[3]*v+u[4]*S+u[5]*y+o[1],m[g+2]=u[6]*v+u[7]*S+u[8]*y+o[2];const P=h[g],C=h[g+1],A=h[g+2];p[g]=u[0]*P+u[1]*C+u[2]*A,p[g+1]=u[3]*P+u[4]*C+u[5]*A,p[g+2]=u[6]*P+u[7]*C+u[8]*A}this.useRaytracing?(this.device.queue.writeBuffer(this.rayTracerObjects.triangleStorageBuffer,c*3*4,m),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,c*3*4,p)):(this.device.queue.writeBuffer(this.normalObjects.positionBuffer,c*3*4,m),this.device.queue.writeBuffer(this.normalObjects.normalBuffer,c*3*4,p))}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const a=performance.now();this.handleInput(),this.animate(),this.updateUniforms();const o=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:.3,g:.3,b:.3,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=c.beginRenderPass(u);this.useRaytracing?(f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.draw(6)):(f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup),f.setVertexBuffer(0,this.normalObjects.positionBuffer),f.setVertexBuffer(1,this.normalObjects.normalBuffer),f.setVertexBuffer(2,this.normalObjects.uvBuffer),f.setVertexBuffer(3,this.normalObjects.colorBuffer),f.setIndexBuffer(this.normalObjects.indexBuffer,"uint16"),f.drawIndexed(this.normalObjects.numIndices)),f.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const d=c.finish();this.device.queue.submit([d]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const h=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(h[1]-h[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-a;if(this.infoElement&&this.device){const h=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=h,or(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const a=s.contentBoxSize[0].inlineSize,o=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),$r(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.useRaytracingCheckBox&&this.useRaytracingCheckBox.removeEventListener("change",()=>{this.useRaytracing=this.useRaytracingCheckBox.checked}),this.intensitySlider&&this.intensitySlider.removeEventListener("input",()=>{this.light.intensity=parseFloat(this.intensitySlider.value)}),this.rayTracingModeSelect&&this.rayTracingModeSelect.removeEventListener("change",()=>{this.rayTracingMode=parseInt(this.rayTracingModeSelect.value)}),lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const Fv=`struct Uniforms {\r
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
}`,Lv=`struct Uniforms {\r
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
}`,fl=264;async function Nv(t){const e=new Vv;return await e.initialize(t),e}class Vv{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();shaderModule=null;pipelineLayout=null;renderPipeline=null;bindGroupLayout=null;bindGroup=null;facesTopologyInformation=[];spheresTopologyInformation=[];currentSphereOrders=[];uniformBuffer=null;vertexBuffer=null;indexBuffer=null;colorBuffer=null;normalBuffer=null;uvBuffer=null;totalIndices=0;depthTexture=null;keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Xr(1);cameraMoved=!0;light;wireFrameLabel=null;wireFrameCheckbox=null;wireFrame=!1;cullMode="back";cullModeSelect=null;useSortingLabel=null;useSortingCheckbox=null;useSorting=!1;constructor(){this.device=null,Qr(this.camera,300,200,300),vr(this.camera,9*Math.PI/12,-Math.PI/6),Zr(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.light={position:new Float32Array([380,400,220]),color:new Float32Array([1,1,1]),intensity:1}}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),this.initializeBuffers(),this.initializeInputHandlers(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.shaderModule=Ie(this.device,Fv,Lv,"Transparency Shader Module"))}initializePipelines(){if(this.device===null||this.presentationFormat===null)return;this.bindGroupLayout=this.device.createBindGroupLayout({label:"Transparency Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.pipelineLayout=this.device.createPipelineLayout({label:"Transparency Pipeline Layout",bindGroupLayouts:[this.bindGroupLayout]}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shaderModule!==null&&(this.renderPipeline=this.device.createRenderPipeline({label:"Transparency Pipeline",layout:this.pipelineLayout,vertex:{module:this.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]},{arrayStride:12,attributes:[{shaderLocation:3,offset:0,format:"float32x3"}]}]},fragment:{module:this.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:this.wireFrame?"line-list":"triangle-list",cullMode:this.cullMode.toLowerCase()},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}));const e=2;if(this.device.features.has("timestamp-query")){const r=this.device.createQuerySet({label:"timestamp query set",type:"timestamp",count:e}),n=this.device.createBuffer({label:"timestamp resolve buffer",size:e*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:"timestamp result buffer",size:e*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});this.timestampQuerySet={querySet:r,resolveBuffer:n,resultBuffer:i}}}initializeUtils(){const e=Rt();if(!e)return;this.wireFrameCheckbox=document.createElement("input"),this.wireFrameCheckbox.type="checkbox",this.wireFrameCheckbox.checked=this.wireFrame,this.wireFrameCheckbox.id="wireframe-checkbox",this.wireFrameCheckbox.addEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.wireFrameLabel=document.createElement("label"),this.wireFrameLabel.htmlFor="wireframe-checkbox",this.wireFrameLabel.textContent=" Wireframe Mode ",e.appendChild(this.wireFrameCheckbox),e.appendChild(this.wireFrameLabel),e.appendChild(document.createElement("br")),this.cullModeSelect=document.createElement("select"),this.cullModeSelect.style.color="black",["none","front","back"].forEach(n=>{const i=document.createElement("option");i.value=n,i.text=n.charAt(0).toUpperCase()+n.slice(1),this.cullModeSelect.appendChild(i)}),this.cullModeSelect.value=this.cullMode,this.cullModeSelect.addEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),e.appendChild(this.cullModeSelect),this.useSortingCheckbox=document.createElement("input"),this.useSortingCheckbox.type="checkbox",this.useSortingCheckbox.checked=this.useSorting,this.useSortingCheckbox.id="use-sorting-checkbox",this.useSortingCheckbox.addEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),this.useSortingLabel=document.createElement("label"),this.useSortingLabel.htmlFor="use-sorting-checkbox",this.useSortingLabel.textContent=" Use Sorting (correct transparency) ",e.appendChild(document.createElement("br")),e.appendChild(this.useSortingCheckbox),e.appendChild(this.useSortingLabel)}initializeScene(){const e=ws({translation:E(0,0,-100),rotation:E(0,0,0),scale:E(200,200,1)},[.8,.8,.7]);e.additionalInfo={order:0,numVertices:e.vertexData.length/3},this.facesTopologyInformation.push(e);const r=ws({translation:E(-100,0,0),rotation:E(0,-Math.PI/2,0),scale:E(200,200,1)},[.8,.8,.7]);r.additionalInfo={order:1,numVertices:r.vertexData.length/3},this.facesTopologyInformation.push(r);const n=ws({translation:E(0,-100,0),rotation:E(Math.PI/2,0,0),scale:E(200,200,1)},[.8,.8,.7]);n.additionalInfo={order:2,numVertices:n.vertexData.length/3},this.facesTopologyInformation.push(n);const i=25,s=32;let a=3,o=0;const l=-100+i;for(let d=-1;d<=1;d++)for(let m=-1;m<=1;m++){const h=[d*i*2,l,m*i*2],p=Rs(h,i,[Math.random(),Math.random(),Math.random()],s,s);p.additionalInfo={order:a++,numVertices:p.vertexData.length/3,id:o++},this.spheresTopologyInformation.push(p),this.currentSphereOrders.push(p.additionalInfo.id)}const u=l+i*Math.sqrt(2);for(let d=0;d<=1;d++)for(let m=0;m<=1;m++){const h=[(d-.5)*i*2,u,(m-.5)*i*2],p=Rs(h,i,[Math.random(),Math.random(),Math.random()],s,s);p.additionalInfo={order:a++,numVertices:p.vertexData.length/3,id:o++},this.spheresTopologyInformation.push(p),this.currentSphereOrders.push(p.additionalInfo.id)}const c=[0,u+i*Math.sqrt(2),0],f=Rs(c,i,[Math.random(),Math.random(),Math.random()],s,s);f.additionalInfo={order:a++,numVertices:f.vertexData.length/3,id:o++},this.spheresTopologyInformation.push(f),this.currentSphereOrders.push(f.additionalInfo.id)}initializeBuffers(){if(this.device===null)return;const e=this.device.queue;this.initializeScene();const r=[],n=[],i=[],s=[],a=[];for(let h=0;h<this.facesTopologyInformation.length;h++){const p=this.facesTopologyInformation[h];p.additionalInfo&&(r.push(p.vertexData),n.push(p.indexData),i.push(p.normalData),s.push(p.colorData),a.push(p.uvData))}const o=this.currentSphereOrders.slice();for(let h=o.length-1;h>0;h--){const p=Math.floor(Math.random()*(h+1));[o[h],o[p]]=[o[p],o[h]]}for(let h=0;h<this.spheresTopologyInformation.length;h++){const p=this.spheresTopologyInformation[o[h]];p.additionalInfo&&(r.push(p.vertexData),n.push(p.indexData),i.push(p.normalData),s.push(p.colorData),a.push(p.uvData))}const l=r.map(h=>h.length/3),u=qt(r),c=vo(n,l),f=qt(i),d=qt(s),m=qt(a);this.totalIndices=c.length,this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:fl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.vertexBuffer=this.device.createBuffer({label:"Vertex Buffer",size:u.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.vertexBuffer,0,u),this.normalBuffer=this.device.createBuffer({label:"Normal Buffer",size:f.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.normalBuffer,0,f),this.colorBuffer=this.device.createBuffer({label:"Color Buffer",size:d.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.colorBuffer,0,d),this.uvBuffer=this.device.createBuffer({label:"UV Buffer",size:m.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.uvBuffer,0,m),this.indexBuffer=this.device.createBuffer({label:"Index Buffer",size:c.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.writeBuffer(this.indexBuffer,0,c),this.bindGroup=this.device.createBindGroup({label:"Transparency Bind Group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=()=>{this.isMouseDown=!1};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;he(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("shift")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&(en(this.camera,-n,e,r),this.cameraMoved=!0),this.keysPressed.has("arrowleft")&&he(this.camera,-1,0),this.keysPressed.has("arrowright")&&he(this.camera,1,0),this.keysPressed.has("arrowup")&&he(this.camera,0,1),this.keysPressed.has("arrowdown")&&he(this.camera,0,-1),(this.keysPressed.has("arrowleft")||this.keysPressed.has("arrowright")||this.keysPressed.has("arrowup")||this.keysPressed.has("arrowdown"))&&(this.cameraMoved=!0)}updateUniforms(){if(this.device===null||this.uniformBuffer===null)return;const e=new ArrayBuffer(fl),r=new Float32Array(e),n=mr();Ou(n),r.set(n,0),r.set(this.camera.viewMatrix,16),r.set(this.camera.projectionMatrix,32),r.set(this.light.position,48),r.set(this.light.color,52),r[55]=this.light.intensity,this.device.queue.writeBuffer(this.uniformBuffer,0,e)}async startRendering(){await this.smallCleanup(),this.initializeUtils(),this.startMainLoop()}sortScene(){if(!this.useSorting)return;this.cameraMoved=!1;const e=this.camera.position,r=[];for(let h=0;h<this.spheresTopologyInformation.length;h++){const b=this.spheresTopologyInformation[h].transform.translation,g=b[0]-e[0],v=b[1]-e[1],S=b[2]-e[2],y=Math.sqrt(g*g+v*v+S*S),P=this.spheresTopologyInformation[h].additionalInfo.id;r.push({id:P,distance:y})}r.sort((h,p)=>p.distance-h.distance),this.currentSphereOrders=r.map(h=>h.id);const n=[],i=[],s=[],a=[],o=[];for(let h=0;h<this.facesTopologyInformation.length;h++){const p=this.facesTopologyInformation[h];p.additionalInfo&&(n.push(p.vertexData),i.push(p.indexData),s.push(p.normalData),a.push(p.colorData),o.push(p.uvData))}for(let h=0;h<this.currentSphereOrders.length;h++){const p=this.currentSphereOrders[h],b=this.spheresTopologyInformation.find(g=>g.additionalInfo.id===p);b&&(n.push(b.vertexData),i.push(b.indexData),s.push(b.normalData),a.push(b.colorData),o.push(b.uvData))}const l=n.map(h=>h.length/3),u=qt(n),c=vo(i,l),f=qt(s),d=qt(a),m=qt(o);this.device.queue.writeBuffer(this.vertexBuffer,0,u),this.device.queue.writeBuffer(this.indexBuffer,0,c),this.device.queue.writeBuffer(this.normalBuffer,0,f),this.device.queue.writeBuffer(this.colorBuffer,0,d),this.device.queue.writeBuffer(this.uvBuffer,0,m)}startMainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const a=performance.now();this.handleInput(),this.updateUniforms(),this.cameraMoved&&this.sortScene();const o=this.context.getCurrentTexture().createView(),l={view:this.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:.05,g:.05,b:.05,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=c.beginRenderPass(u);f.setPipeline(this.renderPipeline),f.setBindGroup(0,this.bindGroup),f.setVertexBuffer(0,this.vertexBuffer),f.setVertexBuffer(1,this.normalBuffer),f.setVertexBuffer(2,this.uvBuffer),f.setVertexBuffer(3,this.colorBuffer),f.setIndexBuffer(this.indexBuffer,"uint16"),f.drawIndexed(this.totalIndices,1,0,0,0),f.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const d=c.finish();this.device.queue.submit([d]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const h=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(h[1]-h[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-a;if(this.infoElement&&this.device){const h=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=h,or(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const a=s.contentBoxSize[0].inlineSize,o=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),$r(this.camera,this.canvas.width/this.canvas.height),this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.cullModeSelect&&this.cullModeSelect.removeEventListener("change",()=>{this.cullMode=this.cullModeSelect.value,this.initializePipelines()}),this.wireFrameCheckbox&&this.wireFrameCheckbox.removeEventListener("change",()=>{this.wireFrame=this.wireFrameCheckbox.checked,this.initializePipelines()}),this.useSortingCheckbox&&this.useSortingCheckbox.removeEventListener("change",()=>{this.useSorting=this.useSortingCheckbox.checked}),lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const Hv=`// ============================== //\r
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
}`,kv=`// ============================== //\r
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
}`,jv=`struct SpotLight\r
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
}`,zv=`struct Material {\r
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
}`;var ne=(t=>(t[t.Albedo=0]="Albedo",t[t.Metalness=1]="Metalness",t[t.Roughness=2]="Roughness",t[t.Normal=3]="Normal",t))(ne||{});function Wi(t){return new Promise((e,r)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=i=>r(i),n.src=t})}function qi(t,e,r="texture"){if(e.width<=0||e.height<=0)return console.warn(`Image has invalid dimensions (${e.width}x${e.height}). Using placeholder texture instead.`),we(t);const n=t.createTexture({label:r,size:{width:e.width,height:e.height,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return t.queue.copyExternalImageToTexture({source:e},{texture:n},[e.width,e.height]),n}function Ki(t,e,r){const n=document.createElement("canvas");n.width=e,n.height=r;const i=n.getContext("2d");return i?(i.drawImage(t,0,0,e,r),n):(console.error("Failed to get 2D context for image resizing."),n)}function we(t,e=256,r=32){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),s=e/r;for(let o=0;o<r;o++)for(let l=0;l<r;l++)i.fillStyle=(l+o)%2===0?"#FF00FF":"#000000",i.fillRect(l*s,o*s,s,s);const a=t.createTexture({label:"placeholder-texture",size:[e,e],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return t.queue.copyExternalImageToTexture({source:n},{texture:a},[e,e]),a}function nr(t=256,e=32){const r=document.createElement("canvas");r.width=t,r.height=t;const n=r.getContext("2d"),i=t/e;for(let s=0;s<e;s++)for(let a=0;a<e;a++)n.fillStyle=(a+s)%2===0?"#FF00FF":"#000000",n.fillRect(a*i,s*i,i,i);return r}const Wv="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg";async function qv(t){const e=new Kv;return await e.initialize(t),e}const dl=304,hl=288;let Kv=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Xr(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;sphereResolution=8;spheresInfo;activeContextMenu=null;constructor(){Qr(this.camera,278,500,-700),vr(this.camera,0,-.3),Zr(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={position:E(500,500,0),intensity:1e3,direction:E(-.5,-.9,1),coneAngle:Math.PI/6,color:E(.85,.1,.1),enabled:!0};this.lights.push(e);const r={position:E(50,500,0),intensity:1e3,direction:E(.5,-.9,1),coneAngle:Math.PI/6,color:E(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:E(275,255,0),intensity:1500,direction:E(0,0,1),coneAngle:Math.PI/6,color:E(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const e=Rt();e&&(gt("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),lt("Sphere Resolution",this.sphereResolution,8,64,1,e,r=>{this.sphereResolution=r,this.startRendering()}),this.lights.forEach((r,n)=>{const i=s=>{s.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const a={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=va(a,this.lights[n],`Edit Light ${n+1}`,o=>{this.lights[n]=o},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Wr(`Edit Light ${n+1}`,e,i)}),e.appendChild(document.createElement("br")),lt("Constant (ac)",this.a_c,0,2,.01,e,r=>{this.a_c=r}),e.appendChild(document.createElement("br")),lt("Linear (al)",this.a_l,0,.5,.001,e,r=>{this.a_l=r}),e.appendChild(document.createElement("br")),lt("Quadratic (aq)",this.a_q,0,.1,1e-4,e,r=>{this.a_q=r}))}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Ie(this.device,Hv,kv,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Ie(this.device,jv,zv,"Normal Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}})),this.timestampQuerySet=Yr(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}initializeBuffers(){if(this.device===null)return;const e=we(this.device),r=this.spheresInfo?.sphereMaterials||[],n=c2(r,this.sphereResolution);this.normalObjects.sceneInformation=n,this.spheresInfo=n.additionalInfo;const i=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let A=0;A<i;A++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+A,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[A],0,n.meshes[A].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+A,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[A],0,n.meshes[A].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+A,size:pt*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const R=n.meshes[A].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[A],0,R),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+A,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[A]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[A].Material.albedoGPUTexture?n.meshes[A].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[A].Material.metalnessGPUTexture?n.meshes[A].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[A].Material.roughnessGPUTexture?n.meshes[A].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[A].Material.normalGPUTexture?n.meshes[A].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[A]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[A]}}]}));const M=n.meshes[A].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+A,size:M.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[A],0,M);const G=n.meshes[A].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+A,size:G.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[A],0,G);const D=n.meshes[A].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+A,size:D.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[A],0,D);const F=n.meshes[A].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+A,size:F.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[A],0,F)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:dl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=[],a=[],o=[],l=[],u=[];let c=0;for(let A=0;A<i;A++){let R=n.meshes[A];s.push(...R.getTransformedVertexData()),a.push(...R.getTransformedNormalData()),o.push(...R.getUVData());for(let M of R.getIndexData32())l.push(M+c);c+=R.getNumVertices();for(let M=0;M<R.getNumTriangles();M++)u.push(A)}const f=new Float32Array(s),d=new Float32Array(a),m=new Float32Array(o),h=new Uint32Array(l),p=new Uint32Array(u);this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:hl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:f.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,f),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,d),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:m.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,m),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,h),this.rayTracerObjects.materialIndexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Material Index Storage Buffer",size:p.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialIndexStorageBuffer,0,p),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.materialIndexStorageBuffer}}]});const b=n.meshes.map(A=>A.Material),g=_i(b);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:g.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,g);const v=4,S=3,y=256,P=256;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[y,P,v*S],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const C=nr(256,32);for(let A=0;A<S;A++){const R=this.spheresInfo?.sphereMaterials[A].albedoImage?this.spheresInfo.sphereMaterials[A].albedoImage:C,M=this.spheresInfo?.sphereMaterials[A].metalnessImage?this.spheresInfo.sphereMaterials[A].metalnessImage:C,G=this.spheresInfo?.sphereMaterials[A].roughnessImage?this.spheresInfo.sphereMaterials[A].roughnessImage:C,D=this.spheresInfo?.sphereMaterials[A].normalImage?this.spheresInfo.sphereMaterials[A].normalImage:C;this.device.queue.copyExternalImageToTexture({source:R},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*v]},[y,P]),this.device.queue.copyExternalImageToTexture({source:M},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*v+1]},[y,P]),this.device.queue.copyExternalImageToTexture({source:G},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*v+2]},[y,P]),this.device.queue.copyExternalImageToTexture({source:D},{texture:this.rayTracerObjects.textureArray,origin:[0,0,A*v+3]},[y,P])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnSpheres(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;he(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&en(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&he(this.camera,-1,0),this.keysPressed.has("arrowright")&&he(this.camera,1,0),this.keysPressed.has("arrowup")&&he(this.camera,0,1),this.keysPressed.has("arrowdown")&&he(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],ne.Albedo,Wv),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],ne.Albedo,"textures/herringbone_brick_03_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],ne.Albedo,"textures/oak_veneer_01_diff_1k.jpg"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],ne.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],ne.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],ne.Metalness,"textures/metalness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[2],ne.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[1],ne.Roughness,"textures/roughness.png"),this.fetchTextureForMaterial(this.spheresInfo?.sphereMaterials[0],ne.Roughness,"textures/roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(hl),r=new Float32Array(e),n=new Uint32Array(e);r.set(tn(this.camera),0),r.set(this.camera.position,16),n[19]=0,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],a=24+i*12;r.set(s.position,a),r[a+3]=s.intensity,r.set(s.direction,a+4),r[a+7]=s.coneAngle,r.set(s.color,a+8),r[a+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new ArrayBuffer(dl),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const i=this.lights[n],s=40+n*12;r.set(i.position,s),r[s+3]=i.intensity,r.set(i.direction,s+4),r[s+7]=i.coneAngle,r.set(i.color,s+8),r[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const a=performance.now();this.handleInput(),this.updateUniforms();const o=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=c.beginRenderPass(u);if(this.useRaytracing)f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.setBindGroup(1,this.rayTracerObjects.materialBindGroup),f.draw(6);else{f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let h=0;h<this.normalObjects.sceneInformation.meshes.length;h++)f.setBindGroup(1,this.normalObjects.materialBindGroups[h]),f.setVertexBuffer(0,this.normalObjects.positionBuffers[h]),f.setVertexBuffer(1,this.normalObjects.normalBuffers[h]),f.setVertexBuffer(2,this.normalObjects.uvBuffers[h]),f.setIndexBuffer(this.normalObjects.indexBuffers[h],"uint16"),f.drawIndexed(this.normalObjects.indexBuffers[h].size/2,1,0,0,0)}f.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const d=c.finish();this.device.queue.submit([d]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const h=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(h[1]-h[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-a;if(this.infoElement&&this.device){const h=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=h,or(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const a=s.contentBoxSize[0].inlineSize,o=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),$r(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeSphereMaterial(e,r){if(e<0||e>=(this.spheresInfo?.sphereMaterialIndices.length||0))return;const n=r.name,i=this.normalObjects.sceneInformation.meshes.findIndex(u=>u.Material.name===n)||-1;if(i===-1)return;this.spheresInfo.sphereMaterials[e]=r,this.normalObjects.sceneInformation.meshes[i].Material=r;const s=this.spheresInfo.sphereMaterialIndices[e],a=Un(r);let o=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(o,0,a);const l=s*pt*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,l,a)}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(a=>a.Material.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():we(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():we(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():we(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():we(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=i;var s=e.textureIndex;for(let a=0;a<4;a++){const o=(()=>{switch(a){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||nr();this.device.queue.copyExternalImageToTexture({source:o},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+a]},[256,256])}}rayCastOnSpheres(e,r){if(this.canvas===null||this.camera===null||this.spheresInfo===null)return-1;const n=this.spheresInfo.sphereTransforms,i=this.canvas.getBoundingClientRect(),s=e-i.left,a=r-i.top,o=this.canvas.width/i.width,l=this.canvas.height/i.height,u=2*s*o/this.canvas.width-1,c=1-2*a*l/this.canvas.height,f=Fi(this.camera,u,c);let d=-1,m=Number.POSITIVE_INFINITY;for(let h=0;h<n.length;h++){const p=n[h],b=p.translation,g=p.scale[0],v=bm(f,b,g);v<=0||v<m&&(m=v,d=h)}return d}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.spheresInfo?.sphereMaterials?.[e];if(!i)return;this.activeContextMenu=Di({x:r,y:n},i,a=>{this.changeSphereMaterial(e,a)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=a=>{this.activeContextMenu&&!this.activeContextMenu.contains(a.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e)return;Wi(n).then(s=>{const a=Ki(s,256,256),o=qi(this.device,a);switch(r){case ne.Albedo:e.albedoTexture=a,e.albedoGPUTexture=o;break;case ne.Metalness:e.metalnessTexture=a,e.metalnessGPUTexture=o;break;case ne.Roughness:e.roughnessTexture=a,e.roughnessGPUTexture=o;break;case ne.Normal:e.normalTexture=a,e.normalGPUTexture=o;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ne[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const Jv=`// ============================== //\r
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
}`,Yv=`// ============================== //\r
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
}`,Xv=`struct SpotLight\r
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
`,Qv=`struct Material {\r
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
}`,$v=`struct SpotLight\r
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
}`,Zv=`struct VertexOutput {\r
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
}`;async function ex(t){const e=new tx;return await e.initialize(t),e}const ml=304,pl=304,gl=96;let tx=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Xr(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;useRaytracing=!0;meshesInfo;activeContextMenu=null;showBVH=!1;bvhDepth=1/0;rayTracerMode=0;numBounces=3;constructor(){Qr(this.camera,278,500,-700),vr(this.camera,0,-.3),Zr(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={position:E(500,500,0),intensity:5e3,direction:E(-.5,-.9,1),coneAngle:Math.PI/6,color:E(.85,.1,.1),enabled:!0};this.lights.push(e);const r={position:E(50,500,0),intensity:5e3,direction:E(.5,-.9,1),coneAngle:Math.PI/6,color:E(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:E(275,255,0),intensity:1e4,direction:E(0,0,1),coneAngle:Math.PI/3,color:E(.9,.9,.9),enabled:!0};this.lights.push(n)}initializeUtils(){const e=Rt();e&&(gt("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),lt("Number of Bounces",this.numBounces,0,20,1,e,r=>{this.numBounces=r}),e.appendChild(document.createElement("br")),this.lights.forEach((r,n)=>{const i=s=>{s.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const a={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=va(a,this.lights[n],`Edit Light ${n+1}`,o=>{this.lights[n]=o},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Wr(`Edit Light ${n+1}`,e,i)}),e.appendChild(document.createElement("br")),gt("Show BVH",this.showBVH,e,r=>{this.showBVH=r,this.rayTracerMode=r?1:0}),e.appendChild(document.createElement("br")),lt("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,e,r=>{this.bvhDepth=r===32?1/0:r,this.rebuildBVHBuffer()}))}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Ie(this.device,Jv,Yv,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Ie(this.device,Xv,Qv,"Normal Shader Module"),this.normalObjects.bvhShaderModule=Ie(this.device,$v,Zv,"BVH Draw Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.normalObjects.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.normalObjects.bvhDrawPipelineLayout,vertex:{module:this.normalObjects.bvhShaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.bvhShaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=Yr(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}async initializeBuffers(){if(this.device===null)return;const e=we(this.device,1024,32),r=this.meshesInfo?.meshMaterials||[],n=await f2(r);this.normalObjects.sceneInformation=n,this.meshesInfo=n.additionalInfo;const i=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let B=0;B<i;B++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+B,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[B],0,n.meshes[B].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+B,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[B],0,n.meshes[B].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+B,size:pt*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const N=n.meshes[B].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[B],0,N),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+B,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[B]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[B].Material.albedoGPUTexture?n.meshes[B].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[B].Material.metalnessGPUTexture?n.meshes[B].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[B].Material.roughnessGPUTexture?n.meshes[B].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[B].Material.normalGPUTexture?n.meshes[B].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[B]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[B]}}]}));const _=n.meshes[B].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+B,size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[B],0,_);const w=n.meshes[B].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+B,size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[B],0,w);const K=n.meshes[B].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+B,size:K.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[B],0,K);const ee=n.meshes[B].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+B,size:ee.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[B],0,ee)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:ml,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=this.getBVHGeometry(1/0);this.normalObjects.bvhLineGeometryBuffers=[];for(let B=0;B<s.length;B++)this.normalObjects.bvhLineGeometryBuffers[B]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${B}`,size:s[B].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[B],0,s[B]);const a=[],o=[],l=[],u=[],c=[],f=[];let d=0,m=0,h=0,p=0,b=0;for(let B=0;B<i;B++){let N=n.meshes[B];a.push(...N.getVertexData()),o.push(...N.getNormalData()),l.push(...N.getUVData());const _=N.getReorderedIndexData32();for(let se of _)u.push(se+m);const{data:w,numNodes:K}=N.getFlattenedBVHData(b);f.push(w),d+=w.byteLength;const ee=new ArrayBuffer(gl),$=new Float32Array(ee),J=new Uint32Array(ee);$.set(N.GetFlatInverseWorldMatrix(),0),J[16]=b,J[17]=h,J[18]=p,J[19]=B,J[20]=K,c.push(...$),m+=N.getNumVertices(),h+=N.getNumTriangles(),p+=N.getNumVertices(),b+=K}const g=new Float32Array(a),v=new Float32Array(o),S=new Float32Array(l),y=new Uint32Array(u),P=new Float32Array(c),C=new Uint8Array(d);let A=0;for(let B of f)C.set(new Uint8Array(B),A),A+=B.byteLength;this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:pl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:g.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,g),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:v.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,v),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:S.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,S),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,y),this.rayTracerObjects.bvhNodesStorageBuffer=this.device.createBuffer({label:"Ray Tracer BVH Nodes Storage Buffer",size:C.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.bvhNodesStorageBuffer,0,C),this.rayTracerObjects.meshInstancesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Mesh Instances Storage Buffer",size:P.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,0,P),this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.bvhNodesStorageBuffer}},{binding:6,resource:{buffer:this.rayTracerObjects.meshInstancesStorageBuffer}}]});const R=n.meshes.map(B=>B.Material),M=_i(R);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:M.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,M);const G=4;var D=this.meshesInfo?.meshMaterials.filter(B=>B.textureIndex>=0).length||0;D===0&&(D=1);const F=1024,U=1024;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[F,U,G*D],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const O=nr(1024,32);for(let B=0;B<D;B++){const N=this.meshesInfo?.meshMaterials[B].albedoImage?this.meshesInfo.meshMaterials[B].albedoImage:O,_=this.meshesInfo?.meshMaterials[B].metalnessImage?this.meshesInfo.meshMaterials[B].metalnessImage:O,w=this.meshesInfo?.meshMaterials[B].roughnessImage?this.meshesInfo.meshMaterials[B].roughnessImage:O,K=this.meshesInfo?.meshMaterials[B].normalImage?this.meshesInfo.meshMaterials[B].normalImage:O;this.device.queue.copyExternalImageToTexture({source:N},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G]},[F,U]),this.device.queue.copyExternalImageToTexture({source:_},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G+1]},[F,U]),this.device.queue.copyExternalImageToTexture({source:w},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G+2]},[F,U]),this.device.queue.copyExternalImageToTexture({source:K},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G+3]},[F,U])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnMeshes(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;he(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&en(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&he(this.camera,-1,0),this.keysPressed.has("arrowright")&&he(this.camera,1,0),this.keysPressed.has("arrowup")&&he(this.camera,0,1),this.keysPressed.has("arrowdown")&&he(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers();const e=this.meshesInfo.meshMaterials[0];this.fetchTextureForMaterial(e,ne.Albedo,"meshes/dragon/textures/DefaultMaterial_baseColor.jpeg"),this.fetchTextureForMaterial(e,ne.Metalness,"meshes/dragon/textures/DefaultMaterial_metallicRoughness.png"),this.fetchTextureForMaterial(e,ne.Roughness,"meshes/dragon/textures/DefaultMaterial_metallicRoughness.png"),this.fetchTextureForMaterial(e,ne.Normal,"meshes/dragon/textures/DefaultMaterial_normal.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(pl),r=new Float32Array(e),n=new Uint32Array(e);r.set(tn(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracerMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=this.bvhDepth,n[24]=this.numBounces,r[25]=0,r[26]=0,r[27]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],a=28+i*12;r.set(s.position,a),r[a+3]=s.intensity,r.set(s.direction,a+4),r[a+7]=s.coneAngle,r.set(s.color,a+8),r[a+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e)}else{const e=new ArrayBuffer(ml),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const i=this.lights[n],s=40+n*12;r.set(i.position,s),r[s+3]=i.intensity,r.set(i.direction,s+4),r[s+7]=i.coneAngle,r.set(i.color,s+8),r[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){if(5>=this.normalObjects.sceneInformation.meshes.length)return;const r=this.normalObjects.sceneInformation.meshes[5],n=Lt();Or(n,0,.5,0),r.RotateMesh(n),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[5],0,r.GetFlatWorldMatrix()),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[5],0,r.GetFlatNormalMatrix());const i=r.GetFlatInverseWorldMatrix();this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,5*gl+0,i)}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const a=performance.now();this.handleInput(),this.updateUniforms(),this.animate();const o=this.context.getCurrentTexture().createView(),l=this.useRaytracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u={label:"basic canvas renderPass",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},c=this.device.createCommandEncoder({label:"Render Quad Encoder"}),f=c.beginRenderPass(u);if(this.useRaytracing)f.setPipeline(this.rayTracerObjects.pipeline),f.setBindGroup(0,this.rayTracerObjects.bindGroup),f.setBindGroup(1,this.rayTracerObjects.materialBindGroup),f.draw(6);else{f.setPipeline(this.normalObjects.pipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let h=0;h<this.normalObjects.sceneInformation.meshes.length;h++)f.setBindGroup(1,this.normalObjects.materialBindGroups[h]),f.setVertexBuffer(0,this.normalObjects.positionBuffers[h]),f.setVertexBuffer(1,this.normalObjects.normalBuffers[h]),f.setVertexBuffer(2,this.normalObjects.uvBuffers[h]),f.setIndexBuffer(this.normalObjects.indexBuffers[h],"uint16"),f.drawIndexed(this.normalObjects.indexBuffers[h].size/2,1,0,0,0);if(this.showBVH){f.setPipeline(this.normalObjects.bvhDrawPipeline),f.setBindGroup(0,this.normalObjects.bindGroup);for(let h=0;h<this.normalObjects.bvhLineGeometryBuffers.length;h++)f.setBindGroup(1,this.normalObjects.materialBindGroups[h]),f.setVertexBuffer(0,this.normalObjects.bvhLineGeometryBuffers[h]),f.draw(this.normalObjects.bvhLineCounts[h])}}f.end(),this.timestampQuerySet!=null&&(c.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&c.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const d=c.finish();this.device.queue.submit([d]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const h=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(h[1]-h[0]),this.timestampQuerySet.resultBuffer.unmap()});const m=performance.now()-a;if(this.infoElement&&this.device){const h=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${m.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=h,or(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const a=s.contentBoxSize[0].inlineSize,o=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),$r(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeMeshMaterial(e,r){if(e<0||e>=(this.meshesInfo?.meshIndices.length||0))return;const n=r.name,i=this.normalObjects.sceneInformation.meshes.findIndex(u=>u.Material.name===n)||-1;if(i===-1)return;this.meshesInfo.meshMaterials[e]=r,this.normalObjects.sceneInformation.meshes[i].Material=r;const s=this.meshesInfo.meshIndices[e],a=Un(r);let o=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(o,0,a);const l=s*pt*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,l,a)}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(a=>a.Material.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():we(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():we(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():we(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():we(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=i;var s=e.textureIndex;for(let a=0;a<4;a++){const o=(()=>{switch(a){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||nr(1024,32);this.device.queue.copyExternalImageToTexture({source:o},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+a]},[1024,1024])}}getBVHGeometry(e){if(this.normalObjects.sceneInformation.meshes.length===0)return[];this.normalObjects.bvhLineCounts=[];const r=[];for(let n=0;n<this.normalObjects.sceneInformation.meshes.length;n++){const{vertexData:i,count:s}=this.normalObjects.sceneInformation.meshes[n].GetBVHGeometry(e);r.push(i),this.normalObjects.bvhLineCounts.push(s)}return r}rebuildBVHBuffer(){if(this.device===null)return;const e=this.getBVHGeometry(this.bvhDepth);for(let r=0;r<e.length;r++)this.normalObjects.bvhLineGeometryBuffers[r]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${r}`,size:e[r].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[r],0,e[r])}rayCastOnMeshes(e,r){if(this.canvas===null||this.camera===null||this.meshesInfo===null)return-1;const i=this.meshesInfo.meshIndices.map(p=>this.normalObjects.sceneInformation.meshes[p]),s=this.canvas.getBoundingClientRect(),a=e-s.left,o=r-s.top,l=this.canvas.width/s.width,u=this.canvas.height/s.height,c=2*a*l/this.canvas.width-1,f=1-2*o*u/this.canvas.height,d=Fi(this.camera,c,f);let m=-1,h=Number.POSITIVE_INFINITY;for(let p=0;p<i.length;p++){const g=i[p].intersectMeshWithRay(d,this.bvhDepth);g<0||g<h&&(h=g,m=p)}return m}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.meshesInfo?.meshMaterials?.[e];if(!i)return;this.activeContextMenu=Di({x:r,y:n},i,a=>{this.changeMeshMaterial(e,a)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=a=>{this.activeContextMenu&&!this.activeContextMenu.contains(a.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e){console.error("Material is undefined when trying to fetch texture with name:",n,"and type:",ne[r]);return}Wi(n).then(s=>{const a=Ki(s,1024,1024),o=qi(this.device,a);switch(r){case ne.Albedo:e.albedoTexture=a,e.albedoGPUTexture=o;break;case ne.Metalness:e.metalnessTexture=a,e.metalnessGPUTexture=o;break;case ne.Roughness:e.roughnessTexture=a,e.roughnessGPUTexture=o;break;case ne.Normal:e.normalTexture=a,e.normalGPUTexture=o;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ne[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const rx=`// ============================== //\r
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
}`,nx=`// ============================== //\r
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
}`,ix=`struct AreaLight\r
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
`,sx=`struct Material {\r
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
}`,ax=`struct AreaLight\r
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
}`,ox=`struct VertexOutput {\r
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
}`,lx=`struct VSOut \r
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
}`,ux=`struct VSOut \r
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
}`;async function cx(t){const e=new dx;return await e.initialize(t),e}const bl=224,yl=192,vl=16,fx=96;let dx=class{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Xr(1);lights=[];a_c=1;a_l=.09;a_q=.0032;normalObjects;rayTracerObjects;usePathTracing=!0;meshesInfo;activeContextMenu=null;showBVH=!1;bvhDepth=1/0;rayTracerMode=2;ptDepth=6;ptSamples=64;randSeed=Math.floor(Math.random()*4294967295);russianRoulette=!0;frameAccumulation=!0;accumTexture=null;renderTexture=null;frameCount=0;frameAccumulationReset=!1;denoiseRenderTexture=!1;constructor(){Qr(this.camera,278,500,-700),vr(this.camera,0,-.3),Zr(this.camera,.1,2e3),this.camera.moveSpeed=20,this.camera.rotateSpeed=.05,this.device=null,this.normalObjects={},this.rayTracerObjects={};const e={center:E(278,548,279),intensity:120,normalDirection:E(0,-1,0),width:100,height:100,color:E(1,1,1),enabled:!0};this.lights.push(e)}initializeUtils(){const e=Rt();if(!e)return;gt("Use Path Tracing",this.usePathTracing,e,i=>{this.usePathTracing=i}),e.appendChild(document.createElement("br")),lt("Depth of path tracing",this.ptDepth,0,20,1,e,i=>{this.ptDepth=i,this.frameAccumulationReset=!0}),e.appendChild(document.createElement("br")),lt("Path tracing samples",this.ptSamples,1,100,1,e,i=>{this.ptSamples=i,this.frameAccumulationReset=!0}),e.appendChild(document.createElement("br")),gt("Russian Roulette",this.russianRoulette,e,i=>{this.russianRoulette=i}),e.appendChild(document.createElement("br")),gt("Frame Accumulation",this.frameAccumulation,e,i=>{this.frameAccumulation=i,this.frameAccumulationReset=!0}),e.appendChild(document.createElement("br")),gt("Denoise Render Texture",this.denoiseRenderTexture,e,i=>{this.denoiseRenderTexture=i});const r=document.createElement("select");r.style.color="black",r.tabIndex=-1,["BVH","Lambert (only diffuse)","Crook Torrance"].forEach((i,s)=>{const a=document.createElement("option");a.value=s.toString(),a.text=i,r.appendChild(a)}),r.addEventListener("change",()=>{this.rayTracerMode=parseInt(r.value),this.frameAccumulationReset=!0}),r.value=this.rayTracerMode.toString(),e.appendChild(document.createElement("br")),e.appendChild(r),this.lights.forEach((i,s)=>{const a=o=>{o.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const l={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=Uh(l,this.lights[s],`Edit Light ${s+1}`,u=>{this.lights[s]=u,this.frameAccumulationReset=!0},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Wr(`Edit Light ${s+1}`,e,a)}),e.appendChild(document.createElement("br")),lt("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,e,i=>{this.bvhDepth=i===32?1/0:i,this.rebuildBVHBuffer()})}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.rayTracerObjects.shaderModule=Ie(this.device,rx,nx,"Ray Trace Shader Module"),this.normalObjects.shaderModule=Ie(this.device,ix,sx,"Normal Shader Module"),this.normalObjects.bvhShaderModule=Ie(this.device,ax,ox,"BVH Draw Shader Module"),this.rayTracerObjects.displayShaderModule=Ie(this.device,lx,ux,"Display Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.rayTracerObjects.displayBindGroupLayout=this.device.createBindGroupLayout({label:"Display Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.rayTracerObjects.displayPipeline=this.device.createRenderPipeline({label:"Display Pipeline",layout:this.device.createPipelineLayout({label:"Display Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.displayBindGroupLayout]}),vertex:{module:this.rayTracerObjects.displayShaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.displayShaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"none"}}),this.rayTracerObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}]}),this.rayTracerObjects.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.rayTracerObjects.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.rayTracerObjects.bindGroupLayout,this.rayTracerObjects.materialBindGroupLayout]}),this.rayTracerObjects.shaderModule!==null&&(this.rayTracerObjects.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.rayTracerObjects.pipelineLayout,vertex:{module:this.rayTracerObjects.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.rayTracerObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:"rgba16float"}]}})),this.normalObjects.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.normalObjects.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.normalObjects.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.normalObjects.bindGroupLayout,this.normalObjects.materialUniformBindGroupLayout]}),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.normalObjects.shaderModule!==null&&(this.normalObjects.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.normalObjects.pipelineLayout,vertex:{module:this.normalObjects.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.normalObjects.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.normalObjects.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.normalObjects.bvhDrawPipelineLayout,vertex:{module:this.normalObjects.bvhShaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.normalObjects.bvhShaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=Yr(this.device,2),this.normalObjects.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.rayTracerObjects.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}async initializeBuffers(){if(this.device===null)return;const e=we(this.device,1024,32),r=this.meshesInfo?.meshMaterials||[],n=await d2(r);this.normalObjects.sceneInformation=n,this.meshesInfo=n.additionalInfo;const i=n.meshes.length;this.normalObjects.materialUniforms=[],this.normalObjects.materialBindGroups=[],this.normalObjects.positionBuffers=[],this.normalObjects.normalBuffers=[],this.normalObjects.uvBuffers=[],this.normalObjects.indexBuffers=[],this.normalObjects.meshesModelMatrixBuffers=[],this.normalObjects.meshesNormalMatrixBuffers=[];for(let B=0;B<i;B++){this.normalObjects.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+B,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesModelMatrixBuffers[B],0,n.meshes[B].GetFlatWorldMatrix()),this.normalObjects.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+B,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.meshesNormalMatrixBuffers[B],0,n.meshes[B].GetFlatNormalMatrix()),this.normalObjects.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+B,size:pt*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const N=n.meshes[B].GetFlattenedMaterial();this.device.queue.writeBuffer(this.normalObjects.materialUniforms[B],0,N),this.normalObjects.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+B,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[B]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:n.meshes[B].Material.albedoGPUTexture?n.meshes[B].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[B].Material.metalnessGPUTexture?n.meshes[B].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[B].Material.roughnessGPUTexture?n.meshes[B].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[B].Material.normalGPUTexture?n.meshes[B].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[B]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[B]}}]}));const _=n.meshes[B].getVertexData();this.normalObjects.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+B,size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.positionBuffers[B],0,_);const w=n.meshes[B].getIndexData16();this.normalObjects.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+B,size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.indexBuffers[B],0,w);const K=n.meshes[B].getNormalData();this.normalObjects.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+B,size:K.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.normalBuffers[B],0,K);const ee=n.meshes[B].getUVData();this.normalObjects.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+B,size:ee.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.normalObjects.uvBuffers[B],0,ee)}this.normalObjects.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:bl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.normalObjects.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.normalObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.uniformBuffer}}]});const s=this.getBVHGeometry(1/0);this.normalObjects.bvhLineGeometryBuffers=[];for(let B=0;B<s.length;B++)this.normalObjects.bvhLineGeometryBuffers[B]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${B}`,size:s[B].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[B],0,s[B]);const a=[],o=[],l=[],u=[],c=[],f=[];let d=0,m=0,h=0,p=0,b=0;for(let B=0;B<i;B++){let N=n.meshes[B];a.push(...N.getVertexData()),o.push(...N.getNormalData()),l.push(...N.getUVData());const _=N.getReorderedIndexData32();for(let se of _)u.push(se+m);const{data:w,numNodes:K}=N.getFlattenedBVHData(b);f.push(w),d+=w.byteLength;const ee=new ArrayBuffer(fx),$=new Float32Array(ee),J=new Uint32Array(ee);$.set(N.GetFlatInverseWorldMatrix(),0),J[16]=b,J[17]=h,J[18]=p,J[19]=B,J[20]=K,c.push(...$),m+=N.getNumVertices(),h+=N.getNumTriangles(),p+=N.getNumVertices(),b+=K}const g=new Float32Array(a),v=new Float32Array(o),S=new Float32Array(l),y=new Uint32Array(u),P=new Float32Array(c),C=new Uint8Array(d);let A=0;for(let B of f)C.set(new Uint8Array(B),A),A+=B.byteLength;this.rayTracerObjects.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:yl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rayTracerObjects.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:g.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.positionStorageBuffer,0,g),this.rayTracerObjects.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:v.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.normalStorageBuffer,0,v),this.rayTracerObjects.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:S.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.uvStorageBuffer,0,S),this.rayTracerObjects.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.indexStorageBuffer,0,y),this.rayTracerObjects.bvhNodesStorageBuffer=this.device.createBuffer({label:"Ray Tracer BVH Nodes Storage Buffer",size:C.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.bvhNodesStorageBuffer,0,C),this.rayTracerObjects.meshInstancesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Mesh Instances Storage Buffer",size:P.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.meshInstancesStorageBuffer,0,P),this.rayTracerObjects.displayUniformBuffer=this.device.createBuffer({label:"Display Uniform Buffer",size:vl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.rebuildAccumulationTextures();const R=n.meshes.map(B=>B.Material),M=_i(R);this.rayTracerObjects.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:M.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,0,M);const G=4;var D=this.meshesInfo?.meshMaterials.filter(B=>B.textureIndex>=0).length||0;D===0&&(D=1);const F=1024,U=1024;this.rayTracerObjects.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[F,U,G*D],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const O=nr(1024,32);for(let B=0;B<D;B++){const N=this.meshesInfo?.meshMaterials[B]?.albedoImage?this.meshesInfo.meshMaterials[B].albedoImage:O,_=this.meshesInfo?.meshMaterials[B]?.metalnessImage?this.meshesInfo.meshMaterials[B].metalnessImage:O,w=this.meshesInfo?.meshMaterials[B]?.roughnessImage?this.meshesInfo.meshMaterials[B].roughnessImage:O,K=this.meshesInfo?.meshMaterials[B]?.normalImage?this.meshesInfo.meshMaterials[B].normalImage:O;this.device.queue.copyExternalImageToTexture({source:N},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G]},[F,U]),this.device.queue.copyExternalImageToTexture({source:_},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G+1]},[F,U]),this.device.queue.copyExternalImageToTexture({source:w},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G+2]},[F,U]),this.device.queue.copyExternalImageToTexture({source:K},{texture:this.rayTracerObjects.textureArray,origin:[0,0,B*G+3]},[F,U])}this.rayTracerObjects.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.rayTracerObjects.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.materialBuffer}},{binding:1,resource:this.rayTracerObjects.sampler},{binding:2,resource:this.rayTracerObjects.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnMeshes(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;he(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&en(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&he(this.camera,-1,0),this.keysPressed.has("arrowright")&&he(this.camera,1,0),this.keysPressed.has("arrowup")&&he(this.camera,0,1),this.keysPressed.has("arrowdown")&&he(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers();const e=this.meshesInfo.meshMaterials[7];this.fetchTextureForMaterial(e,ne.Albedo,"meshes/calavera/textures/Material.002_baseColor.png");const r=this.meshesInfo.meshMaterials[8];this.fetchTextureForMaterial(r,ne.Albedo,"meshes/takis/textures/Material.001_baseColor.png");const n=this.meshesInfo.meshMaterials[2];this.fetchTextureForMaterial(n,ne.Albedo,"textures/eagle.jpg"),this.fetchTextureForMaterial(n,ne.Metalness,"textures/eagle_metalness_roughness.png"),this.fetchTextureForMaterial(n,ne.Roughness,"textures/eagle_metalness_roughness.png"),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.usePathTracing){const e=new ArrayBuffer(yl),r=new Float32Array(e),n=new Uint32Array(e);r.set(tn(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracerMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=this.bvhDepth,n[24]=this.ptDepth,n[25]=this.randSeed,n[26]=this.ptSamples,r[27]=this.russianRoulette?1:0;const i=new Float32Array([this.canvas.width,this.canvas.height]);r.set(i,28),r[30]=this.frameAccumulation?1:0,n[31]=this.frameCount,r.set(this.lights[0].center,32),r[35]=this.lights[0].intensity,r.set(this.lights[0].normalDirection,36),r[39]=this.lights[0].width,r.set(this.lights[0].color,40),r[43]=this.lights[0].height,r[44]=this.lights[0].enabled?1:0,r[45]=0,r[46]=0,r[47]=0,this.device.queue.writeBuffer(this.rayTracerObjects.uniformBuffer,0,e);const s=new ArrayBuffer(vl),a=new Float32Array(s),o=new Uint32Array(s);o[0]=this.frameCount,a[1]=this.denoiseRenderTexture?1:0,o[2]=0,o[3]=0,this.device.queue.writeBuffer(this.rayTracerObjects.displayUniformBuffer,0,s)}else{const e=new ArrayBuffer(bl),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0,r.set(this.lights[0].center,40),r[43]=this.lights[0].intensity,r.set(this.lights[0].normalDirection,44),r[47]=this.lights[0].width,r.set(this.lights[0].color,48),r[51]=this.lights[0].height,r[52]=this.lights[0].enabled?1:0,r[53]=0,r[54]=0,r[55]=0,this.device.queue.writeBuffer(this.normalObjects.uniformBuffer,0,e)}}animate(){}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const a=performance.now();if(this.handleInput(),this.camera.dirty&&(this.frameAccumulationReset=!0,this.camera.dirty=!1),this.frameAccumulationReset){this.frameCount=0;const d=this.device.createCommandEncoder({label:"Frame Accumulation Reset Encoder"});d.beginRenderPass({colorAttachments:[{view:this.renderTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]}).end(),d.copyTextureToTexture({texture:this.renderTexture},{texture:this.accumTexture},[this.canvas.width,this.canvas.height]),this.device.queue.submit([d.finish()]),this.frameAccumulationReset=!1}this.usePathTracing&&this.frameAccumulation&&this.frameCount++,this.updateUniforms(),this.animate();const o=this.context.getCurrentTexture().createView(),l=this.usePathTracing?void 0:{view:this.normalObjects.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},u=this.device.createCommandEncoder({label:"Render Quad Encoder"});if(this.usePathTracing){const d=u.beginRenderPass({colorAttachments:[{view:this.renderTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}});d.setPipeline(this.rayTracerObjects.pipeline),d.setBindGroup(0,this.rayTracerObjects.bindGroup),d.setBindGroup(1,this.rayTracerObjects.materialBindGroup),d.draw(6),d.end(),this.frameAccumulation&&u.copyTextureToTexture({texture:this.renderTexture},{texture:this.accumTexture},[this.canvas.width,this.canvas.height]);const m={label:"basic canvas renderPass",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l},h=u.beginRenderPass(m);h.setPipeline(this.rayTracerObjects.displayPipeline),h.setBindGroup(0,this.rayTracerObjects.displayBindGroup),h.draw(6),h.end()}else{const d={label:"basic canvas renderPass",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:l,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},m=u.beginRenderPass(d);m.setPipeline(this.normalObjects.pipeline),m.setBindGroup(0,this.normalObjects.bindGroup);for(let h=0;h<this.normalObjects.sceneInformation.meshes.length;h++)m.setBindGroup(1,this.normalObjects.materialBindGroups[h]),m.setVertexBuffer(0,this.normalObjects.positionBuffers[h]),m.setVertexBuffer(1,this.normalObjects.normalBuffers[h]),m.setVertexBuffer(2,this.normalObjects.uvBuffers[h]),m.setIndexBuffer(this.normalObjects.indexBuffers[h],"uint16"),m.drawIndexed(this.normalObjects.indexBuffers[h].size/2,1,0,0,0);if(this.showBVH){m.setPipeline(this.normalObjects.bvhDrawPipeline),m.setBindGroup(0,this.normalObjects.bindGroup);for(let h=0;h<this.normalObjects.bvhLineGeometryBuffers.length;h++)m.setBindGroup(1,this.normalObjects.materialBindGroups[h]),m.setVertexBuffer(0,this.normalObjects.bvhLineGeometryBuffers[h]),m.draw(this.normalObjects.bvhLineCounts[h])}m.end()}this.timestampQuerySet!=null&&(u.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&u.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const c=u.finish();this.device.queue.submit([c]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const d=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(d[1]-d[0]),this.timestampQuerySet.resultBuffer.unmap()});const f=performance.now()-a;if(this.infoElement&&this.device){const d=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${f.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                `;this.infoElement.textContent=d,or(1e3/s)}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const a=s.contentBoxSize[0].inlineSize,o=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),$r(this.camera,this.canvas.width/this.canvas.height),this.normalObjects.depthTexture&&(this.normalObjects.depthTexture.destroy(),this.normalObjects.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})),this.rebuildAccumulationTextures())}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeMeshMaterial(e,r){if(e<0||e>=(this.meshesInfo?.meshIndices.length||0))return;const n=r.name,i=this.normalObjects.sceneInformation.meshes.findIndex(u=>u.Material.name===n)||-1;if(i===-1)return;this.meshesInfo.meshMaterials[e]=r,this.normalObjects.sceneInformation.meshes[i].Material=r;const s=this.meshesInfo.meshIndices[e],a=Un(r);let o=this.normalObjects.materialUniforms[s];this.device.queue.writeBuffer(o,0,a);const l=s*pt*4;this.device.queue.writeBuffer(this.rayTracerObjects.materialBuffer,l,a),this.frameAccumulationReset=!0}recreateBindGroup(e){const r=e.name,n=this.normalObjects.sceneInformation.meshes.findIndex(a=>a.Material.name===r)||-1;if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.normalObjects.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.normalObjects.materialUniforms[n]}},{binding:1,resource:this.normalObjects.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():we(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():we(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():we(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():we(this.device).createView()},{binding:6,resource:{buffer:this.normalObjects.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.normalObjects.meshesNormalMatrixBuffers[n]}}]});this.normalObjects.materialBindGroups[n]=i;var s=e.textureIndex;for(let a=0;a<4;a++){const o=(()=>{switch(a){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||nr(1024,32);this.device.queue.copyExternalImageToTexture({source:o},{texture:this.rayTracerObjects.textureArray,origin:[0,0,s*4+a]},[1024,1024])}}getBVHGeometry(e){if(this.normalObjects.sceneInformation.meshes.length===0)return[];this.normalObjects.bvhLineCounts=[];const r=[];for(let n=0;n<this.normalObjects.sceneInformation.meshes.length;n++){const{vertexData:i,count:s}=this.normalObjects.sceneInformation.meshes[n].GetBVHGeometry(e);r.push(i),this.normalObjects.bvhLineCounts.push(s)}return r}rebuildBVHBuffer(){if(this.device===null)return;const e=this.getBVHGeometry(this.bvhDepth);for(let r=0;r<e.length;r++)this.normalObjects.bvhLineGeometryBuffers[r]=this.device.createBuffer({label:`BVH Line Geometry Buffer ${r}`,size:e[r].byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalObjects.bvhLineGeometryBuffers[r],0,e[r])}rayCastOnMeshes(e,r){if(this.canvas===null||this.camera===null||this.meshesInfo===null)return-1;const i=this.meshesInfo.meshIndices.map(p=>this.normalObjects.sceneInformation.meshes[p]),s=this.canvas.getBoundingClientRect(),a=e-s.left,o=r-s.top,l=this.canvas.width/s.width,u=this.canvas.height/s.height,c=2*a*l/this.canvas.width-1,f=1-2*o*u/this.canvas.height,d=Fi(this.camera,c,f);let m=-1,h=Number.POSITIVE_INFINITY;for(let p=0;p<i.length;p++){const g=i[p].intersectMeshWithRay(d,4);g<0||(g<h&&(h=g,m=p),console.log(`Mesh ${p} intersection distance:`,g))}return m}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.meshesInfo?.meshMaterials?.[e];if(!i)return;this.activeContextMenu=Di({x:r,y:n},i,a=>{this.changeMeshMaterial(e,a)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=a=>{this.activeContextMenu&&!this.activeContextMenu.contains(a.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}rebuildAccumulationTextures(){this.accumTexture?.destroy(),this.renderTexture?.destroy(),this.accumTexture=this.device.createTexture({label:"Accumulation Texture",size:[this.canvas.width,this.canvas.height],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.renderTexture=this.device.createTexture({label:"Render Target Texture",size:[this.canvas.width,this.canvas.height],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING}),this.frameAccumulationReset=!0,this.rayTracerObjects.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.rayTracerObjects.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.rayTracerObjects.uniformBuffer}},{binding:1,resource:{buffer:this.rayTracerObjects.positionStorageBuffer}},{binding:2,resource:{buffer:this.rayTracerObjects.normalStorageBuffer}},{binding:3,resource:{buffer:this.rayTracerObjects.uvStorageBuffer}},{binding:4,resource:{buffer:this.rayTracerObjects.indexStorageBuffer}},{binding:5,resource:{buffer:this.rayTracerObjects.bvhNodesStorageBuffer}},{binding:6,resource:{buffer:this.rayTracerObjects.meshInstancesStorageBuffer}},{binding:7,resource:this.accumTexture.createView()}]}),this.rayTracerObjects.displayBindGroup=this.device.createBindGroup({label:"Display Bind Group",layout:this.rayTracerObjects.displayBindGroupLayout,entries:[{binding:0,resource:this.renderTexture.createView()},{binding:1,resource:{buffer:this.rayTracerObjects.displayUniformBuffer}}]})}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e){console.error("Material is undefined when trying to fetch texture with name:",n,"and type:",ne[r]);return}Wi(n).then(s=>{const a=Ki(s,1024,1024),o=qi(this.device,a);switch(r){case ne.Albedo:e.albedoTexture=a,e.albedoGPUTexture=o;break;case ne.Metalness:e.metalnessTexture=a,e.metalnessGPUTexture=o;break;case ne.Roughness:e.roughnessTexture=a,e.roughnessGPUTexture=o;break;case ne.Normal:e.normalTexture=a,e.normalGPUTexture=o;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ne[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}};const hx=`//================================//\r
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
}`,mx=`// Help from: https://github.com/kishimisu/WebGPU-Radix-Sort\r
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
}`,px=`//================================//\r
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
}`,gx=`//================================//\r
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
`,bx=`//================================//\r
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
}`;async function yx(t){const e=new vx;return await e.initialize(t),e}class vx{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();desiredNewElementCount=1<<20;THREADS_PER_WORKGROUP=256;X_SIZE=16;Y_SIZE=16;ELEMENT_COUNT=1<<20;ITEMS_PER_WORKGROUP=2*this.THREADS_PER_WORKGROUP;BIT_COUNT=30;NUM_PASSES=this.BIT_COUNT/2;GRID_SIZE;WORKGROUP_COUNT;elements=[];radixSort=!0;sortFlag=!1;sortedThisFrame=!1;lastSortTime=0;radixSortResources={};reorderResources={};renderResources={};prefixSumBindGroupLayout;prefixSumLevels=[];radixSortBindGroups;reorderBindGroups;keysBufferA;keysBufferB;valuesBufferA;valuesBufferB;localPrefixSumBuffer;blockSumBuffer;uniformBuffers;uniformBindGroups;uniformBindGroupLayout;radixDispatchX;radixDispatchY;constructor(){this.device=null,this.computeConstants()}computeConstants(){this.WORKGROUP_COUNT=Math.ceil(this.ELEMENT_COUNT/this.THREADS_PER_WORKGROUP),this.GRID_SIZE=Math.ceil(Math.sqrt(this.ELEMENT_COUNT));const[e,r]=this.dispatchSize(this.WORKGROUP_COUNT);this.radixDispatchX=e,this.radixDispatchY=r}initializeUtils(){const e=Rt();e&&(Du("Element Count",this.ELEMENT_COUNT,0,1<<30,10,e,r=>{this.desiredNewElementCount=r,this.resizeElementCount(this.desiredNewElementCount)}),e.appendChild(document.createElement("br")),Wr("Randomize",e,()=>{this.shuffle()}),e.appendChild(document.createElement("br")),gt("Radix Sort",this.radixSort,e,r=>this.radixSort=r),e.appendChild(document.createElement("br")),Wr("Sort",e,()=>{this.sortFlag=!0}))}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.radixSortResources.shaderModule=this.device.createShaderModule({label:"Radix Sort Shader Module",code:hx}),this.reorderResources.shaderModule=this.device.createShaderModule({label:"Reorder Shader Module",code:px}),this.renderResources.shaderModule=Ie(this.device,gx,bx,"Render Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.uniformBindGroupLayout=this.device.createBindGroupLayout({label:"Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.prefixSumBindGroupLayout=this.device.createBindGroupLayout({label:"Prefix Sum Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.radixSortResources.bindGroupLayout=this.device.createBindGroupLayout({label:"Radix Sort Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.radixSortResources.pipelineLayout=this.device.createPipelineLayout({label:"Radix Sort Pipeline Layout",bindGroupLayouts:[this.radixSortResources.bindGroupLayout,this.uniformBindGroupLayout]}),this.radixSortResources.pipeline=this.device.createComputePipeline({label:"Radix Sort Compute Pipeline",layout:this.radixSortResources.pipelineLayout,compute:{module:this.radixSortResources.shaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ELEMENT_COUNT:this.ELEMENT_COUNT,WORKGROUP_COUNT:this.WORKGROUP_COUNT}}}),this.reorderResources.bindGroupLayout=this.device.createBindGroupLayout({label:"Reorder Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.reorderResources.pipelineLayout=this.device.createPipelineLayout({label:"Reorder Pipeline Layout",bindGroupLayouts:[this.reorderResources.bindGroupLayout,this.uniformBindGroupLayout]}),this.reorderResources.pipeline=this.device.createComputePipeline({label:"Reorder Compute Pipeline",layout:this.reorderResources.pipelineLayout,compute:{module:this.reorderResources.shaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ELEMENT_COUNT:this.ELEMENT_COUNT,WORKGROUP_COUNT:this.WORKGROUP_COUNT}}}),this.renderResources.bindGroupLayout=this.device.createBindGroupLayout({label:"Render Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.renderResources.pipelineLayout=this.device.createPipelineLayout({label:"Render Pipeline Layout",bindGroupLayouts:[this.renderResources.bindGroupLayout]}),this.renderResources.pipeline=this.device.createRenderPipeline({label:"Render Pipeline",layout:this.renderResources.pipelineLayout,vertex:{module:this.renderResources.shaderModule.vertex,entryPoint:"vs",constants:{ELEMENT_COUNT:this.ELEMENT_COUNT,GRID_SIZE:this.GRID_SIZE}},fragment:{module:this.renderResources.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}}),this.timestampQuerySet=Yr(this.device,4))}initializePrefixSum(e,r){if(this.device===null)return;this.prefixSumLevels=[];const n=this.device.createShaderModule({label:"Prefix Sum Shader Module",code:mx}),i=this.device.createPipelineLayout({label:"Prefix Sum Pipeline Layout",bindGroupLayouts:[this.prefixSumBindGroupLayout]});let s=r,a=e;for(;;){const o=Math.ceil(s/this.ITEMS_PER_WORKGROUP),[l,u]=this.dispatchSize(o),c=this.device.createBuffer({label:`Block Sum Buffer (Level ${this.prefixSumLevels.length})`,size:Math.max(o,1)*4,usage:GPUBufferUsage.STORAGE}),f=this.device.createComputePipeline({label:`Prefix Sum Reduce (level ${this.prefixSumLevels.length})`,layout:i,compute:{module:n,entryPoint:"cs_reduce",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ITEMS_PER_WORKGROUP:this.ITEMS_PER_WORKGROUP,ELEMENT_COUNT:s}}}),d=this.device.createComputePipeline({label:`Prefix Sum Add (level ${this.prefixSumLevels.length})`,layout:i,compute:{module:n,entryPoint:"cs_add",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.X_SIZE,Y_SIZE:this.Y_SIZE,ITEMS_PER_WORKGROUP:this.ITEMS_PER_WORKGROUP,ELEMENT_COUNT:s}}}),m=this.device.createBindGroup({label:`Prefix Sum Bind Group (level ${this.prefixSumLevels.length})`,layout:this.prefixSumBindGroupLayout,entries:[{binding:0,resource:{buffer:a}},{binding:1,resource:{buffer:c}}]});if(this.prefixSumLevels.push({elementCount:s,workgroupCount:o,reducePipeline:f,addPipeline:d,bindGroup:m,dataBuffer:a,blockSumBuffer:c,dispatchX:l,dispatchY:u}),o<=1)break;a=c,s=o}}async initializeBuffers(){if(this.device===null)return;this.keysBufferA=this.device.createBuffer({label:"Keys Buffer A",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.keysBufferB=this.device.createBuffer({label:"Keys Buffer B",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.shuffle(),this.valuesBufferA=this.device.createBuffer({label:"Values A",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.valuesBufferB=this.device.createBuffer({label:"Values B",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.localPrefixSumBuffer=this.device.createBuffer({label:"Local Prefix Sum Buffer",size:this.ELEMENT_COUNT*4,usage:GPUBufferUsage.STORAGE}),this.blockSumBuffer=this.device.createBuffer({label:"Block Sum Buffer",size:4*this.WORKGROUP_COUNT*4,usage:GPUBufferUsage.STORAGE});const e=4*this.WORKGROUP_COUNT;this.initializePrefixSum(this.blockSumBuffer,e),this.uniformBuffers=[],this.uniformBindGroups=[];for(let r=0;r<15;r++){const n=this.device.createBuffer({label:`Uniform Buffer pass ${r}`,size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(n,0,new Uint32Array([r*2])),this.uniformBuffers.push(n);const i=this.device.createBindGroup({label:`Uniform Bind Group for pass ${r}`,layout:this.uniformBindGroupLayout,entries:[{binding:0,resource:{buffer:n}}]});this.uniformBindGroups.push(i)}this.radixSortBindGroups=[this.device.createBindGroup({label:"Radix Sort Bind Group (A)",layout:this.radixSortResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferA}},{binding:1,resource:{buffer:this.localPrefixSumBuffer}},{binding:2,resource:{buffer:this.blockSumBuffer}}]}),this.device.createBindGroup({label:"Radix Sort Bind Group (B)",layout:this.radixSortResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}},{binding:1,resource:{buffer:this.localPrefixSumBuffer}},{binding:2,resource:{buffer:this.blockSumBuffer}}]})],this.reorderBindGroups=[this.device.createBindGroup({label:"Reorder Bind Group (A -> B)",layout:this.reorderResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferA}},{binding:1,resource:{buffer:this.keysBufferB}},{binding:2,resource:{buffer:this.localPrefixSumBuffer}},{binding:3,resource:{buffer:this.blockSumBuffer}},{binding:4,resource:{buffer:this.valuesBufferA}},{binding:5,resource:{buffer:this.valuesBufferB}}]}),this.device.createBindGroup({label:"Reorder Bind Group (B -> A)",layout:this.reorderResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}},{binding:1,resource:{buffer:this.keysBufferA}},{binding:2,resource:{buffer:this.localPrefixSumBuffer}},{binding:3,resource:{buffer:this.blockSumBuffer}},{binding:4,resource:{buffer:this.valuesBufferB}},{binding:5,resource:{buffer:this.valuesBufferA}}]})],this.renderResources.bindGroup=this.device.createBindGroup({label:"Render Bind Group",layout:this.renderResources.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}}]})}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.mainLoop()}updateUniforms(){this.device}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0;const n=i=>{if(this.canvas===null||this.device===null||this.context===null)return;const s=i-e;e=i;const a=performance.now();this.updateUniforms();const l={label:"basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},u=this.device.createCommandEncoder({label:"Main encoder"});this.sortFlag&&(this.sortFlag=!1,this.sort(u));const c=u.beginRenderPass(l);c.setPipeline(this.renderResources.pipeline),c.setBindGroup(0,this.renderResources.bindGroup),c.draw(6,this.ELEMENT_COUNT,0,0),c.end(),this.timestampQuerySet!=null&&(u.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&u.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const f=u.finish();this.device.queue.submit([f]),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const m=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(m[1]-m[0]),this.sortedThisFrame&&(this.sortedThisFrame=!1,this.lastSortTime=Number(m[3]-m[2])/1e6),this.timestampQuerySet.resultBuffer.unmap()});const d=performance.now()-a;if(this.infoElement&&this.device){const m=`                FPS: ${(1e3/s).toFixed(1)}
                JS Time: ${d.toFixed(1)} ms
                GPU Time: ${(r/1e6).toFixed(2)} ms
                Last Sort Time: ${this.lastSortTime>0?this.lastSortTime.toFixed(2):"N/A"} ${this.lastSortTime>0?"ms":""}
                `;this.infoElement.textContent=m}this.animationFrameId=requestAnimationFrame(n)};this.animationFrameId=requestAnimationFrame(n),this.resizeObserver=new ResizeObserver(i=>{for(const s of i){const a=s.contentBoxSize[0].inlineSize,o=s.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(a,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)))}}),this.resizeObserver.observe(this.canvas)}shuffle(){this.elements=[];for(let e=0;e<this.ELEMENT_COUNT;e++)this.elements.push(Math.floor(Math.random()*(1<<30)));this.device?.queue.writeBuffer(this.keysBufferA,0,new Uint32Array(this.elements)),this.device?.queue.writeBuffer(this.keysBufferB,0,new Uint32Array(this.elements))}resizeElementCount(e){this.device!==null&&e!==this.ELEMENT_COUNT&&(e<1||(this.ELEMENT_COUNT=e,this.computeConstants(),this.destroyBuffers(),this.initializePipelines(),this.initializeBuffers()))}destroyBuffers(){if(this.keysBufferA?.destroy(),this.keysBufferB?.destroy(),this.valuesBufferA?.destroy(),this.valuesBufferB?.destroy(),this.localPrefixSumBuffer?.destroy(),this.blockSumBuffer?.destroy(),this.uniformBuffers)for(const e of this.uniformBuffers)e.destroy();for(const e of this.prefixSumLevels)e.blockSumBuffer?.destroy();this.prefixSumLevels=[]}async cleanup(){if(await this.smallCleanup(),this.destroyBuffers(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}dispatchSize(e){const r=Math.min(e,65535),n=Math.ceil(e/65535);return[r,n]}async sort(e){if(this.device===null)return;if(!this.radixSort){const i=performance.now();this.elements.sort((a,o)=>a-o);const s=performance.now();this.lastSortTime=s-i,this.device.queue.writeBuffer(this.keysBufferA,0,new Uint32Array(this.elements)),this.device.queue.writeBuffer(this.keysBufferB,0,new Uint32Array(this.elements));return}this.sortedThisFrame=!0;let r={label:"Radix Sort Compute Pass",...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:2,endOfPassWriteIndex:3}}};const n=e.beginComputePass(r);for(let i=0;i<this.NUM_PASSES;i++){const s=i%2===0;let a=this.uniformBindGroups[i];n.setPipeline(this.radixSortResources.pipeline),n.setBindGroup(0,s?this.radixSortBindGroups[0]:this.radixSortBindGroups[1]),n.setBindGroup(1,a),n.dispatchWorkgroups(this.radixDispatchX,this.radixDispatchY,1),this.dispatchPrefixSum(n),n.setPipeline(this.reorderResources.pipeline),n.setBindGroup(0,s?this.reorderBindGroups[0]:this.reorderBindGroups[1]),n.setBindGroup(1,a),n.dispatchWorkgroups(this.radixDispatchX,this.radixDispatchY,1)}n.end()}dispatchPrefixSum(e){const r=this.prefixSumLevels.length;for(let n=0;n<r;n++){const i=this.prefixSumLevels[n];e.setPipeline(i.reducePipeline),e.setBindGroup(0,i.bindGroup),e.dispatchWorkgroups(i.dispatchX,i.dispatchY,1)}for(let n=r-2;n>=0;n--){const i=this.prefixSumLevels[n];e.setPipeline(i.addPipeline),e.setBindGroup(0,i.bindGroup),e.dispatchWorkgroups(i.dispatchX,i.dispatchY,1)}}async smallCleanup(){lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}}const xx=`// ============================== //\r
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
}`,Bx=`// ============================== //\r
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
    numBVHNodes: u32,\r
    pad2: u32,\r
    pad3: u32,\r
\r
    lights: array<SpotLight, 3>, // 48 * 3 = 144 bytes\r
}; // Total: 224 bytes\r
\r
//================================//\r
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
struct VertexOutput \r
{\r
    @builtin(position) position: vec4f,\r
    @location(0) uv: vec2f,\r
};\r
\r
//================================//\r
@group(0) @binding(0) var<uniform> uniforms: Uniform;\r
@group(0) @binding(1) var<storage, read> worldVertices: array<f32>;\r
@group(0) @binding(2) var<storage, read> worldNormals: array<f32>;\r
@group(0) @binding(3) var<storage, read> uvs: array<f32>;\r
@group(0) @binding(4) var<storage, read> indices: array<u32>;\r
@group(0) @binding(5) var<storage, read> bvhNodes: array<BVHNode>;\r
@group(0) @binding(6) var<storage, read> materialsPerTriangle: array<u32>;\r
\r
@group(1) @binding(0) var<storage, read> materials: array<f32>;\r
@group(1) @binding(1) var materialSampler: sampler;\r
@group(1) @binding(2) var textures: texture_2d_array<f32>; // (albedo -> metalness -> roughness -> normal) for each material\r
\r
// ============================== //\r
fn getVertex(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(worldVertices[i], worldVertices[i + 1u], worldVertices[i + 2u]);\r
}\r
\r
// ============================== //\r
fn getNormal(index: u32) -> vec3f \r
{\r
    let i = index * 3u;\r
    return vec3f(worldNormals[i], worldNormals[i + 1u], worldNormals[i + 2u]);\r
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
fn getMaterial(materialIndex: u32) -> Material\r
{\r
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
fn traverseBVH(ray: Ray, closestT: ptr<function, f32>, hit: ptr<function, Hit>, shadow: bool) -> bool\r
{\r
    let invDir = vec3f(1.0 / ray.direction.x, 1.0 / ray.direction.y, 1.0 / ray.direction.z);\r
\r
    var hitAnything: bool = false;\r
    var numBoxQueries: u32 = 0u;\r
    var numTriangleQueries: u32 = 0u;\r
\r
    var index: u32 = 0u;\r
\r
    while (index < uniforms.numBVHNodes)\r
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
                let globalTriIdx = node.leftOrFirst + i;\r
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
    var hitCount: u32 = 0u;\r
\r
    let invDir = vec3f(1.0 / ray.direction.x, 1.0 / ray.direction.y, 1.0 / ray.direction.z);\r
\r
    var depth: u32 = 0u;\r
    var index: u32 = 0u;\r
\r
    var returnTarget: array<u32, 32>;\r
\r
    while (index < uniforms.numBVHNodes)\r
    {\r
        let node = bvhNodes[index];\r
        let isLeaf = node.count > 0u;\r
\r
        if (!rayAABBIntersect(ray, invDir, node.minB, node.maxB, 1e30))\r
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
        if (depth >= 32u) { return vec3f(1.0, 0.0, 1.0); }\r
        returnTarget[depth] = node.leftOrFirst;\r
        depth++;\r
        index++;\r
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
\r
    var closestT: f32 = maxDist;\r
    var hitSomething: bool = false;\r
\r
    if (traverseBVH(ray, &closestT, hit, shadow))\r
    {\r
        hitSomething = true;\r
        if (shadow)\r
        {\r
            return true;\r
        }\r
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
    let material = getMaterial(materialsPerTriangle[primaryHit.triIndex]);\r
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
        let bounceMaterial = getMaterial(materialsPerTriangle[bounceHit.triIndex]);\r
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
}`,Ax=`struct SpotLight\r
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
`,Tx=`struct Material {\r
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
}`,Mx=`struct SpotLight\r
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
}`,Sx=`struct VertexOutput {\r
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
}`,Px=`// Level 0 of hierarchical scene min max reduction to find through\r
// compute shaders the min max of the whole scene.\r
\r
//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override SIZE_X: u32;\r
override SIZE_Y: u32;\r
override TOTAL_VERTICES: u32;\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read> vertices: array<f32>;\r
@group(0) @binding(1) var<storage, read_write> output: array<f32>; // [minX, minY, minZ, maxX, maxY, maxZ] per workgroup\r
\r
var<workgroup> shared_min : array<vec3<f32>, THREADS_PER_WORKGROUP>;\r
var<workgroup> shared_max : array<vec3<f32>, THREADS_PER_WORKGROUP>;\r
\r
//================================//\r
@compute\r
@workgroup_size(SIZE_X, SIZE_Y, 1)\r
fn cs(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>,\r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    let workgroupIndex = w_id.x + w_id.y * num_work.x;\r
    let totalWorkgroups = num_work.x * num_work.y;\r
    let WID = workgroupIndex * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    var localMin = vec3<f32>(f32(1e30));\r
    var localMax = vec3<f32>(f32(-1e30));\r
\r
    for (var i: u32 = GID; i < TOTAL_VERTICES; i += totalWorkgroups * THREADS_PER_WORKGROUP)\r
    {\r
        let baseIndex = i * 3u;\r
        let vertex = vec3<f32>(vertices[baseIndex], vertices[baseIndex + 1u], vertices[baseIndex + 2u]);\r
        localMin = min(localMin, vertex);\r
        localMax = max(localMax, vertex);\r
    }\r
\r
    shared_min[l_id] = localMin;\r
    shared_max[l_id] = localMax;\r
\r
    // Memo for me: >>= 1u <==> /= 2u BUT faster because of bit shift (?)\r
    for (var stride: u32 = THREADS_PER_WORKGROUP >> 1u; stride > 0u; stride >>= 1u)\r
    {\r
        workgroupBarrier();\r
\r
        if (l_id < stride) // Active thread\r
        {\r
            shared_min[l_id] = min(shared_min[l_id], shared_min[l_id + stride]);\r
            shared_max[l_id] = max(shared_max[l_id], shared_max[l_id + stride]);\r
        }\r
    }\r
\r
    // Only need one thread of the workgroup to write the result\r
    let isFirstThread = l_id == 0u;\r
    if (isFirstThread)\r
    {\r
        let outputIndex = workgroupIndex * 6u;\r
        output[outputIndex]         = shared_min[0].x;\r
        output[outputIndex + 1u]    = shared_min[0].y;\r
        output[outputIndex + 2u]    = shared_min[0].z;\r
        output[outputIndex + 3u]    = shared_max[0].x;\r
        output[outputIndex + 4u]    = shared_max[0].y;\r
        output[outputIndex + 5u]    = shared_max[0].z;\r
    }\r
}`,Ex=`// This is a similar process than the sceneMinMax but at levels\r
// 1 to N. Input is not vertices but already processed flattened\r
// [minX, minY, minZ, maxX, maxY, maxZ] per workgroup.\r
\r
//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override SIZE_X: u32;\r
override SIZE_Y: u32;\r
override ELEMENT_COUNT: u32; // Prev num workgroups\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read> input: array<f32>;\r
@group(0) @binding(1) var<storage, read_write> output: array<f32>; // [minX, minY, minZ, maxX, maxY, maxZ] per workgroup\r
\r
var<workgroup> shared_min : array<vec3<f32>, THREADS_PER_WORKGROUP>;\r
var<workgroup> shared_max : array<vec3<f32>, THREADS_PER_WORKGROUP>;\r
\r
//================================//\r
@compute\r
@workgroup_size(SIZE_X, SIZE_Y, 1)\r
fn cs(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>,\r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    let workgroupIndex = w_id.x + w_id.y * num_work.x;\r
    let totalWorkgroups = num_work.x * num_work.y;\r
    let WID = workgroupIndex * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    var localMin = vec3<f32>(f32(1e30));\r
    var localMax = vec3<f32>(f32(-1e30));\r
\r
    // THIS IS THE FUNDAMENTAL DIFFERENCE no vertex buffer at input\r
    for (var i: u32 = GID; i < ELEMENT_COUNT; i += totalWorkgroups * THREADS_PER_WORKGROUP)\r
    {\r
        let baseIndex = i * 6u;\r
        let minBounds = vec3<f32>(input[baseIndex], input[baseIndex + 1u], input[baseIndex + 2u]);\r
        let maxBounds = vec3<f32>(input[baseIndex + 3u], input[baseIndex + 4u], input[baseIndex + 5u]);\r
        localMin = min(localMin, minBounds);\r
        localMax = max(localMax, maxBounds);\r
    }\r
\r
    shared_min[l_id] = localMin;\r
    shared_max[l_id] = localMax;\r
\r
    // Reduce\r
    for (var stride: u32 = THREADS_PER_WORKGROUP >> 1u; stride > 0u; stride >>= 1u)\r
    {\r
        workgroupBarrier();\r
\r
        if (l_id < stride)\r
        {\r
            shared_min[l_id] = min(shared_min[l_id], shared_min[l_id + stride]);\r
            shared_max[l_id] = max(shared_max[l_id], shared_max[l_id + stride]);\r
        }\r
    }\r
\r
    let isFirstThread = l_id == 0u;\r
    if (isFirstThread)\r
    {\r
        let outputIndex = workgroupIndex * 6u;\r
        output[outputIndex]         = shared_min[0].x;\r
        output[outputIndex + 1u]    = shared_min[0].y;\r
        output[outputIndex + 2u]    = shared_min[0].z;\r
        output[outputIndex + 3u]    = shared_max[0].x;\r
        output[outputIndex + 4u]    = shared_max[0].y;\r
        output[outputIndex + 5u]    = shared_max[0].z;\r
    }\r
}`,Cx=`// Shader that takes all triangles and scene max and min bounds\r
// Computes the morton code of 30 bit (10 bit per axis) of each\r
// centroid and writes it to an output buffer, and another with the triangle index for each code\r
// They will become key/value for the radix sort next step\r
\r
//================================//\r
override SIZE_X: u32;\r
override SIZE_Y: u32;\r
override THREADS_PER_WORKGROUP: u32;\r
override TRIANGLE_COUNT: u32;\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read> vertexBuffer: array<f32>;\r
@group(0) @binding(1) var<storage, read> indexBuffer: array<u32>;\r
@group(0) @binding(2) var<storage, read> sceneBounds: array<f32>; // [minX, minY, minZ, maxX, maxY, maxZ]\r
@group(0) @binding(3) var<storage, read_write> mortonCodes: array<u32>;\r
@group(0) @binding(4) var<storage, read_write> triangleIndices: array<u32>;\r
\r
//================================//\r
@compute\r
@workgroup_size(SIZE_X, SIZE_Y, 1)\r
fn cs(\r
    @builtin(workgroup_id) w_id: vec3<u32>,\r
    @builtin(num_workgroups) num_work: vec3<u32>,\r
    @builtin(local_invocation_index) l_id: u32)\r
{\r
    // One triangle per thread\r
    let workgroupIndex = w_id.x + w_id.y * num_work.x;\r
    let totalWorkgroups = num_work.x * num_work.y;\r
    let WID = workgroupIndex * THREADS_PER_WORKGROUP;\r
    let GID = WID + l_id;\r
\r
    if (GID >= TRIANGLE_COUNT)\r
    {\r
        return;\r
    }\r
\r
    let sceneMin = vec3<f32>(sceneBounds[0], sceneBounds[1], sceneBounds[2]);\r
    let sceneMax = vec3<f32>(sceneBounds[3], sceneBounds[4], sceneBounds[5]);\r
\r
    let indexBase = GID * 3u;\r
    let v0Index = indexBuffer[indexBase] * 3u;\r
    let v1Index = indexBuffer[indexBase + 1u] * 3u;\r
    let v2Index = indexBuffer[indexBase + 2u] * 3u;\r
\r
    let v0 = vec3<f32>(vertexBuffer[v0Index], vertexBuffer[v0Index + 1u], vertexBuffer[v0Index + 2u]);\r
    let v1 = vec3<f32>(vertexBuffer[v1Index], vertexBuffer[v1Index + 1u], vertexBuffer[v1Index + 2u]);\r
    let v2 = vec3<f32>(vertexBuffer[v2Index], vertexBuffer[v2Index + 1u], vertexBuffer[v2Index + 2u]);\r
\r
    let centroid = (v0 + v1 + v2) / 3.0;\r
    let normalizedCentroid = (centroid - sceneMin) / (sceneMax - sceneMin);\r
\r
    // 10 BITS PER AXIS\r
    let mortonCode: u32 = morton3D(normalizedCentroid);\r
    mortonCodes[GID] = mortonCode;\r
    triangleIndices[GID] = GID;\r
}\r
\r
//================================//\r
fn morton3D(p: vec3<f32>) -> u32\r
{\r
    let x = u32(clamp(p.x * 1024.0, 0.0, 1023.0));\r
    let y = u32(clamp(p.y * 1024.0, 0.0, 1023.0));\r
    let z = u32(clamp(p.z * 1024.0, 0.0, 1023.0));\r
\r
    return (expandBits(x) << 2u) | (expandBits(y) << 1u) | expandBits(z);\r
}\r
\r
//================================//\r
fn expandBits(v: u32) -> u32\r
{\r
    var x = v & 0x000003ffu;\r
    x = (x | (x << 16u)) & 0x30000fffu;\r
    x = (x | (x << 8u)) & 0x300f00f0u;\r
    x = (x | (x << 4u)) & 0x30c30c30u;\r
    x = (x | (x << 2u)) & 0x9249249u;\r
    return x;\r
}`,wx=`//================================//\r
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
}`,Rx=`// Help from: https://github.com/kishimisu/WebGPU-Radix-Sort\r
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
}`,Ox=`//================================//\r
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
}`,Ix=`// A Patricia tree (or radix tree) is a trie like tree structure, in our case with N morton codes,\r
// The nodes and their children (2 exactly per internal node) are decided by common prefix of these codes.\r
// https://research.nvidia.com/sites/default/files/publications/karras2012hpg_paper.pdf\r
// Karras 2012 says that, we are sure there are N - 1 internal nodes with N codes.\r
// This way, we assign one thread per internal node, \r
// and each thread independently figures out its range and children using only the δ function\r
\r
// The δ function is defined as:\r
// - δ(i, j) will be zero for a certain number of keys starting from ki and one for the remaining until kj.\r
// - We call the index of the last key where the bit is 0 a split position, γ ∈ [i, j−1].\r
// - δ(i, j) = δ(γ, γ+1)\r
// " The resulting subranges are given by [i, γ] and [γ + 1, j], and are further partitioned by the left\r
//  and right child node, respectively.".\r
\r
// Special case for duplicate keys: they augment each key with a bit representation of their index.\r
// Ergo, k'i = ki ⊕ i with string concatenation. ". In practice, there is no need to actually store the\r
// augmented keys—it is enough to simply use i and j as a fallback if ki = k j when evaluating δ(i, j). "\r
\r
//================================//\r
// PARALLEL CONSTRUCTION ALGORITHM OF THE TREE:\r
// We suppose Internal nodes and Leaf nodes are in two separate buffers.\r
// "We define our node layout so that the root is located at I0, and the indices of its children—as well \r
// as the children of any internal node—are assigned according to its respective split position".\r
// - The left child is at Iγ if it covers more than one key, or Lγ if its a leaf.\r
// - The right child is at Iγ + 1 if it covers more than one key, or Lγ + 1 if its a leaf.\r
// "An important property of this particular layout is that the index of every internal node coincides \r
// with either its first or its last key".\r
// \r
// For each internal node [0, N - 2] in parallel:\r
//    d <- sign(δ(i, i + 1) − δ(i, i − 1))  // Direction of the range\r
//    δmin <- δ(i, i − d)                   // upper bound for the length of the range\r
//    lmax <- 2\r
//    while δ(i, i + lmax * d) > δmin do\r
//       lmax <- lmax * 2\r
// \r
//    l <- 0                                // Find the other end with binary search\r
//    for t = lmax / 2, lmax / 4, ..., 1 do\r
//       if δ(i, i + (l + t) * d) > δmin then\r
//          l <- l + t\r
//    j <- i + l * d\r
\r
//    δnode <- δ(i, j)                      // Find split position with binary search\r
//    s <- 0\r
//    for t = ceil(l / 2), ceil(l / 4), ..., 1 do\r
//       if δ(i, i + (s + t) * d) > δnode then\r
//          s <- s + t\r
//    γ <- i + s * d + min(d, 0)\r
//\r
//    if min(i, j) == γ then left child <- Lγ else left child <- Iγ\r
//    if max(i, j) == γ + 1 then right child <- Lγ + 1 else right child <- Iγ + 1\r
//    Ii <- (left child, right child)\r
// end for\r
\r
//  δ(i, j) = −1 when j not in [0,n−1].\r
\r
//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override INTERNAL_NODE_COUNT: u32;\r
override LEAF_NODE_COUNT: u32;\r
\r
//================================//\r
struct BVHNode \r
{\r
    aabbMin: vec3f,\r
    parent:  u32,\r
    aabbMax: vec3f,\r
    triangleCount: u32,\r
\r
    left:    u32,\r
    right:   u32,\r
    sahCost: f32,\r
    subTreeNodeCount: u32,\r
}; // Size = 3 * 16 = 48 bytes.\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read> mortonCodes: array<u32>;\r
@group(0) @binding(1) var<storage, read_write> internalNodes: array<BVHNode>;\r
@group(0) @binding(2) var<storage, read_write> leafNodes: array<u32>;\r
\r
//================================//\r
@compute\r
@workgroup_size(THREADS_PER_WORKGROUP, 1, 1)\r
fn cs(@builtin(global_invocation_id) gid: vec3u)\r
{\r
    if (gid.x >= INTERNAL_NODE_COUNT) \r
    {\r
        return;\r
    }\r
\r
    let i = i32(gid.x);\r
    let d = sign(delta(i, i + 1) - delta(i, i - 1));\r
    let deltaMin = delta(i, i - d);\r
    \r
    var lmax = 2u;\r
    while (delta(i, i + i32(lmax) * d) > deltaMin)\r
    {\r
        lmax = lmax * 2u;\r
    }\r
\r
    var l = 0u;\r
    var t = lmax / 2u;\r
    while (t >= 1u)\r
    {\r
        if (delta(i, i + i32(l + t) * d) > deltaMin)\r
        {\r
            l = l + t;\r
        }\r
        t >>= 1u;\r
    }\r
    let j = i + i32(l) * d;\r
\r
    let deltaNode = delta(i, j);\r
    var s = 0;\r
    var step = i32((l + 1u) >> 1u); // ceil(l/2)\r
    while (step >= 1) \r
    {\r
        if (delta(i, i + (s + step) * d) > deltaNode) {\r
            s = s + step;\r
        }\r
        if (step == 1) { break; }\r
        step = (step + 1) >> 1; // ceil(step/2)\r
    }\r
    let gamma = i + s * d + min(d, 0);\r
\r
    const LEAF_BIT: u32 = 0x80000000u;\r
    let lo = min(i, j);\r
    let hi = max(i, j);\r
    let triangleCount = u32(hi - lo + 1);\r
\r
    internalNodes[u32(i)].triangleCount = triangleCount;\r
    internalNodes[u32(i)].subTreeNodeCount = 2u * triangleCount - 1u;\r
    internalNodes[u32(i)].sahCost = 0.0;\r
\r
    if (lo == gamma)\r
    {\r
        internalNodes[u32(i)].left = u32(gamma) | LEAF_BIT; // Flag\r
        leafNodes[u32(gamma)] = u32(i); // store parent\r
    }   \r
    else\r
    {\r
        internalNodes[u32(i)].left = u32(gamma);\r
        internalNodes[u32(gamma)].parent = u32(i);\r
    }\r
\r
    if (max(i, j) == gamma + 1)\r
    {\r
        internalNodes[u32(i)].right = u32(gamma + 1) | LEAF_BIT;\r
        leafNodes[u32(gamma + 1)] = u32(i);\r
    }\r
    else\r
    {\r
        internalNodes[u32(i)].right = u32(gamma + 1);\r
        internalNodes[u32(gamma + 1)].parent = u32(i);\r
    }\r
\r
    if (i == 0) \r
    {\r
        internalNodes[0].parent = 0xFFFFFFFFu;\r
    } // Make sure we hit a termination condition when climbing up the tree later\r
}\r
\r
//================================//\r
// Small explanation on countLeadingZeros:\r
// countLeadingZeros(x) returns the number of leading zeros in the binary representation of x.\r
//================================//\r
fn delta(i: i32, j: i32) -> i32\r
{\r
    if (j < 0 || j >= i32(LEAF_NODE_COUNT))\r
    {\r
        return -1;\r
    }\r
\r
    let codeI = mortonCodes[u32(i)];\r
    let codeJ = mortonCodes[u32(j)];\r
\r
    let xorResult = codeI ^ codeJ;\r
\r
    if (xorResult != 0u)\r
    {\r
        return i32(countLeadingZeros(xorResult));\r
    }\r
\r
    // else, duplicate keys\r
    return 32 + i32(countLeadingZeros(u32(i) ^ u32(j)));\r
}\r
`,Gx=`// This is a single pass bottom-up AABB aggregation shader,\r
// in order to properly give each internal node its final AABB before the DFS flattening pass.\r
//\r
// HUGE PROPS TO AddisonPrairie (at https://addisonprairie.github.io/WebGPU-LVBH-demo/) for a VERY niche use of the atomics that now allows us\r
// to MAKE SURE the children AABBs written are visible to the thread aggregating,\r
// which was my main problem on the old shader (AABBold) that had race conditions.\r
//\r
// The poitns of the algo here is:\r
//   - First to arrive  (counter == 0): stores AABB in accumBuffer with atomics and STOPS.\r
//   - Second to arrive (counter != 0): reads these atomic fields, if not ready CONTINUE\r
// IN theory this is a very fragile pattern, which is why I was surprised it works in the first place.\r
// CUDA (used in Karras 2012/2013) has dispatch barrier call primitives that send data to memory\r
// as barriers so the race conditions are not an issue.\r
// WebGPU does not have those, so we need to do these shady tricks to make it work...\r
//\r
// For example, the perturbation here ensures no real AABB component equals exactly 0.0, so i32(0) \r
//(the zero-cleared accumBuffer value) unambiguously means "not yet written". This is what we base ourselves\r
// on to make sure it is safe to do the aggregation and continue up the tree.\r
\r
//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override LEAF_NODE_COUNT:       u32;\r
override INTERNAL_NODE_COUNT:   u32;\r
\r
const INVALID_NODE: u32 = 0xFFFFFFFFu;\r
\r
//================================//\r
struct BVHNode\r
{\r
    aabbMin:         vec3f,\r
    parent:          u32,\r
    aabbMax:         vec3f,\r
    triangleCount:   u32,\r
    left:            u32,\r
    right:           u32,\r
    sahCost:         f32,\r
    subTreeNodeCount: u32,\r
};\r
\r
struct LeafAABB\r
{\r
    aabbMin: vec3f,\r
    _pad0:   u32,\r
    aabbMax: vec3f,\r
    _pad1:   u32,\r
};\r
\r
struct AtomicAABBNode\r
{\r
    min_x:   atomic<i32>,\r
    min_y:   atomic<i32>,\r
    min_z:   atomic<i32>,\r
    counter: atomic<i32>,\r
    max_x:   atomic<i32>,\r
    max_y:   atomic<i32>,\r
    max_z:   atomic<i32>,\r
    _pad:    atomic<i32>,\r
};\r
\r
//================================//\r
@group(0) @binding(0) var<storage, read>       vertices:      array<f32>;\r
@group(0) @binding(1) var<storage, read>       indices:       array<u32>;\r
@group(0) @binding(2) var<storage, read>       sortedIndices: array<u32>;\r
@group(0) @binding(3) var<storage, read_write> internalNodes: array<BVHNode>;\r
@group(0) @binding(4) var<storage, read>       leafParents:   array<u32>;\r
@group(0) @binding(5) var<storage, read_write> leafAABBs:     array<LeafAABB>;\r
@group(0) @binding(6) var<storage, read_write> accumBuffer:   array<AtomicAABBNode>;\r
\r
//================================//\r
@compute @workgroup_size(THREADS_PER_WORKGROUP)\r
fn cs(@builtin(global_invocation_id) gid: vec3u)\r
{\r
    let leafIndex = gid.x;\r
    if (leafIndex >= LEAF_NODE_COUNT) { return; }\r
\r
    let triIndex = sortedIndices[leafIndex];\r
    let i0 = indices[triIndex * 3u + 0u];\r
    let i1 = indices[triIndex * 3u + 1u];\r
    let i2 = indices[triIndex * 3u + 2u];\r
    let v0 = vec3f(vertices[i0*3u], vertices[i0*3u+1u], vertices[i0*3u+2u]);\r
    let v1 = vec3f(vertices[i1*3u], vertices[i1*3u+1u], vertices[i1*3u+2u]);\r
    let v2 = vec3f(vertices[i2*3u], vertices[i2*3u+1u], vertices[i2*3u+2u]);\r
\r
    var bboxMin = min(v0, min(v1, v2));\r
    var bboxMax = max(v0, max(v1, v2));\r
\r
    leafAABBs[leafIndex].aabbMin = bboxMin;\r
    leafAABBs[leafIndex].aabbMax = bboxMax;\r
\r
    if (INTERNAL_NODE_COUNT == 0u) { return; }\r
\r
    // This is the "shady" perturbation part thatfs make it work\r
    // Since it never really equals to 0, it means we did not write to it yet...\r
    bboxMin -= select(vec3f(0.0), vec3f(1e-8), bboxMin == vec3f(0.0));\r
    bboxMax += select(vec3f(0.0), vec3f(1e-8), bboxMax == vec3f(0.0));\r
\r
    var nodeIdx: u32 = leafParents[leafIndex];\r
    var bDone:   bool = false;\r
\r
    while (nodeIdx < INTERNAL_NODE_COUNT && !bDone) \r
    {\r
        let sibling = atomicAdd(&accumBuffer[nodeIdx].counter, 1);\r
\r
        if (sibling == 0) // First thread writes and bails out\r
        {\r
            // First sibling: park AABB and stop.\r
            atomicStore(&accumBuffer[nodeIdx].min_x, bitcast<i32>(bboxMin.x));\r
            atomicStore(&accumBuffer[nodeIdx].min_y, bitcast<i32>(bboxMin.y));\r
            atomicStore(&accumBuffer[nodeIdx].min_z, bitcast<i32>(bboxMin.z));\r
            atomicStore(&accumBuffer[nodeIdx].max_x, bitcast<i32>(bboxMax.x));\r
            atomicStore(&accumBuffer[nodeIdx].max_y, bitcast<i32>(bboxMax.y));\r
            atomicStore(&accumBuffer[nodeIdx].max_z, bitcast<i32>(bboxMax.z));\r
            bDone = true;\r
        } \r
        else // meaning it was already visited\r
        {\r
            let sibMin = vec3f(\r
                bitcast<f32>(atomicLoad(&accumBuffer[nodeIdx].min_x)),\r
                bitcast<f32>(atomicLoad(&accumBuffer[nodeIdx].min_y)),\r
                bitcast<f32>(atomicLoad(&accumBuffer[nodeIdx].min_z))\r
            );\r
            let sibMax = vec3f(\r
                bitcast<f32>(atomicLoad(&accumBuffer[nodeIdx].max_x)),\r
                bitcast<f32>(atomicLoad(&accumBuffer[nodeIdx].max_y)),\r
                bitcast<f32>(atomicLoad(&accumBuffer[nodeIdx].max_z))\r
            );\r
\r
            // the continue here is super important (dangerous pattern but we have no choice)\r
            // Continue until sibling finishes writing.\r
            if (any(sibMin == vec3f(0.0)) || any(sibMax == vec3f(0.0))) {\r
                continue;\r
            }\r
\r
            bboxMin = min(bboxMin, sibMin);\r
            bboxMax = max(bboxMax, sibMax);\r
            internalNodes[nodeIdx].aabbMin = bboxMin;\r
            internalNodes[nodeIdx].aabbMax = bboxMax;\r
\r
            nodeIdx = internalNodes[nodeIdx].parent;\r
        }\r
    }\r
}`,_x=`// This shader is the final step of the BVH construction process.\r
// It flattens out the BVH into a DFS ordered array for efficient traversal on the GPU.\r
\r
//================================//\r
override THREADS_PER_WORKGROUP: u32;\r
override INTERNAL_NODE_COUNT: u32;\r
override LEAF_NODE_COUNT: u32;\r
\r
//================================//\r
const LEAF_BIT: u32 = 0x80000000u;\r
const INVALID_NODE: u32 = 0xFFFFFFFFu;\r
\r
//================================//\r
struct InputBVHNode\r
{\r
    aabbMin: vec3f,\r
    parent:  u32,\r
    aabbMax: vec3f,\r
    triangleCount: u32,\r
\r
    left:    u32,\r
    right:   u32,\r
    sahCost: f32,\r
    subTreeNodeCount: u32,\r
};\r
struct LeafAABB\r
{\r
    aabbMin: vec3f,\r
    _pad0: u32,\r
    aabbMax: vec3f,\r
    _pad1: u32,\r
};\r
struct FlatBVHNode\r
{\r
    minB: vec3f,\r
    leftOrFirst: u32, // internal: missLink, leaf: first global triangle index\r
\r
    maxB: vec3f,\r
    count: u32, // 0 = internal, >0 = leaf\r
};\r
\r
//================================//*\r
@group(0) @binding(0) var<storage, read> internalNodes: array<InputBVHNode>;\r
@group(0) @binding(1) var<storage, read> leafParents: array<u32>;\r
@group(0) @binding(2) var<storage, read> leafAABBs: array<LeafAABB>;\r
@group(0) @binding(3) var<storage, read> sortedTriangleIndices: array<u32>;\r
@group(0) @binding(4) var<storage, read_write> flatBVHNodes: array<FlatBVHNode>;\r
\r
//================================//\r
@compute\r
@workgroup_size(THREADS_PER_WORKGROUP)\r
fn cs(@builtin(global_invocation_id) gid: vec3u)\r
{\r
    let totalNodes = INTERNAL_NODE_COUNT + LEAF_NODE_COUNT;\r
    let threadIndex = gid.x;\r
\r
    if (threadIndex >= totalNodes)\r
    {\r
        return;\r
    }\r
\r
    if (threadIndex < INTERNAL_NODE_COUNT)\r
    {\r
        let nodeIndex = threadIndex;\r
        let dfsIndex = computeInternalDFSIndex(nodeIndex);\r
\r
        flatBVHNodes[dfsIndex].minB = internalNodes[nodeIndex].aabbMin;\r
        flatBVHNodes[dfsIndex].maxB = internalNodes[nodeIndex].aabbMax;\r
\r
        // correct miss link in the traversal is the first node after this whole subtree\r
        flatBVHNodes[dfsIndex].leftOrFirst = min(dfsIndex + internalNodes[nodeIndex].subTreeNodeCount, totalNodes);\r
        flatBVHNodes[dfsIndex].count = 0u;\r
        return;\r
    }\r
\r
    let leafIndex = threadIndex - INTERNAL_NODE_COUNT;\r
    let dfsIndex = computeLeafDFSIndex(leafIndex);\r
\r
    flatBVHNodes[dfsIndex].minB = leafAABBs[leafIndex].aabbMin;\r
    flatBVHNodes[dfsIndex].maxB = leafAABBs[leafIndex].aabbMax;\r
\r
    flatBVHNodes[dfsIndex].leftOrFirst = sortedTriangleIndices[leafIndex];\r
    flatBVHNodes[dfsIndex].count = 1u;\r
}\r
\r
//================================//\r
fn computeInternalDFSIndex(nodeIndex: u32) -> u32\r
{\r
    var dfsIndex: u32 = 0u;\r
    var currentToken: u32 = nodeIndex;\r
    var parentIndex: u32 = internalNodes[nodeIndex].parent;\r
\r
    loop {\r
        if (parentIndex == INVALID_NODE)\r
        {\r
            break;\r
        }\r
\r
        let leftChild = internalNodes[parentIndex].left;\r
        let rightChild = internalNodes[parentIndex].right;\r
\r
        if (currentToken == rightChild)\r
        {\r
            dfsIndex += 1u + getChildSubTreeNodeCount(leftChild);\r
        }\r
        else\r
        {\r
            dfsIndex += 1u;\r
        }\r
\r
        currentToken = parentIndex;\r
        parentIndex = internalNodes[parentIndex].parent;\r
    }\r
\r
    return dfsIndex;\r
}\r
\r
//================================//\r
fn computeLeafDFSIndex(leafIndex: u32) -> u32\r
{\r
    var dfsIndex: u32 = 0u;\r
    var currentToken: u32 = LEAF_BIT | leafIndex;\r
    var parentIndex: u32 = leafParents[leafIndex];\r
\r
    loop {\r
        if (parentIndex == INVALID_NODE)\r
        {\r
            break;\r
        } \r
\r
        let leftChild = internalNodes[parentIndex].left;\r
        let rightChild = internalNodes[parentIndex].right;\r
\r
        if (currentToken == rightChild)\r
        {\r
            dfsIndex += 1u + getChildSubTreeNodeCount(leftChild);\r
        }\r
        else\r
        {\r
            dfsIndex += 1u;\r
        }\r
\r
        currentToken = parentIndex;\r
        parentIndex = internalNodes[parentIndex].parent;\r
    }\r
\r
    return dfsIndex;\r
}\r
\r
//================================//\r
fn getChildSubTreeNodeCount(childIndex: u32) -> u32\r
{\r
    if ((childIndex & LEAF_BIT) != 0u)\r
    {\r
        return 1u;\r
    }\r
    else\r
    {\r
        return internalNodes[childIndex].subTreeNodeCount;\r
    }\r
}`,Ux=48,Dx=32,Fx=32;class Lx{debug=!1;THREADS_PER_WORKGROUP=256;SIZE_X=16;SIZE_Y=16;numTriangles=0;ITEMS_PER_WORKGROUP=2*this.THREADS_PER_WORKGROUP;BIT_COUNT=30;NUM_PASSES=this.BIT_COUNT/2;minMaxPipelineLayout;minMaxBindGroupLayout;minMaxReduceShaderModule;minMaxSceneShaderModule;minMaxLevels=[];minMaxReadbackBuffer=null;mortonPipelineLayout;mortonPipeline;mortonBindGroupLayout;mortonShaderModule;mortonBindGroup;mortonOutputBitsBuffer;mortonOutputTriangleIndexBuffer;WORKGROUP_COUNT;radixSortBindGroupLayout;reorderBindGroupLayout;prefixSumBindGroupLayout;radixSortPipelineLayout;reorderPipelineLayout;prefixSumPipelineLayout;radixSortShaderModule;reorderShaderModule;prefixSumShaderModule;prefixSumLevels=[];radixSortPipeline;reorderPipeline;radixSortBindGroups;reorderBindGroups;keysBufferA;keysBufferB;valuesBufferA;valuesBufferB;localPrefixSumBuffer;blockSumBuffer;uniformBuffers;uniformBindGroups;uniformBindGroupLayout;patriciaTreeShaderModule;patriciaTreeBindGroupLayout;patriciaTreePipelineLayout;patriciaTreePipeline;patriciaTreeBindGroup;mortonCodesBuffer;internalNodesBuffer;leafNodesBuffer;aabbShaderModule;aabbPipelineLayout;aabbBindGroupLayout;aabbPipeline;aabbBindGroup;aabbInternalNodesBuffer;aabbLeafNodesBuffer;aabbVertexBuffer;aabbIndexBuffer;aabbSortedIndexBuffer;leafAABBsBuffer;aabbAccumBuffer;dfsFlatteningShaderModule;dfsFlatteningPipelineLayout;dfsFlatteningBindGroupLayout;dfsFlatteningPipeline;dfsFlatteningBindGroup;dfsFlattenedNodesBuffer;constructor(){}dispatch(e){this.dispatchMinMaxPass(e),this.dispatchMortonPass(e),this.dispatchRadixSort(e),this.dispatchPatriciaTreePass(e),this.dispatchAABBUpPass(e),this.dispatchDFSFlatteningPass(e)}dispatchSize(e){const r=Math.min(e,65535),n=Math.ceil(e/65535);return[r,n]}initializeMinMaxPipeline(e,r,n){this.minMaxLevels=[],this.minMaxReduceShaderModule=e.createShaderModule({label:"Scene Min Max Reduce Shader Module",code:Ex}),this.minMaxSceneShaderModule=e.createShaderModule({label:"Scene Min Max Scene Shader Module",code:Px}),this.minMaxBindGroupLayout=e.createBindGroupLayout({label:"Scene Min Max Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.minMaxPipelineLayout=e.createPipelineLayout({label:"Scene Min Max Pipeline Layout",bindGroupLayouts:[this.minMaxBindGroupLayout]});let i=Math.ceil(n/this.THREADS_PER_WORKGROUP),[s,a]=this.dispatchSize(i);const o=e.createBuffer({label:"Scene Min Max Level 0 Output Buffer",size:i*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),l=e.createBindGroup({label:"Scene Min Max Level 0 Bind Group",layout:this.minMaxBindGroupLayout,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:o}}]}),u=e.createComputePipeline({label:"Scene Min Max Level 0 Pipeline",layout:this.minMaxPipelineLayout,compute:{module:this.minMaxSceneShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,SIZE_X:this.SIZE_X,SIZE_Y:this.SIZE_Y,TOTAL_VERTICES:n}}});this.minMaxLevels.push({workgroupCount:i,minMaxPipeline:u,minMaxBindGroup:l,input:r,output:o,dispatchX:s,dispatchY:a});let c=i,f=o;for(;;){const d=Math.ceil(c/this.THREADS_PER_WORKGROUP),[m,h]=this.dispatchSize(d),p=e.createBuffer({label:`Scene Min Max Level ${this.minMaxLevels.length} Output Buffer`,size:d*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),b=e.createBindGroup({label:`Scene Min Max Level ${this.minMaxLevels.length} Bind Group`,layout:this.minMaxBindGroupLayout,entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:{buffer:p}}]}),g=e.createComputePipeline({label:`Scene Min Max Level ${this.minMaxLevels.length} Pipeline`,layout:this.minMaxPipelineLayout,compute:{module:this.minMaxReduceShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,SIZE_X:this.SIZE_X,SIZE_Y:this.SIZE_Y,ELEMENT_COUNT:c}}});if(this.minMaxLevels.push({workgroupCount:d,minMaxPipeline:g,minMaxBindGroup:b,input:f,output:p,dispatchX:m,dispatchY:h}),d<=1)break;c=d,f=p}this.minMaxReadbackBuffer=e.createBuffer({label:"MinMax Readback Buffer",size:24,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST})}copyResultForReadback(e){if(!this.minMaxReadbackBuffer||this.minMaxLevels.length===0)return;const r=this.minMaxLevels[this.minMaxLevels.length-1].output;e.copyBufferToBuffer(r,0,this.minMaxReadbackBuffer,0,24)}dispatchMinMaxPass(e){for(const r of this.minMaxLevels)e.setPipeline(r.minMaxPipeline),e.setBindGroup(0,r.minMaxBindGroup),e.dispatchWorkgroups(r.dispatchX,r.dispatchY)}initializeMortonPipeline(e,r,n,i){this.numTriangles=i,this.mortonShaderModule=e.createShaderModule({label:"Morton Code Shader Module",code:Cx}),this.mortonBindGroupLayout=e.createBindGroupLayout({label:"Morton Code Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.mortonPipelineLayout=e.createPipelineLayout({label:"Morton Code Pipeline Layout",bindGroupLayouts:[this.mortonBindGroupLayout]}),this.mortonPipeline=e.createComputePipeline({label:"Morton Code Pipeline",layout:this.mortonPipelineLayout,compute:{module:this.mortonShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,SIZE_X:this.SIZE_X,SIZE_Y:this.SIZE_Y,TRIANGLE_COUNT:i}}}),this.mortonOutputBitsBuffer=e.createBuffer({label:"Morton Code Output Bits Buffer",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.mortonOutputTriangleIndexBuffer=e.createBuffer({label:"Morton Code Output Triangle Index Buffer",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.mortonBindGroup=e.createBindGroup({label:"Morton Code Bind Group",layout:this.mortonBindGroupLayout,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:n}},{binding:2,resource:{buffer:this.minMaxLevels[this.minMaxLevels.length-1].output}},{binding:3,resource:{buffer:this.mortonOutputBitsBuffer}},{binding:4,resource:{buffer:this.mortonOutputTriangleIndexBuffer}}]})}dispatchMortonPass(e){if(!this.mortonShaderModule||!this.mortonBindGroup)return;const[r,n]=this.dispatchSize(Math.ceil(this.numTriangles/this.THREADS_PER_WORKGROUP));e.setPipeline(this.mortonPipeline),e.setBindGroup(0,this.mortonBindGroup),e.dispatchWorkgroups(r,n)}initializeRadixSortPipelines(e){const r=this.numTriangles;this.WORKGROUP_COUNT=Math.ceil(r/this.THREADS_PER_WORKGROUP),this.radixSortShaderModule=e.createShaderModule({label:"Radix Sort Shader Module",code:wx}),this.reorderShaderModule=e.createShaderModule({label:"Radix Reorder Shader Module",code:Ox}),this.prefixSumShaderModule=e.createShaderModule({label:"Prefix Sum Reduce Shader Module",code:Rx}),this.uniformBindGroupLayout=e.createBindGroupLayout({label:"Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.uniformBuffers=[],this.uniformBindGroups=[];for(let s=0;s<this.NUM_PASSES;s++){const a=e.createBuffer({label:`Radix Sort Uniform Buffer Pass ${s}`,size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(a,0,new Uint32Array([s*2]));const o=e.createBindGroup({label:`Radix Sort Uniform Bind Group Pass ${s}`,layout:this.uniformBindGroupLayout,entries:[{binding:0,resource:{buffer:a}}]});this.uniformBindGroups.push(o),this.uniformBuffers.push(a)}this.prefixSumBindGroupLayout=e.createBindGroupLayout({label:"Prefix Sum Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.prefixSumPipelineLayout=e.createPipelineLayout({label:"Prefix Sum Pipeline Layout",bindGroupLayouts:[this.prefixSumBindGroupLayout]}),this.keysBufferA=this.mortonOutputBitsBuffer,this.keysBufferB=e.createBuffer({label:"Radix Sort Keys Buffer B",size:this.numTriangles*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.valuesBufferA=this.mortonOutputTriangleIndexBuffer,this.valuesBufferB=e.createBuffer({label:"Radix Sort Values Buffer B",size:this.numTriangles*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.localPrefixSumBuffer=e.createBuffer({label:"Radix Sort Local Prefix Sum Buffer",size:this.numTriangles*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.blockSumBuffer=e.createBuffer({label:"Radix Sort Block Sum Buffer",size:4*this.WORKGROUP_COUNT*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.radixSortBindGroupLayout=e.createBindGroupLayout({label:"Radix Sort Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.radixSortPipelineLayout=e.createPipelineLayout({label:"Radix Sort Pipeline Layout",bindGroupLayouts:[this.radixSortBindGroupLayout,this.uniformBindGroupLayout]}),this.radixSortPipeline=e.createComputePipeline({label:"Radix Sort Pipeline",layout:this.radixSortPipelineLayout,compute:{module:this.radixSortShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.SIZE_X,Y_SIZE:this.SIZE_Y,ELEMENT_COUNT:this.numTriangles,WORKGROUP_COUNT:this.WORKGROUP_COUNT}}}),this.radixSortBindGroups=[e.createBindGroup({label:"Radix Sort Bind Group",layout:this.radixSortBindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferA}},{binding:1,resource:{buffer:this.localPrefixSumBuffer}},{binding:2,resource:{buffer:this.blockSumBuffer}}]}),e.createBindGroup({label:"Radix Sort Bind Group 2",layout:this.radixSortBindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}},{binding:1,resource:{buffer:this.localPrefixSumBuffer}},{binding:2,resource:{buffer:this.blockSumBuffer}}]})],this.reorderBindGroupLayout=e.createBindGroupLayout({label:"Reorder Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.reorderPipelineLayout=e.createPipelineLayout({label:"Reorder Pipeline Layout",bindGroupLayouts:[this.reorderBindGroupLayout,this.uniformBindGroupLayout]}),this.reorderPipeline=e.createComputePipeline({label:"Reorder Pipeline",layout:this.reorderPipelineLayout,compute:{module:this.reorderShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.SIZE_X,Y_SIZE:this.SIZE_Y,ELEMENT_COUNT:this.numTriangles,WORKGROUP_COUNT:this.WORKGROUP_COUNT}}}),this.reorderBindGroups=[e.createBindGroup({label:"Reorder Bind Group",layout:this.reorderBindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferA}},{binding:1,resource:{buffer:this.keysBufferB}},{binding:2,resource:{buffer:this.localPrefixSumBuffer}},{binding:3,resource:{buffer:this.blockSumBuffer}},{binding:4,resource:{buffer:this.valuesBufferA}},{binding:5,resource:{buffer:this.valuesBufferB}}]}),e.createBindGroup({label:"Reorder Bind Group 2",layout:this.reorderBindGroupLayout,entries:[{binding:0,resource:{buffer:this.keysBufferB}},{binding:1,resource:{buffer:this.keysBufferA}},{binding:2,resource:{buffer:this.localPrefixSumBuffer}},{binding:3,resource:{buffer:this.blockSumBuffer}},{binding:4,resource:{buffer:this.valuesBufferB}},{binding:5,resource:{buffer:this.valuesBufferA}}]})],this.prefixSumLevels=[];let n=4*this.WORKGROUP_COUNT,i=this.blockSumBuffer;for(;;){const s=Math.ceil(n/this.ITEMS_PER_WORKGROUP),[a,o]=this.dispatchSize(s),l=e.createBuffer({label:`Prefix Sum Block Sum Buffer Level ${this.prefixSumLevels.length}`,size:Math.max(s,1)*4,usage:GPUBufferUsage.STORAGE}),u=e.createComputePipeline({label:`Prefix Sum Reduce Pipeline Level ${this.prefixSumLevels.length}`,layout:this.prefixSumPipelineLayout,compute:{module:this.prefixSumShaderModule,entryPoint:"cs_reduce",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.SIZE_X,Y_SIZE:this.SIZE_Y,ITEMS_PER_WORKGROUP:this.ITEMS_PER_WORKGROUP,ELEMENT_COUNT:n}}}),c=e.createComputePipeline({label:`Prefix Sum Add Pipeline Level ${this.prefixSumLevels.length}`,layout:this.prefixSumPipelineLayout,compute:{module:this.prefixSumShaderModule,entryPoint:"cs_add",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,X_SIZE:this.SIZE_X,Y_SIZE:this.SIZE_Y,ITEMS_PER_WORKGROUP:this.ITEMS_PER_WORKGROUP,ELEMENT_COUNT:n}}}),f=e.createBindGroup({label:`Prefix Sum Bind Group Level ${this.prefixSumLevels.length}`,layout:this.prefixSumBindGroupLayout,entries:[{binding:0,resource:{buffer:i}},{binding:1,resource:{buffer:l}}]});if(this.prefixSumLevels.push({elementCount:n,workgroupCount:s,reducePipeline:u,addPipeline:c,bindGroup:f,dataBuffer:i,blockSumBuffer:l,dispatchX:a,dispatchY:o}),s<=1)break;n=s,i=l}}dispatchRadixSort(e){const[r,n]=this.dispatchSize(this.WORKGROUP_COUNT);for(let i=0;i<this.NUM_PASSES;i++){const s=i%2===0;let a=this.uniformBindGroups[i];e.setPipeline(this.radixSortPipeline),e.setBindGroup(0,s?this.radixSortBindGroups[0]:this.radixSortBindGroups[1]),e.setBindGroup(1,a),e.dispatchWorkgroups(r,n,1);const o=this.prefixSumLevels.length;for(let l=0;l<o;l++){const u=this.prefixSumLevels[l];e.setPipeline(u.reducePipeline),e.setBindGroup(0,u.bindGroup),e.dispatchWorkgroups(u.dispatchX,u.dispatchY,1)}for(let l=o-2;l>=0;l--){const u=this.prefixSumLevels[l];e.setPipeline(u.addPipeline),e.setBindGroup(0,u.bindGroup),e.dispatchWorkgroups(u.dispatchX,u.dispatchY,1)}e.setPipeline(this.reorderPipeline),e.setBindGroup(0,s?this.reorderBindGroups[0]:this.reorderBindGroups[1]),e.setBindGroup(1,a),e.dispatchWorkgroups(r,n,1)}}initializePatriciaTreePipeline(e){this.patriciaTreeShaderModule=e.createShaderModule({label:"Patricia Tree Shader Module",code:Ix}),this.patriciaTreeBindGroupLayout=e.createBindGroupLayout({label:"Patricia Tree Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.patriciaTreePipelineLayout=e.createPipelineLayout({label:"Patricia Tree Pipeline Layout",bindGroupLayouts:[this.patriciaTreeBindGroupLayout]}),this.patriciaTreePipeline=e.createComputePipeline({label:"Patricia Tree Pipeline",layout:this.patriciaTreePipelineLayout,compute:{module:this.patriciaTreeShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,INTERNAL_NODE_COUNT:this.numTriangles-1,LEAF_NODE_COUNT:this.numTriangles}}}),this.mortonCodesBuffer=this.keysBufferB,this.internalNodesBuffer=e.createBuffer({label:"BVH Internal Nodes Buffer",size:(this.numTriangles-1)*Ux,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.leafNodesBuffer=e.createBuffer({label:"BVH Leaf Nodes Buffer",size:this.numTriangles*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.patriciaTreeBindGroup=e.createBindGroup({label:"Patricia Tree Bind Group",layout:this.patriciaTreeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.mortonCodesBuffer}},{binding:1,resource:{buffer:this.internalNodesBuffer}},{binding:2,resource:{buffer:this.leafNodesBuffer}}]})}dispatchPatriciaTreePass(e){if(!this.patriciaTreePipeline||!this.patriciaTreeBindGroup)return;const r=this.numTriangles-1,n=Math.ceil(r/this.THREADS_PER_WORKGROUP);e.setPipeline(this.patriciaTreePipeline),e.setBindGroup(0,this.patriciaTreeBindGroup),e.dispatchWorkgroups(n,1,1)}initializeAABBUpPassPipeline(e,r,n){this.aabbShaderModule=e.createShaderModule({label:"AABB Up-Pass Shader Module",code:Gx}),this.aabbBindGroupLayout=e.createBindGroupLayout({label:"AABB Up-Pass Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.aabbPipelineLayout=e.createPipelineLayout({label:"AABB Up-Pass Pipeline Layout",bindGroupLayouts:[this.aabbBindGroupLayout]}),this.aabbPipeline=e.createComputePipeline({label:"AABB Up-Pass Pipeline",layout:this.aabbPipelineLayout,compute:{module:this.aabbShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,INTERNAL_NODE_COUNT:this.numTriangles-1,LEAF_NODE_COUNT:this.numTriangles}}}),this.aabbInternalNodesBuffer=this.internalNodesBuffer,this.aabbLeafNodesBuffer=this.leafNodesBuffer,this.aabbVertexBuffer=r,this.aabbIndexBuffer=n,this.aabbSortedIndexBuffer=this.valuesBufferB,this.leafAABBsBuffer=e.createBuffer({label:"Leaf AABBs Buffer",size:this.numTriangles*Fx,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.aabbAccumBuffer=e.createBuffer({label:"AABB Accum Buffer",size:Math.max(this.numTriangles-1,1)*32,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.aabbBindGroup=e.createBindGroup({label:"AABB Up-Pass Bind Group",layout:this.aabbBindGroupLayout,entries:[{binding:0,resource:{buffer:this.aabbVertexBuffer}},{binding:1,resource:{buffer:this.aabbIndexBuffer}},{binding:2,resource:{buffer:this.aabbSortedIndexBuffer}},{binding:3,resource:{buffer:this.aabbInternalNodesBuffer}},{binding:4,resource:{buffer:this.aabbLeafNodesBuffer}},{binding:5,resource:{buffer:this.leafAABBsBuffer}},{binding:6,resource:{buffer:this.aabbAccumBuffer}}]})}clearAtomicCounters(e){this.aabbAccumBuffer&&e.clearBuffer(this.aabbAccumBuffer)}dispatchAABBUpPass(e){if(!this.aabbPipeline||!this.aabbBindGroup)return;const r=Math.ceil(this.numTriangles/this.THREADS_PER_WORKGROUP);e.setPipeline(this.aabbPipeline),e.setBindGroup(0,this.aabbBindGroup),e.dispatchWorkgroups(r,1,1)}initializeDFSFlatteningPipeline(e){this.dfsFlatteningShaderModule=e.createShaderModule({label:"DFS Flattening Shader Module",code:_x}),this.dfsFlatteningBindGroupLayout=e.createBindGroupLayout({label:"DFS Flattening Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.dfsFlatteningPipelineLayout=e.createPipelineLayout({label:"DFS Flattening Pipeline Layout",bindGroupLayouts:[this.dfsFlatteningBindGroupLayout]}),this.dfsFlatteningPipeline=e.createComputePipeline({label:"DFS Flattening Pipeline",layout:this.dfsFlatteningPipelineLayout,compute:{module:this.dfsFlatteningShaderModule,entryPoint:"cs",constants:{THREADS_PER_WORKGROUP:this.THREADS_PER_WORKGROUP,INTERNAL_NODE_COUNT:this.numTriangles-1,LEAF_NODE_COUNT:this.numTriangles}}}),this.dfsFlattenedNodesBuffer=e.createBuffer({label:"DFS Flattened BVH Buffer",size:(this.numTriangles*2-1)*Dx,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.dfsFlatteningBindGroup=e.createBindGroup({label:"DFS Flattening Bind Group",layout:this.dfsFlatteningBindGroupLayout,entries:[{binding:0,resource:{buffer:this.aabbInternalNodesBuffer}},{binding:1,resource:{buffer:this.aabbLeafNodesBuffer}},{binding:2,resource:{buffer:this.leafAABBsBuffer}},{binding:3,resource:{buffer:this.aabbSortedIndexBuffer}},{binding:4,resource:{buffer:this.dfsFlattenedNodesBuffer}}]})}dispatchDFSFlatteningPass(e){if(!this.dfsFlatteningPipeline||!this.dfsFlatteningBindGroup)return;const r=Math.ceil((this.numTriangles*2-1)/this.THREADS_PER_WORKGROUP);e.setPipeline(this.dfsFlatteningPipeline),e.setBindGroup(0,this.dfsFlatteningBindGroup),e.dispatchWorkgroups(r,1,1)}getFinalFlattenedBVHBuffer(){return this.dfsFlattenedNodesBuffer}getFinalFlattenedBVHNodeCount(){return this.numTriangles*2-1}}async function Nx(t){const e=new Vx;return await e.initialize(t),e}const xl=304,Bl=304,Al=96;class Vx{device;canvas=null;context=null;presentationFormat=null;timestampQuerySet=null;animationFrameId=null;resizeObserver=null;infoElement=ar();keysPressed=new Set;isMouseDown=!1;lastMouseX=0;lastMouseY=0;camera=Xr(1);lights=[];a_c=1;a_l=.09;a_q=.0032;NO;RO;useRaytracing=!1;rayTracerMode=0;numBounces=3;numSpheres=1;meshesInfo;activeContextMenu=null;seed=0;showBVH=!1;bvhDepth=1/0;minMaxBoundsText="";fastBVH=new Lx;constructor(){Qr(this.camera,0,100,-200),vr(this.camera,0,-.5),Zr(this.camera,.1,2e3),this.camera.moveSpeed=5,this.camera.rotateSpeed=.02,this.device=null,this.NO={},this.RO={};const e={position:E(0,100,0),intensity:200,direction:E(0,-1,0),coneAngle:Math.PI/2,color:E(.1,.1,.85),enabled:!0};this.lights.push(e);const r={position:E(100,100,0),intensity:1e3,direction:E(-1,-3,0),coneAngle:Math.PI/5,color:E(.1,.85,.1),enabled:!0};this.lights.push(r);const n={position:E(-100,100,0),intensity:1e3,direction:E(1,-3,0),coneAngle:Math.PI/5,color:E(.85,.1,.1),enabled:!0};this.lights.push(n)}initializeUtils(){const e=Rt();e&&(gt("Debug",this.fastBVH.debug,e,r=>{this.fastBVH.debug=r}),e.appendChild(document.createElement("br")),gt("Use Ray Tracing",this.useRaytracing,e,r=>{this.useRaytracing=r}),e.appendChild(document.createElement("br")),lt("Number of Bounces",this.numBounces,0,20,1,e,r=>{this.numBounces=r}),e.appendChild(document.createElement("br")),this.lights.forEach((r,n)=>{const i=s=>{s.preventDefault(),this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null);const a={x:this.canvas.offsetLeft+this.canvas.width-300,y:this.canvas.offsetTop+this.canvas.height/2-150};this.activeContextMenu=va(a,this.lights[n],`Edit Light ${n+1}`,o=>{this.lights[n]=o},()=>{this.activeContextMenu?.remove(),this.activeContextMenu=null}),document.body.appendChild(this.activeContextMenu)};e.appendChild(document.createElement("br")),Wr(`Edit Light ${n+1}`,e,i)}),e.appendChild(document.createElement("br")),gt("Show BVH",this.showBVH,e,r=>{this.showBVH=r,this.rayTracerMode=r?1:0}),e.appendChild(document.createElement("br")),lt("BVH Depth",this.bvhDepth===1/0?32:this.bvhDepth,1,32,1,e,r=>{this.bvhDepth=r===32?1/0:r}),e.appendChild(document.createElement("br")),Du("Random Seed",this.seed,0,10<<20,1,e,r=>{this.seed=r,this.initializeBuffers()}),e.appendChild(document.createElement("br")),lt("Number of Spheres",this.numSpheres,1,99,1,e,r=>{this.numSpheres=r,this.initializeBuffers()}))}async initialize(e){if(this.canvas=e,this.device=await ht(["timestamp-query"]),this.device===null||this.device===void 0){console.log("Was not able to acquire a WebGPU device.");return}if(this.context=e.getContext("webgpu"),this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),!this.context){console.error("WebGPU context is not available.");return}this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"premultiplied"}),this.initializeShaderModules(),this.initializePipelines(),await this.startRendering()}initializeShaderModules(){this.device!==null&&(this.RO.shaderModule=Ie(this.device,xx,Bx,"Ray Trace Shader Module"),this.NO.shaderModule=Ie(this.device,Ax,Tx,"Normal Shader Module"),this.NO.bvhShaderModule=Ie(this.device,Mx,Sx,"BVH Draw Shader Module"))}initializePipelines(){this.device===null||this.presentationFormat===null||(this.RO.bindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.RO.materialBindGroupLayout=this.device.createBindGroupLayout({label:"Ray Trace Material Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}]}),this.RO.pipelineLayout=this.device.createPipelineLayout({label:"Ray Trace Pipeline Layout",bindGroupLayouts:[this.RO.bindGroupLayout,this.RO.materialBindGroupLayout]}),this.RO.shaderModule!==null&&(this.RO.pipeline=this.device.createRenderPipeline({label:"Ray Trace Pipeline",layout:this.RO.pipelineLayout,vertex:{module:this.RO.shaderModule.vertex,entryPoint:"vs"},fragment:{module:this.RO.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]}})),this.NO.bindGroupLayout=this.device.createBindGroupLayout({label:"Normal Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.NO.materialUniformBindGroupLayout=this.device.createBindGroupLayout({label:"Material Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:6,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.NO.pipelineLayout=this.device.createPipelineLayout({label:"Normal Pipeline Layout",bindGroupLayouts:[this.NO.bindGroupLayout,this.NO.materialUniformBindGroupLayout]}),this.NO.bvhDrawPipelineLayout=this.device.createPipelineLayout({label:"BVH Draw Pipeline Layout",bindGroupLayouts:[this.NO.bindGroupLayout,this.NO.materialUniformBindGroupLayout]}),this.NO.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.NO.shaderModule!==null&&(this.NO.pipeline=this.device.createRenderPipeline({label:"Normal Pipeline",layout:this.NO.pipelineLayout,vertex:{module:this.NO.shaderModule.vertex,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:this.NO.shaderModule.fragment,entryPoint:"fs",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.NO.bvhDrawPipeline=this.device.createRenderPipeline({label:"BVH Draw Pipeline",layout:this.NO.bvhDrawPipelineLayout,vertex:{module:this.NO.bvhShaderModule.vertex,entryPoint:"vsBVH",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:this.NO.bvhShaderModule.fragment,entryPoint:"fsBVH",targets:[{format:this.presentationFormat}]},primitive:{topology:"line-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"}})),this.timestampQuerySet=Yr(this.device,10),this.NO.sampler=this.device.createSampler({label:"Normal Objects Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.RO.sampler=this.device.createSampler({label:"Ray Tracer Sampler",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}))}async initializeBuffers(){if(this.device===null)return;const e=we(this.device,1024,32),r=this.meshesInfo?.meshMaterials||[],n=await h2(r,this.seed,this.numSpheres);this.NO.sceneInformation=n,this.meshesInfo=n.additionalInfo;const i=this.meshesInfo.worldPositionData,s=this.meshesInfo.worldNormalData,a=this.meshesInfo.perTriangleMaterialIndices;this.RO.perMeshWorldPositionOffsets=this.meshesInfo.perMeshWorldPositionOffsets;const o=n.meshes.length;this.NO.materialUniforms=[],this.NO.materialBindGroups=[],this.NO.positionBuffers=[],this.NO.normalBuffers=[],this.NO.uvBuffers=[],this.NO.indexBuffers=[],this.NO.meshesModelMatrixBuffers=[],this.NO.meshesNormalMatrixBuffers=[];for(let w=0;w<o;w++){this.NO.meshesModelMatrixBuffers.push(this.device.createBuffer({label:"Mesh Model Matrix Buffer "+w,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.NO.meshesModelMatrixBuffers[w],0,n.meshes[w].GetFlatWorldMatrix()),this.NO.meshesNormalMatrixBuffers.push(this.device.createBuffer({label:"Mesh Normal Matrix Buffer "+w,size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.NO.meshesNormalMatrixBuffers[w],0,n.meshes[w].GetFlatNormalMatrix()),this.NO.materialUniforms.push(this.device.createBuffer({label:"Material Uniform Buffer "+w,size:pt*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const K=n.meshes[w].GetFlattenedMaterial();this.device.queue.writeBuffer(this.NO.materialUniforms[w],0,K),this.NO.materialBindGroups.push(this.device.createBindGroup({label:"Material Bind Group "+w,layout:this.NO.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.NO.materialUniforms[w]}},{binding:1,resource:this.NO.sampler},{binding:2,resource:n.meshes[w].Material.albedoGPUTexture?n.meshes[w].Material.albedoGPUTexture.createView():e.createView()},{binding:3,resource:n.meshes[w].Material.metalnessGPUTexture?n.meshes[w].Material.metalnessGPUTexture.createView():e.createView()},{binding:4,resource:n.meshes[w].Material.roughnessGPUTexture?n.meshes[w].Material.roughnessGPUTexture.createView():e.createView()},{binding:5,resource:n.meshes[w].Material.normalGPUTexture?n.meshes[w].Material.normalGPUTexture.createView():e.createView()},{binding:6,resource:{buffer:this.NO.meshesModelMatrixBuffers[w]}},{binding:7,resource:{buffer:this.NO.meshesNormalMatrixBuffers[w]}}]}));const ee=n.meshes[w].getVertexData();this.NO.positionBuffers.push(this.device.createBuffer({label:"Normal Position Buffer "+w,size:ee.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.NO.positionBuffers[w],0,ee);const $=n.meshes[w].getIndexData16();this.NO.indexBuffers.push(this.device.createBuffer({label:"Normal Index Buffer "+w,size:$.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.NO.indexBuffers[w],0,$);const J=n.meshes[w].getNormalData();this.NO.normalBuffers.push(this.device.createBuffer({label:"Normal Normal Buffer "+w,size:J.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.NO.normalBuffers[w],0,J);const se=n.meshes[w].getUVData();this.NO.uvBuffers.push(this.device.createBuffer({label:"Normal UV Buffer "+w,size:se.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.NO.uvBuffers[w],0,se)}this.NO.uniformBuffer=this.device.createBuffer({label:"Normal Uniform Buffer",size:xl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.NO.bindGroup=this.device.createBindGroup({label:"Normal Bind Group",layout:this.NO.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.NO.uniformBuffer}}]}),this.NO.bvhDebugMaterialBuffer=this.device.createBuffer({label:"BVH Debug Material Buffer",size:pt*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.NO.bvhDebugMaterialBuffer,0,new Float32Array(pt)),this.NO.bvhDebugModelMatrixBuffer=this.device.createBuffer({label:"BVH Debug Model Matrix Buffer",size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.NO.bvhDebugModelMatrixBuffer,0,new Float32Array(mr())),this.NO.bvhDebugNormalMatrixBuffer=this.device.createBuffer({label:"BVH Debug Normal Matrix Buffer",size:48,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.NO.bvhDebugNormalMatrixBuffer,0,new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0])),this.NO.bvhDebugBindGroup=this.device.createBindGroup({label:"BVH Debug Bind Group",layout:this.NO.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.NO.bvhDebugMaterialBuffer}},{binding:1,resource:this.NO.sampler},{binding:2,resource:e.createView()},{binding:3,resource:e.createView()},{binding:4,resource:e.createView()},{binding:5,resource:e.createView()},{binding:6,resource:{buffer:this.NO.bvhDebugModelMatrixBuffer}},{binding:7,resource:{buffer:this.NO.bvhDebugNormalMatrixBuffer}}]}),this.NO.bvhLineGeometryBuffers=[this.device.createBuffer({label:"BVH Debug Line Geometry Buffer",size:4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})],this.NO.bvhLineCounts=[0];const l=[],u=[],c=[],f=[],d=[],m=[];let h=0,p=0,b=0,g=0,v=0;for(let w=0;w<o;w++){let K=n.meshes[w];l.push(...K.getVertexData()),u.push(...K.getNormalData()),c.push(...K.getUVData());const ee=K.getReorderedIndexData32();for(let Me of ee)f.push(Me+p);const{data:$,numNodes:J}=K.getFlattenedBVHData(v);m.push($),h+=$.byteLength;const se=new ArrayBuffer(Al),Te=new Float32Array(se),le=new Uint32Array(se);Te.set(K.GetFlatInverseWorldMatrix(),0),le[16]=v,le[17]=b,le[18]=g,le[19]=w,le[20]=J,d.push(...Te),p+=K.getNumVertices(),b+=K.getNumTriangles(),g+=K.getNumVertices(),v+=J}const S=new Float32Array(l),y=new Float32Array(u),P=new Float32Array(c),C=new Uint32Array(f),A=new Float32Array(d),R=new Uint8Array(h);let M=0;for(let w of m)R.set(new Uint8Array(w),M),M+=w.byteLength;this.RO.uniformBuffer=this.device.createBuffer({label:"Ray Tracer Uniform Buffer",size:Bl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.RO.positionStorageBuffer=this.device.createBuffer({label:"Ray Tracer Position Storage Buffer",size:S.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.positionStorageBuffer,0,S),this.RO.worldPositionStorageBuffer=this.device.createBuffer({label:"Ray Tracer World Position Storage Buffer",size:i.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.worldPositionStorageBuffer,0,i),this.RO.worldNormalStorageBuffer=this.device.createBuffer({label:"Ray Tracer World Normal Storage Buffer",size:s.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.worldNormalStorageBuffer,0,s),this.RO.perTriangleMaterialIndicesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Per-Triangle Material Indices Storage Buffer",size:a.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.perTriangleMaterialIndicesStorageBuffer,0,a),this.RO.normalStorageBuffer=this.device.createBuffer({label:"Ray Tracer Normal Storage Buffer",size:y.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.normalStorageBuffer,0,y),this.RO.uvStorageBuffer=this.device.createBuffer({label:"Ray Tracer UV Storage Buffer",size:P.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.uvStorageBuffer,0,P),this.RO.indexStorageBuffer=this.device.createBuffer({label:"Ray Tracer Index Storage Buffer",size:C.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.indexStorageBuffer,0,C),this.RO.bvhNodesStorageBuffer=this.device.createBuffer({label:"Ray Tracer BVH Nodes Storage Buffer",size:R.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.bvhNodesStorageBuffer,0,R),this.RO.meshInstancesStorageBuffer=this.device.createBuffer({label:"Ray Tracer Mesh Instances Storage Buffer",size:A.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.meshInstancesStorageBuffer,0,A),this.fastBVH.initializeMinMaxPipeline(this.device,this.RO.worldPositionStorageBuffer,i.length/3);const G=C.length/3;this.fastBVH.initializeMortonPipeline(this.device,this.RO.worldPositionStorageBuffer,this.RO.indexStorageBuffer,G),this.fastBVH.initializeRadixSortPipelines(this.device),this.fastBVH.initializePatriciaTreePipeline(this.device),this.fastBVH.initializeAABBUpPassPipeline(this.device,this.RO.worldPositionStorageBuffer,this.RO.indexStorageBuffer),this.fastBVH.initializeDFSFlatteningPipeline(this.device),this.RO.bindGroup=this.device.createBindGroup({label:"Ray Tracer Bind Group",layout:this.RO.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.RO.uniformBuffer}},{binding:1,resource:{buffer:this.RO.worldPositionStorageBuffer}},{binding:2,resource:{buffer:this.RO.worldNormalStorageBuffer}},{binding:3,resource:{buffer:this.RO.uvStorageBuffer}},{binding:4,resource:{buffer:this.RO.indexStorageBuffer}},{binding:5,resource:{buffer:this.fastBVH.getFinalFlattenedBVHBuffer()}},{binding:6,resource:{buffer:this.RO.perTriangleMaterialIndicesStorageBuffer}}]});const D=n.meshes.map(w=>w.Material),F=_i(D);this.RO.materialBuffer=this.device.createBuffer({label:"Ray Tracer Material Storage Buffer",size:F.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.RO.materialBuffer,0,F);const U=4;var O=this.meshesInfo?.meshMaterials.filter(w=>w.textureIndex>=0).length||0;O===0&&(O=1);const B=1024,N=1024;this.RO.textureArray=this.device.createTexture({label:"Ray Tracer Material Texture Array",size:[B,N,U*O],format:"rgba8unorm",mipLevelCount:1,sampleCount:1,dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});const _=nr(1024,32);for(let w=0;w<O;w++){const K=this.meshesInfo?.meshMaterials[w].albedoImage?this.meshesInfo.meshMaterials[w].albedoImage:_,ee=this.meshesInfo?.meshMaterials[w].metalnessImage?this.meshesInfo.meshMaterials[w].metalnessImage:_,$=this.meshesInfo?.meshMaterials[w].roughnessImage?this.meshesInfo.meshMaterials[w].roughnessImage:_,J=this.meshesInfo?.meshMaterials[w].normalImage?this.meshesInfo.meshMaterials[w].normalImage:_;this.device.queue.copyExternalImageToTexture({source:K},{texture:this.RO.textureArray,origin:[0,0,w*U]},[B,N]),this.device.queue.copyExternalImageToTexture({source:ee},{texture:this.RO.textureArray,origin:[0,0,w*U+1]},[B,N]),this.device.queue.copyExternalImageToTexture({source:$},{texture:this.RO.textureArray,origin:[0,0,w*U+2]},[B,N]),this.device.queue.copyExternalImageToTexture({source:J},{texture:this.RO.textureArray,origin:[0,0,w*U+3]},[B,N])}this.RO.materialBindGroup=this.device.createBindGroup({label:"Ray Tracer Material Bind Group",layout:this.RO.materialBindGroupLayout,entries:[{binding:0,resource:{buffer:this.RO.materialBuffer}},{binding:1,resource:this.RO.sampler},{binding:2,resource:this.RO.textureArray.createView()}]})}initializeInputHandlers(){this.canvas&&(window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()))}onKeyDown=e=>{this.keysPressed.add(e.key.toLowerCase())};onKeyUp=e=>{this.keysPressed.delete(e.key.toLowerCase())};onMouseDown=e=>{this.isMouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};onMouseUp=e=>{if(this.isMouseDown=!1,e.target!==this.canvas)return;if(this.activeContextMenu!==null){const n=this.activeContextMenu.getBoundingClientRect();if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)return}let r=this.rayCastOnMeshes(e.clientX,e.clientY);r!==-1&&this.spawnMaterialContextMenu(r,e.clientX,e.clientY)};onMouseMove=e=>{if(!this.isMouseDown)return;const r=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=.05;he(this.camera,r*i,-n*i),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY};handleInput(){let e=0,r=0,n=0;(this.keysPressed.has("z")||this.keysPressed.has("w"))&&(n-=this.camera.moveSpeed),this.keysPressed.has("s")&&(n+=this.camera.moveSpeed),(this.keysPressed.has("q")||this.keysPressed.has("a"))&&(e-=this.camera.moveSpeed),this.keysPressed.has("d")&&(e+=this.camera.moveSpeed),this.keysPressed.has(" ")&&(r+=this.camera.moveSpeed),this.keysPressed.has("alt")&&(r-=this.camera.moveSpeed),(e!==0||r!==0||n!==0)&&en(this.camera,-n,e,r),this.keysPressed.has("arrowleft")&&he(this.camera,-1,0),this.keysPressed.has("arrowright")&&he(this.camera,1,0),this.keysPressed.has("arrowup")&&he(this.camera,0,1),this.keysPressed.has("arrowdown")&&he(this.camera,0,-1)}async startRendering(){await this.smallCleanup(),await this.initializeBuffers(),this.initializeUtils(),this.initializeInputHandlers(),this.mainLoop()}updateUniforms(){if(this.device!==null)if(this.useRaytracing){const e=new ArrayBuffer(Bl),r=new Float32Array(e),n=new Uint32Array(e);r.set(tn(this.camera),0),r.set(this.camera.position,16),n[19]=this.rayTracerMode,r[20]=this.a_c,r[21]=this.a_l,r[22]=this.a_q,r[23]=this.bvhDepth,n[24]=this.numBounces,n[25]=this.fastBVH.getFinalFlattenedBVHNodeCount(),n[26]=0,n[27]=0;for(let i=0;i<3&&!(i>=this.lights.length);i++){const s=this.lights[i],a=28+i*12;r.set(s.position,a),r[a+3]=s.intensity,r.set(s.direction,a+4),r[a+7]=s.coneAngle,r.set(s.color,a+8),r[a+11]=s.enabled?1:0}this.device.queue.writeBuffer(this.RO.uniformBuffer,0,e)}else{const e=new ArrayBuffer(xl),r=new Float32Array(e);r.set(this.camera.viewMatrix,0),r.set(this.camera.projectionMatrix,16),r.set(this.camera.position,32),r[36]=this.a_c,r[37]=this.a_l,r[38]=this.a_q,r[39]=0;for(let n=0;n<3&&!(n>=this.lights.length);n++){const i=this.lights[n],s=40+n*12;r.set(i.position,s),r[s+3]=i.intensity,r.set(i.direction,s+4),r[s+7]=i.coneAngle,r.set(i.color,s+8),r[s+11]=i.enabled?1:0}this.device.queue.writeBuffer(this.NO.uniformBuffer,0,e)}}animate(){const e=this.NO.sceneInformation.meshes,r=e.length,n=performance.now()*.001;let i=this.seed+777|0;const s=()=>{i=i+1831565813|0;let l=Math.imul(i^i>>>15,1|i);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},a=(l,u)=>s()*(u-l)+l,o=Math.min(10,r-1);for(let l=0;l<o;l++){const u=l+1,c=e[u],f=a(20,80),d=a(.3,1.5),m=a(0,Math.PI*2),h=s(),p=c.GetTransform().scale[0],b=a(-60,60),g=a(-60,60);let v,S,y;const P=n*d+m;if(h<.25)v=b+f*Math.sin(P),y=g+f*Math.sin(P)*Math.cos(P),S=p;else if(h<.5){const M=a(.3,.8);v=b+f*Math.cos(P),y=g+f*M*Math.sin(P),S=p+Math.abs(Math.sin(P*2))*15}else if(h<.75){const M=a(0,Math.PI*2),G=Math.sin(P)*f;v=b+Math.cos(M)*G,y=g+Math.sin(M)*G,S=p+Math.abs(Math.sin(P*1.5))*8}else{const M=f*(.5+.5*Math.sin(P*.3));v=b+M*Math.cos(P),y=g+M*Math.sin(P),S=p}c.SetTranslation(E(v,S,y)),this.device?.queue.writeBuffer(this.NO.meshesModelMatrixBuffers[u],0,c.GetFlatWorldMatrix()),this.device?.queue.writeBuffer(this.NO.meshesNormalMatrixBuffers[u],0,c.GetFlatNormalMatrix()),this.device?.queue.writeBuffer(this.RO.meshInstancesStorageBuffer,u*Al,c.GetFlatInverseWorldMatrix());const C=c.getWorldVertexData(),A=c.getWorldNormalData(),R=this.RO.perMeshWorldPositionOffsets[u];this.device?.queue.writeBuffer(this.RO.worldPositionStorageBuffer,R,C),this.device?.queue.writeBuffer(this.RO.worldNormalStorageBuffer,R,A)}}mainLoop(){if(this.device===null||this.canvas===null)return;let e=0,r=0,n=0;const i=async s=>{if(this.canvas===null||this.device===null||this.context===null)return;const a=s-e;e=s;const o=performance.now();this.handleInput(),this.updateUniforms(),this.animate();const l=this.device.createCommandEncoder({label:"BVH Build Encoder"});this.fastBVH.clearAtomicCounters(l);const u=l.beginComputePass({label:"Fast parallel BVH Compute Pass",...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:2,endOfPassWriteIndex:3}}});this.fastBVH.dispatch(u),u.end(),this.fastBVH.minMaxReadbackBuffer?.mapState==="unmapped"&&this.fastBVH.debug&&this.fastBVH.copyResultForReadback(l),this.device.queue.submit([l.finish()]),await this.device.queue.onSubmittedWorkDone();const c=this.context.getCurrentTexture().createView(),f=this.useRaytracing?void 0:{view:this.NO.depthTexture.createView(),depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1},d={label:"basic canvas renderPass",colorAttachments:[{view:c,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:f,...this.timestampQuerySet!=null&&{timestampWrites:{querySet:this.timestampQuerySet.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}},m=this.device.createCommandEncoder({label:"Render Quad Encoder"}),h=m.beginRenderPass(d);if(this.useRaytracing)h.setPipeline(this.RO.pipeline),h.setBindGroup(0,this.RO.bindGroup),h.setBindGroup(1,this.RO.materialBindGroup),h.draw(6);else{h.setPipeline(this.NO.pipeline),h.setBindGroup(0,this.NO.bindGroup);for(let g=0;g<this.NO.sceneInformation.meshes.length;g++)h.setBindGroup(1,this.NO.materialBindGroups[g]),h.setVertexBuffer(0,this.NO.positionBuffers[g]),h.setVertexBuffer(1,this.NO.normalBuffers[g]),h.setVertexBuffer(2,this.NO.uvBuffers[g]),h.setIndexBuffer(this.NO.indexBuffers[g],"uint16"),h.drawIndexed(this.NO.indexBuffers[g].size/2,1,0,0,0);this.showBVH&&(h.setPipeline(this.NO.bvhDrawPipeline),h.setBindGroup(0,this.NO.bindGroup),h.setBindGroup(1,this.NO.bvhDebugBindGroup),h.setVertexBuffer(0,this.NO.bvhLineGeometryBuffers[0]),h.draw(this.NO.bvhLineCounts[0]))}h.end(),this.timestampQuerySet!=null&&(m.resolveQuerySet(this.timestampQuerySet.querySet,0,this.timestampQuerySet.querySet.count,this.timestampQuerySet.resolveBuffer,0),this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&m.copyBufferToBuffer(this.timestampQuerySet.resolveBuffer,0,this.timestampQuerySet.resultBuffer,0,this.timestampQuerySet.resultBuffer.size));const p=m.finish();this.device.queue.submit([p]),this.fastBVH.minMaxReadbackBuffer?.mapState==="unmapped"&&this.fastBVH.debug&&this.fastBVH.minMaxReadbackBuffer.mapAsync(GPUMapMode.READ).then(()=>{const g=new Float32Array(this.fastBVH.minMaxReadbackBuffer.getMappedRange());this.minMaxBoundsText=`Min: (${g[0].toFixed(1)}, ${g[1].toFixed(1)}, ${g[2].toFixed(1)}) Max: (${g[3].toFixed(1)}, ${g[4].toFixed(1)}, ${g[5].toFixed(1)})`,this.fastBVH.minMaxReadbackBuffer.unmap()}),this.timestampQuerySet!=null&&this.timestampQuerySet.resultBuffer.mapState==="unmapped"&&this.timestampQuerySet.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const g=new BigUint64Array(this.timestampQuerySet.resultBuffer.getMappedRange());r=Number(g[1]-g[0]),n=Number(g[3]-g[2]),this.timestampQuerySet.resultBuffer.unmap()});const b=performance.now()-o;if(this.infoElement&&this.device){const g=`                FPS: ${(1e3/a).toFixed(1)}
                JS Time: ${b.toFixed(1)} ms
                RGPU: ${(r/1e6).toFixed(2)} ms
                CGPU: ${(n/1e6).toFixed(2)} ms
                Num Triangles: ${this.fastBVH.numTriangles}
                ${this.fastBVH.debug?this.minMaxBoundsText:""}
                `;this.infoElement.textContent=g}or(1e3/a),this.animationFrameId=requestAnimationFrame(i)};this.animationFrameId=requestAnimationFrame(i),this.resizeObserver=new ResizeObserver(s=>{for(const a of s){const o=a.contentBoxSize[0].inlineSize,l=a.contentBoxSize[0].blockSize;this.canvas&&this.device&&(this.canvas.width=Math.max(1,Math.min(o,this.device.limits.maxTextureDimension2D)),this.canvas.height=Math.max(1,Math.min(l,this.device.limits.maxTextureDimension2D)),$r(this.camera,this.canvas.width/this.canvas.height),this.NO.depthTexture&&(this.NO.depthTexture.destroy(),this.NO.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})))}}),this.resizeObserver.observe(this.canvas)}async cleanup(){if(await this.smallCleanup(),this.removeContextMenu(),this.infoElement)for(;this.infoElement.firstChild;)this.infoElement.removeChild(this.infoElement.firstChild)}async smallCleanup(){this.removeInputHandlers(),lr(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&this.canvas&&(this.resizeObserver.unobserve(this.canvas),this.resizeObserver=null)}changeMeshMaterial(e,r){if(e<0||e>=(this.meshesInfo?.meshIndices.length||0))return;const n=r.name,i=this.NO.sceneInformation.meshes.findIndex(u=>u.Material.name===n);if(i===-1)return;this.meshesInfo.meshMaterials[e]=r,this.NO.sceneInformation.meshes[i].Material=r;const s=this.meshesInfo.meshIndices[e],a=Un(r);let o=this.NO.materialUniforms[s];this.device.queue.writeBuffer(o,0,a);const l=s*pt*4;this.device.queue.writeBuffer(this.RO.materialBuffer,l,a)}recreateBindGroup(e){const r=e.name,n=this.NO.sceneInformation.meshes.findIndex(a=>a.Material.name===r);if(n===-1)return;const i=this.device.createBindGroup({label:"Material Bind Group "+n,layout:this.NO.materialUniformBindGroupLayout,entries:[{binding:0,resource:{buffer:this.NO.materialUniforms[n]}},{binding:1,resource:this.NO.sampler},{binding:2,resource:e.albedoGPUTexture?e.albedoGPUTexture.createView():we(this.device).createView()},{binding:3,resource:e.metalnessGPUTexture?e.metalnessGPUTexture.createView():we(this.device).createView()},{binding:4,resource:e.roughnessGPUTexture?e.roughnessGPUTexture.createView():we(this.device).createView()},{binding:5,resource:e.normalGPUTexture?e.normalGPUTexture.createView():we(this.device).createView()},{binding:6,resource:{buffer:this.NO.meshesModelMatrixBuffers[n]}},{binding:7,resource:{buffer:this.NO.meshesNormalMatrixBuffers[n]}}]});this.NO.materialBindGroups[n]=i;var s=e.textureIndex;for(let a=0;a<4;a++){const o=(()=>{switch(a){case 0:return e.albedoTexture;case 1:return e.metalnessTexture;case 2:return e.roughnessTexture;case 3:return e.normalTexture}})()||nr(1024,32);this.device.queue.copyExternalImageToTexture({source:o},{texture:this.RO.textureArray,origin:[0,0,s*4+a]},[1024,1024])}}rayCastOnMeshes(e,r){if(this.canvas===null||this.camera===null||this.meshesInfo===null)return-1;const i=this.meshesInfo.meshIndices.map(p=>this.NO.sceneInformation.meshes[p]),s=this.canvas.getBoundingClientRect(),a=e-s.left,o=r-s.top,l=this.canvas.width/s.width,u=this.canvas.height/s.height,c=2*a*l/this.canvas.width-1,f=1-2*o*u/this.canvas.height,d=Fi(this.camera,c,f);let m=-1,h=Number.POSITIVE_INFINITY;for(let p=0;p<i.length;p++){const g=i[p].intersectMeshWithRay(d,this.bvhDepth);g<0||g<h&&(h=g,m=p)}return m}spawnMaterialContextMenu(e,r,n){if(this.canvas===null)return;this.removeContextMenu();const i=this.meshesInfo?.meshMaterials?.[e];if(!i)return;this.activeContextMenu=Di({x:r,y:n},i,a=>{this.changeMeshMaterial(e,a)},()=>{this.removeContextMenu()}),document.body.appendChild(this.activeContextMenu);const s=a=>{this.activeContextMenu&&!this.activeContextMenu.contains(a.target)&&(this.removeContextMenu(),document.removeEventListener("mousedown",s))};setTimeout(()=>{document.addEventListener("mousedown",s)},0)}removeContextMenu(){this.activeContextMenu&&(this.activeContextMenu.remove(),this.activeContextMenu=null)}fetchTextureForMaterial(e,r,n){if(!e){console.error("Material is undefined when trying to fetch texture with name:",n,"and type:",ne[r]);return}Wi(n).then(s=>{const a=Ki(s,1024,1024),o=qi(this.device,a);switch(r){case ne.Albedo:e.albedoTexture=a,e.albedoGPUTexture=o;break;case ne.Metalness:e.metalnessTexture=a,e.metalnessGPUTexture=o;break;case ne.Roughness:e.roughnessTexture=a,e.roughnessGPUTexture=o;break;case ne.Normal:e.normalTexture=a,e.normalGPUTexture=o;break}this.recreateBindGroup(e)}).catch(s=>{console.error("Error loading texture with name:",n,"and type:",ne[r],s)})}removeInputHandlers(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),this.canvas&&this.canvas.removeEventListener("mousedown",this.onMouseDown)}}const Hx={class:"flex justify-center items-center w-full h-full"},kx={id:"indexingContainer",class:"w-[10%] h-full bg-gray-800 flex flex-col justify-start items-center py-1 overflow-y-auto"},jx=["onClick","onMouseenter"],zx={id:"utils-wrapper",class:"absolute bottom-0 right-0 flex flex-col items-end"},Wx={id:"utils",class:"p-1 bg-gray-700"},qx=12,Kx=eu({__name:"App",setup(t){const e=Tt(null),r=Tt(null),n=Tt(null),i=Tt(!1),s=[Wh,Xh,um,g2,M2,dv,Pv,Ov,Nv,qv,ex,cx,yx,Nx],a=s.length,o=["Basic Start","Compute Basics","Variables and Uniforms","Storage Buffer Instancing","Vertex and Index Buffers","Video","Game","Ray Trace","Transparency","PBR","BVH","Monte Carlo","Radix Sort","Fast BVH"],l=Tt(null),u=Tt(0),c=Tt(0),f=Tt(!0);function d(){const P=window.location.pathname.split("/").filter(Boolean),C=P.at(-1),A=Number.parseInt(C??"",10);if(!Number.isNaN(A)&&A>=1&&A<=a){const R=P.slice(0,-1);return{exampleIndex:A,basePath:R.length>0?`/${R.join("/")}`:""}}return{exampleIndex:qx,basePath:P.length>0?`/${P.join("/")}`:""}}const{basePath:m}=d();function h(P){window.history.replaceState(null,"",`${m}/${P}`)}async function p(P){if(!i.value){if(i.value=!0,h(P),n.value&&typeof n.value.cleanup=="function"&&(await n.value.cleanup(),n.value=null),e.value){const C=s[P-1];C&&(n.value=await C(e.value))}i.value=!1}}function b(P,C){l.value=P;const A=C.currentTarget,R=A.parentElement;if(R){const M=R.getBoundingClientRect(),G=A.getBoundingClientRect();u.value=G.top-M.top,c.value=G.height}}function g(){l.value=null}const v=wn(()=>l.value!==null?o[l.value-1]:""),S=wn(()=>l.value===null?{top:u.value+"px",height:c.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"}:{top:u.value+"px",height:c.value+"px",transition:"top 0.2s cubic-bezier(0.4,0,0.2,1), height 0.2s cubic-bezier(0.4,0,0.2,1)"});function y(){f.value=!f.value}return iu(async()=>{Uu(),await Yl(),r.value&&_h(r.value);const{exampleIndex:P}=d();p(P)}),(P,C)=>(Lr(),Nr("div",Hx,[_e("div",kx,[(Lr(!0),Nr(mt,null,au(ql(a),A=>(Lr(),Nr("button",{key:A,class:"w-full h-20 last:mb-0 border border-gray-300 hover:bg-amber-300 active:bg-amber-500 text-lg font-bold shadow flex-shrink-0 relative",tabindex:"-1",onClick:()=>p(A),onKeydown:[C[0]||(C[0]=po(mo(()=>{},["prevent"]),["space"])),C[1]||(C[1]=po(mo(()=>{},["prevent"]),["enter"]))],onMouseenter:R=>b(A,R),onMouseleave:g},_r(A),41,jx))),128))]),_e("canvas",{id:"webgpuCanvas",ref_key:"webgpuCanvas",ref:e,class:"w-[90%] h-full"},null,512),C[2]||(C[2]=_e("pre",{id:"info",class:"absolute top-0 right-0 p-4"},null,-1)),Zt(kh,{id:"profiler",class:"absolute top-2 left-[calc(10%+0.5rem)] w-48",ref_key:"profiler",ref:r,maxBars:60},null,512),_e("div",zx,[_e("button",{onClick:y,class:"m-0 p-0 bg-white text-black flex items-center"},[_e("img",{src:ch,class:Tn([f.value?"rotate-90":"-rotate-90","w-6 h-6 transition-transform duration-200"])},null,2),Pu(" "+_r(f.value?"Hide":"Show")+" Utils ",1)]),Of(_e("pre",Wx,null,512),[[Hd,f.value]])]),_e("div",{class:Tn(["absolute left-[10%] w-[25%] bg-gray-700 text-white flex items-center justify-center font-bold text-lg pointer-events-none select-none shadow-lg origin-left transition-all duration-200",l.value===null?"opacity-0 scale-x-0":"opacity-100 scale-x-100"]),style:kr(S.value)},_r(v.value),7)]))}}),Jx=(t,e)=>{const r=t.__vccOpts||t;for(const[n,i]of e)r[n]=i;return r},Yx=Jx(Kx,[["__scopeId","data-v-30c3b32e"]]);oh(Yx).mount("#app");
