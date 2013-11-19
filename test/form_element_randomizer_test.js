var vows = require('vows'),
    assert = require('assert');

var generator = require('../src/utilities/form_element_randomizer.js');

vows.describe('element randomization').addBatch({
  'can randomize the order of a list of elements in addition to constructing each element into the right API': function(){
    var apple = { label: apple, names: ['a', 'b'] };
    var banana = { label: banana, names: ['n', 'a'], types: ['check', 'goose'], choices: ['a', 'b'] };

    randomized = generator.randomizeElements([apple, banana]);
    assert.lengthOf(randomized, 2)
    randomized.forEach(function(element) { 
      assert.isTrue(element.hasOwnProperty('name'));
      assert.isTrue(element.hasOwnProperty('id'));
      assert.isTrue(element.hasOwnProperty('type'));
      assert.isTrue(element.hasOwnProperty('label'));
      assert.isTrue(element.hasOwnProperty('choices'));
    });
  }
}).export(module);
