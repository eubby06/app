Template.posts.helpers({
	posts: function(){
		return Posts.findOne({appId: appId})
	}
});