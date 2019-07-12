import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    onClickFilter = (e) => {
        const value = e.target.value;
        this.props.onSelectFilter(value);
    }

    render () {

        const buttons = this.buttons.map(({name, label})=> {
            return <button type='button' className="btn btn-info" key={name}> { label } </button>
        });

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;