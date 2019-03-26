import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './form.html';

Template.form.helpers({
  	getData() {
  		console.log(Session.get("metadata"))
  		return Session.get("metadata");
  	},
});

Template.form.events({
  'click .toggle-checked'() {
  },
});
