(()=>{var n={28:(n,e,r)=>{"use strict";r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"\n::-webkit-scrollbar {\n  width: 8px;\n  background: var(--color-blue-2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-grey-2);\n  border-radius: 10px;\n}\n\n:root {\n  --color-blue-1: #0d1117;\n  --color-blue-2: #161b22;\n  --color-blue-3: #86a6bc;\n  --color-grey-1: #888;\n  --color-grey-2: #b1b3b7;\n  --radius-4: 4px;\n  --transition-3: ease 300ms;\n}\n\n:focus {\n  opacity: 0.9;\n  outline: transparent;\n  box-shadow: 0 0 4px 1px var(--color-grey-1);\n}\n\n::-webkit-scrollbar-thumb:hover { background: var(--color-grey-1); }\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 1.125rem;\n  line-height: 1.6;\n  color: var(--color-blue-3);\n  background: var(--color-blue-1);\n}\n\nheader { padding: 1em; }\n\nh1 {\n  width: max-content;\n  font-size: 3.5rem;\n  position: relative;\n}\n\nh1::before {\n  position: absolute;\n  content: '';\n  width: 0.8em;\n  height: 49%;\n  bottom: -0.1em;\n  left: -0.2em;\n  border-radius: 67% 33% 44% 56% / 33% 35% 65% 67%;\n  background: var(--color-blue-3);\n  opacity: 0.8;\n}\n\nh1::after {\n  position: absolute;\n  content: '';\n  width: 0.8em;\n  height: 49%;\n  top: 0.2em;\n  right: -0.2em;\n  border-radius: 67% 33% 44% 56% / 33% 35% 65% 67%;\n  background: var(--color-blue-3);\n  opacity: 0.8;\n}\n\nh2 { font-size: 2.5rem; }\n\n.button {\n  padding: 0.5em 1em;\n  color: #fff;\n  background: var(--color-blue-3);\n  font-weight: 900;\n  border: 1px solid transparent;\n  border-radius: var(--radius-4);\n  transition: opacity var(--transition-3);\n}\n\n.button:hover {\n  opacity: 0.9;\n  outline: var(--color-blue-3);\n  box-shadow: 0 0 4px 1px var(--color-grey-1);\n}\n\nmain {\n  display: flex;\n  gap: 2em;\n  justify-content: space-around;\n  align-items: flex-start;\n  padding: 1em;\n}\n\n.scoreboard-container .head {\n  display: flex;\n  gap: 1em;\n  align-items: flex-end;\n  margin-bottom: 2em;\n}\n\n.scoreboard-container .body {\n  padding: 0.5em;\n  border: 1px solid transparent;\n}\n\n.scoreboard-container .body:hover { border: 1px dotted; }\n\n.scoreboard-container .body li {\n  list-style: none;\n  background: var(--color-blue-2);\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding: 0.5em;\n  margin-top: 0.5em;\n  border-left: 4px dotted transparent;\n  border-right: 4px dotted transparent;\n  transition: var(--transition-3);\n}\n\n.scoreboard-container .body li:hover,\n.scoreboard-container .body li:focus {\n  border-left-color: inherit;\n  border-right-color: inherit;\n}\n\n.add-score-container .head { margin-bottom: 2em; }\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1em;\n}\n\n.input-field {\n  width: 20vw;\n  max-width: 400px;\n  padding: 0.5em;\n  border: 1px solid transparent;\n  border-radius: var(--radius-4);\n}\n",""]);const s=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var b=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=r(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},143:n=>{const e=document.querySelector(".scoreboard-container"),r=document.querySelector(".scoreboard-container .body");n.exports=()=>{r.innerHTML="\n  <li>Name 400</li>\n  <li>Name 233</li>\n  <li>Name 209</li>\n  <li>Name 29</li>\n",e.appendChild(r)}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{"use strict";var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),d=r(216),l=r.n(d),u=r(589),p=r.n(u),f=r(28),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var m=r(143),v=r.n(m);window.addEventListener("load",v())})()})();