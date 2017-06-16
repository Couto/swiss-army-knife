// @flow

function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...newArgs) => curried(...[...args, ...newArgs]);
  };
}

export default curry;
