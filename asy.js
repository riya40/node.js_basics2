const readFile = require('fs').promises.readFile;

async function readfile(){
    try{
        const data = await readFile('file.txt','utf8')
        console.log('content written in file:',data); //display the data
    }
    catch(err){
        console.err('error reading',err)
      };
    } 
;

readfile()