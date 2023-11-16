
const initTooltip = () => {

    //Обработчик наведения
    // const handlerMouseover = (e)=> {
    //     //элемент на который навели
    //     let $elem = e.currentTarget
    //     if ($elem.children.length && $elem.children[0].className === 'box') return
    //     let box = document.createElement('div')
    //     box.className = 'box'
    //     //надо как-то получить название лейбла
    //     let labelText = $elem.innerText
        box.innerHTML = `<span>Нажмите для перехода к ${labelText}</span>`
    //     box.style.opacity = 1
    //     $elem.append(box)
    // }

    
        const toolMouseOverHandler = (e) => {
          let $eleme = e.target   //e.currentTarget
          if ($eleme.children.length !== 0 && $eleme.className === 'box') return
          //  $eleme.className === 'box'
          // if ($eleme.className === 'box' || $eleme.children[0].className==='box') return
          let box = document.createElement('div')
          box.className = 'box'
          let tooltipTex = $eleme.innerText
          box.innerHTML =
            '<span>Нажмите на кнопку для перехода в ' + tooltipTex + '</span>'
          $eleme.append(box)
        }
      
    //Обработчик "покидания" элемента
    const handlerMouseout = (e)=> {
        let $elem = e.currentTarget
        $elem.querySelector('.box').remove()
    }

    //Собираем все tooltip
    let $tooltipCollections = document.querySelectorAll('.tooltip')
    $tooltipCollections.forEach(
        ($elem, i) => {
            $elem.addEventListener('mouseover', toolMouseOverHandler)
            // $elem.addEventListener('mouseover', handlerMouseover)
            $elem.addEventListener('mouseout', handlerMouseout)
        }
    )

}

initTooltip()

