// Переменные для DOM
const containerDay = document.querySelector('.clock-day')
const containerHour = document.querySelector('.clock-hours')
const containerMinute = document.querySelector('.clock-minutes')
const containerSecond = document.querySelector('.clock-seconds')
// функция приобке
const isError = () => {

    alert ('Не коректная дата!')

}
// функция при завершении отсчета таймера
const isStart = () => {
    alert ('Lets ROCK!!!')
}
// таймер
const startTimer = () => {
    // Сброс предыдущего интервала
    clearInterval()
    // переменная дата сегодня
    const nowDate =(new Date().getFullYear() + '-' + new Date().getMonth()  + '-' + new Date().getDate()) 
    // переменная дата которую выбрал полльзователь
    const date = document.querySelector('#time-to').value
    // проверка на високосные года
    const isLeab = (+(new Date().getFullYear()) - 2000) % 4 === 0 ? true : false
    // Проверка на февраль
    const isFebruary = new Date().getMonth() === '02' ? true : false 
    // получение текущего месяца
    const isEven = (new Date().getMonth())


// проверки на актуальность выбранных дат
    if (+(date.slice(0, 4)) < +(nowDate.slice(0, 4))) isError()
    if (+(date.slice(0, 4)) === +(nowDate.slice(0, 4)) && +(date.slice(5,7)) < (+(nowDate.slice(5,7)) + 1)) isError()
    if (+(date.slice(0, 4)) === +(nowDate.slice(0, 4)) && +(date.slice(5,7)) === (+(nowDate.slice(5,7)) + 1) && +(date.slice(8)) < +(nowDate.slice(8))) isError()
    // Объект для подсчета оставшегося времени
    const timer = {

        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        }

    // Переменные в который записывается разница между текущей датой и выбранной
    // let resultYear = +(date.slice(0, 4)) - +(nowDate.slice(0, 4))
    // let resultMonth = Math.abs (+(date.slice(5,7)) - (+(nowDate.slice(5,7)) + 1))
    let resultDay = Math.abs (+(date.slice(8)) - +(nowDate.slice(8)))
    timer.day = resultDay

    console.log (timer)
    
    
    
        
    // if(!resultYear && !isLeab) resultDay = 365 * resultYear
    // if(!resultYear && isLeab) resultDay = 366 * resultYear
    // if(!resultMonth) resultDay = 30 * resultMonth
    // if (!resultMonth && isFebruary && isLeab) resultDay = 29 * resultMonth
    // if (!resultMonth && isFebruary && !isLeab) resultDay = 28 * resultMonth
    
    timer.day = resultDay
        containerDay.innerHTML = timer.day
        containerHour.innerHTML = timer.hour
        containerMinute.innerHTML = timer.minute
        containerSecond.innerHTML = timer.second
    setInterval(() => {
        if (timer.second === 0) {
            timer.second = 59
            containerSecond.innerHTML = timer.second
                if (timer.minute === 0) {
                    timer.minute = 59
                    containerMinute.innerHTML = timer.minute
                    if (timer.hour === 0) {
                        timer.hour = 23
                        containerHour.innerHTML = timer.hour
                        if (timer.day === 0) {
                            isStart()
                            clearInterval()
                        } else {
                            timer.day--
                            containerDay.innerHTML = timer.day
                        }
                    } else {
                        timer.hour--
                        if ( timer.hour < 10) {
                            containerHour.innerHTML = '0' + timer.hour
                        } else {
                            containerHour.innerHTML = timer.hour
                        }
                    }
                } else {
                    timer.minute--
                    if ( timer.minute < 10) {
                        containerMinute.innerHTML = '0' + timer.minute
                    } else {
                        containerMinute.innerHTML = timer.minute
                    }
                }
        } else {
            timer.second--
            if ( timer.second < 10) {
                containerSecond.innerHTML = '0' + timer.second
            } else {
                containerSecond.innerHTML = timer.second
            }
        }
    }, 100) 

   
    
    

        
        


    
    // (04 || 06 || 09 || 11)
    
    //     console.log(timer.day)
    //   console.log(timer.hour)

    //   console.log(timer.minute)
    //   console.log(timer.second)
}






const $input = document.querySelector('.clock-input input')

$input.addEventListener('change', startTimer)

