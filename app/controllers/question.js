import Ember from 'ember';

export default Ember.Controller.extend({

  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var myQuestion = this.get('model');
      myQuestion.save();
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }

});
