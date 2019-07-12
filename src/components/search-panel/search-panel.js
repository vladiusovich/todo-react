import React from 'react';

const SearchPanel = (props) => {
    return (<div>
            <input placeholder="search" className='form-control ds-input' onChange={ (e) => props.onChangeSearchPanel(e.target.value)}></input>
        </div>);
}

export default SearchPanel;