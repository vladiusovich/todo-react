import React, {Component} from 'react';
import './todoListItem.css';

class TodoListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            done: false,
            important: props.important
        }
    }

    onLabelClick = () => {
        this.setState((state)=> {
            return {
                done: !this.state.done,
            }
        }); 
    }

    // onTrashClick = (id) => {
    //     props.onDeleted();
    // }

    onImportantClick = () => {
        this.setState((state)=> {
            return {
                important: !state.important
            }
        }
        
        ); 
    }

    render() {
        const {label} = this.props;
        const { done, important } = this.state;
        let className = done ? 'todo-list-item done' : 'todo-list-item';

        if (important) {
            className += ' important'
        }
    
        return (
        <div className={className}>
            <span className="todo-list-item-label" 
            onClick={this.onLabelClick}
            > 
                { label } 
            </span>
    
            <div className="float-right">
                <button type="button" className="btn b-btn-outline-success btn-outline-success btn-sm"
                onClick={this.onImportantClick}
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