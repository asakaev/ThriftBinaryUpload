var thrift = require('thrift');
var DummyService = require('./gen-nodejs/DummyService');
var fs = require('fs');

var options = {
  transport: thrift.TFramedTransport,
  protocol: thrift.TCompactProtocol,
  path: '/dummy',
  headers: {'Connection': 'close'},
  https: false
};

var connection = thrift.createHttpConnection('localhost', 9090, options);
connection.on('error', (err) => assert(false, err));
var client = thrift.createClient(DummyService, connection);

var filename = 'image.jpg';
var path = './' + filename;
var file = fs.readFileSync(path);

client.ping((error) => {
  console.log('ping()');

  if (error) {
    console.log(error);
  }
});

var startTime = +new Date();
client.uploadBinaryData(filename, file, (error, response) => {
  console.log(error || response);

  var kb = Math.floor(file.length / 1000);
  console.log('uploadBinaryData(): ' + kb + 'kb in ' +
      (+new Date() - startTime) + 'ms');
});
