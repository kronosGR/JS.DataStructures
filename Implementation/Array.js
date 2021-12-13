class Karray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Get a specific element by index
   * @param index the item's index
   */
  get(index) {
    return this.data[index];
  }

  /**
   * Add an item at the end
   * @param item the item to be added
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  /**
   * remove the last element in the array
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * delete an item at index position
   * @param index the position of item
   */
  deleteAt(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}