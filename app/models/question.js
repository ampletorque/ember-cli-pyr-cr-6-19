import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.attr('string'),
  timestamp: DS.attr('number'),
  answers: DS.hasMany('answer', {async: true})
});
