import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('ember-truncate', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it stores the original html string as a property', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject({
    template: Ember.Handlebars.compile('test')
  });

  this.render();
  assert.equal(component.get('originalHTML'), 'test');
});

test('it trims the original html string', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject({
    template: Ember.Handlebars.compile(' test ')
  });

  this.render();
  assert.equal(component.get('originalHTML'), 'test');
});

test('it stores its container width', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject({
    template: Ember.Handlebars.compile('A very simple string that should be over 100 pixels.')
  });

  Ember.$('#ember-testing').css({maxWidth: 100});

  this.render();
  assert.equal(component.get('containerWidth'), 100);
});
