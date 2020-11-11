import { State } from '/imports/api/state/state.js';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import './video.html';

Template.video.onCreated(function () {
  Meteor.subscribe('state.all');
});

Template.video.helpers({
  state() {
   let state =  State.find({}).fetch();
   console.log(JSON.stringify(state));
  },
});

Template.video.events({
  'submit .video-state-add'(event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title;
    let data = {
        title: "this is my title",
        remoteId: null,
        moderatorId: Random.id(),
        muted: false
    };
       // Meteor.call("statePushMsession",data);


    Meteor.call('statePushMsession', data, (error) => {
      if (error) {
        alert(error.error);
      } else {
        console.log("state updated");
      }
    });
  },
});
