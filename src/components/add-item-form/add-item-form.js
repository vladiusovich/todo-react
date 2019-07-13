import React, {Component} from 'react';
import './add-item-form.css';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();

        this.state = {
            label: ''
        };
    }

    onChangeInput = (e) => {
        this.setState({
             label: e.target.value
         });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const label = this.state.label;

        if (label === '') {

            this.inputRef.current.classList.remove('warning');
            this.inputRef.current.focus();
            
            window.requestAnimationFrame(() => {
                this.inputRef.current.classList.add('warning');
            });

        } else {
            this.props.onItemAdded(label);

            this.setState({
                label: ''
            });
        }
    }

    render() {
        return (
        <form className="add-item d-flex" onSubmit = {this.onSubmit}>
            <input ref={this.inputRef} type="text" placeholder="Whats need to be done" className={`form-control`} onChange={this.onChangeInput} value={this.state.label}></input>
            <button>Add</button>
        </form>);
    }
}

export default AddItem;