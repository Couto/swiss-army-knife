import test from 'ava';
import factorial from '../factorial';

test('0! should return 1', t => t.is(factorial(0), 1));
test('1! should return 1', t => t.is(factorial(1), 1));
test('2! should return 2', t => t.is(factorial(2), 2));
