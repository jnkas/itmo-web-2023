import './task.scss';
import { updateTasklist } from '../tasklist/tasklist'
import { saveDataLS } from '../../controllers/localStorage'

// функция удаления Задачи
const removeTask = (id) => {
    // передача на вход параметра id в виде конкретного task
    Store.tasks.forEach((element, i) => {
        // i - итерация - индекс элемента
        if (element.id === id) {
            // проверка, где условие сработает тогда, когда тот id, который надо удалить - совпадет с id перебераемого в итерации элемента
            Store.tasks.splice(i, 1); // то передается индекса элемента и удаляется один элемент
            saveDataLS(); // если были удаления (обновления), то сохранить данные и запомнить состояние в Локальном Хранилище - localStore; можно заменить на Функцию отправки данных в БД на Cервер (Backend)
        }
    });

    // for (let i=0; i<Array.length; ++i)
    // Array[i]
};

export const createTask = (data) => {
    const elem = document.createElement('div');
    elem.className = 'task';
    elem.innerHTML = `
    <div class='cell name' data-index='${data.id}'>
        <input type='checkbox'/>  
        <div class='text'>
        <div class='title'>${data.title}</div>
        <div class='url'>${data.url}</div>
        </div>
    </div>
    <div class='cell status'>${data.status}</div>
    <div class='cell description'>${data.description}</div>
    <div class='cell date_start'>${data.date_start}</div>
    <div class='cell date_finish'>${data.date_finish}</div>
    <div class='cell controls'>
        <div class='button remove'>
            <img src='./trash_icon.svg'>
        </div>
    </div>
  `;

    elem.querySelector('.controls .remove').addEventListener('click', () => {
        removeTask(data.id); // запуск функции удаления, при клике
        updateTasklist(); // запуск функции обновления, при клике
    });

    return elem;
};

// data-index='${data.id}'> для отслеживания попадания в ячейку с frontend
