const images = ['images/img_1.jpg', 'images/img_2.jpg', 'images/img_3.jpg']

const createCarousel = (elemId, images) => {
    // нашли элемент по ID
    const $mainContainer = document.getElementById(elemId)

    // создаем ДИВ, даем класс и через цикл помещаем в него дивы с картинками
    const $containerCarousel = document.createElement('div')

    $containerCarousel.className = 'container-carousel'

    for (let item of images) {

        let $itemCarousel = document.createElement('div')

        $itemCarousel.className = 'item-carousel'

        $itemCarousel.innerHTML = '<img src="' + item + '" alt="">'

        $containerCarousel.append($itemCarousel)

    }

    // создаем ДИВ, даем класс и помещаем в него два ДИВА кнопки
    const $containerButtonSlide = document.createElement('div')

    $containerButtonSlide.className = 'container-button-slide'
    
    $containerButtonSlide.innerHTML = `
        <div class="button-slide prev"><</div>
        <div class="button-slide next">></div>
    `

    // создаем ДИВ для индикаторов
    const $containerIndicator = document.createElement('div')

    $containerIndicator.className = 'container-indicator'

    $containerIndicator.innerHTML = `
        <div class="indicator" data-index="0"></div>
        <div class="indicator" data-index="1"></div>
        <div class="indicator" data-index="2"></div>
    `
    $mainContainer.append($containerCarousel)
    $mainContainer.append($containerButtonSlide)
    $mainContainer.append($containerIndicator)

    const $buttonSlideCollection = document.querySelectorAll('.button-slide')

    const $itemCollection = document.querySelectorAll('.item-carousel')

    const $indicatorCollection = document.querySelectorAll('.indicator')

    let widthItem = $containerCarousel.offsetWidth

    let itemColectionLength = $itemCollection.length
    // зацикливание
    let loop = 1 
    // смещение
    let translate = 0
    // переменная для индикации при нажатии кнопок
    let indexIndicator = 0 
    // функция нажатия кнопок 
    const handlerClickButton = (e) => {
        
        if (e.target.classList.contains('prev')) {
    
            if(!translate) {
    
                if (!loop) return
    
                translate = -(itemColectionLength - 1) * widthItem
    
            } else {
    
                translate += widthItem
    
            }
    
        } else if (e.target.classList.contains('next')){
    
            if(translate === -(itemColectionLength - 1) * widthItem ) {
    
                if (!loop) return
    
                translate = 0
    
            } else {
    
                translate -= widthItem
    
            }
        
        }
        $containerCarousel.style.transform='translateX(' + translate + 'px)'

        indexIndicator = Math.abs(translate / widthItem)
        
        indicatorActive(indexIndicator)
    }
    // ффункция нажатия индикатора
    const handlerClickIndicator = (event) => {

        switch (event.target.dataset.index){
    
            case '0': translate = 0
            break
    
            case '1': translate =  -(widthItem)
            break
    
            case '2': translate= -(widthItem * 2)
            break   
        }
    
        $containerCarousel.style.transform='translateX(' + translate + 'px)'
    
        indicatorActive(+event.target.dataset.index)
    
    }
    // функция отслеживания позиции слайда и индикации
    const indicatorActive = (indexIndicator) => {
    
        $indicatorCollection.forEach((e, i) => {
    
            e.className = 'indicator'
    
            i === indexIndicator ? e.classList.add('indicator-active') : ''
    
        })
      
    }
    // слушатель нажатия на индикатор
    $indicatorCollection.forEach((event) => {
    
        event.addEventListener('click', handlerClickIndicator)
     
    })
    // слушатель нажатия на кнопки   
    $buttonSlideCollection.forEach((e) => {

        e.addEventListener('click', handlerClickButton)
    
    })
    // вызов функции отслеживания слайда
    indicatorActive(indexIndicator)
}


createCarousel('carousel', images)
