var elements = require('./../utilities/elements');
var randomizer = require('./../utilities/form_element_randomizer')

exports.getElements = function getElements(request, response) {
  var randomElements = randomizer.randomizeElements(elements.allTheThings);
  var json = JSON.stringify(randomElements);

  response.statusCode(200);
  response.setHeader('Content-Type', 'application/json');
  response.write(json);
  response.end();
};
