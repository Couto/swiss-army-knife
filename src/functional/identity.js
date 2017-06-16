// @flow

import type {EndomorphismFn} from './types.js.flow';

const identity: EndomorphismFn = <A>(x: A): A => x;

export default identity;
