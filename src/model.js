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
}