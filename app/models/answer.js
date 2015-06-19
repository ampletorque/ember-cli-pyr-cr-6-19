import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  timestamp: DS.attr('number'),
  Question: DS.belongsTo('question', {async: true})
});
