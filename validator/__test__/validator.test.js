'use strict';

const Validator = require('../lib/validator.js');
const validator = new Validator();

describe('validator module performs basic validation of', () => {
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.areStrings([str,num,arr,obj,func,bool])).toBeFalsy();
  });


  it('numbers', () => {
    expect(validator.isNumber(num)).toBeTruthy();
    // expect(validator.isValid()).toBeTruthy();
    // expect(num).toBeTruthy();
  });

  it('arrays', () => {
    expect(validator.isArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    expect(validator.isObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    expect(validator.isFunction(func)).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {
  const personOne = {
    name: 'Jack',
    hair: 'long',
    color: 'black',
    age: 70,
    favorites: ['blue', 'hiking'],
    alive: ['yes']
  }

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(personOne.hair).toBeTruthy();
    expect(personOne.age).toStrictEqual(70);

  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(typeof personOne.name).toStrictEqual('string');
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(typeof personOne.favorites[0]).toStrictEqual('string');
    expect(typeof personOne.favorites[1]).toStrictEqual('string');
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    let arrValue = personOne.alive.includes('yes');
    expect(arrValue).toBeTruthy();
  });

  // TODO: Cover so, so many more cases

});