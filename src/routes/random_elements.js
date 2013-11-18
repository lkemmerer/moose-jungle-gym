var elements = require('./../utilities/elements');
var randomizer = require('./../utilities/form_element_randomizer')

exports.getElements = function getElements(request, response) {
  var randomElements = randomizer.randomizeElements(elements.allTheThings);
  var json = JSON.stringify(randomElements);
  response.write(json);
  response.end();
};
