class AraryStack {
  constructor () {
    this.items = []
  }

  push (item) {
    this.items.push(item)
    return this
  }

  pop () {
    return this.items.pop()
  }

  top () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }
}

module.exports = AraryStack
