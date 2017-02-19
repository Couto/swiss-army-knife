'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backOffLinear = exports.backOffFactorial = exports.backOffFibonacci = undefined;

var _math = require('../math');

var _functional = require('../functional');

var backOff = (0, _functional.curry)(function (intervalFn, timeout, fn) {
  var checkTimedOut = function checkTimedOut(timeoutMax, startTime) {
    return function (currentTime) {
      return currentTime - startTime > timeoutMax;
    };
  };
  var hasTimedOut = checkTimedOut(timeout, +new Date());

  return new Promise(function (resolve, reject) {
    var stop = function stop(arg) {
      return arg instanceof Error ? reject(arg) : resolve(arg);
    };

    var next = function next() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (!hasTimedOut(+new Date())) {
        setTimeout(fn.bind(null, next.bind(null, i + 1), stop), intervalFn(i));
      } else {
        reject(new Error('BACKOFF_TIMEOUT'));
      }
    };

    fn(next, stop);
  });
});

exports.default = backOff;
var backOffFibonacci = exports.backOffFibonacci = backOff((0, _functional.compose)((0, _math.multiply)(1000), _math.fibonacci));

var backOffFactorial = exports.backOffFactorial = backOff((0, _functional.compose)((0, _math.multiply)(1000), _math.factorial));

var backOffLinear = exports.backOffLinear = backOff((0, _functional.compose)((0, _math.multiply)(1000), _functional.identity));