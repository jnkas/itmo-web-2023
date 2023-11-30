import './modal.scss'

export const modalController = () => {


}

export const createModal = (content, data, id) => {
    
    const elem = document.createElement('div')
    elem.className = 'modals fade'
    elem.innerHTML = `
        <div class='modal'>
            <div class='content'></div>
        </div>
    `
    content && elem.children[0].append(content)

    return elem
}

export const closeModal = () => {
    document.querySelector('.modals').remove()
} 