class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * add a new item at the end
   * @param value the item to be added
   * @returns {LinkedList} the LinkedList
   */
  append(value) {
    const newNode = {
      value: value,
      next: null
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * add new item at the start
   * @param value the item
   * @returns {LinkedList} the LinkedList
   */
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * insert an item in specific position
   * @param index the position index
   * @param value the item
   * @returns {LinkedList|*[]} the LinkedList
   */
  insertAt(index, value) {
    if (index >= this.length) return this.append(value);

    const newNode = {
      value: value,
      next: null
    };

    const leader = this.findNodeAt(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.getAll();
  }

  /**
   * remove a specifix item by index
   * @param index the index to be removed
   * @returns {*[]} the Linked List
   */
  remove(index) {
    const leader = this.findNodeAt(index - 1);
    const itemToRemoved = leader.next;
    leader.next = itemToRemoved;
    this.length--;
    return this.getAll();
  }

  /**
   * reverse the LinkedList
   * @returns {*[]|*|{next: null, value}} The reversed LinkedList
   */
  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const tmp = second.next;
      second.next = first;
      first = second;
      second = tmp;
    }
    this.head.next = null;
    this.head = first;
    return this.getAll();
  }


  /**
   * find node at specific index
   * @param index the node's index
   * @returns {*|{next: null, value}} the node
   */
  findNodeAt(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  /**
   * get all the items from LinkedList
   * @returns {*[]} the items in an array
   */
  getAll() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}