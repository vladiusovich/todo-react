import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './todoList.css';

const TodoList = ({ todos, onDeleted }) => {
    const todosItems = todos.map((item, index)=>{
        return <TodoListItem key={item.id} label={item.label} important = {item.important} onDeleted={ () => onDeleted(item.id) }/>
    });

    return (
        <ul className='list-group todo-list'>
            { todosItems }
        </ul>
    );
}

export default TodoList;