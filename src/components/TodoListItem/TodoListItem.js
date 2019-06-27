import React from 'react';
import './todoListItem.css';

const TodoListItem = ({ label, important }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (<div className="todo-list-item">
        <span className="todo-list-item-label" style={style}> { label } </span>

        <div className="float-right">
            <button type="button" className="btn b-btn-outline-success btn-outline-success btn-sm">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o"/>
            </button>
        </div>

    </div>);
}

export default TodoListItem;