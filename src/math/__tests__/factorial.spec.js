import test from 'ava';
import factorial from '../factorial';

test('0! should return 1', t => t.is(factorial(0), 1));
test('1! should return 1', t => t.is(factorial(1), 1));
test('2! should return 2', t => t.is(factorial(2), 2));
test('3! should return 6', t => t.is(factorial(3), 6));
test('4! should return 24', t => t.is(factorial(4), 24));
test('5! should return 120', t => t.is(factorial(5), 120));
