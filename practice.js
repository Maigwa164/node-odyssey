/***************practice on files */
// const fs = require('fs');

// fs.writeFileSync('practice.txt', 'recalling the consept');

/*****************practice on res and req */

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);

//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>practice</title></head>");
//   res.write("<body> David is doing a refresher</body>");
//   res.write("</body");
//   res.end();
// });

// server.listen(3000);
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action = "/message" method = "POST"><input = "text" name = "practicetxt"></input><button type ="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });

    req.on('end', () => {
      const pursedBody = Buffer.concat(body).toString();
      console.log(pursedBody);
      const mesg = pursedBody.split('=')[1];
      fs.writeFileSync('practice.txt', mesg);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title> </head>');
  res.write('<body ><h1>Hello from my Node server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
