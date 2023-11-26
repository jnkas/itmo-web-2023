import './task.scss'
 
export const createTask = (item) => { 
    
    // создание Элемента в DOM 
    const elem = document.createElement('div') 
    elem.className = 'task';

    elem.innerHTML = `
            <div class='cell' data-index='${item.id}'>  
                <div class='title'>${item.title}</div>
                <div class='url'>${item.url}</div>
            </div>

            <div class='cell'>
                    ${item.status}
            </div>

            <div class='cell'>
               ${item.description}
            </div>

            <div class='cell'>
               ${item.date_start}
            </div>

            <div class='cell'>
                ${item.date_finish}
            </div>

        ` 

    return elem

}

// data-index='${data.id}'> для отслеживания попадания в ячейку с frontend