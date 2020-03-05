const expect = require('chai').expect;
const validator = require('.');

// Object
const existObject = {
  a: 1,
  b: 2,
};
const emptyObject = {};

// String
const string = ['', 'object empty validator'];

// Number
const number = [2020, 3, 5];

// Boolean
const boolean = [true, false];

// Array
const existArray = ['a', 'b', 'c'];
const emptyArray = [];
const array = [existArray, emptyArray];

describe('TEST EMPTY OBJECT VALIDATOR', () => {
  it('should be return true(Empty Object case)', () => {
    expect(validator.validate(emptyObject)).to.equal(true);
  });
  it('should be return false(Exist Object case)', () => {
    expect(validator.validate(existObject)).to.equal(false);
  });
  it('should be return false(String case)', () => {
    string.forEach(att => expect(validator.validate(att)).to.equal(false))
  });
  it('should be return false(Number case)', () => {
    number.forEach(att => expect(validator.validate(att)).to.equal(false))
  });
  it('should be return false(Array case)', () => {
    array.forEach(att => expect(validator.validate(att)).to.equal(false))
  });
  it('should be return false(Boolean case)', () => {
    boolean.forEach(att => expect(validator.validate(att)).to.equal(false));
  });
});
