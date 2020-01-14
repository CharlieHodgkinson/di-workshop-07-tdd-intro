var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should divide', function() {
    result = mm.divide(6, 2)
    expect(result).to.equal(3)
  })

  it('should give highest', function() {
    result = mm.highest(6, 4)
    expect(result).to.equal(6)
  })

  it('should give lowest', function() {
    result = mm.lowest(6, 4)
    expect(result).to.equal(4)
  })

  it('should double', function() {
    result = mm.double(6)
    expect(result).to.equal(12)
  })

  it('should square', function() {
    result = mm.square(6)
    expect(result).to.equal(36)
  })

  it('should to the power of', function() {
    result = mm.raise(5, 3)
    expect(result).to.equal(125)
  })

  it('should be true if negative', function() {
    result = mm.isNegative(-54)
    expect(result).to.equal(true)
  })

  it('should be true if positive', function() {
    result = mm.isPositive(-54)
    expect(result).to.equal(false)
  })

  it('should return if cool', function() {
    result = mm.isCool(2452)
    expect(result).to.equal(true)
  })
  
  it('should sum all', function() {
    result = mm.sum([2,6,13])
    expect(result).to.equal(21)
  })

  it('should multiply all', function() {
    result = mm.multiplyArray([4,2,1])
    expect(result).to.equal(8)
  })

  it('should calculate mean', function() {
    result = mm.mean([6,4,11])
    expect(result).to.equal(7)
  })

  it('should calculte the factorial', function() {
    result = mm.factorial(6)
    expect(result).to.equal(720)
  })

  it('should return a number within a range', function() {
    result = mm.random(22)
    expect(result).to.be.at.most(22).and.to.be.at.least(0)
  })
})
