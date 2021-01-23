import { Todo } from "./todo";

class Project {
    constructor() {
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority) {
        const id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1: 1;
        const newTodo = new Todo(
            id,
            title, 
            description, 
            dueDate, 
            priority
        );
        this.todos.push(newTodo);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id, title, description, dueDate, priority) {
        this.todos = this.todos.map(todo => 
            todo.id === id ? new Todo(id, title, description, dueDate, priority) : todo
        );
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo => 
            todo.id === id ? todo.toggleTodo : todo
        );
    }
}

export {
    Project,
}