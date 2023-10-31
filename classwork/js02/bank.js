const queue = ['Иван', 'Мария', 'Саша', 'Даша']
const outside = ['Aмфибрахий']

let act1 = queue.shift()
let act2 = queue.pop()
let act3 = outside.pop()
queue.push(act3)
outside.push(act1)
outside.push(act2)

//Ваш код тут

console.log('В очереди: ' + queue + '\n ' + 'Вне банка: ' + outside)

// В очереди: Мария, Саша, Aмфибрахий
// Вне банка: Иван, Даша
