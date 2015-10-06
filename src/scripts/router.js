import Backbone from 'backbone';
import $ from 'jquery';
import AboutView from './views/aboutView';
import Profile from './profile';

const Router = Backbone.Router.extend({
	routes: {
		'': 'showAbout'
	},

	showAbout: function() {
		let profile = new Profile({login: 'grayswan'})
		const aboutView = new AboutView({model: profile});
		aboutView.render();

	},
	initialize: function() {
		console.log('initialize test');
		Backbone.history.start();
	}
});

export default Router;
