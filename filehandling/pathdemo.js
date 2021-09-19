// import express from "express";
// import fs from "fs";


const path = require('path');


console.log(__filename);

console.log(path.basename(__filename));

//current directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create a object
console.log(path.parse(__filename));

//access specific object
console.log(path.parse(__filename).base);

//concatenate the path
console.log(path.join(__dirname,'testPath/hello.html'));


