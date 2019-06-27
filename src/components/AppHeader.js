import React from 'react';
import ReactDOM from 'react-dom';
import { tsPropertySignature } from '@babel/types';

const AppHeader = ({ title }) => {
    return (
        <h1>{title}</h1>
    );
}

export default AppHeader;