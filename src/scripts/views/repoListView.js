import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const RepoListView = Backbone.View.extend({
  template: $('#repoListTemplate').text(),
  render: function () {
    $('main').html(this.template);
  },

  initialize: function () {
    this.listenTo(this.collection, 'change', this.render);
    this.collection.fetch();
  }
});

export default RepoListView;
