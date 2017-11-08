export const addTodo = (todo) => {
    return {type: 'ADD_TODO' ,todo : todo}
}

export const toggleCompletionInTodo = (todo) => {
    return {type : 'TOGGLE_COMPLETION' , todo : todo}
}