import Backbone from 'backbone';
import $ from 'jquery';
import AboutView from './views/aboutView';
import Profile from './models/profile';
import RepoCollection from './models/repoCollection';

const Router = Backbone.Router.extend({
	routes: {
		'': 'showAbout'
	},

	showAbout: function() {
		let profile = new Profile({login: 'victoralvarez84'})
		const aboutView = new AboutView({model: profile});
		aboutView.render();
	},

	initialize: function() {
		console.log('initialize test');
		Backbone.history.start();
	}
});

export default Router;
