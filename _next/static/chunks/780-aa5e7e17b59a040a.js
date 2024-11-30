"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{767:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(2800).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},3610:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},8166:(e,t,n)=>{n.d(t,{A:()=>i,q:()=>a});var r=n(2115),o=n(5155);function a(e,t){let n=r.createContext(t),a=e=>{let{children:t,...a}=e,i=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(n.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=r.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],a=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return a.scopeName=e,[function(t,a){let i=r.createContext(a),u=n.length;n=[...n,a];let c=t=>{let{scope:n,children:a,...c}=t,l=n?.[e]?.[u]||i,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:a})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[u]||i,l=r.useContext(c);if(l)return l;if(void 0!==a)return a;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(a,...t)]}},9930:(e,t,n)=>{n.d(t,{bm:()=>ti,UC:()=>tr,VY:()=>ta,hJ:()=>tn,ZL:()=>tt,bL:()=>e4,hE:()=>to,l9:()=>te});var r,o,a,i=n(2115),u=n.t(i,2),c=n(3610),l=n(8068),s=n(8166),d=n(6611),f=u["useId".toString()]||(()=>void 0),v=0;function p(e){let[t,n]=i.useState(f());return(0,d.N)(()=>{e||n(e=>e??String(v++))},[e]),e||(t?`radix-${t}`:"")}var m=n(1524),h=n(3360),g=n(5155),y="dismissableLayer.update",b=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),E=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:u,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:f,onDismiss:v,...p}=e,E=i.useContext(b),[N,x]=i.useState(null),S=null!==(r=null==N?void 0:N.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=i.useState({}),O=(0,l.s)(t,e=>x(e)),D=Array.from(E.layers),[P]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),L=D.indexOf(P),M=N?D.indexOf(N):-1,T=E.layersWithOutsidePointerEventsDisabled.size>0,A=M>=L,k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,m.c)(e),o=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){C("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!A||n||(null==s||s(e),null==f||f(e),e.defaultPrevented||null==v||v())},S),I=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,m.c)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&C("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(null==d||d(e),null==f||f(e),e.defaultPrevented||null==v||v())},S);return!function(e,t=globalThis?.document){let n=(0,m.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{M!==E.layers.size-1||(null==u||u(e),!e.defaultPrevented&&v&&(e.preventDefault(),v()))},S),i.useEffect(()=>{if(N)return a&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(o=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(N)),E.layers.add(N),w(),()=>{a&&1===E.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=o)}},[N,S,a,E]),i.useEffect(()=>()=>{N&&(E.layers.delete(N),E.layersWithOutsidePointerEventsDisabled.delete(N),w())},[N,E]),i.useEffect(()=>{let e=()=>R({});return document.addEventListener(y,e),()=>document.removeEventListener(y,e)},[]),(0,g.jsx)(h.sG.div,{...p,ref:O,style:{pointerEvents:T?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,c.m)(e.onFocusCapture,I.onFocusCapture),onBlurCapture:(0,c.m)(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:(0,c.m)(e.onPointerDownCapture,k.onPointerDownCapture)})});function w(){let e=new CustomEvent(y);document.dispatchEvent(e)}function C(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,h.hO)(a,i):a.dispatchEvent(i)}E.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(b),r=i.useRef(null),o=(0,l.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,g.jsx)(h.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var N="focusScope.autoFocusOnMount",x="focusScope.autoFocusOnUnmount",S={bubbles:!1,cancelable:!0},R=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[c,s]=i.useState(null),d=(0,m.c)(o),f=(0,m.c)(a),v=i.useRef(null),p=(0,l.s)(t,e=>s(e)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(y.paused||!c)return;let t=e.target;c.contains(t)?v.current=t:P(v.current,{select:!0})},t=function(e){if(y.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||P(v.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&P(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,y.paused]),i.useEffect(()=>{if(c){L.add(y);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(N,S);c.addEventListener(N,d),c.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(P(r,{select:t}),document.activeElement!==n)return}(O(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&P(c))}return()=>{c.removeEventListener(N,d),setTimeout(()=>{let t=new CustomEvent(x,S);c.addEventListener(x,f),c.dispatchEvent(t),t.defaultPrevented||P(null!=e?e:document.body,{select:!0}),c.removeEventListener(x,f),L.remove(y)},0)}}},[c,d,f,y]);let b=i.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=O(e);return[D(t,e),D(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&P(a,{select:!0})):(e.preventDefault(),n&&P(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,g.jsx)(h.sG.div,{tabIndex:-1,...u,ref:p,onKeyDown:b})});function O(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function D(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function P(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}R.displayName="FocusScope";var L=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=M(e,t)).unshift(t)},remove(t){var n;null===(n=(e=M(e,t))[0])||void 0===n||n.resume()}}}();function M(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var T=n(7650),A=i.forwardRef((e,t)=>{var n,r;let{container:o,...a}=e,[u,c]=i.useState(!1);(0,d.N)(()=>c(!0),[]);let l=o||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return l?T.createPortal((0,g.jsx)(h.sG.div,{...a,ref:t}),l):null});A.displayName="Portal";var k=n(7028),I=0;function j(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var W=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),B="width-before-scroll-bar";function U(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var G="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,K=new WeakMap;function X(e){return e}var $=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=X),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=F({async:!0,ssr:!1},e),o}(),Y=function(){},q=i.forwardRef(function(e,t){var n,r,o,a,u=i.useRef(null),c=i.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),l=c[0],s=c[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,N=_(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[u,t],r=function(e){return n.forEach(function(t){return U(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,G(function(){var e=K.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||U(e,null)}),r.forEach(function(e){t.has(e)||U(e,o)})}K.set(a,n)},[n]),a),S=F(F({},N),l);return i.createElement(i.Fragment,null,m&&i.createElement(g,{sideCar:$,removeScrollBar:p,shards:h,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:u,gapMode:C}),d?i.cloneElement(i.Children.only(f),F(F({},S),{ref:x})):i.createElement(void 0===w?"div":w,F({},S,{className:v,ref:x}),f))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},q.classNames={fullWidth:B,zeroRight:W};var z=function(e){var t=e.sideCar,n=_(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,F({},n))};z.isSideCarExport=!0;var Z=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},H=function(){var e=Z();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},V=function(){var e=H();return function(t){return e(t.styles,t.dynamic),null}},J={left:0,top:0,right:0,gap:0},Q=function(e){return parseInt(e||"",10)||0},ee=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[Q(n),Q(r),Q(o)]},et=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return J;var t=ee(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},en=V(),er="data-scroll-locked",eo=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(er,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(W," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(B," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(W," .").concat(W," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(B," .").concat(B," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(er,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},ea=function(){var e=parseInt(document.body.getAttribute(er)||"0",10);return isFinite(e)?e:0},ei=function(){i.useEffect(function(){return document.body.setAttribute(er,(ea()+1).toString()),function(){var e=ea()-1;e<=0?document.body.removeAttribute(er):document.body.setAttribute(er,e.toString())}},[])},eu=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ei();var a=i.useMemo(function(){return et(o)},[o]);return i.createElement(en,{styles:eo(a,!t,o,n?"":"!important")})},ec=!1;if("undefined"!=typeof window)try{var el=Object.defineProperty({},"passive",{get:function(){return ec=!0,!0}});window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch(e){ec=!1}var es=!!ec&&{passive:!1},ed=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ef=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ev(e,r)){var o=ep(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ev=function(e,t){return"v"===e?ed(t,"overflowY"):ed(t,"overflowX")},ep=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},em=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var p=ep(e,c),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&ev(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-u>v)&&(s=!0),s},eh=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eg=function(e){return[e.deltaX,e.deltaY]},ey=function(e){return e&&"current"in e?e.current:e},eb=0,eE=[];let ew=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(eb++)[0],a=i.useState(V)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ey),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=eh(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ef(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ef(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return em(v,t,e,"h"===v?c:l,!0)},[]),l=i.useCallback(function(e){if(eE.length&&eE[eE.length-1]===a){var n="deltaY"in e?eg(e):eh(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(ey).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=eh(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,eg(t),t.target,c(t,e.lockRef.current))},[]),v=i.useCallback(function(t){s(t.type,eh(t),t.target,c(t,e.lockRef.current))},[]);i.useEffect(function(){return eE.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",l,es),document.addEventListener("touchmove",l,es),document.addEventListener("touchstart",d,es),function(){eE=eE.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,es),document.removeEventListener("touchmove",l,es),document.removeEventListener("touchstart",d,es)}},[]);var p=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?i.createElement(eu,{gapMode:e.gapMode}):null)},$.useMedium(r),z);var eC=i.forwardRef(function(e,t){return i.createElement(q,F({},e,{ref:t,sideCar:ew}))});eC.classNames=q.classNames;var eN=new WeakMap,ex=new WeakMap,eS={},eR=0,eO=function(e){return e&&(e.host||eO(e.parentNode))},eD=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eO(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eS[n]||(eS[n]=new WeakMap);var a=eS[n],i=[],u=new Set,c=new Set(o),l=function(e){!e||u.has(e)||(u.add(e),l(e.parentNode))};o.forEach(l);var s=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(eN.get(e)||0)+1,l=(a.get(e)||0)+1;eN.set(e,c),a.set(e,l),i.push(e),1===c&&o&&ex.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eR++,function(){i.forEach(function(e){var t=eN.get(e)-1,o=a.get(e)-1;eN.set(e,t),a.set(e,o),t||(ex.has(e)||e.removeAttribute(r),ex.delete(e)),o||e.removeAttribute(n)}),--eR||(eN=new WeakMap,eN=new WeakMap,ex=new WeakMap,eS={})}},eP=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eD(o,a,n,"aria-hidden")):function(){return null}},eL=n(2317),eM="Dialog",[eT,eA]=(0,s.A)(eM),[ek,eI]=eT(eM),ej=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,c=i.useRef(null),l=i.useRef(null),[s=!1,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=i.useState(e),[r]=n,o=i.useRef(r),a=(0,m.c)(t);return i.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:r,c=(0,m.c)(n);return[u,i.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else o(t)},[a,e,o,c])]}({prop:r,defaultProp:o,onChange:a});return(0,g.jsx)(ek,{scope:t,triggerRef:c,contentRef:l,contentId:p(),titleId:p(),descriptionId:p(),open:s,onOpenChange:d,onOpenToggle:i.useCallback(()=>d(e=>!e),[d]),modal:u,children:n})};ej.displayName=eM;var eF="DialogTrigger",e_=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eF,n),a=(0,l.s)(t,o.triggerRef);return(0,g.jsx)(h.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e6(o.open),...r,ref:a,onClick:(0,c.m)(e.onClick,o.onOpenToggle)})});e_.displayName=eF;var eW="DialogPortal",[eB,eU]=eT(eW,{forceMount:void 0}),eG=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eI(eW,t);return(0,g.jsx)(eB,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,g.jsx)(k.C,{present:n||a.open,children:(0,g.jsx)(A,{asChild:!0,container:o,children:e})}))})};eG.displayName=eW;var eK="DialogOverlay",eX=i.forwardRef((e,t)=>{let n=eU(eK,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eI(eK,e.__scopeDialog);return a.modal?(0,g.jsx)(k.C,{present:r||a.open,children:(0,g.jsx)(e$,{...o,ref:t})}):null});eX.displayName=eK;var e$=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eK,n);return(0,g.jsx)(eC,{as:eL.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,g.jsx)(h.sG.div,{"data-state":e6(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eY="DialogContent",eq=i.forwardRef((e,t)=>{let n=eU(eY,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eI(eY,e.__scopeDialog);return(0,g.jsx)(k.C,{present:r||a.open,children:a.modal?(0,g.jsx)(ez,{...o,ref:t}):(0,g.jsx)(eZ,{...o,ref:t})})});eq.displayName=eY;var ez=i.forwardRef((e,t)=>{let n=eI(eY,e.__scopeDialog),r=i.useRef(null),o=(0,l.s)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return eP(e)},[]),(0,g.jsx)(eH,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,c.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,c.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,c.m)(e.onFocusOutside,e=>e.preventDefault())})}),eZ=i.forwardRef((e,t)=>{let n=eI(eY,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,g.jsx)(eH,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eH=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,c=eI(eY,n),s=i.useRef(null),d=(0,l.s)(t,s);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:j()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:j()),I++,()=>{1===I&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),I--}},[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(R,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,g.jsx)(E,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":e6(c.open),...u,ref:d,onDismiss:()=>c.onOpenChange(!1)})}),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(e7,{titleId:c.titleId}),(0,g.jsx)(e9,{contentRef:s,descriptionId:c.descriptionId})]})]})}),eV="DialogTitle",eJ=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eV,n);return(0,g.jsx)(h.sG.h2,{id:o.titleId,...r,ref:t})});eJ.displayName=eV;var eQ="DialogDescription",e0=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eQ,n);return(0,g.jsx)(h.sG.p,{id:o.descriptionId,...r,ref:t})});e0.displayName=eQ;var e1="DialogClose",e2=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(e1,n);return(0,g.jsx)(h.sG.button,{type:"button",...r,ref:t,onClick:(0,c.m)(e.onClick,()=>o.onOpenChange(!1))})});function e6(e){return e?"open":"closed"}e2.displayName=e1;var e5="DialogTitleWarning",[e8,e3]=(0,s.q)(e5,{contentName:eY,titleName:eV,docsSlug:"dialog"}),e7=e=>{let{titleId:t}=e,n=e3(e5),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e9=e=>{let{contentRef:t,descriptionId:n}=e,r=e3("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e4=ej,te=e_,tt=eG,tn=eX,tr=eq,to=eJ,ta=e0,ti=e2},7028:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(2115),o=n(8068),a=n(6611),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=r.useState(),c=r.useRef({}),l=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(c.current);s.current="mounted"===d?e:"none"},[d]),(0,a.N)(()=>{let t=c.current,n=l.current;if(n!==e){let r=s.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),l.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=u(c.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(s.current=u(c.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(t),c="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),l=(0,o.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(c));return"function"==typeof n||i.isPresent?r.cloneElement(c,{ref:l}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},3360:(e,t,n)=>{n.d(t,{hO:()=>c,sG:()=>u});var r=n(2115),o=n(7650),a=n(2317),i=n(5155),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?a.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},1524:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(2115);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},6611:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(2115),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);