const $keys = document.querySelector('.keys')
const $displayCalc = document.querySelector('.input')
let x = []
let resultArr = []
let regex = /[0-9]/
let str = ''
let result = ''
const error = () => {
    $displayCalc.innerHTML = 'ERROR'
}
const createResult = (arr) => {
    console.log(arr)
    if (resultArr.length < 4) {
        switch (arr[1]){
            case '+': result = +arr[0] + +arr[2]
            break
            case '-': result = +arr[0] - +arr[2]
            break
            case '*': result = +arr[0] * +arr[2]
            break
            case '/': result = +arr[0] / +arr[2]
            break
        }
   } else {
    switch (arr[1]){
        case '+':
            switch (arr[3]){
                case '+': result = +arr[0] + +arr[2] + +arr[4] 
                break
                case '-': result = +arr[0] + +arr[2] - +arr[4]
                break
                case '*': result = +arr[0] + +arr[2] * +arr[4]
                break
                case '/': result = +arr[0] + +arr[2] / +arr[4]
                break
            }
        break
        case '-':
            switch (arr[3]){
                case '+': result = +arr[0] - +arr[2] + +arr[4] 
                break
                case '-': result = +arr[0] - +arr[2] - +arr[4]
                break
                case '*': result = +arr[0] - +arr[2] * +arr[4]
                break
                case '/': result = +arr[0] - +arr[2] / +arr[4]
                break
            }
        break
        case '*':
            switch (arr[3]){
                case '+': result = +arr[0] * +arr[2] + +arr[4] 
                break
                case '-': result = +arr[0] * +arr[2] - +arr[4]
                break
                case '*': result = +arr[0] * +arr[2] * +arr[4]
                break
                case '/': result = +arr[0] * +arr[2] / +arr[4]
                break
            }
        break
        case '/':
            switch (arr[3]){
                case '+': result = +arr[0] / +arr[2] + +arr[4] 
                break
                case '-': result = +arr[0] / +arr[2] - +arr[4]
                break
                case '*': result = +arr[0] / +arr[2] * +arr[4]
                break
                case '/': result = +arr[0] / +arr[2] / +arr[4]
                break
            }
        break
    }
   }
   console.log(result)
   const $result = document.createElement('span')
   $result.innerHTML = result
   $displayCalc.append($result)
}

const enterData = (data) => {
    const elem = data.innerHTML
    if (regex.test(elem)){
        str += elem
        x.push(elem)
        $displayCalc.innerHTML = str
    } else if (elem === '+' || elem ==='-' || elem === '*' || elem === '/') {
        if (resultArr.length === 4) return
        str += elem
        resultArr.push(x.join(''))
        x = []
        resultArr.push(elem)
        $displayCalc.innerHTML = str
    } else if (elem ==='AC') {
        str = ''
        x = []
        resultArr = []
        $displayCalc.innerHTML = str
    } else if (elem === '=') {
        str += elem
        resultArr.push(x.join(''))
        $displayCalc.innerHTML = str
        createResult(resultArr)   
    }
    
// $displayCalc.innerHTML = str
// $displayCalc.append($result || '')

}


$keys.addEventListener('click', (e) => {
   enterData(e.target)
})