class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // let test = ["test1", "test2", "test3"]

  // let testHead = new MyNode(test[0])
  // let testList = new MyLinkedList(testHead) 
  // let node = testList.head
  // for(i = 1; i < test.length; i++){
  //   node.next = new MyNode(test[i])
  //   node = node.next
  // }

  iterate(callback) {
    let node = this.head
    if(!!this.head){
      while(!!node && !!node.next){
        callback(node)
        node = node.next
      }
      callback(node)
      return this.head
    }
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate((node) => console.log(node.value))
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null
    this.iterate((node) => {
      if(node.value === target){
        result = node
      }
    })
    return result
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head
    this.head = node
  }

  isEmpty() {
    return !this.head
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if(this.isEmpty()){
      this.head = node
    } else {
      this.iterate(existingNode => {
        if(existingNode.next === null){
          existingNode.next = node
        }
      })
    }
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    if(!this.isEmpty()){
      let removed = this.head
      this.head = this.head.next
      return removed
    }
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    let removed
    this.iterate(node => {
      if(!!node && node.next !== null){
        if(node.next.next === null){
          removed = node.next
          node.next = null
        }
      }
    })
    return removed
  }

  returnPrecedingNode(idx) {
    let count = 1
    let currentNode = this.head
    while(count < idx){
      if(!!currentNode.next){
        currentNode = currentNode.next
        count++
      }
    }
    return currentNode
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    if(idx === 0){
      node.next = this.head.next
      this.head = node
    } else {
      let precedingNode = this.returnPrecedingNode(idx)
      if(!!precedingNode.next){
        node.next = precedingNode.next.next
      }
      precedingNode.next = node    
      }
    return node
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if(idx === 0){
      node.next = this.head
      this.head = node
    } else {
      let precedingNode = this.returnPrecedingNode(idx)
      node.next = precedingNode.next
      precedingNode.next = node
    }
  }

  // remove the node at the given index, and return it
  remove(idx) {
    let removed
    if(idx === 0){
      removed = this.head
      this.head = this.head.next
    } else {
      let precedingNode = this.returnPrecedingNode(idx)
      removed = precedingNode.next
      if(!!precedingNode.next){
        precedingNode.next = precedingNode.next.next
      }
    }
    removed.next = null
    return removed
  }

  clear() {
    this.head = null
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = {
  Node, LinkedList
};
