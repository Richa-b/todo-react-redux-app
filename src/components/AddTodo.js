import React, {Component} from "react";

class Todo {
    constructor(title, id) {
        this.id = id
        this.title = title
        this.isCompleted = false
    }
}

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: new Todo('')
        }

    }

    render() {
        const {props: {onAddClick,todoCount}, state: {todo}} = this;
        return (<div>
            <input type='text' onChange={(e) => {
                this.setState({todo: new Todo(e.target.value, Number(todoCount) + 1)})
            }}
                   value={todo.title}/>
            <button onClick={() => {onAddClick(todo);
            this.setState({todo: new Todo('')})}}> Add Todo</button>
        </div>);
    }
}