var http = require("http");
var os = require("os");
var port = 8080;
http.createServer(function(request, response) {
    console.log("New request arrived.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hi, you are visiting " + os.hostname() + "\n");
    response.end();
}).listen(port);
console.log("this is a test");
console.log("Server is running, listening on port "+port+"....");