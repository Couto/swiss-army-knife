// @flow

import curry from '../functional/curry';
import compose from '../functional/compose';
import identity from '../functional/identity';
import factorial from '../math/factorial';
import fibonacci from '../math/fibonacci';
import multiply from '../math/multiply';

const backOff = curry((
  intervalFn: Function,
  timeout: number,
  fn: Function,
): Promise<*> => {
  const checkTimedOut = (timeoutMax, startTime) => currentTime =>
    (currentTime - startTime > timeoutMax);
  const hasTimedOut = checkTimedOut(timeout, (+new Date()));

  return new Promise((resolve, reject) => {
    const stop = arg => ((arg instanceof Error) ?
      reject(arg) :
      resolve(arg));

    const next = (i = 1) => {
      if (!hasTimedOut((+new Date()))) {
        setTimeout(fn.bind(null, next.bind(null, i + 1), stop), intervalFn(i));
      } else {
        reject(new Error('BACKOFF_TIMEOUT'));
      }
    };

    fn(next, stop);
  });
});

export default backOff;
export const backOffFibonacci = backOff(compose(multiply(1000), fibonacci));
export const backOffFactorial = backOff(compose(multiply(1000), factorial));
export const backOffLinear = backOff(compose(multiply(1000), identity));
