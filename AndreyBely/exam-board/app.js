import './style.css'
import {createWorkspace} from './src/components/workspace/workspace'


// Локальное Хранилище (БД); Можно записывать и получать данные
window.Store = {

  // tasks: [],  

  tasks: [

      {
        
        id: '1',
        title: 'Поправить иконку сайте',
        url: 'catalogapp.io',
        status: 'new',
        description: 'Поправить иконку сайте вправо на 20px',
        date_start: '22.01.2022',
        date_finish: '25.06.2022'

    } ,

    {
        
      id: '2',
      title: 'Поправить иконку сайте 2',
      url: 'catalogapp.io',
      status: 'new',
      description: 'Поправить иконку сайте вправо на 10px',
      date_start: '30.01.2022',
      date_finish: '31.01.2022'

  }

  ]

}

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


