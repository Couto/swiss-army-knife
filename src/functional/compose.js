// @flow

import type { UnaryFn } from "./types.js.flow";

function compose<I, X, O>(f: UnaryFn<X, O>, g: UnaryFn<I, X>): UnaryFn<I, O> {
  return (x: I): O => f(g(x));
}

export default compose;
