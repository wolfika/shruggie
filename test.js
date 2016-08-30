import test from 'ava';
import fn from './';

test('returns shruggie', t => {
	t.is(fn(), '¯\\_(ツ)_/¯');
});
