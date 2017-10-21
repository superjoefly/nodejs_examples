var http = require('http');

// Require Date-Time Module
var dt = require('./modules/date-time.js');

// // Use Custom Module //
// http.createServer(function(req, res) {
//   // content type
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // use custom module
//   res.write("The current date and time are: " + dt.myDateTime());
//   // end response
//   res.end();
//   // listen on port 8080
// }).listen(8080);




// // Read Query String //
// http.createServer(function(req, res) {
//   // content type
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // read/write the query-string
//   res.write(req.url);
//   // end response
//   res.end();
//   // listen on port 8080
// }).listen(8080);




// Splitting the Query String
http.createServer(function(req, res) {
  // content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  // read/write the query-string
  res.write(req.url);
  // end response
  res.end();
  // listen on port 8080
}).listen(8080);
