var fs = require("fs");
var http = require("http");

var server = http.createServer(function(req, res){
	console.log("request received");
	response.end("Hello World to Browser")
});

server.listen(4040);