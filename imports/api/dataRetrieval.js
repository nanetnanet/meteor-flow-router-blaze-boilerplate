let DataRetrieval = {
	getData() {
		return Meteor.settings.metadata;
	}
}

export {DataRetrieval}