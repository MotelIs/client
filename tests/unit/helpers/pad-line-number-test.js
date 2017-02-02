import { module, test } from 'qunit';
import { padLineNumber } from 'ember-addon-review/helpers/pad-line-number';

module('Unit | Helper | pad line number');

test('right pads with spaces to match width of largest number', function(assert) {
  let lines = [{ number: 98 }, { number: 99 }, { number: 100 }, { number: 101 }, { number: 102 }];
  let result = padLineNumber([42, lines]);
  assert.equal(result, '42 ');
});