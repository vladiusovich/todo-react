import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const todoList = [
     { id: 1, label: 'Купить хлеб', important: false, done: false },
     { id: 2, label: 'Изучить React', important: false, done: false },
     { id: 3, label: 'Заняться йогой', important: true, done: false },
     { id: 4, label: 'Почитать книгу', important: true, done: false },
     { id: 5, label: 'Подумать о бытии', important: false, done: false },
     { id: 6, label: 'Ничего не делать', important: true, done: false },
     { id: 7, label: 'Лечь спать', important: false, done: false },
];

ReactDOM.render(<App todoList = {todoList} />, document.getElementById('root'));

