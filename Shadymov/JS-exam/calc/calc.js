const output = document.querySelector('.equation')
const outcome = document.querySelector('.result')
const buttons = document.querySelectorAll('.keys span')
const symbols = ['/', '*', '%', '+', '-', '=']
const specialSymbols = ['AC', 'DE']
let result = ''
let equation = ''
let counter = 0

const calculate = (btn) => {
  if (
    //после нажатия на равно нажимаем на цифру -> операции сбрасыватеся
    counter &&
    !symbols.includes(btn) &&
    !specialSymbols.includes(btn)
  ) {
    equation = btn
    result = ''
    counter = 0
  } else if (counter && symbols.includes(btn) && btn !== '=') {
    //после нажатия на равно нажимаем на любой знак кроме равно -> результат сохраняется
    equation = result += btn
    result = ''
    counter = 0
  } else if (counter && btn === '=') {
    //нажимаем на равно с сохранением последней операции
    let indexOfLastSymbol = 0
    for (const item of symbols) {
      indexOfLastSymbol = equation.indexOf(item, 1)
      if (indexOfLastSymbol > 0) break
    }
    equation =
      result +
      equation[indexOfLastSymbol] +
      equation.slice(indexOfLastSymbol + 1, -2)
    result = ''
    counter = 0
  } else if (btn === '=' && equation !== '') {
    //Нажали на равно -> посчитали, выдали результат
    result = eval(equation.replace('%', '/100'))
    equation += ' ='
    counter += 1
  } else if (btn === 'AC') {
    equation = ''
    result = ''
  } else if (btn === 'DE') {
    if (result) {
      result = ''
      equation = equation.toString().slice(0, -3)
    } else equation = equation.toString().slice(0, -1)
  } else {
    //если нажимаем на спецсимволы при пустой строке, то ничего не делаем
    if (equation === '' && symbols.includes(btn)) return
    equation += btn
  }

  output.innerText = equation
  outcome.innerText = result
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculate(e.target.innerText))
})
