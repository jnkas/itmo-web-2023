import { updateTasklist } from '../tasklist/tasklist'
import './task.scss'
import {saveDataLS} from '../../controllers/localStorage'
import {createModal} from '../modal/modal'
import {createAddTaskForm} from '../addtaskform/addtaskform'
import {gsap} from 'gsap'

const removeTask = (id) => {
    Store.tasks.forEach((element, i) => {
        if (element.id === id) {
            Store.tasks.splice(i, 1)
            saveDataLS()
        }
    })
}

const editTask = (id) => {
    Store.tasks.forEach((element, i) => {
        if (element.id === id) {
            //тут открываем модалку
            let data = element

            const modalContainer = document.createElement('div')
            modalContainer.className = 'modals fade'

            const AddTaskForm = createAddTaskForm(data)

            const modal = createModal(AddTaskForm)

            modalContainer.append(modal)
            document.body.append(modalContainer)
            gsap.from(modal, {
                opacity: 0,
                y: -100,
                duration: 0.3
            })

        }
    })
}

export const createTask = (data) => {
  const elem = document.createElement('div')
  elem.className = 'task'
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
        <div class='button edit'>
            <img src='./edit_icon.svg'>
        </div>
    </div>
  `

  elem.querySelector('.controls .remove').addEventListener(
    'click', () => {
        removeTask(data.id)
        updateTasklist()
    }
  )

  elem.querySelector('.controls .edit').addEventListener(
    'click', () => {
        editTask(data.id)
    }
  )

  return elem
}
