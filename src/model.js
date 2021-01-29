const { Project } = require("./project");

class Model {
    constructor() {
        if (localStorage.getItem('projects')) {
            this.projects = this.rebuild(JSON.parse(localStorage.getItem('projects')));
            if (this.projects.length == 0) {
                this.addProject('Default', 'The default project');
            }
        } else {
            this.projects = [];
            this.addProject('Default', 'The default project');
        }
    }

    addProject(title, description) {
        const projectId = this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1;
        const newProject = new Project(projectId, title, description);
        this.projects.push(newProject);
        this.populateStorage();
        this.onProjectListChanged(this.projects);
    }

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
        this.populateStorage();
        this.onProjectListChanged(this.projects);
    }

    editProject(projectId, title, description) {
        this.projects = this.projects.map(project => 
            project.id === projectId ? new Project(projectId, title, description) : project
        );
        this.populateStorage();
        this.onProjectListChanged(this.projects);
    }

    addTodoToProject(projectId, title, description, dueDate, priority, complete) {
        const project = this.projects.filter(project => project.id === projectId)[0];
        project.addTodo(title, description, dueDate, priority, complete);
        this.populateStorage();
        this.onTodoListChanged(project.id, project.todos);
    }

    editTodoInProject(projectId, todoId, title, description, dueDate, priority) {
        const project = this.projects.filter(project => project.id === projectId);
        project.editTodo(todoId, title, description, dueDate, priority);
        this.populateStorage();
    }

    deleteTodoInProject(projectId, todoId) {
        const project = this.projects.filter(project => project.id === projectId)[0];
        project.deleteTodo(todoId);
        this.populateStorage();
        this.onTodoListChanged(project.id, project.todos);
    }

    toggleTodoInProject(projectId, todoId) {
        const project = this.projects.filter(project => project.id === projectId)[0];
        project.toggleTodo(todoId);
        this.populateStorage();
        this.onTodoListChanged(project.id, project.todos);
    }

    bindProjectListChanged(callback) {
        this.onProjectListChanged = callback;
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }

    populateStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    rebuild(array) {
        const rebuiltProjects = array.map(project => {
            const builtProject = new Project(
                project.id,
                project.title,
                project.description,
            );
            if (project.todos.length != 0) {
                project.todos.forEach(todo => {
                    builtProject.addTodo(
                        todo.title,
                        todo.description,
                        todo.dueDate,
                        todo.priority,
                        todo.complete,
                    );
                });
            }
            return builtProject;
        });
        return rebuiltProjects;
    }
}

export {
    Model,
}