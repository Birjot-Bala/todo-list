class Todo {
    constructor(id, title, description, dueDate, priority, complete) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
}

export{
    Todo,
}