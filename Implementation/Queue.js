const Node = require('./Node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * get the first item
   * @returns {null} the item
   */
  peek() {
    return this.first;
  }

  /**
   * add an item at the start
   * @param value the item
   * @returns {Queue} the updated queue
   */
  enqueue(value) {
    const nNode = new Node(value);
    if (this.length === 0) {
      this.first = nNode;
      this.last = nNode;
    } else {
      this.last.next = nNode;
      this.last = nNode;
    }
    this.length++;
    return this;
  }

  /**
   * remove the first item
   * @returns {null|Queue} the update Queue
   */
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    const pointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}