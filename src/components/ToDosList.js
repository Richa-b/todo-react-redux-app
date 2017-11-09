import React, {Component} from "react";
import TodoRow from "./TodoRow";

export default class ToDosList extends Component {

    render() {
        const {todoList, onClickRow} = this.props;
        return (
            <div className="todoList">
                <ul>
                    {todoList.map((todo) => {
                        return <TodoRow key={todo.id} todo={todo} onClickRow={onClickRow}
                        />
                    })
                    }
                </ul>
            </div>
        );
    }
}