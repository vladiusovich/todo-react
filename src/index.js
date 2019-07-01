import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const todoList = [
     { label: 'Купить хлеб', important: false },
     { label: 'Изучить React', important: false },
     { label: 'Заняться йогой', important: true },
     { label: 'Почитать книгу', important: true },
     { label: 'Подумать о бытии', important: false },
     { label: 'Ничего не делать', important: true },
     { label: 'Лечь спать', important: false },
];


ReactDOM.render(<App todoList = {todoList} />, document.getElementById('root'));

