'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
 * Function - Adding an item to an array
 * @param {Array} - An array to be added to
 * @returns {Number} - A new array.length
 */

  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
 * Function - Pop an item off of end of an array
 * @param {} 
 * @returns {} - A new array.length
 */

  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
 * Function - Removes the first value of an array
 * @param {} - 
 * @returns {} - returns the removed element
 */

  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
 * Function - Adds a new element to the beginning of an array
 * @param {Item} - The element to be added to the array
 * @returns {Number} - Returns new length of the array
 */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
 * Function - Executes a provided function once for each array element
 * @param {Callback} - the function to be executed across the array
 * @returns {Any} - An output of a function for each array element
 */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
 * Function - Creates a new array with the results of executing a provided functions once for each array element
 * @param {callback} - the function to be executed across the array
 * @returns {Array} - A new array
 */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
 * Function - Creates a new array with all the elements that pass a given test
 * @param {Callback} - the function to be executed across the array
 * @returns {Array} - A new filtered array
 */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
 * Function - Executes a function to reduce the array
 * @param {Callback} - the function to be executed across the array
 * @returns {Any} - A singe output value
 */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;