const todosList = (todoListCurrentState = [], action) => {
    const todoList = Array.from(todoListCurrentState)
    switch (action.type) {
        case 'ADD_TODO' :
            if (action.todo.title.trim()) {
                todoList.push(action.todo);
            }
            return todoList;
        case 'TOGGLE_COMPLETION' :
            todoList.map((todo) => {
                if (todo.id === action.todo.id) {
                    todo.isCompleted = !todo.isCompleted
                }
            })
            return todoList
        default :
            return todoList
    }
}

export default todosList;