var thrift = require('thrift');
var DummyService = require('./gen-nodejs/DummyService');
var fs = require('fs');


var server = thrift.createServer(DummyService, {
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
});

server.listen(9090);
