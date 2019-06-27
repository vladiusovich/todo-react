import React from 'react';

const AppHeader = ({ title }) => {
    return (
        <div className='app-header d-flex'>
            <h1>{title}</h1>
        </div>
    );
}

export default AppHeader;