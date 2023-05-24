const readFile = require('fs').promises.readFile; ///import the module fs

readFile('file.txt','utf8')
.then(data =>{
        console.log('content written in file:',data); //display the data
    })
      .catch(err =>{
        console.err('error reading',err)
      });
    
