Template.about.helpers({
	about: function(){
		return About.findOne({appId: appId})
	}
});