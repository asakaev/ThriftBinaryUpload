var thrift = require('thrift');
var DummyService = require('./gen-nodejs/DummyService');
var handlers = require('./lib/handlers');

var dummySvcOpt = {
  handler: handlers,
  processor: DummyService,
  protocol: thrift.TBinaryProtocol,
  transport: thrift.TFramedTransport
};

var serverOpt = {
  services: {
    '/dummy': dummySvcOpt
  }
};

var port = 9090;
thrift.createWebServer(serverOpt).listen(port);
console.log('Http/Thrift Server running on port: ' + port);
