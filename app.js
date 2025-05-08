const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  // process.exit();---->should not be avoided as it hard shutthe server
});

server.listen(3000);
