const http = require('http');
const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;

  if (url === '/') {
  }
});
server.listen(8080);
