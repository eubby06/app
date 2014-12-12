Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('about',{path: '/'});
	this.route('membership');
	this.route('contact');
	this.route('posts');
});