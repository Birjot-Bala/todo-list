import { Todo } from "./todo";

class Project {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority, complete) {
        const todoId = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1: 1;
        const newTodo = new Todo(
            todoId,
            title, 
            description, 
            dueDate, 
            priority,
            complete
        );
        this.todos.push(newTodo);
    }

    deleteTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
    }

    editTodo(todoId, title, description, dueDate, priority) {
        this.todos = this.todos.map(todo => 
            todo.id === todoId ? new Todo(todoId, title, description, dueDate, priority) : todo
        );
    }

    toggleTodo(todoId) {
        const todoToToggle = this.todos.filter(todo => todo.id === todoId)[0];
        todoToToggle.toggleComplete();
    }
}

export {
    Project,
}