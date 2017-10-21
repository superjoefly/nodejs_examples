// var http = require('http');
//
// // Require Date-Time Module
// var dt = require('./modules/date-time.js');
//
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


///////////////////


// // Read Query String //
//var http = require('http');
//
// http.createServer(function(req, res) {
//   // content type
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // read/write the query-string
//   res.write(req.url);
//   // end response
//   res.end();
//   // listen on port 8080
// }).listen(8080);


//////////////////////


// // Splitting the Query String
// var http = require('http');
// var url = require('url');
//
// http.createServer(function(req, res) {
//   // content type
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // parse the query
//   var q = url.parse(req.url, true).query;
//   // split the query
//   var txt = q.year + " " + q.month;
//   // end response
//   res.end(txt);
//   // listen on port 8080
// }).listen(8080);


//////////////////////


// Reading Files


// // Read HTML File
// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(req, res) {
//   // Read the file
//   fs.readFile('../demos/demoFile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // Write the data
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);


///////////////////


// Creating Files //


// // Create a New File using appendFile() method
// var fs = require('fs');
//
// fs.appendFile('../demos/newFile1.txt', 'New File Content!', function(err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// // Create a New File using open() method
// var fs = require('fs');
//
// fs.open('../demos/newFile2.txt', 'w', function(err, file) {
//   if (err) throw err;
//   console.log('New File Saved!');
// });


// // Create a New File using writeFile() method
// var fs = require('fs');
//
// fs.writeFile('../demos/newFile3.txt', 'New File Content!', function(err) {
//   if (err) throw err;
//   console.log('New File Saved!');
// });


////////////////////


// Updating Files //


// // Update Existing File using appendFile() method
// var fs = require('fs');
//
// fs.appendFile('../demos/newFile1.txt', ' This is my new text!', function(err) {
//   if (err) throw err;
//   console.log('File Updated!');
// });


// // Replace Existing File using writeFile() method
// var fs = require('fs');
//
// fs.writeFile('../demos/newFile3.txt', 'This is a new, updated file!', function(err) {
//   if (err) throw err;
//   console.log('File Replaced and Updated!');
// });


////////////////////


// Deleting Files //

// // Delete File
// var fs = require('fs');
//
// fs.unlink('../demos/newFile2.txt', function(err) {
//   if (err) throw err;
//   console.log('File Deleted!');
// });


///////////////////

// Renaming Files

// Rename Existing File using the rename() method

var fs = require('fs');

fs.rename('../demos/fileToRename.txt', '../demos/renamedFile.txt', function(err) {
  if (err) throw err;
  console.log('File Renamed!');
});
