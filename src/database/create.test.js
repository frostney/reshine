import test from 'ava';

import create from './create';

test(t => {
  t.is(typeof create, 'function');
});
