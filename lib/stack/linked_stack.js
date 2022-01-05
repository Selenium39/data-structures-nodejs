class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class LinkedStack {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (item) {
    const node = new Node(item)
    if (this.head) {
      node.next = this.head
      this.head = node
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
    return this
  }

  pop () {
    if (!this.head) return undefined
    if (this.head === this.tail) this.tail = null
    const node = this.head
    this.head = node.next
    node.next = null
    this.length--
    return node.val
  }

  top () {
    return this.head ? this.head.val : undefined
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }
}

module.exports = LinkedStack
