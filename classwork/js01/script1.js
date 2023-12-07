// 1.Арифметика
// Объявите переменные result со значением 8 и multiplier
// Присвойте multiplier значение 2.5
// Присвойте result вычисление 8 умножить на multiplier ,
// затем прибавить 674, все это разделить на 3.3

let result = 8
console.log(result)
let multiplier
console.log(multiplier)
multiplier = 2.5
console.log(multiplier)

// result = result * multiplier
// result *= multiplier
// console.log(result)
// result += 674
// console.log(result)
// result = result / 3.3
// console.log(result)

// 2 вариант
console.log((result * multiplier + 674) / 3.3)

// Создайте переменную cat со значением ‘Кот Василий’
// Добавьте к ней ‘ лежит на печи’,
// чтобы значением cat стала строка ‘Кот Василий лежит на печи’

let cat = 'Кот Василий'
cat = cat + ' лежит на печи'

console.log(cat)

// Сравните между собой оператором == null, undefined, 0, 1, true, false, ''
console.log(null == undefined)
console.log('' == 0)
console.log(null == 0)
console.log(0 == undefined)
console.log(true == undefined, true == undefined, true == undefined)
console.log('Результат вычислений: ' + (true == 1))
