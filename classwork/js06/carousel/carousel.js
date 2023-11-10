const $controlElements = document.querySelectorAll('.controls')
const $carouselContainer = document.querySelector('.carousel-container')
let itemWidth = 600

let controlsClickHandler = (e) => {
    console.dir(e.target.classList.contains('prev'))

    let translate = 0

    if (e.target.classList.contains('prev')) {
        translate -= itemWidth
    } else if (e.target.classList.contains('next')) {
        translate += itemWidth
    }

    $carouselContainer.style.transform='translateX(-'+ translate + 'px)'
    //что делаем, когда получили клик
    
}


$controlElements.forEach(element => {
    
    //тут происходят итерации цикла. перебор controlElements
    element.addEventListener(
        'click',
        controlsClickHandler
    )

})
