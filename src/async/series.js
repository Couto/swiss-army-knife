// @flow

/**
 * Like parallel.js, this was used to manage xhr requests, but to ensure that
 * they would run in series (only call the next function, after the previous
 * finishes
 * This is mostly deprecated also in favour for Promises
 *
 * Given an array of functions, it will call every function,
 * once at a time, sequentially.
 * Every function will have a trigger function as its last argument,
 * that should be called when the function is done.
 * If arguments are given to this trigger function, those will be passed
 * to the next function.
 *
 * e.g.:
 *
 * series([
 *  (next) => setTimeout(() => next(1)),
 *  (num, next) => setTimeout() => next()),
 *  (next) => next()
 * ]);
 *
 */
export default (fns: Function[]): void => (function next(...args) {
  return fns.length ? fns.shift()(...[...args, next]) : undefined;
}());
