import './style.css'
import {createCarousel} from './src/carousel/_carousel.js'

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']

createCarousel('app', images, {
    loop: 0,
    indicators: 1,
    controls: 1
})