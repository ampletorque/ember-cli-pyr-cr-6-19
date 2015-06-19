import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        text: this.get('answerText'),
        timestamp: new Date().getTime()
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();
      this.set('answerText', null);
      this.transitionToRoute('question', question.id);
    }
  }

});
