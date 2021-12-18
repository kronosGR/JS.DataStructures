const Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * get the top of the stack
   * @returns {null} the last inserted item
   */
  peek() {
    return this.top;
  }

  /**
   * add an item at the top of the stack
   * @param value the item
   * @returns {Stack} the updated stack
   */
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdPointer = this.top;
      this.top = newNode;
      this.top.next = holdPointer;
    }
    this.length++;
    return this;
  }

  /**
   * remove the top of the stack
   * @returns {null|Stack} the updated stack
   */
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) this.bottom = null;
    const holdPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}