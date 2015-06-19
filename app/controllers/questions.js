import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    sortByQuestion: function() {
      sortAscending: true,
      this.set('sortProperties', ['question']);
    },
    sortByAuthor: function() {
      sortAscending: true,
      this.set('sortProperties', ['author']);
    },
    sortByDate: function() {
      sortAscending: true,
      this.set('sortProperties', ['timestamp']);
    }
}
});
