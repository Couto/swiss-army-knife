import test from 'ava';
import fibonacci from '../fibonacci';

test('fibonacci for 0 should return 0', t => t.is(fibonacci(0), 0));
test('fibonacci for 1 should return 1', t => t.is(fibonacci(1), 1));
test('fibonacci for 2 should return 1', t => t.is(fibonacci(2), 1));
test('fibonacci for 3 should return 2', t => t.is(fibonacci(3), 2));
test('fibonacci for 4 should return 3', t => t.is(fibonacci(4), 3));
test('fibonacci for 5 should return 5', t => t.is(fibonacci(5), 5));
test('fibonacci for 6 should return 8', t => t.is(fibonacci(6), 8));
