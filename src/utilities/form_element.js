var arrayUtilities = require('./arrays');

function FormElement(options) {
  var names = options.names || [];
  this.name = arrayUtilities.chooseRandom(names);
  this.id   = arrayUtilities.chooseRandom(names.concat(['']));

  var types = options.types || ['text'];
  this.type = arrayUtilities.chooseRandom(types);

  this.label = options.label;
  this.choices = options.choices;
}

module.exports = FormElement;
