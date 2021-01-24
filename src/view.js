class View {
    constructor(document) {
        this.doc = document;
        this.content = this.doc.querySelector('#content');

        this.title = this.createElement('h1');
        this.title.textContent = 'Todos Title';

        this.projectsDiv = this.createElement('div', 'projects');
        this.projectsDiv.textContent = 'Projects'
        this.projectList = this.createElement('ul')
        this.displayProjects([]);

        this.todosDiv = this.createElement('div', 'todos');
        this.todosDiv.textContent = 'Todos';
        this.todosList = this.createElement('ol');
        this.displayTodos([]);

        this.content.appendChild(this.title);
        this.projectsDiv.appendChild(this.projectList);
        this.todosDiv.appendChild(this.todosList);
        this.content.appendChild(this.projectsDiv);
        this.content.appendChild(this.todosDiv);
    }

    displayProjects(projects) {
        while (this.projectList.firstChild) {
            this.projectList.removeChild(projectList.firstChild);
        }

        if (projects.length == 0) {
            const defaultProject = this.createElement('li');
            defaultProject.textContent = 'Default';
            this.projectList.appendChild(defaultProject);
        }
    }

    displayTodos(todos) {
        while (this.todosList.firstChild) {
            this.todosList.removeChild(todosList.firstChild);
        }

        if (todos.length == 0) {
            const defaultTodo = this.createElement('li');
            defaultTodo.textContent = 'Default Todo';
            this.todosList.appendChild(defaultTodo);
        }
    }

    createElement(tag, className) {
        const element = this.doc.createElement(tag);
        if (className) element.classList.add(className);

        return element;
    }
}

export {
    View,
}