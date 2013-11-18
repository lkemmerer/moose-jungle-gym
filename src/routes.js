var forms = require('./routes/form');
var randomElements = require('./routes/random_elements');

exports.setupHandlers = function setupHandlers(appServer) {
  appServer.addEventHandler('route.fatal', function (error) { console.log("FATAL: " + error) });
  appServer.addRoute("/elements", randomElements.getElements);
  appServer.addRoute("/form$", appServer.plugins.request, { section: "pre" });
  appServer.addRoute("/form$", forms.display);

  appServer.addRoute(".+", appServer.plugins.filehandler, { basedir: "./public" });
//  appServer.addRoute(".+", appServer.plugins.fourohfour);

  appServer.addRoute(".+", appServer.plugins.loghandler, { section: 'final', filename: "./logs/access.log" });

  return appServer;
};
