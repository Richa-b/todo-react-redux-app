import React from "react";

export default class TodoRow extends React.Component {

    render() {
        const {todo, onClickRow} = this.props
        return (
            <li onClick={() => {
                onClickRow(todo)
            }} style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none'
            }}>{todo.title}</li>
        );
    }
}