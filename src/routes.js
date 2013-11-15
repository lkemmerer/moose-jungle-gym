var forms = require('./routes/form');

exports.setupHandlers = function setupHandlers(appServer) {
  appServer.addRoute("/form", appServer.plugins.request, { section: "pre" });
  appServer.addRoute("/form", forms.display);

  appServer.addRoute(".+", appServer.plugins.filehandler, { basedir: "./public" });
//  appServer.addRoute(".+", appServer.plugins.fourohfour);

  appServer.addRoute(".+", appServer.plugins.loghandler, { section: 'final', filename: "./logs/access.log" });

  return appServer;
};
