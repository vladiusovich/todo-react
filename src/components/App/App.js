import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';

const App = ({todoList}) => {
    return (
        <div className="app-container">
            <AppHeader title='ToDo list project'/>
            <ItemStatusFilter/>
            <SearchPanel/>
            <TodoList todos = {todoList}/>
        </div>
    );
}

export default App;