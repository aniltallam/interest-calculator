function calculate () {
  // Get the user's input from the form. Assume it is all valid.
  // Convert interest from a percentage to a decimal, and convert from
  // an annual rate to a monthly rate. Convert payment period in years
  // to the number of monthly payments.
  // var principal = 350000
  // var interest = 13 / 100 / 12
  // var payments = 20

  var principal = 197721
  var interest = 13 / 100 / 12
  var payments = 10

  // Now compute the monthly payment figure, using esoteric math.
  var x = Math.pow(1 + interest, payments)
  var monthly = (principal * x * interest) / (x - 1)

  // Check that the result is a finite number. If so, display the results.
  if (!isNaN(monthly) &&
    (monthly !== Number.POSITIVE_INFINITY) &&
    (monthly !== Number.NEGATIVE_INFINITY)) {
    var paymentValue = round(monthly)
    var totalValue = round(monthly * payments)
    var totalinterestValue = round((monthly * payments) - principal)
    console.log(paymentValue, totalValue, totalinterestValue)
  } else {
    console.log('some issue in calculating interest')
  }
}

// This simple method rounds a number to two decimal places.
function round (x) {
  return Math.round(x * 100) / 100
}

calculate()
