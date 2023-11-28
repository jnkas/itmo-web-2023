import {createButton} from '../button/button'
import { updateTasklist } from '../tasklist/tasklist'
import './addtaskform.scss'

export const createAddTaskForm = () => {
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

    // функция cоздания - Кнопки Отмены 
    const CancelButton = createButton(false, 'Отменить', 'basic') // нет - иконки; действие - отменить; тип - базовая 

    // функция обработки - Кнопки Отмены
    CancelButton.addEventListener('click', () => {
        console.log(
            'модальное окно закрыто'
        ) 
    })

    // функция cоздания - Кнопки Сохранения 
    const SaveButton = createButton(false, 'Добавить', 'primary') // нет - иконки; действие - сохранить; тип - главная
    
    // функция обработки - Кнопки Сохранения 
    SaveButton.addEventListener('click', () => {

        // добавление новой задачи и сохранение данных в Локальное Хранилище - Store
        Store.tasks.push({
        
                // указание в id функции генерации случайных значений
                id: btoa(new Date().toISOString()).slice(-11),
                title: elem.querySelector('.title input').value, // указание ссылки на elem - add-task-form и сбор данных из ввода (input) в заголовке Модалки
                url: elem.querySelector('.url input').value,
                status:'new',
                description: elem.querySelector('.description textarea').value,
                date_start: elem.querySelector('.date-start input').value,
                date_finish: elem.querySelector('.date-finish input').value
        
        }) 

        // elem - проверка попадания через debbuger
        console.log(
                'сохраняем данные'
            ) 


        // визуальное обновление на странице - отрисовка UI - Tasklist
        updateTasklist() 

        // Закрытие Модального окна - вручную

        // получение (попадение) и запись Элемнета Модалки в Переменную
        let modal = elem.parentElement.parentElement
         // указание класса Фона-Затускнения при закрытие Модалки
         modal.parentElement.classList.remove('fade') 
        // указание прямого CSS стиля при закрытие для Модалки 
        modal.style.display = 'none'

        console.log(
                'модальное окно закрыто'
            ) 
        })


    
    // добавление в Кнопок - отмены и сохранения в DOM
    elem.querySelector('.form-controls').append(
        CancelButton,
        SaveButton
    ) 

    return elem

}



