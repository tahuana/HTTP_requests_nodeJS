function getHTML (options, callback) {

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


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);