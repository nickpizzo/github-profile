import Backbone from 'backbone';
import Repo from './singleRepo';

const RepoCollection = Backbone.Collection.extend({
  model: Repo,
  url: 'https://api.github.com/users/victoralvarez84/repos'
});


export default RepoCollection;

window.RepoCollection=RepoCollection;
