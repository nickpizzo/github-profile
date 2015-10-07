import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const RepoView = Backbone.View.extend({
  template: _.template($('#repoTemplate').text()),
  render: function () {
    _.each(this.)
    $('main').html(this.template(this.model.attributes))
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.model.fetch();
  }
});

export default RepoView;
