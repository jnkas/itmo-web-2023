// function isAnagram (str1, str2)  // передаем переменные, как аргументы 
//                                {
//     let result = true
                 
//     result = str1 === str2 

//     //вычисление 

//     return result
// }

// console.log(
//     isAnagram('finder', 'friend') // передаем значения переменых, как аргументы
// // )


// // function isAnagram (str1, str2)  {
                               
// //     let result = true
// //     str1 = str1.toLowerCase()
// //     str2 = str2.toLowerCase()
    
// //     //проверка длины
// //     if(str1.length !== str2.length) return false;       
// //     result = str1 === str2

// //     //преобразование в массив

// //     console.log ('преобразование в массив:' , str1.split(''))
// //     console.log ('преобразование в массив:' , str2.split(''))

// //     //вычисление 

// //     return result
// // }

// // console.log(
// //     isAnagram('finder', 'inderf') // передаем значения переменых, как аргументы
// // )



// function isAnagram (str1, str2)  {
                             
//     let result = true
//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()
    
//     //проверка длины
//     if(str1.length !== str2.length) return false;       
//     //вычисления

//     let arrFromStr1 = str1.split('')
//     arrFromStr2.sort()
//     let strFromArr1 = arrFromStr1.join('')

//     let arrFromStr2 = str2.split('')
//     arrFromStr2.soft()
//     let strFromArr2 = arrFrom2.join('')
    
//     //преобразование в массив

//     console.log ('преобразование в массив:' , str1.split(''))
//     console.log ('преобразование в массив:' , str2.split(''))

//     //вычисление 

//     return result
// }

// console.log(
//     isAnagram('finder', 'inderf') // передаем значения переменых, как аргументы
// )



function split (str)  {
    let arr = []   
    str.length 
    for (let i=0; i<str.length; i++) {
        // arr[i] = str[i]
        arr.push(str[i])
    }

    return arr

}

console.log('наш сплит: ', split('asdasdwqeq231'))
    
   