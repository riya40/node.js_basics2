const http=require('http')

const fs=require('fs')

const path = require('path')

const server = http.createServer((req,res) =>{
    const filePath= path.join(__dirname,req.url);
    fs.readFile(filePath,'utf8',(err,content)=>{
        if(err){
            if(err.code== 'ENOENT'){
                res.writeHead(404);
                res.end('404 Not Found')    
            }
            else{
                res.writeHead(500);
                res.end('500 Internal Server Error')
            }
        }else{
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end(content);
        }        
    });
});

const port = 8080 ;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});