const { Project } = require("./project");

class Model {
    constructor() {
        this.projects = [];
    }

    addProject(title, description) {
        const projectId = this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1;
        const newProject = new Project(projectId, title, description);
        this.projects.push(newProject);
    }

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
    }

    editProject(projectId, title, description) {
        this.projects = this.projects.map(project => 
            project.id === projectId ? new Project(projectId, title, description) : project
        );
    }

    addTodoToProject(projectId, title, description, dueDate, priority) {
        const project = this.projects.filter(project => project.id === projectId);
        project.addTodo(title, description, dueDate, priority);
    }

    editTodoInProject(projectId, todoId, title, description, dueDate, priority) {
        const project = this.projects.filter(project => project.id === projectId);
        project.editTodo(todoId, title, description, dueDate, priority);
    }

    deleteTodoInProject(projectId, todoId) {
        const project = this.projects.filter(project => project.id === projectId);
        project.deleteTodo(todoId);
    }

    toggleTodoInProject(projectId, todoId) {
        const project = this.projects.filter(project => project.id === projectId);
        project.toggleTodo(todoId);
    }
}

export {
    Model,
}