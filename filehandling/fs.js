//File Stream module
// import express from "express";
// import fs from "fs";

const fs = require('fs');
const path = require('path');


//create a timestamp
const start = Date.now();

var date = new Date();
var month = date.getMonth() + 1;
month = (month < 10 ? '0' : '') + month;
var day = date.getDate();
day = (day < 10 ? '0' : '') + day;
var filename = date.getFullYear() + '-' + month + '-' + day + '.txt';



//create a folder
// fs.mkdir(path.join(__dirname, '/test'),{}, err => {
// if(err)  throw err;
// console.log('folder created');
// });


var dir = './file';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Directory not exist");
    fs.writeFileSync(`./file'/${filename}`,`${start}`, err => {
        if(err)  throw err;
        console.log('File created');
    })

}
else{
    console.log("Directory already exist");
}

// fs.writeFile(path.join(__dirname, '/test', 'testfile.txt'),'welcome', err => {
//     if(err)  throw err;
//     console.log('File created');
//     fs.appendFile(path.join(__dirname, '/test', 'testfile.txt'),'to my app', err =>{
//         if(err)  throw err;
//         console.log('Appended'); 
//     })
//     });