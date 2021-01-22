const TodoItemModel = (() => {
    const todoItemFactory = (title, description, dueDate, priority) => {
        let status = false
        const toggleStatus = () => status = !status;
        const checkStatus = () => status;

        return { title,
            description,
            dueDate,
            priority,
            toggleStatus,
            checkStatus,
        }
    };

    return {
        todoItemFactory,
    }
})();

export {
    TodoItemModel
}