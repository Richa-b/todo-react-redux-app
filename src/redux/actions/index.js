export const addTodo = (todo) => {
    return {type: 'ADD_TODO' ,todo : todo}
}

export const toggleCompletionInTodo = (todo) => {
    return {type : 'TOGGLE_COMPLETION' , todo : todo}
}

export const selectFilterOption = (filterOption) => {
    return {type : 'SWITCH_FILTER_OPTION' , filterOption : filterOption}
}