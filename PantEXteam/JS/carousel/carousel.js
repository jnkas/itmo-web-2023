const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']

// TODO Перенести функции внутрь 1 функции (последней), тогда будет работать переход

const createCarousel = (elemID, images) => {
    // Выбираем, куда внедряем нашу карусель
    const $mainContainer = document.getElementById(elemID)

    // Создание строки с картинками
    const $carouselContainer = document.createElement('div')
    $carouselContainer.className = 'carousel-container'
    for (let item of images) {
        let $imgContainer = document.createElement('div')
        $imgContainer.className = 'carousel-item'
        $imgContainer.innerHTML = '<img src="' + item + '" alt="">'
        $carouselContainer.append($imgContainer)
    }

    // Создание контролов (стрелочек)
    const $controlsElements = document.createElement('div')
    $controlsElements.className = 'carousel-controls'
    $controlsElements.innerHTML = `
        <div class="controls prev"><</div>
        <div class="controls next">></div>
    `

    // Создание индикаторов
    const $indicatorsElements = document.createElement('div')
    $indicatorsElements.className = 'carousel-indicators'
    for (let p = 0; p < images.length; p++) {
        $indicatorContainer = document.createElement('div')
        if (p === 0) {
            $indicatorContainer.className = 'dot active'
        } else {
            $indicatorContainer.className = 'dot'
        }
        $indicatorsElements.append($indicatorContainer)
    }

    $mainContainer.append($carouselContainer)
    $mainContainer.append($controlsElements)
    $mainContainer.append($indicatorsElements)

    const $indicatorsContainer = document.querySelector('.carousel-indicators')
    let itemWidth = $carouselContainer.offsetWidth
    let translate = 0
    let currentImg = 0
    // Включить и выключить режим петли
    let loop = 1
    let imgQuantity = $carouselContainer.children.length
    let arrFromCollectionControls = Array.from($controlsElements.children)

    // Изменение индикаторов снизу
    let updateIndicators = () => {
        // Преобразование HTML collection в массив
        let arrFromCollectionIndicators = Array.from($indicatorsContainer.children)
        arrFromCollectionIndicators.forEach((elem, index) => {
            /* Вариант 1
            // Перезатрем все классы и оставим только dot
            // Доп вариант вместо remove
            elem.className = 'dot'
            // Если индекс дота равен индексу картинки, то добавим dot active
            if (index === currentImg) {
                elem.className = 'dot active'
            }
             */
            // Вариант 2
            // По другому записать то, что сверху
            //elem.className = (index === currentImg) ? 'dot active' : 'dot'

            // Вариант 3
            // По взрослому записать то, что сверху
            elem.className = 'dot ' + ((index === currentImg) ? 'active' : '')
        })
    }

    // Карусель картинок, перемещение
    const controlsClickHandler = (e) => {
        //Зацикливание
        if (e.target.classList.contains('prev')) {
            if (translate !== 0) {
                translate += itemWidth
            } else {
                if (loop) translate = (imgQuantity - 1) * itemWidth * -1
            }
        } else if (e.target.classList.contains('next')) {
            //перемотка
            if ((imgQuantity - 1) * itemWidth !== -translate) {
                translate -= itemWidth
            } else {
                if (loop) translate = 0
            }
        }
        // Вычисляем индекс картинки и вызываем изменение индикатора снизу
        currentImg = Math.abs(translate / itemWidth)
        updateIndicators()

        $carouselContainer.style.transform = 'translateX(' + translate + 'px)'
    }

    arrFromCollectionControls.forEach((item) => {
        item.addEventListener('click', controlsClickHandler)
    })

}
createCarousel('carousel', images)


