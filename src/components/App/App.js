import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';

class App extends Component {
    constructor (props) {
        super();

        this.state = {
            todoList: props.todoList
        };
    }

    deleteItem = (id) => {
        
        this.setState(({ todoList }) => {
            // const idx = todoList.findIndex((el) => { el.id === id });
            const idx = [];
            let nTodoList = todoList.slice();

            nTodoList.splice(idx, 1);

            return {
                todoList: nTodoList
            }
        });
    }

    render() {
        return (
            <div className="app-container">
                <AppHeader title='ToDo list project'/>
                <ItemStatusFilter/>
                <SearchPanel/>
                <TodoList todos = {this.state.todoList} onDeleted = {this.deleteItem}/>
            </div>
        );
    }
}

export default App;