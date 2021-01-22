const ProjectModel = (() => {

    const projectList = [];

    const projectFactory = (title, description) => {
        const todoList = [];

        const addTodo = (todo) => {
            todoList.push(todo);
        }

        const removeTodo = (todo) => {
            const pos = todoList.indexOf(todo);
            todoList.splice(pos, 1);
        };

        const getTodoList = () => todoList;

        return {
            title,
            description,
            addTodo,
            removeTodo,
            getTodoList,
        }
    }

    const createProject = (title, description) => {
        const newProject = projectFactory(title, description);
        projectList.push(newProject);
        return newProject;
    }

    const removeProject = (project) => {
        const pos = projectList.indexOf(project);
        projectList.splice(pos, 1);
    }

    const getProjectList = () => todoList;

    return {
        createProject,
        removeProject,
        getProjectList,
    }
})();

export {
    ProjectModel,
}