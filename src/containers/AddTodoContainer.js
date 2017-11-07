import {addTodo} from "../redux/actions/index";
import {AddTodo} from "../components/AddTodo";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return ({
        todoCount : (state.todoList.length)
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (todo) => dispatch(addTodo(todo)),
    }
}

const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodoContainer