// Import relavent html files here
/*
Blaze compiles html templates into js files and 
Meteor’s linker needs to know about a js file through an import statement 
before it will be loaded and sent to the client.
*/
import './body.html';
import './navbar.html';

BlazeLayout.setRoot(".app");

Template.body.onRendered(function() {
	Meteor.call("getAllData", function (err, res) {
		Session.set("metadata", res);
	});
})