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
        this.todosHeader.textContent = 'Default';
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

        const todosListId = parseInt(this.todosList.id.slice(1));

        projects.forEach((project, i) => {
            const listItem = this.createElement('li');
            const projectButton = this.createElement('button', 'project');
            listItem.id = project.id;
            projectButton.textContent = project.title;
            listItem.appendChild(projectButton);

            projectButton.addEventListener('click', () => {
                for (let i = 0; i < this.projectList.children.length; i++) {
                    const child = this.projectList.children[i];
                    if (child.classList.contains('selected-project')) {
                        child.classList.remove('selected-project');
                    }
                }
                listItem.classList.add('selected-project');
                this.todosHeader.textContent = project.title;
                this.displayTodos(project.id, project.todos);
                this.addTodoButton.disabled = false;
            });
            if (i != 0) {
                const deleteButton = this.createElement('button', 'delete');
                deleteButton.appendChild(this._createDeleteIcon());
                listItem.append(deleteButton);
            }

            if (project.id == todosListId) {
                listItem.classList.add('selected-project');
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
            const itemDate = this.createElement('span');

            listItem.id = projectId + '.' + todo.id;

            itemDiv.classList.add('todo-list-item');
            itemText.classList.add('todo-list-item-title');
            itemDate.classList.add('todo-list-item-date');

            const checkbox = this.createElement('input', 'complete');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.complete;
            if (todo.complete) {
                itemText.classList.add('completed');
                itemDate.classList.add('completed');
            }

            itemText.textContent = todo.title;
            itemDate.textContent = todo.dueDate;

            itemDiv.append(checkbox);
            itemDiv.append(itemText);
            itemDiv.append(itemDate);

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
                    this.todosHeader.textContent = 'Select a Project';
                    message.textContent = 'No project selected';
        
                    this.todosList.append(message);
                }
                callback(projectId);
            }
        });
    }

    bindAddProject(callback) {
        this.addProjectButton.addEventListener('click', () => {
            this.projectList.removeChild(this.addProjectButton);
            this.projectList.appendChild(this._createProjectForm(callback));
        });
    }

    bindAddTodoToProject(callback) {
        this.addTodoButton.addEventListener('click', e => {
            const projectId = parseInt(
                e.target.parentElement.id.slice(1)
            );
            this.todosList.removeChild(this.addTodoButton);
            this.todosList.appendChild(this._createTodoForm(projectId, callback));
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
        deleteIcon.textContent = 'clear';

        return deleteIcon;
    }

    _createProjectForm(callback) {
        const inputField = this.createElement('input');
        inputField.type = 'text';
        inputField.id = 'project-input';
        inputField.required = true;
        inputField.size = '13';

        const checkmark = this.createElement('button', 'material-icons');
        checkmark.textContent = 'done';
        checkmark.addEventListener('click', () => {
            if (inputField.value.length > 1) {
                callback(inputField.value, '');
            } else {
                window.alert('Project title cannot be empty');
            }
        });

        const cross = this.createElement('button', 'material-icons');
        cross.textContent = 'clear'
        cross.addEventListener('click', () => {
            this.projectList.removeChild(formDiv);
            this.projectList.append(this.addProjectButton);
        });

        const formDiv = this.createElement('div');
        formDiv.classList.add('project-form');

        formDiv.appendChild(inputField);
        formDiv.appendChild(checkmark);
        formDiv.appendChild(cross);

        return formDiv;
    }

    _createTodoForm(projectId, callback) {
        const inputLabel = this.createElement('label');
        inputLabel.htmlFor = 'todo-title';
        inputLabel.textContent = 'Title:';

        const inputField = this.createElement('input');
        inputField.type = 'text';
        inputField.id = 'todo-title';
        inputField.required = true;
        inputField.size = '30';

        const dateLabel = this.createElement('label');
        dateLabel.htmlFor = 'todo-date';
        dateLabel.textContent = 'Due Date:';

        const dateInputField = this.createElement('input');
        dateInputField.type = 'date';
        dateInputField.id = 'todo-date';

        const checkmark = this.createElement('button', 'material-icons');
        checkmark.textContent = 'done';
        checkmark.addEventListener('click', () => {
            if (inputField.value.length > 1) {
                callback(projectId, inputField.value, 'description', dateInputField.value, 'priority', false);
            } else {
                window.alert('Todo title cannot be empty');
            }
        });

        const cross = this.createElement('button', 'material-icons');
        cross.textContent = 'clear'
        cross.addEventListener('click', () => {
            this.todosList.removeChild(formDiv);
            this.todosList.append(this.addTodoButton);
        });

        const formDiv = this.createElement('div');
        formDiv.classList.add('todo-form');

        formDiv.appendChild(inputLabel);
        formDiv.appendChild(inputField);
        formDiv.appendChild(dateLabel);
        formDiv.appendChild(dateInputField);
        formDiv.appendChild(checkmark);
        formDiv.appendChild(cross);

        return formDiv;
    }   
}

export {
    View,
}