var vows = require('vows'),
    assert = require('assert');

var FormElement = require('../src/utilities/form_element.js');

vows.describe('form element creation').addBatch({
  'selects one from possible types': function() {
    var randomized = new FormElement({name: 'foo', types: ['dog', 'cat', 'jellyfish']});
    assert.isString(randomized.type);
    assert.include(['dog', 'cat', 'jellyfish'], randomized.type);
  },
  'defaults to text input if no type is supplied': function() {
    var randomized = new FormElement([{name: 'foo', label: 'bar'}]);
    assert.equal(randomized.type, 'text');
  },
  'randomly picks a name': function() {
    var randomized = new FormElement({names: ['strawberry', 'grapefruit']});
    assert.isString(randomized.name);
    assert.include(['strawberry', 'grapefruit'], randomized.name);
  },
  'randomly picks an id': function() {
    var randomized = new FormElement({names: ['strawberry', 'grapefruit']});
    assert.isString(randomized.id);
    assert.include(['strawberry', 'grapefruit', ''], randomized.id);
  },
  'passes on label and choices from options': function() {
    var randomized = new FormElement({label: 'fruit', choices: ['strawberry', 'grapefruit']});
    assert.equal(randomized.label, 'fruit');
    assert.deepEqual(randomized.choices, ['strawberry', 'grapefruit']);
  }
}).export(module);
