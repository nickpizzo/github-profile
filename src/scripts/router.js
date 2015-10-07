import Backbone from 'backbone';
import $ from 'jquery';
import AboutView from './views/aboutView';
import Profile from './models/profile';
import RepoCollection from './models/repoCollection';
import RepoListView from './views/repoListView';


const Router = Backbone.Router.extend({
  routes: {
    '': 'showAbout',
    'repos': 'showRepos'
  },

  showAbout: function() {
    let profile = new Profile({
      login: 'victoralvarez84'
    })
    const aboutView = new AboutView({
      model: profile
    });
    aboutView.render();

    // handle nav
    $('nav li').removeClass('active');
    $('nav li.profile').addClass('active');
  },

  showRepos: function() {
    let repos = new RepoCollection();
    let view = new RepoListView({
      collection: repos
    });
    view.render();

    // handle nav
    $('nav li').removeClass('active');
    $('nav li.repos').addClass('active');
  },

  initialize: function() {
    console.log('initialize test');
    Backbone.history.start();
  }
});

export default Router;
