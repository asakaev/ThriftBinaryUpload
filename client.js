var thrift = require('thrift');
var DummyService = require('./gen-nodejs/DummyService');
var fs = require('fs');

var filename = 'image.jpg';
var path = './' + filename;
var file = fs.readFileSync(path);

var connection = thrift.createConnection('localhost', 9090, {
  transport: thrift.TBufferedTransport(),
  protocol: thrift.TBinaryProtocol()
});

connection.on('error', (err) => assert(false, err));
var client = thrift.createClient(DummyService, connection);

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

  connection.end();
});
