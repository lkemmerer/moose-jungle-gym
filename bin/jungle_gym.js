var bricks = require('bricks');
var routes = require('./../src/routes');

var server = routes.setupHandlers(new bricks.appserver()).createServer();
server.listen(3000);
