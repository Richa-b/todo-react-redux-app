import todosFilter from './filterOption'
import todosList from './todoList'

const combineReducer = (currentState, action) => {
    let nextState = Object.assign({}, currentState);
    nextState = {
        todoList: todosList(nextState.todoList,action) ,
        filterOption : todosFilter(nextState.filterOption,action)
    };
    return nextState;
};

export default combineReducer;