const fotCalculator = (day) => {
  let fot = 0
  let weeks = 0
  let employers = 1
  let salary = 1000
  let bonus = 0

  for (let i = 1; i < day; i++) {
    if (i % 3 === 0) {
        bonus += 1000 * employers
    }
    
    if (i % 7 === 0) {
      //прошла неделя
      weeks++
      employers++
      salary += 1000
      salary *= 1.015
    }
  }

  fot = salary + bonus

  return fot
}

console.log('фот на 21 день = ' + fotCalculator(21))
console.log('фот на 4 день = ' + fotCalculator(4))
console.log('фот на 9 день = ' + fotCalculator(9))

// + имеется 1 работник компании с зп 1000 рублей, которую он получит через 30 дней
// по плану, каждую неделю нанимается 1 новый сотрудник, у которого изначально такая же зп
// а зарплата индексируется на +1.5%

// каждые 3 дня доначисляется премия всем сотрудникам
// в размере 1000 рублей каждому сотруднику
