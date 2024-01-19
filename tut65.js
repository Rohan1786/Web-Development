//synchrons
// line by line execution



//asynchrons
// not a line by line

const fs=require("fs");
let text=fs.readFile("rohan.txt","utf-8",(err,data)=>{
    console.log(err,data);
})
console.log("hello bhai")