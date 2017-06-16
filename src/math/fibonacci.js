// @flow

/**
 * We're not considering negative numbers
 */
const fibonacci = (n: number): number =>
  n === 0
    ? 0 // eslint-disable-line no-nested-ternary
    : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

export default fibonacci;
