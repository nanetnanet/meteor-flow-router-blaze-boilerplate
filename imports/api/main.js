import { Meteor } from 'meteor/meteor';
import {DataRetrieval} from './dataRetrieval.js';

let cachedData = null;

Meteor.startup(() => {
	cachedData = DataRetrieval.getData();
})

Meteor.methods({
  'getAllData'() {
  	cachedData = cachedData ? cachedData : DataRetrieval.getData();
  	return cachedData;
  }
});
