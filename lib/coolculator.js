class Coolculator {
  add(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a*b
  }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
    return a/b
  }

  highest(a, b) {
    return a > b ? a : b
  }

  lowest(a, b) {
    return a < b ? a : b
  }

  double(a) {
    return a*2
  }
}

module.exports = Coolculator
