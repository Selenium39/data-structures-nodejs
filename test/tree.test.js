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
    this.tree.length.should.eql(0)
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

  it('dfs', function () {
    this.tree.dfs().length.should.eql(0)
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
    this.tree.dfs().length.should.eql(10)
    this.tree.dfs()[0].data = 1
    this.tree.dfs()[1].data = 2
    this.tree.dfs()[2].data = 5
    this.tree.dfs()[3].data = 6
    this.tree.dfs()[4].data = 3
    this.tree.dfs()[5].data = 7
    this.tree.dfs()[6].data = 8
    this.tree.dfs()[7].data = 4
    this.tree.dfs()[8].data = 9
    this.tree.dfs()[9].data = 10
  })

  it('bfs', function () {
    this.tree.bfs().length.should.eql(0)
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
    this.tree.bfs().length.should.eql(10)
    this.tree.bfs()[0].data = 1
    this.tree.bfs()[1].data = 2
    this.tree.bfs()[2].data = 3
    this.tree.bfs()[3].data = 4
    this.tree.bfs()[4].data = 5
    this.tree.bfs()[5].data = 6
    this.tree.bfs()[6].data = 7
    this.tree.bfs()[7].data = 8
    this.tree.bfs()[8].data = 9
    this.tree.bfs()[9].data = 10
  })

  it('remove', function () {
    this.tree.length.should.eql(0)
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
    this.tree.remove(10)
    this.tree.length.should.eql(9)
    this.tree.remove(1)
    this.tree.length.should.eql(0)
  })
})
