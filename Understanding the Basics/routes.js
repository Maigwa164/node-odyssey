const fs = require('fs');
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>practice</title></head>');
    res.write(
      '<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  // process.exit();---->should not be avoided as it hard shutthe server

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunck) => {
      console.log(body);
      body.push(chunck);
    });
    return req.on('end', () => {
      const pasrsedBody = Buffer.concat(body).toString();
      const message = pasrsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title> </head>');
  res.write('<body ><h1>Hello from my Node server</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   text: 'multiple value',
// };

exports.handler = requestHandler;
exports.text = 'Random text';
