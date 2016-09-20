// JavaScript Document
var fs = require("fs");
var http = require("http");

var server = http.createServer(function(req, res){
	console.log("request received");
	
	
	
	res.end("Hello World to Browser");
	
	
});

server.listen(4040, function(err){
	if(!err)
	{
		console.log("Server Started");
	}
});