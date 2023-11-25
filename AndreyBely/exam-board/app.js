import './style.css'
import {createWorkspace} from './src/components/workspace/workspace.js'

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


