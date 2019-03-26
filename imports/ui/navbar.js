import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './navbar.html';

Template.navbar.helpers({
	getHeaders() {
		console.log("this ran");
		return ["CARRIER", "SHIPMETHOD"];
	}
})