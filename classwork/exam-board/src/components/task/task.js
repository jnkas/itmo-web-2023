import { updateTasklist } from '../tasklist/tasklist'
import './task.scss'

const removeTask = (id) => {
    Store.tasks.forEach((element, i) => {
        if (element.id === id) {
            Store.tasks.splice(i, 1)
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
    </div>
  `

  elem.querySelector('.controls .remove').addEventListener(
    'click', () => {
        removeTask(data.id)
        updateTasklist()
    }
    
  )

  return elem
}
