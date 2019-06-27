import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './todoList.css';

const TodoList = ({ todos }) => {
    const todosItems = todos.map((item, index)=>{
        return <TodoListItem key={index} label={item.label} important = {item.important}/>
    });

    return (
        <ul className='list-group todo-list'>
            { todosItems }
        </ul>
    );
}

export default TodoList;