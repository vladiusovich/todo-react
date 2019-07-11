import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const todosItems = todos.map((item)=>{
        return <TodoListItem key={item.id} {...item}
                onDeleted={ () => onDeleted(item.id) }
                onToggleImportant={ () => onToggleImportant(item.id) }
                onToggleDone={ () => onToggleDone(item.id) }
            />
    });

    return (
        <ul className='list-group todo-list'>
            { todosItems }
        </ul>
    );
}

export default TodoList;