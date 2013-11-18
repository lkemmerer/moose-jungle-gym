var arrayUtilities = require('./arrays');

function FormElement(options) {
  var labels = (options['labels'] || []).concat(['']);
  this.label = arrayUtilities.chooseRandom(labels);

  var types = options['types'] || ['text'];
  this.type = arrayUtilities.chooseRandom(types);

  this.name = options['name'];
  this.choices = options['choices'];
};

module.exports = FormElement;
