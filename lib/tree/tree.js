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
      // 查找
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

  dfs () {
    const nodes = []
    const dfsHelper = (root, nodes) => {
      if (!root) return nodes
      nodes.push(root)
      root.children.forEach(node => {
        dfsHelper(node, nodes)
      })
    }
    dfsHelper(this.root, nodes)
    return nodes
  }
}

module.exports = Tree
