const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>practice</title></head>");
  res.write("<body> David is doing a refresher</body>");
  res.write("</body");
  res.end();
});

server.listen(3000);
