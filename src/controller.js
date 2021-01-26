class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.subscribers = {};

        this.subscribe('delete-project', this.model.deleteProject.bind(this.model));
        this.subscribe('add-project', this.model.addProject.bind(this.model));
        this.subscribe('update-projects', this.view.displayProjects.bind(this.view));
        
        this.view.displayProjects(this.model.projects);

        this.view.bindDeleteProject(this.publish.bind(this, 'delete-project'));
        this.view.bindAddProject(this.publish.bind(this, 'add-project'));
        this.model.bindProjectListChanged(this.publish.bind(this));

    }

    publish(eventName, ...data) {
        if (!Array.isArray(this.subscribers[eventName])) {
            return
        }
        this.subscribers[eventName].forEach((callback) => {
            callback(...data);
        });
    }

    subscribe(eventName, callback) {
        if (!Array.isArray(this.subscribers[eventName])) {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(callback);
    }
}

export {
    Controller,
}