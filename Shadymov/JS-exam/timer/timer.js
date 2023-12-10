let intervalId = ''

const calcAndInsert = (todayDate, targetDate, rev) => {
  let days =
    Math.floor(
      (targetDate.getTime() - todayDate.getTime()) / (1000 * 3600 * 24)
    ) * rev

  let hours = Math.floor(
    (targetDate.getTime() - todayDate.getTime()) / (1000 * 3600) -
      days * 24 * rev
  )

  let minutes = Math.floor(
    (targetDate.getTime() - todayDate.getTime()) / (1000 * 60) -
      days * 24 * 60 * rev -
      hours * 60
  )

  let seconds = Math.floor(
    (targetDate.getTime() - todayDate.getTime()) / 1000 -
      days * 24 * 3600 * rev -
      hours * 3600 -
      minutes * 60
  )

  document.querySelector('.clock-day').innerHTML = days
  document.querySelector('.clock-hours').innerHTML = hours
  document.querySelector('.clock-minutes').innerHTML = minutes
  document.querySelector('.clock-seconds').innerHTML = seconds
}

const updateTimer = () => {
  let today = new Date()
  let target = new Date(document.querySelector('.time-to').value)
  if (target.getTime() - today.getTime() < 0) {
    if (document.querySelector('.message').classList.contains('hidden'))
      document.querySelector('.message').classList.remove('hidden')

    calcAndInsert(today, target, -1)

    clearInterval(intervalId)
    intervalId = ''
  } else {
    document.querySelector('.message').classList.add('hidden')
    calcAndInsert(today, target, 1)
  }
}

const startTimer = () => {
  if (intervalId !== '') return
  intervalId = setInterval(() => {
    updateTimer()
  }, 1000)
}

document.querySelector('.time-to').addEventListener('change', () => {
  startTimer()
})
