
const fs = require('node:fs');

const filePath = 'Readfile.txt'

function readFile (filePath,cb){
    fs.readFile(filePath, 'utf8' , (err ,data) =>{
        if(err){
            cb(err ,null);
            return;
        }
        cb(null,data);
    })
}

function consoleContent(err,data) {
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log("File content: " , data);
    }
}

readFile(filePath, consoleContent);