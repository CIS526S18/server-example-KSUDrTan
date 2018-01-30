"use strict";

const PORT = 3000;

 // Import HTTP library
const http = require('http');

// Import the fs library
const fs = require('fs');

function handleRequest(req, res) {
    console.log(req.url);

    switch(req.url)
    {
        case '/':
        case '/openhouse.html':
            res.end(fs.readFileSync('openhouse.html'));
            break;
        case '/openhouse.css':
            res.end(fs.readFileSync('openhouse.css'))
            break;
        case '/openhouse.js':
            res.end(fs.readFileSync('openhouse.js'));
            break;
        default:
            res.statusCode = 404;
            res.end("Page Not Found");
        
    }

    /*if(fs.existsSync(path))
    {
        var body = fs.readFileSync(path);
        res.end(body);
    }
    else { res.statusCode = 404; res.edn("File Not Found")}*/

}

// Create the web server
var server = http.createServer(handleRequest);

// Start listening on port 80
server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});