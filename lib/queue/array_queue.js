class ArrayQueue {
  constructor () {
    this.items = []
  }

  enqueue (item) {
    this.items.push(item)
    return this
  }

  dequeue () {
    return this.items.shift()
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }
}

module.exports = ArrayQueue
