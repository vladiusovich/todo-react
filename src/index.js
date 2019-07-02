import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const todoList = [
     { id: 1, label: 'Купить хлеб', important: false },
     { id: 2, label: 'Изучить React', important: false },
     { id: 3, label: 'Заняться йогой', important: true },
     { id: 4, label: 'Почитать книгу', important: true },
     { id: 5, label: 'Подумать о бытии', important: false },
     { id: 6, label: 'Ничего не делать', important: true },
     { id: 7, label: 'Лечь спать', important: false },
];

ReactDOM.render(<App todoList = {todoList} />, document.getElementById('root'));

