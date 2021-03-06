import Ember from 'ember';
import { padEnd } from 'ember-pad/utils/pad';

export function padLineNumber(params/* , hash*/) {
  let [numberToPad] = params;
  let maxLineNumber = params[1].mapBy('number').pop();

  return padEnd(numberToPad.toString(), maxLineNumber.toString().length, ' ');
}

export default Ember.Helper.helper(padLineNumber);
