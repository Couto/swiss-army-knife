// @flow

import type { VariadicFn } from './types.js.flow';

function curry(fn: VariadicFn<*, *>) {
  return function curried(...args: *[]) {
    return args.length >= fn.length
      ? fn(...args)
      : (...newArgs: *[]) => curried(...[...args, ...newArgs]);
  };
}

export default curry;
