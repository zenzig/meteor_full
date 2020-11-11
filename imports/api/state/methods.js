// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { State } from './state.js';

Meteor.methods({
  'state.insert'(title, url) {
    check(url, String);
    check(title, String);

    return State.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
  

 'state.update'(id, data) {
    check(id, String);
    check(data, Object);
    return State.update({ _id: id }, { $set: data }, {upsert: true});
  },

	"statePushMsession": function(obj) {
		var doc = State.findOne({ _id: "state" });
		console.log("State: "+JSON.stringify(doc));
	/*	if(!State.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}
	*/	
		// empty Object check
		if(Object.keys(obj).length === 0 && obj.constructor === Object) {
				return false;
		} else {
			return State.update({_id: "state" },  {$push: { "msession": obj }});
		}
	

	},	
  
  
});
