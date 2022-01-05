/* eslint-disable no-undef */
const ArrayStack = require('../lib/stack/array_stack')
require('should')

describe('array_stack', function () {
  beforeEach(function () {
    this.stack = new ArrayStack()
  })

  it('push', function () {
    this.stack.push(1)
      .push(2)
      .push(3)
    this.stack.size().should.eql(3)
  })

  it('pop', function () {
    this.stack.push(1)
    this.stack.push(2)
    this.stack.push(3)
    this.stack.pop().should.eql(3)
    this.stack.pop().should.eql(2)
    this.stack.pop().should.eql(1)
    should(this.stack.pop()).be.undefined()
    this.stack.size().should.eql(0)
  })

  it('top', function () {
    should(this.stack.top()).be.undefined()
    this.stack.push(1)
    this.stack.push(2)
    this.stack.push(3)
    this.stack.top().should.eql(3)
    this.stack.size().should.eql(3)
  })

  it('isEmpty', function () {
    this.stack.isEmpty().should.be.true()
    this.stack.push(1)
    this.stack.isEmpty().should.be.false()
  })

  it('size', function () {
    this.stack.size().should.eql(0)
    this.stack.push(1)
    this.stack.size().should.eql(1)
  })
})
