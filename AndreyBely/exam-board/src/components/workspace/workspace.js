import './workspace.scss'
import {createButton} from '../button/button'
import {createTasklist} from '../tasklist/tasklist'

// Функция Конструктор, которая создает и возвращает каждый раз при вызове новый Элемент 
export const createWorkspace = () => { 

       const elem = document.createElement('div') // создание Элемента в DOM 
       elem.className = 'workspace'

       elem.innerHTML = `
          <header>
               <div>Plans</div>
               <div class="actions"></div>
          </header>
          <div class='filter-bar'></div>
          <div class='task-container'></div> 
       `

       const addTaskButton = createButton('plus', 'Добавить задачу', 'primary')

       elem.querySelector('.actions').append(addTaskButton)

       const TaskList = createTasklist()

       elem.querySelector('.task-container').append(TaskList)
    
       return elem

}




