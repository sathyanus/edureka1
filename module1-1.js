var fs = require("fs");
fs.readFile("hello.txt", function(err,data){
	console.log(data);
});

console.log("end");