const todosFilter = (todoFilterCurrentState = 'ALL', action) => {
    switch (action.type) {
        case 'SWITCH_FILTER_OPTION':
            return action.filterOption
        default:
            return todoFilterCurrentState
    }

};

export default todosFilter;