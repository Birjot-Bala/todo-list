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

        if (projects.length == 0) {
            const listItem = this.createElement('li', 'project');
            listItem.textContent = 'Default';

            const deleteButton = this.createElement('button', 'delete');
            deleteButton.textContent = 'Delete';

            listItem.append(deleteButton);
            this.displayTodos([]);
            this.projectList.appendChild(listItem);
        } else {
            projects.forEach(project => {
                const listItem = this.createElement('li');
                const projectButton = this.createElement('button', 'project');
                listItem.id = project.id;
                projectButton.textContent = project.title;
                listItem.appendChild(projectButton);

                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';

                projectButton.addEventListener('click', () => {
                    this.displayTodos(project.todos);
                });

                listItem.append(deleteButton);

                this.projectList.appendChild(listItem);
            });
        }
    }

    displayTodos(todos) {
        while (this.todosList.firstChild) {
            this.todosList.removeChild(this.todosList.firstChild);
        }

        if (todos.length == 0) {
            const listItem = this.createElement('li');
            const defaultTodo = this.createElement('button', 'todo')
            defaultTodo.textContent = 'Default Todo';
            listItem.appendChild(defaultTodo);

            const deleteButton = this.createElement('button', 'delete');
            deleteButton.textContent = 'Delete';
            listItem.append(deleteButton);

            this.todosList.append(listItem);
        } else {
            todos.forEach(todo => {
                const listItem = this.createElement('li');
                listItem.id = todo.id;

                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;
                listItem.textContent = todo.textContent;

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
        this.projectList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const projectId = parseInt(event.target.parentElement.id)
                callback(projectId);
            }
        });
    }

    bindAddProject(callback) {
        this.addProjectButton.addEventListener('click', () => {
            callback('Test title', 'test desc');
        });
    }
}

export {
    View,
}