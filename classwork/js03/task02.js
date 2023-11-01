// Задан произвольный url необходимо получить его домен. 
// Пример:
// var url = "http://www.ozon.ru/context/detail/id/19677670/"
// Домен: www.ozon.ru


function getUrl(url) {
    // console.log('урл', url)
    let domain = ''
    //ваш код
    // отделим протокол, мы знаем или мжем узнать его длину (7)
    let indexOfProtocolLastSymbol = url.indexOf('//') + 2
    let subUrl = url.substring(indexOfProtocolLastSymbol)
    // console.log(subUrl)
    //вспоминаем про метод subsrting(начальный индекс, конечный индекс)
    // вспоминаем про indexOf('/') он нам вернет
    let indexOfSlash = subUrl.indexOf('/') // 11
    domain = subUrl.substring(0, indexOfSlash)

    // убираем из строки часть с протоколом, ролучаем подсктроку
    // из подстроки indexOf('/') вернет нужный индекс

    return domain
}

let a = getUrl('http://www.ozon.ru/context/detail/id/19677670/')
console.log(a)
console.log(getUrl('https://www.ozon.ru/context/detail/id/19677670/'))