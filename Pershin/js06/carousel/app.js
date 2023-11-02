import {createCarousel} from './_carousel.js'

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']

createCarousel('carousel-1', images, {
    loop: 0,
    indicators: 1,
    controls: 1
})