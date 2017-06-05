function getAndPrintHTML (options) {

  var https = require('https');

  var requestOptions = options;

  var content = "";

  /* Add your code here */
  https.get(requestOptions, function (response) {

      // set encoding of received data to UTF-8
      response.setEncoding('utf8');

      // the callback is invoked when a `data` chunk is received
      response.on('data', function (data) {
        console.log('Chunk Received. Length:', data.length);
        content += data;
      });

      // the callback is invoked when all of the data has been received
      // (the `end` of the stream)
      response.on('end', function() {
        console.log('Response stream complete.');
        console.log("Content: ", content);
      });

    });


}

getAndPrintHTML({
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  });