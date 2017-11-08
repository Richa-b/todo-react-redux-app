import {connect} from "react-redux";
import ToDosList from "../components/ToDosList";
import {toggleCompletionInTodo} from "../redux/actions/index";

const mapStateToProps = (state) => {
    return {todoList : state.todoList}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickRow : (todo) => {dispatch(toggleCompletionInTodo(todo))}
    }
}

const ToDoListContainer = connect(mapStateToProps,mapDispatchToProps)(ToDosList);

export default ToDoListContainer