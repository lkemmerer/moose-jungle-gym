var vows = require('vows'),
    assert = require('assert');

var arrayUtil = require('../src/utilities/arrays.js');

vows.describe('Array randomization').addBatch({
  'Random selection': {
    'returns one element of the array passed in': function() {
      var array = [1, 4, 23, 42];
      randomizedSelection = arrayUtil.chooseRandom(array);
      assert.include(array, randomizedSelection);
    }
  },
  'Shuffling an array': {
    'returns all elements of the array passed in, in a (hopefully) different order': function() {
      for (var randomArray=[],i=0;i<40;++i) { randomArray[i]=i; }
      arrayUtil.shuffle(randomArray);

      for (var orderedArray=[],i=0;i<40;++i) { orderedArray[i]=i; }
      assert.lengthOf(randomArray, orderedArray.length);
      assert.notDeepEqual(randomArray, orderedArray);
    }
  }
}).export(module);
