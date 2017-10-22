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

// Renaming Files //

// // Rename Existing File using the rename() method
//
// var fs = require('fs');
//
// fs.rename('../demos/fileToRename.txt', '../demos/renamedFile.txt', function(err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });


////////////////////

// URL Module //

// // Parsing Address
// var url = require('url');
//
// var addr = 'http://localhost:8080/default.htm?year=2017&month=october';
//
// var q = url.parse(addr, true);
//
// console.log(q.host); // return the host
// console.log(q.pathname); // return the pathname
// console.log(q.search); // return the search query
//
// var qdata = q.query; // return search query as object
// console.log(qdata.month); // return the month


//////////////////

// Combining File System with Parse //

// Server a requested file

// // Require the modules
// var http = require('http');
// var url = require('url');
// var fs = require('fs');
//
// // Create the server
// http.createServer(function(req, res) {
//   // Parse the query
//   var q = url.parse(req.url, true);
//   // Define the file
//   var filename = "../demos/" + q.pathname;
//   // Read the file
//   fs.readFile(filename, function(err, data) {
//     if(err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


//////////////////


// Node Package Manager //

// // Require Modules
// var http = require('http');
// var uc = require('upper-case');
//
// // Create Server
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // Convert to Upper-Case
//   res.write(uc("Hello There!"));
//   res.end();
// }).listen(8080);


////////////////////


// Events //

// var fs = require('fs');
// var rs = fs.createReadStream('../demos/demoFile1.html');
// // Trigger event when file is opened
// rs.on('open', function() {
//   console.log('The File is Open!');
// });



// Emitting and Handling Events //

// // Require events module
// var events = require('events');
//
// // Create new event-emitter object
// var eventEmitter = new events.EventEmitter();
//
// // Create event-handler
// var eventHandler = function() {
//   console.log('Beep, Beep!!!');
// };
//
// // Assign event-handler to event
// eventEmitter.on('car-beep', eventHandler);
//
// // Fire the event
// eventEmitter.emit('car-beep');



/////////////////

// Uploading Files //

// npm install formidable
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req, res) {

  if (req.url == '/fileupload') {
    // Parse the uploaded file
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      // Save file to new location
      var oldpath = files.filetoupload.path;
      var newpath = '../demos/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function(err) {
        if (err) throw err;
        res.write('File Uploaded!');
        res.end();
      });
    });
  } else {
    // Create and HTML Form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
