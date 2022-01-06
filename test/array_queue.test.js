/* eslint-disable no-undef */
const ArrayQueue = require('../lib/queue/array_queue')
require('should')

describe('array_queue', function () {
  beforeEach(function () {
    this.queue = new ArrayQueue()
  })

  it('enqueue', function () {
    this.queue.enqueue(1)
      .enqueue(2)
      .enqueue(3)
    this.queue.size().should.eql(3)
  })

  it('dequeue', function () {
    this.queue.enqueue(1)
    this.queue.enqueue(2)
    this.queue.enqueue(3)
    this.queue.dequeue().should.eql(1)
    this.queue.dequeue().should.eql(2)
    this.queue.dequeue().should.eql(3)
    should(this.queue.dequeue()).be.undefined()
    this.queue.size().should.eql(0)
  })

  it('isEmpty', function () {
    this.queue.isEmpty().should.be.true()
    this.queue.enqueue(1)
    this.queue.isEmpty().should.be.false()
  })

  it('size', function () {
    this.queue.size().should.eql(0)
    this.queue.enqueue(1)
    this.queue.size().should.eql(1)
  })
})
