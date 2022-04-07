const fs = require('fs');
const http = require('http');
const url = require('url');
/////////////////////////////////////
//SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

/////////////////////////////////////
// FILE
//Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOut = `This is what we know about avocado ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('File Written');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) console.log('There is an error!!!');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {
//         console.log('File Written!');
//       });
//     });
//   });
// });
