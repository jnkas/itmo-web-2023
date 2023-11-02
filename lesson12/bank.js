// В очереди: Мария, Cаша, Амфибрахий
// Вне банка: Иван,  Даша

// let queue = ['Иван', 'Мария', 'Саша', 'Даша']
// let outside = ['Амфибрахий']
// queue = ['Мария', 'Саша', 'Амфибрахий']
// outside = ['Иван', 'Даша']

// console.log('В очереди:' + queue + '\n' + 'Вне Банка:' + outside)


// В очереди: Мария, Cаша, Амфибрахий
// Вне банка: Иван,  Даша

const queue = ['Иван', 'Мария', 'Саша', 'Даша']
const outside = ['Амфибрахий']

let act1 = queue.shift() // Иван
let act2 = queue.pop() // Даша
let act3 = outside.pop() // Амфибрахий

// queue.push(outside.pop())

outside.push()
console.log(act1)
console.log(act2)
console.log(act3)

queue.push(act3)
outside.push(act1, act2)

console.log('В очереди:' + queue + '\n' + 'Вне Банка:' + outside)


