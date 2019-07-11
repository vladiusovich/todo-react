import React, {Component} from 'react';
import './add-item-form.css';

class AddItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            label: ''
        };
    }

    onChangeInput = (e) => {
        this.setState({ label: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);

        this.setState({
            label: ''
        });
    }

    render() {
        return (
        <form className="add-item d-flex" onSubmit = {this.onSubmit}>
            <input type="text" placeholder="label" className="form-control" onChange={this.onChangeInput} value={this.state.label}></input>
            <button>Add</button>
        </form>);
    }
}

export default AddItem;