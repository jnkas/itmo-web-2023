const USER = {
    email: 'ivan@gmail.com',
    password: '&$9yst_32hd',
}

let result = 0

const $fade = document.querySelector('.fade')
const $button = document.querySelectorAll('.button')
const $containerInfo = document.querySelector('#modal-autorisacion')
const $bankCard = document.querySelector('#modal-bank')
const $input = document.querySelectorAll('.modal .container-input input')
const $headerButton = document.querySelectorAll('.header .button')
const $avatar = document.querySelector('.header .avatar')
const $hint = document.querySelectorAll('.container-input .hint')

const openAutorisation = () => {

    $fade.classList.remove('hidden')
    $containerInfo.classList.remove('hidden')

}

const openBankCard = () => {

    $fade.classList.remove('hidden')
    $bankCard.classList.remove('hidden')

}

const closeModal = () => {

    $fade.classList.add ('hidden')
    $bankCard.classList.add ('hidden')
    $containerInfo.classList.add ('hidden')

    $input.forEach ((e) => {
        e.classList.remove('error')
    })

    $hint.forEach ((e) => {
        e.classList.add('hidden')
    })

    

}

const isError = () => {
    
    $input.forEach ((e) => {
        e.classList.add('error')
    })

    $hint.forEach ((e) => {
        e.classList.remove('hidden')
    })

}

const isLegal = () => {

    $input.forEach ((e) => {
        e.classList.add('error')
    })

    $hint.forEach ((e) => {
        e.classList.add('hidden')
    })


    $headerButton.forEach ((e) => {
        e.classList.add('hidden')
    })

    $avatar.classList.remove('hidden')

    closeModal()
}

const getAutorisacion = () => {
    
    let emailUs = document.querySelector ('#email').value
    let passwordUs = document.querySelector ('#pass').value
    
    if (USER.email === emailUs &&  USER.password === passwordUs) {

        isLegal()

    } else {

        isError()

    }
}

const getLissener = (e) => {
    console.dir(e.target)

    let but = e.target.dataset.name

    switch (but){
        case 'start': openBankCard()
        break
        case 'log_in': openAutorisation()
        break
        case 'cancel': closeModal()
        break
        case 'enter': getAutorisacion()
        break
    }
    
} 

$fade.addEventListener('click', (e) => {

    e.target === e.currentTarget ? closeModal() : ''
})

$button.forEach((e) => {

    e.addEventListener('click', getLissener)

})

