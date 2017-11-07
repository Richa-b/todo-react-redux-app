const todosList = (todoListCurrentState = [], action) => {
    const todoList = Array.from(todoListCurrentState)
    switch (action.type) {
        case 'ADD_TODO' :
            todoList.push(action.todo);
            return todoList;
        default :
            return todoList
    }
}

export default todosList;