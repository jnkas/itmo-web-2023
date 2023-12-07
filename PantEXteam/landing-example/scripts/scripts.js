let $logInButton = document.querySelector('.header-nav').querySelector('.button')
let $modalContainer = document.querySelector('.fade')
let $logInModalButton = document.querySelector('.modal-buttons').querySelector('.button-primary')
let $hintText = document.querySelector('.hint')

const username =  'ivan@gmail.com'
const userPassword = '&$9yst_32hd'

// Показать модальное окно
const openModal = () => {
    $modalContainer.className = 'fade'
}

// Закрыть модальное окно при fade и cancelbtn
const closeModal = (e) => {
    if (e.target.classList.contains('fade') || e.target.classList.contains('button-cancel')) {
        $modalContainer.className = 'fade hidden'
    }
}

// Проверка логина и пароля
const verifyEnter = () => {
    let $userLogin = document.querySelector('#username').value
    let $userPassword = document.querySelector('#password').value
    if ($userLogin === username && $userPassword === userPassword) {
        $modalContainer.className = 'fade hidden'
    } else {
        $hintText.className = 'hint'
    }
}

$logInButton.addEventListener('click', openModal)
$modalContainer.addEventListener('click', closeModal)
$logInModalButton.addEventListener('click', verifyEnter)

// TODO Усилить модалку, бордер красным, если не верно в функции verifyEnter