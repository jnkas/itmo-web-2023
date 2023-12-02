let currentIntervalID = ''
// Считаем разницу и заполняем ячейки (дни, часы, минуты, секунды) новыми данными
const updateCounter = () => {
    //Считаем разницу между сейчас и заполняем ячейки (дни, часы, минуты, секунды) новыми данными
    const goalTime = new Date(document.querySelector('.clock-input input').value + ' 00:00:00').getTime() // 21.11.2023
    const currentTime = new Date().getTime()
    const $daysElement = document.querySelector('.clock-day')
    const $hoursElement = document.querySelector('.clock-hours')
    const $minutesElement = document.querySelector('.clock-minutes')
    const $secondsElement = document.querySelector('.clock-seconds')

    // Проверка, что выбранное время позже, чем сейчас
    if (currentTime < goalTime) {
        // Расчет времени по отдельности для добавления
        let timeToGoal = goalTime - currentTime
        let daysToGoal = Math.floor(timeToGoal / 1000 / 60 / 60 / 24)
        let hoursToGoal = Math.floor((timeToGoal - (daysToGoal * 1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
        let minutesToGoal = Math.floor((timeToGoal - ((daysToGoal * 1000 * 60 * 60 * 24) + (hoursToGoal * 1000 * 60 * 60))) / 1000 / 60)
        let secondsToGoal = Math.floor((timeToGoal - ((daysToGoal * 1000 * 60 * 60 * 24) + (hoursToGoal * 1000 * 60 * 60) + (minutesToGoal * 1000 * 60))) / 1000)

        $daysElement.innerText = daysToGoal
        $hoursElement.innerText = hoursToGoal
        $minutesElement.innerText = minutesToGoal
        $secondsElement.innerText = secondsToGoal
    } else {
        $daysElement.innerText = '0'
        $hoursElement.innerText = '0'
        $minutesElement.innerText = '0'
        $secondsElement.innerText = '0'
    }
}
const startTimer = () => {
    // Вставить в ячейки дату из input, где мы выбрали дату дни, часы, минуты, секунды

    // Запускаем интервальную функцию каждую секунду
    // Проверка, если уже работает функция
    if (currentIntervalID !== '') return

    currentIntervalID = setInterval(() => {
        updateCounter()
    }, 1000)
}
// Вешаем отлов события изменения на input с датой
document.querySelector('.clock-input input').addEventListener('change', () => {
    startTimer()
})
