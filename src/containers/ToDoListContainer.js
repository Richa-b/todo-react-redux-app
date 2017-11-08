import {connect} from "react-redux";
import ToDosList from "../components/ToDosList";
import {toggleCompletionInTodo} from "../redux/actions/index";

const mapStateToProps = (state) => {
    return {todoList: fetchTodoListOnTheBasisOfFilterOption(state)}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickRow: (todo) => {
            dispatch(toggleCompletionInTodo(todo))
        }
    }
}

const fetchTodoListOnTheBasisOfFilterOption = (state) => {
    if (state.filterOption === 'ACTIVE') {
        return state.todoList.filter(todo => !todo.isCompleted)
    } else if (state.filterOption === 'COMPLETED') {
        return state.todoList.filter(todo => todo.isCompleted)
    } else {
        return state.todoList
    }
}
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDosList);

export default ToDoListContainer