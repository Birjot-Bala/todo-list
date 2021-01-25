class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.displayProjects(this.model.projects);
    }
}

export {
    Controller,
}