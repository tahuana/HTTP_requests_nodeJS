
module.exports = function getHTML (options, callback) {
  var https = require('https');
  var content = "";

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      content += data;
    });
    response.on('end', function() {
      console.log('Response stream complete.');
      callback(content);
    });
  });
};
