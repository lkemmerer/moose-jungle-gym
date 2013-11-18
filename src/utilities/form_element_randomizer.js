var arrayUtilities = require('./arrays');
var FormElement = require('./form_element');

exports.randomizeElements = function randomizeElements(elementList) {
  var elementOptions = arrayUtilities.shuffle(elementList);
  var randomizedElements = []

  elementOptions.forEach(function(object, index) {
    var element = new FormElement(object);
    randomizedElements.push(element);
  });

  return randomizedElements;
};
