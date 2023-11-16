const USER = {
    username: 'ivan@gmail.com',
    password: '&$9yst_32hd'
}


const openModal = (modalId) => {
    //ф-ция открытия модалки по id

    let $modalContainer = document.querySelector('#' + modalId)
    let $fade = document.querySelector('.fade')
    if (!$modalContainer.classList.contains('closed')) return
    //если модал уже открыт, то быстрый выход из ф-ции

    $modalContainer.classList.remove('closed')

    if ($fade.classList.contains('hidden')) {
        $fade.classList.remove('hidden')
    }


}

const closeModal = (modalId) => {
    //закрваем тоже по id
    let $modalContainer = document.querySelector('#' + modalId)
    let $fade = document.querySelector('.fade')
    if (!$modalContainer.classList.contains('closed')) {
        $modalContainer.classList.add('closed')
    }
    //проверяем, нет ли открытых модалок и убираем fade
    if (document.querySelectorAll('.modal').length === document.querySelectorAll('.modal.closed').length) {
        $fade.classList.add('hidden')
    }

}
const replaceHeader = ( ) => {
     document.querySelector('.header-nav').innerHTML = `
        <div class="avatar">
            <img src="images/Avatar.png">
        </div>
     `
}

const loginVirify = () => {
    let usernameInputValue = document.querySelector('#username input').value
    let passwordInputValue = document.querySelector('#password input').value

    let checkSummary = 0

    if(usernameInputValue === USER.username ) {
        checkSummary++
    } else {
        document.querySelector('#username').classList.add('error')
    }

    if(passwordInputValue === USER.password ) {
        checkSummary++
    } else {
        document.querySelector('#password').classList.add('error')
    }

    if (checkSummary === 2) {
        replaceHeader()
        closeModal('loginModal')
    }

}

const emailValidate = () => {
    let usernameInputValue = document.querySelector('#username input').value
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

    return regex.test(usernameInputValue)
}

// открытие модала по клику

document.querySelector('.login-button').addEventListener('click', (e)=> {
    openModal('loginModal')
})

document.querySelector('.fade').addEventListener('click', (e)=> {
    //css селектор НЕ содержит класс .cloesd
    let modalId = document.querySelector('.modal:not(.closed)').id
    if (e.target.className === 'fade') closeModal(modalId)
    if (e.target.className === 'button' && e.target.id === 'cancelBtn') {
        closeModal(modalId)
    }

    //проверяем попадание в кнопку логина
    if (e.target.className === 'button button-primary' && 
        e.target.id === 'loginBtn') {
        if (!emailValidate()) {
            document.querySelector('#username').classList.add('error')
            return
        }
        loginVirify()
    }
})

