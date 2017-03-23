function calc () {
  var startAmnt = 18500
  var monthlyIncr = 300
  var totalMonths = 10
  var interestRateMonthly = 6.5 / 100 / 12
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
}

calc()

// total paid 198500
// total recievable 204279.58333333334


// paymentValue 20969.22
// totalValue 209692.25
// totalinterestValue 11971.25
