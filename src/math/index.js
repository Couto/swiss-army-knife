'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factorial = require('./factorial');

Object.defineProperty(exports, 'factorial', {
  enumerable: true,
  get: function get() {
    return _factorial.factorial;
  }
});

var _fibonacci = require('./fibonacci');

Object.defineProperty(exports, 'fibonacci', {
  enumerable: true,
  get: function get() {
    return _fibonacci.fibonacci;
  }
});

var _multiply = require('./multiply');

Object.defineProperty(exports, 'multiply', {
  enumerable: true,
  get: function get() {
    return _multiply.multiply;
  }
});