Template.membership.helpers({
	membership: function(){
		return Membership.findOne({appId: appId})
	}
});

if (Meteor.isCordova) {
	Template.membership.events({
		'click button.vibrate': function(){
			navigator.notification.vibrate(500);
			return false;
		},
		'click button.camera': function(){
			navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
			    destinationType: Camera.DestinationType.DATA_URL
			});

			function onSuccess(imageData) {
			    var image = document.getElementById('myImage');
			    image.src = "data:image/jpeg;base64," + imageData;
			}

			function onFail(message) {
			    alert('Failed because: ' + message);
			}
			
			return false;
		},
	});
}