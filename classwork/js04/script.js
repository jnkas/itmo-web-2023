
function split(str) {
    let arr = []
    //наш код
    for (let i=0;i<str.length;i++) {
        arr[i] = str[i]
        // arr.push(str[i])
    }

    return arr
}

console.log('наш сплит: ', split('asdasdwqeq231'))



function isAnagram(str1, str2) {
    let result = true
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    //проверка длины
    if(str1.length !== str2.length) return false
    //вычисления

    // let arrFromStr1 = str1.split('')
    let arrFromStr1 = split(str1)
    arrFromStr1.sort()
    let strFromArr1 = arrFromStr1.join('')
    // console.log('преобразование в строку:', strFromArr1)

    let arrFromStr2 = str2.split('')
    arrFromStr2.sort()
    let strFromArr2 = arrFromStr2.join('')
    // console.log('преобразование в строку:', strFromArr2)

    result = strFromArr1 === strFromArr2
    
    return result
}

console.log(isAnagram('finder','friend')) // true
console.log(isAnagram('test','sets')) // false
console.log(isAnagram('1bc','1aa')) // false
console.log(isAnagram('abb','aab')) // false
