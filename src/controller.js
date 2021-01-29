class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.subscribers = {};

        this.subscribe('delete-project', this.model.deleteProject.bind(this.model));
        this.subscribe('add-project', this.model.addProject.bind(this.model));


        this.subscribe('delete-todo', this.model.deleteTodoInProject.bind(this.model));
        this.subscribe('add-todo', this.model.addTodoToProject.bind(this.model));
        this.subscribe('toggle-todo', this.model.toggleTodoInProject.bind(this.model));
    

        this.subscribe('update-projects', this.view.displayProjects.bind(this.view));
        this.subscribe('update-todos', this.view.displayTodos.bind(this.view));

        this.model.bindProjectListChanged(this.publish.bind(this, 'update-projects'));
        this.model.bindTodoListChanged(this.publish.bind(this, 'update-todos'));

        this.view.bindDeleteProject(this.publish.bind(this, 'delete-project'));
        this.view.bindAddProject(this.publish.bind(this, 'add-project'));

        this.view.bindAddTodoToProject(this.publish.bind(this, 'add-todo'));
        this.view.bindDeleteTodoInProject(this.publish.bind(this, 'delete-todo'));
        this.view.bindToggleTodoInProject(this.publish.bind(this, 'toggle-todo'));

        this.view.displayProjects(this.model.projects);
        this.view.displayTodos(this.model.projects[0].id, this.model.projects[0].todos);
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