import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';

const todoList = [
     { label: 'Купить хлеб', important: false },
     { label: 'Изучить React', important: false },
     { label: 'Заняться йогой', important: true },
     { label: 'Почитать книгу', important: true },
     { label: 'Подумать о бытии', important: false },
     { label: 'Ничего не делать', important: true },
     { label: 'Лечь спать', important: false },
];

const App = () => {
    return (
        <div>
            <AppHeader title='ToDo list project'/>
            <ItemStatusFilter/>
            <SearchPanel/>
            <TodoList todos = {todoList}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

