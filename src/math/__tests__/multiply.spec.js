import test from 'ava';
import multiply from '../multiply';

test('1 * 1 = 1', t => t.is(multiply(1, 1), 1));
test('1 * -1 = -1', t => t.is(multiply(1, -1), -1));
