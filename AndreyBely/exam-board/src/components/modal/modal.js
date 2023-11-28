import './modal.scss'

// функция обработчик, которая проверяет есть ли уже какие-либо модалки в fade-container 
export const modalController = () => {

}
 
// функция создания Модала, который после добавляется в DOM;
export const createModal = (content, data, id) => { // передача в параметры: различного контента модалки; каких то данных; id модала, т.к модальных окон может быть несколько
    const elem = document.createElement('div')
    elem.className = 'modal'
    elem.innerHTML = `
        <div class='content'></div>
    `

    // elem.children[0].append(content) // добавление content, как 0 потомка
    content && elem.children[0].append(content) // проверка - есть ли контент && добавление content, как 0 потомка

    return elem 

}

