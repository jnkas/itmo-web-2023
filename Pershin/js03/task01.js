function isPalindrome (str) {
    // 2 равные части строки (пополам)
    // сравниваем половинки 755 6557 
    // 7556557
    let odd = str.length%2 // 0 или 1

    let half1 = str.substring(0, str.length/2)  //7556
    let half2 = str.substring(str.length/2)     //6557

    let result = false

    for (let i=0; i<str.length; i++) {
        let symbol = str[i]
        let admirroredSymbol = str[str.length - i - 1]
        if (symbol === admirroredSymbol) {
            result = true
        } else {
            return result
        }
    }
    return result
}

// isPalindrome('754565257')

console.log(isPalindrome('7556557'))    //true
console.log(isPalindrome('7886887'))    //true
console.log(isPalindrome('12312423'))   //false