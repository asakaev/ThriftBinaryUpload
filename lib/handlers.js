var fs = require('fs');


/**
 * @namespace
 */
var handlers = {};


/**
 * @param {Function} callback
 */
handlers.ping = function(callback) {
  console.log('ping()');
  callback();
};


/**
 * @param {string} filename
 * @param {string} data
 * @param {Function} callback
 */
handlers.uploadBinaryData = function(filename, data, callback) {
  console.log('filename: ' + filename);
  console.log('data length (bytes):', data.length);

  var path = './uploaded_' + filename;
  fs.writeFile(path, data, function(error) {
    if (error) {
      console.log('Failed on file save!');
      callback(null, false);
    } else {
      console.log('The file was saved!');
      callback(null, true);
    }
  });
};


module.exports = handlers;
