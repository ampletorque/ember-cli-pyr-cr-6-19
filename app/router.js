import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('recent-answers');
  // this.resource('question', {path: 'questions:question_id'});
  this.resource('new-question');

  this.resource('question', {path: 'question/:question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('answer', {path: 'answers/:answer_id'});
});

export default Router;
