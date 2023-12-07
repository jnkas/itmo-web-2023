const initToolTip = () => {
    // Code
    // Пройти по каждому с tooltip и при наведении показывает текст с value из данной плашки
    let plashkaToolTip = document.querySelectorAll('.tooltip')
    let arrFromPlashka = Array.from(plashkaToolTip)

    const printSomeText = (e) => {
        let toolTipContainer = document.createElement('div')
        toolTipContainer.className = 'some-text'
        toolTipContainer.innerHTML = `
            <span>Нажмите для перехода к разделу ` + e.target.firstChild.nodeValue + `</span>
        `
        e.target.append(toolTipContainer)
    }

    const deleteSomeText = (e) => {
        let el = document.querySelector('.some-text')
        el.remove();
    }

    arrFromPlashka.forEach((item) => {
        item.addEventListener('mouseover', printSomeText)
    })
    arrFromPlashka.forEach((item) => {
        item.addEventListener('mouseout', deleteSomeText)
    })
}

initToolTip()
