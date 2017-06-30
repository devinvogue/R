import Ember from 'ember';

export default Ember.Component.extend({

  tagName:    'div',
  classNames: 'btn-toolbar-affix',

  attributeBindings: [
    'dataSpy:data-spy',
    'dataOffsetTop:data-offset-top'
  ],

  dataSpy:         'affix',
  dataOffsetTop:    0,
  dataOffsetBottom: null,

  didInsertElement: function() {
    var options = {
      offset: {
        top:    this.get('dataOffsetTop'),
        bottom: this.get('dataOffsetBottom')
      }
    };
    this.$().affix(options);
  }

});
