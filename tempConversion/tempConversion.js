const ftoc = function(tempF) {
  var celsius = (tempF-32)*(5/9);
  return Math.round(celsius*10)/10;
}

const ctof = function(tempC) {
  var far = tempC*(9/5) +32;
  return Math.round(far*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
