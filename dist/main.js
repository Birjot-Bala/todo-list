(()=>{"use strict";var t={426:(t,e,o)=>{o.d(e,{Z:()=>n});var i=o(645),s=o.n(i)()((function(t){return t[1]}));s.push([t.id,"body {\n    font-family: 'Open Sans', sans-serif;\n\n}\n\nh1 {\n    border: 5px solid black;\n    padding: 5px;\n    margin: 0;\n}\n\nbutton > * {\n    pointer-events: none;\n}\n\n#content {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.projects {\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    align-items: left;\n    flex: 0 1 auto;\n    border-right: solid black;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\n.project-list {\n    list-style-type: none;\n    padding-left: 0;\n}\n\n.project-list li {\n    display: flex;\n    padding-bottom: 8px;\n}\n\n.add-button {\n    border: 1px solid black;\n    background-color: white;\n    border-radius: 3px;\n    cursor: pointer;\n    align-self: center;\n    display: inline-flex;\n    font-size: medium;\n}\n\n.add-button span {\n    padding-left: 8px;\n}\n\n.add-button:hover {\n    background-color: rgb(228, 226, 226);\n}\n\n.delete {\n    border-style: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.project {\n    border: 1px solid black;\n    background-color: transparent;\n    border-radius: 3px;\n    cursor: pointer;\n    font-size: medium;\n}\n\n.project:hover {\n    background-color:rgb(228, 226, 226);\n}\n\n.todos {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex: 2 1 auto;\n    text-align: center;\n}\n\n.todo-list {\n    list-style-position: inside;\n    list-style-type: none;\n    text-align: left;\n}\n\n.todo-list-item {\n    display: inline-flex;\n    align-items: center;\n    padding-bottom: 8px;\n}\n\n.complete {\n    margin-right: 16px;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: grey;\n}",""]);const n=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,i){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(i)for(var n=0;n<this.length;n++){var d=this[n][0];null!=d&&(s[d]=!0)}for(var r=0;r<t.length;r++){var a=[].concat(t[r]);i&&s[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),e.push(a))}},e}},379:(t,e,o)=>{var i,s=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),n=[];function d(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function r(t,e){for(var o={},i=[],s=0;s<t.length;s++){var r=t[s],a=e.base?r[0]+e.base:r[0],c=o[a]||0,l="".concat(a," ").concat(c);o[a]=c+1;var h=d(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==h?(n[h].references++,n[h].updater(p)):n.push({identifier:l,updater:f(p,e),references:1}),i.push(l)}return i}function a(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=o.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var d=s(t.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(e)}return e}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function h(t,e,o,i){var s=o?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,s);else{var n=document.createTextNode(s),d=t.childNodes;d[e]&&t.removeChild(d[e]),d.length?t.insertBefore(n,d[e]):t.appendChild(n)}}function p(t,e,o){var i=o.css,s=o.media,n=o.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u=null,b=0;function f(t,e){var o,i,s;if(e.singleton){var n=b++;o=u||(u=a(e)),i=h.bind(null,o,n,!1),s=h.bind(null,o,n,!0)}else o=a(e),i=p.bind(null,o,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var o=r(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<o.length;i++){var s=d(o[i]);n[s].references--}for(var a=r(t,e),c=0;c<o.length;c++){var l=d(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=a}}}},650:(t,e,o)=>{o.r(e),o.d(e,{Project:()=>s});class i{constructor(t,e,o,i,s,n){this.id=t,this.title=e,this.description=o,this.dueDate=i,this.priority=s,this.complete=n}toggleComplete(){this.complete=!this.complete}}class s{constructor(t,e,o){this.id=t,this.title=e,this.description=o,this.todos=[]}addTodo(t,e,o,s,n){const d=this.todos.length>0?this.todos[this.todos.length-1].id+1:1,r=new i(d,t,e,o,s,n);this.todos.push(r)}deleteTodo(t){this.todos=this.todos.filter((e=>e.id!==t))}editTodo(t,e,o,s,n){this.todos=this.todos.map((d=>d.id===t?new i(t,e,o,s,n):d))}toggleTodo(t){this.todos.filter((e=>e.id===t))[0].toggleComplete()}}}},e={};function o(i){if(e[i])return e[i].exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{Project:t}=o(650);var e=o(379),i=o.n(e),s=o(426);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,new class{constructor(t,e){this.model=t,this.view=e,this.subscribers={},this.subscribe("delete-project",this.model.deleteProject.bind(this.model)),this.subscribe("add-project",this.model.addProject.bind(this.model)),this.subscribe("delete-todo",this.model.deleteTodoInProject.bind(this.model)),this.subscribe("add-todo",this.model.addTodoToProject.bind(this.model)),this.subscribe("toggle-todo",this.model.toggleTodoInProject.bind(this.model)),this.subscribe("update-projects",this.view.displayProjects.bind(this.view)),this.subscribe("update-todos",this.view.displayTodos.bind(this.view)),this.model.bindProjectListChanged(this.publish.bind(this,"update-projects")),this.model.bindTodoListChanged(this.publish.bind(this,"update-todos")),this.view.bindDeleteProject(this.publish.bind(this,"delete-project")),this.view.bindAddProject(this.publish.bind(this,"add-project")),this.view.bindAddTodoToProject(this.publish.bind(this,"add-todo")),this.view.bindDeleteTodoInProject(this.publish.bind(this,"delete-todo")),this.view.bindToggleTodoInProject(this.publish.bind(this,"toggle-todo")),this.view.displayProjects(this.model.projects),this.view.displayTodos(this.model.projects[0].id,this.model.projects[0].todos)}publish(t,...e){Array.isArray(this.subscribers[t])&&this.subscribers[t].forEach((t=>{t(...e)}))}subscribe(t,e){Array.isArray(this.subscribers[t])||(this.subscribers[t]=[]),this.subscribers[t].push(e)}}(new class{constructor(){localStorage.getItem("projects")?(this.projects=this.rebuild(JSON.parse(localStorage.getItem("projects"))),0==this.projects.length&&this.addProject("Default","The default project")):(this.projects=[],this.addProject("Default","The default project"))}addProject(e,o){const i=this.projects.length>0?this.projects[this.projects.length-1].id+1:1,s=new t(i,e,o);this.projects.push(s),this.populateStorage(),this.onProjectListChanged(this.projects)}deleteProject(t){this.projects=this.projects.filter((e=>e.id!==t)),this.populateStorage(),this.onProjectListChanged(this.projects)}editProject(e,o,i){this.projects=this.projects.map((s=>s.id===e?new t(e,o,i):s)),this.populateStorage(),this.onProjectListChanged(this.projects)}addTodoToProject(t,e,o,i,s,n){const d=this.projects.filter((e=>e.id===t))[0];d.addTodo(e,o,i,s,n),this.populateStorage(),this.onTodoListChanged(d.id,d.todos)}editTodoInProject(t,e,o,i,s,n){this.projects.filter((e=>e.id===t)).editTodo(e,o,i,s,n),this.populateStorage()}deleteTodoInProject(t,e){const o=this.projects.filter((e=>e.id===t))[0];o.deleteTodo(e),this.populateStorage(),this.onTodoListChanged(o.id,o.todos)}toggleTodoInProject(t,e){const o=this.projects.filter((e=>e.id===t))[0];o.toggleTodo(e),this.populateStorage(),this.onTodoListChanged(o.id,o.todos)}bindProjectListChanged(t){this.onProjectListChanged=t}bindTodoListChanged(t){this.onTodoListChanged=t}populateStorage(){localStorage.setItem("projects",JSON.stringify(this.projects))}rebuild(e){return e.map((e=>{const o=new t(e.id,e.title,e.description);return 0!=e.todos.length&&e.todos.forEach((t=>{o.addTodo(t.title,t.description,t.dueDate,t.priority,t.complete)})),o}))}},new class{constructor(t){this.doc=t,this.content=this.doc.querySelector("#content"),this.title=this.createElement("h1"),this.title.textContent="Todo List",this.projectsDiv=this.createElement("div","projects"),this.projectsHeader=this.createElement("h2"),this.projectsHeader.textContent="Projects",this.addProjectButton=this.createElement("button","add-button"),this.addProjectButton.textContent="Add Project",this.addProjectButton.appendChild(this._createAddIcon()),this.projectList=this.createElement("ul","project-list"),this.todosDiv=this.createElement("div","todos"),this.todosHeader=this.createElement("h2"),this.todosHeader.textContent="Todos",this.addTodoButton=this.createElement("button","add-button"),this.addTodoButton.textContent="Add Todo",this.addTodoButton.appendChild(this._createAddIcon()),this.todosList=this.createElement("ol","todo-list"),this.content.parentNode.insertBefore(this.title,this.content),this.projectsDiv.appendChild(this.projectsHeader),this.projectsDiv.appendChild(this.projectList),this.todosDiv.appendChild(this.todosHeader),this.todosDiv.appendChild(this.addTodoButton),this.todosDiv.appendChild(this.todosList),this.content.appendChild(this.projectsDiv),this.content.appendChild(this.todosDiv)}displayProjects(t){for(;this.projectList.firstChild;)this.projectList.removeChild(this.projectList.firstChild);t.forEach(((t,e)=>{const o=this.createElement("li"),i=this.createElement("button","project");if(o.id=t.id,i.textContent=t.title,o.appendChild(i),i.addEventListener("click",(()=>{this.displayTodos(t.id,t.todos),this.addTodoButton.disabled=!1})),0!=e){const t=this.createElement("button","delete");t.appendChild(this._createDeleteIcon()),o.append(t)}this.projectList.appendChild(o)})),this.projectList.appendChild(this.addProjectButton)}displayTodos(t,e){for(;this.todosList.firstChild;)this.todosList.removeChild(this.todosList.firstChild);this.todosList.id="p"+t,e.forEach((e=>{const o=this.createElement("li"),i=this.createElement("div"),s=this.createElement("span");o.id=t+"."+e.id,i.classList.add("todo-list-item");const n=this.createElement("input","complete");n.type="checkbox",n.checked=e.complete,e.complete&&s.classList.add("completed"),s.textContent=e.title,i.append(n),i.append(s);const d=this.createElement("button","delete");d.appendChild(this._createDeleteIcon()),i.append(d),o.append(i),this.todosList.append(o)})),this.todosList.append(this.addTodoButton)}createElement(t,e){const o=this.doc.createElement(t);return e&&o.classList.add(e),o}bindDeleteProject(t){this.projectList.addEventListener("click",(e=>{if("delete"===e.target.className){const o=parseInt(e.target.parentElement.id);if(o===parseInt(this.todosList.id.slice(1))){for(;this.todosList.firstChild;)this.todosList.removeChild(this.todosList.firstChild);this.addTodoButton.disabled=!0;const t=this.createElement("p","todo");t.textContent="No project selected",this.todosList.append(t)}t(o)}}))}bindAddProject(t){this.addProjectButton.addEventListener("click",(()=>{t("Test title","test desc")}))}bindAddTodoToProject(t){this.addTodoButton.addEventListener("click",(e=>{const o=parseInt(e.target.parentElement.id.slice(1));t(o,"title","description","dueDate","priority",!1)}))}bindDeleteTodoInProject(t){this.todosList.addEventListener("click",(e=>{if("delete"===e.target.className){const o=e.target.parentElement.parentElement.id.split(".");t(parseInt(o[0]),parseInt(o[1]))}}))}bindToggleTodoInProject(t){this.todosList.addEventListener("input",(e=>{if("complete"===e.target.className){const o=e.target.parentElement.parentElement.id.split(".");t(parseInt(o[0]),parseInt(o[1]))}}))}_createAddIcon(){const t=this.createElement("span","material-icons");return t.textContent="add",t}_createDeleteIcon(){const t=this.createElement("span","material-icons");return t.textContent="delete",t}}(document))})()})();