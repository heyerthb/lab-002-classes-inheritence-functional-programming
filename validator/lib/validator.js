'use strict';

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param {any} input
 * @returns {boolean}
 */

class Validator {
  constructor(){
  }

  isValid(input, rules) {
    return rules(input);
    // return true;
  }

  /**
   * Is this a string?
   * @param input
   * @returns {boolean}
   */
  isString(input) {
    return typeof input === 'string';
  }

  areStrings(inputs) {
    return inputs.every(x => this.isString(x));
  }

  /**
   * Is this a number?
   * @param input
   * @returns {boolean}
   */
  isNumber(input) {
    return typeof input === 'number';
  }

  /**
   * Is this an array?
   * @param input
   * @returns {boolean}
   */
  isArray(input) {
    return Array.isArray(input);
  }

  /**
   * Is this an object?
   * @param input
   * @returns {boolean}
   */
  isObject(input) {
    return typeof input === 'object';
  }

  /**
   * Is this a boolean?
   * @param input
   * @returns {boolean}
   */
  isBoolean(input) {
    return typeof input === 'boolean';
  }

  /**
   * Is this a function?
   * @param input
   * @returns {boolean}
   */
  isFunction(input) {
    return typeof input === 'function';
  }
}

module.exports = Validator;