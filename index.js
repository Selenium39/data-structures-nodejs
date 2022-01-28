const ArrayStack = require('./lib/stack/array_stack')
const LinkedStack = require('./lib/stack/linked_stack')
const ArrayQueue = require('./lib/queue/array_queue')
const LinkedQueue = require('./lib/queue/linked_queue')
const Tree = require('./lib/tree/tree')

module.exports = {
  ArrayStack,
  LinkedStack,
  ArrayQueue,
  LinkedQueue,
  Stack: ArrayStack,
  Queue: ArrayQueue,
  Tree
}
