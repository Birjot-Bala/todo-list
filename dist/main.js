(()=>{"use strict";var t,e,n,i={426:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,"body {\n    font-family: 'Open Sans', sans-serif;\n\n}\n\nh1 {\n    border: 5px solid black;\n    padding: 5px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.projects ul {\n    list-style-type: none;\n}\n\n.add-button {\n    margin-left: 5px;\n}",""]);const r=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:(t,e,n)=>{var i,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function s(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},i=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var h=s(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(r[h].references++,r[h].updater(u)):r.push({identifier:d,updater:v(u,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function h(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function u(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,p=0;function v(t,e){var n,i,o;if(e.singleton){var r=p++;n=f||(f=c(e)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=c(e),i=u.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var c=a(t,e),l=0;l<n.length;l++){var d=s(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=c}}}}},o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={id:t,exports:{}};return i[t](e,e.exports,r),e.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=r(379),e=r.n(t),n=r(426),e()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,new class{constructor(t){this.doc=t,this.content=this.doc.querySelector("#content"),this.title=this.createElement("h1"),this.title.textContent="Todos Title",this.projectsDiv=this.createElement("div","projects"),this.projectsDiv.textContent="Projects",this.projectList=this.createElement("ul"),this.displayProjects([]),this.todosDiv=this.createElement("div","todos"),this.todosDiv.textContent="Todos",this.todosList=this.createElement("ol"),this.displayTodos([]),this.content.appendChild(this.title),this.projectsDiv.appendChild(this.projectList),this.todosDiv.appendChild(this.todosList),this.content.appendChild(this.projectsDiv),this.content.appendChild(this.todosDiv)}displayProjects(t){for(;this.projectList.firstChild;)this.projectList.removeChild(projectList.firstChild);if(0==t.length){const t=this.createElement("li");t.textContent="Default",this.projectList.appendChild(t)}}displayTodos(t){for(;this.todosList.firstChild;)this.todosList.removeChild(todosList.firstChild);if(0==t.length){const t=this.createElement("li");t.textContent="Default Todo",this.todosList.appendChild(t)}}createElement(t,e){const n=this.doc.createElement(t);return e&&n.classList.add(e),n}}(document)})();