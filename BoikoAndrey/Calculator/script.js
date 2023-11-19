// Получение коллекции кнопок
const $calc = document.querySelectorAll('span')
// Получение окна инпут
const $windowCalc = document.querySelector('.input')

// Массив для хранения числа после нажатия на знак
let result = []
// Массив для сбора числа при вводе
let x = []
// переменная для записи промежуточного ввода
let resultStr = ''


// Функция при некоректном вводе
const isError = () => {

    alert('ERROR')

}

// Слушатель нажатия на кнопки
$calc.forEach((e, i) => {
    
    e.addEventListener('click', (e) => {

        enterInt(e)

    })

})
// Отработка нажатий на клаватуру
const enterInt = (e) => {

    // console.log(e.target.innerHTML)
    // Для проверки на то что число
    let regexInt = new RegExp('[0-9]')

    // let regexMath = new RegExp('[+ - * /]')
    // Получение значения
    let int = e.target.innerHTML

    // Проверка на сбрасывание
    if(e.target.classList.contains ('dull')) {

        result = []
        
        resultStr = ''

        x = []

        $windowCalc.innerHTML = ''

        console.clear()

        console.log(result)

        console.log(x)
    }

    // console.log(typeof(int))
    
    // Проверка на число
    if (regexInt.test(int)) {
// Добавление числа после каждого нажатия___________________________________________________________________________________________________________________________________________________________
        x.push(int)
        x.forEach((elem) => {
            let num
            num = x.join('')
            $windowCalc.innerHTML = num
        })
        

    // Проверка на нажание математического знака
    } else if (int === '+' || int === '-'|| int === '/' || int === '*') {
        // Получение из первого масива строки
        result.push(x.join(''))
        // Добавление числа во второй массив
        result.push(int)
        // Сброс первого массива
        x = []
        // ЦИкл по массиву для расчета, что бы вывести данные на экран
        result.forEach ((e) => {
            resultStr += e
        })
        $windowCalc.innerHTML = resultStr

        resultStr = ''

        // Проверка на нажатие знака равенства
    } else if (int === '=') {
        result.push (x.join(''))
        result.push (int)
        console.log(result)
        let res = 0

        // ЦИкл по массиву для расчета, что бы вывести данные на экран
        result.forEach ((e) => {
            resultStr += e
        })
        $windowCalc.innerHTML = resultStr

        resultStr = ''
        if (result.length < 4) {
            if (!regexInt.test(result[0]) && !regexInt.test(result[2])) isError()

            switch (result[1]) {
                    
                case '/': res = +result[0] / +result[2]
                break
                case '*': res = +result[0] * +result[2]
                break
                case '+': res = +result[0] + +result[2]
                break
                case '-': res = +result[0] - +result[2]
                break
                
            }
        } else {

            // Проверка на корректны ввод
            if (!regexInt.test(result[0]) && !regexInt.test(result[2]) && !regexInt.test(result[3])) isError()
            // Проверка первого знака
            switch (result[1]) {

                case '/':
                    // Проверка второго знака
                    switch (result[3]) {
                        
                        case '/': res = +result[0] / +result[2] / +result[4]
                        break
                        case '*': res = +result[0] / +result[2] * +result[4]
                        break
                        case '+': res = +result[0] / +result[2] + +result[4]
                        break
                        case '-': res = +result[0] / +result[2] - +result[4]
                        break
                        
                    }
                break
                case '*':
                    
                    switch (result[3]) {

                        case '/': res = +result[0] * +result[2] / +result[4]
                        break
                        case '*': res = +result[0] * +result[2] * +result[4]
                        break
                        case '+': res = +result[0] * +result[2] + +result[4]
                        break
                        case '-': res = +result[0] * +result[2] - +result[4]
                        break
                        
                    }
                break
                case '+':

                    switch (result[3]) {

                        case '/': res = +result[0] + +result[2] / +result[4]
                        break
                        case '*': res = +result[0] + +result[2] * +result[4]
                        break
                        case '+': res = +result[0] + +result[2] + +result[4]
                        break
                        case '-': res = +result[0] + +result[2] - +result[4]
                        break
                        
                    }
                break
                case '-':
                    
                    switch (result[3]) {

                        case '/': res = +result[0] - +result[2] / +result[4]
                        break
                        case '*': res = +result[0] - +result[2] * +result[4]
                        break
                        case '+': res = +result[0] - +result[2] + +result[4]
                        break
                        case '-': res = +result[0] - +result[2] - +result[4]
                        break
                        
                    }
                break
                
            }
        }

        // res = toString(res)
        console.log(res)
        const $windowCalcSpan = document.createElement('span')
        $windowCalcSpan.innerHTML = res
        $windowCalc.append($windowCalcSpan)
        //  const $windowCalcSpan = $windowCalc.createElement('span')
        //  $windowCalc.append(<span>{res}</span>)
        // $windowCalc.innerHTML = '<span>res</span>'

        
        // ЦИкл по массиву для расчета, что бы вывести данные на экран
       

        resultStr = ''
        console.log(res)
        // обнуление массива для расчетов
        result = []

        x = []
        // объявление переменных для решения примера
        // let a = 0
        // let ab = 0
        // let b = 0
        // let bc = 0
        // let c = 0
        // let d = 0
        // Переменная для подсчета действий
        // let n = 0
        // let resultStr = ''

        // Цикл для вычисления примера
        // result.forEach((elem, i) => {
            // console.log(elem)
            // console.log(i)
            // console.log(regexInt.test(elem))
            // if (regexInt.test(elem)) {

            //     switch (i) {

            //         case '0': a = elem 
            //         break
            //         case '2': b = elem 
            //         break
            //         case '4': c = elem 
            //         break

            //     }
               
            // }    

            
            // } else {
            //     switch (elem) {

            //         case '*':
            //             if (i === 1 && n === 0) ab = a * b
            //             if (i === 1 && n !== 0) d = a * bc
            //             if (i === 3 && n === 0) bc = b * c
            //             if (i === 3 && n !==0) d = ab * c
            //             n++
            //         break

            //         case '/':
            //             if (i === 1 && n === 0) ab = a / b
            //             if (i === 1 && n !== 0) d = a / bc
            //             if (i === 3 && n === 0) bc = b / c
            //             if (i === 3 && n !==0) d = ab / c
            //             n++
            //         break

            //         case '+':
            //             if (i === 1 && n === 0) ab = a + b
            //             if (i === 1 && n !== 0) d = a + bc
            //             if (i === 3 && n === 0) bc = b + c
            //             if (i === 3 && n !==0) d = ab + c
            //             n++
            //         break
                    
            //         case '-':
            //             if (i === 1 && n === 0) ab = a - b
            //             if (i === 1 && n !== 0) d = a - bc
            //             if (i === 3 && n === 0) bc = b - c
            //             if (i === 3 && n !==0) d = ab - c
            //             n++
            //         break

            //     }
            // }
            // console.log(ab)
            // console.log(bc)

        // })
        // d = +a+(+b)+(+c)
        // console.log(d)

        

        // result.push(int)

        // console.log(result)

        // for(let item of result) {
        //     if (regexInt.test(item)) {
        //         resultStr = +item
        //     }

        // }

    
        // resultStr = result.join(' ')


        

    }

        
    
    



}

const getCalculation = () => {



}