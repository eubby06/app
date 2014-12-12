Template.contact.helpers({
	contact: function(){
		return Contact.findOne({appId: appId})
	}
});