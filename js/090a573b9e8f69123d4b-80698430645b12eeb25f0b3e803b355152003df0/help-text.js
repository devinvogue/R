// components/help-text.js

import Ember from 'ember';

export default Ember.Component.extend({

  action: 'doHelpForTopic',
  helpText: 'Need help?',
  text: null,
  topic: null,

  tagName: 'help-text',
  classNames: ['help-text'],

  layout: Ember.Handlebars.compile('{{text}} <a href="#" class="help-link nyi" {{action "doHelp"}}>{{helpText}}</a>'),

  actions: {

    doHelp: function() {
      this.sendAction('action', this.topic);
    }

  }

});
