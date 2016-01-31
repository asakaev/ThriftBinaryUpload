var fs = require('fs');


/**
 * @namespace
 */
var handlers = {};


/**
 * @param {Function} result
 */
handlers.ping = function(result) {
  console.log('ping()');
  result();
};


/**
 * @param {string} filename
 * @param {string} data
 * @param {Function} result
 */
handlers.uploadBinaryData = function(filename, data, result) {
  console.log('filename: ' + filename);
  console.log('data length: ', data.length);

  var path = './uploaded_' + filename;
  fs.writeFile(path, data, function(error) {
    console.log('The file was saved!');

    if (error) {
      result(null, false);
    } else {
      result(null, true);
    }
  });
};


module.exports = handlers;
