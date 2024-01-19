const http = require('http');
const fs = require('fs');
//Now we will make random localhost and port to listen as follows-

const hostname = '127.0.0.1';
const port = 3000;
//We will now create a server and gives it an arrow function as follows-

const server = http.createServer((req, res)=>{
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(‘Hello World’);
//And finally, we will make the port to listen-

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
//After executing this, we have to go to tut67 > index.js as follows-




//Now to get the requests of different pages, we make their files and read them as follows-

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')
//We will now make 4 different files like index.html, about.html, services.html, and contact.html. In index.html file, we will some basic HTML and serve the following file back in index.js as follows-

res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
res.end(home);
