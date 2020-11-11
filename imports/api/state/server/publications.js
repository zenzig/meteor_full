// All state-related publications

import { Meteor } from 'meteor/meteor';
import { State } from '../state.js';

Meteor.publish('state.all', function () {
  return State.find();
});
