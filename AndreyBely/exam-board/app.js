import './style.css'
import viteLogo from '/vite.svg'

const createApp = (container) => { // передача параметра с именем container, куда при вызове попадет Элемент DOM - app
    
    const Panel = document.createElement('div') // создание Элемента (Компонента) в DOM и запись в переменную с большой буквы, как обозначения Компонента 
    Panel.className = 'side' // добавление Класса (Имени) Элементу
    const Workspace = document.createElement('div') // создание Элемента (Компонента) в DOM и запись в переменную с большой буквы, как обозначения Компонента 
    Workspace.className = 'workspace' // добавление Класса (Имени) Элементу

    container.append( // добавления Элементов с помощью Метода Элемента append, в Элемент DOM - app, как children
      Panel, 
      Workspace 
    )
    
}

createApp(document.querySelector('#app'))


