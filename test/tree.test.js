/* eslint-disable no-undef */
const Tree = require('../lib/tree/tree')
require('should')

describe.only('tree', function () {
  beforeEach(function () {
    this.tree = new Tree()
  })

  // Tree
  //         1
  //    /    |   \
  //   2     3    4
  //  / \   / \  / \
  // 5   6 7   8 9  10
  it('insert', function () {
    this.tree.insert(null, 1)
      .insert(1, 2)
      .insert(1, 3)
      .insert(1, 4)
      .insert(2, 5)
      .insert(2, 6)
      .insert(3, 7)
      .insert(3, 8)
      .insert(4, 9)
      .insert(4, 10)
    this.tree.length.should.eql(10)
  })
})
