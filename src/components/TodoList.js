import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './TodoListItem';
import { unlink } from 'fs';

const TodoList = () => {
    return (
        <ul>
           <TodoListItem label="A" important/>
           <TodoListItem label="A" />
           <TodoListItem label="A" important/>
        </ul>
    );
}

export default TodoList;