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
})
