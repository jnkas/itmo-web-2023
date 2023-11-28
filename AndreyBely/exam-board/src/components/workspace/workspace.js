import './workspace.scss'
import {createButton} from '../button/button'
import {createTasklist} from '../tasklist/tasklist'
import {createModal} from '../modal/modal'
import {createAddTaskForm} from '../addtaskform/addtaskform'

// Функция Конструктор, которая создает и возвращает каждый раз при вызове новый Элемент 
export const createWorkspace = () => { 

       const elem = document.createElement('div') // создание Элемента в DOM 
       elem.className = 'workspace' // назначение ему класса workspace

       elem.innerHTML = `
          <header>
               <div>Планировщик Задач</div>
               <div class='actions'></div> 
          </header>
          <div class='filter-bar'></div>
          <div class='task-container'></div> 
       `

       // функция создания Кнопки - Добавить задачу
       const addTaskButton = createButton('plus', 'Добавить задачу', 'primary')

       // функция обработки Клика на Кнопку(частный случай) - Добавить Задачу - в body
       addTaskButton.addEventListener('click', ()=> {

            const modalContainer = document.createElement('div') // создание и запись Элемента в DOM -  modalContainer
            modalContainer.className = 'modals fade' // назначение modalContainer - 2 Классов - modals и fade
            
            const AddTaskForm = createAddTaskForm() // создание (запись) частного компонента AddTaskForm

            modalContainer.append(createModal(AddTaskForm)) // добавление в modalContainer функцию - создания и вызова Модалки c частным AddTaskForm
            document.body.append(modalContainer) // добавление modalContainer в DOM - body
          }) 
 
          elem.querySelector('.actions').append(
               addTaskButton
          )
  
          const TaskList = createTasklist() // создание (запись) компонента TaskList
  
          elem.querySelector('.task-container').append(
               TaskList // добавление компонента TaskList в DOM - elem - workspaca
          )
      
          return elem

}






