var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Comtent-Type':'text/html'});
    res.end('hello world');
}).listen(8080)