import test from 'ava';
import parse from './parse-header';

test('parse header', (t) => {
  const input = 'MSH|^~\\&|FOO|BAR|BAZ\nOBX|FOO|BAR|BAZ';
  t.deepEqual(parse(input), {
    field: '|',
    component: '^',
    repeat: '~',
    escape: '\\',
    subComponent: '&',
  });
});
