let arr = ['яблоко',1, 2, 3, 'яблоко']

// arr[0] += 1
// arr[1] += 1
// arr[2] += 1 

// console.log(arr)


// for (let i = 0; i < 10; i++) {
// 	// тело цикла - код который будет выполнен 10 раз, при этом i каждый 
//     // раз(итерацию) будет на +1 больше
// 	console.log(i)
// }
// console.log('alert')

// let i = 0
// for (let item of arr) {
//     i++
// 	console.log(item, arr.indexOf(item))
// }

let i = 0
while (i < 6) {
if (i === 1) {
        i++
        continue
    }
if (i === 3) break
console.log( i++ )
// выводит 0, затем 2
}


