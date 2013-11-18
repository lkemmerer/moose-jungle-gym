var vows = require('vows'),
    assert = require('assert');

var generator = require('../src/utilities/form_element_randomizer.js');

vows.describe('element randomization').addBatch({
  'can randomize the order of a list of elements in addition to constructing each element into the right API': function(){
    var apple = { name: apple, labels: ['a', 'b'] };
    var banana = { name: banana, labels: ['n', 'a'], types: ['check', 'goose'], choices: ['a', 'b'] };

    randomized = generator.randomizeElements([apple, banana]);
    assert.lengthOf(randomized, 2)
    randomized.forEach(function(element) { 
      assert.isTrue(element.hasOwnProperty('name'));
      assert.isTrue(element.hasOwnProperty('type'));
      assert.isTrue(element.hasOwnProperty('label'));
      assert.isTrue(element.hasOwnProperty('choices'));
    });
  }
}).export(module);
