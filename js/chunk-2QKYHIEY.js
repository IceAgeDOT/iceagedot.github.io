import{a as d}from"./chunk-Z2YK7PLL.js";import{c as i,d as l}from"./chunk-SVIBNQTM.js";i();var c=(e,t=document)=>e[0]==="#"?t.getElementById(e.substring(1)):t.querySelector(e);c.all=(e,t=document)=>t.querySelectorAll(e);c.each=(e,t,n)=>{c.all(e,n).forEach(t)};i();var f=function(e,t){let n=e.parentNode;n.lastChild===e?n.appendChild(t):n.insertBefore(t,e.nextSibling)},A=function(e,t,n,s){let o=document.createElement(t);switch(Object.assign(o,n),s){case"after":f(e,o);break;case"replace":e.innerHTML="",e.appendChild(o);break;default:e.appendChild(o)}return o},D=function(e,t){let n=document.createElement("div");Object.assign(n,t),e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)},R=function(e){return e.getBoundingClientRect().height},_=function(e,t){e.style.width=typeof t=="number"?t+"rem":t},F=function(e){return e.getBoundingClientRect().width},x=function(e){return e.getBoundingClientRect().top},q=function(e){return e.getBoundingClientRect().left},Y=function(e){return e.style.display},a=function(e,t){return e.style.display=t,e};function m(){Object.assign(HTMLElement.prototype,{find(e){return c.all(e,this)},_class(e,t,n){(t.indexOf(" ")?t.split(" "):[t]).forEach(o=>{e==="toggle"?this.classList.toggle(o,n):this.classList[e](o)})},addClass(e){return this._class("add",e),this},removeClass(e){return this._class("remove",e),this},toggleClass(e,t){return this._class("toggle",e,t),this},hasClass(e){return this.classList.contains(e)}})}i();var u=l;m();var J=u.statics.indexOf("//")>0?u.statics:u.root,X={x:0,y:0},b=0,h,T,Q=document.getElementsByTagName("body")[0],z=document.documentElement,K=document.getElementById("container"),V=document.getElementById("loading"),E=document.getElementById("nav"),Z=document.getElementById("header"),ee=E.querySelector(".toggle"),te=document.getElementById("quick"),ne=document.getElementById("sidebar"),oe=document.getElementById("brand"),y=document.getElementById("tool"),v,H,L,M,C=document.getElementById("search"),p,k,B,O=window.innerHeight,I=window.innerWidth,N=0,S=window.location.href,j;function ie(e){p=e}function re(e){k=e}function se(e){B=e}function le(e){O=e}function ce(e){I=e}function ae(e){b=e}function de(e){T=e}function me(e){N=e}function ue(e){S=e}function pe(e){j=e}function ge(e){h=e}function xe(e){v=e}function fe(e){H=e}function be(e){L=e}function he(e){M=e}function Te(e){y=e}function Ee(e){C=e}i();var Ce=(e,t,n,s)=>{let o,r="none";switch(t){case 0:o={opacity:[1,0]};break;case 1:o={opacity:[0,1]},r="block";break;case"bounceUpIn":o={begin(g){a(e,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},r="block";break;case"shrinkIn":o={begin(g){a(e,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},r="block";break;case"slideRightIn":o={begin(g){a(e,"block")},translateX:["100%","0%"],opacity:[0,1]},r="block";break;case"slideRightOut":o={translateX:["0%","100%"],opacity:[1,0]};break;default:o=t,r=t.display;break}d(Object.assign({targets:e,duration:200,easing:"linear",begin(){s&&s()},complete(){a(e,r),n&&n()}},o)).play()},ke=(e,t,n)=>{d({targets:typeof t=="number"&&typeof e!="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e?x(e)+document.documentElement.scrollTop-p:0),complete(){n&&n()}}).play()};export{c as a,f as b,A as c,D as d,R as e,_ as f,F as g,q as h,Y as i,a as j,m as k,u as l,J as m,X as n,b as o,h as p,T as q,Q as r,z as s,K as t,V as u,E as v,Z as w,ee as x,te as y,ne as z,oe as A,y as B,v as C,H as D,L as E,M as F,C as G,k as H,B as I,I as J,N as K,S as L,j as M,ie as N,re as O,se as P,le as Q,ce as R,ae as S,de as T,me as U,ue as V,pe as W,ge as X,xe as Y,fe as Z,be as _,he as $,Te as aa,Ee as ba,Ce as ca,ke as da};
/*! For license information please see chunk-2QKYHIEY.js.LEGAL.txt */