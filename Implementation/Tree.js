const Node = require('./NodeTree');

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * insert new item at the tree
   * @param value the item
   * @returns {Tree} the updated tree
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  /**
   * get an item by value
   * @param value the value to look up
   * @returns {null|boolean} the item
   */
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) currentNode = currentNode.left;
      else if (value > currentNode.value) currentNode = currentNode.right;
      else if (currentNode.value === value) return currentNode;
    }
    return null;
  }

  /**
   * remove item from the tree
   * @param value the item
   * @returns {boolean} the result
   */
  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) this.root = currentNode.left;
          else {
            if (currentNode.value < parentNode.value) parentNode.left = currentNode.left;
            else if (currentNode.value > parentNode.value) parentNode.right = currentNode.left;
          }
        }
      } else if (currentNode.right.left === null) {
        currentNode.right.left = currentNode.left;
        if (parentNode === null) this.root = currentNode.right;
        else {
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.right;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }
        }
      } else {
        let leftmost = currentNode.right.left;
        let leftmostParent = currentNode.right;
        while (leftmost.left !== null) {
          leftmostParent = leftmost;
          leftmost = leftmost.left;
        }
        leftmostParent.left = leftmost.right;
        leftmost.left = currentNode.left;
        leftmost.right = currentNode.right;

        if (parentNode === null) {
          this.root = leftmost;
        } else {
          if (currentNode.value < parentNode.value) {
            parentNode.left = leftmost;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = leftmost;
          }
        }
      }
      return true;
    }

  }

}
