const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']


let updateIndicators = () => {
  let arrFromCollection = Array.from($indicatorsContainer.children)

  arrFromCollection.forEach((elem, index) => {
    // elem.className = 'dot'
    // if (index === currentImg) {
    //     elem.className = 'dot active'
    // }

    elem.className = 'dot ' + (index === currentImg) ? 'active' : ''
  })
}

let controlsClickHandler = (e) => {
  console.dir(e.target.classList.contains('prev'))

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

  currentImg = Math.abs(translate / itemWidth)
  console.log('index ' + currentImg)

  updateIndicators()

  $carouselContainer.style.transform = 'translateX(' + translate + 'px)'
  //что делаем, когда получили клик
}

// $controlElements.forEach((element) => {
//   //тут происходят итерации цикла. перебор controlElements
//   element.addEventListener('click', controlsClickHandler)
// })

const createCarusel = (elemId, images ) => {

    const $mainContainer = document.getElementById(elemId)

    //создание контролов
    const $controlElements = document.createElement('div')
    $controlElements.className = 'carousel-controls'
    $controlElements.innerHTML = `
        <div class="controls prev"><</div>
        <div class="controls next">></div>
    `
    const $carouselContainer = document.createElement('div')
    $carouselContainer.className = 'carousel-container'

    for (let item of images) {
        let $imgContainer = document.createElement('div')
        $imgContainer.className = 'carousel-item'
        $imgContainer.innerHTML = '<img src="' + item + '" alt="">'
        $carouselContainer.append($imgContainer)
    }



    // const $indicatorsContainer = document.querySelector('.carousel-indicators')
    // let itemWidth = $carouselContainer.offsetWidth
    // let translate = 0
    // let loop = 1
    // let imgQuantity = $carouselContainer.children.length
    // let currentImg = 0

    // let template = `
    //     <div class="carousel-container">

    //         <div class="carousel-item">
    //             <img src="img2.jpg" alt="">
    //         </div>
    //         <div class="carousel-item">
    //             <img src="img3.jpg" alt="">
    //         </div>
    //     </div>
    //     <div class="carousel-indicators">
    //         <div class="dot active"></div>
    //         <div class="dot"></div>
    //         <div class="dot"></div>
    //     </div>
    // `

    $mainContainer.append($carouselContainer)
    $mainContainer.append($controlElements)
    
    
}

createCarusel('carousel-1', images)
