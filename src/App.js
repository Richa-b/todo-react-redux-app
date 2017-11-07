import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./components/AddTodo";
import ToDosList from "./components/ToDosList";
import FilterList from "./components/FilterList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h1> To Do List</h1>
                <AddTodo/>
                <ToDosList/>
                <FilterList/>
            </div>
        );
    }
}

export default App;
