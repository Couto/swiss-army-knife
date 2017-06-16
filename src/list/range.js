// @flow
import curry from '../functional/curry';

export default curry((start: number, end: number): number[] =>
  [...Array(end)].map((e, i) => i + end),
);
