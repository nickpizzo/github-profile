import Backbone from 'backbone';
import $ from 'jquery';
import AboutView from './views/aboutView';

const Router = Backbone.Router.extend({
	routes: {
		'about': 'showAbout'
	},

	showAbout: function() {
		const aboutView = new AboutView();
		$('main').html(aboutView.render());

	},
	initialize: function() {
		console.log('initialize test');
		Backbone.history.start();
	}
});

export default Router;
