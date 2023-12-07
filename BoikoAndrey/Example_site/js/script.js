const $tooltip = document.querySelectorAll('.tooltip')

const info = (e) => {

    console.dir(e.target)

}

$tooltip.forEach((e) => {

    e.addEventListener('mouseover', info)

})
