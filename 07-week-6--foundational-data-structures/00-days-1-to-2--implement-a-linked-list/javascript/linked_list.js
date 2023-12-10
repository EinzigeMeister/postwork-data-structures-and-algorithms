class LinkedList {
  constructor(head) {
    this.head = head;
  }

  iterate(callback) {
    let currentNode = this.head;
    while (currentNode) {
      const endCondition = callback(currentNode);
      if (endCondition === true) return this.head;
      currentNode = currentNode.next;
    }
    return this.head;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate((node) => console.log(node.value));
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let found = null;
    this.iterate((node) => {
      if (node.value === target) {
        found = node;
        return found;
      }
    });
    return found;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (!this.head) this.head = node;
    else {
      this.iterate((currentNode) => {
        if (!currentNode.next) {
          currentNode.next = node;
          return true;
        }
      });
    }
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const removedNode = this.head;
    this.head = this.head?.next || null;
    return removedNode;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    let removedNode = this.head;
    if ((this.head?.next || null) === null) return this.removeFirst();
    this.iterate((node) => {
      if (!node.next?.next) {
        removedNode = node.next;
        node.next = null;
        return true;
      }
    });
    return removedNode;
  }

  // replace the node value at the given index with the given node
  replace(idx, node) {
    if (idx === 0) this.head.value = node;
    else {
      this.iterate((currentNode) => {
        if (idx === 1) {
          currentNode.next.value = node;
          return true;
        }
        idx--;
      });
    }
    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if (idx === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      this.iterate((currentNode) => {
        if (idx === 1) {
          node.next = currentNode?.next || null;
          currentNode.next = node;
          return true;
        }
        idx--;
      });
    }
  }

  // remove the node at the given index, and return it
  remove(idx) {
    let removed = this.head;
    if (idx === 0) {
      this.head = this.head?.next || null;
    } else {
      this.iterate((currentNode) => {
        if (idx === 1) {
          removed = currentNode.next;
          currentNode.next = currentNode?.next?.next || null;
        }
        idx--;
      });
    }
    return removed;
  }

  clear() {
    this.head = null;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
}

module.exports = {
  Node,
  LinkedList,
};
