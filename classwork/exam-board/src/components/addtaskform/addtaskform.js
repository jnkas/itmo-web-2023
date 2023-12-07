import { createButton } from '../button/button'
import { updateTasklist } from '../tasklist/tasklist'
import './addtaskform.scss'
import {saveDataLS} from '../../controllers/localStorage'
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

const validateForm = (dataObject, formElement)=> {

    // if (dataObject.title === '') return false
    // if (dataObject.date_finish === '') return false

    // return true

    //todo переделать параллельно, вместо последовательной проверки

    let isValid = true
    if (dataObject.title === '') isValid = false
    formElement.querySelector('.title').classList.toggle('error', !isValid )

    if (dataObject.date_finish === '') isValid = false
    formElement.querySelector('.date-finish').classList.toggle('error', !isValid )

    return isValid

}

export const createAddTaskForm = (data) => {
    const elem = document.createElement('div')
    elem.className = 'add-task-form'
    elem.innerHTML = `
        <div class='heading'>Добавить задачу</div>
        <form>
            <div class="input title">
                <label for="">Заголовок</label>
                <input type="text" placeholder="Введите название задачи">
                <div class="hint">Проверьте правильность введенных данных</div>
            </div>

            <div class="input url">
                <label for="">URL</label>
                <input type="text" placeholder="Введите url проекта">
                <div class="hint">Проверьте правильность введенных данных</div>
            </div>

            <div class="textarea description">
                <label for="">Описание</label>
                <textarea placeholder="Опишите задачу"></textarea>
                <div class="hint">Проверьте правильность введенных данных</div>
            </div>


            <div class='row'>
                <div class="input date-start">
                    <label for="">Дата начала</label>
                    <input type="text" placeholder="Введите дату начала">
                    <div class="hint">Проверьте правильность введенных данных</div>
                </div>

                <div class="input date-finish">
                    <label for="">Дата завершения</label>
                    <input type="text" placeholder="Введите дату завершения">
                    <div class="hint">Проверьте правильность введенных данных</div>
                </div>
            </div>

        </form>
        <div class='row form-controls'></div>
    `

    if (data) {
        elem.querySelector('.title input').value = data.title
        elem.querySelector('.url input').value = data.url
        elem.querySelector('.description textarea').value = data.description
        // elem.querySelector('.state input').value = data.state
        elem.querySelector('.date-start input').value = data.date_start
        elem.querySelector('.date-finish input').value = data.date_finish
    }

    let inputStartDate = elem.querySelector('.date-start input')
    let inputFinishDate = elem.querySelector('.date-finish input')

    new AirDatepicker(inputStartDate, {
        position: 'top center',
        dateFormat: 'dd.MM.yyyy'
    })

    new AirDatepicker(inputFinishDate, {
        position: 'top center',
        dateFormat: 'dd.MM.yyyy'
    })

    const CancelButton = createButton(null, 'Отменить', 'basic')

    CancelButton.addEventListener('click', ()=> {
        console.log(
            'модальное окно закрыто'
        )
    })

    const SaveButton = createButton(null, 'Добавить', 'primary')

    SaveButton.addEventListener('click', ()=> {

        let newId = btoa(new Date().toISOString()).slice(-11)

        let formData = {
            id: (data && data.id) ? data.id : newId,
            title: elem.querySelector('.title input').value,
            url: elem.querySelector('.url input').value,
            status: 'new',
            description: elem.querySelector('.description textarea').value,
            date_start: elem.querySelector('.date-start input').value,
            date_finish: elem.querySelector('.date-finish input').value
        }

        if(!validateForm(formData, elem)) return

        if (!data) {
            Store.tasks.push(formData)
        } else {
            Store.tasks.forEach((element, i) => {
                if (element.id === data.id) {
                    Store.tasks[i] = formData
                }
            })
        }
        
        //после обновления Store мы вызываем функцию запоминания в БД
        saveDataLS()

        console.log(
            'сохраняем данные'
        )

        updateTasklist()

        let modal = elem.parentElement.parentElement
        modal.parentElement.classList.remove('fade')
        modal.style.display = 'none'

        console.log(
            'модальное окно закрыто'
        )
    })

    elem.querySelector('.form-controls').append(
        CancelButton,
        SaveButton
    )


    return elem

}