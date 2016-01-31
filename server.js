var thrift = require('thrift');
var DummyService = require('./gen-nodejs/DummyService');
var handlers = require('./lib/handlers');

var server = thrift.createServer(DummyService, handlers);
server.listen(9090);
