import Ember from 'ember';
import layout from '../templates/components/ember-truncate';

export default Ember.Component.extend({
  layout: layout,

  originalHTML: '',
  containerWidth: 0,

  willInsertElement: function() {
    this._super();
    this.set('originalHTML', this.$().html().trim());
  },

  didInsertElement: function() {
    this._super();
    this.set('containerWidth', this.$().outerWidth());
    this.$().truncate();
  },
});
