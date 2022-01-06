class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class LinkedQueue {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue (item) {
    const node = new Node(item)
    if (this.head) {
      this.tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
    return this
  }

  dequeue () {
    if (!this.head) return undefined
    if (this.head === this.tail) this.tail = null
    const node = this.head
    this.head = node.next
    node.next = null
    this.length--
    return node.val
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }
}

module.exports = LinkedQueue
