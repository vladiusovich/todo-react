import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'important', label: 'Important' },
        { name: 'done', label: 'Done' }
    ];

    render () {

        const buttons = this.buttons.map(({name, label})=> {
            const isActive = name === this.props.filter;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return <button type='button' className={`btn ${clazz}`} key={name} onClick = {()=> this.props.onSelectFilter(name)}> { label } </button>
        });

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;