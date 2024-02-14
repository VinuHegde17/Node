var http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200,{'Content-Type':'text/html'})
   res.write("Welcome back to Node JS");
   res.end(); 
}).listen(3000);
console.log("Port is running at 3000");
