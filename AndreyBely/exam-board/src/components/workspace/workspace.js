import './workspace.scss'

// Функция Конструктор, которая создает и возвращает каждый раз при вызове новый Элемент 
export const createWorkspace = () => { 

       const elem = document.createElement('div') // создание Элемента в DOM 
       elem.className = 'workspace'

       elem.innerHTML = `
       <header>
            <div>Plans</div>
            <div class="action"></div>
       </header> 
       `

       return elem
    
}




