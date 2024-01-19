const http = require('http');
const { title } = require('process');

const hostname = '1.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  app.set('view engine', 'pug')
  first.pug(title='rohan bhai ki patshala',messsage='welcome to my first page');

});