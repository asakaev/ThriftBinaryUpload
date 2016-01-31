var thrift = require('thrift');
var DummyService = require('./gen-nodejs/DummyService');
var fs = require('fs');


var dummyHandler = {
  ping: (result) => {
    console.log('ping()');
    result();
  },

  uploadBinaryData: (filename, data, result) => {
    console.log('filename: ' + filename);
    console.log('data length: ', data.length);

    var path = './uploaded_' + filename;
    fs.writeFile(path, data, (error) => {
      console.log('The file was saved!');

      if (error) {
        result(null, false);
      } else {
        result(null, true);
      }
    });
  }
};


var dummySvcOpt = {
  handler: dummyHandler,
  processor: DummyService,
  protocol: thrift.TBinaryProtocol,
  transport: thrift.TBufferedTransport
};


var serverOpt = {
  services: {
    "/dummy": dummySvcOpt
  }
};


var port = 9090;
thrift.createWebServer(serverOpt).listen(port);
console.log("Http/Thrift Server running on port: " + port);
