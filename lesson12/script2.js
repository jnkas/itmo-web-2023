// *** Циклы *** 

// let arr = [1, 2, 3]

// arr[0] += 1 
// arr[1] += 1 
// arr[2] += 1 

// console.log(arr) 


// for (let i = 0; i < 10; i++) {
//     // i изначально объявлена, как 0
//    // код который будет выполнен 10 раз
//   // ++ инкремент, который увеличивает число
//   // i будет каждый раз (итерация) на +1 больше
//   console.log(i)

// }

// console.log('alert')


// let arr = [1, 2, 3, 'яблоко']

// for (let item of [1, 2, 3, 'яблоко']) {
//     console.log(item)
// }

// console.log()


// let i = 0
// for (let item of [1, 2, 3, 'яблоко']) {
//     i++
//     console.log(item, i)
// }

// let arr = [1, 2, 3, 'яблоко']

// let i = 0
// for (let item of arr) {
//     i++
//     console.log(item, arr.indexOf(item))
// }

// let i = 0
// while (i < 3) {
//     console.log ( i++ )
// // выводит 0, затем 1, затем 2
// }


let i = 0
while (i < 6) {
           if (i === 1) {
                   // i++
                   continue
           }
           if (i === 3) break
           console.log( i++ )
           // выводит 0, а затем 2
       }



