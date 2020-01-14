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

  square(a) {
    return a*a
  }

  raise(a, b) {
    if ( b === 1) {
      return a
    }
    else {
      return a*this.raise(a, b-1)
    }
  }

  isNegative(a) {
    return a < 0 ? true : false
  }

  isPositive(a) {
    return a < 0 ? false : true
  }

  isCool(a) {
    const b = a
    while (a >= 10) {  
      a = a / 10;
    }
    return parseInt(a) === (b % 10)
  }

  sum(a) {
    let sum = 0
    a.forEach(function(e) {
      sum += e
    })
    return sum
  }
  
  multiplyArray(a) {
    let b = 1
    a.forEach(function(e){
      b *= e
    })
    return b
  }

  mean(a) {
    return this.sum(a)/a.length
  }

  factorial(a) {
    if (a < 0) 
        return -1;
    else if (a == 0) 
        return 1;
    else {
        return (a * this.factorial(a - 1));
    }
  }

  random(a) {
    return Math.floor((Math.random() * a) + 1)
  }
}

module.exports = Coolculator

