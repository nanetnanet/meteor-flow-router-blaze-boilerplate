import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    console.log("Hit the home route!");
    BlazeLayout.render('form');
  }
});


// // Create 404 route (catch-all)
// FlowRouter.route('*', {
//   action() {
//     // Show 404 error page using Blaze
//     this.render('notFound');

//     // Can be used with BlazeLayout,
//     // and ReactLayout for React-based apps
//   }
// });