(()=>{"use strict";var t={426:(t,e,o)=>{o.d(e,{Z:()=>s});var i=o(645),n=o.n(i)()((function(t){return t[1]}));n.push([t.id,"body {\n    font-family: 'Arial', 'Open Sans', sans-serif;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nh1 {\n    box-shadow: 0px 1px 3px lightgray;\n    padding: 5px;\n    margin: 0;\n    font-weight: normal;\n    text-align: center;\n}\n\nbutton > * {\n    pointer-events: none;\n}\n\n#content {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    flex-grow: 1;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 auto;\n    border-right: 1px solid lightgray;\n    padding-left: 16px;\n    padding-right: 16px;\n    width: 250px;\n}\n\n.projects h2 {\n    font-weight: normal;\n    margin-left: 8px;\n}\n\n.project-list {\n    list-style-type: none;\n    padding-left: 0;\n}\n\n.project-list li {\n    display: flex;\n    margin-bottom: 12px;\n    justify-content: space-between;\n}\n\n.project-form {\n    display: flex;\n}\n\n.project-form button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n#project-input {\n    font-size: medium;\n    padding-left: 4px;\n    margin-right: 4px;\n}\n\n.add-button {\n    border: 1px solid lightgray;\n    background-color: white;\n    border-radius: 3px;\n    cursor: pointer;\n    display: inline-flex;\n    font-size: medium;\n}\n\n.add-button span {\n    padding-left: 8px;\n}\n\n.add-button:hover {\n    background-color: rgb(228, 226, 226);\n}\n\n.delete {\n    border-style: none;\n    background-color: transparent;\n    padding-top: 4px;\n    cursor: pointer;\n    color: lightgray;\n}\n\n.delete:hover {\n    color: black;\n}\n\n.project {\n    border: none;\n    text-align: left;\n    width: 100%;\n    background-color: transparent;\n    border-radius: 3px;\n    cursor: pointer;\n    font-size: medium;\n}\n\n.todos {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex: 2 1 auto;\n    text-align: left;\n    max-width: 800px;\n}\n\n.todos h2 {\n    margin-left: 40px;\n    font-weight: normal;\n}\n\n.todo-list {\n    list-style-position: inside;\n    list-style-type: none;\n    padding-right: 40px;\n}\n\n.todo-list li {\n    border: solid 1px lightgrey;\n    border-radius: 2px;\n    margin-bottom: 12px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n    transition: box-shadow 0.25s ease-in-out;\n}\n\n.todo-list li:hover {\n    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);\n}\n\n.todo-list-item {\n    display: inline-flex;\n    align-items: center;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.todo-list-item span {\n    width: 100%;\n}\n\n.complete {\n    margin-right: 16px;\n    margin-left: 8px;\n    cursor: pointer;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: grey;\n}\n\n.selected-project {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);\n    background-color: rgba(0, 0, 0, 0.05);\n}",""]);const s=n},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(n[r]=!0)}for(var d=0;d<t.length;d++){var a=[].concat(t[d]);i&&n[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),e.push(a))}},e}},379:(t,e,o)=>{var i,n=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),s=[];function r(t){for(var e=-1,o=0;o<s.length;o++)if(s[o].identifier===t){e=o;break}return e}function d(t,e){for(var o={},i=[],n=0;n<t.length;n++){var d=t[n],a=e.base?d[0]+e.base:d[0],c=o[a]||0,l="".concat(a," ").concat(c);o[a]=c+1;var h=r(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==h?(s[h].references++,s[h].updater(p)):s.push({identifier:l,updater:b(p,e),references:1}),i.push(l)}return i}function a(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var s=o.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=n(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function h(t,e,o,i){var n=o?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,n);else{var s=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function p(t,e,o){var i=o.css,n=o.media,s=o.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u=null,m=0;function b(t,e){var o,i,n;if(e.singleton){var s=m++;o=u||(u=a(e)),i=h.bind(null,o,s,!1),n=h.bind(null,o,s,!0)}else o=a(e),i=p.bind(null,o,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var o=d(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<o.length;i++){var n=r(o[i]);s[n].references--}for(var a=d(t,e),c=0;c<o.length;c++){var l=r(o[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}o=a}}}},650:(t,e,o)=>{o.r(e),o.d(e,{Project:()=>n});class i{constructor(t,e,o,i,n,s){this.id=t,this.title=e,this.description=o,this.dueDate=i,this.priority=n,this.complete=s}toggleComplete(){this.complete=!this.complete}}class n{constructor(t,e,o){this.id=t,this.title=e,this.description=o,this.todos=[]}addTodo(t,e,o,n,s){const r=this.todos.length>0?this.todos[this.todos.length-1].id+1:1,d=new i(r,t,e,o,n,s);this.todos.push(d)}deleteTodo(t){this.todos=this.todos.filter((e=>e.id!==t))}editTodo(t,e,o,n,s){this.todos=this.todos.map((r=>r.id===t?new i(t,e,o,n,s):r))}toggleTodo(t){this.todos.filter((e=>e.id===t))[0].toggleComplete()}}}},e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={id:i,exports:{}};return t[i](n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{Project:t}=o(650);var e=o(379),i=o.n(e),n=o(426);i()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,new class{constructor(t,e){this.model=t,this.view=e,this.subscribers={},this.subscribe("delete-project",this.model.deleteProject.bind(this.model)),this.subscribe("add-project",this.model.addProject.bind(this.model)),this.subscribe("delete-todo",this.model.deleteTodoInProject.bind(this.model)),this.subscribe("add-todo",this.model.addTodoToProject.bind(this.model)),this.subscribe("toggle-todo",this.model.toggleTodoInProject.bind(this.model)),this.subscribe("update-projects",this.view.displayProjects.bind(this.view)),this.subscribe("update-todos",this.view.displayTodos.bind(this.view)),this.model.bindProjectListChanged(this.publish.bind(this,"update-projects")),this.model.bindTodoListChanged(this.publish.bind(this,"update-todos")),this.view.bindDeleteProject(this.publish.bind(this,"delete-project")),this.view.bindAddProject(this.publish.bind(this,"add-project")),this.view.bindAddTodoToProject(this.publish.bind(this,"add-todo")),this.view.bindDeleteTodoInProject(this.publish.bind(this,"delete-todo")),this.view.bindToggleTodoInProject(this.publish.bind(this,"toggle-todo")),this.view.displayProjects(this.model.projects),this.view.displayTodos(this.model.projects[0].id,this.model.projects[0].todos)}publish(t,...e){Array.isArray(this.subscribers[t])&&this.subscribers[t].forEach((t=>{t(...e)}))}subscribe(t,e){Array.isArray(this.subscribers[t])||(this.subscribers[t]=[]),this.subscribers[t].push(e)}}(new class{constructor(){localStorage.getItem("projects")?(this.projects=this.rebuild(JSON.parse(localStorage.getItem("projects"))),0==this.projects.length&&this.addProject("Default","The default project")):(this.projects=[],this.addProject("Default","The default project"))}addProject(e,o){const i=this.projects.length>0?this.projects[this.projects.length-1].id+1:1,n=new t(i,e,o);this.projects.push(n),this.populateStorage(),this.onProjectListChanged(this.projects)}deleteProject(t){this.projects=this.projects.filter((e=>e.id!==t)),this.populateStorage(),this.onProjectListChanged(this.projects)}editProject(e,o,i){this.projects=this.projects.map((n=>n.id===e?new t(e,o,i):n)),this.populateStorage(),this.onProjectListChanged(this.projects)}addTodoToProject(t,e,o,i,n,s){const r=this.projects.filter((e=>e.id===t))[0];r.addTodo(e,o,i,n,s),this.populateStorage(),this.onTodoListChanged(r.id,r.todos)}editTodoInProject(t,e,o,i,n,s){this.projects.filter((e=>e.id===t)).editTodo(e,o,i,n,s),this.populateStorage()}deleteTodoInProject(t,e){const o=this.projects.filter((e=>e.id===t))[0];o.deleteTodo(e),this.populateStorage(),this.onTodoListChanged(o.id,o.todos)}toggleTodoInProject(t,e){const o=this.projects.filter((e=>e.id===t))[0];o.toggleTodo(e),this.populateStorage(),this.onTodoListChanged(o.id,o.todos)}bindProjectListChanged(t){this.onProjectListChanged=t}bindTodoListChanged(t){this.onTodoListChanged=t}populateStorage(){localStorage.setItem("projects",JSON.stringify(this.projects))}rebuild(e){return e.map((e=>{const o=new t(e.id,e.title,e.description);return 0!=e.todos.length&&e.todos.forEach((t=>{o.addTodo(t.title,t.description,t.dueDate,t.priority,t.complete)})),o}))}},new class{constructor(t){this.doc=t,this.content=this.doc.querySelector("#content"),this.title=this.createElement("h1"),this.title.textContent="Todo List",this.projectsDiv=this.createElement("div","projects"),this.projectsHeader=this.createElement("h2"),this.projectsHeader.textContent="Projects",this.addProjectButton=this.createElement("button","add-button"),this.addProjectButton.textContent="Add Project",this.addProjectButton.appendChild(this._createAddIcon()),this.projectList=this.createElement("ul","project-list"),this.todosDiv=this.createElement("div","todos"),this.todosHeader=this.createElement("h2"),this.todosHeader.textContent="Default",this.addTodoButton=this.createElement("button","add-button"),this.addTodoButton.textContent="Add Todo",this.addTodoButton.appendChild(this._createAddIcon()),this.todosList=this.createElement("ol","todo-list"),this.content.parentNode.insertBefore(this.title,this.content),this.projectsDiv.appendChild(this.projectsHeader),this.projectsDiv.appendChild(this.projectList),this.todosDiv.appendChild(this.todosHeader),this.todosDiv.appendChild(this.addTodoButton),this.todosDiv.appendChild(this.todosList),this.content.appendChild(this.projectsDiv),this.content.appendChild(this.todosDiv)}displayProjects(t){for(;this.projectList.firstChild;)this.projectList.removeChild(this.projectList.firstChild);t.forEach(((t,e)=>{const o=this.createElement("li"),i=this.createElement("button","project");if(o.id=t.id,i.textContent=t.title,o.appendChild(i),i.addEventListener("click",(()=>{for(let t=0;t<this.projectList.children.length;t++){const e=this.projectList.children[t];e.classList.contains("selected-project")&&e.classList.remove("selected-project")}o.classList.add("selected-project"),this.todosHeader.textContent=t.title,this.displayTodos(t.id,t.todos),this.addTodoButton.disabled=!1})),0!=e){const t=this.createElement("button","delete");t.appendChild(this._createDeleteIcon()),o.append(t)}this.projectList.appendChild(o)})),this.projectList.appendChild(this.addProjectButton)}displayTodos(t,e){for(;this.todosList.firstChild;)this.todosList.removeChild(this.todosList.firstChild);this.todosList.id="p"+t,e.forEach((e=>{const o=this.createElement("li"),i=this.createElement("div"),n=this.createElement("span");o.id=t+"."+e.id,i.classList.add("todo-list-item");const s=this.createElement("input","complete");s.type="checkbox",s.checked=e.complete,e.complete&&n.classList.add("completed"),n.textContent=e.title,i.append(s),i.append(n);const r=this.createElement("button","delete");r.appendChild(this._createDeleteIcon()),i.append(r),o.append(i),this.todosList.append(o)})),this.todosList.append(this.addTodoButton)}createElement(t,e){const o=this.doc.createElement(t);return e&&o.classList.add(e),o}bindDeleteProject(t){this.projectList.addEventListener("click",(e=>{if("delete"===e.target.className){const o=parseInt(e.target.parentElement.id);if(o===parseInt(this.todosList.id.slice(1))){for(;this.todosList.firstChild;)this.todosList.removeChild(this.todosList.firstChild);this.addTodoButton.disabled=!0;const t=this.createElement("p","todo");this.todosHeader.textContent="Select a Project",t.textContent="No project selected",this.todosList.append(t)}t(o)}}))}bindAddProject(t){this.addProjectButton.addEventListener("click",(()=>{this.projectList.removeChild(this.addProjectButton),this.projectList.appendChild(this._createProjectForm(t))}))}bindAddTodoToProject(t){this.addTodoButton.addEventListener("click",(e=>{const o=parseInt(e.target.parentElement.id.slice(1));t(o,"title","description","dueDate","priority",!1)}))}bindDeleteTodoInProject(t){this.todosList.addEventListener("click",(e=>{if("delete"===e.target.className){const o=e.target.parentElement.parentElement.id.split(".");t(parseInt(o[0]),parseInt(o[1]))}}))}bindToggleTodoInProject(t){this.todosList.addEventListener("input",(e=>{if("complete"===e.target.className){const o=e.target.parentElement.parentElement.id.split(".");t(parseInt(o[0]),parseInt(o[1]))}}))}_createAddIcon(){const t=this.createElement("span","material-icons");return t.textContent="add",t}_createDeleteIcon(){const t=this.createElement("span","material-icons");return t.textContent="clear",t}_createProjectForm(t){const e=this.createElement("input");e.type="text",e.id="project-input",e.required=!0,e.size="13";const o=this.createElement("button","material-icons");o.textContent="done",o.addEventListener("click",(()=>{e.value.length>1?(this.projectList.removeChild(n),this.projectList.append(this.addProjectButton),t(e.value,"")):window.alert("Project title cannot be empty")}));const i=this.createElement("button","material-icons");i.textContent="clear",i.addEventListener("click",(()=>{this.projectList.removeChild(n),this.projectList.append(this.addProjectButton)}));const n=this.createElement("div");return n.classList.add("project-form"),n.appendChild(e),n.appendChild(o),n.appendChild(i),n}}(document))})()})();