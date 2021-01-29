class View {
    constructor(document) {
        this.doc = document;
        this.content = this.doc.querySelector('#content');

        this.title = this.createElement('h1');
        this.title.textContent = 'Todos Title';

        this.projectsDiv = this.createElement('div', 'projects');
        this.projectsDiv.textContent = 'Projects'
        this.addProjectButton = this.createElement('button', 'add-button');
        this.addProjectButton.textContent = 'Add';
        this.projectList = this.createElement('ul', 'project-list')

        this.todosDiv = this.createElement('div', 'todos');
        this.todosDiv.textContent = 'Todos';
        this.addTodoButton = this.createElement('button', 'add-button');
        this.addTodoButton.textContent = 'Add';
        this.todosList = this.createElement('ol', 'todo-list');

        this.content.appendChild(this.title);
        this.projectsDiv.appendChild(this.addProjectButton);
        this.projectsDiv.appendChild(this.projectList);
        this.todosDiv.appendChild(this.addTodoButton);
        this.todosDiv.appendChild(this.todosList);
        this.content.appendChild(this.projectsDiv);
        this.content.appendChild(this.todosDiv);
    }

    displayProjects(projects) {
        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        }

        projects.forEach((project, i) => {
            const listItem = this.createElement('li');
            const projectButton = this.createElement('button', 'project');
            listItem.id = project.id;
            projectButton.textContent = project.title;
            listItem.appendChild(projectButton);

            projectButton.addEventListener('click', () => {
                this.displayTodos(project.id, project.todos);
                this.addTodoButton.disabled = false;
            });
            if (i != 0) {
                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                listItem.append(deleteButton);
            }

            this.projectList.appendChild(listItem);
        });
    }

    displayTodos(projectId, todos) {
        while (this.todosList.firstChild) {
            this.todosList.removeChild(this.todosList.firstChild);
        }

        this.todosList.id = 'p' + projectId; 

        if (todos.length == 0) {
            const defaultTodo = this.createElement('p', 'todo');
            defaultTodo.textContent = 'Get started by adding a Todo!';

            this.todosList.append(defaultTodo);
        } else {
            todos.forEach(todo => {
                const listItem = this.createElement('li');
                listItem.id = projectId + '.' + todo.id;

                const checkbox = this.createElement('input', 'complete');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;
                listItem.textContent = todo.title;
                listItem.append(checkbox);

                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                listItem.append(deleteButton);

                this.todosList.append(listItem);
            });
        }
    }

    createElement(tag, className) {
        const element = this.doc.createElement(tag);
        if (className) element.classList.add(className);

        return element;
    }

    bindDeleteProject(callback) {
        this.projectList.addEventListener('click', e => {
            if (e.target.className === 'delete') {
                const projectId = parseInt(e.target.parentElement.id)
                const todosListId = parseInt(this.todosList.id.slice(1));
                if (projectId === todosListId) {
                    while (this.todosList.firstChild) {
                        this.todosList.removeChild(this.todosList.firstChild);
                    }
                    this.addTodoButton.disabled = true;
                    const message = this.createElement('p', 'todo');
                    message.textContent = 'No project selected';
        
                    this.todosList.append(message);
                }
                callback(projectId);
            }
        });
    }

    bindAddProject(callback) {
        this.addProjectButton.addEventListener('click', () => {
            callback('Test title', 'test desc');
        });
    }

    bindAddTodoToProject(callback) {
        this.addTodoButton.addEventListener('click', e => {
            const projectId = parseInt(e.target.nextSibling.id.slice(1));
            callback(projectId, 'title', 'description', 'dueDate', 'priority', false);
        });
    }

    bindDeleteTodoInProject(callback) {
        this.todosList.addEventListener('click', e => {
            if (e.target.className === 'delete') {
                const ids = e.target.parentElement.id.split('.');
                callback(parseInt(ids[0]), parseInt(ids[1]));
            }
        });
    }

    bindToggleTodoInProject(callback) {
        this.todosList.addEventListener('input', e => {
            if (e.target.className === 'complete') {
                const ids = e.target.parentElement.id.split('.');
                callback(parseInt(ids[0]), parseInt(ids[1]));
            }
        });
    }
}

export {
    View,
}