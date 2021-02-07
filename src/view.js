class View {
    constructor(document) {
        this.doc = document;
        this.content = this.doc.querySelector('#content');

        this.title = this.createElement('h1');
        this.title.textContent = 'Todo List';

        this.projectsDiv = this.createElement('div', 'projects');
        this.projectsHeader = this.createElement('h2');
        this.projectsHeader.textContent = 'Projects'
        this.addProjectButton = this.createElement('button', 'add-button');
        this.addProjectButton.textContent = 'Add Project';
        this.addProjectButton.appendChild(this._createAddIcon());
        this.projectList = this.createElement('ul', 'project-list')

        this.todosDiv = this.createElement('div', 'todos');
        this.todosHeader = this.createElement('h2');
        this.todosHeader.textContent = 'Todos';
        this.addTodoButton = this.createElement('button', 'add-button');
        this.addTodoButton.textContent = 'Add Todo';
        this.addTodoButton.appendChild(this._createAddIcon());
        this.todosList = this.createElement('ol', 'todo-list');

        this.content.parentNode.insertBefore(this.title, this.content);
        this.projectsDiv.appendChild(this.projectsHeader)
        this.projectsDiv.appendChild(this.projectList);
        this.todosDiv.appendChild(this.todosHeader)
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
                deleteButton.appendChild(this._createDeleteIcon());
                listItem.append(deleteButton);
            }

            this.projectList.appendChild(listItem);
        });

        this.projectList.appendChild(this.addProjectButton);
    }

    displayTodos(projectId, todos) {
        while (this.todosList.firstChild) {
            this.todosList.removeChild(this.todosList.firstChild);
        }

        this.todosList.id = 'p' + projectId; 

        todos.forEach(todo => {
            const listItem = this.createElement('li');
            const itemDiv = this.createElement('div');
            const itemText = this.createElement('span');

            listItem.id = projectId + '.' + todo.id;

            itemDiv.classList.add('todo-list-item');

            const checkbox = this.createElement('input', 'complete');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.complete;
            if (todo.complete) {
                itemText.classList.add('completed');

            }

            itemText.textContent = todo.title;

            itemDiv.append(checkbox);
            itemDiv.append(itemText);

            const deleteButton = this.createElement('button', 'delete');
            deleteButton.appendChild(this._createDeleteIcon());
            itemDiv.append(deleteButton);

            listItem.append(itemDiv);

            this.todosList.append(listItem);
        });
        this.todosList.append(this.addTodoButton);
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
            const projectId = parseInt(
                e.target.parentElement.id.slice(1)
            );
            callback(projectId, 'title', 'description', 'dueDate', 'priority', false);
        });
    }

    bindDeleteTodoInProject(callback) {
        this.todosList.addEventListener('click', e => {
            if (e.target.className === 'delete') {
                const ids = e.target.parentElement.parentElement.id.split('.');
                callback(parseInt(ids[0]), parseInt(ids[1]));
            }
        });
    }

    bindToggleTodoInProject(callback) {
        this.todosList.addEventListener('input', e => {
            if (e.target.className === 'complete') {
                const ids = e.target.parentElement.parentElement.id.split('.');
                callback(parseInt(ids[0]), parseInt(ids[1]));
            }
        });
    }

    _createAddIcon() {
        const addIcon = this.createElement('span', 'material-icons');
        addIcon.textContent = 'add';

        return addIcon;
    }

    _createDeleteIcon() {
        const deleteIcon = this.createElement('span', 'material-icons');
        deleteIcon.textContent = 'delete';

        return deleteIcon;
    }
}

export {
    View,
}