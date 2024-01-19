const fs = require("fs");
let text = fs.readFileSync("roni.txt","utf-8");
console.log("the content of the these file is");
text.replace("hello","fast");
console.log(text);
console.log("creating a new file")
fs.writeFileSync("roni.txt",text);