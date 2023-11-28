import './tasklist.scss';
import {createTask} from '../task/task';
 
export const createTasklist = () => { 
 
    // создание Элемента в DOM 
    const elem = document.createElement('div') 
    elem.className = 'tasklist';

    // const Task = createTask()

    // перебор циклом объектов tasks из Store; 
    for (let item of Store.tasks) {
        // console.log(item)
        elem.append(createTask(item)) // создание элементов (под каждый объект создается строчка задач) и слияние в один; до построения DOM, а потом уже добавление в него

    }

    // если данных 0 - цикла не произойдет; если Пустой Массив, то вывести в HTML - 'Задач нет'.
    if (Store.tasks.length === 0) elem.innerHTML = 'Задач нет'

    return elem

}

// будем 2 таблицы - суть функции - удалить старый tasklist и добавить новый tasklist
export const updateTasklist = () => {

    document.querySelector('.task-container').innerHTML = '' // удаляется то, что находится внутри tasklist

    document.querySelector('.task-container').append(createTasklist()) // добавление tasklist в функцию createTasklist, где создается новый список задач
}

