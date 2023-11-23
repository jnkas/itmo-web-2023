
const dateFormat = (date) => {
    let formattedDate = ''

    if (typeof date !== 'object') return

    formattedDate += date.getDate() 
    formattedDate += '.'
    formattedDate += (date.getMonth() + 1)
    formattedDate += '.'
    formattedDate += date.getFullYear()

    return formattedDate
} 

console.log(dateFormat(new Date()))
