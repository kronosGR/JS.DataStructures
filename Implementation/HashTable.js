class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * hash function that maps the key and can be used as the index
   * @param key they key
   * @returns {number}  the index
   * @private only to be used in the class
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * add a key-value pair in the hash table
   * @param key the key
   * @param value the value
   * @returns {*[]} the hast table
   */
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([ key, value ]);
    return this.data;
  }

  /**
   * get the value of a specific key
   * @param key the key for the value to be retrieved
   * @returns {undefined|*} the value
   */
  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][i];
        }
      }
    }
    return undefined;
  }

  /**
   * get all the keys
   * @returns {*[]} array with all the keys
   */
  getKeys() {
    if (!this.data.length) {
      return undefined;
    }
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }

  /**
   * get all the values
   * @returns {*[]} array with all the values
   */
  getValues() {
    if (!this.data.length) {
      return undefined;
    }
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        values.push(this.data[i][0][1]);
      }
    }
    return values;

  }
}