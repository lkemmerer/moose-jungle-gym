var bricks = require('bricks');
var routes = require('./../src/routes');

var server = routes.setupHandlers(new bricks.appserver()).createServer();
var port = process.env.PORT || 3000;
server.listen(port);
