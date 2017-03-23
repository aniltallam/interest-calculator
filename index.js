

var startAmnt = 18500
var monthlyIncr = 300
var totalMonths = 20
var interestRateMonthly = 20.446 / 100 / 12
var totalNormalPay = 0
var totalReceivables = 0
for (var i = 0; i < totalMonths; i++) {
  var monthPay = startAmnt + monthlyIncr * i
  totalNormalPay += monthPay
  totalReceivables += calculateSimpleInterest(monthPay, totalMonths - i, interestRateMonthly)
}

function calculateSimpleInterest (initial, timeperiodinmonths, monthlyrate) {
  var sum = initial + initial * timeperiodinmonths * monthlyrate
  return sum
}

console.log('total paid', totalNormalPay)
console.log('total recievable', totalReceivables)

// 20.446 % interest if not withdrawn - total pay 427k - tatal receiv 500k
