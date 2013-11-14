var forms = require('./routes/form')

exports.setupHandlers = function setupHandlers(appServer) {
  appServer.addRoute("/public/.+", appServer.plugins.filehandler, { basedir: "./public" });

  appServer.addRoute("^/form$", appServer.plugins.request, { section: "pre" });
  appServer.addRoute("^/form$", forms.display);

  appServer.addRoute(".+", appServer.plugins.fourohfour);

  return appServer;
};
