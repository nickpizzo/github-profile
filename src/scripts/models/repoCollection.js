import Backbone from 'backbone';
import Repo from './singleRepo';

const RepoCollection = Backbone.Collection.extend({
  url: 'https://api.github.com/users/ambethia/repos',
  model: Repo
});

export default RepoCollection;

window.RepoCollection = RepoCollection;
