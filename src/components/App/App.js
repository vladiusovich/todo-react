import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item-form/add-item-form';
import './app.css';
import '../../css/common.css';

class App extends Component {
    constructor (props) {
        super();

        this.state = {
            maxId: 100,
            todoList: props.todoList
        };
    }

    toggleProp = (arr, id, propName) => {
        const idx = arr.findIndex((el) => { return el.id === id });

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName] };

        const newList = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];

        return newList;
    }

    onItemAdded = (label) => {
        this.setState(({ maxId, todoList })=>{

            const newMaxId = ++maxId;

            const newItem ={ id: newMaxId, label: label, important: false, done: false };

            const newList = [
                ...todoList.slice(),
                newItem
            ];

            return {
                todoList: newList,
                maxId: newMaxId
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ todoList })=>{
            const idx = todoList.findIndex((el) => { return el.id === id });

            const newList = [
                ...todoList.slice(0, idx),
                ...todoList.slice(idx + 1),
            ];

            return {
                todoList: newList
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoList })=>{
            return {
                todoList: this.toggleProp(todoList, id, 'important')
            }
        });
    }
    
    onToggleDone = (id) => {
        this.setState(({ todoList })=>{
            return {
                todoList: this.toggleProp(todoList, id, 'done,')
            }
        });
    }

    render() {
        const importantCount = this.state.todoList.filter( (el) => el.important).length;
        const doneCount = this.state.todoList.filter( (el) => el.done).length;

        return (
            <div className="app-container">
                <AppHeader title='ToDo list project'/>
                <div className="margin-line"></div>
                <AddItem onItemAdded = { this.onItemAdded }/>
                <div className="margin-line"></div>
                <SearchPanel/>
                <div className="margin-line"></div>
                <ItemStatusFilter/>
                <div className="margin-line"></div>

                <div className="todo-counter">
                    <span className="todo-counter__item">Done: {doneCount}</span>
                    <span className="todo-counter__item">Important: {importantCount}</span>
                </div>

                <div className="margin-line"></div>

                <TodoList todos = {this.state.todoList} 
                    onDeleted = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                    />
            </div>
        );
    }
}

export default App;