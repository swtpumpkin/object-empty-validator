var expect = require('chai').expect;
var validator = require('.');

// Object
var existObject = {
  a: 1,
  b: 2,
};
var emptyObject = {};

// String
var string = ['', 'object empty validator'];

// Number
var number = [2020, 3, 5];

// Boolean
var boolean = [true, false];

// Array
var existArray = ['a', 'b', 'c'];
var emptyArray = [];
var array = [existArray, emptyArray];

describe('TEST EMPTY OBJECT VALIDATOR', function() {
  it('should be return true(Empty Object case)', function() {
    expect(validator.validate(emptyObject)).to.equal(true);
  });
  it('should be return false(Exist Object case)', function() {
    expect(validator.validate(existObject)).to.equal(false);
  });
  it('should be return false(String case)', function() {
    string.forEach(att => expect(validator.validate(att)).to.equal(false))
  });
  it('should be return false(Number case)', function() {
    number.forEach(att => expect(validator.validate(att)).to.equal(false))
  });
  it('should be return false(Array case)', function() {
    array.forEach(att => expect(validator.validate(att)).to.equal(false))
  });
  it('should be return false(Boolean case)', function() {
    boolean.forEach(att => expect(validator.validate(att)).to.equal(false));
  });
});
