import React from 'react';
import ReactDOM from 'react-dom';

const TodoListItem = ({ label, important }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };

    return <li style= {style}>{label}</li>;
}

export default TodoListItem;