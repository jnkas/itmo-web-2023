import './style.css'
import { createWorkspace } from './src/components/workspace/workspace.js'
import { loadDataLS } from './src/controllers/localStorage.js'


// Буфер Данных - Задач, в который можно добавлять и получать данные на время Сессии //
window.Store = {

  // tasks: [],  

  // комментировать объекты в массиве tasks, если есть строка window.Store.tasks = loadDataLS()
  tasks: [
  
    //   {
        
    //     id: '1',
    //     title: 'Добавить Контент',
    //     url: 'catalogapp.io',
    //     status: ' new',
    //     description: 'Добавить новый Видео-Материал на Сайт',
    //     date_start: '27.11.2023',
    //     date_finish: '31.11.2023'

    // },

    // {
        
    //   id: '2',
    //   title: 'Удалить Контент',
    //   url: 'catalogapp.io',
    //   status: 'new',
    //   description: 'Удалить неактульные статьи с Сайта',
    //   date_start: '27.11.2023',
    //   date_finish: '31.11.2023'
    
    // },

    // {

    //   id: '3',
    //   title: 'Логотип',
    //   url: 'catalogapp.io',
    //   status: 'new',
    //   description: 'Обновить Логотип Сайта',
    //   date_start: '27.11.2023',
    //   date_finish: '31.11.2023'
    // }

  ]

}

// синхронизация данных с Локальным Хранилищем - localStore
// функция возвращает данные (return) и присвает их в tasks
window.Store.tasks = loadDataLS()

const createApp = (container) => { // передача параметра с именем container, куда при вызове попадет Элемент DOM - app

    const Panel = document.createElement('div') // создание Элемента (Компонента) в DOM и запись в переменную с большой буквы, как обозначения Компонента 
    Panel.className = 'side' // добавление Класса (Имени) Элементу

    const Workspace = createWorkspace() // вызов Функции и запись 1 Элемента в Переменную
    // const Workspace = createWorkspace() // вызов Функции и запись 1 Элемента в Переменную
  
    container.append( // добавления Элементов с помощью Метода Элемента append, в Элемент DOM - app, как children
      Panel, 
      Workspace 
    )
    
}

createApp(document.querySelector('#app'))


