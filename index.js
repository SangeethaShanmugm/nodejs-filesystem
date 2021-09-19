//File Stream module
import express, { json } from "express";
import { existsSync, mkdirSync, writeFileSync} from 'fs';
import fs from "fs";
const app = express();
const PORT = process.env.PORT || 5000;




app.use(json());

//creating a folder
const createfolder = () =>{
    let dir = './myfiles';
if (!existsSync(dir)) {
    mkdirSync(dir);
    console.log("Directory not exist");
}
    return dir;
};
createfolder();



    // fs.writeFileSync(`./myfiles/${filename}`,`${start} + "Hello"`, (err) => {
    //     if(err)  throw err;
    //     console.log('File created');
    // });
    // console.log(filename);
    // // response.send(filename);

    
app.get("/", (request, response) => {
    response.send("<h1>FileSystem with timestamp</h1>");
  });

  
app.get("/newfile", async (request, response) => {

    
//create a timestamp
const start = Date.now();

let date = new Date();
let month = date.getMonth() + 1;
month = (month < 10 ? '0' : '') + month;
let day = date.getDate();
day = (day < 10 ? '0' : '') + day;
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let filename = date.getFullYear() + "-" + month + "-" + day + "-" + hours +"-"+ minutes + "-" + seconds;
filename += ".txt";

    writeFileSync(`./myfiles/${filename}`, `${start} + "https://github.com/SangeethaShanmugm/File_System/blob/main/index.js" + "https://file-system-using-timestamp.herokuapp.com/"`, (err) => {
        if (err)
            throw err;
        console.log('File created');
    });
    console.log(filename);
    response.send(filename);
  });

  app.get("/listfile", async (request, response) => {

    fs.readdir('./myfiles/', (err, files) => {
       files.forEach((file) => {
      console.log(file);  
    });
    response.send(files);
});
  });

app.listen(PORT, () => console.log("The server connected successfully: ", PORT));