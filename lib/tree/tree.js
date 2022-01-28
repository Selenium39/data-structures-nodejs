class Node {
  constructor (data) {
    this.data = data
    this.parent = null
    this.children = []
  }
}

class Tree {
  constructor () {
    this.root = null
    this.length = 0
  }

  insert (parentData, data) {
    const node = new Node(data)
    if (!this.root) {
      this.root = node
    } else {
      const parent = this.find(parentData)
      if (!parent) throw new Error('parent is not exist')
      node.parent = parent
      parent.children.push(node)
    }
    this.length++
    return this
  }

  find (data) {
    const nodes = this.dfs()
    return nodes.find(node => node.data === data)
  }

  dfs (root = this.root) {
    const nodes = []
    const dfsHelper = (root, nodes) => {
      if (!root) return nodes
      nodes.push(root)
      root.children.forEach(node => {
        dfsHelper(node, nodes)
      })
    }
    dfsHelper(root, nodes)
    return nodes
  }

  bfs (root = this.root) {
    const nodes = []
    const queue = []
    if (root) queue.push(root)
    while (queue.length > 0) {
      const node = queue.pop()
      if (node.children.length > 0) {
        queue.push(...node.children)
      }
      nodes.push(node)
    }
    return nodes
  }

  remove (data) {
    const node = this.find(data)
    const parent = node.parent
    if (parent) {
      parent.children.splice(parent.children.findIndex(child => child === node), 1)
    }
    this.length -= this.dfs(node).length
    return this
  }
}

module.exports = Tree
