import './task.scss'

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
  `

  return elem
}
