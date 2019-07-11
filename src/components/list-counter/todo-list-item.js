import React, {Component} from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { label, done, important } = this.props;
        let className = done ? 'todo-list-item done' : 'todo-list-item';

        if (important) {
            className += ' important'
        }
    
        return (
        <div className={className}>
            <span className="todo-list-item-label" 
                onClick={this.props.onToggleDone}> 
                { label } 
            </span>
    
            <div className="float-right">
                <button type="button" className="btn b-btn-outline-success btn-outline-success btn-sm"
                    onClick={this.props.onToggleImportant}
                >
                    <i className="fa fa-exclamation"/>
                </button>
    
                <button type="button" className="btn btn-outline-danger btn-sm" 
                    onClick = {this.props.onDeleted}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
    
        </div>);
    }
}

export default TodoListItem;