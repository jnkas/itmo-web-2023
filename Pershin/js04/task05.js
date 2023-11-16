// Поменять местами минимальный и максимальный 
// элементы массива размера 10. 

//найти мин и макс элемент
//пересобрать результируюший массив с учетом нового порядка

function minMaxChange(arr) {
    let max = arr[0]
    let min = arr[0]
    for(let i=0;i<arr.length;i++) {
        let item = arr[i]
        if(item > max) {
            max = item
            console.log('найдено новое макс значение - ' + max)
        }

        if(item < min) {
            min = item
            console.log('найдено новое мин значение - ' + min)
            //сохраняем индекс текущего оборота цикла
        }
    }
    let indexOfmin = arr.indexOf(min)
    let indexOfmax = arr.indexOf(max)

    arr[indexOfmin] = max
    arr[indexOfmax] = min

    console.log('min', min)
    console.log('max', max)
    return arr
}


// console.log('array', minMaxChange([4,7,7,-1,0,3,3,16,9,16]))

console.log(1 + +'1' + 'array')